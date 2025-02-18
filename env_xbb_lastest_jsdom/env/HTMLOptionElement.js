// HTMLOptionElement对象

bodavm.memory.globalobj['HTMLOptionElement'] = function HTMLOptionElement() {
  console.log_copy('HTMLOptionElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLOptionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLOptionElement'], "HTMLOptionElement");
bodavm.memory.globalobj['HTMLOptionElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLOptionElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "form_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "label_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "defaultSelected", {
  configurable: true,
  enumerable: true,
  get: function defaultSelected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "defaultSelected_get", arguments);
  },
  set: function defaultSelected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "defaultSelected_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "selected", {
  configurable: true,
  enumerable: true,
  get: function selected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "selected_get", arguments);
  },
  set: function selected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "selected_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "text_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLOptionElement', "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLOptionElement'].prototype, "HTMLOptionElement", "index_get", arguments);
  },
  set: undefined
}, 'prototype');