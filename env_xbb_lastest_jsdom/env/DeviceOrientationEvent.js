// DeviceOrientationEvent对象

bodavm.memory.globalobj['DeviceOrientationEvent'] = function DeviceOrientationEvent() {
  console.log_copy('DeviceOrientationEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DeviceOrientationEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeviceOrientationEvent'], "DeviceOrientationEvent");
bodavm.memory.globalobj['DeviceOrientationEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['DeviceOrientationEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "alpha", {
  configurable: true,
  enumerable: true,
  get: function alpha() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "alpha_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "beta", {
  configurable: true,
  enumerable: true,
  get: function beta() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "beta_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "gamma", {
  configurable: true,
  enumerable: true,
  get: function gamma() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "gamma_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceOrientationEvent', "absolute", {
  configurable: true,
  enumerable: true,
  get: function absolute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceOrientationEvent'].prototype, "DeviceOrientationEvent", "absolute_get", arguments);
  },
  set: undefined
}, 'prototype');