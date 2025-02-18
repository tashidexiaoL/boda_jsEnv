// PerformanceObserverEntryList对象

bodavm.memory.globalobj['PerformanceObserverEntryList'] = function PerformanceObserverEntryList() {
  console.log_copy('PerformanceObserverEntryList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceObserverEntryList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceObserverEntryList'], "PerformanceObserverEntryList");
bodavm.toolsFunc.defineProperty('PerformanceObserverEntryList', "getEntries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserverEntryList'].prototype, "PerformanceObserverEntryList", "getEntries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceObserverEntryList', "getEntriesByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserverEntryList'].prototype, "PerformanceObserverEntryList", "getEntriesByName", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceObserverEntryList', "getEntriesByType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceObserverEntryList'].prototype, "PerformanceObserverEntryList", "getEntriesByType", arguments);
  }
}, 'prototype');