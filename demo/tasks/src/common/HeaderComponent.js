(() => {
    NamespaceApplication.component({
        id: 'HeaderComponent',
        menu: {
            '': '',
        },
        init: function (app) {
            console.log('HeaderComponent::init');
        },
        create: function (label, attr = {}) {
            attr = {...attr, ...{'class': 'menu-top'}};
            return Util.createElement('ul', attr, label);
        }
    });
})();
