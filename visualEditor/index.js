var Fs = Object.defineProperty;
var Ns = (e, t, n) => t in e ? Fs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ha = (e, t, n) => (Ns(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as B, watch as be, computed as v, reactive as Ie, inject as We, getCurrentInstance as Yn, cloneVNode as ql, defineComponent as N, onMounted as Oe, onUnmounted as Hl, openBlock as _, createElementBlock as I, normalizeClass as K, renderSlot as re, normalizeStyle as ge, createElementVNode as h, resolveComponent as ce, createBlock as de, createCommentVNode as le, toRef as Cl, toRefs as $e, createVNode as c, mergeProps as Se, createTextVNode as pe, nextTick as Le, provide as Ht, Fragment as Pe, createSlots as Ei, withCtx as ne, withModifiers as nn, onUpdated as Pt, onBeforeUnmount as Wt, readonly as Rs, onDeactivated as qs, Teleport as Hs, Transition as Sl, withDirectives as Hn, vShow as ba, resolveDynamicComponent as tn, toDisplayString as ye, renderList as bt, TransitionGroup as Oi, watchEffect as Ws, isVNode as ya, render as Wa, Comment as Us, pushScopeId as Qe, popScopeId as Je, vModelText as Ua } from "vue";
const Ka = function(e) {
  return {
    adjustmentPosition: !0,
    focus: !1,
    zIndex: 0,
    hasResize: !1,
    width: 0,
    height: 0,
    id: Math.floor(Math.random() * 1e8),
    ...e
  };
};
function Ks() {
  const e = [], t = {};
  return {
    /**
     * @name 组件名称
     * @component 组件
     * Omit类型是排除属性
     */
    registry(n, l) {
      let o = {
        ...l,
        name: n
      };
      t[n] = o, e.push(o);
    },
    componentLists: e,
    componentMap: t
  };
}
let rt = Ks();
function xi(e, t) {
  let n = B(e());
  return be(e, (l) => {
    l != n.value && (n.value = l);
  }), v({
    get() {
      return n.value;
    },
    set(l) {
      l != n.value && (n.value = l, t(l));
    }
  });
}
const Sn = Object.prototype.toString;
function ze(e) {
  return Sn.call(e) === "[object Array]";
}
function Vn(e) {
  return Sn.call(e) === "[object Null]";
}
function Wl(e) {
  return Sn.call(e) === "[object Boolean]";
}
function Ve(e) {
  return Sn.call(e) === "[object Object]";
}
function wt(e) {
  return Sn.call(e) === "[object String]";
}
function me(e) {
  return Sn.call(e) === "[object Number]" && e === e;
}
function Ye(e) {
  return e === void 0;
}
function Ze(e) {
  return typeof e == "function";
}
function Ys(e) {
  return Ve(e) && Object.keys(e).length === 0;
}
const Bi = (e) => (e == null ? void 0 : e.$) !== void 0, on = Symbol("ArcoConfigProvider"), ol = {
  formatYear: "YYYY 年",
  formatMonth: "YYYY 年 MM 月",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日"
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    }
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日"
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日"
    }
  }
}, Gs = {
  locale: "zh-CN",
  empty: {
    description: "暂无数据"
  },
  drawer: {
    okText: "确定",
    cancelText: "取消"
  },
  popconfirm: {
    okText: "确定",
    cancelText: "取消"
  },
  modal: {
    okText: "确定",
    cancelText: "取消"
  },
  pagination: {
    goto: "前往",
    page: "页",
    countPerPage: "条/页",
    total: "共 {0} 条"
  },
  table: {
    okText: "确定",
    resetText: "重置"
  },
  upload: {
    start: "开始",
    cancel: "取消",
    delete: "删除",
    retry: "点击重试",
    buttonText: "点击上传",
    preview: "预览",
    drag: "点击或拖拽文件到此处上传",
    dragHover: "释放文件并开始上传",
    error: "上传失败"
  },
  calendar: ol,
  datePicker: {
    view: ol.view,
    month: ol.month,
    week: ol.week,
    placeholder: {
      date: "请选择日期",
      week: "请选择周",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      time: "请选择时间"
    },
    rangePlaceholder: {
      date: ["开始日期", "结束日期"],
      week: ["开始周", "结束周"],
      month: ["开始月份", "结束月份"],
      year: ["开始年份", "结束年份"],
      quarter: ["开始季度", "结束季度"],
      time: ["开始时间", "结束时间"]
    },
    selectTime: "选择时间",
    today: "今天",
    now: "此刻",
    ok: "确定"
  },
  image: {
    loading: "加载中"
  },
  imagePreview: {
    fullScreen: "全屏",
    rotateRight: "向右旋转",
    rotateLeft: "向左旋转",
    zoomIn: "放大",
    zoomOut: "缩小",
    originalSize: "原始尺寸"
  },
  typography: {
    copied: "已复制",
    copy: "复制",
    expand: "展开",
    collapse: "折叠",
    edit: "编辑"
  },
  form: {
    validateMessages: {
      required: "#{field} 是必填项",
      type: {
        string: "#{field} 不是合法的文本类型",
        number: "#{field} 不是合法的数字类型",
        boolean: "#{field} 不是合法的布尔类型",
        array: "#{field} 不是合法的数组类型",
        object: "#{field} 不是合法的对象类型",
        url: "#{field} 不是合法的 url 地址",
        email: "#{field} 不是合法的邮箱地址",
        ip: "#{field} 不是合法的 IP 地址"
      },
      number: {
        min: "`#{value}` 小于最小值 `#{min}`",
        max: "`#{value}` 大于最大值 `#{max}`",
        equal: "`#{value}` 不等于 `#{equal}`",
        range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
        positive: "`#{value}` 不是正数",
        negative: "`#{value}` 不是负数"
      },
      array: {
        length: "`#{field}` 个数不等于 #{length}",
        minLength: "`#{field}` 个数最少为 #{minLength}",
        maxLength: "`#{field}` 个数最多为 #{maxLength}",
        includes: "#{field} 不包含 #{includes}",
        deepEqual: "#{field} 不等于 #{deepEqual}",
        empty: "`#{field}` 不是空数组"
      },
      string: {
        minLength: "字符数最少为 #{minLength}",
        maxLength: "字符数最多为 #{maxLength}",
        length: "字符数必须是 #{length}",
        match: "`#{value}` 不符合模式 #{pattern}",
        uppercase: "`#{value}` 必须全大写",
        lowercase: "`#{value}` 必须全小写"
      },
      object: {
        deepEqual: "`#{field}` 不等于期望值",
        hasKeys: "`#{field}` 不包含必须字段",
        empty: "`#{field}` 不是对象"
      },
      boolean: {
        true: "期望是 `true`",
        false: "期望是 `false`"
      }
    }
  },
  colorPicker: {
    history: "最近使用颜色",
    preset: "系统预设颜色",
    empty: "暂无"
  }
}, Xs = B("zh-CN"), Zs = Ie({
  "zh-CN": Gs
}), _a = () => {
  const e = We(on, void 0), t = v(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : Zs[Xs.value];
  }), n = v(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (o, ...r) => {
      const a = o.split(".");
      let i = t.value;
      for (const s of a) {
        if (!i[s])
          return o;
        i = i[s];
      }
      return wt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var d;
        return (d = r[u]) != null ? d : s;
      }) : i;
    }
  };
};
var Qs = Object.defineProperty, Js = Object.defineProperties, eu = Object.getOwnPropertyDescriptors, Ya = Object.getOwnPropertySymbols, tu = Object.prototype.hasOwnProperty, nu = Object.prototype.propertyIsEnumerable, Ga = (e, t, n) => t in e ? Qs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, lu = (e, t) => {
  for (var n in t || (t = {}))
    tu.call(t, n) && Ga(e, n, t[n]);
  if (Ya)
    for (var n of Ya(t))
      nu.call(t, n) && Ga(e, n, t[n]);
  return e;
}, ou = (e, t) => Js(e, eu(t));
const au = "A", ru = "arco", aa = "$arco", qe = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : au;
}, He = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[aa] = ou(lu({}, (n = e.config.globalProperties[aa]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ee = (e) => {
  var t, n, l;
  const o = Yn(), r = We(on, void 0), a = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[aa]) == null ? void 0 : t.classPrefix) != null ? l : ru;
  return e ? `${a}-${e}` : a;
};
var Ii = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var l = -1;
    return t.some(function(o, r) {
      return o[0] === n ? (l = r, !0) : !1;
    }), l;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var l = e(this.__entries__, n), o = this.__entries__[l];
        return o && o[1];
      }, t.prototype.set = function(n, l) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = l : this.__entries__.push([n, l]);
      }, t.prototype.delete = function(n) {
        var l = this.__entries__, o = e(l, n);
        ~o && l.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, l) {
        l === void 0 && (l = null);
        for (var o = 0, r = this.__entries__; o < r.length; o++) {
          var a = r[o];
          n.call(l, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), ra = typeof window < "u" && typeof document < "u" && window.document === document, Vl = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), iu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Vl) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), su = 2;
function uu(e, t) {
  var n = !1, l = !1, o = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function a() {
    iu(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < su)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return i;
}
var cu = 20, du = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], fu = typeof MutationObserver < "u", pu = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = uu(this.refresh.bind(this), cu);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, l = n.indexOf(t);
      ~l && n.splice(l, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !ra || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ra || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = du.some(function(r) {
        return !!~l.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Pi = function(e, t) {
  for (var n = 0, l = Object.keys(t); n < l.length; n++) {
    var o = l[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, $n = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Vl;
}, ji = Ul(0, 0, 0, 0);
function El(e) {
  return parseFloat(e) || 0;
}
function Xa(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var r = e["border-" + o + "-width"];
    return l + El(r);
  }, 0);
}
function vu(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var r = o[l], a = e["padding-" + r];
    n[r] = El(a);
  }
  return n;
}
function hu(e) {
  var t = e.getBBox();
  return Ul(0, 0, t.width, t.height);
}
function mu(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return ji;
  var l = $n(e).getComputedStyle(e), o = vu(l), r = o.left + o.right, a = o.top + o.bottom, i = El(l.width), s = El(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= Xa(l, "left", "right") + r), Math.round(s + a) !== n && (s -= Xa(l, "top", "bottom") + a)), !bu(e)) {
    var u = Math.round(i + r) - t, d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return Ul(o.left, o.top, i, s);
}
var gu = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof $n(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof $n(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function bu(e) {
  return e === $n(e).document.documentElement;
}
function yu(e) {
  return ra ? gu(e) ? hu(e) : mu(e) : ji;
}
function _u(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return Pi(a, {
    x: t,
    y: n,
    width: l,
    height: o,
    top: n,
    right: t + l,
    bottom: o + n,
    left: t
  }), a;
}
function Ul(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var $u = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ul(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = yu(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), wu = (
  /** @class */
  function() {
    function e(t, n) {
      var l = _u(n);
      Pi(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), ku = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new Ii(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof $n(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new $u(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof $n(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(l) {
          return new wu(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Ti = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ii(), Mi = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = pu.getInstance(), l = new ku(t, n, this);
      Ti.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Mi.prototype[e] = function() {
    var t;
    return (t = Ti.get(this))[e].apply(t, arguments);
  };
});
var $a = function() {
  return typeof Vl.ResizeObserver < "u" ? Vl.ResizeObserver : Mi;
}(), Za;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Za || (Za = {}));
var Qa;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Qa || (Qa = {}));
const Kl = (e) => Boolean(e && e.shapeFlag & 1), Gn = (e, t) => Boolean(e && e.shapeFlag & 6), Cu = (e, t) => Boolean(e && e.shapeFlag & 8), wa = (e, t) => Boolean(e && e.shapeFlag & 16), Di = (e, t) => Boolean(e && e.shapeFlag & 32), hn = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Kl(l) || Gn(l))
        return l;
      if (wa(l, l.children)) {
        const o = hn(l.children);
        if (o)
          return o;
      } else if (Di(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const r = hn(o);
          if (r)
            return r;
        }
      } else if (ze(l)) {
        const o = hn(l);
        if (o)
          return o;
      }
    }
}, Su = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, zi = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Kl(l) || Gn(l)) {
        const r = Ze(t) ? t(l) : t;
        return e[n] = ql(l, r, !0), !0;
      }
      const o = ka(l);
      if (o && o.length > 0 && zi(o, t))
        return !0;
    }
  return !1;
}, ka = (e) => {
  if (wa(e, e.children))
    return e.children;
  if (ze(e))
    return e;
}, Ai = (e) => {
  var t, n;
  if (Kl(e))
    return e.el;
  if (Gn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Ai(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = ka(e);
    return Li(l);
  }
}, Li = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Ai(t);
      if (n)
        return n;
    }
}, hl = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const r of e ?? [])
    Kl(r) || Gn(r) || t && Cu(r, r.children) ? o.push(r) : wa(r, r.children) ? o.push(...hl(r.children, t)) : Di(r, r.children) ? o.push(...hl((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : ze(r) && o.push(...hl(r, t));
  return o;
}, Ja = (e) => {
  if (e)
    return Ze(e) ? e : () => e;
}, Fi = (e, t) => {
  var n;
  const l = [];
  if (Gn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Fi(e.component.subTree, t));
  else {
    const o = ka(e);
    o && l.push(...Ni(o, t));
  }
  return l;
}, Ni = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Fi(l, t));
  return n;
};
var Ol = N({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = B(), r = v(() => Bi(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new $a((u) => {
        const d = u[0];
        t("resize", d);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return be(r, (s) => {
      l && i(), s && a(s);
    }), Oe(() => {
      r.value && a(r.value);
    }), Hl(() => {
      i();
    }), () => {
      var s, u;
      const d = hn((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return d ? ql(d, {
        ref: o
      }, !0) : null;
    };
  }
});
const Ri = typeof window > "u" ? global : window, Vu = Ri.requestAnimationFrame, er = Ri.cancelAnimationFrame;
function tr(e) {
  let t = 0;
  const n = (...l) => {
    t && er(t), t = Vu(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    er(t), t = 0;
  }, n;
}
const Ca = () => {
}, Eu = () => {
  const {
    body: e
  } = document, t = document.documentElement;
  let n;
  try {
    n = (window.top || window.self || window).document.body;
  } catch {
  }
  return {
    height: Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight, (n == null ? void 0 : n.scrollHeight) || 0, (n == null ? void 0 : n.clientHeight) || 0),
    width: Math.max(e.scrollWidth, e.offsetWidth, t.clientWidth, t.scrollWidth, t.offsetWidth, (n == null ? void 0 : n.scrollWidth) || 0, (n == null ? void 0 : n.clientWidth) || 0)
  };
}, Sa = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Ot = (() => Sa ? Ca : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), wn = (() => Sa ? Ca : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), Ou = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, xu = (e, t) => {
  var n;
  return Sa ? Ca() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, nr = (e, t) => {
  if (wt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return xu(n, t);
  }
  return e;
}, Bu = (e, t) => {
  const n = e.getBoundingClientRect(), l = t.getBoundingClientRect();
  return {
    top: n.top - l.top,
    bottom: l.bottom - n.bottom,
    left: n.left - l.left,
    right: l.right - n.right,
    width: n.width,
    height: n.height
  };
};
var se = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const Iu = N({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return {
      prefixCls: ee("icon-hover")
    };
  }
});
function Pu(e, t, n, l, o, r) {
  return _(), I("span", {
    class: K([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [re(e.$slots, "default")], 2);
}
var ct = /* @__PURE__ */ se(Iu, [["render", Pu]]);
const ju = N({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Tu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Mu = /* @__PURE__ */ h("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Du = [Mu];
function zu(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Du, 14, Tu);
}
var ro = /* @__PURE__ */ se(ju, [["render", zu]]);
const an = Object.assign(ro, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ro.name, ro);
  }
}), Au = N({
  name: "IconInfoCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Lu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Fu = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Nu = [Fu];
function Ru(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Nu, 14, Lu);
}
var io = /* @__PURE__ */ se(Au, [["render", Ru]]);
const qu = Object.assign(io, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + io.name, io);
  }
}), Hu = N({
  name: "IconCheckCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Wu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Uu = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ku = [Uu];
function Yu(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ku, 14, Wu);
}
var so = /* @__PURE__ */ se(Hu, [["render", Yu]]);
const qi = Object.assign(so, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + so.name, so);
  }
}), Gu = N({
  name: "IconExclamationCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Xu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Zu = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Qu = [Zu];
function Ju(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Qu, 14, Xu);
}
var uo = /* @__PURE__ */ se(Gu, [["render", Ju]]);
const Hi = Object.assign(uo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + uo.name, uo);
  }
}), ec = N({
  name: "IconCloseCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), tc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], nc = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), lc = [nc];
function oc(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, lc, 14, tc);
}
var co = /* @__PURE__ */ se(ec, [["render", oc]]);
const Wi = Object.assign(co, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + co.name, co);
  }
});
function lr(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function or(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function fo(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return or(n.overflowY, t) || or(n.overflowX, t) || function(l) {
      var o = function(r) {
        if (!r.ownerDocument || !r.ownerDocument.defaultView)
          return null;
        try {
          return r.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(l);
      return !!o && (o.clientHeight < l.scrollHeight || o.clientWidth < l.scrollWidth);
    }(e);
  }
  return !1;
}
function al(e, t, n, l, o, r, a, i) {
  return r < e && a > t || r > e && a < t ? 0 : r <= e && i <= n || a >= t && i >= n ? r - e - l : a > t && i < n || r < e && i > n ? a - t + o : 0;
}
var ar = function(e, t) {
  var n = window, l = t.scrollMode, o = t.block, r = t.inline, a = t.boundary, i = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(z) {
    return z !== a;
  };
  if (!lr(e))
    throw new TypeError("Invalid target");
  for (var u, d, f = document.scrollingElement || document.documentElement, m = [], p = e; lr(p) && s(p); ) {
    if ((p = (d = (u = p).parentElement) == null ? u.getRootNode().host || null : d) === f) {
      m.push(p);
      break;
    }
    p != null && p === document.body && fo(p) && !fo(document.documentElement) || p != null && fo(p, i) && m.push(p);
  }
  for (var b = n.visualViewport ? n.visualViewport.width : innerWidth, y = n.visualViewport ? n.visualViewport.height : innerHeight, D = window.scrollX || pageXOffset, A = window.scrollY || pageYOffset, S = e.getBoundingClientRect(), w = S.height, k = S.width, L = S.top, $ = S.right, V = S.bottom, E = S.left, T = o === "start" || o === "nearest" ? L : o === "end" ? V : L + w / 2, P = r === "center" ? E + k / 2 : r === "end" ? $ : E, g = [], x = 0; x < m.length; x++) {
    var O = m[x], U = O.getBoundingClientRect(), Y = U.height, G = U.width, J = U.top, W = U.right, te = U.bottom, M = U.left;
    if (l === "if-needed" && L >= 0 && E >= 0 && V <= y && $ <= b && L >= J && V <= te && E >= M && $ <= W)
      return g;
    var C = getComputedStyle(O), H = parseInt(C.borderLeftWidth, 10), Q = parseInt(C.borderTopWidth, 10), he = parseInt(C.borderRightWidth, 10), we = parseInt(C.borderBottomWidth, 10), fe = 0, Ae = 0, Ce = "offsetWidth" in O ? O.offsetWidth - O.clientWidth - H - he : 0, xe = "offsetHeight" in O ? O.offsetHeight - O.clientHeight - Q - we : 0, dt = "offsetWidth" in O ? O.offsetWidth === 0 ? 0 : G / O.offsetWidth : 0, et = "offsetHeight" in O ? O.offsetHeight === 0 ? 0 : Y / O.offsetHeight : 0;
    if (f === O)
      fe = o === "start" ? T : o === "end" ? T - y : o === "nearest" ? al(A, A + y, y, Q, we, A + T, A + T + w, w) : T - y / 2, Ae = r === "start" ? P : r === "center" ? P - b / 2 : r === "end" ? P - b : al(D, D + b, b, H, he, D + P, D + P + k, k), fe = Math.max(0, fe + A), Ae = Math.max(0, Ae + D);
    else {
      fe = o === "start" ? T - J - Q : o === "end" ? T - te + we + xe : o === "nearest" ? al(J, te, Y, Q, we + xe, T, T + w, w) : T - (J + Y / 2) + xe / 2, Ae = r === "start" ? P - M - H : r === "center" ? P - (M + G / 2) + Ce / 2 : r === "end" ? P - W + he + Ce : al(M, W, G, H, he + Ce, P, P + k, k);
      var ot = O.scrollLeft, F = O.scrollTop;
      T += F - (fe = Math.max(0, Math.min(F + fe / et, O.scrollHeight - Y / et + xe))), P += ot - (Ae = Math.max(0, Math.min(ot + Ae / dt, O.scrollWidth - G / dt + Ce)));
    }
    g.push({ el: O, top: fe, left: Ae });
  }
  return g;
};
const ac = ["info", "success", "warning", "error"], Rt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], rc = N({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), ic = ["stroke-width", "stroke-linecap", "stroke-linejoin"], sc = /* @__PURE__ */ h("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), uc = [sc];
function cc(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, uc, 14, ic);
}
var po = /* @__PURE__ */ se(rc, [["render", cc]]);
const Ut = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), dc = N({
  name: "FeedbackIcon",
  components: {
    IconLoading: Ut,
    IconCheckCircleFill: qi,
    IconExclamationCircleFill: Hi,
    IconCloseCircleFill: Wi
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = ee("feedback-icon");
    return {
      cls: v(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function fc(e, t, n, l, o, r) {
  const a = ce("icon-loading"), i = ce("icon-check-circle-fill"), s = ce("icon-exclamation-circle-fill"), u = ce("icon-close-circle-fill");
  return _(), I("span", {
    class: K(e.cls)
  }, [e.type === "validating" ? (_(), de(a, {
    key: 0
  })) : e.type === "success" ? (_(), de(i, {
    key: 1
  })) : e.type === "warning" ? (_(), de(s, {
    key: 2
  })) : e.type === "error" ? (_(), de(u, {
    key: 3
  })) : le("v-if", !0)], 2);
}
var Va = /* @__PURE__ */ se(dc, [["render", fc]]);
const Ea = {
  key: "Enter",
  code: "Enter"
}, pc = {
  key: "Backspace",
  code: "Backspace"
};
var vc = Object.defineProperty, rr = Object.getOwnPropertySymbols, hc = Object.prototype.hasOwnProperty, mc = Object.prototype.propertyIsEnumerable, ir = (e, t, n) => t in e ? vc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gc = (e, t) => {
  for (var n in t || (t = {}))
    hc.call(t, n) && ir(e, n, t[n]);
  if (rr)
    for (var n of rr(t))
      mc.call(t, n) && ir(e, n, t[n]);
  return e;
};
const Xn = (e, t) => {
  const n = gc({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function Zn(e, t) {
  const n = {};
  return t.forEach((l) => {
    const o = l;
    l in e && (n[o] = e[o]);
  }), n;
}
const ia = Symbol("ArcoFormItemContext"), Oa = Symbol("ArcoFormContext"), vt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : We(ia, {}), r = v(() => {
    var d;
    return (d = e == null ? void 0 : e.value) != null ? d : o.size;
  }), a = v(() => (t == null ? void 0 : t.value) || o.disabled), i = v(() => (n == null ? void 0 : n.value) || o.error), s = Cl(o, "feedback"), u = Cl(o, "eventHandlers");
  return {
    formItemCtx: o,
    mergedSize: r,
    mergedDisabled: a,
    mergedError: i,
    feedback: s,
    eventHandlers: u
  };
}, yt = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = We(on, void 0);
  return {
    mergedSize: v(() => {
      var o, r;
      return (r = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function Ui(e) {
  const t = B();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: o,
      selectionEnd: r,
      value: a
    } = e.value;
    if (o == null || r == null)
      return;
    const i = a.slice(0, Math.max(0, o)), s = a.slice(Math.max(0, r));
    t.value = {
      selectionStart: o,
      selectionEnd: r,
      value: a,
      beforeTxt: i,
      afterTxt: s
    };
  }
  function l() {
    if (!e.value || !t.value)
      return;
    const {
      value: o
    } = e.value, {
      beforeTxt: r,
      afterTxt: a,
      selectionStart: i
    } = t.value;
    if (!r || !a || !i)
      return;
    let s = o.length;
    if (o.endsWith(a))
      s = o.length - a.length;
    else if (o.startsWith(r))
      s = r.length;
    else {
      const u = r[i - 1], d = o.indexOf(u, i - 1);
      d !== -1 && (s = d + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
var bc = Object.defineProperty, sr = Object.getOwnPropertySymbols, yc = Object.prototype.hasOwnProperty, _c = Object.prototype.propertyIsEnumerable, ur = (e, t, n) => t in e ? bc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, cr = (e, t) => {
  for (var n in t || (t = {}))
    yc.call(t, n) && ur(e, n, t[n]);
  if (sr)
    for (var n of sr(t))
      _c.call(t, n) && ur(e, n, t[n]);
  return e;
}, zn = N({
  name: "Input",
  inheritAttrs: !1,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    placeholder: String,
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    },
    inputAttrs: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    input: (e, t) => !0,
    change: (e, t) => !0,
    pressEnter: (e) => !0,
    clear: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: l
  }) {
    const {
      size: o,
      disabled: r,
      error: a,
      modelValue: i
    } = $e(e), s = ee("input"), u = B(), {
      mergedSize: d,
      mergedDisabled: f,
      mergedError: m,
      feedback: p,
      eventHandlers: b
    } = vt({
      size: o,
      disabled: r,
      error: a
    }), {
      mergedSize: y
    } = yt(d), [D, A] = Ui(u), S = B(e.defaultValue), w = v(() => {
      var F;
      return (F = e.modelValue) != null ? F : S.value;
    });
    be(i, (F) => {
      (Ye(F) || Vn(F)) && (S.value = "");
    });
    let k = w.value;
    const L = B(!1), $ = v(() => e.allowClear && !e.readonly && !f.value && Boolean(w.value)), V = B(!1), E = B(""), T = (F) => {
      var z;
      return Ze(e.wordLength) ? e.wordLength(F) : (z = F.length) != null ? z : 0;
    }, P = v(() => T(w.value)), g = v(() => m.value || Boolean(Ve(e.maxLength) && e.maxLength.errorOnly && P.value > O.value)), x = v(() => Ve(e.maxLength) && Boolean(e.maxLength.errorOnly)), O = v(() => Ve(e.maxLength) ? e.maxLength.length : e.maxLength), U = v(() => {
      const F = T("a");
      return Math.floor(O.value / F);
    }), Y = (F) => {
      var z, X;
      O.value && !x.value && T(F) > O.value && (F = (X = (z = e.wordSlice) == null ? void 0 : z.call(e, F, O.value)) != null ? X : F.slice(0, U.value)), S.value = F, t("update:modelValue", F);
    }, G = (F) => {
      u.value && F.target !== u.value && (F.preventDefault(), u.value.focus());
    }, J = (F, z) => {
      var X, oe;
      F !== k && (k = F, t("change", F, z), (oe = (X = b.value) == null ? void 0 : X.onChange) == null || oe.call(X, z));
    }, W = (F) => {
      var z, X;
      L.value = !0, k = w.value, t("focus", F), (X = (z = b.value) == null ? void 0 : z.onFocus) == null || X.call(z, F);
    }, te = (F) => {
      var z, X;
      L.value = !1, J(w.value, F), t("blur", F), (X = (z = b.value) == null ? void 0 : z.onBlur) == null || X.call(z, F);
    }, M = (F) => {
      var z, X, oe;
      const {
        value: Te,
        selectionStart: Me,
        selectionEnd: Et
      } = F.target;
      if (F.type === "compositionend") {
        if (V.value = !1, E.value = "", O.value && !x.value && P.value >= O.value && T(Te) > O.value && Me === Et) {
          C();
          return;
        }
        Y(Te), t("input", Te, F), (X = (z = b.value) == null ? void 0 : z.onInput) == null || X.call(z, F), C();
      } else
        V.value = !0, E.value = w.value + ((oe = F.data) != null ? oe : "");
    }, C = () => {
      D(), Le(() => {
        u.value && w.value !== u.value.value && (u.value.value = w.value, A());
      });
    }, H = (F) => {
      var z, X;
      const {
        value: oe
      } = F.target;
      if (!V.value) {
        if (O.value && !x.value && P.value >= O.value && T(oe) > O.value && F.inputType === "insertText") {
          C();
          return;
        }
        Y(oe), t("input", oe, F), (X = (z = b.value) == null ? void 0 : z.onInput) == null || X.call(z, F), C();
      }
    }, Q = (F) => {
      Y(""), J("", F), t("clear", F);
    }, he = (F) => {
      const z = F.key || F.code;
      !V.value && z === Ea.key && (J(w.value, F), t("pressEnter", F));
    }, we = v(() => [`${s}-outer`, `${s}-outer-size-${y.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), fe = v(() => [`${s}-wrapper`, {
      [`${s}-error`]: g.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: L.value
    }]), Ae = v(() => [s, `${s}-size-${y.value}`]), Ce = v(() => Xn(l, Rt)), xe = v(() => Zn(l, Rt)), dt = v(() => {
      const F = cr(cr({}, xe.value), e.inputAttrs);
      return g.value && (F["aria-invalid"] = !0), F;
    }), et = (F) => {
      var z;
      return c("span", Se({
        class: fe.value,
        onMousedown: G
      }, F ? void 0 : Ce.value), [n.prefix && c("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), c("input", Se({
        ref: u,
        class: Ae.value,
        value: w.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: f.value,
        onInput: H,
        onKeydown: he,
        onFocus: W,
        onBlur: te,
        onCompositionstart: M,
        onCompositionupdate: M,
        onCompositionend: M
      }, dt.value), null), $.value && c(ct, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: Q
      }, {
        default: () => [c(an, null, null)]
      }), (n.suffix || Boolean(e.maxLength) && e.showWordLimit || Boolean(p.value)) && c("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: p.value
        }]
      }, [Boolean(e.maxLength) && e.showWordLimit && c("span", {
        class: `${s}-word-limit`
      }, [P.value, pe("/"), O.value]), (z = n.suffix) == null ? void 0 : z.call(n), Boolean(p.value) && c(Va, {
        type: p.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? c("span", Se({
        class: we.value
      }, Ce.value), [n.prepend && c("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), et(!0), n.append && c("span", {
        class: `${s}-append`
      }, [n.append()])]) : et()
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const $c = N({
  name: "IconSearch",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), wc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], kc = /* @__PURE__ */ h("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Cc = [kc];
function Sc(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Cc, 14, wc);
}
var vo = /* @__PURE__ */ se($c, [["render", Sc]]);
const sa = Object.assign(vo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + vo.name, vo);
  }
}), Ki = Symbol("ArcoButtonGroup"), Vc = N({
  name: "Button",
  components: {
    IconLoading: Ut
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    href: String
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      size: n,
      disabled: l
    } = $e(e), o = ee("btn"), r = We(Ki, void 0), a = v(() => {
      var p;
      return (p = n.value) != null ? p : r == null ? void 0 : r.size;
    }), i = v(() => Boolean(l.value || (r == null ? void 0 : r.disabled))), {
      mergedSize: s,
      mergedDisabled: u
    } = vt({
      size: a,
      disabled: i
    }), {
      mergedSize: d
    } = yt(s), f = v(() => {
      var p, b, y, D, A, S;
      return [o, `${o}-${(b = (p = e.type) != null ? p : r == null ? void 0 : r.type) != null ? b : "secondary"}`, `${o}-shape-${(D = (y = e.shape) != null ? y : r == null ? void 0 : r.shape) != null ? D : "square"}`, `${o}-size-${d.value}`, `${o}-status-${(S = (A = e.status) != null ? A : r == null ? void 0 : r.status) != null ? S : "normal"}`, {
        [`${o}-long`]: e.long,
        [`${o}-loading`]: e.loading,
        [`${o}-disabled`]: u.value,
        [`${o}-link`]: wt(e.href)
      }];
    });
    return {
      prefixCls: o,
      cls: f,
      mergedDisabled: u,
      handleClick: (p) => {
        if (e.disabled || e.loading) {
          p.preventDefault();
          return;
        }
        t("click", p);
      }
    };
  }
}), Ec = ["href"], Oc = ["type", "disabled"];
function xc(e, t, n, l, o, r) {
  const a = ce("icon-loading");
  return e.href ? (_(), I("a", {
    key: 0,
    class: K([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (_(), I("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [e.loading ? (_(), de(a, {
    key: 0,
    spin: "true"
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : le("v-if", !0), re(e.$slots, "default")], 10, Ec)) : (_(), I("button", {
    key: 1,
    class: K([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (_(), I("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [e.loading ? (_(), de(a, {
    key: 0,
    spin: !0
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : le("v-if", !0), re(e.$slots, "default")], 10, Oc));
}
var ho = /* @__PURE__ */ se(Vc, [["render", xc]]);
const Bc = N({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const {
      type: t,
      size: n,
      status: l,
      disabled: o,
      shape: r
    } = $e(e), a = ee("btn-group");
    return Ht(Ki, Ie({
      type: t,
      size: n,
      shape: r,
      status: l,
      disabled: o
    })), {
      prefixCls: a
    };
  }
});
function Ic(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var mo = /* @__PURE__ */ se(Bc, [["render", Ic]]);
const kn = Object.assign(ho, {
  Group: mo,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + ho.name, ho), e.component(n + mo.name, mo);
  }
});
var go = N({
  name: "InputSearch",
  props: {
    searchButton: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonProps: {
      type: Object
    }
  },
  emits: {
    search: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      size: l
    } = $e(e), o = ee("input-search"), {
      mergedSize: r
    } = yt(l), a = B(), i = (f) => {
      a.value.inputRef && t("search", a.value.inputRef.value, f);
    }, s = () => {
      var f;
      return c(Pe, null, [e.loading ? c(Ut, null, null) : c(ct, {
        onClick: i
      }, {
        default: () => [c(sa, null, null)]
      }), (f = n.suffix) == null ? void 0 : f.call(n)]);
    }, u = () => {
      var f;
      let m = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? m = {
        default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : m = {
        icon: () => c(sa, null, null)
      }, c(kn, Se({
        type: "primary",
        class: `${o}-btn`,
        disabled: e.disabled,
        size: r.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: i
      }), m);
    };
    return {
      inputRef: a,
      render: () => c(zn, {
        ref: a,
        class: o,
        size: r.value,
        disabled: e.disabled
      }, {
        prepend: n.prepend,
        prefix: n.prefix,
        suffix: e.searchButton ? n.suffix : s,
        append: e.searchButton ? u : n.append
      })
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const Pc = N({
  name: "IconEye",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), jc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Tc = /* @__PURE__ */ h("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Mc = /* @__PURE__ */ h("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Dc = [Tc, Mc];
function zc(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Dc, 14, jc);
}
var bo = /* @__PURE__ */ se(Pc, [["render", zc]]);
const Ac = Object.assign(bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bo.name, bo);
  }
}), Lc = N({
  name: "IconEyeInvisible",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Fc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Nc = /* @__PURE__ */ h("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Rc = /* @__PURE__ */ h("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), qc = [Nc, Rc];
function Hc(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, qc, 14, Fc);
}
var yo = /* @__PURE__ */ se(Lc, [["render", Hc]]);
const Wc = Object.assign(yo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + yo.name, yo);
  }
});
function Wn(e) {
  const t = B(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function Uc(e, t) {
  const {
    value: n
  } = $e(t), [l, o] = Wn(Ye(n.value) ? e : n.value);
  return be(n, (a) => {
    Ye(a) && o(void 0);
  }), [v(() => Ye(n.value) ? l.value : n.value), o, l];
}
const Kc = N({
  name: "InputPassword",
  components: {
    IconEye: Ac,
    IconEyeInvisible: Wc,
    AIconHover: ct,
    AInput: zn
  },
  props: {
    visibility: {
      type: Boolean,
      default: void 0
    },
    defaultVisibility: {
      type: Boolean,
      default: !0
    },
    invisibleButton: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["visibility-change", "update:visibility"],
  setup(e, {
    emit: t
  }) {
    const {
      visibility: n,
      defaultVisibility: l
    } = $e(e), o = B(), r = () => {
      s(!a.value);
    }, [a, i] = Uc(l.value, Ie({
      value: n
    })), s = (u) => {
      u !== a.value && (t("visibility-change", u), t("update:visibility", u), i(u));
    };
    return {
      inputRef: o,
      mergedVisible: a,
      handleInvisible: r
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  }
});
function Yc(e, t, n, l, o, r) {
  const a = ce("icon-eye"), i = ce("icon-eye-invisible"), s = ce("a-icon-hover"), u = ce("a-input");
  return _(), de(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Ei({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: ne(() => [re(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: ne(() => [re(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: ne(() => [e.invisibleButton ? (_(), de(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = nn(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = nn(() => {
      }, ["prevent"]))
    }, {
      default: ne(() => [e.mergedVisible ? (_(), de(i, {
        key: 1
      })) : (_(), de(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : le("v-if", !0), re(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: ne(() => [re(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var _o = /* @__PURE__ */ se(Kc, [["render", Yc]]);
const Gc = N({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ee("input-group")
    };
  }
});
function Xc(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var An = /* @__PURE__ */ se(Gc, [["render", Xc]]);
const Kt = Object.assign(zn, {
  Search: go,
  Password: _o,
  Group: An,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + zn.name, zn), e.component(n + An.name, An), e.component(n + go.name, go), e.component(n + _o.name, _o);
  }
});
var Zc = Object.defineProperty, dr = Object.getOwnPropertySymbols, Qc = Object.prototype.hasOwnProperty, Jc = Object.prototype.propertyIsEnumerable, fr = (e, t, n) => t in e ? Zc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Pn = (e, t) => {
  for (var n in t || (t = {}))
    Qc.call(t, n) && fr(e, n, t[n]);
  if (dr)
    for (var n of dr(t))
      Jc.call(t, n) && fr(e, n, t[n]);
  return e;
};
const ed = () => {
  const {
    height: e,
    width: t
  } = Eu();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, pr = (e, t) => {
  var n, l;
  const o = e.getBoundingClientRect();
  return {
    top: o.top,
    bottom: o.bottom,
    left: o.left,
    right: o.right,
    scrollTop: o.top - t.top,
    scrollBottom: o.bottom - t.top,
    scrollLeft: o.left - t.left,
    scrollRight: o.right - t.left,
    width: (n = e.offsetWidth) != null ? n : e.clientWidth,
    height: (l = e.offsetHeight) != null ? l : e.clientHeight
  };
}, td = (e) => {
  switch (e) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
}, rl = (e, t) => {
  switch (t) {
    case "top":
      switch (e) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return e;
      }
    case "bottom":
      switch (e) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return e;
      }
    case "left":
      switch (e) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return e;
      }
    case "right":
      switch (e) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return e;
      }
    default:
      return e;
  }
}, nd = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: r,
  translate: a
}) => {
  const i = td(e), s = ed(), u = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + o.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + o.width)
  };
  let d = e;
  if (i === "top" && u.top < 0)
    if (l.top > o.height)
      t.top = -n.top;
    else {
      const f = jn("bottom", l, o, {
        offset: r,
        translate: a
      });
      s.height - (n.top + f.top + o.height) > 0 && (d = rl(e, "bottom"), t.top = f.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const f = jn("top", l, o, {
        offset: r,
        translate: a
      });
      n.top + f.top > 0 && (d = rl(e, "top"), t.top = f.top);
    }
  if (i === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const f = jn("right", l, o, {
        offset: r,
        translate: a
      });
      s.width - (n.left + f.left + o.width) > 0 && (d = rl(e, "right"), t.left = f.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const f = jn("left", l, o, {
        offset: r,
        translate: a
      });
      n.left + f.left > 0 && (d = rl(e, "left"), t.left = f.left);
    }
  return (i === "top" || i === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - o.width))), (i === "left" || i === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - o.height))), {
    popupPosition: t,
    position: d
  };
}, jn = (e, t, n, {
  offset: l = 0,
  translate: o = [0, 0]
} = {}) => {
  var r;
  const a = (r = ze(o) ? o : o[e]) != null ? r : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
        top: t.scrollTop - n.height - l + a[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + a[0],
        top: t.scrollTop - n.height - l + a[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + a[0],
        top: t.scrollTop - n.height - l + a[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
        top: t.scrollBottom + l + a[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + a[0],
        top: t.scrollBottom + l + a[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + a[0],
        top: t.scrollBottom + l + a[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - l + a[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - l + a[0],
        top: t.scrollTop + a[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - l + a[0],
        top: t.scrollBottom - n.height + a[1]
      };
    case "right":
      return {
        left: t.scrollRight + l + a[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
      };
    case "rt":
      return {
        left: t.scrollRight + l + a[0],
        top: t.scrollTop + a[1]
      };
    case "rb":
      return {
        left: t.scrollRight + l + a[0],
        top: t.scrollBottom - n.height + a[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, ld = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, od = (e, t, n, l, {
  offset: o = 0,
  translate: r = [0, 0],
  customStyle: a = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, u = jn(e, n, l, {
    offset: o,
    translate: r
  });
  if (i) {
    const f = nd(e, u, {
      containerRect: t,
      popupRect: l,
      triggerRect: n,
      offset: o,
      translate: r
    });
    u = f.popupPosition, s = f.position;
  }
  return {
    style: Pn({
      left: `${u.left}px`,
      top: `${u.top}px`
    }, a),
    position: s
  };
}, ad = (e, t, n, {
  customStyle: l = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let r = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return r > n.width - 8 && (t.width > n.width ? r = n.width / 2 : r = n.width - 8), ["top", "tl", "tr"].includes(e) ? Pn({
      left: `${r}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, l) : Pn({
      left: `${r}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, l);
  }
  let o = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return o > n.height - 8 && (t.height > n.height ? o = n.height / 2 : o = n.height - 8), ["left", "lt", "lb"].includes(e) ? Pn({
    top: `${o}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, l) : Pn({
    top: `${o}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, l);
}, rd = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, vr = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    rd(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, Yi = () => {
  const e = {}, t = B(), n = () => {
    const l = Li(e.value);
    l !== t.value && (t.value = l);
  };
  return Oe(() => n()), Pt(() => n()), {
    children: e,
    firstElement: t
  };
};
var xl = N({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: l,
      firstElement: o
    } = Yi();
    let r;
    const a = (s) => {
      s && (r = new $a((u) => {
        const d = u[0];
        t("resize", d);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return be(o, (s) => {
      r && i(), s && a(s);
    }), Wt(() => {
      r && i();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function id(e, t) {
  const n = B(e[t]);
  return Pt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const hr = Symbol("ArcoTrigger"), sd = 1e3, ud = 5e3, cd = 1;
class dd {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || ud : Array.from(this.popupStack.popup).pop() || sd) + cd, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const $o = new dd();
function Gi(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = B(0), o = () => {
    l.value = $o.add(e);
  }, r = () => {
    $o.delete(l.value, e);
  }, a = () => e === "dialog" ? $o.isLastDialog(l.value) : !1;
  return be(() => t == null ? void 0 : t.value, (i) => {
    i ? o() : r();
  }, {
    immediate: !0
  }), n && (Oe(() => {
    o();
  }), Wt(() => {
    r();
  })), {
    zIndex: Rs(l),
    open: o,
    close: r,
    isLastDialog: a
  };
}
const fd = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new $a((r) => {
        const a = r[0];
        Ze(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var pd = N({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = B(!1);
    return Oe(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const vd = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = B(e.value), r = B(), a = () => {
    const i = nr(e.value), s = i ? e.value : n, u = i ?? (l ? document.documentElement : nr(n));
    s !== o.value && (o.value = s), u !== r.value && (r.value = u);
  };
  return Oe(() => a()), be(t, (i) => {
    o.value !== e.value && i && a();
  }), {
    teleportContainer: o,
    containerRef: r
  };
};
var hd = Object.defineProperty, md = Object.defineProperties, gd = Object.getOwnPropertyDescriptors, mr = Object.getOwnPropertySymbols, bd = Object.prototype.hasOwnProperty, yd = Object.prototype.propertyIsEnumerable, gr = (e, t, n) => t in e ? hd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, _d = (e, t) => {
  for (var n in t || (t = {}))
    bd.call(t, n) && gr(e, n, t[n]);
  if (mr)
    for (var n of mr(t))
      yd.call(t, n) && gr(e, n, t[n]);
  return e;
}, $d = (e, t) => md(e, gd(t));
const wd = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var wo = N({
  name: "Trigger",
  inheritAttrs: !1,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: !1
    },
    alignPoint: {
      type: Boolean,
      default: !1
    },
    popupHoverStay: {
      type: Boolean,
      default: !0
    },
    blurToClose: {
      type: Boolean,
      default: !0
    },
    clickToClose: {
      type: Boolean,
      default: !0
    },
    clickOutsideToClose: {
      type: Boolean,
      default: !0
    },
    unmountOnClose: {
      type: Boolean,
      default: !0
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: !1
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: !1
    },
    autoFixPosition: {
      type: Boolean,
      default: !0
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: !1
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: !1
    },
    hideEmpty: {
      type: Boolean,
      default: !1
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: !0
    },
    renderToBody: {
      type: Boolean,
      default: !0
    },
    preventFocus: {
      type: Boolean,
      default: !1
    },
    scrollToClose: {
      type: Boolean,
      default: !1
    },
    scrollToCloseDistance: {
      type: Number,
      default: 0
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0,
    show: () => !0,
    hide: () => !0,
    resize: () => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: l
  }) {
    const {
      popupContainer: o
    } = $e(e), r = ee("trigger"), a = v(() => Xn(l, wd)), i = We(on, void 0), s = v(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), d = We(hr, void 0), {
      children: f,
      firstElement: m
    } = Yi(), p = B(), b = B(e.defaultPopupVisible), y = B(e.position), D = B({}), A = B({}), S = B({}), w = B(), k = B({
      top: 0,
      left: 0
    });
    let L = null, $ = null;
    const V = v(() => {
      var j;
      return (j = e.popupVisible) != null ? j : b.value;
    }), {
      teleportContainer: E,
      containerRef: T
    } = vd({
      popupContainer: o,
      visible: V,
      documentContainer: !0
    }), {
      zIndex: P
    } = Gi("popup", {
      visible: V
    });
    let g = 0, x = !1, O = !1;
    const U = () => {
      g && (window.clearTimeout(g), g = 0);
    }, Y = (j) => {
      if (e.alignPoint) {
        const {
          pageX: q,
          pageY: ae
        } = j;
        k.value = {
          top: ae,
          left: q
        };
      }
    }, G = () => {
      if (!m.value || !p.value || !T.value)
        return;
      const j = T.value.getBoundingClientRect(), q = e.alignPoint ? {
        top: k.value.top,
        bottom: k.value.top,
        left: k.value.left,
        right: k.value.left,
        scrollTop: k.value.top,
        scrollBottom: k.value.top,
        scrollLeft: k.value.left,
        scrollRight: k.value.left,
        width: 0,
        height: 0
      } : pr(m.value, j), ae = () => pr(p.value, j), ft = ae(), {
        style: tt,
        position: un
      } = od(e.position, j, q, ft, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (A.value = {
        transformOrigin: ld(un)
      }), e.autoFitPopupMinWidth ? tt.minWidth = `${q.width}px` : e.autoFitPopupWidth && (tt.width = `${q.width}px`), y.value !== un && (y.value = un), D.value = tt, e.showArrow && Le(() => {
        S.value = ad(un, q, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, J = (j, q) => {
      if (j === V.value && g === 0)
        return;
      const ae = () => {
        b.value = j, t("update:popupVisible", j), t("popupVisibleChange", j), j && Le(() => {
          G();
        });
      };
      j || (L = null, $ = null), q ? (U(), j !== V.value && (g = window.setTimeout(ae, q))) : ae();
    }, W = (j) => {
      var q;
      (q = l.onClick) == null || q.call(l, j), !(e.disabled || V.value && !e.clickToClose) && (s.value.includes("click") ? (Y(j), J(!V.value)) : s.value.includes("contextMenu") && V.value && J(!1));
    }, te = (j) => {
      var q;
      (q = l.onMouseenter) == null || q.call(l, j), !(e.disabled || !s.value.includes("hover")) && (Y(j), J(!0, e.mouseEnterDelay));
    }, M = (j) => {
      d == null || d.onMouseenter(j), te(j);
    }, C = (j) => {
      var q;
      (q = l.onMouseleave) == null || q.call(l, j), !(e.disabled || !s.value.includes("hover")) && J(!1, e.mouseLeaveDelay);
    }, H = (j) => {
      d == null || d.onMouseleave(j), C(j);
    }, Q = (j) => {
      var q;
      (q = l.onFocusin) == null || q.call(l, j), !(e.disabled || !s.value.includes("focus")) && J(!0, e.focusDelay);
    }, he = (j) => {
      var q;
      (q = l.onFocusout) == null || q.call(l, j), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && J(!1);
    }, we = (j) => {
      var q;
      (q = l.onContextmenu) == null || q.call(l, j), !(e.disabled || !s.value.includes("contextMenu") || V.value && !e.clickToClose) && (Y(j), J(!V.value), j.preventDefault());
    };
    Ht(hr, Ie({
      onMouseenter: M,
      onMouseleave: H,
      addChildRef: (j) => {
        u.add(j), d == null || d.addChildRef(j);
      },
      removeChildRef: (j) => {
        u.delete(j), d == null || d.removeChildRef(j);
      }
    }));
    const Ce = () => {
      wn(document.documentElement, "mousedown", et), x = !1;
    }, xe = id(n, "content"), dt = v(() => {
      var j;
      return e.hideEmpty && Su((j = xe.value) == null ? void 0 : j.call(xe));
    }), et = (j) => {
      var q, ae, ft;
      if (!((q = m.value) != null && q.contains(j.target) || (ae = p.value) != null && ae.contains(j.target))) {
        for (const tt of u)
          if ((ft = tt.value) != null && ft.contains(j.target))
            return;
        Ce(), J(!1);
      }
    }, ot = (j, q) => {
      const [ae, ft] = j, {
        scrollTop: tt,
        scrollLeft: un
      } = q;
      return Math.abs(tt - ae) >= e.scrollToCloseDistance || Math.abs(un - ft) >= e.scrollToCloseDistance;
    }, F = tr((j) => {
      if (V.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const q = j.target;
          L || (L = [q.scrollTop, q.scrollLeft]), ot(L, q) ? J(!1) : G();
        } else
          G();
    }), z = () => {
      wn(window, "scroll", X), O = !1;
    }, X = tr((j) => {
      const q = j.target.documentElement;
      $ || ($ = [q.scrollTop, q.scrollLeft]), ot($, q) && (J(!1), z());
    }), oe = () => {
      V.value && G();
    }, Te = () => {
      oe(), t("resize");
    }, Me = (j) => {
      e.preventFocus && j.preventDefault();
    };
    d == null || d.addChildRef(p);
    const Et = v(() => V.value ? e.openedClass : void 0);
    let Ue;
    be(V, (j) => {
      if (e.clickOutsideToClose && (!j && x ? Ce() : j && !x && (Ot(document.documentElement, "mousedown", et), x = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Ot(window, "scroll", X), O = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (j) {
          Ue = vr(m.value);
          for (const q of Ue)
            q.addEventListener("scroll", F);
        } else if (Ue) {
          for (const q of Ue)
            q.removeEventListener("scroll", F);
          Ue = void 0;
        }
      }
      j && (Bn.value = !0);
    }), be(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      V.value && G();
    });
    const {
      createResizeObserver: lo,
      destroyResizeObserver: oo
    } = fd({
      elementRef: T,
      onResize: oe
    });
    Oe(() => {
      if (lo(), V.value && (G(), e.clickOutsideToClose && !x && (Ot(document.documentElement, "mousedown", et), x = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ue = vr(m.value);
        for (const j of Ue)
          j.addEventListener("scroll", F);
      }
    }), Pt(() => {
      V.value && G();
    }), qs(() => {
      J(!1);
    }), Wt(() => {
      if (d == null || d.removeChildRef(p), oo(), x && Ce(), O && z(), Ue) {
        for (const j of Ue)
          j.removeEventListener("scroll", F);
        Ue = void 0;
      }
    });
    const Bn = B(V.value), Mt = B(!1), ll = () => {
      Mt.value = !0;
    }, ao = () => {
      Mt.value = !1, V.value && t("show");
    }, R = () => {
      Mt.value = !1, V.value || (Bn.value = !1, t("hide"));
    };
    return () => {
      var j, q;
      return f.value = (q = (j = n.default) == null ? void 0 : j.call(n)) != null ? q : [], zi(f.value, {
        class: Et.value,
        onClick: W,
        onMouseenter: te,
        onMouseleave: C,
        onFocusin: Q,
        onFocusout: he,
        onContextmenu: we
      }), c(Pe, null, [e.autoFixPosition ? c(xl, {
        onResize: Te
      }, {
        default: () => [f.value]
      }) : f.value, c(pd, null, {
        default: () => [c(Hs, {
          to: E.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || V.value || Bn.value) && !dt.value && c(xl, {
            onResize: oe
          }, {
            default: () => [c("div", Se({
              ref: p,
              class: [`${r}-popup`, `${r}-position-${y.value}`],
              style: $d(_d({}, D.value), {
                zIndex: P.value,
                pointerEvents: Mt.value ? "none" : "auto"
              }),
              "trigger-placement": y.value,
              onMouseenter: M,
              onMouseleave: H,
              onMousedown: Me
            }, a.value), [c(Sl, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: ll,
              onAfterEnter: ao,
              onBeforeLeave: ll,
              onAfterLeave: R
            }, {
              default: () => {
                var ae;
                return [Hn(c("div", {
                  class: `${r}-popup-wrapper`,
                  style: A.value
                }, [c("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ae = n.content) == null ? void 0 : ae.call(n)]), e.showArrow && c("div", {
                  ref: w,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: S.value
                }, null)]), [[ba, V.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Bl = Object.assign(wo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + wo.name, wo);
  }
}), kd = N({
  name: "IconEmpty",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Cd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Sd = /* @__PURE__ */ h("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Vd = [Sd];
function Ed(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Vd, 14, Cd);
}
var ko = /* @__PURE__ */ se(kd, [["render", Ed]]);
const Od = Object.assign(ko, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ko.name, ko);
  }
});
var Co = N({
  name: "Empty",
  inheritAttrs: !1,
  props: {
    description: String,
    imgSrc: String,
    inConfigProvider: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const l = ee("empty"), {
      t: o
    } = _a(), r = We(on, void 0);
    return () => {
      var a, i, s, u;
      return !e.inConfigProvider && (r != null && r.slots.empty) && !(t.image || e.imgSrc || e.description) ? r.slots.empty({
        component: "empty"
      }) : c("div", Se({
        class: l
      }, n), [c("div", {
        class: `${l}-image`
      }, [(i = (a = t.image) == null ? void 0 : a.call(t)) != null ? i : e.imgSrc ? c("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : c(Od, null, null)]), c("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const xd = Object.assign(Co, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Co.name, Co);
  }
}), Bd = 5;
var Id = N({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(e) {
    const t = ee("dot-loading");
    return () => {
      const n = e.size ? {
        width: `${e.size}px`,
        height: `${e.size}px`
      } : {};
      return c("div", {
        class: t,
        style: {
          width: e.size ? `${e.size * 7}px` : void 0,
          height: e.size ? `${e.size}px` : void 0
        }
      }, [Array(Bd).fill(1).map((l, o) => c("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), So = N({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String,
    hideIcon: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = ee("spin"), l = We(on, void 0), o = v(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), r = () => {
      if (t.icon) {
        const i = hn(t.icon());
        if (i)
          return ql(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? c(Id, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : c(Ut, {
        spin: !0,
        size: e.size
      }, null);
    }, a = () => {
      var i, s, u;
      const d = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, f = Boolean((i = t.tip) != null ? i : e.tip);
      return c(Pe, null, [!e.hideIcon && c("div", {
        class: `${n}-icon`,
        style: d
      }, [r()]), f && c("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => c("div", {
      class: o.value
    }, [t.default ? c(Pe, null, [t.default(), e.loading && c("div", {
      class: `${n}-mask`
    }, [c("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Pd = Object.assign(So, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + So.name, So);
  }
}), jd = N({
  name: "Thumb",
  props: {
    data: {
      type: Object
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    alwaysShow: {
      type: Boolean,
      default: !1
    },
    both: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scroll"],
  setup(e, {
    emit: t
  }) {
    const n = ee("scrollbar"), l = B(!1), o = B(), r = B(), a = v(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = B(0), s = B(!1), u = B(0), d = v(() => {
      var S, w;
      return {
        [a.value.size]: `${(w = (S = e.data) == null ? void 0 : S.thumbSize) != null ? w : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), f = (S) => {
      S.preventDefault(), r.value && (u.value = S[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, Ot(window, "mousemove", b), Ot(window, "mouseup", y), Ot(window, "contextmenu", y));
    }, m = (S) => {
      var w, k, L, $;
      if (S.preventDefault(), r.value) {
        const V = p(S[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((k = (w = e.data) == null ? void 0 : w.thumbSize) != null ? k : 0) : i.value - (($ = (L = e.data) == null ? void 0 : L.thumbSize) != null ? $ : 0));
        V !== i.value && (i.value = V, t("scroll", V));
      }
    }, p = (S) => S < 0 ? 0 : e.data && S > e.data.max ? e.data.max : S, b = (S) => {
      if (o.value && r.value) {
        const w = p(S[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        w !== i.value && (i.value = w, t("scroll", w));
      }
    }, y = () => {
      s.value = !1, wn(window, "mousemove", b), wn(window, "mouseup", y);
    }, D = (S) => {
      s.value || (S = p(S), S !== i.value && (i.value = S));
    }, A = v(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: r,
      prefixCls: n,
      thumbCls: A,
      thumbStyle: d,
      handleThumbMouseDown: f,
      handleTrackClick: m,
      setOffset: D
    };
  }
});
function Td(e, t, n, l, o, r) {
  return _(), de(Sl, null, {
    default: ne(() => [h("div", {
      ref: "trackRef",
      class: K([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = nn((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [h("div", {
      ref: "thumbRef",
      class: K(e.thumbCls),
      style: ge(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [h("div", {
      class: K(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var Md = /* @__PURE__ */ se(jd, [["render", Td]]);
const br = 20, il = 15, Dd = N({
  name: "Scrollbar",
  components: {
    ResizeObserver: xl,
    Thumb: Md
  },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      default: "embed"
    },
    outerClass: [String, Object, Array],
    outerStyle: {
      type: [String, Object, Array]
    },
    hide: {
      type: Boolean,
      default: !1
    },
    disableHorizontal: {
      type: Boolean,
      default: !1
    },
    disableVertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    scroll: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("scrollbar"), l = B(), o = B(), r = B(), a = B(), i = B(), s = B(!1), u = B(!1), d = v(() => s.value && !e.disableHorizontal), f = v(() => u.value && !e.disableVertical), m = B(!1), p = () => {
      var k, L, $, V, E, T;
      if (l.value) {
        const {
          clientWidth: P,
          clientHeight: g,
          offsetWidth: x,
          offsetHeight: O,
          scrollWidth: U,
          scrollHeight: Y,
          scrollTop: G,
          scrollLeft: J
        } = l.value;
        s.value = U > P, u.value = Y > g, m.value = d.value && f.value;
        const W = e.type === "embed" && m.value ? x - il : x, te = e.type === "embed" && m.value ? O - il : O, M = Math.round(W / Math.min(U / P, W / br)), C = W - M, H = (U - P) / C, Q = Math.round(te / Math.min(Y / g, te / br)), he = te - Q, we = (Y - g) / he;
        if (o.value = {
          ratio: H,
          thumbSize: M,
          max: C
        }, r.value = {
          ratio: we,
          thumbSize: Q,
          max: he
        }, G > 0) {
          const fe = Math.round(G / ((L = (k = r.value) == null ? void 0 : k.ratio) != null ? L : 1));
          ($ = i.value) == null || $.setOffset(fe);
        }
        if (J > 0) {
          const fe = Math.round(J / ((E = (V = r.value) == null ? void 0 : V.ratio) != null ? E : 1));
          (T = a.value) == null || T.setOffset(fe);
        }
      }
    };
    Oe(() => {
      p();
    });
    const b = () => {
      p();
    }, y = (k) => {
      var L, $, V, E, T, P;
      if (l.value) {
        if (d.value && !e.disableHorizontal) {
          const g = Math.round(l.value.scrollLeft / (($ = (L = o.value) == null ? void 0 : L.ratio) != null ? $ : 1));
          (V = a.value) == null || V.setOffset(g);
        }
        if (f.value && !e.disableVertical) {
          const g = Math.round(l.value.scrollTop / ((T = (E = r.value) == null ? void 0 : E.ratio) != null ? T : 1));
          (P = i.value) == null || P.setOffset(g);
        }
      }
      t("scroll", k);
    }, D = (k) => {
      var L, $;
      l.value && l.value.scrollTo({
        left: k * (($ = (L = o.value) == null ? void 0 : L.ratio) != null ? $ : 1)
      });
    }, A = (k) => {
      var L, $;
      l.value && l.value.scrollTo({
        top: k * (($ = (L = r.value) == null ? void 0 : L.ratio) != null ? $ : 1)
      });
    }, S = v(() => {
      const k = {};
      return e.type === "track" && (d.value && (k.paddingBottom = `${il}px`), f.value && (k.paddingRight = `${il}px`)), [k, e.outerStyle];
    }), w = v(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: m.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: w,
      style: S,
      containerRef: l,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: o,
      verticalData: r,
      isBoth: m,
      hasHorizontalScrollbar: d,
      hasVerticalScrollbar: f,
      handleResize: b,
      handleScroll: y,
      handleHorizontalScroll: D,
      handleVerticalScroll: A
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, l;
      Ve(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((l = this.$refs.containerRef) == null || l.scrollTo(e, t));
    },
    scrollTop(e) {
      var t;
      (t = this.$refs.containerRef) == null || t.scrollTo({
        top: e
      });
    },
    scrollLeft(e) {
      var t;
      (t = this.$refs.containerRef) == null || t.scrollTo({
        left: e
      });
    }
  }
});
function zd(e, t, n, l, o, r) {
  const a = ce("ResizeObserver"), i = ce("thumb");
  return _(), I("div", {
    class: K(e.cls),
    style: ge(e.style)
  }, [c(a, {
    onResize: e.handleResize
  }, {
    default: ne(() => [h("div", Se({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [c(a, {
      onResize: e.handleResize
    }, {
      default: ne(() => [re(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (_(), de(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : le("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (_(), de(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : le("v-if", !0)], 6);
}
var Vo = /* @__PURE__ */ se(Dd, [["render", zd]]);
const Ad = Object.assign(Vo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Vo.name, Vo);
  }
}), Ld = (e) => {
  const t = B(), n = () => Bi(t.value) ? t.value.$refs[e] : t.value, l = B();
  return Oe(() => {
    l.value = n();
  }), be([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Fd = Object.defineProperty, yr = Object.getOwnPropertySymbols, Nd = Object.prototype.hasOwnProperty, Rd = Object.prototype.propertyIsEnumerable, _r = (e, t, n) => t in e ? Fd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, qd = (e, t) => {
  for (var n in t || (t = {}))
    Nd.call(t, n) && _r(e, n, t[n]);
  if (yr)
    for (var n of yr(t))
      Rd.call(t, n) && _r(e, n, t[n]);
  return e;
};
const Hd = (e) => {
  const t = v(() => Boolean(e.value)), n = v(() => {
    if (e.value)
      return qd({
        type: "embed"
      }, Wl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Wd = N({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Ad,
    Empty: xd,
    Spin: Pd
  },
  props: {
    loading: Boolean,
    empty: Boolean,
    virtualList: Boolean,
    bottomOffset: {
      type: Number,
      default: 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: !0
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: !1
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    var l, o, r;
    const {
      scrollbar: a
    } = $e(e), i = ee("select-dropdown"), s = We(on, void 0), u = (r = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: d,
      elementRef: f
    } = Ld("containerRef"), {
      displayScrollbar: m,
      scrollbarProps: p
    } = Hd(a), b = (D) => {
      const {
        scrollTop: A,
        scrollHeight: S,
        offsetHeight: w
      } = D.target;
      S - (A + w) <= e.bottomOffset && t("reachBottom", D), t("scroll", D);
    }, y = v(() => [i, {
      [`${i}-has-header`]: Boolean(n.header),
      [`${i}-has-footer`]: Boolean(n.footer)
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: y,
      wrapperRef: f,
      wrapperComRef: d,
      handleScroll: b,
      displayScrollbar: m,
      scrollbarProps: p
    };
  }
});
function Ud(e, t, n, l, o, r) {
  const a = ce("spin");
  return _(), I("div", {
    class: K(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (_(), I("div", {
    key: 0,
    class: K(`${e.prefixCls}-header`)
  }, [re(e.$slots, "header")], 2)) : le("v-if", !0), e.loading ? (_(), de(a, {
    key: 1,
    class: K(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (_(), I("div", {
    key: 2,
    class: K(`${e.prefixCls}-empty`)
  }, [re(e.$slots, "empty", {}, () => [(_(), de(tn(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : le("v-if", !0), e.virtualList && !e.loading && !e.empty ? re(e.$slots, "virtual-list", {
    key: 3
  }) : le("v-if", !0), e.virtualList ? le("v-if", !0) : Hn((_(), de(tn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Se({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: ne(() => [h("ul", {
      class: K(`${e.prefixCls}-list`)
    }, [re(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[ba, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (_(), I("div", {
    key: 5,
    class: K(`${e.prefixCls}-footer`)
  }, [re(e.$slots, "footer")], 2)) : le("v-if", !0)], 2);
}
var Kd = /* @__PURE__ */ se(Wd, [["render", Ud]]), $r = N({
  name: "IconCheck",
  render() {
    return c("svg", {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200",
      fill: "currentColor"
    }, [c("path", {
      d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const Xi = Symbol("ArcoCheckboxGroup");
var ml = N({
  name: "Checkbox",
  components: {
    IconCheck: $r,
    IconHover: ct
  },
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !1
    },
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    uninjectGroupContext: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      disabled: l,
      modelValue: o
    } = $e(e), r = ee("checkbox"), a = B(), i = e.uninjectGroupContext ? void 0 : We(Xi, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: d
    } = vt({
      disabled: l
    }), f = B(e.defaultChecked), m = v(() => {
      var k;
      return s ? i == null ? void 0 : i.computedValue : (k = e.modelValue) != null ? k : f.value;
    }), p = v(() => {
      var k;
      return ze(m.value) ? m.value.includes((k = e.value) != null ? k : !0) : m.value;
    }), b = v(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !p.value && (i == null ? void 0 : i.isMaxed)), y = (k) => {
      k.stopPropagation();
    }, D = (k) => {
      var L, $, V, E;
      const {
        checked: T
      } = k.target;
      let P = T;
      if (ze(m.value)) {
        const g = new Set(m.value);
        T ? g.add((L = e.value) != null ? L : !0) : g.delete(($ = e.value) != null ? $ : !0), P = Array.from(g);
      }
      f.value = T, s && ze(P) ? i == null || i.handleChange(P, k) : (t("update:modelValue", P), t("change", P, k), (E = (V = d.value) == null ? void 0 : V.onChange) == null || E.call(V, k)), Le(() => {
        a.value && a.value.checked !== p.value && (a.value.checked = p.value);
      });
    }, A = v(() => [r, {
      [`${r}-checked`]: p.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: b.value
    }]), S = (k) => {
      var L, $;
      ($ = (L = d.value) == null ? void 0 : L.onFocus) == null || $.call(L, k);
    }, w = (k) => {
      var L, $;
      ($ = (L = d.value) == null ? void 0 : L.onBlur) == null || $.call(L, k);
    };
    return be(o, (k) => {
      (Ye(k) || Vn(k)) && (f.value = !1);
    }), be(m, (k) => {
      var L;
      let $;
      ze(k) ? $ = k.includes((L = e.value) != null ? L : !0) : $ = k, f.value !== $ && (f.value = $), a.value && a.value.checked !== $ && (a.value.checked = $);
    }), () => {
      var k, L, $, V;
      return c("label", {
        "aria-disabled": b.value,
        class: A.value
      }, [c("input", {
        ref: a,
        type: "checkbox",
        checked: p.value,
        value: e.value,
        class: `${r}-target`,
        disabled: b.value,
        onClick: y,
        onChange: D,
        onFocus: S,
        onBlur: w
      }, null), (V = ($ = (L = n.checkbox) != null ? L : (k = i == null ? void 0 : i.slots) == null ? void 0 : k.checkbox) == null ? void 0 : $({
        checked: p.value,
        disabled: b.value
      })) != null ? V : c(ct, {
        class: `${r}-icon-hover`,
        disabled: b.value || p.value
      }, {
        default: () => [c("div", {
          class: `${r}-icon`
        }, [p.value && c($r, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && c("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), Eo = N({
  name: "CheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      disabled: l
    } = $e(e), o = ee("checkbox-group"), {
      mergedDisabled: r,
      eventHandlers: a
    } = vt({
      disabled: l
    }), i = B(e.defaultValue), s = v(() => ze(e.modelValue) ? e.modelValue : i.value), u = v(() => e.max === void 0 ? !1 : s.value.length >= e.max), d = v(() => {
      var b;
      return ((b = e.options) != null ? b : []).map((y) => wt(y) || me(y) ? {
        label: y,
        value: y
      } : y);
    });
    Ht(Xi, Ie({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (b, y) => {
        var D, A;
        i.value = b, t("update:modelValue", b), t("change", b, y), (A = (D = a.value) == null ? void 0 : D.onChange) == null || A.call(D, y);
      }
    }));
    const m = v(() => [o, `${o}-direction-${e.direction}`]);
    be(() => e.modelValue, (b) => {
      ze(b) ? i.value = [...b] : i.value = [];
    });
    const p = () => d.value.map((b) => {
      const y = s.value.includes(b.value);
      return c(ml, {
        key: b.value,
        value: b.value,
        disabled: b.disabled || !y && u.value,
        indeterminate: b.indeterminate,
        modelValue: y
      }, {
        default: () => [n.label ? n.label({
          data: b
        }) : Ze(b.label) ? b.label() : b.label]
      });
    });
    return () => {
      var b;
      return c("span", {
        class: m.value
      }, [d.value.length > 0 ? p() : (b = n.default) == null ? void 0 : b.call(n)]);
    };
  }
});
const Yd = Object.assign(ml, {
  Group: Eo,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + ml.name, ml), e.component(n + Eo.name, Eo);
  }
}), Zi = Symbol("ArcoSelectContext");
var Gd = Object.defineProperty, Xd = Object.defineProperties, Zd = Object.getOwnPropertyDescriptors, wr = Object.getOwnPropertySymbols, Qd = Object.prototype.hasOwnProperty, Jd = Object.prototype.propertyIsEnumerable, kr = (e, t, n) => t in e ? Gd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xa = (e, t) => {
  for (var n in t || (t = {}))
    Qd.call(t, n) && kr(e, n, t[n]);
  if (wr)
    for (var n of wr(t))
      Jd.call(t, n) && kr(e, n, t[n]);
  return e;
}, Qi = (e, t) => Xd(e, Zd(t));
const ef = (e) => Ve(e) && "isGroup" in e, Ji = (e) => Ve(e) && "isGroup" in e, tf = (e, t = "value") => String(Ve(e) ? e[t] : e), Un = (e, t = "value") => Ve(e) ? `__arco__option__object__${e[t]}` : e || me(e) || wt(e) || Wl(e) ? `__arco__option__${typeof e}-${e}` : "", nf = (e) => e.has("__arco__option__string-"), lf = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var r;
  if (Ve(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: o,
      key: Un(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : tf(i, t),
      render: e[n.render],
      disabled: Boolean(e[n.disabled]),
      tagProps: e[n.tagProps]
    };
  }
  const a = {
    value: e,
    label: String(e),
    disabled: !1
  };
  return xa({
    raw: a,
    index: o,
    key: Un(e, t),
    origin: l
  }, a);
}, ua = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (ef(i)) {
      const s = ua((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(Qi(xa({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = lf(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, Cr = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var r;
    const a = [];
    for (const i of o)
      if (Ji(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && a.push(Qi(xa({}, i), {
          options: s
        }));
      } else
        Yl(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return l(e);
}, Yl = (e, {
  inputValue: t,
  filterOption: n
}) => Ze(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, of = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Ba(e[n], t[n]))
      return !1;
  return !0;
}, af = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!Ba(e[l], t[l]))
      return !1;
  return !0;
}, Ba = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? of(e, t) : n === "[object Array]" ? af(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, rf = N({
  name: "Option",
  components: {
    Checkbox: Yd
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: void 0
    },
    label: String,
    disabled: Boolean,
    tagProps: {
      type: Object
    },
    extra: {
      type: Object
    },
    index: {
      type: Number
    },
    internal: Boolean
  },
  setup(e) {
    const {
      disabled: t,
      tagProps: n,
      index: l
    } = $e(e), o = ee("select-option"), r = We(Zi, void 0), a = Yn(), i = B(), s = B(n.value);
    be(n, ($, V) => {
      Ba($, V) || (s.value = $);
    });
    const u = B(""), d = v(() => {
      var $, V;
      return (V = ($ = e.value) != null ? $ : e.label) != null ? V : u.value;
    }), f = v(() => {
      var $;
      return ($ = e.label) != null ? $ : u.value;
    }), m = v(() => Un(d.value, r == null ? void 0 : r.valueKey)), p = v(() => {
      var $;
      return ($ = r == null ? void 0 : r.component) != null ? $ : "li";
    }), b = () => {
      var $;
      if (!e.label && i.value) {
        const V = ($ = i.value.textContent) != null ? $ : "";
        u.value !== V && (u.value = V);
      }
    };
    Oe(() => b()), Pt(() => b());
    const y = v(() => {
      var $;
      return ($ = r == null ? void 0 : r.valueKeys.includes(m.value)) != null ? $ : !1;
    }), D = v(() => (r == null ? void 0 : r.activeKey) === m.value);
    let A = B(!0);
    if (!e.internal) {
      const $ = Ie({
        raw: {
          value: d,
          label: f,
          disabled: t,
          tagProps: s
        },
        ref: i,
        index: l,
        key: m,
        origin: "slot",
        value: d,
        label: f,
        disabled: t,
        tagProps: s
      });
      A = v(() => Yl($, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, $)), Wt(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const S = ($) => {
      e.disabled || r == null || r.onSelect(m.value, $);
    }, w = () => {
      e.disabled || r == null || r.setActiveKey(m.value);
    }, k = () => {
      e.disabled || r == null || r.setActiveKey();
    }, L = v(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: y.value,
      [`${o}-active`]: D.value,
      [`${o}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: o,
      cls: L,
      selectCtx: r,
      itemRef: i,
      component: p,
      isSelected: y,
      isValid: A,
      handleClick: S,
      handleMouseEnter: w,
      handleMouseLeave: k
    };
  }
});
function sf(e, t, n, l, o, r) {
  const a = ce("checkbox");
  return Hn((_(), de(tn(e.component), {
    ref: "itemRef",
    class: K([e.cls, {
      [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix)
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: ne(() => [e.$slots.icon ? (_(), I("span", {
      key: 0,
      class: K(`${e.prefixCls}-icon`)
    }, [re(e.$slots, "icon")], 2)) : le("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (_(), de(a, {
      key: 1,
      class: K(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: ne(() => [re(e.$slots, "default", {}, () => [pe(ye(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (_(), I("span", {
      key: 2,
      class: K(`${e.prefixCls}-content`)
    }, [re(e.$slots, "default", {}, () => [pe(ye(e.label), 1)])], 2)), e.$slots.suffix ? (_(), I("span", {
      key: 3,
      class: K(`${e.prefixCls}-suffix`)
    }, [re(e.$slots, "suffix")], 2)) : le("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[ba, e.isValid]]);
}
var mn = /* @__PURE__ */ se(rf, [["render", sf]]), uf = Object.defineProperty, cf = Object.defineProperties, df = Object.getOwnPropertyDescriptors, Sr = Object.getOwnPropertySymbols, ff = Object.prototype.hasOwnProperty, pf = Object.prototype.propertyIsEnumerable, Vr = (e, t, n) => t in e ? uf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    ff.call(t, n) && Vr(e, n, t[n]);
  if (Sr)
    for (var n of Sr(t))
      pf.call(t, n) && Vr(e, n, t[n]);
  return e;
}, vf = (e, t) => cf(e, df(t));
const hf = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, mf = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: r,
  fieldNames: a
}) => {
  const i = v(() => Oo(Oo({}, hf), a == null ? void 0 : a.value)), s = Ie(/* @__PURE__ */ new Map()), u = v(() => Array.from(s.values()).sort((w, k) => me(w.index) && me(k.index) ? w.index - k.index : 0)), d = v(() => {
    var w, k;
    const L = /* @__PURE__ */ new Map();
    return {
      optionInfos: ua((w = e == null ? void 0 : e.value) != null ? w : [], {
        valueKey: (k = r == null ? void 0 : r.value) != null ? k : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: L
      }),
      optionInfoMap: L
    };
  }), f = v(() => {
    var w, k;
    const L = /* @__PURE__ */ new Map();
    return {
      optionInfos: ua((w = t == null ? void 0 : t.value) != null ? w : [], {
        valueKey: (k = r == null ? void 0 : r.value) != null ? k : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: L
      }),
      optionInfoMap: L
    };
  }), m = Ie(/* @__PURE__ */ new Map());
  be([u, e ?? B([]), t ?? B([]), r ?? B("value")], () => {
    m.clear(), u.value.forEach((w, k) => {
      m.set(w.key, vf(Oo({}, w), {
        index: k
      }));
    }), d.value.optionInfoMap.forEach((w) => {
      m.has(w.key) || (w.index = m.size, m.set(w.key, w));
    }), f.value.optionInfoMap.forEach((w) => {
      m.has(w.key) || (w.index = m.size, m.set(w.key, w));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const p = v(() => {
    var w;
    const k = Cr(d.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((w = o == null ? void 0 : o.value) == null || w) && k.push(...Cr(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), k;
  }), b = v(() => Array.from(m.values()).filter((w) => w.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Yl(w, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), y = v(() => b.value.filter((w) => !w.disabled).map((w) => w.key));
  return {
    validOptions: p,
    optionInfoMap: m,
    validOptionInfos: b,
    enabledOptionKeys: y,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (w, k) => {
      s.set(w, k);
    },
    removeSlotOptionInfo: (w) => {
      s.delete(w);
    }
  };
}, pn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, Er = (e) => JSON.stringify({
  key: e.key,
  ctrl: Boolean(e.ctrl),
  shift: Boolean(e.shift),
  alt: Boolean(e.alt),
  meta: Boolean(e.meta)
}), es = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = wt(l) ? {
      key: l
    } : l;
    t[Er(o)] = n;
  }), (n) => {
    const l = Er({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, gf = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: l,
  filterOption: o,
  showExtraOptions: r,
  component: a,
  valueKey: i,
  fieldNames: s,
  loading: u,
  popupVisible: d,
  valueKeys: f,
  dropdownRef: m,
  optionRefs: p,
  virtualListRef: b,
  onSelect: y,
  onPopupVisibleChange: D,
  enterToOpen: A = !0,
  defaultActiveFirstOption: S
}) => {
  const {
    validOptions: w,
    optionInfoMap: k,
    validOptionInfos: L,
    enabledOptionKeys: $,
    getNextSlotOptionIndex: V,
    addSlotOptionInfo: E,
    removeSlotOptionInfo: T
  } = mf({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), P = B();
  be($, (Y) => {
    (!P.value || !Y.includes(P.value)) && (P.value = Y[0]);
  });
  const g = (Y) => {
    P.value = Y;
  }, x = (Y) => {
    const G = $.value.length;
    if (G === 0)
      return;
    if (!P.value)
      return Y === "down" ? $.value[0] : $.value[G - 1];
    const J = $.value.indexOf(P.value), W = (G + J + (Y === "up" ? -1 : 1)) % G;
    return $.value[W];
  }, O = (Y) => {
    var G, J;
    b != null && b.value && b.value.scrollTo({
      key: Y
    });
    const W = k.get(Y), te = (G = m == null ? void 0 : m.value) == null ? void 0 : G.wrapperRef, M = (J = p == null ? void 0 : p.value[Y]) != null ? J : W == null ? void 0 : W.ref;
    if (!te || !M || te.scrollHeight === te.offsetHeight)
      return;
    const C = Bu(M, te), H = te.scrollTop;
    C.top < 0 ? te.scrollTo(0, H + C.top) : C.bottom < 0 && te.scrollTo(0, H - C.bottom);
  };
  be(d, (Y) => {
    var G;
    if (Y) {
      const J = f.value[f.value.length - 1];
      let W = (G = S == null ? void 0 : S.value) == null || G ? $.value[0] : void 0;
      $.value.includes(J) && (W = J), W !== P.value && (P.value = W), Le(() => {
        P.value && O(P.value);
      });
    }
  });
  const U = es(/* @__PURE__ */ new Map([[pn.ENTER, (Y) => {
    !(u != null && u.value) && !Y.isComposing && (d.value ? P.value && (y(P.value, Y), Y.preventDefault()) : A && (D(!0), Y.preventDefault()));
  }], [pn.ESC, (Y) => {
    d.value && (D(!1), Y.preventDefault());
  }], [pn.ARROW_DOWN, (Y) => {
    if (d.value) {
      const G = x("down");
      G && (P.value = G, O(G)), Y.preventDefault();
    }
  }], [pn.ARROW_UP, (Y) => {
    if (d.value) {
      const G = x("up");
      G && (P.value = G, O(G)), Y.preventDefault();
    }
  }]]));
  return Ht(Zi, Ie({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: f,
    activeKey: P,
    setActiveKey: g,
    onSelect: y,
    getNextSlotOptionIndex: V,
    addSlotOptionInfo: E,
    removeSlotOptionInfo: T
  })), {
    validOptions: w,
    optionInfoMap: k,
    validOptionInfos: L,
    enabledOptionKeys: $,
    activeKey: P,
    setActiveKey: g,
    addSlotOptionInfo: E,
    removeSlotOptionInfo: T,
    getNextActiveKey: x,
    scrollIntoView: O,
    handleKeyDown: U
  };
}, bf = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const r = B(0), a = /* @__PURE__ */ new Map(), i = v(() => e.value.length), s = B(0), u = v(() => {
    const V = s.value + o.value * 3;
    return V > i.value ? i.value : V;
  }), d = v(() => {
    const V = i.value - o.value * 3;
    return V < 0 ? 0 : V;
  }), f = (V) => {
    V < 0 ? s.value = 0 : V > d.value ? s.value = d.value : s.value = V;
  }, m = B(n.value), p = v(() => l.value !== 30 ? l.value : r.value || l.value), b = (V, E) => {
    a.set(V, E);
  }, y = (V) => {
    var E;
    if (m.value)
      return p.value;
    const T = e.value[V];
    return (E = a.get(T)) != null ? E : p.value;
  }, D = (V) => a.has(V);
  Oe(() => {
    const V = Array.from(a.values()).reduce((E, T) => E + T, 0);
    V > 0 && (r.value = V / a.size);
  });
  const A = (V) => m.value ? p.value * V : S(0, V), S = (V, E) => {
    let T = 0;
    for (let P = V; P < E; P++)
      T += y(P);
    return T;
  }, w = v(() => m.value ? p.value * s.value : S(0, s.value)), k = (V) => {
    const E = V >= w.value;
    let T = Math.abs(V - w.value);
    const P = E ? s.value : s.value - 1;
    let g = 0;
    for (; T > 0; )
      T -= y(P + g), E ? g++ : g--;
    return g;
  }, L = (V) => {
    const E = k(V), T = s.value + E - o.value;
    return T < 0 ? 0 : T > d.value ? d.value : T;
  }, $ = v(() => m.value ? p.value * (i.value - u.value) : S(u.value, i.value));
  return {
    frontPadding: w,
    behindPadding: $,
    start: s,
    end: u,
    getStartByScroll: L,
    setItemSize: b,
    hasItemSize: D,
    setStart: f,
    getScrollOffset: A
  };
};
var yf = N({
  name: "VirtualListItem",
  props: {
    hasItemSize: {
      type: Function,
      required: !0
    },
    setItemSize: {
      type: Function,
      required: !0
    }
  },
  setup(e, {
    slots: t
  }) {
    var n;
    const l = (n = Yn()) == null ? void 0 : n.vnode.key, o = B(), r = () => {
      var a, i, s, u;
      const d = (i = (a = o.value) == null ? void 0 : a.$el) != null ? i : o.value, f = (u = (s = d == null ? void 0 : d.getBoundingClientRect) == null ? void 0 : s.call(d).height) != null ? u : d == null ? void 0 : d.offsetHeight;
      f && e.setItemSize(l, f);
    };
    return Oe(() => r()), Wt(() => r()), () => {
      var a;
      const i = hn((a = t.default) == null ? void 0 : a.call(t));
      return i ? ql(i, {
        ref: o
      }, !0) : null;
    };
  }
}), _f = Object.defineProperty, Or = Object.getOwnPropertySymbols, $f = Object.prototype.hasOwnProperty, wf = Object.prototype.propertyIsEnumerable, xr = (e, t, n) => t in e ? _f(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, kf = (e, t) => {
  for (var n in t || (t = {}))
    $f.call(t, n) && xr(e, n, t[n]);
  if (Or)
    for (var n of Or(t))
      wf.call(t, n) && xr(e, n, t[n]);
  return e;
};
const Cf = N({
  name: "VirtualList",
  components: {
    VirtualListItem: yf
  },
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    data: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 0
    },
    itemKey: {
      type: String,
      default: "key"
    },
    fixedSize: {
      type: Boolean,
      default: !1
    },
    estimatedSize: {
      type: Number,
      default: 30
    },
    buffer: {
      type: Number,
      default: 10
    },
    component: {
      type: [String, Object],
      default: "div"
    },
    listAttrs: {
      type: Object
    },
    contentAttrs: {
      type: Object
    },
    paddingPosition: {
      type: String,
      default: "content"
    }
  },
  emits: {
    scroll: (e) => !0,
    reachBottom: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      data: n,
      itemKey: l,
      fixedSize: o,
      estimatedSize: r,
      buffer: a,
      height: i
    } = $e(e), s = ee("virtual-list"), u = v(() => Ve(e.component) ? kf({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), d = B(), f = B(), m = v(() => ({
      height: me(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), p = v(() => n.value.map((P, g) => {
      var x;
      return (x = P[l.value]) != null ? x : g;
    })), {
      frontPadding: b,
      behindPadding: y,
      start: D,
      end: A,
      getStartByScroll: S,
      setItemSize: w,
      hasItemSize: k,
      setStart: L,
      getScrollOffset: $
    } = bf({
      dataKeys: p,
      contentRef: f,
      fixedSize: o,
      estimatedSize: r,
      buffer: a
    }), V = v(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(D.value, A.value)), E = (P) => {
      const {
        scrollTop: g,
        scrollHeight: x,
        offsetHeight: O
      } = P.target, U = S(g);
      U !== D.value && (L(U), Le(() => {
        T(g);
      })), t("scroll", P), Math.floor(x - (g + O)) <= 0 && t("reachBottom", P);
    }, T = (P) => {
      var g, x;
      if (d.value)
        if (me(P))
          d.value.scrollTop = P;
        else {
          const O = (x = P.index) != null ? x : p.value.indexOf((g = P.key) != null ? g : "");
          L(O - a.value), d.value.scrollTop = $(O), Le(() => {
            if (d.value) {
              const U = $(O);
              U !== d.value.scrollTop && (d.value.scrollTop = U);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: d,
      contentRef: f,
      frontPadding: b,
      currentList: V,
      behindPadding: y,
      onScroll: E,
      setItemSize: w,
      hasItemSize: k,
      start: D,
      scrollTo: T,
      style: m,
      mergedComponent: u
    };
  }
});
function Sf(e, t, n, l, o, r) {
  const a = ce("VirtualListItem");
  return _(), de(tn(e.mergedComponent.container), {
    ref: "containerRef",
    class: K(e.prefixCls),
    style: ge(e.style),
    onScroll: e.onScroll
  }, {
    default: ne(() => [(_(), de(tn(e.mergedComponent.list), Se(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: ne(() => [(_(), de(tn(e.mergedComponent.content), Se({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: ne(() => [(_(!0), I(Pe, null, bt(e.currentList, (i, s) => {
          var u;
          return _(), de(a, {
            key: (u = i[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: ne(() => [re(e.$slots, "item", {
              item: i,
              index: e.start + s
            })]),
            _: 2
          }, 1032, ["has-item-size", "set-item-size"]);
        }), 128))]),
        _: 3
      }, 16, ["style"]))]),
      _: 3
    }, 16, ["style"]))]),
    _: 3
  }, 8, ["class", "style", "onScroll"]);
}
var Vf = /* @__PURE__ */ se(Cf, [["render", Sf]]);
const Ef = N({
  name: "IconDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Of = ["stroke-width", "stroke-linecap", "stroke-linejoin"], xf = /* @__PURE__ */ h("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Bf = [xf];
function If(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Bf, 14, Of);
}
var xo = /* @__PURE__ */ se(Ef, [["render", If]]);
const Ia = Object.assign(xo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xo.name, xo);
  }
}), Pf = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = B((l = t == null ? void 0 : t.value) != null ? l : !1), r = v(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : o.value;
  }), a = (i) => {
    i !== r.value && (o.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return be(r, (i) => {
    o.value !== i && (o.value = i);
  }), {
    computedPopupVisible: r,
    handlePopupVisibleChange: a
  };
}, jf = N({
  name: "IconRight",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Tf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Mf = /* @__PURE__ */ h("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Df = [Mf];
function zf(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Df, 14, Tf);
}
var Bo = /* @__PURE__ */ se(jf, [["render", zf]]);
const Af = Object.assign(Bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Bo.name, Bo);
  }
}), Lf = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: o = "update:modelValue",
  eventHandlers: r
}) => {
  var a;
  const i = B(), s = B((a = e == null ? void 0 : e.value) != null ? a : ""), u = B(!1), d = B(!1), f = B("");
  let m;
  const p = v(() => {
    var $;
    return ($ = t == null ? void 0 : t.value) != null ? $ : s.value;
  }), b = ($, V) => {
    s.value = $, n(o, $), n(l, $, V);
  }, y = ($) => {
    const {
      value: V
    } = $.target;
    d.value || (b(V, $), Le(() => {
      i.value && p.value !== i.value.value && (i.value.value = p.value);
    }));
  }, D = ($) => {
    l === "input" && p.value !== m && (m = p.value, n("change", p.value, $));
  }, A = ($) => {
    var V;
    const {
      value: E
    } = $.target;
    $.type === "compositionend" ? (d.value = !1, f.value = "", b(E, $), Le(() => {
      i.value && p.value !== i.value.value && (i.value.value = p.value);
    })) : (d.value = !0, f.value = p.value + ((V = $.data) != null ? V : ""));
  }, S = ($) => {
    var V, E;
    u.value = !0, m = p.value, n("focus", $), (E = (V = r == null ? void 0 : r.value) == null ? void 0 : V.onFocus) == null || E.call(V, $);
  }, w = ($) => {
    var V, E;
    u.value = !1, n("blur", $), (E = (V = r == null ? void 0 : r.value) == null ? void 0 : V.onBlur) == null || E.call(V, $), D($);
  }, k = ($) => {
    const V = $.key || $.code;
    !d.value && V === Ea.key && (n("pressEnter", $), D($));
  }, L = ($) => {
    i.value && $.target !== i.value && ($.preventDefault(), i.value.focus());
  };
  return be(p, ($) => {
    i.value && $ !== i.value.value && (i.value.value = $);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: d,
    compositionValue: f,
    computedValue: p,
    handleInput: y,
    handleComposition: A,
    handleFocus: S,
    handleBlur: w,
    handleKeyDown: k,
    handleMousedown: L
  };
};
var Ff = N({
  name: "InputLabel",
  inheritAttrs: !1,
  props: {
    modelValue: Object,
    inputValue: {
      type: String,
      default: ""
    },
    enabledInput: Boolean,
    formatLabel: Function,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String,
    error: Boolean,
    focused: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
  setup(e, {
    attrs: t,
    emit: n,
    slots: l
  }) {
    var o;
    const {
      size: r,
      disabled: a,
      error: i,
      inputValue: s,
      uninjectFormItemContext: u
    } = $e(e), d = (o = e.baseCls) != null ? o : ee("input-label"), {
      mergedSize: f,
      mergedDisabled: m,
      mergedError: p,
      eventHandlers: b
    } = vt({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: y
    } = yt(f), {
      inputRef: D,
      _focused: A,
      computedValue: S,
      handleInput: w,
      handleComposition: k,
      handleFocus: L,
      handleBlur: $,
      handleMousedown: V
    } = Lf({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: b
    }), E = v(() => {
      var J;
      return (J = e.focused) != null ? J : A.value;
    }), T = v(() => e.enabledInput && A.value || !e.modelValue), P = () => {
      var J, W;
      return e.modelValue ? (W = (J = e.formatLabel) == null ? void 0 : J.call(e, e.modelValue)) != null ? W : e.modelValue.label : "";
    }, g = v(() => e.enabledInput && e.modelValue ? P() : e.placeholder), x = () => {
      var J, W;
      return e.modelValue ? (W = (J = l.default) == null ? void 0 : J.call(l, {
        data: e.modelValue
      })) != null ? W : P() : null;
    }, O = v(() => [d, `${d}-size-${y.value}`, {
      [`${d}-search`]: e.enabledInput,
      [`${d}-focus`]: E.value,
      [`${d}-disabled`]: m.value,
      [`${d}-error`]: p.value
    }]), U = v(() => Xn(t, Rt)), Y = v(() => Zn(t, Rt));
    return {
      inputRef: D,
      render: () => c("span", Se(U.value, {
        class: O.value,
        title: P(),
        onMousedown: V
      }), [l.prefix && c("span", {
        class: `${d}-prefix`
      }, [l.prefix()]), c("input", Se(Y.value, {
        ref: D,
        class: [`${d}-input`, {
          [`${d}-input-hidden`]: !T.value
        }],
        value: S.value,
        readonly: !e.enabledInput,
        placeholder: g.value,
        disabled: m.value,
        onInput: w,
        onFocus: L,
        onBlur: $,
        onCompositionstart: k,
        onCompositionupdate: k,
        onCompositionend: k
      }), null), c("span", {
        class: [`${d}-value`, {
          [`${d}-value-hidden`]: T.value
        }]
      }, [x()]), l.suffix && c("span", {
        class: `${d}-suffix`
      }, [l.suffix()])])
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
}), Nf = Object.defineProperty, Br = Object.getOwnPropertySymbols, Rf = Object.prototype.hasOwnProperty, qf = Object.prototype.propertyIsEnumerable, Ir = (e, t, n) => t in e ? Nf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Hf = (e, t) => {
  for (var n in t || (t = {}))
    Rf.call(t, n) && Ir(e, n, t[n]);
  if (Br)
    for (var n of Br(t))
      qf.call(t, n) && Ir(e, n, t[n]);
  return e;
};
const Wf = (e, t) => {
  const n = [];
  for (const l of e)
    if (Ve(l))
      n.push({
        raw: l,
        value: l[t.value],
        label: l[t.label],
        closable: l[t.closable],
        tagProps: l[t.tagProps]
      });
    else if (e || me(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Hf({
        raw: o
      }, o));
    }
  return n;
}, Pr = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Uf = N({
  name: "Tag",
  components: {
    IconHover: ct,
    IconClose: an,
    IconLoading: Ut
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    },
    checkable: {
      type: Boolean,
      default: !1
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !0
    },
    nowrap: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:visible": (e) => !0,
    "update:checked": (e) => !0,
    close: (e) => !0,
    check: (e, t) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      size: n
    } = $e(e), l = ee("tag"), o = v(() => e.color && Pr.includes(e.color)), r = v(() => e.color && !Pr.includes(e.color)), a = B(e.defaultVisible), i = B(e.defaultChecked), s = v(() => {
      var D;
      return (D = e.visible) != null ? D : a.value;
    }), u = v(() => {
      var D;
      return e.checkable ? (D = e.checked) != null ? D : i.value : !0;
    }), {
      mergedSize: d
    } = yt(n), f = v(() => d.value === "mini" ? "small" : d.value), m = (D) => {
      a.value = !1, t("update:visible", !1), t("close", D);
    }, p = (D) => {
      if (e.checkable) {
        const A = !u.value;
        i.value = A, t("update:checked", A), t("check", A, D);
      }
    }, b = v(() => [l, `${l}-size-${f.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: u.value,
      [`${l}-custom-color`]: r.value
    }]), y = v(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: b,
      style: y,
      computedVisible: s,
      computedChecked: u,
      handleClick: p,
      handleClose: m
    };
  }
});
function Kf(e, t, n, l, o, r) {
  const a = ce("icon-close"), i = ce("icon-hover"), s = ce("icon-loading");
  return e.computedVisible ? (_(), I("span", {
    key: 0,
    class: K(e.cls),
    style: ge(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (_(), I("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon")], 2)) : le("v-if", !0), e.nowrap ? (_(), I("span", {
    key: 1,
    class: K(`${e.prefixCls}-text`)
  }, [re(e.$slots, "default")], 2)) : re(e.$slots, "default", {
    key: 2
  }), e.closable ? (_(), de(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: K(`${e.prefixCls}-close-btn`),
    onClick: nn(e.handleClose, ["stop"])
  }, {
    default: ne(() => [re(e.$slots, "close-icon", {}, () => [c(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : le("v-if", !0), e.loading ? (_(), I("span", {
    key: 4,
    class: K(`${e.prefixCls}-loading-icon`)
  }, [c(s)], 2)) : le("v-if", !0)], 6)) : le("v-if", !0);
}
var Io = /* @__PURE__ */ se(Uf, [["render", Kf]]);
const Yf = Object.assign(Io, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Io.name, Io);
  }
});
var Gf = Object.defineProperty, jr = Object.getOwnPropertySymbols, Xf = Object.prototype.hasOwnProperty, Zf = Object.prototype.propertyIsEnumerable, Tr = (e, t, n) => t in e ? Gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, sl = (e, t) => {
  for (var n in t || (t = {}))
    Xf.call(t, n) && Tr(e, n, t[n]);
  if (jr)
    for (var n of jr(t))
      Zf.call(t, n) && Tr(e, n, t[n]);
  return e;
};
const Qf = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Po = N({
  name: "InputTag",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Array
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    inputValue: String,
    defaultInputValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: [Boolean, Object],
      default: !1
    },
    formatTag: {
      type: Function
    },
    uniqueValue: {
      type: Boolean,
      default: !1
    },
    fieldNames: {
      type: Object
    },
    tagNowrap: {
      type: Boolean,
      default: !1
    },
    baseCls: String,
    focused: Boolean,
    disabledInput: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:inputValue": (e) => !0,
    change: (e, t) => !0,
    inputValueChange: (e, t) => !0,
    pressEnter: (e, t) => !0,
    remove: (e, t) => !0,
    clear: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: l
  }) {
    const {
      size: o,
      disabled: r,
      error: a,
      uninjectFormItemContext: i,
      modelValue: s
    } = $e(e), u = e.baseCls || ee("input-tag"), d = B(), f = B(), {
      mergedSize: m,
      mergedDisabled: p,
      mergedError: b,
      feedback: y,
      eventHandlers: D
    } = vt({
      size: o,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: A
    } = yt(m), S = v(() => sl(sl({}, Qf), e.fieldNames)), w = B(!1), k = B(e.defaultValue), L = B(e.defaultInputValue), $ = B(!1), V = B(""), E = v(() => Ve(e.retainInputValue) ? sl({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), T = Ie({
      width: "12px"
    }), P = v(() => e.focused || w.value), g = (z, X) => {
      L.value = z, t("update:inputValue", z), t("inputValueChange", z, X);
    }, x = (z) => {
      var X;
      const {
        value: oe
      } = z.target;
      z.type === "compositionend" ? ($.value = !1, V.value = "", g(oe, z), Le(() => {
        d.value && U.value !== d.value.value && (d.value.value = U.value);
      })) : ($.value = !0, V.value = U.value + ((X = z.data) != null ? X : ""));
    }, O = v(() => {
      var z;
      return (z = e.modelValue) != null ? z : k.value;
    }), U = v(() => {
      var z;
      return (z = e.inputValue) != null ? z : L.value;
    });
    be(s, (z) => {
      (Ye(z) || Vn(z)) && (k.value = []);
    });
    const Y = (z) => {
      d.value && z.target !== d.value && (z.preventDefault(), d.value.focus());
    }, G = (z) => {
      const {
        value: X
      } = z.target;
      $.value || (g(X, z), Le(() => {
        d.value && U.value !== d.value.value && (d.value.value = U.value);
      }));
    }, J = v(() => Wf(O.value, S.value)), W = v(() => {
      if (e.maxTagCount > 0) {
        const z = J.value.length - e.maxTagCount;
        if (z > 0) {
          const X = J.value.slice(0, e.maxTagCount), oe = {
            value: "__arco__more",
            label: `+${z}...`,
            closable: !1
          };
          return X.push(sl({
            raw: oe
          }, oe)), X;
        }
      }
      return J.value;
    }), te = (z, X) => {
      var oe, Te;
      k.value = z, t("update:modelValue", z), t("change", z, X), (Te = (oe = D.value) == null ? void 0 : oe.onChange) == null || Te.call(oe, X);
    }, M = (z, X, oe) => {
      var Te;
      const Me = (Te = O.value) == null ? void 0 : Te.filter((Et, Ue) => Ue !== X);
      te(Me, oe), t("remove", z, oe);
    }, C = (z) => {
      te([], z), t("clear", z);
    }, H = v(() => !p.value && !e.readonly && e.allowClear && Boolean(O.value.length)), Q = (z) => {
      var X;
      if (U.value) {
        if (z.preventDefault(), e.uniqueValue && ((X = O.value) != null && X.includes(U.value))) {
          t("pressEnter", U.value, z);
          return;
        }
        const oe = O.value.concat(U.value);
        te(oe, z), t("pressEnter", U.value, z), E.value.create || g("", z);
      }
    }, he = (z) => {
      var X, oe;
      w.value = !0, t("focus", z), (oe = (X = D.value) == null ? void 0 : X.onFocus) == null || oe.call(X, z);
    }, we = (z) => {
      var X, oe;
      w.value = !1, !E.value.blur && U.value && g("", z), t("blur", z), (oe = (X = D.value) == null ? void 0 : X.onBlur) == null || oe.call(X, z);
    }, fe = () => {
      for (let z = J.value.length - 1; z >= 0; z--)
        if (J.value[z].closable)
          return z;
      return -1;
    }, Ae = (z) => {
      if (p.value || e.readonly)
        return;
      const X = z.key || z.code;
      if (!$.value && U.value && X === Ea.key && Q(z), !$.value && W.value.length > 0 && !U.value && X === pc.key) {
        const oe = fe();
        oe >= 0 && M(J.value[oe].value, oe, z);
      }
    }, Ce = (z) => {
      z > 12 ? T.width = `${z}px` : T.width = "12px";
    };
    Oe(() => {
      f.value && Ce(f.value.offsetWidth);
    });
    const xe = () => {
      f.value && Ce(f.value.offsetWidth);
    };
    be(U, (z) => {
      d.value && !$.value && z !== d.value.value && (d.value.value = z);
    });
    const dt = v(() => [u, `${u}-size-${A.value}`, {
      [`${u}-disabled`]: p.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: b.value,
      [`${u}-focus`]: P.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: W.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || H.value || y.value,
      [`${u}-has-placeholder`]: !O.value.length
    }]), et = v(() => Xn(l, Rt)), ot = v(() => Zn(l, Rt));
    return {
      inputRef: d,
      render: () => {
        var z;
        return c("span", Se({
          class: dt.value,
          onMousedown: Y
        }, et.value), [c(Ol, {
          onResize: xe
        }, {
          default: () => [c("span", {
            ref: f,
            class: `${u}-mirror`
          }, [W.value.length > 0 ? V.value || U.value : V.value || U.value || e.placeholder])]
        }), n.prefix && c("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), c(Oi, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [W.value.map((X, oe) => c(Yf, Se({
            key: `tag-${X.value}`,
            class: `${u}-tag`,
            closable: !p.value && !e.readonly && X.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, X.tagProps, {
            onClose: (Te) => M(X.value, oe, Te)
          }), {
            default: () => {
              var Te, Me, Et, Ue;
              return [(Ue = (Et = (Te = n.tag) == null ? void 0 : Te.call(n, {
                data: X.raw
              })) != null ? Et : (Me = e.formatTag) == null ? void 0 : Me.call(e, X.raw)) != null ? Ue : X.label];
            }
          })), c("input", Se(ot.value, {
            ref: d,
            key: "input-tag-input",
            class: `${u}-input`,
            style: T,
            placeholder: W.value.length === 0 ? e.placeholder : void 0,
            disabled: p.value,
            readonly: e.readonly || e.disabledInput,
            onInput: G,
            onKeydown: Ae,
            onFocus: he,
            onBlur: we,
            onCompositionstart: x,
            onCompositionupdate: x,
            onCompositionend: x
          }), null)]
        }), H.value && c(ct, {
          class: `${u}-clear-btn`,
          onClick: C,
          onMousedown: (X) => X.stopPropagation()
        }, {
          default: () => [c(an, null, null)]
        }), (n.suffix || Boolean(y.value)) && c("span", {
          class: `${u}-suffix`
        }, [(z = n.suffix) == null ? void 0 : z.call(n), Boolean(y.value) && c(Va, {
          type: y.value
        }, null)])]);
      }
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const Jf = Object.assign(Po, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Po.name, Po);
  }
});
var Mr = N({
  name: "SelectView",
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    inputValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    opened: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    allowSearch: {
      type: Boolean,
      default: (e) => ze(e.modelValue)
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    tagNowrap: {
      type: Boolean,
      default: !1
    },
    retainInputValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove", "clear", "focus", "blur"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      size: l,
      disabled: o,
      error: r
    } = $e(e), a = ee("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: d,
      mergedError: f
    } = vt({
      size: l,
      disabled: o,
      error: r
    }), {
      mergedSize: m
    } = yt(d), {
      opened: p
    } = $e(e), b = B(), y = v(() => {
      var g;
      return (g = b.value) == null ? void 0 : g.inputRef;
    }), D = v(() => e.modelValue.length === 0), A = v(() => e.allowSearch || e.allowCreate), S = v(() => e.allowClear && !e.disabled && !D.value), w = (g) => {
      var x, O;
      t("focus", g), (O = (x = s.value) == null ? void 0 : x.onFocus) == null || O.call(x, g);
    }, k = (g) => {
      var x, O;
      t("blur", g), (O = (x = s.value) == null ? void 0 : x.onBlur) == null || O.call(x, g);
    }, L = (g) => {
      t("remove", g);
    }, $ = (g) => {
      t("clear", g);
    }, V = () => {
      var g, x, O, U;
      return e.loading ? (x = (g = n["loading-icon"]) == null ? void 0 : g.call(n)) != null ? x : c(Ut, null, null) : e.allowSearch && e.opened ? (U = (O = n["search-icon"]) == null ? void 0 : O.call(n)) != null ? U : c(sa, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : c(Ia, {
        class: `${a}-arrow-icon`
      }, null);
    }, E = () => c(Pe, null, [S.value && c(ct, {
      class: `${a}-clear-btn`,
      onClick: $,
      onMousedown: (g) => g.stopPropagation()
    }, {
      default: () => [c(an, null, null)]
    }), c("span", {
      class: `${a}-icon`
    }, [V()]), Boolean(i.value) && c(Va, {
      type: i.value
    }, null)]);
    be(p, (g) => {
      !g && y.value && y.value.isSameNode(document.activeElement) && y.value.blur();
    });
    const T = v(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: y,
      handleFocus: w,
      handleBlur: k,
      render: () => e.multiple ? c(Jf, {
        ref: b,
        baseCls: a,
        class: T.value,
        modelValue: e.modelValue,
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: m.value,
        error: f.value,
        maxTagCount: e.maxTagCount,
        disabledInput: !e.allowSearch && !e.allowCreate,
        tagNowrap: e.tagNowrap,
        retainInputValue: !0,
        uninjectFormItemContext: !0,
        onRemove: L,
        onFocus: w,
        onBlur: k
      }, {
        prefix: n.prefix,
        suffix: E,
        tag: n.label
      }) : c(Ff, {
        ref: b,
        baseCls: a,
        class: T.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: m.value,
        error: f.value,
        enabledInput: A.value,
        uninjectFormItemContext: !0,
        onFocus: w,
        onBlur: k
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: E
      })
    };
  },
  methods: {
    focus() {
      this.inputRef && this.inputRef.focus();
    },
    blur() {
      this.inputRef && this.inputRef.blur();
    }
  },
  render() {
    return this.render();
  }
});
const ep = N({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    return {
      prefixCls: ee("select-group")
    };
  }
});
function tp(e, t, n, l, o, r) {
  return _(), I(Pe, null, [h("li", {
    class: K(`${e.prefixCls}-title`)
  }, [re(e.$slots, "label", {}, () => [pe(ye(e.label), 1)])], 2), re(e.$slots, "default")], 64);
}
var gl = /* @__PURE__ */ se(ep, [["render", tp]]);
const Dr = typeof window > "u" ? global : window;
function np(e, t) {
  let n = 0;
  return (...l) => {
    n && Dr.clearTimeout(n), n = Dr.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var lp = Object.defineProperty, op = Object.defineProperties, ap = Object.getOwnPropertyDescriptors, zr = Object.getOwnPropertySymbols, rp = Object.prototype.hasOwnProperty, ip = Object.prototype.propertyIsEnumerable, Ar = (e, t, n) => t in e ? lp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    rp.call(t, n) && Ar(e, n, t[n]);
  if (zr)
    for (var n of zr(t))
      ip.call(t, n) && Ar(e, n, t[n]);
  return e;
}, sp = (e, t) => op(e, ap(t));
function up(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ya(e);
}
const cp = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var jo = N({
  name: "Select",
  components: {
    Trigger: Bl,
    SelectView: Mr
  },
  inheritAttrs: !1,
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean, Object, Array],
      default: (e) => Ye(e.multiple) ? "" : []
    },
    inputValue: {
      type: String
    },
    defaultInputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    placeholder: String,
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    allowSearch: {
      type: [Boolean, Object],
      default: (e) => Boolean(e.multiple)
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    popupContainer: {
      type: [String, Object]
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: !0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    unmountOnClose: {
      type: Boolean,
      default: !1
    },
    filterOption: {
      type: [Boolean, Function],
      default: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    virtualListProps: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    formatLabel: {
      type: Function
    },
    fallbackOption: {
      type: [Boolean, Function],
      default: !0
    },
    showExtraOptions: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    searchDelay: {
      type: Number,
      default: 500
    },
    limit: {
      type: Number,
      default: 0
    },
    fieldNames: {
      type: Object
    },
    scrollbar: {
      type: [Boolean, Object],
      default: !0
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: !1
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: !1
    },
    tagNowrap: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:inputValue": (e) => !0,
    "update:popupVisible": (e) => !0,
    change: (e) => !0,
    inputValueChange: (e) => !0,
    popupVisibleChange: (e) => !0,
    clear: (e) => !0,
    remove: (e) => !0,
    search: (e) => !0,
    dropdownScroll: (e) => !0,
    dropdownReachBottom: (e) => !0,
    exceedLimit: (e, t) => !0
  },
  setup(e, {
    slots: t,
    emit: n,
    attrs: l
  }) {
    const {
      size: o,
      disabled: r,
      error: a,
      options: i,
      filterOption: s,
      valueKey: u,
      multiple: d,
      popupVisible: f,
      defaultPopupVisible: m,
      showExtraOptions: p,
      modelValue: b,
      fieldNames: y,
      loading: D,
      defaultActiveFirstOption: A
    } = $e(e), S = ee("select"), {
      mergedSize: w,
      mergedDisabled: k,
      mergedError: L,
      eventHandlers: $
    } = vt({
      size: o,
      disabled: r,
      error: a
    }), V = v(() => e.virtualListProps ? "div" : "li"), E = v(() => Ve(e.allowSearch) && Boolean(e.allowSearch.retainInputValue));
    v(() => {
      if (Ze(e.formatLabel))
        return (R) => {
          const j = Me.get(R.value);
          return e.formatLabel(j);
        };
    });
    const T = B(), P = B({}), g = B(), {
      computedPopupVisible: x,
      handlePopupVisibleChange: O
    } = Pf({
      popupVisible: f,
      defaultPopupVisible: m,
      emit: n
    }), U = B(e.defaultValue), Y = v(() => {
      var R;
      const j = (R = e.modelValue) != null ? R : U.value;
      return (ze(j) ? j : j || me(j) || wt(j) || Wl(j) ? [j] : []).map((ae) => ({
        value: ae,
        key: Un(ae, e.valueKey)
      }));
    });
    be(b, (R) => {
      (Ye(R) || Vn(R)) && (U.value = d.value ? [] : R);
    });
    const G = v(() => Y.value.map((R) => R.key)), J = v(() => In(In({}, cp), y == null ? void 0 : y.value)), W = B(), te = (R) => {
      const j = {};
      return R.forEach((q) => {
        j[q] = Me.get(q);
      }), j;
    }, M = (R) => {
      W.value = te(R);
    }, C = (R) => Ze(e.fallbackOption) ? e.fallbackOption(R) : {
      [J.value.value]: R,
      [J.value.label]: String(Ve(R) ? R[u == null ? void 0 : u.value] : R)
    }, H = () => {
      const R = [], j = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const q of Y.value)
          if (!j.includes(q.key) && q.value !== "") {
            const ae = Me.get(q.key);
            (!ae || ae.origin === "extraOptions") && (R.push(q), j.push(q.key));
          }
      }
      if (e.allowCreate && fe.value) {
        const q = Un(fe.value);
        if (!j.includes(q)) {
          const ae = Me.get(q);
          (!ae || ae.origin === "extraOptions") && R.push({
            value: fe.value,
            key: q
          });
        }
      }
      return R;
    }, Q = B([]), he = v(() => Q.value.map((R) => {
      var j;
      let q = C(R.value);
      const ae = (j = W.value) == null ? void 0 : j[R.key];
      return !Ye(ae) && !Ys(ae) && (q = In(In({}, q), ae)), q;
    }));
    Le(() => {
      Ws(() => {
        var R;
        const j = H();
        if (j.length !== Q.value.length)
          Q.value = j;
        else if (j.length > 0) {
          for (let q = 0; q < j.length; q++)
            if (j[q].key !== ((R = Q.value[q]) == null ? void 0 : R.key)) {
              Q.value = j;
              break;
            }
        }
      });
    });
    const we = B(""), fe = v(() => {
      var R;
      return (R = e.inputValue) != null ? R : we.value;
    });
    be(x, (R) => {
      !R && !E.value && fe.value && xe("");
    });
    const Ae = (R) => {
      var j, q;
      return e.multiple ? R.map((ae) => {
        var ft, tt;
        return (tt = (ft = Me.get(ae)) == null ? void 0 : ft.value) != null ? tt : "";
      }) : (q = (j = Me.get(R[0])) == null ? void 0 : j.value) != null ? q : nf(Me) ? void 0 : "";
    }, Ce = (R) => {
      var j, q;
      const ae = Ae(R);
      U.value = ae, n("update:modelValue", ae), n("change", ae), (q = (j = $.value) == null ? void 0 : j.onChange) == null || q.call(j), M(R);
    }, xe = (R) => {
      we.value = R, n("update:inputValue", R), n("inputValueChange", R);
    }, dt = (R, j) => {
      if (e.multiple) {
        if (G.value.includes(R)) {
          const q = G.value.filter((ae) => ae !== R);
          Ce(q);
        } else if (Ue.value.includes(R))
          if (e.limit > 0 && G.value.length >= e.limit) {
            const q = Me.get(R);
            n("exceedLimit", q == null ? void 0 : q.value, j);
          } else {
            const q = G.value.concat(R);
            Ce(q);
          }
        E.value || xe("");
      } else {
        if (R !== G.value[0] && Ce([R]), E.value) {
          const q = Me.get(R);
          q && xe(q.label);
        }
        O(!1);
      }
    }, et = np((R) => {
      n("search", R);
    }, e.searchDelay), ot = (R) => {
      R !== fe.value && (x.value || O(!0), xe(R), e.allowSearch && et(R));
    }, F = (R) => {
      const j = Me.get(R), q = G.value.filter((ae) => ae !== R);
      Ce(q), n("remove", j == null ? void 0 : j.value);
    }, z = (R) => {
      R == null || R.stopPropagation();
      const j = G.value.filter((q) => {
        var ae;
        return (ae = Me.get(q)) == null ? void 0 : ae.disabled;
      });
      Ce(j), xe(""), n("clear", R);
    }, X = (R) => {
      n("dropdownScroll", R);
    }, oe = (R) => {
      n("dropdownReachBottom", R);
    }, {
      validOptions: Te,
      optionInfoMap: Me,
      validOptionInfos: Et,
      enabledOptionKeys: Ue,
      handleKeyDown: lo
    } = gf({
      multiple: d,
      options: i,
      extraOptions: he,
      inputValue: fe,
      filterOption: s,
      showExtraOptions: p,
      component: V,
      valueKey: u,
      fieldNames: y,
      loading: D,
      popupVisible: x,
      valueKeys: G,
      dropdownRef: T,
      optionRefs: P,
      virtualListRef: g,
      defaultActiveFirstOption: A,
      onSelect: dt,
      onPopupVisibleChange: O
    }), oo = v(() => {
      var R;
      const j = [];
      for (const q of Y.value) {
        const ae = Me.get(q.key);
        ae && j.push(sp(In({}, ae), {
          value: q.key,
          label: (R = ae == null ? void 0 : ae.label) != null ? R : String(Ve(q.value) ? q.value[u == null ? void 0 : u.value] : q.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return j;
    }), Bn = (R) => {
      if (Ze(t.option)) {
        const j = t.option;
        return () => j({
          data: R.raw
        });
      }
      return Ze(R.render) ? R.render : () => R.label;
    }, Mt = (R) => {
      if (Ji(R)) {
        let j;
        return c(gl, {
          key: R.key,
          label: R.label
        }, up(j = R.options.map((q) => Mt(q))) ? j : {
          default: () => [j]
        });
      }
      return Yl(R, {
        inputValue: fe.value,
        filterOption: s == null ? void 0 : s.value
      }) ? c(mn, {
        ref: (j) => {
          j != null && j.$el && (P.value[R.key] = j.$el);
        },
        key: R.key,
        value: R.value,
        label: R.label,
        disabled: R.disabled,
        internal: !0
      }, {
        default: Bn(R)
      }) : null;
    }, ll = () => c(Kd, {
      ref: T,
      loading: e.loading,
      empty: Et.value.length === 0,
      virtualList: Boolean(e.virtualListProps),
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: X,
      onReachBottom: oe
    }, {
      default: () => {
        var R, j;
        return [...(j = (R = t.default) == null ? void 0 : R.call(t)) != null ? j : [], ...Te.value.map(Mt)];
      },
      "virtual-list": () => c(Vf, Se(e.virtualListProps, {
        ref: g,
        data: Te.value
      }), {
        item: ({
          item: R
        }) => Mt(R)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), ao = ({
      data: R
    }) => {
      var j, q, ae, ft;
      if ((t.label || Ze(e.formatLabel)) && R) {
        const tt = Me.get(R.value);
        if (tt != null && tt.raw)
          return (ae = (j = t.label) == null ? void 0 : j.call(t, {
            data: tt.raw
          })) != null ? ae : (q = e.formatLabel) == null ? void 0 : q.call(e, tt.raw);
      }
      return (ft = R == null ? void 0 : R.label) != null ? ft : "";
    };
    return () => c(Bl, Se({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: k.value,
      popupVisible: x.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: O
    }, e.triggerProps), {
      default: () => {
        var R, j;
        return [(j = (R = t.trigger) == null ? void 0 : R.call(t)) != null ? j : c(Mr, Se({
          class: S,
          modelValue: oo.value,
          inputValue: fe.value,
          multiple: e.multiple,
          disabled: k.value,
          error: L.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: Boolean(e.allowSearch),
          opened: x.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: w.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: ot,
          onRemove: F,
          onClear: z,
          onKeydown: lo
        }, l), {
          label: ao,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: ll
    });
  }
});
const Pa = Object.assign(jo, {
  Option: mn,
  OptGroup: gl,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + jo.name, jo), e.component(n + mn.name, mn), e.component(n + gl.name, gl);
  }
}), dp = N({
  name: "IconLeft",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), fp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], pp = /* @__PURE__ */ h("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), vp = [pp];
function hp(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, vp, 14, fp);
}
var To = /* @__PURE__ */ se(dp, [["render", hp]]);
const mp = Object.assign(To, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + To.name, To);
  }
}), gp = N({
  name: "IconUp",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), bp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], yp = /* @__PURE__ */ h("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), _p = [yp];
function $p(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, _p, 14, bp);
}
var Mo = /* @__PURE__ */ se(gp, [["render", $p]]);
const ts = Object.assign(Mo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Mo.name, Mo);
  }
}), wp = (e) => {
  const t = {}, n = B([]), l = () => {
    if (t.value) {
      const o = Ni(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return Oe(() => l()), Pt(() => l()), {
    children: t,
    components: n
  };
}, kp = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var Cp = Object.defineProperty, Sp = Object.defineProperties, Vp = Object.getOwnPropertyDescriptors, Lr = Object.getOwnPropertySymbols, Ep = Object.prototype.hasOwnProperty, Op = Object.prototype.propertyIsEnumerable, Fr = (e, t, n) => t in e ? Cp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xp = (e, t) => {
  for (var n in t || (t = {}))
    Ep.call(t, n) && Fr(e, n, t[n]);
  if (Lr)
    for (var n of Lr(t))
      Op.call(t, n) && Fr(e, n, t[n]);
  return e;
}, Bp = (e, t) => Sp(e, Vp(t));
const ns = (e, t, n) => {
  const l = Math.floor(e * 6), o = e * 6 - l, r = n * (1 - t), a = n * (1 - o * t), i = n * (1 - (1 - o) * t), s = l % 6, u = [n, a, r, r, i, n][s], d = [i, n, n, a, r, r][s], f = [r, r, i, n, n, a][s];
  return {
    r: Math.round(u * 255),
    g: Math.round(d * 255),
    b: Math.round(f * 255)
  };
}, Gl = (e, t, n) => {
  e /= 255, t /= 255, n /= 255;
  const l = Math.max(e, t, n), o = Math.min(e, t, n);
  let r = 0;
  const a = l, i = l - o, s = l === 0 ? 0 : i / l;
  if (l === o)
    r = 0;
  else {
    switch (l) {
      case e:
        r = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        r = (n - e) / i + 2;
        break;
      case n:
        r = (e - t) / i + 4;
        break;
    }
    r /= 6;
  }
  return {
    h: r,
    s,
    v: a
  };
}, Ip = "[-\\+]?\\d+%?", Pp = "[-\\+]?\\d*\\.\\d+%?", Jt = `(?:${Pp})|(?:${Ip})`, jp = `[\\s|\\(]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})\\s*\\)?`, Tp = `[\\s|\\(]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})\\s*\\)?`, zt = {
  rgb: new RegExp(`rgb${jp}`),
  rgba: new RegExp(`rgba${Tp}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, Re = (e) => parseInt(e, 16), Nr = (e) => Re(e) / 255, Mp = (e) => {
  let t = zt.rgb.exec(e);
  return t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10)
  } : (t = zt.rgba.exec(e), t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10),
    a: parseFloat(t[4])
  } : (t = zt.hex8.exec(e), t ? {
    r: Re(t[1]),
    g: Re(t[2]),
    b: Re(t[3]),
    a: Nr(t[4])
  } : (t = zt.hex6.exec(e), t ? {
    r: Re(t[1]),
    g: Re(t[2]),
    b: Re(t[3])
  } : (t = zt.hex4.exec(e), t ? {
    r: Re(t[1] + t[1]),
    g: Re(t[2] + t[2]),
    b: Re(t[3] + t[3]),
    a: Nr(t[4] + t[4])
  } : (t = zt.hex3.exec(e), t ? {
    r: Re(t[1] + t[1]),
    g: Re(t[2] + t[2]),
    b: Re(t[3] + t[3])
  } : !1)))));
}, Dp = (e) => {
  var t;
  const n = Mp(e);
  if (n) {
    const l = Gl(n.r, n.g, n.b);
    return Bp(xp({}, l), {
      a: (t = n.a) != null ? t : 1
    });
  }
  return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
}, ls = (e) => {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  let t = zt.hex6.exec(e);
  return t ? {
    r: Re(t[1]),
    g: Re(t[2]),
    b: Re(t[3])
  } : (t = zt.hex3.exec(e), t ? {
    r: Re(t[1] + t[1]),
    g: Re(t[2] + t[2]),
    b: Re(t[3] + t[3])
  } : !1);
}, Rr = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), zp = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), os = ({
  value: e,
  onChange: t
}) => {
  const n = B(!1), l = B(), o = B(), r = (d, f) => d < 0 ? 0 : d > f ? 1 : d / f, a = (d) => {
    if (!l.value)
      return;
    const {
      clientX: f,
      clientY: m
    } = d, p = l.value.getBoundingClientRect(), b = [r(f - p.x, p.width), r(m - p.y, p.height)];
    (b[0] !== e[0] || b[1] !== e[1]) && (t == null || t(b));
  }, i = () => {
    n.value = !1, window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", i), window.removeEventListener("contextmenu", i);
  }, s = (d) => {
    n.value = !0, a(d), window.addEventListener("mousemove", u), window.addEventListener("mouseup", i), window.addEventListener("contextmenu", i);
  };
  function u(d) {
    d.preventDefault(), d.buttons > 0 ? a(d) : i();
  }
  return {
    active: n,
    blockRef: l,
    handlerRef: o,
    onMouseDown: s
  };
};
var qr = N({
  name: "ControlBar",
  props: {
    x: {
      type: Number,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    },
    colorString: String,
    type: String,
    onChange: Function
  },
  setup(e) {
    const t = ee("color-picker"), n = v(() => e.color.rgb), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: r
    } = os({
      value: [e.x, 0],
      onChange: (i) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, i[0]);
      }
    }), a = () => c("div", {
      ref: o,
      class: `${t}-handler`,
      style: {
        left: `${e.x * 100}%`,
        color: e.colorString
      }
    }, null);
    return () => e.type === "alpha" ? c("div", {
      class: `${t}-control-bar-bg`
    }, [c("div", {
      ref: l,
      class: [`${t}-control-bar`, `${t}-control-bar-alpha`],
      style: {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${n.value.r}, ${n.value.g}, ${n.value.b}))`
      },
      onMousedown: r
    }, [a()])]) : c("div", {
      ref: l,
      class: [`${t}-control-bar`, `${t}-control-bar-hue`],
      onMousedown: r
    }, [a()]);
  }
}), Ap = N({
  name: "Palette",
  props: {
    color: {
      type: Object,
      required: !0
    },
    onChange: Function
  },
  setup(e) {
    const t = ee("color-picker"), n = v(() => e.color.hsv), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: r
    } = os({
      value: [n.value.s, 1 - n.value.v],
      onChange: (i) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, i[0], 1 - i[1]);
      }
    }), a = v(() => {
      const i = ns(n.value.h, 1, 1);
      return `rgb(${i.r}, ${i.g}, ${i.b})`;
    });
    return () => c("div", {
      ref: l,
      class: `${t}-palette`,
      style: {
        backgroundColor: a.value
      },
      onMousedown: r
    }, [c("div", {
      ref: o,
      class: `${t}-handler`,
      style: {
        top: `${(1 - n.value.v) * 100}%`,
        left: `${n.value.s * 100}%`
      }
    }, null)]);
  }
});
function ja(e, t) {
  return t === void 0 && (t = 15), +parseFloat(Number(e).toPrecision(t));
}
function kt(e) {
  var t = e.toString().split(/[eE]/), n = (t[0].split(".")[1] || "").length - +(t[1] || 0);
  return n > 0 ? n : 0;
}
function Kn(e) {
  if (e.toString().indexOf("e") === -1)
    return Number(e.toString().replace(".", ""));
  var t = kt(e);
  return t > 0 ? ja(Number(e) * Math.pow(10, t)) : Number(e);
}
function ca(e) {
  rs && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function Xl(e) {
  return function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var l = t[0], o = t.slice(1);
    return o.reduce(function(r, a) {
      return e(r, a);
    }, l);
  };
}
var qt = Xl(function(e, t) {
  var n = Kn(e), l = Kn(t), o = kt(e) + kt(t), r = n * l;
  return ca(r), r / Math.pow(10, o);
}), Lp = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(kt(e), kt(t)));
  return (qt(e, n) + qt(t, n)) / n;
}), Fp = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(kt(e), kt(t)));
  return (qt(e, n) - qt(t, n)) / n;
}), as = Xl(function(e, t) {
  var n = Kn(e), l = Kn(t);
  return ca(n), ca(l), qt(n / l, ja(Math.pow(10, kt(t) - kt(e))));
});
function Np(e, t) {
  var n = Math.pow(10, t), l = as(Math.round(Math.abs(qt(e, n))), n);
  return e < 0 && l !== 0 && (l = qt(l, -1)), l;
}
var rs = !0;
function Rp(e) {
  e === void 0 && (e = !0), rs = e;
}
var ln = {
  strip: ja,
  plus: Lp,
  minus: Fp,
  times: qt,
  divide: as,
  round: Np,
  digitLength: kt,
  float2Fixed: Kn,
  enableBoundaryChecking: Rp
};
const qp = N({
  name: "IconPlus",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Hp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Wp = /* @__PURE__ */ h("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), Up = [Wp];
function Kp(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Up, 14, Hp);
}
var Do = /* @__PURE__ */ se(qp, [["render", Kp]]);
const is = Object.assign(Do, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Do.name, Do);
  }
}), Yp = N({
  name: "IconMinus",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-minus`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Gp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Xp = /* @__PURE__ */ h("path", {
  d: "M5 24h38"
}, null, -1), Zp = [Xp];
function Qp(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Zp, 14, Gp);
}
var zo = /* @__PURE__ */ se(Yp, [["render", Qp]]);
const Jp = Object.assign(zo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zo.name, zo);
  }
});
var ev = Object.defineProperty, Hr = Object.getOwnPropertySymbols, tv = Object.prototype.hasOwnProperty, nv = Object.prototype.propertyIsEnumerable, Wr = (e, t, n) => t in e ? ev(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, lv = (e, t) => {
  for (var n in t || (t = {}))
    tv.call(t, n) && Wr(e, n, t[n]);
  if (Hr)
    for (var n of Hr(t))
      nv.call(t, n) && Wr(e, n, t[n]);
  return e;
};
const ov = 800, av = 150;
ln.enableBoundaryChecking(!1);
var Ao = N({
  name: "InputNumber",
  props: {
    modelValue: Number,
    defaultValue: Number,
    mode: {
      type: String,
      default: "embed"
    },
    precision: Number,
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    min: {
      type: Number,
      default: -1 / 0
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: String,
    hideButton: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    modelEvent: {
      type: String,
      default: "change"
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    inputAttrs: {
      type: Object
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0,
    focus: (e) => !0,
    blur: (e) => !0,
    clear: (e) => !0,
    input: (e, t, n) => !0,
    keydown: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    var l;
    const {
      size: o,
      disabled: r
    } = $e(e), a = ee("input-number"), i = B(), {
      mergedSize: s,
      mergedDisabled: u,
      eventHandlers: d
    } = vt({
      size: o,
      disabled: r
    }), {
      mergedSize: f
    } = yt(s), m = v(() => {
      if (me(e.precision)) {
        const C = `${e.step}`.split(".")[1], H = C && C.length || 0;
        return Math.max(H, e.precision);
      }
    }), p = (C) => {
      var H, Q;
      if (!me(C))
        return "";
      const he = m.value ? C.toFixed(m.value) : String(C);
      return (Q = (H = e.formatter) == null ? void 0 : H.call(e, he)) != null ? Q : he;
    }, b = B(p((l = e.modelValue) != null ? l : e.defaultValue)), y = v(() => {
      var C, H;
      if (!b.value)
        return;
      const Q = Number((H = (C = e.parser) == null ? void 0 : C.call(e, b.value)) != null ? H : b.value);
      return Number.isNaN(Q) ? void 0 : Q;
    }), D = B(me(y.value) && y.value <= e.min), A = B(me(y.value) && y.value >= e.max);
    let S = 0;
    const w = () => {
      S && (window.clearTimeout(S), S = 0);
    }, k = (C) => {
      if (!Ye(C))
        return me(e.min) && C < e.min && (C = e.min), me(e.max) && C > e.max && (C = e.max), me(m.value) ? ln.round(C, m.value) : C;
    }, L = (C) => {
      let H = !1, Q = !1;
      me(C) && (C <= e.min && (H = !0), C >= e.max && (Q = !0)), A.value !== Q && (A.value = Q), D.value !== H && (D.value = H);
    }, $ = () => {
      const C = k(y.value), H = p(C);
      (C !== y.value || b.value !== H) && (b.value = H), t("update:modelValue", C);
    };
    be(() => [e.max, e.min], () => {
      $(), L(y.value);
    });
    const V = (C, H) => {
      if (u.value || C === "plus" && A.value || C === "minus" && D.value)
        return;
      let Q;
      me(y.value) ? Q = k(ln[C](y.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, b.value = p(Q), L(Q), t("update:modelValue", Q), t("change", Q, H);
    }, E = (C, H, Q = !1) => {
      var he;
      C.preventDefault(), (he = i.value) == null || he.focus(), V(H, C), Q && (S = window.setTimeout(() => C.target.dispatchEvent(C), S ? av : ov));
    }, T = (C, H) => {
      var Q, he, we, fe;
      C = C.trim().replace(/。/g, "."), C = (he = (Q = e.parser) == null ? void 0 : Q.call(e, C)) != null ? he : C, (me(Number(C)) || /^(\.|-)$/.test(C)) && (b.value = (fe = (we = e.formatter) == null ? void 0 : we.call(e, C)) != null ? fe : C, L(y.value), t("input", y.value, b.value, H), e.modelEvent === "input" && (t("update:modelValue", y.value), t("change", y.value, H)));
    }, P = (C) => {
      t("focus", C);
    }, g = (C, H) => {
      H instanceof MouseEvent && !C || ($(), t("change", y.value, H));
    }, x = (C) => {
      t("blur", C);
    }, O = (C) => {
      var H, Q;
      b.value = "", t("update:modelValue", void 0), t("change", void 0, C), (Q = (H = d.value) == null ? void 0 : H.onChange) == null || Q.call(H, C), t("clear", C);
    }, U = es(/* @__PURE__ */ new Map([[pn.ARROW_UP, (C) => {
      C.preventDefault(), !e.readOnly && V("plus", C);
    }], [pn.ARROW_DOWN, (C) => {
      C.preventDefault(), !e.readOnly && V("minus", C);
    }]])), Y = (C) => {
      t("keydown", C), C.defaultPrevented || U(C);
    };
    be(() => e.modelValue, (C) => {
      C !== y.value && (b.value = p(C), L(C));
    });
    const G = () => {
      var C, H, Q;
      return e.readOnly ? null : c(Pe, null, [n.suffix && c("div", {
        class: `${a}-suffix`
      }, [(C = n.suffix) == null ? void 0 : C.call(n)]), c("div", {
        class: `${a}-step`
      }, [c("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || A.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || A.value,
        onMousedown: (he) => E(he, "plus", !0),
        onMouseup: w,
        onMouseleave: w
      }, [n.plus ? (H = n.plus) == null ? void 0 : H.call(n) : c(ts, null, null)]), c("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || D.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || D.value,
        onMousedown: (he) => E(he, "minus", !0),
        onMouseup: w,
        onMouseleave: w
      }, [n.minus ? (Q = n.minus) == null ? void 0 : Q.call(n) : c(Ia, null, null)])])]);
    }, J = v(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {
      [`${a}-readonly`]: e.readOnly
    }]), W = () => c(kn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || D.value,
      onMousedown: (C) => E(C, "minus", !0),
      onMouseup: w,
      onMouseleave: w
    }, {
      icon: () => c(Jp, null, null)
    }), te = () => c(kn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || A.value,
      onMousedown: (C) => E(C, "plus", !0),
      onMouseup: w,
      onMouseleave: w
    }, {
      icon: () => c(is, null, null)
    });
    return {
      inputRef: i,
      render: () => {
        const C = e.mode === "embed" ? {
          prepend: n.prepend,
          prefix: n.prefix,
          suffix: e.hideButton ? n.suffix : G,
          append: n.append
        } : {
          prepend: e.hideButton ? n.prepend : W,
          prefix: n.prefix,
          suffix: n.suffix,
          append: e.hideButton ? n.append : te
        };
        return c(Kt, {
          key: `__arco__${e.mode}`,
          ref: i,
          class: J.value,
          type: "text",
          allowClear: e.allowClear,
          size: f.value,
          modelValue: b.value,
          placeholder: e.placeholder,
          disabled: u.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: lv({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": b.value
          }, e.inputAttrs),
          onInput: T,
          onFocus: P,
          onBlur: x,
          onClear: O,
          onChange: g,
          onKeydown: Y
        }, C);
      }
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const St = Object.assign(Ao, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ao.name, Ao);
  }
});
var ss = N({
  name: "InputAlpha",
  props: {
    value: {
      type: Number,
      required: !0
    },
    disabled: Boolean,
    onChange: Function
  },
  setup(e) {
    const t = ee("color-picker");
    return () => c(St, {
      class: `${t}-input-alpha`,
      size: "mini",
      min: 0,
      max: 100,
      disabled: e.disabled,
      modelValue: Math.round(e.value * 100),
      onChange: (n = 100) => {
        var l;
        return (l = e.onChange) == null ? void 0 : l.call(e, n / 100);
      }
    }, {
      suffix: () => "%"
    });
  }
}), rv = Object.defineProperty, Ur = Object.getOwnPropertySymbols, iv = Object.prototype.hasOwnProperty, sv = Object.prototype.propertyIsEnumerable, Kr = (e, t, n) => t in e ? rv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Yr = (e, t) => {
  for (var n in t || (t = {}))
    iv.call(t, n) && Kr(e, n, t[n]);
  if (Ur)
    for (var n of Ur(t))
      sv.call(t, n) && Kr(e, n, t[n]);
  return e;
}, uv = N({
  name: "InputRgb",
  props: {
    color: {
      type: Object,
      required: !0
    },
    alpha: {
      type: Number,
      required: !0
    },
    disabled: Boolean,
    disabledAlpha: Boolean,
    onHsvChange: Function,
    onAlphaChange: Function
  },
  setup(e) {
    const t = ee("color-picker"), {
      color: n
    } = $e(e), l = (o) => {
      var r;
      const a = Yr(Yr({}, n.value.rgb), o), i = Gl(a.r, a.g, a.b);
      (r = e.onHsvChange) == null || r.call(e, i);
    };
    return () => c(An, {
      class: `${t}-input-group`
    }, {
      default: () => [["r", "g", "b"].map((o) => c(St, {
        key: o,
        size: "mini",
        min: 0,
        max: 255,
        disabled: e.disabled,
        modelValue: n.value.rgb[o],
        hideButton: !0,
        onChange: (r = 0) => l({
          [o]: r
        })
      }, null)), !e.disabledAlpha && c(ss, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), cv = N({
  name: "InputHex",
  props: {
    color: {
      type: Object,
      required: !0
    },
    alpha: {
      type: Number,
      required: !0
    },
    disabled: Boolean,
    disabledAlpha: Boolean,
    onHsvChange: Function,
    onAlphaChange: Function
  },
  setup(e) {
    const t = ee("color-picker"), {
      color: n
    } = $e(e), [l, o] = Wn(n.value.hex), r = (s) => {
      var u;
      const d = ls(s) || {
        r: 255,
        g: 0,
        b: 0
      }, f = Gl(d.r, d.g, d.b);
      (u = e.onHsvChange) == null || u.call(e, f);
    }, a = (s) => {
      var u, d;
      const f = (d = (u = s.match(/[a-fA-F0-9]*/g)) == null ? void 0 : u.join("")) != null ? d : "";
      f !== n.value.hex && r(f.toUpperCase());
    }, i = (s) => {
      if (!s.clipboardData)
        return;
      let u = s.clipboardData.getData("Text");
      u.startsWith("#") && (u = u.slice(1)), a(u), s.preventDefault();
    };
    return be(n, () => {
      n.value.hex !== l.value && o(n.value.hex);
    }), () => c(An, {
      class: `${t}-input-group`
    }, {
      default: () => [c(Kt, {
        class: `${t}-input-hex`,
        size: "mini",
        maxLength: 6,
        disabled: e.disabled,
        modelValue: l.value,
        onInput: o,
        onChange: a,
        onBlur: () => r,
        onPressEnter: () => r,
        onPaste: i
      }, {
        prefix: () => "#"
      }), !e.disabledAlpha && c(ss, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), dv = N({
  name: "Panel",
  props: {
    color: {
      type: Object,
      required: !0
    },
    alpha: {
      type: Number,
      required: !0
    },
    colorString: String,
    disabled: Boolean,
    disabledAlpha: Boolean,
    showHistory: Boolean,
    showPreset: Boolean,
    format: String,
    historyColors: Array,
    presetColors: Array,
    onAlphaChange: Function,
    onHsvChange: Function
  },
  setup(e) {
    const {
      t
    } = _a(), n = ee("color-picker"), l = v(() => e.color.hsv), [o, r] = Wn(e.format || "hex"), a = (m) => {
      r(m);
    };
    B(!1);
    const i = (m) => {
      var p;
      const b = ls(m) || {
        r: 255,
        g: 0,
        b: 0
      }, y = Gl(b.r, b.g, b.b);
      (p = e.onHsvChange) == null || p.call(e, y);
    }, s = () => {
      const m = {
        color: e.color,
        alpha: e.alpha,
        disabled: e.disabled,
        disabledAlpha: e.disabledAlpha,
        onHsvChange: e.onHsvChange,
        onAlphaChange: e.onAlphaChange
      };
      return o.value === "rgb" ? c(uv, m, null) : c(cv, m, null);
    }, u = (m) => c("div", {
      key: m,
      class: `${n}-color-block`,
      style: {
        backgroundColor: m
      },
      onClick: () => i(m)
    }, [c("div", {
      class: `${n}-block`,
      style: {
        backgroundColor: m
      }
    }, null)]), d = (m, p) => c("div", {
      class: `${n}-colors-section`
    }, [c("div", {
      class: `${n}-colors-text`
    }, [m]), c("div", {
      class: `${n}-colors-wrapper`
    }, [p != null && p.length ? c("div", {
      class: `${n}-colors-list`
    }, [p.map(u)]) : c("span", {
      class: `${n}-colors-empty`
    }, [t("colorPicker.empty")])])]), f = () => e.showHistory || e.showPreset ? c("div", {
      class: `${n}-panel-colors`
    }, [e.showHistory && d(t("colorPicker.history"), e.historyColors), e.showPreset && d(t("colorPicker.preset"), e.presetColors)]) : null;
    return () => c("div", {
      class: {
        [`${n}-panel`]: !0,
        [`${n}-panel-disabled`]: e.disabled
      }
    }, [c(Ap, {
      color: e.color,
      onChange: (m, p) => {
        var b;
        return (b = e.onHsvChange) == null ? void 0 : b.call(e, {
          h: l.value.h,
          s: m,
          v: p
        });
      }
    }, null), c("div", {
      class: `${n}-panel-control`
    }, [c("div", {
      class: `${n}-control-wrapper`
    }, [c("div", null, [c(qr, {
      type: "hue",
      x: l.value.h,
      color: e.color,
      colorString: e.colorString,
      onChange: (m) => {
        var p;
        return (p = e.onHsvChange) == null ? void 0 : p.call(e, {
          h: m,
          s: l.value.s,
          v: l.value.v
        });
      }
    }, null), !e.disabledAlpha && c(qr, {
      type: "alpha",
      x: e.alpha,
      color: e.color,
      colorString: e.colorString,
      onChange: e.onAlphaChange
    }, null)]), c("div", {
      class: `${n}-preview`,
      style: {
        backgroundColor: e.colorString
      }
    }, null)]), c("div", {
      class: `${n}-input-wrapper`
    }, [c(Pa, {
      class: `${n}-select`,
      size: "mini",
      "trigger-props": {
        class: `${n}-select-popup`
      },
      options: [{
        value: "hex",
        label: "Hex"
      }, {
        value: "rgb",
        label: "RGB"
      }],
      modelValue: o.value,
      onChange: a
    }, null), c("div", {
      class: `${n}-group-wrapper`
    }, [s()])])]), f()]);
  }
}), Lo = N({
  name: "ColorPicker",
  props: {
    modelValue: String,
    defaultValue: {
      type: String
    },
    format: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    showText: {
      type: Boolean,
      default: !1
    },
    showHistory: {
      type: Boolean,
      default: !1
    },
    showPreset: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disabledAlpha: {
      type: Boolean,
      default: !1
    },
    hideTrigger: {
      type: Boolean
    },
    triggerProps: {
      type: Object
    },
    historyColors: {
      type: Array
    },
    presetColors: {
      type: Array,
      default: () => kp
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e) => !0,
    "popup-visible-change": (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const l = ee("color-picker"), o = v(() => {
      var S;
      return (S = e.modelValue) != null ? S : e.defaultValue;
    }), r = v(() => Dp(o.value || "")), [a, i] = Wn(r.value.a), [s, u] = Wn({
      h: r.value.h,
      s: r.value.s,
      v: r.value.v
    });
    be(() => r.value, (S) => {
      o.value !== m.value && (i(S.a), u({
        h: S.h,
        s: S.s,
        v: S.v
      }));
    });
    const d = v(() => {
      const S = ns(s.value.h, s.value.s, s.value.v), w = Rr(S.r, S.g, S.b);
      return {
        hsv: s.value,
        rgb: S,
        hex: w
      };
    }), f = v(() => {
      const {
        r: S,
        g: w,
        b: k
      } = d.value.rgb;
      return `rgba(${S}, ${w}, ${k}, ${a.value.toFixed(2)})`;
    }), m = v(() => {
      const {
        r: S,
        g: w,
        b: k
      } = d.value.rgb;
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${S}, ${w}, ${k}, ${a.value.toFixed(2)})` : `rgb(${S}, ${w}, ${k})` : a.value < 1 && !e.disabledAlpha ? `#${zp(S, w, k, a.value)}` : `#${Rr(S, w, k)}`;
    });
    be(m, (S) => {
      t("update:modelValue", S), t("change", S);
    });
    const p = (S) => {
      !e.disabled && u(S);
    }, b = (S) => {
      !e.disabled && i(S);
    }, y = (S) => {
      t("popup-visible-change", S, m.value);
    }, D = () => c("div", {
      class: {
        [l]: !0,
        [`${l}-size-${e.size}`]: e.size,
        [`${l}-disabled`]: e.disabled
      }
    }, [c("div", {
      class: `${l}-preview`,
      style: {
        backgroundColor: m.value
      }
    }, null), e.showText && c("div", {
      class: `${l}-value`
    }, [m.value]), c("input", {
      class: `${l}-input`,
      value: m.value,
      disabled: e.disabled
    }, null)]), A = () => c(dv, {
      color: d.value,
      alpha: a.value,
      colorString: f.value,
      historyColors: e.historyColors,
      presetColors: e.presetColors,
      showHistory: e.showHistory,
      showPreset: e.showPreset,
      disabled: e.disabled,
      disabledAlpha: e.disabledAlpha,
      format: e.format,
      onHsvChange: p,
      onAlphaChange: b
    }, null);
    return () => e.hideTrigger ? A() : c(Bl, Se({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 4,
      disabled: e.disabled,
      onPopupVisibleChange: y
    }, e.triggerProps), {
      default: () => [n.default ? n.default() : D()],
      content: A
    });
  }
});
const Ta = Object.assign(Lo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Lo.name, Lo);
  }
}), Gr = (e, t) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const n = t.split(".");
  if (n.length === 0)
    return;
  let l = e;
  for (let o = 0; o < n.length; o++) {
    if (!Ve(l) && !ze(l) || !n[o])
      return;
    if (o !== n.length - 1)
      l = l[n[o]];
    else
      return l[n[o]];
  }
}, Xr = (e, t, n, {
  addPath: l
} = {}) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const o = t.split(".");
  if (o.length === 0)
    return;
  let r = e;
  for (let a = 0; a < o.length; a++) {
    if (!Ve(r) && !ze(r) || !o[a])
      return;
    a !== o.length - 1 ? (l && Ye(r[o[a]]) && (r[o[a]] = {}), r = r[o[a]]) : r[o[a]] = n;
  }
};
var fv = Object.defineProperty, pv = Object.defineProperties, vv = Object.getOwnPropertyDescriptors, Zr = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, mv = Object.prototype.propertyIsEnumerable, Qr = (e, t, n) => t in e ? fv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gv = (e, t) => {
  for (var n in t || (t = {}))
    hv.call(t, n) && Qr(e, n, t[n]);
  if (Zr)
    for (var n of Zr(t))
      mv.call(t, n) && Qr(e, n, t[n]);
  return e;
}, bv = (e, t) => pv(e, vv(t));
const Il = ["xxl", "xl", "lg", "md", "sm", "xs"], ul = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Yt = [], yv = -1, cl = {};
const Jr = {
  matchHandlers: {},
  dispatch(e, t) {
    return cl = e, Yt.length < 1 ? !1 : (Yt.forEach((n) => {
      n.func(cl, t);
    }), !0);
  },
  subscribe(e) {
    Yt.length === 0 && this.register();
    const t = (++yv).toString();
    return Yt.push({
      token: t,
      func: e
    }), e(cl, null), t;
  },
  unsubscribe(e) {
    Yt = Yt.filter((t) => t.token !== e), Yt.length === 0 && this.unregister();
  },
  unregister() {
    Object.keys(ul).forEach((e) => {
      const t = ul[e];
      if (!t)
        return;
      const n = this.matchHandlers[t];
      n && n.mql && n.listener && (n.mql.removeEventListener ? n.mql.removeEventListener("change", n.listener) : n.mql.removeListener(n.listener));
    });
  },
  register() {
    Object.keys(ul).forEach((e) => {
      const t = ul[e];
      if (!t)
        return;
      const n = ({
        matches: o
      }) => {
        this.dispatch(bv(gv({}, cl), {
          [e]: o
        }), e);
      }, l = window.matchMedia(t);
      l.addEventListener ? l.addEventListener("change", n) : l.addListener(n), this.matchHandlers[t] = {
        mql: l,
        listener: n
      }, n(l);
    });
  }
};
function ei(e) {
  return Ve(e);
}
function da(e, t, n = !1) {
  const l = B({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), o = v(() => {
    let a = t;
    if (ei(e.value))
      for (let i = 0; i < Il.length; i++) {
        const s = Il[i];
        if ((l.value[s] || s === "xs" && n) && e.value[s] !== void 0) {
          a = e.value[s];
          break;
        }
      }
    else
      a = e.value;
    return a;
  });
  let r = "";
  return Oe(() => {
    r = Jr.subscribe((a) => {
      ei(e.value) && (l.value = a);
    });
  }), Hl(() => {
    r && Jr.unsubscribe(r);
  }), o;
}
function us(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function _v(e, t) {
  t === void 0 && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(l) {
    var o = l.el, r = l.top, a = l.left;
    o.scroll && n ? o.scroll({
      top: r,
      left: a,
      behavior: t
    }) : (o.scrollTop = r, o.scrollLeft = a);
  });
}
function $v(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : us(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function wv(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (us(t) && typeof t.behavior == "function")
    return t.behavior(n ? ar(e, t) : []);
  if (n) {
    var l = $v(t);
    return _v(ar(e, l), l.behavior);
  }
}
const ti = ["success", "warning", "error", "validating"], kv = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || ti.indexOf(l) > ti.indexOf(t)) && (t = e[n]);
  }
  return t;
}, Cv = (e) => {
  const t = [];
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && t.push(l);
  }
  return t;
}, cs = (e, t) => {
  const n = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${n}` : `${n}`;
};
var Sv = Object.defineProperty, ni = Object.getOwnPropertySymbols, Vv = Object.prototype.hasOwnProperty, Ev = Object.prototype.propertyIsEnumerable, li = (e, t, n) => t in e ? Sv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ov = (e, t) => {
  for (var n in t || (t = {}))
    Vv.call(t, n) && li(e, n, t[n]);
  if (ni)
    for (var n of ni(t))
      Ev.call(t, n) && li(e, n, t[n]);
  return e;
};
const xv = N({
  name: "Form",
  props: {
    model: {
      type: Object,
      required: !0
    },
    layout: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String
    },
    labelColProps: {
      type: Object,
      default: () => ({
        span: 5,
        offset: 0
      })
    },
    wrapperColProps: {
      type: Object,
      default: () => ({
        span: 19,
        offset: 0
      })
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    labelAlign: {
      type: String,
      default: "right"
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    rules: {
      type: Object
    },
    autoLabelWidth: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String
    },
    scrollToFirstError: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    submit: (e, t) => !0,
    submitSuccess: (e, t) => !0,
    submitFailed: (e, t) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("form"), l = B(), {
      id: o,
      model: r,
      layout: a,
      disabled: i,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: d,
      labelColStyle: f,
      wrapperColStyle: m,
      size: p,
      rules: b
    } = $e(e), {
      mergedSize: y
    } = yt(p), D = v(() => e.layout === "horizontal" && e.autoLabelWidth), A = [], S = [], w = Ie({}), k = v(() => Math.max(...Object.values(w))), L = (W) => {
      W && W.field && A.push(W);
    }, $ = (W) => {
      W && W.field && A.splice(A.indexOf(W), 1);
    }, V = (W) => {
      A.forEach((te) => {
        W[te.field] && te.setField(W[te.field]);
      });
    }, E = (W, te) => {
      te && w[te] !== W && (w[te] = W);
    }, T = (W) => {
      W && delete w[W];
    }, P = (W) => {
      const te = W ? [].concat(W) : [];
      A.forEach((M) => {
        (te.length === 0 || te.includes(M.field)) && M.resetField();
      });
    }, g = (W) => {
      const te = W ? [].concat(W) : [];
      A.forEach((M) => {
        (te.length === 0 || te.includes(M.field)) && M.clearValidate();
      });
    }, x = (W, te) => {
      const C = (l.value || document.body).querySelector(`#${cs(e.id, W)}`);
      C && wv(C, Ov({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, te));
    }, O = (W) => {
      const te = Wl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      x(W, te);
    }, U = (W) => {
      const te = [];
      return A.forEach((M) => {
        te.push(M.validate());
      }), Promise.all(te).then((M) => {
        const C = {};
        let H = !1;
        return M.forEach((Q) => {
          Q && (H = !0, C[Q.field] = Q);
        }), H && e.scrollToFirstError && O(Object.keys(C)[0]), Ze(W) && W(H ? C : void 0), H ? C : void 0;
      });
    }, Y = (W, te) => {
      const M = [];
      for (const C of A)
        (ze(W) && W.includes(C.field) || W === C.field) && M.push(C.validate());
      return Promise.all(M).then((C) => {
        const H = {};
        let Q = !1;
        return C.forEach((he) => {
          he && (Q = !0, H[he.field] = he);
        }), Q && e.scrollToFirstError && O(Object.keys(H)[0]), Ze(te) && te(Q ? H : void 0), Q ? H : void 0;
      });
    }, G = (W) => {
      const te = [];
      A.forEach((M) => {
        te.push(M.validate());
      }), Promise.all(te).then((M) => {
        const C = {};
        let H = !1;
        M.forEach((Q) => {
          Q && (H = !0, C[Q.field] = Q);
        }), H ? (e.scrollToFirstError && O(Object.keys(C)[0]), t("submitFailed", {
          values: r.value,
          errors: C
        }, W)) : t("submitSuccess", r.value, W), t("submit", {
          values: r.value,
          errors: H ? C : void 0
        }, W);
      });
    };
    return Ht(Oa, Ie({
      id: o,
      layout: a,
      disabled: i,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: d,
      labelColStyle: f,
      wrapperColStyle: m,
      model: r,
      size: y,
      rules: b,
      fields: A,
      touchedFields: S,
      addField: L,
      removeField: $,
      validateField: Y,
      setLabelWidth: E,
      removeLabelWidth: T,
      maxLabelWidth: k,
      autoLabelWidth: D
    })), {
      cls: v(() => [n, `${n}-layout-${e.layout}`, `${n}-size-${y.value}`, {
        [`${n}-auto-label-width`]: e.autoLabelWidth
      }]),
      formRef: l,
      handleSubmit: G,
      innerValidate: U,
      innerValidateField: Y,
      innerResetFields: P,
      innerClearValidate: g,
      innerSetFields: V,
      innerScrollToField: x
    };
  },
  methods: {
    validate(e) {
      return this.innerValidate(e);
    },
    validateField(e, t) {
      return this.innerValidateField(e, t);
    },
    resetFields(e) {
      return this.innerResetFields(e);
    },
    clearValidate(e) {
      return this.innerClearValidate(e);
    },
    setFields(e) {
      return this.innerSetFields(e);
    },
    scrollToField(e) {
      return this.innerScrollToField(e);
    }
  }
});
function Bv(e, t, n, l, o, r) {
  return _(), I("form", {
    ref: "formRef",
    class: K(e.cls),
    onSubmit: t[0] || (t[0] = nn((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [re(e.$slots, "default")], 34);
}
var Fo = /* @__PURE__ */ se(xv, [["render", Bv]]), En = Object.prototype.toString;
function Zl(e) {
  return En.call(e) === "[object Array]";
}
function xt(e) {
  return En.call(e) === "[object Object]";
}
function fa(e) {
  return En.call(e) === "[object String]";
}
function Iv(e) {
  return En.call(e) === "[object Number]" && e === e;
}
function Pv(e) {
  return En.call(e) === "[object Boolean]";
}
function pa(e) {
  return En.call(e) === "[object Function]";
}
function jv(e) {
  return xt(e) && Object.keys(e).length === 0;
}
function Zt(e) {
  return e == null || e === "";
}
function ds(e) {
  return Zl(e) && !e.length;
}
var Ma = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (pa(e) && pa(t))
    return e === t || e.toString() === t.toString();
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var n in e) {
    var l = Ma(e[n], t[n]);
    if (!l)
      return !1;
  }
  return !0;
}, Da = function(e, t) {
  var n = Object.assign({}, e);
  return Object.keys(t || {}).forEach(function(l) {
    var o = n[l], r = t == null ? void 0 : t[l];
    n[l] = xt(o) ? Object.assign(Object.assign({}, o), r) : r || o;
  }), n;
}, Tv = function(e, t) {
  for (var n = t.split("."), l = e, o = 0; o < n.length; o++)
    if (l = l && l[n[o]], l === void 0)
      return l;
  return l;
}, Dt = "#{field} is not a #{type} type", Mv = {
  required: "#{field} is required",
  type: {
    ip: Dt,
    email: Dt,
    url: Dt,
    string: Dt,
    number: Dt,
    array: Dt,
    object: Dt,
    boolean: Dt
  },
  number: {
    min: "`#{value}` is not greater than `#{min}`",
    max: "`#{value}` is not less than `#{max}`",
    equal: "`#{value}` is not equal to `#{equal}`",
    range: "`#{value}` is not in range `#{min} ~ #{max}`",
    positive: "`#{value}` is not a positive number",
    negative: "`#{value}` is not a negative number"
  },
  string: {
    maxLength: "#{field} cannot be longer than #{maxLength} characters",
    minLength: "#{field} must be at least #{minLength} characters",
    length: "#{field} must be exactly #{length} characters",
    match: "`#{value}` does not match pattern #{pattern}",
    uppercase: "`#{value}` must be all uppercase",
    lowercase: "`#{value}` must be all lowercased"
  },
  array: {
    length: "#{field} must be exactly #{length} in length",
    minLength: "#{field} cannot be less than #{minLength} in length",
    maxLength: "#{field} cannot be greater than #{maxLength} in length",
    includes: "#{field} is not includes #{includes}",
    deepEqual: "#{field} is not deep equal with #{deepEqual}",
    empty: "#{field} is not an empty array"
  },
  object: {
    deepEqual: "#{field} is not deep equal to expected value",
    hasKeys: "#{field} does not contain required fields",
    empty: "#{field} is not an empty object"
  },
  boolean: {
    true: "Expect true but got `#{value}`",
    false: "Expect false but got `#{value}`"
  }
}, _t = function(t, n) {
  var l = this;
  this.getValidateMsg = function(o, r) {
    r === void 0 && (r = {});
    var a = Object.assign(Object.assign({}, r), {
      value: l.obj,
      field: l.field,
      type: l.type
    }), i = Tv(l.validateMessages, o);
    return pa(i) ? i(a) : fa(i) ? i.replace(/\#\{.+?\}/g, function(s) {
      var u = s.slice(2, -1);
      if (u in a) {
        if (xt(a[u]) || Zl(a[u]))
          try {
            return JSON.stringify(a[u]);
          } catch {
            return a[u];
          }
        return String(a[u]);
      }
      return s;
    }) : i;
  }, xt(n) && fa(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = Da(Mv, n.validateMessages);
}, Ql = {
  not: {
    configurable: !0
  },
  isRequired: {
    configurable: !0
  },
  end: {
    configurable: !0
  }
};
Ql.not.get = function() {
  return this._not = !this._not, this;
};
Ql.isRequired.get = function() {
  if (Zt(this.obj) || ds(this.obj)) {
    var e = this.getValidateMsg("required");
    this.error = {
      value: this.obj,
      type: this.type,
      requiredError: !0,
      message: this.message || (xt(e) ? e : (this._not ? "[NOT MODE]:" : "") + e)
    };
  }
  return this;
};
Ql.end.get = function() {
  return this.error;
};
_t.prototype.addError = function(t) {
  !this.error && t && (this.error = {
    value: this.obj,
    type: this.type,
    message: this.message || (xt(t) ? t : (this._not ? "[NOT MODE]:" : "") + t)
  });
};
_t.prototype.validate = function(t, n) {
  var l = this._not ? t : !t;
  return l && this.addError(n), this;
};
_t.prototype.collect = function(t) {
  t && t(this.error);
};
Object.defineProperties(_t.prototype, Ql);
var Dv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "string"
    })), this.validate(o && o.strict ? fa(this.obj) : !0, this.getValidateMsg("type.string"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    uppercase: {
      configurable: !0
    },
    lowercase: {
      configurable: !0
    }
  };
  return t.prototype.maxLength = function(o) {
    return this.obj ? this.validate(this.obj.length <= o, this.getValidateMsg("string.maxLength", {
      maxLength: o
    })) : this;
  }, t.prototype.minLength = function(o) {
    return this.obj ? this.validate(this.obj.length >= o, this.getValidateMsg("string.minLength", {
      minLength: o
    })) : this;
  }, t.prototype.length = function(o) {
    return this.obj ? this.validate(this.obj.length === o, this.getValidateMsg("string.length", {
      length: o
    })) : this;
  }, t.prototype.match = function(o) {
    var r = o instanceof RegExp;
    return r && (o.lastIndex = 0), this.validate(this.obj === void 0 || r && o.test(this.obj), this.getValidateMsg("string.match", {
      pattern: o
    }));
  }, n.uppercase.get = function() {
    return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this;
  }, n.lowercase.get = function() {
    return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this;
  }, Object.defineProperties(t.prototype, n), t;
}(_t), zv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "number"
    })), this.validate(o && o.strict ? Iv(this.obj) : !0, this.getValidateMsg("type.number"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    positive: {
      configurable: !0
    },
    negative: {
      configurable: !0
    }
  };
  return t.prototype.min = function(o) {
    return Zt(this.obj) ? this : this.validate(this.obj >= o, this.getValidateMsg("number.min", {
      min: o
    }));
  }, t.prototype.max = function(o) {
    return Zt(this.obj) ? this : this.validate(this.obj <= o, this.getValidateMsg("number.max", {
      max: o
    }));
  }, t.prototype.equal = function(o) {
    return Zt(this.obj) ? this : this.validate(this.obj === o, this.getValidateMsg("number.equal", {
      equal: o
    }));
  }, t.prototype.range = function(o, r) {
    return Zt(this.obj) ? this : this.validate(this.obj >= o && this.obj <= r, this.getValidateMsg("number.range", {
      min: o,
      max: r
    }));
  }, n.positive.get = function() {
    return Zt(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  }, n.negative.get = function() {
    return Zt(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Av = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "array"
    })), this.validate(o && o.strict ? Zl(this.obj) : !0, this.getValidateMsg("type.array", {
      value: this.obj,
      type: this.type
    }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    empty: {
      configurable: !0
    }
  };
  return t.prototype.length = function(o) {
    return this.obj ? this.validate(this.obj.length === o, this.getValidateMsg("array.length", {
      value: this.obj,
      length: o
    })) : this;
  }, t.prototype.minLength = function(o) {
    return this.obj ? this.validate(this.obj.length >= o, this.getValidateMsg("array.minLength", {
      value: this.obj,
      minLength: o
    })) : this;
  }, t.prototype.maxLength = function(o) {
    return this.obj ? this.validate(this.obj.length <= o, this.getValidateMsg("array.maxLength", {
      value: this.obj,
      maxLength: o
    })) : this;
  }, t.prototype.includes = function(o) {
    var r = this;
    return this.obj ? this.validate(o.every(function(a) {
      return r.obj.indexOf(a) !== -1;
    }), this.getValidateMsg("array.includes", {
      value: this.obj,
      includes: o
    })) : this;
  }, t.prototype.deepEqual = function(o) {
    return this.obj ? this.validate(Ma(this.obj, o), this.getValidateMsg("array.deepEqual", {
      value: this.obj,
      deepEqual: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(ds(this.obj), this.getValidateMsg("array.empty", {
      value: this.obj
    }));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Lv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "object"
    })), this.validate(o && o.strict ? xt(this.obj) : !0, this.getValidateMsg("type.object"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    empty: {
      configurable: !0
    }
  };
  return t.prototype.deepEqual = function(o) {
    return this.obj ? this.validate(Ma(this.obj, o), this.getValidateMsg("object.deepEqual", {
      deepEqual: o
    })) : this;
  }, t.prototype.hasKeys = function(o) {
    var r = this;
    return this.obj ? this.validate(o.every(function(a) {
      return r.obj[a];
    }), this.getValidateMsg("object.hasKeys", {
      keys: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(jv(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Fv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "boolean"
    })), this.validate(o && o.strict ? Pv(this.obj) : !0, this.getValidateMsg("type.boolean"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    true: {
      configurable: !0
    },
    false: {
      configurable: !0
    }
  };
  return n.true.get = function() {
    return this.validate(this.obj === !0, this.getValidateMsg("boolean.true"));
  }, n.false.get = function() {
    return this.validate(this.obj === !1, this.getValidateMsg("boolean.false"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Nv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Rv = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), qv = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, Hv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "type"
    }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    email: {
      configurable: !0
    },
    url: {
      configurable: !0
    },
    ip: {
      configurable: !0
    }
  };
  return n.email.get = function() {
    return this.type = "email", this.validate(this.obj === void 0 || Nv.test(this.obj), this.getValidateMsg("type.email"));
  }, n.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || Rv.test(this.obj), this.getValidateMsg("type.url"));
  }, n.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || qv.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Wv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "custom"
    }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = {
    validate: {
      configurable: !0
    }
  };
  return n.validate.get = function() {
    var l = this;
    return function(o, r) {
      var a;
      if (o)
        return a = o(l.obj, l.addError.bind(l)), a && a.then ? (r && a.then(function() {
          r && r(l.error);
        }, function(i) {
          console.error(i);
        }), [a, l]) : (r && r(l.error), l.error);
    };
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Pl = function(e, t) {
  return new fs(e, Object.assign({
    field: "value"
  }, t));
};
Pl.globalConfig = {};
Pl.setGlobalConfig = function(e) {
  Pl.globalConfig = e || {};
};
var fs = function(t, n) {
  var l = Pl.globalConfig, o = Object.assign(Object.assign(Object.assign({}, l), n), {
    validateMessages: Da(l.validateMessages, n.validateMessages)
  });
  this.string = new Dv(t, o), this.number = new zv(t, o), this.array = new Av(t, o), this.object = new Lv(t, o), this.boolean = new Fv(t, o), this.type = new Hv(t, o), this.custom = new Wv(t, o);
}, za = function(t, n) {
  n === void 0 && (n = {}), this.schema = t, this.options = n;
};
za.prototype.messages = function(t) {
  this.options = Object.assign(Object.assign({}, this.options), {
    validateMessages: Da(this.options.validateMessages, t)
  });
};
za.prototype.validate = function(t, n) {
  var l = this;
  if (!xt(t))
    return;
  var o = [], r = null;
  function a(i, s) {
    r || (r = {}), (!r[i] || s.requiredError) && (r[i] = s);
  }
  this.schema && Object.keys(this.schema).forEach(function(i) {
    if (Zl(l.schema[i]))
      for (var s = function(f) {
        var m = l.schema[i][f], p = m.type, b = m.message;
        if (!p && !m.validator)
          throw "You must specify a type to field " + i + "!";
        var y = Object.assign(Object.assign({}, l.options), {
          message: b,
          field: i
        });
        "ignoreEmptyString" in m && (y.ignoreEmptyString = m.ignoreEmptyString), "strict" in m && (y.strict = m.strict);
        var D = new fs(t[i], y), A = D.type[p] || null;
        if (!A)
          if (m.validator) {
            A = D.custom.validate(m.validator), Object.prototype.toString.call(A) === "[object Array]" && A[0].then ? o.push({
              function: A[0],
              _this: A[1],
              key: i
            }) : A && a(i, A);
            return;
          } else
            A = D[p];
        if (Object.keys(m).forEach(function(S) {
          m.required && (A = A.isRequired), S !== "message" && A[S] && m[S] && typeof A[S] == "object" && (A = A[S]), A[S] && m[S] !== void 0 && typeof A[S] == "function" && (A = A[S](m[S]));
        }), A.collect(function(S) {
          S && a(i, S);
        }), r)
          return "break";
      }, u = 0; u < l.schema[i].length; u++) {
        var d = s(u);
        if (d === "break")
          break;
      }
  }), o.length > 0 ? Promise.all(o.map(function(i) {
    return i.function;
  })).then(function() {
    o.forEach(function(i) {
      i._this.error && a(i.key, i._this.error);
    }), n && n(r);
  }) : n && n(r);
};
const ps = Symbol("RowContextInjectionKey"), Uv = N({
  name: "Row",
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    },
    div: {
      type: Boolean
    },
    wrap: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const {
      gutter: t,
      align: n,
      justify: l,
      div: o,
      wrap: r
    } = $e(e), a = ee("row"), i = v(() => ({
      [`${a}`]: !o.value,
      [`${a}-nowrap`]: !r.value,
      [`${a}-align-${n.value}`]: n.value,
      [`${a}-justify-${l.value}`]: l.value
    })), s = v(() => Array.isArray(t.value) ? t.value[0] : t.value), u = v(() => Array.isArray(t.value) ? t.value[1] : 0), d = da(s, 0), f = da(u, 0), m = v(() => {
      const b = {};
      if ((d.value || f.value) && !o.value) {
        const y = -d.value / 2, D = -f.value / 2;
        y && (b.marginLeft = `${y}px`, b.marginRight = `${y}px`), D && (b.marginTop = `${D}px`, b.marginBottom = `${D}px`);
      }
      return b;
    }), p = v(() => [d.value, f.value]);
    return Ht(ps, Ie({
      gutter: p,
      div: o
    })), {
      classNames: i,
      styles: m
    };
  }
});
function Kv(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(e.classNames),
    style: ge(e.styles)
  }, [re(e.$slots, "default")], 6);
}
var Yv = /* @__PURE__ */ se(Uv, [["render", Kv]]);
function Gv(e) {
  return v(() => {
    const {
      val: n,
      key: l,
      xs: o,
      sm: r,
      md: a,
      lg: i,
      xl: s,
      xxl: u
    } = e.value;
    if (!o && !r && !a && !i && !s && !u)
      return n;
    const d = {};
    return Il.forEach((f) => {
      const m = e.value[f];
      me(m) ? d[f] = m : Ve(m) && me(m[l]) && (d[f] = m[l]);
    }), d;
  });
}
var Xv = Object.defineProperty, oi = Object.getOwnPropertySymbols, Zv = Object.prototype.hasOwnProperty, Qv = Object.prototype.propertyIsEnumerable, ai = (e, t, n) => t in e ? Xv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, No = (e, t) => {
  for (var n in t || (t = {}))
    Zv.call(t, n) && ai(e, n, t[n]);
  if (oi)
    for (var n of oi(t))
      Qv.call(t, n) && ai(e, n, t[n]);
  return e;
};
function Jv(e) {
  if (wt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || me(e))
    return e;
  if (wt(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const eh = N({
  name: "Col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number
    },
    order: {
      type: Number
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    },
    xxl: {
      type: [Number, Object]
    },
    flex: {
      type: [Number, String]
    }
  },
  setup(e) {
    const t = ee("col"), n = We(ps, {}), l = v(() => Jv(e.flex)), o = v(() => {
      const {
        div: f
      } = n, {
        span: m,
        offset: p,
        order: b,
        xs: y,
        sm: D,
        md: A,
        lg: S,
        xl: w,
        xxl: k
      } = e, L = {
        [`${t}`]: !f,
        [`${t}-order-${b}`]: b,
        [`${t}-${m}`]: !f && !y && !D && !A && !S && !w && !k,
        [`${t}-offset-${p}`]: p && p > 0
      }, $ = {
        xs: y,
        sm: D,
        md: A,
        lg: S,
        xl: w,
        xxl: k
      };
      return Object.keys($).forEach((V) => {
        const E = $[V];
        E && me(E) ? L[`${t}-${V}-${E}`] = !0 : E && Ve(E) && (L[`${t}-${V}-${E.span}`] = E.span, L[`${t}-${V}-offset-${E.offset}`] = E.offset, L[`${t}-${V}-order-${E.order}`] = E.order);
      }), L;
    }), r = v(() => l.value ? t : o.value), a = v(() => {
      const {
        gutter: f,
        div: m
      } = n, p = {};
      if (Array.isArray(f) && !m) {
        const b = f[0] && f[0] / 2 || 0, y = f[1] && f[1] / 2 || 0;
        b && (p.paddingLeft = `${b}px`, p.paddingRight = `${b}px`), y && (p.paddingTop = `${y}px`, p.paddingBottom = `${y}px`);
      }
      return p;
    }), i = v(() => l.value ? {
      flex: l.value
    } : {}), s = v(() => Zn(e, Il)), u = Gv(v(() => No({
      val: e.span,
      key: "span"
    }, s.value))), d = da(u, 24, !0);
    return {
      visible: v(() => !!d.value),
      classNames: r,
      styles: v(() => No(No({}, a.value), i.value))
    };
  }
});
function th(e, t, n, l, o, r) {
  return e.visible ? (_(), I("div", {
    key: 0,
    class: K(e.classNames),
    style: ge(e.styles)
  }, [re(e.$slots, "default")], 6)) : le("v-if", !0);
}
var nh = /* @__PURE__ */ se(eh, [["render", th]]), lh = Object.defineProperty, ri = Object.getOwnPropertySymbols, oh = Object.prototype.hasOwnProperty, ah = Object.prototype.propertyIsEnumerable, ii = (e, t, n) => t in e ? lh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, si = (e, t) => {
  for (var n in t || (t = {}))
    oh.call(t, n) && ii(e, n, t[n]);
  if (ri)
    for (var n of ri(t))
      ah.call(t, n) && ii(e, n, t[n]);
  return e;
};
const rh = N({
  name: "Tooltip",
  components: {
    Trigger: Bl
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    content: String,
    position: {
      type: String,
      default: "top"
    },
    mini: {
      type: Boolean,
      default: !1
    },
    backgroundColor: {
      type: String
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("tooltip"), l = B(e.defaultPopupVisible), o = v(() => {
      var d;
      return (d = e.popupVisible) != null ? d : l.value;
    }), r = (d) => {
      l.value = d, t("update:popupVisible", d), t("popupVisibleChange", d);
    }, a = v(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = v(() => {
      if (e.backgroundColor || e.contentStyle)
        return si({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = v(() => [`${n}-popup-arrow`, e.arrowClass]), u = v(() => {
      if (e.backgroundColor || e.arrowStyle)
        return si({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: o,
      contentCls: a,
      computedContentStyle: i,
      arrowCls: s,
      computedArrowStyle: u,
      handlePopupVisibleChange: r
    };
  }
});
function ih(e, t, n, l, o, r) {
  const a = ce("Trigger");
  return _(), de(a, {
    class: K(e.prefixCls),
    trigger: "hover",
    position: e.position,
    "popup-visible": e.computedPopupVisible,
    "popup-offset": 10,
    "show-arrow": "",
    "content-class": e.contentCls,
    "content-style": e.computedContentStyle,
    "arrow-class": e.arrowCls,
    "arrow-style": e.computedArrowStyle,
    "popup-container": e.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    role: "tooltip",
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: ne(() => [re(e.$slots, "content", {}, () => [pe(ye(e.content), 1)])]),
    default: ne(() => [re(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Ro = /* @__PURE__ */ se(rh, [["render", ih]]);
const Jl = Object.assign(Ro, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ro.name, Ro);
  }
}), sh = N({
  name: "IconQuestionCircle",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = ee("icon"), l = v(() => [n, `${n}-question-circle`, {
      [`${n}-spin`]: e.spin
    }]), o = v(() => {
      const a = {};
      return e.size && (a.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), uh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ch = /* @__PURE__ */ h("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1), dh = /* @__PURE__ */ h("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1), fh = [ch, dh];
function ph(e, t, n, l, o, r) {
  return _(), I("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: ge(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, fh, 14, uh);
}
var qo = /* @__PURE__ */ se(sh, [["render", ph]]);
const vh = Object.assign(qo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + qo.name, qo);
  }
}), hh = N({
  name: "FormItemLabel",
  components: {
    ResizeObserver: xl,
    Tooltip: Jl,
    IconQuestionCircle: vh
  },
  props: {
    required: {
      type: Boolean,
      default: !1
    },
    showColon: {
      type: Boolean,
      default: !1
    },
    component: {
      type: String,
      default: "label"
    },
    asteriskPosition: {
      type: String,
      default: "start"
    },
    tooltip: {
      type: String
    },
    attrs: Object
  },
  setup() {
    const e = ee("form-item-label"), t = We(Oa, void 0), n = Yn(), l = B(), o = () => {
      l.value && me(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    };
    return Oe(() => {
      l.value && me(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    }), Wt(() => {
      t == null || t.removeLabelWidth(n == null ? void 0 : n.uid);
    }), {
      prefixCls: e,
      labelRef: l,
      handleResize: o
    };
  }
}), mh = /* @__PURE__ */ h("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ h("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), gh = [mh], bh = /* @__PURE__ */ h("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ h("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), yh = [bh];
function _h(e, t, n, l, o, r) {
  const a = ce("icon-question-circle"), i = ce("Tooltip"), s = ce("ResizeObserver");
  return _(), de(s, {
    onResize: e.handleResize
  }, {
    default: ne(() => [(_(), de(tn(e.component), Se({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: ne(() => [e.required && e.asteriskPosition === "start" ? (_(), I("strong", {
        key: 0,
        class: K(`${e.prefixCls}-required-symbol`)
      }, gh, 2)) : le("v-if", !0), re(e.$slots, "default"), e.tooltip ? (_(), de(i, {
        key: 1,
        content: e.tooltip
      }, {
        default: ne(() => [c(a, {
          class: K(`${e.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : le("v-if", !0), e.required && e.asteriskPosition === "end" ? (_(), I("strong", {
        key: 2,
        class: K(`${e.prefixCls}-required-symbol`)
      }, yh, 2)) : le("v-if", !0), pe(" " + ye(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var $h = /* @__PURE__ */ se(hh, [["render", _h]]);
const wh = N({
  name: "FormItemMessage",
  props: {
    error: {
      type: Array,
      default: () => []
    },
    help: String
  },
  setup() {
    return {
      prefixCls: ee("form-item-message")
    };
  }
});
function kh(e, t, n, l, o, r) {
  return e.error.length > 0 ? (_(!0), I(Pe, {
    key: 0
  }, bt(e.error, (a) => (_(), de(Sl, {
    key: a,
    name: "form-blink",
    appear: ""
  }, {
    default: ne(() => [h("div", {
      role: "alert",
      class: K([e.prefixCls])
    }, ye(a), 3)]),
    _: 2
  }, 1024))), 128)) : e.help || e.$slots.help ? (_(), de(Sl, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: ne(() => [h("div", {
      class: K([e.prefixCls, `${e.prefixCls}-help`])
    }, [re(e.$slots, "help", {}, () => [pe(ye(e.help), 1)])], 2)]),
    _: 3
  })) : le("v-if", !0);
}
var Ch = /* @__PURE__ */ se(wh, [["render", kh]]), Sh = Object.defineProperty, jl = Object.getOwnPropertySymbols, vs = Object.prototype.hasOwnProperty, hs = Object.prototype.propertyIsEnumerable, ui = (e, t, n) => t in e ? Sh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ci = (e, t) => {
  for (var n in t || (t = {}))
    vs.call(t, n) && ui(e, n, t[n]);
  if (jl)
    for (var n of jl(t))
      hs.call(t, n) && ui(e, n, t[n]);
  return e;
}, Vh = (e, t) => {
  var n = {};
  for (var l in e)
    vs.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && jl)
    for (var l of jl(e))
      t.indexOf(l) < 0 && hs.call(e, l) && (n[l] = e[l]);
  return n;
};
const Eh = N({
  name: "FormItem",
  components: {
    ArcoRow: Yv,
    ArcoCol: nh,
    FormItemLabel: $h,
    FormItemMessage: Ch
  },
  props: {
    field: {
      type: String,
      default: ""
    },
    label: String,
    tooltip: {
      type: String
    },
    showColon: {
      type: Boolean,
      default: !1
    },
    noStyle: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    help: String,
    extra: String,
    required: {
      type: Boolean,
      default: !1
    },
    asteriskPosition: {
      type: String,
      default: "start"
    },
    rules: {
      type: [Object, Array]
    },
    validateStatus: {
      type: String
    },
    validateTrigger: {
      type: [String, Array],
      default: "change"
    },
    labelColProps: Object,
    wrapperColProps: Object,
    hideLabel: {
      type: Boolean,
      default: !1
    },
    hideAsterisk: {
      type: Boolean,
      default: !1
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    rowProps: Object,
    rowClass: [String, Array, Object],
    contentClass: [String, Array, Object],
    contentFlex: {
      type: Boolean,
      default: !0
    },
    mergeProps: {
      type: [Boolean, Function],
      default: !0
    },
    labelColFlex: {
      type: [Number, String]
    },
    feedback: {
      type: Boolean,
      default: !1
    },
    labelComponent: {
      type: String,
      default: "label"
    },
    labelAttrs: Object
  },
  setup(e) {
    const t = ee("form-item"), {
      field: n
    } = $e(e), l = We(Oa, {}), {
      autoLabelWidth: o,
      layout: r
    } = $e(l), {
      i18nMessage: a
    } = _a(), i = v(() => {
      var M;
      const C = ci({}, (M = e.labelColProps) != null ? M : l.labelColProps);
      return e.labelColFlex ? C.flex = e.labelColFlex : l.autoLabelWidth && (C.flex = `${l.maxLabelWidth}px`), C;
    }), s = v(() => {
      var M;
      const C = ci({}, (M = e.wrapperColProps) != null ? M : l.wrapperColProps);
      return n.value && (C.id = cs(l.id, n.value)), (e.labelColFlex || l.autoLabelWidth) && (C.flex = "auto"), C;
    }), u = v(() => {
      var M;
      return (M = e.labelColStyle) != null ? M : l.labelColStyle;
    }), d = v(() => {
      var M;
      return (M = e.wrapperColStyle) != null ? M : l.wrapperColStyle;
    }), f = Gr(l.model, e.field), m = Ie({}), p = Ie({}), b = v(() => kv(m)), y = v(() => Cv(p)), D = B(!1), A = v(() => Gr(l.model, e.field)), S = v(() => {
      var M;
      return Boolean((M = e.disabled) != null ? M : l == null ? void 0 : l.disabled);
    }), w = v(() => {
      var M;
      return (M = e.validateStatus) != null ? M : b.value;
    }), k = v(() => w.value === "error"), L = v(() => {
      var M, C, H;
      const Q = [].concat((H = (C = e.rules) != null ? C : (M = l == null ? void 0 : l.rules) == null ? void 0 : M[e.field]) != null ? H : []), he = Q.some((we) => we.required);
      return e.required && !he ? [{
        required: !0
      }].concat(Q) : Q;
    }), $ = v(() => L.value.some((M) => M.required)), V = e.noStyle ? We(ia, void 0) : void 0, E = (M, {
      status: C,
      message: H
    }) => {
      m[M] = C, p[M] = H, e.noStyle && (V == null || V.updateValidateState(M, {
        status: C,
        message: H
      }));
    }, T = v(() => e.feedback && w.value ? w.value : void 0), P = () => {
      var M;
      if (D.value)
        return Promise.resolve();
      const C = L.value;
      if (!n.value || C.length === 0)
        return b.value && O(), Promise.resolve();
      const H = n.value, Q = A.value;
      E(H, {
        status: "",
        message: ""
      });
      const he = new za({
        [H]: C.map((we) => {
          var fe = Vh(we, []);
          return !fe.type && !fe.validator && (fe.type = "string"), fe;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (M = a.value.form) == null ? void 0 : M.validateMessages
      });
      return new Promise((we) => {
        he.validate({
          [H]: Q
        }, (fe) => {
          var Ae;
          const Ce = Boolean(fe == null ? void 0 : fe[H]);
          E(H, {
            status: Ce ? "error" : "",
            message: (Ae = fe == null ? void 0 : fe[H].message) != null ? Ae : ""
          });
          const xe = Ce ? {
            label: e.label,
            field: n.value,
            value: fe[H].value,
            type: fe[H].type,
            isRequiredError: Boolean(fe[H].requiredError),
            message: fe[H].message
          } : void 0;
          we(xe);
        });
      });
    }, g = v(() => [].concat(e.validateTrigger)), x = v(() => g.value.reduce((M, C) => {
      switch (C) {
        case "change":
          return M.onChange = () => {
            P();
          }, M;
        case "input":
          return M.onInput = () => {
            Le(() => {
              P();
            });
          }, M;
        case "focus":
          return M.onFocus = () => {
            P();
          }, M;
        case "blur":
          return M.onBlur = () => {
            P();
          }, M;
        default:
          return M;
      }
    }, {}));
    Ht(ia, Ie({
      eventHandlers: x,
      size: l && Cl(l, "size"),
      disabled: S,
      error: k,
      feedback: T,
      updateValidateState: E
    }));
    const O = () => {
      n.value && E(n.value, {
        status: "",
        message: ""
      });
    }, G = Ie({
      field: n,
      disabled: S,
      error: k,
      validate: P,
      clearValidate: O,
      resetField: () => {
        O(), D.value = !0, l != null && l.model && n.value && Xr(l.model, n.value, f), Le(() => {
          D.value = !1;
        });
      },
      setField: (M) => {
        var C, H;
        n.value && (D.value = !0, "value" in M && (l != null && l.model) && n.value && Xr(l.model, n.value, M.value), (M.status || M.message) && E(n.value, {
          status: (C = M.status) != null ? C : "",
          message: (H = M.message) != null ? H : ""
        }), Le(() => {
          D.value = !1;
        }));
      }
    });
    Oe(() => {
      var M;
      G.field && ((M = l.addField) == null || M.call(l, G));
    }), Wt(() => {
      var M;
      G.field && ((M = l.removeField) == null || M.call(l, G));
    });
    const J = v(() => [t, `${t}-layout-${l.layout}`, {
      [`${t}-error`]: k.value,
      [`${t}-status-${w.value}`]: Boolean(w.value)
    }, e.rowClass]), W = v(() => [`${t}-label-col`, {
      [`${t}-label-col-left`]: l.labelAlign === "left",
      [`${t}-label-col-flex`]: l.autoLabelWidth || e.labelColFlex
    }]), te = v(() => [`${t}-wrapper-col`, {
      [`${t}-wrapper-col-flex`]: !s.value
    }]);
    return {
      prefixCls: t,
      cls: J,
      isRequired: $,
      isError: k,
      finalMessage: y,
      mergedLabelCol: i,
      mergedWrapperCol: s,
      labelColCls: W,
      autoLabelWidth: o,
      layout: r,
      mergedLabelStyle: u,
      wrapperColCls: te,
      mergedWrapperStyle: d
    };
  }
});
function Oh(e, t, n, l, o, r) {
  var a;
  const i = ce("FormItemLabel"), s = ce("ArcoCol"), u = ce("FormItemMessage"), d = ce("ArcoRow");
  return e.noStyle ? re(e.$slots, "default", {
    key: 0
  }) : (_(), de(d, Se({
    key: 1,
    class: [e.cls, {
      [`${e.prefixCls}-has-help`]: Boolean((a = e.$slots.help) != null ? a : e.help)
    }],
    wrap: !(e.labelColFlex || e.autoLabelWidth),
    div: e.layout !== "horizontal" || e.hideLabel
  }, e.rowProps), {
    default: ne(() => [e.hideLabel ? le("v-if", !0) : (_(), de(s, Se({
      key: 0,
      class: e.labelColCls,
      style: e.mergedLabelStyle
    }, e.mergedLabelCol), {
      default: ne(() => [c(i, {
        required: e.hideAsterisk ? !1 : e.isRequired,
        "show-colon": e.showColon,
        "asterisk-position": e.asteriskPosition,
        component: e.labelComponent,
        attrs: e.labelAttrs,
        tooltip: e.tooltip
      }, {
        default: ne(() => [e.$slots.label || e.label ? re(e.$slots, "label", {
          key: 0
        }, () => [pe(ye(e.label), 1)]) : le("v-if", !0)]),
        _: 3
      }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]),
      _: 3
    }, 16, ["class", "style"])), c(s, Se({
      class: e.wrapperColCls,
      style: e.mergedWrapperStyle
    }, e.mergedWrapperCol), {
      default: ne(() => [h("div", {
        class: K(`${e.prefixCls}-content-wrapper`)
      }, [h("div", {
        class: K([`${e.prefixCls}-content`, {
          [`${e.prefixCls}-content-flex`]: e.contentFlex
        }, e.contentClass])
      }, [re(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (_(), de(u, {
        key: 0,
        error: e.finalMessage,
        help: e.help
      }, Ei({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: ne(() => [re(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : le("v-if", !0), e.$slots.extra || e.extra ? (_(), I("div", {
        key: 1,
        class: K(`${e.prefixCls}-extra`)
      }, [re(e.$slots, "extra", {}, () => [pe(ye(e.extra), 1)])], 2)) : le("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var gn = /* @__PURE__ */ se(Eh, [["render", Oh]]);
const ms = Object.assign(Fo, {
  Item: gn,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Fo.name, Fo), e.component(n + gn.name, gn);
  }
}), xh = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Bh = (e) => {
  const t = {};
  return xh.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, Ih = N({
  name: "Textarea",
  components: {
    ResizeObserver: Ol,
    IconHover: ct,
    IconClose: an
  },
  inheritAttrs: !1,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    autoSize: {
      type: [Boolean, Object],
      default: !1
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    input: (e, t) => !0,
    change: (e, t) => !0,
    clear: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t,
    attrs: n
  }) {
    const {
      disabled: l,
      error: o,
      modelValue: r
    } = $e(e), a = ee("textarea"), {
      mergedDisabled: i,
      mergedError: s,
      eventHandlers: u
    } = vt({
      disabled: l,
      error: o
    }), d = B(), f = B(), m = B(), p = B(), b = B(e.defaultValue), y = v(() => {
      var F;
      return (F = r.value) != null ? F : b.value;
    }), [D, A] = Ui(d);
    be(r, (F) => {
      (Ye(F) || Vn(F)) && (b.value = "");
    });
    const S = v(() => Ve(e.maxLength) && Boolean(e.maxLength.errorOnly)), w = v(() => Ve(e.maxLength) ? e.maxLength.length : e.maxLength), k = (F) => {
      var z;
      return Ze(e.wordLength) ? e.wordLength(F) : (z = F.length) != null ? z : 0;
    }, L = v(() => k(y.value)), $ = v(() => s.value || Boolean(w.value && S.value && L.value > w.value)), V = B(!1), E = B(!1), T = v(() => e.allowClear && !i.value && y.value), P = B(!1), g = B(""), x = () => {
      D(), Le(() => {
        d.value && y.value !== d.value.value && (d.value.value = y.value, A());
      });
    }, O = (F, z = !0) => {
      var X, oe;
      w.value && !S.value && k(F) > w.value && (F = (oe = (X = e.wordSlice) == null ? void 0 : X.call(e, F, w.value)) != null ? oe : F.slice(0, w.value)), b.value = F, z && t("update:modelValue", F), x();
    };
    let U = y.value;
    const Y = (F, z) => {
      var X, oe;
      F !== U && (U = F, t("change", F, z), (oe = (X = u.value) == null ? void 0 : X.onChange) == null || oe.call(X, z));
    }, G = (F) => {
      var z, X;
      E.value = !0, U = y.value, t("focus", F), (X = (z = u.value) == null ? void 0 : z.onFocus) == null || X.call(z, F);
    }, J = (F) => {
      var z, X;
      E.value = !1, t("blur", F), (X = (z = u.value) == null ? void 0 : z.onBlur) == null || X.call(z, F), Y(y.value, F);
    }, W = (F) => {
      var z, X;
      const {
        value: oe
      } = F.target;
      if (F.type === "compositionend") {
        if (P.value = !1, g.value = "", w.value && !S.value && y.value.length >= w.value && k(oe) > w.value) {
          x();
          return;
        }
        t("input", oe, F), O(oe), (X = (z = u.value) == null ? void 0 : z.onInput) == null || X.call(z, F);
      } else
        P.value = !0;
    }, te = (F) => {
      var z, X;
      const {
        value: oe
      } = F.target;
      if (P.value)
        g.value = oe;
      else {
        if (w.value && !S.value && y.value.length >= w.value && k(oe) > w.value && F.inputType === "insertText") {
          x();
          return;
        }
        t("input", oe, F), O(oe), (X = (z = u.value) == null ? void 0 : z.onInput) == null || X.call(z, F);
      }
    }, M = (F) => {
      O(""), Y("", F), t("clear", F);
    };
    be(r, (F) => {
      F !== y.value && O(F ?? "", !1);
    });
    const C = (F) => Xn(n, Rt), H = (F) => Zn(n, Rt), Q = v(() => [`${a}-wrapper`, {
      [`${a}-focus`]: E.value,
      [`${a}-disabled`]: i.value,
      [`${a}-error`]: $.value,
      [`${a}-scroll`]: V.value
    }]);
    let he;
    const we = B(0), fe = B(0), Ae = v(() => !Ve(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * we.value + fe.value), Ce = v(() => !Ve(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * we.value + fe.value), xe = () => {
      const F = Bh(he);
      we.value = Number.parseInt(F["line-height"] || 0, 10), fe.value = Number.parseInt(F["border-width"] || 0, 10) * 2 + Number.parseInt(F["padding-top"] || 0, 10) + Number.parseInt(F["padding-bottom"] || 0, 10), p.value = F, Le(() => {
        var z;
        const X = (z = m.value) == null ? void 0 : z.offsetHeight;
        let oe = X ?? 0, Te = "hidden";
        Ae.value && oe < Ae.value && (oe = Ae.value), Ce.value && oe > Ce.value && (oe = Ce.value, Te = "auto"), f.value = {
          height: `${oe}px`,
          resize: "none",
          overflow: Te
        };
      });
    };
    Oe(() => {
      d.value && (he = window.getComputedStyle(d.value), e.autoSize && xe()), ot();
    });
    const dt = () => {
      e.autoSize && m.value && xe(), ot();
    }, et = (F) => {
      d.value && F.target !== d.value && (F.preventDefault(), d.value.focus());
    }, ot = () => {
      d.value && (d.value.scrollHeight > d.value.offsetHeight ? V.value || (V.value = !0) : V.value && (V.value = !1));
    };
    return be(y, () => {
      e.autoSize && m.value && xe(), ot();
    }), {
      prefixCls: a,
      wrapperCls: Q,
      textareaRef: d,
      textareaStyle: f,
      mirrorRef: m,
      mirrorStyle: p,
      computedValue: y,
      showClearBtn: T,
      valueLength: L,
      computedMaxLength: w,
      mergedDisabled: i,
      getWrapperAttrs: C,
      getTextareaAttrs: H,
      handleInput: te,
      handleFocus: G,
      handleBlur: J,
      handleComposition: W,
      handleClear: M,
      handleResize: dt,
      handleMousedown: et
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.$refs.textareaRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.$refs.textareaRef) == null || e.blur();
    }
  }
}), Ph = ["disabled", "value", "placeholder"];
function jh(e, t, n, l, o, r) {
  const a = ce("resize-observer"), i = ce("icon-close"), s = ce("icon-hover");
  return _(), I("div", Se(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (_(), I("div", {
    key: 0,
    ref: "mirrorRef",
    class: K(`${e.prefixCls}-mirror`),
    style: ge(e.mirrorStyle)
  }, ye(`${e.computedValue}
`), 7)) : le("v-if", !0), c(a, {
    onResize: e.handleResize
  }, {
    default: ne(() => [h("textarea", Se({
      ref: "textareaRef"
    }, e.getTextareaAttrs(e.$attrs), {
      disabled: e.mergedDisabled,
      class: e.prefixCls,
      style: e.textareaStyle,
      value: e.computedValue,
      placeholder: e.placeholder,
      onInput: t[0] || (t[0] = (...u) => e.handleInput && e.handleInput(...u)),
      onFocus: t[1] || (t[1] = (...u) => e.handleFocus && e.handleFocus(...u)),
      onBlur: t[2] || (t[2] = (...u) => e.handleBlur && e.handleBlur(...u)),
      onCompositionstart: t[3] || (t[3] = (...u) => e.handleComposition && e.handleComposition(...u)),
      onCompositionupdate: t[4] || (t[4] = (...u) => e.handleComposition && e.handleComposition(...u)),
      onCompositionend: t[5] || (t[5] = (...u) => e.handleComposition && e.handleComposition(...u))
    }), null, 16, Ph)]),
    _: 1
  }, 8, ["onResize"]), re(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (_(), I("div", {
    key: 1,
    class: K(`${e.prefixCls}-word-limit`)
  }, ye(e.valueLength) + "/" + ye(e.computedMaxLength), 3)) : le("v-if", !0), e.showClearBtn ? (_(), I("div", {
    key: 2,
    class: K(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [c(s, null, {
    default: ne(() => [c(i)]),
    _: 1
  })], 2)) : le("v-if", !0)], 16);
}
var Ho = /* @__PURE__ */ se(Ih, [["render", jh]]);
const Th = Object.assign(Ho, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ho.name, Ho);
  }
}), Mh = N({
  name: "Message",
  components: {
    AIconHover: ct,
    IconInfoCircleFill: qu,
    IconCheckCircleFill: qi,
    IconExclamationCircleFill: Hi,
    IconCloseCircleFill: Wi,
    IconClose: an,
    IconLoading: Ut
  },
  props: {
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    resetOnUpdate: {
      type: Boolean,
      default: !1
    },
    resetOnHover: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, {
    emit: t
  }) {
    const n = ee("message");
    let l = 0;
    const o = () => {
      t("close");
    }, r = () => {
      e.duration > 0 && (l = window.setTimeout(o, e.duration));
    }, a = () => {
      l && (window.clearTimeout(l), l = 0);
    };
    return Oe(() => {
      r();
    }), Pt(() => {
      e.resetOnUpdate && (a(), r());
    }), Hl(() => {
      a();
    }), {
      handleMouseEnter: () => {
        e.resetOnHover && a();
      },
      handleMouseLeave: () => {
        e.resetOnHover && r();
      },
      prefixCls: n,
      handleClose: o
    };
  }
});
function Dh(e, t, n, l, o, r) {
  const a = ce("icon-info-circle-fill"), i = ce("icon-check-circle-fill"), s = ce("icon-exclamation-circle-fill"), u = ce("icon-close-circle-fill"), d = ce("icon-loading"), f = ce("icon-close"), m = ce("a-icon-hover");
  return _(), I("li", {
    role: "alert",
    class: K([e.prefixCls, `${e.prefixCls}-${e.type}`, {
      [`${e.prefixCls}-closable`]: e.closable
    }]),
    onMouseenter: t[1] || (t[1] = (...p) => e.handleMouseEnter && e.handleMouseEnter(...p)),
    onMouseleave: t[2] || (t[2] = (...p) => e.handleMouseLeave && e.handleMouseLeave(...p))
  }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (_(), I("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon", {}, () => [e.type === "info" ? (_(), de(a, {
    key: 0
  })) : e.type === "success" ? (_(), de(i, {
    key: 1
  })) : e.type === "warning" ? (_(), de(s, {
    key: 2
  })) : e.type === "error" ? (_(), de(u, {
    key: 3
  })) : e.type === "loading" ? (_(), de(d, {
    key: 4
  })) : le("v-if", !0)])], 2)) : le("v-if", !0), h("span", {
    class: K(`${e.prefixCls}-content`)
  }, [re(e.$slots, "default")], 2), e.closable ? (_(), I("span", {
    key: 1,
    class: K(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...p) => e.handleClose && e.handleClose(...p))
  }, [c(m, null, {
    default: ne(() => [c(f)]),
    _: 1
  })], 2)) : le("v-if", !0)], 34);
}
var zh = /* @__PURE__ */ se(Mh, [["render", Dh]]);
function Ah(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ya(e);
}
var Lh = N({
  name: "MessageList",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: "top"
    }
  },
  emits: ["close", "afterClose"],
  setup(e, t) {
    const n = ee("message-list"), {
      zIndex: l
    } = Gi("message", {
      runOnMounted: !0
    });
    return () => {
      let o;
      return c(Oi, {
        class: [n, `${n}-${e.position}`],
        name: "fade-message",
        tag: "ul",
        style: {
          zIndex: l.value
        },
        onAfterLeave: () => t.emit("afterClose")
      }, Ah(o = e.messages.map((r) => {
        const a = {
          default: Ja(r.content),
          icon: Ja(r.icon)
        };
        return c(zh, {
          key: r.id,
          type: r.type,
          duration: r.duration,
          closable: r.closable,
          resetOnUpdate: r.resetOnUpdate,
          resetOnHover: r.resetOnHover,
          onClose: () => t.emit("close", r.id)
        }, a);
      })) ? o : {
        default: () => [o]
      });
    };
  }
}), Fh = Object.defineProperty, Nh = Object.defineProperties, Rh = Object.getOwnPropertyDescriptors, di = Object.getOwnPropertySymbols, qh = Object.prototype.hasOwnProperty, Hh = Object.prototype.propertyIsEnumerable, fi = (e, t, n) => t in e ? Fh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tl = (e, t) => {
  for (var n in t || (t = {}))
    qh.call(t, n) && fi(e, n, t[n]);
  if (di)
    for (var n of di(t))
      Hh.call(t, n) && fi(e, n, t[n]);
  return e;
}, gs = (e, t) => Nh(e, Rh(t));
class Wh {
  constructor(t, n) {
    this.messageCount = 0, this.add = (r) => {
      var a;
      this.messageCount++;
      const i = (a = r.id) != null ? a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(i))
        return this.update(i, r);
      const s = Ie(Tl({
        id: i
      }, r));
      return this.messages.value.push(s), this.messageIds.add(i), {
        close: () => this.remove(i)
      };
    }, this.update = (r, a) => {
      for (let i = 0; i < this.messages.value.length; i++)
        if (this.messages.value[i].id === r) {
          const s = !Ye(a.duration);
          Object.assign(this.messages.value[i], gs(Tl({}, a), {
            id: r,
            resetOnUpdate: s
          }));
          break;
        }
      return {
        close: () => this.remove(r)
      };
    }, this.remove = (r) => {
      for (let a = 0; a < this.messages.value.length; a++) {
        const i = this.messages.value[a];
        if (i.id === r) {
          Ze(i.onClose) && i.onClose(r), this.messages.value.splice(a, 1), this.messageIds.delete(r);
          break;
        }
      }
    }, this.clear = () => {
      this.messages.value.splice(0);
    }, this.destroy = () => {
      this.messages.value.length === 0 && this.container && (Wa(null, this.container), document.body.removeChild(this.container), this.container = null, bn[this.position] = void 0);
    };
    const {
      position: l = "top"
    } = t;
    this.container = Ou("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = B([]), this.position = l;
    const o = c(Lh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? gt._context) && (o.appContext = n ?? gt._context), Wa(o, this.container), document.body.appendChild(this.container);
  }
}
const bn = {}, bs = [...ac, "loading", "normal"], bl = bs.reduce((e, t) => (e[t] = (n, l) => {
  wt(n) && (n = {
    content: n
  });
  const o = Tl({
    type: t
  }, n), {
    position: r = "top"
  } = o;
  return bn[r] || (bn[r] = new Wh(o, l)), bn[r].add(o);
}, e), {});
bl.clear = (e) => {
  var t;
  e ? (t = bn[e]) == null || t.clear() : Object.values(bn).forEach((n) => n == null ? void 0 : n.clear());
};
const gt = gs(Tl({}, bl), {
  install: (e) => {
    const t = {
      clear: bl.clear
    };
    for (const n of bs)
      t[n] = (l, o = e._context) => bl[n](l, o);
    e.config.globalProperties.$message = t;
  },
  _context: null
}), Uh = N({
  name: "SliderButton",
  components: {
    Tooltip: Jl
  },
  inheritAttrs: !1,
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    min: {
      type: Number,
      required: !0
    },
    max: {
      type: Number,
      required: !0
    },
    formatTooltip: {
      type: Function
    },
    value: [String, Number],
    tooltipPosition: {
      type: String
    },
    showTooltip: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["movestart", "moving", "moveend"],
  setup(e, {
    emit: t
  }) {
    const n = ee("slider-btn"), l = B(!1), o = (f) => {
      e.disabled || (f.preventDefault(), l.value = !0, Ot(window, "mousemove", r), Ot(window, "mouseup", a), Ot(window, "contextmenu", a), t("movestart"));
    }, r = (f) => {
      t("moving", f.clientX, f.clientY);
    }, a = () => {
      l.value = !1, wn(window, "mousemove", r), wn(window, "mouseup", a), t("moveend");
    }, i = v(() => [n]), s = v(() => {
      var f;
      return ((f = e.tooltipPosition) != null ? f : e.direction === "vertical") ? "right" : "top";
    }), u = v(() => {
      var f, m;
      return (m = (f = e.formatTooltip) == null ? void 0 : f.call(e, e.value)) != null ? m : `${e.value}`;
    }), d = v(() => e.showTooltip ? l.value ? !0 : void 0 : !1);
    return {
      prefixCls: n,
      cls: i,
      tooltipContent: u,
      mergedTooltipPosition: s,
      popupVisible: d,
      handleMouseDown: o
    };
  }
}), Kh = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function Yh(e, t, n, l, o, r) {
  const a = ce("tooltip");
  return _(), de(a, {
    "popup-visible": e.popupVisible,
    position: e.mergedTooltipPosition,
    content: e.tooltipContent
  }, {
    default: ne(() => [h("div", Se(e.$attrs, {
      tabindex: "0",
      role: "slider",
      "aria-disabled": e.disabled,
      "aria-valuemax": e.max,
      "aria-valuemin": e.min,
      "aria-valuenow": e.value,
      "aria-valuetext": e.tooltipContent,
      class: e.cls,
      onMousedown: t[0] || (t[0] = (...i) => e.handleMouseDown && e.handleMouseDown(...i)),
      onClick: t[1] || (t[1] = nn(() => {
      }, ["stop"]))
    }), null, 16, Kh)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var Gh = /* @__PURE__ */ se(Uh, [["render", Yh]]);
const Lt = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${ln.round(l * 100, 2)}%`;
}, eo = (e, t) => t === "vertical" ? {
  bottom: e
} : {
  left: e
}, Xh = N({
  name: "SliderDots",
  props: {
    data: {
      type: Array,
      required: !0
    },
    min: {
      type: Number,
      required: !0
    },
    max: {
      type: Number,
      required: !0
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e) {
    return {
      prefixCls: ee("slider"),
      getStyle: (l) => eo(Lt(l, [e.min, e.max]), e.direction)
    };
  }
});
function Zh(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(`${e.prefixCls}-dots`)
  }, [(_(!0), I(Pe, null, bt(e.data, (a, i) => (_(), I("div", {
    key: i,
    class: K(`${e.prefixCls}-dot-wrapper`),
    style: ge(e.getStyle(a.key))
  }, [h("div", {
    class: K([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var Qh = /* @__PURE__ */ se(Xh, [["render", Zh]]);
const Jh = N({
  name: "SliderMarks",
  props: {
    data: {
      type: Array,
      required: !0
    },
    min: {
      type: Number,
      required: !0
    },
    max: {
      type: Number,
      required: !0
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e) {
    return {
      prefixCls: ee("slider"),
      getStyle: (l) => eo(Lt(l, [e.min, e.max]), e.direction)
    };
  }
});
function em(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(`${e.prefixCls}-marks`)
  }, [(_(!0), I(Pe, null, bt(e.data, (a, i) => (_(), I("div", {
    key: i,
    "aria-hidden": "true",
    class: K(`${e.prefixCls}-mark`),
    style: ge(e.getStyle(a.key))
  }, ye(a.content), 7))), 128))], 2);
}
var tm = /* @__PURE__ */ se(Jh, [["render", em]]);
const nm = N({
  name: "SliderTicks",
  props: {
    value: {
      type: Array,
      required: !0
    },
    step: {
      type: Number,
      required: !0
    },
    min: {
      type: Number,
      required: !0
    },
    max: {
      type: Number,
      required: !0
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e) {
    const t = ee("slider"), n = v(() => {
      const o = [], r = Math.floor((e.max - e.min) / e.step);
      for (let a = 0; a <= r; a++) {
        const i = ln.plus(a * e.step, e.min);
        i <= e.min || i >= e.max || o.push({
          key: i,
          isActive: i >= e.value[0] && i <= e.value[1]
        });
      }
      return o;
    });
    return {
      prefixCls: t,
      steps: n,
      getStyle: (o) => eo(Lt(o, [e.min, e.max]), e.direction)
    };
  }
});
function lm(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(`${e.prefixCls}-ticks`)
  }, [(_(!0), I(Pe, null, bt(e.steps, (a, i) => (_(), I("div", {
    key: i,
    class: K([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: ge(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var om = /* @__PURE__ */ se(nm, [["render", lm]]);
const am = N({
  name: "SliderInput",
  components: {
    InputNumber: St
  },
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    step: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
    range: {
      type: Boolean
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, {
    emit: t
  }) {
    return {
      prefixCls: ee("slider")
    };
  }
});
function rm(e, t, n, l, o, r) {
  const a = ce("input-number");
  return _(), I("div", {
    class: K(`${e.prefixCls}-input`)
  }, [e.range ? (_(), I(Pe, {
    key: 0
  }, [c(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[0],
    "hide-button": "",
    onChange: t[0] || (t[0] = (i) => e.$emit("startChange", i))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"]), h("div", {
    class: K(`${e.prefixCls}-input-hyphens`)
  }, null, 2)], 64)) : le("v-if", !0), c(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[1],
    "hide-button": "",
    onChange: t[1] || (t[1] = (i) => e.$emit("endChange", i))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"])], 2);
}
var im = /* @__PURE__ */ se(am, [["render", rm]]);
const sm = N({
  name: "Slider",
  components: {
    SliderButton: Gh,
    SliderDots: Qh,
    SliderMarks: tm,
    SliderTicks: om,
    SliderInput: im
  },
  props: {
    modelValue: {
      type: [Number, Array],
      default: void 0
    },
    defaultValue: {
      type: [Number, Array],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    marks: {
      type: Object
    },
    max: {
      type: Number,
      default: 100
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showTicks: {
      type: Boolean,
      default: !1
    },
    showInput: {
      type: Boolean,
      default: !1
    },
    range: {
      type: Boolean,
      default: !1
    },
    formatTooltip: {
      type: Function
    },
    showTooltip: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      modelValue: n
    } = $e(e), l = ee("slider"), {
      mergedDisabled: o,
      eventHandlers: r
    } = vt({
      disabled: Cl(e, "disabled")
    }), a = B(null), i = B(), s = e.modelValue ? e.modelValue : e.defaultValue, u = B(ze(s) ? s[0] : 0), d = B(ze(s) ? s[1] : s);
    be(n, (g) => {
      var x, O, U, Y, G;
      ze(g) ? (u.value = (O = (x = g[0]) != null ? x : e.min) != null ? O : 0, d.value = (Y = (U = g[1]) != null ? U : e.min) != null ? Y : 0) : d.value = (G = g ?? e.min) != null ? G : 0;
    });
    const f = () => {
      var g, x;
      e.range ? (t("update:modelValue", [u.value, d.value]), t("change", [u.value, d.value])) : (t("update:modelValue", d.value), t("change", d.value)), (x = (g = r.value) == null ? void 0 : g.onChange) == null || x.call(g);
    }, m = (g) => {
      g = g ?? e.min, u.value = g, f();
    }, p = (g) => {
      g = g ?? e.min, d.value = g, f();
    }, b = v(() => {
      var g, x, O;
      return e.range ? ze(e.modelValue) ? e.modelValue : [u.value, (g = e.modelValue) != null ? g : d.value] : Ye(e.modelValue) ? [u.value, d.value] : ze(e.modelValue) ? [(x = e.min) != null ? x : 0, e.modelValue[1]] : [(O = e.min) != null ? O : 0, e.modelValue];
    }), y = v(() => Object.keys(e.marks || {}).map((g) => {
      var x;
      const O = Number(g);
      return {
        key: O,
        content: (x = e.marks) == null ? void 0 : x[O],
        isActive: O >= b.value[0] && O <= b.value[1]
      };
    })), D = (g) => eo(Lt(g, [e.min, e.max]), e.direction), A = B(!1), S = () => {
      A.value = !0, a.value && (i.value = a.value.getBoundingClientRect());
    };
    function w(g, x) {
      if (!i.value)
        return 0;
      const {
        left: O,
        top: U,
        width: Y,
        height: G
      } = i.value, J = e.direction === "horizontal" ? Y : G, W = J * e.step / (e.max - e.min);
      let te = e.direction === "horizontal" ? g - O : U + G - x;
      te < 0 && (te = 0), te > J && (te = J);
      const M = Math.round(te / W);
      return ln.plus(e.min, ln.times(M, e.step));
    }
    const k = (g, x) => {
      d.value = w(g, x), f();
    }, L = (g) => {
      if (o.value)
        return;
      const {
        clientX: x,
        clientY: O
      } = g;
      a.value && (i.value = a.value.getBoundingClientRect()), d.value = w(x, O), f();
    };
    function $([g, x]) {
      return g > x && ([g, x] = [x, g]), e.direction === "vertical" ? {
        bottom: Lt(g, [e.min, e.max]),
        top: Lt(e.max + e.min - x, [e.min, e.max])
      } : {
        left: Lt(g, [e.min, e.max]),
        right: Lt(e.max + e.min - x, [e.min, e.max])
      };
    }
    const V = (g, x) => {
      u.value = w(g, x), f();
    }, E = () => {
      A.value = !1;
    }, T = v(() => [l, {
      [`${l}-vertical`]: e.direction === "vertical",
      [`${l}-with-marks`]: Boolean(e.marks)
    }]), P = v(() => [`${l}-track`, {
      [`${l}-track-disabled`]: o.value,
      [`${l}-track-vertical`]: e.direction === "vertical"
    }]);
    return {
      prefixCls: l,
      cls: T,
      trackCls: P,
      trackRef: a,
      computedValue: b,
      mergedDisabled: o,
      markList: y,
      getBtnStyle: D,
      getBarStyle: $,
      handleClick: L,
      handleMoveStart: S,
      handleEndMoving: k,
      handleMoveEnd: E,
      handleStartMoving: V,
      handleStartChange: m,
      handleEndChange: p
    };
  }
});
function um(e, t, n, l, o, r) {
  const a = ce("slider-ticks"), i = ce("slider-dots"), s = ce("slider-marks"), u = ce("slider-button"), d = ce("slider-input");
  return _(), I("div", {
    class: K(e.cls)
  }, [h("div", {
    ref: "trackRef",
    class: K(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [h("div", {
    class: K(`${e.prefixCls}-bar`),
    style: ge(e.getBarStyle(e.computedValue))
  }, null, 6), e.showTicks ? (_(), de(a, {
    key: 0,
    value: e.computedValue,
    step: e.step,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["value", "step", "min", "max", "direction"])) : le("v-if", !0), e.marks ? (_(), de(i, {
    key: 1,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : le("v-if", !0), e.marks ? (_(), de(s, {
    key: 2,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : le("v-if", !0), e.range ? (_(), de(u, {
    key: 3,
    style: ge(e.getBtnStyle(e.computedValue[0])),
    value: e.computedValue[0],
    direction: e.direction,
    disabled: e.mergedDisabled,
    min: e.min,
    max: e.max,
    "format-tooltip": e.formatTooltip,
    "show-tooltip": e.showTooltip,
    onMovestart: e.handleMoveStart,
    onMoving: e.handleStartMoving,
    onMoveend: e.handleMoveEnd
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])) : le("v-if", !0), c(u, {
    style: ge(e.getBtnStyle(e.computedValue[1])),
    value: e.computedValue[1],
    direction: e.direction,
    disabled: e.mergedDisabled,
    min: e.min,
    max: e.max,
    "format-tooltip": e.formatTooltip,
    "show-tooltip": e.showTooltip,
    onMovestart: e.handleMoveStart,
    onMoving: e.handleEndMoving,
    onMoveend: e.handleMoveEnd
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (_(), de(d, {
    key: 0,
    "model-value": e.computedValue,
    min: e.min,
    max: e.max,
    step: e.step,
    range: e.range,
    disabled: e.disabled,
    onStartChange: e.handleStartChange,
    onEndChange: e.handleEndChange
  }, null, 8, ["model-value", "min", "max", "step", "range", "disabled", "onStartChange", "onEndChange"])) : le("v-if", !0)], 2);
}
var Wo = /* @__PURE__ */ se(sm, [["render", um]]);
const ys = Object.assign(Wo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Wo.name, Wo);
  }
});
var Uo = N({
  name: "Space",
  props: {
    align: {
      type: String
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: "small"
    },
    wrap: {
      type: Boolean
    },
    fill: {
      type: Boolean
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = ee("space"), l = v(() => {
      var i;
      return (i = e.align) != null ? i : e.direction === "horizontal" ? "center" : "";
    }), o = v(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${l.value}`]: l.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function r(i) {
      if (me(i))
        return i;
      switch (i) {
        case "mini":
          return 4;
        case "small":
          return 8;
        case "medium":
          return 16;
        case "large":
          return 24;
        default:
          return 8;
      }
    }
    const a = (i) => {
      const s = {}, u = `${r(ze(e.size) ? e.size[0] : e.size)}px`, d = `${r(ze(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: d
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = d), s);
    };
    return () => {
      var i;
      const s = hl((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== Us);
      return c("div", {
        class: o.value
      }, [s.map((u, d) => {
        var f, m;
        const p = t.split && d > 0;
        return c(Pe, {
          key: (f = u.key) != null ? f : `item-${d}`
        }, [p && c("div", {
          class: `${n}-item-split`,
          style: a(!1)
        }, [(m = t.split) == null ? void 0 : m.call(t)]), c("div", {
          class: `${n}-item`,
          style: a(d === s.length - 1)
        }, [u])]);
      })]);
    };
  }
});
const cm = Object.assign(Uo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Uo.name, Uo);
  }
}), dm = N({
  name: "Switch",
  components: {
    IconLoading: Ut
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "circle"
    },
    size: {
      type: String
    },
    checkedValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    uncheckedValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    checkedColor: {
      type: String
    },
    uncheckedColor: {
      type: String
    },
    beforeChange: {
      type: Function
    },
    checkedText: {
      type: String
    },
    uncheckedText: {
      type: String
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      disabled: n,
      size: l,
      modelValue: o
    } = $e(e), r = ee("switch"), {
      mergedSize: a
    } = yt(l), {
      mergedDisabled: i,
      mergedSize: s,
      eventHandlers: u
    } = vt({
      disabled: n,
      size: a
    }), d = B(e.defaultChecked ? e.checkedValue : e.uncheckedValue), f = v(() => {
      var k;
      return ((k = e.modelValue) != null ? k : d.value) === e.checkedValue;
    }), m = B(e.loading), p = v(() => m.value || e.loading), b = (k, L) => {
      var $, V;
      d.value = k ? e.checkedValue : e.uncheckedValue, t("update:modelValue", d.value), t("change", d.value, L), (V = ($ = u.value) == null ? void 0 : $.onChange) == null || V.call($, L);
    }, y = async (k) => {
      if (p.value || i.value)
        return;
      const L = !f.value, $ = L ? e.checkedValue : e.uncheckedValue, V = e.beforeChange;
      if (Ze(V)) {
        m.value = !0;
        try {
          const E = await V($);
          (E ?? !0) && b(L, k);
        } finally {
          m.value = !1;
        }
      } else
        b(L, k);
    }, D = (k) => {
      var L, $;
      t("focus", k), ($ = (L = u.value) == null ? void 0 : L.onFocus) == null || $.call(L, k);
    }, A = (k) => {
      var L, $;
      t("blur", k), ($ = (L = u.value) == null ? void 0 : L.onBlur) == null || $.call(L, k);
    };
    be(o, (k) => {
      (Ye(k) || Vn(k)) && (d.value = e.uncheckedValue);
    });
    const S = v(() => [r, `${r}-type-${e.type}`, {
      [`${r}-small`]: s.value === "small" || s.value === "mini",
      [`${r}-checked`]: f.value,
      [`${r}-disabled`]: i.value,
      [`${r}-loading`]: p.value,
      [`${r}-custom-color`]: e.type === "line" && (e.checkedColor || e.uncheckedColor)
    }]), w = v(() => {
      if (f.value && e.checkedColor)
        return e.type === "line" ? {
          "--custom-color": e.checkedColor
        } : {
          backgroundColor: e.checkedColor
        };
      if (!f.value && e.uncheckedColor)
        return e.type === "line" ? {
          "--custom-color": e.uncheckedColor
        } : {
          backgroundColor: e.uncheckedColor
        };
    });
    return {
      prefixCls: r,
      cls: S,
      mergedDisabled: i,
      buttonStyle: w,
      computedCheck: f,
      computedLoading: p,
      handleClick: y,
      handleFocus: D,
      handleBlur: A
    };
  }
}), fm = ["aria-checked", "disabled"];
function pm(e, t, n, l, o, r) {
  const a = ce("icon-loading");
  return _(), I("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: K(e.cls),
    style: ge(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: t[1] || (t[1] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: t[2] || (t[2] = (...i) => e.handleBlur && e.handleBlur(...i))
  }, [h("span", {
    class: K(`${e.prefixCls}-handle`)
  }, [h("span", {
    class: K(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? (_(), de(a, {
    key: 0
  })) : (_(), I(Pe, {
    key: 1
  }, [e.computedCheck ? re(e.$slots, "checked-icon", {
    key: 0
  }) : re(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), le("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (_(), I(Pe, {
    key: 0
  }, [h("span", {
    class: K(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [pe(ye(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [pe(ye(e.uncheckedText), 1)])], 2), h("span", {
    class: K(`${e.prefixCls}-text`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [pe(ye(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [pe(ye(e.uncheckedText), 1)])], 2)], 64)) : le("v-if", !0)], 46, fm);
}
var Ko = /* @__PURE__ */ se(dm, [["render", pm]]);
const Vt = Object.assign(Ko, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ko.name, Ko);
  }
}), vm = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, Aa = Symbol("ArcoTabs"), hm = N({
  name: "TabsTab",
  components: {
    IconHover: ct,
    IconClose: an
  },
  props: {
    tab: {
      type: Object,
      required: !0
    },
    active: Boolean,
    editable: Boolean
  },
  emits: ["click", "delete"],
  setup(e, {
    emit: t
  }) {
    const n = ee("tabs-tab"), l = We(Aa, {}), o = (u) => {
      e.tab.disabled || t("click", e.tab.key, u);
    }, r = (u) => {
      u.key === "Enter" && o(u);
    }, a = v(() => Object.assign(l.trigger === "click" ? {
      onClick: o
    } : {
      onMouseover: o
    }, {
      onKeydown: r
    })), i = (u) => {
      e.tab.disabled || t("delete", e.tab.key, u);
    }, s = v(() => [n, {
      [`${n}-active`]: e.active,
      [`${n}-closable`]: e.editable && e.tab.closable,
      [`${n}-disabled`]: e.tab.disabled
    }]);
    return {
      prefixCls: n,
      cls: s,
      eventHandlers: a,
      handleDelete: i
    };
  }
});
function mm(e, t, n, l, o, r) {
  const a = ce("icon-close"), i = ce("icon-hover");
  return _(), I("div", Se({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [h("span", {
    class: K(`${e.prefixCls}-title`)
  }, [re(e.$slots, "default")], 2), e.editable && e.tab.closable ? (_(), de(i, {
    key: 0,
    class: K(`${e.prefixCls}-close-btn`),
    onClick: nn(e.handleDelete, ["stop"])
  }, {
    default: ne(() => [c(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : le("v-if", !0)], 16);
}
var gm = /* @__PURE__ */ se(hm, [["render", mm]]);
function bm(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ya(e);
}
var pi = N({
  name: "TabsButton",
  props: {
    type: {
      type: String,
      default: "next"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    onClick: {
      type: Function
    }
  },
  emits: ["click"],
  setup(e, {
    emit: t
  }) {
    const n = ee("tabs-nav-button"), l = (a) => {
      e.disabled || t("click", e.type, a);
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? c(Af, null, null) : c(mp, null, null) : e.type === "next" ? c(Ia, null, null) : c(ts, null, null), r = v(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let a;
      return c("div", {
        class: r.value,
        onClick: l
      }, [c(ct, {
        disabled: e.disabled
      }, bm(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const ym = N({
  name: "TabsNavInk",
  props: {
    activeTabRef: {
      type: Object
    },
    direction: {
      type: String
    },
    disabled: Boolean,
    animation: Boolean
  },
  setup(e) {
    const {
      activeTabRef: t
    } = $e(e), n = ee("tabs-nav-ink"), l = B(0), o = B(0), r = v(() => e.direction === "vertical" ? {
      top: `${l.value}px`,
      height: `${o.value}px`
    } : {
      left: `${l.value}px`,
      width: `${o.value}px`
    }), a = () => {
      if (t.value) {
        const s = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, u = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
        (s !== l.value || u !== o.value) && (l.value = s, o.value = u);
      }
    };
    Oe(() => {
      Le(() => a());
    }), Pt(() => {
      a();
    });
    const i = v(() => [n, {
      [`${n}-animation`]: e.animation,
      [`${n}-disabled`]: e.disabled
    }]);
    return {
      prefixCls: n,
      cls: i,
      style: r
    };
  }
});
function _m(e, t, n, l, o, r) {
  return _(), I("div", {
    class: K(e.cls),
    style: ge(e.style)
  }, null, 6);
}
var $m = /* @__PURE__ */ se(ym, [["render", _m]]), wm = N({
  name: "TabsNav",
  props: {
    tabs: {
      type: Array,
      required: !0
    },
    direction: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !0
    },
    activeKey: {
      type: [String, Number]
    },
    activeIndex: {
      type: Number,
      required: !0
    },
    position: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      required: !0
    },
    showAddButton: {
      type: Boolean,
      default: !1
    },
    editable: {
      type: Boolean,
      default: !1
    },
    animation: {
      type: Boolean,
      required: !0
    },
    headerPadding: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click", "add", "delete"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      tabs: l,
      activeKey: o,
      activeIndex: r,
      direction: a
    } = $e(e), i = ee("tabs-nav"), s = B(), u = B(), d = B({}), f = v(() => {
      if (!Ye(o.value))
        return d.value[o.value];
    }), m = B(), p = v(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), b = B(!1), y = B(0), D = B(0), A = B([]), S = B(0), w = () => {
      var M, C, H;
      return (H = a.value === "vertical" ? (M = s.value) == null ? void 0 : M.offsetHeight : (C = s.value) == null ? void 0 : C.offsetWidth) != null ? H : 0;
    }, k = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, L = () => l.value.map((M) => {
      const C = d.value[M.key];
      return a.value === "vertical" ? C.offsetTop + C.offsetHeight : C.offsetLeft + C.offsetWidth;
    }), $ = () => {
      b.value = V(), b.value ? (y.value = w(), D.value = k(), A.value = L(), S.value > D.value && (S.value = D.value)) : S.value = 0;
    }, V = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, E = (M) => {
      var C;
      return ((C = A.value[M - 1]) != null ? C : 0) >= S.value && A.value[M] <= S.value + y.value;
    }, T = (M) => s.value ? M === "previous" ? S.value - y.value : S.value + y.value : 0, P = (M) => !s.value || !u.value || M < 0 ? 0 : M > D.value ? D.value : M, g = (M, C) => {
      t("click", M, C);
    }, x = (M, C) => {
      t("delete", M, C);
    }, O = (M) => {
      S.value = P(T(M));
    }, U = () => {
      $(), m.value && m.value.$forceUpdate();
    };
    be(l, () => {
      Le(() => {
        $();
      });
    }), be(r, (M, C) => {
      Le(() => {
        var H;
        if (b.value)
          if (M >= C) {
            const Q = M < A.value.length - 1 ? M + 1 : M;
            E(Q) || (S.value = A.value[Q] - y.value);
          } else {
            const Q = M > 0 ? M - 1 : M;
            E(Q) || (S.value = (H = A.value[Q - 1]) != null ? H : 0);
          }
      });
    }), Oe(() => {
      $();
    });
    const Y = () => !p.value || !e.showAddButton ? null : c("div", {
      class: `${i}-add-btn`,
      onClick: (M) => t("add", M)
    }, [c(ct, null, {
      default: () => [c(is, null, null)]
    })]), G = v(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), J = v(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), W = v(() => vm({
      direction: e.direction,
      type: e.type,
      offset: S.value
    })), te = v(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: b.value
    }]);
    return () => {
      var M;
      return c("div", {
        class: G.value
      }, [b.value && c(pi, {
        type: "previous",
        direction: e.direction,
        disabled: S.value <= 0,
        onClick: O
      }, null), c(Ol, {
        onResize: () => $()
      }, {
        default: () => [c("div", {
          class: te.value,
          ref: s
        }, [c(Ol, {
          onResize: U
        }, {
          default: () => [c("div", {
            ref: u,
            class: J.value,
            style: W.value
          }, [e.tabs.map((C, H) => c(gm, {
            key: C.key,
            ref: (Q) => {
              Q != null && Q.$el && (d.value[C.key] = Q.$el);
            },
            active: C.key === o.value,
            tab: C,
            editable: e.editable,
            onClick: g,
            onDelete: x
          }, {
            default: () => {
              var Q, he, we;
              return [(we = (he = (Q = C.slots).title) == null ? void 0 : he.call(Q)) != null ? we : C.title];
            }
          })), e.type === "line" && f.value && c($m, {
            ref: m,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !b.value && Y()])]
      }), b.value && c(pi, {
        type: "next",
        direction: e.direction,
        disabled: S.value >= D.value,
        onClick: O
      }, null), c("div", {
        class: `${i}-extra`
      }, [b.value && Y(), (M = n.extra) == null ? void 0 : M.call(n)])]);
    };
  }
}), Yo = N({
  name: "Tabs",
  props: {
    activeKey: {
      type: [String, Number],
      default: void 0
    },
    defaultActiveKey: {
      type: [String, Number],
      default: void 0
    },
    position: {
      type: String,
      default: "top"
    },
    size: {
      type: String
    },
    type: {
      type: String,
      default: "line"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    editable: {
      type: Boolean,
      default: !1
    },
    showAddButton: {
      type: Boolean,
      default: !1
    },
    destroyOnHide: {
      type: Boolean,
      default: !1
    },
    lazyLoad: {
      type: Boolean,
      default: !1
    },
    justify: {
      type: Boolean,
      default: !1
    },
    animation: {
      type: Boolean,
      default: !1
    },
    headerPadding: {
      type: Boolean,
      default: !0
    },
    autoSwitch: {
      type: Boolean,
      default: !1
    },
    hideContent: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: String,
      default: "click"
    }
  },
  emits: {
    "update:activeKey": (e) => !0,
    change: (e) => !0,
    tabClick: (e, t) => !0,
    add: (e) => !0,
    delete: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      size: l,
      lazyLoad: o,
      destroyOnHide: r,
      trigger: a
    } = $e(e), i = ee("tabs"), {
      mergedSize: s
    } = yt(l), u = v(() => e.direction === "vertical" ? "left" : e.position), d = v(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: f,
      components: m
    } = wp("TabPane"), p = Ie(/* @__PURE__ */ new Map()), b = v(() => {
      const g = [];
      return m.value.forEach((x) => {
        const O = p.get(x);
        O && g.push(O);
      }), g;
    }), y = v(() => b.value.map((g) => g.key)), D = (g, x) => {
      p.set(g, x);
    }, A = (g) => {
      p.delete(g);
    }, S = B(e.defaultActiveKey), w = v(() => {
      var g;
      const x = (g = e.activeKey) != null ? g : S.value;
      return Ye(x) ? y.value[0] : x;
    }), k = v(() => {
      const g = y.value.indexOf(w.value);
      return g === -1 ? 0 : g;
    });
    Ht(Aa, Ie({
      lazyLoad: o,
      destroyOnHide: r,
      activeKey: w,
      addItem: D,
      removeItem: A,
      trigger: a
    }));
    const L = (g) => {
      g !== w.value && (S.value = g, t("update:activeKey", g), t("change", g));
    }, $ = (g, x) => {
      L(g), t("tabClick", g, x);
    }, V = (g) => {
      t("add", g), e.autoSwitch && Le(() => {
        const x = y.value[y.value.length - 1];
        L(x);
      });
    }, E = (g, x) => {
      t("delete", g, x);
    }, T = () => c("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [c("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${k.value * 100}%`
      }
    }, [f.value])]), P = v(() => [i, `${i}-${d.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var g;
      return f.value = (g = n.default) == null ? void 0 : g.call(n), c("div", {
        class: P.value
      }, [u.value === "bottom" && T(), c(wm, {
        tabs: b.value,
        activeKey: w.value,
        activeIndex: k.value,
        direction: d.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: $,
        onAdd: V,
        onDelete: E
      }, {
        extra: n.extra
      }), u.value !== "bottom" && T()]);
    };
  }
}), km = Object.defineProperty, vi = Object.getOwnPropertySymbols, Cm = Object.prototype.hasOwnProperty, Sm = Object.prototype.propertyIsEnumerable, hi = (e, t, n) => t in e ? km(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Vm = (e, t) => {
  for (var n in t || (t = {}))
    Cm.call(t, n) && hi(e, n, t[n]);
  if (vi)
    for (var n of vi(t))
      Sm.call(t, n) && hi(e, n, t[n]);
  return e;
};
const Em = N({
  name: "TabPane",
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !0
    },
    destroyOnHide: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    var n;
    const {
      title: l,
      disabled: o,
      closable: r
    } = $e(e), a = Yn(), i = ee("tabs"), s = We(Aa, {}), u = B(), d = v(() => a == null ? void 0 : a.vnode.key), f = v(() => d.value === s.activeKey), m = B(s.lazyLoad ? f.value : !0), p = Ie({
      key: d,
      title: l,
      disabled: o,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, p)), Wt(() => {
      var b;
      a != null && a.uid && ((b = s.removeItem) == null || b.call(s, a.uid));
    }), be(f, (b) => {
      b ? m.value || (m.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (m.value = !1);
    }), Pt(() => {
      p.slots = Vm({}, t);
    }), {
      prefixCls: i,
      active: f,
      itemRef: u,
      mounted: m
    };
  }
});
function Om(e, t, n, l, o, r) {
  return _(), I("div", {
    ref: "itemRef",
    class: K([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (_(), I("div", {
    key: 0,
    class: K(`${e.prefixCls}-pane`)
  }, [re(e.$slots, "default")], 2)) : le("v-if", !0)], 2);
}
var en = /* @__PURE__ */ se(Em, [["render", Om]]);
const mi = Object.assign(Yo, {
  TabPane: en,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Yo.name, Yo), e.component(n + en.name, en);
  }
}), xm = /* @__PURE__ */ h("span", null, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png",
  alt: "",
  class: "active"
})], -1), Bm = /* @__PURE__ */ h("span", null, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png",
  alt: "",
  style: {
    transform: "rotateZ(180deg)"
  },
  class: "active"
})], -1), Im = /* @__PURE__ */ h("span", null, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png",
  alt: "",
  style: {
    transform: "rotateZ(180deg)"
  },
  class: "active"
})], -1), Pm = /* @__PURE__ */ N({
  __name: "editor-bloack-operate",
  emits: ["operate"],
  setup(e, {
    emit: t
  }) {
    function n(l) {
      t("operate", l);
    }
    return (l, o) => {
      const r = Jl;
      return _(), I("div", {
        class: "editor-bloack-operate",
        onClick: o[3] || (o[3] = () => {
        })
      }, [h("div", {
        class: "editor-bloack-wrapper delBlock",
        onClick: o[0] || (o[0] = (a) => n("delBlock"))
      }, [c(r, {
        content: "删除",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: ne(() => [xm]),
        _: 1
      })]), h("div", {
        class: "editor-bloack-wrapper upBlock",
        onClick: o[1] || (o[1] = (a) => n("upBlock"))
      }, [c(r, {
        content: "上移",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: ne(() => [Bm]),
        _: 1
      })]), h("div", {
        class: "editor-bloack-wrapper downBlock",
        onClick: o[2] || (o[2] = (a) => n("downBlock"))
      }, [c(r, {
        content: "下移",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: ne(() => [Im]),
        _: 1
      })])]);
    };
  }
});
const Ml = /* @__PURE__ */ N({
  props: {
    // 外壳 定位 放大缩小用的
    block: {
      type: Object,
      default: () => ({
        left: 0,
        top: 0
      })
    },
    priview: {
      type: Boolean,
      default: !1
    },
    container: {
      type: Object,
      default: () => ({
        width: 0,
        height: 0,
        wrapper: 0
      })
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    // GridItem: VueGridLayout.GridItem,
    editorBloackOperate: Pm
  },
  setup(e, {
    emit: t
  }) {
    let n = rt == null ? void 0 : rt.componentMap[e.block.componentKey];
    const l = v(() => {
      if (e.block.dragMode == "free") {
        let i = {
          position: "absolute",
          left: e.block.left + "px",
          top: e.block.top + "px",
          zIndex: e.block.zIndex,
          width: e.block.widthAdaption100 ? "100%" : "auto"
        };
        return n.editorBlockShellStyle ? n.editorBlockShellStyle(e.block, i) : i;
      } else if (e.block.dragMode == "updown" || e.block.dragMode == "default" || e.block.dragMode == "") {
        let i = {
          margin: "0 auto",
          width: "100%",
          // width: props.block.widthAdaption100
          //   ? "100%"
          //   : props.container.width + "px",
          position: "relative"
        };
        return n.editorBlockShellStyle ? n.editorBlockShellStyle(e.block, i) : i;
      }
      return {};
    }), o = B({});
    Oe(() => {
      e.block.adjustmentPosition && e.block.dragMode == "free" && (e.block.left = e.block.left - o.value.offsetWidth / 2, e.block.top = e.block.top - o.value.offsetHeight / 2, e.block.adjustmentPosition = !1, e.block.width = o.value.offsetWidth, e.block.height = o.value.offsetHeight);
    });
    let r = v(() => ["editor-bloack", e.block.focus ? "editor-bloack-focus" : ""]);
    function a(i) {
      t(i);
    }
    return () => e.block.dragMode == "free" ? c("div", {
      class: r.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? c(ce("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : e.block.dragMode == "default" || e.block.dragMode == "updown" || e.block.dragMode == "" ? c("div", {
      class: r.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? c(ce("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : c("div", {
      style: {
        backgroundColor: "gray"
      }
    }, [c(ce("grid-item"), {
      x: e.block.x,
      y: e.block.y,
      w: e.block.w,
      h: e.block.h,
      i: 1,
      key: e.block.id
    }, {
      default: () => [n == null ? void 0 : n.render(e.block)]
    })]);
  }
});
function jm(e) {
  const t = Ie({
    // 当前索引
    current: -1,
    // 是撤销和回退的队列
    queue: [],
    // 通过key往外暴露执行comman的执行和收集过程
    commandMap: {},
    commandArray: [],
    // 存放command命令对象
    destoryList: []
    // 存放销毁回调的
  });
  let n = {
    89: "y",
    65: "a",
    67: "c",
    86: "v",
    90: "z",
    83: "s",
    68: "d",
    46: "delete",
    84: "t",
    66: "b",
    79: "o",
    80: "p",
    38: "up",
    40: "down"
  };
  const l = () => {
    const a = (i) => {
      if (document.activeElement !== document.body)
        return;
      const {
        keyCode: s,
        shiftKey: u,
        altKey: d,
        ctrlKey: f
      } = i;
      let m = [];
      f && m.push("ctrl"), u && m.push("shift"), d && m.push("alt"), m.push(n[s]);
      let p = m.join("+");
      t.commandArray.forEach((b) => {
        let {
          keyboard: y,
          name: D
        } = b;
        y && (typeof y == "string" && (y = [y]), y = y.map((A) => A.replace(/\s+/g, "")), y != null && y.includes(p) && (t.commandMap[D](), i.stopPropagation()));
      });
    };
    return e ? (window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a)) : () => {
    };
  }, o = () => {
    t.commandArray.forEach((a) => {
      a.init && t.destoryList.push(a.init());
    }), t.destoryList.push(l());
  };
  Hl(() => {
    t.destoryList.forEach((a) => a && a());
  });
  function r(a) {
    if (t.commandArray.push(a), a.init) {
      let i = a.init();
      i && typeof i == "function" ? t.commandArray.push(i) : console.error(`为了性能优化，请在${a.name}这个命令中加入销毁函数！`);
    }
    t.commandMap[a.name] = (...i) => {
      if (a.disabled) {
        alert("该快捷命令已禁用！");
        return;
      }
      const {
        undo: s,
        redo: u
      } = a.excute(...i);
      u && u(), a.followQueue != !1 && (t.queue.length > 0 && t.queue.slice(0, t.current), t.queue.push({
        undo: s,
        redo: u
      }), t.current++);
    };
  }
  return r({
    name: "undo",
    // 撤销
    keyboard: "ctrl + z",
    followQueue: !1,
    excute() {
      return {
        redo() {
          let {
            current: a
          } = t;
          if (a <= -1)
            return;
          const {
            undo: i
          } = t.queue[a];
          i && (i(), t.current -= 1);
        }
      };
    }
  }), r({
    name: "redo",
    // 重做
    keyboard: "ctrl + y",
    followQueue: !1,
    excute() {
      return {
        redo() {
          const a = t.queue[t.current + 1];
          a && (a.redo && a.redo(), t.current += 1);
        }
      };
    }
  }), {
    state: t,
    registor: r,
    init: o
  };
}
class _s {
  constructor() {
    Ha(this, "Listener");
    this.Listener = {};
  }
  // 监听事件
  on(t, n) {
    this.Listener[t] || (this.Listener[t] = []), this.Listener[t].push(n);
  }
  // 只绑定一次
  once(t, n) {
    function l(...o) {
      n.call(this, ...o), this.off(t, l);
    }
    this.Listener[t] || (this.Listener[t] = []), this.Listener[t].push(l);
  }
  // 移除事件
  off(t, n) {
    this.Listener[t] && (this.Listener[t] = this.Listener[t].filter((l) => l !== n));
  }
  // 派发事件
  emit(t, ...n) {
    if (t) {
      this.Listener[t].forEach((l) => {
        l.call(this, ...n);
      });
      return;
    }
    for (let l in this.Listener)
      this.Listener[l].forEach((o) => o.call(this));
  }
}
new _s();
let yn = new _s();
const Dl = {
  on: function(e) {
    yn.on("dragstart", e);
  },
  emit: function(...e) {
    yn.emit("dragstart", ...e);
  },
  off: function(e) {
    yn.off("dragstart", e);
  }
}, zl = {
  on: function(e) {
    yn.on("dragend", e);
  },
  emit: function(...e) {
    yn.emit("dragend", ...e);
  },
  off: function(e) {
    yn.off("dragend", e);
  }
};
function Xe(e) {
  if (e && typeof e == "object") {
    if (typeof e == "function") {
      let l = e.bind(null);
      return l.prototype = Xe(e.prototype), l;
    }
    switch (Object.prototype.toString.call(e)) {
      case "[object String]":
        return e.toString();
      case "[object Number]":
        return Number(e.toString());
      case "[object Boolean]":
        return new Boolean(e.toString());
      case "[object Date]":
        return new Date(e.getTime());
      case "[object Array]":
        var t = [];
        for (let l = 0; l < e.length; l++)
          t[l] = Xe(e[l]);
        return t;
      case "[object Object]":
        var n = {};
        for (let l in e)
          n[l] = Xe(e[l]);
        return n;
    }
  } else
    return e;
}
function Tm(e, t) {
  return [{
    label: "删除",
    icon: "",
    handler: () => {
      var l;
      (l = t.value.focusBlock) != null && l.length && e.delete();
    },
    tip: "delete"
  }, {
    label: "清空",
    icon: "",
    handler: () => {
      var l;
      (l = t.value.focusBlock) != null && l.length && e.clear();
    },
    tip: "ctrl + alt + d"
  }, {
    label: "撤销",
    icon: "",
    handler: e.undo,
    tip: "ctrl + z"
  }, {
    label: "重做",
    icon: "",
    handler: e.redo,
    tip: "ctrl + y"
  }, {
    label: "上移",
    icon: "",
    handler: e.up,
    tip: "alt + up"
  }, {
    label: "下移",
    icon: "",
    handler: e.down,
    tip: "alt + down"
  }];
}
function Mm({
  // 需要传入一些响应式的数据
  currentBlockInfo: e,
  //  获得焦点的数据
  updateBlocks: t,
  // 更新组件模块数据
  dataModel: n,
  // 双向绑定的数据
  shortcutKeys: l
  // 是否开启快捷键操作
}) {
  let o = jm(l);
  return o.registor({
    name: "delete",
    keyboard: ["delete", "ctrl + d"],
    excute(r) {
      let a = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(a.after);
        },
        redo() {
          if (r) {
            a.after = n.value.blocks, a.before = a.after.filter((u) => u != r), t(a.before);
            return;
          }
          const {
            blurBlock: i,
            focusBlock: s
          } = e.value;
          if (!s.length) {
            console.warn("暂无需要删除的组件");
            return;
          }
          a.after = n.value.blocks, a.before = i, t(i);
        }
      };
    }
  }), o.registor({
    name: "drag",
    init() {
      this.data = {
        before: null,
        // 之前的数据
        after: null
        // 之后的数据 - 也就是当前的数据
      };
      const r = {
        dragstart: () => {
          this.data.before = Xe(n.value.blocks || []);
        },
        dragend: () => {
          o.state.commandMap.drag();
        }
      };
      return Dl.on(r.dragstart), zl.on(r.dragend), () => {
        Dl.off(r.dragstart), zl.off(r.dragend);
      };
    },
    excute() {
      let r = Xe(this.data.before), a = Xe(n.value.blocks || []);
      return {
        undo() {
          t(r);
        },
        redo() {
          t(a);
        }
      };
    }
  }), o.registor({
    name: "clear",
    keyboard: ["ctrl + alt + d"],
    excute() {
      let r = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(r.before);
        },
        redo() {
          r.before = Xe(n.value.blocks || []), r.after = [], t(r.after);
        }
      };
    }
  }), o.registor({
    name: "top",
    keyboard: ["ctrl + o"],
    excute() {
      let r = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(r.before);
        },
        redo() {
          const {
            focusBlock: a
          } = e.value;
          if (!a.length) {
            console.warn("暂无需要置顶的组件");
            return;
          }
          r.before = Xe(n.value.blocks);
          let i = n.value.blocks.reduce((s, u) => Math.max(u.zIndex, s), -1 / 0) + 1;
          a.forEach((s) => {
            s.zIndex = i;
          }), r.after = n.value.blocks, t(n.value.blocks);
        }
      };
    }
  }), o.registor({
    name: "bottom",
    keyboard: ["ctrl + b"],
    excute() {
      let r = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(r.before);
        },
        redo() {
          const {
            focusBlock: a
          } = e.value;
          if (!a.length) {
            console.warn("暂无需要置顶的组件");
            return;
          }
          r.before = Xe(n.value.blocks);
          let i = n.value.blocks.reduce((s, u) => (u.zIndex <= 0 && (u.zIndex += Math.abs(u.zIndex)), u.zIndex += 1, Math.min(u.zIndex, s)), 1 / 0) - 1;
          a.forEach((s) => {
            s.zIndex = i;
          }), r.after = n.value.blocks, t(n.value.blocks);
        }
      };
    }
  }), o.registor({
    name: "add",
    excute(r, a) {
      let i = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(i.before);
        },
        redo() {
          if (a === void 0) {
            let s = n.value.blocks;
            i.before = Xe(s), s.push(r), i.after = s, t(i.after);
          } else {
            let s = n.value.blocks;
            i.before = Xe(s), s.splice(a, 0, r), i.after = s, t(i.after);
          }
        }
      };
    }
  }), o.registor({
    name: "up",
    // 向上移动
    keyboard: ["ctrl + up", "alt + up"],
    excute() {
      let r = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(r.before);
        },
        redo() {
          let a = n.value.blocks;
          if (a.length <= 1) {
            gt.warning("元素不需要移动！");
            return;
          }
          let i = a.findIndex((d) => d.focus);
          if (i < 0) {
            gt.warning("当前没有要移动的元素！");
            return;
          }
          if (i == 0) {
            gt.warning("移动无效！");
            return;
          }
          r.before = Xe(a);
          let s = a[i - 1], u = a[i];
          a[i] = s, a[i - 1] = u, r.after = a, t(r.after);
        }
      };
    }
  }), o.registor({
    name: "down",
    // 向下移动
    keyboard: ["ctrl + down", "alt + down"],
    excute() {
      let r = {
        before: [],
        // 保存之前
        after: []
        // 之后
      };
      return {
        undo() {
          t(r.before);
        },
        redo() {
          let a = n.value.blocks;
          if (a.length <= 1) {
            gt.warning("移动无效！");
            return;
          }
          let i = a.findIndex((d) => d.focus);
          if (i < 0) {
            gt.warning("当前没有要移动的元素！");
            return;
          }
          if (i == a.length - 1) {
            gt.warning("移动的无效！");
            return;
          }
          r.before = Xe(a);
          let s = a[i + 1], u = a[i];
          a[i] = s, a[i + 1] = u, r.after = a, t(r.after);
        }
      };
    }
  }), o.init(), {
    // 可以弄一些默认导出
    undo: () => o.state.commandMap.undo(),
    // 撤销
    redo: () => o.state.commandMap.redo(),
    // 重做
    delete: (...r) => o.state.commandMap.delete(...r),
    // 删除
    drag: () => o.state.commandMap.drag(),
    // 拖拽
    clear: () => o.state.commandMap.clear(),
    // 清空
    add: (...r) => o.state.commandMap.add(...r),
    // 添加一个新元素
    up: (...r) => o.state.commandMap.up(...r),
    // 元素向上移动
    down: (...r) => o.state.commandMap.down(...r)
    // 元素向下移动
  };
}
const Dm = (e) => new Promise((t, n) => {
  const l = new FileReader();
  l.readAsDataURL(e), l.onload = () => {
    t(l.result);
  }, l.onerror = (o) => {
    n(o);
  };
}), zm = (e) => (Qe("data-v-405c2c25"), e = e(), Je(), e), Am = {
  class: "img-upload-container w100"
}, Lm = {
  key: 0,
  class: "real-img w100"
}, Fm = ["src"], Nm = /* @__PURE__ */ zm(() => /* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), Rm = [Nm], qm = /* @__PURE__ */ N({
  __name: "upload-img",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, {
    emit: t
  }) {
    const n = {
      fileChange(l) {
        console.log(l.target.files[0]);
        let o = l.target.files[0];
        Dm(o).then((r) => {
          t("update:modelValue", r), t("change", r);
        });
      },
      del() {
        t("update:modelValue", ""), t("change", "");
      }
    };
    return (l, o) => {
      const r = kn;
      return _(), I("div", Am, [e.modelValue ? (_(), I("div", Lm, [h("img", {
        src: e.modelValue,
        alt: ""
      }, null, 8, Fm), h("div", {
        class: "real-close",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...a) => n.del && n.del(...a))
      }, Rm)])) : le("", !0), c(r, {
        style: {
          width: "100%"
        },
        class: "file-btn"
      }, {
        default: ne(() => [pe(ye(e.modelValue ? "替换图片" : "上传图片") + " ", 1), h("input", {
          type: "file",
          class: "file-input",
          accept: "image/*",
          onChange: o[1] || (o[1] = //@ts-ignore
          (...a) => n.fileChange && n.fileChange(...a))
        }, null, 32)]),
        _: 1
      })]);
    };
  }
});
const je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, $s = /* @__PURE__ */ je(qm, [["__scopeId", "data-v-405c2c25"]]), Hm = {
  key: 0
}, Wm = {
  key: 1
}, Um = {
  key: 0,
  class: "ml12"
}, Km = {
  key: 2
}, Ym = {
  key: 3
}, Gm = {
  key: 0,
  class: "ml12"
}, Xm = {
  key: 4,
  class: "w100"
}, Zm = {
  key: 0,
  class: "ml12"
}, Qm = {
  key: 5,
  class: "w100"
}, Jm = {
  key: 6,
  class: "w100"
}, eg = /* @__PURE__ */ N({
  __name: "built-in-control",
  props: {
    editorControlView: {
      type: Array,
      default: () => []
    },
    currentBlock: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(e) {
    return (t, n) => {
      const l = Ta, o = Kt, r = Th, a = St, i = ys, s = cm, u = mn, d = Pa, f = gn, m = ms;
      return _(), de(m, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: ne(() => [(_(!0), I(Pe, null, bt(e.editorControlView, (p, b) => (_(), de(f, {
          label: p.label,
          key: b
        }, {
          default: ne(() => {
            var y, D, A, S, w, k, L, $, V, E, T, P, g, x;
            return [p.type == "color" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Hm, [c(l, {
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (O) => e.currentBlock.props[p.key].defaultValue = O,
              "show-history": "",
              "show-preset": "",
              showText: "",
              disabledAlpha: "",
              disabled: !!((y = e.currentBlock.props[p.key]) != null && y.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])) : le("", !0), p.type == "input" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Wm, [c(o, {
              style: {
                width: "250px"
              },
              placeholder: `请输入${p.label}`,
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (O) => e.currentBlock.props[p.key].defaultValue = O,
              disabled: !!((D = e.currentBlock.props[p.key]) != null && D.disabled)
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (A = e.currentBlock.props[p.key]) != null && A.unit ? (_(), I("span", Um, ye((S = e.currentBlock.props[p.key]) == null ? void 0 : S.unit), 1)) : le("", !0)])) : le("", !0), p.type == "textarea" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Km, [c(r, {
              "auto-size": {
                minRows: 2,
                maxRows: 6
              },
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (O) => e.currentBlock.props[p.key].defaultValue = O,
              style: {
                width: "250px"
              },
              placeholder: `请输入${p.label}`,
              "allow-clear": "",
              disabled: !!((w = e.currentBlock.props[p.key]) != null && w.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])])) : le("", !0), p.type == "number" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Ym, [c(a, {
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (O) => e.currentBlock.props[p.key].defaultValue = O,
              style: {
                width: "150px"
              },
              placeholder: `请输入${p.label}`,
              disabled: !!((k = e.currentBlock.props[p.key]) != null && k.disabled),
              min: (L = e.currentBlock.props[p.key]) != null && L.min ? (($ = e.currentBlock.props[p.key]) == null ? void 0 : $.min) * 1 : 0,
              max: (V = e.currentBlock.props[p.key]) != null && V.max ? ((E = e.currentBlock.props[p.key]) == null ? void 0 : E.max) * 1 : 100,
              mode: "button",
              size: "large"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (T = e.currentBlock.props[p.key]) != null && T.unit ? (_(), I("span", Gm, ye((P = e.currentBlock.props[p.key]) == null ? void 0 : P.unit), 1)) : le("", !0)])) : le("", !0), p.type == "slider" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Xm, [c(s, {
              size: "large"
            }, {
              default: ne(() => {
                var O, U, Y, G, J;
                return [c(i, {
                  min: (O = e.currentBlock.props[p.key]) != null && O.min ? ((U = e.currentBlock.props[p.key]) == null ? void 0 : U.min) * 1 : 0,
                  max: (Y = e.currentBlock.props[p.key]) != null && Y.max ? ((G = e.currentBlock.props[p.key]) == null ? void 0 : G.max) * 1 : 100,
                  disabled: !!((J = e.currentBlock.props[p.key]) != null && J.disabled),
                  modelValue: e.currentBlock.props[p.key].defaultValue,
                  "onUpdate:modelValue": (W) => e.currentBlock.props[p.key].defaultValue = W,
                  style: {
                    width: "250px",
                    display: "flex"
                  },
                  "show-input": ""
                }, null, 8, ["min", "max", "disabled", "modelValue", "onUpdate:modelValue"])];
              }),
              _: 2
            }, 1024), (g = e.currentBlock.props[p.key]) != null && g.unit ? (_(), I("span", Zm, ye((x = e.currentBlock.props[p.key]) == null ? void 0 : x.unit), 1)) : le("", !0)])) : le("", !0), p.type == "imgUpload" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Qm, [c($s, {
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (O) => e.currentBlock.props[p.key].defaultValue = O
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : le("", !0), p.type == "select" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), I("div", Jm, [c(d, {
              style: {
                width: "250px"
              },
              placeholder: `请选择${p.label}`,
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (O) => e.currentBlock.props[p.key].defaultValue = O,
              "allow-clear": ""
            }, {
              default: ne(() => [(_(!0), I(Pe, null, bt(e.currentBlock.props[p.key].options, (O, U) => (_(), de(u, {
                key: U,
                value: O.value
              }, {
                default: ne(() => [pe(ye(O.name), 1)]),
                _: 2
              }, 1032, ["value"]))), 128))]),
              _: 2
            }, 1032, ["placeholder", "modelValue", "onUpdate:modelValue"])])) : le("", !0)];
          }),
          _: 2
        }, 1032, ["label"]))), 128))]),
        _: 1
      });
    };
  }
});
const tg = /* @__PURE__ */ je(eg, [["__scopeId", "data-v-5efd1334"]]);
function ng(e, t, n, l) {
  let o = e();
  function r(f) {
    n.container.backgroundColor = f;
  }
  function a(f) {
    if (!f || f * 1 < 40) {
      gt.warning("设置不合理！");
      return;
    }
    n.container.scale = f;
  }
  let i = t.value.cBlock || {}, s = i.props ? i.props : {}, u = B([]);
  Object.keys(s).forEach((f) => {
    s[f].type && (s[f].key = f, u.value.push(s[f]));
  });
  let d = c(tg);
  return c("div", {
    style: "height: 100%"
  }, [t.value.focusBlock.length ? c("div", {
    class: "control-container"
  }, [c(mi, {
    type: "line",
    size: "large"
  }, {
    default: () => [c(en, {
      key: "1",
      title: "组件设置"
    }, {
      default: () => [c("div", {
        class: "control-form-comtainer"
      }, [c(d, {
        editorControlView: u.value,
        currentBlock: i
      }, null), c("div", null, [o])])]
    }), c(en, {
      key: "2",
      title: "动画"
    }, {
      default: () => [c("span", null, [pe("暂不支持")])]
    }), c(en, {
      key: "3",
      title: "规则"
    }, {
      default: () => [c("span", null, [pe("暂不支持")])]
    })]
  })]) : c("div", {
    class: "control-container"
  }, [c(mi, {
    type: "line",
    size: "large",
    style: "height: 100%"
  }, {
    default: () => [c(en, {
      key: "0",
      title: "页面基础设置"
    }, {
      default: () => [c("div", {
        class: "control-form-comtainer"
      }, [c(ms, {
        style: {
          width: "100%"
        },
        "label-align": "left",
        "auto-label-width": !0,
        model: {},
        layout: "vertical"
      }, {
        default: () => [c(gn, {
          tooltip: "设置表单的背景色",
          label: "背景色"
        }, {
          default: () => [c(Ta, {
            defaultValue: n.container.backgroundColor,
            onChange: r,
            showText: !0,
            disabledAlpha: !0
          }, null)]
        }), c(gn, {
          tooltip: "设置页面缩放大小，不会影响h5端",
          label: "页面缩放"
        }, {
          default: () => [c(St, {
            placeholder: "请输入正整数",
            "default-value": n.container.scale,
            mode: "button",
            style: "width: 140px;text-align: center;",
            onChange: a,
            min: 40,
            max: 200
          }, null), c("span", {
            style: "margin-left: 6px"
          }, [pe("%")])]
        })]
      })])]
    })]
  })])]);
}
const gi = /* @__PURE__ */ N({
  props: {
    componentLists: {
      type: Array,
      default: []
    },
    menuDragInfo: {
      type: Object,
      default: () => ({
        dragstart: () => {
        },
        dragend: () => {
        },
        click: () => {
        }
      })
    }
  },
  setup(e) {
    let t = {};
    return e.componentLists.filter((n) => n.disabled == null ? !0 : !n.disabled).forEach((n) => {
      t[n.group] || (t[n.group] = []), t[n.group].push(n);
    }), () => c(Pe, null, [Object.keys(t).map((n) => c("div", {
      class: "group-container"
    }, [c("div", {
      class: "title"
    }, [n]), c("div", {
      class: "group-container-content"
    }, [t[n].map((l) => c("div", {
      class: "editer-menu-content-block",
      draggable: !0,
      onDragstart: (o) => e.menuDragInfo.dragstart(o, l),
      onDragend: e.menuDragInfo.dragend.bind(e.menuDragInfo),
      onClick: (o) => e.menuDragInfo.click(o, l)
    }, [c("div", {
      class: "icon-box"
    }, [c("img", {
      class: "icon",
      src: l.icon,
      alt: ""
    }, null), c("img", {
      class: "activeIcon",
      src: l.activeIcon,
      alt: ""
    }, null)]), c("span", {
      class: "editor-priview-label"
    }, [l.label])]))])]))]);
  }
}), lt = (e) => (Qe("data-v-3eb71c99"), e = e(), Je(), e), lg = {
  class: "editor-built-in-control-base-title"
}, og = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "line"
}, null, -1)), ag = {
  class: "font"
}, rg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), ig = [rg], sg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "vline"
}, null, -1)), ug = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), cg = [ug], dg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "vline"
}, null, -1)), fg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), pg = [fg], vg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "vline"
}, null, -1)), hg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), mg = [hg], gg = {
  class: "letterSpacing flex"
}, bg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "字间距", -1)), yg = {
  class: "flex: 1"
}, _g = {
  class: "letterSpacing flex mt24"
}, $g = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "行间距", -1)), wg = {
  class: "flex: 1"
}, kg = {
  class: "letterSpacing flex mt24"
}, Cg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "左右间距", -1)), Sg = {
  class: "flex: 1"
}, Vg = {
  class: "letterSpacing flex mt24"
}, Eg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "上间距", -1)), Og = {
  class: "flex: 1"
}, xg = {
  class: "letterSpacing flex mt24"
}, Bg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "下间距", -1)), Ig = {
  class: "flex: 1"
}, Pg = {
  class: "letterSpacing flex mt24"
}, jg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "背景色", -1)), Tg = {
  class: "flex: 1"
}, Mg = {
  class: "mt24 mb48"
}, Dg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "img-title"
}, "背景图", -1)), zg = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    },
    textAlign: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: String,
      default: ""
    },
    fontStyle: {
      type: String,
      default: ""
    },
    textDecoration: {
      type: String,
      default: ""
    }
  },
  emits: ["change"],
  setup(e, {
    emit: t
  }) {
    function n(l, o) {
      t("change", {
        type: l,
        value: o
      });
    }
    return (l, o) => {
      const r = Jl, a = ys, i = Ta;
      return _(), I("div", lg, [og, h("div", ag, [c(r, {
        content: "居中",
        position: "top"
      }, {
        default: ne(() => [(_(), I("svg", {
          t: "1726044272489",
          class: K(["icon", {
            active: e.textAlign == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "6371",
          width: "200",
          height: "200",
          onClick: o[0] || (o[0] = (s) => n("textAlign", e.textAlign == "1" ? "2" : "1"))
        }, ig, 2))]),
        _: 1
      }), sg, c(r, {
        content: "加粗",
        position: "top"
      }, {
        default: ne(() => [(_(), I("svg", {
          t: "1726043535219",
          class: K(["icon", {
            active: e.fontWeight == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "1270",
          width: "200",
          height: "200",
          onClick: o[1] || (o[1] = (s) => n("fontWeight", e.fontWeight == "1" ? "2" : "1"))
        }, cg, 2))]),
        _: 1
      }), dg, c(r, {
        content: "倾斜",
        position: "top"
      }, {
        default: ne(() => [(_(), I("svg", {
          t: "1726044177092",
          class: K(["icon", {
            active: e.fontStyle == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2714",
          width: "200",
          height: "200",
          onClick: o[2] || (o[2] = (s) => n("fontStyle", e.fontStyle == "1" ? "2" : "1"))
        }, pg, 2))]),
        _: 1
      }), vg, c(r, {
        content: "下划线",
        position: "top"
      }, {
        default: ne(() => [(_(), I("svg", {
          t: "1726044215994",
          class: K(["icon", {
            active: e.textDecoration == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3696",
          width: "200",
          height: "200",
          onClick: o[3] || (o[3] = (s) => n("textDecoration", e.textDecoration == "1" ? "2" : "1"))
        }, mg, 2))]),
        _: 1
      })]), h("div", gg, [bg, h("div", yg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.letterSpacing.defaultValue,
        "onUpdate:modelValue": o[4] || (o[4] = (s) => e.block.props.letterSpacing.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", _g, [$g, h("div", wg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.lineHeight.defaultValue,
        "onUpdate:modelValue": o[5] || (o[5] = (s) => e.block.props.lineHeight.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", kg, [Cg, h("div", Sg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.leftRightPadding.defaultValue,
        "onUpdate:modelValue": o[6] || (o[6] = (s) => e.block.props.leftRightPadding.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Vg, [Eg, h("div", Og, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginTop.defaultValue,
        "onUpdate:modelValue": o[7] || (o[7] = (s) => e.block.props.marginTop.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", xg, [Bg, h("div", Ig, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginBottom.defaultValue,
        "onUpdate:modelValue": o[8] || (o[8] = (s) => e.block.props.marginBottom.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Pg, [jg, h("div", Tg, [c(i, {
        "show-history": "",
        "show-preset": "",
        showText: "",
        disabledAlpha: "",
        modelValue: e.block.props.backgroundColor.defaultValue,
        "onUpdate:modelValue": o[9] || (o[9] = (s) => e.block.props.backgroundColor.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Mg, [Dg, c($s, {
        modelValue: e.block.props.backgroundImage.defaultValue,
        "onUpdate:modelValue": o[10] || (o[10] = (s) => e.block.props.backgroundImage.defaultValue = s)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const Ag = /* @__PURE__ */ je(zg, [["__scopeId", "data-v-3eb71c99"]]), Lg = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (_(), I("div", {
      class: "editor-built-in-registor-base-title",
      style: ge(e.style)
    }, [h("div", {
      class: K(["text", {
        minHeight: !e.text
      }])
    }, ye(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
  }
});
const Fg = /* @__PURE__ */ je(Lg, [["__scopeId", "data-v-2bc63ae4"]]), Ng = {
  group: "基础组件",
  name: "baseText",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  render: (e) => {
    let t = v(() => ({
      fontFamily: e.props.fontFamily.defaultValue,
      fontSize: e.props.fontSize.defaultValue + "px",
      color: e.props.color.defaultValue,
      textAlign: e.props.textAlign.defaultValue && e.props.textAlign.defaultValue == "1" ? "center" : "left",
      fontWeight: e.props.fontWeight.defaultValue && e.props.fontWeight.defaultValue == "1" ? 800 : 400,
      fontStyle: e.props.fontStyle.defaultValue && e.props.fontStyle.defaultValue == "1" ? "italic" : "normal",
      textDecoration: e.props.textDecoration.defaultValue && e.props.textDecoration.defaultValue == "1" ? "underline" : "none",
      letterSpacing: e.props.letterSpacing.defaultValue + "px",
      lineHeight: e.props.lineHeight.defaultValue + "px",
      backgroundColor: e.props.backgroundColor.defaultValue,
      backgroundImage: `url(${e.props.backgroundImage.defaultValue})`,
      "background-size": "cover",
      paddingLeft: e.props.leftRightPadding.defaultValue + "px",
      paddingRight: e.props.leftRightPadding.defaultValue + "px",
      marginTop: e.props.marginTop.defaultValue + "px",
      marginBottom: e.props.marginBottom.defaultValue + "px"
    }));
    return c(Fg, {
      text: e.props.text.defaultValue,
      style: t.value
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "文本",
  props: {
    text: {
      label: "内容",
      defaultValue: "",
      type: "textarea"
    },
    fontFamily: {
      label: "字体",
      defaultValue: '"SF Pro Display"',
      type: "select",
      options: [
        // "SF Pro Display",无衬线体 Roboto,Noto,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif
        {
          name: "跟随系统",
          value: '"SF Pro Display"'
        },
        {
          name: "微软雅黑",
          value: '"Microsoft YaHei"'
        },
        {
          name: "平方",
          value: '"PingFang SC"'
        },
        {
          name: "无衬线",
          value: '"sans-serif"'
        }
      ]
    },
    fontSize: {
      label: "字号",
      defaultValue: 14,
      type: "number"
    },
    color: {
      label: "字体颜色",
      defaultValue: "#333",
      type: "color"
    },
    textAlign: {
      label: "居中",
      defaultValue: "2"
    },
    fontWeight: {
      label: "加粗",
      defaultValue: "2"
    },
    fontStyle: {
      label: "倾斜",
      defaultValue: "2"
    },
    textDecoration: {
      // underline
      label: "下划线",
      defaultValue: "2"
    },
    letterSpacing: {
      label: "字间距",
      defaultValue: 0
    },
    lineHeight: {
      label: "行间距",
      defaultValue: 24
    },
    leftRightPadding: {
      label: "左右间距",
      defaultValue: 0
    },
    marginTop: {
      label: "上间距",
      defaultValue: 0
    },
    marginBottom: {
      label: "下间距",
      defaultValue: 0
    },
    backgroundColor: {
      label: "背景颜色",
      defaultValue: "#fff"
    },
    backgroundImage: {
      label: "背景图",
      defaultValue: ""
    }
  },
  controlView: (e, t) => {
    let n = e.props;
    function l(r) {
      try {
        r.type && (e.props[r.type].defaultValue = r.value, t(e));
      } catch {
      }
    }
    return c(Ag, {
      block: e,
      textAlign: n.textAlign.defaultValue,
      fontWeight: n.fontWeight.defaultValue,
      fontStyle: n.fontStyle.defaultValue,
      textDecoration: n.textDecoration.defaultValue,
      onChange: l
    });
  }
}, Rg = {
  class: "editor-built-in-registor-base-img"
}, qg = ["src"], Hg = {
  key: 1,
  class: "empty"
}, Wg = /* @__PURE__ */ N({
  __name: "render",
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (_(), I("div", Rg, [e.src ? (_(), I("img", {
      key: 0,
      class: "render-img",
      src: e.src,
      alt: ""
    }, null, 8, qg)) : (_(), I("div", Hg, "请在控制器中上传图片+"))]));
  }
});
const Ug = /* @__PURE__ */ je(Wg, [["__scopeId", "data-v-9c2db7e4"]]), Kg = {
  group: "基础组件",
  name: "baseImg",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (e) => c(Ug, {
    src: e.props.src.defaultValue
  }),
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "图片",
  props: {
    src: {
      defaultValue: "",
      label: "图片设置",
      type: "imgUpload"
    }
  },
  controlView: (e, t) => c("div", null, null)
}, Yg = {
  key: 0,
  class: "tip"
}, Gg = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: ""
    },
    fixedBottom: {
      type: Boolean,
      default: !1
    },
    visibleSubmitNum: {
      type: Boolean,
      default: !1
    },
    submitNum: {
      type: Number,
      default: 0
    },
    submitTip: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    let n = B(null);
    function l(r) {
      var a, i, s, u, d, f, m, p;
      (a = n.value) != null && a.parentNode && r ? (((i = n.value) == null ? void 0 : i.parentNode).style.position = "absolute", ((s = n.value) == null ? void 0 : s.parentNode).style.zIndex = 10, ((u = n.value) == null ? void 0 : u.parentNode).style.bottom = t.visibleSubmitNum ? "0px" : "20px", ((d = n.value) == null ? void 0 : d.parentNode).style.top = "auto") : (((f = n.value) == null ? void 0 : f.parentNode).style.position = "relative", ((m = n.value) == null ? void 0 : m.parentNode).style.top = 0, ((p = n.value) == null ? void 0 : p.parentNode).style.bottom = "auto");
    }
    function o(r) {
      return r.replace("$num", t.submitNum + "");
    }
    return Oe(() => {
      l(t.fixedBottom);
    }), Pt(() => {
      l(t.fixedBottom);
    }), be(() => t.fixedBottom, () => {
      l(t.fixedBottom);
    }), (r, a) => (_(), I("div", {
      class: "editor-built-in-registor-base-submit",
      ref_key: "baseSubmit",
      ref: n
    }, [h("div", {
      class: "submit",
      style: ge(e.style)
    }, ye(e.text), 5), e.visibleSubmitNum ? (_(), I("div", Yg, " ——" + ye(o(e.submitTip)) + "—— ", 1)) : le("", !0)], 512));
  }
});
const Xg = /* @__PURE__ */ je(Gg, [["__scopeId", "data-v-caa2b586"]]);
const Qn = (e) => (Qe("data-v-e66b9f5d"), e = e(), Je(), e), Zg = {
  class: "editor-built-in-control-base-submit"
}, Qg = /* @__PURE__ */ Qn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Jg = {
  class: "flex mt24 options"
}, eb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "是否吸底", -1)), tb = {
  class: "flex mt24 options"
}, nb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "显示提交次数", -1)), lb = {
  key: 0,
  class: "flex mt24 options"
}, ob = /* @__PURE__ */ Qn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "初始次数", -1)), ab = {
  class: "pl24"
}, rb = {
  key: 1,
  class: "flex mt24 options"
}, ib = /* @__PURE__ */ Qn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提示语内容", -1)), sb = [ib], ub = {
  key: 2,
  class: "mt24"
}, cb = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt, a = Kt;
      return _(), I("div", Zg, [Qg, h("div", Jg, [eb, h("div", null, [c(r, {
        "default-checked": e.block.props.fixedBottom.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "fixedBottom"))
      }, null, 8, ["default-checked"])])]), h("div", tb, [nb, h("div", null, [c(r, {
        "default-checked": e.block.props.visibleSubmitNum.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "visibleSubmitNum"))
      }, null, 8, ["default-checked"])])]), e.block.props.visibleSubmitNum.defaultValue == "1" ? (_(), I("div", lb, [ob, h("div", ab, [c(a, {
        placeholder: "请输入初始次数",
        modelValue: e.block.props.submitNum.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.submitNum.defaultValue = i)
      }, null, 8, ["modelValue"])])])) : le("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (_(), I("div", rb, sb)) : le("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (_(), I("div", ub, [c(a, {
        placeholder: "提示语",
        modelValue: e.block.props.submitTip.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.submitTip.defaultValue = i)
      }, null, 8, ["modelValue"])])) : le("", !0)]);
    };
  }
});
const db = /* @__PURE__ */ je(cb, [["__scopeId", "data-v-e66b9f5d"]]), fb = {
  group: "基础组件",
  name: "baseSubmit",
  label: "提交按钮",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  render: (e) => {
    let t = e.props, n = v(() => ({
      backgroundColor: t.backgroundColor.defaultValue,
      color: t.color.defaultValue,
      borderRadius: t.borderRadius.defaultValue + "px",
      width: t.width.defaultValue + "%",
      marginTop: t.marginTop.defaultValue + "px",
      marginBottom: t.marginBottom.defaultValue + "px"
    }));
    return c(Xg, {
      text: t.text.defaultValue,
      style: n.value,
      fixedBottom: t.fixedBottom.defaultValue == "1",
      visibleSubmitNum: t.visibleSubmitNum.defaultValue == "1",
      submitNum: t.submitNum.defaultValue,
      submitTip: t.submitTip.defaultValue
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  // editorBlockShellStyle: (block, style) => {
  //   return block.props.fixedBottom == "1"
  //     ? { ...style, position: "absolute" }
  //     : style
  // },
  props: {
    text: {
      label: "按钮名称",
      type: "input",
      defaultValue: "提交"
    },
    backgroundColor: {
      label: "按钮颜色",
      type: "color",
      defaultValue: "#1161FF"
    },
    color: {
      label: "文字颜色",
      type: "color",
      defaultValue: "#fff"
    },
    marginTop: {
      label: "上边距",
      type: "slider",
      defaultValue: 0,
      min: 0,
      max: 100
    },
    marginBottom: {
      label: "下边距",
      type: "slider",
      defaultValue: 0,
      min: 0,
      max: 100
    },
    borderRadius: {
      label: "圆角",
      type: "slider",
      defaultValue: 4,
      min: 0,
      max: 30
    },
    width: {
      label: "宽度",
      type: "number",
      defaultValue: 94,
      unit: "%"
    },
    fixedBottom: {
      label: "是否吸底",
      defaultValue: "2"
    },
    visibleSubmitNum: {
      label: "显示提交次数",
      defaultValue: "2"
    },
    submitNum: {
      label: "提交次数",
      defaultValue: 10
    },
    submitTip: {
      label: "提示语内容",
      defaultValue: "目前已有$num人提交表单"
    }
  },
  controlView: (e, t) => c(db, {
    block: e
  })
}, pb = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (_(), I("div", {
      class: "editor-built-in-registor-base-title",
      style: ge(e.style)
    }, ye(e.text ? e.text : "默认标题"), 5));
  }
});
const vb = /* @__PURE__ */ je(pb, [["__scopeId", "data-v-5fff6b35"]]), hb = {
  group: "基础组件",
  label: "表单标题",
  name: "baseTitle",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  render: (e) => {
    let t = v(() => ({
      color: e.props.color.defaultValue,
      fontSize: e.props.fontSize.defaultValue + "px",
      lineHeight: e.props.lineHeight.defaultValue + "px",
      height: e.props.lineHeight.defaultValue + "px",
      marginBottom: e.props.marginBottom.defaultValue + "px",
      marginTop: e.props.marginTop.defaultValue + "px"
    }));
    return c(vb, {
      style: t.value,
      text: e.props.text.defaultValue
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  props: {
    text: {
      defaultValue: "报名表单",
      type: "input",
      label: "文字内容"
    },
    color: {
      defaultValue: "#333333",
      type: "color",
      label: "文字颜色"
    },
    fontSize: {
      defaultValue: 16,
      type: "number",
      label: "字体大小"
    },
    lineHeight: {
      defaultValue: 48,
      type: "number",
      label: "行高"
    },
    marginTop: {
      defaultValue: 0,
      type: "slider",
      label: "上边距"
    },
    marginBottom: {
      defaultValue: 0,
      type: "slider",
      label: "下边距"
    }
  },
  controlView: (e, t) => (e.props, c("div", null, null))
}, mb = (e) => (Qe("data-v-d00a40a0"), e = e(), Je(), e), gb = {
  class: "title-tip"
}, bb = {
  key: 0,
  class: "red"
}, yb = {
  class: "form-item"
}, _b = /* @__PURE__ */ mb(() => /* @__PURE__ */ h("div", {
  class: "control-input"
}, null, -1)), $b = {
  class: "text"
}, wb = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    isRequire: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (t, n) => (_(), I("div", {
      class: "editor-built-in-commen-multiple",
      style: ge(e.style)
    }, [h("div", gb, [e.isRequire ? (_(), I("span", bb, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", yb, [(_(!0), I(Pe, null, bt(e.options, (l, o) => (_(), I("div", {
      class: "item",
      key: o
    }, [_b, h("div", $b, ye(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const kb = /* @__PURE__ */ je(wb, [["__scopeId", "data-v-d00a40a0"]]);
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function bi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bi(Object(n), !0).forEach(function(l) {
      Cb(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bi(Object(n)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return e;
}
function yl(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yl = function(t) {
    return typeof t;
  } : yl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yl(e);
}
function Cb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function It() {
  return It = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, It.apply(this, arguments);
}
function Sb(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, r;
  for (r = 0; r < l.length; r++)
    o = l[r], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Vb(e, t) {
  if (e == null)
    return {};
  var n = Sb(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      l = r[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
var Eb = "1.15.3";
function Bt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var jt = Bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Jn = Bt(/Edge/i), yi = Bt(/firefox/i), Ln = Bt(/safari/i) && !Bt(/chrome/i) && !Bt(/android/i), ws = Bt(/iP(ad|od|hone)/i), ks = Bt(/chrome/i) && Bt(/android/i), Cs = {
  capture: !1,
  passive: !1
};
function ke(e, t, n) {
  e.addEventListener(t, n, !jt && Cs);
}
function _e(e, t, n) {
  e.removeEventListener(t, n, !jt && Cs);
}
function Al(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Ss(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function mt(e, t, n, l) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && Al(e, t) : Al(e, t)) || l && e === n)
        return e;
      if (e === n)
        break;
    } while (e = Ss(e));
  }
  return null;
}
var _i = /\s+/g;
function st(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(_i, " ").replace(" " + t + " ", " ");
      e.className = (l + (n ? " " + t : "")).replace(_i, " ");
    }
}
function ue(e, t, n) {
  var l = e && e.style;
  if (l) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in l) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), l[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function _n(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var l = ue(e, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function Vs(e, t, n) {
  if (e) {
    var l = e.getElementsByTagName(t), o = 0, r = l.length;
    if (n)
      for (; o < r; o++)
        n(l[o], o);
    return l;
  }
  return [];
}
function $t() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Ne(e, t, n, l, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, a, i, s, u, d, f;
    if (e !== window && e.parentNode && e !== $t() ? (r = e.getBoundingClientRect(), a = r.top, i = r.left, s = r.bottom, u = r.right, d = r.height, f = r.width) : (a = 0, i = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !jt))
      do
        if (o && o.getBoundingClientRect && (ue(o, "transform") !== "none" || n && ue(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          a -= m.top + parseInt(ue(o, "border-top-width")), i -= m.left + parseInt(ue(o, "border-left-width")), s = a + r.height, u = i + r.width;
          break;
        }
      while (o = o.parentNode);
    if (l && e !== window) {
      var p = _n(o || e), b = p && p.a, y = p && p.d;
      p && (a /= y, i /= b, f /= b, d /= y, s = a + d, u = i + f);
    }
    return {
      top: a,
      left: i,
      bottom: s,
      right: u,
      width: f,
      height: d
    };
  }
}
function $i(e, t, n) {
  for (var l = Nt(e, !0), o = Ne(e)[t]; l; ) {
    var r = Ne(l)[n], a = void 0;
    if (n === "top" || n === "left" ? a = o >= r : a = o <= r, !a)
      return l;
    if (l === $t())
      break;
    l = Nt(l, !1);
  }
  return !1;
}
function Cn(e, t, n, l) {
  for (var o = 0, r = 0, a = e.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== ie.ghost && (l || a[r] !== ie.dragged) && mt(a[r], n.draggable, e, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function La(e, t) {
  for (var n = e.lastElementChild; n && (n === ie.ghost || ue(n, "display") === "none" || t && !Al(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function pt(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ie.clone && (!t || Al(e, t)) && n++;
  return n;
}
function wi(e) {
  var t = 0, n = 0, l = $t();
  if (e)
    do {
      var o = _n(e), r = o.a, a = o.d;
      t += e.scrollLeft * r, n += e.scrollTop * a;
    } while (e !== l && (e = e.parentNode));
  return [t, n];
}
function Ob(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var l in t)
        if (t.hasOwnProperty(l) && t[l] === e[n][l])
          return Number(n);
    }
  return -1;
}
function Nt(e, t) {
  if (!e || !e.getBoundingClientRect)
    return $t();
  var n = e, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = ue(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return $t();
        if (l || t)
          return n;
        l = !0;
      }
    }
  while (n = n.parentNode);
  return $t();
}
function xb(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Go(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function Es(e, t) {
  return function() {
    if (!Fn) {
      var n = arguments, l = this;
      n.length === 1 ? e.call(l, n[0]) : e.apply(l, n), Fn = setTimeout(function() {
        Fn = void 0;
      }, t);
    }
  };
}
function Bb() {
  clearTimeout(Fn), Fn = void 0;
}
function Os(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function xs(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Bs(e, t, n) {
  var l = {};
  return Array.from(e.children).forEach(function(o) {
    var r, a, i, s;
    if (!(!mt(o, t.draggable, e, !1) || o.animated || o === n)) {
      var u = Ne(o);
      l.left = Math.min((r = l.left) !== null && r !== void 0 ? r : 1 / 0, u.left), l.top = Math.min((a = l.top) !== null && a !== void 0 ? a : 1 / 0, u.top), l.right = Math.max((i = l.right) !== null && i !== void 0 ? i : -1 / 0, u.right), l.bottom = Math.max((s = l.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var it = "Sortable" + new Date().getTime();
function Ib() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(ue(o, "display") === "none" || o === ie.ghost)) {
            e.push({
              target: o,
              rect: Ne(o)
            });
            var r = Ct({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = _n(o, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            o.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(l) {
      e.push(l);
    },
    removeAnimationState: function(l) {
      e.splice(Ob(e, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof l == "function" && l();
        return;
      }
      var r = !1, a = 0;
      e.forEach(function(i) {
        var s = 0, u = i.target, d = u.fromRect, f = Ne(u), m = u.prevFromRect, p = u.prevToRect, b = i.rect, y = _n(u, !0);
        y && (f.top -= y.f, f.left -= y.e), u.toRect = f, u.thisAnimationDuration && Go(m, f) && !Go(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - f.top) / (b.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = jb(b, m, p, o.options)), Go(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, b, f, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, a) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, o, r, a) {
      if (a) {
        ue(l, "transition", ""), ue(l, "transform", "");
        var i = _n(this.el), s = i && i.a, u = i && i.d, d = (o.left - r.left) / (s || 1), f = (o.top - r.top) / (u || 1);
        l.animatingX = !!d, l.animatingY = !!f, ue(l, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = Pb(l), ue(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ue(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          ue(l, "transition", ""), ue(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, a);
      }
    }
  };
}
function Pb(e) {
  return e.offsetWidth;
}
function jb(e, t, n, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * l.animation;
}
var cn = [], Xo = {
  initializeByDefault: !0
}, el = {
  mount: function(t) {
    for (var n in Xo)
      Xo.hasOwnProperty(n) && !(n in t) && (t[n] = Xo[n]);
    cn.forEach(function(l) {
      if (l.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), cn.push(t);
  },
  pluginEvent: function(t, n, l) {
    var o = this;
    this.eventCanceled = !1, l.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = t + "Global";
    cn.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](Ct({
        sortable: n
      }, l)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](Ct({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(t, n, l, o) {
    cn.forEach(function(i) {
      var s = i.pluginName;
      if (!(!t.options[s] && !i.initializeByDefault)) {
        var u = new i(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, It(l, u.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, n) {
    var l = {};
    return cn.forEach(function(o) {
      typeof o.eventProperties == "function" && It(l, o.eventProperties.call(n[o.pluginName], t));
    }), l;
  },
  modifyOption: function(t, n, l) {
    var o;
    return cn.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (o = r.optionListeners[n].call(t[r.pluginName], l));
    }), o;
  }
};
function Tb(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, r = e.cloneEl, a = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, f = e.newDraggableIndex, m = e.originalEvent, p = e.putSortable, b = e.extraEventProperties;
  if (t = t || n && n[it], !!t) {
    var y, D = t.options, A = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !jt && !Jn ? y = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(l, !0, !0)), y.to = a || n, y.from = i || n, y.item = o || n, y.clone = r, y.oldIndex = s, y.newIndex = u, y.oldDraggableIndex = d, y.newDraggableIndex = f, y.originalEvent = m, y.pullMode = p ? p.lastPutMode : void 0;
    var S = Ct(Ct({}, b), el.getEventProperties(l, t));
    for (var w in S)
      y[w] = S[w];
    n && n.dispatchEvent(y), D[A] && D[A].call(t, y);
  }
}
var Mb = ["evt"], at = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, r = Vb(l, Mb);
  el.pluginEvent.bind(ie)(t, n, Ct({
    dragEl: Z,
    parentEl: De,
    ghostEl: ve,
    rootEl: Ee,
    nextEl: Qt,
    lastDownEl: _l,
    cloneEl: Be,
    cloneHidden: Ft,
    dragStarted: Tn,
    putSortable: Ke,
    activeSortable: ie.active,
    originalEvent: o,
    oldIndex: vn,
    oldDraggableIndex: Nn,
    newIndex: ut,
    newDraggableIndex: At,
    hideGhostForTarget: Ts,
    unhideGhostForTarget: Ms,
    cloneNowHidden: function() {
      Ft = !0;
    },
    cloneNowShown: function() {
      Ft = !1;
    },
    dispatchSortableEvent: function(i) {
      nt({
        sortable: n,
        name: i,
        originalEvent: o
      });
    }
  }, r));
};
function nt(e) {
  Tb(Ct({
    putSortable: Ke,
    cloneEl: Be,
    targetEl: Z,
    rootEl: Ee,
    oldIndex: vn,
    oldDraggableIndex: Nn,
    newIndex: ut,
    newDraggableIndex: At
  }, e));
}
var Z, De, ve, Ee, Qt, _l, Be, Ft, vn, ut, Nn, At, dl, Ke, fn = !1, Ll = !1, Fl = [], Gt, ht, Zo, Qo, ki, Ci, Tn, dn, Rn, qn = !1, fl = !1, $l, Ge, Jo = [], va = !1, Nl = [], to = typeof document < "u", pl = ws, Si = Jn || jt ? "cssFloat" : "float", Db = to && !ks && !ws && "draggable" in document.createElement("div"), Is = function() {
  if (to) {
    if (jt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ps = function(t, n) {
  var l = ue(t), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), r = Cn(t, 0, n), a = Cn(t, 1, n), i = r && ue(r), s = a && ue(a), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Ne(r).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ne(a).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && i.float && i.float !== "none") {
    var f = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= o && l[Si] === "none" || a && l[Si] === "none" && u + d > o) ? "vertical" : "horizontal";
}, zb = function(t, n, l) {
  var o = l ? t.left : t.top, r = l ? t.right : t.bottom, a = l ? t.width : t.height, i = l ? n.left : n.top, s = l ? n.right : n.bottom, u = l ? n.width : n.height;
  return o === i || r === s || o + a / 2 === i + u / 2;
}, Ab = function(t, n) {
  var l;
  return Fl.some(function(o) {
    var r = o[it].options.emptyInsertThreshold;
    if (!(!r || La(o))) {
      var a = Ne(o), i = t >= a.left - r && t <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (i && s)
        return l = o;
    }
  }), l;
}, js = function(t) {
  function n(r, a) {
    return function(i, s, u, d) {
      var f = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (r == null && (a || f))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(i, s, u, d), a)(i, s, u, d);
      var m = (a ? i : s).options.group.name;
      return r === !0 || typeof r == "string" && r === m || r.join && r.indexOf(m) > -1;
    };
  }
  var l = {}, o = t.group;
  (!o || yl(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = n(o.pull, !0), l.checkPut = n(o.put), l.revertClone = o.revertClone, t.group = l;
}, Ts = function() {
  !Is && ve && ue(ve, "display", "none");
}, Ms = function() {
  !Is && ve && ue(ve, "display", "");
};
to && !ks && document.addEventListener("click", function(e) {
  if (Ll)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ll = !1, !1;
}, !0);
var Xt = function(t) {
  if (Z) {
    t = t.touches ? t.touches[0] : t;
    var n = Ab(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[it]._onDragOver(l);
    }
  }
}, Lb = function(t) {
  Z && Z.parentNode[it]._isOutsideThisEl(t.target);
};
function ie(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = It({}, t), e[it] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Ps(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, i) {
      a.setData("Text", i.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: ie.supportPointer !== !1 && "PointerEvent" in window && !Ln,
    emptyInsertThreshold: 5
  };
  el.initializePlugins(this, e, n);
  for (var l in n)
    !(l in t) && (t[l] = n[l]);
  js(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Db, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ke(e, "pointerdown", this._onTapStart) : (ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), Fl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), It(this, Ib());
}
ie.prototype = /** @lends Sortable.prototype */
{
  constructor: ie,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (dn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, Z) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, l = this.el, o = this.options, r = o.preventOnFilter, a = t.type, i = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (i || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = o.filter;
      if (Kb(l), !Z && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = mt(s, o.draggable, l, !1), !(s && s.animated) && _l !== s)) {
        if (vn = pt(s), Nn = pt(s, o.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            nt({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: l,
              fromEl: l
            }), at("filter", n, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
          if (f = mt(u, f.trim(), l, !1), f)
            return nt({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: l,
              toEl: l
            }), at("filter", n, {
              evt: t
            }), !0;
        }), d)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !mt(u, o.handle, l, !1) || this._prepareDragStart(t, i, s);
      }
    }
  },
  _prepareDragStart: function(t, n, l) {
    var o = this, r = o.el, a = o.options, i = r.ownerDocument, s;
    if (l && !Z && l.parentNode === r) {
      var u = Ne(l);
      if (Ee = r, Z = l, De = Z.parentNode, Qt = Z.nextSibling, _l = l, dl = a.group, ie.dragged = Z, Gt = {
        target: Z,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, ki = Gt.clientX - u.left, Ci = Gt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Z.style["will-change"] = "all", s = function() {
        if (at("delayEnded", o, {
          evt: t
        }), ie.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !yi && o.nativeDraggable && (Z.draggable = !0), o._triggerDragStart(t, n), nt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), st(Z, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Vs(Z, d.trim(), ea);
      }), ke(i, "dragover", Xt), ke(i, "mousemove", Xt), ke(i, "touchmove", Xt), ke(i, "mouseup", o._onDrop), ke(i, "touchend", o._onDrop), ke(i, "touchcancel", o._onDrop), yi && this.nativeDraggable && (this.options.touchStartThreshold = 4, Z.draggable = !0), at("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Jn || jt))) {
        if (ie.eventCanceled) {
          this._onDrop();
          return;
        }
        ke(i, "mouseup", o._disableDelayedDrag), ke(i, "touchend", o._disableDelayedDrag), ke(i, "touchcancel", o._disableDelayedDrag), ke(i, "mousemove", o._delayedDragTouchMoveHandler), ke(i, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && ke(i, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Z && ea(Z), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._disableDelayedDrag), _e(t, "touchend", this._disableDelayedDrag), _e(t, "touchcancel", this._disableDelayedDrag), _e(t, "mousemove", this._delayedDragTouchMoveHandler), _e(t, "touchmove", this._delayedDragTouchMoveHandler), _e(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : n ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(Z, "dragend", this), ke(Ee, "dragstart", this._onDragStart));
    try {
      document.selection ? wl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (fn = !1, Ee && Z) {
      at("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && ke(document, "dragover", Lb);
      var l = this.options;
      !t && st(Z, l.dragClass, !1), st(Z, l.ghostClass, !0), ie.active = this, t && this._appendGhost(), nt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ht) {
      this._lastX = ht.clientX, this._lastY = ht.clientY, Ts();
      for (var t = document.elementFromPoint(ht.clientX, ht.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(ht.clientX, ht.clientY), t !== n); )
        n = t;
      if (Z.parentNode[it]._isOutsideThisEl(t), n)
        do {
          if (n[it]) {
            var l = void 0;
            if (l = n[it]._onDragOver({
              clientX: ht.clientX,
              clientY: ht.clientY,
              target: t,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Ss(n));
      Ms();
    }
  },
  _onTouchMove: function(t) {
    if (Gt) {
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, r = t.touches ? t.touches[0] : t, a = ve && _n(ve, !0), i = ve && a && a.a, s = ve && a && a.d, u = pl && Ge && wi(Ge), d = (r.clientX - Gt.clientX + o.x) / (i || 1) + (u ? u[0] - Jo[0] : 0) / (i || 1), f = (r.clientY - Gt.clientY + o.y) / (s || 1) + (u ? u[1] - Jo[1] : 0) / (s || 1);
      if (!ie.active && !fn) {
        if (l && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (ve) {
        a ? (a.e += d - (Zo || 0), a.f += f - (Qo || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ue(ve, "webkitTransform", m), ue(ve, "mozTransform", m), ue(ve, "msTransform", m), ue(ve, "transform", m), Zo = d, Qo = f, ht = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ve) {
      var t = this.options.fallbackOnBody ? document.body : Ee, n = Ne(Z, !0, pl, !0, t), l = this.options;
      if (pl) {
        for (Ge = t; ue(Ge, "position") === "static" && ue(Ge, "transform") === "none" && Ge !== document; )
          Ge = Ge.parentNode;
        Ge !== document.body && Ge !== document.documentElement ? (Ge === document && (Ge = $t()), n.top += Ge.scrollTop, n.left += Ge.scrollLeft) : Ge = $t(), Jo = wi(Ge);
      }
      ve = Z.cloneNode(!0), st(ve, l.ghostClass, !1), st(ve, l.fallbackClass, !0), st(ve, l.dragClass, !0), ue(ve, "transition", ""), ue(ve, "transform", ""), ue(ve, "box-sizing", "border-box"), ue(ve, "margin", 0), ue(ve, "top", n.top), ue(ve, "left", n.left), ue(ve, "width", n.width), ue(ve, "height", n.height), ue(ve, "opacity", "0.8"), ue(ve, "position", pl ? "absolute" : "fixed"), ue(ve, "zIndex", "100000"), ue(ve, "pointerEvents", "none"), ie.ghost = ve, t.appendChild(ve), ue(ve, "transform-origin", ki / parseInt(ve.style.width) * 100 + "% " + Ci / parseInt(ve.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var l = this, o = t.dataTransfer, r = l.options;
    if (at("dragStart", this, {
      evt: t
    }), ie.eventCanceled) {
      this._onDrop();
      return;
    }
    at("setupClone", this), ie.eventCanceled || (Be = xs(Z), Be.removeAttribute("id"), Be.draggable = !1, Be.style["will-change"] = "", this._hideClone(), st(Be, this.options.chosenClass, !1), ie.clone = Be), l.cloneId = wl(function() {
      at("clone", l), !ie.eventCanceled && (l.options.removeCloneOnHide || Ee.insertBefore(Be, Z), l._hideClone(), nt({
        sortable: l,
        name: "clone"
      }));
    }), !n && st(Z, r.dragClass, !0), n ? (Ll = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (_e(document, "mouseup", l._onDrop), _e(document, "touchend", l._onDrop), _e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(l, o, Z)), ke(document, "drop", l), ue(Z, "transform", "translateZ(0)")), fn = !0, l._dragStartId = wl(l._dragStarted.bind(l, n, t)), ke(document, "selectstart", l), Tn = !0, Ln && ue(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, r, a, i = this.options, s = i.group, u = ie.active, d = dl === s, f = i.sort, m = Ke || u, p, b = this, y = !1;
    if (va)
      return;
    function D(W, te) {
      at(W, b, Ct({
        evt: t,
        isOwner: d,
        axis: p ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: f,
        fromSortable: m,
        target: l,
        completed: S,
        onMove: function(C, H) {
          return vl(Ee, n, Z, o, C, Ne(C), t, H);
        },
        changed: w
      }, te));
    }
    function A() {
      D("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
    }
    function S(W) {
      return D("dragOverCompleted", {
        insertion: W
      }), W && (d ? u._hideClone() : u._showClone(b), b !== m && (st(Z, Ke ? Ke.options.ghostClass : u.options.ghostClass, !1), st(Z, i.ghostClass, !0)), Ke !== b && b !== ie.active ? Ke = b : b === ie.active && Ke && (Ke = null), m === b && (b._ignoreWhileAnimating = l), b.animateAll(function() {
        D("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (l === Z && !Z.animated || l === n && !l.animated) && (dn = null), !i.dragoverBubble && !t.rootEl && l !== document && (Z.parentNode[it]._isOutsideThisEl(t.target), !W && Xt(t)), !i.dragoverBubble && t.stopPropagation && t.stopPropagation(), y = !0;
    }
    function w() {
      ut = pt(Z), At = pt(Z, i.draggable), nt({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: ut,
        newDraggableIndex: At,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = mt(l, i.draggable, n, !0), D("dragOver"), ie.eventCanceled)
      return y;
    if (Z.contains(t.target) || l.animated && l.animatingX && l.animatingY || b._ignoreWhileAnimating === l)
      return S(!1);
    if (Ll = !1, u && !i.disabled && (d ? f || (a = De !== Ee) : Ke === this || (this.lastPutMode = dl.checkPull(this, u, Z, t)) && s.checkPut(this, u, Z, t))) {
      if (p = this._getDirection(t, l) === "vertical", o = Ne(Z), D("dragOverValid"), ie.eventCanceled)
        return y;
      if (a)
        return De = Ee, A(), this._hideClone(), D("revert"), ie.eventCanceled || (Qt ? Ee.insertBefore(Z, Qt) : Ee.appendChild(Z)), S(!0);
      var k = La(n, i.draggable);
      if (!k || qb(t, p, this) && !k.animated) {
        if (k === Z)
          return S(!1);
        if (k && n === t.target && (l = k), l && (r = Ne(l)), vl(Ee, n, Z, o, l, r, t, !!l) !== !1)
          return A(), k && k.nextSibling ? n.insertBefore(Z, k.nextSibling) : n.appendChild(Z), De = n, w(), S(!0);
      } else if (k && Rb(t, p, this)) {
        var L = Cn(n, 0, i, !0);
        if (L === Z)
          return S(!1);
        if (l = L, r = Ne(l), vl(Ee, n, Z, o, l, r, t, !1) !== !1)
          return A(), n.insertBefore(Z, L), De = n, w(), S(!0);
      } else if (l.parentNode === n) {
        r = Ne(l);
        var $ = 0, V, E = Z.parentNode !== n, T = !zb(Z.animated && Z.toRect || o, l.animated && l.toRect || r, p), P = p ? "top" : "left", g = $i(l, "top", "top") || $i(Z, "top", "top"), x = g ? g.scrollTop : void 0;
        dn !== l && (V = r[P], qn = !1, fl = !T && i.invertSwap || E), $ = Hb(t, l, r, p, T ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, fl, dn === l);
        var O;
        if ($ !== 0) {
          var U = pt(Z);
          do
            U -= $, O = De.children[U];
          while (O && (ue(O, "display") === "none" || O === ve));
        }
        if ($ === 0 || O === l)
          return S(!1);
        dn = l, Rn = $;
        var Y = l.nextElementSibling, G = !1;
        G = $ === 1;
        var J = vl(Ee, n, Z, o, l, r, t, G);
        if (J !== !1)
          return (J === 1 || J === -1) && (G = J === 1), va = !0, setTimeout(Nb, 30), A(), G && !Y ? n.appendChild(Z) : l.parentNode.insertBefore(Z, G ? Y : l), g && Os(g, 0, x - g.scrollTop), De = Z.parentNode, V !== void 0 && !fl && ($l = Math.abs(V - Ne(l)[P])), w(), S(!0);
      }
      if (n.contains(Z))
        return S(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    _e(document, "mousemove", this._onTouchMove), _e(document, "touchmove", this._onTouchMove), _e(document, "pointermove", this._onTouchMove), _e(document, "dragover", Xt), _e(document, "mousemove", Xt), _e(document, "touchmove", Xt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._onDrop), _e(t, "touchend", this._onDrop), _e(t, "pointerup", this._onDrop), _e(t, "touchcancel", this._onDrop), _e(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, l = this.options;
    if (ut = pt(Z), At = pt(Z, l.draggable), at("drop", this, {
      evt: t
    }), De = Z && Z.parentNode, ut = pt(Z), At = pt(Z, l.draggable), ie.eventCanceled) {
      this._nulling();
      return;
    }
    fn = !1, fl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ha(this.cloneId), ha(this._dragStartId), this.nativeDraggable && (_e(document, "drop", this), _e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && ue(document.body, "user-select", ""), ue(Z, "transform", ""), t && (Tn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), ve && ve.parentNode && ve.parentNode.removeChild(ve), (Ee === De || Ke && Ke.lastPutMode !== "clone") && Be && Be.parentNode && Be.parentNode.removeChild(Be), Z && (this.nativeDraggable && _e(Z, "dragend", this), ea(Z), Z.style["will-change"] = "", Tn && !fn && st(Z, Ke ? Ke.options.ghostClass : this.options.ghostClass, !1), st(Z, this.options.chosenClass, !1), nt({
      sortable: this,
      name: "unchoose",
      toEl: De,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ee !== De ? (ut >= 0 && (nt({
      rootEl: De,
      name: "add",
      toEl: De,
      fromEl: Ee,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "remove",
      toEl: De,
      originalEvent: t
    }), nt({
      rootEl: De,
      name: "sort",
      toEl: De,
      fromEl: Ee,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: De,
      originalEvent: t
    })), Ke && Ke.save()) : ut !== vn && ut >= 0 && (nt({
      sortable: this,
      name: "update",
      toEl: De,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: De,
      originalEvent: t
    })), ie.active && ((ut == null || ut === -1) && (ut = vn, At = Nn), nt({
      sortable: this,
      name: "end",
      toEl: De,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    at("nulling", this), Ee = Z = De = ve = Qt = Be = _l = Ft = Gt = ht = Tn = ut = At = vn = Nn = dn = Rn = Ke = dl = ie.dragged = ie.ghost = ie.clone = ie.active = null, Nl.forEach(function(t) {
      t.checked = !0;
    }), Nl.length = Zo = Qo = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        Z && (this._onDragOver(t), Fb(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, l = this.el.children, o = 0, r = l.length, a = this.options; o < r; o++)
      n = l[o], mt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || Ub(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var l = {}, o = this.el;
    this.toArray().forEach(function(r, a) {
      var i = o.children[a];
      mt(i, this.options.draggable, o, !1) && (l[r] = i);
    }, this), n && this.captureAnimationState(), t.forEach(function(r) {
      l[r] && (o.removeChild(l[r]), o.appendChild(l[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return mt(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var l = this.options;
    if (n === void 0)
      return l[t];
    var o = el.modifyOption(this, t, n);
    typeof o < "u" ? l[t] = o : l[t] = n, t === "group" && js(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    at("destroy", this);
    var t = this.el;
    t[it] = null, _e(t, "mousedown", this._onTapStart), _e(t, "touchstart", this._onTapStart), _e(t, "pointerdown", this._onTapStart), this.nativeDraggable && (_e(t, "dragover", this), _e(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Fl.splice(Fl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ft) {
      if (at("hideClone", this), ie.eventCanceled)
        return;
      ue(Be, "display", "none"), this.options.removeCloneOnHide && Be.parentNode && Be.parentNode.removeChild(Be), Ft = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ft) {
      if (at("showClone", this), ie.eventCanceled)
        return;
      Z.parentNode == Ee && !this.options.group.revertClone ? Ee.insertBefore(Be, Z) : Qt ? Ee.insertBefore(Be, Qt) : Ee.appendChild(Be), this.options.group.revertClone && this.animate(Z, Be), ue(Be, "display", ""), Ft = !1;
    }
  }
};
function Fb(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function vl(e, t, n, l, o, r, a, i) {
  var s, u = e[it], d = u.options.onMove, f;
  return window.CustomEvent && !jt && !Jn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = l, s.related = o || t, s.relatedRect = r || Ne(t), s.willInsertAfter = i, s.originalEvent = a, e.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function ea(e) {
  e.draggable = !1;
}
function Nb() {
  va = !1;
}
function Rb(e, t, n) {
  var l = Ne(Cn(n.el, 0, n.options, !0)), o = Bs(n.el, n.options, ve), r = 10;
  return t ? e.clientX < o.left - r || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - r || e.clientY < l.bottom && e.clientX < l.left;
}
function qb(e, t, n) {
  var l = Ne(La(n.el, n.options.draggable)), o = Bs(n.el, n.options, ve), r = 10;
  return t ? e.clientX > o.right + r || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + r || e.clientX > l.right && e.clientY > l.top;
}
function Hb(e, t, n, l, o, r, a, i) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, d = l ? n.top : n.left, f = l ? n.bottom : n.right, m = !1;
  if (!a) {
    if (i && $l < u * o) {
      if (!qn && (Rn === 1 ? s > d + u * r / 2 : s < f - u * r / 2) && (qn = !0), qn)
        m = !0;
      else if (Rn === 1 ? s < d + $l : s > f - $l)
        return -Rn;
    } else if (s > d + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return Wb(t);
  }
  return m = m || a, m && (s < d + u * r / 2 || s > f - u * r / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function Wb(e) {
  return pt(Z) < pt(e) ? 1 : -1;
}
function Ub(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function Kb(e) {
  Nl.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var l = t[n];
    l.checked && Nl.push(l);
  }
}
function wl(e) {
  return setTimeout(e, 0);
}
function ha(e) {
  return clearTimeout(e);
}
to && ke(document, "touchmove", function(e) {
  (ie.active || fn) && e.cancelable && e.preventDefault();
});
ie.utils = {
  on: ke,
  off: _e,
  css: ue,
  find: Vs,
  is: function(t, n) {
    return !!mt(t, n, t, !1);
  },
  extend: xb,
  throttle: Es,
  closest: mt,
  toggleClass: st,
  clone: xs,
  index: pt,
  nextTick: wl,
  cancelNextTick: ha,
  detectDirection: Ps,
  getChild: Cn,
  expando: it
};
ie.get = function(e) {
  return e[it];
};
ie.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (ie.utils = Ct(Ct({}, ie.utils), l.utils)), el.mount(l);
  });
};
ie.create = function(e, t) {
  return new ie(e, t);
};
ie.version = Eb;
var Fe = [], Mn, ma, ga = !1, ta, na, Rl, Dn;
function Yb() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var l = n.originalEvent;
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ke(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? ke(document, "touchmove", this._handleFallbackAutoScroll) : ke(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var l = n.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : (_e(document, "pointermove", this._handleFallbackAutoScroll), _e(document, "touchmove", this._handleFallbackAutoScroll), _e(document, "mousemove", this._handleFallbackAutoScroll)), Vi(), kl(), Bb();
    },
    nulling: function() {
      Rl = ma = Mn = ga = Dn = ta = na = null, Fe.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(r, a);
      if (Rl = n, l || this.options.forceAutoScrollFallback || Jn || jt || Ln) {
        la(n, this.options, i, l);
        var s = Nt(i, !0);
        ga && (!Dn || r !== ta || a !== na) && (Dn && Vi(), Dn = setInterval(function() {
          var u = Nt(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, kl()), la(n, o.options, u, l);
        }, 10), ta = r, na = a);
      } else {
        if (!this.options.bubbleScroll || Nt(i, !0) === $t()) {
          kl();
          return;
        }
        la(n, this.options, Nt(i, !1), !1);
      }
    }
  }, It(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function kl() {
  Fe.forEach(function(e) {
    clearInterval(e.pid);
  }), Fe = [];
}
function Vi() {
  clearInterval(Dn);
}
var la = Es(function(e, t, n, l) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, i = t.scrollSpeed, s = $t(), u = !1, d;
    ma !== n && (ma = n, kl(), Mn = t.scroll, d = t.scrollFn, Mn === !0 && (Mn = Nt(n, !0)));
    var f = 0, m = Mn;
    do {
      var p = m, b = Ne(p), y = b.top, D = b.bottom, A = b.left, S = b.right, w = b.width, k = b.height, L = void 0, $ = void 0, V = p.scrollWidth, E = p.scrollHeight, T = ue(p), P = p.scrollLeft, g = p.scrollTop;
      p === s ? (L = w < V && (T.overflowX === "auto" || T.overflowX === "scroll" || T.overflowX === "visible"), $ = k < E && (T.overflowY === "auto" || T.overflowY === "scroll" || T.overflowY === "visible")) : (L = w < V && (T.overflowX === "auto" || T.overflowX === "scroll"), $ = k < E && (T.overflowY === "auto" || T.overflowY === "scroll"));
      var x = L && (Math.abs(S - o) <= a && P + w < V) - (Math.abs(A - o) <= a && !!P), O = $ && (Math.abs(D - r) <= a && g + k < E) - (Math.abs(y - r) <= a && !!g);
      if (!Fe[f])
        for (var U = 0; U <= f; U++)
          Fe[U] || (Fe[U] = {});
      (Fe[f].vx != x || Fe[f].vy != O || Fe[f].el !== p) && (Fe[f].el = p, Fe[f].vx = x, Fe[f].vy = O, clearInterval(Fe[f].pid), (x != 0 || O != 0) && (u = !0, Fe[f].pid = setInterval(function() {
        l && this.layer === 0 && ie.active._onTouchMove(Rl);
        var Y = Fe[this.layer].vy ? Fe[this.layer].vy * i : 0, G = Fe[this.layer].vx ? Fe[this.layer].vx * i : 0;
        typeof d == "function" && d.call(ie.dragged.parentNode[it], G, Y, e, Rl, Fe[this.layer].el) !== "continue" || Os(Fe[this.layer].el, G, Y);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && m !== s && (m = Nt(m, !1)));
    ga = u;
  }
}, 30), Ds = function(t) {
  var n = t.originalEvent, l = t.putSortable, o = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, i = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = l || r;
    i();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: l
    }));
  }
};
function Fa() {
}
Fa.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var o = Cn(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: Ds
};
It(Fa, {
  pluginName: "revertOnSpill"
});
function Na() {
}
Na.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable, o = l || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Ds
};
It(Na, {
  pluginName: "removeOnSpill"
});
ie.mount(new Yb());
ie.mount(Na, Fa);
const Tt = (e) => (Qe("data-v-32ae4908"), e = e(), Je(), e), Gb = {
  class: "editor-built-in-control-commen-multiple"
}, Xb = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Zb = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "选项", -1)), Qb = {
  class: "flex mt24 options"
}, Jb = {
  class: "select-group"
}, ey = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "drag"
}, [/* @__PURE__ */ h("div", {
  class: "line"
}), /* @__PURE__ */ h("div", {
  class: "line"
})], -1)), ty = ["onClick"], ny = {
  class: "add-btn"
}, ly = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), oy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", null, "添加选项", -1)), ay = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "校验", -1)), ry = {
  class: "flex mt24 options"
}, iy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), sy = {
  class: "flex mt24 options"
}, uy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少选择数", -1)), cy = {
  class: "pl24"
}, dy = {
  class: "flex mt24 options"
}, fy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多选择数", -1)), py = {
  class: "pl24"
}, vy = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(a, i) {
      t.block.props[i].defaultValue = a ? "1" : "2";
    }
    function l(a) {
      a.id = a.name;
    }
    function o(a) {
      if (t.block.props.options.defaultValue.length == 1) {
        gt.warning("至少保留一项哦！");
        return;
      }
      t.block.props.options.defaultValue.splice(a, 1);
    }
    function r() {
      let a = {
        name: "",
        id: ""
      };
      t.block.props.options.defaultValue.push(a);
    }
    return Oe(() => {
      let a = document.querySelector(".editor-built-in-control-commen-multiple .select-group");
      new ie(a, {
        // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
        // group: "name",
        // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
        sort: !0,
        // number 定义鼠标选中列表单元可以开始拖动的延迟时间；
        delay: 0,
        // px，在取消延迟拖动事件之前，点应该移动多少像素
        touchStartThreshold: 0,
        // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
        disabled: !1,
        // @see Store
        store: null,
        // ms, number 单位：ms，定义排序动画的时间
        animation: 150,
        // 制作动画。默认为null，https://easings.net/。
        easing: "cubic-bezier(1, 0, 0, 1)",
        // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
        handle: ".drag",
        // 过滤器，不需要进行拖动的元素
        // filter: ".ignore-elements",
        //  在触发过滤器`filter`的时候调用`event.preventDefault()`
        preventOnFilter: !0,
        // 允许拖拽的项目类名
        draggable: ".useDrag",
        // drop placeholder的css类名
        // ghostClass: "sortable-ghost",
        // 被选中项的css 类名
        // chosenClass: "sortable-chosen",
        // 正在被拖拽中的css类名
        // dragClass: "sortable-drag",
        // dataIdAttr: "data-id",
        // 交换区的阈值
        swapThreshold: 1,
        // 如果设置为 true，将始终使用反向交换区
        invertSwap: !1,
        // 反向交换阈值，默认情况下将设置为swapThreshold 值
        invertedSwapThreshold: 1,
        // 拖拽方向 (默认情况下会自动判断方向)
        direction: "horizontal",
        // 忽略 HTML5拖拽行为，强制回调进行
        forceFallback: !1,
        // 当使用forceFallback的时候，被复制的dom的css类名
        fallbackClass: "sortable-fallback",
        // 将cloned DOM 元素挂到body元素上。
        fallbackOnBody: !1,
        // 以像素为单位指定鼠标在被视为拖动之前应移动的距离。
        fallbackTolerance: 0,
        // 是否启用滚动，值为true或者HTMLElement
        scroll: !0,
        // 自定义滚动
        // scrollFn: function(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) { ... },
        // // 鼠标必须离边缘多近才能开始滚动，单位 px
        // scrollSensitivity: 30,
        //  // 滚动速度，px
        // scrollSpeed: 10,
        // // 将自动滚动应用于所有父元素，以便更轻松地移动
        // bubbleScroll: true,
        // dragoverBubble: false,
        // // 删除不显示的克隆元素，而不是仅仅隐藏它
        // removeCloneOnHide: true,
        // // 拖动时鼠标必须与空可排序项的距离（以像素为单位）,以便将拖动元素插入到该可排序项中, 设置为0禁用此功能。
        // emptyInsertThreshold: 5,
        // setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
        //     dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
        // },
        // // 元素被选中
        // onChoose: function (/**Event*/evt) {
        //     evt.oldIndex;  // element index within parent
        // },
        // // 元素未被选中的时候（从选中到未选中）
        // onUnchoose: function(/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 开始拖拽的时候
        // onStart: function (/**Event*/evt) {
        //     evt.oldIndex;  // element index within parent
        // },
        // // 结束拖拽
        onEnd: function(i) {
          console.log(i);
          let s = i.newIndex, u = i.oldIndex, d = t.block.props.options.defaultValue[s], f = t.block.props.options.defaultValue[u];
          t.block.props.options.defaultValue[s] = f, t.block.props.options.defaultValue[u] = d;
        }
        // // 元素从一个列表拖拽到另一个列表
        // onAdd: function (/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 列表内元素顺序更新的时候触发
        // onUpdate: function (/**Event*/ evt: any) {
        //   console.log(evt, "evt")
        //   // same properties as onEnd
        // },
        // // 列表的任何更改都会触发
        // onSort: function (/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 元素从列表中移除进入另一个列表
        // onRemove: function (/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 试图拖拽一个filtered的元素
        // onFilter: function (/**Event*/evt) {
        //     var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
        // },
        // // 拖拽移动的时候
        // onMove: function (/**Event*/evt, /**Event*/originalEvent) {
        //     // Example: https://jsbin.com/nawahef/edit?js,output
        //     evt.dragged; // dragged HTMLElement
        //     evt.draggedRect; // DOMRect {left, top, right, bottom}
        //     evt.related; // HTMLElement on which have guided
        //     evt.relatedRect; // DOMRect
        //     evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        //     originalEvent.clientY; // mouse position
        //     // return false; — for cancel
        //     // return -1; — insert before target
        //     // return 1; — insert after target
        // },
        // // clone一个元素的时候触发
        // onClone: function (/**Event*/evt) {
        //     var origEl = evt.item;
        //     var cloneEl = evt.clone;
        // },
        // // 拖拽元素改变位置的时候
        // onChange: function (/**Event*/ evt: any) {
        // evt.newIndex // most likely why this event is used is to get the dragging element's current index
        // same properties as onEnd
        // console.log(evt, "anyyyyyyyy")
        // let newIndex = evt.newIndex
        // let oldIndex = evt.oldIndex
        // // 试图已经交换 现在交换数据
        // let newBlock = props.block.props.options.defaultValue[newIndex]
        // let oldBlock = props.block.props.options.defaultValue[oldIndex]
        // props.block.props.options.defaultValue[newIndex] = newBlock
        // props.block.props.options.defaultValue[oldIndex] = oldBlock
        // console.log(
        //   props.block.props.options.defaultValue,
        //   "props.block.props.options.defaultValueprops.block.props.options.defaultValue"
        // )
        // },
      });
    }), (a, i) => {
      const s = Kt, u = kn, d = Vt;
      return _(), I("div", Gb, [Xb, Zb, h("div", Qb, [h("ul", Jb, [(_(!0), I(Pe, null, bt(e.block.props.options.defaultValue, (f, m) => (_(), I("li", {
        key: m,
        class: "useDrag"
      }, [ey, c(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (p) => f.name = p,
        onInput: (p) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), h("div", {
        class: "del",
        onClick: (p) => o(m)
      }, null, 8, ty)]))), 128)), h("div", ny, [c(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: ne(() => [ly, oy]),
        _: 1
      })])])]), ay, h("div", ry, [iy, h("div", null, [c(d, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", sy, [uy, h("div", cy, [c(s, {
        modelValue: e.block.props.selectMin.defaultValue,
        "onUpdate:modelValue": i[1] || (i[1] = (f) => e.block.props.selectMin.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", dy, [fy, h("div", py, [c(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": i[2] || (i[2] = (f) => e.block.props.selectMax.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const hy = /* @__PURE__ */ je(vy, [["__scopeId", "data-v-32ae4908"]]), my = {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(kb, {
      style: {},
      title: t.title.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      options: t.options.defaultValue
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "多选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "多选"
    },
    options: {
      label: "选项",
      defaultValue: [{
        name: "",
        id: ""
      }]
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    },
    selectMin: {
      label: "最少选择项",
      defaultValue: ""
    },
    selectMax: {
      label: "最多选择项",
      defaultValue: ""
    }
  },
  controlView: (e, t) => c(hy, {
    block: e
  })
}, gy = (e) => (Qe("data-v-81c3802d"), e = e(), Je(), e), by = {
  class: "title-tip"
}, yy = {
  key: 0,
  class: "red"
}, _y = {
  class: "form-item"
}, $y = /* @__PURE__ */ gy(() => /* @__PURE__ */ h("div", {
  class: "control-input"
}, null, -1)), wy = {
  class: "text"
}, ky = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    isRequire: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (t, n) => (_(), I("div", {
      class: "editor-built-in-commen-radio",
      style: ge(e.style)
    }, [h("div", by, [e.isRequire ? (_(), I("span", yy, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", _y, [(_(!0), I(Pe, null, bt(e.options, (l, o) => (_(), I("div", {
      class: "item",
      key: o
    }, [$y, h("div", wy, ye(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const Cy = /* @__PURE__ */ je(ky, [["__scopeId", "data-v-81c3802d"]]), rn = (e) => (Qe("data-v-86c5cbf1"), e = e(), Je(), e), Sy = {
  class: "editor-built-in-control-commen-radio"
}, Vy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Ey = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "选项", -1)), Oy = {
  class: "flex mt24 options"
}, xy = {
  class: "select-group"
}, By = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "drag"
}, [/* @__PURE__ */ h("div", {
  class: "line"
}), /* @__PURE__ */ h("div", {
  class: "line"
})], -1)), Iy = ["onClick"], Py = {
  class: "add-btn"
}, jy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), Ty = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("span", null, "添加选项", -1)), My = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "校验", -1)), Dy = {
  class: "flex mt24 options"
}, zy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), Ay = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(a, i) {
      t.block.props[i].defaultValue = a ? "1" : "2";
    }
    function l(a) {
      a.id = a.name;
    }
    function o(a) {
      if (t.block.props.options.defaultValue.length == 1) {
        gt.warning("至少保留一项哦！");
        return;
      }
      t.block.props.options.defaultValue.splice(a, 1);
    }
    function r() {
      let a = {
        name: "",
        id: ""
      };
      t.block.props.options.defaultValue.push(a);
    }
    return Oe(() => {
      let a = document.querySelector(".editor-built-in-control-commen-radio .select-group");
      new ie(a, {
        // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
        // group: "name",
        // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
        sort: !0,
        // number 定义鼠标选中列表单元可以开始拖动的延迟时间；
        delay: 0,
        // px，在取消延迟拖动事件之前，点应该移动多少像素
        touchStartThreshold: 0,
        // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
        disabled: !1,
        // @see Store
        store: null,
        // ms, number 单位：ms，定义排序动画的时间
        animation: 150,
        // 制作动画。默认为null，https://easings.net/。
        easing: "cubic-bezier(1, 0, 0, 1)",
        // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
        handle: ".drag",
        // 过滤器，不需要进行拖动的元素
        // filter: ".ignore-elements",
        //  在触发过滤器`filter`的时候调用`event.preventDefault()`
        preventOnFilter: !0,
        // 允许拖拽的项目类名
        draggable: ".useDrag",
        // drop placeholder的css类名
        // ghostClass: "sortable-ghost",
        // 被选中项的css 类名
        // chosenClass: "sortable-chosen",
        // 正在被拖拽中的css类名
        // dragClass: "sortable-drag",
        // dataIdAttr: "data-id",
        // 交换区的阈值
        swapThreshold: 1,
        // 如果设置为 true，将始终使用反向交换区
        invertSwap: !1,
        // 反向交换阈值，默认情况下将设置为swapThreshold 值
        invertedSwapThreshold: 1,
        // 拖拽方向 (默认情况下会自动判断方向)
        direction: "horizontal",
        // 忽略 HTML5拖拽行为，强制回调进行
        forceFallback: !1,
        // 当使用forceFallback的时候，被复制的dom的css类名
        fallbackClass: "sortable-fallback",
        // 将cloned DOM 元素挂到body元素上。
        fallbackOnBody: !1,
        // 以像素为单位指定鼠标在被视为拖动之前应移动的距离。
        fallbackTolerance: 0,
        // 是否启用滚动，值为true或者HTMLElement
        scroll: !0,
        // 自定义滚动
        // scrollFn: function(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) { ... },
        // // 鼠标必须离边缘多近才能开始滚动，单位 px
        // scrollSensitivity: 30,
        //  // 滚动速度，px
        // scrollSpeed: 10,
        // // 将自动滚动应用于所有父元素，以便更轻松地移动
        // bubbleScroll: true,
        // dragoverBubble: false,
        // // 删除不显示的克隆元素，而不是仅仅隐藏它
        // removeCloneOnHide: true,
        // // 拖动时鼠标必须与空可排序项的距离（以像素为单位）,以便将拖动元素插入到该可排序项中, 设置为0禁用此功能。
        // emptyInsertThreshold: 5,
        // setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
        //     dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
        // },
        // // 元素被选中
        // onChoose: function (/**Event*/evt) {
        //     evt.oldIndex;  // element index within parent
        // },
        // // 元素未被选中的时候（从选中到未选中）
        // onUnchoose: function(/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 开始拖拽的时候
        // onStart: function (/**Event*/evt) {
        //     evt.oldIndex;  // element index within parent
        // },
        // // 结束拖拽
        onEnd: function(i) {
          console.log(i);
          let s = i.newIndex, u = i.oldIndex, d = t.block.props.options.defaultValue[s], f = t.block.props.options.defaultValue[u];
          t.block.props.options.defaultValue[s] = f, t.block.props.options.defaultValue[u] = d;
        }
        // // 元素从一个列表拖拽到另一个列表
        // onAdd: function (/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 列表内元素顺序更新的时候触发
        // onUpdate: function (/**Event*/ evt: any) {
        //   console.log(evt, "evt")
        //   // same properties as onEnd
        // },
        // // 列表的任何更改都会触发
        // onSort: function (/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 元素从列表中移除进入另一个列表
        // onRemove: function (/**Event*/evt) {
        //     // same properties as onEnd
        // },
        // // 试图拖拽一个filtered的元素
        // onFilter: function (/**Event*/evt) {
        //     var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
        // },
        // // 拖拽移动的时候
        // onMove: function (/**Event*/evt, /**Event*/originalEvent) {
        //     // Example: https://jsbin.com/nawahef/edit?js,output
        //     evt.dragged; // dragged HTMLElement
        //     evt.draggedRect; // DOMRect {left, top, right, bottom}
        //     evt.related; // HTMLElement on which have guided
        //     evt.relatedRect; // DOMRect
        //     evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        //     originalEvent.clientY; // mouse position
        //     // return false; — for cancel
        //     // return -1; — insert before target
        //     // return 1; — insert after target
        // },
        // // clone一个元素的时候触发
        // onClone: function (/**Event*/evt) {
        //     var origEl = evt.item;
        //     var cloneEl = evt.clone;
        // },
        // // 拖拽元素改变位置的时候
        // onChange: function (/**Event*/ evt: any) {
        // evt.newIndex // most likely why this event is used is to get the dragging element's current index
        // same properties as onEnd
        // console.log(evt, "anyyyyyyyy")
        // let newIndex = evt.newIndex
        // let oldIndex = evt.oldIndex
        // // 试图已经交换 现在交换数据
        // let newBlock = props.block.props.options.defaultValue[newIndex]
        // let oldBlock = props.block.props.options.defaultValue[oldIndex]
        // props.block.props.options.defaultValue[newIndex] = newBlock
        // props.block.props.options.defaultValue[oldIndex] = oldBlock
        // console.log(
        //   props.block.props.options.defaultValue,
        //   "props.block.props.options.defaultValueprops.block.props.options.defaultValue"
        // )
        // },
      });
    }), (a, i) => {
      const s = Kt, u = kn, d = Vt;
      return _(), I("div", Sy, [Vy, Ey, h("div", Oy, [h("ul", xy, [(_(!0), I(Pe, null, bt(e.block.props.options.defaultValue, (f, m) => (_(), I("li", {
        key: m,
        class: "useDrag"
      }, [By, c(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (p) => f.name = p,
        onInput: (p) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), h("div", {
        class: "del",
        onClick: (p) => o(m)
      }, null, 8, Iy)]))), 128)), h("div", Py, [c(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: ne(() => [jy, Ty]),
        _: 1
      })])])]), My, h("div", Dy, [zy, h("div", null, [c(d, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const Ly = /* @__PURE__ */ je(Ay, [["__scopeId", "data-v-86c5cbf1"]]), Fy = {
  group: "个人信息（自定义）",
  name: "commenRadio",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(Cy, {
      style: {},
      title: t.title.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      options: t.options.defaultValue,
      placeholder: t.placeholder.defaultValue
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "单选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "单选"
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请选择内容"
    },
    options: {
      label: "选项",
      defaultValue: [{
        name: "",
        id: ""
      }]
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => c(Ly, {
    block: e
  })
}, zs = (e) => (Qe("data-v-5f4c52a5"), e = e(), Je(), e), Ny = {
  class: "title-tip mb8"
}, Ry = {
  key: 0,
  class: "red"
}, qy = {
  class: "form-item"
}, Hy = {
  class: "item"
}, Wy = {
  class: "item flex"
}, Uy = {
  class: "input"
}, Ky = /* @__PURE__ */ zs(() => /* @__PURE__ */ h("div", {
  class: "success"
}, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), Yy = /* @__PURE__ */ zs(() => /* @__PURE__ */ h("div", {
  class: "button"
}, "发送验证码", -1)), Gy = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    isRequire: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => {
      const l = Kt;
      return _(), I("div", {
        class: "editor-built-in-check-phone",
        style: ge(e.style)
      }, [h("div", Ny, [e.isRequire ? (_(), I("span", Ry, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", qy, [h("div", Hy, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder
      }, null, 8, ["placeholder"])]), h("div", Wy, [h("div", Uy, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          flex: "1"
        },
        placeholder: "验证码"
      }), Ky]), Yy])])], 4);
    };
  }
});
const Xy = /* @__PURE__ */ je(Gy, [["__scopeId", "data-v-5f4c52a5"]]), tl = (e) => (Qe("data-v-f4a10f1d"), e = e(), Je(), e), Zy = {
  class: "editor-built-in-control-check-phone"
}, Qy = /* @__PURE__ */ tl(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Jy = /* @__PURE__ */ tl(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), e0 = {
  class: "flex mt24 options"
}, t0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), n0 = {
  class: "flex mt24 options"
}, l0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), o0 = {
  key: 0,
  class: "flex mt24 options"
}, a0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "校验周期（h）", -1)), r0 = {
  class: "pl24"
}, i0 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt, a = St;
      return _(), I("div", Zy, [Qy, Jy, h("div", e0, [t0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", n0, [l0, h("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (_(), I("div", o0, [a0, h("div", r0, [c(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : le("", !0)]);
    };
  }
});
const s0 = /* @__PURE__ */ je(i0, [["__scopeId", "data-v-f4a10f1d"]]), u0 = {
  group: "个人信息",
  name: "checkPhone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(Xy, {
      style: {},
      title: t.title.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      only: t.only.defaultValue == "1"
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "手机验证",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "电话"
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入电话"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    },
    only: {
      label: "唯一性",
      defaultValue: "2"
    },
    cycle: {
      label: "校验周期",
      defaultValue: 0
    }
  },
  controlView: (e, t) => c(s0, {
    block: e
  })
}, c0 = {
  class: "title-tip mb8"
}, d0 = {
  key: 0,
  class: "red"
}, f0 = {
  class: "form-item"
}, p0 = /* @__PURE__ */ N({
  __name: "base-input-render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    isRequire: {
      type: Boolean,
      default: !1
    },
    only: {
      type: Boolean,
      default: !1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  setup(e) {
    return (t, n) => {
      const l = Kt;
      return _(), I("div", {
        class: "editor-built-in-registor-person-name",
        style: ge(e.style)
      }, [h("div", c0, [e.isRequire ? (_(), I("span", d0, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", f0, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder,
        "model-value": e.value
      }, null, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const no = /* @__PURE__ */ je(p0, [["__scopeId", "data-v-b47f17b8"]]), sn = (e) => (Qe("data-v-05a6c9a4"), e = e(), Je(), e), v0 = {
  class: "editor-built-in-control-person-name"
}, h0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), m0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), g0 = {
  class: "flex mt24 options"
}, b0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), y0 = {
  class: "flex mt24 options"
}, _0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), $0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "填写限制", -1)), w0 = {
  class: "flex mt24 options"
}, k0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少填", -1)), C0 = {
  class: "pl24"
}, S0 = {
  class: "flex mt24 options"
}, V0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多填", -1)), E0 = {
  class: "pl24 flex"
}, O0 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt, a = St;
      return _(), I("div", v0, [h0, m0, h("div", g0, [b0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", y0, [_0, h("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), $0, h("div", w0, [k0, h("div", C0, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", S0, [V0, h("div", E0, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const x0 = /* @__PURE__ */ je(O0, [["__scopeId", "data-v-05a6c9a4"]]), B0 = {
  group: "个人信息",
  name: "personName",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(no, {
      style: {},
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      only: t.only.defaultValue == "1",
      min: t.min.defaultValue * 1,
      max: t.max.defaultValue * 1
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "姓名",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "姓名"
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: ""
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入姓名"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    },
    only: {
      label: "唯一性",
      defaultValue: "2"
    },
    min: {
      label: "最少填写",
      defaultValue: 2
    },
    max: {
      label: "最多填写",
      defaultValue: 100
    }
  },
  controlView: (e, t) => c(x0, {
    block: e
  })
}, On = (e) => (Qe("data-v-3fd74b8f"), e = e(), Je(), e), I0 = {
  class: "editor-built-in-control-person-other"
}, P0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), j0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), T0 = {
  class: "flex mt24 options"
}, M0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), D0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "填写限制", -1)), z0 = {
  class: "flex mt24 options"
}, A0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少填", -1)), L0 = {
  class: "pl24"
}, F0 = {
  class: "flex mt24 options"
}, N0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多填", -1)), R0 = {
  class: "pl24 flex"
}, q0 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt, a = St;
      return _(), I("div", I0, [P0, j0, h("div", T0, [M0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), D0, h("div", z0, [A0, h("div", L0, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", F0, [N0, h("div", R0, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const H0 = /* @__PURE__ */ je(q0, [["__scopeId", "data-v-3fd74b8f"]]), W0 = {
  group: "个人信息",
  name: "personOther",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(no, {
      style: {},
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      min: t.min.defaultValue * 1,
      max: t.max.defaultValue * 1
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "其他信息",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "其他信息"
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: ""
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入其他信息"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    },
    min: {
      label: "最少填写",
      defaultValue: 2
    },
    max: {
      label: "最多填写",
      defaultValue: 100
    }
  },
  controlView: (e, t) => c(H0, {
    block: e
  })
}, nl = (e) => (Qe("data-v-df798f6e"), e = e(), Je(), e), U0 = {
  class: "editor-built-in-control-person-phone"
}, K0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Y0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), G0 = {
  class: "flex mt24 options"
}, X0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), Z0 = {
  class: "flex mt24 options"
}, Q0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), J0 = {
  key: 0,
  class: "flex mt24 options"
}, e1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "校验周期（h）", -1)), t1 = {
  class: "pl24"
}, n1 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt, a = St;
      return _(), I("div", U0, [K0, Y0, h("div", G0, [X0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", Z0, [Q0, h("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (_(), I("div", J0, [e1, h("div", t1, [c(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : le("", !0)]);
    };
  }
});
const l1 = /* @__PURE__ */ je(n1, [["__scopeId", "data-v-df798f6e"]]), o1 = {
  group: "个人信息",
  name: "personPhone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(no, {
      style: {},
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      only: t.only.defaultValue == "1"
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "电话",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "电话"
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: ""
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入电话"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    },
    only: {
      label: "唯一性",
      defaultValue: "2"
    },
    cycle: {
      label: "校验周期",
      defaultValue: 0
    }
  },
  controlView: (e, t) => c(l1, {
    block: e
  })
}, a1 = {
  group: "个人信息",
  name: "textarea",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  render: (e) => c("textarea", {
    name: "",
    id: "",
    cols: "30",
    rows: "10"
  }, null),
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "省份",
  props: {},
  controlView: (e, t) => {
    let n = e.props;
    function l(o) {
      e.props.fontSize = o.target.value, t(e);
    }
    return c("div", null, [c("div", null, [c("span", null, [pe("字體大小")]), c("input", {
      type: "number",
      value: n.fontSize,
      onChange: l
    }, null)]), c("div", null, [c("span", null, [pe("文本内容")]), Hn(c("input", {
      type: "text",
      "onUpdate:modelValue": (o) => n.text = o,
      onChange: (o) => {
        e.props.text = o.target.value, t(e);
      }
    }, null), [[Ua, n.text]])]), c("div", null, [c("span", null, [pe("文本颜色")]), Hn(c("input", {
      type: "text",
      "onUpdate:modelValue": (o) => n.color = o,
      onChange: (o) => {
        e.props.color = o.target.value, t(e);
      }
    }, null), [[Ua, n.color]])])]);
  }
}, xn = (e) => (Qe("data-v-1418313e"), e = e(), Je(), e), r1 = {
  class: "editor-built-in-control-person-school"
}, i1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), s1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), u1 = {
  class: "flex mt24 options"
}, c1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), d1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "填写限制", -1)), f1 = {
  class: "flex mt24 options"
}, p1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少填", -1)), v1 = {
  class: "pl24"
}, h1 = {
  class: "flex mt24 options"
}, m1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多填", -1)), g1 = {
  class: "pl24 flex"
}, b1 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt, a = St;
      return _(), I("div", r1, [i1, s1, h("div", u1, [c1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), d1, h("div", f1, [p1, h("div", v1, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", h1, [m1, h("div", g1, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [pe(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const y1 = /* @__PURE__ */ je(b1, [["__scopeId", "data-v-1418313e"]]), _1 = {
  group: "个人信息",
  name: "personSchool",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(no, {
      style: {},
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      min: t.min.defaultValue * 1,
      max: t.max.defaultValue * 1
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "学校",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "所在中学"
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: ""
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入所在中学"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    },
    min: {
      label: "最少填写",
      defaultValue: 2
    },
    max: {
      label: "最多填写",
      defaultValue: 100
    }
  },
  controlView: (e, t) => c(y1, {
    block: e
  })
}, $1 = (e) => (Qe("data-v-22530c73"), e = e(), Je(), e), w1 = {
  class: "title-tip mb8"
}, k1 = {
  key: 0,
  class: "red"
}, C1 = {
  class: "form-item"
}, S1 = /* @__PURE__ */ $1(() => /* @__PURE__ */ h("div", {
  class: "btn"
}, [/* @__PURE__ */ h("span", null, "上传文件"), /* @__PURE__ */ h("input", {
  type: "file",
  class: "file"
})], -1)), V1 = {
  key: 0,
  class: "tip title-tip"
}, E1 = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    max: {
      type: Number,
      default: 0
    },
    tip: {
      type: String,
      default: ""
    },
    isRequire: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (_(), I("div", {
      class: "editor-built-in-person-upload",
      style: ge(e.style)
    }, [h("div", w1, [e.isRequire ? (_(), I("span", k1, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", C1, [S1, e.tip ? (_(), I("div", V1, ye(e.tip), 1)) : le("", !0)])], 4));
  }
});
const O1 = /* @__PURE__ */ je(E1, [["__scopeId", "data-v-22530c73"]]), Ra = (e) => (Qe("data-v-be68881f"), e = e(), Je(), e), x1 = {
  class: "editor-built-in-control-person-upload"
}, B1 = /* @__PURE__ */ Ra(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), I1 = /* @__PURE__ */ Ra(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), P1 = {
  class: "flex mt24 options"
}, j1 = /* @__PURE__ */ Ra(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), T1 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt;
      return _(), I("div", x1, [B1, I1, h("div", P1, [j1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const M1 = /* @__PURE__ */ je(T1, [["__scopeId", "data-v-be68881f"]]), D1 = {
  group: "个人信息",
  label: "上传文件",
  name: "personUpload",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (e) => {
    let t = e.props;
    return c(O1, {
      style: {},
      title: t.title.defaultValue,
      max: t.max.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      tip: t.tip.defaultValue
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "上传文件"
    },
    fileType: {
      label: "文件类型",
      type: "select",
      options: [{
        name: "不限",
        value: "none"
      }, {
        name: "图片",
        value: "image"
      }, {
        name: "视频",
        value: "video"
      }, {
        name: "文档",
        value: "excel"
      }, {
        name: "压缩包",
        value: "zip"
      }],
      defaultValue: "none"
    },
    max: {
      label: "最大上传数量",
      type: "number",
      defaultValue: 1,
      unit: "个",
      min: 1
    },
    MB: {
      label: "单文件最大",
      type: "number",
      defaultValue: 1,
      unit: "MB"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => c(M1, {
    block: e
  })
}, qa = (e) => (Qe("data-v-169f549c"), e = e(), Je(), e), z1 = {
  class: "editor-built-in-control-person-year"
}, A1 = /* @__PURE__ */ qa(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), L1 = /* @__PURE__ */ qa(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), F1 = {
  class: "flex mt24 options"
}, N1 = /* @__PURE__ */ qa(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), R1 = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(l, o) {
      t.block.props[o].defaultValue = l ? "1" : "2";
    }
    return (l, o) => {
      const r = Vt;
      return _(), I("div", z1, [A1, L1, h("div", F1, [N1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const q1 = /* @__PURE__ */ je(R1, [["__scopeId", "data-v-169f549c"]]), H1 = {
  class: "title-tip mb8"
}, W1 = {
  key: 0,
  class: "red"
}, U1 = {
  class: "form-item"
}, K1 = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    isRequire: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => {
      const l = mn, o = Pa;
      return _(), I("div", {
        class: "editor-built-in-person-year",
        style: ge(e.style)
      }, [h("div", H1, [e.isRequire ? (_(), I("span", W1, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", U1, [c(o, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder,
        "model-value": e.value
      }, {
        default: ne(() => [c(l, {
          value: 2020
        }, {
          default: ne(() => [pe("2020")]),
          _: 1
        }), c(l, {
          value: 2021
        }, {
          default: ne(() => [pe("2021")]),
          _: 1
        }), c(l, {
          value: 2022
        }, {
          default: ne(() => [pe("2022")]),
          _: 1
        }), c(l, {
          value: 2023
        }, {
          default: ne(() => [pe("2023")]),
          _: 1
        }), c(l, {
          value: 2024
        }, {
          default: ne(() => [pe("2024")]),
          _: 1
        }), c(l, {
          value: 2025
        }, {
          default: ne(() => [pe("2025")]),
          _: 1
        }), c(l, {
          value: 2026
        }, {
          default: ne(() => [pe("2026")]),
          _: 1
        }), c(l, {
          value: 2027
        }, {
          default: ne(() => [pe("2027")]),
          _: 1
        }), c(l, {
          value: 2028
        }, {
          default: ne(() => [pe("2028")]),
          _: 1
        }), c(l, {
          value: 2029
        }, {
          default: ne(() => [pe("2029")]),
          _: 1
        }), c(l, {
          value: 2030
        }, {
          default: ne(() => [pe("2030")]),
          _: 1
        })]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const Y1 = /* @__PURE__ */ je(K1, [["__scopeId", "data-v-4752fc19"]]), G1 = {
  group: "个人信息",
  name: "personYear",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (e) => {
    let t = e.props;
    return c(Y1, {
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1"
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "考试年份",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "参加高考年份"
    },
    value: {
      label: "默认值",
      type: "select",
      defaultValue: "",
      //new Date().getFullYear()
      options: [{
        name: "2020",
        value: "2020"
      }, {
        name: "2021",
        value: "2021"
      }, {
        name: "2022",
        value: "2022"
      }, {
        name: "2023",
        value: "2023"
      }, {
        name: "2024",
        value: "2024"
      }, {
        name: "2025",
        value: "2025"
      }, {
        name: "2026",
        value: "2026"
      }, {
        name: "2027",
        value: "2027"
      }, {
        name: "2028",
        value: "2028"
      }, {
        name: "2029",
        value: "2029"
      }, {
        name: "2030",
        value: "2030"
      }]
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请选择参加高考年份"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => c(q1, {
    block: e
  })
}, oa = {
  baseText: Ng,
  baseImg: Kg,
  baseSubmit: fb,
  baseTitle: hb,
  commenMultiple: my,
  commenRadio: Fy,
  checkPhone: u0,
  personName: B0,
  personOther: W0,
  personPhone: o1,
  personProvince: a1,
  personSchool: _1,
  personUpload: D1,
  personYear: G1
};
function X1(e, t) {
  t.forEach((n) => {
    if (oa[n])
      e.registry(n, oa[n]);
    else {
      let l = Object.keys(oa);
      console.error(`内置组件不合法，仅支持：${l.join(",")}共${l.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const Z1 = /* @__PURE__ */ N({
  components: {
    editorBlock: Ml,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: gi
  },
  props: {
    modelValue: {
      type: Object
    },
    config: {
      type: Object,
      default: () => ({
        markLine: !1,
        // 是否开启标线对齐功能
        shiftMove: !1,
        // 是否开启按住shift键移动
        shortcutKeys: !0
        // 是否开启快捷键操作
      })
    },
    fileUploadHandler: {
      // 文件上传的函数
      type: Function,
      default: () => () => {
      }
    },
    builtInComs: {
      type: Array,
      default: () => ["baseImg", "baseSubmit", "baseText", "baseTitle", "checkPhone", "personName", "personOther", "personPhone", "personProvince", "personSchool", "personUpload", "personYear", "commenMultiple", "commenRadio"]
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    var k, L, $, V;
    if ((k = e.modelValue) != null && k.container)
      (L = e.modelValue) != null && L.container.width || (e.modelValue.container.width = 350), ($ = e.modelValue) != null && $.container.height || (e.modelValue.container.height = 600);
    else
      throw new Error("请检查传入的container！");
    (V = e == null ? void 0 : e.builtInComs) != null && V.length && X1(rt, e.builtInComs);
    const {
      shiftMove: n = !1,
      shortcutKeys: l = !1
    } = e.config;
    let o = xi(() => e.modelValue, (E) => t("update:modelValue", E)), r = Ie({
      // 当前选中的元素
      selectedBlock: null
    }), a = v(() => ({
      width: o.value.container.width + "px",
      minHeight: o.value.container.height + "px",
      backgroundColor: o.value.container.backgroundColor,
      transform: `scale(${o.value.container.scale / 100})`
    }));
    function i() {
      var E;
      (((E = e.modelValue) == null ? void 0 : E.blocks) || []).map((T) => (T.focus = !1, T));
    }
    function s(E) {
      w.cacheView = null, o.value = {
        ...o.value,
        blocks: Xe(E)
      };
    }
    function u(E) {
      o.value.blocks.forEach((T) => {
        if (E.id == T.id)
          for (let P in T)
            w.cacheView = null, T[P] = Xe(E[P]);
      });
    }
    function d(E) {
      let T = document.querySelectorAll(".editor-bloack");
      T && (T = Array.from(T)), T.forEach((P) => {
        P.classList.remove("editor-bloack-drag-active");
      }), E && E.classList.add("editor-bloack-drag-active");
    }
    const f = B(null), m = function() {
      let E = {
        component: null
      }, T = {
        dragstart(P, g) {
          var x, O, U, Y;
          (x = f.value) == null || x.addEventListener("dragenter", T.dragenter), (O = f.value) == null || O.addEventListener("dragover", T.dragover), (U = f.value) == null || U.addEventListener("dragleave", T.dragleave), (Y = f.value) == null || Y.addEventListener("drop", T.drop), E.component = g, Dl.emit();
        },
        dragenter(P) {
          Array.from(P.target.classList).includes("editor-bloack") ? d(P.target) : d(), P.dataTransfer.dropEffect = "move";
        },
        dragleave(P) {
          P.dataTransfer.dropEffect = "none";
        },
        dragend(P) {
          var g, x, O, U;
          (g = f.value) == null || g.removeEventListener("dragenter", T.dragenter), (x = f.value) == null || x.removeEventListener("dragover", T.dragover), (O = f.value) == null || O.removeEventListener("dragleave", T.dragleave), (U = f.value) == null || U.removeEventListener("drop", T.drop), E.component = null, zl.emit(), d();
        },
        dragover(P) {
          P.preventDefault();
        },
        drop(P) {
          let g = E.component, x = g == null ? void 0 : g.dragMode, O = Ka({
            dragMode: x || "",
            widthAdaption100: g.widthAdaption100 ? g.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: g.name,
            props: g.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1
          }), U = P.target.dataset;
          "index" in U ? D.add(O, U.index) : D.add(O);
        },
        click(P, g) {
          console.log(g);
          let x = g == null ? void 0 : g.dragMode, O = Ka({
            dragMode: x || "",
            widthAdaption100: g.widthAdaption100 ? g.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: g.name,
            props: g.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1
          });
          D.add(O);
        }
      };
      return T;
    }(), p = v(() => {
      var E, T, P;
      return {
        blurBlock: (E = e.modelValue) == null ? void 0 : E.blocks.filter((g) => !g.focus),
        // 当前失去焦点的模块
        focusBlock: (T = e.modelValue) == null ? void 0 : T.blocks.filter((g) => g.focus),
        // 当前获得焦点的模块
        cBlock: (P = e.modelValue) == null ? void 0 : P.blocks.find((g) => g.focus)
        // 当前获得焦点的模块
      };
    });
    let b = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(E, T) {
          E.stopPropagation(), E.preventDefault(), i(), T.focus = !T.focus, r.selectedBlock = T, y.mousedown(E);
        }
      },
      container: {
        // 点击画布区域的处理的事情
        onMousedown(E) {
          E.preventDefault(), E.stopPropagation(), i(), r.selectedBlock = null;
        }
      }
    };
    const y = function() {
      const E = {
        startX: 0,
        startY: 0,
        // block元素的初始位置 - 所有的计算都是基于当前值计算的
        startPositon: [],
        draging: !1,
        // 是否在拖拽
        // marks: { x: [], y: [] } as markline,
        startLeft: 0,
        startTop: 0
      };
      function T(x) {
        var O, U, Y;
        E.startX = x.clientX, E.startY = x.clientY, E.startPositon = (O = p.value.focusBlock || []) == null ? void 0 : O.map((G) => ({
          left: G.left,
          top: G.top
        })), E.draging = !1, E.startLeft = (U = r.selectedBlock) == null ? void 0 : U.left, E.startTop = (Y = r.selectedBlock) == null ? void 0 : Y.top, document.addEventListener("mousemove", P), document.addEventListener("mouseup", g);
      }
      function P(x) {
        var J;
        E.draging || (E.draging = !0, Dl.emit());
        let {
          clientX: O,
          clientY: U
        } = x, {
          startX: Y,
          startY: G
        } = E;
        x.shiftKey && n ? Math.abs(O - Y) > Math.abs(U - G) ? U = G : O = Y : x.shiftKey && !n && console.warn("您没有开启按住shift键移动元素功能！请将配置项中的shiftMove置为true"), (J = p.value.focusBlock) == null || J.forEach((W, te) => {
          W.left = E.startPositon[te].left + (O - Y), W.top = E.startPositon[te].top + (U - G);
        });
      }
      function g(x) {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", g), zl.emit();
      }
      return {
        mousedown: T
      };
    }(), D = Mm({
      currentBlockInfo: p,
      updateBlocks: s,
      dataModel: o,
      shortcutKeys: l
    }), A = Tm(D, p);
    function S(E) {
      D.delete(E);
    }
    const w = {
      // 操作的原数据
      originData: null,
      // 视图缓存
      cacheView: null,
      // 控制层渲染函数
      controlRender() {
        var P, g, x;
        if (((P = this.originData) == null ? void 0 : P.id) === ((g = p.value.cBlock) == null ? void 0 : g.id) && this.cacheView)
          return this.cacheView;
        let E = (x = p.value.cBlock) == null ? void 0 : x.componentKey, T = rt == null ? void 0 : rt.componentMap;
        return E && T && p.value.cBlock ? (this.originData = Xe(p.value.cBlock), this.cacheView = T[E].controlView(p.value.cBlock, u), this.cacheView) : null;
      },
      sure() {
        r.selectedBlock = null;
      },
      cancle() {
        u(this.originData), r.selectedBlock = null;
      },
      cancleEffect() {
        this.originData = null, this.cacheView = null, console.log("取消副作用");
      }
    };
    return be(() => r.selectedBlock, (E) => {
      E || w.cancleEffect();
    }), () => c("div", {
      class: "visual-editor-container"
    }, [c("div", {
      class: "visual-editor-header"
    }, [c("button", null, [pe("发布")]), c("button", null, [pe("退出")])]), c("div", {
      class: "visual-editor-core visual-editor"
    }, [c("div", {
      class: "visual-editor-leftComponentsMenu"
    }, [c("div", {
      class: "visual-tab-type"
    }, [c("div", {
      class: "visual-tab-type-com"
    }, [c("span", null, [pe("组件")])]), c("div", {
      class: "visual-tab-type-com"
    }, [c("span", null, [pe("模版")])])]), c("div", {
      class: "visual-com-group"
    }, [c(gi, {
      componentLists: rt == null ? void 0 : rt.componentLists,
      menuDragInfo: m
    }, null)])]), c("div", {
      class: "visual-editor-area-body"
    }, [c("div", {
      class: "visual-editor-area-container",
      onMousedown: () => i()
    }, [c("div", {
      class: "visual-editor-area-content",
      style: a.value,
      ref: f,
      onMousedown: (E) => b.container.onMousedown(E)
    }, [o.value.blocks.map((E, T) => {
      var P;
      return c("div", null, [c(Ml, {
        index: T,
        block: E,
        container: (P = e.modelValue) == null ? void 0 : P.container,
        onMousedown: (g) => b.block.onMousedown(g, E),
        onDelBlock: () => S(E),
        onUpBlock: D.up,
        onDownBlock: D.down,
        key: E.id
      }, null)]);
    })])])]), c("div", {
      class: "visual-editor-topMenu"
    }, [c("div", {
      class: "buttons"
    }, [A.map((E) => c("div", {
      class: "button"
    }, [c("button", {
      onClick: E.handler
    }, [E.label])]))])]), c("div", {
      class: "visual-editor-right-seting"
    }, [ng(w.controlRender.bind(w), p, e.modelValue)])])]);
  }
});
const Q1 = /* @__PURE__ */ N({
  components: {
    editorBlock: Ml
  },
  props: {
    modelValue: {
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    let n = xi(() => e.modelValue, (o) => t("update:modelValue", o)), l = v(() => ({
      width: n.value.container.width + "px",
      height: n.value.container.height + "px"
    }));
    return () => c("div", {
      class: "priview-visual-editor"
    }, [c("div", {
      class: "priview-visual-editor-area-body"
    }, [c("div", {
      class: "visual-editor-area-container"
    }, [c("div", {
      class: "visual-editor-area-content",
      style: l.value
    }, [n.value.blocks.map((o) => c(Ml, {
      block: o
    }, null))])])])]);
  }
}), As = rt.registry, Ls = Z1, J1 = Q1, e_ = function(e) {
  As(e.name, e);
}, t_ = function(e) {
  Ls.batchRegistry(e);
}, n_ = function() {
  return rt == null ? void 0 : rt.componentLists;
}, a_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: As,
  batchRegistry: t_,
  logConfig: n_,
  priviewVisualEditor: J1,
  registry: e_,
  visualEditor: Ls
}, Symbol.toStringTag, { value: "Module" }));
export {
  a_ as default
};
