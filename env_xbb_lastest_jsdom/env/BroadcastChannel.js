// BroadcastChannel对象

bodavm.memory.globalobj['BroadcastChannel'] = function BroadcastChannel() {
  console.log_copy('BroadcastChannel 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BroadcastChannel)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BroadcastChannel': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BroadcastChannel'], "BroadcastChannel");
bodavm.memory.globalobj['BroadcastChannel'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['BroadcastChannel'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('BroadcastChannel', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BroadcastChannel', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BroadcastChannel', "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "onmessageerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BroadcastChannel', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BroadcastChannel', "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BroadcastChannel'].prototype, "BroadcastChannel", "postMessage", arguments);
  }
}, 'prototype');