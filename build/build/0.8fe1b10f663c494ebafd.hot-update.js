exports.id = 0;
exports.modules = {

/***/ "./build/src/services/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce__ = __webpack_require__("apisauce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apisauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./build/src/config/index.js");




var _config$default = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */].default,
    BASE_URL = _config$default.BASE_URL,
    BASE_HEADERS = _config$default.BASE_HEADERS;


var api = Object(__WEBPACK_IMPORTED_MODULE_0_apisauce__["create"])({
  baseURL: BASE_URL,
  headers: BASE_HEADERS,
  timeout: 15000
});

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ })

};
//# sourceMappingURL=0.8fe1b10f663c494ebafd.hot-update.js.map