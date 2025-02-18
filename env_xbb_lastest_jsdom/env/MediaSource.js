// MediaSource对象

bodavm.memory.globalobj['MediaSource'] = function MediaSource() {
  console.log_copy('MediaSource 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.MediaSource();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaSource'], "MediaSource");
bodavm.memory.globalobj['MediaSource'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaSource'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaSource', "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTypeSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].undefined, "MediaSource", "isTypeSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('MediaSource', "canConstructInDedicatedWorker", {
  configurable: true,
  enumerable: true,
  get: function canConstructInDedicatedWorker() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].undefined, "MediaSource", "canConstructInDedicatedWorker_get", arguments, true);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('MediaSource', "sourceBuffers", {
  configurable: true,
  enumerable: true,
  get: function sourceBuffers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "sourceBuffers_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "activeSourceBuffers", {
  configurable: true,
  enumerable: true,
  get: function activeSourceBuffers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "activeSourceBuffers_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "duration_get", arguments);
  },
  set: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "duration_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "onsourceopen", {
  configurable: true,
  enumerable: true,
  get: function onsourceopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "onsourceopen_get", arguments);
  },
  set: function onsourceopen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "onsourceopen_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "onsourceended", {
  configurable: true,
  enumerable: true,
  get: function onsourceended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "onsourceended_get", arguments);
  },
  set: function onsourceended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "onsourceended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "onsourceclose", {
  configurable: true,
  enumerable: true,
  get: function onsourceclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "onsourceclose_get", arguments);
  },
  set: function onsourceclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "onsourceclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "addSourceBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addSourceBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "addSourceBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "clearLiveSeekableRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearLiveSeekableRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "clearLiveSeekableRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "endOfStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endOfStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "endOfStream", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "removeSourceBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeSourceBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "removeSourceBuffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSource', "setLiveSeekableRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setLiveSeekableRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSource'].prototype, "MediaSource", "setLiveSeekableRange", arguments);
  }
}, 'prototype');