// WebTransportDatagramDuplexStream对象

bodavm.memory.globalobj['WebTransportDatagramDuplexStream'] = function WebTransportDatagramDuplexStream() {
  console.log_copy('WebTransportDatagramDuplexStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebTransportDatagramDuplexStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebTransportDatagramDuplexStream'], "WebTransportDatagramDuplexStream");
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "maxDatagramSize", {
  configurable: true,
  enumerable: true,
  get: function maxDatagramSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "maxDatagramSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "incomingMaxAge", {
  configurable: true,
  enumerable: true,
  get: function incomingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "incomingMaxAge_get", arguments);
  },
  set: function incomingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "incomingMaxAge_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "outgoingMaxAge", {
  configurable: true,
  enumerable: true,
  get: function outgoingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "outgoingMaxAge_get", arguments);
  },
  set: function outgoingMaxAge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "outgoingMaxAge_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "incomingHighWaterMark", {
  configurable: true,
  enumerable: true,
  get: function incomingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "incomingHighWaterMark_get", arguments);
  },
  set: function incomingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "incomingHighWaterMark_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransportDatagramDuplexStream', "outgoingHighWaterMark", {
  configurable: true,
  enumerable: true,
  get: function outgoingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "outgoingHighWaterMark_get", arguments);
  },
  set: function outgoingHighWaterMark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransportDatagramDuplexStream'].prototype, "WebTransportDatagramDuplexStream", "outgoingHighWaterMark_set", arguments);
  }
}, 'prototype');