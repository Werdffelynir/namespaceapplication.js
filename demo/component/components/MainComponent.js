(() => {

    const template = `
<style>
#main {}
#header {
    background: #303030;
    color: #e0e0e0;
}
#sidebar {
    background: #3a3a3a;
    color: #e0e0e0;
}
#content {}
</style>
<div id="main" class="table width-100 height-100">
    <div id="sidebar" class="valign-top"></div>
    <div class="width-70 valign-top">
        <div id="header">{header}</div>
        <div id="content">{content}</div>
    </div>
</div>
`;

    ComponentApplication.component({
        id: 'MainComponent',
        template: template,
        init: function (app) {
            console.log('MainComponent::init');
        },
        show: function () {
            Util.inject('#app', this.render());
        },
        render: function () {

            const header = ComponentApplication.component('HeaderComponent').create();
            const content = ComponentApplication.component('ListComponent').create();

            return Util.format(this.template, {header, content});
        },
    });


})();
