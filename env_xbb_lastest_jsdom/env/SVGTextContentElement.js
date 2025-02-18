// SVGTextContentElement对象

bodavm.memory.globalobj['SVGTextContentElement'] = function SVGTextContentElement() {
  console.log_copy('SVGTextContentElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTextContentElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTextContentElement'], "SVGTextContentElement");
bodavm.memory.globalobj['SVGTextContentElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGTextContentElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "textLength", {
  configurable: true,
  enumerable: true,
  get: function textLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "textLength_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "lengthAdjust", {
  configurable: true,
  enumerable: true,
  get: function lengthAdjust() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "lengthAdjust_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getCharNumAtPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharNumAtPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getCharNumAtPosition", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getComputedTextLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getComputedTextLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getComputedTextLength", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getEndPositionOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEndPositionOfChar() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getEndPositionOfChar", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getExtentOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getExtentOfChar() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getExtentOfChar", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getNumberOfChars", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNumberOfChars() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getNumberOfChars", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getRotationOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRotationOfChar() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getRotationOfChar", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getStartPositionOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStartPositionOfChar() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getStartPositionOfChar", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "getSubStringLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSubStringLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "getSubStringLength", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextContentElement', "selectSubString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectSubString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextContentElement'].prototype, "SVGTextContentElement", "selectSubString", arguments);
  }
}, 'prototype');