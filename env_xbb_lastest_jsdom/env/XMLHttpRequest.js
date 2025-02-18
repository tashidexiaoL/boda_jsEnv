// XMLHttpRequest对象

bodavm.memory.globalobj['XMLHttpRequest'] = function XMLHttpRequest() {
  console.log_copy('XMLHttpRequest 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.XMLHttpRequest();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XMLHttpRequest'], "XMLHttpRequest");
bodavm.memory.globalobj['XMLHttpRequest'].prototype.__proto__ = bodavm.memory.globalobj['XMLHttpRequestEventTarget'].prototype;
bodavm.memory.globalobj['XMLHttpRequest'].__proto__ = bodavm.memory.globalobj['XMLHttpRequestEventTarget'];
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "UNSENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "OPENED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "HEADERS_RECEIVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "onreadystatechange", {
  configurable: true,
  enumerable: true,
  get: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "onreadystatechange_get", arguments);
  },
  set: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "onreadystatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "timeout", {
  configurable: true,
  enumerable: true,
  get: function timeout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "timeout_get", arguments);
  },
  set: function timeout() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "timeout_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "withCredentials", {
  configurable: true,
  enumerable: true,
  get: function withCredentials() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "withCredentials_get", arguments);
  },
  set: function withCredentials() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "withCredentials_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "upload", {
  configurable: true,
  enumerable: true,
  get: function upload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "upload_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "responseURL", {
  configurable: true,
  enumerable: true,
  get: function responseURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "responseURL_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "status_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "statusText", {
  configurable: true,
  enumerable: true,
  get: function statusText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "statusText_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "responseType", {
  configurable: true,
  enumerable: true,
  get: function responseType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "responseType_get", arguments);
  },
  set: function responseType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "responseType_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "response", {
  configurable: true,
  enumerable: true,
  get: function response() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "response_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "responseText", {
  configurable: true,
  enumerable: true,
  get: function responseText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "responseText_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "responseXML", {
  configurable: true,
  enumerable: true,
  get: function responseXML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "responseXML_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "UNSENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "OPENED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "HEADERS_RECEIVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "DONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "getAllResponseHeaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllResponseHeaders() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "getAllResponseHeaders", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "getResponseHeader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getResponseHeader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "getResponseHeader", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "open", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "overrideMimeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function overrideMimeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "overrideMimeType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "send", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XMLHttpRequest', "setRequestHeader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRequestHeader() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XMLHttpRequest'].prototype, "XMLHttpRequest", "setRequestHeader", arguments);
  }
}, 'prototype');