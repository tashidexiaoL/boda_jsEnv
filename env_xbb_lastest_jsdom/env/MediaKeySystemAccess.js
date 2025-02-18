// MediaKeySystemAccess对象

bodavm.memory.globalobj['MediaKeySystemAccess'] = function MediaKeySystemAccess() {
  console.log_copy('MediaKeySystemAccess 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaKeySystemAccess)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaKeySystemAccess'], "MediaKeySystemAccess");
bodavm.toolsFunc.defineProperty('MediaKeySystemAccess', "keySystem", {
  configurable: true,
  enumerable: true,
  get: function keySystem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySystemAccess'].prototype, "MediaKeySystemAccess", "keySystem_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySystemAccess', "createMediaKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaKeys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySystemAccess'].prototype, "MediaKeySystemAccess", "createMediaKeys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySystemAccess', "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySystemAccess'].prototype, "MediaKeySystemAccess", "getConfiguration", arguments);
  }
}, 'prototype');