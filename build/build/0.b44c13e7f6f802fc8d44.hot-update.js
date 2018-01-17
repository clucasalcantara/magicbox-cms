exports.id = 0;
exports.modules = {

/***/ "./build/src/services/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce__ = __webpack_require__("apisauce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apisauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./build/src/config/index.js");


var baseURL = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* defaultConfig */].baseURL,
    headers = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* defaultConfig */].headers;


var api = Object(__WEBPACK_IMPORTED_MODULE_0_apisauce__["create"])({
  baseURL: baseURL,
  headers: headers
});

/* unused harmony default export */ var _unused_webpack_default_export = (api);

/***/ }),

/***/ "./build/src/store/loginModule/sagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_box__ = __webpack_require__("redux-box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api__ = __webpack_require__("./build/src/services/api/index.js");






/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_redux_box__["createSagas"])({
  'GET_ORDERS_LIST.latest': /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function GET_ORDERS_LISTLatest(action) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function GET_ORDERS_LISTLatest$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return action.resolve('done');

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);

            action.reject(_context.t0);
            //...etc

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, GET_ORDERS_LISTLatest, this, [[0, 5]]);
  })
}));

/***/ })

};
//# sourceMappingURL=0.b44c13e7f6f802fc8d44.hot-update.js.map