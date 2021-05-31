class CustomEvent {
  #events = {}
  /**
   * 
   * @param {string} eventName 
   * @param {function} cb 
   * @returns {CustomEvent}
   */
  on(eventName, cb) {
    const cbs = this.#events[eventName] ??= []
    if (!cbs.includes(cb)) cbs.push(cb)
  }
  emit(eventName) {
    const cbs = this.store[eventName] ??= []
    for (let cb of cbs) {
      cb.apply(this, payload)
    }
    return this
  }
  off(eventName, cb) {
    const events = this.store[eventName]
    if (events.length > 0) {
      if (cb) {
        const index = events.indexOf(cb)
        events.splice(index, 1)
      } else {
        events.length = 0
      }
    }
  }
  once(eventName, cb) {
    function cbWrap(payload) {
      cb(payload)
      this.off(eventName, cb)
    }
    this.on(eventName, cbWrap)
  }
}

const e = new CustomEvent()
function cb(s) {
  console.log(s)
}
e.on('click', cb)
e.emit('click', 'test')
e.emit('click', '545')
e.off('click')
e.emit('click', '545')
function onceCb(s) {
  console.log(s)
} 

e.once('click', onceCb)