'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Global = function Global() {
  var _this = this;

  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  (0, _classCallCheck3.default)(this, Global);
  this._storage = {};
  this._namespace = null;

  this.getStorage = function () {
    if (_this._namespace) {
      return _this._storage[_this._namespace];
    }

    return _this._storage;
  };

  this.set = function (name, value) {
    _this.getStorage()[name] = value;
  };

  this.get = function (name) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (typeof _this.getStorage()[name] === 'undefined') {
      return defaultValue;
    }
    return _this.getStorage()[name];
  };

  this.getAll = function () {
    return _this.getStorage();
  };

  if (process.browser) {
    this._storage = window;
  } else {
    this._storage = global;
  }

  this._namespace = namespace;

  if (namespace && typeof this._storage[namespace] === 'undefined') {
    this._storage[namespace] = {};
  }
};

module.exports = function () {
  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return new Global(namespace);
};