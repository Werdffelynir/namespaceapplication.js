(() => {

    const template = `
<div class="table">
    <div>
        <div># 0000</div>
        <div>Detail</div>
    </div>
    <div>
        <div># 0000</div>
        <div>Detail</div>
    </div>
    <div>
        <div># 0000</div>
        <div>Detail</div>
    </div>
    <div>
        <div># 0000</div>
        <div>Detail</div>
    </div>
</div>
`;

    NamespaceApplication.component({
        id: 'ListComponent',
        template: template,
        init: function (app) {
            console.log('ListComponent::init');
        },
        create: function () {
            return this.template
        }
    });

})();
