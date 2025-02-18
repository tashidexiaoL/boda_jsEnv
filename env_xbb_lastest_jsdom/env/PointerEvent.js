// PointerEvent对象

bodavm.memory.globalobj['PointerEvent'] = function PointerEvent() {
  console.log_copy('PointerEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PointerEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PointerEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PointerEvent'], "PointerEvent");
bodavm.memory.globalobj['PointerEvent'].prototype.__proto__ = bodavm.memory.globalobj['MouseEvent'].prototype;
bodavm.memory.globalobj['PointerEvent'].__proto__ = bodavm.memory.globalobj['MouseEvent'];
bodavm.toolsFunc.defineProperty('PointerEvent', "pointerId", {
  configurable: true,
  enumerable: true,
  get: function pointerId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "pointerId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "pressure", {
  configurable: true,
  enumerable: true,
  get: function pressure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "pressure_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "tiltX", {
  configurable: true,
  enumerable: true,
  get: function tiltX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "tiltX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "tiltY", {
  configurable: true,
  enumerable: true,
  get: function tiltY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "tiltY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "azimuthAngle", {
  configurable: true,
  enumerable: true,
  get: function azimuthAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "azimuthAngle_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "altitudeAngle", {
  configurable: true,
  enumerable: true,
  get: function altitudeAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "altitudeAngle_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "tangentialPressure", {
  configurable: true,
  enumerable: true,
  get: function tangentialPressure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "tangentialPressure_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "twist", {
  configurable: true,
  enumerable: true,
  get: function twist() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "twist_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "pointerType", {
  configurable: true,
  enumerable: true,
  get: function pointerType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "pointerType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "isPrimary", {
  configurable: true,
  enumerable: true,
  get: function isPrimary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "isPrimary_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "getCoalescedEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCoalescedEvents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "getCoalescedEvents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PointerEvent', "getPredictedEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPredictedEvents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PointerEvent'].prototype, "PointerEvent", "getPredictedEvents", arguments);
  }
}, 'prototype');