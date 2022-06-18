class EventBus {
  constructor() {
    this.cache = {}
  }
  on (name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off (name, fn) {
    let tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex(f => f === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit (name, once = false, ...args) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      let tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn(...args)
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

let eventBus = new EventBus()
let fn1 = function (name, age) {
  console.log(`${name} ${age}`)
}
let fn2 = function (name, age) {
  console.log(`hello, ${name} ${age}`)
}
// eventBus.on('aaa', fn1)
// eventBus.on('aaa', fn2)
// eventBus.emit('aaa', false, '布兰', 12)

window.addEventListener('hashchange', function (event) {
  console.log(event);
})
var _wr = function (type) {
  let eventBus = new EventBus()
  eventBus.on(type, fn1)
  return function () {
    eventBus.emit(type, fn1)
  };
};
history.pushState = _wr('pushState');
history.replaceState = _wr('replaceState');
