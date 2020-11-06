var map, url, options = {}, isMvt = false;
var overlayGroup = new ol.layer.Group({
    title: 'result',
    layers: []
});
var baseGroup = new ol.layer.Group({
    title: 'base',
    layers: []
});
var layerObj, mapName, projection;

function init(params) {
    url = params.url;
    isMvt = params.isMvt ? params.isMvt : false;
    if (params.callback) {
        new ol.supermap.MapService(url).getMapInfo(params.callback);
    } else {
        new ol.supermap.MapService(params.url).getMapInfo(function (result) {
            addlayer(result.result, params);
        });
    }
}

function addresult(url, title) {
    options.url = url;
    options.cacheEnabled = false;
    let layer = new ol.layer.Tile({
        title: title ? title : "result",
        source: new ol.source.TileSuperMapRest(options)
    });
    overlayGroup.getLayers().clear();
    overlayGroup.getLayers().push(layer);
}

function addlayer(result, params) {
    if (!result)
        return;
    var layername = params.layername;
    var layerGroup = params.layerGroup;
    var opacity = params.opacity;
    var setMapView = function (view) {
        map = new ol.Map({
            target: 'map',
            view: view,
            layers: [baseGroup, overlayGroup]
        });
        let layerSwitcher = new ol.control.LayerSwitcher();
        map.addControl(layerSwitcher);
        var control = new ol.supermap.control.ScaleLine();
        map.addControl(control)
    };
    let lon = 0, lat = 0;
    let view;
    let originResult = result;
    let visableResolution = calVisableResolutions(originResult);
    let attrib = 'Map data &copy; 2013 Lantm?teriet, Imagery &copy; 2013 SuperMap';
    projection = 'EPSG:3857';
    let zoom = 0;
    options.maxZoom = 18;
    options.minZoom = 0;
    options.attribution = attrib;
    if (originResult.overlapDisplayed) {
        options.overlapDisplayed = originResult.overlapDisplayed;
    }
    let envelope;

    if (originResult.prjCoordSys) {
        let resolution;
        if (originResult.prjCoordSys.coordUnit) {
            resolution = scaleToResolution(originResult.scale, 96, originResult.prjCoordSys.coordUnit);
        }

        if (isMvt) {
            var styleJson = getVectorStyle();
            // 如果style.json中有indexbounds，那么就根据indexbounds计算地图的缩放层级zoom
            if (styleJson && styleJson.metadata && styleJson.metadata.indexbounds) {
                var indexbounds = styleJson.metadata.indexbounds;
                if (indexbounds.length == 4) {
                    envelope = {};
                    envelope.left = indexbounds[0];
                    envelope.bottom = indexbounds[1];
                    envelope.right = indexbounds[2];
                    envelope.top = indexbounds[3];
                }
            } else {
                envelope = getProjectionExtent();
            }
        }

        if (visableResolution.length == 0) {
            if (!envelope) {
                envelope = getProjectionExtent();
            }
            if (!envelope) {
                envelope = originResult.bounds;
            }
            visableResolution = getStyleResolutions(envelope);
            let scales = getScales(envelope, originResult.prjCoordSys.coordUnit);
            if (originResult.scale) {
                let temp;
                for (let j = 0; j < scales.length; j++) {
                    if (j == 0) {
                        temp = Math.abs(originResult.scale - scales[j]);
                    }
                    if (temp > Math.abs(originResult.scale - scales[j])) {
                        temp = Math.abs(originResult.scale - scales[j]);
                        zoom = j;
                    }
                }
            }
        } else {
            if (resolution) {
                let temp;
                for (let j = 0; j < visableResolution.length; j++) {
                    if (j == 0) {
                        temp = Math.abs(resolution - visableResolution[j]);
                    }
                    if (temp > Math.abs(resolution - visableResolution[j])) {
                        temp = Math.abs(resolution - visableResolution[j]);
                        zoom = j;
                    }
                }
            }
        }
        if (isMvt && originResult.prjCoordSys.epsgCode && originResult.prjCoordSys.epsgCode != -1000 && originResult.prjCoordSys.epsgCode != -1) {
            projection = 'EPSG:' + originResult.prjCoordSys.epsgCode;
        } else if (originResult.prjCoordSys.epsgCode == "4326" || originResult.prjCoordSys.type == "PCS_EARTH_LONGITUDE_LATITUDE") {
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

    let tileGrid;
    if (visableResolution.length > 0) {
        tileGrid = new ol.tilegrid.TileGrid({
            extent: [originResult.bounds.left, originResult.bounds.bottom, originResult.bounds.right, originResult.bounds.top],
            resolutions: visableResolution
        });
    } else {
        tileGrid = ol.source.TileSuperMapRest.optionsFromMapJSON(url, originResult).tileGrid;
        visableResolution = tileGrid.getResolutions();
    }


    view = new ol.View({
        center: params.center || [(originResult.bounds.left + originResult.bounds.right) / 2, (originResult.bounds.bottom + originResult.bounds.top) / 2],
        zoom: params.zoom || zoom,
        projection: projection,
        resolutions: visableResolution
    });

    if (!map)
        setMapView(view);
    else {
        map.getView().setCenter([(originResult.bounds.left + originResult.bounds.right) / 2, (originResult.bounds.bottom + originResult.bounds.top) / 2]);
        map.getView().setZoom(zoom);
    }


    options.url = url;
    options.tileGrid = tileGrid;
    options.cacheEnabled = false;
    let layer;
    if (isMvt) {
        var format = new ol.format.MVT({
            featureClass: ol.Feature
        });
        format.defaultDataProjection = new ol.proj.Projection({
            code: projection,
            units: ol.proj.Units.TILE_PIXELS
        });

        var origin = [envelope.left, envelope.top];
        var styleResolutions = getStyleResolutions(envelope);
        var newstyle = new ol.supermap.MapboxStyles({
            style: getVectorStyle(),
            source: originResult.name,
            resolutions: styleResolutions,
            map: map
        });
        newstyle.on('styleloaded', function () {
            layer = new ol.layer.VectorTile({
                title: layername,
                //设置避让参数
                declutter: true,
                source: new ol.source.VectorTileSuperMapRest({
                    url: url,
                    projection: projection,
                    tileGrid: new ol.tilegrid.TileGrid({
                        resolutions: styleResolutions,
                        origin: origin,
                        tileSize: 512
                    }),
                    tileType: "ScaleXY",
                    format: format
                }),
                style: newstyle.getStyleFunction()
            });
            if (layerGroup === "result") {
                overlayGroup.getLayers().clear();
                overlayGroup.getLayers().push(layer);
            } else if (layerGroup === "base") {
                baseGroup.getLayers().push(layer);
            }
        });
    } else {
        layer = new ol.layer.Tile({
            opacity: opacity || 1,
            title: layername,
            source: new ol.source.TileSuperMapRest(options)
        });

        if (layerGroup === "result") {
            overlayGroup.getLayers().clear();
            overlayGroup.getLayers().push(layer);
        } else if (layerGroup === "base") {
            baseGroup.getLayers().push(layer);
        }
    }

}

function Tianditu() {
    map = new ol.Map({
        target: 'map',
        layers: [baseGroup, overlayGroup],
        view: new ol.View({
            center: [120.14805, 30.26971],
            projection: ol.proj.get("EPSG:4326"),
            zoom: 3,
            maxZoom: 17,
            minZoom: 1
        })
    });
    let layerSwitcher = new ol.control.LayerSwitcher();
    map.addControl(layerSwitcher);
    var control = new ol.supermap.control.ScaleLine();
    map.addControl(control);
    let layer = new ol.layer.Tile({
        opacity: 1,
        title: "天地图",
        source: new ol.source.Tianditu({
            key: "25c67c1243ee09895f3775fd8c5c0421",
            layerType: 'ter'
        })
    });
    baseGroup.getLayers().push(layer);
}

function getProjection(epsgCodeStr, bounds, resolutions) {
    return new L.Proj.CRS(epsgCodeStr, "", {
        bounds: L.bounds([bounds.left, bounds.bottom], [bounds.right, bounds.top]),
        resolutions: resolutions,
        origin: [bounds.left, bounds.top]
    });
}

function getProjectionExtent() {
    let requestUrl = url;
    requestUrl = requestUrl + "/" + "prjCoordSys/projection/extent.json";
    let commit = new Requester();
    let extent = commit.sendRequestWithResponse(requestUrl, "GET", null);
    if (extent) {
        let result = eval('(' + extent + ')');
        if (result && result.left && result.right && result.top && result.bottom) {
            return result;
        }
    }
    return null;

}


function getVectorStyle() {
    var requestUrl = url;
    requestUrl = requestUrl + "/" + "tileFeature/vectorstyles.json?type=MapBox_GL&styleonly=true";
    var commit = new Requester();
    try {
        var style = commit.sendRequestWithResponse(requestUrl, "GET", null);
        return JSON.parse(style);
    } catch (ex) {
        return null;
    }
}


function scaleToResolution(scale, dpi, mapUnit) {
    let inchPerMeter = 1 / 0.0254;
    let meterPerMapUnitValue = getMeterPerMapUnit(mapUnit);
    let resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
    resolution = 1 / resolution;
    return resolution;
}

function resolutionToScale(resolution, dpi, mapUnit) {
    let inchPerMeter = 1 / 0.0254;
    // 地球半径。
    let meterPerMapUnit = getMeterPerMapUnit(mapUnit);
    let scale = resolution * dpi * inchPerMeter * meterPerMapUnit;
    scale = 1 / scale;
    return scale;
}

function getMeterPerMapUnit(mapUnit) {
    let earchRadiusInMeters = 6378137;// 6371000;
    let meterPerMapUnit;
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
function getStyleResolutions(bounds) {
    let styleResolutions = [];
    let temp = Math.abs(bounds.left - bounds.right) / 512;
    for (let i = 0; i < 22; i++) {
        if (i == 0) {
            styleResolutions[i] = temp;
            continue;
        }
        temp = temp / 2;
        styleResolutions[i] = temp;
    }
    return styleResolutions;
}

function getScales(bounds, coordUnit) {
    let resolution0 = Math.abs(bounds.left - bounds.right) / 512;
    let temp = resolutionToScale(resolution0, 96, coordUnit);
    let scales = [];
    for (let i = 0; i < 22; i++) {
        if (i == 0) {
            scales[i] = temp;
            continue;
        }
        temp = temp * 2;
        scales[i] = temp;
    }
    return scales;
}

let Requester = function () {
    this.commit = null;
    try {
        this.commit = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (ex) {
        try {
            this.commit = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (ex) {
            this.commit = null;
        }
    }
    if (!this.commit && typeof XMLHttpRequest != "undefined") {
        this.commit = new XMLHttpRequest();
    }
    /**
     * 发送异步请求。
     */
    this.sendRequest = function (url, method, entry, onComplete) {
        let xhr = this.commit;
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.onreadystatechange = function () {
            let readyState = xhr.readyState;
            if (readyState == 4) {
                let responseText = xhr.responseText;
                onComplete(responseText);

                xhr.onreadystatechange = function () {
                };
                xhr = null;
            }
        };
        xhr.send(entry);
    };
    /**
     * 发送一个同步请求。
     */
    this.sendRequestWithResponse = function (url, method, entry) {
        let xhr = this.commit;
        xhr.open(method, encodeURI(url), false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        try {
            xhr.send(entry);
        } catch (error) {
            //json语法错误，原因是服务端还没有创建管理员账户或正在初始化
            return {"errorMsg": error.message};
        }
        return xhr.responseText;
    }
};

function calVisableResolutions(mapContent) {
    var hasVisibleScales = mapContent.visibleScales;
    var hasViewBounds = mapContent.viewBounds;
    var hasViewer = mapContent.viewer;
    var hasMapUnit = mapContent.prjCoordSys && mapContent.prjCoordSys.coordUnit;
    if (hasVisibleScales && hasViewBounds && hasViewer && hasMapUnit) {
        var dpi = mapContent.dpi;
        var mapUnit = mapContent.prjCoordSys.coordUnit;
        var visableResolutions = [];
        for (var i = 0; i < mapContent.visibleScales.length; i++) {
            visableResolutions[i] = scaleToResolution(mapContent.visibleScales[i], dpi, mapUnit);
        }
        return visableResolutions;
    } else {
        return [];
    }
}


function scaleToResolution(scale, dpi, mapUnit) {
    // double inchPerMeter = 1 / 2.5399999918E-2;
    var inchPerMeter = 1 / 0.0254;
    var meterPerMapUnitValue = getMeterPerMapUnit(mapUnit);
    var resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
    resolution = 1 / resolution;

    return resolution;
}

/**
 * 根据地图单位计算米。
 * @param mapUnit 地图单位。
 * @return 米。
 */
function getMeterPerMapUnit(mapUnit) {
    var earchRadiusInMeters = 6378137;// 6371000;
    var meterPerMapUnit;
    if (mapUnit === "METER") {
        meterPerMapUnit = 1;
    } else if (mapUnit === "DEGREE") {
        // 每度表示多少米。
        meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
    } else if (mapUnit === "KILOMETER") {
        meterPerMapUnit = 1.0E-3;
    } else if (mapUnit === "INCH") {
        meterPerMapUnit = 1 / 2.5399999918E-2;
    } else if (mapUnit === "FOOT") {
        meterPerMapUnit = 0.3048;
    }
    return meterPerMapUnit;
}