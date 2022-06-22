
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "html,\nbody {\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n}\n\n#closeX {\n  width: 25px;\n  height: 25px;\n  background: #000;\n}\n\n#envBox {\n  position: fixed;\n  z-index: 999999999999;\n  top: 50%;\n  right: 0;\n  width: 10px;\n  height: 60px;\n  background: #40a9ff;\n  transition: top .5s linear;\n  border-radius: 5px 0 0 5px;\n}\n\n#envBox-expand {\n  position: fixed;\n  z-index: 9999999999999;\n  width: 100vw;\n  top: 50%;\n  right: 0;\n  background: #40a9ff;\n  transition: width .5s linear;\n}\n\n#envBox-expand button {\n  width: 20%;\n  height: 30px;\n  z-index: 1;\n  color: white;\n  background: #0987ee;\n  outline: none;\n  border: none;\n  padding: 0.5em auto;\n  box-sizing: border-box;\n}\n\n#envBox-dialog {\n  position: fixed;\n  top: 40%;\n  z-index: 99;\n  background: #40a9ff;\n  padding: 20px;\n  border-radius: 5px;\n  color: #fff;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1)\n}\n\n#envBox-dialog button {\n  z-index: 1;\n  color: white;\n  background: #0987ee;\n  outline: none;\n  border: none;\n  padding: 5px 10px;\n  box-sizing: border-box;\n}\n\n#envBox-toast {\n  position: fixed;\n  top: 2%;\n  z-index: 99;\n  background: white;\n  padding: 15px;\n  border-radius: 30px;\n  font-size: 14px;\n  color: #000;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1)\n}\n\n.dialog-detail {\n  width: 100%;\n  line-height: 32px;\n  font-size: 14px;\n}\n\n\n#envBox-expand span {\n  color: #ffffff;\n  font-size: 14px;\n}\n\n\n.jello-horizontal {\n  -webkit-animation: jello-horizontal .9s both;\n  animation: jello-horizontal .9s both\n}\n\n@-webkit-keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, .75, 1);\n    transform: scale3d(1.25, .75, 1)\n  }\n\n  40% {\n    -webkit-transform: scale3d(.75, 1.25, 1);\n    transform: scale3d(.75, 1.25, 1)\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, .85, 1);\n    transform: scale3d(1.15, .85, 1)\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1)\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1)\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n}\n\n@keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, .75, 1);\n    transform: scale3d(1.25, .75, 1)\n  }\n\n  40% {\n    -webkit-transform: scale3d(.75, 1.25, 1);\n    transform: scale3d(.75, 1.25, 1)\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, .85, 1);\n    transform: scale3d(1.15, .85, 1)\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1)\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1)\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n}\n\n.slide-in-blurred-top {\n  animation: slide-in-blurred-top .6s cubic-bezier(.23, 1.000, .32, 1.000) both\n}\n\n@keyframes slide-in-blurred-top {\n  0% {\n    transform: translateY(-1000px) scaleY(2.5) scaleX(.2);\n    transform-origin: 50% 0;\n    filter: blur(40px);\n    opacity: 0\n  }\n\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1\n  }\n}\n\n.env-close {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  border-radius: 0 0 0 50%;\n}";
  styleInject(css_248z);

  /**
   * 监听器
   *
   * @export
   * @class Listener
   */

  var Listener = /*#__PURE__*/_createClass(function Listener(element, recognizer) {
    _classCallCheck(this, Listener);

    var contexts = new Map();
    element.addEventListener('touchstart', function (event) {
      var _iterator = _createForOfIteratorHelper(event.changedTouches),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var touch = _step.value;
          var context = Object.create(null);
          contexts.set(touch.identifier, context);
          recognizer.start(touch, context);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    element.addEventListener('touchmove', function (event) {
      var _iterator2 = _createForOfIteratorHelper(event.changedTouches),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var touch = _step2.value;
          var context = contexts.get(touch.identifier);
          recognizer.move(touch, context);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    element.addEventListener('touchend', function (event) {
      var _iterator3 = _createForOfIteratorHelper(event.changedTouches),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var touch = _step3.value;
          var context = contexts.get(touch.identifier);
          recognizer.end(touch, context);
          contexts.delete(touch.identifier);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });
    element.addEventListener('cancel', function (event) {
      var _iterator4 = _createForOfIteratorHelper(event.changedTouches),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var touch = _step4.value;
          var context = contexts.get(touch.identifier);
          recognizer.cancel(touch, context);
          contexts.delete(touch.identifier);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    });
  });
  /**
   * 识别手势
   *
   * @export
   * @class Recognizer
   */

  var Recognizer = /*#__PURE__*/function () {
    function Recognizer(dispatcher) {
      _classCallCheck(this, Recognizer);

      this.dispatcher = dispatcher;
    }

    _createClass(Recognizer, [{
      key: "start",
      value: function start(point, context) {
        var _this = this;

        context.startX = point.clientX;
        context.startY = point.clientY; //更新状态

        context.isPan = false;
        context.isTap = true;
        context.isPress = false;
        context.handler = setTimeout(function () {
          context.isPan = false;
          context.isTap = false;
          context.isPress = true;

          _this.dispatcher.dispatch('press', {
            clientX: point.clientX,
            clientY: point.clientY
          });

          context.handler = null; //保护不会在press-start时再次触发
        }, 500);
      }
    }, {
      key: "move",
      value: function move(point, context) {
        var dx = point.clientX - context.startX;
        var dy = point.clientY - context.startY;
        var d = Math.pow(dx, 2) + Math.pow(dy, 2); //处理临界状态

        if (!context.isPan && d > 100) {
          context.isPan = true;
          context.isTap = false;
          context.isPress = false;
          context.isVertical = Math.abs(dx) < Math.abs(dy);
          this.dispatcher.dispatch('panstart', {
            startX: context.startX,
            startY: context.startY,
            clientX: point.clientX,
            clientY: point.clientY,
            dx: dx,
            dy: dy,
            isVertical: context.isVertical
          });
          clearTimeout(context.handler);
        } //此时一直在滑动


        if (context.isPan) {
          this.dispatcher.dispatch('pan', {
            startX: context.startX,
            startY: context.startY,
            clientX: point.clientX,
            clientY: point.clientY,
            dx: dx,
            dy: dy,
            isVertical: context.isVertical
          });
        } //筛选前500个取平均数


        if (context.points) {
          context.points = context.points.filter(function (point) {
            return Date.now() - point.t < 500;
          });
        } else {
          context.points = [];
        }

        context.points.push({
          t: Date.now(),
          x: point.clientX,
          y: point.clientY
        });
      }
    }, {
      key: "end",
      value: function end(point, context) {
        context.isFlick = false; //在pan start 后isFlick代表快速滑动500ms内会触发flick

        if (context.isTap) {
          this.dispatcher.dispatch('tap', {}); //发布tap事件

          clearTimeout(context.handler);
        }

        if (context.isPan) {
          context.points = context.points.filter(function (point) {
            return Date.now() - point.t < 500;
          });
          var d, v;

          if (!context.points.length) {
            v = 0;
          } else {
            d = Math.sqrt(Math.pow(point.clientX - context.points[0].x, 2) + Math.pow(point.clientY - context.points[0].y, 2));
            v = d / (Date.now() - context.points[0].t);
          }

          if (v > 1.5) {
            context.isFlick = true;
            this.dispatcher.dispatch('flick', {}); //发布flick事件
          } else {
            context.isFlick = false;
            this.dispatcher.dispatch('panend', {
              clientX: point.clientX,
              clientY: point.clientY
            }); //发布pan-end 事件 
          }
        }

        if (context.isPress) {
          this.dispatcher.dispatch('panend', {
            startX: context.startX,
            startY: context.startY,
            clientX: point.clientX,
            clientY: point.clientY,
            isVertical: context.isVertical,
            isFlick: context.isFlick
          });
        }
      }
    }, {
      key: "cancel",
      value: function cancel(point, context) {
        clearTimeout(context.handler);
      }
    }]);

    return Recognizer;
  }();
  /**
   * 分发器
   *
   * @export
   * @class dispatcher
   */

  var Dispatcher = /*#__PURE__*/function () {
    function Dispatcher(element) {
      _classCallCheck(this, Dispatcher);

      this.element = element;
    }

    _createClass(Dispatcher, [{
      key: "dispatch",
      value: function dispatch(type, properties) {
        var event = new Event(type);

        for (var name in properties) {
          event[name] = properties[name];
        }

        this.element.dispatchEvent(event);
      }
    }]);

    return Dispatcher;
  }();
  /**
   * 手势快速监听
   *
   * @export
   * @param {DOM} element
   */

  function enableGesture(element) {
    new Listener(element = document.documentElement, new Recognizer(new Dispatcher(element)));
  }
  /**
   * 创建devTools的Z手势
   *
   * @export
   * @param {DOM} element
   * @param {Funtion} createToolsFn
   * @param {number} endTime  默认10s后停止
   */

  function watchGestureZ(element, options) {
    enableGesture(element);
    var dx = 0,
        dy = 0,
        startX = 0,
        clientX = 0;
    var isRight = false,
        isRight_old_dy = 0;
    var isLeftBias = false,
        isLeftBias_old_dx = false;
    var isRight_two = false;
    var timer = null;

    if (options.endTime) {
      setTimeout(function () {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      }, options.endTime);
    }

    if (!document || !document.documentElement) return;
    document.documentElement.addEventListener('pan', function (e) {
      dx = e.dx;
      dy = e.dy;
      startX = e.startX;
      clientX = e.clientX;
      if (timer) return; //防止多次執行

      timer = setInterval(function () {
        //向右平移
        if (dx > 200 && !isRight) {
          isRight = true;
          isRight_old_dy = dy;
        } //检测左侧倾斜移动


        if (isRight && !isLeftBias && Math.abs(clientX - startX) < 20 && dy - isRight_old_dy > 100) {
          isLeftBias = true;
          isLeftBias_old_dx = dx;
        } //再次右移


        if (isRight && isLeftBias && !isRight_two && dx - isLeftBias_old_dx > 100) {
          alert('success unlock');
          isRight_two = true; //此时打开devTools

          h5Tools.startdevTools();
          clearInterval(timer);
          timer = null;
          console.log(timer);
        }
      }, 50);
    });
  }
  /**
   * 开启手势监控
   *
   * @param {DOM} element 
   * @param {string} thumb 手势方向  'z'
   * @param {Obejct} options 配置项
   */


  function startGesture(element) {
    var thumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'z';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    //开启手势控制
    if (thumb === 'z') {
      watchGestureZ(element = document.documentElement, options);
    }
  }

  /**
   *检查是否是移动端
   *
   * @return {boolean} 
   */
  var isMobileFn = function isMobileFn() {
    var machineType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

    if (machineType === 'Mobile') {
      return true;
    } else {
      return false;
    }
  };
  /**
   * localStorage 封装
   *
   * @return {boolean} 
   */

  var Storage = {
    get: function get(key) {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (error) {
        console.log(error);
      }
    },
    set: function set(key, val) {
      localStorage.setItem(key, JSON.stringify(val));
    },
    remove: function remove(key) {
      localStorage.removeItem(key);
    },
    clear: function clear() {
      localStorage.clearItem();
    }
  };
  /**
   * 检查数据类型工具
   * @param {*} params
   * @return {string} 数据类型
   */

  var checkType = function checkType(params) {
    return Object.prototype.toString.call(params).slice(8, -1).toLowerCase();
  };

  var closeIconSrc = "<svg class='env-close' role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" width=\"48px\" height=\"48px\" viewBox=\"0 0 24 24\" aria-labelledby=\"closeIconTitle\" stroke=\"#0987ee\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill=\"none\" color=\"#0987ee\"> <title id=\"closeIconTitle\">Close</title> <path d=\"M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575\"/> </svg>";

  /**
   * @description dialog components
   */
  /**
   * 创建dialog
   *
   * @param {*} contentStr
   */

  const createDialog = contentStr => {
    Storage.set('global_forbid', true);
    let dialogDOM = document.querySelector('#envBox-dialog');

    if (!dialogDOM) {
      dialogDOM = document.createElement('div');
      dialogDOM.id = 'envBox-dialog';
      dialogDOM.className = 'jello-horizontal';
      document.body.appendChild(dialogDOM);
      dialogDOM.innerHTML += closeIconSrc; //close icon
    } //如果已存在就展示及更新数据


    dialogDOM.style.display = 'block';
    if (dialogDOM.innerHTML) dialogDOM.innerHTML = ''; //一次性更新

    dialogDOM.innerHTML = contentStr; //监听点击关闭dialog

    let closeDOM = document.querySelector('.env-close');
    closeDOM.addEventListener('click', () => {
      clearDialog();
    }, false);
  };
  /**
   * 清除dialog
   */

  const clearDialog = () => {
    let dialogDOM = document.querySelector('#envBox-dialog');
    console.log(dialogDOM);
    dialogDOM.innerHTML = '';
    dialogDOM.style.display = 'none';
    Storage.set('global_forbid', false);
  };
  /**
   * 更新dialog
   *
   * @param {*} contentStr
   */

  const updateDialog = contentStr => {
    let dialogDOM = document.querySelector('#envBox-dialog');
    if (dialogDOM.innerHTML) dialogDOM.innerHTML = '';
    dialogDOM.innerHTML += contentStr;
    dialogDOM.innerHTML += closeIconSrc; //close icon
    //监听点击关闭dialog

    let closeDOM = document.querySelector('.env-close');
    closeDOM.addEventListener('click', () => {
      clearDialog();
    }, false);
  };

  /**
   * @description toast components
   */

  /**
   * 创建toast
   *
   * @param {*} contentStr
   */
  const createToast = function (content) {
    let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    let toastDOM = document.createElement('div');
    toastDOM.id = 'envBox-toast';
    toastDOM.className = 'slide-in-blurred-top';
    toastDOM.innerText = content;
    document.body.appendChild(toastDOM);
    setTimeout(() => {
      document.body.removeChild(toastDOM);
    }, wait);
  };

  var expandUI = false; //是否已经展示按钮

  var insertDOM = document.querySelector('#app'); //配置项

  var newOptions = {
    insertDOM: insertDOM,
    //插入的envTools的容器
    wait: 1000,
    //等待时间
    needSleep: false,
    //是否要延迟加载 
    envBoxIdName: 'envBox',
    envBoxExpandIdName: 'envBox-expand',
    envList: ['test', 'dev', 'prebrand'],
    //环境列表
    watchEnv: true,
    //是否监听环境
    watchPerformance: true,
    //是否监听性能
    watchError: true,
    //是否监听性能
    watchRoutes: true,
    //是否监听性能
    watchActions: true,
    //是否监听行为
    watchStorage: true,
    //是否监听storage
    watchSystem: true,
    //是否监听手机系统数据
    isNewStorage: true,
    //默认展示前5个更新的storage，false将展示所有
    watchActionDOMList: [{
      eventType: 'click',
      domId: '.test1',
      eventId: '001'
    }],
    //监听数组内的DOM
    sendOptions: {
      commonInfo: {
        pid: '',
        //项目id
        mid: '',
        //模块id
        uid: '',
        //用户id
        did: '' //设备id

      },
      method: 'gif',
      //是否通过sendBeacon发送埋点数据 'beacon' | 'gif' 
      baseURL: 'http://localhost:8000'
    },
    maxLimit: 5,
    //最大缓存限制
    asyncTime: 5000,
    //默认延迟时间
    endTime: 10000 //监听手势结束时间

  }; //异常数据采集

  var errorData = {
    errorCount: 0,
    errorSum: '',
    errorList: []
  }; //路由数据采集

  var routesData = {
    //用于当前页面展示
    routeInfo: {
      url: '',
      //当前页面url
      referer: '',
      // 上级页面
      title: '',
      //页面标题
      action: '',
      //页面加载来源
      sendTime: '',
      //发送时间
      triggerTime: '' //事件发送时间

    },
    routesList: [] // 采集pv数据的列表

  }; //最新缓存的采集

  var storageData = {
    newStorageList: [],
    maxLen: 5
  }; //手势数据
  /**
   * 初始化
   */

  var init = function init() {
    Storage.set('global_forbid', false);
  };
  /**
   * envTools开始入口
   * @param {Object} options 配置项
   */


  var startdevTools = function startdevTools() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : newOptions;
    init();
    Object.assign(newOptions, options); //覆盖配置

    checkOptions(newOptions); //校验options
    //前置监听

    newOptions.watchError && preWatchError();
    newOptions.watchActions && preWatchActions();
    newOptions.watchRoutes && preWatchRoutes();
    newOptions.watchStorage && preWatchStorage();
    newOptions.watchSystem && preWatchSystem();
    var needSleep = newOptions.needSleep,
        wait = newOptions.wait; //如果需要延迟加载

    if (needSleep) {
      setTimeout(function () {
        createEnvDevTools(newOptions);
      }, wait);
      return;
    }

    createEnvDevTools(newOptions);
  };
  /**
   * 创建env环境切换工具
   * @param  {Object} options 
   */


  var createEnvDevTools = function createEnvDevTools(options) {
    var envBoxIdName = options.envBoxIdName,
        envBoxExpandIdName = options.envBoxExpandIdName,
        insertDOM = options.insertDOM;
        options.watchSystem;
        var watchEnv = options.watchEnv,
        watchPerformance = options.watchPerformance,
        watchError = options.watchError,
        watchRoutes = options.watchRoutes,
        watchStorage = options.watchStorage;
    var envBox = document.createElement('div');
    envBox.id = envBoxIdName;
    insertDOM.appendChild(envBox);
    handleDrag(envBox); //处理手势

    envBox.addEventListener('click', function (e) {
      if (Storage.get('global_forbid') === true) return;
      envBox.id = envBoxExpandIdName;
      expandUI = true;
      watchEnv && loadEnvModule(envBox);
      watchPerformance && loadPerformanceModule(envBox);
      watchError && loadErrorModule(envBox);
      watchRoutes && loadRoutesModule(envBox);
      watchStorage && loadStorageModule(envBox);

      var envBoxBtnList = document.querySelectorAll('#envBox-expand button');
      console.log(envBoxBtnList);
      envBoxBtnList.forEach(function (btn) {
        btn.ontouchstart = function () {
          btn.style.background = '#40a9ff';
        };

        btn.ontouchend = function () {
          btn.style.background = '#0987ee';
        };
      });
    }, false);
    document.addEventListener('click', function (e) {
      if (e.target.id === envBox.id) return;

      if (expandUI) {
        envBox.id = envBoxIdName;
        envBox.innerHTML = '';
        expandUI = false;
      }
    }, false);
  };
  /**
   * 处理拖拽
   */


  var handleDrag = function handleDrag(envBox) {
    enableGesture(); //监听手势

    var ew = envBox.offsetWidth;
    var eh = envBox.offsetHeight;
    var el = envBox.offsetLeft;
    var et = envBox.offsetTop;
    var isDrag = false;
    document.documentElement.addEventListener('panstart', function (e) {
      if (el - 10 < e.clientX && e.clientX < el + ew + 10 && et - 10 < e.clientY && e.clientY < et + eh + 10) {
        console.log('darg');
        isDrag = true;
      } else {
        isDrag = false;
      }
    });
    document.documentElement.addEventListener('panend', function (e) {
      if (isDrag) {
        envBox.style.top = e.clientY + 'px';
        et = e.clientY;
      }
    });
  };
  /**
   * 校验
   * @param {*} options 
   */


  var checkOptions = function checkOptions(options) {
    console.log(options); //自定义数据不能为空

    for (var key in options) {
      var val = options[key];

      if (val == null) {
        throw new Error("options exist null or undefined----" + key);
      }
    }
  };
  /**
   * 前置监听处理error
   */


  var preWatchError = function preWatchError() {
    window.addEventListener('error', function (e) {
      handleError("global error" + e.message);
      updateDialog("<div>".concat(errorData.errorSum, "</div>"));
    });
    window.addEventListener('unhandledrejection', function (e) {
      handleError("promise error" + e.reason);
      updateDialog("<div>".concat(errorData.errorSum, "</div>"));
    });
  };
  /**
   * 前置监听处理actions
   */


  var preWatchActions = function preWatchActions() {
    var watchActionDOMList = newOptions.watchActionDOMList;
    watchActionDOMList.forEach(function (item) {
      var domList = item.domId && document.querySelectorAll(item.domId);

      if (domList) {
        domList.forEach(function (dom) {
          dom.addEventListener(item.eventType, function () {
            sendMsg({
              type: item.eventType,
              DOM: item.domId
            }, 'action');
          });
        });
      }
    });
  };
  /**
   * 前置监听处理routes
   */


  var preWatchRoutes = function preWatchRoutes() {
    routesData.routeInfo.url = window.location.href;
    routesData.routeInfo.title = document.title;
    console.log(routesData);
    window.addEventListener('popstate', function (event) {
      console.log('routes change', event);
    });
  };
  /**
   * 前置监听Storage事件
   */


  var preWatchStorage = function preWatchStorage() {
    newOptions.isNewStorage;
    var originSetItem = localStorage.setItem; //自定义分发事件

    localStorage.setItem = function (key, val) {
      val = JSON.parse(val);
      var event = new Event("setItem", {
        key: val
      });
      event.key = key;
      event.val = val;
      var index = storageData.newStorageList.findIndex(function (item) {
        return item[0] === key;
      });

      if (index > -1) {
        //如果已经存在置于顶部
        storageData.newStorageList.splice(index, 1);
        storageData.newStorageList.unshift([key, val]);
      } else {
        storageData.newStorageList.push([key, val]); //挂载到Storage对象上
      }

      window.dispatchEvent(event);
      originSetItem.apply(this, arguments);
    };
  };
  /**
   * 系统数据
   */


  var preWatchSystem = function preWatchSystem() {
    console.log(window.plus);
    document.addEventListener("plusready", function (e) {
      console.log('getDeviceInfo success: ' + JSON.stringify(e));
    }, false); // plus.device.getInfo({
    //   success (e) {
    //     console.log('getDeviceInfo success: ' + JSON.stringify(e));
    //   }
    // })
  };
  /**
   *处理错误
   */


  var handleError = function handleError(msg) {
    var errorList = errorData.errorList;
    newOptions.maxLimit;
        var asyncTime = newOptions.asyncTime;
    if (!msg) return;
    errorList.push(msg);
    errorData.errorCount += 1;

    if (checkType(errorList) === 'array') {
      errorData.errorSum += "".concat(errorData.errorCount, ": ") + msg + '<br>';
      var errorObj = {
        errorSum: errorData.errorSum
      }; //如果超过阈值上报错误数据

      if (errorData.errorCount >= newOptions.maxLimit) {
        sendMsg(errorObj, 'err');
        errorData.errorList = [];
      } else {
        //默认延迟5s, 如果没有达到上限就发送
        if (!errorData.errorList.length) return;
        setTimeout(function () {
          if (errorData.errorCount < newOptions.maxLimit) {
            sendMsg(errorObj, 'err');
            errorData.errorList = [];
          }
        }, asyncTime);
      }
    }
  };
  /**
   * 环境模块
   * @param {DOM} envBox  devTools DOM
   */


  var loadEnvModule = function loadEnvModule(envBox) {
    var envList = newOptions.envList;
    var envBtnDOM = document.createElement('button');
    envBtnDOM.innerText = Storage.get('global_env') || 'env';
    envBtnDOM.className = 'envBtn';
    envBox.appendChild(envBtnDOM);
    envBtnDOM.addEventListener('click', function () {
      var contentStr = "<div class='dialog-detail'>\u5F53\u524D\u73AF\u5883: ".concat(Storage.get('global_env') || 'env', "</div>");
      envList.forEach(function (item) {
        contentStr += "<button class='env-btn'>".concat(item, "</button>");
      }); //创建弹窗

      createDialog(contentStr);
      var buttonList = document.querySelectorAll('.env-btn');
      buttonList.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          expandUI = false;
          var env = e.target.textContent;
          Storage.set('global_env', env);
          btn.innerText = env;
          envBtnDOM.innerText = Storage.get('global_env') || 'env';
          Storage.set('global_url', "https://".concat(env, ".zzss.com"));
          createToast('已成功修改' + env + '环境');
        }, false);
      });
    }, false);
  };
  /**
   * 加载性能监控模块
   * @param {DOM} envBox  devTools DOM
   */


  var loadPerformanceModule = function loadPerformanceModule(envBox) {
    var button = document.createElement('button');
    envBox.appendChild(button);
    button.innerText = 'performance';
    var FP,
        DCL,
        L = 0;
    var _window$performance$t = window.performance.timing,
        domLoading = _window$performance$t.domLoading,
        navigationStart = _window$performance$t.navigationStart,
        domContentLoadedEventEnd = _window$performance$t.domContentLoadedEventEnd,
        loadEventEnd = _window$performance$t.loadEventEnd;
    FP = domLoading - navigationStart;
    DCL = domContentLoadedEventEnd - navigationStart;
    L = loadEventEnd - navigationStart;

    button.onclick = function () {
      createDialog("<div>FP:".concat(FP, "ms----DCL:").concat(DCL, "ms---L:").concat(L, "ms</div>"));
    };
  };
  /**
   * 异常捕获模块
   * @param {DOM} envBox
   */


  var loadErrorModule = function loadErrorModule(envBox) {
    var errorSum = errorData.errorSum;
    var errorBtn = document.createElement('button');
    envBox.appendChild(errorBtn);
    errorBtn.innerText = 'error';

    errorBtn.onclick = function () {
      if (!errorSum) {
        createDialog("<div>no error</div>");
        return;
      }

      createDialog("<div>".concat(errorSum, "</div>"));
    };
  };
  /**
   * routes模块
   * @param {DOM} envBox
   */


  var loadRoutesModule = function loadRoutesModule(envBox) {
    var routeInfo = routesData.routeInfo;
    var routesBtn = document.createElement('button');
    envBox.appendChild(routesBtn);
    routesBtn.innerText = 'route';

    routesBtn.onclick = function () {
      var routerInfoStr = '';

      for (var _i = 0, _Object$entries = Object.entries(routeInfo); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            val = _Object$entries$_i[1];

        var str = "<div>".concat(key + '-----' + val, "</div><br>");
        routerInfoStr += str;
      }

      createDialog(routerInfoStr);
    };
  };
  /**
   * Storage模块
   * @param {DOM} envBox
   */


  var loadStorageModule = function loadStorageModule(envBox) {
    var isNewStorage = newOptions.isNewStorage;
    var maxLen = storageData.maxLen;
    var storageBtn = document.createElement('button');
    envBox.appendChild(storageBtn);
    storageBtn.innerText = 'storage';

    storageBtn.onclick = function () {
      var _storageData$newStora;

      var storageInfoStr = ''; //展示前几

      var len = (_storageData$newStora = storageData.newStorageList) === null || _storageData$newStora === void 0 ? void 0 : _storageData$newStora.length;

      if (isNewStorage && maxLen < len) {
        storageData.newStorageList.splice(maxLen, len);
      }

      storageData.newStorageList.forEach(function (storage) {
        var k = storage[0];
        var v = JSON.parse(storage[1]);
        var type = checkType(v);
        console.log('type', type);
        var str = "<div>key: ".concat(k, " val: ").concat(v, " type: ").concat(type, " <br></div>");
        storageInfoStr += str;
      });
      createDialog(storageInfoStr);
    };
  };
  /**
   * 数据上报
   * @param {Object} obj 上报的对象
   * @param {'err' | 'pv'} type 上传类型
   * @param {'beacon' | 'gif'} myMethods 自定义方法 
   */


  var sendMsg = function sendMsg(obj, type, myMethods) {
    //校验
    if (checkType(obj) !== 'object' && !type) {
      throw new Error('do not input object or type');
    }

    var _newOptions$sendOptio = newOptions.sendOptions,
        baseURL = _newOptions$sendOptio.baseURL,
        commonInfo = _newOptions$sendOptio.commonInfo,
        method = _newOptions$sendOptio.method;
    var submitObj = Object.assign({}, obj, commonInfo);
    var queryStr = Object.entries(submitObj).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return "".concat(key, "=").concat(val);
    }).join('&'); //gif图片发送方式

    if (myMethods === 'gif' || method === 'gif') {
      var img = new Image();
      img.src = "".concat(baseURL, "?") + encodeURIComponent(queryStr);
      console.log("上传信息", decodeURIComponent(img.src));
    }

    if (myMethods === 'beacon' || method === 'beacon') {
      navigator.sendBeacon(baseURL, submitObj);
    }
  };

  var h5Tools = {
    startdevTools: startdevTools,
    sendMsg: sendMsg
  };

  var isMobile = isMobileFn();
  if (!window) throw new Error('it is must be brower environment');
  if (!isMobile) throw new Error('it is must be mobile H5 environment');
  Object.prototype.h5tools = {
    gesture: startGesture,
    start: h5Tools.startdevTools,
    send: h5Tools.sendMsg
  };

}));