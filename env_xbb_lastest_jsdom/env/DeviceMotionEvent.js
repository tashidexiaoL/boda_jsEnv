// DeviceMotionEvent对象

bodavm.memory.globalobj['DeviceMotionEvent'] = function DeviceMotionEvent() {
  console.log_copy('DeviceMotionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DeviceMotionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceMotionEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeviceMotionEvent'], "DeviceMotionEvent");
bodavm.memory.globalobj['DeviceMotionEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['DeviceMotionEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('DeviceMotionEvent', "acceleration", {
  configurable: true,
  enumerable: true,
  get: function acceleration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEvent'].prototype, "DeviceMotionEvent", "acceleration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEvent', "accelerationIncludingGravity", {
  configurable: true,
  enumerable: true,
  get: function accelerationIncludingGravity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEvent'].prototype, "DeviceMotionEvent", "accelerationIncludingGravity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEvent', "rotationRate", {
  configurable: true,
  enumerable: true,
  get: function rotationRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEvent'].prototype, "DeviceMotionEvent", "rotationRate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEvent', "interval", {
  configurable: true,
  enumerable: true,
  get: function interval() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEvent'].prototype, "DeviceMotionEvent", "interval_get", arguments);
  },
  set: undefined
}, 'prototype');