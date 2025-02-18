// AudioContext对象

bodavm.memory.globalobj['AudioContext'] = function AudioContext() {
  console.log_copy('AudioContext 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.AudioContext();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioContext'], "AudioContext");
bodavm.memory.globalobj['AudioContext'].prototype.__proto__ = bodavm.memory.globalobj['BaseAudioContext'].prototype;
bodavm.memory.globalobj['AudioContext'].__proto__ = bodavm.memory.globalobj['BaseAudioContext'];
bodavm.toolsFunc.defineProperty('AudioContext', "baseLatency", {
  configurable: true,
  enumerable: true,
  get: function baseLatency() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "baseLatency_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "outputLatency", {
  configurable: true,
  enumerable: true,
  get: function outputLatency() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "outputLatency_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "createMediaElementSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaElementSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "createMediaElementSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "createMediaStreamDestination", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaStreamDestination() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "createMediaStreamDestination", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "createMediaStreamSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaStreamSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "createMediaStreamSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "getOutputTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getOutputTimestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "getOutputTimestamp", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "resume", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "suspend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function suspend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "suspend", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "sinkId", {
  configurable: true,
  enumerable: true,
  get: function sinkId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "sinkId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "onsinkchange", {
  configurable: true,
  enumerable: true,
  get: function onsinkchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "onsinkchange_get", arguments);
  },
  set: function onsinkchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "onsinkchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioContext', "setSinkId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSinkId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioContext'].prototype, "AudioContext", "setSinkId", arguments);
  }
}, 'prototype');