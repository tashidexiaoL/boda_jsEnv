// IdleDeadline对象

bodavm.memory.globalobj['IdleDeadline'] = function IdleDeadline() {
  console.log_copy('IdleDeadline 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IdleDeadline)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IdleDeadline'], "IdleDeadline");
bodavm.toolsFunc.defineProperty('IdleDeadline', "didTimeout", {
  configurable: true,
  enumerable: true,
  get: function didTimeout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDeadline'].prototype, "IdleDeadline", "didTimeout_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IdleDeadline', "timeRemaining", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function timeRemaining() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IdleDeadline'].prototype, "IdleDeadline", "timeRemaining", arguments);
  }
}, 'prototype');