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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-dom/server\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-config\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-dom\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(3);\n\nvar _Home = __webpack_require__(11);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _Home2.default,\n  exact: true\n}];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/shared/config/_routes.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/shared/config/_routes.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(6);\n\nvar _express = __webpack_require__(7);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(1);\n\nvar _reactRouterConfig = __webpack_require__(2);\n\nvar _helpers = __webpack_require__(8);\n\nvar _domain = __webpack_require__(15);\n\nvar _routes2 = __webpack_require__(4);\n\nvar _routes3 = _interopRequireDefault(_routes2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n// Routers helpers\n\n// Import custom renderer\n\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var store, path, pendingRequests;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = (0, _helpers.easyStore)();\n            path = req.path;\n            pendingRequests = (0, _reactRouterConfig.matchRoutes)(_routes3.default, path).map(function (_ref2) {\n              var route = _ref2.route;\n\n              return route.loadData ? route.loadData() : null;\n            });\n\n            // All data must be loaded here, ok....\n            // To Do: Reserach for a different implementation\n            // I don't like the idea about attach a loadDAta function\n            // on each route and each component\n\n            _context.next = 5;\n            return Promise.all(pendingRequests);\n\n          case 5:\n\n            // To Do: Initialize/Rehydrate data\n            res.send((0, _helpers.easyRenderer)(req, store));\n\n          case 6:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(3333, function () {\n  console.log('Listening on port 3333');\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-polyfill\"\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.easyStore = exports.easyRenderer = undefined;\n\nvar _easyRenderer = __webpack_require__(9);\n\nvar _easyRenderer2 = _interopRequireDefault(_easyRenderer);\n\nvar _easyStore = __webpack_require__(12);\n\nvar _easyStore2 = _interopRequireDefault(_easyStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.easyRenderer = _easyRenderer2.default;\nexports.easyStore = _easyStore2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/shared/helpers/index.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/shared/helpers/index.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(1);\n\nvar _reactRouterDom = __webpack_require__(3);\n\nvar _reactRedux = __webpack_require__(10);\n\nvar _reactRouterConfig = __webpack_require__(2);\n\nvar _routes = __webpack_require__(4);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Importing routes\nexports.default = function () {\n  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var path = req.path;\n\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: path, context: {} },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n      )\n    )\n  ));\n\n  return '\\n    <html>\\n      <head></head>\\n      <body>\\n        <div id=\"root\">' + content + '</div>\\n        <script src=\"scripts.js\"></script>\\n      </body>\\n    </html>\\n  ';\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/shared/helpers/easyRenderer.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/shared/helpers/easyRenderer.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-redux\"\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'span',\n      null,\n      'We are on home component using isomorhic code and ssr! '\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return console.log('Button pressed');\n        } },\n      'Press me!'\n    )\n  );\n};\n\nexports.default = Home;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/components/pages/Home.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/components/pages/Home.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(13);\n\nvar _reduxSaga = __webpack_require__(14);\n\nvar _reduxSaga2 = _interopRequireDefault(_reduxSaga);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sagaMiddleware = (0, _reduxSaga2.default)();\n// Import redux-saga Middleware\n\n\nvar reducers = function reducers() {};\nvar initialState = {};\n\nexports.default = function () {\n  return (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(sagaMiddleware));\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/shared/helpers/easyStore.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/shared/helpers/easyStore.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux\"\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux-saga\"\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"domain\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"domain\"\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22domain%22?");

/***/ })
/******/ ]);