// XRWebGLLayer对象

bodavm.memory.globalobj['XRWebGLLayer'] = function XRWebGLLayer() {
  console.log_copy('XRWebGLLayer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRWebGLLayer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRWebGLLayer': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRWebGLLayer'], "XRWebGLLayer");
bodavm.memory.globalobj['XRWebGLLayer'].prototype.__proto__ = bodavm.memory.globalobj['XRLayer'].prototype;
bodavm.memory.globalobj['XRWebGLLayer'].__proto__ = bodavm.memory.globalobj['XRLayer'];
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "getNativeFramebufferScaleFactor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNativeFramebufferScaleFactor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].undefined, "XRWebGLLayer", "getNativeFramebufferScaleFactor", arguments);
  }
});
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "antialias", {
  configurable: true,
  enumerable: true,
  get: function antialias() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].prototype, "XRWebGLLayer", "antialias_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "ignoreDepthValues", {
  configurable: true,
  enumerable: true,
  get: function ignoreDepthValues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].prototype, "XRWebGLLayer", "ignoreDepthValues_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "framebufferWidth", {
  configurable: true,
  enumerable: true,
  get: function framebufferWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].prototype, "XRWebGLLayer", "framebufferWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "framebufferHeight", {
  configurable: true,
  enumerable: true,
  get: function framebufferHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].prototype, "XRWebGLLayer", "framebufferHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "framebuffer", {
  configurable: true,
  enumerable: true,
  get: function framebuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].prototype, "XRWebGLLayer", "framebuffer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLLayer', "getViewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getViewport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLLayer'].prototype, "XRWebGLLayer", "getViewport", arguments);
  }
}, 'prototype');