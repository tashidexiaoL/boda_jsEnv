// TrustedScriptURL对象

bodavm.memory.globalobj['TrustedScriptURL'] = function TrustedScriptURL() {
  console.log_copy('TrustedScriptURL 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TrustedScriptURL)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TrustedScriptURL'], "TrustedScriptURL");
bodavm.toolsFunc.defineProperty('TrustedScriptURL', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedScriptURL'].prototype, "TrustedScriptURL", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TrustedScriptURL', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrustedScriptURL'].prototype, "TrustedScriptURL", "toString", arguments);
  }
}, 'prototype');