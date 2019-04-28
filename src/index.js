class Global {
  _storage = {}
  _namespace = null

  constructor(namespace = null) {
    if (process.browser) {
      this._storage = window
    } else {
      this._storage = global
    }

    this._namespace = namespace

    if (namespace && typeof this._storage[namespace] === 'undefined') {
      this._storage[namespace] = {}
    }
  }

  getStorage = () => {
    if (this._namespace) {
      return this._storage[this._namespace]
    }

    return this._storage
  }

  set = (name, value) => {
    this.getStorage()[name] = value
  }

  get = (name, defaultValue = null) => {
    if (typeof this.getStorage()[name] === 'undefined') {
      return defaultValue
    }
    return this.getStorage()[name]
  }

  getAll = () => {
    return this.getStorage()
  }
}

module.exports = (namespace = null) => {
  return new Global(namespace)
}
