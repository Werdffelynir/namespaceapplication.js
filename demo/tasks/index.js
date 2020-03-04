
Util.domLoaded(() => {
    const app = new NamespaceApplication({
        id: '#app',
        message: {error: ''},
    });

    app.component({id: 'ErrorComponent', render: (error, detail) => {
        Util.inject(app.id,
            `<div class="table width-80 height-100"><div class="text-center"><h2>${error}</h2><div class="font-mono">${detail}</div></div></div>`)
    }});

    app.dependency({
        css: [],
        js: [
            '/demo/tasks/src/MainComponent.js',
        ],
        complete (list) {
            app.component.register(app);
        },

        error (error) {
            app.component('ErrorComponent').render('Error stopping the process at boot', error.target.href || error.target.src);
            console.log('error', error);
        },
    });

    console.log("------------------------------------\n", app, "\n------------------------------------\n");
});
