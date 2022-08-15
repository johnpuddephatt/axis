/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * app.main
 */

const main = async err => {
  if (err) {
    // handle hmr errors
    console.error(err);
  } // application code


  let menuOpen = false;
  let menuButton = document.querySelector("#main-menu-button");
  let menu = document.querySelector("#main-menu");

  let toggleMenu = function () {
    if (menuOpen) {
      document.body.classList.remove("overflow-hidden");
      menu.classList.add("translate-y-full");
    } else {
      document.body.classList.add("overflow-hidden");
      menu.classList.remove("translate-y-full");
    }

    menuOpen = !menuOpen;
  };

  menuButton.addEventListener("click", () => {
    toggleMenu();
  });
};
/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */


(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);
module.hot.accept(main);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Inconsolata-ExtraBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Inconsolata-ExtraBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Karbon-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Karbon-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Karbon-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Karbon-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Karbon-MediumItalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__("./resources/fonts/Karbon-MediumItalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: Karbon, ui-sans-serif, system-ui; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: Inconsolata, ui-monospace, SFMono-Regular; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n  @font-face {\n    font-family: \"Inconsolata\";\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Karbon\";\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Karbon\";\n    font-weight: 700;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Karbon\";\n    font-weight: 700;\n    font-style: italic;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff\"),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff2\");\n  }\n  /* @font-face {\n    font-family: \"Benton Sans\";\n    font-weight: 400;\n    src: url(/resources/fonts/BentonSans_Regular.woff) format(\"woff\"),\n      url(/resources/fonts/BentonSans_Regular.woff2) format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Benton Sans\";\n    font-weight: 500;\n    src: url(/resources/fonts/BentonSans_Medium.woff) format(\"woff\"),\n      url(/resources/fonts/BentonSans_Medium.woff2) format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Benton Sans\";\n    font-weight: 600;\n    src: url(/resources/fonts/BentonSans_Book.woff) format(\"woff\"),\n      url(/resources/fonts/BentonSans_Book.woff2) format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Benton Sans\";\n    font-weight: 700;\n    src: url(/resources/fonts/BentonSans_Bold.woff) format(\"woff\"),\n      url(/resources/fonts/BentonSans_Bold.woff2) format(\"woff2\");\n  }\n  @font-face {\n    font-family: \"Benton Sans\";\n    font-weight: 800;\n    src: url(/resources/fonts/BentonSans_Black.woff) format(\"woff\"),\n      url(/resources/fonts/BentonSans_Black.woff2) format(\"woff2\");\n  } */\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(ol):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: decimal;\n  padding-left: 1.625em;\n}\n.prose :where(ol[type=\"A\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=\"a\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=\"A\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=\"a\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=\"I\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=\"i\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=\"I\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=\"i\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=\"1\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: disc;\n  padding-left: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~=\"not-prose\"] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~=\"not-prose\"] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(hr):not(:where([class~=\"not-prose\"] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~=\"not-prose\"] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~=\"not-prose\"] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 900;\n}\n.prose :where(h2):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 800;\n}\n.prose :where(h3):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 700;\n}\n.prose :where(h4):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 700;\n}\n.prose :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose :where(code):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~=\"not-prose\"] *))::before {\n  content: \"`\";\n}\n.prose :where(code):not(:where([class~=\"not-prose\"] *))::after {\n  content: \"`\";\n}\n.prose :where(a code):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-links);\n}\n.prose :where(pre):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~=\"not-prose\"] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~=\"not-prose\"] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~=\"not-prose\"] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~=\"not-prose\"] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n  vertical-align: baseline;\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(video):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(figure):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.9em;\n}\n.prose :where(li):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.375em;\n}\n.prose > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n}\n.prose > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.25em;\n}\n.prose > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n}\n.prose > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}\n.prose :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}\n.prose :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}\n.prose > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 0;\n}\n.prose-lg {\n  font-size: 1.125rem;\n  line-height: 1.7777778;\n}\n.prose-lg :where(p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n}\n.prose-lg :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 1.2222222em;\n  line-height: 1.4545455;\n  margin-top: 1.0909091em;\n  margin-bottom: 1.0909091em;\n}\n.prose-lg :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.6666667em;\n  margin-bottom: 1.6666667em;\n  padding-left: 1em;\n}\n.prose-lg :where(h1):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 2.6666667em;\n  margin-top: 0;\n  margin-bottom: 0.8333333em;\n  line-height: 1;\n}\n.prose-lg :where(h2):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 1.6666667em;\n  margin-top: 1.8666667em;\n  margin-bottom: 1.0666667em;\n  line-height: 1.3333333;\n}\n.prose-lg :where(h3):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 1.3333333em;\n  margin-top: 1.6666667em;\n  margin-bottom: 0.6666667em;\n  line-height: 1.5;\n}\n.prose-lg :where(h4):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 0.4444444em;\n  line-height: 1.5555556;\n}\n.prose-lg :where(img):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(video):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(figure):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose-lg :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.5;\n  margin-top: 1em;\n}\n.prose-lg :where(code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.8888889em;\n}\n.prose-lg :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.8666667em;\n}\n.prose-lg :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.875em;\n}\n.prose-lg :where(pre):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.75;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  border-radius: 0.375rem;\n  padding-top: 1em;\n  padding-right: 1.5em;\n  padding-bottom: 1em;\n  padding-left: 1.5em;\n}\n.prose-lg :where(ol):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 1.5555556em;\n}\n.prose-lg :where(ul):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 1.5555556em;\n}\n.prose-lg :where(li):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.6666667em;\n  margin-bottom: 0.6666667em;\n}\n.prose-lg :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.4444444em;\n}\n.prose-lg :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.4444444em;\n}\n.prose-lg > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.prose-lg > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.3333333em;\n}\n.prose-lg > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.3333333em;\n}\n.prose-lg > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.3333333em;\n}\n.prose-lg > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.3333333em;\n}\n.prose-lg :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.prose-lg :where(hr):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 3.1111111em;\n  margin-bottom: 3.1111111em;\n}\n.prose-lg :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(table):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.5;\n}\n.prose-lg :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0.75em;\n  padding-bottom: 0.75em;\n  padding-left: 0.75em;\n}\n.prose-lg :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}\n.prose-lg :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}\n.prose-lg :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n  padding-top: 0.75em;\n  padding-right: 0.75em;\n  padding-bottom: 0.75em;\n  padding-left: 0.75em;\n}\n.prose-lg :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}\n.prose-lg :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}\n.prose-lg > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose-lg > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.right-0 {\n  right: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.left-\\[calc\\(100\\%-3rem\\)\\] {\n  left: calc(100% - 3rem);\n}\n.top-0 {\n  top: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-50 {\n  z-index: 50;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-5 {\n  grid-column-start: 5;\n}\n.col-start-7 {\n  grid-column-start: 7;\n}\n.col-start-9 {\n  grid-column-start: 9;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.col-start-12 {\n  grid-column-start: 12;\n}\n.col-start-3 {\n  grid-column-start: 3;\n}\n.col-start-8 {\n  grid-column-start: 8;\n}\n.col-start-4 {\n  grid-column-start: 4;\n}\n.col-start-6 {\n  grid-column-start: 6;\n}\n.col-start-10 {\n  grid-column-start: 10;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-start-1 {\n  grid-row-start: 1;\n}\n.row-start-2 {\n  grid-row-start: 2;\n}\n.row-start-3 {\n  grid-row-start: 3;\n}\n.row-start-4 {\n  grid-row-start: 4;\n}\n.row-start-5 {\n  grid-row-start: 5;\n}\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.my-24 {\n  margin-top: 6rem;\n  margin-bottom: 6rem;\n}\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.ml-0 {\n  margin-left: 0px;\n}\n.-mt-48 {\n  margin-top: -12rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.-ml-16 {\n  margin-left: -4rem;\n}\n.-mt-16 {\n  margin-top: -4rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-36 {\n  margin-bottom: 9rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.-ml-12 {\n  margin-left: -3rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mb-24 {\n  margin-bottom: 6rem;\n}\n.mt-16 {\n  margin-top: 4rem;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.-mt-8 {\n  margin-top: -2rem;\n}\n.-ml-24 {\n  margin-left: -6rem;\n}\n.mb-48 {\n  margin-bottom: 12rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mb-16 {\n  margin-bottom: 4rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mr-6 {\n  margin-right: 1.5rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-\\[80vh\\] {\n  height: 80vh;\n}\n.h-auto {\n  height: auto;\n}\n.h-12 {\n  height: 3rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-\\[213vh\\] {\n  width: 213vh;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-7\\/12 {\n  width: 58.333333%;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-5xl {\n  max-width: 64rem;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.max-w-\\[10em\\] {\n  max-width: 10em;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-none {\n  flex: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.translate-y-full {\n  --tw-translate-y: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-6 {\n  --tw-translate-x: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-12 {\n  --tw-translate-y: -3rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.list-none {\n  list-style-type: none;\n}\n.grid-cols-\\[repeat\\(16\\2c _minmax\\(0\\2c _1fr\\)\\)\\] {\n  grid-template-columns: repeat(16, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-rows-6 {\n  grid-template-rows: repeat(6, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-12 {\n  gap: 3rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.gap-16 {\n  gap: 4rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-32 {\n  gap: 8rem;\n}\n.space-y-24 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6rem * var(--tw-space-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-r-full {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-axis-cream {\n  --tw-border-opacity: 1;\n  border-color: rgb(249 234 221 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.border-axis-blue {\n  --tw-border-opacity: 1;\n  border-color: rgb(102 141 237 / var(--tw-border-opacity));\n}\n.border-axis-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(102 141 237 / var(--tw-border-opacity));\n}\n.bg-axis-yellow {\n  --tw-bg-opacity: 1;\n  background-color: rgb(233 247 84 / var(--tw-bg-opacity));\n}\n.bg-indigo-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\n}\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-axis-purple {\n  --tw-bg-opacity: 1;\n  background-color: rgb(160 156 248 / var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.bg-axis-cream {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 234 221 / var(--tw-bg-opacity));\n}\n.bg-axis-blue {\n  --tw-bg-opacity: 1;\n  background-color: rgb(102 141 237 / var(--tw-bg-opacity));\n}\n.bg-axis-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(230 236 252 / var(--tw-bg-opacity));\n}\n.bg-axis-green {\n  --tw-bg-opacity: 1;\n  background-color: rgb(68 152 120 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-12 {\n  padding: 3rem;\n}\n.p-24 {\n  padding: 6rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.\\!py-6 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pl-0 {\n  padding-left: 0px;\n}\n.pt-\\[75\\%\\] {\n  padding-top: 75%;\n}\n.pt-24 {\n  padding-top: 6rem;\n}\n.pt-16 {\n  padding-top: 4rem;\n}\n.pl-1 {\n  padding-left: 0.25rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.pl-6 {\n  padding-left: 1.5rem;\n}\n.pr-6 {\n  padding-right: 1.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.font-sans {\n  font-family: Karbon, ui-sans-serif, system-ui;\n}\n.font-mono {\n  font-family: Inconsolata, ui-monospace, SFMono-Regular;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.italic {\n  font-style: italic;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-\\[0\\.4em\\] {\n  letter-spacing: 0.4em;\n}\n.text-current {\n  color: currentColor;\n}\n.text-indigo-50 {\n  --tw-text-opacity: 1;\n  color: rgb(238 242 255 / var(--tw-text-opacity));\n}\n.text-green-50 {\n  --tw-text-opacity: 1;\n  color: rgb(240 253 244 / var(--tw-text-opacity));\n}\n.text-yellow-50 {\n  --tw-text-opacity: 1;\n  color: rgb(254 252 232 / var(--tw-text-opacity));\n}\n.text-red-50 {\n  --tw-text-opacity: 1;\n  color: rgb(254 242 242 / var(--tw-text-opacity));\n}\n.text-neutral-500 {\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-axis-yellow {\n  --tw-text-opacity: 1;\n  color: rgb(233 247 84 / var(--tw-text-opacity));\n}\n.text-axis-green {\n  --tw-text-opacity: 1;\n  color: rgb(68 152 120 / var(--tw-text-opacity));\n}\n.no-underline {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.delay-100 {\n  transition-delay: 100ms;\n}\n.delay-200 {\n  transition-delay: 200ms;\n}\n.delay-300 {\n  transition-delay: 300ms;\n}\n.delay-400 {\n  transition-delay: 400ms;\n}\n.delay-500 {\n  transition-delay: 500ms;\n}\n.delay-600 {\n  transition-delay: 600ms;\n}\n.delay-700 {\n  transition-delay: 700ms;\n}\n.duration-1000 {\n  transition-duration: 1000ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.has-large-font-size {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n:root {\n  --contentgutter: 1.5rem;\n  --sidebarwidth: 0;\n  --containerwidth: 100vw;\n}\n@media (min-width: 640px) {\n  /* SM */\n  :root {\n    --containerwidth: 640px;\n  }\n}\n@media (min-width: 768px) {\n  /* MD */\n  :root {\n    --containerwidth: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  /* LG */\n  :root {\n    --contentgutter: 4rem;\n    --containerwidth: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  /* XL */\n  :root {\n    --sidebarwidth: 2/5;\n\n    --contentgutter: 8rem;\n    --containerwidth: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  /* 2XL */\n  :root {\n    --containerwidth: 1536px;\n  }\n}\n.wp-block-gallery {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(4 * var(--gallery-block--gutter-size, 16px));\n  margin-bottom: calc(3 * var(--gallery-block--gutter-size, 16px));\n}\nfigure {\n  position: relative;\n}\nfigure figcaption {\n  margin: 0;\n\n  text-align: left !important;\n  margin-top: 2rem !important;\n  padding-left: 0.5rem;\n  position: relative;\n  font-family: Inconsolata, ui-monospace, SFMono-Regular;\n  font-style: italic;\n  letter-spacing: -0.025em;\n  --tw-text-opacity: 1 !important;\n  color: rgb(115 115 115 / var(--tw-text-opacity)) !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nfigure figcaption::before {\n  display: block;\n  content: \"\";\n  width: 1px;\n  background-color: lightgray;\n  position: absolute;\n  left: 0;\n  bottom: 0.35em;\n  height: 5.5rem;\n}\n.alignwide {\n  margin: var(--contentgutter)\n    clamp(\n      -999px,\n      calc(\n        -1 * var(--contentgutter) - ((1 - var(--sidebarwidth)) * 100vw - 65ch -\n              2 * var(--contentgutter))\n      ),\n      calc(-1 * var(--contentgutter))\n    )\n    var(--contentgutter) calc(-1 * var(--contentgutter)) !important;\n}\n.alignfull {\n  margin: calc(1 * var(--contentgutter))\n    clamp(\n      -999px,\n      calc(\n        0px -\n          ((1 - var(--sidebarwidth)) * 100vw - 65ch - 2 * var(--contentgutter))\n      ),\n      calc(-1.5 * var(--contentgutter))\n    )\n    calc(1 * var(--contentgutter))\n    clamp(\n      -999px,\n      calc(var(--sidebarwidth) * -100vw),\n      calc(-1 * var(--contentgutter))\n    ) !important;\n}\n.alignwide figcaption {\n  margin-top: 4rem !important;\n  margin-left: var(--contentgutter) !important;\n}\n.alignfull figcaption {\n  margin-top: 4rem !important;\n  margin-left: calc(var(--sidebarwidth) * 100vw) !important;\n}\n/* .alignfull {\n    padding-right: var(--contentgutter);\n    padding-left: var(--contentgutter);\n  } */\n.wp-block-gallery.alignwide {\n  padding-left: calc(2 * var(--gallery-block--gutter-size, 16px));\n  padding-right: calc(2 * var(--gallery-block--gutter-size, 16px));\n}\n.wp-block-gallery.alignwide figcaption {\n  margin-left: calc(\n    var(--contentgutter) - 2 * var(--gallery-block--gutter-size, 16px)\n  ) !important;\n  margin-left: calc(-2 * var(--gallery-block--gutter-size, 16px));\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.strikethrough {\n  position: relative;\n  z-index: 2;\n}\n.strikethrough::before {\n  content: \"\";\n  z-index: -1;\n  position: absolute;\n  top: 57.5%;\n  left: -0.25em;\n  right: 0.15em;\n  height: 0.175em;\n  background-color: #fff;\n  transform: translateY(-50%);\n}\n.strikethrough.strikethrough-yellow::before {\n  background-color: #ecf770;\n}\n.perspective {\n  perspective: 1px;\n}\n.preserve-3d {\n  transform-style: preserve-3d;\n}\n.transform {\n  --tw-translate-z: 0px;\n  transform-origin: center center;\n  transform: translate3d(\n      var(--tw-translate-x),\n      var(--tw-translate-y),\n      var(--tw-translate-z)\n    )\n    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))\n    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n.layer-3 {\n  --tw-translate-z: 0.2px;\n}\n.layer-3-no-scale {\n  --tw-translate-z: 0.2px;\n  --tw-scale-x: 0.8;\n  --tw-scale-y: 0.8;\n}\n.hover\\:scale-105.layer-3-no-scale:hover {\n  --tw-scale-x: 0.85 !important;\n  --tw-scale-y: 0.85 !important;\n}\n.layer-2 {\n  --tw-translate-z: 0.1px;\n}\n.layer-2-no-scale {\n  --tw-translate-z: 0.1px;\n  --tw-scale-x: 0.9;\n  --tw-scale-y: 0.9;\n}\n.hover\\:scale-105.layer-2-no-scale:hover {\n  --tw-scale-x: 0.95 !important;\n  --tw-scale-y: 0.95 !important;\n}\n.join-button a {\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(249 234 221 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 234 221 / var(--tw-bg-opacity));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.login-button a {\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(249 234 221 / var(--tw-border-opacity));\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n@media (min-width: 1280px) {\n\n  .login-button a {\n    margin-left: 0.5rem;\n  }\n}\n.ez-toc-link {\n  display: block;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-family: Inconsolata, ui-monospace, SFMono-Regular;\n}\n.ez-toc-link:hover {\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.25;\n}\n@media (min-width: 1024px) {\n\n  .ez-toc-link {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .ez-toc-link {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\n@media (min-width: 1536px) {\n\n  .ez-toc-link {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n.placeholder\\:text-black::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.focus-within\\:border-white:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.focus-within\\:outline-none:focus-within {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-axis-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(246 248 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\n.hover\\:text-black:hover {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.focus\\:not-sr-only:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.group:hover .group-hover\\:pointer-events-auto {\n  pointer-events: auto;\n}\n.group:hover .group-hover\\:translate-y-2 {\n  --tw-translate-y: 0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:text-axis-yellow {\n  --tw-text-opacity: 1;\n  color: rgb(233 247 84 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n.group:hover .group-hover\\:opacity-0 {\n  opacity: 0;\n}\n.group:focus .group-focus\\:pointer-events-none {\n  pointer-events: none;\n}\n.group:focus .group-focus\\:text-axis-yellow {\n  --tw-text-opacity: 1;\n  color: rgb(233 247 84 / var(--tw-text-opacity));\n}\n.group:focus .group-focus\\:opacity-100 {\n  opacity: 1;\n}\n.group:focus .group-focus\\:opacity-0 {\n  opacity: 0;\n}\n.peer:focus-within ~ .peer-focus-within\\:border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.peer:hover ~ .peer-hover\\:pointer-events-auto {\n  pointer-events: auto;\n}\n.peer:hover ~ .peer-hover\\:opacity-100 {\n  opacity: 1;\n}\n@media (min-width: 640px) {\n\n  .sm\\:w-16 {\n    width: 4rem;\n  }\n\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .md\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .md\\:-ml-24 {\n    margin-left: -6rem;\n  }\n\n  .md\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n\n  .md\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .md\\:w-\\[calc\\(33\\%\\+6rem\\)\\] {\n    width: calc(33% + 6rem);\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .md\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .md\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .md\\:pr-36 {\n    padding-right: 9rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .group:hover .md\\:group-hover\\:block {\n    display: block;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n\n  .lg\\:my-24 {\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mb-24 {\n    margin-bottom: 6rem;\n  }\n\n  .lg\\:mt-48 {\n    margin-top: 12rem;\n  }\n\n  .lg\\:ml-24 {\n    margin-left: 6rem;\n  }\n\n  .lg\\:\\!-mb-12 {\n    margin-bottom: -3rem !important;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-7\\/12 {\n    width: 58.333333%;\n  }\n\n  .lg\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .lg\\:gap-32 {\n    gap: 8rem;\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n\n  .lg\\:p-16 {\n    padding: 4rem;\n  }\n\n  .lg\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .lg\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .lg\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .lg\\:pt-12 {\n    padding-top: 3rem;\n  }\n\n  .lg\\:pt-32 {\n    padding-top: 8rem;\n  }\n\n  .lg\\:pl-12 {\n    padding-left: 3rem;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n@media (min-width: 1280px) {\n\n  .xl\\:relative {\n    position: relative;\n  }\n\n  .xl\\:bottom-auto {\n    bottom: auto;\n  }\n\n  .xl\\:right-auto {\n    right: auto;\n  }\n\n  .xl\\:top-auto {\n    top: auto;\n  }\n\n  .xl\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .xl\\:mr-16 {\n    margin-right: 4rem;\n  }\n\n  .xl\\:-mt-12 {\n    margin-top: -3rem;\n  }\n\n  .xl\\:\\!-mb-16 {\n    margin-bottom: -4rem !important;\n  }\n\n  .xl\\:block {\n    display: block;\n  }\n\n  .xl\\:flex {\n    display: flex;\n  }\n\n  .xl\\:grid {\n    display: grid;\n  }\n\n  .xl\\:hidden {\n    display: none;\n  }\n\n  .xl\\:h-\\[80vh\\] {\n    height: 80vh;\n  }\n\n  .xl\\:min-h-screen {\n    min-height: 100vh;\n  }\n\n  .xl\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .xl\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .xl\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .xl\\:max-w-sm {\n    max-width: 24rem;\n  }\n\n  .xl\\:\\!transform-none {\n    transform: none !important;\n  }\n\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n\n  .xl\\:items-center {\n    align-items: center;\n  }\n\n  .xl\\:gap-0 {\n    gap: 0px;\n  }\n\n  .xl\\:border-l {\n    border-left-width: 1px;\n  }\n\n  .xl\\:border-none {\n    border-style: none;\n  }\n\n  .xl\\:bg-transparent {\n    background-color: transparent;\n  }\n\n  .xl\\:bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  }\n\n  .xl\\:p-32 {\n    padding: 8rem;\n  }\n\n  .xl\\:p-24 {\n    padding: 6rem;\n  }\n\n  .xl\\:p-12 {\n    padding: 3rem;\n  }\n\n  .xl\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .xl\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n\n  .xl\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .xl\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .xl\\:pr-24 {\n    padding-right: 6rem;\n  }\n\n  .xl\\:pt-0 {\n    padding-top: 0px;\n  }\n\n  .xl\\:pl-0 {\n    padding-left: 0px;\n  }\n\n  .xl\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .xl\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\32xl\\:prose-xl {\n    font-size: 1.25rem;\n    line-height: 1.8;\n  }\n\n  .\\32xl\\:prose-xl :where(p):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n\n  .\\32xl\\:prose-xl :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.2em;\n    line-height: 1.5;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n\n  .\\32xl\\:prose-xl :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-left: 1.0666667em;\n  }\n\n  .\\32xl\\:prose-xl :where(h1):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 2.8em;\n    margin-top: 0;\n    margin-bottom: 0.8571429em;\n    line-height: 1;\n  }\n\n  .\\32xl\\:prose-xl :where(h2):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.8em;\n    margin-top: 1.5555556em;\n    margin-bottom: 0.8888889em;\n    line-height: 1.1111111;\n  }\n\n  .\\32xl\\:prose-xl :where(h3):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 1.5em;\n    margin-top: 1.6em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.3333333;\n  }\n\n  .\\32xl\\:prose-xl :where(h4):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.8em;\n    margin-bottom: 0.6em;\n    line-height: 1.6;\n  }\n\n  .\\32xl\\:prose-xl :where(img):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .\\32xl\\:prose-xl :where(video):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .\\32xl\\:prose-xl :where(figure):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .\\32xl\\:prose-xl :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n    margin-top: 1em;\n  }\n\n  .\\32xl\\:prose-xl :where(code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n  }\n\n  .\\32xl\\:prose-xl :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.8611111em;\n  }\n\n  .\\32xl\\:prose-xl :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n  }\n\n  .\\32xl\\:prose-xl :where(pre):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n    line-height: 1.7777778;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.5rem;\n    padding-top: 1.1111111em;\n    padding-right: 1.3333333em;\n    padding-bottom: 1.1111111em;\n    padding-left: 1.3333333em;\n  }\n\n  .\\32xl\\:prose-xl :where(ol):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 1.6em;\n  }\n\n  .\\32xl\\:prose-xl :where(ul):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 1.6em;\n  }\n\n  .\\32xl\\:prose-xl :where(li):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.6em;\n    margin-bottom: 0.6em;\n  }\n\n  .\\32xl\\:prose-xl :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0.4em;\n  }\n\n  .\\32xl\\:prose-xl :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0.4em;\n  }\n\n  .\\32xl\\:prose-xl > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n\n  .\\32xl\\:prose-xl > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.2em;\n  }\n\n  .\\32xl\\:prose-xl > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 1.2em;\n  }\n\n  .\\32xl\\:prose-xl > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 1.2em;\n  }\n\n  .\\32xl\\:prose-xl > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 1.2em;\n  }\n\n  .\\32xl\\:prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n\n  .\\32xl\\:prose-xl :where(hr):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 2.8em;\n    margin-bottom: 2.8em;\n  }\n\n  .\\32xl\\:prose-xl :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(table):not(:where([class~=\"not-prose\"] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n  }\n\n  .\\32xl\\:prose-xl :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n\n  .\\32xl\\:prose-xl :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n    padding-top: 0.8888889em;\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n\n  .\\32xl\\:prose-xl :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-left: 0;\n  }\n\n  .\\32xl\\:prose-xl :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n    padding-right: 0;\n  }\n\n  .\\32xl\\:prose-xl > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-top: 0;\n  }\n\n  .\\32xl\\:prose-xl > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n    margin-bottom: 0;\n  }\n\n  .\\32xl\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .\\32xl\\:h-\\[60vh\\] {\n    height: 60vh;\n  }\n\n  .\\32xl\\:h-8 {\n    height: 2rem;\n  }\n\n  .\\32xl\\:w-\\[160vh\\] {\n    width: 160vh;\n  }\n\n  .\\32xl\\:w-8 {\n    width: 2rem;\n  }\n\n  .\\32xl\\:max-w-6xl {\n    max-width: 72rem;\n  }\n\n  .\\32xl\\:max-w-xl {\n    max-width: 36rem;\n  }\n\n  .\\32xl\\:gap-24 {\n    gap: 6rem;\n  }\n\n  .\\32xl\\:gap-32 {\n    gap: 8rem;\n  }\n\n  .\\32xl\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .\\32xl\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .\\32xl\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .\\32xl\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .\\32xl\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .\\32xl\\:pt-36 {\n    padding-top: 9rem;\n  }\n\n  .\\32xl\\:pr-12 {\n    padding-right: 3rem;\n  }\n\n  .\\32xl\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .\\32xl\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n\n  .\\32xl\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .\\32xl\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .\\32xl\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .\\32xl\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .\\32xl\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .\\32xl\\:leading-none {\n    line-height: 1;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/styles/app.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./resources/fonts/Inconsolata-ExtraBold.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Inconsolata-ExtraBold.woff";

/***/ }),

/***/ "./resources/fonts/Inconsolata-ExtraBold.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Inconsolata-ExtraBold.woff2";

/***/ }),

/***/ "./resources/fonts/Karbon-Medium.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Karbon-Medium.woff";

/***/ }),

/***/ "./resources/fonts/Karbon-Medium.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Karbon-Medium.woff2";

/***/ }),

/***/ "./resources/fonts/Karbon-MediumItalic.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Karbon-MediumItalic.woff";

/***/ }),

/***/ "./resources/fonts/Karbon-MediumItalic.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Karbon-MediumItalic.woff2";

/***/ }),

/***/ "./resources/fonts/Karbon-Regular.woff":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Karbon-Regular.woff";

/***/ }),

/***/ "./resources/fonts/Karbon-Regular.woff2":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Karbon-Regular.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "app." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "27ef20d64ffd8c49e6be"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "sage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesage"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksage"] = self["webpackChunksage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor"], function() { return __webpack_require__("./node_modules/@roots/bud-server/lib/cjs/client/index.js?name=bud&path=/__bud/hmr"); })
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor"], function() { return __webpack_require__("./node_modules/@roots/bud-server/lib/cjs/client/proxy-click-interceptor.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor"], function() { return __webpack_require__(683); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor/bud.app.editor"], function() { return __webpack_require__("./resources/styles/app.css"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;