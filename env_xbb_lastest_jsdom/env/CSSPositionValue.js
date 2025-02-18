// CSSPositionValue对象

bodavm.memory.globalobj['CSSPositionValue'] = function CSSPositionValue() {
  console.log_copy('CSSPositionValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSPositionValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSPositionValue': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSPositionValue'], "CSSPositionValue");
bodavm.memory.globalobj['CSSPositionValue'].prototype.__proto__ = bodavm.memory.globalobj['CSSStyleValue'].prototype;
bodavm.memory.globalobj['CSSPositionValue'].__proto__ = bodavm.memory.globalobj['CSSStyleValue'];
bodavm.toolsFunc.defineProperty('CSSPositionValue', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSPositionValue'].prototype, "CSSPositionValue", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSPositionValue'].prototype, "CSSPositionValue", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSPositionValue', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSPositionValue'].prototype, "CSSPositionValue", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSPositionValue'].prototype, "CSSPositionValue", "y_set", arguments);
  }
}, 'prototype');