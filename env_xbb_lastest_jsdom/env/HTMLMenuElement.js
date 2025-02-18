// HTMLMenuElement对象

bodavm.memory.globalobj['HTMLMenuElement'] = function HTMLMenuElement() {
  console.log_copy('HTMLMenuElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLMenuElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLMenuElement'], "HTMLMenuElement");
bodavm.memory.globalobj['HTMLMenuElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLMenuElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLMenuElement', "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMenuElement'].prototype, "HTMLMenuElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLMenuElement'].prototype, "HTMLMenuElement", "compact_set", arguments);
  }
}, 'prototype');