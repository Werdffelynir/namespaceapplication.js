import queryAll from './queryAll';

/**
 *
 * @param selector
 * @param fromCallback
 * @param thisInstance
 * @returns {Node|boolean}
 */
const query = function (selector, fromCallback, thisInstance) {
    const elements = queryAll(selector, fromCallback, thisInstance);
    return elements && elements[0] ? elements[0] : false;
};

export default query;
