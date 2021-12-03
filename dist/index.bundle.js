/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #f6f6f6;\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#main {\r\n  width: 100%;\r\n  min-width: 100%;\r\n  max-width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toDoListContainer {\r\n  width: 40em;\r\n  max-width: 90%;\r\n  min-width: 40em;\r\n  border: 2px solid #f6f6f6;\r\n  box-shadow: 0.2em 0.2em 0.2em 0.2em rgba(179, 184, 182, 0.603);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.toDoListContainer .container-list {\r\n  padding-left: 1.3em;\r\n  padding-right: 1.3em;\r\n  border-bottom: 2px solid #dfdfdf;\r\n  background: #fff;\r\n  height: 5em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=checkbox]:hover,\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.clearCompleted button {\r\n  height: 100%;\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.1rem;\r\n  color: #a3a3a3;\r\n}\r\n\r\n.toDoListContainer .container-list button {\r\n  background: none;\r\n  border: none;\r\n  color: rgb(182, 182, 182);\r\n  margin-left: 1em;\r\n}\r\n\r\n.toDoListContainer .container-list button:hover {\r\n  background: none;\r\n  border: none;\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #a3a3a3;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\np,\r\ninput[type='text'] {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.inputNew input {\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  width: 100%;\r\n}\r\n\r\n.inputNew input:focus {\r\n  outline: none;\r\n}\r\n\r\n.toDoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.toDoItem .checkbox {\r\n  width: 2em;\r\n  height: 20%;\r\n  margin-right: 1em;\r\n}\r\n\r\n.toDoItem .edit-input {\r\n  flex: 4;\r\n}\r\n\r\n.toDoItem .button {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.clearCompleted {\r\n  height: 5em;\r\n  display: flex;\r\n  border-bottom: none;\r\n  background: #f6f6f6;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n}\r\n\r\ninput[type=checkbox]:checked {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\ninput[type=checkbox]:checked::after {\r\n  content: \"\\2713\";\r\n  font-size: 1.6rem;\r\n  color: #7b9cee;\r\n}\r\n\r\ninput[type='text'] {\r\n  outline: none;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.toDoItem.container-list.editing {\r\n  background: #dddcaa;\r\n}\r\n\r\n.item-description.crossed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.toDoItem.container-list.editing input[type='text']:hover {\r\n  cursor: text;\r\n}\r\n\r\n.toDoItem.container-list .move-button:hover {\r\n  cursor: move;\r\n}\r\n\r\n.toDoItem.container-list .delete-button {\r\n  display: none;\r\n}\r\n\r\n.toDoItem.container-list .item-description {\r\n  width: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,eAAe;EACf,eAAe;EACf,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,8DAA8D;EAC9D,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,gCAAgC;EAChC,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #f6f6f6;\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#main {\r\n  width: 100%;\r\n  min-width: 100%;\r\n  max-width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toDoListContainer {\r\n  width: 40em;\r\n  max-width: 90%;\r\n  min-width: 40em;\r\n  border: 2px solid #f6f6f6;\r\n  box-shadow: 0.2em 0.2em 0.2em 0.2em rgba(179, 184, 182, 0.603);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.toDoListContainer .container-list {\r\n  padding-left: 1.3em;\r\n  padding-right: 1.3em;\r\n  border-bottom: 2px solid #dfdfdf;\r\n  background: #fff;\r\n  height: 5em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=checkbox]:hover,\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.clearCompleted button {\r\n  height: 100%;\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.1rem;\r\n  color: #a3a3a3;\r\n}\r\n\r\n.toDoListContainer .container-list button {\r\n  background: none;\r\n  border: none;\r\n  color: rgb(182, 182, 182);\r\n  margin-left: 1em;\r\n}\r\n\r\n.toDoListContainer .container-list button:hover {\r\n  background: none;\r\n  border: none;\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #a3a3a3;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\np,\r\ninput[type='text'] {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.inputNew input {\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  width: 100%;\r\n}\r\n\r\n.inputNew input:focus {\r\n  outline: none;\r\n}\r\n\r\n.toDoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.toDoItem .checkbox {\r\n  width: 2em;\r\n  height: 20%;\r\n  margin-right: 1em;\r\n}\r\n\r\n.toDoItem .edit-input {\r\n  flex: 4;\r\n}\r\n\r\n.toDoItem .button {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.clearCompleted {\r\n  height: 5em;\r\n  display: flex;\r\n  border-bottom: none;\r\n  background: #f6f6f6;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: none;\r\n}\r\n\r\ninput[type=checkbox]:checked {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\ninput[type=checkbox]:checked::after {\r\n  content: \"\\2713\";\r\n  font-size: 1.6rem;\r\n  color: #7b9cee;\r\n}\r\n\r\ninput[type='text'] {\r\n  outline: none;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.toDoItem.container-list.editing {\r\n  background: #dddcaa;\r\n}\r\n\r\n.item-description.crossed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.toDoItem.container-list.editing input[type='text']:hover {\r\n  cursor: text;\r\n}\r\n\r\n.toDoItem.container-list .move-button:hover {\r\n  cursor: move;\r\n}\r\n\r\n.toDoItem.container-list .delete-button {\r\n  display: none;\r\n}\r\n\r\n.toDoItem.container-list .item-description {\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HtmlToDo)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



class HtmlToDo {
  // Edit mode
  static toggleEditable(listElement) {
    document.querySelectorAll('.toDoItem').forEach((element) => {
      const edit = element.querySelector('.item-description');
      const deleteBtn = element.querySelector('.delete-button');
      const moveBtn = element.querySelector('.move-button');

      if (element === listElement) {
        deleteBtn.style.display = 'block';
        moveBtn.style.display = 'none';
        edit.readOnly = false;
        element.classList.add('editing');
      } else {
        deleteBtn.style.display = 'none';
        moveBtn.style.display = 'block';
        edit.readOnly = true;
        element.classList.remove('editing');
      }
    });
  }

  // Create list element
  static createListItem(item) {
    const listUl = document.querySelector('.toDoList');
    const listElement = document.createElement('div');
    listElement.classList.add('toDoItem');
    listElement.classList.add('container-list');
    listElement.style.order = item.index;

    let crossed = '';
    if (item.completed) {
      crossed = 'crossed';
    }

    listElement.innerHTML = `
     <input type="checkbox" class="checkbox">
     <form class="edit-input"> <input type="text" name="title" class="item-description ${crossed}" value=${item.description} readonly></form>
     <button class="button move-button"><i class="fas fa-ellipsis-v"></i></button>
     <button class="button delete-button"><i class="fas fa-trash-alt"></i></button>
    `;

    // Add  status changer
    const completed = listElement.querySelector('.checkbox');
    completed.checked = item.completed;
    completed.addEventListener('change', (e) => {
      _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(item.index, e.target.checked);
      listElement.querySelector('.item-description').classList.toggle('crossed');
    });

    // Add delete feature
    const deleteBtn = listElement.querySelector('.delete-button');
    deleteBtn.addEventListener('click', () => {
      _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](item.index);
      HtmlToDo.createListStructure();
    });

    // Handle edit form
    const editForm = listElement.querySelector('.edit-input');
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(editForm);
      const newName = data.get('title');
      _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].update(newName, item.index);
    });

    // Toggle edit
    listElement.querySelector('.item-description').addEventListener('click', () => HtmlToDo.toggleEditable(listElement));

    listUl.append(listElement);
  }

  // Append list items
  static createListStructure() {
    document.querySelector('.toDoList').innerHTML = '';
    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getList().forEach((item) => {
      HtmlToDo.createListItem(item);
    });
  }

  // Create initial to-do list structure
  static createStructure() {
    const element = document.createElement('div');
    element.className = 'toDoListContainer';

    // Create header section
    const header = document.createElement('div');
    header.classList.add('container-list');
    header.innerHTML = `
      <p class="header">Today's To Do</p>
      <button class="button"><i class="fas fa-sync"></i></button>
    `;
    header.style.order = 0;
    element.appendChild(header);

    // Create add section
    const add = document.createElement('form');
    add.classList.add('inputNew');
    add.classList.add('container-list');

    add.innerHTML = `
      <input placeholder="Add to your list..." name="title" id="addToListInput"> 
      <button type="submit" class="button"><i class="fas fa-reply"></i></button>
    `;
    add.style.order = 1;
    add.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(add);
      let newItem = data.get('title');
      newItem = _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(newItem);
      if (newItem) {
        HtmlToDo.createListItem(newItem);
      }
      add.reset();
    });
    element.appendChild(add);

    // Create list ul
    const listUl = document.createElement('div');
    listUl.classList.add('toDoList');
    listUl.style.order = 2;
    element.appendChild(listUl);

    // Add clear completed
    const clearCompleted = document.createElement('div');
    clearCompleted.classList.add('clearCompleted');
    clearCompleted.style.order = 3;
    clearCompleted.innerHTML = '<button>Clear all completed</button>';
    clearCompleted.querySelector('button').addEventListener('click', () => {
      _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteCompleted();
      HtmlToDo.createListStructure();
    });
    element.appendChild(clearCompleted);

    // Append to main content
    const container = document.querySelector('#main');
    return container.appendChild(element);
  }
}

/***/ }),

/***/ "./src/listItem.js":
/*!*************************!*\
  !*** ./src/listItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListItem)
/* harmony export */ });
class ListItem {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
  // retrieve to-do list
  static getList() {
    let toDoList = JSON.parse(localStorage.getItem('toDoList'));
    if (!toDoList) {
      toDoList = [];
    }
    return toDoList;
  }

  // save list to local storage
  static save(list) {
    localStorage.setItem('toDoList', JSON.stringify(list));
  }
}

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _listItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItem.js */ "./src/listItem.js");



class ToDoList {
  // change status(completed) of to-do item
  static changeStatus(index, status) {
    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getList();
    const listItem = model.find((item) => item.index === index);
    listItem.completed = status;
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].save(model);
  }

  // Add
  static add(newInput) {
    // Add if input is not empty
    if (newInput.trim().length > 1) {
      const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getList();
      const newIndex = model.length + 1;
      const newItem = new _listItem_js__WEBPACK_IMPORTED_MODULE_1__["default"](newInput, newIndex);
      model.push(newItem);
      _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].save(model);
      return newItem;
    }
    return false;
  }

  // Update
  static update(description, index) {
    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getList();
    const listItem = model.find((item) => item.index === index);
    listItem.description = description;
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].save(model);
  }

  // Delete
  static delete(index) {
    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getList();
    let newModel = model.filter((item) => item.index !== index);
    newModel = this.reAssignIndex(newModel);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].save(newModel);
  }

  // Delete completed
  static deleteCompleted() {
    const model = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getList();
    let newModel = model.filter((item) => item.completed === false);
    newModel = this.reAssignIndex(newModel);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].save(newModel);
  }

  // Adjusts list index values to match actual index
  static reAssignIndex(model) {
    model.forEach((item, index) => {
      item.index = index + 1;
    });
    return model;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.js */ "./src/html.js");




_html_js__WEBPACK_IMPORTED_MODULE_1__["default"].createStructure();
_html_js__WEBPACK_IMPORTED_MODULE_1__["default"].createListStructure();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJEQUFvQjtBQUN0QztBQUNBO0FBQ0EsSUFBSSx3REFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNyQjtBQUNpQztBQUNqQztBQUNBLGdFQUF3QjtBQUN4QixvRUFBNEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9odG1sLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDBlbTtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgbWluLXdpZHRoOiA0MGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMmVtIDAuMmVtIDAuMmVtIDAuMmVtIHJnYmEoMTc5LCAxODQsIDE4MiwgMC42MDMpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdENvbnRhaW5lciAuY29udGFpbmVyLWxpc3Qge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEuM2VtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZmRmZGY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1jaGVja2JveF06aG92ZXIsXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQ29tcGxldGVkIGJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogI2EzYTNhMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9MaXN0Q29udGFpbmVyIC5jb250YWluZXItbGlzdCBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9Eb0xpc3RDb250YWluZXIgLmNvbnRhaW5lci1saXN0IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjYTNhM2EzO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXROZXcgaW5wdXQge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0TmV3IGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9JdGVtIC5jaGVja2JveCB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9JdGVtIC5lZGl0LWlucHV0IHtcXHJcXG4gIGZsZXg6IDQ7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbSAuYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJDb21wbGV0ZWQge1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiAjN2I5Y2VlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbS5jb250YWluZXItbGlzdC5lZGl0aW5nIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZGRjYWE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRlc2NyaXB0aW9uLmNyb3NzZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbS5jb250YWluZXItbGlzdC5lZGl0aW5nIGlucHV0W3R5cGU9J3RleHQnXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbS5jb250YWluZXItbGlzdCAubW92ZS1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9Eb0l0ZW0uY29udGFpbmVyLWxpc3QgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9JdGVtLmNvbnRhaW5lci1saXN0IC5pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDhEQUE4RDtFQUM5RCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNDBlbTtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgbWluLXdpZHRoOiA0MGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMmVtIDAuMmVtIDAuMmVtIDAuMmVtIHJnYmEoMTc5LCAxODQsIDE4MiwgMC42MDMpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdENvbnRhaW5lciAuY29udGFpbmVyLWxpc3Qge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEuM2VtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZmRmZGY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1jaGVja2JveF06aG92ZXIsXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQ29tcGxldGVkIGJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBjb2xvcjogI2EzYTNhMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9MaXN0Q29udGFpbmVyIC5jb250YWluZXItbGlzdCBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9Eb0xpc3RDb250YWluZXIgLmNvbnRhaW5lci1saXN0IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjYTNhM2EzO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXROZXcgaW5wdXQge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0TmV3IGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b0RvTGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9JdGVtIC5jaGVja2JveCB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9JdGVtIC5lZGl0LWlucHV0IHtcXHJcXG4gIGZsZXg6IDQ7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbSAuYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJDb21wbGV0ZWQge1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiAjN2I5Y2VlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbS5jb250YWluZXItbGlzdC5lZGl0aW5nIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZGRjYWE7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRlc2NyaXB0aW9uLmNyb3NzZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbS5jb250YWluZXItbGlzdC5lZGl0aW5nIGlucHV0W3R5cGU9J3RleHQnXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi50b0RvSXRlbS5jb250YWluZXItbGlzdCAubW92ZS1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9Eb0l0ZW0uY29udGFpbmVyLWxpc3QgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvRG9JdGVtLmNvbnRhaW5lci1saXN0IC5pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvRG8uanMnO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sVG9EbyB7XHJcbiAgLy8gRWRpdCBtb2RlXHJcbiAgc3RhdGljIHRvZ2dsZUVkaXRhYmxlKGxpc3RFbGVtZW50KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9Eb0l0ZW0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGVkaXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKTtcclxuICAgICAgY29uc3QgbW92ZUJ0biA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmUtYnV0dG9uJyk7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudCA9PT0gbGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBkZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbW92ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVkaXQucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRpbmcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBtb3ZlQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGVkaXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGluZycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBsaXN0IGVsZW1lbnRcclxuICBzdGF0aWMgY3JlYXRlTGlzdEl0ZW0oaXRlbSkge1xyXG4gICAgY29uc3QgbGlzdFVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9MaXN0Jyk7XHJcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9Eb0l0ZW0nKTtcclxuICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1saXN0Jyk7XHJcbiAgICBsaXN0RWxlbWVudC5zdHlsZS5vcmRlciA9IGl0ZW0uaW5kZXg7XHJcblxyXG4gICAgbGV0IGNyb3NzZWQgPSAnJztcclxuICAgIGlmIChpdGVtLmNvbXBsZXRlZCkge1xyXG4gICAgICBjcm9zc2VkID0gJ2Nyb3NzZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgIDxmb3JtIGNsYXNzPVwiZWRpdC1pbnB1dFwiPiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb24gJHtjcm9zc2VkfVwiIHZhbHVlPSR7aXRlbS5kZXNjcmlwdGlvbn0gcmVhZG9ubHk+PC9mb3JtPlxyXG4gICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbW92ZS1idXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gZGVsZXRlLWJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj5cclxuICAgIGA7XHJcblxyXG4gICAgLy8gQWRkICBzdGF0dXMgY2hhbmdlclxyXG4gICAgY29uc3QgY29tcGxldGVkID0gbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XHJcbiAgICBjb21wbGV0ZWQuY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkO1xyXG4gICAgY29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIFRvRG9MaXN0LmNoYW5nZVN0YXR1cyhpdGVtLmluZGV4LCBlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZGVzY3JpcHRpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdjcm9zc2VkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBZGQgZGVsZXRlIGZlYXR1cmVcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIFRvRG9MaXN0LmRlbGV0ZShpdGVtLmluZGV4KTtcclxuICAgICAgSHRtbFRvRG8uY3JlYXRlTGlzdFN0cnVjdHVyZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIGVkaXQgZm9ybVxyXG4gICAgY29uc3QgZWRpdEZvcm0gPSBsaXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1pbnB1dCcpO1xyXG4gICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGVkaXRGb3JtKTtcclxuICAgICAgY29uc3QgbmV3TmFtZSA9IGRhdGEuZ2V0KCd0aXRsZScpO1xyXG4gICAgICBUb0RvTGlzdC51cGRhdGUobmV3TmFtZSwgaXRlbS5pbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUb2dnbGUgZWRpdFxyXG4gICAgbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEh0bWxUb0RvLnRvZ2dsZUVkaXRhYmxlKGxpc3RFbGVtZW50KSk7XHJcblxyXG4gICAgbGlzdFVsLmFwcGVuZChsaXN0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBBcHBlbmQgbGlzdCBpdGVtc1xyXG4gIHN0YXRpYyBjcmVhdGVMaXN0U3RydWN0dXJlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9MaXN0JykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBMb2NhbFN0b3JhZ2UuZ2V0TGlzdCgpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgSHRtbFRvRG8uY3JlYXRlTGlzdEl0ZW0oaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBpbml0aWFsIHRvLWRvIGxpc3Qgc3RydWN0dXJlXHJcbiAgc3RhdGljIGNyZWF0ZVN0cnVjdHVyZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3RvRG9MaXN0Q29udGFpbmVyJztcclxuXHJcbiAgICAvLyBDcmVhdGUgaGVhZGVyIHNlY3Rpb25cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1saXN0Jyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cCBjbGFzcz1cImhlYWRlclwiPlRvZGF5J3MgVG8gRG88L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgYDtcclxuICAgIGhlYWRlci5zdHlsZS5vcmRlciA9IDA7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFkZCBzZWN0aW9uXHJcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnaW5wdXROZXcnKTtcclxuICAgIGFkZC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItbGlzdCcpO1xyXG5cclxuICAgIGFkZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkFkZCB0byB5b3VyIGxpc3QuLi5cIiBuYW1lPVwidGl0bGVcIiBpZD1cImFkZFRvTGlzdElucHV0XCI+IFxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLXJlcGx5XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgYDtcclxuICAgIGFkZC5zdHlsZS5vcmRlciA9IDE7XHJcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGFkZCk7XHJcbiAgICAgIGxldCBuZXdJdGVtID0gZGF0YS5nZXQoJ3RpdGxlJyk7XHJcbiAgICAgIG5ld0l0ZW0gPSBUb0RvTGlzdC5hZGQobmV3SXRlbSk7XHJcbiAgICAgIGlmIChuZXdJdGVtKSB7XHJcbiAgICAgICAgSHRtbFRvRG8uY3JlYXRlTGlzdEl0ZW0obmV3SXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgbGlzdCB1bFxyXG4gICAgY29uc3QgbGlzdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaXN0VWwuY2xhc3NMaXN0LmFkZCgndG9Eb0xpc3QnKTtcclxuICAgIGxpc3RVbC5zdHlsZS5vcmRlciA9IDI7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpc3RVbCk7XHJcblxyXG4gICAgLy8gQWRkIGNsZWFyIGNvbXBsZXRlZFxyXG4gICAgY29uc3QgY2xlYXJDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsZWFyQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NsZWFyQ29tcGxldGVkJyk7XHJcbiAgICBjbGVhckNvbXBsZXRlZC5zdHlsZS5vcmRlciA9IDM7XHJcbiAgICBjbGVhckNvbXBsZXRlZC5pbm5lckhUTUwgPSAnPGJ1dHRvbj5DbGVhciBhbGwgY29tcGxldGVkPC9idXR0b24+JztcclxuICAgIGNsZWFyQ29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBUb0RvTGlzdC5kZWxldGVDb21wbGV0ZWQoKTtcclxuICAgICAgSHRtbFRvRG8uY3JlYXRlTGlzdFN0cnVjdHVyZSgpO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNsZWFyQ29tcGxldGVkKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdG8gbWFpbiBjb250ZW50XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4KSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG4gIC8vIHJldHJpZXZlIHRvLWRvIGxpc3RcclxuICBzdGF0aWMgZ2V0TGlzdCgpIHtcclxuICAgIGxldCB0b0RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xyXG4gICAgaWYgKCF0b0RvTGlzdCkge1xyXG4gICAgICB0b0RvTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvRG9MaXN0O1xyXG4gIH1cclxuXHJcbiAgLy8gc2F2ZSBsaXN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICBzdGF0aWMgc2F2ZShsaXN0KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9saXN0SXRlbS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgLy8gY2hhbmdlIHN0YXR1cyhjb21wbGV0ZWQpIG9mIHRvLWRvIGl0ZW1cclxuICBzdGF0aWMgY2hhbmdlU3RhdHVzKGluZGV4LCBzdGF0dXMpIHtcclxuICAgIGNvbnN0IG1vZGVsID0gTG9jYWxTdG9yYWdlLmdldExpc3QoKTtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gbW9kZWwuZmluZCgoaXRlbSkgPT4gaXRlbS5pbmRleCA9PT0gaW5kZXgpO1xyXG4gICAgbGlzdEl0ZW0uY29tcGxldGVkID0gc3RhdHVzO1xyXG4gICAgTG9jYWxTdG9yYWdlLnNhdmUobW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkXHJcbiAgc3RhdGljIGFkZChuZXdJbnB1dCkge1xyXG4gICAgLy8gQWRkIGlmIGlucHV0IGlzIG5vdCBlbXB0eVxyXG4gICAgaWYgKG5ld0lucHV0LnRyaW0oKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IG1vZGVsID0gTG9jYWxTdG9yYWdlLmdldExpc3QoKTtcclxuICAgICAgY29uc3QgbmV3SW5kZXggPSBtb2RlbC5sZW5ndGggKyAxO1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0gbmV3IExpc3RJdGVtKG5ld0lucHV0LCBuZXdJbmRleCk7XHJcbiAgICAgIG1vZGVsLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgIExvY2FsU3RvcmFnZS5zYXZlKG1vZGVsKTtcclxuICAgICAgcmV0dXJuIG5ld0l0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBVcGRhdGVcclxuICBzdGF0aWMgdXBkYXRlKGRlc2NyaXB0aW9uLCBpbmRleCkge1xyXG4gICAgY29uc3QgbW9kZWwgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdCgpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBtb2RlbC5maW5kKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBpbmRleCk7XHJcbiAgICBsaXN0SXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgTG9jYWxTdG9yYWdlLnNhdmUobW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVsZXRlXHJcbiAgc3RhdGljIGRlbGV0ZShpbmRleCkge1xyXG4gICAgY29uc3QgbW9kZWwgPSBMb2NhbFN0b3JhZ2UuZ2V0TGlzdCgpO1xyXG4gICAgbGV0IG5ld01vZGVsID0gbW9kZWwuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBpbmRleCk7XHJcbiAgICBuZXdNb2RlbCA9IHRoaXMucmVBc3NpZ25JbmRleChuZXdNb2RlbCk7XHJcbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZShuZXdNb2RlbCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZWxldGUgY29tcGxldGVkXHJcbiAgc3RhdGljIGRlbGV0ZUNvbXBsZXRlZCgpIHtcclxuICAgIGNvbnN0IG1vZGVsID0gTG9jYWxTdG9yYWdlLmdldExpc3QoKTtcclxuICAgIGxldCBuZXdNb2RlbCA9IG1vZGVsLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IGZhbHNlKTtcclxuICAgIG5ld01vZGVsID0gdGhpcy5yZUFzc2lnbkluZGV4KG5ld01vZGVsKTtcclxuICAgIExvY2FsU3RvcmFnZS5zYXZlKG5ld01vZGVsKTtcclxuICB9XHJcblxyXG4gIC8vIEFkanVzdHMgbGlzdCBpbmRleCB2YWx1ZXMgdG8gbWF0Y2ggYWN0dWFsIGluZGV4XHJcbiAgc3RhdGljIHJlQXNzaWduSW5kZXgobW9kZWwpIHtcclxuICAgIG1vZGVsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGl0ZW0uaW5kZXggPSBpbmRleCArIDE7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtb2RlbDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IEh0bWxUb0RvIGZyb20gJy4vaHRtbC5qcyc7XHJcblxyXG5IdG1sVG9Eby5jcmVhdGVTdHJ1Y3R1cmUoKTtcclxuSHRtbFRvRG8uY3JlYXRlTGlzdFN0cnVjdHVyZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==