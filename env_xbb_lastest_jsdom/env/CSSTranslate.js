// CSSTranslate对象

bodavm.memory.globalobj['CSSTranslate'] = function CSSTranslate() {
  console.log_copy('CSSTranslate 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSTranslate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSTranslate': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSTranslate'], "CSSTranslate");
bodavm.memory.globalobj['CSSTranslate'].prototype.__proto__ = bodavm.memory.globalobj['CSSTransformComponent'].prototype;
bodavm.memory.globalobj['CSSTranslate'].__proto__ = bodavm.memory.globalobj['CSSTransformComponent'];
bodavm.toolsFunc.defineProperty('CSSTranslate', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTranslate'].prototype, "CSSTranslate", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTranslate'].prototype, "CSSTranslate", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTranslate', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTranslate'].prototype, "CSSTranslate", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTranslate'].prototype, "CSSTranslate", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTranslate', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTranslate'].prototype, "CSSTranslate", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTranslate'].prototype, "CSSTranslate", "z_set", arguments);
  }
}, 'prototype');