(() => {

    const template = `
<style>
#main {}
#header {
    background: #303030;
    color: #e0e0e0;
}
#sidebar {
    background: #edf2ff;
    color: #656565;
    padding: 1rem;
    border-left: 1px solid #b1b6ff;
}
#content {}
.list-item {
    padding: 0.7rem;
    background: #edf2ff;
    border-bottom: 1px solid #b1b6ff;
}
.create {}
.create input{
    padding: 0.8rem;
    font-size: 1.3rem;
    border: 1px solid #b1b6ff;
}
.create button{
    padding: 1.1rem;
    border: 1px solid #b1b6ff;
}
.create {}
</style>
<div id="main" class="table width-100 height-100">
    <div class="width-70 valign-top">
        <div class="table create">
            <div>
                <input  on-input="name" type="text" class="width-100"></div>
            <div class="text-right">
                <button on-click="add">Add task</button></div>
        </div>
        <div data-node="content"></div>
    </div>
    <div id="sidebar" class="valign-top" data-node="sidebar"></div>
</div>
`;

    const app = new NamespaceApplication({
        id: '#app',
        selected: null,
    });

    const Item = {
        id: 0,
        name: '',
        description: '',
        comment: '',
        date: '',
        date_start: '',
        date_end: '',
        closed: '',
    };

    const RxList = Roxy({
        iterator: 0,
        list: [],
        current: null
    });


    app.component({
        id: 'MainComponent',
        template: template,
        state: {},
        data: {
            name: '',
        },
        init: function (app) {
            console.log('MainComponent::init');
        },
        complete: function (app) {
            Util.inject('#app', this.template);

            RxList.action('list', (key, values) => {
                this.node.content.textContent = '';
                const tasks = app.component('TaskComponent').render(values);
                this.node.content.appendChild(tasks);
            });
            RxList.action('current', (key, values) => {
                if (values) {
                    const task = app.component('TaskOpenComponent').render(values);
                    this.node['sidebar'].appendChild(task);
                }
            });
        },
        methods: {
            name(e) {
                this.data.nameTarget = e.target;
                this.data.name = e.target.value;
            },
            add(e) {
                RxList.set((proxy) => {
                    proxy.list.push({
                        ...Item, ...{
                            id: '_tmp_' + proxy.list.length,
                            name: this.data.name,
                            date: Date(),
                        }
                    });
                    this.data.nameTarget.value = '';
                    return proxy;
                });
            },
        }
    });


    app.component({
        id: 'TaskComponent',
        template: `<div></div>`,
        init () {},
        complete (app) {},
        render (values) {
            const list = Util.createFragment();
            values.forEach((item) => {
                list.appendChild(this.createItem(item));
            });
            this.template.textContent = '';
            this.template.appendChild(list);
            return this.template;
        },
        createItem (item) {
            const line = Util.createElement('div', {class: 'table list-item'},
                Util.createElement('div', {}, item.name + ' ' + item.date));

            Util.on(line, 'click', () => {
                RxList.set('current', item);
            });

            return line;
        },
        data: {
            iterator: 0,
        },
        methods: {
            open (e) {
                console.log('open event')
            },
        }
    });

    app.component({
        id: 'TaskOpenComponent',
        template: `
<div>
    <div class="table">
        <span data-node="name">The story</span>
        <span class="text-right"><button on-click="remove">remove</button></span>
    </div>
    <div data-node="id" class="hide">{TEXT}</div>
    <div data-node="description">{TEXT}</div>
    <div data-node="comment">{TEXT}</div>
    <div data-node="date">{TEXT}</div>
    <div data-node="date_start">{TEXT}</div>
    <div data-node="date_end">{TEXT}</div>
    <div data-node="closed">{TEXT}</div>
    <div> 
        <textarea on-change="comment" class="width-100"></textarea></div>
</div>`,
        init () {},
        complete (app) {},
        render (values) {
            Object.keys(values).forEach((key) => {
                if (this.node[key])
                    this.node[key].textContent = values[key];
            });
            return this.template;
        },
        methods: {
            remove (e) {
                const id = this.node["id"].textContent;
                RxList.set((proxy) => {
                    let arr = [];
                    proxy.list.forEach((it, i) => {
                        if (it['id'] !== id) {
                            arr.push(it);
                        }
                    });
                    proxy.list = arr;
                    app.component('MainComponent').node['sidebar'].textContent = '';
                });
            },
            comment (e) {
                const id = this.node["id"].textContent;

                RxList.set('list', (proxy) => {
                    proxy.list.forEach((it, i) => {
                        if (it.id === id)
                            it.comment += "\n" + e.target.value;
                    });
                });
            },
        }
    });


})();
