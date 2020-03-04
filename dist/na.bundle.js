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
NamespaceApplication.MODE_DEBUG = 'debug';

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
        if (node !== comp.template) (0, _inject2.default)(node, comp.template);
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

var state = function state(key, data) {
    return data === undefined ? state.get(key) : state.set(key, data);
};

state.callback = {};
state.source = createSource();
state.create = createSource();
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
    $.query = function (selector) {
        return $.one().querySelector(selector);
    };
    $.queryAll = function (selector) {
        return $.one().querySelectorAll(selector);
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
window.NamespaceApplication.Datetime = _datetime2.default;
window.NamespaceApplication.EventManager = _eventManager2.default;
window.NamespaceApplication.Timer = _timer2.default;
window.NamespaceApplication.Emmet = _emmet2.default;
window.NamespaceApplication.httpRequest = _httpRequest2.default;
window.NamespaceApplication.Dom = _dom2.default;
window.NamespaceApplication.Str = _str2.default;
window.NamespaceApplication.Roxy = _roxy2.default;

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

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        set: function set(key, payload) {
            if (typeof key === "function") {
                var result = key.call({}, proxy);
                if (result) this.fill(result);
            } else if (typeof payload === "function") {
                var _result = payload.call({}, proxy[key]);
                if (_result) proxy[key] = _result;
            } else proxy[key] = payload;

            return this;
        },
        action: function action(key, callback) {
            if (typeof key === "function" && !callback) {
                actions.default = key;
            }
            actions[key] = typeof callback === "function" ? callback : null;

            return this;
        },
        get: function get(key) {
            return key ? proxy[key] : (0, _copy2.default)(proxy);
        },
        fill: function fill(payload) {
            Object.keys(payload).forEach(function (key) {
                proxy[key] = payload[key];
            });

            return this;
        },

        proxy: proxy
    };
};

exports.default = Roxy;

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

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeOf = function typeOf(value, type) {
    var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    var t = (0, _typeOfStrict2.default)(value).toLowerCase();
    //if (isNode(value))
    //    t = 'node';
    //else
    if (simpleTypes.indexOf(t) === -1 && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') t = 'object';

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = {
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
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
    copy: _copy2.default,
    clone: _copy2.default
};

exports.default = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm94eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hbWVzcGFjZUFwcGxpY2F0aW9uIiwiY29uZmlnIiwiaW5zdGFuY2UiLCJrZXkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvbmZpZ3VyYXRpb24iLCJpZCIsInVybCIsIm1vZGUiLCJkZWJ1ZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZGVmaW5lUHJvcGVydHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cml0YWJsZSIsImNvbXBvbmVudCIsInJlZ2lzdGVyIiwiZXh0ZW5zaW9uIiwiZGVwZW5kZW5jeSIsInJvdXRlIiwiTU9ERV9ERUJVRyIsIkNvb2tpZSIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZXQiLCJnZXQiLCJjbGVhciIsInJlbW92ZSIsIm9wdGlvbnMiLCJ0eXBlSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleHBpcmVzIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsImVuY29kZSIsImNvb2tpZSIsIm1hdGNoZXMiLCJtYXRjaCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkYXRhSnNvbiIsInBhcnNlIiwib3B0aW9uIiwic3RyIiwiZGVjb2RlIiwiY29va2llcyIsInNwbGl0IiwicGFydHMiLCJ0cmltIiwibGlzdCIsImNvbXAiLCJjcmVhdGUiLCJpbml0IiwiaW5pdGlhbGl6ZWQiLCJ0ZW1wbGF0ZSIsIm5vZGUiLCJzdHlsZXMiLCJzZXRTdHlsZXMiLCJhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlciIsIkVWRU5UU19OQU1FU19CQVNJQyIsImluamVjdENvbXBvbmVudCIsInJvb3QiLCJFcnJvciIsImNvbXBsZXRlIiwiY29tcGxldGVkIiwiY2FsbCIsInByb3BzIiwib3ZlcnJpZGUiLCJtZXRob2RzIiwicHJlZml4IiwiZXZlbnRzTmFtZXMiLCJhZGRFdmVudCIsImVsZW0iLCJhdHRyIiwiZXZlbnROYW1lIiwibWV0aG9kIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicGF0aCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYXNBdHRyaWJ1dGUiLCJub2RlcyIsInByb3AiLCJzZWxlY3RvciIsInN0eWxlIiwiZm9yY2UiLCJzb3VyY2VzIiwiY3NzIiwianMiLCJlbGVtZW50cyIsImxvYWQiLCJtYXgiLCJzcmNzIiwiaSIsImxvYWRDU1MiLCJsb2FkSlMiLCJzcmMiLCJwdXNoIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbnRleHQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhdGUiLCJjYWxsYmFjayIsInNvdXJjZSIsImNyZWF0ZVNvdXJjZSIsInNvdXJjZWRhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0Q2FzZSIsIlByb3h5Iiwib2JqIiwiRGF0ZXRpbWUiLCJNU19JTl9EQVkiLCJNU19JTl9IT1VSIiwiTVNfSU5fTUlOIiwidGltZSIsImFkZERheXMiLCJkYXkiLCJkYXRlU3RhcnQiLCJiZXR3ZWVuRGF0ZXMiLCJkYXRlRnJvbSIsImRhdGVUbyIsImRpZmZNcyIsImRpZmZEYXlzIiwiTWF0aCIsInJvdW5kIiwiZGlmZkhycyIsImRpZmZNaW4iLCJob3VyIiwibWludXRlIiwic3RyVG9EYXRlIiwiZm9ybWF0IiwidXRjIiwidGVtcCIsIm1hc2siLCJ0b0xvd2VyQ2FzZSIsIlVUQyIsIkRvbSIsIiQiLCJzZWxlY3RlZCIsIl9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlIiwibWFwIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJvbmUiLCJhbGwiLCJpbmplY3QiLCJhcHBlbmQiLCJ0byIsInNlYXJjaCIsInBhcmVudCIsImNoaWxkcmVuIiwicG9zaXRpb24iLCJxdWVyeSIsInF1ZXJ5QWxsIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInNob3ciLCJoaWRlIiwidG9nZ2xlIiwib24iLCJidWJibGUiLCJjb29yZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImxlZnQiLCJwYWdlWE9mZnNldCIsImxvYWRlZCIsImRvbUxvYWRlZCIsInN0cjJub2RlIiwiY3JlYXRlRWxlbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnQiLCJub2RlMnN0ciIsIkVtbWV0IiwidGVtcElubmVyVGV4dHMiLCJ0ZW1wRXNjYXBlZCIsInJlIiwiZXhjbHVkZXMiLCJjbGFzc2VzIiwidGFnIiwiaW5kZXhlcyIsImVzY2FwZSIsImlubmVyVGV4dCIsImF0dHJzIiwiZW1tZXQiLCJ0ZXh0IiwiaHRtbE9ubHkiLCJ0cmVlIiwiY3VycmVudCIsImxhc3RFbGVtZW50IiwiY29tbWFuZFRleHQiLCJjb252ZXJ0Q29sbGVjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsInJlc3VsdCIsImZ1bGwiLCJxdW90ZXMiLCJlbGVtZW50VGV4dCIsInNwbGl0dGVyIiwiaW5uZXJIVE1MIiwiSFRNTENvbGxlY3Rpb24iLCJtYXRjaF90YWciLCJtYXRjaF9pZCIsIm1hdGNoX2NsYXNzZXMiLCJtYXRjaF9hdHRycyIsIm1hdGNoX2lubmVyVGV4dCIsInBvcCIsImNsYXNzTmFtZSIsInNsaWNlIiwiam9pbiIsInVuZXNjYXBlIiwic2hpZnQiLCJjaHVua1BhcmFtIiwiY2h1bmsiLCJhdHRyUGFyYW0iLCJzZXRBdHRyaWJ1dGUiLCJFVkVOVFNfTkFNRVMiLCJjb3B5IiwiY3V0IiwicGFzdGUiLCJhYm9ydCIsImJsdXIiLCJjYW5jZWwiLCJjYW5wbGF5IiwiY2FucGxheXRocm91Z2giLCJjaGFuZ2UiLCJjbGljayIsImNsb3NlIiwiY29udGV4dG1lbnUiLCJjdWVjaGFuZ2UiLCJkYmxjbGljayIsImRyYWciLCJkcmFnZW5kIiwiZHJhZ2VudGVyIiwiZHJhZ2xlYXZlIiwiZHJhZ292ZXIiLCJkcmFnc3RhcnQiLCJkcm9wIiwiZHVyYXRpb25jaGFuZ2UiLCJlbXB0aWVkIiwiZW5kZWQiLCJmb2N1cyIsImlucHV0IiwiaW52YWxpZCIsImtleWRvd24iLCJrZXlwcmVzcyIsImtleXVwIiwibG9hZGVkZGF0YSIsImxvYWRlZG1ldGFkYXRhIiwibG9hZHN0YXJ0IiwibW91c2Vkb3duIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJtb3VzZW1vdmUiLCJtb3VzZW91dCIsIm1vdXNlb3ZlciIsIm1vdXNldXAiLCJtb3VzZXdoZWVsIiwicGF1c2UiLCJwbGF5IiwicGxheWluZyIsInByb2dyZXNzIiwicmF0ZWNoYW5nZSIsInJlc2V0IiwicmVzaXplIiwic2Nyb2xsIiwic2Vla2VkIiwic2Vla2luZyIsInNlbGVjdCIsInN0YWxsZWQiLCJzdWJtaXQiLCJzdXNwZW5kIiwidGltZXVwZGF0ZSIsInZvbHVtZWNoYW5nZSIsIndhaXRpbmciLCJ3aGVlbCIsImF1eGNsaWNrIiwiZ290cG9pbnRlcmNhcHR1cmUiLCJsb3N0cG9pbnRlcmNhcHR1cmUiLCJwb2ludGVyZG93biIsInBvaW50ZXJtb3ZlIiwicG9pbnRlcnVwIiwicG9pbnRlcmNhbmNlbCIsInBvaW50ZXJvdmVyIiwicG9pbnRlcm91dCIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInNlbGVjdHN0YXJ0Iiwic2VsZWN0aW9uY2hhbmdlIiwiYW5pbWF0aW9uZW5kIiwiYW5pbWF0aW9uaXRlcmF0aW9uIiwiYW5pbWF0aW9uc3RhcnQiLCJ0cmFuc2l0aW9uZW5kIiwiRXZlbnRNYW5hZ2VyIiwiZXZlbnRGcmFnbWVudCIsInZlcnNpb24iLCJldmVudHNUeXBlIiwiZGV0YWlscyIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJoYXNPd25Qcm9wZXJ0eSIsInJlbW92ZUV2ZW50IiwidHlwZSIsImxpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiaHR0cFJlcXVlc3QiLCJ0aGlzSW5zdGFuY2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImhyZWYiLCJ0b1VwcGVyQ2FzZSIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsInBhcmFtcyIsInNlbmREYXRhIiwiaW5kZXhPZiIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJ3aW5kb3ciLCJVdGlsIiwiU3RvcmFnZSIsIlRpbWVyIiwiU3RyIiwiUm94eSIsImFjdGlvbnMiLCJkZWZhdWx0IiwicHJveHkiLCJmaWxsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJ0eXBlX2VsZW1lbnQiLCJjbG9uZU5vZGUiLCJpc0FycmF5IiwiYmluZCIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsInByb3BlcnRpZXMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsInN1YnN0cmluZyIsImRlY29kZUdldFF1ZXJ5IiwicGFpcnMiLCJzdWJzdHIiLCJpdGVtIiwicGFpciIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvYyIsImVhY2giLCJ2IiwiYSIsIk5vZGVMaXN0IiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbmNvZGVHZXRRdWVyeSIsImV4dGVuZCIsImRlc3RpbmF0aW9uIiwicGFyYW0iLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwidmFsdWVzIiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZpbmQiLCJzdHJpbmciLCJyZWciLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwidGV4dENvbnRlbnQiLCJpc0VtcHR5IiwiaXNOYU4iLCJpc05vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJsaW5rIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZWwiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwibG9hZEpTU3luYyIsIml0ZXJhdG9yIiwic2NyaXB0cyIsIm1lcmdlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJudW1iZXIyc3RyaW5nIiwiYWJzIiwicG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVjdCIsInNjcm9sbFRvcCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwicG9zaXRpb25Nb3VzZSIsIk1vdXNlRXZlbnQiLCJjb25zb2xlIiwiY2xpZW50WCIsImNsaWVudFkiLCJtaW4iLCJmbG9vciIsInJhbmRvbUNvbG9yIiwibGV0dGVycyIsImNvbG9yIiwicmFuZG9tTnVtYmVyIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJyYW5kb21TdHJpbmciLCJyYW5kb21JdGVtIiwiYXJyIiwicmVkaXJlY3QiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwic3RyMmZyYWdtZW50IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiY2hpbGRFbGVtZW50Q291bnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInR5cGVPZiIsInNpbXBsZVR5cGVzIiwidCIsInR5cGVPZlN0cmljdCIsInVyaSIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsImNhcGl0YWxpemUiLCJzIiwiY2hhckF0IiwidXBwZXIiLCJsb3dlciIsInBhZEVuZCIsInBhZFN0YXJ0IiwiZGVsYXkiLCJyZXBlYXQiLCJzZWxmIiwiaHQiLCJoYyIsInN0b3AiLCJzdGFydCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVvdXQiLCJtcyIsInRoaXNJbnN0Iiwic2V0VGltZW91dCIsImludGVydmFsIiwidGltZW91dFN0b3AiLCJjbGVhclRpbWVvdXQiLCJpbnRlcnZhbFN0b3AiLCJjbG9uZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1BLG9CLEdBRUYsOEJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBSUQscUJBQXFCRSxRQUF6QixFQUNJLE9BQU9GLHFCQUFxQkUsUUFBNUI7O0FBRUosU0FBS0QsTUFBTCxHQUFjLFVBQUNFLEdBQUQsRUFBTUMsS0FBTjtBQUFBLGVBQWdCQSxVQUFVQyxTQUFWLEdBQXNCLE1BQUtDLGFBQUwsQ0FBbUJILEdBQW5CLENBQXRCLEdBQWdELE1BQUtHLGFBQUwsQ0FBbUJILEdBQW5CLElBQTBCQyxLQUExRjtBQUFBLEtBQWQ7QUFDQSxTQUFLRSxhQUFMLEdBQXFCO0FBQ2pCQyxZQUFJRixTQURhO0FBRWpCRyxhQUFLSCxTQUZZO0FBR2pCSSxjQUFNSixTQUhXO0FBSWpCSyxlQUFPTDtBQUpVLEtBQXJCO0FBTUFNLFdBQU9DLElBQVAsQ0FBWVgsTUFBWixFQUFvQlksT0FBcEIsQ0FBNEIsVUFBQ1YsR0FBRCxFQUFTO0FBQ2pDLFlBQUksTUFBS0csYUFBTCxDQUFtQkgsR0FBbkIsTUFBNEJFLFNBQWhDLEVBQ0ksTUFBS0MsYUFBTCxDQUFtQkgsR0FBbkIsSUFBMEJGLE9BQU9FLEdBQVAsQ0FBMUI7QUFDUCxLQUhEOztBQUtBLFFBQUksS0FBS0csYUFBTCxDQUFtQkMsRUFBdkIsRUFBMkI7QUFDdkJJLGVBQU9HLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0M7QUFDaENWLG1CQUFPVyxTQUFTQyxhQUFULENBQXVCLEtBQUtWLGFBQUwsQ0FBbUJDLEVBQTFDLENBRHlCO0FBRWhDVSxzQkFBVTtBQUZzQixTQUFwQztBQUlIOztBQUVELFNBQUtDLFNBQUwsR0FBaUJBLG1CQUFqQjtBQUNBLFNBQUtBLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixJQUF4Qjs7QUFFQSxTQUFLQyxTQUFMLEdBQWlCQSxtQkFBakI7QUFDQSxTQUFLQSxTQUFMLENBQWVELFFBQWYsQ0FBd0IsSUFBeEI7O0FBRUEsU0FBS0UsVUFBTCxHQUFrQkEsb0JBQWxCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxlQUFiO0FBQ0E7O0FBRUF0Qix5QkFBcUJFLFFBQXJCLEdBQWdDLElBQWhDO0FBQ0gsQzs7QUFHTEYscUJBQXFCa0IsU0FBckIsR0FBaUNBLG1CQUFqQztBQUNBbEIscUJBQXFCb0IsU0FBckIsR0FBaUNBLG1CQUFqQztBQUNBcEIscUJBQXFCdUIsVUFBckIsR0FBa0MsT0FBbEM7O2tCQUVldkIsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGY7Ozs7Ozs7OztBQVNBLElBQU13QixTQUFTLFNBQVRBLE1BQVMsQ0FBVUMsSUFBVixFQUFnQnJCLEtBQWhCLEVBQXVCO0FBQ2xDLFlBQVFzQixVQUFVQyxNQUFsQjtBQUNJLGFBQUssQ0FBTDtBQUNJLG1CQUFPO0FBQ0hDLHFCQUFLQSxHQURGO0FBRUhDLHFCQUFLQSxHQUZGO0FBR0hDLHVCQUFPQSxLQUhKO0FBSUhDLHdCQUFRQSxNQUpMO0FBS0hKLHdCQUFRQTtBQUxMLGFBQVA7QUFPSixhQUFLLENBQUw7QUFDSSxtQkFBT0UsSUFBSUosSUFBSixDQUFQO0FBQ0osYUFBSyxDQUFMO0FBQ0ksbUJBQU9HLElBQUlILElBQUosRUFBVXJCLEtBQVYsQ0FBUDtBQVpSO0FBY0gsQ0FmRDs7QUFpQkE7Ozs7Ozs7Ozs7QUFVQSxJQUFNd0IsTUFBTSxTQUFOQSxHQUFNLENBQVVILElBQVYsRUFBZ0JyQixLQUFoQixFQUF1QjRCLE9BQXZCLEVBQ1o7QUFBQSxRQUQ0Q0MsUUFDNUMsdUVBRHVELElBQ3ZEOztBQUNJRCxjQUFVQSxXQUFXLEVBQXJCOztBQUdBLFFBQUlSLE9BQU9TLFFBQVgsRUFBcUIsQ0FBRTtBQUN2QixRQUFJQSxRQUFKLEVBQ0ksSUFBSTtBQUNBN0IsZ0JBQVE4QixLQUFLQyxTQUFMLENBQWUvQixLQUFmLENBQVI7QUFDSCxLQUZELENBRUUsT0FBT2dDLEtBQVAsRUFBYyxDQUFFOztBQUV0QixRQUFJQyxPQUFPWixPQUFPLEdBQVAsR0FBYWEsbUJBQW1CbEMsS0FBbkIsQ0FBeEI7O0FBRUEsUUFBSTRCLFFBQVFPLE9BQVosRUFBcUI7QUFDakIsWUFBSVAsUUFBUU8sT0FBUixZQUEyQkMsSUFBL0IsRUFBcUM7QUFDakNSLG9CQUFRTyxPQUFSLEdBQWtCUCxRQUFRTyxPQUFSLENBQWdCRSxXQUFoQixFQUFsQjtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFNQyxPQUFPLElBQUlGLElBQUosRUFBYjtBQUNBUixvQkFBUU8sT0FBUixHQUFrQkcsS0FBS0MsT0FBTCxDQUFhRCxLQUFLRSxPQUFMLEtBQWlCQyxTQUFTYixRQUFRTyxPQUFqQixJQUE0QixJQUExRCxDQUFsQjtBQUNIO0FBQ0o7O0FBRUQsUUFBSVAsUUFBUWMsTUFBWixFQUFvQjtBQUNoQmQsZ0JBQVEsU0FBUixJQUFxQkEsUUFBUWMsTUFBN0I7QUFDQSxlQUFPZCxRQUFRYyxNQUFmO0FBQ0g7QUFDRCxRQUFJZCxRQUFRZSxRQUFaLEVBQXNCO0FBQ2xCZixnQkFBUSxVQUFSLElBQXNCQSxRQUFRZSxRQUE5QjtBQUNBLGVBQU9mLFFBQVFlLFFBQWY7QUFDSDs7QUFFRFYsWUFBUVcsT0FBT2hCLE9BQVAsQ0FBUjtBQUNBakIsYUFBU2tDLE1BQVQsR0FBa0JaLElBQWxCO0FBQ0gsQ0FqQ0Q7O0FBbUNBOzs7Ozs7QUFNQSxJQUFNUixNQUFNLFNBQU5BLEdBQU0sQ0FBVUosSUFBVixFQUFpQztBQUFBLFFBQWpCUSxRQUFpQix1RUFBTixJQUFNOztBQUN6QyxRQUFNaUIsVUFBVW5DLFNBQVNrQyxNQUFULENBQWdCRSxLQUFoQixDQUFzQixJQUFJQyxNQUFKLENBQ2xDLGFBQWEzQixLQUFLNEIsT0FBTCxDQUFhLDhCQUFiLEVBQTZDLE1BQTdDLENBQWIsR0FBb0UsVUFEbEMsQ0FBdEIsQ0FBaEI7O0FBSUEsUUFBSWhCLE9BQU9hLFVBQVVJLG1CQUFtQkosUUFBUSxDQUFSLENBQW5CLENBQVYsR0FBMkM3QyxTQUF0RDs7QUFFQSxRQUFJbUIsT0FBTytCLFFBQVgsRUFBcUIsQ0FBRTtBQUN2QixRQUFJdEIsWUFBWUksSUFBaEIsRUFDSSxJQUFJO0FBQ0FBLGVBQU9ILEtBQUtzQixLQUFMLENBQVduQixJQUFYLENBQVA7QUFDSCxLQUZELENBRUUsT0FBT0QsS0FBUCxFQUFjLENBQUc7O0FBRXZCLFdBQU9DLElBQVA7QUFDSCxDQWREOztBQWdCQTs7Ozs7QUFLQSxJQUFNTixTQUFTLFNBQVRBLE1BQVMsQ0FBVU4sSUFBVixFQUFnQmdDLE1BQWhCLEVBQXdCO0FBQ25DQSxhQUFTQSxVQUFVLEVBQUNsQixTQUFTLENBQUMsQ0FBWCxFQUFuQjtBQUNBWCxRQUFJSCxJQUFKLEVBQVUsRUFBVixFQUFjZ0MsTUFBZDtBQUNILENBSEQ7O0FBS0EsSUFBTTNCLFFBQVEsU0FBUkEsS0FBUSxHQUFZO0FBQ3RCZixhQUFTa0MsTUFBVCxHQUFrQixFQUFsQjtBQUNILENBRkQ7O0FBSUE7Ozs7O0FBS0EsSUFBTUQsU0FBUyxTQUFUQSxNQUFTLENBQVVYLElBQVYsRUFBZ0I7QUFDM0IsUUFBSXFCLE1BQU0sRUFBVjtBQUNBL0MsV0FBT0MsSUFBUCxDQUFZeUIsSUFBWixFQUFrQnhCLE9BQWxCLENBQTBCLFVBQUNWLEdBQUQsRUFBUztBQUMvQixZQUFJa0MsS0FBS2xDLEdBQUwsTUFBY0UsU0FBbEIsRUFDSXFELE9BQU8sTUFBTXZELEdBQU4sR0FBWSxHQUFaLEdBQWtCbUMsbUJBQW1CRCxLQUFLbEMsR0FBTCxDQUFuQixDQUF6QjtBQUNQLEtBSEQ7QUFJQSxXQUFPdUQsR0FBUDtBQUNILENBUEQ7O0FBU0EsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQVVsQyxJQUFWLEVBQWdCO0FBQzNCLFFBQUlBLElBQUosRUFBVTtBQUNOLFlBQU15QixVQUFVbkMsU0FBU2tDLE1BQVQsQ0FBZ0JFLEtBQWhCLENBQXNCLElBQUlDLE1BQUosQ0FDbEMsYUFBYTNCLEtBQUs0QixPQUFMLENBQWEsOEJBQWIsRUFBNkMsTUFBN0MsQ0FBYixHQUFvRSxVQURsQyxDQUF0QixDQUFoQjtBQUdBLGVBQU9ILFVBQVVJLG1CQUFtQkosUUFBUSxDQUFSLENBQW5CLENBQVYsR0FBMkM3QyxTQUFsRDtBQUNILEtBTEQsTUFLTztBQUNILFlBQU1nQyxPQUFPLEVBQWI7QUFBQSxZQUNJdUIsVUFBVTdDLFNBQVNrQyxNQUFULENBQWdCWSxLQUFoQixDQUFzQixJQUF0QixDQURkOztBQUdBRCxnQkFBUS9DLE9BQVIsQ0FBZ0IsVUFBQ1QsS0FBRCxFQUFXO0FBQ3ZCLGdCQUFJQSxNQUFNdUIsTUFBVixFQUFrQjtBQUNkLG9CQUFJbUMsUUFBUTFELE1BQU0yRCxJQUFOLEdBQWFGLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBWjtBQUNBeEIscUJBQUt5QixNQUFNLENBQU4sRUFBU0MsSUFBVCxFQUFMLElBQXdCVCxtQkFBbUJRLE1BQU0sQ0FBTixDQUFuQixFQUE2QkMsSUFBN0IsRUFBeEI7QUFDSDtBQUNKLFNBTEQ7QUFNQSxlQUFPMUIsSUFBUDtBQUNIO0FBQ0osQ0FsQkQ7O0FBb0JBYixPQUFPSSxHQUFQLEdBQWFBLEdBQWI7QUFDQUosT0FBT0ssR0FBUCxHQUFhQSxHQUFiO0FBQ0FMLE9BQU9PLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FQLE9BQU9NLEtBQVAsR0FBZUEsS0FBZjtBQUNBTixPQUFPd0IsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQXhCLE9BQU9tQyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBbkMsT0FBTytCLFFBQVAsR0FBa0IsSUFBbEI7O1FBR0kzQixHLEdBQUFBLEc7UUFDQUMsRyxHQUFBQSxHO1FBQ0FDLEssR0FBQUEsSztRQUNBQyxNLEdBQUFBLE07UUFDQWlCLE0sR0FBQUEsTTtRQUNBVyxNLEdBQUFBLE07a0JBR1duQyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTU4sWUFBWSxTQUFaQSxTQUFZLENBQVVqQixNQUFWLEVBQWtCO0FBQ2hDLFFBQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQzs7QUFJNUIsZUFBT2lCLFVBQVU4QyxJQUFWLENBQWUvRCxNQUFmLENBQVA7QUFDSCxLQUxELE1BS087QUFDSCxZQUFNZ0UsT0FBTy9DLFVBQVVnRCxNQUFWLENBQWlCakUsTUFBakIsQ0FBYjtBQUNBaUIsa0JBQVU4QyxJQUFWLENBQWVDLEtBQUsxRCxFQUFwQixJQUEwQjBELElBQTFCOztBQUVBLFlBQUksT0FBT0EsS0FBS0UsSUFBWixLQUFxQixVQUFyQixJQUFtQyxDQUFDRixLQUFLRyxXQUE3QyxFQUF5RDtBQUNyREgsaUJBQUtHLFdBQUwsR0FBbUIsSUFBbkI7QUFDQUgsaUJBQUtFLElBQUw7QUFDSDs7QUFFRCxZQUFJLE9BQU9GLEtBQUtJLFFBQVosS0FBeUIsUUFBN0IsRUFBdUM7QUFDbkNKLGlCQUFLSSxRQUFMLEdBQWdCLHdCQUFTSixLQUFLSSxRQUFkLENBQWhCO0FBQ0g7O0FBRUQsWUFBSSxzQkFBT0osS0FBS0ksUUFBWixDQUFKLEVBQTJCOztBQUV2QixnQkFBSUosS0FBS0ksUUFBTCxDQUFjckQsYUFBZCxDQUE0QixhQUE1QixDQUFKLEVBQ0lpRCxLQUFLSyxJQUFMLEdBQVksc0JBQU8sYUFBUCxFQUFzQixXQUF0QixFQUFtQ0wsS0FBS0ksUUFBeEMsQ0FBWjs7QUFFSixnQkFBSUosS0FBS00sTUFBVCxFQUNJQyxVQUFVUCxJQUFWOztBQUVKUSxvQ0FBd0JSLElBQXhCLEVBQThCLElBQTlCLEVBQW9DdEQsT0FBT0MsSUFBUCxDQUFZOEQsK0JBQVosQ0FBcEM7QUFDSDs7QUFFRCxZQUFJLGdCQUFnQjFFLG9CQUFwQixFQUEwQztBQUN0QzJFLDRCQUFpQlYsSUFBakIsRUFBdUIsSUFBdkI7QUFDQSxnQkFBSSxDQUFDQSxLQUFLSSxRQUFOLElBQWtCLEtBQUtPLElBQTNCLEVBQWdDO0FBQzVCLG9CQUFNTixPQUFPLHFCQUFNLHNCQUFxQkwsS0FBSzFELEVBQTFCLEdBQThCLElBQXBDLEVBQTBDLEtBQUtxRSxJQUEvQyxDQUFiO0FBQ0Esb0JBQUlOLElBQUosRUFDSUwsS0FBS0ksUUFBTCxHQUFnQkMsSUFBaEI7QUFDUDtBQUNKLFNBUEQsTUFPTztBQUNILGdCQUFJdEUscUJBQXFCUyxJQUFyQixLQUE4QlQscUJBQXFCdUIsVUFBdkQsRUFDSSxNQUFNLElBQUlzRCxLQUFKLENBQVUsNkJBQTJCWixLQUFLMUQsRUFBaEMsR0FBbUMsc0NBQTdDLENBQU47QUFDUDs7QUFFRCxZQUFJLE9BQU8wRCxLQUFLYSxRQUFaLEtBQXlCLFVBQXpCLElBQXVDLENBQUNiLEtBQUtjLFNBQTdDLElBQTBELGdCQUFnQi9FLG9CQUE5RSxFQUFvRztBQUNoR2lFLGlCQUFLYyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FkLGlCQUFLYSxRQUFMLENBQWNFLElBQWQsQ0FBbUJmLElBQW5CLEVBQXlCLElBQXpCO0FBQ0g7QUFFSjtBQUNKLENBaEREOztBQWtEQS9DLFVBQVVDLFFBQVYsR0FBcUIsVUFBVWpCLFFBQVYsRUFDckI7QUFDSSxRQUFJQSxvQkFBb0JGLG9CQUF4QixFQUE4QztBQUMxQ1csZUFBT0MsSUFBUCxDQUFZTSxVQUFVOEMsSUFBdEIsRUFBNEJuRCxPQUE1QixDQUFvQyxVQUFDVixHQUFELEVBQVM7QUFDekMsZ0JBQU04RCxPQUFPL0MsVUFBVThDLElBQVYsQ0FBZTdELEdBQWYsQ0FBYjs7QUFFQSxnQkFBSThELEtBQUthLFFBQUwsSUFBaUIsQ0FBQ2IsS0FBS2MsU0FBM0IsRUFBc0M7QUFDbENkLHFCQUFLYyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FkLHFCQUFLYSxRQUFMLENBQWNFLElBQWQsQ0FBbUJmLElBQW5CLEVBQXlCL0QsUUFBekI7QUFDQXlFLGdDQUFpQlYsSUFBakIsRUFBdUIvRCxRQUF2QjtBQUNIO0FBQ0osU0FSRDtBQVNIO0FBQ0osQ0FiRDs7QUFlQWdCLFVBQVU4QyxJQUFWLEdBQWlCLEVBQWpCOztBQUVBOUMsVUFBVWdELE1BQVYsR0FBbUIsVUFBVWpFLE1BQVYsRUFBa0I7QUFDakMsV0FBTyxxQkFBTztBQUNWTSxZQUFJLElBRE07QUFFVjBFLGVBQU8sSUFGRztBQUdWVixnQkFBUSxJQUhFO0FBSVZGLGtCQUFVLEtBSkE7QUFLVmEsa0JBQVUsS0FMQTtBQU1WZixjQUFNLGdCQUFNLENBQUUsQ0FOSjtBQU9WVyxrQkFBVSxvQkFBTSxDQUFFLENBUFI7QUFRVkssaUJBQVMsRUFSQztBQVNWYixjQUFNLEVBVEk7QUFVVkYscUJBQWEsS0FWSDtBQVdWVyxtQkFBVztBQVhELEtBQVAsRUFZSjlFLE1BWkksQ0FBUDtBQWFILENBZEQ7O0FBZ0JBLFNBQVN3RSx1QkFBVCxDQUFrQ1IsSUFBbEMsRUFBd0NtQixNQUF4QyxFQUFnREMsV0FBaEQsRUFBNkQ7QUFDekQsUUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxTQUFiLEVBQTJCO0FBQ3hDLFlBQU1DLFNBQVNILEtBQUtJLFlBQUwsQ0FBa0JILElBQWxCLENBQWY7QUFDQSxZQUFJLE9BQU92QixLQUFLa0IsT0FBTCxDQUFhTyxNQUFiLENBQVAsS0FBZ0MsVUFBcEMsRUFBZ0Q7QUFDNUNILGlCQUFLSyxlQUFMLENBQXFCSixJQUFyQjtBQUNBRCxpQkFBS00sZ0JBQUwsQ0FBc0JKLFNBQXRCLEVBQWlDLFVBQUNLLENBQUQsRUFBTztBQUNwQzdCLHFCQUFLa0IsT0FBTCxDQUFhTyxNQUFiLEVBQXFCVixJQUFyQixDQUEwQmYsSUFBMUIsRUFBZ0M2QixDQUFoQyxFQUFtQ0EsRUFBRUMsTUFBRixJQUFZRCxFQUFFRSxhQUFkLElBQStCRixFQUFFRyxJQUFGLENBQU8sQ0FBUCxDQUFsRTtBQUNILGFBRkQ7QUFHSDtBQUNKLEtBUkQ7O0FBVUFaLGdCQUFZeEUsT0FBWixDQUFvQixVQUFDNEUsU0FBRCxFQUFlO0FBQy9CLFlBQU1ELE9BQU9KLFNBQVMsR0FBVCxHQUFlSyxTQUE1QjtBQUNBLFlBQUl4QixLQUFLSSxRQUFMLENBQWNyRCxhQUFkLENBQTRCLE1BQUl3RSxJQUFKLEdBQVMsR0FBckMsQ0FBSixFQUErQztBQUMzQ1Usa0JBQU1DLElBQU4sQ0FBV2xDLEtBQUtJLFFBQUwsQ0FBYytCLGdCQUFkLENBQStCLE1BQUlaLElBQUosR0FBUyxHQUF4QyxDQUFYLEVBQXlEM0UsT0FBekQsQ0FBaUUsVUFBQzBFLElBQUQsRUFBVTtBQUN2RUQseUJBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQkMsU0FBckI7QUFDSCxhQUZEO0FBR0gsU0FKRCxNQUlPLElBQUl4QixLQUFLSSxRQUFMLENBQWNnQyxZQUFkLENBQTJCYixJQUEzQixDQUFKLEVBQXNDO0FBQ3pDRixxQkFBU3JCLEtBQUtJLFFBQWQsRUFBd0JtQixJQUF4QixFQUE4QkMsU0FBOUI7QUFDSDtBQUNKLEtBVEQ7QUFVSDs7QUFFRCxTQUFTZCxlQUFULENBQTBCVixJQUExQixFQUFnQy9ELFFBQWhDLEVBQTBDO0FBQ3RDLFFBQU1vRyxRQUFRLHdCQUFTLHNCQUFxQnJDLEtBQUsxRCxFQUExQixHQUE4QixJQUF2QyxFQUE2Q0wsU0FBUzBFLElBQXRELENBQWQ7O0FBRUEsUUFBSTBCLEtBQUosRUFDSUEsTUFBTXpGLE9BQU4sQ0FBYyxVQUFDeUQsSUFBRCxFQUFVO0FBQ3BCLFlBQUlMLEtBQUtnQixLQUFULEVBQWdCO0FBQ1poQixpQkFBS2dCLEtBQUwsQ0FBV3BFLE9BQVgsQ0FBbUIsVUFBQzBGLElBQUQsRUFBVTtBQUN6QixvQkFBR2pDLEtBQUsrQixZQUFMLENBQWtCRSxJQUFsQixDQUFILEVBQTRCO0FBQ3hCNUYsMkJBQU9HLGNBQVAsQ0FBc0JtRCxJQUF0QixFQUE0QnNDLElBQTVCLEVBQWtDO0FBQzlCbkcsK0JBQU9rRSxLQUFLcUIsWUFBTCxDQUFrQlksSUFBbEIsQ0FEdUI7QUFFOUJ0RixrQ0FBVTtBQUZvQixxQkFBbEM7QUFJQXFELHlCQUFLc0IsZUFBTCxDQUFxQlcsSUFBckI7QUFDSDtBQUNKLGFBUkQ7QUFTSDtBQUNELFlBQUlqQyxTQUFTTCxLQUFLSSxRQUFsQixFQUNJLHNCQUFPQyxJQUFQLEVBQWFMLEtBQUtJLFFBQWxCO0FBQ1AsS0FkRDs7QUFnQkosV0FBT0osSUFBUDtBQUNIOztBQUVELFNBQVNPLFNBQVQsQ0FBbUJQLElBQW5CLEVBQXlCL0QsUUFBekIsRUFBbUM7O0FBRS9CUyxXQUFPQyxJQUFQLENBQVlxRCxLQUFLTSxNQUFqQixFQUF5QjFELE9BQXpCLENBQWlDLFVBQUMyRixRQUFELEVBQWM7QUFDM0MsWUFBSUEsYUFBYSxVQUFiLElBQTJCLHNCQUFPdkMsS0FBS0ksUUFBWixDQUEvQixFQUFzRDtBQUNsRDFELG1CQUFPQyxJQUFQLENBQVlxRCxLQUFLTSxNQUFMLENBQVlpQyxRQUFaLENBQVosRUFBbUMzRixPQUFuQyxDQUEyQyxVQUFDVixHQUFELEVBQVM7QUFDaEQ4RCxxQkFBS0ksUUFBTCxDQUFjb0MsS0FBZCxDQUFvQnRHLEdBQXBCLElBQTJCOEQsS0FBS00sTUFBTCxDQUFZaUMsUUFBWixFQUFzQnJHLEdBQXRCLENBQTNCO0FBQ0gsYUFGRDtBQUdILFNBSkQsTUFLSSx3QkFBU3FHLFFBQVQsRUFBbUJ2QyxLQUFLSSxRQUF4QixFQUFrQyxVQUFVQyxJQUFWLEVBQWdCO0FBQzlDM0QsbUJBQU9DLElBQVAsQ0FBWXFELEtBQUtNLE1BQUwsQ0FBWWlDLFFBQVosQ0FBWixFQUFtQzNGLE9BQW5DLENBQTJDLFVBQUNWLEdBQUQsRUFBUztBQUNoRG1FLHFCQUFLbUMsS0FBTCxDQUFXdEcsR0FBWCxJQUFrQjhELEtBQUtNLE1BQUwsQ0FBWWlDLFFBQVosRUFBc0JyRyxHQUF0QixDQUFsQjtBQUNILGFBRkQ7QUFHSCxTQUpEO0FBS1AsS0FYRDs7QUFhQSxXQUFPOEQsSUFBUDtBQUNIOztrQkFFYy9DLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlKZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxDQUFVcEIsTUFBVixFQUNuQjtBQUFBLFFBRHFDeUcsS0FDckMsdUVBRDZDLElBQzdDOztBQUNJLFFBQU1DLFVBQVUscUJBQU07QUFDbEJDLGFBQUssRUFEYTtBQUVsQkMsWUFBSSxFQUZjO0FBR2xCQyxrQkFBVSxFQUhRO0FBSWxCaEMsa0JBQVUsb0JBQU0sQ0FBRSxDQUpBO0FBS2xCMUMsZUFBTyxpQkFBTSxDQUFFO0FBTEcsS0FBTixFQU1ibkMsTUFOYSxDQUFoQjs7QUFRQSxRQUFJeUcsS0FBSixFQUNJckYsV0FBVzBGLElBQVgsQ0FBZ0JKLE9BQWhCOztBQUVKLFdBQU9BLE9BQVA7QUFDSCxDQWREOztBQWdCQXRGLFdBQVcwRixJQUFYLEdBQWtCLFVBQUNKLE9BQUQsRUFBYTtBQUMzQixRQUFNSyxNQUNGLENBQUNMLFFBQVFDLEdBQVIsR0FBY0QsUUFBUUMsR0FBUixDQUFZakYsTUFBMUIsR0FBbUMsQ0FBcEMsS0FDQ2dGLFFBQVFFLEVBQVIsR0FBYUYsUUFBUUUsRUFBUixDQUFXbEYsTUFBeEIsR0FBaUMsQ0FEbEMsQ0FESjtBQUdBLFFBQU1zRixPQUFPLHFCQUFNLEVBQUNMLEtBQUtELFFBQVFDLEdBQWQsRUFBTixFQUF5QixFQUFDQyxJQUFJRixRQUFRRSxFQUFiLEVBQXpCLENBQWI7O0FBRUEsUUFBSUssSUFBSSxDQUFSO0FBQ0F2RyxXQUFPQyxJQUFQLENBQVlxRyxJQUFaLEVBQWtCcEcsT0FBbEIsQ0FBMEIsVUFBQ1YsR0FBRCxFQUFTO0FBQy9CLFlBQU00RyxPQUFPNUcsUUFBUSxLQUFSLEdBQWdCZ0gsaUJBQWhCLEdBQTBCQyxnQkFBdkM7QUFDQUgsYUFBSzlHLEdBQUwsRUFBVVUsT0FBVixDQUFrQixVQUFDd0csR0FBRCxFQUFTO0FBQ25CVixvQkFBUUcsUUFBUixDQUFpQlEsSUFBakIsQ0FBc0JQLEtBQUtNLEdBQUwsRUFBUyxZQUFNO0FBQ2pDSDtBQUNBLG9CQUFJRixRQUFRRSxDQUFaLEVBQ0ksT0FBT1AsUUFBUTdCLFFBQVIsQ0FBaUI2QixPQUFqQixDQUFQO0FBQ1AsYUFKcUIsRUFJbkJBLFFBQVF2RSxLQUpXLENBQXRCO0FBS1AsU0FORDtBQU9ILEtBVEQ7QUFVSCxDQWpCRDs7QUFtQkFmLFdBQVdVLE1BQVgsR0FBb0IsVUFBVTRFLE9BQVYsRUFDcEI7QUFDSSxRQUFNRyxXQUFXSCxXQUFXQSxRQUFRRyxRQUFuQixHQUE4QkgsUUFBUUcsUUFBdEMsR0FBaUQsRUFBbEU7QUFDQSxRQUFJQSxTQUFTbkYsTUFBYixFQUFxQjtBQUNqQmdGLGdCQUFRRyxRQUFSLENBQWlCakcsT0FBakIsQ0FBeUIsVUFBQzBHLE9BQUQsRUFBYTtBQUNsQ0Esb0JBQVFDLFVBQVIsQ0FBbUJDLFdBQW5CLENBQStCRixPQUEvQjtBQUNILFNBRkQ7QUFHSDtBQUNKLENBUkQ7O2tCQVVlbEcsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERmOzs7Ozs7QUFHQSxJQUFNRCxZQUFZLFNBQVpBLFNBQVksQ0FBVW5CLE1BQVYsRUFDbEI7QUFDSSxRQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUIsZUFBT21CLFVBQVU0QyxJQUFWLENBQWUvRCxNQUFmLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFNZ0UsT0FBTzdDLFVBQVU4QyxNQUFWLENBQWlCakUsTUFBakIsQ0FBYjtBQUNBLFlBQUksT0FBT2dFLEtBQUtFLElBQVosS0FBcUIsVUFBckIsSUFBbUMsQ0FBQ0YsS0FBS0csV0FBN0MsRUFBeUQ7QUFDckRILGlCQUFLRyxXQUFMLEdBQW1CLElBQW5CO0FBQ0FILGlCQUFLRSxJQUFMO0FBQ0g7QUFDRCxZQUFJLE9BQU9GLEtBQUthLFFBQVosS0FBeUIsVUFBekIsSUFBdUMsQ0FBQ2IsS0FBS2MsU0FBN0MsSUFBMEQsZ0JBQWdCL0Usb0JBQTlFLEVBQW1HO0FBQy9GaUUsaUJBQUtjLFNBQUwsR0FBaUIsSUFBakI7QUFDQWQsaUJBQUthLFFBQUwsQ0FBY0UsSUFBZCxDQUFtQmYsSUFBbkIsRUFBeUIsSUFBekI7QUFDSDtBQUNEN0Msa0JBQVU0QyxJQUFWLENBQWVDLEtBQUsxRCxFQUFwQixJQUEwQjBELElBQTFCO0FBQ0g7QUFDSixDQWhCRDs7QUFrQkE3QyxVQUFVRCxRQUFWLEdBQXFCLFVBQVVqQixRQUFWLEVBQ3JCO0FBQ0ksUUFBSUEsb0JBQW9CRixvQkFBeEIsRUFBOEM7QUFDMUNXLGVBQU9DLElBQVAsQ0FBWVEsVUFBVTRDLElBQXRCLEVBQTRCbkQsT0FBNUIsQ0FBb0MsVUFBQ1YsR0FBRCxFQUFTO0FBQ3pDLGdCQUFNOEQsT0FBTzdDLFVBQVU0QyxJQUFWLENBQWU3RCxHQUFmLENBQWI7QUFDQSxnQkFBSThELEtBQUthLFFBQUwsSUFBaUIsQ0FBQ2IsS0FBS2MsU0FBM0IsRUFBc0M7QUFDbENkLHFCQUFLYyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FkLHFCQUFLYSxRQUFMLENBQWNFLElBQWQsQ0FBbUJmLElBQW5CLEVBQXlCL0QsUUFBekI7QUFDSDtBQUNKLFNBTkQ7QUFPSDtBQUNKLENBWEQ7O0FBYUFrQixVQUFVNEMsSUFBVixHQUFpQixFQUFqQjs7QUFFQTVDLFVBQVU4QyxNQUFWLEdBQW1CLFVBQVVqRSxNQUFWLEVBQWtCO0FBQ2pDLFdBQU8scUJBQU87QUFDVk0sWUFBSSxJQURNO0FBRVY4RCxrQkFBVSxJQUZBO0FBR1ZGLGNBQU0sZ0JBQU0sQ0FBRSxDQUhKO0FBSVZXLGtCQUFVLG9CQUFNLENBQUUsQ0FKUjtBQUtWSSxrQkFBVSxLQUxBO0FBTVZkLHFCQUFhLEtBTkg7QUFPVlcsbUJBQVcsS0FQRDtBQVFWMkMsaUJBQVM7QUFSQyxLQUFQLEVBU0p6SCxNQVRJLENBQVA7QUFVSCxDQVhEOztrQkFjZW1CLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZixJQUFNRSxRQUFRLFNBQVJBLEtBQVEsQ0FBVWQsR0FBVixFQUFlVSxTQUFmLEVBQTBCO0FBQ3BDLFFBQUl5RyxTQUFTQyxRQUFULEtBQXNCcEgsR0FBMUIsRUFBK0I7QUFDM0IsYUFBS1UsU0FBTDtBQUNIO0FBQ0osQ0FKRDs7a0JBTWVJLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOzs7Ozs7OztBQUdBLElBQU11RyxRQUFRLFNBQVJBLEtBQVEsQ0FBVTFILEdBQVYsRUFBZWtDLElBQWYsRUFBcUI7QUFDL0IsV0FBT0EsU0FBU2hDLFNBQVQsR0FBcUJ3SCxNQUFNaEcsR0FBTixDQUFVMUIsR0FBVixDQUFyQixHQUFzQzBILE1BQU1qRyxHQUFOLENBQVV6QixHQUFWLEVBQWVrQyxJQUFmLENBQTdDO0FBQ0gsQ0FGRDs7QUFJQXdGLE1BQU1DLFFBQU4sR0FBaUIsRUFBakI7QUFDQUQsTUFBTUUsTUFBTixHQUFlQyxjQUFmO0FBQ0FILE1BQU0zRCxNQUFOLEdBQWU4RCxjQUFmO0FBQ0FILE1BQU1JLFVBQU4sR0FBbUIsRUFBbkI7QUFDQUosTUFBTUssTUFBTixHQUFlLFVBQVUvSCxHQUFWLEVBQWUySCxRQUFmLEVBQXlCO0FBQ3BDRCxVQUFNQyxRQUFOLENBQWUzSCxHQUFmLElBQXNCMkgsUUFBdEI7QUFDSCxDQUZEOztBQUlBRCxNQUFNaEcsR0FBTixHQUFZLFVBQVUxQixHQUFWLEVBQWU7QUFDdkIsV0FBTyxzQkFBT0EsR0FBUCxFQUFZLFFBQVosSUFDRDBILE1BQU1JLFVBQU4sQ0FBaUI5SCxHQUFqQixLQUF5QjBILE1BQU1FLE1BQU4sQ0FBYTVILEdBQWIsQ0FEeEIsR0FFREEsUUFBUUUsU0FBUixHQUNJLElBREosR0FFSXdILE1BQU1JLFVBSmhCO0FBS0gsQ0FORDs7QUFRQUosTUFBTWpHLEdBQU4sR0FBWSxVQUFVekIsR0FBVixFQUFlZ0ksT0FBZixFQUF3QjtBQUNoQ04sVUFBTU8sT0FBTixxQkFBZ0JqSSxHQUFoQixFQUFzQmdJLE9BQXRCO0FBQ0gsQ0FGRDs7QUFJQU4sTUFBTU8sT0FBTixHQUFnQixZQUF3QjtBQUFBLFFBQWRELE9BQWMsdUVBQUosRUFBSTs7QUFDcEN4SCxXQUFPQyxJQUFQLENBQVl1SCxPQUFaLEVBQXFCdEgsT0FBckIsQ0FBNkIsVUFBQ1YsR0FBRCxFQUFTO0FBQ2xDMEgsY0FBTUUsTUFBTixDQUFhNUgsR0FBYixJQUFvQjBILE1BQU1JLFVBQU4sQ0FBaUI5SCxHQUFqQixJQUF3QmdJLFFBQVFoSSxHQUFSLENBQTVDO0FBQ0gsS0FGRDtBQUdILENBSkQ7O0FBTUEsU0FBUzZILFlBQVQsR0FBcUM7QUFBQSxRQUFkRyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2pDTixVQUFNSSxVQUFOLEdBQW1CRSxPQUFuQjtBQUNBLFdBQU8sSUFBSUUsS0FBSixDQUFVRixPQUFWLEVBQW1CO0FBQ3RCdEcsYUFBSyxhQUFDeUcsR0FBRCxFQUFNL0IsSUFBTixFQUFlO0FBQ2hCLG1CQUFPQSxRQUFRK0IsR0FBUixHQUFjQSxJQUFJL0IsSUFBSixDQUFkLEdBQTBCLElBQWpDO0FBQ0gsU0FIcUI7QUFJdEIzRSxhQUFJLGFBQUMwRyxHQUFELEVBQU0vQixJQUFOLEVBQVluRyxLQUFaLEVBQXNCO0FBQ3RCLGdCQUFJeUgsTUFBTUMsUUFBTixDQUFldkIsSUFBZixDQUFKLEVBQTBCO0FBQ3RCc0Isc0JBQU1DLFFBQU4sQ0FBZXZCLElBQWYsRUFBcUJ2QixJQUFyQixDQUEwQixFQUExQixFQUE4QjZDLE1BQU1FLE1BQXBDLEVBQTRDM0gsS0FBNUM7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDtBQVRxQixLQUFuQixDQUFQO0FBV0g7O2tCQUVjeUgsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGYsSUFBTVUsV0FBVyxFQUFqQjtBQUNBQSxTQUFTQyxTQUFULEdBQXFCLEtBQXJCO0FBQ0FELFNBQVNFLFVBQVQsR0FBc0IsSUFBdEI7QUFDQUYsU0FBU0csU0FBVCxHQUFxQixHQUFyQjs7QUFFQTs7Ozs7QUFLQUgsU0FBU0ksSUFBVCxHQUFnQixVQUFVakcsSUFBVixFQUFnQjtBQUM1QixXQUFPQSxnQkFBZ0JGLElBQWhCLEdBQXVCRSxLQUFLRSxPQUFMLEVBQXZCLEdBQXlDLElBQUlKLElBQUosRUFBRCxDQUFXSSxPQUFYLEVBQS9DO0FBQ0gsQ0FGRDs7QUFJQTs7Ozs7O0FBTUEyRixTQUFTSyxPQUFULEdBQW1CLFVBQVVDLEdBQVYsRUFBZUMsU0FBZixFQUEwQjtBQUN6QyxRQUFNcEcsT0FBT29HLFlBQVksSUFBSXRHLElBQUosQ0FBU3NHLFNBQVQsQ0FBWixHQUFrQyxJQUFJdEcsSUFBSixFQUEvQztBQUNBRSxTQUFLQyxPQUFMLENBQWFELEtBQUtFLE9BQUwsS0FBa0JpRyxNQUFNLFFBQXJDO0FBQ0EsV0FBT25HLElBQVA7QUFDSCxDQUpEOztBQU1BOzs7Ozs7Ozs7OztBQVdBNkYsU0FBU1EsWUFBVCxHQUF3QixVQUFVQyxRQUFWLEVBQW9CQyxNQUFwQixFQUE0QjtBQUNoREQsZUFBV0EsWUFBWSxJQUFJeEcsSUFBSixFQUF2QjtBQUNBeUcsYUFBU0EsVUFBVSxJQUFJekcsSUFBSixFQUFuQjtBQUNBLFFBQUkwRyxTQUFVRCxTQUFTRCxRQUF2QjtBQUFBLFFBQ0lHLFdBQVdDLEtBQUtDLEtBQUwsQ0FBV0gsU0FBUyxLQUFwQixDQURmO0FBQUEsUUFFSUksVUFBVUYsS0FBS0MsS0FBTCxDQUFZSCxTQUFTLEtBQVYsR0FBbUIsSUFBOUIsQ0FGZDtBQUFBLFFBR0lLLFVBQVVILEtBQUtDLEtBQUwsQ0FBYUgsU0FBUyxLQUFWLEdBQW1CLElBQXBCLEdBQTRCLEdBQXZDLENBSGQ7QUFJQSxXQUFPLEVBQUNMLEtBQUtNLFFBQU4sRUFBZ0JLLE1BQU1GLE9BQXRCLEVBQStCRyxRQUFRRixPQUF2QyxFQUFQO0FBQ0gsQ0FSRDs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQWhCLFNBQVNtQixTQUFULEdBQXFCLFVBQVVoSCxJQUFWLEVBQWdCaUgsTUFBaEIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQzlDLFFBQU1oSSxNQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWjtBQUNBLFFBQU1pSSxPQUFPbkgsS0FBS1MsS0FBTCxDQUFXLG1CQUFYLENBQWI7QUFDQSxRQUFNMkcsT0FBT0gsT0FBT3hHLEtBQVAsQ0FBYSxjQUFiLENBQWI7QUFDQSxTQUFLLElBQUkrRCxJQUFJLENBQWIsRUFBZ0JBLElBQUk0QyxLQUFLbkksTUFBekIsRUFBaUN1RixHQUFqQyxFQUFzQztBQUNsQyxnQkFBUTRDLEtBQUs1QyxDQUFMLENBQVI7QUFDSSxpQkFBSyxJQUFMO0FBQ0l0RixvQkFBSSxDQUFKLElBQVNpSSxLQUFLM0MsQ0FBTCxLQUFXLENBQXBCO0FBQ0E7QUFDSixpQkFBSyxJQUFMO0FBQ0l0RixvQkFBSSxDQUFKLElBQVMsQ0FBQ2lJLEtBQUszQyxDQUFMLEtBQVcsQ0FBWixJQUFpQixDQUExQjtBQUNBO0FBQ0osaUJBQUssSUFBTDtBQUNJdEYsb0JBQUksQ0FBSixJQUFTaUksS0FBSzNDLENBQUwsSUFBVSxDQUFWLElBQWUyQyxLQUFLM0MsQ0FBTCxJQUFVLEVBQVYsR0FBZSxJQUFmLEdBQXNCLElBQXJDLENBQVQ7QUFDQTtBQUNKLGlCQUFLLElBQUw7QUFDQSxpQkFBSyxJQUFMO0FBQ0l0RixvQkFBSSxDQUFKLElBQVNpSSxLQUFLM0MsQ0FBTCxLQUFXLENBQXBCO0FBQ0E7QUFDSixpQkFBSyxJQUFMO0FBQ0l0RixvQkFBSSxDQUFKLElBQVNpSSxLQUFLM0MsQ0FBTCxLQUFXLENBQXBCO0FBQ0E7QUFDSixpQkFBSyxJQUFMO0FBQ0l0RixvQkFBSSxDQUFKLElBQVNpSSxLQUFLM0MsQ0FBTCxLQUFXLENBQXBCO0FBQ0E7QUFDSixpQkFBSyxJQUFMO0FBQ0l0RixvQkFBSSxDQUFKLElBQVNBLElBQUksQ0FBSixJQUFTLEVBQVQsSUFBZSxDQUFDaUksS0FBSzNDLENBQUwsS0FBVyxFQUFaLEVBQWdCNkMsV0FBaEIsT0FBa0MsSUFBbEMsR0FBeUMsQ0FBekMsR0FBNkMsRUFBNUQsQ0FBVDtBQUNBO0FBQ0osaUJBQUssSUFBTDtBQUNJbkksb0JBQUksQ0FBSixJQUFTaUksS0FBSzNDLENBQUwsS0FBVyxDQUFwQjtBQUNBO0FBQ0o7QUFDSTtBQTNCUjtBQTZCSDtBQUNELFFBQUkwQyxHQUFKLEVBQVM7QUFDTCxlQUFPLElBQUlwSCxJQUFKLENBQVNBLEtBQUt3SCxHQUFMLENBQVNwSSxJQUFJLENBQUosQ0FBVCxFQUFpQkEsSUFBSSxDQUFKLENBQWpCLEVBQXlCQSxJQUFJLENBQUosQ0FBekIsRUFBaUNBLElBQUksQ0FBSixDQUFqQyxFQUF5Q0EsSUFBSSxDQUFKLENBQXpDLEVBQWlEQSxJQUFJLENBQUosQ0FBakQsQ0FBVCxDQUFQO0FBQ0g7QUFDRCxXQUFPLElBQUlZLElBQUosQ0FBU1osSUFBSSxDQUFKLENBQVQsRUFBaUJBLElBQUksQ0FBSixDQUFqQixFQUF5QkEsSUFBSSxDQUFKLENBQXpCLEVBQWlDQSxJQUFJLENBQUosQ0FBakMsRUFBeUNBLElBQUksQ0FBSixDQUF6QyxFQUFpREEsSUFBSSxDQUFKLENBQWpELENBQVA7QUFDSCxDQXZDRDs7a0JBeUNlMkcsUTs7QUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTMEIsR0FBVCxDQUFjekQsUUFBZCxFQUF3QjtBQUNwQixRQUFNMEQsSUFBSTtBQUNOMUQsa0JBQVUsc0JBQU9BLFFBQVAsRUFBaUIsUUFBakIsSUFBNkJBLFFBQTdCLEdBQXdDLElBRDVDO0FBRU4yRCxrQkFBVSxzQkFBTzNELFFBQVAsSUFBbUIsQ0FBQ0EsUUFBRCxDQUFuQixHQUFnQyx3QkFBU0EsUUFBVDtBQUZwQyxLQUFWOztBQUtBLFFBQU00RCwwQkFBMEIsU0FBMUJBLHVCQUEwQixDQUFVL0MsR0FBVixFQUFlO0FBQzNDLFlBQUksc0JBQU9BLEdBQVAsRUFBWSxRQUFaLENBQUosRUFBMkI7QUFDdkIsb0NBQVNBLEdBQVQsRUFBY2dELEdBQWQsQ0FBa0JELHVCQUFsQjtBQUNILFNBRkQsTUFFTyxJQUFJLHNCQUFPL0MsR0FBUCxLQUFlQSxJQUFJLG9CQUFKLE1BQThCaEgsU0FBakQsRUFBNEQ7QUFDL0QsZ0JBQU1vRyxRQUFRWSxJQUFJWixLQUFKLENBQVU2RCxPQUFWLEdBQW9CakQsSUFBSVosS0FBSixDQUFVNkQsT0FBOUIsR0FBd0NDLGlCQUFpQmxELEdBQWpCLEVBQXNCaUQsT0FBNUU7QUFDQWpELGdCQUFJLG9CQUFKLElBQTZCLENBQUNaLEtBQUQsSUFBVUEsVUFBVSxNQUFyQixHQUErQixPQUEvQixHQUF5Q0EsS0FBckU7QUFDSDtBQUNKLEtBUEQ7O0FBU0F5RCxNQUFFTSxHQUFGLEdBQVE7QUFBQSxlQUFNTixFQUFFQyxRQUFGLElBQWNELEVBQUVDLFFBQUYsQ0FBV3hJLE1BQXpCLEdBQWtDdUksRUFBRUMsUUFBRixDQUFXLENBQVgsQ0FBbEMsR0FBa0QsS0FBeEQ7QUFBQSxLQUFSO0FBQ0FELE1BQUVPLEdBQUYsR0FBUTtBQUFBLGVBQU1QLEVBQUVDLFFBQVI7QUFBQSxLQUFSO0FBQ0FELE1BQUUxRSxJQUFGLEdBQVMsVUFBQy9ELElBQUQsRUFBT3JCLEtBQVA7QUFBQSxlQUFpQix1QkFBUUEsS0FBUixJQUFpQixvQkFBSzhKLEVBQUVNLEdBQUYsRUFBTCxFQUFjL0ksSUFBZCxFQUFvQnJCLEtBQXBCLENBQWpCLEdBQThDLG9CQUFLOEosRUFBRU0sR0FBRixFQUFMLEVBQWMvSSxJQUFkLENBQS9EO0FBQUEsS0FBVDtBQUNBeUksTUFBRVEsTUFBRixHQUFXLFVBQUNySSxJQUFELEVBQU9zSSxNQUFQLEVBQWVDLEVBQWY7QUFBQSxlQUFzQixzQkFBT1YsRUFBRU0sR0FBRixFQUFQLEVBQWdCbkksSUFBaEIsRUFBc0JzSSxNQUF0QixFQUE4QkMsRUFBOUIsQ0FBdEI7QUFBQSxLQUFYO0FBQ0FWLE1BQUVTLE1BQUYsR0FBVyxVQUFDdEksSUFBRDtBQUFBLGVBQVUsc0JBQU82SCxFQUFFTSxHQUFGLEVBQVAsRUFBZ0JuSSxJQUFoQixFQUFzQixJQUF0QixDQUFWO0FBQUEsS0FBWDtBQUNBNkgsTUFBRVcsTUFBRixHQUFXLFVBQUNyRixJQUFELEVBQU9XLElBQVA7QUFBQSxlQUFnQixzQkFBTytELEVBQUVNLEdBQUYsRUFBUCxFQUFnQmhGLElBQWhCLEVBQXNCVyxJQUF0QixDQUFoQjtBQUFBLEtBQVg7QUFDQStELE1BQUVZLE1BQUYsR0FBVztBQUFBLGVBQU1aLEVBQUVNLEdBQUYsR0FBUWhELFVBQWQ7QUFBQSxLQUFYO0FBQ0EwQyxNQUFFYSxRQUFGLEdBQWEsWUFBTTtBQUNmYixVQUFFTSxHQUFGO0FBQ0gsS0FGRDtBQUdBTixNQUFFYyxRQUFGLEdBQWE7QUFBQSxlQUFNLHdCQUFTZCxFQUFFTSxHQUFGLEVBQVQsQ0FBTjtBQUFBLEtBQWI7QUFDQU4sTUFBRWUsS0FBRixHQUFVLFVBQUN6RSxRQUFEO0FBQUEsZUFBYzBELEVBQUVNLEdBQUYsR0FBUXhKLGFBQVIsQ0FBc0J3RixRQUF0QixDQUFkO0FBQUEsS0FBVjtBQUNBMEQsTUFBRWdCLFFBQUYsR0FBYSxVQUFDMUUsUUFBRDtBQUFBLGVBQWMwRCxFQUFFTSxHQUFGLEdBQVFwRSxnQkFBUixDQUF5QkksUUFBekIsQ0FBZDtBQUFBLEtBQWI7QUFDQTBELE1BQUVpQixDQUFGLEdBQU07QUFBQSxlQUFNLHdCQUFTakIsRUFBRU0sR0FBRixFQUFULEVBQWtCVyxDQUF4QjtBQUFBLEtBQU47QUFDQWpCLE1BQUVrQixDQUFGLEdBQU07QUFBQSxlQUFNLHdCQUFTbEIsRUFBRU0sR0FBRixFQUFULEVBQWtCWSxDQUF4QjtBQUFBLEtBQU47QUFDQWxCLE1BQUVtQixLQUFGLEdBQVU7QUFBQSxlQUFNLHdCQUFTbkIsRUFBRU0sR0FBRixFQUFULEVBQWtCYSxLQUF4QjtBQUFBLEtBQVY7QUFDQW5CLE1BQUVvQixNQUFGLEdBQVc7QUFBQSxlQUFNLHdCQUFTcEIsRUFBRU0sR0FBRixFQUFULEVBQWtCYyxNQUF4QjtBQUFBLEtBQVg7QUFDQXBCLE1BQUVuSSxNQUFGLEdBQVc7QUFBQSxlQUFNbUksRUFBRU0sR0FBRixHQUFRaEQsVUFBUixDQUFtQkMsV0FBbkIsQ0FBK0J5QyxFQUFFTSxHQUFGLEVBQS9CLENBQU47QUFBQSxLQUFYO0FBQ0FOLE1BQUVxQixJQUFGLEdBQVMsWUFBTTtBQUNYLFlBQU1sRSxNQUFNNkMsRUFBRU0sR0FBRixFQUFaO0FBQ0FKLGdDQUF3Qi9DLEdBQXhCO0FBQ0EsMkJBQUlBLEdBQUosRUFBUyxFQUFDaUQsU0FBU2pELE9BQU9BLElBQUksb0JBQUosQ0FBUCxHQUFtQ0EsSUFBSSxvQkFBSixDQUFuQyxHQUErRCxPQUF6RSxFQUFUO0FBQ0gsS0FKRDtBQUtBNkMsTUFBRXNCLElBQUYsR0FBUyxZQUFNO0FBQ1gsWUFBTW5FLE1BQU02QyxFQUFFTSxHQUFGLEVBQVo7QUFDQUosZ0NBQXdCL0MsR0FBeEI7QUFDQSwyQkFBSUEsR0FBSixFQUFTLEVBQUNpRCxTQUFTLE1BQVYsRUFBVDtBQUNILEtBSkQ7QUFLQUosTUFBRXVCLE1BQUYsR0FBVyxZQUFNO0FBQ2IsWUFBTXBFLE1BQU02QyxFQUFFTSxHQUFGLEVBQVo7QUFDQSxZQUFJLHNCQUFPbkQsR0FBUCxFQUFZLFFBQVosQ0FBSixFQUEyQjtBQUN2QixvQ0FBU0EsR0FBVCxFQUFjZ0QsR0FBZCxDQUFrQkosSUFBSXdCLE1BQXRCO0FBQ0gsU0FGRCxNQUVPLElBQUksc0JBQU9wRSxHQUFQLENBQUosRUFBaUI7QUFDcEIsZ0JBQUlBLElBQUlaLEtBQUosQ0FBVTZELE9BQVYsS0FBc0IsTUFBMUIsRUFBa0NMLElBQUlzQixJQUFKLENBQVNsRSxHQUFULEVBQWxDLEtBQ0s0QyxJQUFJdUIsSUFBSixDQUFTbkUsR0FBVDtBQUNSO0FBQ0osS0FSRDtBQVNBNkMsTUFBRXdCLEVBQUYsR0FBTyxVQUFDakcsU0FBRCxFQUFZcUMsUUFBWixFQUFzQjZELE1BQXRCO0FBQUEsZUFBaUMsa0JBQUd6QixFQUFFTSxHQUFGLEVBQUgsRUFBWS9FLFNBQVosRUFBdUJxQyxRQUF2QixFQUFpQzZELE1BQWpDLENBQWpDO0FBQUEsS0FBUDtBQUNBekIsTUFBRTBCLE1BQUYsR0FBVyxZQUFNO0FBQ2IsWUFBTUEsU0FBUzFCLEVBQUVNLEdBQUYsR0FBUXFCLHFCQUFSLEVBQWY7QUFDQSxlQUFPLHFCQUFNLEVBQUNDLEtBQUtGLE9BQU9FLEdBQVAsR0FBYUMsV0FBbkIsRUFBZ0NDLE1BQU1KLE9BQU9JLElBQVAsR0FBY0MsV0FBcEQsRUFBTixFQUF3RUwsTUFBeEUsQ0FBUDtBQUNILEtBSEQ7QUFJQSxXQUFPMUIsQ0FBUDtBQUNIOztBQUVERCxJQUFJekUsSUFBSixHQUFXQSxjQUFYO0FBQ0F5RSxJQUFJckQsR0FBSixHQUFVQSxhQUFWO0FBQ0FxRCxJQUFJaUMsTUFBSixHQUFhQyxtQkFBYjtBQUNBbEMsSUFBSVMsTUFBSixHQUFhQSxnQkFBYjtBQUNBVCxJQUFJbUMsUUFBSixHQUFlQSxrQkFBZjtBQUNBbkMsSUFBSVksTUFBSixHQUFhQSxnQkFBYjtBQUNBWixJQUFJaUIsUUFBSixHQUFlQSxrQkFBZjtBQUNBakIsSUFBSWdCLEtBQUosR0FBWUEsZUFBWjtBQUNBaEIsSUFBSS9GLE1BQUosR0FBYW1JLHVCQUFiO0FBQ0FwQyxJQUFJcUMsUUFBSixHQUFlQyx3QkFBZjtBQUNBdEMsSUFBSXVDLFFBQUosR0FBZUEsa0JBQWY7QUFDQXZDLElBQUltQyxRQUFKLEdBQWVBLGtCQUFmO0FBQ0FuQyxJQUFJZSxRQUFKLEdBQWVBLGtCQUFmOztrQkFHZWYsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RmY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQU13QyxRQUFRLFNBQVJBLEtBQVEsR0FBWTtBQUN0QixRQUFLQyxpQkFBaUIsRUFBdEI7QUFDQSxRQUFLQyxjQUFjLEVBQW5CO0FBQ0EsUUFBTUMsS0FBSyxFQUFYOztBQUVBQSxPQUFHQyxRQUFILEdBQWMsa0JBQWQ7QUFDQUQsT0FBR0UsT0FBSCxHQUFhLElBQUkxSixNQUFKLENBQVcsUUFBUXdKLEdBQUdDLFFBQXRCLEVBQWdDLEdBQWhDLENBQWI7QUFDQUQsT0FBR3JNLEVBQUgsR0FBUSxJQUFJNkMsTUFBSixDQUFXLE1BQU13SixHQUFHQyxRQUFwQixFQUE4QixHQUE5QixDQUFSO0FBQ0FELE9BQUdHLEdBQUgsR0FBUyxJQUFJM0osTUFBSixDQUFXLE1BQU13SixHQUFHQyxRQUFwQixDQUFUO0FBQ0FELE9BQUdJLE9BQUgsR0FBYSxtQkFBYjtBQUNBSixPQUFHSyxNQUFILEdBQVksbUJBQVo7QUFDQUwsT0FBR00sU0FBSCxHQUFlLGNBQWY7QUFDQU4sT0FBR08sS0FBSCxHQUFXLGVBQVg7O0FBRUEsUUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQVVDLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3BDLFlBQUlDLE9BQU9oRyxTQUFYO0FBQUEsWUFDSWlHLFVBQVVELElBRGQ7QUFBQSxZQUVJRSxjQUFjRixJQUZsQjtBQUFBLFlBR0lHLGNBQWNMLFFBQVEsRUFIMUI7QUFBQSxZQUlJTSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFVdEcsR0FBVixFQUFlO0FBQy9CLGdCQUFNaUYsV0FBV3ZMLFNBQVM2TSxzQkFBVCxFQUFqQjtBQUNBLG1CQUFPdkcsSUFBSTFGLE1BQVg7QUFDSTJLLHlCQUFTdUIsV0FBVCxDQUFxQnhHLElBQUksQ0FBSixDQUFyQjtBQURKLGFBRUEsT0FBT2lGLFFBQVA7QUFDSCxTQVRMO0FBQUEsWUFVSXdCLGVBVko7O0FBWUFwQix5QkFBaUIsRUFBakI7QUFDQUMsc0JBQWMsRUFBZDtBQUNBZSxvQkFDS3JLLE9BREwsQ0FDYXVKLEdBQUdLLE1BRGhCLEVBQ3dCLFVBQVVjLElBQVYsRUFBZ0JDLE1BQWhCLEVBQXdCZixNQUF4QixFQUFnQztBQUNoRE4sd0JBQVlyRixJQUFaLENBQWlCMkYsTUFBakI7QUFDQSxtQkFBTyxNQUFQO0FBQ0gsU0FKTCxFQUtLNUosT0FMTCxDQUthdUosR0FBR00sU0FMaEIsRUFLMkIsVUFBVWEsSUFBVixFQUFnQmIsU0FBaEIsRUFBMkI7QUFDOUNSLDJCQUFlcEYsSUFBZixDQUFvQjRGLFNBQXBCO0FBQ0EsbUJBQU8sSUFBUDtBQUNILFNBUkwsRUFTSzdKLE9BVEwsQ0FTYSxNQVRiLEVBU3FCLEVBVHJCLEVBVUtBLE9BVkwsQ0FVYXVKLEdBQUdJLE9BVmhCLEVBVXlCLFVBQVVlLElBQVYsRUFBZ0JFLFdBQWhCLEVBQTZCQyxRQUE3QixFQUF1QztBQUN4RFYsb0JBQVFLLFdBQVIsQ0FBb0JKLGNBQWNsRyxRQUFRMEcsV0FBUixDQUFsQztBQUNBLGdCQUFJQyxhQUFhLEdBQWpCLEVBQ0lWLFVBQVVDLFdBQVYsQ0FESixLQUVLLElBQUlTLGFBQWEsR0FBakIsRUFDRFYsVUFBVUEsUUFBUWhHLFVBQWxCO0FBQ1AsU0FoQkw7O0FBa0JBc0csaUJBQVNQLEtBQUt4QyxRQUFMLENBQWNwSixNQUFkLEdBQXVCLENBQXZCLEdBQ0g0TCxLQUFLeEMsUUFERixHQUVId0MsS0FBS3hDLFFBQUwsQ0FBYyxDQUFkLENBRk47O0FBSUEsZUFBT3VDLFdBQ0RDLEtBQUtZLFNBREosR0FFQUwsa0JBQWtCTSxjQUFsQixHQUFtQ1Qsa0JBQWtCRyxNQUFsQixDQUFuQyxHQUErREEsTUFGdEU7QUFHSCxLQXhDRDs7QUEwQ0EsUUFBTXZHLFVBQVUsaUJBQVU4RixJQUFWLEVBQWdCO0FBQzVCLFlBQUlLLGNBQWNMLFFBQVEsRUFBMUI7QUFBQSxZQUNJZ0IsWUFBWVgsWUFBWXZLLEtBQVosQ0FBa0J5SixHQUFHRyxHQUFyQixDQURoQjtBQUFBLFlBRUl1QixXQUFXWixZQUFZdkssS0FBWixDQUFrQnlKLEdBQUdyTSxFQUFyQixDQUZmO0FBQUEsWUFHSWdPLGdCQUFnQmIsWUFBWXZLLEtBQVosQ0FBa0J5SixHQUFHRSxPQUFyQixDQUhwQjtBQUFBLFlBSUkwQixjQUFjZCxZQUFZdkssS0FBWixDQUFrQnlKLEdBQUdPLEtBQXJCLENBSmxCO0FBQUEsWUFLSXNCLGtCQUFrQmYsWUFBWXZLLEtBQVosQ0FBa0J5SixHQUFHTSxTQUFyQixDQUx0QjtBQUFBLFlBTUkzRixVQUFVeEcsU0FBU3NMLGFBQVQsQ0FBdUJnQyxZQUFZQSxVQUFVLENBQVYsQ0FBWixHQUEyQixLQUFsRCxDQU5kOztBQVFBLFlBQUlDLFFBQUosRUFBYztBQUNWL0csb0JBQVFoSCxFQUFSLEdBQWErTixTQUFTSSxHQUFULEdBQWVyTCxPQUFmLENBQXVCdUosR0FBR3JNLEVBQTFCLEVBQThCLElBQTlCLENBQWI7QUFDSDs7QUFFRCxZQUFJZ08sYUFBSixFQUFtQjtBQUNmaEgsb0JBQVFvSCxTQUFSLEdBQW9CSixjQUFjbEUsR0FBZCxDQUFrQixVQUFVc0UsU0FBVixFQUFxQjtBQUN2RCx1QkFBT0EsVUFBVUMsS0FBVixDQUFnQixDQUFoQixDQUFQO0FBQ0gsYUFGbUIsRUFFakJDLElBRmlCLENBRVosR0FGWSxDQUFwQjtBQUdIOztBQUVELFlBQUlKLGVBQUosRUFBcUI7QUFDakJsSCxvQkFBUTRHLFNBQVIsSUFBcUJNLGdCQUFnQnBFLEdBQWhCLENBQW9CLFlBQVk7QUFDakQsdUJBQU95RSxTQUFTcEMsZUFBZXFDLEtBQWYsRUFBVCxDQUFQO0FBQ0gsYUFGb0IsRUFFbEJGLElBRmtCLENBRWIsR0FGYSxDQUFyQjtBQUdIOztBQUVELFlBQUlMLFdBQUosRUFBaUI7QUFDYkEsd0JBQVluRSxHQUFaLENBQWdCLFVBQVUyRSxVQUFWLEVBQXNCO0FBQ2xDLG9CQUFNQyxRQUFRRCxXQUFXM0wsT0FBWCxDQUFtQnVKLEdBQUdPLEtBQXRCLEVBQTZCLElBQTdCLEVBQW1DdEosS0FBbkMsQ0FBeUMsR0FBekMsQ0FBZDtBQUNBb0wsc0JBQU01RSxHQUFOLENBQVUsVUFBVTZFLFNBQVYsRUFBcUI7QUFDM0Isd0JBQU0xSixPQUFPMEosVUFBVXJMLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBYjtBQUNBLHdCQUFNMUQsTUFBTXFGLEtBQUt1SixLQUFMLEVBQVo7QUFDQSx3QkFBTTNPLFFBQVE4QixLQUFLc0IsS0FBTCxDQUFXc0wsU0FBU3RKLEtBQUtxSixJQUFMLENBQVUsR0FBVixDQUFULENBQVgsQ0FBZDtBQUNBdEgsNEJBQVE0SCxZQUFSLENBQXFCaFAsR0FBckIsRUFBMEJDLEtBQTFCO0FBQ0gsaUJBTEQ7QUFNSCxhQVJEO0FBU0g7O0FBRUQsZUFBT21ILE9BQVA7QUFDSCxLQXRDRDs7QUF3Q0EsV0FBTzZGLEtBQVA7QUFDSCxDQWpHRDs7a0JBbUdlWCxLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25IUixJQUFNMkMsc0NBQWU7QUFDeEJDLFVBQU0sTUFEa0I7QUFFeEJDLFNBQUssS0FGbUI7QUFHeEJDLFdBQU8sT0FIaUI7QUFJeEJDLFdBQU8sT0FKaUI7QUFLeEJDLFVBQU0sTUFMa0I7QUFNeEJDLFlBQVEsUUFOZ0I7QUFPeEJDLGFBQVMsU0FQZTtBQVF4QkMsb0JBQWdCLGdCQVJRO0FBU3hCQyxZQUFRLFFBVGdCO0FBVXhCQyxXQUFPLE9BVmlCO0FBV3hCQyxXQUFPLE9BWGlCO0FBWXhCQyxpQkFBYSxhQVpXO0FBYXhCQyxlQUFXLFdBYmE7QUFjeEJDLGNBQVUsVUFkYztBQWV4QkMsVUFBTSxNQWZrQjtBQWdCeEJDLGFBQVMsU0FoQmU7QUFpQnhCQyxlQUFXLFdBakJhO0FBa0J4QkMsZUFBVyxXQWxCYTtBQW1CeEJDLGNBQVUsVUFuQmM7QUFvQnhCQyxlQUFXLFdBcEJhO0FBcUJ4QkMsVUFBTSxNQXJCa0I7QUFzQnhCQyxvQkFBZ0IsZ0JBdEJRO0FBdUJ4QkMsYUFBUyxTQXZCZTtBQXdCeEJDLFdBQU8sT0F4QmlCO0FBeUJ4QnhPLFdBQU8sT0F6QmlCO0FBMEJ4QnlPLFdBQU8sT0ExQmlCO0FBMkJ4QkMsV0FBTyxPQTNCaUI7QUE0QnhCQyxhQUFTLFNBNUJlO0FBNkJ4QkMsYUFBUyxTQTdCZTtBQThCeEJDLGNBQVUsVUE5QmM7QUErQnhCQyxXQUFPLE9BL0JpQjtBQWdDeEJuSyxVQUFNLE1BaENrQjtBQWlDeEJvSyxnQkFBWSxZQWpDWTtBQWtDeEJDLG9CQUFnQixnQkFsQ1E7QUFtQ3hCQyxlQUFXLFdBbkNhO0FBb0N4QkMsZUFBVyxXQXBDYTtBQXFDeEJDLGdCQUFZLFlBckNZO0FBc0N4QkMsZ0JBQVksWUF0Q1k7QUF1Q3hCQyxlQUFXLFdBdkNhO0FBd0N4QkMsY0FBVSxVQXhDYztBQXlDeEJDLGVBQVcsV0F6Q2E7QUEwQ3hCQyxhQUFTLFNBMUNlO0FBMkN4QkMsZ0JBQVksWUEzQ1k7QUE0Q3hCQyxXQUFPLE9BNUNpQjtBQTZDeEJDLFVBQU0sTUE3Q2tCO0FBOEN4QkMsYUFBUyxTQTlDZTtBQStDeEJDLGNBQVUsVUEvQ2M7QUFnRHhCQyxnQkFBWSxZQWhEWTtBQWlEeEJDLFdBQU8sT0FqRGlCO0FBa0R4QkMsWUFBUSxRQWxEZ0I7QUFtRHhCQyxZQUFRLFFBbkRnQjtBQW9EeEJDLFlBQVEsUUFwRGdCO0FBcUR4QkMsYUFBUyxTQXJEZTtBQXNEeEJDLFlBQVEsUUF0RGdCO0FBdUR4QkMsYUFBUyxTQXZEZTtBQXdEeEJDLFlBQVEsUUF4RGdCO0FBeUR4QkMsYUFBUyxTQXpEZTtBQTBEeEJDLGdCQUFZLFlBMURZO0FBMkR4Qm5ILFlBQVEsUUEzRGdCO0FBNER4Qm9ILGtCQUFjLGNBNURVO0FBNkR4QkMsYUFBUyxTQTdEZTtBQThEeEJDLFdBQU8sT0E5RGlCO0FBK0R4QkMsY0FBVSxVQS9EYztBQWdFeEJDLHVCQUFtQixtQkFoRUs7QUFpRXhCQyx3QkFBb0Isb0JBakVJO0FBa0V4QkMsaUJBQWEsYUFsRVc7QUFtRXhCQyxpQkFBYSxhQW5FVztBQW9FeEJDLGVBQVcsV0FwRWE7QUFxRXhCQyxtQkFBZSxlQXJFUztBQXNFeEJDLGlCQUFhLGFBdEVXO0FBdUV4QkMsZ0JBQVksWUF2RVk7QUF3RXhCQyxrQkFBYyxjQXhFVTtBQXlFeEJDLGtCQUFjLGNBekVVO0FBMEV4QkMsaUJBQWEsYUExRVc7QUEyRXhCQyxxQkFBaUIsaUJBM0VPO0FBNEV4QkMsa0JBQWMsY0E1RVU7QUE2RXhCQyx3QkFBb0Isb0JBN0VJO0FBOEV4QkMsb0JBQWdCLGdCQTlFUTtBQStFeEJDLG1CQUFlO0FBL0VTLENBQXJCOztBQWtGQSxJQUFNdFAsa0RBQXFCO0FBQzlCK0ssVUFBTSxNQUR3QjtBQUU5QkksWUFBUSxRQUZzQjtBQUc5QkMsV0FBTyxPQUh1QjtBQUk5QkksY0FBVSxVQUpvQjtBQUs5QkMsVUFBTSxNQUx3QjtBQU05QkMsYUFBUyxTQU5xQjtBQU85QkMsZUFBVyxXQVBtQjtBQVE5QkMsZUFBVyxXQVJtQjtBQVM5QkMsY0FBVSxVQVRvQjtBQVU5QkMsZUFBVyxXQVZtQjtBQVc5QkMsVUFBTSxNQVh3QjtBQVk5QkksV0FBTyxPQVp1QjtBQWE5QkMsV0FBTyxPQWJ1QjtBQWM5Qi9KLFVBQU0sTUFkd0I7QUFlOUJ1SyxlQUFXLFdBZm1CO0FBZ0I5QkMsZ0JBQVksWUFoQmtCO0FBaUI5QkMsZ0JBQVksWUFqQmtCO0FBa0I5QkMsZUFBVyxXQWxCbUI7QUFtQjlCQyxjQUFVLFVBbkJvQjtBQW9COUJDLGVBQVcsV0FwQm1CO0FBcUI5QkMsYUFBUyxTQXJCcUI7QUFzQjlCQyxnQkFBWSxZQXRCa0I7QUF1QjlCUSxZQUFRLFFBdkJzQjtBQXdCOUJHLFlBQVEsUUF4QnNCO0FBeUI5QkUsWUFBUSxRQXpCc0I7QUEwQjlCSyxXQUFPLE9BMUJ1QjtBQTJCOUJpQixtQkFBZTtBQTNCZSxDQUEzQjs7a0JBOEJRNUUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSGYsSUFBTTZFLGVBQWU7O0FBRWpCQyxtQkFBZW5ULFNBQVM2TSxzQkFBVCxFQUZFO0FBR2pCdUcsYUFBUyxPQUhRO0FBSWpCQyxnQkFBWSxFQUpLOztBQU1qQjs7Ozs7O0FBTUE5TyxjQUFVLGtCQUFTN0QsSUFBVCxFQUFlNFMsT0FBZixFQUF3QjtBQUM5QixZQUFJbFUsWUFBSjtBQUNBLFlBQU1tVSxRQUFRLElBQUlDLFdBQUosQ0FBZ0I5UyxJQUFoQixFQUFzQixFQUFDK1MsUUFBUUgsT0FBVCxFQUF0QixDQUFkO0FBQ0EsWUFBSSxRQUFPQSxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQXZCLEVBQ0ksS0FBS2xVLEdBQUwsSUFBWWtVLE9BQVo7QUFDSSxnQkFBSSxDQUFDQyxNQUFNRyxjQUFOLENBQXFCdFUsR0FBckIsQ0FBTCxFQUFnQ21VLE1BQU1uVSxHQUFOLElBQWFrVSxRQUFRbFUsR0FBUixDQUFiO0FBRHBDLFNBRUo4VCxhQUFhQyxhQUFiLENBQTJCelMsSUFBM0IsSUFBbUM2UyxLQUFuQztBQUNBLGVBQU8sSUFBUDtBQUNILEtBcEJnQjs7QUFzQmpCOzs7O0FBSUFJLGlCQUFhLHFCQUFTalQsSUFBVCxFQUFjO0FBQ3ZCLFlBQUl3UyxhQUFhQyxhQUFiLENBQTJCelMsSUFBM0IsQ0FBSixFQUNJLE9BQU93UyxhQUFhQyxhQUFiLENBQTJCelMsSUFBM0IsQ0FBUDtBQUNKLGVBQU8sSUFBUDtBQUNILEtBOUJnQjs7QUFnQ2pCOzs7Ozs7O0FBT0FvRSxzQkFBa0IsMEJBQVU4TyxJQUFWLEVBQWdCQyxRQUFoQixFQUEwQkMsVUFBMUIsRUFBcUM7QUFDbkRBLHFCQUFhQSxjQUFjLEtBQTNCO0FBQ0FaLHFCQUFhQyxhQUFiLENBQTJCck8sZ0JBQTNCLENBQTRDOE8sSUFBNUMsRUFBa0RDLFFBQWxELEVBQTREQyxVQUE1RDtBQUNBLGVBQU8sSUFBUDtBQUNILEtBM0NnQjs7QUE2Q2pCOzs7Ozs7QUFNQUMseUJBQXFCLDZCQUFVSCxJQUFWLEVBQWdCQyxRQUFoQixFQUEwQkMsVUFBMUIsRUFBc0M7QUFDdkRaLHFCQUFhQyxhQUFiLENBQTJCWSxtQkFBM0IsQ0FBK0NILElBQS9DLEVBQXFEQyxRQUFyRCxFQUErREMsY0FBWSxLQUEzRTtBQUNBLGVBQU8sSUFBUDtBQUNILEtBdERnQjs7QUF3RGpCOzs7O0FBSUFFLG1CQUFlLHVCQUFVSixJQUFWLEVBQWU7QUFDMUIsWUFBSVYsYUFBYUMsYUFBYixDQUEyQlMsSUFBM0IsYUFBNENKLFdBQWhELEVBQ0lOLGFBQWFDLGFBQWIsQ0FBMkJhLGFBQTNCLENBQXlDZCxhQUFhQyxhQUFiLENBQTJCUyxJQUEzQixDQUF6QztBQUNKLGVBQU8sSUFBUDtBQUNIOztBQWhFZ0IsQ0FBckI7O2tCQW9FZVYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NmOzs7Ozs7QUFFQSxJQUFNZSxjQUFjLFNBQWRBLFdBQWMsQ0FBVS9VLE1BQVYsRUFBa0I2SCxRQUFsQixFQUE0Qm1OLFlBQTVCLEVBQTBDO0FBQzFELFFBQ0k5VSxZQURKO0FBQUEsUUFFSStVLE1BQU0sSUFBSUMsY0FBSixFQUZWO0FBQUEsUUFHSW5ULFVBQVU7QUFDTkssY0FBTXBDLE9BQU9vQyxJQUFQLElBQWUsRUFEZjtBQUVONkYsZ0JBQVFqSSxPQUFPaUksTUFBUCxJQUFpQmpJLE9BQU9PLEdBQXhCLElBQStCTyxTQUFTNEcsUUFBVCxDQUFrQnlOLElBRm5EO0FBR04xUCxnQkFBUXpGLE9BQU95RixNQUFQLEdBQWdCekYsT0FBT3lGLE1BQVAsQ0FBYzJQLFdBQWQsRUFBaEIsR0FBOEMsS0FIaEQ7QUFJTkMsaUJBQVNyVixPQUFPcVYsT0FBUCxJQUFrQixFQUpyQjtBQUtOQyxtQkFBV3RWLE9BQU9zVixTQUFQLEtBQXFCbFYsU0FBckIsR0FBaUMsSUFBakMsR0FBd0MsQ0FBQyxDQUFDSixPQUFPc1YsU0FMdEQ7QUFNTkMscUJBQWF2VixPQUFPdVYsV0FBUCxLQUF1Qm5WLFNBQXZCLEdBQW1DLEtBQW5DLEdBQTJDLENBQUMsQ0FBQ0osT0FBT3VWLFdBTjNEO0FBT05DLGVBQU94VixPQUFPd1YsS0FBUCxLQUFpQnBWLFNBQWpCLEdBQTZCLElBQTdCLEdBQW9DLENBQUMsQ0FBQ0osT0FBT3dWLEtBUDlDO0FBUU5DLGNBQU16VixPQUFPeVYsSUFBUCxJQUFlLElBUmY7QUFTTkMsa0JBQVUxVixPQUFPeVYsSUFBUCxJQUFlO0FBVG5CLEtBSGQ7QUFBQSxRQWNJRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDOUIsWUFBSS9ILFNBQVMsRUFBYjtBQUNBLGFBQUszTixHQUFMLElBQVkwVixNQUFaLEVBQW9CO0FBQ2hCL0gsc0JBQVUsTUFBTTNOLEdBQU4sR0FBWSxHQUFaLElBQW1CNkIsUUFBUXVULFNBQVIsR0FBb0JqVCxtQkFBbUJ1VCxPQUFPMVYsR0FBUCxDQUFuQixDQUFwQixHQUFzRDBWLE9BQU8xVixHQUFQLENBQXpFLENBQVY7QUFDSDtBQUNELGVBQU8yTixNQUFQO0FBQ0gsS0FwQkw7QUFBQSxRQXFCSWdJLFdBQVcsRUFyQmY7O0FBdUJBYixtQkFBZ0Isc0JBQU9BLFlBQVAsRUFBcUIsUUFBckIsQ0FBRCxHQUFtQ0EsWUFBbkMsR0FBa0QsRUFBakU7O0FBRUE7QUFDQSxRQUFJalQsUUFBUTBELE1BQVIsS0FBbUIsS0FBdkIsRUFBOEI7O0FBRTFCO0FBQ0ExRCxnQkFBUWtHLE1BQVIsSUFBa0JsRyxRQUFRa0csTUFBUixDQUFlNk4sT0FBZixDQUF1QixHQUF2QixNQUFnQyxDQUFDLENBQWpDLEdBQXFDLEdBQXJDLEdBQTJDLEVBQTdEO0FBQ0EvVCxnQkFBUWtHLE1BQVIsSUFBa0IwTixjQUFjNVQsUUFBUUssSUFBdEIsQ0FBbEI7QUFDQXlULG1CQUFXLEVBQVg7QUFFSCxLQVBELE1BT087O0FBRUg7QUFDQSxZQUFJOVQsUUFBUUssSUFBUixZQUF3QjJULFFBQTVCLEVBQXNDO0FBQ2xDaFUsb0JBQVFLLElBQVIsR0FBZSxFQUFmO0FBQ0FMLG9CQUFRd1QsV0FBUixHQUFzQixJQUF0QjtBQUNBTSx1QkFBVzlULFFBQVFLLElBQW5CO0FBQ0g7O0FBRUQ7QUFDQSxZQUFJTCxRQUFRSyxJQUFSLFlBQXdCNFQsZUFBNUIsRUFBNkM7QUFDekNILHVCQUFXLElBQUlFLFFBQUosQ0FBYWhVLFFBQVFLLElBQXJCLENBQVg7QUFDQUwsb0JBQVF3VCxXQUFSLEdBQXNCLElBQXRCO0FBQ0F4VCxvQkFBUUssSUFBUixHQUFlLEVBQWY7QUFDSDs7QUFFRCxZQUFJTCxRQUFRd1QsV0FBWixFQUF5QjtBQUNyQixnQkFBSSxFQUFFTSxvQkFBb0JFLFFBQXRCLENBQUosRUFBcUM7QUFDakNGLDJCQUFXLElBQUlFLFFBQUosRUFBWDtBQUNIOztBQUVELGlCQUFLN1YsR0FBTCxJQUFZNkIsUUFBUUssSUFBcEI7QUFDSXlULHlCQUFTbkwsTUFBVCxDQUFnQnhLLEdBQWhCLEVBQXFCNkIsUUFBUXVULFNBQVIsR0FBb0JqVCxtQkFBbUJOLFFBQVFLLElBQVIsQ0FBYWxDLEdBQWIsQ0FBbkIsQ0FBcEIsR0FBNEQ2QixRQUFRSyxJQUFSLENBQWFsQyxHQUFiLENBQWpGO0FBREo7QUFHSCxTQVJELE1BUU87QUFDSDJWLHVCQUFXRixjQUFjNVQsUUFBUUssSUFBdEIsQ0FBWDtBQUNIO0FBRUo7O0FBRUQ7QUFDQTZTLFFBQUlnQixJQUFKLENBQVNsVSxRQUFRMEQsTUFBakIsRUFBeUIxRCxRQUFRa0csTUFBakMsRUFBeUNsRyxRQUFReVQsS0FBakQsRUFBd0R6VCxRQUFRMFQsSUFBaEUsRUFBc0UxVCxRQUFRMlQsUUFBOUU7O0FBRUFULFFBQUlpQixnQkFBSixDQUFxQixrQkFBckIsRUFBeUMsZ0JBQXpDOztBQUVBLFFBQUluVSxRQUFRMEQsTUFBUixLQUFtQixLQUFuQixJQUE0QixDQUFDMUQsUUFBUXdULFdBQXpDLEVBQXNEO0FBQ2xETixZQUFJaUIsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsbUNBQXJDO0FBQ0g7O0FBRUQsU0FBS2hXLEdBQUwsSUFBWTZCLFFBQVFzVCxPQUFwQixFQUE2QjtBQUN6QkosWUFBSWlCLGdCQUFKLENBQXFCaFcsR0FBckIsRUFBMEI2QixRQUFRc1QsT0FBUixDQUFnQm5WLEdBQWhCLENBQTFCO0FBQ0g7O0FBRUQrVSxRQUFJa0IsU0FBSixHQUFnQixZQUFZO0FBQ3hCbkIscUJBQWFFLGNBQWIsR0FBOEJELEdBQTlCO0FBQ0EsWUFBSSxPQUFPcE4sUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQ0EscUJBQVM5QyxJQUFULENBQWNpUSxZQUFkLEVBQTRCQyxJQUFJbUIsTUFBaEMsRUFBd0NuQixJQUFJb0IsWUFBNUMsRUFBMERwQixHQUExRDtBQUNIO0FBQ0osS0FMRDs7QUFPQUEsUUFBSXFCLFdBQUosR0FBa0J2VSxPQUFsQjtBQUNBa1QsUUFBSXNCLElBQUosQ0FBU1YsUUFBVDtBQUNBLFdBQU9aLEdBQVA7QUFDSCxDQXZGRCxDLENBMUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBbUhlRixXOzs7Ozs7Ozs7Ozs7OztBQ25IZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBeUIsT0FBT3pXLG9CQUFQLEdBQThCQSw4QkFBOUI7QUFDQXlXLE9BQU96VyxvQkFBUCxDQUE0QjBXLElBQTVCLEdBQW1DQSxjQUFuQztBQUNBRCxPQUFPelcsb0JBQVAsQ0FBNEJ3QixNQUE1QixHQUFxQ0EsZ0JBQXJDO0FBQ0FpVixPQUFPelcsb0JBQVAsQ0FBNEIyVyxPQUE1QixHQUFzQ0EsaUJBQXRDO0FBQ0FGLE9BQU96VyxvQkFBUCxDQUE0QnVJLFFBQTVCLEdBQXVDQSxrQkFBdkM7QUFDQWtPLE9BQU96VyxvQkFBUCxDQUE0QmlVLFlBQTVCLEdBQTJDQSxzQkFBM0M7QUFDQXdDLE9BQU96VyxvQkFBUCxDQUE0QjRXLEtBQTVCLEdBQW9DQSxlQUFwQztBQUNBSCxPQUFPelcsb0JBQVAsQ0FBNEJ5TSxLQUE1QixHQUFvQ0EsZUFBcEM7QUFDQWdLLE9BQU96VyxvQkFBUCxDQUE0QmdWLFdBQTVCLEdBQTBDQSxxQkFBMUM7QUFDQXlCLE9BQU96VyxvQkFBUCxDQUE0QmlLLEdBQTVCLEdBQWtDQSxhQUFsQztBQUNBd00sT0FBT3pXLG9CQUFQLENBQTRCNlcsR0FBNUIsR0FBa0NBLGFBQWxDO0FBQ0FKLE9BQU96VyxvQkFBUCxDQUE0QjhXLElBQTVCLEdBQW1DQSxjQUFuQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7OztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFVM08sT0FBVixFQUNiO0FBQ0ksUUFBTTRPLFVBQVUsRUFBQ0MsU0FBUSxJQUFULEVBQWhCO0FBQ0EsUUFBTUMsUUFBUSxJQUFJNU8sS0FBSixDQUFVRixPQUFWLEVBQW1CO0FBQzdCdEcsV0FENkIsZUFDekJ5RyxHQUR5QixFQUNwQi9CLElBRG9CLEVBQ2Q7QUFDWCxtQkFBT0EsUUFBUStCLEdBQVIsR0FBY0EsSUFBSS9CLElBQUosQ0FBZCxHQUEwQixJQUFqQztBQUNILFNBSDRCO0FBSTdCM0UsV0FKNkIsZUFJekIwRyxHQUp5QixFQUlwQi9CLElBSm9CLEVBSWRuRyxLQUpjLEVBSVA7QUFDbEIsZ0JBQUkyVyxRQUFReFEsSUFBUixLQUFpQixPQUFPd1EsUUFBUXhRLElBQVIsQ0FBUCxLQUF5QixVQUE5QyxFQUNJd1EsUUFBUXhRLElBQVIsRUFBY3ZCLElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJ1QixJQUF2QixFQUE2Qm5HLEtBQTdCLEVBQW9DLG9CQUFLNlcsS0FBTCxDQUFwQzs7QUFFSixnQkFBSSxPQUFPRixRQUFRQyxPQUFmLEtBQTJCLFVBQS9CLEVBQ0lELFFBQVFDLE9BQVIsQ0FBZ0JoUyxJQUFoQixDQUFxQixFQUFyQixFQUF5QnVCLElBQXpCLEVBQStCbkcsS0FBL0IsRUFBc0Msb0JBQUs2VyxLQUFMLENBQXRDOztBQUVKM08sZ0JBQUkvQixJQUFKLElBQVluRyxLQUFaO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBYjRCLEtBQW5CLENBQWQ7O0FBZ0JBLFdBQU87QUFFSHdCLFdBRkcsZUFFRXpCLEdBRkYsRUFFT2dJLE9BRlAsRUFFZ0I7QUFDZixnQkFBSSxPQUFPaEksR0FBUCxLQUFlLFVBQW5CLEVBQStCO0FBQzNCLG9CQUFNMk4sU0FBUzNOLElBQUk2RSxJQUFKLENBQVMsRUFBVCxFQUFhaVMsS0FBYixDQUFmO0FBQ0Esb0JBQUluSixNQUFKLEVBQ0ksS0FBS29KLElBQUwsQ0FBVXBKLE1BQVY7QUFDUCxhQUpELE1BSU8sSUFBSSxPQUFPM0YsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUN0QyxvQkFBTTJGLFVBQVMzRixRQUFRbkQsSUFBUixDQUFhLEVBQWIsRUFBaUJpUyxNQUFNOVcsR0FBTixDQUFqQixDQUFmO0FBQ0Esb0JBQUkyTixPQUFKLEVBQ0ltSixNQUFNOVcsR0FBTixJQUFhMk4sT0FBYjtBQUNQLGFBSk0sTUFLSG1KLE1BQU05VyxHQUFOLElBQWFnSSxPQUFiOztBQUVKLG1CQUFPLElBQVA7QUFDSCxTQWZFO0FBaUJIRCxjQWpCRyxrQkFpQksvSCxHQWpCTCxFQWlCVTJILFFBakJWLEVBaUJvQjtBQUNuQixnQkFBSSxPQUFPM0gsR0FBUCxLQUFlLFVBQWYsSUFBNkIsQ0FBQzJILFFBQWxDLEVBQTRDO0FBQ3hDaVAsd0JBQVFDLE9BQVIsR0FBa0I3VyxHQUFsQjtBQUNIO0FBQ0Q0VyxvQkFBUTVXLEdBQVIsSUFBZSxPQUFPMkgsUUFBUCxLQUFvQixVQUFwQixHQUFpQ0EsUUFBakMsR0FBNEMsSUFBM0Q7O0FBRUEsbUJBQU8sSUFBUDtBQUNILFNBeEJFO0FBMEJIakcsV0ExQkcsZUEwQkUxQixHQTFCRixFQTBCTztBQUNOLG1CQUFPQSxNQUFNOFcsTUFBTTlXLEdBQU4sQ0FBTixHQUFtQixvQkFBSzhXLEtBQUwsQ0FBMUI7QUFDSCxTQTVCRTtBQThCSEMsWUE5QkcsZ0JBOEJHL08sT0E5QkgsRUE4Qlk7QUFDWHhILG1CQUFPQyxJQUFQLENBQVl1SCxPQUFaLEVBQXFCdEgsT0FBckIsQ0FBNkIsVUFBQ1YsR0FBRCxFQUFTO0FBQ2xDOFcsc0JBQU05VyxHQUFOLElBQWFnSSxRQUFRaEksR0FBUixDQUFiO0FBQ0gsYUFGRDs7QUFJQSxtQkFBTyxJQUFQO0FBQ0gsU0FwQ0U7O0FBcUNIOFc7QUFyQ0csS0FBUDtBQXVDSCxDQTFERDs7a0JBNERlSCxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEUixJQUFNSyw4Q0FBbUIsMkNBQXpCO0FBQ0EsSUFBTUMsc0NBQWUsYUFBckI7QUFDQSxJQUFNQyxvQkFBTSxxREFBWjtBQUNBLElBQU1DLDRCQUFVLHFCQUFoQjtBQUNBLElBQU1DLGdDQUFZLEdBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTS9SLE9BQU8sU0FBUEEsSUFBTyxDQUFVK0IsT0FBVixFQUFtQjlGLElBQW5CLEVBQXlCckIsS0FBekIsRUFBZ0M7QUFDekMsUUFBTW9YLGVBQWUsc0JBQU9qUSxPQUFQLENBQXJCO0FBQ0EsUUFBSWlRLGlCQUFpQixRQUFyQixFQUErQjtBQUMzQmpRLGtCQUFVLHFCQUFNQSxPQUFOLENBQVY7QUFDSDs7QUFFRCxRQUFJLHNCQUFPQSxPQUFQLEtBQW1CN0YsVUFBVUMsTUFBVixLQUFxQixDQUE1QyxFQUErQztBQUMzQyxZQUFJLHNCQUFPRixJQUFQLEVBQWEsUUFBYixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLLElBQUl0QixHQUFULElBQWdCc0IsSUFBaEI7QUFDSStELHFCQUFLK0IsT0FBTCxFQUFjcEgsR0FBZCxFQUFtQnNCLEtBQUt0QixHQUFMLENBQW5CO0FBREo7QUFFSCxTQUhELE1BSUksT0FBT29ILFFBQVE1QixZQUFSLENBQXFCbEUsSUFBckIsQ0FBUDtBQUNQLEtBTkQsTUFPSyxJQUFJLHNCQUFPOEYsT0FBUCxLQUFtQjdGLFVBQVVDLE1BQVYsS0FBcUIsQ0FBNUMsRUFBK0M7QUFDaEQsWUFBSXZCLFVBQVUsS0FBZCxFQUFxQm1ILFFBQVEzQixlQUFSLENBQXdCbkUsSUFBeEIsRUFBckIsS0FDSzhGLFFBQVE0SCxZQUFSLENBQXFCMU4sSUFBckIsRUFBMkJyQixLQUEzQjtBQUNSO0FBQ0osQ0FqQkQ7O2tCQW1CZW9GLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZjs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNNkosT0FBTyxTQUFQQSxJQUFPLENBQVVoSSxHQUFWLEVBQWVuSCxRQUFmLEVBQ2I7QUFDSSxRQUFJLHNCQUFPbUgsR0FBUCxDQUFKLEVBQ0ksT0FBT0EsSUFBSW9RLFNBQUosQ0FBYyxJQUFkLENBQVA7O0FBRUosUUFBSXZSLE1BQU13UixPQUFOLENBQWNyUSxHQUFkLENBQUosRUFDSSxPQUFPQSxJQUFJdUgsS0FBSixFQUFQOztBQUVKLFFBQUksT0FBT3ZILEdBQVAsS0FBZSxVQUFuQixFQUNJLE9BQU9BLElBQUlzUSxJQUFKLENBQVN6WCxZQUFZLEVBQXJCLENBQVA7O0FBRUosUUFBSSxzQkFBT21ILEdBQVAsRUFBWSxRQUFaLENBQUosRUFBMkI7QUFDdkIsWUFBSXlHLFNBQVMsRUFBYjtBQUNBbk4sZUFBT0MsSUFBUCxDQUFZeUcsR0FBWixFQUFpQnhHLE9BQWpCLENBQXlCLFVBQUNWLEdBQUQsRUFBUztBQUM5QixnQkFBSUMsUUFBUWlILElBQUlsSCxHQUFKLENBQVo7QUFDQTJOLG1CQUFPM04sR0FBUCxJQUFja1AsS0FBS2pQLEtBQUwsRUFBWSxPQUFPQSxLQUFQLEtBQWlCLFVBQWpCLEdBQThCaUgsR0FBOUIsR0FBb0MsRUFBaEQsQ0FBZDtBQUNILFNBSEQ7QUFJQSxlQUFPeUcsTUFBUDtBQUNIOztBQUVELFdBQU96RyxHQUFQO0FBQ0gsQ0FyQkQ7O2tCQXVCZWdJLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZjs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNaEQsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVVSxHQUFWLEVBQWVJLEtBQWYsRUFBc0J5SyxLQUF0QixFQUE2QjtBQUMvQyxRQUNJclEsVUFBVXhHLFNBQVNzTCxhQUFULENBQXVCVSxHQUF2QixDQURkO0FBQUEsUUFFSThLLFVBQVUsU0FBVkEsT0FBVSxDQUFVeFEsR0FBVixFQUFlO0FBQ3JCLGVBQU8sc0JBQU9BLEdBQVAsRUFBWSxRQUFaLEtBQXlCLENBQUMsc0JBQU9BLEdBQVAsQ0FBakM7QUFDSCxLQUpMO0FBQUEsUUFLSXlRLGNBQWMsU0FBZEEsV0FBYyxDQUFVelEsR0FBVixFQUFlO0FBQ3pCRSxnQkFBUXdRLGtCQUFSLENBQTJCLFdBQTNCLEVBQXdDMVEsR0FBeEM7QUFDSCxLQVBMO0FBQUEsUUFRSTJRLGVBQWUsU0FBZkEsWUFBZSxDQUFVM1EsR0FBVixFQUFlO0FBQzFCRSxnQkFBUXNHLFdBQVIsQ0FBb0J4RyxHQUFwQjtBQUNILEtBVkw7QUFBQSxRQVdJNFEsU0FBUyxTQUFUQSxNQUFTLENBQVU1USxHQUFWLEVBQWU7QUFDcEIsWUFBTXNOLE9BQU8sc0JBQU90TixHQUFQLENBQWI7QUFDQSxZQUFJc04sU0FBUyxRQUFiLEVBQ0ltRCxZQUFZelEsR0FBWixFQURKLEtBRUssSUFBSXNOLFNBQVMsUUFBVCxJQUFxQixzQkFBT3ROLEdBQVAsQ0FBekIsRUFDRDJRLGFBQWEzUSxHQUFiLEVBREMsS0FFQSxJQUFJc04sU0FBUyxPQUFiLEVBQ0QsS0FBSyxJQUFJek4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJRyxJQUFJMUYsTUFBeEIsRUFBZ0N1RixHQUFoQztBQUFxQytRLG1CQUFPNVEsSUFBSUgsQ0FBSixDQUFQO0FBQXJDO0FBQ1AsS0FuQkw7O0FBcUJBLFFBQUl4RixVQUFVQyxNQUFWLEtBQXFCLENBQXJCLElBQTBCLENBQUNrVyxRQUFRMUssS0FBUixDQUEvQixFQUErQztBQUMzQ3lLLGdCQUFRekssS0FBUjtBQUNBQSxnQkFBUSxLQUFSO0FBQ0g7O0FBRUQsUUFBSUEsS0FBSixFQUNJLEtBQUssSUFBSStLLENBQVQsSUFBYy9LLEtBQWQ7QUFDSTVGLGdCQUFRNEgsWUFBUixDQUFxQitJLENBQXJCLEVBQXdCL0ssTUFBTStLLENBQU4sQ0FBeEI7QUFESixLQUdKLElBQUlOLEtBQUosRUFDSUssT0FBT0wsS0FBUDs7QUFFSixXQUFPclEsT0FBUDtBQUNILENBbkNEOztrQkFxQ2U4RSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNRSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVU1QixNQUFWLEVBQWtCO0FBQ3JDLFFBQU0yQixXQUFXdkwsU0FBUzZNLHNCQUFULEVBQWpCOztBQUVBLFFBQUksc0JBQU9qRCxNQUFQLENBQUosRUFDSTJCLFNBQVN1QixXQUFULENBQXFCbEQsTUFBckI7O0FBRUosUUFBSSxzQkFBT0EsTUFBUCxFQUFlLFFBQWYsQ0FBSixFQUNJMkIsU0FBU3VCLFdBQVQsQ0FBcUIsd0JBQVNsRCxNQUFULENBQXJCOztBQUVKLFdBQU8yQixRQUFQO0FBQ0gsQ0FWRDs7a0JBWWVDLGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU0zRixNQUFNLFNBQU5BLEdBQU0sQ0FBVUosUUFBVixFQUFvQjJSLFVBQXBCLEVBQWdDO0FBQ3hDLFFBQUksQ0FBQzNSLFFBQUQsSUFBYSxDQUFDMlIsVUFBbEIsRUFBOEI7QUFDOUIsUUFBSXpXLFVBQVVDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDeEIsWUFBTTRFLE9BQU8sRUFBYjtBQUNBQSxhQUFLNFIsVUFBTCxJQUFtQnpXLFVBQVUsQ0FBVixDQUFuQjtBQUNBLGVBQU9rRixJQUFJSixRQUFKLEVBQWNELElBQWQsQ0FBUDtBQUNIOztBQUVELFFBQUlXLFVBQUo7QUFBQSxRQUFPZ1IsVUFBUDtBQUFBLFFBQVVwUixXQUFXLElBQXJCO0FBQUEsUUFDSXNSLGVBQWUsc0JBQU81UixRQUFQLENBRG5CO0FBQUEsUUFFSTZSLGlCQUFpQixzQkFBT0YsVUFBUCxDQUZyQjtBQUFBLFFBR0kzVSxRQUFRLFNBQVJBLEtBQVEsQ0FBVUUsR0FBVixFQUFlO0FBQ25CLFlBQUl3RCxVQUFKO0FBQUEsWUFBT29SLEtBQUs1VSxJQUFJRyxLQUFKLENBQVUsR0FBVixDQUFaO0FBQUEsWUFBNEIwVSxXQUE1QjtBQUFBLFlBQWdDQyxXQUFoQztBQUFBLFlBQW9DQyxXQUFwQztBQUFBLFlBQXdDQyxJQUFJLEVBQTVDO0FBQ0EsYUFBS3hSLElBQUksQ0FBVCxFQUFZQSxJQUFJb1IsR0FBRzNXLE1BQW5CLEVBQTJCdUYsR0FBM0IsRUFBZ0M7QUFDNUJxUixpQkFBS0QsR0FBR3BSLENBQUgsRUFBTXJELEtBQU4sQ0FBWSxHQUFaLENBQUw7QUFDQTJVLGlCQUFLRCxHQUFHLENBQUgsRUFBTXhVLElBQU4sRUFBTDtBQUNBMFUsaUJBQUtELEdBQUd6QyxPQUFILENBQVcsR0FBWCxDQUFMO0FBQ0EsZ0JBQUkwQyxPQUFPLENBQUMsQ0FBWixFQUNJRCxLQUFLQSxHQUFHRyxTQUFILENBQWEsQ0FBYixFQUFnQkYsRUFBaEIsSUFBc0JELEdBQUdDLEtBQUssQ0FBUixFQUFXcEQsV0FBWCxFQUF0QixHQUFpRG1ELEdBQUdHLFNBQUgsQ0FBYUYsS0FBSyxDQUFsQixDQUF0RDtBQUNKLGdCQUFJRixHQUFHNVcsTUFBSCxLQUFjLENBQWxCLEVBQ0krVyxFQUFFRixFQUFGLElBQVFELEdBQUcsQ0FBSCxFQUFNeFUsSUFBTixFQUFSO0FBQ1A7QUFDRCxlQUFPMlUsQ0FBUDtBQUNILEtBZkw7O0FBa0JBLFlBQVFOLFlBQVI7QUFDSSxhQUFLLFFBQUw7QUFDSXRSLHVCQUFXLHdCQUFTTixRQUFULENBQVg7QUFDQTs7QUFFSixhQUFLLFFBQUw7QUFDSSxnQkFBSSxzQkFBT0EsUUFBUCxDQUFKLEVBQ0lNLFdBQVcsQ0FBQ04sUUFBRCxDQUFYO0FBQ0o7O0FBRUosYUFBSyxPQUFMO0FBQ0lNLHVCQUFXTixRQUFYO0FBQ0E7QUFaUjs7QUFlQSxRQUFJTSxRQUFKLEVBQWM7O0FBRVYsWUFBSXVSLG1CQUFtQixRQUF2QixFQUNJRixhQUFhM1UsTUFBTTJVLFVBQU4sQ0FBYjs7QUFFSixhQUFLalIsQ0FBTCxJQUFVSixRQUFWO0FBQ0ksaUJBQUtvUixDQUFMLElBQVVDLFVBQVY7QUFDSXJSLHlCQUFTSSxDQUFULEVBQVlULEtBQVosQ0FBa0J5UixDQUFsQixJQUF1QkMsV0FBV0QsQ0FBWCxDQUF2QjtBQURKO0FBREo7QUFHSDs7QUFFRCxXQUFPcFIsUUFBUDtBQUNILENBcEREOztrQkFzRGVGLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEZixJQUFNZ1MsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFVM04sS0FBVixFQUFpQjtBQUNwQyxRQUFNNkMsU0FBUyxFQUFmO0FBQ0EsUUFBTStLLFFBQVEsQ0FBQzVOLE1BQU0sQ0FBTixNQUFhLEdBQWIsR0FBbUJBLE1BQU02TixNQUFOLENBQWEsQ0FBYixDQUFuQixHQUFxQzdOLEtBQXRDLEVBQTZDcEgsS0FBN0MsQ0FBbUQsR0FBbkQsQ0FBZDtBQUNBZ1YsVUFBTWhZLE9BQU4sQ0FBYyxVQUFDa1ksSUFBRCxFQUFPN1IsQ0FBUCxFQUFhO0FBQ3ZCLFlBQUk4UixPQUFPSCxNQUFNM1IsQ0FBTixFQUFTckQsS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUNBaUssZUFBT3hLLG1CQUFtQjBWLEtBQUssQ0FBTCxDQUFuQixDQUFQLElBQXNDMVYsbUJBQW1CMFYsS0FBSyxDQUFMLEtBQVcsRUFBOUIsQ0FBdEM7QUFDSCxLQUhEO0FBSUEsV0FBT2xMLE1BQVA7QUFDSCxDQVJEOztrQkFVZThLLGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmLElBQU1LLFVBQVUsU0FBVkEsT0FBVSxDQUFVN1ksS0FBVixFQUFpQjtBQUM3QixXQUFPQSxVQUFVQyxTQUFqQjtBQUNILENBRkQ7O2tCQUllNFksTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmYsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQVVDLEtBQVYsRUFBaUIvWSxLQUFqQixFQUF3QjtBQUN0QyxXQUFPK1ksU0FBU0EsTUFBTS9ZLEtBQU4sTUFBaUJDLFNBQWpDO0FBQ0gsQ0FGRDs7a0JBSWU2WSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7O0FBR0EsSUFBTS9NLFlBQVksU0FBWkEsU0FBWSxDQUFVckUsUUFBVixFQUFvQjtBQUNsQyxRQUFNc1IsTUFBTSw0QkFBWjtBQUNBLFFBQUlBLElBQUlwWSxhQUFKLENBQWtCLE1BQWxCLENBQUosRUFDSThHLFNBQVM5QyxJQUFULEdBREosS0FHSW9VLElBQUl2VCxnQkFBSixDQUFxQixrQkFBckIsRUFBeUMsWUFBWTtBQUNqRGlDLGlCQUFTOUMsSUFBVDtBQUNILEtBRkQsRUFFRyxLQUZIO0FBR1AsQ0FSRDs7a0JBVWVtSCxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBQU1rTixPQUFPLFNBQVBBLElBQU8sQ0FBVXJWLElBQVYsRUFBZ0I4RCxRQUFoQixFQUEwQjVILFFBQTFCLEVBQW9DO0FBQzdDLFFBQUl5VSxPQUFPLHNCQUFPM1EsSUFBUCxDQUFYOztBQUVBLFlBQVEyUSxJQUFSO0FBQ0ksYUFBSyxPQUFMO0FBQ0kzUSxpQkFBS25ELE9BQUwsQ0FBYSxVQUFDcUcsQ0FBRCxFQUFJb1MsQ0FBSixFQUFPQyxDQUFQO0FBQUEsdUJBQWF6UixTQUFTOUMsSUFBVCxDQUFjOUUsUUFBZCxFQUF3QmdILENBQXhCLEVBQTJCb1MsQ0FBM0IsRUFBOEJDLENBQTlCLENBQWI7QUFBQSxhQUFiO0FBQ0E7QUFDSixhQUFLLFFBQUw7QUFDSSxnQkFBSSxzQkFBT3ZWLElBQVAsQ0FBSixFQUFrQjtBQUNkLG9CQUFJQSxnQkFBZ0J3VixRQUFwQixFQUNJSCxLQUFLblQsTUFBTUMsSUFBTixDQUFXbkMsSUFBWCxDQUFMLEVBQXVCOEQsUUFBdkIsRUFBaUM1SCxRQUFqQyxFQURKLEtBR0ltWixLQUFLLENBQUNyVixJQUFELENBQUwsRUFBYThELFFBQWIsRUFBdUI1SCxRQUF2QjtBQUNQLGFBTEQsTUFNSVMsT0FBT0MsSUFBUCxDQUFZb0QsSUFBWixFQUFrQm5ELE9BQWxCLENBQTBCLFVBQUNWLEdBQUQ7QUFBQSx1QkFBUzJILFNBQVM5QyxJQUFULENBQWM5RSxRQUFkLEVBQXdCOEQsS0FBSzdELEdBQUwsQ0FBeEIsRUFBbUNBLEdBQW5DLEVBQXdDNkQsSUFBeEMsQ0FBVDtBQUFBLGFBQTFCO0FBQ0o7QUFDSixhQUFLLFFBQUw7QUFDSXFWLGlCQUFLclYsS0FBS0gsS0FBTCxDQUFXLEVBQVgsQ0FBTCxFQUFxQmlFLFFBQXJCLEVBQStCNUgsUUFBL0I7QUFDQTtBQWZSO0FBaUJILENBcEJEOztBQXNCQW1aLEtBQUt2TyxNQUFMLEdBQWMsVUFBVXRFLFFBQVYsRUFBb0JpVCxNQUFwQixFQUF3QztBQUFBLFFBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDbEQsUUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNwVSxJQUFEO0FBQUEsZUFBVUEsUUFBUUEsS0FBS2lDLFVBQWIsR0FBMEJqQyxLQUFLaUMsVUFBL0IsR0FBNEMsS0FBdEQ7QUFBQSxLQUFsQjtBQUNBLFFBQUlELFVBQVUsc0JBQU9mLFFBQVAsSUFBbUJBLFFBQW5CLEdBQThCLHFCQUFNQSxRQUFOLENBQTVDO0FBQ0EsV0FBT2tULFFBQVEsQ0FBUixJQUFhblMsT0FBcEIsRUFBNkI7QUFDekJtUztBQUNBLFlBQUluUyxRQUFRQyxVQUFSLElBQXNCRCxRQUFRQyxVQUFSLENBQW1CeEcsYUFBbkIsQ0FBaUN5WSxNQUFqQyxDQUExQixFQUFvRTtBQUNoRSxtQkFBT2xTLE9BQVA7QUFDSDtBQUNEQSxrQkFBVW9TLFVBQVVwUyxPQUFWLENBQVY7QUFDSDtBQUNKLENBVkQ7O0FBWUE4UixLQUFLSSxNQUFMLEdBQWMsVUFBVWpULFFBQVYsRUFBb0JpVCxNQUFwQixFQUE0QjNSLFFBQTVCLEVBQWtEO0FBQUEsUUFBWjRSLEtBQVksdUVBQUosRUFBSTs7QUFDNUQsUUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNwVSxJQUFEO0FBQUEsZUFBVUEsUUFBUUEsS0FBS2lDLFVBQWIsR0FBMEJqQyxLQUFLaUMsVUFBL0IsR0FBNEMsS0FBdEQ7QUFBQSxLQUFsQjtBQUNBLFFBQUlELFVBQVUsc0JBQU9mLFFBQVAsSUFBbUJBLFFBQW5CLEdBQThCLHFCQUFNQSxRQUFOLENBQTVDO0FBQ0EsV0FBT2tULFFBQVEsQ0FBUixJQUFhblMsT0FBcEIsRUFBNkI7QUFDekJtUztBQUNBLFlBQUluUyxRQUFRQyxVQUFSLElBQXNCRCxRQUFRQyxVQUFSLENBQW1CeEcsYUFBbkIsQ0FBaUN5WSxNQUFqQyxDQUExQixFQUFvRTtBQUNoRTNSLHFCQUFTUCxPQUFUO0FBQ0EsbUJBQU9BLE9BQVA7QUFDSDtBQUNEQSxrQkFBVW9TLFVBQVVwUyxPQUFWLENBQVY7QUFDSDtBQUNELFdBQU9BLE9BQVA7QUFDSCxDQVpEOztrQkFjZThSLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFZixJQUFNTyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVUvRCxNQUFWLEVBQWtCO0FBQ3JDLFFBQUkvSCxTQUFTLEVBQWI7QUFDQW5OLFdBQU9DLElBQVAsQ0FBWWlWLE1BQVosRUFBb0JoVixPQUFwQixDQUE0QixVQUFDVixHQUFELEVBQVM7QUFDakMyTixrQkFBVSxDQUFFQSxPQUFPbk0sTUFBUixHQUFrQixHQUFsQixHQUF3QixHQUF6QixJQUFnQ3hCLEdBQWhDLEdBQXNDLEdBQXRDLEdBQTRDbUMsbUJBQW1CdVQsT0FBTzFWLEdBQVAsQ0FBbkIsQ0FBdEQ7QUFDSCxLQUZEOztBQUlBLFdBQU8yTixNQUFQO0FBQ0gsQ0FQRDs7a0JBU2U4TCxjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JSLElBQU1DLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVUMsV0FBVixFQUF1Qi9SLE1BQXZCLEVBQStCO0FBQ2pELFNBQUssSUFBSWdTLEtBQVQsSUFBa0JoUyxNQUFsQjtBQUNJLFlBQUlBLE9BQU8wTSxjQUFQLENBQXNCc0YsS0FBdEIsQ0FBSixFQUNJRCxZQUFZQyxLQUFaLElBQXFCaFMsT0FBT2dTLEtBQVAsQ0FBckI7QUFGUixLQUlBLFNBQVNDLEVBQVQsR0FBYztBQUNWLGFBQUtDLFdBQUwsR0FBbUJILFdBQW5CO0FBQ0g7O0FBRURFLE9BQUdFLFNBQUgsR0FBZW5TLE9BQU9tUyxTQUF0QjtBQUNBSixnQkFBWUksU0FBWixHQUF3QixJQUFJRixFQUFKLEVBQXhCO0FBQ0gsQ0FYTTs7QUFhQSxJQUFNRyw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQVVMLFdBQVYsRUFBdUIvUixNQUF2QixFQUErQjtBQUMxRCxRQUFJcVMsaUJBQUo7QUFDQSxTQUFLQSxRQUFMLElBQWlCclMsTUFBakIsRUFBeUI7QUFDckIsWUFBSUEsT0FBT3FTLFFBQVAsS0FBb0JyUyxPQUFPcVMsUUFBUCxFQUFpQkgsV0FBckMsSUFBb0RsUyxPQUFPcVMsUUFBUCxFQUFpQkgsV0FBakIsS0FBaUN0WixNQUF6RixFQUFpRztBQUM3Rm1aLHdCQUFZTSxRQUFaLElBQXdCTixZQUFZTSxRQUFaLEtBQXlCLEVBQWpEO0FBQ0FELDRCQUFnQkwsWUFBWU0sUUFBWixDQUFoQixFQUF1Q3JTLE9BQU9xUyxRQUFQLENBQXZDO0FBQ0gsU0FIRCxNQUlJTixZQUFZTSxRQUFaLElBQXdCclMsT0FBT3FTLFFBQVAsQ0FBeEI7QUFDUDtBQUNELFdBQU9OLFdBQVA7QUFDSCxDQVZNOztrQkFZUUQsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JmOzs7Ozs7QUFHQSxJQUFNUSxhQUFhLFNBQWJBLFVBQWEsQ0FBVUMsTUFBVixFQUFrQjlVLElBQWxCLEVBQXdCK1UsU0FBeEIsRUFBbUM7QUFDbEQsUUFBTUMsTUFBTSwyQkFBWUYsTUFBWixFQUFvQjlVLElBQXBCLEVBQTBCK1UsU0FBMUIsQ0FBWjtBQUNBLFdBQU9DLElBQUk3WSxNQUFKLEdBQWE2WSxJQUFJLENBQUosQ0FBYixHQUFzQixLQUE3QjtBQUNILENBSEQ7O2tCQUtlSCxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mLElBQU1JLGNBQWMsU0FBZEEsV0FBYyxDQUFVelcsSUFBVixFQUFnQndCLElBQWhCLEVBQXNCK1UsU0FBdEIsRUFBaUM7QUFDakQsUUFBSXJULFVBQUo7QUFBQSxRQUFPc1QsTUFBTSxFQUFiO0FBQ0EsUUFBSXhXLFFBQVEsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUE1QixFQUNJQSxPQUFPckQsT0FBTzJaLE1BQVAsQ0FBY3RXLElBQWQsQ0FBUDs7QUFFSixRQUFJa0MsTUFBTXdSLE9BQU4sQ0FBYzFULElBQWQsQ0FBSixFQUNJLEtBQUtrRCxJQUFJLENBQVQsRUFBWUEsSUFBSWxELEtBQUtyQyxNQUFyQixFQUE2QnVGLEdBQTdCO0FBQ0ksWUFBSWxELEtBQUtrRCxDQUFMLEtBQVdsRCxLQUFLa0QsQ0FBTCxFQUFRMUIsSUFBUixNQUFrQm5GLFNBQTdCLElBQTBDMkQsS0FBS2tELENBQUwsRUFBUTFCLElBQVIsTUFBa0IrVSxTQUFoRSxFQUNJQyxJQUFJbFQsSUFBSixDQUFTdEQsS0FBS2tELENBQUwsQ0FBVDtBQUZSLEtBSUosT0FBT3NULEdBQVA7QUFDSCxDQVhEOztBQWFPLElBQU1FLHdCQUFRLFNBQVJBLEtBQVEsQ0FBVUosTUFBVixFQUFrQjlVLElBQWxCLEVBQXdCK1UsU0FBeEIsRUFBbUM7QUFDcEQsUUFBSUMsTUFBTUMsWUFBWUgsTUFBWixFQUFvQjlVLElBQXBCLEVBQTBCK1UsU0FBMUIsQ0FBVjtBQUNBLFdBQU9DLElBQUk3WSxNQUFKLEdBQWE2WSxHQUFiLEdBQW1CLEtBQTFCO0FBQ0gsQ0FITTs7QUFLQSxJQUFNRyxzQkFBTyxTQUFQQSxJQUFPLENBQVVMLE1BQVYsRUFBa0I5VSxJQUFsQixFQUF3QitVLFNBQXhCLEVBQW1DO0FBQ25ELFFBQUlDLE1BQU1DLFlBQVlILE1BQVosRUFBb0I5VSxJQUFwQixFQUEwQitVLFNBQTFCLENBQVY7QUFDQSxXQUFPQyxJQUFJN1ksTUFBSixHQUFhNlksSUFBSSxDQUFKLENBQWIsR0FBc0IsS0FBN0I7QUFDSCxDQUhNOztrQkFLUUMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7QUFXQSxJQUFNOVEsU0FBUyxTQUFUQSxNQUFTLENBQVVpUixNQUFWLEVBQWtCNVcsSUFBbEIsRUFBd0I7QUFDbkMsUUFBSTZXLFlBQUo7QUFDQSxRQUFJM1UsTUFBTXdSLE9BQU4sQ0FBYzFULElBQWQsQ0FBSixFQUNJNlcsTUFBTSxJQUFJelgsTUFBSixDQUFXLFVBQVgsQ0FBTixDQURKLEtBRUssSUFBSVksUUFBUSxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQTVCLEVBQ0Q2VyxNQUFNLElBQUl6WCxNQUFKLENBQVcsVUFBWCxDQUFOOztBQUVKLFdBQU93WCxPQUFPdlgsT0FBUCxDQUFld1gsR0FBZixFQUFvQixVQUFVMVgsS0FBVixFQUFpQjJYLE1BQWpCLEVBQXlCO0FBQ2hELFlBQUksdUJBQVE5VyxLQUFLOFcsTUFBTCxDQUFSLEtBQXlCLHNCQUFPOVcsS0FBSzhXLE1BQUwsQ0FBUCxDQUE3QixFQUNJOVcsS0FBSzhXLE1BQUwsSUFBZSx3QkFBUzlXLEtBQUs4VyxNQUFMLENBQVQsQ0FBZjs7QUFFSixlQUFPLFFBQU85VyxLQUFLOFcsTUFBTCxDQUFQLE1BQXdCemEsU0FBeEIsR0FBb0MyRCxLQUFLOFcsTUFBTCxDQUFwQyxHQUFtRDNYLEtBQTFEO0FBQ0gsS0FMTSxDQUFQO0FBTUgsQ0FiRDs7a0JBZWV3RyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmYsSUFBTW9SLGNBQWMsU0FBZEEsV0FBYyxHQUFZO0FBQzVCLFFBQUloYSxRQUFKLEVBQ0ksT0FBT0EsUUFBUCxDQURKLEtBR0ksTUFBTSxJQUFJOEQsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDUCxDQUxEOztrQkFPZWtXLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxHQUFZO0FBQzVCLFFBQUlyVCxRQUFKLEVBQ0ksT0FBT0EsUUFBUCxDQURKLEtBR0ksTUFBTSxJQUFJOUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDUCxDQUxEOztrQkFPZW1XLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JmOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQU1oRyxjQUFjLFNBQWRBLFdBQWMsQ0FBVS9VLE1BQVYsRUFBa0I2SCxRQUFsQixFQUE0Qm1OLFlBQTVCLEVBQTBDO0FBQzFELFFBQUk5VSxZQUFKO0FBQ0EsUUFBSTJWLFdBQVcsRUFBZjtBQUNBLFFBQU1aLE1BQU0sSUFBSUMsY0FBSixFQUFaO0FBQ0EsUUFBTW5ULFVBQVU7QUFDWkssY0FBTXBDLE9BQU9vQyxJQUFQLElBQWUsRUFEVDtBQUVaNkYsZ0JBQVFqSSxPQUFPaUksTUFBUCxJQUFpQmpJLE9BQU9PLEdBQXhCLElBQStCTyxTQUFTNEcsUUFBVCxDQUFrQnlOLElBRjdDO0FBR1oxUCxnQkFBUXpGLE9BQU95RixNQUFQLEdBQWdCekYsT0FBT3lGLE1BQVAsQ0FBYzJQLFdBQWQsRUFBaEIsR0FBOEMsS0FIMUM7QUFJWkMsaUJBQVNyVixPQUFPcVYsT0FBUCxJQUFrQixFQUpmO0FBS1pDLG1CQUFXdFYsT0FBT3NWLFNBQVAsS0FBcUJsVixTQUFyQixHQUFpQyxJQUFqQyxHQUF3QyxDQUFDLENBQUNKLE9BQU9zVixTQUxoRDtBQU1aQyxxQkFBYXZWLE9BQU91VixXQUFQLEtBQXVCblYsU0FBdkIsR0FBbUMsS0FBbkMsR0FBMkMsQ0FBQyxDQUFDSixPQUFPdVYsV0FOckQ7QUFPWkMsZUFBT3hWLE9BQU93VixLQUFQLEtBQWlCcFYsU0FBakIsR0FBNkIsSUFBN0IsR0FBb0MsQ0FBQyxDQUFDSixPQUFPd1YsS0FQeEM7QUFRWkMsY0FBTXpWLE9BQU95VixJQUFQLElBQWUsSUFSVDtBQVNaQyxrQkFBVTFWLE9BQU95VixJQUFQLElBQWU7QUFUYixLQUFoQjs7QUFZQSxRQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDcEMsWUFBSS9ILFNBQVMsRUFBYjtBQUNBLGFBQUszTixHQUFMLElBQVkwVixNQUFaLEVBQW9CO0FBQ2hCL0gsc0JBQVUsTUFBTTNOLEdBQU4sR0FBWSxHQUFaLElBQW1CNkIsUUFBUXVULFNBQVIsR0FBb0JqVCxtQkFBbUJ1VCxPQUFPMVYsR0FBUCxDQUFuQixDQUFwQixHQUFzRDBWLE9BQU8xVixHQUFQLENBQXpFLENBQVY7QUFDSDtBQUNELGVBQU8yTixNQUFQO0FBQ0gsS0FORDs7QUFRQW1ILG1CQUFnQixzQkFBT0EsWUFBUCxFQUFxQixRQUFyQixDQUFELEdBQW1DQSxZQUFuQyxHQUFrRCxFQUFqRTs7QUFFQTtBQUNBLFFBQUlqVCxRQUFRMEQsTUFBUixLQUFtQixLQUF2QixFQUE4Qjs7QUFFMUI7QUFDQTFELGdCQUFRa0csTUFBUixJQUFrQmxHLFFBQVFrRyxNQUFSLENBQWU2TixPQUFmLENBQXVCLEdBQXZCLE1BQWdDLENBQUMsQ0FBakMsR0FBcUMsR0FBckMsR0FBMkMsRUFBN0Q7QUFDQS9ULGdCQUFRa0csTUFBUixJQUFrQjBOLGNBQWM1VCxRQUFRSyxJQUF0QixDQUFsQjtBQUNBeVQsbUJBQVcsRUFBWDtBQUVILEtBUEQsTUFPTzs7QUFFSDtBQUNBLFlBQUk5VCxRQUFRSyxJQUFSLFlBQXdCMlQsUUFBNUIsRUFBc0M7QUFDbENoVSxvQkFBUUssSUFBUixHQUFlLEVBQWY7QUFDQUwsb0JBQVF3VCxXQUFSLEdBQXNCLElBQXRCO0FBQ0FNLHVCQUFXOVQsUUFBUUssSUFBbkI7QUFDSDs7QUFFRDtBQUNBLFlBQUlMLFFBQVFLLElBQVIsWUFBd0I0VCxlQUE1QixFQUE2QztBQUN6Q0gsdUJBQVcsSUFBSUUsUUFBSixDQUFhaFUsUUFBUUssSUFBckIsQ0FBWDtBQUNBTCxvQkFBUXdULFdBQVIsR0FBc0IsSUFBdEI7QUFDQXhULG9CQUFRSyxJQUFSLEdBQWUsRUFBZjtBQUNIOztBQUVELFlBQUlMLFFBQVF3VCxXQUFaLEVBQXlCO0FBQ3JCLGdCQUFJLEVBQUVNLG9CQUFvQkUsUUFBdEIsQ0FBSixFQUFxQ0YsV0FBVyxJQUFJRSxRQUFKLEVBQVg7O0FBRXJDclYsbUJBQU9DLElBQVAsQ0FBWW9CLFFBQVFLLElBQXBCLEVBQTBCeEIsT0FBMUIsQ0FBa0MsVUFBQ1YsR0FBRCxFQUFTO0FBQ3ZDMlYseUJBQVNuTCxNQUFULENBQWdCeEssR0FBaEIsRUFBcUI2QixRQUFRdVQsU0FBUixHQUFvQmpULG1CQUFtQk4sUUFBUUssSUFBUixDQUFhbEMsR0FBYixDQUFuQixDQUFwQixHQUE0RDZCLFFBQVFLLElBQVIsQ0FBYWxDLEdBQWIsQ0FBakY7QUFDSCxhQUZEO0FBSUgsU0FQRCxNQU9PO0FBQ0gyVix1QkFBV0YsY0FBYzVULFFBQVFLLElBQXRCLENBQVg7QUFDSDtBQUVKOztBQUVEO0FBQ0E2UyxRQUFJZ0IsSUFBSixDQUFTbFUsUUFBUTBELE1BQWpCLEVBQXlCMUQsUUFBUWtHLE1BQWpDLEVBQXlDbEcsUUFBUXlULEtBQWpELEVBQXdEelQsUUFBUTBULElBQWhFLEVBQXNFMVQsUUFBUTJULFFBQTlFOztBQUVBVCxRQUFJaUIsZ0JBQUosQ0FBcUIsa0JBQXJCLEVBQXlDLGdCQUF6Qzs7QUFFQSxRQUFJblUsUUFBUTBELE1BQVIsS0FBbUIsS0FBbkIsSUFBNEIsQ0FBQzFELFFBQVF3VCxXQUF6QyxFQUFzRDtBQUNsRE4sWUFBSWlCLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG1DQUFyQztBQUNIOztBQUVELFNBQUtoVyxHQUFMLElBQVk2QixRQUFRc1QsT0FBcEIsRUFBNkI7QUFDekJKLFlBQUlpQixnQkFBSixDQUFxQmhXLEdBQXJCLEVBQTBCNkIsUUFBUXNULE9BQVIsQ0FBZ0JuVixHQUFoQixDQUExQjtBQUNIOztBQUVEK1UsUUFBSWtCLFNBQUosR0FBZ0IsWUFBWTtBQUN4Qm5CLHFCQUFhRSxjQUFiLEdBQThCRCxHQUE5QjtBQUNBLFlBQUksT0FBT3BOLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDaENBLHFCQUFTOUMsSUFBVCxDQUFjaVEsWUFBZCxFQUE0QkMsSUFBSW1CLE1BQWhDLEVBQXdDbkIsSUFBSW9CLFlBQTVDLEVBQTBEcEIsR0FBMUQ7QUFDSDtBQUNKLEtBTEQ7O0FBT0FBLFFBQUlxQixXQUFKLEdBQWtCdlUsT0FBbEI7QUFDQWtULFFBQUlzQixJQUFKLENBQVNWLFFBQVQ7QUFDQSxXQUFPWixHQUFQO0FBQ0gsQ0F0RkQ7O2tCQXdGZUYsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNdEssU0FBUyxTQUFUQSxNQUFTLENBQVVsRSxRQUFWLEVBQW9CbkUsSUFBcEIsRUFBMEJzSSxNQUExQixFQUFrQ0MsRUFBbEMsRUFDZjtBQUNJLFFBQUksc0JBQU9wRSxRQUFQLEVBQWlCLE9BQWpCLENBQUosRUFBK0I7QUFDM0JBLGlCQUFTM0YsT0FBVCxDQUFpQixVQUFDMEUsSUFBRCxFQUFVO0FBQ3ZCbUYsbUJBQU9uRixJQUFQLEVBQWFsRCxJQUFiLEVBQW1Cc0ksTUFBbkIsRUFBMkJDLEVBQTNCO0FBQ0gsU0FGRDtBQUdBO0FBQ0g7O0FBRUQsUUFBSSxzQkFBT3BFLFFBQVAsRUFBaUIsUUFBakIsQ0FBSixFQUNJQSxXQUFXLHFCQUFNQSxRQUFOLEVBQWdCb0UsRUFBaEIsQ0FBWDs7QUFFSixRQUFJLENBQUNELE1BQUwsRUFDSW5FLFNBQVN5VSxXQUFULEdBQXVCLEVBQXZCOztBQUVKLFFBQUksc0JBQU96VSxRQUFQLENBQUosRUFBc0I7QUFDbEIsWUFBSSxzQkFBT25FLElBQVAsQ0FBSixFQUFrQjtBQUNkbUUscUJBQVNxSCxXQUFULENBQXFCeEwsSUFBckI7QUFDSCxTQUZELE1BRU8sSUFBSSxzQkFBT0EsSUFBUCxFQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUM5QixnQkFBSTZFLFVBQUo7QUFDQSxpQkFBS0EsSUFBSSxDQUFULEVBQVlBLElBQUk3RSxLQUFLVixNQUFyQixFQUE2QnVGLEdBQTdCO0FBQ0l3RCx1QkFBT2xFLFFBQVAsRUFBaUJuRSxLQUFLNkUsQ0FBTCxDQUFqQixFQUEwQixJQUExQixFQUFnQzBELEVBQWhDO0FBREo7QUFFSCxTQUpNLE1BSUE7QUFDSHBFLHFCQUFTMkgsU0FBVCxHQUFzQixDQUFDeEQsTUFBRixHQUFZdEksSUFBWixHQUFtQm1FLFNBQVMySCxTQUFULEdBQXFCOUwsSUFBN0Q7QUFDSDtBQUNELGVBQU9tRSxRQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQTVCRDs7a0JBOEJla0UsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENmOzs7Ozs7QUFHQSxJQUFNd1EsVUFBVSxTQUFWQSxPQUFVLENBQVU3VCxHQUFWLEVBQWU7QUFDM0IsUUFBSSxzQkFBT0EsR0FBUCxFQUFZLFFBQVosS0FBeUIsc0JBQU9BLEdBQVAsRUFBWSxPQUFaLENBQTdCLEVBQW1EO0FBQy9DLGFBQUssSUFBSWxILEdBQVQsSUFBZ0JrSCxHQUFoQjtBQUNJLGdCQUFJQSxJQUFJb04sY0FBSixDQUFtQnRVLEdBQW5CLENBQUosRUFDSSxPQUFPLEtBQVA7QUFGUixTQUdBLE9BQU8sSUFBUDtBQUNILEtBTEQsTUFLTyxJQUFJLHNCQUFPa0gsR0FBUCxFQUFZLFFBQVosQ0FBSixFQUEyQjtBQUM5QkEsY0FBTUEsSUFBSWhFLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLENBQU47QUFDQSxlQUFPZ0UsUUFBUSxFQUFSLElBQWNBLFFBQVEsR0FBN0I7QUFDSCxLQUhNLE1BR0E7QUFDSCxlQUFRQSxRQUFRLENBQVIsSUFBYUEsUUFBUSxJQUFyQixJQUE2QkEsUUFBUWhILFNBQXJDLElBQWtEZ0gsUUFBUSxLQUExRCxJQUFtRThULE1BQU05VCxHQUFOLENBQTNFO0FBQ0g7QUFDSixDQVpEOztrQkFjZTZULE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZixJQUFNRSxTQUFTLFNBQVRBLE1BQVMsQ0FBVWhiLEtBQVYsRUFBaUI7QUFDNUIsV0FBT0EsVUFBVUEsTUFBTWliLFFBQU4sS0FBbUJDLEtBQUtDLFNBQXhCLElBQ2JuYixNQUFNaWIsUUFBTixLQUFtQkMsS0FBS0UsWUFEWCxJQUVicGIsTUFBTWliLFFBQU4sS0FBbUJDLEtBQUtHLHNCQUZYLElBR2JyYixNQUFNaWIsUUFBTixLQUFtQkMsS0FBS0ksYUFIckIsQ0FBUDtBQUlILENBTEQ7O2tCQU9lTixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNalUsVUFBVSxTQUFWQSxPQUFVLENBQVVFLEdBQVYsRUFBZXNVLE1BQWYsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQzVDLFFBQUksQ0FBQ3ZVLEdBQUwsRUFBVSxPQUFPLElBQVA7QUFDVixRQUFJLHNCQUFPQSxHQUFQLEVBQVksT0FBWixDQUFKLEVBQTBCO0FBQ3RCLGFBQUssSUFBSUgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRyxJQUFJMUYsTUFBeEIsRUFBZ0N1RixHQUFoQyxFQUFxQztBQUNqQ0Msb0JBQVFFLElBQUlILENBQUosQ0FBUixFQUFnQnlVLE1BQWhCLEVBQXdCQyxPQUF4QjtBQUNIO0FBQ0osS0FKRCxNQUlPO0FBQ0gsWUFBTXhDLE1BQU0sNEJBQVo7QUFDQSxZQUFNeUMsT0FBT3pDLElBQUkvTSxhQUFKLENBQWtCLE1BQWxCLENBQWI7QUFDQSxZQUFNOUwsS0FBSyxTQUFTNkksS0FBSzBTLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQm5OLEtBQTNCLENBQWlDLENBQWpDLENBQXBCOztBQUVBaU4sYUFBS3pHLElBQUwsR0FBYS9OLElBQUl5UixNQUFKLENBQVcsQ0FBQyxDQUFaLE1BQW1CLE1BQXBCLEdBQThCelIsR0FBOUIsR0FBb0NBLE1BQU0sTUFBdEQ7QUFDQXdVLGFBQUtHLEdBQUwsR0FBVyxZQUFYO0FBQ0FILGFBQUt0YixFQUFMLEdBQVVBLEVBQVY7QUFDQXNiLGFBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBRSxhQUFLRCxPQUFMLEdBQWVBLE9BQWY7O0FBRUF4QyxZQUFJNkMsSUFBSixDQUFTcE8sV0FBVCxDQUFxQmdPLElBQXJCO0FBQ0EsZUFBT0EsSUFBUDtBQUNIO0FBQ0osQ0FwQkQ7O2tCQXNCZTFVLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNK1Usa0JBQWtCLDRCQUF4QjtBQUNBLElBQU05VSxTQUFTLFNBQVRBLE1BQVMsQ0FBVUMsR0FBVixFQUFlc1UsTUFBZixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDM0MsUUFBSSxDQUFDdlUsR0FBTCxFQUFVLE9BQU8sSUFBUDtBQUNWLFFBQUksc0JBQU9BLEdBQVAsRUFBWSxPQUFaLENBQUosRUFBMEI7QUFDdEIsYUFBSyxJQUFJSCxJQUFJLENBQWIsRUFBZ0JBLElBQUlHLElBQUkxRixNQUF4QixFQUFnQ3VGLEdBQWhDLEVBQXFDO0FBQ2pDRSxtQkFBT0MsSUFBSUgsQ0FBSixDQUFQLEVBQWV5VSxNQUFmLEVBQXVCQyxPQUF2QjtBQUNIO0FBQ0osS0FKRCxNQUlPO0FBQ0gsWUFBTU8sU0FBU0QsZ0JBQWdCN1AsYUFBaEIsQ0FBOEIsUUFBOUIsQ0FBZjtBQUNBLFlBQU05TCxLQUFLLGNBQWM2SSxLQUFLMFMsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCbk4sS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBekI7O0FBRUF1TixlQUFPOVUsR0FBUCxHQUFjQSxJQUFJeVIsTUFBSixDQUFXLENBQUMsQ0FBWixNQUFtQixLQUFwQixHQUE2QnpSLEdBQTdCLEdBQW1DQSxNQUFNLEtBQXREO0FBQ0E4VSxlQUFPeEgsSUFBUCxHQUFjLHdCQUFkO0FBQ0F3SCxlQUFPNWIsRUFBUCxHQUFZQSxFQUFaO0FBQ0E0YixlQUFPUixNQUFQLEdBQWdCQSxNQUFoQjtBQUNBUSxlQUFPUCxPQUFQLEdBQWlCQSxPQUFqQjs7QUFFQU0sd0JBQWdCRCxJQUFoQixDQUFxQnBPLFdBQXJCLENBQWlDc08sTUFBakM7QUFDQSxlQUFPQSxNQUFQO0FBQ0g7QUFDSixDQW5CRDs7a0JBcUJlL1UsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsSUFBTWdWLGFBQWEsU0FBYkEsVUFBYSxDQUFVblYsSUFBVixFQUFnQmEsUUFBaEIsRUFBMEI4VCxPQUExQixFQUFtQztBQUNsRCxRQUFJLHNCQUFPM1UsSUFBUCxFQUFhLFFBQWIsS0FBMEIsc0JBQU9BLElBQVAsRUFBYSxPQUFiLENBQTlCLEVBQXFEO0FBQ2pELFlBQUksc0JBQU9BLElBQVAsRUFBYSxPQUFiLENBQUosRUFBMkI7QUFDdkIsZ0JBQU1xQixNQUFNLEVBQVo7QUFDQXJCLGlCQUFLcEcsT0FBTCxDQUFjLFVBQUNrWSxJQUFELEVBQU83UixDQUFQLEVBQWE7QUFDdkJvQixvQkFBSSxjQUFjYyxLQUFLMFMsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCbk4sS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBbEIsSUFBeURtSyxJQUF6RDtBQUNILGFBRkQ7QUFHQTlSLG1CQUFPcUIsR0FBUDtBQUNIO0FBQ0QsWUFBSStULFdBQVcsQ0FBZjtBQUNBLFlBQU1DLFVBQVUsRUFBaEI7QUFDQTNiLGVBQU9DLElBQVAsQ0FBWXFHLElBQVosRUFBa0JwRyxPQUFsQixDQUEwQixVQUFDVixHQUFELEVBQVM7QUFDL0IsZ0JBQU1rSCxNQUFNSixLQUFLOUcsR0FBTCxDQUFaO0FBQ0EsZ0JBQU1nYyxTQUFTLDZCQUFjLFFBQWQsRUFBd0I7QUFDbkM5VSxxQkFBTUEsSUFBSXlSLE1BQUosQ0FBVyxDQUFDLENBQVosTUFBbUIsS0FBcEIsR0FBNkJ6UixHQUE3QixHQUFtQ0EsTUFBTSxLQURYO0FBRW5Dc04sc0JBQU0sd0JBRjZCO0FBR25DcFUsb0JBQUlKO0FBSCtCLGFBQXhCLENBQWY7QUFLQWdjLG1CQUFPUCxPQUFQLEdBQWlCQSxPQUFqQjtBQUNBTyxtQkFBT1IsTUFBUCxHQUFnQixVQUFVN1YsQ0FBVixFQUFhO0FBQ3pCd1csd0JBQVEsS0FBSy9iLEVBQWIsSUFBbUIsSUFBbkI7QUFDQThiO0FBQ0Esb0JBQUlBLGFBQWExYSxNQUFqQixFQUF5QjtBQUNyQm1HLDZCQUFTOUMsSUFBVCxDQUFjLEVBQWQsRUFBa0JzWCxPQUFsQjtBQUNIO0FBQ0osYUFORDtBQU9BdmIscUJBQVNrYixJQUFULENBQWNwTyxXQUFkLENBQTBCc08sTUFBMUI7QUFDSCxTQWhCRDtBQWlCSDtBQUNKLENBN0JEOztrQkErQmVDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZixJQUFNRyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEVBQXNCO0FBQ2hDLFNBQUssSUFBSXRjLEdBQVQsSUFBZ0JzYyxPQUFoQixFQUF5QjtBQUNyQixZQUFJO0FBQ0EsZ0JBQUtBLFFBQVF0YyxHQUFSLEVBQWE4WixXQUFiLEtBQTZCdFosTUFBbEMsRUFBMkM7QUFDdkM2Yix3QkFBUXJjLEdBQVIsSUFBZW9jLE1BQU1DLFFBQVFyYyxHQUFSLENBQU4sRUFBb0JzYyxRQUFRdGMsR0FBUixDQUFwQixDQUFmO0FBQ0gsYUFGRCxNQUVPO0FBQ0hxYyx3QkFBUXJjLEdBQVIsSUFBZXNjLFFBQVF0YyxHQUFSLENBQWY7QUFDSDtBQUNKLFNBTkQsQ0FNRSxPQUFNMkYsQ0FBTixFQUFTO0FBQ1AwVyxvQkFBUXJjLEdBQVIsSUFBZXNjLFFBQVF0YyxHQUFSLENBQWY7QUFFSDtBQUNKO0FBQ0QsV0FBT3FjLE9BQVA7QUFDSCxDQWREOztrQkFnQmVELEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZixJQUFNL1AsV0FBWSxTQUFaQSxRQUFZLENBQVVqRixPQUFWLEVBQW1CO0FBQ2pDLFFBQU1tVixZQUFZM2IsU0FBU3NMLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQXFRLGNBQVU3TyxXQUFWLENBQXNCdEcsUUFBUWtRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBdEI7QUFDQSxXQUFPaUYsVUFBVXZPLFNBQWpCO0FBQ0gsQ0FKRDs7a0JBTWUzQixROzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BSLElBQU1tUSx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQVV4UixDQUFWLEVBQWE7QUFDdEMsUUFBSXJGLFVBQUo7QUFDQSxRQUFJc0QsS0FBS3dULEdBQUwsQ0FBU3pSLENBQVQsSUFBYyxHQUFsQixFQUF1QjtBQUNuQnJGLFlBQUlqRCxTQUFTc0ksRUFBRTRRLFFBQUYsR0FBYWxZLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUIsQ0FBekIsQ0FBVCxDQUFKO0FBQ0EsWUFBSWlDLENBQUosRUFBTztBQUNIcUYsaUJBQUsvQixLQUFLeVQsR0FBTCxDQUFTLEVBQVQsRUFBWS9XLElBQUUsQ0FBZCxDQUFMO0FBQ0FxRixnQkFBSSxPQUFRLElBQUlqRixLQUFKLENBQVVKLENBQVYsQ0FBRCxDQUFlK0ksSUFBZixDQUFvQixHQUFwQixDQUFQLEdBQWtDMUQsRUFBRTRRLFFBQUYsR0FBYXBELFNBQWIsQ0FBdUIsQ0FBdkIsQ0FBdEM7QUFDSDtBQUNKLEtBTkQsTUFNTztBQUNIN1MsWUFBSWpELFNBQVNzSSxFQUFFNFEsUUFBRixHQUFhbFksS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFULENBQUo7QUFDQSxZQUFJaUMsSUFBSSxFQUFSLEVBQVk7QUFDUkEsaUJBQUssRUFBTDtBQUNBcUYsaUJBQUsvQixLQUFLeVQsR0FBTCxDQUFTLEVBQVQsRUFBWS9XLENBQVosQ0FBTDtBQUNBcUYsaUJBQU0sSUFBSWpGLEtBQUosQ0FBVUosSUFBRSxDQUFaLENBQUQsQ0FBaUIrSSxJQUFqQixDQUFzQixHQUF0QixDQUFMO0FBQ0g7QUFDSjtBQUNELFdBQU8xRCxDQUFQO0FBQ0gsQ0FqQk07O2tCQW1CUXdSLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1qUixLQUFLLFNBQUxBLEVBQUssQ0FBVWxGLFFBQVYsRUFBb0JmLFNBQXBCLEVBQStCcUMsUUFBL0IsRUFBeUM2RCxNQUF6QyxFQUFpRDtBQUN4RCxRQUFJekUsVUFBSjtBQUFBLFFBQU9KLFdBQVcsRUFBbEI7O0FBRUEsWUFBUSxzQkFBT04sUUFBUCxDQUFSO0FBQ0ksYUFBSyxRQUFMO0FBQ0lNLHVCQUFXLHdCQUFTTixRQUFULENBQVg7QUFDQTtBQUNKLGFBQUssUUFBTDtBQUNJLGdCQUFJLHNCQUFPQSxRQUFQLENBQUosRUFDSU0sV0FBVyxDQUFDTixRQUFELENBQVg7QUFDSjtBQUNKLGFBQUssT0FBTDtBQUNJTSx1QkFBV04sUUFBWDtBQUNBO0FBVlI7O0FBYUEsU0FBS1UsSUFBSSxDQUFULEVBQVlBLElBQUlKLFNBQVNuRixNQUF6QixFQUFpQ3VGLEdBQWpDLEVBQXNDO0FBQ2xDLFlBQUlKLFNBQVNJLENBQVQsS0FBZUosU0FBU0ksQ0FBVCxFQUFZckIsZ0JBQS9CLEVBQ0lpQixTQUFTSSxDQUFULEVBQVlyQixnQkFBWixDQUE2QkosU0FBN0IsRUFBd0NxQyxRQUF4QyxFQUFrRCxDQUFDLENBQUM2RCxNQUFwRDtBQUNQO0FBQ0osQ0FwQkQ7O2tCQXNCZUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmY7OztBQUdBLElBQU1WLFdBQVcsU0FBWEEsUUFBVyxDQUFVekYsSUFBVixFQUFnQjtBQUM3QixRQUFNbEQsT0FBTyxFQUFDOEksR0FBRyxDQUFKLEVBQU9DLEdBQUcsQ0FBVixFQUFhQyxPQUFPLENBQXBCLEVBQXVCQyxRQUFRLENBQS9CLEVBQWI7QUFDQSxRQUFJLE9BQU8vRixJQUFQLEtBQWdCLFFBQXBCLEVBQ0lBLE9BQU94RSxTQUFTQyxhQUFULENBQXVCdUUsSUFBdkIsQ0FBUDs7QUFFSixRQUFJQSxTQUFTa1IsTUFBVCxJQUFtQmxSLFNBQVN4RSxRQUFoQyxFQUEwQztBQUN0Q3NCLGFBQUtnSixLQUFMLEdBQWFvTCxPQUFPcUcsVUFBcEI7QUFDQXphLGFBQUtpSixNQUFMLEdBQWNtTCxPQUFPc0csV0FBckI7QUFDQTFhLGFBQUtrRixPQUFMLEdBQWVrUCxNQUFmO0FBQ0gsS0FKRCxNQU1BLElBQUlsUixRQUFRQSxLQUFLOFYsUUFBTCxLQUFrQkMsS0FBS0UsWUFBbkMsRUFBaUQ7QUFDN0MsWUFBSWpXLEtBQUtzRyxxQkFBVCxFQUFnQztBQUM1QixnQkFBTW1SLE9BQU96WCxLQUFLc0cscUJBQUwsRUFBYjtBQUNBLGdCQUFJb1IsWUFBWXhHLE9BQU8xSyxXQUFQLElBQXNCaEwsU0FBU21iLGVBQVQsQ0FBeUJlLFNBQS9DLElBQTREbGMsU0FBU21jLElBQVQsQ0FBY0QsU0FBMUY7QUFBQSxnQkFDSUUsYUFBYTFHLE9BQU94SyxXQUFQLElBQXNCbEwsU0FBU21iLGVBQVQsQ0FBeUJpQixVQUEvQyxJQUE2RHBjLFNBQVNtYyxJQUFULENBQWNDLFVBRDVGO0FBQUEsZ0JBRUlDLFlBQVlyYyxTQUFTbWIsZUFBVCxDQUF5QmtCLFNBQXpCLElBQXNDcmMsU0FBU21jLElBQVQsQ0FBY0UsU0FBcEQsSUFBaUUsQ0FGakY7QUFBQSxnQkFHSUMsYUFBYXRjLFNBQVNtYixlQUFULENBQXlCbUIsVUFBekIsSUFBdUN0YyxTQUFTbWMsSUFBVCxDQUFjRyxVQUFyRCxJQUFtRSxDQUhwRjs7QUFLQWhiLGlCQUFLK0ksQ0FBTCxHQUFTaEMsS0FBS0MsS0FBTCxDQUFXMlQsS0FBS2xSLEdBQUwsR0FBV21SLFNBQVgsR0FBdUJHLFNBQWxDLENBQVQ7QUFDQS9hLGlCQUFLOEksQ0FBTCxHQUFTL0IsS0FBS0MsS0FBTCxDQUFXMlQsS0FBS2hSLElBQUwsR0FBWW1SLFVBQVosR0FBeUJFLFVBQXBDLENBQVQ7QUFDQWhiLGlCQUFLZ0osS0FBTCxHQUFhOUYsS0FBSytYLFdBQWxCO0FBQ0FqYixpQkFBS2lKLE1BQUwsR0FBYy9GLEtBQUtnWSxZQUFuQjs7QUFFQWxiLGlCQUFLeUosR0FBTCxHQUFXa1IsS0FBS2xSLEdBQUwsR0FBV0MsV0FBdEI7QUFDQTFKLGlCQUFLMkosSUFBTCxHQUFZZ1IsS0FBS2hSLElBQUwsR0FBWUMsV0FBeEI7QUFDQTVKLGlCQUFLbWIsS0FBTCxHQUFhUixLQUFLUSxLQUFMLEdBQWF2UixXQUExQjtBQUNBNUosaUJBQUtvYixNQUFMLEdBQWNULEtBQUtTLE1BQUwsR0FBY3hSLFdBQTVCO0FBQ0gsU0FoQkQsTUFpQks7QUFDRCxnQkFBSUgsTUFBTSxDQUFWO0FBQUEsZ0JBQWFFLE9BQU8sQ0FBcEI7QUFDQSxtQkFBT3pHLElBQVAsRUFBYTtBQUNUdUcsdUJBQU9qSixTQUFTMEMsS0FBS21ZLFNBQWQsRUFBeUIsRUFBekIsQ0FBUDtBQUNBMVIsd0JBQVFuSixTQUFTMEMsS0FBS29ZLFVBQWQsRUFBMEIsRUFBMUIsQ0FBUjtBQUNBcFksdUJBQU9BLEtBQUtxWSxZQUFaO0FBQ0g7QUFDRHZiLGlCQUFLK0ksQ0FBTCxHQUFTVSxHQUFUO0FBQ0F6SixpQkFBSzhJLENBQUwsR0FBU2EsSUFBVDtBQUNBM0osaUJBQUtnSixLQUFMLEdBQWE5RixLQUFLK1gsV0FBbEI7QUFDQWpiLGlCQUFLaUosTUFBTCxHQUFjL0YsS0FBS2dZLFlBQW5CO0FBQ0g7QUFDRGxiLGFBQUtrRixPQUFMLEdBQWVoQyxJQUFmO0FBQ0g7QUFDRCxXQUFPbEQsSUFBUDtBQUNILENBNUNEOztrQkE4Q2UySSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NmLElBQU02UyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVV2SixLQUFWLEVBQWlCO0FBQ25DLFFBQUksRUFBRUEsaUJBQWlCd0osVUFBbkIsQ0FBSixFQUFvQztBQUNoQ0MsZ0JBQVEzYixLQUFSLENBQWMsNkNBQWQ7QUFDQTtBQUNIO0FBQ0QsUUFBTTRhLE9BQU9qYyxTQUFTbWMsSUFBVCxDQUFjclIscUJBQWQsRUFBYjtBQUNBLFdBQU87QUFDSFYsV0FBR21KLE1BQU0wSixPQUFOLEdBQWdCaEIsS0FBS2hSLElBRHJCO0FBRUhaLFdBQUdrSixNQUFNMkosT0FBTixHQUFnQmpCLEtBQUtsUjtBQUZyQixLQUFQO0FBSUgsQ0FWRDs7a0JBWWUrUixhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkZjs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUEsSUFBTTVTLFFBQVEsU0FBUkEsS0FBUSxDQUFVekUsUUFBVixFQUFvQkwsSUFBcEIsRUFBMEIyQixRQUExQixFQUFvQ21OLFlBQXBDLEVBQWtEO0FBQzVELE1BQU1uTyxXQUFXLHdCQUFTTixRQUFULEVBQW1CTCxJQUFuQixFQUF5QjJCLFFBQXpCLEVBQW1DbU4sWUFBbkMsQ0FBakI7QUFDQSxTQUFPbk8sWUFBWUEsU0FBUyxDQUFULENBQVosR0FBMEJBLFNBQVMsQ0FBVCxDQUExQixHQUF3QyxLQUEvQztBQUNILENBSEQ7O2tCQUtlbUUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNbU8sTUFBTSw0QkFBWjs7QUFFQSxJQUFNbE8sV0FBVyxTQUFYQSxRQUFXLENBQVUxRSxRQUFWLEVBQW9CTCxJQUFwQixFQUEwQjJCLFFBQTFCLEVBQW9DbU4sWUFBcEMsRUFBa0Q7QUFDL0QsUUFBSW5PLFdBQVcsRUFBZjtBQUNBWCxXQUFPQSxRQUFRaVQsR0FBZjs7QUFFQSxRQUFJLHNCQUFPNVMsUUFBUCxDQUFKLEVBQ0ksT0FBTyxDQUFDQSxRQUFELENBQVA7O0FBRUosUUFBSSxzQkFBT0wsSUFBUCxFQUFhLFFBQWIsQ0FBSixFQUNJQSxPQUFPaVQsSUFBSXBZLGFBQUosQ0FBa0JtRixJQUFsQixDQUFQO0FBQ0osUUFBSUEsSUFBSixFQUNJVyxXQUFXLEdBQUc4SCxLQUFILENBQVM1SixJQUFULENBQWNtQixLQUFLQyxnQkFBTCxDQUFzQkksUUFBdEIsQ0FBZCxDQUFYOztBQUVKLFFBQUlzQixRQUFKLEVBQ0loQixTQUFTakcsT0FBVCxDQUFpQixVQUFDMEcsT0FBRCxFQUFhO0FBQUNPLGlCQUFTOUMsSUFBVCxDQUFjaVEsZ0JBQWdCLEVBQTlCLEVBQWtDMU4sT0FBbEM7QUFBMkMsS0FBMUU7O0FBRUosV0FBT1QsUUFBUDtBQUNILENBaEJEOztrQkFrQmVvRSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmOztBQUdPLElBQU00USwwQkFBUyxTQUFUQSxNQUFTLENBQVVvQyxHQUFWLEVBQWVsWCxHQUFmLEVBQW9CO0FBQ3RDa1gsVUFBTUEsT0FBTyxDQUFiO0FBQ0FsWCxVQUFNQSxPQUFPLEdBQWI7QUFDQSxXQUFPb0MsS0FBSytVLEtBQUwsQ0FBVy9VLEtBQUswUyxNQUFMLE1BQWlCOVUsTUFBTWtYLEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtBQUNILENBSk07O0FBTVA7Ozs7QUFmQTs7Ozs7O0FBbUJPLElBQU1FLG9DQUFjLFNBQWRBLFdBQWMsR0FBWTtBQUNuQyxRQUFNQyxVQUFVLG1CQUFtQnhhLEtBQW5CLENBQXlCLEVBQXpCLENBQWhCO0FBQ0EsUUFBSXFELFVBQUo7QUFBQSxRQUFPb1gsUUFBUSxHQUFmO0FBQ0EsU0FBS3BYLElBQUksQ0FBVCxFQUFZQSxJQUFJLENBQWhCLEVBQW1CQSxHQUFuQjtBQUNJb1gsaUJBQVNELFFBQVFqVixLQUFLK1UsS0FBTCxDQUFXL1UsS0FBSzBTLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBUixDQUFUO0FBREosS0FFQSxPQUFPd0MsS0FBUDtBQUNILENBTk07O0FBUUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZSxHQUFvQjtBQUFBLFFBQVZDLElBQVUsdUVBQUgsQ0FBRzs7QUFDNUMsUUFBSUEsT0FBTyxFQUFYLEVBQWU7QUFDWCxZQUFJdFgsSUFBSWtDLEtBQUtxVixJQUFMLENBQVVELE9BQUssRUFBZixDQUFSO0FBQ0EsWUFBSUUsTUFBTSxFQUFWO0FBQ0EsYUFBS3hYLENBQUwsRUFBUUEsSUFBSSxDQUFaLEVBQWVBLEdBQWY7QUFDSXdYLG1CQUFPeFksTUFBTSxFQUFOLEVBQVVnUixJQUFWLENBQWUsQ0FBZixFQUFrQjdNLEdBQWxCLENBQXNCO0FBQUEsdUJBQUtqQixLQUFLK1UsS0FBTCxDQUFXL1UsS0FBSzBTLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBTDtBQUFBLGFBQXRCLEVBQTJEak4sSUFBM0QsQ0FBZ0UsRUFBaEUsQ0FBUDtBQURKLFNBRUEsT0FBTzZQLElBQUk5UCxLQUFKLENBQVUsQ0FBVixFQUFhNFAsSUFBYixDQUFQO0FBQ0g7QUFDRCxXQUFPM2IsU0FBU3FELE1BQU1zWSxJQUFOLEVBQVl0SCxJQUFaLENBQWlCLENBQWpCLEVBQW9CN00sR0FBcEIsQ0FBd0I7QUFBQSxlQUFLakIsS0FBSytVLEtBQUwsQ0FBVy9VLEtBQUswUyxNQUFMLEtBQWdCLEVBQTNCLENBQUw7QUFBQSxLQUF4QixFQUE2RGpOLElBQTdELENBQWtFLEVBQWxFLENBQVQsQ0FBUDtBQUNILENBVE07O0FBV0EsSUFBTThQLHNDQUFlLFNBQWZBLFlBQWUsR0FBb0I7QUFBQSxRQUFWSCxJQUFVLHVFQUFILENBQUc7O0FBQzVDLFFBQUl0WCxVQUFKO0FBQUEsUUFBTzBULFNBQVMsRUFBaEI7QUFDQSxRQUFNZ0MsTUFBTSxDQUFDdkYsV0FBTUMsWUFBUCxFQUFnQnZOLFdBQWhCLEdBQThCbEcsS0FBOUIsQ0FBb0MsRUFBcEMsQ0FBWjtBQUNBLFNBQUtxRCxJQUFJc1gsSUFBVCxFQUFldFgsSUFBSSxDQUFuQixFQUFzQkEsR0FBdEIsRUFBMkI7QUFDdkIwVCxrQkFDSWdDLElBQUl4VCxLQUFLK1UsS0FBTCxDQUFXL1UsS0FBSzBTLE1BQUwsS0FBZ0JjLElBQUlqYixNQUEvQixDQUFKLENBREo7QUFFSDtBQUNELFdBQU9pWixNQUFQO0FBQ0gsQ0FSTTs7QUFVUDs7Ozs7QUFLTyxJQUFNZ0Usa0NBQWEsU0FBYkEsVUFBYSxDQUFVQyxHQUFWLEVBQWU7QUFDckMsV0FBTzNZLE1BQU13UixPQUFOLENBQWNtSCxHQUFkLElBQXFCQSxJQUFJL0MsT0FBTyxDQUFQLEVBQVUrQyxJQUFJbGQsTUFBSixHQUFXLENBQXJCLENBQUosQ0FBckIsR0FBb0QsS0FBM0Q7QUFDSCxDQUZNOztrQkFJUW1hLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEZjs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNZ0QsV0FBVyxTQUFYQSxRQUFXLENBQVVsVSxFQUFWLEVBQWM7QUFDM0IsUUFBTW1VLE1BQU0sNEJBQVo7QUFDQSxRQUFNM0YsTUFBTSw0QkFBWjtBQUNBMkYsUUFBSTNKLElBQUosR0FBV3hLLE1BQU13TyxJQUFJaEUsSUFBckI7QUFDSCxDQUpEOztrQkFNZTBKLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTWpVLFNBQVMsU0FBVEEsTUFBUyxDQUFVckUsUUFBVixFQUFvQmhCLElBQXBCLEVBQTBCVyxJQUExQixFQUFnQztBQUMzQ0EsV0FBTyxzQkFBT0EsSUFBUCxJQUFlQSxJQUFmLEdBQXNCLHFCQUFNQSxJQUFOLENBQTdCO0FBQ0EsUUFBSWUsSUFBSSxDQUFSO0FBQUEsUUFDSS9HLFlBREo7QUFBQSxRQUVJMkcsV0FBVyxFQUZmO0FBQUEsUUFHSWtZLGdCQUFnQix3QkFBU3hZLFFBQVQsRUFBbUJMLFFBQVFwRixTQUFTbWMsSUFBcEMsQ0FIcEI7O0FBS0EsUUFBSThCLGFBQUosRUFBbUI7QUFDZixlQUFPOVgsSUFBSThYLGNBQWNyZCxNQUF6QixFQUFpQztBQUM3QixnQkFBSSxDQUFDNkQsSUFBTCxFQUNJc0IsU0FBU0ksQ0FBVCxJQUFjOFgsY0FBYzlYLENBQWQsQ0FBZCxDQURKLEtBRUs7QUFDRCxvQkFBSThYLGNBQWM5WCxDQUFkLEVBQWlCYixZQUFqQixDQUE4QmIsSUFBOUIsQ0FBSixFQUF5QztBQUNyQ3JGLDBCQUFNNmUsY0FBYzlYLENBQWQsRUFBaUJ2QixZQUFqQixDQUE4QkgsSUFBOUIsQ0FBTjtBQUNBc0IsNkJBQVMzRyxHQUFULElBQWdCNmUsY0FBYzlYLENBQWQsQ0FBaEI7QUFDSDtBQUNKO0FBQ0RBO0FBQ0g7QUFDSjtBQUNELFdBQU9KLFFBQVA7QUFDSCxDQXJCRDs7a0JBdUJlK0QsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JmLElBQU1vVSxlQUFlLFNBQWZBLFlBQWUsQ0FBVXJFLE1BQVYsRUFBa0I7QUFDbkMsUUFBSTdaLFNBQVNtZSxXQUFiLEVBQ0ksT0FBT25lLFNBQVNtZSxXQUFULEdBQXVCQyx3QkFBdkIsQ0FBZ0R2RSxNQUFoRCxDQUFQLENBREosS0FFSztBQUNELFlBQUkxVCxVQUFKO0FBQUEsWUFDSW9GLFdBQVd2TCxTQUFTNk0sc0JBQVQsRUFEZjtBQUFBLFlBRUk4TyxZQUFZM2IsU0FBU3NMLGFBQVQsQ0FBdUIsS0FBdkIsQ0FGaEI7O0FBSUFxUSxrQkFBVXZPLFNBQVYsR0FBc0J5TSxNQUF0QjtBQUNBLGVBQU8xVCxJQUFJd1YsVUFBVTBDLFVBQXJCO0FBQ0k5UyxxQkFBU3VCLFdBQVQsQ0FBcUIzRyxDQUFyQjtBQURKLFNBR0EsT0FBT29GLFFBQVA7QUFDSDtBQUNKLENBZEQ7O2tCQWdCZTJTLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7Ozs7O0FBRUEsSUFBTTdTLFdBQVcsU0FBWEEsUUFBVyxDQUFVd08sTUFBVixFQUFrQjtBQUMvQixRQUFJOU0sZUFBSjtBQUNBLFFBQUl4QixXQUFXLDRCQUFhc08sTUFBYixDQUFmOztBQUVBLFlBQVF0TyxTQUFTK1MsaUJBQWpCO0FBQ0ksYUFBSyxDQUFMO0FBQVE7QUFDUixhQUFLLENBQUw7QUFDSXZSLHFCQUFTeEIsU0FBU2dULGlCQUFsQjtBQUNBO0FBQ0o7QUFDSSxnQkFBSTVDLFlBQVkzYixTQUFTc0wsYUFBVCxDQUF1QixNQUF2QixDQUFoQjtBQUNBcVEsc0JBQVU3TyxXQUFWLENBQXNCdkIsUUFBdEI7QUFDQXdCLHFCQUFTNE8sU0FBVDtBQVJSO0FBVUEsV0FBTzVPLE1BQVA7QUFDSCxDQWZEOztrQkFpQmUxQixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CZjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNbVQsU0FBUyxTQUFUQSxNQUFTLENBQVVuZixLQUFWLEVBQWlCdVUsSUFBakIsRUFBdUI7QUFDbEMsUUFBTTZLLGNBQWMsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixXQUFwQixFQUFpQyxVQUFqQyxFQUE2QyxRQUE3QyxFQUF1RCxRQUF2RCxFQUFpRSxNQUFqRSxFQUF5RSxPQUF6RSxFQUFrRixRQUFsRixDQUFwQjtBQUNBLFFBQUlDLElBQUksNEJBQWFyZixLQUFiLEVBQW9CMkosV0FBcEIsRUFBUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUl5VixZQUFZekosT0FBWixDQUFvQjBKLENBQXBCLE1BQTJCLENBQUMsQ0FBNUIsSUFBaUMsUUFBT3JmLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBdEQsRUFDSXFmLElBQUksUUFBSjs7QUFFSixXQUFPLE9BQU85SyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxLQUFLNUssV0FBTCxPQUF1QjBWLENBQWxELEdBQXNEQSxDQUE3RDtBQUNILENBVkQ7O2tCQVllRixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkZixJQUFNRyxlQUFlLFNBQWZBLFlBQWUsQ0FBVXRmLEtBQVYsRUFBaUJ1VSxJQUFqQixFQUF1QjtBQUN4QyxRQUFNOEssSUFBSTllLE9BQU91WixTQUFQLENBQWlCNkIsUUFBakIsQ0FBMEIvVyxJQUExQixDQUErQjVFLEtBQS9CLEVBQXNDd08sS0FBdEMsQ0FBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFoRCxDQUFWO0FBQ0EsV0FBTyxPQUFPK0YsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsU0FBUzhLLENBQXBDLEdBQXdDQSxDQUEvQztBQUNILENBSEQ7O2tCQUtlQyxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZjs7Ozs7O0FBR0EsSUFBTUMsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTVosTUFBTSw0QkFBWjtBQUNBWSxXQUFNQSxRQUFPWixJQUFJblgsUUFBakI7QUFDQStYLFdBQU1BLEtBQUl0YyxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT3NjLEtBQUloZSxNQUFKLEdBQWEsQ0FBYixJQUFrQmdlLEtBQUkvUSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTStRLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZjs7Ozs7O0FBTUEsSUFBTS9kLE1BQU0sU0FBTkEsR0FBTSxDQUFVSCxJQUFWLEVBQWdCckIsS0FBaEIsRUFBb0M7QUFBQSxRQUFid2YsSUFBYSx1RUFBTixJQUFNOztBQUM1QyxRQUFJQSxJQUFKLEVBQ0ksSUFBSTtBQUNBeGYsZ0JBQVE4QixLQUFLQyxTQUFMLENBQWUvQixLQUFmLENBQVI7QUFDSCxLQUZELENBRUUsT0FBT2dDLEtBQVAsRUFBYyxDQUFFO0FBQ3RCLFdBQU9xVSxPQUFPb0osWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJyZSxJQUE1QixFQUFrQ3JCLEtBQWxDLENBQVA7QUFDSCxDQU5EOztBQVFBOzs7OztBQUtBLElBQU15QixNQUFNLFNBQU5BLEdBQU0sQ0FBVUosSUFBVixFQUE2QjtBQUFBLFFBQWJtZSxJQUFhLHVFQUFOLElBQU07O0FBQ3JDLFFBQUl4ZixRQUFRcVcsT0FBT29KLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCdGUsSUFBNUIsQ0FBWjtBQUNBLFFBQUltZSxRQUFReGYsS0FBWixFQUNJLElBQUk7QUFDQUEsZ0JBQVE4QixLQUFLc0IsS0FBTCxDQUFXcEQsS0FBWCxDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU9nQyxLQUFQLEVBQWMsQ0FBRTtBQUN0QixXQUFPaEMsS0FBUDtBQUNILENBUEQ7O0FBU0E7Ozs7QUFJQSxJQUFNMkIsU0FBUyxTQUFUQSxNQUFTLENBQVVOLElBQVYsRUFBZ0I7QUFDM0IsV0FBT2dWLE9BQU9vSixZQUFQLENBQW9CRyxVQUFwQixDQUErQnZlLElBQS9CLENBQVA7QUFDSCxDQUZEOztBQUlBOzs7OztBQUtBLElBQU10QixNQUFNLFNBQU5BLEdBQU0sQ0FBVThmLEtBQVYsRUFBaUI7QUFDekIsV0FBT3hKLE9BQU9vSixZQUFQLENBQW9CMWYsR0FBcEIsQ0FBd0I4ZixLQUF4QixDQUFQO0FBQ0gsQ0FGRDs7QUFJQTs7O0FBR0EsSUFBTW5lLFFBQVEsU0FBUkEsS0FBUSxHQUFZO0FBQ3RCLFdBQU8yVSxPQUFPb0osWUFBUCxDQUFvQi9kLEtBQXBCLEVBQVA7QUFDSCxDQUZEOztBQUlBOzs7O0FBSUEsSUFBTUgsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDdkIsV0FBTzhVLE9BQU9vSixZQUFQLENBQW9CbGUsTUFBM0I7QUFDSCxDQUZEOztBQUlBOzs7Ozs7OztBQVFBLElBQU1nVixVQUFVLFNBQVZBLE9BQVUsQ0FBVWxWLElBQVYsRUFBZ0JyQixLQUFoQixFQUF1QjtBQUNuQyxZQUFRc0IsVUFBVUMsTUFBbEI7QUFDSSxhQUFLLENBQUw7QUFDSSxtQkFBTztBQUNIQyxxQkFBS0EsR0FERjtBQUVIQyxxQkFBS0EsR0FGRjtBQUdIMUIscUJBQUtBLEdBSEY7QUFJSDJCLHVCQUFPQSxLQUpKO0FBS0hDLHdCQUFRQSxNQUxMO0FBTUhKLHdCQUFRQTtBQU5MLGFBQVA7QUFRSixhQUFLLENBQUw7QUFDSSxtQkFBT0UsSUFBSUosSUFBSixDQUFQO0FBQ0osYUFBSyxDQUFMO0FBQ0ksbUJBQU9HLElBQUlILElBQUosRUFBVXJCLEtBQVYsQ0FBUDtBQWJSO0FBZUgsQ0FoQkQ7O0FBa0JBO0FBQ0F1VyxRQUFRL1UsR0FBUixHQUFjQSxHQUFkO0FBQ0ErVSxRQUFROVUsR0FBUixHQUFjQSxHQUFkO0FBQ0E4VSxRQUFReFcsR0FBUixHQUFjQSxHQUFkO0FBQ0F3VyxRQUFRN1UsS0FBUixHQUFnQkEsS0FBaEI7QUFDQTZVLFFBQVE1VSxNQUFSLEdBQWlCQSxNQUFqQjtBQUNBNFUsUUFBUTZILElBQVIsR0FBZTdjLE1BQWY7O1FBR0lDLEcsR0FBQUEsRztRQUNBQyxHLEdBQUFBLEc7UUFDQTFCLEcsR0FBQUEsRztRQUNBMkIsSyxHQUFBQSxLO1FBQ0FDLE0sR0FBQUEsTTtRQUNBSixNLEdBQUFBLE07a0JBR1dnVixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU11SixhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFFBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCLE9BQU8sRUFBUDtBQUMzQixXQUFPQSxFQUFFQyxNQUFGLENBQVMsQ0FBVCxFQUFZL0ssV0FBWixLQUE0QjhLLEVBQUV2UixLQUFGLENBQVEsQ0FBUixDQUFuQztBQUNILENBSEQ7O0FBS0EsU0FBU2lJLEdBQVQsQ0FBYytELE1BQWQsRUFBc0I7QUFDbEIsUUFBTTFRLElBQUk7QUFDTjBRLGdCQUFRLHNCQUFPQSxNQUFQLEVBQWUsUUFBZixJQUEyQkEsTUFBM0IsR0FBb0MsRUFEdEM7QUFFTmpaLGdCQUFRaVosT0FBT2paO0FBRlQsS0FBVjs7QUFLQXVJLE1BQUVnVyxVQUFGLEdBQWU7QUFBQSxlQUFNQSxXQUFXaFcsRUFBRTBRLE1BQWIsQ0FBTjtBQUFBLEtBQWY7QUFDQTFRLE1BQUVtVyxLQUFGLEdBQVU7QUFBQSxlQUFNblcsRUFBRTBRLE1BQUYsQ0FBU3ZGLFdBQVQsRUFBTjtBQUFBLEtBQVY7QUFDQW5MLE1BQUVvVyxLQUFGLEdBQVU7QUFBQSxlQUFNcFcsRUFBRTBRLE1BQUYsQ0FBUzdRLFdBQVQsRUFBTjtBQUFBLEtBQVY7QUFDQUcsTUFBRXFXLE1BQUYsR0FBVyxVQUFDbmdCLEtBQUQ7QUFBQSxlQUFXOEosRUFBRTBRLE1BQUYsQ0FBUzJGLE1BQVQsQ0FBZ0JuZ0IsS0FBaEIsQ0FBWDtBQUFBLEtBQVg7QUFDQThKLE1BQUVzVyxRQUFGLEdBQWEsVUFBQ3BnQixLQUFEO0FBQUEsZUFBVzhKLEVBQUUwUSxNQUFGLENBQVM0RixRQUFULENBQWtCcGdCLEtBQWxCLENBQVg7QUFBQSxLQUFiO0FBQ0E4SixNQUFFbVAsSUFBRixHQUFTLFVBQUN2UixRQUFEO0FBQUEsZUFBY0EsV0FBV29DLEVBQUUwUSxNQUFGLENBQVMvVyxLQUFULENBQWUsRUFBZixFQUFtQmhELE9BQW5CLENBQTJCaUgsUUFBM0IsQ0FBWCxHQUFrRG9DLEVBQUUwUSxNQUFGLENBQVMvVyxLQUFULENBQWUsRUFBZixDQUFoRTtBQUFBLEtBQVQ7O0FBRUEsV0FBT3FHLENBQVA7QUFDSDs7QUFFRDJNLElBQUlySyxRQUFKLEdBQWVBLGtCQUFmO0FBQ0FxSyxJQUFJekssUUFBSixHQUFlQSxrQkFBZjtBQUNBeUssSUFBSXFKLFVBQUosR0FBaUJBLFVBQWpCO0FBQ0FySixJQUFJd0MsSUFBSixHQUFXQSxjQUFYOztrQkFHZXhDLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFNRCxRQUFRLFNBQVJBLEtBQVEsQ0FBVTlPLFFBQVYsRUFBb0IyWSxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUN6TCxZQUFuQyxFQUFpRDtBQUMzRCxRQUFJLEVBQUUsZ0JBQWdCMkIsS0FBbEIsQ0FBSixFQUNJLE9BQU8sSUFBSUEsS0FBSixDQUFVOU8sUUFBVixFQUFvQjJZLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQ3pMLFlBQW5DLENBQVA7O0FBRUp3TCxZQUFRQSxVQUFVcGdCLFNBQVYsR0FBc0J3QyxTQUFTNGQsS0FBVCxDQUF0QixHQUF3QyxHQUFoRDtBQUNBQyxhQUFTQSxXQUFXcmdCLFNBQVgsR0FBdUJ3QyxTQUFTNmQsTUFBVCxDQUF2QixHQUEwQyxDQUFuRDtBQUNBLFFBQU16Z0IsU0FBUyxFQUFDMGdCLE1BQU0sSUFBUCxFQUFhN1ksVUFBVUEsUUFBdkIsRUFBaUMyWSxPQUFPQSxLQUF4QyxFQUErQ0MsUUFBUUEsTUFBdkQsRUFBZjs7QUFFQSxRQUFJRSxLQUFLLElBQVQ7QUFDQSxRQUFNQyxLQUFLLFNBQUxBLEVBQUssR0FBWTtBQUNuQjVnQixlQUFPMGdCLElBQVAsQ0FBWXRFLFFBQVo7QUFDQSxZQUFJcGMsT0FBT3lnQixNQUFQLEtBQWtCLENBQWxCLElBQXVCemdCLE9BQU95Z0IsTUFBUCxJQUFpQnpnQixPQUFPMGdCLElBQVAsQ0FBWXRFLFFBQXhELEVBQ0lwYyxPQUFPMGdCLElBQVAsQ0FBWUcsSUFBWjtBQUNKN2dCLGVBQU82SCxRQUFQLENBQWdCOUMsSUFBaEIsQ0FBcUJpUSxnQkFBZ0IsSUFBckMsRUFBMkNoVixPQUFPMGdCLElBQVAsQ0FBWXRFLFFBQXZELEVBQWlFcGMsT0FBT3lnQixNQUF4RTtBQUNILEtBTEQ7O0FBT0EsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3JFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLMEUsS0FBTCxHQUFhLFlBQVk7QUFDckIsWUFBSTlnQixPQUFPeWdCLE1BQVAsS0FBa0IsQ0FBbEIsSUFBdUJ6Z0IsT0FBT3lnQixNQUFQLEdBQWdCemdCLE9BQU8wZ0IsSUFBUCxDQUFZdEUsUUFBdkQsRUFDSXVFLEtBQUtJLFlBQVlILEVBQVosRUFBZ0I1Z0IsT0FBT3dnQixLQUF2QixDQUFMO0FBQ1AsS0FIRDtBQUlBLFNBQUtLLElBQUwsR0FBWSxZQUFZO0FBQ3BCLGFBQUt6RSxRQUFMLEdBQWdCcGMsT0FBT3lnQixNQUF2QjtBQUNBLGFBQUs1ZSxLQUFMO0FBQ0gsS0FIRDtBQUlBLFNBQUtnUSxLQUFMLEdBQWEsWUFBWTtBQUNyQixhQUFLaFEsS0FBTDtBQUNILEtBRkQ7QUFHQSxTQUFLcVEsS0FBTCxHQUFhLFlBQVk7QUFDckIsYUFBS2tLLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSCxLQUZEO0FBR0EsU0FBS3ZhLEtBQUwsR0FBYSxZQUFZO0FBQ3JCbWYsc0JBQWNMLEVBQWQ7QUFDSCxLQUZEO0FBR0gsQ0FuQ0Q7O0FBcUNBaEssTUFBTXNLLE9BQU4sR0FBZ0IsVUFBVXBaLFFBQVYsRUFBb0JxWixFQUFwQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDOUMsUUFBSSxPQUFPdFosUUFBUCxLQUFvQixVQUFwQixJQUFrQyxDQUFDcVQsTUFBTWdHLEVBQU4sQ0FBbkMsSUFBZ0RBLEtBQUssQ0FBekQsRUFBNEQ7QUFDeERDLG1CQUFXLFFBQU9BLFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBcEIsR0FBK0JBLFFBQS9CLEdBQTBDLEVBQXJEO0FBQ0EsZUFBT0MsV0FBVyxZQUFZO0FBQzFCdloscUJBQVM5QyxJQUFULENBQWNvYyxRQUFkO0FBQ0gsU0FGTSxFQUVKRCxFQUZJLENBQVA7QUFHSDtBQUNKLENBUEQ7QUFRQXZLLE1BQU0wSyxRQUFOLEdBQWlCLFVBQVV4WixRQUFWLEVBQW9CcVosRUFBcEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQy9DLFFBQUksT0FBT3RaLFFBQVAsS0FBb0IsVUFBcEIsSUFBa0MsQ0FBQ3FULE1BQU1nRyxFQUFOLENBQW5DLElBQWdEQSxLQUFLLENBQXpELEVBQTREO0FBQ3hEQyxtQkFBVyxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXBCLEdBQStCQSxRQUEvQixHQUEwQyxFQUFyRDtBQUNBLGVBQU9KLFlBQVksWUFBWTtBQUMzQmxaLHFCQUFTOUMsSUFBVCxDQUFjb2MsUUFBZDtBQUNILFNBRk0sRUFFSkQsRUFGSSxDQUFQO0FBR0g7QUFDSixDQVBEO0FBUUF2SyxNQUFNMkssV0FBTixHQUFvQixVQUFVaGhCLEVBQVYsRUFBYztBQUM5QmloQixpQkFBYWpoQixFQUFiO0FBQ0gsQ0FGRDtBQUdBcVcsTUFBTTZLLFlBQU4sR0FBcUIsVUFBVWxoQixFQUFWLEVBQWM7QUFDL0IwZ0Isa0JBQWMxZ0IsRUFBZDtBQUNILENBRkQ7O2tCQUtlcVcsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1GLE9BQU87QUFDVGxSLHdCQURTO0FBRVQ2RywwQ0FGUztBQUdURSw0Q0FIUztBQUlUM0Ysc0JBSlM7QUFLVHVGLGtDQUxTO0FBTVR6Qiw0QkFOUztBQU9UMEIsZ0NBUFM7QUFRVDZTLHdDQVJTO0FBU1R6UyxnQ0FUUztBQVVUdkIsMEJBVlM7QUFXVEMsZ0NBWFM7QUFZVEwsNEJBWlM7QUFhVCtPLDRDQWJTO0FBY1RoQiw0Q0FkUztBQWVUNUQsc0NBZlM7QUFnQlRpRSw4QkFoQlM7QUFpQlRDLGtDQWpCUztBQWtCVFcsNEJBbEJTO0FBbUJUTSw0Q0FuQlM7QUFvQlRkLHdCQXBCUztBQXFCVGdCLG9DQXJCUztBQXNCVEksc0NBdEJTO0FBdUJUOVEsNEJBdkJTO0FBd0JUdVIsOEJBeEJTO0FBeUJURSw0QkF6QlM7QUEwQlRqVSw4QkExQlM7QUEyQlRDLDRCQTNCUztBQTRCVGdWLG9DQTVCUztBQTZCVEcsMEJBN0JTO0FBOEJUSSwwQ0E5QlM7QUErQlRqUixvQkEvQlM7QUFnQ1RWLGdDQWhDUztBQWlDVDZTLDBDQWpDUztBQWtDVC9CLDRCQWxDUztBQW1DVHNDLG9DQW5DUztBQW9DVFEsa0NBcENTO0FBcUNUTCxzQ0FyQ1M7QUFzQ1RJLHNDQXRDUztBQXVDVEcsZ0NBdkNTO0FBd0NUUyw0QkF4Q1M7QUF5Q1RHLHdDQXpDUztBQTBDVEMsc0JBMUNTO0FBMkNUdFEsd0JBM0NTO0FBNENUcVMsV0FBT3JTO0FBNUNFLENBQWI7O2tCQStDZXFILEkiLCJmaWxlIjoibmEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvcmUvY29tcG9uZW50XCI7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gXCIuL2NvcmUvZXh0ZW5zaW9uXCI7XG5pbXBvcnQgZGVwZW5kZW5jeSBmcm9tIFwiLi9jb3JlL2RlcGVuZGVuY3lcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9jb3JlL3JvdXRlXCI7XG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vY29yZS9zdGF0ZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vc3RhdGljL2RlZmluZWRcIjtcblxuY2xhc3MgTmFtZXNwYWNlQXBwbGljYXRpb25cbntcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgaWYgKE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgcmV0dXJuIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gKGtleSwgdmFsdWUpID0+IHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA6IHRoaXMuY29uZmlndXJhdGlvbltrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlYnVnOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uW2tleV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmlkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb290XCIsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZ3VyYXRpb24uaWQpLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVnaXN0ZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBleHRlbnNpb247XG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uLnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeSA9IGRlcGVuZGVuY3k7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG59XG5cbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLk1PREVfREVCVUcgPSAnZGVidWcnO1xuXG5leHBvcnQgZGVmYXVsdCBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcbiIsIlxuXG4vKipcbiAqIExvY2FsU3RvcmFnZSB3cmFwcGVyXG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIG9wdGlvblxuICogQHJldHVybnMge3tzZXQ6IChTdG9yYWdlLnNldHwqKSwgZ2V0OiAoU3RvcmFnZS5nZXR8KiksIGtleTogKFN0b3JhZ2Uua2V5fCopLCBjbGVhcjogKFN0b3JhZ2UuY2xlYXJ8KiksIHJlbW92ZTogKFN0b3JhZ2UucmVtb3ZlfCopLCBsZW5ndGg6IChTdG9yYWdlLmxlbmd0aHwqKX19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29va2llID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0OiBzZXQsXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXQgQ29va2llIGtleSwgdmFsdWVcbiAqICBleHBpcmVzIC0gbXMsIERhdGUsIC0xLCAwXG4gKiAgbWF4QWdlIC0gcyAoeWVhciAzMTUzNjAwMClcbiAqICBTYW1lU2l0ZT1TdHJpY3R8TGF4XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0ge3t9fSBvcHRpb25zICAge2V4cGlyZXM6IDAsIHBhdGg6ICcvJywgZG9tYWluOiAnc2l0ZS5jb20nLCBzZWN1cmU6IGZhbHNlLCBtYXhBZ2U6IDYwKjYwKjI0KjM2NSwgc2FtZVNpdGU6ICcnIH1cbiAqIEBwYXJhbSB0eXBlSnNvbiBib29sXG4gKi9cbmNvbnN0IHNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucywgdHlwZUpzb24gPSB0cnVlKVxue1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cbiAgICBpZiAoQ29va2llLnR5cGVKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGxldCBkYXRhID0gbmFtZSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIGlmIChvcHRpb25zLmV4cGlyZXMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBwYXJzZUludChvcHRpb25zLmV4cGlyZXMpICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tYXhBZ2UpIHtcbiAgICAgICAgb3B0aW9uc1snbWF4LWFnZSddID0gb3B0aW9ucy5tYXhBZ2U7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLm1heEFnZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc2FtZVNpdGUpIHtcbiAgICAgICAgb3B0aW9uc1snc2FtZXNpdGUnXSA9IG9wdGlvbnMuc2FtZVNpdGU7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLnNhbWVTaXRlO1xuICAgIH1cblxuICAgIGRhdGEgKz0gZW5jb2RlKG9wdGlvbnMpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGRhdGE7XG59O1xuXG4vKipcbiAqIEdldCBDb29raWUgdmFsdWUgYnkga2V5XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHR5cGVKc29uIGJvb2xcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZUpzb24gPSB0cnVlKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcbiAgICApKTtcblxuICAgIGxldCBkYXRhID0gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChDb29raWUuZGF0YUpzb24pIHt9XG4gICAgaWYgKHR5cGVKc29uICYmIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG5cbiAgICByZXR1cm4gZGF0YVxufTtcblxuLyoqXG4gKiBSZW1vdmUgQ29va2llIGJ5IGtleVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBvcHRpb25cbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7ZXhwaXJlczogLTF9O1xuICAgIHNldChuYW1lLCBcIlwiLCBvcHRpb24pO1xufTtcblxuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gJyc7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IHRvIHVyaSBnZXQgc3RyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgICAgZXhhbXBsZToge2V4cGlyZXM6IDAsIHBhdGg6ICcvJywgZG9tYWluOiAnbXktc2l0ZS5jb20nLCBzZWN1cmU6IGZhbHNlfVxuICogQHJldHVybnMge3N0cmluZ30gICAgICAgIGV4YW1wbGU6IFwiZXhwaXJlcz0wO3BhdGg9Lztkb21haW49c2l0ZS5jb207c2VjdXJlPWZhbHNlXCI7XG4gKi9cbmNvbnN0IGVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzdHIgKz0gJzsnICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgICAgICkpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge30sXG4gICAgICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpO1xuXG4gICAgICAgIGNvb2tpZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBkYXRhW3BhcnRzWzBdLnRyaW0oKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn07XG5cbkNvb2tpZS5zZXQgPSBzZXQ7XG5Db29raWUuZ2V0ID0gZ2V0O1xuQ29va2llLnJlbW92ZSA9IHJlbW92ZTtcbkNvb2tpZS5jbGVhciA9IGNsZWFyO1xuQ29va2llLmVuY29kZSA9IGVuY29kZTtcbkNvb2tpZS5kZWNvZGUgPSBkZWNvZGU7XG5Db29raWUuZGF0YUpzb24gPSB0cnVlO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGVuY29kZSxcbiAgICBkZWNvZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHsgRVZFTlRTX05BTUVTX0JBU0lDIH0gZnJvbSBcIi4uL2V2ZW50LW1hbmFnZXIvZXZlbnRzTmFtZXNcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5cbmNvbnN0IGNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcblxuXG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgY29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG5cbiAgICAgICAgICAgIGlmIChjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5vZGVdJykpXG4gICAgICAgICAgICAgICAgY29tcC5ub2RlID0gc2VhcmNoKCdbZGF0YS1ub2RlXScsICdkYXRhLW5vZGUnLCBjb21wLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbXAuc3R5bGVzKVxuICAgICAgICAgICAgICAgIHNldFN0eWxlcyhjb21wKTtcblxuICAgICAgICAgICAgYXR0cmlidXRlc0V2ZW50c0hhbmRsZXIoY29tcCwgJ29uJywgT2JqZWN0LmtleXMoRVZFTlRTX05BTUVTX0JBU0lDKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICBpbmplY3RDb21wb25lbnQgKGNvbXAsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFjb21wLnRlbXBsYXRlICYmIHRoaXMucm9vdCl7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXJ5KCdbZGF0YS1jb21wb25lbnQ9XCInKyBjb21wLmlkICsnXCJdJywgdGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSlcbiAgICAgICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoTmFtZXNwYWNlQXBwbGljYXRpb24ubW9kZSA9PT0gTmFtZXNwYWNlQXBwbGljYXRpb24uTU9ERV9ERUJVRylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiTGF0ZSBDYWxsXCI6IENvbXBvbmVudCBbJytjb21wLmlkKyddIGNhbiB0IGNhbGwgY29tcGxldGVkKCkgYW5kIGluamVjdHMnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCAmJiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuY29tcG9uZW50LnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudC5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnQubGlzdFtrZXldO1xuXG4gICAgICAgICAgICBpZiAoY29tcC5jb21wbGV0ZSAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBpbmplY3RDb21wb25lbnQgKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29tcG9uZW50Lmxpc3QgPSB7fTtcblxuY29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiBudWxsLFxuICAgICAgICBzdHlsZXM6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlciAoY29tcCwgcHJlZml4LCBldmVudHNOYW1lcykge1xuICAgIGNvbnN0IGFkZEV2ZW50ID0gKGVsZW0sIGF0dHIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBlbGVtLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW21ldGhvZF0uY2FsbChjb21wLCBlLCBlLnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQgfHwgZS5wYXRoWzBdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZXZlbnRzTmFtZXMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBwcmVmaXggKyAnLScgKyBldmVudE5hbWU7XG4gICAgICAgIGlmIChjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ1snK2F0dHIrJ10nKSkge1xuICAgICAgICAgICAgQXJyYXkuZnJvbShjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1snK2F0dHIrJ10nKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGVsZW0sIGF0dHIsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXAudGVtcGxhdGUuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICBhZGRFdmVudChjb21wLnRlbXBsYXRlLCBhdHRyLCBldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5qZWN0Q29tcG9uZW50IChjb21wLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnlBbGwoJ1tkYXRhLWNvbXBvbmVudD1cIicrIGNvbXAuaWQgKydcIl0nLCBpbnN0YW5jZS5yb290KTtcblxuICAgIGlmIChub2RlcylcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXAucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjb21wLnByb3BzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYobm9kZS5oYXNBdHRyaWJ1dGUocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZ2V0QXR0cmlidXRlKHByb3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUgIT09IGNvbXAudGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgaW5qZWN0KG5vZGUsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZXMoY29tcCwgaW5zdGFuY2UpIHtcblxuICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzKS5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICd0ZW1wbGF0ZScgJiYgaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLnN0eWxlc1tzZWxlY3Rvcl0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuc3R5bGVba2V5XSA9IGNvbXAuc3R5bGVzW3NlbGVjdG9yXVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcXVlcnlBbGwoc2VsZWN0b3IsIGNvbXAudGVtcGxhdGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5zdHlsZXNbc2VsZWN0b3JdKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gY29tcC5zdHlsZXNbc2VsZWN0b3JdW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iLCJpbXBvcnQgbG9hZEpTIGZyb20gJy4uL3N0YXRpYy9sb2FkSlMnO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGRlcGVuZGVuY3kgPSBmdW5jdGlvbiAoY29uZmlnLCBmb3JjZSA9IHRydWUpXG57XG4gICAgY29uc3Qgc291cmNlcyA9IG1lcmdlKHtcbiAgICAgICAgY3NzOiBbXSxcbiAgICAgICAganM6IFtdLFxuICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSwgY29uZmlnKTtcblxuICAgIGlmIChmb3JjZSlcbiAgICAgICAgZGVwZW5kZW5jeS5sb2FkKHNvdXJjZXMpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG59O1xuXG5kZXBlbmRlbmN5LmxvYWQgPSAoc291cmNlcykgPT4ge1xuICAgIGNvbnN0IG1heCA9XG4gICAgICAgIChzb3VyY2VzLmNzcyA/IHNvdXJjZXMuY3NzLmxlbmd0aCA6IDApICtcbiAgICAgICAgKHNvdXJjZXMuanMgPyBzb3VyY2VzLmpzLmxlbmd0aCA6IDApO1xuICAgIGNvbnN0IHNyY3MgPSBtZXJnZSh7Y3NzOiBzb3VyY2VzLmNzc30se2pzOiBzb3VyY2VzLmpzfSk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWQgPSBrZXkgPT09ICdjc3MnID8gbG9hZENTUyA6IGxvYWRKUztcbiAgICAgICAgc3Jjc1trZXldLmZvckVhY2goKHNyYykgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZXMuZWxlbWVudHMucHVzaChsb2FkKHNyYywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlcy5jb21wbGV0ZShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB9LCBzb3VyY2VzLmVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZGVwZW5kZW5jeS5yZW1vdmUgPSBmdW5jdGlvbiAoc291cmNlcylcbntcbiAgICBjb25zdCBlbGVtZW50cyA9IHNvdXJjZXMgJiYgc291cmNlcy5lbGVtZW50cyA/IHNvdXJjZXMuZWxlbWVudHMgOiBbXTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHNvdXJjZXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5O1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBleHRlbnNpb24gPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uLmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmNyZWF0ZShjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKXtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbnNpb24ubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGV4dGVuc2lvbi5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24ubGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5saXN0ID0ge307XG5cbmV4dGVuc2lvbi5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGZhbHNlLFxuICAgIH0sIGNvbmZpZylcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9uO1xuIiwiXG5jb25zdCByb3V0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbXBvbmVudCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdXJsKSB7XG4gICAgICAgIHRoaXNbY29tcG9uZW50XSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlOyIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi4vc3RhdGljL3R5cGVPZic7XG5cblxuY29uc3Qgc3RhdGUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/IHN0YXRlLmdldChrZXkpIDogc3RhdGUuc2V0KGtleSwgZGF0YSk7XG59O1xuXG5zdGF0ZS5jYWxsYmFjayA9IHt9O1xuc3RhdGUuc291cmNlID0gY3JlYXRlU291cmNlKCk7XG5zdGF0ZS5jcmVhdGUgPSBjcmVhdGVTb3VyY2UoKTtcbnN0YXRlLnNvdXJjZWRhdGEgPSB7fTtcbnN0YXRlLmFjdGlvbiA9IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgc3RhdGUuY2FsbGJhY2tba2V5XSA9IGNhbGxiYWNrO1xufTtcblxuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0eXBlT2Yoa2V5LCAnc3RyaW5nJylcbiAgICAgICAgPyBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gfHwgc3RhdGUuc291cmNlW2tleV1cbiAgICAgICAgOiBrZXkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IHN0YXRlLnNvdXJjZWRhdGEgO1xufTtcblxuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNldENhc2Uoe1trZXldOiBwYXlsb2FkfSk7XG59O1xuXG5zdGF0ZS5zZXRDYXNlID0gZnVuY3Rpb24gKHBheWxvYWQgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzdGF0ZS5zb3VyY2Vba2V5XSA9IHN0YXRlLnNvdXJjZWRhdGFba2V5XSA9IHBheWxvYWRba2V5XTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZSAocGF5bG9hZCA9IHt9KSB7XG4gICAgc3RhdGUuc291cmNlZGF0YSA9IHBheWxvYWQ7XG4gICAgcmV0dXJuIG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OihvYmosIHByb3AsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY2FsbGJhY2tbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYWxsYmFja1twcm9wXS5jYWxsKHt9LCBzdGF0ZS5zb3VyY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XG4iLCJjb25zdCBEYXRldGltZSA9IHt9O1xuRGF0ZXRpbWUuTVNfSU5fREFZID0gODY0ZTU7XG5EYXRldGltZS5NU19JTl9IT1VSID0gMzZlNTtcbkRhdGV0aW1lLk1TX0lOX01JTiA9IDZlNDtcblxuLyoqXG4gKiBSZXR1cm4gdGltZXN0YW1wXG4gKiBAcGFyYW0gZGF0ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuRGF0ZXRpbWUudGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZS5nZXRUaW1lKCkgOiAobmV3IERhdGUpLmdldFRpbWUoKVxufTtcblxuLyoqXG4gKiBBZGQgZGF5cyB0byBzb21lIGRhdGVcbiAqIEBwYXJhbSBkYXkgICAgICAgICAgIG51bWJlciBvZiBkYXlzLiAwLjA0IC0gMSBob3VyLCAwLjUgLSAxMiBob3VyLCAxIC0gMSBkYXlcbiAqIEBwYXJhbSBkYXRlU3RhcnQgICAgIHR5cGUgRGF0ZSwgc3RhcnQgZGF0ZVxuICogQHJldHVybnMgeyp9ICB0eXBlIERhdGVcbiAqL1xuRGF0ZXRpbWUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXksIGRhdGVTdGFydCkge1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlU3RhcnQgPyBuZXcgRGF0ZShkYXRlU3RhcnQpIDogbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5ICogODY0MDAwMDApKTtcbiAgICByZXR1cm4gZGF0ZTtcbn07XG5cbi8qKlxuICogVGltZSBiZXR3ZWVuIERhdGVzXG4gKiA8cHJlPlxuICogICAgIHZhciBmcm9tID0gbmV3IERhdGUoJzIwMTYtMDgtMDEgMjA6MzAnKTtcbiAqICAgICB2YXIgdG8gPSBuZXcgRGF0ZSgnMjAxNi0wOC0xMCAwNzo1NScpO1xuICogICAgIC5EYXRlLmJldHdlZW5EYXRlcyhmcm9tLCB0byk7IC8vIE9iamVjdCB7IGRheTogOCwgaG91cjogMTEsIG1pbnV0ZTogMjUgfVxuICogPC9wcmU+XG4gKiBAcGFyYW0gZGF0ZUZyb21cbiAqIEBwYXJhbSBkYXRlVG9cbiAqIEByZXR1cm5zIHt7ZGF5OiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXJ9fVxuICovXG5EYXRldGltZS5iZXR3ZWVuRGF0ZXMgPSBmdW5jdGlvbiAoZGF0ZUZyb20sIGRhdGVUbykge1xuICAgIGRhdGVGcm9tID0gZGF0ZUZyb20gfHwgbmV3IERhdGUoKTtcbiAgICBkYXRlVG8gPSBkYXRlVG8gfHwgbmV3IERhdGUoKTtcbiAgICBsZXQgZGlmZk1zID0gKGRhdGVUbyAtIGRhdGVGcm9tKSxcbiAgICAgICAgZGlmZkRheXMgPSBNYXRoLnJvdW5kKGRpZmZNcyAvIDg2NGU1KSxcbiAgICAgICAgZGlmZkhycyA9IE1hdGgucm91bmQoKGRpZmZNcyAlIDg2NGU1KSAvIDM2ZTUpLFxuICAgICAgICBkaWZmTWluID0gTWF0aC5yb3VuZCgoKGRpZmZNcyAlIDg2NGU1KSAlIDM2ZTUpIC8gNmU0KTtcbiAgICByZXR1cm4ge2RheTogZGlmZkRheXMsIGhvdXI6IGRpZmZIcnMsIG1pbnV0ZTogZGlmZk1pbn07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgZGF0ZSBzdHJpbmcgdG8gRGF0ZSBPYmplY3RcbiAqIHl5IC0gdGhlIHllYXIgYXMgYSB0d28tZGlnaXQgbnVtYmVyICggMDAgdG8gOTkgKTtcbiAqIFlZIC0gdGhlIHllYXIgYXMgYSBmb3VyLWRpZ2l0IG51bWJlciAoIDE5MDAtOTk5OSApO1xuICogbW0gLSB0aGUgbW9udGggYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDEyICkgKCAxIHRvIDEyICk7XG4gKiBkZCAtIHRoZSBkYXkgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDMxICkgKCAxIHRvIDMxICk7XG4gKiBoaCBISCAtIHRoZSBob3VyICggMDAgdG8gMTEgKSAoIDAwIHRvIDIzICkgKCAxIHRvIDEyICkgKCAwIHRvIDIzICk7XG4gKiBpaSAtIHRoZSBtaW51dGUgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBzcyAtIHRoZSBzZWNvbmQgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBhYSAtIGRpc3BsYXlzIGFtIChmb3IgdGltZXMgZnJvbSBtaWRuaWdodCB1bnRpbCBub29uKSBhbmQgcG0gKGZvciB0aW1lcyBmcm9tIG5vb24gdW50aWwgbWlkbmlnaHQpO1xuICpcbiAqIC5zdHJUb0RhdGUoJzEyLjA1LjIwMTcgMTI6MzA6MjUnLCAnbW0uZGQuWVkgSEg6aWk6c3MnKVxuICogLnN0clRvRGF0ZSgnMTIvMDUvMjAxNycsICdtbS9kZC9ZWScpXG4gKiAuc3RyVG9EYXRlKCcxMi81LzIwMTcnLCAnbW0vZGQvWVknLCB0cnVlKVxuICogQHBhcmFtIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXRcbiAqIEBwYXJhbSB1dGNcbiAqIEByZXR1cm5zIHtEYXRlfVxuICovXG5EYXRldGltZS5zdHJUb0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCB1dGMpIHtcbiAgICBjb25zdCBzZXQgPSBbMCwgMCwgMSwgMCwgMCwgMF07XG4gICAgY29uc3QgdGVtcCA9IGRhdGUubWF0Y2goL1thLXpBLVpdK3xbMC05XSsvZyk7XG4gICAgY29uc3QgbWFzayA9IGZvcm1hdC5tYXRjaCgvW2EtekEtWl17Mn0vZyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAobWFza1tpXSkge1xuICAgICAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgICAgICAgc2V0WzJdID0gdGVtcFtpXSB8fCAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgc2V0WzFdID0gKHRlbXBbaV0gfHwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgICAgICAgc2V0WzBdID0gdGVtcFtpXSAqIDEgKyAodGVtcFtpXSA+IDUwID8gMTkwMCA6IDIwMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgICAgICAgICBzZXRbNF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcbiAgICAgICAgICAgICAgICBzZXRbMF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSBzZXRbM10gJSAxMiArICgodGVtcFtpXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyA/IDAgOiAxMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgICAgICBzZXRbNV0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZXRpbWU7XG5cbi8qXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTVNfSU5fREFZOiBEYXRldGltZS5NU19JTl9EQVksXG4gICAgTVNfSU5fSE9VUjogRGF0ZXRpbWUuTVNfSU5fSE9VUixcbiAgICBNU19JTl9NSU46IERhdGV0aW1lLk1TX0lOX01JTixcbiAgICB0aW1lOiBEYXRldGltZS50aW1lLFxuICAgIGFkZERheXM6IERhdGV0aW1lLmFkZERheXMsXG4gICAgYmV0d2VlbkRhdGVzOiBEYXRldGltZS5iZXR3ZWVuRGF0ZXMsXG4gICAgc3RyVG9EYXRlOiBEYXRldGltZS5zdHJUb0RhdGUsXG59O1xuKi9cbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cbmZ1bmN0aW9uIERvbSAoc2VsZWN0b3IpIHtcbiAgICBjb25zdCAkID0ge1xuICAgICAgICBzZWxlY3RvcjogdHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykgPyBzZWxlY3RvciA6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkOiBpc05vZGUoc2VsZWN0b3IpID8gW3NlbGVjdG9yXSA6IHF1ZXJ5QWxsKHNlbGVjdG9yKSxcbiAgICB9O1xuXG4gICAgY29uc3QgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3JjLnN0eWxlLmRpc3BsYXkgPyBzcmMuc3R5bGUuZGlzcGxheSA6IGdldENvbXB1dGVkU3R5bGUoc3JjKS5kaXNwbGF5O1xuICAgICAgICAgICAgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA9ICghc3R5bGUgfHwgc3R5bGUgPT09ICdub25lJykgPyAnYmxvY2snIDogc3R5bGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5vbmUgPSAoKSA9PiAkLnNlbGVjdGVkICYmICQuc2VsZWN0ZWQubGVuZ3RoID8gJC5zZWxlY3RlZFswXSA6IGZhbHNlO1xuICAgICQuYWxsID0gKCkgPT4gJC5zZWxlY3RlZDtcbiAgICAkLmF0dHIgPSAobmFtZSwgdmFsdWUpID0+IGRlZmluZWQodmFsdWUpID8gYXR0cigkLm9uZSgpLCBuYW1lLCB2YWx1ZSkgOiBhdHRyKCQub25lKCksIG5hbWUpO1xuICAgICQuaW5qZWN0ID0gKGRhdGEsIGFwcGVuZCwgdG8pID0+IGluamVjdCgkLm9uZSgpLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAkLmFwcGVuZCA9IChkYXRhKSA9PiBpbmplY3QoJC5vbmUoKSwgZGF0YSwgdHJ1ZSk7XG4gICAgJC5zZWFyY2ggPSAoYXR0ciwgZnJvbSkgPT4gc2VhcmNoKCQub25lKCksIGF0dHIsIGZyb20pO1xuICAgICQucGFyZW50ID0gKCkgPT4gJC5vbmUoKS5wYXJlbnROb2RlO1xuICAgICQuY2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgICQub25lKClcbiAgICB9O1xuICAgICQucG9zaXRpb24gPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKTtcbiAgICAkLnF1ZXJ5ID0gKHNlbGVjdG9yKSA9PiAkLm9uZSgpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICQucXVlcnlBbGwgPSAoc2VsZWN0b3IpID0+ICQub25lKCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgJC54ID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkueDtcbiAgICAkLnkgPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS55O1xuICAgICQud2lkdGggPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS53aWR0aDtcbiAgICAkLmhlaWdodCA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLmhlaWdodDtcbiAgICAkLnJlbW92ZSA9ICgpID0+ICQub25lKCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkLm9uZSgpKTtcbiAgICAkLnNob3cgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9ICQub25lKCk7XG4gICAgICAgIF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKHNyYyk7XG4gICAgICAgIGNzcyhzcmMsIHtkaXNwbGF5OiBzcmMgJiYgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA/IHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gOiAnYmxvY2snfSk7XG4gICAgfTtcbiAgICAkLmhpZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9ICQub25lKCk7XG4gICAgICAgIF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKHNyYyk7XG4gICAgICAgIGNzcyhzcmMsIHtkaXNwbGF5OiAnbm9uZSd9KTtcbiAgICB9O1xuICAgICQudG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBxdWVyeUFsbChzcmMpLm1hcChEb20udG9nZ2xlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSkge1xuICAgICAgICAgICAgaWYgKHNyYy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIERvbS5zaG93KHNyYyk7XG4gICAgICAgICAgICBlbHNlIERvbS5oaWRlKHNyYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICQub24gPSAoZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSA9PiBvbigkLm9uZSgpLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpO1xuICAgICQuY29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSAkLm9uZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gbWVyZ2Uoe3RvcDogY29vcmRzLnRvcCArIHBhZ2VZT2Zmc2V0LCBsZWZ0OiBjb29yZHMubGVmdCArIHBhZ2VYT2Zmc2V0fSwgY29vcmRzKTtcbiAgICB9O1xuICAgIHJldHVybiAkO1xufVxuXG5Eb20uYXR0ciA9IGF0dHI7XG5Eb20uY3NzID0gY3NzO1xuRG9tLmxvYWRlZCA9IGRvbUxvYWRlZDtcbkRvbS5pbmplY3QgPSBpbmplY3Q7XG5Eb20uc3RyMm5vZGUgPSBzdHIybm9kZTtcbkRvbS5zZWFyY2ggPSBzZWFyY2g7XG5Eb20ucXVlcnlBbGwgPSBxdWVyeUFsbDtcbkRvbS5xdWVyeSA9IHF1ZXJ5O1xuRG9tLmNyZWF0ZSA9IGNyZWF0ZUVsZW1lbnQ7XG5Eb20uZnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudDtcbkRvbS5ub2RlMnN0ciA9IG5vZGUyc3RyO1xuRG9tLnN0cjJub2RlID0gc3RyMm5vZGU7XG5Eb20ucG9zaXRpb24gPSBwb3NpdGlvbjtcblxuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCIvKipcbiAqIEVtbWV0IHN5bnRheCBmb3IgY3JlYXRpbmcgRE9NIGVsZW1lbnRzXG4gKlxuICogU3ludGF4XG4gKiAgIGNvbnN0IGVtbWV0ID0gRW1tZXQoKTtcbiAqICAgZW1tZXQoJy50YWJsZSA+IGRpdntsZWZ0fSArIGRpdihjbGFzcz1cInRleHQtcmlnaHRcIil7cmlnaHR9JylcbiAqICAgdGFnI2lkLmNsYXNzZXMoYXR0cmlidXRlcz1cIlwiKXtpbm5lciB0ZXh0fSA+IC5uZXN0ZWQgXiAuYmFja2VkLnVwLm9uZSArIC5zaWJsaW5nXG4gKlxuICogQXJndW1lbnRzXG4gKiAgIC5lbW1ldCggc3ludGF4IDogc3RyaW5nLCByZXR1cm5Pbmx5SFRNTCA6IGJvb2xlYW4gKVxuICpcbiAqIEBuYW1lc3BhY2UgRW1tZXRcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gdGV4dCAgICAgICAgICBzeW50YXhcbiAqIEBwYXJhbSBodG1sT25seSAgICAgIHJldHVybk9ubHlIVE1MXG4gKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gKi9cbmNvbnN0IEVtbWV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCAgdGVtcElubmVyVGV4dHMgPSBbXTtcbiAgICBsZXQgIHRlbXBFc2NhcGVkID0gW107XG4gICAgY29uc3QgcmUgPSB7fTtcblxuICAgIHJlLmV4Y2x1ZGVzID0gXCIoW15cXFxcLiNcXFxcKFxcXFx7XSspXCI7XG4gICAgcmUuY2xhc3NlcyA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiICsgcmUuZXhjbHVkZXMsIFwiZ1wiKTtcbiAgICByZS5pZCA9IG5ldyBSZWdFeHAoXCIjXCIgKyByZS5leGNsdWRlcywgXCJnXCIpO1xuICAgIHJlLnRhZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZS5leGNsdWRlcyk7XG4gICAgcmUuaW5kZXhlcyA9IC8oLis/KSg+fFxcK3xcXF58JCkvZztcbiAgICByZS5lc2NhcGUgPSAvKFwifCcpKFteXFwxXSo/KVxcMS9nO1xuICAgIHJlLmlubmVyVGV4dCA9IC9cXHsoW159XSo/KX0vZztcbiAgICByZS5hdHRycyA9IC9cXCgoW15cXCldKilcXCkvZztcblxuICAgIGNvbnN0IGVtbWV0ID0gZnVuY3Rpb24gKHRleHQsIGh0bWxPbmx5KSB7XG4gICAgICAgIGxldCB0cmVlID0gZWxlbWVudCgpLFxuICAgICAgICAgICAgY3VycmVudCA9IHRyZWUsXG4gICAgICAgICAgICBsYXN0RWxlbWVudCA9IHRyZWUsXG4gICAgICAgICAgICBjb21tYW5kVGV4dCA9IHRleHQgfHwgXCJcIixcbiAgICAgICAgICAgIGNvbnZlcnRDb2xsZWN0aW9uID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzcmMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzcmNbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgICAgdGVtcElubmVyVGV4dHMgPSBbXTtcbiAgICAgICAgdGVtcEVzY2FwZWQgPSBbXTtcbiAgICAgICAgY29tbWFuZFRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmVzY2FwZSwgZnVuY3Rpb24gKGZ1bGwsIHF1b3RlcywgZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgdGVtcEVzY2FwZWQucHVzaChlc2NhcGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlxcXCJcXFwiXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UocmUuaW5uZXJUZXh0LCBmdW5jdGlvbiAoZnVsbCwgaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGVtcElubmVyVGV4dHMucHVzaChpbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcInt9XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmluZGV4ZXMsIGZ1bmN0aW9uIChmdWxsLCBlbGVtZW50VGV4dCwgc3BsaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmFwcGVuZENoaWxkKGxhc3RFbGVtZW50ID0gZWxlbWVudChlbGVtZW50VGV4dCkpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gXCI+XCIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBsYXN0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdHRlciA9PT0gXCJeXCIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHQgPSB0cmVlLmNoaWxkcmVuLmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gdHJlZS5jaGlsZHJlblxuICAgICAgICAgICAgOiB0cmVlLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIHJldHVybiBodG1sT25seVxuICAgICAgICAgICAgPyB0cmVlLmlubmVySFRNTFxuICAgICAgICAgICAgOiAocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gPyBjb252ZXJ0Q29sbGVjdGlvbihyZXN1bHQpIDogcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGxldCBjb21tYW5kVGV4dCA9IHRleHQgfHwgXCJcIixcbiAgICAgICAgICAgIG1hdGNoX3RhZyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLnRhZyksXG4gICAgICAgICAgICBtYXRjaF9pZCA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmlkKSxcbiAgICAgICAgICAgIG1hdGNoX2NsYXNzZXMgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5jbGFzc2VzKSxcbiAgICAgICAgICAgIG1hdGNoX2F0dHJzID0gY29tbWFuZFRleHQubWF0Y2gocmUuYXR0cnMpLFxuICAgICAgICAgICAgbWF0Y2hfaW5uZXJUZXh0ID0gY29tbWFuZFRleHQubWF0Y2gocmUuaW5uZXJUZXh0KSxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1hdGNoX3RhZyA/IG1hdGNoX3RhZ1swXSA6IFwiZGl2XCIpO1xuXG4gICAgICAgIGlmIChtYXRjaF9pZCkge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IG1hdGNoX2lkLnBvcCgpLnJlcGxhY2UocmUuaWQsIFwiJDFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfY2xhc3Nlcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBtYXRjaF9jbGFzc2VzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5zbGljZSgxKVxuICAgICAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBtYXRjaF9pbm5lclRleHQubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5lc2NhcGUodGVtcElubmVyVGV4dHMuc2hpZnQoKSk7XG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9hdHRycykge1xuICAgICAgICAgICAgbWF0Y2hfYXR0cnMubWFwKGZ1bmN0aW9uIChjaHVua1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua1BhcmFtLnJlcGxhY2UocmUuYXR0cnMsIFwiJDFcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIGNodW5rLm1hcChmdW5jdGlvbiAoYXR0clBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyUGFyYW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhdHRyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZSh1bmVzY2FwZShhdHRyLmpvaW4oXCI9XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGVtbWV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1tZXQ7XG4iLCJcbmV4cG9ydCBjb25zdCBFVkVOVFNfTkFNRVMgPSB7XG4gICAgY29weTogJ2NvcHknLFxuICAgIGN1dDogJ2N1dCcsXG4gICAgcGFzdGU6ICdwYXN0ZScsXG4gICAgYWJvcnQ6ICdhYm9ydCcsXG4gICAgYmx1cjogJ2JsdXInLFxuICAgIGNhbmNlbDogJ2NhbmNlbCcsXG4gICAgY2FucGxheTogJ2NhbnBsYXknLFxuICAgIGNhbnBsYXl0aHJvdWdoOiAnY2FucGxheXRocm91Z2gnLFxuICAgIGNoYW5nZTogJ2NoYW5nZScsXG4gICAgY2xpY2s6ICdjbGljaycsXG4gICAgY2xvc2U6ICdjbG9zZScsXG4gICAgY29udGV4dG1lbnU6ICdjb250ZXh0bWVudScsXG4gICAgY3VlY2hhbmdlOiAnY3VlY2hhbmdlJyxcbiAgICBkYmxjbGljazogJ2RibGNsaWNrJyxcbiAgICBkcmFnOiAnZHJhZycsXG4gICAgZHJhZ2VuZDogJ2RyYWdlbmQnLFxuICAgIGRyYWdlbnRlcjogJ2RyYWdlbnRlcicsXG4gICAgZHJhZ2xlYXZlOiAnZHJhZ2xlYXZlJyxcbiAgICBkcmFnb3ZlcjogJ2RyYWdvdmVyJyxcbiAgICBkcmFnc3RhcnQ6ICdkcmFnc3RhcnQnLFxuICAgIGRyb3A6ICdkcm9wJyxcbiAgICBkdXJhdGlvbmNoYW5nZTogJ2R1cmF0aW9uY2hhbmdlJyxcbiAgICBlbXB0aWVkOiAnZW1wdGllZCcsXG4gICAgZW5kZWQ6ICdlbmRlZCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gICAgZm9jdXM6ICdmb2N1cycsXG4gICAgaW5wdXQ6ICdpbnB1dCcsXG4gICAgaW52YWxpZDogJ2ludmFsaWQnLFxuICAgIGtleWRvd246ICdrZXlkb3duJyxcbiAgICBrZXlwcmVzczogJ2tleXByZXNzJyxcbiAgICBrZXl1cDogJ2tleXVwJyxcbiAgICBsb2FkOiAnbG9hZCcsXG4gICAgbG9hZGVkZGF0YTogJ2xvYWRlZGRhdGEnLFxuICAgIGxvYWRlZG1ldGFkYXRhOiAnbG9hZGVkbWV0YWRhdGEnLFxuICAgIGxvYWRzdGFydDogJ2xvYWRzdGFydCcsXG4gICAgbW91c2Vkb3duOiAnbW91c2Vkb3duJyxcbiAgICBtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZScsXG4gICAgbW91c2VvdXQ6ICdtb3VzZW91dCcsXG4gICAgbW91c2VvdmVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZXVwOiAnbW91c2V1cCcsXG4gICAgbW91c2V3aGVlbDogJ21vdXNld2hlZWwnLFxuICAgIHBhdXNlOiAncGF1c2UnLFxuICAgIHBsYXk6ICdwbGF5JyxcbiAgICBwbGF5aW5nOiAncGxheWluZycsXG4gICAgcHJvZ3Jlc3M6ICdwcm9ncmVzcycsXG4gICAgcmF0ZWNoYW5nZTogJ3JhdGVjaGFuZ2UnLFxuICAgIHJlc2V0OiAncmVzZXQnLFxuICAgIHJlc2l6ZTogJ3Jlc2l6ZScsXG4gICAgc2Nyb2xsOiAnc2Nyb2xsJyxcbiAgICBzZWVrZWQ6ICdzZWVrZWQnLFxuICAgIHNlZWtpbmc6ICdzZWVraW5nJyxcbiAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIHN0YWxsZWQ6ICdzdGFsbGVkJyxcbiAgICBzdWJtaXQ6ICdzdWJtaXQnLFxuICAgIHN1c3BlbmQ6ICdzdXNwZW5kJyxcbiAgICB0aW1ldXBkYXRlOiAndGltZXVwZGF0ZScsXG4gICAgdG9nZ2xlOiAndG9nZ2xlJyxcbiAgICB2b2x1bWVjaGFuZ2U6ICd2b2x1bWVjaGFuZ2UnLFxuICAgIHdhaXRpbmc6ICd3YWl0aW5nJyxcbiAgICB3aGVlbDogJ3doZWVsJyxcbiAgICBhdXhjbGljazogJ2F1eGNsaWNrJyxcbiAgICBnb3Rwb2ludGVyY2FwdHVyZTogJ2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICBsb3N0cG9pbnRlcmNhcHR1cmU6ICdsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgIHBvaW50ZXJkb3duOiAncG9pbnRlcmRvd24nLFxuICAgIHBvaW50ZXJtb3ZlOiAncG9pbnRlcm1vdmUnLFxuICAgIHBvaW50ZXJ1cDogJ3BvaW50ZXJ1cCcsXG4gICAgcG9pbnRlcmNhbmNlbDogJ3BvaW50ZXJjYW5jZWwnLFxuICAgIHBvaW50ZXJvdmVyOiAncG9pbnRlcm92ZXInLFxuICAgIHBvaW50ZXJvdXQ6ICdwb2ludGVyb3V0JyxcbiAgICBwb2ludGVyZW50ZXI6ICdwb2ludGVyZW50ZXInLFxuICAgIHBvaW50ZXJsZWF2ZTogJ3BvaW50ZXJsZWF2ZScsXG4gICAgc2VsZWN0c3RhcnQ6ICdzZWxlY3RzdGFydCcsXG4gICAgc2VsZWN0aW9uY2hhbmdlOiAnc2VsZWN0aW9uY2hhbmdlJyxcbiAgICBhbmltYXRpb25lbmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIGFuaW1hdGlvbml0ZXJhdGlvbjogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgYW5pbWF0aW9uc3RhcnQ6ICdhbmltYXRpb25zdGFydCcsXG4gICAgdHJhbnNpdGlvbmVuZDogJ3RyYW5zaXRpb25lbmQnLFxufTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UU19OQU1FU19CQVNJQyA9IHtcbiAgICBibHVyOiAnYmx1cicsXG4gICAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgICBjbGljazogJ2NsaWNrJyxcbiAgICBkYmxjbGljazogJ2RibGNsaWNrJyxcbiAgICBkcmFnOiAnZHJhZycsXG4gICAgZHJhZ2VuZDogJ2RyYWdlbmQnLFxuICAgIGRyYWdlbnRlcjogJ2RyYWdlbnRlcicsXG4gICAgZHJhZ2xlYXZlOiAnZHJhZ2xlYXZlJyxcbiAgICBkcmFnb3ZlcjogJ2RyYWdvdmVyJyxcbiAgICBkcmFnc3RhcnQ6ICdkcmFnc3RhcnQnLFxuICAgIGRyb3A6ICdkcm9wJyxcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBpbnB1dDogJ2lucHV0JyxcbiAgICBsb2FkOiAnbG9hZCcsXG4gICAgbW91c2Vkb3duOiAnbW91c2Vkb3duJyxcbiAgICBtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZScsXG4gICAgbW91c2VvdXQ6ICdtb3VzZW91dCcsXG4gICAgbW91c2VvdmVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZXVwOiAnbW91c2V1cCcsXG4gICAgbW91c2V3aGVlbDogJ21vdXNld2hlZWwnLFxuICAgIHNjcm9sbDogJ3Njcm9sbCcsXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICBzdWJtaXQ6ICdzdWJtaXQnLFxuICAgIHdoZWVsOiAnd2hlZWwnLFxuICAgIHRyYW5zaXRpb25lbmQ6ICd0cmFuc2l0aW9uZW5kJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVWRU5UU19OQU1FUztcbiIsIlxuY29uc3QgRXZlbnRNYW5hZ2VyID0ge1xuXG4gICAgZXZlbnRGcmFnbWVudDogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgIHZlcnNpb246ICcwLjAuMicsXG4gICAgZXZlbnRzVHlwZToge30sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGV0YWlsc1xuICAgICAqIEByZXR1cm5zIHtDdXN0b21FdmVudH1cbiAgICAgKi9cbiAgICBhZGRFdmVudDogZnVuY3Rpb24obmFtZSwgZGV0YWlscykge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7ZGV0YWlsOiBkZXRhaWxzfSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlscyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkZXRhaWxzKVxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZXZlbnRba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlIG9uIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICogQHJldHVybnMge3t0eXBlOiAqLCBsaXN0ZW5lcjogKiwgdXNlQ2FwdHVyZTogKCp8Ym9vbGVhbil9fVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSl7XG4gICAgICAgIHVzZUNhcHR1cmUgPSB1c2VDYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0gaW5zdGFuY2VvZiBDdXN0b21FdmVudClcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LmRpc3BhdGNoRXZlbnQoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWFuYWdlcjtcbiIsIi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldFxuICAgICAgICBrZXksXG4gICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucy5kYXRhKVxuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBOYW1lc3BhY2VBcHBsaWNhdGlvbiBmcm9tIFwiLi9OYW1lc3BhY2VBcHBsaWNhdGlvblwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwiLi9jb29raWVcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBEYXRldGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmltcG9ydCBFbW1ldCBmcm9tIFwiLi9lbW1ldFwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuL2h0dHAtcmVxdWVzdFwiO1xuaW1wb3J0IERvbSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBTdHIgZnJvbSBcIi4vc3RyXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9yb3h5XCI7XG5cblxud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uID0gTmFtZXNwYWNlQXBwbGljYXRpb247XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uVXRpbCA9IFV0aWw7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uQ29va2llID0gQ29va2llO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlN0b3JhZ2UgPSBTdG9yYWdlO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkRhdGV0aW1lID0gRGF0ZXRpbWU7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlRpbWVyID0gVGltZXI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRW1tZXQgPSBFbW1ldDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5odHRwUmVxdWVzdCA9IGh0dHBSZXF1ZXN0O1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkRvbSA9IERvbTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5TdHIgPSBTdHI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uUm94eSA9IFJveHk7XG4iLCJpbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IGFjdGlvbnMgPSB7ZGVmYXVsdDpudWxsfTtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uc1twcm9wXSAmJiB0eXBlb2YgYWN0aW9uc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIGFjdGlvbnNbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBzZXQgKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBhY3Rpb24gKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5kZWZhdWx0ID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgPyBjYWxsYmFjayA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgcHJveHksXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgbGlzdFtrZXldLCBrZXksIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIGFwcGVuZCwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSAoQUJDICsgTlVNQkVSUykudG9Mb3dlckNhc2UoKS5zcGxpdCgnJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz1cbiAgICAgICAgICAgIGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuY29uc3Qgc3RyMmZyYWdtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cmluZyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBpLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMmZyYWdtZW50O1xuIiwiaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi9zdHIyZnJhZ21lbnRcIjtcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgZnJhZ21lbnQgPSBzdHIyZnJhZ21lbnQoc3RyaW5nKTtcblxuICAgIHN3aXRjaCAoZnJhZ21lbnQuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgY2FzZSAwOiBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZnJhZ21lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIybm9kZTtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgLy9pZiAoaXNOb2RlKHZhbHVlKSlcbiAgICAvLyAgICB0ID0gJ25vZGUnO1xuICAgIC8vZWxzZVxuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIiwiXG4vKipcbiAqIEFkZCBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBqc29uXG4gKi9cbmNvbnN0IHNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwganNvbiA9IHRydWUpIHtcbiAgICBpZiAoanNvbilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIHZhbHVlKTtcbn07XG5cbi8qKlxuICogR2V0IGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBqc29uXG4gKi9cbmNvbnN0IGdldCA9IGZ1bmN0aW9uIChuYW1lLCBqc29uID0gdHJ1ZSkge1xuICAgIGxldCB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAoanNvbiAmJiB2YWx1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKnRydWVcbiAqIFJlbW92ZSBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKVxufTtcblxuLyoqXG4gKiBHZXQgaXRlbSBieSBpbmRleFxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBrZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpXG59O1xuXG4vKipcbiAqIFdoZW4gaW52b2tlZCwgd2lsbCBlbXB0eSBhbGwga2V5cyBvdXQgb2YgdGhlIHN0b3JhZ2UuXG4gKi9cbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIGRhdGEgaXRlbXMgc3RvcmVkIGluIHRoZSBTdG9yYWdlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmNvbnN0IGxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGhcbn07XG5cbi8qKlxuICogTG9jYWxTdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7e3NldDogKFN0b3JhZ2Uuc2V0fCopLCBnZXQ6IChTdG9yYWdlLmdldHwqKSwga2V5OiAoU3RvcmFnZS5rZXl8KiksIGNsZWFyOiAoU3RvcmFnZS5jbGVhcnwqKSwgcmVtb3ZlOiAoU3RvcmFnZS5yZW1vdmV8KiksIGxlbmd0aDogKFN0b3JhZ2UubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdG9yYWdlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0OiBzZXQsXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuLy9cblN0b3JhZ2Uuc2V0ID0gc2V0O1xuU3RvcmFnZS5nZXQgPSBnZXQ7XG5TdG9yYWdlLmtleSA9IGtleTtcblN0b3JhZ2UuY2xlYXIgPSBjbGVhcjtcblN0b3JhZ2UucmVtb3ZlID0gcmVtb3ZlO1xuU3RvcmFnZS5zaXplID0gbGVuZ3RoO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAga2V5LFxuICAgIGNsZWFyLFxuICAgIHJlbW92ZSxcbiAgICBsZW5ndGgsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcblxuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufTtcblxuZnVuY3Rpb24gU3RyIChzdHJpbmcpIHtcbiAgICBjb25zdCAkID0ge1xuICAgICAgICBzdHJpbmc6IHR5cGVPZihzdHJpbmcsICdzdHJpbmcnKSA/IHN0cmluZyA6ICcnLFxuICAgICAgICBsZW5ndGg6IHN0cmluZy5sZW5ndGgsXG4gICAgfTtcblxuICAgICQuY2FwaXRhbGl6ZSA9ICgpID0+IGNhcGl0YWxpemUoJC5zdHJpbmcpO1xuICAgICQudXBwZXIgPSAoKSA9PiAkLnN0cmluZy50b1VwcGVyQ2FzZSgpO1xuICAgICQubG93ZXIgPSAoKSA9PiAkLnN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICQucGFkRW5kID0gKHZhbHVlKSA9PiAkLnN0cmluZy5wYWRFbmQodmFsdWUpO1xuICAgICQucGFkU3RhcnQgPSAodmFsdWUpID0+ICQuc3RyaW5nLnBhZFN0YXJ0KHZhbHVlKTtcbiAgICAkLmVhY2ggPSAoY2FsbGJhY2spID0+IGNhbGxiYWNrID8gJC5zdHJpbmcuc3BsaXQoJycpLmZvckVhY2goY2FsbGJhY2spIDogJC5zdHJpbmcuc3BsaXQoJycpO1xuXG4gICAgcmV0dXJuICQ7XG59XG5cblN0ci5ub2RlMnN0ciA9IG5vZGUyc3RyO1xuU3RyLnN0cjJub2RlID0gc3RyMm5vZGU7XG5TdHIuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5TdHIuZWFjaCA9IGVhY2g7XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RyO1xuIiwiLyoqXG4gKiBTaW1wbGUgdGltZXIgcmVhbGlzZS4gUmV0dXJuIHNlbGYtaW5zdGFuY2VcbiAqIHRpbWVyID0gbmV3IC5UaW1lcihmdW5jdGlvbihpdGVyYXRvciwgcmVwZWF0KXt9LCAxMDAwLCA1KVxuICogIEluc3RhbmNlIG1ldGhvZHNcbiAqICAgICAgdGltZXIucmVwZWF0XG4gKiAgICAgIHRpbWVyLml0ZXJhdG9yXG4gKiAgICAgIHRpbWVyLnN0YXJ0ICgpXG4gKiAgICAgIHRpbWVyLnN0b3AgKClcbiAqICAgICAgdGltZXIucGF1c2UgKClcbiAqICAgICAgdGltZXIucmVzZXQgKClcbiAqICAgICAgdGltZXIuY2xlYXIgKClcbiAqICBTdGF0aWMgbWV0aG9kc1xuICogICAgICBUaW1lci50aW1lb3V0IChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSA6IHRpbWVvdXRJZFxuICogICAgICBUaW1lci5pbnRlcnZhbCAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkgOiBpbnRlcnZhbElkXG4gKiAgICAgIFRpbWVyLnRpbWVvdXRTdG9wICh0aW1lb3V0SWQpXG4gKiAgICAgIFRpbWVyLmludGVydmFsU3RvcCAoaW50ZXJ2YWxJZClcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIGRlbGF5XG4gKiBAcGFyYW0gcmVwZWF0XG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlICBpZiBub3Qgc2V0LCB1c2VzIGluc3RhbmNlIG9mIFRpbWVyXG4gKiBAcmV0dXJucyB7V2luZG93LlRpbWVyfFRpbWVyfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGltZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFRpbWVyKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpO1xuXG4gICAgZGVsYXkgPSBkZWxheSAhPT0gdW5kZWZpbmVkID8gcGFyc2VJbnQoZGVsYXkpIDogNTAwO1xuICAgIHJlcGVhdCA9IHJlcGVhdCAhPT0gdW5kZWZpbmVkID8gcGFyc2VJbnQocmVwZWF0KSA6IDA7XG4gICAgY29uc3QgY29uZmlnID0ge3NlbGY6IHRoaXMsIGNhbGxiYWNrOiBjYWxsYmFjaywgZGVsYXk6IGRlbGF5LCByZXBlYXQ6IHJlcGVhdH07XG5cbiAgICBsZXQgaHQgPSBudWxsO1xuICAgIGNvbnN0IGhjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25maWcuc2VsZi5pdGVyYXRvcisrO1xuICAgICAgICBpZiAoY29uZmlnLnJlcGVhdCAhPT0gMCAmJiBjb25maWcucmVwZWF0IDw9IGNvbmZpZy5zZWxmLml0ZXJhdG9yKVxuICAgICAgICAgICAgY29uZmlnLnNlbGYuc3RvcCgpO1xuICAgICAgICBjb25maWcuY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwgdGhpcywgY29uZmlnLnNlbGYuaXRlcmF0b3IsIGNvbmZpZy5yZXBlYXQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29uZmlnLnJlcGVhdCA9PT0gMCB8fCBjb25maWcucmVwZWF0ID4gY29uZmlnLnNlbGYuaXRlcmF0b3IpXG4gICAgICAgICAgICBodCA9IHNldEludGVydmFsKGhjLCBjb25maWcuZGVsYXkpO1xuICAgIH07XG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLml0ZXJhdG9yID0gY29uZmlnLnJlcGVhdDtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpXG4gICAgfTtcbiAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLml0ZXJhdG9yID0gMFxuICAgIH07XG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChodClcbiAgICB9O1xufTtcblxuVGltZXIudGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuaW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci50aW1lb3V0U3RvcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFyVGltZW91dChpZClcbn07XG5UaW1lci5pbnRlcnZhbFN0b3AgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhckludGVydmFsKGlkKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvc3RyMmZyYWdtZW50XCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgZW5jb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9lbmNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGRlY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZGVjb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vc3RhdGljL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBkZWZpbmVkSW4gZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkSW5cIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGV4dGVuZCwge2V4dGVuZFJlY3Vyc2l2ZX0gIGZyb20gXCIuLi9zdGF0aWMvZXh0ZW5kXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4uL3N0YXRpYy9mb3JtYXRcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IGxvYWRKU1N5bmMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNTeW5jXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IG51bWJlcjJzdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9udW1iZXIyc3RyaW5nXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJhbmRvbSwge3JhbmRvbUNvbG9yLCByYW5kb21JdGVtLCByYW5kb21OdW1iZXIsIHJhbmRvbVN0cmluZ30gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gXCIuLi9zdGF0aWMvdXJpXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgVXRpbCA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lOiBjb3B5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=