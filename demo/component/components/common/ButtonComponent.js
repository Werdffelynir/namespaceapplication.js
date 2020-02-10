(() => {
    ComponentApplication.component({
        id: 'ButtonComponent',
        init: function (app) {
            console.log('ButtonComponent::init');
        },
        create: function (label, attr) {
            attr = {...attr, ...{'class': 'button'}};
            return Util.createElement('div', attr, Util.createElement('div', {}, label));
        }
    });
})();
