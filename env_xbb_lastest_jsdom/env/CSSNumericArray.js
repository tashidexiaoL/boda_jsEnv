// CSSNumericArray对象

bodavm.memory.globalobj['CSSNumericArray'] = function CSSNumericArray() {
  console.log_copy('CSSNumericArray 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSNumericArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSNumericArray'], "CSSNumericArray");
bodavm.toolsFunc.defineProperty('CSSNumericArray', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericArray'].prototype, "CSSNumericArray", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericArray', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericArray'].prototype, "CSSNumericArray", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericArray', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericArray'].prototype, "CSSNumericArray", "values", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericArray', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericArray'].prototype, "CSSNumericArray", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSNumericArray', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSNumericArray'].prototype, "CSSNumericArray", "length_get", arguments);
  },
  set: undefined
}, 'prototype');