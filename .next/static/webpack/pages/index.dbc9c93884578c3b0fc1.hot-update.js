webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CardList.tsx":
/*!*************************************!*\
  !*** ./src/components/CardList.tsx ***!
  \*************************************/
/*! exports provided: CardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardList\", function() { return CardList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var _Modal_ViewImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal/ViewImage */ \"./src/components/Modal/ViewImage.tsx\");\n\n\n\nvar _jsxFileName = \"/home/rafael/HD/Estudos/ignite-template-reactjs-upload-de-imagens/src/components/CardList.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction CardList(_ref) {\n  _s();\n\n  var _this = this;\n\n  var cards = _ref.cards;\n\n  // TODO MODAL USEDISCLOSURE\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose; // TODO SELECTED IMAGE URL STATE\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      imgUrl = _useState[0],\n      setimgUrl = _useState[1]; // TODO FUNCTION HANDLE VIEW IMAGE\n\n\n  function _viewImage(Url) {\n    setimgUrl(Url);\n    onOpen();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n      columns: [1, 3],\n      spacing: 10,\n      children: [cards.map(function (card) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n          data: card,\n          viewImage: function viewImage() {\n            _viewImage(card.url);\n          }\n        }, card.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, _this);\n      }), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Modal_ViewImage__WEBPACK_IMPORTED_MODULE_4__[\"ModalViewImage\"], {\n        imgUrl: imgUrl,\n        onClose: onClose,\n        isOpen: isOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(CardList, \"8KqlnClz6unWr1bRhwVLj2oYrg4=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = CardList;\n\nvar _c;\n\n$RefreshReg$(_c, \"CardList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZExpc3QudHN4P2Y1YzMiXSwibmFtZXMiOlsiQ2FyZExpc3QiLCJjYXJkcyIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJpbWdVcmwiLCJzZXRpbWdVcmwiLCJ2aWV3SW1hZ2UiLCJVcmwiLCJtYXAiLCJjYXJkIiwidXJsIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBY08sU0FBU0EsUUFBVCxPQUFzRDtBQUFBOztBQUFBOztBQUFBLE1BQWxDQyxLQUFrQyxRQUFsQ0EsS0FBa0M7O0FBQzNEO0FBRDJELHVCQUV2QkMsc0VBQWEsRUFGVTtBQUFBLE1BRW5EQyxNQUZtRCxrQkFFbkRBLE1BRm1EO0FBQUEsTUFFM0NDLE1BRjJDLGtCQUUzQ0EsTUFGMkM7QUFBQSxNQUVuQ0MsT0FGbUMsa0JBRW5DQSxPQUZtQyxFQUkzRDs7O0FBSjJELGtCQUsvQkMsc0RBQVEsQ0FBQyxFQUFELENBTHVCO0FBQUEsTUFLcERDLE1BTG9EO0FBQUEsTUFLNUNDLFNBTDRDLGlCQU8zRDs7O0FBQ0EsV0FBU0MsVUFBVCxDQUFtQkMsR0FBbkIsRUFBc0M7QUFDcENGLGFBQVMsQ0FBQ0UsR0FBRCxDQUFUO0FBQ0FOLFVBQU07QUFDUDs7QUFFRCxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDJEQUFEO0FBQVksYUFBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBckI7QUFBNkIsYUFBTyxFQUFFLEVBQXRDO0FBQUEsaUJBQ0dILEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUNqQiw0QkFDRSxxRUFBQywwQ0FBRDtBQUVFLGNBQUksRUFBRUEsSUFGUjtBQUdFLG1CQUFTLEVBQUUscUJBQU07QUFDZkgsc0JBQVMsQ0FBQ0csSUFBSSxDQUFDQyxHQUFOLENBQVQ7QUFDRDtBQUxILFdBQ09ELElBQUksQ0FBQ0UsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQSxDQURILEVBYUdYLE1BQU0saUJBQ0wscUVBQUMsK0RBQUQ7QUFBZ0IsY0FBTSxFQUFFSSxNQUF4QjtBQUFnQyxlQUFPLEVBQUVGLE9BQXpDO0FBQWtELGNBQU0sRUFBRUY7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUJEOztHQWxDZUgsUTtVQUVzQkUsOEQ7OztLQUZ0QkYsUSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NhcmRMaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUdyaWQsIHVzZURpc2Nsb3N1cmUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgeyBNb2RhbFZpZXdJbWFnZSB9IGZyb20gJy4vTW9kYWwvVmlld0ltYWdlJztcblxuaW50ZXJmYWNlIENhcmQge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdHM6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhcmRzUHJvcHMge1xuICBjYXJkczogQ2FyZFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZExpc3QoeyBjYXJkcyB9OiBDYXJkc1Byb3BzKTogSlNYLkVsZW1lbnQge1xuICAvLyBUT0RPIE1PREFMIFVTRURJU0NMT1NVUkVcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIC8vIFRPRE8gU0VMRUNURUQgSU1BR0UgVVJMIFNUQVRFXG4gIGNvbnN0IFtpbWdVcmwsIHNldGltZ1VybF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gVE9ETyBGVU5DVElPTiBIQU5ETEUgVklFVyBJTUFHRVxuICBmdW5jdGlvbiB2aWV3SW1hZ2UoVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBzZXRpbWdVcmwoVXJsKTtcbiAgICBvbk9wZW4oKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxLCAzXX0gc3BhY2luZz17MTB9PlxuICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2NhcmQuaWR9XG4gICAgICAgICAgICAgIGRhdGE9e2NhcmR9XG4gICAgICAgICAgICAgIHZpZXdJbWFnZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHZpZXdJbWFnZShjYXJkLnVybCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgIDxNb2RhbFZpZXdJbWFnZSBpbWdVcmw9e2ltZ1VybH0gb25DbG9zZT17b25DbG9zZX0gaXNPcGVuPXtpc09wZW59IC8+XG4gICAgICAgICl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CardList.tsx\n");

/***/ })

})