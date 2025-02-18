// FontFace对象

bodavm.memory.globalobj['FontFace'] = function FontFace() {
  console.log_copy('FontFace 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FontFace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FontFace': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FontFace'], "FontFace");
bodavm.toolsFunc.defineProperty('FontFace', "family", {
  configurable: true,
  enumerable: true,
  get: function family() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "family_get", arguments);
  },
  set: function family() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "family_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "style_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "weight", {
  configurable: true,
  enumerable: true,
  get: function weight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "weight_get", arguments);
  },
  set: function weight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "weight_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "stretch", {
  configurable: true,
  enumerable: true,
  get: function stretch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "stretch_get", arguments);
  },
  set: function stretch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "stretch_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "unicodeRange", {
  configurable: true,
  enumerable: true,
  get: function unicodeRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "unicodeRange_get", arguments);
  },
  set: function unicodeRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "unicodeRange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "variant", {
  configurable: true,
  enumerable: true,
  get: function variant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "variant_get", arguments);
  },
  set: function variant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "variant_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "featureSettings", {
  configurable: true,
  enumerable: true,
  get: function featureSettings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "featureSettings_get", arguments);
  },
  set: function featureSettings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "featureSettings_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "display", {
  configurable: true,
  enumerable: true,
  get: function display() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "display_get", arguments);
  },
  set: function display() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "display_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "ascentOverride", {
  configurable: true,
  enumerable: true,
  get: function ascentOverride() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "ascentOverride_get", arguments);
  },
  set: function ascentOverride() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "ascentOverride_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "descentOverride", {
  configurable: true,
  enumerable: true,
  get: function descentOverride() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "descentOverride_get", arguments);
  },
  set: function descentOverride() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "descentOverride_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "lineGapOverride", {
  configurable: true,
  enumerable: true,
  get: function lineGapOverride() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "lineGapOverride_get", arguments);
  },
  set: function lineGapOverride() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "lineGapOverride_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "sizeAdjust", {
  configurable: true,
  enumerable: true,
  get: function sizeAdjust() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "sizeAdjust_get", arguments);
  },
  set: function sizeAdjust() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "sizeAdjust_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "status_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "loaded", {
  configurable: true,
  enumerable: true,
  get: function loaded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "loaded_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('FontFace', "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function load() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FontFace'].prototype, "FontFace", "load", arguments);
  }
}, 'prototype');