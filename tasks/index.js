
const {domLoaded} = Util;


domLoaded(() => {
    const app = new ComponentApplication({
        id: '#app',
        message: {error: ''},
    });

    console.dir(app.component);
    console.dir(ComponentApplication.component);

    app.component({id: 'ErrorComponent', show: (error, detail) => {
        Util.inject(app.id,
            `<div class="table width-80 height-100"><div class="text-center"><h2>${error}</h2><div class="font-mono">${detail}</div></div></div>`)
    }});

    app.require({
        css: [],
        js: [
            '/tasks/src/common/ButtonComponent.js',
            '/tasks/src/common/HeaderComponent.js',
            '/tasks/src/MainComponent.js',
            '/tasks/src/ListComponent.js',
            '/tasks/src/TaskComponent.js',
            '/tasks/src/FormComponent.js',
        ],
        complete: (complete) => {
            app.component('MainComponent').show();
        },

        error: (error) => {
            app.component('ErrorComponent').show('Error stopping the process at boot', error.target.href || error.target.src);
            console.log('error', error);
        },
    });

    console.log("------------------------------------\n", app, "\n------------------------------------\n");
});




/*
app.extension({
    id: 'BeforeComponent',
    template: `<h1>BeforeComponent</h1>`,
    before: () => {
        console.log('BeforeComponent::before');
    },
    init: (app) => {
        console.log('BeforeComponent::init');
        inject('#app',  this.template, true)
    }
});
*/




//console.log('BeforeComponent init');


/*

ComponentApplication.extension({id: 'extension_001', init: function () {
        // console.log('extension', this);
}});
ComponentApplication.extension({id: 'extension_002', init: function () {
        // console.log('extension', this);
}});
ComponentApplication.extension({id: 'extension_003', init: function () {
        // console.log('extension', this);
}});
ComponentApplication.extension({id: 'extension_004', init: function () {
        // console.log('extension', this);
}});


*/

/*

const {
    domLoaded,
    inject
} = util;

ComponentApplication.component({
    id: 'BeforeComponent',
    template: `<h1>BeforeComponent</h1>`,
    before: () => {
        //console.log('BeforeComponent before');
    },
    init: (app) => {
        //console.log('BeforeComponent init');
        inject('#app',  '<br><hr><br>', true)
    }
});

domLoaded(function () {

    const app = new ComponentApplication({
        selector: '#app'
    });

    const template = `
<h1>MainComponent</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
`;
    app.component({
        id: 'MainComponent',
        template: template,
        before: function () {},
        init: function (app) {
            inject('#app',  this.template, true)
        },
    });

    // console.log('app', app);
});



*/
