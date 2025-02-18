// MimeType对象

bodavm.memory.globalobj['MimeType'] = function MimeType() {
  console.log_copy('MimeType 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MimeType)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MimeType'], "MimeType");
bodavm.toolsFunc.defineProperty('MimeType', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeType'].prototype, "MimeType", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MimeType', "suffixes", {
  configurable: true,
  enumerable: true,
  get: function suffixes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeType'].prototype, "MimeType", "suffixes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MimeType', "description", {
  configurable: true,
  enumerable: true,
  get: function description() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeType'].prototype, "MimeType", "description_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MimeType', "enabledPlugin", {
  configurable: true,
  enumerable: true,
  get: function enabledPlugin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MimeType'].prototype, "MimeType", "enabledPlugin_get", arguments);
  },
  set: undefined
}, 'prototype');