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

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "./build/src/services/auth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attemptLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./build/src/services/api/index.js");


var attemptLogin = function attemptLogin(userData) {
  __WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */].get('/');
};



/***/ }),

/***/ "./build/src/services/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./build/src/services/api/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("./build/src/services/auth/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth__["a"]; });



/***/ })

};
//# sourceMappingURL=0.6805d9f415cca4f7d593.hot-update.js.map