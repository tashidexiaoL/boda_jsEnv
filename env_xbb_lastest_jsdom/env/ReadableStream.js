// ReadableStream对象

bodavm.memory.globalobj['ReadableStream'] = function ReadableStream() {
  console.log_copy('ReadableStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.ReadableStream();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReadableStream'], "ReadableStream");
bodavm.toolsFunc.defineProperty('ReadableStream', "locked", {
  configurable: true,
  enumerable: true,
  get: function locked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStream'].prototype, "ReadableStream", "locked_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStream', "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStream'].prototype, "ReadableStream", "cancel", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStream', "getReader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getReader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStream'].prototype, "ReadableStream", "getReader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStream', "pipeThrough", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pipeThrough() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStream'].prototype, "ReadableStream", "pipeThrough", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStream', "pipeTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pipeTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStream'].prototype, "ReadableStream", "pipeTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStream', "tee", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function tee() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStream'].prototype, "ReadableStream", "tee", arguments);
  }
}, 'prototype');