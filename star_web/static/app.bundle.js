/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/App.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Index.jsx */ "./src/components/Index.jsx");






var contentNode = document.getElementById('contents');

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), contentNode);

if (false) {}

/***/ }),

/***/ "./src/components/ContentPage.jsx":
/*!****************************************!*\
  !*** ./src/components/ContentPage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);






var styles = function styles(theme) {
  var _layout;

  return {
    '@global': {
      body: {
        color: '#ffffff'
      }
    },
    appBar: {
      position: 'fixed',
      boxShadow: "none",
      backgroundColor: 'transparent'
    },
    toolbarTitle: {
      flex: 1,
      color: '#ffffff'
    },
    layout: (_layout = {
      paddingBottom: theme.spacing.unit * 15,
      backgroundImage: 'url(\'https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg\')',
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%'
    }, _layout['paddingBottom'] = theme.spacing.unit * 40, _layout),
    layout2: {
      //高校组成以及蓝图
      // backgroundColor:'#05122b', //紫黑色
      backgroundColor: '#ffffff', //紫黑色
      // backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`, 
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3
    },
    layout3: {
      //价值主张
      backgroundColor: '#f4f9bb', //更浅的紫黑色
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3
    },
    layout4: {
      backgroundColor: '#353c43' //更深的紫黑色
      // paddingTop: theme.spacing.unit * 7,
      // paddingBottom: theme.spacing.unit * 7,
    },
    layout5: {
      backgroundColor: '#272b47',
      color: "#0b91a5",
      paddingLeft: theme.spacing.unit * 2
    },
    layout6: {
      backgroundColor: '#ffffff',
      paddingTop: theme.spacing.unit * 7,
      paddingBottom: theme.spacing.unit * 15
    },
    heroContent: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: theme.spacing.unit * 8 + 'px 0 ' + theme.spacing.unit * 6 + 'px'
    },
    mainContent: {
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * -8
    },
    heroContent2: {
      maxWidth: 1200,
      paddingLeft: theme.spacing.unit * 12
    },
    heroContent3: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: theme.spacing.unit * 8 + 'px 0 ' + theme.spacing.unit * 6 + 'px',
      paddingLeft: theme.spacing.unit * 12
    },
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: '1px solid ' + theme.palette.divider,
      padding: theme.spacing.unit * 6 + 'px 0'
    },
    button: {
      size: 'large'
    },
    navbutton: {
      color: theme.palette.common.white
    },
    subtitle: {
      color: 'primary'
    },
    hr: {
      color: '#234008'
    },
    uequ: {
      marginTop: theme.spacing.unit * 5,
      color: "#1d64d6"
    },
    ziti: {
      color: "#1d64d6"
    },
    Divider: {
      color: '#272b47'
    },
    a: {
      textDecoration: 0
    }
  };
};

function ContentPage(props) {
  var classes = props.classes;


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'main',
      { className: classes.layout2 },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classes.heroContent2 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { container: true, spacing: 24 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 6 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: 'https://i.loli.net/2018/09/12/5b97f708e944f.png', alt: '\u56FE1', align: 'center', width: 500 })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 6 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { style: { color: '#343d46' } },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                { style: { textAlign: 'left' } },
                '\u6211\u4EEC\u505A\u8FC7\u4EC0\u4E48\uFF1F'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { color: '#a7adba' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u5168\u56FD\u9AD8\u6821\u533A\u5757\u94FE\u793E\u533A\u201D\u56DB\u5927\u201C\u53D1\u8D77\u65B9\u4E4B\u4E00'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u5168\u56FD\u7B2C\u4E00\u5C4A\u9AD8\u6821\u533A\u5757\u94FE\u5927\u8D5B\u5DE1\u8BB2\u534F\u529E\u65B9'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u591A\u4E2A\u533A\u5757\u94FE\u793E\u533A\u6838\u5FC3\u7814\u53D1\u8D21\u732E'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u591A\u4E2A\u4E16\u754C\u9886\u5148\u533A\u5757\u94FE\u6280\u672F\u4EA7\u54C1'
                )
              )
            )
          )
        )
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'main',
      { className: classes.layout2 },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classes.heroContent2 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { container: true, spacing: 24 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 6 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { style: { color: '#343d46' } },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                { style: { textAlign: 'left' } },
                '\u201C\u7E41\u661F\u201D\u7684\u6765\u5386\uFF1F'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { color: '#a7adba' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u540D\u5B57\u6765\u6E90\u201C\u7E41\u661F\u201D\u7B26\u5408\u533A\u5757\u94FE\u5206\u5E03\u3001\u5E73\u7B49\u3001\u5171\u8BC6\u7684\u5BD3\u610F\uFF0C\u5982\u679C\u5C06\u5206\u5E03\u5728\u5168\u7403\u7684\u8282\u70B9\u70B9\u4EAE\uFF0C\u4ECE\u5730\u7403\u4E4B\u5916\u770B\u4E0A\u53BB\u5C31\u50CF\u662F\u6563\u843D\u7684\u7E41\u661F\uFF0C\u5206\u6563\u5374\u53C8\u4E92\u76F8\u6709\u7740\u8054\u7CFB\u3002\u672C\u793E\u56E2\u662F\u5B66\u672F\u6027\u8D28\u7684\u793E\u56E2\u3002\u65E8\u5728\u5E2E\u52A9\u5BF9\u4E8E\u533A\u5757\u94FE\u4E0E\u6570\u5B57\u8D27\u5E01\u6709\u5174\u8DA3\u7684\u540C\u5B66\u9AD8\u6548\u5B66\u4E60\u533A\u5757\u94FE\u7684\u5185\u6DB5\uFF0C\u4E86\u89E3\u5B66\u79D1\u70ED\u70B9\u4EE5\u53CA\u533A\u5757\u94FE\u6280\u672F\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u5F00\u9614\u79D1\u7814\u89C6\u91CE\uFF0C\u589E\u8FDB\u5B66\u672F\u4EA4\u6D41\u548C\u589E\u5F3A\u5B9E\u8DF5\u80FD\u529B\u3002'
                )
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 6 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: 'https://i.loli.net/2018/09/12/5b97fed65da1f.png', alt: '\u56FE1', align: 'center', width: 500 })
          )
        )
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'main',
      { className: classes.layout6 },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classes.heroContent2 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { container: true, spacing: 24 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 6 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: 'https://i.loli.net/2018/09/12/5b980559f2a35.png', alt: '\u56FE1', align: 'center', width: 500 })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 5 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { style: { color: '#343d46' } },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                { style: { textAlign: 'left' } },
                '\u5982\u4F55\u83B7\u5F97\u7E41\u661F\u79EF\u5206?'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { color: '#a7adba' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  'We are hiring\uFF01'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u52A0\u5165\u7E41\u661F\u7814\u53D1\uFF0C\u4E00\u8D77\u5F00\u53D1\u57FA\u4E8E\u533A\u5757\u94FE\u7684\u7F51\u7AD9\u3001\u5C0F\u7A0B\u5E8F\u3001APP\uFF0C\u524D\u7AEF\u3001\u540E\u7AEF\u3001\u5168\u6808\u4EFB\u4F60\u6311! '
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u52A0\u5165\u7E41\u661F\u5E02\u573A\uFF0C\u4E00\u8D77\u64B0\u5199\u884C\u4E1A\u524D\u6CBF\u62A5\u544A\uFF0C\u53BB\u884C\u4E1A\u9F99\u5934\u4F01\u4E1A\u5B9E\u4E60\uFF0C\u4E8C\u5341\u4E94\u5C81\u524D\u8D70\u5411\u4EBA\u751F\u5DC5\u5CF0\u4E0D\u662F\u68A6\uFF01'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u52A0\u5165\u7E41\u661F\u8FD0\u8425\uFF0C\u4E00\u8D77\u5236\u4F5C\u7CBE\u7F8E\u6D77\u62A5\uFF0C\u9AD8\u6548\u7EC4\u7EC7\u56FD\u9645\u6D3B\u52A8\uFF0C\u6392\u7248\u63A8\u9001\u706B\u904D\u5168\u7403\uFF01'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  { style: { textAlign: "left" } },
                  '\u6216\u8005\u2014\u2014\u4EC5\u4EC5\u662F\u52A0\u5165\u793E\u56E2\u4F1A\u5458\uFF0C\u5373\u53EF\u6BCF\u6708\u9886\u53D6\u7E41\u661F\u79EF\u5206\uFF01'
                )
              )
            )
          )
        )
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'footer',
      { className: classes.layout4 },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
        { container: true, spacing: 40 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { item: true, xs: 1 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { item: true, xs: 4 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: { color: '#a7adba' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h1',
              { style: { textAlign: "left" } },
              '\u592E\u8D22\u7E41\u661F\u793E'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { item: true, xs: 1 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { item: true, xs: 2 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: { color: '#a7adba' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h3',
              { style: { textAlign: "left" } },
              '\u8054\u7CFB\u6211\u4EEC'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h5',
              { style: { textAlign: "left" } },
              '\u5173\u6CE8\u516C\u4F17\u53F7'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { item: true, xs: 3 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: 'https://i.loli.net/2018/09/12/5b9805ad4cffd.jpeg', alt: 'orwzma.png', title: 'orwzma.png', width: 100 })
        )
      )
    )
  );
}

ContentPage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(ContentPage));

/***/ }),

/***/ "./src/components/Index.jsx":
/*!**********************************!*\
  !*** ./src/components/Index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RegisterButton_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RegisterButton.jsx */ "./src/components/RegisterButton.jsx");
/* harmony import */ var _WalletButton_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WalletButton.jsx */ "./src/components/WalletButton.jsx");
/* harmony import */ var _LoginAndWalletButton_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LoginAndWalletButton.jsx */ "./src/components/LoginAndWalletButton.jsx");
/* harmony import */ var _ContentPage_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ContentPage.jsx */ "./src/components/ContentPage.jsx");
/* harmony import */ var _LoginButton_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoginButton.jsx */ "./src/components/LoginButton.jsx");
/* harmony import */ var _LoginPage_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LoginPage.jsx */ "./src/components/LoginPage.jsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var styles = function styles(theme) {
  return {
    '@global': {
      body: {
        color: '#000000'
      }
    },
    appBar: {
      position: 'fixed',
      boxShadow: "none",
      backgroundColor: 'transparent'
    },
    toolbarTitle: {
      flex: 1,
      color: '#ffffff'
    },
    layout: {
      paddingTop: theme.spacing.unit * 10,
      backgroundImage: 'url(\'https://i.loli.net/2018/09/11/5b97e56249fe8.jpg\')',
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
      paddingBottom: theme.spacing.unit * 40
    },
    layout2: {
      //高校组成以及蓝图
      // backgroundColor:'#05122b', //紫黑色
      backgroundColor: '#1d213c', //紫黑色
      // backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`, 
      paddingTop: theme.spacing.unit * 7,
      paddingBottom: theme.spacing.unit * 7
    },
    layout3: {
      //价值主张
      backgroundColor: '#272b47', //更浅的紫黑色
      paddingTop: theme.spacing.unit * 7,
      paddingBottom: theme.spacing.unit * 7
    },
    layout4: {
      backgroundColor: '#16192f', //更深的紫黑色
      paddingTop: theme.spacing.unit * 7,
      paddingBottom: theme.spacing.unit * 25
    },
    layout5: {
      backgroundColor: '#272b47',
      color: "#0b91a5"
    },
    heroContent: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: theme.spacing.unit * 8 + 'px 0 ' + theme.spacing.unit * 6 + 'px'
    },
    mainContent: {
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * -8
    },
    heroContent2: {
      maxWidth: 1200,
      paddingLeft: theme.spacing.unit * 12
    },
    heroContent3: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: theme.spacing.unit * 8 + 'px 0 ' + theme.spacing.unit * 6 + 'px',
      paddingLeft: theme.spacing.unit * 12
    },
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: '1px solid ' + theme.palette.divider,
      padding: theme.spacing.unit * 6 + 'px 0'
    },
    button: {
      size: 'large'
    },
    navbutton: {
      color: theme.palette.common.white
    },
    subtitle: {
      color: 'primary'
    },
    hr: {
      color: '#234008'
    },
    uequ: {
      marginTop: theme.spacing.unit * 5,
      color: "#1d64d6"
    },
    ziti: {
      color: "#1d64d6"
    },
    Divider: {
      color: '#272b47'
    }
  };
};

var MainPage = function (_React$Component) {
  _inherits(MainPage, _React$Component);

  function MainPage() {
    var _temp, _this, _ret;

    _classCallCheck(this, MainPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleScroll = function () {
      scroll({ top: 700, behavior: "smooth" });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MainPage.prototype.render = function render() {
    var classes = this.props.classes;


    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a,
        { position: 'static', className: classes.appBar },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,
            { variant: 'title', noWrap: true, className: classes.toolbarTitle },
            '\xA0\xA0\xA0\xA0///'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a,
            { className: classes.navbutton, color: 'secondary', href: 'https://github.com/WildSaoFeng/StarrySky/wiki/SSC-002-%E7%B9%81%E6%98%9F%E7%A0%94%E5%8F%91%E7%AB%A0%E7%A8%8B-Constitution-of-Starry-Sky\'s-R&D' },
            '\u7E41\u661F\u7AE0\u7A0B'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginAndWalletButton_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null)
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'main',
        { className: classes.layout },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: classes.heroContent },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: classes.mainContent },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a,
              { container: true, spacing: 40 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a,
                { item: true, xs: 6 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,
                  { variant: 'title', align: 'left', color: 'inherit', style: { color: '#ffffff', fontSize: 29 }, component: 'p' },
                  '\u4E2D\u592E\u8D22\u7ECF\u5927\u5B66\u201C\u7E41\u661F\u201D\u533A\u5757\u94FE\u7814\u7A76\u534F\u4F1A'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,
                  { variant: 'title', align: 'left', color: 'inherit', style: { color: '#eaeff7', fontSize: 20 }, component: 'p' },
                  '\u672C\u534F\u4F1A\u662F\u4E2D\u592E\u8D22\u7ECF\u5927\u5B66\u5B66\u751F\u81EA\u613F\u7EC4\u7EC7\u7684\u5B66\u751F\u793E\u56E2, \u793E\u56E2\u5B97\u65E8\u662F\uFF1A\u5E2E\u52A9\u5BF9\u4E8E\u533A\u5757\u94FE\u6709\u5174\u8DA3\u7684\u540C\u5B66\u9AD8\u6548\u5B66\u4E60\u533A\u5757\u94FE\u7684\u5185\u6DB5\uFF0C\u4E86\u89E3\u5B66\u79D1\u70ED\u70B9\u4EE5\u53CA\u533A\u5757\u94FE\u6280\u672F\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u5F00\u9614\u79D1\u7814\u89C6\u91CE\uFF0C\u589E\u8FDB\u5B66\u672F\u4EA4\u6D41\u548C\u589E\u5F3A\u5B9E\u8DF5\u80FD\u529B'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, { item: true, xs: 6 })
            )
          )
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentPage_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], null)
    );
  };

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MainPage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles)(MainPage));

/***/ }),

/***/ "./src/components/LoginAndWalletButton.jsx":
/*!*************************************************!*\
  !*** ./src/components/LoginAndWalletButton.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginButton_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginButton.jsx */ "./src/components/LoginButton.jsx");
/* harmony import */ var _WalletButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletButton.jsx */ "./src/components/WalletButton.jsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LoginAndWallet = function (_React$Component) {
    _inherits(LoginAndWallet, _React$Component);

    function LoginAndWallet() {
        var _temp, _this, _ret;

        _classCallCheck(this, LoginAndWallet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            isAuth: false,
            user: {
                id: 0,
                name: '',
                school: '',
                username: 'foo',
                email: '',
                balance: 0
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    LoginAndWallet.prototype.transferMsg = function transferMsg(isAuth, user) {
        this.setState({
            isAuth: isAuth,
            user: user
        });
    };

    LoginAndWallet.prototype.render = function render() {
        var _this2 = this;

        if (this.state.isAuth) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WalletButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { user: this.state.user });
        } else {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginButton_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], { transferMsg: function transferMsg(isAuth, user) {
                    return _this2.transferMsg(isAuth, user);
                } });
        }
    };

    return LoginAndWallet;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginAndWallet);

/***/ }),

/***/ "./src/components/LoginButton.jsx":
/*!****************************************!*\
  !*** ./src/components/LoginButton.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _RegisterButton_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RegisterButton.jsx */ "./src/components/RegisterButton.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var styles = function styles(theme) {
  var _layout, _ref;

  return _ref = {
    paper: {
      position: "absolute",
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    },
    layout: (_layout = {
      width: 'auto',
      display: 'block', // Fix IE11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _layout[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)] = {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }, _layout)
  }, _ref["paper"] = {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2 + "px " + theme.spacing.unit * 3 + "px " + theme.spacing.unit * 3 + "px"
  }, _ref.avatar = {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  }, _ref.form = {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  }, _ref.submit = {
    marginTop: theme.spacing.unit * 3
  }, _ref;
};

var SimpleModal = function (_React$Component) {
  _inherits(SimpleModal, _React$Component);

  function SimpleModal(props) {
    _classCallCheck(this, SimpleModal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleIsAuthYes = function () {
      _this.setState({ isAuth: true }, function () {
        _this.props.transferMsg(_this.state.isAuth, _this.state.user);
      });
    };

    _this.handleIsAuthNo = function () {
      _this.setState({ isAuth: false }, function () {});
    };

    _this.handleOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
    };

    _this.signIn = _this.signIn.bind(_this);
    _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    _this.state = {
      username: '',
      password: '',
      isAuth: false,
      user: {
        id: 0,
        name: '',
        school: '',
        username: '',
        email: '',
        balance: 0
      },
      msg: '',
      open: false
    };
    return _this;
  }

  SimpleModal.prototype.signIn = function signIn() {
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post('/users/authenticate', {
      username: this.state.username,
      password: this.state.password
    }).then(function (responce) {
      console.log(responce);
      self.setState({ msg: responce.data.msg });
      if (responce.data.success) {
        self.state.user = responce.data.user;
        self.handleIsAuthYes({}, function () {});
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

  SimpleModal.prototype.handleUsernameChange = function handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  };

  SimpleModal.prototype.handlePasswordChange = function handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  };

  SimpleModal.prototype.render = function render() {
    var classes = this.props.classes;


    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
        { color: "inherit", variant: "outlined", onClick: this.handleOpen },
        "\u767B\u5F55/\u6CE8\u518C"
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default.a,
        {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.state.open,
          onClose: this.handleClose
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, null),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "main",
            { className: classes.layout },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a,
              { className: classes.paper },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,
                { variant: "headline" },
                "\u767B\u5F55"
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,
                { variant: "body2", style: { color: "#05122b" } },
                this.state.msg
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: classes.form },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a,
                    { htmlFor: "username" },
                    "\u7528\u6237\u540D"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, { id: "username", name: "username", autoComplete: "username", autoFocus: true, onChange: this.handleUsernameChange })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a,
                    { htmlFor: "password" },
                    "\u5BC6\u7801"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    name: "password",
                    type: "password",
                    id: "password",
                    autoComplete: "current-password",
                    onChange: this.handlePasswordChange
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
                  {
                    fullWidth: true,
                    variant: "raised",
                    color: "primary",
                    className: classes.submit,
                    onClick: this.signIn
                  },
                  "\u767B\u5F55"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterButton_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], { info: '还没注册账号？点击注册', variantType: 'text', isFullWidth: true })
              )
            )
          )
        )
      )
    );
  };

  return SimpleModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SimpleModal.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
var SimpleModalWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SimpleModal);

/* harmony default export */ __webpack_exports__["default"] = (SimpleModalWrapped);

/***/ }),

/***/ "./src/components/LoginPage.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginPage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _RegisterButton_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RegisterButton.jsx */ "./src/components/RegisterButton.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















// import { lighten, modularScale } from 'polished'


var styles = function styles(theme) {
  var _layout, _ref;

  return _ref = {
    paper: {
      position: "absolute",
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    },
    layout: (_layout = {
      // opacity:0.5,
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'auto',
      display: 'block', // Fix IE11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _layout[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)] = {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }, _layout)
  }, _ref["paper"] = {
    // marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2 + "px " + theme.spacing.unit * 3 + "px " + theme.spacing.unit * 3 + "px"
  }, _ref.avatar = {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  }, _ref.form = {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  }, _ref.submit = {
    marginTop: theme.spacing.unit * 3
  }, _ref;
};

var SimpleModal = function (_React$Component) {
  _inherits(SimpleModal, _React$Component);

  function SimpleModal(props) {
    _classCallCheck(this, SimpleModal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleIsAuthYes = function () {
      _this.setState({ isAuth: true }, function () {
        _this.props.transferMsg(_this.state.isAuth, _this.state.user);
      });
    };

    _this.handleIsAuthNo = function () {
      _this.setState({ isAuth: false }, function () {});
    };

    _this.handleOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
    };

    _this.signIn = _this.signIn.bind(_this);
    _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    _this.state = {
      username: '',
      password: '',
      isAuth: false,
      user: {
        id: 0,
        name: '',
        school: '',
        username: '',
        email: '',
        balance: 0
      },
      msg: '',
      open: false
    };
    return _this;
  }

  SimpleModal.prototype.signIn = function signIn() {
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post('/users/authenticate', {
      username: this.state.username,
      password: this.state.password
    }).then(function (responce) {
      console.log(responce);
      self.setState({ msg: responce.data.msg });
      if (responce.data.success) {
        self.state.user = responce.data.user;
        self.handleIsAuthYes({}, function () {});
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

  SimpleModal.prototype.handleUsernameChange = function handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  };

  SimpleModal.prototype.handlePasswordChange = function handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  };

  SimpleModal.prototype.render = function render() {
    var classes = this.props.classes;


    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "main",
          { className: classes.layout },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a,
            { className: classes.paper },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,
              { variant: "headline" },
              "\u767B\u5F55"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,
              { variant: "body2", style: { color: "#05122b" } },
              this.state.msg
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "form",
              { className: classes.form },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a,
                { margin: "normal", required: true, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a,
                  { htmlFor: "username" },
                  "\u7528\u6237\u540D"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, { id: "username", name: "username", autoComplete: "username", autoFocus: true, onChange: this.handleUsernameChange })
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a,
                { margin: "normal", required: true, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a,
                  { htmlFor: "password" },
                  "\u5BC6\u7801"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  name: "password",
                  type: "password",
                  id: "password",
                  autoComplete: "current-password",
                  onChange: this.handlePasswordChange
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
                {
                  fullWidth: true,
                  variant: "raised",
                  color: "primary",
                  className: classes.submit,
                  onClick: this.signIn
                },
                "\u767B\u5F55"
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterButton_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], { info: '还没注册账号？点击注册', variantType: 'text', isFullWidth: true })
            )
          )
        )
      )
    );
  };

  return SimpleModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SimpleModal.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
var SimpleModalWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SimpleModal);

/* harmony default export */ __webpack_exports__["default"] = (SimpleModalWrapped);

/***/ }),

/***/ "./src/components/RegisterButton.jsx":
/*!*******************************************!*\
  !*** ./src/components/RegisterButton.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var styles = function styles(theme) {
  var _layout, _ref;

  return _ref = {
    paper: {
      position: "absolute",
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    },
    layout: (_layout = {
      width: 'auto',
      display: 'block', // Fix IE11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, _layout[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)] = {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }, _layout)
  }, _ref["paper"] = {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2 + "px " + theme.spacing.unit * 3 + "px " + theme.spacing.unit * 3 + "px"
  }, _ref.avatar = {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  }, _ref.form = {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  }, _ref.submit = {
    marginTop: theme.spacing.unit * 3
  }, _ref;
};

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
    };

    _this.signUp = _this.signUp.bind(_this);
    _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    _this.handleRealnameChange = _this.handleRealnameChange.bind(_this);
    _this.handleSchoolChange = _this.handleSchoolChange.bind(_this);
    _this.handleEmailChange = _this.handleEmailChange.bind(_this);
    _this.handleInvCode = _this.handleInvCode.bind(_this);
    _this.state = {
      username: '',
      realname: '',
      school: '',
      email: '',
      password: '',

      identity: '2',
      balance: '10',
      invCode: '',

      msg: '',
      open: false
    };
    return _this;
  }

  Register.prototype.signUp = function signUp() {
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/users/register', {
      username: this.state.username,
      realname: this.state.realname,
      password: this.state.password,
      school: this.state.school,
      email: this.state.email,
      identity: this.state.identity,
      balance: this.state.balance,
      invCode: this.state.invCode
    }).then(function (responce) {
      console.log(responce);
      self.setState({ msg: responce.data.msg });
      if (responce.data.success) {
        setTimeout(self.handleClose({}, function () {}), 5000);
        // self.handleClose({},()=>{})
        // self.handleClose({},()=>{
        // });
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

  // componentDidMount(){
  //   setTimeout(this.setState({msg:'1234'}),3000);
  //   console.log(this.state.msg);
  // }


  Register.prototype.handleInvCode = function handleInvCode(e) {
    this.setState({ invCode: e.target.value });
  };

  Register.prototype.handleUsernameChange = function handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  };

  Register.prototype.handlePasswordChange = function handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  };

  Register.prototype.handleRealnameChange = function handleRealnameChange(e) {
    this.setState({ realname: e.target.value });
  };

  Register.prototype.handleSchoolChange = function handleSchoolChange(e) {
    this.setState({ school: e.target.value });
  };

  Register.prototype.handleEmailChange = function handleEmailChange(e) {
    this.setState({ email: e.target.value });
  };

  Register.prototype.render = function render() {
    var classes = this.props.classes;


    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
        { color: "primary", variant: "text", onClick: this.handleOpen, fullWidth: true },
        "\u6CA1\u6709\u8D26\u53F7\uFF1F\u70B9\u51FB\u6CE8\u518C"
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default.a,
        {
          "aria-labelledby": "simple-modal-title",
          "aria-describedby": "simple-modal-description",
          open: this.state.open,
          onClose: this.handleClose
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, null),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "main",
            { className: classes.layout },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a,
              { className: classes.paper },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a,
                { variant: "headline" },
                "\u6CE8\u518C"
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a,
                { variant: "body2" },
                this.state.msg
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "form",
                { className: classes.form },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,
                    { htmlFor: "username" },
                    "\u7528\u6237\u540D"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, { id: "username", name: "username", autoComplete: "username", autoFocus: true, onChange: this.handleUsernameChange })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,
                    { htmlFor: "realname" },
                    "\u59D3\u540D"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, { id: "realname", name: "realname", autoComplete: "realname", autoFocus: true, onChange: this.handleRealnameChange })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,
                    { htmlFor: "email" },
                    "\u90AE\u7BB1"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, { id: "email", name: "email", autoComplete: "email", autoFocus: true, onChange: this.handleEmailChange })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,
                    { htmlFor: "school" },
                    "\u5B66\u6821"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, { id: "school", name: "school", autoComplete: "school", autoFocus: true, onChange: this.handleSchoolChange })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,
                    { htmlFor: "invCode" },
                    "\u9080\u8BF7\u7801"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, { id: "invCode", name: "invCode", autoComplete: "invCode", autoFocus: true, onChange: this.handleInvCode })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { margin: "normal", required: true, fullWidth: true },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,
                    { htmlFor: "password" },
                    "\u5BC6\u7801"
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    name: "password",
                    type: "password",
                    id: "password",
                    autoComplete: "current-password",
                    onChange: this.handlePasswordChange
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
                  {
                    fullWidth: true,
                    variant: "raised",
                    color: "primary",
                    className: classes.submit,
                    onClick: this.signUp
                  },
                  "\u6CE8\u518C"
                )
              )
            )
          )
        )
      )
    );
  };

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Register.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
var SimpleModalWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Register);

/* harmony default export */ __webpack_exports__["default"] = (SimpleModalWrapped);

/***/ }),

/***/ "./src/components/WalletButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/WalletButton.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var styles = function styles(theme) {
  var _cardActions;

  return {
    layout: {
      // backgroundColor:'#1d213c', //紫黑色
      // color: theme.palette.common.white,
      width: 350
    },
    navBar: {
      backgroundColor: '#7a8cd6'
    },
    navbutton: {
      color: theme.palette.common.white
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200]
    },
    cardPricing: {
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2
    },
    cardActions: (_cardActions = {}, _cardActions[theme.breakpoints.up('sm')] = {
      paddingBottom: theme.spacing.unit * 2
    }, _cardActions),
    navtitle1: {
      color: "#077abc",
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    },
    navtitle2: {
      color: "#758087"
    },
    walletContent: {
      paddingTop: theme.spacing.unit * 10,
      paddingBottom: theme.spacing.unit * 3,
      paddingLeft: theme.spacing.unit * 2,
      backgroundColor: "",
      color: theme.palette.common.black
    },
    historyTop: {
      backgroundColor: "#bcc4d1"
    },
    historyContent: {
      paddingTop: theme.spacing.unit * 5,
      color: theme.palette.common.black
    }
  };
};

var TemporaryDrawer = function (_React$Component) {
  _inherits(TemporaryDrawer, _React$Component);

  function TemporaryDrawer(props) {
    _classCallCheck(this, TemporaryDrawer);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.toggleDrawer = function (open) {
      return function () {
        _this.setState({
          right: open
        });
      };
    };

    _this.Transfer = _this.Transfer.bind(_this);
    // this.handleFromUserChange = this.handleFromUserChange.bind(this);
    _this.handleToUserChange = _this.handleToUserChange.bind(_this);
    _this.handleAmountChange = _this.handleAmountChange.bind(_this);
    _this.state = {
      fromuser: props.user.username,
      toUser: '',
      amount: 0,
      right: false,
      msg: '',
      balance: props.user.balance
    };
    return _this;
  }

  TemporaryDrawer.prototype.handleAmountChange = function handleAmountChange(e) {
    this.setState({ amount: e.target.value });
  };

  TemporaryDrawer.prototype.handleToUserChange = function handleToUserChange(e) {
    this.setState({ toUser: e.target.value });
  };

  TemporaryDrawer.prototype.Transfer = function Transfer() {
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('/users/transfer', {
      fromUser: this.state.fromuser,
      toUser: this.state.toUser,
      amount: this.state.amount
    }).then(function (responce) {
      console.log(responce);
      self.setState({ msg: responce.data.msg });
      self.setState({ balance: responce.data.retNewFromUser.balance }, function () {});
    }).catch(function (error) {
      console.log(error);
    });
  };

  TemporaryDrawer.prototype.render = function render() {
    var classes = this.props.classes;


    var sideList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'main',
      { className: classes.layout },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default.a, null),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default.a,
        { className: classes.navBar },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8___default.a,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h2',
            { className: classes.navtitle1 },
            '\u7E41\u661F\u94B1\u5305'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: 'https://i.loli.net/2018/09/03/5b8c969447fc1.png', alt: '\u5173\u95ED.png', align: 'right', width: 20, onClick: this.toggleDrawer(false) })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classes.walletContent },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,
          { variant: 'headline', color: 'textPrimary' },
          this.props.user.username
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,
          { variant: 'subheading', color: 'textPrimary' },
          this.props.user.school
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,
          { variant: 'subheading', color: 'textPrimary' },
          '\u8D26\u6237 \xA0 ',
          this.props.user.id
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
          { container: true, spacing: 8, alignItems: 'flex-end' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
            { item: true, xs: 6 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,
              { variant: 'subheading', color: 'textPrimary' },
              '\u4F59\u989D \xA0 ',
              this.state.balance,
              ' /STARRY'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, { item: true, xs: 6 })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'form',
          { className: classes.form },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
            { container: true, spacing: 8, alignItems: 'flex-end' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
              { item: true, xs: 6 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a,
                { margin: 'normal', required: true, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a,
                  { htmlFor: 'toUser' },
                  '\u63A5\u6536\u7528\u6237'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default.a, { id: 'toUser', name: 'toUser', autoComplete: 'toUser', autoFocus: true, onChange: this.handleToUserChange })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
              { item: true, xs: 6 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a,
                { margin: 'normal', required: true, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a,
                  { htmlFor: 'amount' },
                  '\u91D1\u989D'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default.a, { id: 'amount', name: 'amount', autoComplete: 'amount', autoFocus: true, onChange: this.handleAmountChange })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
              { item: true, xs: 6 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
                {
                  fullWidth: true,
                  variant: 'raised',
                  color: 'primary',
                  className: classes.submit,
                  onClick: this.Transfer
                },
                '\u8F6C\u8D26'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
              { item: true, xs: 6 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,
                { variant: 'subheading', color: 'textPrimary' },
                this.state.msg
              )
            )
          )
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classes.historyTop },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'center',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'strong',
            null,
            'HISTORY'
          )
        )
      )
    );

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,
        { className: classes.navbutton, onClick: this.toggleDrawer(true) },
        ' \u6211\u7684\u94B1\u5305 '
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a,
        { anchor: 'right', open: this.state.right },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            tabIndex: 0,
            role: 'button'
          },
          sideList
        )
      )
    );
  };

  return TemporaryDrawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TemporaryDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(TemporaryDrawer));

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map