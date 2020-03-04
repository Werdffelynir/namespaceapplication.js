let { Storage } = NamespaceApplication;

let storeName = 'DEFAULT_COOKIE_NAME';

function s () {
    Storage.set(storeName, {a: 1, b:2, c: 3});
    console.log(Storage.get(storeName));
    console.log(Storage.size());
    console.log(Storage().length());
}

s();


