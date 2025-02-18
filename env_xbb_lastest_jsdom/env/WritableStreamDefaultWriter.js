// WritableStreamDefaultWriter对象

bodavm.memory.globalobj['WritableStreamDefaultWriter'] = function WritableStreamDefaultWriter() {
  console.log_copy('WritableStreamDefaultWriter 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WritableStreamDefaultWriter)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WritableStreamDefaultWriter': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WritableStreamDefaultWriter'], "WritableStreamDefaultWriter");
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "closed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "desiredSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "ready_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseLock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "releaseLock", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultWriter', "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultWriter'].prototype, "WritableStreamDefaultWriter", "write", arguments);
  }
}, 'prototype');