// DOMImplementation对象

bodavm.memory.globalobj['DOMImplementation'] = function DOMImplementation() {
  console.log_copy('DOMImplementation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DOMImplementation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMImplementation'], "DOMImplementation");
bodavm.toolsFunc.defineProperty('DOMImplementation', "createDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMImplementation'].prototype, "DOMImplementation", "createDocument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMImplementation', "createDocumentType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDocumentType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMImplementation'].prototype, "DOMImplementation", "createDocumentType", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMImplementation', "createHTMLDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createHTMLDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMImplementation'].prototype, "DOMImplementation", "createHTMLDocument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMImplementation', "hasFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasFeature() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMImplementation'].prototype, "DOMImplementation", "hasFeature", arguments);
  }
}, 'prototype');