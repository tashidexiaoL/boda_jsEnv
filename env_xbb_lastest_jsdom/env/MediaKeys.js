// MediaKeys对象

bodavm.memory.globalobj['MediaKeys'] = function MediaKeys() {
  console.log_copy('MediaKeys 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaKeys)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaKeys'], "MediaKeys");
bodavm.toolsFunc.defineProperty('MediaKeys', "createSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSession() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeys'].prototype, "MediaKeys", "createSession", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeys', "setServerCertificate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setServerCertificate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeys'].prototype, "MediaKeys", "setServerCertificate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeys', "getStatusForPolicy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStatusForPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeys'].prototype, "MediaKeys", "getStatusForPolicy", arguments);
  }
}, 'prototype');