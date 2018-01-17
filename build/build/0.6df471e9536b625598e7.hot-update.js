exports.id = 0;
exports.modules = {

/***/ "./build/src/components/atoms/BlockInput/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/clucasalcantara/projects/sideprojects/magicbox-cms/build/src/components/atoms/BlockInput/index.js';
/*eslint-disable no-useless-escape*/



var BlockInput = function BlockInput(_ref) {
  var type = _ref.type,
      id = _ref.id,
      label = _ref.label,
      required = _ref.required,
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? '.*\S.*' : _ref$pattern;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'field', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { htmlFor: id, className: 'label', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      label
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
      type: type,
      id: id,
      className: "input",
      required: required,
      pattern: pattern,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (BlockInput);

/***/ })

};
//# sourceMappingURL=0.6df471e9536b625598e7.hot-update.js.map