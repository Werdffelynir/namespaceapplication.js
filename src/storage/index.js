
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
 * Returns an integer representing the number of data items stored in the Storage object.
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
 * @returns {{set: (Storage.set|*), get: (Storage.get|*), key: (Storage.key|*), clear: (Storage.clear|*), remove: (Storage.remove|*), length: (Storage.length|*)}}
 * @constructor
 */
const Storage = function (name, value) {
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
Storage.set = set;
Storage.get = get;
Storage.key = key;
Storage.clear = clear;
Storage.remove = remove;
Storage.size = length;

export {
    set,
    get,
    key,
    clear,
    remove,
    length,
};

export default Storage;
