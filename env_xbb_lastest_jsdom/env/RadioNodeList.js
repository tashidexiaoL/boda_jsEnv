// RadioNodeList对象

bodavm.memory.globalobj['RadioNodeList'] = function RadioNodeList() {
  console.log_copy('RadioNodeList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RadioNodeList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RadioNodeList'], "RadioNodeList");
bodavm.memory.globalobj['RadioNodeList'].prototype.__proto__ = bodavm.memory.globalobj['NodeList'].prototype;
bodavm.memory.globalobj['RadioNodeList'].__proto__ = bodavm.memory.globalobj['NodeList'];
bodavm.toolsFunc.defineProperty('RadioNodeList', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RadioNodeList'].prototype, "RadioNodeList", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RadioNodeList'].prototype, "RadioNodeList", "value_set", arguments);
  }
}, 'prototype');