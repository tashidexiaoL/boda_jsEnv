// VideoDecoder对象

bodavm.memory.globalobj['VideoDecoder'] = function VideoDecoder() {
  console.log_copy('VideoDecoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VideoDecoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VideoDecoder': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VideoDecoder'], "VideoDecoder");
bodavm.memory.globalobj['VideoDecoder'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['VideoDecoder'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('VideoDecoder', "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].undefined, "VideoDecoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('VideoDecoder', "decodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function decodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "decodeQueueSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "configure", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "decode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "flush", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoDecoder', "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoDecoder'].prototype, "VideoDecoder", "ondequeue_set", arguments);
  }
}, 'prototype');