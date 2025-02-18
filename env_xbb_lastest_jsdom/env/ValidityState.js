// ValidityState对象

bodavm.memory.globalobj['ValidityState'] = function ValidityState() {
  console.log_copy('ValidityState 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ValidityState)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ValidityState'], "ValidityState");
bodavm.toolsFunc.defineProperty('ValidityState', "valueMissing", {
  configurable: true,
  enumerable: true,
  get: function valueMissing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "valueMissing_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "typeMismatch", {
  configurable: true,
  enumerable: true,
  get: function typeMismatch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "typeMismatch_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "patternMismatch", {
  configurable: true,
  enumerable: true,
  get: function patternMismatch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "patternMismatch_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "tooLong", {
  configurable: true,
  enumerable: true,
  get: function tooLong() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "tooLong_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "tooShort", {
  configurable: true,
  enumerable: true,
  get: function tooShort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "tooShort_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "rangeUnderflow", {
  configurable: true,
  enumerable: true,
  get: function rangeUnderflow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "rangeUnderflow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "rangeOverflow", {
  configurable: true,
  enumerable: true,
  get: function rangeOverflow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "rangeOverflow_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "stepMismatch", {
  configurable: true,
  enumerable: true,
  get: function stepMismatch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "stepMismatch_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "badInput", {
  configurable: true,
  enumerable: true,
  get: function badInput() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "badInput_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "customError", {
  configurable: true,
  enumerable: true,
  get: function customError() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "customError_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ValidityState', "valid", {
  configurable: true,
  enumerable: true,
  get: function valid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ValidityState'].prototype, "ValidityState", "valid_get", arguments);
  },
  set: undefined
}, 'prototype');