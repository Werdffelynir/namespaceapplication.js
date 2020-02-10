(() => {

    const template = `
<div class="table width-80 height-100">
    <div class="text-center">
        <h2>{title}</h2>
        <div class="font-mono">{detail}</div>
    </div>
</div>
`;

    NamespaceApplication.component({
        id: 'TaskComponent',
        template: template,
        init: function (app) {
            console.log('TaskComponent::init');
            this.app = app;
        },
        render: function () {}
    });

})();
