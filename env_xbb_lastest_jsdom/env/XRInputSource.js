// XRInputSource对象

bodavm.memory.globalobj['XRInputSource'] = function XRInputSource() {
  console.log_copy('XRInputSource 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRInputSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRInputSource'], "XRInputSource");
bodavm.toolsFunc.defineProperty('XRInputSource', "handedness", {
  configurable: true,
  enumerable: true,
  get: function handedness() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSource'].prototype, "XRInputSource", "handedness_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSource', "targetRayMode", {
  configurable: true,
  enumerable: true,
  get: function targetRayMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSource'].prototype, "XRInputSource", "targetRayMode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSource', "targetRaySpace", {
  configurable: true,
  enumerable: true,
  get: function targetRaySpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSource'].prototype, "XRInputSource", "targetRaySpace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSource', "gripSpace", {
  configurable: true,
  enumerable: true,
  get: function gripSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSource'].prototype, "XRInputSource", "gripSpace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSource', "gamepad", {
  configurable: true,
  enumerable: true,
  get: function gamepad() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSource'].prototype, "XRInputSource", "gamepad_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSource', "profiles", {
  configurable: true,
  enumerable: true,
  get: function profiles() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSource'].prototype, "XRInputSource", "profiles_get", arguments);
  },
  set: undefined
}, 'prototype');