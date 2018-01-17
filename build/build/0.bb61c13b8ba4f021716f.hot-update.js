exports.id = 0;
exports.modules = {

/***/ "./build/src/config/definitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var config = {
  BASE_URL: 'http://localhost:1337',
  BASE_HEADERS: {
    "Accept": "application/json"
  }
};

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./build/src/config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./build/src/config/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definitions__ = __webpack_require__("./build/src/config/definitions.js");
/* unused harmony reexport constants */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__definitions__; });





/***/ }),

/***/ "./build/src/services/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce__ = __webpack_require__("apisauce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apisauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./build/src/config/index.js");




console.log(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */]);

var api = function api(config) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_apisauce__["create"])({
    //   baseURL,
    //   headers
    // })
  });
};

/* unused harmony default export */ var _unused_webpack_default_export = (api);

/***/ })

};
//# sourceMappingURL=0.bb61c13b8ba4f021716f.hot-update.js.map