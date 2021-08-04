import typeOfStrict from "./typeOfStrict";

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
const typeOf = function (value, type) {
    const simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    let t = typeOfStrict(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && typeof value === 'object')
        t = 'object';

    return typeof type === 'string' ? type.toLowerCase() === t : t;
};

export default typeOf;
