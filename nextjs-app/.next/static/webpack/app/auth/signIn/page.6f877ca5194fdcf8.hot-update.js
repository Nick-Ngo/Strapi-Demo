"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/signIn/page",{

/***/ "(app-pages-browser)/./src/app/auth/signIn/page.tsx":
/*!**************************************!*\
  !*** ./src/app/auth/signIn/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_ux_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui-ux/Button */ \"(app-pages-browser)/./src/components/ui-ux/Button.tsx\");\n/* harmony import */ var _components_ui_ux_TextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui-ux/TextBox */ \"(app-pages-browser)/./src/components/ui-ux/TextBox.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const identifier = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(\"\");\n    const pass = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(\"\");\n    const onSubmit = async ()=>{\n        const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n            identifier: identifier.current,\n            password: pass.current,\n            redirect: true,\n            callbackUrl: \"/\"\n        });\n        return result;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ux_TextBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    labelText: \"User Name\",\n                    className: \"text-black\",\n                    onChange: (e)=>identifier.current = e.target.value\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nick\\\\Strapi\\\\Source\\\\nextjs-app\\\\src\\\\app\\\\auth\\\\signIn\\\\page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ux_TextBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"text-black\",\n                    labelText: \"Password\",\n                    type: \"password\",\n                    onChange: (e)=>pass.current = e.target.value\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nick\\\\Strapi\\\\Source\\\\nextjs-app\\\\src\\\\app\\\\auth\\\\signIn\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ux_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onClick: onSubmit,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Nick\\\\Strapi\\\\Source\\\\nextjs-app\\\\src\\\\app\\\\auth\\\\signIn\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Nick\\\\Strapi\\\\Source\\\\nextjs-app\\\\src\\\\app\\\\auth\\\\signIn\\\\page.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Nick\\\\Strapi\\\\Source\\\\nextjs-app\\\\src\\\\app\\\\auth\\\\signIn\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginPage, \"IncP45t9Cpc07RzwaNQZ+Mmck9M=\");\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9zaWduSW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrQztBQUNFO0FBQ1I7QUFDVjtBQUUvQixNQUFNSSxZQUFZOztJQUNkLE1BQU1DLGFBQWFGLDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1HLE9BQU9ILDZDQUFNQSxDQUFDO0lBRXBCLE1BQU1JLFdBQVc7UUFDYixNQUFNQyxTQUFTLE1BQU1OLHVEQUFNQSxDQUFDLGVBQWU7WUFDdkNHLFlBQVlBLFdBQVdJLE9BQU87WUFDOUJDLFVBQVVKLEtBQUtHLE9BQU87WUFDdEJFLFVBQVU7WUFDVkMsYUFBYTtRQUNqQjtRQUVBLE9BQU9KO0lBQ1g7SUFDQSxxQkFDSSw4REFBQ0s7UUFDR0MsV0FDSTtrQkFHSiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNiLGlFQUFPQTtvQkFDSmMsV0FBVTtvQkFDVkQsV0FBVTtvQkFDVkUsVUFBVSxDQUFDQyxJQUFPWixXQUFXSSxPQUFPLEdBQUdRLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUV6RCw4REFBQ2xCLGlFQUFPQTtvQkFDSmEsV0FBVTtvQkFDVkMsV0FBVTtvQkFDVkssTUFBTTtvQkFDTkosVUFBVSxDQUFDQyxJQUFPWCxLQUFLRyxPQUFPLEdBQUdRLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUVuRCw4REFBQ25CLGdFQUFNQTtvQkFBQ3FCLFNBQVNkOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQztHQXBDTUg7S0FBQUE7QUFzQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRoL3NpZ25Jbi9wYWdlLnRzeD8zM2M3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvdWktdXgvQnV0dG9uXCI7XHJcbmltcG9ydCBUZXh0Qm94IGZyb20gXCJAL2NvbXBvbmVudHMvdWktdXgvVGV4dEJveFwiO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9naW5QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaWRlbnRpZmllciA9IHVzZVJlZihcIlwiKTtcclxuICAgIGNvbnN0IHBhc3MgPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFja1VybDogXCIvXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBoLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBnYXAtMSBmcm9tLWN5YW4tMzAwIHRvLXNreS02MDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTcgcHktNCBzaGFkb3cgYmctd2hpdGUgcm91bmRlZC1tZCBmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEJveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAoaWRlbnRpZmllci5jdXJyZW50ID0gZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IChwYXNzLmN1cnJlbnQgPSBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0+TG9naW48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0Qm94Iiwic2lnbkluIiwidXNlUmVmIiwiTG9naW5QYWdlIiwiaWRlbnRpZmllciIsInBhc3MiLCJvblN1Ym1pdCIsInJlc3VsdCIsImN1cnJlbnQiLCJwYXNzd29yZCIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbFRleHQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/signIn/page.tsx\n"));

/***/ })

});