// NavigatorManagedData对象

bodavm.memory.globalobj['NavigatorManagedData'] = function NavigatorManagedData() {
  console.log_copy('NavigatorManagedData 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigatorManagedData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigatorManagedData'], "NavigatorManagedData");
bodavm.memory.globalobj['NavigatorManagedData'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['NavigatorManagedData'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('NavigatorManagedData', "onmanagedconfigurationchange", {
  configurable: true,
  enumerable: true,
  get: function onmanagedconfigurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorManagedData'].prototype, "NavigatorManagedData", "onmanagedconfigurationchange_get", arguments);
  },
  set: function onmanagedconfigurationchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorManagedData'].prototype, "NavigatorManagedData", "onmanagedconfigurationchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigatorManagedData', "getManagedConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getManagedConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigatorManagedData'].prototype, "NavigatorManagedData", "getManagedConfiguration", arguments);
  }
}, 'prototype');