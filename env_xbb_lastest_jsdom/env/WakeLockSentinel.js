// WakeLockSentinel对象

bodavm.memory.globalobj['WakeLockSentinel'] = function WakeLockSentinel() {
  console.log_copy('WakeLockSentinel 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WakeLockSentinel)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WakeLockSentinel'], "WakeLockSentinel");
bodavm.memory.globalobj['WakeLockSentinel'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['WakeLockSentinel'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('WakeLockSentinel', "onrelease", {
  configurable: true,
  enumerable: true,
  get: function onrelease() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WakeLockSentinel'].prototype, "WakeLockSentinel", "onrelease_get", arguments);
  },
  set: function onrelease() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WakeLockSentinel'].prototype, "WakeLockSentinel", "onrelease_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WakeLockSentinel', "released", {
  configurable: true,
  enumerable: true,
  get: function released() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WakeLockSentinel'].prototype, "WakeLockSentinel", "released_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WakeLockSentinel', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WakeLockSentinel'].prototype, "WakeLockSentinel", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WakeLockSentinel', "release", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function release() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WakeLockSentinel'].prototype, "WakeLockSentinel", "release", arguments);
  }
}, 'prototype');