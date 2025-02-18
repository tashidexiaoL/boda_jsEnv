// BatteryManager对象

bodavm.memory.globalobj['BatteryManager'] = function BatteryManager() {
  console.log_copy('BatteryManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BatteryManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BatteryManager'], "BatteryManager");
bodavm.memory.globalobj['BatteryManager'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['BatteryManager'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('BatteryManager', "charging", {
  configurable: true,
  enumerable: true,
  get: function charging() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "charging_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "chargingTime", {
  configurable: true,
  enumerable: true,
  get: function chargingTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "chargingTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "dischargingTime", {
  configurable: true,
  enumerable: true,
  get: function dischargingTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "dischargingTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "level", {
  configurable: true,
  enumerable: true,
  get: function level() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "level_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "onchargingchange", {
  configurable: true,
  enumerable: true,
  get: function onchargingchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "onchargingchange_get", arguments);
  },
  set: function onchargingchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "onchargingchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "onchargingtimechange", {
  configurable: true,
  enumerable: true,
  get: function onchargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "onchargingtimechange_get", arguments);
  },
  set: function onchargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "onchargingtimechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "ondischargingtimechange", {
  configurable: true,
  enumerable: true,
  get: function ondischargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "ondischargingtimechange_get", arguments);
  },
  set: function ondischargingtimechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "ondischargingtimechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BatteryManager', "onlevelchange", {
  configurable: true,
  enumerable: true,
  get: function onlevelchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "onlevelchange_get", arguments);
  },
  set: function onlevelchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BatteryManager'].prototype, "BatteryManager", "onlevelchange_set", arguments);
  }
}, 'prototype');