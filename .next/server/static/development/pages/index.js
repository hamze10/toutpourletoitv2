module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content/Presentation.js":
/*!********************************************!*\
  !*** ./components/Content/Presentation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Presentation; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Travail\\toutpourletoitv2\\components\\Content\\Presentation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Presentation() {
  return __jsx("div", {
    className: "jsx-1834081676" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1834081676",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, " QUI SOMMES-NOUS ? "), __jsx("hr", {
    className: "jsx-1834081676",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-1834081676",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, " Tout pour le toit est une soci\xE9t\xE9 compos\xE9e de couvreurs agr\xE9es et exp\xE9riment\xE9s et d'ouvriers qualifi\xE9s. Nous offrons diff\xE9rents services de qualit\xE9 \xE0 des prix corrects aux clients d\xE9sireux d'effectuer des travaux de toiture."), __jsx("p", {
    className: "jsx-1834081676",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Tout pour le toit vous garantit une durabilit\xE9 de vos travaux \xE0 long terme. De la r\xE9novation \xE0 la transformation et \xE0 la construction de votre toiture, d\xE9couvrez toutes nos r\xE9alisations au travers de ce site. Nous intervenons \xE9galement en cas d'urgence et de d\xE9pannages."), __jsx("p", {
    className: "jsx-1834081676",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Tout pour le toit est \xE0 votre disposition pour toute information suppl\xE9mentaire ou devis gratuit au", __jsx("span", {
    className: "jsx-1834081676" + " " + "gras",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, " +32 (0)2 521 97 10 "), " ou par e-mail ", __jsx("span", {
    className: "jsx-1834081676" + " " + "gras",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 82
    }
  }, " toutpourletoit@gmail.com ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1834081676",
    __self: this
  }, "@font-face{font-family :lemon;src :url('/assets/fonts/LEMONMILK-Light.otf');}@font-face{font-family :trash;src :url('/assets/fonts/TrashHand.TTF');}div.jsx-1834081676{padding :2%;margin-left :10%;margin-right :10%;}h1.jsx-1834081676{text-align :center;margin-bottom :3%;color :#e67e22;font-weight :bold;font-family :trash;}p.jsx-1834081676{font-family :lemon;}.gras.jsx-1834081676{font-weight :bold;}hr.jsx-1834081676{width :50%;margin-left :auto;margin-right :auto;}@media screen and (max-width:600px){div.jsx-1834081676{margin-left :0%;margin-right :0%;}h1.jsx-1834081676{font-size :x-large;}p.jsx-1834081676{font-size :small;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxUcmF2YWlsXFx0b3V0cG91cmxldG9pdHYyXFxjb21wb25lbnRzXFxDb250ZW50XFxQcmVzZW50YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUdnRCxBQUtBLEFBS1AsQUFNTyxBQVFBLEFBSUQsQUFJUCxBQU9TLEFBS0csQUFJRixXQWZILENBdEJELElBNkJJLENBU3JCLENBcEJKLENBNUJrRCxBQUtOLEFBV3RCLEFBUXRCLEFBb0JJLFVBakNrQixBQXNCQyxJQU9uQixJQXZCZSxVQUxuQixDQXNCQSxJQWhCc0IsT0FadEIsTUFMQSxLQWtCdUIsbUJBQ3ZCIiwiZmlsZSI6IkU6XFxUcmF2YWlsXFx0b3V0cG91cmxldG9pdHYyXFxjb21wb25lbnRzXFxDb250ZW50XFxQcmVzZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVzZW50YXRpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPiBcclxuICAgICAgICAgICAgPGgxPiBRVUkgU09NTUVTLU5PVVMgPyA8L2gxPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+IFRvdXQgcG91ciBsZSB0b2l0IGVzdCB1bmUgc29jacOpdMOpIGNvbXBvc8OpZSBkZSBjb3V2cmV1cnMgYWdyw6llcyBldCBleHDDqXJpbWVudMOpcyBldCBkJ291dnJpZXJzIHF1YWxpZmnDqXMuXHJcbiAgICAgICAgICAgICAgICBOb3VzIG9mZnJvbnMgZGlmZsOpcmVudHMgc2VydmljZXMgZGUgcXVhbGl0w6kgw6AgZGVzIHByaXggY29ycmVjdHMgYXV4IGNsaWVudHMgZMOpc2lyZXV4IGQnZWZmZWN0dWVyIGRlcyB0cmF2YXV4IGRlIHRvaXR1cmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUb3V0IHBvdXIgbGUgdG9pdCB2b3VzIGdhcmFudGl0IHVuZSBkdXJhYmlsaXTDqSBkZSB2b3MgdHJhdmF1eCDDoCBsb25nIHRlcm1lLiBEZSBsYSByw6lub3ZhdGlvbiDDoCBsYSB0cmFuc2Zvcm1hdGlvbiBldCDDoCBsYVxyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0aW9uIGRlIHZvdHJlIHRvaXR1cmUsIGTDqWNvdXZyZXogdG91dGVzIG5vcyByw6lhbGlzYXRpb25zIGF1IHRyYXZlcnMgZGUgY2Ugc2l0ZS4gTm91cyBpbnRlcnZlbm9uc1xyXG4gICAgICAgICAgICAgICAgw6lnYWxlbWVudCBlbiBjYXMgZCd1cmdlbmNlIGV0IGRlIGTDqXBhbm5hZ2VzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVG91dCBwb3VyIGxlIHRvaXQgZXN0IMOgIHZvdHJlIGRpc3Bvc2l0aW9uIHBvdXIgdG91dGUgaW5mb3JtYXRpb24gc3VwcGzDqW1lbnRhaXJlIG91IGRldmlzIGdyYXR1aXQgYXVcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyYXNcIj4gKzMyICgwKTIgNTIxIDk3IDEwIDwvc3Bhbj4gb3UgcGFyIGUtbWFpbCA8c3BhbiBjbGFzc05hbWU9XCJncmFzXCI+IHRvdXRwb3VybGV0b2l0QGdtYWlsLmNvbSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogbGVtb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgOiB1cmwoJy9hc3NldHMvZm9udHMvTEVNT05NSUxLLUxpZ2h0Lm90ZicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogdHJhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgOiB1cmwoJy9hc3NldHMvZm9udHMvVHJhc2hIYW5kLlRURicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICNlNjdlMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseSA6IHRyYXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogbGVtb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=E:\\\\Travail\\\\toutpourletoitv2\\\\components\\\\Content\\\\Presentation.js */"));
}

/***/ }),

/***/ "./components/Content/Services.js":
/*!****************************************!*\
  !*** ./components/Content/Services.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Travail\\toutpourletoitv2\\components\\Content\\Services.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Services() {
  return __jsx("div", {
    className: "jsx-338036911" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-338036911",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, " NOS SERVICES ET REALISATIONS "), __jsx("hr", {
    className: "jsx-338036911",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-338036911" + " " + "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "card-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("figure", {
    className: "jsx-338036911" + " " + "image is-256x256",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/assets/images/logo-reno.png",
    alt: "Image renovation",
    className: "jsx-338036911",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "jsx-338036911" + " " + "card-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "content blanche",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "R\xE9novation")), __jsx("footer", {
    className: "jsx-338036911" + " " + "card-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Tuiles"), __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Ardoises"), __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Zinc"), __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Roofing"))), __jsx("div", {
    className: "jsx-338036911" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "card-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("figure", {
    className: "jsx-338036911" + " " + "image is-256x256",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/assets/images/logo-transfo.png",
    alt: "Image transformation",
    className: "jsx-338036911",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "jsx-338036911" + " " + "card-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "content blanche",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "Transformation")), __jsx("footer", {
    className: "jsx-338036911" + " " + "card-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, "Chien assis"), __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Rehaussement"))), __jsx("div", {
    className: "jsx-338036911" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "card-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("figure", {
    className: "jsx-338036911" + " " + "image is-256x256",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/assets/images/logo-const.png",
    alt: "Image construction",
    className: "jsx-338036911",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "jsx-338036911" + " " + "card-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-338036911" + " " + "content blanche",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Construction")), __jsx("footer", {
    className: "jsx-338036911" + " " + "card-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-338036911" + " " + "card-footer-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Nouvelle toiture")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "338036911",
    __self: this
  }, "@font-face{font-family :lemon;src :url('/assets/fonts/LEMONMILK-Light.otf');}@font-face{font-family :trash;src :url('/assets/fonts/TrashHand.TTF');}div.jsx-338036911{padding :2%;background-color :#ffe6cf;}.cards.jsx-338036911{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;-webkit-flex-wrap :wrap;-ms-flex-wrap :wrap;flex-wrap :wrap;}.card.jsx-338036911{background-color :white;width :400px;margin:2%;}.image.jsx-338036911{margin-right :auto;}.blanche.jsx-338036911{color :#e67e22;text-align :center;font-size :xx-large;font-family :trash;}a.jsx-338036911{font-family :lemon;}.card-image.jsx-338036911,.card-content.jsx-338036911,.blanche.jsx-338036911{background-color :white;}h1.jsx-338036911{text-align :center;color :#e67e22;font-weight :bold;font-family :trash;}hr.jsx-338036911{width :50%;margin-left :auto;margin-right :auto;}@media screen and (max-width:600px){h1.jsx-338036911{font-size :x-large;margin-top :2%;}.card.jsx-338036911{width :320px;}a.jsx-338036911{font-size :small;}.blanche.jsx-338036911{font-size :x-large;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxUcmF2YWlsXFx0b3V0cG91cmxldG9pdHYyXFxjb21wb25lbnRzXFxDb250ZW50XFxTZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRG9CLEFBR2dELEFBS0EsQUFLUCxBQUtFLEFBTVUsQUFNTCxBQUlKLEFBT0ksQUFJSyxBQUlMLEFBT1IsQUFPWSxBQUtOLEFBSUksQUFJRSxXQW5CTCxDQTNDUSxDQXVEMUIsRUFsQ21CLEVBc0NuQixFQXJFOEMsQUFLTixBQXNCNUMsQUFXQSxBQVFtQixBQWNJLEFBYW5CLEtBcERhLEFBcUJqQixLQVl1QixLQXRCQyxBQWVGLEFBY2xCLEdBdkNVLENBWGQsU0FZQSxDQWdDQSxJQVB1QixFQWZBLEtBM0J2QixNQUxBLE1BZ0RBLEVBZkEsS0FuQjRCLHFHQUNSLDREQUNwQiIsImZpbGUiOiJFOlxcVHJhdmFpbFxcdG91dHBvdXJsZXRvaXR2MlxcY29tcG9uZW50c1xcQ29udGVudFxcU2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMT4gTk9TIFNFUlZJQ0VTIEVUIFJFQUxJU0FUSU9OUyA8L2gxPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTI1NngyNTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby1yZW5vLnBuZ1wiIGFsdD1cIkltYWdlIHJlbm92YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgYmxhbmNoZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUsOpbm92YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW1cIj5UdWlsZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXItaXRlbVwiPkFyZG9pc2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW1cIj5aaW5jPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW1cIj5Sb29maW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMjU2eDI1NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvLXRyYW5zZm8ucG5nXCIgYWx0PVwiSW1hZ2UgdHJhbnNmb3JtYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgYmxhbmNoZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW1cIj5DaGllbiBhc3NpczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJkLWZvb3Rlci1pdGVtXCI+UmVoYXVzc2VtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtMjU2eDI1NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvLWNvbnN0LnBuZ1wiIGFsdD1cIkltYWdlIGNvbnN0cnVjdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBibGFuY2hlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdHJ1Y3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW1cIj5Ob3V2ZWxsZSB0b2l0dXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogbGVtb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgOiB1cmwoJy9hc3NldHMvZm9udHMvTEVNT05NSUxLLUxpZ2h0Lm90ZicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogdHJhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgOiB1cmwoJy9hc3NldHMvZm9udHMvVHJhc2hIYW5kLlRURicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNmZmU2Y2Y7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcCA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJsYW5jaGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAjZTY3ZTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiB0cmFzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseSA6IGxlbW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbWFnZSwgLmNhcmQtY29udGVudCwgLmJsYW5jaGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAjZTY3ZTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQgOiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiB0cmFzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IHgtbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcCA6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDMyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ibGFuY2hlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=E:\\\\Travail\\\\toutpourletoitv2\\\\components\\\\Content\\\\Services.js */"));
}

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Travail\\toutpourletoitv2\\components\\Footer\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Footer() {
  return __jsx("div", {
    className: "jsx-3301972319" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3301972319",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-3301972319" + " " + "icone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-3301972319" + " " + "fas fa-phone-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 21
    }
  })), "+32 (0)2 521 97 10"), __jsx("p", {
    className: "jsx-3301972319" + " " + "mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-3301972319" + " " + "icone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-3301972319" + " " + "fas fa-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  })), "toutpourletoit@gmail.com"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3301972319",
    __self: this
  }, "@font-face{font-family :lemon;src :url('/assets/fonts/LEMONMILK-Light.otf');}div.jsx-3301972319{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :row;-ms-flex-direction :row;flex-direction :row;}p.jsx-3301972319{font-family :lemon;width :100%;text-align :center;}.icone.jsx-3301972319{margin-right :1%;color:#e67e22;}@media screen and (max-width:600px){p.jsx-3301972319{font-size :small;text-align :center;}.mail.jsx-3301972319{font-size :x-small;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxUcmF2YWlsXFx0b3V0cG91cmxldG9pdHYyXFxjb21wb25lbnRzXFxGb290ZXJcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBR2dELEFBS0wsQUFNSyxBQU1GLEFBTUksQUFLRSxpQkFWVCxBQU1TLEVBdkJ1QixBQVdsQyxBQWlCWixZQWhCbUIsQUFNdkIsS0FNSSxjQVhKLGVBWkEsYUFJd0Isd0VBRXhCIiwiZmlsZSI6IkU6XFxUcmF2YWlsXFx0b3V0cG91cmxldG9pdHYyXFxjb21wb25lbnRzXFxGb290ZXJcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGhvbmUtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKzMyICgwKTIgNTIxIDk3IDEwXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgdG91dHBvdXJsZXRvaXRAZ21haWwuY29tXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiBsZW1vbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA6IHVybCgnL2Fzc2V0cy9mb250cy9MRU1PTk1JTEstTGlnaHQub3RmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uIDogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiBsZW1vbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogc21hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogeC1zbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ== */\n/*@ sourceURL=E:\\\\Travail\\\\toutpourletoitv2\\\\components\\\\Footer\\\\Footer.js */"));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Content_Presentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content/Presentation */ "./components/Content/Presentation.js");
/* harmony import */ var _components_Content_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content/Services */ "./components/Content/Services.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "E:\\Travail\\toutpourletoitv2\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CustomHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Header/Header */ "./components/Header/Header.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Header/Header */ "./components/Header/Header.js")],
    modules: ['../components/Header/Header']
  }
});

const Index = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx(CustomHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx(_components_Content_Presentation__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}), __jsx(_components_Content_Services__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Travail\toutpourletoitv2\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map