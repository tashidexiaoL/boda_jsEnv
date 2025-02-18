// HTMLTableCellElement对象

bodavm.memory.globalobj['HTMLTableCellElement'] = function HTMLTableCellElement() {
  console.log_copy('HTMLTableCellElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLTableCellElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLTableCellElement'], "HTMLTableCellElement");
bodavm.memory.globalobj['HTMLTableCellElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLTableCellElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "colSpan", {
  configurable: true,
  enumerable: true,
  get: function colSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "colSpan_get", arguments);
  },
  set: function colSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "colSpan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "rowSpan", {
  configurable: true,
  enumerable: true,
  get: function rowSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "rowSpan_get", arguments);
  },
  set: function rowSpan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "rowSpan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "headers", {
  configurable: true,
  enumerable: true,
  get: function headers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "headers_get", arguments);
  },
  set: function headers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "headers_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "cellIndex", {
  configurable: true,
  enumerable: true,
  get: function cellIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "cellIndex_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "axis", {
  configurable: true,
  enumerable: true,
  get: function axis() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "axis_get", arguments);
  },
  set: function axis() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "axis_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "ch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "chOff_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "noWrap", {
  configurable: true,
  enumerable: true,
  get: function noWrap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "noWrap_get", arguments);
  },
  set: function noWrap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "noWrap_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "vAlign_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "bgColor_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "abbr", {
  configurable: true,
  enumerable: true,
  get: function abbr() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "abbr_get", arguments);
  },
  set: function abbr() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "abbr_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLTableCellElement', "scope", {
  configurable: true,
  enumerable: true,
  get: function scope() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "scope_get", arguments);
  },
  set: function scope() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLTableCellElement'].prototype, "HTMLTableCellElement", "scope_set", arguments);
  }
}, 'prototype');