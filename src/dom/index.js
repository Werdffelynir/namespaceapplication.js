import typeOf from "../static/typeOf";
import isNode from "../static/isNode";

import attr from "../static/attr";
import css from "../static/css";
import domLoaded from "../static/domLoaded";
import inject from "../static/inject";
import str2node from "../static/str2node";
import node2str from "../static/node2str";
import search from "../static/search";
import query from "../static/query";
import queryAll from "../static/queryAll";
import createFragment from "../static/createFragment";
import createElement from "../static/createElement";
import on from "../static/on";
import defined from "../static/defined";

function Dom (selector) {
    const _ = {
        selector: selector,
        selected: queryAll(selector),
    };

    const _set_real_display_style = function (src) {
        if (typeOf(src, 'string')) {
            queryAll(src).map(_set_real_display_style);
        } else if (isNode(src) && src['real-display-style'] === undefined) {
            const style = src.style.display ? src.style.display : getComputedStyle(src).display;
            src['real-display-style'] = (!style || style === 'none') ? 'block' : style;
        }
    };

    _.one = () => _.selected && _.selected.length ? _.selected[0] : false;
    _.all = () => _.selected;
    _.attr = (name, value) => defined(value) ? attr(_.one(), name, value) : attr(_.one(), name);
    _.inject = (data, append, to) => inject(_.one(), data, append, to);
    _.append = (data) => inject(_.one(), data, true);
    _.search = (attr, from) => search(_.one(), attr, from);
    _.parent = () => _.one().parentNode;
    _.remove = () => _.one().parentNode.removeChild(_.one());
    _.show = () => {
        const src = _.one();
        _set_real_display_style(src);
        css(src, {display: src && src['real-display-style'] ? src['real-display-style'] : 'block'});
    };
    _.hide = () => {
        const src = _.one();
        _set_real_display_style(src);
        css(src, {display: 'none'});
    };
    _.toggle = () => {
        const src = _.one();
        if (typeOf(src, 'string')) {
            queryAll(src).map(Dom.toggle);
        } else if (isNode(src)) {
            if (src.style.display === 'none') Dom.show(src);
            else Dom.hide(src);
        }
    };
    _.on = (eventName, callback, bubble) => on(_.one(), eventName, callback, bubble);

    return _;
}

Dom.attr = attr;
Dom.css = css;
Dom.loaded = domLoaded;
Dom.inject = inject;
Dom.str2node = str2node;
Dom.search = search;
Dom.queryAll = queryAll;
Dom.query = query;
Dom.create = createElement;
Dom.fragment = createFragment;
Dom.node2str = node2str;
Dom.str2node = str2node;

export default Dom;
