const renderElem = vNode => {
    // create the element
    // e.g. <div></div>
    const $el = document.createElement(vNode.tagName);

    // add all attributes as specified in vNode.attrs
    // e.g. <div id="app"></div>
    Object.entries(vNode.attrs).forEach(([key, val]) => {
        $el.setAttribute(key, val);
    });

    // append all children as specified in vNode.children
    // e.g. <div id="app"><img></div>
    for (const child of vNode.children) {
        $el.appendChild(render(child));
    }

    return $el;
};

const render = vNode => {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    // we assume everything else to be a virtual element
    return renderElem(vNode);
};

export default render;
