var map, layer, view, options,prjCoordSys,epsgcode;
var lon=0,lat=0,zoomlevel=2,initZoomToScale;
var envelope;
var queryString = "";

function init(url) {
    new ol.supermap.MapService(url)
        .getMapInfo(function(result){
            loadMap(result.result);
            //doSomething
        })

}

function loadMap(originResult) {
    var visibleScales = originResult.visibleScales;
    var visableResolution = [];
    var prjParamter =  "";
    var attrib = 'Map data &copy; 2013 Lantm?teriet, Imagery &copy; 2013 SuperMap';
    var projection = 'EPSG:3857';
    var maxZoom = 18;
    var zoom = 0;
    options = {};
    options.maxZoom = 18;
    options.minZoom = 0;
    options.attribution = attrib;
    if(originResult.overlapDisplayed){
        options.overlapDisplayed=originResult.overlapDisplayed;
    }
    var envelope;

    if(originResult.prjCoordSys){
        var resolution;
        if(originResult.prjCoordSys.coordUnit){
            resolution = scaleToResolution(originResult.scale, 96, originResult.prjCoordSys.coordUnit);
        }


        if(visableResolution.length == 0){
            if(!envelope) {
                envelope = originResult.bounds;
            }
            visableResolution = getStyleResolutions(envelope);
            var scales = getScales(envelope, originResult.prjCoordSys.coordUnit);
            if(originResult.scale){
                var temp;
                for(var j = 0; j < scales.length; j++){
                    if(j == 0) {
                        temp = Math.abs(originResult.scale - scales[j]);
                    }
                    if(temp > Math.abs(originResult.scale - scales[j])){
                        temp = Math.abs(originResult.scale - scales[j]);
                        zoom = j;
                    }
                }
            }
        } else {
            if(resolution){
                var temp;
                for(var j = 0; j < visableResolution.length; j++){
                    if(j == 0) {
                        temp = Math.abs(resolution - visableResolution[j]);
                    }
                    if(temp > Math.abs(resolution - visableResolution[j])){
                        temp = Math.abs(resolution - visableResolution[j]);
                        zoom = j;
                    }
                }
            }
        }
        if (originResult.prjCoordSys.epsgCode == "4326" || originResult.prjCoordSys.type == "PCS_EARTH_LONGITUDE_LATITUDE") {
            lon = (originResult.bounds.left + originResult.bounds.right) / 2;
            lat = (originResult.bounds.bottom + originResult.bounds.top) / 2;
            projection = 'EPSG:4326';
        } else if (originResult.prjCoordSys.epsgCode == "3857" || originResult.prjCoordSys.type == "PCS_SPHERE_MERCATOR") {
            projection = 'EPSG:3857';
        } else if (originResult.prjCoordSys.type == "PCS_NON_EARTH") {
            projection = new ol.proj.Projection({
                extent: [originResult.bounds.left, originResult.bounds.bottom, originResult.bounds.right, originResult.bounds.top],
                units: 'm',
                code: '0'
            });
        } else {
            projection = 'EPSG:3857';
        }

    }

    var tileGrid;
    if(visableResolution.length > 0) {
        tileGrid = new ol.tilegrid.TileGrid({
            extent: [originResult.bounds.left, originResult.bounds.bottom, originResult.bounds.right, originResult.bounds.top],
            resolutions: visableResolution
        });
    }else{
        tileGrid = ol.source.TileSuperMapRest.optionsFromMapJSON(url, originResult).tileGrid;
        visableResolution = tileGrid.getResolutions();
    }

    view = new ol.View({
        center: [(originResult.bounds.left + originResult.bounds.right) / 2, (originResult.bounds.bottom + originResult.bounds.top) / 2],
        zoom: zoom,
        projection: projection,
        resolutions: visableResolution
    });


    map = new ol.Map({
        target: 'map',
        view: view
    });
    var format = new ol.format.MVT({
        featureClass: ol.Feature
    });
    format.defaultDataProjection = new ol.proj.Projection({
        code: projection,
        units: ol.proj.Units.TILE_PIXELS
    });


    options.url = url;
    options.tileGrid = tileGrid;
    layer = new ol.layer.Tile({
        source: new ol.source.TileSuperMapRest(options)
    });
    map.addLayer(layer);

}

function getProjection(epsgCodeStr, bounds, resolutions) {
    return new L.Proj.CRS(epsgCodeStr,"",{
        bounds: L.bounds([bounds.left, bounds.bottom], [bounds.right, bounds.top]),
        resolutions: resolutions,
        origin: [bounds.left, bounds.top]
    });
}

function showScale(){
    var scale = layer.getScale();
    scale = parseInt(1 / scale * 10) / 10;
    var scaleText = document.getElementById("scaleText");
    scaleText.value="比例尺： 1/" + scale;
}

function showCoords(){
    var mapdiv = document.getElementById("map");
    var coordsText = document.getElementById("coordsText");
    mapdiv.onmousemove = function(e){
        e = e||window.event;
        var point = map.mouseEventToLatLng(e);
        coordsText.value=parseFloat(point.lat).toFixed(4)+","+parseFloat(point.lng).toFixed(4);
    }
}



function setPrjCoordSys() {// 支持动态投影，解析url相应参数
}

function scaleToResolution(scale, dpi, mapUnit) {
    var inchPerMeter = 1 / 0.0254;
    var meterPerMapUnitValue = getMeterPerMapUnit(mapUnit);
    var resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
    resolution = 1 / resolution;
    return resolution;
}

function resolutionToScale(resolution, dpi, mapUnit) {
    var inchPerMeter = 1 / 0.0254;
    // 地球半径。
    var meterPerMapUnit = getMeterPerMapUnit(mapUnit);
    var scale = resolution * dpi * inchPerMeter * meterPerMapUnit;
    scale = 1 / scale;
    return scale;
}

function getMeterPerMapUnit(mapUnit) {
    var earchRadiusInMeters = 6378137;// 6371000;
    var meterPerMapUnit;
    if (mapUnit == "METER") {
        meterPerMapUnit = 1;
    } else if (mapUnit == "DEGREE") {
        // 每度表示多少米。
        meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
    } else if (mapUnit == "KILOMETER") {
        meterPerMapUnit = 1.0E-3;
    } else if (mapUnit == "INCH") {
        meterPerMapUnit = 1 / 2.5399999918E-2;
    } else if (mapUnit == "FOOT") {
        meterPerMapUnit = 0.3048;
    }
    return meterPerMapUnit;
}

//由于mvt的style渲染必须要传一个完整的分辨率数组，这里计算出一个从0开始的分辨率数组
function getStyleResolutions(bounds){
    var styleResolutions = [];
    var temp = Math.abs(bounds.left - bounds.right)/ 512;
    for(var i = 0;i < 22;i++){
        if(i == 0){
            styleResolutions[i] = temp;
            continue;
        }
        temp = temp / 2;
        styleResolutions[i] = temp;
    }
    return styleResolutions;
}

function getScales(bounds, coordUnit){
    var resolution0 = Math.abs(bounds.left - bounds.right)/ 512;
    var temp = resolutionToScale(resolution0, 96, coordUnit);
    var scales = [];
    for(var i = 0;i < 22;i++){
        if(i == 0){
            scales[i] = temp;
            continue;
        }
        temp = temp * 2;
        scales[i] = temp;
    }
    return scales;
}
