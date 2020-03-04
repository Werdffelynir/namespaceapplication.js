import copy from "../static/copy";

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

        fill (payload) {
            Object.keys(payload).forEach((key) => {
                proxy[key] = payload[key]
            });

            return this;
        },
        proxy,
    };
};

export default Roxy;
