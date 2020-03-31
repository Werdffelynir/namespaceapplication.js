
/**
 * Add item by name
 * @param name
 * @param value
 * @param json
 */
const set = function (name, value, json = true) {
    if (json)
        try {
            value = JSON.stringify(value);
        } catch (error) {}
    return window.sessionStorage.setItem(name, value);
};

/**
 * Get item by name
 * @param name
 * @param json
 */
const get = function (name, json = true) {
    let value = window.sessionStorage.getItem(name);
    if (json && value)
        try {
            value = JSON.parse(value);
        } catch (error) {}
    return value;
};

/**true
 * Remove item by name
 * @param name
 */
const remove = function (name) {
    return window.sessionStorage.removeItem(name)
};

/**
 * Get item by index
 * @param index
 * @returns {string}
 */
const key = function (index) {
    return window.sessionStorage.key(index)
};

/**
 * When invoked, will empty all keys out of the SessionStorage.
 */
const clear = function () {
    return window.sessionStorage.clear()
};

/**
 * Returns an integer representing the number of data items stored in the SessionStorage object.
 * @returns {number}
 */
const length = function () {
    return window.sessionStorage.length
};

/**
 * SessionStorage wrapper
 *
 * @param name
 * @param value
 * @returns {{set: (SessionStorage.set|*), get: (SessionStorage.get|*), key: (SessionStorage.key|*), clear: (SessionStorage.clear|*), remove: (SessionStorage.remove|*), length: (SessionStorage.length|*)}}
 * @constructor
 */
const SessionStorage = function (name, value) {
    switch (arguments.length) {
        case 0:
            return {
                set: set,
                get: get,
                key: key,
                clear: clear,
                remove: remove,
                length: length,
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

export {
    set,
    get,
    key,
    clear,
    remove,
    length,
};

export default SessionStorage;
