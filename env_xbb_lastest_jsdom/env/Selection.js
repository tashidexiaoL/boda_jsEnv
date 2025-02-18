// Selection对象

bodavm.memory.globalobj['Selection'] = function Selection() {
  console.log_copy('Selection 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Selection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Selection'], "Selection");
bodavm.toolsFunc.defineProperty('Selection', "anchorNode", {
  configurable: true,
  enumerable: true,
  get: function anchorNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "anchorNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "anchorOffset", {
  configurable: true,
  enumerable: true,
  get: function anchorOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "anchorOffset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "focusNode", {
  configurable: true,
  enumerable: true,
  get: function focusNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "focusNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "focusOffset", {
  configurable: true,
  enumerable: true,
  get: function focusOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "focusOffset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "isCollapsed", {
  configurable: true,
  enumerable: true,
  get: function isCollapsed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "isCollapsed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "rangeCount", {
  configurable: true,
  enumerable: true,
  get: function rangeCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "rangeCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "baseNode", {
  configurable: true,
  enumerable: true,
  get: function baseNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "baseNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "baseOffset", {
  configurable: true,
  enumerable: true,
  get: function baseOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "baseOffset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "extentNode", {
  configurable: true,
  enumerable: true,
  get: function extentNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "extentNode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "extentOffset", {
  configurable: true,
  enumerable: true,
  get: function extentOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "extentOffset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "addRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "addRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "collapse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "collapse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "collapseToEnd", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapseToEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "collapseToEnd", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "collapseToStart", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function collapseToStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "collapseToStart", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "containsNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function containsNode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "containsNode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "deleteFromDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteFromDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "deleteFromDocument", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "empty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function empty() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "empty", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "extend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function extend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "extend", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "getRangeAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRangeAt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "getRangeAt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "modify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function modify() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "modify", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "removeAllRanges", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeAllRanges() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "removeAllRanges", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "removeRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "removeRange", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "selectAllChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectAllChildren() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "selectAllChildren", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "setBaseAndExtent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setBaseAndExtent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "setBaseAndExtent", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "setPosition", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Selection', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Selection'].prototype, "Selection", "toString", arguments);
  }
}, 'prototype');