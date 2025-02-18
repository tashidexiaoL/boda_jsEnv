// Navigation对象

bodavm.memory.globalobj['Navigation'] = function Navigation() {
  console.log_copy('Navigation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Navigation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Navigation'], "Navigation");
bodavm.memory.globalobj['Navigation'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Navigation'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Navigation', "currentEntry", {
  configurable: true,
  enumerable: true,
  get: function currentEntry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "currentEntry_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "transition", {
  configurable: true,
  enumerable: true,
  get: function transition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "transition_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "canGoBack", {
  configurable: true,
  enumerable: true,
  get: function canGoBack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "canGoBack_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "canGoForward", {
  configurable: true,
  enumerable: true,
  get: function canGoForward() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "canGoForward_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "onnavigate", {
  configurable: true,
  enumerable: true,
  get: function onnavigate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "onnavigate_get", arguments);
  },
  set: function onnavigate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "onnavigate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "onnavigatesuccess", {
  configurable: true,
  enumerable: true,
  get: function onnavigatesuccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "onnavigatesuccess_get", arguments);
  },
  set: function onnavigatesuccess() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "onnavigatesuccess_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "onnavigateerror", {
  configurable: true,
  enumerable: true,
  get: function onnavigateerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "onnavigateerror_get", arguments);
  },
  set: function onnavigateerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "onnavigateerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "oncurrententrychange", {
  configurable: true,
  enumerable: true,
  get: function oncurrententrychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "oncurrententrychange_get", arguments);
  },
  set: function oncurrententrychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "oncurrententrychange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "back", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function back() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "back", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "forward", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forward() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "forward", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "navigate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function navigate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "navigate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "reload", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "reload", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "traverseTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function traverseTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "traverseTo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Navigation', "updateCurrentEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateCurrentEntry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Navigation'].prototype, "Navigation", "updateCurrentEntry", arguments);
  }
}, 'prototype');

// navigation对象

bodavm.memory.globalobj['navigation'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['navigation'].__proto__ = bodavm.memory.globalobj['Navigation'].prototype;