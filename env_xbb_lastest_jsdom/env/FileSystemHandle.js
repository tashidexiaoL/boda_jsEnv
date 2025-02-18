// FileSystemHandle对象

bodavm.memory.globalobj['FileSystemHandle'] = function FileSystemHandle() {
  console.log_copy('FileSystemHandle 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FileSystemHandle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FileSystemHandle'], "FileSystemHandle");
bodavm.toolsFunc.defineProperty('FileSystemHandle', "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemHandle'].prototype, "FileSystemHandle", "kind_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemHandle', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemHandle'].prototype, "FileSystemHandle", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemHandle', "isSameEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSameEntry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemHandle'].prototype, "FileSystemHandle", "isSameEntry", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemHandle', "queryPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryPermission() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemHandle'].prototype, "FileSystemHandle", "queryPermission", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemHandle', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemHandle'].prototype, "FileSystemHandle", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FileSystemHandle', "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPermission() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileSystemHandle'].prototype, "FileSystemHandle", "requestPermission", arguments);
  }
}, 'prototype');