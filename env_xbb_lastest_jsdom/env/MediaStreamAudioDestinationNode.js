// MediaStreamAudioDestinationNode对象

bodavm.memory.globalobj['MediaStreamAudioDestinationNode'] = function MediaStreamAudioDestinationNode() {
  console.log_copy('MediaStreamAudioDestinationNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaStreamAudioDestinationNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamAudioDestinationNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamAudioDestinationNode'], "MediaStreamAudioDestinationNode");
bodavm.memory.globalobj['MediaStreamAudioDestinationNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['MediaStreamAudioDestinationNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('MediaStreamAudioDestinationNode', "stream", {
  configurable: true,
  enumerable: true,
  get: function stream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamAudioDestinationNode'].prototype, "MediaStreamAudioDestinationNode", "stream_get", arguments);
  },
  set: undefined
}, 'prototype');