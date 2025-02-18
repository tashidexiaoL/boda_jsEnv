// DataTransferItem对象

bodavm.memory.globalobj['DataTransferItem'] = function DataTransferItem() {
  console.log_copy('DataTransferItem 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DataTransferItem)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DataTransferItem'], "DataTransferItem");
bodavm.toolsFunc.defineProperty('DataTransferItem', "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItem'].prototype, "DataTransferItem", "kind_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItem', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItem'].prototype, "DataTransferItem", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItem', "getAsFile", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAsFile() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItem'].prototype, "DataTransferItem", "getAsFile", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItem', "getAsString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAsString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItem'].prototype, "DataTransferItem", "getAsString", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItem', "webkitGetAsEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitGetAsEntry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItem'].prototype, "DataTransferItem", "webkitGetAsEntry", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItem', "getAsFileSystemHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAsFileSystemHandle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItem'].prototype, "DataTransferItem", "getAsFileSystemHandle", arguments);
  }
}, 'prototype');