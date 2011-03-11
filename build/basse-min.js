/*
 * basse.js
 * Utilities for your basic Javascript needs.
 *
 * @author illarra.com
 */
var BASSE=BASSE||{};BASSE.boot={_callbacks:{},_params:{},_generateId:function(c){var b=[],d=[],a;for(p in c){b.push(p)}b.sort();for(a=0;a<b.length;a++){d.push(b[a]+":"+c[b[a]])}return d.join(".")},_getSubset:function(b,d){var c={},a;for(a=0;a<b.length;a++){c[b[a]]=d[b[a]]}return c},getParam:function(b,a){if(b in this._params){return this._params[b]}else{return a}},getParams:function(){return this._params},run:function(a){var b;a.id=a.id||[];a.params=a.params||{};this._params=a.params;b=this._generateId(this._getSubset(a.id,a.params));if(b in this._callbacks){this._callbacks[b](a.params)}},register:function(a,b){this._callbacks[this._generateId(a)]=b||function(){}}};
/*
 * Simple JS Templating
 * @author John Resig - http://ejohn.org/ - MIT Licensed
 */
BASSE.tmpl=(function(){var b={};function a(e,d){var c=!/\W/.test(e)?b[e]=b[e]||a(document.getElementById(e).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<#").join("\t").replace(/((^|#>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)#>/g,"',$1,'").split("\t").join("');").split("#>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return d?c(d):c}return a})();