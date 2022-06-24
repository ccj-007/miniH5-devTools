
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

  var css_248z$3 = ".jello-horizontal {\n  -webkit-animation: jello-horizontal .9s both;\n  animation: jello-horizontal .9s both\n}\n\n@-webkit-keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, .75, 1);\n    transform: scale3d(1.25, .75, 1)\n  }\n\n  40% {\n    -webkit-transform: scale3d(.75, 1.25, 1);\n    transform: scale3d(.75, 1.25, 1)\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, .85, 1);\n    transform: scale3d(1.15, .85, 1)\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1)\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1)\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n}\n\n@keyframes jello-horizontal {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, .75, 1);\n    transform: scale3d(1.25, .75, 1)\n  }\n\n  40% {\n    -webkit-transform: scale3d(.75, 1.25, 1);\n    transform: scale3d(.75, 1.25, 1)\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, .85, 1);\n    transform: scale3d(1.15, .85, 1)\n  }\n\n  65% {\n    -webkit-transform: scale3d(.95, 1.05, 1);\n    transform: scale3d(.95, 1.05, 1)\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, .95, 1);\n    transform: scale3d(1.05, .95, 1)\n  }\n\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n  }\n}\n\n.slide-in-blurred-top {\n  animation: slide-in-blurred-top .6s cubic-bezier(.23, 1.000, .32, 1.000) both\n}\n\n@keyframes slide-in-blurred-top {\n  0% {\n    transform: translateY(-1000px) scaleY(2.5) scaleX(.2);\n    transform-origin: 50% 0;\n    filter: blur(40px);\n    opacity: 0\n  }\n\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1\n  }\n}";
  styleInject(css_248z$3);

  var css_248z$2 = ":root {\n  --primary-deep: #0987ee; \n  --primary-light: #40a9ff; \n}\n\n#envBox {\n  position: fixed;\n  z-index: 999999999999;\n  top: 50%;\n  right: 0;\n  width: 10px;\n  height: 60px;\n  background: var(--primary-light);\n  transition: top .5s linear;\n  border-radius: 5px 0 0 5px;\n}\n\n#envBox-expand {\n  position: fixed;\n  z-index: 9999999999999;\n  height: 60px;\n  width: 100vw;\n  top: 50%;\n  right: 0;\n  background: var(--primary-light);\n  transition: width .5s linear;\n}\n\n#envBox-expand button {\n  width: 20%;\n  height: 30px;\n  z-index: 1;\n  color: white;\n  background: var(--primary-deep);\n  outline: none;\n  border: none;\n  padding: 0.5em auto;\n  box-sizing: border-box;\n}\n\n#envBox-expand span {\n  color: #ffffff;\n  font-size: 14px;\n}\n\n";
  styleInject(css_248z$2);

  var css_248z$1 = "/* dialog componetnts */\n:root {\n  --main-deep: #0987ee; \n  --main-light: #40a9ff; \n\n  --common-info: #0987ee; \n  --common-warn: #ffa20d; \n  --common-error: #ff2a2a; \n  --common-success: #00d41c; \n}\n\n#envBox-dialog {\n  position: fixed;\n  font-size: 14px;\n  top: 40%;\n  z-index: 99;\n  background: var(--main-light);\n  padding: 20px;\n  border-radius: 5px;\n  color: #fff;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1)\n}\n\n#envBox-dialog button {\n  z-index: 1;\n  color: white;\n  background: var(--main-deep);\n  outline: none;\n  border: none;\n  padding: 5px 10px;\n  box-sizing: border-box;\n}\n\n.dialog-detail {\n  width: 100%;\n  line-height: 32px;\n  font-size: 14px;\n}\n\n.env-close {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  border-radius: 0 0 0 50%;\n}\n\n\n/* toast componetnts */\n#envBox-toast {\n  position: fixed;\n  top: 2%;\n  z-index: 99;\n  padding: 15px;\n  border-radius: 30px;\n  font-size: 14px;\n  color: #fff;\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1)\n}\n\n.envBox-toast-info {\n  background: var(--common-info);\n}\n\n.envBox-toast-error {\n  background: var(--common-error);\n}\n\n.envBox-toast-warn {\n  background: var(--common-warn);\n}\n\n\n.console-log {\n  color: #000;\n  background: #fff;\n}\n\n.console-warn {\n  color: rgb(255, 255, 255);\n  background: var(--common-warn);\n}\n\n.console-error {\n  color: rgb(255, 255, 255);\n  background: var(--common-error);\n}\n\n.console-info {\n  color: rgb(255, 255, 255);\n  background: var(--main-deep);\n}\n\n.http {\n  border-radius: 5px;\n  cursor: pointer;\n  line-height: 30px;\n}\n\n.http-start {\n  color: #fff;\n  background: var(--common-info);\n}\n\n.http-suc {\n  color: #fff;\n  background: var(--common-success);\n}\n\n.http-err {\n  color: #fff;\n  background: var(--common-error);\n}\n\n";
  styleInject(css_248z$1);

  var css_248z = "html,\nbody {\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n}";
  styleInject(css_248z);

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
   * @param {*} content  
   * @param {*} wait 
   * @param {*} type 
   */

  var addToastDOM = function addToastDOM(content, wait, type) {
    var toastDOM = document.createElement('div');
    toastDOM.id = 'envBox-toast';
    toastDOM.className = "slide-in-blurred-top ".concat(toastType[type]);
    toastDOM.innerText = content;
    document.body.appendChild(toastDOM);
    setTimeout(function () {
      document.body.removeChild(toastDOM);
    }, wait);
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
    } //如果已存在就展示及更新数据


    dialogDOM.style.display = 'block';
    if (dialogDOM.innerHTML) dialogDOM.innerHTML = ''; //一次性更新

    dialogDOM.innerHTML = contentStr;
    dialogDOM.innerHTML += closeIconSrc; //close icon
    //监听点击关闭dialog

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
    if (!dialogDOM) return;
    if (dialogDOM.innerHTML) dialogDOM.innerHTML = '';
    dialogDOM.innerHTML += contentStr;
    dialogDOM.innerHTML += closeIconSrc; //close icon
    //监听点击关闭dialog

    let closeDOM = document.querySelector('.env-close');
    closeDOM.addEventListener('click', () => {
      clearDialog();
    }, false);
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

  var expandUI = false; //是否已经展示按钮

  var insertDOM = document.querySelector('#app'); // 配置项

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
      baseURL: 'http://localhost:8000'
    },
    version: '1.0.0',
    //版本信息
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

  }; //缓存数据采集

  var storageData = {
    newStorageList: [],
    maxLen: 5
  }; //系统数据采集

  var systemData = {}; //console采集

  var consoleData = {
    consoleList: [],
    info: [],
    error: [],
    log: [],
    warn: []
  }; //http请求采集

  var httpData = {
    httpList: [],
    urlList: []
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
    newOptions.watchConsole && preWatchConsole();
    newOptions.watchHttp && preWatchHttp();
    var needSleep = newOptions.needSleep,
        wait = newOptions.wait; //延迟加载

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
        insertDOM = options.insertDOM,
        watchHttp = options.watchHttp,
        watchSystem = options.watchSystem,
        watchEnv = options.watchEnv,
        watchPerformance = options.watchPerformance,
        watchError = options.watchError,
        watchRoutes = options.watchRoutes,
        watchStorage = options.watchStorage,
        watchConsole = options.watchConsole;
    var envBox = document.createElement('div');
    envBox.id = envBoxIdName;
    insertDOM.appendChild(envBox);
    handleDrag(envBox); //处理手势

    envBox.addEventListener('click', function (e) {
      if (Storage.get('global_forbid') === true) return;
      expandUI = true;
      envBox.id = envBoxExpandIdName; // 在打开tabbar栏后监听

      watchEnv && loadEnvModule(envBox);
      watchPerformance && loadPerformanceModule(envBox);
      watchError && loadErrorModule(envBox);
      watchRoutes && loadRoutesModule(envBox);
      watchStorage && loadStorageModule(envBox);
      watchSystem && loadSystemModule(envBox);
      watchConsole && loadConsoleModule(envBox);
      watchHttp && loadHttpModule(envBox);
      loadVersionModule(envBox);
      loadCustomModule(envBox); //处理通用样式

      var envBoxBtnList = document.querySelectorAll('#envBox-expand button');
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
      e.preventDefault();

      if (el - 10 < e.clientX && e.clientX < el + ew + 10 && et - 10 < e.clientY && e.clientY < et + eh + 10) {
        isDrag = true;
      } else {
        isDrag = false;
      }
    });
    document.documentElement.addEventListener('panend', function (e) {
      e.preventDefault();

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
    //自定义数据不能为空
    for (var key in options) {
      var val = options[key];

      if (val == null) {
        createErrorToast("options exist null or undefined----" + key);
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
    }, false);
    window.addEventListener('unhandledrejection', function (e) {
      handleError("promise error" + e.reason);
      updateDialog("<div>".concat(errorData.errorSum, "</div>"));
    }, false);
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
    window.addEventListener('popstate', function (event) {
      console.log('routes change', event);
    });
  };
  /**
   * 前置监听Storage事件
   */


  var preWatchStorage = function preWatchStorage() {
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
   * 前置监听系统数据
   */


  var preWatchSystem = function preWatchSystem() {
    function plusReady() {
      systemData = plus.device; // alert("IMEI: " + plus.device.imei);  //设备的国际移动设备身份码
      // alert("IMEI: " + plus.device.model);  // 设备的型号
      // alert("uuid: " + plus.device.uuid);   //设备的uuid
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


  var preWatchConsole = function preWatchConsole() {
    function watchLog(type) {
      var oldLog = console[type];

      console[type] = function () {
        consoleData.consoleList.push({
          data: arguments[0],
          type: type
        });
        oldLog.call.apply(oldLog, [console].concat(Array.prototype.slice.call(arguments)));
      };
    }

    var logList = ['info', 'error', 'log', 'warn'];
    logList.forEach(function (type) {
      watchLog(type);
    });
  };
  /**
   * 前置监听http请求
   */


  var preWatchHttp = function preWatchHttp() {
    proxy({
      //请求发起前进入
      onRequest: function onRequest(config, handler) {
        console.log("preWatchHttp----start", config);
        httpData.httpList.push(config);
        httpData.urlList.push({
          url: config.url,
          type: 'send'
        });
        handler.next(config);
      },
      //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
      onError: function onError(err, handler) {
        console.log("preWatch----error", err);
        httpData.httpList.push(err);
        httpData.urlList.push({
          url: err.config.url,
          type: 'err'
        });
        handler.next(err);
      },
      //请求成功后进入
      onResponse: function onResponse(res, handler) {
        console.log("preWatch----success", res);
        httpData.httpList.push(res);
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
    var content = "<div>\u9996\u5C4F\u5F00\u59CB\u6E32\u67D3\u65F6\u95F4:".concat(FP, "ms</div><br><div>DOM\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u95F4:").concat(DCL, "ms</div><br><div>\u6240\u6709\u8D44\u6E90\u53CADOM\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u95F4:").concat(L, "ms</div>");

    button.onclick = function () {
      createDialog(content);
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
        createToast('no error');
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

      if (!storageData.newStorageList.length) {
        createToast('no storage');
        return;
      }

      storageData.newStorageList.forEach(function (storage) {
        var k = storage[0];
        var v = JSON.parse(storage[1]);
        var type = checkType(v);
        var str = "<div>key: ".concat(k, " val: ").concat(v, " type: ").concat(type, " <br></div>");
        storageInfoStr += str;
      });
      createDialog(storageInfoStr);
    };
  };
  /**
   * System模块
   * @param {DOM} envBox
   */


  var loadSystemModule = function loadSystemModule(envBox) {
    var systemBtn = document.createElement('button');
    envBox.appendChild(systemBtn);
    systemBtn.innerText = 'system';

    systemBtn.onclick = function () {
      if (JSON.stringify(systemData) !== '{}') {
        createDialog("<div>".concat(JSON.stringify(systemData), "</div>"));
      } else {
        createToast('请在真机webview调试');
      }
    };
  };
  /**
   * Console模块
   * @param {DOM} envBox
   */


  var loadConsoleModule = function loadConsoleModule(envBox) {
    var consoleBtn = document.createElement('button');
    envBox.appendChild(consoleBtn);
    consoleBtn.innerText = 'console';

    consoleBtn.onclick = function () {
      var sumContent = '';

      if (!consoleData.consoleList.length) {
        createToast('no log');
        return;
      }

      consoleData.consoleList.forEach(function (content) {
        var data = content.data,
            type = content.type;

        if (_typeof(data) === 'object') {
          sumContent += "<div class='console-".concat(type, "'>").concat(JSON.stringify(data), "</div>");
        } else {
          sumContent += "<div class='console-".concat(type, "'>").concat(data, "</div>");
        }
      });
      createDialog("<div>".concat(sumContent, "</div>"));
    };
  };
  /**
   * Http模块
   * @param {DOM} envBox
   */


  var loadHttpModule = function loadHttpModule(envBox) {
    var httpBtn = document.createElement('button');
    envBox.appendChild(httpBtn);
    httpBtn.innerText = 'http';

    httpBtn.onclick = function () {
      var urlContents = '';
      httpData.urlList.forEach(function (content, index) {
        urlContents += "<div class='http http-".concat(content.type, "'>").concat(content.url, "</div>");
      });
      createDialog(urlContents); // createToast('未开放.....')
    };
  };
  /**
   * 版本模块
   * @param {DOM} envBox
   */


  var loadVersionModule = function loadVersionModule(envBox) {
    var versionBtn = document.createElement('button');
    envBox.appendChild(versionBtn);
    versionBtn.innerText = 'version';

    versionBtn.onclick = function () {
      createToast("\u5F53\u524D\u7248\u672C".concat(newOptions.version));
    };
  };
  /**
   * 自定义模块
   * @param {DOM} envBox
   */


  var loadCustomModule = function loadCustomModule(envBox) {
    var customBtn = document.createElement('button');
    envBox.appendChild(customBtn);
    customBtn.innerText = 'custom';

    customBtn.onclick = function () {
      createToast('未开放.....');
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
      createErrorToast('do not input object or type');
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

  if (!window) {
    createErrorToast('it is must be brower environment');
    throw new Error('it is must be brower environment');
  }

  if (!isMobile) {
    createErrorToast('it is must be mobile H5 environment');
    throw new Error('it is must be mobile H5 environment');
  }

  Object.prototype.h5tools = {
    gesture: startGesture,
    start: h5Tools.startdevTools,
    send: h5Tools.sendMsg
  };

}));
