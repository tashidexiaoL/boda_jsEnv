// ImageBitmapRenderingContext对象

bodavm.memory.globalobj['ImageBitmapRenderingContext'] = function ImageBitmapRenderingContext() {
  console.log_copy('ImageBitmapRenderingContext 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ImageBitmapRenderingContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageBitmapRenderingContext'], "ImageBitmapRenderingContext");
bodavm.toolsFunc.defineProperty('ImageBitmapRenderingContext', "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageBitmapRenderingContext'].prototype, "ImageBitmapRenderingContext", "canvas_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageBitmapRenderingContext', "transferFromImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferFromImageBitmap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageBitmapRenderingContext'].prototype, "ImageBitmapRenderingContext", "transferFromImageBitmap", arguments);
  }
}, 'prototype');