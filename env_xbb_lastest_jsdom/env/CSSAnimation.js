// CSSAnimation对象

bodavm.memory.globalobj['CSSAnimation'] = function CSSAnimation() {
  console.log_copy('CSSAnimation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSAnimation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSAnimation'], "CSSAnimation");
bodavm.memory.globalobj['CSSAnimation'].prototype.__proto__ = bodavm.memory.globalobj['Animation'].prototype;
bodavm.memory.globalobj['CSSAnimation'].__proto__ = bodavm.memory.globalobj['Animation'];
bodavm.toolsFunc.defineProperty('CSSAnimation', "animationName", {
  configurable: true,
  enumerable: true,
  get: function animationName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSAnimation'].prototype, "CSSAnimation", "animationName_get", arguments);
  },
  set: undefined
}, 'prototype');