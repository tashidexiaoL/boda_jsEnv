// DataTransfer对象

bodavm.memory.globalobj['DataTransfer'] = function DataTransfer() {
  console.log_copy('DataTransfer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DataTransfer();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DataTransfer'], "DataTransfer");
bodavm.toolsFunc.defineProperty('DataTransfer', "dropEffect", {
  configurable: true,
  enumerable: true,
  get: function dropEffect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "dropEffect_get", arguments);
  },
  set: function dropEffect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "dropEffect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "effectAllowed", {
  configurable: true,
  enumerable: true,
  get: function effectAllowed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "effectAllowed_get", arguments);
  },
  set: function effectAllowed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "effectAllowed_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "items", {
  configurable: true,
  enumerable: true,
  get: function items() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "items_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "types", {
  configurable: true,
  enumerable: true,
  get: function types() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "types_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "files", {
  configurable: true,
  enumerable: true,
  get: function files() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "files_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "clearData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "clearData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "getData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "getData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "setData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "setData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DataTransfer', "setDragImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setDragImage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DataTransfer'].prototype, "DataTransfer", "setDragImage", arguments);
  }
}, 'prototype');