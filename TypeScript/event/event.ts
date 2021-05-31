class CEvent {
  #events: Record<string, Function[]> = {}

  on(events: string | string[], fn: Function) {
    if (Array.isArray(events)) {
      for (let event of events) {
        this.on(event, fn)
      }
    } else {
      (this.#events[events] || (this.#events[events] = [])).push(fn)
    }
    return this
  }
  emit(event: string) {
    const cbs = this.#events[event]
    if (cbs) {
      for (let fn of cbs) {
        fn.call(this, Array.prototype.slice.call(arguments, 1))
      }
    }
    return this
  }
  off(event?: string | string[], fn?: Function) {
    // 清空
    if (arguments.length === 0) {
      this.#events = {}
      return this
    } 
    if (Array.isArray(event)) {
      for (let e of event) {
        this.off(e, fn)
      }
      return this
    }
    if (!fn) {
      this.#events[event] = []
      return this
    }
    const cbs = this.#events[event]
    const i = cbs.indexOf(fn)
    cbs.splice(i, 1)
    return this
  }
  once(event: string, fn: Function) {
    const that = this
    function wrap() {
      that.off(event, fn)
      fn.apply(that, arguments)
    }
    this.on(event, wrap)
    return this
  }
}

const e = new CEvent()
e.on(['click', 'down'], () => {
  console.log(1111)
})
e.emit('click')
e.emit('click')
e.emit('down')

function once() {
  console.log('once')
}
e.once('once', once)
e.emit('once')
e.emit('once')