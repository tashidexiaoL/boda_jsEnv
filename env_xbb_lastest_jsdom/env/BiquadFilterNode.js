// BiquadFilterNode对象

bodavm.memory.globalobj['BiquadFilterNode'] = function BiquadFilterNode() {
  console.log_copy('BiquadFilterNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BiquadFilterNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BiquadFilterNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BiquadFilterNode'], "BiquadFilterNode");
bodavm.memory.globalobj['BiquadFilterNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['BiquadFilterNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('BiquadFilterNode', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BiquadFilterNode', "frequency", {
  configurable: true,
  enumerable: true,
  get: function frequency() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "frequency_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BiquadFilterNode', "detune", {
  configurable: true,
  enumerable: true,
  get: function detune() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "detune_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BiquadFilterNode', "Q", {
  configurable: true,
  enumerable: true,
  get: function Q() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "Q_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BiquadFilterNode', "gain", {
  configurable: true,
  enumerable: true,
  get: function gain() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "gain_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BiquadFilterNode', "getFrequencyResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFrequencyResponse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BiquadFilterNode'].prototype, "BiquadFilterNode", "getFrequencyResponse", arguments);
  }
}, 'prototype');