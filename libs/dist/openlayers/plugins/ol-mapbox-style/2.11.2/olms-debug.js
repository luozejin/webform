/*!
 * 
 *     ol-mapbox-style
 *     Copyright 2016-present Boundless Spatial
 *     Copyright© 2000-2018 SuperMap Software Co. Ltd
 *     github: https://github.com/boundlessgeo/ol-mapbox-style
 *     github: https://github.com/SuperMap/ol-mapbox-style
 *     license: BSD 2-Clause "Simplified" License
 *     version: v3.0.0-beta.7
 * 
 */
olms =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./olms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              ol-mapbox-style - Use Mapbox Style objects with OpenLayers
                                                                                                                                                                                                                                                                              Copyright 2016-present Boundless Spatial, Inc.
                                                                                                                                                                                                                                                                              License: https://raw.githubusercontent.com/boundlessgeo/ol-mapbox-gl-style/master/LICENSE
                                                                                                                                                                                                                                                                              */

exports.applyStyle = applyStyle;
exports.applyBackground = applyBackground;
exports.apply = apply;
exports.getLayer = getLayer;
exports.getSource = getSource;

var _function = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/function */ "./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js");

var _function2 = _interopRequireDefault(_function);

var _mapboxToCssFont = __webpack_require__(/*! mapbox-to-css-font */ "./node_modules/mapbox-to-css-font/index.js");

var _mapboxToCssFont2 = _interopRequireDefault(_mapboxToCssFont);

var _stylefunction = __webpack_require__(/*! ./stylefunction */ "./stylefunction.js");

var _stylefunction2 = _interopRequireDefault(_stylefunction);

var _google = __webpack_require__(/*! webfont-matcher/lib/fonts/google */ "./node_modules/webfont-matcher/lib/fonts/google.js");

var _google2 = _interopRequireDefault(_google);

var _proj = __webpack_require__(/*! ol/proj */ "ol/proj");

var _tilegrid = __webpack_require__(/*! ol/tilegrid */ "ol/tilegrid");

var _Map = __webpack_require__(/*! ol/Map */ "ol/Map");

var _Map2 = _interopRequireDefault(_Map);

var _GeoJSON = __webpack_require__(/*! ol/format/GeoJSON */ "ol/format/GeoJSON");

var _GeoJSON2 = _interopRequireDefault(_GeoJSON);

var _MVT = __webpack_require__(/*! ol/format/MVT */ "ol/format/MVT");

var _MVT2 = _interopRequireDefault(_MVT);

var _Observable = __webpack_require__(/*! ol/Observable */ "ol/Observable");

var _Tile = __webpack_require__(/*! ol/layer/Tile */ "ol/layer/Tile");

var _Tile2 = _interopRequireDefault(_Tile);

var _Vector = __webpack_require__(/*! ol/layer/Vector */ "ol/layer/Vector");

var _Vector2 = _interopRequireDefault(_Vector);

var _VectorTile = __webpack_require__(/*! ol/layer/VectorTile */ "ol/layer/VectorTile");

var _VectorTile2 = _interopRequireDefault(_VectorTile);

var _TileJSON = __webpack_require__(/*! ol/source/TileJSON */ "ol/source/TileJSON");

var _TileJSON2 = _interopRequireDefault(_TileJSON);

var _Vector3 = __webpack_require__(/*! ol/source/Vector */ "ol/source/Vector");

var _Vector4 = _interopRequireDefault(_Vector3);

var _VectorTile3 = __webpack_require__(/*! ol/source/VectorTile */ "ol/source/VectorTile");

var _VectorTile4 = _interopRequireDefault(_VectorTile3);

var _XYZ = __webpack_require__(/*! ol/source/XYZ */ "ol/source/XYZ");

var _XYZ2 = _interopRequireDefault(_XYZ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableFonts;

function loadFont(fonts) {
  var i, ii;
  if (!Array.isArray(fonts)) {
    var stops = fonts.stops;
    if (stops) {
      for (i = 0, ii = stops.length; i < ii; ++i) {
        loadFont(stops[i][1]);
      }
    }
    return;
  }
  var googleFamilies = _google2.default.getNames();
  var families = fonts.map(function (font) {
    return (0, _mapboxToCssFont2.default)(font, 1).split(' 1px ')[1].replace(/"/g, '');
  });
  for (i = 0, ii = families.length; i < ii; ++i) {
    var family = families[i];
    var font = fonts[i];
    if (googleFamilies.indexOf(family) !== -1) {
      if (!availableFonts) {
        availableFonts = [];
      }
      if (availableFonts.indexOf(font) == -1) {
        availableFonts.push(font);
        var fontUrl = 'https://fonts.googleapis.com/css?family=' + family.replace(/ /g, '+');
        if (!document.querySelector('link[href="' + fontUrl + '"]')) {
          var markup = document.createElement('link');
          markup.href = fontUrl;
          markup.rel = 'stylesheet';
          document.getElementsByTagName('head')[0].appendChild(markup);
        }
      }
      break;
    }
  }
}

var defaultFont = ['Open Sans Regular', 'Arial Regular'];

function preprocess(layer) {
  if ('layout' in layer && 'text-field' in layer.layout) {
    loadFont(layer.layout['text-font'] || defaultFont);
  }
}

var spriteRegEx = /^(.*)(\?.*)$/;

function withPath(url, path) {
  if (path && url.indexOf('http') != 0) {
    url = path + url;
  }
  return url;
}

function toSpriteUrl(url, path, extension) {
  url = withPath(url, path);
  var parts = url.match(spriteRegEx);
  return parts ? parts[1] + extension + (parts.length > 2 ? parts[2] : '') : url + extension;
}

/**
 * Applies a style function to an `ol.layer.VectorTile` or `ol.layer.Vector`
 * with an `ol.source.VectorTile` or an `ol.source.Vector`. The style function
 * will render all layers from the `glStyle` object that use the specified
 * `source`, or a subset of layers from the same source. The source needs to be
 * a `"type": "vector"`, `"type": "geojson"` or `"type": "raster"` source.
 *
 * @param {ol.layer.VectorTile} layer OpenLayers layer.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string} source `source` key or an array of layer `id`s from the
 * Mapbox Style object. When a `source` key is provided, all layers for the
 * specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {string} [path=undefined] Path of the style file. Only required when
 * a relative path is used with the `"sprite"` property of the style.
 * @param {Array<number>} [resolutions=undefined] Resolutions for mapping resolution to zoom level.
 * @return {Promise} Promise which will be resolved when the style can be used
 * for rendering.
 */
function applyStyle(layer, glStyle, source, path, resolutions) {
  return new Promise(function (resolve, reject) {

    if ((typeof glStyle === 'undefined' ? 'undefined' : _typeof(glStyle)) != 'object') {
      glStyle = JSON.parse(glStyle);
    }
    if (glStyle.version != 8) {
      reject(new Error('glStyle version 8 required.'));
    }
    var spriteScale, spriteData, spriteImageUrl;
    if (glStyle.sprite) {
      spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1;
      var sizeFactor = spriteScale == 0.5 ? '@2x' : '';
      var spriteUrl = toSpriteUrl(glStyle.sprite, path, sizeFactor + '.json');

      fetch(spriteUrl, { credentials: 'same-origin' }).then(function (response) {
        // if the response is ready return the JSON promise
        if (response.status === 200) {
          return response.json();
        } else if (sizeFactor !== '') {
          // return the JSON promise for the low-resolution sprites.
          sizeFactor = '';
          spriteUrl = toSpriteUrl(glStyle.sprite, path, '.json');
          return fetch(spriteUrl, { credentials: 'same-origin' }).then(function (r) {
            return r.json();
          });
        }
      }).then(function (spritesJson) {
        if (spritesJson === undefined) {
          throw 'No sprites found.';
        }
        spriteData = spritesJson;
        spriteImageUrl = toSpriteUrl(glStyle.sprite, path, sizeFactor + '.png');
        onChange();
      }).catch(function (err) {
        console.error(err);
        reject(new Error('Sprites cannot be loaded from ' + spriteUrl));
      });
    }

    var style;
    function onChange() {
      if (!style && (!glStyle.sprite || spriteData) && (!availableFonts || availableFonts.length > 0)) {
        style = (0, _stylefunction2.default)(layer, glStyle, source, resolutions, spriteData, spriteImageUrl, availableFonts);
        resolve();
      } else if (style) {
        layer.setStyle(style);
      }
    }

    if (layer instanceof _VectorTile2.default || layer instanceof _Vector2.default) {
      try {
        var layers = glStyle.layers;
        for (var i = 0, ii = layers.length; i < ii; ++i) {
          if (typeof source == 'string' && layers[i].source == source || source.indexOf(layers[i].id) >= 0) {
            preprocess(layers[i]);
          }
        }
        onChange();
      } catch (e) {
        setTimeout(function () {
          reject(e);
        }, 0);
      }
    }
  });
}

function setBackground(map, layer) {
  function updateStyle() {
    var element = map.getTargetElement();
    if (!element) {
      return;
    }
    var layout = layer.layout || {};
    var paint = layer.paint || {};
    var zoom = map.getView().getZoom();
    if ('background-color' in paint) {
      var bg = (0, _function2.default)(paint['background-color'], { function: 'interpolated', type: 'color' })(zoom);
      if (Array.isArray(bg)) {
        bg = 'rgba(' + Math.round(bg[0] * 255) + ',' + Math.round(bg[1] * 255) + ',' + Math.round(bg[2] * 255) + ',' + (bg[3] ? bg[3] : 1) + ')';
      }
      element.style.backgroundColor = bg;
    }
    if ('background-opacity' in paint) {
      element.style.backgroundOpacity = (0, _function2.default)(paint['background-opacity'], { function: 'interpolated', type: 'number' })(zoom);
    }
    if (layout.visibility == 'none') {
      element.style.backgroundColor = '';
      element.style.backgroundOpacity = '';
    }
  }
  if (map.getTargetElement()) {
    updateStyle();
  }
  map.on(['change:resolution', 'change:target'], updateStyle);
}

/**
 * Applies properties of the Mapbox Style's first `background` layer to the map.
 * @param {ol.Map} map OpenLayers Map.
 * @param {Object} glStyle Mapbox Style object.
 */
function applyBackground(map, glStyle) {
  glStyle.layers.some(function (l) {
    if (l.type == 'background') {
      setBackground(map, l);
      return true;
    }
  });
}

function getSourceIdByRef(layers, ref) {
  var sourceId;
  layers.some(function (layer) {
    if (layer.id == ref) {
      sourceId = layer.source;
      return true;
    }
  });
  return sourceId;
}

function processStyle(glStyle, map, baseUrl, host, path, accessToken) {
  var view = map.getView();
  if ('center' in glStyle && !view.getCenter()) {
    view.setCenter((0, _proj.fromLonLat)(glStyle.center));
  }
  if ('zoom' in glStyle && view.getZoom() === undefined) {
    view.setZoom(glStyle.zoom);
  }
  if (!view.getCenter() || view.getZoom() === undefined) {
    view.fit(view.getProjection().getExtent(), {
      nearest: true,
      size: map.getSize()
    });
  }
  if (glStyle.sprite) {
    if (glStyle.sprite.indexOf('mapbox://') == 0) {
      glStyle.sprite = baseUrl + '/sprite' + accessToken;
    } else if (glStyle.sprite.indexOf('http') != 0) {
      glStyle.sprite = (host ? host + path : '') + glStyle.sprite + accessToken;
    }
  }

  var glLayers = glStyle.layers;
  var geoJsonFormat = new _GeoJSON2.default();
  var layerIds = [];

  function finalizeLayer(layer) {
    if (layerIds.length > 0) {
      map.addLayer(layer);
      var setStyle = function setStyle() {
        applyStyle(layer, glStyle, layerIds, path).then(function () {
          layer.setVisible(true);
        }, function (e) {
          /*eslint no-console: ["error", { allow: ["error"] }] */
          console.error(e);
        });
      };
      if (layer.getSource()) {
        setStyle();
      } else {
        layer.once('change:source', setStyle);
      }
    }
  }

  var glLayer, glSource, glSourceId, id, layer, mapid, url;
  for (var i = 0, ii = glLayers.length; i < ii; ++i) {
    glLayer = glLayers[i];
    if (glLayer.type == 'background') {
      setBackground(map, glLayer);
    } else {
      id = glLayer.source || getSourceIdByRef(glLayers, glLayer.ref);
      if (id != glSourceId) {
        finalizeLayer(layer);
        layerIds = [];
        glSource = glStyle.sources[id];
        url = glSource.url;
        var tiles = glSource.tiles;
        if (url) {
          if (url.indexOf('mapbox://') == 0) {
            mapid = url.replace('mapbox://', '');
            tiles = ['a', 'b', 'c', 'd'].map(function (host) {
              return 'https://' + host + '.tiles.mapbox.com/v4/' + mapid + '/{z}/{x}/{y}.' + (glSource.type == 'vector' ? 'vector.pbf' : 'png') + accessToken;
            });
          }
        }

        if (glSource.type == 'vector') {
          layer = tiles ? function () {
            var tileGrid = (0, _tilegrid.createXYZ)({
              tileSize: 512,
              maxZoom: 'maxzoom' in glSource ? glSource.maxzoom : 22,
              minZoom: glSource.minzoom
            });
            return new _VectorTile2.default({
              declutter: true,
              maxResolution: tileGrid.getMinZoom() > 0 ? tileGrid.getResolution(tileGrid.getMinZoom()) : undefined,
              source: new _VectorTile4.default({
                attributions: glSource.attribution,
                format: new _MVT2.default(),
                tileGrid: tileGrid,
                urls: tiles
              }),
              visible: false,
              zIndex: i
            });
          }() : function () {
            var layer = new _VectorTile2.default({
              declutter: true,
              visible: false,
              zIndex: i
            });
            var tilejson = new _TileJSON2.default({
              url: url
            });
            var key = tilejson.on('change', function () {
              if (tilejson.getState() == 'ready') {
                var tileJSONDoc = tilejson.getTileJSON();
                var tiles = Array.isArray(tileJSONDoc.tiles) ? tileJSONDoc.tiles : [tileJSONDoc.tiles];
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                  var tile = tiles[i];
                  if (tile.indexOf('http') != 0) {
                    tiles[i] = glSource.url + tile;
                  }
                }
                var tileGrid = tilejson.getTileGrid();
                layer.setSource(new _VectorTile4.default({
                  attributions: tilejson.getAttributions() || tileJSONDoc.attribution,
                  format: new _MVT2.default(),
                  tileGrid: (0, _tilegrid.createXYZ)({
                    minZoom: tileGrid.getMinZoom(),
                    maxZoom: tileGrid.getMaxZoom(),
                    tileSize: 512
                  }),
                  urls: tiles
                }));
                if (tileGrid.getMinZoom() > 0) {
                  layer.setMaxResolution(tileGrid.getResolution(tileGrid.getMinZoom()));
                }
                (0, _Observable.unByKey)(key);
              }
            });
            return layer;
          }();
        } else if (glSource.type == 'raster') {
          var source;
          if (!glSource.tiles) {
            source = function () {
              return new _TileJSON2.default({
                url: url,
                crossOrigin: 'anonymous'
              });
            }();
          } else {
            source = new _XYZ2.default({
              attributions: glSource.attribution,
              minZoom: glSource.minzoom,
              maxZoom: 'maxzoom' in glSource ? glSource.maxzoom : 22,
              tileSize: glSource.tileSize || 512,
              url: url,
              urls: glSource.tiles,
              crossOrigin: 'anonymous'
            });
          }
          source.setTileLoadFunction(function (tile, src) {
            if (src.indexOf('{bbox-epsg-3857}') != -1) {
              var bbox = source.getTileGrid().getTileCoordExtent(tile.getTileCoord());
              src = src.replace('{bbox-epsg-3857}', bbox.toString());
            }
            tile.getImage().src = src;
          });
          layer = new _Tile2.default({
            source: source,
            visible: glLayer.layout ? glLayer.layout.visibility !== 'none' : true
          });
        } else if (glSource.type == 'geojson') {
          var data = glSource.data;
          var features, geoJsonUrl;
          if (typeof data == 'string') {
            geoJsonUrl = withPath(data, path);
          } else {
            features = geoJsonFormat.readFeatures(data, { featureProjection: 'EPSG:3857' });
          }
          layer = new _Vector2.default({
            source: new _Vector4.default({
              attributions: glSource.attribution,
              features: features,
              format: geoJsonFormat,
              url: geoJsonUrl
            }),
            visible: false,
            zIndex: i
          });
        }
        glSourceId = id;
      }
      layerIds.push(glLayer.id);
    }
  }
  finalizeLayer(layer);
  map.set('mapbox-style', glStyle);
}

/**
 * Loads and applies a Mapbox Style object to an OpenLayers Map. This includes
 * the map background, the layers, the center and the zoom.
 *
 * The center and zoom will only be set if present in the Mapbox Style document,
 * and if not already set on the OpenLayers map.
 *
 * Layers will be added to the OpenLayers map, without affecting any layers that
 * might already be set on the map.
 *
 * Layers added by `apply()` will have two additional properties:
 *
 *  * `mapbox-source`: The `id` of the Mapbox Style document's source that the
 *    OpenLayers layer was created from. Usually `apply()` creates one
 *    OpenLayers layer per Mapbox Style source, unless the layer stack has
 *    layers from different sources in between.
 *  * `mapbox-layers`: The `id`s of the Mapbox Style document's layers that are
 *    included in the OpenLayers layer.
 *
 * The map returned by this function will have an additional `mapbox-style`
 * property which holds the Mapbox Style object.
 *
 * @param {ol.Map|HTMLElement|string} map Either an existing OpenLayers Map
 * instance, or a HTML element, or the id of a HTML element that will be the
 * target of a new OpenLayers Map.
 * @param {string|Object} style JSON style object or style url pointing to a
 * Mapbox Style object. When using Mapbox APIs, the url must contain an access
 * token and look like
 * `https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=[your_access_token_here]`.
 * When passed as JSON style object, all OpenLayers layers created by `apply()`
 * will be immediately available, but they may not have a source yet (i.e. when
 * they are defined by a TileJSON url in the Mapbox Style document). When passed
 * as style url, layers will be added to the map when the Mapbox Style document
 * is loaded and parsed.
 * @return {ol.Map} The OpenLayers Map instance that will be populated with the
 * contents described in the Mapbox Style object.
 */
function apply(map, style) {

  var accessToken, baseUrl, host, path;
  accessToken = baseUrl = host = path = '';

  if (!(map instanceof _Map2.default)) {
    map = new _Map2.default({
      target: map
    });
  }

  if (typeof style === 'string') {
    var parts = style.match(spriteRegEx);
    if (parts) {
      baseUrl = parts[1];
      accessToken = parts.length > 2 ? parts[2] : '';
    }

    fetch(style, {
      credentials: 'same-origin'
    }).then(function (response) {
      return response.json();
    }).then(function (glStyle) {
      var a = document.createElement('A');
      a.href = style;
      path = a.pathname.split('/').slice(0, -1).join('/') + '/';
      host = style.substr(0, style.indexOf(path));

      processStyle(glStyle, map, baseUrl, host, path, accessToken);
    }).catch(function (err) {
      console.error(err);
      throw new Error('Could not load ' + style);
    });
  } else {
    setTimeout(function () {
      processStyle(style, map);
    }, 0);
  }
  return map;
}

/**
 * Get the OpenLayers layer instance that contains the provided Mapbox Style
 * `layer`. Note that multiple Mapbox Style layers are combined in a single
 * OpenLayers layer instance when they use the same Mapbox Style `source`.
 * @param {ol.Map} map OpenLayers Map.
 * @param {string} layerId Mapbox Style layer id.
 * @return {ol.layer.Layer} layer OpenLayers layer instance.
 */
function getLayer(map, layerId) {
  var layers = map.getLayers().getArray();
  for (var i = 0, ii = layers.length; i < ii; ++i) {
    if (layers[i].get('mapbox-layers').indexOf(layerId) !== -1) {
      return layers[i];
    }
  }
}

/**
 * Get the OpenLayers source instance for the provided Mapbox Style `source`.
 * @param {ol.Map} map OpenLayers Map.
 * @param {string} sourceId Mapbox Style source id.
 * @return {ol.layer.Layer} layer OpenLayers layer instance.
 */
function getSource(map, sourceId) {
  var layers = map.getLayers().getArray();
  for (var i = 0, ii = layers.length; i < ii; ++i) {
    var source = layers[i].getSource();
    if (layers[i].get('mapbox-source').indexOf(sourceId) !== -1) {
      return source;
    }
  }
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/deref.js":
/*!************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/deref.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var refProperties = __webpack_require__(/*! ./util/ref_properties */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/ref_properties.js");

function deref(layer, parent) {
    var result = {};

    for (var k in layer) {
        if (k !== 'ref') {
            result[k] = layer[k];
        }
    }

    refProperties.forEach(function (k) {
        if (k in parent) {
            result[k] = parent[k];
        }
    });

    return result;
}

module.exports = derefLayers;

/**
 * Given an array of layers, some of which may contain `ref` properties
 * whose value is the `id` of another property, return a new array where
 * such layers have been augmented with the 'type', 'source', etc. properties
 * from the parent layer, and the `ref` property has been removed.
 *
 * The input is not modified. The output may contain references to portions
 * of the input.
 *
 * @private
 * @param {Array<Layer>} layers
 * @returns {Array<Layer>}
 */
function derefLayers(layers) {
    layers = layers.slice();

    var map = Object.create(null);
    for (var i = 0; i < layers.length; i++) {
        map[layers[i].id] = layers[i];
    }

    for (var _i = 0; _i < layers.length; _i++) {
        if ('ref' in layers[_i]) {
            layers[_i] = deref(layers[_i], map[layers[_i].ref]);
        }
    }

    return layers;
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/feature_filter/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/feature_filter/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createFilter;

var types = ['Unknown', 'Point', 'LineString', 'Polygon'];

/**
 * Given a filter expressed as nested arrays, return a new function
 * that evaluates whether a given feature (with a .properties or .tags property)
 * passes its test.
 *
 * @private
 * @param {Array} filter mapbox gl filter
 * @returns {Function} filter-evaluating function
 */
function createFilter(filter) {
    return new Function('f', 'var p = (f && f.properties || {}); return ' + compile(filter));
}

function compile(filter) {
    if (!filter) return 'true';
    var op = filter[0];
    if (filter.length <= 1) return op === 'any' ? 'false' : 'true';
    var str = op === '==' ? compileComparisonOp(filter[1], filter[2], '===', false) : op === '!=' ? compileComparisonOp(filter[1], filter[2], '!==', false) : op === '<' || op === '>' || op === '<=' || op === '>=' ? compileComparisonOp(filter[1], filter[2], op, true) : op === 'any' ? compileLogicalOp(filter.slice(1), '||') : op === 'all' ? compileLogicalOp(filter.slice(1), '&&') : op === 'none' ? compileNegation(compileLogicalOp(filter.slice(1), '||')) : op === 'in' ? compileInOp(filter[1], filter.slice(2)) : op === '!in' ? compileNegation(compileInOp(filter[1], filter.slice(2))) : op === 'has' ? compileHasOp(filter[1]) : op === '!has' ? compileNegation(compileHasOp(filter[1])) : 'true';
    return '(' + str + ')';
}

function compilePropertyReference(property) {
    var ref = property === '$type' ? 'f.type' : property === '$id' ? 'f.id' : 'p[' + JSON.stringify(property) + ']';
    return ref;
}

function compileComparisonOp(property, value, op, checkType) {
    var left = compilePropertyReference(property);
    var right = property === '$type' ? types.indexOf(value) : JSON.stringify(value);
    return (checkType ? 'typeof ' + left + '=== typeof ' + right + '&&' : '') + left + op + right;
}

function compileLogicalOp(expressions, op) {
    return expressions.map(compile).join(op);
}

function compileInOp(property, values) {
    if (property === '$type') values = values.map(function (value) {
        return types.indexOf(value);
    });
    var left = JSON.stringify(values.sort(compare));
    var right = compilePropertyReference(property);

    if (values.length <= 200) return left + '.indexOf(' + right + ') !== -1';

    return '' + ('function(v, a, i, j) {' + 'while (i <= j) { var m = (i + j) >> 1;' + '    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;' + '}' + 'return false; }(') + right + ', ' + left + ',0,' + (values.length - 1) + ')';
}

function compileHasOp(property) {
    return property === '$id' ? '"id" in f' : JSON.stringify(property) + ' in p';
}

function compileNegation(expression) {
    return '!(' + expression + ')';
}

// Comparison function to sort numbers and strings
function compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/function/color_spaces.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/function/color_spaces.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Constants
var Xn = 0.950470,
    // D65 standard referent
Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1,
    deg2rad = Math.PI / 180,
    rad2deg = 180 / Math.PI;

// Utilities
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
    x /= 255;
    return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

// LAB
function rgbToLab(rgbColor) {
    var b = rgb2xyz(rgbColor[0]),
        a = rgb2xyz(rgbColor[1]),
        l = rgb2xyz(rgbColor[2]),
        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);

    return [116 * y - 16, 500 * (x - y), 200 * (y - z), rgbColor[3]];
}

function labToRgb(labColor) {
    var y = (labColor[0] + 16) / 116,
        x = isNaN(labColor[1]) ? y : y + labColor[1] / 500,
        z = isNaN(labColor[2]) ? y : y - labColor[2] / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return [xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
    xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), labColor[3]];
}

// HCL
function rgbToHcl(rgbColor) {
    var labColor = rgbToLab(rgbColor);
    var l = labColor[0],
        a = labColor[1],
        b = labColor[2];
    var h = Math.atan2(b, a) * rad2deg;
    return [h < 0 ? h + 360 : h, Math.sqrt(a * a + b * b), l, rgbColor[3]];
}

function hclToRgb(hclColor) {
    var h = hclColor[0] * deg2rad,
        c = hclColor[1],
        l = hclColor[2];
    return labToRgb([l, Math.cos(h) * c, Math.sin(h) * c, hclColor[3]]);
}

module.exports = {
    lab: {
        forward: rgbToLab,
        reverse: labToRgb
    },
    hcl: {
        forward: rgbToHcl,
        reverse: hclToRgb
    }
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var colorSpaces = __webpack_require__(/*! ./color_spaces */ "./node_modules/@mapbox/mapbox-gl-style-spec/function/color_spaces.js");
var parseColor = __webpack_require__(/*! ../util/parse_color */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/parse_color.js");
var extend = __webpack_require__(/*! ../util/extend */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/extend.js");
var getType = __webpack_require__(/*! ../util/get_type */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/get_type.js");
var interpolate = __webpack_require__(/*! ../util/interpolate */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/interpolate.js");

function identityFunction(x) {
    return x;
}

function createFunction(parameters, propertySpec) {
    var isColor = propertySpec.type === 'color';

    var fun = void 0;

    if (!isFunctionDefinition(parameters)) {
        if (isColor && parameters) {
            parameters = parseColor(parameters);
        }
        fun = function fun() {
            return parameters;
        };
        fun.isFeatureConstant = true;
        fun.isZoomConstant = true;
    } else {
        var zoomAndFeatureDependent = parameters.stops && _typeof(parameters.stops[0][0]) === 'object';
        var featureDependent = zoomAndFeatureDependent || parameters.property !== undefined;
        var zoomDependent = zoomAndFeatureDependent || !featureDependent;
        var type = parameters.type || (propertySpec.function === 'interpolated' ? 'exponential' : 'interval');

        if (isColor) {
            parameters = extend({}, parameters);

            if (parameters.stops) {
                parameters.stops = parameters.stops.map(function (stop) {
                    return [stop[0], parseColor(stop[1])];
                });
            }

            if (parameters.default) {
                parameters.default = parseColor(parameters.default);
            } else {
                parameters.default = parseColor(propertySpec.default);
            }
        }

        var innerFun = void 0;
        var hashedStops = void 0;
        var categoricalKeyType = void 0;
        if (type === 'exponential') {
            innerFun = evaluateExponentialFunction;
        } else if (type === 'interval') {
            innerFun = evaluateIntervalFunction;
        } else if (type === 'categorical') {
            innerFun = evaluateCategoricalFunction;

            // For categorical functions, generate an Object as a hashmap of the stops for fast searching
            hashedStops = Object.create(null);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = parameters.stops[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var stop = _step.value;

                    hashedStops[stop[0]] = stop[1];
                }

                // Infer key type based on first stop key-- used to encforce strict type checking later
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            categoricalKeyType = _typeof(parameters.stops[0][0]);
        } else if (type === 'identity') {
            innerFun = evaluateIdentityFunction;
        } else {
            throw new Error('Unknown function type "' + type + '"');
        }

        var outputFunction = void 0;

        // If we're interpolating colors in a color system other than RGBA,
        // first translate all stop values to that color system, then interpolate
        // arrays as usual. The `outputFunction` option lets us then translate
        // the result of that interpolation back into RGBA.
        if (parameters.colorSpace && parameters.colorSpace !== 'rgb') {
            if (colorSpaces[parameters.colorSpace]) {
                var colorspace = colorSpaces[parameters.colorSpace];
                // Avoid mutating the parameters value
                parameters = JSON.parse(JSON.stringify(parameters));
                for (var s = 0; s < parameters.stops.length; s++) {
                    parameters.stops[s] = [parameters.stops[s][0], colorspace.forward(parameters.stops[s][1])];
                }
                outputFunction = colorspace.reverse;
            } else {
                throw new Error('Unknown color space: ' + parameters.colorSpace);
            }
        } else {
            outputFunction = identityFunction;
        }

        if (zoomAndFeatureDependent) {
            var featureFunctions = {};
            var zoomStops = [];
            for (var _s = 0; _s < parameters.stops.length; _s++) {
                var _stop = parameters.stops[_s];
                var zoom = _stop[0].zoom;
                if (featureFunctions[zoom] === undefined) {
                    featureFunctions[zoom] = {
                        zoom: zoom,
                        type: parameters.type,
                        property: parameters.property,
                        default: parameters.default,
                        stops: []
                    };
                    zoomStops.push(zoom);
                }
                featureFunctions[zoom].stops.push([_stop[0].value, _stop[1]]);
            }

            var featureFunctionStops = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = zoomStops[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var z = _step2.value;

                    featureFunctionStops.push([featureFunctions[z].zoom, createFunction(featureFunctions[z], propertySpec)]);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            fun = function fun(zoom, feature) {
                return outputFunction(evaluateExponentialFunction({
                    stops: featureFunctionStops,
                    base: parameters.base
                }, propertySpec, zoom)(zoom, feature));
            };
            fun.isFeatureConstant = false;
            fun.isZoomConstant = false;
        } else if (zoomDependent) {
            fun = function fun(zoom) {
                return outputFunction(innerFun(parameters, propertySpec, zoom, hashedStops, categoricalKeyType));
            };
            fun.isFeatureConstant = true;
            fun.isZoomConstant = false;
        } else {
            fun = function fun(zoom, feature) {
                var value = feature[parameters.property];
                if (value === undefined) {
                    return coalesce(parameters.default, propertySpec.default);
                }
                return outputFunction(innerFun(parameters, propertySpec, value, hashedStops, categoricalKeyType));
            };
            fun.isFeatureConstant = false;
            fun.isZoomConstant = true;
        }
    }

    return fun;
}

function coalesce(a, b, c) {
    if (a !== undefined) return a;
    if (b !== undefined) return b;
    if (c !== undefined) return c;
}

function evaluateCategoricalFunction(parameters, propertySpec, input, hashedStops, keyType) {
    var evaluated = (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === keyType ? hashedStops[input] : undefined; // Enforce strict typing on input
    return coalesce(evaluated, parameters.default, propertySpec.default);
}

function evaluateIntervalFunction(parameters, propertySpec, input) {
    // Edge cases
    if (getType(input) !== 'number') return coalesce(parameters.default, propertySpec.default);
    var n = parameters.stops.length;
    if (n === 1) return parameters.stops[0][1];
    if (input <= parameters.stops[0][0]) return parameters.stops[0][1];
    if (input >= parameters.stops[n - 1][0]) return parameters.stops[n - 1][1];

    var index = findStopLessThanOrEqualTo(parameters.stops, input);

    return parameters.stops[index][1];
}

function evaluateExponentialFunction(parameters, propertySpec, input) {
    var base = parameters.base !== undefined ? parameters.base : 1;

    // Edge cases
    if (getType(input) !== 'number') return coalesce(parameters.default, propertySpec.default);
    var n = parameters.stops.length;
    if (n === 1) return parameters.stops[0][1];
    if (input <= parameters.stops[0][0]) return parameters.stops[0][1];
    if (input >= parameters.stops[n - 1][0]) return parameters.stops[n - 1][1];

    var index = findStopLessThanOrEqualTo(parameters.stops, input);
    var t = interpolationFactor(input, base, parameters.stops[index][0], parameters.stops[index + 1][0]);

    var outputLower = parameters.stops[index][1];
    var outputUpper = parameters.stops[index + 1][1];
    var interp = interpolate[propertySpec.type] || identityFunction;

    if (typeof outputLower === 'function') {
        return function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var evaluatedLower = outputLower.apply(undefined, args);
            var evaluatedUpper = outputUpper.apply(undefined, args);
            // Special case for fill-outline-color, which has no spec default.
            if (evaluatedLower === undefined || evaluatedUpper === undefined) {
                return undefined;
            }
            return interp(evaluatedLower, evaluatedUpper, t);
        };
    }

    return interp(outputLower, outputUpper, t);
}

function evaluateIdentityFunction(parameters, propertySpec, input) {
    if (propertySpec.type === 'color') {
        input = parseColor(input);
    } else if (getType(input) !== propertySpec.type && (propertySpec.type !== 'enum' || !propertySpec.values[input])) {
        input = undefined;
    }
    return coalesce(input, parameters.default, propertySpec.default);
}

/**
 * Returns the index of the last stop <= input, or 0 if it doesn't exist.
 *
 * @private
 */
function findStopLessThanOrEqualTo(stops, input) {
    var n = stops.length;
    var lowerIndex = 0;
    var upperIndex = n - 1;
    var currentIndex = 0;
    var currentValue = void 0,
        upperValue = void 0;

    while (lowerIndex <= upperIndex) {
        currentIndex = Math.floor((lowerIndex + upperIndex) / 2);
        currentValue = stops[currentIndex][0];
        upperValue = stops[currentIndex + 1][0];
        if (input === currentValue || input > currentValue && input < upperValue) {
            // Search complete
            return currentIndex;
        } else if (currentValue < input) {
            lowerIndex = currentIndex + 1;
        } else if (currentValue > input) {
            upperIndex = currentIndex - 1;
        }
    }

    return Math.max(currentIndex - 1, 0);
}

function isFunctionDefinition(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (value.stops || value.type === 'identity');
}

/**
 * Returns a ratio that can be used to interpolate between exponential function
 * stops.
 *
 * How it works:
 * Two consecutive stop values define a (scaled and shifted) exponential
 * function `f(x) = a * base^x + b`, where `base` is the user-specified base,
 * and `a` and `b` are constants affording sufficient degrees of freedom to fit
 * the function to the given stops.
 *
 * Here's a bit of algebra that lets us compute `f(x)` directly from the stop
 * values without explicitly solving for `a` and `b`:
 *
 * First stop value: `f(x0) = y0 = a * base^x0 + b`
 * Second stop value: `f(x1) = y1 = a * base^x1 + b`
 * => `y1 - y0 = a(base^x1 - base^x0)`
 * => `a = (y1 - y0)/(base^x1 - base^x0)`
 *
 * Desired value: `f(x) = y = a * base^x + b`
 * => `f(x) = y0 + a * (base^x - base^x0)`
 *
 * From the above, we can replace the `a` in `a * (base^x - base^x0)` and do a
 * little algebra:
 * ```
 * a * (base^x - base^x0) = (y1 - y0)/(base^x1 - base^x0) * (base^x - base^x0)
 *                     = (y1 - y0) * (base^x - base^x0) / (base^x1 - base^x0)
 * ```
 *
 * If we let `(base^x - base^x0) / (base^x1 base^x0)`, then we have
 * `f(x) = y0 + (y1 - y0) * ratio`.  In other words, `ratio` may be treated as
 * an interpolation factor between the two stops' output values.
 *
 * (Note: a slightly different form for `ratio`,
 * `(base^(x-x0) - 1) / (base^(x1-x0) - 1) `, is equivalent, but requires fewer
 * expensive `Math.pow()` operations.)
 *
 * @private
*/
function interpolationFactor(input, base, lowerValue, upperValue) {
    var difference = upperValue - lowerValue;
    var progress = input - lowerValue;

    if (difference === 0) {
        return 0;
    } else if (base === 1) {
        return progress / difference;
    } else {
        return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
    }
}

module.exports = createFunction;
module.exports.isFunctionDefinition = isFunctionDefinition;
module.exports.interpolationFactor = interpolationFactor;
module.exports.findStopLessThanOrEqualTo = findStopLessThanOrEqualTo;

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/extend.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/extend.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (output) {
    for (var _len = arguments.length, inputs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        inputs[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var input = _step.value;

            for (var k in input) {
                output[k] = input[k];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return output;
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/get_type.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/get_type.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function getType(val) {
    if (val instanceof Number) {
        return 'number';
    } else if (val instanceof String) {
        return 'string';
    } else if (val instanceof Boolean) {
        return 'boolean';
    } else if (Array.isArray(val)) {
        return 'array';
    } else if (val === null) {
        return 'null';
    } else {
        return typeof val === 'undefined' ? 'undefined' : _typeof(val);
    }
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/interpolate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/interpolate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interpolate;

function interpolate(a, b, t) {
    return a * (1 - t) + b * t;
}

interpolate.number = interpolate;

interpolate.vec2 = function (from, to, t) {
    return [interpolate(from[0], to[0], t), interpolate(from[1], to[1], t)];
};

/*
 * Interpolate between two colors given as 4-element arrays.
 *
 * @param {Color} from
 * @param {Color} to
 * @param {number} t interpolation factor between 0 and 1
 * @returns {Color} interpolated color
 */
interpolate.color = function (from, to, t) {
    return [interpolate(from[0], to[0], t), interpolate(from[1], to[1], t), interpolate(from[2], to[2], t), interpolate(from[3], to[3], t)];
};

interpolate.array = function (from, to, t) {
    return from.map(function (d, i) {
        return interpolate(d, to[i], t);
    });
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/parse_color.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/parse_color.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseColorString = __webpack_require__(/*! csscolorparser */ "./node_modules/csscolorparser/csscolorparser.js").parseCSSColor;

module.exports = function parseColor(input) {
    if (typeof input === 'string') {
        var rgba = parseColorString(input);
        if (!rgba) {
            return undefined;
        }

        // GL expects all components to be in the range [0, 1] and to be
        // multipled by the alpha value.
        return [rgba[0] / 255 * rgba[3], rgba[1] / 255 * rgba[3], rgba[2] / 255 * rgba[3], rgba[3]];
    } else if (Array.isArray(input)) {
        return input;
    } else {
        return undefined;
    }
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/ref_properties.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/ref_properties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ['type', 'source', 'source-layer', 'minzoom', 'maxzoom', 'filter', 'layout'];

/***/ }),

/***/ "./node_modules/csscolorparser/csscolorparser.js":
/*!*******************************************************!*\
  !*** ./node_modules/csscolorparser/csscolorparser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (c) Dean McNamee <dean@gmail.com>, 2012.
//
// https://github.com/deanm/css-color-parser-js
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// http://www.w3.org/TR/css3-color/
var kCSSColorTable = {
  "transparent": [0, 0, 0, 0], "aliceblue": [240, 248, 255, 1],
  "antiquewhite": [250, 235, 215, 1], "aqua": [0, 255, 255, 1],
  "aquamarine": [127, 255, 212, 1], "azure": [240, 255, 255, 1],
  "beige": [245, 245, 220, 1], "bisque": [255, 228, 196, 1],
  "black": [0, 0, 0, 1], "blanchedalmond": [255, 235, 205, 1],
  "blue": [0, 0, 255, 1], "blueviolet": [138, 43, 226, 1],
  "brown": [165, 42, 42, 1], "burlywood": [222, 184, 135, 1],
  "cadetblue": [95, 158, 160, 1], "chartreuse": [127, 255, 0, 1],
  "chocolate": [210, 105, 30, 1], "coral": [255, 127, 80, 1],
  "cornflowerblue": [100, 149, 237, 1], "cornsilk": [255, 248, 220, 1],
  "crimson": [220, 20, 60, 1], "cyan": [0, 255, 255, 1],
  "darkblue": [0, 0, 139, 1], "darkcyan": [0, 139, 139, 1],
  "darkgoldenrod": [184, 134, 11, 1], "darkgray": [169, 169, 169, 1],
  "darkgreen": [0, 100, 0, 1], "darkgrey": [169, 169, 169, 1],
  "darkkhaki": [189, 183, 107, 1], "darkmagenta": [139, 0, 139, 1],
  "darkolivegreen": [85, 107, 47, 1], "darkorange": [255, 140, 0, 1],
  "darkorchid": [153, 50, 204, 1], "darkred": [139, 0, 0, 1],
  "darksalmon": [233, 150, 122, 1], "darkseagreen": [143, 188, 143, 1],
  "darkslateblue": [72, 61, 139, 1], "darkslategray": [47, 79, 79, 1],
  "darkslategrey": [47, 79, 79, 1], "darkturquoise": [0, 206, 209, 1],
  "darkviolet": [148, 0, 211, 1], "deeppink": [255, 20, 147, 1],
  "deepskyblue": [0, 191, 255, 1], "dimgray": [105, 105, 105, 1],
  "dimgrey": [105, 105, 105, 1], "dodgerblue": [30, 144, 255, 1],
  "firebrick": [178, 34, 34, 1], "floralwhite": [255, 250, 240, 1],
  "forestgreen": [34, 139, 34, 1], "fuchsia": [255, 0, 255, 1],
  "gainsboro": [220, 220, 220, 1], "ghostwhite": [248, 248, 255, 1],
  "gold": [255, 215, 0, 1], "goldenrod": [218, 165, 32, 1],
  "gray": [128, 128, 128, 1], "green": [0, 128, 0, 1],
  "greenyellow": [173, 255, 47, 1], "grey": [128, 128, 128, 1],
  "honeydew": [240, 255, 240, 1], "hotpink": [255, 105, 180, 1],
  "indianred": [205, 92, 92, 1], "indigo": [75, 0, 130, 1],
  "ivory": [255, 255, 240, 1], "khaki": [240, 230, 140, 1],
  "lavender": [230, 230, 250, 1], "lavenderblush": [255, 240, 245, 1],
  "lawngreen": [124, 252, 0, 1], "lemonchiffon": [255, 250, 205, 1],
  "lightblue": [173, 216, 230, 1], "lightcoral": [240, 128, 128, 1],
  "lightcyan": [224, 255, 255, 1], "lightgoldenrodyellow": [250, 250, 210, 1],
  "lightgray": [211, 211, 211, 1], "lightgreen": [144, 238, 144, 1],
  "lightgrey": [211, 211, 211, 1], "lightpink": [255, 182, 193, 1],
  "lightsalmon": [255, 160, 122, 1], "lightseagreen": [32, 178, 170, 1],
  "lightskyblue": [135, 206, 250, 1], "lightslategray": [119, 136, 153, 1],
  "lightslategrey": [119, 136, 153, 1], "lightsteelblue": [176, 196, 222, 1],
  "lightyellow": [255, 255, 224, 1], "lime": [0, 255, 0, 1],
  "limegreen": [50, 205, 50, 1], "linen": [250, 240, 230, 1],
  "magenta": [255, 0, 255, 1], "maroon": [128, 0, 0, 1],
  "mediumaquamarine": [102, 205, 170, 1], "mediumblue": [0, 0, 205, 1],
  "mediumorchid": [186, 85, 211, 1], "mediumpurple": [147, 112, 219, 1],
  "mediumseagreen": [60, 179, 113, 1], "mediumslateblue": [123, 104, 238, 1],
  "mediumspringgreen": [0, 250, 154, 1], "mediumturquoise": [72, 209, 204, 1],
  "mediumvioletred": [199, 21, 133, 1], "midnightblue": [25, 25, 112, 1],
  "mintcream": [245, 255, 250, 1], "mistyrose": [255, 228, 225, 1],
  "moccasin": [255, 228, 181, 1], "navajowhite": [255, 222, 173, 1],
  "navy": [0, 0, 128, 1], "oldlace": [253, 245, 230, 1],
  "olive": [128, 128, 0, 1], "olivedrab": [107, 142, 35, 1],
  "orange": [255, 165, 0, 1], "orangered": [255, 69, 0, 1],
  "orchid": [218, 112, 214, 1], "palegoldenrod": [238, 232, 170, 1],
  "palegreen": [152, 251, 152, 1], "paleturquoise": [175, 238, 238, 1],
  "palevioletred": [219, 112, 147, 1], "papayawhip": [255, 239, 213, 1],
  "peachpuff": [255, 218, 185, 1], "peru": [205, 133, 63, 1],
  "pink": [255, 192, 203, 1], "plum": [221, 160, 221, 1],
  "powderblue": [176, 224, 230, 1], "purple": [128, 0, 128, 1],
  "rebeccapurple": [102, 51, 153, 1],
  "red": [255, 0, 0, 1], "rosybrown": [188, 143, 143, 1],
  "royalblue": [65, 105, 225, 1], "saddlebrown": [139, 69, 19, 1],
  "salmon": [250, 128, 114, 1], "sandybrown": [244, 164, 96, 1],
  "seagreen": [46, 139, 87, 1], "seashell": [255, 245, 238, 1],
  "sienna": [160, 82, 45, 1], "silver": [192, 192, 192, 1],
  "skyblue": [135, 206, 235, 1], "slateblue": [106, 90, 205, 1],
  "slategray": [112, 128, 144, 1], "slategrey": [112, 128, 144, 1],
  "snow": [255, 250, 250, 1], "springgreen": [0, 255, 127, 1],
  "steelblue": [70, 130, 180, 1], "tan": [210, 180, 140, 1],
  "teal": [0, 128, 128, 1], "thistle": [216, 191, 216, 1],
  "tomato": [255, 99, 71, 1], "turquoise": [64, 224, 208, 1],
  "violet": [238, 130, 238, 1], "wheat": [245, 222, 179, 1],
  "white": [255, 255, 255, 1], "whitesmoke": [245, 245, 245, 1],
  "yellow": [255, 255, 0, 1], "yellowgreen": [154, 205, 50, 1] };

function clamp_css_byte(i) {
  // Clamp to integer 0 .. 255.
  i = Math.round(i); // Seems to be what Chrome does (vs truncation).
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clamp_css_float(f) {
  // Clamp to float 0.0 .. 1.0.
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

function parse_css_int(str) {
  // int or percentage.
  if (str[str.length - 1] === '%') return clamp_css_byte(parseFloat(str) / 100 * 255);
  return clamp_css_byte(parseInt(str));
}

function parse_css_float(str) {
  // float or percentage.
  if (str[str.length - 1] === '%') return clamp_css_float(parseFloat(str) / 100);
  return clamp_css_float(parseFloat(str));
}

function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) h += 1;else if (h > 1) h -= 1;

  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  return m1;
}

function parseCSSColor(css_str) {
  // Remove all whitespace, not compliant, but should just be more accepting.
  var str = css_str.replace(/ /g, '').toLowerCase();

  // Color keywords (and transparent) lookup.
  if (str in kCSSColorTable) return kCSSColorTable[str].slice(); // dup.

  // #abc and #abc123 syntax.
  if (str[0] === '#') {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16); // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xfff)) return null; // Covers NaN.
      return [(iv & 0xf00) >> 4 | (iv & 0xf00) >> 8, iv & 0xf0 | (iv & 0xf0) >> 4, iv & 0xf | (iv & 0xf) << 4, 1];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16); // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xffffff)) return null; // Covers NaN.
      return [(iv & 0xff0000) >> 16, (iv & 0xff00) >> 8, iv & 0xff, 1];
    }

    return null;
  }

  var op = str.indexOf('('),
      ep = str.indexOf(')');
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op + 1, ep - (op + 1)).split(',');
    var alpha = 1; // To allow case fallthrough.
    switch (fname) {
      case 'rgba':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
      // Fall through.
      case 'rgb':
        if (params.length !== 3) return null;
        return [parse_css_int(params[0]), parse_css_int(params[1]), parse_css_int(params[2]), alpha];
      case 'hsla':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
      // Fall through.
      case 'hsl':
        if (params.length !== 3) return null;
        var h = (parseFloat(params[0]) % 360 + 360) % 360 / 360; // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [clamp_css_byte(css_hue_to_rgb(m1, m2, h + 1 / 3) * 255), clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255), clamp_css_byte(css_hue_to_rgb(m1, m2, h - 1 / 3) * 255), alpha];
      default:
        return null;
    }
  }

  return null;
}

try {
  exports.parseCSSColor = parseCSSColor;
} catch (e) {}

/***/ }),

/***/ "./node_modules/mapbox-to-css-font/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mapbox-to-css-font/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fontWeights = {
  thin: 100,
  hairline: 100,
  'ultra-light': 100,
  'extra-light': 100,
  light: 200,
  book: 300,
  regular: 400,
  normal: 400,
  plain: 400,
  roman: 400,
  standard: 400,
  medium: 500,
  'semi-bold': 600,
  'demi-bold': 600,
  bold: 700,
  heavy: 800,
  black: 800,
  'extra-bold': 800,
  'ultra-black': 900,
  'extra-black': 900,
  'ultra-bold': 900,
  'heavy-black': 900,
  fat: 900,
  poster: 900
};
var sp = ' ';

var fontCache = {};

module.exports = function (font, size) {
  var cssData = fontCache[font];
  if (!cssData) {
    var parts = font.split(' ');
    var maybeWeight = parts[parts.length - 1].toLowerCase();
    var weight = 'normal';
    var style = 'normal';
    if (maybeWeight == 'normal' || maybeWeight == 'italic' || maybeWeight == 'oblique') {
      style = maybeWeight;
      parts.pop();
      maybeWeight = parts[parts.length - 1].toLowerCase();
    }
    for (var w in fontWeights) {
      if (maybeWeight == w || maybeWeight == w.replace('-', '') || maybeWeight == w.replace('-', ' ')) {
        weight = fontWeights[w];
        parts.pop();
        break;
      }
    }
    if (typeof maybeWeight == 'number') {
      weight = maybeWeight;
    }
    var fontFamily = parts.join(' ').replace('Klokantech Noto Sans', 'Noto Sans');
    if (fontFamily.indexOf(' ') !== -1) {
      fontFamily = '"' + fontFamily + '"';
    }
    // CSS font property: font-style font-weight font-size font-family
    cssData = fontCache[font] = [style, weight, fontFamily];
  }
  return cssData[0] + sp + cssData[1] + sp + size + 'px' + sp + cssData[2];
};

/***/ }),

/***/ "./node_modules/webfont-matcher/lib/fonts/google.js":
/*!**********************************************************!*\
  !*** ./node_modules/webfont-matcher/lib/fonts/google.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.10.0
(function () {
  var families;

  module.exports = {
    icon: 'icons/google.svg',
    name: 'google',
    title: 'Google Fonts',
    link: 'google.com/fonts',
    getNames: function getNames() {
      return families;
    },
    getLink: function getLink(name) {
      return "https://fonts.google.com/specimen/" + name.replace(/( )/g, '+');
    },
    normalizeName: function normalizeName(name) {
      return name;
    }
  };

  families = ["ABeeZee", "Abel", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo Black", "Archivo Narrow", "Arimo", "Arizonia", "Armata", "Artifika", "Arvo", "Arya", "Asap", "Asar", "Asset", "Astloch", "Asul", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "Bad Script", "Balthazar", "Bangers", "Basic", "Battambang", "Baumans", "Bayon", "Belgrano", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Bevan", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "Biryani", "Bitter", "Black Ops One", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Changa One", "Chango", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cutive", "Cutive Mono", "Damion", "Dancing Script", "Dangrek", "Dawning of a New Day", "Days One", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diplomata", "Diplomata SC", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Droid Sans", "Droid Sans Mono", "Droid Serif", "Duru Sans", "Dynalight", "EB Garamond", "Eagle Lake", "Eater", "Economica", "Eczar", "Ek Mukta", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fanwood Text", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Mono", "Fira Sans", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "GFS Didot", "GFS Neohellenic", "Gabriela", "Gafata", "Galdeano", "Galindo", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Griffy", "Gruppo", "Gudea", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "Hanuman", "Happy Monkey", "Headland One", "Henny Penny", "Herr Von Muellerhoff", "Hind", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Josefin Sans", "Josefin Slab", "Joti One", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "Kadwa", "Kalam", "Kameron", "Kantumruy", "Karla", "Karma", "Kaushan Script", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kite One", "Knewave", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Kurale", "La Belle Aurore", "Laila", "Lakki Reddy", "Lancelot", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Libre Baskerville", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "Macondo", "Macondo Swash Caps", "Magra", "Maiden Orange", "Mako", "Mallanna", "Mandali", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Megrim", "Meie Script", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Miniver", "Miss Fajardose", "Modak", "Modern Antiqua", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Muli", "Mystery Quest", "NTR", "Neucha", "Neuton", "New Rocker", "News Cycle", "Niconne", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Serif", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Odor Mean Chey", "Offside", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Ovo", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Palanquin", "Palanquin Dark", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Patua One", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "Poiret One", "Poller One", "Poly", "Pompiere", "Pontano Sans", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Pragati Narrow", "Prata", "Preahvihear", "Press Start 2P", "Princess Sofia", "Prociono", "Prosto One", "Puritan", "Purple Purse", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rationale", "Ravi Prakash", "Redressed", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rozha One", "Rubik", "Rubik Mono One", "Rubik One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Salsa", "Sanchez", "Sancreek", "Sansita One", "Sarala", "Sarina", "Sarpanch", "Satisfy", "Scada", "Scheherazade", "Schoolbell", "Seaweed Script", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Sonsie One", "Sorts Mill Goudy", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Special Elite", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Stalemate", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Sue Ellen Francisco", "Sumana", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tangerine", "Taprom", "Tauri", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trocchi", "Trochut", "Trykker", "Tulpen One", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "VT323", "Vampiro One", "Varela", "Varela Round", "Vast Shadow", "Vesper Libre", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Voltaire", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yanone Kaffeesatz", "Yantramanav", "Yellowtail", "Yeseva One", "Yesteryear", "Zeyada"];
}).call(undefined);

/***/ }),

/***/ "./olms.js":
/*!*****************!*\
  !*** ./olms.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index */ "./index.js");

var _stylefunction = __webpack_require__(/*! ./stylefunction */ "./stylefunction.js");

var _stylefunction2 = _interopRequireDefault(_stylefunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  apply: _index.apply,
  applyBackground: _index.applyBackground,
  applyStyle: _index.applyStyle,
  stylefunction: _stylefunction2.default
};

/***/ }),

/***/ "./stylefunction.js":
/*!**************************!*\
  !*** ./stylefunction.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              ol-mapbox-style - Use Mapbox Style objects with OpenLayers
                                                                                                                                                                                                                                                                              Copyright 2016-present Boundless Spatial, Inc.
                                                                                                                                                                                                                                                                              License: https://raw.githubusercontent.com/boundlessgeo/ol-mapbox-gl-style/master/LICENSE
                                                                                                                                                                                                                                                                              */

exports.default = function (olLayer, glStyle, source, resolutions, spriteData, spriteImageUrl, spriteImage, fonts) {
  if (!resolutions) {
    resolutions = [];
    for (var res = 78271.51696402048; resolutions.length < 21; res /= 2) {
      resolutions.push(res);
    }
  }
  if (typeof glStyle == 'string') {
    glStyle = JSON.parse(glStyle);
  }
  if (glStyle.version != 8) {
    throw new Error('glStyle version 8 required.');
  }

  var spriteImgSize = void 0;
  if (spriteImageUrl && !spriteImage) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      spriteImage = img;
      spriteImgSize = [img.width, img.height];
      olLayer.changed();
    };
    img.src = spriteImageUrl;
  }

  var ctx = document.createElement('CANVAS').getContext('2d');
  var measureCache = {};

  function wrapText(text, font, em) {
    var key = em + ',' + font + ',' + text;
    var wrappedText = measureCache[key];
    if (!wrappedText) {
      ctx.font = font;
      var oneEm = ctx.measureText('M').width;
      var width = oneEm * em;
      var words = text.split(' ');
      var line = '';
      var lines = [];
      for (var i = 0, ii = words.length; i < ii; ++i) {
        var word = words[i];
        if (ctx.measureText(line + word).width <= width) {
          line += (line ? ' ' : '') + word;
        } else {
          if (line) {
            lines.push(line);
          }
          line = word;
        }
      }
      if (line) {
        lines.push(line);
      }
      measureCache[key] = wrappedText = lines.join('\n');
    }
    return wrappedText;
  }

  var allLayers = (0, _deref2.default)(glStyle.layers);

  var layersBySourceLayer = {};
  var mapboxLayers = [];
  var mapboxSource = void 0;
  for (var i = 0, ii = allLayers.length; i < ii; ++i) {
    var layer = allLayers[i];
    var layerId = layer.id;
    if (typeof source == 'string' && layer.source == source || source.indexOf(layerId) !== -1) {
      var sourceLayer = layer['source-layer'];
      if (!mapboxSource) {
        mapboxSource = layer.source;
      }
      var layers = layersBySourceLayer[sourceLayer];
      if (!layers) {
        layers = layersBySourceLayer[sourceLayer] = [];
      }
      layers.push({
        layer: layer,
        index: i
      });
      mapboxLayers.push(layerId);
    }
    // // TODO revisit when diffing gets added
    delete functionCache[layerId];
    delete filterCache[layerId];
  }
  var iconImageCache = {};

  var styles = [];
  var patternCache = {};

  var styleFunction = function styleFunction(feature, resolution) {
    var properties = feature.getProperties();
    feature.styleIds = feature.styleIds || {};
    var layers = layersBySourceLayer[properties.layer];
    if (!layers) {
      return;
    }
    var zoom = resolutions.indexOf(resolution);
    if (zoom == -1) {
      zoom = Math.round((0, _util.getZoomForResolution)(resolution, resolutions));
    }
    var type = types[feature.getGeometry().getType()];
    var f = {
      properties: properties,
      type: type
    };
    var stylesLength = -1;
    for (var _i = 0, _ii = layers.length; _i < _ii; ++_i) {
      var layerData = layers[_i];
      var _layer = layerData.layer;
      var _layerId = _layer.id;

      var layout = _layer.layout || emptyObj;
      var paint = _layer.paint || emptyObj;
      if (layout.visibility === 'none' || 'minzoom' in _layer && zoom < _layer.minzoom || 'maxzoom' in _layer && zoom >= _layer.maxzoom) {
        continue;
      }
      feature.styleIds[zoom] = feature.styleIds[zoom] || [];
      var filter = _layer.filter;
      var icon = void 0,
          iconImg = void 0;
      if (!filter || evaluateFilter(_layerId, filter, f)) {
        var color = void 0,
            opacity = void 0,
            fill = void 0,
            stroke = void 0,
            strokeColor = void 0,
            style = void 0;
        var index = layerData.index;
        if (type == 3) {
          if ('fill-pattern' in paint) {
            var iconImage = getValue(_layerId, paint, 'fill-pattern', zoom, properties);
            if (iconImage) {
              icon = fromTemplate(iconImage, properties);
              if (spriteImage && spriteData && spriteData[icon]) {
                ++stylesLength;
                if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                  feature.styleIds[zoom].push(_layerId);
                }
                style = styles[stylesLength];
                if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                  style = styles[stylesLength] = new _Style2.default({
                    fill: new _Fill2.default()
                  });
                }
                fill = style.getFill();
                style.setZIndex(index);
                var pattern = patternCache[icon];
                if (!pattern) {
                  var spriteImageData = spriteData[icon];
                  var canvas = document.createElement('canvas');
                  canvas.width = spriteImageData.width;
                  canvas.height = spriteImageData.height;
                  var _ctx = canvas.getContext('2d');
                  _ctx.drawImage(spriteImage, spriteImageData.x, spriteImageData.y, spriteImageData.width, spriteImageData.height, 0, 0, spriteImageData.width, spriteImageData.height);
                  pattern = _ctx.createPattern(canvas, 'repeat');
                  patternCache[icon] = pattern;
                }
                fill.setColor(pattern);
              }
            }
          } else if ('fill-color' in paint) {
            opacity = getValue(_layerId, paint, 'fill-opacity', zoom, properties);
            color = colorWithOpacity(getValue(_layerId, paint, 'fill-color', zoom, properties), opacity);
            if (color) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  fill: new _Fill2.default()
                });
              }
              fill = style.getFill();
              fill.setColor(color);
              style.setZIndex(index);
            }
            if ('fill-outline-color' in paint) {
              strokeColor = colorWithOpacity(getValue(_layerId, paint, 'fill-outline-color', zoom, properties), opacity);
            } else if ('fill-antialias' in paint) {
              strokeColor = color;
            }
            if (strokeColor) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  stroke: new _Stroke2.default()
                });
              }
              stroke = style.getStroke();
              stroke.setLineCap(defaults['line-cap']);
              stroke.setLineJoin(defaults['line-join']);
              stroke.setMiterLimit(defaults['line-miter-limit']);
              stroke.setColor(strokeColor);
              stroke.setWidth(1);
              stroke.setLineDash(null);
              style.setZIndex(index);
            }
          }
        }
        if (type != 1) {
          (function () {
            color = !('line-pattern' in paint) && 'line-color' in paint ? colorWithOpacity(getValue(_layerId, paint, 'line-color', zoom, properties), getValue(_layerId, paint, 'line-opacity', zoom, properties)) : undefined;
            var width = getValue(_layerId, paint, 'line-width', zoom, properties);
            if (color && width > 0) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  stroke: new _Stroke2.default()
                });
              }
              stroke = style.getStroke();
              stroke.setLineCap(getValue(_layerId, layout, 'line-cap', zoom, properties));
              stroke.setLineJoin(getValue(_layerId, layout, 'line-join', zoom, properties));
              stroke.setMiterLimit(getValue(_layerId, layout, 'line-miter-limit', zoom, properties));
              stroke.setColor(color);
              stroke.setWidth(width);
              stroke.setLineDash(paint['line-dasharray'] ? getValue(_layerId, paint, 'line-dasharray', zoom, properties).map(function (x) {
                return x * width;
              }) : null);
              style.setZIndex(index);
            }
          })();
        }

        var hasImage = false;
        var text = null;
        var skipLabel = void 0;
        if ((type == 1 || type == 2) && 'icon-image' in layout) {
          var _iconImage = getValue(_layerId, layout, 'icon-image', zoom, properties);
          if (_iconImage) {
            icon = fromTemplate(_iconImage, properties);
            var styleGeom = undefined;
            if (spriteImage && spriteData && spriteData[icon]) {
              if (type == 2) {
                var geom = feature.getGeometry();
                // ol package and ol-debug.js only
                if (geom.getFlatMidpoint) {
                  var extent = geom.getExtent();
                  var size = Math.sqrt(Math.max(Math.pow((extent[2] - extent[0]) / resolution, 2), Math.pow((extent[3] - extent[1]) / resolution, 2)));
                  if (size > 150) {
                    //FIXME Do not hard-code a size of 150
                    styleGeom = new _Point2.default(geom.getFlatMidpoint());
                  }
                }
              }
              if (type !== 2 || styleGeom) {
                ++stylesLength;
                if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                  feature.styleIds[zoom].push(_layerId);
                }
                style = styles[stylesLength];
                if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
                  style = styles[stylesLength] = new _Style2.default();
                }
                style.setGeometry(styleGeom);
                var iconSize = getValue(_layerId, layout, 'icon-size', zoom, properties);
                var iconColor = paint['icon-color'] !== undefined ? getValue(_layerId, paint, 'icon-color', zoom, properties) : null;
                var iconTranslate = getValue(_layerId, paint, 'icon-translate', zoom, properties);
                var iconTranslateAnchor = getValue(_layerId, paint, 'icon-translate-anchor', zoom, properties);
                var iconAnchorValue = getValue(_layerId, layout, 'icon-anchor', zoom, properties);
                var iconOffset = getValue(_layerId, layout, 'icon-offset', zoom, properties);

                var _covertIconAnchor = covertIconAnchor(iconAnchorValue),
                    anchorOffset = _covertIconAnchor.anchorOffset,
                    _covertIconAnchor$ico = _covertIconAnchor.iconAnchor,
                    iconAnchor = _covertIconAnchor$ico === undefined ? iconAnchorValue : _covertIconAnchor$ico;

                var icon_cache_key = icon + '.' + iconSize + '.' + iconTranslate + '.' + iconTranslateAnchor + '.' + iconAnchor + '.' + iconOffset;
                if (iconColor !== null) {
                  icon_cache_key += '.' + iconColor;
                }
                iconImg = iconImageCache[icon_cache_key];
                if (!iconImg) {
                  var _spriteImageData = spriteData[icon];
                  var _canvas = document.createElement('canvas');
                  _canvas.width = _spriteImageData.width;
                  _canvas.height = _spriteImageData.height;
                  var _ctx2 = _canvas.getContext('2d');
                  _ctx2.drawImage(spriteImage, _spriteImageData.x, _spriteImageData.y, _spriteImageData.width, _spriteImageData.height, 0, 0, _spriteImageData.width, _spriteImageData.height);
                  var data = _ctx2.getImageData(0, 0, _canvas.width, _canvas.height);
                  if (iconColor !== null) {
                    // cut out the sprite and color it
                    color = colorWithOpacity(iconColor, 1);
                    for (var c = 0, cc = data.data.length; c < cc; c += 4) {
                      data.data[c] = color[0];
                      data.data[c + 1] = color[1];
                      data.data[c + 2] = color[2];
                    }
                  }
                  _ctx2.putImageData(data, 0, 0);
                  var translateOffset = [iconTranslate[0] / _spriteImageData.width, iconTranslate[1] / _spriteImageData.height];
                  iconImg = iconImageCache[icon_cache_key] = new _Icon2.default({
                    img: _canvas,
                    anchorOrigin: iconAnchor,
                    anchor: [iconOffset[0] + anchorOffset[0] + translateOffset[0], iconOffset[1] + anchorOffset[1] - translateOffset[1]],
                    imgSize: [_canvas.width, _canvas.height],
                    scale: iconSize / _spriteImageData.pixelRatio
                  });
                }
                var rotateValue = getValue(_layerId, layout, 'icon-rotate', zoom, properties);
                if (rotateValue.indexOf && rotateValue.indexOf('{') === 0) {
                  rotateValue = 360 - fromTemplate(rotateValue, properties);
                }
                iconImg.setRotation((0, _util.deg2rad)(rotateValue));
                iconImg.setOpacity(getValue(_layerId, paint, 'icon-opacity', zoom, properties));
                style.setImage(iconImg);
                text = style.getText();
                style.setText(undefined);
                style.setZIndex(99999 - index);
                hasImage = true;
                skipLabel = false;
              } else {
                skipLabel = true;
              }
            }
          }
        }

        if (type == 1 && 'circle-radius' in paint) {
          ++stylesLength;
          if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
            feature.styleIds[zoom].push(_layerId);
          }
          style = styles[stylesLength];
          if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
            style = styles[stylesLength] = new _Style2.default();
          }
          var circleRadius = getValue(_layerId, paint, 'circle-radius', zoom, properties);
          var circleStrokeColor = getValue(_layerId, paint, 'circle-stroke-color', zoom, properties);
          var circleColor = getValue(_layerId, paint, 'circle-color', zoom, properties);
          var circleOpacity = getValue(_layerId, paint, 'circle-opacity', zoom, properties);
          var circleStrokeWidth = getValue(_layerId, paint, 'circle-stroke-width', zoom, properties);
          var circleStrokeOpacity = getValue(_layerId, paint, 'circle-stroke-opacity', zoom, properties);
          var cache_key = circleRadius + '.' + circleStrokeColor + '.' + circleColor + '.' + circleOpacity + '.' + circleStrokeWidth + '.' + circleStrokeOpacity;
          iconImg = iconImageCache[cache_key];
          if (!iconImg) {
            iconImg = new _Circle2.default({
              radius: circleRadius,
              stroke: circleStrokeWidth === 0 ? undefined : new _Stroke2.default({
                width: circleStrokeWidth,
                color: colorWithOpacity(circleStrokeColor, circleStrokeOpacity)
              }),
              fill: new _Fill2.default({
                color: colorWithOpacity(circleColor, circleOpacity)
              })
            });
          }
          style.setImage(iconImg);
          text = style.getText();
          style.setText(undefined);
          style.setGeometry(undefined);
          style.setZIndex(99999 - index);
          hasImage = true;
        }

        var label = void 0;
        if ('text-field' in layout) {
          var textField = getValue(_layerId, layout, 'text-field', zoom, properties);
          label = fromTemplate(textField, properties);
        }
        if (label && !skipLabel) {
          if (!hasImage) {
            ++stylesLength;
            if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
              feature.styleIds[zoom].push(_layerId);
            }
            style = styles[stylesLength];
            if (!style || !style.getText() || style.getFill() || style.getStroke()) {
              style = styles[stylesLength] = new _Style2.default();
            }
            style.setImage(undefined);
            style.setGeometry(undefined);
          }
          if (!style.getText()) {
            style.setText(text || new _Text2.default());
          }
          text = style.getText();
          var textSize = getValue(_layerId, layout, 'text-size', zoom, properties);
          var font = (0, _mapboxToCssFont2.default)(chooseFont(getValue(_layerId, layout, 'text-font', zoom, properties)), textSize);
          var textTransform = layout['text-transform'];
          if (textTransform == 'uppercase') {
            label = label.toUpperCase();
          } else if (textTransform == 'lowercase') {
            label = label.toLowerCase();
          }
          var wrappedLabel = type == 2 ? label : wrapText(label, font, getValue(_layerId, layout, 'text-max-width', zoom, properties));
          text.setText(wrappedLabel);
          text.setFont(font);
          text.setRotation((0, _util.deg2rad)(getValue(_layerId, layout, 'text-rotate', zoom, properties)));
          var textAnchor = getValue(_layerId, layout, 'text-anchor', zoom, properties);
          var placement = hasImage || type == 1 ? 'point' : getValue(_layerId, layout, 'symbol-placement', zoom, properties);
          text.setPlacement(placement);
          if (placement == 'point') {
            var textAlign = 'center';
            if (textAnchor.indexOf('left') !== -1) {
              textAlign = 'left';
            } else if (textAnchor.indexOf('right') !== -1) {
              textAlign = 'right';
            }
            text.setTextAlign(textAlign);
          } else {
            text.setTextAlign();
          }
          var textBaseline = 'middle';
          if (textAnchor.indexOf('bottom') == 0) {
            textBaseline = 'bottom';
          } else if (textAnchor.indexOf('top') == 0) {
            textBaseline = 'top';
          }
          text.setTextBaseline(textBaseline);
          var textOffset = getValue(_layerId, layout, 'text-offset', zoom, properties);
          var textTranslate = getValue(_layerId, paint, 'text-translate', zoom, properties);
          text.setOffsetX(textOffset[0] * textSize + textTranslate[0]);
          text.setOffsetY(textOffset[1] * textSize + textTranslate[1]);
          opacity = getValue(_layerId, paint, 'text-opacity', zoom, properties);
          var textColor = new _Fill2.default();

          textColor.setColor(colorWithOpacity(getValue(_layerId, paint, 'text-color', zoom, properties), opacity));
          text.setFill(textColor);
          var haloColor = colorWithOpacity(getValue(_layerId, paint, 'text-halo-color', zoom, properties), opacity);
          if (haloColor) {
            var textHalo = new _Stroke2.default();
            textHalo.setColor(haloColor);
            textHalo.setWidth(getValue(_layerId, paint, 'text-halo-width', zoom, properties));
            text.setStroke(textHalo);
          } else {
            text.setStroke(undefined);
          }
          style.setZIndex(99999 - index);
        }
      }
    }

    if (stylesLength > -1) {
      styles.length = stylesLength + 1;
      return styles;
    }
  };

  olLayer.setStyle(styleFunction);
  olLayer.set('mapbox-source', mapboxSource);
  olLayer.set('mapbox-layers', mapboxLayers);
  return styleFunction;
};

var _Style = __webpack_require__(/*! ol/style/Style */ "ol/style/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Fill = __webpack_require__(/*! ol/style/Fill */ "ol/style/Fill");

var _Fill2 = _interopRequireDefault(_Fill);

var _Stroke = __webpack_require__(/*! ol/style/Stroke */ "ol/style/Stroke");

var _Stroke2 = _interopRequireDefault(_Stroke);

var _Icon = __webpack_require__(/*! ol/style/Icon */ "ol/style/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = __webpack_require__(/*! ol/style/Text */ "ol/style/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Circle = __webpack_require__(/*! ol/style/Circle */ "ol/style/Circle");

var _Circle2 = _interopRequireDefault(_Circle);

var _Point = __webpack_require__(/*! ol/geom/Point */ "ol/geom/Point");

var _Point2 = _interopRequireDefault(_Point);

var _deref = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/deref */ "./node_modules/@mapbox/mapbox-gl-style-spec/deref.js");

var _deref2 = _interopRequireDefault(_deref);

var _function = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/function */ "./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js");

var _function2 = _interopRequireDefault(_function);

var _feature_filter = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/feature_filter */ "./node_modules/@mapbox/mapbox-gl-style-spec/feature_filter/index.js");

var _feature_filter2 = _interopRequireDefault(_feature_filter);

var _mapboxToCssFont = __webpack_require__(/*! mapbox-to-css-font */ "./node_modules/mapbox-to-css-font/index.js");

var _mapboxToCssFont2 = _interopRequireDefault(_mapboxToCssFont);

var _util = __webpack_require__(/*! ./util */ "./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functionTypes = {
  'line-miter-limit': 'interpolated',
  'fill-opacity': 'interpolated',
  'line-opacity': 'interpolated',
  'line-width': 'interpolated',
  'text-halo-width': 'interpolated',
  'text-max-width': 'interpolated',
  'text-offset': 'interpolated',
  'text-opacity': 'interpolated',
  'text-rotate': 'interpolated',
  'text-size': 'interpolated',
  'icon-opacity': 'interpolated',
  'icon-rotate': 'interpolated',
  'icon-anchor': 'interpolated',
  'icon-offset': 'interpolated',
  'icon-translate': 'interpolated',
  'icon-translate-anchor': 'interpolated',
  'icon-size': 'interpolated',
  'icon-color': 'interpolated',
  'circle-radius': 'interpolated',
  'circle-opacity': 'interpolated',
  'circle-stroke-opacity': 'interpolated',
  'circle-stroke-width': 'interpolated',
  'circle-color': 'interpolated',
  'circle-stroke-color': 'interpolated',
  'text-halo-color': 'interpolated',
  'text-color': 'interpolated',
  'line-color': 'interpolated',
  'fill-outline-color': 'interpolated',
  'fill-color': 'interpolated',
  'icon-image': 'piecewise-constant',
  'line-cap': 'piecewise-constant',
  'line-join': 'piecewise-constant',
  'line-dasharray': 'piecewise-constant',
  'symbol-placement': 'piecewise-constant',
  'text-anchor': 'piecewise-constant',
  'text-field': 'piecewise-constant',
  'text-font': 'piecewise-constant'
};

var defaults = {
  'fill-opacity': 1,
  'line-cap': 'butt',
  'line-join': 'miter',
  'line-miter-limit': 2,
  'line-opacity': 1,
  'line-width': 1,
  'symbol-placement': 'point',
  'text-anchor': 'center',
  'text-color': '#000000',
  'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
  'text-halo-color': 'rgba(0, 0, 0, 0)',
  'text-halo-width': 0,
  'text-max-width': 10,
  'text-offset': [0, 0],
  'text-translate': [0, 0],
  'text-opacity': 1,
  'text-rotate': 0,
  'text-size': 16,
  'icon-opacity': 1,
  'icon-rotate': 0,
  'icon-offset': [0, 0],
  'icon-translate': [0, 0],
  'icon-translate-anchor': 'map',
  'icon-anchor': 'center',
  'icon-size': 1,
  'circle-color': '#000000',
  'circle-stroke-color': '#000000',
  'circle-opacity': 1,
  'circle-stroke-opacity': 1,
  'circle-stroke-width': 0
};

var types = {
  'Point': 1,
  'MultiPoint': 1,
  'LineString': 2,
  'MultiLineString': 2,
  'Polygon': 3,
  'MultiPolygon': 3
};

var functionCache = {};

function getValue(layerId, layoutOrPaint, property, zoom, properties) {
  if (!functionCache[layerId]) {
    functionCache[layerId] = {};
  }
  var functions = functionCache[layerId];
  if (!functions[property]) {
    var value = layoutOrPaint[property];
    if (value === undefined) {
      value = defaults[property];
    }
    functions[property] = (0, _function2.default)(value, {
      function: functionTypes[property],
      type: property.indexOf('color') !== -1 ? 'color' : (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value.stops && typeof value.stops[0][0] == 'number' ? 'number' : undefined
    });
  }
  return functions[property](zoom, properties);
}

function covertIconAnchor(iconAnchor) {
  var anchorOffset = [0.5, 0.5];
  if (['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(iconAnchor)) {
    anchorOffset = [0, 0];
  }
  if (iconAnchor === 'left') {
    iconAnchor = 'top-left';
    anchorOffset = [0, 0.5];
  }
  if (iconAnchor === 'right') {
    iconAnchor = 'top-left';
    anchorOffset = [1, 0.5];
  }
  if (iconAnchor === 'bottom') {
    iconAnchor = 'top-left';
    anchorOffset = [0.5, 1];
  }
  if (iconAnchor === 'top') {
    iconAnchor = 'top-left';
    anchorOffset = [0.5, 0];
  }
  //center
  return {
    anchorOffset: anchorOffset,
    iconAnchor: iconAnchor
  };
}

var fontMap = {};

function chooseFont(fonts, availableFonts) {
  if (fontMap[fonts]) {
    return fontMap[fonts];
  }
  if (availableFonts) {
    for (var i = 0, ii = fonts.length; i < ii; ++i) {
      var font = fonts[i];
      if (availableFonts.indexOf(font) != -1) {
        fontMap[fonts] = font;
        break;
      }
    }
    if (!fontMap[fonts]) {
      // fallback font
      fontMap[fonts] = fonts[fonts.length - 1];
    }
  } else {
    fontMap[fonts] = fonts[0];
  }
  return fontMap[fonts];
}

var filterCache = {};

function evaluateFilter(layerId, filter, feature) {
  if (!(layerId in filterCache)) {
    filterCache[layerId] = (0, _feature_filter2.default)(filter);
  }
  return filterCache[layerId](feature);
}

var colorCache = {};

function colorWithOpacity(color, opacity) {
  if (color && opacity !== undefined) {
    var colorData = colorCache[color];
    if (!colorData) {
      colorCache[color] = colorData = {
        color: [color[0] * 255 / color[3], color[1] * 255 / color[3], color[2] * 255 / color[3], color[3]],
        opacity: color[3]
      };
    }
    color = colorData.color;
    color[3] = colorData.opacity * opacity;
    if (color[3] === 0) {
      color = undefined;
    }
  }
  return color;
}

var templateRegEx = /^([^]*)\{(.*)\}([^]*)$/;

function fromTemplate(text, properties) {
  var parts = void 0;
  do {
    parts = text.match(templateRegEx);
    if (parts) {
      var value = properties[parts[2]] || '';
      text = parts[1] + value + parts[3];
    }
  } while (parts);
  return text;
}

var emptyObj = {};

/**
 * Creates a style function from the `glStyle` object for all layers that use
 * the specified `source`, which needs to be a `"type": "vector"` or
 * `"type": "geojson"` source and applies it to the specified OpenLayers layer.
 *
 * @param {ol.layer.Vector|ol.layer.VectorTile} olLayer OpenLayers layer to
 * apply the style to. In addition to the style, the layer will get two
 * properties: `mapbox-source` will be the `id` of the `glStyle`'s source used
 * for the layer, and `mapbox-layers` will be an array of the `id`s of the
 * `glStyle`'s layers.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string|Array<string>} source `source` key or an array of layer `id`s
 * from the Mapbox Style object. When a `source` key is provided, all layers for
 * the specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {Array<number>} [resolutions=[78271.51696402048, 39135.75848201024,
 * 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564,
 * 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525,
 * 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032,
 * 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395,
 * 0.29858214173896974, 0.14929107086948487, 0.07464553543474244]]
 * Resolutions for mapping resolution to zoom level.
 * @param {Object} [spriteData=undefined] Sprite data from the url specified in
 * the Mapbox Style object's `sprite` property. Only required if a `sprite`
 * property is specified in the Mapbox Style object.
 * @param {Object} [spriteImageUrl=undefined] Sprite image url for the sprite
 * specified in the Mapbox Style object's `sprite` property. Only required if a
 * `sprite` property is specified in the Mapbox Style object.
 * @param {Array<string>} [fonts=undefined] Array of available fonts, using the
 * same font names as the Mapbox Style object. If not provided, the style
 * function will always use the first font from the font array.
 * @return {ol.style.StyleFunction} Style function for use in
 * `ol.layer.Vector` or `ol.layer.VectorTile`.
 */

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deg2rad = deg2rad;
exports.getZoomForResolution = getZoomForResolution;
function deg2rad(degrees) {
  return degrees * Math.PI / 180;
}

function getZoomForResolution(resolution, resolutions) {
  var i = 0;
  var ii = resolutions.length;
  for (; i < ii; ++i) {
    var candidate = resolutions[i];
    if (candidate < resolution && i + 1 < ii) {
      var zoomFactor = resolutions[i] / resolutions[i + 1];
      return i + Math.log(resolutions[i] / resolution) / Math.log(zoomFactor);
    }
  }
  return ii - 1;
}

/***/ }),

/***/ "ol/Map":
/*!*************************!*\
  !*** external "ol.Map" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.Map;

/***/ }),

/***/ "ol/Observable":
/*!********************************!*\
  !*** external "ol.Observable" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.Observable;

/***/ }),

/***/ "ol/format/GeoJSON":
/*!************************************!*\
  !*** external "ol.format.GeoJSON" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.format.GeoJSON;

/***/ }),

/***/ "ol/format/MVT":
/*!********************************!*\
  !*** external "ol.format.MVT" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.format.MVT;

/***/ }),

/***/ "ol/geom/Point":
/*!********************************!*\
  !*** external "ol.geom.Point" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.geom.Point;

/***/ }),

/***/ "ol/layer/Tile":
/*!********************************!*\
  !*** external "ol.layer.Tile" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.layer.Tile;

/***/ }),

/***/ "ol/layer/Vector":
/*!**********************************!*\
  !*** external "ol.layer.Vector" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.layer.Vector;

/***/ }),

/***/ "ol/layer/VectorTile":
/*!**************************************!*\
  !*** external "ol.layer.VectorTile" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.layer.VectorTile;

/***/ }),

/***/ "ol/proj":
/*!**************************!*\
  !*** external "ol.proj" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.proj;

/***/ }),

/***/ "ol/source/TileJSON":
/*!*************************************!*\
  !*** external "ol.source.TileJSON" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.TileJSON;

/***/ }),

/***/ "ol/source/Vector":
/*!***********************************!*\
  !*** external "ol.source.Vector" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.Vector;

/***/ }),

/***/ "ol/source/VectorTile":
/*!***************************************!*\
  !*** external "ol.source.VectorTile" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.VectorTile;

/***/ }),

/***/ "ol/source/XYZ":
/*!********************************!*\
  !*** external "ol.source.XYZ" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.XYZ;

/***/ }),

/***/ "ol/style/Circle":
/*!**********************************!*\
  !*** external "ol.style.Circle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Circle;

/***/ }),

/***/ "ol/style/Fill":
/*!********************************!*\
  !*** external "ol.style.Fill" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Fill;

/***/ }),

/***/ "ol/style/Icon":
/*!********************************!*\
  !*** external "ol.style.Icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Icon;

/***/ }),

/***/ "ol/style/Stroke":
/*!**********************************!*\
  !*** external "ol.style.Stroke" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Stroke;

/***/ }),

/***/ "ol/style/Style":
/*!*********************************!*\
  !*** external "ol.style.Style" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Style;

/***/ }),

/***/ "ol/style/Text":
/*!********************************!*\
  !*** external "ol.style.Text" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Text;

/***/ }),

/***/ "ol/tilegrid":
/*!******************************!*\
  !*** external "ol.tilegrid" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.tilegrid;

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29sbXMvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvZGVyZWYuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL25vZGVfbW9kdWxlcy9AbWFwYm94L21hcGJveC1nbC1zdHlsZS1zcGVjL2ZlYXR1cmVfZmlsdGVyL2luZGV4LmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy9mdW5jdGlvbi9jb2xvcl9zcGFjZXMuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL25vZGVfbW9kdWxlcy9AbWFwYm94L21hcGJveC1nbC1zdHlsZS1zcGVjL2Z1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy91dGlsL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9nZXRfdHlwZS5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9pbnRlcnBvbGF0ZS5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9wYXJzZV9jb2xvci5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9yZWZfcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL2Nzc2NvbG9ycGFyc2VyL2Nzc2NvbG9ycGFyc2VyLmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvbWFwYm94LXRvLWNzcy1mb250L2luZGV4LmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvd2ViZm9udC1tYXRjaGVyL2xpYi9mb250cy9nb29nbGUuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL29sbXMuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL3N0eWxlZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL3V0aWwuanMiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLk1hcFwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLmZvcm1hdC5HZW9KU09OXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLmZvcm1hdC5NVlRcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuZ2VvbS5Qb2ludFwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5sYXllci5UaWxlXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLmxheWVyLlZlY3RvclwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5sYXllci5WZWN0b3JUaWxlXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnByb2pcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc291cmNlLlRpbGVKU09OXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnNvdXJjZS5WZWN0b3JcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc291cmNlLlZlY3RvclRpbGVcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc291cmNlLlhZWlwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5DaXJjbGVcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc3R5bGUuRmlsbFwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5JY29uXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnN0eWxlLlN0cm9rZVwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5TdHlsZVwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5UZXh0XCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnRpbGVncmlkXCIiXSwibmFtZXMiOlsiYXBwbHlTdHlsZSIsImFwcGx5QmFja2dyb3VuZCIsImFwcGx5IiwiZ2V0TGF5ZXIiLCJnZXRTb3VyY2UiLCJhdmFpbGFibGVGb250cyIsImxvYWRGb250IiwiZm9udHMiLCJpIiwiaWkiLCJBcnJheSIsImlzQXJyYXkiLCJzdG9wcyIsImxlbmd0aCIsImdvb2dsZUZhbWlsaWVzIiwiZ2V0TmFtZXMiLCJmYW1pbGllcyIsIm1hcCIsImZvbnQiLCJzcGxpdCIsInJlcGxhY2UiLCJmYW1pbHkiLCJpbmRleE9mIiwicHVzaCIsImZvbnRVcmwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYXJrdXAiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJkZWZhdWx0Rm9udCIsInByZXByb2Nlc3MiLCJsYXllciIsImxheW91dCIsInNwcml0ZVJlZ0V4Iiwid2l0aFBhdGgiLCJ1cmwiLCJwYXRoIiwidG9TcHJpdGVVcmwiLCJleHRlbnNpb24iLCJwYXJ0cyIsIm1hdGNoIiwiZ2xTdHlsZSIsInNvdXJjZSIsInJlc29sdXRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJKU09OIiwicGFyc2UiLCJ2ZXJzaW9uIiwiRXJyb3IiLCJzcHJpdGVTY2FsZSIsInNwcml0ZURhdGEiLCJzcHJpdGVJbWFnZVVybCIsInNwcml0ZSIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzaXplRmFjdG9yIiwic3ByaXRlVXJsIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJyIiwic3ByaXRlc0pzb24iLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3R5bGUiLCJzZXRTdHlsZSIsImxheWVycyIsImlkIiwiZSIsInNldFRpbWVvdXQiLCJzZXRCYWNrZ3JvdW5kIiwidXBkYXRlU3R5bGUiLCJlbGVtZW50IiwiZ2V0VGFyZ2V0RWxlbWVudCIsInBhaW50Iiwiem9vbSIsImdldFZpZXciLCJnZXRab29tIiwiYmciLCJmdW5jdGlvbiIsInR5cGUiLCJNYXRoIiwicm91bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kT3BhY2l0eSIsInZpc2liaWxpdHkiLCJvbiIsInNvbWUiLCJsIiwiZ2V0U291cmNlSWRCeVJlZiIsInJlZiIsInNvdXJjZUlkIiwicHJvY2Vzc1N0eWxlIiwiYmFzZVVybCIsImhvc3QiLCJhY2Nlc3NUb2tlbiIsInZpZXciLCJnZXRDZW50ZXIiLCJzZXRDZW50ZXIiLCJjZW50ZXIiLCJzZXRab29tIiwiZml0IiwiZ2V0UHJvamVjdGlvbiIsImdldEV4dGVudCIsIm5lYXJlc3QiLCJzaXplIiwiZ2V0U2l6ZSIsImdsTGF5ZXJzIiwiZ2VvSnNvbkZvcm1hdCIsImxheWVySWRzIiwiZmluYWxpemVMYXllciIsImFkZExheWVyIiwic2V0VmlzaWJsZSIsIm9uY2UiLCJnbExheWVyIiwiZ2xTb3VyY2UiLCJnbFNvdXJjZUlkIiwibWFwaWQiLCJzb3VyY2VzIiwidGlsZXMiLCJ0aWxlR3JpZCIsInRpbGVTaXplIiwibWF4Wm9vbSIsIm1heHpvb20iLCJtaW5ab29tIiwibWluem9vbSIsImRlY2x1dHRlciIsIm1heFJlc29sdXRpb24iLCJnZXRNaW5ab29tIiwiZ2V0UmVzb2x1dGlvbiIsImF0dHJpYnV0aW9ucyIsImF0dHJpYnV0aW9uIiwiZm9ybWF0IiwidXJscyIsInZpc2libGUiLCJ6SW5kZXgiLCJ0aWxlanNvbiIsImtleSIsImdldFN0YXRlIiwidGlsZUpTT05Eb2MiLCJnZXRUaWxlSlNPTiIsInRpbGUiLCJnZXRUaWxlR3JpZCIsInNldFNvdXJjZSIsImdldEF0dHJpYnV0aW9ucyIsImdldE1heFpvb20iLCJzZXRNYXhSZXNvbHV0aW9uIiwiY3Jvc3NPcmlnaW4iLCJzZXRUaWxlTG9hZEZ1bmN0aW9uIiwic3JjIiwiYmJveCIsImdldFRpbGVDb29yZEV4dGVudCIsImdldFRpbGVDb29yZCIsInRvU3RyaW5nIiwiZ2V0SW1hZ2UiLCJkYXRhIiwiZmVhdHVyZXMiLCJnZW9Kc29uVXJsIiwicmVhZEZlYXR1cmVzIiwiZmVhdHVyZVByb2plY3Rpb24iLCJzZXQiLCJ0YXJnZXQiLCJhIiwicGF0aG5hbWUiLCJzbGljZSIsImpvaW4iLCJzdWJzdHIiLCJsYXllcklkIiwiZ2V0TGF5ZXJzIiwiZ2V0QXJyYXkiLCJnZXQiLCJyZWZQcm9wZXJ0aWVzIiwicmVxdWlyZSIsImRlcmVmIiwicGFyZW50IiwicmVzdWx0IiwiayIsImZvckVhY2giLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVyZWZMYXllcnMiLCJPYmplY3QiLCJjcmVhdGUiLCJjcmVhdGVGaWx0ZXIiLCJ0eXBlcyIsImZpbHRlciIsIkZ1bmN0aW9uIiwiY29tcGlsZSIsIm9wIiwic3RyIiwiY29tcGlsZUNvbXBhcmlzb25PcCIsImNvbXBpbGVMb2dpY2FsT3AiLCJjb21waWxlTmVnYXRpb24iLCJjb21waWxlSW5PcCIsImNvbXBpbGVIYXNPcCIsImNvbXBpbGVQcm9wZXJ0eVJlZmVyZW5jZSIsInByb3BlcnR5Iiwic3RyaW5naWZ5IiwidmFsdWUiLCJjaGVja1R5cGUiLCJsZWZ0IiwicmlnaHQiLCJleHByZXNzaW9ucyIsInZhbHVlcyIsInNvcnQiLCJjb21wYXJlIiwiZXhwcmVzc2lvbiIsImIiLCJYbiIsIlluIiwiWm4iLCJ0MCIsInQxIiwidDIiLCJ0MyIsImRlZzJyYWQiLCJQSSIsInJhZDJkZWciLCJ4eXoybGFiIiwidCIsInBvdyIsImxhYjJ4eXoiLCJ4eXoycmdiIiwieCIsInJnYjJ4eXoiLCJyZ2JUb0xhYiIsInJnYkNvbG9yIiwieSIsInoiLCJsYWJUb1JnYiIsImxhYkNvbG9yIiwiaXNOYU4iLCJyZ2JUb0hjbCIsImgiLCJhdGFuMiIsInNxcnQiLCJoY2xUb1JnYiIsImhjbENvbG9yIiwiYyIsImNvcyIsInNpbiIsImxhYiIsImZvcndhcmQiLCJyZXZlcnNlIiwiaGNsIiwiY29sb3JTcGFjZXMiLCJwYXJzZUNvbG9yIiwiZXh0ZW5kIiwiZ2V0VHlwZSIsImludGVycG9sYXRlIiwiaWRlbnRpdHlGdW5jdGlvbiIsImNyZWF0ZUZ1bmN0aW9uIiwicGFyYW1ldGVycyIsInByb3BlcnR5U3BlYyIsImlzQ29sb3IiLCJmdW4iLCJpc0Z1bmN0aW9uRGVmaW5pdGlvbiIsImlzRmVhdHVyZUNvbnN0YW50IiwiaXNab29tQ29uc3RhbnQiLCJ6b29tQW5kRmVhdHVyZURlcGVuZGVudCIsImZlYXR1cmVEZXBlbmRlbnQiLCJ6b29tRGVwZW5kZW50Iiwic3RvcCIsImRlZmF1bHQiLCJpbm5lckZ1biIsImhhc2hlZFN0b3BzIiwiY2F0ZWdvcmljYWxLZXlUeXBlIiwiZXZhbHVhdGVFeHBvbmVudGlhbEZ1bmN0aW9uIiwiZXZhbHVhdGVJbnRlcnZhbEZ1bmN0aW9uIiwiZXZhbHVhdGVDYXRlZ29yaWNhbEZ1bmN0aW9uIiwiZXZhbHVhdGVJZGVudGl0eUZ1bmN0aW9uIiwib3V0cHV0RnVuY3Rpb24iLCJjb2xvclNwYWNlIiwiY29sb3JzcGFjZSIsInMiLCJmZWF0dXJlRnVuY3Rpb25zIiwiem9vbVN0b3BzIiwiZmVhdHVyZUZ1bmN0aW9uU3RvcHMiLCJmZWF0dXJlIiwiYmFzZSIsImNvYWxlc2NlIiwiaW5wdXQiLCJrZXlUeXBlIiwiZXZhbHVhdGVkIiwibiIsImluZGV4IiwiZmluZFN0b3BMZXNzVGhhbk9yRXF1YWxUbyIsImludGVycG9sYXRpb25GYWN0b3IiLCJvdXRwdXRMb3dlciIsIm91dHB1dFVwcGVyIiwiaW50ZXJwIiwiYXJncyIsImV2YWx1YXRlZExvd2VyIiwiZXZhbHVhdGVkVXBwZXIiLCJsb3dlckluZGV4IiwidXBwZXJJbmRleCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRWYWx1ZSIsInVwcGVyVmFsdWUiLCJmbG9vciIsIm1heCIsImxvd2VyVmFsdWUiLCJkaWZmZXJlbmNlIiwicHJvZ3Jlc3MiLCJvdXRwdXQiLCJpbnB1dHMiLCJ2YWwiLCJOdW1iZXIiLCJTdHJpbmciLCJCb29sZWFuIiwibnVtYmVyIiwidmVjMiIsImZyb20iLCJ0byIsImNvbG9yIiwiYXJyYXkiLCJkIiwicGFyc2VDb2xvclN0cmluZyIsInBhcnNlQ1NTQ29sb3IiLCJyZ2JhIiwia0NTU0NvbG9yVGFibGUiLCJjbGFtcF9jc3NfYnl0ZSIsImNsYW1wX2Nzc19mbG9hdCIsImYiLCJwYXJzZV9jc3NfaW50IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwicGFyc2VfY3NzX2Zsb2F0IiwiY3NzX2h1ZV90b19yZ2IiLCJtMSIsIm0yIiwiY3NzX3N0ciIsInRvTG93ZXJDYXNlIiwiaXYiLCJlcCIsImZuYW1lIiwicGFyYW1zIiwiYWxwaGEiLCJwb3AiLCJmb250V2VpZ2h0cyIsInRoaW4iLCJoYWlybGluZSIsImxpZ2h0IiwiYm9vayIsInJlZ3VsYXIiLCJub3JtYWwiLCJwbGFpbiIsInJvbWFuIiwic3RhbmRhcmQiLCJtZWRpdW0iLCJib2xkIiwiaGVhdnkiLCJibGFjayIsImZhdCIsInBvc3RlciIsInNwIiwiZm9udENhY2hlIiwiY3NzRGF0YSIsIm1heWJlV2VpZ2h0Iiwid2VpZ2h0IiwidyIsImZvbnRGYW1pbHkiLCJpY29uIiwibmFtZSIsInRpdGxlIiwibGluayIsImdldExpbmsiLCJub3JtYWxpemVOYW1lIiwiY2FsbCIsInN0eWxlZnVuY3Rpb24iLCJvbExheWVyIiwic3ByaXRlSW1hZ2UiLCJyZXMiLCJzcHJpdGVJbWdTaXplIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsImNoYW5nZWQiLCJjdHgiLCJnZXRDb250ZXh0IiwibWVhc3VyZUNhY2hlIiwid3JhcFRleHQiLCJ0ZXh0IiwiZW0iLCJ3cmFwcGVkVGV4dCIsIm9uZUVtIiwibWVhc3VyZVRleHQiLCJ3b3JkcyIsImxpbmUiLCJsaW5lcyIsIndvcmQiLCJhbGxMYXllcnMiLCJsYXllcnNCeVNvdXJjZUxheWVyIiwibWFwYm94TGF5ZXJzIiwibWFwYm94U291cmNlIiwic291cmNlTGF5ZXIiLCJmdW5jdGlvbkNhY2hlIiwiZmlsdGVyQ2FjaGUiLCJpY29uSW1hZ2VDYWNoZSIsInN0eWxlcyIsInBhdHRlcm5DYWNoZSIsInN0eWxlRnVuY3Rpb24iLCJyZXNvbHV0aW9uIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJzdHlsZUlkcyIsImdldEdlb21ldHJ5Iiwic3R5bGVzTGVuZ3RoIiwibGF5ZXJEYXRhIiwiZW1wdHlPYmoiLCJpY29uSW1nIiwiZXZhbHVhdGVGaWx0ZXIiLCJvcGFjaXR5IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZUNvbG9yIiwiaWNvbkltYWdlIiwiZ2V0VmFsdWUiLCJmcm9tVGVtcGxhdGUiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0VGV4dCIsInNldFpJbmRleCIsInBhdHRlcm4iLCJzcHJpdGVJbWFnZURhdGEiLCJjYW52YXMiLCJkcmF3SW1hZ2UiLCJjcmVhdGVQYXR0ZXJuIiwic2V0Q29sb3IiLCJjb2xvcldpdGhPcGFjaXR5Iiwic2V0TGluZUNhcCIsImRlZmF1bHRzIiwic2V0TGluZUpvaW4iLCJzZXRNaXRlckxpbWl0Iiwic2V0V2lkdGgiLCJzZXRMaW5lRGFzaCIsImhhc0ltYWdlIiwic2tpcExhYmVsIiwic3R5bGVHZW9tIiwiZ2VvbSIsImdldEZsYXRNaWRwb2ludCIsImV4dGVudCIsInNldEdlb21ldHJ5IiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uVHJhbnNsYXRlIiwiaWNvblRyYW5zbGF0ZUFuY2hvciIsImljb25BbmNob3JWYWx1ZSIsImljb25PZmZzZXQiLCJjb3ZlcnRJY29uQW5jaG9yIiwiYW5jaG9yT2Zmc2V0IiwiaWNvbkFuY2hvciIsImljb25fY2FjaGVfa2V5IiwiZ2V0SW1hZ2VEYXRhIiwiY2MiLCJwdXRJbWFnZURhdGEiLCJ0cmFuc2xhdGVPZmZzZXQiLCJhbmNob3JPcmlnaW4iLCJhbmNob3IiLCJpbWdTaXplIiwic2NhbGUiLCJwaXhlbFJhdGlvIiwicm90YXRlVmFsdWUiLCJzZXRSb3RhdGlvbiIsInNldE9wYWNpdHkiLCJzZXRJbWFnZSIsInNldFRleHQiLCJjaXJjbGVSYWRpdXMiLCJjaXJjbGVTdHJva2VDb2xvciIsImNpcmNsZUNvbG9yIiwiY2lyY2xlT3BhY2l0eSIsImNpcmNsZVN0cm9rZVdpZHRoIiwiY2lyY2xlU3Ryb2tlT3BhY2l0eSIsImNhY2hlX2tleSIsInJhZGl1cyIsImxhYmVsIiwidGV4dEZpZWxkIiwidGV4dFNpemUiLCJjaG9vc2VGb250IiwidGV4dFRyYW5zZm9ybSIsInRvVXBwZXJDYXNlIiwid3JhcHBlZExhYmVsIiwic2V0Rm9udCIsInRleHRBbmNob3IiLCJwbGFjZW1lbnQiLCJzZXRQbGFjZW1lbnQiLCJ0ZXh0QWxpZ24iLCJzZXRUZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJzZXRUZXh0QmFzZWxpbmUiLCJ0ZXh0T2Zmc2V0IiwidGV4dFRyYW5zbGF0ZSIsInNldE9mZnNldFgiLCJzZXRPZmZzZXRZIiwidGV4dENvbG9yIiwic2V0RmlsbCIsImhhbG9Db2xvciIsInRleHRIYWxvIiwic2V0U3Ryb2tlIiwiZnVuY3Rpb25UeXBlcyIsImxheW91dE9yUGFpbnQiLCJmdW5jdGlvbnMiLCJpbmNsdWRlcyIsImZvbnRNYXAiLCJjb2xvckNhY2hlIiwiY29sb3JEYXRhIiwidGVtcGxhdGVSZWdFeCIsImdldFpvb21Gb3JSZXNvbHV0aW9uIiwiZGVncmVlcyIsImNhbmRpZGF0ZSIsInpvb21GYWN0b3IiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSw2QiIsImZpbGUiOiJvbG1zLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vb2xtcy5qc1wiKTtcbiIsIi8qXHJcbm9sLW1hcGJveC1zdHlsZSAtIFVzZSBNYXBib3ggU3R5bGUgb2JqZWN0cyB3aXRoIE9wZW5MYXllcnNcclxuQ29weXJpZ2h0IDIwMTYtcHJlc2VudCBCb3VuZGxlc3MgU3BhdGlhbCwgSW5jLlxyXG5MaWNlbnNlOiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYm91bmRsZXNzZ2VvL29sLW1hcGJveC1nbC1zdHlsZS9tYXN0ZXIvTElDRU5TRVxyXG4qL1xyXG5cclxuaW1wb3J0IGdsZnVuIGZyb20gJ0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvZnVuY3Rpb24nO1xyXG5pbXBvcnQgbWIyY3NzIGZyb20gJ21hcGJveC10by1jc3MtZm9udCc7XHJcbmltcG9ydCBhcHBseVN0eWxlRnVuY3Rpb24gZnJvbSAnLi9zdHlsZWZ1bmN0aW9uJztcclxuaW1wb3J0IGdvb2dsZUZvbnRzIGZyb20gJ3dlYmZvbnQtbWF0Y2hlci9saWIvZm9udHMvZ29vZ2xlJztcclxuaW1wb3J0IHtmcm9tTG9uTGF0fSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHtjcmVhdGVYWVp9IGZyb20gJ29sL3RpbGVncmlkJztcclxuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAnO1xyXG5pbXBvcnQgR2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XHJcbmltcG9ydCBNVlQgZnJvbSAnb2wvZm9ybWF0L01WVCc7XHJcbmltcG9ydCB7dW5CeUtleX0gZnJvbSAnb2wvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVGlsZSc7XHJcbmltcG9ydCBWZWN0b3JMYXllciBmcm9tICdvbC9sYXllci9WZWN0b3InO1xyXG5pbXBvcnQgVmVjdG9yVGlsZUxheWVyIGZyb20gJ29sL2xheWVyL1ZlY3RvclRpbGUnO1xyXG5pbXBvcnQgVGlsZUpTT04gZnJvbSAnb2wvc291cmNlL1RpbGVKU09OJztcclxuaW1wb3J0IFZlY3RvclNvdXJjZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcclxuaW1wb3J0IFZlY3RvclRpbGVTb3VyY2UgZnJvbSAnb2wvc291cmNlL1ZlY3RvclRpbGUnO1xyXG5pbXBvcnQgWFlaIGZyb20gJ29sL3NvdXJjZS9YWVonO1xyXG5cclxudmFyIGF2YWlsYWJsZUZvbnRzO1xyXG5cclxuZnVuY3Rpb24gbG9hZEZvbnQoZm9udHMpIHtcclxuICB2YXIgaSwgaWk7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGZvbnRzKSkge1xyXG4gICAgdmFyIHN0b3BzID0gZm9udHMuc3RvcHM7XHJcbiAgICBpZiAoc3RvcHMpIHtcclxuICAgICAgZm9yIChpID0gMCwgaWkgPSBzdG9wcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICAgICAgbG9hZEZvbnQoc3RvcHNbaV1bMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciBnb29nbGVGYW1pbGllcyA9IGdvb2dsZUZvbnRzLmdldE5hbWVzKCk7XHJcbiAgdmFyIGZhbWlsaWVzID0gZm9udHMubWFwKGZ1bmN0aW9uKGZvbnQpIHtcclxuICAgIHJldHVybiBtYjJjc3MoZm9udCwgMSkuc3BsaXQoJyAxcHggJylbMV0ucmVwbGFjZSgvXCIvZywgJycpO1xyXG4gIH0pO1xyXG4gIGZvciAoaSA9IDAsIGlpID0gZmFtaWxpZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgdmFyIGZhbWlseSA9IGZhbWlsaWVzW2ldO1xyXG4gICAgdmFyIGZvbnQgPSBmb250c1tpXTtcclxuICAgIGlmIChnb29nbGVGYW1pbGllcy5pbmRleE9mKGZhbWlseSkgIT09IC0xKSB7XHJcbiAgICAgIGlmICghYXZhaWxhYmxlRm9udHMpIHtcclxuICAgICAgICBhdmFpbGFibGVGb250cyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdmFpbGFibGVGb250cy5pbmRleE9mKGZvbnQpID09IC0xKSB7XHJcbiAgICAgICAgYXZhaWxhYmxlRm9udHMucHVzaChmb250KTtcclxuICAgICAgICB2YXIgZm9udFVybCA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9JyArIGZhbWlseS5yZXBsYWNlKC8gL2csICcrJyk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW2hyZWY9XCInICsgZm9udFVybCArICdcIl0nKSkge1xyXG4gICAgICAgICAgdmFyIG1hcmt1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgIG1hcmt1cC5ocmVmID0gZm9udFVybDtcclxuICAgICAgICAgIG1hcmt1cC5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG1hcmt1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudmFyIGRlZmF1bHRGb250ID0gWydPcGVuIFNhbnMgUmVndWxhcicsICdBcmlhbCBSZWd1bGFyJ107XHJcblxyXG5mdW5jdGlvbiBwcmVwcm9jZXNzKGxheWVyKSB7XHJcbiAgaWYgKCdsYXlvdXQnIGluIGxheWVyICYmICd0ZXh0LWZpZWxkJyBpbiBsYXllci5sYXlvdXQpIHtcclxuICAgIGxvYWRGb250KGxheWVyLmxheW91dFsndGV4dC1mb250J10gfHwgZGVmYXVsdEZvbnQpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIHNwcml0ZVJlZ0V4ID0gL14oLiopKFxcPy4qKSQvO1xyXG5cclxuZnVuY3Rpb24gd2l0aFBhdGgodXJsLCBwYXRoKSB7XHJcbiAgaWYgKHBhdGggJiYgdXJsLmluZGV4T2YoJ2h0dHAnKSAhPSAwKSB7XHJcbiAgICB1cmwgPSBwYXRoICsgdXJsO1xyXG4gIH1cclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b1Nwcml0ZVVybCh1cmwsIHBhdGgsIGV4dGVuc2lvbikge1xyXG4gIHVybCA9IHdpdGhQYXRoKHVybCwgcGF0aCk7XHJcbiAgdmFyIHBhcnRzID0gdXJsLm1hdGNoKHNwcml0ZVJlZ0V4KTtcclxuICByZXR1cm4gcGFydHMgP1xyXG4gICAgcGFydHNbMV0gKyBleHRlbnNpb24gKyAocGFydHMubGVuZ3RoID4gMiA/IHBhcnRzWzJdIDogJycpIDpcclxuICAgIHVybCArIGV4dGVuc2lvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgYSBzdHlsZSBmdW5jdGlvbiB0byBhbiBgb2wubGF5ZXIuVmVjdG9yVGlsZWAgb3IgYG9sLmxheWVyLlZlY3RvcmBcclxuICogd2l0aCBhbiBgb2wuc291cmNlLlZlY3RvclRpbGVgIG9yIGFuIGBvbC5zb3VyY2UuVmVjdG9yYC4gVGhlIHN0eWxlIGZ1bmN0aW9uXHJcbiAqIHdpbGwgcmVuZGVyIGFsbCBsYXllcnMgZnJvbSB0aGUgYGdsU3R5bGVgIG9iamVjdCB0aGF0IHVzZSB0aGUgc3BlY2lmaWVkXHJcbiAqIGBzb3VyY2VgLCBvciBhIHN1YnNldCBvZiBsYXllcnMgZnJvbSB0aGUgc2FtZSBzb3VyY2UuIFRoZSBzb3VyY2UgbmVlZHMgdG8gYmVcclxuICogYSBgXCJ0eXBlXCI6IFwidmVjdG9yXCJgLCBgXCJ0eXBlXCI6IFwiZ2VvanNvblwiYCBvciBgXCJ0eXBlXCI6IFwicmFzdGVyXCJgIHNvdXJjZS5cclxuICpcclxuICogQHBhcmFtIHtvbC5sYXllci5WZWN0b3JUaWxlfSBsYXllciBPcGVuTGF5ZXJzIGxheWVyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGdsU3R5bGUgTWFwYm94IFN0eWxlIG9iamVjdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBgc291cmNlYCBrZXkgb3IgYW4gYXJyYXkgb2YgbGF5ZXIgYGlkYHMgZnJvbSB0aGVcclxuICogTWFwYm94IFN0eWxlIG9iamVjdC4gV2hlbiBhIGBzb3VyY2VgIGtleSBpcyBwcm92aWRlZCwgYWxsIGxheWVycyBmb3IgdGhlXHJcbiAqIHNwZWNpZmllZCBzb3VyY2Ugd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgc3R5bGUgZnVuY3Rpb24uIFdoZW4gbGF5ZXIgYGlkYHNcclxuICogYXJlIHByb3ZpZGVkLCB0aGV5IG11c3QgYmUgZnJvbSBsYXllcnMgdGhhdCB1c2UgdGhlIHNhbWUgc291cmNlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhdGg9dW5kZWZpbmVkXSBQYXRoIG9mIHRoZSBzdHlsZSBmaWxlLiBPbmx5IHJlcXVpcmVkIHdoZW5cclxuICogYSByZWxhdGl2ZSBwYXRoIGlzIHVzZWQgd2l0aCB0aGUgYFwic3ByaXRlXCJgIHByb3BlcnR5IG9mIHRoZSBzdHlsZS5cclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbcmVzb2x1dGlvbnM9dW5kZWZpbmVkXSBSZXNvbHV0aW9ucyBmb3IgbWFwcGluZyByZXNvbHV0aW9uIHRvIHpvb20gbGV2ZWwuXHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2Ugd2hpY2ggd2lsbCBiZSByZXNvbHZlZCB3aGVuIHRoZSBzdHlsZSBjYW4gYmUgdXNlZFxyXG4gKiBmb3IgcmVuZGVyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3R5bGUobGF5ZXIsIGdsU3R5bGUsIHNvdXJjZSwgcGF0aCwgcmVzb2x1dGlvbnMpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBnbFN0eWxlICE9ICdvYmplY3QnKSB7XHJcbiAgICAgIGdsU3R5bGUgPSBKU09OLnBhcnNlKGdsU3R5bGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdsU3R5bGUudmVyc2lvbiAhPSA4KSB7XHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dsU3R5bGUgdmVyc2lvbiA4IHJlcXVpcmVkLicpKTtcclxuICAgIH1cclxuICAgIHZhciBzcHJpdGVTY2FsZSwgc3ByaXRlRGF0YSwgc3ByaXRlSW1hZ2VVcmw7XHJcbiAgICBpZiAoZ2xTdHlsZS5zcHJpdGUpIHtcclxuICAgICAgc3ByaXRlU2NhbGUgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+PSAxLjUgPyAwLjUgOiAxO1xyXG4gICAgICB2YXIgc2l6ZUZhY3RvciA9IHNwcml0ZVNjYWxlID09IDAuNSA/ICdAMngnIDogJyc7XHJcbiAgICAgIHZhciBzcHJpdGVVcmwgPSB0b1Nwcml0ZVVybChnbFN0eWxlLnNwcml0ZSwgcGF0aCwgc2l6ZUZhY3RvciArICcuanNvbicpO1xyXG5cclxuICAgICAgZmV0Y2goc3ByaXRlVXJsLCB7Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbid9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgaXMgcmVhZHkgcmV0dXJuIHRoZSBKU09OIHByb21pc2VcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzaXplRmFjdG9yICE9PSAnJykge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIEpTT04gcHJvbWlzZSBmb3IgdGhlIGxvdy1yZXNvbHV0aW9uIHNwcml0ZXMuXHJcbiAgICAgICAgICAgIHNpemVGYWN0b3IgPSAnJztcclxuICAgICAgICAgICAgc3ByaXRlVXJsID0gdG9TcHJpdGVVcmwoZ2xTdHlsZS5zcHJpdGUsIHBhdGgsICcuanNvbicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goc3ByaXRlVXJsLCB7Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbid9KS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3ByaXRlc0pzb24pIHtcclxuICAgICAgICAgIGlmIChzcHJpdGVzSnNvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdObyBzcHJpdGVzIGZvdW5kLic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcHJpdGVEYXRhID0gc3ByaXRlc0pzb247XHJcbiAgICAgICAgICBzcHJpdGVJbWFnZVVybCA9IHRvU3ByaXRlVXJsKGdsU3R5bGUuc3ByaXRlLCBwYXRoLCBzaXplRmFjdG9yICsgJy5wbmcnKTtcclxuICAgICAgICAgIG9uQ2hhbmdlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTcHJpdGVzIGNhbm5vdCBiZSBsb2FkZWQgZnJvbSAnICsgc3ByaXRlVXJsKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0eWxlO1xyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XHJcbiAgICAgIGlmICghc3R5bGUgJiYgKCFnbFN0eWxlLnNwcml0ZSB8fCBzcHJpdGVEYXRhKSAmJiAoIWF2YWlsYWJsZUZvbnRzIHx8IGF2YWlsYWJsZUZvbnRzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgc3R5bGUgPSBhcHBseVN0eWxlRnVuY3Rpb24obGF5ZXIsIGdsU3R5bGUsIHNvdXJjZSwgcmVzb2x1dGlvbnMsIHNwcml0ZURhdGEsIHNwcml0ZUltYWdlVXJsLCBhdmFpbGFibGVGb250cyk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgbGF5ZXIuc2V0U3R5bGUoc3R5bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxheWVyIGluc3RhbmNlb2YgVmVjdG9yVGlsZUxheWVyIHx8IGxheWVyIGluc3RhbmNlb2YgVmVjdG9yTGF5ZXIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2YXIgbGF5ZXJzID0gZ2xTdHlsZS5sYXllcnM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09ICdzdHJpbmcnICYmIGxheWVyc1tpXS5zb3VyY2UgPT0gc291cmNlIHx8IHNvdXJjZS5pbmRleE9mKGxheWVyc1tpXS5pZCkgPj0gMCkge1xyXG4gICAgICAgICAgICBwcmVwcm9jZXNzKGxheWVyc1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uQ2hhbmdlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEJhY2tncm91bmQobWFwLCBsYXllcikge1xyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBtYXAuZ2V0VGFyZ2V0RWxlbWVudCgpO1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBsYXlvdXQgPSBsYXllci5sYXlvdXQgfHwge307XHJcbiAgICB2YXIgcGFpbnQgPSBsYXllci5wYWludCB8fCB7fTtcclxuICAgIHZhciB6b29tID0gbWFwLmdldFZpZXcoKS5nZXRab29tKCk7XHJcbiAgICBpZiAoJ2JhY2tncm91bmQtY29sb3InIGluIHBhaW50KSB7XHJcbiAgICAgIHZhciBiZyA9IGdsZnVuKHBhaW50WydiYWNrZ3JvdW5kLWNvbG9yJ10sIHtmdW5jdGlvbjogJ2ludGVycG9sYXRlZCcsIHR5cGU6ICdjb2xvcid9KSh6b29tKTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmcpKSB7XHJcbiAgICAgICAgYmcgPSAncmdiYSgnICtcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChiZ1swXSAqIDI1NSkgKyAnLCcgK1xyXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGJnWzFdICogMjU1KSArICcsJyArXHJcbiAgICAgICAgICAgIE1hdGgucm91bmQoYmdbMl0gKiAyNTUpICsgJywnICtcclxuICAgICAgICAgICAgKGJnWzNdID8gYmdbM10gOiAxKSArICcpJztcclxuICAgICAgfVxyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnO1xyXG4gICAgfVxyXG4gICAgaWYgKCdiYWNrZ3JvdW5kLW9wYWNpdHknIGluIHBhaW50KSB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZE9wYWNpdHkgPVxyXG4gICAgICAgICAgZ2xmdW4ocGFpbnRbJ2JhY2tncm91bmQtb3BhY2l0eSddLCB7ZnVuY3Rpb246ICdpbnRlcnBvbGF0ZWQnLCB0eXBlOiAnbnVtYmVyJ30pKHpvb20pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxheW91dC52aXNpYmlsaXR5ID09ICdub25lJykge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRPcGFjaXR5ID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtYXAuZ2V0VGFyZ2V0RWxlbWVudCgpKSB7XHJcbiAgICB1cGRhdGVTdHlsZSgpO1xyXG4gIH1cclxuICBtYXAub24oWydjaGFuZ2U6cmVzb2x1dGlvbicsICdjaGFuZ2U6dGFyZ2V0J10sIHVwZGF0ZVN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgcHJvcGVydGllcyBvZiB0aGUgTWFwYm94IFN0eWxlJ3MgZmlyc3QgYGJhY2tncm91bmRgIGxheWVyIHRvIHRoZSBtYXAuXHJcbiAqIEBwYXJhbSB7b2wuTWFwfSBtYXAgT3BlbkxheWVycyBNYXAuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBnbFN0eWxlIE1hcGJveCBTdHlsZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlCYWNrZ3JvdW5kKG1hcCwgZ2xTdHlsZSkge1xyXG4gIGdsU3R5bGUubGF5ZXJzLnNvbWUoZnVuY3Rpb24obCkge1xyXG4gICAgaWYgKGwudHlwZSA9PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgc2V0QmFja2dyb3VuZChtYXAsIGwpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlSWRCeVJlZihsYXllcnMsIHJlZikge1xyXG4gIHZhciBzb3VyY2VJZDtcclxuICBsYXllcnMuc29tZShmdW5jdGlvbihsYXllcikge1xyXG4gICAgaWYgKGxheWVyLmlkID09IHJlZikge1xyXG4gICAgICBzb3VyY2VJZCA9IGxheWVyLnNvdXJjZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNvdXJjZUlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzU3R5bGUoZ2xTdHlsZSwgbWFwLCBiYXNlVXJsLCBob3N0LCBwYXRoLCBhY2Nlc3NUb2tlbikge1xyXG4gIHZhciB2aWV3ID0gbWFwLmdldFZpZXcoKTtcclxuICBpZiAoJ2NlbnRlcicgaW4gZ2xTdHlsZSAmJiAhdmlldy5nZXRDZW50ZXIoKSkge1xyXG4gICAgdmlldy5zZXRDZW50ZXIoZnJvbUxvbkxhdChnbFN0eWxlLmNlbnRlcikpO1xyXG4gIH1cclxuICBpZiAoJ3pvb20nIGluIGdsU3R5bGUgJiYgdmlldy5nZXRab29tKCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdmlldy5zZXRab29tKGdsU3R5bGUuem9vbSk7XHJcbiAgfVxyXG4gIGlmICghdmlldy5nZXRDZW50ZXIoKSB8fCB2aWV3LmdldFpvb20oKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2aWV3LmZpdCh2aWV3LmdldFByb2plY3Rpb24oKS5nZXRFeHRlbnQoKSwge1xyXG4gICAgICBuZWFyZXN0OiB0cnVlLFxyXG4gICAgICBzaXplOiBtYXAuZ2V0U2l6ZSgpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGdsU3R5bGUuc3ByaXRlKSB7XHJcbiAgICBpZiAoZ2xTdHlsZS5zcHJpdGUuaW5kZXhPZignbWFwYm94Oi8vJykgPT0gMCkge1xyXG4gICAgICBnbFN0eWxlLnNwcml0ZSA9IGJhc2VVcmwgKyAnL3Nwcml0ZScgKyBhY2Nlc3NUb2tlbjtcclxuICAgIH0gZWxzZSBpZiAoZ2xTdHlsZS5zcHJpdGUuaW5kZXhPZignaHR0cCcpICE9IDApIHtcclxuICAgICAgZ2xTdHlsZS5zcHJpdGUgPSAoaG9zdCA/IChob3N0ICsgcGF0aCkgOiAnJykgKyBnbFN0eWxlLnNwcml0ZSArIGFjY2Vzc1Rva2VuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGdsTGF5ZXJzID0gZ2xTdHlsZS5sYXllcnM7XHJcbiAgdmFyIGdlb0pzb25Gb3JtYXQgPSBuZXcgR2VvSlNPTigpO1xyXG4gIHZhciBsYXllcklkcyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBmaW5hbGl6ZUxheWVyKGxheWVyKSB7XHJcbiAgICBpZiAobGF5ZXJJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xyXG4gICAgICB2YXIgc2V0U3R5bGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBhcHBseVN0eWxlKGxheWVyLCBnbFN0eWxlLCBsYXllcklkcywgcGF0aCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGxheWVyLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgLyplc2xpbnQgbm8tY29uc29sZTogW1wiZXJyb3JcIiwgeyBhbGxvdzogW1wiZXJyb3JcIl0gfV0gKi9cclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChsYXllci5nZXRTb3VyY2UoKSkge1xyXG4gICAgICAgIHNldFN0eWxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGF5ZXIub25jZSgnY2hhbmdlOnNvdXJjZScsIHNldFN0eWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGdsTGF5ZXIsIGdsU291cmNlLCBnbFNvdXJjZUlkLCBpZCwgbGF5ZXIsIG1hcGlkLCB1cmw7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gZ2xMYXllcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgZ2xMYXllciA9IGdsTGF5ZXJzW2ldO1xyXG4gICAgaWYgKGdsTGF5ZXIudHlwZSA9PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgc2V0QmFja2dyb3VuZChtYXAsIGdsTGF5ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWQgPSBnbExheWVyLnNvdXJjZSB8fCBnZXRTb3VyY2VJZEJ5UmVmKGdsTGF5ZXJzLCBnbExheWVyLnJlZik7XHJcbiAgICAgIGlmIChpZCAhPSBnbFNvdXJjZUlkKSB7XHJcbiAgICAgICAgZmluYWxpemVMYXllcihsYXllcik7XHJcbiAgICAgICAgbGF5ZXJJZHMgPSBbXTtcclxuICAgICAgICBnbFNvdXJjZSA9IGdsU3R5bGUuc291cmNlc1tpZF07XHJcbiAgICAgICAgdXJsID0gZ2xTb3VyY2UudXJsO1xyXG4gICAgICAgIHZhciB0aWxlcyA9IGdsU291cmNlLnRpbGVzO1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgIGlmICh1cmwuaW5kZXhPZignbWFwYm94Oi8vJykgPT0gMCkge1xyXG4gICAgICAgICAgICBtYXBpZCA9IHVybC5yZXBsYWNlKCdtYXBib3g6Ly8nLCAnJyk7XHJcbiAgICAgICAgICAgIHRpbGVzID0gWydhJywgJ2InLCAnYycsICdkJ10ubWFwKGZ1bmN0aW9uKGhvc3QpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vJyArIGhvc3QgKyAnLnRpbGVzLm1hcGJveC5jb20vdjQvJyArIG1hcGlkICtcclxuICAgICAgICAgICAgICAgICAgJy97en0ve3h9L3t5fS4nICtcclxuICAgICAgICAgICAgICAgICAgKGdsU291cmNlLnR5cGUgPT0gJ3ZlY3RvcicgPyAndmVjdG9yLnBiZicgOiAncG5nJykgK1xyXG4gICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2xTb3VyY2UudHlwZSA9PSAndmVjdG9yJykge1xyXG4gICAgICAgICAgbGF5ZXIgPSB0aWxlcyA/IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRpbGVHcmlkID0gY3JlYXRlWFlaKHtcclxuICAgICAgICAgICAgICB0aWxlU2l6ZTogNTEyLFxyXG4gICAgICAgICAgICAgIG1heFpvb206ICdtYXh6b29tJyBpbiBnbFNvdXJjZSA/IGdsU291cmNlLm1heHpvb20gOiAyMixcclxuICAgICAgICAgICAgICBtaW5ab29tOiBnbFNvdXJjZS5taW56b29tXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvclRpbGVMYXllcih7XHJcbiAgICAgICAgICAgICAgZGVjbHV0dGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1heFJlc29sdXRpb246IHRpbGVHcmlkLmdldE1pblpvb20oKSA+IDAgP1xyXG4gICAgICAgICAgICAgICAgdGlsZUdyaWQuZ2V0UmVzb2x1dGlvbih0aWxlR3JpZC5nZXRNaW5ab29tKCkpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIHNvdXJjZTogbmV3IFZlY3RvclRpbGVTb3VyY2Uoe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb25zOiBnbFNvdXJjZS5hdHRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IE1WVCgpLFxyXG4gICAgICAgICAgICAgICAgdGlsZUdyaWQ6IHRpbGVHcmlkLFxyXG4gICAgICAgICAgICAgICAgdXJsczogdGlsZXNcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB6SW5kZXg6IGlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KSgpIDogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSBuZXcgVmVjdG9yVGlsZUxheWVyKHtcclxuICAgICAgICAgICAgICBkZWNsdXR0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgekluZGV4OiBpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdGlsZWpzb24gPSBuZXcgVGlsZUpTT04oe1xyXG4gICAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGlsZWpzb24ub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGlmICh0aWxlanNvbi5nZXRTdGF0ZSgpID09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aWxlSlNPTkRvYyA9IHRpbGVqc29uLmdldFRpbGVKU09OKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlsZXMgPSBBcnJheS5pc0FycmF5KHRpbGVKU09ORG9jLnRpbGVzKSA/IHRpbGVKU09ORG9jLnRpbGVzIDogW3RpbGVKU09ORG9jLnRpbGVzXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHRpbGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIHRpbGUgPSB0aWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRpbGUuaW5kZXhPZignaHR0cCcpICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlc1tpXSA9IGdsU291cmNlLnVybCArIHRpbGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0aWxlR3JpZCA9IHRpbGVqc29uLmdldFRpbGVHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBsYXllci5zZXRTb3VyY2UobmV3IFZlY3RvclRpbGVTb3VyY2Uoe1xyXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IHRpbGVqc29uLmdldEF0dHJpYnV0aW9ucygpIHx8IHRpbGVKU09ORG9jLmF0dHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBNVlQoKSxcclxuICAgICAgICAgICAgICAgICAgdGlsZUdyaWQ6IGNyZWF0ZVhZWih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluWm9vbTogdGlsZUdyaWQuZ2V0TWluWm9vbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFpvb206IHRpbGVHcmlkLmdldE1heFpvb20oKSxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlU2l6ZTogNTEyXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICB1cmxzOiB0aWxlc1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGVHcmlkLmdldE1pblpvb20oKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgbGF5ZXIuc2V0TWF4UmVzb2x1dGlvbihcclxuICAgICAgICAgICAgICAgICAgICB0aWxlR3JpZC5nZXRSZXNvbHV0aW9uKHRpbGVHcmlkLmdldE1pblpvb20oKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdW5CeUtleShrZXkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllcjtcclxuICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnbFNvdXJjZS50eXBlID09ICdyYXN0ZXInKSB7XHJcbiAgICAgICAgICB2YXIgc291cmNlO1xyXG4gICAgICAgICAgaWYgKCFnbFNvdXJjZS50aWxlcykge1xyXG4gICAgICAgICAgICBzb3VyY2UgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWxlSlNPTih7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc291cmNlID0gbmV3IFhZWih7XHJcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25zOiBnbFNvdXJjZS5hdHRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICBtaW5ab29tOiBnbFNvdXJjZS5taW56b29tLFxyXG4gICAgICAgICAgICAgIG1heFpvb206ICdtYXh6b29tJyBpbiBnbFNvdXJjZSA/IGdsU291cmNlLm1heHpvb20gOiAyMixcclxuICAgICAgICAgICAgICB0aWxlU2l6ZTogZ2xTb3VyY2UudGlsZVNpemUgfHwgNTEyLFxyXG4gICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgIHVybHM6IGdsU291cmNlLnRpbGVzLFxyXG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNvdXJjZS5zZXRUaWxlTG9hZEZ1bmN0aW9uKGZ1bmN0aW9uKHRpbGUsIHNyYykge1xyXG4gICAgICAgICAgICBpZiAoc3JjLmluZGV4T2YoJ3tiYm94LWVwc2ctMzg1N30nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgIHZhciBiYm94ID0gc291cmNlLmdldFRpbGVHcmlkKCkuZ2V0VGlsZUNvb3JkRXh0ZW50KHRpbGUuZ2V0VGlsZUNvb3JkKCkpO1xyXG4gICAgICAgICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKCd7YmJveC1lcHNnLTM4NTd9JywgYmJveC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aWxlLmdldEltYWdlKCkuc3JjID0gc3JjO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsYXllciA9IG5ldyBUaWxlTGF5ZXIoe1xyXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZ2xMYXllci5sYXlvdXQgPyBnbExheWVyLmxheW91dC52aXNpYmlsaXR5ICE9PSAnbm9uZScgOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdsU291cmNlLnR5cGUgPT0gJ2dlb2pzb24nKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IGdsU291cmNlLmRhdGE7XHJcbiAgICAgICAgICB2YXIgZmVhdHVyZXMsIGdlb0pzb25Vcmw7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZ2VvSnNvblVybCA9IHdpdGhQYXRoKGRhdGEsIHBhdGgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmVhdHVyZXMgPSBnZW9Kc29uRm9ybWF0LnJlYWRGZWF0dXJlcyhkYXRhLCB7ZmVhdHVyZVByb2plY3Rpb246ICdFUFNHOjM4NTcnfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsYXllciA9IG5ldyBWZWN0b3JMYXllcih7XHJcbiAgICAgICAgICAgIHNvdXJjZTogbmV3IFZlY3RvclNvdXJjZSh7XHJcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25zOiBnbFNvdXJjZS5hdHRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXHJcbiAgICAgICAgICAgICAgZm9ybWF0OiBnZW9Kc29uRm9ybWF0LFxyXG4gICAgICAgICAgICAgIHVybDogZ2VvSnNvblVybFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHpJbmRleDogaVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsU291cmNlSWQgPSBpZDtcclxuICAgICAgfVxyXG4gICAgICBsYXllcklkcy5wdXNoKGdsTGF5ZXIuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmaW5hbGl6ZUxheWVyKGxheWVyKTtcclxuICBtYXAuc2V0KCdtYXBib3gtc3R5bGUnLCBnbFN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIExvYWRzIGFuZCBhcHBsaWVzIGEgTWFwYm94IFN0eWxlIG9iamVjdCB0byBhbiBPcGVuTGF5ZXJzIE1hcC4gVGhpcyBpbmNsdWRlc1xyXG4gKiB0aGUgbWFwIGJhY2tncm91bmQsIHRoZSBsYXllcnMsIHRoZSBjZW50ZXIgYW5kIHRoZSB6b29tLlxyXG4gKlxyXG4gKiBUaGUgY2VudGVyIGFuZCB6b29tIHdpbGwgb25seSBiZSBzZXQgaWYgcHJlc2VudCBpbiB0aGUgTWFwYm94IFN0eWxlIGRvY3VtZW50LFxyXG4gKiBhbmQgaWYgbm90IGFscmVhZHkgc2V0IG9uIHRoZSBPcGVuTGF5ZXJzIG1hcC5cclxuICpcclxuICogTGF5ZXJzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIE9wZW5MYXllcnMgbWFwLCB3aXRob3V0IGFmZmVjdGluZyBhbnkgbGF5ZXJzIHRoYXRcclxuICogbWlnaHQgYWxyZWFkeSBiZSBzZXQgb24gdGhlIG1hcC5cclxuICpcclxuICogTGF5ZXJzIGFkZGVkIGJ5IGBhcHBseSgpYCB3aWxsIGhhdmUgdHdvIGFkZGl0aW9uYWwgcHJvcGVydGllczpcclxuICpcclxuICogICogYG1hcGJveC1zb3VyY2VgOiBUaGUgYGlkYCBvZiB0aGUgTWFwYm94IFN0eWxlIGRvY3VtZW50J3Mgc291cmNlIHRoYXQgdGhlXHJcbiAqICAgIE9wZW5MYXllcnMgbGF5ZXIgd2FzIGNyZWF0ZWQgZnJvbS4gVXN1YWxseSBgYXBwbHkoKWAgY3JlYXRlcyBvbmVcclxuICogICAgT3BlbkxheWVycyBsYXllciBwZXIgTWFwYm94IFN0eWxlIHNvdXJjZSwgdW5sZXNzIHRoZSBsYXllciBzdGFjayBoYXNcclxuICogICAgbGF5ZXJzIGZyb20gZGlmZmVyZW50IHNvdXJjZXMgaW4gYmV0d2Vlbi5cclxuICogICogYG1hcGJveC1sYXllcnNgOiBUaGUgYGlkYHMgb2YgdGhlIE1hcGJveCBTdHlsZSBkb2N1bWVudCdzIGxheWVycyB0aGF0IGFyZVxyXG4gKiAgICBpbmNsdWRlZCBpbiB0aGUgT3BlbkxheWVycyBsYXllci5cclxuICpcclxuICogVGhlIG1hcCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIHdpbGwgaGF2ZSBhbiBhZGRpdGlvbmFsIGBtYXBib3gtc3R5bGVgXHJcbiAqIHByb3BlcnR5IHdoaWNoIGhvbGRzIHRoZSBNYXBib3ggU3R5bGUgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge29sLk1hcHxIVE1MRWxlbWVudHxzdHJpbmd9IG1hcCBFaXRoZXIgYW4gZXhpc3RpbmcgT3BlbkxheWVycyBNYXBcclxuICogaW5zdGFuY2UsIG9yIGEgSFRNTCBlbGVtZW50LCBvciB0aGUgaWQgb2YgYSBIVE1MIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHRoZVxyXG4gKiB0YXJnZXQgb2YgYSBuZXcgT3BlbkxheWVycyBNYXAuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3R5bGUgSlNPTiBzdHlsZSBvYmplY3Qgb3Igc3R5bGUgdXJsIHBvaW50aW5nIHRvIGFcclxuICogTWFwYm94IFN0eWxlIG9iamVjdC4gV2hlbiB1c2luZyBNYXBib3ggQVBJcywgdGhlIHVybCBtdXN0IGNvbnRhaW4gYW4gYWNjZXNzXHJcbiAqIHRva2VuIGFuZCBsb29rIGxpa2VcclxuICogYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL21hcGJveC9icmlnaHQtdjk/YWNjZXNzX3Rva2VuPVt5b3VyX2FjY2Vzc190b2tlbl9oZXJlXWAuXHJcbiAqIFdoZW4gcGFzc2VkIGFzIEpTT04gc3R5bGUgb2JqZWN0LCBhbGwgT3BlbkxheWVycyBsYXllcnMgY3JlYXRlZCBieSBgYXBwbHkoKWBcclxuICogd2lsbCBiZSBpbW1lZGlhdGVseSBhdmFpbGFibGUsIGJ1dCB0aGV5IG1heSBub3QgaGF2ZSBhIHNvdXJjZSB5ZXQgKGkuZS4gd2hlblxyXG4gKiB0aGV5IGFyZSBkZWZpbmVkIGJ5IGEgVGlsZUpTT04gdXJsIGluIHRoZSBNYXBib3ggU3R5bGUgZG9jdW1lbnQpLiBXaGVuIHBhc3NlZFxyXG4gKiBhcyBzdHlsZSB1cmwsIGxheWVycyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBtYXAgd2hlbiB0aGUgTWFwYm94IFN0eWxlIGRvY3VtZW50XHJcbiAqIGlzIGxvYWRlZCBhbmQgcGFyc2VkLlxyXG4gKiBAcmV0dXJuIHtvbC5NYXB9IFRoZSBPcGVuTGF5ZXJzIE1hcCBpbnN0YW5jZSB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggdGhlXHJcbiAqIGNvbnRlbnRzIGRlc2NyaWJlZCBpbiB0aGUgTWFwYm94IFN0eWxlIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseShtYXAsIHN0eWxlKSB7XHJcblxyXG4gIHZhciBhY2Nlc3NUb2tlbiwgYmFzZVVybCwgaG9zdCwgcGF0aDtcclxuICBhY2Nlc3NUb2tlbiA9IGJhc2VVcmwgPSBob3N0ID0gcGF0aCA9ICcnO1xyXG5cclxuICBpZiAoIShtYXAgaW5zdGFuY2VvZiBNYXApKSB7XHJcbiAgICBtYXAgPSBuZXcgTWFwKHtcclxuICAgICAgdGFyZ2V0OiBtYXBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHZhciBwYXJ0cyA9IHN0eWxlLm1hdGNoKHNwcml0ZVJlZ0V4KTtcclxuICAgIGlmIChwYXJ0cykge1xyXG4gICAgICBiYXNlVXJsID0gcGFydHNbMV07XHJcbiAgICAgIGFjY2Vzc1Rva2VuID0gcGFydHMubGVuZ3RoID4gMiA/IHBhcnRzWzJdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goc3R5bGUsIHtcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24oZ2xTdHlsZSkge1xyXG4gICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xyXG4gICAgICAgIGEuaHJlZiA9IHN0eWxlO1xyXG4gICAgICAgIHBhdGggPSBhLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKSArICcvJztcclxuICAgICAgICBob3N0ID0gc3R5bGUuc3Vic3RyKDAsIHN0eWxlLmluZGV4T2YocGF0aCkpO1xyXG5cclxuICAgICAgICBwcm9jZXNzU3R5bGUoZ2xTdHlsZSwgbWFwLCBiYXNlVXJsLCBob3N0LCBwYXRoLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgbG9hZCAnICsgc3R5bGUpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgcHJvY2Vzc1N0eWxlKHN0eWxlLCBtYXApO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIHJldHVybiBtYXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIE9wZW5MYXllcnMgbGF5ZXIgaW5zdGFuY2UgdGhhdCBjb250YWlucyB0aGUgcHJvdmlkZWQgTWFwYm94IFN0eWxlXHJcbiAqIGBsYXllcmAuIE5vdGUgdGhhdCBtdWx0aXBsZSBNYXBib3ggU3R5bGUgbGF5ZXJzIGFyZSBjb21iaW5lZCBpbiBhIHNpbmdsZVxyXG4gKiBPcGVuTGF5ZXJzIGxheWVyIGluc3RhbmNlIHdoZW4gdGhleSB1c2UgdGhlIHNhbWUgTWFwYm94IFN0eWxlIGBzb3VyY2VgLlxyXG4gKiBAcGFyYW0ge29sLk1hcH0gbWFwIE9wZW5MYXllcnMgTWFwLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJJZCBNYXBib3ggU3R5bGUgbGF5ZXIgaWQuXHJcbiAqIEByZXR1cm4ge29sLmxheWVyLkxheWVyfSBsYXllciBPcGVuTGF5ZXJzIGxheWVyIGluc3RhbmNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyKG1hcCwgbGF5ZXJJZCkge1xyXG4gIGNvbnN0IGxheWVycyA9IG1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xyXG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGxheWVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICBpZiAobGF5ZXJzW2ldLmdldCgnbWFwYm94LWxheWVycycpLmluZGV4T2YobGF5ZXJJZCkgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBsYXllcnNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBPcGVuTGF5ZXJzIHNvdXJjZSBpbnN0YW5jZSBmb3IgdGhlIHByb3ZpZGVkIE1hcGJveCBTdHlsZSBgc291cmNlYC5cclxuICogQHBhcmFtIHtvbC5NYXB9IG1hcCBPcGVuTGF5ZXJzIE1hcC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZUlkIE1hcGJveCBTdHlsZSBzb3VyY2UgaWQuXHJcbiAqIEByZXR1cm4ge29sLmxheWVyLkxheWVyfSBsYXllciBPcGVuTGF5ZXJzIGxheWVyIGluc3RhbmNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZShtYXAsIHNvdXJjZUlkKSB7XHJcbiAgY29uc3QgbGF5ZXJzID0gbWFwLmdldExheWVycygpLmdldEFycmF5KCk7XHJcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgIGNvbnN0IHNvdXJjZSA9IGxheWVyc1tpXS5nZXRTb3VyY2UoKTtcclxuICAgIGlmIChsYXllcnNbaV0uZ2V0KCdtYXBib3gtc291cmNlJykuaW5kZXhPZihzb3VyY2VJZCkgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxuY29uc3QgcmVmUHJvcGVydGllcyA9IHJlcXVpcmUoJy4vdXRpbC9yZWZfcHJvcGVydGllcycpO1xuXG5mdW5jdGlvbiBkZXJlZihsYXllciwgcGFyZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGsgaW4gbGF5ZXIpIHtcbiAgICAgICAgaWYgKGsgIT09ICdyZWYnKSB7XG4gICAgICAgICAgICByZXN1bHRba10gPSBsYXllcltrXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZlByb3BlcnRpZXMuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBpZiAoayBpbiBwYXJlbnQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHBhcmVudFtrXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZXJlZkxheWVycztcblxuLyoqXG4gKiBHaXZlbiBhbiBhcnJheSBvZiBsYXllcnMsIHNvbWUgb2Ygd2hpY2ggbWF5IGNvbnRhaW4gYHJlZmAgcHJvcGVydGllc1xuICogd2hvc2UgdmFsdWUgaXMgdGhlIGBpZGAgb2YgYW5vdGhlciBwcm9wZXJ0eSwgcmV0dXJuIGEgbmV3IGFycmF5IHdoZXJlXG4gKiBzdWNoIGxheWVycyBoYXZlIGJlZW4gYXVnbWVudGVkIHdpdGggdGhlICd0eXBlJywgJ3NvdXJjZScsIGV0Yy4gcHJvcGVydGllc1xuICogZnJvbSB0aGUgcGFyZW50IGxheWVyLCBhbmQgdGhlIGByZWZgIHByb3BlcnR5IGhhcyBiZWVuIHJlbW92ZWQuXG4gKlxuICogVGhlIGlucHV0IGlzIG5vdCBtb2RpZmllZC4gVGhlIG91dHB1dCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHBvcnRpb25zXG4gKiBvZiB0aGUgaW5wdXQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXk8TGF5ZXI+fSBsYXllcnNcbiAqIEByZXR1cm5zIHtBcnJheTxMYXllcj59XG4gKi9cbmZ1bmN0aW9uIGRlcmVmTGF5ZXJzKGxheWVycykge1xuICAgIGxheWVycyA9IGxheWVycy5zbGljZSgpO1xuXG4gICAgY29uc3QgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXBbbGF5ZXJzW2ldLmlkXSA9IGxheWVyc1tpXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoJ3JlZicgaW4gbGF5ZXJzW2ldKSB7XG4gICAgICAgICAgICBsYXllcnNbaV0gPSBkZXJlZihsYXllcnNbaV0sIG1hcFtsYXllcnNbaV0ucmVmXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGF5ZXJzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGaWx0ZXI7XG5cbmNvbnN0IHR5cGVzID0gWydVbmtub3duJywgJ1BvaW50JywgJ0xpbmVTdHJpbmcnLCAnUG9seWdvbiddO1xuXG4vKipcbiAqIEdpdmVuIGEgZmlsdGVyIGV4cHJlc3NlZCBhcyBuZXN0ZWQgYXJyYXlzLCByZXR1cm4gYSBuZXcgZnVuY3Rpb25cbiAqIHRoYXQgZXZhbHVhdGVzIHdoZXRoZXIgYSBnaXZlbiBmZWF0dXJlICh3aXRoIGEgLnByb3BlcnRpZXMgb3IgLnRhZ3MgcHJvcGVydHkpXG4gKiBwYXNzZXMgaXRzIHRlc3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlciBtYXBib3ggZ2wgZmlsdGVyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGZpbHRlci1ldmFsdWF0aW5nIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihmaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdmJywgYHZhciBwID0gKGYgJiYgZi5wcm9wZXJ0aWVzIHx8IHt9KTsgcmV0dXJuICR7Y29tcGlsZShmaWx0ZXIpfWApO1xufVxuXG5mdW5jdGlvbiBjb21waWxlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSByZXR1cm4gJ3RydWUnO1xuICAgIGNvbnN0IG9wID0gZmlsdGVyWzBdO1xuICAgIGlmIChmaWx0ZXIubGVuZ3RoIDw9IDEpIHJldHVybiBvcCA9PT0gJ2FueScgPyAnZmFsc2UnIDogJ3RydWUnO1xuICAgIGNvbnN0IHN0ciA9XG4gICAgICAgIG9wID09PSAnPT0nID8gY29tcGlsZUNvbXBhcmlzb25PcChmaWx0ZXJbMV0sIGZpbHRlclsyXSwgJz09PScsIGZhbHNlKSA6XG4gICAgICAgIG9wID09PSAnIT0nID8gY29tcGlsZUNvbXBhcmlzb25PcChmaWx0ZXJbMV0sIGZpbHRlclsyXSwgJyE9PScsIGZhbHNlKSA6XG4gICAgICAgIG9wID09PSAnPCcgfHxcbiAgICAgICAgb3AgPT09ICc+JyB8fFxuICAgICAgICBvcCA9PT0gJzw9JyB8fFxuICAgICAgICBvcCA9PT0gJz49JyA/IGNvbXBpbGVDb21wYXJpc29uT3AoZmlsdGVyWzFdLCBmaWx0ZXJbMl0sIG9wLCB0cnVlKSA6XG4gICAgICAgIG9wID09PSAnYW55JyA/IGNvbXBpbGVMb2dpY2FsT3AoZmlsdGVyLnNsaWNlKDEpLCAnfHwnKSA6XG4gICAgICAgIG9wID09PSAnYWxsJyA/IGNvbXBpbGVMb2dpY2FsT3AoZmlsdGVyLnNsaWNlKDEpLCAnJiYnKSA6XG4gICAgICAgIG9wID09PSAnbm9uZScgPyBjb21waWxlTmVnYXRpb24oY29tcGlsZUxvZ2ljYWxPcChmaWx0ZXIuc2xpY2UoMSksICd8fCcpKSA6XG4gICAgICAgIG9wID09PSAnaW4nID8gY29tcGlsZUluT3AoZmlsdGVyWzFdLCBmaWx0ZXIuc2xpY2UoMikpIDpcbiAgICAgICAgb3AgPT09ICchaW4nID8gY29tcGlsZU5lZ2F0aW9uKGNvbXBpbGVJbk9wKGZpbHRlclsxXSwgZmlsdGVyLnNsaWNlKDIpKSkgOlxuICAgICAgICBvcCA9PT0gJ2hhcycgPyBjb21waWxlSGFzT3AoZmlsdGVyWzFdKSA6XG4gICAgICAgIG9wID09PSAnIWhhcycgPyBjb21waWxlTmVnYXRpb24oY29tcGlsZUhhc09wKGZpbHRlclsxXSkpIDpcbiAgICAgICAgJ3RydWUnO1xuICAgIHJldHVybiBgKCR7c3RyfSlgO1xufVxuXG5mdW5jdGlvbiBjb21waWxlUHJvcGVydHlSZWZlcmVuY2UocHJvcGVydHkpIHtcbiAgICBjb25zdCByZWYgPVxuICAgICAgICBwcm9wZXJ0eSA9PT0gJyR0eXBlJyA/ICdmLnR5cGUnIDpcbiAgICAgICAgcHJvcGVydHkgPT09ICckaWQnID8gJ2YuaWQnIDogYHBbJHtKU09OLnN0cmluZ2lmeShwcm9wZXJ0eSl9XWA7XG4gICAgcmV0dXJuIHJlZjtcbn1cblxuZnVuY3Rpb24gY29tcGlsZUNvbXBhcmlzb25PcChwcm9wZXJ0eSwgdmFsdWUsIG9wLCBjaGVja1R5cGUpIHtcbiAgICBjb25zdCBsZWZ0ID0gY29tcGlsZVByb3BlcnR5UmVmZXJlbmNlKHByb3BlcnR5KTtcbiAgICBjb25zdCByaWdodCA9IHByb3BlcnR5ID09PSAnJHR5cGUnID8gdHlwZXMuaW5kZXhPZih2YWx1ZSkgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgcmV0dXJuIChjaGVja1R5cGUgPyBgdHlwZW9mICR7bGVmdH09PT0gdHlwZW9mICR7cmlnaHR9JiZgIDogJycpICsgbGVmdCArIG9wICsgcmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVMb2dpY2FsT3AoZXhwcmVzc2lvbnMsIG9wKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb25zLm1hcChjb21waWxlKS5qb2luKG9wKTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZUluT3AocHJvcGVydHksIHZhbHVlcykge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJyR0eXBlJykgdmFsdWVzID0gdmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzLmluZGV4T2YodmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxlZnQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMuc29ydChjb21wYXJlKSk7XG4gICAgY29uc3QgcmlnaHQgPSBjb21waWxlUHJvcGVydHlSZWZlcmVuY2UocHJvcGVydHkpO1xuXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPD0gMjAwKSByZXR1cm4gYCR7bGVmdH0uaW5kZXhPZigke3JpZ2h0fSkgIT09IC0xYDtcblxuICAgIHJldHVybiBgJHsnZnVuY3Rpb24odiwgYSwgaSwgaikgeycgK1xuICAgICAgICAnd2hpbGUgKGkgPD0gaikgeyB2YXIgbSA9IChpICsgaikgPj4gMTsnICtcbiAgICAgICAgJyAgICBpZiAoYVttXSA9PT0gdikgcmV0dXJuIHRydWU7IGlmIChhW21dID4gdikgaiA9IG0gLSAxOyBlbHNlIGkgPSBtICsgMTsnICtcbiAgICAgICAgJ30nICtcbiAgICAncmV0dXJuIGZhbHNlOyB9KCd9JHtyaWdodH0sICR7bGVmdH0sMCwke3ZhbHVlcy5sZW5ndGggLSAxfSlgO1xufVxuXG5mdW5jdGlvbiBjb21waWxlSGFzT3AocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkgPT09ICckaWQnID8gJ1wiaWRcIiBpbiBmJyA6IGAke0pTT04uc3RyaW5naWZ5KHByb3BlcnR5KX0gaW4gcGA7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVOZWdhdGlvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGAhKCR7ZXhwcmVzc2lvbn0pYDtcbn1cblxuLy8gQ29tcGFyaXNvbiBmdW5jdGlvbiB0byBzb3J0IG51bWJlcnMgYW5kIHN0cmluZ3NcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbn1cbiIsIlxuLy8gQ29uc3RhbnRzXG5jb25zdCBYbiA9IDAuOTUwNDcwLCAvLyBENjUgc3RhbmRhcmQgcmVmZXJlbnRcbiAgICBZbiA9IDEsXG4gICAgWm4gPSAxLjA4ODgzMCxcbiAgICB0MCA9IDQgLyAyOSxcbiAgICB0MSA9IDYgLyAyOSxcbiAgICB0MiA9IDMgKiB0MSAqIHQxLFxuICAgIHQzID0gdDEgKiB0MSAqIHQxLFxuICAgIGRlZzJyYWQgPSBNYXRoLlBJIC8gMTgwLFxuICAgIHJhZDJkZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4vLyBVdGlsaXRpZXNcbmZ1bmN0aW9uIHh5ejJsYWIodCkge1xuICAgIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eih0KSB7XG4gICAgcmV0dXJuIHQgPiB0MSA/IHQgKiB0ICogdCA6IHQyICogKHQgLSB0MCk7XG59XG5cbmZ1bmN0aW9uIHh5ejJyZ2IoeCkge1xuICAgIHJldHVybiAyNTUgKiAoeCA8PSAwLjAwMzEzMDggPyAxMi45MiAqIHggOiAxLjA1NSAqIE1hdGgucG93KHgsIDEgLyAyLjQpIC0gMC4wNTUpO1xufVxuXG5mdW5jdGlvbiByZ2IyeHl6KHgpIHtcbiAgICB4IC89IDI1NTtcbiAgICByZXR1cm4geCA8PSAwLjA0MDQ1ID8geCAvIDEyLjkyIDogTWF0aC5wb3coKHggKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbn1cblxuLy8gTEFCXG5mdW5jdGlvbiByZ2JUb0xhYihyZ2JDb2xvcikge1xuICAgIGNvbnN0IGIgPSByZ2IyeHl6KHJnYkNvbG9yWzBdKSxcbiAgICAgICAgYSA9IHJnYjJ4eXoocmdiQ29sb3JbMV0pLFxuICAgICAgICBsID0gcmdiMnh5eihyZ2JDb2xvclsyXSksXG4gICAgICAgIHggPSB4eXoybGFiKCgwLjQxMjQ1NjQgKiBiICsgMC4zNTc1NzYxICogYSArIDAuMTgwNDM3NSAqIGwpIC8gWG4pLFxuICAgICAgICB5ID0geHl6MmxhYigoMC4yMTI2NzI5ICogYiArIDAuNzE1MTUyMiAqIGEgKyAwLjA3MjE3NTAgKiBsKSAvIFluKSxcbiAgICAgICAgeiA9IHh5ejJsYWIoKDAuMDE5MzMzOSAqIGIgKyAwLjExOTE5MjAgKiBhICsgMC45NTAzMDQxICogbCkgLyBabik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICAxMTYgKiB5IC0gMTYsXG4gICAgICAgIDUwMCAqICh4IC0geSksXG4gICAgICAgIDIwMCAqICh5IC0geiksXG4gICAgICAgIHJnYkNvbG9yWzNdXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gbGFiVG9SZ2IobGFiQ29sb3IpIHtcbiAgICBsZXQgeSA9IChsYWJDb2xvclswXSArIDE2KSAvIDExNixcbiAgICAgICAgeCA9IGlzTmFOKGxhYkNvbG9yWzFdKSA/IHkgOiB5ICsgbGFiQ29sb3JbMV0gLyA1MDAsXG4gICAgICAgIHogPSBpc05hTihsYWJDb2xvclsyXSkgPyB5IDogeSAtIGxhYkNvbG9yWzJdIC8gMjAwO1xuICAgIHkgPSBZbiAqIGxhYjJ4eXooeSk7XG4gICAgeCA9IFhuICogbGFiMnh5eih4KTtcbiAgICB6ID0gWm4gKiBsYWIyeHl6KHopO1xuICAgIHJldHVybiBbXG4gICAgICAgIHh5ejJyZ2IoMy4yNDA0NTQyICogeCAtIDEuNTM3MTM4NSAqIHkgLSAwLjQ5ODUzMTQgKiB6KSwgLy8gRDY1IC0+IHNSR0JcbiAgICAgICAgeHl6MnJnYigtMC45NjkyNjYwICogeCArIDEuODc2MDEwOCAqIHkgKyAwLjA0MTU1NjAgKiB6KSxcbiAgICAgICAgeHl6MnJnYigwLjA1NTY0MzQgKiB4IC0gMC4yMDQwMjU5ICogeSArIDEuMDU3MjI1MiAqIHopLFxuICAgICAgICBsYWJDb2xvclszXVxuICAgIF07XG59XG5cbi8vIEhDTFxuZnVuY3Rpb24gcmdiVG9IY2wocmdiQ29sb3IpIHtcbiAgICBjb25zdCBsYWJDb2xvciA9IHJnYlRvTGFiKHJnYkNvbG9yKTtcbiAgICBjb25zdCBsID0gbGFiQ29sb3JbMF0sXG4gICAgICAgIGEgPSBsYWJDb2xvclsxXSxcbiAgICAgICAgYiA9IGxhYkNvbG9yWzJdO1xuICAgIGNvbnN0IGggPSBNYXRoLmF0YW4yKGIsIGEpICogcmFkMmRlZztcbiAgICByZXR1cm4gW1xuICAgICAgICBoIDwgMCA/IGggKyAzNjAgOiBoLFxuICAgICAgICBNYXRoLnNxcnQoYSAqIGEgKyBiICogYiksXG4gICAgICAgIGwsXG4gICAgICAgIHJnYkNvbG9yWzNdXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gaGNsVG9SZ2IoaGNsQ29sb3IpIHtcbiAgICBjb25zdCBoID0gaGNsQ29sb3JbMF0gKiBkZWcycmFkLFxuICAgICAgICBjID0gaGNsQ29sb3JbMV0sXG4gICAgICAgIGwgPSBoY2xDb2xvclsyXTtcbiAgICByZXR1cm4gbGFiVG9SZ2IoW1xuICAgICAgICBsLFxuICAgICAgICBNYXRoLmNvcyhoKSAqIGMsXG4gICAgICAgIE1hdGguc2luKGgpICogYyxcbiAgICAgICAgaGNsQ29sb3JbM11cbiAgICBdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGFiOiB7XG4gICAgICAgIGZvcndhcmQ6IHJnYlRvTGFiLFxuICAgICAgICByZXZlcnNlOiBsYWJUb1JnYlxuICAgIH0sXG4gICAgaGNsOiB7XG4gICAgICAgIGZvcndhcmQ6IHJnYlRvSGNsLFxuICAgICAgICByZXZlcnNlOiBoY2xUb1JnYlxuICAgIH1cbn07XG4iLCJcbmNvbnN0IGNvbG9yU3BhY2VzID0gcmVxdWlyZSgnLi9jb2xvcl9zcGFjZXMnKTtcbmNvbnN0IHBhcnNlQ29sb3IgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlX2NvbG9yJyk7XG5jb25zdCBleHRlbmQgPSByZXF1aXJlKCcuLi91dGlsL2V4dGVuZCcpO1xuY29uc3QgZ2V0VHlwZSA9IHJlcXVpcmUoJy4uL3V0aWwvZ2V0X3R5cGUnKTtcbmNvbnN0IGludGVycG9sYXRlID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnBvbGF0ZScpO1xuXG5mdW5jdGlvbiBpZGVudGl0eUZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24ocGFyYW1ldGVycywgcHJvcGVydHlTcGVjKSB7XG4gICAgY29uc3QgaXNDb2xvciA9IHByb3BlcnR5U3BlYy50eXBlID09PSAnY29sb3InO1xuXG4gICAgbGV0IGZ1bjtcblxuICAgIGlmICghaXNGdW5jdGlvbkRlZmluaXRpb24ocGFyYW1ldGVycykpIHtcbiAgICAgICAgaWYgKGlzQ29sb3IgJiYgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcnNlQ29sb3IocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgICAgICAgfTtcbiAgICAgICAgZnVuLmlzRmVhdHVyZUNvbnN0YW50ID0gdHJ1ZTtcbiAgICAgICAgZnVuLmlzWm9vbUNvbnN0YW50ID0gdHJ1ZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHpvb21BbmRGZWF0dXJlRGVwZW5kZW50ID0gcGFyYW1ldGVycy5zdG9wcyAmJiB0eXBlb2YgcGFyYW1ldGVycy5zdG9wc1swXVswXSA9PT0gJ29iamVjdCc7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVEZXBlbmRlbnQgPSB6b29tQW5kRmVhdHVyZURlcGVuZGVudCB8fCBwYXJhbWV0ZXJzLnByb3BlcnR5ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHpvb21EZXBlbmRlbnQgPSB6b29tQW5kRmVhdHVyZURlcGVuZGVudCB8fCAhZmVhdHVyZURlcGVuZGVudDtcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlcnMudHlwZSB8fCAocHJvcGVydHlTcGVjLmZ1bmN0aW9uID09PSAnaW50ZXJwb2xhdGVkJyA/ICdleHBvbmVudGlhbCcgOiAnaW50ZXJ2YWwnKTtcblxuICAgICAgICBpZiAoaXNDb2xvcikge1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IGV4dGVuZCh7fSwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLnN0b3BzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5zdG9wcyA9IHBhcmFtZXRlcnMuc3RvcHMubWFwKChzdG9wKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbc3RvcFswXSwgcGFyc2VDb2xvcihzdG9wWzFdKV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmRlZmF1bHQgPSBwYXJzZUNvbG9yKHBhcmFtZXRlcnMuZGVmYXVsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMuZGVmYXVsdCA9IHBhcnNlQ29sb3IocHJvcGVydHlTcGVjLmRlZmF1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlubmVyRnVuO1xuICAgICAgICBsZXQgaGFzaGVkU3RvcHM7XG4gICAgICAgIGxldCBjYXRlZ29yaWNhbEtleVR5cGU7XG4gICAgICAgIGlmICh0eXBlID09PSAnZXhwb25lbnRpYWwnKSB7XG4gICAgICAgICAgICBpbm5lckZ1biA9IGV2YWx1YXRlRXhwb25lbnRpYWxGdW5jdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaW50ZXJ2YWwnKSB7XG4gICAgICAgICAgICBpbm5lckZ1biA9IGV2YWx1YXRlSW50ZXJ2YWxGdW5jdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2F0ZWdvcmljYWwnKSB7XG4gICAgICAgICAgICBpbm5lckZ1biA9IGV2YWx1YXRlQ2F0ZWdvcmljYWxGdW5jdGlvbjtcblxuICAgICAgICAgICAgLy8gRm9yIGNhdGVnb3JpY2FsIGZ1bmN0aW9ucywgZ2VuZXJhdGUgYW4gT2JqZWN0IGFzIGEgaGFzaG1hcCBvZiB0aGUgc3RvcHMgZm9yIGZhc3Qgc2VhcmNoaW5nXG4gICAgICAgICAgICBoYXNoZWRTdG9wcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0b3Agb2YgcGFyYW1ldGVycy5zdG9wcykge1xuICAgICAgICAgICAgICAgIGhhc2hlZFN0b3BzW3N0b3BbMF1dID0gc3RvcFsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW5mZXIga2V5IHR5cGUgYmFzZWQgb24gZmlyc3Qgc3RvcCBrZXktLSB1c2VkIHRvIGVuY2ZvcmNlIHN0cmljdCB0eXBlIGNoZWNraW5nIGxhdGVyXG4gICAgICAgICAgICBjYXRlZ29yaWNhbEtleVR5cGUgPSB0eXBlb2YgcGFyYW1ldGVycy5zdG9wc1swXVswXTtcblxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpZGVudGl0eScpIHtcbiAgICAgICAgICAgIGlubmVyRnVuID0gZXZhbHVhdGVJZGVudGl0eUZ1bmN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZ1bmN0aW9uIHR5cGUgXCIke3R5cGV9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvdXRwdXRGdW5jdGlvbjtcblxuICAgICAgICAvLyBJZiB3ZSdyZSBpbnRlcnBvbGF0aW5nIGNvbG9ycyBpbiBhIGNvbG9yIHN5c3RlbSBvdGhlciB0aGFuIFJHQkEsXG4gICAgICAgIC8vIGZpcnN0IHRyYW5zbGF0ZSBhbGwgc3RvcCB2YWx1ZXMgdG8gdGhhdCBjb2xvciBzeXN0ZW0sIHRoZW4gaW50ZXJwb2xhdGVcbiAgICAgICAgLy8gYXJyYXlzIGFzIHVzdWFsLiBUaGUgYG91dHB1dEZ1bmN0aW9uYCBvcHRpb24gbGV0cyB1cyB0aGVuIHRyYW5zbGF0ZVxuICAgICAgICAvLyB0aGUgcmVzdWx0IG9mIHRoYXQgaW50ZXJwb2xhdGlvbiBiYWNrIGludG8gUkdCQS5cbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuY29sb3JTcGFjZSAmJiBwYXJhbWV0ZXJzLmNvbG9yU3BhY2UgIT09ICdyZ2InKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JTcGFjZXNbcGFyYW1ldGVycy5jb2xvclNwYWNlXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yc3BhY2UgPSBjb2xvclNwYWNlc1twYXJhbWV0ZXJzLmNvbG9yU3BhY2VdO1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIG11dGF0aW5nIHRoZSBwYXJhbWV0ZXJzIHZhbHVlXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocGFyYW1ldGVycykpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgcGFyYW1ldGVycy5zdG9wcy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnN0b3BzW3NdID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycy5zdG9wc1tzXVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yc3BhY2UuZm9yd2FyZChwYXJhbWV0ZXJzLnN0b3BzW3NdWzFdKVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRwdXRGdW5jdGlvbiA9IGNvbG9yc3BhY2UucmV2ZXJzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNvbG9yIHNwYWNlOiAke3BhcmFtZXRlcnMuY29sb3JTcGFjZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dHB1dEZ1bmN0aW9uID0gaWRlbnRpdHlGdW5jdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh6b29tQW5kRmVhdHVyZURlcGVuZGVudCkge1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUZ1bmN0aW9ucyA9IHt9O1xuICAgICAgICAgICAgY29uc3Qgem9vbVN0b3BzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IHBhcmFtZXRlcnMuc3RvcHMubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9wID0gcGFyYW1ldGVycy5zdG9wc1tzXTtcbiAgICAgICAgICAgICAgICBjb25zdCB6b29tID0gc3RvcFswXS56b29tO1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlRnVuY3Rpb25zW3pvb21dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUZ1bmN0aW9uc1t6b29tXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IHpvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBwYXJhbWV0ZXJzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcGFyYW1ldGVycy5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHBhcmFtZXRlcnMuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB6b29tU3RvcHMucHVzaCh6b29tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmVhdHVyZUZ1bmN0aW9uc1t6b29tXS5zdG9wcy5wdXNoKFtzdG9wWzBdLnZhbHVlLCBzdG9wWzFdXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVGdW5jdGlvblN0b3BzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHogb2Ygem9vbVN0b3BzKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZUZ1bmN0aW9uU3RvcHMucHVzaChbZmVhdHVyZUZ1bmN0aW9uc1t6XS56b29tLCBjcmVhdGVGdW5jdGlvbihmZWF0dXJlRnVuY3Rpb25zW3pdLCBwcm9wZXJ0eVNwZWMpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW4gPSBmdW5jdGlvbih6b29tLCBmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dEZ1bmN0aW9uKGV2YWx1YXRlRXhwb25lbnRpYWxGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BzOiBmZWF0dXJlRnVuY3Rpb25TdG9wcyxcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogcGFyYW1ldGVycy5iYXNlXG4gICAgICAgICAgICAgICAgfSwgcHJvcGVydHlTcGVjLCB6b29tKSh6b29tLCBmZWF0dXJlKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZnVuLmlzRmVhdHVyZUNvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgICAgICBmdW4uaXNab29tQ29uc3RhbnQgPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2UgaWYgKHpvb21EZXBlbmRlbnQpIHtcbiAgICAgICAgICAgIGZ1biA9IGZ1bmN0aW9uKHpvb20pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0RnVuY3Rpb24oaW5uZXJGdW4ocGFyYW1ldGVycywgcHJvcGVydHlTcGVjLCB6b29tLCBoYXNoZWRTdG9wcywgY2F0ZWdvcmljYWxLZXlUeXBlKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZnVuLmlzRmVhdHVyZUNvbnN0YW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZ1bi5pc1pvb21Db25zdGFudCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVuID0gZnVuY3Rpb24oem9vbSwgZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZmVhdHVyZVtwYXJhbWV0ZXJzLnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29hbGVzY2UocGFyYW1ldGVycy5kZWZhdWx0LCBwcm9wZXJ0eVNwZWMuZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRGdW5jdGlvbihpbm5lckZ1bihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMsIHZhbHVlLCBoYXNoZWRTdG9wcywgY2F0ZWdvcmljYWxLZXlUeXBlKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZnVuLmlzRmVhdHVyZUNvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgICAgICBmdW4uaXNab29tQ29uc3RhbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bjtcbn1cblxuZnVuY3Rpb24gY29hbGVzY2UoYSwgYiwgYykge1xuICAgIGlmIChhICE9PSB1bmRlZmluZWQpIHJldHVybiBhO1xuICAgIGlmIChiICE9PSB1bmRlZmluZWQpIHJldHVybiBiO1xuICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUNhdGVnb3JpY2FsRnVuY3Rpb24ocGFyYW1ldGVycywgcHJvcGVydHlTcGVjLCBpbnB1dCwgaGFzaGVkU3RvcHMsIGtleVR5cGUpIHtcbiAgICBjb25zdCBldmFsdWF0ZWQgPSB0eXBlb2YgaW5wdXQgPT09IGtleVR5cGUgPyBoYXNoZWRTdG9wc1tpbnB1dF0gOiB1bmRlZmluZWQ7IC8vIEVuZm9yY2Ugc3RyaWN0IHR5cGluZyBvbiBpbnB1dFxuICAgIHJldHVybiBjb2FsZXNjZShldmFsdWF0ZWQsIHBhcmFtZXRlcnMuZGVmYXVsdCwgcHJvcGVydHlTcGVjLmRlZmF1bHQpO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUludGVydmFsRnVuY3Rpb24ocGFyYW1ldGVycywgcHJvcGVydHlTcGVjLCBpbnB1dCkge1xuICAgIC8vIEVkZ2UgY2FzZXNcbiAgICBpZiAoZ2V0VHlwZShpbnB1dCkgIT09ICdudW1iZXInKSByZXR1cm4gY29hbGVzY2UocGFyYW1ldGVycy5kZWZhdWx0LCBwcm9wZXJ0eVNwZWMuZGVmYXVsdCk7XG4gICAgY29uc3QgbiA9IHBhcmFtZXRlcnMuc3RvcHMubGVuZ3RoO1xuICAgIGlmIChuID09PSAxKSByZXR1cm4gcGFyYW1ldGVycy5zdG9wc1swXVsxXTtcbiAgICBpZiAoaW5wdXQgPD0gcGFyYW1ldGVycy5zdG9wc1swXVswXSkgcmV0dXJuIHBhcmFtZXRlcnMuc3RvcHNbMF1bMV07XG4gICAgaWYgKGlucHV0ID49IHBhcmFtZXRlcnMuc3RvcHNbbiAtIDFdWzBdKSByZXR1cm4gcGFyYW1ldGVycy5zdG9wc1tuIC0gMV1bMV07XG5cbiAgICBjb25zdCBpbmRleCA9IGZpbmRTdG9wTGVzc1RoYW5PckVxdWFsVG8ocGFyYW1ldGVycy5zdG9wcywgaW5wdXQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnMuc3RvcHNbaW5kZXhdWzFdO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUV4cG9uZW50aWFsRnVuY3Rpb24ocGFyYW1ldGVycywgcHJvcGVydHlTcGVjLCBpbnB1dCkge1xuICAgIGNvbnN0IGJhc2UgPSBwYXJhbWV0ZXJzLmJhc2UgIT09IHVuZGVmaW5lZCA/IHBhcmFtZXRlcnMuYmFzZSA6IDE7XG5cbiAgICAvLyBFZGdlIGNhc2VzXG4gICAgaWYgKGdldFR5cGUoaW5wdXQpICE9PSAnbnVtYmVyJykgcmV0dXJuIGNvYWxlc2NlKHBhcmFtZXRlcnMuZGVmYXVsdCwgcHJvcGVydHlTcGVjLmRlZmF1bHQpO1xuICAgIGNvbnN0IG4gPSBwYXJhbWV0ZXJzLnN0b3BzLmxlbmd0aDtcbiAgICBpZiAobiA9PT0gMSkgcmV0dXJuIHBhcmFtZXRlcnMuc3RvcHNbMF1bMV07XG4gICAgaWYgKGlucHV0IDw9IHBhcmFtZXRlcnMuc3RvcHNbMF1bMF0pIHJldHVybiBwYXJhbWV0ZXJzLnN0b3BzWzBdWzFdO1xuICAgIGlmIChpbnB1dCA+PSBwYXJhbWV0ZXJzLnN0b3BzW24gLSAxXVswXSkgcmV0dXJuIHBhcmFtZXRlcnMuc3RvcHNbbiAtIDFdWzFdO1xuXG4gICAgY29uc3QgaW5kZXggPSBmaW5kU3RvcExlc3NUaGFuT3JFcXVhbFRvKHBhcmFtZXRlcnMuc3RvcHMsIGlucHV0KTtcbiAgICBjb25zdCB0ID0gaW50ZXJwb2xhdGlvbkZhY3RvcihcbiAgICAgICAgaW5wdXQsIGJhc2UsXG4gICAgICAgIHBhcmFtZXRlcnMuc3RvcHNbaW5kZXhdWzBdLFxuICAgICAgICBwYXJhbWV0ZXJzLnN0b3BzW2luZGV4ICsgMV1bMF0pO1xuXG4gICAgY29uc3Qgb3V0cHV0TG93ZXIgPSBwYXJhbWV0ZXJzLnN0b3BzW2luZGV4XVsxXTtcbiAgICBjb25zdCBvdXRwdXRVcHBlciA9IHBhcmFtZXRlcnMuc3RvcHNbaW5kZXggKyAxXVsxXTtcbiAgICBjb25zdCBpbnRlcnAgPSBpbnRlcnBvbGF0ZVtwcm9wZXJ0eVNwZWMudHlwZV0gfHwgaWRlbnRpdHlGdW5jdGlvbjtcblxuICAgIGlmICh0eXBlb2Ygb3V0cHV0TG93ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2YWx1YXRlZExvd2VyID0gb3V0cHV0TG93ZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IGV2YWx1YXRlZFVwcGVyID0gb3V0cHV0VXBwZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgZmlsbC1vdXRsaW5lLWNvbG9yLCB3aGljaCBoYXMgbm8gc3BlYyBkZWZhdWx0LlxuICAgICAgICAgICAgaWYgKGV2YWx1YXRlZExvd2VyID09PSB1bmRlZmluZWQgfHwgZXZhbHVhdGVkVXBwZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJwKGV2YWx1YXRlZExvd2VyLCBldmFsdWF0ZWRVcHBlciwgdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycChvdXRwdXRMb3dlciwgb3V0cHV0VXBwZXIsIHQpO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUlkZW50aXR5RnVuY3Rpb24ocGFyYW1ldGVycywgcHJvcGVydHlTcGVjLCBpbnB1dCkge1xuICAgIGlmIChwcm9wZXJ0eVNwZWMudHlwZSA9PT0gJ2NvbG9yJykge1xuICAgICAgICBpbnB1dCA9IHBhcnNlQ29sb3IoaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoZ2V0VHlwZShpbnB1dCkgIT09IHByb3BlcnR5U3BlYy50eXBlICYmIChwcm9wZXJ0eVNwZWMudHlwZSAhPT0gJ2VudW0nIHx8ICFwcm9wZXJ0eVNwZWMudmFsdWVzW2lucHV0XSkpIHtcbiAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjb2FsZXNjZShpbnB1dCwgcGFyYW1ldGVycy5kZWZhdWx0LCBwcm9wZXJ0eVNwZWMuZGVmYXVsdCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgc3RvcCA8PSBpbnB1dCwgb3IgMCBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZpbmRTdG9wTGVzc1RoYW5PckVxdWFsVG8oc3RvcHMsIGlucHV0KSB7XG4gICAgY29uc3QgbiA9IHN0b3BzLmxlbmd0aDtcbiAgICBsZXQgbG93ZXJJbmRleCA9IDA7XG4gICAgbGV0IHVwcGVySW5kZXggPSBuIC0gMTtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICBsZXQgY3VycmVudFZhbHVlLCB1cHBlclZhbHVlO1xuXG4gICAgd2hpbGUgKGxvd2VySW5kZXggPD0gdXBwZXJJbmRleCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBNYXRoLmZsb29yKChsb3dlckluZGV4ICsgdXBwZXJJbmRleCkgLyAyKTtcbiAgICAgICAgY3VycmVudFZhbHVlID0gc3RvcHNbY3VycmVudEluZGV4XVswXTtcbiAgICAgICAgdXBwZXJWYWx1ZSA9IHN0b3BzW2N1cnJlbnRJbmRleCArIDFdWzBdO1xuICAgICAgICBpZiAoaW5wdXQgPT09IGN1cnJlbnRWYWx1ZSB8fCBpbnB1dCA+IGN1cnJlbnRWYWx1ZSAmJiBpbnB1dCA8IHVwcGVyVmFsdWUpIHsgLy8gU2VhcmNoIGNvbXBsZXRlXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEluZGV4O1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA8IGlucHV0KSB7XG4gICAgICAgICAgICBsb3dlckluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWUgPiBpbnB1dCkge1xuICAgICAgICAgICAgdXBwZXJJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoY3VycmVudEluZGV4IC0gMSwgMCk7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb25EZWZpbml0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgKHZhbHVlLnN0b3BzIHx8IHZhbHVlLnR5cGUgPT09ICdpZGVudGl0eScpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSByYXRpbyB0aGF0IGNhbiBiZSB1c2VkIHRvIGludGVycG9sYXRlIGJldHdlZW4gZXhwb25lbnRpYWwgZnVuY3Rpb25cbiAqIHN0b3BzLlxuICpcbiAqIEhvdyBpdCB3b3JrczpcbiAqIFR3byBjb25zZWN1dGl2ZSBzdG9wIHZhbHVlcyBkZWZpbmUgYSAoc2NhbGVkIGFuZCBzaGlmdGVkKSBleHBvbmVudGlhbFxuICogZnVuY3Rpb24gYGYoeCkgPSBhICogYmFzZV54ICsgYmAsIHdoZXJlIGBiYXNlYCBpcyB0aGUgdXNlci1zcGVjaWZpZWQgYmFzZSxcbiAqIGFuZCBgYWAgYW5kIGBiYCBhcmUgY29uc3RhbnRzIGFmZm9yZGluZyBzdWZmaWNpZW50IGRlZ3JlZXMgb2YgZnJlZWRvbSB0byBmaXRcbiAqIHRoZSBmdW5jdGlvbiB0byB0aGUgZ2l2ZW4gc3RvcHMuXG4gKlxuICogSGVyZSdzIGEgYml0IG9mIGFsZ2VicmEgdGhhdCBsZXRzIHVzIGNvbXB1dGUgYGYoeClgIGRpcmVjdGx5IGZyb20gdGhlIHN0b3BcbiAqIHZhbHVlcyB3aXRob3V0IGV4cGxpY2l0bHkgc29sdmluZyBmb3IgYGFgIGFuZCBgYmA6XG4gKlxuICogRmlyc3Qgc3RvcCB2YWx1ZTogYGYoeDApID0geTAgPSBhICogYmFzZV54MCArIGJgXG4gKiBTZWNvbmQgc3RvcCB2YWx1ZTogYGYoeDEpID0geTEgPSBhICogYmFzZV54MSArIGJgXG4gKiA9PiBgeTEgLSB5MCA9IGEoYmFzZV54MSAtIGJhc2VeeDApYFxuICogPT4gYGEgPSAoeTEgLSB5MCkvKGJhc2VeeDEgLSBiYXNlXngwKWBcbiAqXG4gKiBEZXNpcmVkIHZhbHVlOiBgZih4KSA9IHkgPSBhICogYmFzZV54ICsgYmBcbiAqID0+IGBmKHgpID0geTAgKyBhICogKGJhc2VeeCAtIGJhc2VeeDApYFxuICpcbiAqIEZyb20gdGhlIGFib3ZlLCB3ZSBjYW4gcmVwbGFjZSB0aGUgYGFgIGluIGBhICogKGJhc2VeeCAtIGJhc2VeeDApYCBhbmQgZG8gYVxuICogbGl0dGxlIGFsZ2VicmE6XG4gKiBgYGBcbiAqIGEgKiAoYmFzZV54IC0gYmFzZV54MCkgPSAoeTEgLSB5MCkvKGJhc2VeeDEgLSBiYXNlXngwKSAqIChiYXNlXnggLSBiYXNlXngwKVxuICogICAgICAgICAgICAgICAgICAgICA9ICh5MSAtIHkwKSAqIChiYXNlXnggLSBiYXNlXngwKSAvIChiYXNlXngxIC0gYmFzZV54MClcbiAqIGBgYFxuICpcbiAqIElmIHdlIGxldCBgKGJhc2VeeCAtIGJhc2VeeDApIC8gKGJhc2VeeDEgYmFzZV54MClgLCB0aGVuIHdlIGhhdmVcbiAqIGBmKHgpID0geTAgKyAoeTEgLSB5MCkgKiByYXRpb2AuICBJbiBvdGhlciB3b3JkcywgYHJhdGlvYCBtYXkgYmUgdHJlYXRlZCBhc1xuICogYW4gaW50ZXJwb2xhdGlvbiBmYWN0b3IgYmV0d2VlbiB0aGUgdHdvIHN0b3BzJyBvdXRwdXQgdmFsdWVzLlxuICpcbiAqIChOb3RlOiBhIHNsaWdodGx5IGRpZmZlcmVudCBmb3JtIGZvciBgcmF0aW9gLFxuICogYChiYXNlXih4LXgwKSAtIDEpIC8gKGJhc2VeKHgxLXgwKSAtIDEpIGAsIGlzIGVxdWl2YWxlbnQsIGJ1dCByZXF1aXJlcyBmZXdlclxuICogZXhwZW5zaXZlIGBNYXRoLnBvdygpYCBvcGVyYXRpb25zLilcbiAqXG4gKiBAcHJpdmF0ZVxuKi9cbmZ1bmN0aW9uIGludGVycG9sYXRpb25GYWN0b3IoaW5wdXQsIGJhc2UsIGxvd2VyVmFsdWUsIHVwcGVyVmFsdWUpIHtcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdXBwZXJWYWx1ZSAtIGxvd2VyVmFsdWU7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBpbnB1dCAtIGxvd2VyVmFsdWU7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKGJhc2UgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIC8gZGlmZmVyZW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKE1hdGgucG93KGJhc2UsIHByb2dyZXNzKSAtIDEpIC8gKE1hdGgucG93KGJhc2UsIGRpZmZlcmVuY2UpIC0gMSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZ1bmN0aW9uO1xubW9kdWxlLmV4cG9ydHMuaXNGdW5jdGlvbkRlZmluaXRpb24gPSBpc0Z1bmN0aW9uRGVmaW5pdGlvbjtcbm1vZHVsZS5leHBvcnRzLmludGVycG9sYXRpb25GYWN0b3IgPSBpbnRlcnBvbGF0aW9uRmFjdG9yO1xubW9kdWxlLmV4cG9ydHMuZmluZFN0b3BMZXNzVGhhbk9yRXF1YWxUbyA9IGZpbmRTdG9wTGVzc1RoYW5PckVxdWFsVG87XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCwgLi4uaW5wdXRzKSB7XG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBrIGluIGlucHV0KSB7XG4gICAgICAgICAgICBvdXRwdXRba10gPSBpbnB1dFtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRUeXBlKHZhbCkge1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xuICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICB9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuICdib29sZWFuJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsO1xuICAgIH1cbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gaW50ZXJwb2xhdGU7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlKGEsIGIsIHQpIHtcbiAgICByZXR1cm4gKGEgKiAoMSAtIHQpKSArIChiICogdCk7XG59XG5cbmludGVycG9sYXRlLm51bWJlciA9IGludGVycG9sYXRlO1xuXG5pbnRlcnBvbGF0ZS52ZWMyID0gZnVuY3Rpb24oZnJvbSwgdG8sIHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tWzBdLCB0b1swXSwgdCksXG4gICAgICAgIGludGVycG9sYXRlKGZyb21bMV0sIHRvWzFdLCB0KVxuICAgIF07XG59O1xuXG4vKlxuICogSW50ZXJwb2xhdGUgYmV0d2VlbiB0d28gY29sb3JzIGdpdmVuIGFzIDQtZWxlbWVudCBhcnJheXMuXG4gKlxuICogQHBhcmFtIHtDb2xvcn0gZnJvbVxuICogQHBhcmFtIHtDb2xvcn0gdG9cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IGludGVycG9sYXRpb24gZmFjdG9yIGJldHdlZW4gMCBhbmQgMVxuICogQHJldHVybnMge0NvbG9yfSBpbnRlcnBvbGF0ZWQgY29sb3JcbiAqL1xuaW50ZXJwb2xhdGUuY29sb3IgPSBmdW5jdGlvbihmcm9tLCB0bywgdCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIGludGVycG9sYXRlKGZyb21bMF0sIHRvWzBdLCB0KSxcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbVsxXSwgdG9bMV0sIHQpLFxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tWzJdLCB0b1syXSwgdCksXG4gICAgICAgIGludGVycG9sYXRlKGZyb21bM10sIHRvWzNdLCB0KVxuICAgIF07XG59O1xuXG5pbnRlcnBvbGF0ZS5hcnJheSA9IGZ1bmN0aW9uKGZyb20sIHRvLCB0KSB7XG4gICAgcmV0dXJuIGZyb20ubWFwKChkLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZShkLCB0b1tpXSwgdCk7XG4gICAgfSk7XG59O1xuIiwiXG5jb25zdCBwYXJzZUNvbG9yU3RyaW5nID0gcmVxdWlyZSgnY3NzY29sb3JwYXJzZXInKS5wYXJzZUNTU0NvbG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlQ29sb3IoaW5wdXQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCByZ2JhID0gcGFyc2VDb2xvclN0cmluZyhpbnB1dCk7XG4gICAgICAgIGlmICghcmdiYSkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiAgICAgICAgLy8gR0wgZXhwZWN0cyBhbGwgY29tcG9uZW50cyB0byBiZSBpbiB0aGUgcmFuZ2UgWzAsIDFdIGFuZCB0byBiZVxuICAgICAgICAvLyBtdWx0aXBsZWQgYnkgdGhlIGFscGhhIHZhbHVlLlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgcmdiYVswXSAvIDI1NSAqIHJnYmFbM10sXG4gICAgICAgICAgICByZ2JhWzFdIC8gMjU1ICogcmdiYVszXSxcbiAgICAgICAgICAgIHJnYmFbMl0gLyAyNTUgKiByZ2JhWzNdLFxuICAgICAgICAgICAgcmdiYVszXVxuICAgICAgICBdO1xuXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gWyd0eXBlJywgJ3NvdXJjZScsICdzb3VyY2UtbGF5ZXInLCAnbWluem9vbScsICdtYXh6b29tJywgJ2ZpbHRlcicsICdsYXlvdXQnXTtcbiIsIi8vIChjKSBEZWFuIE1jTmFtZWUgPGRlYW5AZ21haWwuY29tPiwgMjAxMi5cbi8vXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGVhbm0vY3NzLWNvbG9yLXBhcnNlci1qc1xuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4vLyBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuLy8gcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4vLyBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4vLyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4vLyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvXG52YXIga0NTU0NvbG9yVGFibGUgPSB7XG4gIFwidHJhbnNwYXJlbnRcIjogWzAsMCwwLDBdLCBcImFsaWNlYmx1ZVwiOiBbMjQwLDI0OCwyNTUsMV0sXG4gIFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsMjM1LDIxNSwxXSwgXCJhcXVhXCI6IFswLDI1NSwyNTUsMV0sXG4gIFwiYXF1YW1hcmluZVwiOiBbMTI3LDI1NSwyMTIsMV0sIFwiYXp1cmVcIjogWzI0MCwyNTUsMjU1LDFdLFxuICBcImJlaWdlXCI6IFsyNDUsMjQ1LDIyMCwxXSwgXCJiaXNxdWVcIjogWzI1NSwyMjgsMTk2LDFdLFxuICBcImJsYWNrXCI6IFswLDAsMCwxXSwgXCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LDIzNSwyMDUsMV0sXG4gIFwiYmx1ZVwiOiBbMCwwLDI1NSwxXSwgXCJibHVldmlvbGV0XCI6IFsxMzgsNDMsMjI2LDFdLFxuICBcImJyb3duXCI6IFsxNjUsNDIsNDIsMV0sIFwiYnVybHl3b29kXCI6IFsyMjIsMTg0LDEzNSwxXSxcbiAgXCJjYWRldGJsdWVcIjogWzk1LDE1OCwxNjAsMV0sIFwiY2hhcnRyZXVzZVwiOiBbMTI3LDI1NSwwLDFdLFxuICBcImNob2NvbGF0ZVwiOiBbMjEwLDEwNSwzMCwxXSwgXCJjb3JhbFwiOiBbMjU1LDEyNyw4MCwxXSxcbiAgXCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLDE0OSwyMzcsMV0sIFwiY29ybnNpbGtcIjogWzI1NSwyNDgsMjIwLDFdLFxuICBcImNyaW1zb25cIjogWzIyMCwyMCw2MCwxXSwgXCJjeWFuXCI6IFswLDI1NSwyNTUsMV0sXG4gIFwiZGFya2JsdWVcIjogWzAsMCwxMzksMV0sIFwiZGFya2N5YW5cIjogWzAsMTM5LDEzOSwxXSxcbiAgXCJkYXJrZ29sZGVucm9kXCI6IFsxODQsMTM0LDExLDFdLCBcImRhcmtncmF5XCI6IFsxNjksMTY5LDE2OSwxXSxcbiAgXCJkYXJrZ3JlZW5cIjogWzAsMTAwLDAsMV0sIFwiZGFya2dyZXlcIjogWzE2OSwxNjksMTY5LDFdLFxuICBcImRhcmtraGFraVwiOiBbMTg5LDE4MywxMDcsMV0sIFwiZGFya21hZ2VudGFcIjogWzEzOSwwLDEzOSwxXSxcbiAgXCJkYXJrb2xpdmVncmVlblwiOiBbODUsMTA3LDQ3LDFdLCBcImRhcmtvcmFuZ2VcIjogWzI1NSwxNDAsMCwxXSxcbiAgXCJkYXJrb3JjaGlkXCI6IFsxNTMsNTAsMjA0LDFdLCBcImRhcmtyZWRcIjogWzEzOSwwLDAsMV0sXG4gIFwiZGFya3NhbG1vblwiOiBbMjMzLDE1MCwxMjIsMV0sIFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsMTg4LDE0MywxXSxcbiAgXCJkYXJrc2xhdGVibHVlXCI6IFs3Miw2MSwxMzksMV0sIFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsNzksNzksMV0sXG4gIFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsNzksNzksMV0sIFwiZGFya3R1cnF1b2lzZVwiOiBbMCwyMDYsMjA5LDFdLFxuICBcImRhcmt2aW9sZXRcIjogWzE0OCwwLDIxMSwxXSwgXCJkZWVwcGlua1wiOiBbMjU1LDIwLDE0NywxXSxcbiAgXCJkZWVwc2t5Ymx1ZVwiOiBbMCwxOTEsMjU1LDFdLCBcImRpbWdyYXlcIjogWzEwNSwxMDUsMTA1LDFdLFxuICBcImRpbWdyZXlcIjogWzEwNSwxMDUsMTA1LDFdLCBcImRvZGdlcmJsdWVcIjogWzMwLDE0NCwyNTUsMV0sXG4gIFwiZmlyZWJyaWNrXCI6IFsxNzgsMzQsMzQsMV0sIFwiZmxvcmFsd2hpdGVcIjogWzI1NSwyNTAsMjQwLDFdLFxuICBcImZvcmVzdGdyZWVuXCI6IFszNCwxMzksMzQsMV0sIFwiZnVjaHNpYVwiOiBbMjU1LDAsMjU1LDFdLFxuICBcImdhaW5zYm9yb1wiOiBbMjIwLDIyMCwyMjAsMV0sIFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LDI0OCwyNTUsMV0sXG4gIFwiZ29sZFwiOiBbMjU1LDIxNSwwLDFdLCBcImdvbGRlbnJvZFwiOiBbMjE4LDE2NSwzMiwxXSxcbiAgXCJncmF5XCI6IFsxMjgsMTI4LDEyOCwxXSwgXCJncmVlblwiOiBbMCwxMjgsMCwxXSxcbiAgXCJncmVlbnllbGxvd1wiOiBbMTczLDI1NSw0NywxXSwgXCJncmV5XCI6IFsxMjgsMTI4LDEyOCwxXSxcbiAgXCJob25leWRld1wiOiBbMjQwLDI1NSwyNDAsMV0sIFwiaG90cGlua1wiOiBbMjU1LDEwNSwxODAsMV0sXG4gIFwiaW5kaWFucmVkXCI6IFsyMDUsOTIsOTIsMV0sIFwiaW5kaWdvXCI6IFs3NSwwLDEzMCwxXSxcbiAgXCJpdm9yeVwiOiBbMjU1LDI1NSwyNDAsMV0sIFwia2hha2lcIjogWzI0MCwyMzAsMTQwLDFdLFxuICBcImxhdmVuZGVyXCI6IFsyMzAsMjMwLDI1MCwxXSwgXCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsMjQwLDI0NSwxXSxcbiAgXCJsYXduZ3JlZW5cIjogWzEyNCwyNTIsMCwxXSwgXCJsZW1vbmNoaWZmb25cIjogWzI1NSwyNTAsMjA1LDFdLFxuICBcImxpZ2h0Ymx1ZVwiOiBbMTczLDIxNiwyMzAsMV0sIFwibGlnaHRjb3JhbFwiOiBbMjQwLDEyOCwxMjgsMV0sXG4gIFwibGlnaHRjeWFuXCI6IFsyMjQsMjU1LDI1NSwxXSwgXCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLDI1MCwyMTAsMV0sXG4gIFwibGlnaHRncmF5XCI6IFsyMTEsMjExLDIxMSwxXSwgXCJsaWdodGdyZWVuXCI6IFsxNDQsMjM4LDE0NCwxXSxcbiAgXCJsaWdodGdyZXlcIjogWzIxMSwyMTEsMjExLDFdLCBcImxpZ2h0cGlua1wiOiBbMjU1LDE4MiwxOTMsMV0sXG4gIFwibGlnaHRzYWxtb25cIjogWzI1NSwxNjAsMTIyLDFdLCBcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLDE3OCwxNzAsMV0sXG4gIFwibGlnaHRza3libHVlXCI6IFsxMzUsMjA2LDI1MCwxXSwgXCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LDEzNiwxNTMsMV0sXG4gIFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwxMzYsMTUzLDFdLCBcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsMTk2LDIyMiwxXSxcbiAgXCJsaWdodHllbGxvd1wiOiBbMjU1LDI1NSwyMjQsMV0sIFwibGltZVwiOiBbMCwyNTUsMCwxXSxcbiAgXCJsaW1lZ3JlZW5cIjogWzUwLDIwNSw1MCwxXSwgXCJsaW5lblwiOiBbMjUwLDI0MCwyMzAsMV0sXG4gIFwibWFnZW50YVwiOiBbMjU1LDAsMjU1LDFdLCBcIm1hcm9vblwiOiBbMTI4LDAsMCwxXSxcbiAgXCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsMjA1LDE3MCwxXSwgXCJtZWRpdW1ibHVlXCI6IFswLDAsMjA1LDFdLFxuICBcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LDg1LDIxMSwxXSwgXCJtZWRpdW1wdXJwbGVcIjogWzE0NywxMTIsMjE5LDFdLFxuICBcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwxNzksMTEzLDFdLCBcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLDEwNCwyMzgsMV0sXG4gIFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsMjUwLDE1NCwxXSwgXCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLDIwOSwyMDQsMV0sXG4gIFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksMjEsMTMzLDFdLCBcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsMjUsMTEyLDFdLFxuICBcIm1pbnRjcmVhbVwiOiBbMjQ1LDI1NSwyNTAsMV0sIFwibWlzdHlyb3NlXCI6IFsyNTUsMjI4LDIyNSwxXSxcbiAgXCJtb2NjYXNpblwiOiBbMjU1LDIyOCwxODEsMV0sIFwibmF2YWpvd2hpdGVcIjogWzI1NSwyMjIsMTczLDFdLFxuICBcIm5hdnlcIjogWzAsMCwxMjgsMV0sIFwib2xkbGFjZVwiOiBbMjUzLDI0NSwyMzAsMV0sXG4gIFwib2xpdmVcIjogWzEyOCwxMjgsMCwxXSwgXCJvbGl2ZWRyYWJcIjogWzEwNywxNDIsMzUsMV0sXG4gIFwib3JhbmdlXCI6IFsyNTUsMTY1LDAsMV0sIFwib3JhbmdlcmVkXCI6IFsyNTUsNjksMCwxXSxcbiAgXCJvcmNoaWRcIjogWzIxOCwxMTIsMjE0LDFdLCBcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwyMzIsMTcwLDFdLFxuICBcInBhbGVncmVlblwiOiBbMTUyLDI1MSwxNTIsMV0sIFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LDIzOCwyMzgsMV0sXG4gIFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LDExMiwxNDcsMV0sIFwicGFwYXlhd2hpcFwiOiBbMjU1LDIzOSwyMTMsMV0sXG4gIFwicGVhY2hwdWZmXCI6IFsyNTUsMjE4LDE4NSwxXSwgXCJwZXJ1XCI6IFsyMDUsMTMzLDYzLDFdLFxuICBcInBpbmtcIjogWzI1NSwxOTIsMjAzLDFdLCBcInBsdW1cIjogWzIyMSwxNjAsMjIxLDFdLFxuICBcInBvd2RlcmJsdWVcIjogWzE3NiwyMjQsMjMwLDFdLCBcInB1cnBsZVwiOiBbMTI4LDAsMTI4LDFdLFxuICBcInJlYmVjY2FwdXJwbGVcIjogWzEwMiw1MSwxNTMsMV0sXG4gIFwicmVkXCI6IFsyNTUsMCwwLDFdLCBcInJvc3licm93blwiOiBbMTg4LDE0MywxNDMsMV0sXG4gIFwicm95YWxibHVlXCI6IFs2NSwxMDUsMjI1LDFdLCBcInNhZGRsZWJyb3duXCI6IFsxMzksNjksMTksMV0sXG4gIFwic2FsbW9uXCI6IFsyNTAsMTI4LDExNCwxXSwgXCJzYW5keWJyb3duXCI6IFsyNDQsMTY0LDk2LDFdLFxuICBcInNlYWdyZWVuXCI6IFs0NiwxMzksODcsMV0sIFwic2Vhc2hlbGxcIjogWzI1NSwyNDUsMjM4LDFdLFxuICBcInNpZW5uYVwiOiBbMTYwLDgyLDQ1LDFdLCBcInNpbHZlclwiOiBbMTkyLDE5MiwxOTIsMV0sXG4gIFwic2t5Ymx1ZVwiOiBbMTM1LDIwNiwyMzUsMV0sIFwic2xhdGVibHVlXCI6IFsxMDYsOTAsMjA1LDFdLFxuICBcInNsYXRlZ3JheVwiOiBbMTEyLDEyOCwxNDQsMV0sIFwic2xhdGVncmV5XCI6IFsxMTIsMTI4LDE0NCwxXSxcbiAgXCJzbm93XCI6IFsyNTUsMjUwLDI1MCwxXSwgXCJzcHJpbmdncmVlblwiOiBbMCwyNTUsMTI3LDFdLFxuICBcInN0ZWVsYmx1ZVwiOiBbNzAsMTMwLDE4MCwxXSwgXCJ0YW5cIjogWzIxMCwxODAsMTQwLDFdLFxuICBcInRlYWxcIjogWzAsMTI4LDEyOCwxXSwgXCJ0aGlzdGxlXCI6IFsyMTYsMTkxLDIxNiwxXSxcbiAgXCJ0b21hdG9cIjogWzI1NSw5OSw3MSwxXSwgXCJ0dXJxdW9pc2VcIjogWzY0LDIyNCwyMDgsMV0sXG4gIFwidmlvbGV0XCI6IFsyMzgsMTMwLDIzOCwxXSwgXCJ3aGVhdFwiOiBbMjQ1LDIyMiwxNzksMV0sXG4gIFwid2hpdGVcIjogWzI1NSwyNTUsMjU1LDFdLCBcIndoaXRlc21va2VcIjogWzI0NSwyNDUsMjQ1LDFdLFxuICBcInllbGxvd1wiOiBbMjU1LDI1NSwwLDFdLCBcInllbGxvd2dyZWVuXCI6IFsxNTQsMjA1LDUwLDFdfVxuXG5mdW5jdGlvbiBjbGFtcF9jc3NfYnl0ZShpKSB7ICAvLyBDbGFtcCB0byBpbnRlZ2VyIDAgLi4gMjU1LlxuICBpID0gTWF0aC5yb3VuZChpKTsgIC8vIFNlZW1zIHRvIGJlIHdoYXQgQ2hyb21lIGRvZXMgKHZzIHRydW5jYXRpb24pLlxuICByZXR1cm4gaSA8IDAgPyAwIDogaSA+IDI1NSA/IDI1NSA6IGk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wX2Nzc19mbG9hdChmKSB7ICAvLyBDbGFtcCB0byBmbG9hdCAwLjAgLi4gMS4wLlxuICByZXR1cm4gZiA8IDAgPyAwIDogZiA+IDEgPyAxIDogZjtcbn1cblxuZnVuY3Rpb24gcGFyc2VfY3NzX2ludChzdHIpIHsgIC8vIGludCBvciBwZXJjZW50YWdlLlxuICBpZiAoc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJyUnKVxuICAgIHJldHVybiBjbGFtcF9jc3NfYnl0ZShwYXJzZUZsb2F0KHN0cikgLyAxMDAgKiAyNTUpO1xuICByZXR1cm4gY2xhbXBfY3NzX2J5dGUocGFyc2VJbnQoc3RyKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlX2Nzc19mbG9hdChzdHIpIHsgIC8vIGZsb2F0IG9yIHBlcmNlbnRhZ2UuXG4gIGlmIChzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnJScpXG4gICAgcmV0dXJuIGNsYW1wX2Nzc19mbG9hdChwYXJzZUZsb2F0KHN0cikgLyAxMDApO1xuICByZXR1cm4gY2xhbXBfY3NzX2Zsb2F0KHBhcnNlRmxvYXQoc3RyKSk7XG59XG5cbmZ1bmN0aW9uIGNzc19odWVfdG9fcmdiKG0xLCBtMiwgaCkge1xuICBpZiAoaCA8IDApIGggKz0gMTtcbiAgZWxzZSBpZiAoaCA+IDEpIGggLT0gMTtcblxuICBpZiAoaCAqIDYgPCAxKSByZXR1cm4gbTEgKyAobTIgLSBtMSkgKiBoICogNjtcbiAgaWYgKGggKiAyIDwgMSkgcmV0dXJuIG0yO1xuICBpZiAoaCAqIDMgPCAyKSByZXR1cm4gbTEgKyAobTIgLSBtMSkgKiAoMi8zIC0gaCkgKiA2O1xuICByZXR1cm4gbTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ1NTQ29sb3IoY3NzX3N0cikge1xuICAvLyBSZW1vdmUgYWxsIHdoaXRlc3BhY2UsIG5vdCBjb21wbGlhbnQsIGJ1dCBzaG91bGQganVzdCBiZSBtb3JlIGFjY2VwdGluZy5cbiAgdmFyIHN0ciA9IGNzc19zdHIucmVwbGFjZSgvIC9nLCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAvLyBDb2xvciBrZXl3b3JkcyAoYW5kIHRyYW5zcGFyZW50KSBsb29rdXAuXG4gIGlmIChzdHIgaW4ga0NTU0NvbG9yVGFibGUpIHJldHVybiBrQ1NTQ29sb3JUYWJsZVtzdHJdLnNsaWNlKCk7ICAvLyBkdXAuXG5cbiAgLy8gI2FiYyBhbmQgI2FiYzEyMyBzeW50YXguXG4gIGlmIChzdHJbMF0gPT09ICcjJykge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSA0KSB7XG4gICAgICB2YXIgaXYgPSBwYXJzZUludChzdHIuc3Vic3RyKDEpLCAxNik7ICAvLyBUT0RPKGRlYW5tKTogU3RyaWN0ZXIgcGFyc2luZy5cbiAgICAgIGlmICghKGl2ID49IDAgJiYgaXYgPD0gMHhmZmYpKSByZXR1cm4gbnVsbDsgIC8vIENvdmVycyBOYU4uXG4gICAgICByZXR1cm4gWygoaXYgJiAweGYwMCkgPj4gNCkgfCAoKGl2ICYgMHhmMDApID4+IDgpLFxuICAgICAgICAgICAgICAoaXYgJiAweGYwKSB8ICgoaXYgJiAweGYwKSA+PiA0KSxcbiAgICAgICAgICAgICAgKGl2ICYgMHhmKSB8ICgoaXYgJiAweGYpIDw8IDQpLFxuICAgICAgICAgICAgICAxXTtcbiAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPT09IDcpIHtcbiAgICAgIHZhciBpdiA9IHBhcnNlSW50KHN0ci5zdWJzdHIoMSksIDE2KTsgIC8vIFRPRE8oZGVhbm0pOiBTdHJpY3RlciBwYXJzaW5nLlxuICAgICAgaWYgKCEoaXYgPj0gMCAmJiBpdiA8PSAweGZmZmZmZikpIHJldHVybiBudWxsOyAgLy8gQ292ZXJzIE5hTi5cbiAgICAgIHJldHVybiBbKGl2ICYgMHhmZjAwMDApID4+IDE2LFxuICAgICAgICAgICAgICAoaXYgJiAweGZmMDApID4+IDgsXG4gICAgICAgICAgICAgIGl2ICYgMHhmZixcbiAgICAgICAgICAgICAgMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgb3AgPSBzdHIuaW5kZXhPZignKCcpLCBlcCA9IHN0ci5pbmRleE9mKCcpJyk7XG4gIGlmIChvcCAhPT0gLTEgJiYgZXAgKyAxID09PSBzdHIubGVuZ3RoKSB7XG4gICAgdmFyIGZuYW1lID0gc3RyLnN1YnN0cigwLCBvcCk7XG4gICAgdmFyIHBhcmFtcyA9IHN0ci5zdWJzdHIob3ArMSwgZXAtKG9wKzEpKS5zcGxpdCgnLCcpO1xuICAgIHZhciBhbHBoYSA9IDE7ICAvLyBUbyBhbGxvdyBjYXNlIGZhbGx0aHJvdWdoLlxuICAgIHN3aXRjaCAoZm5hbWUpIHtcbiAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCAhPT0gNCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGFscGhhID0gcGFyc2VfY3NzX2Zsb2F0KHBhcmFtcy5wb3AoKSk7XG4gICAgICAgIC8vIEZhbGwgdGhyb3VnaC5cbiAgICAgIGNhc2UgJ3JnYic6XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoICE9PSAzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIFtwYXJzZV9jc3NfaW50KHBhcmFtc1swXSksXG4gICAgICAgICAgICAgICAgcGFyc2VfY3NzX2ludChwYXJhbXNbMV0pLFxuICAgICAgICAgICAgICAgIHBhcnNlX2Nzc19pbnQocGFyYW1zWzJdKSxcbiAgICAgICAgICAgICAgICBhbHBoYV07XG4gICAgICBjYXNlICdoc2xhJzpcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggIT09IDQpIHJldHVybiBudWxsO1xuICAgICAgICBhbHBoYSA9IHBhcnNlX2Nzc19mbG9hdChwYXJhbXMucG9wKCkpO1xuICAgICAgICAvLyBGYWxsIHRocm91Z2guXG4gICAgICBjYXNlICdoc2wnOlxuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCAhPT0gMykgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBoID0gKCgocGFyc2VGbG9hdChwYXJhbXNbMF0pICUgMzYwKSArIDM2MCkgJSAzNjApIC8gMzYwOyAgLy8gMCAuLiAxXG4gICAgICAgIC8vIE5PVEUoZGVhbm0pOiBBY2NvcmRpbmcgdG8gdGhlIENTUyBzcGVjIHMvbCBzaG91bGQgb25seSBiZVxuICAgICAgICAvLyBwZXJjZW50YWdlcywgYnV0IHdlIGRvbid0IGJvdGhlciBhbmQgbGV0IGZsb2F0IG9yIHBlcmNlbnRhZ2UuXG4gICAgICAgIHZhciBzID0gcGFyc2VfY3NzX2Zsb2F0KHBhcmFtc1sxXSk7XG4gICAgICAgIHZhciBsID0gcGFyc2VfY3NzX2Zsb2F0KHBhcmFtc1syXSk7XG4gICAgICAgIHZhciBtMiA9IGwgPD0gMC41ID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICB2YXIgbTEgPSBsICogMiAtIG0yO1xuICAgICAgICByZXR1cm4gW2NsYW1wX2Nzc19ieXRlKGNzc19odWVfdG9fcmdiKG0xLCBtMiwgaCsxLzMpICogMjU1KSxcbiAgICAgICAgICAgICAgICBjbGFtcF9jc3NfYnl0ZShjc3NfaHVlX3RvX3JnYihtMSwgbTIsIGgpICogMjU1KSxcbiAgICAgICAgICAgICAgICBjbGFtcF9jc3NfYnl0ZShjc3NfaHVlX3RvX3JnYihtMSwgbTIsIGgtMS8zKSAqIDI1NSksXG4gICAgICAgICAgICAgICAgYWxwaGFdO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnRyeSB7IGV4cG9ydHMucGFyc2VDU1NDb2xvciA9IHBhcnNlQ1NTQ29sb3IgfSBjYXRjaChlKSB7IH1cbiIsInZhciBmb250V2VpZ2h0cyA9IHtcbiAgdGhpbjogMTAwLFxuICBoYWlybGluZTogMTAwLFxuICAndWx0cmEtbGlnaHQnOiAxMDAsXG4gICdleHRyYS1saWdodCc6IDEwMCxcbiAgbGlnaHQ6IDIwMCxcbiAgYm9vazogMzAwLFxuICByZWd1bGFyOiA0MDAsXG4gIG5vcm1hbDogNDAwLFxuICBwbGFpbjogNDAwLFxuICByb21hbjogNDAwLFxuICBzdGFuZGFyZDogNDAwLFxuICBtZWRpdW06IDUwMCxcbiAgJ3NlbWktYm9sZCc6IDYwMCxcbiAgJ2RlbWktYm9sZCc6IDYwMCxcbiAgYm9sZDogNzAwLFxuICBoZWF2eTogODAwLFxuICBibGFjazogODAwLFxuICAnZXh0cmEtYm9sZCc6IDgwMCxcbiAgJ3VsdHJhLWJsYWNrJzogOTAwLFxuICAnZXh0cmEtYmxhY2snOiA5MDAsXG4gICd1bHRyYS1ib2xkJzogOTAwLFxuICAnaGVhdnktYmxhY2snOiA5MDAsXG4gIGZhdDogOTAwLFxuICBwb3N0ZXI6IDkwMFxufTtcbnZhciBzcCA9ICcgJztcblxudmFyIGZvbnRDYWNoZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZvbnQsIHNpemUpIHtcbiAgdmFyIGNzc0RhdGEgPSBmb250Q2FjaGVbZm9udF07XG4gIGlmICghY3NzRGF0YSkge1xuICAgIHZhciBwYXJ0cyA9IGZvbnQuc3BsaXQoJyAnKTtcbiAgICB2YXIgbWF5YmVXZWlnaHQgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciB3ZWlnaHQgPSAnbm9ybWFsJztcbiAgICB2YXIgc3R5bGUgPSAnbm9ybWFsJztcbiAgICBpZiAobWF5YmVXZWlnaHQgPT0gJ25vcm1hbCcgfHwgbWF5YmVXZWlnaHQgPT0gJ2l0YWxpYycgfHwgbWF5YmVXZWlnaHQgPT0gJ29ibGlxdWUnKSB7XG4gICAgICBzdHlsZSA9IG1heWJlV2VpZ2h0O1xuICAgICAgcGFydHMucG9wKCk7XG4gICAgICBtYXliZVdlaWdodCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGZvciAodmFyIHcgaW4gZm9udFdlaWdodHMpIHtcbiAgICAgIGlmIChtYXliZVdlaWdodCA9PSB3IHx8IG1heWJlV2VpZ2h0ID09IHcucmVwbGFjZSgnLScsICcnKSB8fCBtYXliZVdlaWdodCA9PSB3LnJlcGxhY2UoJy0nLCAnICcpKSB7XG4gICAgICAgIHdlaWdodCA9IGZvbnRXZWlnaHRzW3ddO1xuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWF5YmVXZWlnaHQgPT0gJ251bWJlcicpIHtcbiAgICAgIHdlaWdodCA9IG1heWJlV2VpZ2h0O1xuICAgIH1cbiAgICB2YXIgZm9udEZhbWlseSA9IHBhcnRzLmpvaW4oJyAnKVxuICAgICAgICAucmVwbGFjZSgnS2xva2FudGVjaCBOb3RvIFNhbnMnLCAnTm90byBTYW5zJyk7XG4gICAgaWYgKGZvbnRGYW1pbHkuaW5kZXhPZignICcpICE9PSAtMSkge1xuICAgICAgZm9udEZhbWlseSA9ICdcIicgKyBmb250RmFtaWx5ICsgJ1wiJztcbiAgICB9XG4gICAgLy8gQ1NTIGZvbnQgcHJvcGVydHk6IGZvbnQtc3R5bGUgZm9udC13ZWlnaHQgZm9udC1zaXplIGZvbnQtZmFtaWx5XG4gICAgY3NzRGF0YSA9IGZvbnRDYWNoZVtmb250XSA9IFtzdHlsZSwgd2VpZ2h0LCBmb250RmFtaWx5XTtcbiAgfVxuICByZXR1cm4gY3NzRGF0YVswXSArIHNwICsgY3NzRGF0YVsxXSArIHNwICsgc2l6ZSArICdweCcgKyBzcCArIGNzc0RhdGFbMl07XG59XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTAuMFxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZmFtaWxpZXM7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaWNvbjogJ2ljb25zL2dvb2dsZS5zdmcnLFxuICAgIG5hbWU6ICdnb29nbGUnLFxuICAgIHRpdGxlOiAnR29vZ2xlIEZvbnRzJyxcbiAgICBsaW5rOiAnZ29vZ2xlLmNvbS9mb250cycsXG4gICAgZ2V0TmFtZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbWlsaWVzO1xuICAgIH0sXG4gICAgZ2V0TGluazogZnVuY3Rpb24obmFtZSkge1xuICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL1wiICsgKG5hbWUucmVwbGFjZSgvKCApL2csICcrJykpO1xuICAgIH0sXG4gICAgbm9ybWFsaXplTmFtZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9O1xuXG4gIGZhbWlsaWVzID0gW1wiQUJlZVplZVwiLCBcIkFiZWxcIiwgXCJBYnJpbCBGYXRmYWNlXCIsIFwiQWNsb25pY2FcIiwgXCJBY21lXCIsIFwiQWN0b3JcIiwgXCJBZGFtaW5hXCIsIFwiQWR2ZW50IFByb1wiLCBcIkFndWFmaW5hIFNjcmlwdFwiLCBcIkFrcm9uaW1cIiwgXCJBbGFkaW5cIiwgXCJBbGRyaWNoXCIsIFwiQWxlZlwiLCBcIkFsZWdyZXlhXCIsIFwiQWxlZ3JleWEgU0NcIiwgXCJBbGVncmV5YSBTYW5zXCIsIFwiQWxlZ3JleWEgU2FucyBTQ1wiLCBcIkFsZXggQnJ1c2hcIiwgXCJBbGZhIFNsYWIgT25lXCIsIFwiQWxpY2VcIiwgXCJBbGlrZVwiLCBcIkFsaWtlIEFuZ3VsYXJcIiwgXCJBbGxhblwiLCBcIkFsbGVydGFcIiwgXCJBbGxlcnRhIFN0ZW5jaWxcIiwgXCJBbGx1cmFcIiwgXCJBbG1lbmRyYVwiLCBcIkFsbWVuZHJhIERpc3BsYXlcIiwgXCJBbG1lbmRyYSBTQ1wiLCBcIkFtYXJhbnRlXCIsIFwiQW1hcmFudGhcIiwgXCJBbWF0aWMgU0NcIiwgXCJBbWV0aHlzdGFcIiwgXCJBbWlyaVwiLCBcIkFtaXRhXCIsIFwiQW5haGVpbVwiLCBcIkFuZGFkYVwiLCBcIkFuZGlrYVwiLCBcIkFuZ2tvclwiLCBcIkFubmllIFVzZSBZb3VyIFRlbGVzY29wZVwiLCBcIkFub255bW91cyBQcm9cIiwgXCJBbnRpY1wiLCBcIkFudGljIERpZG9uZVwiLCBcIkFudGljIFNsYWJcIiwgXCJBbnRvblwiLCBcIkFyYXBleVwiLCBcIkFyYnV0dXNcIiwgXCJBcmJ1dHVzIFNsYWJcIiwgXCJBcmNoaXRlY3RzIERhdWdodGVyXCIsIFwiQXJjaGl2byBCbGFja1wiLCBcIkFyY2hpdm8gTmFycm93XCIsIFwiQXJpbW9cIiwgXCJBcml6b25pYVwiLCBcIkFybWF0YVwiLCBcIkFydGlmaWthXCIsIFwiQXJ2b1wiLCBcIkFyeWFcIiwgXCJBc2FwXCIsIFwiQXNhclwiLCBcIkFzc2V0XCIsIFwiQXN0bG9jaFwiLCBcIkFzdWxcIiwgXCJBdG9taWMgQWdlXCIsIFwiQXVicmV5XCIsIFwiQXVkaW93aWRlXCIsIFwiQXV0b3VyIE9uZVwiLCBcIkF2ZXJhZ2VcIiwgXCJBdmVyYWdlIFNhbnNcIiwgXCJBdmVyaWEgR3J1ZXNhIExpYnJlXCIsIFwiQXZlcmlhIExpYnJlXCIsIFwiQXZlcmlhIFNhbnMgTGlicmVcIiwgXCJBdmVyaWEgU2VyaWYgTGlicmVcIiwgXCJCYWQgU2NyaXB0XCIsIFwiQmFsdGhhemFyXCIsIFwiQmFuZ2Vyc1wiLCBcIkJhc2ljXCIsIFwiQmF0dGFtYmFuZ1wiLCBcIkJhdW1hbnNcIiwgXCJCYXlvblwiLCBcIkJlbGdyYW5vXCIsIFwiQmVsbGV6YVwiLCBcIkJlbmNoTmluZVwiLCBcIkJlbnRoYW1cIiwgXCJCZXJrc2hpcmUgU3dhc2hcIiwgXCJCZXZhblwiLCBcIkJpZ2Vsb3cgUnVsZXNcIiwgXCJCaWdzaG90IE9uZVwiLCBcIkJpbGJvXCIsIFwiQmlsYm8gU3dhc2ggQ2Fwc1wiLCBcIkJpcnlhbmlcIiwgXCJCaXR0ZXJcIiwgXCJCbGFjayBPcHMgT25lXCIsIFwiQm9rb3JcIiwgXCJCb25ib25cIiwgXCJCb29nYWxvb1wiLCBcIkJvd2xieSBPbmVcIiwgXCJCb3dsYnkgT25lIFNDXCIsIFwiQnJhd2xlclwiLCBcIkJyZWUgU2VyaWZcIiwgXCJCdWJibGVndW0gU2Fuc1wiLCBcIkJ1YmJsZXIgT25lXCIsIFwiQnVkYVwiLCBcIkJ1ZW5hcmRcIiwgXCJCdXRjaGVybWFuXCIsIFwiQnV0dGVyZmx5IEtpZHNcIiwgXCJDYWJpblwiLCBcIkNhYmluIENvbmRlbnNlZFwiLCBcIkNhYmluIFNrZXRjaFwiLCBcIkNhZXNhciBEcmVzc2luZ1wiLCBcIkNhZ2xpb3N0cm9cIiwgXCJDYWxsaWdyYWZmaXR0aVwiLCBcIkNhbWJheVwiLCBcIkNhbWJvXCIsIFwiQ2FuZGFsXCIsIFwiQ2FudGFyZWxsXCIsIFwiQ2FudGF0YSBPbmVcIiwgXCJDYW50b3JhIE9uZVwiLCBcIkNhcHJpb2xhXCIsIFwiQ2FyZG9cIiwgXCJDYXJtZVwiLCBcIkNhcnJvaXMgR290aGljXCIsIFwiQ2Fycm9pcyBHb3RoaWMgU0NcIiwgXCJDYXJ0ZXIgT25lXCIsIFwiQ2F0YW1hcmFuXCIsIFwiQ2F1ZGV4XCIsIFwiQ2F2ZWF0XCIsIFwiQ2F2ZWF0IEJydXNoXCIsIFwiQ2VkYXJ2aWxsZSBDdXJzaXZlXCIsIFwiQ2V2aWNoZSBPbmVcIiwgXCJDaGFuZ2EgT25lXCIsIFwiQ2hhbmdvXCIsIFwiQ2hhdSBQaGlsb21lbmUgT25lXCIsIFwiQ2hlbGEgT25lXCIsIFwiQ2hlbHNlYSBNYXJrZXRcIiwgXCJDaGVubGFcIiwgXCJDaGVycnkgQ3JlYW0gU29kYVwiLCBcIkNoZXJyeSBTd2FzaFwiLCBcIkNoZXd5XCIsIFwiQ2hpY2xlXCIsIFwiQ2hpdm9cIiwgXCJDaG9uYnVyaVwiLCBcIkNpbnplbFwiLCBcIkNpbnplbCBEZWNvcmF0aXZlXCIsIFwiQ2xpY2tlciBTY3JpcHRcIiwgXCJDb2RhXCIsIFwiQ29kYSBDYXB0aW9uXCIsIFwiQ29keXN0YXJcIiwgXCJDb21ib1wiLCBcIkNvbWZvcnRhYVwiLCBcIkNvbWluZyBTb29uXCIsIFwiQ29uY2VydCBPbmVcIiwgXCJDb25kaW1lbnRcIiwgXCJDb250ZW50XCIsIFwiQ29udHJhaWwgT25lXCIsIFwiQ29udmVyZ2VuY2VcIiwgXCJDb29raWVcIiwgXCJDb3BzZVwiLCBcIkNvcmJlblwiLCBcIkNvdXJnZXR0ZVwiLCBcIkNvdXNpbmVcIiwgXCJDb3VzdGFyZFwiLCBcIkNvdmVyZWQgQnkgWW91ciBHcmFjZVwiLCBcIkNyYWZ0eSBHaXJsc1wiLCBcIkNyZWVwc3RlclwiLCBcIkNyZXRlIFJvdW5kXCIsIFwiQ3JpbXNvbiBUZXh0XCIsIFwiQ3JvaXNzYW50IE9uZVwiLCBcIkNydXNoZWRcIiwgXCJDdXBydW1cIiwgXCJDdXRpdmVcIiwgXCJDdXRpdmUgTW9ub1wiLCBcIkRhbWlvblwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiRGFuZ3Jla1wiLCBcIkRhd25pbmcgb2YgYSBOZXcgRGF5XCIsIFwiRGF5cyBPbmVcIiwgXCJEZWtrb1wiLCBcIkRlbGl1c1wiLCBcIkRlbGl1cyBTd2FzaCBDYXBzXCIsIFwiRGVsaXVzIFVuaWNhc2VcIiwgXCJEZWxsYSBSZXNwaXJhXCIsIFwiRGVuayBPbmVcIiwgXCJEZXZvbnNoaXJlXCIsIFwiRGh1cmphdGlcIiwgXCJEaWRhY3QgR290aGljXCIsIFwiRGlwbG9tYXRhXCIsIFwiRGlwbG9tYXRhIFNDXCIsIFwiRG9taW5lXCIsIFwiRG9uZWdhbCBPbmVcIiwgXCJEb3BwaW8gT25lXCIsIFwiRG9yc2FcIiwgXCJEb3Npc1wiLCBcIkRyIFN1Z2l5YW1hXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkRyb2lkIFNhbnMgTW9ub1wiLCBcIkRyb2lkIFNlcmlmXCIsIFwiRHVydSBTYW5zXCIsIFwiRHluYWxpZ2h0XCIsIFwiRUIgR2FyYW1vbmRcIiwgXCJFYWdsZSBMYWtlXCIsIFwiRWF0ZXJcIiwgXCJFY29ub21pY2FcIiwgXCJFY3phclwiLCBcIkVrIE11a3RhXCIsIFwiRWxlY3Ryb2xpemVcIiwgXCJFbHNpZVwiLCBcIkVsc2llIFN3YXNoIENhcHNcIiwgXCJFbWJsZW1hIE9uZVwiLCBcIkVtaWx5cyBDYW5keVwiLCBcIkVuZ2FnZW1lbnRcIiwgXCJFbmdsZWJlcnRcIiwgXCJFbnJpcXVldGFcIiwgXCJFcmljYSBPbmVcIiwgXCJFc3RlYmFuXCIsIFwiRXVwaG9yaWEgU2NyaXB0XCIsIFwiRXdlcnRcIiwgXCJFeG9cIiwgXCJFeG8gMlwiLCBcIkV4cGxldHVzIFNhbnNcIiwgXCJGYW53b29kIFRleHRcIiwgXCJGYXNjaW5hdGVcIiwgXCJGYXNjaW5hdGUgSW5saW5lXCIsIFwiRmFzdGVyIE9uZVwiLCBcIkZhc3RoYW5kXCIsIFwiRmF1bmEgT25lXCIsIFwiRmVkZXJhbnRcIiwgXCJGZWRlcm9cIiwgXCJGZWxpcGFcIiwgXCJGZW5peFwiLCBcIkZpbmdlciBQYWludFwiLCBcIkZpcmEgTW9ub1wiLCBcIkZpcmEgU2Fuc1wiLCBcIkZqYWxsYSBPbmVcIiwgXCJGam9yZCBPbmVcIiwgXCJGbGFtZW5jb1wiLCBcIkZsYXZvcnNcIiwgXCJGb25kYW1lbnRvXCIsIFwiRm9udGRpbmVyIFN3YW5reVwiLCBcIkZvcnVtXCIsIFwiRnJhbmNvaXMgT25lXCIsIFwiRnJlY2tsZSBGYWNlXCIsIFwiRnJlZGVyaWNrYSB0aGUgR3JlYXRcIiwgXCJGcmVkb2thIE9uZVwiLCBcIkZyZWVoYW5kXCIsIFwiRnJlc2NhXCIsIFwiRnJpam9sZVwiLCBcIkZydWt0dXJcIiwgXCJGdWdheiBPbmVcIiwgXCJHRlMgRGlkb3RcIiwgXCJHRlMgTmVvaGVsbGVuaWNcIiwgXCJHYWJyaWVsYVwiLCBcIkdhZmF0YVwiLCBcIkdhbGRlYW5vXCIsIFwiR2FsaW5kb1wiLCBcIkdlbnRpdW0gQmFzaWNcIiwgXCJHZW50aXVtIEJvb2sgQmFzaWNcIiwgXCJHZW9cIiwgXCJHZW9zdGFyXCIsIFwiR2Vvc3RhciBGaWxsXCIsIFwiR2VybWFuaWEgT25lXCIsIFwiR2lkdWd1XCIsIFwiR2lsZGEgRGlzcGxheVwiLCBcIkdpdmUgWW91IEdsb3J5XCIsIFwiR2xhc3MgQW50aXF1YVwiLCBcIkdsZWdvb1wiLCBcIkdsb3JpYSBIYWxsZWx1amFoXCIsIFwiR29ibGluIE9uZVwiLCBcIkdvY2hpIEhhbmRcIiwgXCJHb3JkaXRhc1wiLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBcIkdyYWR1YXRlXCIsIFwiR3JhbmQgSG90ZWxcIiwgXCJHcmF2aXRhcyBPbmVcIiwgXCJHcmVhdCBWaWJlc1wiLCBcIkdyaWZmeVwiLCBcIkdydXBwb1wiLCBcIkd1ZGVhXCIsIFwiR3VyYWphZGFcIiwgXCJIYWJpYmlcIiwgXCJIYWxhbnRcIiwgXCJIYW1tZXJzbWl0aCBPbmVcIiwgXCJIYW5hbGVpXCIsIFwiSGFuYWxlaSBGaWxsXCIsIFwiSGFuZGxlZVwiLCBcIkhhbnVtYW5cIiwgXCJIYXBweSBNb25rZXlcIiwgXCJIZWFkbGFuZCBPbmVcIiwgXCJIZW5ueSBQZW5ueVwiLCBcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXCIsIFwiSGluZFwiLCBcIkhpbmQgU2lsaWd1cmlcIiwgXCJIaW5kIFZhZG9kYXJhXCIsIFwiSG9sdHdvb2QgT25lIFNDXCIsIFwiSG9tZW1hZGUgQXBwbGVcIiwgXCJIb21lbmFqZVwiLCBcIklNIEZlbGwgRFcgUGljYVwiLCBcIklNIEZlbGwgRFcgUGljYSBTQ1wiLCBcIklNIEZlbGwgRG91YmxlIFBpY2FcIiwgXCJJTSBGZWxsIERvdWJsZSBQaWNhIFNDXCIsIFwiSU0gRmVsbCBFbmdsaXNoXCIsIFwiSU0gRmVsbCBFbmdsaXNoIFNDXCIsIFwiSU0gRmVsbCBGcmVuY2ggQ2Fub25cIiwgXCJJTSBGZWxsIEZyZW5jaCBDYW5vbiBTQ1wiLCBcIklNIEZlbGwgR3JlYXQgUHJpbWVyXCIsIFwiSU0gRmVsbCBHcmVhdCBQcmltZXIgU0NcIiwgXCJJY2ViZXJnXCIsIFwiSWNlbGFuZFwiLCBcIkltcHJpbWFcIiwgXCJJbmNvbnNvbGF0YVwiLCBcIkluZGVyXCIsIFwiSW5kaWUgRmxvd2VyXCIsIFwiSW5pa2FcIiwgXCJJbmtudXQgQW50aXF1YVwiLCBcIklyaXNoIEdyb3ZlclwiLCBcIklzdG9rIFdlYlwiLCBcIkl0YWxpYW5hXCIsIFwiSXRhbGlhbm5vXCIsIFwiSXRpbVwiLCBcIkphY3F1ZXMgRnJhbmNvaXNcIiwgXCJKYWNxdWVzIEZyYW5jb2lzIFNoYWRvd1wiLCBcIkphbGRpXCIsIFwiSmltIE5pZ2h0c2hhZGVcIiwgXCJKb2NrZXkgT25lXCIsIFwiSm9sbHkgTG9kZ2VyXCIsIFwiSm9zZWZpbiBTYW5zXCIsIFwiSm9zZWZpbiBTbGFiXCIsIFwiSm90aSBPbmVcIiwgXCJKdWRzb25cIiwgXCJKdWxlZVwiLCBcIkp1bGl1cyBTYW5zIE9uZVwiLCBcIkp1bmdlXCIsIFwiSnVyYVwiLCBcIkp1c3QgQW5vdGhlciBIYW5kXCIsIFwiSnVzdCBNZSBBZ2FpbiBEb3duIEhlcmVcIiwgXCJLYWR3YVwiLCBcIkthbGFtXCIsIFwiS2FtZXJvblwiLCBcIkthbnR1bXJ1eVwiLCBcIkthcmxhXCIsIFwiS2FybWFcIiwgXCJLYXVzaGFuIFNjcmlwdFwiLCBcIkthdm9vblwiLCBcIktkYW0gVGhtb3JcIiwgXCJLZWFuaWEgT25lXCIsIFwiS2VsbHkgU2xhYlwiLCBcIktlbmlhXCIsIFwiS2hhbmRcIiwgXCJLaG1lclwiLCBcIktodWxhXCIsIFwiS2l0ZSBPbmVcIiwgXCJLbmV3YXZlXCIsIFwiS290dGEgT25lXCIsIFwiS291bGVuXCIsIFwiS3Jhbmt5XCIsIFwiS3Jlb25cIiwgXCJLcmlzdGlcIiwgXCJLcm9uYSBPbmVcIiwgXCJLdXJhbGVcIiwgXCJMYSBCZWxsZSBBdXJvcmVcIiwgXCJMYWlsYVwiLCBcIkxha2tpIFJlZGR5XCIsIFwiTGFuY2Vsb3RcIiwgXCJMYXRlZWZcIiwgXCJMYXRvXCIsIFwiTGVhZ3VlIFNjcmlwdFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBcIkxlZGdlclwiLCBcIkxla3RvblwiLCBcIkxlbW9uXCIsIFwiTGlicmUgQmFza2VydmlsbGVcIiwgXCJMaWZlIFNhdmVyc1wiLCBcIkxpbGl0YSBPbmVcIiwgXCJMaWx5IFNjcmlwdCBPbmVcIiwgXCJMaW1lbGlnaHRcIiwgXCJMaW5kZW4gSGlsbFwiLCBcIkxvYnN0ZXJcIiwgXCJMb2JzdGVyIFR3b1wiLCBcIkxvbmRyaW5hIE91dGxpbmVcIiwgXCJMb25kcmluYSBTaGFkb3dcIiwgXCJMb25kcmluYSBTa2V0Y2hcIiwgXCJMb25kcmluYSBTb2xpZFwiLCBcIkxvcmFcIiwgXCJMb3ZlIFlhIExpa2UgQSBTaXN0ZXJcIiwgXCJMb3ZlZCBieSB0aGUgS2luZ1wiLCBcIkxvdmVycyBRdWFycmVsXCIsIFwiTHVja2llc3QgR3V5XCIsIFwiTHVzaXRhbmFcIiwgXCJMdXN0cmlhXCIsIFwiTWFjb25kb1wiLCBcIk1hY29uZG8gU3dhc2ggQ2Fwc1wiLCBcIk1hZ3JhXCIsIFwiTWFpZGVuIE9yYW5nZVwiLCBcIk1ha29cIiwgXCJNYWxsYW5uYVwiLCBcIk1hbmRhbGlcIiwgXCJNYXJjZWxsdXNcIiwgXCJNYXJjZWxsdXMgU0NcIiwgXCJNYXJjayBTY3JpcHRcIiwgXCJNYXJnYXJpbmVcIiwgXCJNYXJrbyBPbmVcIiwgXCJNYXJtZWxhZFwiLCBcIk1hcnRlbFwiLCBcIk1hcnRlbCBTYW5zXCIsIFwiTWFydmVsXCIsIFwiTWF0ZVwiLCBcIk1hdGUgU0NcIiwgXCJNYXZlbiBQcm9cIiwgXCJNY0xhcmVuXCIsIFwiTWVkZG9uXCIsIFwiTWVkaWV2YWxTaGFycFwiLCBcIk1lZHVsYSBPbmVcIiwgXCJNZWdyaW1cIiwgXCJNZWllIFNjcmlwdFwiLCBcIk1lcmllbmRhXCIsIFwiTWVyaWVuZGEgT25lXCIsIFwiTWVycml3ZWF0aGVyXCIsIFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgXCJNZXRhbFwiLCBcIk1ldGFsIE1hbmlhXCIsIFwiTWV0YW1vcnBob3VzXCIsIFwiTWV0cm9waG9iaWNcIiwgXCJNaWNocm9tYVwiLCBcIk1pbG9uZ2FcIiwgXCJNaWx0b25pYW5cIiwgXCJNaWx0b25pYW4gVGF0dG9vXCIsIFwiTWluaXZlclwiLCBcIk1pc3MgRmFqYXJkb3NlXCIsIFwiTW9kYWtcIiwgXCJNb2Rlcm4gQW50aXF1YVwiLCBcIk1vbGVuZ29cIiwgXCJNb2xsZVwiLCBcIk1vbmRhXCIsIFwiTW9ub2ZldHRcIiwgXCJNb25vdG9uXCIsIFwiTW9uc2lldXIgTGEgRG91bGFpc2VcIiwgXCJNb250YWdhXCIsIFwiTW9udGV6XCIsIFwiTW9udHNlcnJhdFwiLCBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBcIk1vbnRzZXJyYXQgU3VicmF5YWRhXCIsIFwiTW91bFwiLCBcIk1vdWxwYWxpXCIsIFwiTW91bnRhaW5zIG9mIENocmlzdG1hc1wiLCBcIk1vdXNlIE1lbW9pcnNcIiwgXCJNciBCZWRmb3J0XCIsIFwiTXIgRGFmb2VcIiwgXCJNciBEZSBIYXZpbGFuZFwiLCBcIk1ycyBTYWludCBEZWxhZmllbGRcIiwgXCJNcnMgU2hlcHBhcmRzXCIsIFwiTXVsaVwiLCBcIk15c3RlcnkgUXVlc3RcIiwgXCJOVFJcIiwgXCJOZXVjaGFcIiwgXCJOZXV0b25cIiwgXCJOZXcgUm9ja2VyXCIsIFwiTmV3cyBDeWNsZVwiLCBcIk5pY29ubmVcIiwgXCJOaXhpZSBPbmVcIiwgXCJOb2JpbGVcIiwgXCJOb2tvcmFcIiwgXCJOb3JpY2FuXCIsIFwiTm9zaWZlclwiLCBcIk5vdGhpbmcgWW91IENvdWxkIERvXCIsIFwiTm90aWNpYSBUZXh0XCIsIFwiTm90byBTYW5zXCIsIFwiTm90byBTZXJpZlwiLCBcIk5vdmEgQ3V0XCIsIFwiTm92YSBGbGF0XCIsIFwiTm92YSBNb25vXCIsIFwiTm92YSBPdmFsXCIsIFwiTm92YSBSb3VuZFwiLCBcIk5vdmEgU2NyaXB0XCIsIFwiTm92YSBTbGltXCIsIFwiTm92YSBTcXVhcmVcIiwgXCJOdW1hbnNcIiwgXCJOdW5pdG9cIiwgXCJPZG9yIE1lYW4gQ2hleVwiLCBcIk9mZnNpZGVcIiwgXCJPbGQgU3RhbmRhcmQgVFRcIiwgXCJPbGRlbmJ1cmdcIiwgXCJPbGVvIFNjcmlwdFwiLCBcIk9sZW8gU2NyaXB0IFN3YXNoIENhcHNcIiwgXCJPcGVuIFNhbnNcIiwgXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIFwiT3JhbmllbmJhdW1cIiwgXCJPcmJpdHJvblwiLCBcIk9yZWdhbm9cIiwgXCJPcmllbnRhXCIsIFwiT3JpZ2luYWwgU3VyZmVyXCIsIFwiT3N3YWxkXCIsIFwiT3ZlciB0aGUgUmFpbmJvd1wiLCBcIk92ZXJsb2NrXCIsIFwiT3ZlcmxvY2sgU0NcIiwgXCJPdm9cIiwgXCJPeHlnZW5cIiwgXCJPeHlnZW4gTW9ub1wiLCBcIlBUIE1vbm9cIiwgXCJQVCBTYW5zXCIsIFwiUFQgU2FucyBDYXB0aW9uXCIsIFwiUFQgU2FucyBOYXJyb3dcIiwgXCJQVCBTZXJpZlwiLCBcIlBUIFNlcmlmIENhcHRpb25cIiwgXCJQYWNpZmljb1wiLCBcIlBhbGFucXVpblwiLCBcIlBhbGFucXVpbiBEYXJrXCIsIFwiUGFwcmlrYVwiLCBcIlBhcmlzaWVubmVcIiwgXCJQYXNzZXJvIE9uZVwiLCBcIlBhc3Npb24gT25lXCIsIFwiUGF0aHdheSBHb3RoaWMgT25lXCIsIFwiUGF0cmljayBIYW5kXCIsIFwiUGF0cmljayBIYW5kIFNDXCIsIFwiUGF0dWEgT25lXCIsIFwiUGF5dG9uZSBPbmVcIiwgXCJQZWRkYW5hXCIsIFwiUGVyYWx0YVwiLCBcIlBlcm1hbmVudCBNYXJrZXJcIiwgXCJQZXRpdCBGb3JtYWwgU2NyaXB0XCIsIFwiUGV0cm9uYVwiLCBcIlBoaWxvc29waGVyXCIsIFwiUGllZHJhXCIsIFwiUGlueW9uIFNjcmlwdFwiLCBcIlBpcmF0YSBPbmVcIiwgXCJQbGFzdGVyXCIsIFwiUGxheVwiLCBcIlBsYXliYWxsXCIsIFwiUGxheWZhaXIgRGlzcGxheVwiLCBcIlBsYXlmYWlyIERpc3BsYXkgU0NcIiwgXCJQb2Rrb3ZhXCIsIFwiUG9pcmV0IE9uZVwiLCBcIlBvbGxlciBPbmVcIiwgXCJQb2x5XCIsIFwiUG9tcGllcmVcIiwgXCJQb250YW5vIFNhbnNcIiwgXCJQb3BwaW5zXCIsIFwiUG9ydCBMbGlnYXQgU2Fuc1wiLCBcIlBvcnQgTGxpZ2F0IFNsYWJcIiwgXCJQcmFnYXRpIE5hcnJvd1wiLCBcIlByYXRhXCIsIFwiUHJlYWh2aWhlYXJcIiwgXCJQcmVzcyBTdGFydCAyUFwiLCBcIlByaW5jZXNzIFNvZmlhXCIsIFwiUHJvY2lvbm9cIiwgXCJQcm9zdG8gT25lXCIsIFwiUHVyaXRhblwiLCBcIlB1cnBsZSBQdXJzZVwiLCBcIlF1YW5kb1wiLCBcIlF1YW50aWNvXCIsIFwiUXVhdHRyb2NlbnRvXCIsIFwiUXVhdHRyb2NlbnRvIFNhbnNcIiwgXCJRdWVzdHJpYWxcIiwgXCJRdWlja3NhbmRcIiwgXCJRdWludGVzc2VudGlhbFwiLCBcIlF3aWdsZXlcIiwgXCJSYWNpbmcgU2FucyBPbmVcIiwgXCJSYWRsZXlcIiwgXCJSYWpkaGFuaVwiLCBcIlJhbGV3YXlcIiwgXCJSYWxld2F5IERvdHNcIiwgXCJSYW1hYmhhZHJhXCIsIFwiUmFtYXJhamFcIiwgXCJSYW1ibGFcIiwgXCJSYW1tZXR0byBPbmVcIiwgXCJSYW5jaGVyc1wiLCBcIlJhbmNob1wiLCBcIlJhbmdhXCIsIFwiUmF0aW9uYWxlXCIsIFwiUmF2aSBQcmFrYXNoXCIsIFwiUmVkcmVzc2VkXCIsIFwiUmVlbmllIEJlYW5pZVwiLCBcIlJldmFsaWFcIiwgXCJSaG9kaXVtIExpYnJlXCIsIFwiUmliZXllXCIsIFwiUmliZXllIE1hcnJvd1wiLCBcIlJpZ2h0ZW91c1wiLCBcIlJpc3F1ZVwiLCBcIlJvYm90b1wiLCBcIlJvYm90byBDb25kZW5zZWRcIiwgXCJSb2JvdG8gTW9ub1wiLCBcIlJvYm90byBTbGFiXCIsIFwiUm9jaGVzdGVyXCIsIFwiUm9jayBTYWx0XCIsIFwiUm9ra2l0dFwiLCBcIlJvbWFuZXNjb1wiLCBcIlJvcGEgU2Fuc1wiLCBcIlJvc2FyaW9cIiwgXCJSb3Nhcml2b1wiLCBcIlJvdWdlIFNjcmlwdFwiLCBcIlJvemhhIE9uZVwiLCBcIlJ1YmlrXCIsIFwiUnViaWsgTW9ubyBPbmVcIiwgXCJSdWJpayBPbmVcIiwgXCJSdWRhXCIsIFwiUnVmaW5hXCIsIFwiUnVnZSBCb29naWVcIiwgXCJSdWx1a29cIiwgXCJSdW0gUmFpc2luXCIsIFwiUnVzbGFuIERpc3BsYXlcIiwgXCJSdXNzbyBPbmVcIiwgXCJSdXRoaWVcIiwgXCJSeWVcIiwgXCJTYWNyYW1lbnRvXCIsIFwiU2FoaXR5YVwiLCBcIlNhaWxcIiwgXCJTYWxzYVwiLCBcIlNhbmNoZXpcIiwgXCJTYW5jcmVla1wiLCBcIlNhbnNpdGEgT25lXCIsIFwiU2FyYWxhXCIsIFwiU2FyaW5hXCIsIFwiU2FycGFuY2hcIiwgXCJTYXRpc2Z5XCIsIFwiU2NhZGFcIiwgXCJTY2hlaGVyYXphZGVcIiwgXCJTY2hvb2xiZWxsXCIsIFwiU2Vhd2VlZCBTY3JpcHRcIiwgXCJTZXZpbGxhbmFcIiwgXCJTZXltb3VyIE9uZVwiLCBcIlNoYWRvd3MgSW50byBMaWdodFwiLCBcIlNoYWRvd3MgSW50byBMaWdodCBUd29cIiwgXCJTaGFudGlcIiwgXCJTaGFyZVwiLCBcIlNoYXJlIFRlY2hcIiwgXCJTaGFyZSBUZWNoIE1vbm9cIiwgXCJTaG9qdW1hcnVcIiwgXCJTaG9ydCBTdGFja1wiLCBcIlNpZW1yZWFwXCIsIFwiU2lnbWFyIE9uZVwiLCBcIlNpZ25pa2FcIiwgXCJTaWduaWthIE5lZ2F0aXZlXCIsIFwiU2ltb25ldHRhXCIsIFwiU2ludG9ueVwiLCBcIlNpcmluIFN0ZW5jaWxcIiwgXCJTaXggQ2Fwc1wiLCBcIlNrcmFuamlcIiwgXCJTbGFibyAxM3B4XCIsIFwiU2xhYm8gMjdweFwiLCBcIlNsYWNrZXlcIiwgXCJTbW9rdW1cIiwgXCJTbXl0aGVcIiwgXCJTbmlnbGV0XCIsIFwiU25pcHBldFwiLCBcIlNub3didXJzdCBPbmVcIiwgXCJTb2ZhZGkgT25lXCIsIFwiU29maWFcIiwgXCJTb25zaWUgT25lXCIsIFwiU29ydHMgTWlsbCBHb3VkeVwiLCBcIlNvdXJjZSBDb2RlIFByb1wiLCBcIlNvdXJjZSBTYW5zIFByb1wiLCBcIlNvdXJjZSBTZXJpZiBQcm9cIiwgXCJTcGVjaWFsIEVsaXRlXCIsIFwiU3BpY3kgUmljZVwiLCBcIlNwaW5uYWtlclwiLCBcIlNwaXJheFwiLCBcIlNxdWFkYSBPbmVcIiwgXCJTcmVlIEtydXNobmFkZXZhcmF5YVwiLCBcIlN0YWxlbWF0ZVwiLCBcIlN0YWxpbmlzdCBPbmVcIiwgXCJTdGFyZG9zIFN0ZW5jaWxcIiwgXCJTdGludCBVbHRyYSBDb25kZW5zZWRcIiwgXCJTdGludCBVbHRyYSBFeHBhbmRlZFwiLCBcIlN0b2tlXCIsIFwiU3RyYWl0XCIsIFwiU3VlIEVsbGVuIEZyYW5jaXNjb1wiLCBcIlN1bWFuYVwiLCBcIlN1bnNoaW5leVwiLCBcIlN1cGVybWVyY2FkbyBPbmVcIiwgXCJTdXJhXCIsIFwiU3VyYW5uYVwiLCBcIlN1cmF2YXJhbVwiLCBcIlN1d2FubmFwaHVtXCIsIFwiU3dhbmt5IGFuZCBNb28gTW9vXCIsIFwiU3luY29wYXRlXCIsIFwiVGFuZ2VyaW5lXCIsIFwiVGFwcm9tXCIsIFwiVGF1cmlcIiwgXCJUZWtvXCIsIFwiVGVsZXhcIiwgXCJUZW5hbGkgUmFtYWtyaXNobmFcIiwgXCJUZW5vciBTYW5zXCIsIFwiVGV4dCBNZSBPbmVcIiwgXCJUaGUgR2lybCBOZXh0IERvb3JcIiwgXCJUaWVubmVcIiwgXCJUaWxsYW5hXCIsIFwiVGltbWFuYVwiLCBcIlRpbm9zXCIsIFwiVGl0YW4gT25lXCIsIFwiVGl0aWxsaXVtIFdlYlwiLCBcIlRyYWRlIFdpbmRzXCIsIFwiVHJvY2NoaVwiLCBcIlRyb2NodXRcIiwgXCJUcnlra2VyXCIsIFwiVHVscGVuIE9uZVwiLCBcIlVidW50dVwiLCBcIlVidW50dSBDb25kZW5zZWRcIiwgXCJVYnVudHUgTW9ub1wiLCBcIlVsdHJhXCIsIFwiVW5jaWFsIEFudGlxdWFcIiwgXCJVbmRlcmRvZ1wiLCBcIlVuaWNhIE9uZVwiLCBcIlVuaWZyYWt0dXJDb29rXCIsIFwiVW5pZnJha3R1ck1hZ3VudGlhXCIsIFwiVW5rZW1wdFwiLCBcIlVubG9ja1wiLCBcIlVubmFcIiwgXCJWVDMyM1wiLCBcIlZhbXBpcm8gT25lXCIsIFwiVmFyZWxhXCIsIFwiVmFyZWxhIFJvdW5kXCIsIFwiVmFzdCBTaGFkb3dcIiwgXCJWZXNwZXIgTGlicmVcIiwgXCJWaWJ1clwiLCBcIlZpZGFsb2thXCIsIFwiVmlnYVwiLCBcIlZvY2VzXCIsIFwiVm9sa2hvdlwiLCBcIlZvbGxrb3JuXCIsIFwiVm9sdGFpcmVcIiwgXCJXYWl0aW5nIGZvciB0aGUgU3VucmlzZVwiLCBcIldhbGxwb2V0XCIsIFwiV2FsdGVyIFR1cm5jb2F0XCIsIFwiV2FybmVzXCIsIFwiV2VsbGZsZWV0XCIsIFwiV2VuZHkgT25lXCIsIFwiV2lyZSBPbmVcIiwgXCJXb3JrIFNhbnNcIiwgXCJZYW5vbmUgS2FmZmVlc2F0elwiLCBcIllhbnRyYW1hbmF2XCIsIFwiWWVsbG93dGFpbFwiLCBcIlllc2V2YSBPbmVcIiwgXCJZZXN0ZXJ5ZWFyXCIsIFwiWmV5YWRhXCJdO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiaW1wb3J0IHthcHBseSwgYXBwbHlCYWNrZ3JvdW5kLCBhcHBseVN0eWxlfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHN0eWxlZnVuY3Rpb24gZnJvbSAnLi9zdHlsZWZ1bmN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhcHBseTogYXBwbHksXHJcbiAgYXBwbHlCYWNrZ3JvdW5kOiBhcHBseUJhY2tncm91bmQsXHJcbiAgYXBwbHlTdHlsZTogYXBwbHlTdHlsZSxcclxuICBzdHlsZWZ1bmN0aW9uOiBzdHlsZWZ1bmN0aW9uXHJcbn07XHJcbiIsIi8qXHJcbm9sLW1hcGJveC1zdHlsZSAtIFVzZSBNYXBib3ggU3R5bGUgb2JqZWN0cyB3aXRoIE9wZW5MYXllcnNcclxuQ29weXJpZ2h0IDIwMTYtcHJlc2VudCBCb3VuZGxlc3MgU3BhdGlhbCwgSW5jLlxyXG5MaWNlbnNlOiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYm91bmRsZXNzZ2VvL29sLW1hcGJveC1nbC1zdHlsZS9tYXN0ZXIvTElDRU5TRVxyXG4qL1xyXG5cclxuaW1wb3J0IFN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlJztcclxuaW1wb3J0IEZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbCc7XHJcbmltcG9ydCBTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlJztcclxuaW1wb3J0IEljb24gZnJvbSAnb2wvc3R5bGUvSWNvbic7XHJcbmltcG9ydCBUZXh0IGZyb20gJ29sL3N0eWxlL1RleHQnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJ29sL3N0eWxlL0NpcmNsZSc7XHJcbmltcG9ydCBQb2ludCBmcm9tICdvbC9nZW9tL1BvaW50JztcclxuaW1wb3J0IGRlcmVmTGF5ZXJzIGZyb20gJ0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvZGVyZWYnO1xyXG5pbXBvcnQgZ2xmdW4gZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy9mdW5jdGlvbic7XHJcbmltcG9ydCBjcmVhdGVGaWx0ZXIgZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy9mZWF0dXJlX2ZpbHRlcic7XHJcbmltcG9ydCBtYjJjc3MgZnJvbSAnbWFwYm94LXRvLWNzcy1mb250JztcclxuaW1wb3J0IHtcclxuICBkZWcycmFkLFxyXG4gIGdldFpvb21Gb3JSZXNvbHV0aW9uXHJcbn0gZnJvbSAnLi91dGlsJztcclxuXHJcbmNvbnN0IGZ1bmN0aW9uVHlwZXMgPSB7XHJcbiAgJ2xpbmUtbWl0ZXItbGltaXQnOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnZmlsbC1vcGFjaXR5JzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2xpbmUtb3BhY2l0eSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdsaW5lLXdpZHRoJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ3RleHQtaGFsby13aWR0aCc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LW1heC13aWR0aCc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LW9mZnNldCc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LW9wYWNpdHknOiAnaW50ZXJwb2xhdGVkJyxcclxuICAndGV4dC1yb3RhdGUnOiAnaW50ZXJwb2xhdGVkJyxcclxuICAndGV4dC1zaXplJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tb3BhY2l0eSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdpY29uLXJvdGF0ZSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdpY29uLWFuY2hvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdpY29uLW9mZnNldCc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdpY29uLXRyYW5zbGF0ZSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdpY29uLXRyYW5zbGF0ZS1hbmNob3InOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnaWNvbi1zaXplJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tY29sb3InOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnY2lyY2xlLXJhZGl1cyc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdjaXJjbGUtb3BhY2l0eSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdjaXJjbGUtc3Ryb2tlLW9wYWNpdHknOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnY2lyY2xlLXN0cm9rZS13aWR0aCc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdjaXJjbGUtY29sb3InOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnY2lyY2xlLXN0cm9rZS1jb2xvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LWhhbG8tY29sb3InOiAnaW50ZXJwb2xhdGVkJyxcclxuICAndGV4dC1jb2xvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdsaW5lLWNvbG9yJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ZpbGwtb3V0bGluZS1jb2xvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdmaWxsLWNvbG9yJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24taW1hZ2UnOiAncGllY2V3aXNlLWNvbnN0YW50JyxcclxuICAnbGluZS1jYXAnOiAncGllY2V3aXNlLWNvbnN0YW50JyxcclxuICAnbGluZS1qb2luJzogJ3BpZWNld2lzZS1jb25zdGFudCcsXHJcbiAgJ2xpbmUtZGFzaGFycmF5JzogJ3BpZWNld2lzZS1jb25zdGFudCcsXHJcbiAgJ3N5bWJvbC1wbGFjZW1lbnQnOiAncGllY2V3aXNlLWNvbnN0YW50JyxcclxuICAndGV4dC1hbmNob3InOiAncGllY2V3aXNlLWNvbnN0YW50JyxcclxuICAndGV4dC1maWVsZCc6ICdwaWVjZXdpc2UtY29uc3RhbnQnLFxyXG4gICd0ZXh0LWZvbnQnOiAncGllY2V3aXNlLWNvbnN0YW50J1xyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdHMgPSB7XHJcbiAgJ2ZpbGwtb3BhY2l0eSc6IDEsXHJcbiAgJ2xpbmUtY2FwJzogJ2J1dHQnLFxyXG4gICdsaW5lLWpvaW4nOiAnbWl0ZXInLFxyXG4gICdsaW5lLW1pdGVyLWxpbWl0JzogMixcclxuICAnbGluZS1vcGFjaXR5JzogMSxcclxuICAnbGluZS13aWR0aCc6IDEsXHJcbiAgJ3N5bWJvbC1wbGFjZW1lbnQnOiAncG9pbnQnLFxyXG4gICd0ZXh0LWFuY2hvcic6ICdjZW50ZXInLFxyXG4gICd0ZXh0LWNvbG9yJzogJyMwMDAwMDAnLFxyXG4gICd0ZXh0LWZvbnQnOiBbJ09wZW4gU2FucyBSZWd1bGFyJywgJ0FyaWFsIFVuaWNvZGUgTVMgUmVndWxhciddLFxyXG4gICd0ZXh0LWhhbG8tY29sb3InOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgJ3RleHQtaGFsby13aWR0aCc6IDAsXHJcbiAgJ3RleHQtbWF4LXdpZHRoJzogMTAsXHJcbiAgJ3RleHQtb2Zmc2V0JzogWzAsIDBdLFxyXG4gICd0ZXh0LXRyYW5zbGF0ZSc6IFswLCAwXSxcclxuICAndGV4dC1vcGFjaXR5JzogMSxcclxuICAndGV4dC1yb3RhdGUnOiAwLFxyXG4gICd0ZXh0LXNpemUnOiAxNixcclxuICAnaWNvbi1vcGFjaXR5JzogMSxcclxuICAnaWNvbi1yb3RhdGUnOiAwLFxyXG4gICdpY29uLW9mZnNldCc6IFswLCAwXSxcclxuICAnaWNvbi10cmFuc2xhdGUnOiBbMCwgMF0sXHJcbiAgJ2ljb24tdHJhbnNsYXRlLWFuY2hvcic6ICdtYXAnLFxyXG4gICdpY29uLWFuY2hvcic6ICdjZW50ZXInLFxyXG4gICdpY29uLXNpemUnOiAxLFxyXG4gICdjaXJjbGUtY29sb3InOiAnIzAwMDAwMCcsXHJcbiAgJ2NpcmNsZS1zdHJva2UtY29sb3InOiAnIzAwMDAwMCcsXHJcbiAgJ2NpcmNsZS1vcGFjaXR5JzogMSxcclxuICAnY2lyY2xlLXN0cm9rZS1vcGFjaXR5JzogMSxcclxuICAnY2lyY2xlLXN0cm9rZS13aWR0aCc6IDBcclxufTtcclxuXHJcbmNvbnN0IHR5cGVzID0ge1xyXG4gICdQb2ludCc6IDEsXHJcbiAgJ011bHRpUG9pbnQnOiAxLFxyXG4gICdMaW5lU3RyaW5nJzogMixcclxuICAnTXVsdGlMaW5lU3RyaW5nJzogMixcclxuICAnUG9seWdvbic6IDMsXHJcbiAgJ011bHRpUG9seWdvbic6IDNcclxufTtcclxuXHJcbmNvbnN0IGZ1bmN0aW9uQ2FjaGUgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlKGxheWVySWQsIGxheW91dE9yUGFpbnQsIHByb3BlcnR5LCB6b29tLCBwcm9wZXJ0aWVzKSB7XHJcbiAgaWYgKCFmdW5jdGlvbkNhY2hlW2xheWVySWRdKSB7XHJcbiAgICBmdW5jdGlvbkNhY2hlW2xheWVySWRdID0ge307XHJcbiAgfVxyXG4gIGNvbnN0IGZ1bmN0aW9ucyA9IGZ1bmN0aW9uQ2FjaGVbbGF5ZXJJZF07XHJcbiAgaWYgKCFmdW5jdGlvbnNbcHJvcGVydHldKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBsYXlvdXRPclBhaW50W3Byb3BlcnR5XTtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhbHVlID0gZGVmYXVsdHNbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb25zW3Byb3BlcnR5XSA9IGdsZnVuKHZhbHVlLCB7XHJcbiAgICAgIGZ1bmN0aW9uOiBmdW5jdGlvblR5cGVzW3Byb3BlcnR5XSxcclxuICAgICAgdHlwZTogcHJvcGVydHkuaW5kZXhPZignY29sb3InKSAhPT0gLTEgPyAnY29sb3InIDogdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHZhbHVlLnN0b3BzICYmIHR5cGVvZiB2YWx1ZS5zdG9wc1swXVswXSA9PSAnbnVtYmVyJyA/ICdudW1iZXInIDogdW5kZWZpbmVkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uc1twcm9wZXJ0eV0oem9vbSwgcHJvcGVydGllcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdmVydEljb25BbmNob3IoaWNvbkFuY2hvcikge1xyXG4gIGxldCBhbmNob3JPZmZzZXQgPSBbMC41LCAwLjVdO1xyXG4gIGlmIChbJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnXS5pbmNsdWRlcyhpY29uQW5jaG9yKSkge1xyXG4gICAgYW5jaG9yT2Zmc2V0ID0gWzAsIDBdO1xyXG4gIH1cclxuICBpZiAoaWNvbkFuY2hvciA9PT0gJ2xlZnQnKSB7XHJcbiAgICBpY29uQW5jaG9yID0gJ3RvcC1sZWZ0JztcclxuICAgIGFuY2hvck9mZnNldCA9IFswLCAwLjVdO1xyXG4gIH1cclxuICBpZiAoaWNvbkFuY2hvciA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgaWNvbkFuY2hvciA9ICd0b3AtbGVmdCc7XHJcbiAgICBhbmNob3JPZmZzZXQgPSBbMSwgMC41XTtcclxuICB9XHJcbiAgaWYgKGljb25BbmNob3IgPT09ICdib3R0b20nKSB7XHJcbiAgICBpY29uQW5jaG9yID0gJ3RvcC1sZWZ0JztcclxuICAgIGFuY2hvck9mZnNldCA9IFswLjUsIDFdO1xyXG4gIH1cclxuICBpZiAoaWNvbkFuY2hvciA9PT0gJ3RvcCcpIHtcclxuICAgIGljb25BbmNob3IgPSAndG9wLWxlZnQnO1xyXG4gICAgYW5jaG9yT2Zmc2V0ID0gWzAuNSwgMF07XHJcbiAgfVxyXG4gIC8vY2VudGVyXHJcbiAgcmV0dXJuIHtcclxuICAgIGFuY2hvck9mZnNldDogYW5jaG9yT2Zmc2V0LFxyXG4gICAgaWNvbkFuY2hvcjogaWNvbkFuY2hvclxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGZvbnRNYXAgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGNob29zZUZvbnQoZm9udHMsIGF2YWlsYWJsZUZvbnRzKSB7XHJcbiAgaWYgKGZvbnRNYXBbZm9udHNdKSB7XHJcbiAgICByZXR1cm4gZm9udE1hcFtmb250c107XHJcbiAgfVxyXG4gIGlmIChhdmFpbGFibGVGb250cykge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gZm9udHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgICBjb25zdCBmb250ID0gZm9udHNbaV07XHJcbiAgICAgIGlmIChhdmFpbGFibGVGb250cy5pbmRleE9mKGZvbnQpICE9IC0xKSB7XHJcbiAgICAgICAgZm9udE1hcFtmb250c10gPSBmb250O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvbnRNYXBbZm9udHNdKSB7XHJcbiAgICAgIC8vIGZhbGxiYWNrIGZvbnRcclxuICAgICAgZm9udE1hcFtmb250c10gPSBmb250c1tmb250cy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9udE1hcFtmb250c10gPSBmb250c1swXTtcclxuICB9XHJcbiAgcmV0dXJuIGZvbnRNYXBbZm9udHNdO1xyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJDYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZXZhbHVhdGVGaWx0ZXIobGF5ZXJJZCwgZmlsdGVyLCBmZWF0dXJlKSB7XHJcbiAgaWYgKCEobGF5ZXJJZCBpbiBmaWx0ZXJDYWNoZSkpIHtcclxuICAgIGZpbHRlckNhY2hlW2xheWVySWRdID0gY3JlYXRlRmlsdGVyKGZpbHRlcik7XHJcbiAgfVxyXG4gIHJldHVybiBmaWx0ZXJDYWNoZVtsYXllcklkXShmZWF0dXJlKTtcclxufVxyXG5cclxuY29uc3QgY29sb3JDYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gY29sb3JXaXRoT3BhY2l0eShjb2xvciwgb3BhY2l0eSkge1xyXG4gIGlmIChjb2xvciAmJiBvcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBjb2xvckRhdGEgPSBjb2xvckNhY2hlW2NvbG9yXTtcclxuICAgIGlmICghY29sb3JEYXRhKSB7XHJcbiAgICAgIGNvbG9yQ2FjaGVbY29sb3JdID0gY29sb3JEYXRhID0ge1xyXG4gICAgICAgIGNvbG9yOiBbXHJcbiAgICAgICAgICBjb2xvclswXSAqIDI1NSAvIGNvbG9yWzNdLFxyXG4gICAgICAgICAgY29sb3JbMV0gKiAyNTUgLyBjb2xvclszXSxcclxuICAgICAgICAgIGNvbG9yWzJdICogMjU1IC8gY29sb3JbM10sXHJcbiAgICAgICAgICBjb2xvclszXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3BhY2l0eTogY29sb3JbM11cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbG9yID0gY29sb3JEYXRhLmNvbG9yO1xyXG4gICAgY29sb3JbM10gPSBjb2xvckRhdGEub3BhY2l0eSAqIG9wYWNpdHk7XHJcbiAgICBpZiAoY29sb3JbM10gPT09IDApIHtcclxuICAgICAgY29sb3IgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjb2xvcjtcclxufVxyXG5cclxuY29uc3QgdGVtcGxhdGVSZWdFeCA9IC9eKFteXSopXFx7KC4qKVxcfShbXl0qKSQvO1xyXG5cclxuZnVuY3Rpb24gZnJvbVRlbXBsYXRlKHRleHQsIHByb3BlcnRpZXMpIHtcclxuICBsZXQgcGFydHM7XHJcbiAgZG8ge1xyXG4gICAgcGFydHMgPSB0ZXh0Lm1hdGNoKHRlbXBsYXRlUmVnRXgpO1xyXG4gICAgaWYgKHBhcnRzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1twYXJ0c1syXV0gfHwgJyc7XHJcbiAgICAgIHRleHQgPSBwYXJ0c1sxXSArIHZhbHVlICsgcGFydHNbM107XHJcbiAgICB9XHJcbiAgfSB3aGlsZSAocGFydHMpO1xyXG4gIHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG5jb25zdCBlbXB0eU9iaiA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzdHlsZSBmdW5jdGlvbiBmcm9tIHRoZSBgZ2xTdHlsZWAgb2JqZWN0IGZvciBhbGwgbGF5ZXJzIHRoYXQgdXNlXHJcbiAqIHRoZSBzcGVjaWZpZWQgYHNvdXJjZWAsIHdoaWNoIG5lZWRzIHRvIGJlIGEgYFwidHlwZVwiOiBcInZlY3RvclwiYCBvclxyXG4gKiBgXCJ0eXBlXCI6IFwiZ2VvanNvblwiYCBzb3VyY2UgYW5kIGFwcGxpZXMgaXQgdG8gdGhlIHNwZWNpZmllZCBPcGVuTGF5ZXJzIGxheWVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29sLmxheWVyLlZlY3RvcnxvbC5sYXllci5WZWN0b3JUaWxlfSBvbExheWVyIE9wZW5MYXllcnMgbGF5ZXIgdG9cclxuICogYXBwbHkgdGhlIHN0eWxlIHRvLiBJbiBhZGRpdGlvbiB0byB0aGUgc3R5bGUsIHRoZSBsYXllciB3aWxsIGdldCB0d29cclxuICogcHJvcGVydGllczogYG1hcGJveC1zb3VyY2VgIHdpbGwgYmUgdGhlIGBpZGAgb2YgdGhlIGBnbFN0eWxlYCdzIHNvdXJjZSB1c2VkXHJcbiAqIGZvciB0aGUgbGF5ZXIsIGFuZCBgbWFwYm94LWxheWVyc2Agd2lsbCBiZSBhbiBhcnJheSBvZiB0aGUgYGlkYHMgb2YgdGhlXHJcbiAqIGBnbFN0eWxlYCdzIGxheWVycy5cclxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBnbFN0eWxlIE1hcGJveCBTdHlsZSBvYmplY3QuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHNvdXJjZSBgc291cmNlYCBrZXkgb3IgYW4gYXJyYXkgb2YgbGF5ZXIgYGlkYHNcclxuICogZnJvbSB0aGUgTWFwYm94IFN0eWxlIG9iamVjdC4gV2hlbiBhIGBzb3VyY2VgIGtleSBpcyBwcm92aWRlZCwgYWxsIGxheWVycyBmb3JcclxuICogdGhlIHNwZWNpZmllZCBzb3VyY2Ugd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgc3R5bGUgZnVuY3Rpb24uIFdoZW4gbGF5ZXIgYGlkYHNcclxuICogYXJlIHByb3ZpZGVkLCB0aGV5IG11c3QgYmUgZnJvbSBsYXllcnMgdGhhdCB1c2UgdGhlIHNhbWUgc291cmNlLlxyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtyZXNvbHV0aW9ucz1bNzgyNzEuNTE2OTY0MDIwNDgsIDM5MTM1Ljc1ODQ4MjAxMDI0LFxyXG4gKiAxOTU2Ny44NzkyNDEwMDUxMiwgOTc4My45Mzk2MjA1MDI1NiwgNDg5MS45Njk4MTAyNTEyOCwgMjQ0NS45ODQ5MDUxMjU2NCxcclxuICogMTIyMi45OTI0NTI1NjI4MiwgNjExLjQ5NjIyNjI4MTQxLCAzMDUuNzQ4MTEzMTQwNzA1LCAxNTIuODc0MDU2NTcwMzUyNSxcclxuICogNzYuNDM3MDI4Mjg1MTc2MjUsIDM4LjIxODUxNDE0MjU4ODEzLCAxOS4xMDkyNTcwNzEyOTQwNjMsIDkuNTU0NjI4NTM1NjQ3MDMyLFxyXG4gKiA0Ljc3NzMxNDI2NzgyMzUxNiwgMi4zODg2NTcxMzM5MTE3NTgsIDEuMTk0MzI4NTY2OTU1ODc5LCAwLjU5NzE2NDI4MzQ3NzkzOTUsXHJcbiAqIDAuMjk4NTgyMTQxNzM4OTY5NzQsIDAuMTQ5MjkxMDcwODY5NDg0ODcsIDAuMDc0NjQ1NTM1NDM0NzQyNDRdXVxyXG4gKiBSZXNvbHV0aW9ucyBmb3IgbWFwcGluZyByZXNvbHV0aW9uIHRvIHpvb20gbGV2ZWwuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3ByaXRlRGF0YT11bmRlZmluZWRdIFNwcml0ZSBkYXRhIGZyb20gdGhlIHVybCBzcGVjaWZpZWQgaW5cclxuICogdGhlIE1hcGJveCBTdHlsZSBvYmplY3QncyBgc3ByaXRlYCBwcm9wZXJ0eS4gT25seSByZXF1aXJlZCBpZiBhIGBzcHJpdGVgXHJcbiAqIHByb3BlcnR5IGlzIHNwZWNpZmllZCBpbiB0aGUgTWFwYm94IFN0eWxlIG9iamVjdC5cclxuICogQHBhcmFtIHtPYmplY3R9IFtzcHJpdGVJbWFnZVVybD11bmRlZmluZWRdIFNwcml0ZSBpbWFnZSB1cmwgZm9yIHRoZSBzcHJpdGVcclxuICogc3BlY2lmaWVkIGluIHRoZSBNYXBib3ggU3R5bGUgb2JqZWN0J3MgYHNwcml0ZWAgcHJvcGVydHkuIE9ubHkgcmVxdWlyZWQgaWYgYVxyXG4gKiBgc3ByaXRlYCBwcm9wZXJ0eSBpcyBzcGVjaWZpZWQgaW4gdGhlIE1hcGJveCBTdHlsZSBvYmplY3QuXHJcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW2ZvbnRzPXVuZGVmaW5lZF0gQXJyYXkgb2YgYXZhaWxhYmxlIGZvbnRzLCB1c2luZyB0aGVcclxuICogc2FtZSBmb250IG5hbWVzIGFzIHRoZSBNYXBib3ggU3R5bGUgb2JqZWN0LiBJZiBub3QgcHJvdmlkZWQsIHRoZSBzdHlsZVxyXG4gKiBmdW5jdGlvbiB3aWxsIGFsd2F5cyB1c2UgdGhlIGZpcnN0IGZvbnQgZnJvbSB0aGUgZm9udCBhcnJheS5cclxuICogQHJldHVybiB7b2wuc3R5bGUuU3R5bGVGdW5jdGlvbn0gU3R5bGUgZnVuY3Rpb24gZm9yIHVzZSBpblxyXG4gKiBgb2wubGF5ZXIuVmVjdG9yYCBvciBgb2wubGF5ZXIuVmVjdG9yVGlsZWAuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob2xMYXllciwgZ2xTdHlsZSwgc291cmNlLCByZXNvbHV0aW9ucywgc3ByaXRlRGF0YSwgc3ByaXRlSW1hZ2VVcmwsc3ByaXRlSW1hZ2UsIGZvbnRzKSB7XHJcbiAgaWYgKCFyZXNvbHV0aW9ucykge1xyXG4gICAgcmVzb2x1dGlvbnMgPSBbXTtcclxuICAgIGZvciAobGV0IHJlcyA9IDc4MjcxLjUxNjk2NDAyMDQ4OyByZXNvbHV0aW9ucy5sZW5ndGggPCAyMTsgcmVzIC89IDIpIHtcclxuICAgICAgcmVzb2x1dGlvbnMucHVzaChyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGdsU3R5bGUgPT0gJ3N0cmluZycpIHtcclxuICAgIGdsU3R5bGUgPSBKU09OLnBhcnNlKGdsU3R5bGUpO1xyXG4gIH1cclxuICBpZiAoZ2xTdHlsZS52ZXJzaW9uICE9IDgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZ2xTdHlsZSB2ZXJzaW9uIDggcmVxdWlyZWQuJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgc3ByaXRlSW1nU2l6ZTtcclxuICBpZiAoc3ByaXRlSW1hZ2VVcmwgJiYgIXNwcml0ZUltYWdlKSB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3ByaXRlSW1hZ2UgPSBpbWc7XHJcbiAgICAgIHNwcml0ZUltZ1NpemUgPSBbaW1nLndpZHRoLCBpbWcuaGVpZ2h0XTtcclxuICAgICAgb2xMYXllci5jaGFuZ2VkKCk7XHJcbiAgICB9O1xyXG4gICAgaW1nLnNyYyA9IHNwcml0ZUltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQ0FOVkFTJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjb25zdCBtZWFzdXJlQ2FjaGUgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gd3JhcFRleHQodGV4dCwgZm9udCwgZW0pIHtcclxuICAgIGNvbnN0IGtleSA9IGVtICsgJywnICsgZm9udCArICcsJyArIHRleHQ7XHJcbiAgICBsZXQgd3JhcHBlZFRleHQgPSBtZWFzdXJlQ2FjaGVba2V5XTtcclxuICAgIGlmICghd3JhcHBlZFRleHQpIHtcclxuICAgICAgY3R4LmZvbnQgPSBmb250O1xyXG4gICAgICBjb25zdCBvbmVFbSA9IGN0eC5tZWFzdXJlVGV4dCgnTScpLndpZHRoO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IG9uZUVtICogZW07XHJcbiAgICAgIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnICcpO1xyXG4gICAgICBsZXQgbGluZSA9ICcnO1xyXG4gICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSB3b3Jkcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICAgICAgY29uc3Qgd29yZCA9IHdvcmRzW2ldO1xyXG4gICAgICAgIGlmICgoY3R4Lm1lYXN1cmVUZXh0KGxpbmUgKyB3b3JkKS53aWR0aCA8PSB3aWR0aCkpIHtcclxuICAgICAgICAgIGxpbmUgKz0gKGxpbmUgPyAnICcgOiAnJykgKyB3b3JkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobGluZSkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGluZSA9IHdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsaW5lKSB7XHJcbiAgICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuICAgICAgfVxyXG4gICAgICBtZWFzdXJlQ2FjaGVba2V5XSA9IHdyYXBwZWRUZXh0ID0gbGluZXMuam9pbignXFxuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd3JhcHBlZFRleHQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhbGxMYXllcnMgPSBkZXJlZkxheWVycyhnbFN0eWxlLmxheWVycyk7XHJcblxyXG4gIGNvbnN0IGxheWVyc0J5U291cmNlTGF5ZXIgPSB7fTtcclxuICBjb25zdCBtYXBib3hMYXllcnMgPSBbXTtcclxuICBsZXQgbWFwYm94U291cmNlO1xyXG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGFsbExheWVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICBjb25zdCBsYXllciA9IGFsbExheWVyc1tpXTtcclxuICAgIGNvbnN0IGxheWVySWQgPSBsYXllci5pZDtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlID09ICdzdHJpbmcnICYmIGxheWVyLnNvdXJjZSA9PSBzb3VyY2UgfHxcclxuICAgICAgc291cmNlLmluZGV4T2YobGF5ZXJJZCkgIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHNvdXJjZUxheWVyID0gbGF5ZXJbJ3NvdXJjZS1sYXllciddO1xyXG4gICAgICBpZiAoIW1hcGJveFNvdXJjZSkge1xyXG4gICAgICAgIG1hcGJveFNvdXJjZSA9IGxheWVyLnNvdXJjZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbGF5ZXJzID0gbGF5ZXJzQnlTb3VyY2VMYXllcltzb3VyY2VMYXllcl07XHJcbiAgICAgIGlmICghbGF5ZXJzKSB7XHJcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzQnlTb3VyY2VMYXllcltzb3VyY2VMYXllcl0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBsYXllcnMucHVzaCh7XHJcbiAgICAgICAgbGF5ZXI6IGxheWVyLFxyXG4gICAgICAgIGluZGV4OiBpXHJcbiAgICAgIH0pO1xyXG4gICAgICBtYXBib3hMYXllcnMucHVzaChsYXllcklkKTtcclxuICAgIH1cclxuICAgIC8vIC8vIFRPRE8gcmV2aXNpdCB3aGVuIGRpZmZpbmcgZ2V0cyBhZGRlZFxyXG4gICAgZGVsZXRlIGZ1bmN0aW9uQ2FjaGVbbGF5ZXJJZF07XHJcbiAgICBkZWxldGUgZmlsdGVyQ2FjaGVbbGF5ZXJJZF07XHJcbiAgfVxyXG4gIGNvbnN0IGljb25JbWFnZUNhY2hlID0ge307XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IFtdO1xyXG4gIGNvbnN0IHBhdHRlcm5DYWNoZSA9IHt9O1xyXG5cclxuICBjb25zdCBzdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBmZWF0dXJlLmdldFByb3BlcnRpZXMoKTtcclxuICAgIGZlYXR1cmUuc3R5bGVJZHMgPSBmZWF0dXJlLnN0eWxlSWRzIHx8IHt9O1xyXG4gICAgY29uc3QgbGF5ZXJzID0gbGF5ZXJzQnlTb3VyY2VMYXllcltwcm9wZXJ0aWVzLmxheWVyXTtcclxuICAgIGlmICghbGF5ZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB6b29tID0gcmVzb2x1dGlvbnMuaW5kZXhPZihyZXNvbHV0aW9uKTtcclxuICAgIGlmICh6b29tID09IC0xKSB7XHJcbiAgICAgIHpvb20gPSBNYXRoLnJvdW5kKGdldFpvb21Gb3JSZXNvbHV0aW9uKHJlc29sdXRpb24sIHJlc29sdXRpb25zKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0eXBlID0gdHlwZXNbZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKV07XHJcbiAgICBjb25zdCBmID0ge1xyXG4gICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxyXG4gICAgICB0eXBlOiB0eXBlXHJcbiAgICB9O1xyXG4gICAgbGV0IHN0eWxlc0xlbmd0aCA9IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgICAgY29uc3QgbGF5ZXJEYXRhID0gbGF5ZXJzW2ldO1xyXG4gICAgICBjb25zdCBsYXllciA9IGxheWVyRGF0YS5sYXllcjtcclxuICAgICAgY29uc3QgbGF5ZXJJZCA9IGxheWVyLmlkO1xyXG5cclxuICAgICAgY29uc3QgbGF5b3V0ID0gbGF5ZXIubGF5b3V0IHx8IGVtcHR5T2JqO1xyXG4gICAgICBjb25zdCBwYWludCA9IGxheWVyLnBhaW50IHx8IGVtcHR5T2JqO1xyXG4gICAgICBpZiAobGF5b3V0LnZpc2liaWxpdHkgPT09ICdub25lJyB8fCAoJ21pbnpvb20nIGluIGxheWVyICYmIHpvb20gPCBsYXllci5taW56b29tKSB8fFxyXG4gICAgICAgICgnbWF4em9vbScgaW4gbGF5ZXIgJiYgem9vbSA+PSBsYXllci5tYXh6b29tKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZlYXR1cmUuc3R5bGVJZHNbem9vbV0gPSBmZWF0dXJlLnN0eWxlSWRzW3pvb21dIHx8IFtdO1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBsYXllci5maWx0ZXI7XHJcbiAgICAgIGxldCBpY29uLCBpY29uSW1nO1xyXG4gICAgICBpZiAoIWZpbHRlciB8fCBldmFsdWF0ZUZpbHRlcihsYXllcklkLCBmaWx0ZXIsIGYpKSB7XHJcbiAgICAgICAgbGV0IGNvbG9yLCBvcGFjaXR5LCBmaWxsLCBzdHJva2UsIHN0cm9rZUNvbG9yLCBzdHlsZTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGxheWVyRGF0YS5pbmRleDtcclxuICAgICAgICBpZiAodHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICBpZiAoJ2ZpbGwtcGF0dGVybicgaW4gcGFpbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWNvbkltYWdlID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdmaWxsLXBhdHRlcm4nLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgaWYgKGljb25JbWFnZSkge1xyXG4gICAgICAgICAgICAgIGljb24gPSBmcm9tVGVtcGxhdGUoaWNvbkltYWdlLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICBpZiAoc3ByaXRlSW1hZ2UgJiYgc3ByaXRlRGF0YSAmJiBzcHJpdGVEYXRhW2ljb25dKSB7XHJcbiAgICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuc3R5bGVJZHNbem9vbV0ucHVzaChsYXllcklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5nZXRGaWxsKCkgfHwgc3R5bGUuZ2V0U3Ryb2tlKCkgfHwgc3R5bGUuZ2V0VGV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF0gPSBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBGaWxsKClcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWxsID0gc3R5bGUuZ2V0RmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gcGF0dGVybkNhY2hlW2ljb25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUltYWdlRGF0YSA9IHNwcml0ZURhdGFbaWNvbl07XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBzcHJpdGVJbWFnZURhdGEud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzcHJpdGVJbWFnZURhdGEuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEueSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2VEYXRhLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2VEYXRhLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgJ3JlcGVhdCcpO1xyXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuQ2FjaGVbaWNvbl0gPSBwYXR0ZXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsbC5zZXRDb2xvcihwYXR0ZXJuKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoJ2ZpbGwtY29sb3InIGluIHBhaW50KSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHkgPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2ZpbGwtb3BhY2l0eScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yV2l0aE9wYWNpdHkoZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdmaWxsLWNvbG9yJywgem9vbSwgcHJvcGVydGllcyksIG9wYWNpdHkpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRTdHJva2UoKSB8fCBzdHlsZS5nZXRUZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF0gPSBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgRmlsbCgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZmlsbCA9IHN0eWxlLmdldEZpbGwoKTtcclxuICAgICAgICAgICAgICBmaWxsLnNldENvbG9yKGNvbG9yKTtcclxuICAgICAgICAgICAgICBzdHlsZS5zZXRaSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgnZmlsbC1vdXRsaW5lLWNvbG9yJyBpbiBwYWludCkge1xyXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yID0gY29sb3JXaXRoT3BhY2l0eShnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2ZpbGwtb3V0bGluZS1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpLCBvcGFjaXR5KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnZmlsbC1hbnRpYWxpYXMnIGluIHBhaW50KSB7XHJcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3Ryb2tlQ29sb3IpIHtcclxuICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldFN0cm9rZSgpIHx8IHN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRUZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF0gPSBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2UoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHN0cm9rZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgIHN0cm9rZS5zZXRMaW5lQ2FwKGRlZmF1bHRzWydsaW5lLWNhcCddKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0TGluZUpvaW4oZGVmYXVsdHNbJ2xpbmUtam9pbiddKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0TWl0ZXJMaW1pdChkZWZhdWx0c1snbGluZS1taXRlci1saW1pdCddKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0Q29sb3Ioc3Ryb2tlQ29sb3IpO1xyXG4gICAgICAgICAgICAgIHN0cm9rZS5zZXRXaWR0aCgxKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0TGluZURhc2gobnVsbCk7XHJcbiAgICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSAhPSAxKSB7XHJcbiAgICAgICAgICBjb2xvciA9ICEoJ2xpbmUtcGF0dGVybicgaW4gcGFpbnQpICYmICdsaW5lLWNvbG9yJyBpbiBwYWludCA/XHJcbiAgICAgICAgICAgIGNvbG9yV2l0aE9wYWNpdHkoZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdsaW5lLWNvbG9yJywgem9vbSwgcHJvcGVydGllcyksIGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnbGluZS1vcGFjaXR5Jywgem9vbSwgcHJvcGVydGllcykpIDpcclxuICAgICAgICAgICAgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2xpbmUtd2lkdGgnLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgIGlmIChjb2xvciAmJiB3aWR0aCA+IDApIHtcclxuICAgICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldFN0cm9rZSgpIHx8IHN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRUZXh0KCkpIHtcclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSgpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Ryb2tlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIHN0cm9rZS5zZXRMaW5lQ2FwKGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ2xpbmUtY2FwJywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0TGluZUpvaW4oZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnbGluZS1qb2luJywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0TWl0ZXJMaW1pdChnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICdsaW5lLW1pdGVyLWxpbWl0Jywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0Q29sb3IoY29sb3IpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0V2lkdGgod2lkdGgpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0TGluZURhc2gocGFpbnRbJ2xpbmUtZGFzaGFycmF5J10gP1xyXG4gICAgICAgICAgICAgIGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnbGluZS1kYXNoYXJyYXknLCB6b29tLCBwcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4ICogd2lkdGg7XHJcbiAgICAgICAgICAgICAgfSkgOiBudWxsKTtcclxuICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KGluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNJbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc2tpcExhYmVsO1xyXG4gICAgICAgIGlmICgodHlwZSA9PSAxIHx8IHR5cGUgPT0gMikgJiYgJ2ljb24taW1hZ2UnIGluIGxheW91dCkge1xyXG4gICAgICAgICAgY29uc3QgaWNvbkltYWdlID0gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnaWNvbi1pbWFnZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgaWYgKGljb25JbWFnZSkge1xyXG4gICAgICAgICAgICBpY29uID0gZnJvbVRlbXBsYXRlKGljb25JbWFnZSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZUdlb20gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGVJbWFnZSAmJiBzcHJpdGVEYXRhICYmIHNwcml0ZURhdGFbaWNvbl0pIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gb2wgcGFja2FnZSBhbmQgb2wtZGVidWcuanMgb25seVxyXG4gICAgICAgICAgICAgICAgaWYgKGdlb20uZ2V0RmxhdE1pZHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVudCA9IGdlb20uZ2V0RXh0ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coKGV4dGVudFsyXSAtIGV4dGVudFswXSkgLyByZXNvbHV0aW9uLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygoZXh0ZW50WzNdIC0gZXh0ZW50WzFdKSAvIHJlc29sdXRpb24sIDIpKSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaXplID4gMTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9GSVhNRSBEbyBub3QgaGFyZC1jb2RlIGEgc2l6ZSBvZiAxNTBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUdlb20gPSBuZXcgUG9pbnQoZ2VvbS5nZXRGbGF0TWlkcG9pbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGUgIT09IDIgfHwgc3R5bGVHZW9tKSB7XHJcbiAgICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuc3R5bGVJZHNbem9vbV0ucHVzaChsYXllcklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5nZXRJbWFnZSgpIHx8IHN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRTdHJva2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRHZW9tZXRyeShzdHlsZUdlb20pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvblNpemUgPSBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICdpY29uLXNpemUnLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IHBhaW50WydpY29uLWNvbG9yJ10gIT09IHVuZGVmaW5lZCA/IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnaWNvbi1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25UcmFuc2xhdGUgPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2ljb24tdHJhbnNsYXRlJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uVHJhbnNsYXRlQW5jaG9yID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdpY29uLXRyYW5zbGF0ZS1hbmNob3InLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25BbmNob3JWYWx1ZSA9IGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ2ljb24tYW5jaG9yJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uT2Zmc2V0ID0gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnaWNvbi1vZmZzZXQnLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvck9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvciA9IGljb25BbmNob3JWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSA9IGNvdmVydEljb25BbmNob3IoaWNvbkFuY2hvclZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uX2NhY2hlX2tleSA9IGljb24gKyAnLicgKyBpY29uU2l6ZSArICcuJyArIGljb25UcmFuc2xhdGUgKyAnLicgKyBpY29uVHJhbnNsYXRlQW5jaG9yICsgJy4nICsgaWNvbkFuY2hvciArICcuJyArIGljb25PZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNvbkNvbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGljb25fY2FjaGVfa2V5ICs9ICcuJyArIGljb25Db2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGljb25JbWcgPSBpY29uSW1hZ2VDYWNoZVtpY29uX2NhY2hlX2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWljb25JbWcpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlSW1hZ2VEYXRhID0gc3ByaXRlRGF0YVtpY29uXTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNwcml0ZUltYWdlRGF0YS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNwcml0ZUltYWdlRGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2VEYXRhLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaWNvbkNvbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCB0aGUgc3ByaXRlIGFuZCBjb2xvciBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gY29sb3JXaXRoT3BhY2l0eShpY29uQ29sb3IsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwLCBjYyA9IGRhdGEuZGF0YS5sZW5ndGg7IGMgPCBjYzsgYyArPSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGFbY10gPSBjb2xvclswXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtjICsgMV0gPSBjb2xvclsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtjICsgMl0gPSBjb2xvclsyXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlT2Zmc2V0ID0gW2ljb25UcmFuc2xhdGVbMF0gLyBzcHJpdGVJbWFnZURhdGEud2lkdGgsIGljb25UcmFuc2xhdGVbMV0gLyBzcHJpdGVJbWFnZURhdGEuaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgICAgaWNvbkltZyA9IGljb25JbWFnZUNhY2hlW2ljb25fY2FjaGVfa2V5XSA9IG5ldyBJY29uKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWc6IGNhbnZhcyxcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW46IGljb25BbmNob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiBbaWNvbk9mZnNldFswXSArIGFuY2hvck9mZnNldFswXSArIHRyYW5zbGF0ZU9mZnNldFswXSwgaWNvbk9mZnNldFsxXSArIGFuY2hvck9mZnNldFsxXSAtIHRyYW5zbGF0ZU9mZnNldFsxXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU2l6ZTogW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IGljb25TaXplIC8gc3ByaXRlSW1hZ2VEYXRhLnBpeGVsUmF0aW9cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcm90YXRlVmFsdWUgPSBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICdpY29uLXJvdGF0ZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdGF0ZVZhbHVlLmluZGV4T2YgJiYgcm90YXRlVmFsdWUuaW5kZXhPZigneycpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZVZhbHVlID0gMzYwIC0gZnJvbVRlbXBsYXRlKHJvdGF0ZVZhbHVlLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGljb25JbWcuc2V0Um90YXRpb24oZGVnMnJhZChyb3RhdGVWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWNvbkltZy5zZXRPcGFjaXR5KGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnaWNvbi1vcGFjaXR5Jywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0SW1hZ2UoaWNvbkltZyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gc3R5bGUuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0VGV4dCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KDk5OTk5IC0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaGFzSW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2tpcExhYmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNraXBMYWJlbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSAxICYmICdjaXJjbGUtcmFkaXVzJyBpbiBwYWludCkge1xyXG4gICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICBmZWF0dXJlLnN0eWxlSWRzW3pvb21dLnB1c2gobGF5ZXJJZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuZ2V0SW1hZ2UoKSB8fCBzdHlsZS5nZXRGaWxsKCkgfHwgc3R5bGUuZ2V0U3Ryb2tlKCkpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzdHlsZXNbc3R5bGVzTGVuZ3RoXSA9IG5ldyBTdHlsZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgY2lyY2xlUmFkaXVzID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdjaXJjbGUtcmFkaXVzJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCBjaXJjbGVTdHJva2VDb2xvciA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnY2lyY2xlLXN0cm9rZS1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgY2lyY2xlQ29sb3IgPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2NpcmNsZS1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgY2lyY2xlT3BhY2l0eSA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnY2lyY2xlLW9wYWNpdHknLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgIGNvbnN0IGNpcmNsZVN0cm9rZVdpZHRoID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdjaXJjbGUtc3Ryb2tlLXdpZHRoJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCBjaXJjbGVTdHJva2VPcGFjaXR5ID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdjaXJjbGUtc3Ryb2tlLW9wYWNpdHknLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgIGNvbnN0IGNhY2hlX2tleSA9IGNpcmNsZVJhZGl1cyArICcuJyArIGNpcmNsZVN0cm9rZUNvbG9yICsgJy4nICtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3IgKyAnLicgKyBjaXJjbGVPcGFjaXR5ICsgJy4nICsgY2lyY2xlU3Ryb2tlV2lkdGggKyAnLicgKyBjaXJjbGVTdHJva2VPcGFjaXR5O1xyXG4gICAgICAgICAgaWNvbkltZyA9IGljb25JbWFnZUNhY2hlW2NhY2hlX2tleV07XHJcbiAgICAgICAgICBpZiAoIWljb25JbWcpIHtcclxuICAgICAgICAgICAgaWNvbkltZyA9IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICAgIHJhZGl1czogY2lyY2xlUmFkaXVzLFxyXG4gICAgICAgICAgICAgIHN0cm9rZTogY2lyY2xlU3Ryb2tlV2lkdGggPT09IDAgPyB1bmRlZmluZWQgOiBuZXcgU3Ryb2tlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjaXJjbGVTdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcldpdGhPcGFjaXR5KGNpcmNsZVN0cm9rZUNvbG9yLCBjaXJjbGVTdHJva2VPcGFjaXR5KVxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIGZpbGw6IG5ldyBGaWxsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcldpdGhPcGFjaXR5KGNpcmNsZUNvbG9yLCBjaXJjbGVPcGFjaXR5KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGUuc2V0SW1hZ2UoaWNvbkltZyk7XHJcbiAgICAgICAgICB0ZXh0ID0gc3R5bGUuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgc3R5bGUuc2V0VGV4dCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgc3R5bGUuc2V0R2VvbWV0cnkodW5kZWZpbmVkKTtcclxuICAgICAgICAgIHN0eWxlLnNldFpJbmRleCg5OTk5OSAtIGluZGV4KTtcclxuICAgICAgICAgIGhhc0ltYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYWJlbDtcclxuICAgICAgICBpZiAoJ3RleHQtZmllbGQnIGluIGxheW91dCkge1xyXG4gICAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAndGV4dC1maWVsZCcsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgbGFiZWwgPSBmcm9tVGVtcGxhdGUodGV4dEZpZWxkLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhYmVsICYmICFza2lwTGFiZWwpIHtcclxuICAgICAgICAgIGlmICghaGFzSW1hZ2UpIHtcclxuICAgICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldFRleHQoKSB8fCBzdHlsZS5nZXRGaWxsKCkgfHwgc3R5bGUuZ2V0U3Ryb2tlKCkpIHtcclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3R5bGUuc2V0SW1hZ2UodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgc3R5bGUuc2V0R2VvbWV0cnkodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghc3R5bGUuZ2V0VGV4dCgpKSB7XHJcbiAgICAgICAgICAgIHN0eWxlLnNldFRleHQodGV4dCB8fCBuZXcgVGV4dCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgPSBzdHlsZS5nZXRUZXh0KCk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtc2l6ZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgZm9udCA9IG1iMmNzcyhjaG9vc2VGb250KGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtZm9udCcsIHpvb20sIHByb3BlcnRpZXMpKSwgdGV4dFNpemUpO1xyXG4gICAgICAgICAgY29uc3QgdGV4dFRyYW5zZm9ybSA9IGxheW91dFsndGV4dC10cmFuc2Zvcm0nXTtcclxuICAgICAgICAgIGlmICh0ZXh0VHJhbnNmb3JtID09ICd1cHBlcmNhc2UnKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGV4dFRyYW5zZm9ybSA9PSAnbG93ZXJjYXNlJykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB3cmFwcGVkTGFiZWwgPSB0eXBlID09IDIgPyBsYWJlbCA6IHdyYXBUZXh0KGxhYmVsLCBmb250LCBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICd0ZXh0LW1heC13aWR0aCcsIHpvb20sIHByb3BlcnRpZXMpKTtcclxuICAgICAgICAgIHRleHQuc2V0VGV4dCh3cmFwcGVkTGFiZWwpO1xyXG4gICAgICAgICAgdGV4dC5zZXRGb250KGZvbnQpO1xyXG4gICAgICAgICAgdGV4dC5zZXRSb3RhdGlvbihkZWcycmFkKGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtcm90YXRlJywgem9vbSwgcHJvcGVydGllcykpKTtcclxuICAgICAgICAgIGNvbnN0IHRleHRBbmNob3IgPSBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICd0ZXh0LWFuY2hvcicsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gKGhhc0ltYWdlIHx8IHR5cGUgPT0gMSkgPyAncG9pbnQnIDogZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnc3ltYm9sLXBsYWNlbWVudCcsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgdGV4dC5zZXRQbGFjZW1lbnQocGxhY2VtZW50KTtcclxuICAgICAgICAgIGlmIChwbGFjZW1lbnQgPT0gJ3BvaW50Jykge1xyXG4gICAgICAgICAgICBsZXQgdGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0QW5jaG9yLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGV4dEFuY2hvci5pbmRleE9mKCdyaWdodCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbiA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dC5zZXRUZXh0QWxpZ24odGV4dEFsaWduKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQuc2V0VGV4dEFsaWduKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgdGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgICBpZiAodGV4dEFuY2hvci5pbmRleE9mKCdib3R0b20nKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHRCYXNlbGluZSA9ICdib3R0b20nO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0ZXh0QW5jaG9yLmluZGV4T2YoJ3RvcCcpID09IDApIHtcclxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0ZXh0LnNldFRleHRCYXNlbGluZSh0ZXh0QmFzZWxpbmUpO1xyXG4gICAgICAgICAgY29uc3QgdGV4dE9mZnNldCA9IGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtb2Zmc2V0Jywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0VHJhbnNsYXRlID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICd0ZXh0LXRyYW5zbGF0ZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgdGV4dC5zZXRPZmZzZXRYKHRleHRPZmZzZXRbMF0gKiB0ZXh0U2l6ZSArIHRleHRUcmFuc2xhdGVbMF0pO1xyXG4gICAgICAgICAgdGV4dC5zZXRPZmZzZXRZKHRleHRPZmZzZXRbMV0gKiB0ZXh0U2l6ZSArIHRleHRUcmFuc2xhdGVbMV0pO1xyXG4gICAgICAgICAgb3BhY2l0eSA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAndGV4dC1vcGFjaXR5Jywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0Q29sb3IgPSBuZXcgRmlsbCgpO1xyXG5cclxuICAgICAgICAgIHRleHRDb2xvci5zZXRDb2xvcihjb2xvcldpdGhPcGFjaXR5KGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAndGV4dC1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpLCBvcGFjaXR5KSk7XHJcbiAgICAgICAgICB0ZXh0LnNldEZpbGwodGV4dENvbG9yKTtcclxuICAgICAgICAgIGNvbnN0IGhhbG9Db2xvciA9IGNvbG9yV2l0aE9wYWNpdHkoZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICd0ZXh0LWhhbG8tY29sb3InLCB6b29tLCBwcm9wZXJ0aWVzKSwgb3BhY2l0eSk7XHJcbiAgICAgICAgICBpZiAoaGFsb0NvbG9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRIYWxvID0gbmV3IFN0cm9rZSgpO1xyXG4gICAgICAgICAgICB0ZXh0SGFsby5zZXRDb2xvcihoYWxvQ29sb3IpO1xyXG4gICAgICAgICAgICB0ZXh0SGFsby5zZXRXaWR0aChnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ3RleHQtaGFsby13aWR0aCcsIHpvb20sIHByb3BlcnRpZXMpKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRTdHJva2UodGV4dEhhbG8pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dC5zZXRTdHJva2UodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlLnNldFpJbmRleCg5OTk5OSAtIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3R5bGVzTGVuZ3RoID4gLTEpIHtcclxuICAgICAgc3R5bGVzLmxlbmd0aCA9IHN0eWxlc0xlbmd0aCArIDE7XHJcbiAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb2xMYXllci5zZXRTdHlsZShzdHlsZUZ1bmN0aW9uKTtcclxuICBvbExheWVyLnNldCgnbWFwYm94LXNvdXJjZScsIG1hcGJveFNvdXJjZSk7XHJcbiAgb2xMYXllci5zZXQoJ21hcGJveC1sYXllcnMnLCBtYXBib3hMYXllcnMpO1xyXG4gIHJldHVybiBzdHlsZUZ1bmN0aW9uO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWcycmFkKGRlZ3JlZXMpIHtcclxuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRab29tRm9yUmVzb2x1dGlvbihyZXNvbHV0aW9uLCByZXNvbHV0aW9ucykge1xyXG4gIGxldCBpID0gMDtcclxuICBjb25zdCBpaSA9IHJlc29sdXRpb25zLmxlbmd0aDtcclxuICBmb3IgKDsgaSA8IGlpOyArK2kpIHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHJlc29sdXRpb25zW2ldO1xyXG4gICAgaWYgKGNhbmRpZGF0ZSA8IHJlc29sdXRpb24gJiYgaSArIDEgPCBpaSkge1xyXG4gICAgICBjb25zdCB6b29tRmFjdG9yID0gcmVzb2x1dGlvbnNbaV0gLyByZXNvbHV0aW9uc1tpICsgMV07XHJcbiAgICAgIHJldHVybiBpICsgTWF0aC5sb2cocmVzb2x1dGlvbnNbaV0gLyByZXNvbHV0aW9uKSAvIE1hdGgubG9nKHpvb21GYWN0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaWkgLSAxO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gb2wuTWFwOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuT2JzZXJ2YWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLmZvcm1hdC5HZW9KU09OOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuZm9ybWF0Lk1WVDsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLmdlb20uUG9pbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5sYXllci5UaWxlOyIsIm1vZHVsZS5leHBvcnRzID0gb2wubGF5ZXIuVmVjdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gb2wubGF5ZXIuVmVjdG9yVGlsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLnByb2o7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zb3VyY2UuVGlsZUpTT047IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zb3VyY2UuVmVjdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuc291cmNlLlZlY3RvclRpbGU7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zb3VyY2UuWFlaOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuc3R5bGUuQ2lyY2xlOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuc3R5bGUuRmlsbDsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLnN0eWxlLkljb247IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zdHlsZS5TdHJva2U7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zdHlsZS5TdHlsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLnN0eWxlLlRleHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC50aWxlZ3JpZDsiXSwic291cmNlUm9vdCI6IiJ9