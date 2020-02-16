## Component
```js
    const app = new NamespaceApplication({
    
    });

    app.component({
        id: 'ExampleComponent',
        styles: {}, // { '.title': {color: 'red'} }
        template: `
<div class="dashboard" data-node="dashboard">

</div>`,
        override: false,
        init () {
            // this.template has type of string
        },
        complete (app) {
            // component initialized and completed, app it is instance of NamespaceApplication
            // this.template has type of NodeElement
            Dom('#app').inject(this.template);
        },
        methods: { 
            // for node attr [on-click="send"]
            send(e){},
        }
        
        // INTERNAL PROPERTIES -----------------------------------
        // node: {}, NodeElements from [data-node]
        // initialized: false, true when method init() executed
        // completed: false, true when method complete() executed
    });
```