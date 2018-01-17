exports.id = 0;
exports.modules = {

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("./build/src/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_actions_auth__ = __webpack_require__("./build/src/store/actions/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css__ = __webpack_require__("./build/src/components/pages/Login/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_css__);





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
      open: false,
      userObject: {
        username: 'caio',
        password: '123',
        status: 'unauthorized'
      }
    }, _this.componentDidMount = function () {
      // this.props.loginRequest()
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
            lineNumber: 38
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h3',
          { style: { textAlign: "center " }, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          'MagicBox CMS'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h4',
          { style: { textAlign: "center " }, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          'Welcome'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: this.state.open ? "profile--open" : "profile", __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["e" /* ProfileAvatar */], { toggleProfile: this.toggleProfile, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["d" /* LoginForm */], {
            onChangeText: this.onChangeText,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_5_react__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userObject: state.userObject
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])({}, { loginRequest: __WEBPACK_IMPORTED_MODULE_8__store_actions_auth__["a" /* loginRequest */] })(Login));

/***/ })

};
//# sourceMappingURL=0.82dfd4cea4c513e9996f.hot-update.js.map