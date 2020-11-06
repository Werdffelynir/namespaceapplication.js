
app = new NamespaceApplication();

app.component({
    id: 'StylesComponent',
    styles: {
        '.counter>span:nth-child(1)': {textAlign: 'right', width: '45%'},
        '.counter>span:nth-child(2)': {textAlign: 'center'},
        '.counter>span:nth-child(3)': {textAlign: 'left', width: '45%'},
        '.counter button': {padding: '1rem 3rem'},
        '[data-node="title"]': {
            fontSize: '40px'
        },
    },
    template: `
<div>
<h2 data-node="title">the story</h2>
<h4 data-node="text">Lorem ipsum {dolor} sit amet.</h4>
<div class="table counter">
    <span><button on-click="min">-</button></span>
    <span><h1 data-node="iterator">0</h1></span>
    <span><button on-click="plus">+</button></span>
</div>
<button on-click="hello">Say Hello</button>
<img on-load="imgLoaded" src="/demo/assets/images/icons/icons8-about-50.png">
</div>`,
    init () {
    },
    complete (app) {
        // console.log(app);
        Dom('#app').inject(this.template);
    },
    methods: {
        hello (e) {
            alert('hello event');
        },
        plus (e) {
            this.node.iterator.textContent = parseInt(this.node.iterator.textContent) + 1;
        },
        min (e) {
            this.node.iterator.textContent = parseInt(this.node.iterator.textContent) - 1;
        },
        imgLoaded (e, target) {
            console.log('img is loaded', target);
        },
    }
});
