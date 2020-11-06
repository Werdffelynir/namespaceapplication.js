import copy from "../static/copy";
import typeOf from "../static/typeOf";


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
const Roxy = function (payload)
{
    const actions = {default:null};

    const proxy = new Proxy(payload, {
        get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set(obj, prop, value) {
            if (actions[prop] && typeof actions[prop] === "function")
                actions[prop].call({}, prop, value, copy(proxy));

            if (typeof actions.default === "function")
                actions.default.call({}, prop, value, copy(proxy));

            obj[prop] = value;
            return true;
        }
    });

    return {

        dispatch (key, payload) {
            this.set (key, payload);
            return this;
        },

        /**
         * @deprecated
         * @param key
         * @param payload
         * @returns {Roxy}
         */
        set (key, payload) {
            let result;

            if (typeof key === "function" && !payload) {
                result = key.call({}, proxy);
                if (result)
                    this.fill(result)

            } else if (typeof payload === "function") {
                result = payload.call({}, proxy[key]);
                if (result)
                    proxy[key] = result;

            } else
                proxy[key] = payload;

            return this;
        },

        action (key, callback) {
            if (typeof key === "function" && !callback) {
                actions.default = key;
            } else
                actions[key] = typeof callback === "function" ? callback : null;

            return this;
        },

        get (key) {
            return key ? proxy[key] : copy(proxy);
        },

        fill (payload, to) {
            Object.keys(payload).forEach((key) => {
                if (to) {
                    if (!proxy[to])
                        proxy[to] = {};
                    proxy[to][key] = payload[key]
                } else {
                    proxy[key] = payload[key]
                }
            });

            return this;
        },

        proxy,
    };
};


export default Roxy;

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
export const RoxyListener = function (payload) {

    const actions = {
        __action__ () {}
    };

    const actionsNames = {};

    Object.keys(payload).map(function(event_name, index) {
        actions[event_name] = payload[event_name];

       if (typeof payload[event_name] === 'function' && event_name !== actions.__action__.name ) {
           actionsNames[event_name] = '';
       }
    });

    const rx = Roxy(actionsNames);

    rx.actions = function () {
        return actionsNames
    };

    rx.action((event_cursor, values) => {
        actions.__action__.call(actions, event_cursor, values);

        Object.keys(actions).map(function (event_name, index) {

            if (event_cursor === event_name && typeof actions[event_name] === 'function') {
                actions[event_name].call(actions, event_cursor, values);
            }
        })
    });

    return rx;
};
