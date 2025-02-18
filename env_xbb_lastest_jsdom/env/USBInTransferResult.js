// USBInTransferResult对象

bodavm.memory.globalobj['USBInTransferResult'] = function USBInTransferResult() {
  console.log_copy('USBInTransferResult 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBInTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBInTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBInTransferResult'], "USBInTransferResult");
bodavm.toolsFunc.defineProperty('USBInTransferResult', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBInTransferResult'].prototype, "USBInTransferResult", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBInTransferResult', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBInTransferResult'].prototype, "USBInTransferResult", "status_get", arguments);
  },
  set: undefined
}, 'prototype');