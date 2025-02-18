// SVGMatrix对象

bodavm.memory.globalobj['SVGMatrix'] = function SVGMatrix() {
  console.log_copy('SVGMatrix 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGMatrix)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGMatrix'], "SVGMatrix");
bodavm.toolsFunc.defineProperty('SVGMatrix', "a", {
  configurable: true,
  enumerable: true,
  get: function a() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "a_get", arguments);
  },
  set: function a() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "a_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "b", {
  configurable: true,
  enumerable: true,
  get: function b() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "b_get", arguments);
  },
  set: function b() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "b_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "c", {
  configurable: true,
  enumerable: true,
  get: function c() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "c_get", arguments);
  },
  set: function c() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "c_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "d", {
  configurable: true,
  enumerable: true,
  get: function d() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "d_get", arguments);
  },
  set: function d() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "d_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "e", {
  configurable: true,
  enumerable: true,
  get: function e() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "e_get", arguments);
  },
  set: function e() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "e_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "f", {
  configurable: true,
  enumerable: true,
  get: function f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "f_get", arguments);
  },
  set: function f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "f_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "flipX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "flipX", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "flipY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "flipY", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "inverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function inverse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "inverse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "multiply", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function multiply() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "multiply", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "rotate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "rotateFromVector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateFromVector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "rotateFromVector", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "scale", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "scaleNonUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scaleNonUniform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "scaleNonUniform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "skewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "skewX", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "skewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "skewY", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMatrix', "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMatrix'].prototype, "SVGMatrix", "translate", arguments);
  }
}, 'prototype');