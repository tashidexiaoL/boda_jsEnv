// VideoEncoder对象

bodavm.memory.globalobj['VideoEncoder'] = function VideoEncoder() {
  console.log_copy('VideoEncoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VideoEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VideoEncoder': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VideoEncoder'], "VideoEncoder");
bodavm.memory.globalobj['VideoEncoder'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['VideoEncoder'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('VideoEncoder', "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].undefined, "VideoEncoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('VideoEncoder', "encodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function encodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "encodeQueueSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "configure", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "encode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "flush", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoEncoder', "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoEncoder'].prototype, "VideoEncoder", "ondequeue_set", arguments);
  }
}, 'prototype');