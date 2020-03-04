

let { Cookie } = NamespaceApplication;

let name = 'DEFAULT_COOKIE_NAME';

function c (v) {
    // Cookie.set(name, v);
    // console.log(Cookie.get(name));
    let vs = Cookie.get(name);
    if (!Array.isArray(vs)) {
        vs = [];
    }

    v = [...vs, ...[v]];

    Cookie.set(name, v, {maxAge: 60 * 60 * 24 * 365, path: '/',  samesite: 'Lax'});

    console.log(Cookie.get(name));
}

c(1);
c(2);
c(3);




app = new NamespaceApplication();
app.component({
    id: 'CookiesComponent',
    template: `
<div>
    <h2 data-node="title">Cookies test</h2>
    <pre data-node="result"></pre>
    <div>
        <input type="text" on-input="text" />
        <button on-click="add">Add one Cookie</button>
        <button on-click="rm">Remove one Cookie</button>
    </div>
</div>`,
    init () {
        //console.log('Component init');
    },
    complete (app) {
        //console.log('Component complete');
        // appElement.inject(this.template);
    },
    data: {
        name: 'DEFAULT_COOKIE_NAME',
        value: '',
        cookies: Cookie.get('DEFAULT_COOKIE_NAME'),
    },
    methods: {
        add (e) {
            if (this.value.length) {
                Cookie.set(this.data.name, this.data.value);
            }
            this.methods.show.call(this);
        },
        rm (e) {
            Cookie.remove(this.name);
            this.methods.show();
        },
        text (e) {
            this.value = e.target.value ;
        },
        show () {
            console.log(this);
            this.node.result.textContent = Cookie.get(this.data.name);
        },

    }
});



