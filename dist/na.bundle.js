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

/***/ "./src/NamespaceApplication.js":
/*!*************************************!*\
  !*** ./src/NamespaceApplication.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _component = __webpack_require__(/*! ./core/component */ "./src/core/component.js");

var _component2 = _interopRequireDefault(_component);

var _extension = __webpack_require__(/*! ./core/extension */ "./src/core/extension.js");

var _extension2 = _interopRequireDefault(_extension);

var _dependency = __webpack_require__(/*! ./core/dependency */ "./src/core/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _route = __webpack_require__(/*! ./core/route */ "./src/core/route.js");

var _route2 = _interopRequireDefault(_route);

var _state = __webpack_require__(/*! ./core/state */ "./src/core/state.js");

var _state2 = _interopRequireDefault(_state);

var _defined = __webpack_require__(/*! ./static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NamespaceApplication = function NamespaceApplication(config) {
    var _this = this;

    _classCallCheck(this, NamespaceApplication);

    if (NamespaceApplication.instance) return NamespaceApplication.instance;

    this.config = function (key) {
        return _this.configuration[key];
    };
    this.configuration = {
        id: undefined,
        url: undefined,
        mode: undefined,
        debug: undefined
    };
    Object.keys(config).forEach(function (key) {
        if (_this.configuration[key] === undefined) _this.configuration[key] = config[key];
    });

    this.component = _component2.default;
    this.component.register(this);

    this.extension = _extension2.default;
    this.extension.register(this);

    this.dependency = _dependency2.default;
    this.route = _route2.default;
    this.state = _state2.default;

    NamespaceApplication.instance = this;
};

NamespaceApplication.component = _component2.default;
NamespaceApplication.extension = _extension2.default;

exports.default = NamespaceApplication;

/***/ }),

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _attr = __webpack_require__(/*! ./static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _createElement = __webpack_require__(/*! ./static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _createFragment = __webpack_require__(/*! ./static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _css = __webpack_require__(/*! ./static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ./static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _inject = __webpack_require__(/*! ./static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ./static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ./static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ./static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _search = __webpack_require__(/*! ./static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _defined = __webpack_require__(/*! ./static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _each = __webpack_require__(/*! ./static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

var _empty = __webpack_require__(/*! ./static/empty */ "./src/static/empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _findObject = __webpack_require__(/*! ./static/findObject */ "./src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _findObjects = __webpack_require__(/*! ./static/findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _format = __webpack_require__(/*! ./static/format */ "./src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _isNode = __webpack_require__(/*! ./static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ./static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ./static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _merge = __webpack_require__(/*! ./static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _on = __webpack_require__(/*! ./static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _position = __webpack_require__(/*! ./static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ./static/positionMouse */ "./src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _redirect = __webpack_require__(/*! ./static/redirect */ "./src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _typeOf = __webpack_require__(/*! ./static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ./static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ./static/uri */ "./src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

var _copy = __webpack_require__(/*! ./static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = {
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
    domLoaded: _domLoaded2.default,
    inject: _inject2.default,
    str2node: _str2node2.default,
    node2str: _node2str2.default,
    query: _query2.default,
    search: _search2.default,
    defined: _defined2.default,
    each: _each2.default,
    empty: _empty2.default,
    findObject: _findObject2.default,
    findObjects: _findObjects2.default,
    format: _format2.default,
    isNode: _isNode2.default,
    loadCSS: _loadCSS2.default,
    loadJS: _loadJS2.default,
    merge: _merge2.default,
    on: _on2.default,
    position: _position2.default,
    positionMouse: _positionMouse2.default,
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default,
    copy: _copy2.default
};

exports.default = Util;

/***/ }),

/***/ "./src/cookie/index.js":
/*!*****************************!*\
  !*** ./src/cookie/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
 * LocalStorage wrapper
 *
 * @param name
 * @param value
 * @param option
 * @returns {{set: (Storage.set|*), get: (Storage.get|*), key: (Storage.key|*), clear: (Storage.clear|*), remove: (Storage.remove|*), length: (Storage.length|*)}}
 * @constructor
 */
var Cookie = function Cookie(name, value) {
    switch (arguments.length) {
        case 0:
            return {
                set: set,
                get: get,
                clear: clear,
                remove: remove,
                length: length
            };
        case 1:
            return get(name);
        case 2:
            return set(name, value);
    }
};

/**
 * Set Cookie key, value
 *  expires - ms, Date, -1, 0
 * @param name
 * @param value
 * @param {{}} options   {expires: 0, path: '/', domain: 'site.com', secure: false}
 * @param typeJson bool
 */
var set = function set(name, value, options) {
    var typeJson = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    options = options || {};

    if (Cookie.typeJson) {}
    if (typeJson) try {
        value = JSON.stringify(value);
    } catch (error) {}

    var data = name + "=" + encodeURIComponent(value);

    if (options.expires) {
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        } else {
            var date = new Date();
            options.expires = date.setTime(date.getTime() + parseInt(options.expires) * 1000);
        }
    }

    data += encode(options);
    document.cookie = data;
};

/**
 * Get Cookie value by key
 * @param name
 * @param typeJson bool
 * @returns {*}
 */
var get = function get(name) {
    var typeJson = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    var data = matches ? decodeURIComponent(matches[1]) : undefined;

    if (Cookie.dataJson) {}
    if (typeJson && data) try {
        data = JSON.parse(data);
    } catch (error) {}

    return data;
};

/**
 * Remove Cookie by key
 * @param name
 * @param option
 */
var remove = function remove(name, option) {
    option = option || { expires: -1 };
    set(name, "", option);
};

var clear = function clear() {
    document.cookie = '';
};

/**
 * Convert object to uri get string
 * @param {object} data     example: {expires: 0, path: '/', domain: 'my-site.com', secure: false}
 * @returns {string}        example: "expires=0;path=/;domain=site.com;secure=false";
 */
var encode = function encode(data) {
    var str = '';
    Object.keys(data).forEach(function (key) {
        if (data[key] !== true) str += (str ? ';' : '') + key + '=' + encodeURIComponent(data[key]);
    });
    return str;
};

var decode = function decode(name) {
    if (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    } else {
        var data = {},
            cookies = document.cookie.split('; ');

        cookies.forEach(function (value) {
            if (value.length) {
                var parts = value.trim().split('=');
                data[parts[0].trim()] = decodeURIComponent(parts[1]).trim();
            }
        });
        return data;
    }
};

Cookie.set = set;
Cookie.get = get;
Cookie.remove = remove;
Cookie.clear = clear;
Cookie.encode = encode;
Cookie.decode = decode;
Cookie.dataJson = true;

exports.set = set;
exports.get = get;
exports.clear = clear;
exports.remove = remove;
exports.encode = encode;
exports.decode = decode;
exports.default = Cookie;

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(config) {
    if (typeof config === 'string') {
        return component.list[config];
    } else {
        var comp = component.create(config);
        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
        }
        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }
        component.list[comp.id] = comp;
    }
};

component.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(component.list).forEach(function (key) {
            var comp = component.list[key];
            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
            }
        });
    }
};

component.list = {};

component.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        template: null,
        init: function init() {},
        complete: function complete() {},
        override: false,
        initialized: false,
        completed: false,
        context: false
    }, config);
};

exports.default = component;

/***/ }),

/***/ "./src/core/dependency.js":
/*!********************************!*\
  !*** ./src/core/dependency.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _loadCSS = __webpack_require__(/*! ../static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dependency = function dependency(config) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var sources = (0, _merge2.default)({
        css: [],
        js: [],
        elements: [],
        complete: function complete() {},
        error: function error() {}
    }, config);

    if (force) dependency.load(sources);

    return sources;
};

dependency.load = function (sources) {
    var max = (sources.css ? sources.css.length : 0) + (sources.js ? sources.js.length : 0);
    var srcs = (0, _merge2.default)({ css: sources.css }, { js: sources.js });

    var i = 0;
    Object.keys(srcs).forEach(function (key) {
        var load = key === 'css' ? _loadCSS2.default : _loadJS2.default;
        srcs[key].forEach(function (src) {
            sources.elements.push(load(src, function () {
                i++;
                if (max === i) return sources.complete(sources);
            }, sources.error));
        });
    });
};

dependency.remove = function (sources) {
    var elements = sources && sources.elements ? sources.elements : [];
    if (elements.length) {
        sources.elements.forEach(function (element) {
            element.parentNode.removeChild(element);
        });
    }
};

exports.default = dependency;

/***/ }),

/***/ "./src/core/extension.js":
/*!*******************************!*\
  !*** ./src/core/extension.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extension = function extension(config) {
    if (typeof config === 'string') {
        return extension.list[config];
    } else {
        var comp = extension.create(config);
        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
        }
        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }
        extension.list[comp.id] = comp;
    }
};

extension.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(extension.list).forEach(function (key) {
            var comp = extension.list[key];
            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
            }
        });
    }
};

extension.list = {};

extension.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        template: null,
        init: function init() {},
        complete: function complete() {},
        override: false,
        initialized: false,
        completed: false,
        context: false
    }, config);
};

exports.default = extension;

/***/ }),

/***/ "./src/core/route.js":
/*!***************************!*\
  !*** ./src/core/route.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var route = function route(url, component) {
    if (location.pathname === url) {
        this[component]();
    }
};

exports.default = route;

/***/ }),

/***/ "./src/core/state.js":
/*!***************************!*\
  !*** ./src/core/state.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = function state(key, data) {
    return data === undefined ? state.get(key) : state.set(key, data);
};

state.callback = {};
state.source = createSource();
state.sourcedata = {};
state.action = function (key, callback) {
    state.callback[key] = callback;
};

state.get = function (key) {
    return (0, _typeOf2.default)(key, 'string') ? state.sourcedata[key] || state.source[key] : key === undefined ? null : state.sourcedata;
};

state.set = function (key, payload) {
    state.setCase(_defineProperty({}, key, payload));
};

state.setCase = function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object.keys(payload).forEach(function (key) {
        state.source[key] = state.sourcedata[key] = payload[key];
    });
};

function createSource() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    state.sourcedata = payload;
    return new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {
            if (state.callback[prop]) {
                state.callback[prop].call({}, state.source, value);
            }
            return true;
        }
    });
}

exports.default = state;

/***/ }),

/***/ "./src/datetime/index.js":
/*!*******************************!*\
  !*** ./src/datetime/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Datetime = {};
Datetime.MS_IN_DAY = 864e5;
Datetime.MS_IN_HOUR = 36e5;
Datetime.MS_IN_MIN = 6e4;

/**
 * Return timestamp
 * @param date
 * @returns {number}
 */
Datetime.time = function (date) {
    return date instanceof Date ? date.getTime() : new Date().getTime();
};

/**
 * Add days to some date
 * @param day           number of days. 0.04 - 1 hour, 0.5 - 12 hour, 1 - 1 day
 * @param dateStart     type Date, start date
 * @returns {*}  type Date
 */
Datetime.addDays = function (day, dateStart) {
    var date = dateStart ? new Date(dateStart) : new Date();
    date.setTime(date.getTime() + day * 86400000);
    return date;
};

/**
 * Time between Dates
 * <pre>
 *     var from = new Date('2016-08-01 20:30');
 *     var to = new Date('2016-08-10 07:55');
 *     .Date.betweenDates(from, to); // Object { day: 8, hour: 11, minute: 25 }
 * </pre>
 * @param dateFrom
 * @param dateTo
 * @returns {{day: number, hour: number, minute: number}}
 */
Datetime.betweenDates = function (dateFrom, dateTo) {
    dateFrom = dateFrom || new Date();
    dateTo = dateTo || new Date();
    var diffMs = dateTo - dateFrom,
        diffDays = Math.round(diffMs / 864e5),
        diffHrs = Math.round(diffMs % 864e5 / 36e5),
        diffMin = Math.round(diffMs % 864e5 % 36e5 / 6e4);
    return { day: diffDays, hour: diffHrs, minute: diffMin };
};

/**
 * Convert date string to Date Object
 * yy - the year as a two-digit number ( 00 to 99 );
 * YY - the year as a four-digit number ( 1900-9999 );
 * mm - the month as a number with a leading zero ( 01 to 12 ) ( 1 to 12 );
 * dd - the day as a number with a leading zero ( 01 to 31 ) ( 1 to 31 );
 * hh HH - the hour ( 00 to 11 ) ( 00 to 23 ) ( 1 to 12 ) ( 0 to 23 );
 * ii - the minute as a number with a leading zero ( 00 to 59 );
 * ss - the second as a number with a leading zero ( 00 to 59 );
 * aa - displays am (for times from midnight until noon) and pm (for times from noon until midnight);
 *
 * .strToDate('12.05.2017 12:30:25', 'mm.dd.YY HH:ii:ss')
 * .strToDate('12/05/2017', 'mm/dd/YY')
 * .strToDate('12/5/2017', 'mm/dd/YY', true)
 * @param date
 * @param format
 * @param utc
 * @returns {Date}
 */
Datetime.strToDate = function (date, format, utc) {
    var set = [0, 0, 1, 0, 0, 0];
    var temp = date.match(/[a-zA-Z]+|[0-9]+/g);
    var mask = format.match(/[a-zA-Z]{2}/g);
    for (var i = 0; i < mask.length; i++) {
        switch (mask[i]) {
            case "dd":
                set[2] = temp[i] || 1;
                break;
            case "mm":
                set[1] = (temp[i] || 1) - 1;
                break;
            case "yy":
                set[0] = temp[i] * 1 + (temp[i] > 50 ? 1900 : 2000);
                break;
            case "hh":
            case "HH":
                set[3] = temp[i] || 0;
                break;
            case "ii":
                set[4] = temp[i] || 0;
                break;
            case "YY":
                set[0] = temp[i] || 0;
                break;
            case "aa":
                set[3] = set[3] % 12 + ((temp[i] || '').toLowerCase() === 'am' ? 0 : 12);
                break;
            case "ss":
                set[5] = temp[i] || 0;
                break;
            default:
                break;
        }
    }
    if (utc) {
        return new Date(Date.UTC(set[0], set[1], set[2], set[3], set[4], set[5]));
    }
    return new Date(set[0], set[1], set[2], set[3], set[4], set[5]);
};

exports.default = Datetime;

/*
export default {
    MS_IN_DAY: Datetime.MS_IN_DAY,
    MS_IN_HOUR: Datetime.MS_IN_HOUR,
    MS_IN_MIN: Datetime.MS_IN_MIN,
    time: Datetime.time,
    addDays: Datetime.addDays,
    betweenDates: Datetime.betweenDates,
    strToDate: Datetime.strToDate,
};
*/

/***/ }),

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _attr = __webpack_require__(/*! ../static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _css = __webpack_require__(/*! ../static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ../static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _createFragment = __webpack_require__(/*! ../static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _createElement = __webpack_require__(/*! ../static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _on = __webpack_require__(/*! ../static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _defined = __webpack_require__(/*! ../static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dom(selector) {
    var _ = {
        selector: selector,
        selected: (0, _queryAll2.default)(selector)
    };

    var _set_real_display_style = function _set_real_display_style(src) {
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(_set_real_display_style);
        } else if ((0, _isNode2.default)(src) && src['real-display-style'] === undefined) {
            var style = src.style.display ? src.style.display : getComputedStyle(src).display;
            src['real-display-style'] = !style || style === 'none' ? 'block' : style;
        }
    };

    _.one = function () {
        return _.selected && _.selected.length ? _.selected[0] : false;
    };
    _.all = function () {
        return _.selected;
    };
    _.attr = function (name, value) {
        return (0, _defined2.default)(value) ? (0, _attr2.default)(_.one(), name, value) : (0, _attr2.default)(_.one(), name);
    };
    _.inject = function (data, append, to) {
        return (0, _inject2.default)(_.one(), data, append, to);
    };
    _.append = function (data) {
        return (0, _inject2.default)(_.one(), data, true);
    };
    _.search = function (attr, from) {
        return (0, _search2.default)(_.one(), attr, from);
    };
    _.parent = function () {
        return _.one().parentNode;
    };
    _.remove = function () {
        return _.one().parentNode.removeChild(_.one());
    };
    _.show = function () {
        var src = _.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: src && src['real-display-style'] ? src['real-display-style'] : 'block' });
    };
    _.hide = function () {
        var src = _.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: 'none' });
    };
    _.toggle = function () {
        var src = _.one();
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(Dom.toggle);
        } else if ((0, _isNode2.default)(src)) {
            if (src.style.display === 'none') Dom.show(src);else Dom.hide(src);
        }
    };
    _.on = function (eventName, callback, bubble) {
        return (0, _on2.default)(_.one(), eventName, callback, bubble);
    };

    return _;
}

Dom.attr = _attr2.default;
Dom.css = _css2.default;
Dom.loaded = _domLoaded2.default;
Dom.inject = _inject2.default;
Dom.str2node = _str2node2.default;
Dom.search = _search2.default;
Dom.queryAll = _queryAll2.default;
Dom.query = _query2.default;
Dom.create = _createElement2.default;
Dom.fragment = _createFragment2.default;
Dom.node2str = _node2str2.default;
Dom.str2node = _str2node2.default;

exports.default = Dom;

/***/ }),

/***/ "./src/emmet/index.js":
/*!****************************!*\
  !*** ./src/emmet/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Emmet syntax for creating DOM elements
 *
 * Syntax
 *   const emmet = Emmet();
 *   emmet('.table > div{left} + div(class="text-right"){right}')
 *   tag#id.classes(attributes=""){inner text} > .nested ^ .backed.up.one + .sibling
 *
 * Arguments
 *   .emmet( syntax : string, returnOnlyHTML : boolean )
 *
 * @namespace Emmet
 * @type function
 * @param text          syntax
 * @param htmlOnly      returnOnlyHTML
 * @returns {string|*}
 */
var Emmet = function Emmet() {
    var tempInnerTexts = [];
    var tempEscaped = [];
    var re = {};

    re.excludes = "([^\\.#\\(\\{]+)";
    re.classes = new RegExp("\\." + re.excludes, "g");
    re.id = new RegExp("#" + re.excludes, "g");
    re.tag = new RegExp("^" + re.excludes);
    re.indexes = /(.+?)(>|\+|\^|$)/g;
    re.escape = /("|')([^\1]*?)\1/g;
    re.innerText = /\{([^}]*?)}/g;
    re.attrs = /\(([^\)]*)\)/g;

    var emmet = function emmet(text, htmlOnly) {
        var tree = element(),
            current = tree,
            lastElement = tree,
            commandText = text || "",
            convertCollection = function convertCollection(src) {
            var fragment = document.createDocumentFragment();
            while (src.length) {
                fragment.appendChild(src[0]);
            }return fragment;
        },
            result = void 0;

        tempInnerTexts = [];
        tempEscaped = [];
        commandText.replace(re.escape, function (full, quotes, escape) {
            tempEscaped.push(escape);
            return "\"\"";
        }).replace(re.innerText, function (full, innerText) {
            tempInnerTexts.push(innerText);
            return "{}";
        }).replace(/\s+/g, "").replace(re.indexes, function (full, elementText, splitter) {
            current.appendChild(lastElement = element(elementText));
            if (splitter === ">") current = lastElement;else if (splitter === "^") current = current.parentNode;
        });

        result = tree.children.length > 1 ? tree.children : tree.children[0];

        return htmlOnly ? tree.innerHTML : result instanceof HTMLCollection ? convertCollection(result) : result;
    };

    var element = function element(text) {
        var commandText = text || "",
            match_tag = commandText.match(re.tag),
            match_id = commandText.match(re.id),
            match_classes = commandText.match(re.classes),
            match_attrs = commandText.match(re.attrs),
            match_innerText = commandText.match(re.innerText),
            element = document.createElement(match_tag ? match_tag[0] : "div");

        if (match_id) {
            element.id = match_id.pop().replace(re.id, "$1");
        }

        if (match_classes) {
            element.className = match_classes.map(function (className) {
                return className.slice(1);
            }).join(" ");
        }

        if (match_innerText) {
            element.innerHTML += match_innerText.map(function () {
                return unescape(tempInnerTexts.shift());
            }).join(" ");
        }

        if (match_attrs) {
            match_attrs.map(function (chunkParam) {
                var chunk = chunkParam.replace(re.attrs, "$1").split(",");
                chunk.map(function (attrParam) {
                    var attr = attrParam.split("=");
                    var key = attr.shift();
                    var value = JSON.parse(unescape(attr.join("=")));
                    element.setAttribute(key, value);
                });
            });
        }

        return element;
    };

    return emmet;
};

exports.default = Emmet;

/***/ }),

/***/ "./src/event-manager/index.js":
/*!************************************!*\
  !*** ./src/event-manager/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var EventManager = {

    eventFragment: document.createDocumentFragment(),
    version: '0.0.2',
    eventsType: {},

    /**
     * Create new Event
     * @param name
     * @param details
     * @returns {CustomEvent}
     */
    addEvent: function addEvent(name, details) {
        var key = void 0;
        var event = new CustomEvent(name, { detail: details });
        if ((typeof details === 'undefined' ? 'undefined' : _typeof(details)) === 'object') for (key in details) {
            if (!event.hasOwnProperty(key)) event[key] = details[key];
        }EventManager.eventFragment[name] = event;
        return this;
    },

    /**
     * Remove Event
     * @param name
     */
    removeEvent: function removeEvent(name) {
        if (EventManager.eventFragment[name]) delete EventManager.eventFragment[name];
        return this;
    },

    /**
     * Register an event handler of a specific event type on the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     * @returns {{type: *, listener: *, useCapture: (*|boolean)}}
     */
    addEventListener: function addEventListener(type, listener, useCapture) {
        useCapture = useCapture || false;
        EventManager.eventFragment.addEventListener(type, listener, useCapture);
        return this;
    },

    /**
     * Removes an event listener from the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     */
    removeEventListener: function removeEventListener(type, listener, useCapture) {
        EventManager.eventFragment.removeEventListener(type, listener, useCapture || false);
        return this;
    },

    /**
     * Dispatch an event to this EventTarget.
     * @param type
     */
    dispatchEvent: function dispatchEvent(type) {
        if (EventManager.eventFragment[type] instanceof CustomEvent) EventManager.eventFragment.dispatchEvent(EventManager.eventFragment[type]);
        return this;
    }

};

exports.default = EventManager;

/***/ }),

/***/ "./src/http-request/index.js":
/*!***********************************!*\
  !*** ./src/http-request/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var httpRequest = function httpRequest(config, callback, thisInstance) {
    var key = void 0,
        xhr = new XMLHttpRequest(),
        options = {
        data: config.data || {},
        action: config.action || config.url || document.location.href,
        method: config.method ? config.method.toUpperCase() : 'GET',
        headers: config.headers || {},
        useEncode: config.useEncode === undefined ? true : !!config.useEncode,
        useFormData: config.useFormData === undefined ? false : !!config.useFormData,
        async: config.async === undefined ? true : !!config.async,
        user: config.user || null,
        password: config.user || null
    },
        concateString = function concateString(params) {
        var result = '';
        for (key in params) {
            result += '&' + key + '=' + (options.useEncode ? encodeURIComponent(params[key]) : params[key]);
        }
        return result;
    },
        sendData = {};

    thisInstance = (0, _typeOf2.default)(thisInstance, 'object') ? thisInstance : {};

    // data prepare
    if (options.method === 'GET') {

        // form to FormData
        options.action += options.action.indexOf('?') === -1 ? '?' : '';
        options.action += concateString(options.data);
        sendData = {};
    } else {

        // reset to useFormData in true
        if (options.data instanceof FormData) {
            options.data = {};
            options.useFormData = true;
            sendData = options.data;
        }

        // form to FormData
        if (options.data instanceof HTMLFormElement) {
            sendData = new FormData(options.data);
            options.useFormData = true;
            options.data = {};
        }

        if (options.useFormData) {
            if (!(sendData instanceof FormData)) {
                sendData = new FormData();
            }

            for (key in options.data) {
                sendData.append(key, options.useEncode ? encodeURIComponent(options.data[key]) : options.data[key]);
            }
        } else {
            sendData = concateString(options.data);
        }
    }

    // build request
    xhr.open(options.method, options.action, options.async, options.user, options.password);

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (options.method !== 'GET' && !options.useFormData) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    for (key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
    }

    xhr.onloadend = function () {
        thisInstance.XMLHttpRequest = xhr;
        if (typeof callback === 'function') {
            callback.call(thisInstance, xhr.status, xhr.responseText, xhr);
        }
    };

    xhr.sendOptions = options;
    xhr.send(sendData);
    return xhr;
}; /**
    * Base HTTP Request
    *
    * .httpRequest( {method: 'GET', data: {}, headers: {}, action: '/index'}, function(status, data){}, thisInstance );
    *
    * @param config
    *      data:           data to send. Object, FormData (POST only), HTMLFormElement (POST only)
    *      action, url:    url address to
    *      method:         request method GET POST or custom methods, default 'GET'
    *      headers:        headers Object, key = value
    *      useEncode:      used url encoding, default TRUE. Boolean
    *      useFormData:    used FormData, default FALSE. Boolean
    *      async:          default TRUE. Boolean
    *      user:
    *      password:
    *
    * @param callback
    *      executing event - onloadend. function (status, responseText)
    *
    * @param thisInstance
    *      object 'this' for callback
    *
    * @returns {XMLHttpRequest}
    */
exports.default = httpRequest;

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

var _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _NamespaceApplication = __webpack_require__(/*! ./NamespaceApplication */ "./src/NamespaceApplication.js");

var _NamespaceApplication2 = _interopRequireDefault(_NamespaceApplication);

var _index = __webpack_require__(/*! ./cookie/index */ "./src/cookie/index.js");

var _index2 = _interopRequireDefault(_index);

var _datetime = __webpack_require__(/*! ./datetime */ "./src/datetime/index.js");

var _datetime2 = _interopRequireDefault(_datetime);

var _eventManager = __webpack_require__(/*! ./event-manager */ "./src/event-manager/index.js");

var _eventManager2 = _interopRequireDefault(_eventManager);

var _storage = __webpack_require__(/*! ./storage */ "./src/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _timer = __webpack_require__(/*! ./timer */ "./src/timer/index.js");

var _timer2 = _interopRequireDefault(_timer);

var _emmet = __webpack_require__(/*! ./emmet */ "./src/emmet/index.js");

var _emmet2 = _interopRequireDefault(_emmet);

var _httpRequest = __webpack_require__(/*! ./http-request */ "./src/http-request/index.js");

var _httpRequest2 = _interopRequireDefault(_httpRequest);

var _dom = __webpack_require__(/*! ./dom */ "./src/dom/index.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.NamespaceApplication = _NamespaceApplication2.default;
window.Util = _Util2.default;
window.Cookie = _index2.default;
window.Storage = _storage2.default;
window.Datetime = _datetime2.default;
window.EventManager = _eventManager2.default;
window.Timer = _timer2.default;
window.Emmet = _emmet2.default;
window.httpRequest = _httpRequest2.default;
window.Dom = _dom2.default;

exports.default = _NamespaceApplication2.default;

/***/ }),

/***/ "./src/static/attr.js":
/*!****************************!*\
  !*** ./src/static/attr.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attr = function attr(element, name, value) {
    var type_element = (0, _typeOf2.default)(element);
    if (type_element === 'string') {
        element = (0, _query2.default)(element);
    }

    if ((0, _isNode2.default)(element) && arguments.length === 2) {
        if ((0, _typeOf2.default)(name, 'object')) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
        } else return element.getAttribute(name);
    } else if ((0, _isNode2.default)(element) && arguments.length === 3) {
        if (value === false) element.removeAttribute(name);else element.setAttribute(name, value);
    }
};

exports.default = attr;

/***/ }),

/***/ "./src/static/copy.js":
/*!****************************!*\
  !*** ./src/static/copy.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _defined = __webpack_require__(/*! ./defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, addProperties) {
    var type = (0, _typeOf2.default)(src);

    if (type === 'object' && (0, _isNode2.default)(src)) {
        return src.cloneNode(!!addProperties);
    } else if (type === 'function') {
        return src.bind({});
    } else if (type === 'array' || type === 'object') {
        var _copy = JSON.parse(JSON.stringify(src));
        if ((0, _typeOf2.default)(addProperties, 'object') || (0, _typeOf2.default)(addProperties, 'array')) Object.keys(addProperties).forEach(function (key) {
            _copy[key] = addProperties[key];
        });
        return _copy;
    } else return (0, _defined2.default)(addProperties) ? src + addProperties : src;
};

exports.default = copy;

/***/ }),

/***/ "./src/static/createElement.js":
/*!*************************************!*\
  !*** ./src/static/createElement.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createElement = function createElement(tag, attrs, inner) {
    var element = document.createElement(tag),
        is_attr = function is_attr(src) {
        return (0, _typeOf2.default)(src, 'object') && !(0, _isNode2.default)(src);
    },
        insert_html = function insert_html(src) {
        element.insertAdjacentHTML('beforeend', src);
    },
        insert_child = function insert_child(src) {
        element.appendChild(src);
    },
        insert = function insert(src) {
        var type = (0, _typeOf2.default)(src);
        if (type === 'string') insert_html(src);else if (type === 'object' && (0, _isNode2.default)(src)) insert_child(src);else if (type === 'array') for (var i = 0; i < src.length; i++) {
            insert(src[i]);
        }
    };

    if (arguments.length === 2 && !is_attr(attrs)) {
        inner = attrs;
        attrs = false;
    }

    if (attrs) for (var k in attrs) {
        element.setAttribute(k, attrs[k]);
    }if (inner) insert(inner);

    return element;
};

exports.default = createElement;

/***/ }),

/***/ "./src/static/createFragment.js":
/*!**************************************!*\
  !*** ./src/static/createFragment.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var createFragment = function createFragment() {
    return document.createDocumentFragment();
};

exports.default = createFragment;

/***/ }),

/***/ "./src/static/css.js":
/*!***************************!*\
  !*** ./src/static/css.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = function css(selector, properties) {
    if (!selector || !properties) return;
    if (arguments.length === 3) {
        var prop = {};
        prop[properties] = arguments[2];
        return css(selector, prop);
    }

    var i = void 0,
        k = void 0,
        elements = null,
        typeSelector = (0, _typeOf2.default)(selector),
        typeProperties = (0, _typeOf2.default)(properties),
        parse = function parse(str) {
        var i = void 0,
            p1 = str.split(';'),
            p2 = void 0,
            pn = void 0,
            ix = void 0,
            o = {};
        for (i = 0; i < p1.length; i++) {
            p2 = p1[i].split(':');
            pn = p2[0].trim();
            ix = pn.indexOf('-');
            if (ix !== -1) pn = pn.substring(0, ix) + pn[ix + 1].toUpperCase() + pn.substring(ix + 2);
            if (p2.length === 2) o[pn] = p2[1].trim();
        }
        return o;
    };

    switch (typeSelector) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;

        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;

        case 'array':
            elements = selector;
            break;
    }

    if (elements) {

        if (typeProperties === 'string') properties = parse(properties);

        for (i in elements) {
            for (k in properties) {
                elements[i].style[k] = properties[k];
            }
        }
    }

    return elements;
};

exports.default = css;

/***/ }),

/***/ "./src/static/defined.js":
/*!*******************************!*\
  !*** ./src/static/defined.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var defined = function defined(value) {
    return value !== undefined;
};

exports.default = defined;

/***/ }),

/***/ "./src/static/domLoaded.js":
/*!*********************************!*\
  !*** ./src/static/domLoaded.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domLoaded = function domLoaded(callback) {
    var doc = (0, _getDocument2.default)();
    if (doc.querySelector('body')) callback.call();else doc.addEventListener('DOMContentLoaded', function () {
        callback.call();
    }, false);
};

exports.default = domLoaded;

/***/ }),

/***/ "./src/static/each.js":
/*!****************************!*\
  !*** ./src/static/each.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var each = function each(list, callback, tmp) {
    var i = 0;
    if (list instanceof Array) for (i = 0; i < list.length; i++) {
        callback.call({}, list[i], i, tmp);
    } else for (i in list) {
        callback.call({}, list[i], i, tmp);
    }
};

each.parent = function (selector, filter) {
    var loops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            return element;
        }
        element = getParent(element);
    }
};

each.filter = function (selector, filter, callback) {
    var loops = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            callback(element);
            return element;
        }
        element = getParent(element);
    }
    return element;
};

exports.default = each;

/***/ }),

/***/ "./src/static/empty.js":
/*!*****************************!*\
  !*** ./src/static/empty.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = function empty(src) {
    if ((0, _typeOf2.default)(src, 'object') || (0, _typeOf2.default)(src, 'array')) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) return false;
        }return true;
    } else if ((0, _typeOf2.default)(src, 'string')) {
        src = src.replace(/\s/g, '');
        return src === "" || src === "0";
    } else {
        return src === 0 || src === null || src === undefined || src === false || isNaN(src);
    }
};

exports.default = empty;

/***/ }),

/***/ "./src/static/findObject.js":
/*!**********************************!*\
  !*** ./src/static/findObject.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findObjects = __webpack_require__(/*! ./findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findObject = function findObject(values, attr, attrValue) {
    var tmp = (0, _findObjects2.default)(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

exports.default = findObject;

/***/ }),

/***/ "./src/static/findObjects.js":
/*!***********************************!*\
  !*** ./src/static/findObjects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var findObjects = function findObjects(values, attr, attrValue) {
    var i = void 0,
        tmp = [],
        list = values || [];
    for (i = 0; i < list.length; i++) {
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue) tmp.push(list[i]);
    }return tmp;
};

exports.default = findObjects;

/***/ }),

/***/ "./src/static/format.js":
/*!******************************!*\
  !*** ./src/static/format.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _defined = __webpack_require__(/*! ./defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _node2str = __webpack_require__(/*! ./node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formatting of string, or maybe template builder
 *
 * Examples:
 * .format("Hello {0}, your code is {1}!", ['Jade', 'Prefect']);
 * .format("Hello {name}, your code is {mean}!", {name:'Jade', mean: 'Prefect'});
 *
 * @param string    String
 * @param list  Array|Object
 * @returns string
 */
var format = function format(string, list) {
    var reg = void 0;
    if (Array.isArray(list)) reg = new RegExp(/{(\d+)}/g);else if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === 'object') reg = new RegExp(/{(\w+)}/g);

    return string.replace(reg, function (match, number) {
        if ((0, _defined2.default)(list[number]) && (0, _isNode2.default)(list[number])) list[number] = (0, _node2str2.default)(list[number]);

        return _typeof(list[number]) !== undefined ? list[number] : match;
    });
};

exports.default = format;

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

/***/ "./src/static/getLocation.js":
/*!***********************************!*\
  !*** ./src/static/getLocation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getLocation = function getLocation() {
    if (location) return location;else throw new Error('location object not exist!');
};

exports.default = getLocation;

/***/ }),

/***/ "./src/static/inject.js":
/*!******************************!*\
  !*** ./src/static/inject.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inject = function inject(selector, data, append, to) {
    if (typeof selector === 'string') selector = (0, _query2.default)(selector, to);

    if (!append) selector.textContent = '';

    if ((0, _isNode2.default)(selector)) {
        if ((0, _isNode2.default)(data)) {
            selector.appendChild(data);
        } else if ((0, _typeOf2.default)(data, 'array')) {
            var i = void 0;
            for (i = 0; i < data.length; i++) {
                inject(selector, data[i], true, to);
            }
        } else {
            selector.innerHTML = !append ? data : selector.innerHTML + data;
        }
        return selector;
    }
    return null;
};

exports.default = inject;

/***/ }),

/***/ "./src/static/isNode.js":
/*!******************************!*\
  !*** ./src/static/isNode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var isNode = function isNode(value) {
    return value && (value.nodeType === Node.TEXT_NODE || value.nodeType === Node.ELEMENT_NODE || value.nodeType === Node.DOCUMENT_FRAGMENT_NODE || value.nodeType === Node.DOCUMENT_NODE);
};

exports.default = isNode;

/***/ }),

/***/ "./src/static/loadCSS.js":
/*!*******************************!*\
  !*** ./src/static/loadCSS.js ***!
  \*******************************/
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

var loadCSS = function loadCSS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadCSS(src[i], onload, onerror);
        }
    } else {
        var doc = (0, _getDocument2.default)();
        var link = doc.createElement('link');
        var id = "src-" + Math.random().toString(32).slice(2);

        link.href = src.substr(-4) === '.css' ? src : src + '.css';
        link.rel = 'stylesheet';
        link.id = id;
        link.onload = onload;
        link.onerror = onerror;

        doc.head.appendChild(link);
        return link;
    }
};

exports.default = loadCSS;

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

/***/ "./src/static/merge.js":
/*!*****************************!*\
  !*** ./src/static/merge.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var merge = function merge(object1, object2) {
    for (var key in object2) {
        try {
            if (object2[key].constructor === Object) {
                object1[key] = merge(object1[key], object2[key]);
            } else {
                object1[key] = object2[key];
            }
        } catch (e) {
            object1[key] = object2[key];
        }
    }
    return object1;
};

exports.default = merge;

/***/ }),

/***/ "./src/static/node2str.js":
/*!********************************!*\
  !*** ./src/static/node2str.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var node2str = function node2str(element) {
    var container = document.createElement("div");
    container.appendChild(element.cloneNode(true));
    return container.innerHTML;
};

exports.default = node2str;

/***/ }),

/***/ "./src/static/on.js":
/*!**************************!*\
  !*** ./src/static/on.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on(selector, eventName, callback, bubble) {
    var i = void 0,
        elements = [];

    switch ((0, _typeOf2.default)(selector)) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;
        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;
        case 'array':
            elements = selector;
            break;
    }

    for (i = 0; i < elements.length; i++) {
        if (elements[i] && elements[i].addEventListener) elements[i].addEventListener(eventName, callback, !!bubble);
    }
};

exports.default = on;

/***/ }),

/***/ "./src/static/position.js":
/*!********************************!*\
  !*** ./src/static/position.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var position = function position(elem) {
    var data = { x: 0, y: 0, width: 0, height: 0 };

    if (typeof elem === 'string') elem = document.querySelector(elem);

    if (elem === undefined || elem === window || elem === document) {
        data.width = window.innerWidth;
        data.height = window.innerHeight;
        data.element = window;
    } else if (elem && elem.nodeType === Node.ELEMENT_NODE) {
        if (elem.getBoundingClientRect) {
            var rect = elem.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                clientTop = document.documentElement.clientTop || document.body.clientTop || 0,
                clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

            data.y = Math.round(rect.top + scrollTop - clientTop);
            data.x = Math.round(rect.left + scrollLeft - clientLeft);
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        } else {
            var top = 0,
                left = 0;
            while (elem) {
                top += parseInt(elem.offsetTop, 10);
                left += parseInt(elem.offsetLeft, 10);
                elem = elem.offsetParent;
            }
            data.y = top;
            data.x = left;
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        }
        data.element = elem;
    }
    return data;
};

exports.default = position;

/***/ }),

/***/ "./src/static/positionMouse.js":
/*!*************************************!*\
  !*** ./src/static/positionMouse.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var positionMouse = function positionMouse(event) {
    if (!(event instanceof MouseEvent)) {
        console.error('Error: argument is not type the MouseEvent!');
        return;
    }
    var rect = document.body.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

exports.default = positionMouse;

/***/ }),

/***/ "./src/static/query.js":
/*!*****************************!*\
  !*** ./src/static/query.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param selector
 * @param fromCallback
 * @param thisInstance
 * @returns {Node|boolean}
 */
var query = function query(selector, fromCallback, thisInstance) {
  var elements = (0, _queryAll2.default)(selector, fromCallback, thisInstance);
  return elements && elements[0] ? elements[0] : false;
};

exports.default = query;

/***/ }),

/***/ "./src/static/queryAll.js":
/*!********************************!*\
  !*** ./src/static/queryAll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doc = (0, _getDocument2.default)();

var queryAll = function queryAll(selector, fromCallback, thisInstance) {
    var type = (0, _typeOf2.default)(fromCallback),
        from = doc || document,
        elements = [],
        callback = null;

    if ((0, _isNode2.default)(selector)) return [selector];

    if (type === "function") callback = fromCallback;else if (type === "string") from = doc.querySelector(fromCallback);else if (type === "object" && (0, _isNode2.default)(fromCallback)) from = fromCallback;

    if (from) elements = [].slice.call(from.querySelectorAll(selector));

    if (callback) callback.call(thisInstance || {}, elements);

    return elements;
};

exports.default = queryAll;

/***/ }),

/***/ "./src/static/redirect.js":
/*!********************************!*\
  !*** ./src/static/redirect.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirect = function redirect(to) {
    var loc = (0, _getLocation2.default)();
    var doc = (0, _getDocument2.default)();
    loc.href = to || doc.href;
};

exports.default = redirect;

/***/ }),

/***/ "./src/static/search.js":
/*!******************************!*\
  !*** ./src/static/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = function search(selector, attr, from) {
    from = (0, _isNode2.default)(from) ? from : (0, _query2.default)(from);
    var i = 0,
        key = void 0,
        elements = {},
        queryElements = (0, _queryAll2.default)(selector, from || document.body);

    if (queryElements) {
        while (i < queryElements.length) {
            if (!attr) elements[i] = queryElements[i];else {
                if (queryElements[i].hasAttribute(attr)) {
                    key = queryElements[i].getAttribute(attr);
                    elements[key] = queryElements[i];
                }
            }
            i++;
        }
    }
    return elements;
};

exports.default = search;

/***/ }),

/***/ "./src/static/str2node.js":
/*!********************************!*\
  !*** ./src/static/str2node.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var str2node = function str2node(string) {
    var i = void 0,
        fragment = document.createDocumentFragment(),
        container = document.createElement("div");
    container.innerHTML = string;

    while (i = container.firstChild) {
        fragment.appendChild(i);
    }return fragment.childNodes.length === 1 ? fragment.firstChild : fragment;
};

exports.default = str2node;

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

/***/ }),

/***/ "./src/static/uri.js":
/*!***************************!*\
  !*** ./src/static/uri.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uri = function uri(_uri) {
    var loc = (0, _getLocation2.default)();
    _uri = _uri || loc.pathname;
    _uri = _uri.replace(/\/+/ig, '/');
    return _uri.length > 1 && _uri.slice(0, 1) !== '/' ? '/' + _uri : _uri;
};

exports.default = uri;

/***/ }),

/***/ "./src/storage/index.js":
/*!******************************!*\
  !*** ./src/storage/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
 * Add item by name
 * @param name
 * @param value
 * @param json
 */
var set = function set(name, value) {
    var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (json) try {
        value = JSON.stringify(value);
    } catch (error) {}
    return window.localStorage.setItem(name, value);
};

/**
 * Get item by name
 * @param name
 * @param json
 */
var get = function get(name) {
    var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var value = window.localStorage.getItem(name);
    if (json && value) try {
        value = JSON.parse(value);
    } catch (error) {}
    return value;
};

/**true
 * Remove item by name
 * @param name
 */
var remove = function remove(name) {
    return window.localStorage.removeItem(name);
};

/**
 * Get item by index
 * @param index
 * @returns {string}
 */
var key = function key(index) {
    return window.localStorage.key(index);
};

/**
 * When invoked, will empty all keys out of the storage.
 */
var clear = function clear() {
    return window.localStorage.clear();
};

/**
 * Returns an integer representing the number of data items stored in the Storage object.
 * @returns {number}
 */
var length = function length() {
    return window.localStorage.length;
};

/**
 * LocalStorage wrapper
 *
 * @param name
 * @param value
 * @returns {{set: (Storage.set|*), get: (Storage.get|*), key: (Storage.key|*), clear: (Storage.clear|*), remove: (Storage.remove|*), length: (Storage.length|*)}}
 * @constructor
 */
var Storage = function Storage(name, value) {
    switch (arguments.length) {
        case 0:
            return {
                set: set,
                get: get,
                key: key,
                clear: clear,
                remove: remove,
                length: length
            };
        case 1:
            return get(name);
        case 2:
            return set(name, value);
    }
};

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = Storage;

/***/ }),

/***/ "./src/timer/index.js":
/*!****************************!*\
  !*** ./src/timer/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Simple timer realise. Return self-instance
 * timer = new .Timer(function(iterator, repeat){}, 1000, 5)
 *  Instance methods
 *      timer.repeat
 *      timer.iterator
 *      timer.start ()
 *      timer.stop ()
 *      timer.pause ()
 *      timer.reset ()
 *      timer.clear ()
 *  Static methods
 *      Timer.timeout (callback, ms, thisInst) : timeoutId
 *      Timer.interval (callback, ms, thisInst) : intervalId
 *      Timer.timeoutStop (timeoutId)
 *      Timer.intervalStop (intervalId)
 * @param callback
 * @param delay
 * @param repeat
 * @param thisInstance  if not set, uses instance of Timer
 * @returns {Window.Timer|Timer}
 * @constructor
 */
var Timer = function Timer(callback, delay, repeat, thisInstance) {
    if (!(this instanceof Timer)) return new Timer(callback, delay, repeat, thisInstance);

    delay = delay !== undefined ? parseInt(delay) : 500;
    repeat = repeat !== undefined ? parseInt(repeat) : 0;
    var config = { self: this, callback: callback, delay: delay, repeat: repeat };

    var ht = null;
    var hc = function hc() {
        config.self.iterator++;
        if (config.repeat !== 0 && config.repeat <= config.self.iterator) config.self.stop();
        config.callback.call(thisInstance || this, config.self.iterator, config.repeat);
    };

    this.repeat = repeat;
    this.iterator = 0;
    this.start = function () {
        if (config.repeat === 0 || config.repeat > config.self.iterator) ht = setInterval(hc, config.delay);
    };
    this.stop = function () {
        this.iterator = config.repeat;
        this.clear();
    };
    this.pause = function () {
        this.clear();
    };
    this.reset = function () {
        this.iterator = 0;
    };
    this.clear = function () {
        clearInterval(ht);
    };
};

Timer.timeout = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setTimeout(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.interval = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setInterval(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.timeoutStop = function (id) {
    clearTimeout(id);
};
Timer.intervalStop = function (id) {
    clearInterval(id);
};

exports.default = Timer;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldERvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hbWVzcGFjZUFwcGxpY2F0aW9uIiwiY29uZmlnIiwiaW5zdGFuY2UiLCJrZXkiLCJjb25maWd1cmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJ1cmwiLCJtb2RlIiwiZGVidWciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsInJlZ2lzdGVyIiwiZXh0ZW5zaW9uIiwiZGVwZW5kZW5jeSIsInJvdXRlIiwic3RhdGUiLCJVdGlsIiwiYXR0ciIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVGcmFnbWVudCIsImNzcyIsImRvbUxvYWRlZCIsImluamVjdCIsInN0cjJub2RlIiwibm9kZTJzdHIiLCJxdWVyeSIsInNlYXJjaCIsImRlZmluZWQiLCJlYWNoIiwiZW1wdHkiLCJmaW5kT2JqZWN0IiwiZmluZE9iamVjdHMiLCJmb3JtYXQiLCJpc05vZGUiLCJsb2FkQ1NTIiwibG9hZEpTIiwibWVyZ2UiLCJvbiIsInBvc2l0aW9uIiwicG9zaXRpb25Nb3VzZSIsInJlZGlyZWN0IiwidHlwZU9mIiwidHlwZU9mU3RyaWN0IiwidXJpIiwiY29weSIsIkNvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNldCIsImdldCIsImNsZWFyIiwicmVtb3ZlIiwib3B0aW9ucyIsInR5cGVKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsImV4cGlyZXMiLCJEYXRlIiwidG9VVENTdHJpbmciLCJkYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJwYXJzZUludCIsImVuY29kZSIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2hlcyIsIm1hdGNoIiwiUmVnRXhwIiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRhdGFKc29uIiwicGFyc2UiLCJvcHRpb24iLCJzdHIiLCJkZWNvZGUiLCJjb29raWVzIiwic3BsaXQiLCJwYXJ0cyIsInRyaW0iLCJsaXN0IiwiY29tcCIsImNyZWF0ZSIsImluaXQiLCJpbml0aWFsaXplZCIsImNvbXBsZXRlIiwiY29tcGxldGVkIiwiY2FsbCIsInRlbXBsYXRlIiwib3ZlcnJpZGUiLCJjb250ZXh0IiwiZm9yY2UiLCJzb3VyY2VzIiwianMiLCJlbGVtZW50cyIsImxvYWQiLCJtYXgiLCJzcmNzIiwiaSIsInNyYyIsInB1c2giLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNhbGxiYWNrIiwic291cmNlIiwiY3JlYXRlU291cmNlIiwic291cmNlZGF0YSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRDYXNlIiwiUHJveHkiLCJvYmoiLCJwcm9wIiwiRGF0ZXRpbWUiLCJNU19JTl9EQVkiLCJNU19JTl9IT1VSIiwiTVNfSU5fTUlOIiwidGltZSIsImFkZERheXMiLCJkYXkiLCJkYXRlU3RhcnQiLCJiZXR3ZWVuRGF0ZXMiLCJkYXRlRnJvbSIsImRhdGVUbyIsImRpZmZNcyIsImRpZmZEYXlzIiwiTWF0aCIsInJvdW5kIiwiZGlmZkhycyIsImRpZmZNaW4iLCJob3VyIiwibWludXRlIiwic3RyVG9EYXRlIiwidXRjIiwidGVtcCIsIm1hc2siLCJ0b0xvd2VyQ2FzZSIsIlVUQyIsIkRvbSIsInNlbGVjdG9yIiwiXyIsInNlbGVjdGVkIiwiX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUiLCJtYXAiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwib25lIiwiYWxsIiwiYXBwZW5kIiwidG8iLCJmcm9tIiwicGFyZW50Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJldmVudE5hbWUiLCJidWJibGUiLCJsb2FkZWQiLCJxdWVyeUFsbCIsImZyYWdtZW50IiwiRW1tZXQiLCJ0ZW1wSW5uZXJUZXh0cyIsInRlbXBFc2NhcGVkIiwicmUiLCJleGNsdWRlcyIsImNsYXNzZXMiLCJ0YWciLCJpbmRleGVzIiwiZXNjYXBlIiwiaW5uZXJUZXh0IiwiYXR0cnMiLCJlbW1ldCIsInRleHQiLCJodG1sT25seSIsInRyZWUiLCJjdXJyZW50IiwibGFzdEVsZW1lbnQiLCJjb21tYW5kVGV4dCIsImNvbnZlcnRDb2xsZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwicmVzdWx0IiwiZnVsbCIsInF1b3RlcyIsImVsZW1lbnRUZXh0Iiwic3BsaXR0ZXIiLCJjaGlsZHJlbiIsImlubmVySFRNTCIsIkhUTUxDb2xsZWN0aW9uIiwibWF0Y2hfdGFnIiwibWF0Y2hfaWQiLCJtYXRjaF9jbGFzc2VzIiwibWF0Y2hfYXR0cnMiLCJtYXRjaF9pbm5lclRleHQiLCJwb3AiLCJjbGFzc05hbWUiLCJzbGljZSIsImpvaW4iLCJ1bmVzY2FwZSIsInNoaWZ0IiwiY2h1bmtQYXJhbSIsImNodW5rIiwiYXR0clBhcmFtIiwic2V0QXR0cmlidXRlIiwiRXZlbnRNYW5hZ2VyIiwiZXZlbnRGcmFnbWVudCIsInZlcnNpb24iLCJldmVudHNUeXBlIiwiYWRkRXZlbnQiLCJkZXRhaWxzIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidHlwZSIsImxpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiaHR0cFJlcXVlc3QiLCJ0aGlzSW5zdGFuY2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImhyZWYiLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsInBhcmFtcyIsInNlbmREYXRhIiwiaW5kZXhPZiIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJ3aW5kb3ciLCJTdG9yYWdlIiwiVGltZXIiLCJ0eXBlX2VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRQcm9wZXJ0aWVzIiwiY2xvbmVOb2RlIiwiYmluZCIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsInByb3BlcnRpZXMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsInN1YnN0cmluZyIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJ0bXAiLCJBcnJheSIsImZpbHRlciIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZWxlbSIsImlzTmFOIiwidmFsdWVzIiwiYXR0clZhbHVlIiwic3RyaW5nIiwicmVnIiwiaXNBcnJheSIsIm51bWJlciIsImdldERvY3VtZW50IiwiRXJyb3IiLCJnZXRMb2NhdGlvbiIsInRleHRDb250ZW50Iiwibm9kZVR5cGUiLCJOb2RlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJvbmxvYWQiLCJvbmVycm9yIiwibGluayIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwicmVsIiwiaGVhZCIsInNjcmlwdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29uc3RydWN0b3IiLCJlIiwiY29udGFpbmVyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJjb25zb2xlIiwiY2xpZW50WCIsImNsaWVudFkiLCJmcm9tQ2FsbGJhY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJjaGlsZE5vZGVzIiwic2ltcGxlVHlwZXMiLCJ0IiwicHJvdG90eXBlIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4IiwiZGVsYXkiLCJyZXBlYXQiLCJzZWxmIiwiaHQiLCJoYyIsIml0ZXJhdG9yIiwic3RvcCIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJwYXVzZSIsInJlc2V0IiwiY2xlYXJJbnRlcnZhbCIsInRpbWVvdXQiLCJtcyIsInRoaXNJbnN0Iiwic2V0VGltZW91dCIsImludGVydmFsIiwidGltZW91dFN0b3AiLCJjbGVhclRpbWVvdXQiLCJpbnRlcnZhbFN0b3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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LFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBcEIsR0FBK0JBLFFBQS9CLEdBQTBDLEVBQXJEO0FBQ0EsZUFBT04sWUFBWSxZQUFZO0FBQzNCcFEscUJBQVNuQixJQUFULENBQWM2UixRQUFkO0FBQ0gsU0FGTSxFQUVKRCxFQUZJLENBQVA7QUFHSDtBQUNKLENBUEQ7QUFRQXRILE1BQU0wSCxXQUFOLEdBQW9CLFVBQVUxWCxFQUFWLEVBQWM7QUFDOUIyWCxpQkFBYTNYLEVBQWI7QUFDSCxDQUZEO0FBR0FnUSxNQUFNNEgsWUFBTixHQUFxQixVQUFVNVgsRUFBVixFQUFjO0FBQy9Cb1gsa0JBQWNwWCxFQUFkO0FBQ0gsQ0FGRDs7a0JBS2VnUSxLIiwiZmlsZSI6Im5hLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudFwiO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tIFwiLi9jb3JlL2V4dGVuc2lvblwiO1xuaW1wb3J0IGRlcGVuZGVuY3kgZnJvbSBcIi4vY29yZS9kZXBlbmRlbmN5XCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vY29yZS9yb3V0ZVwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuL2NvcmUvc3RhdGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL3N0YXRpYy9kZWZpbmVkXCI7XG5cbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uXG57XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGlmIChOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IChrZXkpID0+IHRoaXMuY29uZmlndXJhdGlvbltrZXldO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWJ1ZzogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uO1xuICAgICAgICB0aGlzLmV4dGVuc2lvbi5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxufVxuXG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGVtcHR5IGZyb20gXCIuL3N0YXRpYy9lbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgVXRpbCA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgbm9kZTJzdHIsXG4gICAgcXVlcnksXG4gICAgc2VhcmNoLFxuICAgIGRlZmluZWQsXG4gICAgZWFjaCxcbiAgICBlbXB0eSxcbiAgICBmaW5kT2JqZWN0LFxuICAgIGZpbmRPYmplY3RzLFxuICAgIGZvcm1hdCxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbWVyZ2UsXG4gICAgb24sXG4gICAgcG9zaXRpb24sXG4gICAgcG9zaXRpb25Nb3VzZSxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiIsIlxuXG4vKipcbiAqIExvY2FsU3RvcmFnZSB3cmFwcGVyXG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIG9wdGlvblxuICogQHJldHVybnMge3tzZXQ6IChTdG9yYWdlLnNldHwqKSwgZ2V0OiAoU3RvcmFnZS5nZXR8KiksIGtleTogKFN0b3JhZ2Uua2V5fCopLCBjbGVhcjogKFN0b3JhZ2UuY2xlYXJ8KiksIHJlbW92ZTogKFN0b3JhZ2UucmVtb3ZlfCopLCBsZW5ndGg6IChTdG9yYWdlLmxlbmd0aHwqKX19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29va2llID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0OiBzZXQsXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXQgQ29va2llIGtleSwgdmFsdWVcbiAqICBleHBpcmVzIC0gbXMsIERhdGUsIC0xLCAwXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0ge3t9fSBvcHRpb25zICAge2V4cGlyZXM6IDAsIHBhdGg6ICcvJywgZG9tYWluOiAnc2l0ZS5jb20nLCBzZWN1cmU6IGZhbHNlfVxuICogQHBhcmFtIHR5cGVKc29uIGJvb2xcbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zLCB0eXBlSnNvbiA9IHRydWUpXG57XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblxuICAgIGlmIChDb29raWUudHlwZUpzb24pIHt9XG4gICAgaWYgKHR5cGVKc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgbGV0IGRhdGEgPSBuYW1lICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlcykge1xuICAgICAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIHBhcnNlSW50KG9wdGlvbnMuZXhwaXJlcykgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgKz0gZW5jb2RlKG9wdGlvbnMpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGRhdGE7XG59O1xuXG4vKipcbiAqIEdldCBDb29raWUgdmFsdWUgYnkga2V5XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHR5cGVKc29uIGJvb2xcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZUpzb24gPSB0cnVlKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcbiAgICApKTtcblxuICAgIGxldCBkYXRhID0gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcblxuXG4gICAgaWYgKENvb2tpZS5kYXRhSnNvbikge31cbiAgICBpZiAodHlwZUpzb24gJiYgZGF0YSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cblxuICAgIHJldHVybiBkYXRhXG59O1xuXG4vKipcbiAqIFJlbW92ZSBDb29raWUgYnkga2V5XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIG9wdGlvblxuICovXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHtleHBpcmVzOiAtMX07XG4gICAgc2V0KG5hbWUsIFwiXCIsIG9wdGlvbik7XG59O1xuXG5jb25zdCBjbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSAnJztcbn07XG5cbi8qKlxuICogQ29udmVydCBvYmplY3QgdG8gdXJpIGdldCBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgICBleGFtcGxlOiB7ZXhwaXJlczogMCwgcGF0aDogJy8nLCBkb21haW46ICdteS1zaXRlLmNvbScsIHNlY3VyZTogZmFsc2V9XG4gKiBAcmV0dXJucyB7c3RyaW5nfSAgICAgICAgZXhhbXBsZTogXCJleHBpcmVzPTA7cGF0aD0vO2RvbWFpbj1zaXRlLmNvbTtzZWN1cmU9ZmFsc2VcIjtcbiAqL1xuY29uc3QgZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gKHN0ciA/ICc7JyA6ICcnKSArIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59O1xuXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcbiAgICAgICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuICAgICAgICApKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9LFxuICAgICAgICAgICAgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKTtcblxuICAgICAgICBjb29raWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gdmFsdWUudHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgZGF0YVtwYXJ0c1swXS50cmltKCldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59O1xuXG5Db29raWUuc2V0ID0gc2V0O1xuQ29va2llLmdldCA9IGdldDtcbkNvb2tpZS5yZW1vdmUgPSByZW1vdmU7XG5Db29raWUuY2xlYXIgPSBjbGVhcjtcbkNvb2tpZS5lbmNvZGUgPSBlbmNvZGU7XG5Db29raWUuZGVjb2RlID0gZGVjb2RlO1xuQ29va2llLmRhdGFKc29uID0gdHJ1ZTtcblxuZXhwb3J0IHtcbiAgICBzZXQsXG4gICAgZ2V0LFxuICAgIGNsZWFyLFxuICAgIHJlbW92ZSxcbiAgICBlbmNvZGUsXG4gICAgZGVjb2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBjb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCAmJiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pe1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICB9XG59O1xuXG5jb21wb25lbnQucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpXG57XG4gICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50Lmxpc3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5saXN0W2tleV07XG4gICAgICAgICAgICBpZiAoY29tcC5jb21wbGV0ZSAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29tcG9uZW50Lmxpc3QgPSB7fTtcblxuY29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29udGV4dDogZmFsc2UsXG4gICAgfSwgY29uZmlnKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iLCJpbXBvcnQgbG9hZEpTIGZyb20gJy4uL3N0YXRpYy9sb2FkSlMnO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGRlcGVuZGVuY3kgPSBmdW5jdGlvbiAoY29uZmlnLCBmb3JjZSA9IHRydWUpXG57XG4gICAgY29uc3Qgc291cmNlcyA9IG1lcmdlKHtcbiAgICAgICAgY3NzOiBbXSxcbiAgICAgICAganM6IFtdLFxuICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSwgY29uZmlnKTtcblxuICAgIGlmIChmb3JjZSlcbiAgICAgICAgZGVwZW5kZW5jeS5sb2FkKHNvdXJjZXMpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG59O1xuXG5kZXBlbmRlbmN5LmxvYWQgPSAoc291cmNlcykgPT4ge1xuICAgIGNvbnN0IG1heCA9XG4gICAgICAgIChzb3VyY2VzLmNzcyA/IHNvdXJjZXMuY3NzLmxlbmd0aCA6IDApICtcbiAgICAgICAgKHNvdXJjZXMuanMgPyBzb3VyY2VzLmpzLmxlbmd0aCA6IDApO1xuICAgIGNvbnN0IHNyY3MgPSBtZXJnZSh7Y3NzOiBzb3VyY2VzLmNzc30se2pzOiBzb3VyY2VzLmpzfSk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWQgPSBrZXkgPT09ICdjc3MnID8gbG9hZENTUyA6IGxvYWRKUztcbiAgICAgICAgc3Jjc1trZXldLmZvckVhY2goKHNyYykgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZXMuZWxlbWVudHMucHVzaChsb2FkKHNyYywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlcy5jb21wbGV0ZShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB9LCBzb3VyY2VzLmVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZGVwZW5kZW5jeS5yZW1vdmUgPSBmdW5jdGlvbiAoc291cmNlcylcbntcbiAgICBjb25zdCBlbGVtZW50cyA9IHNvdXJjZXMgJiYgc291cmNlcy5lbGVtZW50cyA/IHNvdXJjZXMuZWxlbWVudHMgOiBbXTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHNvdXJjZXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5O1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBleHRlbnNpb24gPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uLmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmNyZWF0ZShjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKXtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbnNpb24ubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGV4dGVuc2lvbi5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24ubGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5saXN0ID0ge307XG5cbmV4dGVuc2lvbi5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGZhbHNlLFxuICAgIH0sIGNvbmZpZylcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9uO1xuIiwiXG5jb25zdCByb3V0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbXBvbmVudCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdXJsKSB7XG4gICAgICAgIHRoaXNbY29tcG9uZW50XSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlOyIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi4vc3RhdGljL3R5cGVPZic7XG5cblxuY29uc3Qgc3RhdGUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/IHN0YXRlLmdldChrZXkpIDogc3RhdGUuc2V0KGtleSwgZGF0YSk7XG59O1xuXG5zdGF0ZS5jYWxsYmFjayA9IHt9O1xuc3RhdGUuc291cmNlID0gY3JlYXRlU291cmNlKCk7XG5zdGF0ZS5zb3VyY2VkYXRhID0ge307XG5zdGF0ZS5hY3Rpb24gPSBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgIHN0YXRlLmNhbGxiYWNrW2tleV0gPSBjYWxsYmFjaztcbn07XG5cbnN0YXRlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdHlwZU9mKGtleSwgJ3N0cmluZycpXG4gICAgICAgID8gc3RhdGUuc291cmNlZGF0YVtrZXldIHx8IHN0YXRlLnNvdXJjZVtrZXldXG4gICAgICAgIDoga2V5ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBzdGF0ZS5zb3VyY2VkYXRhIDtcbn07XG5cbnN0YXRlLnNldCA9IGZ1bmN0aW9uIChrZXksIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZXRDYXNlKHtba2V5XTogcGF5bG9hZH0pO1xufTtcblxuc3RhdGUuc2V0Q2FzZSA9IGZ1bmN0aW9uIChwYXlsb2FkID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc3RhdGUuc291cmNlW2tleV0gPSBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gPSBwYXlsb2FkW2tleV07XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2UgKHBheWxvYWQgPSB7fSkge1xuICAgIHN0YXRlLnNvdXJjZWRhdGEgPSBwYXlsb2FkO1xuICAgIHJldHVybiBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQ6IChvYmosIHByb3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDoob2JqLCBwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNhbGxiYWNrW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2FsbGJhY2tbcHJvcF0uY2FsbCh7fSwgc3RhdGUuc291cmNlLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xuIiwiY29uc3QgRGF0ZXRpbWUgPSB7fTtcbkRhdGV0aW1lLk1TX0lOX0RBWSA9IDg2NGU1O1xuRGF0ZXRpbWUuTVNfSU5fSE9VUiA9IDM2ZTU7XG5EYXRldGltZS5NU19JTl9NSU4gPSA2ZTQ7XG5cbi8qKlxuICogUmV0dXJuIHRpbWVzdGFtcFxuICogQHBhcmFtIGRhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbkRhdGV0aW1lLnRpbWUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGUuZ2V0VGltZSgpIDogKG5ldyBEYXRlKS5nZXRUaW1lKClcbn07XG5cbi8qKlxuICogQWRkIGRheXMgdG8gc29tZSBkYXRlXG4gKiBAcGFyYW0gZGF5ICAgICAgICAgICBudW1iZXIgb2YgZGF5cy4gMC4wNCAtIDEgaG91ciwgMC41IC0gMTIgaG91ciwgMSAtIDEgZGF5XG4gKiBAcGFyYW0gZGF0ZVN0YXJ0ICAgICB0eXBlIERhdGUsIHN0YXJ0IGRhdGVcbiAqIEByZXR1cm5zIHsqfSAgdHlwZSBEYXRlXG4gKi9cbkRhdGV0aW1lLmFkZERheXMgPSBmdW5jdGlvbiAoZGF5LCBkYXRlU3RhcnQpIHtcbiAgICBjb25zdCBkYXRlID0gZGF0ZVN0YXJ0ID8gbmV3IERhdGUoZGF0ZVN0YXJ0KSA6IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheSAqIDg2NDAwMDAwKSk7XG4gICAgcmV0dXJuIGRhdGU7XG59O1xuXG4vKipcbiAqIFRpbWUgYmV0d2VlbiBEYXRlc1xuICogPHByZT5cbiAqICAgICB2YXIgZnJvbSA9IG5ldyBEYXRlKCcyMDE2LTA4LTAxIDIwOjMwJyk7XG4gKiAgICAgdmFyIHRvID0gbmV3IERhdGUoJzIwMTYtMDgtMTAgMDc6NTUnKTtcbiAqICAgICAuRGF0ZS5iZXR3ZWVuRGF0ZXMoZnJvbSwgdG8pOyAvLyBPYmplY3QgeyBkYXk6IDgsIGhvdXI6IDExLCBtaW51dGU6IDI1IH1cbiAqIDwvcHJlPlxuICogQHBhcmFtIGRhdGVGcm9tXG4gKiBAcGFyYW0gZGF0ZVRvXG4gKiBAcmV0dXJucyB7e2RheTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyfX1cbiAqL1xuRGF0ZXRpbWUuYmV0d2VlbkRhdGVzID0gZnVuY3Rpb24gKGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgICBkYXRlRnJvbSA9IGRhdGVGcm9tIHx8IG5ldyBEYXRlKCk7XG4gICAgZGF0ZVRvID0gZGF0ZVRvIHx8IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRpZmZNcyA9IChkYXRlVG8gLSBkYXRlRnJvbSksXG4gICAgICAgIGRpZmZEYXlzID0gTWF0aC5yb3VuZChkaWZmTXMgLyA4NjRlNSksXG4gICAgICAgIGRpZmZIcnMgPSBNYXRoLnJvdW5kKChkaWZmTXMgJSA4NjRlNSkgLyAzNmU1KSxcbiAgICAgICAgZGlmZk1pbiA9IE1hdGgucm91bmQoKChkaWZmTXMgJSA4NjRlNSkgJSAzNmU1KSAvIDZlNCk7XG4gICAgcmV0dXJuIHtkYXk6IGRpZmZEYXlzLCBob3VyOiBkaWZmSHJzLCBtaW51dGU6IGRpZmZNaW59O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGRhdGUgc3RyaW5nIHRvIERhdGUgT2JqZWN0XG4gKiB5eSAtIHRoZSB5ZWFyIGFzIGEgdHdvLWRpZ2l0IG51bWJlciAoIDAwIHRvIDk5ICk7XG4gKiBZWSAtIHRoZSB5ZWFyIGFzIGEgZm91ci1kaWdpdCBudW1iZXIgKCAxOTAwLTk5OTkgKTtcbiAqIG1tIC0gdGhlIG1vbnRoIGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMSB0byAxMiApICggMSB0byAxMiApO1xuICogZGQgLSB0aGUgZGF5IGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMSB0byAzMSApICggMSB0byAzMSApO1xuICogaGggSEggLSB0aGUgaG91ciAoIDAwIHRvIDExICkgKCAwMCB0byAyMyApICggMSB0byAxMiApICggMCB0byAyMyApO1xuICogaWkgLSB0aGUgbWludXRlIGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMCB0byA1OSApO1xuICogc3MgLSB0aGUgc2Vjb25kIGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMCB0byA1OSApO1xuICogYWEgLSBkaXNwbGF5cyBhbSAoZm9yIHRpbWVzIGZyb20gbWlkbmlnaHQgdW50aWwgbm9vbikgYW5kIHBtIChmb3IgdGltZXMgZnJvbSBub29uIHVudGlsIG1pZG5pZ2h0KTtcbiAqXG4gKiAuc3RyVG9EYXRlKCcxMi4wNS4yMDE3IDEyOjMwOjI1JywgJ21tLmRkLllZIEhIOmlpOnNzJylcbiAqIC5zdHJUb0RhdGUoJzEyLzA1LzIwMTcnLCAnbW0vZGQvWVknKVxuICogLnN0clRvRGF0ZSgnMTIvNS8yMDE3JywgJ21tL2RkL1lZJywgdHJ1ZSlcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0XG4gKiBAcGFyYW0gdXRjXG4gKiBAcmV0dXJucyB7RGF0ZX1cbiAqL1xuRGF0ZXRpbWUuc3RyVG9EYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCwgdXRjKSB7XG4gICAgY29uc3Qgc2V0ID0gWzAsIDAsIDEsIDAsIDAsIDBdO1xuICAgIGNvbnN0IHRlbXAgPSBkYXRlLm1hdGNoKC9bYS16QS1aXSt8WzAtOV0rL2cpO1xuICAgIGNvbnN0IG1hc2sgPSBmb3JtYXQubWF0Y2goL1thLXpBLVpdezJ9L2cpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKG1hc2tbaV0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgICAgIHNldFsyXSA9IHRlbXBbaV0gfHwgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgICAgICAgIHNldFsxXSA9ICh0ZW1wW2ldIHx8IDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgICAgIHNldFswXSA9IHRlbXBbaV0gKiAxICsgKHRlbXBbaV0gPiA1MCA/IDE5MDAgOiAyMDAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICAgICAgc2V0WzNdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgICAgICAgICAgc2V0WzRdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIllZXCI6XG4gICAgICAgICAgICAgICAgc2V0WzBdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgICAgICAgICAgc2V0WzNdID0gc2V0WzNdICUgMTIgKyAoKHRlbXBbaV0gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdhbScgPyAwIDogMTIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgICAgICAgc2V0WzVdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodXRjKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhzZXRbMF0sIHNldFsxXSwgc2V0WzJdLCBzZXRbM10sIHNldFs0XSwgc2V0WzVdKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShzZXRbMF0sIHNldFsxXSwgc2V0WzJdLCBzZXRbM10sIHNldFs0XSwgc2V0WzVdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGV0aW1lO1xuXG4vKlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIE1TX0lOX0RBWTogRGF0ZXRpbWUuTVNfSU5fREFZLFxuICAgIE1TX0lOX0hPVVI6IERhdGV0aW1lLk1TX0lOX0hPVVIsXG4gICAgTVNfSU5fTUlOOiBEYXRldGltZS5NU19JTl9NSU4sXG4gICAgdGltZTogRGF0ZXRpbWUudGltZSxcbiAgICBhZGREYXlzOiBEYXRldGltZS5hZGREYXlzLFxuICAgIGJldHdlZW5EYXRlczogRGF0ZXRpbWUuYmV0d2VlbkRhdGVzLFxuICAgIHN0clRvRGF0ZTogRGF0ZXRpbWUuc3RyVG9EYXRlLFxufTtcbiovXG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5cbmltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcblxuZnVuY3Rpb24gRG9tIChzZWxlY3Rvcikge1xuICAgIGNvbnN0IF8gPSB7XG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgc2VsZWN0ZWQ6IHF1ZXJ5QWxsKHNlbGVjdG9yKSxcbiAgICB9O1xuXG4gICAgY29uc3QgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3JjLnN0eWxlLmRpc3BsYXkgPyBzcmMuc3R5bGUuZGlzcGxheSA6IGdldENvbXB1dGVkU3R5bGUoc3JjKS5kaXNwbGF5O1xuICAgICAgICAgICAgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA9ICghc3R5bGUgfHwgc3R5bGUgPT09ICdub25lJykgPyAnYmxvY2snIDogc3R5bGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgXy5vbmUgPSAoKSA9PiBfLnNlbGVjdGVkICYmIF8uc2VsZWN0ZWQubGVuZ3RoID8gXy5zZWxlY3RlZFswXSA6IGZhbHNlO1xuICAgIF8uYWxsID0gKCkgPT4gXy5zZWxlY3RlZDtcbiAgICBfLmF0dHIgPSAobmFtZSwgdmFsdWUpID0+IGRlZmluZWQodmFsdWUpID8gYXR0cihfLm9uZSgpLCBuYW1lLCB2YWx1ZSkgOiBhdHRyKF8ub25lKCksIG5hbWUpO1xuICAgIF8uaW5qZWN0ID0gKGRhdGEsIGFwcGVuZCwgdG8pID0+IGluamVjdChfLm9uZSgpLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICBfLmFwcGVuZCA9IChkYXRhKSA9PiBpbmplY3QoXy5vbmUoKSwgZGF0YSwgdHJ1ZSk7XG4gICAgXy5zZWFyY2ggPSAoYXR0ciwgZnJvbSkgPT4gc2VhcmNoKF8ub25lKCksIGF0dHIsIGZyb20pO1xuICAgIF8ucGFyZW50ID0gKCkgPT4gXy5vbmUoKS5wYXJlbnROb2RlO1xuICAgIF8ucmVtb3ZlID0gKCkgPT4gXy5vbmUoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF8ub25lKCkpO1xuICAgIF8uc2hvdyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gXy5vbmUoKTtcbiAgICAgICAgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUoc3JjKTtcbiAgICAgICAgY3NzKHNyYywge2Rpc3BsYXk6IHNyYyAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID8gc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA6ICdibG9jayd9KTtcbiAgICB9O1xuICAgIF8uaGlkZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gXy5vbmUoKTtcbiAgICAgICAgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUoc3JjKTtcbiAgICAgICAgY3NzKHNyYywge2Rpc3BsYXk6ICdub25lJ30pO1xuICAgIH07XG4gICAgXy50b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IF8ub25lKCk7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKERvbS50b2dnbGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTm9kZShzcmMpKSB7XG4gICAgICAgICAgICBpZiAoc3JjLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgRG9tLnNob3coc3JjKTtcbiAgICAgICAgICAgIGVsc2UgRG9tLmhpZGUoc3JjKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXy5vbiA9IChldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpID0+IG9uKF8ub25lKCksIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSk7XG5cbiAgICByZXR1cm4gXztcbn1cblxuRG9tLmF0dHIgPSBhdHRyO1xuRG9tLmNzcyA9IGNzcztcbkRvbS5sb2FkZWQgPSBkb21Mb2FkZWQ7XG5Eb20uaW5qZWN0ID0gaW5qZWN0O1xuRG9tLnN0cjJub2RlID0gc3RyMm5vZGU7XG5Eb20uc2VhcmNoID0gc2VhcmNoO1xuRG9tLnF1ZXJ5QWxsID0gcXVlcnlBbGw7XG5Eb20ucXVlcnkgPSBxdWVyeTtcbkRvbS5jcmVhdGUgPSBjcmVhdGVFbGVtZW50O1xuRG9tLmZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQ7XG5Eb20ubm9kZTJzdHIgPSBub2RlMnN0cjtcbkRvbS5zdHIybm9kZSA9IHN0cjJub2RlO1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCIvKipcbiAqIEVtbWV0IHN5bnRheCBmb3IgY3JlYXRpbmcgRE9NIGVsZW1lbnRzXG4gKlxuICogU3ludGF4XG4gKiAgIGNvbnN0IGVtbWV0ID0gRW1tZXQoKTtcbiAqICAgZW1tZXQoJy50YWJsZSA+IGRpdntsZWZ0fSArIGRpdihjbGFzcz1cInRleHQtcmlnaHRcIil7cmlnaHR9JylcbiAqICAgdGFnI2lkLmNsYXNzZXMoYXR0cmlidXRlcz1cIlwiKXtpbm5lciB0ZXh0fSA+IC5uZXN0ZWQgXiAuYmFja2VkLnVwLm9uZSArIC5zaWJsaW5nXG4gKlxuICogQXJndW1lbnRzXG4gKiAgIC5lbW1ldCggc3ludGF4IDogc3RyaW5nLCByZXR1cm5Pbmx5SFRNTCA6IGJvb2xlYW4gKVxuICpcbiAqIEBuYW1lc3BhY2UgRW1tZXRcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gdGV4dCAgICAgICAgICBzeW50YXhcbiAqIEBwYXJhbSBodG1sT25seSAgICAgIHJldHVybk9ubHlIVE1MXG4gKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gKi9cbmNvbnN0IEVtbWV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCAgdGVtcElubmVyVGV4dHMgPSBbXTtcbiAgICBsZXQgIHRlbXBFc2NhcGVkID0gW107XG4gICAgY29uc3QgcmUgPSB7fTtcblxuICAgIHJlLmV4Y2x1ZGVzID0gXCIoW15cXFxcLiNcXFxcKFxcXFx7XSspXCI7XG4gICAgcmUuY2xhc3NlcyA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiICsgcmUuZXhjbHVkZXMsIFwiZ1wiKTtcbiAgICByZS5pZCA9IG5ldyBSZWdFeHAoXCIjXCIgKyByZS5leGNsdWRlcywgXCJnXCIpO1xuICAgIHJlLnRhZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZS5leGNsdWRlcyk7XG4gICAgcmUuaW5kZXhlcyA9IC8oLis/KSg+fFxcK3xcXF58JCkvZztcbiAgICByZS5lc2NhcGUgPSAvKFwifCcpKFteXFwxXSo/KVxcMS9nO1xuICAgIHJlLmlubmVyVGV4dCA9IC9cXHsoW159XSo/KX0vZztcbiAgICByZS5hdHRycyA9IC9cXCgoW15cXCldKilcXCkvZztcblxuICAgIGNvbnN0IGVtbWV0ID0gZnVuY3Rpb24gKHRleHQsIGh0bWxPbmx5KSB7XG4gICAgICAgIGxldCB0cmVlID0gZWxlbWVudCgpLFxuICAgICAgICAgICAgY3VycmVudCA9IHRyZWUsXG4gICAgICAgICAgICBsYXN0RWxlbWVudCA9IHRyZWUsXG4gICAgICAgICAgICBjb21tYW5kVGV4dCA9IHRleHQgfHwgXCJcIixcbiAgICAgICAgICAgIGNvbnZlcnRDb2xsZWN0aW9uID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzcmMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzcmNbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgICAgdGVtcElubmVyVGV4dHMgPSBbXTtcbiAgICAgICAgdGVtcEVzY2FwZWQgPSBbXTtcbiAgICAgICAgY29tbWFuZFRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmVzY2FwZSwgZnVuY3Rpb24gKGZ1bGwsIHF1b3RlcywgZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgdGVtcEVzY2FwZWQucHVzaChlc2NhcGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlxcXCJcXFwiXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UocmUuaW5uZXJUZXh0LCBmdW5jdGlvbiAoZnVsbCwgaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGVtcElubmVyVGV4dHMucHVzaChpbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcInt9XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmluZGV4ZXMsIGZ1bmN0aW9uIChmdWxsLCBlbGVtZW50VGV4dCwgc3BsaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmFwcGVuZENoaWxkKGxhc3RFbGVtZW50ID0gZWxlbWVudChlbGVtZW50VGV4dCkpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gXCI+XCIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBsYXN0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdHRlciA9PT0gXCJeXCIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHQgPSB0cmVlLmNoaWxkcmVuLmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gdHJlZS5jaGlsZHJlblxuICAgICAgICAgICAgOiB0cmVlLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIHJldHVybiBodG1sT25seVxuICAgICAgICAgICAgPyB0cmVlLmlubmVySFRNTFxuICAgICAgICAgICAgOiAocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gPyBjb252ZXJ0Q29sbGVjdGlvbihyZXN1bHQpIDogcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGxldCBjb21tYW5kVGV4dCA9IHRleHQgfHwgXCJcIixcbiAgICAgICAgICAgIG1hdGNoX3RhZyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLnRhZyksXG4gICAgICAgICAgICBtYXRjaF9pZCA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmlkKSxcbiAgICAgICAgICAgIG1hdGNoX2NsYXNzZXMgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5jbGFzc2VzKSxcbiAgICAgICAgICAgIG1hdGNoX2F0dHJzID0gY29tbWFuZFRleHQubWF0Y2gocmUuYXR0cnMpLFxuICAgICAgICAgICAgbWF0Y2hfaW5uZXJUZXh0ID0gY29tbWFuZFRleHQubWF0Y2gocmUuaW5uZXJUZXh0KSxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1hdGNoX3RhZyA/IG1hdGNoX3RhZ1swXSA6IFwiZGl2XCIpO1xuXG4gICAgICAgIGlmIChtYXRjaF9pZCkge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IG1hdGNoX2lkLnBvcCgpLnJlcGxhY2UocmUuaWQsIFwiJDFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfY2xhc3Nlcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBtYXRjaF9jbGFzc2VzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5zbGljZSgxKVxuICAgICAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBtYXRjaF9pbm5lclRleHQubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5lc2NhcGUodGVtcElubmVyVGV4dHMuc2hpZnQoKSk7XG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9hdHRycykge1xuICAgICAgICAgICAgbWF0Y2hfYXR0cnMubWFwKGZ1bmN0aW9uIChjaHVua1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua1BhcmFtLnJlcGxhY2UocmUuYXR0cnMsIFwiJDFcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIGNodW5rLm1hcChmdW5jdGlvbiAoYXR0clBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyUGFyYW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhdHRyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZSh1bmVzY2FwZShhdHRyLmpvaW4oXCI9XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGVtbWV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1tZXQ7XG4iLCJcbmNvbnN0IEV2ZW50TWFuYWdlciA9IHtcblxuICAgIGV2ZW50RnJhZ21lbnQ6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICB2ZXJzaW9uOiAnMC4wLjInLFxuICAgIGV2ZW50c1R5cGU6IHt9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRldGFpbHNcbiAgICAgKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgYWRkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIGRldGFpbHMpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge2RldGFpbDogZGV0YWlsc30pO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFpbHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGV0YWlscylcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lmhhc093blByb3BlcnR5KGtleSkpIGV2ZW50W2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W25hbWVdID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50OiBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W25hbWVdKVxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W25hbWVdXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZSBvbiB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqIEByZXR1cm5zIHt7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfX1cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpe1xuICAgICAgICB1c2VDYXB0dXJlID0gdXNlQ2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZXx8ZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYW4gZXZlbnQgdG8gdGhpcyBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uICh0eXBlKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W3R5cGVdIGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5kaXNwYXRjaEV2ZW50KEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W3R5cGVdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudE1hbmFnZXI7XG4iLCIvKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXRcbiAgICAgICAga2V5LFxuICAgICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMuZGF0YSlcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCI7XG5pbXBvcnQgTmFtZXNwYWNlQXBwbGljYXRpb24gZnJvbSBcIi4vTmFtZXNwYWNlQXBwbGljYXRpb25cIjtcbmltcG9ydCBDb29raWUgZnJvbSBcIi4vY29va2llL2luZGV4XCI7XG5pbXBvcnQgRGF0ZXRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4vZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XG5pbXBvcnQgRW1tZXQgZnJvbSBcIi4vZW1tZXRcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi9odHRwLXJlcXVlc3RcIjtcbmltcG9ydCBEb20gZnJvbSBcIi4vZG9tXCI7XG5cblxud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uID0gTmFtZXNwYWNlQXBwbGljYXRpb247XG53aW5kb3cuVXRpbCA9IFV0aWw7XG53aW5kb3cuQ29va2llID0gQ29va2llO1xud2luZG93LlN0b3JhZ2UgPSBTdG9yYWdlO1xud2luZG93LkRhdGV0aW1lID0gRGF0ZXRpbWU7XG53aW5kb3cuRXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyO1xud2luZG93LlRpbWVyID0gVGltZXI7XG53aW5kb3cuRW1tZXQgPSBFbW1ldDtcbndpbmRvdy5odHRwUmVxdWVzdCA9IGh0dHBSZXF1ZXN0O1xud2luZG93LkRvbSA9IERvbTtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vZGVmaW5lZFwiO1xuXG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBhZGRQcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuXG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKSB7XG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKCEhYWRkUHJvcGVydGllcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKHt9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JyB8fCB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBjb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzcmMpKTtcbiAgICAgICAgaWYgKHR5cGVPZihhZGRQcm9wZXJ0aWVzLCAnb2JqZWN0JykgfHwgdHlwZU9mKGFkZFByb3BlcnRpZXMsICdhcnJheScpKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWRkUHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29weVtrZXldID0gYWRkUHJvcGVydGllc1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBkZWZpbmVkKGFkZFByb3BlcnRpZXMpID8gc3JjICsgYWRkUHJvcGVydGllcyA6IHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHk7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJcblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIGNhbGxiYWNrLmNhbGwoe30sIGxpc3RbaV0sIGksIHRtcCk7XG4gICAgZWxzZVxuICAgICAgICBmb3IgKGkgaW4gbGlzdCkgY2FsbGJhY2suY2FsbCh7fSwgbGlzdFtpXSwgaSwgdG1wKTtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBlbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtcHR5O1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW10sIGxpc3QgPSB2YWx1ZXMgfHwgW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcbiAgICByZXR1cm4gdG1wO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYXRpb24pXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJylcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJylcbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG5cbiAgICBpZiAoZWxlbSA9PT0gdW5kZWZpbmVkIHx8IGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21DYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb21DYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbUNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tQ2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCB0eXBlID0gdHlwZU9mKGZyb21DYWxsYmFjayksXG4gICAgICAgIGZyb20gPSBkb2MgfHwgZG9jdW1lbnQsXG4gICAgICAgIGVsZW1lbnRzID0gW10sXG4gICAgICAgIGNhbGxiYWNrID0gbnVsbDtcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGNhbGxiYWNrID0gZnJvbUNhbGxiYWNrO1xuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tQ2FsbGJhY2spO1xuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIgJiYgaXNOb2RlKGZyb21DYWxsYmFjaykpXG4gICAgICAgIGZyb20gPSBmcm9tQ2FsbGJhY2s7XG5cbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IGksIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG5cbiAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSA/IGZyYWdtZW50LmZpcnN0Q2hpbGQgOiBmcmFnbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIiwiXG5cbi8qKlxuICogQWRkIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBqc29uID0gdHJ1ZSkge1xuICAgIGlmIChqc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBHZXQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIGpzb24gPSB0cnVlKSB7XG4gICAgbGV0IHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmIChqc29uICYmIHZhbHVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqdHJ1ZVxuICogUmVtb3ZlIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IGluZGV4XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGtleSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmtleShpbmRleClcbn07XG5cbi8qKlxuICogV2hlbiBpbnZva2VkLCB3aWxsIGVtcHR5IGFsbCBrZXlzIG91dCBvZiB0aGUgc3RvcmFnZS5cbiAqL1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGF0YSBpdGVtcyBzdG9yZWQgaW4gdGhlIFN0b3JhZ2Ugb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aFxufTtcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHt7c2V0OiAoU3RvcmFnZS5zZXR8KiksIGdldDogKFN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTdG9yYWdlLmtleXwqKSwgY2xlYXI6IChTdG9yYWdlLmNsZWFyfCopLCByZW1vdmU6IChTdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU3RvcmFnZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0b3JhZ2UgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXQobmFtZSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgc2V0LFxuICAgIGdldCxcbiAgICBrZXksXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGxlbmd0aCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iLCIvKipcbiAqIFNpbXBsZSB0aW1lciByZWFsaXNlLiBSZXR1cm4gc2VsZi1pbnN0YW5jZVxuICogdGltZXIgPSBuZXcgLlRpbWVyKGZ1bmN0aW9uKGl0ZXJhdG9yLCByZXBlYXQpe30sIDEwMDAsIDUpXG4gKiAgSW5zdGFuY2UgbWV0aG9kc1xuICogICAgICB0aW1lci5yZXBlYXRcbiAqICAgICAgdGltZXIuaXRlcmF0b3JcbiAqICAgICAgdGltZXIuc3RhcnQgKClcbiAqICAgICAgdGltZXIuc3RvcCAoKVxuICogICAgICB0aW1lci5wYXVzZSAoKVxuICogICAgICB0aW1lci5yZXNldCAoKVxuICogICAgICB0aW1lci5jbGVhciAoKVxuICogIFN0YXRpYyBtZXRob2RzXG4gKiAgICAgIFRpbWVyLnRpbWVvdXQgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogdGltZW91dElkXG4gKiAgICAgIFRpbWVyLmludGVydmFsIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSA6IGludGVydmFsSWRcbiAqICAgICAgVGltZXIudGltZW91dFN0b3AgKHRpbWVvdXRJZClcbiAqICAgICAgVGltZXIuaW50ZXJ2YWxTdG9wIChpbnRlcnZhbElkKVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEBwYXJhbSByZXBlYXRcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2UgIGlmIG5vdCBzZXQsIHVzZXMgaW5zdGFuY2Ugb2YgVGltZXJcbiAqIEByZXR1cm5zIHtXaW5kb3cuVGltZXJ8VGltZXJ9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUaW1lcikpXG4gICAgICAgIHJldHVybiBuZXcgVGltZXIoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSk7XG5cbiAgICBkZWxheSA9IGRlbGF5ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChkZWxheSkgOiA1MDA7XG4gICAgcmVwZWF0ID0gcmVwZWF0ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChyZXBlYXQpIDogMDtcbiAgICBjb25zdCBjb25maWcgPSB7c2VsZjogdGhpcywgY2FsbGJhY2s6IGNhbGxiYWNrLCBkZWxheTogZGVsYXksIHJlcGVhdDogcmVwZWF0fTtcblxuICAgIGxldCBodCA9IG51bGw7XG4gICAgY29uc3QgaGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbmZpZy5zZWxmLml0ZXJhdG9yKys7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ICE9PSAwICYmIGNvbmZpZy5yZXBlYXQgPD0gY29uZmlnLnNlbGYuaXRlcmF0b3IpXG4gICAgICAgICAgICBjb25maWcuc2VsZi5zdG9wKCk7XG4gICAgICAgIGNvbmZpZy5jYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB0aGlzLCBjb25maWcuc2VsZi5pdGVyYXRvciwgY29uZmlnLnJlcGVhdCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ID09PSAwIHx8IGNvbmZpZy5yZXBlYXQgPiBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGh0ID0gc2V0SW50ZXJ2YWwoaGMsIGNvbmZpZy5kZWxheSk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjb25maWcucmVwZWF0O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKClcbiAgICB9O1xuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSAwXG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKGh0KVxuICAgIH07XG59O1xuXG5UaW1lci50aW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5pbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnRpbWVvdXRTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmludGVydmFsU3RvcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyJdLCJzb3VyY2VSb290IjoiIn0=