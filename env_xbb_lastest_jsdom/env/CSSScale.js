// CSSScale对象

bodavm.memory.globalobj['CSSScale'] = function CSSScale() {
  console.log_copy('CSSScale 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSScale)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSScale': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSScale'], "CSSScale");
bodavm.memory.globalobj['CSSScale'].prototype.__proto__ = bodavm.memory.globalobj['CSSTransformComponent'].prototype;
bodavm.memory.globalobj['CSSScale'].__proto__ = bodavm.memory.globalobj['CSSTransformComponent'];
bodavm.toolsFunc.defineProperty('CSSScale', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSScale'].prototype, "CSSScale", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSScale'].prototype, "CSSScale", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSScale', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSScale'].prototype, "CSSScale", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSScale'].prototype, "CSSScale", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSScale', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSScale'].prototype, "CSSScale", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSScale'].prototype, "CSSScale", "z_set", arguments);
  }
}, 'prototype');