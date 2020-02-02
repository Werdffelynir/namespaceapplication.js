function isNA (v) {
    //console.log(v);
    return (v instanceof NamespaceApplication) ? 'app is NamespaceApplication' : 'app fail'
}

/*
*/
NamespaceApplication.extension({
    id: 'EXT0',
    init() {console.log('EXT0::init', this.id)},
    complete(app) {console.log('EXT0::complete', this.id, isNA(app))},
});

NamespaceApplication.extension({
    id: 'EXT1',
    init() {console.log('EXT1::init', this.id)},
    complete(app) {console.log('EXT1::complete', this.id, isNA(app))},
});


NamespaceApplication.component({
    id: 'COM0',
    init: function () {console.log('COM0::init', this.id)},
    complete: function (app) {console.log('COM0::complete', this.id, isNA(app))},
});

const app = new NamespaceApplication({
    id: 'Namespace Application',
    url: '/components/index.html',
});

app.component({
    id: 'COM1',
    init: function () {console.log('COM1::init', this.id)},
    complete: function (app) {console.log('COM1::complete', this.id, isNA(app))},
});
