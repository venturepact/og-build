(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-site-builder-builder-module~app-site-templates-templateAll-preview-module~app-site-templ~0783f0ac"],{

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();


/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");


/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:socket');
var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (typeof location !== 'undefined' && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // detect ReactNative environment
  this.isReactNative = (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative');

  // other options for Node.js or ReactNative client
  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0),
    isReactNative: this.isReactNative
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // results of ReactNative environment detection
  this.isReactNative = opts.isReactNative;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module requirements.
 */

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */
function glob () {
  return typeof self !== 'undefined' ? self
      : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global : {};
}

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = (global.___eio || []);
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = (typeof location !== 'undefined' && opts.hostname !== location.hostname) ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
} else {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 6);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocketImpl = BrowserWebSocket || NodeWebSocket;

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws =
      this.usingBrowserWebSocket && !this.isReactNative
        ? protocols
          ? new WebSocketImpl(uri, protocols)
          : new WebSocketImpl(uri)
        : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");
var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");
var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};


/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");


/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");
var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:manager');
var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:socket');
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || (typeof location !== 'undefined' && location);
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}


/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};


/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-parser');
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}


/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}


/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ "./src/app/config/routes/builder.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/config/routes/builder.routes.ts ***!
  \*************************************************/
/*! exports provided: BUILDER_ROUTES, PREVIEW_ROUTES, SAMPLE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDER_ROUTES", function() { return BUILDER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_ROUTES", function() { return PREVIEW_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_ROUTES", function() { return SAMPLE_ROUTES; });
/* harmony import */ var _site_builder_builderParent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../site/+builder/builderParent.component */ "./src/app/site/+builder/builderParent.component.ts");
/* harmony import */ var _site_builder_builder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../site/+builder/builder.component */ "./src/app/site/+builder/builder.component.ts");
/* harmony import */ var _site_templates_templateAll_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../site/templates/templateAll/preview.component */ "./src/app/site/templates/templateAll/preview.component.ts");
/* harmony import */ var _site_templates_templateAll_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../site/templates/templateAll/template.component */ "./src/app/site/templates/templateAll/template.component.ts");
/* harmony import */ var _site_templates_templateAll_sampleCode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../site/templates/templateAll/sampleCode.component */ "./src/app/site/templates/templateAll/sampleCode.component.ts");





var BUILDER_ROUTES = [
    {
        path: '',
        component: _site_builder_builderParent_component__WEBPACK_IMPORTED_MODULE_0__["BuilderParentComponent"],
        children: [
            {
                path: '',
                component: _site_builder_builder_component__WEBPACK_IMPORTED_MODULE_1__["BuilderComponent"]
            },
            {
                path: ':name',
                component: _site_builder_builder_component__WEBPACK_IMPORTED_MODULE_1__["BuilderComponent"]
            }
        ]
    }
];
var PREVIEW_ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _site_templates_templateAll_preview_component__WEBPACK_IMPORTED_MODULE_2__["PreviewComponent"]
            },
            {
                path: 'previewFrame',
                component: _site_templates_templateAll_template_component__WEBPACK_IMPORTED_MODULE_3__["Template"]
            }
        ]
    }
];
var SAMPLE_ROUTES = [
    {
        path: '',
        children: [
            {
                path: ':type',
                component: _site_templates_templateAll_sampleCode_component__WEBPACK_IMPORTED_MODULE_4__["SampleCodeComponent"],
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/interfaces/demo-features.interface.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/interfaces/demo-features.interface.ts ***!
  \**************************************************************/
/*! exports provided: DemoFeatureAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFeatureAccess", function() { return DemoFeatureAccess; });
var DemoFeatureAccess = /** @class */ (function () {
    function DemoFeatureAccess() {
        this.users = 0;
        this.visits = 0;
        this.leads = 0;
        this.calculators = 0;
        this.embedding = { active: true };
        this.isLoaded = true;
        this.lead_generation = {
            active: true,
            email_check: true,
            restrict_duplicate: true,
            clearbit_integration: true
        };
        this.custom_script = {
            active: true
        };
        this.show_trending = {
            active: true
        };
        this.custom_style = {
            active: true
        };
        this.launch_in_email = {
            active: true
        };
        this.advanced_date_maths = {
            active: false
        };
        this.analytics = {
            active: true,
            user_details: true,
            traffic_details: true,
            spreadsheet: true,
            summary: true,
            user_details_limited: true,
            funnel: true,
            google_analytics: true,
            facebook_pixel: true,
            segmentation: true,
            custom_events: true
        };
        this.cta = {
            active: true,
            redirect_url: true,
            like_follow: true,
            shares: true
        };
        this.custom_styling = {
            active: true,
            background_image: true,
            custom_tints: true,
            predefined_color_themes: true,
            custom_themes: true,
            fonts: true,
            html_editor: true
        };
        this.custom_html = { active: true };
        this.integrations = {
            active: true,
            marketo: true,
            marketo_limited: true,
            salesforce: true,
            salesforce_limited: true,
            mailchimp: true,
            mailchimp_limited: true,
            convertkit: true,
            convertkit_limited: true,
            mailerlite: true,
            mailerlite_limited: true,
            infusionsoft: true,
            infusionsoft_limited: true,
            autopilot: true,
            autopilot_limited: true,
            constantcontact: true,
            constantcontact_limited: true,
            zapier_limited: true,
            zapier_loaded: true,
            active_campaign: true,
            active_campaign_limited: true,
            get_response: true,
            get_response_limited: true,
            aweber: true,
            aweber_limited: true,
            hubspot: true,
            hubspot_limited: true,
            drip: true,
            drip_limited: true,
            pardot: true,
            pardot_limited: true,
            emma: true,
            emma_limited: true,
            slack: true,
            slack_limited: true,
            campaignmonitor: true,
            campaignmonitor_limited: true,
            webhook: true,
            intercom: true,
            intercom_limited: true,
            sendlane: true,
            sendlane_limited: true,
            chatbot: true,
            chatbot_limited: true,
            unbounce: true,
            unbounce_limited: false,
            zoho: true,
            zoho_limited: false,
            listrak: true,
            listrak_limited: false,
            fb_messenger: true,
            sendgrid: true,
            sendgrid_limited: true,
            mailjet: true,
            mailjet_limited: false,
            ontraport: true,
            ontraport_limited: false,
            eloqua: true,
            eloqua_limited: false,
            googlesheets: true,
            googlesheets_limited: false,
            insightly: true,
            insightly_limited: false,
            integration_multiple_accounts: false,
            salesloft: true,
            salesloft_limited: true,
            outreach: true,
            outreach_limited: true,
            contactually: true,
            contactually_limited: true,
            close: true,
            close_limited: true,
            salesflare: true,
            salesflare_limited: true
        };
        this.custom_branding = {
            active: true,
            logo_poweredby: true,
            share_text: true,
            cta_build_similar_calc: true,
            edit_cta_text: true,
            allow_agency_branding: true
        };
        this.priority_support = { active: true };
        this.account_manager = { active: true };
        this.api = { active: true };
        this.training = { active: true };
        this.confirmation_emails = {
            active: true,
            to_self: true,
            to_user: true,
            add_users_to_self: false,
            remove_unsubscribe: false
        };
        this.logic_jump = { active: true };
        this.charts = { active: true };
        this.cname = { active: true };
        this.webhook = { active: true };
        this.conditional_messaging = { active: true };
        this.formula_operators = {
            active: true,
            simple_operators: true,
            all_operators: true
        };
        this.templates = {
            active: true,
            one_page_card: true,
            sound_cloud: true,
            inline_temp: true,
            one_page_card_new: true,
            one_page_card_oldresult: true,
            sound_cloud_new: true,
            sound_cloud_v3: true,
            template_seven: true,
            inline_temp_new: true,
            experian: true,
            template_five: true,
            template_five_oldresult: true,
            template_six: true,
            template_eight: true,
            template_nine: true,
            template_ten: true
        };
        this.variable_cta = { active: true };
        this.disclaimers = { active: true };
        this.real_time_results = { active: true };
        this.experiences = {
            active: true,
            recommendation: false,
            numerical: false,
            graded: false,
            poll: false,
            ecom: false,
            chatbot: false
        };
        this.access = {
            active: false,
            folder_access: false,
            restrict_user: false
        };
    }
    DemoFeatureAccess.prototype.formatFeatures = function (features, parent) {
        var _this = this;
        var obj = {};
        var childFeatures = features.filter(function (obj) { return obj['parent_feature'] === parent; });
        if (parent == null) {
            childFeatures.forEach(function (feature) {
                obj[feature['_id']] = Object.assign({ active: feature['active'] }, _this.formatFeatures(features, feature['_id']));
            });
        }
        else {
            return childFeatures.reduce(function (acc, obj) {
                acc[obj['_id']] = obj['active'];
                return acc;
            }, {});
        }
        return obj;
    };
    return DemoFeatureAccess;
}());



/***/ }),

/***/ "./src/app/site/+builder/assets/css/builder.style.css":
/*!************************************************************!*\
  !*** ./src/app/site/+builder/assets/css/builder.style.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import 'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css';\n@import \"https://use.fontawesome.com/releases/v5.6.3/css/all.css\";\n/*@font-face {\n    font-family: montserratregular;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}*/\nul,\nli {\n    list-style: none;\n}\na:focus,\nimg:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus,\nselect:focus {\n    outline: none;\n    text-decoration: none;\n}\nlabel {\n    margin-bottom: 0;\n    font-weight: normal;\n}\ninput[type=\"text\"] {\n    height: auto;\n}\n.no-padding {\n    padding: 0;\n}\n/* Sweep To Right */\n.hvr-sweep-to-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  transition-property: color;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\n  color: white;\n}\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n.path {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n    -webkit-animation: draw 2s 0s linear forwards;\n            animation: draw 2s 0s linear forwards;\n}\n@-webkit-keyframes draw {\n    from {\n        stroke-dashoffset: -1000;\n    }\n    to {\n        stroke-dashoffset: 0;\n    }\n}\n@keyframes draw {\n    from {\n        stroke-dashoffset: -1000;\n    }\n    to {\n        stroke-dashoffset: 0;\n    }\n}\nbutton {\n    height: initial;\n}\n.modal-dialog {\n    margin: 90px auto;\n}\n.editor-modal .modal-header {\n    padding: 11px 15px;\n    background: #FC545B;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.editor-modal .modal-title {\n    margin: 0;\n    line-height: 1.42857143;\n    font-size: 13px;\n    text-transform: uppercase;\n    color: #fff;\n}\n.editor-modal button.close {\n    color: #d7dbdd;\n    opacity: 1;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-family: \"Material Icons\";\n    content: \"close\";\n    text-shadow: none;\n    transition: all .3s ease 0s !important;\n    cursor: pointer;\n    z-index: 9;\n    margin-top: 0px !important;\n}\n.editor-modal button.close:hover {\n    color: #62696d;\n    opacity: .7;\n}\n.editor-modal .modal-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: none;\n    padding-top: 0px;\n}\n.editor-modal .bootbox-body {\n    color: #666666;\n    font-size: 13px;\n}\n.editor-modal .btn.btn-basic {\n    color: #fb5f66;\n    border: 1px solid #fb5f66;\n    font-size: 12px;\n    padding: 5px 50px;\n    transition: all 0.5s ease;\n}\n.editor-sidebar.sidebar {\n    position: fixed;\n    top: 50px;\n    bottom: 0;\n    left: 0;\n    /*z-index: 1;*/\n    z-index: 2; /* new add */\n    padding: 0;\n    background-color: #fff;\n    border-right: 1px solid #dae2e6;\n    width: 235px;\n}\n.editor-template-tabs {\n    margin-left: 235px;\n    float: left;\n    background: #f6f8f9;\n    width: calc(100% - 235px);\n    font-family: montserratregular;\n    position: absolute;\n    top: 50px;\n}\n/*.editor-template-tabs.builder-parent1 {\n    margin-top: 30px;\n}*/\n.editor-template-tabs.minH.builder-parent1 {\n    /* top: 15px; */\n    margin-top: 25px;\n}\n.editor-template-tabs.nomargin {\n    margin-left: 0;\n}\n.editor-template-tabs.minH {\n    min-height: 100vh;\n}\nconfig {\n    min-height: 95vh;\n    width: 100%;\n    float: left;\n}\n#build {\n    width: 100%;\n    float: left;\n}\n.editor-navheader .navbar-brand {\n    padding: 10px 20px;\n    /*padding-left: 25px;*/\n    /*width: 232px;*/\n    width: 70px;\n    position: relative;\n    /*padding-top:5px;*/\n}\n.editor-navheader .navbar-brand svg{ left: -12px !important;/*height: 100px !important;*/top: -65px !important;width:100px;}\n.template-section {\n    position: fixed;\n    float: left;\n    background: url('background.png');\n    top: 83px;\n    height: calc(100% - 83px);\n}\n.panel-group .panel + .panel {\n    margin-top: 0;\n}\n.panel-title i.main-ic {\n    font-size: 16px;\n    vertical-align: text-bottom;\n    margin-right: 4px;\n    color: #bec5c9;\n}\n/*top bar*/\ninput.ed-projectname {\n    border: none;\n    border-left: 1px solid #dae2e6;\n    color: #8e989f;\n    float: left;\n    padding: 0;\n    font-size: 18px;\n    padding-left: 20px;\n    width: 80%;\n    font-family: montserratregular;\n    margin: 10px 0!important;\n    height: 30px;\n    padding-right: 30px;\n    background:transparent;\n}\ninput.ed-projectname:hover {\n    color: #fb5f66;\n}\n.ed-projectname {\n    border-left: 1px solid #dae2e6;\n    color: #fb5f66;\n    float: left;\n    font-size: 18px;\n    margin-top: 13px;\n    padding-bottom: 5px;\n    padding-top: 4px;\n    padding-left: 20px;\n}\n.navbar-default {\n    background: #fff;\n    border: none;\n    padding-bottom: 0;\n    margin: 0;\n    border-bottom: 1px solid #dae2e6;\n    z-index: 980;\n}\n.navbar-rightside {\n    float: right;\n    margin-top: 0;\n    margin-right: 0px;\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n    justify-content: center;\n    min-height: 50px;\n}\n.navbar-rightside .name-dropdown-wrapper.btn-group {\n    width: auto;\n}\n.navbar-rightside .name-dropdown-wrapper .dropdown-menu {\n    top: 33px;\n    position: absolute;\n}\n.navbar-rightside .name-dropdown-wrapper.btn-group {\n    border-right: 1px solid #dae2e6;\n    padding-right: 13px;\n}\n.navbar-rightside .btn-basic {\n    margin-right: 6px;\n}\n.name-dropdown-wrapper.btn-group {\n    margin-top: 10px;\n}\n.navbar-leftside label {\n    font-size: 13px;\n    color: #8e989f;\n    font-weight: normal;\n    cursor: pointer;\n    font-family: 'montserratregular';\n}\n.navbar-leftside label i:last-child {\n    margin-left: 10px;\n    color: #bec5c9;\n    line-height: 30px;\n    margin: 0 4px;\n}\n.navbar-leftside .help-tip:hover label i:last-child {\n    color: #fb5f66;\n}\n.blue-text {\n    color: #fb5f66;\n}\n.navbar-leftside label i {\n    font-size: 18px;\n    position: relative;\n    top: 1px;\n    margin-right: 5px;\n}\n.navbar-leftside {\n    /*border-left: 1px solid #dae2e6;*/\n    color: #fb5f66;\n    font-size: 18px;\n    margin-left: 0px;\n    padding-bottom: 0;\n    padding-left: 10px;\n    padding-right: 15px;\n    padding-top: 0;\n    max-width: 210px;\n}\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    margin-top: 10px;\n}\n.navbar .btn.btn-basic {\n    border: none;\n    background: #fb5f66;\n    color: #fff;\n    transition: all 0.5s ease;\n    line-height: 1.5;\n    border-radius: 3px;\n    margin: 0;\n    float: left;\n}\n.navbar .btn.btn-basic:not(.btn-menu):hover {\n    background: #fdb6b9;\n    color: #fb5f66;\n    border-color: #fdb6b9;\n}\n.navbar .btn.btn-basic.btn-menu {\n    background: #bdc6ca;\n    color: #fff !important;\n    cursor: pointer;\n    margin-right: 0px;\n    margin-left: 0px;\n    padding: 4px 6px;\n    border: 1px solid transparent;\n    line-height: 2px;\n}\n.navbar .btn.btn-basic.cpy_link i{\n    -webkit-transform:rotate(0.03deg);\n            transform:rotate(0.03deg);\n    color: #fff;\n}\n.navbar .btn.btn-basic.cpy_link:hover {\n    /*border: 1px solid #fb5f66 !important;*/\n    /*color: #fb5f66 !important;*/\n    color: #bdc6ca!important;\n    background: #fff;\n    border: 1px solid #bdc6ca;\n}\n.navbar .btn.btn-basic.cpy_link:hover i{\n    /*color: #fb5f66 !important;*/\n    color: #bdc6ca!important;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n    color: inherit;\n    outline: none !important;\n    background: none;\n    box-shadow: none;\n}\n.btn.btn-basic {\n    color: #fb5f66;\n    border: 1px solid #dae2e6;\n    font-size: 13px;\n    margin-top: 0;\n    padding: 5px 10px;\n}\n.disable-btn {\n    border: 1px solid #dae2e6;\n    color: #bec5c9;\n}\n.disable-btn:hover {\n    border: 1px solid #dae2e6;\n    color: #bec5c9;\n}\n.navbar-leftside .blue-text {\n    color: #fb5f66 !important;\n}\n.sidebar-layout {\n    height: 100vh;\n    border: 1px solid #dae2e6;\n    border-right: 0;\n    background: #f6f8f9;\n    z-index: 99;\n    border-bottom: 0;\n}\n.sidebar-offcanvas {\n    font-family: montserratregular;\n    padding-right: 0;\n    width: 300px;\n    top: 50px;\n    z-index: 99;\n    padding-left: 0;\n    right: 0;\n    bottom: 0;\n}\n.sidebar-offcanvas-right {\n    position: absolute;\n    top: 0;\n    z-index: 100;\n    width: 40px;\n    background: #fbfdfc;\n    right: 300px;\n    bottom: 0;\n    border-left: 1px solid #dae2e6;\n}\n.sidebar-offcanvas-right ul {\n    margin: 0;\n    text-align: center;\n    padding: 0;\n}\n.sidebar-offcanvas-right ul li {\n    border-bottom: 1px solid #dae2e6;\n}\n.sidebar-offcanvas-right ul li:last-child {\n    border-bottom: none;\n}\n.sidebar-offcanvas-right ul li i {\n    font-size: 15px;\n    vertical-align: text-top;\n    /*color: #1483b7;*/\n    color: #5c6165;\n}\n.sidebar-offcanvas-right ul li .disable{\n    cursor: not-allowed;\n}\n.sidebar-offcanvas-right ul li .disable i {\n    color: #bec5c9;\n}\n.sidebar-offcanvas-right li a {\n    color: #bcc4c6;\n    padding: 6px 12px;\n    padding-top: 6px;\n    display: block;\n}\n.sidebar-offcanvas-right li a.active i,\n.sidebar-offcanvas-right li a:hover i {\n    /*color: #5c6165;*/\n    color: #1483b7;\n}\n.sidebar-offcanvas-right li a.active,\n.sidebar-offcanvas-right li a:hover {\n    background: #f6f8f9;\n}\n.sidebar-offcanvas-right .help-position {\n    position: absolute;\n    bottom: 35px;\n    width: 100%;\n    border-top: 1px solid #dae2e6;\n}\n.sidebar-offcanvas-right .help-position .builder-help-icon {\n    top: 0;\n}\n.sidebar-offcanvas-right .popover-wrapper .popover-block:before {\n    position: absolute;\n    top: -29px;\n    left: 20px;\n    display: inline-block;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid TRANSPARENT;\n    border-left: 6px solid #62696d;\n    /* border-top-color: #62696d; */\n    content: '';\n}\n.sidebar-offcanvas-right .icon-help.popover-wrapper .popover-block:before {\n    left: 20px;\n}\n.navbar .btn-basic {\n    font-size: 11px;\n    font-family: 'montserratregular';\n}\n.btn-basic3 {\n    padding: 7px 10px;\n    margin-right: 5px;\n    float: left;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.navbar-rightside .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\n    max-width: 130px;\n    width: auto;\n}\n.navbar-rightside .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    width: auto;\n}\n.open-sidebar {\n    padding: 5px 15px;\n    cursor: pointer;\n    float: right;\n    border: 1px solid #dae2e6;\n    margin-left: 40px;\n    margin-top: 0;\n    background: #f6f8f9;\n    line-height: 1;\n    color: #fff;\n}\n.open-sidebar i {\n    font-size: 18px;\n    color: #8e989f;\n}\n.editor .type-details:last-child {\n    border-bottom: none;\n}\n.panel-heading a.collapsed:after {\n    content: '';\n}\n.panel-heading a:after {\n    content: '';\n}\n.ed-projectname.active-text {\n    color: #fb5f66;\n}\n.navbar-fixed-top .nav-padding {\n    padding-left: 34px;\n    padding-right: 20px;\n}\n/* Start: name Dropdown */\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding-top: 8px;\n    font-size: 13px;\n    color: #8e989f;\n    font-family: montserratlight;\n    border: none;\n}\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\n    font-size: 18px;\n    color: #fb5f66;\n    float: left;\n}\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\n    float: left;\n    width: 72%;\n    min-width: 69px;\n    text-align: left;\n}\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover,\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus {\n    background: none !important;\n    box-shadow: none !important;\n    border: 0 !important;\n}\n.name-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0 10px;\n    z-index: 1;\n}\n.name-dropdown-wrapper .dropdown-menu {\n    top: 31px;\n    left: -78px;\n    min-width: 180px;\n    font-size: 12px;\n    border-radius: 0;\n    background: #62696d;\n    border-radius: 4px !important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n    display: none;\n}\n.name-dropdown-wrapper:hover .dropdown-menu {\n    display: block;\n}\n.name-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -7px;\n    left: 76px;\n    display: inline-block;\n    border-right: 11px solid transparent;\n    border-bottom: 12px solid #62696d;\n    border-left: 11px solid transparent;\n    border-bottom-color: #62696d;\n    content: '';\n}\n.name-dropdown-wrapper .dropdown-menu > .name-list {\n    float: left;\n    width: 100%;\n}\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a:hover i.material-icons,\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a:focus i.material-icons {\n    color: #fff;\n}\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a {\n    color: #fff;\n    padding: 5px 13px !important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px !important;\n}\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a span.name-list-icon {\n    float: none;\n    width: auto;\n    margin-right: 10px;\n    display: inline-block;\n    vertical-align: middle;\n    padding: 1px 0;\n    line-height: 1;\n}\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a i.material-icons {\n    font-size: 12px;\n    color: #fff;\n    padding: 0;\n}\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a span.name-list-title {\n    float: none;\n    font-size: 12px;\n    color: #fff;\n    line-height: 1px;\n}\n.navbar .name-dropdown-wrapper .dropdown-menu .name-list li > a:hover,\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li > a:hover {\n    background: #71787b;\n    color: #fff;\n}\n.navbar .dropdown-menu .name-list li > a:focus,\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li > a:focus {\n    color: #fff;\n    background-color: transparent;\n}\n.name-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before {\n    background: #fa8f93 none repeat scroll 0 0 !important;\n}\n.name-dropdown-border {\n    float: left;\n    width: 87%;\n    margin: 5px 12px;\n    border-top: 1px solid #7a8185!important;\n}\n.name-dropdown-wrapper .dropdown-menu > .company-list {\n    float: left;\n    width: 100%;\n}\n.name-dropdown-wrapper .dropdown-menu > .company-list li > a {\n    color: #fff;\n    padding: 5px 13px !important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px !important;\n}\n.name-dropdown-wrapper .dropdown-menu > .company-list li {\n    line-height: 24px;\n}\n.name-dropdown-wrapper .dropdown-menu > .company-list li span.company-list-title {\n    float: left;\n}\n.name-dropdown-wrapper .dropdown-menu > .company-list li span.company-selected {\n    float: right;\n}\n.name-dropdown-wrapper .dropdown-menu > .company-list li.active a span.company-selected i.material-icons,\n.name-dropdown-wrapper .dropdown-menu > .company-list li a span.company-selected i.material-icons {\n    font-size: 12px;\n    position: relative;\n    top: -2px;\n}\n.navbar .dropdown-menu .company-list .active > a,\n.navbar.navbar-default .dropdown-menu .company-list .active > a {\n    background-color: transparent;\n    color: #fff;\n}\n.navbar .dropdown-menu .company-list li > a:hover,\n.navbar.navbar-default .dropdown-menu .company-list li > a:hover {\n    color: #fff;\n    background-color: transparent;\n}\n.navbar .dropdown-menu .company-list li > a:focus,\n.navbar.navbar-default .dropdown-menu .company-list li > a:focus {\n    color: #fff;\n    background-color: transparent;\n}\n/*.navbar.navbar-default .dropdown-menu .company-list li > a:hover {\n            background: #71787b;\n        }*/\n.name-dropdown-wrapper .dropdown-menu div > li > a.hvr-sweep-to-right::before {\n    background: #71787b none repeat scroll 0 0;\n}\n.name-dd-minh {\n    min-height: 33px;\n}\n/* End: name Dropdown */\n/*helptip*/\n.help-tip i {\n    color: #bec5c9;\n    font-size: 13px;\n    line-height: 17px;\n    cursor: pointer;\n}\n.btn-basic2 .help-tip i {\n    color: #bec5c9;\n}\n.help-checktip {\n    float: left;\n    background-color: #464655;\n    color: #fff;\n    padding: 8px 11px;\n    width: 180px;\n    font-size: 10px;\n    border-radius: 4px;\n    position: absolute;\n    top: -39px;\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    visibility: hidden;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.5);\n    text-align: left;\n    left: -70px;\n    font-family: montserratlight;\n}\n.help-tip {\n    margin: 1px 7px;\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    margin: 0;\n}\n.help-tip:hover > .help-checktip {\n    visibility: visible;\n    z-index: 999;\n}\n.navbar-rightside .help-checktip {\n    float: left;\n    background-color: #62696d;\n    color: #fff;\n    padding: 4px 2px;\n    font-size: 10px;\n    border-radius: 4px;\n    position: absolute;\n    top: 35px;\n    left: 39px;\n    border: none;\n    width: 70px;\n    border-radius: 3px;\n    visibility: hidden;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.5);\n    text-align: center;\n    left: -13px;\n    word-wrap: break-word;\n}\n.navbar-rightside .cpy-helptip{\n    width: 121px;\n    left: -43px;\n}\n.navbar-rightside .help-checktip:before {\n    content: '';\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    border-bottom: 6px solid #62696d;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    border-top: none;\n}\n.navbar .btn-menu-mw {\n    border: 1px solid #dae2e6;\n    height: 26px;\n    padding:5px 6px;\n    background: #fff;\n    color: #bec5c9;\n    cursor: pointer;\n}\n.navbar .btn-menu-mw:first-child{ margin-right: -5px;}\n.main-btn-div{ float: left;margin-right:10px;  }\n.navbar .help-tip.sidebar-helptip .btn.btn-menu-mw:hover {\n        border: 1px solid #dae2e6 !important;\n        color: #1b85b8 !important;\n    }\n.navbar-rightside .help-tip i {\n    line-height: 15px;\n    font-size: 15px;\n}\n.help-checktip:before {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    border-top: 6px solid #464655;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n}\n.name-dropdown-wrapper.btn-group {\n    float: none;\n    width: auto;\n}\n.properties-tag {\n    font-size: 13px;\n    vertical-align: super;\n    margin-left: 10px;\n}\n.properties-window {\n    position: absolute;\n    top: 37%;\n    left: 26px;\n    z-index: 999;\n    width: 260px;\n    -webkit-transform: rotate(90deg);\n    -webkit-transform-origin: left top;\n    -moz-transform: rotate(90deg);\n    -moz-transform-origin: left top;\n    -ms-transform: rotate(90deg);\n    -ms-transform-origin: left top;\n    -o-transform: rotate(90deg);\n    -o-transform-origin: left top;\n    transform: rotate(90deg);\n    transform-origin: left top;\n    display: none;\n}\n.properties-window i {\n    font-size: 20px;\n    color: #bec5c9;\n}\n.properties-close {\n    cursor: pointer;\n}\n.properties-close .main-side,\n.properties-close .prop-arrow i:after {\n    content: \"arrow_backward\";\n}\n.prop-arrow i {\n    color: #fff !important;\n    width: 14px;\n}\n/* Sweep To Right */\n.hvr-sweep-to-right {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    position: relative;\n    transition-property: color;\n    transition-duration: 0.3s;\n}\n.hvr-sweep-to-right:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #2098d1;\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    -webkit-transform-origin: 0 50%;\n    transform-origin: 0 50%;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-duration: 0.3s;\n    transition-timing-function: ease-out;\n}\n.hvr-sweep-to-right:hover,\n.hvr-sweep-to-right:focus,\n.hvr-sweep-to-right:active {\n    color: white;\n}\n.hvr-sweep-to-right:hover:before,\n.hvr-sweep-to-right:focus:before,\n.hvr-sweep-to-right:active:before {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n}\n.navbar .btn.btn-basic[disabled] {\n    background: #bec5c9;\n    color: #62696d;\n    opacity: .55;\n    /*border: 1px solid #bec5c9;*/\n}\n/* Responsiveness */\n.mobile-navbar-brand {\n    display: none;\n}\n.mobile-menu-icon,\n.mobile-menucross-icon {\n    display: none;\n}\n/* Preloader */\n.preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;\n    /* change if the mask should be a color other than white */\n    z-index: 9999;\n    /* makes sure it stays on top */\n}\n.status {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    /* centers the loading animation horizontally on the screen */\n    top: 50%;\n    /* centers the loading animation vertically on the screen */\n    background-image: url('logoAnim.gif');\n    /* path to your loading animation */\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: -100px 0 0 -100px;\n    /* is width and height divided by two */\n}\n.canvas-fix {\n    position: fixed;\n    overflow-y: scroll;\n    height: 100vh;\n    /*margin-top: 20px;\n    padding: 0 20px 20px 20px;*/\n    width: 81%;\n}\n.navbar-leftside .btn-group.help-tip {\n    margin-top: 3px;\n}\n.no-analytics {\n    background: url('no-analytics.png');\n    width: 100%;\n    min-height: 90vh;\n    position: fixed;\n    bottom: 0;\n    background-size: cover;\n}\n.analytics-bottom-popup {\n    background: #fb5f66;\n    width: 50%;\n    margin: 0 auto;\n    position: relative;\n    margin-top: 23%;\n    min-height: 150px;\n    color: #fff;\n    text-align: center;\n    padding: 42px;\n    font-family: montserratlight;\n    font-size: 18px;\n    box-shadow: 13px 13px 10px rgba(0, 0, 0, 0.20);\n}\n.no-analytics-overlay {\n    position: fixed;\n    top: 40px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 9;\n    margin-top: 56px;\n    background: rgba(0, 0, 0, 0.7);\n    margin-left: 235px;\n}\n.loading:after {\n    content: ' .';\n    -webkit-animation: dots 1s steps(5, end) infinite;\n            animation: dots 1s steps(5, end) infinite;\n    font-size: 18px;\n    line-height: 1px;\n    position: relative;\n    left: -3px;\n}\n.zoom-parent {\n    float: left;\n    margin-right: 10px;\n    border: 1px solid #dae2e6;\n    height: 26px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background: #fff;\n    margin-top: 5px;\n}\n.drag-parent {\n    float: left;\n    margin-right: 13px;\n    border: 1px solid #dae2e6;\n    height: 27px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background: #fff;\n    margin-top: 7px;\n}\n.zoom i {\n    font-size: 16px;\n    color: #bec5c9;\n    padding: 1px 2px;\n}\na.zoom {\n    float: left;\n    margin-top: 3px;\n}\ntemp-dev {\n    width: 100%;\n    display: block;\n    margin: 42px auto 20px auto;\n    position: relative;\n    margin-bottom: 20px;\n\n}\ntemp-dev.template-seven {\n    width: 100%;\n    display: block;\n    margin: 42px auto 20px auto;\n    position: relative;\n    margin-bottom: 20px;\n    zoom:1!important;\n    width:100% !important;\n}\n.template-section .que-fixed {\n    z-index: -1;\n}\n@-webkit-keyframes dots {\n    0%,\n    20% {\n        color: rgba(0, 0, 0, 0);\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    40% {\n        color: white;\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    60% {\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    80%,\n    100% {\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\n    }\n}\n@keyframes dots {\n    0%,\n    20% {\n        color: rgba(0, 0, 0, 0);\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    40% {\n        color: white;\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    60% {\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    80%,\n    100% {\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\n    }\n}\n.process-bar {\n    font-family: montserratregular;\n    background: #fff;\n    position: fixed;\n    top: 50px;\n    /*z-index: 1;*/\n    z-index: 99; /*new add */\n    /* width: 100%; */\n    width: calc(100% - 235px) !important;\n    margin-left: 235px;\n}\n.process-bar ul {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    border-bottom: 1px solid #dae2e6;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);\n    height: 33px;\n    width: auto;\n    display: flex;\n    justify-content: center;\n}\n.process-bar li {\n    display: inline-block;\n    border-right: 1px solid #dae2e6;\n    display: flex;\n    align-items: center;\n}\n.process-bar li:first-child {\n    border-left: 1px solid #dae2e6;\n}\n.process-bar li a {\n    font-size: 12px;\n    margin: 0;\n    color: #62676b;\n    text-transform: uppercase;\n    cursor: pointer;\n    display: block;\n    line-height: 30px;\n    padding:0 10px;\n}\n.process-bar li a.active {\n    color: #1483b7;\n}\n.process-bar li i {\n    font-size: 15px;\n    vertical-align: middle;\n    margin-right: 4px;\n    /*color: #bec5c9;*/\n    color: #62676b;\n}\n.process-bar li a.active i {\n    color: #1483b7;\n}\n/* .process-margin {\n    margin-left: 0px;\n} */\n.properties-close {\n    cursor: pointer;\n}\n.properties-close .main-side {\n    display: none;\n}\n/* loader animation start */\n.elem {\n    height: 15px;\n    display: block;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-duration: 1s;\n    color: #bec5c9;\n    font-size: 13px;\n}\n.elem i.material-icons{\n    font-size: 17px;\n    vertical-align: top;\n}\n.elem-rotate {\n    -webkit-animation-name: rotate;\n            animation-name: rotate;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    color: #fb5f66;\n}\n.elem.elem-rotate i.material-icons{\n    font-size: 17px;\n    color:#bec5c9;\n}\n.navbar .btn.btn-basic.btn-menu.btn-menu.green-bg {\n    /*background: rgb(26, 188, 156);\n    border: 1px solid rgb(26, 188, 156);*/\n    background: none;\n    border: none;\n    margin-right: 0;\n}\n.btn-menu.green-bg .elem i{\n    color: #3cc035 !important;\n}\n.btn-menu .elem.elem-rotate i {\n    color: #fb5f66;\n}\n@-webkit-keyframes rotate {\n    from {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n@keyframes rotate {\n    from {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n/* loader animation end */\n/* Header start */\n.help-dropdown-wrapper.btn-group {\n    position: relative;\n    margin: 0;\n    float: right;\n    width: 20%\n}\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding: 15px 12px 12px;\n    font-size: 12px;\n    text-transform: none;\n    color: #62696d;\n    font-family: montserratlight;\n    border: none\n}\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    position: absolute;\n    top: -1px;\n    right: 3px\n}\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus,\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\n    background: 0 0!important;\n    box-shadow: none!important;\n    border: 0!important\n}\n.help-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0;\n    z-index: 1;\n    top: 33px;\n    right: -13px;\n    min-width: 140px;\n    font-size: 12px;\n    background: #fb5f66;\n    border-radius: 4px!important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\n    display: none\n}\n.help-dropdown-wrapper:hover .dropdown-menu {\n    display: block\n}\n.help-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -12px;\n    right: 17px;\n    display: inline-block;\n    border-right: 8px solid transparent;\n    border-bottom: 12px solid #fb5f66;\n    border-left: 8px solid transparent;\n    border-bottom-color: #fb5f66;\n    content: ''\n}\n.help-dropdown-wrapper .dropdown-menu>li>a:focus,\n.help-dropdown-wrapper .dropdown-menu>li>a:hover {\n    color: #fff;\n    background: 0 0\n}\n.navbar .help-dropdown-wrapper .dropdown-menu li>a:hover,\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:hover {\n    background: #f9888d;\n    color: #fff\n}\n.navbar .dropdown-menu .help-dropdown-wrapper li>a:focus,\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:focus {\n    color: #fff;\n    background-color: transparent\n}\n.help-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons,\n.help-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\n    color: #fff\n}\n.help-dropdown-wrapper .dropdown-menu>li>a {\n    color: #fff;\n    padding: 3px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    font-size: 13px!important;\n    float: left;\n    width: 100%\n}\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-icon {\n    float: left;\n    width: auto;\n    margin-right: 10px\n}\n.help-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n    font-size: 18px;\n    color: #fff;\n    padding: 0\n}\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-title {\n    float: left;\n    font-size: 12px;\n    color: #fff;\n    line-height: 22px\n}\n.icon-help {\n    z-index: 9;\n    position: relative;\n    cursor: pointer\n}\n.icon-help i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    transition: all .3s ease\n}\n.icon-help i.material-icons:focus .icon-help i.material-icons:active,\n.icon-help i.material-icons:hover {\n    color: #fb5f66\n}\n.builder-help-icon {\n    top: 8px\n}\n.support_outer {\n    color: #999;\n    display: inline-block;\n    vertical-align: middle;\n    height: 37px;\n    cursor: pointer;\n    padding-top:5px;\n}\ni.support_icon {\n    font-size: 17px;\n    color: #8e989f;\n    opacity: 0.5;\n}\n.web-page-sub-section-content i.support_icon {\n    font-size: 17px;\n    color: #8e989f;\n    opacity: .5;\n    position: relative;\n    top: 3px;\n}\n.support_outer:hover i.support_icon {\n    color: #fb5f66;\n    opacity: 1;\n    -webkit-transform: rotate(0.03deg);\n            transform: rotate(0.03deg);\n}\n.help-options .dropdown-menu {\n    font-size: 12px;\n    background: #62696d;\n    top: 38px;\n    left: -113px;\n    min-width: 148px;\n\n}\n.help-options .dropdown-menu:before {\n    position: absolute;\n    top: -12px;\n    left: 113px;\n    display: inline-block;\n    border-right: 8px solid transparent;\n    border-bottom: 12px solid #62696d;\n    border-left: 8px solid transparent;\n    border-bottom-color: #62696d;\n    content: '';\n}\n/* .help-options .dropdown-menu:after {\n    content: '';\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #fb5f66;\n    border-left: 10px solid transparent;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: -13px;\n} */\n.help-options .dropdown-menu>li>a {\n    color: #fff;\n    padding: 5px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratlight;\n    float: left;\n    width: 100%;\n    font-size: 11px!important;\n}\n.help-options .dropdown-menu>li>a:hover {\n    background: #fcfcfc !important;\n    color: #fff;\n}\n.help-options .dropdown-menu >li>a.hvr-sweep-to-right::before {\n    background: #fcfcfc !important;\n}\n.help-options .dropdown-menu>li>a img{ float: left; height: 16px; margin-right: 9px; margin-left: -2px; margin-top: 2px;}\n.help-options .dropdown-menu>li>a i{ font-size: 13px;}\n.help-options .dropdown-icons {\n    font-size: 12px;\n    color: #fff;\n    padding: 5px 0 0;\n    float: left;\n    margin-right: 10px;\n}\n.help-options .dropdown-text {\n    float: left;\n    font-size: 12px;\n    color: #fff;\n    line-height: 22px;\n}\n.help-options .dropdown-link {\n    font-size: 16px;\n    color: #8e989f;\n    opacity: 0.5;\n    cursor: pointer;\n}\n.animated {\n    -webkit-animation-duration: 1s;\n    animation-duration: 2s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.slow {\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.slower {\n    -webkit-animation-duration: 2s;\n    animation-duration: 2s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.slowest {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.bounceIn {\n    -webkit-animation-name: bounceIn;\n    animation-name: bounceIn;\n}\n/***********\n* bounceIn *\n************/\n@-webkit-keyframes bounceIn {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.3);\n    }\n    50% {\n        opacity: 1;\n        -webkit-transform: scale(1.05);\n    }\n    70% {\n        -webkit-transform: scale(.9);\n    }\n    100% {\n        -webkit-transform: scale(1);\n    }\n}\n@keyframes bounceIn {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.3);\n                transform: scale(.3);\n    }\n    50% {\n        opacity: 1;\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05);\n    }\n    70% {\n        -webkit-transform: scale(.9);\n                transform: scale(.9);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}\n/* Header end */\n.scrollbar {\n    overflow-y: scroll;\n}\n.scrollbar::-webkit-scrollbar-track {\n    border-radius: 0;\n    background-color: #f5f5f5;\n}\n.scrollbar::-webkit-scrollbar {\n    width: 6px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.scrollbar::-webkit-scrollbar:horizontal {\n    height: 6px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.scrollbar::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.header-added .process-bar,.header-added .editor-sidebar.sidebar,.header-added .sidebar-offcanvas{\n    top:93px;\n}\n.header-added .template-section, .header-added .editor-template-tabs{\n    top: 130px;\n    margin-top: 0px;\n}\n.header-added .navbar-brand svg{\n    top: -30px !important;\n}\n.header-added .prop-arrow{\n    bottom: 33px;\n}\n.header-added .template-section{\n    height: calc(100% - 130px) ;\n}\n.header-added .no-analytics-overlay{\n    top: 74px;\n}\n.header-added .sidebar-bottomselector {\n    padding-bottom: 120px;\n}\n@media (min-width: 1024px) and (max-width:1280px) {\n    input.ed-projectname{width:60%;}\n    .topbar-left{width:30% !important;}\n    .input-next-div{width:33% !important;}\n    .navbar-rightside-outer{width:36% !important;}\n    .input-next-div ul li a i {display: none;}\n    nav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .build-process.input-next-div ul li a i { display: none !important;}\n    nav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .topbar-left { width: calc(100% - 74%) !important; }\n    nav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .topbar-left input.ed-projectname { width: 72% !important; padding-right: 10px;}\n    nav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .build-process.input-next-div{width: calc(100% - 55%) !important;}\n    nav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .navbar-rightside-outer{ width: calc(100% - 71%) !important; }\n\n    .navbar-default.ecom-TopBarPanel.isProducts .input-next-div { width: 45% !important;}\n}\n@media (min-width: 1200px) and (max-width:1280px) {\n    .navbar-rightside-outer{width:42% !important;}\n     input.ed-projectname{width:70%;}\n    .input-next-div{width:28% !important;}\n    .navbar-default.ecom-TopBarPanel .topbar-left{ width: 28% !important;}\n    .navbar-default.ecom-TopBarPanel .input-next-div{ width: 34% !important;}\n    .navbar-default.ecom-TopBarPanel .navbar-rightside-outer{ width: 38% !important;}\n    .navbar-default.ecom-TopBarPanel.isProducts .topbar-left { width: 32% !important; }\n\n}\n@media (min-width: 1024px) and (max-width:1300px) {\n    .navbar .save_icon .btn.btn-basic.btn-menu{padding: 0 5px !important;}\n    .large-btns{padding:0 5px !important;}\n    .navbar .large-btns a.btn.btn-basic.cpy_link {margin-right: 5px !important;}\n    .navbar .btn.btn-basic{padding: 5px 5px;font-size: 10px;}\n    .navbar-leftside{padding-left: 5px;padding-right: 10px !important;}\n}\n@media (min-width: 1400px) {\n    .no-analytics {\n        width: 100%;\n    }\n}\n@media (min-width: 1400px) and (max-width:1550px) {\n    .navbar-rightside-outer{width:40%;}\n    .topbar-left{width:35%;}\n}\n/*@media (max-width: 1208px) {\n    input.ed-projectname {\n        width: 20%;\n    }\n}*/\n@media (max-width: 992px) {\n    .editor-sidebar.sidebar {\n        z-index: 970;\n        top: 33px !important;\n        display: none;\n    }\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        display: none;\n    }\n    .mobile-menucross-icon {\n        display: block;\n    }\n    .navbar-brand {\n        display: none;\n    }\n    .mobile-menu-icon {\n        display: block;\n        color: #fb5f66;\n        padding: 0 19px;\n        padding-top: 4px;\n        border-right: 1px solid #dae2e6;\n        margin-top: 7px;\n        cursor: pointer;\n    }\n    .mobile-navbar-brand {\n        display: block;\n        float: left;\n        padding: 12px 15px;\n    }\n    .mobile-navbar-brand img {\n        height: 31px;\n    }\n    .navbar-fixed-top .nav-padding {\n        padding-left: 0;\n        padding-right: 15px;\n    }\n    .editor-navheader {\n        width: auto;\n    }\n    .mobile-top-menu {\n        width: 100%;\n        float: left;\n        border-bottom: 1px solid #dae2e6;\n    }\n    input.ed-projectname {\n        margin-top: 12px;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        margin-bottom: 6px;\n        font-size: 16px;\n        width: 75%;\n    }\n    span.name-title,\n    .navbar-leftside .btn-group.help-tip {\n        display: none;\n    }\n    .navbar-rightside {\n        float: right;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        margin-right: 13px;\n    }\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        width: 24px;\n    }\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        padding-top: 5px;\n    }\n    .navbar .btn.btn-basic {\n        font-size: 10px;\n        margin-right: 2px;\n    }\n    .navbar .btn.btn-basic:not(.btn-menu):hover,\n    .navbar .btn.btn-basic:not(.btn-menu):focus {\n        background: none;\n        color: #fb5f66;\n    }\n    .name-dd-minh {\n        min-height: 28px;\n    }\n    .mobile-menu-icon {\n        float: left;\n    }\n    .editor-template-tabs {\n        margin-left: 0;\n    }\n    .sidebar-modal-backdrop {\n        display: none;\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1030;\n        margin-top: 56px;\n        background: rgba(0, 0, 0, 0.99);\n    }\n    .properties-modal-backdrop {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1010;\n        margin-top: 32px;\n        background: rgba(0, 0, 0, 0.99);\n        filter: alpha(opacity=50);\n        opacity: .5;\n    }\n    .sidebar-modal-backdrop.fade {\n        filter: alpha(opacity=0);\n        opacity: 0;\n    }\n    .sidebar-modal-backdrop.in {\n        filter: alpha(opacity=50);\n        opacity: .5;\n    }\n    .mobile-menucross-icon i.material-icons {\n        position: absolute;\n        top: 10px;\n        left: 240px;\n        height: 30px;\n        width: 30px;\n        color: #bec5c9;\n        cursor: pointer;\n    }\n    .sidebar-offcanvas {\n        top: 102px;\n        z-index: 1020;\n        box-shadow: none;\n    }\n    .sidebar-offcanvas .mobile-menucross-icon i.material-icons {\n        position: absolute;\n        top: 10px;\n        left: -30px;\n    }\n    .name-dropdown-wrapper:hover .dropdown-menu {\n        display: none;\n    }\n    .zoom-parent {\n        display: none;\n    }\n    .mobile-prop-cross-icon {\n        position: absolute;\n        top: 110px;\n        right: 335px;\n        height: 30px;\n        width: 30px;\n        color: #bec5c9;\n        cursor: pointer;\n        z-index: 1030;\n    }\n    .process-bar {\n        top: 102px;\n    }\n    .template-section{\n        top: 137px;\n    }\n}\n.editor-sidebar.sidebar.build-bg {\n    background-color: #f6f8f9;\n}\n.fr-sr-only {\n    display:none !important;\n}\n.fr-element .var-tag {\n    background-color: #999;\n    border-radius: 3px 3px 3px 3px;\n    border: 0;\n    color: #FFFFFF;\n    font-style: inherit;\n    font-size: 11px;\n    padding: 4px 5px;\n    margin: 0 2px 2px 2px;\n    font-family: inherit;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer !important;\n}\n.tag_delete {\n    display: none;\n}\n.fr-element .tag_delete {\n    display: inline!important;\n    padding: 5px;\n    margin-left: 5px;\n    color: white;\n}\n.fsp-picker__footer {\n    display: none;\n}\n.add-del-overlay::after {\n    background-color: rgba(255,255,255,0.98);\n    position: fixed;\n    left: 0;\n    content: \"\";\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 999;\n    background-image: url(https://cdn.filestackcontent.com/hKb30bzUQ76knmcfY7S0);\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 100px;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    background-blend-mode: multiply;\n}\n.builder-parent1 .template-section {\n    position: fixed;\n    float: left;\n    background: url('background.png');\n    top: 87px;\n    height: calc(100% - 115px);\n}\n.builder-parent-demo .template-section {\n    position: fixed;\n    float: left;\n    background: url('background.png');\n    top: 97px;\n    height: calc(100% - 150px);\n}\n.preview-btn-outer{\n    width: 80px;\n    margin: 0 auto;\n    background: #fff;\n    height: 35px;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    /*-webkit-border-bottom-right-radius: 5px;\n    -webkit-border-bottom-left-radius: 5px;\n    -moz-border-radius-bottomright: 5px;\n    -moz-border-radius-bottomleft: 5px;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;*/\n    /*top: 0;  */\n    position: absolute;\n    z-index: 9999;\n    /*left: 42.5%; */\n    /*top: 97px;*/\n    top:auto;\n    bottom: 0;\n    right: 40px;\n    z-index: 9999;\n    left: auto;\n    border: 1px solid #dae2e6;\n}\n.preview-btn-outer .help-tip i {color: #666; font-size: 18px; line-height: 17px; cursor: pointer; padding:10px;}\n.preview-btn-outer .border-bar{ float: left; background: #e6ecef; width:1px; height: 17px; margin-top: 10px;}\n.help-tip:hover > .help-checktip-small {\n    visibility: visible;\n    z-index: 999;\n}\n.preview-btn-outer-hellobar {\n  /*top:130px;*/\n    top:auto;\n}\n.temp-dev-hellobar {\n  margin-top: 70px;\n}\n.help-checktip-small {\n    float: left;\n    background-color: #62696d;\n    color: #fff;\n    padding: 4px 2px;\n    font-size: 10px;\n    border-radius: 4px;\n    position: absolute;\n    top: 30px;\n    border: none;\n    width: 84px;\n    border-radius: 3px;\n    visibility: hidden;\n    box-shadow: 0 0 2px 1px #b4b4b4;\n    text-align: center;\n    left: -23px;\n}\n.preview-btn-outer .help-checktip-small:before {\n    content: '';\n    position: absolute;\n    top: 21px;\n    left: 56%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    /*border-bottom: 6px solid #62696d;*/\n    border-top: 6px solid #62696d;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    /*border-top: none;*/\n}\n.preview-btn-outer .btn-menu-mw:hover i{ color: #1b85b8;}\n.preview-btn-outer .btn-menu-mw.active i{color: #1b85b8;}\n@media (min-width:1600px) and (max-width:1920px){\n    .process-bar ul { margin-left: 0px;}\n}\n.save_icon i.material-icons {\n    color: #fb5f66 !important;\n    margin-right: 2px !important;\n    font-size: 15px !important;\n}\n.save_icon > span.elem {\n    padding: 0;\n    line-height: 13px;\n    text-transform: none;\n    color: #8e989f;\n    font-family: montserratlight;\n}\n.save_icon > span.elem span{\n    font-size: 11px;\n}\n@-moz-document url-prefix() {\n    /* temp-dev { margin: 46px auto 20px auto !important;} */\n    temp-dev.template-seven{width: 100% !important; transform: scale(1) !important; margin: 46px auto 20px auto !important;}\n    .quote-banner + temp-dev {\n        margin-top: 0 !important;\n    }\n    .quote-banner + temp-dev.template-seven{\n        margin-top: 0 !important;\n    }\n}\n.saving{\n    float: left;\n    font-size: 9px;\n    color: #9b9ea0;\n    margin-top: 5px;\n    line-height: 15px;\n    font-family: montserratlight;\n    font-style: italic;\n}\n.navbar .save_icon .btn.btn-basic.btn-menu{\n    border: none !important;\n    margin-right: 0px !important;\n    height: auto;\n    padding: 0 10px;\n}\n.navbar .save_icon .btn.btn-basic.help-tip:hover{\n    background: none;\n    border: none;\n}\n/* takeover popup css */\n.takeover-popup-1 {\n    width: 50%;\n    margin: 0 auto;\n    height: 100%;\n    display: table;\n}\n.takeover-inner-1 {\n    display: table;\n    text-align: center;\n    height: calc(100vh - 150px);\n    width: 100%;\n}\n.takeover-logo{\n    float: left;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n.takeover-inneer-cell{\n    display: table-cell;\n    vertical-align: middle;\n}\n.takeover-inner-1 img{\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 50px;\n}\n.takeover-inner-1 p {\n    font-size: 22px;\n    line-height: 28px;\n    font-family: montserratregular;\n    text-align: center;\n    margin-top: 40px;\n    margin-bottom: 40px;\n}\n.takeover-inner-1 button.btn-info {\n    border: none;\n    background: #fb5f66;\n    color: #fff;\n    transition: all .5s ease;\n    line-height: 1.5;\n    border-radius: 4px;\n    font-size: 12px;\n    padding: 10px 20px;\n}\n.takeover-inner-1 button.btn-info:hover{\n    background: #fdb6b9;\n    color: #fb5f66;\n    border-color: #fdb6b9;\n}\n/* Start: downgrade Modal */\n#downgrade .modal-content {\n    border-radius: 5px;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background: #ffffff;\n    border: none;\n    max-width: 609px;\n    margin: 0 auto;\n}\n#downgrade .modal-header {\n  padding: 35px 25px 30px;\n  border-bottom: none;\n  border-radius: 5px 5px 0px 0px;\n  position: relative;\n  z-index: 9;\n}\n#downgrade.modal button.close.btn-close {\n  text-shadow: none;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 9;\n  opacity: 1;\n  transition: all 0.3s ease 0s !important;\n}\n#downgrade.modal i.material-icons {\n  font-size: 24px;\n  color: #d7dbdd;\n  transition: .3s ease-in-out;\n}\n#downgrade.modal i.material-icons:hover {\n  color: #62696d !important;\n  opacity: 0.7;\n}\n#downgrade .modal-title {\n  text-transform: uppercase;\n  color: #fb5f66;\n  font-size: 20px;\n  font-family: montserratlight;\n  float: none; position: relative; padding-left:50px; display: inline;\n}\n#downgrade .modal-title\n#downgrade.modal .modal-body {\n  padding: 0px;\n  height: 100%;\n  width: 100%;\n  float: left;\n}\n#downgrade.modal .modal-body-inner {\n  float: left;\n  width: 100%; display: table; height: 100%;\n  margin-bottom: 20px;\n}\n#downgrade.modal.monthlyPlan .modal-body-inner {\n  background: none;\n}\n#downgrade.modal.monthlyPlan .modal-content {\n  background: #fff !important;\n}\n#downgrade .btn-red-outline {\n    color: #fb545b;\n    background-color: #fff;\n    border-color: #fb5f66;\n    border-radius: 2px;\n    font-size: 12px;\n    padding: 7px 18px;\n    margin: 0;\n    transition: all 0.3s ease 0s;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    float: left;\n}\n#downgrade.modal .btn-red-outline.hvr-sweep-to-right::before {\n  background: #ffb5b8 none repeat scroll 0 0;\n  color: #fff !important;\n}\n#downgrade.modal .btn-red-outline.hvr-sweep-to-right:hover {\n  color: #fff !important;\n}\n#downgrade.modal .btn-red-outline.hvr-sweep-to-right:focus,\n#downgrade.modal .btn-red-outline.hvr-sweep-to-right:active{\n  color: #fff !important;\n  background: #ffb5b8 none repeat scroll 0 0 !important;\n}\n#downgrade .modal-footer {\n  /* padding: 0px 30px 25px !important; */\n  text-align: right;\n  border-top: none;\n  color: #8e989f;\n  float: left;\n  width: 100%;\n  border-radius: 8px;\n}\n#downgrade .modal-right {\n    text-align: center;\n    width: 180px;\n    float: none;\n    display: table-cell;\n    vertical-align: middle;\n    border-left: 1px solid #d3d3d3;\n    position: relative;\n    padding-left: 40px;\n}\n#downgrade  .modal-right-inner {\n  padding: 10px 0 0;\n}\n#downgrade.modal .modal-right p {\n    font-size: 18px;\n    color: #666666;\n    line-height: 32px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    font-family: montserratsemibold;\n}\n#downgrade.modal .modal-left {\n    padding: 0px 30px 0px 0px !important;\n    float: left;\n    height: 100%;\n    width: 92%;\n    float: none;\n    display: table-cell;\n    vertical-align: middle;\n}\n/* #downgrade .modal-dialog {\n  width: 675px;\n} */\n#downgrade .modal-footer .btn-new-outer {\npadding: 28px !important;\n\n}\n.iouter-d-grade{ position: absolute; left:0; top:-10px; height: 44px; width: 44px; background: #fb5f66;  padding: 6px 13px;  border-radius: 25px; -webkit-border-radius: 25px; -moz-border-radius: 25px;}\n/* .iouter-d-grade img{ width: 100%;} */\n#downgrade .modal-footer {\n\n  text-align: right;\n  border-top: none;\n  color: #8e989f;\n  float: left;\n  width: 100%;\n  background: #ffffff;\n  border-top-right-radius: 0px;\n  /* background: -moz-linear-gradient(left, #ffffff 0%, #ffffff 64.5%, #f2f2f2 64.5%, #f2f2f2 64.5%, #f2f2f2 100%);\n  background: -webkit-linear-gradient(left, #ffffff 0%,#ffffff 64.5%,#f2f2f2 64.5%,#f2f2f2 64.5%,#f2f2f2 100%);\n  background: linear-gradient(to right, #ffffff 0%,#ffffff 64.5%,#f2f2f2 64.5%,#f2f2f2 64.5%,#f2f2f2 100%); */\n}\n#downgrade .btn-red {\n    color: #fff;\n    background-color: #fb5f66;\n    border-color: #fb5f66;\n    border-radius: 2px;\n    font-size: 13px;\n    padding: 7px 20px;\n    margin-top: 0;\n    transition: all .3s ease 0s;\n    margin-right: 0px;\n    text-transform: uppercase;\n    font-family: montserratregular;\n    position: relative;\n}\n#downgrade span.text-or {\n    background: #fff;\n    padding: 3px;\n    border-radius: 50%;\n    text-transform: uppercase;\n    font-size: 13px;\n    border: 1px solid #d3d3d3;\n    margin-right: 10px;\n    margin-left: 10px;\n    position: absolute;\n    left: -24px;\n    top: 43%;\n    color: rgba(102,102,102,0.5);\n}\n#downgrade.modal .sub-title {\n  font-size: 12px;\n  color: #666;\n  font-family: montserratlight;\n\n}\n#downgrade.modal .cust-text-outer{ float: left; width:100%; margin: 10px 0 0; max-height: 140px; overflow-y: auto; }\n#downgrade.modal .cust-text-outer::-webkit-scrollbar-track {\n    border-radius: 0;\n    background-color: #f5f5f5;\n}\n#downgrade.modal .cust-text-outer::-webkit-scrollbar {\n    width: 6px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n#downgrade.modal .cust-text-outer::-webkit-scrollbar:horizontal {\n    height: 6px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n#downgrade.modal .cust-text-outer::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n#downgrade.modal .cust-text{color: #4793c5; font-family: montserratlight; float: left; font-size:14px; padding-left: 20px;  margin-top: 5px;  position: relative;  margin-bottom: 0px; width:100%;}\n#downgrade.modal .cust-text i{color: #4793c5; position: absolute; left:0;  font-size: 14px;  top: 3px; }\n#downgrade.modal .cust-text i:hover{color: #4793c5; }\n#downgrade.modal .cust-text span{ color:rgba(76,76,76,0.5); font-size: 10px; background: rgba(235,235,235,0.5);  border-radius: 3px;}\n#downgrade.modal .btn-position{ float: left; width:32.5%;}\n#downgrade.modal .body-head{ font-size: 16px; color: #666; text-transform: capitalize; margin-top: 0px;}\n#downgrade.modal .gray-footer{background: #f6f6f6; float: left; width: 100%; padding: 30px; margin-top:20px; }\n#downgrade.modal .gray-footer p{ float: left; width: 100%; font-size: 13px; font-family: montserratlight; color:#888888; margin-bottom: 8px; text-align: left !important;}\n#downgrade.modal .btn-main-outer{ float: left; width:100%; padding: 20px 0 5px;}\n@media (min-width: 320px) and (max-width: 540px) {\n    #downgrade .modal-footer .btn-red{\n        /*margin-right: 0px !important;\n        margin-left: 30px;*/\n        margin-right: 0px !important;\n        margin-left: 0;\n        width: 100%;\n        float: left; margin-top: 33px;\n      }\n      #downgrade.monthlyPlan .modal-footer .btn-red{\n        width: auto;\n        float: none;\n      }\n      #downgrade .modal-footer span.text-or{\n        /*top: 50px;\n        left: -105px;*/\n        top: 15px;\n        left: 0;\n        position: relative;\n      }\n      #downgrade.modal .modal-footer .btn-white{\n        /*margin-top: 50px !important;*/\n        margin-top: 30px !important;\n        width: 100%;\n      }\n      .monthlyPlan .modal-footer .btn-red {\n        margin-left: 0px !important;\n      }\n      .monthlyPlan .col-md-3.subs-label {\n        width: auto;\n        margin-top: 10px;\n      }\n      .monthlyPlan .col-md-2.subs-label {\n        width: auto;\n      }\n      #downgrade.modal.monthlyPlan .modal-body {\n        /* height: 600px !important; */\n      }\n      #downgrade.modal .coupon-applied .btn-red-outline{\n        margin-top: 5px;\n      }\n      #downgrade .modal-footer{\n        padding: 0 35px 30px !important;\n      }\n      .coupon-applied span.title{\n        width: 100%;\n      }\n    \n      #downgrade.modal .btn-position {\n        float: left !important;\n        width: 100% !important;\n      }\n      #downgrade .btn-red-outline {float: none;    margin-bottom: 20px;}\n\n}\n@media (min-width: 456px) and (max-width: 540px) {\n    #downgrade .modal-footer{\n        padding: 0px 50px 30px !important;\n      }    \n\n}\n@media (min-width: 320px) and (max-width: 640px) {\n    .modal#downgrade.monthlyPlan .modal-dialog {\n        width: auto !important;\n        margin: 10px !important;\n        margin-bottom: 50px !important;\n        float: left !important;\n      }\n      #downgrade .modal-dialog{\n        width: auto !important;\n        margin: 10px !important;\n        margin-bottom: 50px !important;\n        /* float: left !important; */\n      }\n      #downgrade.modal .modal-left {\n        float: left;\n        width: 100%;\n      }\n      #downgrade .modal-right {\n        width: 100%;\n        height: 100%;\n        display: block;\n        border: none;\n        float: left;\n        padding: 0;\n        margin-top: 10px;\n      }\n      #downgrade.modal .gray-footer{ padding:0; }\n      #downgrade .modal-footer {\n        float: left;\n        position: initial;\n        text-align: center;\n        background: #f2f2f2;\n        border-radius: 0px 0px 8px 8px;\n        padding: 0px 10px 30px;\n        width: 100%;\n      }\n      .monthlyPlan .modal-footer {\n        background: none !important;\n        padding-bottom: 25px !important;\n      }\n      #downgrade.modal .modal-body {\n        height: auto;\n        width: 100%;\n        float: left;\n        background: none;\n        padding: 0px 20px 10px;\n      }\n      #downgrade.modal .modal-body-inner{\n        background: none; display: block;\n      }\n      #downgrade .modal-header {\n        background: #fff;\n      }\n      #downgrade .modal-content, #currentPlanDetail .modal-content{background: #fff;}\n      #downgrade.modal .btn-position {float: left; width: 35%;}\n      /* #downgrade .btn-red-outline{ margin-right: -35px;} */\n      #downgrade .modal-right-inner{ padding-top: 20px;}\n      .testimonial-section .img-outer {\n            width: 100% !important;\n            height: 100% !important;\n            margin: 0 auto;\n            text-align: center;\n            float: none !important;\n        }\n        .testimonial-section img {\n            width: 60px !important;\n            float: none !important;\n        }\n        .testimonial-section .testimonial-content {\n            width: 100% !important;\n            margin-left: 0 !important;\n            text-align: center;\n            padding-top: 20px;\n        }\n        .testimonial-content .btn-blue-outline {float: none !important; margin-top: 5px;}\n        #downgrade .btn-red-outline {float: none !important;}\n        #downgrade span.text-or {position:  relative !important; left: initial !important; }\n        .btn-main-outer.rs-hide {\n            display: none;\n        }\n        .btn-main-outer.hide.rs-show {\n            display: block !important;\n        }\n        #downgrade .btn-red-outline {\n            margin-bottom: 20px;\n        }\n}\n@media (min-width: 641px) and (max-width: 768px) {\n    #downgrade.modal .btn-main-outer {display: block !important;}\n    #downgrade.modal .btn-main-outer.rs-show {display: none !important;}\n\n}\na.logo-text{ float: left;font-size: 10px; color: #888888; width: 70px; margin-top: 15px;}\na.logo-text:hover{ color: #777777;}\n.comp-logo-style{ float: left; padding-right: 10px !important;}\n.comp-builder-logo{ width: 162px !important; padding-top: 0px !important;}\n.comp-builder-logo img { margin-top: -6px; width:130px;}\n.process-bar.build-process {\n    width: calc(100% - 575px) !important;\n    margin-left: 235px;\n}\n.new-help-luk .dropdown-menu:before{display: none !important}\n.new-help-luk .dropdown-menu{top:33px; left:-60px;  -webkit-animation: help .5s ease-in-out; animation: help .5s ease-in-out; overflow: hidden;}\n.btn-group.help-options.new-help-luk.open a.learn-circle{border-color: #fb5f66;}\n.btn-group.help-options.new-help-luk.open .support_outer  i.support_icon {color: #fb5f66; opacity: 1;}\n.navbar-rightside-outer {\n    display: block;\n    float: left;\n    min-height: 50px;\n    width: 42%;\n}\n.navbar-rightside .btn-group{\n    vertical-align: middle;\n    /*border-right: 1px solid #dae2e6;*/\n    /*min-height: 50px;*/\n    align-items: center;\n    display: inline-flex;\n    float: left;\n}\n.small-btns {\n    float: left;\n    display: flex;\n}\n.large-btns {\n    float: left;\n    /*min-height: 50px;*/\n    width: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 10px;\n}\n/*.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle{\n    min-height: 50px !important;\n}*/\n.new-help-luk {\n    border: none !important;\n}\n.navbar .large-btns a.btn.btn-basic {\n    margin-right: 10px !important;\n}\n.save_icon {\n    display: inline-flex;\n    vertical-align: middle;\n    justify-content: center;\n    align-items: center;\n    padding-right:0px;\n}\n.icon.icon--order-success.svg {\n    height: 25px;\n    width: 25px;\n}\n.help-checktip-small:before {\n    position: absolute;\n    top: -5px;\n    left: 37px;\n    display: inline-block;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #62696d;\n    border-left: 5px solid transparent;\n    border-bottom-color: #62696d;\n    content: '';\n    border-top: transparent;\n    height: 5px;\n}\n.input-next-div {\n    width: 25%;\n    float: left;\n    margin: 0;\n    position: unset;\n    top: 0;\n    left: 0;\n    background: transparent;\n    border: none;\n    box-shadow: none;\n    font-family: montserratregular;\n    min-height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.input-next-div ul {\n    padding: 6px 0;\n    margin: 0;\n    text-align: center;\n    border-bottom: none;\n    box-shadow: none;\n    display: inherit;\n}\n.input-next-div ul li {\n    display: inline-block;\n}\n.input-next-div ul li a {\n    font-size: 12px;\n    margin: 0 10px;\n    color: #62676b;\n    text-transform: uppercase;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n.input-next-div ul li a i {\n    font-size: 15px;\n    vertical-align: text-bottom;\n    margin-right: 8px;\n    color: #bec5c9;\n}\n.input-next-div ul li a:hover {\n    color: #666;\n}\n.input-next-div ul li a:hover i {\n    color: #666;\n}\n.input-next-div li i {\n    font-size: 15px;\n    vertical-align: text-bottom;\n    margin-right: 4px;\n    color: #bec5c9;\n}\n.input-next-div li a.active {\n    color: #1483b7 !important;\n}\n.input-next-div li a.active:hover{\n    color: #1483b7 !important;\n}\n.input-next-div li a.active i {\n    color: #1483b7 !important;\n}\n.input-next-div li a.active:hover i {\n    color: #1483b7 !important;\n}\n.editor-navheader {\n    width: auto;\n    float: left;\n}\n.disable a i {\n    cursor: default;\n    color: #bec5c9 !important;\n    opacity: 0.5;\n}\n.navbar .large-btns a.btn.btn-basic i {\n    vertical-align: middle;\n    -webkit-transform: rotate(0.03deg);\n            transform: rotate(0.03deg);\n    line-height: 16px;\n    font-size: 15px;\n}\n.topbar-left{\n    width: 33%;\n    float: left;\n}\n.process-bar.processBarHide{display: none;}\n.disable{\n    /*background: #f6f8f9;*/\n    background: transparent;\n}\n.process-bar li.disable a {\n    cursor: pointer;\n    pointer-events: none;\n}\n.vertical-line{height: 30px !important;width: 1px;background: #dae2e6 !important;}\n.navbar-inner{display: flex;}\nnav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .topbar-left {\n    width: calc(100% - 78% );\n}\nnav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .topbar-left input.ed-projectname{width: 75%;}\nnav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .build-process {\n    width: calc(100% - 55% );\n}\nnav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .navbar-rightside-outer {\n    width: calc(100% - 67% );\n}\nnav.navbar.navbar-default.navbar-fixed-top.ecom-TopBarPanel .build-process.input-next-div ul li a i {\n    margin-right: 4px;\n}\n.navbar-default.ecom-TopBarPanel .topbar-left {\n    width: 30%;\n}\n.navbar-default.ecom-TopBarPanel .input-next-div {\n    width: 45%;\n}\n.navbar-default.ecom-TopBarPanel .navbar-rightside-outer {\n    width: 37%;\n}\n.navbar-default.ecom-TopBarPanel.isProducts .topbar-left {\n    width: 28% ;\n}\n.navbar-default.ecom-TopBarPanel.isProducts .input-next-div{\n    width: 49% ;\n}\n.navbar-default.ecom-TopBarPanel.isProducts .navbar-rightside-outer {\n    width: 29% !important;\n}\n/*********** new dropdown design*****************/\n/* .dropdown.preview-dropdown{position: initial !important} */\n.dropdown.preview-dropdown:hover .dropdown-menu.cust-builder-dropdown{ display: block; }\n.dropdown-menu.cust-builder-dropdown {\n    float: left;\n    width: 300px;\n    border-radius: 0px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    border-top: 3px solid #fb5f66;\n    padding: 0;\n    box-shadow: 4px 6.928px 10px 0px rgba( 0, 0, 0,0.1);\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    background-color: rgb( 255, 255, 255 );\n    top: 25px;\n    -webkit-animation: dropdown-slide .5s ease-in-out;\n          animation: dropdown-slide .5s ease-in-out;\n     overflow: hidden;\n\n}\n.custom-builder-dropdown-body {\n    float: left;\n    width: 100%;\n}\n.custom-builder-dropdown-head {\n    float: left;\n    width: 100%;\n    padding: 10px 15px;\n    border-bottom: 1px solid #dae2e6;\n    position: relative;\n}\n.custom-builder-dropdown-head h6 {\n    font-size: 11px;\n    text-transform: uppercase;\n    color: #888;\n    float: left;\n    width: 100%;\n    margin: 0;\n}\n.custom-builder-dropdown-footer button.btn.btn-basic {\n    float: left;\n    width: 100%;\n    border-radius: 0px;\n    text-transform: uppercase;\n    font-size: 11px;\n    min-height: 48px;\n    border-radius: 0px !important;\n    box-shadow: none !important;\n}\n.custom-builder-dropdown-body ul {\n    float: left;\n    width: 100%;\n    margin: 0;\n}\n.custom-builder-dropdown-body ul li{\n    float: left;\n    width: 100%;\n    padding: 10px 15px;\n    border-bottom: 1px solid #dae2e6;\n    position: relative;\n    padding-left: 40px\n}\n.custom-builder-dropdown-body ul li p {\n    float: left;\n    width: 100%;\n    margin: 0;\n    font-size: 10px;\n    color: #62696d;\n    font-family: montserratlight;\n}\n.custom-builder-dropdown-body ul li label{color: #444444; font-family: montserratlight;cursor: pointer; float: left;width: 100%;font-size: 12px; padding-top:1px;}\n.custom-builder-dropdown-body ul li input[type=\"checkbox\"]{\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    margin: 0;position: absolute;\n    width: 12px;\n    height: 12px;\n    background: #fff;\n    border:1px solid #444444;\n    top: 13px;\n    left: 19px; opacity:1 !important;\nborder-radius: 10px;\n}\n.custom-builder-dropdown-body ul li label i{ line-height: 18px;}\n.custom-builder-dropdown-body ul li p a{\n    color:#3589c0;\n    text-transform: uppercase;\n    font-family: montserratlight;\n}\n/* .dropdown-menu.cust-builder-dropdown::after {\n    content: '';\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #fb5f66;\n    border-left: 10px solid transparent;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: -13px;\n} */\n.custom-builder-dropdown-body ul li input[type=\"checkbox\"]:checked + label::after{  content:'';\n    margin: 0;position: absolute;\n    width: 12px;\n    height: 12px;\n    background: #fff;\n    border:1px solid #444444;\n    top: 13px;\n    left: 19px;\n\n\n}\n.custom-builder-dropdown-body ul li input[type=\"checkbox\"]:checked + label::before , .custom-builder-dropdown-body ul li input[type=\"checkbox\"] + label::before {\n    content:'check';\n    margin: 0;position: absolute;\n    font-family: \"Material Icons\";\n    top: 13px;\n    overflow: hidden;\n    left: 16px;\n    color: #444444;\n    font-size: 15px;\n    z-index: 5;\n    transition: all 0.50s;\n     line-height: 1;\n}\n.custom-builder-dropdown-body ul li input[type=\"checkbox\"] + label::before{\n    width: 0px !important;\n  }\n.custom-builder-dropdown-body ul li input[type=\"checkbox\"]:checked + label::before{\n    width: 16px !important;\n  }\n.custom-builder-dropdown-body .selected-default{pointer-events: none; color: #ccc;}\n.custom-builder-dropdown-body  ul li.selected-default input[type=\"checkbox\"]:checked + label::before , .custom-builder-dropdown-body  ul li.selected-default input[type=\"checkbox\"] + label::before{ font-size: 18px;\n    background: #fff;\n    border: 0 !important;\n    left: 15px;\n    width: 40px;  }\n.custom-builder-dropdown-body  ul li div.selected-default input[type=\"checkbox\"]:checked + label::before , .custom-builder-dropdown-body  ul li.selected-default input[type=\"checkbox\"] + label::before{ font-size: 18px;\n        background: #fff;\n        border: 0 !important;\n        left: 15px;\n        width: 40px;  }\n.custom-builder-dropdown-body  ul li.selected-default input[type=\"checkbox\"]{ border-color:#ccc;}\n/* .custom-builder-dropdown-body  ul li.selected-default label{   } */\n.custom-builder-dropdown-body ul li.selected-default input[type=\"checkbox\"]:checked + label::after{ border: none;}\nbutton.btn.btn-basic.my-custom-dropdown{display: flex; align-items: center;line-height: 1 !important;min-height: 26px}\nbutton.btn.btn-basic.my-custom-dropdown  span.caret1 {\n    line-height: 1;\n    display: flex;\n    align-items: center;\n    float: right;\n}\nbutton.btn.btn-basic.my-custom-dropdown  span.caret1 i {\n    font-size: 14px;\n    line-height: 1;\n}\n.custom-builder-dropdown-body ul li label span{ float: left; width: 100%; word-break: break-all; }\n.custom-builder-dropdown-body ul li p.cust-url span{ float: left; width: 100%; word-break: break-all; }\n/*********new changes in dropdown ******/\n.name-dropdown-wrapper.new-drop .dropdown-menu {\n    background: #fff;\n    border-top:3px solid #fb5f66;\n    padding:0 !important;\n}\n.name-dropdown-wrapper.new-drop .dropdown-menu>.name-list li>a span.name-list-title{color: #444}\n/********* quote banner***************/\n.quote-banner {\n    margin: 15px;\n    width: calc(100% - 30px);\n    float: left;\n    background: #fff;\n    padding: 15px 14%;\n    clear: both;\n    position: relative;\n    z-index: 1;\n}\n.left-part h5 {\n    float: left;\n    width: 100%;\n    margin: 0 0 5px 0;\n    font-size: 13px;\n    color: #3a82b2;\n    font-weight: 100;\n    font-family: 'montserratlight';\n    margin-bottom: 10px;\n}\n.left-part h3{\n    float: left;\n    width: 100%;\n    margin: 0;\n    font-size: 18px;\n    color: #3a82b2;\n    font-weight: 100;\n    font-family: 'montserratregular';\n}\n.left-part {\n    float: left;\n    width: calc(100% - 145px);\n    padding-right: 15px;\n}\n.right-part {\n    float: left;\n    width: 145px;\n}\nbutton.quote-btn.btn {\n    background: #fff;\n    border: 1px solid #fb5f66;\n    color: #fb5f66 !important;\n    font-size: 12px;\n    font-family: montserratlight;\n    line-height: 1;\n    padding: 5px 20px;\n    min-width: 140px;\n    margin-bottom: 5px;\n}\nbutton.quote-btn.btn:hover{\n    border: 1px solid #fb5f66;\n    background: #fb5f66;\n    color: #fff !important;\n    transition: all 0.3s ease 0s !important;\n}\n.right-part p {\n    float: left;\n    width: 100%;\n    text-align: center;\n    font-size: 10px;\n    color: #90989e;\n    font-family: montserratlight;\n    margin: 0;\n}\n.quote-banner span.cross i {\n    font-size: 16px;\n    color: #bfc6ca;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    line-height: 1;\n    transition: 0.5s\n}\n.quote-banner span.cross{position: absolute;;right: 10px; top: 10px; cursor: pointer;}\n.quote-banner span.cross:hover i{ color:#333;transition: 0.5s}\n#downgrade textarea {\n    display: block;\n    width: 100%;\n    border: 0;\n    background: #f6f6f6 no-repeat;\n    background-image: linear-gradient(to bottom, #1483b7, #1483b7), linear-gradient(to bottom, silver, silver);\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n    font-size: 14px;\n    font-family: 'montserratregular';\n    color: #62696d; margin-bottom:15px; resize: none; margin-top:5px; float: left; position: relative;z-index: 99;\n  }\n#downgrade textarea:focus{\n    /* sizes for the 2 images (focus state) */\n    background-size: 100% 2px, 100% 1px;\n    outline: none;\n  }\n#downgrade textarea::-webkit-input-placeholder {\n    font-family: montserratlight !important;\n  color: #8e9ba6 !important;\n  font-weight: normal !important;\n  font-size: 12px !important;\n  opacity: 0.5;font-style: normal !important;\n    }\n#downgrade textarea:-moz-placeholder { /* Firefox 18- */\n    font-family: montserratlight !important;\n  color: #8e9ba6 !important;\n  font-weight: normal !important;\n  font-size: 12px !important;\n  opacity: 0.5;font-style: normal !important;\n    }\n#downgrade textarea::-moz-placeholder {  /* Firefox 19+ */\n    font-family: montserratlight !important;\n  color: #8e9ba6 !important;\n  font-weight: normal !important;\n  font-size: 12px !important;\n  opacity: 0.5;font-style: normal !important;\n    }\n#downgrade textarea:-ms-input-placeholder {\n    font-family: montserratlight !important;\n  color: #8e9ba6 !important;\n  font-weight: normal !important;\n  font-size: 12px !important;\n  opacity: 0.5;font-style: normal !important;\n    }\n@media (min-width: 1200px) and (max-width: 1350px){\n    .left-part h3{\n        font-size: 16px;\n    }\n    .left-part h5{\n        font-size: 12px;\n    }\n    .quote-banner {\n        margin: 15px 30px;\n        width: calc(100% - 60px);\n        padding: 15px 10%;\n    }\n}\n@media (min-width: 1200px) and (max-width: 1280px){\n    .left-part h3{\n        font-size: 16px;\n    }\n    .left-part h5{\n        font-size: 12px;\n    }\n    .quote-banner {\n        margin: 15px 30px;\n        width: calc(100% - 60px);\n        padding: 15px 8%;\n    }\n}\n@media (min-width: 1380px) and (max-width: 1440px){\n    .quote-banner {\n        margin: 15px 25px;\n        width: calc(100% - 50px);\n    }\n}\n@media (min-width: 1450px) and (max-width: 1680px){\n    .quote-banner {\n        margin: 15px 60px;\n        width: calc(100% - 120px);\n    }\n}\n@media (min-width:1690px) and (max-width:1710px){\n    .quote-banner{\n        margin: 15px 65px;\n        width: calc(100% - 130px);\n    }\n}\n@media (min-width: 1720px) and (max-width: 1920px){\n    .quote-banner {\n        margin: 15px 35px;\n        width: calc(100% - 70px);\n    }\n}\n@-webkit-keyframes dropdown-slide /* Safari and Chrome */\n{\nfrom {height: 0;}\nto {height: 130px;}\n}\n@keyframes dropdown-slide\n{\nfrom {height: 0;}\nto {height: 130px;}\n}\n.quote-banner + temp-dev {\n    margin-top: 150px;\n}\n.quote-banner + temp-dev.template-seven {\n    margin-top: 112px;\n}\n.pd10 {\n    padding-left: 30px !important;\n    padding-right: 30px !important;\n}\n.preview-dropdown .loading::after {\n    top: -2px;\n    font-size: 24px;\n}\n/* for help-drop-down */\n@-webkit-keyframes help /* Safari and Chrome */\n{\nfrom {height: 0;}\nto {height:68px;}\n}\n@keyframes help\n{\nfrom {height: 0;}\nto {height:68px;}\n}\n/* for help-drop-down end */\n/*upgrade template popover*/\n.upgrade-popover {position: fixed;color: #62696d;z-index: 999;right: 20px;top: 50px;width: 412px;box-shadow: 0px 7px 25px 5px rgba(0, 0, 0, .2);font-family: montserratregular;border-radius: 3px;background: linear-gradient(to right, #fb5f66 0%, #fb5f66 14%, #ffffff 14%, #ffffff 14%, #ffffff 14%, #ffffff 100%);display: flex;align-items: center;}\n.left-section {width: 14%;float: left;text-align: center;height: 100%;display: table-cell;vertical-align: middle;}\n.right-section {width: 86%;float: left;padding: 18px 20px 20px 17px;}\n.upgrade-heading {font-size: 13px;line-height: normal;color: #666666;text-align: left;padding-bottom: 7px;padding-right: 30px;letter-spacing: 0.5px;font-family: montserratlight;}\n.feature-list {width: 100%;float: left;}\n.features {width: 100%;float: left;padding-bottom: 4px;}\n.features i {font-size: 11px;color: #fb5f66;margin-right: 7px;-webkit-transform: rotate(0.03deg);transform: rotate(0.03deg);}\n.features span{color: #666;opacity: 0.7;font-family: montserratlight;font-size: 13px;}\n.right-section a.close-btn {width: auto;float: right;}\n.right-section i.close {position: relative;top: 2px;font-size: 16px;color: #666;opacity: 0.5;}\na.template-update-btn {float: right;color: #fff;padding: 8px 18px;background: #fb5f66;border-radius: 5px;text-transform: uppercase;font-size: 12px;font-family: montserratlight;margin-top: 10px;transition: .3s ease-in-out;}\n.notify-icon {font-size: 32px;color: #fff;}\n.feature-list p {width: 100%;float: left;margin: 0;font-size: 13px;color: #666;opacity: 0.7;font-family: montserratlight;padding-bottom: 5px;}\na.template-update-btn:hover {background: #fdb6b9 !important;color: #fb5f66 !important;border-color: #fdb6b9 !important;}\n/****   small model ************/\n.modal.small-model{display: block; z-index: 99999; background-color: rgba(0, 0, 0, 0.75); display: flex !important;align-items: center;}\n.modal.small-model .modal-dialog{max-width: 480px;     margin: 0 auto !important;     padding: 0 10px;}\n.modal.small-model .modal-body h2 {margin: 0 0 10px 0;float: left;width: 100%;text-align: center;font-size: 24px;color: #fb5f66;font-family: montserratlight;line-height: 30px;}\n.modal.small-model .modal-body p {margin: 0;float: left;width: 100%;text-align: center;font-size: 14px;color: #666666;font-family: montserratlight;line-height: 20px;}\n.modal.small-model .modal-content {float: left;width: 100%;box-shadow: 0 0px 30px rgba(0,0,0,.5);border-radius: 5px;    min-height: 245px;align-items: center;display: flex;justify-content: center;}\n.modal.small-model .modal-body{float: left; width: 100%; text-align: center}\n.icon-block {float: left;width: 100%;text-align: center;margin-bottom: 15px;}\na.btn.my-btn {BACKGROUND: #fb5f66;color: #fff;margin: 20px 0 0; font-family: montserratregular;}\n.icon-block img {height: 55px;}\n@media (max-width:639px){\n    .modal.small-model .modal-body h2{font-size: 18px; margin: 0 0 5px 0}\n    .modal.small-model .modal-body p{font-size: 12px}\n    a.btn.my-btn {margin: 15px 0 0;font-size: 12px;}\n    .icon-block img {height: 45px;}\n\n}\n@media (max-width:768px){\n    .rs-show{ display: block !important;}\n    .rs-hide{ display: none !important;}\n}\n#downgrade .modal-body {\n    padding: 0px 40px 10px;\n}\n.testimonial-section .img-outer {\n    width: 60px;\n    height: 60px;\n    float: left;\n}\n#downgrade .modal-dialog {\n    width: 609px;\n    margin: 50px auto;\n}\ndiv#downgrade.modal {\n    padding-left: 0px !important;\n    padding-bottom: 20px;\n}\ndiv#downgrade.modal {\n    padding-left: 0px !important;\n    padding-bottom: 20px;\n}\n.testimonial-section {\n    float: left;\n    width: 100%;\n    font-size: 12px;\n    color: #666;\n    font-family: montserratlight;\n    background: #fff;\n    border-radius: 7px;\n    box-shadow: 0px 7px 20px rgba(0, 0, 0, .12);\n    padding: 20px 20px 0px;\n    margin-bottom: 40px;\n}\n.testimonial-section img {\n    float: left;\n    width: 100%;\n}\n.testimonial-section .testimonial-content {\n    float: left;\n    width: 84%;\n    margin-left: 15px;\n    padding-bottom: 15px;\n}\n.testimonial-section .testimonial-content h5.user-name {\n    font-size: 12px;\n    color: #666;\n    font-family: montserratlight;\n    margin-top: 0;\n}\n.testimonial-section .testimonial-content p.user-testimonial {\n    font-size: 12px !important;\n    line-height: 16px;\n}\n.testimonial-content-bottom {\n    float: left;\n    background: #f9f9f9;\n    margin: 0px -20px;\n    padding: 10px 20px;\n    color: #888;\n    font-size: 12px;\n    line-height: 16px;\n    display: inline-flex;\n    border-radius: 0 0 7px 7px;\n}\n.testimonial-content-bottom .asterix {\n    font-size: 24px;\n    float: left;\n    margin-top: 4px;\n    margin-right: 5px;\n}\n.testimonial-content-bottom span{\n    display: block;\n    font-size: 11px;\n    color: #93999b;\n    font-family: montserratlight;\n}\n.testimonial-content-bottom a {\n    font-size: 12px;\n    color: #fb5f66;\n    font-family: montserratbold;\n    text-decoration: underline;\n    display: contents;\n}\n.testimonial-content .btn-blue-outline {\n    color: #fb5f66;\n    text-decoration: none;\n    text-transform: uppercase;\n    display: inline-block;\n    background: #fff;\n    border-radius: 2px;\n    padding: 6px 15px;\n    font-size: 11px;\n    margin-bottom: 0px;\n    border-color: #fb5f66;\n    font-family: montserratregular;\n    float: right;\n}\n/* .testimonial-content-bottom .btn-blue-outline:hover {\n    background: #26a2db !important;\n    color: #fff !important;\n} */\n.editor-sidebar.sidebar.ecom-hide-left + .editor-template-tabs.minH {\n    width: 100%;\n    margin: 0 !important;\n}\n.editor-sidebar.sidebar.ecom-hide-left {\n    display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS8rYnVpbGRlci9hc3NldHMvY3NzL2J1aWxkZXIuc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFvQkEsbUZBQW1GO0FBQ25GLGlFQUFpRTtBQXJCakU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQkU7QUFHRjs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTs7Ozs7O0lBTUksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFFbEIsMEJBQTBCO0VBRTFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFFdkIsc0NBQThCO0VBQTlCLDhCQUE4QjtFQUE5QixpREFBOEI7RUFFOUIseUJBQXlCO0VBRXpCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDZDQUFxQztZQUFyQyxxQ0FBcUM7QUFDekM7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSjtBQVBBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4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QUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0FBQ0E7OztHQUdHO0FBRUg7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9zaXRlLytidWlsZGVyL2Fzc2V0cy9jc3MvYnVpbGRlci5zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC1yZWd1bGFyLXdlYmZvbnQuZW90KSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0LXJlZ3VsYXItd2ViZm9udC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksIHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC1yZWd1bGFyLXdlYmZvbnQud29mZikgZm9ybWF0KFwid29mZlwiKSwgdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0LXJlZ3VsYXItd2ViZm9udC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0Ym9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC1ib2xkLXdlYmZvbnQuZW90KSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0LWJvbGQtd2ViZm9udC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksIHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC1ib2xkLXdlYmZvbnQud29mZikgZm9ybWF0KFwid29mZlwiKSwgdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9tb250c2VycmF0LWJvbGQtd2ViZm9udC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQtbGlnaHQtd2ViZm9udC5lb3QpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQtbGlnaHQtd2ViZm9udC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksIHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC1saWdodC13ZWJmb250LndvZmYpIGZvcm1hdChcIndvZmZcIiksIHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC1saWdodC13ZWJmb250LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbn0qL1xuQGltcG9ydCAnaHR0cHM6Ly9tYXhjZG4uaWNvbnM4LmNvbS9mb250cy9saW5lLWF3ZXNvbWUvMS4xL2Nzcy9saW5lLWF3ZXNvbWUubWluLmNzcyc7XG5AaW1wb3J0IFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMy9jc3MvYWxsLmNzc1wiO1xudWwsXG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYTpmb2N1cyxcbmltZzpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubm8tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogU3dlZXAgVG8gUmlnaHQgKi9cbi5odnItc3dlZXAtdG8tcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuLmh2ci1zd2VlcC10by1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMyMDk4ZDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLmh2ci1zd2VlcC10by1yaWdodDpob3ZlciwgLmh2ci1zd2VlcC10by1yaWdodDpmb2N1cywgLmh2ci1zd2VlcC10by1yaWdodDphY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG4uaHZyLXN3ZWVwLXRvLXJpZ2h0OmhvdmVyOmJlZm9yZSwgLmh2ci1zd2VlcC10by1yaWdodDpmb2N1czpiZWZvcmUsIC5odnItc3dlZXAtdG8tcmlnaHQ6YWN0aXZlOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLnBhdGgge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XG4gICAgYW5pbWF0aW9uOiBkcmF3IDJzIDBzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBkcmF3IHtcbiAgICBmcm9tIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuYnV0dG9uIHtcbiAgICBoZWlnaHQ6IGluaXRpYWw7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICAgIG1hcmdpbjogOTBweCBhdXRvO1xufVxuXG4uZWRpdG9yLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDExcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkM1NDVCO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4uZWRpdG9yLW1vZGFsIC5tb2RhbC10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbi5lZGl0b3ItbW9kYWwgYnV0dG9uLmNsb3NlIHtcbiAgICBjb2xvcjogI2Q3ZGJkZDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgICBjb250ZW50OiBcImNsb3NlXCI7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDk7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZWRpdG9yLW1vZGFsIGJ1dHRvbi5jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICM2MjY5NmQ7XG4gICAgb3BhY2l0eTogLjc7XG59XG5cbi5lZGl0b3ItbW9kYWwgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5lZGl0b3ItbW9kYWwgLmJvb3Rib3gtYm9keSB7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZWRpdG9yLW1vZGFsIC5idG4uYnRuLWJhc2ljIHtcbiAgICBjb2xvcjogI2ZiNWY2NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmI1ZjY2O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHggNTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG4uZWRpdG9yLXNpZGViYXIuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICAvKnotaW5kZXg6IDE7Ki9cbiAgICB6LWluZGV4OiAyOyAvKiBuZXcgYWRkICovXG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgd2lkdGg6IDIzNXB4O1xufVxuXG4uZWRpdG9yLXRlbXBsYXRlLXRhYnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmOGY5O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMzVweCk7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG59XG4vKi5lZGl0b3ItdGVtcGxhdGUtdGFicy5idWlsZGVyLXBhcmVudDEge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59Ki9cbi5lZGl0b3ItdGVtcGxhdGUtdGFicy5taW5ILmJ1aWxkZXItcGFyZW50MSB7XG4gICAgLyogdG9wOiAxNXB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uZWRpdG9yLXRlbXBsYXRlLXRhYnMubm9tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZWRpdG9yLXRlbXBsYXRlLXRhYnMubWluSCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmNvbmZpZyB7XG4gICAgbWluLWhlaWdodDogOTV2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuI2J1aWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmVkaXRvci1uYXZoZWFkZXIgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIC8qcGFkZGluZy1sZWZ0OiAyNXB4OyovXG4gICAgLyp3aWR0aDogMjMycHg7Ki9cbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLypwYWRkaW5nLXRvcDo1cHg7Ki9cbn1cbi5lZGl0b3ItbmF2aGVhZGVyIC5uYXZiYXItYnJhbmQgc3ZneyBsZWZ0OiAtMTJweCAhaW1wb3J0YW50Oy8qaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50OyovdG9wOiAtNjVweCAhaW1wb3J0YW50O3dpZHRoOjEwMHB4O31cblxuLnRlbXBsYXRlLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVpbGRlci9iYWNrZ3JvdW5kLnBuZycpO1xuICAgIHRvcDogODNweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgzcHgpO1xufVxuXG4ucGFuZWwtZ3JvdXAgLnBhbmVsICsgLnBhbmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucGFuZWwtdGl0bGUgaS5tYWluLWljIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjYmVjNWM5O1xufVxuXG5cbi8qdG9wIGJhciovXG5cbmlucHV0LmVkLXByb2plY3RuYW1lIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIGNvbG9yOiAjOGU5ODlmO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICBtYXJnaW46IDEwcHggMCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQuZWQtcHJvamVjdG5hbWU6aG92ZXIge1xuICAgIGNvbG9yOiAjZmI1ZjY2O1xufVxuXG4uZWQtcHJvamVjdG5hbWUge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RhZTJlNjtcbiAgICBjb2xvcjogI2ZiNWY2NjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZTJlNjtcbiAgICB6LWluZGV4OiA5ODA7XG59XG5cbi5uYXZiYXItcmlnaHRzaWRlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4ubmF2YmFyLXJpZ2h0c2lkZSAubmFtZS1kcm9wZG93bi13cmFwcGVyLmJ0bi1ncm91cCB7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5uYXZiYXItcmlnaHRzaWRlIC5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIHRvcDogMzNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXZiYXItcmlnaHRzaWRlIC5uYW1lLWRyb3Bkb3duLXdyYXBwZXIuYnRuLWdyb3VwIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG59XG5cbi5uYXZiYXItcmlnaHRzaWRlIC5idG4tYmFzaWMge1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5hdmJhci1sZWZ0c2lkZSBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjOGU5ODlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdHJlZ3VsYXInO1xufVxuXG4ubmF2YmFyLWxlZnRzaWRlIGxhYmVsIGk6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNiZWM1Yzk7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbn1cblxuLm5hdmJhci1sZWZ0c2lkZSAuaGVscC10aXA6aG92ZXIgbGFiZWwgaTpsYXN0LWNoaWxkIHtcbiAgICBjb2xvcjogI2ZiNWY2Njtcbn1cblxuLmJsdWUtdGV4dCB7XG4gICAgY29sb3I6ICNmYjVmNjY7XG59XG5cbi5uYXZiYXItbGVmdHNpZGUgbGFiZWwgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm5hdmJhci1sZWZ0c2lkZSB7XG4gICAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWUyZTY7Ki9cbiAgICBjb2xvcjogI2ZiNWY2NjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmF2YmFyIC5idG4uYnRuLWJhc2ljIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZiNWY2NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLm5hdmJhciAuYnRuLmJ0bi1iYXNpYzpub3QoLmJ0bi1tZW51KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZkYjZiOTtcbiAgICBjb2xvcjogI2ZiNWY2NjtcbiAgICBib3JkZXItY29sb3I6ICNmZGI2Yjk7XG59XG5cbi5uYXZiYXIgLmJ0bi5idG4tYmFzaWMuYnRuLW1lbnUge1xuICAgIGJhY2tncm91bmQ6ICNiZGM2Y2E7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGxpbmUtaGVpZ2h0OiAycHg7XG59XG5cbi5uYXZiYXIgLmJ0bi5idG4tYmFzaWMuY3B5X2xpbmsgaXtcbiAgICB0cmFuc2Zvcm06cm90YXRlKDAuMDNkZWcpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhciAuYnRuLmJ0bi1iYXNpYy5jcHlfbGluazpob3ZlciB7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjZmI1ZjY2ICFpbXBvcnRhbnQ7Ki9cbiAgICAvKmNvbG9yOiAjZmI1ZjY2ICFpbXBvcnRhbnQ7Ki9cbiAgICBjb2xvcjogI2JkYzZjYSFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRjNmNhO1xufVxuLm5hdmJhciAuYnRuLmJ0bi1iYXNpYy5jcHlfbGluazpob3ZlciBpe1xuICAgIC8qY29sb3I6ICNmYjVmNjYgIWltcG9ydGFudDsqL1xuICAgIGNvbG9yOiAjYmRjNmNhIWltcG9ydGFudDtcbn1cbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzLFxuLmJ0bi5mb2N1cyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi5idG4tYmFzaWMge1xuICAgIGNvbG9yOiAjZmI1ZjY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZGlzYWJsZS1idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgY29sb3I6ICNiZWM1Yzk7XG59XG5cbi5kaXNhYmxlLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZTJlNjtcbiAgICBjb2xvcjogI2JlYzVjOTtcbn1cblxuLm5hdmJhci1sZWZ0c2lkZSAuYmx1ZS10ZXh0IHtcbiAgICBjb2xvcjogI2ZiNWY2NiAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci1sYXlvdXQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZTJlNjtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2Y2ZjhmOTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uc2lkZWJhci1vZmZjYW52YXMge1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmJmZGZjO1xuICAgIHJpZ2h0OiAzMDBweDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGFlMmU2O1xufVxuXG4uc2lkZWJhci1vZmZjYW52YXMtcmlnaHQgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IHVsIGxpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZTJlNjtcbn1cblxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zaWRlYmFyLW9mZmNhbnZhcy1yaWdodCB1bCBsaSBpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgIC8qY29sb3I6ICMxNDgzYjc7Ki9cbiAgICBjb2xvcjogIzVjNjE2NTtcbn1cblxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IHVsIGxpIC5kaXNhYmxle1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uc2lkZWJhci1vZmZjYW52YXMtcmlnaHQgdWwgbGkgLmRpc2FibGUgaSB7XG4gICAgY29sb3I6ICNiZWM1Yzk7XG59XG5cbi5zaWRlYmFyLW9mZmNhbnZhcy1yaWdodCBsaSBhIHtcbiAgICBjb2xvcjogI2JjYzRjNjtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2lkZWJhci1vZmZjYW52YXMtcmlnaHQgbGkgYS5hY3RpdmUgaSxcbi5zaWRlYmFyLW9mZmNhbnZhcy1yaWdodCBsaSBhOmhvdmVyIGkge1xuICAgIC8qY29sb3I6ICM1YzYxNjU7Ki9cbiAgICBjb2xvcjogIzE0ODNiNztcbn1cblxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IGxpIGEuYWN0aXZlLFxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNmY4Zjk7XG59XG5cbi5zaWRlYmFyLW9mZmNhbnZhcy1yaWdodCAuaGVscC1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhZTJlNjtcbn1cblxuLnNpZGViYXItb2ZmY2FudmFzLXJpZ2h0IC5oZWxwLXBvc2l0aW9uIC5idWlsZGVyLWhlbHAtaWNvbiB7XG4gICAgdG9wOiAwO1xufVxuXG4uc2lkZWJhci1vZmZjYW52YXMtcmlnaHQgLnBvcG92ZXItd3JhcHBlciAucG9wb3Zlci1ibG9jazpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yOXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgVFJBTlNQQVJFTlQ7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjNjI2OTZkO1xuICAgIC8qIGJvcmRlci10b3AtY29sb3I6ICM2MjY5NmQ7ICovXG4gICAgY29udGVudDogJyc7XG59XG5cbi5zaWRlYmFyLW9mZmNhbnZhcy1yaWdodCAuaWNvbi1oZWxwLnBvcG92ZXItd3JhcHBlciAucG9wb3Zlci1ibG9jazpiZWZvcmUge1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cbi5uYXZiYXIgLmJ0bi1iYXNpYyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdHJlZ3VsYXInO1xufVxuXG4uYnRuLWJhc2ljMyB7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5lbGxpcHNpcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubmF2YmFyLXJpZ2h0c2lkZSAubmFtZS1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlIHNwYW4ubmFtZS10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLm5hdmJhci1yaWdodHNpZGUgLm5hbWUtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5vcGVuLXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZTJlNjtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmNmY4Zjk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5vcGVuLXNpZGViYXIgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjOGU5ODlmO1xufVxuXG4uZWRpdG9yIC50eXBlLWRldGFpbHM6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnBhbmVsLWhlYWRpbmcgYS5jb2xsYXBzZWQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xufVxuXG4ucGFuZWwtaGVhZGluZyBhOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbn1cblxuLmVkLXByb2plY3RuYW1lLmFjdGl2ZS10ZXh0IHtcbiAgICBjb2xvcjogI2ZiNWY2Njtcbn1cblxuLm5hdmJhci1maXhlZC10b3AgLm5hdi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuXG4vKiBTdGFydDogbmFtZSBEcm9wZG93biAqL1xuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzhlOTg5ZjtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSBpLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmYjVmNjY7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5kcm9wZG93bi10b2dnbGUgc3Bhbi5uYW1lLXRpdGxlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNzIlO1xuICAgIG1pbi13aWR0aDogNjlweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxuLm5hbWUtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSB7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSB7XG4gICAgdG9wOiAzMXB4O1xuICAgIGxlZnQ6IC03OHB4O1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZDogIzYyNjk2ZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogNzZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDEycHggc29saWQgIzYyNjk2ZDtcbiAgICBib3JkZXItbGVmdDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjI2OTZkO1xuICAgIGNvbnRlbnQ6ICcnO1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51ID4gLm5hbWUtbGlzdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgPiAubmFtZS1saXN0IGxpID4gYTpob3ZlciBpLm1hdGVyaWFsLWljb25zLFxuLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSA+IC5uYW1lLWxpc3QgbGkgPiBhOmZvY3VzIGkubWF0ZXJpYWwtaWNvbnMge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51ID4gLm5hbWUtbGlzdCBsaSA+IGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51ID4gLm5hbWUtbGlzdCBsaSA+IGEgc3Bhbi5uYW1lLWxpc3QtaWNvbiB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDFweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51ID4gLm5hbWUtbGlzdCBsaSA+IGEgaS5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgPiAubmFtZS1saXN0IGxpID4gYSBzcGFuLm5hbWUtbGlzdC10aXRsZSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XG59XG5cbi5uYXZiYXIgLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSAubmFtZS1saXN0IGxpID4gYTpob3Zlcixcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSAubmFtZS1saXN0IGxpID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzcxNzg3YjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhciAuZHJvcGRvd24tbWVudSAubmFtZS1saXN0IGxpID4gYTpmb2N1cyxcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSAubmFtZS1saXN0IGxpID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEuaHZyLXN3ZWVwLXRvLXJpZ2h0OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmYThmOTMgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZS1kcm9wZG93bi1ib3JkZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4NyU7XG4gICAgbWFyZ2luOiA1cHggMTJweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzdhODE4NSFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgPiAuY29tcGFueS1saXN0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSA+IC5jb21wYW55LWxpc3QgbGkgPiBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTNweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSA+IC5jb21wYW55LWxpc3QgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51ID4gLmNvbXBhbnktbGlzdCBsaSBzcGFuLmNvbXBhbnktbGlzdC10aXRsZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgPiAuY29tcGFueS1saXN0IGxpIHNwYW4uY29tcGFueS1zZWxlY3RlZCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51ID4gLmNvbXBhbnktbGlzdCBsaS5hY3RpdmUgYSBzcGFuLmNvbXBhbnktc2VsZWN0ZWQgaS5tYXRlcmlhbC1pY29ucyxcbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgPiAuY29tcGFueS1saXN0IGxpIGEgc3Bhbi5jb21wYW55LXNlbGVjdGVkIGkubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xufVxuXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IC5jb21wYW55LWxpc3QgLmFjdGl2ZSA+IGEsXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5kcm9wZG93bi1tZW51IC5jb21wYW55LWxpc3QgLmFjdGl2ZSA+IGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IC5jb21wYW55LWxpc3QgbGkgPiBhOmhvdmVyLFxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuZHJvcGRvd24tbWVudSAuY29tcGFueS1saXN0IGxpID4gYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgLmNvbXBhbnktbGlzdCBsaSA+IGE6Zm9jdXMsXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5kcm9wZG93bi1tZW51IC5jb21wYW55LWxpc3QgbGkgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4vKi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmRyb3Bkb3duLW1lbnUgLmNvbXBhbnktbGlzdCBsaSA+IGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzcxNzg3YjtcbiAgICAgICAgfSovXG5cbi5uYW1lLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgZGl2ID4gbGkgPiBhLmh2ci1zd2VlcC10by1yaWdodDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzE3ODdiIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbi5uYW1lLWRkLW1pbmgge1xuICAgIG1pbi1oZWlnaHQ6IDMzcHg7XG59XG5cblxuLyogRW5kOiBuYW1lIERyb3Bkb3duICovXG5cblxuLypoZWxwdGlwKi9cblxuLmhlbHAtdGlwIGkge1xuICAgIGNvbG9yOiAjYmVjNWM5O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLWJhc2ljMiAuaGVscC10aXAgaSB7XG4gICAgY29sb3I6ICNiZWM1Yzk7XG59XG4uaGVscC1jaGVja3RpcCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY1NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMTFweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzlweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLDAsMCwwLjUpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGVmdDogLTcwcHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtcbn1cblxuLmhlbHAtdGlwIHtcbiAgICBtYXJnaW46IDFweCA3cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhlbHAtdGlwOmhvdmVyID4gLmhlbHAtY2hlY2t0aXAge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4ubmF2YmFyLXJpZ2h0c2lkZSAuaGVscC1jaGVja3RpcCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNjk2ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzVweDtcbiAgICBsZWZ0OiAzOXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwwLDAsMC41KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogLTEzcHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLm5hdmJhci1yaWdodHNpZGUgLmNweS1oZWxwdGlwe1xuICAgIHdpZHRoOiAxMjFweDtcbiAgICBsZWZ0OiAtNDNweDtcbn1cbi5uYXZiYXItcmlnaHRzaWRlIC5oZWxwLWNoZWNrdGlwOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzYyNjk2ZDtcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5uYXZiYXIgLmJ0bi1tZW51LW13IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBwYWRkaW5nOjVweCA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogI2JlYzVjOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyIC5idG4tbWVudS1tdzpmaXJzdC1jaGlsZHsgbWFyZ2luLXJpZ2h0OiAtNXB4O31cbi5tYWluLWJ0bi1kaXZ7IGZsb2F0OiBsZWZ0O21hcmdpbi1yaWdodDoxMHB4OyAgfVxuXG5cbi5uYXZiYXIgLmhlbHAtdGlwLnNpZGViYXItaGVscHRpcCAuYnRuLmJ0bi1tZW51LW13OmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RhZTJlNiAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzFiODViOCAhaW1wb3J0YW50O1xuICAgIH1cblxuXG5cblxuLm5hdmJhci1yaWdodHNpZGUgLmhlbHAtdGlwIGkge1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmhlbHAtY2hlY2t0aXA6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM0NjQ2NTU7XG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm5hbWUtZHJvcGRvd24td3JhcHBlci5idG4tZ3JvdXAge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4ucHJvcGVydGllcy10YWcge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wcm9wZXJ0aWVzLXdpbmRvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzclO1xuICAgIGxlZnQ6IDI2cHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvcGVydGllcy13aW5kb3cgaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjYmVjNWM5O1xufVxuXG4ucHJvcGVydGllcy1jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvcGVydGllcy1jbG9zZSAubWFpbi1zaWRlLFxuLnByb3BlcnRpZXMtY2xvc2UgLnByb3AtYXJyb3cgaTphZnRlciB7XG4gICAgY29udGVudDogXCJhcnJvd19iYWNrd2FyZFwiO1xufVxuLnByb3AtYXJyb3cgaSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTRweDtcbn1cblxuLyogU3dlZXAgVG8gUmlnaHQgKi9cblxuLmh2ci1zd2VlcC10by1yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxuLmh2ci1zd2VlcC10by1yaWdodDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMjA5OGQxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG4uaHZyLXN3ZWVwLXRvLXJpZ2h0OmhvdmVyLFxuLmh2ci1zd2VlcC10by1yaWdodDpmb2N1cyxcbi5odnItc3dlZXAtdG8tcmlnaHQ6YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5odnItc3dlZXAtdG8tcmlnaHQ6aG92ZXI6YmVmb3JlLFxuLmh2ci1zd2VlcC10by1yaWdodDpmb2N1czpiZWZvcmUsXG4uaHZyLXN3ZWVwLXRvLXJpZ2h0OmFjdGl2ZTpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5uYXZiYXIgLmJ0bi5idG4tYmFzaWNbZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kOiAjYmVjNWM5O1xuICAgIGNvbG9yOiAjNjI2OTZkO1xuICAgIG9wYWNpdHk6IC41NTtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkICNiZWM1Yzk7Ki9cbn1cblxuXG4vKiBSZXNwb25zaXZlbmVzcyAqL1xuXG4ubW9iaWxlLW5hdmJhci1icmFuZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vYmlsZS1tZW51LWljb24sXG4ubW9iaWxlLW1lbnVjcm9zcy1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cblxuLyogUHJlbG9hZGVyICovXG5cbi5wcmVsb2FkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiBjaGFuZ2UgaWYgdGhlIG1hc2sgc2hvdWxkIGJlIGEgY29sb3Igb3RoZXIgdGhhbiB3aGl0ZSAqL1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLyogbWFrZXMgc3VyZSBpdCBzdGF5cyBvbiB0b3AgKi9cbn1cblxuXG5cbi5zdGF0dXMge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLyogY2VudGVycyB0aGUgbG9hZGluZyBhbmltYXRpb24gaG9yaXpvbnRhbGx5IG9uIHRoZSBzY3JlZW4gKi9cbiAgICB0b3A6IDUwJTtcbiAgICAvKiBjZW50ZXJzIHRoZSBsb2FkaW5nIGFuaW1hdGlvbiB2ZXJ0aWNhbGx5IG9uIHRoZSBzY3JlZW4gKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvYWRlcnMvbG9nb0FuaW0uZ2lmXCIpO1xuICAgIC8qIHBhdGggdG8geW91ciBsb2FkaW5nIGFuaW1hdGlvbiAqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbjogLTEwMHB4IDAgMCAtMTAwcHg7XG4gICAgLyogaXMgd2lkdGggYW5kIGhlaWdodCBkaXZpZGVkIGJ5IHR3byAqL1xufVxuXG4uY2FudmFzLWZpeCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8qbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4OyovXG4gICAgd2lkdGg6IDgxJTtcbn1cblxuLm5hdmJhci1sZWZ0c2lkZSAuYnRuLWdyb3VwLmhlbHAtdGlwIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5uby1hbmFseXRpY3Mge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uby1hbmFseXRpY3MucG5nJyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogOTB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hbmFseXRpY3MtYm90dG9tLXBvcHVwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmI1ZjY2O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDIzJTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDJweDtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3gtc2hhZG93OiAxM3B4IDEzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xufVxuXG4ubm8tYW5hbHl0aWNzLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XG59XG5cbi5sb2FkaW5nOmFmdGVyIHtcbiAgICBjb250ZW50OiAnIC4nO1xuICAgIGFuaW1hdGlvbjogZG90cyAxcyBzdGVwcyg1LCBlbmQpIGluZmluaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtM3B4O1xufVxuXG4uem9vbS1wYXJlbnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kcmFnLXBhcmVudCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLnpvb20gaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjYmVjNWM5O1xuICAgIHBhZGRpbmc6IDFweCAycHg7XG59XG5cbmEuem9vbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG50ZW1wLWRldiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA0MnB4IGF1dG8gMjBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG50ZW1wLWRldi50ZW1wbGF0ZS1zZXZlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA0MnB4IGF1dG8gMjBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHpvb206MSFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xufVxuXG4udGVtcGxhdGUtc2VjdGlvbiAucXVlLWZpeGVkIHtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuQGtleWZyYW1lcyBkb3RzIHtcbiAgICAwJSxcbiAgICAyMCUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC4yNWVtIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAuNWVtIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OiAuMjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgLjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC4yNWVtIDAgMCB3aGl0ZSwgLjVlbSAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgICB0ZXh0LXNoYWRvdzogLjI1ZW0gMCAwIHdoaXRlLCAuNWVtIDAgMCB3aGl0ZTtcbiAgICB9XG59XG5cbi5wcm9jZXNzLWJhciB7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTBweDtcbiAgICAvKnotaW5kZXg6IDE7Ki9cbiAgICB6LWluZGV4OiA5OTsgLypuZXcgYWRkICovXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIzNXB4KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcbn1cblxuLnByb2Nlc3MtYmFyIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGhlaWdodDogMzNweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvY2Vzcy1iYXIgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9jZXNzLWJhciBsaTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGFlMmU2O1xufVxuXG4ucHJvY2Vzcy1iYXIgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzYyNjc2YjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOjAgMTBweDtcbn1cblxuLnByb2Nlc3MtYmFyIGxpIGEuYWN0aXZlIHtcbiAgICBjb2xvcjogIzE0ODNiNztcbn1cblxuLnByb2Nlc3MtYmFyIGxpIGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIC8qY29sb3I6ICNiZWM1Yzk7Ki9cbiAgICBjb2xvcjogIzYyNjc2Yjtcbn1cblxuLnByb2Nlc3MtYmFyIGxpIGEuYWN0aXZlIGkge1xuICAgIGNvbG9yOiAjMTQ4M2I3O1xufVxuXG4vKiAucHJvY2Vzcy1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59ICovXG5cbi5wcm9wZXJ0aWVzLWNsb3NlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9wZXJ0aWVzLWNsb3NlIC5tYWluLXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogbG9hZGVyIGFuaW1hdGlvbiBzdGFydCAqL1xuXG4uZWxlbSB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBjb2xvcjogI2JlYzVjOTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5lbGVtIGkubWF0ZXJpYWwtaWNvbnN7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uZWxlbS1yb3RhdGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgY29sb3I6ICNmYjVmNjY7XG59XG4uZWxlbS5lbGVtLXJvdGF0ZSBpLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjojYmVjNWM5O1xufVxuLm5hdmJhciAuYnRuLmJ0bi1iYXNpYy5idG4tbWVudS5idG4tbWVudS5ncmVlbi1iZyB7XG4gICAgLypiYWNrZ3JvdW5kOiByZ2IoMjYsIDE4OCwgMTU2KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjYsIDE4OCwgMTU2KTsqL1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmJ0bi1tZW51LmdyZWVuLWJnIC5lbGVtIGl7XG4gICAgY29sb3I6ICMzY2MwMzUgIWltcG9ydGFudDtcbn1cbi5idG4tbWVudSAuZWxlbS5lbGVtLXJvdGF0ZSBpIHtcbiAgICBjb2xvcjogI2ZiNWY2Njtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuXG4vKiBsb2FkZXIgYW5pbWF0aW9uIGVuZCAqL1xuLyogSGVhZGVyIHN0YXJ0ICovXG5cblxuLmhlbHAtZHJvcGRvd24td3JhcHBlci5idG4tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAyMCVcbn1cblxuLmhlbHAtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgcGFkZGluZzogMTVweCAxMnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGNvbG9yOiAjNjI2OTZkO1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbi5oZWxwLWRyb3Bkb3duLXdyYXBwZXIgYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5kcm9wZG93bi10b2dnbGUgaS5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjYmVjNWM5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDNweFxufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxuLmhlbHAtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogMCAwIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAhaW1wb3J0YW50XG59XG5cbi5oZWxwLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMzNweDtcbiAgICByaWdodDogLTEzcHg7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2ZiNWY2NjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHghaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4yNCk7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEycHg7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDEycHggc29saWQgI2ZiNWY2NjtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmYjVmNjY7XG4gICAgY29udGVudDogJydcbn1cblxuLmhlbHAtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudT5saT5hOmZvY3VzLFxuLmhlbHAtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudT5saT5hOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAwIDBcbn1cblxuLm5hdmJhciAuaGVscC1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51IGxpPmE6aG92ZXIsXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5oZWxwLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnUgbGk+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y5ODg4ZDtcbiAgICBjb2xvcjogI2ZmZlxufVxuXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IC5oZWxwLWRyb3Bkb3duLXdyYXBwZXIgbGk+YTpmb2N1cyxcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmhlbHAtZHJvcGRvd24td3JhcHBlciAuZHJvcGRvd24tbWVudSBsaT5hOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMgaS5tYXRlcmlhbC1pY29ucyxcbi5oZWxwLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnU+bGk+YTpob3ZlciBpLm1hdGVyaWFsLWljb25zIHtcbiAgICBjb2xvcjogI2ZmZlxufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51PmxpPmEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDNweCAxM3B4IWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51PmxpPmEgc3Bhbi5oZWxwLWxpc3QtaWNvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG59XG5cbi5oZWxwLWRyb3Bkb3duLXdyYXBwZXIgLmRyb3Bkb3duLW1lbnU+bGk+YSBpLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMFxufVxuXG4uaGVscC1kcm9wZG93bi13cmFwcGVyIC5kcm9wZG93bi1tZW51PmxpPmEgc3Bhbi5oZWxwLWxpc3QtdGl0bGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMjJweFxufVxuXG4uaWNvbi1oZWxwIHtcbiAgICB6LWluZGV4OiA5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmljb24taGVscCBpLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNiZWM1Yzk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlXG59XG5cbi5pY29uLWhlbHAgaS5tYXRlcmlhbC1pY29uczpmb2N1cyAuaWNvbi1oZWxwIGkubWF0ZXJpYWwtaWNvbnM6YWN0aXZlLFxuLmljb24taGVscCBpLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZiNWY2NlxufVxuXG4uYnVpbGRlci1oZWxwLWljb24ge1xuICAgIHRvcDogOHB4XG59XG5cbi5zdXBwb3J0X291dGVyIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOjVweDtcbn1cblxuaS5zdXBwb3J0X2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzhlOTg5ZjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4ud2ViLXBhZ2Utc3ViLXNlY3Rpb24tY29udGVudCBpLnN1cHBvcnRfaWNvbiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjOGU5ODlmO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbn1cblxuXG4uc3VwcG9ydF9vdXRlcjpob3ZlciBpLnN1cHBvcnRfaWNvbiB7XG4gICAgY29sb3I6ICNmYjVmNjY7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjAzZGVnKTtcbn1cblxuLmhlbHAtb3B0aW9ucyAuZHJvcGRvd24tbWVudSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICM2MjY5NmQ7XG4gICAgdG9wOiAzOHB4O1xuICAgIGxlZnQ6IC0xMTNweDtcbiAgICBtaW4td2lkdGg6IDE0OHB4O1xuXG59XG5cbi5oZWxwLW9wdGlvbnMgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTJweDtcbiAgICBsZWZ0OiAxMTNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjNjI2OTZkO1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYyNjk2ZDtcbiAgICBjb250ZW50OiAnJztcbn1cblxuLyogLmhlbHAtb3B0aW9ucyAuZHJvcGRvd24tbWVudTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2ZiNWY2NjtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB0b3A6IC0xM3B4O1xufSAqL1xuXG4uaGVscC1vcHRpb25zIC5kcm9wZG93bi1tZW51PmxpPmEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxM3B4IWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTFweCFpbXBvcnRhbnQ7XG59XG5cbi5oZWxwLW9wdGlvbnMgLmRyb3Bkb3duLW1lbnU+bGk+YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZjZmNmYyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVscC1vcHRpb25zIC5kcm9wZG93bi1tZW51ID5saT5hLmh2ci1zd2VlcC10by1yaWdodDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59XG5cbi5oZWxwLW9wdGlvbnMgLmRyb3Bkb3duLW1lbnU+bGk+YSBpbWd7IGZsb2F0OiBsZWZ0OyBoZWlnaHQ6IDE2cHg7IG1hcmdpbi1yaWdodDogOXB4OyBtYXJnaW4tbGVmdDogLTJweDsgbWFyZ2luLXRvcDogMnB4O31cbi5oZWxwLW9wdGlvbnMgLmRyb3Bkb3duLW1lbnU+bGk+YSBpeyBmb250LXNpemU6IDEzcHg7fVxuXG4uaGVscC1vcHRpb25zIC5kcm9wZG93bi1pY29ucyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAwIDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVscC1vcHRpb25zIC5kcm9wZG93bi10ZXh0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5oZWxwLW9wdGlvbnMgLmRyb3Bkb3duLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzhlOTg5ZjtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5pbWF0ZWQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uc2xvdyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLnNsb3dlciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5zbG93ZXN0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmJvdW5jZUluIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XG59XG5cblxuLyoqKioqKioqKioqXG4qIGJvdW5jZUluICpcbioqKioqKioqKioqKi9cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4vKiBIZWFkZXIgZW5kICovXG4uc2Nyb2xsYmFyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5oZWFkZXItYWRkZWQgLnByb2Nlc3MtYmFyLC5oZWFkZXItYWRkZWQgLmVkaXRvci1zaWRlYmFyLnNpZGViYXIsLmhlYWRlci1hZGRlZCAuc2lkZWJhci1vZmZjYW52YXN7XG4gICAgdG9wOjkzcHg7XG59XG4uaGVhZGVyLWFkZGVkIC50ZW1wbGF0ZS1zZWN0aW9uLCAuaGVhZGVyLWFkZGVkIC5lZGl0b3ItdGVtcGxhdGUtdGFic3tcbiAgICB0b3A6IDEzMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi5oZWFkZXItYWRkZWQgLm5hdmJhci1icmFuZCBzdmd7XG4gICAgdG9wOiAtMzBweCAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1hZGRlZCAucHJvcC1hcnJvd3tcbiAgICBib3R0b206IDMzcHg7XG59XG4uaGVhZGVyLWFkZGVkIC50ZW1wbGF0ZS1zZWN0aW9ue1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTMwcHgpIDtcbn1cbi5oZWFkZXItYWRkZWQgLm5vLWFuYWx5dGljcy1vdmVybGF5e1xuICAgIHRvcDogNzRweDtcbn1cbi5oZWFkZXItYWRkZWQgLnNpZGViYXItYm90dG9tc2VsZWN0b3Ige1xuICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xuICAgIGlucHV0LmVkLXByb2plY3RuYW1le3dpZHRoOjYwJTt9XG4gICAgLnRvcGJhci1sZWZ0e3dpZHRoOjMwJSAhaW1wb3J0YW50O31cbiAgICAuaW5wdXQtbmV4dC1kaXZ7d2lkdGg6MzMlICFpbXBvcnRhbnQ7fVxuICAgIC5uYXZiYXItcmlnaHRzaWRlLW91dGVye3dpZHRoOjM2JSAhaW1wb3J0YW50O31cbiAgICAuaW5wdXQtbmV4dC1kaXYgdWwgbGkgYSBpIHtkaXNwbGF5OiBub25lO31cbiAgICBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0Lm5hdmJhci1maXhlZC10b3AuZWNvbS1Ub3BCYXJQYW5lbCAuYnVpbGQtcHJvY2Vzcy5pbnB1dC1uZXh0LWRpdiB1bCBsaSBhIGkgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxuICAgIG5hdi5uYXZiYXIubmF2YmFyLWRlZmF1bHQubmF2YmFyLWZpeGVkLXRvcC5lY29tLVRvcEJhclBhbmVsIC50b3BiYXItbGVmdCB7IHdpZHRoOiBjYWxjKDEwMCUgLSA3NCUpICFpbXBvcnRhbnQ7IH1cbiAgICBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0Lm5hdmJhci1maXhlZC10b3AuZWNvbS1Ub3BCYXJQYW5lbCAudG9wYmFyLWxlZnQgaW5wdXQuZWQtcHJvamVjdG5hbWUgeyB3aWR0aDogNzIlICFpbXBvcnRhbnQ7IHBhZGRpbmctcmlnaHQ6IDEwcHg7fVxuICAgIG5hdi5uYXZiYXIubmF2YmFyLWRlZmF1bHQubmF2YmFyLWZpeGVkLXRvcC5lY29tLVRvcEJhclBhbmVsIC5idWlsZC1wcm9jZXNzLmlucHV0LW5leHQtZGl2e3dpZHRoOiBjYWxjKDEwMCUgLSA1NSUpICFpbXBvcnRhbnQ7fVxuICAgIG5hdi5uYXZiYXIubmF2YmFyLWRlZmF1bHQubmF2YmFyLWZpeGVkLXRvcC5lY29tLVRvcEJhclBhbmVsIC5uYXZiYXItcmlnaHRzaWRlLW91dGVyeyB3aWR0aDogY2FsYygxMDAlIC0gNzElKSAhaW1wb3J0YW50OyB9XG5cbiAgICAubmF2YmFyLWRlZmF1bHQuZWNvbS1Ub3BCYXJQYW5lbC5pc1Byb2R1Y3RzIC5pbnB1dC1uZXh0LWRpdiB7IHdpZHRoOiA0NSUgIWltcG9ydGFudDt9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcbiAgICAubmF2YmFyLXJpZ2h0c2lkZS1vdXRlcnt3aWR0aDo0MiUgIWltcG9ydGFudDt9XG4gICAgIGlucHV0LmVkLXByb2plY3RuYW1le3dpZHRoOjcwJTt9XG4gICAgLmlucHV0LW5leHQtZGl2e3dpZHRoOjI4JSAhaW1wb3J0YW50O31cbiAgICAubmF2YmFyLWRlZmF1bHQuZWNvbS1Ub3BCYXJQYW5lbCAudG9wYmFyLWxlZnR7IHdpZHRoOiAyOCUgIWltcG9ydGFudDt9XG4gICAgLm5hdmJhci1kZWZhdWx0LmVjb20tVG9wQmFyUGFuZWwgLmlucHV0LW5leHQtZGl2eyB3aWR0aDogMzQlICFpbXBvcnRhbnQ7fVxuICAgIC5uYXZiYXItZGVmYXVsdC5lY29tLVRvcEJhclBhbmVsIC5uYXZiYXItcmlnaHRzaWRlLW91dGVyeyB3aWR0aDogMzglICFpbXBvcnRhbnQ7fVxuICAgIC5uYXZiYXItZGVmYXVsdC5lY29tLVRvcEJhclBhbmVsLmlzUHJvZHVjdHMgLnRvcGJhci1sZWZ0IHsgd2lkdGg6IDMyJSAhaW1wb3J0YW50OyB9XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEzMDBweCkge1xuICAgIC5uYXZiYXIgLnNhdmVfaWNvbiAuYnRuLmJ0bi1iYXNpYy5idG4tbWVudXtwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O31cbiAgICAubGFyZ2UtYnRuc3twYWRkaW5nOjAgNXB4ICFpbXBvcnRhbnQ7fVxuICAgIC5uYXZiYXIgLmxhcmdlLWJ0bnMgYS5idG4uYnRuLWJhc2ljLmNweV9saW5rIHttYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O31cbiAgICAubmF2YmFyIC5idG4uYnRuLWJhc2lje3BhZGRpbmc6IDVweCA1cHg7Zm9udC1zaXplOiAxMHB4O31cbiAgICAubmF2YmFyLWxlZnRzaWRle3BhZGRpbmctbGVmdDogNXB4O3BhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDt9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgLm5vLWFuYWx5dGljcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LXdpZHRoOjE1NTBweCkge1xuICAgIC5uYXZiYXItcmlnaHRzaWRlLW91dGVye3dpZHRoOjQwJTt9XG4gICAgLnRvcGJhci1sZWZ0e3dpZHRoOjM1JTt9XG59XG4vKkBtZWRpYSAobWF4LXdpZHRoOiAxMjA4cHgpIHtcbiAgICBpbnB1dC5lZC1wcm9qZWN0bmFtZSB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxufSovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5lZGl0b3Itc2lkZWJhci5zaWRlYmFyIHtcbiAgICAgICAgei1pbmRleDogOTcwO1xuICAgICAgICB0b3A6IDMzcHggIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm5hbWUtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2JpbGUtbWVudWNyb3NzLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2JpbGUtbWVudS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZmI1ZjY2O1xuICAgICAgICBwYWRkaW5nOiAwIDE5cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubW9iaWxlLW5hdmJhci1icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIH1cbiAgICAubW9iaWxlLW5hdmJhci1icmFuZCBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgfVxuICAgIC5uYXZiYXItZml4ZWQtdG9wIC5uYXYtcGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLmVkaXRvci1uYXZoZWFkZXIge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgLm1vYmlsZS10b3AtbWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWUyZTY7XG4gICAgfVxuICAgIGlucHV0LmVkLXByb2plY3RuYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICAgIHNwYW4ubmFtZS10aXRsZSxcbiAgICAubmF2YmFyLWxlZnRzaWRlIC5idG4tZ3JvdXAuaGVscC10aXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2YmFyLXJpZ2h0c2lkZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICB9XG4gICAgLm5hbWUtZHJvcGRvd24td3JhcHBlciBidXR0b24uYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgICAubmFtZS1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gICAgLm5hdmJhciAuYnRuLmJ0bi1iYXNpYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgfVxuICAgIC5uYXZiYXIgLmJ0bi5idG4tYmFzaWM6bm90KC5idG4tbWVudSk6aG92ZXIsXG4gICAgLm5hdmJhciAuYnRuLmJ0bi1iYXNpYzpub3QoLmJ0bi1tZW51KTpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmI1ZjY2O1xuICAgIH1cbiAgICAubmFtZS1kZC1taW5oIHtcbiAgICAgICAgbWluLWhlaWdodDogMjhweDtcbiAgICB9XG4gICAgLm1vYmlsZS1tZW51LWljb24ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLmVkaXRvci10ZW1wbGF0ZS10YWJzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyLW1vZGFsLWJhY2tkcm9wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDEwMzA7XG4gICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45OSk7XG4gICAgfVxuICAgIC5wcm9wZXJ0aWVzLW1vZGFsLWJhY2tkcm9wIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDEwMTA7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45OSk7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbiAgICAuc2lkZWJhci1tb2RhbC1iYWNrZHJvcC5mYWRlIHtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc2lkZWJhci1tb2RhbC1iYWNrZHJvcC5pbiB7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbiAgICAubW9iaWxlLW1lbnVjcm9zcy1pY29uIGkubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgbGVmdDogMjQwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjYmVjNWM5O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5zaWRlYmFyLW9mZmNhbnZhcyB7XG4gICAgICAgIHRvcDogMTAycHg7XG4gICAgICAgIHotaW5kZXg6IDEwMjA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5zaWRlYmFyLW9mZmNhbnZhcyAubW9iaWxlLW1lbnVjcm9zcy1pY29uIGkubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgfVxuICAgIC5uYW1lLWRyb3Bkb3duLXdyYXBwZXI6aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuem9vbS1wYXJlbnQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9iaWxlLXByb3AtY3Jvc3MtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMTBweDtcbiAgICAgICAgcmlnaHQ6IDMzNXB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBjb2xvcjogI2JlYzVjOTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB6LWluZGV4OiAxMDMwO1xuICAgIH1cbiAgICAucHJvY2Vzcy1iYXIge1xuICAgICAgICB0b3A6IDEwMnB4O1xuICAgIH1cbiAgICAudGVtcGxhdGUtc2VjdGlvbntcbiAgICAgICAgdG9wOiAxMzdweDtcbiAgICB9XG59XG5cbi5lZGl0b3Itc2lkZWJhci5zaWRlYmFyLmJ1aWxkLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY5O1xufVxuXG4uZnItc3Itb25seSB7XG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mci1lbGVtZW50IC52YXItdGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICBtYXJnaW46IDAgMnB4IDJweCAycHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4udGFnX2RlbGV0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZyLWVsZW1lbnQgLnRhZ19kZWxldGUge1xuICAgIGRpc3BsYXk6IGlubGluZSFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmZzcC1waWNrZXJfX2Zvb3RlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5hZGQtZGVsLW92ZXJsYXk6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTgpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLmZpbGVzdGFja2NvbnRlbnQuY29tL2hLYjMwYnpVUTc2a25tY2ZZN1MwKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG59XG5cbi5idWlsZGVyLXBhcmVudDEgLnRlbXBsYXRlLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVpbGRlci9iYWNrZ3JvdW5kLnBuZycpO1xuICAgIHRvcDogODdweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExNXB4KTtcbn1cblxuLmJ1aWxkZXItcGFyZW50LWRlbW8gLnRlbXBsYXRlLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVpbGRlci9iYWNrZ3JvdW5kLnBuZycpO1xuICAgIHRvcDogOTdweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbn1cblxuXG5cbi5wcmV2aWV3LWJ0bi1vdXRlcntcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7Ki9cbiAgICAvKnRvcDogMDsgICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLypsZWZ0OiA0Mi41JTsgKi9cbiAgICAvKnRvcDogOTdweDsqL1xuICAgIHRvcDphdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogNDBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZTJlNjtcbn1cbi5wcmV2aWV3LWJ0bi1vdXRlciAuaGVscC10aXAgaSB7Y29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6IDE3cHg7IGN1cnNvcjogcG9pbnRlcjsgcGFkZGluZzoxMHB4O31cbi5wcmV2aWV3LWJ0bi1vdXRlciAuYm9yZGVyLWJhcnsgZmxvYXQ6IGxlZnQ7IGJhY2tncm91bmQ6ICNlNmVjZWY7IHdpZHRoOjFweDsgaGVpZ2h0OiAxN3B4OyBtYXJnaW4tdG9wOiAxMHB4O31cbi5oZWxwLXRpcDpob3ZlciA+IC5oZWxwLWNoZWNrdGlwLXNtYWxsIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLnByZXZpZXctYnRuLW91dGVyLWhlbGxvYmFyIHtcbiAgLyp0b3A6MTMwcHg7Ki9cbiAgICB0b3A6YXV0bztcbn1cblxuLnRlbXAtZGV2LWhlbGxvYmFyIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmhlbHAtY2hlY2t0aXAtc21hbGwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjY5NmQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNHB4IDJweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA4NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggI2I0YjRiNDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogLTIzcHg7XG59XG5cbi5wcmV2aWV3LWJ0bi1vdXRlciAuaGVscC1jaGVja3RpcC1zbWFsbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIxcHg7XG4gICAgbGVmdDogNTYlO1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICAvKmJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjNjI2OTZkOyovXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM2MjY5NmQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvKmJvcmRlci10b3A6IG5vbmU7Ki9cbn1cbi5wcmV2aWV3LWJ0bi1vdXRlciAuYnRuLW1lbnUtbXc6aG92ZXIgaXsgY29sb3I6ICMxYjg1Yjg7fVxuLnByZXZpZXctYnRuLW91dGVyIC5idG4tbWVudS1tdy5hY3RpdmUgaXtjb2xvcjogIzFiODViODt9XG4gQG1lZGlhIChtaW4td2lkdGg6MTYwMHB4KSBhbmQgKG1heC13aWR0aDoxOTIwcHgpe1xuICAgIC5wcm9jZXNzLWJhciB1bCB7IG1hcmdpbi1sZWZ0OiAwcHg7fVxufVxuXG4uc2F2ZV9pY29uIGkubWF0ZXJpYWwtaWNvbnMge1xuICAgIGNvbG9yOiAjZmI1ZjY2ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cbi5zYXZlX2ljb24gPiBzcGFuLmVsZW0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgY29sb3I6ICM4ZTk4OWY7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtcbn1cbi5zYXZlX2ljb24gPiBzcGFuLmVsZW0gc3BhbntcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgIC8qIHRlbXAtZGV2IHsgbWFyZ2luOiA0NnB4IGF1dG8gMjBweCBhdXRvICFpbXBvcnRhbnQ7fSAqL1xuICAgIHRlbXAtZGV2LnRlbXBsYXRlLXNldmVue3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IHRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDsgbWFyZ2luOiA0NnB4IGF1dG8gMjBweCBhdXRvICFpbXBvcnRhbnQ7fVxuICAgIC5xdW90ZS1iYW5uZXIgKyB0ZW1wLWRldiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnF1b3RlLWJhbm5lciArIHRlbXAtZGV2LnRlbXBsYXRlLXNldmVue1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnNhdmluZ3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogIzliOWVhMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubmF2YmFyIC5zYXZlX2ljb24gLmJ0bi5idG4tYmFzaWMuYnRuLW1lbnV7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuLm5hdmJhciAuc2F2ZV9pY29uIC5idG4uYnRuLWJhc2ljLmhlbHAtdGlwOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLyogdGFrZW92ZXIgcG9wdXAgY3NzICovXG4udGFrZW92ZXItcG9wdXAtMSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG4udGFrZW92ZXItaW5uZXItMSB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50YWtlb3Zlci1sb2dve1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4udGFrZW92ZXItaW5uZWVyLWNlbGx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRha2VvdmVyLWlubmVyLTEgaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4udGFrZW92ZXItaW5uZXItMSBwIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4udGFrZW92ZXItaW5uZXItMSBidXR0b24uYnRuLWluZm8ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmI1ZjY2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnRha2VvdmVyLWlubmVyLTEgYnV0dG9uLmJ0bi1pbmZvOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNmZGI2Yjk7XG4gICAgY29sb3I6ICNmYjVmNjY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmRiNmI5O1xufVxuXG4vKiBTdGFydDogZG93bmdyYWRlIE1vZGFsICovXG4jZG93bmdyYWRlIC5tb2RhbC1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1heC13aWR0aDogNjA5cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNkb3duZ3JhZGUgLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDM1cHggMjVweCAzMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbn1cblxuI2Rvd25ncmFkZS5tb2RhbCBidXR0b24uY2xvc2UuYnRuLWNsb3NlIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgei1pbmRleDogOTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcyAhaW1wb3J0YW50O1xufVxuXG5cbiNkb3duZ3JhZGUubW9kYWwgaS5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNkN2RiZGQ7XG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cbiNkb3duZ3JhZGUubW9kYWwgaS5tYXRlcmlhbC1pY29uczpob3ZlciB7XG4gIGNvbG9yOiAjNjI2OTZkICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuI2Rvd25ncmFkZSAubW9kYWwtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZiNWY2NjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O1xuICBmbG9hdDogbm9uZTsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6NTBweDsgZGlzcGxheTogaW5saW5lO1xufVxuI2Rvd25ncmFkZSAubW9kYWwtdGl0bGVcbiNkb3duZ3JhZGUubW9kYWwgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuI2Rvd25ncmFkZS5tb2RhbCAubW9kYWwtYm9keS1pbm5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTsgZGlzcGxheTogdGFibGU7IGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNkb3duZ3JhZGUubW9kYWwubW9udGhseVBsYW4gLm1vZGFsLWJvZHktaW5uZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuI2Rvd25ncmFkZS5tb2RhbC5tb250aGx5UGxhbiAubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbiNkb3duZ3JhZGUgLmJ0bi1yZWQtb3V0bGluZSB7XG4gICAgY29sb3I6ICNmYjU0NWI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmYjVmNjY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA3cHggMThweDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4jZG93bmdyYWRlLm1vZGFsIC5idG4tcmVkLW91dGxpbmUuaHZyLXN3ZWVwLXRvLXJpZ2h0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZiNWI4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4jZG93bmdyYWRlLm1vZGFsIC5idG4tcmVkLW91dGxpbmUuaHZyLXN3ZWVwLXRvLXJpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbiNkb3duZ3JhZGUubW9kYWwgLmJ0bi1yZWQtb3V0bGluZS5odnItc3dlZXAtdG8tcmlnaHQ6Zm9jdXMsXG4jZG93bmdyYWRlLm1vZGFsIC5idG4tcmVkLW91dGxpbmUuaHZyLXN3ZWVwLXRvLXJpZ2h0OmFjdGl2ZXtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmYjViOCBub25lIHJlcGVhdCBzY3JvbGwgMCAwICFpbXBvcnRhbnQ7XG59XG5cbiNkb3duZ3JhZGUgLm1vZGFsLWZvb3RlciB7XG4gIC8qIHBhZGRpbmc6IDBweCAzMHB4IDI1cHggIWltcG9ydGFudDsgKi9cbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGNvbG9yOiAjOGU5ODlmO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI2Rvd25ncmFkZSAubW9kYWwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZDNkMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4jZG93bmdyYWRlICAubW9kYWwtcmlnaHQtaW5uZXIge1xuICBwYWRkaW5nOiAxMHB4IDAgMDtcbn1cblxuI2Rvd25ncmFkZS5tb2RhbCAubW9kYWwtcmlnaHQgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRzZW1pYm9sZDtcbn1cblxuI2Rvd25ncmFkZS5tb2RhbCAubW9kYWwtbGVmdCB7XG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogOTIlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogI2Rvd25ncmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDY3NXB4O1xufSAqL1xuXG4jZG93bmdyYWRlIC5tb2RhbC1mb290ZXIgLmJ0bi1uZXctb3V0ZXIge1xucGFkZGluZzogMjhweCAhaW1wb3J0YW50O1xuXG59XG4uaW91dGVyLWQtZ3JhZGV7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDowOyB0b3A6LTEwcHg7IGhlaWdodDogNDRweDsgd2lkdGg6IDQ0cHg7IGJhY2tncm91bmQ6ICNmYjVmNjY7ICBwYWRkaW5nOiA2cHggMTNweDsgIGJvcmRlci1yYWRpdXM6IDI1cHg7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDsgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O31cbi8qIC5pb3V0ZXItZC1ncmFkZSBpbWd7IHdpZHRoOiAxMDAlO30gKi9cblxuI2Rvd25ncmFkZSAubW9kYWwtZm9vdGVyIHtcblxuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgY29sb3I6ICM4ZTk4OWY7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgLyogYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2ZmZmZmZiA2NC41JSwgI2YyZjJmMiA2NC41JSwgI2YyZjJmMiA2NC41JSwgI2YyZjJmMiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwjZmZmZmZmIDY0LjUlLCNmMmYyZjIgNjQuNSUsI2YyZjJmMiA2NC41JSwjZjJmMmYyIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsI2ZmZmZmZiA2NC41JSwjZjJmMmYyIDY0LjUlLCNmMmYyZjIgNjQuNSUsI2YyZjJmMiAxMDAlKTsgKi9cbn1cbiNkb3duZ3JhZGUgLmJ0bi1yZWQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjVmNjY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmI1ZjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2Rvd25ncmFkZSBzcGFuLnRleHQtb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTI0cHg7XG4gICAgdG9wOiA0MyU7XG4gICAgY29sb3I6IHJnYmEoMTAyLDEwMiwxMDIsMC41KTtcbn1cblxuXG4jZG93bmdyYWRlLm1vZGFsIC5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O1xuXG59XG4jZG93bmdyYWRlLm1vZGFsIC5jdXN0LXRleHQtb3V0ZXJ7IGZsb2F0OiBsZWZ0OyB3aWR0aDoxMDAlOyBtYXJnaW46IDEwcHggMCAwOyBtYXgtaGVpZ2h0OiAxNDBweDsgb3ZlcmZsb3cteTogYXV0bzsgfVxuI2Rvd25ncmFkZS5tb2RhbCAuY3VzdC10ZXh0LW91dGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuI2Rvd25ncmFkZS5tb2RhbCAuY3VzdC10ZXh0LW91dGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4jZG93bmdyYWRlLm1vZGFsIC5jdXN0LXRleHQtb3V0ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbiNkb3duZ3JhZGUubW9kYWwgLmN1c3QtdGV4dC1vdXRlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4jZG93bmdyYWRlLm1vZGFsIC5jdXN0LXRleHR7Y29sb3I6ICM0NzkzYzU7IGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7IGZsb2F0OiBsZWZ0OyBmb250LXNpemU6MTRweDsgcGFkZGluZy1sZWZ0OiAyMHB4OyAgbWFyZ2luLXRvcDogNXB4OyAgcG9zaXRpb246IHJlbGF0aXZlOyAgbWFyZ2luLWJvdHRvbTogMHB4OyB3aWR0aDoxMDAlO31cbiNkb3duZ3JhZGUubW9kYWwgLmN1c3QtdGV4dCBpe2NvbG9yOiAjNDc5M2M1OyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6MDsgIGZvbnQtc2l6ZTogMTRweDsgIHRvcDogM3B4OyB9XG4jZG93bmdyYWRlLm1vZGFsIC5jdXN0LXRleHQgaTpob3Zlcntjb2xvcjogIzQ3OTNjNTsgfVxuI2Rvd25ncmFkZS5tb2RhbCAuY3VzdC10ZXh0IHNwYW57IGNvbG9yOnJnYmEoNzYsNzYsNzYsMC41KTsgZm9udC1zaXplOiAxMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwyMzUsMjM1LDAuNSk7OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDsgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4OyAgYm9yZGVyLXJhZGl1czogM3B4O31cbiNkb3duZ3JhZGUubW9kYWwgLmJ0bi1wb3NpdGlvbnsgZmxvYXQ6IGxlZnQ7IHdpZHRoOjMyLjUlO31cbiNkb3duZ3JhZGUubW9kYWwgLmJvZHktaGVhZHsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzY2NjsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IG1hcmdpbi10b3A6IDBweDt9XG4jZG93bmdyYWRlLm1vZGFsIC5ncmF5LWZvb3RlcntiYWNrZ3JvdW5kOiAjZjZmNmY2OyBmbG9hdDogbGVmdDsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDMwcHg7IG1hcmdpbi10b3A6MjBweDsgfVxuI2Rvd25ncmFkZS5tb2RhbCAuZ3JheS1mb290ZXIgcHsgZmxvYXQ6IGxlZnQ7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6IDEzcHg7IGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7IGNvbG9yOiM4ODg4ODg7IG1hcmdpbi1ib3R0b206IDhweDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O31cbiNkb3duZ3JhZGUubW9kYWwgLmJ0bi1tYWluLW91dGVyeyBmbG9hdDogbGVmdDsgd2lkdGg6MTAwJTsgcGFkZGluZzogMjBweCAwIDVweDt9XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICNkb3duZ3JhZGUgLm1vZGFsLWZvb3RlciAuYnRuLXJlZHtcbiAgICAgICAgLyptYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDsqL1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyBtYXJnaW4tdG9wOiAzM3B4O1xuICAgICAgfVxuICAgICAgI2Rvd25ncmFkZS5tb250aGx5UGxhbiAubW9kYWwtZm9vdGVyIC5idG4tcmVke1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB9XG4gICAgICAjZG93bmdyYWRlIC5tb2RhbC1mb290ZXIgc3Bhbi50ZXh0LW9ye1xuICAgICAgICAvKnRvcDogNTBweDtcbiAgICAgICAgbGVmdDogLTEwNXB4OyovXG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgI2Rvd25ncmFkZS5tb2RhbCAubW9kYWwtZm9vdGVyIC5idG4td2hpdGV7XG4gICAgICAgIC8qbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50OyovXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubW9udGhseVBsYW4gLm1vZGFsLWZvb3RlciAuYnRuLXJlZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5tb250aGx5UGxhbiAuY29sLW1kLTMuc3Vicy1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgLm1vbnRobHlQbGFuIC5jb2wtbWQtMi5zdWJzLWxhYmVsIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgICAjZG93bmdyYWRlLm1vZGFsLm1vbnRobHlQbGFuIC5tb2RhbC1ib2R5IHtcbiAgICAgICAgLyogaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50OyAqL1xuICAgICAgfVxuICAgICAgI2Rvd25ncmFkZS5tb2RhbCAuY291cG9uLWFwcGxpZWQgLmJ0bi1yZWQtb3V0bGluZXtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgI2Rvd25ncmFkZSAubW9kYWwtZm9vdGVye1xuICAgICAgICBwYWRkaW5nOiAwIDM1cHggMzBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmNvdXBvbi1hcHBsaWVkIHNwYW4udGl0bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIFxuICAgICAgI2Rvd25ncmFkZS5tb2RhbCAuYnRuLXBvc2l0aW9uIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICNkb3duZ3JhZGUgLmJ0bi1yZWQtb3V0bGluZSB7ZmxvYXQ6IG5vbmU7ICAgIG1hcmdpbi1ib3R0b206IDIwcHg7fVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0NTZweCkgYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgI2Rvd25ncmFkZSAubW9kYWwtZm9vdGVye1xuICAgICAgICBwYWRkaW5nOiAwcHggNTBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9ICAgIFxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLm1vZGFsI2Rvd25ncmFkZS5tb250aGx5UGxhbiAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICNkb3duZ3JhZGUgLm1vZGFsLWRpYWxvZ3tcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQgIWltcG9ydGFudDsgKi9cbiAgICAgIH1cbiAgICAgICNkb3duZ3JhZGUubW9kYWwgLm1vZGFsLWxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAjZG93bmdyYWRlIC5tb2RhbC1yaWdodCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgI2Rvd25ncmFkZS5tb2RhbCAuZ3JheS1mb290ZXJ7IHBhZGRpbmc6MDsgfVxuICAgICAgI2Rvd25ncmFkZSAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubW9udGhseVBsYW4gLm1vZGFsLWZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICNkb3duZ3JhZGUubW9kYWwgLm1vZGFsLWJvZHkge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMTBweDtcbiAgICAgIH1cbiAgICAgICNkb3duZ3JhZGUubW9kYWwgLm1vZGFsLWJvZHktaW5uZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgI2Rvd25ncmFkZSAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICAgICNkb3duZ3JhZGUgLm1vZGFsLWNvbnRlbnQsICNjdXJyZW50UGxhbkRldGFpbCAubW9kYWwtY29udGVudHtiYWNrZ3JvdW5kOiAjZmZmO31cbiAgICAgICNkb3duZ3JhZGUubW9kYWwgLmJ0bi1wb3NpdGlvbiB7ZmxvYXQ6IGxlZnQ7IHdpZHRoOiAzNSU7fVxuICAgICAgLyogI2Rvd25ncmFkZSAuYnRuLXJlZC1vdXRsaW5leyBtYXJnaW4tcmlnaHQ6IC0zNXB4O30gKi9cbiAgICAgICNkb3duZ3JhZGUgLm1vZGFsLXJpZ2h0LWlubmVyeyBwYWRkaW5nLXRvcDogMjBweDt9XG4gICAgICAudGVzdGltb25pYWwtc2VjdGlvbiAuaW1nLW91dGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAudGVzdGltb25pYWwtc2VjdGlvbiBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3RpbW9uaWFsLXNlY3Rpb24gLnRlc3RpbW9uaWFsLWNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudGVzdGltb25pYWwtY29udGVudCAuYnRuLWJsdWUtb3V0bGluZSB7ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgbWFyZ2luLXRvcDogNXB4O31cbiAgICAgICAgI2Rvd25ncmFkZSAuYnRuLXJlZC1vdXRsaW5lIHtmbG9hdDogbm9uZSAhaW1wb3J0YW50O31cbiAgICAgICAgI2Rvd25ncmFkZSBzcGFuLnRleHQtb3Ige3Bvc2l0aW9uOiAgcmVsYXRpdmUgIWltcG9ydGFudDsgbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5idG4tbWFpbi1vdXRlci5ycy1oaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1tYWluLW91dGVyLmhpZGUucnMtc2hvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICNkb3duZ3JhZGUgLmJ0bi1yZWQtb3V0bGluZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICNkb3duZ3JhZGUubW9kYWwgLmJ0bi1tYWluLW91dGVyIHtkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O31cbiAgICAjZG93bmdyYWRlLm1vZGFsIC5idG4tbWFpbi1vdXRlci5ycy1zaG93IHtkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxuXG59XG5hLmxvZ28tdGV4dHsgZmxvYXQ6IGxlZnQ7Zm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzg4ODg4ODsgd2lkdGg6IDcwcHg7IG1hcmdpbi10b3A6IDE1cHg7fVxuYS5sb2dvLXRleHQ6aG92ZXJ7IGNvbG9yOiAjNzc3Nzc3O31cbi5jb21wLWxvZ28tc3R5bGV7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7fVxuLmNvbXAtYnVpbGRlci1sb2dveyB3aWR0aDogMTYycHggIWltcG9ydGFudDsgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O31cbi5jb21wLWJ1aWxkZXItbG9nbyBpbWcgeyBtYXJnaW4tdG9wOiAtNnB4OyB3aWR0aDoxMzBweDt9XG4ucHJvY2Vzcy1iYXIuYnVpbGQtcHJvY2VzcyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU3NXB4KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcbn1cbi5uZXctaGVscC1sdWsgLmRyb3Bkb3duLW1lbnU6YmVmb3Jle2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudH1cbi5uZXctaGVscC1sdWsgLmRyb3Bkb3duLW1lbnV7dG9wOjMzcHg7IGxlZnQ6LTYwcHg7ICAtd2Via2l0LWFuaW1hdGlvbjogaGVscCAuNXMgZWFzZS1pbi1vdXQ7IGFuaW1hdGlvbjogaGVscCAuNXMgZWFzZS1pbi1vdXQ7IG92ZXJmbG93OiBoaWRkZW47fVxuLmJ0bi1ncm91cC5oZWxwLW9wdGlvbnMubmV3LWhlbHAtbHVrLm9wZW4gYS5sZWFybi1jaXJjbGV7Ym9yZGVyLWNvbG9yOiAjZmI1ZjY2O31cbi5idG4tZ3JvdXAuaGVscC1vcHRpb25zLm5ldy1oZWxwLWx1ay5vcGVuIC5zdXBwb3J0X291dGVyICBpLnN1cHBvcnRfaWNvbiB7Y29sb3I6ICNmYjVmNjY7IG9wYWNpdHk6IDE7fVxuXG4ubmF2YmFyLXJpZ2h0c2lkZS1vdXRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNDIlO1xufVxuLm5hdmJhci1yaWdodHNpZGUgLmJ0bi1ncm91cHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC8qYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZTJlNjsqL1xuICAgIC8qbWluLWhlaWdodDogNTBweDsqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uc21hbGwtYnRucyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5sYXJnZS1idG5zIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvKm1pbi1oZWlnaHQ6IDUwcHg7Ki9cbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuLyoubmFtZS1kcm9wZG93bi13cmFwcGVyIGJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xle1xuICAgIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn0qL1xuLm5ldy1oZWxwLWx1ayB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyIC5sYXJnZS1idG5zIGEuYnRuLmJ0bi1iYXNpYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uc2F2ZV9pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDowcHg7XG59XG4uaWNvbi5pY29uLS1vcmRlci1zdWNjZXNzLnN2ZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuLmhlbHAtY2hlY2t0aXAtc21hbGw6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNXB4O1xuICAgIGxlZnQ6IDM3cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNjI2OTZkO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYyNjk2ZDtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDVweDtcbn1cblxuLmlucHV0LW5leHQtZGl2IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmlucHV0LW5leHQtZGl2IHVsIHtcbiAgICBwYWRkaW5nOiA2cHggMDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xufVxuLmlucHV0LW5leHQtZGl2IHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaW5wdXQtbmV4dC1kaXYgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGNvbG9yOiAjNjI2NzZiO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbnB1dC1uZXh0LWRpdiB1bCBsaSBhIGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgY29sb3I6ICNiZWM1Yzk7XG59XG4uaW5wdXQtbmV4dC1kaXYgdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICM2NjY7XG59XG4uaW5wdXQtbmV4dC1kaXYgdWwgbGkgYTpob3ZlciBpIHtcbiAgICBjb2xvcjogIzY2Njtcbn1cbi5pbnB1dC1uZXh0LWRpdiBsaSBpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjYmVjNWM5O1xufVxuLmlucHV0LW5leHQtZGl2IGxpIGEuYWN0aXZlIHtcbiAgICBjb2xvcjogIzE0ODNiNyAhaW1wb3J0YW50O1xufVxuLmlucHV0LW5leHQtZGl2IGxpIGEuYWN0aXZlOmhvdmVye1xuICAgIGNvbG9yOiAjMTQ4M2I3ICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtbmV4dC1kaXYgbGkgYS5hY3RpdmUgaSB7XG4gICAgY29sb3I6ICMxNDgzYjcgIWltcG9ydGFudDtcbn1cbi5pbnB1dC1uZXh0LWRpdiBsaSBhLmFjdGl2ZTpob3ZlciBpIHtcbiAgICBjb2xvcjogIzE0ODNiNyAhaW1wb3J0YW50O1xufVxuLmVkaXRvci1uYXZoZWFkZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmRpc2FibGUgYSBpIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgY29sb3I6ICNiZWM1YzkgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4ubmF2YmFyIC5sYXJnZS1idG5zIGEuYnRuLmJ0bi1iYXNpYyBpIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDAuMDNkZWcpO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRvcGJhci1sZWZ0e1xuICAgIHdpZHRoOiAzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wcm9jZXNzLWJhci5wcm9jZXNzQmFySGlkZXtkaXNwbGF5OiBub25lO31cbi5kaXNhYmxle1xuICAgIC8qYmFja2dyb3VuZDogI2Y2ZjhmOTsqL1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByb2Nlc3MtYmFyIGxpLmRpc2FibGUgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnZlcnRpY2FsLWxpbmV7aGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDFweDtiYWNrZ3JvdW5kOiAjZGFlMmU2ICFpbXBvcnRhbnQ7fVxuLm5hdmJhci1pbm5lcntkaXNwbGF5OiBmbGV4O31cblxubmF2Lm5hdmJhci5uYXZiYXItZGVmYXVsdC5uYXZiYXItZml4ZWQtdG9wLmVjb20tVG9wQmFyUGFuZWwgLnRvcGJhci1sZWZ0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzglICk7XG59XG5uYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0Lm5hdmJhci1maXhlZC10b3AuZWNvbS1Ub3BCYXJQYW5lbCAudG9wYmFyLWxlZnQgaW5wdXQuZWQtcHJvamVjdG5hbWV7d2lkdGg6IDc1JTt9XG5uYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0Lm5hdmJhci1maXhlZC10b3AuZWNvbS1Ub3BCYXJQYW5lbCAuYnVpbGQtcHJvY2VzcyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1JSApO1xufVxubmF2Lm5hdmJhci5uYXZiYXItZGVmYXVsdC5uYXZiYXItZml4ZWQtdG9wLmVjb20tVG9wQmFyUGFuZWwgLm5hdmJhci1yaWdodHNpZGUtb3V0ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2NyUgKTtcbn1cbm5hdi5uYXZiYXIubmF2YmFyLWRlZmF1bHQubmF2YmFyLWZpeGVkLXRvcC5lY29tLVRvcEJhclBhbmVsIC5idWlsZC1wcm9jZXNzLmlucHV0LW5leHQtZGl2IHVsIGxpIGEgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5uYXZiYXItZGVmYXVsdC5lY29tLVRvcEJhclBhbmVsIC50b3BiYXItbGVmdCB7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi5uYXZiYXItZGVmYXVsdC5lY29tLVRvcEJhclBhbmVsIC5pbnB1dC1uZXh0LWRpdiB7XG4gICAgd2lkdGg6IDQ1JTtcbn1cbi5uYXZiYXItZGVmYXVsdC5lY29tLVRvcEJhclBhbmVsIC5uYXZiYXItcmlnaHRzaWRlLW91dGVyIHtcbiAgICB3aWR0aDogMzclO1xufVxuXG5cblxuLm5hdmJhci1kZWZhdWx0LmVjb20tVG9wQmFyUGFuZWwuaXNQcm9kdWN0cyAudG9wYmFyLWxlZnQge1xuICAgIHdpZHRoOiAyOCUgO1xufVxuLm5hdmJhci1kZWZhdWx0LmVjb20tVG9wQmFyUGFuZWwuaXNQcm9kdWN0cyAuaW5wdXQtbmV4dC1kaXZ7XG4gICAgd2lkdGg6IDQ5JSA7XG59XG4ubmF2YmFyLWRlZmF1bHQuZWNvbS1Ub3BCYXJQYW5lbC5pc1Byb2R1Y3RzIC5uYXZiYXItcmlnaHRzaWRlLW91dGVyIHtcbiAgICB3aWR0aDogMjklICFpbXBvcnRhbnQ7XG59XG5cblxuLyoqKioqKioqKioqIG5ldyBkcm9wZG93biBkZXNpZ24qKioqKioqKioqKioqKioqKi9cbi8qIC5kcm9wZG93bi5wcmV2aWV3LWRyb3Bkb3due3Bvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnR9ICovXG4uZHJvcGRvd24ucHJldmlldy1kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudS5jdXN0LWJ1aWxkZXItZHJvcGRvd257IGRpc3BsYXk6IGJsb2NrOyB9XG4uZHJvcGRvd24tbWVudS5jdXN0LWJ1aWxkZXItZHJvcGRvd24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWY2NjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IDRweCA2LjkyOHB4IDEwcHggMHB4IHJnYmEoIDAsIDAsIDAsMC4xKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoIDI1NSwgMjU1LCAyNTUgKTtcbiAgICB0b3A6IDI1cHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRyb3Bkb3duLXNsaWRlIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICBhbmltYXRpb246IGRyb3Bkb3duLXNsaWRlIC41cyBlYXNlLWluLW91dDtcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24taGVhZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1oZWFkIGg2IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG4uY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tZm9vdGVyIGJ1dHRvbi5idG4uYnRuLWJhc2ljIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWluLWhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSB1bCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufVxuLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkgdWwgbGl7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFlMmU2O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHhcbn1cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5IHVsIGxpIHAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICM2MjY5NmQ7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtcbn1cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5IHVsIGxpIGxhYmVse2NvbG9yOiAjNDQ0NDQ0OyBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O2N1cnNvcjogcG9pbnRlcjsgZmxvYXQ6IGxlZnQ7d2lkdGg6IDEwMCU7Zm9udC1zaXplOiAxMnB4OyBwYWRkaW5nLXRvcDoxcHg7fVxuLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkgdWwgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7cG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzQ0NDQ0NDtcbiAgICB0b3A6IDEzcHg7XG4gICAgbGVmdDogMTlweDsgb3BhY2l0eToxICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5IHVsIGxpIGxhYmVsIGl7IGxpbmUtaGVpZ2h0OiAxOHB4O31cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5IHVsIGxpIHAgYXtcbiAgICBjb2xvcjojMzU4OWMwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtcbn1cbi8qIC5kcm9wZG93bi1tZW51LmN1c3QtYnVpbGRlci1kcm9wZG93bjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmYjVmNjY7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdG9wOiAtMTNweDtcbn0gKi9cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5IHVsIGxpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyeyAgY29udGVudDonJztcbiAgICBtYXJnaW46IDA7cG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzQ0NDQ0NDtcbiAgICB0b3A6IDEzcHg7XG4gICAgbGVmdDogMTlweDtcblxuXG59XG4uY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSB1bCBsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUgLCAuY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSB1bCBsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDo6YmVmb3JlIHtcbiAgICBjb250ZW50OidjaGVjayc7XG4gICAgbWFyZ2luOiAwO3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICAgIHRvcDogMTNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41MHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41MHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNTBzO1xuICAgICB0cmFuc2l0aW9uOiBhbGwgMC41MHM7XG4gICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkgdWwgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6OmJlZm9yZXtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkgdWwgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3Jle1xuICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSAuc2VsZWN0ZWQtZGVmYXVsdHtwb2ludGVyLWV2ZW50czogbm9uZTsgY29sb3I6ICNjY2M7fVxuICAuY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSAgdWwgbGkuc2VsZWN0ZWQtZGVmYXVsdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUgLCAuY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSAgdWwgbGkuc2VsZWN0ZWQtZGVmYXVsdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDo6YmVmb3JleyBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiA0MHB4OyAgfVxuXG4gICAgLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkgIHVsIGxpIGRpdi5zZWxlY3RlZC1kZWZhdWx0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSAsIC5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5ICB1bCBsaS5zZWxlY3RlZC1kZWZhdWx0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOjpiZWZvcmV7IGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiA0MHB4OyAgfVxuICAuY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSAgdWwgbGkuc2VsZWN0ZWQtZGVmYXVsdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17IGJvcmRlci1jb2xvcjojY2NjO31cbiAgLyogLmN1c3RvbS1idWlsZGVyLWRyb3Bkb3duLWJvZHkgIHVsIGxpLnNlbGVjdGVkLWRlZmF1bHQgbGFiZWx7ICAgfSAqL1xuICAuY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSB1bCBsaS5zZWxlY3RlZC1kZWZhdWx0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyeyBib3JkZXI6IG5vbmU7fVxuICBidXR0b24uYnRuLmJ0bi1iYXNpYy5teS1jdXN0b20tZHJvcGRvd257ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O21pbi1oZWlnaHQ6IDI2cHh9XG4gIGJ1dHRvbi5idG4uYnRuLWJhc2ljLm15LWN1c3RvbS1kcm9wZG93biAgc3Bhbi5jYXJldDEge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5idXR0b24uYnRuLmJ0bi1iYXNpYy5teS1jdXN0b20tZHJvcGRvd24gIHNwYW4uY2FyZXQxIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cbi5jdXN0b20tYnVpbGRlci1kcm9wZG93bi1ib2R5IHVsIGxpIGxhYmVsIHNwYW57IGZsb2F0OiBsZWZ0OyB3aWR0aDogMTAwJTsgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG4uY3VzdG9tLWJ1aWxkZXItZHJvcGRvd24tYm9keSB1bCBsaSBwLmN1c3QtdXJsIHNwYW57IGZsb2F0OiBsZWZ0OyB3aWR0aDogMTAwJTsgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG5cbi8qKioqKioqKipuZXcgY2hhbmdlcyBpbiBkcm9wZG93biAqKioqKiovXG4ubmFtZS1kcm9wZG93bi13cmFwcGVyLm5ldy1kcm9wIC5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci10b3A6M3B4IHNvbGlkICNmYjVmNjY7XG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XG59XG4ubmFtZS1kcm9wZG93bi13cmFwcGVyLm5ldy1kcm9wIC5kcm9wZG93bi1tZW51Pi5uYW1lLWxpc3QgbGk+YSBzcGFuLm5hbWUtbGlzdC10aXRsZXtjb2xvcjogIzQ0NH1cblxuXG5cblxuLyoqKioqKioqKiBxdW90ZSBiYW5uZXIqKioqKioqKioqKioqKiovXG5cbi5xdW90ZS1iYW5uZXIge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4IDE0JTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5sZWZ0LXBhcnQgaDUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzNhODJiMjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdGxpZ2h0JztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxlZnQtcGFydCBoM3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjM2E4MmIyO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0cmVndWxhcic7XG59XG5cbi5sZWZ0LXBhcnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5yaWdodC1wYXJ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTQ1cHg7XG59XG5idXR0b24ucXVvdGUtYnRuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmI1ZjY2O1xuICAgIGNvbG9yOiAjZmI1ZjY2ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5idXR0b24ucXVvdGUtYnRuLmJ0bjpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmI1ZjY2O1xuICAgIGJhY2tncm91bmQ6ICNmYjVmNjY7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQtcGFydCBwIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjOTA5ODllO1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7XG4gICAgbWFyZ2luOiAwO1xufVxuLnF1b3RlLWJhbm5lciBzcGFuLmNyb3NzIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2JmYzZjYTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdHJhbnNpdGlvbjogMC41c1xufVxuLnF1b3RlLWJhbm5lciBzcGFuLmNyb3Nze3Bvc2l0aW9uOiBhYnNvbHV0ZTs7cmlnaHQ6IDEwcHg7IHRvcDogMTBweDsgY3Vyc29yOiBwb2ludGVyO31cbi5xdW90ZS1iYW5uZXIgc3Bhbi5jcm9zczpob3ZlciBpeyBjb2xvcjojMzMzO3RyYW5zaXRpb246IDAuNXN9XG5cblxuI2Rvd25ncmFkZSB0ZXh0YXJlYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjYgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNDgzYjcsICMxNDgzYjcpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBzaWx2ZXIsIHNpbHZlcik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDJweCwgMTAwJSAxcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEwMCUsIDUwJSAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGN1YmljLWJlemllcigwLjY0LCAwLjA5LCAwLjA4LCAxKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0cmVndWxhcic7XG4gICAgY29sb3I6ICM2MjY5NmQ7IG1hcmdpbi1ib3R0b206MTVweDsgcmVzaXplOiBub25lOyBtYXJnaW4tdG9wOjVweDsgZmxvYXQ6IGxlZnQ7IHBvc2l0aW9uOiByZWxhdGl2ZTt6LWluZGV4OiA5OTtcbiAgfVxuXG4gICNkb3duZ3JhZGUgdGV4dGFyZWE6Zm9jdXN7XG4gICAgLyogc2l6ZXMgZm9yIHRoZSAyIGltYWdlcyAoZm9jdXMgc3RhdGUpICovXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwgMTAwJSAxcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICNkb3duZ3JhZGUgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4ZTliYTYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O2ZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNkb3duZ3JhZGUgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzhlOWJhNiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7Zm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI2Rvd25ncmFkZSB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4ZTliYTYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O2ZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICNkb3duZ3JhZGUgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOGU5YmE2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNTtmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB9XG5cblxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCl7XG4gICAgLmxlZnQtcGFydCBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAubGVmdC1wYXJ0IGg1e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5xdW90ZS1iYW5uZXIge1xuICAgICAgICBtYXJnaW46IDE1cHggMzBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwJTtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcbiAgICAubGVmdC1wYXJ0IGgze1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5sZWZ0LXBhcnQgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnF1b3RlLWJhbm5lciB7XG4gICAgICAgIG1hcmdpbjogMTVweCAzMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggOCU7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzODBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCl7XG4gICAgLnF1b3RlLWJhbm5lciB7XG4gICAgICAgIG1hcmdpbjogMTVweCAyNXB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0NTBweCkgYW5kIChtYXgtd2lkdGg6IDE2ODBweCl7XG4gICAgLnF1b3RlLWJhbm5lciB7XG4gICAgICAgIG1hcmdpbjogMTVweCA2MHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjE2OTBweCkgYW5kIChtYXgtd2lkdGg6MTcxMHB4KXtcbiAgICAucXVvdGUtYmFubmVye1xuICAgICAgICBtYXJnaW46IDE1cHggNjVweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTcyMHB4KSBhbmQgKG1heC13aWR0aDogMTkyMHB4KXtcbiAgICAucXVvdGUtYmFubmVyIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDM1cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBkcm9wZG93bi1zbGlkZSAvKiBGaXJlZm94ICovXG57XG5mcm9tIHtoZWlnaHQ6IDA7fVxudG8ge2hlaWdodDogMTMwcHg7fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZHJvcGRvd24tc2xpZGUgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbntcbmZyb20ge2hlaWdodDogMDt9XG50byB7aGVpZ2h0OiAxMzBweDt9XG59XG5cblxuQC1tcy1rZXlmcmFtZXMgZHJvcGRvd24tc2xpZGUgLyogSUUxMCAqL1xue1xuZnJvbSB7aGVpZ2h0OiAwO31cbnRvIHtoZWlnaHQ6IDEzMHB4O31cbn1cblxuQGtleWZyYW1lcyBkcm9wZG93bi1zbGlkZVxue1xuZnJvbSB7aGVpZ2h0OiAwO31cbnRvIHtoZWlnaHQ6IDEzMHB4O31cbn1cblxuXG4ucXVvdGUtYmFubmVyICsgdGVtcC1kZXYge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xufVxuLnF1b3RlLWJhbm5lciArIHRlbXAtZGV2LnRlbXBsYXRlLXNldmVuIHtcbiAgICBtYXJnaW4tdG9wOiAxMTJweDtcbn1cbi5wZDEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJldmlldy1kcm9wZG93biAubG9hZGluZzo6YWZ0ZXIge1xuICAgIHRvcDogLTJweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuLyogZm9yIGhlbHAtZHJvcC1kb3duICovXG5cbkAtbW96LWtleWZyYW1lcyBoZWxwIC8qIEZpcmVmb3ggKi9cbntcbmZyb20ge2hlaWdodDogMDt9XG50byB7aGVpZ2h0OjY4cHg7fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVscCAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xue1xuZnJvbSB7aGVpZ2h0OiAwO31cbnRvIHtoZWlnaHQ6NjhweDt9XG59XG5cblxuQC1tcy1rZXlmcmFtZXMgaGVscCAvKiBJRTEwICovXG57XG5mcm9tIHtoZWlnaHQ6IDA7fVxudG8ge2hlaWdodDo2OHB4O31cbn1cblxuQGtleWZyYW1lcyBoZWxwXG57XG5mcm9tIHtoZWlnaHQ6IDA7fVxudG8ge2hlaWdodDo2OHB4O31cbn1cblxuLyogZm9yIGhlbHAtZHJvcC1kb3duIGVuZCAqL1xuXG5cbi8qdXBncmFkZSB0ZW1wbGF0ZSBwb3BvdmVyKi9cbi51cGdyYWRlLXBvcG92ZXIge3Bvc2l0aW9uOiBmaXhlZDtjb2xvcjogIzYyNjk2ZDt6LWluZGV4OiA5OTk7cmlnaHQ6IDIwcHg7dG9wOiA1MHB4O3dpZHRoOiA0MTJweDtib3gtc2hhZG93OiAwcHggN3B4IDI1cHggNXB4IHJnYmEoMCwgMCwgMCwgLjIpO2ZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtib3JkZXItcmFkaXVzOiAzcHg7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmI1ZjY2IDAlLCAjZmI1ZjY2IDE0JSwgI2ZmZmZmZiAxNCUsICNmZmZmZmYgMTQlLCAjZmZmZmZmIDE0JSwgI2ZmZmZmZiAxMDAlKTtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxuLmxlZnQtc2VjdGlvbiB7d2lkdGg6IDE0JTtmbG9hdDogbGVmdDt0ZXh0LWFsaWduOiBjZW50ZXI7aGVpZ2h0OiAxMDAlO2Rpc3BsYXk6IHRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XG4ucmlnaHQtc2VjdGlvbiB7d2lkdGg6IDg2JTtmbG9hdDogbGVmdDtwYWRkaW5nOiAxOHB4IDIwcHggMjBweCAxN3B4O31cbi51cGdyYWRlLWhlYWRpbmcge2ZvbnQtc2l6ZTogMTNweDtsaW5lLWhlaWdodDogbm9ybWFsO2NvbG9yOiAjNjY2NjY2O3RleHQtYWxpZ246IGxlZnQ7cGFkZGluZy1ib3R0b206IDdweDtwYWRkaW5nLXJpZ2h0OiAzMHB4O2xldHRlci1zcGFjaW5nOiAwLjVweDtmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O31cbi5mZWF0dXJlLWxpc3Qge3dpZHRoOiAxMDAlO2Zsb2F0OiBsZWZ0O31cbi5mZWF0dXJlcyB7d2lkdGg6IDEwMCU7ZmxvYXQ6IGxlZnQ7cGFkZGluZy1ib3R0b206IDRweDt9XG4uZmVhdHVyZXMgaSB7Zm9udC1zaXplOiAxMXB4O2NvbG9yOiAjZmI1ZjY2O21hcmdpbi1yaWdodDogN3B4O3RyYW5zZm9ybTogcm90YXRlKDAuMDNkZWcpO31cbi5mZWF0dXJlcyBzcGFue2NvbG9yOiAjNjY2O29wYWNpdHk6IDAuNztmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O2ZvbnQtc2l6ZTogMTNweDt9XG4ucmlnaHQtc2VjdGlvbiBhLmNsb3NlLWJ0biB7d2lkdGg6IGF1dG87ZmxvYXQ6IHJpZ2h0O31cbi5yaWdodC1zZWN0aW9uIGkuY2xvc2Uge3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDJweDtmb250LXNpemU6IDE2cHg7Y29sb3I6ICM2NjY7b3BhY2l0eTogMC41O31cbmEudGVtcGxhdGUtdXBkYXRlLWJ0biB7ZmxvYXQ6IHJpZ2h0O2NvbG9yOiAjZmZmO3BhZGRpbmc6IDhweCAxOHB4O2JhY2tncm91bmQ6ICNmYjVmNjY7Ym9yZGVyLXJhZGl1czogNXB4O3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Zm9udC1zaXplOiAxMnB4O2ZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7bWFyZ2luLXRvcDogMTBweDt0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7fVxuLm5vdGlmeS1pY29uIHtmb250LXNpemU6IDMycHg7Y29sb3I6ICNmZmY7fVxuLmZlYXR1cmUtbGlzdCBwIHt3aWR0aDogMTAwJTtmbG9hdDogbGVmdDttYXJnaW46IDA7Zm9udC1zaXplOiAxM3B4O2NvbG9yOiAjNjY2O29wYWNpdHk6IDAuNztmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O3BhZGRpbmctYm90dG9tOiA1cHg7fVxuYS50ZW1wbGF0ZS11cGRhdGUtYnRuOmhvdmVyIHtiYWNrZ3JvdW5kOiAjZmRiNmI5ICFpbXBvcnRhbnQ7Y29sb3I6ICNmYjVmNjYgIWltcG9ydGFudDtib3JkZXItY29sb3I6ICNmZGI2YjkgIWltcG9ydGFudDt9XG5cbi8qKioqICAgc21hbGwgbW9kZWwgKioqKioqKioqKioqL1xuLm1vZGFsLnNtYWxsLW1vZGVse2Rpc3BsYXk6IGJsb2NrOyB6LWluZGV4OiA5OTk5OTsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTsgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxuLm1vZGFsLnNtYWxsLW1vZGVsIC5tb2RhbC1kaWFsb2d7bWF4LXdpZHRoOiA0ODBweDsgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7ICAgICBwYWRkaW5nOiAwIDEwcHg7fVxuLm1vZGFsLnNtYWxsLW1vZGVsIC5tb2RhbC1ib2R5IGgyIHttYXJnaW46IDAgMCAxMHB4IDA7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDEwMCU7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMjRweDtjb2xvcjogI2ZiNWY2Njtmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O2xpbmUtaGVpZ2h0OiAzMHB4O31cbi5tb2RhbC5zbWFsbC1tb2RlbCAubW9kYWwtYm9keSBwIHttYXJnaW46IDA7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDEwMCU7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogIzY2NjY2Njtmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O2xpbmUtaGVpZ2h0OiAyMHB4O31cbi5tb2RhbC5zbWFsbC1tb2RlbCAubW9kYWwtY29udGVudCB7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDEwMCU7Ym94LXNoYWRvdzogMCAwcHggMzBweCByZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOiA1cHg7ICAgIG1pbi1oZWlnaHQ6IDI0NXB4O2FsaWduLWl0ZW1zOiBjZW50ZXI7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XG4ubW9kYWwuc21hbGwtbW9kZWwgLm1vZGFsLWJvZHl7ZmxvYXQ6IGxlZnQ7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXJ9XG4uaWNvbi1ibG9jayB7ZmxvYXQ6IGxlZnQ7d2lkdGg6IDEwMCU7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi1ib3R0b206IDE1cHg7fVxuYS5idG4ubXktYnRuIHtCQUNLR1JPVU5EOiAjZmI1ZjY2O2NvbG9yOiAjZmZmO21hcmdpbjogMjBweCAwIDA7IGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjt9XG4uaWNvbi1ibG9jayBpbWcge2hlaWdodDogNTVweDt9XG5AbWVkaWEgKG1heC13aWR0aDo2MzlweCl7XG4gICAgLm1vZGFsLnNtYWxsLW1vZGVsIC5tb2RhbC1ib2R5IGgye2ZvbnQtc2l6ZTogMThweDsgbWFyZ2luOiAwIDAgNXB4IDB9XG4gICAgLm1vZGFsLnNtYWxsLW1vZGVsIC5tb2RhbC1ib2R5IHB7Zm9udC1zaXplOiAxMnB4fVxuICAgIGEuYnRuLm15LWJ0biB7bWFyZ2luOiAxNXB4IDAgMDtmb250LXNpemU6IDEycHg7fVxuICAgIC5pY29uLWJsb2NrIGltZyB7aGVpZ2h0OiA0NXB4O31cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XG4gICAgLnJzLXNob3d7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7fVxuICAgIC5ycy1oaWRleyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxufVxuXG4jZG93bmdyYWRlIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwcHggNDBweCAxMHB4O1xufVxuLnRlc3RpbW9uaWFsLXNlY3Rpb24gLmltZy1vdXRlciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuI2Rvd25ncmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogNjA5cHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5kaXYjZG93bmdyYWRlLm1vZGFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuZGl2I2Rvd25ncmFkZS5tb2RhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi50ZXN0aW1vbmlhbC1zZWN0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRsaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi50ZXN0aW1vbmlhbC1zZWN0aW9uIGltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGVzdGltb25pYWwtc2VjdGlvbiAudGVzdGltb25pYWwtY29udGVudCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDg0JTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi50ZXN0aW1vbmlhbC1zZWN0aW9uIC50ZXN0aW1vbmlhbC1jb250ZW50IGg1LnVzZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0bGlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi50ZXN0aW1vbmlhbC1zZWN0aW9uIC50ZXN0aW1vbmlhbC1jb250ZW50IHAudXNlci10ZXN0aW1vbmlhbCB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4udGVzdGltb25pYWwtY29udGVudC1ib3R0b20ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgbWFyZ2luOiAwcHggLTIwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgN3B4IDdweDtcbn1cbi50ZXN0aW1vbmlhbC1jb250ZW50LWJvdHRvbSAuYXN0ZXJpeCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi50ZXN0aW1vbmlhbC1jb250ZW50LWJvdHRvbSBzcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzkzOTk5YjtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdGxpZ2h0O1xufVxuLnRlc3RpbW9uaWFsLWNvbnRlbnQtYm90dG9tIGEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZiNWY2NjtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG4udGVzdGltb25pYWwtY29udGVudCAuYnRuLWJsdWUtb3V0bGluZSB7XG4gICAgY29sb3I6ICNmYjVmNjY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmI1ZjY2O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4vKiAudGVzdGltb25pYWwtY29udGVudC1ib3R0b20gLmJ0bi1ibHVlLW91dGxpbmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyNmEyZGIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSAqL1xuXG4uZWRpdG9yLXNpZGViYXIuc2lkZWJhci5lY29tLWhpZGUtbGVmdCArIC5lZGl0b3ItdGVtcGxhdGUtdGFicy5taW5IIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5lZGl0b3Itc2lkZWJhci5zaWRlYmFyLmVjb20taGlkZS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/site/+builder/builder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/site/+builder/builder.component.ts ***!
  \****************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_intercom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/intercom.service */ "./src/app/shared/services/intercom.service.ts");
/* harmony import */ var _services_undoRedoBuilder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/undoRedoBuilder.service */ "./src/app/site/+builder/services/undoRedoBuilder.service.ts");
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/section.model */ "./src/app/site/+builder/models/section.model.ts");
/* harmony import */ var _models_calc_email_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/calc_email.model */ "./src/app/site/+builder/models/calc_email.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_JSONBuilder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/JSONBuilder.service */ "./src/app/site/+builder/services/JSONBuilder.service.ts");
/* harmony import */ var _services_templateSwitching_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/templateSwitching.service */ "./src/app/site/+builder/services/templateSwitching.service.ts");
/* harmony import */ var _services_formula_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/formula.service */ "./src/app/site/+builder/services/formula.service.ts");
/* harmony import */ var _builder_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @builder/models */ "./src/app/site/+builder/models/index.ts");
/* harmony import */ var _services_builder_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/builder.service */ "./src/app/site/+builder/services/builder.service.ts");
/* harmony import */ var _templates_services_DefaultJSON_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../templates/services/DefaultJSON.service */ "./src/app/site/templates/services/DefaultJSON.service.ts");
/* harmony import */ var _services_JSONUpdateItemTracker_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/JSONUpdateItemTracker.service */ "./src/app/site/+builder/services/JSONUpdateItemTracker.service.ts");
/* harmony import */ var _shared_services_marketing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/marketing.service */ "./src/app/shared/services/marketing.service.ts");
/* harmony import */ var _templates_services_recommendation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../templates/services/recommendation.service */ "./src/app/site/templates/services/recommendation.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_templateImages_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./models/templateImages.store */ "./src/app/site/+builder/models/templateImages.store.ts");
/* harmony import */ var _shared_interfaces_features_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/interfaces/features.interface */ "./src/app/shared/interfaces/features.interface.ts");
/* harmony import */ var _shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/subdomain.service */ "./src/app/shared/services/subdomain.service.ts");
/* harmony import */ var _shared_services_social_integration_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/services/social-integration.service */ "./src/app/shared/services/social-integration.service.ts");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var _shared_services_feature_access_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/services/feature-access.service */ "./src/app/shared/services/feature-access.service.ts");
/* harmony import */ var _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/services/cookie.service */ "./src/app/shared/services/cookie.service.ts");
/* harmony import */ var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/services/script.service */ "./src/app/shared/services/script.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _services_UrlShortner_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/UrlShortner.service */ "./src/app/site/+builder/services/UrlShortner.service.ts");
/* harmony import */ var _services_AppCondition_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/AppCondition.service */ "./src/app/site/+builder/services/AppCondition.service.ts");
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/component.service */ "./src/app/site/+builder/services/component.service.ts");
/* harmony import */ var _services_JSONElement_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/JSONElement.service */ "./src/app/site/+builder/services/JSONElement.service.ts");
/* harmony import */ var _templates_services_theming_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./../templates/services/theming.service */ "./src/app/site/templates/services/theming.service.ts");
/* harmony import */ var _shared_services_membership_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/services/membership.service */ "./src/app/shared/services/membership.service.ts");
/* harmony import */ var _shared_models_currentPlan__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shared/models/currentPlan */ "./src/app/shared/models/currentPlan.ts");
/* harmony import */ var _shared_services_countdown_promo_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../shared/services/countdown-promo.service */ "./src/app/shared/services/countdown-promo.service.ts");
/* harmony import */ var _shared_interfaces_demo_features_interface__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shared/interfaces/demo-features.interface */ "./src/app/shared/interfaces/demo-features.interface.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _templates_services_templateValidator_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../templates/services/templateValidator.service */ "./src/app/site/templates/services/templateValidator.service.ts");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../shared/models/company */ "./src/app/shared/models/company.ts");




































// import { setTimeout } from 'timers';

// import { customHtml } from "../templates/controls/custom_html/custom_html.component";


var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(jsonBuilderHelper, subDomainService, _builderService, _defaultJson, _itemTrackService, route, _router, _dashboardService, formulaService, _featureAuthService, _cookieService, _script, _TemplateSwitching, recommendationService, _userService, _urlShortner, _appConditionService, componentService, themingService, _jsonElementService, _membershipService, _marketingService, _titleService, countdownPromoService, tvs, _redoUndoService, _socialIntegrationService, _intercomService
    // private location: PlatformLocation
    ) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.subDomainService = subDomainService;
        this._builderService = _builderService;
        this._defaultJson = _defaultJson;
        this._itemTrackService = _itemTrackService;
        this.route = route;
        this._router = _router;
        this._dashboardService = _dashboardService;
        this.formulaService = formulaService;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this._script = _script;
        this._TemplateSwitching = _TemplateSwitching;
        this.recommendationService = recommendationService;
        this._userService = _userService;
        this._urlShortner = _urlShortner;
        this._appConditionService = _appConditionService;
        this.componentService = componentService;
        this.themingService = themingService;
        this._jsonElementService = _jsonElementService;
        this._membershipService = _membershipService;
        this._marketingService = _marketingService;
        this._titleService = _titleService;
        this.countdownPromoService = countdownPromoService;
        this.tvs = tvs;
        this._redoUndoService = _redoUndoService;
        this._socialIntegrationService = _socialIntegrationService;
        this._intercomService = _intercomService;
        this.allowUse = true;
        this.selfOpen = false;
        this.socket = null;
        this.userName = '';
        this.Name = '';
        this.logoCompany = ['morganchaney', 'seniortransitionguide', 'conversionformula'];
        this.smartchoicestool = 'smartchoicestool';
        this.filePickerKey = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].FILE_PICKER_API;
        this.selectedSec = 'build';
        this.selectedAnalyticComponent = 'overview';
        this.selectedConfigComponent = 'settings';
        this.unique = true;
        this.startAutoSave = false;
        this.isAnalyticsAvailable = true;
        this.copied = false;
        this.isMobileView = false;
        this.zoomfactor = .05;
        this.currentZoom = 0;
        this.curYPos = 0;
        this.curXPos = 0;
        this.xAxis = 0;
        this.yAxis = 0;
        this.curDown = false;
        this.showCongoMessage = false;
        this.interComData = null;
        this.showPromoCodeBuilder = false;
        this.ConfigArray = ["settings", "integrations", "email", "share-your-calculator", "launch-popup", "embedded-code"];
        this.LandingArray = ["Result", "Questionnaire", "Landing"];
        this.AnalyticsArray = ["overview", "user_detail", "traffic_detail"];
        this.hash = 'Landing';
        this.bootboxText = 'Your Calculator is Live';
        this.imgContainer = [];
        this.intro_overlay = false;
        this.editorIntro_overlay = false;
        this.helloBar = {
            flag: false,
            type: '',
            message: ''
        };
        this.cardStatus = null;
        this.userId = null;
        this.planId = '';
        // undo_stack: any = [];
        // redo_stack: any = [];
        this.socketEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](false);
        this.featuresToDisable = [];
        this.beingPublished = false;
        // FormulaUndoRedoSet: Subject<boolean> = new BehaviorSubject<boolean>(false);
        // undoRedoAppData: any = null;
        this.propertiesHidden = false;
        // itemNotChnagedField: any = ['_id', 'setResulTTitle', 'setItemType', 'setCurrentValue', 'setFormulaIndex', 'setVisibility', 'setScale', 'setLeadPlaceholder', 'setOptionImageVisibility', 'qustionImageVisibility', 'setTitle', 'setPostTitle', 'setHelptext', 'setPlaceHolder', 'setOptions', 'getField', 'getOption', 'addOptions', 'addFieldToCheckbox', 'addLinksToFooter', 'deserialize', 'updateTextFieldForT7', 'setResultLeadformPosition'];
        this.turningOffFeature = false;
        this.demoBuilder = false;
        this.isCNameAccess = false;
        this.emptyConditions = {};
        this.invalidConditions = {};
        this.isScreenSmall = false;
        this.popUpHeading = 's'; // e for embeded and s for share
        this.ecomOverFlow = false; /** use for ecom purpose */
        this.chatboatSrcUrl = '';
        this.showBanner = true;
        this.showDropdown = false;
        //Embeded code
        this.iloaderJS = '//dyv6f9ner1ir9.cloudfront.net/assets/js/sloader.js';
        this.fullPageCode = 'Generating Embed Code...';
        this.fbCommentsCode = '';
        this.versionPopover = true;
        this.deviceSize = false;
        jQuery('#modalcss').attr('href', "./assets/css/common.css");
        this.uniqueUrlHandler = this._builderService.debounce(this.isUnique, 800);
        this.autoSaver = this.debounce(this.saveUnsavedData, 1000);
        this.interComData = JSON.parse(localStorage.getItem('icd'));
        //back button click fix
        this.backButtonHandling();
        this.online = false;
        this.hellobarMessage = null;
        this.publishUrl = '';
        this.calcEmail = null;
        // constructor() {
        //   location.onPopState(() => {
        //      alert(window.location);
        //   }); }
    }
    BuilderComponent.prototype.unloadPage = function (event) { };
    BuilderComponent.prototype.backButtonHandling = function () {
        var _this = this;
        window.innerDocClick = true;
        this._router.events.map(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; }).subscribe(function (event) {
            console.log('event==>>', event);
            if (event && !window.innerDocClick) {
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION + '/dashboard';
            }
        });
    };
    BuilderComponent.prototype.dashBoardRedirect = function (event) {
        event.preventDefault();
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION + '/dashboard/';
    };
    BuilderComponent.prototype.previewOnMobile = function () {
        this.isMobileView = true;
        this.jsonBuilderHelper.isMobileView = true;
    };
    BuilderComponent.prototype.previewOnWeb = function () {
        this.isMobileView = false;
        this.jsonBuilderHelper.isMobileView = false;
    };
    BuilderComponent.prototype.goBack = function () {
        window.history.back();
    };
    BuilderComponent.prototype.getNavUrl = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION;
    };
    BuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRoleCheck = this._cookieService.readCookie('role');
        (jQuery('body').width() < 1024) ? this.deviceSize = !this.deviceSize : '';
        console.time('loadTimeJS');
        console.time('loadTimeBuilder');
        // Clipboard
        this.jsonBuilderHelper.isClipboardSupported = Clipboard.isSupported();
        // Get Cookie
        var cookie = this._cookieService.readCookie('storage');
        this.storage = cookie ? JSON.parse(cookie) : '';
        if (this.storage) {
            this.Name = this.toTitleCase(this.storage.user.name);
        }
        // socket: set user loggedIn.
        this.socketEmiter.subscribe(function (emit) {
            if (!(_this._router.url.startsWith('/builder-demo')) && (_this.socket && _this.socket.id) && _this.allowUse && emit && _this.jsonBuilderHelper && _this.jsonBuilderHelper.getJSONBuilt() && Object.keys(_this.jsonBuilderHelper.getJSONBuilt()).length) {
                _this.setUser(_this.socket.id);
            }
        });
        // Redo/Undo: initialize stack.
        // this._redoUndoService.initRedoUndoStack();
        // builder functionality
        //Premade calc made login
        this._builderService.premadeLogin.subscribe(function (show) {
            if (show) {
                setTimeout(function () { return _this.demoBuilder = true; }, 2000);
                _this._builderService.premadeLogin.next(false);
            }
        });
        if (this._router.url.startsWith('/builder-demo')) {
            this.initDemoBuilder();
        }
        else {
            this.initActualBuilder();
        }
        // Init other stuff like membership, subscription status, woomatric etc.
        this.initOtherStuff();
        if (jQuery(window).width() >= 1024)
            this.isScreenSmall = false;
        else
            this.isScreenSmall = true;
    };
    BuilderComponent.prototype.initActualBuilder = function () {
        var _this = this;
        var self = this;
        // initializing Socket
        this.socketInitialization.call(this);
        // get features then load JS libraries then finaly load calculator in DEVMODE.
        this._featureAuthService.getAllFeatureAccess().subscribe(function (result) {
            _this._featureAuthService.features = new _shared_interfaces_features_interface__WEBPACK_IMPORTED_MODULE_18__["FeatureAccess"](result);
            _this.sub = _this.route.params.subscribe(function (params) {
                var name = params['name'];
                if (name)
                    _this.appName = name;
                _this._script.load('selectize', 'wysiwyg', 'slimScroll', 'math', 'fancybox', 'jqueryUI', 'colorPickerSliders', 'tinyColor', 'bootBox', 'handsontable', 'highcharts', 'exporting', 'gCharts', 'NumberedTextarea', 'raphael', 'twitter_widgets')
                    .then(function (data) {
                    console.log('Loaded');
                    _this._script.load('highchartsMore', 'link', 'code', 'colors', 'font', 'font_family', 'wordCloud')
                        .then(function (data) {
                        window.loadGoogleCharts();
                        _this.initiateGetCalcProcess();
                    })
                        .catch(function (error) {
                        //any error
                    });
                })
                    .catch(function (error) {
                    //any error
                });
            });
            _this.isAnalyticsAvailable = _this._featureAuthService.features.analytics.active;
            //Set current company name
            var storage = _this.storage;
            _this.userId = storage ? storage.user._id : null;
            _this.planId = _this.subDomainService.currentCompany.billing.chargebee_plan_id;
            _this.checkForBanner();
            _this.companyName = _this.subDomainService.currentCompany.name;
        });
    };
    BuilderComponent.prototype.initDemoBuilder = function () {
        var _this = this;
        this._featureAuthService.features = new _shared_interfaces_demo_features_interface__WEBPACK_IMPORTED_MODULE_34__["DemoFeatureAccess"]();
        this.sub = this.route.params.subscribe(function (params) {
            var name;
            if (_this.route.snapshot.queryParams['premade']) {
                name = _this.route.snapshot.queryParams['premade'];
                _this._builderService.createPremade = true;
            }
            else {
                name = params['name'] || 'sample-calculator'; // app name is required,by default it redirects to _ url
            }
            if (name)
                _this.appName = name;
            _this._script.load('selectize', 'wysiwyg', 'slimScroll', 'math', 'fancybox', 'jqueryUI', 'colorPickerSliders', 'tinyColor', 'bootBox', 'handsontable', 'highcharts', 'exporting', 'gCharts', 'NumberedTextarea', 'raphael')
                .then(function (data) {
                console.log('Loaded');
                _this._script.load('highchartsMore', 'link', 'code', 'colors', 'font', 'font_family')
                    .then(function (data) {
                    window.loadGoogleCharts();
                    _this.getApp({ url: _this.appName });
                })
                    .catch(function (error) {
                    //any error
                });
            })
                .catch(function (error) {
                //any error
            });
        });
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics.active;
        this.companyName = 'Demo';
        this._builderService.isDemo = true;
    };
    BuilderComponent.prototype.initOtherStuff = function () {
        this.subscription_status_company();
        this.calculateNumberOfPromoCode();
        this.initWooMatrics();
        this.getPlanSubscription();
        this.calculateNumberOfPromoCode();
        this.initWooMatrics();
        if (this.storage) {
            this.online = true;
        }
        this.hellobarMessage = this._cookieService.readCookie('hellobar') ? JSON.parse(this._cookieService.readCookie('hellobar')) : null;
        this.formulaUndoRedoSet();
    };
    BuilderComponent.prototype.checkForBanner = function () {
        if (this.planId && this.planId.split('_')[0] === 'business') {
            if (localStorage.getItem('bannerAlreadySeen')) {
                this.showBanner = false;
            }
        }
    };
    BuilderComponent.prototype.hideBanner = function () {
        this.showBanner = false;
        if (this.planId && this.planId.split('_')[0] === 'business') {
            localStorage.setItem('bannerAlreadySeen', 'true');
        }
    };
    BuilderComponent.prototype.subscription_status_company = function () {
        var _this = this;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        if (companyAccess) {
            companyAccess.forEach(function (e) {
                if (e.key === _this.subDomainService.subDomain.sub_domain) {
                    _this.subscription_status = e.value;
                }
            });
        }
    };
    BuilderComponent.prototype.formulaUndoRedoSet = function () {
        var _this = this;
        this._redoUndoService.FormulaUndoRedoSet.subscribe(function (flg) {
            if (flg) {
                _this._redoUndoService.updateFormula();
            }
        });
    };
    BuilderComponent.prototype.getPlanSubscription = function () {
        var _this = this;
        this._membershipService.getPlanSubscription()
            .subscribe(function (success) {
            console.log('in getPlanSubscription');
            _this.checkForBanner();
            _this.currentSubscription = new _shared_models_currentPlan__WEBPACK_IMPORTED_MODULE_32__["Subscriptions"](success.currentplan.subscription);
            switch (_this.currentSubscription.status) {
                case 'in_trial':
                    var difference = void 0;
                    _this.countdownPromoService.subscription = _this.currentSubscription;
                    if (_this.countdownPromoService.trialEnd) {
                        difference = moment.duration(_this.countdownPromoService.trialEnd.diff(moment(new Date())));
                    }
                    var trialEnd = moment.unix(success.currentplan.subscription.trial_end);
                    _this.countdownPromoService.setCountdownTimer(trialEnd);
                    break;
            }
        });
    };
    BuilderComponent.prototype.initWooMatrics = function () {
        var _this = this;
        this._marketingService.initGTM()
            .then(function (data) { return _this._marketingService.initWootric(); })
            .then(function (data) { return _this._marketingService.identifyUser(); })
            .catch(function (err) { return console.log('Errpr', err); });
    };
    BuilderComponent.prototype.socketInitialization = function () {
        var _this = this;
        localStorage.setItem('connect', 'wait');
        //Socket connection....
        this.socket = (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_DOMAIN == 'https://app.outgrow.co') ? socket_io_client__WEBPACK_IMPORTED_MODULE_36__["connect"](_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].ROOT, { secure: true }) : socket_io_client__WEBPACK_IMPORTED_MODULE_36__["connect"](_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].ROOT);
        this.socket.on('connect', function () { return localStorage.setItem('connect', 'connect'); });
        this.socket.on('socket-conn-id', this.connectionInit.bind(this));
        this.socket.on('connect_error', this.connectionError.bind(this));
        this.socket.on('calc-used-by-set-done', this.setAppLockSetting.bind(this));
        this.socket.on('lock-builder', this.lockBuilder.bind(this));
        this.socket.on('disconnect', function () { return localStorage.setItem('connect', 'disconnect'); });
        this.socket.on('publish_gif', this.gifPublished.bind(this));
        this.socket.on('publish_screenshot', this.screenshotPublished.bind(this));
        this._builderService.userMisMatch.subscribe(function (result) {
            if (result) {
                if ((!_this.socket || !_this.socket.id) && !(_this._router.url.startsWith('/builder-demo'))) {
                    // wait for socket connection....
                }
                else {
                    var user_id = localStorage.getItem('taken_userId');
                    if (_this.jsonBuilderHelper.getJSONBuilt().user_id == user_id) {
                        _this.selfOpen = true;
                    }
                    else {
                        _this.selfOpen = false;
                    }
                    _this.allowUse = false;
                    _this.userName = localStorage.getItem('taken_user');
                    _this.checkTimeOut();
                }
            }
            else {
                _this.allowUse = true;
                var data = JSON.stringify(_this.jsonBuilderHelper.getJSONBuilt());
                _this._redoUndoService.setUndoStack(_this.jsonBuilderHelper.getJSONBuilt() ? data : null);
            }
        });
    };
    BuilderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._featureAuthService.getFeatures().subscribe(function (result) {
            if (result.length) {
                (_this._featureAuthService.features && _this._featureAuthService.features.cname && _this._featureAuthService.features.cname.active) && (_this.isCNameAccess = true);
            }
        });
        document.onmouseover = function () { return window.innerDocClick = true; };
        document.onmouseleave = function () { return window.innerDocClick = false; };
        if (window.Intercom) {
            window.Intercom('update', { 'app_current_page': 'builder' });
            window.Intercom('update', { 'app_current_page_url': window.location.href });
        }
        // this.setPublishUrl();
    };
    BuilderComponent.prototype.introoverlay = function () {
        this.intro_overlay = false;
        if (localStorage.getItem('editorIntro') === 'show')
            this.editorIntro_overlay = true;
        localStorage.removeItem('intro');
    };
    BuilderComponent.prototype.removeEditorIntro = function () {
        this.editorIntro_overlay = false;
        localStorage.removeItem('editorIntro');
    };
    BuilderComponent.prototype.introoverlayEcom = function () {
        this.jsonBuilderHelper.ecom_intro_overlay = false;
        localStorage.removeItem('intro');
    };
    BuilderComponent.prototype.callPopup = function (id) {
        var pid = id.split('_')[0] + '_y';
        jQuery('button[id=' + pid + '_nd]').trigger('click');
    };
    BuilderComponent.prototype.publishUpgrade = function () {
        var _this = this;
        jQuery('#publish-upgrade').modal('hide');
        this.showCongoMessage = false;
        jQuery('.editor-modal').removeClass('golive-popup');
        setTimeout(function () {
            _this.callPopup('essentials_m');
        }, 200);
    };
    BuilderComponent.prototype.planBasedCta = function (json) {
        if (!this._featureAuthService.features.cta.redirect_url) {
            if (json.templateType == 'Numerical') {
                var section = json.pages.find(function (page) { return page.type == 'Result'; })
                    .sections.find(function (section) { return section.type == 'LeadForm'; });
                section.items.map(function (item) {
                    if (item.type == 'click_button')
                        item.visible = false;
                    else if (item.type == 'cta_shares')
                        item.visible = true;
                    else if (item.type == 'cta_likes')
                        item.visible = false;
                });
            }
            else if (json.templateType != 'Graded') {
                json.formula.map(function (formula) {
                    formula.isValid = false;
                    formula.units.postfix = true;
                });
            }
        }
        //Tint toggle set according to plan
        if (!this._featureAuthService.features.custom_styling.custom_tints)
            json.theme.tintToggle = false;
        return json;
    };
    BuilderComponent.prototype.calculateNumberOfPromoCode = function () {
        this.showPromoCode = false;
        var promoCodeValidity = this._cookieService.readCookie('promo_codes_validity');
        if (this._cookieService.readCookie('promo_codes_count') && promoCodeValidity) {
            //decrease promo codes count randomly
            var today = new Date();
            var dateFromCookie = Date.parse(promoCodeValidity);
            var differenceInDays = Math.floor((today.getTime() - dateFromCookie) / (1000 * 60 * 60 * 24));
            differenceInDays = differenceInDays > 0 ? 1 : 0;
            var randomNum = Math.floor(Math.random() * (4 - 1) + 1);
            this.noOfPromoCodes = +this._cookieService.readCookie('promo_codes_count');
            var promoCodesCount = this.noOfPromoCodes - (differenceInDays * randomNum);
            if (promoCodesCount > 0) {
                this.noOfPromoCodes = promoCodesCount;
            }
            this._cookieService.createCookie('promo_codes_count', this.noOfPromoCodes + '', 30);
        }
        else {
            this._cookieService.createCookie('promo_codes_count', '50', 30);
            this.noOfPromoCodes = 50;
            this._cookieService.createCookie('promo_codes_validity', new Date().toDateString(), 30);
        }
    };
    BuilderComponent.prototype.initiateGetCalcProcess = function () {
        var _this = this;
        // window.Intercom('update', { hide_default_launcher: true });
        if (this.appName) {
            this.getApp({ url: this.appName, company: this.subDomainService.subDomain.sub_domain });
        }
        else {
            //create new app on load
            var project_1 = localStorage.getItem('project');
            var template_1 = localStorage.getItem('temp_name');
            var temp_type_1 = localStorage.getItem('temp_type');
            if (project_1 === 'New' || project_1 == 'Duplicate') {
                var json_1;
                var appName_1;
                json_1 = this._defaultJson.getJSON(template_1);
                this._builderService.getAppName(this.subDomainService.subDomain.company_id)
                    .subscribe(function (data) {
                    appName_1 = data;
                    localStorage.setItem('calc_name', appName_1);
                    if (project_1 === 'New') {
                        json_1.url = appName_1;
                        json_1.version = 'V_3_5';
                        json_1.public = true;
                        json_1.shuffle.section = false;
                        json_1.shuffle.item = false;
                        json_1.shuffle.option = false;
                        if (_this.subDomainService.currentCompany.GDPR) {
                            json_1.is_gdpr = true;
                            json_1 = _this.checkforGDPR(json_1, _this.subDomainService.currentCompany.name);
                        }
                        _this.generateCalculator(json_1, template_1, temp_type_1);
                    }
                    else {
                        _this._builderService.getDuplicateAppConfig(localStorage.getItem('DuplicateURL'))
                            .subscribe(function (data) {
                            var json = _this.modifiedJson(data, appName_1);
                            localStorage.removeItem('DuplicateId');
                            localStorage.removeItem('DuplicateURL');
                            _this.generateCalculator(json, json.template, json.templateType);
                        }, function (err) { return console.log('Duplicate Data Fetch Error: ', err); });
                    }
                    _this.updateIntercomforPage();
                }, function (err) {
                    appName_1 = '';
                    console.log(err);
                });
            }
            else if (!project_1) {
                // this._router.navigate(['/dashboard']);
            }
            else {
                this.getApp({ _id: project_1, company: this.subDomainService.subDomain.sub_domain });
            }
        }
    };
    BuilderComponent.prototype.modifiedJson = function (data, appName) {
        var json = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["App"]().deserialize(data);
        json.status = 'DEV';
        json.version = 'V_3_5';
        json.public = true;
        json.url = appName;
        json.shuffle.section = false;
        json.shuffle.item = false;
        json.shuffle.option = false;
        json.noOfQuestionsVisible = 0;
        if (!(json.template === 'sound-cloud-v3' || json.template === 'sound-cloud-new' || json.template === 'template-seven' || json.template === 'experian' || json.template === 'template-eight')) {
            json.versioning['resultV2'] = true;
        }
        json.mode = 'PRIVATE';
        json['parentApp'] = null;
        json.changed = false;
        json.premade_data.is_premade = true;
        json.premade_data.app_url = localStorage.getItem('DuplicateURL');
        json.premade_data.app_id = data._id;
        json = this.getHeaderFooter(json);
        json = this.getVkButton(json);
        if (this.subDomainService.currentCompany.GDPR) {
            json.is_gdpr = true;
            json = this.checkforGDPR(json, this.subDomainService.currentCompany.name);
        }
        return json;
    };
    BuilderComponent.prototype.checkforGDPR = function (app, name) {
        var landing_leadform;
        var ques_leadform;
        var result_leadform;
        // For Welcome Screen
        app.pages[0].sections.forEach(function (section) {
            if (!landing_leadform)
                landing_leadform = section.items.find(function (item) { return item.type === 'leadform'; });
        });
        // For Question Page
        app.pages[1].sections.forEach(function (section) {
            if (!ques_leadform)
                ques_leadform = section.items.find(function (item) { return item.type === 'leadform_question'; });
        });
        // For Result Page
        app.pages[2].sections.forEach(function (section) {
            if (!result_leadform)
                result_leadform = section.items.find(function (item) { return item.type === 'leadform'; });
        });
        // Modify Leadform JSON
        var item = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["Item"];
        var temp_item = item.getField();
        temp_item.type = 'others';
        temp_item.subType = 'checkbox';
        temp_item.icon = 'GDPR';
        temp_item.key = 'others';
        temp_item.name = 'Confirm your subscription';
        temp_item.placeholder = ' I agree to share the information with ' + name + ' and its partners.';
        temp_item.validations.required.status = true;
        if (landing_leadform) {
            landing_leadform.fields.push(temp_item);
        }
        if (ques_leadform) {
            ques_leadform.fields.push(temp_item);
        }
        if (result_leadform) {
            result_leadform.fields.push(temp_item);
        }
        return app;
    };
    BuilderComponent.prototype.getHeaderFooter = function (app) {
        var sections = app.pages[0].sections;
        if (sections.findIndex(function (d) { return d.type == 'Page_Header'; }) == -1) {
            var headerIndex = sections.findIndex(function (d) { return d.type == 'Footer'; });
            if (headerIndex >= 0) {
                app.pages[0].sections[headerIndex].type = 'Page_Header';
                app.pages[0].sections[headerIndex].title = 'Page_Header';
                app = this.createHeader(app, headerIndex);
            }
        }
        sections = app.pages[2].sections;
        var footerSection = sections.find(function (d) { return d.type == 'Page_Footer'; });
        if (!footerSection) {
            this.createFooter(app);
        }
        return app;
    };
    BuilderComponent.prototype.getVkButton = function (app) {
        var resultSec = app.pages[2].sections.find(function (sec) { return sec.type == 'LeadForm'; });
        var shares = resultSec.items.find(function (it) { return it.type == 'cta_shares'; });
        var newItem1 = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["Item"], option1 = newItem1.getOption();
        var newItem2 = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["Item"], option2 = newItem2.getOption();
        if (shares.options.length <= 3) {
            option1 = Object.assign(option1, { type: 'VKontakte', selected: false, label: shares.options[0].label, icon: shares.options[0].icon, title: shares.options[0].title });
            shares.options.push(option1);
        }
        if (shares.options.length <= 4) {
            option1 = Object.assign(option1, { type: 'Whatsapp', selected: false, label: shares.options[0].label, icon: shares.options[0].icon, title: shares.options[0].title });
            shares.options.push(option1);
            option1 = Object.assign(option1, { type: 'Mail' });
            shares.options.push(option1);
            option1 = Object.assign(option1, { type: 'Messenger' });
            shares.options.push(option1);
        }
        var likes = resultSec.items.find(function (it) { return it.type == 'cta_likes'; });
        if (likes.options.length <= 2) {
            option2 = Object.assign(option2, { type: 'VKontakte', selected: false, label: likes.options[0].label, icon: likes.options[0].icon, title: likes.options[0].title });
            likes.options.push(option2);
        }
        return app;
    };
    BuilderComponent.prototype.createHeader = function (app, headerIndex) {
        var item = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["Item"]('header_links', 'This is the footer link', 'somehelp random');
        item.addLinksToFooter([{ label: 'Header Link1', value: 'http://outgrow.co' },
            { label: 'Header Link2', value: 'http://outgrow.co' },
            { label: 'Header Link3', value: 'http://outgrow.co' }
        ]);
        item.postfix = 'right';
        item.setVisibility(false);
        app.pages[0].sections[headerIndex].items.unshift(item);
        return app;
    };
    BuilderComponent.prototype.createFooter = function (app) {
        var section = new _models_section_model__WEBPACK_IMPORTED_MODULE_3__["Section"]('Page_Footer', 'landing-footer-outer');
        var item = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["Item"]('footer_links', 'This is the footer link', 'somehelp random');
        item.addLinksToFooter([{ label: 'Footer Link1', value: 'http://outgrow.co', title: '1' },
            { label: 'Footer Link2', value: 'http://outgrow.co', title: '1' },
            { label: 'Footer Link3', value: 'http://outgrow.co', title: '1' }
        ]);
        item.postfix = 'left';
        item.setVisibility(false);
        section.addItems(item);
        app.pages[2].sections.push(section);
        return app;
    };
    //Function For Generate Calculator.....
    BuilderComponent.prototype.generateCalculator = function (json, template, temp_type) {
        var _this = this;
        if (this.subDomainService.currentCompany['global_configuration'] &&
            this.subDomainService.currentCompany.global_configuration['logo_url']) {
            console.log('Updating Company Logo.....');
            var logo = this.jsonBuilderHelper.getLandingPageItemsList(json).find(function (item) { return item.type === 'logo'; });
            logo.props.title = this.subDomainService.currentCompany.global_configuration['logo_url'];
            logo.props.postfix = true;
        }
        var premade = localStorage.getItem('premade');
        var company_id = this.subDomainService.subDomain.company_id;
        json.premadeBit = premade;
        json.setCompany(company_id);
        json.setTemplateName(template);
        json.setTemplateType(temp_type);
        json.setNavigateUrl(this.getNavUrl());
        json = this.planBasedCta(json);
        this._builderService.createApp(json)
            .subscribe(function (response) {
            // FBQ event
            /*fbq('trackCustom', 'Calculator built', {
              'template': template
            })*/
            var app = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["App"]().deserialize(response);
            _this.activeSince = moment(response.createdAt).fromNow().replace('ago', '').trim();
            localStorage.setItem('project', app._id);
            localStorage.removeItem('temp_name');
            localStorage.removeItem('premade');
            // localStorage.removeItem('temp_type');
            if (localStorage.getItem('calc_name')) {
                var storageCookie = JSON.parse(_this._cookieService.readCookie('storage'));
                if (storageCookie) {
                    var name_1 = storageCookie['user'].name.split(' ')[0];
                    app.name = _this.capitalize(name_1) + "'s #" + localStorage.getItem('calc_name').split('-')[1] + " " + (app.templateType == 'Numerical' ? 'calculator' : (app.templateType == 'Poll' ? 'poll' : (app.templateType == 'Chatbot' ? 'chatbot' : 'quiz')));
                    _this.addCalcName(app);
                }
            }
            _this.emailForNewApp(app);
        }, function (error) {
            // this._router.navigate(['/dashboard']);
        });
        /*==== Intercom ====*/
        if (this.interComData) {
            this.interComData.calculators_created++;
            localStorage.setItem('icd', JSON.stringify(this.interComData));
            window.Intercom('update', this.interComData);
        }
        // this.setPublishUrl();
        /*====*/
    };
    BuilderComponent.prototype.capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    BuilderComponent.prototype.addCalcName = function (app) {
        var _this = this;
        this._builderService.updateName(app._id, app.name)
            .subscribe(function (response) {
            app.url = response.url;
            window.history.replaceState({}, '', '/builder/' + response.url);
            localStorage.removeItem('calc_name');
            _this.jsonBuilderHelper.setTemplate(app);
            _this.setPublishUrl();
            _this.setUser(_this.socket.id);
            if (app.template === 'template-seven' && !app.pages[0].visible) {
                _this.jsonBuilderHelper.setSelectedModel('Control');
            }
            else {
                _this.jsonBuilderHelper.setSelectedModel('Page');
            }
            _this.jsonBuilderHelper.devMode = true;
            _this.setShortUrl();
            _this.initializeJqueryStuff();
            _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
            //Document Title
            if (_this.jsonBuilderHelper.getJSONBuilt().name == '')
                document.title = "Outgrow | " + _this.companyName + "'s Calculator";
            else
                document.title = "Outgrow | " + _this.jsonBuilderHelper.getJSONBuilt().name;
        }, function (error) {
            console.log(error);
        });
    };
    //Do all the fixes that are to be done at builder init
    BuilderComponent.prototype.afterAppGet = function () {
        this.setPublishUrl();
        if (this.socket && this.socket.id && !(this._router.url.startsWith('/builder-demo'))) {
            this.setUser(this.socket.id);
        }
        try {
            this.jsonBuilderHelper.finalUrl_calculate();
            if (this.jsonBuilderHelper.isTempType(['Graded', 'Numerical'])) {
                var resultPage = this.jsonBuilderHelper.getJSONBuilt().pages.find(function (page) { return page.type == 'Result'; });
                var resultSection = resultPage.sections.find(function (section) { return section.type == 'Result'; });
                var leadformSection = resultPage.sections.find(function (section) { return section.type == 'LeadForm'; });
                if (resultSection.items[0].optionImageVisible) { //if conditionalCTA is ON
                    leadformSection.items.map(function (item) {
                        (['click_button', 'cta_shares', 'cta_likes'].indexOf(item.type) !== -1) && (item.visible = false);
                    });
                }
            }
        }
        catch (e) {
            console.log('result section cta fix error', e);
        }
    };
    BuilderComponent.prototype.setShortUrl = function () {
        var _this = this;
        if (!this.jsonBuilderHelper.getJSONBuilt().shortUrl) {
            this._urlShortner.bitlyShortner(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + 'live' + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION + '/seo/' + this.jsonBuilderHelper.getJSONBuilt()._id +
                '?sLead=1').subscribe(function (body) {
                _this.jsonBuilderHelper.getJSONBuilt().shortUrl = body.data.url;
            });
        }
    };
    BuilderComponent.prototype.getApp = function (data) {
        var _this = this;
        console.time('loadTimeCalc');
        var projectId = localStorage.getItem('project');
        var templateName = localStorage.getItem('temp_name');
        if (templateName) {
            this.changeTemplate(projectId, templateName);
        }
        else {
            this._builderService.getProject(data)
                .subscribe(function (response) {
                if (jQuery.isEmptyObject(response)) {
                    // this._router.navigate(['/dashboard']);
                }
                else {
                    var app = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["App"]().deserialize(response);
                    console.timeEnd('loadTimeCalc');
                    if (app.templateType === 'Numerical') {
                        app.shuffle.section = false;
                        app.shuffle.item = false;
                        app.shuffle.option = false;
                    }
                    _this.getAppStuff(app);
                    window.history.replaceState({}, '', (_this._builderService.isDemo ? '/builder-demo/' : '/builder/') + response.url);
                }
                _this.updateIntercomforPage();
            }, function (error) {
                // this._router.navigate(['/dashboard']);
            });
        }
    };
    BuilderComponent.prototype.getAppStuff = function (app) {
        this.jsonBuilderHelper.setTemplate(app);
        this.setPublishUrl();
        localStorage.setItem('project', app._id);
        console.timeEnd('loadTimeBuilder');
        if (localStorage.getItem('predefinedPallete')) {
            var pallete = JSON.parse(localStorage.getItem('predefinedPallete'));
            this.jsonBuilderHelper.getJSONBuilt().setThemeColor(pallete.themeClass);
            this.jsonBuilderHelper.getJSONBuilt().theme.componentColor = pallete.components;
            this.jsonBuilderHelper.getJSONBuilt().theme.textColor = pallete.text;
            this.jsonBuilderHelper.getJSONBuilt().theme.bgColor = pallete.backGround;
            this.themingService.setColors();
            localStorage.removeItem('predefinedPallete');
            this._builderService.saveAppSetting(this.jsonBuilderHelper.getJSONBuilt())
                .subscribe(function (data) {
            }, function (err) { return console.log('App segment error: ', err); });
        }
        if (app.template === 'template-seven' && !app.pages[0].visible) {
            this.jsonBuilderHelper.setSelectedModel('Control');
        }
        else {
            this.jsonBuilderHelper.setSelectedModel('Page');
        }
        this.jsonBuilderHelper.devMode = true;
        this.setShortUrl();
        this.afterAppGet();
        this.initializeJqueryStuff();
        this.oldCalcName = this.jsonBuilderHelper.getJSONBuilt().name;
        this.activeSince = moment(app.updatedAt).fromNow().replace('ago', '').trim();
        //getting particular AppSumo Features
        var isAppSumo = this.jsonBuilderHelper.getJSONBuilt().isAppSumoCreated;
        this._featureAuthService.getAppSumofeatures(isAppSumo);
        //Document Title
        if (this.jsonBuilderHelper.getJSONBuilt().name == '')
            document.title = "Outgrow | " + this.companyName + "'s Calculator";
        else
            document.title = "Outgrow | " + this.jsonBuilderHelper.getJSONBuilt().name;
        this.checkFeatures();
        this._redoUndoService.initRedoUndoStack();
    };
    BuilderComponent.prototype.showOverlay = function () {
        if (localStorage.getItem('intro') === 'show')
            this.intro_overlay = true;
        if (localStorage.getItem('editorIntro') === 'show' && !this.intro_overlay)
            this.editorIntro_overlay = true;
    };
    /* email entry for new app */
    BuilderComponent.prototype.emailForNewApp = function (app) {
        var storage = this.storage;
        if (app.templateType == 'Numerical') {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for using our " + app.name + " calculator.\n      Just for your record, your result was {R1}.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        else if (app.templateType == 'Recommendation') {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for completing our " + app.name + " quiz.\n      Just for your record, you got {Outcome} as your outcome.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        else if (app.templateType == 'Chatbot') {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for completing our " + app.name + " chatbot.\n      Just for your record, you got {Outcome} as your outcome.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        else if (app.templateType == 'Poll') {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for completing our " + app.name + " poll.\n      Just for your record, you got {Average_Poll_Result} as your poll score.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        else if (app.templateType == 'Ecom') {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for completing our " + app.name + " quiz.\n      Just for your record, you got {P_title_1} as your first recommended product.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        else {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for completing our " + app.name + " quiz.\n      Just for your record, you got {Score_absolute} as your score.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        var tempType = {
            'Numerical': 'calculator',
            'Recommendation': 'quiz',
            'Graded': 'quiz',
            'Poll': 'poll',
            'Ecom': 'quiz',
            'Chatbot': 'chatbot'
        };
        var gdpr = this.subDomainService.currentCompany.GDPR;
        if (gdpr) {
            emailMessage += "<br><br><br>You are receiving this email as you took the " + app.name + " " + tempType[app.templateType] + ". If at any point in time,\n      you wish to receive or delete all your information held\n      by " + this.subDomainService.subDomain.sub_domain + ", e-mail us at " + storage.user.emails[0].email + "<br>";
        }
        var calcModel = new _models_calc_email_model__WEBPACK_IMPORTED_MODULE_4__["CalcEmail"]({
            app: app._id,
            type: 'Finish',
            email: storage.user.emails[0].email,
            subject: app.name,
            message: emailMessage,
            customNotifyMail: true,
            notifyTeam: {
                sendFrom: storage.user.emails[0].email,
                subject: 'New Lead',
                message: "<p>Hey Admin,</p><p><br></p><p>You got a new lead on calculator  " + app.name + ".</p><p><br></p><p>Some of the details are:</p><p><br></p><p>Name: {fullname}</p><p>Email: {email}</p><p><br></p><p>Thanks,</p><p><br></p><p>Outgrow Team</p>",
                sendFromName: 'Outgrow'
            }
        });
        this._builderService.saveCalcEmail(calcModel)
            .subscribe(function (response) {
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.changeTemplate = function (projectId, templateName) {
        var _this = this;
        var currTemplate = localStorage.getItem('currTemplate');
        var controlArray = this.jsonBuilderHelper.templateControls(templateName);
        var sectionBasedTemplates = this.jsonBuilderHelper.componentManagerStatic('section'); // curr Temp section based?
        var sectionBasedTemplate = sectionBasedTemplates.find(function (t) { return t === currTemplate; });
        var allowedTempLJ = this.jsonBuilderHelper.editorsArray(sectionBasedTemplate ? 'sectionalLogicJump' : 'logicJump');
        var LJallowed = allowedTempLJ.find(function (t) { return t === templateName; });
        this._builderService.changeTemplate({
            projectId: projectId,
            templateName: templateName,
            currTemplate: currTemplate,
            controlArray: controlArray,
            LJallowed: LJallowed
        }).subscribe(function (response) {
            if (jQuery.isEmptyObject(response)) {
                // this._router.navigate(['/dashboard']);
            }
            else {
                var app_1 = new _builder_models__WEBPACK_IMPORTED_MODULE_10__["App"]().deserialize(response);
                if (!_this.checkForCustomTheme(app_1, currTemplate)) {
                    var themePalettes = _this._jsonElementService.gettemplatePalettes(templateName);
                    themePalettes.pallete = themePalettes.pallete.filter(function (pal) { return pal.subType.indexOf(app_1.templateType) >= 0; });
                    localStorage.setItem('predefinedPallete', JSON.stringify(themePalettes.pallete[0]));
                }
                localStorage.removeItem('changeTemplate');
                localStorage.removeItem('temp_type');
                localStorage.removeItem('temp_name');
                window.location.reload(true);
            }
        }, function (error) {
            // this._router.navigate(['/dashboard']);
        });
    };
    BuilderComponent.prototype.openLeadEditor = function (event) {
        if (['experian'].indexOf(this.jsonBuilderHelper.getJSONBuilt().template) >= 0) {
            if (this.jsonBuilderHelper.getSelectedPage().type !== 'Landing' && this.jsonBuilderHelper.getJSONBuilt().pages[0].visible) {
                this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getJSONBuilt().pages[0]);
                this.scrollIt('.page_0', 'Landing');
            }
            else if (!this.jsonBuilderHelper.getJSONBuilt().pages[0].visible) {
                bootbox.dialog({
                    size: 'small',
                    message: "\n                      <div class=\"bootbox-body-left\">\n                          <div class=\"mat-icon\">\n                              <i class=\"material-icons\">error</i>\n                          </div>\n                      </div>\n                      <div class=\"bootbox-body-right\">\n                          <p class=\"\">The lead generation form is only supported on the welcome screen for this template. Turn on the welcome screen for the lead generation form.</p>\n                      </div>\n              ",
                    buttons: {
                        cancel: {
                            label: "Cancel",
                            className: "btn-cancel btn-cancel-hover"
                        }
                    }
                });
                return;
            }
        }
        var data = this.jsonBuilderHelper.getVisibleLeadForm();
        if (['sound-cloud', 'sound-cloud-new', 'sound-cloud-v3', 'template-seven'].indexOf(this.jsonBuilderHelper.getJSONBuilt().template) >= 0) {
            if (this.jsonBuilderHelper.getSelectedPage().type === 'Questionnaire' && jQuery.isEmptyObject(data['page'][0])) {
                return;
            }
        }
        console.log("safafesgrvfdsgdsegea", data);
        if (!jQuery.isEmptyObject(data['page'][0])) {
            var sec = void 0, it = void 0;
            if (this.jsonBuilderHelper.getJSONBuilt().multiLeadAllow && this.jsonBuilderHelper.getSelectedControl() && this.jsonBuilderHelper.getSelectedControl().type == 'leadform_question') {
                sec = this.jsonBuilderHelper.getSelectedSection();
                it = this.jsonBuilderHelper.getSelectedControl();
            }
            this.jsonBuilderHelper.setSelectedPage(data['page'][0]);
            this.jsonBuilderHelper.setSelectedSection(data['section'][0]);
            this.jsonBuilderHelper.setSelectedModel('Section');
            if (this.jsonBuilderHelper.getJSONBuilt().multiLeadAllow && data.page[0].type === 'Questionnaire') {
                if (this.jsonBuilderHelper.getSelectedControl() && this.jsonBuilderHelper.getSelectedControl().type == 'leadform_question') {
                    this.jsonBuilderHelper.setSelectedModel('Control');
                }
                else {
                    for (var _i = 0, _a = data.page[0].sections; _i < _a.length; _i++) {
                        var section = _a[_i];
                        if (section.visible) {
                            for (var _b = 0, _c = section.items; _b < _c.length; _b++) {
                                var item = _c[_b];
                                if (item.type === 'leadform_question' && item.visible) {
                                    it = item;
                                    sec = section;
                                    this.jsonBuilderHelper.setSelectedSection(section);
                                    this.jsonBuilderHelper.setSelectedControl(item);
                                    this.jsonBuilderHelper.setSelectedModel('Control');
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            if (data['page'][0].type === 'Questionnaire') {
                if (this.jsonBuilderHelper.getJSONBuilt().multiLeadAllow && sec) {
                    this.scrollIt('.sec_' + (data['page'][0].sections.indexOf(sec) + '_q_' + sec.items.indexOf(it)));
                }
                else {
                    this.scrollIt('.sec_' + (data['page'][0].sections.length - 1));
                }
            }
            else if (data['page'][0].type === 'Landing') {
                this.scrollIt('.page_0', data['page'][0].type);
            }
            else {
                if (this.jsonBuilderHelper.getPage('Landing').visible) {
                    this.scrollIt('.page_2', data['page'][0].type);
                }
                else {
                    this.scrollIt('.page_1', data['page'][0].type);
                }
            }
        }
        else {
            this.jsonBuilderHelper.setSelectedSection(this.getLeadSection());
            this.jsonBuilderHelper.setSelectedModel('Section');
            // event.stopPropagation();
            // event.preventDefault();
        }
    };
    BuilderComponent.prototype.getLeadSection = function () {
        if (this.jsonBuilderHelper.getSelectedPage().type == 'Questionnaire')
            this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getPage('Result'));
        for (var _i = 0, _a = this.jsonBuilderHelper.getSelectedPage().sections; _i < _a.length; _i++) {
            var section = _a[_i];
            if (section.type === 'LeadFormQ' || section.type === 'LeadForm' || section.type === 'Content Area') {
                return section;
            }
        }
    };
    BuilderComponent.prototype.scrollIt = function (bindingClass1, event) {
        if (jQuery(bindingClass1).length) {
            var position = 0;
            var templateHeight = 0;
            var zoomFactor = 1;
            var topVal = 0;
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                var tHeight = -150;
            }
            else {
                zoomFactor = jQuery('temp-dev').css('zoom');
                tHeight = 80;
            }
            if (jQuery('.sound-cloud').length > 0) {
                // for template sound-cloud
                jQuery('.sound-cloud').addClass('template2');
                console.log(bindingClass1, 'bindingClass1');
                if (bindingClass1 === ".page_0") {
                    templateHeight = -jQuery(bindingClass1).position().top;
                }
                else if (bindingClass1 == ".page_1") {
                    templateHeight = jQuery('.template2').height();
                }
                else {
                    templateHeight = jQuery('.template2').height() + tHeight;
                }
                //console.log(templateHeight);
                position = jQuery(bindingClass1).position().top + templateHeight;
                //console.log('position', position);
                jQuery('.template-section').animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery('.template-section').clearQueue();
                });
            }
            else if (jQuery('.sound-cloud-new').length > 0 || jQuery('.sound-cloud-v3').length > 0 || jQuery('.template-seven').length > 0) {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    var tHeight = -150;
                }
                else {
                    zoomFactor = jQuery('temp-dev').css('zoom');
                    tHeight = 30;
                }
                // for template sound-cloud
                jQuery('.sound-cloud-new').addClass('template2');
                jQuery('.sound-cloud-v3').addClass('template2');
                jQuery('.template-seven').addClass('template2');
                if (bindingClass1 === ".page_0") {
                    templateHeight = -jQuery(bindingClass1).position().top;
                }
                else if (bindingClass1 == ".page_1") {
                    templateHeight = jQuery('.template2').height();
                }
                else {
                    templateHeight = jQuery('.template2').height() + tHeight;
                }
                //console.log(templateHeight);
                position = jQuery(bindingClass1).position().top + templateHeight;
                //console.log('position', position);
                jQuery('.template-section').animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery('.template-section').clearQueue();
                });
            }
            else if (['one-page-slider', 'one-page-card', 'one-page-card-new', 'template-nine', 'template-ten', 'one-page-card-oldresult', 'inline-temp', 'inline-temp-new', 'experian', 'template-five', 'template-five-oldresult', 'template-six', 'template-eight'].indexOf(this.jsonBuilderHelper.getJSONBuilt().template) >= 0) {
                // get postiion of div
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    var tHeight = -190;
                }
                else {
                    tHeight = 0;
                }
                // templateHeight = jQuery('.editor-page-divider').height();
                if (jQuery('.t1-landing').length > 0) {
                    templateHeight = jQuery('.t1-landing').height() + tHeight;
                }
                else {
                    templateHeight = 0;
                }
                if (bindingClass1 == ".page_0") {
                    templateHeight = -jQuery(bindingClass1).position().top;
                }
                else if (bindingClass1 == ".page_1") {
                    templateHeight = 0;
                }
                if (this.jsonBuilderHelper.isTempName(['template-nine']) && (bindingClass1 == ".page_2" || (!this.jsonBuilderHelper.getPage('Landing').visible && bindingClass1 == ".page_1"))) {
                    bindingClass1 = '.editor-page-divider.Result';
                }
                if (['template-five', 'template-five-oldresult', 'experian', 'template-nine'].indexOf(this.jsonBuilderHelper.getJSONBuilt().template) >= 0 && bindingClass1[7] == 'q') {
                    templateHeight = templateHeight + jQuery(bindingClass1.substr(0, 6)).position().top;
                }
                if (['template-eight'].indexOf(this.jsonBuilderHelper.getJSONBuilt().template) >= 0 && bindingClass1.split('_')[0] == '.sec') {
                    bindingClass1 = bindingClass1 + '_q_0';
                }
                if (bindingClass1 != ".page_0" && this.jsonBuilderHelper.getJSONBuilt().template === 'template-ten') {
                    templateHeight = 80;
                }
                position = jQuery(bindingClass1).position().top + templateHeight;
                jQuery('.template-section').animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery('.template-section').clearQueue();
                });
            }
        }
    };
    BuilderComponent.prototype.selectPage = function () {
        if (this.jsonBuilderHelper.getSelectedPage().type === 'Questionnaire') {
            this.jsonBuilderHelper.setSelectedControl(this.jsonBuilderHelper.getQuestionsList()[0]);
            this.jsonBuilderHelper.setSelectedModel('Control');
            this.jsonBuilderHelper.setSelectedSection(this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[0]);
            this.scrollIt('.page_1', 'Questionnaire');
        }
        else {
            this.jsonBuilderHelper.setSelectedModel('Page');
        }
    };
    BuilderComponent.prototype.showNextImages = function () {
        var count = 0;
        for (var image in this.imgContainer) {
            if (!this.imgContainer[image].visible && count < 12) {
                this.imgContainer[image].visible = true;
                count++;
            }
        }
    };
    BuilderComponent.prototype.isLoadMoreButton = function () {
        for (var _i = 0, _a = this.imgContainer; _i < _a.length; _i++) {
            var image = _a[_i];
            if (!image.visible)
                return true;
        }
        return false;
    };
    BuilderComponent.prototype.initializeJqueryStuff = function () {
        var _this = this;
        // get dev app for config
        this.getDevAppConfig();
        // If Type Ecom then select tab as product
        if (this.jsonBuilderHelper.isTempType(['Ecom']))
            this.selectedSec = 'product_list';
        this.previousJson = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        setTimeout(function () { return _this.startAutoSave = true; }, 2000);
        var self = this;
        jQuery(window).on("resize", function () {
            if (jQuery(window).width() > 767 && jQuery('.editor-sidebar').css('display') == 'none') {
                jQuery('.editor-sidebar').css('display', 'block');
            }
        });
        // jQuery(document).on('click', '#preview_calc', () => this.onPreview());
        // jQuery('.live-url1').on('click', () => {
        //   let self = this;
        //   new Clipboard('.live-url1', {
        //     text: function (trigger) {
        //       return self.srcUrl;
        //     }
        //   });
        //   window.toastNotification('Copied to Clipboard');
        // });
        jQuery(document).on('click', '.live-url2', function (e) {
            var textField = document.createElement('textarea');
            textField.innerText = self.srcUrl;
            document.body.appendChild(textField);
            textField.select();
            textField.focus();
            document.execCommand('copy');
            textField.remove();
            self.copied = true;
            window.toastNotification('Copied to Clipboard');
        });
        jQuery(document).on('click', '#list_share1', function (e) {
            jQuery('.tab-content.custom-tab-content .head-top h3').text('Share this public URL');
            jQuery('#needMore').addClass('hide');
            jQuery('.tab-content.custom-tab-content .head-top .help-link').addClass('hide');
        });
        jQuery(document).on('click', '#list_website1', function (e) {
            jQuery('#needMore').removeClass('hide');
            jQuery('.tab-content.custom-tab-content .head-top .help-link').removeClass('hide');
            jQuery('.tab-content.custom-tab-content .head-top h3').text('Use this code');
        });
        jQuery(document).on('click', '#copyUrl', function (e) {
            var textField = document.createElement('textarea');
            if (jQuery('#list_website1').hasClass('active')) {
                textField.innerText = "" + self.fullPageCode + (self.jsonBuilderHelper.getJSONBuilt().fbComments ? self.fbCommentsCode : '');
                setTimeout(function () {
                    var parEl = document.getElementById('website1');
                    var el = parEl.getElementsByClassName('embed-code-outer')[0];
                    var range = document.createRange();
                    range.selectNodeContents(el);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                }, 100);
            }
            else {
                textField.innerText = self.srcUrl;
            }
            document.body.appendChild(textField);
            textField.select();
            textField.focus();
            document.execCommand('copy');
            textField.remove();
            self.copied = true;
            window.toastNotification('Copied to Clipboard');
        });
        if (this.jsonBuilderHelper.isTempType(['Recommendation', 'Chatbot']))
            this.recommendationService.getRecomendedResult();
        if (localStorage.getItem('tab-selected')) {
            this.selectedSec = localStorage.getItem('tab-selected');
            localStorage.removeItem('tab-selected');
        }
        if (this.imgContainer) {
            var template_name = this.jsonBuilderHelper.getJSONBuilt().template.replace(/-/g, '_');
            if (template_name == 'template_six') {
                this.imgContainer = _models_templateImages_store__WEBPACK_IMPORTED_MODULE_17__["TEMPLATE_IMAGES"][template_name];
            }
            else {
                this.imgContainer = _models_templateImages_store__WEBPACK_IMPORTED_MODULE_17__["TEMPLATE_IMAGES"]['common_images'];
            }
        }
        jQuery(document).on('click', '.tag_delete', function (e) {
            e.preventDefault();
            var txtArea = jQuery(this).parents('.fr-box');
            if (txtArea) {
                jQuery(this).parent().remove();
                jQuery(txtArea).froalaEditor('events.focus');
                jQuery('#wysiwyg-blur-button').focus();
            }
        });
        jQuery(document).on('click', '#promo-link', function (e) {
            e.preventDefault();
            self.gotoPromotionList();
        });
        jQuery(document).on('click', '#redirectToConfig', function (e) {
            self.redirectToConfig();
        });
        if (['allyssa@ssdigitalmedia.com', 'rakesh.soni@venturepact.com', 'michael@ssdigitalmedia.com', 'iolgart@seniorvillages.com', 'JRestum@csig.com'].indexOf(this.storage.user.emails[0].email) !== -1)
            this.selectedSec = 'config';
        if (!this.jsonBuilderHelper.isTempType(['Ecom']))
            this.showOverlay();
    };
    //Jquery Function To angular function
    BuilderComponent.prototype.previwCopy = function () {
        // clipboard.copy(this.srcUrl);
        if (this.jsonBuilderHelper.isClipboardSupported) {
            var self_1 = this;
            // new Clipboard('.cpy_link', {
            //   text: function (trigger) {
            //     console.log('in copy ', self.srcUrl)
            //     return self.srcUrl;
            //   }
            // });
            // window.toastNotification('Copied to Clipboard');
        }
    };
    BuilderComponent.prototype.toggleProperties = function () {
        var container = jQuery('#sidebar');
        var zoomFactor = 1;
        var minWinWidth = jQuery(window).width() - 575;
        if (container.hasClass('properties-close')) {
            container.animate({ right: "0px", easing: 'linear' }, 300);
            if (jQuery(window).width() > 1850) {
                var zoomFactor = 0.78;
            }
            else if (jQuery(window).width() > 992) {
                var zoomFactor = 0.7;
            }
            container.removeClass('properties-close');
            this.propertiesHidden = false;
            if (jQuery(window).width() < 992) {
                minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp-dev").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp-dev").css('zoom', zoomFactor);
            }
        }
        else {
            var minWinWidth = jQuery(window).width() - 275;
            if (jQuery(window).width() > 1850) {
                zoomFactor = 0.97;
            }
            else if (jQuery(window).width() > 992) {
                var zoomFactor = 0.93;
            }
            container.animate({ right: "-300px", easing: 'linear' }, 300);
            container.addClass('properties-close');
            this.propertiesHidden = true;
            /* for canvas horizontal scroll */
            if (jQuery(window).width() < 992) {
                minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
                jQuery("temp-dev").css('transform', 'scale(' + zoomFactor + ')');
            else
                jQuery("temp-dev").css('zoom', zoomFactor);
            jQuery(".template-section").css('overflow-x', "hidden");
        }
    };
    BuilderComponent.prototype.openProperties = function () {
        var container = jQuery('#sidebar');
        var zoomFactor = 1;
        var minWinWidth = jQuery(window).width() - 575;
        if (container.hasClass('properties-close')) {
            container.animate({ right: "0px", easing: 'linear' }, 300);
            if (jQuery(window).width() > 1850) {
                var zoomFactor = 0.78;
            }
            else if (jQuery(window).width() > 992) {
                var zoomFactor = 0.7;
            }
            container.removeClass('properties-close');
            this.propertiesHidden = false;
            if (jQuery(window).width() < 992)
                minWinWidth = jQuery(window).width() - 20;
            jQuery(".template-section").css('width', minWinWidth);
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
                jQuery("temp-dev").css('transform', 'scale(' + zoomFactor + ')');
            else
                jQuery("temp-dev").css('zoom', zoomFactor);
        }
    };
    BuilderComponent.prototype.openGlobalSettings = function () {
        this._featureAuthService.setSelectedFeature('custom_styling');
        if (this._featureAuthService.features.custom_styling.active)
            this.jsonBuilderHelper.setSelectedModel('Global_Settings');
        else {
            jQuery('.custom_styling').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    BuilderComponent.prototype.openUtm = function () {
        this._featureAuthService.setSelectedFeature('custom_styling');
        if (this._featureAuthService.features.custom_styling.active)
            this.jsonBuilderHelper.setSelectedModel('Editor_Utm');
    };
    BuilderComponent.prototype.openMobileProperties = function () {
        var container = jQuery('#sidebar');
        container.animate({
            right: "0px",
            easing: 'linear'
        }, 300);
        /* for canvas horizontal scroll */
        var minWinWidth = jQuery(window).width() - 20;
        jQuery(".template-section").animate({ width: minWinWidth }, 300);
        jQuery(".template-section").css('overflow-x', "hidden");
        jQuery('.mobile-prop-cross-icon').css('display', 'block');
        jQuery('.properties-modal-backdrop').css('display', 'block').addClass('fade in');
    };
    BuilderComponent.prototype.onPreview = function () {
        this.assignDefaultValueToOptions();
        this.jsonBuilderHelper.updateGradedFormula();
        var json = this.jsonBuilderHelper.getJSONBuilt();
        localStorage.removeItem('template');
        localStorage.setItem('calc', json._id);
        localStorage.setItem('template', JSON.stringify(json));
        window.open(this._builderService.isDemo ? '/preview-demo' : '/preview', '_blank');
    };
    BuilderComponent.prototype.isPublishable = function () {
        var d = this.jsonBuilderHelper.getJSONBuilt().template;
        return (!this._featureAuthService.features.templates[d.split('-').join('_')]) ? false : true;
    };
    BuilderComponent.prototype.premiumPopup = function () {
        jQuery('#premiumModal').modal('show');
        jQuery('.modal-backdrop').insertAfter('#premiumModal');
    };
    BuilderComponent.prototype.onPublish = function ($event) {
        var _this = this;
        var tempType = this.jsonBuilderHelper.getJSONBuilt().templateType.toLowerCase();
        if (!this._featureAuthService.features.experiences[tempType]) {
            this._featureAuthService.setSelectedFeature('experiences', tempType);
            this.premiumPopup();
            // } else if (tempType == 'Recommendation') {
            //   this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            //   this.premiumPopup();
            // } else if (tempType == 'Graded') {
            //   this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            //   this.premiumPopup();
            // } else if (tempType == 'Poll') {
            //   this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            //   this.premiumPopup();
        }
        else {
            if (!this.isPublishable()) {
                var ttype = this.jsonBuilderHelper.getJSONBuilt().template.split('-'); //.join('_');
                if (ttype[ttype.length - 1] === 'new' || ttype[ttype.length - 1] === 'v3') {
                    ttype.pop();
                }
                var type = ttype.join('_');
                this._featureAuthService.setSelectedFeature('templates', type);
                jQuery('.templates').addClass('activegreen limited-label');
                this.premiumPopup();
                return;
            }
            if (this._builderService.isDemo)
                return;
            /** for grade formula update */
            this.jsonBuilderHelper.updateGradedFormula();
            var that_1 = this;
            var errorResults = '';
            if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
                errorResults = this.formulaService.checkIfFormulaWouldGiveSyntaxError();
            switch (true) {
                case (!this.jsonBuilderHelper.getJSONBuilt().url.length): {
                    bootbox.dialog({
                        closeButton: false,
                        message: "\n                      <div class=\"bootbox-body-left\">\n                          <div class=\"mat-icon\">\n                             <i class=\"material-icons\">error</i>\n                          </div>\n                      </div>\n                      <div class=\"bootbox-body-right\">\n                         <p>The calculator can't go live without a name!</p>\n                         <p>Think of something interesting that would attract attention!</p>\n                      </div>\n                  ",
                        buttons: {
                            success: {
                                label: "OK",
                                className: "btn btn-ok btn-hover",
                                callback: function () {
                                    jQuery('#myonoffswitch').attr('checked', false);
                                }
                            }
                        }
                    });
                    break;
                }
                case (!this.checkResultConditions() && this.jsonBuilderHelper.isTempType(['Numerical', 'Graded', 'Poll'])): {
                    var html = "";
                    for (var key in this.emptyConditions) {
                        html = html + "Condition ";
                        for (var subKey in this.emptyConditions[key]) {
                            html = html + this.emptyConditions[key][subKey] + (((Number(subKey) + 1) == this.emptyConditions[key].length) ? "" : ", ");
                        }
                        html = html + " of Result " + key + "<br/>";
                    }
                    bootbox.dialog({
                        closeButton: false,
                        message: "\n                      <div class=\"bootbox-body-left\">\n                          <div class=\"mat-icon\">\n                             <i class=\"material-icons\">error</i>\n                          </div>\n                      </div>\n                      <div class=\"bootbox-body-right\">\n                         <p>Please specify upper bound and lower bound for the result conditions.</p>\n                         <p>Empty Conditions:<br/>\n                         " + html + "</p>\n                      </div>\n                  ",
                        buttons: {
                            success: {
                                label: "OK",
                                className: "btn btn-ok btn-hover",
                                callback: function () {
                                    jQuery('#myonoffswitch').attr('checked', false);
                                }
                            }
                        }
                    });
                    break;
                }
                case (!this.checkPollQuestions() && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Poll'): {
                    bootbox.dialog({
                        closeButton: false,
                        message: "\n                      <div class=\"bootbox-body-left\">\n                          <div class=\"mat-icon\">\n                             <i class=\"material-icons\">error</i>\n                          </div>\n                      </div>\n                      <div class=\"bootbox-body-right\">\n                         <p>Atleast one single select type of question is required for polls.</p>\n                      </div>\n                  ",
                        buttons: {
                            success: {
                                label: "OK",
                                className: "btn btn-ok btn-hover",
                                callback: function () {
                                    jQuery('#myonoffswitch').attr('checked', false);
                                }
                            }
                        }
                    });
                    break;
                }
                case (!this.checkResultConditionsValidation() && this.jsonBuilderHelper.isTempType(['Numerical', 'Graded', 'Poll'])): {
                    var html = "";
                    for (var key in this.invalidConditions) {
                        html = html + "Condition ";
                        for (var subKey in this.invalidConditions[key]) {
                            html = html + this.invalidConditions[key][subKey] + (((Number(subKey) + 1) == this.invalidConditions[key].length) ? "" : ", ");
                        }
                        html = html + " of Result " + key + "<br/>";
                    }
                    bootbox.dialog({
                        closeButton: false,
                        message: "\n                      <div class=\"bootbox-body-left\">\n                          <div class=\"mat-icon\">\n                             <i class=\"material-icons\">error</i>\n                          </div>\n                      </div>\n                      <div class=\"bootbox-body-right\">\n                         <p>It looks like some of your result conditions are incorrect. Please fix those to continue.</p>\n                         Invalid conditions:\n                         <p>" + html + "<p>\n                      </div>\n                  ",
                        buttons: {
                            success: {
                                label: "OK",
                                className: "btn btn-ok btn-hover",
                                callback: function () {
                                    _this.jsonBuilderHelper.setSelectedModel('Page');
                                    _this.jsonBuilderHelper.setSelectedPage(_this.jsonBuilderHelper.getJSONBuilt().pages[2]);
                                    _this.scrollIt('.page_2', 'Result');
                                    // jQuery('#myonoffswitch').attr('checked', false);
                                }
                            }
                        }
                    });
                    break;
                }
                case (errorResults != '' && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical'): {
                    bootbox.confirm({
                        size: 'small',
                        message: "\n                      <div class=\"bootbox-body-left\">\n                          <div class=\"mat-icon\">\n                             <i class=\"material-icons\">error</i>\n                          </div>\n                      </div>\n                      <div class=\"bootbox-body-right\">\n                         <p>Since you edited the questions, you should consider <br/> revising the formula with the new updates.</p>\n                      </div>\n                  ",
                        // There are mistakes in ' + errorResults + '
                        buttons: {
                            'cancel': {
                                label: 'Revise Formula',
                                className: 'btn btn-cancel btn-cancel-hover'
                            },
                            'confirm': {
                                label: 'Continue Anyway',
                                className: 'btn btn-ok btn-hover'
                            }
                        },
                        callback: function (result) {
                            if (result === true) {
                                that_1.Publish($event);
                            }
                        }
                    });
                    break;
                }
                case (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical' && this.formulaService.getAllInvalidFormulas() != undefined): {
                    this.formulaService.correctAll();
                    this.Publish($event);
                    break;
                }
                default:
                    this.Publish($event);
            }
        }
    };
    BuilderComponent.prototype.changeTitleDesc = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().title == 'Outgrow')
            this.jsonBuilderHelper.getJSONBuilt().title = this.jsonBuilderHelper.getLandingPageHeading('main-heading');
        if (this.jsonBuilderHelper.getJSONBuilt().description == 'Default Meta Description')
            this.jsonBuilderHelper.getJSONBuilt().description = this.jsonBuilderHelper.getLandingPageHeading('sub-heading');
        //updating CTA SHARES Default Text for Numerical.
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            var resultPage = this.jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Result'; });
            if (resultPage) {
                var leadformSection = resultPage[0].sections.filter(function (section) { return section.type == 'LeadForm'; });
                if (leadformSection) {
                    var ctaShares = leadformSection[0].items.filter(function (item) { return item.type == 'cta_shares'; });
                    if (ctaShares.length) {
                        ctaShares[0].options.map(function (option) {
                            if (!_this._featureAuthService.features.custom_branding.share_text) {
                                if (jQuery('<textarea/>').html(option.label.replace(/<(?:.|\n)*?>/gm, '')).text().trim() == _this.jsonBuilderHelper.getDefault('lpHeading') + ' | via @outgrowco')
                                    option.label = _this.jsonBuilderHelper.getLandingPageHeading('main-heading') + ' | via @outgtrowco';
                            }
                            else {
                                if (jQuery('<textarea/>').html(option.label.replace(/<(?:.|\n)*?>/gm, '')).text().trim() == _this.jsonBuilderHelper.getDefault('lpHeading'))
                                    option.label = _this.jsonBuilderHelper.getLandingPageHeading('main-heading');
                            }
                            if (jQuery('<textarea/>').html(option.icon.replace(/<(?:.|\n)*?>/gm, '')).text().trim() == _this.jsonBuilderHelper.getDefault('lpSubHeading'))
                                option.icon = _this.jsonBuilderHelper.getLandingPageHeading('sub-heading');
                        });
                    }
                }
            }
        }
        //updating CTA SHARES Default Text for Recom.
        if (this.jsonBuilderHelper.isTempType(['Recommendation', 'Chatbot'])) {
            this.jsonBuilderHelper.getJSONBuilt().formula.map(function (formula) {
                if (formula.length) {
                    var links = formula.links.filter(function (link) { return link.type == 'share'; });
                    if (links.length) {
                        links.map(function (link) {
                            if (!_this._featureAuthService.features.custom_branding.share_text) {
                                if (link.title == 'Outgrow | via @outgrowco' || link.title == '')
                                    link.title = _this.jsonBuilderHelper.getLandingPageHeading('main-heading') + ' | via @outgrowco';
                            }
                            else {
                                if (link.title == 'Outgrow' || link.title == '')
                                    link.title = _this.jsonBuilderHelper.getLandingPageHeading('main-heading');
                            }
                            if (link.description == 'Default Meta Description' || link.description == '')
                                link.description = _this.jsonBuilderHelper.getLandingPageHeading('sub-heading');
                        });
                    }
                }
            });
        }
    };
    BuilderComponent.prototype.Publish = function ($event) {
        var _this = this;
        var self = this;
        this.assignDefaultValueToOptions();
        var button = jQuery($event.target);
        this.beingPublished = true;
        this.jsonBuilderHelper.commonEmitter.emit({ beingPublished: true });
        this.changeTitleDesc();
        this._builderService.publishApp({
            id: this.jsonBuilderHelper.getJSONBuilt()._id,
            url: this.jsonBuilderHelper.getJSONBuilt().url,
            features: { _LJ: this._featureAuthService.features.logic_jump.active },
            unsaved: this._itemTrackService.getUnSavedData(),
            q_logicType: this.jsonBuilderHelper.editors('logicJump'),
            /* screenshot */
            socket_id: this.jsonBuilderHelper.getJSONBuilt().socket_id
        })
            .subscribe(function (response) {
            // FBQ event
            /*fbq('trackCustom', 'Calculator Published');*/
            if (jQuery.isEmptyObject(response)) {
                // this._router.navigate(['/dashboard']);
            }
            else {
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Publish');
                _this.callGA('LIVEDONE');
                console.log('this.jsonBuilderHelper.getJSONBuilt().modev ', _this.jsonBuilderHelper.getJSONBuilt().mode);
                if (_this.jsonBuilderHelper.getJSONBuilt().mode === 'PRIVATE') {
                    _this.jsonBuilderHelper.getJSONBuilt().mode = 'PUBLIC';
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN)
                        _this.srcUrl = _this.jsonBuilderHelper.getJSONBuilt().template === 'template-ten' ? _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt()._id : _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt().url;
                    else
                        _this.srcUrl = _this.jsonBuilderHelper.getJSONBuilt().template === 'template-ten' ? _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt()._id : _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt().url;
                    // this.srcUrl = environment.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + environment.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
                    _this.bootboxText = "Your " + _this.publishPopUpText() + " Is Now Live";
                    // if (this.subscription_status === 'in_trial') {
                    _this.showCongoMessage = true;
                    setTimeout(function () {
                        self.confettiInit();
                    }, 1000);
                    _this.prepareModalData();
                    jQuery('#publish-upgrade').modal('show');
                    // } else {
                    //   this.showCongoMessage = true;
                    //   this.prepareModalData();
                    //   let showCode = (this.fullPageCode + (this.jsonBuilderHelper.getJSONBuilt().fbComments ? this.fbCommentsCode : ''));
                    //   let copyLinkBtn = (typeof Clipboard.isSupported == "function" && Clipboard.isSupported()) ? `<div class="col-sm-3 cpy-btn preview_copy" id="live-url-container">
                    // <a class="live-url live-url2">Copy Link</a></div>`: ``;
                    //   let self = this;
                    //   bootbox.dialog({
                    //     backdrop: 'static',
                    //     keyboard: false,
                    //     message: `
                    //                <div class="text-center live-modal custom-width">
                    //                     <span class="icon-play-next">
                    //                       <div class="icon icon--order-success svg">
                    //                           <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px">
                    //                               <g fill="none" stroke="#2ebf27" stroke-width="2">
                    //                               <circle cx="22" cy="22" r="21" style="stroke-dasharray:220px, 220px; stroke-dashoffset: 480px;"></circle>
                    //                               <path d="M10.417,24.778 l6.93,5.909 l 16.444 -16.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                    //                               </g>
                    //                           </svg>
                    //                       </div>
                    //                     </span>
                    //                     <div class="live-head">` + this.bootboxText + `</div>
                    //                     <img class="img-style hide" src="assets/images/goLivePopup.png"/>
                    //                     <div class="">
                    //                         <div class="live-subhead link-style hide">
                    //                           <div class="col-sm-9 cpy-txt">
                    //                               <span class="share-head">
                    //                                   Share this URL :
                    //                               </span>
                    //                           </div>
                    //                           `+ copyLinkBtn + `
                    //                         </div>
                    //                         <div class="live-subhead selected-link hide">
                    //                             <span class="hide">Your public calculator can be viewed here:</span>
                    //                             <div class="live-url url-style">` + this.srcUrl + `</div>
                    //                         </div>
                    //                         <div class="promo-tip hide">
                    //                           <div class="red-bar">
                    //                               <i class="material-icons">lightbulb_outline</i>
                    //                           </div>
                    //                           <span>
                    //                               TIP: Use our promotional checklist to maximize traffic to your Calculator/Quiz.
                    //                                <a href="javascript:void(0);" id="promo-link" data-dismiss="modal" class="text-red">Go to Promotion Checklist</a>
                    //                           </span>
                    //                         </div>
                    //                         <div class="custom-tabs-outer">
                    //                             <ul class="nav nav-tabs">
                    //                               <li id="list_share1" class="active share1"><a data-toggle="tab" href="#share1" class="share-icon"><div class="tab-icons">&nbsp;</div>Share</a></li>
                    //                               <li class="website1" id="list_website1"><a data-toggle="tab" href="#website1" class="web-icon"><div class="tab-icons">&nbsp;</div>EMBED ON YOUR WEBSITE</a></li>
                    //                               <li class="hide"><a data-toggle="tab" href="#articles1" class="article-icon"><div class="tab-icons">&nbsp;</div>Instant Articles</a></li>
                    //                               <li><a data-toggle="tab" href="#amp1" class="amp-icon hide"><div class="tab-icons">&nbsp;</div>Google AMP</a></li>
                    //                             </ul>
                    //                             <div class="tab-content custom-tab-content">
                    //                               <div class="head-top">
                    //                                 <h3>Use this code</h3>
                    //                                 <div class="help-tip">
                    //                                   <a class="help-link" href="https://support.outgrow.co/docs/embedding-basics" target="_blank"><span>?</span></a>
                    //                                   <div class="help-checktip live-link-help">Help</div>
                    //                                 </div>
                    //                               </div>
                    //                               <div id="website1" class="tab-pane fade">
                    //                                 <div class="embed-code-outer"></div>
                    //                               </div>
                    //                               <div id="articles1" class="tab-pane fade">
                    //                                 <div class="embed-code-outer">
                    //                                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    //                                 </div>
                    //                               </div>
                    //                               <div id="amp1" class="tab-pane fade">
                    //                                 <div class="embed-code-outer">
                    //                                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    //                                 </div>
                    //                               </div>
                    //                               <div id="share1" class="tab-pane fade in active">
                    //                                 <div class="embed-code-outer">
                    //                                   <div class="live-url url-style">${this.srcUrl}</div>
                    //                                 </div>
                    //                               </div>
                    //                             </div>
                    //                         </div>
                    //                         <div class="col-sm-3 preview_copy copy-btn-new">
                    //                           <div class="col-xs-9 np help-outer">
                    //                           <div class="" id="needMore">Need more options?
                    //                             <a href="javascript:void(0);" id="redirectToConfig">Click here</a>
                    //                           </div>
                    //                           </div>
                    //                           <div class="copy-new col-xs-3 np">
                    //                             <a class="live-url live-url1" id="copyUrl" href="javascript:void(0)">Copy</a>
                    //                           </div>
                    //                         </div>
                    //                         <div class="promo-link">
                    //                           <a class="text-red" data-dismiss="modal" href="javascript:void(0);" id="promo-link">Go to Promotion Checklist</a>
                    //                         </div>
                    //                         <div class="col-md-12 np text-right">
                    //                           <!--<a class="text-cancel" data-dismiss="modal" aria-label="Close">Cancel</a>-->
                    //                           <!--<a (click)="closeCongoMessage()" class="btn-done" data-dismiss="modal">Done</a>-->
                    //                         </div>
                    //                         <!--<img src="assets/images/gocopyPopup.png"/>-->
                    //                        <!-- <div class="footer-border"></div>
                    //                         <div class="like-button-outer" >
                    //                         <div class="small-sec">Like us on Facebook</div>
                    //                         <div class="small-sec">
                    //                      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Foutgrowco&width=122&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId" width="122" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>                                </div>
                    //                     </div>
                    //                     </div>-->
                    //                     <div class="table-responsive hide">
                    //                         <table class="table">
                    //                             <thead>
                    //                                 <tr>
                    //                                     <th>
                    //                                         <div class="live-subhead link-style">
                    //                                             <span>
                    //                                                 To preview, open this link in another browser.
                    //                                             </span>
                    //                                             <a class="live-url preview_copy">Copy Link</a>
                    //                                         </div>
                    //                                     </th>
                    //                                 </tr>
                    //                             </thead>
                    //                             <tbody>
                    //                                 <tr>
                    //                                     <td>
                    //                                         <div class="live-subhead">
                    //                                             <span class="hide">Your public calculator can be viewed here:</span>
                    //                                             <div class="live-url url-style">` + this.srcUrl + `</div>
                    //                                         </div>
                    //                                     </td>
                    //                                 </tr>
                    //                             </tbody>
                    //                         </table>
                    //                     </div>
                    //                 </div>
                    //                 `,
                    //     buttons: {
                    //       myButton1: {
                    //         label: "<i class='material-icons'>close</i>",
                    //         className: "bootbox-close-button close",
                    //         callback: function () {
                    //           jQuery('.editor-modal').removeClass('golive-popup');
                    //           self.closeCongoMessage()
                    //         }
                    //       },
                    //       // myButton2: {
                    //       //   label: "Done",
                    //       //   className: "btn-done",
                    //       //   callback: function () {
                    //       //     self.showCongoMessage = false;
                    //       //   }
                    //       // }
                    //     }
                    //   });
                    //   jQuery('.editor-modal').addClass('golive-popup');
                    //   jQuery('.golive-popup').append("<canvas id='canvas'></canvas>");
                    //   setTimeout(() => {
                    //     self.confettiInit();
                    //   }, 1000);
                    //   jQuery('#website1 .embed-code-outer').text(showCode);
                    //   if (jQuery('#list_website1').hasClass('active')) {
                    //     jQuery('.tab-content.custom-tab-content .head-top .help-link').removeClass('hide');
                    //     jQuery('#needMore').removeClass('hide');
                    //     jQuery('.tab-content.custom-tab-content .head-top h3').text('Use this code')
                    //   } else {
                    //     jQuery('#needMore').addClass('hide');
                    //     jQuery('.tab-content.custom-tab-content .head-top .help-link').addClass('hide');
                    //     jQuery('.tab-content.custom-tab-content .head-top h3').text('Share this public URL')
                    //   }
                    // }
                    /*==== Intercom ====*/
                    if (_this.interComData) {
                        _this.interComData.calculators_published++;
                        localStorage.setItem('icd', JSON.stringify(_this.interComData));
                        window.Intercom('update', _this.interComData);
                    }
                    /*=====*/
                }
                else
                    window.toastNotification('Changes Published');
                _this.previousJson.liveApp = response;
                _this.jsonBuilderHelper.getJSONBuilt().liveApp = response;
                _this.previousJson.changed = false;
                _this.jsonBuilderHelper.getJSONBuilt().changed = false;
                _this.beingPublished = false;
            }
        }, function (error) {
            _this.beingPublished = false;
            var message = 'Something Went Wrong!';
            if (error.error.code == 'E_APP_CONDITIONS_INVALID')
                message = error.error.err_message;
            //bootbox.alert(message);
            if (error.error.code == 'E_APP_CONDITIONS_INVALID' && error.error.data && error.error.data._array && error.error.data._array.length) {
                var str1_1 = message.substr(0, 60);
                str1_1 += " used in " + (error.error.data.type == 'Question' ? 'question' : 'section') + (error.error.data._array.length > 1 ? 's:' : ':') + "</br>";
                error.error.data._array.map(function (quesId, index) {
                    var item = _this.jsonBuilderHelper.getTemplateQuestionare()[error.error.data.type == 'Question' ? 0 : 1].filter(function (ques) { return ques._id == quesId; });
                    if (item.length) {
                        str1_1 += index + 1 + "." + (error.error.data.type == 'Question' ? item[0].props.title.replace(/<(?:.|\n)*?>/gm, '').replace(/(&nbsp;|<br>|<br \/>)/g, '').trim() : item[0].title.replace(/<(?:.|\n)*?>/gm, '').replace(/(&nbsp;|<br>|<br \/>)/g, '').trim()) + '.</br>'; //question or section title/
                    }
                });
                message = str1_1.concat(message.substr(62, message.length));
            }
            bootbox.dialog({
                closeButton: false,
                message: "\n                <button type=\"button\" (click)=\"closeCongoMessage()\" class=\"bootbox-close-button close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class='material-icons'>close</i></button>\n                  <div class=\"bootbox-body-left\">\n                    <div class=\"mat-icon\">\n                      <i class=\"material-icons\">error</i>\n                    </div>\n                  </div>\n                  <div class=\"bootbox-body-right\">\n                    <p>" + message + "</p>\n                  </div>\n                            ",
                buttons: {
                    success: {
                        label: "OK",
                        className: "btn btn-ok btn-hover"
                    }
                }
            });
        });
    };
    BuilderComponent.prototype.assignDefaultValueToOptions = function () {
        if (this.jsonBuilderHelper.isTempType(['Numerical'])) {
            var questions = this.jsonBuilderHelper.getQuestionsList();
            questions.forEach(function (item) {
                item.options = item.options.map(function (option) {
                    if (option.value === '') {
                        option.value = 0;
                    }
                    return option;
                });
            });
        }
    };
    BuilderComponent.prototype.closeCongoMessage = function () {
        this.showCongoMessage = false;
        jQuery('.editor-modal').removeClass('golive-popup');
    };
    BuilderComponent.prototype.confettiInit = function () {
        var canvasEl = document.querySelector('#canvas');
        var width = canvasEl.width = window.innerWidth;
        var height = canvasEl.height = window.innerHeight * 2;
        function loop() {
            requestAnimationFrame(loop);
            ctx.clearRect(0, 0, width, height);
            confs.forEach(function (conf) {
                conf.update();
                conf.draw();
            });
        }
        function Confetti() {
            //construct confetti
            var colours = ['#fde132', '#009bde', '#ff6b00'];
            this.x = Math.round(Math.random(10) * width);
            this.y = Math.round(Math.random(10) * height) - (height / 2);
            this.rotation = Math.random(10) * 360;
            var size = Math.random(10) * (width / 60);
            this.size = size < 15 ? 15 : size;
            this.color = colours[Math.round(Math.random(colours.length) * 10 - 1)];
            this.speed = this.size / 7;
            this.opacity = Math.random(10);
            this.shiftDirection = Math.random(10) > 0.5 ? 1 : -1;
        }
        Confetti.prototype.border = function () {
            if (this.y >= height) {
                this.y = height;
            }
        };
        Confetti.prototype.update = function () {
            this.y += this.speed;
            if (this.y <= height) {
                this.x += this.shiftDirection / 5;
                this.rotation += this.shiftDirection * this.speed / 100;
            }
            this.border();
        };
        Confetti.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, this.rotation, this.rotation + (Math.PI / 2));
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.fill();
        };
        var ctx = canvasEl.getContext('2d');
        var confNum = Math.floor(width / 5);
        var confs = new Array(confNum).fill(0).map(function (_) { return new Confetti(); });
        loop();
    };
    // View element Changes
    BuilderComponent.prototype.mobileMenuClicked = function () {
        jQuery('.editor-sidebar').fadeToggle(400);
        jQuery('.sidebar-modal-backdrop').css('display', 'block').addClass('fade in');
    };
    BuilderComponent.prototype.mobileMenuCrossClicked = function () {
        jQuery('.editor-sidebar').css('display', 'none');
        jQuery('.sidebar-modal-backdrop').css('display', 'none').addClass('fade out');
    };
    BuilderComponent.prototype.mobilePropCrossClicked = function () {
        var container = jQuery('#sidebar');
        container.animate({
            right: "-300px",
            easing: 'linear'
        }, 300);
        jQuery('#sidebar').addClass('properties-close');
        this.propertiesHidden = true;
        /* for canvas horizontal scroll */
        if (jQuery(window).width() > 992)
            var minWinWidth = jQuery(window).width() - 289;
        else
            var minWinWidth = jQuery(window).width() - 20;
        jQuery(".template-section").animate({ width: minWinWidth }, 300);
        jQuery("temp-dev").animate({ width: minWinWidth }, 300);
        jQuery(".template-section").css('overflow-x', "hidden");
        jQuery('.mobile-prop-cross-icon').css('display', 'none');
        jQuery('.properties-modal-backdrop').css('display', 'none').addClass('fade out');
        /*end*/
    };
    BuilderComponent.prototype.appNameblured = function () {
        jQuery('#fname').removeClass('active-text');
    };
    BuilderComponent.prototype.appNameFocused = function () {
        jQuery('#fname').addClass('active-text');
    };
    BuilderComponent.prototype.onCalcNameChanged = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().name)
            this.uniqueUrlHandler();
        else {
            window.toastNotification("Calculator name can't be empty");
            this.jsonBuilderHelper.getJSONBuilt().name = this.oldCalcName;
        }
    };
    BuilderComponent.prototype.isUnique = function (uniqueString) {
        if (this.oldCalcName != this.jsonBuilderHelper.getJSONBuilt().name) {
            var that = this;
            var url = that._builderService.sanitizeUrl(that.jsonBuilderHelper.getJSONBuilt().name);
            url = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + that.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION + '/' + url;
            that.updateName();
        }
    };
    BuilderComponent.prototype.updateName = function () {
        var _this = this;
        this._builderService.updateName(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().name)
            .subscribe(function (response) {
            //console.log('Name: ', this.jsonBuilderHelper.getJSONBuilt().name);
            _this._titleService.setTitle('Outgrow | ' + _this.jsonBuilderHelper.getJSONBuilt().name);
            if (!_this.jsonBuilderHelper.getJSONBuilt().url) {
                _this.jsonBuilderHelper.getJSONBuilt().url = response.url;
                window.history.replaceState({}, '', '/builder/' + response.url);
                var url = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION + '/' + response.url;
                window.toastNotification('Calculator name added successfully');
                bootbox.dialog({
                    size: 'small',
                    message: "  < div class=\"bootbox-body-left\" >\n                <div class=\"mat-icon\" >\n                  <i class=\"material-icons\" > error < /i>\n                    < /div>\n                    < /div>\n                    < div class=\"bootbox-body-right\" >\n                      <p class=\"\" > We have set your calculator's url to \"" + url + "\" , You can always change it in configure section.</p>\n                        < /div>\n                          ",
                    buttons: {
                        success: {
                            label: "OK",
                            className: "btn btn-ok btn-hover"
                        }
                    }
                });
            }
            else
                window.toastNotification('Calculator name changed successfully');
            _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.videoModal = function () {
        jQuery('#video-modal').modal('show');
        jQuery("i.support_icon").removeClass('bounceIn animated');
    };
    BuilderComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "GOLIVE":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Publish');
                // _kmq.push(['record', 'Publish Go Live Click']);
                break;
            case "LOGO":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'OGLogo');
                // _kmq.push(['record', 'Back To Dashboard OGLogo Click']);
                break;
            case "PREVIEW":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Preview');
                // _kmq.push(['record', 'Preview Click']);
                break;
            case "LIVEDONE":
                ga('markettingteam.send', 'event', 'Calculator', 'Live', 'Done', 1);
                break;
        }
    };
    BuilderComponent.prototype.versionChange = function (props) {
        return this._dashboardService.versionChange(this.jsonBuilderHelper.getJSONBuilt()._id, props);
    };
    BuilderComponent.prototype.ngDoCheck = function () {
        if (this.startAutoSave
            && JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()) != JSON.stringify(this.previousJson)) {
            this.previousJson = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
            var unSavedElements = this._itemTrackService.getUnSavedData();
            if (unSavedElements)
                this.autoSaver(unSavedElements);
        }
        else if (!this.startAutoSave && this.jsonBuilderHelper.getJSONBuilt())
            this.previousJson = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
    };
    BuilderComponent.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    BuilderComponent.prototype.checkAnalytics = function () {
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics.active;
        if (!this.isAnalyticsAvailable) {
            this._featureAuthService.setSelectedFeature('analytics');
            jQuery('.analytics').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
        else {
            this.onSelect('analytics');
            this.selectedAnalyticComponent = 'overview';
        }
    };
    BuilderComponent.prototype.saveUnsavedData = function (unSavedElements, init) {
        var _this = this;
        if (init === void 0) { init = false; }
        var app = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        delete app.pages;
        unSavedElements.app = app;
        this.jsonBuilderHelper.animInit();
        this._builderService.updateChanges(unSavedElements, init ? 'switch' : this.jsonBuilderHelper.getJSONBuilt().socket_id || 'blank', this.jsonBuilderHelper.getJSONBuilt()._id)
            .subscribe(function (response) {
            _this.jsonBuilderHelper.getJSONBuilt().changed = true;
            _this.jsonBuilderHelper.debounce(_this.jsonBuilderHelper.animLoad(), 1800);
            _this.activeSince = moment(Date.now()).fromNow().replace('ago', '').trim();
        }, function (error) { return console.log(error); });
    };
    BuilderComponent.prototype.onSelect = function (comp) {
        this.selectedSec = comp.trim();
        if (comp === 'analytics') {
            localStorage.setItem('tics', 'true');
        }
        else {
            localStorage.removeItem('tics');
        }
    };
    BuilderComponent.prototype.upload = function (type, isGIF) {
        // Condition for Crop
        // let transformations: any = {};
        // if (isGIF) {
        //   transformations['crop'] = false;
        // } else {
        //   transformations['crop'] = {};
        //   transformations['crop']['force'] = true;
        //   transformations['crop']['aspectRatio'] = 16 / 9;
        // }
        // Filestack V3
        var self = this;
        var apikey = this.filePickerKey;
        var client = filestack.init(apikey);
        client.pick({
            storeTo: {
                location: 's3',
                access: 'public'
            },
            onFileSelected: function (file) {
                var fileName = file.filename;
                fileName = fileName.replace(/[^A-Za-z0-9.]/g, "_");
                fileName = fileName.replace(/ /g, "_");
                file.name = fileName;
                return file;
            },
            maxSize: 10485760,
            accept: 'image/*',
            imageDim: [1630, 974]
        }).then(function (result) {
            var s3URL = 'https://dlvkyia8i4zmz.cloudfront.net/' + result.filesUploaded[0].key;
            self.jsonBuilderHelper.getSelectedPage().bgImage = s3URL;
            self.jsonBuilderHelper.getSelectedPage().bgColor = '';
            self.jsonBuilderHelper.getSelectedPage().bgSize = result.filesUploaded[0].size;
            self.imageSet(s3URL, result.filesUploaded[0].filename, '');
            self.jsonBuilderHelper.setSelectedModel('Global_Settings');
        });
    };
    BuilderComponent.prototype.addOpen = function () {
        jQuery('.help-options').addClass('open');
    };
    BuilderComponent.prototype.upgradeVersion = function () {
        this.jsonBuilderHelper.getJSONBuilt().version = 'V_3_5';
        this.versionChange({ version: "V_3_5" })
            .subscribe(function (response) {
            window.location.reload();
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.removeOpen = function () {
        jQuery('.help-options').removeClass('open');
    };
    BuilderComponent.prototype.ngOnDestroy = function () {
        // console.log('disconnect called');
        // if (this.socket) {
        //   this.socket.disconnect();
        //   for (let i = 0; i < 1000; i++) {
        //     console.log('');
        //   }
        // }
        // window.Intercom('update', { hide_default_launcher: false });
        this._redoUndoService.initRedoUndoStack();
    };
    BuilderComponent.prototype.applyImage = function (imgShow) {
        this.imageSet(imgShow.url, 'background.jpg', '');
    };
    BuilderComponent.prototype.imageSet = function (url, filename, bgcolor) {
        var landingPage = this.jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Landing'; });
        if (landingPage) {
            landingPage[0].bgImage = url;
            landingPage[0].bgName = filename;
            landingPage[0].bgColor = bgcolor;
            this._itemTrackService.setUnSavedPage(landingPage[0]);
        }
    };
    BuilderComponent.prototype.helloBarNotify = function (event) {
        if (event.data) {
            this.helloBar.message = event.data.message;
            this.helloBar.flag = true;
            this.cardStatus = event.data.cardStatus ? event.data.cardStatus : null;
        }
    };
    BuilderComponent.prototype.ccpopop = function () {
        localStorage.setItem('openpopup', 'true');
        jQuery('#cc-modal-payment').modal('show');
        jQuery('.modal-backdrop').insertAfter('#cc-modal-payment');
        jQuery('#cc-modal-payment').on('hidden.bs.modal', function () {
            localStorage.setItem('openpopup', 'true');
        });
    };
    BuilderComponent.prototype.openModal = function (event) {
        jQuery('button[id=essentials_m]').trigger('click');
    };
    BuilderComponent.prototype.callPopups = function (id) {
        jQuery('button[id=' + id + '_nd]').trigger('click');
    };
    BuilderComponent.prototype.routeSetting = function () {
        localStorage.setItem('settings', 'true');
        this._router.navigate(['/settings/membership']);
    };
    BuilderComponent.prototype.copyButton = function () {
        this.liveSrcGenerate();
        this.previwCopy();
    };
    BuilderComponent.prototype.checkForCustomTheme = function (app, prev) {
        var themePalettes = this._jsonElementService.gettemplatePalettes(prev);
        themePalettes.pallete = themePalettes.pallete.filter(function (pal) { return pal.subType.indexOf(app.templateType) >= 0; });
        var themeChanged = !themePalettes.pallete.find(function (pallete) {
            return (app.theme.componentColor == pallete.components
                &&
                    app.theme.textColor == pallete.text
                &&
                    app.theme.bgColor == pallete.backGround);
        });
        return themeChanged;
    };
    BuilderComponent.prototype.gotoPromotionList = function () {
        bootbox.hideAll();
        this.showCongoMessage = false;
        jQuery('.editor-modal').removeClass('golive-popup');
        this.selectedSec = 'config';
        this.selectedConfigComponent = 'promotion-checklist';
        // this.showCongoMessage = false;
        // this.selectedSec = 'config';
        // this.selectedConfigComponent = 'embedded-code';
        // this.configOptionals={parent:this.selectedConfigComponent,child:'promotion'}
    };
    BuilderComponent.prototype.checkResultConditions = function () {
        var _this = this;
        this.emptyConditions = {};
        var flag = true;
        var resultPage = this.jsonBuilderHelper.getJSONBuilt().pages.find(function (page) { return page.type == 'Result'; });
        var resultSection = resultPage.sections.find(function (section) { return section.type == 'Result'; });
        resultSection.items.map(function (control) {
            if (control.config.showHelp) {
                control.options.map(function (option) {
                    if (option.attr.class === '' || option.attr.style === '') {
                        if (_this.emptyConditions[resultSection.items.indexOf(control) + 1]) {
                            _this.emptyConditions[resultSection.items.indexOf(control) + 1].push(control.options.indexOf(option) + 1);
                        }
                        else {
                            _this.emptyConditions[resultSection.items.indexOf(control) + 1] = [];
                            _this.emptyConditions[resultSection.items.indexOf(control) + 1].push(control.options.indexOf(option) + 1);
                        }
                        flag = false;
                    }
                });
            }
        });
        return flag;
    };
    BuilderComponent.prototype.checkResultConditionsValidation = function () {
        var _this = this;
        this.invalidConditions = {};
        var parsedData = this.formulaService.computeParserData();
        var flag = true;
        try {
            var resultPage = this.jsonBuilderHelper.getJSONBuilt().pages.find(function (page) { return page.type == 'Result'; });
            var resultSection_1 = resultPage.sections.find(function (section) { return section.type == 'Result'; });
            resultSection_1.items.map(function (control) {
                if (control.config.showHelp) {
                    control.options.map(function (option) {
                        var condition = true;
                        if (option.attr.upper == '==' || option.attr.lower == '==')
                            condition = option.attr.upper !== option.attr.lower;
                        else
                            condition = (Number(_this.formulaService.parseText(option.attr.class, parsedData)) >= Number(_this.formulaService.parseText(option.attr.style, parsedData)));
                        if (condition) {
                            if (_this.invalidConditions[resultSection_1.items.indexOf(control) + 1]) {
                                _this.invalidConditions[resultSection_1.items.indexOf(control) + 1].push(control.options.indexOf(option) + 1);
                            }
                            else {
                                _this.invalidConditions[resultSection_1.items.indexOf(control) + 1] = [];
                                _this.invalidConditions[resultSection_1.items.indexOf(control) + 1].push(control.options.indexOf(option) + 1);
                            }
                            flag = false;
                            // return false;
                        }
                        // return true;
                    });
                }
            });
            return flag;
        }
        catch (e) {
            return true;
        }
    };
    BuilderComponent.prototype.checkPollQuestions = function () {
        var questionPage = this.jsonBuilderHelper.getJSONBuilt().pages.find(function (page) { return page.type == 'Questionnaire'; });
        var flag = false;
        questionPage.sections.map(function (sec) {
            sec.items.map(function (item) {
                if (item.type == 'radio_button')
                    flag = true;
            });
        });
        return flag;
    };
    BuilderComponent.prototype.setOptionals = function () {
        switch (this.selectedConfigComponent) {
            case 'embedded-code':
                this.configOptionals = { parent: this.selectedConfigComponent, child: 'embedpage' };
                break;
            default:
                this.configOptionals = null;
        }
    };
    BuilderComponent.prototype.hellobarCTAclicked = function (id) {
        var hellobarCTAclicked = this._membershipService.hellobarCTAclicked(id).subscribe(function (success) { }, function (error) { });
    };
    //Builder lock functionality..
    BuilderComponent.prototype.takeOver = function () {
        // this.socket.emit('takeover', { appId: this.jsonBuilderHelper.getJSONBuilt()._id, userId: this.storage.user._id, userName: this.storage.user.name });
        location.reload(true);
    };
    BuilderComponent.prototype.checkTimeOut = function () {
        if (!this.allowUse) {
            setTimeout(function () {
                location.reload(true);
            }, 300000);
        }
    };
    BuilderComponent.prototype.defaultSetting = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().user_id == this.storage.user._id) {
            this.selfOpen = true;
        }
        else {
            this.selfOpen = false;
            this.userName = this.jsonBuilderHelper.getJSONBuilt().user_name;
        }
        this.checkTimeOut();
    };
    BuilderComponent.prototype.setAppLockSetting = function (data) {
        localStorage.setItem('connect', 'set');
        this.jsonBuilderHelper.getJSONBuilt().login = 1;
        this.jsonBuilderHelper.getJSONBuilt().user_id = this.storage.user._id;
        this.jsonBuilderHelper.getJSONBuilt().user_name = this.storage.user.name;
        this.jsonBuilderHelper.getJSONBuilt().socket_id = this.socket.id;
        var appData = JSON.stringify(this.jsonBuilderHelper.getJSONBuilt());
        this._redoUndoService.setUndoStack(appData);
    };
    BuilderComponent.prototype.lockBuilder = function (data) {
        (data.url === this.jsonBuilderHelper.getJSONBuilt().url) ? this.allowUse = false : this.allowUse = true;
        if (data.user_id === this.jsonBuilderHelper.getJSONBuilt().user_id) {
            this.selfOpen = true;
        }
        else if (data.user_id != this.jsonBuilderHelper.getJSONBuilt().user_id) {
            this.selfOpen = false;
            this.userName = data.user_name;
        }
        this.checkTimeOut();
    };
    BuilderComponent.prototype.getLockText = function () {
        if (this.jsonBuilderHelper.isTempType(['Numerical'])) {
            return 'calculator';
        }
        else if (this.jsonBuilderHelper.isTempType(['Poll'])) {
            return 'poll';
        }
        else {
            return 'quiz';
        }
    };
    BuilderComponent.prototype.checkFeatures = function () {
        var _this = this;
        var features = this._featureAuthService.features;
        var app = this.jsonBuilderHelper.getJSONBuilt();
        this.featuresToDisable = [];
        var self = this;
        var ResultPage = app.pages.filter(function (page) {
            if (page.type === 'Result') {
                return page;
            }
        });
        var QuestionnairePage = app.pages.filter(function (page) {
            if (page.type === 'Questionnaire') {
                return page;
            }
        });
        var LandingPage = app.pages.filter(function (page) {
            if (page.type === 'Landing') {
                return page;
            }
        });
        var LeadFormSection = [];
        var ResultSection = [];
        if (Array.isArray(ResultPage) && ResultPage.length > 0) {
            LeadFormSection = ResultPage[0].sections.filter(function (section) {
                if (section.type === 'LeadForm') {
                    return section;
                }
            });
            ResultSection = ResultPage[0].sections.filter(function (section) {
                if (section.type === 'Result') {
                    return section;
                }
            });
        }
        var PageHeaderSection = [];
        if (Array.isArray(LandingPage) && LandingPage.length > 0) {
            PageHeaderSection = LandingPage[0].sections.filter(function (section) {
                if (section.type === 'Page_Header') {
                    return section;
                }
            });
        }
        var ProdReqSection = [];
        var LeadFormQSection = [];
        if (Array.isArray(QuestionnairePage) && QuestionnairePage.length > 0) {
            ProdReqSection = QuestionnairePage[0].sections.filter(function (section) {
                // if (section.type === 'Section heading goes here') {
                return section;
                // }
            });
            LeadFormQSection = QuestionnairePage[0].sections.filter(function (LeadFormQ) {
                if (LeadFormQ.type === 'LeadFormQ') {
                    return LeadFormQ;
                }
            });
        }
        var CtaShareItem = [], CtaLikeItem = [], ClickBtnItem = [], disclaimersItem = [];
        if (LeadFormSection && Array.isArray(LeadFormSection) && LeadFormSection.length > 0) {
            // CtaShareItem = LeadFormSection[0].items.filter((item) => {
            //   if (item.type === 'cta_shares') {
            //     return item;
            //   }
            // });
            // CtaLikeItem = LeadFormSection[0].items.filter((item) => {
            //   if (item.type === 'cta_likes') {
            //     return item;
            //   }
            // });
            // ClickBtnItem = LeadFormSection[0].items.filter((item) => {
            //   if (item.type === 'click_button') {
            //     return item;
            //   }
            // });
            LeadFormSection[0].items.forEach(function (item) {
                if (item.type === 'cta_shares') {
                    CtaShareItem.push(item);
                }
                else if (item.type === 'cta_likes') {
                    CtaLikeItem.push(item);
                }
                else if (item.type === 'click_button') {
                    ClickBtnItem.push(item);
                }
                else if (item.type === 'result_disclaimer') {
                    disclaimersItem.push(item);
                }
            });
        }
        var PoweredByItem = [];
        if (Array.isArray(PageHeaderSection) && PageHeaderSection.length > 0) {
            PoweredByItem = PageHeaderSection[0].items.filter(function (item) {
                if (item.type === 'poweredby') {
                    return item;
                }
            });
        }
        var LeadFormQuestionItems = [];
        if (Array.isArray(LeadFormQSection) && LeadFormQSection.length > 0) {
            LeadFormQuestionItems = LeadFormQSection[0].items.filter(function (LeadFormQuestion) {
                if (LeadFormQuestion.type === 'leadform_question') {
                    return LeadFormQuestion;
                }
            });
        }
        // Lead Generation
        if (LeadFormQuestionItems.length > 0) {
            LeadFormQuestionItems[0].fields.filter(function (field) {
                if (field.type === 'email' && field.emailValidator && !self.featuresToDisable.includes('Email Checking')) {
                    if (!features.lead_generation.email_check) {
                        self.featuresToDisable.push('Email Checking');
                    }
                }
                if (!features.lead_generation.restrict_duplicate) {
                    if (field.unique && !self.featuresToDisable.includes('Restriction Of Duplicate Leads')) {
                        self.featuresToDisable.push('Restriction Of Duplicate Leads');
                    }
                }
            });
        }
        // Custom HTML
        if (!features.custom_html.active && QuestionnairePage.length > 0) {
            QuestionnairePage[0].sections.filter(function (CustomHTML) {
                if (CustomHTML.type === 'CustomHtml') {
                    if (CustomHTML.visible && !self.featuresToDisable.includes('Custom HTML')) {
                        self.featuresToDisable.push('Custom HTML');
                    }
                }
            });
        }
        // Charts
        app.formula.filter(function (formula) {
            if (!features.charts.active) {
                if (formula.visuals.type === 'graph' && formula.visuals.visible && !self.featuresToDisable.includes('Charts')) {
                    self.featuresToDisable.push('Charts');
                }
            }
            if (!features.formula_operators.all_operators) {
            }
        });
        // CUSTOM STYLING Background Image
        if (!features.custom_styling.background_image) {
            var LandingPage_1 = app.pages.filter(function (page) {
                if (page.type === 'Landing') {
                    return page;
                }
            });
            if (LandingPage_1[0].bgName !== '' && LandingPage_1[0].bgImageVisible) {
                this.featuresToDisable.push('Custom Background Image');
            }
        }
        // CUSTOM STYLING Custom Tint
        if (!features.custom_styling.custom_tints && app.theme.tintToggle) {
            if (app.theme.tint !== 0 || !(app.theme.tintColor.toLowerCase() === '#fff' || app.theme.tintColor.toLowerCase() === '#ffffff') || !(app.theme.tintRGB === 'rgba(255,255,255,0.45)' || app.theme.tintRGB === 'rgba(255, 255, 255, 0)')) {
                this.featuresToDisable.push('Custom tint');
            }
        }
        // CUSTOM STYLING Predefined color theme
        if (!features.custom_styling.predefined_color_themes && app.themeColor !== 'cp1') {
            this.featuresToDisable.push('Predefined color themes');
        }
        // CUSTOM STYLING Custom theme
        if (!features.custom_styling.custom_themes) {
            if (app.customColor.bgColor !== '' && app.customColor.componentColor !== '' && app.customColor.textColor !== '') {
                if (app.customColor.bgColor.toUpperCase() !== '#FFFFFF' || app.customColor.componentColor.toUpperCase() !== '#FFFFFF' || app.customColor.textColor.toUpperCase() !== '#FFFFFF') {
                    this.featuresToDisable.push('Custom Themes');
                }
            }
        }
        // CUSTOM STYLING Fonts
        if (!features.custom_styling.fonts && app.theme.fontFamily !== 'Orkney') {
            this.featuresToDisable.push('Font');
        }
        // Conditional messaging
        if (!features.conditional_messaging.active && ResultSection.length > 0) {
            ResultSection[0].items.filter(function (item) {
                if (item.config.showHelp && !self.featuresToDisable.includes('Conditional messaging')) {
                    self.featuresToDisable.push('Conditional messaging');
                }
            });
        }
        // Custom call to action
        if (!features.cta.active || !features.cta.shares || !features.cta.like_follow || !features.cta.redirect_url) {
            if (CtaShareItem[0].visible) {
                for (var i = 0; i < CtaShareItem[0].options.length; i++) {
                    if (!features.cta.shares && CtaShareItem[0].options[i].selected) {
                        this.featuresToDisable.push('Share CTA');
                        break;
                    }
                }
            }
            if (CtaLikeItem[0].visible) {
                for (var i = 0; i < CtaLikeItem[0].options.length; i++) {
                    if (!features.cta.like_follow && CtaLikeItem[0].options[i].selected) {
                        this.featuresToDisable.push('Like & Follow CTA');
                        break;
                    }
                }
            }
            if (!features.cta.redirect_url && ClickBtnItem[0].visible) {
                this.featuresToDisable.push('Redirect Users To URL');
            }
        }
        // Outgrow Branding powered by Outgrow
        if (!features.custom_branding.cta_build_similar_calc && PoweredByItem.length && !PoweredByItem[0].visible) {
            this.featuresToDisable.push('Outgrow Branding');
        }
        // Outgrow Branding powered by Agency
        if (!features.custom_branding.allow_agency_branding && PoweredByItem.length && PoweredByItem[0].showButton) {
            this.featuresToDisable.push('Agency Branding');
        }
        // Logic Jump
        // if (!features.logic_jump.active && Array.isArray(ProdReqSection) && ProdReqSection.length > 0) {
        //   ProdReqSection.forEach((prodReqSection) => {
        //     prodReqSection.items.forEach((item) => {
        //       if (item.condition !== '' && !self.featuresToDisable.includes('Logic Jump')) {
        //         this.featuresToDisable.push('Logic Jump');
        //       }
        //     });
        //   });
        // }
        // Custom CSS
        console.log('!features.custom_style.active && app.styles && app.styles.length > 0');
        console.log(features.custom_style.active, app.styles, app.styles.length);
        console.log('!features.custom_style.active && app.styles && app.styles.length > 0');
        if (!features.custom_style.active && app.styles && app.styles.length > 0) {
            app.styles.forEach(function (style) {
                if (style.status !== 'DOWNGRADED' && !self.featuresToDisable.includes('Custom CSS')) {
                    _this.featuresToDisable.push('Custom CSS');
                }
            });
        }
        // Custom Script
        if (!features.custom_script.active && app.scripts && app.scripts.length > 0) {
            app.scripts.forEach(function (script) {
                if (script.status !== 'DOWNGRADED' && !self.featuresToDisable.includes('Custom Script')) {
                    _this.featuresToDisable.push('Custom Script');
                }
            });
        }
        // Templates
        var templatesName = {
            'one_page_card_new': 'The Chicago',
            'one_page_card_oldresult': 'The Chicago',
            'one_page_card': 'The Chicago',
            'sound_cloud_new': 'The Londoner',
            'sound_cloud_v3': 'The Londoner',
            'template_seven': 'The Seattle',
            'sound_cloud': 'The Londoner',
            'inline_temp_new': 'The Greek',
            'inline_temp': 'The Greek',
            'experian': 'The Tokyo',
            'template_five': 'The Madrid',
            'template_five_oldresult': 'The Madrid',
            'template_six': 'The Stockholm',
            'template_eight': 'The Venice',
            'template_nine': 'The New York'
        };
        if (app.mode === 'PUBLIC') {
            var appTemplate = app.template.replace(/-/g, '_');
            for (var template in features.templates) {
                if (features.templates.hasOwnProperty(template) && appTemplate === template && !features.templates[template]) {
                    for (var tname in templatesName) {
                        if (templatesName.hasOwnProperty(tname) && appTemplate === tname) {
                            this.featuresToDisable.push(templatesName[tname] + ' template');
                        }
                    }
                }
            }
        }
        // Traffic Analytics Fb and Ga
        if (!features.analytics.facebook_pixel && app.fbPixel !== '') {
            this.featuresToDisable.push('Facebook Pixel');
        }
        if (!features.analytics.google_analytics && app.ga !== '') {
            this.featuresToDisable.push('Google Analytics');
        }
        if (!features.variable_cta.active && app.isVariableCta) {
            this.featuresToDisable.push('Variable CTA For Outcome');
        }
        var redirect_url = 'https://outgrow.co/';
        if (LeadFormQuestionItems.length > 0) {
            redirect_url = LeadFormQuestionItems[0].redirect_url;
        }
        if (!features.custom_branding.edit_cta_text && (!app.navigate_Url.includes("outgrow.co") || !app.question_redirect_url.includes("outgrow.co") || !redirect_url.includes('outgrow.co'))) {
            this.featuresToDisable.push('Edit CTA URL link');
        }
        if (!features.custom_branding.share_text) {
            for (var i = 0; i < CtaShareItem[0].options.length; i++) {
                // if (CtaShareItem[0].options[i].label !== 'Share title goes here | via @outgrowco') {
                //   if (!self.featuresToDisable.includes('Remove @outgrow.co on share text')) {
                //     this.featuresToDisable.push('Remove @outgrow.co on share text');
                //     break;
                //   }
                // }
            }
        }
        if (!features.disclaimers.active && disclaimersItem && Array.isArray(disclaimersItem) && disclaimersItem.length > 0) {
            disclaimersItem.forEach(function (item) {
                if (item.visible && !self.featuresToDisable.includes('Disclaimer')) {
                    self.featuresToDisable.push('Disclaimer');
                }
            });
        }
        if (app.mode === 'PUBLIC') {
            if (!features.experiences.graded && app.templateType === 'Graded') {
                self.featuresToDisable.push('Graded Experience');
            }
            else if (!features.experiences.numerical && app.templateType === 'Numerical') {
                self.featuresToDisable.push('Numerical Experience');
            }
            else if (!features.experiences.poll && app.templateType === 'Poll') {
                self.featuresToDisable.push('Poll Experience');
            }
            else if (!features.experiences.recommendation && app.templateType === 'Recommendation') {
                self.featuresToDisable.push('Recommendation Experience');
            }
            else if (!features.experiences.chatbot && app.templateType === 'Chatbot') {
                self.featuresToDisable.push('Chat Experience');
            }
        }
        var noneCompUser = 0;
        app.users.forEach(function (user) {
            if (user.role == '' && user.status) {
                noneCompUser++;
            }
        });
        if (!features.confirmation_emails.add_users_to_self && noneCompUser > 0) {
            self.featuresToDisable.push('Custom email for lead notification');
        }
        this._builderService.calcEmail({ app: this.jsonBuilderHelper.getJSONBuilt()._id }).subscribe(function (response) {
            response.forEach(function (res) {
                _this.calcEmail = new _models_calc_email_model__WEBPACK_IMPORTED_MODULE_4__["CalcEmail"](res);
            });
            if (!features.confirmation_emails.to_user && _this.calcEmail.sendEmail) {
                self.featuresToDisable.push('Send Email to User');
            }
            if (!features.confirmation_emails.to_self && _this.calcEmail.notifyMe) {
                self.featuresToDisable.push('Send Email to Self');
            }
            if (!features.confirmation_emails.remove_unsubscribe && _this.calcEmail.is_unsubsribed_removed) {
                self.featuresToDisable.push('Remove Unsubscribe link from email');
            }
            if (_this.featuresToDisable && _this.featuresToDisable.length !== 0) {
                jQuery('#downgrade').modal('show');
            }
            var data = {
                appId: _this.jsonBuilderHelper.getJSONBuilt()._id,
                features: _this.featuresToDisable
            };
            _this._builderService.setUsedPremiumFeature(data).subscribe(function (success) { }, function (error) { });
        }, function (error) {
        });
    };
    BuilderComponent.prototype.turnOffFeatures = function () {
        var _this = this;
        var templates = [
            'The Chicago template',
            'The Seattle template',
            'The Londoner template',
            'The Greek template',
            'The Tokyo template',
            'The Madrid template',
            'The Stockholm template',
            'The Venice template',
            'The New York template'
        ];
        var data = {
            appId: this.jsonBuilderHelper.getJSONBuilt()._id,
            features: this.featuresToDisable
        };
        var exist = this.featuresToDisable.some(function (v) { return templates.indexOf(v) !== -1; });
        jQuery('#downgrade').modal('hide');
        if (exist) {
            localStorage.setItem('changeTemplate', 'true');
            localStorage.setItem('currTemplate', this.jsonBuilderHelper.getJSONBuilt().template);
            localStorage.setItem('temp_type', this.jsonBuilderHelper.getJSONBuilt().templateType);
        }
        if (exist && this.featuresToDisable.length === 1) {
            this._router.navigate(['/templates']);
        }
        else {
            this.turningOffFeature = true;
            this._builderService.turnOffFeatures(data).subscribe(function (success) {
                setTimeout(function () {
                    _this.turningOffFeature = false;
                    if (exist) {
                        _this._router.navigate(['/templates']);
                    }
                    else {
                        window.location.reload();
                    }
                }, 1000);
            }, function (error) {
                _this.turningOffFeature = false;
                window.location.reload();
                console.log('turnOffFeatures error', error);
            });
        }
    };
    //Socket functionality..
    BuilderComponent.prototype.connectionInit = function (data) {
        this.socketEmiter.emit(true);
    };
    BuilderComponent.prototype.setUser = function (socketId) {
        // console.log('Inside set user', socketId, this.socket);
        this.allowUse = true;
        this.socket.emit('user-details', {
            userId: this.storage.user._id,
            userName: this.storage.user.name,
            appId: this.jsonBuilderHelper.getJSONBuilt()._id,
            socketId: socketId, old_id: this.jsonBuilderHelper.getJSONBuilt().socket_id,
            url: this.jsonBuilderHelper.getJSONBuilt().url
        });
    };
    BuilderComponent.prototype.connectionError = function () {
        localStorage.setItem('connect', 'disconnect');
        // this.socket = (environment.APP_DOMAIN == 'https://app.outgrow.co') ? io.connect(environment.ROOT, { secure: true }) : io.connect(environment.ROOT);
    };
    // redo undo code
    BuilderComponent.prototype.keypressHandeler = function (event) {
        if (event.keyCode == 90 && event.ctrlKey && this.allowUse) {
            if (jQuery('#builder-edit-div').is(':visible')) {
                event.preventDefault();
                this._redoUndoService.undoFunction();
            }
        }
        else if (event.keyCode == 89 && event.ctrlKey && this.allowUse) {
            if (jQuery('#builder-edit-div').is(':visible')) {
                event.preventDefault();
                this._redoUndoService.redoFunction();
            }
        }
    };
    BuilderComponent.prototype.gifPublished = function (data) {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt()._id === data.app) {
            this.jsonBuilderHelper.getJSONBuilt().gifUrl[data.device] = '';
            setTimeout(function () {
                _this.jsonBuilderHelper.getJSONBuilt().gifUrl[data.device] = data.gifUrl;
            }, 100);
            setTimeout(function () {
                // emit asynchronously
                _this.jsonBuilderHelper.getCommonEmitter().emit('gif_published');
            }, 250);
        }
    };
    /* screenshot */
    BuilderComponent.prototype.screenshotPublished = function (data) {
        if (this.jsonBuilderHelper.getJSONBuilt()._id === data.app) {
            console.log('screenshot published...', data.imgUrl);
        }
    };
    BuilderComponent.prototype.getLiveUrl = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        }
        else {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        }
    };
    // removeLogo() {
    //   this.subDomainService.removeLogo('builderLogo', 'builderfileName');
    // }
    BuilderComponent.prototype.isSignupDone = function (status) {
        var _this = this;
        this.demoBuilder = false;
        if (status == true) {
            setTimeout(function () { return window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + _this.subDomainService.currentCompany.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION + '/dashboard?premade=' + _this.jsonBuilderHelper.getJSONBuilt().url; }, 4);
        }
    };
    BuilderComponent.prototype.removeLogo = function () {
        this.subDomainService.removeLogo('builderLogo', 'builderfileName');
    };
    BuilderComponent.prototype.removeCancellation = function (sid) {
        var _this = this;
        this.turningOffFeature = true;
        this._membershipService.removeCancellation(sid).subscribe(function (success) {
            if (success) {
                _this.currentCompany = _this.subDomainService.currentCompany = new _shared_models_company__WEBPACK_IMPORTED_MODULE_38__["CurrentCompany"](success.company);
                _this.subDomainService.subDomain.sub_domain = _this.currentCompany.sub_domain;
                _this.subDomainService.subDomain.company_id = _this.currentCompany.id;
                _this.subDomainService.subDomain.name = _this.currentCompany.name;
                _this._cookieService.eraseCookie('hellobar');
                if (success.hellobar) {
                    _this._cookieService.createCookie('hellobar', JSON.stringify(success.hellobar), 3);
                }
                var membership = JSON.parse(_this._cookieService.readCookie('filepicker_token_json'));
                for (var i = 1; i < membership.length; i++) {
                    if (membership[i].key === success.company.sub_domain) {
                        membership[i].value = success.subscription.status;
                    }
                }
                _this._cookieService.eraseCookie('filepicker_token_json');
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(membership), 3);
            }
            _this.turningOffFeature = false;
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }, function (error) {
            _this.turningOffFeature = false;
            console.log('************************************');
            console.log('error : ', error);
            console.log('************************************');
        });
    };
    BuilderComponent.prototype.checkCnameAccess = function () {
        if (!this.isCNameAccess) {
            this._featureAuthService.setSelectedFeature('cname');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    BuilderComponent.prototype.updateIntercomforPage = function () {
        var interval = setInterval(function () {
            if (window.Intercom) {
                window.Intercom('update', { 'app_current_page': 'builder' });
                window.Intercom('update', { 'app_current_page_url': window.location.href });
                clearInterval(interval);
            }
        }, 3000);
    };
    BuilderComponent.prototype.openIntercom = function () {
        window.Intercom('showNewMessage');
    };
    BuilderComponent.prototype.setPublishUrl = function () {
        // let currentUrl = window.location.href.split('//')[1];
        // currentUrl = currentUrl.split('/');
        // this.publishUrl = currentUrl[0] + '/';
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
            this.publishUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        }
        else {
            this.publishUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        }
    };
    BuilderComponent.prototype.redirectToCname = function (link) {
        var redLoc = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].PROTOCOL + window.location.hostname + link;
        window.location.href = redLoc;
    };
    BuilderComponent.prototype.prepareModalData = function () {
        var embedHeader = (this.jsonBuilderHelper.getJSONBuilt().embedHeader) ? 1 : 0;
        var embedFooter = (this.jsonBuilderHelper.getJSONBuilt().embedFooter) ? 1 : 0;
        var queryparam = '';
        if (this.headerVisible())
            queryparam = queryparam + '&header=' + embedHeader;
        if (this.footerVisible())
            queryparam = queryparam + '&footer=' + embedFooter;
        if (this.jsonBuilderHelper.getJSONBuilt().template === 'template-eight') {
            queryparam = '';
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].APP_EXTENSION !== 'outgrow.co') {
            this.iloaderJS = '//dyv6f9ner1ir9.cloudfront.net/assets/js/niloader.js';
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL === 'https://') {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
                this.csrc = 'https://' + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id + '?sLead=1' + queryparam;
                this.fsrc = 'https://' + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
            else {
                this.csrc = 'https://' + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id + '?sLead=1' + queryparam;
                this.fsrc = 'https://' + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
                this.csrc = '//' + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id + '?sLead=1' + queryparam;
                this.fsrc = 'http://' + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
            else {
                this.csrc = '//' + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id + '?sLead=1' + queryparam;
                this.fsrc = 'http://' + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
        }
        this.fullPageCode = this.jsonBuilderHelper.getFullPageCode(this.iloaderJS, this.csrc);
        this.liveSrcGenerate();
    };
    BuilderComponent.prototype.headerVisible = function () {
        var header_sec = this.jsonBuilderHelper.getJSONBuilt().pages[0].sections.find(function (sec) { return sec.type == 'Page_Header'; });
        if (header_sec) {
            var header = header_sec.items.find(function (item) { return item.type == 'header_links'; });
            ;
            return (header && header.visible);
        }
        else
            return false;
    };
    BuilderComponent.prototype.footerVisible = function () {
        var footer_sec = this.jsonBuilderHelper.getJSONBuilt().pages[2].sections.find(function (sec) { return sec.type == 'Page_Footer'; });
        if (footer_sec) {
            var footer = footer_sec.items.find(function (item) { return item.type == 'footer_links'; });
            ;
            return (footer && footer.visible);
        }
        else
            return false;
    };
    BuilderComponent.prototype.redirectToConfig = function () {
        jQuery('#publish-upgrade').modal('hide');
        jQuery('.editor-modal.bootbox.modal.fade.in').css('display', 'none');
        jQuery('.modal-backdrop.fade.in').css('display', 'none');
        jQuery('div.pyro').css('display', 'none');
        this.onSelect('config');
        this.jsonBuilderHelper.view_embeded_tab.next({ event: 'hh' });
    };
    BuilderComponent.prototype.liveSrcGenerate = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
            this.srcUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        }
        else {
            this.srcUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        }
    };
    BuilderComponent.prototype.setFBCommentsURL = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().fbComments) {
            this.fbCommentsCode = "< div id = 'fb-root' > </div><script>(function(d, s, id){var js, fjs=d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js=d.createElement(s); js.id=id; js.src='/ / connect.facebook.net / en_US / sdk.js#xfbml = 1 & version=v2.10'; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook - jssdk'));</script><div class='fb - comments' data-href='" + this.fsrc + "' data-width='100 % ' data-numposts='5'></div>";
        }
    };
    BuilderComponent.prototype.viewReferal = function () {
        jQuery('#publish-upgrade').modal('hide');
        this._router.navigate(['/referralCandy']);
    };
    BuilderComponent.prototype.publishPopUpText = function () {
        if (this.jsonBuilderHelper.getJSONBuilt() && this.jsonBuilderHelper.getJSONBuilt().templateType) {
            return {
                Numerical: 'Calculator',
                Graded: 'Quiz',
                Recommendation: 'Quiz',
                Poll: 'Poll',
                Ecom: 'eCommerce Quiz',
                Chatbot: 'Chatbot'
            }[this.jsonBuilderHelper.getJSONBuilt().templateType];
        }
        return '';
    };
    BuilderComponent.prototype.copyUrl = function () {
        var textField = document.createElement('textarea');
        if (this.popUpHeading !== 's') {
            if (this.jsonBuilderHelper.getJSONBuilt().template === "template-nine") {
                textField.innerText = "" + this.setChatBoatEmbedUrl();
            }
            else if (this.jsonBuilderHelper.getJSONBuilt().template === "template-ten") {
                textField.innerText = this.getTemplateTenEmbededUrl();
            }
            else {
                textField.innerText = "" + this.fullPageCode + (this.jsonBuilderHelper.getJSONBuilt().fbComments ? this.fbCommentsCode : '');
            }
        }
        else {
            textField.innerText = this.srcUrl;
        }
        document.body.appendChild(textField);
        textField.select();
        textField.focus();
        document.execCommand('copy');
        textField.remove();
        window.toastNotification('Copied to Clipboard');
    };
    BuilderComponent.prototype.helloBarCtaClick = function () {
        this.ctaTrigger.nativeElement.click();
    };
    BuilderComponent.prototype.msgInIntercom = function (type) {
        var message = '';
        var featuretext = '';
        for (var i = 0; i < this.featuresToDisable.length - 1; i++) {
            featuretext += this.featuresToDisable[i] + ', ';
        }
        featuretext += this.featuresToDisable[this.featuresToDisable.length - 1];
        if (type == 'getInTouch') {
            message = "I would like to add " + featuretext + " to my plan. Can you let me know which plan I need?";
        }
        else if (type == 'smallBusiness') {
            message = "I would like to add " + featuretext + " to my plan, but was interested to see if I qualify for your small business incentive program as I would like a special deal. Do I satisfy your small business program criteria?";
        }
        window.Intercom('showNewMessage', message);
        // setTimeout(() => this.triggerClickToIntercom(), 100);
        this._intercomService.triggerClickToIntercom();
    };
    BuilderComponent.prototype.setChatBoatEmbedUrl = function () {
        if (!this.chatboatSrcUrl) {
            this.generateSrcUrl();
        }
        return this.jsonBuilderHelper.setChatCode(this.chatboatSrcUrl);
    };
    BuilderComponent.prototype.generateSrcUrl = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL === 'https://') {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
                this.chatboatSrcUrl = 'https://' + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
            else {
                this.chatboatSrcUrl = 'https://' + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN) {
                this.chatboatSrcUrl = '//' + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
            else {
                this.chatboatSrcUrl = '//' + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
            }
        }
    };
    BuilderComponent.prototype.getTemplateTenEmbededUrl = function () {
        var src = '';
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].STATIC_DOMAIN)
            src = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + 'livec.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
        else
            src = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].LIVE_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
        return "<style>@media screen and (max-width: 640px){#og_iframe{height: " + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.m_height + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.m_height_type + ";width:" + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.m_width + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.m_width_type + ";}}@media screen and (min-width: 641px) and (max-width: 1024px){#og_iframe{height: " + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.t_height + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.t_height_type + ";width:" + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.t_width + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.t_width_type + ";}}@media screen and (min-width: 1025px){#og_iframe{height: " + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.d_height + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.d_height_type + ";width:" + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.d_width + this.jsonBuilderHelper.getJSONBuilt().custom_iframe.d_width_type + ";}}</style><iframe id='og_iframe' src='" + src + "' style='border: none; overflow: hidden;' scrolling='yes'></iframe>";
    };
    BuilderComponent.prototype.getDevAppConfig = function () {
        var _this = this;
        this._builderService.getAppConfig(this.jsonBuilderHelper.getJSONBuilt()._id).subscribe(function (res) {
            _this.jsonBuilderHelper.appConfig = res;
        }, function (err) {
            console.log('error', err);
        });
    };
    BuilderComponent.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    BuilderComponent.prototype.triggerClickToIntercom = function () {
        var intercomIframe = jQuery('iframe[name="intercom-messenger-frame"]').contents();
        intercomIframe.find('.intercom-composer-send-button').trigger('click');
    };
    // triggerClickToIntercom() {
    //   const intercomIframe = jQuery( 'iframe[name="intercom-messenger-frame"]').contents();
    //   intercomIframe.find( '.intercom-composer-send-button' ).trigger( 'click');
    // }
    BuilderComponent.prototype.setScrollToPlan = function () {
        localStorage.setItem('scrollToPlan', 'true');
    };
    BuilderComponent.prototype.showBuilder = function (event) {
        if (event === 'config') {
            this.selectedSec = event;
            window.scroll(0, 0);
            this.selectedConfigComponent = 'integrations';
        }
        else
            this.selectedSec = 'build';
    };
    BuilderComponent.prototype.showPage = function (pageType) {
        var _this = this;
        if (pageType == 'Result') {
            this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getJSONBuilt().pages[2]);
            this.jsonBuilderHelper.setSelectedControl(this.jsonBuilderHelper.getJSONBuilt().pages[2].sections[1].items[0]);
            this.jsonBuilderHelper.setSelectedModel('Page');
            this.jsonBuilderHelper.sharePopupEngaged = true;
            setTimeout(function () { _this.scrollIt('.page_2', 'Result'); }, 0);
        }
        else if (pageType == 'Questionnaire') {
            this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getJSONBuilt().pages[1]);
            if (this.jsonBuilderHelper.getSelectedPage().type === 'Questionnaire') {
                this.jsonBuilderHelper.setSelectedControl(this.jsonBuilderHelper.getQuestionsList()[0]);
                this.jsonBuilderHelper.setSelectedModel('Control');
                this.jsonBuilderHelper.setSelectedSection(this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[0]);
                setTimeout(function () { _this.scrollIt('.page_1', 'Questionnaire'); }, 0);
            }
        }
        else if (pageType == 'Landing') {
            this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getJSONBuilt().pages[0]);
            this.jsonBuilderHelper.setSelectedModel('Page');
            setTimeout(function () { _this.scrollIt('.page_0', 'Landing'); }, 0);
        }
        else {
            var pageNumber_1;
            var leadformItem_1;
            var questionIndex_1;
            var sectionIndex_1;
            this.jsonBuilderHelper.getJSONBuilt().pages[0].sections.forEach(function (section, sIndex) {
                if (!leadformItem_1) {
                    leadformItem_1 = section.items.find(function (item) { return item.type === 'leadform' && item.visible; });
                    sectionIndex_1 = sIndex;
                }
            });
            pageNumber_1 = leadformItem_1 ? 1 : 0;
            if (!leadformItem_1) {
                this.jsonBuilderHelper.getJSONBuilt().pages[1].sections.forEach(function (section, sIndex) {
                    if (_this.jsonBuilderHelper.getJSONBuilt().multiLeadAllow) {
                        if (!leadformItem_1) {
                            leadformItem_1 = section.items.find(function (item, qIndex) {
                                if (item.type === 'leadform_question' && item.visible) {
                                    sectionIndex_1 = sIndex;
                                    questionIndex_1 = qIndex;
                                    return true;
                                }
                            });
                        }
                    }
                    else {
                        if (section.type === 'LeadFormQ' && section.visible) {
                            leadformItem_1 = section;
                            sectionIndex_1 = sIndex;
                            questionIndex_1 = 0;
                            return true;
                        }
                    }
                });
                pageNumber_1 = leadformItem_1 ? 2 : 0;
                if (!leadformItem_1) {
                    this.jsonBuilderHelper.getJSONBuilt().pages[2].sections.forEach(function (section, sIndex) {
                        if (!leadformItem_1) {
                            leadformItem_1 = section.items.find(function (item) { return item.type === 'leadform' && item.visible; });
                            sectionIndex_1 = sIndex;
                        }
                    });
                    pageNumber_1 = leadformItem_1 ? 3 : 0;
                }
            }
            if (leadformItem_1 && pageNumber_1) {
                this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getJSONBuilt().pages[pageNumber_1 - 1]);
                if (this.jsonBuilderHelper.getSelectedPage().type === 'Questionnaire') {
                    this.jsonBuilderHelper.setSelectedControl(this.jsonBuilderHelper.getQuestionsLeadformList()[0]);
                    this.jsonBuilderHelper.setSelectedSection(this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[sectionIndex_1]);
                    if (this.jsonBuilderHelper.getJSONBuilt().multiLeadAllow) {
                        this.jsonBuilderHelper.setSelectedModel('Control');
                        setTimeout(function () { _this.scrollIt('.sec_' + sectionIndex_1 + '_q_' + questionIndex_1); }, 0);
                    }
                    else {
                        this.jsonBuilderHelper.setSelectedModel('Section');
                        setTimeout(function () { _this.scrollIt('.sec_' + sectionIndex_1); }, 0);
                    }
                }
                else {
                    this.jsonBuilderHelper.setSelectedSection(this.jsonBuilderHelper.getJSONBuilt().pages[pageNumber_1 - 1].sections[sectionIndex_1]);
                    this.jsonBuilderHelper.setSelectedControl(leadformItem_1);
                    this.jsonBuilderHelper.setSelectedModel('Section');
                    setTimeout(function () { _this.scrollIt('.page_' + (pageNumber_1 - 1), ''); }, 0);
                    this.jsonBuilderHelper.sharePopupEngaged = true;
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"])('window:beforeunload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BuilderComponent.prototype, "unloadPage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ctaTrigger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], BuilderComponent.prototype, "ctaTrigger", void 0);
    BuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'sd-builder',
            host: {
                '(window:keydown)': 'keypressHandeler($event)'
            },
            template: __webpack_require__(/*! ./builder.template.html */ "./src/app/site/+builder/builder.template.html"),
            styles: [__webpack_require__(/*! ./assets/css/builder.style.css */ "./src/app/site/+builder/assets/css/builder.style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_JSONBuilder_service__WEBPACK_IMPORTED_MODULE_7__["JSONBuilder"],
            _shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_19__["SubDomainService"],
            _services_builder_service__WEBPACK_IMPORTED_MODULE_11__["BuilderService"],
            _templates_services_DefaultJSON_service__WEBPACK_IMPORTED_MODULE_12__["DefaultJSON"],
            _services_JSONUpdateItemTracker_service__WEBPACK_IMPORTED_MODULE_13__["JSONItemTracker"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_21__["DashboardService"],
            _services_formula_service__WEBPACK_IMPORTED_MODULE_9__["FormulaService"],
            _shared_services_feature_access_service__WEBPACK_IMPORTED_MODULE_22__["FeatureAuthService"],
            _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"],
            _shared_services_script_service__WEBPACK_IMPORTED_MODULE_24__["Script"],
            _services_templateSwitching_service__WEBPACK_IMPORTED_MODULE_8__["TemplateSwitching"],
            _templates_services_recommendation_service__WEBPACK_IMPORTED_MODULE_15__["RecommendationService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"],
            _services_UrlShortner_service__WEBPACK_IMPORTED_MODULE_26__["UrlShortner"],
            _services_AppCondition_service__WEBPACK_IMPORTED_MODULE_27__["AppConditionService"],
            _services_component_service__WEBPACK_IMPORTED_MODULE_28__["ComponentService"],
            _templates_services_theming_service__WEBPACK_IMPORTED_MODULE_30__["ThemingService"],
            _services_JSONElement_service__WEBPACK_IMPORTED_MODULE_29__["JSONElement"],
            _shared_services_membership_service__WEBPACK_IMPORTED_MODULE_31__["MembershipService"],
            _shared_services_marketing_service__WEBPACK_IMPORTED_MODULE_14__["MarketingService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__["Title"],
            _shared_services_countdown_promo_service__WEBPACK_IMPORTED_MODULE_33__["CountdownPromoService"],
            _templates_services_templateValidator_service__WEBPACK_IMPORTED_MODULE_37__["TemplateValidatorService"],
            _services_undoRedoBuilder_service__WEBPACK_IMPORTED_MODULE_2__["UndoRedo"],
            _shared_services_social_integration_service__WEBPACK_IMPORTED_MODULE_20__["SocialIntegrationService"],
            _shared_services_intercom_service__WEBPACK_IMPORTED_MODULE_1__["IntercomService"]
            // private location: PlatformLocation
        ])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/site/+builder/builder.template.html":
/*!*****************************************************!*\
  !*** ./src/app/site/+builder/builder.template.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- JUGAAD -->\n<signup-before-demo-builder *ngIf=\"demoBuilder\" (isSignupDone)=\"isSignupDone($event)\"></signup-before-demo-builder>\n<ng-container *ngIf=\"allowUse && !demoBuilder\">\n  <input style=\"left:-9999999px;width:0px\" id=\"wysiwyg-blur-button\" />\n\n  <div class=\"preloader john\" [class.hide]=\"jsonBuilderHelper.getJSONBuilt() && !turningOffFeature && !startloader\">\n    <div class=\"status\">&nbsp;</div>\n  </div>\n  <!--congratulations on publishing animation-->\n  <div class=\"pyro\" *ngIf=\"showCongoMessage\">\n\n\n    <div class=\"before hide\"></div>\n    <div class=\"after hide\"></div>\n  </div>\n  <div *ngIf=\"jsonBuilderHelper.getJSONBuilt()\">\n    <!-- Editor header start-->\n    <nav class=\"navbar navbar-default navbar-fixed-top\" [class.ecom-TopBarPanel]=\"jsonBuilderHelper.isTempType(['Ecom'])\" [class.isProducts]=\"selectedSec ==='product_list'\">\n      <!-- <div class=\"hello-bar-outer\"></div> -->\n      <div class=\"hello-bar-demo\" *ngIf=\"_builderService.isDemo && !online\">\n        <div class=\"col-md-12 np\">\n          <a href=\"javascript:void(0);\" class=\"back-text-p\" (click)=\"goBack()\">\n            <img src=\"https://cdn.filestackcontent.com/kz3qDzUjQt3CaXDelJQd\" class=\"back-link\">\n            <div class=\"back-text\">Back</div>\n          </a>\n          <span>Boost your marketing with highly converting\n            <b>calculators</b> and viral\n            <b>quizzes</b>.</span>\n          <a class=\"st-btn\" [routerLink]=\"['/signup']\">\n            Start Free Trial &nbsp;\n            <i class=\"material-icons\">trending_flat</i>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"cookies-header\" *ngIf=\"subDomainService?.currentCompany?.parent_company === null && hellobarMessage\">\n        <a href=\"javascript:void(0)\" (click)=\"helloBarCtaClick()\">\n          <div class=\"col-md-12 np text-center\">\n            <span>{{hellobarMessage.message}}&nbsp;\n              <ng-container *ngIf=\"hellobarMessage.ticker == 'on_trial_end'\">\n                <b>{{countdownPromoService?.subscription?.trial_end}}</b>.\n                <span *ngIf=\"!(countdownPromoService.countDownPromo?.cdDays > 0)\">&nbsp; Deal expires in </span>\n                <div class=\"timer-outer-w\" *ngIf=\"!(countdownPromoService.countDownPromo?.cdDays > 0)\">\n                  <span *ngIf=\"countdownPromoService.countDownPromo?.cdHour > 0\">&nbsp;\n                    <b>{{countdownPromoService.countDownPromo?.cdHour}}</b>&nbsp;hrs </span>\n                  <span *ngIf=\"countdownPromoService.countDownPromo?.cdMinute > 0\">&nbsp;\n                    <b>{{countdownPromoService.countDownPromo?.cdMinute}}</b>&nbsp;mins</span>\n                  <span *ngIf=\"countdownPromoService.countDownPromo?.cdSecond > 0\">&nbsp;\n                    <b>{{countdownPromoService.countDownPromo?.cdSecond}}</b>&nbsp;secs</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"hellobarMessage.ticker == 'ticker'\">\n                {{hellobarMessage.ticker_date}}\n              </ng-container>\n              <ng-container *ngIf=\"hellobarMessage.ticker == 'cancellation_date'\">\n                <strong>{{currentSubscription?.current_term_end}}</strong>\n              </ng-container>\n              <ng-container *ngIf=\"hellobarMessage.cta.ctaLink == 'pricing'\">\n                <a #ctaTrigger [routerLink]=\"['/settings/membership']\" (click)=\"hellobarCTAclicked(hellobarMessage.id)\" class=\"appupgrade get-p-code\"\n                  *ngIf=\"hellobarMessage.cta.ctaText\">\n                  {{hellobarMessage.cta.ctaText}}\n                </a>\n              </ng-container>\n              <ng-container *ngIf=\"hellobarMessage.cta.ctaLink == 'intercom'\">\n                <a #ctaTrigger href=\"javascript:void(0)\" (click)=\"hellobarCTAclicked(hellobarMessage.id)\" class=\"appupgrade get-p-code intercom_trigger\"\n                  *ngIf=\"hellobarMessage.cta.ctaText\">\n                  {{hellobarMessage.cta.ctaText}}\n                </a>\n              </ng-container>\n              <ng-container *ngIf=\"hellobarMessage.cta.ctaLink == 'upgrade'\">\n                <a #ctaTrigger href=\"javascript:void(0)\" (click)=\"callPopups(hellobarMessage.cta.plan);hellobarCTAclicked(hellobarMessage.id)\" class=\"appupgrade get-p-code\"\n                  *ngIf=\"hellobarMessage.cta.ctaText\">\n                  {{hellobarMessage.cta.ctaText}}\n                </a>\n              </ng-container>\n              <ng-container *ngIf=\"hellobarMessage.cta.ctaLink == 'remove_cancellation'\">\n                <a #ctaTrigger href=\"javascript:void(0)\" (click)=\"removeCancellation(currentSubscription.id);hellobarCTAclicked(hellobarMessage.id)\"\n                  class=\"appupgrade get-p-code\" *ngIf=\"hellobarMessage.cta.ctaText\">\n                  {{hellobarMessage.cta.ctaText}}\n                </a>\n              </ng-container>\n            </span>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"tests\">\n        <div class=\"mobile-top-menu\">\n          <div class=\"topbar-left\">\n            <div class=\"editor-navheader\" [class.header-added]=\"helloBar.flag\">\n              <!-- <a href=\"\" [routerLink]=\"['/dashboard']\" class=\"navbar-brand \" (click)=\"callGA('LOGO')\" [class.comp-builder-logo]=\"logoCompany.includes(subDomainService?.subDomain?.sub_domain) || smartchoicestool == subDomainService?.subDomain?.sub_domain\"> -->\n              <a href=\"/dashboard\"  class=\"navbar-brand \" (click)=\"callGA('LOGO');dashBoardRedirect($event)\" [class.company-logoOuter1]=\"subDomainService.builderLogo\">\n                <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n                <!-- <svg *ngIf=\"!logoCompany.includes(subDomainService?.subDomain?.sub_domain) && smartchoicestool != subDomainService?.subDomain?.sub_domain\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" -->\n                <svg *ngIf=\"!subDomainService.builderLogo\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  x=\"0px\" y=\"0px\" viewBox=\"0 0 340 333\" enable-background=\"new 0 0 340 333\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;    height: 110px;top: -70px;position: absolute;left: -5px;\">\n                  <path class=\"path\" fill=\"#FFFFFF\" stroke=\"#FB6066\" stroke-width=\"9\" stroke-miterlimit=\"10\" d=\"M151.153,235.063C128.156,238.427 111.107,258.151 111.107,281.393C111.107,307.236 132.087,328.216 157.93,328.216C183.772,328.216 204.752,307.236 204.752,281.393C204.752,272.191 202.041,263.193 196.957,255.523L176.874,275.698L151.724,275.698L136.55,290.872\"\n                  />\n                </svg>\n                <img *ngIf=\"subDomainService.company_custom_features && subDomainService.builderLogo\" [src]=\"subDomainService.builderLogo\"\n                />\n\n              </a>\n\n              <!-- <a href=\"https://outgrow.co/\" class=\"logo-text\" style=\"margin-top: 11px;\" *ngIf=\"logoCompany.includes(subDomainService?.subDomain?.sub_domain)  || smartchoicestool == subDomainService?.subDomain?.sub_domain\">Powered by Outgrow</a> -->\n              <!-- <a href=\"https://outgrow.co/\" class=\"logo-text\" style=\"margin-top: 11px;\" *ngIf=\"subDomainService.builderLogo\">powered by outgrow</a> -->\n              <a href=\"/dashboard\" class=\"mobile-navbar-brand\" (click)=\"callGA('LOGO');dashBoardRedirect($event)\">\n                <img src=\"assets/images/mobileLogo.png\" *ngIf=\"!logoCompany.includes(subDomainService?.subDomain?.sub_domain) && smartchoicestool != subDomainService?.subDomain?.sub_domain\"\n                />\n                <img src=\"https://s3.amazonaws.com/outgrow-assets/mobileLog-cf.png\" *ngIf=\"logoCompany.includes(subDomainService?.subDomain?.sub_domain)\"\n                />\n                <img src=\"https://s3.amazonaws.com/outgrow-assets/mobileLogo-sc.png\" *ngIf=\"smartchoicestool == subDomainService?.subDomain?.sub_domain\"\n                />\n              </a>\n              <!-- <a href=\"javascript:void(0)\" *ngIf=\"subDomainService.company_custom_features && subDomainService.company_custom_features['extras']['company_logo']['active'] && subDomainService.company_custom_features['extras']['company_logo']['builderLogo']\"\n                class=\"a-close\" type=\"button\" (click)=\"removeLogo()\"><i class=\"material-icons\">close</i></a> -->\n            </div>\n            <input type=\"text\" class=\"ed-projectname ellipsis \" contenteditable=\"true\" id=\"fname\" (blur)=\"appNameblured();onCalcNameChanged();\"\n              (focus)=\"appNameFocused()\" [(ngModel)]=\"jsonBuilderHelper.getJSONBuilt().name\" placeholder=\"{{companyName}}'s Calculator\"\n            />\n          </div>\n          <div class=\"input-next-div\" [class.build-process]=\"selectedSec=='build'\" [class.builder-parent-demo]=\"_builderService.isDemo\"\n            [class.builder-parent]=\"hellobarMessage\" [class.process-margin]=\"selectedSec=='config' && (selectedConfigComponent=='email' || selectedConfigComponent=='embedded-code' || selectedConfigComponent=='integrations')\">\n            <ul>\n              <li *ngIf=\"jsonBuilderHelper.isTempType(['Ecom']) && (['allyssa@ssdigitalmedia.com', 'michael@ssdigitalmedia.com', 'iolgart@seniorvillages.com', 'JRestum@csig.com'].indexOf(storage.user.emails[0].email) == -1)\">\n                <a href=\"javascript:void(0)\" (click)=\"onSelect('product_list')\" [class.active]=\"selectedSec=='product_list'\">\n                  <i class=\"material-icons \">settings</i>{{isScreenSmall?'':(jsonBuilderHelper.ecomProductsLoaded?'Edit':'Add')}} Products</a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0)\" (click)=\"onSelect('build')\" *ngIf=\"(['allyssa@ssdigitalmedia.com', 'michael@ssdigitalmedia.com', 'iolgart@seniorvillages.com', 'JRestum@csig.com'].indexOf(storage.user.emails[0].email) == -1)\" [class.active]=\"selectedSec=='build'\">\n                  <i class=\"material-icons \">dashboard</i> Build</a>\n              </li>\n              <!--<li>\n                <i class=\"material-icons\">keyboard_arrow_right</i>\n              </li>-->\n              <li>\n                <a href=\"javascript:void(0)\" (click)=\"onSelect('config')\"  [class.active]=\"selectedSec=='config'\">\n                  <i class=\"material-icons \">settings</i> Configure</a>\n              </li>\n              <!--<li>\n                <i class=\"material-icons\">keyboard_arrow_right</i>\n              </li>-->\n              <li *ngIf=\"isAnalyticsAvailable && userRoleCheck!=='DESIGNER'\">\n                <a (click)=\"onSelect('analytics')\" [class.active]=\"selectedSec=='analytics'\">\n                  <i class=\"material-icons \">equalizer</i>Analyze</a>\n              </li>\n              <li *ngIf=\"!isAnalyticsAvailable\">\n                <a *ngIf=\"!jsonBuilderHelper.getJSONBuilt().liveApp\" (click)=\"checkAnalytics()\" [class.active]=\"selectedSec=='analytics'\">\n                  <i class=\"material-icons\">equalizer</i>Analyze</a>\n                <a *ngIf=\"jsonBuilderHelper.getJSONBuilt().liveApp\" (click)=\"checkAnalytics()\" [class.active]=\"selectedSec=='analytics'\">\n                  <i class=\"material-icons\">equalizer</i>Analyze</a>\n              </li>\n              <li>\n                <a (click)=\"onSelect('performance')\" [class.active]=\"selectedSec=='performance'\">\n                  <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>performance</a>\n              </li>\n            </ul>\n          </div>\n          <!--<p *ngIf=\"!unique\">This calculator Name is already taken</p>-->\n        </div>\n        <div class=\"mobile-menu-icon\" (click)=\"mobileMenuClicked()\">\n          <i class=\"material-icons\">menu</i>\n        </div>\n        <div class=\"navbar-rightside-outer\">\n          <div class=\"navbar-rightside\">\n            <div class=\"small-btns\">\n              <div class=\"btn-group\">\n                <div class=\"save_icon hide\">\n                  <!-- <span class=\"saving\">all changes are saved</span> -->\n                  <span class=\"saving\">Saved</span>\n                  <button type=\"button\" class=\"btn btn-basic btn-menu help-tip green-bg\">\n                    <!--<span class=\"elem save-circle\">\n                        <i class=\"material-icons green-color\">check</i>\n                        </span>-->\n                    <div class=\"icon icon--order-success svg\">\n                      <svg width=\"25\" height=\"25\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <g>\n                          <g stroke=\"#2ebf27\" id=\"svg_1\" stroke-width=\"2\" fill=\"none\">\n                            <circle stroke=\"null\" id=\"svg_2\" stroke-dasharray=\"220px, 220px\" r=\"11.3125\" cy=\"12.437499\" cx=\"12.4375\"></circle>\n                            <path stroke=\"null\" id=\"svg_3\" stroke-dasharray=\"50px, 50px\" d=\"m6.19785,14.083626l3.733125,3.501437l8.858222,-9.713824\"></path>\n                          </g>\n                        </g>\n                      </svg>\n                    </div>\n                    <!--<div class=\"help-checktip\">{{_builderService.saveStatus}}</div>-->\n                  </button>\n\n                </div>\n                <!-- <div class=\"help-checktip\">(since {{activeSince}})</div> -->\n              </div>\n              <div class=\"btn-group\" *ngIf=\"selectedSec !='product_list'\">\n                <div class=\"help-tip sidebar-helptip\">\n                  <a class=\"btn btn-basic btn-menu cpy_link live-url2\" href=\"javascript:void(0);\" type=\"button\" (click)=\"copyButton();\">\n                    <i class=\"material-icons\">library_books</i>\n                  </a>\n                  <div class=\"help-checktip cpy-helptip\" *ngIf=\"jsonBuilderHelper.isClipboardSupported\">Copy live {{getLockText()}}'s URL to Clipboard</div>\n                  <div class=\"help-checktip cpy-helptip\" *ngIf=\"!jsonBuilderHelper.isClipboardSupported\">{{getLiveUrl()}}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"large-btns\" *ngIf=\"selectedSec !='product_list'\">\n              <div class=\"help-tip sidebar-helptip\">\n                <a type=\"button\" href=\"javascript:void(0);\" class=\"btn btn-basic btn-menu cpy_link\" (click)=\"onPreview();callGA('PREVIEW')\">\n                  <!--PREVIEW-->\n                  <i class=\"material-icons\">visibility</i>\n                </a>\n                <div class=\"help-checktip\" *ngIf=\"jsonBuilderHelper.isClipboardSupported\">Preview {{getLockText()}}</div>\n              </div>\n              <div class=\"dropdown preview-dropdown\">\n                <button type=\"button\" *ngIf=\"!beingPublished\" class=\"btn btn-basic my-custom-dropdown\" (click)=\"showDropdown = !showDropdown\">\n                  {{(jsonBuilderHelper.getJSONBuilt().mode == 'PUBLIC')?((!jsonBuilderHelper.getJSONBuilt().changed && jsonBuilderHelper.getJSONBuilt().liveApp)?'LIVE':'PUBLISH'):'GO LIVE'}}\n                  <span class=\"caret1\">\n                    <i class=\"material-icons\">keyboard_arrow_down</i>\n                  </span>\n                </button>\n                <button type=\"button\" *ngIf=\"beingPublished\" class=\"btn btn-basic loading pd10\" (click)=\"showDropdown = !showDropdown\">\n                </button>\n                <div class=\"dropdown-menu cust-builder-dropdown\">\n                  <!-- <div class=\"custom-builder-dropdown-head\">\n                    <h6>Choose publish destination</h6>\n                </div> -->\n                  <div class=\"custom-builder-dropdown-body\">\n                    <ul>\n                      <li class=\"selected-default\">\n                        <input type=\"checkbox\" name=\"my-check\" id=\"my-check\" checked=\"checked\" />\n                        <label for=\"my-check\">\n                          <span>{{publishUrl}}</span>\n                        </label>\n                        <p>\n                          <a href=\"javascript:void(0)\" *ngIf=\"!jsonBuilderHelper.getJSONBuilt().liveApp\">Not Published</a>\n                        </p>\n                      </li>\n                      <!-- <li [class.selected-default]=\"isCNameAccess && subDomainService.currentCompany?.cname?.url\"> -->\n                      <li>\n                        <div [class.selected-default]=\"isCNameAccess && subDomainService.currentCompany?.cname?.url\">\n                          <input type=\"checkbox\" name=\"my-check\" id=\"my-check1\" [disabled]=\"!isCNameAccess || !subDomainService.currentCompany?.cname?.url\"\n                            [checked]=\"isCNameAccess && subDomainService.currentCompany?.cname?.url\" (click)=\"checkCnameAccess()\"\n                          />\n                          <label for=\"my-check1\" (click)=\"checkCnameAccess()\">\n                            <i class=\"material-icons lock-icon\" *ngIf=\"!isCNameAccess\">lock_outline</i>\n                            Custom Domain\n                          </label>\n                        </div>\n                        <p class=\"cust-url\" *ngIf=\"isCNameAccess && subDomainService.currentCompany?.cname?.url\">\n                          <span>{{subDomainService.currentCompany?.cname?.url}}</span>\n                        </p>\n                        <p *ngIf=\"isCNameAccess\">\n                          <a href=\"javascript:void(0)\" (click)=\"redirectToCname('/settings/custom-domain')\">Click Here</a>\n                          to {{!subDomainService.currentCompany?.cname?.url? 'add a': 'edit'}} custom domain\n                        </p>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"custom-builder-dropdown-footer\">\n                    <!-- <button class=\"btn btn-basic loading\" >Publish to Selected Domain</button> -->\n                    <button class=\"btn btn-basic loading\" *ngIf=\"beingPublished\" disabled>Publishing</button>\n                    <button id=\"live-btn\" type=\"button\" class=\"btn btn-basic\" *ngIf=\"!beingPublished\" (click)=\"onPublish($event);callGA('GOLIVE')\"\n                      [disabled]=\"(!jsonBuilderHelper.getJSONBuilt().changed && jsonBuilderHelper.getJSONBuilt().liveApp) || _builderService.isDemo\">\n                      {{(jsonBuilderHelper.getJSONBuilt().mode == 'PUBLIC')?((!jsonBuilderHelper.getJSONBuilt().changed && jsonBuilderHelper.getJSONBuilt().liveApp)?'LIVE':'Publish\n                      to Selected Domain'):'GO LIVE'}}\n                    </button>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"vertical-line\"></div>\n\n            <div class=\"btn-group navbar-leftside\">\n              <div class=\"col-xs-12 no-padding navbar-inner\">\n                <div class=\"btn-group help-options new-drop new-help-luk\" (mouseenter)='addOpen()' (mouseleave)='removeOpen()'>\n                  <a target=\"_blank\" class=\"support_outer learn-circle\">\n                    <!--<i class=\"material-icons support_icon dropdown-link\">import_contacts</i>-->\n                    <!-- <span class=\"help-img\">&nbsp;</span> -->\n\n                    <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"10px\" id=\"Capa_1\" style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 512 512\" width=\"10px\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\n                      <g>\n                        <g>\n                          <g>\n                            <circle cx=\"255.984\" cy=\"492\" fill=\"#555\" r=\"20\"></circle>\n                            <path d=\"M412.979,155.775C412.321,69.765,342.147,0,255.984,0c-86.57,0-157,70.43-157,157c0,11.046,8.954,20,20,20     s20-8.954,20-20c0-64.514,52.486-117,117-117s117,52.486,117,117c0,0.356,0.009,0.71,0.028,1.062     c-0.405,46.562-28.227,88.348-71.12,106.661c-40.038,17.094-65.908,56.675-65.908,100.839V412c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20v-46.438c0-28.117,16.334-53.258,41.614-64.051c57.979-24.754,95.433-81.479,95.418-144.516     C413.016,156.585,413.003,156.179,412.979,155.775z\" fill=\"#555\"></path>\n                          </g>\n                        </g>\n                      </g>\n                      </svg>\n                    <!--<i class=\"material-icons dropdown-link\">keyboard_arrow_down</i>-->\n                  </a>\n                  <div class=\"dd-outer\">\n                    <ul class=\"dropdown-menu\">\n                      <li>\n                        <a class=\"hvr-sweep-to-right\" href=\"http://support.outgrow.co\" target=\"_blank\">\n                          <i class=\"material-icons dropdown-icons\">headset_mic</i>\n                          <span class=\"dropdown-text\">Support</span>\n                        </a>\n                      </li>\n                      <li>\n                        <a class=\"hvr-sweep-to-right\" href=\"javascript:void(0);\" (click)=\"videoModal()\">\n                          <i class=\"material-icons dropdown-icons\">videocam</i>\n                          <span class=\"dropdown-text\">Help Videos</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n                <!-- Start: header name-dropdown -->\n                <sd-toolbar [page]=\"'builder'\" (notify)=\"helloBarNotify($event)\"></sd-toolbar>\n                <!-- End: header name-dropdown -->\n\n\n              </div>\n            </div>\n          </div>\n\n            <!--upgrade template popover-->\n            <div class=\"upgrade-popover\" *ngIf=\"jsonBuilderHelper.isTempName(['one-page-card-oldresult', 'one-page-card-new', 'template-six', 'inline-temp', 'inline-temp-new', 'template-five', 'template-five-oldresult']) && versionPopover && jsonBuilderHelper.getJSONBuilt().version !== 'V_3_5'\">\n              <div class=\"left-section\">\n                <i class=\"material-icons notify-icon\">notifications</i>\n              </div>\n              <div class=\"right-section\">\n                <a class=\"close-btn\" href=\"javascript:void(0)\" (click)=\"versionPopover = false\"><i class=\"material-icons close\">close</i></a>\n                <div class=\"upgrade-heading\">A new version of this template is now available.</div>\n                <div class=\"feature-list hide\">\n                  <!--<div class=\"features\">\n                    <i class=\"material-icons\">star</i><span>Date time question type</span>\n                  </div>\n                  <div class=\"features\">\n                    <i class=\"material-icons\">star</i><span>Full image on welcome screen</span>\n                  </div>-->\n                  <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>\n                </div>\n                <a class=\"template-update-btn\" (click)=\"upgradeVersion()\" href=\"javascript:void(0);\">Switch to new version</a>\n              </div>\n            </div>\n\n        </div>\n      </div>\n    </nav>\n\n    <div [class.header-added]=\"helloBar.flag\">\n      <!-- Editor header end-->\n      <div class=\"process-bar\" [class.propertiesHidden]=\"propertiesHidden\" [class.processBarHide]=\"selectedSec!=='build'\" [class.build-process]=\"selectedSec=='build'\"\n        [class.builder-parent-demo]=\"_builderService.isDemo\" [class.builder-parent]=\"hellobarMessage\" [class.process-margin]=\"selectedSec=='config' && (selectedConfigComponent=='email' || selectedConfigComponent=='embedded-code' || selectedConfigComponent=='integrations')\">\n        <ul id=\"builder-edit-div\">\n          <li [ngClass]=\"{'disable': _redoUndoService.undo_stack.length<2}\">\n            <div class=\"help-tip sidebar-helptip pull-left\">\n              <a href=\"javascript:void(0);\" type=\"button\" (click)=\"_redoUndoService.undoFunction();\">\n                <i class=\"material-icons \">undo</i>\n              </a>\n              <div class=\"help-checktip-small \">Undo</div>\n            </div>\n          </li>\n          <li [ngClass]=\"{'disable': _redoUndoService.redo_stack.length<1}\">\n            <div class=\"help-tip sidebar-helptip pull-left\">\n              <a href=\"javascript:void(0)\" type=\"button\" (click)=\"_redoUndoService.redoFunction();\">\n                <i class=\"material-icons \">redo</i>\n              </a>\n              <div class=\"help-checktip-small \">Redo</div>\n            </div>\n          </li>\n          <li>\n            <div class=\"help-tip sidebar-helptip pull-left\">\n              <a class=\" btn-menu-mw help-tip\" [class.active]=\"!isMobileView\" type=\"button\" (click)=\"previewOnWeb()\">\n                <i class=\"material-icons\">desktop_windows</i>\n              </a>\n              <div class=\"help-checktip-small \">Web view</div>\n            </div>\n          </li>\n          <li>\n            <div class=\"help-tip sidebar-helptip pull-left\">\n              <a class=\"btn-menu-mw help-tip\" [class.active]=\"isMobileView\" type=\"button\" (click)=\"previewOnMobile()\">\n                <i class=\"material-icons\">smartphone</i>\n              </a>\n              <div class=\"help-checktip-small \">Mobile view</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <!-- Editor Left sidebar start -->\n      <div class=\"editor-sidebar sidebar\" *ngIf=\"jsonBuilderHelper.getJSONBuilt()\" [class.ecom-hide-left]=\"selectedSec=='product_list' || selectedSec=='performance'\"\n        [class.builder-parent-demo]=\"_builderService.isDemo\" [class.builder-parent]=\"hellobarMessage\" [class.build-bg]=\"selectedSec=='build'\">\n\n        <component-manager *ngIf=\"jsonBuilderHelper.getJSONBuilt()\" [hidden]=\"selectedSec!='build'\"></component-manager>\n        <component-manager-config (selection)=\"selectedConfigComponent = $event\" [hidden]=\"selectedSec!='config'\" [selected]=\"selectedConfigComponent\"></component-manager-config>\n        <calc-analytics-manager *ngIf=\"selectedSec=='analytics'\" [hidden]=\"selectedSec!='analytics'\" [selectedAnalyticComponent]=\"selectedAnalyticComponent\"\n          (selection)=\"selectedAnalyticComponent = $event\"></calc-analytics-manager>\n        <div class=\"mobile-menucross-icon\" (click)=\"mobileMenuCrossClicked()\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </div>\n      <!-- Editor Left sidebar end -->\n      <!-- Editor Right Template section strat -->\n      <div class=\"editor-template-tabs\" [class.ecom-overflow]=\"ecomOverFlow\" [class.ecom-outer]=\"selectedSec=='product_list'\" [class.builder-parent-demo]=\"_builderService.isDemo\"\n        [class.builder-parent1]=\"hellobarMessage\" [class.minH]=\"selectedSec!='build' && selectedSec!='product_list'\">\n        <div id=\"build\">\n\n          <!--Ecom products section  -->\n          <ecom *ngIf=\"selectedSec=='product_list'\" (EcomProductSelectMultiple)=\"ecomOverFlow = $event\" (OpenBuilder)=\"onSelect($event)\">\n          </ecom>\n          <!-- End: ecom products section  -->\n\n          <!-- config section  -->\n          <div class=\"template-section scrollbar og-loader\" [class.builder-parent-demo]=\"_builderService.isDemo\" [class.builder-parent]=\"hellobarMessage\"\n            [hidden]=\"selectedSec!='build'\" (dblclick)=\"toggleProperties()\">\n            <div class=\"quote-banner\" *ngIf=\"showBanner\">\n              <span class=\"cross\" (click)=\"hideBanner()\">\n                <i class=\"material-icons\">add_circle</i>\n              </span>\n\n              <div class=\"left-part\">\n                <h5>Too busy to create an interactive content piece yourself?</h5>\n                <h3>Let us create a professional one for you.</h3>\n              </div>\n              <div class=\"right-part\">\n                <button (click)=\"openIntercom()\" class=\"quote-btn btn\">Get a Quote</button>\n                <p>Prices start at $250</p>\n              </div>\n\n            </div>\n            <Temp-dev class=\"template-container\" [class.template-seven]=\"jsonBuilderHelper.getJSONBuilt().template === 'template-seven'\"\n              [class.mobile]=\"isMobileView\" [class.template-container-hellobar]=\"subscription_status=='in_trial'  || subscription_status!='in_trial' && planId.split('_')[1] == 'm'\"\n              id=\"builder-template-container\"></Temp-dev>\n          </div>\n          <!--End: builder section -->\n\n          <!-- config section  -->\n          <config *ngIf=\"selectedSec=='config'\" [component]=\"selectedConfigComponent\">\n          </config>\n          <!-- End: config section  -->\n\n          <!-- Analytics section  -->\n          <div class=\"pt-30\" [class.builder-parent]=\"hellobarMessage\" [hidden]=\"selectedSec!='analytics'\">\n            <calc-analytics *ngIf=\"selectedSec=='analytics'\" [component]=\"selectedAnalyticComponent\" [calc]=\"jsonBuilderHelper.getJSONBuilt()\">\n            </calc-analytics>\n          </div>\n          <!-- End: Analytics section  -->\n\n          <app-performance *ngIf=\"selectedSec=='performance'\" [hidden]=\"selectedSec!='performance'\" (showBuilder)=\"showBuilder($event)\" (selected_page)=\"showPage($event)\" ></app-performance>\n        </div>\n      </div>\n      <!-- Editor Right Template section end  -->\n      <!--Right Sidebar layout start -->\n\n      <div id=\"sidebar\" class=\"sidebar-offcanvas affix\" [class.builder-parent-demo]=\"_builderService.isDemo\" [class.builder-parent]=\"hellobarMessage\"\n        *ngIf=\"jsonBuilderHelper.getSelectedPage()\" [hidden]=\"selectedSec!='build'\">\n        <div class=\"sidebar-offcanvas-right\" *ngIf=\"jsonBuilderHelper.getSelectedPage()\" [hidden]=\"selectedSec!='build'\">\n          <ul>\n            <li (click)=\"openProperties()\">\n              <div class=\"help-tip sidebar-helptip\">\n                <a [class.active]=\"jsonBuilderHelper.getSelectedControl() && jsonBuilderHelper.getSelectedControl().type !== 'leadform' &&(jsonBuilderHelper.getSelectedModel() !=='Global_Settings' ) && (jsonBuilderHelper.getSelectedModel() === 'Control' || jsonBuilderHelper.getSelectedModel() === 'Outcome_Settings' || jsonBuilderHelper.getSelectedModel() === 'Page' || (jsonBuilderHelper.componentManager('section') && jsonBuilderHelper.getSelectedModel() === 'Section' && jsonBuilderHelper.getSelectedSection().type !=='LeadForm' && jsonBuilderHelper.getSelectedSection().type !=='LeadFormQ' && jsonBuilderHelper.getSelectedSection().type !=='Content Area'))\"\n                  (click)=\"selectPage()\" href=\"javascript:void(0)\">\n                  <i class=\"material-icons\">dashboard</i>\n                </a>\n                <div class=\"help-checktip\">Edit Page Properties</div>\n              </div>\n            </li>\n            <li (click)=\"openProperties()\">\n              <div class=\"help-tip sidebar-helptip\" [ngClass]=\"{'disable': ['experian'].indexOf(this.jsonBuilderHelper.getJSONBuilt().template) >= 0 && !this.jsonBuilderHelper.getJSONBuilt().pages[0].visible}\">\n                <a [class.active]=\"(jsonBuilderHelper.getSelectedModel() === 'Section' && (jsonBuilderHelper.getSelectedSection()?.type === 'LeadFormQ' || jsonBuilderHelper.getSelectedSection()?.type === 'Content Area' || jsonBuilderHelper.getSelectedSection()?.type === 'LeadForm')) || (jsonBuilderHelper.getSelectedModel() === 'Control' && (jsonBuilderHelper.getSelectedControl()?.type === 'leadform' || jsonBuilderHelper.getSelectedControl()?.type === 'leadform_question'))\"\n                  href=\"javascript:void(0)\" (click)=\"openLeadEditor($event)\">\n                  <i class=\"material-icons \"> person_add</i>\n                </a>\n                <div class=\"help-checktip\">Lead Generation</div>\n              </div>\n            </li>\n            <li (click)=\"openProperties()\" >\n              <div class=\"help-tip sidebar-helptip\">\n                <a [class.active]=\"jsonBuilderHelper.getSelectedModel() && jsonBuilderHelper.getSelectedModel() ==='Global_Settings'\" (click)=\"openGlobalSettings()\"\n                  href=\"javascript:void(0)\">\n                  <i class=\"material-icons\">edit</i>\n                </a>\n                <div class=\"help-checktip\">Display Settings</div>\n              </div>\n            </li>\n            <li (click)=\"openProperties()\" *ngIf=\"jsonBuilderHelper.isTempType(['Ecom'])\">\n              <div class=\"help-tip sidebar-helptip\">\n                <a [class.active]=\"jsonBuilderHelper.getSelectedModel() && jsonBuilderHelper.getSelectedModel() ==='Editor_Payment'\" (click)=\"jsonBuilderHelper.setSelectedModel('Editor_Payment')\"\n                  href=\"javascript:void(0)\">\n                  <i class=\"material-icons\">shopping_cart</i>\n                </a>\n                <div class=\"help-checktip\">Ecommerce Settings</div>\n              </div>\n            </li>\n            <li class=\"prop-arrow\" (click)=\"toggleProperties()\">\n              <i class=\"material-icons\"></i>\n            </li>\n          </ul>\n        </div>\n        <!--editors -->\n        <editor *ngIf=\"(jsonBuilderHelper.getSelectedControl() || jsonBuilderHelper.getSelectedPage()) && selectedSec=='build'\">\n        </editor>\n        <!--editors -->\n        <!--&& !((jsonBuilderHelper.getSelectedPage().type == 'Questionnaire') && (jsonBuilderHelper.getSelectedModel() == 'Page'))-->\n      </div>\n    </div>\n    <div class=\"mobile-prop-cross-icon\" (click)=\"mobilePropCrossClicked()\" [hidden]=\"selectedSec!='build'\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <div class=\"properties-modal-backdrop\" [hidden]=\"selectedSec!='build'\"></div>\n    <div class=\"sidebar-modal-backdrop\"></div>\n    <!--Right Sidebar layout end -->\n    <!-- Modal -->\n    <div class=\"modal fade upload-bg\" role=\"dialog\" [class.TModel]=\"jsonBuilderHelper.getJSONBuilt().template === 'template-six'\">\n      <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"col-md-12 text-center\">\n              <button (click)=\"upload('bg',false);callGA('REPLACEBG')\" data-toggle=\"modal\" data-target=\".upload-bg\" type=\"button\" class=\"btn btn-default modal-upload-btn\">\n                <i class=\"material-icons\">add_a_photo</i>\n                UPLOAD NEW\n              </button>\n            </div>\n            <br>\n            <div class=\"modal-title\">or</div>\n            <br>\n            <h4 class=\"modal-title\"> Select from our selection below.</h4>\n            <div class=\"col-md-12 gallery-content-center\">\n              <div class=\"image-outer\" *ngFor=\"let imgShow of imgContainer\">\n                <a [class.hide]=\"!imgShow.visible\" href=\"javascript:void(0);\" (click)=\"applyImage(imgShow);jsonBuilderHelper.getSelectedPage().bgImage = imgShow.url; this.jsonBuilderHelper.getSelectedPage().bgColor = '';\"\n                  data-toggle=\"modal\" data-target=\".upload-bg\">\n                  <div class=\"info\">\n                    <div class=\"info-sub\">\n                      <i class=\"material-icons\">done_all</i>\n                      <span>Use Image</span>\n                    </div>\n                  </div>\n                  <img [attr.src]=\"imgShow.visible?imgShow.thumbnail:''\" />\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-12 text-center\">\n              <button type=\"button\" class=\"load-btn\" *ngIf=\"isLoadMoreButton()\" (click)=\"showNextImages();\">LOAD MORE\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <formula-pop *ngIf=\"jsonBuilderHelper.getJSONBuilt().templateType=='Numerical'\"></formula-pop>\n    <og-video-modal [templateType]=\"jsonBuilderHelper.getJSONBuilt().templateType\"></og-video-modal>\n    <!-- <og-card-plan-modal></og-card-plan-modal> -->\n    <og-payment-modal (notify)=\"openModal($event)\"></og-payment-modal>\n    <graph-pop *ngIf=\"jsonBuilderHelper.isTempType(['Numerical','Graded']) && componentService.graph.graphPop\"></graph-pop>\n    <table-pop *ngIf=\"jsonBuilderHelper.isTempType(['Numerical','Graded']) && componentService.tableExcel.tablePop\"></table-pop>\n    <!-- Logic Jump popup-->\n    <logic-jump *ngIf=\"jsonBuilderHelper.editors('logicJump') || jsonBuilderHelper.editors('sectionalLogicJump')\"></logic-jump>\n  </div>\n\n  <!-- upgrade modal new -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"publish-upgrade\" [class.mac-compatible]=\"subscription_status != 'in_trial'\" role=\"dialog\" data-backdrop=\"static\"\n    data-keyboard=\"false\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <button type=\"button\" class=\"close\" (click)=\"closeCongoMessage()\" data-dismiss=\"modal\">\n            <i class=\"material-icons\">close</i>\n          </button>\n          <div class=\"left-sec\">\n            <div class=\"text-center live-modal\">\n              <span class=\"icon-play-next\">\n                <!--<i class=\"material-icons\">check_circle</i>-->\n                <div class=\"icon icon--order-success svg\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"45px\" height=\"45px\">\n                    <g fill=\"none\" stroke=\"#2ebf27\" stroke-width=\"2\">\n                      <circle cx=\"22\" cy=\"22\" r=\"21\" style=\"stroke-dasharray:220px, 220px; stroke-dashoffset: 480px;\"></circle>\n                      <path d=\"M10.417,24.778 l6.93,5.909 l 16.444 -16.393\" style=\"stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;\"></path>\n                    </g>\n                  </svg>\n                </div>\n              </span>\n              <!--<div class=\"live-head\">Congrats on Publishing</div>-->\n              <div class=\"live-head\">Your {{publishPopUpText()}} Is Now LIVE</div>\n              <div class=\"custom-tabs-outer\">\n                <ul class=\"nav nav-tabs\">\n                  <li class=\"active\">\n                    <a data-toggle=\"tab\" href=\"#share\" class=\"share-icon\" (click)=\"popUpHeading='s';\">\n                      <div class=\"tab-icons\">&nbsp;</div>Share</a>\n                  </li>\n                  <li>\n                    <a data-toggle=\"tab\" href=\"#website\" class=\"web-icon\" (click)=\"popUpHeading='e';\">\n                      <div class=\"tab-icons\">&nbsp;</div>EMBED ON YOUR WEBSITE</a>\n                  </li>\n                  <!-- <li>\n                    <a data-toggle=\"tab\" href=\"#articles\" class=\"article-icon\">\n                      <div class=\"tab-icons\">&nbsp;</div>Instant Articles</a>\n                  </li> -->\n                  <li>\n                    <a data-toggle=\"tab\" href=\"#amp\" class=\"amp-icon hide\">\n                      <div class=\"tab-icons\">&nbsp;</div>Google AMP</a>\n                  </li>\n                </ul>\n                <div class=\"tab-content custom-tab-content\">\n                  <div class=\"head-top\">\n                    <h3>{{popUpHeading=='s'? 'Share this public URL' : 'Use this code'}}</h3>\n                    <div class=\"help-tip\">\n                      <a class=\"help-link\" *ngIf=\"popUpHeading !=='s'\" href=\"https://support.outgrow.co/docs/embedding-basics\" target=\"_blank\">\n                        <span>?</span>\n                      </a>\n                      <div class=\"help-checktip live-link-help\">Help</div>\n                    </div>\n                  </div>\n                  <div id=\"website\" class=\"tab-pane fade\">\n                    <div class=\"embed-code-outer\" *ngIf=\"jsonBuilderHelper &&jsonBuilderHelper.getJSONBuilt() && jsonBuilderHelper.getJSONBuilt().template !== 'template-nine' && jsonBuilderHelper.getJSONBuilt().template !== 'template-ten'\">\n                      {{fullPageCode}}{{jsonBuilderHelper.getJSONBuilt().fbComments?fbCommentsCode:''}}\n                    </div>\n                    <div class=\"embed-code-outer\" *ngIf=\"jsonBuilderHelper &&jsonBuilderHelper.getJSONBuilt() && jsonBuilderHelper.getJSONBuilt().template === 'template-nine'\">\n                      {{setChatBoatEmbedUrl()}}\n                    </div>\n                    <div class=\"embed-code-outer\" *ngIf=\"jsonBuilderHelper &&jsonBuilderHelper.getJSONBuilt() && jsonBuilderHelper.getJSONBuilt().template === 'template-ten'\">\n                      {{getTemplateTenEmbededUrl()}}\n                    </div>\n                  </div>\n                  <div id=\"articles\" class=\"tab-pane fade\">\n                    <div class=\"embed-code-outer\">\n                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed\n                      to using 'Content here, content here', making it look like readable English.\n                    </div>\n                  </div>\n                  <div id=\"amp\" class=\"tab-pane fade\">\n                    <div class=\"embed-code-outer\">\n                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout\n                    </div>\n                  </div>\n                  <div id=\"share\" class=\"tab-pane fade in active\">\n                    <div class=\"embed-code-outer\">\n                      <div class=\"live-url url-style\">{{srcUrl}}</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"\">\n                <div class=\"live-subhead link-style hide\">\n                  <div class=\"col-sm-9 cpy-txt\">\n                    <span class=\"share-head\">\n                      Share this URL :\n                    </span>\n                  </div>\n                  <div class=\"col-sm-3 cpy-btn preview_copy\" *ngIf=\"jsonBuilderHelper.isClipboardSupported\">\n                    <a href=\"javascript:void(0)\" class=\"live-url live-url1\" (click)=\"previwCopy()\">Copy Link</a>\n                  </div>\n                </div>\n                <div class=\"live-subhead selected-link hide\">\n                  <div class=\"live-url url-style\">{{srcUrl}}</div>\n                </div>\n                <div class=\"promo-tip hide\">\n                  <div class=\"red-bar\">\n                    <i class=\"material-icons\">lightbulb_outline</i>\n                  </div>\n                  <span>\n                    TIP: Use our promotional checklist to maximize traffic to your Calculator/Quiz.\n                    <a href=\"javascript:void(0);\" id=\"promo-link\" class=\"text-red\" data-dismiss=\"modal\">Go to Promotion Checklist</a>\n                  </span>\n                </div>\n                <!--<div class=\"col-xs-12 np text-center cpy-btn\">\n                  <a class=\"btn-done\" (click)=\"closeCongoMessage()\" data-dismiss=\"modal\">Done</a>\n                </div>-->\n                <div class=\"col-sm-3 preview_copy copy-btn-new\" *ngIf=\"jsonBuilderHelper.isClipboardSupported\">\n                  <div class=\"col-xs-9 np help-outer\">\n                    <div *ngIf=\"popUpHeading != 's'\">Need more embed options?\n                      <a href=\"javascript:void(0);\" (click)=\"redirectToConfig()\">Click here</a>\n                    </div>\n                  </div>\n                  <div class=\"copy-new col-xs-3 np\">\n                    <a href=\"javascript:void(0)\" class=\"live-url live-url1\" (click)=\"copyUrl()\">Copy</a>\n                  </div>\n                </div>\n                <div class=\"promo-link\">\n                  <a href=\"javascript:void(0);\" id=\"promo-link\" class=\"text-red\" data-dismiss=\"modal\">Go to Promotion Checklist</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"right-sec\" *ngIf=\"this.subscription_status === 'in_trial'\">\n            <div class=\"right-sec-inner\">\n              <div class=\"icon-block hide\">\n                <!--<i class=\"material-icons rotate-45\">monetization_on</i>-->\n                <img src=\"https://cdn.filestackcontent.com/x5HM9PumQGO4duZvDRd7\" alt=\"clock\">\n              </div>\n              <div class=\"referal-heading\">REFER FRIENDS\n                <br>AND GET $45 CREDIT!</div>\n            </div>\n            <div class=\"referal-img\"></div>\n            <div class=\"dis-text\">\n              <h1 class=\"hide\">Get 20% OFF </h1>\n              <span>\n                <!--On All Annual Plans Upgrade Before-->\n                Give Your Friends One Free Month Of Essentials Plan (Priced At $115/Month)*. You Get $45 Credit When They Use Your Link At\n                Outgrow\n              </span>\n              <h1 class=\"hide\">{{countdownPromoService?.subscription?.trial_end}}</h1>\n            </div>\n            <div class=\"btn-outer\">\n              <a href=\"javascript:void(0)\" class=\"btn-up\" (click)=\"viewReferal()\">View Referal Code</a>\n              <p class=\"promo-code hide\">\n                <span>Promo Code:</span>UPGRADE20%</p>\n              <!-- <a href=\"javascript:void(0)\" class=\"btn-up\" *ngIf=\"!showPromoCode\" (click)=\"showPromoCode = !showPromoCode\">Get Promo Code</a> -->\n            </div>\n            <div class=\"p-code hide\" *ngIf=\"showPromoCode\">\n              <div class=\"top-border\"></div>\n              <div class=\"p-text\">\n                <i class=\"material-icons\">local_activity</i>\n                <div class=\"code-outer\"> Promo Code: UPGRADE20%\n                  <span>Only\n                    <span>{{noOfPromoCodes}}</span> promo\n                    <span *ngIf=\"noOfPromoCodes === 1\"> code </span>\n                    <span *ngIf=\"noOfPromoCodes > 1\"> codes </span>left for the week</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <canvas id=\"canvas\"></canvas>\n  </div>\n  <!--upgrade modal ends-->\n\n  <div class=\"ecom-tour\" *ngIf=\"jsonBuilderHelper.ecom_intro_overlay && jsonBuilderHelper.isTempType(['Ecom'])\" (click)=\"introoverlayEcom()\">\n    <div class=\"ecom-tour-overlay rightside\"></div>\n    <div class=\"ecom-tour-overlay\">\n      <div class=\"ecomtour-gotobuild-outr\">\n        <div class=\"ecomtour-gotobuild\">Go to build</div>\n        <div class=\"ecomtour-gotobuild-info\">\n          <p class=\"\">Go to build from here</p>\n          <span>\n            <i class=\"material-icons\">\n              keyboard_arrow_left\n            </i>\n          </span>\n        </div>\n      </div>\n      <div class=\"ecomtour-addpro-outr addpro\">\n        <div class=\"ecomtour-addpro\">\n          <i class=\"material-icons\">add</i>\n        </div>\n        <div class=\"ecomtour-gotobuild-info\">\n          <p class=\"\">Add product from here</p>\n          <span>\n            <i class=\"material-icons\">\n              keyboard_arrow_left\n            </i>\n          </span>\n        </div>\n      </div>\n      <div class=\"ecomtour-gotobuild-info editor-info\">\n        <p class=\"\">Edit product details here</p>\n        <span>\n          <i class=\"material-icons\">\n            keyboard_arrow_left\n          </i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"intro_overlay && !jsonBuilderHelper.isTempType(['Ecom'])\" (click)=\"introoverlay()\" [ngClass]=\"{\n      'intro-overlay': !jsonBuilderHelper.isTempType(['Ecom']),\n      't2-temp': jsonBuilderHelper.getJSONBuilt()?.template.split('-',2).join('-') === 'sound-cloud',\n      't4-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'experian',\n      't5-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'template-five',\n      't6-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'template-six',\n      't7-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'template-seven',\n      't8-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'template-eight',\n      't9-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'template-nine',\n      't10-temp': jsonBuilderHelper.getJSONBuilt()?.template === 'template-ten',\n      'builder-parent': hellobarMessage,\n      'without-banner': !showBanner\n      }\">\n    <img *ngIf=\"jsonBuilderHelper.getJSONBuilt()?.template === 'template-seven'\"\n    [ngClass]=\"{'t7-ques': jsonBuilderHelper.getJSONBuilt()?.template === 'template-seven'}\"\n      src=\"https://dlvkyia8i4zmz.cloudfront.net/bXxPuU4UQE6mq2Ps7WNr_t7_question.PNG\">\n    <div class=\"right-button-outer\">\n      <ul class=\"icon-box\">\n        <li class=\"active\">\n          <i class=\"material-icons \">dashboard</i>\n        </li>\n        <li>\n          <i class=\"material-icons \"> person_add</i>\n        </li>\n        <li>\n          <i class=\"material-icons \">edit</i>\n        </li>\n      </ul>\n      <img src=\"https://dlvkyia8i4zmz.cloudfront.net/Jgx9U3BTeGNHXhLHBXwB_right_arrow.gif\" />\n      <ul class=\"text-box\">\n        <li><h6>Tip 2. These 3 tabs are to edit </h6></li>\n        <li class=\"active\"> Page properties <i class=\"material-icons \">dashboard</i></li>\n        <li> Lead generation properties<i class=\"material-icons \"> person_add</i></li>\n        <li> Display properties<i class=\"material-icons \">edit</i></li>\n      </ul>\n    </div>\n    <div class=\"top-outer\">\n      <div class=\"red-button\">Go Live<i class=\"material-icons\">keyboard_arrow_down</i></div>\n      <div class=\"tip-outer\">\n        <img src=\"https://dlvkyia8i4zmz.cloudfront.net/2UnilVYnQT6bDbc4E3HW_goLive_arrow.png\" />\n        <!-- <div class=\"top-text\">Click Here to Publish</div> -->\n        \n        <ul class=\"text-box\">\n          <li><h6>Tip 4. Publish my content</h6></li>\n          <li class=\"active\">Click here to make the content available for public viewing</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"mid-sec\">\n      <img src=\"https://dlvkyia8i4zmz.cloudfront.net/EeclXlPJTRi2aXEmYhg8_pointer_arrow.png\">\n      <img src=\"https://dlvkyia8i4zmz.cloudfront.net/Jgx9U3BTeGNHXhLHBXwB_right_arrow.gif\" class=\"left-arrow\">\n      <div class=\"mid-sec-info\">\n          <h3>Tip 1. How to use the builder?</h3>\n          <h6>Click the element to edit <br>its properties</h6>\n      </div>\n    </div>\n    <div class=\"btn-position\" [ngClass]=\"{\n      'left-button-outer': jsonBuilderHelper.getJSONBuilt()?.template.split('-',3).join('-') === 'one-page-card',\n      'left-button-outer-t2': jsonBuilderHelper.getJSONBuilt()?.template.split('-',2).join('-') === 'sound-cloud' ,\n      'left-button-outer-t3': jsonBuilderHelper.getJSONBuilt()?.template.split('-',2).join('-') === 'inline-temp',\n      'left-button-outer-t4': jsonBuilderHelper.getJSONBuilt()?.template === 'experian',\n      'left-button-outer-t5': jsonBuilderHelper.getJSONBuilt()?.template.split('-',2).join('-') === 'template-five',\n      'left-button-outer-t6': jsonBuilderHelper.getJSONBuilt()?.template === 'template-six',\n      'left-button-outer-t7': jsonBuilderHelper.getJSONBuilt()?.template === 'template-seven',\n      'left-button-outer-t8': jsonBuilderHelper.getJSONBuilt()?.template === 'template-eight',\n      'left-button-outer-t9': jsonBuilderHelper.getJSONBuilt()?.template === 'template-nine'\n    }\">\n      <div class=\"add-btn\">\n      <i class=\"material-icons\">add</i> ADD</div>\n      <img src=\"https://dlvkyia8i4zmz.cloudfront.net/2UnilVYnQT6bDbc4E3HW_goLive_arrow.png\" />\n      <!-- <div class=\"intro-text-left\">Add Questions Here</div> -->\n      <ul class=\"text-box\">\n        <li><h6>Tip 3. Click this button to Add</h6></li>\n        <li class=\"active\"> <i class=\"material-icons\">add</i>A new question</li>\n        <li><i class=\"material-icons\">add</i>Lead generation section</li>       \n      </ul>\n    </div>\n    <div class=\"right-sec-info\">\n      <img src=\"https://dlvkyia8i4zmz.cloudfront.net/TJUvpPz9RS2sxbSpJtaf_logo.png\">\n    </div>\n    <!-- <div class=\"top-outer-help\">\n      <div>\n        <i class=\"help-sec\">\n          <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"10px\" id=\"Capa_1\" style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 512 512\" width=\"10px\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\n            <g>\n              <g>\n                <g>\n                  <circle cx=\"255.984\" cy=\"492\" fill=\"#555\" r=\"20\"></circle>\n                  <path d=\"M412.979,155.775C412.321,69.765,342.147,0,255.984,0c-86.57,0-157,70.43-157,157c0,11.046,8.954,20,20,20     s20-8.954,20-20c0-64.514,52.486-117,117-117s117,52.486,117,117c0,0.356,0.009,0.71,0.028,1.062     c-0.405,46.562-28.227,88.348-71.12,106.661c-40.038,17.094-65.908,56.675-65.908,100.839V412c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20v-46.438c0-28.117,16.334-53.258,41.614-64.051c57.979-24.754,95.433-81.479,95.418-144.516     C413.016,156.585,413.003,156.179,412.979,155.775z\" fill=\"#555\"></path>\n                </g>\n              </g>\n            </g>\n            </svg>\n          </i>\n      </div>\n      <img src=\"assets/images/top-arrow-help.png\" />\n      <div class=\"text\">Get Help</div>\n    </div> -->\n  </div>\n\n  <div class=\"col-xs-12 np intro-overlay-1 hide\" *ngIf=\"editorIntro_overlay && selectedSec=='build'\">\n    <div class=\"col-xs-12 intro-overlay-inner\">\n      <div>Click here to edit</div>\n      <a href=\"javascript:void(0);\" (click)=\"removeEditorIntro()\">Yes, Got It!</a>\n    </div>\n    <img src=\"https://dlvkyia8i4zmz.cloudfront.net/EWBRjMeTQdaYGhRhxvEM_arrow_red.png\">\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"!allowUse\">\n  <div class=\"takeover-popup-1\" *ngIf=\"selfOpen\">\n    <div class=\"takeover-logo\">\n      <img src=\"https://cdn.filestackcontent.com/HawBu2E1SGmH8drhezqQ\">\n    </div>\n    <div class=\"takeover-inner-1\">\n      <div class=\"takeover-inneer-cell\">\n        <img src=\"https://cdn.filestackcontent.com/fjWlLpyaR82vT85YkvnM\">\n        <p>This interactive content piece is being edited in another tab or browser. To prevent overwriting, we recommended\n          to either continue in the same tab or to take over from the previous session.</p>\n        <button class=\"btn btn-info\" type=\"button\" (click)=\"takeOver()\">Take Over From Previous Session</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"takeover-popup-1\" *ngIf=\"!selfOpen\">\n    <div class=\"takeover-logo\">\n      <img src=\"https://cdn.filestackcontent.com/HawBu2E1SGmH8drhezqQ\">\n    </div>\n    <div class=\"takeover-inner-1\">\n      <div class=\"takeover-inneer-cell\">\n        <img src=\"https://cdn.filestackcontent.com/fjWlLpyaR82vT85YkvnM\">\n        <p>{{userName}} is already editing this {{getLockText()}},\n        </p>\n        <button class=\"btn btn-info\" type=\"button\" (click)=\"takeOver()\">Take Over From {{userName}}</button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<!-- Start: downgrade Plan Modal -->\n<div id=\"downgrade\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close btn-close\" (click)=\"turnOffFeatures()\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\n          <h5 class=\"modal-title\"> <div class=\"iouter-d-grade\">\n              <img src=\"https://dzvexx2x036l1.cloudfront.net/upgarde_icon.png\" />\n           </div>\n           Upgrade Now</h5>\n        </div>\n\n      </div>\n      <div class=\"modal-body col-md-12 col-sm-12 col-xs-12 np\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 testimonial-section\">\n            <div class=\"img-outer\"><img alt=\"User Testimonial\" class=\"\" src=\"assets/images/upg-user-testimonial.png\"></div>\n            <div class=\"testimonial-content\">\n              <p class=\"user-testimonial\">\n                  Hey {{Name}}, The Features below are not part of your current plan. Reach out to our support to team to learn how you can get access to it.</p>\n              <button class=\"btn btn-blue-outline btn-hover\" (click)=\"msgInIntercom('getInTouch')\" type=\"button\">Get In touch</button>\n                </div>\n            <div class=\"testimonial-content-bottom\">\n                <span class=\"asterix\">*</span>Are you a small business? We can offer custom plans and incentives if you qualify. Reach out to us <a href=\"javascript:void(0);\" (click)=\"msgInIntercom('smallBusiness')\">here!</a>\n            </div>\n          </div>\n        <div class=\"modal-body-inner\">\n          <div class=\"np col-md-8 modal-left\">\n              <h5 class=\"body-head\" >You are using premium features</h5>\n            <div class=\"sub-title\">To make any changes in this calculator, either upgrade or turn off the premium features used\n            </div>\n            <div class=\"cust-text-outer\">\n              <!--<div class=\"cust-text\" ><i class=\"material-icons\">check</i> External Scripts <span>Essentials</span></div>-->\n              <div class=\"cust-text\" *ngFor=\"let feature of featuresToDisable\">\n                <i class=\"material-icons\">check</i> {{feature}}</div>\n            </div>\n            <div class=\"btn-main-outer rs-hide\">\n              <button type=\"button\" class=\"btn btn-red-outline btn-hover upgradeBtns\" (click)=\"turnOffFeatures()\">\n                <span class=\"ttn\">Turn off and continue</span>\n              </button>\n            </div>\n          </div>\n          <div class=\"col-md-3 np modal-right\">\n\n            <div class=\"modal-right-inner\">\n              <p>\n                Upgrade now to\n                <br>continue using\n                <br> the premium\n                <br> features\n              </p>\n\n            </div>\n            <div class=\"btn-main-outer hide rs-show\">\n                <button type=\"button\" class=\"btn btn-red-outline btn-hover upgradeBtns\" (click)=\"turnOffFeatures()\">\n                  <span class=\"ttn\">Turn off and continue</span>\n                </button>\n              </div>\n            <span class=\"text-or\">Or</span>\n            <div class=\"btn-main-outer\">\n              <a type=\"button\" class=\"btn btn-red btn-hover upgradeBtns\" data-dismiss=\"modal\" aria-label=\"Close\" [routerLink]=\"['/settings/membership']\">\n                upgrade now\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer col-md-12 np hide\">\n        <!-- <div class=\"col-md-12 np btn-new-outer\">\n          <div class=\" btn-position\">\n\n          </div>\n          <span class=\"text-or\">Or</span>\n\n        </div> -->\n          <div class=\"gray-footer\">\n          <div class=\"text col-md-12 np\">\n            <p >Need help here! and not sure </p>\n          </div>\n          <textarea  placeholder=\" I need access to logic jump\" ></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End:downgrade Plan Modal -->\n<div  class=\"modal small-model\" role=\"dialog\" *ngIf=\"deviceSize\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"icon-block\"><img src=\"https://dlvkyia8i4zmz.cloudfront.net/ae6eAWhzRCx1rQw4eXT8_icons.png\" alt=\"icons\"/></div>\n        <h2>SCREEN TOO SMALL</h2>\n        <p>Access it through desktop device</p>\n        <a href=\"/dashboard\"  class=\"btn my-btn\"> Go to Dashboard</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/site/+builder/builderParent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/site/+builder/builderParent.component.ts ***!
  \**********************************************************/
/*! exports provided: BuilderParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderParentComponent", function() { return BuilderParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuilderParentComponent = /** @class */ (function () {
    function BuilderParentComponent() {
    }
    BuilderParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'og-builder',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], BuilderParentComponent);
    return BuilderParentComponent;
}());



/***/ }),

/***/ "./src/app/site/+builder/models/templateImages.store.ts":
/*!**************************************************************!*\
  !*** ./src/app/site/+builder/models/templateImages.store.ts ***!
  \**************************************************************/
/*! exports provided: TEMPLATE_IMAGES, imgArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_IMAGES", function() { return TEMPLATE_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgArray", function() { return imgArray; });
var TEMPLATE_IMAGES = {
    common_images: [
        { url: 'https://cdn.filestackcontent.com/Uwf5VNKcSnqzmXLktBTl', visible: true, thumbnail: 'https://cdn.filestackcontent.com/GmkMT6kRQr424tSUx3qw' },
        { url: 'https://cdn.filestackcontent.com/ziTH2xxiSgSC8NRi3rMi', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1oaxPo94StSvNN0VCEJn' },
        { url: 'https://cdn.filestackcontent.com/uNWZrSgRQLSQLO5qMlBt', visible: true, thumbnail: 'https://cdn.filestackcontent.com/RRkbh0SZSWKRzWNyVRDs' },
        { url: 'https://cdn.filestackcontent.com/CL8BAYdQS6m3Rhac1811', visible: true, thumbnail: 'https://cdn.filestackcontent.com/u09EAB7XQR2dSDxVbQGg' },
        { url: 'https://cdn.filestackcontent.com/Ip21n5ERUmJ7dHURmoxA', visible: true, thumbnail: 'https://cdn.filestackcontent.com/nMFlAJMS1COEraJfN6u1' },
        { url: 'https://cdn.filestackcontent.com/A5q6C6D1Qu2kkgcLAXUR', visible: true, thumbnail: 'https://cdn.filestackcontent.com/VKB8fzXQ6WSgYyXcpD4Q' },
        { url: 'https://cdn.filestackcontent.com/pxLR4tUDQ9iM3MZOIgmh', visible: true, thumbnail: 'https://cdn.filestackcontent.com/oP6dJPW2TcOdF0qy05DH' },
        { url: 'https://cdn.filestackcontent.com/RMKpntaaS7qHm7PpACXG', visible: true, thumbnail: 'https://cdn.filestackcontent.com/6RVZlTK0QoGvtMsMp8T2' },
        { url: 'https://cdn.filestackcontent.com/80n7tjQFvldvyJ8r2g8w', visible: true, thumbnail: 'https://cdn.filestackcontent.com/FCIBhdkIRzKy4a5yQsWf' },
        { url: 'https://cdn.filestackcontent.com/rqEbWRJUQTWWicAN32Up', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1e8QsNvTxi11HLeSbxiV' },
        { url: 'https://cdn.filestackcontent.com/AGlANT2zSS9fQFL605ae', visible: true, thumbnail: 'https://cdn.filestackcontent.com/wXDe3GSQjuXVvo4xXwG2' },
        { url: 'https://cdn.filestackcontent.com/ZJY9wKjjSoCiFzKVzUAg', visible: true, thumbnail: 'https://cdn.filestackcontent.com/zL17NB7JTxsxpfcxZYbw' },
        { url: 'https://cdn.filestackcontent.com/MxgcZajaSCW4piIKHMDu', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VUcBmDFSqpDO5tQjQB6w' },
        { url: 'https://cdn.filestackcontent.com/yDGa1Pu2QlSnrhMEnonk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sRfbbZvTi2Jx1lhaKokG' },
        { url: 'https://cdn.filestackcontent.com/sQpOx9EvQhuJiMO7Mwrc', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8xt4zamZT9uWlMkqt6OK' },
        { url: 'https://cdn.filestackcontent.com/IRRREU4SVycbLbUEglJS', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FBnS3wGRTPSH7YJikmQJ' },
        { url: 'https://cdn.filestackcontent.com/q9uohpdQSaWo9Rf9RiCA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ebUvHmvoSyCdw8O9P8zs' },
        { url: 'https://cdn.filestackcontent.com/sMmI9VNlSmK0Kr9DGvGf', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8JlUH2zdSmuB8g2h8xuO' },
        { url: 'https://cdn.filestackcontent.com/F0uYNOLR5KoOPVbaizqk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/tyT4hZwYS5iwZ5rCBYVg' },
        { url: 'https://cdn.filestackcontent.com/m0NByWLQR3AUcuYZv7Lg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/662eKadURFu83Z0nThRh' },
        { url: 'https://cdn.filestackcontent.com/IZ6SWKCoTfy7p8b23eVq', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hUj1G4nYSvO3dacjzquU' },
        { url: 'https://cdn.filestackcontent.com/af9GOjHT0KbzFrHewcsU', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZeE4nW05TeqpsUi0CCNx' },
        { url: 'https://cdn.filestackcontent.com/ppb3kHUWSBKUkGdQyvGf', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xGLNfMoQ9aBfEQ1bgmOS' },
        { url: 'https://cdn.filestackcontent.com/bkmwnNJ7RES1qLl8sfN6', visible: false, thumbnail: 'https://cdn.filestackcontent.com/KIqZ5JAIRPGgXAaTOYBn' },
        { url: 'https://cdn.filestackcontent.com/DbtiVRxpRVibtYPzw9uI', visible: false, thumbnail: 'https://cdn.filestackcontent.com/dwbu0BoOQH2GTyhUkIEv' },
        { url: 'https://cdn.filestackcontent.com/Rxab1odRDmsN4nhQsIHg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/88BbexkSepUpSUISUFvw' },
        { url: 'https://cdn.filestackcontent.com/IJy0ti5MQwZiOjP4jIcK', visible: false, thumbnail: 'https://cdn.filestackcontent.com/IVHpA3XBTKu19FWpuVWA' },
        { url: 'https://cdn.filestackcontent.com/Wt4ISjWnQl2rQe1Nc4BK', visible: false, thumbnail: 'https://cdn.filestackcontent.com/PCMnubtSz6ESGSOk2dc8' },
        { url: 'https://cdn.filestackcontent.com/q3dRIUQnQ2yRKoF18VnS', visible: false, thumbnail: 'https://cdn.filestackcontent.com/H1CLTpFTSXallHWwFOtW' },
        { url: 'https://cdn.filestackcontent.com/ZTOn0UyLTN2v5v0MWNZf', visible: false, thumbnail: 'https://cdn.filestackcontent.com/JuVA1A9Qoacp0MkSFEED' },
        { url: 'https://cdn.filestackcontent.com/R7pluNcT62RFQ9DX70CQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hPyXBD8QRJu3N2P1Wp4A' },
        { url: 'https://cdn.filestackcontent.com/zUVuPp9dQPSwd87hggZH', visible: false, thumbnail: 'https://cdn.filestackcontent.com/2kXxfacjRJSXpRsz1owd' },
        { url: 'https://cdn.filestackcontent.com/mfJjj6mgSiiZeCl5LmAO', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZrFqPU0RSGuVHhNpbHIP' },
        { url: 'https://cdn.filestackcontent.com/WX9caMxDRRyEPESdDne0', visible: false, thumbnail: 'https://cdn.filestackcontent.com/WwGsUv2RtCtARi4BOTIQ' },
        { url: 'https://cdn.filestackcontent.com/drnWgwInQyHrz2ld9dOQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/7U0x9gf7R5GdjzokMoxG' },
        { url: 'https://cdn.filestackcontent.com/pJUkib6SYSJFRjibSwdh', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BOs9BXA5Q6W7FRpKzZXk' },
        { url: 'https://cdn.filestackcontent.com/3LtqrnQ9TJicT5KfSDcJ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/k40QVyatQr6kUC4yNbld' },
        { url: 'https://cdn.filestackcontent.com/OiffLwrQ3Kx978gAv4Ma', visible: false, thumbnail: 'https://cdn.filestackcontent.com/RoQuwDH1TOWImKZBI7t4' },
        { url: 'https://cdn.filestackcontent.com/Whq8vBbRLekEsI7Ieswe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/Fd20YJsR8amNjMyxivKm' },
        { url: 'https://cdn.filestackcontent.com/r2kvVdsFSJ2TyLhqzXS5', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LziXRUgBQRW8c6IfOivp' },
        { url: 'https://cdn.filestackcontent.com/Of3T2IJ8RL6pmTwwq7Dv', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bvGffywSQMGVYhNHPwkN' },
        { url: 'https://cdn.filestackcontent.com/sfrm5WuIQ5esQXoqEKlJ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/yE4PTFFNQFmsMAyKPQ4M' },
        { url: 'https://cdn.filestackcontent.com/3IQf9UoThWVVi2Qy6LLA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BgkvnMJPRnJ6kVc0MYmA' },
        { url: 'https://cdn.filestackcontent.com/KhilaDZcR2mwAMzZ2X5Z', visible: false, thumbnail: 'https://cdn.filestackcontent.com/vIcpNS53Q2aTZqiP4UEg' },
        { url: 'https://cdn.filestackcontent.com/86VzeMPQR4mSf69n5GKb', visible: false, thumbnail: 'https://cdn.filestackcontent.com/A7LmwwalRYakqjfb415x' },
        { url: 'https://cdn.filestackcontent.com/BzJVbAQkQSiLq26jaB7J', visible: false, thumbnail: 'https://cdn.filestackcontent.com/zhMz5ORQQep361o1W54I' },
        { url: 'https://cdn.filestackcontent.com/aE4EKfNdQwWtizmiag6j', visible: false, thumbnail: 'https://cdn.filestackcontent.com/JS3T5RtSTiRTRGKM2dnn' },
        { url: 'https://cdn.filestackcontent.com/W3WnswbEQP64Uywcvk4R', visible: false, thumbnail: 'https://cdn.filestackcontent.com/fHmx2NjyRqPCKkqOF7Jg' },
        { url: 'https://cdn.filestackcontent.com/ZXKWuaXmTTWmIGLJ8Wtk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bPpfQQFQMaEUTJ1jOmuA' },
        { url: 'https://cdn.filestackcontent.com/JUVott0rQSqLSzLqn6O4', visible: false, thumbnail: 'https://cdn.filestackcontent.com/NWmIG5EST2QJjdyqdg9l' },
        { url: 'https://cdn.filestackcontent.com/EycxRCatSsim8Do7l7j3', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FVqxHNnLREKiSEK80P1P' },
        { url: 'https://cdn.filestackcontent.com/2Nd9moIWRr6ABAWCzHuB', visible: false, thumbnail: 'https://cdn.filestackcontent.com/CcHctJMtQVWPkGqAudBJ' },
        { url: 'https://cdn.filestackcontent.com/BWHFbDk9QpSZR1GRS3yU', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ddCuweV0T5OnmIYxY3bS' },
        { url: 'https://cdn.filestackcontent.com/DJBNw74JTOOF1WKv9awJ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/9gl8wqvRsGZmFdibC00V' },
        { url: 'https://cdn.filestackcontent.com/AtVAvoH5QVqhAfX3cRBe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/X9m3l3qQMmgwcVqxawLQ' },
        { url: 'https://cdn.filestackcontent.com/FEOHJZQ1ORvTXeQZVRsg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/aDpC8BIEScOdNNBTGeAF' },
        { url: 'https://cdn.filestackcontent.com/VH9VM4yXSDmXEbF2WYbT', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hXrzc1HKQdiXAAu6qpAE' },
        { url: 'https://cdn.filestackcontent.com/D1o6jnRRoGNC0vihMpa7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LdcyIiuMS0OYtuveoRzq' },
        { url: 'https://cdn.filestackcontent.com/MSbPe9MFSMiIWLJOX4hQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qzpOGDP4SXyxO1YkotZH' },
        { url: 'https://cdn.filestackcontent.com/rZGxfMsQcGmeuVXYI2iQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/48vsZLD3RXq4gjgtYo6T' },
        { url: 'https://cdn.filestackcontent.com/pTqSD5OQCmWd5RIcmpFA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/TyP7QYGRPCizcvxhRZ5Q' },
        { url: 'https://cdn.filestackcontent.com/2miSXjO9TWadsRQhM3m6', visible: false, thumbnail: 'https://cdn.filestackcontent.com/UUSZk4HGSBipwePjArtA' },
        { url: 'https://cdn.filestackcontent.com/aZtA8j6DRtCBdJZrXr6i', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qCC3NdCMQt6YWZXuf4Ee' },
        { url: 'https://cdn.filestackcontent.com/VFike3yEQtmx3BIcUxPX', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xmJ8lJA1T0q5EBE9ZHcE' },
        { url: 'https://cdn.filestackcontent.com/ayD0HDKTnerKC2DGwSKM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/QAYxPqCiSgqEfmjFj2a4' },
        { url: 'https://cdn.filestackcontent.com/zSlMstOQeW1YGNWAXxAX', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VCQYLRVeT2ilO0Aqhq8n' },
        { url: 'https://cdn.filestackcontent.com/fg8EV2fPTh2hc87K7gi1', visible: false, thumbnail: 'https://cdn.filestackcontent.com/wCYP9q2PQb682UpA40KG' },
        { url: 'https://cdn.filestackcontent.com/jDTKo75SBipDACUHkQ9w', visible: false, thumbnail: 'https://cdn.filestackcontent.com/eT7XmNOYQHKHhIM4v3tA' },
        { url: 'https://cdn.filestackcontent.com/0ZqeUbvRGDoyHuVr7vAZ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ctKPMMyWTNam7Fzymlao' }
    ],
    template_six: [
        { url: 'https://cdn.filestackcontent.com/VUYqWV2vS5GX6leJ7Wlx', visible: true, thumbnail: 'https://cdn.filestackcontent.com/VUYqWV2vS5GX6leJ7Wlx' },
        { url: 'https://cdn.filestackcontent.com/BHpFWYfURFmDEfx2TtoB', visible: true, thumbnail: 'https://cdn.filestackcontent.com/BHpFWYfURFmDEfx2TtoB' },
        { url: 'https://cdn.filestackcontent.com/iY1mI0uQTqhD7DG5hGmv', visible: true, thumbnail: 'https://cdn.filestackcontent.com/iY1mI0uQTqhD7DG5hGmv' },
        { url: 'https://cdn.filestackcontent.com/sC9KJfqgT7ivAEgvrtqd', visible: true, thumbnail: 'https://cdn.filestackcontent.com/sC9KJfqgT7ivAEgvrtqd' },
        { url: 'https://cdn.filestackcontent.com/Hswr4HP4TACE1ZwqpV7d', visible: true, thumbnail: 'https://cdn.filestackcontent.com/Hswr4HP4TACE1ZwqpV7d' },
        { url: 'https://cdn.filestackcontent.com/koIkeXmJR1SpUt9e7lWR', visible: true, thumbnail: 'https://cdn.filestackcontent.com/koIkeXmJR1SpUt9e7lWR' },
        { url: 'https://cdn.filestackcontent.com/uCsnlbKsRxmWHZsWNMu6', visible: true, thumbnail: 'https://cdn.filestackcontent.com/uCsnlbKsRxmWHZsWNMu6' },
        { url: 'https://cdn.filestackcontent.com/e2hgHrgiRoCP9ZhbgIgB', visible: true, thumbnail: 'https://cdn.filestackcontent.com/e2hgHrgiRoCP9ZhbgIgB' },
        { url: 'https://cdn.filestackcontent.com/y2qNOA8qSCBCpTg2lUGQ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/y2qNOA8qSCBCpTg2lUGQ' },
        { url: 'https://cdn.filestackcontent.com/owYaJJ09SIyFVuMBoynm', visible: true, thumbnail: 'https://cdn.filestackcontent.com/owYaJJ09SIyFVuMBoynm' },
        { url: 'https://cdn.filestackcontent.com/Z1QABUbQTUWMQcUdRPZP', visible: true, thumbnail: 'https://cdn.filestackcontent.com/Z1QABUbQTUWMQcUdRPZP' },
        { url: 'https://cdn.filestackcontent.com/vNN2fxZMSve8qlmIXB9j', visible: true, thumbnail: 'https://cdn.filestackcontent.com/vNN2fxZMSve8qlmIXB9j' },
        { url: 'https://cdn.filestackcontent.com/VrPrgDTwqYRldsrWYU2Q', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VrPrgDTwqYRldsrWYU2Q' },
        { url: 'https://cdn.filestackcontent.com/SM7kXcZQCu1vzR3oMoAM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/SM7kXcZQCu1vzR3oMoAM' },
        { url: 'https://cdn.filestackcontent.com/knsFs6McRN2G2Im4PuO4', visible: false, thumbnail: 'https://cdn.filestackcontent.com/knsFs6McRN2G2Im4PuO4' },
        { url: 'https://cdn.filestackcontent.com/k93Iu3eMTuu5d6in2I4M', visible: false, thumbnail: 'https://cdn.filestackcontent.com/k93Iu3eMTuu5d6in2I4M' },
        { url: 'https://cdn.filestackcontent.com/UJTDMlzQauVZpKUtQ0Vj', visible: false, thumbnail: 'https://cdn.filestackcontent.com/UJTDMlzQauVZpKUtQ0Vj' },
        { url: 'https://cdn.filestackcontent.com/FOHsKnPmQqSSDlIkEKrL', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FOHsKnPmQqSSDlIkEKrL' },
        { url: 'https://cdn.filestackcontent.com/Txo93Pc6Snau482RtESe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/Txo93Pc6Snau482RtESe' },
        { url: 'https://cdn.filestackcontent.com/K8A0Fvx6SDylv7E89tgN', visible: false, thumbnail: 'https://cdn.filestackcontent.com/K8A0Fvx6SDylv7E89tgN' },
        { url: 'https://cdn.filestackcontent.com/ZyVJU4jfT9StsuON9nQT', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZyVJU4jfT9StsuON9nQT' },
    ]
};
var imgArray = [
    { url: 'https://cdn.filestackcontent.com/UYdM1wGvQB2abtsZZWp2', name: 'download.png', title: 'about' },
    { url: 'https://cdn.filestackcontent.com/UrJOx75gS5uAZOABStBW', name: 'download.png', title: 'accept_database' },
    { url: 'https://cdn.filestackcontent.com/KBD4AxBS76p3kawcMx7I', name: 'download.png', title: 'add_column' },
    { url: 'https://cdn.filestackcontent.com/tmHxHDQpWBDRB1EHwXga', name: 'download.png', title: 'add_database' },
    { url: 'https://cdn.filestackcontent.com/9JTYIpJQeCuroXe59Vpi', name: 'download.png', title: 'add_image' },
    { url: 'https://cdn.filestackcontent.com/w6pQjiI3QyijDyR2zXqB', name: 'download.png', title: 'add_row' },
    { url: 'https://cdn.filestackcontent.com/UzPnpJXtRkK2VudFuSkX', name: 'download.png', title: 'address_book' },
    { url: 'https://cdn.filestackcontent.com/wcpER3aXQAjIKIV7ckyq', name: 'download.png', title: 'advance' },
    { url: 'https://cdn.filestackcontent.com/YGbh5zCIRRrcuSUphT4R', name: 'download.png', title: 'advertising' },
    { url: 'https://cdn.filestackcontent.com/VVqA5V5uRUmO936VSMdU', name: 'download.png', title: 'alarm_clock' },
    { url: 'https://cdn.filestackcontent.com/03LmjBQWeurswds78yzQ', name: 'download.png', title: 'alphabetical_sorting_az' },
    { url: 'https://cdn.filestackcontent.com/28FHLEZ1SvGGSCVeUgL9', name: 'download.png', title: 'workflow' },
    { url: 'https://cdn.filestackcontent.com/fK9k8G1iQy2xv11sy8op', name: 'download.png', title: 'webcam' },
    { url: 'https://cdn.filestackcontent.com/yszn0eLkRWy8rlu1wWkC', name: 'download.png', title: 'voicemail' },
    { url: 'https://cdn.filestackcontent.com/ex92I2gTD2HMeTCyZvKr', name: 'download.png', title: 'voice_presentation' },
    { url: 'https://cdn.filestackcontent.com/1y7fFCYqTMeRAZRyKbSM', name: 'download.png', title: 'vip' },
    { url: 'https://cdn.filestackcontent.com/BEJlSUjoQhqgOsAcFHZX', name: 'download.png', title: 'view_details' },
    { url: 'https://cdn.filestackcontent.com/7EVXX7vbQa2fWJ7og7Gn', name: 'download.png', title: 'video_projector' },
    { url: 'https://cdn.filestackcontent.com/ZC1SpSQy27YJy40sQdAr', name: 'download.png', title: 'video_file' },
    { url: 'https://cdn.filestackcontent.com/zhVVl6UyS32FUxmT8kqS', name: 'download.png', title: 'video_call' },
    { url: 'https://cdn.filestackcontent.com/8h11H8cBSX6hqpN8izpP', name: 'download.png', title: 'upload' },
    { url: 'https://cdn.filestackcontent.com/ObW4FQX6QnS6cHWT119q', name: 'download.png', title: 'up' },
    { url: 'https://cdn.filestackcontent.com/UIEGGASGKyPdPA3f7zXQ', name: 'download.png', title: 'up_right' },
    { url: 'https://cdn.filestackcontent.com/BIWCKznLSjOvUVodwLiQ', name: 'download.png', title: 'up_left' },
    { url: 'https://cdn.filestackcontent.com/iabfrs2eTKOwha3FfpcW', name: 'download.png', title: 'unlock' },
    { url: 'https://cdn.filestackcontent.com/SspYCl5tRyGflDaSHOBw', name: 'download.png', title: 'undo' },
    { url: 'https://cdn.filestackcontent.com/hk0Mlm2T6X6BClXHMKQF', name: 'download.png', title: 'two_smartphones' },
    { url: 'https://cdn.filestackcontent.com/udMEErhRsSMoH6AzETNB', name: 'download.png', title: 'tree_structure' },
    { url: 'https://cdn.filestackcontent.com/dvieeB0WREFOgTKkeoar', name: 'download.png', title: 'trademark' },
    { url: 'https://cdn.filestackcontent.com/sf3FlRyROmWZmgLDsmFd', name: 'download.png', title: 'touchscreen_smartphone' },
    { url: 'https://cdn.filestackcontent.com/rSxOXcbrQN6aW7Tnfz3c', name: 'download.png', title: 'todo_list' },
    { url: 'https://cdn.filestackcontent.com/arNyTmU3ThqgQiseGmKi', name: 'download.png', title: 'timeline' },
    { url: 'https://cdn.filestackcontent.com/XnWTQa7KQwS22QY5Wduz', name: 'download.png', title: 'template' },
    { url: 'https://cdn.filestackcontent.com/hTNqlYLRwWELJtAY2JMZ', name: 'download.png', title: 'tablet_android' },
    { url: 'https://cdn.filestackcontent.com/zAMSGL5MRfupFKvrEVjJ', name: 'download.png', title: 'synchronize' },
    { url: 'https://cdn.filestackcontent.com/Cx7PBzDNSum2RhEgIMLU', name: 'download.png', title: 'switch_camera' },
    { url: 'https://cdn.filestackcontent.com/h0MEbUK1Qd6lam1Z7rad', name: 'download.png', title: 'survey' },
    { url: 'https://cdn.filestackcontent.com/nsP9esKbTQ2Extm7QXnc', name: 'download.png', title: 'support' },
    { url: 'https://cdn.filestackcontent.com/XGxrAi5wRVKe6X6B61yx', name: 'download.png', title: 'statistics' },
    { url: 'https://cdn.filestackcontent.com/uUXO6TUkTy2nSr6orj0T', name: 'download.png', title: 'start' },
    { url: 'https://cdn.filestackcontent.com/WQ2pB3iFShSjE2igs2Ru', name: 'download.png', title: 'stack_of_photos' },
    { url: 'https://cdn.filestackcontent.com/okdnxvRRsOrYJHyBkmZV', name: 'download.png', title: 'sports_mode' },
    { url: 'https://cdn.filestackcontent.com/DOXFpNrwTESqvtwp7MdU', name: 'download.png', title: 'speaker' },
    { url: 'https://cdn.filestackcontent.com/DbpCU0QlT3aislfEhMwK', name: 'download.png', title: 'sound_recording_copyright' },
    { url: 'https://cdn.filestackcontent.com/6Ed1rVrlSqG3rSGwqg5X', name: 'download.png', title: 'sms' },
    { url: 'https://cdn.filestackcontent.com/2Mj4HudSTlOO7SdpNneI', name: 'download.png', title: 'smartphone_tablet' },
    { url: 'https://cdn.filestackcontent.com/ZU4bTCOnQoydtXAnlE0Z', name: 'download.png', title: 'slr_back_side' },
    { url: 'https://cdn.filestackcontent.com/aQR7cNmSvOZVJT02xBRr', name: 'download.png', title: 'sim_card' },
    { url: 'https://cdn.filestackcontent.com/I9uUkwqQByhfRpHZdkzX', name: 'download.png', title: 'sim_card_chip' },
    { url: 'https://cdn.filestackcontent.com/kKaAXADwQTENr9Gyy00b', name: 'download.png', title: 'signature' },
    { url: 'https://cdn.filestackcontent.com/qFZYMeW3Rg2t7pg7Ar4Z', name: 'download.png', title: 'shop' },
    { url: 'https://cdn.filestackcontent.com/CD3dfxUdTXK7WTSCn6BN', name: 'download.png', title: 'shipped' },
    { url: 'https://cdn.filestackcontent.com/GT2hxeDeTaiqgHFqIugO', name: 'download.png', title: 'share' },
    { url: 'https://cdn.filestackcontent.com/EHvjKJ7RtuqYsrKi1caQ', name: 'download.png', title: 'settings' },
    { url: 'https://cdn.filestackcontent.com/Qc7wZRbSzmHeEZdU4qYp', name: 'download.png', title: 'services' },
    { url: 'https://cdn.filestackcontent.com/crjlcwvUQPKNSwlUnC2E', name: 'download.png', title: 'service_mark' },
    { url: 'https://cdn.filestackcontent.com/CAc6pAYMThGAPY8SSpIp', name: 'download.png', title: 'serial_tasks' },
    { url: 'https://cdn.filestackcontent.com/KGboHoCoQB2Af0BmfcJH', name: 'download.png', title: 'selfie' },
    { url: 'https://cdn.filestackcontent.com/bB8VHAZQ5efikIvwNMYQ', name: 'download.png', title: 'self_service_kiosk' },
    { url: 'https://cdn.filestackcontent.com/8w6swP2CTeOIEEBvHB1N', name: 'download.png', title: 'search' },
    { url: 'https://cdn.filestackcontent.com/w2AfqdGTwu6ijZ2ocrhv', name: 'download.png', title: 'scatter_plot' },
    { url: 'https://cdn.filestackcontent.com/Nn1MsfcTCaYkhPQvURfR', name: 'download.png', title: 'sales_performance' },
    { url: 'https://cdn.filestackcontent.com/CmK9kQlWTIOKP9IOUkNz', name: 'download.png', title: 'safe' },
    { url: 'https://cdn.filestackcontent.com/nwK9Nb0wTeizI0mVdfeY', name: 'download.png', title: 'rules' },
    { url: 'https://cdn.filestackcontent.com/c6dLiasARScTQHRE5mvo', name: 'download.png', title: 'ruler' },
    { url: 'https://cdn.filestackcontent.com/mOHjwMdQ1CLDVek667yn', name: 'download.png', title: 'rotate_to_portrait' },
    { url: 'https://cdn.filestackcontent.com/3iuOc2qyTrqvq1WVcxRw', name: 'download.png', title: 'rotate_to_landscape' },
    { url: 'https://cdn.filestackcontent.com/9W1vYL6QOKOAH69ixKdg', name: 'download.png', title: 'rotate_camera' },
    { url: 'https://cdn.filestackcontent.com/u5weQKFSuWqWbMcyt0gl', name: 'download.png', title: 'right' },
    { url: 'https://cdn.filestackcontent.com/y7gzMxBiQ6ix3cOBPRzU', name: 'download.png', title: 'right_up' },
    { url: 'https://cdn.filestackcontent.com/jfBRVzhyTlOolAQf5Bbe', name: 'download.png', title: 'right_up2' },
    { url: 'https://cdn.filestackcontent.com/NlZrRtE1TrusMTc2KcY4', name: 'download.png', title: 'right_down' },
    { url: 'https://cdn.filestackcontent.com/CZCnuuxVQ1WHHLIRNpnk', name: 'download.png', title: 'right_down2' },
    { url: 'https://cdn.filestackcontent.com/CxyUUVVWRauqzgklml6g', name: 'download.png', title: 'reuse' },
    { url: 'https://cdn.filestackcontent.com/F4dA9Vb8ShuRPv7WSeEL', name: 'download.png', title: 'remove_image' },
    { url: 'https://cdn.filestackcontent.com/Lf5M0cMfRdi8gnAe4Gce', name: 'download.png', title: 'registered_trademark' },
    { url: 'https://cdn.filestackcontent.com/yvkO05taRKyCbl8HA5Ej', name: 'download.png', title: 'refresh' },
    { url: 'https://cdn.filestackcontent.com/qU0KBQgOSWqSwu9jxWNr', name: 'download.png', title: 'redo' },
    { url: 'https://cdn.filestackcontent.com/I8nKOaACRrScz7QsxBhJ', name: 'download.png', title: 'reading' },
    { url: 'https://cdn.filestackcontent.com/nE2SIRQVWotK1p5mL7gR', name: 'download.png', title: 'reading_ebook' },
    { url: 'https://cdn.filestackcontent.com/vOwQe1mSHWP9yZylmVkm', name: 'download.png', title: 'ratings' },
    { url: 'https://cdn.filestackcontent.com/dPK12yTRk64zUWFm2krA', name: 'download.png', title: 'rating' },
    { url: 'https://cdn.filestackcontent.com/26CCX50GSLioC7kVHiGY', name: 'download.png', title: 'radar_plot' },
    { url: 'https://cdn.filestackcontent.com/1z9RLiBtSeqzpPk7zaPl', name: 'download.png', title: 'questions' },
    { url: 'https://cdn.filestackcontent.com/yXWpv8j5RRmZizMZginf', name: 'download.png', title: 'puzzle' },
    { url: 'https://cdn.filestackcontent.com/kOjbSNiVTBOpKMNm0iX6', name: 'download.png', title: 'process' },
    { url: 'https://cdn.filestackcontent.com/J3gAcyeRRSmygj4ovM0y', name: 'download.png', title: 'privacy' },
    { url: 'https://cdn.filestackcontent.com/z1iI2b0wT9iniiX91m7W', name: 'download.png', title: 'print' },
    { url: 'https://cdn.filestackcontent.com/jGyghNwVTeOocHveTOL5', name: 'download.png', title: 'previous' },
    { url: 'https://cdn.filestackcontent.com/LoZ7v8xpRbOx1NOVT9KM', name: 'download.png', title: 'positive_dynamic' },
    { url: 'https://cdn.filestackcontent.com/euCHs7gTjywcU6khWMpB', name: 'download.png', title: 'portrait_mode' },
    { url: 'https://cdn.filestackcontent.com/g44MrcTDqlYNVh7M9rAS', name: 'download.png', title: 'podium_without_speaker' },
    { url: 'https://cdn.filestackcontent.com/ZoQhprFNR9CqeZPciXyY', name: 'download.png', title: 'podium_with_speaker' },
    { url: 'https://cdn.filestackcontent.com/PDMLgeNQU2nKDgLQGHBD', name: 'download.png', title: 'podium_with_audience' },
    { url: 'https://cdn.filestackcontent.com/j0EX5SV6SsBqrRJQWC6z', name: 'download.png', title: 'plus' },
    { url: 'https://cdn.filestackcontent.com/6mIF46uTC2X4Rki2Ih3F', name: 'download.png', title: 'planner' },
    { url: 'https://cdn.filestackcontent.com/yszn0eLkRWy8rlu1wWkC', name: 'download.png', title: 'pie_chart' },
    { url: 'https://cdn.filestackcontent.com/UdldUZ4QRI6r9WkqjzEX', name: 'download.png', title: 'picture' },
    { url: 'https://cdn.filestackcontent.com/qh2V7b30SSKuIt8z2XJm', name: 'download.png', title: 'photo_reel' },
    { url: 'https://cdn.filestackcontent.com/sXgyqt20RjCFh0RlhLif', name: 'download.png', title: 'phone' },
    { url: 'https://cdn.filestackcontent.com/7W1v3t7cS0aGv4A3cS0W', name: 'download.png', title: 'phone_android' },
    { url: 'https://cdn.filestackcontent.com/lht0rRZWSaarlFmGsTwn', name: 'download.png', title: 'parallel_tasks' },
    { url: 'https://cdn.filestackcontent.com/Shn3mRxETXKCkps7JSJK', name: 'download.png', title: 'panorama' },
    { url: 'https://cdn.filestackcontent.com/rAeJcclEQjeMqyXufF2n', name: 'download.png', title: 'paid' },
    { url: 'https://cdn.filestackcontent.com/XSVCBSrmRpOnftkGJ2nQ', name: 'download.png', title: 'package' },
    { url: 'https://cdn.filestackcontent.com/TlYUhXoWRb685fhG8cQn', name: 'download.png', title: 'overtime' },
    { url: 'https://cdn.filestackcontent.com/Fm8XrA4rSVqitgliTtOP', name: 'download.png', title: 'organization' },
    { url: 'https://cdn.filestackcontent.com/Cqdue7KRaiDEv8EF0czA', name: 'download.png', title: 'org_unit' },
    { url: 'https://cdn.filestackcontent.com/4zbBwtz5QCm4UMEniATj', name: 'download.png', title: 'opened_folder' },
    { url: 'https://cdn.filestackcontent.com/Z7ispNktSSeFJFpFwSYa', name: 'download.png', title: 'online_support' },
    { url: 'https://cdn.filestackcontent.com/S81OFquaTJyizud4B6Mn', name: 'download.png', title: 'old_time_camera' },
    { url: 'https://cdn.filestackcontent.com/tBu2QKwgQrumpUfZIscu', name: 'download.png', title: 'ok' },
    { url: 'https://cdn.filestackcontent.com/Uh9evtIVREKkzVOkx1KL', name: 'download.png', title: 'numerical_sorting_21' },
    { url: 'https://cdn.filestackcontent.com/OV2GJcMxSxCNY5nhozK8', name: 'download.png', title: 'numerical_sorting_12' },
    { url: 'https://cdn.filestackcontent.com/hcq6QakhThCDMGafirYl', name: 'download.png', title: 'nook' },
    { url: 'https://cdn.filestackcontent.com/oY58U0toT3WW4QfZyEf1', name: 'download.png', title: 'no_video' },
    { url: 'https://cdn.filestackcontent.com/bWOLSwPkSVCdt8weDDtt', name: 'download.png', title: 'no_idea' },
    { url: 'https://cdn.filestackcontent.com/maGV1KdKTt2gouM5WH7J', name: 'download.png', title: 'night_portrait' },
    { url: 'https://cdn.filestackcontent.com/maGV1KdKTt2gouM5WH7J', name: 'download.png', title: 'night_landscape' },
    { url: 'https://cdn.filestackcontent.com/yyDV9nffRqiLQmdSDnFS', name: 'download.png', title: 'next' },
    { url: 'https://cdn.filestackcontent.com/ZvHcgF6RSWeSF7eclU6O', name: 'download.png', title: 'news' },
    { url: 'https://cdn.filestackcontent.com/XYIqaWTS8qpuM7SuccoQ', name: 'download.png', title: 'neutral_trading' },
    { url: 'https://cdn.filestackcontent.com/fsPmF3gdT4SOsJv7xHQH', name: 'download.png', title: 'neutral_decision' },
    { url: 'https://cdn.filestackcontent.com/wthco1k8Rz2YkVY8vCre', name: 'download.png', title: 'negative_dynamic' },
    { url: 'https://cdn.filestackcontent.com/zvidYY0OTGymWfAPFF9v', name: 'download.png', title: 'music' },
    { url: 'https://cdn.filestackcontent.com/avIUSySsRA65BGCADHTf', name: 'download.png', title: 'multiple_smartphones' },
    { url: 'https://cdn.filestackcontent.com/6ydQ9dHOT8iLmEuPltUx', name: 'download.png', title: 'multiple_inputs' },
    { url: 'https://cdn.filestackcontent.com/3zZ26bZXR72AQB3aKVJ5', name: 'download.png', title: 'multiple_devices' },
    { url: 'https://cdn.filestackcontent.com/JONcl3G7THCqlIqrZHGG', name: 'download.png', title: 'multiple_cameras' },
    { url: 'https://cdn.filestackcontent.com/PS36iFN2TkyCaCY83Ek1', name: 'download.png', title: 'money_transfer' },
    { url: 'https://cdn.filestackcontent.com/HUMOik5YQKuzklEYh3Ex', name: 'download.png', title: 'mms' },
    { url: 'https://cdn.filestackcontent.com/AgTR6yRuWtW2UvN1kWFQ', name: 'download.png', title: 'missed_call' },
    { url: 'https://cdn.filestackcontent.com/CTS23aLTF6WOTNq66APE', name: 'download.png', title: 'minus' },
    { url: 'https://cdn.filestackcontent.com/fyjjse1AQu8oXYJjIDhX', name: 'download.png', title: 'mind_map' },
    { url: 'https://cdn.filestackcontent.com/GbquDrFRTPSNFcjhnc4p', name: 'download.png', title: 'middle_battery' },
    { url: 'https://cdn.filestackcontent.com/8HhTXN3vQcunY5RubhTG', name: 'download.png', title: 'menu' },
    { url: 'https://cdn.filestackcontent.com/QOGsvWbKT1mZreVtPmoK', name: 'download.png', title: 'medium_priority' },
    { url: 'https://cdn.filestackcontent.com/4UyiWqONTWyWCaXELO72', name: 'download.png', title: 'manager' },
    { url: 'https://cdn.filestackcontent.com/C8RXS1m0Q1K7ZKo2j367', name: 'download.png', title: 'make_decision' },
    { url: 'https://cdn.filestackcontent.com/nmVzBFQECL8pEURq25QK', name: 'download.png', title: 'low_priority' },
    { url: 'https://cdn.filestackcontent.com/9WxB0q1eR2YIxpgmfqN4', name: 'download.png', title: 'low_battery' },
    { url: 'https://cdn.filestackcontent.com/wHu9ZBJCQ1KX70dR5ZlR', name: 'download.png', title: 'lock' },
    { url: 'https://cdn.filestackcontent.com/cW2S6rH2RNaDWUz0XO9O', name: 'download.png', title: 'lock_portrait' },
    { url: 'https://cdn.filestackcontent.com/k1tF2ngQASkzSkP6LNQ8', name: 'download.png', title: 'lock_landscape' },
    { url: 'https://cdn.filestackcontent.com/MVv7I0XQQW9kkrO5Siwm', name: 'download.png', title: 'list' },
    { url: 'https://cdn.filestackcontent.com/TPalTU2oTk2Bl4WbGzOg', name: 'download.png', title: 'link' },
    { url: 'https://cdn.filestackcontent.com/6OWegyaqRMikphIqQ1QL', name: 'download.png', title: 'line_chart' },
    { url: 'https://cdn.filestackcontent.com/YVdNS6KQ3my4bfS0DgfQ', name: 'download.png', title: 'like' },
    { url: 'https://cdn.filestackcontent.com/Zf1jGWnTX2W3Ao489rvD', name: 'download.png', title: 'like_placeholder' },
    { url: 'https://cdn.filestackcontent.com/nMTdSlxOQpy9I2Lca8lv', name: 'download.png', title: 'light_at_the_end_of_tunnel' },
    { url: 'https://cdn.filestackcontent.com/0skvRS4lR9WQm9V5FXff', name: 'download.png', title: 'library' },
    { url: 'https://cdn.filestackcontent.com/sk0NTYSURTmfeJ9PhiJV', name: 'download.png', title: 'left' },
    { url: 'https://cdn.filestackcontent.com/d3inK5RTNekXdzGCuef8', name: 'download.png', title: 'left_up' },
    { url: 'https://cdn.filestackcontent.com/xjxpr1oSgRTL3D0GRZ2Q', name: 'download.png', title: 'left_up2' },
    { url: 'https://cdn.filestackcontent.com/xaHfSc5yT0yU3tt4iUKE', name: 'download.png', title: 'left_down' },
    { url: 'https://cdn.filestackcontent.com/hhYuCs4NRCmWBNMaBeFX', name: 'download.png', title: 'left_down2' },
    { url: 'https://cdn.filestackcontent.com/mVh2r7JASjuKORGIgmdb', name: 'download.png', title: 'leave' },
    { url: 'https://cdn.filestackcontent.com/cOAWe52gTmKHwrBwMIzB', name: 'download.png', title: 'landscape' },
    { url: 'https://cdn.filestackcontent.com/eV52A19wQFqJAR1iEbtf', name: 'download.png', title: 'kindle' },
    { url: 'https://cdn.filestackcontent.com/YQ7a5ayRoOX4S9Ztav41', name: 'download.png', title: 'key' },
    { url: 'https://cdn.filestackcontent.com/bIuu9CjzROquMYUzIzg9', name: 'download.png', title: 'iphone' },
    { url: 'https://cdn.filestackcontent.com/INfsl2CTN6tbd1I0Pjtc', name: 'download.png', title: 'ipad' },
    { url: 'https://cdn.filestackcontent.com/BXBJP3omQDiRM1kH7qe3', name: 'download.png', title: 'invite' },
    { url: 'https://cdn.filestackcontent.com/TWwlwvEUS8OX5DafcpWT', name: 'download.png', title: 'internal' },
    { url: 'https://cdn.filestackcontent.com/1tbgaOy9SdW2HOUP60lc', name: 'download.png', title: 'integrated_webcam' },
    { url: 'https://cdn.filestackcontent.com/cdPHCQ31R4iSOxMxE2dr', name: 'download.png', title: 'inspection' },
    { url: 'https://cdn.filestackcontent.com/kJbszxUtRG67k4JcrvTK', name: 'download.png', title: 'info' },
    { url: 'https://cdn.filestackcontent.com/m4IyjVUaQ7GMEF8QAMNw', name: 'download.png', title: 'in_transit' },
    { url: 'https://cdn.filestackcontent.com/SpIqgPDTRIihOOSw0bmB', name: 'download.png', title: 'import' },
    { url: 'https://cdn.filestackcontent.com/aJPCj4tFSfDDC775GD2i', name: 'download.png', title: 'image_file' },
    { url: 'https://cdn.filestackcontent.com/BVLo8FvBTlW2ogmXBUb5', name: 'download.png', title: 'idea' },
    { url: 'https://cdn.filestackcontent.com/U22xDfbbRvGMRZMKqAQy', name: 'download.png', title: 'icons8_cup' },
    { url: 'https://cdn.filestackcontent.com/ebFYhlefRjus6teXpUrO', name: 'download.png', title: 'home' },
    { url: 'https://cdn.filestackcontent.com/fQg2bpdIQpGp43eSJQYf', name: 'download.png', title: 'high_priority' },
    { url: 'https://cdn.filestackcontent.com/DzK6yHXSQW6eL2RqIr5G', name: 'download.png', title: 'high_battery' },
    { url: 'https://cdn.filestackcontent.com/uqpT04KMSv6REtVJ0sai', name: 'download.png', title: 'heat_map' },
    { url: 'https://cdn.filestackcontent.com/vXo8FzUITLJFB2AEoOwk', name: 'download.png', title: 'headset' },
    { url: 'https://cdn.filestackcontent.com/eCSJr3q1TqaMhlwegCxq', name: 'download.png', title: 'grid' },
    { url: 'https://cdn.filestackcontent.com/5rpziDiFS12i6NJ2K87I', name: 'download.png', title: 'graduation_cap' },
    { url: 'https://cdn.filestackcontent.com/Q1JF2fjvRxGSJnxw3jrs', name: 'download.png', title: 'good_decision' },
    { url: 'https://cdn.filestackcontent.com/MX3SoW57RiQDNLKnen9e', name: 'download.png', title: 'globe' },
    { url: 'https://cdn.filestackcontent.com/9ROlmcULTKylVjd6rPMF', name: 'download.png', title: 'generic_sorting_desc' },
    { url: 'https://cdn.filestackcontent.com/b3XelOQtebWeg1dQNxsQ', name: 'download.png', title: 'generic_sorting_asc' },
    { url: 'https://cdn.filestackcontent.com/ekVitDCQi6DdwosgtEOQ', name: 'download.png', title: 'genealogy' },
    { url: 'https://cdn.filestackcontent.com/8eZd4YHcTUWIF2LmTAfI', name: 'download.png', title: 'gallery' },
    { url: 'https://cdn.filestackcontent.com/RXElaBgRSO2WRaTa5ksg', name: 'download.png', title: 'full_trash' },
    { url: 'https://cdn.filestackcontent.com/E7elO6mzRK6OG9H3bVLH', name: 'download.png', title: 'full_battery' },
    { url: 'https://cdn.filestackcontent.com/6Pv3wZBsRjWzRE1zfRdp', name: 'download.png', title: 'frame' },
    { url: 'https://cdn.filestackcontent.com/fJgQOnmsT5uj9g5CgYqC', name: 'download.png', title: 'folder' },
    { url: 'https://cdn.filestackcontent.com/oAtuPr3lTUil7zv2E6uz', name: 'download.png', title: 'flow_chart' },
    { url: 'https://cdn.filestackcontent.com/kzwpFVXpQ6irNHaDx9UN', name: 'download.png', title: 'flash_on' },
    { url: 'https://cdn.filestackcontent.com/Viho2cxwTbSnuV0bTOrL', name: 'download.png', title: 'flash_off' },
    { url: 'https://cdn.filestackcontent.com/RiP1h7a2SByYWRpAYdTA', name: 'download.png', title: 'flash_auto' },
    { url: 'https://cdn.filestackcontent.com/okOqh5rtQY2fgi4DrMUr', name: 'download.png', title: 'fine_print' },
    { url: 'https://cdn.filestackcontent.com/WAlCxMzWREOxQude2rBw', name: 'download.png', title: 'film' },
    { url: 'https://cdn.filestackcontent.com/m3wjEV2bTDau6pLjswA7', name: 'download.png', title: 'film_reel' },
    { url: 'https://cdn.filestackcontent.com/5FQkEkOpRJu75CapehDm', name: 'download.png', title: 'filled_filter' },
    { url: 'https://cdn.filestackcontent.com/w2W9pfbT4u7pP7mOEXel', name: 'download.png', title: 'filing_cabinet' },
    { url: 'https://cdn.filestackcontent.com/iEUk3BDiSLGmayR8WoG0', name: 'download.png', title: 'file' },
    { url: 'https://cdn.filestackcontent.com/sSqAYETWQPYvRWohhJYb', name: 'download.png', title: 'feedback' },
    { url: 'https://cdn.filestackcontent.com/4hAkar0OQgqfPtbnSgSK', name: 'download.png', title: 'feed_in' },
    { url: 'https://cdn.filestackcontent.com/aMYf7wxTBOZIscdn8C7p', name: 'download.png', title: 'faq' },
    { url: 'https://cdn.filestackcontent.com/UQz2CLEyS1OqYzJ87QBF', name: 'download.png', title: 'factory' },
    { url: 'https://cdn.filestackcontent.com/W4UH9uLSdeJmBynAeFIe', name: 'download.png', title: 'factory_breakdown' },
    { url: 'https://cdn.filestackcontent.com/4oxEvAjRdq5ROx90otXq', name: 'download.png', title: 'external' },
    { url: 'https://cdn.filestackcontent.com/Q0KGhLYvQt2LN9TC92yy', name: 'download.png', title: 'export' },
    { url: 'https://cdn.filestackcontent.com/pl6rOyvhQjevx9uyJ4uj', name: 'download.png', title: 'expired' },
    { url: 'https://cdn.filestackcontent.com/4rVqCOnTQfu9BtL6B5gY', name: 'download.png', title: 'expand' },
    { url: 'https://cdn.filestackcontent.com/eYFl1olbTUyGvxYPhsfW', name: 'download.png', title: 'entering_heaven_alive' },
    { url: 'https://cdn.filestackcontent.com/c2Iq73bTyQt8411KtcnQ', name: 'download.png', title: 'engineering' },
    { url: 'https://cdn.filestackcontent.com/bagrpli8QBKdJLX6L52A', name: 'download.png', title: 'end_call' },
    { url: 'https://cdn.filestackcontent.com/UUlaITMyTya3oWp4DajS', name: 'download.png', title: 'empty_trash' },
    { url: 'https://cdn.filestackcontent.com/DuwBAwjfRU2p4uqkZANw', name: 'download.png', title: 'empty_filter' },
    { url: 'https://cdn.filestackcontent.com/v2eWU11fRUedQhVllErZ', name: 'download.png', title: 'empty_battery' },
    { url: 'https://cdn.filestackcontent.com/UlevFXKISmFIG5mopf5p', name: 'download.png', title: 'electronics' },
    { url: 'https://cdn.filestackcontent.com/zMvjp7FSUe8CRAf6bXGw', name: 'download.png', title: 'electro_devices' },
    { url: 'https://cdn.filestackcontent.com/YVZ5xhOmR5S5KELuxpus', name: 'download.png', title: 'electricity' },
    { url: 'https://cdn.filestackcontent.com/IMwhPE3uTDKwOT9zY0x3', name: 'download.png', title: 'electrical_threshold' },
    { url: 'https://cdn.filestackcontent.com/MsrWxpw5QRGIfX4qsXpX', name: 'download.png', title: 'electrical_sensor' },
    { url: 'https://cdn.filestackcontent.com/99pYKO5DQqWPKW63FvuK', name: 'download.png', title: 'edit_image' },
    { url: 'https://cdn.filestackcontent.com/1Odwb30BSWKVIEKDCeXC', name: 'download.png', title: 'download' },
    { url: 'https://cdn.filestackcontent.com/0ij8jys4QRiaZeZ7lROm', name: 'download.png', title: 'down' },
    { url: 'https://cdn.filestackcontent.com/wnilObw1RZGuTpXqXFri', name: 'download.png', title: 'down_right' },
    { url: 'https://cdn.filestackcontent.com/tfH0lbqTSlGQzkaQeS9y', name: 'download.png', title: 'down_left' },
    { url: 'https://cdn.filestackcontent.com/D6HbUORTDizn1sXCJMuP', name: 'download.png', title: 'doughnut_chart' },
    { url: 'https://cdn.filestackcontent.com/vlqzFhhGT9WhB7KTej1A', name: 'download.png', title: 'donate' },
    { url: 'https://cdn.filestackcontent.com/n762XvqPQ2uMBqrBKNtf', name: 'download.png', title: 'document' },
    { url: 'https://cdn.filestackcontent.com/ILoSeeCRZyrsOjogDI8N', name: 'download.png', title: 'do_not_mix' },
    { url: 'https://cdn.filestackcontent.com/2h9XvOZ1Tl6vKS6yZJYJ', name: 'download.png', title: 'do_not_insert' },
    { url: 'https://cdn.filestackcontent.com/A4klIcuBRK2MxhdkX2wp', name: 'download.png', title: 'do_not_inhale' },
    { url: 'https://cdn.filestackcontent.com/NtLiZNDhRe6rK27XO8Ue', name: 'download.png', title: 'display' },
    { url: 'https://cdn.filestackcontent.com/HaTq6eYDTFqaQjS45fyE', name: 'download.png', title: 'dislike' },
    { url: 'https://cdn.filestackcontent.com/tXC5tnFURMC0rQgCogc1', name: 'download.png', title: 'disclaimer' },
    { url: 'https://cdn.filestackcontent.com/6nY4Xt1RBagn6WiVe7AP', name: 'download.png', title: 'disapprove' },
    { url: 'https://cdn.filestackcontent.com/vdym4f9RnOLrIyv5Gnft', name: 'download.png', title: 'diploma_2' },
    { url: 'https://cdn.filestackcontent.com/fCWkXz2QkCTHgkw8CJ5g', name: 'download.png', title: 'diploma_1' },
    { url: 'https://cdn.filestackcontent.com/iDSCONb2RD6uF79Q61t3', name: 'download.png', title: 'deployment' },
    { url: 'https://cdn.filestackcontent.com/jjcsw2VwSai87CRxAFTt', name: 'download.png', title: 'department' },
    { url: 'https://cdn.filestackcontent.com/GV1jXFpERTeLlFU9gk2j', name: 'download.png', title: 'delete_row' },
    { url: 'https://cdn.filestackcontent.com/fpbNvWSTTCyzchqReVUe', name: 'download.png', title: 'delete_database' },
    { url: 'https://cdn.filestackcontent.com/F2AahGVRm21TCJsJjXxP', name: 'download.png', title: 'delete_column' },
    { url: 'https://cdn.filestackcontent.com/JFsz3VRIT3ma762ZuIZ0', name: 'download.png', title: 'decision' },
    { url: 'https://cdn.filestackcontent.com/pLSoF3yTc29zdCa4sQcw', name: 'download.png', title: 'debt' },
    { url: 'https://cdn.filestackcontent.com/8lc7EVzcSRpXygBa3gzn', name: 'download.png', title: 'database' },
    { url: 'https://cdn.filestackcontent.com/1XX74paBTMaHyOBYW4I3', name: 'download.png', title: 'data_sheet' },
    { url: 'https://cdn.filestackcontent.com/FIXl29EwRCa5a59ruMKq', name: 'download.png', title: 'data_recovery' },
    { url: 'https://cdn.filestackcontent.com/7n3HnAJTyCjrHi14i6rM', name: 'download.png', title: 'data_protection' },
    { url: 'https://cdn.filestackcontent.com/vsGC3n13Qa7QdH3OH2qE', name: 'download.png', title: 'data_encryption' },
    { url: 'https://cdn.filestackcontent.com/l35MFnu4TJywmzyj0gpb', name: 'download.png', title: 'data_configuration' },
    { url: 'https://cdn.filestackcontent.com/l8DOlqzdSyCafFwBvltl', name: 'download.png', title: 'data_backup' },
    { url: 'https://cdn.filestackcontent.com/ADr2DAGQhqCF5PZ6hmTc', name: 'download.png', title: 'dam' },
    { url: 'https://cdn.filestackcontent.com/5mmrnDXRRhuqf3NTe3Jj', name: 'download.png', title: 'customer_support' },
    { url: 'https://cdn.filestackcontent.com/F5nnfWiXQGvT13qE3S9U', name: 'download.png', title: 'cursor' },
    { url: 'https://cdn.filestackcontent.com/4l4C8XbhTOiK7nNOy8Cw', name: 'download.png', title: 'currency_exchange' },
    { url: 'https://cdn.filestackcontent.com/ylHtpN5oTy2VbWslDYYg', name: 'download.png', title: 'crystal_oscillator' },
    { url: 'https://cdn.filestackcontent.com/Yji6L8JT6eYQO35JG95g', name: 'download.png', title: 'copyright' },
    { url: 'https://cdn.filestackcontent.com/xSgEnOrkTzerUZRaXsMB', name: 'download.png', title: 'copyleft' },
    { url: 'https://cdn.filestackcontent.com/iDHcbOepSGOtWaMdMXmz', name: 'download.png', title: 'contacts' },
    { url: 'https://cdn.filestackcontent.com/B6rcqYfLRMar1vFv48D5', name: 'download.png', title: 'conference_call' },
    { url: 'https://cdn.filestackcontent.com/ozvhbT0FQaCok7djnkCU', name: 'download.png', title: 'compact_camera' },
    { url: 'https://cdn.filestackcontent.com/xDkOdibRSJyI1ivf8sE2', name: 'download.png', title: 'comments' },
    { url: 'https://cdn.filestackcontent.com/5me4IhSxS8xPmfmOu2zn', name: 'download.png', title: 'combo_chart' },
    { url: 'https://cdn.filestackcontent.com/LrUHBXOtT72ZI2Ls2Xan', name: 'download.png', title: 'collect' },
    { url: 'https://cdn.filestackcontent.com/TkaGrX18SL2j5ICC9sl3', name: 'download.png', title: 'collapse' },
    { url: 'https://cdn.filestackcontent.com/uUkh7EPTXOZDuqObQbYI', name: 'download.png', title: 'collaboration' },
    { url: 'https://cdn.filestackcontent.com/dfRvja30RlKbKXBTuBRQ', name: 'download.png', title: 'cloth' },
    { url: 'https://cdn.filestackcontent.com/C61BBQ7wQQiRM35frLic', name: 'download.png', title: 'close_up_mode' },
    { url: 'https://cdn.filestackcontent.com/NpwQIoMsQ5qpesYWuhOJ', name: 'download.png', title: 'clock' },
    { url: 'https://cdn.filestackcontent.com/Py8edq1jSm2UcdULYbwK', name: 'download.png', title: 'clear_filters' },
    { url: 'https://cdn.filestackcontent.com/QEuUYFhqQyayGcwNpx2h', name: 'download.png', title: 'clapperboard' },
    { url: 'https://cdn.filestackcontent.com/MVSL3zAqSM6yUdeg0ucV', name: 'download.png', title: 'circuit' },
    { url: 'https://cdn.filestackcontent.com/BWibPWvESDCGdwI5xUao', name: 'download.png', title: 'checkmark' },
    { url: 'https://cdn.filestackcontent.com/zUHobRuYScy0e6Tup3dI', name: 'download.png', title: 'charge_battery' },
    { url: 'https://cdn.filestackcontent.com/FwDWKalEQ5CF3giseYZN', name: 'download.png', title: 'cell_phone' },
    { url: 'https://cdn.filestackcontent.com/GSDVUXXLQbGxF2OlFr54', name: 'download.png', title: 'capacitor' },
    { url: 'https://cdn.filestackcontent.com/bfsiKXXVQBe7YHJ0WkeO', name: 'download.png', title: 'candle_sticks' },
    { url: 'https://cdn.filestackcontent.com/Osg9bvCzReqVXcWG8RX7', name: 'download.png', title: 'cancel' },
    { url: 'https://cdn.filestackcontent.com/6JR3zFaNTqSo5Dci3CMI', name: 'download.png', title: 'camera' },
    { url: 'https://cdn.filestackcontent.com/uzNZBXwXTGyGPAgh0jya', name: 'download.png', title: 'camera_identification' },
    { url: 'https://cdn.filestackcontent.com/C8M5pdjpRJ6VpwlhHvy2', name: 'download.png', title: 'camera_addon' },
    { url: 'https://cdn.filestackcontent.com/UB2k2Yi3SQ2X8aT7inKa', name: 'download.png', title: 'camcorder' },
    { url: 'https://cdn.filestackcontent.com/8BtiIrnTTFaPeRY7bEIU', name: 'download.png', title: 'camcorder_pro' },
    { url: 'https://cdn.filestackcontent.com/0sn9skQQTeC9RwaLRw8R', name: 'download.png', title: 'callback' },
    { url: 'https://cdn.filestackcontent.com/BiFRTnD3RpyvcjikepJl', name: 'download.png', title: 'call_transfer' },
    { url: 'https://cdn.filestackcontent.com/lyQJggvSJCxiLOnBQvov', name: 'download.png', title: 'calendar' },
    { url: 'https://cdn.filestackcontent.com/YBrtyVBlTYyoX78IP9qG', name: 'download.png', title: 'calculator' },
    { url: 'https://cdn.filestackcontent.com/4k5LS9F0Rpu9I6JOFlpl', name: 'download.png', title: 'cable_release' },
    { url: 'https://cdn.filestackcontent.com/ybXUrCUyTWSINa0Jlw8Y', name: 'download.png', title: 'butting_in' },
    { url: 'https://cdn.filestackcontent.com/24xq39yTN2r1G4nGRs5c', name: 'download.png', title: 'businesswoman' },
    { url: 'https://cdn.filestackcontent.com/DgvSUJEBSv6w4mRIKpdG', name: 'download.png', title: 'businessman' },
    { url: 'https://cdn.filestackcontent.com/wYQ9lymGRbWv8xMBROOm', name: 'download.png', title: 'business' },
    { url: 'https://cdn.filestackcontent.com/peUlbEyhQsukvfzLTRoM', name: 'download.png', title: 'business_contact' },
    { url: 'https://cdn.filestackcontent.com/r1Ar32W0TWSc0L3oLeOw', name: 'download.png', title: 'business_contact' },
    { url: 'https://cdn.filestackcontent.com/WQF7U5SlOp2Tzetdd9jA', name: 'download.png', title: 'bullish' },
    { url: 'https://cdn.filestackcontent.com/LMUlpzFdTUyA2CfW4IW5', name: 'download.png', title: 'broken_link' },
    { url: 'https://cdn.filestackcontent.com/CHdMwsdQSGlZxjzUBSPB', name: 'download.png', title: 'briefcase' },
    { url: 'https://cdn.filestackcontent.com/SRjKLPEMRUmhkRPxoOuZ', name: 'download.png', title: 'bookmark' },
    { url: 'https://cdn.filestackcontent.com/MT5QZR3yRAeZ99ua145s', name: 'download.png', title: 'biotech' },
    { url: 'https://cdn.filestackcontent.com/YPY6meGScW9jUb1YuwKa', name: 'download.png', title: 'biomass' },
    { url: 'https://cdn.filestackcontent.com/E10yF5RLSacqMDsiauXg', name: 'download.png', title: 'biohazard' },
    { url: 'https://cdn.filestackcontent.com/brMY9FBiSt6DJvuZZf8R', name: 'download.png', title: 'binoculars' },
    { url: 'https://cdn.filestackcontent.com/Ww5l3dK8Qy22EOl7Jg2i', name: 'download.png', title: 'bearish' },
    { url: 'https://cdn.filestackcontent.com/UHMIuJU8RfSbskoAQ07g', name: 'download.png', title: 'bar_chart' },
    { url: 'https://cdn.filestackcontent.com/HiWUee3mT06JrW3P7a5S', name: 'download.png', title: 'bad_decision' },
    { url: 'https://cdn.filestackcontent.com/iJrImv3RFyb9qai2T6Hg', name: 'download.png', title: 'automotive' },
    { url: 'https://cdn.filestackcontent.com/6QZ0HdtScqCidDvFeJjm', name: 'download.png', title: 'automatic' },
    { url: 'https://cdn.filestackcontent.com/4xWksgmRsmjLkbGqZ5Wy', name: 'download.png', title: 'audio_file' },
    { url: 'https://cdn.filestackcontent.com/N1HGRtpST0a9nRwTZnS2', name: 'download.png', title: 'assistant' },
    { url: 'https://cdn.filestackcontent.com/sexaqJdTzGUhOoTrvx34', name: 'download.png', title: 'area_chart' },
    { url: 'https://cdn.filestackcontent.com/IYIT6xoTlUpZuYFadYJQ', name: 'download.png', title: 'approve' },
    { url: 'https://cdn.filestackcontent.com/LwAfrNHThi2fZjZICUwI', name: 'download.png', title: 'approval' },
    { url: 'https://cdn.filestackcontent.com/pmSPaXnZTnaZ9CeTnKGU', name: 'download.png', title: 'answers' },
    { url: 'https://cdn.filestackcontent.com/OycKZBjTpueV4VAVL3Sb', name: 'download.png', title: '2-Step-verification' },
    { url: 'https://cdn.filestackcontent.com/7F4vP66FR6G0LYgtzgm0', name: 'download.png', title: 'activity-feeds' },
    { url: 'https://cdn.filestackcontent.com/U0Ph08yOQCugaSUJ9NyR', name: 'download.png', title: 'android' },
    { url: 'https://cdn.filestackcontent.com/thZVXYQLQy6HZuUHNKHA', name: 'download.png', title: 'android-iphone' },
    { url: 'https://cdn.filestackcontent.com/FFOpXjMQQIrclyvEDkZg', name: 'download.png', title: 'animated-Ui' },
    { url: 'https://cdn.filestackcontent.com/znJw3A0rSHKZVyEkDThB', name: 'download.png', title: 'Basic-security' },
    { url: 'https://cdn.filestackcontent.com/MHg3dT9tQWyxORmuJGFH', name: 'download.png', title: 'chatting' },
    { url: 'https://cdn.filestackcontent.com/6pgEFvDS2GvTZ99WbtP1', name: 'download.png', title: 'cloud-database' },
    { url: 'https://cdn.filestackcontent.com/78cUoBKDRCyPp9AgHOWY', name: 'download.png', title: 'complete-protection' },
    { url: 'https://cdn.filestackcontent.com/gPYSBcsLTNmENPGsrqCH', name: 'download.png', title: 'content-management' },
    { url: 'https://cdn.filestackcontent.com/5uyONKR3Rjii6Dt09DXn', name: 'download.png', title: 'custom_branded_ui' },
    { url: 'https://cdn.filestackcontent.com/1uv3dLwSRyignGDmF8qT', name: 'download.png', title: 'eCommerce' },
    { url: 'https://cdn.filestackcontent.com/DsT0wilhRnm6IzmAuOQE', name: 'download.png', title: 'email-password' },
    { url: 'https://cdn.filestackcontent.com/cFCJvED2QBWVInEesquA', name: 'download.png', title: 'encrypted-security' },
    { url: 'https://cdn.filestackcontent.com/buknCZLOQgCptdmsKnuQ', name: 'download.png', title: 'existing-database' },
    { url: 'https://cdn.filestackcontent.com/ig1lvIvFRJqfs9XEpZoH', name: 'download.png', title: 'game-animation' },
    { url: 'https://cdn.filestackcontent.com/n8qGkeRGTOW1VAVuBPSX', name: 'download.png', title: 'I-dont-know' },
    { url: 'https://cdn.filestackcontent.com/a4UkyaFsQwOOwgKeH8g3', name: 'download.png', title: 'in-app-purchase' },
    { url: 'https://cdn.filestackcontent.com/USHCdf4SUStkQbm1ubBN', name: 'download.png', title: 'Integration' },
    { url: 'https://cdn.filestackcontent.com/0vh3JLUcQZiHvsfIdmMZ', name: 'download.png', title: 'IOS' },
    { url: 'https://cdn.filestackcontent.com/cyBd5NsNQlWSvc3o1pCw', name: 'download.png', title: 'location' },
    { url: 'https://cdn.filestackcontent.com/E4G84SL3THyT3tYJGJe6', name: 'download.png', title: 'Media' },
    { url: 'https://cdn.filestackcontent.com/IvOCF8YgTGxsCCIkl062', name: 'download.png', title: 'user-database' },
    { url: 'https://cdn.filestackcontent.com/hfTJlILvQ5qKEm5Qflj4', name: 'download.png', title: 'notification-control' },
    { url: 'https://cdn.filestackcontent.com/qCvu4nL5SvyUFsNJUBAW', name: 'download.png', title: 'Not-required' },
    { url: 'https://cdn.filestackcontent.com/K4BSls4TQqN7NUY5wUhT', name: 'download.png', title: 'rating_review' },
    { url: 'https://cdn.filestackcontent.com/coxjkYFdRpiWFK1VCVoV', name: 'download.png', title: 'referral' },
    { url: 'https://cdn.filestackcontent.com/vfb1aUwzQCawNBHRZS1k', name: 'download.png', title: 'reporting-analytics' },
    { url: 'https://cdn.filestackcontent.com/gpUR5YSRRmeWDi1EKiZk', name: 'download.png', title: 'search' },
    { url: 'https://cdn.filestackcontent.com/Fsr3YScxQwKpQutI9ms8', name: 'download.png', title: 'security-not-important' },
    { url: 'https://cdn.filestackcontent.com/Hew4OvvUSMu2iKzfQ80F', name: 'download.png', title: 'shopping-cart' },
    { url: 'https://cdn.filestackcontent.com/OUbeLimRnqWbLb8QZgiA', name: 'download.png', title: 'social-network' },
    { url: 'https://cdn.filestackcontent.com/eBuGbvlHQyG9HTsmqlzt', name: 'download.png', title: 'stock-template-ui' },
    { url: 'https://cdn.filestackcontent.com/ENK9TK7hSA6EBfYdf7Hw', name: 'download.png', title: 'user-management' },
    { url: 'https://cdn.filestackcontent.com/hrlcBVRhRlIJytewiqgT', name: 'download.png', title: 'social-net' },
    { url: 'https://cdn.filestackcontent.com/LvX4sZmT1erveF1MVdLg', name: 'download.png', title: 'windows' },
];


/***/ }),

/***/ "./src/app/site/templates/templateAll/preview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/site/templates/templateAll/preview.component.ts ***!
  \*****************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/subdomain.service */ "./src/app/shared/services/subdomain.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _builder_services_builder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../+builder/services/builder.service */ "./src/app/site/+builder/services/builder.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(subDomainService, cdr, titleService, _builderService, router) {
        this.subDomainService = subDomainService;
        this.cdr = cdr;
        this.titleService = titleService;
        this._builderService = _builderService;
        this.router = router;
        this.url = window.location.href;
        this.urlParts = this.url.split('/');
        this.subDomain = this.urlParts[2].split('.')[0];
        this.src = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PROTOCOL + this.subDomain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APP_EXTENSION + '/preview/previewFrame';
        this.className = 'desktop';
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var calc = localStorage.getItem('calc');
        var project = localStorage.getItem('project');
        if (calc && project != 'New' && this.router.url != '/preview-demo') {
            this._builderService.getProject({ _id: calc, company: this.subDomainService.subDomain.sub_domain })
                .subscribe(function (response) {
                if (!jQuery.isEmptyObject(response)) {
                    var responseJson = response;
                    if (responseJson.favicon != '') {
                        jQuery('#favicon').attr('href', responseJson.favicon);
                    }
                    _this.titleService.setTitle(responseJson.title.replace(/(<([^>]+)>)/ig, ''));
                    responseJson = JSON.stringify(responseJson);
                    localStorage.setItem('template', responseJson);
                    _this.src = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APP_EXTENSION + '/preview/previewFrame';
                }
            }, function (error) { });
        }
        else {
            var template = localStorage.getItem('template');
            if (template || this.json) {
                var app = this.json || JSON.parse(template);
                if (app.parentApp)
                    localStorage.setItem('calc', app.parentApp);
                else
                    localStorage.setItem('calc', app._id);
                this.src = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APP_EXTENSION + (this.router.url == '/preview-demo' ? '/preview-demo/previewFrame' : '/preview/previewFrame');
                jQuery('meta[name=description]').attr('content', app.description);
                document.title = app.title;
                if (app.favicon != '') {
                    jQuery('#favicon').attr('href', app.favicon);
                }
            }
        }
    };
    PreviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //code
        this.viewOnWindowWidthBasis();
        jQuery(window).resize(function () {
            _this.viewOnWindowWidthBasis();
        });
        var interval = setInterval(function () {
            if (window.Intercom) {
                window.Intercom('update', { 'app_current_page': 'preview' });
                window.Intercom('update', { 'app_current_page_url': window.location.href });
                clearInterval(interval);
            }
        }, 1000);
    };
    PreviewComponent.prototype.viewOnWindowWidthBasis = function () {
        var width = jQuery(window).width();
        if (width > 775)
            this.switchView('desktop');
        else if (width <= 775 && width > 375)
            this.switchView('tablet');
        else
            this.switchView('mobile');
        this.cdr.detectChanges();
    };
    PreviewComponent.prototype.onMouseEnter = function () {
        if (this.className === 'mobile')
            jQuery('.responsive-menu').fadeIn(600);
    };
    PreviewComponent.prototype.onMouseLeave = function () {
        if (this.className === 'mobile')
            jQuery('.responsive-menu').fadeOut(600);
    };
    PreviewComponent.prototype.switchView = function (className) {
        this.className = className;
        var width = 600;
        var height = 400;
        window.resizeBy(width, height);
        window.moveTo(((screen.width - width) / 2), ((screen.height - height) / 2));
        //iframe Tab Mobile graph
        // setTimeout(function(){
        //     if (jQuery('#mobile-iframe').hasClass('tablet')) {
        //       console.log('if');
        //       jQuery('#graph-container').addClass('tablet-width');
        //     } else {
        //       console.log('else');
        //   }
        // },200)
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewComponent.prototype, "json", void 0);
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'og-preview',
            template: "\n    <div class=\"responsive-menu\" (mouseenter)=\"onMouseEnter()\">\n        <span class=\"title\">Resize Template: </span>\n        <div class=\"icon-block\">\n            <a href=\"javascript:void(0);\" (click)=\"switchView('desktop')\" [class.active-view] = \"className==='desktop'\">\n                <i class=\"material-icons\">desktop_mac</i> <span>|</span></a>\n            <a href=\"javascript:void(0);\" (click)=\"switchView('tablet')\"  [class.active-view] = \"className==='tablet'\">\n                <i class=\"material-icons\">tablet_mac</i><span>|</span> </a>\n            <a href=\"javascript:void(0);\" (click)=\"switchView('mobile')\"  [class.active-view] = \"className==='mobile'\">\n                <i class=\"material-icons\">smartphone</i></a>\n        </div>\n    </div>\n    <div id=\"main-profile\">\n        <iframe\n        (mouseenter)=\"onMouseEnter()\" \n        (mouseleave)=\"onMouseLeave()\"\n        id=\"mobile-iframe\"\n        [ngClass]=\"{\n            desktop: className==='desktop', \n            tablet: className==='tablet',\n            mobile: className==='mobile'\n        }\" \n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    @font-face {\n        font-family: montserratregular;\n        font-style: normal;\n        font-weight: 400;\n        src: url(../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n    }\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb5f66;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n        font-family: 'montserratregular';\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop {\n        width: 100%;\n        height: 100%;\n    }\n\n    div#main-profile{\n        float: left;\n        width: 100%;\n        overflow: hidden;\n        height: 100%;\n        text-align: center;\n        margin: 1% auto;\n    }\n\n    .mobile {\n      width: 375px;\n      margin: 0 auto;\n      height: 570px;\n      border: 1px solid #dcdddf;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      overflow: hidden !important;\n      position: relative;\n    }\n\n    .tablet {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n        @font-face {\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: 400;\n        src: url(MaterialIcons-Regular.eot);\n        src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n      }\n        .material-icons {\n        font-family: 'Material Icons';\n        font-weight: 400;\n        font-style: normal;\n        display: inline-block;\n        line-height: 1;\n        text-transform: none;\n        letter-spacing: normal;\n        word-wrap: normal;\n        white-space: nowrap;\n        direction: ltr;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        font-feature-settings: 'liga'\n      }\n      .responsive-menu i{ font-size:24px;}\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_3__["SubDomainService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _builder_services_builder_service__WEBPACK_IMPORTED_MODULE_5__["BuilderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/site/templates/templateAll/sampleCode.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/site/templates/templateAll/sampleCode.component.ts ***!
  \********************************************************************/
/*! exports provided: SampleCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleCodeComponent", function() { return SampleCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/subdomain.service */ "./src/app/shared/services/subdomain.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SampleCodeComponent = /** @class */ (function () {
    function SampleCodeComponent(subDomainService, route) {
        this.subDomainService = subDomainService;
        this.route = route;
        this.pageType = 'full-page';
    }
    SampleCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var type = params['type'];
            if (type)
                _this.pageType = type;
        });
        this.src = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APP_EXTENSION + '/preview/previewFrame';
        var template = localStorage.getItem('template');
        if (template) {
            var app = JSON.parse(template);
            jQuery('meta[name=description]').attr('content', app.description);
            window.parent.document.title = app.title;
            if (app.favicon != '') {
                jQuery('#favicon').attr('href', app.favicon);
            }
        }
    };
    SampleCodeComponent.prototype.ngAfterViewInit = function () {
        var interval = setInterval(function () {
            if (window.Intercom) {
                window.Intercom('update', { 'app_current_page': 'builder' });
                window.Intercom('update', { 'app_current_page_url': window.location.href });
                clearInterval(interval);
            }
        }, 1000);
    };
    SampleCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'og-sample-code',
            template: "\n    <div id=\"main-profile\">\n        <iframe\n        [class.full-page]=\"pageType==='full-page'\"\n        [class.small-page]=\"pageType==='small-page'\"\n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb5f66;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_2__["SubDomainService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SampleCodeComponent);
    return SampleCodeComponent;
}());



/***/ }),

/***/ 6:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=default~app-site-builder-builder-module~app-site-templates-templateAll-preview-module~app-site-templ~0783f0ac.js.map