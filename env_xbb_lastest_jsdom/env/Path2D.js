// Path2D对象

bodavm.memory.globalobj['Path2D'] = function Path2D() {
  console.log_copy('Path2D 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Path2D();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Path2D'], "Path2D");
bodavm.toolsFunc.defineProperty('Path2D', "addPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addPath() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "addPath", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "roundRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function roundRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "roundRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "arc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arc() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "arc", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "arcTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arcTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "arcTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "bezierCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bezierCurveTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "bezierCurveTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "closePath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function closePath() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "closePath", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "ellipse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function ellipse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "ellipse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "lineTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "lineTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function moveTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "moveTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "quadraticCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function quadraticCurveTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "quadraticCurveTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Path2D', "rect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Path2D'].prototype, "Path2D", "rect", arguments);
  }
}, 'prototype');