/*!
 * basse.js
 * Utilities for your basic Javascript needs.
 *
 * @author illarra.com
 */
var BASSE = BASSE || {};

/**
 * Boot Manager
 *
 * register() some callbacks to run with a given object as Id. Latter on, let 
 * basse.js run() your callback given an Id description and an input object.
 */
BASSE.boot = {
  // PRIVATE
  _callbacks: {},
  _params:    {},
  _generateId: function (o) {
    var keys = [], 
        id   = [], 
        i;
    
    for (p in o) {
      keys.push(p);
    }
    
    keys.sort();
    
    for (i = 0; i < keys.length; i++) {
      id.push(keys[i] + ':' + o[keys[i]]);
    }
    
    return id.join('.');
  },
  _getSubset: function (keys, o) {
    var subset = {}, i;
       
    for (i = 0; i < keys.length; i++) {
      subset[keys[i]] = o[keys[i]];  
    }
    
    return subset;
  },
  // PUBLIC
  getParam: function (id, def) {
    if (id in this._params) {
      return this._params[id]
    } else {
      return def;
    }
  },
  getParams: function () {
    return this._params;
  },
  run: function (ops) {
    var id;
    
    ops.id     = ops.id     || [];
    ops.params = ops.params || {};

    this._params = ops.params;     
    id = this._generateId(this._getSubset(ops.id, ops.params));     
     
    if (id in this._callbacks) {
      this._callbacks[id](ops.params);
    }
  },
  register: function (boot, callback) {
    this._callbacks[this._generateId(boot)] = callback || function () {};
  }
};

/**
 * Simple Javascript Templating
 *
 * Jonh Resigs micro templating system. Tags changed from <% %> to <# #>
 * 
 * @author     John Resig - http://ejohn.org/ - MIT Licensed
 * @author     http://ejohn.org/blog/javascript-micro-templating/
 */
/*!
 * Simple JS Templating
 * @author John Resig - http://ejohn.org/ - MIT Licensed
 */
BASSE.tmpl = (function () {
  var cache = {};
  
  function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :
      
    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
    "var p=[],print=function(){p.push.apply(p,arguments);};" +
    
    // Introduce the data as local variables using with(){}
    "with(obj){p.push('" +
    
    // Convert the template into pure JavaScript
    // Note: default <% changed to <#
    str
      .replace(/[\r\t\n]/g, " ")
      .split("<#").join("\t")
      .replace(/((^|#>)[^\t]*)'/g, "$1\r")
      .replace(/\t=(.*?)#>/g, "',$1,'")
      .split("\t").join("');")
      .split("#>").join("p.push('")
      .split("\r").join("\\'")
      + "');}return p.join('');");
    
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
  
  return tmpl;
})();
