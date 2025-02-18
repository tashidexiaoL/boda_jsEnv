// Range对象

bodavm.memory.globalobj['Range'] = function Range() {
  console.log_copy('Range 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Range();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Range'], "Range");
bodavm.memory.globalobj['Range'].prototype.__proto__ = bodavm.memory.globalobj['AbstractRange'].prototype;
bodavm.memory.globalobj['Range'].__proto__ = bodavm.memory.globalobj['AbstractRange'];
bodavm.toolsFunc.defineProperty('Range', "START_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('Range', "START_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('Range', "END_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('Range', "END_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('Range', "commonAncestorContainer", {
  configurable: true,
  enumerable: true,
  get: function commonAncestorContainer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "commonAncestorContainer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "START_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "START_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "END_TO_END", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "END_TO_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "cloneContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cloneContents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "cloneContents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "cloneRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cloneRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "cloneRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "collapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "collapse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "compareBoundaryPoints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compareBoundaryPoints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "compareBoundaryPoints", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "comparePoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function comparePoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "comparePoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "createContextualFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createContextualFragment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "createContextualFragment", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "deleteContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteContents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "deleteContents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "detach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function detach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "detach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "expand", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function expand() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "expand", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "extractContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function extractContents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "extractContents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "getBoundingClientRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBoundingClientRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "getBoundingClientRect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "getClientRects", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getClientRects() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "getClientRects", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "insertNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "insertNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "intersectsNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function intersectsNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "intersectsNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "isPointInRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "isPointInRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "selectNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "selectNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "selectNodeContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectNodeContents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "selectNodeContents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "setEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "setEnd", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "setEndAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setEndAfter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "setEndAfter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "setEndBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setEndBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "setEndBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "setStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "setStart", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "setStartAfter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStartAfter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "setStartAfter", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "setStartBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStartBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "setStartBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "surroundContents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function surroundContents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "surroundContents", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Range', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Range'].prototype, "Range", "toString", arguments);
  }
}, 'prototype');