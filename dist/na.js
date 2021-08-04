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

    this.config = function (key, value) {
        return value === undefined ? _this.configuration[key] : _this.configuration[key] = value;
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
    // this.state = state;

    NamespaceApplication.instance = this;
};

NamespaceApplication.component = _component2.default;
NamespaceApplication.extension = _extension2.default;
NamespaceApplication.DEBUG = true;

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
 * @returns {{set: (Cookie.set|*), get: (Cookie.get|*), key: (Cookie.key|*), clear: (Cookie.clear|*), remove: (Cookie.remove|*), length: (Cookie.length|*)}}
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
 *  maxAge - s (year 31536000)
 *  SameSite=Strict|Lax
 * @param name
 * @param value
 * @param {{}} options   {expires: 0, path: '/', domain: 'site.com', secure: false, maxAge: 60*60*24*365, sameSite: '' }
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

    if (options.maxAge) {
        options['max-age'] = options.maxAge;
        delete options.maxAge;
    }
    if (options.sameSite) {
        options['samesite'] = options.sameSite;
        delete options.sameSite;
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
        if (data[key] !== undefined) str += ';' + key + '=' + encodeURIComponent(data[key]);
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

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _eventsNames = __webpack_require__(/*! ../event-manager/eventsNames */ "./src/event-manager/eventsNames.js");

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

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
            comp.template = (0, _str2node2.default)(comp.template);
        }

        if ((0, _isNode2.default)(comp.template)) {

            if (comp.template.querySelector('[data-node]')) comp.node = (0, _search2.default)('[data-node]', 'data-node', comp.template);

            if (comp.styles) setStyles(comp);

            attributesEventsHandler(comp, 'on', Object.keys(_eventsNames.EVENTS_NAMES_BASIC));
        }

        if (this instanceof NamespaceApplication) {
            injectComponent(comp, this);
            if (!comp.template && this.root) {
                var node = (0, _query2.default)('[data-component="' + comp.id + '"]', this.root);
                if (node) comp.template = node;
            }
        } else {
            if (NamespaceApplication.mode === NamespaceApplication.MODE_DEBUG) throw new Error('"Late Call": Component [' + comp.id + '] can t call completed() and injects');
        }

        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }
    }
};

component.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(component.list).forEach(function (key) {
            var comp = component.list[key];

            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
                injectComponent(comp, instance);
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
        template: false,
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
        if (comp.template && comp.template !== node) {
            (0, _inject2.default)(node, comp.template);
        }
    });

    return comp;
}

function setStyles(comp, instance) {

    Object.keys(comp.styles).forEach(function (selector) {
        if (selector === 'template' && (0, _isNode2.default)(comp.template)) {
            Object.keys(comp.styles[selector]).forEach(function (key) {
                comp.template.style[key] = comp.styles[selector][key];
            });
        } else (0, _queryAll2.default)(selector, comp.template, function (node) {
            Object.keys(comp.styles[selector]).forEach(function (key) {
                node.style[key] = comp.styles[selector][key];
            });
        });
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

var sourcedata = {};
var state = function state(key, data) {
    return data === undefined ? state.get(key) : state.set(key, data);
};

state.callback = {};
state.source = createSource();
state.create = createSource();
state.action = function (key, callback) {
    state.callback[key] = callback;
};

state.get = function (key) {
    return (0, _typeOf2.default)(key, 'string') ? sourcedata[key] || state.source[key] : key === undefined ? null : sourcedata;
};

state.set = function (key, payload) {
    state.setCase(_defineProperty({}, key, payload));
};

state.setCase = function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object.keys(payload).forEach(function (key) {
        state.source[key] = sourcedata[key] = payload[key];
    });
};

function createSource() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    sourcedata = payload;
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
 * Datetime.strToDate('12.05.2017 12:30:25', 'mm.dd.YY HH:ii:ss')
 * Datetime.strToDate('12/05/2017', 'mm/dd/YY')
 * Datetime.strToDate('12/5/2017', 'mm/dd/YY', true)
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
    var root = {
        selector: (0, _typeOf2.default)(selector, 'string') ? selector : null,
        selected: (0, _isNode2.default)(selector) ? [selector] : (0, _queryAll2.default)(selector)
    };
    root.selected.forEach(function (elem, i) {
        root[i] = elem;
    });

    var _set_real_display_style = function _set_real_display_style(src) {
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(_set_real_display_style);
        } else if ((0, _isNode2.default)(src) && src['real-display-style'] === undefined) {
            var style = src.style.display ? src.style.display : getComputedStyle(src).display;
            src['real-display-style'] = !style || style === 'none' ? 'block' : style;
        }
    };

    root.one = function () {
        return root.selected && root.selected.length ? root.selected[0] : false;
    };
    root.all = function () {
        return root.selected;
    };
    root.attr = function (name, value) {
        return (0, _defined2.default)(value) ? (0, _attr2.default)(root.one(), name, value) : (0, _attr2.default)(root.one(), name);
    };
    root.inject = function (data, append, to) {
        return (0, _inject2.default)(root.one(), data, append, to);
    };
    root.append = function (data) {
        return (0, _inject2.default)(root.one(), data, true);
    };
    root.search = function (attr, from) {
        return (0, _search2.default)(root.one(), attr, from);
    };
    root.parent = function () {
        return root.one().parentNode;
    };
    root.children = function () {
        root.one();
    };
    root.position = function () {
        return (0, _position2.default)(root.one());
    };
    root.query = function (selector) {
        return root.one().querySelector(selector);
    };
    root.queryAll = function (selector) {
        return root.one().querySelectorAll(selector);
    };
    root.x = function () {
        return (0, _position2.default)(root.one()).x;
    };
    root.y = function () {
        return (0, _position2.default)(root.one()).y;
    };
    root.width = function () {
        return (0, _position2.default)(root.one()).width;
    };
    root.height = function () {
        return (0, _position2.default)(root.one()).height;
    };
    root.remove = function () {
        return root.one().parentNode.removeChild(root.one());
    };
    root.show = function () {
        var src = root.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: src && src['real-display-style'] ? src['real-display-style'] : 'block' });
    };
    root.hide = function () {
        var src = root.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: 'none' });
    };
    root.toggle = function () {
        var src = root.one();
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(Dom.toggle);
        } else if ((0, _isNode2.default)(src)) {
            if (src.style.display === 'none') Dom.show(src);else Dom.hide(src);
        }
    };
    root.on = function (eventName, callback, bubble) {
        return (0, _on2.default)(root.one(), eventName, callback, bubble);
    };
    root.coords = function () {
        var coords = root.one().getBoundingClientRect();
        return (0, _merge2.default)({ top: coords.top + pageYOffset, left: coords.left + pageXOffset }, coords);
    };
    return root;
}

Dom.on = _on2.default;
Dom.id = function (element) {
    return document.getElementById(element);
};
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
    dragend: 'dragend',
    dragenter: 'dragenter',
    dragleave: 'dragleave',
    dragover: 'dragover',
    dragstart: 'dragstart',
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

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./src/session-storage/index.js");

var _sessionStorage2 = _interopRequireDefault(_sessionStorage);

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

var _str = __webpack_require__(/*! ./str */ "./src/str/index.js");

var _str2 = _interopRequireDefault(_str);

var _roxy = __webpack_require__(/*! ./roxy */ "./src/roxy/index.js");

var _roxy2 = _interopRequireDefault(_roxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.NamespaceApplication = _NamespaceApplication2.default;
window.NamespaceApplication.Util = _util2.default;
window.NamespaceApplication.Cookie = _cookie2.default;
window.NamespaceApplication.Storage = _storage2.default;
window.NamespaceApplication.SessionStorage = _sessionStorage2.default;
window.NamespaceApplication.Datetime = _datetime2.default;
window.NamespaceApplication.EventManager = _eventManager2.default;
window.NamespaceApplication.Timer = _timer2.default;
window.NamespaceApplication.Emmet = _emmet2.default;
window.NamespaceApplication.httpRequest = _httpRequest2.default;
window.NamespaceApplication.Dom = _dom2.default;
window.NamespaceApplication.Str = _str2.default;
window.NamespaceApplication.Roxy = _roxy2.default;
window.NamespaceApplication.RoxyListener = _roxy.RoxyListener;
window.Ns = window.NamespaceApplication;

/***/ }),

/***/ "./src/roxy/index.js":
/*!***************************!*\
  !*** ./src/roxy/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RoxyListener = undefined;

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
    const {Util, Dom, Roxy} = NamespaceApplication;

    const rxData = Roxy({
        title: '',
        body: '',
    });

    function setTo(id, context) {
        const elem = Dom('#' + id);
        elem.inject(context);
    }

    rxData.action((key, values)=>{
        setTo(key, values);
    });

    Timer.timeout(() => {
        rxData.set('title', 'Hello friend');
        rxData.set('body', 'Do you happy now?');
    }, 2000);

    Timer.timeout(() => {
        rxData.set('body', 'No yes ofcourse');
    }, 4000);
 *
 *
 * @param payload
 * @returns {{proxy: *, set(*=, *=): *, get(*): *, action(*=, *=): *, fill(*=, *=): *}|Roxy|{}|null|boolean}
 * @constructor
 */
var Roxy = function Roxy(payload) {
    var actions = { default: null };

    var proxy = new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {
            if (actions[prop] && typeof actions[prop] === "function") actions[prop].call({}, prop, value, (0, _copy2.default)(proxy));

            if (typeof actions.default === "function") actions.default.call({}, prop, value, (0, _copy2.default)(proxy));

            obj[prop] = value;
            return true;
        }
    });

    return {
        dispatch: function dispatch(key, payload) {
            this.set(key, payload);
            return this;
        },


        /**
         * @deprecated
         * @param key
         * @param payload
         * @returns {Roxy}
         */
        set: function set(key, payload) {
            var result = void 0;

            if (typeof key === "function" && !payload) {
                result = key.call({}, proxy);
                if (result) this.fill(result);
            } else if (typeof payload === "function") {
                result = payload.call({}, proxy[key]);
                if (result) proxy[key] = result;
            } else proxy[key] = payload;

            return this;
        },
        action: function action(key, callback) {
            if (typeof key === "function" && !callback) {
                actions.default = key;
            } else actions[key] = typeof callback === "function" ? callback : null;

            return this;
        },
        get: function get(key) {
            return key ? proxy[key] : (0, _copy2.default)(proxy);
        },
        fill: function fill(payload, to) {
            Object.keys(payload).forEach(function (key) {
                if (to) {
                    if (!proxy[to]) proxy[to] = {};
                    proxy[to][key] = payload[key];
                } else {
                    proxy[key] = payload[key];
                }
            });

            return this;
        },


        proxy: proxy
    };
};

exports.default = Roxy;

/**
 * const rx = RoxyListener ({
 *     event_name () { // handler ... },
 *     event_name () { // handler ... },
 * })
 * rx.set();
 * rx.dispatch();
 *
 * rx.action();
 *
 * @type object payload
 * @constructor
 */

var RoxyListener = exports.RoxyListener = function RoxyListener(payload) {

    var actions = {
        __action__: function __action__() {}
    };

    var actionsNames = {};

    Object.keys(payload).map(function (event_name, index) {
        actions[event_name] = payload[event_name];

        if (typeof payload[event_name] === 'function' && event_name !== actions.__action__.name) {
            actionsNames[event_name] = '';
        }
    });

    var rx = Roxy(actionsNames);

    rx.actions = function () {
        return actionsNames;
    };

    rx.action(function (event_cursor, values) {
        actions.__action__.call(actions, event_cursor, values);

        Object.keys(actions).map(function (event_name, index) {

            if (event_cursor === event_name && typeof actions[event_name] === 'function') {
                actions[event_name].call(actions, event_cursor, values);
            }
        });
    });

    return rx;
};

/***/ }),

/***/ "./src/session-storage/index.js":
/*!**************************************!*\
  !*** ./src/session-storage/index.js ***!
  \**************************************/
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
    return window.sessionStorage.setItem(name, value);
};

/**
 * Get item by name
 * @param name
 * @param json
 */
var get = function get(name) {
    var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var value = window.sessionStorage.getItem(name);
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
    return window.sessionStorage.removeItem(name);
};

/**
 * Get item by index
 * @param index
 * @returns {string}
 */
var key = function key(index) {
    return window.sessionStorage.key(index);
};

/**
 * When invoked, will empty all keys out of the SessionStorage.
 */
var clear = function clear() {
    return window.sessionStorage.clear();
};

/**
 * Returns an integer representing the number of data items stored in the SessionStorage object.
 * @returns {number}
 */
var length = function length() {
    return window.sessionStorage.length;
};

/**
 * SessionStorage wrapper
 *
 * @param name
 * @param value
 * @returns {{set: (SessionStorage.set|*), get: (SessionStorage.get|*), key: (SessionStorage.key|*), clear: (SessionStorage.clear|*), remove: (SessionStorage.remove|*), length: (SessionStorage.length|*)}}
 * @constructor
 */
var SessionStorage = function SessionStorage(name, value) {
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

//
SessionStorage.set = set;
SessionStorage.get = get;
SessionStorage.key = key;
SessionStorage.clear = clear;
SessionStorage.remove = remove;
SessionStorage.size = length;

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = SessionStorage;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, instance) {
    if ((0, _isNode2.default)(src)) return src.cloneNode(true);

    if (Array.isArray(src)) return src.slice();

    if (typeof src === 'function') return src.bind(instance || {});

    if ((0, _typeOf2.default)(src, 'object')) {
        var result = {};
        Object.keys(src).forEach(function (key) {
            var value = src[key];
            result[key] = copy(value, typeof value === "function" ? src : {});
        });
        return result;
    }

    return src;
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

/***/ "./src/static/decodeGetQuery.js":
/*!**************************************!*\
  !*** ./src/static/decodeGetQuery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var decodeGetQuery = function decodeGetQuery(query) {
    var result = {};
    var pairs = (query[0] === '?' ? query.substr(1) : query).split('&');
    pairs.forEach(function (item, i) {
        var pair = pairs[i].split('=');
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });
    return result;
};

exports.default = decodeGetQuery;

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

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const each = function (list, callback, tmp) {
    if (list instanceof Array) {
        list.forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    } else if (isNode(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    }
};*/

var each = function each(list, callback, instance) {
    var type = (0, _typeOf2.default)(list);

    switch (type) {
        case 'array':
            list.forEach(function (i, v, a) {
                return callback.call(instance, i, v, a);
            });
            break;
        case 'object':
            if ((0, _isNode2.default)(list)) {
                if (list instanceof NodeList) each(Array.from(list), callback, instance);else each([list], callback, instance);
            } else Object.keys(list).forEach(function (key) {
                return callback.call(instance, list[key], key, list);
            });
            break;
        case 'string':
            each(list.split(""), callback, instance);
            break;
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

/***/ "./src/static/encodeGetQuery.js":
/*!**************************************!*\
  !*** ./src/static/encodeGetQuery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var encodeGetQuery = function encodeGetQuery(params) {
    var result = '';
    Object.keys(params).forEach(function (key) {
        result += (result.length ? '&' : '?') + key + '=' + encodeURIComponent(params[key]);
    });

    return result;
};

exports.default = encodeGetQuery;

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var findObjects = function findObjects(list, attr, attrValue) {
    var i = void 0,
        tmp = [];
    if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === "object") list = Object.values(list);

    if (Array.isArray(list)) for (i = 0; i < list.length; i++) {
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue) tmp.push(list[i]);
    }return tmp;
};

var finds = exports.finds = function finds(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp : false;
};

var find = exports.find = function find(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
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

/**
 * search('[data-on]', 'data-on')
 * @param selector
 * @param attr
 * @param from
 * @return {{}}
 */
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

/***/ "./src/static/str2fragment.js":
/*!************************************!*\
  !*** ./src/static/str2fragment.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var str2fragment = function str2fragment(string) {
    if (document.createRange) return document.createRange().createContextualFragment(string);else {
        var i = void 0,
            fragment = document.createDocumentFragment(),
            container = document.createElement("div");

        container.innerHTML = string;
        while (i = container.firstChild) {
            fragment.appendChild(i);
        }return fragment;
    }
};

exports.default = str2fragment;

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

var _str2fragment = __webpack_require__(/*! ./str2fragment */ "./src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str2node = function str2node(string) {
    var result = void 0;
    var fragment = (0, _str2fragment2.default)(string);

    switch (fragment.childElementCount) {
        case 0:
            break;
        case 1:
            result = fragment.firstElementChild;
            break;
        default:
            var container = document.createElement("span");
            container.appendChild(fragment);
            result = container;
    }
    return result;
};

exports.default = str2node;

/***/ }),

/***/ "./src/static/toArray.js":
/*!*******************************!*\
  !*** ./src/static/toArray.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * toArray ( $var, { values: true })
 *
 * options
 *    values - gets values of object to new array values
 *
 * @param entries
 * @param options
 * @return {[]}
 */
var toArray = function toArray(entries) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var values = options.hasOwnProperty('values') ? options.values : true;

  var type = typeof entries === 'undefined' ? 'undefined' : _typeof(entries);
  var data = [];

  switch (type) {
    case 'object':
      if (entries) {
        if (Array.isArray(entries)) {
          data = Array.apply([], entries);
        } else {
          data = values ? Object.values(entries).map(function (key, index) {
            return key;
          }) : Object.keys(entries).map(function (key, index) {
            return key;
          });
        }
      }
      break;

    case 'string':
    case 'number':
    case 'boolean':
    case 'function':
      data.push(entries);
      break;
  }

  return data;
};

exports.default = toArray;

/***/ }),

/***/ "./src/static/toMap.js":
/*!*****************************!*\
  !*** ./src/static/toMap.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * toMap( { '1': 5, '2': 7, '3': 0 } )
 * result [ [ 1, 5 ], [ 2, 7 ], [ 3, 0 ] ]
 *
 * @param entries
 * @return {[number, *][]}
 */
var toMap = function toMap(entries) {
  return Object.keys(entries).map(function (key) {
    return [Number(key), entries[key]];
  });
};

exports.default = toMap;

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

// typeOf({}            )     - object
// typeOf({1:10,2:20}   )     - object
// typeOf([]            )     - array
// typeOf(null          )     - null
// typeOf(''            )     - string
// typeOf(100           )     - number
// typeOf(undefined     )     - undefined
// typeOf(true          )     - boolean
// typeOf(()=>{}        )     - function

/**
 *
 * @param value
 * @param type
 * @return {boolean|string}
 */
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
// typeof {}            - object
// typeof {1:10,2:20}   - object
// typeof []            - object
// typeof null          - object
// typeof ''            - string
// typeof 100           - number
// typeof undefined     - undefined
// typeof true          - boolean
// typeof ()=>{}        - function

// typeOfStrict({}            )        - Object
// typeOfStrict({1:10,2:20}   )        - Object
// typeOfStrict([]            )        - Array
// typeOfStrict(null          )        - Null
// typeOfStrict(''            )        - String
// typeOfStrict(100           )        - Number
// typeOfStrict(undefined     )        - Undefined
// typeOfStrict(true          )        - Boolean
// typeOfStrict(()=>{}        )        - Function
/**
 *
 * @param value
 * @param type
 * @return {boolean|string}
 */
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

//
Storage.set = set;
Storage.get = get;
Storage.key = key;
Storage.clear = clear;
Storage.remove = remove;
Storage.size = length;

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = Storage;

/***/ }),

/***/ "./src/str/index.js":
/*!**************************!*\
  !*** ./src/str/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _each = __webpack_require__(/*! ../static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalize = function capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

function Str(string) {
    var $ = {
        string: (0, _typeOf2.default)(string, 'string') ? string : '',
        length: string.length
    };

    $.capitalize = function () {
        return capitalize($.string);
    };
    $.upper = function () {
        return $.string.toUpperCase();
    };
    $.lower = function () {
        return $.string.toLowerCase();
    };
    $.padEnd = function (value) {
        return $.string.padEnd(value);
    };
    $.padStart = function (value) {
        return $.string.padStart(value);
    };
    $.each = function (callback) {
        return callback ? $.string.split('').forEach(callback) : $.string.split('');
    };

    return $;
}

Str.node2str = _node2str2.default;
Str.str2node = _str2node2.default;
Str.capitalize = capitalize;
Str.each = _each2.default;

exports.default = Str;

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

var _str2fragment = __webpack_require__(/*! ../static/str2fragment */ "./src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _encodeGetQuery = __webpack_require__(/*! ../static/encodeGetQuery */ "./src/static/encodeGetQuery.js");

var _encodeGetQuery2 = _interopRequireDefault(_encodeGetQuery);

var _decodeGetQuery = __webpack_require__(/*! ../static/decodeGetQuery */ "./src/static/decodeGetQuery.js");

var _decodeGetQuery2 = _interopRequireDefault(_decodeGetQuery);

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

var _toArray = __webpack_require__(/*! ../static/toArray */ "./src/static/toArray.js");

var _toArray2 = _interopRequireDefault(_toArray);

var _toMap = __webpack_require__(/*! ../static/toMap */ "./src/static/toMap.js");

var _toMap2 = _interopRequireDefault(_toMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = {
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
    copy: _copy2.default,
    clone: _copy2.default,
    domLoaded: _domLoaded2.default,
    inject: _inject2.default,
    str2node: _str2node2.default,
    str2fragment: _str2fragment2.default,
    node2str: _node2str2.default,
    query: _query2.default,
    queryAll: _queryAll2.default,
    search: _search2.default,
    encodeGetQuery: _encodeGetQuery2.default,
    decodeGetQuery: _decodeGetQuery2.default,
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
    toArray: _toArray2.default,
    toMap: _toMap2.default
};

exports.default = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm94eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Vzc2lvbi1zdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMmZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0ci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiXSwibmFtZXMiOlsiTmFtZXNwYWNlQXBwbGljYXRpb24iLCJjb25maWciLCJpbnN0YW5jZSIsImtleSIsInZhbHVlIiwidW5kZWZpbmVkIiwiY29uZmlndXJhdGlvbiIsImlkIiwidXJsIiwibW9kZSIsImRlYnVnIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndyaXRhYmxlIiwiY29tcG9uZW50IiwicmVnaXN0ZXIiLCJleHRlbnNpb24iLCJkZXBlbmRlbmN5Iiwicm91dGUiLCJERUJVRyIsIkNvb2tpZSIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZXQiLCJnZXQiLCJjbGVhciIsInJlbW92ZSIsIm9wdGlvbnMiLCJ0eXBlSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleHBpcmVzIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsImVuY29kZSIsImNvb2tpZSIsIm1hdGNoZXMiLCJtYXRjaCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkYXRhSnNvbiIsInBhcnNlIiwib3B0aW9uIiwic3RyIiwiZGVjb2RlIiwiY29va2llcyIsInNwbGl0IiwicGFydHMiLCJ0cmltIiwibGlzdCIsImNvbXAiLCJjcmVhdGUiLCJpbml0IiwiaW5pdGlhbGl6ZWQiLCJ0ZW1wbGF0ZSIsIm5vZGUiLCJzdHlsZXMiLCJzZXRTdHlsZXMiLCJhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlciIsIkVWRU5UU19OQU1FU19CQVNJQyIsImluamVjdENvbXBvbmVudCIsInJvb3QiLCJNT0RFX0RFQlVHIiwiRXJyb3IiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImNhbGwiLCJwcm9wcyIsIm92ZXJyaWRlIiwibWV0aG9kcyIsInByZWZpeCIsImV2ZW50c05hbWVzIiwiYWRkRXZlbnQiLCJlbGVtIiwiYXR0ciIsImV2ZW50TmFtZSIsIm1ldGhvZCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBhdGgiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFzQXR0cmlidXRlIiwibm9kZXMiLCJwcm9wIiwic2VsZWN0b3IiLCJzdHlsZSIsImZvcmNlIiwic291cmNlcyIsImNzcyIsImpzIiwiZWxlbWVudHMiLCJsb2FkIiwibWF4Iiwic3JjcyIsImkiLCJsb2FkQ1NTIiwibG9hZEpTIiwic3JjIiwicHVzaCIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb250ZXh0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNvdXJjZWRhdGEiLCJzdGF0ZSIsImNhbGxiYWNrIiwic291cmNlIiwiY3JlYXRlU291cmNlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldENhc2UiLCJQcm94eSIsIm9iaiIsIkRhdGV0aW1lIiwiTVNfSU5fREFZIiwiTVNfSU5fSE9VUiIsIk1TX0lOX01JTiIsInRpbWUiLCJhZGREYXlzIiwiZGF5IiwiZGF0ZVN0YXJ0IiwiYmV0d2VlbkRhdGVzIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJkaWZmTXMiLCJkaWZmRGF5cyIsIk1hdGgiLCJyb3VuZCIsImRpZmZIcnMiLCJkaWZmTWluIiwiaG91ciIsIm1pbnV0ZSIsInN0clRvRGF0ZSIsImZvcm1hdCIsInV0YyIsInRlbXAiLCJtYXNrIiwidG9Mb3dlckNhc2UiLCJVVEMiLCJEb20iLCJzZWxlY3RlZCIsIl9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlIiwibWFwIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJvbmUiLCJhbGwiLCJpbmplY3QiLCJhcHBlbmQiLCJ0byIsInNlYXJjaCIsInBhcmVudCIsImNoaWxkcmVuIiwicG9zaXRpb24iLCJxdWVyeSIsInF1ZXJ5QWxsIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInNob3ciLCJoaWRlIiwidG9nZ2xlIiwib24iLCJidWJibGUiLCJjb29yZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImxlZnQiLCJwYWdlWE9mZnNldCIsImdldEVsZW1lbnRCeUlkIiwibG9hZGVkIiwiZG9tTG9hZGVkIiwic3RyMm5vZGUiLCJjcmVhdGVFbGVtZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVGcmFnbWVudCIsIm5vZGUyc3RyIiwiRW1tZXQiLCJ0ZW1wSW5uZXJUZXh0cyIsInRlbXBFc2NhcGVkIiwicmUiLCJleGNsdWRlcyIsImNsYXNzZXMiLCJ0YWciLCJpbmRleGVzIiwiZXNjYXBlIiwiaW5uZXJUZXh0IiwiYXR0cnMiLCJlbW1ldCIsInRleHQiLCJodG1sT25seSIsInRyZWUiLCJjdXJyZW50IiwibGFzdEVsZW1lbnQiLCJjb21tYW5kVGV4dCIsImNvbnZlcnRDb2xsZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwicmVzdWx0IiwiZnVsbCIsInF1b3RlcyIsImVsZW1lbnRUZXh0Iiwic3BsaXR0ZXIiLCJpbm5lckhUTUwiLCJIVE1MQ29sbGVjdGlvbiIsIm1hdGNoX3RhZyIsIm1hdGNoX2lkIiwibWF0Y2hfY2xhc3NlcyIsIm1hdGNoX2F0dHJzIiwibWF0Y2hfaW5uZXJUZXh0IiwicG9wIiwiY2xhc3NOYW1lIiwic2xpY2UiLCJqb2luIiwidW5lc2NhcGUiLCJzaGlmdCIsImNodW5rUGFyYW0iLCJjaHVuayIsImF0dHJQYXJhbSIsInNldEF0dHJpYnV0ZSIsIkVWRU5UU19OQU1FUyIsImNvcHkiLCJjdXQiLCJwYXN0ZSIsImFib3J0IiwiYmx1ciIsImNhbmNlbCIsImNhbnBsYXkiLCJjYW5wbGF5dGhyb3VnaCIsImNoYW5nZSIsImNsaWNrIiwiY2xvc2UiLCJjb250ZXh0bWVudSIsImN1ZWNoYW5nZSIsImRibGNsaWNrIiwiZHJhZyIsImRyYWdlbmQiLCJkcmFnZW50ZXIiLCJkcmFnbGVhdmUiLCJkcmFnb3ZlciIsImRyYWdzdGFydCIsImRyb3AiLCJkdXJhdGlvbmNoYW5nZSIsImVtcHRpZWQiLCJlbmRlZCIsImZvY3VzIiwiaW5wdXQiLCJpbnZhbGlkIiwia2V5ZG93biIsImtleXByZXNzIiwia2V5dXAiLCJsb2FkZWRkYXRhIiwibG9hZGVkbWV0YWRhdGEiLCJsb2Fkc3RhcnQiLCJtb3VzZWRvd24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibW91c2VvdmVyIiwibW91c2V1cCIsIm1vdXNld2hlZWwiLCJwYXVzZSIsInBsYXkiLCJwbGF5aW5nIiwicHJvZ3Jlc3MiLCJyYXRlY2hhbmdlIiwicmVzZXQiLCJyZXNpemUiLCJzY3JvbGwiLCJzZWVrZWQiLCJzZWVraW5nIiwic2VsZWN0Iiwic3RhbGxlZCIsInN1Ym1pdCIsInN1c3BlbmQiLCJ0aW1ldXBkYXRlIiwidm9sdW1lY2hhbmdlIiwid2FpdGluZyIsIndoZWVsIiwiYXV4Y2xpY2siLCJnb3Rwb2ludGVyY2FwdHVyZSIsImxvc3Rwb2ludGVyY2FwdHVyZSIsInBvaW50ZXJkb3duIiwicG9pbnRlcm1vdmUiLCJwb2ludGVydXAiLCJwb2ludGVyY2FuY2VsIiwicG9pbnRlcm92ZXIiLCJwb2ludGVyb3V0IiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwic2VsZWN0c3RhcnQiLCJzZWxlY3Rpb25jaGFuZ2UiLCJhbmltYXRpb25lbmQiLCJhbmltYXRpb25pdGVyYXRpb24iLCJhbmltYXRpb25zdGFydCIsInRyYW5zaXRpb25lbmQiLCJFdmVudE1hbmFnZXIiLCJldmVudEZyYWdtZW50IiwidmVyc2lvbiIsImV2ZW50c1R5cGUiLCJkZXRhaWxzIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlRXZlbnQiLCJ0eXBlIiwibGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJodHRwUmVxdWVzdCIsInRoaXNJbnN0YW5jZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaHJlZiIsInRvVXBwZXJDYXNlIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwicGFyYW1zIiwic2VuZERhdGEiLCJpbmRleE9mIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsIndpbmRvdyIsIlV0aWwiLCJTdG9yYWdlIiwiU2Vzc2lvblN0b3JhZ2UiLCJUaW1lciIsIlN0ciIsIlJveHkiLCJSb3h5TGlzdGVuZXIiLCJOcyIsImFjdGlvbnMiLCJkZWZhdWx0IiwicHJveHkiLCJkaXNwYXRjaCIsImZpbGwiLCJfX2FjdGlvbl9fIiwiYWN0aW9uc05hbWVzIiwiZXZlbnRfbmFtZSIsImluZGV4IiwicngiLCJldmVudF9jdXJzb3IiLCJ2YWx1ZXMiLCJqc29uIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJzaXplIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJ0eXBlX2VsZW1lbnQiLCJjbG9uZU5vZGUiLCJpc0FycmF5IiwiYmluZCIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsInByb3BlcnRpZXMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsInN1YnN0cmluZyIsImRlY29kZUdldFF1ZXJ5IiwicGFpcnMiLCJzdWJzdHIiLCJpdGVtIiwicGFpciIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvYyIsImVhY2giLCJ2IiwiYSIsIk5vZGVMaXN0IiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbmNvZGVHZXRRdWVyeSIsImV4dGVuZCIsImRlc3RpbmF0aW9uIiwicGFyYW0iLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZpbmQiLCJzdHJpbmciLCJyZWciLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwidGV4dENvbnRlbnQiLCJpc0VtcHR5IiwiaXNOYU4iLCJpc05vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJsaW5rIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZWwiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwibG9hZEpTU3luYyIsIml0ZXJhdG9yIiwic2NyaXB0cyIsIm1lcmdlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJudW1iZXIyc3RyaW5nIiwiYWJzIiwicG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVjdCIsInNjcm9sbFRvcCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwicG9zaXRpb25Nb3VzZSIsIk1vdXNlRXZlbnQiLCJjb25zb2xlIiwiY2xpZW50WCIsImNsaWVudFkiLCJtaW4iLCJmbG9vciIsInJhbmRvbUNvbG9yIiwibGV0dGVycyIsImNvbG9yIiwicmFuZG9tTnVtYmVyIiwiY2VpbCIsInJlcyIsInJhbmRvbVN0cmluZyIsInJhbmRvbUl0ZW0iLCJhcnIiLCJyZWRpcmVjdCIsImxvYyIsInF1ZXJ5RWxlbWVudHMiLCJzdHIyZnJhZ21lbnQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImZpcnN0Q2hpbGQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImZpcnN0RWxlbWVudENoaWxkIiwidG9BcnJheSIsImVudHJpZXMiLCJhcHBseSIsInRvTWFwIiwiTnVtYmVyIiwidHlwZU9mIiwic2ltcGxlVHlwZXMiLCJ0IiwidHlwZU9mU3RyaWN0IiwidXJpIiwibG9jYWxTdG9yYWdlIiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCIkIiwidXBwZXIiLCJsb3dlciIsInBhZEVuZCIsInBhZFN0YXJ0IiwiZGVsYXkiLCJyZXBlYXQiLCJzZWxmIiwiaHQiLCJoYyIsInN0b3AiLCJzdGFydCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVvdXQiLCJtcyIsInRoaXNJbnN0Iiwic2V0VGltZW91dCIsImludGVydmFsIiwidGltZW91dFN0b3AiLCJjbGVhclRpbWVvdXQiLCJpbnRlcnZhbFN0b3AiLCJjbG9uZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1BLG9CLEdBRUYsOEJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFD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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudFwiO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tIFwiLi9jb3JlL2V4dGVuc2lvblwiO1xuaW1wb3J0IGRlcGVuZGVuY3kgZnJvbSBcIi4vY29yZS9kZXBlbmRlbmN5XCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vY29yZS9yb3V0ZVwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuL2NvcmUvc3RhdGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL3N0YXRpYy9kZWZpbmVkXCI7XG5cbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uXG57XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGlmIChOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IChrZXksIHZhbHVlKSA9PiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jb25maWd1cmF0aW9uW2tleV0gOiB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWJ1ZzogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicm9vdFwiLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWd1cmF0aW9uLmlkKSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uO1xuICAgICAgICB0aGlzLmV4dGVuc2lvbi5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxufVxuXG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5ERUJVRyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xuIiwiXG5cbi8qKlxuICogTG9jYWxTdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gb3B0aW9uXG4gKiBAcmV0dXJucyB7e3NldDogKENvb2tpZS5zZXR8KiksIGdldDogKENvb2tpZS5nZXR8KiksIGtleTogKENvb2tpZS5rZXl8KiksIGNsZWFyOiAoQ29va2llLmNsZWFyfCopLCByZW1vdmU6IChDb29raWUucmVtb3ZlfCopLCBsZW5ndGg6IChDb29raWUubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb29raWUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KG5hbWUpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFNldCBDb29raWUga2V5LCB2YWx1ZVxuICogIGV4cGlyZXMgLSBtcywgRGF0ZSwgLTEsIDBcbiAqICBtYXhBZ2UgLSBzICh5ZWFyIDMxNTM2MDAwKVxuICogIFNhbWVTaXRlPVN0cmljdHxMYXhcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB7e319IG9wdGlvbnMgICB7ZXhwaXJlczogMCwgcGF0aDogJy8nLCBkb21haW46ICdzaXRlLmNvbScsIHNlY3VyZTogZmFsc2UsIG1heEFnZTogNjAqNjAqMjQqMzY1LCBzYW1lU2l0ZTogJycgfVxuICogQHBhcmFtIHR5cGVKc29uIGJvb2xcbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zLCB0eXBlSnNvbiA9IHRydWUpXG57XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblxuICAgIGlmIChDb29raWUudHlwZUpzb24pIHt9XG4gICAgaWYgKHR5cGVKc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgbGV0IGRhdGEgPSBuYW1lICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlcykge1xuICAgICAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIHBhcnNlSW50KG9wdGlvbnMuZXhwaXJlcykgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1heEFnZSkge1xuICAgICAgICBvcHRpb25zWydtYXgtYWdlJ10gPSBvcHRpb25zLm1heEFnZTtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubWF4QWdlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zYW1lU2l0ZSkge1xuICAgICAgICBvcHRpb25zWydzYW1lc2l0ZSddID0gb3B0aW9ucy5zYW1lU2l0ZTtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuc2FtZVNpdGU7XG4gICAgfVxuXG4gICAgZGF0YSArPSBlbmNvZGUob3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuY29va2llID0gZGF0YTtcbn07XG5cbi8qKlxuICogR2V0IENvb2tpZSB2YWx1ZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGdldCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlSnNvbiA9IHRydWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXG4gICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuICAgICkpO1xuXG4gICAgbGV0IGRhdGEgPSBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKENvb2tpZS5kYXRhSnNvbikge31cbiAgICBpZiAodHlwZUpzb24gJiYgZGF0YSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cblxuICAgIHJldHVybiBkYXRhXG59O1xuXG4vKipcbiAqIFJlbW92ZSBDb29raWUgYnkga2V5XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIG9wdGlvblxuICovXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHtleHBpcmVzOiAtMX07XG4gICAgc2V0KG5hbWUsIFwiXCIsIG9wdGlvbik7XG59O1xuXG5jb25zdCBjbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSAnJztcbn07XG5cbi8qKlxuICogQ29udmVydCBvYmplY3QgdG8gdXJpIGdldCBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhICAgICBleGFtcGxlOiB7ZXhwaXJlczogMCwgcGF0aDogJy8nLCBkb21haW46ICdteS1zaXRlLmNvbScsIHNlY3VyZTogZmFsc2V9XG4gKiBAcmV0dXJucyB7c3RyaW5nfSAgICAgICAgZXhhbXBsZTogXCJleHBpcmVzPTA7cGF0aD0vO2RvbWFpbj1zaXRlLmNvbTtzZWN1cmU9ZmFsc2VcIjtcbiAqL1xuY29uc3QgZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHN0ciArPSAnOycgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcbiAgICAgICAgKSk7XG4gICAgICAgIHJldHVybiBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fSxcbiAgICAgICAgICAgIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJyk7XG5cbiAgICAgICAgY29va2llcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHZhbHVlLnRyaW0oKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGRhdGFbcGFydHNbMF0udHJpbSgpXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSkudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufTtcblxuQ29va2llLnNldCA9IHNldDtcbkNvb2tpZS5nZXQgPSBnZXQ7XG5Db29raWUucmVtb3ZlID0gcmVtb3ZlO1xuQ29va2llLmNsZWFyID0gY2xlYXI7XG5Db29raWUuZW5jb2RlID0gZW5jb2RlO1xuQ29va2llLmRlY29kZSA9IGRlY29kZTtcbkNvb2tpZS5kYXRhSnNvbiA9IHRydWU7XG5cbmV4cG9ydCB7XG4gICAgc2V0LFxuICAgIGdldCxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgZW5jb2RlLFxuICAgIGRlY29kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcbiIsImltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgeyBFVkVOVFNfTkFNRVNfQkFTSUMgfSBmcm9tIFwiLi4vZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lc1wiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cblxuY29uc3QgY29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wID0gY29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuICAgICAgICBjb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcblxuICAgICAgICAgICAgaWYgKGNvbXAudGVtcGxhdGUucXVlcnlTZWxlY3RvcignW2RhdGEtbm9kZV0nKSlcbiAgICAgICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICBpZiAoY29tcC5zdHlsZXMpXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVzKGNvbXApO1xuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlcihjb21wLCAnb24nLCBPYmplY3Qua2V5cyhFVkVOVFNfTkFNRVNfQkFTSUMpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgaW5qZWN0Q29tcG9uZW50IChjb21wLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghY29tcC50ZW1wbGF0ZSAmJiB0aGlzLnJvb3Qpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWVyeSgnW2RhdGEtY29tcG9uZW50PVwiJysgY29tcC5pZCArJ1wiXScsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKE5hbWVzcGFjZUFwcGxpY2F0aW9uLm1vZGUgPT09IE5hbWVzcGFjZUFwcGxpY2F0aW9uLk1PREVfREVCVUcpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkxhdGUgQ2FsbFwiOiBDb21wb25lbnQgWycrY29tcC5pZCsnXSBjYW4gdCBjYWxsIGNvbXBsZXRlZCgpIGFuZCBpbmplY3RzJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH1cbn07XG5cbmNvbXBvbmVudC5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSlcbntcbiAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICBPYmplY3Qua2V5cyhjb21wb25lbnQubGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gY29tcG9uZW50Lmxpc3Rba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaW5qZWN0Q29tcG9uZW50IChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbXBvbmVudC5saXN0ID0ge307XG5cbmNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczogbnVsbCxcbiAgICAgICAgc3R5bGVzOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfSwgY29uZmlnKVxufTtcblxuZnVuY3Rpb24gYXR0cmlidXRlc0V2ZW50c0hhbmRsZXIgKGNvbXAsIHByZWZpeCwgZXZlbnRzTmFtZXMpIHtcbiAgICBjb25zdCBhZGRFdmVudCA9IChlbGVtLCBhdHRyLCBldmVudE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gZWxlbS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW21ldGhvZF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1ttZXRob2RdLmNhbGwoY29tcCwgZSwgZS50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0IHx8IGUucGF0aFswXSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGV2ZW50c05hbWVzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyID0gcHJlZml4ICsgJy0nICsgZXZlbnROYW1lO1xuICAgICAgICBpZiAoY29tcC50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdbJythdHRyKyddJykpIHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oY29tcC50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKCdbJythdHRyKyddJykpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICBhZGRFdmVudChlbGVtLCBhdHRyLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChjb21wLnRlbXBsYXRlLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgYWRkRXZlbnQoY29tcC50ZW1wbGF0ZSwgYXR0ciwgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluamVjdENvbXBvbmVudCAoY29tcCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QWxsKCdbZGF0YS1jb21wb25lbnQ9XCInKyBjb21wLmlkICsnXCJdJywgaW5zdGFuY2Uucm9vdCk7XG5cbiAgICBpZiAobm9kZXMpXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgY29tcC5wcm9wcy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5vZGUuaGFzQXR0cmlidXRlKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcCwgcHJvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmdldEF0dHJpYnV0ZShwcm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wLnRlbXBsYXRlICYmIGNvbXAudGVtcGxhdGUgIT09IG5vZGUgKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0KG5vZGUsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZXMoY29tcCwgaW5zdGFuY2UpIHtcblxuICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzKS5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICd0ZW1wbGF0ZScgJiYgaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLnN0eWxlc1tzZWxlY3Rvcl0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuc3R5bGVba2V5XSA9IGNvbXAuc3R5bGVzW3NlbGVjdG9yXVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcXVlcnlBbGwoc2VsZWN0b3IsIGNvbXAudGVtcGxhdGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5zdHlsZXNbc2VsZWN0b3JdKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gY29tcC5zdHlsZXNbc2VsZWN0b3JdW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iLCJpbXBvcnQgbG9hZEpTIGZyb20gJy4uL3N0YXRpYy9sb2FkSlMnO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGRlcGVuZGVuY3kgPSBmdW5jdGlvbiAoY29uZmlnLCBmb3JjZSA9IHRydWUpXG57XG4gICAgY29uc3Qgc291cmNlcyA9IG1lcmdlKHtcbiAgICAgICAgY3NzOiBbXSxcbiAgICAgICAganM6IFtdLFxuICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSwgY29uZmlnKTtcblxuICAgIGlmIChmb3JjZSlcbiAgICAgICAgZGVwZW5kZW5jeS5sb2FkKHNvdXJjZXMpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG59O1xuXG5kZXBlbmRlbmN5LmxvYWQgPSAoc291cmNlcykgPT4ge1xuICAgIGNvbnN0IG1heCA9XG4gICAgICAgIChzb3VyY2VzLmNzcyA/IHNvdXJjZXMuY3NzLmxlbmd0aCA6IDApICtcbiAgICAgICAgKHNvdXJjZXMuanMgPyBzb3VyY2VzLmpzLmxlbmd0aCA6IDApO1xuICAgIGNvbnN0IHNyY3MgPSBtZXJnZSh7Y3NzOiBzb3VyY2VzLmNzc30se2pzOiBzb3VyY2VzLmpzfSk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWQgPSBrZXkgPT09ICdjc3MnID8gbG9hZENTUyA6IGxvYWRKUztcbiAgICAgICAgc3Jjc1trZXldLmZvckVhY2goKHNyYykgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZXMuZWxlbWVudHMucHVzaChsb2FkKHNyYywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlcy5jb21wbGV0ZShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB9LCBzb3VyY2VzLmVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZGVwZW5kZW5jeS5yZW1vdmUgPSBmdW5jdGlvbiAoc291cmNlcylcbntcbiAgICBjb25zdCBlbGVtZW50cyA9IHNvdXJjZXMgJiYgc291cmNlcy5lbGVtZW50cyA/IHNvdXJjZXMuZWxlbWVudHMgOiBbXTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHNvdXJjZXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5O1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBleHRlbnNpb24gPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uLmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmNyZWF0ZShjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKXtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbnNpb24ubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGV4dGVuc2lvbi5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24ubGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5saXN0ID0ge307XG5cbmV4dGVuc2lvbi5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGZhbHNlLFxuICAgIH0sIGNvbmZpZylcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9uO1xuIiwiXG5jb25zdCByb3V0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbXBvbmVudCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdXJsKSB7XG4gICAgICAgIHRoaXNbY29tcG9uZW50XSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlOyIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi4vc3RhdGljL3R5cGVPZic7XG5cbmxldCBzb3VyY2VkYXRhID0ge307XG5jb25zdCBzdGF0ZSA9IGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID8gc3RhdGUuZ2V0KGtleSkgOiBzdGF0ZS5zZXQoa2V5LCBkYXRhKTtcbn07XG5cbnN0YXRlLmNhbGxiYWNrID0ge307XG5zdGF0ZS5zb3VyY2UgPSBjcmVhdGVTb3VyY2UoKTtcbnN0YXRlLmNyZWF0ZSA9IGNyZWF0ZVNvdXJjZSgpO1xuc3RhdGUuYWN0aW9uID0gZnVuY3Rpb24gKGtleSwgY2FsbGJhY2spIHtcbiAgICBzdGF0ZS5jYWxsYmFja1trZXldID0gY2FsbGJhY2s7XG59O1xuXG5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHR5cGVPZihrZXksICdzdHJpbmcnKVxuICAgICAgICA/IHNvdXJjZWRhdGFba2V5XSB8fCBzdGF0ZS5zb3VyY2Vba2V5XVxuICAgICAgICA6IGtleSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogc291cmNlZGF0YSA7XG59O1xuXG5zdGF0ZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuc2V0Q2FzZSh7W2tleV06IHBheWxvYWR9KTtcbn07XG5cbnN0YXRlLnNldENhc2UgPSBmdW5jdGlvbiAocGF5bG9hZCA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHN0YXRlLnNvdXJjZVtrZXldID0gc291cmNlZGF0YVtrZXldID0gcGF5bG9hZFtrZXldO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlIChwYXlsb2FkID0ge30pIHtcbiAgICBzb3VyY2VkYXRhID0gcGF5bG9hZDtcbiAgICByZXR1cm4gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6KG9iaiwgcHJvcCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jYWxsYmFja1twcm9wXSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNhbGxiYWNrW3Byb3BdLmNhbGwoe30sIHN0YXRlLnNvdXJjZSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcbiIsImNvbnN0IERhdGV0aW1lID0ge307XG5EYXRldGltZS5NU19JTl9EQVkgPSA4NjRlNTtcbkRhdGV0aW1lLk1TX0lOX0hPVVIgPSAzNmU1O1xuRGF0ZXRpbWUuTVNfSU5fTUlOID0gNmU0O1xuXG4vKipcbiAqIFJldHVybiB0aW1lc3RhbXBcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5EYXRldGltZS50aW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBkYXRlLmdldFRpbWUoKSA6IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG59O1xuXG4vKipcbiAqIEFkZCBkYXlzIHRvIHNvbWUgZGF0ZVxuICogQHBhcmFtIGRheSAgICAgICAgICAgbnVtYmVyIG9mIGRheXMuIDAuMDQgLSAxIGhvdXIsIDAuNSAtIDEyIGhvdXIsIDEgLSAxIGRheVxuICogQHBhcmFtIGRhdGVTdGFydCAgICAgdHlwZSBEYXRlLCBzdGFydCBkYXRlXG4gKiBAcmV0dXJucyB7Kn0gIHR5cGUgRGF0ZVxuICovXG5EYXRldGltZS5hZGREYXlzID0gZnVuY3Rpb24gKGRheSwgZGF0ZVN0YXJ0KSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVTdGFydCA/IG5ldyBEYXRlKGRhdGVTdGFydCkgOiBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXkgKiA4NjQwMDAwMCkpO1xuICAgIHJldHVybiBkYXRlO1xufTtcblxuLyoqXG4gKiBUaW1lIGJldHdlZW4gRGF0ZXNcbiAqIDxwcmU+XG4gKiAgICAgdmFyIGZyb20gPSBuZXcgRGF0ZSgnMjAxNi0wOC0wMSAyMDozMCcpO1xuICogICAgIHZhciB0byA9IG5ldyBEYXRlKCcyMDE2LTA4LTEwIDA3OjU1Jyk7XG4gKiAgICAgLkRhdGUuYmV0d2VlbkRhdGVzKGZyb20sIHRvKTsgLy8gT2JqZWN0IHsgZGF5OiA4LCBob3VyOiAxMSwgbWludXRlOiAyNSB9XG4gKiA8L3ByZT5cbiAqIEBwYXJhbSBkYXRlRnJvbVxuICogQHBhcmFtIGRhdGVUb1xuICogQHJldHVybnMge3tkYXk6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcn19XG4gKi9cbkRhdGV0aW1lLmJldHdlZW5EYXRlcyA9IGZ1bmN0aW9uIChkYXRlRnJvbSwgZGF0ZVRvKSB7XG4gICAgZGF0ZUZyb20gPSBkYXRlRnJvbSB8fCBuZXcgRGF0ZSgpO1xuICAgIGRhdGVUbyA9IGRhdGVUbyB8fCBuZXcgRGF0ZSgpO1xuICAgIGxldCBkaWZmTXMgPSAoZGF0ZVRvIC0gZGF0ZUZyb20pLFxuICAgICAgICBkaWZmRGF5cyA9IE1hdGgucm91bmQoZGlmZk1zIC8gODY0ZTUpLFxuICAgICAgICBkaWZmSHJzID0gTWF0aC5yb3VuZCgoZGlmZk1zICUgODY0ZTUpIC8gMzZlNSksXG4gICAgICAgIGRpZmZNaW4gPSBNYXRoLnJvdW5kKCgoZGlmZk1zICUgODY0ZTUpICUgMzZlNSkgLyA2ZTQpO1xuICAgIHJldHVybiB7ZGF5OiBkaWZmRGF5cywgaG91cjogZGlmZkhycywgbWludXRlOiBkaWZmTWlufTtcbn07XG5cbi8qKlxuICogQ29udmVydCBkYXRlIHN0cmluZyB0byBEYXRlIE9iamVjdFxuICogeXkgLSB0aGUgeWVhciBhcyBhIHR3by1kaWdpdCBudW1iZXIgKCAwMCB0byA5OSApO1xuICogWVkgLSB0aGUgeWVhciBhcyBhIGZvdXItZGlnaXQgbnVtYmVyICggMTkwMC05OTk5ICk7XG4gKiBtbSAtIHRoZSBtb250aCBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDEgdG8gMTIgKSAoIDEgdG8gMTIgKTtcbiAqIGRkIC0gdGhlIGRheSBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDEgdG8gMzEgKSAoIDEgdG8gMzEgKTtcbiAqIGhoIEhIIC0gdGhlIGhvdXIgKCAwMCB0byAxMSApICggMDAgdG8gMjMgKSAoIDEgdG8gMTIgKSAoIDAgdG8gMjMgKTtcbiAqIGlpIC0gdGhlIG1pbnV0ZSBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDAgdG8gNTkgKTtcbiAqIHNzIC0gdGhlIHNlY29uZCBhcyBhIG51bWJlciB3aXRoIGEgbGVhZGluZyB6ZXJvICggMDAgdG8gNTkgKTtcbiAqIGFhIC0gZGlzcGxheXMgYW0gKGZvciB0aW1lcyBmcm9tIG1pZG5pZ2h0IHVudGlsIG5vb24pIGFuZCBwbSAoZm9yIHRpbWVzIGZyb20gbm9vbiB1bnRpbCBtaWRuaWdodCk7XG4gKlxuICogRGF0ZXRpbWUuc3RyVG9EYXRlKCcxMi4wNS4yMDE3IDEyOjMwOjI1JywgJ21tLmRkLllZIEhIOmlpOnNzJylcbiAqIERhdGV0aW1lLnN0clRvRGF0ZSgnMTIvMDUvMjAxNycsICdtbS9kZC9ZWScpXG4gKiBEYXRldGltZS5zdHJUb0RhdGUoJzEyLzUvMjAxNycsICdtbS9kZC9ZWScsIHRydWUpXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIGZvcm1hdFxuICogQHBhcmFtIHV0Y1xuICogQHJldHVybnMge0RhdGV9XG4gKi9cbkRhdGV0aW1lLnN0clRvRGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQsIHV0Yykge1xuICAgIGNvbnN0IHNldCA9IFswLCAwLCAxLCAwLCAwLCAwXTtcbiAgICBjb25zdCB0ZW1wID0gZGF0ZS5tYXRjaCgvW2EtekEtWl0rfFswLTldKy9nKTtcbiAgICBjb25zdCBtYXNrID0gZm9ybWF0Lm1hdGNoKC9bYS16QS1aXXsyfS9nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChtYXNrW2ldKSB7XG4gICAgICAgICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgICAgICAgICBzZXRbMl0gPSB0ZW1wW2ldIHx8IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgICAgICBzZXRbMV0gPSAodGVtcFtpXSB8fCAxKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICAgICAgICBzZXRbMF0gPSB0ZW1wW2ldICogMSArICh0ZW1wW2ldID4gNTAgPyAxOTAwIDogMjAwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGhcIjpcbiAgICAgICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgICAgICAgIHNldFszXSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICAgICAgICAgIHNldFs0XSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJZWVwiOlxuICAgICAgICAgICAgICAgIHNldFswXSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICAgICAgICAgIHNldFszXSA9IHNldFszXSAlIDEyICsgKCh0ZW1wW2ldIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAnYW0nID8gMCA6IDEyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgICAgICAgIHNldFs1XSA9IHRlbXBbaV0gfHwgMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHV0Yykge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoc2V0WzBdLCBzZXRbMV0sIHNldFsyXSwgc2V0WzNdLCBzZXRbNF0sIHNldFs1XSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoc2V0WzBdLCBzZXRbMV0sIHNldFsyXSwgc2V0WzNdLCBzZXRbNF0sIHNldFs1XSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRldGltZTtcblxuLypcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBNU19JTl9EQVk6IERhdGV0aW1lLk1TX0lOX0RBWSxcbiAgICBNU19JTl9IT1VSOiBEYXRldGltZS5NU19JTl9IT1VSLFxuICAgIE1TX0lOX01JTjogRGF0ZXRpbWUuTVNfSU5fTUlOLFxuICAgIHRpbWU6IERhdGV0aW1lLnRpbWUsXG4gICAgYWRkRGF5czogRGF0ZXRpbWUuYWRkRGF5cyxcbiAgICBiZXR3ZWVuRGF0ZXM6IERhdGV0aW1lLmJldHdlZW5EYXRlcyxcbiAgICBzdHJUb0RhdGU6IERhdGV0aW1lLnN0clRvRGF0ZSxcbn07XG4qL1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuXG5pbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuZnVuY3Rpb24gRG9tIChzZWxlY3Rvcikge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHNlbGVjdG9yOiB0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSA/IHNlbGVjdG9yIDogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWQ6IGlzTm9kZShzZWxlY3RvcikgPyBbc2VsZWN0b3JdIDogcXVlcnlBbGwoc2VsZWN0b3IpLFxuICAgIH07XG4gICAgcm9vdC5zZWxlY3RlZC5mb3JFYWNoKChlbGVtLCBpKSA9PiB7XG4gICAgICAgIHJvb3RbaV0gPSBlbGVtO1xuICAgIH0pO1xuXG4gICAgY29uc3QgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3JjLnN0eWxlLmRpc3BsYXkgPyBzcmMuc3R5bGUuZGlzcGxheSA6IGdldENvbXB1dGVkU3R5bGUoc3JjKS5kaXNwbGF5O1xuICAgICAgICAgICAgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA9ICghc3R5bGUgfHwgc3R5bGUgPT09ICdub25lJykgPyAnYmxvY2snIDogc3R5bGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5vbmUgPSAoKSA9PiByb290LnNlbGVjdGVkICYmIHJvb3Quc2VsZWN0ZWQubGVuZ3RoID8gcm9vdC5zZWxlY3RlZFswXSA6IGZhbHNlO1xuICAgIHJvb3QuYWxsID0gKCkgPT4gcm9vdC5zZWxlY3RlZDtcbiAgICByb290LmF0dHIgPSAobmFtZSwgdmFsdWUpID0+IGRlZmluZWQodmFsdWUpID8gYXR0cihyb290Lm9uZSgpLCBuYW1lLCB2YWx1ZSkgOiBhdHRyKHJvb3Qub25lKCksIG5hbWUpO1xuICAgIHJvb3QuaW5qZWN0ID0gKGRhdGEsIGFwcGVuZCwgdG8pID0+IGluamVjdChyb290Lm9uZSgpLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICByb290LmFwcGVuZCA9IChkYXRhKSA9PiBpbmplY3Qocm9vdC5vbmUoKSwgZGF0YSwgdHJ1ZSk7XG4gICAgcm9vdC5zZWFyY2ggPSAoYXR0ciwgZnJvbSkgPT4gc2VhcmNoKHJvb3Qub25lKCksIGF0dHIsIGZyb20pO1xuICAgIHJvb3QucGFyZW50ID0gKCkgPT4gcm9vdC5vbmUoKS5wYXJlbnROb2RlO1xuICAgIHJvb3QuY2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgIHJvb3Qub25lKClcbiAgICB9O1xuICAgIHJvb3QucG9zaXRpb24gPSAoKSA9PiBwb3NpdGlvbihyb290Lm9uZSgpKTtcbiAgICByb290LnF1ZXJ5ID0gKHNlbGVjdG9yKSA9PiByb290Lm9uZSgpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJvb3QucXVlcnlBbGwgPSAoc2VsZWN0b3IpID0+IHJvb3Qub25lKCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgcm9vdC54ID0gKCkgPT4gcG9zaXRpb24ocm9vdC5vbmUoKSkueDtcbiAgICByb290LnkgPSAoKSA9PiBwb3NpdGlvbihyb290Lm9uZSgpKS55O1xuICAgIHJvb3Qud2lkdGggPSAoKSA9PiBwb3NpdGlvbihyb290Lm9uZSgpKS53aWR0aDtcbiAgICByb290LmhlaWdodCA9ICgpID0+IHBvc2l0aW9uKHJvb3Qub25lKCkpLmhlaWdodDtcbiAgICByb290LnJlbW92ZSA9ICgpID0+IHJvb3Qub25lKCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb290Lm9uZSgpKTtcbiAgICByb290LnNob3cgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHJvb3Qub25lKCk7XG4gICAgICAgIF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKHNyYyk7XG4gICAgICAgIGNzcyhzcmMsIHtkaXNwbGF5OiBzcmMgJiYgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA/IHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gOiAnYmxvY2snfSk7XG4gICAgfTtcbiAgICByb290LmhpZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHJvb3Qub25lKCk7XG4gICAgICAgIF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKHNyYyk7XG4gICAgICAgIGNzcyhzcmMsIHtkaXNwbGF5OiAnbm9uZSd9KTtcbiAgICB9O1xuICAgIHJvb3QudG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSByb290Lm9uZSgpO1xuICAgICAgICBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBxdWVyeUFsbChzcmMpLm1hcChEb20udG9nZ2xlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSkge1xuICAgICAgICAgICAgaWYgKHNyYy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIERvbS5zaG93KHNyYyk7XG4gICAgICAgICAgICBlbHNlIERvbS5oaWRlKHNyYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJvb3Qub24gPSAoZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSA9PiBvbihyb290Lm9uZSgpLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpO1xuICAgIHJvb3QuY29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSByb290Lm9uZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gbWVyZ2Uoe3RvcDogY29vcmRzLnRvcCArIHBhZ2VZT2Zmc2V0LCBsZWZ0OiBjb29yZHMubGVmdCArIHBhZ2VYT2Zmc2V0fSwgY29vcmRzKTtcbiAgICB9O1xuICAgIHJldHVybiByb290O1xufVxuXG5Eb20ub24gPSBvbjtcbkRvbS5pZCA9IChlbGVtZW50KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbkRvbS5hdHRyID0gYXR0cjtcbkRvbS5jc3MgPSBjc3M7XG5Eb20ubG9hZGVkID0gZG9tTG9hZGVkO1xuRG9tLmluamVjdCA9IGluamVjdDtcbkRvbS5zdHIybm9kZSA9IHN0cjJub2RlO1xuRG9tLnNlYXJjaCA9IHNlYXJjaDtcbkRvbS5xdWVyeUFsbCA9IHF1ZXJ5QWxsO1xuRG9tLnF1ZXJ5ID0gcXVlcnk7XG5Eb20uY3JlYXRlID0gY3JlYXRlRWxlbWVudDtcbkRvbS5mcmFnbWVudCA9IGNyZWF0ZUZyYWdtZW50O1xuRG9tLm5vZGUyc3RyID0gbm9kZTJzdHI7XG5Eb20uc3RyMm5vZGUgPSBzdHIybm9kZTtcbkRvbS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsIi8qKlxuICogRW1tZXQgc3ludGF4IGZvciBjcmVhdGluZyBET00gZWxlbWVudHNcbiAqXG4gKiBTeW50YXhcbiAqICAgY29uc3QgZW1tZXQgPSBFbW1ldCgpO1xuICogICBlbW1ldCgnLnRhYmxlID4gZGl2e2xlZnR9ICsgZGl2KGNsYXNzPVwidGV4dC1yaWdodFwiKXtyaWdodH0nKVxuICogICB0YWcjaWQuY2xhc3NlcyhhdHRyaWJ1dGVzPVwiXCIpe2lubmVyIHRleHR9ID4gLm5lc3RlZCBeIC5iYWNrZWQudXAub25lICsgLnNpYmxpbmdcbiAqXG4gKiBBcmd1bWVudHNcbiAqICAgLmVtbWV0KCBzeW50YXggOiBzdHJpbmcsIHJldHVybk9ubHlIVE1MIDogYm9vbGVhbiApXG4gKlxuICogQG5hbWVzcGFjZSBFbW1ldFxuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB0ZXh0ICAgICAgICAgIHN5bnRheFxuICogQHBhcmFtIGh0bWxPbmx5ICAgICAgcmV0dXJuT25seUhUTUxcbiAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAqL1xuY29uc3QgRW1tZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0ICB0ZW1wSW5uZXJUZXh0cyA9IFtdO1xuICAgIGxldCAgdGVtcEVzY2FwZWQgPSBbXTtcbiAgICBjb25zdCByZSA9IHt9O1xuXG4gICAgcmUuZXhjbHVkZXMgPSBcIihbXlxcXFwuI1xcXFwoXFxcXHtdKylcIjtcbiAgICByZS5jbGFzc2VzID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIgKyByZS5leGNsdWRlcywgXCJnXCIpO1xuICAgIHJlLmlkID0gbmV3IFJlZ0V4cChcIiNcIiArIHJlLmV4Y2x1ZGVzLCBcImdcIik7XG4gICAgcmUudGFnID0gbmV3IFJlZ0V4cChcIl5cIiArIHJlLmV4Y2x1ZGVzKTtcbiAgICByZS5pbmRleGVzID0gLyguKz8pKD58XFwrfFxcXnwkKS9nO1xuICAgIHJlLmVzY2FwZSA9IC8oXCJ8JykoW15cXDFdKj8pXFwxL2c7XG4gICAgcmUuaW5uZXJUZXh0ID0gL1xceyhbXn1dKj8pfS9nO1xuICAgIHJlLmF0dHJzID0gL1xcKChbXlxcKV0qKVxcKS9nO1xuXG4gICAgY29uc3QgZW1tZXQgPSBmdW5jdGlvbiAodGV4dCwgaHRtbE9ubHkpIHtcbiAgICAgICAgbGV0IHRyZWUgPSBlbGVtZW50KCksXG4gICAgICAgICAgICBjdXJyZW50ID0gdHJlZSxcbiAgICAgICAgICAgIGxhc3RFbGVtZW50ID0gdHJlZSxcbiAgICAgICAgICAgIGNvbW1hbmRUZXh0ID0gdGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgY29udmVydENvbGxlY3Rpb24gPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNyYy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNyY1swXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgICB0ZW1wSW5uZXJUZXh0cyA9IFtdO1xuICAgICAgICB0ZW1wRXNjYXBlZCA9IFtdO1xuICAgICAgICBjb21tYW5kVGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UocmUuZXNjYXBlLCBmdW5jdGlvbiAoZnVsbCwgcXVvdGVzLCBlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wRXNjYXBlZC5wdXNoKGVzY2FwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlxcXCJcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZShyZS5pbm5lclRleHQsIGZ1bmN0aW9uIChmdWxsLCBpbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wSW5uZXJUZXh0cy5wdXNoKGlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwie31cIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UocmUuaW5kZXhlcywgZnVuY3Rpb24gKGZ1bGwsIGVsZW1lbnRUZXh0LCBzcGxpdHRlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQobGFzdEVsZW1lbnQgPSBlbGVtZW50KGVsZW1lbnRUZXh0KSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSBcIj5cIilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGxhc3RFbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNwbGl0dGVyID09PSBcIl5cIilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJlc3VsdCA9IHRyZWUuY2hpbGRyZW4ubGVuZ3RoID4gMVxuICAgICAgICAgICAgPyB0cmVlLmNoaWxkcmVuXG4gICAgICAgICAgICA6IHRyZWUuY2hpbGRyZW5bMF07XG5cbiAgICAgICAgcmV0dXJuIGh0bWxPbmx5XG4gICAgICAgICAgICA/IHRyZWUuaW5uZXJIVE1MXG4gICAgICAgICAgICA6IChyZXN1bHQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiA/IGNvbnZlcnRDb2xsZWN0aW9uKHJlc3VsdCkgOiByZXN1bHQpO1xuICAgIH07XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgbGV0IGNvbW1hbmRUZXh0ID0gdGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgbWF0Y2hfdGFnID0gY29tbWFuZFRleHQubWF0Y2gocmUudGFnKSxcbiAgICAgICAgICAgIG1hdGNoX2lkID0gY29tbWFuZFRleHQubWF0Y2gocmUuaWQpLFxuICAgICAgICAgICAgbWF0Y2hfY2xhc3NlcyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmNsYXNzZXMpLFxuICAgICAgICAgICAgbWF0Y2hfYXR0cnMgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5hdHRycyksXG4gICAgICAgICAgICBtYXRjaF9pbm5lclRleHQgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5pbm5lclRleHQpLFxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobWF0Y2hfdGFnID8gbWF0Y2hfdGFnWzBdIDogXCJkaXZcIik7XG5cbiAgICAgICAgaWYgKG1hdGNoX2lkKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gbWF0Y2hfaWQucG9wKCkucmVwbGFjZShyZS5pZCwgXCIkMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9jbGFzc2VzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG1hdGNoX2NsYXNzZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lLnNsaWNlKDEpXG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9pbm5lclRleHQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IG1hdGNoX2lubmVyVGV4dC5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmVzY2FwZSh0ZW1wSW5uZXJUZXh0cy5zaGlmdCgpKTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2F0dHJzKSB7XG4gICAgICAgICAgICBtYXRjaF9hdHRycy5tYXAoZnVuY3Rpb24gKGNodW5rUGFyYW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rUGFyYW0ucmVwbGFjZShyZS5hdHRycywgXCIkMVwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgY2h1bmsubWFwKGZ1bmN0aW9uIChhdHRyUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJQYXJhbS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF0dHIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKHVuZXNjYXBlKGF0dHIuam9pbihcIj1cIikpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gZW1tZXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbW1ldDtcbiIsIlxuZXhwb3J0IGNvbnN0IEVWRU5UU19OQU1FUyA9IHtcbiAgICBjb3B5OiAnY29weScsXG4gICAgY3V0OiAnY3V0JyxcbiAgICBwYXN0ZTogJ3Bhc3RlJyxcbiAgICBhYm9ydDogJ2Fib3J0JyxcbiAgICBibHVyOiAnYmx1cicsXG4gICAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgICBjYW5wbGF5OiAnY2FucGxheScsXG4gICAgY2FucGxheXRocm91Z2g6ICdjYW5wbGF5dGhyb3VnaCcsXG4gICAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgICBjbGljazogJ2NsaWNrJyxcbiAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICBjb250ZXh0bWVudTogJ2NvbnRleHRtZW51JyxcbiAgICBjdWVjaGFuZ2U6ICdjdWVjaGFuZ2UnLFxuICAgIGRibGNsaWNrOiAnZGJsY2xpY2snLFxuICAgIGRyYWc6ICdkcmFnJyxcbiAgICBkcmFnZW5kOiAnZHJhZ2VuZCcsXG4gICAgZHJhZ2VudGVyOiAnZHJhZ2VudGVyJyxcbiAgICBkcmFnbGVhdmU6ICdkcmFnbGVhdmUnLFxuICAgIGRyYWdvdmVyOiAnZHJhZ292ZXInLFxuICAgIGRyYWdzdGFydDogJ2RyYWdzdGFydCcsXG4gICAgZHJvcDogJ2Ryb3AnLFxuICAgIGR1cmF0aW9uY2hhbmdlOiAnZHVyYXRpb25jaGFuZ2UnLFxuICAgIGVtcHRpZWQ6ICdlbXB0aWVkJyxcbiAgICBlbmRlZDogJ2VuZGVkJyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBpbnB1dDogJ2lucHV0JyxcbiAgICBpbnZhbGlkOiAnaW52YWxpZCcsXG4gICAga2V5ZG93bjogJ2tleWRvd24nLFxuICAgIGtleXByZXNzOiAna2V5cHJlc3MnLFxuICAgIGtleXVwOiAna2V5dXAnLFxuICAgIGxvYWQ6ICdsb2FkJyxcbiAgICBsb2FkZWRkYXRhOiAnbG9hZGVkZGF0YScsXG4gICAgbG9hZGVkbWV0YWRhdGE6ICdsb2FkZWRtZXRhZGF0YScsXG4gICAgbG9hZHN0YXJ0OiAnbG9hZHN0YXJ0JyxcbiAgICBtb3VzZWRvd246ICdtb3VzZWRvd24nLFxuICAgIG1vdXNlZW50ZXI6ICdtb3VzZWVudGVyJyxcbiAgICBtb3VzZWxlYXZlOiAnbW91c2VsZWF2ZScsXG4gICAgbW91c2Vtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBtb3VzZW91dDogJ21vdXNlb3V0JyxcbiAgICBtb3VzZW92ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNldXA6ICdtb3VzZXVwJyxcbiAgICBtb3VzZXdoZWVsOiAnbW91c2V3aGVlbCcsXG4gICAgcGF1c2U6ICdwYXVzZScsXG4gICAgcGxheTogJ3BsYXknLFxuICAgIHBsYXlpbmc6ICdwbGF5aW5nJyxcbiAgICBwcm9ncmVzczogJ3Byb2dyZXNzJyxcbiAgICByYXRlY2hhbmdlOiAncmF0ZWNoYW5nZScsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgcmVzaXplOiAncmVzaXplJyxcbiAgICBzY3JvbGw6ICdzY3JvbGwnLFxuICAgIHNlZWtlZDogJ3NlZWtlZCcsXG4gICAgc2Vla2luZzogJ3NlZWtpbmcnLFxuICAgIHNlbGVjdDogJ3NlbGVjdCcsXG4gICAgc3RhbGxlZDogJ3N0YWxsZWQnLFxuICAgIHN1Ym1pdDogJ3N1Ym1pdCcsXG4gICAgc3VzcGVuZDogJ3N1c3BlbmQnLFxuICAgIHRpbWV1cGRhdGU6ICd0aW1ldXBkYXRlJyxcbiAgICB0b2dnbGU6ICd0b2dnbGUnLFxuICAgIHZvbHVtZWNoYW5nZTogJ3ZvbHVtZWNoYW5nZScsXG4gICAgd2FpdGluZzogJ3dhaXRpbmcnLFxuICAgIHdoZWVsOiAnd2hlZWwnLFxuICAgIGF1eGNsaWNrOiAnYXV4Y2xpY2snLFxuICAgIGdvdHBvaW50ZXJjYXB0dXJlOiAnZ290cG9pbnRlcmNhcHR1cmUnLFxuICAgIGxvc3Rwb2ludGVyY2FwdHVyZTogJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgcG9pbnRlcmRvd246ICdwb2ludGVyZG93bicsXG4gICAgcG9pbnRlcm1vdmU6ICdwb2ludGVybW92ZScsXG4gICAgcG9pbnRlcnVwOiAncG9pbnRlcnVwJyxcbiAgICBwb2ludGVyY2FuY2VsOiAncG9pbnRlcmNhbmNlbCcsXG4gICAgcG9pbnRlcm92ZXI6ICdwb2ludGVyb3ZlcicsXG4gICAgcG9pbnRlcm91dDogJ3BvaW50ZXJvdXQnLFxuICAgIHBvaW50ZXJlbnRlcjogJ3BvaW50ZXJlbnRlcicsXG4gICAgcG9pbnRlcmxlYXZlOiAncG9pbnRlcmxlYXZlJyxcbiAgICBzZWxlY3RzdGFydDogJ3NlbGVjdHN0YXJ0JyxcbiAgICBzZWxlY3Rpb25jaGFuZ2U6ICdzZWxlY3Rpb25jaGFuZ2UnLFxuICAgIGFuaW1hdGlvbmVuZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICBhbmltYXRpb25zdGFydDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB0cmFuc2l0aW9uZW5kOiAndHJhbnNpdGlvbmVuZCcsXG59O1xuXG5leHBvcnQgY29uc3QgRVZFTlRTX05BTUVTX0JBU0lDID0ge1xuICAgIGJsdXI6ICdibHVyJyxcbiAgICBjaGFuZ2U6ICdjaGFuZ2UnLFxuICAgIGNsaWNrOiAnY2xpY2snLFxuICAgIGRibGNsaWNrOiAnZGJsY2xpY2snLFxuICAgIGRyYWc6ICdkcmFnJyxcbiAgICBkcmFnZW5kOiAnZHJhZ2VuZCcsXG4gICAgZHJhZ2VudGVyOiAnZHJhZ2VudGVyJyxcbiAgICBkcmFnbGVhdmU6ICdkcmFnbGVhdmUnLFxuICAgIGRyYWdvdmVyOiAnZHJhZ292ZXInLFxuICAgIGRyYWdzdGFydDogJ2RyYWdzdGFydCcsXG4gICAgZHJvcDogJ2Ryb3AnLFxuICAgIGZvY3VzOiAnZm9jdXMnLFxuICAgIGlucHV0OiAnaW5wdXQnLFxuICAgIGxvYWQ6ICdsb2FkJyxcbiAgICBtb3VzZWRvd246ICdtb3VzZWRvd24nLFxuICAgIG1vdXNlZW50ZXI6ICdtb3VzZWVudGVyJyxcbiAgICBtb3VzZWxlYXZlOiAnbW91c2VsZWF2ZScsXG4gICAgbW91c2Vtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBtb3VzZW91dDogJ21vdXNlb3V0JyxcbiAgICBtb3VzZW92ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNldXA6ICdtb3VzZXVwJyxcbiAgICBtb3VzZXdoZWVsOiAnbW91c2V3aGVlbCcsXG4gICAgc2Nyb2xsOiAnc2Nyb2xsJyxcbiAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIHN1Ym1pdDogJ3N1Ym1pdCcsXG4gICAgd2hlZWw6ICd3aGVlbCcsXG4gICAgdHJhbnNpdGlvbmVuZDogJ3RyYW5zaXRpb25lbmQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTX05BTUVTO1xuIiwiXG5jb25zdCBFdmVudE1hbmFnZXIgPSB7XG5cbiAgICBldmVudEZyYWdtZW50OiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgdmVyc2lvbjogJzAuMC4yJyxcbiAgICBldmVudHNUeXBlOiB7fSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZXRhaWxzXG4gICAgICogQHJldHVybnMge0N1c3RvbUV2ZW50fVxuICAgICAqL1xuICAgIGFkZEV2ZW50OiBmdW5jdGlvbihuYW1lLCBkZXRhaWxzKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtkZXRhaWw6IGRldGFpbHN9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGRldGFpbHMpXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBldmVudFtrZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFtuYW1lXSA9IGV2ZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFtuYW1lXSlcbiAgICAgICAgICAgIGRlbGV0ZSBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFtuYW1lXVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IHR5cGUgb24gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKiBAcmV0dXJucyB7e3R5cGU6ICosIGxpc3RlbmVyOiAqLCB1c2VDYXB0dXJlOiAoKnxib29sZWFuKX19XG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKXtcbiAgICAgICAgdXNlQ2FwdHVyZSA9IHVzZUNhcHR1cmUgfHwgZmFsc2U7XG4gICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmV8fGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFuIGV2ZW50IHRvIHRoaXMgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAodHlwZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFt0eXBlXSBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KVxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnQuZGlzcGF0Y2hFdmVudChFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFt0eXBlXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRNYW5hZ2VyO1xuIiwiLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcblxuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0XG4gICAgICAgIGtleSxcbiAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvcHRpb25zLmRhdGEpXG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IE5hbWVzcGFjZUFwcGxpY2F0aW9uIGZyb20gXCIuL05hbWVzcGFjZUFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCIuL2Nvb2tpZVwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IFNlc3Npb25TdG9yYWdlIGZyb20gXCIuL3Nlc3Npb24tc3RvcmFnZVwiO1xuaW1wb3J0IERhdGV0aW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2V2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IEVtbWV0IGZyb20gXCIuL2VtbWV0XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4vaHR0cC1yZXF1ZXN0XCI7XG5pbXBvcnQgRG9tIGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IFN0ciBmcm9tIFwiLi9zdHJcIjtcbmltcG9ydCBSb3h5IGZyb20gXCIuL3JveHlcIjtcbmltcG9ydCB7Um94eUxpc3RlbmVyfSBmcm9tIFwiLi9yb3h5XCI7XG5cblxud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uID0gTmFtZXNwYWNlQXBwbGljYXRpb247XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uVXRpbCA9IFV0aWw7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uQ29va2llID0gQ29va2llO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlN0b3JhZ2UgPSBTdG9yYWdlO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlNlc3Npb25TdG9yYWdlID0gU2Vzc2lvblN0b3JhZ2U7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRGF0ZXRpbWUgPSBEYXRldGltZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5FdmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uVGltZXIgPSBUaW1lcjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5FbW1ldCA9IEVtbWV0O1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLmh0dHBSZXF1ZXN0ID0gaHR0cFJlcXVlc3Q7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRG9tID0gRG9tO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlN0ciA9IFN0cjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Sb3h5ID0gUm94eTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Sb3h5TGlzdGVuZXIgPSBSb3h5TGlzdGVuZXI7XG53aW5kb3cuTnMgPSB3aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb247IiwiaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5cblxuLyoqXG4gKlxuICAgIGNvbnN0IHtVdGlsLCBEb20sIFJveHl9ID0gTmFtZXNwYWNlQXBwbGljYXRpb247XG5cbiAgICBjb25zdCByeERhdGEgPSBSb3h5KHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBib2R5OiAnJyxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldFRvKGlkLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBEb20oJyMnICsgaWQpO1xuICAgICAgICBlbGVtLmluamVjdChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByeERhdGEuYWN0aW9uKChrZXksIHZhbHVlcyk9PntcbiAgICAgICAgc2V0VG8oa2V5LCB2YWx1ZXMpO1xuICAgIH0pO1xuXG4gICAgVGltZXIudGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJ4RGF0YS5zZXQoJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgICAgICByeERhdGEuc2V0KCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG4gICAgfSwgMjAwMCk7XG5cbiAgICBUaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICAgICAgcnhEYXRhLnNldCgnYm9keScsICdObyB5ZXMgb2Zjb3Vyc2UnKTtcbiAgICB9LCA0MDAwKTtcbiAqXG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIHNldCgqPSwgKj0pOiAqLCBnZXQoKik6ICosIGFjdGlvbigqPSwgKj0pOiAqLCBmaWxsKCo9LCAqPSk6ICp9fFJveHl8e318bnVsbHxib29sZWFufVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBhY3Rpb25zID0ge2RlZmF1bHQ6bnVsbH07XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uc1twcm9wXSAmJiB0eXBlb2YgYWN0aW9uc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIGFjdGlvbnNbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBkaXNwYXRjaCAoa2V5LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNldCAoa2V5LCBwYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHtSb3h5fVxuICAgICAgICAgKi9cbiAgICAgICAgc2V0IChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFjdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBhY3Rpb25zW2tleV0gPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGNhbGxiYWNrIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbCAocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJveHksXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50X25hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50X25hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogfSlcbiAqIHJ4LnNldCgpO1xuICogcnguZGlzcGF0Y2goKTtcbiAqXG4gKiByeC5hY3Rpb24oKTtcbiAqXG4gKiBAdHlwZSBvYmplY3QgcGF5bG9hZFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHt9XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbnNOYW1lcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkubWFwKGZ1bmN0aW9uKGV2ZW50X25hbWUsIGluZGV4KSB7XG4gICAgICAgIGFjdGlvbnNbZXZlbnRfbmFtZV0gPSBwYXlsb2FkW2V2ZW50X25hbWVdO1xuXG4gICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50X25hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50X25hbWUgIT09IGFjdGlvbnMuX19hY3Rpb25fXy5uYW1lICkge1xuICAgICAgICAgICBhY3Rpb25zTmFtZXNbZXZlbnRfbmFtZV0gPSAnJztcbiAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByeCA9IFJveHkoYWN0aW9uc05hbWVzKTtcblxuICAgIHJ4LmFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zTmFtZXNcbiAgICB9O1xuXG4gICAgcnguYWN0aW9uKChldmVudF9jdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudF9jdXJzb3IsIHZhbHVlcyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykubWFwKGZ1bmN0aW9uIChldmVudF9uYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRfY3Vyc29yID09PSBldmVudF9uYW1lICYmIHR5cGVvZiBhY3Rpb25zW2V2ZW50X25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudF9uYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50X2N1cnNvciwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiByeDtcbn07XG4iLCJcbi8qKlxuICogQWRkIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBqc29uID0gdHJ1ZSkge1xuICAgIGlmIChqc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwganNvbiA9IHRydWUpIHtcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAoanNvbiAmJiB2YWx1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKnRydWVcbiAqIFJlbW92ZSBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IGluZGV4XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGtleSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uua2V5KGluZGV4KVxufTtcblxuLyoqXG4gKiBXaGVuIGludm9rZWQsIHdpbGwgZW1wdHkgYWxsIGtleXMgb3V0IG9mIHRoZSBTZXNzaW9uU3RvcmFnZS5cbiAqL1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpXG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU2Vzc2lvblN0b3JhZ2Ugb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UubGVuZ3RoXG59O1xuXG4vKipcbiAqIFNlc3Npb25TdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7e3NldDogKFNlc3Npb25TdG9yYWdlLnNldHwqKSwgZ2V0OiAoU2Vzc2lvblN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTZXNzaW9uU3RvcmFnZS5rZXl8KiksIGNsZWFyOiAoU2Vzc2lvblN0b3JhZ2UuY2xlYXJ8KiksIHJlbW92ZTogKFNlc3Npb25TdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU2Vzc2lvblN0b3JhZ2UubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTZXNzaW9uU3RvcmFnZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXQobmFtZSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbi8vXG5TZXNzaW9uU3RvcmFnZS5zZXQgPSBzZXQ7XG5TZXNzaW9uU3RvcmFnZS5nZXQgPSBnZXQ7XG5TZXNzaW9uU3RvcmFnZS5rZXkgPSBrZXk7XG5TZXNzaW9uU3RvcmFnZS5jbGVhciA9IGNsZWFyO1xuU2Vzc2lvblN0b3JhZ2UucmVtb3ZlID0gcmVtb3ZlO1xuU2Vzc2lvblN0b3JhZ2Uuc2l6ZSA9IGxlbmd0aDtcblxuZXhwb3J0IHtcbiAgICBzZXQsXG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgbGVuZ3RoLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvblN0b3JhZ2U7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgbGlzdFtrZXldLCBrZXksIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIGFwcGVuZCwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSAoQUJDICsgTlVNQkVSUykudG9Mb3dlckNhc2UoKS5zcGxpdCgnJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz1cbiAgICAgICAgICAgIGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicpXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBhdHRyXG4gKiBAcGFyYW0gZnJvbVxuICogQHJldHVybiB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCIvKipcbiAqIHRvQXJyYXkgKCAkdmFyLCB7IHZhbHVlczogdHJ1ZSB9KVxuICpcbiAqIG9wdGlvbnNcbiAqICAgIHZhbHVlcyAtIGdldHMgdmFsdWVzIG9mIG9iamVjdCB0byBuZXcgYXJyYXkgdmFsdWVzXG4gKlxuICogQHBhcmFtIGVudHJpZXNcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcmV0dXJuIHtbXX1cbiAqL1xuY29uc3QgdG9BcnJheSA9IGZ1bmN0aW9uIChlbnRyaWVzLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdmFsdWVzID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndmFsdWVzJykgPyBvcHRpb25zLnZhbHVlcyA6IHRydWU7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBlbnRyaWVzO1xuICBsZXQgZGF0YSA9IFtdO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoZW50cmllcykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICAgIGRhdGEgPSBBcnJheS5hcHBseShbXSwgZW50cmllcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHZhbHVlc1xuICAgICAgICAgICAgPyBPYmplY3QudmFsdWVzKGVudHJpZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4ga2V5KVxuICAgICAgICAgICAgOiBPYmplY3Qua2V5cyhlbnRyaWVzKS5tYXAoKGtleSwgaW5kZXgpID0+IGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGRhdGEucHVzaChlbnRyaWVzKVxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvQXJyYXk7XG4iLCIvKipcbiAqIHRvTWFwKCB7ICcxJzogNSwgJzInOiA3LCAnMyc6IDAgfSApXG4gKiByZXN1bHQgWyBbIDEsIDUgXSwgWyAyLCA3IF0sIFsgMywgMCBdIF1cbiAqXG4gKiBAcGFyYW0gZW50cmllc1xuICogQHJldHVybiB7W251bWJlciwgKl1bXX1cbiAqL1xuY29uc3QgdG9NYXAgPSBmdW5jdGlvbiAoZW50cmllcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZW50cmllcykubWFwKChrZXkpID0+IFtOdW1iZXIoa2V5KSwgZW50cmllc1trZXldXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b01hcDtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5cbi8vIHR5cGVPZih7fSAgICAgICAgICAgICkgICAgIC0gb2JqZWN0XG4vLyB0eXBlT2YoezE6MTAsMjoyMH0gICApICAgICAtIG9iamVjdFxuLy8gdHlwZU9mKFtdICAgICAgICAgICAgKSAgICAgLSBhcnJheVxuLy8gdHlwZU9mKG51bGwgICAgICAgICAgKSAgICAgLSBudWxsXG4vLyB0eXBlT2YoJycgICAgICAgICAgICApICAgICAtIHN0cmluZ1xuLy8gdHlwZU9mKDEwMCAgICAgICAgICAgKSAgICAgLSBudW1iZXJcbi8vIHR5cGVPZih1bmRlZmluZWQgICAgICkgICAgIC0gdW5kZWZpbmVkXG4vLyB0eXBlT2YodHJ1ZSAgICAgICAgICApICAgICAtIGJvb2xlYW5cbi8vIHR5cGVPZigoKT0+e30gICAgICAgICkgICAgIC0gZnVuY3Rpb25cblxuLyoqXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHNpbXBsZVR5cGVzID0gWydudWxsJywgJ2Jvb2xlYW4nLCAndW5kZWZpbmVkJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdudW1iZXInLCAnZGF0ZScsICdhcnJheScsICdvYmplY3QnXTtcbiAgICBsZXQgdCA9IHR5cGVPZlN0cmljdCh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2ltcGxlVHlwZXMuaW5kZXhPZih0KSA9PT0gLTEgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgdCA9ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2Y7XG4iLCIvLyB0eXBlb2Yge30gICAgICAgICAgICAtIG9iamVjdFxuLy8gdHlwZW9mIHsxOjEwLDI6MjB9ICAgLSBvYmplY3Rcbi8vIHR5cGVvZiBbXSAgICAgICAgICAgIC0gb2JqZWN0XG4vLyB0eXBlb2YgbnVsbCAgICAgICAgICAtIG9iamVjdFxuLy8gdHlwZW9mICcnICAgICAgICAgICAgLSBzdHJpbmdcbi8vIHR5cGVvZiAxMDAgICAgICAgICAgIC0gbnVtYmVyXG4vLyB0eXBlb2YgdW5kZWZpbmVkICAgICAtIHVuZGVmaW5lZFxuLy8gdHlwZW9mIHRydWUgICAgICAgICAgLSBib29sZWFuXG4vLyB0eXBlb2YgKCk9Pnt9ICAgICAgICAtIGZ1bmN0aW9uXG5cbi8vIHR5cGVPZlN0cmljdCh7fSAgICAgICAgICAgICkgICAgICAgIC0gT2JqZWN0XG4vLyB0eXBlT2ZTdHJpY3QoezE6MTAsMjoyMH0gICApICAgICAgICAtIE9iamVjdFxuLy8gdHlwZU9mU3RyaWN0KFtdICAgICAgICAgICAgKSAgICAgICAgLSBBcnJheVxuLy8gdHlwZU9mU3RyaWN0KG51bGwgICAgICAgICAgKSAgICAgICAgLSBOdWxsXG4vLyB0eXBlT2ZTdHJpY3QoJycgICAgICAgICAgICApICAgICAgICAtIFN0cmluZ1xuLy8gdHlwZU9mU3RyaWN0KDEwMCAgICAgICAgICAgKSAgICAgICAgLSBOdW1iZXJcbi8vIHR5cGVPZlN0cmljdCh1bmRlZmluZWQgICAgICkgICAgICAgIC0gVW5kZWZpbmVkXG4vLyB0eXBlT2ZTdHJpY3QodHJ1ZSAgICAgICAgICApICAgICAgICAtIEJvb2xlYW5cbi8vIHR5cGVPZlN0cmljdCgoKT0+e30gICAgICAgICkgICAgICAgIC0gRnVuY3Rpb25cbi8qKlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iLCJcbi8qKlxuICogQWRkIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBqc29uID0gdHJ1ZSkge1xuICAgIGlmIChqc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBHZXQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIGpzb24gPSB0cnVlKSB7XG4gICAgbGV0IHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmIChqc29uICYmIHZhbHVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqdHJ1ZVxuICogUmVtb3ZlIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IGluZGV4XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGtleSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmtleShpbmRleClcbn07XG5cbi8qKlxuICogV2hlbiBpbnZva2VkLCB3aWxsIGVtcHR5IGFsbCBrZXlzIG91dCBvZiB0aGUgc3RvcmFnZS5cbiAqL1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGF0YSBpdGVtcyBzdG9yZWQgaW4gdGhlIFN0b3JhZ2Ugb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aFxufTtcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHt7c2V0OiAoU3RvcmFnZS5zZXR8KiksIGdldDogKFN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTdG9yYWdlLmtleXwqKSwgY2xlYXI6IChTdG9yYWdlLmNsZWFyfCopLCByZW1vdmU6IChTdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU3RvcmFnZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0b3JhZ2UgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KG5hbWUpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG4vL1xuU3RvcmFnZS5zZXQgPSBzZXQ7XG5TdG9yYWdlLmdldCA9IGdldDtcblN0b3JhZ2Uua2V5ID0ga2V5O1xuU3RvcmFnZS5jbGVhciA9IGNsZWFyO1xuU3RvcmFnZS5yZW1vdmUgPSByZW1vdmU7XG5TdG9yYWdlLnNpemUgPSBsZW5ndGg7XG5cbmV4cG9ydCB7XG4gICAgc2V0LFxuICAgIGdldCxcbiAgICBrZXksXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGxlbmd0aCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuXG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJztcbiAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59O1xuXG5mdW5jdGlvbiBTdHIgKHN0cmluZykge1xuICAgIGNvbnN0ICQgPSB7XG4gICAgICAgIHN0cmluZzogdHlwZU9mKHN0cmluZywgJ3N0cmluZycpID8gc3RyaW5nIDogJycsXG4gICAgICAgIGxlbmd0aDogc3RyaW5nLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgJC5jYXBpdGFsaXplID0gKCkgPT4gY2FwaXRhbGl6ZSgkLnN0cmluZyk7XG4gICAgJC51cHBlciA9ICgpID0+ICQuc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgJC5sb3dlciA9ICgpID0+ICQuc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgJC5wYWRFbmQgPSAodmFsdWUpID0+ICQuc3RyaW5nLnBhZEVuZCh2YWx1ZSk7XG4gICAgJC5wYWRTdGFydCA9ICh2YWx1ZSkgPT4gJC5zdHJpbmcucGFkU3RhcnQodmFsdWUpO1xuICAgICQuZWFjaCA9IChjYWxsYmFjaykgPT4gY2FsbGJhY2sgPyAkLnN0cmluZy5zcGxpdCgnJykuZm9yRWFjaChjYWxsYmFjaykgOiAkLnN0cmluZy5zcGxpdCgnJyk7XG5cbiAgICByZXR1cm4gJDtcbn1cblxuU3RyLm5vZGUyc3RyID0gbm9kZTJzdHI7XG5TdHIuc3RyMm5vZGUgPSBzdHIybm9kZTtcblN0ci5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcblN0ci5lYWNoID0gZWFjaDtcblxuXG5leHBvcnQgZGVmYXVsdCBTdHI7XG4iLCIvKipcbiAqIFNpbXBsZSB0aW1lciByZWFsaXNlLiBSZXR1cm4gc2VsZi1pbnN0YW5jZVxuICogdGltZXIgPSBuZXcgLlRpbWVyKGZ1bmN0aW9uKGl0ZXJhdG9yLCByZXBlYXQpe30sIDEwMDAsIDUpXG4gKiAgSW5zdGFuY2UgbWV0aG9kc1xuICogICAgICB0aW1lci5yZXBlYXRcbiAqICAgICAgdGltZXIuaXRlcmF0b3JcbiAqICAgICAgdGltZXIuc3RhcnQgKClcbiAqICAgICAgdGltZXIuc3RvcCAoKVxuICogICAgICB0aW1lci5wYXVzZSAoKVxuICogICAgICB0aW1lci5yZXNldCAoKVxuICogICAgICB0aW1lci5jbGVhciAoKVxuICogIFN0YXRpYyBtZXRob2RzXG4gKiAgICAgIFRpbWVyLnRpbWVvdXQgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogdGltZW91dElkXG4gKiAgICAgIFRpbWVyLmludGVydmFsIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSA6IGludGVydmFsSWRcbiAqICAgICAgVGltZXIudGltZW91dFN0b3AgKHRpbWVvdXRJZClcbiAqICAgICAgVGltZXIuaW50ZXJ2YWxTdG9wIChpbnRlcnZhbElkKVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEBwYXJhbSByZXBlYXRcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2UgIGlmIG5vdCBzZXQsIHVzZXMgaW5zdGFuY2Ugb2YgVGltZXJcbiAqIEByZXR1cm5zIHtXaW5kb3cuVGltZXJ8VGltZXJ9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUaW1lcikpXG4gICAgICAgIHJldHVybiBuZXcgVGltZXIoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSk7XG5cbiAgICBkZWxheSA9IGRlbGF5ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChkZWxheSkgOiA1MDA7XG4gICAgcmVwZWF0ID0gcmVwZWF0ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChyZXBlYXQpIDogMDtcbiAgICBjb25zdCBjb25maWcgPSB7c2VsZjogdGhpcywgY2FsbGJhY2s6IGNhbGxiYWNrLCBkZWxheTogZGVsYXksIHJlcGVhdDogcmVwZWF0fTtcblxuICAgIGxldCBodCA9IG51bGw7XG4gICAgY29uc3QgaGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbmZpZy5zZWxmLml0ZXJhdG9yKys7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ICE9PSAwICYmIGNvbmZpZy5yZXBlYXQgPD0gY29uZmlnLnNlbGYuaXRlcmF0b3IpXG4gICAgICAgICAgICBjb25maWcuc2VsZi5zdG9wKCk7XG4gICAgICAgIGNvbmZpZy5jYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB0aGlzLCBjb25maWcuc2VsZi5pdGVyYXRvciwgY29uZmlnLnJlcGVhdCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ID09PSAwIHx8IGNvbmZpZy5yZXBlYXQgPiBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGh0ID0gc2V0SW50ZXJ2YWwoaGMsIGNvbmZpZy5kZWxheSk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjb25maWcucmVwZWF0O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKClcbiAgICB9O1xuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSAwXG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKGh0KVxuICAgIH07XG59O1xuXG5UaW1lci50aW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5pbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnRpbWVvdXRTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmludGVydmFsU3RvcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7ZXh0ZW5kUmVjdXJzaXZlfSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7cmFuZG9tQ29sb3IsIHJhbmRvbUl0ZW0sIHJhbmRvbU51bWJlciwgcmFuZG9tU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IHRvQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy90b0FycmF5XCI7XG5pbXBvcnQgdG9NYXAgZnJvbSBcIi4uL3N0YXRpYy90b01hcFwiO1xuXG5jb25zdCBVdGlsID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgY29weSxcbiAgICBjbG9uZTogY29weSxcbiAgICBkb21Mb2FkZWQsXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgdG9BcnJheSxcbiAgICB0b01hcCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iXSwic291cmNlUm9vdCI6IiJ9