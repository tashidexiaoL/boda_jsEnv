// HTMLHeadingElement对象

bodavm.memory.globalobj['HTMLHeadingElement'] = function HTMLHeadingElement() {
  console.log_copy('HTMLHeadingElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLHeadingElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLHeadingElement'], "HTMLHeadingElement");
bodavm.memory.globalobj['HTMLHeadingElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLHeadingElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLHeadingElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHeadingElement'].prototype, "HTMLHeadingElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLHeadingElement'].prototype, "HTMLHeadingElement", "align_set", arguments);
  }
}, 'prototype');