// MIDIOutput对象

bodavm.memory.globalobj['MIDIOutput'] = function MIDIOutput() {
  console.log_copy('MIDIOutput 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIOutput)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIOutput'], "MIDIOutput");
bodavm.memory.globalobj['MIDIOutput'].prototype.__proto__ = bodavm.memory.globalobj['MIDIPort'].prototype;
bodavm.memory.globalobj['MIDIOutput'].__proto__ = bodavm.memory.globalobj['MIDIPort'];
bodavm.toolsFunc.defineProperty('MIDIOutput', "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutput'].prototype, "MIDIOutput", "send", arguments);
  }
}, 'prototype');