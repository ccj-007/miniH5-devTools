
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

  var css_248z$3 = ".jello-horizontal {\r\n  animation: tilt-in-left-1 .6s cubic-bezier(.25, .46, .45, .94) both\r\n}\r\n\r\n@keyframes tilt-in-left-1 {\r\n  0% {\r\n    transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);\r\n    opacity: 0\r\n  }\r\n\r\n  100% {\r\n    transform: rotateX(0deg) translateX(0) skewX(0deg);\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.slide-in-blurred-top {\r\n  animation: slide-in-blurred-top .6s cubic-bezier(.23, 1.000, .32, 1.000) both\r\n}\r\n\r\n@keyframes slide-in-blurred-top {\r\n  0% {\r\n    transform: translateY(-1000px) scaleY(2.5) scaleX(.2);\r\n    transform-origin: 50% 0;\r\n    filter: blur(40px);\r\n    opacity: 0\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0) scaleY(1) scaleX(1);\r\n    transform-origin: 50% 50%;\r\n    filter: blur(0);\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.slide-in-right {\r\n  animation: slide-in-right .5s cubic-bezier(.25, .46, .45, .94) both\r\n}\r\n\r\n@keyframes slide-in-right {\r\n  0% {\r\n    transform: translateX(1000px);\r\n    opacity: 0\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1\r\n  }\r\n}";
  styleInject(css_248z$3);

  var css_248z$2 = ":root {\r\n  --primary-deep: #194769;\r\n  --primary-light: #194769;\r\n}\r\n\r\n#envBox {\r\n  position: fixed;\r\n  z-index: 999999999999;\r\n  top: 50%;\r\n  right: 0;\r\n  width: 10px;\r\n  height: 60px;\r\n  background: var(--primary-light);\r\n  transition: top .5s linear;\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n#envBox-expand {\r\n  position: fixed;\r\n  z-index: 9999999999999;\r\n  height: 60px;\r\n  width: 100vw;\r\n  top: 50%;\r\n  right: 0;\r\n  background: var(--primary-light);\r\n  /* transition: width .5s linear; */\r\n}\r\n\r\n#envBox-expand button {\r\n  width: 20%;\r\n  height: 30px;\r\n  z-index: 1;\r\n  color: white;\r\n  background: var(--primary-deep);\r\n  outline: none;\r\n  border: none;\r\n  padding: 0.5em auto;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#envBox-expand span {\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.envBox-textline {\r\n  line-height: 20px;\r\n}";
  styleInject(css_248z$2);

  var css_248z$1 = "/* dialog componetnts */\r\n:root {\r\n  --main-moredeep: #194769;\r\n  --main-deep: #26699c;\r\n  --main-light: #194769;\r\n\r\n  --common-info: #194769;\r\n  --common-warn: #d2bc19;\r\n  --common-error: #F2855E;\r\n  --common-success: #6FEF8D;\r\n}\r\n\r\n#envBox-dialog {\r\n  position: fixed;\r\n  font-size: 14px;\r\n  max-width: 80%;\r\n  z-index: 99;\r\n  background: var(--main-light);\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#envBox-dialog button {\r\n  z-index: 1;\r\n  color: white;\r\n  background: var(--main-deep);\r\n  outline: none;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dialog-detail {\r\n  width: 100%;\r\n  line-height: 32px;\r\n  font-size: 14px;\r\n}\r\n\r\n.env-close {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #fff;\r\n  border-radius: 0 0 0 50%;\r\n}\r\n\r\n/* toast componetnts */\r\n#envBox-toast {\r\n  position: fixed;\r\n  max-width: 80%;\r\n  word-break: break-all;\r\n  top: 2%;\r\n  z-index: 99;\r\n  padding: 15px;\r\n  border-radius: 30px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1)\r\n}\r\n\r\n.envBox-toast-info {\r\n  background: var(--common-info);\r\n}\r\n\r\n.envBox-toast-error {\r\n  background: var(--common-error);\r\n}\r\n\r\n.envBox-toast-warn {\r\n  background: var(--common-warn);\r\n}\r\n\r\n.envBox-error {\r\n  border-radius: 5px;\r\n  max-height: 400px;\r\n  color: var(--common-error);\r\n  word-break: break-all;\r\n  overflow-y: auto;\r\n}\r\n\r\n.console,\r\n.http,\r\n.router {\r\n  width: 100%;\r\n  display: flex;\r\n  word-break: break-all;\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.router {\r\n  color: #fff;\r\n}\r\n\r\n.console-log {}\r\n\r\n.console-warn {\r\n  color: var(--common-warn);\r\n}\r\n\r\n.console-error {\r\n  color: var(--common-error);\r\n}\r\n\r\n.console-info {\r\n  color: var(--main-deep);\r\n}\r\n\r\n\r\n\r\n.http-start {\r\n  color: var(--common-info);\r\n}\r\n\r\n.http-suc {\r\n  color: var(--common-success);\r\n}\r\n\r\n.http-err {\r\n  color: var(--common-error);\r\n}\r\n\r\n.xn {\r\n  color: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.xn-quick {\r\n  color: var(--common-success);\r\n}\r\n\r\n.xn-mid {\r\n  color: var(--common-warn);\r\n}\r\n\r\n.xn-low {\r\n  color: var(--common-error);\r\n}\r\n\r\n.storage-box {\r\n  border-radius: 2px;\r\n  word-break: break-all;\r\n  width: 100%;\r\n  display: flex;\r\n  word-break: break-all;\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n}\r\n\r\n.storage-key {\r\n  color: #fff;\r\n}\r\n\r\n.toolbar-warp {\r\n  position: fixed;\r\n  left: 0;\r\n  top: -20px;\r\n}\r\n\r\n.toolbar-clip,\r\n.toolbar-bin {\r\n  width: 20px;\r\n  height: 20px;\r\n}";
  styleInject(css_248z$1);

  var css_248z = "html,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.envBox-inlineText {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}";
  styleInject(css_248z);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

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
  /**
   * 获取DOM
   * @param {*} params
   */

  var $ = function $(params) {
    return document.querySelector(params);
  };
  /**
   * 处理循环引用的json
   * @param {*} data
   */

  var handleCircularJson = function handleCircularJson(data) {
    var seen = new WeakSet();
    return JSON.stringify(data, function (key, value) {
      if (_typeof(value) === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }

        seen.add(value);
      }

      return value;
    });
  };
  /**
   * 转为时间格式
   */

  var toDate = function toDate() {
    var nowDay = new Date();
    return "".concat(nowDay.getFullYear(), "\u5E74").concat(nowDay.getMonth() + 1, "\u6708").concat(nowDay.getDate(), "\u65E5").concat(nowDay.getHours(), "\u65F6").concat(nowDay.getMinutes(), "\u5206").concat(nowDay.getSeconds(), "\u79D2");
  };

  /**
   * @description toast component
   */
  var toastType = {
    'info': 'envBox-toast-info',
    'error': 'envBox-toast-error',
    'warn': 'envBox-toast-warn'
  };
  /**
   * 创建toast
   * @param {string} content  
   * @param {number} wait 
   * @param {string} type 
   * @param {style} dialogStyle 
   */

  var addToastDOM = function addToastDOM(content, wait, type, dialogStyle) {
    //去除全局重复
    if ($('#envBox-toast')) {
      document.body.removeChild($('#envBox-toast'));
    }

    var toastDOM = document.createElement('div');
    toastDOM.id = 'envBox-toast';
    toastDOM.className = "slide-in-blurred-top ".concat(toastType[type]);

    if (dialogStyle === 'textDialog') {
      toastDOM.style.borderRadius = '5px';
      toastDOM.style.borderRadius = '5px';
    }

    toastDOM.innerHTML = content;
    document.body.appendChild(toastDOM);
    setTimeout(function () {
      toastDOM && document.body.removeChild(toastDOM);
    }, wait);
  };
  var createToastText = function createToastText(content) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    addToastDOM(content, wait, 'info', 'textDialog');
  };
  var createToast = function createToast(content) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    addToastDOM(content, wait, 'info');
  };
  var createErrorToast = function createErrorToast(content) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    addToastDOM(content, wait, 'error');
  };

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
    enableGesture(element); //声明后立即加载devTools，隐藏tools

    if (options) {
      h5Tools.startdevTools(options);
    } else {
      h5Tools.startdevTools();
    }

    var envBoxDOM = document.getElementById('envBox');
    envBoxDOM.style.display = 'none';
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
          createToast('success unlock');
          isRight_two = true;
          envBoxDOM.style.display = 'block';
          clearInterval(timer);
          timer = null;
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

  var closeIconSrc = "<svg class='env-close' role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" width=\"48px\" height=\"48px\" viewBox=\"0 0 24 24\" aria-labelledby=\"closeIconTitle\" stroke=\"#194769\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill=\"none\" color=\"#194769\"> <title id=\"closeIconTitle\">Close</title> <path d=\"M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575\"/> </svg>";

  var clipboardIcon = "<svg class='toolbar-clip' role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" width=\"48px\" height=\"48px\" viewBox=\"0 0 24 24\" aria-labelledby=\"clipboardIconTitle\" stroke=\"#194769\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill=\"none\" color=\"#194769\"> <title id=\"clipboardIconTitle\">Clipboard</title> <polyline points=\"15 3 19 3 19 21 5 21 5 3 5 3 9 3\"/> <path d=\"M14,4 L10,4 C9.44771525,4 9,3.55228475 9,3 C9,2.44771525 9.44771525,2 10,2 L14,2 C14.5522847,2 15,2.44771525 15,3 C15,3.55228475 14.5522847,4 14,4 Z\"/> </svg>";

  var binIcon = "<svg class='toolbar-bin' role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" width=\"48px\" height=\"48px\" viewBox=\"0 0 24 24\" aria-labelledby=\"binIconTitle\" stroke=\"#194769\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill=\"none\" color=\"#194769\"> <title id=\"binIconTitle\">Bin</title> <path d=\"M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10\"/> </svg>";

  /**
   * @description toolbar component
   */
  let curDialogWidth = 0;
  /**
   * 创建toolbar
   */

  const createToolbar = (dialogDOM, module) => {
    curDialogWidth = dialogDOM.offsetWidth;
    let toolbarDOM = document.createElement('div');
    toolbarDOM.className = 'toolbar-warp';
    toolbarDOM.innerHTML += clipboardIcon;
    toolbarDOM.innerHTML += binIcon;
    setTimeout(() => {
      dialogDOM.appendChild(toolbarDOM);
      watchBtn(dialogDOM, module);
    }, 0);
  };
  /**
   * 监听btn
   */

  const watchBtn = (dialogDOM, module) => {
    let clipDOM = $('.toolbar-clip');
    let clearDOM = $('.toolbar-bin'); //清理

    clearDOM.onclick = () => {
      dialogDOM.removeChild($(`.envBox-${module}`));
      dialogDOM.style.width = curDialogWidth + 'px';
      clearModule(module);
      createToast('清理成功');
    }; //一键复制


    clipDOM.onclick = () => {
      let dom = $(`.envBox-${module}`);

      if (!dom) {
        createToast('无数据可复制');
        return;
      }

      let clipText = getText(dom);

      if (navigator.clipboard) {
        navigator.clipboard.writeText(clipText);
        createToast('复制成功');
      }
    };
  };
  /**
   * 获取文本内容
   * @param {*} dom 
   */

  var getText = function (dom) {
    let allText = dom.innerHTML;
    allText = allText.replace(/<\/?.+?\/?>/g, ''); //去除标签

    allText = allText.replace(/\s+/g, ''); //去除空格

    if (allText == "") return;
    return allText;
  };

  /**
   * @description dialog components
   */
  let contentX, contentY;
  let isDragDialog = false;
  /**
   * 创建dialog
   *
   * @param {*} contentStr
   * @param {string} module
   */

  const createDialog = (contentStr, module) => {
    Storage.set('global_forbid', true);
    let dialogDOM = document.querySelector('#envBox-dialog');

    if (!dialogDOM) {
      dialogDOM = document.createElement('div');
      dialogDOM.id = 'envBox-dialog';
      dialogDOM.className = 'jello-horizontal';
      document.body.appendChild(dialogDOM);
    } //如果已存在就展示及更新数据


    dialogDOM.style.display = 'block';
    if (dialogDOM.innerHTML) dialogDOM.innerHTML = ''; //一次性更新

    dialogDOM.innerHTML = contentStr;
    dialogDOM.innerHTML += closeIconSrc;
    checkCreateToolbar(dialogDOM, module); //监听拖拽

    initDialogPosition(dialogDOM);
    watchDragDialog(); //监听点击关闭dialog

    let closeDOM = document.querySelector('.env-close');
    closeDOM.addEventListener('click', () => {
      clearDialog();
    }, false);
  };
  /**
   * 校验并生成toolbar
   */

  const checkCreateToolbar = (dialogDOM, module) => {
    if (module === 'error' || module === 'http' || module === 'log' || module === 'storage') {
      createToolbar(dialogDOM, module);
    }
  };
  /**
   * 清除dialog
   */

  const clearDialog = () => {
    let dialogDOM = document.querySelector('#envBox-dialog');
    dialogDOM.innerHTML = '';
    dialogDOM.style.display = 'none';
    Storage.set('global_forbid', false);
  };
  /**
   * 更新dialog(支持 error)
   *
   * @param {*} contentStr
   */

  const updateDialog = (contentStr, module) => {
    if (!$('.envBox-error')) return;
    let dialogDOM = document.querySelector('#envBox-dialog');
    if (!dialogDOM) return;
    if (dialogDOM.innerHTML) dialogDOM.innerHTML = '';
    dialogDOM.innerHTML += contentStr;
    dialogDOM.innerHTML += closeIconSrc;
    checkCreateToolbar(dialogDOM, module); //监听点击关闭dialog

    let closeDOM = document.querySelector('.env-close');
    closeDOM.addEventListener('click', () => {
      clearDialog();
    }, false);
  };
  /**
   * 监听dialog的drag
   */

  const watchDragDialog = () => {
    document.documentElement.addEventListener('panstart', e => {
      const dialogDOM = $('#envBox-dialog');
      contentX = e.clientX - dialogDOM.offsetLeft;
      contentY = e.clientY - dialogDOM.offsetTop;

      if (isContentTouch(dialogDOM, e.startX, e.startY)) {
        isDragDialog = true;
      }
    }, false);
    document.documentElement.addEventListener('pan', e => {
      const dialogDOM = $('#envBox-dialog');
      moveDialog(dialogDOM, e);
    }, false);
    document.documentElement.addEventListener('panend', e => {
      const dialogDOM = $('#envBox-dialog');
      moveDialog(dialogDOM, e);
      isDragDialog = false;
    }, false);
  };
  /**
   * 移动位置
   * @param {DOM} dom 
   * @param {Object} e 
   */

  const moveDialog = (dom, e) => {
    if (isDragDialog) {
      dom.style.left = e.clientX - contentX + 'px';
      dom.style.top = e.clientY - contentY + 'px';
    }
  };
  /**
   * 重置位置
   * @param {DOM} dom 
   */


  const initDialogPosition = dom => {
    dom.style.left = window.innerWidth / 2 - dom.offsetWidth / 2 + 'px';
    dom.style.top = window.innerHeight / 2 - dom.offsetHeight / 2 + 'px';
  };

  const isContentTouch = (dom, x, y) => {
    let l = dom.offsetLeft;
    let r = dom.offsetLeft + dom.offsetWidth;
    let t = dom.offsetTop;
    let b = dom.offsetTop + dom.offsetHeight;
    return l < x && x < r && t < y && y < b;
  };

  /*
   * author: wendux
   * email: 824783146@qq.com
   * source code: https://github.com/wendux/Ajax-hook
   */

  // Save original XMLHttpRequest as _rxhr
  var realXhr = "__xhr";

  var events = ['load', 'loadend', 'timeout', 'error', 'readystatechange', 'abort'];

  function configEvent(event, xhrProxy) {
    var e = {};
    for (var attr in event) e[attr] = event[attr];
    // xhrProxy instead
    e.target = e.currentTarget = xhrProxy;
    return e;
  }

  function hook(proxy, win) {
    win = win || window;
    // Avoid double hookAjax
    win[realXhr] = win[realXhr] || win.XMLHttpRequest;

    win.XMLHttpRequest = function () {

      // We shouldn't hookAjax XMLHttpRequest.prototype because we can't
      // guarantee that all attributes are on the prototype。
      // Instead, hooking XMLHttpRequest instance can avoid this problem.

      var xhr = new win[realXhr];


      // Generate all callbacks(eg. onload) are enumerable (not undefined).
      for (var i = 0; i < events.length; ++i) {
        var key='on'+events[i];
        if (xhr[key] === undefined) xhr[key] = null;
      }

      for (var attr in xhr) {
        var type = "";
        try {
          type = typeof xhr[attr]; // May cause exception on some browser
        } catch (e) {
        }
        if (type === "function") {
          // hookAjax methods of xhr, such as `open`、`send` ...
          this[attr] = hookFunction(attr);
        } else {
          Object.defineProperty(this, attr, {
            get: getterFactory(attr),
            set: setterFactory(attr),
            enumerable: true
          });
        }
      }
      var that = this;
      xhr.getProxy = function () {
        return that
      };
      this.xhr = xhr;
    };

    Object.assign(win.XMLHttpRequest, {UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4});

    // Generate getter for attributes of xhr
    function getterFactory(attr) {
      return function () {
        var v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
        var attrGetterHook = (proxy[attr] || {})["getter"];
        return attrGetterHook && attrGetterHook(v, this) || v
      }
    }

    // Generate setter for attributes of xhr; by this we have an opportunity
    // to hookAjax event callbacks （eg: `onload`） of xhr;
    function setterFactory(attr) {
      return function (v) {
        var xhr = this.xhr;
        var that = this;
        var hook = proxy[attr];
        // hookAjax  event callbacks such as `onload`、`onreadystatechange`...
        if (attr.substring(0, 2) === 'on') {
          that[attr + "_"] = v;
          xhr[attr] = function (e) {
            e = configEvent(e, that);
            var ret = proxy[attr] && proxy[attr].call(that, xhr, e);
            ret || v.call(that, e);
          };
        } else {
          //If the attribute isn't writable, generate proxy attribute
          var attrSetterHook = (hook || {})["setter"];
          v = attrSetterHook && attrSetterHook(v, that) || v;
          this[attr + "_"] = v;
          try {
            // Not all attributes of xhr are writable(setter may undefined).
            xhr[attr] = v;
          } catch (e) {
          }
        }
      }
    }

    // Hook methods of xhr.
    function hookFunction(fun) {
      return function () {
        var args = [].slice.call(arguments);
        if (proxy[fun]) {
          var ret = proxy[fun].call(this, args, this.xhr);
          // If the proxy return value exists, return it directly,
          // otherwise call the function of xhr.
          if (ret) return ret;
        }
        return this.xhr[fun].apply(this.xhr, args);
      }
    }

    // Return the real XMLHttpRequest
    return win[realXhr];
  }

  /*
   * author: wendux
   * email: 824783146@qq.com
   * source code: https://github.com/wendux/Ajax-hook
   */

  var eventLoad = events[0],
    eventLoadEnd = events[1],
    eventTimeout = events[2],
    eventError = events[3],
    eventReadyStateChange = events[4],
    eventAbort = events[5];


  var prototype = 'prototype';


  function proxy(proxy, win) {
    win = win || window;
    if (win['__xhr']) throw "Ajax is already hooked.";
    return proxyAjax(proxy, win);
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  function getEventTarget(xhr) {
    return xhr.watcher || (xhr.watcher = document.createElement('a'));
  }

  function triggerListener(xhr, name) {
    var xhrProxy = xhr.getProxy();
    var callback = 'on' + name + '_';
    var event = configEvent({type: name}, xhrProxy);
    xhrProxy[callback] && xhrProxy[callback](event);
    var evt;
    if (typeof(Event) === 'function') {
      evt = new Event(name, {bubbles: false});
    } else {
      // https://stackoverflow.com/questions/27176983/dispatchevent-not-working-in-ie11
      evt = document.createEvent('Event');
      evt.initEvent(name, false, true);
    }
    getEventTarget(xhr).dispatchEvent(evt);
  }


  function Handler(xhr) {
    this.xhr = xhr;
    this.xhrProxy = xhr.getProxy();
  }

  Handler[prototype] = Object.create({
    resolve: function resolve(response) {
      var xhrProxy = this.xhrProxy;
      var xhr = this.xhr;
      xhrProxy.readyState = 4;
      xhr.resHeader = response.headers;
      xhrProxy.response = xhrProxy.responseText = response.response;
      xhrProxy.statusText = response.statusText;
      xhrProxy.status = response.status;
      triggerListener(xhr, eventReadyStateChange);
      triggerListener(xhr, eventLoad);
      triggerListener(xhr, eventLoadEnd);
    },
    reject: function reject(error) {
      this.xhrProxy.status = 0;
      triggerListener(this.xhr, error.type);
      triggerListener(this.xhr, eventLoadEnd);
    }
  });

  function makeHandler(next) {
    function sub(xhr) {
      Handler.call(this, xhr);
    }

    sub[prototype] = Object.create(Handler[prototype]);
    sub[prototype].next = next;
    return sub;
  }

  var RequestHandler = makeHandler(function (rq) {
    var xhr = this.xhr;
    rq = rq || xhr.config;
    xhr.withCredentials = rq.withCredentials;
    xhr.open(rq.method, rq.url, rq.async !== false, rq.user, rq.password);
    for (var key in rq.headers) {
      xhr.setRequestHeader(key, rq.headers[key]);
    }
    xhr.send(rq.body);
  });

  var ResponseHandler = makeHandler(function (response) {
    this.resolve(response);
  });

  var ErrorHandler = makeHandler(function (error) {
    this.reject(error);
  });

  function proxyAjax(proxy, win) {
    var onRequest = proxy.onRequest,
      onResponse = proxy.onResponse,
      onError = proxy.onError;

    function handleResponse(xhr, xhrProxy) {
      var handler = new ResponseHandler(xhr);
      var ret = {
        response: xhrProxy.response || xhrProxy.responseText, //ie9
        status: xhrProxy.status,
        statusText: xhrProxy.statusText,
        config: xhr.config,
        headers: xhr.resHeader || xhr.getAllResponseHeaders().split('\r\n').reduce(function (ob, str) {
          if (str === "") return ob;
          var m = str.split(":");
          ob[m.shift()] = trim(m.join(':'));
          return ob;
        }, {})
      };
      if (!onResponse) return handler.resolve(ret);
      onResponse(ret, handler);
    }

    function onerror(xhr, xhrProxy, error, errorType) {
      var handler = new ErrorHandler(xhr);
      error = {config: xhr.config, error: error, type: errorType};
      if (onError) {
        onError(error, handler);
      } else {
        handler.next(error);
      }
    }

    function preventXhrProxyCallback() {
      return true;
    }

    function errorCallback(errorType) {
      return function (xhr, e) {
        onerror(xhr, this, e, errorType);
        return true;
      }
    }

    function stateChangeCallback(xhr, xhrProxy) {
      if (xhr.readyState === 4 && xhr.status !== 0) {
        handleResponse(xhr, xhrProxy);
      } else if (xhr.readyState !== 4) {
        triggerListener(xhr, eventReadyStateChange);
      }
      return true;
    }

    return hook({
      onload: preventXhrProxyCallback,
      onloadend: preventXhrProxyCallback,
      onerror: errorCallback(eventError),
      ontimeout: errorCallback(eventTimeout),
      onabort: errorCallback(eventAbort),
      onreadystatechange: function (xhr) {
        return stateChangeCallback(xhr, this);
      },
      open: function open(args, xhr) {
        var _this = this;
        var config = xhr.config = {headers: {}};
        config.method = args[0];
        config.url = args[1];
        config.async = args[2];
        config.user = args[3];
        config.password = args[4];
        config.xhr = xhr;
        var evName = 'on' + eventReadyStateChange;
        if (!xhr[evName]) {
          xhr[evName] = function () {
            return stateChangeCallback(xhr, _this);
          };
        }

        // 如果有请求拦截器，则在调用onRequest后再打开链接。因为onRequest最佳调用时机是在send前，
        // 所以我们在send拦截函数中再手动调用open，因此返回true阻止xhr.open调用。
        //
        // 如果没有请求拦截器，则不用阻断xhr.open调用
        if (onRequest) return true;
      },
      send: function (args, xhr) {
        var config = xhr.config;
        config.withCredentials = xhr.withCredentials;
        config.body = args[0];
        if (onRequest) {
          // In 'onRequest', we may call XHR's event handler, such as `xhr.onload`.
          // However, XHR's event handler may not be set until xhr.send is called in
          // the user's code, so we use `setTimeout` to avoid this situation
          var req = function () {
            onRequest(config, new RequestHandler(xhr));
          };
          config.async === false ? req() : setTimeout(req);
          return true;
        }
      },
      setRequestHeader: function (args, xhr) {
        // Collect request headers
        xhr.config.headers[args[0].toLowerCase()] = args[1];
        if (onRequest) return true;
      },
      addEventListener: function (args, xhr) {
        var _this = this;
        if (events.indexOf(args[0]) !== -1) {
          var handler = args[1];
          getEventTarget(xhr).addEventListener(args[0], function (e) {
            var event = configEvent(e, _this);
            event.type = args[0];
            event.isTrusted = true;
            handler.call(_this, event);
          });
          return true;
        }
      },
      getAllResponseHeaders: function (_, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          var header = "";
          for (var key in headers) {
            header += key + ': ' + headers[key] + '\r\n';
          }
          return header;
        }
      },
      getResponseHeader: function (args, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          return headers[(args[0] || '').toLowerCase()];
        }
      }
    }, win);
  }

  /**
   * @description  用于在非打包后线上环境的环境切换，以及性能、异常、行为监控及上报
   */
  const insertDOM = document.querySelector('#app');
  let expandUI = false; //是否已经展示按钮
  // 配置项

  const newOptions = {
    insertDOM: insertDOM,
    //插入的envTools的容器
    wait: 1000,
    //等待时间
    needSleep: false,
    //是否要延迟加载 
    envBoxIdName: 'envBox',
    //未展开DOM
    envBoxExpandIdName: 'envBox-expand',
    //延展后的DOM
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
    watchConsole: true,
    //是否监听console.log日志
    watchHttp: true,
    //是否监听ajax请求
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
      baseURL: 'http://localhost:8000' //请求的根路径

    },
    version: '1.0.0',
    //版本信息
    maxLimit: 5,
    //最大缓存限制
    asyncTime: 5000,
    //默认延迟时间
    endTime: 10000 //监听手势结束时间

  }; //异常数据采集

  const errorData = {
    errorCount: 0,
    errorSum: '',
    errorList: []
  }; //性能标准

  const performaceData = {
    FP: [30, 100],
    DCL: [500, 1200],
    L: [600, 2000]
  }; //路由数据采集

  const routesData = {
    //用于当前页面展示
    routeInfo: {
      newURL: '',
      //当前页面url
      oldURL: '',
      // 上级页面
      title: '',
      //页面标题
      routeType: '',
      //路由类型
      refreshNums: Storage.get('global_refreshNums') || 0,
      //存在刷新次数
      changeTime: '' //路由改变时间

    },
    routesList: [] // 采集pv数据的列表

  }; //缓存数据采集

  const storageData = {
    newStorageList: [],
    maxLen: 5
  }; //系统数据采集

  const systemData = {}; //console采集

  const consoleData = {
    consoleList: [],
    info: [],
    error: [],
    log: [],
    warn: []
  }; //http请求采集

  const httpData = {
    httpList: [],
    urlList: []
  }; //手势数据
  /**
   * 初始化
   */

  const init = () => {
    Storage.set('global_forbid', false);
  };
  /**
   * envTools开始入口
   * @param {Object} options 配置项
   */


  const startdevTools = function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : newOptions;
    init();
    Object.assign(newOptions, options); //覆盖配置

    checkOptions(newOptions); //校验options
    //前置监听

    newOptions.watchError && preWatchError();
    newOptions.watchActions && preWatchActions();
    newOptions.watchRoutes && preWatchRoutes();
    newOptions.watchStorage && preWatchStorage();
    newOptions.watchSystem && preWatchSystem();
    newOptions.watchConsole && preWatchConsole();
    newOptions.watchHttp && preWatchHttp();
    let {
      needSleep,
      wait
    } = newOptions; //延迟加载

    if (needSleep) {
      setTimeout(() => {
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


  const createEnvDevTools = options => {
    let {
      envBoxIdName,
      envBoxExpandIdName,
      insertDOM,
      watchHttp,
      watchSystem,
      watchEnv,
      watchPerformance,
      watchError,
      watchRoutes,
      watchStorage,
      watchConsole
    } = options;
    const envBox = document.createElement('div');
    envBox.id = envBoxIdName;
    insertDOM.appendChild(envBox);
    handleDrag(envBox); //处理手势

    envBox.addEventListener('click', e => {
      if (Storage.get('global_forbid') === true) return;
      expandUI = true;
      envBox.id = envBoxExpandIdName;
      envBox.className = 'slide-in-right'; // 在打开tabbar栏后监听

      watchEnv && loadEnvModule(envBox);
      watchPerformance && loadPerformanceModule(envBox);
      watchError && loadErrorModule(envBox);
      watchRoutes && loadRoutesModule(envBox);
      watchStorage && loadStorageModule(envBox);
      watchSystem && loadSystemModule(envBox);
      watchConsole && loadConsoleModule(envBox);
      watchHttp && loadHttpModule(envBox);
      loadVersionModule(envBox);
      loadClearModule(envBox); //处理通用样式

      const envBoxBtnList = document.querySelectorAll('#envBox-expand button');
      envBoxBtnList.forEach(btn => {
        btn.ontouchstart = () => {
          btn.style.background = '#26699c';
        };

        btn.ontouchend = () => {
          btn.style.background = '#194769';
        };
      });
    }, false);
    document.addEventListener('click', e => {
      if (e.target.id === envBox.id) return;

      if (expandUI) {
        envBox.id = envBoxIdName;
        envBox.innerHTML = '';
        expandUI = false;
        envBox.className = '';
      }
    }, false);
  };
  /**
   * 处理拖拽
   */


  const handleDrag = envBox => {
    enableGesture(); //监听手势

    let ew = envBox.offsetWidth;
    let eh = envBox.offsetHeight;
    let el = envBox.offsetLeft;
    let et = envBox.offsetTop;
    let isTouchDrag = false;
    document.documentElement.addEventListener('panstart', e => {
      if (el - 10 < e.clientX && e.clientX < el + ew + 10 && et - 10 < e.clientY && e.clientY < et + eh + 10) {
        isTouchDrag = true;
      } else {
        isTouchDrag = false;
      }
    });
    document.documentElement.addEventListener('panend', e => {
      if (isTouchDrag) {
        envBox.style.top = e.clientY + 'px';
        et = e.clientY;
      }
    });
  };
  /**
   * 校验
   * @param {*} options 
   */


  const checkOptions = options => {
    //自定义数据不能为空
    for (const key in options) {
      const val = options[key];

      if (val == null) {
        createErrorToast("options exist null or undefined----" + key);
      }
    }
  };
  /**
   * 前置监听处理error
   */


  const preWatchError = () => {
    window.addEventListener('error', e => {
      handleError("global error" + e.message);
      updateDialog(`<div class='envBox-error'>${errorData.errorSum}</div>`, 'error');
    }, false);
    window.addEventListener('unhandledrejection', e => {
      handleError("promise error" + e.reason);
      updateDialog(`<div class='envBox-error'>${errorData.errorSum}</div>`, 'error');
    }, false);
  };
  /**
   * 前置监听处理actions
   */


  const preWatchActions = () => {
    let {
      watchActionDOMList
    } = newOptions;
    watchActionDOMList.forEach(item => {
      let domList = item.domId && document.querySelectorAll(item.domId);

      if (domList) {
        domList.forEach(dom => {
          dom.addEventListener(item.eventType, () => {
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


  const preWatchRoutes = () => {
    const info = routesData.routeInfo;
    info.newURL = window.location.href;
    info.oldURL = window.location.href;
    info.title = document.title;
    info.routeType = window.location.href.includes('/#/') ? 'hash' : 'history';
    info.changeTime = toDate();

    window.onload = () => {
      info.refreshNums += 1;
      Storage.set('global_refreshNums', info.refreshNums);
    };

    window.addEventListener('popstate', function (event) {
      info.changeTime = toDate();

      if (info.routeType === 'history') {
        createToast('back：' + window.location.href);
      }
    });
    window.addEventListener('hashchange', function (event) {
      info.newURL = event.newURL;
      info.oldURL = event.oldURL;
      info.routeType = 'hash';
      info.changeTime = toDate();
      info.routesList.push(event.newURL);
      createToast('back：' + event.newURL);
    });
    window.addHistoryListener('history', function () {
      info.newURL = window.location.href;
      info.routeType = 'history';
      info.changeTime = toDate();
      createToast('enter：' + window.location.href);
    });
  };
  /**
   * 前置监听Storage事件
   */


  const preWatchStorage = () => {
    let originSetItem = localStorage.setItem; //自定义分发事件

    localStorage.setItem = function (key, val) {
      val = handleCircularJson(val);
      let event = new Event("setItem", {
        key: val
      });
      event.key = key;
      event.val = val;
      let index = storageData.newStorageList.findIndex(item => item[0] === key);

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
   * 前置监听系统数据
   */


  const preWatchSystem = async () => {
    //通过第三方sdk获取
    try {
      if (returnCitySN) {
        systemData['IP'] = returnCitySN['cip'];
        systemData['地区代码'] = returnCitySN['cid'];
        systemData['城市'] = returnCitySN['cname'];
      }
    } catch (e) {
      createErrorToast('SDK请求失败');
    } //原生设备数据


    if (!window.plus) {
      systemData.userAgent = navigator.userAgent;
      systemData.appName = navigator.appName;
      systemData.appCodeName = navigator.appCodeName;
      systemData.appVersion = navigator.appVersion;
      systemData.appMinorVersion = navigator.appMinorVersion;
      systemData.platform = navigator.platform;
      systemData.language = navigator.language;
      systemData.width = window.screen.width;
      systemData.height = window.screen.height;
      systemData.pixelDepth = window.screen.pixelDepth;
    } //webview


    function plusReady() {
      plus.geolocation.getCurrentPosition(function (p) {
        systemData.latitude = p.coords.latitude;
        systemData.longitude = p.coords.longitude;
        systemData.altitude = p.coords.altitude;
        systemData.accuracy = p.coords.accuracy;
        systemData.country = p.address.country;
        systemData.city = p.address.city;
        systemData.district = p.address.district;
        systemData.street = p.address.street;
        systemData.streetNum = p.address.streetNum;
        systemData.poiName = p.address.poiName;
        systemData.postalCode = p.address.postalCode;
        systemData.cityCode = p.address.cityCode;
        systemData.addresses = p.addresses;
      }, function (e) {
        alert('Geolocation error: ' + e.message);
      }); //获取H5的app 设备信息

      plus.device.getInfo({
        success(deviceInfo) {
          systemData = {
            IMEI: deviceInfo.imei,
            IMSI: deviceInfo.imsi,
            uuid: deviceInfo.uuid,
            Model: plus.device.model,
            vendor: plus.device.vendor,
            dpiX: plus.screen.dpiX,
            dpiY: plus.screen.dpiY,
            height: plus.screen.height,
            width: plus.screen.width,
            resolutionHeight: plus.screen.resolutionHeight,
            resolutionWidth: plus.screen.resolutionWidth,
            scale: plus.screen.scale,
            CONNECTION_NONE: plus.networkinfo.CONNECTION_NONE,
            CONNECTION_ETHERNET: plus.networkinfo.CONNECTION_ETHERNET,
            CONNECTION_WIFI: plus.networkinfo.CONNECTION_WIFI,
            language: plus.os.language,
            name: plus.os.name,
            vendor: plus.os.vendor,
            version: plus.os.version,
            language: plus.os.language
          };
        }

      });
    }

    if (window.plus) {
      plusReady();
    } else {
      document.addEventListener("plusready", plusReady, false);
    }
  };
  /**
   * 前置监听console日志
   */


  const preWatchConsole = () => {
    function watchLog(type) {
      let oldLog = console[type];

      console[type] = function () {
        consoleData.consoleList.push({
          data: arguments[0],
          type
        });
        oldLog.call(console, ...arguments);
      };
    }

    let logList = ['info', 'error', 'log', 'warn'];
    logList.forEach(type => {
      watchLog(type);
    });
  };
  /**
   * 前置监听http请求
   */


  const preWatchHttp = () => {
    proxy({
      //请求发起前进入
      onRequest: (config, handler) => {
        console.log("preWatchHttp----start", config);
        let sendObj = {
          method: config.method,
          headers: config['content-type'],
          url: config.url,
          body: config.body || ''
        };
        httpData.httpList.push(sendObj);
        httpData.urlList.push({
          url: config.url,
          type: 'send'
        });
        handler.next(config);
      },
      //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
      onError: (err, handler) => {
        console.log("preWatch----error", err);
        let errObj = {
          method: err.config.method,
          headers: err.config['content-type'],
          url: err.config.url
        };
        httpData.httpList.push(errObj);
        httpData.urlList.push({
          url: err.config.url,
          type: 'err'
        });
        handler.next(err);
      },
      //请求成功后进入
      onResponse: (res, handler) => {
        console.log("preWatch----success", res);
        let sucObj = {
          method: res.config.method,
          headers: res.headers['content-type'],
          url: res.config.url,
          status: res.status,
          response: res.response
        };
        httpData.httpList.push(sucObj);
        httpData.urlList.push({
          url: res.config.url,
          type: 'suc'
        });
        handler.next(res);
      }
    });
  };
  /**
   *处理错误
   */


  const handleError = msg => {
    let {
      errorList
    } = errorData;
    let {
      maxLimit,
      asyncTime
    } = newOptions;
    if (!msg) return;
    errorList.push(msg);
    errorData.errorCount += 1;

    if (checkType(errorList) === 'array') {
      errorData.errorSum += `${errorData.errorCount}: ` + msg + '<br>';
      let errorObj = {
        errorSum: errorData.errorSum
      }; //如果超过阈值上报错误数据

      if (errorData.errorCount >= newOptions.maxLimit) {
        sendMsg(errorObj, 'err');
        errorData.errorList = [];
      } else {
        //默认延迟5s, 如果没有达到上限就发送
        if (!errorData.errorList.length) return;
        setTimeout(() => {
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


  const loadEnvModule = envBox => {
    let {
      envList
    } = newOptions;
    let envBtnDOM = document.createElement('button');
    envBtnDOM.innerText = Storage.get('global_env') || 'env';
    envBtnDOM.className = 'envBtn';
    envBox.appendChild(envBtnDOM);
    envBtnDOM.addEventListener('click', () => {
      let contentStr = `<div class='dialog-detail'>当前环境: ${Storage.get('global_env') || 'env'}</div>`;
      envList.forEach(item => {
        contentStr += `<button class='env-btn'>${item}</button>`;
      }); //创建弹窗

      createDialog(contentStr, 'env');
      const buttonList = document.querySelectorAll('.env-btn');
      buttonList.forEach(btn => {
        btn.addEventListener('click', e => {
          expandUI = false;
          let env = e.target.textContent;
          Storage.set('global_env', env);
          btn.innerText = env;
          envBtnDOM.innerText = Storage.get('global_env') || 'env';
          Storage.set('global_url', `https://${env}.zzss.com`);
          createToast('已成功修改' + env + '环境');
        }, false);
      });
    }, false);
  };
  /**
   * 加载性能监控模块
   * @param {DOM} envBox  devTools DOM
   */


  const loadPerformanceModule = envBox => {
    let button = document.createElement('button');
    envBox.appendChild(button);
    button.innerText = 'performance';
    let FP,
        DCL,
        L = 0;
    let {
      domLoading,
      navigationStart,
      domContentLoadedEventEnd,
      loadEventEnd
    } = window.performance.timing;
    FP = domLoading - navigationStart;
    DCL = domContentLoadedEventEnd - navigationStart;
    L = loadEventEnd - navigationStart;

    function getPerformaceStyle(type, data) {
      let standard = performaceData[type];
      return data < standard[0] ? 'xn-quick xn' : data > standard[1] ? 'xn-low xn' : 'xn-mid xn';
    }

    let content = `<div>首屏渲染：<span class=${getPerformaceStyle('FP', FP)}>${FP}ms</span></div><br><div>DOM加载完毕： <span class=${getPerformaceStyle('DCL', DCL)}>${DCL}ms</span></div><br><div>图片、样式等外链资源加载完成：<span class=${getPerformaceStyle('L', L)}>${L}ms</span></div>`;

    button.onclick = () => {
      createDialog(content, 'performance');
    };
  };
  /**
   * 异常捕获模块
   * @param {DOM} envBox
   */


  const loadErrorModule = envBox => {
    const {
      errorSum
    } = errorData;
    let errorBtn = document.createElement('button');
    envBox.appendChild(errorBtn);
    errorBtn.innerText = 'error';

    errorBtn.onclick = () => {
      if (!errorSum) {
        createToast('no error');
        return;
      }

      createDialog(`<div class='envBox-error'>${errorSum}</div>`, 'error');
    };
  };
  /**
   * routes模块
   * @param {DOM} envBox
   */


  const loadRoutesModule = envBox => {
    const {
      routeInfo
    } = routesData;
    let routesBtn = document.createElement('button');
    envBox.appendChild(routesBtn);
    routesBtn.innerText = 'route';

    routesBtn.onclick = () => {
      let routerInfoStr = '';

      for (const [key, val] of Object.entries(routeInfo)) {
        let str = `<div class='envBox-textline router'>${key + '：' + val}</div>`;
        routerInfoStr += str;
      }

      routerInfoStr += `<div class='envBox-inlineText envBox-textline router-log router'>routesList: ${routesData.routesList}</div>`;
      createDialog(routerInfoStr, 'route');

      $('.router-log').onclick = () => {
        createToastText(JSON.stringify(routesData.routesList));
      };
    };
  };
  /**
   * Storage模块
   * @param {DOM} envBox
   */


  const loadStorageModule = envBox => {
    const {
      isNewStorage
    } = newOptions;
    const {
      maxLen,
      newStorageList
    } = storageData;
    let storageBtn = document.createElement('button');
    envBox.appendChild(storageBtn);
    storageBtn.innerText = 'storage';

    storageBtn.onclick = () => {
      let storageInfoStr = '';
      let storageList = []; //展示前几

      let len = storageData.newStorageList?.length;

      if (isNewStorage && maxLen < len) {
        storageData.newStorageList.splice(maxLen, len);
      }

      if (!storageData.newStorageList.length) {
        createToast('no storage');
        return;
      }

      storageData.newStorageList.forEach((storage, index) => {
        let k = storage[0];
        let v = JSON.parse(handleCircularJson(storage[1]));
        let type = checkType(v);
        let str = `<div class='envBox-inlineText storage-box'><span class='storage-key'>key： </span><span >${k}</span> <span class='storage-key'>val：</span><span >${v}</span> <span class='storage-key'>type：</span><span >${type}</span> <br></div>`;
        storageInfoStr += str;
        let strAll = str.replace('envBox-inlineText', '');
        storageList.push(strAll);
      });
      createDialog(`<div class='envBox-storage'>${storageInfoStr}</div>`, 'storage');
      storageInfoStr = ''; //开始监听url点击，展示详情

      let storageDOM = document.querySelectorAll('.storage-box');
      storageDOM.forEach((dom, index) => {
        dom.addEventListener('click', () => {
          createToastText(storageList[index], 5000);
        }, false);
      });
    };
  };
  /**
   * System模块
   * @param {DOM} envBox
   */


  const loadSystemModule = envBox => {
    let systemBtn = document.createElement('button');
    envBox.appendChild(systemBtn);
    systemBtn.innerText = 'system';

    systemBtn.onclick = () => {
      if (!window.plus) {
        createToast('在真机webview中可以获取更多设备数据');
      }

      if (JSON.stringify(systemData) !== '{}') {
        let contents = '';

        for (const [k, v] of Object.entries(systemData)) {
          contents += `<div>${k}: ${v}</div>`;
        }

        createDialog(contents, 'system');
      } else {
        createErrorToast('设备数据获取异常');
      }
    };
  };
  /**
   * Console模块
   * @param {DOM} envBox
   */


  const loadConsoleModule = envBox => {
    let consoleBtn = document.createElement('button');
    envBox.appendChild(consoleBtn);
    consoleBtn.innerText = 'log';

    consoleBtn.onclick = () => {
      let sumContent = '';

      if (!consoleData.consoleList.length) {
        createToast('no log');
        return;
      }

      consoleData.consoleList.forEach(content => {
        let {
          data,
          type
        } = content;

        if (typeof data === 'object') {
          let newObj = handleCircularJson(data);
          sumContent += `<div class='console console-${type}'>${newObj}</div>`;
        } else {
          sumContent += `<div class='console console-${type}'>${data}</div>`;
        }
      });
      createDialog(`<div class='envBox-log'>${sumContent}</div>`, 'log'); //开始监听log点击，展示详情

      let logDOM = document.querySelectorAll('.console');
      logDOM.forEach((dom, index) => {
        dom.addEventListener('click', () => {
          const data = consoleData.consoleList[index].data;
          let allContent = typeof data === 'object' ? handleCircularJson(data) : data;
          createToastText(allContent, 5000);
        }, false);
      });
    };
  };
  /**
   * Http模块
   * @param {DOM} envBox
   */


  const loadHttpModule = envBox => {
    let httpBtn = document.createElement('button');
    envBox.appendChild(httpBtn);
    httpBtn.innerText = 'http';

    httpBtn.onclick = () => {
      let urlContents = '';

      if (!httpData.urlList.length) {
        createToast('no http data');
        return;
      }

      httpData.urlList.forEach((content, index) => {
        urlContents += `<div class='http http-${content.type}'>${content.url}</div>`;
      });
      createDialog(`<div class='envBox-http'>${urlContents}</div>`, 'http'); //开始监听url点击，展示详情

      let urlDOM = document.querySelectorAll('.http');
      urlDOM.forEach((dom, index) => {
        dom.addEventListener('click', () => {
          let allContent = '';

          for (const [k, v] of Object.entries(httpData.httpList[index])) {
            allContent += `<div>${k}: ${v}</div> `;
          }

          createToastText(allContent, 5000);
        }, false);
      });
    };
  };
  /**
   * 版本模块
   * @param {DOM} envBox
   */


  const loadVersionModule = envBox => {
    let versionBtn = document.createElement('button');
    envBox.appendChild(versionBtn);
    versionBtn.innerText = 'version';

    versionBtn.onclick = () => {
      createToast(`当前版本${newOptions.version}`);
    };
  };
  /**
   * 清除缓存模块
   * @param {DOM} envBox
   */


  const loadClearModule = envBox => {
    let clearBtn = document.createElement('button');
    envBox.appendChild(clearBtn);
    clearBtn.innerText = 'clear';

    clearBtn.onclick = () => {
      clearModule('error');
      clearModule('storage');
      clearModule('log');
      clearModule('http');
      routesData.routesList = [];
      routesData.routeInfo.refreshNums = 0;
      createToast('cache cleared successfully');
    };
  };

  const clearModule = type => {
    switch (type) {
      case 'error':
        errorData.errorList = [];
        errorData.errorSum = '';
        break;

      case 'http':
        httpData.urlList = [];
        break;

      case 'storage':
        storageData.newStorageList = [];
        break;

      case 'log':
        consoleData.consoleList = [];
        break;
    }
  };
  /**
   * 数据上报
   * @param {Object} obj 上报的对象
   * @param {'err' | 'pv'} type 上传类型
   * @param {'beacon' | 'gif'} myMethods 自定义方法 
   */

  const sendMsg = (obj, type, myMethods) => {
    //校验
    if (checkType(obj) !== 'object' && !type) {
      createErrorToast('do not input object or type');
    }

    const {
      sendOptions: {
        baseURL,
        commonInfo,
        method
      }
    } = newOptions;
    let submitObj = Object.assign({}, obj, commonInfo);
    let queryStr = Object.entries(submitObj).map(_ref => {
      let [key, val] = _ref;
      return `${key}=${val}`;
    }).join('&'); //gif图片发送方式

    if (myMethods === 'gif' || method === 'gif') {
      let img = new Image();
      img.src = `${baseURL}?` + encodeURIComponent(queryStr);
    }

    if (myMethods === 'beacon' || method === 'beacon') {
      navigator.sendBeacon(baseURL, submitObj);
    }
  };

  var h5Tools = {
    startdevTools,
    sendMsg
  };

  /**
   * 改写路由
   */
  var startNewRoute = function startNewRoute() {
    var Dep = /*#__PURE__*/function () {
      //订阅池
      function Dep(name) {
        _classCallCheck(this, Dep);

        this.id = new Date(); // 使用时间戳做订阅池的ID

        this.subs = []; // 该事件下对象的集合
      }

      _createClass(Dep, [{
        key: "defined",
        value: function defined() {
          // 添加订阅者
          Dep.watch.add(this);
        }
      }, {
        key: "notify",
        value: function notify() {
          // 通知订阅者有变化
          this.subs.forEach(function (e, i) {
            if (typeof e.update === 'function') {
              try {
                e.update.apply(e); // 触发订阅者更新函数
              } catch (err) {
                console.warr(err);
              }
            }
          });
        }
      }]);

      return Dep;
    }();

    Dep.watch = null;

    var Watch = /*#__PURE__*/function () {
      function Watch(name, fn) {
        _classCallCheck(this, Watch);

        this.name = name; // 订阅消息的名称

        this.id = new Date(); // 使用时间戳做订阅者的ID

        this.callBack = fn; // 订阅消息发送改变时 -> 订阅者执行的回调函数
      }

      _createClass(Watch, [{
        key: "add",
        value: function add(dep) {
          // 将订阅者放入dep订阅池
          dep.subs.push(this);
        }
      }, {
        key: "update",
        value: function update() {
          // 将订阅者更新方法
          var cb = this.callBack; // 赋值为了不改变函数内调用的this

          cb(this.name);
        }
      }]);

      return Watch;
    }();

    var addHistoryMethod = function () {
      var historyDep = new Dep();
      return function (name) {
        if (name === 'historychange') {
          return function (name, fn) {
            var event = new Watch(name, fn);
            Dep.watch = event;
            historyDep.defined();
            Dep.watch = null; //    置空供下一个订阅者使用
          };
        } else if (name === 'pushState' || name === 'replaceState') {
          console.log(history);
          var method = history[name];
          return function () {
            method.apply(history, arguments);
            historyDep.notify();
          };
        }
      };
    }();

    window.addHistoryListener = addHistoryMethod('historychange');
    history.pushState = addHistoryMethod('pushState');
    history.replaceState = addHistoryMethod('replaceState');
  };

  startNewRoute();
  var isMobile = isMobileFn();

  if (!window) {
    createErrorToast('it is must be brower environment');
  }

  if (!isMobile) {
    createErrorToast('it is must be mobile H5 environment');
  }

  Object.prototype.h5tools = {
    gesture: startGesture,
    start: h5Tools.startdevTools,
    send: h5Tools.sendMsg
  };

}));
