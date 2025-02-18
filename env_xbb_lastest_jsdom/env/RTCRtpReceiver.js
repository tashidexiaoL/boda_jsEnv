// RTCRtpReceiver对象

bodavm.memory.globalobj['RTCRtpReceiver'] = function RTCRtpReceiver() {
  console.log_copy('RTCRtpReceiver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCRtpReceiver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCRtpReceiver'], "RTCRtpReceiver");
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].undefined, "RTCRtpReceiver", "getCapabilities", arguments);
  }
});
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "track_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "transport", {
  configurable: true,
  enumerable: true,
  get: function transport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "transport_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "rtcpTransport", {
  configurable: true,
  enumerable: true,
  get: function rtcpTransport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "rtcpTransport_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "playoutDelayHint", {
  configurable: true,
  enumerable: true,
  get: function playoutDelayHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "playoutDelayHint_get", arguments);
  },
  set: function playoutDelayHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "playoutDelayHint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "createEncodedStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createEncodedStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "createEncodedStreams", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "getContributingSources", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContributingSources() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "getContributingSources", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "getParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "getParameters", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStats() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "getStats", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpReceiver', "getSynchronizationSources", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSynchronizationSources() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpReceiver'].prototype, "RTCRtpReceiver", "getSynchronizationSources", arguments);
  }
}, 'prototype');