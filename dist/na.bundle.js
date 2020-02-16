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

    if (this.configuration.id) {
        Object.defineProperty(this, "root", {
            value: document.querySelector(this.configuration.id),
            writable: false
        });
    }

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

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _eventsNames = __webpack_require__(/*! ../event-manager/eventsNames */ "./src/event-manager/eventsNames.js");

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(config) {
    if (typeof config === 'string') {
        return component.list[config];
    } else {
        var comp = component.create(config);
        component.list[comp.id] = comp;

        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
        }

        if (typeof comp.template === 'string') {
            comp.template = (0, _str2node2.default)(comp.template).firstElementChild;

            if (comp.template.querySelector('[data-node]')) comp.node = (0, _search2.default)('[data-node]', 'data-node', comp.template);

            if (comp.styles) Object.keys(comp.styles).forEach(function (selector) {
                if (selector === 'template' && (0, _isNode2.default)(comp.template)) {
                    console.log(selector);
                    Object.keys(comp.styles[selector]).forEach(function (key) {
                        comp.template.style[key] = comp.styles[selector][key];
                    });
                } else (0, _queryAll2.default)(selector, comp.template, function (node) {
                    Object.keys(comp.styles[selector]).forEach(function (key) {
                        node.style[key] = comp.styles[selector][key];
                    });
                });
            });

            attributesEventsHandler(comp, 'on', Object.keys(_eventsNames.EVENTS_NAMES_BASIC));
        }

        if (typeof comp.complete === 'function' && !comp.completed) {
            if (this instanceof NamespaceApplication) {
                comp.completed = true;
                injectComponent(comp, this);
                comp.complete.call(comp, this);
            } else {
                throw new Error('"Late Call": Component [' + comp.id + '] can t call completed() and injects');
            }
        }
    }
};

component.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(component.list).forEach(function (key) {
            var comp = component.list[key];

            if (comp.complete && !comp.completed) {
                comp.completed = true;
                injectComponent(comp, instance);
                comp.complete.call(comp, instance);
            }
        });
    }
};

component.list = {};

component.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        props: null,
        styles: null,
        template: null,
        override: false,
        init: function init() {},
        complete: function complete() {},
        methods: {},
        node: {},
        initialized: false,
        completed: false
    }, config);
};

function attributesEventsHandler(comp, prefix, eventsNames) {
    var addEvent = function addEvent(elem, attr, eventName) {
        var method = elem.getAttribute(attr);
        if (typeof comp.methods[method] === "function") {
            elem.removeAttribute(attr);
            elem.addEventListener(eventName, function (e) {
                comp.methods[method].call(comp, e, e.target || e.currentTarget || e.path[0]);
            });
        }
    };

    eventsNames.forEach(function (eventName) {
        var attr = prefix + '-' + eventName;
        if (comp.template.querySelector('[' + attr + ']')) {
            Array.from(comp.template.querySelectorAll('[' + attr + ']')).forEach(function (elem) {
                addEvent(elem, attr, eventName);
            });
        } else if (comp.template.hasAttribute(attr)) {
            addEvent(comp.template, attr, eventName);
        }
    });
}

function injectComponent(comp, instance) {
    var nodes = (0, _queryAll2.default)('[data-component="' + comp.id + '"]', instance.root);

    if (nodes) nodes.forEach(function (node) {
        if (comp.props) {
            comp.props.forEach(function (prop) {
                if (node.hasAttribute(prop)) {
                    Object.defineProperty(comp, prop, {
                        value: node.getAttribute(prop),
                        writable: false
                    });
                    node.removeAttribute(prop);
                }
            });
        }

        (0, _inject2.default)(node, comp.template);
    });

    return comp;
}

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

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dom(selector) {
    var $ = {
        selector: (0, _typeOf2.default)(selector, 'string') ? selector : null,
        selected: (0, _isNode2.default)(selector) ? [selector] : (0, _queryAll2.default)(selector)
    };

    var _set_real_display_style = function _set_real_display_style(src) {
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(_set_real_display_style);
        } else if ((0, _isNode2.default)(src) && src['real-display-style'] === undefined) {
            var style = src.style.display ? src.style.display : getComputedStyle(src).display;
            src['real-display-style'] = !style || style === 'none' ? 'block' : style;
        }
    };

    $.one = function () {
        return $.selected && $.selected.length ? $.selected[0] : false;
    };
    $.all = function () {
        return $.selected;
    };
    $.attr = function (name, value) {
        return (0, _defined2.default)(value) ? (0, _attr2.default)($.one(), name, value) : (0, _attr2.default)($.one(), name);
    };
    $.inject = function (data, append, to) {
        return (0, _inject2.default)($.one(), data, append, to);
    };
    $.append = function (data) {
        return (0, _inject2.default)($.one(), data, true);
    };
    $.search = function (attr, from) {
        return (0, _search2.default)($.one(), attr, from);
    };
    $.parent = function () {
        return $.one().parentNode;
    };
    $.children = function () {
        $.one();
    };
    $.position = function () {
        return (0, _position2.default)($.one());
    };
    $.x = function () {
        return (0, _position2.default)($.one()).x;
    };
    $.y = function () {
        return (0, _position2.default)($.one()).y;
    };
    $.width = function () {
        return (0, _position2.default)($.one()).width;
    };
    $.height = function () {
        return (0, _position2.default)($.one()).height;
    };
    $.remove = function () {
        return $.one().parentNode.removeChild($.one());
    };
    $.show = function () {
        var src = $.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: src && src['real-display-style'] ? src['real-display-style'] : 'block' });
    };
    $.hide = function () {
        var src = $.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: 'none' });
    };
    $.toggle = function () {
        var src = $.one();
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(Dom.toggle);
        } else if ((0, _isNode2.default)(src)) {
            if (src.style.display === 'none') Dom.show(src);else Dom.hide(src);
        }
    };
    $.on = function (eventName, callback, bubble) {
        return (0, _on2.default)($.one(), eventName, callback, bubble);
    };
    $.coords = function () {
        var coords = $.one().getBoundingClientRect();
        return (0, _merge2.default)({ top: coords.top + pageYOffset, left: coords.left + pageXOffset }, coords);
    };
    return $;
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
Dom.position = _position2.default;

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

/***/ "./src/event-manager/eventsNames.js":
/*!******************************************!*\
  !*** ./src/event-manager/eventsNames.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EVENTS_NAMES = exports.EVENTS_NAMES = {
    copy: 'copy',
    cut: 'cut',
    paste: 'paste',
    abort: 'abort',
    blur: 'blur',
    cancel: 'cancel',
    canplay: 'canplay',
    canplaythrough: 'canplaythrough',
    change: 'change',
    click: 'click',
    close: 'close',
    contextmenu: 'contextmenu',
    cuechange: 'cuechange',
    dblclick: 'dblclick',
    drag: 'drag',
    dragend: 'dragend',
    dragenter: 'dragenter',
    dragleave: 'dragleave',
    dragover: 'dragover',
    dragstart: 'dragstart',
    drop: 'drop',
    durationchange: 'durationchange',
    emptied: 'emptied',
    ended: 'ended',
    error: 'error',
    focus: 'focus',
    input: 'input',
    invalid: 'invalid',
    keydown: 'keydown',
    keypress: 'keypress',
    keyup: 'keyup',
    load: 'load',
    loadeddata: 'loadeddata',
    loadedmetadata: 'loadedmetadata',
    loadstart: 'loadstart',
    mousedown: 'mousedown',
    mouseenter: 'mouseenter',
    mouseleave: 'mouseleave',
    mousemove: 'mousemove',
    mouseout: 'mouseout',
    mouseover: 'mouseover',
    mouseup: 'mouseup',
    mousewheel: 'mousewheel',
    pause: 'pause',
    play: 'play',
    playing: 'playing',
    progress: 'progress',
    ratechange: 'ratechange',
    reset: 'reset',
    resize: 'resize',
    scroll: 'scroll',
    seeked: 'seeked',
    seeking: 'seeking',
    select: 'select',
    stalled: 'stalled',
    submit: 'submit',
    suspend: 'suspend',
    timeupdate: 'timeupdate',
    toggle: 'toggle',
    volumechange: 'volumechange',
    waiting: 'waiting',
    wheel: 'wheel',
    auxclick: 'auxclick',
    gotpointercapture: 'gotpointercapture',
    lostpointercapture: 'lostpointercapture',
    pointerdown: 'pointerdown',
    pointermove: 'pointermove',
    pointerup: 'pointerup',
    pointercancel: 'pointercancel',
    pointerover: 'pointerover',
    pointerout: 'pointerout',
    pointerenter: 'pointerenter',
    pointerleave: 'pointerleave',
    selectstart: 'selectstart',
    selectionchange: 'selectionchange',
    animationend: 'animationend',
    animationiteration: 'animationiteration',
    animationstart: 'animationstart',
    transitionend: 'transitionend'
};

var EVENTS_NAMES_BASIC = exports.EVENTS_NAMES_BASIC = {
    blur: 'blur',
    change: 'change',
    click: 'click',
    dblclick: 'dblclick',
    drag: 'drag',
    drop: 'drop',
    focus: 'focus',
    input: 'input',
    load: 'load',
    mousedown: 'mousedown',
    mouseenter: 'mouseenter',
    mouseleave: 'mouseleave',
    mousemove: 'mousemove',
    mouseout: 'mouseout',
    mouseover: 'mouseover',
    mouseup: 'mouseup',
    mousewheel: 'mousewheel',
    scroll: 'scroll',
    select: 'select',
    submit: 'submit',
    wheel: 'wheel',
    transitionend: 'transitionend'
};

exports.default = EVENTS_NAMES;

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


var _NamespaceApplication = __webpack_require__(/*! ./NamespaceApplication */ "./src/NamespaceApplication.js");

var _NamespaceApplication2 = _interopRequireDefault(_NamespaceApplication);

var _util = __webpack_require__(/*! ./util */ "./src/util/index.js");

var _util2 = _interopRequireDefault(_util);

var _cookie = __webpack_require__(/*! ./cookie */ "./src/cookie/index.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _storage = __webpack_require__(/*! ./storage */ "./src/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _datetime = __webpack_require__(/*! ./datetime */ "./src/datetime/index.js");

var _datetime2 = _interopRequireDefault(_datetime);

var _eventManager = __webpack_require__(/*! ./event-manager */ "./src/event-manager/index.js");

var _eventManager2 = _interopRequireDefault(_eventManager);

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
window.NamespaceApplication.Util = _util2.default;
window.NamespaceApplication.Cookie = _cookie2.default;
window.NamespaceApplication.Storage = _storage2.default;
window.NamespaceApplication.Datetime = _datetime2.default;
window.NamespaceApplication.EventManager = _eventManager2.default;
window.NamespaceApplication.Timer = _timer2.default;
window.NamespaceApplication.Emmet = _emmet2.default;
window.NamespaceApplication.httpRequest = _httpRequest2.default;
window.NamespaceApplication.Dom = _dom2.default;

/***/ }),

/***/ "./src/static/abc.js":
/*!***************************!*\
  !*** ./src/static/abc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LETTER_CONSONANT = exports.LETTER_CONSONANT = 'B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z';
var LETTER_VOWEL = exports.LETTER_VOWEL = 'A,E,I,O,U,Y';
var ABC = exports.ABC = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
var NUMBERS = exports.NUMBERS = '0,1,2,3,4,5,6,7,8,9';
var AMPERSAND = exports.AMPERSAND = '&';

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

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _str2node = __webpack_require__(/*! ./str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFragment = function createFragment(append) {
    var fragment = document.createDocumentFragment();

    if ((0, _isNode2.default)(append)) fragment.appendChild(append);

    if ((0, _typeOf2.default)(append, 'string')) fragment.appendChild((0, _str2node2.default)(append));

    return fragment;
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

/***/ "./src/static/definedIn.js":
/*!*********************************!*\
  !*** ./src/static/definedIn.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var definedIn = function definedIn(stack, value) {
    return stack && stack[value] !== undefined;
};

exports.default = definedIn;

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
    if (list instanceof Array) {
        list.forEach(function (item, i) {
            callback.call({}, item, i, tmp);
        });
    } else if ((0, _isNode2.default)(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach(function (item, i) {
            callback.call({}, item, i, tmp);
        });
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

/***/ "./src/static/extend.js":
/*!******************************!*\
  !*** ./src/static/extend.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var extend = exports.extend = function extend(destination, source) {
    for (var param in source) {
        if (source.hasOwnProperty(param)) destination[param] = source[param];
    }function __() {
        this.constructor = destination;
    }

    __.prototype = source.prototype;
    destination.prototype = new __();
};

var extendRecursive = exports.extendRecursive = function extendRecursive(destination, source) {
    var property = void 0;
    for (property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            extendRecursive(destination[property], source[property]);
        } else destination[property] = source[property];
    }
    return destination;
};

exports.default = extend;

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

/***/ "./src/static/httpRequest.js":
/*!***********************************!*\
  !*** ./src/static/httpRequest.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
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
var httpRequest = function httpRequest(config, callback, thisInstance) {
    var key = void 0;
    var sendData = {};
    var xhr = new XMLHttpRequest();
    var options = {
        data: config.data || {},
        action: config.action || config.url || document.location.href,
        method: config.method ? config.method.toUpperCase() : 'GET',
        headers: config.headers || {},
        useEncode: config.useEncode === undefined ? true : !!config.useEncode,
        useFormData: config.useFormData === undefined ? false : !!config.useFormData,
        async: config.async === undefined ? true : !!config.async,
        user: config.user || null,
        password: config.user || null
    };

    var concateString = function concateString(params) {
        var result = '';
        for (key in params) {
            result += '&' + key + '=' + (options.useEncode ? encodeURIComponent(params[key]) : params[key]);
        }
        return result;
    };

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
            if (!(sendData instanceof FormData)) sendData = new FormData();

            Object.keys(options.data).forEach(function (key) {
                sendData.append(key, options.useEncode ? encodeURIComponent(options.data[key]) : options.data[key]);
            });
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
};

exports.default = httpRequest;

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
    if ((0, _typeOf2.default)(selector, 'array')) {
        selector.forEach(function (elem) {
            inject(elem, data, append, to);
        });
        return;
    }

    if ((0, _typeOf2.default)(selector, 'string')) selector = (0, _query2.default)(selector, to);

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

/***/ "./src/static/isEmpty.js":
/*!*******************************!*\
  !*** ./src/static/isEmpty.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(src) {
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

exports.default = isEmpty;

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

var documentElement = (0, _getDocument2.default)();
var loadJS = function loadJS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadJS(src[i], onload, onerror);
        }
    } else {
        var script = documentElement.createElement('script');
        var id = 'resource-' + Math.random().toString(32).slice(2);

        script.src = src.substr(-3) === '.js' ? src : src + '.js';
        script.type = 'application/javascript';
        script.id = id;
        script.onload = onload;
        script.onerror = onerror;

        documentElement.head.appendChild(script);
        return script;
    }
};

exports.default = loadJS;

/***/ }),

/***/ "./src/static/loadJSSync.js":
/*!**********************************!*\
  !*** ./src/static/loadJSSync.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _createElement = __webpack_require__(/*! ./createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loads a script element with javascript source
 *
 * .loadJSSync ( {
 *      myscript1: '/path/to/myscript1',
 *      myscript2: '/path/to/myscript2',
 *    },
 *    function (list) {})
 *
 * .loadJSSync ( [
 *      '/path/to/myscript1',
 *      '/path/to/myscript2',
 *    ],
 *    function (list) {})
 *
 * @namespace NamespaceApplication.loadJSSync
 * @param srcs       Object, Array. items: key is ID, value is src
 * @param callback  Function called when all srcs is loaded
 * @param onerror   Function called when load is failed
 * @returns {*}
 */
var loadJSSync = function loadJSSync(srcs, callback, onerror) {
    if ((0, _typeOf2.default)(srcs, 'object') || (0, _typeOf2.default)(srcs, 'array')) {
        if ((0, _typeOf2.default)(srcs, 'array')) {
            var obj = {};
            srcs.forEach(function (item, i) {
                obj['resource-' + Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }
        var iterator = 0;
        var scripts = {};
        Object.keys(srcs).forEach(function (key) {
            var src = srcs[key];
            var script = (0, _createElement2.default)('script', {
                src: src.substr(-3) === '.js' ? src : src + '.js',
                type: 'application/javascript',
                id: key
            });
            script.onerror = onerror;
            script.onload = function (e) {
                scripts[this.id] = this;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            };
            document.head.appendChild(script);
        });
    }
};

exports.default = loadJSSync;

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

/***/ "./src/static/number2string.js":
/*!*************************************!*\
  !*** ./src/static/number2string.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var number2string = exports.number2string = function number2string(x) {
    var e = void 0;
    if (Math.abs(x) < 1.0) {
        e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + new Array(e).join('0') + x.toString().substring(2);
        }
    } else {
        e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += new Array(e + 1).join('0');
        }
    }
    return x;
};

exports.default = number2string;

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
// import isNode from "./isNode";


var position = function position(elem) {
    var data = { x: 0, y: 0, width: 0, height: 0 };
    if (typeof elem === 'string') elem = document.querySelector(elem);

    if (elem === window || elem === document) {
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

            data.top = rect.top + pageYOffset;
            data.left = rect.left + pageXOffset;
            data.right = rect.right + pageXOffset;
            data.bottom = rect.bottom + pageXOffset;
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
 * @param from
 * @param callback
 * @param thisInstance
 * @returns {Node|boolean}
 */
var query = function query(selector, from, callback, thisInstance) {
  var elements = (0, _queryAll2.default)(selector, from, callback, thisInstance);
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

var queryAll = function queryAll(selector, from, callback, thisInstance) {
    var elements = [];
    from = from || doc;

    if ((0, _isNode2.default)(selector)) return [selector];

    if ((0, _typeOf2.default)(from, 'string')) from = doc.querySelector(from);
    if (from) elements = [].slice.call(from.querySelectorAll(selector));

    if (callback) elements.forEach(function (element) {
        callback.call(thisInstance || {}, element);
    });

    return elements;
};

exports.default = queryAll;

/***/ }),

/***/ "./src/static/random.js":
/*!******************************!*\
  !*** ./src/static/random.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomItem = exports.randomString = exports.randomNumber = exports.randomColor = exports.random = undefined;

var _abc = __webpack_require__(/*! ./abc */ "./src/static/abc.js");

var random = exports.random = function random(min, max) {
    min = min || 0;
    max = max || 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generate a random hex color
 * @returns {string}
 */
/**
 * Generate a random number
 * @param min
 * @param max
 * @returns {number}
 */
var randomColor = exports.randomColor = function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var i = void 0,
        color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }return color;
};

var randomNumber = exports.randomNumber = function randomNumber() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    if (size > 16) {
        var i = Math.ceil(size / 16);
        var res = '';
        for (i; i > 0; i--) {
            res += Array(16).fill(0).map(function (i) {
                return Math.floor(Math.random() * 10);
            }).join('');
        }return res.slice(0, size);
    }
    return parseInt(Array(size).fill(0).map(function (i) {
        return Math.floor(Math.random() * 10);
    }).join(''));
};

var randomString = exports.randomString = function randomString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    var i = void 0,
        string = '';
    var abs = (_abc.ABC + _abc.NUMBERS).toLowerCase().split('');
    for (i = size; i > 0; i--) {
        string += abs[Math.floor(Math.random() * abs.length)];
    }
    return string;
};

/**
 * Return random item from array
 * @param arr
 * @returns {*}
 */
var randomItem = exports.randomItem = function randomItem(arr) {
    return Array.isArray(arr) ? arr[random(0, arr.length - 1)] : false;
};

exports.default = random;

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

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _attr = __webpack_require__(/*! ../static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _createElement = __webpack_require__(/*! ../static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _createFragment = __webpack_require__(/*! ../static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

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

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _httpRequest = __webpack_require__(/*! ../static/httpRequest */ "./src/static/httpRequest.js");

var _httpRequest2 = _interopRequireDefault(_httpRequest);

var _defined = __webpack_require__(/*! ../static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _definedIn = __webpack_require__(/*! ../static/definedIn */ "./src/static/definedIn.js");

var _definedIn2 = _interopRequireDefault(_definedIn);

var _each = __webpack_require__(/*! ../static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(/*! ../static/extend */ "./src/static/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isEmpty = __webpack_require__(/*! ../static/isEmpty */ "./src/static/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _findObject = __webpack_require__(/*! ../static/findObject */ "./src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _findObjects = __webpack_require__(/*! ../static/findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _format = __webpack_require__(/*! ../static/format */ "./src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ../static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _loadJSSync = __webpack_require__(/*! ../static/loadJSSync */ "./src/static/loadJSSync.js");

var _loadJSSync2 = _interopRequireDefault(_loadJSSync);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _number2string = __webpack_require__(/*! ../static/number2string */ "./src/static/number2string.js");

var _number2string2 = _interopRequireDefault(_number2string);

var _on = __webpack_require__(/*! ../static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ../static/positionMouse */ "./src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _random = __webpack_require__(/*! ../static/random */ "./src/static/random.js");

var _random2 = _interopRequireDefault(_random);

var _redirect = __webpack_require__(/*! ../static/redirect */ "./src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ../static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ../static/uri */ "./src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

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
    httpRequest: _httpRequest2.default,
    defined: _defined2.default,
    definedIn: _definedIn2.default,
    extend: _extend2.default,
    extendRecursive: _extend.extendRecursive,
    each: _each2.default,
    findObject: _findObject2.default,
    findObjects: _findObjects2.default,
    format: _format2.default,
    isEmpty: _isEmpty2.default,
    isNode: _isNode2.default,
    loadCSS: _loadCSS2.default,
    loadJS: _loadJS2.default,
    loadJSSync: _loadJSSync2.default,
    merge: _merge2.default,
    number2string: _number2string2.default,
    on: _on2.default,
    position: _position2.default,
    positionMouse: _positionMouse2.default,
    random: _random2.default,
    randomColor: _random.randomColor,
    randomItem: _random.randomItem,
    randomNumber: _random.randomNumber,
    randomString: _random.randomString,
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default,
    copy: _copy2.default
};

exports.default = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWRJbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hbWVzcGFjZUFwcGxpY2F0aW9uIiwiY29uZmlnIiwiaW5zdGFuY2UiLCJrZXkiLCJjb25maWd1cmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJ1cmwiLCJtb2RlIiwiZGVidWciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cml0YWJsZSIsImNvbXBvbmVudCIsInJlZ2lzdGVyIiwiZXh0ZW5zaW9uIiwiZGVwZW5kZW5jeSIsInJvdXRlIiwic3RhdGUiLCJDb29raWUiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2V0IiwiZ2V0IiwiY2xlYXIiLCJyZW1vdmUiLCJvcHRpb25zIiwidHlwZUpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhwaXJlcyIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInBhcnNlSW50IiwiZW5jb2RlIiwiY29va2llIiwibWF0Y2hlcyIsIm1hdGNoIiwiUmVnRXhwIiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRhdGFKc29uIiwicGFyc2UiLCJvcHRpb24iLCJzdHIiLCJkZWNvZGUiLCJjb29raWVzIiwic3BsaXQiLCJwYXJ0cyIsInRyaW0iLCJsaXN0IiwiY29tcCIsImNyZWF0ZSIsImluaXQiLCJpbml0aWFsaXplZCIsInRlbXBsYXRlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJub2RlIiwic3R5bGVzIiwic2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlciIsIkVWRU5UU19OQU1FU19CQVNJQyIsImNvbXBsZXRlIiwiY29tcGxldGVkIiwiaW5qZWN0Q29tcG9uZW50IiwiY2FsbCIsIkVycm9yIiwicHJvcHMiLCJvdmVycmlkZSIsIm1ldGhvZHMiLCJwcmVmaXgiLCJldmVudHNOYW1lcyIsImFkZEV2ZW50IiwiZWxlbSIsImF0dHIiLCJldmVudE5hbWUiLCJtZXRob2QiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJwYXRoIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhc0F0dHJpYnV0ZSIsIm5vZGVzIiwicm9vdCIsInByb3AiLCJmb3JjZSIsInNvdXJjZXMiLCJjc3MiLCJqcyIsImVsZW1lbnRzIiwibG9hZCIsIm1heCIsInNyY3MiLCJpIiwibG9hZENTUyIsImxvYWRKUyIsInNyYyIsInB1c2giLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29udGV4dCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjYWxsYmFjayIsInNvdXJjZSIsImNyZWF0ZVNvdXJjZSIsInNvdXJjZWRhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0Q2FzZSIsIlByb3h5Iiwib2JqIiwiRGF0ZXRpbWUiLCJNU19JTl9EQVkiLCJNU19JTl9IT1VSIiwiTVNfSU5fTUlOIiwidGltZSIsImFkZERheXMiLCJkYXkiLCJkYXRlU3RhcnQiLCJiZXR3ZWVuRGF0ZXMiLCJkYXRlRnJvbSIsImRhdGVUbyIsImRpZmZNcyIsImRpZmZEYXlzIiwiTWF0aCIsInJvdW5kIiwiZGlmZkhycyIsImRpZmZNaW4iLCJob3VyIiwibWludXRlIiwic3RyVG9EYXRlIiwiZm9ybWF0IiwidXRjIiwidGVtcCIsIm1hc2siLCJ0b0xvd2VyQ2FzZSIsIlVUQyIsIkRvbSIsIiQiLCJzZWxlY3RlZCIsIl9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlIiwibWFwIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJvbmUiLCJhbGwiLCJpbmplY3QiLCJhcHBlbmQiLCJ0byIsInNlYXJjaCIsInBhcmVudCIsImNoaWxkcmVuIiwicG9zaXRpb24iLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJvbiIsImJ1YmJsZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0IiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwibG9hZGVkIiwiZG9tTG9hZGVkIiwic3RyMm5vZGUiLCJxdWVyeUFsbCIsInF1ZXJ5IiwiY3JlYXRlRWxlbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnQiLCJub2RlMnN0ciIsIkVtbWV0IiwidGVtcElubmVyVGV4dHMiLCJ0ZW1wRXNjYXBlZCIsInJlIiwiZXhjbHVkZXMiLCJjbGFzc2VzIiwidGFnIiwiaW5kZXhlcyIsImVzY2FwZSIsImlubmVyVGV4dCIsImF0dHJzIiwiZW1tZXQiLCJ0ZXh0IiwiaHRtbE9ubHkiLCJ0cmVlIiwiY3VycmVudCIsImxhc3RFbGVtZW50IiwiY29tbWFuZFRleHQiLCJjb252ZXJ0Q29sbGVjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsInJlc3VsdCIsImZ1bGwiLCJxdW90ZXMiLCJlbGVtZW50VGV4dCIsInNwbGl0dGVyIiwiaW5uZXJIVE1MIiwiSFRNTENvbGxlY3Rpb24iLCJtYXRjaF90YWciLCJtYXRjaF9pZCIsIm1hdGNoX2NsYXNzZXMiLCJtYXRjaF9hdHRycyIsIm1hdGNoX2lubmVyVGV4dCIsInBvcCIsImNsYXNzTmFtZSIsInNsaWNlIiwiam9pbiIsInVuZXNjYXBlIiwic2hpZnQiLCJjaHVua1BhcmFtIiwiY2h1bmsiLCJhdHRyUGFyYW0iLCJzZXRBdHRyaWJ1dGUiLCJFVkVOVFNfTkFNRVMiLCJjb3B5IiwiY3V0IiwicGFzdGUiLCJhYm9ydCIsImJsdXIiLCJjYW5jZWwiLCJjYW5wbGF5IiwiY2FucGxheXRocm91Z2giLCJjaGFuZ2UiLCJjbGljayIsImNsb3NlIiwiY29udGV4dG1lbnUiLCJjdWVjaGFuZ2UiLCJkYmxjbGljayIsImRyYWciLCJkcmFnZW5kIiwiZHJhZ2VudGVyIiwiZHJhZ2xlYXZlIiwiZHJhZ292ZXIiLCJkcmFnc3RhcnQiLCJkcm9wIiwiZHVyYXRpb25jaGFuZ2UiLCJlbXB0aWVkIiwiZW5kZWQiLCJmb2N1cyIsImlucHV0IiwiaW52YWxpZCIsImtleWRvd24iLCJrZXlwcmVzcyIsImtleXVwIiwibG9hZGVkZGF0YSIsImxvYWRlZG1ldGFkYXRhIiwibG9hZHN0YXJ0IiwibW91c2Vkb3duIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJtb3VzZW1vdmUiLCJtb3VzZW91dCIsIm1vdXNlb3ZlciIsIm1vdXNldXAiLCJtb3VzZXdoZWVsIiwicGF1c2UiLCJwbGF5IiwicGxheWluZyIsInByb2dyZXNzIiwicmF0ZWNoYW5nZSIsInJlc2V0IiwicmVzaXplIiwic2Nyb2xsIiwic2Vla2VkIiwic2Vla2luZyIsInNlbGVjdCIsInN0YWxsZWQiLCJzdWJtaXQiLCJzdXNwZW5kIiwidGltZXVwZGF0ZSIsInZvbHVtZWNoYW5nZSIsIndhaXRpbmciLCJ3aGVlbCIsImF1eGNsaWNrIiwiZ290cG9pbnRlcmNhcHR1cmUiLCJsb3N0cG9pbnRlcmNhcHR1cmUiLCJwb2ludGVyZG93biIsInBvaW50ZXJtb3ZlIiwicG9pbnRlcnVwIiwicG9pbnRlcmNhbmNlbCIsInBvaW50ZXJvdmVyIiwicG9pbnRlcm91dCIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInNlbGVjdHN0YXJ0Iiwic2VsZWN0aW9uY2hhbmdlIiwiYW5pbWF0aW9uZW5kIiwiYW5pbWF0aW9uaXRlcmF0aW9uIiwiYW5pbWF0aW9uc3RhcnQiLCJ0cmFuc2l0aW9uZW5kIiwiRXZlbnRNYW5hZ2VyIiwiZXZlbnRGcmFnbWVudCIsInZlcnNpb24iLCJldmVudHNUeXBlIiwiZGV0YWlscyIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZUV2ZW50IiwidHlwZSIsImxpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiaHR0cFJlcXVlc3QiLCJ0aGlzSW5zdGFuY2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImhyZWYiLCJ0b1VwcGVyQ2FzZSIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsInBhcmFtcyIsInNlbmREYXRhIiwiaW5kZXhPZiIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJ3aW5kb3ciLCJVdGlsIiwiU3RvcmFnZSIsIlRpbWVyIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJ0eXBlX2VsZW1lbnQiLCJhZGRQcm9wZXJ0aWVzIiwiY2xvbmVOb2RlIiwiYmluZCIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsInByb3BlcnRpZXMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsInN1YnN0cmluZyIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvYyIsImVhY2giLCJ0bXAiLCJpdGVtIiwiY2hpbGROb2RlcyIsImZpbHRlciIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJwYXJhbSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJleHRlbmRSZWN1cnNpdmUiLCJwcm9wZXJ0eSIsImZpbmRPYmplY3QiLCJ2YWx1ZXMiLCJhdHRyVmFsdWUiLCJmaW5kT2JqZWN0cyIsInN0cmluZyIsInJlZyIsImlzQXJyYXkiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwidGV4dENvbnRlbnQiLCJpc0VtcHR5IiwiaXNOYU4iLCJpc05vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJsaW5rIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJyZWwiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwibG9hZEpTU3luYyIsIml0ZXJhdG9yIiwic2NyaXB0cyIsIm1lcmdlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJudW1iZXIyc3RyaW5nIiwiYWJzIiwicG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVjdCIsInNjcm9sbFRvcCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwicG9zaXRpb25Nb3VzZSIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1pbiIsImZsb29yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJyYW5kb21OdW1iZXIiLCJzaXplIiwiY2VpbCIsInJlcyIsImZpbGwiLCJyYW5kb21TdHJpbmciLCJyYW5kb21JdGVtIiwiYXJyIiwicmVkaXJlY3QiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiZmlyc3RDaGlsZCIsInR5cGVPZiIsInNpbXBsZVR5cGVzIiwidCIsInR5cGVPZlN0cmljdCIsInVyaSIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsImRlbGF5IiwicmVwZWF0Iiwic2VsZiIsImh0IiwiaGMiLCJzdG9wIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lb3V0IiwibXMiLCJ0aGlzSW5zdCIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsInRpbWVvdXRTdG9wIiwiY2xlYXJUaW1lb3V0IiwiaW50ZXJ2YWxTdG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7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VEssc0NBbENTO0FBbUNURyxnQ0FuQ1M7QUFvQ1RJLDRCQXBDUztBQXFDVEcsd0NBckNTO0FBc0NUQyxzQkF0Q1M7QUF1Q1RwUDtBQXZDUyxDQUFiOztrQkEwQ2VxSCxJIiwiZmlsZSI6Im5hLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudFwiO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tIFwiLi9jb3JlL2V4dGVuc2lvblwiO1xuaW1wb3J0IGRlcGVuZGVuY3kgZnJvbSBcIi4vY29yZS9kZXBlbmRlbmN5XCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vY29yZS9yb3V0ZVwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuL2NvcmUvc3RhdGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL3N0YXRpYy9kZWZpbmVkXCI7XG5cbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uXG57XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGlmIChOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IChrZXkpID0+IHRoaXMuY29uZmlndXJhdGlvbltrZXldO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWJ1ZzogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicm9vdFwiLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWd1cmF0aW9uLmlkKSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uO1xuICAgICAgICB0aGlzLmV4dGVuc2lvbi5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxufVxuXG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xuIiwiXG5cbi8qKlxuICogTG9jYWxTdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gb3B0aW9uXG4gKiBAcmV0dXJucyB7e3NldDogKFN0b3JhZ2Uuc2V0fCopLCBnZXQ6IChTdG9yYWdlLmdldHwqKSwga2V5OiAoU3RvcmFnZS5rZXl8KiksIGNsZWFyOiAoU3RvcmFnZS5jbGVhcnwqKSwgcmVtb3ZlOiAoU3RvcmFnZS5yZW1vdmV8KiksIGxlbmd0aDogKFN0b3JhZ2UubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb29raWUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KG5hbWUpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFNldCBDb29raWUga2V5LCB2YWx1ZVxuICogIGV4cGlyZXMgLSBtcywgRGF0ZSwgLTEsIDBcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB7e319IG9wdGlvbnMgICB7ZXhwaXJlczogMCwgcGF0aDogJy8nLCBkb21haW46ICdzaXRlLmNvbScsIHNlY3VyZTogZmFsc2V9XG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMsIHR5cGVKc29uID0gdHJ1ZSlcbntcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXG4gICAgaWYgKENvb2tpZS50eXBlSnNvbikge31cbiAgICBpZiAodHlwZUpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBsZXQgZGF0YSA9IG5hbWUgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgcGFyc2VJbnQob3B0aW9ucy5leHBpcmVzKSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSArPSBlbmNvZGUob3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuY29va2llID0gZGF0YTtcbn07XG5cbi8qKlxuICogR2V0IENvb2tpZSB2YWx1ZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGdldCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlSnNvbiA9IHRydWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXG4gICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuICAgICkpO1xuXG4gICAgbGV0IGRhdGEgPSBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xuXG5cbiAgICBpZiAoQ29va2llLmRhdGFKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbiAmJiBkYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuXG4gICAgcmV0dXJuIGRhdGFcbn07XG5cbi8qKlxuICogUmVtb3ZlIENvb2tpZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gb3B0aW9uXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge2V4cGlyZXM6IC0xfTtcbiAgICBzZXQobmFtZSwgXCJcIiwgb3B0aW9uKTtcbn07XG5cbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICcnO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCB0byB1cmkgZ2V0IHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICAgIGV4YW1wbGU6IHtleHBpcmVzOiAwLCBwYXRoOiAnLycsIGRvbWFpbjogJ215LXNpdGUuY29tJywgc2VjdXJlOiBmYWxzZX1cbiAqIEByZXR1cm5zIHtzdHJpbmd9ICAgICAgICBleGFtcGxlOiBcImV4cGlyZXM9MDtwYXRoPS87ZG9tYWluPXNpdGUuY29tO3NlY3VyZT1mYWxzZVwiO1xuICovXG5jb25zdCBlbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAoc3RyID8gJzsnIDogJycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgICAgICkpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge30sXG4gICAgICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpO1xuXG4gICAgICAgIGNvb2tpZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBkYXRhW3BhcnRzWzBdLnRyaW0oKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn07XG5cbkNvb2tpZS5zZXQgPSBzZXQ7XG5Db29raWUuZ2V0ID0gZ2V0O1xuQ29va2llLnJlbW92ZSA9IHJlbW92ZTtcbkNvb2tpZS5jbGVhciA9IGNsZWFyO1xuQ29va2llLmVuY29kZSA9IGVuY29kZTtcbkNvb2tpZS5kZWNvZGUgPSBkZWNvZGU7XG5Db29raWUuZGF0YUpzb24gPSB0cnVlO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGVuY29kZSxcbiAgICBkZWNvZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQge0VWRU5UU19OQU1FU19CQVNJQ30gZnJvbSBcIi4uL2V2ZW50LW1hbmFnZXIvZXZlbnRzTmFtZXNcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuXG5jb25zdCBjb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIGNvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLnRlbXBsYXRlID09PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5vZGVdJykpXG4gICAgICAgICAgICAgICAgY29tcC5ub2RlID0gc2VhcmNoKCdbZGF0YS1ub2RlXScsICdkYXRhLW5vZGUnLCBjb21wLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbXAuc3R5bGVzKVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzKS5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICd0ZW1wbGF0ZScgJiYgaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzW3NlbGVjdG9yXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS5zdHlsZVtrZXldID0gY29tcC5zdHlsZXNbc2VsZWN0b3JdW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUFsbChzZWxlY3RvciwgY29tcC50ZW1wbGF0ZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLnN0eWxlc1tzZWxlY3Rvcl0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2tleV0gPSBjb21wLnN0eWxlc1tzZWxlY3Rvcl1ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlcihjb21wLCAnb24nLCBPYmplY3Qua2V5cyhFVkVOVFNfTkFNRVNfQkFTSUMpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbmplY3RDb21wb25lbnQgKGNvbXAsIHRoaXMpO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkxhdGUgQ2FsbFwiOiBDb21wb25lbnQgWycrY29tcC5pZCsnXSBjYW4gdCBjYWxsIGNvbXBsZXRlZCgpIGFuZCBpbmplY3RzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbXBvbmVudC5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSlcbntcbiAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICBPYmplY3Qua2V5cyhjb21wb25lbnQubGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gY29tcG9uZW50Lmxpc3Rba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluamVjdENvbXBvbmVudCAoY29tcCwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbXBvbmVudC5saXN0ID0ge307XG5cbmNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczogbnVsbCxcbiAgICAgICAgc3R5bGVzOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlciAoY29tcCwgcHJlZml4LCBldmVudHNOYW1lcykge1xuICAgIGNvbnN0IGFkZEV2ZW50ID0gKGVsZW0sIGF0dHIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBlbGVtLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW21ldGhvZF0uY2FsbChjb21wLCBlLCBlLnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQgfHwgZS5wYXRoWzBdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZXZlbnRzTmFtZXMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBwcmVmaXggKyAnLScgKyBldmVudE5hbWU7XG4gICAgICAgIGlmIChjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ1snK2F0dHIrJ10nKSkge1xuICAgICAgICAgICAgQXJyYXkuZnJvbShjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1snK2F0dHIrJ10nKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGVsZW0sIGF0dHIsIGV2ZW50TmFtZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50KGNvbXAudGVtcGxhdGUsIGF0dHIsIGV2ZW50TmFtZSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluamVjdENvbXBvbmVudCAoY29tcCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QWxsKCdbZGF0YS1jb21wb25lbnQ9XCInKyBjb21wLmlkICsnXCJdJywgaW5zdGFuY2Uucm9vdCk7XG5cbiAgICBpZiAobm9kZXMpXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgY29tcC5wcm9wcy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5vZGUuaGFzQXR0cmlidXRlKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcCwgcHJvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmdldEF0dHJpYnV0ZShwcm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmplY3Qobm9kZSwgY29tcC50ZW1wbGF0ZSlcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIiwiaW1wb3J0IGxvYWRKUyBmcm9tICcuLi9zdGF0aWMvbG9hZEpTJztcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBkZXBlbmRlbmN5ID0gZnVuY3Rpb24gKGNvbmZpZywgZm9yY2UgPSB0cnVlKVxue1xuICAgIGNvbnN0IHNvdXJjZXMgPSBtZXJnZSh7XG4gICAgICAgIGNzczogW10sXG4gICAgICAgIGpzOiBbXSxcbiAgICAgICAgZWxlbWVudHM6IFtdLFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICBpZiAoZm9yY2UpXG4gICAgICAgIGRlcGVuZGVuY3kubG9hZChzb3VyY2VzKTtcblxuICAgIHJldHVybiBzb3VyY2VzO1xufTtcblxuZGVwZW5kZW5jeS5sb2FkID0gKHNvdXJjZXMpID0+IHtcbiAgICBjb25zdCBtYXggPVxuICAgICAgICAoc291cmNlcy5jc3MgPyBzb3VyY2VzLmNzcy5sZW5ndGggOiAwKSArXG4gICAgICAgIChzb3VyY2VzLmpzID8gc291cmNlcy5qcy5sZW5ndGggOiAwKTtcbiAgICBjb25zdCBzcmNzID0gbWVyZ2Uoe2Nzczogc291cmNlcy5jc3N9LHtqczogc291cmNlcy5qc30pO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkID0ga2V5ID09PSAnY3NzJyA/IGxvYWRDU1MgOiBsb2FkSlM7XG4gICAgICAgIHNyY3Nba2V5XS5mb3JFYWNoKChzcmMpID0+IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VzLmVsZW1lbnRzLnB1c2gobG9hZChzcmMsKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpICsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZXMuY29tcGxldGUoc291cmNlcyk7XG4gICAgICAgICAgICAgICAgfSwgc291cmNlcy5lcnJvcikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmRlcGVuZGVuY3kucmVtb3ZlID0gZnVuY3Rpb24gKHNvdXJjZXMpXG57XG4gICAgY29uc3QgZWxlbWVudHMgPSBzb3VyY2VzICYmIHNvdXJjZXMuZWxlbWVudHMgPyBzb3VyY2VzLmVsZW1lbnRzIDogW107XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBzb3VyY2VzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwZW5kZW5jeTtcbiIsImltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cblxuY29uc3QgZXh0ZW5zaW9uID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvbi5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcCA9IGV4dGVuc2lvbi5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkICYmIHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbil7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5zaW9uLmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSlcbntcbiAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICBPYmplY3Qua2V5cyhleHRlbnNpb24ubGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmxpc3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChjb21wLmNvbXBsZXRlICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHRlbnNpb24ubGlzdCA9IHt9O1xuXG5leHRlbnNpb24uY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGwsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb250ZXh0OiBmYWxzZSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbjtcbiIsIlxuY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAodXJsLCBjb21wb25lbnQpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVybCkge1xuICAgICAgICB0aGlzW2NvbXBvbmVudF0oKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4uL3N0YXRpYy90eXBlT2YnO1xuXG5cbmNvbnN0IHN0YXRlID0gZnVuY3Rpb24gKGtleSwgZGF0YSkge1xuICAgIHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgPyBzdGF0ZS5nZXQoa2V5KSA6IHN0YXRlLnNldChrZXksIGRhdGEpO1xufTtcblxuc3RhdGUuY2FsbGJhY2sgPSB7fTtcbnN0YXRlLnNvdXJjZSA9IGNyZWF0ZVNvdXJjZSgpO1xuc3RhdGUuc291cmNlZGF0YSA9IHt9O1xuc3RhdGUuYWN0aW9uID0gZnVuY3Rpb24gKGtleSwgY2FsbGJhY2spIHtcbiAgICBzdGF0ZS5jYWxsYmFja1trZXldID0gY2FsbGJhY2s7XG59O1xuXG5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHR5cGVPZihrZXksICdzdHJpbmcnKVxuICAgICAgICA/IHN0YXRlLnNvdXJjZWRhdGFba2V5XSB8fCBzdGF0ZS5zb3VyY2Vba2V5XVxuICAgICAgICA6IGtleSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogc3RhdGUuc291cmNlZGF0YSA7XG59O1xuXG5zdGF0ZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuc2V0Q2FzZSh7W2tleV06IHBheWxvYWR9KTtcbn07XG5cbnN0YXRlLnNldENhc2UgPSBmdW5jdGlvbiAocGF5bG9hZCA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHN0YXRlLnNvdXJjZVtrZXldID0gc3RhdGUuc291cmNlZGF0YVtrZXldID0gcGF5bG9hZFtrZXldO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlIChwYXlsb2FkID0ge30pIHtcbiAgICBzdGF0ZS5zb3VyY2VkYXRhID0gcGF5bG9hZDtcbiAgICByZXR1cm4gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6KG9iaiwgcHJvcCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jYWxsYmFja1twcm9wXSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNhbGxiYWNrW3Byb3BdLmNhbGwoe30sIHN0YXRlLnNvdXJjZSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcbiIsImNvbnN0IERhdGV0aW1lID0ge307XG5EYXRldGltZS5NU19JTl9EQVkgPSA4NjRlNTtcbkRhdGV0aW1lLk1TX0lOX0hPVVIgPSAzNmU1O1xuRGF0ZXRpbWUuTVNfSU5fTUlOID0gNmU0O1xuXG4vKipcbiAqIFJldHVybiB0aW1lc3RhbXBcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5EYXRldGltZS50aW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBkYXRlLmdldFRpbWUoKSA6IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG59O1xuXG4vKipcbiAqIEFkZCBkYXlzIHRvIHNvbWUgZGF0ZVxuICogQHBhcmFtIGRheSAgICAgICAgICAgbnVtYmVyIG9mIGRheXMuIDAuMDQgLSAxIGhvdXIsIDAuNSAtIDEyIGhvdXIsIDEgLSAxIGRheVxuICogQHBhcmFtIGRhdGVTdGFydCAgICAgdHlwZSBEYXRlLCBzdGFydCBkYXRlXG4gKiBAcmV0dXJucyB7Kn0gIHR5cGUgRGF0ZVxuICovXG5EYXRldGltZS5hZGREYXlzID0gZnVuY3Rpb24gKGRheSwgZGF0ZVN0YXJ0KSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVTdGFydCA/IG5ldyBEYXRlKGRhdGVTdGFydCkgOiBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXkgKiA4NjQwMDAwMCkpO1xuICAgIHJldHVybiBkYXRlO1xufTtcblxuLyoqXG4gKiBUaW1lIGJldHdlZW4gRGF0ZXNcbiAqIDxwcmU+XG4gKiAgICAgdmFyIGZyb20gPSBuZXcgRGF0ZSgnMjAxNi0wOC0wMSAyMDozMCcpO1xuICogICAgIHZhciB0byA9IG5ldyBEYXRlKCcyMDE2LTA4LTEwIDA3OjU1Jyk7XG4gKiAgICAgLkRhdGUuYmV0d2VlbkRhdGVzKGZyb20sIHRvKTsgLy8gT2JqZWN0IHsgZGF5OiA4LCBob3VyOiAxMSwgbWludXRlOiAyNSB9XG4gKiA8L3ByZT5cbiAqIEBwYXJhbSBkYXRlRnJvbVxuICogQHBhcmFtIGRhdGVUb1xuICogQHJldHVybnMge3tkYXk6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcn19XG4gKi9cbkRhdGV0aW1lLmJldHdlZW5EYXRlcyA9IGZ1bmN0aW9uIChkYXRlRnJvbSwgZGF0ZVRvKSB7XG4gICAgZGF0ZUZyb20gPSBkYXRlRnJvbSB8fCBuZXcgRGF0ZSgpO1xuICAgIGRhdGVUbyA9IGRhdGVUbyB8fCBuZXcgRGF0ZSgpO1xuICAgIGxldCBkaWZmTXMgPSAoZGF0ZVRvIC0gZGF0ZUZyb20pLFxuICAgICAgICBkaWZmRGF5cyA9IE1hdGgucm91bmQoZGlmZk1zIC8gODY0ZTUpLFxuICAgICAgICBkaWZmSHJzID0gTWF0aC5yb3VuZCgoZGlmZk1zICUgODY0ZTUpIC8gMzZlNSksXG4gICAgICAgIGRpZmZNaW4gPSBNYXRoLnJvdW5kKCgoZGlmZk1zICUgODY0ZTUpICUgMzZlNSkgLyA2ZTQpO1xuICAgIHJldHVybiB7ZGF5OiBkaWZmRGF5cywgaG91cjogZGlmZkhycywgbWludXRlOiBkaWZmTWlufTtcbn07XG5cbi8qKlxuICogQ29udmVydCBkYXRlIHN0cmluZyB0byBEYXRlIE9iamVjdFxuICogeXkgLSB0aGUgeWVhciBhcyBhIHR3by1kaWdpdCBudW1iZXIgKCAwMCB0byA5OSApO1xuICogWVkgLSB0aGUgeWVhciBhcyBhIGZvdXItZGlnaXQgbnVtYmVyICggMTkwMC05OTk5ICk7XG4gKiBtbSAtIHRoZSBtb250aCBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDEgdG8gMTIgKSAoIDEgdG8gMTIgKTtcbiAqIGRkIC0gdGhlIGRheSBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDEgdG8gMzEgKSAoIDEgdG8gMzEgKTtcbiAqIGhoIEhIIC0gdGhlIGhvdXIgKCAwMCB0byAxMSApICggMDAgdG8gMjMgKSAoIDEgdG8gMTIgKSAoIDAgdG8gMjMgKTtcbiAqIGlpIC0gdGhlIG1pbnV0ZSBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDAgdG8gNTkgKTtcbiAqIHNzIC0gdGhlIHNlY29uZCBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDAgdG8gNTkgKTtcbiAqIGFhIC0gZGlzcGxheXMgYW0gKGZvciB0aW1lcyBmcm9tIG1pZG5pZ2h0IHVudGlsIG5vb24pIGFuZCBwbSAoZm9yIHRpbWVzIGZyb20gbm9vbiB1bnRpbCBtaWRuaWdodCk7XG4gKlxuICogLnN0clRvRGF0ZSgnMTIuMDUuMjAxNyAxMjozMDoyNScsICdtbS5kZC5ZWSBISDppaTpzcycpXG4gKiAuc3RyVG9EYXRlKCcxMi8wNS8yMDE3JywgJ21tL2RkL1lZJylcbiAqIC5zdHJUb0RhdGUoJzEyLzUvMjAxNycsICdtbS9kZC9ZWScsIHRydWUpXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIGZvcm1hdFxuICogQHBhcmFtIHV0Y1xuICogQHJldHVybnMge0RhdGV9XG4gKi9cbkRhdGV0aW1lLnN0clRvRGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQsIHV0Yykge1xuICAgIGNvbnN0IHNldCA9IFswLCAwLCAxLCAwLCAwLCAwXTtcbiAgICBjb25zdCB0ZW1wID0gZGF0ZS5tYXRjaCgvW2EtekEtWl0rfFswLTldKy9nKTtcbiAgICBjb25zdCBtYXNrID0gZm9ybWF0Lm1hdGNoKC9bYS16QS1aXXsyfS9nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChtYXNrW2ldKSB7XG4gICAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgICAgICBzZXRbMl0gPSB0ZW1wW2ldIHx8IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgICAgICBzZXRbMV0gPSAodGVtcFtpXSB8fCAxKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICAgICAgICBzZXRbMF0gPSB0ZW1wW2ldICogMSArICh0ZW1wW2ldID4gNTAgPyAxOTAwIDogMjAwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGhcIjpcbiAgICAgICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgICAgICAgIHNldFszXSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICAgICAgICAgIHNldFs0XSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZWVwiOlxuICAgICAgICAgICAgICAgIHNldFswXSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICAgICAgICAgIHNldFszXSA9IHNldFszXSAlIDEyICsgKCh0ZW1wW2ldIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAnYW0nID8gMCA6IDEyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgICAgICAgIHNldFs1XSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHV0Yykge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoc2V0WzBdLCBzZXRbMV0sIHNldFsyXSwgc2V0WzNdLCBzZXRbNF0sIHNldFs1XSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoc2V0WzBdLCBzZXRbMV0sIHNldFsyXSwgc2V0WzNdLCBzZXRbNF0sIHNldFs1XSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRldGltZTtcblxuLypcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBNU19JTl9EQVk6IERhdGV0aW1lLk1TX0lOX0RBWSxcbiAgICBNU19JTl9IT1VSOiBEYXRldGltZS5NU19JTl9IT1VSLFxuICAgIE1TX0lOX01JTjogRGF0ZXRpbWUuTVNfSU5fTUlOLFxuICAgIHRpbWU6IERhdGV0aW1lLnRpbWUsXG4gICAgYWRkRGF5czogRGF0ZXRpbWUuYWRkRGF5cyxcbiAgICBiZXR3ZWVuRGF0ZXM6IERhdGV0aW1lLmJldHdlZW5EYXRlcyxcbiAgICBzdHJUb0RhdGU6IERhdGV0aW1lLnN0clRvRGF0ZSxcbn07XG4qL1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuXG5pbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuZnVuY3Rpb24gRG9tIChzZWxlY3Rvcikge1xuICAgIGNvbnN0ICQgPSB7XG4gICAgICAgIHNlbGVjdG9yOiB0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSA/IHNlbGVjdG9yIDogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWQ6IGlzTm9kZShzZWxlY3RvcikgPyBbc2VsZWN0b3JdIDogcXVlcnlBbGwoc2VsZWN0b3IpLFxuICAgIH07XG5cbiAgICBjb25zdCBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgcXVlcnlBbGwoc3JjKS5tYXAoX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTm9kZShzcmMpICYmIHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzcmMuc3R5bGUuZGlzcGxheSA/IHNyYy5zdHlsZS5kaXNwbGF5IDogZ2V0Q29tcHV0ZWRTdHlsZShzcmMpLmRpc3BsYXk7XG4gICAgICAgICAgICBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID0gKCFzdHlsZSB8fCBzdHlsZSA9PT0gJ25vbmUnKSA/ICdibG9jaycgOiBzdHlsZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLm9uZSA9ICgpID0+ICQuc2VsZWN0ZWQgJiYgJC5zZWxlY3RlZC5sZW5ndGggPyAkLnNlbGVjdGVkWzBdIDogZmFsc2U7XG4gICAgJC5hbGwgPSAoKSA9PiAkLnNlbGVjdGVkO1xuICAgICQuYXR0ciA9IChuYW1lLCB2YWx1ZSkgPT4gZGVmaW5lZCh2YWx1ZSkgPyBhdHRyKCQub25lKCksIG5hbWUsIHZhbHVlKSA6IGF0dHIoJC5vbmUoKSwgbmFtZSk7XG4gICAgJC5pbmplY3QgPSAoZGF0YSwgYXBwZW5kLCB0bykgPT4gaW5qZWN0KCQub25lKCksIGRhdGEsIGFwcGVuZCwgdG8pO1xuICAgICQuYXBwZW5kID0gKGRhdGEpID0+IGluamVjdCgkLm9uZSgpLCBkYXRhLCB0cnVlKTtcbiAgICAkLnNlYXJjaCA9IChhdHRyLCBmcm9tKSA9PiBzZWFyY2goJC5vbmUoKSwgYXR0ciwgZnJvbSk7XG4gICAgJC5wYXJlbnQgPSAoKSA9PiAkLm9uZSgpLnBhcmVudE5vZGU7XG4gICAgJC5jaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgJC5vbmUoKVxuICAgIH07XG4gICAgJC5wb3NpdGlvbiA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpO1xuICAgICQueCA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLng7XG4gICAgJC55ID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkueTtcbiAgICAkLndpZHRoID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkud2lkdGg7XG4gICAgJC5oZWlnaHQgPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS5oZWlnaHQ7XG4gICAgJC5yZW1vdmUgPSAoKSA9PiAkLm9uZSgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJC5vbmUoKSk7XG4gICAgJC5zaG93ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZShzcmMpO1xuICAgICAgICBjc3Moc3JjLCB7ZGlzcGxheTogc3JjICYmIHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gPyBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddIDogJ2Jsb2NrJ30pO1xuICAgIH07XG4gICAgJC5oaWRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZShzcmMpO1xuICAgICAgICBjc3Moc3JjLCB7ZGlzcGxheTogJ25vbmUnfSk7XG4gICAgfTtcbiAgICAkLnRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gJC5vbmUoKTtcbiAgICAgICAgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgcXVlcnlBbGwoc3JjKS5tYXAoRG9tLnRvZ2dsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlKHNyYykpIHtcbiAgICAgICAgICAgIGlmIChzcmMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSBEb20uc2hvdyhzcmMpO1xuICAgICAgICAgICAgZWxzZSBEb20uaGlkZShzcmMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAkLm9uID0gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkgPT4gb24oJC5vbmUoKSwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKTtcbiAgICAkLmNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gJC5vbmUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlKHt0b3A6IGNvb3Jkcy50b3AgKyBwYWdlWU9mZnNldCwgbGVmdDogY29vcmRzLmxlZnQgKyBwYWdlWE9mZnNldH0sIGNvb3Jkcyk7XG4gICAgfTtcbiAgICByZXR1cm4gJDtcbn1cblxuRG9tLmF0dHIgPSBhdHRyO1xuRG9tLmNzcyA9IGNzcztcbkRvbS5sb2FkZWQgPSBkb21Mb2FkZWQ7XG5Eb20uaW5qZWN0ID0gaW5qZWN0O1xuRG9tLnN0cjJub2RlID0gc3RyMm5vZGU7XG5Eb20uc2VhcmNoID0gc2VhcmNoO1xuRG9tLnF1ZXJ5QWxsID0gcXVlcnlBbGw7XG5Eb20ucXVlcnkgPSBxdWVyeTtcbkRvbS5jcmVhdGUgPSBjcmVhdGVFbGVtZW50O1xuRG9tLmZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQ7XG5Eb20ubm9kZTJzdHIgPSBub2RlMnN0cjtcbkRvbS5zdHIybm9kZSA9IHN0cjJub2RlO1xuRG9tLnBvc2l0aW9uID0gcG9zaXRpb247XG5cblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiLyoqXG4gKiBFbW1ldCBzeW50YXggZm9yIGNyZWF0aW5nIERPTSBlbGVtZW50c1xuICpcbiAqIFN5bnRheFxuICogICBjb25zdCBlbW1ldCA9IEVtbWV0KCk7XG4gKiAgIGVtbWV0KCcudGFibGUgPiBkaXZ7bGVmdH0gKyBkaXYoY2xhc3M9XCJ0ZXh0LXJpZ2h0XCIpe3JpZ2h0fScpXG4gKiAgIHRhZyNpZC5jbGFzc2VzKGF0dHJpYnV0ZXM9XCJcIil7aW5uZXIgdGV4dH0gPiAubmVzdGVkIF4gLmJhY2tlZC51cC5vbmUgKyAuc2libGluZ1xuICpcbiAqIEFyZ3VtZW50c1xuICogICAuZW1tZXQoIHN5bnRheCA6IHN0cmluZywgcmV0dXJuT25seUhUTUwgOiBib29sZWFuIClcbiAqXG4gKiBAbmFtZXNwYWNlIEVtbWV0XG4gKiBAdHlwZSBmdW5jdGlvblxuICogQHBhcmFtIHRleHQgICAgICAgICAgc3ludGF4XG4gKiBAcGFyYW0gaHRtbE9ubHkgICAgICByZXR1cm5Pbmx5SFRNTFxuICogQHJldHVybnMge3N0cmluZ3wqfVxuICovXG5jb25zdCBFbW1ldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgIHRlbXBJbm5lclRleHRzID0gW107XG4gICAgbGV0ICB0ZW1wRXNjYXBlZCA9IFtdO1xuICAgIGNvbnN0IHJlID0ge307XG5cbiAgICByZS5leGNsdWRlcyA9IFwiKFteXFxcXC4jXFxcXChcXFxce10rKVwiO1xuICAgIHJlLmNsYXNzZXMgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIiArIHJlLmV4Y2x1ZGVzLCBcImdcIik7XG4gICAgcmUuaWQgPSBuZXcgUmVnRXhwKFwiI1wiICsgcmUuZXhjbHVkZXMsIFwiZ1wiKTtcbiAgICByZS50YWcgPSBuZXcgUmVnRXhwKFwiXlwiICsgcmUuZXhjbHVkZXMpO1xuICAgIHJlLmluZGV4ZXMgPSAvKC4rPykoPnxcXCt8XFxefCQpL2c7XG4gICAgcmUuZXNjYXBlID0gLyhcInwnKShbXlxcMV0qPylcXDEvZztcbiAgICByZS5pbm5lclRleHQgPSAvXFx7KFtefV0qPyl9L2c7XG4gICAgcmUuYXR0cnMgPSAvXFwoKFteXFwpXSopXFwpL2c7XG5cbiAgICBjb25zdCBlbW1ldCA9IGZ1bmN0aW9uICh0ZXh0LCBodG1sT25seSkge1xuICAgICAgICBsZXQgdHJlZSA9IGVsZW1lbnQoKSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0cmVlLFxuICAgICAgICAgICAgbGFzdEVsZW1lbnQgPSB0cmVlLFxuICAgICAgICAgICAgY29tbWFuZFRleHQgPSB0ZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICBjb252ZXJ0Q29sbGVjdGlvbiA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3JjLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3JjWzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0O1xuXG4gICAgICAgIHRlbXBJbm5lclRleHRzID0gW107XG4gICAgICAgIHRlbXBFc2NhcGVkID0gW107XG4gICAgICAgIGNvbW1hbmRUZXh0XG4gICAgICAgICAgICAucmVwbGFjZShyZS5lc2NhcGUsIGZ1bmN0aW9uIChmdWxsLCBxdW90ZXMsIGVzY2FwZSkge1xuICAgICAgICAgICAgICAgIHRlbXBFc2NhcGVkLnB1c2goZXNjYXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcXFwiXFxcIlwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmlubmVyVGV4dCwgZnVuY3Rpb24gKGZ1bGwsIGlubmVyVGV4dCkge1xuICAgICAgICAgICAgICAgIHRlbXBJbm5lclRleHRzLnB1c2goaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ7fVwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShyZS5pbmRleGVzLCBmdW5jdGlvbiAoZnVsbCwgZWxlbWVudFRleHQsIHNwbGl0dGVyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCA9IGVsZW1lbnQoZWxlbWVudFRleHQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09IFwiPlwiKVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gbGFzdEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3BsaXR0ZXIgPT09IFwiXlwiKVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0ID0gdHJlZS5jaGlsZHJlbi5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IHRyZWUuY2hpbGRyZW5cbiAgICAgICAgICAgIDogdHJlZS5jaGlsZHJlblswXTtcblxuICAgICAgICByZXR1cm4gaHRtbE9ubHlcbiAgICAgICAgICAgID8gdHJlZS5pbm5lckhUTUxcbiAgICAgICAgICAgIDogKHJlc3VsdCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uID8gY29udmVydENvbGxlY3Rpb24ocmVzdWx0KSA6IHJlc3VsdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBsZXQgY29tbWFuZFRleHQgPSB0ZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICBtYXRjaF90YWcgPSBjb21tYW5kVGV4dC5tYXRjaChyZS50YWcpLFxuICAgICAgICAgICAgbWF0Y2hfaWQgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5pZCksXG4gICAgICAgICAgICBtYXRjaF9jbGFzc2VzID0gY29tbWFuZFRleHQubWF0Y2gocmUuY2xhc3NlcyksXG4gICAgICAgICAgICBtYXRjaF9hdHRycyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmF0dHJzKSxcbiAgICAgICAgICAgIG1hdGNoX2lubmVyVGV4dCA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmlubmVyVGV4dCksXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtYXRjaF90YWcgPyBtYXRjaF90YWdbMF0gOiBcImRpdlwiKTtcblxuICAgICAgICBpZiAobWF0Y2hfaWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBtYXRjaF9pZC5wb3AoKS5yZXBsYWNlKHJlLmlkLCBcIiQxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2NsYXNzZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gbWF0Y2hfY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWUuc2xpY2UoMSlcbiAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2lubmVyVGV4dCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gbWF0Y2hfaW5uZXJUZXh0Lm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZXNjYXBlKHRlbXBJbm5lclRleHRzLnNoaWZ0KCkpO1xuICAgICAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfYXR0cnMpIHtcbiAgICAgICAgICAgIG1hdGNoX2F0dHJzLm1hcChmdW5jdGlvbiAoY2h1bmtQYXJhbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtQYXJhbS5yZXBsYWNlKHJlLmF0dHJzLCBcIiQxXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBjaHVuay5tYXAoZnVuY3Rpb24gKGF0dHJQYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0clBhcmFtLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXR0ci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEpTT04ucGFyc2UodW5lc2NhcGUoYXR0ci5qb2luKFwiPVwiKSkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBlbW1ldDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtbWV0O1xuIiwiXG5leHBvcnQgY29uc3QgRVZFTlRTX05BTUVTID0ge1xuICAgIGNvcHk6ICdjb3B5JyxcbiAgICBjdXQ6ICdjdXQnLFxuICAgIHBhc3RlOiAncGFzdGUnLFxuICAgIGFib3J0OiAnYWJvcnQnLFxuICAgIGJsdXI6ICdibHVyJyxcbiAgICBjYW5jZWw6ICdjYW5jZWwnLFxuICAgIGNhbnBsYXk6ICdjYW5wbGF5JyxcbiAgICBjYW5wbGF5dGhyb3VnaDogJ2NhbnBsYXl0aHJvdWdoJyxcbiAgICBjaGFuZ2U6ICdjaGFuZ2UnLFxuICAgIGNsaWNrOiAnY2xpY2snLFxuICAgIGNsb3NlOiAnY2xvc2UnLFxuICAgIGNvbnRleHRtZW51OiAnY29udGV4dG1lbnUnLFxuICAgIGN1ZWNoYW5nZTogJ2N1ZWNoYW5nZScsXG4gICAgZGJsY2xpY2s6ICdkYmxjbGljaycsXG4gICAgZHJhZzogJ2RyYWcnLFxuICAgIGRyYWdlbmQ6ICdkcmFnZW5kJyxcbiAgICBkcmFnZW50ZXI6ICdkcmFnZW50ZXInLFxuICAgIGRyYWdsZWF2ZTogJ2RyYWdsZWF2ZScsXG4gICAgZHJhZ292ZXI6ICdkcmFnb3ZlcicsXG4gICAgZHJhZ3N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgICBkcm9wOiAnZHJvcCcsXG4gICAgZHVyYXRpb25jaGFuZ2U6ICdkdXJhdGlvbmNoYW5nZScsXG4gICAgZW1wdGllZDogJ2VtcHRpZWQnLFxuICAgIGVuZGVkOiAnZW5kZWQnLFxuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIGZvY3VzOiAnZm9jdXMnLFxuICAgIGlucHV0OiAnaW5wdXQnLFxuICAgIGludmFsaWQ6ICdpbnZhbGlkJyxcbiAgICBrZXlkb3duOiAna2V5ZG93bicsXG4gICAga2V5cHJlc3M6ICdrZXlwcmVzcycsXG4gICAga2V5dXA6ICdrZXl1cCcsXG4gICAgbG9hZDogJ2xvYWQnLFxuICAgIGxvYWRlZGRhdGE6ICdsb2FkZWRkYXRhJyxcbiAgICBsb2FkZWRtZXRhZGF0YTogJ2xvYWRlZG1ldGFkYXRhJyxcbiAgICBsb2Fkc3RhcnQ6ICdsb2Fkc3RhcnQnLFxuICAgIG1vdXNlZG93bjogJ21vdXNlZG93bicsXG4gICAgbW91c2VlbnRlcjogJ21vdXNlZW50ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZWxlYXZlJyxcbiAgICBtb3VzZW1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIG1vdXNlb3V0OiAnbW91c2VvdXQnLFxuICAgIG1vdXNlb3ZlcjogJ21vdXNlb3ZlcicsXG4gICAgbW91c2V1cDogJ21vdXNldXAnLFxuICAgIG1vdXNld2hlZWw6ICdtb3VzZXdoZWVsJyxcbiAgICBwYXVzZTogJ3BhdXNlJyxcbiAgICBwbGF5OiAncGxheScsXG4gICAgcGxheWluZzogJ3BsYXlpbmcnLFxuICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxuICAgIHJhdGVjaGFuZ2U6ICdyYXRlY2hhbmdlJyxcbiAgICByZXNldDogJ3Jlc2V0JyxcbiAgICByZXNpemU6ICdyZXNpemUnLFxuICAgIHNjcm9sbDogJ3Njcm9sbCcsXG4gICAgc2Vla2VkOiAnc2Vla2VkJyxcbiAgICBzZWVraW5nOiAnc2Vla2luZycsXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICBzdGFsbGVkOiAnc3RhbGxlZCcsXG4gICAgc3VibWl0OiAnc3VibWl0JyxcbiAgICBzdXNwZW5kOiAnc3VzcGVuZCcsXG4gICAgdGltZXVwZGF0ZTogJ3RpbWV1cGRhdGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZScsXG4gICAgdm9sdW1lY2hhbmdlOiAndm9sdW1lY2hhbmdlJyxcbiAgICB3YWl0aW5nOiAnd2FpdGluZycsXG4gICAgd2hlZWw6ICd3aGVlbCcsXG4gICAgYXV4Y2xpY2s6ICdhdXhjbGljaycsXG4gICAgZ290cG9pbnRlcmNhcHR1cmU6ICdnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgbG9zdHBvaW50ZXJjYXB0dXJlOiAnbG9zdHBvaW50ZXJjYXB0dXJlJyxcbiAgICBwb2ludGVyZG93bjogJ3BvaW50ZXJkb3duJyxcbiAgICBwb2ludGVybW92ZTogJ3BvaW50ZXJtb3ZlJyxcbiAgICBwb2ludGVydXA6ICdwb2ludGVydXAnLFxuICAgIHBvaW50ZXJjYW5jZWw6ICdwb2ludGVyY2FuY2VsJyxcbiAgICBwb2ludGVyb3ZlcjogJ3BvaW50ZXJvdmVyJyxcbiAgICBwb2ludGVyb3V0OiAncG9pbnRlcm91dCcsXG4gICAgcG9pbnRlcmVudGVyOiAncG9pbnRlcmVudGVyJyxcbiAgICBwb2ludGVybGVhdmU6ICdwb2ludGVybGVhdmUnLFxuICAgIHNlbGVjdHN0YXJ0OiAnc2VsZWN0c3RhcnQnLFxuICAgIHNlbGVjdGlvbmNoYW5nZTogJ3NlbGVjdGlvbmNoYW5nZScsXG4gICAgYW5pbWF0aW9uZW5kOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBhbmltYXRpb25pdGVyYXRpb246ICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgIGFuaW1hdGlvbnN0YXJ0OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHRyYW5zaXRpb25lbmQ6ICd0cmFuc2l0aW9uZW5kJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFVkVOVFNfTkFNRVNfQkFTSUMgPSB7XG4gICAgYmx1cjogJ2JsdXInLFxuICAgIGNoYW5nZTogJ2NoYW5nZScsXG4gICAgY2xpY2s6ICdjbGljaycsXG4gICAgZGJsY2xpY2s6ICdkYmxjbGljaycsXG4gICAgZHJhZzogJ2RyYWcnLFxuICAgIGRyb3A6ICdkcm9wJyxcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBpbnB1dDogJ2lucHV0JyxcbiAgICBsb2FkOiAnbG9hZCcsXG4gICAgbW91c2Vkb3duOiAnbW91c2Vkb3duJyxcbiAgICBtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZScsXG4gICAgbW91c2VvdXQ6ICdtb3VzZW91dCcsXG4gICAgbW91c2VvdmVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZXVwOiAnbW91c2V1cCcsXG4gICAgbW91c2V3aGVlbDogJ21vdXNld2hlZWwnLFxuICAgIHNjcm9sbDogJ3Njcm9sbCcsXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICBzdWJtaXQ6ICdzdWJtaXQnLFxuICAgIHdoZWVsOiAnd2hlZWwnLFxuICAgIHRyYW5zaXRpb25lbmQ6ICd0cmFuc2l0aW9uZW5kJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVWRU5UU19OQU1FUztcbiIsIlxuY29uc3QgRXZlbnRNYW5hZ2VyID0ge1xuXG4gICAgZXZlbnRGcmFnbWVudDogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgIHZlcnNpb246ICcwLjAuMicsXG4gICAgZXZlbnRzVHlwZToge30sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGV0YWlsc1xuICAgICAqIEByZXR1cm5zIHtDdXN0b21FdmVudH1cbiAgICAgKi9cbiAgICBhZGRFdmVudDogZnVuY3Rpb24obmFtZSwgZGV0YWlscykge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7ZGV0YWlsOiBkZXRhaWxzfSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlscyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkZXRhaWxzKVxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZXZlbnRba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlIG9uIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICogQHJldHVybnMge3t0eXBlOiAqLCBsaXN0ZW5lcjogKiwgdXNlQ2FwdHVyZTogKCp8Ym9vbGVhbil9fVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSl7XG4gICAgICAgIHVzZUNhcHR1cmUgPSB1c2VDYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0gaW5zdGFuY2VvZiBDdXN0b21FdmVudClcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LmRpc3BhdGNoRXZlbnQoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWFuYWdlcjtcbiIsIi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldFxuICAgICAgICBrZXksXG4gICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucy5kYXRhKVxuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBOYW1lc3BhY2VBcHBsaWNhdGlvbiBmcm9tIFwiLi9OYW1lc3BhY2VBcHBsaWNhdGlvblwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwiLi9jb29raWVcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBEYXRldGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmltcG9ydCBFbW1ldCBmcm9tIFwiLi9lbW1ldFwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuL2h0dHAtcmVxdWVzdFwiO1xuaW1wb3J0IERvbSBmcm9tIFwiLi9kb21cIjtcblxuXG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5VdGlsID0gVXRpbDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Db29raWUgPSBDb29raWU7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uU3RvcmFnZSA9IFN0b3JhZ2U7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRGF0ZXRpbWUgPSBEYXRldGltZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5FdmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uVGltZXIgPSBUaW1lcjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5FbW1ldCA9IEVtbWV0O1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLmh0dHBSZXF1ZXN0ID0gaHR0cFJlcXVlc3Q7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRG9tID0gRG9tO1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5cblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGFkZFByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUoISFhZGRQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3JjLmJpbmQoe30pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknIHx8IHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNyYykpO1xuICAgICAgICBpZiAodHlwZU9mKGFkZFByb3BlcnRpZXMsICdvYmplY3QnKSB8fCB0eXBlT2YoYWRkUHJvcGVydGllcywgJ2FycmF5JykpXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhZGRQcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0gPSBhZGRQcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGRlZmluZWQoYWRkUHJvcGVydGllcykgPyBzcmMgKyBhZGRQcm9wZXJ0aWVzIDogc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5lYWNoLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbn07XG5cbmVhY2guZmlsdGVyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGNhbGxiYWNrLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFjaDtcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW10sIGxpc3QgPSB2YWx1ZXMgfHwgW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcbiAgICByZXR1cm4gdG1wO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYXRpb24pXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50KCk7XG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnRFbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9ICdyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuY29uc3QgcG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJylcbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gKEFCQyArIE5VTUJFUlMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9XG4gICAgICAgICAgICBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IGksIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG5cbiAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSA/IGZyYWdtZW50LmZpcnN0Q2hpbGQgOiBmcmFnbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIiwiXG5cbi8qKlxuICogQWRkIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBqc29uID0gdHJ1ZSkge1xuICAgIGlmIChqc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBHZXQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIGpzb24gPSB0cnVlKSB7XG4gICAgbGV0IHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmIChqc29uICYmIHZhbHVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqdHJ1ZVxuICogUmVtb3ZlIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IGluZGV4XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGtleSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmtleShpbmRleClcbn07XG5cbi8qKlxuICogV2hlbiBpbnZva2VkLCB3aWxsIGVtcHR5IGFsbCBrZXlzIG91dCBvZiB0aGUgc3RvcmFnZS5cbiAqL1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGF0YSBpdGVtcyBzdG9yZWQgaW4gdGhlIFN0b3JhZ2Ugb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aFxufTtcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHt7c2V0OiAoU3RvcmFnZS5zZXR8KiksIGdldDogKFN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTdG9yYWdlLmtleXwqKSwgY2xlYXI6IChTdG9yYWdlLmNsZWFyfCopLCByZW1vdmU6IChTdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU3RvcmFnZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0b3JhZ2UgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXQobmFtZSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgc2V0LFxuICAgIGdldCxcbiAgICBrZXksXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGxlbmd0aCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iLCIvKipcbiAqIFNpbXBsZSB0aW1lciByZWFsaXNlLiBSZXR1cm4gc2VsZi1pbnN0YW5jZVxuICogdGltZXIgPSBuZXcgLlRpbWVyKGZ1bmN0aW9uKGl0ZXJhdG9yLCByZXBlYXQpe30sIDEwMDAsIDUpXG4gKiAgSW5zdGFuY2UgbWV0aG9kc1xuICogICAgICB0aW1lci5yZXBlYXRcbiAqICAgICAgdGltZXIuaXRlcmF0b3JcbiAqICAgICAgdGltZXIuc3RhcnQgKClcbiAqICAgICAgdGltZXIuc3RvcCAoKVxuICogICAgICB0aW1lci5wYXVzZSAoKVxuICogICAgICB0aW1lci5yZXNldCAoKVxuICogICAgICB0aW1lci5jbGVhciAoKVxuICogIFN0YXRpYyBtZXRob2RzXG4gKiAgICAgIFRpbWVyLnRpbWVvdXQgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogdGltZW91dElkXG4gKiAgICAgIFRpbWVyLmludGVydmFsIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSA6IGludGVydmFsSWRcbiAqICAgICAgVGltZXIudGltZW91dFN0b3AgKHRpbWVvdXRJZClcbiAqICAgICAgVGltZXIuaW50ZXJ2YWxTdG9wIChpbnRlcnZhbElkKVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEBwYXJhbSByZXBlYXRcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2UgIGlmIG5vdCBzZXQsIHVzZXMgaW5zdGFuY2Ugb2YgVGltZXJcbiAqIEByZXR1cm5zIHtXaW5kb3cuVGltZXJ8VGltZXJ9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUaW1lcikpXG4gICAgICAgIHJldHVybiBuZXcgVGltZXIoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSk7XG5cbiAgICBkZWxheSA9IGRlbGF5ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChkZWxheSkgOiA1MDA7XG4gICAgcmVwZWF0ID0gcmVwZWF0ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChyZXBlYXQpIDogMDtcbiAgICBjb25zdCBjb25maWcgPSB7c2VsZjogdGhpcywgY2FsbGJhY2s6IGNhbGxiYWNrLCBkZWxheTogZGVsYXksIHJlcGVhdDogcmVwZWF0fTtcblxuICAgIGxldCBodCA9IG51bGw7XG4gICAgY29uc3QgaGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbmZpZy5zZWxmLml0ZXJhdG9yKys7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ICE9PSAwICYmIGNvbmZpZy5yZXBlYXQgPD0gY29uZmlnLnNlbGYuaXRlcmF0b3IpXG4gICAgICAgICAgICBjb25maWcuc2VsZi5zdG9wKCk7XG4gICAgICAgIGNvbmZpZy5jYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB0aGlzLCBjb25maWcuc2VsZi5pdGVyYXRvciwgY29uZmlnLnJlcGVhdCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ID09PSAwIHx8IGNvbmZpZy5yZXBlYXQgPiBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGh0ID0gc2V0SW50ZXJ2YWwoaGMsIGNvbmZpZy5kZWxheSk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjb25maWcucmVwZWF0O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKClcbiAgICB9O1xuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSAwXG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKGh0KVxuICAgIH07XG59O1xuXG5UaW1lci50aW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5pbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnRpbWVvdXRTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmludGVydmFsU3RvcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7ZXh0ZW5kUmVjdXJzaXZlfSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7cmFuZG9tQ29sb3IsIHJhbmRvbUl0ZW0sIHJhbmRvbU51bWJlciwgcmFuZG9tU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5jb25zdCBVdGlsID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGluamVjdCxcbiAgICBzdHIybm9kZSxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBzZWFyY2gsXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iXSwic291cmNlUm9vdCI6IiJ9