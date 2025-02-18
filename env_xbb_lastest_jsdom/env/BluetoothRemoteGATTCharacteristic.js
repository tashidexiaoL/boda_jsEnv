// BluetoothRemoteGATTCharacteristic对象

bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'] = function BluetoothRemoteGATTCharacteristic() {
  console.log_copy('BluetoothRemoteGATTCharacteristic 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothRemoteGATTCharacteristic)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'], "BluetoothRemoteGATTCharacteristic");
bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "service", {
  configurable: true,
  enumerable: true,
  get: function service() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "service_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "uuid", {
  configurable: true,
  enumerable: true,
  get: function uuid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "uuid_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "properties", {
  configurable: true,
  enumerable: true,
  get: function properties() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "properties_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "value_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "oncharacteristicvaluechanged", {
  configurable: true,
  enumerable: true,
  get: function oncharacteristicvaluechanged() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "oncharacteristicvaluechanged_get", arguments);
  },
  set: function oncharacteristicvaluechanged() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "oncharacteristicvaluechanged_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "getDescriptor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDescriptor() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "getDescriptor", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "getDescriptors", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDescriptors() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "getDescriptors", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "readValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "readValue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "startNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startNotifications() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "startNotifications", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "stopNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stopNotifications() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "stopNotifications", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "writeValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "writeValue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "writeValueWithResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValueWithResponse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "writeValueWithResponse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTCharacteristic', "writeValueWithoutResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValueWithoutResponse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTCharacteristic'].prototype, "BluetoothRemoteGATTCharacteristic", "writeValueWithoutResponse", arguments);
  }
}, 'prototype');