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
import position from "../static/position";
import merge from "../static/merge";

function Dom (selector) {
    const $ = {
        selector: typeOf(selector, 'string') ? selector : null,
        selected: isNode(selector) ? [selector] : queryAll(selector),
    };

    const _set_real_display_style = function (src) {
        if (typeOf(src, 'string')) {
            queryAll(src).map(_set_real_display_style);
        } else if (isNode(src) && src['real-display-style'] === undefined) {
            const style = src.style.display ? src.style.display : getComputedStyle(src).display;
            src['real-display-style'] = (!style || style === 'none') ? 'block' : style;
        }
    };

    $.one = () => $.selected && $.selected.length ? $.selected[0] : false;
    $.all = () => $.selected;
    $.attr = (name, value) => defined(value) ? attr($.one(), name, value) : attr($.one(), name);
    $.inject = (data, append, to) => inject($.one(), data, append, to);
    $.append = (data) => inject($.one(), data, true);
    $.search = (attr, from) => search($.one(), attr, from);
    $.parent = () => $.one().parentNode;
    $.children = () => {
        $.one()
    };
    $.position = () => position($.one());
    $.query = (selector) => $.one().querySelector(selector);
    $.queryAll = (selector) => $.one().querySelectorAll(selector);
    $.x = () => position($.one()).x;
    $.y = () => position($.one()).y;
    $.width = () => position($.one()).width;
    $.height = () => position($.one()).height;
    $.remove = () => $.one().parentNode.removeChild($.one());
    $.show = () => {
        const src = $.one();
        _set_real_display_style(src);
        css(src, {display: src && src['real-display-style'] ? src['real-display-style'] : 'block'});
    };
    $.hide = () => {
        const src = $.one();
        _set_real_display_style(src);
        css(src, {display: 'none'});
    };
    $.toggle = () => {
        const src = $.one();
        if (typeOf(src, 'string')) {
            queryAll(src).map(Dom.toggle);
        } else if (isNode(src)) {
            if (src.style.display === 'none') Dom.show(src);
            else Dom.hide(src);
        }
    };
    $.on = (eventName, callback, bubble) => on($.one(), eventName, callback, bubble);
    $.coords = () => {
        const coords = $.one().getBoundingClientRect();
        return merge({top: coords.top + pageYOffset, left: coords.left + pageXOffset}, coords);
    };
    return $;
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
Dom.position = position;


export default Dom;
