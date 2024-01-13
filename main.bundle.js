"use strict";
(self["webpackChunksettlement_sheet"] = self["webpackChunksettlement_sheet"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Luminari-Regular.woff */ "./Luminari-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'fantasy';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    font-family: 'fantasy';
    font-size: 16px;
}

button {
    font-family: 'fantasy';
}

#settlementName {
    font-size: 40px;
    border: none;
}

.component {
    margin-left: 1rem;
    width: 40%;
}

.compScore {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.SPBuyBtn {
    border-radius: 1rem;
    height: 22px;
    font-size: 11px;
    font-weight: 700;
    margin-left: .2rem
}

.scoreBox {
    display: flex;
    justify-content: space-around;
}

#surBox>div, #safBox>div, #econBox>div {
    margin-top: .25rem;
}

#surBox, #safBox, #econBox {
    padding: 1rem;
    height: 27%
}

#surBox {
    background-color: rgba(200,25,25,.3);
}

#safBox {
    background-color: rgba(25,25,200,.3);
}

#econBox {
    background-color: rgba(25,200,25,.3);
}

.taxRow {
    box-sizing: border-box;
    padding-left: .5rem;
    display: flex;
    align-items: center;
    height: 47.325px;
}

#taxBox {
    height: 100%;
    max-height: 100%;
    border-bottom: 2px solid black;
}

#taxBox>div{
    border: 1px solid black;
    height: 10%;
}

#taxBox>div>div {
    font-size: 15px;
}

#taxBox>div>div>div {
    font-size: 15px;
}
.taxLabel {
    padding: .5rem 0;    
    display: flex;
    width: 50%;    
}

.taxValue {
    padding: .5rem 0;
    display: flex;
    width: 50%;
    justify-content: space-between;
}

.taxChngBtn {
    width: 25%;
    font-size: 16px;
}

#buySell {
    display: flex;
    justify-content: space-around;
}

#buyMode, #sellMode {
    border: none;
    background: white;
    width: 50%;
    height: 47.3px;
}

#buyMode.buybuy {
    background: rgba(25,200,25,.3);
    color: rgba(0,100,0);
}

#buyMode.buysell {
    background: rgba(50,50,50,.3);
    color: rgba(0,100,0,.5);
}

#sellMode.sellbuy {
    background: rgba(50,50,50,.3);
    color: rgba(100,0,0,.5);
}

#sellMode.sellsell {
    background: rgba(200,25,25,.3);
    color: rgba(100,0,0,1)
}

#shopWrapper.buy {
    background: rgba(25,200,25,.1)
}

#shopWrapper.sell {
    background: rgba(200,25,25,.1)
}

#buyBox {
    max-height: 100%;
    border-left: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
}

#buyBox>div {
    box-sizing: border-box;

}

.shopRow {
    display: flex;
    justify-content: start;
    box-sizing: border-box;
    height: 43.4px;
    border: 6px solid rgba(255,219,152);

}

.shopLabel {
    font-size: 16px;
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.bsBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: .5rem;
    box-sizing: border-box;
    
}

.bsBox>div {
    font-size: 16px;
}

.shopBtn {
    background: none;
    border: none;
    font-size: 16px;
}

.bsRow {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    height: 47.325px;
    border-top: 4px solid rgba(255,219,152);
    border-bottom: 4px solid rgba(255,219,152);
}

.bsRow>div {
    font-size: 16px;
}

#projectManagement {
    max-height: 100%;
    border-bottom: 2px solid black;
}

#shopCXBtn {
    font-size: 16px;
    width: 25%;
    height: 100%;
}

#prodAvailBox {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}

#prodAvailBox>div {
    font-size: 18px
}

#newProjBtn {
    font-size: 16px;
    width: 50%;
}

#projectBox {
    padding: .25rem;
    overflow-y: auto;
}

.eventRow {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid rgba(255,165,0,.5);
    border-radius: .5rem;
    margin: .5rem 0;
    padding: .2rem .2rem 0 .2rem;
    align-items: flex-start;
}

.expandBtn {
    font-size: 21px;
    border: none;
    background: none;
    width: 5%;
}

.eventTitle {
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.durationBox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
       
}

.durationBox>div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
}

.workerBox {
    display: flex;
    margin-left: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: .5rem;

}

.changeWorkerBtn {
    height: 20px;
    font-size: 14px;
    border: none;
    background: none;
}

.workerBox>div {
    font-size: 14px;
}

.eventImpactBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.eventImpactBox>div>div {
    font-size: 14px;
    overflow-x: hidden;
}

.endBtn {
    height: 25px;
    font-size: 14px;
    border-radius: 1rem;
}

.descBox {
    display: block;
    flex-direction: column;
    
}

.descBox.hidden {
    display: none;
}

#taxBox, #buyBox, #projectManagement {
    height: 452px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'fantasy';\n    src: url('../Luminari-Regular.woff');\n}\n\n* {\n    font-family: 'fantasy';\n    font-size: 16px;\n}\n\nbutton {\n    font-family: 'fantasy';\n}\n\n#settlementName {\n    font-size: 40px;\n    border: none;\n}\n\n.component {\n    margin-left: 1rem;\n    width: 40%;\n}\n\n.compScore {\n    display: flex;\n    width: 20%;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.SPBuyBtn {\n    border-radius: 1rem;\n    height: 22px;\n    font-size: 11px;\n    font-weight: 700;\n    margin-left: .2rem\n}\n\n.scoreBox {\n    display: flex;\n    justify-content: space-around;\n}\n\n#surBox>div, #safBox>div, #econBox>div {\n    margin-top: .25rem;\n}\n\n#surBox, #safBox, #econBox {\n    padding: 1rem;\n    height: 27%\n}\n\n#surBox {\n    background-color: rgba(200,25,25,.3);\n}\n\n#safBox {\n    background-color: rgba(25,25,200,.3);\n}\n\n#econBox {\n    background-color: rgba(25,200,25,.3);\n}\n\n.taxRow {\n    box-sizing: border-box;\n    padding-left: .5rem;\n    display: flex;\n    align-items: center;\n    height: 47.325px;\n}\n\n#taxBox {\n    height: 100%;\n    max-height: 100%;\n    border-bottom: 2px solid black;\n}\n\n#taxBox>div{\n    border: 1px solid black;\n    height: 10%;\n}\n\n#taxBox>div>div {\n    font-size: 15px;\n}\n\n#taxBox>div>div>div {\n    font-size: 15px;\n}\n.taxLabel {\n    padding: .5rem 0;    \n    display: flex;\n    width: 50%;    \n}\n\n.taxValue {\n    padding: .5rem 0;\n    display: flex;\n    width: 50%;\n    justify-content: space-between;\n}\n\n.taxChngBtn {\n    width: 25%;\n    font-size: 16px;\n}\n\n#buySell {\n    display: flex;\n    justify-content: space-around;\n}\n\n#buyMode, #sellMode {\n    border: none;\n    background: white;\n    width: 50%;\n    height: 47.3px;\n}\n\n#buyMode.buybuy {\n    background: rgba(25,200,25,.3);\n    color: rgba(0,100,0);\n}\n\n#buyMode.buysell {\n    background: rgba(50,50,50,.3);\n    color: rgba(0,100,0,.5);\n}\n\n#sellMode.sellbuy {\n    background: rgba(50,50,50,.3);\n    color: rgba(100,0,0,.5);\n}\n\n#sellMode.sellsell {\n    background: rgba(200,25,25,.3);\n    color: rgba(100,0,0,1)\n}\n\n#shopWrapper.buy {\n    background: rgba(25,200,25,.1)\n}\n\n#shopWrapper.sell {\n    background: rgba(200,25,25,.1)\n}\n\n#buyBox {\n    max-height: 100%;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    border-bottom: 2px solid black;\n}\n\n#buyBox>div {\n    box-sizing: border-box;\n\n}\n\n.shopRow {\n    display: flex;\n    justify-content: start;\n    box-sizing: border-box;\n    height: 43.4px;\n    border: 6px solid rgba(255,219,152);\n\n}\n\n.shopLabel {\n    font-size: 16px;\n    width: 50%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n.bsBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    gap: .5rem;\n    box-sizing: border-box;\n    \n}\n\n.bsBox>div {\n    font-size: 16px;\n}\n\n.shopBtn {\n    background: none;\n    border: none;\n    font-size: 16px;\n}\n\n.bsRow {\n    display: flex; \n    justify-content: space-between;\n    align-items: center;\n    height: 47.325px;\n    border-top: 4px solid rgba(255,219,152);\n    border-bottom: 4px solid rgba(255,219,152);\n}\n\n.bsRow>div {\n    font-size: 16px;\n}\n\n#projectManagement {\n    max-height: 100%;\n    border-bottom: 2px solid black;\n}\n\n#shopCXBtn {\n    font-size: 16px;\n    width: 25%;\n    height: 100%;\n}\n\n#prodAvailBox {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    align-items: center;\n}\n\n#prodAvailBox>div {\n    font-size: 18px\n}\n\n#newProjBtn {\n    font-size: 16px;\n    width: 50%;\n}\n\n#projectBox {\n    padding: .25rem;\n    overflow-y: auto;\n}\n\n.eventRow {\n    display: flex;\n    flex-wrap: wrap;\n    border: 1px solid rgba(255,165,0,.5);\n    border-radius: .5rem;\n    margin: .5rem 0;\n    padding: .2rem .2rem 0 .2rem;\n    align-items: flex-start;\n}\n\n.expandBtn {\n    font-size: 21px;\n    border: none;\n    background: none;\n    width: 5%;\n}\n\n.eventTitle {\n    overflow-x: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.durationBox {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: .5rem;\n       \n}\n\n.durationBox>div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 14px;\n}\n\n.workerBox {\n    display: flex;\n    margin-left: 10%;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n\n}\n\n.changeWorkerBtn {\n    height: 20px;\n    font-size: 14px;\n    border: none;\n    background: none;\n}\n\n.workerBox>div {\n    font-size: 14px;\n}\n\n.eventImpactBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.eventImpactBox>div>div {\n    font-size: 14px;\n    overflow-x: hidden;\n}\n\n.endBtn {\n    height: 25px;\n    font-size: 14px;\n    border-radius: 1rem;\n}\n\n.descBox {\n    display: block;\n    flex-direction: column;\n    \n}\n\n.descBox.hidden {\n    display: none;\n}\n\n#taxBox, #buyBox, #projectManagement {\n    height: 452px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/buildingsStats.js":
/*!*******************************!*\
  !*** ./src/buildingsStats.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildings: () => (/* binding */ buildings)
/* harmony export */ });
let buildings = [
    {
        name: 'Walls',
        id: 'wa',
        level: 0,
        status: "You haven't built any walls yet."
    },
    {
        name: 'Wells',
        id: 'we',
        level: 0,
        status: "You haven't built any wells yet."
    },
    {
        name: 'Network',
        id: 'ne',
        level: 0,
        status: "You haven't built an Intelligence Network yet."
    },
    {
        name: 'Barracks',
        id: 'ba',
        level: 0,
        status: "You haven't upgraded the Barracks yet.",
    },
    {
        name: 'Granary',
        id: 'gr',
        level: 0,
        status: "You haven't built a Granary yet."
    },
    {
        name: 'Market',
        id: 'ma',
        level: 0,
        status: "You haven't upgraded the Market yet."
    },
    {
        name: 'Union',
        id: 'un',
        level: 0,
        status: "You haven't unionized workers yet."
    },
    {
        name: 'School',
        id: 'sc',
        level: 0,
        status: "You haven't upgraded the School yet."
    },
    {
        name: 'Infirmary',
        id: 'in',
        level: 0,
        status: "You haven't built an Infirmary yet."
    },
    {
        name: 'Commerce Office',
        id: 'co',
        level: 0,
        status: "You haven't built a Commerce Office yet."
    }
]




/***/ }),

/***/ "./src/compileEvent.js":
/*!*****************************!*\
  !*** ./src/compileEvent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compileEvent: () => (/* binding */ compileEvent),
/* harmony export */   countUp: () => (/* binding */ countUp)
/* harmony export */ });
/* harmony import */ var _economyStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./economyStats */ "./src/economyStats.js");
/* harmony import */ var _projectBoxRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectBoxRender */ "./src/projectBoxRender.js");
/* harmony import */ var _safetyStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safetyStats */ "./src/safetyStats.js");
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");
/* harmony import */ var _survivalStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survivalStats */ "./src/survivalStats.js");
/* harmony import */ var _weekLog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekLog */ "./src/weekLog.js");








let count = 0;

function compileEvent() {
    let proj = [];
    let compVals = [];
    let compItems = [];
    let impactVals = [];
    let impactItems = []; 

    let compValElements = document.querySelectorAll('.eventCompVal');
    compValElements.forEach((item) => {
        compVals.push(item.value);
    })

    let compItemElements = document.querySelectorAll('.eventCompItem');
    compItemElements.forEach((item) => {
        compItems.push(item.value);
    })

    let impactValElements = document.querySelectorAll('.eventImpactVal');
    impactValElements.forEach((item) => {
        impactVals.push(item.value);
    })

    let impactItemElements = document.querySelectorAll('.eventImpactItem');
    impactItemElements.forEach((item) => {
        impactItems.push(item.value);
    })

    proj.duration = document.querySelector('#eventTimeVal').value;

    proj.name = document.querySelector('#eventName').value;

    proj.type = document.querySelector('#eventType').value;

    proj.details = document.querySelector('#eventDetails').value;

    proj.count = count;

    proj.workers = 0;

    proj.impactItems = impactItems;

    proj.impactVals = impactVals;

    proj.costItems = compItems; 

    proj.costVals = compVals;

    proj.hide = true;

    for(let i = 0; i < impactItems.length; i++) {
        let item = impactItems[i];
        let num = impactVals[i];
        let namer = 'comp' + i;
        let number = 'cost' +i;
        proj[namer] = item;
        proj[number] = num;
    }

    if(proj.type == 'Indefinite') {
        proj.hasLink = false;
        proj.duration = 99999;
    }

    for(let i = 0; i < proj.impactItems.length; i++) {
        calcPain(proj.impactVals[i], proj.impactItems[i]);
    }

    for(let i = 0; i < proj.costItems.length; i++) {
        calcCost(proj.costVals[i],proj.costItems[i]);
    }

    if(proj.type != 'Immediate') {
        _projectBoxRender__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(proj);
    }

    countUp();

    _weekLog__WEBPACK_IMPORTED_MODULE_5__.changeLog.eventStart.push(proj);

    if(proj.type == 'Immediate') {
        _weekLog__WEBPACK_IMPORTED_MODULE_5__.changeLog.eventEnd.push(proj);
    }

    console.log(_weekLog__WEBPACK_IMPORTED_MODULE_5__.changeLog);

}

function countUp() {
    count++
}

function calcCost(i, item) {
    if(i == 0 || item == "none" || item == undefined) {
        return;
    };

    switch(item) {
        case 'food':
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.foodCurrent)(i);
            break;
        case 'supplies':
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.supCurrent)(i);
            break;
        case 'med': 
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.medCurrent)(i);
            break;
        case 'di':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.diCurrent)(i);
            break;
        case 'intel':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.intelCurrent)(i);
            break;
        case 'gar':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.garCurrent)(i);
            break;
        case 'trade':
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.tradeCurrent)(i);
            break;
        case 'prod':
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.prodCurrent)(i);
            break;
        case 'gold':
            (0,_settlementStats__WEBPACK_IMPORTED_MODULE_3__.vaultAdd)(i);
        default:
            break;
            
    } 

}

function calcPain(i, item) {
    if(i == 0 || item == 'none' || item == undefined) {
        return;
    }

    switch(item) {
        case 'food':
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.foodBonus)(i);
            break;
        case 'supplies':
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.supBonus)(i);
            break;
        case 'med':
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.medBonus)(i);
            break;
        case 'di':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.diBonus)(i);
            break;
        case 'intel':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.intelBonus)(i);
            break;
        case 'gar':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.garBonus)(i);
            break;
        case 'trade':
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.tradeBonus)(i);
            break;
        case 'prod':
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.prodBonus)(i);
            break;
        case 'survival': 
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_4__.survivalBonus)(i);
            break;
        case 'safety':
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.safetyBonus)(i);
            break;
        case 'economy':
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.economyBonus)(i);
            break;
        case 'maxHealth':
            (0,_settlementStats__WEBPACK_IMPORTED_MODULE_3__.maxHealth)(i);
            break;
        case "level":
            (0,_settlementStats__WEBPACK_IMPORTED_MODULE_3__.levelUp)(i);
            break;
        case "sp":
            (0,_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlementPoints)(i);
            break;
        default: 
            break;

    }

}



/***/ }),

/***/ "./src/economyStats.js":
/*!*****************************!*\
  !*** ./src/economyStats.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actualTaxes: () => (/* binding */ actualTaxes),
/* harmony export */   commonItem: () => (/* binding */ commonItem),
/* harmony export */   economy: () => (/* binding */ economy),
/* harmony export */   economyBase: () => (/* binding */ economyBase),
/* harmony export */   economyBonus: () => (/* binding */ economyBonus),
/* harmony export */   prodBonus: () => (/* binding */ prodBonus),
/* harmony export */   prodCurrent: () => (/* binding */ prodCurrent),
/* harmony export */   prodMax: () => (/* binding */ prodMax),
/* harmony export */   tradeBonus: () => (/* binding */ tradeBonus),
/* harmony export */   tradeCurrent: () => (/* binding */ tradeCurrent),
/* harmony export */   tradeMax: () => (/* binding */ tradeMax),
/* harmony export */   uncommonItem: () => (/* binding */ uncommonItem)
/* harmony export */ });
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");
/* harmony import */ var _safetyStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safetyStats */ "./src/safetyStats.js");
/* harmony import */ var _survivalStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survivalStats */ "./src/survivalStats.js");
/* harmony import */ var _weekLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekLog */ "./src/weekLog.js");






let economy = {
    Base: 0,
    Adjusted: 0,
    Rating: 0,
    Bonus: 0,
    tradeB: 0,
    tradeC: 6,
    tradeM: 0,
    prodB: 0,
    prodC: 4,
    prodM: 0,
    taxInc: 0,
    taxDec: 0,
}

function economyBase() {
    let a = 0;
    let b = 0;

    if(economy.tradeC > economy.tradeM) {
        a = economy.tradeM;
    } else a = economy.tradeC;

    if(economy.prodC > economy.prodM) {
        b = economy.prodM;
    } else b = economy.prodC;

    economy.Base = (((a + b) / _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level) * (_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.currentHealth / _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.maxHealth)).toFixed(1);
    return economy.Base;
}

function economyBonus(i) {
    economy.Bonus += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.economy += parseInt(i);
    tradeCurrent(i);
    prodCurrent(i);
    tradeMax();
    prodMax();
}

function tradeBonus(i) {
    economy.tradeB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.tradeB += parseInt(i);
    tradeCurrent(i);
    tradeMax();
}

function tradeCurrent(i) {
    economy.tradeC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.trade += parseInt(i);
}

function tradeMax() {
    economy.tradeM = ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 5) + economy.Bonus + economy.tradeB);
}

function prodBonus(i) {
    economy.prodB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.prodB += parseInt(i);
    prodCurrent(i)
    prodMax();
}

function prodCurrent(i) {
    economy.prodC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.prod += parseInt(i);
}

function prodMax() {
    economy.prodM =  ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 2) + economy.Bonus + economy.prodB)
}

function actualTaxes() {
    let i = (0,_settlementStats__WEBPACK_IMPORTED_MODULE_0__.baseTaxes)();
    return (i*1.05).toFixed(0);
}

function commonItem() {
    return _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level; 
}

function uncommonItem() {
    return _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level - 2;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _overviewRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overviewRender */ "./src/overviewRender.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taxRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxRender */ "./src/taxRender.js");
/* harmony import */ var _shopWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopWindow */ "./src/shopWindow.js");
/* harmony import */ var _projectBoxRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectBoxRender */ "./src/projectBoxRender.js");
/* harmony import */ var _renderBuildings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderBuildings */ "./src/renderBuildings.js");
/* harmony import */ var _weekLog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weekLog */ "./src/weekLog.js");












(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_taxRender__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopWindow)();
(0,_projectBoxRender__WEBPACK_IMPORTED_MODULE_5__.projectBoxRender)();
(0,_renderBuildings__WEBPACK_IMPORTED_MODULE_6__.renderBuildings)();
(0,_weekLog__WEBPACK_IMPORTED_MODULE_7__.renderWeeks)();

/***/ }),

/***/ "./src/newEvent.js":
/*!*************************!*\
  !*** ./src/newEvent.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newEvent)
/* harmony export */ });
/* harmony import */ var _compileEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compileEvent */ "./src/compileEvent.js");
/* harmony import */ var _overviewRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overviewRender */ "./src/overviewRender.js");
/* harmony import */ var _projectBoxRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectBoxRender */ "./src/projectBoxRender.js");
/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjects */ "./src/renderProjects.js");
/* harmony import */ var _taxRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxRender */ "./src/taxRender.js");






let costCount = 0; 
let impactCount = 0;

function newEvent() {
    let wrapper = document.querySelector('#projectManagement');
    wrapper.innerHTML = "";
    wrapper.style = "box-sizing: border-box; width: 100%; height: 100%";

    let header = document.createElement('div');
    header.textContent = "New Event";
    header.style = "display: flex; justify-content: center; align-items: center; background: rgba(200,120,120,.3);";
    wrapper.appendChild(header);

    let nameBox = document.createElement('div');
    nameBox.style = "padding: .5rem; background: aliceblue; height: 10%; align-items: center; display: flex;"
    let nameEntry = document.createElement('input');
    nameEntry.type = 'text';
    nameEntry.placeholder = "Event Name";
    nameEntry.style = "width: 95%;"
    nameEntry.id = "eventName";
    nameBox.appendChild(nameEntry);
    wrapper.appendChild(nameBox);

    let secondRow = document.createElement('div');
    secondRow.style = 'display: flex; height: 10%; align-items: center; background: aliceblue'

    let bigTypeBox = document.createElement('div');
    bigTypeBox.style = "display: flex; width: 50%; background: aliceblue"
    let typeHeader = document.createElement('div');
    typeHeader.style = 'display: flex; justify-content: start; align-items: center; width: 14.5%; font-size: 16px; margin-left: .5rem'
    typeHeader.textContent = "Type";
    bigTypeBox.appendChild(typeHeader);

    let typeBox = document.createElement('div');
    typeBox.style = "padding: .5rem 0 .5rem .5rem; width: 67%"

    let typeSelect = document.createElement('select');
    typeSelect.style = "width: 100%; font-size: 16px"
    typeSelect.id = "eventType";

    let immediate = document.createElement('option');
    immediate.value = "Immediate";
    immediate.textContent = "Immediate"
    typeSelect.appendChild(immediate);

    let active = document.createElement('option');
    active.value = "Active";
    active.textContent = "Active";
    typeSelect.appendChild(active);

    let passive = document.createElement('option');
    passive.value = "Passive";
    passive.textContent = "Passive";
    typeSelect.appendChild(passive);

    let indefinite = document.createElement('option');
    indefinite.value = "Indefinite";
    indefinite.textContent = "Indefinite";
    typeSelect.appendChild(indefinite);
    typeBox.appendChild(typeSelect);
    bigTypeBox.appendChild(typeBox);
    secondRow.appendChild(bigTypeBox);

    let bigTimeBox = document.createElement('div');
    bigTimeBox.style = 'display: flex; gap: 4px; justify-content: center; align-items: center; padding: .5; width: 50%; box-sizing: border-box; background: aliceblue; padding-left: .5rem'
    let timeBox = document.createElement('div');
    timeBox.style = 'display: none';
    let timeValBox = document.createElement('div');
    timeValBox.style = 'display: none'
    let timeVal = document.createElement('input');
    timeVal.type = 'number';   
    timeVal.style = "width: 25%; font-size: 16px;" 
    timeVal.id = "eventTimeVal"
    timeValBox.appendChild(timeVal);
    bigTimeBox.appendChild(timeBox);
    bigTimeBox.appendChild(timeValBox);
    secondRow.appendChild(bigTimeBox);
    wrapper.appendChild(secondRow);

    let contentBox = document.createElement('div');
    contentBox.style.height = ('33.25%');
    contentBox.style.background = "aliceblue";
    contentBox.style.display = "flex";

    let leftBox = document.createElement('div');
    leftBox.style = "width: 50%;"
    leftBox.id = "leftBox";    

    let componentHeader = document.createElement('div');
    componentHeader.textContent = "Event Costs";
    componentHeader.style = "display: flex; justify-content: center; align-items: center; font-size: 18px"
    leftBox.appendChild(componentHeader);

    leftBox.appendChild(createComponent());


    contentBox.appendChild(leftBox);


    let rightBox = document.createElement('div');
    rightBox.style = "width: 50%;"
    rightBox.id = 'rightBox';

    let impactHeader = document.createElement('div');
    impactHeader.textContent = "Event Changes";
    impactHeader.style = "display: flex; justify-content: center; align-items: center; font-size: 18px"
    rightBox.appendChild(impactHeader);

    rightBox.appendChild(createImpact())

    contentBox.appendChild(rightBox);    
    wrapper.appendChild(contentBox);

    let dBox = document.createElement('div');
    dBox.style = "background: aliceblue; padding: .5rem; height: 25.25%;";

    let description = document.createElement('textarea')
    description.style = "height: 100%; width: 100%; font-size: 16px; resize: none; overflow-y: auto;"
    description.placeholder = "Enter a description for the event";
    description.id = "eventDetails";
    dBox.appendChild(description);
    wrapper.appendChild(dBox);

    let buttonRow = document.createElement('div');
    buttonRow.style = "display: flex; justify-content: space-evenly; align-items: center; background: aliceblue; height: 10%;"; 

    let confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm Event';
    confirmBtn.style = "font-size: 16px;"
    buttonRow.appendChild(confirmBtn);
    confirmBtn.addEventListener('click', () => {
        (0,_compileEvent__WEBPACK_IMPORTED_MODULE_0__.compileEvent)();
        (0,_projectBoxRender__WEBPACK_IMPORTED_MODULE_2__.projectBoxRender)();
        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_taxRender__WEBPACK_IMPORTED_MODULE_4__["default"])();
    })

    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel Event';
    cancelBtn.style = 'font-size: 16px;'
    buttonRow.appendChild(cancelBtn);
    cancelBtn.addEventListener('click', () => {
        costCount = 0;
        impactCount = 0;
        (0,_projectBoxRender__WEBPACK_IMPORTED_MODULE_2__.projectBoxRender)();
    })

    wrapper.appendChild(buttonRow);

    typeSelect.addEventListener('change', () => {
        if(typeSelect.value == 'Immediate' || typeSelect.value == 'Indefinite') {
            timeBox.style = 'display: none';
            timeValBox.style = 'display: none';

        } else if(typeSelect.value == "Active") {
            timeBox.textContent = "Productivity Required:"
            timeBox.style = 'font-size: 16px; display: flex; justify-content: start; width: 85%'
            timeValBox.style = "font-size: 16px; display: flex; padding: .15rem; box-sizing: border-box; justify-content: center;";
            
        } else if(typeSelect.value == "Passive") {
            timeBox.textContent = "Weeks Remaining:"
            timeBox.style = 'font-size: 16px; display: flex; justify-content: start; width: 85%'
            timeValBox.style = "font-size: 16px; display: flex; padding: .15rem; box-sizing: border-box; justify-content: center;";
        } 
    })
}

function createComponent() {
    costCount++;

    let compBox = document.createElement('div');
    compBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center"

    let compRow = document.createElement('div');
    compRow.style = "display: flex; margin-left: .5rem;";

    let num = document.createElement('input');
    num.type = 'number';
    num.style = "width: 15%; font-size: 16px; text-align: center"
    num.classList.add('eventCompVal');
    compRow.appendChild(num); 

    let item = document.createElement('select');
    item.style = "width: 70%; font-size: 16px;"
    item.classList.add('eventCompItem')

    let selectItem = document.createElement('option');
    selectItem.value = 'none';
    selectItem.textContent = "Select Component";
    item.appendChild(selectItem);

    let food = document.createElement('option');
    food.value = "food";
    food.textContent = "Food";
    item.appendChild(food);

    let supplies = document.createElement('option');
    supplies.value = "supplies";
    supplies.textContent = "Supplies";
    item.appendChild(supplies);

    let med = document.createElement('option');
    med.value = "med";
    med.textContent = "Medical Capacity";
    item.appendChild(med);

    let di = document.createElement('option');
    di.value = "di";
    di.textContent = "Defensive Infrastructure";
    item.appendChild(di);

    let intel = document.createElement('option');
    intel.value = "intel";  
    intel.textContent = "Intelligence";
    item.appendChild(intel);

    let gar = document.createElement('option');
    gar.value = "gar";
    gar.textContent = "Garrison";
    item.appendChild(gar);

    let trade = document.createElement('option');
    trade.value = "trade";
    trade.textContent = "Trade";
    item.appendChild(trade);

    let prod = document.createElement('option');
    prod.value = "prod";
    prod.textContent = "Productivity";
    item.appendChild(prod);

    let gold = document.createElement('option');
    gold.value = "gold";
    gold.textContent = "Gold";
    item.appendChild(gold);

    compRow.appendChild(item);

    if(costCount > 1) {
    let cancelBtn = document.createElement('button');
    cancelBtn.style = 'height: 28px; border-radius: 1rem; font-size: 16px; border: none; background: none; ;'
    cancelBtn.textContent = "x";
    compRow.appendChild(cancelBtn);

    cancelBtn.addEventListener('click', () => {
        cancelBtn.parentElement.remove();
        costCount--
    })
}

    compBox.appendChild(compRow);
    
    let plus = document.createElement('button');
    plus.textContent = '+';
    plus.style = "background: none; border: none"
    plus.addEventListener('click', () => {
        let wrapper = document.querySelector('#leftBox');
        wrapper.appendChild(createComponent());
        plus.remove();
    })

    compBox.appendChild(plus);

    return compBox;

}

function createImpact() {
    impactCount++;

    let compBox = document.createElement('div');
    compBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center"

    let compRow = document.createElement('div');
    compRow.style = "display: flex; margin-left: .5rem;";

    let num = document.createElement('input');
    num.type = 'number';
    num.style = "width: 15%; font-size: 16px; text-align: center"
    num.classList.add('eventImpactVal');
    compRow.appendChild(num); 

    let item = document.createElement('select');
    item.style = "width: 70%; font-size: 16px;"
    item.classList.add('eventImpactItem');

    let selectItem = document.createElement('option');
    selectItem.value = 'none';
    selectItem.textContent = "Select Component";
    item.appendChild(selectItem);

    let survival = document.createElement('option');
    survival.value = "survival";
    survival.textContent = "Survival Mod";
    item.appendChild(survival);

    let food = document.createElement('option');
    food.value = "food";
    food.textContent = "Food Mod";
    item.appendChild(food);

    let supplies = document.createElement('option');
    supplies.value = "supplies";
    supplies.textContent = "Supplies Mod";
    item.appendChild(supplies);

    let med = document.createElement('option');
    med.value = "med";
    med.textContent = "Medical Capacity Mod";
    item.appendChild(med);

    let safety = document.createElement('option');
    safety.value = "safety";
    safety.textContent = "Safety Mod";
    item.appendChild(safety);

    let di = document.createElement('option');
    di.value = "di";
    di.textContent = "Defensive Infrastructure Mod";
    item.appendChild(di);

    let intel = document.createElement('option');
    intel.value = "intel";  
    intel.textContent = "Intelligence Mod";
    item.appendChild(intel);

    let gar = document.createElement('option');
    gar.value = "gar";
    gar.textContent = "Garrison Mod";
    item.appendChild(gar);

    let economy = document.createElement('option');
    economy.value = "economy";
    economy.textContent = "Economy Mod";
    item.appendChild(economy);

    let trade = document.createElement('option');
    trade.value = "trade";
    trade.textContent = "Trade Mod";
    item.appendChild(trade);

    let prod = document.createElement('option');
    prod.value = "prod";
    prod.textContent = "Productivity Mod";
    item.appendChild(prod);

    let maxHealth = document.createElement('option');
    maxHealth.value = "maxHealth";
    maxHealth.textContent = "Max Health";
    item.appendChild(maxHealth);

    let level = document.createElement('option');
    level.value = "level";
    level.textContent = "Level";
    item.appendChild(level);

    let sp = document.createElement('option');
    sp.value = "sp";
    sp.textContent = "Settlement Points";
    item.appendChild(sp);

    compRow.appendChild(item);

    if(impactCount > 1) {
    let cancelBtn = document.createElement('button');
    cancelBtn.style = 'height: 28px; border-radius: 1rem; font-size: 16px; border: none; background: none; ;'
    cancelBtn.textContent = "x";
    compRow.appendChild(cancelBtn);

    cancelBtn.addEventListener('click', () => {
        cancelBtn.parentElement.remove();
        costCount--
    })
}
    compBox.appendChild(compRow);

    let plus = document.createElement('button');
    plus.textContent = '+';
    plus.style = "background: none; border: none"
    plus.addEventListener('click', () => {
        let wrapper = document.querySelector('#rightBox');
        wrapper.appendChild(createImpact());
        plus.remove();
    })

    compBox.appendChild(plus);

    return compBox;

}

/***/ }),

/***/ "./src/overviewRender.js":
/*!*******************************!*\
  !*** ./src/overviewRender.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ overviewRender)
/* harmony export */ });
/* harmony import */ var _settlementStats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlementStats.js */ "./src/settlementStats.js");
/* harmony import */ var _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survivalStats.js */ "./src/survivalStats.js");
/* harmony import */ var _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safetyStats.js */ "./src/safetyStats.js");
/* harmony import */ var _economyStats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./economyStats.js */ "./src/economyStats.js");
/* harmony import */ var _buildingsStats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildingsStats.js */ "./src/buildingsStats.js");
/* harmony import */ var _projectBoxRender_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectBoxRender.js */ "./src/projectBoxRender.js");







function overviewRender() {


//overview Side
let overviewCol = document.querySelector("#overview");
overviewCol.innerHTML = "";

//creating settlement info header
let nameLevel = document.createElement('div');
nameLevel.style = "display: flex; justify-content: space-around; height: 85px"

let info = document.createElement('div');
info.style = "display: flex; flex-direction: column; width: 50%;";

let name = document.createElement('input');
name.id = "settlementName"
name.type = 'text';
name.placeholder = "Enter Settlement Name";
name.value = _settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.name;
name.addEventListener('change', () => {
    _settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.name = name.value;
})
info.appendChild(name);

let levelBox = document.createElement('div');
levelBox.style = "display: flex; gap: .5rem;"

let levelLabel = document.createElement('div');
levelLabel.textContent = "Level";
levelBox.appendChild(levelLabel);

let levelValue = document.createElement('div');
levelValue.textContent = _settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.level;
levelBox.appendChild(levelValue);

//type unlocked at level 4
let settlementType = document.createElement('div');
settlementType.textContent = _settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.type;
if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.type != "") {
    levelBox.appendChild(settlementType);
}

let settlementLabel = document.createElement('div');
settlementLabel.textContent = "Settlement";
levelBox.appendChild(settlementLabel);
info.appendChild(levelBox);

nameLevel.appendChild(info);

let spBox = document.createElement('div');
spBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%";

let spVal = document.createElement('div');
spVal.id = "settlementPoints";
spVal.textContent = _settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints;
spBox.appendChild(spVal);

let spLabel = document.createElement('div');
spLabel.textContent = "Settlement Points";
spBox.appendChild(spLabel);

nameLevel.appendChild(spBox);

overviewCol.appendChild(nameLevel);

////////SURVIVAL SCORE BOX////////
let survivalBox = document.createElement('div');
survivalBox.style = "display: flex; flex-direction: column";
survivalBox.id = "surBox"

let surHeader = document.createElement('div');
surHeader.style = 'display: flex; gap: 1rem;';

let survivalLabel = document.createElement('div');
survivalLabel.textContent = "Survival Rating:";
surHeader.appendChild(survivalLabel);

let surRating = document.createElement('div');
surRating.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.Rating;
surHeader.appendChild(surRating);

////////SURVIVAL BONUS/////////
let surBonusBox = document.createElement('div');
surBonusBox.style = "display: flex;"

let surPM = document.createElement('div');
if(_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.Bonus >= 0) {
    surPM.textContent = "+"
} else {
    surPM.textContent = "";
};
surBonusBox.appendChild(surPM);

let surB = document.createElement('div');
surB.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.Bonus;
surBonusBox.appendChild(surB);
surHeader.appendChild(surBonusBox);

survivalBox.appendChild(surHeader);

////////SURVIVAL COMPONENTS////////
///////SURVIVAL COMPONENT LABELS////////
let surCLRow = document.createElement('div');
surCLRow.style = "display: flex;";

let surComp = document.createElement('div');
surComp.textContent = "Component";
surComp.classList.add('component');
surCLRow.appendChild(surComp);

let surCB = document.createElement('div');
surCB.textContent = "Bonus";
surCB.classList.add('compScore');
surCLRow.appendChild(surCB);

let surCC = document.createElement('div');
surCC.textContent = "Current";
surCC.classList.add('compScore');
surCLRow.appendChild(surCC);

let surCM = document.createElement('div');
surCM.textContent = "Max";
surCM.classList.add('compScore');
surCLRow.appendChild(surCM);

survivalBox.appendChild(surCLRow);

////////FOOD COMPONENT/////////
let foodRow = document.createElement('div');
foodRow.style = "display: flex;";

let foodLabel = document.createElement('div');
foodLabel.classList.add('glosBtn','component');
foodLabel.textContent = "Food";
foodRow.appendChild(foodLabel);

let foodB = document.createElement('div');
foodB.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.foodB;
foodB.classList.add('compScore')
foodRow.appendChild(foodB);

let foodCPair = document.createElement('div');
foodCPair.style = "display: flex";
foodCPair.classList.add('compScore');

let foodC = document.createElement('div');
foodC.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.foodC;
foodCPair.appendChild(foodC);

let foodSP = document.createElement('button');
foodSP.classList.add('SPBuyBtn');
foodSP.textContent = "+";
foodSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 0) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(1);
        (0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.foodCurrent)(1);
        overviewRender();
    }
});
foodCPair.appendChild(foodSP);

foodRow.appendChild(foodCPair);

let foodM = document.createElement('div');
(0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.foodMax)();
foodM.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.foodM;
foodM.classList.add('compScore');
foodRow.appendChild(foodM);

survivalBox.appendChild(foodRow);

////////SUPPLIES COMPONENT////////
let supRow = document.createElement('div');
supRow.style = "display: flex;" ;

let supLabel = document.createElement('div');
supLabel.classList.add('glosBtn','component');
supLabel.textContent = "General Supplies";
supRow.appendChild(supLabel);

let supB = document.createElement('div');
supB.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.supB;
supB.classList.add('compScore')
supRow.appendChild(supB);

let supCPair = document.createElement('div');
supCPair.style = "display: flex";
supCPair.classList.add('compScore')

let supC = document.createElement('div');
supC.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.supC;
supCPair.appendChild(supC);

let supSP = document.createElement('button');
supSP.classList.add('SPBuyBtn');
supSP.textContent = "+";
supSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 1) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(2);
        (0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.supCurrent)(1);
        overviewRender();
    }
});
supCPair.appendChild(supSP);

supRow.appendChild(supCPair);

let supM = document.createElement('div');
(0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.supMax)();
supM.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.supM;
supM.classList.add('compScore')
supRow.appendChild(supM);

survivalBox.appendChild(supRow);

////////MEDICAL CAPACITY COMPONENT////////
let medRow = document.createElement('div');
medRow.style = "display: flex;";

let medLabel = document.createElement('div');
medLabel.classList.add('glosBtn','component');
medLabel.textContent = "Medical Capacity";
medRow.appendChild(medLabel);

let medB = document.createElement('div');
medB.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.medB;
medB.classList.add('compScore')
medRow.appendChild(medB);

let medCPair = document.createElement('div');
medCPair.style = "display: flex";
medCPair.classList.add('compScore')

let medC = document.createElement('div');
medC.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.medC;
medCPair.appendChild(medC);

let medSP = document.createElement('button');
medSP.classList.add('SPBuyBtn');
medSP.textContent = "+";
medSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 2) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(3);
        (0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.medCurrent)(1);
        overviewRender();
    }
});
medCPair.appendChild(medSP);

medRow.appendChild(medCPair);

let medM = document.createElement('div');
(0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.medMax)();
medM.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.medM;
medM.classList.add('compScore')
medRow.appendChild(medM);

survivalBox.appendChild(medRow);

let surScoreBox = document.createElement('div');
surScoreBox.classList.add('scoreBox')

let surBBox = document.createElement('div');
surBBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let surBScore = document.createElement('div');
surBScore.textContent = (0,_survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survivalBase)();
surBBox.appendChild(surBScore);

let surBLabel = document.createElement('div');
surBLabel.textContent = "Base Score";
surBBox.appendChild(surBLabel);
surScoreBox.appendChild(surBBox);

let surABox = document.createElement('div');
surABox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let surAScore = document.createElement('div');
surAScore.textContent = _survivalStats_js__WEBPACK_IMPORTED_MODULE_1__.survival.Adjusted;
surABox.appendChild(surAScore);

let surALabel = document.createElement('div');
surALabel.textContent = "Adjusted Score";
surABox.appendChild(surALabel);
surScoreBox.appendChild(surABox);

survivalBox.appendChild(surScoreBox);

overviewCol.appendChild(survivalBox);

////////SAFETY SCORE BOX////////
let safetyBox = document.createElement('div');
safetyBox.style = "display: flex; flex-direction: column";
safetyBox.id = "safBox"

let safHeader = document.createElement('div');
safHeader.style = 'display: flex; gap: 1rem;';

let safetyLabel = document.createElement('div');
safetyLabel.textContent = "Safety Rating:"
safHeader.appendChild(safetyLabel);

let safRating = document.createElement('div');
safRating.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.Rating;
safHeader.appendChild(safRating);

////////SAFETY BONUS/////////
let safBonusBox = document.createElement('div');
safBonusBox.style = "display: flex;"

let safPM = document.createElement('div');
if(_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.Bonus >= 0) {
    safPM.textContent = "+"
} else {
    safPM.textContent = "";
};
safBonusBox.appendChild(safPM);

let safB = document.createElement('div');
safB.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.Bonus;
safBonusBox.appendChild(safB);
safHeader.appendChild(safBonusBox);

safetyBox.appendChild(safHeader);



////////SAFETY COMPONENTS////////
///////SAFETY COMPONENT LABELS////////
let safCLRow = document.createElement('div');
safCLRow.style = "display: flex;";

let safComp = document.createElement('div');
safComp.textContent = "Component";
safComp.classList.add('component');
safCLRow.appendChild(safComp);

let safCB = document.createElement('div');
safCB.textContent = "Bonus";
safCB.classList.add('compScore');
safCLRow.appendChild(safCB);

let safCC = document.createElement('div');
safCC.textContent = "Current";
safCC.classList.add('compScore');
safCLRow.appendChild(safCC);

let safCM = document.createElement('div');
safCM.textContent = "Max";
safCM.classList.add('compScore');
safCLRow.appendChild(safCM);

safetyBox.appendChild(safCLRow);

////////DEFENSIVE INFRASTRUCTURE COMPONENT/////////
let diRow = document.createElement('div');
diRow.style = "display: flex;";

let diLabel = document.createElement('div');
diLabel.classList.add('glosBtn','component');
diLabel.textContent = "Defensive Infrastructure";
diRow.appendChild(diLabel);

let diB = document.createElement('div');
diB.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.diB;
diB.classList.add('compScore');
diRow.appendChild(diB);

let diCPair = document.createElement('div');
diCPair.style = "display: flex";
diCPair.classList.add('compScore');

let diC = document.createElement('div');
diC.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.diC;
diCPair.appendChild(diC);

let diSP = document.createElement('button');
diSP.classList.add('SPBuyBtn');
diSP.textContent = "+";
diSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 1) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(2);
        (0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.diCurrent)(1);
        overviewRender();
    }
});
diCPair.appendChild(diSP);

diRow.appendChild(diCPair);

let diM = document.createElement('div');
(0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.diMax)();
diM.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.diM;
diM.classList.add('compScore');
diRow.appendChild(diM);

safetyBox.appendChild(diRow);

////////INTEL COMPONENT////////
let intelRow = document.createElement('div');
intelRow.style = "display: flex;";

let intelLabel = document.createElement('div');
intelLabel.classList.add('glosBtn','component');
intelLabel.textContent = "Intelligence";
intelRow.appendChild(intelLabel);

let intelB = document.createElement('div');
intelB.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.intelB;
intelB.classList.add('compScore');
intelRow.appendChild(intelB);

let intelCPair = document.createElement('div');
intelCPair.style = "display: flex";
intelCPair.classList.add('compScore');

let intelC = document.createElement('div');
intelC.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.intelC;
intelCPair.appendChild(intelC);

let intelSP = document.createElement('button');
intelSP.classList.add('SPBuyBtn');
intelSP.textContent = "+";
intelSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 1) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(2);
        (0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.intelCurrent)(1);
        overviewRender()
    }
});
intelCPair.appendChild(intelSP);

intelRow.appendChild(intelCPair);

let intelM = document.createElement('div');
(0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.intelMax)();
intelM.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.intelM;
intelM.classList.add('compScore');
intelRow.appendChild(intelM);

safetyBox.appendChild(intelRow);

////////GARRISON COMPONENT////////
let garRow = document.createElement('div');
garRow.style = "display: flex; ";

let garLabel = document.createElement('div');
garLabel.classList.add('glosBtn','component');
garLabel.textContent = "Garrison";
garRow.appendChild(garLabel);

let garB = document.createElement('div');
garB.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.garB;
garB.classList.add('compScore');
garRow.appendChild(garB);

let garCPair = document.createElement('div');
garCPair.style = "display: flex";
garCPair.classList.add('compScore');

let garC = document.createElement('div');
garC.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.garC;
garCPair.appendChild(garC);

let garSP = document.createElement('button');
garSP.classList.add('SPBuyBtn');
garSP.textContent = "+";
garSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 2) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(3);
        (0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.garCurrent)(1);
        overviewRender();
        
    }
});
garCPair.appendChild(garSP);

garRow.appendChild(garCPair);

let garM = document.createElement('div');
(0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.garMax)();
garM.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.garM;
garM.classList.add('compScore');
garRow.appendChild(garM);

safetyBox.appendChild(garRow);

let safScoreBox = document.createElement('div');
safScoreBox.classList.add('scoreBox')

let safBBox = document.createElement('div');
safBBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let safBScore = document.createElement('div');
safBScore.textContent = (0,_safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safetyBase)();
safBBox.appendChild(safBScore);

let safBLabel = document.createElement('div');
safBLabel.textContent = "Base Score";
safBBox.appendChild(safBLabel);
safScoreBox.appendChild(safBBox);

let safABox = document.createElement('div');
safABox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let safAScore = document.createElement('div');
safAScore.textContent = _safetyStats_js__WEBPACK_IMPORTED_MODULE_2__.safety.Adjusted;
safABox.appendChild(safAScore);

let safALabel = document.createElement('div');
safALabel.textContent = "Adjusted Score";
safABox.appendChild(safALabel);
safScoreBox.appendChild(safABox);

safetyBox.appendChild(safScoreBox);

overviewCol.appendChild(safetyBox);

////////ECONOMY SCORE BOX////////
let economyBox = document.createElement('div');
economyBox.style = "display: flex; flex-direction: column";
economyBox.id = 'econBox'

let econHeader = document.createElement('div');
econHeader.style = 'display: flex; gap: 1rem;';

let economyLabel = document.createElement('div');
economyLabel.textContent = "Economy Rating:"
econHeader.appendChild(economyLabel);

let econRating = document.createElement('div');
econRating.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.Rating;
econHeader.appendChild(econRating);

////////economy BONUS/////////
let econBonusBox = document.createElement('div');
econBonusBox.style = "display: flex;"

let econPM = document.createElement('div');
if(_economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.Bonus >= 0) {
    econPM.textContent = "+"
} else {
    econPM.textContent = "";
};
econBonusBox.appendChild(econPM);

let econB = document.createElement('div');
econB.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.Bonus;
econBonusBox.appendChild(econB);
econHeader.appendChild(econBonusBox);

economyBox.appendChild(econHeader);

////////ECONOMY COMPONENTS////////
///////ECONOMY COMPONENT LABELS////////
let econCLRow = document.createElement('div');
econCLRow.style = "display: flex;";

let econComp = document.createElement('div');
econComp.textContent = "Component";
econComp.classList.add('component');
econCLRow.appendChild(econComp);

let econCB = document.createElement('div');
econCB.textContent = "Bonus";
econCB.classList.add('compScore');
econCLRow.appendChild(econCB);

let econCC = document.createElement('div');
econCC.textContent = "Current";
econCC.classList.add('compScore');
econCLRow.appendChild(econCC);

let econCM = document.createElement('div');
econCM.textContent = "Max";
econCM.classList.add('compScore');
econCLRow.appendChild(econCM);

economyBox.appendChild(econCLRow);

////////TRADE COMPONENT/////////
let tradeRow = document.createElement('div');
tradeRow.style = "display: flex;";

let tradeLabel = document.createElement('div');
tradeLabel.classList.add('glosBtn','component');
tradeLabel.textContent = "Trade";
tradeRow.appendChild(tradeLabel);

let tradeB = document.createElement('div');
tradeB.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.tradeB;
tradeB.classList.add('compScore');
tradeRow.appendChild(tradeB);

let tradeCPair = document.createElement('div');
tradeCPair.style = "display: flex";
tradeCPair.classList.add('compScore');

let tradeC = document.createElement('div');
tradeC.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.tradeC;
tradeCPair.appendChild(tradeC);

let tradeSP = document.createElement('button');
tradeSP.classList.add('SPBuyBtn');
tradeSP.textContent = "+";
tradeSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 1) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(2);
        (0,_economyStats_js__WEBPACK_IMPORTED_MODULE_3__.tradeCurrent)(1);
        overviewRender();
    }
});
tradeCPair.appendChild(tradeSP);

tradeRow.appendChild(tradeCPair);

let tradeM = document.createElement('div');
(0,_economyStats_js__WEBPACK_IMPORTED_MODULE_3__.tradeMax)();
tradeM.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.tradeM;
tradeM.classList.add('compScore');
tradeRow.appendChild(tradeM);

economyBox.appendChild(tradeRow);

////////PRODUCTIVITY COMPONENT////////
let prodRow = document.createElement('div');
prodRow.style = "display: flex;";

let prodLabel = document.createElement('div');
prodLabel.classList.add('glosBtn','component');
prodLabel.textContent = "Productivity";
prodRow.appendChild(prodLabel);

let prodB = document.createElement('div');
prodB.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.prodB;
prodB.classList.add('compScore');
prodRow.appendChild(prodB);

let prodCPair = document.createElement('div');
prodCPair.style = "display: flex";
prodCPair.classList.add('compScore');

let prodC = document.createElement('div');
prodC.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.prodC;
prodCPair.appendChild(prodC);

let prodSP = document.createElement('button');
prodSP.classList.add('SPBuyBtn');
prodSP.textContent = "+";
prodSP.addEventListener('click', () => {
    if(_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.settlement.settlementPoints > 1) {
        (0,_settlementStats_js__WEBPACK_IMPORTED_MODULE_0__.spend)(2);
        (0,_economyStats_js__WEBPACK_IMPORTED_MODULE_3__.prodCurrent)(1);
        overviewRender();
        if(document.querySelector('#prodAvailValue') != undefined) {
        document.querySelector('#prodAvailValue').textContent = (0,_projectBoxRender_js__WEBPACK_IMPORTED_MODULE_5__.calcWorkers)();
        }
    }
});
prodCPair.appendChild(prodSP);

prodRow.appendChild(prodCPair);

let prodM = document.createElement('div');
(0,_economyStats_js__WEBPACK_IMPORTED_MODULE_3__.prodMax)();
prodM.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.prodM;
prodM.classList.add('compScore');
prodRow.appendChild(prodM);

economyBox.appendChild(prodRow);

let econScoreBox = document.createElement('div');
econScoreBox.classList.add('scoreBox')

let econBBox = document.createElement('div');
econBBox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let econBScore = document.createElement('div');
econBScore.textContent = (0,_economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economyBase)();
econBBox.appendChild(econBScore);

let econBLabel = document.createElement('div');
econBLabel.textContent = "Base Score";
econBBox.appendChild(econBLabel);
econScoreBox.appendChild(econBBox);

let econABox = document.createElement('div');
econABox.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;"

let econAScore = document.createElement('div');
econAScore.textContent = _economyStats_js__WEBPACK_IMPORTED_MODULE_3__.economy.Adjusted;
econABox.appendChild(econAScore);

let econALabel = document.createElement('div');
econALabel.textContent = "Adjusted Score";
econABox.appendChild(econALabel);
econScoreBox.appendChild(econABox);

economyBox.appendChild(econScoreBox);

let tax = document.createElement('div');
tax.id = 'taxBox';


overviewCol.appendChild(economyBox);


wrapper.appendChild(overviewCol);






}

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {

let body = document.querySelector("body");


let wrapper = document.createElement('div');
wrapper.id = "wrapper";
wrapper.style = "display: grid; grid-template-columns: 30% 70%; margin: 2rem; box-sizing: border-box; padding: 1rem;"

//overview Side
let overviewCol = document.createElement('div');
overviewCol.style = "border-top: 3px solid black; border-left: 3px solid black; border-bottom: 3px solid black; display: flex; flex-direction: column; grid-area: 1/1/2/2";
overviewCol.id = "overview";

wrapper.appendChild(overviewCol);

let management = document.createElement('div');
management.style = "display: grid; grid-template: 1fr 1fr / 1fr 1fr; grid-area:1/2/2/3; box-sizing: border-box; border: 3px solid black"

let taxBuy = document.createElement('div');
taxBuy.style = "display: flex;"
let tax = document.createElement('div');
tax.id = "taxBox";
taxBuy.appendChild(tax);

let buy = document.createElement('div');
buy.id = "buyBox";
taxBuy.appendChild(buy);
management.appendChild(taxBuy);

let projectManagement = document.createElement('div');
projectManagement.id = "projectManagement";
management.appendChild(projectManagement);

let buildingUpgrades = document.createElement('div');
buildingUpgrades.id = 'buildingUpgrades'
buildingUpgrades.style = "width: 100%; height: 100%"
management.appendChild(buildingUpgrades);

let logNotes = document.createElement('div');
logNotes.id = 'logNotes';
logNotes.style = 'display: grid; grid-template-columns: 1fr 1fr;'

let log = document.createElement('div');
log.id = 'weekLog';
logNotes.appendChild(log);

let notes = document.createElement('div');
notes.id = 'notes';
logNotes.appendChild(notes); 

management.appendChild(logNotes);

wrapper.appendChild(management);

body.appendChild(wrapper);

}

/***/ }),

/***/ "./src/projectBoxRender.js":
/*!*********************************!*\
  !*** ./src/projectBoxRender.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcWorkers: () => (/* binding */ calcWorkers),
/* harmony export */   projectArray: () => (/* binding */ projectArray),
/* harmony export */   projectBoxRender: () => (/* binding */ projectBoxRender)
/* harmony export */ });
/* harmony import */ var _economyStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./economyStats */ "./src/economyStats.js");
/* harmony import */ var _newEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newEvent */ "./src/newEvent.js");
/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjects */ "./src/renderProjects.js");




function projectBoxRender() {
    let wrapper = document.querySelector('#projectManagement');
    wrapper.innerHTML = "";
    wrapper.style = 'width: 100%'

    let header = document.createElement('div');
    header.textContent = "Event Management";
    header.style = "height: 10%; box-sizing: border-box; display: flex; justify-content: center; align-items: center; background: gray;"
    wrapper.appendChild(header);

    let subHeader = document.createElement('div');
    subHeader.style = "display: grid; grid-template: 1fr / 2fr 1fr; place-items: center; height: 10%; box-sizing: border-box";

    let prodAvailBox = document.createElement('div');
    prodAvailBox.id = 'prodAvailBox'

    let prodAvailLabel = document.createElement('div');
    prodAvailLabel.textContent = "Productivity Available:"
    prodAvailBox.appendChild(prodAvailLabel);

    let prodAvailValue = document.createElement('div');
    prodAvailValue.id = 'prodAvailValue';
    prodAvailValue.textContent = calcWorkers();
    prodAvailBox.appendChild(prodAvailValue);
    subHeader.appendChild(prodAvailBox)

    let newProjBtn = document.createElement('button');
    newProjBtn.textContent = "New Event";
    newProjBtn.id = 'newProjBtn'
    newProjBtn.addEventListener('click', () => {
        ;(0,_newEvent__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
    subHeader.appendChild(newProjBtn);

    wrapper.appendChild(subHeader);

    let projectBox = document.createElement('div');
    projectBox.id = 'projectBox'
    projectBox.style = "height: 78%; background: aliceblue";
    wrapper.appendChild(projectBox)

    ;(0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

let activeWorkerCount = 0;

let projectArray = [];

function calcWorkers() {
    
    let num = 0; 
    if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodC > _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodM) {
        num = _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodM
    } else {
        num = _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodC;
    };
    return (num -= activeWorkerCount)

}



/***/ }),

/***/ "./src/renderBuildings.js":
/*!********************************!*\
  !*** ./src/renderBuildings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBuildings: () => (/* binding */ renderBuildings)
/* harmony export */ });
/* harmony import */ var _buildingsStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildingsStats */ "./src/buildingsStats.js");
/* harmony import */ var _renderUpgrades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderUpgrades */ "./src/renderUpgrades.js");





 function renderBuildings() {
    let wrapper = document.querySelector('#buildingUpgrades'); 
    wrapper.innerHTML = '';
    wrapper.style = 'border-right: 2px solid black'

    let headerBox = document.createElement('div');
    headerBox.style = 'display: flex; background: gray; align-items: center';

    let spacer = document.createElement('div');
    spacer.style = "width: 40%";
    headerBox.appendChild(spacer);

    let header = document.createElement('div');
    header.style = 'display: flex; align-items: center; justify-content: center; height: 9.0909%; width: 100%; background: gray; font-size: 22px';
    header.textContent = "Building Management";
    headerBox.appendChild(header);

    let upgrades = document.createElement('button');
    upgrades.style = 'width: 40%; background: rgba(240,240,255,.6); border-radius: 1rem; font-size: 14px; margin-right: .5rem'
    upgrades.textContent = "Upgrades"
    upgrades.addEventListener('click', () => {
        ;(0,_renderUpgrades__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
    headerBox.appendChild(upgrades);

    wrapper.appendChild(headerBox);


    _buildingsStats__WEBPACK_IMPORTED_MODULE_0__.buildings.forEach((bldg) => {
        let row = document.createElement('div');
        row.style = 'display: flex; align-items: center; height: 9.0909%'

        let title = document.createElement('div');
        title.textContent = bldg.name;
        title.style = 'font-size: 15px; width: 22%; padding-left: .5rem; box-sizing: border-box'
        row.appendChild(title);

        let buttonRow = document.createElement('div');
        buttonRow.style = 'width: 20%; display: flex; justify-content: space-evenly'

        let button0 = document.createElement('button')
        button0.textContent = "0";
        button0.classList.add('bldgBtn');
        button0.id = `${bldg.id}0`;
        buttonRow.appendChild(button0);

        let button1 = document.createElement('button');
        button1.textContent = "1";
        button1.classList.add('bldgBtn');
        button1.id = `${bldg.id}1`;
        buttonRow.appendChild(button1);

        let button2 = document.createElement('button');
        button2.textContent = "2";
        button2.classList.add('bldgBtn');
        button2.id = `${bldg.id}2`;
        buttonRow.appendChild(button2);

        let button3 = document.createElement('button');
        button3.textContent = "3";
        button3.classList.add('bldgBtn');
        button3.id = `${bldg.id}3`;
        buttonRow.appendChild(button3);
        row.appendChild(buttonRow);

        let statusArea = document.createElement('div');
        statusArea.textContent = bldg.status;
        statusArea.style = 'font-size: 15px'
        row.appendChild(statusArea);

        switch(bldg.level) {
            case 0: 
                button0.style = 'background: green';
                break;
            case .5: 
                button1.style = 'background: yellow';
                break;
            case 1:
                button1.style = 'background: green';
                break;
            case 1.5: 
                button2.style = 'background: yellow';
                break;
            case 2: 
                button2.style = 'background: green';
                break;
            case 2.5: 
                button3.style = 'background: yellow';
                break;
            case 3:
                button3.style = 'background: green';
    }

        wrapper.appendChild(row);
})
}





/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectBoxRender */ "./src/projectBoxRender.js");


function renderProjects() {
    let wrapper = document.querySelector('#projectBox');
    wrapper.innerHTML = "";

    _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach((event) => {        

        let eventRow = document.createElement('div');
        eventRow.classList.add('eventRow'); 

        let boxOne = document.createElement('div');
        boxOne.style = 'display:flex; width: 25%; justify-content: start; gap: 1rem; height: 32px;'

        let expandBtn = document.createElement('button');
        expandBtn.classList.add('expandBtn');
        if(event.hide == true) {
            expandBtn.innerHTML = '&#8680;'

        } else {
            expandBtn.innerHTML = '&#8681;'
        }
        
        expandBtn.addEventListener('click', () => {
            if(event.hide == true) {
                let test = event.count;
                let find = _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray.findIndex((e) => e.count == test);
                _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray[find].hide = false;
                console.log(_projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray);
                renderProjects();
            } else {
                let test = event.count;
                let find = _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray.findIndex((e) => e.count == test);
                _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray[find].hide = true;
                renderProjects();
            }
        })
        boxOne.appendChild(expandBtn);

        let title = document.createElement('div');
        title.textContent = event.name;
        title.classList.add('eventTitle');
        title.style = "font-size: 15px;"
        boxOne.appendChild(title);

        eventRow.appendChild(boxOne);

        let boxTwo = document.createElement('div');
        boxTwo.style = 'display:flex; width: 25%; justify-content: start; gap: 1rem; height: 32px;'

        let durationBox = document.createElement('div');
        durationBox.classList.add('durationBox');

        let durationLabel = document.createElement('div');

        if(event.type == 'Active') {
            durationLabel.textContent = "Productivity:"    
        } else if(event.type == 'Passive') {
            durationLabel.textContent = "Weeks Remaining:"
        } else if(event.type == "Indefinite") {
            durationLabel.textContent = "Ongoing"
        }

        durationBox.appendChild(durationLabel);

        if(event.type == 'Active' || event.type == "Passive") {
            let durationVal = document.createElement('div');
            durationVal.textContent = event.duration;
            durationBox.appendChild(durationVal);
        }

        boxTwo.appendChild(durationBox);
        eventRow.appendChild(boxTwo);

        let boxThree = document.createElement('div');
        boxThree.style = 'display:flex; width: 25%; justify-content: start; gap: 1rem; height: 32px;'

        if(event.type == 'Active') { 
            let workerBox = document.createElement('div');
            workerBox.classList.add('workerBox');

            let removeWorkerBtn = document.createElement('button');
            removeWorkerBtn.classList.add('changeWorkerBtn');
            removeWorkerBtn.textContent = '-';
            workerBox.appendChild(removeWorkerBtn);

            let workerValue = document.createElement('div');
            workerValue.textContent = event.workers;
            workerValue.classList.add('workerValue');
            workerBox.appendChild(workerValue);

            let addWorkerBtn = document.createElement('button');
            addWorkerBtn.classList.add('changeWorkerBtn');
            addWorkerBtn.textContent = '+';
            workerBox.appendChild(addWorkerBtn);

            boxThree.appendChild(workerBox);
        } else {
            
        }

        

        if(event.type == 'Indefinite' && event.hasLink == false) {
            let linkFix = document.createElement('button');
            linkFix.style = "font-size: 12px; margin-left: 10%;"
            linkFix.textContent = "Link Fix Action";
            boxThree.appendChild(linkFix);
        }

        eventRow.appendChild(boxThree);

        let boxFour = document.createElement('div');
        boxFour.style = 'display:flex; width: 25%; justify-content: space-between; gap: 1rem; height: 32px;'

        let impactBox = document.createElement('div');
        impactBox.classList.add('eventImpactBox');
        for(let i = 0; i < event.impactItems.length; i++) {
            let impactRow = document.createElement('div');
            impactRow.style = "display: flex; align-items: center; gap: 4px;"

            let num = document.createElement('div');
            num.textContent = event.impactVals[i];
            impactRow.appendChild(num);

            let item = document.createElement('div');
            item.textContent = event.impactItems[i];
            impactRow.appendChild(item);

            impactBox.appendChild(impactRow);
        }
    

        boxFour.appendChild(impactBox);

        let endBtn = document.createElement('button');
        endBtn.classList.add('endBtn')
        endBtn.textContent = 'X';
        endBtn.addEventListener('click', () => {
            let place = event.count;
            let index = _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray.findIndex((e) => e.count == place);
            _projectBoxRender__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(index,1);
            renderProjects();
        })
        boxFour.appendChild(endBtn);

        eventRow.appendChild(boxFour);

        let descriptionBox = document.createElement('div');
        descriptionBox.id = `desc${event.count}`;
        descriptionBox.style = 'width: 200%; height: 10rem; max-height: 20rem;';
        if(event.hide == true) {
            descriptionBox.classList.add('hidden','descBox');
        }

        let descriptionLabel = document.createElement('div'); 
        descriptionLabel.textContent = 'Event Description';
        descriptionLabel.style = 'display: flex; justify-content: center; align-items: center; font-size: 15px;';
        descriptionBox.appendChild(descriptionLabel);

        let details = document.createElement('textarea');
        details.value = event.details;
        details.style = 'overflow-y: scroll; resize: none; font-size: 15px; width: 98%; height: 80%'
        details.addEventListener('change', () => {
            event.details = details.value;
        });
        descriptionBox.appendChild(details);
        eventRow.appendChild(descriptionBox);


        wrapper.appendChild(eventRow);

        
    });
}


/***/ }),

/***/ "./src/renderUpgrades.js":
/*!*******************************!*\
  !*** ./src/renderUpgrades.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderUpgrades)
/* harmony export */ });
/* harmony import */ var _renderBuildings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBuildings */ "./src/renderBuildings.js");
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");



function renderUpgrades() {
    let wrapper = document.querySelector('#buildingUpgrades'); 
    wrapper.innerHTML = '';
    wrapper.style = 'border-right: 2px solid black; overflow-y: scroll'

    let headerBox = document.createElement('div');
    headerBox.style = 'display: flex; background: gray; align-items: center';

    let spacer = document.createElement('div');
    spacer.style = "width: 40%";
    headerBox.appendChild(spacer);

    let header = document.createElement('div');
    header.style = 'display: flex; align-items: center; justify-content: center; height: 9.0909%; width: 100%; background: gray; font-size: 22px';
    header.textContent = "Settlement Upgrades";
    headerBox.appendChild(header);

    let bldgs = document.createElement('button');
    bldgs.style = 'width: 40%; background: rgba(240,240,255,.6); border-radius: 1rem; font-size: 14px; margin-right: .5rem'
    bldgs.textContent = "Buildings"
    bldgs.addEventListener('click', () => {
        ;(0,_renderBuildings__WEBPACK_IMPORTED_MODULE_0__.renderBuildings)();
    })
    headerBox.appendChild(bldgs);

    wrapper.appendChild(headerBox);

    if(_settlementStats__WEBPACK_IMPORTED_MODULE_1__.settlement.level < 4) {
        let disclaimer = document.createElement('div'); 
        disclaimer.style = "display: flex; align-items: center; justify-content: center; width: 100%; height: 50%;"
        disclaimer.textContent = "Your Settlement needs to be level 4 to unlock Settlement Upgrades"
        wrapper.appendChild(disclaimer);
        return;
    }

    upgradeTree.forEach((level) => {
        if(level.value <= _settlementStats__WEBPACK_IMPORTED_MODULE_1__.settlement.level)
        {
            let header = document.createElement('div');
            header.style = 'display: flex; justify-content: center; align-items: center; width: 100%; height: 10%;';
            header.textContent = level.title;
            wrapper.appendChild(header);
            
            let row = document.createElement('div'); 
            row.style = 'display: flex; align-items: center; justify-content: space-around'
    
            level.array.forEach((upg) => {
                let btn = document.createElement('button');
                btn.style = 'background: none; border-radius: 1rem; border-bottom: 2px solid black;'
                btn.textContent = upg.name;
                btn.id = upg.id;
                row.appendChild(btn);
    
            })

            wrapper.appendChild(row);
        }
    })

}

let upgradeTree = [
    {
        value: 4,
        title: 'Level 4 - Settlement Style',
        array: [
            {
                name: 'Survivalist Settlement',
                id: 'l4c1',
            },
            {
                name: 'Defender Settlement',
                id: 'l4c2',
            },
            {
                name: 'Mercantile Settlement',
                id: 'l4c3'
            }
        ]
    }
]


/***/ }),

/***/ "./src/safetyStats.js":
/*!****************************!*\
  !*** ./src/safetyStats.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diBonus: () => (/* binding */ diBonus),
/* harmony export */   diCurrent: () => (/* binding */ diCurrent),
/* harmony export */   diMax: () => (/* binding */ diMax),
/* harmony export */   garBonus: () => (/* binding */ garBonus),
/* harmony export */   garCurrent: () => (/* binding */ garCurrent),
/* harmony export */   garMax: () => (/* binding */ garMax),
/* harmony export */   intelBonus: () => (/* binding */ intelBonus),
/* harmony export */   intelCurrent: () => (/* binding */ intelCurrent),
/* harmony export */   intelMax: () => (/* binding */ intelMax),
/* harmony export */   safety: () => (/* binding */ safety),
/* harmony export */   safetyBase: () => (/* binding */ safetyBase),
/* harmony export */   safetyBonus: () => (/* binding */ safetyBonus)
/* harmony export */ });
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");
/* harmony import */ var _survivalStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survivalStats */ "./src/survivalStats.js");
/* harmony import */ var _economyStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./economyStats */ "./src/economyStats.js");
/* harmony import */ var _weekLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekLog */ "./src/weekLog.js");





let safety = {
    Base: 0,
    Adjusted: 0,
    Rating: 0,
    Bonus: 0,
    diB: 0,
    diC: 2,
    diM: 0,
    intelB: 0,
    intelC: 2,
    intelM: 0,
    garB: 0,
    garC: 3,
    garM: 0
}

function safetyBase() {
    let a = 0;
    let b = 0;
    let c = 0;

    if(safety.diC > safety.diM) {
        a = safety.diM;
    } else a = safety.diC;

    if(safety.intelC > safety.intelM) {
        b = safety.intelM;
    } else b = safety.intelC;

    if(safety.garC > safety.garM) {
        c = safety.garM;
    } else c = safety.garC;

    safety.Base = (((a + b + c) / _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level) * (_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.currentHealth / _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.maxHealth)).toFixed(1);
    return safety.Base;
}

function safetyBonus(i) {
    safety.Bonus += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.safety += parseInt(i);
    diCurrent(i);
    intelCurrent(i);
    garCurrent(i);
    diMax();
    intelMax();
    garMax();
}

function diBonus(i) {
    safety.diB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.diB += parseInt(i);
    diCurrent(i)
    diMax();
}

function diCurrent(i) {
    safety.diC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.di += parseInt(i);
}

function diMax() {
    safety.diM = ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 2) + safety.Bonus + safety.diB);

}

function intelBonus(i) {
    safety.intelB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.intelB += parseInt(i);
    intelCurrent(i)
    intelMax();
}

function intelCurrent(i) {
    safety.intelC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.intel += parseInt(i);
}

function intelMax() {
    safety.intelM = (_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level + safety.Bonus + safety.intelB);
    
}

function garBonus(i) {
    safety.garB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.garB += parseInt(i);
    garCurrent(i)
    garMax();
}

function garCurrent(i) {
    safety.garC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.gar += parseInt(i);
}

function garMax() {
    safety.garM = ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 2) + safety.Bonus + safety.garB);
    
}



/***/ }),

/***/ "./src/settlementStats.js":
/*!********************************!*\
  !*** ./src/settlementStats.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseTaxes: () => (/* binding */ baseTaxes),
/* harmony export */   health: () => (/* binding */ health),
/* harmony export */   levelUp: () => (/* binding */ levelUp),
/* harmony export */   maxHealth: () => (/* binding */ maxHealth),
/* harmony export */   nextWeek: () => (/* binding */ nextWeek),
/* harmony export */   settlement: () => (/* binding */ settlement),
/* harmony export */   settlementPoints: () => (/* binding */ settlementPoints),
/* harmony export */   spend: () => (/* binding */ spend),
/* harmony export */   vaultAdd: () => (/* binding */ vaultAdd)
/* harmony export */ });
/* harmony import */ var _buildingsStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildingsStats */ "./src/buildingsStats.js");
/* harmony import */ var _overviewRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overviewRender */ "./src/overviewRender.js");
/* harmony import */ var _weekLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekLog */ "./src/weekLog.js");





let settlement = {
    name: "Cyfehil",
    level: 3,
    currentHealth: 100,
    maxHealth: 100,
    settlementPoints: 999,
    weeksPassed: 0,
    drought: false,
    type: "",
    vault: 385,

}

function baseTaxes() {
    return (settlement.level * 1.369 * 80).toFixed(0);
}

function levelUp(i) {
    settlement.level += parseInt(i)
    _weekLog__WEBPACK_IMPORTED_MODULE_2__.changeLog.level += parseInt(i);
}

function health(i) {
    settlement.currentHealth += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_2__.changeLog.health += parseInt(i);
}

function spend(i) {
    if(i > settlement.settlementPoints) {
        return;
    } else {
        i *= -1;
        settlementPoints(i);
    }    
}

function settlementPoints(i) {
    settlement.settlementPoints += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_2__.changeLog.sp += parseInt(i);
}

function nextWeek() {
    //if statement for using more workers than allowed;
    settlement.settlementPoints += settlement.level;
    recoverHealth();
    (0,_weekLog__WEBPACK_IMPORTED_MODULE_2__.trackChange)();
}

function maxHealth(i) {
    settlement.maxHealth += parseInt(i);
}

function recoverHealth() {
    let i = _buildingsStats__WEBPACK_IMPORTED_MODULE_0__.buildings.infirmLevel;
    if(settlement.drought == true) {
        return;
    } else {
        switch(i) {
            case 0:
                settlement.currentHealth += 2;
                break;
            case 1:
                settlement.currentHealth += 4;
                break;
            case 2: 
                settlement.currentHealth += 6;
                break;
            case 3:
                settlement.currentHealth += 10;
                break;
        }
    }
}

function vaultAdd(i) {
    settlement.vault += parseInt(i);
}



/***/ }),

/***/ "./src/shopInterface.js":
/*!******************************!*\
  !*** ./src/shopInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearList: () => (/* binding */ clearList),
/* harmony export */   shopInterface: () => (/* binding */ shopInterface)
/* harmony export */ });
/* harmony import */ var _economyStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./economyStats */ "./src/economyStats.js");
/* harmony import */ var _overviewRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overviewRender */ "./src/overviewRender.js");
/* harmony import */ var _safetyStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safetyStats */ "./src/safetyStats.js");
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");
/* harmony import */ var _shopWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopWindow */ "./src/shopWindow.js");
/* harmony import */ var _survivalStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survivalStats */ "./src/survivalStats.js");
/* harmony import */ var _taxRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxRender */ "./src/taxRender.js");








function shopInterface() {
    ////////FOOD ROW////////
        let wrapper = document.querySelector('#shopWrapper');
        wrapper.innerHTML = ""

        let shopWrapper = document.createElement('div');
        
    
        let foodRow = document.createElement('div');
        foodRow.classList.add('shopRow');
    
        let foodLabel = document.createElement('div');
        foodLabel.textContent = "Food:";
        foodLabel.classList.add('shopLabel');
        foodRow.appendChild(foodLabel);
    
        let foodBSBox = document.createElement('div');
        foodBSBox.classList.add('bsBox');
    
        let foodDec = document.createElement('button');
        foodDec.textContent = "<";
        foodDec.classList.add('shopBtn');
    
        let foodValue = document.createElement('div');
        foodValue.textContent = shoppingList.food;
    
        let foodInc = document.createElement('button');
        foodInc.textContent = ">";
        foodInc.classList.add('shopBtn');
    
        foodDec.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.food > 0) {
                    shoppingList.food--
                    shoppingList.value -= foodCost();
                    shopInterface();
                    return;
                }
            } else {
                if(shoppingList.food > 0) {
                    _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.foodC++;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.food--
                    shoppingList.value -= foodProfit();
                    shopInterface();
                    return;
                }
            }
        })
    
        foodInc.addEventListener('click', () => {
                if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                    if(shoppingList.value + foodCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                        shoppingList.food++;
                        shoppingList.value += foodCost();
                        shopInterface();
                    }                 
                    
                } else if(_survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.foodC > 0) {
                    _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.foodC--;
                    shoppingList.food++;
                    shoppingList.value += foodProfit();
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shopInterface();

                }
        }), 
    
        foodBSBox.appendChild(foodDec);
        foodBSBox.appendChild(foodValue);
        foodBSBox.appendChild(foodInc);
        foodRow.appendChild(foodBSBox)
    
        shopWrapper.appendChild(foodRow);
    
    ////////SUPPLIES ROW////////
    
        let supRow = document.createElement('div');
        supRow.classList.add('shopRow');
    
        let supLabel = document.createElement('div');
        supLabel.textContent = "Supplies:";
        supLabel.classList.add('shopLabel');
        supRow.appendChild(supLabel);
    
        let supBSBox = document.createElement('div');
        supBSBox.classList.add('bsBox');
    
        let supDec = document.createElement('button');
        supDec.textContent = "<";
        supDec.classList.add('shopBtn');
    
        let supValue = document.createElement('div');
        supValue.textContent = shoppingList.sup;
    
        let supInc = document.createElement('button');
        supInc.textContent = ">";
        supInc.classList.add('shopBtn');
    
        supDec.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.sup > 0) {
                    shoppingList.sup--
                    shoppingList.value -= supCost();
                    shopInterface();
                    return;
                }
            } else {
                if(shoppingList.sup > 0) {
                    _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.supC++;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.sup--
                    shoppingList.value -= supProfit();
                    shopInterface();
                    return;
                }
            }
        })
    
        supInc.addEventListener('click', () => {
                if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                    if(shoppingList.value + supCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                        shoppingList.sup++;
                        shoppingList.value += supCost();
                        shopInterface();
                    }
                } else {
                    if(_survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.supC > 0) {
                        _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.supC--;
                        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        shoppingList.sup++
                        shoppingList.value += supProfit();
                        shopInterface();
                    }
                }
        }), 
    
        supBSBox.appendChild(supDec);
        supBSBox.appendChild(supValue);
        supBSBox.appendChild(supInc);
        supRow.appendChild(supBSBox)
    
        shopWrapper.appendChild(supRow);
    
    ////////MED ROW////////
    
        let medRow = document.createElement('div');
        medRow.classList.add('shopRow');
    
        let medLabel = document.createElement('div');
        medLabel.textContent = "Medicine:";
        medLabel.classList.add('shopLabel');
        medRow.appendChild(medLabel);
    
        let medBSBox = document.createElement('div');
        medBSBox.classList.add('bsBox');
    
        let medDec = document.createElement('button');
        medDec.textContent = "<";
        medDec.classList.add('shopBtn');
    
        let medValue = document.createElement('div');
        medValue.textContent = shoppingList.med;
    
        let medInc = document.createElement('button');
        medInc.textContent = ">";
        medInc.classList.add('shopBtn');
    
        medDec.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.med > 0) {
                    shoppingList.med--
                    shoppingList.value -= medCost();
                    shopInterface();
                    return;
                }
            } else {
                if(shoppingList.med > 0) {
                    _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.medC++;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.med--
                    shoppingList.value -= medProfit()
                    shopInterface();
                    return;
                }
            }
        })
    
        medInc.addEventListener('click', () => {
                if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                    if(shoppingList.value + medCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                        shoppingList.med++;
                        shoppingList.value += medCost();
                        shopInterface();
                    }
                } else {
                    if(_survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.medC > 0) {
                        _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.medC--;
                        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        shoppingList.med++;
                        shoppingList.value += medProfit();
                        shopInterface();
                    }
                }
        }), 
    
        medBSBox.appendChild(medDec);
        medBSBox.appendChild(medValue);
        medBSBox.appendChild(medInc);
        medRow.appendChild(medBSBox)
    
        shopWrapper.appendChild(medRow);
    
        /////////SCOUT ROW////////
    
        let scoutRow = document.createElement('div');
        scoutRow.classList.add('shopRow');
        
        let scoutLabel = document.createElement('div');
        scoutLabel.textContent = "Scouts:";
        scoutLabel.classList.add('shopLabel');
        scoutRow.appendChild(scoutLabel);
        
        let scoutBSBox = document.createElement('div');
        scoutBSBox.classList.add('bsBox');
        
        let scoutDec = document.createElement('button');
        scoutDec.textContent = "<";
        scoutDec.classList.add('shopBtn');
        
        let scoutValue = document.createElement('div');
        scoutValue.textContent = shoppingList.scout;
        
        let scoutInc = document.createElement('button');
        scoutInc.textContent = ">";
        scoutInc.classList.add('shopBtn');
        
        scoutDec.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.scout > 0) {
                    shoppingList.scout--
                    shoppingList.value -= scoutCost();
                    shopInterface();
                    return;
                }
            } else {
                if(shoppingList.scout > 0) {
                    _safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.intelC++;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.scout--
                    shoppingList.value -= scoutProfit();
                    shopInterface();
                    return;
                }
            }
        })
        
        scoutInc.addEventListener('click', () => {
                if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                    if(shoppingList.value + scoutCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                        shoppingList.scout++;
                        shoppingList.value += scoutCost();
                        shopInterface();
                    }
                } else {
                    if(_safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.intelC > 0) {
                        _safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.intelC--;
                        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        shoppingList.scout++;
                        shoppingList.value += scoutProfit();
                        shopInterface();
                    }
                }
        }), 
        
        scoutBSBox.appendChild(scoutDec);
        scoutBSBox.appendChild(scoutValue);
        scoutBSBox.appendChild(scoutInc);
        scoutRow.appendChild(scoutBSBox)
        
        shopWrapper.appendChild(scoutRow);
    
        ////////GUARDS ROW////////
    
        let garRow = document.createElement('div');
        garRow.classList.add('shopRow');
        
        let garLabel = document.createElement('div');
        garLabel.textContent = "Guards:";
        garLabel.classList.add('shopLabel');
        garRow.appendChild(garLabel);
        
        let garBSBox = document.createElement('div');
        garBSBox.classList.add('bsBox');
        
        let garDec = document.createElement('button');
        garDec.textContent = "<";
        garDec.classList.add('shopBtn');
        
        let garValue = document.createElement('div');
        garValue.textContent = shoppingList.gar;
        
        let garInc = document.createElement('button');
        garInc.textContent = ">";
        garInc.classList.add('shopBtn');
        
        garDec.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.gar > 0) {
                    shoppingList.gar--
                    shoppingList.value -= garCost();
                    shopInterface();
                    return;
                }
            } else {
                if(shoppingList.gar > 0) {
                    _safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.garC++;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.gar--
                    shoppingList.value -= garProfit();
                    shopInterface();
                    return;
                }
            }
        })
        
        garInc.addEventListener('click', () => {
                if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                    if(shoppingList.value + garCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                        shoppingList.gar++;
                        shoppingList.value += garCost();
                        shopInterface();
                    }
                } else {
                    if(_safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.garC > 0) {
                        _safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.garC--;
                        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        shoppingList.gar++;
                        shoppingList.value += garProfit();
                        shopInterface();
                    }
                }
        }), 
        
        garBSBox.appendChild(garDec);
        garBSBox.appendChild(garValue);
        garBSBox.appendChild(garInc);
        garRow.appendChild(garBSBox)
        
        shopWrapper.appendChild(garRow);
    
        /////WAGON ROW////
        
        let wagonRow = document.createElement('div');
        wagonRow.classList.add('shopRow');
    
        let wagonLabel = document.createElement('div');
        wagonLabel.textContent = "Wagons:";
        wagonLabel.classList.add('shopLabel');
        wagonRow.appendChild(wagonLabel);
    
        let wagonBSBox = document.createElement('div');
        wagonBSBox.classList.add('bsBox');
    
        let wagonDec = document.createElement('button');
        wagonDec.textContent = "<";
        wagonDec.classList.add('shopBtn');
    
        let wagonValue = document.createElement('div');
        wagonValue.textContent = shoppingList.wagon;
    
        let wagonInc = document.createElement('button');
        wagonInc.textContent = ">";
        wagonInc.classList.add('shopBtn');
    
        wagonDec.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.wagon > 0) {
                    shoppingList.wagon--
                    shoppingList.value -= wagonCost();
                    shopInterface();
                    return;
                }
            } else {
                if(shoppingList.wagon > 0) {
                    _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.tradeC++;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.wagon--
                    shoppingList.value -= wagonProfit();
                    shopInterface();
                    return;
                }
            }
        })
    
        wagonInc.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.value + wagonCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                    shoppingList.wagon++;
                    shoppingList.value += wagonCost();
                    shopInterface();
                }
            } else {
                if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.tradeC > 0) {
                    _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.tradeC--;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.wagon++;
                    shoppingList.value += wagonProfit();
                    shopInterface();
                }
            }
            }
    ), 
    
        wagonBSBox.appendChild(wagonDec);
        wagonBSBox.appendChild(wagonValue);
        wagonBSBox.appendChild(wagonInc);
        wagonRow.appendChild(wagonBSBox)
    
        shopWrapper.appendChild(wagonRow);
    
        ////////TOOLS ROW////////
    
    let toolsRow = document.createElement('div');
    toolsRow.classList.add('shopRow');
    
    let toolsLabel = document.createElement('div');
    toolsLabel.textContent = "Tools:";
    toolsLabel.classList.add('shopLabel');
    toolsRow.appendChild(toolsLabel);
    
    let toolsBSBox = document.createElement('div');
    toolsBSBox.classList.add('bsBox');
    
    let toolsDec = document.createElement('button');
    toolsDec.textContent = "<";
    toolsDec.classList.add('shopBtn');
    
    let toolsValue = document.createElement('div');
    toolsValue.textContent = shoppingList.tools;
    
    let toolsInc = document.createElement('button');
    toolsInc.textContent = ">";
    toolsInc.classList.add('shopBtn');
    
    toolsDec.addEventListener('click', () => {
        if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
            if(shoppingList.tools > 0) {
                shoppingList.tools--
                shoppingList.value -= toolsCost();
                shopInterface();
                return;
            }
        } else {
            if(shoppingList.tools > 0) {
                _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodC++;
                (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                shoppingList.tools--;
                shoppingList.value -= toolsProfit();
                shopInterface();
                return;
            }
        }
    })
    
    toolsInc.addEventListener('click', () => {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
                if(shoppingList.value + toolsCost() < _settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.vault) {
                    shoppingList.tools++;
                    shoppingList.value += toolsCost();
                    shopInterface();
                }
            } else {
                if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodC > 0) {
                    _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodC--;
                    (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    shoppingList.tools++;
                    shoppingList.value += toolsProfit();
                    shopInterface();
                }
            }
    }), 
    
    toolsBSBox.appendChild(toolsDec);
    toolsBSBox.appendChild(toolsValue);
    toolsBSBox.appendChild(toolsInc);
    toolsRow.appendChild(toolsBSBox)
    
    shopWrapper.appendChild(toolsRow);


////////BUY SELL INTERFACE////////
    let bsRow = document.createElement('div');
    bsRow.classList.add('bsRow');

    let cxBtn = document.createElement('button');
    cxBtn.id = 'shopCXBtn';
    cxBtn.textContent ="Clear List";
    cxBtn.addEventListener('click', () => {
        cancelTrade();
    })
    bsRow.appendChild(cxBtn);

    let tradeValue = document.createElement('div');
    tradeValue.textContent = shoppingList.value;
    tradeValue.style = "border: 6px solid rgba(255,219,152); width: 50%; height: 100%; display: flex; justify-content: center; align-items: center; font-size: 22px; box-sizing: border-box; background: white"
    bsRow.appendChild(tradeValue);

    let buysellBtn = document.createElement('button');
    buysellBtn.style = 'height: 100%; width: 25%;'
    if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
        buysellBtn.textContent = "Buy";
    } else {
        buysellBtn.textContent = "Sell";
    }
    buysellBtn.addEventListener('click', () => {
        confirmTrade();
    })
    bsRow.appendChild(buysellBtn);
    shopWrapper.appendChild(bsRow);

    wrapper.appendChild(shopWrapper);
    
}

    
    let shoppingList = {
        food: 0,
        sup: 0,
        med: 0,
        scout: 0,
        gar: 0,
        wagon: 0,
        tools: 0,
        value: 0    
    };

    function cancelTrade() {
        clearList();
        shopInterface();
    }
    
    function confirmTrade() {
        if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 0) {
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_5__.foodCurrent)(shoppingList.food);
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_5__.supCurrent)(shoppingList.sup);
            (0,_survivalStats__WEBPACK_IMPORTED_MODULE_5__.medCurrent)(shoppingList.med);
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.intelCurrent)(shoppingList.scout);
            (0,_safetyStats__WEBPACK_IMPORTED_MODULE_2__.garCurrent)(shoppingList.gar);
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.tradeCurrent)(shoppingList.wagon);
            (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.prodCurrent)(shoppingList.tools);
            (0,_settlementStats__WEBPACK_IMPORTED_MODULE_3__.vaultAdd)(-shoppingList.value);
            zeroList();
            (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_taxRender__WEBPACK_IMPORTED_MODULE_6__["default"])();
            shopInterface();
        } else {
            if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 1) {
                (0,_settlementStats__WEBPACK_IMPORTED_MODULE_3__.vaultAdd)(shoppingList.value);
                zeroList();
                (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
                (0,_taxRender__WEBPACK_IMPORTED_MODULE_6__["default"])();
                shopInterface();
            }
        }
    }

    function zeroList() {
        shoppingList.food = 0;
        shoppingList.sup = 0;
        shoppingList.med = 0;
        shoppingList.scout = 0;
        shoppingList.gar = 0;
        shoppingList.wagon = 0;
        shoppingList.tools = 0;
        shoppingList.value = 0;
    }

    function clearList() {
        if(_shopWindow__WEBPACK_IMPORTED_MODULE_4__.shopStatus == 1) {
            _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.foodC += shoppingList.food;
            _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.supC += shoppingList.sup;
            _survivalStats__WEBPACK_IMPORTED_MODULE_5__.survival.medC += shoppingList.med;
            _safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.intelC += shoppingList.scout;
            _safetyStats__WEBPACK_IMPORTED_MODULE_2__.safety.garC += shoppingList.gar;
            _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.tradeC += shoppingList.wagon;
            _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.prodC += shoppingList.tools;
        }
        zeroList();
        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    
    function foodCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 5).toFixed(0));
    }
    
    function foodProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 2.5).toFixed(0));
    }

    function supCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 15).toFixed(0));
    }

    function supProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 7.5).toFixed(0));
    }

    function medCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 25).toFixed(0));
    }

    function medProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 12.5).toFixed(0));
    }

    function scoutCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 20).toFixed(0));
    }

    function scoutProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 10).toFixed(0));
    }

    function garCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 40).toFixed(0));
    }

    function garProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 20).toFixed(0));
    }

    function wagonCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 30).toFixed(0));
    }

    function wagonProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 15).toFixed(0));
    }

    function toolsCost() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 18).toFixed(0));
    }

    function toolsProfit() {
        return parseInt((_settlementStats__WEBPACK_IMPORTED_MODULE_3__.settlement.level * 9).toFixed(0));
    }



/***/ }),

/***/ "./src/shopWindow.js":
/*!***************************!*\
  !*** ./src/shopWindow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shopStatus: () => (/* binding */ shopStatus),
/* harmony export */   shopWindow: () => (/* binding */ shopWindow)
/* harmony export */ });
/* harmony import */ var _overviewRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overviewRender */ "./src/overviewRender.js");
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");
/* harmony import */ var _shopInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopInterface */ "./src/shopInterface.js");
/* harmony import */ var _survivalStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survivalStats */ "./src/survivalStats.js");





function shopWindow() {
    let wrapper = document.querySelector('#buyBox');
    wrapper.id = 'buyBox'
    wrapper.style = "width: 50%;";

    let header = document.createElement('div');
    header.textContent = "Management Shop";
    header.style = "display: flex; justify-content: center; align-items: center; height: 10%; background: gray; font-size: 22px;"
    wrapper.appendChild(header);

////////BUY/SELL SWITCHER////////
let buySell = document.createElement('div');
buySell.id = 'buySell';

let buy = document.createElement('button');
buy.textContent = "Buy";
buy.id = 'buyMode';
buy.classList.add('buybuy')


let sell = document.createElement('button');
sell.textContent = "Sell";
sell.id = 'sellMode';
sell.classList.add('sellbuy')


buy.addEventListener('click', () => {
    buy.classList.add('buybuy');
    buy.classList.remove('buysell');
    sell.classList.remove('sellsell');
    sell.classList.add("sellbuy");
    shopWrapper.classList.remove('sell');
    shopWrapper.classList.add('buy');
    (0,_shopInterface__WEBPACK_IMPORTED_MODULE_2__.clearList)();
    shopStatus = 0;
    (0,_shopInterface__WEBPACK_IMPORTED_MODULE_2__.shopInterface)();
    

})

sell.addEventListener('click', () => {    
    sell.classList.add('sellsell');
    sell.classList.remove('sellbuy');
    buy.classList.remove('buybuy');
    buy.classList.add('buysell');
    shopWrapper.classList.add('sell');
    shopWrapper.classList.remove('buy');
    (0,_shopInterface__WEBPACK_IMPORTED_MODULE_2__.clearList)();
    shopStatus = 1;
    (0,_shopInterface__WEBPACK_IMPORTED_MODULE_2__.shopInterface)();
    
})

buySell.appendChild(buy);
buySell.appendChild(sell);

wrapper.appendChild(buySell);

let shopWrapper = document.createElement('div');
shopWrapper.id = 'shopWrapper'
shopWrapper.classList.add('buy');
wrapper.appendChild(shopWrapper);

(0,_shopInterface__WEBPACK_IMPORTED_MODULE_2__.shopInterface)();

}

let shopStatus = 0;





/***/ }),

/***/ "./src/survivalStats.js":
/*!******************************!*\
  !*** ./src/survivalStats.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   foodBonus: () => (/* binding */ foodBonus),
/* harmony export */   foodCurrent: () => (/* binding */ foodCurrent),
/* harmony export */   foodMax: () => (/* binding */ foodMax),
/* harmony export */   medBonus: () => (/* binding */ medBonus),
/* harmony export */   medCurrent: () => (/* binding */ medCurrent),
/* harmony export */   medMax: () => (/* binding */ medMax),
/* harmony export */   supBonus: () => (/* binding */ supBonus),
/* harmony export */   supCurrent: () => (/* binding */ supCurrent),
/* harmony export */   supMax: () => (/* binding */ supMax),
/* harmony export */   survival: () => (/* binding */ survival),
/* harmony export */   survivalBase: () => (/* binding */ survivalBase),
/* harmony export */   survivalBonus: () => (/* binding */ survivalBonus)
/* harmony export */ });
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");
/* harmony import */ var _safetyStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safetyStats */ "./src/safetyStats.js");
/* harmony import */ var _economyStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./economyStats */ "./src/economyStats.js");
/* harmony import */ var _weekLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekLog */ "./src/weekLog.js");





let survival = {
    Base: 0,
    Adjusted: 0,
    Rating: 0,
    Bonus: 0,
    foodB: 0,
    foodC: 7,
    foodM: 0,
    supB: 0,
    supC: 5,
    supM: 0,
    medB: 0,
    medC: 3,
    medM: 0
}

function survivalBase() {
    let a = 0;
    let b = 0; 
    let c = 0;

    if(survival.foodC > survival.foodM) {
        a = survival.foodM;
    } else a = survival.foodC;

    if(survival.supC > survival.supM) {
        b = survival.supM;
    } else b = survival.supC;

    if(survival.medC > survival.medM) {
        c = survival.medM;
    } else c = survival.medC;


    survival.Base = (((a + b + c) / _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level) * (_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.currentHealth / _settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.maxHealth)).toFixed(1);
    return survival.Base;
}

function survivalBonus(i) {
    survival.Bonus += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.survival += parseInt(i);
    foodBonus(i);
    supBonus(i);
    medBonus(i);
    foodMax();
    supMax();
    medMax();
}

function foodBonus(i) {
    survival.foodB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.foodB += parseInt(i);
    foodCurrent(i);
    foodMax();
}

function foodCurrent(i) {
    survival.foodC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.food += parseInt(i);
}

function foodMax() {
    survival.foodM = ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 5) + survival.Bonus + survival.foodB);
    
}

function supBonus(i) {
    survival.supB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.suppliesB += parseInt(i);
    supCurrent(i);
    supMax();
}

function supCurrent(i) {
    survival.supC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.supplies += parseInt(i);
}

function supMax() {
    survival.supM = ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 3) + survival.Bonus + survival.supB);
}

function medBonus(i) {
    survival.medB += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.medsB += parseInt(i);
    medCurrent(i);
    medMax();
}

function medCurrent(i) {
    survival.medC += parseInt(i);
    _weekLog__WEBPACK_IMPORTED_MODULE_3__.changeLog.meds += parseInt(i);
}

function medMax() {
    survival.medM = ((_settlementStats__WEBPACK_IMPORTED_MODULE_0__.settlement.level * 2) + survival.Bonus + survival.medB);
}




/***/ }),

/***/ "./src/taxRender.js":
/*!**************************!*\
  !*** ./src/taxRender.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taxRender)
/* harmony export */ });
/* harmony import */ var _economyStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./economyStats */ "./src/economyStats.js");
/* harmony import */ var _overviewRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overviewRender */ "./src/overviewRender.js");
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");




function taxRender() { 
    let wrapper = document.querySelector("#taxBox");
    wrapper.innerHTML = "";

    wrapper.style = "width: 50%"
    let header = document.createElement('div');
    header.textContent = "Taxes and Items";
    header.style = "display: flex; justify-content: center; align-items: center; height: 43px; background: gray; font-size: 21px;"
    wrapper.appendChild(header);


    let baseTaxBox = document.createElement('div'); 
    baseTaxBox.classList.add('taxRow');
    

    let baseTaxLabel = document.createElement('div');
    baseTaxLabel.classList.add('taxLabel')
    baseTaxLabel.textContent = "Base Taxes:";
    baseTaxBox.appendChild(baseTaxLabel);

    let baseTaxValue = document.createElement('div');
    baseTaxValue.textContent = (0,_settlementStats__WEBPACK_IMPORTED_MODULE_2__.baseTaxes)();
    baseTaxValue.classList.add('taxValue');
    baseTaxValue.style = "justify-content: center"
    baseTaxBox.appendChild(baseTaxValue);

    let taxIncBox = document.createElement('div');
    taxIncBox.classList.add('taxRow');

    let taxIncLabel = document.createElement('div');
    taxIncLabel.classList.add('taxLabel');
    taxIncLabel.textContent = "Increase %";
    taxIncBox.appendChild(taxIncLabel);

    let taxIncValBox = document.createElement('div');
    taxIncValBox.classList.add('taxValue');

    let taxIncDec = document.createElement('button');
    taxIncDec.textContent = "-";
    taxIncDec.classList.add('taxChngBtn');
    

    let taxIncVal = document.createElement('div'); 
    taxIncVal.textContent = _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxInc;
    taxIncVal.id = "taxIncVal";

    let taxIncInc = document.createElement('button');
    taxIncInc.classList.add('taxChngBtn');
    taxIncInc.textContent = "+";

    taxIncDec.addEventListener('click', () => {
        if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxInc > 0) {
        _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxInc -= 5;
        taxRender();
        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
        };
    });

    taxIncInc.addEventListener('click', () => {
        if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxInc <= 95) {
        _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxInc +=5;
        _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxDec = 0;
        taxRender();
        (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
        };
    });

    taxIncValBox.appendChild(taxIncDec);
    taxIncValBox.appendChild(taxIncVal);
    taxIncValBox.appendChild(taxIncInc);
    taxIncBox.appendChild(taxIncValBox);

    let taxDecBox = document.createElement('div');
    taxDecBox.classList.add('taxRow');

    let taxDecLabel = document.createElement('div');
    taxDecLabel.classList.add('taxLabel');
    taxDecLabel.textContent = "Decrease %";
    taxDecBox.appendChild(taxDecLabel);

    let taxDecValBox = document.createElement('div');
    taxDecValBox.classList.add('taxValue');

    let taxDecDec = document.createElement('button');
    taxDecDec.textContent = "-";
    taxDecDec.classList.add('taxChngBtn');

    let taxDecVal = document.createElement('div');
    taxDecVal.id = "taxDecVal"
    taxDecVal.textContent = _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxDec;

    let taxDecInc = document.createElement('button');
    taxDecInc.classList.add('taxChngBtn');
    taxDecInc.textContent = "+";

    taxDecDec.addEventListener('click', () => {
        if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxDec > 0) {
            _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxDec -=5;
            taxRender();
            (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    })

    taxDecInc.addEventListener('click', () => {
        if(_economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxDec <= 95) {
            _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxDec += 5;
            _economyStats__WEBPACK_IMPORTED_MODULE_0__.economy.taxInc = 0;
            taxRender();
            (0,_overviewRender__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    })

    taxDecValBox.appendChild(taxDecDec);
    taxDecValBox.appendChild(taxDecVal);
    taxDecValBox.appendChild(taxDecInc);
    taxDecBox.appendChild(taxDecValBox);

    let aTaxesBox = document.createElement('div');
    aTaxesBox.classList.add('taxRow');

    let aTaxesLabel = document.createElement('div');
    aTaxesLabel.textContent = "Actual Taxes:";
    aTaxesLabel.style = "font-size: 16px";
    aTaxesLabel.classList.add('taxLabel');
    aTaxesBox.appendChild(aTaxesLabel);

    let aTaxesValue = document.createElement('div');
    aTaxesValue.textContent = (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.actualTaxes)();
    aTaxesValue.classList.add('taxValue');
    aTaxesValue.style = "justify-content: center";
    aTaxesBox.appendChild(aTaxesValue);

    let taxVaultBox = document.createElement('div');
    taxVaultBox.classList.add('taxRow');

    let taxVaultLabel = document.createElement('div');
    taxVaultLabel.classList.add('taxLabel');
    taxVaultLabel.textContent = "Tax Vault";
    taxVaultBox.appendChild(taxVaultLabel);

    let taxVaultValue = document.createElement('div');
    taxVaultValue.textContent = _settlementStats__WEBPACK_IMPORTED_MODULE_2__.settlement.vault;
    taxVaultValue.classList.add('taxValue');
    taxVaultValue.style = "justify-content: center"
    taxVaultBox.appendChild(taxVaultValue);
    

    let cItemBox = document.createElement('div');
    cItemBox.classList.add('taxRow');

    let cItemLabel = document.createElement('div');
    cItemLabel.textContent = "Common Lvl:";
    cItemLabel.classList.add('taxLabel');
    cItemLabel.style = "font-size: 15px"
    cItemBox.appendChild(cItemLabel);

    let cItemVal = document.createElement('div');
    cItemVal.textContent = (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.commonItem)();
    cItemVal.classList.add('taxValue');
    cItemVal.style = "justify-content: center";
    cItemBox.appendChild(cItemVal);

    let uItemBox = document.createElement('div');
    uItemBox.classList.add('taxRow');

    let uItemLabel = document.createElement('div');
    uItemLabel.textContent = "Uncommon Lvl:";
    uItemLabel.classList.add('taxLabel');
    uItemLabel.style = "font-size: 15px;"
    uItemBox.appendChild(uItemLabel);

    let uItemVal = document.createElement('div');
    uItemVal.textContent = (0,_economyStats__WEBPACK_IMPORTED_MODULE_0__.uncommonItem)();
    uItemVal.classList.add('taxValue');
    uItemVal.style = "justify-content: center";
    uItemBox.appendChild(uItemVal);



    wrapper.appendChild(baseTaxBox);
    wrapper.appendChild(taxIncBox);
    wrapper.appendChild(taxDecBox);
    wrapper.appendChild(aTaxesBox);
    wrapper.appendChild(taxVaultBox);
    wrapper.appendChild(cItemBox);
    wrapper.appendChild(uItemBox);
}

/***/ }),

/***/ "./src/weekLog.js":
/*!************************!*\
  !*** ./src/weekLog.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLog: () => (/* binding */ changeLog),
/* harmony export */   renderWeeks: () => (/* binding */ renderWeeks),
/* harmony export */   trackChange: () => (/* binding */ trackChange)
/* harmony export */ });
/* harmony import */ var _settlementStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlementStats */ "./src/settlementStats.js");


let weekLog = [];

let changeLog = {

    survival: 0,
    food: 0,
    foodB: 0,
    supplies: 0,
    suppliesB: 0,
    meds: 0,
    medsB: 0,
    safety: 0,
    di: 0,
    diB: 0,
    intel: 0,
    intelB: 0,
    gar: 0,
    garB: 0,
    economy: 0,
    trade: 0,
    tradeB: 0,
    prod: 0,
    prodB: 0,
    vault: 0,
    health: 0,
    level: 0,
    sp: 0,
    eventStart: [],
    eventEnd: [],
    week: 0,

}

function trackChange() {

    let events = changeLog;
    weekLog.push(events)

    clearChangeLog();

}

function renderWeeks() {
    let wrapper = document.querySelector('#weekLog');
    wrapper.innerHTML = '';
    wrapper.style = 'border-right: 2px solid black'

    let header = document.createElement('div');
    header.textContent = 'Weekly Logs';
    header.style = 'display: flex; justify-content: center; align-items: center; font-size: 22px; height: 10%; margin-bottom: 1rem;'
    wrapper.appendChild(header); 

    let logArea = document.createElement('div'); 
    logArea.style = 'overflow-y: scroll'
    
    if(weekLog.length == 0) {
        logArea.textContent = "You don't have any weekly logs yet.";
        logArea.style = 'display: flex; justify-content: center; align-items: center; font-size: 16px; text-align: center;'
    } else {

        weekLog.forEach((week) => {
            let row = document.createElement('div');

            let title = document.createElement('button');
            title.textContent = `Week ${week.week} Log`
            row.appendChild(title);

            title.addEventListener('click', () => {
                displayWeek(week);
            })
        })
    }
    wrapper.appendChild(logArea);
}

function clearChangeLog() {
    changeLog.forEach((value) => {
        value = 0;
    })

    changeLog.eventStart = [];
    changeLog.eventEnd = [];
}

function displayWeek(week) {

}



/***/ }),

/***/ "./Luminari-Regular.woff":
/*!*******************************!*\
  !*** ./Luminari-Regular.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "506cfaeeb78dd715d188.woff";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLHlCQUF5QixxQkFBcUIsaUJBQWlCLGFBQWEsb0JBQW9CO0FBQ25JOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCLHFCQUFxQixpQkFBaUIsbUJBQW1CO0FBQzFILE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2V0dGxlbWVudC1zaGVldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2V0dGxlbWVudC1zaGVldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2V0dGxlbWVudC1zaGVldC8uL3NyYy9idWlsZGluZ3NTdGF0cy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL2NvbXBpbGVFdmVudC5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL2Vjb25vbXlTdGF0cy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9zcmMvbmV3RXZlbnQuanMiLCJ3ZWJwYWNrOi8vc2V0dGxlbWVudC1zaGVldC8uL3NyYy9vdmVydmlld1JlbmRlci5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9zcmMvcHJvamVjdEJveFJlbmRlci5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3JlbmRlckJ1aWxkaW5ncy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3JlbmRlclByb2plY3RzLmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9zcmMvcmVuZGVyVXBncmFkZXMuanMiLCJ3ZWJwYWNrOi8vc2V0dGxlbWVudC1zaGVldC8uL3NyYy9zYWZldHlTdGF0cy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3NldHRsZW1lbnRTdGF0cy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3Nob3BJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vc2V0dGxlbWVudC1zaGVldC8uL3NyYy9zaG9wV2luZG93LmpzIiwid2VicGFjazovL3NldHRsZW1lbnQtc2hlZXQvLi9zcmMvc3Vydml2YWxTdGF0cy5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3RheFJlbmRlci5qcyIsIndlYnBhY2s6Ly9zZXR0bGVtZW50LXNoZWV0Ly4vc3JjL3dlZWtMb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL0x1bWluYXJpLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5Jztcbn1cblxuI3NldHRsZW1lbnROYW1lIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY29tcG9uZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4uY29tcFNjb3JlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5TUEJ1eUJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWxlZnQ6IC4ycmVtXG59XG5cbi5zY29yZUJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI3N1ckJveD5kaXYsICNzYWZCb3g+ZGl2LCAjZWNvbkJveD5kaXYge1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbn1cblxuI3N1ckJveCwgI3NhZkJveCwgI2Vjb25Cb3gge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgaGVpZ2h0OiAyNyVcbn1cblxuI3N1ckJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjUsMjUsLjMpO1xufVxuXG4jc2FmQm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LDI1LDIwMCwuMyk7XG59XG5cbiNlY29uQm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LDIwMCwyNSwuMyk7XG59XG5cbi50YXhSb3cge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0Ny4zMjVweDtcbn1cblxuI3RheEJveCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jdGF4Qm94PmRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwJTtcbn1cblxuI3RheEJveD5kaXY+ZGl2IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbiN0YXhCb3g+ZGl2PmRpdj5kaXYge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50YXhMYWJlbCB7XG4gICAgcGFkZGluZzogLjVyZW0gMDsgICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAlOyAgICBcbn1cblxuLnRheFZhbHVlIHtcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXhDaG5nQnRuIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2J1eVNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbiNidXlNb2RlLCAjc2VsbE1vZGUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDcuM3B4O1xufVxuXG4jYnV5TW9kZS5idXlidXkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsMjAwLDI1LC4zKTtcbiAgICBjb2xvcjogcmdiYSgwLDEwMCwwKTtcbn1cblxuI2J1eU1vZGUuYnV5c2VsbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCw1MCw1MCwuMyk7XG4gICAgY29sb3I6IHJnYmEoMCwxMDAsMCwuNSk7XG59XG5cbiNzZWxsTW9kZS5zZWxsYnV5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLDUwLDUwLC4zKTtcbiAgICBjb2xvcjogcmdiYSgxMDAsMCwwLC41KTtcbn1cblxuI3NlbGxNb2RlLnNlbGxzZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwyNSwyNSwuMyk7XG4gICAgY29sb3I6IHJnYmEoMTAwLDAsMCwxKVxufVxuXG4jc2hvcFdyYXBwZXIuYnV5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LDIwMCwyNSwuMSlcbn1cblxuI3Nob3BXcmFwcGVyLnNlbGwge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAwLDI1LDI1LC4xKVxufVxuXG4jYnV5Qm94IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jYnV5Qm94PmRpdiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxufVxuXG4uc2hvcFJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiA0My40cHg7XG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiYSgyNTUsMjE5LDE1Mik7XG5cbn1cblxuLnNob3BMYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLmJzQm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBnYXA6IC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG59XG5cbi5ic0JveD5kaXYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNob3BCdG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJzUm93IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQ3LjMyNXB4O1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwyMTksMTUyKTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiYSgyNTUsMjE5LDE1Mik7XG59XG5cbi5ic1Jvdz5kaXYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI3Byb2plY3RNYW5hZ2VtZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuI3Nob3BDWEJ0biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcHJvZEF2YWlsQm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJvZEF2YWlsQm94PmRpdiB7XG4gICAgZm9udC1zaXplOiAxOHB4XG59XG5cbiNuZXdQcm9qQnRuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuI3Byb2plY3RCb3gge1xuICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZXZlbnRSb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDE2NSwwLC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBtYXJnaW46IC41cmVtIDA7XG4gICAgcGFkZGluZzogLjJyZW0gLjJyZW0gMCAuMnJlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmV4cGFuZEJ0biB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHdpZHRoOiA1JTtcbn1cblxuLmV2ZW50VGl0bGUge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uZHVyYXRpb25Cb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAuNXJlbTtcbiAgICAgICBcbn1cblxuLmR1cmF0aW9uQm94PmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi53b3JrZXJCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IC41cmVtO1xuXG59XG5cbi5jaGFuZ2VXb3JrZXJCdG4ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi53b3JrZXJCb3g+ZGl2IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ldmVudEltcGFjdEJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXZlbnRJbXBhY3RCb3g+ZGl2PmRpdiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmVuZEJ0biB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uZGVzY0JveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbn1cblxuLmRlc2NCb3guaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGF4Qm94LCAjYnV5Qm94LCAjcHJvamVjdE1hbmFnZW1lbnQge1xuICAgIGhlaWdodDogNDUycHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxtQ0FBbUM7O0FBRXZDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XFxuICAgIHNyYzogdXJsKCcuLi9MdW1pbmFyaS1SZWd1bGFyLndvZmYnKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeSc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5JztcXG59XFxuXFxuI3NldHRsZW1lbnROYW1lIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb21wb25lbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLmNvbXBTY29yZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5TUEJ1eUJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tbGVmdDogLjJyZW1cXG59XFxuXFxuLnNjb3JlQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNzdXJCb3g+ZGl2LCAjc2FmQm94PmRpdiwgI2Vjb25Cb3g+ZGl2IHtcXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xcbn1cXG5cXG4jc3VyQm94LCAjc2FmQm94LCAjZWNvbkJveCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGhlaWdodDogMjclXFxufVxcblxcbiNzdXJCb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyNSwyNSwuMyk7XFxufVxcblxcbiNzYWZCb3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LDI1LDIwMCwuMyk7XFxufVxcblxcbiNlY29uQm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwyMDAsMjUsLjMpO1xcbn1cXG5cXG4udGF4Um93IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0Ny4zMjVweDtcXG59XFxuXFxuI3RheEJveCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdGF4Qm94PmRpdntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTAlO1xcbn1cXG5cXG4jdGF4Qm94PmRpdj5kaXYge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbiN0YXhCb3g+ZGl2PmRpdj5kaXYge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi50YXhMYWJlbCB7XFxuICAgIHBhZGRpbmc6IC41cmVtIDA7ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAlOyAgICBcXG59XFxuXFxuLnRheFZhbHVlIHtcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGF4Q2huZ0J0biB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI2J1eVNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2J1eU1vZGUsICNzZWxsTW9kZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNDcuM3B4O1xcbn1cXG5cXG4jYnV5TW9kZS5idXlidXkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LDIwMCwyNSwuMyk7XFxuICAgIGNvbG9yOiByZ2JhKDAsMTAwLDApO1xcbn1cXG5cXG4jYnV5TW9kZS5idXlzZWxsIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCw1MCw1MCwuMyk7XFxuICAgIGNvbG9yOiByZ2JhKDAsMTAwLDAsLjUpO1xcbn1cXG5cXG4jc2VsbE1vZGUuc2VsbGJ1eSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsNTAsNTAsLjMpO1xcbiAgICBjb2xvcjogcmdiYSgxMDAsMCwwLC41KTtcXG59XFxuXFxuI3NlbGxNb2RlLnNlbGxzZWxsIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDAsMjUsMjUsLjMpO1xcbiAgICBjb2xvcjogcmdiYSgxMDAsMCwwLDEpXFxufVxcblxcbiNzaG9wV3JhcHBlci5idXkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1LDIwMCwyNSwuMSlcXG59XFxuXFxuI3Nob3BXcmFwcGVyLnNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwyNSwyNSwuMSlcXG59XFxuXFxuI2J1eUJveCB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNidXlCb3g+ZGl2IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuLnNob3BSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDQzLjRweDtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiYSgyNTUsMjE5LDE1Mik7XFxuXFxufVxcblxcbi5zaG9wTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYnNCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgXFxufVxcblxcbi5ic0JveD5kaXYge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zaG9wQnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5ic1JvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDcuMzI1cHg7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwyMTksMTUyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoMjU1LDIxOSwxNTIpO1xcbn1cXG5cXG4uYnNSb3c+ZGl2IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jcHJvamVjdE1hbmFnZW1lbnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaG9wQ1hCdG4ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2RBdmFpbEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9kQXZhaWxCb3g+ZGl2IHtcXG4gICAgZm9udC1zaXplOiAxOHB4XFxufVxcblxcbiNuZXdQcm9qQnRuIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jcHJvamVjdEJveCB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmV2ZW50Um93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwxNjUsMCwuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBtYXJnaW46IC41cmVtIDA7XFxuICAgIHBhZGRpbmc6IC4ycmVtIC4ycmVtIDAgLjJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZXhwYW5kQnRuIHtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHdpZHRoOiA1JTtcXG59XFxuXFxuLmV2ZW50VGl0bGUge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmR1cmF0aW9uQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICAgICBcXG59XFxuXFxuLmR1cmF0aW9uQm94PmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ud29ya2VyQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG5cXG59XFxuXFxuLmNoYW5nZVdvcmtlckJ0biB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi53b3JrZXJCb3g+ZGl2IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZXZlbnRJbXBhY3RCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmV2ZW50SW1wYWN0Qm94PmRpdj5kaXYge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmVuZEJ0biB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uZGVzY0JveCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG59XFxuXFxuLmRlc2NCb3guaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3RheEJveCwgI2J1eUJveCwgI3Byb2plY3RNYW5hZ2VtZW50IHtcXG4gICAgaGVpZ2h0OiA0NTJweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgYnVpbGRpbmdzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1dhbGxzJyxcbiAgICAgICAgaWQ6ICd3YScsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgYnVpbHQgYW55IHdhbGxzIHlldC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnV2VsbHMnLFxuICAgICAgICBpZDogJ3dlJyxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHN0YXR1czogXCJZb3UgaGF2ZW4ndCBidWlsdCBhbnkgd2VsbHMgeWV0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOZXR3b3JrJyxcbiAgICAgICAgaWQ6ICduZScsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgYnVpbHQgYW4gSW50ZWxsaWdlbmNlIE5ldHdvcmsgeWV0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCYXJyYWNrcycsXG4gICAgICAgIGlkOiAnYmEnLFxuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgc3RhdHVzOiBcIllvdSBoYXZlbid0IHVwZ3JhZGVkIHRoZSBCYXJyYWNrcyB5ZXQuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmFuYXJ5JyxcbiAgICAgICAgaWQ6ICdncicsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgYnVpbHQgYSBHcmFuYXJ5IHlldC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFya2V0JyxcbiAgICAgICAgaWQ6ICdtYScsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgdXBncmFkZWQgdGhlIE1hcmtldCB5ZXQuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1VuaW9uJyxcbiAgICAgICAgaWQ6ICd1bicsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgdW5pb25pemVkIHdvcmtlcnMgeWV0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTY2hvb2wnLFxuICAgICAgICBpZDogJ3NjJyxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHN0YXR1czogXCJZb3UgaGF2ZW4ndCB1cGdyYWRlZCB0aGUgU2Nob29sIHlldC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSW5maXJtYXJ5JyxcbiAgICAgICAgaWQ6ICdpbicsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgYnVpbHQgYW4gSW5maXJtYXJ5IHlldC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29tbWVyY2UgT2ZmaWNlJyxcbiAgICAgICAgaWQ6ICdjbycsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBzdGF0dXM6IFwiWW91IGhhdmVuJ3QgYnVpbHQgYSBDb21tZXJjZSBPZmZpY2UgeWV0LlwiXG4gICAgfVxuXVxuXG5cbmV4cG9ydCB7IGJ1aWxkaW5ncyB9IiwiaW1wb3J0IHsgZWNvbm9teUJvbnVzLCBwcm9kQm9udXMsIHByb2RDdXJyZW50LCB0cmFkZUJvbnVzLCB0cmFkZUN1cnJlbnQgfSBmcm9tIFwiLi9lY29ub215U3RhdHNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3Byb2plY3RCb3hSZW5kZXJcIjtcbmltcG9ydCB7IGRpQm9udXMsIGRpQ3VycmVudCwgZ2FyQm9udXMsIGdhckN1cnJlbnQsIGludGVsQm9udXMsIGludGVsQ3VycmVudCwgc2FmZXR5Qm9udXMgfSBmcm9tIFwiLi9zYWZldHlTdGF0c1wiO1xuaW1wb3J0IHsgbGV2ZWxVcCwgbWF4SGVhbHRoLCBzZXR0bGVtZW50UG9pbnRzLCB2YXVsdEFkZCB9IGZyb20gXCIuL3NldHRsZW1lbnRTdGF0c1wiO1xuaW1wb3J0IHsgZm9vZEJvbnVzLCBmb29kQ3VycmVudCwgbWVkQm9udXMsIG1lZEN1cnJlbnQsIHN1cEJvbnVzLCBzdXBDdXJyZW50LCBzdXJ2aXZhbEJvbnVzIH0gZnJvbSBcIi4vc3Vydml2YWxTdGF0c1wiO1xuaW1wb3J0IHsgY2hhbmdlTG9nIH0gZnJvbSBcIi4vd2Vla0xvZ1wiO1xuXG5cbmxldCBjb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNvbXBpbGVFdmVudCgpIHtcbiAgICBsZXQgcHJvaiA9IFtdO1xuICAgIGxldCBjb21wVmFscyA9IFtdO1xuICAgIGxldCBjb21wSXRlbXMgPSBbXTtcbiAgICBsZXQgaW1wYWN0VmFscyA9IFtdO1xuICAgIGxldCBpbXBhY3RJdGVtcyA9IFtdOyBcblxuICAgIGxldCBjb21wVmFsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRDb21wVmFsJyk7XG4gICAgY29tcFZhbEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29tcFZhbHMucHVzaChpdGVtLnZhbHVlKTtcbiAgICB9KVxuXG4gICAgbGV0IGNvbXBJdGVtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRDb21wSXRlbScpO1xuICAgIGNvbXBJdGVtRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb21wSXRlbXMucHVzaChpdGVtLnZhbHVlKTtcbiAgICB9KVxuXG4gICAgbGV0IGltcGFjdFZhbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50SW1wYWN0VmFsJyk7XG4gICAgaW1wYWN0VmFsRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpbXBhY3RWYWxzLnB1c2goaXRlbS52YWx1ZSk7XG4gICAgfSlcblxuICAgIGxldCBpbXBhY3RJdGVtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbnRJbXBhY3RJdGVtJyk7XG4gICAgaW1wYWN0SXRlbUVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaW1wYWN0SXRlbXMucHVzaChpdGVtLnZhbHVlKTtcbiAgICB9KVxuXG4gICAgcHJvai5kdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudFRpbWVWYWwnKS52YWx1ZTtcblxuICAgIHByb2oubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudE5hbWUnKS52YWx1ZTtcblxuICAgIHByb2oudHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudFR5cGUnKS52YWx1ZTtcblxuICAgIHByb2ouZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudERldGFpbHMnKS52YWx1ZTtcblxuICAgIHByb2ouY291bnQgPSBjb3VudDtcblxuICAgIHByb2oud29ya2VycyA9IDA7XG5cbiAgICBwcm9qLmltcGFjdEl0ZW1zID0gaW1wYWN0SXRlbXM7XG5cbiAgICBwcm9qLmltcGFjdFZhbHMgPSBpbXBhY3RWYWxzO1xuXG4gICAgcHJvai5jb3N0SXRlbXMgPSBjb21wSXRlbXM7IFxuXG4gICAgcHJvai5jb3N0VmFscyA9IGNvbXBWYWxzO1xuXG4gICAgcHJvai5oaWRlID0gdHJ1ZTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbXBhY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaXRlbSA9IGltcGFjdEl0ZW1zW2ldO1xuICAgICAgICBsZXQgbnVtID0gaW1wYWN0VmFsc1tpXTtcbiAgICAgICAgbGV0IG5hbWVyID0gJ2NvbXAnICsgaTtcbiAgICAgICAgbGV0IG51bWJlciA9ICdjb3N0JyAraTtcbiAgICAgICAgcHJvaltuYW1lcl0gPSBpdGVtO1xuICAgICAgICBwcm9qW251bWJlcl0gPSBudW07XG4gICAgfVxuXG4gICAgaWYocHJvai50eXBlID09ICdJbmRlZmluaXRlJykge1xuICAgICAgICBwcm9qLmhhc0xpbmsgPSBmYWxzZTtcbiAgICAgICAgcHJvai5kdXJhdGlvbiA9IDk5OTk5O1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qLmltcGFjdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGNQYWluKHByb2ouaW1wYWN0VmFsc1tpXSwgcHJvai5pbXBhY3RJdGVtc1tpXSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2ouY29zdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGNDb3N0KHByb2ouY29zdFZhbHNbaV0scHJvai5jb3N0SXRlbXNbaV0pO1xuICAgIH1cblxuICAgIGlmKHByb2oudHlwZSAhPSAnSW1tZWRpYXRlJykge1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qKTtcbiAgICB9XG5cbiAgICBjb3VudFVwKCk7XG5cbiAgICBjaGFuZ2VMb2cuZXZlbnRTdGFydC5wdXNoKHByb2opO1xuXG4gICAgaWYocHJvai50eXBlID09ICdJbW1lZGlhdGUnKSB7XG4gICAgICAgIGNoYW5nZUxvZy5ldmVudEVuZC5wdXNoKHByb2opO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGNoYW5nZUxvZyk7XG5cbn1cblxuZnVuY3Rpb24gY291bnRVcCgpIHtcbiAgICBjb3VudCsrXG59XG5cbmZ1bmN0aW9uIGNhbGNDb3N0KGksIGl0ZW0pIHtcbiAgICBpZihpID09IDAgfHwgaXRlbSA9PSBcIm5vbmVcIiB8fCBpdGVtID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIHN3aXRjaChpdGVtKSB7XG4gICAgICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgICAgICAgZm9vZEN1cnJlbnQoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VwcGxpZXMnOlxuICAgICAgICAgICAgc3VwQ3VycmVudChpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZWQnOiBcbiAgICAgICAgICAgIG1lZEN1cnJlbnQoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGknOlxuICAgICAgICAgICAgZGlDdXJyZW50KGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ludGVsJzpcbiAgICAgICAgICAgIGludGVsQ3VycmVudChpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnYXInOlxuICAgICAgICAgICAgZ2FyQ3VycmVudChpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0cmFkZSc6XG4gICAgICAgICAgICB0cmFkZUN1cnJlbnQoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvZCc6XG4gICAgICAgICAgICBwcm9kQ3VycmVudChpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnb2xkJzpcbiAgICAgICAgICAgIHZhdWx0QWRkKGkpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICB9IFxuXG59XG5cbmZ1bmN0aW9uIGNhbGNQYWluKGksIGl0ZW0pIHtcbiAgICBpZihpID09IDAgfHwgaXRlbSA9PSAnbm9uZScgfHwgaXRlbSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaChpdGVtKSB7XG4gICAgICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgICAgICAgZm9vZEJvbnVzKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1cHBsaWVzJzpcbiAgICAgICAgICAgIHN1cEJvbnVzKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lZCc6XG4gICAgICAgICAgICBtZWRCb251cyhpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaSc6XG4gICAgICAgICAgICBkaUJvbnVzKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ludGVsJzpcbiAgICAgICAgICAgIGludGVsQm9udXMoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2FyJzpcbiAgICAgICAgICAgIGdhckJvbnVzKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RyYWRlJzpcbiAgICAgICAgICAgIHRyYWRlQm9udXMoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvZCc6XG4gICAgICAgICAgICBwcm9kQm9udXMoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3Vydml2YWwnOiBcbiAgICAgICAgICAgIHN1cnZpdmFsQm9udXMoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2FmZXR5JzpcbiAgICAgICAgICAgIHNhZmV0eUJvbnVzKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vjb25vbXknOlxuICAgICAgICAgICAgZWNvbm9teUJvbnVzKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heEhlYWx0aCc6XG4gICAgICAgICAgICBtYXhIZWFsdGgoaSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxldmVsXCI6XG4gICAgICAgICAgICBsZXZlbFVwKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzcFwiOlxuICAgICAgICAgICAgc2V0dGxlbWVudFBvaW50cyhpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7Y29tcGlsZUV2ZW50LCBjb3VudFVwfSIsImltcG9ydCB7IGJhc2VUYXhlcywgc2V0dGxlbWVudCB9IGZyb20gJy4vc2V0dGxlbWVudFN0YXRzJztcbmltcG9ydCB7IHNhZmV0eSB9IGZyb20gJy4vc2FmZXR5U3RhdHMnO1xuaW1wb3J0IHsgc3Vydml2YWwgfSBmcm9tICcuL3N1cnZpdmFsU3RhdHMnO1xuaW1wb3J0IHsgY2hhbmdlTG9nIH0gZnJvbSAnLi93ZWVrTG9nJztcblxuXG5sZXQgZWNvbm9teSA9IHtcbiAgICBCYXNlOiAwLFxuICAgIEFkanVzdGVkOiAwLFxuICAgIFJhdGluZzogMCxcbiAgICBCb251czogMCxcbiAgICB0cmFkZUI6IDAsXG4gICAgdHJhZGVDOiA2LFxuICAgIHRyYWRlTTogMCxcbiAgICBwcm9kQjogMCxcbiAgICBwcm9kQzogNCxcbiAgICBwcm9kTTogMCxcbiAgICB0YXhJbmM6IDAsXG4gICAgdGF4RGVjOiAwLFxufVxuXG5mdW5jdGlvbiBlY29ub215QmFzZSgpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgbGV0IGIgPSAwO1xuXG4gICAgaWYoZWNvbm9teS50cmFkZUMgPiBlY29ub215LnRyYWRlTSkge1xuICAgICAgICBhID0gZWNvbm9teS50cmFkZU07XG4gICAgfSBlbHNlIGEgPSBlY29ub215LnRyYWRlQztcblxuICAgIGlmKGVjb25vbXkucHJvZEMgPiBlY29ub215LnByb2RNKSB7XG4gICAgICAgIGIgPSBlY29ub215LnByb2RNO1xuICAgIH0gZWxzZSBiID0gZWNvbm9teS5wcm9kQztcblxuICAgIGVjb25vbXkuQmFzZSA9ICgoKGEgKyBiKSAvIHNldHRsZW1lbnQubGV2ZWwpICogKHNldHRsZW1lbnQuY3VycmVudEhlYWx0aCAvIHNldHRsZW1lbnQubWF4SGVhbHRoKSkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4gZWNvbm9teS5CYXNlO1xufVxuXG5mdW5jdGlvbiBlY29ub215Qm9udXMoaSkge1xuICAgIGVjb25vbXkuQm9udXMgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLmVjb25vbXkgKz0gcGFyc2VJbnQoaSk7XG4gICAgdHJhZGVDdXJyZW50KGkpO1xuICAgIHByb2RDdXJyZW50KGkpO1xuICAgIHRyYWRlTWF4KCk7XG4gICAgcHJvZE1heCgpO1xufVxuXG5mdW5jdGlvbiB0cmFkZUJvbnVzKGkpIHtcbiAgICBlY29ub215LnRyYWRlQiArPSBwYXJzZUludChpKTtcbiAgICBjaGFuZ2VMb2cudHJhZGVCICs9IHBhcnNlSW50KGkpO1xuICAgIHRyYWRlQ3VycmVudChpKTtcbiAgICB0cmFkZU1heCgpO1xufVxuXG5mdW5jdGlvbiB0cmFkZUN1cnJlbnQoaSkge1xuICAgIGVjb25vbXkudHJhZGVDICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy50cmFkZSArPSBwYXJzZUludChpKTtcbn1cblxuZnVuY3Rpb24gdHJhZGVNYXgoKSB7XG4gICAgZWNvbm9teS50cmFkZU0gPSAoKHNldHRsZW1lbnQubGV2ZWwgKiA1KSArIGVjb25vbXkuQm9udXMgKyBlY29ub215LnRyYWRlQik7XG59XG5cbmZ1bmN0aW9uIHByb2RCb251cyhpKSB7XG4gICAgZWNvbm9teS5wcm9kQiArPSBwYXJzZUludChpKTtcbiAgICBjaGFuZ2VMb2cucHJvZEIgKz0gcGFyc2VJbnQoaSk7XG4gICAgcHJvZEN1cnJlbnQoaSlcbiAgICBwcm9kTWF4KCk7XG59XG5cbmZ1bmN0aW9uIHByb2RDdXJyZW50KGkpIHtcbiAgICBlY29ub215LnByb2RDICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5wcm9kICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBwcm9kTWF4KCkge1xuICAgIGVjb25vbXkucHJvZE0gPSAgKChzZXR0bGVtZW50LmxldmVsICogMikgKyBlY29ub215LkJvbnVzICsgZWNvbm9teS5wcm9kQilcbn1cblxuZnVuY3Rpb24gYWN0dWFsVGF4ZXMoKSB7XG4gICAgbGV0IGkgPSBiYXNlVGF4ZXMoKTtcbiAgICByZXR1cm4gKGkqMS4wNSkudG9GaXhlZCgwKTtcbn1cblxuZnVuY3Rpb24gY29tbW9uSXRlbSgpIHtcbiAgICByZXR1cm4gc2V0dGxlbWVudC5sZXZlbDsgXG59XG5cbmZ1bmN0aW9uIHVuY29tbW9uSXRlbSgpIHtcbiAgICByZXR1cm4gc2V0dGxlbWVudC5sZXZlbCAtIDI7XG59XG5cbmV4cG9ydCB7IGFjdHVhbFRheGVzLCBjb21tb25JdGVtLCBlY29ub215LCBlY29ub215QmFzZSwgZWNvbm9teUJvbnVzLCBwcm9kQm9udXMsIHByb2RDdXJyZW50LCBwcm9kTWF4LCB0cmFkZUJvbnVzLCB0cmFkZUN1cnJlbnQsIHRyYWRlTWF4LCB1bmNvbW1vbkl0ZW0gfSIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlbG9hZFwiO1xuaW1wb3J0IG92ZXJ2aWV3UmVuZGVyIGZyb20gXCIuL292ZXJ2aWV3UmVuZGVyXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHRheFJlbmRlciBmcm9tIFwiLi90YXhSZW5kZXJcIjtcbmltcG9ydCB7c2hvcFdpbmRvd30gZnJvbSBcIi4vc2hvcFdpbmRvd1wiO1xuaW1wb3J0IHtwcm9qZWN0Qm94UmVuZGVyfSBmcm9tIFwiLi9wcm9qZWN0Qm94UmVuZGVyXCI7XG5pbXBvcnQgeyByZW5kZXJCdWlsZGluZ3MgfSBmcm9tIFwiLi9yZW5kZXJCdWlsZGluZ3NcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtzIH0gZnJvbSBcIi4vd2Vla0xvZ1wiO1xuXG5cblxuXG5wYWdlTG9hZCgpO1xub3ZlcnZpZXdSZW5kZXIoKTtcbnRheFJlbmRlcigpO1xuc2hvcFdpbmRvdygpO1xucHJvamVjdEJveFJlbmRlcigpO1xucmVuZGVyQnVpbGRpbmdzKCk7XG5yZW5kZXJXZWVrcygpOyIsImltcG9ydCB7IGNvbXBpbGVFdmVudCB9IGZyb20gXCIuL2NvbXBpbGVFdmVudFwiO1xuaW1wb3J0IG92ZXJ2aWV3UmVuZGVyIGZyb20gXCIuL292ZXJ2aWV3UmVuZGVyXCI7XG5pbXBvcnQgeyBwcm9qZWN0Qm94UmVuZGVyIH0gZnJvbSBcIi4vcHJvamVjdEJveFJlbmRlclwiO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3JlbmRlclByb2plY3RzXCI7XG5pbXBvcnQgdGF4UmVuZGVyIGZyb20gXCIuL3RheFJlbmRlclwiO1xuXG5sZXQgY29zdENvdW50ID0gMDsgXG5sZXQgaW1wYWN0Q291bnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdFdmVudCgpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TWFuYWdlbWVudCcpO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB3cmFwcGVyLnN0eWxlID0gXCJib3gtc2l6aW5nOiBib3JkZXItYm94OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlXCI7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgRXZlbnRcIjtcbiAgICBoZWFkZXIuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwxMjAsMTIwLC4zKTtcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBsZXQgbmFtZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVCb3guc3R5bGUgPSBcInBhZGRpbmc6IC41cmVtOyBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7IGhlaWdodDogMTAlOyBhbGlnbi1pdGVtczogY2VudGVyOyBkaXNwbGF5OiBmbGV4O1wiXG4gICAgbGV0IG5hbWVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUVudHJ5LnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZUVudHJ5LnBsYWNlaG9sZGVyID0gXCJFdmVudCBOYW1lXCI7XG4gICAgbmFtZUVudHJ5LnN0eWxlID0gXCJ3aWR0aDogOTUlO1wiXG4gICAgbmFtZUVudHJ5LmlkID0gXCJldmVudE5hbWVcIjtcbiAgICBuYW1lQm94LmFwcGVuZENoaWxkKG5hbWVFbnRyeSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYW1lQm94KTtcblxuICAgIGxldCBzZWNvbmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRSb3cuc3R5bGUgPSAnZGlzcGxheTogZmxleDsgaGVpZ2h0OiAxMCU7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IGFsaWNlYmx1ZSdcblxuICAgIGxldCBiaWdUeXBlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmlnVHlwZUJveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgd2lkdGg6IDUwJTsgYmFja2dyb3VuZDogYWxpY2VibHVlXCJcbiAgICBsZXQgdHlwZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHR5cGVIZWFkZXIuc3R5bGUgPSAnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzdGFydDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDE0LjUlOyBmb250LXNpemU6IDE2cHg7IG1hcmdpbi1sZWZ0OiAuNXJlbSdcbiAgICB0eXBlSGVhZGVyLnRleHRDb250ZW50ID0gXCJUeXBlXCI7XG4gICAgYmlnVHlwZUJveC5hcHBlbmRDaGlsZCh0eXBlSGVhZGVyKTtcblxuICAgIGxldCB0eXBlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHlwZUJveC5zdHlsZSA9IFwicGFkZGluZzogLjVyZW0gMCAuNXJlbSAuNXJlbTsgd2lkdGg6IDY3JVwiXG5cbiAgICBsZXQgdHlwZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHR5cGVTZWxlY3Quc3R5bGUgPSBcIndpZHRoOiAxMDAlOyBmb250LXNpemU6IDE2cHhcIlxuICAgIHR5cGVTZWxlY3QuaWQgPSBcImV2ZW50VHlwZVwiO1xuXG4gICAgbGV0IGltbWVkaWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGltbWVkaWF0ZS52YWx1ZSA9IFwiSW1tZWRpYXRlXCI7XG4gICAgaW1tZWRpYXRlLnRleHRDb250ZW50ID0gXCJJbW1lZGlhdGVcIlxuICAgIHR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQoaW1tZWRpYXRlKTtcblxuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBhY3RpdmUudmFsdWUgPSBcIkFjdGl2ZVwiO1xuICAgIGFjdGl2ZS50ZXh0Q29udGVudCA9IFwiQWN0aXZlXCI7XG4gICAgdHlwZVNlbGVjdC5hcHBlbmRDaGlsZChhY3RpdmUpO1xuXG4gICAgbGV0IHBhc3NpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwYXNzaXZlLnZhbHVlID0gXCJQYXNzaXZlXCI7XG4gICAgcGFzc2l2ZS50ZXh0Q29udGVudCA9IFwiUGFzc2l2ZVwiO1xuICAgIHR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQocGFzc2l2ZSk7XG5cbiAgICBsZXQgaW5kZWZpbml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGluZGVmaW5pdGUudmFsdWUgPSBcIkluZGVmaW5pdGVcIjtcbiAgICBpbmRlZmluaXRlLnRleHRDb250ZW50ID0gXCJJbmRlZmluaXRlXCI7XG4gICAgdHlwZVNlbGVjdC5hcHBlbmRDaGlsZChpbmRlZmluaXRlKTtcbiAgICB0eXBlQm94LmFwcGVuZENoaWxkKHR5cGVTZWxlY3QpO1xuICAgIGJpZ1R5cGVCb3guYXBwZW5kQ2hpbGQodHlwZUJveCk7XG4gICAgc2Vjb25kUm93LmFwcGVuZENoaWxkKGJpZ1R5cGVCb3gpO1xuXG4gICAgbGV0IGJpZ1RpbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiaWdUaW1lQm94LnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGdhcDogNHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogLjU7IHdpZHRoOiA1MCU7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJhY2tncm91bmQ6IGFsaWNlYmx1ZTsgcGFkZGluZy1sZWZ0OiAuNXJlbSdcbiAgICBsZXQgdGltZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWVCb3guc3R5bGUgPSAnZGlzcGxheTogbm9uZSc7XG4gICAgbGV0IHRpbWVWYWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lVmFsQm94LnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnXG4gICAgbGV0IHRpbWVWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpbWVWYWwudHlwZSA9ICdudW1iZXInOyAgIFxuICAgIHRpbWVWYWwuc3R5bGUgPSBcIndpZHRoOiAyNSU7IGZvbnQtc2l6ZTogMTZweDtcIiBcbiAgICB0aW1lVmFsLmlkID0gXCJldmVudFRpbWVWYWxcIlxuICAgIHRpbWVWYWxCb3guYXBwZW5kQ2hpbGQodGltZVZhbCk7XG4gICAgYmlnVGltZUJveC5hcHBlbmRDaGlsZCh0aW1lQm94KTtcbiAgICBiaWdUaW1lQm94LmFwcGVuZENoaWxkKHRpbWVWYWxCb3gpO1xuICAgIHNlY29uZFJvdy5hcHBlbmRDaGlsZChiaWdUaW1lQm94KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlY29uZFJvdyk7XG5cbiAgICBsZXQgY29udGVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRCb3guc3R5bGUuaGVpZ2h0ID0gKCczMy4yNSUnKTtcbiAgICBjb250ZW50Qm94LnN0eWxlLmJhY2tncm91bmQgPSBcImFsaWNlYmx1ZVwiO1xuICAgIGNvbnRlbnRCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgbGV0IGxlZnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0Qm94LnN0eWxlID0gXCJ3aWR0aDogNTAlO1wiXG4gICAgbGVmdEJveC5pZCA9IFwibGVmdEJveFwiOyAgICBcblxuICAgIGxldCBjb21wb25lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wb25lbnRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkV2ZW50IENvc3RzXCI7XG4gICAgY29tcG9uZW50SGVhZGVyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAxOHB4XCJcbiAgICBsZWZ0Qm94LmFwcGVuZENoaWxkKGNvbXBvbmVudEhlYWRlcik7XG5cbiAgICBsZWZ0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZUNvbXBvbmVudCgpKTtcblxuXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChsZWZ0Qm94KTtcblxuXG4gICAgbGV0IHJpZ2h0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRCb3guc3R5bGUgPSBcIndpZHRoOiA1MCU7XCJcbiAgICByaWdodEJveC5pZCA9ICdyaWdodEJveCc7XG5cbiAgICBsZXQgaW1wYWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wYWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJFdmVudCBDaGFuZ2VzXCI7XG4gICAgaW1wYWN0SGVhZGVyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAxOHB4XCJcbiAgICByaWdodEJveC5hcHBlbmRDaGlsZChpbXBhY3RIZWFkZXIpO1xuXG4gICAgcmlnaHRCb3guYXBwZW5kQ2hpbGQoY3JlYXRlSW1wYWN0KCkpXG5cbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHJpZ2h0Qm94KTsgICAgXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcblxuICAgIGxldCBkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZEJveC5zdHlsZSA9IFwiYmFja2dyb3VuZDogYWxpY2VibHVlOyBwYWRkaW5nOiAuNXJlbTsgaGVpZ2h0OiAyNS4yNSU7XCI7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb24uc3R5bGUgPSBcImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMTZweDsgcmVzaXplOiBub25lOyBvdmVyZmxvdy15OiBhdXRvO1wiXG4gICAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkVudGVyIGEgZGVzY3JpcHRpb24gZm9yIHRoZSBldmVudFwiO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJldmVudERldGFpbHNcIjtcbiAgICBkQm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRCb3gpO1xuXG4gICAgbGV0IGJ1dHRvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvblJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IGFsaWNlYmx1ZTsgaGVpZ2h0OiAxMCU7XCI7IFxuXG4gICAgbGV0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gRXZlbnQnO1xuICAgIGNvbmZpcm1CdG4uc3R5bGUgPSBcImZvbnQtc2l6ZTogMTZweDtcIlxuICAgIGJ1dHRvblJvdy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb21waWxlRXZlbnQoKTtcbiAgICAgICAgcHJvamVjdEJveFJlbmRlcigpO1xuICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICB0YXhSZW5kZXIoKTtcbiAgICB9KVxuXG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwgRXZlbnQnO1xuICAgIGNhbmNlbEJ0bi5zdHlsZSA9ICdmb250LXNpemU6IDE2cHg7J1xuICAgIGJ1dHRvblJvdy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29zdENvdW50ID0gMDtcbiAgICAgICAgaW1wYWN0Q291bnQgPSAwO1xuICAgICAgICBwcm9qZWN0Qm94UmVuZGVyKCk7XG4gICAgfSlcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uUm93KTtcblxuICAgIHR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZih0eXBlU2VsZWN0LnZhbHVlID09ICdJbW1lZGlhdGUnIHx8IHR5cGVTZWxlY3QudmFsdWUgPT0gJ0luZGVmaW5pdGUnKSB7XG4gICAgICAgICAgICB0aW1lQm94LnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICAgICAgdGltZVZhbEJveC5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcblxuICAgICAgICB9IGVsc2UgaWYodHlwZVNlbGVjdC52YWx1ZSA9PSBcIkFjdGl2ZVwiKSB7XG4gICAgICAgICAgICB0aW1lQm94LnRleHRDb250ZW50ID0gXCJQcm9kdWN0aXZpdHkgUmVxdWlyZWQ6XCJcbiAgICAgICAgICAgIHRpbWVCb3guc3R5bGUgPSAnZm9udC1zaXplOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0OyB3aWR0aDogODUlJ1xuICAgICAgICAgICAgdGltZVZhbEJveC5zdHlsZSA9IFwiZm9udC1zaXplOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBwYWRkaW5nOiAuMTVyZW07IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZih0eXBlU2VsZWN0LnZhbHVlID09IFwiUGFzc2l2ZVwiKSB7XG4gICAgICAgICAgICB0aW1lQm94LnRleHRDb250ZW50ID0gXCJXZWVrcyBSZW1haW5pbmc6XCJcbiAgICAgICAgICAgIHRpbWVCb3guc3R5bGUgPSAnZm9udC1zaXplOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0OyB3aWR0aDogODUlJ1xuICAgICAgICAgICAgdGltZVZhbEJveC5zdHlsZSA9IFwiZm9udC1zaXplOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBwYWRkaW5nOiAuMTVyZW07IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiO1xuICAgICAgICB9IFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICBjb3N0Q291bnQrKztcblxuICAgIGxldCBjb21wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcEJveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIlxuXG4gICAgbGV0IGNvbXBSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wUm93LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBtYXJnaW4tbGVmdDogLjVyZW07XCI7XG5cbiAgICBsZXQgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBudW0udHlwZSA9ICdudW1iZXInO1xuICAgIG51bS5zdHlsZSA9IFwid2lkdGg6IDE1JTsgZm9udC1zaXplOiAxNnB4OyB0ZXh0LWFsaWduOiBjZW50ZXJcIlxuICAgIG51bS5jbGFzc0xpc3QuYWRkKCdldmVudENvbXBWYWwnKTtcbiAgICBjb21wUm93LmFwcGVuZENoaWxkKG51bSk7IFxuXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpdGVtLnN0eWxlID0gXCJ3aWR0aDogNzAlOyBmb250LXNpemU6IDE2cHg7XCJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2V2ZW50Q29tcEl0ZW0nKVxuXG4gICAgbGV0IHNlbGVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RJdGVtLnZhbHVlID0gJ25vbmUnO1xuICAgIHNlbGVjdEl0ZW0udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBDb21wb25lbnRcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHNlbGVjdEl0ZW0pO1xuXG4gICAgbGV0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBmb29kLnZhbHVlID0gXCJmb29kXCI7XG4gICAgZm9vZC50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZm9vZCk7XG5cbiAgICBsZXQgc3VwcGxpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzdXBwbGllcy52YWx1ZSA9IFwic3VwcGxpZXNcIjtcbiAgICBzdXBwbGllcy50ZXh0Q29udGVudCA9IFwiU3VwcGxpZXNcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHN1cHBsaWVzKTtcblxuICAgIGxldCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWQudmFsdWUgPSBcIm1lZFwiO1xuICAgIG1lZC50ZXh0Q29udGVudCA9IFwiTWVkaWNhbCBDYXBhY2l0eVwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGxldCBkaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRpLnZhbHVlID0gXCJkaVwiO1xuICAgIGRpLnRleHRDb250ZW50ID0gXCJEZWZlbnNpdmUgSW5mcmFzdHJ1Y3R1cmVcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRpKTtcblxuICAgIGxldCBpbnRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGludGVsLnZhbHVlID0gXCJpbnRlbFwiOyAgXG4gICAgaW50ZWwudGV4dENvbnRlbnQgPSBcIkludGVsbGlnZW5jZVwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW50ZWwpO1xuXG4gICAgbGV0IGdhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGdhci52YWx1ZSA9IFwiZ2FyXCI7XG4gICAgZ2FyLnRleHRDb250ZW50ID0gXCJHYXJyaXNvblwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZ2FyKTtcblxuICAgIGxldCB0cmFkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRyYWRlLnZhbHVlID0gXCJ0cmFkZVwiO1xuICAgIHRyYWRlLnRleHRDb250ZW50ID0gXCJUcmFkZVwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQodHJhZGUpO1xuXG4gICAgbGV0IHByb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcm9kLnZhbHVlID0gXCJwcm9kXCI7XG4gICAgcHJvZC50ZXh0Q29udGVudCA9IFwiUHJvZHVjdGl2aXR5XCI7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwcm9kKTtcblxuICAgIGxldCBnb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZ29sZC52YWx1ZSA9IFwiZ29sZFwiO1xuICAgIGdvbGQudGV4dENvbnRlbnQgPSBcIkdvbGRcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGdvbGQpO1xuXG4gICAgY29tcFJvdy5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgIGlmKGNvc3RDb3VudCA+IDEpIHtcbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnN0eWxlID0gJ2hlaWdodDogMjhweDsgYm9yZGVyLXJhZGl1czogMXJlbTsgZm9udC1zaXplOiAxNnB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7IDsnXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgY29tcFJvdy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYW5jZWxCdG4ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY29zdENvdW50LS1cbiAgICB9KVxufVxuXG4gICAgY29tcEJveC5hcHBlbmRDaGlsZChjb21wUm93KTtcbiAgICBcbiAgICBsZXQgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsdXMudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgcGx1cy5zdHlsZSA9IFwiYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lXCJcbiAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0Qm94Jyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29tcG9uZW50KCkpO1xuICAgICAgICBwbHVzLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBjb21wQm94LmFwcGVuZENoaWxkKHBsdXMpO1xuXG4gICAgcmV0dXJuIGNvbXBCb3g7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1wYWN0KCkge1xuICAgIGltcGFjdENvdW50Kys7XG5cbiAgICBsZXQgY29tcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBCb3guc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyXCJcblxuICAgIGxldCBjb21wUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcFJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgbWFyZ2luLWxlZnQ6IC41cmVtO1wiO1xuXG4gICAgbGV0IG51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbnVtLnR5cGUgPSAnbnVtYmVyJztcbiAgICBudW0uc3R5bGUgPSBcIndpZHRoOiAxNSU7IGZvbnQtc2l6ZTogMTZweDsgdGV4dC1hbGlnbjogY2VudGVyXCJcbiAgICBudW0uY2xhc3NMaXN0LmFkZCgnZXZlbnRJbXBhY3RWYWwnKTtcbiAgICBjb21wUm93LmFwcGVuZENoaWxkKG51bSk7IFxuXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpdGVtLnN0eWxlID0gXCJ3aWR0aDogNzAlOyBmb250LXNpemU6IDE2cHg7XCJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2V2ZW50SW1wYWN0SXRlbScpO1xuXG4gICAgbGV0IHNlbGVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RJdGVtLnZhbHVlID0gJ25vbmUnO1xuICAgIHNlbGVjdEl0ZW0udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBDb21wb25lbnRcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHNlbGVjdEl0ZW0pO1xuXG4gICAgbGV0IHN1cnZpdmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgc3Vydml2YWwudmFsdWUgPSBcInN1cnZpdmFsXCI7XG4gICAgc3Vydml2YWwudGV4dENvbnRlbnQgPSBcIlN1cnZpdmFsIE1vZFwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoc3Vydml2YWwpO1xuXG4gICAgbGV0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBmb29kLnZhbHVlID0gXCJmb29kXCI7XG4gICAgZm9vZC50ZXh0Q29udGVudCA9IFwiRm9vZCBNb2RcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGZvb2QpO1xuXG4gICAgbGV0IHN1cHBsaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgc3VwcGxpZXMudmFsdWUgPSBcInN1cHBsaWVzXCI7XG4gICAgc3VwcGxpZXMudGV4dENvbnRlbnQgPSBcIlN1cHBsaWVzIE1vZFwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoc3VwcGxpZXMpO1xuXG4gICAgbGV0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZC52YWx1ZSA9IFwibWVkXCI7XG4gICAgbWVkLnRleHRDb250ZW50ID0gXCJNZWRpY2FsIENhcGFjaXR5IE1vZFwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGxldCBzYWZldHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzYWZldHkudmFsdWUgPSBcInNhZmV0eVwiO1xuICAgIHNhZmV0eS50ZXh0Q29udGVudCA9IFwiU2FmZXR5IE1vZFwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoc2FmZXR5KTtcblxuICAgIGxldCBkaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRpLnZhbHVlID0gXCJkaVwiO1xuICAgIGRpLnRleHRDb250ZW50ID0gXCJEZWZlbnNpdmUgSW5mcmFzdHJ1Y3R1cmUgTW9kXCI7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChkaSk7XG5cbiAgICBsZXQgaW50ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBpbnRlbC52YWx1ZSA9IFwiaW50ZWxcIjsgIFxuICAgIGludGVsLnRleHRDb250ZW50ID0gXCJJbnRlbGxpZ2VuY2UgTW9kXCI7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpbnRlbCk7XG5cbiAgICBsZXQgZ2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZ2FyLnZhbHVlID0gXCJnYXJcIjtcbiAgICBnYXIudGV4dENvbnRlbnQgPSBcIkdhcnJpc29uIE1vZFwiO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZ2FyKTtcblxuICAgIGxldCBlY29ub215ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWNvbm9teS52YWx1ZSA9IFwiZWNvbm9teVwiO1xuICAgIGVjb25vbXkudGV4dENvbnRlbnQgPSBcIkVjb25vbXkgTW9kXCI7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChlY29ub215KTtcblxuICAgIGxldCB0cmFkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRyYWRlLnZhbHVlID0gXCJ0cmFkZVwiO1xuICAgIHRyYWRlLnRleHRDb250ZW50ID0gXCJUcmFkZSBNb2RcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRyYWRlKTtcblxuICAgIGxldCBwcm9kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHJvZC52YWx1ZSA9IFwicHJvZFwiO1xuICAgIHByb2QudGV4dENvbnRlbnQgPSBcIlByb2R1Y3Rpdml0eSBNb2RcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHByb2QpO1xuXG4gICAgbGV0IG1heEhlYWx0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1heEhlYWx0aC52YWx1ZSA9IFwibWF4SGVhbHRoXCI7XG4gICAgbWF4SGVhbHRoLnRleHRDb250ZW50ID0gXCJNYXggSGVhbHRoXCI7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChtYXhIZWFsdGgpO1xuXG4gICAgbGV0IGxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGV2ZWwudmFsdWUgPSBcImxldmVsXCI7XG4gICAgbGV2ZWwudGV4dENvbnRlbnQgPSBcIkxldmVsXCI7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChsZXZlbCk7XG5cbiAgICBsZXQgc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzcC52YWx1ZSA9IFwic3BcIjtcbiAgICBzcC50ZXh0Q29udGVudCA9IFwiU2V0dGxlbWVudCBQb2ludHNcIjtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHNwKTtcblxuICAgIGNvbXBSb3cuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICBpZihpbXBhY3RDb3VudCA+IDEpIHtcbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnN0eWxlID0gJ2hlaWdodDogMjhweDsgYm9yZGVyLXJhZGl1czogMXJlbTsgZm9udC1zaXplOiAxNnB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7IDsnXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgY29tcFJvdy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYW5jZWxCdG4ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY29zdENvdW50LS1cbiAgICB9KVxufVxuICAgIGNvbXBCb3guYXBwZW5kQ2hpbGQoY29tcFJvdyk7XG5cbiAgICBsZXQgcGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsdXMudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgcGx1cy5zdHlsZSA9IFwiYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiBub25lXCJcbiAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodEJveCcpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUltcGFjdCgpKTtcbiAgICAgICAgcGx1cy5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgY29tcEJveC5hcHBlbmRDaGlsZChwbHVzKTtcblxuICAgIHJldHVybiBjb21wQm94O1xuXG59IiwiaW1wb3J0IHsgc2V0dGxlbWVudCwgc3BlbmQgfSBmcm9tICcuL3NldHRsZW1lbnRTdGF0cy5qcyc7XG5pbXBvcnQgeyBmb29kQ3VycmVudCwgZm9vZE1heCwgbWVkQ3VycmVudCwgbWVkTWF4LCBzdXBDdXJyZW50LCBzdXBNYXgsIHN1cnZpdmFsLCBzdXJ2aXZhbEJhc2UsIHN1cnZpdmFsQm9udXMsIHN1cnZpdmFsQ2hhbmdlIH0gZnJvbSAnLi9zdXJ2aXZhbFN0YXRzLmpzJztcbmltcG9ydCB7IGRpQ3VycmVudCwgZGlNYXgsIGdhckN1cnJlbnQsIGdhck1heCwgaW50ZWxDdXJyZW50LCBpbnRlbE1heCwgc2FmZXR5LCBzYWZldHlCYXNlLCBzYWZldHlCb251cyB9IGZyb20gJy4vc2FmZXR5U3RhdHMuanMnO1xuaW1wb3J0IHsgZWNvbm9teSwgZWNvbm9teUJhc2UsIGVjb25vbXlCb251cywgcHJvZEN1cnJlbnQsIHByb2RNYXgsIHRyYWRlQ3VycmVudCwgdHJhZGVNYXggfSBmcm9tICcuL2Vjb25vbXlTdGF0cy5qcyc7XG5pbXBvcnQgeyBidWlsZGluZ3MgfSBmcm9tICcuL2J1aWxkaW5nc1N0YXRzLmpzJztcbmltcG9ydCB7IGNhbGNXb3JrZXJzIH0gZnJvbSAnLi9wcm9qZWN0Qm94UmVuZGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3ZlcnZpZXdSZW5kZXIoKSB7XG5cblxuLy9vdmVydmlldyBTaWRlXG5sZXQgb3ZlcnZpZXdDb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJ2aWV3XCIpO1xub3ZlcnZpZXdDb2wuaW5uZXJIVE1MID0gXCJcIjtcblxuLy9jcmVhdGluZyBzZXR0bGVtZW50IGluZm8gaGVhZGVyXG5sZXQgbmFtZUxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5uYW1lTGV2ZWwuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyBoZWlnaHQ6IDg1cHhcIlxuXG5sZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5mby5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgd2lkdGg6IDUwJTtcIjtcblxubGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubmFtZS5pZCA9IFwic2V0dGxlbWVudE5hbWVcIlxubmFtZS50eXBlID0gJ3RleHQnO1xubmFtZS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgU2V0dGxlbWVudCBOYW1lXCI7XG5uYW1lLnZhbHVlID0gc2V0dGxlbWVudC5uYW1lO1xubmFtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgc2V0dGxlbWVudC5uYW1lID0gbmFtZS52YWx1ZTtcbn0pXG5pbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xuXG5sZXQgbGV2ZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxldmVsQm94LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBnYXA6IC41cmVtO1wiXG5cbmxldCBsZXZlbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXZlbExhYmVsLnRleHRDb250ZW50ID0gXCJMZXZlbFwiO1xubGV2ZWxCb3guYXBwZW5kQ2hpbGQobGV2ZWxMYWJlbCk7XG5cbmxldCBsZXZlbFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXZlbFZhbHVlLnRleHRDb250ZW50ID0gc2V0dGxlbWVudC5sZXZlbDtcbmxldmVsQm94LmFwcGVuZENoaWxkKGxldmVsVmFsdWUpO1xuXG4vL3R5cGUgdW5sb2NrZWQgYXQgbGV2ZWwgNFxubGV0IHNldHRsZW1lbnRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXR0bGVtZW50VHlwZS50ZXh0Q29udGVudCA9IHNldHRsZW1lbnQudHlwZTtcbmlmKHNldHRsZW1lbnQudHlwZSAhPSBcIlwiKSB7XG4gICAgbGV2ZWxCb3guYXBwZW5kQ2hpbGQoc2V0dGxlbWVudFR5cGUpO1xufVxuXG5sZXQgc2V0dGxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXR0bGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBcIlNldHRsZW1lbnRcIjtcbmxldmVsQm94LmFwcGVuZENoaWxkKHNldHRsZW1lbnRMYWJlbCk7XG5pbmZvLmFwcGVuZENoaWxkKGxldmVsQm94KTtcblxubmFtZUxldmVsLmFwcGVuZENoaWxkKGluZm8pO1xuXG5sZXQgc3BCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNwQm94LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDUwJVwiO1xuXG5sZXQgc3BWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNwVmFsLmlkID0gXCJzZXR0bGVtZW50UG9pbnRzXCI7XG5zcFZhbC50ZXh0Q29udGVudCA9IHNldHRsZW1lbnQuc2V0dGxlbWVudFBvaW50cztcbnNwQm94LmFwcGVuZENoaWxkKHNwVmFsKTtcblxubGV0IHNwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNwTGFiZWwudGV4dENvbnRlbnQgPSBcIlNldHRsZW1lbnQgUG9pbnRzXCI7XG5zcEJveC5hcHBlbmRDaGlsZChzcExhYmVsKTtcblxubmFtZUxldmVsLmFwcGVuZENoaWxkKHNwQm94KTtcblxub3ZlcnZpZXdDb2wuYXBwZW5kQ2hpbGQobmFtZUxldmVsKTtcblxuLy8vLy8vLy9TVVJWSVZBTCBTQ09SRSBCT1gvLy8vLy8vL1xubGV0IHN1cnZpdmFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdXJ2aXZhbEJveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtblwiO1xuc3Vydml2YWxCb3guaWQgPSBcInN1ckJveFwiXG5cbmxldCBzdXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckhlYWRlci5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4OyBnYXA6IDFyZW07JztcblxubGV0IHN1cnZpdmFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1cnZpdmFsTGFiZWwudGV4dENvbnRlbnQgPSBcIlN1cnZpdmFsIFJhdGluZzpcIjtcbnN1ckhlYWRlci5hcHBlbmRDaGlsZChzdXJ2aXZhbExhYmVsKTtcblxubGV0IHN1clJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VyUmF0aW5nLnRleHRDb250ZW50ID0gc3Vydml2YWwuUmF0aW5nO1xuc3VySGVhZGVyLmFwcGVuZENoaWxkKHN1clJhdGluZyk7XG5cbi8vLy8vLy8vU1VSVklWQUwgQk9OVVMvLy8vLy8vLy9cbmxldCBzdXJCb251c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VyQm9udXNCb3guc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7XCJcblxubGV0IHN1clBNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pZihzdXJ2aXZhbC5Cb251cyA+PSAwKSB7XG4gICAgc3VyUE0udGV4dENvbnRlbnQgPSBcIitcIlxufSBlbHNlIHtcbiAgICBzdXJQTS50ZXh0Q29udGVudCA9IFwiXCI7XG59O1xuc3VyQm9udXNCb3guYXBwZW5kQ2hpbGQoc3VyUE0pO1xuXG5sZXQgc3VyQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VyQi50ZXh0Q29udGVudCA9IHN1cnZpdmFsLkJvbnVzO1xuc3VyQm9udXNCb3guYXBwZW5kQ2hpbGQoc3VyQik7XG5zdXJIZWFkZXIuYXBwZW5kQ2hpbGQoc3VyQm9udXNCb3gpO1xuXG5zdXJ2aXZhbEJveC5hcHBlbmRDaGlsZChzdXJIZWFkZXIpO1xuXG4vLy8vLy8vL1NVUlZJVkFMIENPTVBPTkVOVFMvLy8vLy8vL1xuLy8vLy8vL1NVUlZJVkFMIENPTVBPTkVOVCBMQUJFTFMvLy8vLy8vL1xubGV0IHN1ckNMUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdXJDTFJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDtcIjtcblxubGV0IHN1ckNvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckNvbXAudGV4dENvbnRlbnQgPSBcIkNvbXBvbmVudFwiO1xuc3VyQ29tcC5jbGFzc0xpc3QuYWRkKCdjb21wb25lbnQnKTtcbnN1ckNMUm93LmFwcGVuZENoaWxkKHN1ckNvbXApO1xuXG5sZXQgc3VyQ0IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckNCLnRleHRDb250ZW50ID0gXCJCb251c1wiO1xuc3VyQ0IuY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5zdXJDTFJvdy5hcHBlbmRDaGlsZChzdXJDQik7XG5cbmxldCBzdXJDQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VyQ0MudGV4dENvbnRlbnQgPSBcIkN1cnJlbnRcIjtcbnN1ckNDLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuc3VyQ0xSb3cuYXBwZW5kQ2hpbGQoc3VyQ0MpO1xuXG5sZXQgc3VyQ00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckNNLnRleHRDb250ZW50ID0gXCJNYXhcIjtcbnN1ckNNLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuc3VyQ0xSb3cuYXBwZW5kQ2hpbGQoc3VyQ00pO1xuXG5zdXJ2aXZhbEJveC5hcHBlbmRDaGlsZChzdXJDTFJvdyk7XG5cbi8vLy8vLy8vRk9PRCBDT01QT05FTlQvLy8vLy8vLy9cbmxldCBmb29kUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb29kUm93LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4O1wiO1xuXG5sZXQgZm9vZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb29kTGFiZWwuY2xhc3NMaXN0LmFkZCgnZ2xvc0J0bicsJ2NvbXBvbmVudCcpO1xuZm9vZExhYmVsLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG5mb29kUm93LmFwcGVuZENoaWxkKGZvb2RMYWJlbCk7XG5cbmxldCBmb29kQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vZEIudGV4dENvbnRlbnQgPSBzdXJ2aXZhbC5mb29kQjtcbmZvb2RCLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpXG5mb29kUm93LmFwcGVuZENoaWxkKGZvb2RCKTtcblxubGV0IGZvb2RDUGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vZENQYWlyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4XCI7XG5mb29kQ1BhaXIuY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5cbmxldCBmb29kQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vZEMudGV4dENvbnRlbnQgPSBzdXJ2aXZhbC5mb29kQztcbmZvb2RDUGFpci5hcHBlbmRDaGlsZChmb29kQyk7XG5cbmxldCBmb29kU1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmZvb2RTUC5jbGFzc0xpc3QuYWRkKCdTUEJ1eUJ0bicpO1xuZm9vZFNQLnRleHRDb250ZW50ID0gXCIrXCI7XG5mb29kU1AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoc2V0dGxlbWVudC5zZXR0bGVtZW50UG9pbnRzID4gMCkge1xuICAgICAgICBzcGVuZCgxKTtcbiAgICAgICAgZm9vZEN1cnJlbnQoMSk7XG4gICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgfVxufSk7XG5mb29kQ1BhaXIuYXBwZW5kQ2hpbGQoZm9vZFNQKTtcblxuZm9vZFJvdy5hcHBlbmRDaGlsZChmb29kQ1BhaXIpO1xuXG5sZXQgZm9vZE0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb2RNYXgoKTtcbmZvb2RNLnRleHRDb250ZW50ID0gc3Vydml2YWwuZm9vZE07XG5mb29kTS5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcbmZvb2RSb3cuYXBwZW5kQ2hpbGQoZm9vZE0pO1xuXG5zdXJ2aXZhbEJveC5hcHBlbmRDaGlsZChmb29kUm93KTtcblxuLy8vLy8vLy9TVVBQTElFUyBDT01QT05FTlQvLy8vLy8vL1xubGV0IHN1cFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VwUm93LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4O1wiIDtcblxubGV0IHN1cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdXBMYWJlbC5jbGFzc0xpc3QuYWRkKCdnbG9zQnRuJywnY29tcG9uZW50Jyk7XG5zdXBMYWJlbC50ZXh0Q29udGVudCA9IFwiR2VuZXJhbCBTdXBwbGllc1wiO1xuc3VwUm93LmFwcGVuZENoaWxkKHN1cExhYmVsKTtcblxubGV0IHN1cEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1cEIudGV4dENvbnRlbnQgPSBzdXJ2aXZhbC5zdXBCO1xuc3VwQi5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKVxuc3VwUm93LmFwcGVuZENoaWxkKHN1cEIpO1xuXG5sZXQgc3VwQ1BhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1cENQYWlyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4XCI7XG5zdXBDUGFpci5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKVxuXG5sZXQgc3VwQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VwQy50ZXh0Q29udGVudCA9IHN1cnZpdmFsLnN1cEM7XG5zdXBDUGFpci5hcHBlbmRDaGlsZChzdXBDKTtcblxubGV0IHN1cFNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zdXBTUC5jbGFzc0xpc3QuYWRkKCdTUEJ1eUJ0bicpO1xuc3VwU1AudGV4dENvbnRlbnQgPSBcIitcIjtcbnN1cFNQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHNldHRsZW1lbnQuc2V0dGxlbWVudFBvaW50cyA+IDEpIHtcbiAgICAgICAgc3BlbmQoMik7XG4gICAgICAgIHN1cEN1cnJlbnQoMSk7XG4gICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgfVxufSk7XG5zdXBDUGFpci5hcHBlbmRDaGlsZChzdXBTUCk7XG5cbnN1cFJvdy5hcHBlbmRDaGlsZChzdXBDUGFpcik7XG5cbmxldCBzdXBNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdXBNYXgoKTtcbnN1cE0udGV4dENvbnRlbnQgPSBzdXJ2aXZhbC5zdXBNO1xuc3VwTS5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKVxuc3VwUm93LmFwcGVuZENoaWxkKHN1cE0pO1xuXG5zdXJ2aXZhbEJveC5hcHBlbmRDaGlsZChzdXBSb3cpO1xuXG4vLy8vLy8vL01FRElDQUwgQ0FQQUNJVFkgQ09NUE9ORU5ULy8vLy8vLy9cbmxldCBtZWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lZFJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDtcIjtcblxubGV0IG1lZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZWRMYWJlbC5jbGFzc0xpc3QuYWRkKCdnbG9zQnRuJywnY29tcG9uZW50Jyk7XG5tZWRMYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaWNhbCBDYXBhY2l0eVwiO1xubWVkUm93LmFwcGVuZENoaWxkKG1lZExhYmVsKTtcblxubGV0IG1lZEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lZEIudGV4dENvbnRlbnQgPSBzdXJ2aXZhbC5tZWRCO1xubWVkQi5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKVxubWVkUm93LmFwcGVuZENoaWxkKG1lZEIpO1xuXG5sZXQgbWVkQ1BhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lZENQYWlyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4XCI7XG5tZWRDUGFpci5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKVxuXG5sZXQgbWVkQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVkQy50ZXh0Q29udGVudCA9IHN1cnZpdmFsLm1lZEM7XG5tZWRDUGFpci5hcHBlbmRDaGlsZChtZWRDKTtcblxubGV0IG1lZFNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5tZWRTUC5jbGFzc0xpc3QuYWRkKCdTUEJ1eUJ0bicpO1xubWVkU1AudGV4dENvbnRlbnQgPSBcIitcIjtcbm1lZFNQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHNldHRsZW1lbnQuc2V0dGxlbWVudFBvaW50cyA+IDIpIHtcbiAgICAgICAgc3BlbmQoMyk7XG4gICAgICAgIG1lZEN1cnJlbnQoMSk7XG4gICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgfVxufSk7XG5tZWRDUGFpci5hcHBlbmRDaGlsZChtZWRTUCk7XG5cbm1lZFJvdy5hcHBlbmRDaGlsZChtZWRDUGFpcik7XG5cbmxldCBtZWRNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZWRNYXgoKTtcbm1lZE0udGV4dENvbnRlbnQgPSBzdXJ2aXZhbC5tZWRNO1xubWVkTS5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKVxubWVkUm93LmFwcGVuZENoaWxkKG1lZE0pO1xuXG5zdXJ2aXZhbEJveC5hcHBlbmRDaGlsZChtZWRSb3cpO1xuXG5sZXQgc3VyU2NvcmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1clNjb3JlQm94LmNsYXNzTGlzdC5hZGQoJ3Njb3JlQm94JylcblxubGV0IHN1ckJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckJCb3guc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1wiXG5cbmxldCBzdXJCU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckJTY29yZS50ZXh0Q29udGVudCA9IHN1cnZpdmFsQmFzZSgpO1xuc3VyQkJveC5hcHBlbmRDaGlsZChzdXJCU2NvcmUpO1xuXG5sZXQgc3VyQkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdXJCTGFiZWwudGV4dENvbnRlbnQgPSBcIkJhc2UgU2NvcmVcIjtcbnN1ckJCb3guYXBwZW5kQ2hpbGQoc3VyQkxhYmVsKTtcbnN1clNjb3JlQm94LmFwcGVuZENoaWxkKHN1ckJCb3gpO1xuXG5sZXQgc3VyQUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VyQUJveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCJcblxubGV0IHN1ckFTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VyQVNjb3JlLnRleHRDb250ZW50ID0gc3Vydml2YWwuQWRqdXN0ZWQ7XG5zdXJBQm94LmFwcGVuZENoaWxkKHN1ckFTY29yZSk7XG5cbmxldCBzdXJBTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1ckFMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRqdXN0ZWQgU2NvcmVcIjtcbnN1ckFCb3guYXBwZW5kQ2hpbGQoc3VyQUxhYmVsKTtcbnN1clNjb3JlQm94LmFwcGVuZENoaWxkKHN1ckFCb3gpO1xuXG5zdXJ2aXZhbEJveC5hcHBlbmRDaGlsZChzdXJTY29yZUJveCk7XG5cbm92ZXJ2aWV3Q29sLmFwcGVuZENoaWxkKHN1cnZpdmFsQm94KTtcblxuLy8vLy8vLy9TQUZFVFkgU0NPUkUgQk9YLy8vLy8vLy9cbmxldCBzYWZldHlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZmV0eUJveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtblwiO1xuc2FmZXR5Qm94LmlkID0gXCJzYWZCb3hcIlxuXG5sZXQgc2FmSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZIZWFkZXIuc3R5bGUgPSAnZGlzcGxheTogZmxleDsgZ2FwOiAxcmVtOyc7XG5cbmxldCBzYWZldHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2FmZXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlNhZmV0eSBSYXRpbmc6XCJcbnNhZkhlYWRlci5hcHBlbmRDaGlsZChzYWZldHlMYWJlbCk7XG5cbmxldCBzYWZSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZlJhdGluZy50ZXh0Q29udGVudCA9IHNhZmV0eS5SYXRpbmc7XG5zYWZIZWFkZXIuYXBwZW5kQ2hpbGQoc2FmUmF0aW5nKTtcblxuLy8vLy8vLy9TQUZFVFkgQk9OVVMvLy8vLy8vLy9cbmxldCBzYWZCb251c0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2FmQm9udXNCb3guc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7XCJcblxubGV0IHNhZlBNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pZihzYWZldHkuQm9udXMgPj0gMCkge1xuICAgIHNhZlBNLnRleHRDb250ZW50ID0gXCIrXCJcbn0gZWxzZSB7XG4gICAgc2FmUE0udGV4dENvbnRlbnQgPSBcIlwiO1xufTtcbnNhZkJvbnVzQm94LmFwcGVuZENoaWxkKHNhZlBNKTtcblxubGV0IHNhZkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZkIudGV4dENvbnRlbnQgPSBzYWZldHkuQm9udXM7XG5zYWZCb251c0JveC5hcHBlbmRDaGlsZChzYWZCKTtcbnNhZkhlYWRlci5hcHBlbmRDaGlsZChzYWZCb251c0JveCk7XG5cbnNhZmV0eUJveC5hcHBlbmRDaGlsZChzYWZIZWFkZXIpO1xuXG5cblxuLy8vLy8vLy9TQUZFVFkgQ09NUE9ORU5UUy8vLy8vLy8vXG4vLy8vLy8vU0FGRVRZIENPTVBPTkVOVCBMQUJFTFMvLy8vLy8vL1xubGV0IHNhZkNMUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZDTFJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDtcIjtcblxubGV0IHNhZkNvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZkNvbXAudGV4dENvbnRlbnQgPSBcIkNvbXBvbmVudFwiO1xuc2FmQ29tcC5jbGFzc0xpc3QuYWRkKCdjb21wb25lbnQnKTtcbnNhZkNMUm93LmFwcGVuZENoaWxkKHNhZkNvbXApO1xuXG5sZXQgc2FmQ0IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZkNCLnRleHRDb250ZW50ID0gXCJCb251c1wiO1xuc2FmQ0IuY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5zYWZDTFJvdy5hcHBlbmRDaGlsZChzYWZDQik7XG5cbmxldCBzYWZDQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2FmQ0MudGV4dENvbnRlbnQgPSBcIkN1cnJlbnRcIjtcbnNhZkNDLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuc2FmQ0xSb3cuYXBwZW5kQ2hpbGQoc2FmQ0MpO1xuXG5sZXQgc2FmQ00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZkNNLnRleHRDb250ZW50ID0gXCJNYXhcIjtcbnNhZkNNLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuc2FmQ0xSb3cuYXBwZW5kQ2hpbGQoc2FmQ00pO1xuXG5zYWZldHlCb3guYXBwZW5kQ2hpbGQoc2FmQ0xSb3cpO1xuXG4vLy8vLy8vL0RFRkVOU0lWRSBJTkZSQVNUUlVDVFVSRSBDT01QT05FTlQvLy8vLy8vLy9cbmxldCBkaVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGlSb3cuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7XCI7XG5cbmxldCBkaUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kaUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2dsb3NCdG4nLCdjb21wb25lbnQnKTtcbmRpTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlZmVuc2l2ZSBJbmZyYXN0cnVjdHVyZVwiO1xuZGlSb3cuYXBwZW5kQ2hpbGQoZGlMYWJlbCk7XG5cbmxldCBkaUIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpQi50ZXh0Q29udGVudCA9IHNhZmV0eS5kaUI7XG5kaUIuY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5kaVJvdy5hcHBlbmRDaGlsZChkaUIpO1xuXG5sZXQgZGlDUGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGlDUGFpci5zdHlsZSA9IFwiZGlzcGxheTogZmxleFwiO1xuZGlDUGFpci5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcblxubGV0IGRpQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGlDLnRleHRDb250ZW50ID0gc2FmZXR5LmRpQztcbmRpQ1BhaXIuYXBwZW5kQ2hpbGQoZGlDKTtcblxubGV0IGRpU1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRpU1AuY2xhc3NMaXN0LmFkZCgnU1BCdXlCdG4nKTtcbmRpU1AudGV4dENvbnRlbnQgPSBcIitcIjtcbmRpU1AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoc2V0dGxlbWVudC5zZXR0bGVtZW50UG9pbnRzID4gMSkge1xuICAgICAgICBzcGVuZCgyKTtcbiAgICAgICAgZGlDdXJyZW50KDEpO1xuICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgIH1cbn0pO1xuZGlDUGFpci5hcHBlbmRDaGlsZChkaVNQKTtcblxuZGlSb3cuYXBwZW5kQ2hpbGQoZGlDUGFpcik7XG5cbmxldCBkaU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpTWF4KCk7XG5kaU0udGV4dENvbnRlbnQgPSBzYWZldHkuZGlNO1xuZGlNLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuZGlSb3cuYXBwZW5kQ2hpbGQoZGlNKTtcblxuc2FmZXR5Qm94LmFwcGVuZENoaWxkKGRpUm93KTtcblxuLy8vLy8vLy9JTlRFTCBDT01QT05FTlQvLy8vLy8vL1xubGV0IGludGVsUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbnRlbFJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDtcIjtcblxubGV0IGludGVsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmludGVsTGFiZWwuY2xhc3NMaXN0LmFkZCgnZ2xvc0J0bicsJ2NvbXBvbmVudCcpO1xuaW50ZWxMYWJlbC50ZXh0Q29udGVudCA9IFwiSW50ZWxsaWdlbmNlXCI7XG5pbnRlbFJvdy5hcHBlbmRDaGlsZChpbnRlbExhYmVsKTtcblxubGV0IGludGVsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW50ZWxCLnRleHRDb250ZW50ID0gc2FmZXR5LmludGVsQjtcbmludGVsQi5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcbmludGVsUm93LmFwcGVuZENoaWxkKGludGVsQik7XG5cbmxldCBpbnRlbENQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbnRlbENQYWlyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4XCI7XG5pbnRlbENQYWlyLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuXG5sZXQgaW50ZWxDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbnRlbEMudGV4dENvbnRlbnQgPSBzYWZldHkuaW50ZWxDO1xuaW50ZWxDUGFpci5hcHBlbmRDaGlsZChpbnRlbEMpO1xuXG5sZXQgaW50ZWxTUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaW50ZWxTUC5jbGFzc0xpc3QuYWRkKCdTUEJ1eUJ0bicpO1xuaW50ZWxTUC50ZXh0Q29udGVudCA9IFwiK1wiO1xuaW50ZWxTUC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihzZXR0bGVtZW50LnNldHRsZW1lbnRQb2ludHMgPiAxKSB7XG4gICAgICAgIHNwZW5kKDIpO1xuICAgICAgICBpbnRlbEN1cnJlbnQoMSk7XG4gICAgICAgIG92ZXJ2aWV3UmVuZGVyKClcbiAgICB9XG59KTtcbmludGVsQ1BhaXIuYXBwZW5kQ2hpbGQoaW50ZWxTUCk7XG5cbmludGVsUm93LmFwcGVuZENoaWxkKGludGVsQ1BhaXIpO1xuXG5sZXQgaW50ZWxNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbnRlbE1heCgpO1xuaW50ZWxNLnRleHRDb250ZW50ID0gc2FmZXR5LmludGVsTTtcbmludGVsTS5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcbmludGVsUm93LmFwcGVuZENoaWxkKGludGVsTSk7XG5cbnNhZmV0eUJveC5hcHBlbmRDaGlsZChpbnRlbFJvdyk7XG5cbi8vLy8vLy8vR0FSUklTT04gQ09NUE9ORU5ULy8vLy8vLy9cbmxldCBnYXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdhclJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgXCI7XG5cbmxldCBnYXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ2FyTGFiZWwuY2xhc3NMaXN0LmFkZCgnZ2xvc0J0bicsJ2NvbXBvbmVudCcpO1xuZ2FyTGFiZWwudGV4dENvbnRlbnQgPSBcIkdhcnJpc29uXCI7XG5nYXJSb3cuYXBwZW5kQ2hpbGQoZ2FyTGFiZWwpO1xuXG5sZXQgZ2FyQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ2FyQi50ZXh0Q29udGVudCA9IHNhZmV0eS5nYXJCO1xuZ2FyQi5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcbmdhclJvdy5hcHBlbmRDaGlsZChnYXJCKTtcblxubGV0IGdhckNQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5nYXJDUGFpci5zdHlsZSA9IFwiZGlzcGxheTogZmxleFwiO1xuZ2FyQ1BhaXIuY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5cbmxldCBnYXJDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5nYXJDLnRleHRDb250ZW50ID0gc2FmZXR5LmdhckM7XG5nYXJDUGFpci5hcHBlbmRDaGlsZChnYXJDKTtcblxubGV0IGdhclNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5nYXJTUC5jbGFzc0xpc3QuYWRkKCdTUEJ1eUJ0bicpO1xuZ2FyU1AudGV4dENvbnRlbnQgPSBcIitcIjtcbmdhclNQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHNldHRsZW1lbnQuc2V0dGxlbWVudFBvaW50cyA+IDIpIHtcbiAgICAgICAgc3BlbmQoMyk7XG4gICAgICAgIGdhckN1cnJlbnQoMSk7XG4gICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgIFxuICAgIH1cbn0pO1xuZ2FyQ1BhaXIuYXBwZW5kQ2hpbGQoZ2FyU1ApO1xuXG5nYXJSb3cuYXBwZW5kQ2hpbGQoZ2FyQ1BhaXIpO1xuXG5sZXQgZ2FyTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ2FyTWF4KCk7XG5nYXJNLnRleHRDb250ZW50ID0gc2FmZXR5Lmdhck07XG5nYXJNLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuZ2FyUm93LmFwcGVuZENoaWxkKGdhck0pO1xuXG5zYWZldHlCb3guYXBwZW5kQ2hpbGQoZ2FyUm93KTtcblxubGV0IHNhZlNjb3JlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZTY29yZUJveC5jbGFzc0xpc3QuYWRkKCdzY29yZUJveCcpXG5cbmxldCBzYWZCQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZCQm94LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIlxuXG5sZXQgc2FmQlNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZCU2NvcmUudGV4dENvbnRlbnQgPSBzYWZldHlCYXNlKCk7XG5zYWZCQm94LmFwcGVuZENoaWxkKHNhZkJTY29yZSk7XG5cbmxldCBzYWZCTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZkJMYWJlbC50ZXh0Q29udGVudCA9IFwiQmFzZSBTY29yZVwiO1xuc2FmQkJveC5hcHBlbmRDaGlsZChzYWZCTGFiZWwpO1xuc2FmU2NvcmVCb3guYXBwZW5kQ2hpbGQoc2FmQkJveCk7XG5cbmxldCBzYWZBQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZBQm94LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIlxuXG5sZXQgc2FmQVNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zYWZBU2NvcmUudGV4dENvbnRlbnQgPSBzYWZldHkuQWRqdXN0ZWQ7XG5zYWZBQm94LmFwcGVuZENoaWxkKHNhZkFTY29yZSk7XG5cbmxldCBzYWZBTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNhZkFMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRqdXN0ZWQgU2NvcmVcIjtcbnNhZkFCb3guYXBwZW5kQ2hpbGQoc2FmQUxhYmVsKTtcbnNhZlNjb3JlQm94LmFwcGVuZENoaWxkKHNhZkFCb3gpO1xuXG5zYWZldHlCb3guYXBwZW5kQ2hpbGQoc2FmU2NvcmVCb3gpO1xuXG5vdmVydmlld0NvbC5hcHBlbmRDaGlsZChzYWZldHlCb3gpO1xuXG4vLy8vLy8vL0VDT05PTVkgU0NPUkUgQk9YLy8vLy8vLy9cbmxldCBlY29ub215Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29ub215Qm94LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI7XG5lY29ub215Qm94LmlkID0gJ2Vjb25Cb3gnXG5cbmxldCBlY29uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29uSGVhZGVyLnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGdhcDogMXJlbTsnO1xuXG5sZXQgZWNvbm9teUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29ub215TGFiZWwudGV4dENvbnRlbnQgPSBcIkVjb25vbXkgUmF0aW5nOlwiXG5lY29uSGVhZGVyLmFwcGVuZENoaWxkKGVjb25vbXlMYWJlbCk7XG5cbmxldCBlY29uUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29uUmF0aW5nLnRleHRDb250ZW50ID0gZWNvbm9teS5SYXRpbmc7XG5lY29uSGVhZGVyLmFwcGVuZENoaWxkKGVjb25SYXRpbmcpO1xuXG4vLy8vLy8vL2Vjb25vbXkgQk9OVVMvLy8vLy8vLy9cbmxldCBlY29uQm9udXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVjb25Cb251c0JveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDtcIlxuXG5sZXQgZWNvblBNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pZihlY29ub215LkJvbnVzID49IDApIHtcbiAgICBlY29uUE0udGV4dENvbnRlbnQgPSBcIitcIlxufSBlbHNlIHtcbiAgICBlY29uUE0udGV4dENvbnRlbnQgPSBcIlwiO1xufTtcbmVjb25Cb251c0JveC5hcHBlbmRDaGlsZChlY29uUE0pO1xuXG5sZXQgZWNvbkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVjb25CLnRleHRDb250ZW50ID0gZWNvbm9teS5Cb251cztcbmVjb25Cb251c0JveC5hcHBlbmRDaGlsZChlY29uQik7XG5lY29uSGVhZGVyLmFwcGVuZENoaWxkKGVjb25Cb251c0JveCk7XG5cbmVjb25vbXlCb3guYXBwZW5kQ2hpbGQoZWNvbkhlYWRlcik7XG5cbi8vLy8vLy8vRUNPTk9NWSBDT01QT05FTlRTLy8vLy8vLy9cbi8vLy8vLy9FQ09OT01ZIENPTVBPTkVOVCBMQUJFTFMvLy8vLy8vL1xubGV0IGVjb25DTFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWNvbkNMUm93LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4O1wiO1xuXG5sZXQgZWNvbkNvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVjb25Db21wLnRleHRDb250ZW50ID0gXCJDb21wb25lbnRcIjtcbmVjb25Db21wLmNsYXNzTGlzdC5hZGQoJ2NvbXBvbmVudCcpO1xuZWNvbkNMUm93LmFwcGVuZENoaWxkKGVjb25Db21wKTtcblxubGV0IGVjb25DQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWNvbkNCLnRleHRDb250ZW50ID0gXCJCb251c1wiO1xuZWNvbkNCLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuZWNvbkNMUm93LmFwcGVuZENoaWxkKGVjb25DQik7XG5cbmxldCBlY29uQ0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVjb25DQy50ZXh0Q29udGVudCA9IFwiQ3VycmVudFwiO1xuZWNvbkNDLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuZWNvbkNMUm93LmFwcGVuZENoaWxkKGVjb25DQyk7XG5cbmxldCBlY29uQ00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVjb25DTS50ZXh0Q29udGVudCA9IFwiTWF4XCI7XG5lY29uQ00uY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5lY29uQ0xSb3cuYXBwZW5kQ2hpbGQoZWNvbkNNKTtcblxuZWNvbm9teUJveC5hcHBlbmRDaGlsZChlY29uQ0xSb3cpO1xuXG4vLy8vLy8vL1RSQURFIENPTVBPTkVOVC8vLy8vLy8vL1xubGV0IHRyYWRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFkZVJvdy5zdHlsZSA9IFwiZGlzcGxheTogZmxleDtcIjtcblxubGV0IHRyYWRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRyYWRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnZ2xvc0J0bicsJ2NvbXBvbmVudCcpO1xudHJhZGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVHJhZGVcIjtcbnRyYWRlUm93LmFwcGVuZENoaWxkKHRyYWRlTGFiZWwpO1xuXG5sZXQgdHJhZGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFkZUIudGV4dENvbnRlbnQgPSBlY29ub215LnRyYWRlQjtcbnRyYWRlQi5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcbnRyYWRlUm93LmFwcGVuZENoaWxkKHRyYWRlQik7XG5cbmxldCB0cmFkZUNQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFkZUNQYWlyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4XCI7XG50cmFkZUNQYWlyLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuXG5sZXQgdHJhZGVDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFkZUMudGV4dENvbnRlbnQgPSBlY29ub215LnRyYWRlQztcbnRyYWRlQ1BhaXIuYXBwZW5kQ2hpbGQodHJhZGVDKTtcblxubGV0IHRyYWRlU1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnRyYWRlU1AuY2xhc3NMaXN0LmFkZCgnU1BCdXlCdG4nKTtcbnRyYWRlU1AudGV4dENvbnRlbnQgPSBcIitcIjtcbnRyYWRlU1AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoc2V0dGxlbWVudC5zZXR0bGVtZW50UG9pbnRzID4gMSkge1xuICAgICAgICBzcGVuZCgyKTtcbiAgICAgICAgdHJhZGVDdXJyZW50KDEpO1xuICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgIH1cbn0pO1xudHJhZGVDUGFpci5hcHBlbmRDaGlsZCh0cmFkZVNQKTtcblxudHJhZGVSb3cuYXBwZW5kQ2hpbGQodHJhZGVDUGFpcik7XG5cbmxldCB0cmFkZU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRyYWRlTWF4KCk7XG50cmFkZU0udGV4dENvbnRlbnQgPSBlY29ub215LnRyYWRlTTtcbnRyYWRlTS5jbGFzc0xpc3QuYWRkKCdjb21wU2NvcmUnKTtcbnRyYWRlUm93LmFwcGVuZENoaWxkKHRyYWRlTSk7XG5cbmVjb25vbXlCb3guYXBwZW5kQ2hpbGQodHJhZGVSb3cpO1xuXG4vLy8vLy8vL1BST0RVQ1RJVklUWSBDT01QT05FTlQvLy8vLy8vL1xubGV0IHByb2RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2RSb3cuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7XCI7XG5cbmxldCBwcm9kTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2RMYWJlbC5jbGFzc0xpc3QuYWRkKCdnbG9zQnRuJywnY29tcG9uZW50Jyk7XG5wcm9kTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2R1Y3Rpdml0eVwiO1xucHJvZFJvdy5hcHBlbmRDaGlsZChwcm9kTGFiZWwpO1xuXG5sZXQgcHJvZEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2RCLnRleHRDb250ZW50ID0gZWNvbm9teS5wcm9kQjtcbnByb2RCLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xucHJvZFJvdy5hcHBlbmRDaGlsZChwcm9kQik7XG5cbmxldCBwcm9kQ1BhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2RDUGFpci5zdHlsZSA9IFwiZGlzcGxheTogZmxleFwiO1xucHJvZENQYWlyLmNsYXNzTGlzdC5hZGQoJ2NvbXBTY29yZScpO1xuXG5sZXQgcHJvZEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2RDLnRleHRDb250ZW50ID0gZWNvbm9teS5wcm9kQztcbnByb2RDUGFpci5hcHBlbmRDaGlsZChwcm9kQyk7XG5cbmxldCBwcm9kU1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnByb2RTUC5jbGFzc0xpc3QuYWRkKCdTUEJ1eUJ0bicpO1xucHJvZFNQLnRleHRDb250ZW50ID0gXCIrXCI7XG5wcm9kU1AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoc2V0dGxlbWVudC5zZXR0bGVtZW50UG9pbnRzID4gMSkge1xuICAgICAgICBzcGVuZCgyKTtcbiAgICAgICAgcHJvZEN1cnJlbnQoMSk7XG4gICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kQXZhaWxWYWx1ZScpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZEF2YWlsVmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbGNXb3JrZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbnByb2RDUGFpci5hcHBlbmRDaGlsZChwcm9kU1ApO1xuXG5wcm9kUm93LmFwcGVuZENoaWxkKHByb2RDUGFpcik7XG5cbmxldCBwcm9kTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvZE1heCgpO1xucHJvZE0udGV4dENvbnRlbnQgPSBlY29ub215LnByb2RNO1xucHJvZE0uY2xhc3NMaXN0LmFkZCgnY29tcFNjb3JlJyk7XG5wcm9kUm93LmFwcGVuZENoaWxkKHByb2RNKTtcblxuZWNvbm9teUJveC5hcHBlbmRDaGlsZChwcm9kUm93KTtcblxubGV0IGVjb25TY29yZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWNvblNjb3JlQm94LmNsYXNzTGlzdC5hZGQoJ3Njb3JlQm94JylcblxubGV0IGVjb25CQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29uQkJveC5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCJcblxubGV0IGVjb25CU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVjb25CU2NvcmUudGV4dENvbnRlbnQgPSBlY29ub215QmFzZSgpO1xuZWNvbkJCb3guYXBwZW5kQ2hpbGQoZWNvbkJTY29yZSk7XG5cbmxldCBlY29uQkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29uQkxhYmVsLnRleHRDb250ZW50ID0gXCJCYXNlIFNjb3JlXCI7XG5lY29uQkJveC5hcHBlbmRDaGlsZChlY29uQkxhYmVsKTtcbmVjb25TY29yZUJveC5hcHBlbmRDaGlsZChlY29uQkJveCk7XG5cbmxldCBlY29uQUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWNvbkFCb3guc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1wiXG5cbmxldCBlY29uQVNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lY29uQVNjb3JlLnRleHRDb250ZW50ID0gZWNvbm9teS5BZGp1c3RlZDtcbmVjb25BQm94LmFwcGVuZENoaWxkKGVjb25BU2NvcmUpO1xuXG5sZXQgZWNvbkFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWNvbkFMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRqdXN0ZWQgU2NvcmVcIjtcbmVjb25BQm94LmFwcGVuZENoaWxkKGVjb25BTGFiZWwpO1xuZWNvblNjb3JlQm94LmFwcGVuZENoaWxkKGVjb25BQm94KTtcblxuZWNvbm9teUJveC5hcHBlbmRDaGlsZChlY29uU2NvcmVCb3gpO1xuXG5sZXQgdGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXguaWQgPSAndGF4Qm94JztcblxuXG5vdmVydmlld0NvbC5hcHBlbmRDaGlsZChlY29ub215Qm94KTtcblxuXG53cmFwcGVyLmFwcGVuZENoaWxkKG92ZXJ2aWV3Q29sKTtcblxuXG5cblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuXG5sZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlci5pZCA9IFwid3JhcHBlclwiO1xud3JhcHBlci5zdHlsZSA9IFwiZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlOyBtYXJnaW46IDJyZW07IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDFyZW07XCJcblxuLy9vdmVydmlldyBTaWRlXG5sZXQgb3ZlcnZpZXdDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm92ZXJ2aWV3Q29sLnN0eWxlID0gXCJib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjazsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ3JpZC1hcmVhOiAxLzEvMi8yXCI7XG5vdmVydmlld0NvbC5pZCA9IFwib3ZlcnZpZXdcIjtcblxud3JhcHBlci5hcHBlbmRDaGlsZChvdmVydmlld0NvbCk7XG5cbmxldCBtYW5hZ2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYW5hZ2VtZW50LnN0eWxlID0gXCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjsgZ3JpZC1hcmVhOjEvMi8yLzM7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrXCJcblxubGV0IHRheEJ1eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGF4QnV5LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4O1wiXG5sZXQgdGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXguaWQgPSBcInRheEJveFwiO1xudGF4QnV5LmFwcGVuZENoaWxkKHRheCk7XG5cbmxldCBidXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ1eS5pZCA9IFwiYnV5Qm94XCI7XG50YXhCdXkuYXBwZW5kQ2hpbGQoYnV5KTtcbm1hbmFnZW1lbnQuYXBwZW5kQ2hpbGQodGF4QnV5KTtcblxubGV0IHByb2plY3RNYW5hZ2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcm9qZWN0TWFuYWdlbWVudC5pZCA9IFwicHJvamVjdE1hbmFnZW1lbnRcIjtcbm1hbmFnZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE1hbmFnZW1lbnQpO1xuXG5sZXQgYnVpbGRpbmdVcGdyYWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnVpbGRpbmdVcGdyYWRlcy5pZCA9ICdidWlsZGluZ1VwZ3JhZGVzJ1xuYnVpbGRpbmdVcGdyYWRlcy5zdHlsZSA9IFwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiXG5tYW5hZ2VtZW50LmFwcGVuZENoaWxkKGJ1aWxkaW5nVXBncmFkZXMpO1xuXG5sZXQgbG9nTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ05vdGVzLmlkID0gJ2xvZ05vdGVzJztcbmxvZ05vdGVzLnN0eWxlID0gJ2Rpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsnXG5cbmxldCBsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZy5pZCA9ICd3ZWVrTG9nJztcbmxvZ05vdGVzLmFwcGVuZENoaWxkKGxvZyk7XG5cbmxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubm90ZXMuaWQgPSAnbm90ZXMnO1xubG9nTm90ZXMuYXBwZW5kQ2hpbGQobm90ZXMpOyBcblxubWFuYWdlbWVudC5hcHBlbmRDaGlsZChsb2dOb3Rlcyk7XG5cbndyYXBwZXIuYXBwZW5kQ2hpbGQobWFuYWdlbWVudCk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbn0iLCJpbXBvcnQgeyBlY29ub215IH0gZnJvbSBcIi4vZWNvbm9teVN0YXRzXCI7XG5pbXBvcnQgbmV3RXZlbnQgZnJvbSBcIi4vbmV3RXZlbnRcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi9yZW5kZXJQcm9qZWN0c1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0Qm94UmVuZGVyKCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RNYW5hZ2VtZW50Jyk7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHdyYXBwZXIuc3R5bGUgPSAnd2lkdGg6IDEwMCUnXG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJFdmVudCBNYW5hZ2VtZW50XCI7XG4gICAgaGVhZGVyLnN0eWxlID0gXCJoZWlnaHQ6IDEwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IGdyYXk7XCJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBsZXQgc3ViSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViSGVhZGVyLnN0eWxlID0gXCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlOiAxZnIgLyAyZnIgMWZyOyBwbGFjZS1pdGVtczogY2VudGVyOyBoZWlnaHQ6IDEwJTsgYm94LXNpemluZzogYm9yZGVyLWJveFwiO1xuXG4gICAgbGV0IHByb2RBdmFpbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2RBdmFpbEJveC5pZCA9ICdwcm9kQXZhaWxCb3gnXG5cbiAgICBsZXQgcHJvZEF2YWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9kQXZhaWxMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvZHVjdGl2aXR5IEF2YWlsYWJsZTpcIlxuICAgIHByb2RBdmFpbEJveC5hcHBlbmRDaGlsZChwcm9kQXZhaWxMYWJlbCk7XG5cbiAgICBsZXQgcHJvZEF2YWlsVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9kQXZhaWxWYWx1ZS5pZCA9ICdwcm9kQXZhaWxWYWx1ZSc7XG4gICAgcHJvZEF2YWlsVmFsdWUudGV4dENvbnRlbnQgPSBjYWxjV29ya2VycygpO1xuICAgIHByb2RBdmFpbEJveC5hcHBlbmRDaGlsZChwcm9kQXZhaWxWYWx1ZSk7XG4gICAgc3ViSGVhZGVyLmFwcGVuZENoaWxkKHByb2RBdmFpbEJveClcblxuICAgIGxldCBuZXdQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvakJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IEV2ZW50XCI7XG4gICAgbmV3UHJvakJ0bi5pZCA9ICduZXdQcm9qQnRuJ1xuICAgIG5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld0V2ZW50KCk7XG4gICAgfSlcbiAgICBzdWJIZWFkZXIuYXBwZW5kQ2hpbGQobmV3UHJvakJ0bik7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHN1YkhlYWRlcik7XG5cbiAgICBsZXQgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RCb3guaWQgPSAncHJvamVjdEJveCdcbiAgICBwcm9qZWN0Qm94LnN0eWxlID0gXCJoZWlnaHQ6IDc4JTsgYmFja2dyb3VuZDogYWxpY2VibHVlXCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KVxuXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbn1cblxubGV0IGFjdGl2ZVdvcmtlckNvdW50ID0gMDtcblxubGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG5mdW5jdGlvbiBjYWxjV29ya2VycygpIHtcbiAgICBcbiAgICBsZXQgbnVtID0gMDsgXG4gICAgaWYoZWNvbm9teS5wcm9kQyA+IGVjb25vbXkucHJvZE0pIHtcbiAgICAgICAgbnVtID0gZWNvbm9teS5wcm9kTVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG51bSA9IGVjb25vbXkucHJvZEM7XG4gICAgfTtcbiAgICByZXR1cm4gKG51bSAtPSBhY3RpdmVXb3JrZXJDb3VudClcblxufVxuXG5leHBvcnQgeyBjYWxjV29ya2VycywgcHJvamVjdEFycmF5LCBwcm9qZWN0Qm94UmVuZGVyfSIsImltcG9ydCB7IGJ1aWxkaW5ncyB9IGZyb20gXCIuL2J1aWxkaW5nc1N0YXRzXCI7XG5pbXBvcnQgcmVuZGVyVXBncmFkZXMgZnJvbSBcIi4vcmVuZGVyVXBncmFkZXNcIjtcblxuXG5cbiBmdW5jdGlvbiByZW5kZXJCdWlsZGluZ3MoKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVpbGRpbmdVcGdyYWRlcycpOyBcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHdyYXBwZXIuc3R5bGUgPSAnYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2snXG5cbiAgICBsZXQgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQm94LnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGJhY2tncm91bmQ6IGdyYXk7IGFsaWduLWl0ZW1zOiBjZW50ZXInO1xuXG4gICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYWNlci5zdHlsZSA9IFwid2lkdGg6IDQwJVwiO1xuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZChzcGFjZXIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgaGVpZ2h0OiA5LjA5MDklOyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogZ3JheTsgZm9udC1zaXplOiAyMnB4JztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJ1aWxkaW5nIE1hbmFnZW1lbnRcIjtcbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGxldCB1cGdyYWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHVwZ3JhZGVzLnN0eWxlID0gJ3dpZHRoOiA0MCU7IGJhY2tncm91bmQ6IHJnYmEoMjQwLDI0MCwyNTUsLjYpOyBib3JkZXItcmFkaXVzOiAxcmVtOyBmb250LXNpemU6IDE0cHg7IG1hcmdpbi1yaWdodDogLjVyZW0nXG4gICAgdXBncmFkZXMudGV4dENvbnRlbnQgPSBcIlVwZ3JhZGVzXCJcbiAgICB1cGdyYWRlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVuZGVyVXBncmFkZXMoKTtcbiAgICB9KVxuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZCh1cGdyYWRlcyk7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlckJveCk7XG5cblxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKChibGRnKSA9PiB7XG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGhlaWdodDogOS4wOTA5JSdcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBibGRnLm5hbWU7XG4gICAgICAgIHRpdGxlLnN0eWxlID0gJ2ZvbnQtc2l6ZTogMTVweDsgd2lkdGg6IDIyJTsgcGFkZGluZy1sZWZ0OiAuNXJlbTsgYm94LXNpemluZzogYm9yZGVyLWJveCdcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBsZXQgYnV0dG9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvblJvdy5zdHlsZSA9ICd3aWR0aDogMjAlOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSdcblxuICAgICAgICBsZXQgYnV0dG9uMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbjAudGV4dENvbnRlbnQgPSBcIjBcIjtcbiAgICAgICAgYnV0dG9uMC5jbGFzc0xpc3QuYWRkKCdibGRnQnRuJyk7XG4gICAgICAgIGJ1dHRvbjAuaWQgPSBgJHtibGRnLmlkfTBgO1xuICAgICAgICBidXR0b25Sb3cuYXBwZW5kQ2hpbGQoYnV0dG9uMCk7XG5cbiAgICAgICAgbGV0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uMS50ZXh0Q29udGVudCA9IFwiMVwiO1xuICAgICAgICBidXR0b24xLmNsYXNzTGlzdC5hZGQoJ2JsZGdCdG4nKTtcbiAgICAgICAgYnV0dG9uMS5pZCA9IGAke2JsZGcuaWR9MWA7XG4gICAgICAgIGJ1dHRvblJvdy5hcHBlbmRDaGlsZChidXR0b24xKTtcblxuICAgICAgICBsZXQgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24yLnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYmxkZ0J0bicpO1xuICAgICAgICBidXR0b24yLmlkID0gYCR7YmxkZy5pZH0yYDtcbiAgICAgICAgYnV0dG9uUm93LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuXG4gICAgICAgIGxldCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjMudGV4dENvbnRlbnQgPSBcIjNcIjtcbiAgICAgICAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdibGRnQnRuJyk7XG4gICAgICAgIGJ1dHRvbjMuaWQgPSBgJHtibGRnLmlkfTNgO1xuICAgICAgICBidXR0b25Sb3cuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChidXR0b25Sb3cpO1xuXG4gICAgICAgIGxldCBzdGF0dXNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0YXR1c0FyZWEudGV4dENvbnRlbnQgPSBibGRnLnN0YXR1cztcbiAgICAgICAgc3RhdHVzQXJlYS5zdHlsZSA9ICdmb250LXNpemU6IDE1cHgnXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChzdGF0dXNBcmVhKTtcblxuICAgICAgICBzd2l0Y2goYmxkZy5sZXZlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiBcbiAgICAgICAgICAgICAgICBidXR0b24wLnN0eWxlID0gJ2JhY2tncm91bmQ6IGdyZWVuJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgLjU6IFxuICAgICAgICAgICAgICAgIGJ1dHRvbjEuc3R5bGUgPSAnYmFja2dyb3VuZDogeWVsbG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBidXR0b24xLnN0eWxlID0gJ2JhY2tncm91bmQ6IGdyZWVuJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMS41OiBcbiAgICAgICAgICAgICAgICBidXR0b24yLnN0eWxlID0gJ2JhY2tncm91bmQ6IHllbGxvdyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IFxuICAgICAgICAgICAgICAgIGJ1dHRvbjIuc3R5bGUgPSAnYmFja2dyb3VuZDogZ3JlZW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyLjU6IFxuICAgICAgICAgICAgICAgIGJ1dHRvbjMuc3R5bGUgPSAnYmFja2dyb3VuZDogeWVsbG93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBidXR0b24zLnN0eWxlID0gJ2JhY2tncm91bmQ6IGdyZWVuJztcbiAgICB9XG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChyb3cpO1xufSlcbn1cblxuZXhwb3J0IHsgcmVuZGVyQnVpbGRpbmdzIH1cblxuIiwiaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vcHJvamVjdEJveFJlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Qm94Jyk7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKGV2ZW50KSA9PiB7ICAgICAgICBcblxuICAgICAgICBsZXQgZXZlbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXZlbnRSb3cuY2xhc3NMaXN0LmFkZCgnZXZlbnRSb3cnKTsgXG5cbiAgICAgICAgbGV0IGJveE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib3hPbmUuc3R5bGUgPSAnZGlzcGxheTpmbGV4OyB3aWR0aDogMjUlOyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0OyBnYXA6IDFyZW07IGhlaWdodDogMzJweDsnXG5cbiAgICAgICAgbGV0IGV4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBleHBhbmRCdG4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kQnRuJyk7XG4gICAgICAgIGlmKGV2ZW50LmhpZGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZXhwYW5kQnRuLmlubmVySFRNTCA9ICcmIzg2ODA7J1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHBhbmRCdG4uaW5uZXJIVE1MID0gJyYjODY4MTsnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmhpZGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB0ZXN0ID0gZXZlbnQuY291bnQ7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmQgPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KChlKSA9PiBlLmNvdW50ID09IHRlc3QpO1xuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtmaW5kXS5oaWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVzdCA9IGV2ZW50LmNvdW50O1xuICAgICAgICAgICAgICAgIGxldCBmaW5kID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgoZSkgPT4gZS5jb3VudCA9PSB0ZXN0KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbZmluZF0uaGlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYm94T25lLmFwcGVuZENoaWxkKGV4cGFuZEJ0bik7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZXZlbnQubmFtZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZXZlbnRUaXRsZScpO1xuICAgICAgICB0aXRsZS5zdHlsZSA9IFwiZm9udC1zaXplOiAxNXB4O1wiXG4gICAgICAgIGJveE9uZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgZXZlbnRSb3cuYXBwZW5kQ2hpbGQoYm94T25lKTtcblxuICAgICAgICBsZXQgYm94VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveFR3by5zdHlsZSA9ICdkaXNwbGF5OmZsZXg7IHdpZHRoOiAyNSU7IGp1c3RpZnktY29udGVudDogc3RhcnQ7IGdhcDogMXJlbTsgaGVpZ2h0OiAzMnB4OydcblxuICAgICAgICBsZXQgZHVyYXRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVyYXRpb25Cb3guY2xhc3NMaXN0LmFkZCgnZHVyYXRpb25Cb3gnKTtcblxuICAgICAgICBsZXQgZHVyYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT0gJ0FjdGl2ZScpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2R1Y3Rpdml0eTpcIiAgICBcbiAgICAgICAgfSBlbHNlIGlmKGV2ZW50LnR5cGUgPT0gJ1Bhc3NpdmUnKSB7XG4gICAgICAgICAgICBkdXJhdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJXZWVrcyBSZW1haW5pbmc6XCJcbiAgICAgICAgfSBlbHNlIGlmKGV2ZW50LnR5cGUgPT0gXCJJbmRlZmluaXRlXCIpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIk9uZ29pbmdcIlxuICAgICAgICB9XG5cbiAgICAgICAgZHVyYXRpb25Cb3guYXBwZW5kQ2hpbGQoZHVyYXRpb25MYWJlbCk7XG5cbiAgICAgICAgaWYoZXZlbnQudHlwZSA9PSAnQWN0aXZlJyB8fCBldmVudC50eXBlID09IFwiUGFzc2l2ZVwiKSB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb25WYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR1cmF0aW9uVmFsLnRleHRDb250ZW50ID0gZXZlbnQuZHVyYXRpb247XG4gICAgICAgICAgICBkdXJhdGlvbkJveC5hcHBlbmRDaGlsZChkdXJhdGlvblZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBib3hUd28uYXBwZW5kQ2hpbGQoZHVyYXRpb25Cb3gpO1xuICAgICAgICBldmVudFJvdy5hcHBlbmRDaGlsZChib3hUd28pO1xuXG4gICAgICAgIGxldCBib3hUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib3hUaHJlZS5zdHlsZSA9ICdkaXNwbGF5OmZsZXg7IHdpZHRoOiAyNSU7IGp1c3RpZnktY29udGVudDogc3RhcnQ7IGdhcDogMXJlbTsgaGVpZ2h0OiAzMnB4OydcblxuICAgICAgICBpZihldmVudC50eXBlID09ICdBY3RpdmUnKSB7IFxuICAgICAgICAgICAgbGV0IHdvcmtlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd29ya2VyQm94LmNsYXNzTGlzdC5hZGQoJ3dvcmtlckJveCcpO1xuXG4gICAgICAgICAgICBsZXQgcmVtb3ZlV29ya2VyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZW1vdmVXb3JrZXJCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlV29ya2VyQnRuJyk7XG4gICAgICAgICAgICByZW1vdmVXb3JrZXJCdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICAgICAgICB3b3JrZXJCb3guYXBwZW5kQ2hpbGQocmVtb3ZlV29ya2VyQnRuKTtcblxuICAgICAgICAgICAgbGV0IHdvcmtlclZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3b3JrZXJWYWx1ZS50ZXh0Q29udGVudCA9IGV2ZW50LndvcmtlcnM7XG4gICAgICAgICAgICB3b3JrZXJWYWx1ZS5jbGFzc0xpc3QuYWRkKCd3b3JrZXJWYWx1ZScpO1xuICAgICAgICAgICAgd29ya2VyQm94LmFwcGVuZENoaWxkKHdvcmtlclZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGFkZFdvcmtlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkV29ya2VyQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZVdvcmtlckJ0bicpO1xuICAgICAgICAgICAgYWRkV29ya2VyQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICAgICAgd29ya2VyQm94LmFwcGVuZENoaWxkKGFkZFdvcmtlckJ0bik7XG5cbiAgICAgICAgICAgIGJveFRocmVlLmFwcGVuZENoaWxkKHdvcmtlckJveCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT0gJ0luZGVmaW5pdGUnICYmIGV2ZW50Lmhhc0xpbmsgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBsaW5rRml4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBsaW5rRml4LnN0eWxlID0gXCJmb250LXNpemU6IDEycHg7IG1hcmdpbi1sZWZ0OiAxMCU7XCJcbiAgICAgICAgICAgIGxpbmtGaXgudGV4dENvbnRlbnQgPSBcIkxpbmsgRml4IEFjdGlvblwiO1xuICAgICAgICAgICAgYm94VGhyZWUuYXBwZW5kQ2hpbGQobGlua0ZpeCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudFJvdy5hcHBlbmRDaGlsZChib3hUaHJlZSk7XG5cbiAgICAgICAgbGV0IGJveEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm94Rm91ci5zdHlsZSA9ICdkaXNwbGF5OmZsZXg7IHdpZHRoOiAyNSU7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxcmVtOyBoZWlnaHQ6IDMycHg7J1xuXG4gICAgICAgIGxldCBpbXBhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1wYWN0Qm94LmNsYXNzTGlzdC5hZGQoJ2V2ZW50SW1wYWN0Qm94Jyk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBldmVudC5pbXBhY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGltcGFjdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW1wYWN0Um93LnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcIlxuXG4gICAgICAgICAgICBsZXQgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBudW0udGV4dENvbnRlbnQgPSBldmVudC5pbXBhY3RWYWxzW2ldO1xuICAgICAgICAgICAgaW1wYWN0Um93LmFwcGVuZENoaWxkKG51bSk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gZXZlbnQuaW1wYWN0SXRlbXNbaV07XG4gICAgICAgICAgICBpbXBhY3RSb3cuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgICAgIGltcGFjdEJveC5hcHBlbmRDaGlsZChpbXBhY3RSb3cpO1xuICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgYm94Rm91ci5hcHBlbmRDaGlsZChpbXBhY3RCb3gpO1xuXG4gICAgICAgIGxldCBlbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZW5kQnRuLmNsYXNzTGlzdC5hZGQoJ2VuZEJ0bicpXG4gICAgICAgIGVuZEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYWNlID0gZXZlbnQuY291bnQ7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KChlKSA9PiBlLmNvdW50ID09IHBsYWNlKTtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KVxuICAgICAgICBib3hGb3VyLmFwcGVuZENoaWxkKGVuZEJ0bik7XG5cbiAgICAgICAgZXZlbnRSb3cuYXBwZW5kQ2hpbGQoYm94Rm91cik7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uQm94LmlkID0gYGRlc2Mke2V2ZW50LmNvdW50fWA7XG4gICAgICAgIGRlc2NyaXB0aW9uQm94LnN0eWxlID0gJ3dpZHRoOiAyMDAlOyBoZWlnaHQ6IDEwcmVtOyBtYXgtaGVpZ2h0OiAyMHJlbTsnO1xuICAgICAgICBpZihldmVudC5oaWRlID09IHRydWUpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsJ2Rlc2NCb3gnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0V2ZW50IERlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zdHlsZSA9ICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAxNXB4Oyc7XG4gICAgICAgIGRlc2NyaXB0aW9uQm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGV0YWlscy52YWx1ZSA9IGV2ZW50LmRldGFpbHM7XG4gICAgICAgIGRldGFpbHMuc3R5bGUgPSAnb3ZlcmZsb3cteTogc2Nyb2xsOyByZXNpemU6IG5vbmU7IGZvbnQtc2l6ZTogMTVweDsgd2lkdGg6IDk4JTsgaGVpZ2h0OiA4MCUnXG4gICAgICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuZGV0YWlscyA9IGRldGFpbHMudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkZXNjcmlwdGlvbkJveC5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgICAgICAgZXZlbnRSb3cuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Cb3gpO1xuXG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChldmVudFJvdyk7XG5cbiAgICAgICAgXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXJCdWlsZGluZ3MgfSBmcm9tIFwiLi9yZW5kZXJCdWlsZGluZ3NcIjtcbmltcG9ydCB7IHNldHRsZW1lbnQgfSBmcm9tIFwiLi9zZXR0bGVtZW50U3RhdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVXBncmFkZXMoKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVpbGRpbmdVcGdyYWRlcycpOyBcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHdyYXBwZXIuc3R5bGUgPSAnYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7IG92ZXJmbG93LXk6IHNjcm9sbCdcblxuICAgIGxldCBoZWFkZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJCb3guc3R5bGUgPSAnZGlzcGxheTogZmxleDsgYmFja2dyb3VuZDogZ3JheTsgYWxpZ24taXRlbXM6IGNlbnRlcic7XG5cbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLnN0eWxlID0gXCJ3aWR0aDogNDAlXCI7XG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBoZWlnaHQ6IDkuMDkwOSU7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiBncmF5OyBmb250LXNpemU6IDIycHgnO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2V0dGxlbWVudCBVcGdyYWRlc1wiO1xuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbGV0IGJsZGdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmxkZ3Muc3R5bGUgPSAnd2lkdGg6IDQwJTsgYmFja2dyb3VuZDogcmdiYSgyNDAsMjQwLDI1NSwuNik7IGJvcmRlci1yYWRpdXM6IDFyZW07IGZvbnQtc2l6ZTogMTRweDsgbWFyZ2luLXJpZ2h0OiAuNXJlbSdcbiAgICBibGRncy50ZXh0Q29udGVudCA9IFwiQnVpbGRpbmdzXCJcbiAgICBibGRncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVuZGVyQnVpbGRpbmdzKCk7XG4gICAgfSlcbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoYmxkZ3MpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJCb3gpO1xuXG4gICAgaWYoc2V0dGxlbWVudC5sZXZlbCA8IDQpIHtcbiAgICAgICAgbGV0IGRpc2NsYWltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIGRpc2NsYWltZXIuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MCU7XCJcbiAgICAgICAgZGlzY2xhaW1lci50ZXh0Q29udGVudCA9IFwiWW91ciBTZXR0bGVtZW50IG5lZWRzIHRvIGJlIGxldmVsIDQgdG8gdW5sb2NrIFNldHRsZW1lbnQgVXBncmFkZXNcIlxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRpc2NsYWltZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBncmFkZVRyZWUuZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgaWYobGV2ZWwudmFsdWUgPD0gc2V0dGxlbWVudC5sZXZlbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGVhZGVyLnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMCU7JztcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGxldmVsLnRpdGxlO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgcm93LnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kJ1xuICAgIFxuICAgICAgICAgICAgbGV2ZWwuYXJyYXkuZm9yRWFjaCgodXBnKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5zdHlsZSA9ICdiYWNrZ3JvdW5kOiBub25lOyBib3JkZXItcmFkaXVzOiAxcmVtOyBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7J1xuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IHVwZy5uYW1lO1xuICAgICAgICAgICAgICAgIGJ0bi5pZCA9IHVwZy5pZDtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxubGV0IHVwZ3JhZGVUcmVlID0gW1xuICAgIHtcbiAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgIHRpdGxlOiAnTGV2ZWwgNCAtIFNldHRsZW1lbnQgU3R5bGUnLFxuICAgICAgICBhcnJheTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTdXJ2aXZhbGlzdCBTZXR0bGVtZW50JyxcbiAgICAgICAgICAgICAgICBpZDogJ2w0YzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVmZW5kZXIgU2V0dGxlbWVudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdsNGMyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01lcmNhbnRpbGUgU2V0dGxlbWVudCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdsNGMzJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXVxuIiwiaW1wb3J0IHsgc2V0dGxlbWVudCB9IGZyb20gXCIuL3NldHRsZW1lbnRTdGF0c1wiO1xuaW1wb3J0IHsgc3Vydml2YWwgfSBmcm9tIFwiLi9zdXJ2aXZhbFN0YXRzXCI7XG5pbXBvcnQgeyBlY29ub215IH0gZnJvbSBcIi4vZWNvbm9teVN0YXRzXCI7XG5pbXBvcnQgeyBjaGFuZ2VMb2cgfSBmcm9tIFwiLi93ZWVrTG9nXCI7XG5cbmxldCBzYWZldHkgPSB7XG4gICAgQmFzZTogMCxcbiAgICBBZGp1c3RlZDogMCxcbiAgICBSYXRpbmc6IDAsXG4gICAgQm9udXM6IDAsXG4gICAgZGlCOiAwLFxuICAgIGRpQzogMixcbiAgICBkaU06IDAsXG4gICAgaW50ZWxCOiAwLFxuICAgIGludGVsQzogMixcbiAgICBpbnRlbE06IDAsXG4gICAgZ2FyQjogMCxcbiAgICBnYXJDOiAzLFxuICAgIGdhck06IDBcbn1cblxuZnVuY3Rpb24gc2FmZXR5QmFzZSgpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgbGV0IGIgPSAwO1xuICAgIGxldCBjID0gMDtcblxuICAgIGlmKHNhZmV0eS5kaUMgPiBzYWZldHkuZGlNKSB7XG4gICAgICAgIGEgPSBzYWZldHkuZGlNO1xuICAgIH0gZWxzZSBhID0gc2FmZXR5LmRpQztcblxuICAgIGlmKHNhZmV0eS5pbnRlbEMgPiBzYWZldHkuaW50ZWxNKSB7XG4gICAgICAgIGIgPSBzYWZldHkuaW50ZWxNO1xuICAgIH0gZWxzZSBiID0gc2FmZXR5LmludGVsQztcblxuICAgIGlmKHNhZmV0eS5nYXJDID4gc2FmZXR5Lmdhck0pIHtcbiAgICAgICAgYyA9IHNhZmV0eS5nYXJNO1xuICAgIH0gZWxzZSBjID0gc2FmZXR5LmdhckM7XG5cbiAgICBzYWZldHkuQmFzZSA9ICgoKGEgKyBiICsgYykgLyBzZXR0bGVtZW50LmxldmVsKSAqIChzZXR0bGVtZW50LmN1cnJlbnRIZWFsdGggLyBzZXR0bGVtZW50Lm1heEhlYWx0aCkpLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIHNhZmV0eS5CYXNlO1xufVxuXG5mdW5jdGlvbiBzYWZldHlCb251cyhpKSB7XG4gICAgc2FmZXR5LkJvbnVzICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5zYWZldHkgKz0gcGFyc2VJbnQoaSk7XG4gICAgZGlDdXJyZW50KGkpO1xuICAgIGludGVsQ3VycmVudChpKTtcbiAgICBnYXJDdXJyZW50KGkpO1xuICAgIGRpTWF4KCk7XG4gICAgaW50ZWxNYXgoKTtcbiAgICBnYXJNYXgoKTtcbn1cblxuZnVuY3Rpb24gZGlCb251cyhpKSB7XG4gICAgc2FmZXR5LmRpQiArPSBwYXJzZUludChpKTtcbiAgICBjaGFuZ2VMb2cuZGlCICs9IHBhcnNlSW50KGkpO1xuICAgIGRpQ3VycmVudChpKVxuICAgIGRpTWF4KCk7XG59XG5cbmZ1bmN0aW9uIGRpQ3VycmVudChpKSB7XG4gICAgc2FmZXR5LmRpQyArPSBwYXJzZUludChpKTtcbiAgICBjaGFuZ2VMb2cuZGkgKz0gcGFyc2VJbnQoaSk7XG59XG5cbmZ1bmN0aW9uIGRpTWF4KCkge1xuICAgIHNhZmV0eS5kaU0gPSAoKHNldHRsZW1lbnQubGV2ZWwgKiAyKSArIHNhZmV0eS5Cb251cyArIHNhZmV0eS5kaUIpO1xuXG59XG5cbmZ1bmN0aW9uIGludGVsQm9udXMoaSkge1xuICAgIHNhZmV0eS5pbnRlbEIgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLmludGVsQiArPSBwYXJzZUludChpKTtcbiAgICBpbnRlbEN1cnJlbnQoaSlcbiAgICBpbnRlbE1heCgpO1xufVxuXG5mdW5jdGlvbiBpbnRlbEN1cnJlbnQoaSkge1xuICAgIHNhZmV0eS5pbnRlbEMgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLmludGVsICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBpbnRlbE1heCgpIHtcbiAgICBzYWZldHkuaW50ZWxNID0gKHNldHRsZW1lbnQubGV2ZWwgKyBzYWZldHkuQm9udXMgKyBzYWZldHkuaW50ZWxCKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gZ2FyQm9udXMoaSkge1xuICAgIHNhZmV0eS5nYXJCICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5nYXJCICs9IHBhcnNlSW50KGkpO1xuICAgIGdhckN1cnJlbnQoaSlcbiAgICBnYXJNYXgoKTtcbn1cblxuZnVuY3Rpb24gZ2FyQ3VycmVudChpKSB7XG4gICAgc2FmZXR5LmdhckMgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLmdhciArPSBwYXJzZUludChpKTtcbn1cblxuZnVuY3Rpb24gZ2FyTWF4KCkge1xuICAgIHNhZmV0eS5nYXJNID0gKChzZXR0bGVtZW50LmxldmVsICogMikgKyBzYWZldHkuQm9udXMgKyBzYWZldHkuZ2FyQik7XG4gICAgXG59XG5cbmV4cG9ydCB7IGRpQm9udXMsIGRpQ3VycmVudCwgZGlNYXgsIGdhckJvbnVzLCBnYXJDdXJyZW50LCBnYXJNYXgsIGludGVsQm9udXMsIGludGVsQ3VycmVudCwgaW50ZWxNYXgsIHNhZmV0eSwgc2FmZXR5QmFzZSwgc2FmZXR5Qm9udXMgfSIsImltcG9ydCB7IGJ1aWxkaW5ncyB9IGZyb20gXCIuL2J1aWxkaW5nc1N0YXRzXCI7XG5pbXBvcnQgb3ZlcnZpZXdSZW5kZXIgZnJvbSBcIi4vb3ZlcnZpZXdSZW5kZXJcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vb3ZlcnZpZXdSZW5kZXJcIjtcbmltcG9ydCB7IGNoYW5nZUxvZywgdHJhY2tDaGFuZ2UgfSBmcm9tIFwiLi93ZWVrTG9nXCI7XG5cbmxldCBzZXR0bGVtZW50ID0ge1xuICAgIG5hbWU6IFwiQ3lmZWhpbFwiLFxuICAgIGxldmVsOiAzLFxuICAgIGN1cnJlbnRIZWFsdGg6IDEwMCxcbiAgICBtYXhIZWFsdGg6IDEwMCxcbiAgICBzZXR0bGVtZW50UG9pbnRzOiA5OTksXG4gICAgd2Vla3NQYXNzZWQ6IDAsXG4gICAgZHJvdWdodDogZmFsc2UsXG4gICAgdHlwZTogXCJcIixcbiAgICB2YXVsdDogMzg1LFxuXG59XG5cbmZ1bmN0aW9uIGJhc2VUYXhlcygpIHtcbiAgICByZXR1cm4gKHNldHRsZW1lbnQubGV2ZWwgKiAxLjM2OSAqIDgwKS50b0ZpeGVkKDApO1xufVxuXG5mdW5jdGlvbiBsZXZlbFVwKGkpIHtcbiAgICBzZXR0bGVtZW50LmxldmVsICs9IHBhcnNlSW50KGkpXG4gICAgY2hhbmdlTG9nLmxldmVsICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBoZWFsdGgoaSkge1xuICAgIHNldHRsZW1lbnQuY3VycmVudEhlYWx0aCArPSBwYXJzZUludChpKTtcbiAgICBjaGFuZ2VMb2cuaGVhbHRoICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBzcGVuZChpKSB7XG4gICAgaWYoaSA+IHNldHRsZW1lbnQuc2V0dGxlbWVudFBvaW50cykge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaSAqPSAtMTtcbiAgICAgICAgc2V0dGxlbWVudFBvaW50cyhpKTtcbiAgICB9ICAgIFxufVxuXG5mdW5jdGlvbiBzZXR0bGVtZW50UG9pbnRzKGkpIHtcbiAgICBzZXR0bGVtZW50LnNldHRsZW1lbnRQb2ludHMgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLnNwICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBuZXh0V2VlaygpIHtcbiAgICAvL2lmIHN0YXRlbWVudCBmb3IgdXNpbmcgbW9yZSB3b3JrZXJzIHRoYW4gYWxsb3dlZDtcbiAgICBzZXR0bGVtZW50LnNldHRsZW1lbnRQb2ludHMgKz0gc2V0dGxlbWVudC5sZXZlbDtcbiAgICByZWNvdmVySGVhbHRoKCk7XG4gICAgdHJhY2tDaGFuZ2UoKTtcbn1cblxuZnVuY3Rpb24gbWF4SGVhbHRoKGkpIHtcbiAgICBzZXR0bGVtZW50Lm1heEhlYWx0aCArPSBwYXJzZUludChpKTtcbn1cblxuZnVuY3Rpb24gcmVjb3ZlckhlYWx0aCgpIHtcbiAgICBsZXQgaSA9IGJ1aWxkaW5ncy5pbmZpcm1MZXZlbDtcbiAgICBpZihzZXR0bGVtZW50LmRyb3VnaHQgPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzZXR0bGVtZW50LmN1cnJlbnRIZWFsdGggKz0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzZXR0bGVtZW50LmN1cnJlbnRIZWFsdGggKz0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgc2V0dGxlbWVudC5jdXJyZW50SGVhbHRoICs9IDY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc2V0dGxlbWVudC5jdXJyZW50SGVhbHRoICs9IDEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YXVsdEFkZChpKSB7XG4gICAgc2V0dGxlbWVudC52YXVsdCArPSBwYXJzZUludChpKTtcbn1cblxuZXhwb3J0IHsgYmFzZVRheGVzLCBoZWFsdGgsIGxldmVsVXAsIG1heEhlYWx0aCwgbmV4dFdlZWssIHNldHRsZW1lbnQsIHNldHRsZW1lbnRQb2ludHMsIHNwZW5kLCB2YXVsdEFkZCB9IiwiaW1wb3J0IHsgZWNvbm9teSwgcHJvZEN1cnJlbnQsIHRyYWRlQ3VycmVudCB9IGZyb20gXCIuL2Vjb25vbXlTdGF0c1wiO1xuaW1wb3J0IG92ZXJ2aWV3UmVuZGVyIGZyb20gXCIuL292ZXJ2aWV3UmVuZGVyXCI7XG5pbXBvcnQgeyBnYXJDdXJyZW50LCBpbnRlbEN1cnJlbnQsIHNhZmV0eSB9IGZyb20gXCIuL3NhZmV0eVN0YXRzXCI7XG5pbXBvcnQgeyBzZXR0bGVtZW50LCB2YXVsdEFkZCB9IGZyb20gXCIuL3NldHRsZW1lbnRTdGF0c1wiO1xuaW1wb3J0IHsgc2hvcFN0YXR1cyB9IGZyb20gXCIuL3Nob3BXaW5kb3dcIjtcbmltcG9ydCB7IGZvb2RDdXJyZW50LCBtZWRDdXJyZW50LCBzdXBDdXJyZW50LCBzdXJ2aXZhbCB9IGZyb20gXCIuL3N1cnZpdmFsU3RhdHNcIjtcbmltcG9ydCB0YXhSZW5kZXIgZnJvbSBcIi4vdGF4UmVuZGVyXCI7XG5cbmZ1bmN0aW9uIHNob3BJbnRlcmZhY2UoKSB7XG4gICAgLy8vLy8vLy9GT09EIFJPVy8vLy8vLy8vXG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3BXcmFwcGVyJyk7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgICAgIGxldCBzaG9wV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgbGV0IGZvb2RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vZFJvdy5jbGFzc0xpc3QuYWRkKCdzaG9wUm93Jyk7XG4gICAgXG4gICAgICAgIGxldCBmb29kTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vZExhYmVsLnRleHRDb250ZW50ID0gXCJGb29kOlwiO1xuICAgICAgICBmb29kTGFiZWwuY2xhc3NMaXN0LmFkZCgnc2hvcExhYmVsJyk7XG4gICAgICAgIGZvb2RSb3cuYXBwZW5kQ2hpbGQoZm9vZExhYmVsKTtcbiAgICBcbiAgICAgICAgbGV0IGZvb2RCU0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb29kQlNCb3guY2xhc3NMaXN0LmFkZCgnYnNCb3gnKTtcbiAgICBcbiAgICAgICAgbGV0IGZvb2REZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZm9vZERlYy50ZXh0Q29udGVudCA9IFwiPFwiO1xuICAgICAgICBmb29kRGVjLmNsYXNzTGlzdC5hZGQoJ3Nob3BCdG4nKTtcbiAgICBcbiAgICAgICAgbGV0IGZvb2RWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb29kVmFsdWUudGV4dENvbnRlbnQgPSBzaG9wcGluZ0xpc3QuZm9vZDtcbiAgICBcbiAgICAgICAgbGV0IGZvb2RJbmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZm9vZEluYy50ZXh0Q29udGVudCA9IFwiPlwiO1xuICAgICAgICBmb29kSW5jLmNsYXNzTGlzdC5hZGQoJ3Nob3BCdG4nKTtcbiAgICBcbiAgICAgICAgZm9vZERlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNob3BTdGF0dXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC5mb29kID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QuZm9vZC0tXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSAtPSBmb29kQ29zdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC5mb29kID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXJ2aXZhbC5mb29kQysrO1xuICAgICAgICAgICAgICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QuZm9vZC0tXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSAtPSBmb29kUHJvZml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgZm9vZEluYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihzaG9wU3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hvcHBpbmdMaXN0LnZhbHVlICsgZm9vZENvc3QoKSA8IHNldHRsZW1lbnQudmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5mb29kKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgKz0gZm9vZENvc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihzdXJ2aXZhbC5mb29kQyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vydml2YWwuZm9vZEMtLTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LmZvb2QrKztcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlICs9IGZvb2RQcm9maXQoKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KSwgXG4gICAgXG4gICAgICAgIGZvb2RCU0JveC5hcHBlbmRDaGlsZChmb29kRGVjKTtcbiAgICAgICAgZm9vZEJTQm94LmFwcGVuZENoaWxkKGZvb2RWYWx1ZSk7XG4gICAgICAgIGZvb2RCU0JveC5hcHBlbmRDaGlsZChmb29kSW5jKTtcbiAgICAgICAgZm9vZFJvdy5hcHBlbmRDaGlsZChmb29kQlNCb3gpXG4gICAgXG4gICAgICAgIHNob3BXcmFwcGVyLmFwcGVuZENoaWxkKGZvb2RSb3cpO1xuICAgIFxuICAgIC8vLy8vLy8vU1VQUExJRVMgUk9XLy8vLy8vLy9cbiAgICBcbiAgICAgICAgbGV0IHN1cFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdXBSb3cuY2xhc3NMaXN0LmFkZCgnc2hvcFJvdycpO1xuICAgIFxuICAgICAgICBsZXQgc3VwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3VwTGFiZWwudGV4dENvbnRlbnQgPSBcIlN1cHBsaWVzOlwiO1xuICAgICAgICBzdXBMYWJlbC5jbGFzc0xpc3QuYWRkKCdzaG9wTGFiZWwnKTtcbiAgICAgICAgc3VwUm93LmFwcGVuZENoaWxkKHN1cExhYmVsKTtcbiAgICBcbiAgICAgICAgbGV0IHN1cEJTQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN1cEJTQm94LmNsYXNzTGlzdC5hZGQoJ2JzQm94Jyk7XG4gICAgXG4gICAgICAgIGxldCBzdXBEZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VwRGVjLnRleHRDb250ZW50ID0gXCI8XCI7XG4gICAgICAgIHN1cERlYy5jbGFzc0xpc3QuYWRkKCdzaG9wQnRuJyk7XG4gICAgXG4gICAgICAgIGxldCBzdXBWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdXBWYWx1ZS50ZXh0Q29udGVudCA9IHNob3BwaW5nTGlzdC5zdXA7XG4gICAgXG4gICAgICAgIGxldCBzdXBJbmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VwSW5jLnRleHRDb250ZW50ID0gXCI+XCI7XG4gICAgICAgIHN1cEluYy5jbGFzc0xpc3QuYWRkKCdzaG9wQnRuJyk7XG4gICAgXG4gICAgICAgIHN1cERlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNob3BTdGF0dXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC5zdXAgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5zdXAtLVxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgLT0gc3VwQ29zdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC5zdXAgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cnZpdmFsLnN1cEMrKztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnN1cC0tXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSAtPSBzdXBQcm9maXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBzdXBJbmMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2hvcFN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC52YWx1ZSArIHN1cENvc3QoKSA8IHNldHRsZW1lbnQudmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5zdXArKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSArPSBzdXBDb3N0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihzdXJ2aXZhbC5zdXBDID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vydml2YWwuc3VwQy0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5zdXArK1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlICs9IHN1cFByb2ZpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KSwgXG4gICAgXG4gICAgICAgIHN1cEJTQm94LmFwcGVuZENoaWxkKHN1cERlYyk7XG4gICAgICAgIHN1cEJTQm94LmFwcGVuZENoaWxkKHN1cFZhbHVlKTtcbiAgICAgICAgc3VwQlNCb3guYXBwZW5kQ2hpbGQoc3VwSW5jKTtcbiAgICAgICAgc3VwUm93LmFwcGVuZENoaWxkKHN1cEJTQm94KVxuICAgIFxuICAgICAgICBzaG9wV3JhcHBlci5hcHBlbmRDaGlsZChzdXBSb3cpO1xuICAgIFxuICAgIC8vLy8vLy8vTUVEIFJPVy8vLy8vLy8vXG4gICAgXG4gICAgICAgIGxldCBtZWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVkUm93LmNsYXNzTGlzdC5hZGQoJ3Nob3BSb3cnKTtcbiAgICBcbiAgICAgICAgbGV0IG1lZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lZExhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpY2luZTpcIjtcbiAgICAgICAgbWVkTGFiZWwuY2xhc3NMaXN0LmFkZCgnc2hvcExhYmVsJyk7XG4gICAgICAgIG1lZFJvdy5hcHBlbmRDaGlsZChtZWRMYWJlbCk7XG4gICAgXG4gICAgICAgIGxldCBtZWRCU0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZWRCU0JveC5jbGFzc0xpc3QuYWRkKCdic0JveCcpO1xuICAgIFxuICAgICAgICBsZXQgbWVkRGVjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1lZERlYy50ZXh0Q29udGVudCA9IFwiPFwiO1xuICAgICAgICBtZWREZWMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgIFxuICAgICAgICBsZXQgbWVkVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVkVmFsdWUudGV4dENvbnRlbnQgPSBzaG9wcGluZ0xpc3QubWVkO1xuICAgIFxuICAgICAgICBsZXQgbWVkSW5jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1lZEluYy50ZXh0Q29udGVudCA9IFwiPlwiO1xuICAgICAgICBtZWRJbmMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgIFxuICAgICAgICBtZWREZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzaG9wU3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICBpZihzaG9wcGluZ0xpc3QubWVkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QubWVkLS1cbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlIC09IG1lZENvc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihzaG9wcGluZ0xpc3QubWVkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXJ2aXZhbC5tZWRDKys7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5tZWQtLVxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgLT0gbWVkUHJvZml0KClcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBtZWRJbmMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2hvcFN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC52YWx1ZSArIG1lZENvc3QoKSA8IHNldHRsZW1lbnQudmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5tZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSArPSBtZWRDb3N0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihzdXJ2aXZhbC5tZWRDID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vydml2YWwubWVkQy0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5tZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSArPSBtZWRQcm9maXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSksIFxuICAgIFxuICAgICAgICBtZWRCU0JveC5hcHBlbmRDaGlsZChtZWREZWMpO1xuICAgICAgICBtZWRCU0JveC5hcHBlbmRDaGlsZChtZWRWYWx1ZSk7XG4gICAgICAgIG1lZEJTQm94LmFwcGVuZENoaWxkKG1lZEluYyk7XG4gICAgICAgIG1lZFJvdy5hcHBlbmRDaGlsZChtZWRCU0JveClcbiAgICBcbiAgICAgICAgc2hvcFdyYXBwZXIuYXBwZW5kQ2hpbGQobWVkUm93KTtcbiAgICBcbiAgICAgICAgLy8vLy8vLy8vU0NPVVQgUk9XLy8vLy8vLy9cbiAgICBcbiAgICAgICAgbGV0IHNjb3V0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNjb3V0Um93LmNsYXNzTGlzdC5hZGQoJ3Nob3BSb3cnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzY291dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNjb3V0TGFiZWwudGV4dENvbnRlbnQgPSBcIlNjb3V0czpcIjtcbiAgICAgICAgc2NvdXRMYWJlbC5jbGFzc0xpc3QuYWRkKCdzaG9wTGFiZWwnKTtcbiAgICAgICAgc2NvdXRSb3cuYXBwZW5kQ2hpbGQoc2NvdXRMYWJlbCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2NvdXRCU0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzY291dEJTQm94LmNsYXNzTGlzdC5hZGQoJ2JzQm94Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2NvdXREZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2NvdXREZWMudGV4dENvbnRlbnQgPSBcIjxcIjtcbiAgICAgICAgc2NvdXREZWMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHNjb3V0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2NvdXRWYWx1ZS50ZXh0Q29udGVudCA9IHNob3BwaW5nTGlzdC5zY291dDtcbiAgICAgICAgXG4gICAgICAgIGxldCBzY291dEluYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzY291dEluYy50ZXh0Q29udGVudCA9IFwiPlwiO1xuICAgICAgICBzY291dEluYy5jbGFzc0xpc3QuYWRkKCdzaG9wQnRuJyk7XG4gICAgICAgIFxuICAgICAgICBzY291dERlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNob3BTdGF0dXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC5zY291dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnNjb3V0LS1cbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlIC09IHNjb3V0Q29zdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC5zY291dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2FmZXR5LmludGVsQysrO1xuICAgICAgICAgICAgICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3Quc2NvdXQtLVxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgLT0gc2NvdXRQcm9maXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgc2NvdXRJbmMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2hvcFN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC52YWx1ZSArIHNjb3V0Q29zdCgpIDwgc2V0dGxlbWVudC52YXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnNjb3V0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgKz0gc2NvdXRDb3N0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihzYWZldHkuaW50ZWxDID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZXR5LmludGVsQy0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5zY291dCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlICs9IHNjb3V0UHJvZml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pLCBcbiAgICAgICAgXG4gICAgICAgIHNjb3V0QlNCb3guYXBwZW5kQ2hpbGQoc2NvdXREZWMpO1xuICAgICAgICBzY291dEJTQm94LmFwcGVuZENoaWxkKHNjb3V0VmFsdWUpO1xuICAgICAgICBzY291dEJTQm94LmFwcGVuZENoaWxkKHNjb3V0SW5jKTtcbiAgICAgICAgc2NvdXRSb3cuYXBwZW5kQ2hpbGQoc2NvdXRCU0JveClcbiAgICAgICAgXG4gICAgICAgIHNob3BXcmFwcGVyLmFwcGVuZENoaWxkKHNjb3V0Um93KTtcbiAgICBcbiAgICAgICAgLy8vLy8vLy9HVUFSRFMgUk9XLy8vLy8vLy9cbiAgICBcbiAgICAgICAgbGV0IGdhclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYXJSb3cuY2xhc3NMaXN0LmFkZCgnc2hvcFJvdycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhckxhYmVsLnRleHRDb250ZW50ID0gXCJHdWFyZHM6XCI7XG4gICAgICAgIGdhckxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Nob3BMYWJlbCcpO1xuICAgICAgICBnYXJSb3cuYXBwZW5kQ2hpbGQoZ2FyTGFiZWwpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhckJTQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhckJTQm94LmNsYXNzTGlzdC5hZGQoJ2JzQm94Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZ2FyRGVjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGdhckRlYy50ZXh0Q29udGVudCA9IFwiPFwiO1xuICAgICAgICBnYXJEZWMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhclZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhclZhbHVlLnRleHRDb250ZW50ID0gc2hvcHBpbmdMaXN0LmdhcjtcbiAgICAgICAgXG4gICAgICAgIGxldCBnYXJJbmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZ2FySW5jLnRleHRDb250ZW50ID0gXCI+XCI7XG4gICAgICAgIGdhckluYy5jbGFzc0xpc3QuYWRkKCdzaG9wQnRuJyk7XG4gICAgICAgIFxuICAgICAgICBnYXJEZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzaG9wU3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICBpZihzaG9wcGluZ0xpc3QuZ2FyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QuZ2FyLS1cbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlIC09IGdhckNvc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihzaG9wcGluZ0xpc3QuZ2FyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzYWZldHkuZ2FyQysrO1xuICAgICAgICAgICAgICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QuZ2FyLS1cbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlIC09IGdhclByb2ZpdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBnYXJJbmMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2hvcFN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC52YWx1ZSArIGdhckNvc3QoKSA8IHNldHRsZW1lbnQudmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC5nYXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSArPSBnYXJDb3N0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihzYWZldHkuZ2FyQyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmV0eS5nYXJDLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LmdhcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlICs9IGdhclByb2ZpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KSwgXG4gICAgICAgIFxuICAgICAgICBnYXJCU0JveC5hcHBlbmRDaGlsZChnYXJEZWMpO1xuICAgICAgICBnYXJCU0JveC5hcHBlbmRDaGlsZChnYXJWYWx1ZSk7XG4gICAgICAgIGdhckJTQm94LmFwcGVuZENoaWxkKGdhckluYyk7XG4gICAgICAgIGdhclJvdy5hcHBlbmRDaGlsZChnYXJCU0JveClcbiAgICAgICAgXG4gICAgICAgIHNob3BXcmFwcGVyLmFwcGVuZENoaWxkKGdhclJvdyk7XG4gICAgXG4gICAgICAgIC8vLy8vV0FHT04gUk9XLy8vL1xuICAgICAgICBcbiAgICAgICAgbGV0IHdhZ29uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdhZ29uUm93LmNsYXNzTGlzdC5hZGQoJ3Nob3BSb3cnKTtcbiAgICBcbiAgICAgICAgbGV0IHdhZ29uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Fnb25MYWJlbC50ZXh0Q29udGVudCA9IFwiV2Fnb25zOlwiO1xuICAgICAgICB3YWdvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Nob3BMYWJlbCcpO1xuICAgICAgICB3YWdvblJvdy5hcHBlbmRDaGlsZCh3YWdvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgbGV0IHdhZ29uQlNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2Fnb25CU0JveC5jbGFzc0xpc3QuYWRkKCdic0JveCcpO1xuICAgIFxuICAgICAgICBsZXQgd2Fnb25EZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgd2Fnb25EZWMudGV4dENvbnRlbnQgPSBcIjxcIjtcbiAgICAgICAgd2Fnb25EZWMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgIFxuICAgICAgICBsZXQgd2Fnb25WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3YWdvblZhbHVlLnRleHRDb250ZW50ID0gc2hvcHBpbmdMaXN0LndhZ29uO1xuICAgIFxuICAgICAgICBsZXQgd2Fnb25JbmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgd2Fnb25JbmMudGV4dENvbnRlbnQgPSBcIj5cIjtcbiAgICAgICAgd2Fnb25JbmMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgIFxuICAgICAgICB3YWdvbkRlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNob3BTdGF0dXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC53YWdvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LndhZ29uLS1cbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlIC09IHdhZ29uQ29zdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC53YWdvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWNvbm9teS50cmFkZUMrKztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LndhZ29uLS1cbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlIC09IHdhZ29uUHJvZml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgd2Fnb25JbmMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzaG9wU3RhdHVzID09IDApIHtcbiAgICAgICAgICAgICAgICBpZihzaG9wcGluZ0xpc3QudmFsdWUgKyB3YWdvbkNvc3QoKSA8IHNldHRsZW1lbnQudmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LndhZ29uKys7XG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSArPSB3YWdvbkNvc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoZWNvbm9teS50cmFkZUMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVjb25vbXkudHJhZGVDLS07XG4gICAgICAgICAgICAgICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC53YWdvbisrO1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgKz0gd2Fnb25Qcm9maXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICApLCBcbiAgICBcbiAgICAgICAgd2Fnb25CU0JveC5hcHBlbmRDaGlsZCh3YWdvbkRlYyk7XG4gICAgICAgIHdhZ29uQlNCb3guYXBwZW5kQ2hpbGQod2Fnb25WYWx1ZSk7XG4gICAgICAgIHdhZ29uQlNCb3guYXBwZW5kQ2hpbGQod2Fnb25JbmMpO1xuICAgICAgICB3YWdvblJvdy5hcHBlbmRDaGlsZCh3YWdvbkJTQm94KVxuICAgIFxuICAgICAgICBzaG9wV3JhcHBlci5hcHBlbmRDaGlsZCh3YWdvblJvdyk7XG4gICAgXG4gICAgICAgIC8vLy8vLy8vVE9PTFMgUk9XLy8vLy8vLy9cbiAgICBcbiAgICBsZXQgdG9vbHNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b29sc1Jvdy5jbGFzc0xpc3QuYWRkKCdzaG9wUm93Jyk7XG4gICAgXG4gICAgbGV0IHRvb2xzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b29sc0xhYmVsLnRleHRDb250ZW50ID0gXCJUb29sczpcIjtcbiAgICB0b29sc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3Nob3BMYWJlbCcpO1xuICAgIHRvb2xzUm93LmFwcGVuZENoaWxkKHRvb2xzTGFiZWwpO1xuICAgIFxuICAgIGxldCB0b29sc0JTQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHNCU0JveC5jbGFzc0xpc3QuYWRkKCdic0JveCcpO1xuICAgIFxuICAgIGxldCB0b29sc0RlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvb2xzRGVjLnRleHRDb250ZW50ID0gXCI8XCI7XG4gICAgdG9vbHNEZWMuY2xhc3NMaXN0LmFkZCgnc2hvcEJ0bicpO1xuICAgIFxuICAgIGxldCB0b29sc1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHNWYWx1ZS50ZXh0Q29udGVudCA9IHNob3BwaW5nTGlzdC50b29scztcbiAgICBcbiAgICBsZXQgdG9vbHNJbmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b29sc0luYy50ZXh0Q29udGVudCA9IFwiPlwiO1xuICAgIHRvb2xzSW5jLmNsYXNzTGlzdC5hZGQoJ3Nob3BCdG4nKTtcbiAgICBcbiAgICB0b29sc0RlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoc2hvcFN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICBpZihzaG9wcGluZ0xpc3QudG9vbHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnRvb2xzLS1cbiAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgLT0gdG9vbHNDb3N0KCk7XG4gICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC50b29scyA+IDApIHtcbiAgICAgICAgICAgICAgICBlY29ub215LnByb2RDKys7XG4gICAgICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudG9vbHMtLTtcbiAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgLT0gdG9vbHNQcm9maXQoKTtcbiAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICB0b29sc0luYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNob3BTdGF0dXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmKHNob3BwaW5nTGlzdC52YWx1ZSArIHRvb2xzQ29zdCgpIDwgc2V0dGxlbWVudC52YXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudG9vbHMrKztcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdMaXN0LnZhbHVlICs9IHRvb2xzQ29zdCgpO1xuICAgICAgICAgICAgICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihlY29ub215LnByb2RDID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlY29ub215LnByb2RDLS07XG4gICAgICAgICAgICAgICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nTGlzdC50b29scysrO1xuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0xpc3QudmFsdWUgKz0gdG9vbHNQcm9maXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvcEludGVyZmFjZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9KSwgXG4gICAgXG4gICAgdG9vbHNCU0JveC5hcHBlbmRDaGlsZCh0b29sc0RlYyk7XG4gICAgdG9vbHNCU0JveC5hcHBlbmRDaGlsZCh0b29sc1ZhbHVlKTtcbiAgICB0b29sc0JTQm94LmFwcGVuZENoaWxkKHRvb2xzSW5jKTtcbiAgICB0b29sc1Jvdy5hcHBlbmRDaGlsZCh0b29sc0JTQm94KVxuICAgIFxuICAgIHNob3BXcmFwcGVyLmFwcGVuZENoaWxkKHRvb2xzUm93KTtcblxuXG4vLy8vLy8vL0JVWSBTRUxMIElOVEVSRkFDRS8vLy8vLy8vXG4gICAgbGV0IGJzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnNSb3cuY2xhc3NMaXN0LmFkZCgnYnNSb3cnKTtcblxuICAgIGxldCBjeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN4QnRuLmlkID0gJ3Nob3BDWEJ0bic7XG4gICAgY3hCdG4udGV4dENvbnRlbnQgPVwiQ2xlYXIgTGlzdFwiO1xuICAgIGN4QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYW5jZWxUcmFkZSgpO1xuICAgIH0pXG4gICAgYnNSb3cuYXBwZW5kQ2hpbGQoY3hCdG4pO1xuXG4gICAgbGV0IHRyYWRlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFkZVZhbHVlLnRleHRDb250ZW50ID0gc2hvcHBpbmdMaXN0LnZhbHVlO1xuICAgIHRyYWRlVmFsdWUuc3R5bGUgPSBcImJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMjU1LDIxOSwxNTIpOyB3aWR0aDogNTAlOyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXNpemU6IDIycHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJhY2tncm91bmQ6IHdoaXRlXCJcbiAgICBic1Jvdy5hcHBlbmRDaGlsZCh0cmFkZVZhbHVlKTtcblxuICAgIGxldCBidXlzZWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV5c2VsbEJ0bi5zdHlsZSA9ICdoZWlnaHQ6IDEwMCU7IHdpZHRoOiAyNSU7J1xuICAgIGlmKHNob3BTdGF0dXMgPT0gMCkge1xuICAgICAgICBidXlzZWxsQnRuLnRleHRDb250ZW50ID0gXCJCdXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidXlzZWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxsXCI7XG4gICAgfVxuICAgIGJ1eXNlbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbmZpcm1UcmFkZSgpO1xuICAgIH0pXG4gICAgYnNSb3cuYXBwZW5kQ2hpbGQoYnV5c2VsbEJ0bik7XG4gICAgc2hvcFdyYXBwZXIuYXBwZW5kQ2hpbGQoYnNSb3cpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzaG9wV3JhcHBlcik7XG4gICAgXG59XG5cbiAgICBcbiAgICBsZXQgc2hvcHBpbmdMaXN0ID0ge1xuICAgICAgICBmb29kOiAwLFxuICAgICAgICBzdXA6IDAsXG4gICAgICAgIG1lZDogMCxcbiAgICAgICAgc2NvdXQ6IDAsXG4gICAgICAgIGdhcjogMCxcbiAgICAgICAgd2Fnb246IDAsXG4gICAgICAgIHRvb2xzOiAwLFxuICAgICAgICB2YWx1ZTogMCAgICBcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2FuY2VsVHJhZGUoKSB7XG4gICAgICAgIGNsZWFyTGlzdCgpO1xuICAgICAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNvbmZpcm1UcmFkZSgpIHtcbiAgICAgICAgaWYoc2hvcFN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICBmb29kQ3VycmVudChzaG9wcGluZ0xpc3QuZm9vZCk7XG4gICAgICAgICAgICBzdXBDdXJyZW50KHNob3BwaW5nTGlzdC5zdXApO1xuICAgICAgICAgICAgbWVkQ3VycmVudChzaG9wcGluZ0xpc3QubWVkKTtcbiAgICAgICAgICAgIGludGVsQ3VycmVudChzaG9wcGluZ0xpc3Quc2NvdXQpO1xuICAgICAgICAgICAgZ2FyQ3VycmVudChzaG9wcGluZ0xpc3QuZ2FyKTtcbiAgICAgICAgICAgIHRyYWRlQ3VycmVudChzaG9wcGluZ0xpc3Qud2Fnb24pO1xuICAgICAgICAgICAgcHJvZEN1cnJlbnQoc2hvcHBpbmdMaXN0LnRvb2xzKTtcbiAgICAgICAgICAgIHZhdWx0QWRkKC1zaG9wcGluZ0xpc3QudmFsdWUpO1xuICAgICAgICAgICAgemVyb0xpc3QoKTtcbiAgICAgICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgICAgICB0YXhSZW5kZXIoKTtcbiAgICAgICAgICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHNob3BTdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIHZhdWx0QWRkKHNob3BwaW5nTGlzdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgemVyb0xpc3QoKTtcbiAgICAgICAgICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRheFJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9MaXN0KCkge1xuICAgICAgICBzaG9wcGluZ0xpc3QuZm9vZCA9IDA7XG4gICAgICAgIHNob3BwaW5nTGlzdC5zdXAgPSAwO1xuICAgICAgICBzaG9wcGluZ0xpc3QubWVkID0gMDtcbiAgICAgICAgc2hvcHBpbmdMaXN0LnNjb3V0ID0gMDtcbiAgICAgICAgc2hvcHBpbmdMaXN0LmdhciA9IDA7XG4gICAgICAgIHNob3BwaW5nTGlzdC53YWdvbiA9IDA7XG4gICAgICAgIHNob3BwaW5nTGlzdC50b29scyA9IDA7XG4gICAgICAgIHNob3BwaW5nTGlzdC52YWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJMaXN0KCkge1xuICAgICAgICBpZihzaG9wU3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgIHN1cnZpdmFsLmZvb2RDICs9IHNob3BwaW5nTGlzdC5mb29kO1xuICAgICAgICAgICAgc3Vydml2YWwuc3VwQyArPSBzaG9wcGluZ0xpc3Quc3VwO1xuICAgICAgICAgICAgc3Vydml2YWwubWVkQyArPSBzaG9wcGluZ0xpc3QubWVkO1xuICAgICAgICAgICAgc2FmZXR5LmludGVsQyArPSBzaG9wcGluZ0xpc3Quc2NvdXQ7XG4gICAgICAgICAgICBzYWZldHkuZ2FyQyArPSBzaG9wcGluZ0xpc3QuZ2FyO1xuICAgICAgICAgICAgZWNvbm9teS50cmFkZUMgKz0gc2hvcHBpbmdMaXN0LndhZ29uO1xuICAgICAgICAgICAgZWNvbm9teS5wcm9kQyArPSBzaG9wcGluZ0xpc3QudG9vbHM7XG4gICAgICAgIH1cbiAgICAgICAgemVyb0xpc3QoKTtcbiAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZm9vZENvc3QoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgoc2V0dGxlbWVudC5sZXZlbCAqIDUpLnRvRml4ZWQoMCkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBmb29kUHJvZml0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHNldHRsZW1lbnQubGV2ZWwgKiAyLjUpLnRvRml4ZWQoMCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1cENvc3QoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgoc2V0dGxlbWVudC5sZXZlbCAqIDE1KS50b0ZpeGVkKDApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdXBQcm9maXQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgoc2V0dGxlbWVudC5sZXZlbCAqIDcuNSkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVkQ29zdCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChzZXR0bGVtZW50LmxldmVsICogMjUpLnRvRml4ZWQoMCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lZFByb2ZpdCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChzZXR0bGVtZW50LmxldmVsICogMTIuNSkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NvdXRDb3N0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHNldHRsZW1lbnQubGV2ZWwgKiAyMCkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NvdXRQcm9maXQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgoc2V0dGxlbWVudC5sZXZlbCAqIDEwKS50b0ZpeGVkKDApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnYXJDb3N0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHNldHRsZW1lbnQubGV2ZWwgKiA0MCkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FyUHJvZml0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHNldHRsZW1lbnQubGV2ZWwgKiAyMCkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fnb25Db3N0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHNldHRsZW1lbnQubGV2ZWwgKiAzMCkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fnb25Qcm9maXQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgoc2V0dGxlbWVudC5sZXZlbCAqIDE1KS50b0ZpeGVkKDApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b29sc0Nvc3QoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgoc2V0dGxlbWVudC5sZXZlbCAqIDE4KS50b0ZpeGVkKDApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b29sc1Byb2ZpdCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChzZXR0bGVtZW50LmxldmVsICogOSkudG9GaXhlZCgwKSk7XG4gICAgfVxuXG5leHBvcnQge2NsZWFyTGlzdCwgc2hvcEludGVyZmFjZX0iLCJpbXBvcnQgb3ZlcnZpZXdSZW5kZXIgZnJvbSBcIi4vb3ZlcnZpZXdSZW5kZXJcIjtcbmltcG9ydCB7IHNldHRsZW1lbnQgfSBmcm9tIFwiLi9zZXR0bGVtZW50U3RhdHNcIjtcbmltcG9ydCB7IGNsZWFyTGlzdCwgc2hvcEludGVyZmFjZSB9IGZyb20gXCIuL3Nob3BJbnRlcmZhY2VcIjtcbmltcG9ydCB7IHN1cnZpdmFsIH0gZnJvbSBcIi4vc3Vydml2YWxTdGF0c1wiO1xuXG5mdW5jdGlvbiBzaG9wV2luZG93KCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1eUJveCcpO1xuICAgIHdyYXBwZXIuaWQgPSAnYnV5Qm94J1xuICAgIHdyYXBwZXIuc3R5bGUgPSBcIndpZHRoOiA1MCU7XCI7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNYW5hZ2VtZW50IFNob3BcIjtcbiAgICBoZWFkZXIuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBoZWlnaHQ6IDEwJTsgYmFja2dyb3VuZDogZ3JheTsgZm9udC1zaXplOiAyMnB4O1wiXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4vLy8vLy8vL0JVWS9TRUxMIFNXSVRDSEVSLy8vLy8vLy9cbmxldCBidXlTZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXlTZWxsLmlkID0gJ2J1eVNlbGwnO1xuXG5sZXQgYnV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5idXkudGV4dENvbnRlbnQgPSBcIkJ1eVwiO1xuYnV5LmlkID0gJ2J1eU1vZGUnO1xuYnV5LmNsYXNzTGlzdC5hZGQoJ2J1eWJ1eScpXG5cblxubGV0IHNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnNlbGwudGV4dENvbnRlbnQgPSBcIlNlbGxcIjtcbnNlbGwuaWQgPSAnc2VsbE1vZGUnO1xuc2VsbC5jbGFzc0xpc3QuYWRkKCdzZWxsYnV5JylcblxuXG5idXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV5LmNsYXNzTGlzdC5hZGQoJ2J1eWJ1eScpO1xuICAgIGJ1eS5jbGFzc0xpc3QucmVtb3ZlKCdidXlzZWxsJyk7XG4gICAgc2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxsc2VsbCcpO1xuICAgIHNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGxidXlcIik7XG4gICAgc2hvcFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsbCcpO1xuICAgIHNob3BXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2J1eScpO1xuICAgIGNsZWFyTGlzdCgpO1xuICAgIHNob3BTdGF0dXMgPSAwO1xuICAgIHNob3BJbnRlcmZhY2UoKTtcbiAgICBcblxufSlcblxuc2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgICAgXG4gICAgc2VsbC5jbGFzc0xpc3QuYWRkKCdzZWxsc2VsbCcpO1xuICAgIHNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsbGJ1eScpO1xuICAgIGJ1eS5jbGFzc0xpc3QucmVtb3ZlKCdidXlidXknKTtcbiAgICBidXkuY2xhc3NMaXN0LmFkZCgnYnV5c2VsbCcpO1xuICAgIHNob3BXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NlbGwnKTtcbiAgICBzaG9wV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdidXknKTtcbiAgICBjbGVhckxpc3QoKTtcbiAgICBzaG9wU3RhdHVzID0gMTtcbiAgICBzaG9wSW50ZXJmYWNlKCk7XG4gICAgXG59KVxuXG5idXlTZWxsLmFwcGVuZENoaWxkKGJ1eSk7XG5idXlTZWxsLmFwcGVuZENoaWxkKHNlbGwpO1xuXG53cmFwcGVyLmFwcGVuZENoaWxkKGJ1eVNlbGwpO1xuXG5sZXQgc2hvcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNob3BXcmFwcGVyLmlkID0gJ3Nob3BXcmFwcGVyJ1xuc2hvcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYnV5Jyk7XG53cmFwcGVyLmFwcGVuZENoaWxkKHNob3BXcmFwcGVyKTtcblxuc2hvcEludGVyZmFjZSgpO1xuXG59XG5cbmxldCBzaG9wU3RhdHVzID0gMDtcblxuZXhwb3J0IHsgc2hvcFN0YXR1cywgc2hvcFdpbmRvd31cblxuIiwiaW1wb3J0IHsgc2V0dGxlbWVudCB9IGZyb20gXCIuL3NldHRsZW1lbnRTdGF0c1wiO1xuaW1wb3J0IHsgc2FmZXR5IH0gZnJvbSBcIi4vc2FmZXR5U3RhdHNcIjtcbmltcG9ydCB7IGVjb25vbXkgfSBmcm9tIFwiLi9lY29ub215U3RhdHNcIjtcbmltcG9ydCB7IGNoYW5nZUxvZyB9IGZyb20gXCIuL3dlZWtMb2dcIjtcblxubGV0IHN1cnZpdmFsID0ge1xuICAgIEJhc2U6IDAsXG4gICAgQWRqdXN0ZWQ6IDAsXG4gICAgUmF0aW5nOiAwLFxuICAgIEJvbnVzOiAwLFxuICAgIGZvb2RCOiAwLFxuICAgIGZvb2RDOiA3LFxuICAgIGZvb2RNOiAwLFxuICAgIHN1cEI6IDAsXG4gICAgc3VwQzogNSxcbiAgICBzdXBNOiAwLFxuICAgIG1lZEI6IDAsXG4gICAgbWVkQzogMyxcbiAgICBtZWRNOiAwXG59XG5cbmZ1bmN0aW9uIHN1cnZpdmFsQmFzZSgpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgbGV0IGIgPSAwOyBcbiAgICBsZXQgYyA9IDA7XG5cbiAgICBpZihzdXJ2aXZhbC5mb29kQyA+IHN1cnZpdmFsLmZvb2RNKSB7XG4gICAgICAgIGEgPSBzdXJ2aXZhbC5mb29kTTtcbiAgICB9IGVsc2UgYSA9IHN1cnZpdmFsLmZvb2RDO1xuXG4gICAgaWYoc3Vydml2YWwuc3VwQyA+IHN1cnZpdmFsLnN1cE0pIHtcbiAgICAgICAgYiA9IHN1cnZpdmFsLnN1cE07XG4gICAgfSBlbHNlIGIgPSBzdXJ2aXZhbC5zdXBDO1xuXG4gICAgaWYoc3Vydml2YWwubWVkQyA+IHN1cnZpdmFsLm1lZE0pIHtcbiAgICAgICAgYyA9IHN1cnZpdmFsLm1lZE07XG4gICAgfSBlbHNlIGMgPSBzdXJ2aXZhbC5tZWRDO1xuXG5cbiAgICBzdXJ2aXZhbC5CYXNlID0gKCgoYSArIGIgKyBjKSAvIHNldHRsZW1lbnQubGV2ZWwpICogKHNldHRsZW1lbnQuY3VycmVudEhlYWx0aCAvIHNldHRsZW1lbnQubWF4SGVhbHRoKSkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4gc3Vydml2YWwuQmFzZTtcbn1cblxuZnVuY3Rpb24gc3Vydml2YWxCb251cyhpKSB7XG4gICAgc3Vydml2YWwuQm9udXMgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLnN1cnZpdmFsICs9IHBhcnNlSW50KGkpO1xuICAgIGZvb2RCb251cyhpKTtcbiAgICBzdXBCb251cyhpKTtcbiAgICBtZWRCb251cyhpKTtcbiAgICBmb29kTWF4KCk7XG4gICAgc3VwTWF4KCk7XG4gICAgbWVkTWF4KCk7XG59XG5cbmZ1bmN0aW9uIGZvb2RCb251cyhpKSB7XG4gICAgc3Vydml2YWwuZm9vZEIgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLmZvb2RCICs9IHBhcnNlSW50KGkpO1xuICAgIGZvb2RDdXJyZW50KGkpO1xuICAgIGZvb2RNYXgoKTtcbn1cblxuZnVuY3Rpb24gZm9vZEN1cnJlbnQoaSkge1xuICAgIHN1cnZpdmFsLmZvb2RDICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5mb29kICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBmb29kTWF4KCkge1xuICAgIHN1cnZpdmFsLmZvb2RNID0gKChzZXR0bGVtZW50LmxldmVsICogNSkgKyBzdXJ2aXZhbC5Cb251cyArIHN1cnZpdmFsLmZvb2RCKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gc3VwQm9udXMoaSkge1xuICAgIHN1cnZpdmFsLnN1cEIgKz0gcGFyc2VJbnQoaSk7XG4gICAgY2hhbmdlTG9nLnN1cHBsaWVzQiArPSBwYXJzZUludChpKTtcbiAgICBzdXBDdXJyZW50KGkpO1xuICAgIHN1cE1heCgpO1xufVxuXG5mdW5jdGlvbiBzdXBDdXJyZW50KGkpIHtcbiAgICBzdXJ2aXZhbC5zdXBDICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5zdXBwbGllcyArPSBwYXJzZUludChpKTtcbn1cblxuZnVuY3Rpb24gc3VwTWF4KCkge1xuICAgIHN1cnZpdmFsLnN1cE0gPSAoKHNldHRsZW1lbnQubGV2ZWwgKiAzKSArIHN1cnZpdmFsLkJvbnVzICsgc3Vydml2YWwuc3VwQik7XG59XG5cbmZ1bmN0aW9uIG1lZEJvbnVzKGkpIHtcbiAgICBzdXJ2aXZhbC5tZWRCICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5tZWRzQiArPSBwYXJzZUludChpKTtcbiAgICBtZWRDdXJyZW50KGkpO1xuICAgIG1lZE1heCgpO1xufVxuXG5mdW5jdGlvbiBtZWRDdXJyZW50KGkpIHtcbiAgICBzdXJ2aXZhbC5tZWRDICs9IHBhcnNlSW50KGkpO1xuICAgIGNoYW5nZUxvZy5tZWRzICs9IHBhcnNlSW50KGkpO1xufVxuXG5mdW5jdGlvbiBtZWRNYXgoKSB7XG4gICAgc3Vydml2YWwubWVkTSA9ICgoc2V0dGxlbWVudC5sZXZlbCAqIDIpICsgc3Vydml2YWwuQm9udXMgKyBzdXJ2aXZhbC5tZWRCKTtcbn1cblxuXG5leHBvcnQgeyBmb29kQm9udXMsIGZvb2RDdXJyZW50LCBmb29kTWF4LCBtZWRCb251cywgbWVkQ3VycmVudCwgbWVkTWF4LCBzdXBCb251cywgc3VwQ3VycmVudCwgc3VwTWF4LCBzdXJ2aXZhbCwgc3Vydml2YWxCYXNlLCBzdXJ2aXZhbEJvbnVzIH0iLCJpbXBvcnQgeyBhY3R1YWxUYXhlcywgY29tbW9uSXRlbSwgZWNvbm9teSwgdW5jb21tb25JdGVtIH0gZnJvbSBcIi4vZWNvbm9teVN0YXRzXCI7XG5pbXBvcnQgb3ZlcnZpZXdSZW5kZXIgZnJvbSBcIi4vb3ZlcnZpZXdSZW5kZXJcIjtcbmltcG9ydCB7IGJhc2VUYXhlcywgc2V0dGxlbWVudCB9IGZyb20gXCIuL3NldHRsZW1lbnRTdGF0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXhSZW5kZXIoKSB7IFxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXhCb3hcIik7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgd3JhcHBlci5zdHlsZSA9IFwid2lkdGg6IDUwJVwiXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVGF4ZXMgYW5kIEl0ZW1zXCI7XG4gICAgaGVhZGVyLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiA0M3B4OyBiYWNrZ3JvdW5kOiBncmF5OyBmb250LXNpemU6IDIxcHg7XCJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblxuICAgIGxldCBiYXNlVGF4Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGJhc2VUYXhCb3guY2xhc3NMaXN0LmFkZCgndGF4Um93Jyk7XG4gICAgXG5cbiAgICBsZXQgYmFzZVRheExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFzZVRheExhYmVsLmNsYXNzTGlzdC5hZGQoJ3RheExhYmVsJylcbiAgICBiYXNlVGF4TGFiZWwudGV4dENvbnRlbnQgPSBcIkJhc2UgVGF4ZXM6XCI7XG4gICAgYmFzZVRheEJveC5hcHBlbmRDaGlsZChiYXNlVGF4TGFiZWwpO1xuXG4gICAgbGV0IGJhc2VUYXhWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhc2VUYXhWYWx1ZS50ZXh0Q29udGVudCA9IGJhc2VUYXhlcygpO1xuICAgIGJhc2VUYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCd0YXhWYWx1ZScpO1xuICAgIGJhc2VUYXhWYWx1ZS5zdHlsZSA9IFwianVzdGlmeS1jb250ZW50OiBjZW50ZXJcIlxuICAgIGJhc2VUYXhCb3guYXBwZW5kQ2hpbGQoYmFzZVRheFZhbHVlKTtcblxuICAgIGxldCB0YXhJbmNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXhJbmNCb3guY2xhc3NMaXN0LmFkZCgndGF4Um93Jyk7XG5cbiAgICBsZXQgdGF4SW5jTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXhJbmNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXhMYWJlbCcpO1xuICAgIHRheEluY0xhYmVsLnRleHRDb250ZW50ID0gXCJJbmNyZWFzZSAlXCI7XG4gICAgdGF4SW5jQm94LmFwcGVuZENoaWxkKHRheEluY0xhYmVsKTtcblxuICAgIGxldCB0YXhJbmNWYWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXhJbmNWYWxCb3guY2xhc3NMaXN0LmFkZCgndGF4VmFsdWUnKTtcblxuICAgIGxldCB0YXhJbmNEZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXhJbmNEZWMudGV4dENvbnRlbnQgPSBcIi1cIjtcbiAgICB0YXhJbmNEZWMuY2xhc3NMaXN0LmFkZCgndGF4Q2huZ0J0bicpO1xuICAgIFxuXG4gICAgbGV0IHRheEluY1ZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICB0YXhJbmNWYWwudGV4dENvbnRlbnQgPSBlY29ub215LnRheEluYztcbiAgICB0YXhJbmNWYWwuaWQgPSBcInRheEluY1ZhbFwiO1xuXG4gICAgbGV0IHRheEluY0luYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRheEluY0luYy5jbGFzc0xpc3QuYWRkKCd0YXhDaG5nQnRuJyk7XG4gICAgdGF4SW5jSW5jLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgICB0YXhJbmNEZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGVjb25vbXkudGF4SW5jID4gMCkge1xuICAgICAgICBlY29ub215LnRheEluYyAtPSA1O1xuICAgICAgICB0YXhSZW5kZXIoKTtcbiAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRheEluY0luYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZWNvbm9teS50YXhJbmMgPD0gOTUpIHtcbiAgICAgICAgZWNvbm9teS50YXhJbmMgKz01O1xuICAgICAgICBlY29ub215LnRheERlYyA9IDA7XG4gICAgICAgIHRheFJlbmRlcigpO1xuICAgICAgICBvdmVydmlld1JlbmRlcigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgdGF4SW5jVmFsQm94LmFwcGVuZENoaWxkKHRheEluY0RlYyk7XG4gICAgdGF4SW5jVmFsQm94LmFwcGVuZENoaWxkKHRheEluY1ZhbCk7XG4gICAgdGF4SW5jVmFsQm94LmFwcGVuZENoaWxkKHRheEluY0luYyk7XG4gICAgdGF4SW5jQm94LmFwcGVuZENoaWxkKHRheEluY1ZhbEJveCk7XG5cbiAgICBsZXQgdGF4RGVjQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF4RGVjQm94LmNsYXNzTGlzdC5hZGQoJ3RheFJvdycpO1xuXG4gICAgbGV0IHRheERlY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF4RGVjTGFiZWwuY2xhc3NMaXN0LmFkZCgndGF4TGFiZWwnKTtcbiAgICB0YXhEZWNMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVjcmVhc2UgJVwiO1xuICAgIHRheERlY0JveC5hcHBlbmRDaGlsZCh0YXhEZWNMYWJlbCk7XG5cbiAgICBsZXQgdGF4RGVjVmFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF4RGVjVmFsQm94LmNsYXNzTGlzdC5hZGQoJ3RheFZhbHVlJyk7XG5cbiAgICBsZXQgdGF4RGVjRGVjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGF4RGVjRGVjLnRleHRDb250ZW50ID0gXCItXCI7XG4gICAgdGF4RGVjRGVjLmNsYXNzTGlzdC5hZGQoJ3RheENobmdCdG4nKTtcblxuICAgIGxldCB0YXhEZWNWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXhEZWNWYWwuaWQgPSBcInRheERlY1ZhbFwiXG4gICAgdGF4RGVjVmFsLnRleHRDb250ZW50ID0gZWNvbm9teS50YXhEZWM7XG5cbiAgICBsZXQgdGF4RGVjSW5jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGF4RGVjSW5jLmNsYXNzTGlzdC5hZGQoJ3RheENobmdCdG4nKTtcbiAgICB0YXhEZWNJbmMudGV4dENvbnRlbnQgPSBcIitcIjtcblxuICAgIHRheERlY0RlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZWNvbm9teS50YXhEZWMgPiAwKSB7XG4gICAgICAgICAgICBlY29ub215LnRheERlYyAtPTU7XG4gICAgICAgICAgICB0YXhSZW5kZXIoKTtcbiAgICAgICAgICAgIG92ZXJ2aWV3UmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGF4RGVjSW5jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihlY29ub215LnRheERlYyA8PSA5NSkge1xuICAgICAgICAgICAgZWNvbm9teS50YXhEZWMgKz0gNTtcbiAgICAgICAgICAgIGVjb25vbXkudGF4SW5jID0gMDtcbiAgICAgICAgICAgIHRheFJlbmRlcigpO1xuICAgICAgICAgICAgb3ZlcnZpZXdSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0YXhEZWNWYWxCb3guYXBwZW5kQ2hpbGQodGF4RGVjRGVjKTtcbiAgICB0YXhEZWNWYWxCb3guYXBwZW5kQ2hpbGQodGF4RGVjVmFsKTtcbiAgICB0YXhEZWNWYWxCb3guYXBwZW5kQ2hpbGQodGF4RGVjSW5jKTtcbiAgICB0YXhEZWNCb3guYXBwZW5kQ2hpbGQodGF4RGVjVmFsQm94KTtcblxuICAgIGxldCBhVGF4ZXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhVGF4ZXNCb3guY2xhc3NMaXN0LmFkZCgndGF4Um93Jyk7XG5cbiAgICBsZXQgYVRheGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhVGF4ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiQWN0dWFsIFRheGVzOlwiO1xuICAgIGFUYXhlc0xhYmVsLnN0eWxlID0gXCJmb250LXNpemU6IDE2cHhcIjtcbiAgICBhVGF4ZXNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXhMYWJlbCcpO1xuICAgIGFUYXhlc0JveC5hcHBlbmRDaGlsZChhVGF4ZXNMYWJlbCk7XG5cbiAgICBsZXQgYVRheGVzVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhVGF4ZXNWYWx1ZS50ZXh0Q29udGVudCA9IGFjdHVhbFRheGVzKCk7XG4gICAgYVRheGVzVmFsdWUuY2xhc3NMaXN0LmFkZCgndGF4VmFsdWUnKTtcbiAgICBhVGF4ZXNWYWx1ZS5zdHlsZSA9IFwianVzdGlmeS1jb250ZW50OiBjZW50ZXJcIjtcbiAgICBhVGF4ZXNCb3guYXBwZW5kQ2hpbGQoYVRheGVzVmFsdWUpO1xuXG4gICAgbGV0IHRheFZhdWx0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF4VmF1bHRCb3guY2xhc3NMaXN0LmFkZCgndGF4Um93Jyk7XG5cbiAgICBsZXQgdGF4VmF1bHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRheFZhdWx0TGFiZWwuY2xhc3NMaXN0LmFkZCgndGF4TGFiZWwnKTtcbiAgICB0YXhWYXVsdExhYmVsLnRleHRDb250ZW50ID0gXCJUYXggVmF1bHRcIjtcbiAgICB0YXhWYXVsdEJveC5hcHBlbmRDaGlsZCh0YXhWYXVsdExhYmVsKTtcblxuICAgIGxldCB0YXhWYXVsdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGF4VmF1bHRWYWx1ZS50ZXh0Q29udGVudCA9IHNldHRsZW1lbnQudmF1bHQ7XG4gICAgdGF4VmF1bHRWYWx1ZS5jbGFzc0xpc3QuYWRkKCd0YXhWYWx1ZScpO1xuICAgIHRheFZhdWx0VmFsdWUuc3R5bGUgPSBcImp1c3RpZnktY29udGVudDogY2VudGVyXCJcbiAgICB0YXhWYXVsdEJveC5hcHBlbmRDaGlsZCh0YXhWYXVsdFZhbHVlKTtcbiAgICBcblxuICAgIGxldCBjSXRlbUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNJdGVtQm94LmNsYXNzTGlzdC5hZGQoJ3RheFJvdycpO1xuXG4gICAgbGV0IGNJdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjSXRlbUxhYmVsLnRleHRDb250ZW50ID0gXCJDb21tb24gTHZsOlwiO1xuICAgIGNJdGVtTGFiZWwuY2xhc3NMaXN0LmFkZCgndGF4TGFiZWwnKTtcbiAgICBjSXRlbUxhYmVsLnN0eWxlID0gXCJmb250LXNpemU6IDE1cHhcIlxuICAgIGNJdGVtQm94LmFwcGVuZENoaWxkKGNJdGVtTGFiZWwpO1xuXG4gICAgbGV0IGNJdGVtVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY0l0ZW1WYWwudGV4dENvbnRlbnQgPSBjb21tb25JdGVtKCk7XG4gICAgY0l0ZW1WYWwuY2xhc3NMaXN0LmFkZCgndGF4VmFsdWUnKTtcbiAgICBjSXRlbVZhbC5zdHlsZSA9IFwianVzdGlmeS1jb250ZW50OiBjZW50ZXJcIjtcbiAgICBjSXRlbUJveC5hcHBlbmRDaGlsZChjSXRlbVZhbCk7XG5cbiAgICBsZXQgdUl0ZW1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1SXRlbUJveC5jbGFzc0xpc3QuYWRkKCd0YXhSb3cnKTtcblxuICAgIGxldCB1SXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdUl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IFwiVW5jb21tb24gTHZsOlwiO1xuICAgIHVJdGVtTGFiZWwuY2xhc3NMaXN0LmFkZCgndGF4TGFiZWwnKTtcbiAgICB1SXRlbUxhYmVsLnN0eWxlID0gXCJmb250LXNpemU6IDE1cHg7XCJcbiAgICB1SXRlbUJveC5hcHBlbmRDaGlsZCh1SXRlbUxhYmVsKTtcblxuICAgIGxldCB1SXRlbVZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVJdGVtVmFsLnRleHRDb250ZW50ID0gdW5jb21tb25JdGVtKCk7XG4gICAgdUl0ZW1WYWwuY2xhc3NMaXN0LmFkZCgndGF4VmFsdWUnKTtcbiAgICB1SXRlbVZhbC5zdHlsZSA9IFwianVzdGlmeS1jb250ZW50OiBjZW50ZXJcIjtcbiAgICB1SXRlbUJveC5hcHBlbmRDaGlsZCh1SXRlbVZhbCk7XG5cblxuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChiYXNlVGF4Qm94KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRheEluY0JveCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YXhEZWNCb3gpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYVRheGVzQm94KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRheFZhdWx0Qm94KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNJdGVtQm94KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHVJdGVtQm94KTtcbn0iLCJpbXBvcnQgeyBzZXR0bGVtZW50IH0gZnJvbSBcIi4vc2V0dGxlbWVudFN0YXRzXCI7XG5cbmxldCB3ZWVrTG9nID0gW107XG5cbmxldCBjaGFuZ2VMb2cgPSB7XG5cbiAgICBzdXJ2aXZhbDogMCxcbiAgICBmb29kOiAwLFxuICAgIGZvb2RCOiAwLFxuICAgIHN1cHBsaWVzOiAwLFxuICAgIHN1cHBsaWVzQjogMCxcbiAgICBtZWRzOiAwLFxuICAgIG1lZHNCOiAwLFxuICAgIHNhZmV0eTogMCxcbiAgICBkaTogMCxcbiAgICBkaUI6IDAsXG4gICAgaW50ZWw6IDAsXG4gICAgaW50ZWxCOiAwLFxuICAgIGdhcjogMCxcbiAgICBnYXJCOiAwLFxuICAgIGVjb25vbXk6IDAsXG4gICAgdHJhZGU6IDAsXG4gICAgdHJhZGVCOiAwLFxuICAgIHByb2Q6IDAsXG4gICAgcHJvZEI6IDAsXG4gICAgdmF1bHQ6IDAsXG4gICAgaGVhbHRoOiAwLFxuICAgIGxldmVsOiAwLFxuICAgIHNwOiAwLFxuICAgIGV2ZW50U3RhcnQ6IFtdLFxuICAgIGV2ZW50RW5kOiBbXSxcbiAgICB3ZWVrOiAwLFxuXG59XG5cbmZ1bmN0aW9uIHRyYWNrQ2hhbmdlKCkge1xuXG4gICAgbGV0IGV2ZW50cyA9IGNoYW5nZUxvZztcbiAgICB3ZWVrTG9nLnB1c2goZXZlbnRzKVxuXG4gICAgY2xlYXJDaGFuZ2VMb2coKTtcblxufVxuXG5mdW5jdGlvbiByZW5kZXJXZWVrcygpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrTG9nJyk7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB3cmFwcGVyLnN0eWxlID0gJ2JvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrJ1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdXZWVrbHkgTG9ncyc7XG4gICAgaGVhZGVyLnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXNpemU6IDIycHg7IGhlaWdodDogMTAlOyBtYXJnaW4tYm90dG9tOiAxcmVtOydcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7IFxuXG4gICAgbGV0IGxvZ0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbG9nQXJlYS5zdHlsZSA9ICdvdmVyZmxvdy15OiBzY3JvbGwnXG4gICAgXG4gICAgaWYod2Vla0xvZy5sZW5ndGggPT0gMCkge1xuICAgICAgICBsb2dBcmVhLnRleHRDb250ZW50ID0gXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgd2Vla2x5IGxvZ3MgeWV0LlwiO1xuICAgICAgICBsb2dBcmVhLnN0eWxlID0gJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXNpemU6IDE2cHg7IHRleHQtYWxpZ246IGNlbnRlcjsnXG4gICAgfSBlbHNlIHtcblxuICAgICAgICB3ZWVrTG9nLmZvckVhY2goKHdlZWspID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBXZWVrICR7d2Vlay53ZWVrfSBMb2dgXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2Vlayh3ZWVrKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobG9nQXJlYSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hhbmdlTG9nKCkge1xuICAgIGNoYW5nZUxvZy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfSlcblxuICAgIGNoYW5nZUxvZy5ldmVudFN0YXJ0ID0gW107XG4gICAgY2hhbmdlTG9nLmV2ZW50RW5kID0gW107XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWVrKHdlZWspIHtcblxufVxuXG5leHBvcnQgeyBjaGFuZ2VMb2csIHJlbmRlcldlZWtzLCB0cmFja0NoYW5nZSB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9