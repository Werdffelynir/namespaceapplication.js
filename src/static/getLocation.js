
const getLocation = function () {
    if (location)
        return location;
    else
        throw new Error('document object not exist!');
};

export default getLocation;
