// SVGFEMorphologyElement对象

bodavm.memory.globalobj['SVGFEMorphologyElement'] = function SVGFEMorphologyElement() {
  console.log_copy('SVGFEMorphologyElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEMorphologyElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEMorphologyElement'], "SVGFEMorphologyElement");
bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEMorphologyElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "SVG_MORPHOLOGY_OPERATOR_DILATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "SVG_MORPHOLOGY_OPERATOR_ERODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "SVG_MORPHOLOGY_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "SVG_MORPHOLOGY_OPERATOR_DILATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "SVG_MORPHOLOGY_OPERATOR_ERODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "SVG_MORPHOLOGY_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "operator", {
  configurable: true,
  enumerable: true,
  get: function operator() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "operator_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "radiusX", {
  configurable: true,
  enumerable: true,
  get: function radiusX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "radiusX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "radiusY", {
  configurable: true,
  enumerable: true,
  get: function radiusY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "radiusY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEMorphologyElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEMorphologyElement'].prototype, "SVGFEMorphologyElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');