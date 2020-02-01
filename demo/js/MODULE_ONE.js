let i = 0;
NamespaceApplication.extension('MODULE_ONE', (app) => {
    console.log('MODULE_ONE ' + (i ++));
    return {};
});