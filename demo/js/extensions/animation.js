
const animation = function (app) {
    return this;
};
animation.fps = 60;
animation.move = () => {};

NamespaceApplication.extension('animation', animation);