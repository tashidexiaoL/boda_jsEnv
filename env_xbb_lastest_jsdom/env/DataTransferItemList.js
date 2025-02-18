// DataTransferItemList对象

bodavm.memory.globalobj['DataTransferItemList'] = function DataTransferItemList() {
  console.log_copy('DataTransferItemList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DataTransferItemList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DataTransferItemList'], "DataTransferItemList");
bodavm.toolsFunc.defineProperty('DataTransferItemList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItemList'].prototype, "DataTransferItemList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItemList', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItemList'].prototype, "DataTransferItemList", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItemList', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItemList'].prototype, "DataTransferItemList", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransferItemList', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransferItemList'].prototype, "DataTransferItemList", "remove", arguments);
  }
}, 'prototype');