// NavigationHistoryEntry对象

bodavm.memory.globalobj['NavigationHistoryEntry'] = function NavigationHistoryEntry() {
  console.log_copy('NavigationHistoryEntry 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigationHistoryEntry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigationHistoryEntry'], "NavigationHistoryEntry");
bodavm.memory.globalobj['NavigationHistoryEntry'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['NavigationHistoryEntry'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "key_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "index_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "sameDocument", {
  configurable: true,
  enumerable: true,
  get: function sameDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "sameDocument_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "ondispose", {
  configurable: true,
  enumerable: true,
  get: function ondispose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "ondispose_get", arguments);
  },
  set: function ondispose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "ondispose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationHistoryEntry', "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationHistoryEntry'].prototype, "NavigationHistoryEntry", "getState", arguments);
  }
}, 'prototype');