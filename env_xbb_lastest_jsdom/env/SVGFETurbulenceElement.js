// SVGFETurbulenceElement对象

bodavm.memory.globalobj['SVGFETurbulenceElement'] = function SVGFETurbulenceElement() {
  console.log_copy('SVGFETurbulenceElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFETurbulenceElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFETurbulenceElement'], "SVGFETurbulenceElement");
bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFETurbulenceElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_STITCHTYPE_NOSTITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_STITCHTYPE_STITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_STITCHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_TURBULENCE_TYPE_TURBULENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_TURBULENCE_TYPE_FRACTALNOISE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_TURBULENCE_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_STITCHTYPE_NOSTITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_STITCHTYPE_STITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_STITCHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_TURBULENCE_TYPE_TURBULENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_TURBULENCE_TYPE_FRACTALNOISE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "SVG_TURBULENCE_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "baseFrequencyX", {
  configurable: true,
  enumerable: true,
  get: function baseFrequencyX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "baseFrequencyX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "baseFrequencyY", {
  configurable: true,
  enumerable: true,
  get: function baseFrequencyY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "baseFrequencyY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "numOctaves", {
  configurable: true,
  enumerable: true,
  get: function numOctaves() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "numOctaves_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "seed", {
  configurable: true,
  enumerable: true,
  get: function seed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "seed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "stitchTiles", {
  configurable: true,
  enumerable: true,
  get: function stitchTiles() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "stitchTiles_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFETurbulenceElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFETurbulenceElement'].prototype, "SVGFETurbulenceElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');