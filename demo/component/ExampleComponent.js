
app = new NamespaceApplication();

app.component({
    id: 'ExampleComponent',
    template: `
<div>
    <h2 data-node="title">The story</h2>
    <h4 data-node="text" class="text-center">Lorem ipsum {dolor} sit amet.</h4>
    <h1 data-node="iterator" class="text-center">0</h1>
    <button on-click="hello">Say Hello</button>
    <button on-click="plus">Plus one</button>
    <button on-click="min">Min one</button>
    <input type="text" on-input="text" />
</div>`,
    init () {
        console.log('Component init');
    },
    complete (app) {
        console.log('Component complete');
        Dom('#app').inject(this.template);
    },
    data: {
        iterator: 0,
    },
    methods: {
        hello (e) {
            alert('hello event');
        },
        plus (e) {
            this.node.iterator.textContent = ++ this.data.iterator ;
        },
        min (e) {
            this.node.iterator.textContent = -- this.data.iterator ;
        },
        text (e) {
            this.node.text.textContent = e.target.value ;
        },
    }
});