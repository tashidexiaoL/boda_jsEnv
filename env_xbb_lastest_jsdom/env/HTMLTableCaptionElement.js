// HTMLTableCaptionElement对象

bodavm.memory.globalobj['HTMLTableCaptionElement'] = function HTMLTableCaptionElement() {
  console.log_copy('HTMLTableCaptionElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTableCaptionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTableCaptionElement'], "HTMLTableCaptionElement");
bodavm.memory.globalobj['HTMLTableCaptionElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTableCaptionElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTableCaptionElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCaptionElement'].prototype, "HTMLTableCaptionElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCaptionElement'].prototype, "HTMLTableCaptionElement", "align_set", arguments);
  }
}, 'prototype');