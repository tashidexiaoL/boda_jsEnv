// AudioProcessingEvent对象

bodavm.memory.globalobj['AudioProcessingEvent'] = function AudioProcessingEvent() {
  console.log_copy('AudioProcessingEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioProcessingEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioProcessingEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioProcessingEvent'], "AudioProcessingEvent");
bodavm.memory.globalobj['AudioProcessingEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['AudioProcessingEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('AudioProcessingEvent', "playbackTime", {
  configurable: true,
  enumerable: true,
  get: function playbackTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioProcessingEvent'].prototype, "AudioProcessingEvent", "playbackTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioProcessingEvent', "inputBuffer", {
  configurable: true,
  enumerable: true,
  get: function inputBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioProcessingEvent'].prototype, "AudioProcessingEvent", "inputBuffer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioProcessingEvent', "outputBuffer", {
  configurable: true,
  enumerable: true,
  get: function outputBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioProcessingEvent'].prototype, "AudioProcessingEvent", "outputBuffer_get", arguments);
  },
  set: undefined
}, 'prototype');