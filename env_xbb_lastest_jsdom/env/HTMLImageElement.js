// HTMLImageElement对象

bodavm.memory.globalobj['HTMLImageElement'] = function HTMLImageElement() {
  console.log_copy('HTMLImageElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLImageElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLImageElement'], "HTMLImageElement");
bodavm.memory.globalobj['HTMLImageElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLImageElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLImageElement', "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "alt_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "src_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "srcset", {
  configurable: true,
  enumerable: true,
  get: function srcset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "srcset_get", arguments);
  },
  set: function srcset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "srcset_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "sizes_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "crossOrigin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "useMap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "isMap", {
  configurable: true,
  enumerable: true,
  get: function isMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "isMap_get", arguments);
  },
  set: function isMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "isMap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: function naturalWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "naturalWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: function naturalHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "naturalHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "complete", {
  configurable: true,
  enumerable: true,
  get: function complete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "complete_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "currentSrc", {
  configurable: true,
  enumerable: true,
  get: function currentSrc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "currentSrc_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "referrerPolicy_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "decoding", {
  configurable: true,
  enumerable: true,
  get: function decoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "decoding_get", arguments);
  },
  set: function decoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "decoding_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "lowsrc", {
  configurable: true,
  enumerable: true,
  get: function lowsrc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "lowsrc_get", arguments);
  },
  set: function lowsrc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "lowsrc_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "hspace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "vspace_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "longDesc_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "border_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "decode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "fetchPriority_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLImageElement', "loading", {
  configurable: true,
  enumerable: true,
  get: function loading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "loading_get", arguments);
  },
  set: function loading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLImageElement'].prototype, "HTMLImageElement", "loading_set", arguments);
  }
}, 'prototype');