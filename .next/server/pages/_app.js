"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
;// CONCATENATED MODULE: ./styles/globals.js


const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["", ";*{box-sizing:border-box;margin:0;padding:0;list-style:none;text-decoration:none;}html{scroll-behavior:smooth;}body{cursor:default;overflow-x:hidden;}h1,h2,h3,h4,h5,h6,button{font-family:", ";}a{text-decoration:none;font-family:", ";}li{list-style:none;}"], external_styled_normalize_namespaceObject.normalize, props => props.theme.fonts.secondary, props => props.theme.fonts.secondary);
/* harmony default export */ const globals = (GlobalStyles);
;// CONCATENATED MODULE: ./styles/themes/default.js
/* harmony default export */ const themes_default = ({
  // Temp fonts
  fonts: {
    secondary: "Inter, sans-serif",
    primary: "Roboto Mono', monospace"
  },
  //sizes:
  size: {
    leftgutterdesktopwidth: "56px",
    mediumguttersize: "16px"
  },
  // Colors for layout
  colors: {
    c: "#000",
    primary1: "#abb2aa",
    color2: "#526c69",
    color3: "#00513b",
    colorgrey40: "#fafafa",
    colorgrey80: "#e7e7e8",
    colorgrey100: "#d0d0d1",
    colorgrey400: "#89898c",
    colorgrey600: "#5a5a5e",
    colorgrey800: "#2b2b30",
    colorbrandcold: "#d1bdbe",
    colorbrandlavender: "#9084b6",
    colorbrandcobalt: "#0046b5",
    colorbrandorange: "#fd532f",
    colorwhite: "#fff",
    colorblack: "#000"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
}); //   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.04);
//     --border-radius-small: 4px;
//     --border-radius-large: 10px;
//     --color-primary-100: #afcfc2;
//     --color-primary-200: #abb2aa;
//     --color-primary-300: #526c69;
//     --color-primary-400: #00513b;
//     --color-grey-40: #fafafa;
//     --color-grey-80: #e7e7e8;
//     --color-grey-100: #d0d0d1;
//     --color-grey-400: #89898c;
//     --color-grey-600: #5a5a5e;
//     --color-grey-800: #2b2b30;
//     --color-brand-cold: #d1bdbe;
//     --color-brand-lavender: #9084b6;
//     --color-brand-cobalt: #0046b5;
//     --color-brand-orange: #fd532f;
//     --color-white: #fff;
//     --color-black: #000;
//     --font-family-primary: inter, sans-serif;
//     --font-family-secondary: 'Roboto Mono', monospace;
//     --font-weight-regular: 500;
//     --font-weight-semibold: 600;
//     --font-weight-bold: 700;
//     --text-color-dark: var(--color-black);
//     --text-color-medium: var(--color-grey-600);
//     --transition-duration-fast: 150ms;
//     --transition-duration-medium: 300ms;
//     --transition-timing-function-ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
//     --left-gutter-desktop-width: 56px;
//     --medium-gutter-size: 16px;
//     --small-gutter-size: 8px;
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./styles/theme.js







const Theme = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: themes_default,
    children: [/*#__PURE__*/jsx_runtime_.jsx(globals, {}), children]
  });
};

/* harmony default export */ const theme = (Theme);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(theme, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(26));
module.exports = __webpack_exports__;

})();