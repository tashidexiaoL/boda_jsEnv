// Storage对象

bodavm.memory.globalobj['Storage'] = function Storage() {
  console.log_copy('Storage 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Storage)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Storage'], "Storage");
bodavm.toolsFunc.defineProperty('Storage', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Storage'].prototype, "Storage", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Storage', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Storage'].prototype, "Storage", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Storage', "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Storage'].prototype, "Storage", "getItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Storage', "key", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function key() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Storage'].prototype, "Storage", "key", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Storage', "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Storage'].prototype, "Storage", "removeItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Storage', "setItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Storage'].prototype, "Storage", "setItem", arguments);
  }
}, 'prototype');