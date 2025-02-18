// DocumentFragment对象

bodavm.memory.globalobj['DocumentFragment'] = function DocumentFragment() {
  console.log_copy('DocumentFragment 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DocumentFragment();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DocumentFragment'], "DocumentFragment");
bodavm.memory.globalobj['DocumentFragment'].prototype.__proto__ = bodavm.memory.globalobj['Node'].prototype;
bodavm.memory.globalobj['DocumentFragment'].__proto__ = bodavm.memory.globalobj['Node'];
bodavm.toolsFunc.defineProperty('DocumentFragment', "children", {
  configurable: true,
  enumerable: true,
  get: function children() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "children_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: function firstElementChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "firstElementChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: function lastElementChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "lastElementChild_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "childElementCount", {
  configurable: true,
  enumerable: true,
  get: function childElementCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "childElementCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "append", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementById() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "getElementById", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prepend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "prepend", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "querySelector", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelectorAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "querySelectorAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DocumentFragment', "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChildren() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DocumentFragment'].prototype, "DocumentFragment", "replaceChildren", arguments);
  }
}, 'prototype');