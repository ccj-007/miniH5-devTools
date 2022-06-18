let contexts = new Map()

let element = document.documentElement;

element.addEventListener('touchstart', event => {
  for (let touch of event.changedTouches) {
    contexts.set(event.identifier, {})
    start(touch, event.identifier);
  }
});

element.addEventListener('touchmove', event => {
  for (let touch of event.changedTouches) {
    move(touch, event.identifier);
  }
});

element.addEventListener('touchend', event => {
  for (let touch of event.changedTouches) {
    end(touch, event.identifier);
    contexts.delete(touch.identifier)
  }
});

element.addEventListener('cancel', event => {
  for (let touch of event.changedTouches) {
    cancel(touch, event.identifier);
    contexts.delete(touch.identifier)
  }
});

let start = (point, identifier) => {
  let context = contexts.get(identifier)
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
    console.log('press-start');
    context.handler = null;  //保护不会在press-start时再次触发
  }, 500);
  console.log("当前touch信息", context);
};
let move = (point, identifier) => {
  let context = contexts.get(identifier)
  let dx = point.clientX - context.startX
  let dy = point.clientY - context.startY

  let d = dx ** 2 + dy ** 2

  //处理临界状态
  if (!context.isPan && d > 100) {
    context.isPan = true;
    context.isTap = false;
    context.isPress = false;
    console.log('pan-start');  //正式开始滑动
    clearTimeout(context.handler)
  }

  if (context.isPan) {
    console.log(dx, dy);
    console.log('pan');
  }

  context.points = context.points.filter(point => Date.now() - point.t < 500);

  context.points.push({
    t: Date.now(),
    x: point.clientX,
    y: point.clientY,
  });

};
let end = (point, identifier) => {
  let context = contexts.get(identifier)
  context.isFlick = false;  //在pan start 后isFlick代表快速滑动500ms内会触发flick

  if (context.isTap) {
    dispatch('tap', {}); //发布tap事件
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
      dispatch('flick', {});  //发布flick事件
    } else {
      context.isFlick = false;
      dispatch('panend', {}); //发布pan-end 事件 
    }
  }
  if (context.isPress) {
    console.log('press-end');
  }
};
let cancel = (point, identifier) => {
  let context = contexts.get(identifier)

  clearTimeout(context.handler);
  console.log('cancel');
};


function dispatch (type, properties) {
  let event = new Event(type);
  for (let name in properties) {
    event[name] = properties[name];
  }
  element.dispatchEvent(event);
}
