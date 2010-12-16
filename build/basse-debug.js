/*!
 * basse.js
 * For your basic needs.
 *
 * @author illarra.com
 */

var BASSE = BASSE || {};

/**
 * Boot
 *
 * Initializer.
 * 
 * @package    basse.js
 * @subpackage javascript
 * @version    SVN: $Id: boot.js 3750 2010-12-02 15:42:52Z doup $
 */

BASSE.boot = {
  // PRIVATE
  _callbacks: {},
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
  _params: {},
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
