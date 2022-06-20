
/**
 * 监听器
 *
 * @export
 * @class Listener
 */
export class Listener {
  constructor(element, recognizer) {
    let contexts = new Map()

    element.addEventListener('touchstart', event => {
      for (let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    });

    element.addEventListener('touchmove', event => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.move(touch, context);
      }
    });

    element.addEventListener('touchend', event => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.end(touch, context);
        contexts.delete(touch.identifier)
      }
    });

    element.addEventListener('cancel', event => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.cancel(touch, context);
        contexts.delete(touch.identifier)
      }
    });
  }
}

/**
 * 识别手势
 *
 * @export
 * @class Recognizer
 */
export class Recognizer {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  start (point, context) {
    context.startX = point.clientX
    context.startY = point.clientY

    //更新状态
    context.isPan = false;
    context.isTap = true;
    context.isPress = false;

    context.handler = setTimeout(() => {
      context.isPan = false;
      context.isTap = false;
      context.isPress = true;
      this.dispatcher.dispatch('press');
      context.handler = null;  //保护不会在press-start时再次触发
    }, 500);
  };
  move (point, context) {
    let dx = point.clientX - context.startX
    let dy = point.clientY - context.startY

    let d = dx ** 2 + dy ** 2

    //处理临界状态
    if (!context.isPan && d > 100) {
      context.isPan = true;
      context.isTap = false;
      context.isPress = false;
      context.isVertical = Math.abs(dx) < Math.abs(dy)

      this.dispatcher.dispatch('panstart', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        dx,
        dy,
        isVertical: context.isVertical,
      });
      clearTimeout(context.handler)
    }

    //此时一直在滑动
    if (context.isPan) {
      this.dispatcher.dispatch('pan', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        dx,
        dy,
        isVertical: context.isVertical,
      });
    }

    //筛选前500个取平均数
    if (context.points) {
      context.points = context.points.filter(point => Date.now() - point.t < 500);
    } else {
      context.points = []
    }

    context.points.push({
      t: Date.now(),
      x: point.clientX,
      y: point.clientY,
    });

  };
  end (point, context) {
    context.isFlick = false;  //在pan start 后isFlick代表快速滑动500ms内会触发flick

    if (context.isTap) {
      this.dispatcher.dispatch('tap', {}); //发布tap事件
      clearTimeout(context.handler);
    }

    if (context.isPan) {
      context.points = context.points.filter(point => Date.now() - point.t < 500);

      let d, v;
      if (!context.points.length) {
        v = 0;
      } else {
        d = Math.sqrt(
          (point.clientX - context.points[0].x) ** 2 + (point.clientY - context.points[0].y) ** 2
        );
        v = d / (Date.now() - context.points[0].t);
      }

      if (v > 1.5) {
        context.isFlick = true;
        this.dispatcher.ispatch('flick', {});  //发布flick事件
      } else {
        context.isFlick = false;
        this.dispatcher.dispatch('panend', {}); //发布pan-end 事件 
      }
    }
    if (context.isPress) {
      this.dispatcher.dispatch('panend', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
      });
    }
  };
  cancel (point, context) {
    clearTimeout(context.handler);
  };
}

/**
 * 分发器
 *
 * @export
 * @class dispatcher
 */
export class Dispatcher {
  constructor(element) {
    this.element = element
  }

  dispatch (type, properties) {
    let event = new Event(type);
    for (let name in properties) {
      event[name] = properties[name];
    }
    this.element.dispatchEvent(event);
  }
}

/**
 * 手势快速监听
 *
 * @export
 * @param {DOM} element
 */
export function enableGesture (element) {
  new Listener(element, new Recognizer(new Dispatcher(element)));
}

/**
 * 创建devTools的Z手势
 *
 * @export
 * @param {DOM} element
 * @param {Funtion} createToolsFn
 * @param {number} endTime  默认10s后停止
 */
export function watchGestureZ (element, createToolsFn, endTime = 10000) {
  enableGesture(element)

  let dx = 0, dy = 0, startX = 0, clientX = 0
  let isRight = false, isRight_old_dy = 0
  let isLeftBias = false, isLeftBias_old_dx = false
  let isRight_two = false
  let timer = null

  if (endTime) {
    setTimeout(() => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }, endTime);
  }
  if (!document || !document.documentElement) return
  document.documentElement.addEventListener('pan', (e) => {
    dx = e.dx
    dy = e.dy
    startX = e.startX
    clientX = e.clientX
    if (timer) return  //防止多次執行
    timer = setInterval(() => {
      console.log("1111111");
      //向右平移
      if (dx > 200 && !isRight) {
        isRight = true
        isRight_old_dy = dy
      }
      //检测左侧倾斜移动
      if (isRight && !isLeftBias && Math.abs((clientX - startX)) < 20 && dy - isRight_old_dy > 100) {
        isLeftBias = true
        isLeftBias_old_dx = dx
      }
      //再次右移
      if (isRight && isLeftBias && !isRight_two && dx - isLeftBias_old_dx > 100) {
        alert('isRight_two')
        isRight_two = true
        //此时打开devTools
        createToolsFn()
        clearInterval(timer)
        timer = null

        console.log(timer);
      }
    }, 50)
  });
}