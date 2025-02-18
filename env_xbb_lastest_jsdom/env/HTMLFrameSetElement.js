// HTMLFrameSetElement对象

bodavm.memory.globalobj['HTMLFrameSetElement'] = function HTMLFrameSetElement() {
  console.log_copy('HTMLFrameSetElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLFrameSetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLFrameSetElement'], "HTMLFrameSetElement");
bodavm.memory.globalobj['HTMLFrameSetElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLFrameSetElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "cols", {
  configurable: true,
  enumerable: true,
  get: function cols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "cols_get", arguments);
  },
  set: function cols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "cols_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "rows", {
  configurable: true,
  enumerable: true,
  get: function rows() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "rows_get", arguments);
  },
  set: function rows() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "rows_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onblur_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onfocus_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onresize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onscroll_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onafterprint", {
  configurable: true,
  enumerable: true,
  get: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onafterprint_get", arguments);
  },
  set: function onafterprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onafterprint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onbeforeprint", {
  configurable: true,
  enumerable: true,
  get: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onbeforeprint_get", arguments);
  },
  set: function onbeforeprint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onbeforeprint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onbeforeunload", {
  configurable: true,
  enumerable: true,
  get: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onbeforeunload_get", arguments);
  },
  set: function onbeforeunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onbeforeunload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onhashchange", {
  configurable: true,
  enumerable: true,
  get: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onhashchange_get", arguments);
  },
  set: function onhashchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onhashchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onlanguagechange", {
  configurable: true,
  enumerable: true,
  get: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onlanguagechange_get", arguments);
  },
  set: function onlanguagechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onlanguagechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onmessageerror_get", arguments);
  },
  set: function onmessageerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onmessageerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onoffline", {
  configurable: true,
  enumerable: true,
  get: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onoffline_get", arguments);
  },
  set: function onoffline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onoffline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "ononline", {
  configurable: true,
  enumerable: true,
  get: function ononline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "ononline_get", arguments);
  },
  set: function ononline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "ononline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onpagehide", {
  configurable: true,
  enumerable: true,
  get: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onpagehide_get", arguments);
  },
  set: function onpagehide() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onpagehide_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onpageshow", {
  configurable: true,
  enumerable: true,
  get: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onpageshow_get", arguments);
  },
  set: function onpageshow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onpageshow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onpopstate", {
  configurable: true,
  enumerable: true,
  get: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onpopstate_get", arguments);
  },
  set: function onpopstate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onpopstate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onrejectionhandled", {
  configurable: true,
  enumerable: true,
  get: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onrejectionhandled_get", arguments);
  },
  set: function onrejectionhandled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onrejectionhandled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onstorage", {
  configurable: true,
  enumerable: true,
  get: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onstorage_get", arguments);
  },
  set: function onstorage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onstorage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onunhandledrejection", {
  configurable: true,
  enumerable: true,
  get: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onunhandledrejection_get", arguments);
  },
  set: function onunhandledrejection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onunhandledrejection_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFrameSetElement', "onunload", {
  configurable: true,
  enumerable: true,
  get: function onunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onunload_get", arguments);
  },
  set: function onunload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFrameSetElement'].prototype, "HTMLFrameSetElement", "onunload_set", arguments);
  }
}, 'prototype');