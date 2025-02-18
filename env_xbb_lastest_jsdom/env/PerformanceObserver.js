// PerformanceObserver对象

bodavm.memory.globalobj['PerformanceObserver'] = function PerformanceObserver() {
  console.log_copy('PerformanceObserver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PerformanceObserver': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceObserver'], "PerformanceObserver");
bodavm.toolsFunc.defineProperty('PerformanceObserver', "supportedEntryTypes", {
  configurable: true,
  enumerable: true,
  get: function supportedEntryTypes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserver'].undefined, "PerformanceObserver", "supportedEntryTypes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('PerformanceObserver', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserver'].prototype, "PerformanceObserver", "disconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceObserver', "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserver'].prototype, "PerformanceObserver", "observe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceObserver', "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserver'].prototype, "PerformanceObserver", "takeRecords", arguments);
  }
}, 'prototype');