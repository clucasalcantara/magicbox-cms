exports.id = 0;
exports.modules = {

/***/ "./build/src/_routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("./build/src/components/index.js");
// import { Home, LoadingPage, Login } from './components'
// import asyncComponent from '@jaredpalmer/after/asyncComponent'



var routes = [
// Placeholder for lazy-featured-stuff
// {
//   path: '/',
//   exact: true,
//   component: asyncComponent({
//     loader: Home,
//     Placeholder: LoadingPage
//   })
// },
{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* Home */]
}, {
  path: '/login',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_0__components__["b" /* Login */]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "./build/src/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atoms__ = __webpack_require__("./build/src/components/atoms/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__atoms__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organisms__ = __webpack_require__("./build/src/components/organisms/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__organisms__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("./build/src/components/pages/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__pages__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__pages__["b"]; });




/***/ }),

/***/ "./build/src/components/pages/Login/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("./build/src/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./build/src/components/pages/Login/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);





var _jsxFileName = '/Users/clucasalcantara/projects/sideprojects/magicbox-cms/build/src/components/pages/Login/index.js';





var Login = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Login, _PureComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Login.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.toggleProfile = function () {
      _this.setState({
        open: !_this.state.open
      });
    }, _this.onChangeText = function () {
      _this.setState({
        open: !_this.state.open
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Login, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h3',
          { style: { textAlign: "center " }, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          'MagicBox CMS'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h4',
          { style: { textAlign: "center " }, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          'Welcome'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: this.state.open ? "profile--open" : "profile", __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["d" /* ProfileAvatar */], { toggleProfile: this.toggleProfile, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["c" /* LoginForm */], {
            onChangeText: this.onChangeText,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          })
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_5_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ "./build/src/components/pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home__ = __webpack_require__("./build/src/components/pages/Home/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingPage__ = __webpack_require__("./build/src/components/pages/LoadingPage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__("./build/src/components/pages/Login/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Home__["a"]; });
/* unused harmony reexport LoadingPage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Login__["a"]; });






/***/ })

};
//# sourceMappingURL=0.f4dd699abe7c5f660ef6.hot-update.js.map