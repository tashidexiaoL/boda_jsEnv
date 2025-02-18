// ConvolverNode对象

bodavm.memory.globalobj['ConvolverNode'] = function ConvolverNode() {
  console.log_copy('ConvolverNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ConvolverNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ConvolverNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ConvolverNode'], "ConvolverNode");
bodavm.memory.globalobj['ConvolverNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['ConvolverNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('ConvolverNode', "buffer", {
  configurable: true,
  enumerable: true,
  get: function buffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ConvolverNode'].prototype, "ConvolverNode", "buffer_get", arguments);
  },
  set: function buffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ConvolverNode'].prototype, "ConvolverNode", "buffer_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ConvolverNode', "normalize", {
  configurable: true,
  enumerable: true,
  get: function normalize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ConvolverNode'].prototype, "ConvolverNode", "normalize_get", arguments);
  },
  set: function normalize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ConvolverNode'].prototype, "ConvolverNode", "normalize_set", arguments);
  }
}, 'prototype');