// XMLHttpRequestEventTarget对象

bodavm.memory.globalobj['XMLHttpRequestEventTarget'] = function XMLHttpRequestEventTarget() {
  console.log_copy('XMLHttpRequestEventTarget 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XMLHttpRequestEventTarget)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XMLHttpRequestEventTarget'], "XMLHttpRequestEventTarget");
bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['XMLHttpRequestEventTarget'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onloadstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onprogress_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onabort_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onload_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "ontimeout", {
  configurable: true,
  enumerable: true,
  get: function ontimeout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "ontimeout_get", arguments);
  },
  set: function ontimeout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "ontimeout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequestEventTarget', "onloadend", {
  configurable: true,
  enumerable: true,
  get: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onloadend_get", arguments);
  },
  set: function onloadend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype, "XMLHttpRequestEventTarget", "onloadend_set", arguments);
  }
}, 'prototype');