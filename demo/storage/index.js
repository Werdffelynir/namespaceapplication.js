let { Store } = NamespaceApplication;

let storeName = 'DEFAULT_COOKIE_NAME';

function s () {
    Store.set(storeName, {a: 1, b:2, c: 3});
    console.log(Store.get(storeName));
    console.log(Store.size());
    console.log(Store().length());
}

s();


