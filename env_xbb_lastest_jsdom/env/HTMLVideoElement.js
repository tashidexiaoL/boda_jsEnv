// HTMLVideoElement对象

bodavm.memory.globalobj['HTMLVideoElement'] = function HTMLVideoElement() {
  console.log_copy('HTMLVideoElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLVideoElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLVideoElement'], "HTMLVideoElement");
bodavm.memory.globalobj['HTMLVideoElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLMediaElement'].prototype;
bodavm.memory.globalobj['HTMLVideoElement'].__proto__ = bodavm.memory.globalobj['HTMLMediaElement'];
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "width_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "height_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "videoWidth", {
  configurable: true,
  enumerable: true,
  get: function videoWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "videoWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "videoHeight", {
  configurable: true,
  enumerable: true,
  get: function videoHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "videoHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "poster", {
  configurable: true,
  enumerable: true,
  get: function poster() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "poster_get", arguments);
  },
  set: function poster() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "poster_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitDecodedFrameCount", {
  configurable: true,
  enumerable: true,
  get: function webkitDecodedFrameCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitDecodedFrameCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitDroppedFrameCount", {
  configurable: true,
  enumerable: true,
  get: function webkitDroppedFrameCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitDroppedFrameCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "playsInline", {
  configurable: true,
  enumerable: true,
  get: function playsInline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "playsInline_get", arguments);
  },
  set: function playsInline() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "playsInline_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "onenterpictureinpicture", {
  configurable: true,
  enumerable: true,
  get: function onenterpictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "onenterpictureinpicture_get", arguments);
  },
  set: function onenterpictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "onenterpictureinpicture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "onleavepictureinpicture", {
  configurable: true,
  enumerable: true,
  get: function onleavepictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "onleavepictureinpicture_get", arguments);
  },
  set: function onleavepictureinpicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "onleavepictureinpicture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "disablePictureInPicture", {
  configurable: true,
  enumerable: true,
  get: function disablePictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "disablePictureInPicture_get", arguments);
  },
  set: function disablePictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "disablePictureInPicture_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "cancelVideoFrameCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelVideoFrameCallback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "cancelVideoFrameCallback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "requestPictureInPicture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "requestPictureInPicture", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "requestVideoFrameCallback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestVideoFrameCallback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "requestVideoFrameCallback", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitSupportsFullscreen", {
  configurable: true,
  enumerable: true,
  get: function webkitSupportsFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitSupportsFullscreen_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitDisplayingFullscreen", {
  configurable: true,
  enumerable: true,
  get: function webkitDisplayingFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitDisplayingFullscreen_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "getVideoPlaybackQuality", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVideoPlaybackQuality() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "getVideoPlaybackQuality", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitEnterFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitEnterFullScreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitEnterFullScreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitEnterFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitEnterFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitEnterFullscreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitExitFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitExitFullScreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitExitFullScreen", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLVideoElement', "webkitExitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitExitFullscreen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLVideoElement'].prototype, "HTMLVideoElement", "webkitExitFullscreen", arguments);
  }
}, 'prototype');