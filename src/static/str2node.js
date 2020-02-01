

const str2node = function (string) {
    let i, fragment = document.createDocumentFragment(),
        container = document.createElement("div");
    container.innerHTML = string;

    while (i = container.firstChild)
        fragment.appendChild(i);

    return fragment.childNodes.length === 1 ? fragment.firstChild : fragment;
};

export default str2node;
