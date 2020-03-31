/**
 * Example:
 * const chain = new Chain(onSuccess, onError);
 * chain.add('Test begin', function (next) {
 * }).add('Next model', function (next) { next()
 * }).add('Last model', function (next) { next()
 * }).next();
 *
 * @returns {Function}
 * @constructor
 */
const Chain = function (ons, onf) {
    "use strict";
    const _createClass = function () {
        function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
                const descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    const Chain = function () {
        function Chain(onSuccess, onFailed) {
            _classCallCheck(this, Chain);

            this._onsuccess = onSuccess;
            this._onfailed = onFailed;
            this._currentIndex = 0;
            this._callbacks = [];
        }

        _createClass(Chain, [{
            key: "register",
            value: function register(id, callback) {
                this._callbacks.push({id: id, callback: callback});
            }
        }, {
            key: "next",
            value: function next() {
                const _this = this;

                const registered = this._callbacks[this._currentIndex];
                if (registered) {
                    if (registered.callback instanceof Function) {
                        registered.callback.call({}, function () {
                            _this._currentIndex++;
                            _this.next();
                        }, registered.id);
                    } else {
                        this._onfailed();
                    }
                } else {
                    this._onsuccess();
                }
            }
        }]);

        return Chain;
    }();

    return new Chain(ons, onf)
};

export default Chain;