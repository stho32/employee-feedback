"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feedbacks",{

/***/ "./components/nav/NavSettingsDropdown.tsx":
/*!************************************************!*\
  !*** ./components/nav/NavSettingsDropdown.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_alexandrechampagne_sites_personal_paypay_challenge_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _icons_AdminIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/AdminIcon */ \"./components/icons/AdminIcon.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/alexandrechampagne/sites/personal/paypay-challenge/components/nav/NavSettingsDropdown.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar NavSettingsDropdown = function NavSettingsDropdown() {\n  _s();\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),\n      _useSession2 = (0,_Users_alexandrechampagne_sites_personal_paypay_challenge_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),\n      session = _useSession2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"group absolute right-4 md:right-auto md:bottom-4 cursor-pointer text-grey-night\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"user-settings w-10 h-10\",\n      children: [session && session.user.image != '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: session.user.image,\n        alt: session.user.name,\n        className: \"rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }, _this), (!session || session.user.image == '') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_AdminIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 60\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-[20px] left-[20px] bg-white drop-shadow-md\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"divide-y text-sm\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"px-8 py-2 transition-colors duration-200 hover:bg-grey-dark hover:text-off-white\",\n          onClick: function onClick() {\n            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signOut)({\n              callbackUrl: '/'\n            });\n          },\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(NavSettingsDropdown, \"Vxy5gMemEU/s8dbgarDyE2/t+kg=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession];\n});\n\n_c = NavSettingsDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavSettingsDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavSettingsDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9OYXZTZXR0aW5nc0Ryb3Bkb3duLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUFBLG9CQUNaRiw0REFBVSxFQURFO0FBQUE7QUFBQSxNQUN2QkcsT0FEdUI7O0FBRzlCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlGQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQSxpQkFDS0EsT0FBTyxJQUFJQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixJQUFzQixFQUFqQyxpQkFDRztBQUNJLFdBQUcsRUFBRUYsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEtBRHRCO0FBRUksV0FBRyxFQUFFRixPQUFPLENBQUNDLElBQVIsQ0FBYUUsSUFGdEI7QUFHSSxpQkFBUyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSLEVBUUssQ0FBQyxDQUFDSCxPQUFELElBQVlBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxLQUFiLElBQXNCLEVBQW5DLGtCQUEwQyw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUi9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBV0k7QUFBSyxlQUFTLEVBQUMsNEpBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQSwrQkFDSTtBQUNJLG1CQUFTLEVBQUMsa0ZBRGQ7QUFFSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLHlEQUFPLENBQUM7QUFBRVEsY0FBQUEsV0FBVyxFQUFFO0FBQWYsYUFBRCxDQUFiO0FBQUEsV0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3QkgsQ0EzQkQ7O0dBQU1MO1VBQ2dCRjs7O0tBRGhCRTtBQTZCTiwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvTmF2U2V0dGluZ3NEcm9wZG93bi50c3g/ZTFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmtVSSBmcm9tICcuLi91aS9MaW5rVUknO1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBBZG1pbkljb24gZnJvbSAnLi4vaWNvbnMvQWRtaW5JY29uJztcblxuY29uc3QgTmF2U2V0dGluZ3NEcm9wZG93biA9ICgpID0+IHtcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGFic29sdXRlIHJpZ2h0LTQgbWQ6cmlnaHQtYXV0byBtZDpib3R0b20tNCBjdXJzb3ItcG9pbnRlciB0ZXh0LWdyZXktbmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zZXR0aW5ncyB3LTEwIGgtMTBcIj5cbiAgICAgICAgICAgICAgICB7c2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIuaW1hZ2UgIT0gJycgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXIuaW1hZ2UgPT0gJycpICYmIDxBZG1pbkljb24gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXNpYmxlIGdyb3VwLWhvdmVyOnZpc2libGUgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0yMDAgYWJzb2x1dGUgYm90dG9tLVsyMHB4XSBsZWZ0LVsyMHB4XSBiZy13aGl0ZSBkcm9wLXNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkaXZpZGUteSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1ncmV5LWRhcmsgaG92ZXI6dGV4dC1vZmYtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCh7IGNhbGxiYWNrVXJsOiAnLycgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlNldHRpbmdzRHJvcGRvd247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkFkbWluSWNvbiIsIk5hdlNldHRpbmdzRHJvcGRvd24iLCJzZXNzaW9uIiwidXNlciIsImltYWdlIiwibmFtZSIsImNhbGxiYWNrVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/NavSettingsDropdown.tsx\n");

/***/ })

});