// HTMLFieldSetElement对象

bodavm.memory.globalobj['HTMLFieldSetElement'] = function HTMLFieldSetElement() {
  console.log_copy('HTMLFieldSetElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLFieldSetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLFieldSetElement'], "HTMLFieldSetElement");
bodavm.memory.globalobj['HTMLFieldSetElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLFieldSetElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "elements", {
  configurable: true,
  enumerable: true,
  get: function elements() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "elements_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "willValidate", {
  configurable: true,
  enumerable: true,
  get: function willValidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "willValidate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "validity", {
  configurable: true,
  enumerable: true,
  get: function validity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "validity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "validationMessage", {
  configurable: true,
  enumerable: true,
  get: function validationMessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "validationMessage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "checkValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "checkValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "reportValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reportValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "reportValidity", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLFieldSetElement', "setCustomValidity", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCustomValidity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLFieldSetElement'].prototype, "HTMLFieldSetElement", "setCustomValidity", arguments);
  }
}, 'prototype');