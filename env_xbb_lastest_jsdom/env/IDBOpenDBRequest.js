// IDBOpenDBRequest对象

bodavm.memory.globalobj['IDBOpenDBRequest'] = function IDBOpenDBRequest() {
  console.log_copy('IDBOpenDBRequest 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBOpenDBRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBOpenDBRequest'], "IDBOpenDBRequest");
bodavm.memory.globalobj['IDBOpenDBRequest'].prototype.__proto__ = bodavm.memory.globalobj['IDBRequest'].prototype;
bodavm.memory.globalobj['IDBOpenDBRequest'].__proto__ = bodavm.memory.globalobj['IDBRequest'];
bodavm.toolsFunc.defineProperty('IDBOpenDBRequest', "onblocked", {
  configurable: true,
  enumerable: true,
  get: function onblocked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBOpenDBRequest'].prototype, "IDBOpenDBRequest", "onblocked_get", arguments);
  },
  set: function onblocked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBOpenDBRequest'].prototype, "IDBOpenDBRequest", "onblocked_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBOpenDBRequest', "onupgradeneeded", {
  configurable: true,
  enumerable: true,
  get: function onupgradeneeded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBOpenDBRequest'].prototype, "IDBOpenDBRequest", "onupgradeneeded_get", arguments);
  },
  set: function onupgradeneeded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBOpenDBRequest'].prototype, "IDBOpenDBRequest", "onupgradeneeded_set", arguments);
  }
}, 'prototype');