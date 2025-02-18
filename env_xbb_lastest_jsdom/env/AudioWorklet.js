// AudioWorklet对象

bodavm.memory.globalobj['AudioWorklet'] = function AudioWorklet() {
  console.log_copy('AudioWorklet 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioWorklet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioWorklet'], "AudioWorklet");
bodavm.memory.globalobj['AudioWorklet'].prototype.__proto__ = bodavm.memory.globalobj['Worklet'].prototype;
bodavm.memory.globalobj['AudioWorklet'].__proto__ = bodavm.memory.globalobj['Worklet'];