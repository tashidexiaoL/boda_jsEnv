// CompressionStream对象

bodavm.memory.globalobj['CompressionStream'] = function CompressionStream() {
  console.log_copy('CompressionStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CompressionStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CompressionStream': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CompressionStream'], "CompressionStream");
bodavm.toolsFunc.defineProperty('CompressionStream', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CompressionStream'].prototype, "CompressionStream", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CompressionStream', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CompressionStream'].prototype, "CompressionStream", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');