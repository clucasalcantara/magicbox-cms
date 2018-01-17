exports.id = 0;
exports.modules = {

/***/ "./build/src/services/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce__ = __webpack_require__("apisauce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apisauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./build/src/config/index.js");




console.log(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].default);

var api = function api(config) {
  var _config$default = config.default,
      BASE_URL = _config$default.BASE_URL,
      BASE_HEADERS = _config$default.BASE_HEADERS;

  return Object(__WEBPACK_IMPORTED_MODULE_0_apisauce__["create"])({
    baseURL: BASE_URL,
    headers: BASE_HEADERS
  });
};

/* unused harmony default export */ var _unused_webpack_default_export = (api);

/***/ })

};
//# sourceMappingURL=0.66a0217f9b0504c0547d.hot-update.js.map