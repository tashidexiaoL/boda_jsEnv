// SVGPatternElement对象

bodavm.memory.globalobj['SVGPatternElement'] = function SVGPatternElement() {
  console.log_copy('SVGPatternElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGPatternElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPatternElement'], "SVGPatternElement");
bodavm.memory.globalobj['SVGPatternElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGPatternElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGPatternElement', "patternUnits", {
  configurable: true,
  enumerable: true,
  get: function patternUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "patternUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "patternContentUnits", {
  configurable: true,
  enumerable: true,
  get: function patternContentUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "patternContentUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "patternTransform", {
  configurable: true,
  enumerable: true,
  get: function patternTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "patternTransform_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "viewBox_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "href_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "requiredExtensions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPatternElement', "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPatternElement'].prototype, "SVGPatternElement", "systemLanguage_get", arguments);
  },
  set: undefined
}, 'prototype');