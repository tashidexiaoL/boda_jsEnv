// WebTransport对象

bodavm.memory.globalobj['WebTransport'] = function WebTransport() {
  console.log_copy('WebTransport 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WebTransport': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebTransport'], "WebTransport");
bodavm.toolsFunc.defineProperty('WebTransport', "incomingUnidirectionalStreams", {
  configurable: true,
  enumerable: true,
  get: function incomingUnidirectionalStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "incomingUnidirectionalStreams_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "incomingBidirectionalStreams", {
  configurable: true,
  enumerable: true,
  get: function incomingBidirectionalStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "incomingBidirectionalStreams_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "datagrams", {
  configurable: true,
  enumerable: true,
  get: function datagrams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "datagrams_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "ready_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "closed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "createBidirectionalStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBidirectionalStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "createBidirectionalStream", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebTransport', "createUnidirectionalStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createUnidirectionalStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebTransport'].prototype, "WebTransport", "createUnidirectionalStream", arguments);
  }
}, 'prototype');