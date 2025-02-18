// TreeWalker对象

bodavm.memory.globalobj['TreeWalker'] = function TreeWalker() {
  console.log_copy('TreeWalker 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TreeWalker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TreeWalker'], "TreeWalker");
bodavm.toolsFunc.defineProperty('TreeWalker', "root", {
  configurable: true,
  enumerable: true,
  get: function root() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "root_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "whatToShow", {
  configurable: true,
  enumerable: true,
  get: function whatToShow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "whatToShow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "filter", {
  configurable: true,
  enumerable: true,
  get: function filter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "filter_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "currentNode", {
  configurable: true,
  enumerable: true,
  get: function currentNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "currentNode_get", arguments);
  },
  set: function currentNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "currentNode_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "firstChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function firstChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "firstChild", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "lastChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lastChild() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "lastChild", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "nextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function nextNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "nextNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "nextSibling", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function nextSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "nextSibling", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "parentNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parentNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "parentNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "previousNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function previousNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "previousNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TreeWalker', "previousSibling", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function previousSibling() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TreeWalker'].prototype, "TreeWalker", "previousSibling", arguments);
  }
}, 'prototype');