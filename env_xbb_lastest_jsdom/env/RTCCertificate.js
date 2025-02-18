// RTCCertificate对象

bodavm.memory.globalobj['RTCCertificate'] = function RTCCertificate() {
  console.log_copy('RTCCertificate 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCCertificate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCCertificate'], "RTCCertificate");
bodavm.toolsFunc.defineProperty('RTCCertificate', "expires", {
  configurable: true,
  enumerable: true,
  get: function expires() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCCertificate'].prototype, "RTCCertificate", "expires_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCCertificate', "getFingerprints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFingerprints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCCertificate'].prototype, "RTCCertificate", "getFingerprints", arguments);
  }
}, 'prototype');