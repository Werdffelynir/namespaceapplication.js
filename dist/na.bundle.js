/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/extension/extension.js":
/*!************************************!*\
  !*** ./src/extension/extension.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var extension = function extension(name, callback, override) {
    var ext = createObject(name, callback, override);
    if (typeof ext.callback === 'function') {
        extension.stack[name] = ext;
    }
};

extension.stack = {};

extension.init = function (thisInstance) {
    var name = void 0,
        ext = void 0;
    for (name in extension.stack) {
        ext = extension.stack[name];

        if (thisInstance && !ext.initialized) {
            ext.context = ext.callback.call(ext.callback, thisInstance);
            thisInstance[ext.name] = ext.context;
        }
    }
};

var createObject = function createObject(name, callback, override) {
    if (typeof name === 'string' && typeof callback === 'function') {
        return {
            name: name,
            callback: callback,
            override: !!override,
            initialized: false,
            context: undefined
        };
    }
};

exports.default = extension;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _loadJS = __webpack_require__(/*! ./static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _typeOf = __webpack_require__(/*! ./static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ./static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _extension = __webpack_require__(/*! ./extension/extension */ "./src/extension/extension.js");

var _extension2 = _interopRequireDefault(_extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NamespaceApplication = function NamespaceApplication() {
    _classCallCheck(this, NamespaceApplication);

    this.path = '/';
    this.debug = true;

    if (arguments.length === 1 && arguments[0] && _typeof(arguments[0]) === 'object') {
        for (var key in arguments[0]) {
            if (this[key] === undefined || ['path', 'debug'].indexOf(key) !== -1) this[key] = arguments[0][key];
        }
    }

    _extension2.default.init(this);
};

NamespaceApplication.extension = _extension2.default;
NamespaceApplication.loadJS = _loadJS2.default;
NamespaceApplication.typeOf = _typeOf2.default;
NamespaceApplication.typeOfStrict = _typeOfStrict2.default;
window.NamespaceApplication = NamespaceApplication;

exports.default = NamespaceApplication;

/***/ }),

/***/ "./src/static/getDocument.js":
/*!***********************************!*\
  !*** ./src/static/getDocument.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getDocument = function getDocument() {
    if (document) return document;else throw new Error('document object not exist!');
};

exports.default = getDocument;

/***/ }),

/***/ "./src/static/loadJS.js":
/*!******************************!*\
  !*** ./src/static/loadJS.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadJS = function loadJS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadJS(src[i], onload, onerror);
        }
    } else {
        var doc = (0, _getDocument2.default)();
        var script = doc.createElement('script');
        var id = "src-" + Math.random().toString(32).slice(2);

        script.src = src.substr(-3) === '.js' ? src : src + '.js';
        script.type = 'application/javascript';
        script.id = id;
        script.onload = onload;
        script.onerror = onerror;

        doc.head.appendChild(script);
        return script;
    }
};

exports.default = loadJS;

/***/ }),

/***/ "./src/static/typeOf.js":
/*!******************************!*\
  !*** ./src/static/typeOf.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeOfStrict = __webpack_require__(/*! ./typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeOf = function typeOf(value, type) {
    var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    var t = (0, _typeOfStrict2.default)(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') t = 'object';

    return typeof type === 'string' ? type.toLowerCase() === t : t;
};

exports.default = typeOf;

/***/ }),

/***/ "./src/static/typeOfStrict.js":
/*!************************************!*\
  !*** ./src/static/typeOfStrict.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var typeOfStrict = function typeOfStrict(value, type) {
    var t = Object.prototype.toString.call(value).slice(8, -1);
    return typeof type === 'string' ? type === t : t;
};

exports.default = typeOfStrict;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVuc2lvbi9leHRlbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uIiwibmFtZSIsImNhbGxiYWNrIiwib3ZlcnJpZGUiLCJleHQiLCJjcmVhdGVPYmplY3QiLCJzdGFjayIsImluaXQiLCJ0aGlzSW5zdGFuY2UiLCJpbml0aWFsaXplZCIsImNvbnRleHQiLCJjYWxsIiwidW5kZWZpbmVkIiwiTmFtZXNwYWNlQXBwbGljYXRpb24iLCJwYXRoIiwiZGVidWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJpbmRleE9mIiwibG9hZEpTIiwidHlwZU9mIiwidHlwZU9mU3RyaWN0Iiwid2luZG93IiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudCIsIkVycm9yIiwic3JjIiwib25sb2FkIiwib25lcnJvciIsImkiLCJkb2MiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsInN1YnN0ciIsInR5cGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSIsInNpbXBsZVR5cGVzIiwidCIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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OztrQkFLZXZCLFkiLCJmaWxlIjoibmEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcblxuY29uc3QgZXh0ZW5zaW9uID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSkge1xuICAgIGNvbnN0IGV4dCA9IGNyZWF0ZU9iamVjdChuYW1lLCBjYWxsYmFjaywgb3ZlcnJpZGUpO1xuICAgIGlmICh0eXBlb2YgZXh0LmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV4dGVuc2lvbi5zdGFja1tuYW1lXSA9IGV4dDtcbiAgICB9XG59O1xuXG5leHRlbnNpb24uc3RhY2sgPSB7fTtcblxuZXh0ZW5zaW9uLmluaXQgPSBmdW5jdGlvbiAodGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IG5hbWUsIGV4dDtcbiAgICBmb3IgKG5hbWUgaW4gZXh0ZW5zaW9uLnN0YWNrKSB7XG4gICAgICAgIGV4dCA9IGV4dGVuc2lvbi5zdGFja1tuYW1lXTtcblxuICAgICAgICBpZiAodGhpc0luc3RhbmNlICYmICFleHQuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGV4dC5jb250ZXh0ID0gZXh0LmNhbGxiYWNrLmNhbGwoZXh0LmNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpc0luc3RhbmNlW2V4dC5uYW1lXSA9IGV4dC5jb250ZXh0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlT2JqZWN0ID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgb3ZlcnJpZGU6ICEhb3ZlcnJpZGUsXG4gICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICBjb250ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbnNpb247XG4iLCJpbXBvcnQgbG9hZEpTIGZyb20gXCIuL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gXCIuL2V4dGVuc2lvbi9leHRlbnNpb25cIjtcblxuY2xhc3MgTmFtZXNwYWNlQXBwbGljYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnLyc7XG4gICAgICAgIHRoaXMuZGVidWcgPSB0cnVlO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGFyZ3VtZW50c1swXSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBbJ3BhdGgnLCAnZGVidWcnXS5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBhcmd1bWVudHNbMF1ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cblxufVxuXG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5sb2FkSlMgPSBsb2FkSlM7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi50eXBlT2YgPSB0eXBlT2Y7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi50eXBlT2ZTdHJpY3QgPSB0eXBlT2ZTdHJpY3Q7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247IiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=