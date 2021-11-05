import attr from "../static/attr";
import createElement from "../static/createElement";
import createFragment from "../static/createFragment";
import css from "../static/css";
import domLoaded from "../static/domLoaded";
import inject from "../static/inject";
import str2node from "../static/str2node";
import str2fragment from "../static/str2fragment";
import node2str from "../static/node2str";
import query from "../static/query";
import queryAll from "../static/queryAll";
import search from "../static/search";
import encodeGetQuery from "../static/encodeGetQuery";
import decodeGetQuery from "../static/decodeGetQuery";
import httpRequest from "../static/httpRequest";
import defined from "../static/defined";
import definedIn from "../static/definedIn";
import each from "../static/each";
import extend, {extendRecursive}  from "../static/extend";
import isEmpty from "../static/isEmpty";
import findObject from "../static/findObject";
import findObjects from "../static/findObjects";
import format from "../static/format";
import isNode from "../static/isNode";
import loadCSS from "../static/loadCSS";
import loadJS from "../static/loadJS";
import loadJSSync from "../static/loadJSSync";
import merge from "../static/merge";
import number2string from "../static/number2string";
import on from "../static/on";
import position from "../static/position";
import positionMouse from "../static/positionMouse";
import random, {randomColor, randomItem, randomNumber, randomString} from "../static/random";
import redirect from "../static/redirect";
import typeOf from "../static/typeOf";
import typeOfStrict from "../static/typeOfStrict";
import uri from "../static/uri";
import copy from "../static/copy";
import toArray from "../static/toArray";
import toMap from "../static/toMap";
import midNumber from "../static/midNumber";

const Util = {
    attr,
    createElement,
    createFragment,
    css,
    copy,
    clone: copy,
    domLoaded,
    inject,
    str2node,
    str2fragment,
    node2str,
    query,
    queryAll,
    search,
    encodeGetQuery,
    decodeGetQuery,
    httpRequest,
    defined,
    definedIn,
    extend,
    extendRecursive,
    each,
    findObject,
    findObjects,
    format,
    isEmpty,
    isNode,
    loadCSS,
    loadJS,
    loadJSSync,
    merge,
    number2string,
    on,
    position,
    positionMouse,
    random,
    randomColor,
    randomItem,
    randomNumber,
    randomString,
    redirect,
    typeOf,
    typeOfStrict,
    uri,
    toArray,
    toMap,
    midNumber,
};

export default Util;
