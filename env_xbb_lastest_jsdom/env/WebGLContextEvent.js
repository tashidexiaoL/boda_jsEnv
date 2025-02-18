// WebGLContextEvent对象

bodavm.memory.globalobj['WebGLContextEvent'] = function WebGLContextEvent() {
  console.log_copy('WebGLContextEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLContextEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebGLContextEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLContextEvent'], "WebGLContextEvent");
bodavm.memory.globalobj['WebGLContextEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['WebGLContextEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('WebGLContextEvent', "statusMessage", {
  configurable: true,
  enumerable: true,
  get: function statusMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLContextEvent'].prototype, "WebGLContextEvent", "statusMessage_get", arguments);
  },
  set: undefined
}, 'prototype');