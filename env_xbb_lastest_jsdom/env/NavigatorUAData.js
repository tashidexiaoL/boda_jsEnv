// NavigatorUAData对象

bodavm.memory.globalobj['NavigatorUAData'] = function NavigatorUAData() {
  console.log_copy('NavigatorUAData 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigatorUAData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigatorUAData'], "NavigatorUAData");
bodavm.toolsFunc.defineProperty('NavigatorUAData', "brands", {
  configurable: true,
  enumerable: true,
  get: function brands() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorUAData'].prototype, "NavigatorUAData", "brands_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigatorUAData', "mobile", {
  configurable: true,
  enumerable: true,
  get: function mobile() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorUAData'].prototype, "NavigatorUAData", "mobile_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigatorUAData', "platform", {
  configurable: true,
  enumerable: true,
  get: function platform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorUAData'].prototype, "NavigatorUAData", "platform_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigatorUAData', "getHighEntropyValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getHighEntropyValues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorUAData'].prototype, "NavigatorUAData", "getHighEntropyValues", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigatorUAData', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorUAData'].prototype, "NavigatorUAData", "toJSON", arguments);
  }
}, 'prototype');