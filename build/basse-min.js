/*
 * basse.js
 * For your basic needs.
 *
 * @author illarra.com
 */
var BASSE=BASSE||{};BASSE.boot={_callbacks:{},_generateId:function(c){var b=[],d=[],a;for(p in c){b.push(p)}b.sort();for(a=0;a<b.length;a++){d.push(b[a]+":"+c[b[a]])}return d.join(".")},_getSubset:function(b,d){var c={},a;for(a=0;a<b.length;a++){c[b[a]]=d[b[a]]}return c},_params:{},getParam:function(b,a){if(b in this._params){return this._params[b]}else{return a}},getParams:function(){return this._params},run:function(a){var b;a.id=a.id||[];a.params=a.params||{};this._params=a.params;b=this._generateId(this._getSubset(a.id,a.params));if(b in this._callbacks){this._callbacks[b](a.params)}},register:function(a,b){this._callbacks[this._generateId(a)]=b||function(){}}};