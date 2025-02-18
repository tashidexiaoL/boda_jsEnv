// BaseAudioContext对象

bodavm.memory.globalobj['BaseAudioContext'] = function BaseAudioContext() {
  console.log_copy('BaseAudioContext 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BaseAudioContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BaseAudioContext'], "BaseAudioContext");
bodavm.memory.globalobj['BaseAudioContext'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['BaseAudioContext'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('BaseAudioContext', "destination", {
  configurable: true,
  enumerable: true,
  get: function destination() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "destination_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "currentTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "sampleRate", {
  configurable: true,
  enumerable: true,
  get: function sampleRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "sampleRate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "listener", {
  configurable: true,
  enumerable: true,
  get: function listener() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "listener_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "onstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createAnalyser", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnalyser() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createAnalyser", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createBiquadFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBiquadFilter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createBiquadFilter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createBufferSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBufferSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createBufferSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createChannelMerger", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createChannelMerger() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createChannelMerger", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createChannelSplitter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createChannelSplitter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createChannelSplitter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createConstantSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createConstantSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createConstantSource", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createConvolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createConvolver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createConvolver", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDelay() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createDelay", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createDynamicsCompressor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDynamicsCompressor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createDynamicsCompressor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createGain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createGain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createGain", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createIIRFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createIIRFilter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createIIRFilter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createOscillator", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createOscillator() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createOscillator", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createPanner", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPanner() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createPanner", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createPeriodicWave", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPeriodicWave() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createPeriodicWave", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createScriptProcessor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createScriptProcessor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createScriptProcessor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createStereoPanner", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createStereoPanner() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createStereoPanner", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "createWaveShaper", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createWaveShaper() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "createWaveShaper", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "decodeAudioData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decodeAudioData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "decodeAudioData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BaseAudioContext', "audioWorklet", {
  configurable: true,
  enumerable: true,
  get: function audioWorklet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BaseAudioContext'].prototype, "BaseAudioContext", "audioWorklet_get", arguments);
  },
  set: undefined
}, 'prototype');