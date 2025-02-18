// HTMLSourceElement对象

bodavm.memory.globalobj['HTMLSourceElement'] = function HTMLSourceElement() {
  console.log_copy('HTMLSourceElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLSourceElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLSourceElement'], "HTMLSourceElement");
bodavm.memory.globalobj['HTMLSourceElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLSourceElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "srcset", {
  configurable: true,
  enumerable: true,
  get: function srcset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "srcset_get", arguments);
  },
  set: function srcset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "srcset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "sizes_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLSourceElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLSourceElement'].prototype, "HTMLSourceElement", "height_set", arguments);
  }
}, 'prototype');