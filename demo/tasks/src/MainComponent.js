(() => {

    let { Roxy, Store, Dom } = NamespaceApplication;

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
        list: Store('tasks') || [],
        current: null
    });

    app.component({
        id: 'TaskComponent',
        template:  `<div></div>`,
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

    const templateTaskOpen = `
<div>
    <div data-node="id" class="hide"></div>
    <div class="table">
        <span data-node="name"></span>
        <span class="text-right">
            <button on-click="remove">Remove</button>
            <button on-click="close">Close</button>
        </span>
    </div>
    <div data-node="description">{TEXT}</div>
    <h4>Comment</h4>
    <div data-node="comment">{TEXT}</div>
    <div>
        <textarea on-change="changeComment" class="width-100"></textarea>
        <button on-click="addComment">Add comment</button>
    </div>
</div>`;
    app.component({
        id: 'TaskOpenComponent',
        template: templateTaskOpen,
        data: {
            comment: null
        },
        init () {},
        complete (app) {},
        render (values) {
            if (values && values.id) {
                values['date'] = values['date'].split('GMT')[0].trim();
                const description = Util.format(`
                    <strong>Description:</strong> {description} <br />
                    <strong>Date create:</strong> {date} <br />
                    <strong>Date start:</strong> {date_start} <br />
                    <strong>Date end:</strong> {date_end} <br />
                `, values);
                this.node['id'].textContent = values['id'];
                this.node['name'].textContent = values['name'];
                this.node['comment'].innerHTML = values['comment'];
                this.node['description'].innerHTML = description;
                Dom(this.template).show();
            } else {
                this.node['id'].textContent = '';
                this.node['name'].textContent = '';
                this.node['comment'].textContent = '';
                this.node['description'].textContent = '';
                Dom(this.template).hide();
            }
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
                    proxy.current = {id: false};
                    proxy.list = arr;
                    app.component('MainComponent').node['sidebar'].textContent = '';
                });
                this.render({});
            },
            changeComment (e) {
                this.data.comment = {
                    id: this.node["id"].textContent,
                    target: e.target,
                    text: e.target.value,
                };
            },
            close (e) {
                RxList.set('current', {id: false});
            },
            addComment (e) {
                if (this.data.comment) {
                    const comment = this.data.comment;
                    RxList.set((proxy) => {
                        proxy.list.forEach((it, i) => {
                            if (it.id === comment.id) {
                                it.comment += "<br># " + comment.text;
                                this.node['comment'].innerHTML = it.comment;
                                comment.target.value = ''
                            }
                        });
                        proxy.list = [...proxy.list]
                        // Store('tasks', proxy.list);
                    });
                    this.data.comment = null;
                }
            },
        }
    });

    const templateMain = `
<style>
#main {
font-size: 10px;
}
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
    padding: 10px;
    border: 1px solid #b1b6ff;
}
.create input[type="date"]{
    padding: 7.5px;
    width: 140px;
}
.create textarea{
    width: 100%;
    height: 60px;
    border: 1px solid #b1b6ff;
}

.create button{
    padding: 1.1rem;
    border: 1px solid #b1b6ff;
}
.create {}
</style>
<div id="main" class="table width-100 height-100">
    <div class="width-70 valign-top create">
        <div class="table ">
            <div class="width-45">
                <input on-input="name" type="text" class="">
            </div>
            <div class="text-right">
                <input type="date"> - <input type="date">
            </div>
            <div class="width-15 text-right">
                <button on-click="add">Add task</button>
            </div>
        </div>
        <textarea></textarea>
        <div data-node="content"></div>
    </div>
    <div id="sidebar" class="valign-top" data-node="sidebar"></div>
</div>`;
    app.component({
        id: 'MainComponent',
        template: templateMain,
        state: {},
        data: {name: '',},
        init: function (app) {},
        complete: function (app) {
            Util.inject('#app', this.template);

            RxList.action('list', (key, values) => {
                this.node.content.textContent = '';
                console.log('Set to Store', values);
                Store('tasks', values);
                const tasks = app.component('TaskComponent').render(values);
                this.node.content.appendChild(tasks);
            });

            RxList.action('current', (key, values) => {
                if (values) {
                    const task = app.component('TaskOpenComponent').render(values);
                    this.node['sidebar'].appendChild(task);
                }
            });

            if (Store('tasks')) {
                RxList.set('list', Store('tasks'));
            }
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

})();
