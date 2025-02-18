// ImageTrackList对象

bodavm.memory.globalobj['ImageTrackList'] = function ImageTrackList() {
  console.log_copy('ImageTrackList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ImageTrackList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageTrackList'], "ImageTrackList");
bodavm.toolsFunc.defineProperty('ImageTrackList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrackList'].prototype, "ImageTrackList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageTrackList', "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrackList'].prototype, "ImageTrackList", "selectedIndex_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageTrackList', "selectedTrack", {
  configurable: true,
  enumerable: true,
  get: function selectedTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrackList'].prototype, "ImageTrackList", "selectedTrack_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageTrackList', "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrackList'].prototype, "ImageTrackList", "ready_get", arguments);
  },
  set: undefined
}, 'prototype');