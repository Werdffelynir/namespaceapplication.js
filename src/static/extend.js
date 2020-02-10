
export const extend = function (destination, source) {
    let property;
    for (property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            extend(destination[property], source[property]);
        } else
            destination[property] = source[property];
    }
    return destination;
};

export const extendObject = function (destination, source) {
    for (let param in source)
        if (source.hasOwnProperty(param))
            destination[param] = source[param];

    function __() {
        this.constructor = destination;
    }

    __.prototype = source.prototype;
    destination.prototype = new __();
};

export default extend;
