
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
    return window.localStorage.setItem(name, value);
};

/**
 * Get item by name
 * @param name
 * @param json
 */
const get = function (name, json = true) {
    let value = window.localStorage.getItem(name);
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
    return window.localStorage.removeItem(name)
};

/**
 * Get item by index
 * @param index
 * @returns {string}
 */
const key = function (index) {
    return window.localStorage.key(index)
};

/**
 * When invoked, will empty all keys out of the storage.
 */
const clear = function () {
    return window.localStorage.clear()
};

/**
 * Returns an integer representing the number of data items stored in the Store object.
 * @returns {number}
 */
const length = function () {
    return window.localStorage.length
};

/**
 * LocalStorage wrapper
 *
 * @param name
 * @param value
 * @returns {{set: (Store.set|*), get: (Store.get|*), key: (Store.key|*), clear: (Store.clear|*), remove: (Store.remove|*), length: (Store.length|*)}}
 * @constructor
 */
const Store = function (name, value) {
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
Store.set = set;
Store.get = get;
Store.key = key;
Store.clear = clear;
Store.remove = remove;
Store.size = length;

export {
    set,
    get,
    key,
    clear,
    remove,
    length,
};

export default Store;
