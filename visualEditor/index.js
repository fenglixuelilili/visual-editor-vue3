var Ys = Object.defineProperty;
var Gs = (e, t, n) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ka = (e, t, n) => (Gs(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as I, watch as be, computed as m, reactive as je, inject as Ge, getCurrentInstance as Kn, cloneVNode as ql, defineComponent as F, onMounted as Ee, onUnmounted as Hl, openBlock as y, createElementBlock as x, normalizeClass as G, renderSlot as ie, normalizeStyle as pe, createElementVNode as p, resolveComponent as ue, createBlock as ce, createCommentVNode as te, toRef as Cl, toRefs as we, createVNode as d, mergeProps as Ve, createTextVNode as ye, nextTick as Le, provide as Wt, Fragment as Te, createSlots as Pr, withCtx as le, withModifiers as ln, onUpdated as jt, onBeforeUnmount as Ut, readonly as Xs, onDeactivated as Zs, Teleport as Qs, Transition as Sl, withDirectives as ba, vShow as ya, resolveDynamicComponent as tn, toDisplayString as ve, renderList as bt, TransitionGroup as jr, watchEffect as Js, isVNode as _a, render as Ya, Comment as eu, unref as Tr, pushScopeId as He, popScopeId as We } from "vue";
const Ga = function(e) {
  return {
    adjustmentPosition: !0,
    focus: !1,
    zIndex: 0,
    hasResize: !1,
    width: 0,
    height: 0,
    id: "$i" + Math.floor(Math.random() * 1e17),
    ...e
  };
};
function tu() {
  const e = [], t = {};
  return {
    /**
     * @name 组件名称
     * @component 组件
     * Omit类型是排除属性
     */
    registry(n, l, o = "push") {
      let i = {
        ...l,
        name: n
      };
      e.find((r) => r.name == n) || (t[n] = i, o == "unshift" ? e.unshift(i) : e.push(i));
    },
    componentLists: e,
    componentMap: t
  };
}
let ot = tu();
function Mr(e, t) {
  let n = I(e());
  return be(e, (l) => {
    l != n.value && (n.value = l);
  }), m({
    get() {
      return n.value;
    },
    set(l) {
      l != n.value && (n.value = l, t(l));
    }
  });
}
const Cn = Object.prototype.toString;
function Ae(e) {
  return Cn.call(e) === "[object Array]";
}
function Sn(e) {
  return Cn.call(e) === "[object Null]";
}
function Wl(e) {
  return Cn.call(e) === "[object Boolean]";
}
function Oe(e) {
  return Cn.call(e) === "[object Object]";
}
function kt(e) {
  return Cn.call(e) === "[object String]";
}
function ge(e) {
  return Cn.call(e) === "[object Number]" && e === e;
}
function Qe(e) {
  return e === void 0;
}
function et(e) {
  return typeof e == "function";
}
function nu(e) {
  return Oe(e) && Object.keys(e).length === 0;
}
const Dr = (e) => (e == null ? void 0 : e.$) !== void 0, an = Symbol("ArcoConfigProvider"), ol = {
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
}, lu = {
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
}, ou = I("zh-CN"), au = je({
  "zh-CN": lu
}), $a = () => {
  const e = Ge(an, void 0), t = m(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : au[ou.value];
  }), n = m(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (o, ...i) => {
      const a = o.split(".");
      let r = t.value;
      for (const s of a) {
        if (!r[s])
          return o;
        r = r[s];
      }
      return kt(r) && i.length > 0 ? r.replace(/{(\d+)}/g, (s, u) => {
        var c;
        return (c = i[u]) != null ? c : s;
      }) : r;
    }
  };
};
var iu = Object.defineProperty, ru = Object.defineProperties, su = Object.getOwnPropertyDescriptors, Xa = Object.getOwnPropertySymbols, uu = Object.prototype.hasOwnProperty, cu = Object.prototype.propertyIsEnumerable, Za = (e, t, n) => t in e ? iu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, du = (e, t) => {
  for (var n in t || (t = {}))
    uu.call(t, n) && Za(e, n, t[n]);
  if (Xa)
    for (var n of Xa(t))
      cu.call(t, n) && Za(e, n, t[n]);
  return e;
}, fu = (e, t) => ru(e, su(t));
const pu = "A", vu = "arco", aa = "$arco", Ue = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : pu;
}, Ke = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[aa] = fu(du({}, (n = e.config.globalProperties[aa]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ne = (e) => {
  var t, n, l;
  const o = Kn(), i = Ge(an, void 0), a = (l = (n = i == null ? void 0 : i.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[aa]) == null ? void 0 : t.classPrefix) != null ? l : vu;
  return e ? `${a}-${e}` : a;
};
var zr = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var l = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (l = i, !0) : !1;
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
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(l, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), ia = typeof window < "u" && typeof document < "u" && window.document === document, Vl = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), hu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Vl) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), mu = 2;
function gu(e, t) {
  var n = !1, l = !1, o = 0;
  function i() {
    n && (n = !1, e()), l && r();
  }
  function a() {
    hu(i);
  }
  function r() {
    var s = Date.now();
    if (n) {
      if (s - o < mu)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return r;
}
var bu = 20, yu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], _u = typeof MutationObserver < "u", $u = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gu(this.refresh.bind(this), bu);
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
      !ia || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), _u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ia || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = yu.some(function(i) {
        return !!~l.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ar = function(e, t) {
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
}, _n = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Vl;
}, Lr = Ul(0, 0, 0, 0);
function Ol(e) {
  return parseFloat(e) || 0;
}
function Qa(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var i = e["border-" + o + "-width"];
    return l + Ol(i);
  }, 0);
}
function wu(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var i = o[l], a = e["padding-" + i];
    n[i] = Ol(a);
  }
  return n;
}
function ku(e) {
  var t = e.getBBox();
  return Ul(0, 0, t.width, t.height);
}
function Cu(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Lr;
  var l = _n(e).getComputedStyle(e), o = wu(l), i = o.left + o.right, a = o.top + o.bottom, r = Ol(l.width), s = Ol(l.height);
  if (l.boxSizing === "border-box" && (Math.round(r + i) !== t && (r -= Qa(l, "left", "right") + i), Math.round(s + a) !== n && (s -= Qa(l, "top", "bottom") + a)), !Vu(e)) {
    var u = Math.round(r + i) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (r -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Ul(o.left, o.top, r, s);
}
var Su = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof _n(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof _n(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Vu(e) {
  return e === _n(e).document.documentElement;
}
function Ou(e) {
  return ia ? Su(e) ? ku(e) : Cu(e) : Lr;
}
function Eu(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Ar(a, {
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
var xu = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ul(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Ou(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Bu = (
  /** @class */
  function() {
    function e(t, n) {
      var l = Eu(n);
      Ar(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), Iu = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new zr(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof _n(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new xu(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof _n(t).Element))
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
          return new Bu(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Fr = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new zr(), Nr = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = $u.getInstance(), l = new Iu(t, n, this);
      Fr.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Nr.prototype[e] = function() {
    var t;
    return (t = Fr.get(this))[e].apply(t, arguments);
  };
});
var wa = function() {
  return typeof Vl.ResizeObserver < "u" ? Vl.ResizeObserver : Nr;
}(), Ja;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Ja || (Ja = {}));
var ei;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(ei || (ei = {}));
const Kl = (e) => Boolean(e && e.shapeFlag & 1), Yn = (e, t) => Boolean(e && e.shapeFlag & 6), Pu = (e, t) => Boolean(e && e.shapeFlag & 8), ka = (e, t) => Boolean(e && e.shapeFlag & 16), Rr = (e, t) => Boolean(e && e.shapeFlag & 32), mn = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Kl(l) || Yn(l))
        return l;
      if (ka(l, l.children)) {
        const o = mn(l.children);
        if (o)
          return o;
      } else if (Rr(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const i = mn(o);
          if (i)
            return i;
        }
      } else if (Ae(l)) {
        const o = mn(l);
        if (o)
          return o;
      }
    }
}, ju = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, qr = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Kl(l) || Yn(l)) {
        const i = et(t) ? t(l) : t;
        return e[n] = ql(l, i, !0), !0;
      }
      const o = Ca(l);
      if (o && o.length > 0 && qr(o, t))
        return !0;
    }
  return !1;
}, Ca = (e) => {
  if (ka(e, e.children))
    return e.children;
  if (Ae(e))
    return e;
}, Hr = (e) => {
  var t, n;
  if (Kl(e))
    return e.el;
  if (Yn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Hr(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = Ca(e);
    return Wr(l);
  }
}, Wr = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Hr(t);
      if (n)
        return n;
    }
}, hl = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const i of e ?? [])
    Kl(i) || Yn(i) || t && Pu(i, i.children) ? o.push(i) : ka(i, i.children) ? o.push(...hl(i.children, t)) : Rr(i, i.children) ? o.push(...hl((l = (n = i.children).default) == null ? void 0 : l.call(n), t)) : Ae(i) && o.push(...hl(i, t));
  return o;
}, ti = (e) => {
  if (e)
    return et(e) ? e : () => e;
}, Ur = (e, t) => {
  var n;
  const l = [];
  if (Yn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Ur(e.component.subTree, t));
  else {
    const o = Ca(e);
    o && l.push(...Kr(o, t));
  }
  return l;
}, Kr = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Ur(l, t));
  return n;
};
var El = F({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = I(), i = m(() => Dr(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new wa((u) => {
        const c = u[0];
        t("resize", c);
      }), l.observe(s));
    }, r = () => {
      l && (l.disconnect(), l = null);
    };
    return be(i, (s) => {
      l && r(), s && a(s);
    }), Ee(() => {
      i.value && a(i.value);
    }), Hl(() => {
      r();
    }), () => {
      var s, u;
      const c = mn((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? ql(c, {
        ref: o
      }, !0) : null;
    };
  }
});
const Yr = typeof window > "u" ? global : window, Tu = Yr.requestAnimationFrame, ni = Yr.cancelAnimationFrame;
function li(e) {
  let t = 0;
  const n = (...l) => {
    t && ni(t), t = Tu(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    ni(t), t = 0;
  }, n;
}
const Sa = () => {
}, Mu = () => {
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
}, Va = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Et = (() => Va ? Sa : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), $n = (() => Va ? Sa : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), Du = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, zu = (e, t) => {
  var n;
  return Va ? Sa() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, oi = (e, t) => {
  if (kt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return zu(n, t);
  }
  return e;
}, Au = (e, t) => {
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
var de = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const Lu = F({
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
      prefixCls: ne("icon-hover")
    };
  }
});
function Fu(e, t, n, l, o, i) {
  return y(), x("span", {
    class: G([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [ie(e.$slots, "default")], 2);
}
var dt = /* @__PURE__ */ de(Lu, [["render", Fu]]);
const Nu = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ru = ["stroke-width", "stroke-linecap", "stroke-linejoin"], qu = /* @__PURE__ */ p("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Hu = [qu];
function Wu(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Hu, 14, Ru);
}
var io = /* @__PURE__ */ de(Nu, [["render", Wu]]);
const rn = Object.assign(io, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + io.name, io);
  }
}), Uu = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ku = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yu = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Gu = [Yu];
function Xu(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Gu, 14, Ku);
}
var ro = /* @__PURE__ */ de(Uu, [["render", Xu]]);
const Zu = Object.assign(ro, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ro.name, ro);
  }
}), Qu = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ju = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ec = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), tc = [ec];
function nc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, tc, 14, Ju);
}
var so = /* @__PURE__ */ de(Qu, [["render", nc]]);
const Gr = Object.assign(so, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + so.name, so);
  }
}), lc = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), oc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ac = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ic = [ac];
function rc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ic, 14, oc);
}
var uo = /* @__PURE__ */ de(lc, [["render", rc]]);
const Xr = Object.assign(uo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + uo.name, uo);
  }
}), sc = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), uc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], cc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), dc = [cc];
function fc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, dc, 14, uc);
}
var co = /* @__PURE__ */ de(sc, [["render", fc]]);
const Zr = Object.assign(co, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + co.name, co);
  }
});
function ai(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function ii(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function fo(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return ii(n.overflowY, t) || ii(n.overflowX, t) || function(l) {
      var o = function(i) {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(l);
      return !!o && (o.clientHeight < l.scrollHeight || o.clientWidth < l.scrollWidth);
    }(e);
  }
  return !1;
}
function al(e, t, n, l, o, i, a, r) {
  return i < e && a > t || i > e && a < t ? 0 : i <= e && r <= n || a >= t && r >= n ? i - e - l : a > t && r < n || i < e && r > n ? a - t + o : 0;
}
var ri = function(e, t) {
  var n = window, l = t.scrollMode, o = t.block, i = t.inline, a = t.boundary, r = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(j) {
    return j !== a;
  };
  if (!ai(e))
    throw new TypeError("Invalid target");
  for (var u, c, f = document.scrollingElement || document.documentElement, g = [], h = e; ai(h) && s(h); ) {
    if ((h = (c = (u = h).parentElement) == null ? u.getRootNode().host || null : c) === f) {
      g.push(h);
      break;
    }
    h != null && h === document.body && fo(h) && !fo(document.documentElement) || h != null && fo(h, r) && g.push(h);
  }
  for (var b = n.visualViewport ? n.visualViewport.width : innerWidth, _ = n.visualViewport ? n.visualViewport.height : innerHeight, D = window.scrollX || pageXOffset, T = window.scrollY || pageYOffset, k = e.getBoundingClientRect(), V = k.height, C = k.width, M = k.top, $ = k.right, O = k.bottom, N = k.left, Y = o === "start" || o === "nearest" ? M : o === "end" ? O : M + V / 2, R = i === "center" ? N + C / 2 : i === "end" ? $ : N, v = [], E = 0; E < g.length; E++) {
    var S = g[E], z = S.getBoundingClientRect(), K = z.height, W = z.width, X = z.top, A = z.right, ee = z.bottom, B = z.left;
    if (l === "if-needed" && M >= 0 && N >= 0 && O <= _ && $ <= b && M >= X && O <= ee && N >= B && $ <= A)
      return v;
    var w = getComputedStyle(S), H = parseInt(w.borderLeftWidth, 10), Q = parseInt(w.borderTopWidth, 10), he = parseInt(w.borderRightWidth, 10), _e = parseInt(w.borderBottomWidth, 10), re = 0, xe = 0, Se = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - H - he : 0, Ie = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - Q - _e : 0, ft = "offsetWidth" in S ? S.offsetWidth === 0 ? 0 : W / S.offsetWidth : 0, tt = "offsetHeight" in S ? S.offsetHeight === 0 ? 0 : K / S.offsetHeight : 0;
    if (f === S)
      re = o === "start" ? Y : o === "end" ? Y - _ : o === "nearest" ? al(T, T + _, _, Q, _e, T + Y, T + Y + V, V) : Y - _ / 2, xe = i === "start" ? R : i === "center" ? R - b / 2 : i === "end" ? R - b : al(D, D + b, b, H, he, D + R, D + R + C, C), re = Math.max(0, re + T), xe = Math.max(0, xe + D);
    else {
      re = o === "start" ? Y - X - Q : o === "end" ? Y - ee + _e + Ie : o === "nearest" ? al(X, ee, K, Q, _e + Ie, Y, Y + V, V) : Y - (X + K / 2) + Ie / 2, xe = i === "start" ? R - B - H : i === "center" ? R - (B + W / 2) + Se / 2 : i === "end" ? R - A + he + Se : al(B, A, W, H, he + Se, R, R + C, C);
      var it = S.scrollLeft, L = S.scrollTop;
      Y += L - (re = Math.max(0, Math.min(L + re / tt, S.scrollHeight - K / tt + Ie))), R += it - (xe = Math.max(0, Math.min(it + xe / ft, S.scrollWidth - W / ft + Se)));
    }
    v.push({ el: S, top: re, left: xe });
  }
  return v;
};
const pc = ["info", "success", "warning", "error"], qt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], vc = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), hc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], mc = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), gc = [mc];
function bc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, gc, 14, hc);
}
var po = /* @__PURE__ */ de(vc, [["render", bc]]);
const Kt = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), yc = F({
  name: "FeedbackIcon",
  components: {
    IconLoading: Kt,
    IconCheckCircleFill: Gr,
    IconExclamationCircleFill: Xr,
    IconCloseCircleFill: Zr
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = ne("feedback-icon");
    return {
      cls: m(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function _c(e, t, n, l, o, i) {
  const a = ue("icon-loading"), r = ue("icon-check-circle-fill"), s = ue("icon-exclamation-circle-fill"), u = ue("icon-close-circle-fill");
  return y(), x("span", {
    class: G(e.cls)
  }, [e.type === "validating" ? (y(), ce(a, {
    key: 0
  })) : e.type === "success" ? (y(), ce(r, {
    key: 1
  })) : e.type === "warning" ? (y(), ce(s, {
    key: 2
  })) : e.type === "error" ? (y(), ce(u, {
    key: 3
  })) : te("v-if", !0)], 2);
}
var Oa = /* @__PURE__ */ de(yc, [["render", _c]]);
const Ea = {
  key: "Enter",
  code: "Enter"
}, $c = {
  key: "Backspace",
  code: "Backspace"
};
var wc = Object.defineProperty, si = Object.getOwnPropertySymbols, kc = Object.prototype.hasOwnProperty, Cc = Object.prototype.propertyIsEnumerable, ui = (e, t, n) => t in e ? wc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sc = (e, t) => {
  for (var n in t || (t = {}))
    kc.call(t, n) && ui(e, n, t[n]);
  if (si)
    for (var n of si(t))
      Cc.call(t, n) && ui(e, n, t[n]);
  return e;
};
const Gn = (e, t) => {
  const n = Sc({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function Xn(e, t) {
  const n = {};
  return t.forEach((l) => {
    const o = l;
    l in e && (n[o] = e[o]);
  }), n;
}
const ra = Symbol("ArcoFormItemContext"), xa = Symbol("ArcoFormContext"), ht = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : Ge(ra, {}), i = m(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : o.size;
  }), a = m(() => (t == null ? void 0 : t.value) || o.disabled), r = m(() => (n == null ? void 0 : n.value) || o.error), s = Cl(o, "feedback"), u = Cl(o, "eventHandlers");
  return {
    formItemCtx: o,
    mergedSize: i,
    mergedDisabled: a,
    mergedError: r,
    feedback: s,
    eventHandlers: u
  };
}, yt = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = Ge(an, void 0);
  return {
    mergedSize: m(() => {
      var o, i;
      return (i = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? i : t;
    })
  };
};
function Qr(e) {
  const t = I();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: o,
      selectionEnd: i,
      value: a
    } = e.value;
    if (o == null || i == null)
      return;
    const r = a.slice(0, Math.max(0, o)), s = a.slice(Math.max(0, i));
    t.value = {
      selectionStart: o,
      selectionEnd: i,
      value: a,
      beforeTxt: r,
      afterTxt: s
    };
  }
  function l() {
    if (!e.value || !t.value)
      return;
    const {
      value: o
    } = e.value, {
      beforeTxt: i,
      afterTxt: a,
      selectionStart: r
    } = t.value;
    if (!i || !a || !r)
      return;
    let s = o.length;
    if (o.endsWith(a))
      s = o.length - a.length;
    else if (o.startsWith(i))
      s = i.length;
    else {
      const u = i[r - 1], c = o.indexOf(u, r - 1);
      c !== -1 && (s = c + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
var Vc = Object.defineProperty, ci = Object.getOwnPropertySymbols, Oc = Object.prototype.hasOwnProperty, Ec = Object.prototype.propertyIsEnumerable, di = (e, t, n) => t in e ? Vc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fi = (e, t) => {
  for (var n in t || (t = {}))
    Oc.call(t, n) && di(e, n, t[n]);
  if (ci)
    for (var n of ci(t))
      Ec.call(t, n) && di(e, n, t[n]);
  return e;
}, Dn = F({
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
      disabled: i,
      error: a,
      modelValue: r
    } = we(e), s = ne("input"), u = I(), {
      mergedSize: c,
      mergedDisabled: f,
      mergedError: g,
      feedback: h,
      eventHandlers: b
    } = ht({
      size: o,
      disabled: i,
      error: a
    }), {
      mergedSize: _
    } = yt(c), [D, T] = Qr(u), k = I(e.defaultValue), V = m(() => {
      var L;
      return (L = e.modelValue) != null ? L : k.value;
    });
    be(r, (L) => {
      (Qe(L) || Sn(L)) && (k.value = "");
    });
    let C = V.value;
    const M = I(!1), $ = m(() => e.allowClear && !e.readonly && !f.value && Boolean(V.value)), O = I(!1), N = I(""), Y = (L) => {
      var j;
      return et(e.wordLength) ? e.wordLength(L) : (j = L.length) != null ? j : 0;
    }, R = m(() => Y(V.value)), v = m(() => g.value || Boolean(Oe(e.maxLength) && e.maxLength.errorOnly && R.value > S.value)), E = m(() => Oe(e.maxLength) && Boolean(e.maxLength.errorOnly)), S = m(() => Oe(e.maxLength) ? e.maxLength.length : e.maxLength), z = m(() => {
      const L = Y("a");
      return Math.floor(S.value / L);
    }), K = (L) => {
      var j, Z;
      S.value && !E.value && Y(L) > S.value && (L = (Z = (j = e.wordSlice) == null ? void 0 : j.call(e, L, S.value)) != null ? Z : L.slice(0, z.value)), k.value = L, t("update:modelValue", L);
    }, W = (L) => {
      u.value && L.target !== u.value && (L.preventDefault(), u.value.focus());
    }, X = (L, j) => {
      var Z, oe;
      L !== C && (C = L, t("change", L, j), (oe = (Z = b.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, j));
    }, A = (L) => {
      var j, Z;
      M.value = !0, C = V.value, t("focus", L), (Z = (j = b.value) == null ? void 0 : j.onFocus) == null || Z.call(j, L);
    }, ee = (L) => {
      var j, Z;
      M.value = !1, X(V.value, L), t("blur", L), (Z = (j = b.value) == null ? void 0 : j.onBlur) == null || Z.call(j, L);
    }, B = (L) => {
      var j, Z, oe;
      const {
        value: Me,
        selectionStart: De,
        selectionEnd: Ot
      } = L.target;
      if (L.type === "compositionend") {
        if (O.value = !1, N.value = "", S.value && !E.value && R.value >= S.value && Y(Me) > S.value && De === Ot) {
          w();
          return;
        }
        K(Me), t("input", Me, L), (Z = (j = b.value) == null ? void 0 : j.onInput) == null || Z.call(j, L), w();
      } else
        O.value = !0, N.value = V.value + ((oe = L.data) != null ? oe : "");
    }, w = () => {
      D(), Le(() => {
        u.value && V.value !== u.value.value && (u.value.value = V.value, T());
      });
    }, H = (L) => {
      var j, Z;
      const {
        value: oe
      } = L.target;
      if (!O.value) {
        if (S.value && !E.value && R.value >= S.value && Y(oe) > S.value && L.inputType === "insertText") {
          w();
          return;
        }
        K(oe), t("input", oe, L), (Z = (j = b.value) == null ? void 0 : j.onInput) == null || Z.call(j, L), w();
      }
    }, Q = (L) => {
      K(""), X("", L), t("clear", L);
    }, he = (L) => {
      const j = L.key || L.code;
      !O.value && j === Ea.key && (X(V.value, L), t("pressEnter", L));
    }, _e = m(() => [`${s}-outer`, `${s}-outer-size-${_.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), re = m(() => [`${s}-wrapper`, {
      [`${s}-error`]: v.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: M.value
    }]), xe = m(() => [s, `${s}-size-${_.value}`]), Se = m(() => Gn(l, qt)), Ie = m(() => Xn(l, qt)), ft = m(() => {
      const L = fi(fi({}, Ie.value), e.inputAttrs);
      return v.value && (L["aria-invalid"] = !0), L;
    }), tt = (L) => {
      var j;
      return d("span", Ve({
        class: re.value,
        onMousedown: W
      }, L ? void 0 : Se.value), [n.prefix && d("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), d("input", Ve({
        ref: u,
        class: xe.value,
        value: V.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: f.value,
        onInput: H,
        onKeydown: he,
        onFocus: A,
        onBlur: ee,
        onCompositionstart: B,
        onCompositionupdate: B,
        onCompositionend: B
      }, ft.value), null), $.value && d(dt, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: Q
      }, {
        default: () => [d(rn, null, null)]
      }), (n.suffix || Boolean(e.maxLength) && e.showWordLimit || Boolean(h.value)) && d("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [Boolean(e.maxLength) && e.showWordLimit && d("span", {
        class: `${s}-word-limit`
      }, [R.value, ye("/"), S.value]), (j = n.suffix) == null ? void 0 : j.call(n), Boolean(h.value) && d(Oa, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? d("span", Ve({
        class: _e.value
      }, Se.value), [n.prepend && d("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), tt(!0), n.append && d("span", {
        class: `${s}-append`
      }, [n.append()])]) : tt()
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
const xc = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Bc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ic = /* @__PURE__ */ p("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Pc = [Ic];
function jc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Pc, 14, Bc);
}
var vo = /* @__PURE__ */ de(xc, [["render", jc]]);
const sa = Object.assign(vo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + vo.name, vo);
  }
}), Jr = Symbol("ArcoButtonGroup"), Tc = F({
  name: "Button",
  components: {
    IconLoading: Kt
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
    } = we(e), o = ne("btn"), i = Ge(Jr, void 0), a = m(() => {
      var h;
      return (h = n.value) != null ? h : i == null ? void 0 : i.size;
    }), r = m(() => Boolean(l.value || (i == null ? void 0 : i.disabled))), {
      mergedSize: s,
      mergedDisabled: u
    } = ht({
      size: a,
      disabled: r
    }), {
      mergedSize: c
    } = yt(s), f = m(() => {
      var h, b, _, D, T, k;
      return [o, `${o}-${(b = (h = e.type) != null ? h : i == null ? void 0 : i.type) != null ? b : "secondary"}`, `${o}-shape-${(D = (_ = e.shape) != null ? _ : i == null ? void 0 : i.shape) != null ? D : "square"}`, `${o}-size-${c.value}`, `${o}-status-${(k = (T = e.status) != null ? T : i == null ? void 0 : i.status) != null ? k : "normal"}`, {
        [`${o}-long`]: e.long,
        [`${o}-loading`]: e.loading,
        [`${o}-disabled`]: u.value,
        [`${o}-link`]: kt(e.href)
      }];
    });
    return {
      prefixCls: o,
      cls: f,
      mergedDisabled: u,
      handleClick: (h) => {
        if (e.disabled || e.loading) {
          h.preventDefault();
          return;
        }
        t("click", h);
      }
    };
  }
}), Mc = ["href"], Dc = ["type", "disabled"];
function zc(e, t, n, l, o, i) {
  const a = ue("icon-loading");
  return e.href ? (y(), x("a", {
    key: 0,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [e.loading || e.$slots.icon ? (y(), x("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (y(), ce(a, {
    key: 0,
    spin: "true"
  })) : ie(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), ie(e.$slots, "default")], 10, Mc)) : (y(), x("button", {
    key: 1,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
  }, [e.loading || e.$slots.icon ? (y(), x("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (y(), ce(a, {
    key: 0,
    spin: !0
  })) : ie(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), ie(e.$slots, "default")], 10, Dc));
}
var ho = /* @__PURE__ */ de(Tc, [["render", zc]]);
const Ac = F({
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
      shape: i
    } = we(e), a = ne("btn-group");
    return Wt(Jr, je({
      type: t,
      size: n,
      shape: i,
      status: l,
      disabled: o
    })), {
      prefixCls: a
    };
  }
});
function Lc(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(e.prefixCls)
  }, [ie(e.$slots, "default")], 2);
}
var mo = /* @__PURE__ */ de(Ac, [["render", Lc]]);
const wn = Object.assign(ho, {
  Group: mo,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + ho.name, ho), e.component(n + mo.name, mo);
  }
});
var go = F({
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
    } = we(e), o = ne("input-search"), {
      mergedSize: i
    } = yt(l), a = I(), r = (f) => {
      a.value.inputRef && t("search", a.value.inputRef.value, f);
    }, s = () => {
      var f;
      return d(Te, null, [e.loading ? d(Kt, null, null) : d(dt, {
        onClick: r
      }, {
        default: () => [d(sa, null, null)]
      }), (f = n.suffix) == null ? void 0 : f.call(n)]);
    }, u = () => {
      var f;
      let g = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? g = {
        default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : g = {
        icon: () => d(sa, null, null)
      }, d(wn, Ve({
        type: "primary",
        class: `${o}-btn`,
        disabled: e.disabled,
        size: i.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: r
      }), g);
    };
    return {
      inputRef: a,
      render: () => d(Dn, {
        ref: a,
        class: o,
        size: i.value,
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
const Fc = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Nc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Rc = /* @__PURE__ */ p("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), qc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Hc = [Rc, qc];
function Wc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Hc, 14, Nc);
}
var bo = /* @__PURE__ */ de(Fc, [["render", Wc]]);
const Uc = Object.assign(bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bo.name, bo);
  }
}), Kc = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Yc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gc = /* @__PURE__ */ p("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Xc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Zc = [Gc, Xc];
function Qc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Zc, 14, Yc);
}
var yo = /* @__PURE__ */ de(Kc, [["render", Qc]]);
const Jc = Object.assign(yo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + yo.name, yo);
  }
});
function Hn(e) {
  const t = I(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function ed(e, t) {
  const {
    value: n
  } = we(t), [l, o] = Hn(Qe(n.value) ? e : n.value);
  return be(n, (a) => {
    Qe(a) && o(void 0);
  }), [m(() => Qe(n.value) ? l.value : n.value), o, l];
}
const td = F({
  name: "InputPassword",
  components: {
    IconEye: Uc,
    IconEyeInvisible: Jc,
    AIconHover: dt,
    AInput: Dn
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
    } = we(e), o = I(), i = () => {
      s(!a.value);
    }, [a, r] = ed(l.value, je({
      value: n
    })), s = (u) => {
      u !== a.value && (t("visibility-change", u), t("update:visibility", u), r(u));
    };
    return {
      inputRef: o,
      mergedVisible: a,
      handleInvisible: i
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
function nd(e, t, n, l, o, i) {
  const a = ue("icon-eye"), r = ue("icon-eye-invisible"), s = ue("a-icon-hover"), u = ue("a-input");
  return y(), ce(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Pr({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: le(() => [ie(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: le(() => [ie(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: le(() => [e.invisibleButton ? (y(), ce(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = ln(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = ln(() => {
      }, ["prevent"]))
    }, {
      default: le(() => [e.mergedVisible ? (y(), ce(r, {
        key: 1
      })) : (y(), ce(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : te("v-if", !0), ie(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: le(() => [ie(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var _o = /* @__PURE__ */ de(td, [["render", nd]]);
const ld = F({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ne("input-group")
    };
  }
});
function od(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(e.prefixCls)
  }, [ie(e.$slots, "default")], 2);
}
var zn = /* @__PURE__ */ de(ld, [["render", od]]);
const Yt = Object.assign(Dn, {
  Search: go,
  Password: _o,
  Group: zn,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Dn.name, Dn), e.component(n + zn.name, zn), e.component(n + go.name, go), e.component(n + _o.name, _o);
  }
});
var ad = Object.defineProperty, pi = Object.getOwnPropertySymbols, id = Object.prototype.hasOwnProperty, rd = Object.prototype.propertyIsEnumerable, vi = (e, t, n) => t in e ? ad(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    id.call(t, n) && vi(e, n, t[n]);
  if (pi)
    for (var n of pi(t))
      rd.call(t, n) && vi(e, n, t[n]);
  return e;
};
const sd = () => {
  const {
    height: e,
    width: t
  } = Mu();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, hi = (e, t) => {
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
}, ud = (e) => {
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
}, il = (e, t) => {
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
}, cd = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: i,
  translate: a
}) => {
  const r = ud(e), s = sd(), u = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + o.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + o.width)
  };
  let c = e;
  if (r === "top" && u.top < 0)
    if (l.top > o.height)
      t.top = -n.top;
    else {
      const f = Pn("bottom", l, o, {
        offset: i,
        translate: a
      });
      s.height - (n.top + f.top + o.height) > 0 && (c = il(e, "bottom"), t.top = f.top);
    }
  if (r === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const f = Pn("top", l, o, {
        offset: i,
        translate: a
      });
      n.top + f.top > 0 && (c = il(e, "top"), t.top = f.top);
    }
  if (r === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const f = Pn("right", l, o, {
        offset: i,
        translate: a
      });
      s.width - (n.left + f.left + o.width) > 0 && (c = il(e, "right"), t.left = f.left);
    }
  if (r === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const f = Pn("left", l, o, {
        offset: i,
        translate: a
      });
      n.left + f.left > 0 && (c = il(e, "left"), t.left = f.left);
    }
  return (r === "top" || r === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - o.width))), (r === "left" || r === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - o.height))), {
    popupPosition: t,
    position: c
  };
}, Pn = (e, t, n, {
  offset: l = 0,
  translate: o = [0, 0]
} = {}) => {
  var i;
  const a = (i = Ae(o) ? o : o[e]) != null ? i : [0, 0];
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
}, dd = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, fd = (e, t, n, l, {
  offset: o = 0,
  translate: i = [0, 0],
  customStyle: a = {},
  autoFitPosition: r = !1
} = {}) => {
  let s = e, u = Pn(e, n, l, {
    offset: o,
    translate: i
  });
  if (r) {
    const f = cd(e, u, {
      containerRect: t,
      popupRect: l,
      triggerRect: n,
      offset: o,
      translate: i
    });
    u = f.popupPosition, s = f.position;
  }
  return {
    style: In({
      left: `${u.left}px`,
      top: `${u.top}px`
    }, a),
    position: s
  };
}, pd = (e, t, n, {
  customStyle: l = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let i = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return i > n.width - 8 && (t.width > n.width ? i = n.width / 2 : i = n.width - 8), ["top", "tl", "tr"].includes(e) ? In({
      left: `${i}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, l) : In({
      left: `${i}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, l);
  }
  let o = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return o > n.height - 8 && (t.height > n.height ? o = n.height / 2 : o = n.height - 8), ["left", "lt", "lb"].includes(e) ? In({
    top: `${o}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, l) : In({
    top: `${o}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, l);
}, vd = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, mi = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    vd(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, es = () => {
  const e = {}, t = I(), n = () => {
    const l = Wr(e.value);
    l !== t.value && (t.value = l);
  };
  return Ee(() => n()), jt(() => n()), {
    children: e,
    firstElement: t
  };
};
var xl = F({
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
    } = es();
    let i;
    const a = (s) => {
      s && (i = new wa((u) => {
        const c = u[0];
        t("resize", c);
      }), i.observe(s));
    }, r = () => {
      i && (i.disconnect(), i = null);
    };
    return be(o, (s) => {
      i && r(), s && a(s);
    }), Ut(() => {
      i && r();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function hd(e, t) {
  const n = I(e[t]);
  return jt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const gi = Symbol("ArcoTrigger"), md = 1e3, gd = 5e3, bd = 1;
class yd {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || gd : Array.from(this.popupStack.popup).pop() || md) + bd, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const $o = new yd();
function ts(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = I(0), o = () => {
    l.value = $o.add(e);
  }, i = () => {
    $o.delete(l.value, e);
  }, a = () => e === "dialog" ? $o.isLastDialog(l.value) : !1;
  return be(() => t == null ? void 0 : t.value, (r) => {
    r ? o() : i();
  }, {
    immediate: !0
  }), n && (Ee(() => {
    o();
  }), Ut(() => {
    i();
  })), {
    zIndex: Xs(l),
    open: o,
    close: i,
    isLastDialog: a
  };
}
const _d = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new wa((i) => {
        const a = i[0];
        et(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var $d = F({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = I(!1);
    return Ee(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const wd = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = I(e.value), i = I(), a = () => {
    const r = oi(e.value), s = r ? e.value : n, u = r ?? (l ? document.documentElement : oi(n));
    s !== o.value && (o.value = s), u !== i.value && (i.value = u);
  };
  return Ee(() => a()), be(t, (r) => {
    o.value !== e.value && r && a();
  }), {
    teleportContainer: o,
    containerRef: i
  };
};
var kd = Object.defineProperty, Cd = Object.defineProperties, Sd = Object.getOwnPropertyDescriptors, bi = Object.getOwnPropertySymbols, Vd = Object.prototype.hasOwnProperty, Od = Object.prototype.propertyIsEnumerable, yi = (e, t, n) => t in e ? kd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ed = (e, t) => {
  for (var n in t || (t = {}))
    Vd.call(t, n) && yi(e, n, t[n]);
  if (bi)
    for (var n of bi(t))
      Od.call(t, n) && yi(e, n, t[n]);
  return e;
}, xd = (e, t) => Cd(e, Sd(t));
const Bd = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var wo = F({
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
    } = we(e), i = ne("trigger"), a = m(() => Gn(l, Bd)), r = Ge(an, void 0), s = m(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = Ge(gi, void 0), {
      children: f,
      firstElement: g
    } = es(), h = I(), b = I(e.defaultPopupVisible), _ = I(e.position), D = I({}), T = I({}), k = I({}), V = I(), C = I({
      top: 0,
      left: 0
    });
    let M = null, $ = null;
    const O = m(() => {
      var P;
      return (P = e.popupVisible) != null ? P : b.value;
    }), {
      teleportContainer: N,
      containerRef: Y
    } = wd({
      popupContainer: o,
      visible: O,
      documentContainer: !0
    }), {
      zIndex: R
    } = ts("popup", {
      visible: O
    });
    let v = 0, E = !1, S = !1;
    const z = () => {
      v && (window.clearTimeout(v), v = 0);
    }, K = (P) => {
      if (e.alignPoint) {
        const {
          pageX: U,
          pageY: ae
        } = P;
        C.value = {
          top: ae,
          left: U
        };
      }
    }, W = () => {
      if (!g.value || !h.value || !Y.value)
        return;
      const P = Y.value.getBoundingClientRect(), U = e.alignPoint ? {
        top: C.value.top,
        bottom: C.value.top,
        left: C.value.left,
        right: C.value.left,
        scrollTop: C.value.top,
        scrollBottom: C.value.top,
        scrollLeft: C.value.left,
        scrollRight: C.value.left,
        width: 0,
        height: 0
      } : hi(g.value, P), ae = () => hi(h.value, P), pt = ae(), {
        style: nt,
        position: cn
      } = fd(e.position, P, U, pt, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (T.value = {
        transformOrigin: dd(cn)
      }), e.autoFitPopupMinWidth ? nt.minWidth = `${U.width}px` : e.autoFitPopupWidth && (nt.width = `${U.width}px`), _.value !== cn && (_.value = cn), D.value = nt, e.showArrow && Le(() => {
        k.value = pd(cn, U, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, X = (P, U) => {
      if (P === O.value && v === 0)
        return;
      const ae = () => {
        b.value = P, t("update:popupVisible", P), t("popupVisibleChange", P), P && Le(() => {
          W();
        });
      };
      P || (M = null, $ = null), U ? (z(), P !== O.value && (v = window.setTimeout(ae, U))) : ae();
    }, A = (P) => {
      var U;
      (U = l.onClick) == null || U.call(l, P), !(e.disabled || O.value && !e.clickToClose) && (s.value.includes("click") ? (K(P), X(!O.value)) : s.value.includes("contextMenu") && O.value && X(!1));
    }, ee = (P) => {
      var U;
      (U = l.onMouseenter) == null || U.call(l, P), !(e.disabled || !s.value.includes("hover")) && (K(P), X(!0, e.mouseEnterDelay));
    }, B = (P) => {
      c == null || c.onMouseenter(P), ee(P);
    }, w = (P) => {
      var U;
      (U = l.onMouseleave) == null || U.call(l, P), !(e.disabled || !s.value.includes("hover")) && X(!1, e.mouseLeaveDelay);
    }, H = (P) => {
      c == null || c.onMouseleave(P), w(P);
    }, Q = (P) => {
      var U;
      (U = l.onFocusin) == null || U.call(l, P), !(e.disabled || !s.value.includes("focus")) && X(!0, e.focusDelay);
    }, he = (P) => {
      var U;
      (U = l.onFocusout) == null || U.call(l, P), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && X(!1);
    }, _e = (P) => {
      var U;
      (U = l.onContextmenu) == null || U.call(l, P), !(e.disabled || !s.value.includes("contextMenu") || O.value && !e.clickToClose) && (K(P), X(!O.value), P.preventDefault());
    };
    Wt(gi, je({
      onMouseenter: B,
      onMouseleave: H,
      addChildRef: (P) => {
        u.add(P), c == null || c.addChildRef(P);
      },
      removeChildRef: (P) => {
        u.delete(P), c == null || c.removeChildRef(P);
      }
    }));
    const Se = () => {
      $n(document.documentElement, "mousedown", tt), E = !1;
    }, Ie = hd(n, "content"), ft = m(() => {
      var P;
      return e.hideEmpty && ju((P = Ie.value) == null ? void 0 : P.call(Ie));
    }), tt = (P) => {
      var U, ae, pt;
      if (!((U = g.value) != null && U.contains(P.target) || (ae = h.value) != null && ae.contains(P.target))) {
        for (const nt of u)
          if ((pt = nt.value) != null && pt.contains(P.target))
            return;
        Se(), X(!1);
      }
    }, it = (P, U) => {
      const [ae, pt] = P, {
        scrollTop: nt,
        scrollLeft: cn
      } = U;
      return Math.abs(nt - ae) >= e.scrollToCloseDistance || Math.abs(cn - pt) >= e.scrollToCloseDistance;
    }, L = li((P) => {
      if (O.value)
        if (e.scrollToClose || r != null && r.scrollToClose) {
          const U = P.target;
          M || (M = [U.scrollTop, U.scrollLeft]), it(M, U) ? X(!1) : W();
        } else
          W();
    }), j = () => {
      $n(window, "scroll", Z), S = !1;
    }, Z = li((P) => {
      const U = P.target.documentElement;
      $ || ($ = [U.scrollTop, U.scrollLeft]), it($, U) && (X(!1), j());
    }), oe = () => {
      O.value && W();
    }, Me = () => {
      oe(), t("resize");
    }, De = (P) => {
      e.preventFocus && P.preventDefault();
    };
    c == null || c.addChildRef(h);
    const Ot = m(() => O.value ? e.openedClass : void 0);
    let Xe;
    be(O, (P) => {
      if (e.clickOutsideToClose && (!P && E ? Se() : P && !E && (Et(document.documentElement, "mousedown", tt), E = !0)), (e.scrollToClose || r != null && r.scrollToClose) && (Et(window, "scroll", Z), S = !0), e.updateAtScroll || r != null && r.updateAtScroll) {
        if (P) {
          Xe = mi(g.value);
          for (const U of Xe)
            U.addEventListener("scroll", L);
        } else if (Xe) {
          for (const U of Xe)
            U.removeEventListener("scroll", L);
          Xe = void 0;
        }
      }
      P && (xn.value = !0);
    }), be(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      O.value && W();
    });
    const {
      createResizeObserver: lo,
      destroyResizeObserver: oo
    } = _d({
      elementRef: Y,
      onResize: oe
    });
    Ee(() => {
      if (lo(), O.value && (W(), e.clickOutsideToClose && !E && (Et(document.documentElement, "mousedown", tt), E = !0), e.updateAtScroll || r != null && r.updateAtScroll)) {
        Xe = mi(g.value);
        for (const P of Xe)
          P.addEventListener("scroll", L);
      }
    }), jt(() => {
      O.value && W();
    }), Zs(() => {
      X(!1);
    }), Ut(() => {
      if (c == null || c.removeChildRef(h), oo(), E && Se(), S && j(), Xe) {
        for (const P of Xe)
          P.removeEventListener("scroll", L);
        Xe = void 0;
      }
    });
    const xn = I(O.value), Dt = I(!1), ll = () => {
      Dt.value = !0;
    }, ao = () => {
      Dt.value = !1, O.value && t("show");
    }, q = () => {
      Dt.value = !1, O.value || (xn.value = !1, t("hide"));
    };
    return () => {
      var P, U;
      return f.value = (U = (P = n.default) == null ? void 0 : P.call(n)) != null ? U : [], qr(f.value, {
        class: Ot.value,
        onClick: A,
        onMouseenter: ee,
        onMouseleave: w,
        onFocusin: Q,
        onFocusout: he,
        onContextmenu: _e
      }), d(Te, null, [e.autoFixPosition ? d(xl, {
        onResize: Me
      }, {
        default: () => [f.value]
      }) : f.value, d($d, null, {
        default: () => [d(Qs, {
          to: N.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || O.value || xn.value) && !ft.value && d(xl, {
            onResize: oe
          }, {
            default: () => [d("div", Ve({
              ref: h,
              class: [`${i}-popup`, `${i}-position-${_.value}`],
              style: xd(Ed({}, D.value), {
                zIndex: R.value,
                pointerEvents: Dt.value ? "none" : "auto"
              }),
              "trigger-placement": _.value,
              onMouseenter: B,
              onMouseleave: H,
              onMousedown: De
            }, a.value), [d(Sl, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: ll,
              onAfterEnter: ao,
              onBeforeLeave: ll,
              onAfterLeave: q
            }, {
              default: () => {
                var ae;
                return [ba(d("div", {
                  class: `${i}-popup-wrapper`,
                  style: T.value
                }, [d("div", {
                  class: [`${i}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ae = n.content) == null ? void 0 : ae.call(n)]), e.showArrow && d("div", {
                  ref: V,
                  class: [`${i}-arrow`, e.arrowClass],
                  style: k.value
                }, null)]), [[ya, O.value]])];
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
    Ke(e, t);
    const n = Ue(t);
    e.component(n + wo.name, wo);
  }
}), Id = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Pd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], jd = /* @__PURE__ */ p("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Td = [jd];
function Md(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Td, 14, Pd);
}
var ko = /* @__PURE__ */ de(Id, [["render", Md]]);
const Dd = Object.assign(ko, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ko.name, ko);
  }
});
var Co = F({
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
    const l = ne("empty"), {
      t: o
    } = $a(), i = Ge(an, void 0);
    return () => {
      var a, r, s, u;
      return !e.inConfigProvider && (i != null && i.slots.empty) && !(t.image || e.imgSrc || e.description) ? i.slots.empty({
        component: "empty"
      }) : d("div", Ve({
        class: l
      }, n), [d("div", {
        class: `${l}-image`
      }, [(r = (a = t.image) == null ? void 0 : a.call(t)) != null ? r : e.imgSrc ? d("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : d(Dd, null, null)]), d("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const zd = Object.assign(Co, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Co.name, Co);
  }
}), Ad = 5;
var Ld = F({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(e) {
    const t = ne("dot-loading");
    return () => {
      const n = e.size ? {
        width: `${e.size}px`,
        height: `${e.size}px`
      } : {};
      return d("div", {
        class: t,
        style: {
          width: e.size ? `${e.size * 7}px` : void 0,
          height: e.size ? `${e.size}px` : void 0
        }
      }, [Array(Ad).fill(1).map((l, o) => d("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), So = F({
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
    const n = ne("spin"), l = Ge(an, void 0), o = m(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), i = () => {
      if (t.icon) {
        const r = mn(t.icon());
        if (r)
          return ql(r, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? d(Ld, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : d(Kt, {
        spin: !0,
        size: e.size
      }, null);
    }, a = () => {
      var r, s, u;
      const c = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, f = Boolean((r = t.tip) != null ? r : e.tip);
      return d(Te, null, [!e.hideIcon && d("div", {
        class: `${n}-icon`,
        style: c
      }, [i()]), f && d("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => d("div", {
      class: o.value
    }, [t.default ? d(Te, null, [t.default(), e.loading && d("div", {
      class: `${n}-mask`
    }, [d("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Fd = Object.assign(So, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + So.name, So);
  }
}), Nd = F({
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
    const n = ne("scrollbar"), l = I(!1), o = I(), i = I(), a = m(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), r = I(0), s = I(!1), u = I(0), c = m(() => {
      var k, V;
      return {
        [a.value.size]: `${(V = (k = e.data) == null ? void 0 : k.thumbSize) != null ? V : 0}px`,
        [a.value.direction]: `${r.value}px`
      };
    }), f = (k) => {
      k.preventDefault(), i.value && (u.value = k[a.value.client] - i.value.getBoundingClientRect()[a.value.direction], s.value = !0, Et(window, "mousemove", b), Et(window, "mouseup", _), Et(window, "contextmenu", _));
    }, g = (k) => {
      var V, C, M, $;
      if (k.preventDefault(), i.value) {
        const O = h(k[a.value.client] > i.value.getBoundingClientRect()[a.value.direction] ? r.value + ((C = (V = e.data) == null ? void 0 : V.thumbSize) != null ? C : 0) : r.value - (($ = (M = e.data) == null ? void 0 : M.thumbSize) != null ? $ : 0));
        O !== r.value && (r.value = O, t("scroll", O));
      }
    }, h = (k) => k < 0 ? 0 : e.data && k > e.data.max ? e.data.max : k, b = (k) => {
      if (o.value && i.value) {
        const V = h(k[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        V !== r.value && (r.value = V, t("scroll", V));
      }
    }, _ = () => {
      s.value = !1, $n(window, "mousemove", b), $n(window, "mouseup", _);
    }, D = (k) => {
      s.value || (k = h(k), k !== r.value && (r.value = k));
    }, T = m(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: i,
      prefixCls: n,
      thumbCls: T,
      thumbStyle: c,
      handleThumbMouseDown: f,
      handleTrackClick: g,
      setOffset: D
    };
  }
});
function Rd(e, t, n, l, o, i) {
  return y(), ce(Sl, null, {
    default: le(() => [p("div", {
      ref: "trackRef",
      class: G([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = ln((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [p("div", {
      ref: "thumbRef",
      class: G(e.thumbCls),
      style: pe(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [p("div", {
      class: G(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var qd = /* @__PURE__ */ de(Nd, [["render", Rd]]);
const _i = 20, rl = 15, Hd = F({
  name: "Scrollbar",
  components: {
    ResizeObserver: xl,
    Thumb: qd
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
    const n = ne("scrollbar"), l = I(), o = I(), i = I(), a = I(), r = I(), s = I(!1), u = I(!1), c = m(() => s.value && !e.disableHorizontal), f = m(() => u.value && !e.disableVertical), g = I(!1), h = () => {
      var C, M, $, O, N, Y;
      if (l.value) {
        const {
          clientWidth: R,
          clientHeight: v,
          offsetWidth: E,
          offsetHeight: S,
          scrollWidth: z,
          scrollHeight: K,
          scrollTop: W,
          scrollLeft: X
        } = l.value;
        s.value = z > R, u.value = K > v, g.value = c.value && f.value;
        const A = e.type === "embed" && g.value ? E - rl : E, ee = e.type === "embed" && g.value ? S - rl : S, B = Math.round(A / Math.min(z / R, A / _i)), w = A - B, H = (z - R) / w, Q = Math.round(ee / Math.min(K / v, ee / _i)), he = ee - Q, _e = (K - v) / he;
        if (o.value = {
          ratio: H,
          thumbSize: B,
          max: w
        }, i.value = {
          ratio: _e,
          thumbSize: Q,
          max: he
        }, W > 0) {
          const re = Math.round(W / ((M = (C = i.value) == null ? void 0 : C.ratio) != null ? M : 1));
          ($ = r.value) == null || $.setOffset(re);
        }
        if (X > 0) {
          const re = Math.round(X / ((N = (O = i.value) == null ? void 0 : O.ratio) != null ? N : 1));
          (Y = a.value) == null || Y.setOffset(re);
        }
      }
    };
    Ee(() => {
      h();
    });
    const b = () => {
      h();
    }, _ = (C) => {
      var M, $, O, N, Y, R;
      if (l.value) {
        if (c.value && !e.disableHorizontal) {
          const v = Math.round(l.value.scrollLeft / (($ = (M = o.value) == null ? void 0 : M.ratio) != null ? $ : 1));
          (O = a.value) == null || O.setOffset(v);
        }
        if (f.value && !e.disableVertical) {
          const v = Math.round(l.value.scrollTop / ((Y = (N = i.value) == null ? void 0 : N.ratio) != null ? Y : 1));
          (R = r.value) == null || R.setOffset(v);
        }
      }
      t("scroll", C);
    }, D = (C) => {
      var M, $;
      l.value && l.value.scrollTo({
        left: C * (($ = (M = o.value) == null ? void 0 : M.ratio) != null ? $ : 1)
      });
    }, T = (C) => {
      var M, $;
      l.value && l.value.scrollTo({
        top: C * (($ = (M = i.value) == null ? void 0 : M.ratio) != null ? $ : 1)
      });
    }, k = m(() => {
      const C = {};
      return e.type === "track" && (c.value && (C.paddingBottom = `${rl}px`), f.value && (C.paddingRight = `${rl}px`)), [C, e.outerStyle];
    }), V = m(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: g.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: V,
      style: k,
      containerRef: l,
      horizontalThumbRef: a,
      verticalThumbRef: r,
      horizontalData: o,
      verticalData: i,
      isBoth: g,
      hasHorizontalScrollbar: c,
      hasVerticalScrollbar: f,
      handleResize: b,
      handleScroll: _,
      handleHorizontalScroll: D,
      handleVerticalScroll: T
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, l;
      Oe(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((l = this.$refs.containerRef) == null || l.scrollTo(e, t));
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
function Wd(e, t, n, l, o, i) {
  const a = ue("ResizeObserver"), r = ue("thumb");
  return y(), x("div", {
    class: G(e.cls),
    style: pe(e.style)
  }, [d(a, {
    onResize: e.handleResize
  }, {
    default: le(() => [p("div", Ve({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [d(a, {
      onResize: e.handleResize
    }, {
      default: le(() => [ie(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (y(), ce(r, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (y(), ce(r, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0)], 6);
}
var Vo = /* @__PURE__ */ de(Hd, [["render", Wd]]);
const Ud = Object.assign(Vo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Vo.name, Vo);
  }
}), Kd = (e) => {
  const t = I(), n = () => Dr(t.value) ? t.value.$refs[e] : t.value, l = I();
  return Ee(() => {
    l.value = n();
  }), be([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Yd = Object.defineProperty, $i = Object.getOwnPropertySymbols, Gd = Object.prototype.hasOwnProperty, Xd = Object.prototype.propertyIsEnumerable, wi = (e, t, n) => t in e ? Yd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zd = (e, t) => {
  for (var n in t || (t = {}))
    Gd.call(t, n) && wi(e, n, t[n]);
  if ($i)
    for (var n of $i(t))
      Xd.call(t, n) && wi(e, n, t[n]);
  return e;
};
const Qd = (e) => {
  const t = m(() => Boolean(e.value)), n = m(() => {
    if (e.value)
      return Zd({
        type: "embed"
      }, Wl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Jd = F({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Ud,
    Empty: zd,
    Spin: Fd
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
    var l, o, i;
    const {
      scrollbar: a
    } = we(e), r = ne("select-dropdown"), s = Ge(an, void 0), u = (i = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : i[0], {
      componentRef: c,
      elementRef: f
    } = Kd("containerRef"), {
      displayScrollbar: g,
      scrollbarProps: h
    } = Qd(a), b = (D) => {
      const {
        scrollTop: T,
        scrollHeight: k,
        offsetHeight: V
      } = D.target;
      k - (T + V) <= e.bottomOffset && t("reachBottom", D), t("scroll", D);
    }, _ = m(() => [r, {
      [`${r}-has-header`]: Boolean(n.header),
      [`${r}-has-footer`]: Boolean(n.footer)
    }]);
    return {
      prefixCls: r,
      SelectEmpty: u,
      cls: _,
      wrapperRef: f,
      wrapperComRef: c,
      handleScroll: b,
      displayScrollbar: g,
      scrollbarProps: h
    };
  }
});
function ef(e, t, n, l, o, i) {
  const a = ue("spin");
  return y(), x("div", {
    class: G(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (y(), x("div", {
    key: 0,
    class: G(`${e.prefixCls}-header`)
  }, [ie(e.$slots, "header")], 2)) : te("v-if", !0), e.loading ? (y(), ce(a, {
    key: 1,
    class: G(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (y(), x("div", {
    key: 2,
    class: G(`${e.prefixCls}-empty`)
  }, [ie(e.$slots, "empty", {}, () => [(y(), ce(tn(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : te("v-if", !0), e.virtualList && !e.loading && !e.empty ? ie(e.$slots, "virtual-list", {
    key: 3
  }) : te("v-if", !0), e.virtualList ? te("v-if", !0) : ba((y(), ce(tn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Ve({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: le(() => [p("ul", {
      class: G(`${e.prefixCls}-list`)
    }, [ie(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[ya, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (y(), x("div", {
    key: 5,
    class: G(`${e.prefixCls}-footer`)
  }, [ie(e.$slots, "footer")], 2)) : te("v-if", !0)], 2);
}
var tf = /* @__PURE__ */ de(Jd, [["render", ef]]), ki = F({
  name: "IconCheck",
  render() {
    return d("svg", {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200",
      fill: "currentColor"
    }, [d("path", {
      d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const ns = Symbol("ArcoCheckboxGroup");
var ml = F({
  name: "Checkbox",
  components: {
    IconCheck: ki,
    IconHover: dt
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
    } = we(e), i = ne("checkbox"), a = I(), r = e.uninjectGroupContext ? void 0 : Ge(ns, void 0), s = (r == null ? void 0 : r.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = ht({
      disabled: l
    }), f = I(e.defaultChecked), g = m(() => {
      var C;
      return s ? r == null ? void 0 : r.computedValue : (C = e.modelValue) != null ? C : f.value;
    }), h = m(() => {
      var C;
      return Ae(g.value) ? g.value.includes((C = e.value) != null ? C : !0) : g.value;
    }), b = m(() => (r == null ? void 0 : r.disabled) || (u == null ? void 0 : u.value) || !h.value && (r == null ? void 0 : r.isMaxed)), _ = (C) => {
      C.stopPropagation();
    }, D = (C) => {
      var M, $, O, N;
      const {
        checked: Y
      } = C.target;
      let R = Y;
      if (Ae(g.value)) {
        const v = new Set(g.value);
        Y ? v.add((M = e.value) != null ? M : !0) : v.delete(($ = e.value) != null ? $ : !0), R = Array.from(v);
      }
      f.value = Y, s && Ae(R) ? r == null || r.handleChange(R, C) : (t("update:modelValue", R), t("change", R, C), (N = (O = c.value) == null ? void 0 : O.onChange) == null || N.call(O, C)), Le(() => {
        a.value && a.value.checked !== h.value && (a.value.checked = h.value);
      });
    }, T = m(() => [i, {
      [`${i}-checked`]: h.value,
      [`${i}-indeterminate`]: e.indeterminate,
      [`${i}-disabled`]: b.value
    }]), k = (C) => {
      var M, $;
      ($ = (M = c.value) == null ? void 0 : M.onFocus) == null || $.call(M, C);
    }, V = (C) => {
      var M, $;
      ($ = (M = c.value) == null ? void 0 : M.onBlur) == null || $.call(M, C);
    };
    return be(o, (C) => {
      (Qe(C) || Sn(C)) && (f.value = !1);
    }), be(g, (C) => {
      var M;
      let $;
      Ae(C) ? $ = C.includes((M = e.value) != null ? M : !0) : $ = C, f.value !== $ && (f.value = $), a.value && a.value.checked !== $ && (a.value.checked = $);
    }), () => {
      var C, M, $, O;
      return d("label", {
        "aria-disabled": b.value,
        class: T.value
      }, [d("input", {
        ref: a,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${i}-target`,
        disabled: b.value,
        onClick: _,
        onChange: D,
        onFocus: k,
        onBlur: V
      }, null), (O = ($ = (M = n.checkbox) != null ? M : (C = r == null ? void 0 : r.slots) == null ? void 0 : C.checkbox) == null ? void 0 : $({
        checked: h.value,
        disabled: b.value
      })) != null ? O : d(dt, {
        class: `${i}-icon-hover`,
        disabled: b.value || h.value
      }, {
        default: () => [d("div", {
          class: `${i}-icon`
        }, [h.value && d(ki, {
          class: `${i}-icon-check`
        }, null)])]
      }), n.default && d("span", {
        class: `${i}-label`
      }, [n.default()])]);
    };
  }
}), Oo = F({
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
    } = we(e), o = ne("checkbox-group"), {
      mergedDisabled: i,
      eventHandlers: a
    } = ht({
      disabled: l
    }), r = I(e.defaultValue), s = m(() => Ae(e.modelValue) ? e.modelValue : r.value), u = m(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = m(() => {
      var b;
      return ((b = e.options) != null ? b : []).map((_) => kt(_) || ge(_) ? {
        label: _,
        value: _
      } : _);
    });
    Wt(ns, je({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: i,
      isMaxed: u,
      slots: n,
      handleChange: (b, _) => {
        var D, T;
        r.value = b, t("update:modelValue", b), t("change", b, _), (T = (D = a.value) == null ? void 0 : D.onChange) == null || T.call(D, _);
      }
    }));
    const g = m(() => [o, `${o}-direction-${e.direction}`]);
    be(() => e.modelValue, (b) => {
      Ae(b) ? r.value = [...b] : r.value = [];
    });
    const h = () => c.value.map((b) => {
      const _ = s.value.includes(b.value);
      return d(ml, {
        key: b.value,
        value: b.value,
        disabled: b.disabled || !_ && u.value,
        indeterminate: b.indeterminate,
        modelValue: _
      }, {
        default: () => [n.label ? n.label({
          data: b
        }) : et(b.label) ? b.label() : b.label]
      });
    });
    return () => {
      var b;
      return d("span", {
        class: g.value
      }, [c.value.length > 0 ? h() : (b = n.default) == null ? void 0 : b.call(n)]);
    };
  }
});
const nf = Object.assign(ml, {
  Group: Oo,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + ml.name, ml), e.component(n + Oo.name, Oo);
  }
}), ls = Symbol("ArcoSelectContext");
var lf = Object.defineProperty, of = Object.defineProperties, af = Object.getOwnPropertyDescriptors, Ci = Object.getOwnPropertySymbols, rf = Object.prototype.hasOwnProperty, sf = Object.prototype.propertyIsEnumerable, Si = (e, t, n) => t in e ? lf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ba = (e, t) => {
  for (var n in t || (t = {}))
    rf.call(t, n) && Si(e, n, t[n]);
  if (Ci)
    for (var n of Ci(t))
      sf.call(t, n) && Si(e, n, t[n]);
  return e;
}, os = (e, t) => of(e, af(t));
const uf = (e) => Oe(e) && "isGroup" in e, as = (e) => Oe(e) && "isGroup" in e, cf = (e, t = "value") => String(Oe(e) ? e[t] : e), Wn = (e, t = "value") => Oe(e) ? `__arco__option__object__${e[t]}` : e || ge(e) || kt(e) || Wl(e) ? `__arco__option__${typeof e}-${e}` : "", df = (e) => e.has("__arco__option__string-"), ff = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var i;
  if (Oe(e)) {
    const r = e[n.value];
    return {
      raw: e,
      index: o,
      key: Wn(r, t),
      origin: l,
      value: r,
      label: (i = e[n.label]) != null ? i : cf(r, t),
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
  return Ba({
    raw: a,
    index: o,
    key: Wn(e, t),
    origin: l
  }, a);
}, ua = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var i;
  const a = [];
  for (const r of e)
    if (uf(r)) {
      const s = ua((i = r.options) != null ? i : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(os(Ba({}, r), {
        key: `__arco__group__${r.label}`,
        options: s
      }));
    } else {
      const s = ff(r, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, Vi = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var i;
    const a = [];
    for (const r of o)
      if (as(r)) {
        const s = l((i = r.options) != null ? i : []);
        s.length > 0 && a.push(os(Ba({}, r), {
          options: s
        }));
      } else
        Yl(r, {
          inputValue: t,
          filterOption: n
        }) && a.push(r);
    return a;
  };
  return l(e);
}, Yl = (e, {
  inputValue: t,
  filterOption: n
}) => et(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, pf = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Ia(e[n], t[n]))
      return !1;
  return !0;
}, vf = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!Ia(e[l], t[l]))
      return !1;
  return !0;
}, Ia = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? pf(e, t) : n === "[object Array]" ? vf(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, hf = F({
  name: "Option",
  components: {
    Checkbox: nf
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
    } = we(e), o = ne("select-option"), i = Ge(ls, void 0), a = Kn(), r = I(), s = I(n.value);
    be(n, ($, O) => {
      Ia($, O) || (s.value = $);
    });
    const u = I(""), c = m(() => {
      var $, O;
      return (O = ($ = e.value) != null ? $ : e.label) != null ? O : u.value;
    }), f = m(() => {
      var $;
      return ($ = e.label) != null ? $ : u.value;
    }), g = m(() => Wn(c.value, i == null ? void 0 : i.valueKey)), h = m(() => {
      var $;
      return ($ = i == null ? void 0 : i.component) != null ? $ : "li";
    }), b = () => {
      var $;
      if (!e.label && r.value) {
        const O = ($ = r.value.textContent) != null ? $ : "";
        u.value !== O && (u.value = O);
      }
    };
    Ee(() => b()), jt(() => b());
    const _ = m(() => {
      var $;
      return ($ = i == null ? void 0 : i.valueKeys.includes(g.value)) != null ? $ : !1;
    }), D = m(() => (i == null ? void 0 : i.activeKey) === g.value);
    let T = I(!0);
    if (!e.internal) {
      const $ = je({
        raw: {
          value: c,
          label: f,
          disabled: t,
          tagProps: s
        },
        ref: r,
        index: l,
        key: g,
        origin: "slot",
        value: c,
        label: f,
        disabled: t,
        tagProps: s
      });
      T = m(() => Yl($, {
        inputValue: i == null ? void 0 : i.inputValue,
        filterOption: i == null ? void 0 : i.filterOption
      })), a && (i == null || i.addSlotOptionInfo(a.uid, $)), Ut(() => {
        a && (i == null || i.removeSlotOptionInfo(a.uid));
      });
    }
    const k = ($) => {
      e.disabled || i == null || i.onSelect(g.value, $);
    }, V = () => {
      e.disabled || i == null || i.setActiveKey(g.value);
    }, C = () => {
      e.disabled || i == null || i.setActiveKey();
    }, M = m(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: _.value,
      [`${o}-active`]: D.value,
      [`${o}-multiple`]: i == null ? void 0 : i.multiple
    }]);
    return {
      prefixCls: o,
      cls: M,
      selectCtx: i,
      itemRef: r,
      component: h,
      isSelected: _,
      isValid: T,
      handleClick: k,
      handleMouseEnter: V,
      handleMouseLeave: C
    };
  }
});
function mf(e, t, n, l, o, i) {
  const a = ue("checkbox");
  return ba((y(), ce(tn(e.component), {
    ref: "itemRef",
    class: G([e.cls, {
      [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix)
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: le(() => [e.$slots.icon ? (y(), x("span", {
      key: 0,
      class: G(`${e.prefixCls}-icon`)
    }, [ie(e.$slots, "icon")], 2)) : te("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (y(), ce(a, {
      key: 1,
      class: G(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: le(() => [ie(e.$slots, "default", {}, () => [ye(ve(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (y(), x("span", {
      key: 2,
      class: G(`${e.prefixCls}-content`)
    }, [ie(e.$slots, "default", {}, () => [ye(ve(e.label), 1)])], 2)), e.$slots.suffix ? (y(), x("span", {
      key: 3,
      class: G(`${e.prefixCls}-suffix`)
    }, [ie(e.$slots, "suffix")], 2)) : te("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[ya, e.isValid]]);
}
var gn = /* @__PURE__ */ de(hf, [["render", mf]]), gf = Object.defineProperty, bf = Object.defineProperties, yf = Object.getOwnPropertyDescriptors, Oi = Object.getOwnPropertySymbols, _f = Object.prototype.hasOwnProperty, $f = Object.prototype.propertyIsEnumerable, Ei = (e, t, n) => t in e ? gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Eo = (e, t) => {
  for (var n in t || (t = {}))
    _f.call(t, n) && Ei(e, n, t[n]);
  if (Oi)
    for (var n of Oi(t))
      $f.call(t, n) && Ei(e, n, t[n]);
  return e;
}, wf = (e, t) => bf(e, yf(t));
const kf = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, Cf = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: i,
  fieldNames: a
}) => {
  const r = m(() => Eo(Eo({}, kf), a == null ? void 0 : a.value)), s = je(/* @__PURE__ */ new Map()), u = m(() => Array.from(s.values()).sort((V, C) => ge(V.index) && ge(C.index) ? V.index - C.index : 0)), c = m(() => {
    var V, C;
    const M = /* @__PURE__ */ new Map();
    return {
      optionInfos: ua((V = e == null ? void 0 : e.value) != null ? V : [], {
        valueKey: (C = i == null ? void 0 : i.value) != null ? C : "value",
        fieldNames: r.value,
        origin: "options",
        optionInfoMap: M
      }),
      optionInfoMap: M
    };
  }), f = m(() => {
    var V, C;
    const M = /* @__PURE__ */ new Map();
    return {
      optionInfos: ua((V = t == null ? void 0 : t.value) != null ? V : [], {
        valueKey: (C = i == null ? void 0 : i.value) != null ? C : "value",
        fieldNames: r.value,
        origin: "extraOptions",
        optionInfoMap: M
      }),
      optionInfoMap: M
    };
  }), g = je(/* @__PURE__ */ new Map());
  be([u, e ?? I([]), t ?? I([]), i ?? I("value")], () => {
    g.clear(), u.value.forEach((V, C) => {
      g.set(V.key, wf(Eo({}, V), {
        index: C
      }));
    }), c.value.optionInfoMap.forEach((V) => {
      g.has(V.key) || (V.index = g.size, g.set(V.key, V));
    }), f.value.optionInfoMap.forEach((V) => {
      g.has(V.key) || (V.index = g.size, g.set(V.key, V));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const h = m(() => {
    var V;
    const C = Vi(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((V = o == null ? void 0 : o.value) == null || V) && C.push(...Vi(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), C;
  }), b = m(() => Array.from(g.values()).filter((V) => V.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Yl(V, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), _ = m(() => b.value.filter((V) => !V.disabled).map((V) => V.key));
  return {
    validOptions: h,
    optionInfoMap: g,
    validOptionInfos: b,
    enabledOptionKeys: _,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (V, C) => {
      s.set(V, C);
    },
    removeSlotOptionInfo: (V) => {
      s.delete(V);
    }
  };
}, vn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, xi = (e) => JSON.stringify({
  key: e.key,
  ctrl: Boolean(e.ctrl),
  shift: Boolean(e.shift),
  alt: Boolean(e.alt),
  meta: Boolean(e.meta)
}), is = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = kt(l) ? {
      key: l
    } : l;
    t[xi(o)] = n;
  }), (n) => {
    const l = xi({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, Sf = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: l,
  filterOption: o,
  showExtraOptions: i,
  component: a,
  valueKey: r,
  fieldNames: s,
  loading: u,
  popupVisible: c,
  valueKeys: f,
  dropdownRef: g,
  optionRefs: h,
  virtualListRef: b,
  onSelect: _,
  onPopupVisibleChange: D,
  enterToOpen: T = !0,
  defaultActiveFirstOption: k
}) => {
  const {
    validOptions: V,
    optionInfoMap: C,
    validOptionInfos: M,
    enabledOptionKeys: $,
    getNextSlotOptionIndex: O,
    addSlotOptionInfo: N,
    removeSlotOptionInfo: Y
  } = Cf({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: i,
    valueKey: r,
    fieldNames: s
  }), R = I();
  be($, (K) => {
    (!R.value || !K.includes(R.value)) && (R.value = K[0]);
  });
  const v = (K) => {
    R.value = K;
  }, E = (K) => {
    const W = $.value.length;
    if (W === 0)
      return;
    if (!R.value)
      return K === "down" ? $.value[0] : $.value[W - 1];
    const X = $.value.indexOf(R.value), A = (W + X + (K === "up" ? -1 : 1)) % W;
    return $.value[A];
  }, S = (K) => {
    var W, X;
    b != null && b.value && b.value.scrollTo({
      key: K
    });
    const A = C.get(K), ee = (W = g == null ? void 0 : g.value) == null ? void 0 : W.wrapperRef, B = (X = h == null ? void 0 : h.value[K]) != null ? X : A == null ? void 0 : A.ref;
    if (!ee || !B || ee.scrollHeight === ee.offsetHeight)
      return;
    const w = Au(B, ee), H = ee.scrollTop;
    w.top < 0 ? ee.scrollTo(0, H + w.top) : w.bottom < 0 && ee.scrollTo(0, H - w.bottom);
  };
  be(c, (K) => {
    var W;
    if (K) {
      const X = f.value[f.value.length - 1];
      let A = (W = k == null ? void 0 : k.value) == null || W ? $.value[0] : void 0;
      $.value.includes(X) && (A = X), A !== R.value && (R.value = A), Le(() => {
        R.value && S(R.value);
      });
    }
  });
  const z = is(/* @__PURE__ */ new Map([[vn.ENTER, (K) => {
    !(u != null && u.value) && !K.isComposing && (c.value ? R.value && (_(R.value, K), K.preventDefault()) : T && (D(!0), K.preventDefault()));
  }], [vn.ESC, (K) => {
    c.value && (D(!1), K.preventDefault());
  }], [vn.ARROW_DOWN, (K) => {
    if (c.value) {
      const W = E("down");
      W && (R.value = W, S(W)), K.preventDefault();
    }
  }], [vn.ARROW_UP, (K) => {
    if (c.value) {
      const W = E("up");
      W && (R.value = W, S(W)), K.preventDefault();
    }
  }]]));
  return Wt(ls, je({
    multiple: e,
    valueKey: r,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: f,
    activeKey: R,
    setActiveKey: v,
    onSelect: _,
    getNextSlotOptionIndex: O,
    addSlotOptionInfo: N,
    removeSlotOptionInfo: Y
  })), {
    validOptions: V,
    optionInfoMap: C,
    validOptionInfos: M,
    enabledOptionKeys: $,
    activeKey: R,
    setActiveKey: v,
    addSlotOptionInfo: N,
    removeSlotOptionInfo: Y,
    getNextActiveKey: E,
    scrollIntoView: S,
    handleKeyDown: z
  };
}, Vf = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const i = I(0), a = /* @__PURE__ */ new Map(), r = m(() => e.value.length), s = I(0), u = m(() => {
    const O = s.value + o.value * 3;
    return O > r.value ? r.value : O;
  }), c = m(() => {
    const O = r.value - o.value * 3;
    return O < 0 ? 0 : O;
  }), f = (O) => {
    O < 0 ? s.value = 0 : O > c.value ? s.value = c.value : s.value = O;
  }, g = I(n.value), h = m(() => l.value !== 30 ? l.value : i.value || l.value), b = (O, N) => {
    a.set(O, N);
  }, _ = (O) => {
    var N;
    if (g.value)
      return h.value;
    const Y = e.value[O];
    return (N = a.get(Y)) != null ? N : h.value;
  }, D = (O) => a.has(O);
  Ee(() => {
    const O = Array.from(a.values()).reduce((N, Y) => N + Y, 0);
    O > 0 && (i.value = O / a.size);
  });
  const T = (O) => g.value ? h.value * O : k(0, O), k = (O, N) => {
    let Y = 0;
    for (let R = O; R < N; R++)
      Y += _(R);
    return Y;
  }, V = m(() => g.value ? h.value * s.value : k(0, s.value)), C = (O) => {
    const N = O >= V.value;
    let Y = Math.abs(O - V.value);
    const R = N ? s.value : s.value - 1;
    let v = 0;
    for (; Y > 0; )
      Y -= _(R + v), N ? v++ : v--;
    return v;
  }, M = (O) => {
    const N = C(O), Y = s.value + N - o.value;
    return Y < 0 ? 0 : Y > c.value ? c.value : Y;
  }, $ = m(() => g.value ? h.value * (r.value - u.value) : k(u.value, r.value));
  return {
    frontPadding: V,
    behindPadding: $,
    start: s,
    end: u,
    getStartByScroll: M,
    setItemSize: b,
    hasItemSize: D,
    setStart: f,
    getScrollOffset: T
  };
};
var Of = F({
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
    const l = (n = Kn()) == null ? void 0 : n.vnode.key, o = I(), i = () => {
      var a, r, s, u;
      const c = (r = (a = o.value) == null ? void 0 : a.$el) != null ? r : o.value, f = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      f && e.setItemSize(l, f);
    };
    return Ee(() => i()), Ut(() => i()), () => {
      var a;
      const r = mn((a = t.default) == null ? void 0 : a.call(t));
      return r ? ql(r, {
        ref: o
      }, !0) : null;
    };
  }
}), Ef = Object.defineProperty, Bi = Object.getOwnPropertySymbols, xf = Object.prototype.hasOwnProperty, Bf = Object.prototype.propertyIsEnumerable, Ii = (e, t, n) => t in e ? Ef(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, If = (e, t) => {
  for (var n in t || (t = {}))
    xf.call(t, n) && Ii(e, n, t[n]);
  if (Bi)
    for (var n of Bi(t))
      Bf.call(t, n) && Ii(e, n, t[n]);
  return e;
};
const Pf = F({
  name: "VirtualList",
  components: {
    VirtualListItem: Of
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
      estimatedSize: i,
      buffer: a,
      height: r
    } = we(e), s = ne("virtual-list"), u = m(() => Oe(e.component) ? If({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = I(), f = I(), g = m(() => ({
      height: ge(r.value) ? `${r.value}px` : r.value,
      overflow: "auto"
    })), h = m(() => n.value.map((R, v) => {
      var E;
      return (E = R[l.value]) != null ? E : v;
    })), {
      frontPadding: b,
      behindPadding: _,
      start: D,
      end: T,
      getStartByScroll: k,
      setItemSize: V,
      hasItemSize: C,
      setStart: M,
      getScrollOffset: $
    } = Vf({
      dataKeys: h,
      contentRef: f,
      fixedSize: o,
      estimatedSize: i,
      buffer: a
    }), O = m(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(D.value, T.value)), N = (R) => {
      const {
        scrollTop: v,
        scrollHeight: E,
        offsetHeight: S
      } = R.target, z = k(v);
      z !== D.value && (M(z), Le(() => {
        Y(v);
      })), t("scroll", R), Math.floor(E - (v + S)) <= 0 && t("reachBottom", R);
    }, Y = (R) => {
      var v, E;
      if (c.value)
        if (ge(R))
          c.value.scrollTop = R;
        else {
          const S = (E = R.index) != null ? E : h.value.indexOf((v = R.key) != null ? v : "");
          M(S - a.value), c.value.scrollTop = $(S), Le(() => {
            if (c.value) {
              const z = $(S);
              z !== c.value.scrollTop && (c.value.scrollTop = z);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: c,
      contentRef: f,
      frontPadding: b,
      currentList: O,
      behindPadding: _,
      onScroll: N,
      setItemSize: V,
      hasItemSize: C,
      start: D,
      scrollTo: Y,
      style: g,
      mergedComponent: u
    };
  }
});
function jf(e, t, n, l, o, i) {
  const a = ue("VirtualListItem");
  return y(), ce(tn(e.mergedComponent.container), {
    ref: "containerRef",
    class: G(e.prefixCls),
    style: pe(e.style),
    onScroll: e.onScroll
  }, {
    default: le(() => [(y(), ce(tn(e.mergedComponent.list), Ve(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: le(() => [(y(), ce(tn(e.mergedComponent.content), Ve({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: le(() => [(y(!0), x(Te, null, bt(e.currentList, (r, s) => {
          var u;
          return y(), ce(a, {
            key: (u = r[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: le(() => [ie(e.$slots, "item", {
              item: r,
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
var Tf = /* @__PURE__ */ de(Pf, [["render", jf]]);
const Mf = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Df = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zf = /* @__PURE__ */ p("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Af = [zf];
function Lf(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Af, 14, Df);
}
var xo = /* @__PURE__ */ de(Mf, [["render", Lf]]);
const Pa = Object.assign(xo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xo.name, xo);
  }
}), Ff = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = I((l = t == null ? void 0 : t.value) != null ? l : !1), i = m(() => {
    var r;
    return (r = e == null ? void 0 : e.value) != null ? r : o.value;
  }), a = (r) => {
    r !== i.value && (o.value = r, n("update:popupVisible", r), n("popupVisibleChange", r));
  };
  return be(i, (r) => {
    o.value !== r && (o.value = r);
  }), {
    computedPopupVisible: i,
    handlePopupVisibleChange: a
  };
}, Nf = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Rf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], qf = /* @__PURE__ */ p("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Hf = [qf];
function Wf(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Hf, 14, Rf);
}
var Bo = /* @__PURE__ */ de(Nf, [["render", Wf]]);
const Uf = Object.assign(Bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Bo.name, Bo);
  }
}), Kf = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: o = "update:modelValue",
  eventHandlers: i
}) => {
  var a;
  const r = I(), s = I((a = e == null ? void 0 : e.value) != null ? a : ""), u = I(!1), c = I(!1), f = I("");
  let g;
  const h = m(() => {
    var $;
    return ($ = t == null ? void 0 : t.value) != null ? $ : s.value;
  }), b = ($, O) => {
    s.value = $, n(o, $), n(l, $, O);
  }, _ = ($) => {
    const {
      value: O
    } = $.target;
    c.value || (b(O, $), Le(() => {
      r.value && h.value !== r.value.value && (r.value.value = h.value);
    }));
  }, D = ($) => {
    l === "input" && h.value !== g && (g = h.value, n("change", h.value, $));
  }, T = ($) => {
    var O;
    const {
      value: N
    } = $.target;
    $.type === "compositionend" ? (c.value = !1, f.value = "", b(N, $), Le(() => {
      r.value && h.value !== r.value.value && (r.value.value = h.value);
    })) : (c.value = !0, f.value = h.value + ((O = $.data) != null ? O : ""));
  }, k = ($) => {
    var O, N;
    u.value = !0, g = h.value, n("focus", $), (N = (O = i == null ? void 0 : i.value) == null ? void 0 : O.onFocus) == null || N.call(O, $);
  }, V = ($) => {
    var O, N;
    u.value = !1, n("blur", $), (N = (O = i == null ? void 0 : i.value) == null ? void 0 : O.onBlur) == null || N.call(O, $), D($);
  }, C = ($) => {
    const O = $.key || $.code;
    !c.value && O === Ea.key && (n("pressEnter", $), D($));
  }, M = ($) => {
    r.value && $.target !== r.value && ($.preventDefault(), r.value.focus());
  };
  return be(h, ($) => {
    r.value && $ !== r.value.value && (r.value.value = $);
  }), {
    inputRef: r,
    _value: s,
    _focused: u,
    isComposition: c,
    compositionValue: f,
    computedValue: h,
    handleInput: _,
    handleComposition: T,
    handleFocus: k,
    handleBlur: V,
    handleKeyDown: C,
    handleMousedown: M
  };
};
var Yf = F({
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
      size: i,
      disabled: a,
      error: r,
      inputValue: s,
      uninjectFormItemContext: u
    } = we(e), c = (o = e.baseCls) != null ? o : ne("input-label"), {
      mergedSize: f,
      mergedDisabled: g,
      mergedError: h,
      eventHandlers: b
    } = ht({
      size: i,
      disabled: a,
      error: r,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: _
    } = yt(f), {
      inputRef: D,
      _focused: T,
      computedValue: k,
      handleInput: V,
      handleComposition: C,
      handleFocus: M,
      handleBlur: $,
      handleMousedown: O
    } = Kf({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: b
    }), N = m(() => {
      var X;
      return (X = e.focused) != null ? X : T.value;
    }), Y = m(() => e.enabledInput && T.value || !e.modelValue), R = () => {
      var X, A;
      return e.modelValue ? (A = (X = e.formatLabel) == null ? void 0 : X.call(e, e.modelValue)) != null ? A : e.modelValue.label : "";
    }, v = m(() => e.enabledInput && e.modelValue ? R() : e.placeholder), E = () => {
      var X, A;
      return e.modelValue ? (A = (X = l.default) == null ? void 0 : X.call(l, {
        data: e.modelValue
      })) != null ? A : R() : null;
    }, S = m(() => [c, `${c}-size-${_.value}`, {
      [`${c}-search`]: e.enabledInput,
      [`${c}-focus`]: N.value,
      [`${c}-disabled`]: g.value,
      [`${c}-error`]: h.value
    }]), z = m(() => Gn(t, qt)), K = m(() => Xn(t, qt));
    return {
      inputRef: D,
      render: () => d("span", Ve(z.value, {
        class: S.value,
        title: R(),
        onMousedown: O
      }), [l.prefix && d("span", {
        class: `${c}-prefix`
      }, [l.prefix()]), d("input", Ve(K.value, {
        ref: D,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !Y.value
        }],
        value: k.value,
        readonly: !e.enabledInput,
        placeholder: v.value,
        disabled: g.value,
        onInput: V,
        onFocus: M,
        onBlur: $,
        onCompositionstart: C,
        onCompositionupdate: C,
        onCompositionend: C
      }), null), d("span", {
        class: [`${c}-value`, {
          [`${c}-value-hidden`]: Y.value
        }]
      }, [E()]), l.suffix && d("span", {
        class: `${c}-suffix`
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
}), Gf = Object.defineProperty, Pi = Object.getOwnPropertySymbols, Xf = Object.prototype.hasOwnProperty, Zf = Object.prototype.propertyIsEnumerable, ji = (e, t, n) => t in e ? Gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Qf = (e, t) => {
  for (var n in t || (t = {}))
    Xf.call(t, n) && ji(e, n, t[n]);
  if (Pi)
    for (var n of Pi(t))
      Zf.call(t, n) && ji(e, n, t[n]);
  return e;
};
const Jf = (e, t) => {
  const n = [];
  for (const l of e)
    if (Oe(l))
      n.push({
        raw: l,
        value: l[t.value],
        label: l[t.label],
        closable: l[t.closable],
        tagProps: l[t.tagProps]
      });
    else if (e || ge(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Qf({
        raw: o
      }, o));
    }
  return n;
}, Ti = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], ep = F({
  name: "Tag",
  components: {
    IconHover: dt,
    IconClose: rn,
    IconLoading: Kt
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
    } = we(e), l = ne("tag"), o = m(() => e.color && Ti.includes(e.color)), i = m(() => e.color && !Ti.includes(e.color)), a = I(e.defaultVisible), r = I(e.defaultChecked), s = m(() => {
      var D;
      return (D = e.visible) != null ? D : a.value;
    }), u = m(() => {
      var D;
      return e.checkable ? (D = e.checked) != null ? D : r.value : !0;
    }), {
      mergedSize: c
    } = yt(n), f = m(() => c.value === "mini" ? "small" : c.value), g = (D) => {
      a.value = !1, t("update:visible", !1), t("close", D);
    }, h = (D) => {
      if (e.checkable) {
        const T = !u.value;
        r.value = T, t("update:checked", T), t("check", T, D);
      }
    }, b = m(() => [l, `${l}-size-${f.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: u.value,
      [`${l}-custom-color`]: i.value
    }]), _ = m(() => {
      if (i.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: b,
      style: _,
      computedVisible: s,
      computedChecked: u,
      handleClick: h,
      handleClose: g
    };
  }
});
function tp(e, t, n, l, o, i) {
  const a = ue("icon-close"), r = ue("icon-hover"), s = ue("icon-loading");
  return e.computedVisible ? (y(), x("span", {
    key: 0,
    class: G(e.cls),
    style: pe(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (y(), x("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [ie(e.$slots, "icon")], 2)) : te("v-if", !0), e.nowrap ? (y(), x("span", {
    key: 1,
    class: G(`${e.prefixCls}-text`)
  }, [ie(e.$slots, "default")], 2)) : ie(e.$slots, "default", {
    key: 2
  }), e.closable ? (y(), ce(r, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: ln(e.handleClose, ["stop"])
  }, {
    default: le(() => [ie(e.$slots, "close-icon", {}, () => [d(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : te("v-if", !0), e.loading ? (y(), x("span", {
    key: 4,
    class: G(`${e.prefixCls}-loading-icon`)
  }, [d(s)], 2)) : te("v-if", !0)], 6)) : te("v-if", !0);
}
var Io = /* @__PURE__ */ de(ep, [["render", tp]]);
const np = Object.assign(Io, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Io.name, Io);
  }
});
var lp = Object.defineProperty, Mi = Object.getOwnPropertySymbols, op = Object.prototype.hasOwnProperty, ap = Object.prototype.propertyIsEnumerable, Di = (e, t, n) => t in e ? lp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, sl = (e, t) => {
  for (var n in t || (t = {}))
    op.call(t, n) && Di(e, n, t[n]);
  if (Mi)
    for (var n of Mi(t))
      ap.call(t, n) && Di(e, n, t[n]);
  return e;
};
const ip = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Po = F({
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
      disabled: i,
      error: a,
      uninjectFormItemContext: r,
      modelValue: s
    } = we(e), u = e.baseCls || ne("input-tag"), c = I(), f = I(), {
      mergedSize: g,
      mergedDisabled: h,
      mergedError: b,
      feedback: _,
      eventHandlers: D
    } = ht({
      size: o,
      disabled: i,
      error: a,
      uninject: r == null ? void 0 : r.value
    }), {
      mergedSize: T
    } = yt(g), k = m(() => sl(sl({}, ip), e.fieldNames)), V = I(!1), C = I(e.defaultValue), M = I(e.defaultInputValue), $ = I(!1), O = I(""), N = m(() => Oe(e.retainInputValue) ? sl({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), Y = je({
      width: "12px"
    }), R = m(() => e.focused || V.value), v = (j, Z) => {
      M.value = j, t("update:inputValue", j), t("inputValueChange", j, Z);
    }, E = (j) => {
      var Z;
      const {
        value: oe
      } = j.target;
      j.type === "compositionend" ? ($.value = !1, O.value = "", v(oe, j), Le(() => {
        c.value && z.value !== c.value.value && (c.value.value = z.value);
      })) : ($.value = !0, O.value = z.value + ((Z = j.data) != null ? Z : ""));
    }, S = m(() => {
      var j;
      return (j = e.modelValue) != null ? j : C.value;
    }), z = m(() => {
      var j;
      return (j = e.inputValue) != null ? j : M.value;
    });
    be(s, (j) => {
      (Qe(j) || Sn(j)) && (C.value = []);
    });
    const K = (j) => {
      c.value && j.target !== c.value && (j.preventDefault(), c.value.focus());
    }, W = (j) => {
      const {
        value: Z
      } = j.target;
      $.value || (v(Z, j), Le(() => {
        c.value && z.value !== c.value.value && (c.value.value = z.value);
      }));
    }, X = m(() => Jf(S.value, k.value)), A = m(() => {
      if (e.maxTagCount > 0) {
        const j = X.value.length - e.maxTagCount;
        if (j > 0) {
          const Z = X.value.slice(0, e.maxTagCount), oe = {
            value: "__arco__more",
            label: `+${j}...`,
            closable: !1
          };
          return Z.push(sl({
            raw: oe
          }, oe)), Z;
        }
      }
      return X.value;
    }), ee = (j, Z) => {
      var oe, Me;
      C.value = j, t("update:modelValue", j), t("change", j, Z), (Me = (oe = D.value) == null ? void 0 : oe.onChange) == null || Me.call(oe, Z);
    }, B = (j, Z, oe) => {
      var Me;
      const De = (Me = S.value) == null ? void 0 : Me.filter((Ot, Xe) => Xe !== Z);
      ee(De, oe), t("remove", j, oe);
    }, w = (j) => {
      ee([], j), t("clear", j);
    }, H = m(() => !h.value && !e.readonly && e.allowClear && Boolean(S.value.length)), Q = (j) => {
      var Z;
      if (z.value) {
        if (j.preventDefault(), e.uniqueValue && ((Z = S.value) != null && Z.includes(z.value))) {
          t("pressEnter", z.value, j);
          return;
        }
        const oe = S.value.concat(z.value);
        ee(oe, j), t("pressEnter", z.value, j), N.value.create || v("", j);
      }
    }, he = (j) => {
      var Z, oe;
      V.value = !0, t("focus", j), (oe = (Z = D.value) == null ? void 0 : Z.onFocus) == null || oe.call(Z, j);
    }, _e = (j) => {
      var Z, oe;
      V.value = !1, !N.value.blur && z.value && v("", j), t("blur", j), (oe = (Z = D.value) == null ? void 0 : Z.onBlur) == null || oe.call(Z, j);
    }, re = () => {
      for (let j = X.value.length - 1; j >= 0; j--)
        if (X.value[j].closable)
          return j;
      return -1;
    }, xe = (j) => {
      if (h.value || e.readonly)
        return;
      const Z = j.key || j.code;
      if (!$.value && z.value && Z === Ea.key && Q(j), !$.value && A.value.length > 0 && !z.value && Z === $c.key) {
        const oe = re();
        oe >= 0 && B(X.value[oe].value, oe, j);
      }
    }, Se = (j) => {
      j > 12 ? Y.width = `${j}px` : Y.width = "12px";
    };
    Ee(() => {
      f.value && Se(f.value.offsetWidth);
    });
    const Ie = () => {
      f.value && Se(f.value.offsetWidth);
    };
    be(z, (j) => {
      c.value && !$.value && j !== c.value.value && (c.value.value = j);
    });
    const ft = m(() => [u, `${u}-size-${T.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: b.value,
      [`${u}-focus`]: R.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: A.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || H.value || _.value,
      [`${u}-has-placeholder`]: !S.value.length
    }]), tt = m(() => Gn(l, qt)), it = m(() => Xn(l, qt));
    return {
      inputRef: c,
      render: () => {
        var j;
        return d("span", Ve({
          class: ft.value,
          onMousedown: K
        }, tt.value), [d(El, {
          onResize: Ie
        }, {
          default: () => [d("span", {
            ref: f,
            class: `${u}-mirror`
          }, [A.value.length > 0 ? O.value || z.value : O.value || z.value || e.placeholder])]
        }), n.prefix && d("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), d(jr, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [A.value.map((Z, oe) => d(np, Ve({
            key: `tag-${Z.value}`,
            class: `${u}-tag`,
            closable: !h.value && !e.readonly && Z.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, Z.tagProps, {
            onClose: (Me) => B(Z.value, oe, Me)
          }), {
            default: () => {
              var Me, De, Ot, Xe;
              return [(Xe = (Ot = (Me = n.tag) == null ? void 0 : Me.call(n, {
                data: Z.raw
              })) != null ? Ot : (De = e.formatTag) == null ? void 0 : De.call(e, Z.raw)) != null ? Xe : Z.label];
            }
          })), d("input", Ve(it.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: Y,
            placeholder: A.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: W,
            onKeydown: xe,
            onFocus: he,
            onBlur: _e,
            onCompositionstart: E,
            onCompositionupdate: E,
            onCompositionend: E
          }), null)]
        }), H.value && d(dt, {
          class: `${u}-clear-btn`,
          onClick: w,
          onMousedown: (Z) => Z.stopPropagation()
        }, {
          default: () => [d(rn, null, null)]
        }), (n.suffix || Boolean(_.value)) && d("span", {
          class: `${u}-suffix`
        }, [(j = n.suffix) == null ? void 0 : j.call(n), Boolean(_.value) && d(Oa, {
          type: _.value
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
const rp = Object.assign(Po, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Po.name, Po);
  }
});
var zi = F({
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
      default: (e) => Ae(e.modelValue)
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
      error: i
    } = we(e), a = ne("select-view"), {
      feedback: r,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: c,
      mergedError: f
    } = ht({
      size: l,
      disabled: o,
      error: i
    }), {
      mergedSize: g
    } = yt(c), {
      opened: h
    } = we(e), b = I(), _ = m(() => {
      var v;
      return (v = b.value) == null ? void 0 : v.inputRef;
    }), D = m(() => e.modelValue.length === 0), T = m(() => e.allowSearch || e.allowCreate), k = m(() => e.allowClear && !e.disabled && !D.value), V = (v) => {
      var E, S;
      t("focus", v), (S = (E = s.value) == null ? void 0 : E.onFocus) == null || S.call(E, v);
    }, C = (v) => {
      var E, S;
      t("blur", v), (S = (E = s.value) == null ? void 0 : E.onBlur) == null || S.call(E, v);
    }, M = (v) => {
      t("remove", v);
    }, $ = (v) => {
      t("clear", v);
    }, O = () => {
      var v, E, S, z;
      return e.loading ? (E = (v = n["loading-icon"]) == null ? void 0 : v.call(n)) != null ? E : d(Kt, null, null) : e.allowSearch && e.opened ? (z = (S = n["search-icon"]) == null ? void 0 : S.call(n)) != null ? z : d(sa, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : d(Pa, {
        class: `${a}-arrow-icon`
      }, null);
    }, N = () => d(Te, null, [k.value && d(dt, {
      class: `${a}-clear-btn`,
      onClick: $,
      onMousedown: (v) => v.stopPropagation()
    }, {
      default: () => [d(rn, null, null)]
    }), d("span", {
      class: `${a}-icon`
    }, [O()]), Boolean(r.value) && d(Oa, {
      type: r.value
    }, null)]);
    be(h, (v) => {
      !v && _.value && _.value.isSameNode(document.activeElement) && _.value.blur();
    });
    const Y = m(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: _,
      handleFocus: V,
      handleBlur: C,
      render: () => e.multiple ? d(rp, {
        ref: b,
        baseCls: a,
        class: Y.value,
        modelValue: e.modelValue,
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: g.value,
        error: f.value,
        maxTagCount: e.maxTagCount,
        disabledInput: !e.allowSearch && !e.allowCreate,
        tagNowrap: e.tagNowrap,
        retainInputValue: !0,
        uninjectFormItemContext: !0,
        onRemove: M,
        onFocus: V,
        onBlur: C
      }, {
        prefix: n.prefix,
        suffix: N,
        tag: n.label
      }) : d(Yf, {
        ref: b,
        baseCls: a,
        class: Y.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: g.value,
        error: f.value,
        enabledInput: T.value,
        uninjectFormItemContext: !0,
        onFocus: V,
        onBlur: C
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: N
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
const sp = F({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    return {
      prefixCls: ne("select-group")
    };
  }
});
function up(e, t, n, l, o, i) {
  return y(), x(Te, null, [p("li", {
    class: G(`${e.prefixCls}-title`)
  }, [ie(e.$slots, "label", {}, () => [ye(ve(e.label), 1)])], 2), ie(e.$slots, "default")], 64);
}
var gl = /* @__PURE__ */ de(sp, [["render", up]]);
const Ai = typeof window > "u" ? global : window;
function cp(e, t) {
  let n = 0;
  return (...l) => {
    n && Ai.clearTimeout(n), n = Ai.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var dp = Object.defineProperty, fp = Object.defineProperties, pp = Object.getOwnPropertyDescriptors, Li = Object.getOwnPropertySymbols, vp = Object.prototype.hasOwnProperty, hp = Object.prototype.propertyIsEnumerable, Fi = (e, t, n) => t in e ? dp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bn = (e, t) => {
  for (var n in t || (t = {}))
    vp.call(t, n) && Fi(e, n, t[n]);
  if (Li)
    for (var n of Li(t))
      hp.call(t, n) && Fi(e, n, t[n]);
  return e;
}, mp = (e, t) => fp(e, pp(t));
function gp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
const bp = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var jo = F({
  name: "Select",
  components: {
    Trigger: Bl,
    SelectView: zi
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
      default: (e) => Qe(e.multiple) ? "" : []
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
      disabled: i,
      error: a,
      options: r,
      filterOption: s,
      valueKey: u,
      multiple: c,
      popupVisible: f,
      defaultPopupVisible: g,
      showExtraOptions: h,
      modelValue: b,
      fieldNames: _,
      loading: D,
      defaultActiveFirstOption: T
    } = we(e), k = ne("select"), {
      mergedSize: V,
      mergedDisabled: C,
      mergedError: M,
      eventHandlers: $
    } = ht({
      size: o,
      disabled: i,
      error: a
    }), O = m(() => e.virtualListProps ? "div" : "li"), N = m(() => Oe(e.allowSearch) && Boolean(e.allowSearch.retainInputValue));
    m(() => {
      if (et(e.formatLabel))
        return (q) => {
          const P = De.get(q.value);
          return e.formatLabel(P);
        };
    });
    const Y = I(), R = I({}), v = I(), {
      computedPopupVisible: E,
      handlePopupVisibleChange: S
    } = Ff({
      popupVisible: f,
      defaultPopupVisible: g,
      emit: n
    }), z = I(e.defaultValue), K = m(() => {
      var q;
      const P = (q = e.modelValue) != null ? q : z.value;
      return (Ae(P) ? P : P || ge(P) || kt(P) || Wl(P) ? [P] : []).map((ae) => ({
        value: ae,
        key: Wn(ae, e.valueKey)
      }));
    });
    be(b, (q) => {
      (Qe(q) || Sn(q)) && (z.value = c.value ? [] : q);
    });
    const W = m(() => K.value.map((q) => q.key)), X = m(() => Bn(Bn({}, bp), _ == null ? void 0 : _.value)), A = I(), ee = (q) => {
      const P = {};
      return q.forEach((U) => {
        P[U] = De.get(U);
      }), P;
    }, B = (q) => {
      A.value = ee(q);
    }, w = (q) => et(e.fallbackOption) ? e.fallbackOption(q) : {
      [X.value.value]: q,
      [X.value.label]: String(Oe(q) ? q[u == null ? void 0 : u.value] : q)
    }, H = () => {
      const q = [], P = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const U of K.value)
          if (!P.includes(U.key) && U.value !== "") {
            const ae = De.get(U.key);
            (!ae || ae.origin === "extraOptions") && (q.push(U), P.push(U.key));
          }
      }
      if (e.allowCreate && re.value) {
        const U = Wn(re.value);
        if (!P.includes(U)) {
          const ae = De.get(U);
          (!ae || ae.origin === "extraOptions") && q.push({
            value: re.value,
            key: U
          });
        }
      }
      return q;
    }, Q = I([]), he = m(() => Q.value.map((q) => {
      var P;
      let U = w(q.value);
      const ae = (P = A.value) == null ? void 0 : P[q.key];
      return !Qe(ae) && !nu(ae) && (U = Bn(Bn({}, U), ae)), U;
    }));
    Le(() => {
      Js(() => {
        var q;
        const P = H();
        if (P.length !== Q.value.length)
          Q.value = P;
        else if (P.length > 0) {
          for (let U = 0; U < P.length; U++)
            if (P[U].key !== ((q = Q.value[U]) == null ? void 0 : q.key)) {
              Q.value = P;
              break;
            }
        }
      });
    });
    const _e = I(""), re = m(() => {
      var q;
      return (q = e.inputValue) != null ? q : _e.value;
    });
    be(E, (q) => {
      !q && !N.value && re.value && Ie("");
    });
    const xe = (q) => {
      var P, U;
      return e.multiple ? q.map((ae) => {
        var pt, nt;
        return (nt = (pt = De.get(ae)) == null ? void 0 : pt.value) != null ? nt : "";
      }) : (U = (P = De.get(q[0])) == null ? void 0 : P.value) != null ? U : df(De) ? void 0 : "";
    }, Se = (q) => {
      var P, U;
      const ae = xe(q);
      z.value = ae, n("update:modelValue", ae), n("change", ae), (U = (P = $.value) == null ? void 0 : P.onChange) == null || U.call(P), B(q);
    }, Ie = (q) => {
      _e.value = q, n("update:inputValue", q), n("inputValueChange", q);
    }, ft = (q, P) => {
      if (e.multiple) {
        if (W.value.includes(q)) {
          const U = W.value.filter((ae) => ae !== q);
          Se(U);
        } else if (Xe.value.includes(q))
          if (e.limit > 0 && W.value.length >= e.limit) {
            const U = De.get(q);
            n("exceedLimit", U == null ? void 0 : U.value, P);
          } else {
            const U = W.value.concat(q);
            Se(U);
          }
        N.value || Ie("");
      } else {
        if (q !== W.value[0] && Se([q]), N.value) {
          const U = De.get(q);
          U && Ie(U.label);
        }
        S(!1);
      }
    }, tt = cp((q) => {
      n("search", q);
    }, e.searchDelay), it = (q) => {
      q !== re.value && (E.value || S(!0), Ie(q), e.allowSearch && tt(q));
    }, L = (q) => {
      const P = De.get(q), U = W.value.filter((ae) => ae !== q);
      Se(U), n("remove", P == null ? void 0 : P.value);
    }, j = (q) => {
      q == null || q.stopPropagation();
      const P = W.value.filter((U) => {
        var ae;
        return (ae = De.get(U)) == null ? void 0 : ae.disabled;
      });
      Se(P), Ie(""), n("clear", q);
    }, Z = (q) => {
      n("dropdownScroll", q);
    }, oe = (q) => {
      n("dropdownReachBottom", q);
    }, {
      validOptions: Me,
      optionInfoMap: De,
      validOptionInfos: Ot,
      enabledOptionKeys: Xe,
      handleKeyDown: lo
    } = Sf({
      multiple: c,
      options: r,
      extraOptions: he,
      inputValue: re,
      filterOption: s,
      showExtraOptions: h,
      component: O,
      valueKey: u,
      fieldNames: _,
      loading: D,
      popupVisible: E,
      valueKeys: W,
      dropdownRef: Y,
      optionRefs: R,
      virtualListRef: v,
      defaultActiveFirstOption: T,
      onSelect: ft,
      onPopupVisibleChange: S
    }), oo = m(() => {
      var q;
      const P = [];
      for (const U of K.value) {
        const ae = De.get(U.key);
        ae && P.push(mp(Bn({}, ae), {
          value: U.key,
          label: (q = ae == null ? void 0 : ae.label) != null ? q : String(Oe(U.value) ? U.value[u == null ? void 0 : u.value] : U.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return P;
    }), xn = (q) => {
      if (et(t.option)) {
        const P = t.option;
        return () => P({
          data: q.raw
        });
      }
      return et(q.render) ? q.render : () => q.label;
    }, Dt = (q) => {
      if (as(q)) {
        let P;
        return d(gl, {
          key: q.key,
          label: q.label
        }, gp(P = q.options.map((U) => Dt(U))) ? P : {
          default: () => [P]
        });
      }
      return Yl(q, {
        inputValue: re.value,
        filterOption: s == null ? void 0 : s.value
      }) ? d(gn, {
        ref: (P) => {
          P != null && P.$el && (R.value[q.key] = P.$el);
        },
        key: q.key,
        value: q.value,
        label: q.label,
        disabled: q.disabled,
        internal: !0
      }, {
        default: xn(q)
      }) : null;
    }, ll = () => d(tf, {
      ref: Y,
      loading: e.loading,
      empty: Ot.value.length === 0,
      virtualList: Boolean(e.virtualListProps),
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: Z,
      onReachBottom: oe
    }, {
      default: () => {
        var q, P;
        return [...(P = (q = t.default) == null ? void 0 : q.call(t)) != null ? P : [], ...Me.value.map(Dt)];
      },
      "virtual-list": () => d(Tf, Ve(e.virtualListProps, {
        ref: v,
        data: Me.value
      }), {
        item: ({
          item: q
        }) => Dt(q)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), ao = ({
      data: q
    }) => {
      var P, U, ae, pt;
      if ((t.label || et(e.formatLabel)) && q) {
        const nt = De.get(q.value);
        if (nt != null && nt.raw)
          return (ae = (P = t.label) == null ? void 0 : P.call(t, {
            data: nt.raw
          })) != null ? ae : (U = e.formatLabel) == null ? void 0 : U.call(e, nt.raw);
      }
      return (pt = q == null ? void 0 : q.label) != null ? pt : "";
    };
    return () => d(Bl, Ve({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: C.value,
      popupVisible: E.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: S
    }, e.triggerProps), {
      default: () => {
        var q, P;
        return [(P = (q = t.trigger) == null ? void 0 : q.call(t)) != null ? P : d(zi, Ve({
          class: k,
          modelValue: oo.value,
          inputValue: re.value,
          multiple: e.multiple,
          disabled: C.value,
          error: M.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: Boolean(e.allowSearch),
          opened: E.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: V.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: it,
          onRemove: L,
          onClear: j,
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
const ja = Object.assign(jo, {
  Option: gn,
  OptGroup: gl,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + jo.name, jo), e.component(n + gn.name, gn), e.component(n + gl.name, gl);
  }
}), yp = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), _p = ["stroke-width", "stroke-linecap", "stroke-linejoin"], $p = /* @__PURE__ */ p("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), wp = [$p];
function kp(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, wp, 14, _p);
}
var To = /* @__PURE__ */ de(yp, [["render", kp]]);
const Cp = Object.assign(To, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + To.name, To);
  }
}), Sp = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Vp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Op = /* @__PURE__ */ p("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), Ep = [Op];
function xp(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ep, 14, Vp);
}
var Mo = /* @__PURE__ */ de(Sp, [["render", xp]]);
const rs = Object.assign(Mo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Mo.name, Mo);
  }
}), Bp = (e) => {
  const t = {}, n = I([]), l = () => {
    if (t.value) {
      const o = Kr(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return Ee(() => l()), jt(() => l()), {
    children: t,
    components: n
  };
}, Ip = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var Pp = Object.defineProperty, jp = Object.defineProperties, Tp = Object.getOwnPropertyDescriptors, Ni = Object.getOwnPropertySymbols, Mp = Object.prototype.hasOwnProperty, Dp = Object.prototype.propertyIsEnumerable, Ri = (e, t, n) => t in e ? Pp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, zp = (e, t) => {
  for (var n in t || (t = {}))
    Mp.call(t, n) && Ri(e, n, t[n]);
  if (Ni)
    for (var n of Ni(t))
      Dp.call(t, n) && Ri(e, n, t[n]);
  return e;
}, Ap = (e, t) => jp(e, Tp(t));
const ss = (e, t, n) => {
  const l = Math.floor(e * 6), o = e * 6 - l, i = n * (1 - t), a = n * (1 - o * t), r = n * (1 - (1 - o) * t), s = l % 6, u = [n, a, i, i, r, n][s], c = [r, n, n, a, i, i][s], f = [i, i, r, n, n, a][s];
  return {
    r: Math.round(u * 255),
    g: Math.round(c * 255),
    b: Math.round(f * 255)
  };
}, Gl = (e, t, n) => {
  e /= 255, t /= 255, n /= 255;
  const l = Math.max(e, t, n), o = Math.min(e, t, n);
  let i = 0;
  const a = l, r = l - o, s = l === 0 ? 0 : r / l;
  if (l === o)
    i = 0;
  else {
    switch (l) {
      case e:
        i = (t - n) / r + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / r + 2;
        break;
      case n:
        i = (e - t) / r + 4;
        break;
    }
    i /= 6;
  }
  return {
    h: i,
    s,
    v: a
  };
}, Lp = "[-\\+]?\\d+%?", Fp = "[-\\+]?\\d*\\.\\d+%?", en = `(?:${Fp})|(?:${Lp})`, Np = `[\\s|\\(]+(${en})[,|\\s]+(${en})[,|\\s]+(${en})\\s*\\)?`, Rp = `[\\s|\\(]+(${en})[,|\\s]+(${en})[,|\\s]+(${en})[,|\\s]+(${en})\\s*\\)?`, At = {
  rgb: new RegExp(`rgb${Np}`),
  rgba: new RegExp(`rgba${Rp}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, qe = (e) => parseInt(e, 16), qi = (e) => qe(e) / 255, qp = (e) => {
  let t = At.rgb.exec(e);
  return t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10)
  } : (t = At.rgba.exec(e), t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10),
    a: parseFloat(t[4])
  } : (t = At.hex8.exec(e), t ? {
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3]),
    a: qi(t[4])
  } : (t = At.hex6.exec(e), t ? {
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3])
  } : (t = At.hex4.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3]),
    a: qi(t[4] + t[4])
  } : (t = At.hex3.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3])
  } : !1)))));
}, Hp = (e) => {
  var t;
  const n = qp(e);
  if (n) {
    const l = Gl(n.r, n.g, n.b);
    return Ap(zp({}, l), {
      a: (t = n.a) != null ? t : 1
    });
  }
  return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
}, us = (e) => {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  let t = At.hex6.exec(e);
  return t ? {
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3])
  } : (t = At.hex3.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3])
  } : !1);
}, Hi = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), Wp = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), cs = ({
  value: e,
  onChange: t
}) => {
  const n = I(!1), l = I(), o = I(), i = (c, f) => c < 0 ? 0 : c > f ? 1 : c / f, a = (c) => {
    if (!l.value)
      return;
    const {
      clientX: f,
      clientY: g
    } = c, h = l.value.getBoundingClientRect(), b = [i(f - h.x, h.width), i(g - h.y, h.height)];
    (b[0] !== e[0] || b[1] !== e[1]) && (t == null || t(b));
  }, r = () => {
    n.value = !1, window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", r), window.removeEventListener("contextmenu", r);
  }, s = (c) => {
    n.value = !0, a(c), window.addEventListener("mousemove", u), window.addEventListener("mouseup", r), window.addEventListener("contextmenu", r);
  };
  function u(c) {
    c.preventDefault(), c.buttons > 0 ? a(c) : r();
  }
  return {
    active: n,
    blockRef: l,
    handlerRef: o,
    onMouseDown: s
  };
};
var Wi = F({
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
    const t = ne("color-picker"), n = m(() => e.color.rgb), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: i
    } = cs({
      value: [e.x, 0],
      onChange: (r) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, r[0]);
      }
    }), a = () => d("div", {
      ref: o,
      class: `${t}-handler`,
      style: {
        left: `${e.x * 100}%`,
        color: e.colorString
      }
    }, null);
    return () => e.type === "alpha" ? d("div", {
      class: `${t}-control-bar-bg`
    }, [d("div", {
      ref: l,
      class: [`${t}-control-bar`, `${t}-control-bar-alpha`],
      style: {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${n.value.r}, ${n.value.g}, ${n.value.b}))`
      },
      onMousedown: i
    }, [a()])]) : d("div", {
      ref: l,
      class: [`${t}-control-bar`, `${t}-control-bar-hue`],
      onMousedown: i
    }, [a()]);
  }
}), Up = F({
  name: "Palette",
  props: {
    color: {
      type: Object,
      required: !0
    },
    onChange: Function
  },
  setup(e) {
    const t = ne("color-picker"), n = m(() => e.color.hsv), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: i
    } = cs({
      value: [n.value.s, 1 - n.value.v],
      onChange: (r) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, r[0], 1 - r[1]);
      }
    }), a = m(() => {
      const r = ss(n.value.h, 1, 1);
      return `rgb(${r.r}, ${r.g}, ${r.b})`;
    });
    return () => d("div", {
      ref: l,
      class: `${t}-palette`,
      style: {
        backgroundColor: a.value
      },
      onMousedown: i
    }, [d("div", {
      ref: o,
      class: `${t}-handler`,
      style: {
        top: `${(1 - n.value.v) * 100}%`,
        left: `${n.value.s * 100}%`
      }
    }, null)]);
  }
});
function Ta(e, t) {
  return t === void 0 && (t = 15), +parseFloat(Number(e).toPrecision(t));
}
function Ct(e) {
  var t = e.toString().split(/[eE]/), n = (t[0].split(".")[1] || "").length - +(t[1] || 0);
  return n > 0 ? n : 0;
}
function Un(e) {
  if (e.toString().indexOf("e") === -1)
    return Number(e.toString().replace(".", ""));
  var t = Ct(e);
  return t > 0 ? Ta(Number(e) * Math.pow(10, t)) : Number(e);
}
function ca(e) {
  fs && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function Xl(e) {
  return function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var l = t[0], o = t.slice(1);
    return o.reduce(function(i, a) {
      return e(i, a);
    }, l);
  };
}
var Ht = Xl(function(e, t) {
  var n = Un(e), l = Un(t), o = Ct(e) + Ct(t), i = n * l;
  return ca(i), i / Math.pow(10, o);
}), Kp = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Ht(e, n) + Ht(t, n)) / n;
}), Yp = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Ht(e, n) - Ht(t, n)) / n;
}), ds = Xl(function(e, t) {
  var n = Un(e), l = Un(t);
  return ca(n), ca(l), Ht(n / l, Ta(Math.pow(10, Ct(t) - Ct(e))));
});
function Gp(e, t) {
  var n = Math.pow(10, t), l = ds(Math.round(Math.abs(Ht(e, n))), n);
  return e < 0 && l !== 0 && (l = Ht(l, -1)), l;
}
var fs = !0;
function Xp(e) {
  e === void 0 && (e = !0), fs = e;
}
var on = {
  strip: Ta,
  plus: Kp,
  minus: Yp,
  times: Ht,
  divide: ds,
  round: Gp,
  digitLength: Ct,
  float2Fixed: Un,
  enableBoundaryChecking: Xp
};
const Zp = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Qp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Jp = /* @__PURE__ */ p("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), ev = [Jp];
function tv(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ev, 14, Qp);
}
var Do = /* @__PURE__ */ de(Zp, [["render", tv]]);
const ps = Object.assign(Do, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Do.name, Do);
  }
}), nv = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-minus`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), lv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ov = /* @__PURE__ */ p("path", {
  d: "M5 24h38"
}, null, -1), av = [ov];
function iv(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, av, 14, lv);
}
var zo = /* @__PURE__ */ de(nv, [["render", iv]]);
const rv = Object.assign(zo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zo.name, zo);
  }
});
var sv = Object.defineProperty, Ui = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Ki = (e, t, n) => t in e ? sv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dv = (e, t) => {
  for (var n in t || (t = {}))
    uv.call(t, n) && Ki(e, n, t[n]);
  if (Ui)
    for (var n of Ui(t))
      cv.call(t, n) && Ki(e, n, t[n]);
  return e;
};
const fv = 800, pv = 150;
on.enableBoundaryChecking(!1);
var Ao = F({
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
      disabled: i
    } = we(e), a = ne("input-number"), r = I(), {
      mergedSize: s,
      mergedDisabled: u,
      eventHandlers: c
    } = ht({
      size: o,
      disabled: i
    }), {
      mergedSize: f
    } = yt(s), g = m(() => {
      if (ge(e.precision)) {
        const w = `${e.step}`.split(".")[1], H = w && w.length || 0;
        return Math.max(H, e.precision);
      }
    }), h = (w) => {
      var H, Q;
      if (!ge(w))
        return "";
      const he = g.value ? w.toFixed(g.value) : String(w);
      return (Q = (H = e.formatter) == null ? void 0 : H.call(e, he)) != null ? Q : he;
    }, b = I(h((l = e.modelValue) != null ? l : e.defaultValue)), _ = m(() => {
      var w, H;
      if (!b.value)
        return;
      const Q = Number((H = (w = e.parser) == null ? void 0 : w.call(e, b.value)) != null ? H : b.value);
      return Number.isNaN(Q) ? void 0 : Q;
    }), D = I(ge(_.value) && _.value <= e.min), T = I(ge(_.value) && _.value >= e.max);
    let k = 0;
    const V = () => {
      k && (window.clearTimeout(k), k = 0);
    }, C = (w) => {
      if (!Qe(w))
        return ge(e.min) && w < e.min && (w = e.min), ge(e.max) && w > e.max && (w = e.max), ge(g.value) ? on.round(w, g.value) : w;
    }, M = (w) => {
      let H = !1, Q = !1;
      ge(w) && (w <= e.min && (H = !0), w >= e.max && (Q = !0)), T.value !== Q && (T.value = Q), D.value !== H && (D.value = H);
    }, $ = () => {
      const w = C(_.value), H = h(w);
      (w !== _.value || b.value !== H) && (b.value = H), t("update:modelValue", w);
    };
    be(() => [e.max, e.min], () => {
      $(), M(_.value);
    });
    const O = (w, H) => {
      if (u.value || w === "plus" && T.value || w === "minus" && D.value)
        return;
      let Q;
      ge(_.value) ? Q = C(on[w](_.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, b.value = h(Q), M(Q), t("update:modelValue", Q), t("change", Q, H);
    }, N = (w, H, Q = !1) => {
      var he;
      w.preventDefault(), (he = r.value) == null || he.focus(), O(H, w), Q && (k = window.setTimeout(() => w.target.dispatchEvent(w), k ? pv : fv));
    }, Y = (w, H) => {
      var Q, he, _e, re;
      w = w.trim().replace(/。/g, "."), w = (he = (Q = e.parser) == null ? void 0 : Q.call(e, w)) != null ? he : w, (ge(Number(w)) || /^(\.|-)$/.test(w)) && (b.value = (re = (_e = e.formatter) == null ? void 0 : _e.call(e, w)) != null ? re : w, M(_.value), t("input", _.value, b.value, H), e.modelEvent === "input" && (t("update:modelValue", _.value), t("change", _.value, H)));
    }, R = (w) => {
      t("focus", w);
    }, v = (w, H) => {
      H instanceof MouseEvent && !w || ($(), t("change", _.value, H));
    }, E = (w) => {
      t("blur", w);
    }, S = (w) => {
      var H, Q;
      b.value = "", t("update:modelValue", void 0), t("change", void 0, w), (Q = (H = c.value) == null ? void 0 : H.onChange) == null || Q.call(H, w), t("clear", w);
    }, z = is(/* @__PURE__ */ new Map([[vn.ARROW_UP, (w) => {
      w.preventDefault(), !e.readOnly && O("plus", w);
    }], [vn.ARROW_DOWN, (w) => {
      w.preventDefault(), !e.readOnly && O("minus", w);
    }]])), K = (w) => {
      t("keydown", w), w.defaultPrevented || z(w);
    };
    be(() => e.modelValue, (w) => {
      w !== _.value && (b.value = h(w), M(w));
    });
    const W = () => {
      var w, H, Q;
      return e.readOnly ? null : d(Te, null, [n.suffix && d("div", {
        class: `${a}-suffix`
      }, [(w = n.suffix) == null ? void 0 : w.call(n)]), d("div", {
        class: `${a}-step`
      }, [d("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || T.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || T.value,
        onMousedown: (he) => N(he, "plus", !0),
        onMouseup: V,
        onMouseleave: V
      }, [n.plus ? (H = n.plus) == null ? void 0 : H.call(n) : d(rs, null, null)]), d("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || D.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || D.value,
        onMousedown: (he) => N(he, "minus", !0),
        onMouseup: V,
        onMouseleave: V
      }, [n.minus ? (Q = n.minus) == null ? void 0 : Q.call(n) : d(Pa, null, null)])])]);
    }, X = m(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {
      [`${a}-readonly`]: e.readOnly
    }]), A = () => d(wn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || D.value,
      onMousedown: (w) => N(w, "minus", !0),
      onMouseup: V,
      onMouseleave: V
    }, {
      icon: () => d(rv, null, null)
    }), ee = () => d(wn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || T.value,
      onMousedown: (w) => N(w, "plus", !0),
      onMouseup: V,
      onMouseleave: V
    }, {
      icon: () => d(ps, null, null)
    });
    return {
      inputRef: r,
      render: () => {
        const w = e.mode === "embed" ? {
          prepend: n.prepend,
          prefix: n.prefix,
          suffix: e.hideButton ? n.suffix : W,
          append: n.append
        } : {
          prepend: e.hideButton ? n.prepend : A,
          prefix: n.prefix,
          suffix: n.suffix,
          append: e.hideButton ? n.append : ee
        };
        return d(Yt, {
          key: `__arco__${e.mode}`,
          ref: r,
          class: X.value,
          type: "text",
          allowClear: e.allowClear,
          size: f.value,
          modelValue: b.value,
          placeholder: e.placeholder,
          disabled: u.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: dv({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": b.value
          }, e.inputAttrs),
          onInput: Y,
          onFocus: R,
          onBlur: E,
          onClear: S,
          onChange: v,
          onKeydown: K
        }, w);
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
const Vt = Object.assign(Ao, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ao.name, Ao);
  }
});
var vs = F({
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
    const t = ne("color-picker");
    return () => d(Vt, {
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
}), vv = Object.defineProperty, Yi = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, mv = Object.prototype.propertyIsEnumerable, Gi = (e, t, n) => t in e ? vv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xi = (e, t) => {
  for (var n in t || (t = {}))
    hv.call(t, n) && Gi(e, n, t[n]);
  if (Yi)
    for (var n of Yi(t))
      mv.call(t, n) && Gi(e, n, t[n]);
  return e;
}, gv = F({
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
    const t = ne("color-picker"), {
      color: n
    } = we(e), l = (o) => {
      var i;
      const a = Xi(Xi({}, n.value.rgb), o), r = Gl(a.r, a.g, a.b);
      (i = e.onHsvChange) == null || i.call(e, r);
    };
    return () => d(zn, {
      class: `${t}-input-group`
    }, {
      default: () => [["r", "g", "b"].map((o) => d(Vt, {
        key: o,
        size: "mini",
        min: 0,
        max: 255,
        disabled: e.disabled,
        modelValue: n.value.rgb[o],
        hideButton: !0,
        onChange: (i = 0) => l({
          [o]: i
        })
      }, null)), !e.disabledAlpha && d(vs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), bv = F({
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
    const t = ne("color-picker"), {
      color: n
    } = we(e), [l, o] = Hn(n.value.hex), i = (s) => {
      var u;
      const c = us(s) || {
        r: 255,
        g: 0,
        b: 0
      }, f = Gl(c.r, c.g, c.b);
      (u = e.onHsvChange) == null || u.call(e, f);
    }, a = (s) => {
      var u, c;
      const f = (c = (u = s.match(/[a-fA-F0-9]*/g)) == null ? void 0 : u.join("")) != null ? c : "";
      f !== n.value.hex && i(f.toUpperCase());
    }, r = (s) => {
      if (!s.clipboardData)
        return;
      let u = s.clipboardData.getData("Text");
      u.startsWith("#") && (u = u.slice(1)), a(u), s.preventDefault();
    };
    return be(n, () => {
      n.value.hex !== l.value && o(n.value.hex);
    }), () => d(zn, {
      class: `${t}-input-group`
    }, {
      default: () => [d(Yt, {
        class: `${t}-input-hex`,
        size: "mini",
        maxLength: 6,
        disabled: e.disabled,
        modelValue: l.value,
        onInput: o,
        onChange: a,
        onBlur: () => i,
        onPressEnter: () => i,
        onPaste: r
      }, {
        prefix: () => "#"
      }), !e.disabledAlpha && d(vs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), yv = F({
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
    } = $a(), n = ne("color-picker"), l = m(() => e.color.hsv), [o, i] = Hn(e.format || "hex"), a = (g) => {
      i(g);
    };
    I(!1);
    const r = (g) => {
      var h;
      const b = us(g) || {
        r: 255,
        g: 0,
        b: 0
      }, _ = Gl(b.r, b.g, b.b);
      (h = e.onHsvChange) == null || h.call(e, _);
    }, s = () => {
      const g = {
        color: e.color,
        alpha: e.alpha,
        disabled: e.disabled,
        disabledAlpha: e.disabledAlpha,
        onHsvChange: e.onHsvChange,
        onAlphaChange: e.onAlphaChange
      };
      return o.value === "rgb" ? d(gv, g, null) : d(bv, g, null);
    }, u = (g) => d("div", {
      key: g,
      class: `${n}-color-block`,
      style: {
        backgroundColor: g
      },
      onClick: () => r(g)
    }, [d("div", {
      class: `${n}-block`,
      style: {
        backgroundColor: g
      }
    }, null)]), c = (g, h) => d("div", {
      class: `${n}-colors-section`
    }, [d("div", {
      class: `${n}-colors-text`
    }, [g]), d("div", {
      class: `${n}-colors-wrapper`
    }, [h != null && h.length ? d("div", {
      class: `${n}-colors-list`
    }, [h.map(u)]) : d("span", {
      class: `${n}-colors-empty`
    }, [t("colorPicker.empty")])])]), f = () => e.showHistory || e.showPreset ? d("div", {
      class: `${n}-panel-colors`
    }, [e.showHistory && c(t("colorPicker.history"), e.historyColors), e.showPreset && c(t("colorPicker.preset"), e.presetColors)]) : null;
    return () => d("div", {
      class: {
        [`${n}-panel`]: !0,
        [`${n}-panel-disabled`]: e.disabled
      }
    }, [d(Up, {
      color: e.color,
      onChange: (g, h) => {
        var b;
        return (b = e.onHsvChange) == null ? void 0 : b.call(e, {
          h: l.value.h,
          s: g,
          v: h
        });
      }
    }, null), d("div", {
      class: `${n}-panel-control`
    }, [d("div", {
      class: `${n}-control-wrapper`
    }, [d("div", null, [d(Wi, {
      type: "hue",
      x: l.value.h,
      color: e.color,
      colorString: e.colorString,
      onChange: (g) => {
        var h;
        return (h = e.onHsvChange) == null ? void 0 : h.call(e, {
          h: g,
          s: l.value.s,
          v: l.value.v
        });
      }
    }, null), !e.disabledAlpha && d(Wi, {
      type: "alpha",
      x: e.alpha,
      color: e.color,
      colorString: e.colorString,
      onChange: e.onAlphaChange
    }, null)]), d("div", {
      class: `${n}-preview`,
      style: {
        backgroundColor: e.colorString
      }
    }, null)]), d("div", {
      class: `${n}-input-wrapper`
    }, [d(ja, {
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
    }, null), d("div", {
      class: `${n}-group-wrapper`
    }, [s()])])]), f()]);
  }
}), Lo = F({
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
      default: () => Ip
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
    const l = ne("color-picker"), o = m(() => {
      var k;
      return (k = e.modelValue) != null ? k : e.defaultValue;
    }), i = m(() => Hp(o.value || "")), [a, r] = Hn(i.value.a), [s, u] = Hn({
      h: i.value.h,
      s: i.value.s,
      v: i.value.v
    });
    be(() => i.value, (k) => {
      o.value !== g.value && (r(k.a), u({
        h: k.h,
        s: k.s,
        v: k.v
      }));
    });
    const c = m(() => {
      const k = ss(s.value.h, s.value.s, s.value.v), V = Hi(k.r, k.g, k.b);
      return {
        hsv: s.value,
        rgb: k,
        hex: V
      };
    }), f = m(() => {
      const {
        r: k,
        g: V,
        b: C
      } = c.value.rgb;
      return `rgba(${k}, ${V}, ${C}, ${a.value.toFixed(2)})`;
    }), g = m(() => {
      const {
        r: k,
        g: V,
        b: C
      } = c.value.rgb;
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${k}, ${V}, ${C}, ${a.value.toFixed(2)})` : `rgb(${k}, ${V}, ${C})` : a.value < 1 && !e.disabledAlpha ? `#${Wp(k, V, C, a.value)}` : `#${Hi(k, V, C)}`;
    });
    be(g, (k) => {
      t("update:modelValue", k), t("change", k);
    });
    const h = (k) => {
      !e.disabled && u(k);
    }, b = (k) => {
      !e.disabled && r(k);
    }, _ = (k) => {
      t("popup-visible-change", k, g.value);
    }, D = () => d("div", {
      class: {
        [l]: !0,
        [`${l}-size-${e.size}`]: e.size,
        [`${l}-disabled`]: e.disabled
      }
    }, [d("div", {
      class: `${l}-preview`,
      style: {
        backgroundColor: g.value
      }
    }, null), e.showText && d("div", {
      class: `${l}-value`
    }, [g.value]), d("input", {
      class: `${l}-input`,
      value: g.value,
      disabled: e.disabled
    }, null)]), T = () => d(yv, {
      color: c.value,
      alpha: a.value,
      colorString: f.value,
      historyColors: e.historyColors,
      presetColors: e.presetColors,
      showHistory: e.showHistory,
      showPreset: e.showPreset,
      disabled: e.disabled,
      disabledAlpha: e.disabledAlpha,
      format: e.format,
      onHsvChange: h,
      onAlphaChange: b
    }, null);
    return () => e.hideTrigger ? T() : d(Bl, Ve({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 4,
      disabled: e.disabled,
      onPopupVisibleChange: _
    }, e.triggerProps), {
      default: () => [n.default ? n.default() : D()],
      content: T
    });
  }
});
const Ma = Object.assign(Lo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Lo.name, Lo);
  }
}), Zi = (e, t) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const n = t.split(".");
  if (n.length === 0)
    return;
  let l = e;
  for (let o = 0; o < n.length; o++) {
    if (!Oe(l) && !Ae(l) || !n[o])
      return;
    if (o !== n.length - 1)
      l = l[n[o]];
    else
      return l[n[o]];
  }
}, Qi = (e, t, n, {
  addPath: l
} = {}) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const o = t.split(".");
  if (o.length === 0)
    return;
  let i = e;
  for (let a = 0; a < o.length; a++) {
    if (!Oe(i) && !Ae(i) || !o[a])
      return;
    a !== o.length - 1 ? (l && Qe(i[o[a]]) && (i[o[a]] = {}), i = i[o[a]]) : i[o[a]] = n;
  }
};
var _v = Object.defineProperty, $v = Object.defineProperties, wv = Object.getOwnPropertyDescriptors, Ji = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, er = (e, t, n) => t in e ? _v(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sv = (e, t) => {
  for (var n in t || (t = {}))
    kv.call(t, n) && er(e, n, t[n]);
  if (Ji)
    for (var n of Ji(t))
      Cv.call(t, n) && er(e, n, t[n]);
  return e;
}, Vv = (e, t) => $v(e, wv(t));
const Il = ["xxl", "xl", "lg", "md", "sm", "xs"], ul = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Gt = [], Ov = -1, cl = {};
const tr = {
  matchHandlers: {},
  dispatch(e, t) {
    return cl = e, Gt.length < 1 ? !1 : (Gt.forEach((n) => {
      n.func(cl, t);
    }), !0);
  },
  subscribe(e) {
    Gt.length === 0 && this.register();
    const t = (++Ov).toString();
    return Gt.push({
      token: t,
      func: e
    }), e(cl, null), t;
  },
  unsubscribe(e) {
    Gt = Gt.filter((t) => t.token !== e), Gt.length === 0 && this.unregister();
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
        this.dispatch(Vv(Sv({}, cl), {
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
function nr(e) {
  return Oe(e);
}
function da(e, t, n = !1) {
  const l = I({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), o = m(() => {
    let a = t;
    if (nr(e.value))
      for (let r = 0; r < Il.length; r++) {
        const s = Il[r];
        if ((l.value[s] || s === "xs" && n) && e.value[s] !== void 0) {
          a = e.value[s];
          break;
        }
      }
    else
      a = e.value;
    return a;
  });
  let i = "";
  return Ee(() => {
    i = tr.subscribe((a) => {
      nr(e.value) && (l.value = a);
    });
  }), Hl(() => {
    i && tr.unsubscribe(i);
  }), o;
}
function hs(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Ev(e, t) {
  t === void 0 && (t = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(l) {
    var o = l.el, i = l.top, a = l.left;
    o.scroll && n ? o.scroll({
      top: i,
      left: a,
      behavior: t
    }) : (o.scrollTop = i, o.scrollLeft = a);
  });
}
function xv(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : hs(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Bv(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (hs(t) && typeof t.behavior == "function")
    return t.behavior(n ? ri(e, t) : []);
  if (n) {
    var l = xv(t);
    return Ev(ri(e, l), l.behavior);
  }
}
const lr = ["success", "warning", "error", "validating"], Iv = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || lr.indexOf(l) > lr.indexOf(t)) && (t = e[n]);
  }
  return t;
}, Pv = (e) => {
  const t = [];
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && t.push(l);
  }
  return t;
}, ms = (e, t) => {
  const n = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${n}` : `${n}`;
};
var jv = Object.defineProperty, or = Object.getOwnPropertySymbols, Tv = Object.prototype.hasOwnProperty, Mv = Object.prototype.propertyIsEnumerable, ar = (e, t, n) => t in e ? jv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Dv = (e, t) => {
  for (var n in t || (t = {}))
    Tv.call(t, n) && ar(e, n, t[n]);
  if (or)
    for (var n of or(t))
      Mv.call(t, n) && ar(e, n, t[n]);
  return e;
};
const zv = F({
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
    const n = ne("form"), l = I(), {
      id: o,
      model: i,
      layout: a,
      disabled: r,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: c,
      labelColStyle: f,
      wrapperColStyle: g,
      size: h,
      rules: b
    } = we(e), {
      mergedSize: _
    } = yt(h), D = m(() => e.layout === "horizontal" && e.autoLabelWidth), T = [], k = [], V = je({}), C = m(() => Math.max(...Object.values(V))), M = (A) => {
      A && A.field && T.push(A);
    }, $ = (A) => {
      A && A.field && T.splice(T.indexOf(A), 1);
    }, O = (A) => {
      T.forEach((ee) => {
        A[ee.field] && ee.setField(A[ee.field]);
      });
    }, N = (A, ee) => {
      ee && V[ee] !== A && (V[ee] = A);
    }, Y = (A) => {
      A && delete V[A];
    }, R = (A) => {
      const ee = A ? [].concat(A) : [];
      T.forEach((B) => {
        (ee.length === 0 || ee.includes(B.field)) && B.resetField();
      });
    }, v = (A) => {
      const ee = A ? [].concat(A) : [];
      T.forEach((B) => {
        (ee.length === 0 || ee.includes(B.field)) && B.clearValidate();
      });
    }, E = (A, ee) => {
      const w = (l.value || document.body).querySelector(`#${ms(e.id, A)}`);
      w && Bv(w, Dv({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, ee));
    }, S = (A) => {
      const ee = Wl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      E(A, ee);
    }, z = (A) => {
      const ee = [];
      return T.forEach((B) => {
        ee.push(B.validate());
      }), Promise.all(ee).then((B) => {
        const w = {};
        let H = !1;
        return B.forEach((Q) => {
          Q && (H = !0, w[Q.field] = Q);
        }), H && e.scrollToFirstError && S(Object.keys(w)[0]), et(A) && A(H ? w : void 0), H ? w : void 0;
      });
    }, K = (A, ee) => {
      const B = [];
      for (const w of T)
        (Ae(A) && A.includes(w.field) || A === w.field) && B.push(w.validate());
      return Promise.all(B).then((w) => {
        const H = {};
        let Q = !1;
        return w.forEach((he) => {
          he && (Q = !0, H[he.field] = he);
        }), Q && e.scrollToFirstError && S(Object.keys(H)[0]), et(ee) && ee(Q ? H : void 0), Q ? H : void 0;
      });
    }, W = (A) => {
      const ee = [];
      T.forEach((B) => {
        ee.push(B.validate());
      }), Promise.all(ee).then((B) => {
        const w = {};
        let H = !1;
        B.forEach((Q) => {
          Q && (H = !0, w[Q.field] = Q);
        }), H ? (e.scrollToFirstError && S(Object.keys(w)[0]), t("submitFailed", {
          values: i.value,
          errors: w
        }, A)) : t("submitSuccess", i.value, A), t("submit", {
          values: i.value,
          errors: H ? w : void 0
        }, A);
      });
    };
    return Wt(xa, je({
      id: o,
      layout: a,
      disabled: r,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: c,
      labelColStyle: f,
      wrapperColStyle: g,
      model: i,
      size: _,
      rules: b,
      fields: T,
      touchedFields: k,
      addField: M,
      removeField: $,
      validateField: K,
      setLabelWidth: N,
      removeLabelWidth: Y,
      maxLabelWidth: C,
      autoLabelWidth: D
    })), {
      cls: m(() => [n, `${n}-layout-${e.layout}`, `${n}-size-${_.value}`, {
        [`${n}-auto-label-width`]: e.autoLabelWidth
      }]),
      formRef: l,
      handleSubmit: W,
      innerValidate: z,
      innerValidateField: K,
      innerResetFields: R,
      innerClearValidate: v,
      innerSetFields: O,
      innerScrollToField: E
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
function Av(e, t, n, l, o, i) {
  return y(), x("form", {
    ref: "formRef",
    class: G(e.cls),
    onSubmit: t[0] || (t[0] = ln((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [ie(e.$slots, "default")], 34);
}
var Fo = /* @__PURE__ */ de(zv, [["render", Av]]), Vn = Object.prototype.toString;
function Zl(e) {
  return Vn.call(e) === "[object Array]";
}
function xt(e) {
  return Vn.call(e) === "[object Object]";
}
function fa(e) {
  return Vn.call(e) === "[object String]";
}
function Lv(e) {
  return Vn.call(e) === "[object Number]" && e === e;
}
function Fv(e) {
  return Vn.call(e) === "[object Boolean]";
}
function pa(e) {
  return Vn.call(e) === "[object Function]";
}
function Nv(e) {
  return xt(e) && Object.keys(e).length === 0;
}
function Qt(e) {
  return e == null || e === "";
}
function gs(e) {
  return Zl(e) && !e.length;
}
var Da = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (pa(e) && pa(t))
    return e === t || e.toString() === t.toString();
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var n in e) {
    var l = Da(e[n], t[n]);
    if (!l)
      return !1;
  }
  return !0;
}, za = function(e, t) {
  var n = Object.assign({}, e);
  return Object.keys(t || {}).forEach(function(l) {
    var o = n[l], i = t == null ? void 0 : t[l];
    n[l] = xt(o) ? Object.assign(Object.assign({}, o), i) : i || o;
  }), n;
}, Rv = function(e, t) {
  for (var n = t.split("."), l = e, o = 0; o < n.length; o++)
    if (l = l && l[n[o]], l === void 0)
      return l;
  return l;
}, zt = "#{field} is not a #{type} type", qv = {
  required: "#{field} is required",
  type: {
    ip: zt,
    email: zt,
    url: zt,
    string: zt,
    number: zt,
    array: zt,
    object: zt,
    boolean: zt
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
  this.getValidateMsg = function(o, i) {
    i === void 0 && (i = {});
    var a = Object.assign(Object.assign({}, i), {
      value: l.obj,
      field: l.field,
      type: l.type
    }), r = Rv(l.validateMessages, o);
    return pa(r) ? r(a) : fa(r) ? r.replace(/\#\{.+?\}/g, function(s) {
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
    }) : r;
  }, xt(n) && fa(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = za(qv, n.validateMessages);
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
  if (Qt(this.obj) || gs(this.obj)) {
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
var Hv = /* @__PURE__ */ function(e) {
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
    var i = o instanceof RegExp;
    return i && (o.lastIndex = 0), this.validate(this.obj === void 0 || i && o.test(this.obj), this.getValidateMsg("string.match", {
      pattern: o
    }));
  }, n.uppercase.get = function() {
    return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this;
  }, n.lowercase.get = function() {
    return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this;
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Wv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "number"
    })), this.validate(o && o.strict ? Lv(this.obj) : !0, this.getValidateMsg("type.number"));
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
    return Qt(this.obj) ? this : this.validate(this.obj >= o, this.getValidateMsg("number.min", {
      min: o
    }));
  }, t.prototype.max = function(o) {
    return Qt(this.obj) ? this : this.validate(this.obj <= o, this.getValidateMsg("number.max", {
      max: o
    }));
  }, t.prototype.equal = function(o) {
    return Qt(this.obj) ? this : this.validate(this.obj === o, this.getValidateMsg("number.equal", {
      equal: o
    }));
  }, t.prototype.range = function(o, i) {
    return Qt(this.obj) ? this : this.validate(this.obj >= o && this.obj <= i, this.getValidateMsg("number.range", {
      min: o,
      max: i
    }));
  }, n.positive.get = function() {
    return Qt(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  }, n.negative.get = function() {
    return Qt(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Uv = /* @__PURE__ */ function(e) {
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
    var i = this;
    return this.obj ? this.validate(o.every(function(a) {
      return i.obj.indexOf(a) !== -1;
    }), this.getValidateMsg("array.includes", {
      value: this.obj,
      includes: o
    })) : this;
  }, t.prototype.deepEqual = function(o) {
    return this.obj ? this.validate(Da(this.obj, o), this.getValidateMsg("array.deepEqual", {
      value: this.obj,
      deepEqual: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(gs(this.obj), this.getValidateMsg("array.empty", {
      value: this.obj
    }));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Kv = /* @__PURE__ */ function(e) {
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
    return this.obj ? this.validate(Da(this.obj, o), this.getValidateMsg("object.deepEqual", {
      deepEqual: o
    })) : this;
  }, t.prototype.hasKeys = function(o) {
    var i = this;
    return this.obj ? this.validate(o.every(function(a) {
      return i.obj[a];
    }), this.getValidateMsg("object.hasKeys", {
      keys: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(Nv(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Yv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "boolean"
    })), this.validate(o && o.strict ? Fv(this.obj) : !0, this.getValidateMsg("type.boolean"));
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
}(_t), Gv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Xv = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), Zv = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, Qv = /* @__PURE__ */ function(e) {
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
    return this.type = "email", this.validate(this.obj === void 0 || Gv.test(this.obj), this.getValidateMsg("type.email"));
  }, n.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || Xv.test(this.obj), this.getValidateMsg("type.url"));
  }, n.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || Zv.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Jv = /* @__PURE__ */ function(e) {
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
    return function(o, i) {
      var a;
      if (o)
        return a = o(l.obj, l.addError.bind(l)), a && a.then ? (i && a.then(function() {
          i && i(l.error);
        }, function(r) {
          console.error(r);
        }), [a, l]) : (i && i(l.error), l.error);
    };
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Pl = function(e, t) {
  return new bs(e, Object.assign({
    field: "value"
  }, t));
};
Pl.globalConfig = {};
Pl.setGlobalConfig = function(e) {
  Pl.globalConfig = e || {};
};
var bs = function(t, n) {
  var l = Pl.globalConfig, o = Object.assign(Object.assign(Object.assign({}, l), n), {
    validateMessages: za(l.validateMessages, n.validateMessages)
  });
  this.string = new Hv(t, o), this.number = new Wv(t, o), this.array = new Uv(t, o), this.object = new Kv(t, o), this.boolean = new Yv(t, o), this.type = new Qv(t, o), this.custom = new Jv(t, o);
}, Aa = function(t, n) {
  n === void 0 && (n = {}), this.schema = t, this.options = n;
};
Aa.prototype.messages = function(t) {
  this.options = Object.assign(Object.assign({}, this.options), {
    validateMessages: za(this.options.validateMessages, t)
  });
};
Aa.prototype.validate = function(t, n) {
  var l = this;
  if (!xt(t))
    return;
  var o = [], i = null;
  function a(r, s) {
    i || (i = {}), (!i[r] || s.requiredError) && (i[r] = s);
  }
  this.schema && Object.keys(this.schema).forEach(function(r) {
    if (Zl(l.schema[r]))
      for (var s = function(f) {
        var g = l.schema[r][f], h = g.type, b = g.message;
        if (!h && !g.validator)
          throw "You must specify a type to field " + r + "!";
        var _ = Object.assign(Object.assign({}, l.options), {
          message: b,
          field: r
        });
        "ignoreEmptyString" in g && (_.ignoreEmptyString = g.ignoreEmptyString), "strict" in g && (_.strict = g.strict);
        var D = new bs(t[r], _), T = D.type[h] || null;
        if (!T)
          if (g.validator) {
            T = D.custom.validate(g.validator), Object.prototype.toString.call(T) === "[object Array]" && T[0].then ? o.push({
              function: T[0],
              _this: T[1],
              key: r
            }) : T && a(r, T);
            return;
          } else
            T = D[h];
        if (Object.keys(g).forEach(function(k) {
          g.required && (T = T.isRequired), k !== "message" && T[k] && g[k] && typeof T[k] == "object" && (T = T[k]), T[k] && g[k] !== void 0 && typeof T[k] == "function" && (T = T[k](g[k]));
        }), T.collect(function(k) {
          k && a(r, k);
        }), i)
          return "break";
      }, u = 0; u < l.schema[r].length; u++) {
        var c = s(u);
        if (c === "break")
          break;
      }
  }), o.length > 0 ? Promise.all(o.map(function(r) {
    return r.function;
  })).then(function() {
    o.forEach(function(r) {
      r._this.error && a(r.key, r._this.error);
    }), n && n(i);
  }) : n && n(i);
};
const ys = Symbol("RowContextInjectionKey"), eh = F({
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
      wrap: i
    } = we(e), a = ne("row"), r = m(() => ({
      [`${a}`]: !o.value,
      [`${a}-nowrap`]: !i.value,
      [`${a}-align-${n.value}`]: n.value,
      [`${a}-justify-${l.value}`]: l.value
    })), s = m(() => Array.isArray(t.value) ? t.value[0] : t.value), u = m(() => Array.isArray(t.value) ? t.value[1] : 0), c = da(s, 0), f = da(u, 0), g = m(() => {
      const b = {};
      if ((c.value || f.value) && !o.value) {
        const _ = -c.value / 2, D = -f.value / 2;
        _ && (b.marginLeft = `${_}px`, b.marginRight = `${_}px`), D && (b.marginTop = `${D}px`, b.marginBottom = `${D}px`);
      }
      return b;
    }), h = m(() => [c.value, f.value]);
    return Wt(ys, je({
      gutter: h,
      div: o
    })), {
      classNames: r,
      styles: g
    };
  }
});
function th(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(e.classNames),
    style: pe(e.styles)
  }, [ie(e.$slots, "default")], 6);
}
var nh = /* @__PURE__ */ de(eh, [["render", th]]);
function lh(e) {
  return m(() => {
    const {
      val: n,
      key: l,
      xs: o,
      sm: i,
      md: a,
      lg: r,
      xl: s,
      xxl: u
    } = e.value;
    if (!o && !i && !a && !r && !s && !u)
      return n;
    const c = {};
    return Il.forEach((f) => {
      const g = e.value[f];
      ge(g) ? c[f] = g : Oe(g) && ge(g[l]) && (c[f] = g[l]);
    }), c;
  });
}
var oh = Object.defineProperty, ir = Object.getOwnPropertySymbols, ah = Object.prototype.hasOwnProperty, ih = Object.prototype.propertyIsEnumerable, rr = (e, t, n) => t in e ? oh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, No = (e, t) => {
  for (var n in t || (t = {}))
    ah.call(t, n) && rr(e, n, t[n]);
  if (ir)
    for (var n of ir(t))
      ih.call(t, n) && rr(e, n, t[n]);
  return e;
};
function rh(e) {
  if (kt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || ge(e))
    return e;
  if (kt(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const sh = F({
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
    const t = ne("col"), n = Ge(ys, {}), l = m(() => rh(e.flex)), o = m(() => {
      const {
        div: f
      } = n, {
        span: g,
        offset: h,
        order: b,
        xs: _,
        sm: D,
        md: T,
        lg: k,
        xl: V,
        xxl: C
      } = e, M = {
        [`${t}`]: !f,
        [`${t}-order-${b}`]: b,
        [`${t}-${g}`]: !f && !_ && !D && !T && !k && !V && !C,
        [`${t}-offset-${h}`]: h && h > 0
      }, $ = {
        xs: _,
        sm: D,
        md: T,
        lg: k,
        xl: V,
        xxl: C
      };
      return Object.keys($).forEach((O) => {
        const N = $[O];
        N && ge(N) ? M[`${t}-${O}-${N}`] = !0 : N && Oe(N) && (M[`${t}-${O}-${N.span}`] = N.span, M[`${t}-${O}-offset-${N.offset}`] = N.offset, M[`${t}-${O}-order-${N.order}`] = N.order);
      }), M;
    }), i = m(() => l.value ? t : o.value), a = m(() => {
      const {
        gutter: f,
        div: g
      } = n, h = {};
      if (Array.isArray(f) && !g) {
        const b = f[0] && f[0] / 2 || 0, _ = f[1] && f[1] / 2 || 0;
        b && (h.paddingLeft = `${b}px`, h.paddingRight = `${b}px`), _ && (h.paddingTop = `${_}px`, h.paddingBottom = `${_}px`);
      }
      return h;
    }), r = m(() => l.value ? {
      flex: l.value
    } : {}), s = m(() => Xn(e, Il)), u = lh(m(() => No({
      val: e.span,
      key: "span"
    }, s.value))), c = da(u, 24, !0);
    return {
      visible: m(() => !!c.value),
      classNames: i,
      styles: m(() => No(No({}, a.value), r.value))
    };
  }
});
function uh(e, t, n, l, o, i) {
  return e.visible ? (y(), x("div", {
    key: 0,
    class: G(e.classNames),
    style: pe(e.styles)
  }, [ie(e.$slots, "default")], 6)) : te("v-if", !0);
}
var ch = /* @__PURE__ */ de(sh, [["render", uh]]), dh = Object.defineProperty, sr = Object.getOwnPropertySymbols, fh = Object.prototype.hasOwnProperty, ph = Object.prototype.propertyIsEnumerable, ur = (e, t, n) => t in e ? dh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, cr = (e, t) => {
  for (var n in t || (t = {}))
    fh.call(t, n) && ur(e, n, t[n]);
  if (sr)
    for (var n of sr(t))
      ph.call(t, n) && ur(e, n, t[n]);
  return e;
};
const vh = F({
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
    const n = ne("tooltip"), l = I(e.defaultPopupVisible), o = m(() => {
      var c;
      return (c = e.popupVisible) != null ? c : l.value;
    }), i = (c) => {
      l.value = c, t("update:popupVisible", c), t("popupVisibleChange", c);
    }, a = m(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), r = m(() => {
      if (e.backgroundColor || e.contentStyle)
        return cr({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = m(() => [`${n}-popup-arrow`, e.arrowClass]), u = m(() => {
      if (e.backgroundColor || e.arrowStyle)
        return cr({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: o,
      contentCls: a,
      computedContentStyle: r,
      arrowCls: s,
      computedArrowStyle: u,
      handlePopupVisibleChange: i
    };
  }
});
function hh(e, t, n, l, o, i) {
  const a = ue("Trigger");
  return y(), ce(a, {
    class: G(e.prefixCls),
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
    content: le(() => [ie(e.$slots, "content", {}, () => [ye(ve(e.content), 1)])]),
    default: le(() => [ie(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Ro = /* @__PURE__ */ de(vh, [["render", hh]]);
const Zn = Object.assign(Ro, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ro.name, Ro);
  }
}), mh = F({
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
    const n = ne("icon"), l = m(() => [n, `${n}-question-circle`, {
      [`${n}-spin`]: e.spin
    }]), o = m(() => {
      const a = {};
      return e.size && (a.fontSize = ge(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), gh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], bh = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1), yh = /* @__PURE__ */ p("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1), _h = [bh, yh];
function $h(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: pe(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, _h, 14, gh);
}
var qo = /* @__PURE__ */ de(mh, [["render", $h]]);
const wh = Object.assign(qo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + qo.name, qo);
  }
}), kh = F({
  name: "FormItemLabel",
  components: {
    ResizeObserver: xl,
    Tooltip: Zn,
    IconQuestionCircle: wh
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
    const e = ne("form-item-label"), t = Ge(xa, void 0), n = Kn(), l = I(), o = () => {
      l.value && ge(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    };
    return Ee(() => {
      l.value && ge(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    }), Ut(() => {
      t == null || t.removeLabelWidth(n == null ? void 0 : n.uid);
    }), {
      prefixCls: e,
      labelRef: l,
      handleResize: o
    };
  }
}), Ch = /* @__PURE__ */ p("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ p("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), Sh = [Ch], Vh = /* @__PURE__ */ p("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ p("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), Oh = [Vh];
function Eh(e, t, n, l, o, i) {
  const a = ue("icon-question-circle"), r = ue("Tooltip"), s = ue("ResizeObserver");
  return y(), ce(s, {
    onResize: e.handleResize
  }, {
    default: le(() => [(y(), ce(tn(e.component), Ve({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: le(() => [e.required && e.asteriskPosition === "start" ? (y(), x("strong", {
        key: 0,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Sh, 2)) : te("v-if", !0), ie(e.$slots, "default"), e.tooltip ? (y(), ce(r, {
        key: 1,
        content: e.tooltip
      }, {
        default: le(() => [d(a, {
          class: G(`${e.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : te("v-if", !0), e.required && e.asteriskPosition === "end" ? (y(), x("strong", {
        key: 2,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Oh, 2)) : te("v-if", !0), ye(" " + ve(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var xh = /* @__PURE__ */ de(kh, [["render", Eh]]);
const Bh = F({
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
      prefixCls: ne("form-item-message")
    };
  }
});
function Ih(e, t, n, l, o, i) {
  return e.error.length > 0 ? (y(!0), x(Te, {
    key: 0
  }, bt(e.error, (a) => (y(), ce(Sl, {
    key: a,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [p("div", {
      role: "alert",
      class: G([e.prefixCls])
    }, ve(a), 3)]),
    _: 2
  }, 1024))), 128)) : e.help || e.$slots.help ? (y(), ce(Sl, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [p("div", {
      class: G([e.prefixCls, `${e.prefixCls}-help`])
    }, [ie(e.$slots, "help", {}, () => [ye(ve(e.help), 1)])], 2)]),
    _: 3
  })) : te("v-if", !0);
}
var Ph = /* @__PURE__ */ de(Bh, [["render", Ih]]), jh = Object.defineProperty, jl = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable, dr = (e, t, n) => t in e ? jh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fr = (e, t) => {
  for (var n in t || (t = {}))
    _s.call(t, n) && dr(e, n, t[n]);
  if (jl)
    for (var n of jl(t))
      $s.call(t, n) && dr(e, n, t[n]);
  return e;
}, Th = (e, t) => {
  var n = {};
  for (var l in e)
    _s.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && jl)
    for (var l of jl(e))
      t.indexOf(l) < 0 && $s.call(e, l) && (n[l] = e[l]);
  return n;
};
const Mh = F({
  name: "FormItem",
  components: {
    ArcoRow: nh,
    ArcoCol: ch,
    FormItemLabel: xh,
    FormItemMessage: Ph
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
    const t = ne("form-item"), {
      field: n
    } = we(e), l = Ge(xa, {}), {
      autoLabelWidth: o,
      layout: i
    } = we(l), {
      i18nMessage: a
    } = $a(), r = m(() => {
      var B;
      const w = fr({}, (B = e.labelColProps) != null ? B : l.labelColProps);
      return e.labelColFlex ? w.flex = e.labelColFlex : l.autoLabelWidth && (w.flex = `${l.maxLabelWidth}px`), w;
    }), s = m(() => {
      var B;
      const w = fr({}, (B = e.wrapperColProps) != null ? B : l.wrapperColProps);
      return n.value && (w.id = ms(l.id, n.value)), (e.labelColFlex || l.autoLabelWidth) && (w.flex = "auto"), w;
    }), u = m(() => {
      var B;
      return (B = e.labelColStyle) != null ? B : l.labelColStyle;
    }), c = m(() => {
      var B;
      return (B = e.wrapperColStyle) != null ? B : l.wrapperColStyle;
    }), f = Zi(l.model, e.field), g = je({}), h = je({}), b = m(() => Iv(g)), _ = m(() => Pv(h)), D = I(!1), T = m(() => Zi(l.model, e.field)), k = m(() => {
      var B;
      return Boolean((B = e.disabled) != null ? B : l == null ? void 0 : l.disabled);
    }), V = m(() => {
      var B;
      return (B = e.validateStatus) != null ? B : b.value;
    }), C = m(() => V.value === "error"), M = m(() => {
      var B, w, H;
      const Q = [].concat((H = (w = e.rules) != null ? w : (B = l == null ? void 0 : l.rules) == null ? void 0 : B[e.field]) != null ? H : []), he = Q.some((_e) => _e.required);
      return e.required && !he ? [{
        required: !0
      }].concat(Q) : Q;
    }), $ = m(() => M.value.some((B) => B.required)), O = e.noStyle ? Ge(ra, void 0) : void 0, N = (B, {
      status: w,
      message: H
    }) => {
      g[B] = w, h[B] = H, e.noStyle && (O == null || O.updateValidateState(B, {
        status: w,
        message: H
      }));
    }, Y = m(() => e.feedback && V.value ? V.value : void 0), R = () => {
      var B;
      if (D.value)
        return Promise.resolve();
      const w = M.value;
      if (!n.value || w.length === 0)
        return b.value && S(), Promise.resolve();
      const H = n.value, Q = T.value;
      N(H, {
        status: "",
        message: ""
      });
      const he = new Aa({
        [H]: w.map((_e) => {
          var re = Th(_e, []);
          return !re.type && !re.validator && (re.type = "string"), re;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (B = a.value.form) == null ? void 0 : B.validateMessages
      });
      return new Promise((_e) => {
        he.validate({
          [H]: Q
        }, (re) => {
          var xe;
          const Se = Boolean(re == null ? void 0 : re[H]);
          N(H, {
            status: Se ? "error" : "",
            message: (xe = re == null ? void 0 : re[H].message) != null ? xe : ""
          });
          const Ie = Se ? {
            label: e.label,
            field: n.value,
            value: re[H].value,
            type: re[H].type,
            isRequiredError: Boolean(re[H].requiredError),
            message: re[H].message
          } : void 0;
          _e(Ie);
        });
      });
    }, v = m(() => [].concat(e.validateTrigger)), E = m(() => v.value.reduce((B, w) => {
      switch (w) {
        case "change":
          return B.onChange = () => {
            R();
          }, B;
        case "input":
          return B.onInput = () => {
            Le(() => {
              R();
            });
          }, B;
        case "focus":
          return B.onFocus = () => {
            R();
          }, B;
        case "blur":
          return B.onBlur = () => {
            R();
          }, B;
        default:
          return B;
      }
    }, {}));
    Wt(ra, je({
      eventHandlers: E,
      size: l && Cl(l, "size"),
      disabled: k,
      error: C,
      feedback: Y,
      updateValidateState: N
    }));
    const S = () => {
      n.value && N(n.value, {
        status: "",
        message: ""
      });
    }, W = je({
      field: n,
      disabled: k,
      error: C,
      validate: R,
      clearValidate: S,
      resetField: () => {
        S(), D.value = !0, l != null && l.model && n.value && Qi(l.model, n.value, f), Le(() => {
          D.value = !1;
        });
      },
      setField: (B) => {
        var w, H;
        n.value && (D.value = !0, "value" in B && (l != null && l.model) && n.value && Qi(l.model, n.value, B.value), (B.status || B.message) && N(n.value, {
          status: (w = B.status) != null ? w : "",
          message: (H = B.message) != null ? H : ""
        }), Le(() => {
          D.value = !1;
        }));
      }
    });
    Ee(() => {
      var B;
      W.field && ((B = l.addField) == null || B.call(l, W));
    }), Ut(() => {
      var B;
      W.field && ((B = l.removeField) == null || B.call(l, W));
    });
    const X = m(() => [t, `${t}-layout-${l.layout}`, {
      [`${t}-error`]: C.value,
      [`${t}-status-${V.value}`]: Boolean(V.value)
    }, e.rowClass]), A = m(() => [`${t}-label-col`, {
      [`${t}-label-col-left`]: l.labelAlign === "left",
      [`${t}-label-col-flex`]: l.autoLabelWidth || e.labelColFlex
    }]), ee = m(() => [`${t}-wrapper-col`, {
      [`${t}-wrapper-col-flex`]: !s.value
    }]);
    return {
      prefixCls: t,
      cls: X,
      isRequired: $,
      isError: C,
      finalMessage: _,
      mergedLabelCol: r,
      mergedWrapperCol: s,
      labelColCls: A,
      autoLabelWidth: o,
      layout: i,
      mergedLabelStyle: u,
      wrapperColCls: ee,
      mergedWrapperStyle: c
    };
  }
});
function Dh(e, t, n, l, o, i) {
  var a;
  const r = ue("FormItemLabel"), s = ue("ArcoCol"), u = ue("FormItemMessage"), c = ue("ArcoRow");
  return e.noStyle ? ie(e.$slots, "default", {
    key: 0
  }) : (y(), ce(c, Ve({
    key: 1,
    class: [e.cls, {
      [`${e.prefixCls}-has-help`]: Boolean((a = e.$slots.help) != null ? a : e.help)
    }],
    wrap: !(e.labelColFlex || e.autoLabelWidth),
    div: e.layout !== "horizontal" || e.hideLabel
  }, e.rowProps), {
    default: le(() => [e.hideLabel ? te("v-if", !0) : (y(), ce(s, Ve({
      key: 0,
      class: e.labelColCls,
      style: e.mergedLabelStyle
    }, e.mergedLabelCol), {
      default: le(() => [d(r, {
        required: e.hideAsterisk ? !1 : e.isRequired,
        "show-colon": e.showColon,
        "asterisk-position": e.asteriskPosition,
        component: e.labelComponent,
        attrs: e.labelAttrs,
        tooltip: e.tooltip
      }, {
        default: le(() => [e.$slots.label || e.label ? ie(e.$slots, "label", {
          key: 0
        }, () => [ye(ve(e.label), 1)]) : te("v-if", !0)]),
        _: 3
      }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]),
      _: 3
    }, 16, ["class", "style"])), d(s, Ve({
      class: e.wrapperColCls,
      style: e.mergedWrapperStyle
    }, e.mergedWrapperCol), {
      default: le(() => [p("div", {
        class: G(`${e.prefixCls}-content-wrapper`)
      }, [p("div", {
        class: G([`${e.prefixCls}-content`, {
          [`${e.prefixCls}-content-flex`]: e.contentFlex
        }, e.contentClass])
      }, [ie(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (y(), ce(u, {
        key: 0,
        error: e.finalMessage,
        help: e.help
      }, Pr({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: le(() => [ie(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : te("v-if", !0), e.$slots.extra || e.extra ? (y(), x("div", {
        key: 1,
        class: G(`${e.prefixCls}-extra`)
      }, [ie(e.$slots, "extra", {}, () => [ye(ve(e.extra), 1)])], 2)) : te("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var nn = /* @__PURE__ */ de(Mh, [["render", Dh]]);
const ws = Object.assign(Fo, {
  Item: nn,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Fo.name, Fo), e.component(n + nn.name, nn);
  }
}), zh = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Ah = (e) => {
  const t = {};
  return zh.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, Lh = F({
  name: "Textarea",
  components: {
    ResizeObserver: El,
    IconHover: dt,
    IconClose: rn
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
      modelValue: i
    } = we(e), a = ne("textarea"), {
      mergedDisabled: r,
      mergedError: s,
      eventHandlers: u
    } = ht({
      disabled: l,
      error: o
    }), c = I(), f = I(), g = I(), h = I(), b = I(e.defaultValue), _ = m(() => {
      var L;
      return (L = i.value) != null ? L : b.value;
    }), [D, T] = Qr(c);
    be(i, (L) => {
      (Qe(L) || Sn(L)) && (b.value = "");
    });
    const k = m(() => Oe(e.maxLength) && Boolean(e.maxLength.errorOnly)), V = m(() => Oe(e.maxLength) ? e.maxLength.length : e.maxLength), C = (L) => {
      var j;
      return et(e.wordLength) ? e.wordLength(L) : (j = L.length) != null ? j : 0;
    }, M = m(() => C(_.value)), $ = m(() => s.value || Boolean(V.value && k.value && M.value > V.value)), O = I(!1), N = I(!1), Y = m(() => e.allowClear && !r.value && _.value), R = I(!1), v = I(""), E = () => {
      D(), Le(() => {
        c.value && _.value !== c.value.value && (c.value.value = _.value, T());
      });
    }, S = (L, j = !0) => {
      var Z, oe;
      V.value && !k.value && C(L) > V.value && (L = (oe = (Z = e.wordSlice) == null ? void 0 : Z.call(e, L, V.value)) != null ? oe : L.slice(0, V.value)), b.value = L, j && t("update:modelValue", L), E();
    };
    let z = _.value;
    const K = (L, j) => {
      var Z, oe;
      L !== z && (z = L, t("change", L, j), (oe = (Z = u.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, j));
    }, W = (L) => {
      var j, Z;
      N.value = !0, z = _.value, t("focus", L), (Z = (j = u.value) == null ? void 0 : j.onFocus) == null || Z.call(j, L);
    }, X = (L) => {
      var j, Z;
      N.value = !1, t("blur", L), (Z = (j = u.value) == null ? void 0 : j.onBlur) == null || Z.call(j, L), K(_.value, L);
    }, A = (L) => {
      var j, Z;
      const {
        value: oe
      } = L.target;
      if (L.type === "compositionend") {
        if (R.value = !1, v.value = "", V.value && !k.value && _.value.length >= V.value && C(oe) > V.value) {
          E();
          return;
        }
        t("input", oe, L), S(oe), (Z = (j = u.value) == null ? void 0 : j.onInput) == null || Z.call(j, L);
      } else
        R.value = !0;
    }, ee = (L) => {
      var j, Z;
      const {
        value: oe
      } = L.target;
      if (R.value)
        v.value = oe;
      else {
        if (V.value && !k.value && _.value.length >= V.value && C(oe) > V.value && L.inputType === "insertText") {
          E();
          return;
        }
        t("input", oe, L), S(oe), (Z = (j = u.value) == null ? void 0 : j.onInput) == null || Z.call(j, L);
      }
    }, B = (L) => {
      S(""), K("", L), t("clear", L);
    };
    be(i, (L) => {
      L !== _.value && S(L ?? "", !1);
    });
    const w = (L) => Gn(n, qt), H = (L) => Xn(n, qt), Q = m(() => [`${a}-wrapper`, {
      [`${a}-focus`]: N.value,
      [`${a}-disabled`]: r.value,
      [`${a}-error`]: $.value,
      [`${a}-scroll`]: O.value
    }]);
    let he;
    const _e = I(0), re = I(0), xe = m(() => !Oe(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * _e.value + re.value), Se = m(() => !Oe(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * _e.value + re.value), Ie = () => {
      const L = Ah(he);
      _e.value = Number.parseInt(L["line-height"] || 0, 10), re.value = Number.parseInt(L["border-width"] || 0, 10) * 2 + Number.parseInt(L["padding-top"] || 0, 10) + Number.parseInt(L["padding-bottom"] || 0, 10), h.value = L, Le(() => {
        var j;
        const Z = (j = g.value) == null ? void 0 : j.offsetHeight;
        let oe = Z ?? 0, Me = "hidden";
        xe.value && oe < xe.value && (oe = xe.value), Se.value && oe > Se.value && (oe = Se.value, Me = "auto"), f.value = {
          height: `${oe}px`,
          resize: "none",
          overflow: Me
        };
      });
    };
    Ee(() => {
      c.value && (he = window.getComputedStyle(c.value), e.autoSize && Ie()), it();
    });
    const ft = () => {
      e.autoSize && g.value && Ie(), it();
    }, tt = (L) => {
      c.value && L.target !== c.value && (L.preventDefault(), c.value.focus());
    }, it = () => {
      c.value && (c.value.scrollHeight > c.value.offsetHeight ? O.value || (O.value = !0) : O.value && (O.value = !1));
    };
    return be(_, () => {
      e.autoSize && g.value && Ie(), it();
    }), {
      prefixCls: a,
      wrapperCls: Q,
      textareaRef: c,
      textareaStyle: f,
      mirrorRef: g,
      mirrorStyle: h,
      computedValue: _,
      showClearBtn: Y,
      valueLength: M,
      computedMaxLength: V,
      mergedDisabled: r,
      getWrapperAttrs: w,
      getTextareaAttrs: H,
      handleInput: ee,
      handleFocus: W,
      handleBlur: X,
      handleComposition: A,
      handleClear: B,
      handleResize: ft,
      handleMousedown: tt
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
}), Fh = ["disabled", "value", "placeholder"];
function Nh(e, t, n, l, o, i) {
  const a = ue("resize-observer"), r = ue("icon-close"), s = ue("icon-hover");
  return y(), x("div", Ve(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (y(), x("div", {
    key: 0,
    ref: "mirrorRef",
    class: G(`${e.prefixCls}-mirror`),
    style: pe(e.mirrorStyle)
  }, ve(`${e.computedValue}
`), 7)) : te("v-if", !0), d(a, {
    onResize: e.handleResize
  }, {
    default: le(() => [p("textarea", Ve({
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
    }), null, 16, Fh)]),
    _: 1
  }, 8, ["onResize"]), ie(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (y(), x("div", {
    key: 1,
    class: G(`${e.prefixCls}-word-limit`)
  }, ve(e.valueLength) + "/" + ve(e.computedMaxLength), 3)) : te("v-if", !0), e.showClearBtn ? (y(), x("div", {
    key: 2,
    class: G(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [d(s, null, {
    default: le(() => [d(r)]),
    _: 1
  })], 2)) : te("v-if", !0)], 16);
}
var Ho = /* @__PURE__ */ de(Lh, [["render", Nh]]);
const Rh = Object.assign(Ho, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ho.name, Ho);
  }
}), qh = F({
  name: "Message",
  components: {
    AIconHover: dt,
    IconInfoCircleFill: Zu,
    IconCheckCircleFill: Gr,
    IconExclamationCircleFill: Xr,
    IconCloseCircleFill: Zr,
    IconClose: rn,
    IconLoading: Kt
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
    const n = ne("message");
    let l = 0;
    const o = () => {
      t("close");
    }, i = () => {
      e.duration > 0 && (l = window.setTimeout(o, e.duration));
    }, a = () => {
      l && (window.clearTimeout(l), l = 0);
    };
    return Ee(() => {
      i();
    }), jt(() => {
      e.resetOnUpdate && (a(), i());
    }), Hl(() => {
      a();
    }), {
      handleMouseEnter: () => {
        e.resetOnHover && a();
      },
      handleMouseLeave: () => {
        e.resetOnHover && i();
      },
      prefixCls: n,
      handleClose: o
    };
  }
});
function Hh(e, t, n, l, o, i) {
  const a = ue("icon-info-circle-fill"), r = ue("icon-check-circle-fill"), s = ue("icon-exclamation-circle-fill"), u = ue("icon-close-circle-fill"), c = ue("icon-loading"), f = ue("icon-close"), g = ue("a-icon-hover");
  return y(), x("li", {
    role: "alert",
    class: G([e.prefixCls, `${e.prefixCls}-${e.type}`, {
      [`${e.prefixCls}-closable`]: e.closable
    }]),
    onMouseenter: t[1] || (t[1] = (...h) => e.handleMouseEnter && e.handleMouseEnter(...h)),
    onMouseleave: t[2] || (t[2] = (...h) => e.handleMouseLeave && e.handleMouseLeave(...h))
  }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (y(), x("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [ie(e.$slots, "icon", {}, () => [e.type === "info" ? (y(), ce(a, {
    key: 0
  })) : e.type === "success" ? (y(), ce(r, {
    key: 1
  })) : e.type === "warning" ? (y(), ce(s, {
    key: 2
  })) : e.type === "error" ? (y(), ce(u, {
    key: 3
  })) : e.type === "loading" ? (y(), ce(c, {
    key: 4
  })) : te("v-if", !0)])], 2)) : te("v-if", !0), p("span", {
    class: G(`${e.prefixCls}-content`)
  }, [ie(e.$slots, "default")], 2), e.closable ? (y(), x("span", {
    key: 1,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...h) => e.handleClose && e.handleClose(...h))
  }, [d(g, null, {
    default: le(() => [d(f)]),
    _: 1
  })], 2)) : te("v-if", !0)], 34);
}
var Wh = /* @__PURE__ */ de(qh, [["render", Hh]]);
function Uh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
var Kh = F({
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
    const n = ne("message-list"), {
      zIndex: l
    } = ts("message", {
      runOnMounted: !0
    });
    return () => {
      let o;
      return d(jr, {
        class: [n, `${n}-${e.position}`],
        name: "fade-message",
        tag: "ul",
        style: {
          zIndex: l.value
        },
        onAfterLeave: () => t.emit("afterClose")
      }, Uh(o = e.messages.map((i) => {
        const a = {
          default: ti(i.content),
          icon: ti(i.icon)
        };
        return d(Wh, {
          key: i.id,
          type: i.type,
          duration: i.duration,
          closable: i.closable,
          resetOnUpdate: i.resetOnUpdate,
          resetOnHover: i.resetOnHover,
          onClose: () => t.emit("close", i.id)
        }, a);
      })) ? o : {
        default: () => [o]
      });
    };
  }
}), Yh = Object.defineProperty, Gh = Object.defineProperties, Xh = Object.getOwnPropertyDescriptors, pr = Object.getOwnPropertySymbols, Zh = Object.prototype.hasOwnProperty, Qh = Object.prototype.propertyIsEnumerable, vr = (e, t, n) => t in e ? Yh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tl = (e, t) => {
  for (var n in t || (t = {}))
    Zh.call(t, n) && vr(e, n, t[n]);
  if (pr)
    for (var n of pr(t))
      Qh.call(t, n) && vr(e, n, t[n]);
  return e;
}, ks = (e, t) => Gh(e, Xh(t));
class Jh {
  constructor(t, n) {
    this.messageCount = 0, this.add = (i) => {
      var a;
      this.messageCount++;
      const r = (a = i.id) != null ? a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(r))
        return this.update(r, i);
      const s = je(Tl({
        id: r
      }, i));
      return this.messages.value.push(s), this.messageIds.add(r), {
        close: () => this.remove(r)
      };
    }, this.update = (i, a) => {
      for (let r = 0; r < this.messages.value.length; r++)
        if (this.messages.value[r].id === i) {
          const s = !Qe(a.duration);
          Object.assign(this.messages.value[r], ks(Tl({}, a), {
            id: i,
            resetOnUpdate: s
          }));
          break;
        }
      return {
        close: () => this.remove(i)
      };
    }, this.remove = (i) => {
      for (let a = 0; a < this.messages.value.length; a++) {
        const r = this.messages.value[a];
        if (r.id === i) {
          et(r.onClose) && r.onClose(i), this.messages.value.splice(a, 1), this.messageIds.delete(i);
          break;
        }
      }
    }, this.clear = () => {
      this.messages.value.splice(0);
    }, this.destroy = () => {
      this.messages.value.length === 0 && this.container && (Ya(null, this.container), document.body.removeChild(this.container), this.container = null, bn[this.position] = void 0);
    };
    const {
      position: l = "top"
    } = t;
    this.container = Du("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = I([]), this.position = l;
    const o = d(Kh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? Ye._context) && (o.appContext = n ?? Ye._context), Ya(o, this.container), document.body.appendChild(this.container);
  }
}
const bn = {}, Cs = [...pc, "loading", "normal"], bl = Cs.reduce((e, t) => (e[t] = (n, l) => {
  kt(n) && (n = {
    content: n
  });
  const o = Tl({
    type: t
  }, n), {
    position: i = "top"
  } = o;
  return bn[i] || (bn[i] = new Jh(o, l)), bn[i].add(o);
}, e), {});
bl.clear = (e) => {
  var t;
  e ? (t = bn[e]) == null || t.clear() : Object.values(bn).forEach((n) => n == null ? void 0 : n.clear());
};
const Ye = ks(Tl({}, bl), {
  install: (e) => {
    const t = {
      clear: bl.clear
    };
    for (const n of Cs)
      t[n] = (l, o = e._context) => bl[n](l, o);
    e.config.globalProperties.$message = t;
  },
  _context: null
}), em = F({
  name: "SliderButton",
  components: {
    Tooltip: Zn
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
    const n = ne("slider-btn"), l = I(!1), o = (f) => {
      e.disabled || (f.preventDefault(), l.value = !0, Et(window, "mousemove", i), Et(window, "mouseup", a), Et(window, "contextmenu", a), t("movestart"));
    }, i = (f) => {
      t("moving", f.clientX, f.clientY);
    }, a = () => {
      l.value = !1, $n(window, "mousemove", i), $n(window, "mouseup", a), t("moveend");
    }, r = m(() => [n]), s = m(() => {
      var f;
      return ((f = e.tooltipPosition) != null ? f : e.direction === "vertical") ? "right" : "top";
    }), u = m(() => {
      var f, g;
      return (g = (f = e.formatTooltip) == null ? void 0 : f.call(e, e.value)) != null ? g : `${e.value}`;
    }), c = m(() => e.showTooltip ? l.value ? !0 : void 0 : !1);
    return {
      prefixCls: n,
      cls: r,
      tooltipContent: u,
      mergedTooltipPosition: s,
      popupVisible: c,
      handleMouseDown: o
    };
  }
}), tm = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function nm(e, t, n, l, o, i) {
  const a = ue("tooltip");
  return y(), ce(a, {
    "popup-visible": e.popupVisible,
    position: e.mergedTooltipPosition,
    content: e.tooltipContent
  }, {
    default: le(() => [p("div", Ve(e.$attrs, {
      tabindex: "0",
      role: "slider",
      "aria-disabled": e.disabled,
      "aria-valuemax": e.max,
      "aria-valuemin": e.min,
      "aria-valuenow": e.value,
      "aria-valuetext": e.tooltipContent,
      class: e.cls,
      onMousedown: t[0] || (t[0] = (...r) => e.handleMouseDown && e.handleMouseDown(...r)),
      onClick: t[1] || (t[1] = ln(() => {
      }, ["stop"]))
    }), null, 16, tm)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var lm = /* @__PURE__ */ de(em, [["render", nm]]);
const Ft = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${on.round(l * 100, 2)}%`;
}, Jl = (e, t) => t === "vertical" ? {
  bottom: e
} : {
  left: e
}, om = F({
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
      prefixCls: ne("slider"),
      getStyle: (l) => Jl(Ft(l, [e.min, e.max]), e.direction)
    };
  }
});
function am(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(`${e.prefixCls}-dots`)
  }, [(y(!0), x(Te, null, bt(e.data, (a, r) => (y(), x("div", {
    key: r,
    class: G(`${e.prefixCls}-dot-wrapper`),
    style: pe(e.getStyle(a.key))
  }, [p("div", {
    class: G([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var im = /* @__PURE__ */ de(om, [["render", am]]);
const rm = F({
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
      prefixCls: ne("slider"),
      getStyle: (l) => Jl(Ft(l, [e.min, e.max]), e.direction)
    };
  }
});
function sm(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(`${e.prefixCls}-marks`)
  }, [(y(!0), x(Te, null, bt(e.data, (a, r) => (y(), x("div", {
    key: r,
    "aria-hidden": "true",
    class: G(`${e.prefixCls}-mark`),
    style: pe(e.getStyle(a.key))
  }, ve(a.content), 7))), 128))], 2);
}
var um = /* @__PURE__ */ de(rm, [["render", sm]]);
const cm = F({
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
    const t = ne("slider"), n = m(() => {
      const o = [], i = Math.floor((e.max - e.min) / e.step);
      for (let a = 0; a <= i; a++) {
        const r = on.plus(a * e.step, e.min);
        r <= e.min || r >= e.max || o.push({
          key: r,
          isActive: r >= e.value[0] && r <= e.value[1]
        });
      }
      return o;
    });
    return {
      prefixCls: t,
      steps: n,
      getStyle: (o) => Jl(Ft(o, [e.min, e.max]), e.direction)
    };
  }
});
function dm(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(`${e.prefixCls}-ticks`)
  }, [(y(!0), x(Te, null, bt(e.steps, (a, r) => (y(), x("div", {
    key: r,
    class: G([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: pe(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var fm = /* @__PURE__ */ de(cm, [["render", dm]]);
const pm = F({
  name: "SliderInput",
  components: {
    InputNumber: Vt
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
      prefixCls: ne("slider")
    };
  }
});
function vm(e, t, n, l, o, i) {
  const a = ue("input-number");
  return y(), x("div", {
    class: G(`${e.prefixCls}-input`)
  }, [e.range ? (y(), x(Te, {
    key: 0
  }, [d(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[0],
    "hide-button": "",
    onChange: t[0] || (t[0] = (r) => e.$emit("startChange", r))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"]), p("div", {
    class: G(`${e.prefixCls}-input-hyphens`)
  }, null, 2)], 64)) : te("v-if", !0), d(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[1],
    "hide-button": "",
    onChange: t[1] || (t[1] = (r) => e.$emit("endChange", r))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"])], 2);
}
var hm = /* @__PURE__ */ de(pm, [["render", vm]]);
const mm = F({
  name: "Slider",
  components: {
    SliderButton: lm,
    SliderDots: im,
    SliderMarks: um,
    SliderTicks: fm,
    SliderInput: hm
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
    } = we(e), l = ne("slider"), {
      mergedDisabled: o,
      eventHandlers: i
    } = ht({
      disabled: Cl(e, "disabled")
    }), a = I(null), r = I(), s = e.modelValue ? e.modelValue : e.defaultValue, u = I(Ae(s) ? s[0] : 0), c = I(Ae(s) ? s[1] : s);
    be(n, (v) => {
      var E, S, z, K, W;
      Ae(v) ? (u.value = (S = (E = v[0]) != null ? E : e.min) != null ? S : 0, c.value = (K = (z = v[1]) != null ? z : e.min) != null ? K : 0) : c.value = (W = v ?? e.min) != null ? W : 0;
    });
    const f = () => {
      var v, E;
      e.range ? (t("update:modelValue", [u.value, c.value]), t("change", [u.value, c.value])) : (t("update:modelValue", c.value), t("change", c.value)), (E = (v = i.value) == null ? void 0 : v.onChange) == null || E.call(v);
    }, g = (v) => {
      v = v ?? e.min, u.value = v, f();
    }, h = (v) => {
      v = v ?? e.min, c.value = v, f();
    }, b = m(() => {
      var v, E, S;
      return e.range ? Ae(e.modelValue) ? e.modelValue : [u.value, (v = e.modelValue) != null ? v : c.value] : Qe(e.modelValue) ? [u.value, c.value] : Ae(e.modelValue) ? [(E = e.min) != null ? E : 0, e.modelValue[1]] : [(S = e.min) != null ? S : 0, e.modelValue];
    }), _ = m(() => Object.keys(e.marks || {}).map((v) => {
      var E;
      const S = Number(v);
      return {
        key: S,
        content: (E = e.marks) == null ? void 0 : E[S],
        isActive: S >= b.value[0] && S <= b.value[1]
      };
    })), D = (v) => Jl(Ft(v, [e.min, e.max]), e.direction), T = I(!1), k = () => {
      T.value = !0, a.value && (r.value = a.value.getBoundingClientRect());
    };
    function V(v, E) {
      if (!r.value)
        return 0;
      const {
        left: S,
        top: z,
        width: K,
        height: W
      } = r.value, X = e.direction === "horizontal" ? K : W, A = X * e.step / (e.max - e.min);
      let ee = e.direction === "horizontal" ? v - S : z + W - E;
      ee < 0 && (ee = 0), ee > X && (ee = X);
      const B = Math.round(ee / A);
      return on.plus(e.min, on.times(B, e.step));
    }
    const C = (v, E) => {
      c.value = V(v, E), f();
    }, M = (v) => {
      if (o.value)
        return;
      const {
        clientX: E,
        clientY: S
      } = v;
      a.value && (r.value = a.value.getBoundingClientRect()), c.value = V(E, S), f();
    };
    function $([v, E]) {
      return v > E && ([v, E] = [E, v]), e.direction === "vertical" ? {
        bottom: Ft(v, [e.min, e.max]),
        top: Ft(e.max + e.min - E, [e.min, e.max])
      } : {
        left: Ft(v, [e.min, e.max]),
        right: Ft(e.max + e.min - E, [e.min, e.max])
      };
    }
    const O = (v, E) => {
      u.value = V(v, E), f();
    }, N = () => {
      T.value = !1;
    }, Y = m(() => [l, {
      [`${l}-vertical`]: e.direction === "vertical",
      [`${l}-with-marks`]: Boolean(e.marks)
    }]), R = m(() => [`${l}-track`, {
      [`${l}-track-disabled`]: o.value,
      [`${l}-track-vertical`]: e.direction === "vertical"
    }]);
    return {
      prefixCls: l,
      cls: Y,
      trackCls: R,
      trackRef: a,
      computedValue: b,
      mergedDisabled: o,
      markList: _,
      getBtnStyle: D,
      getBarStyle: $,
      handleClick: M,
      handleMoveStart: k,
      handleEndMoving: C,
      handleMoveEnd: N,
      handleStartMoving: O,
      handleStartChange: g,
      handleEndChange: h
    };
  }
});
function gm(e, t, n, l, o, i) {
  const a = ue("slider-ticks"), r = ue("slider-dots"), s = ue("slider-marks"), u = ue("slider-button"), c = ue("slider-input");
  return y(), x("div", {
    class: G(e.cls)
  }, [p("div", {
    ref: "trackRef",
    class: G(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [p("div", {
    class: G(`${e.prefixCls}-bar`),
    style: pe(e.getBarStyle(e.computedValue))
  }, null, 6), e.showTicks ? (y(), ce(a, {
    key: 0,
    value: e.computedValue,
    step: e.step,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["value", "step", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (y(), ce(r, {
    key: 1,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (y(), ce(s, {
    key: 2,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.range ? (y(), ce(u, {
    key: 3,
    style: pe(e.getBtnStyle(e.computedValue[0])),
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])) : te("v-if", !0), d(u, {
    style: pe(e.getBtnStyle(e.computedValue[1])),
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (y(), ce(c, {
    key: 0,
    "model-value": e.computedValue,
    min: e.min,
    max: e.max,
    step: e.step,
    range: e.range,
    disabled: e.disabled,
    onStartChange: e.handleStartChange,
    onEndChange: e.handleEndChange
  }, null, 8, ["model-value", "min", "max", "step", "range", "disabled", "onStartChange", "onEndChange"])) : te("v-if", !0)], 2);
}
var Wo = /* @__PURE__ */ de(mm, [["render", gm]]);
const Ss = Object.assign(Wo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Wo.name, Wo);
  }
});
var Uo = F({
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
    const n = ne("space"), l = m(() => {
      var r;
      return (r = e.align) != null ? r : e.direction === "horizontal" ? "center" : "";
    }), o = m(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${l.value}`]: l.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function i(r) {
      if (ge(r))
        return r;
      switch (r) {
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
    const a = (r) => {
      const s = {}, u = `${i(Ae(e.size) ? e.size[0] : e.size)}px`, c = `${i(Ae(e.size) ? e.size[1] : e.size)}px`;
      return r ? e.wrap ? {
        marginBottom: c
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = c), s);
    };
    return () => {
      var r;
      const s = hl((r = t.default) == null ? void 0 : r.call(t), !0).filter((u) => u.type !== eu);
      return d("div", {
        class: o.value
      }, [s.map((u, c) => {
        var f, g;
        const h = t.split && c > 0;
        return d(Te, {
          key: (f = u.key) != null ? f : `item-${c}`
        }, [h && d("div", {
          class: `${n}-item-split`,
          style: a(!1)
        }, [(g = t.split) == null ? void 0 : g.call(t)]), d("div", {
          class: `${n}-item`,
          style: a(c === s.length - 1)
        }, [u])]);
      })]);
    };
  }
});
const bm = Object.assign(Uo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Uo.name, Uo);
  }
}), ym = F({
  name: "Switch",
  components: {
    IconLoading: Kt
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
    } = we(e), i = ne("switch"), {
      mergedSize: a
    } = yt(l), {
      mergedDisabled: r,
      mergedSize: s,
      eventHandlers: u
    } = ht({
      disabled: n,
      size: a
    }), c = I(e.defaultChecked ? e.checkedValue : e.uncheckedValue), f = m(() => {
      var C;
      return ((C = e.modelValue) != null ? C : c.value) === e.checkedValue;
    }), g = I(e.loading), h = m(() => g.value || e.loading), b = (C, M) => {
      var $, O;
      c.value = C ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, M), (O = ($ = u.value) == null ? void 0 : $.onChange) == null || O.call($, M);
    }, _ = async (C) => {
      if (h.value || r.value)
        return;
      const M = !f.value, $ = M ? e.checkedValue : e.uncheckedValue, O = e.beforeChange;
      if (et(O)) {
        g.value = !0;
        try {
          const N = await O($);
          (N ?? !0) && b(M, C);
        } finally {
          g.value = !1;
        }
      } else
        b(M, C);
    }, D = (C) => {
      var M, $;
      t("focus", C), ($ = (M = u.value) == null ? void 0 : M.onFocus) == null || $.call(M, C);
    }, T = (C) => {
      var M, $;
      t("blur", C), ($ = (M = u.value) == null ? void 0 : M.onBlur) == null || $.call(M, C);
    };
    be(o, (C) => {
      (Qe(C) || Sn(C)) && (c.value = e.uncheckedValue);
    });
    const k = m(() => [i, `${i}-type-${e.type}`, {
      [`${i}-small`]: s.value === "small" || s.value === "mini",
      [`${i}-checked`]: f.value,
      [`${i}-disabled`]: r.value,
      [`${i}-loading`]: h.value,
      [`${i}-custom-color`]: e.type === "line" && (e.checkedColor || e.uncheckedColor)
    }]), V = m(() => {
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
      prefixCls: i,
      cls: k,
      mergedDisabled: r,
      buttonStyle: V,
      computedCheck: f,
      computedLoading: h,
      handleClick: _,
      handleFocus: D,
      handleBlur: T
    };
  }
}), _m = ["aria-checked", "disabled"];
function $m(e, t, n, l, o, i) {
  const a = ue("icon-loading");
  return y(), x("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: G(e.cls),
    style: pe(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r)),
    onFocus: t[1] || (t[1] = (...r) => e.handleFocus && e.handleFocus(...r)),
    onBlur: t[2] || (t[2] = (...r) => e.handleBlur && e.handleBlur(...r))
  }, [p("span", {
    class: G(`${e.prefixCls}-handle`)
  }, [p("span", {
    class: G(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? (y(), ce(a, {
    key: 0
  })) : (y(), x(Te, {
    key: 1
  }, [e.computedCheck ? ie(e.$slots, "checked-icon", {
    key: 0
  }) : ie(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), te("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (y(), x(Te, {
    key: 0
  }, [p("span", {
    class: G(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? ie(e.$slots, "checked", {
    key: 0
  }, () => [ye(ve(e.checkedText), 1)]) : ie(e.$slots, "unchecked", {
    key: 1
  }, () => [ye(ve(e.uncheckedText), 1)])], 2), p("span", {
    class: G(`${e.prefixCls}-text`)
  }, [e.computedCheck ? ie(e.$slots, "checked", {
    key: 0
  }, () => [ye(ve(e.checkedText), 1)]) : ie(e.$slots, "unchecked", {
    key: 1
  }, () => [ye(ve(e.uncheckedText), 1)])], 2)], 64)) : te("v-if", !0)], 46, _m);
}
var Ko = /* @__PURE__ */ de(ym, [["render", $m]]);
const $t = Object.assign(Ko, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ko.name, Ko);
  }
}), wm = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, La = Symbol("ArcoTabs"), km = F({
  name: "TabsTab",
  components: {
    IconHover: dt,
    IconClose: rn
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
    const n = ne("tabs-tab"), l = Ge(La, {}), o = (u) => {
      e.tab.disabled || t("click", e.tab.key, u);
    }, i = (u) => {
      u.key === "Enter" && o(u);
    }, a = m(() => Object.assign(l.trigger === "click" ? {
      onClick: o
    } : {
      onMouseover: o
    }, {
      onKeydown: i
    })), r = (u) => {
      e.tab.disabled || t("delete", e.tab.key, u);
    }, s = m(() => [n, {
      [`${n}-active`]: e.active,
      [`${n}-closable`]: e.editable && e.tab.closable,
      [`${n}-disabled`]: e.tab.disabled
    }]);
    return {
      prefixCls: n,
      cls: s,
      eventHandlers: a,
      handleDelete: r
    };
  }
});
function Cm(e, t, n, l, o, i) {
  const a = ue("icon-close"), r = ue("icon-hover");
  return y(), x("div", Ve({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [p("span", {
    class: G(`${e.prefixCls}-title`)
  }, [ie(e.$slots, "default")], 2), e.editable && e.tab.closable ? (y(), ce(r, {
    key: 0,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: ln(e.handleDelete, ["stop"])
  }, {
    default: le(() => [d(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : te("v-if", !0)], 16);
}
var Sm = /* @__PURE__ */ de(km, [["render", Cm]]);
function Vm(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
var hr = F({
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
    const n = ne("tabs-nav-button"), l = (a) => {
      e.disabled || t("click", e.type, a);
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? d(Uf, null, null) : d(Cp, null, null) : e.type === "next" ? d(Pa, null, null) : d(rs, null, null), i = m(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let a;
      return d("div", {
        class: i.value,
        onClick: l
      }, [d(dt, {
        disabled: e.disabled
      }, Vm(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const Om = F({
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
    } = we(e), n = ne("tabs-nav-ink"), l = I(0), o = I(0), i = m(() => e.direction === "vertical" ? {
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
    Ee(() => {
      Le(() => a());
    }), jt(() => {
      a();
    });
    const r = m(() => [n, {
      [`${n}-animation`]: e.animation,
      [`${n}-disabled`]: e.disabled
    }]);
    return {
      prefixCls: n,
      cls: r,
      style: i
    };
  }
});
function Em(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(e.cls),
    style: pe(e.style)
  }, null, 6);
}
var xm = /* @__PURE__ */ de(Om, [["render", Em]]), Bm = F({
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
      activeIndex: i,
      direction: a
    } = we(e), r = ne("tabs-nav"), s = I(), u = I(), c = I({}), f = m(() => {
      if (!Qe(o.value))
        return c.value[o.value];
    }), g = I(), h = m(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), b = I(!1), _ = I(0), D = I(0), T = I([]), k = I(0), V = () => {
      var B, w, H;
      return (H = a.value === "vertical" ? (B = s.value) == null ? void 0 : B.offsetHeight : (w = s.value) == null ? void 0 : w.offsetWidth) != null ? H : 0;
    }, C = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, M = () => l.value.map((B) => {
      const w = c.value[B.key];
      return a.value === "vertical" ? w.offsetTop + w.offsetHeight : w.offsetLeft + w.offsetWidth;
    }), $ = () => {
      b.value = O(), b.value ? (_.value = V(), D.value = C(), T.value = M(), k.value > D.value && (k.value = D.value)) : k.value = 0;
    }, O = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, N = (B) => {
      var w;
      return ((w = T.value[B - 1]) != null ? w : 0) >= k.value && T.value[B] <= k.value + _.value;
    }, Y = (B) => s.value ? B === "previous" ? k.value - _.value : k.value + _.value : 0, R = (B) => !s.value || !u.value || B < 0 ? 0 : B > D.value ? D.value : B, v = (B, w) => {
      t("click", B, w);
    }, E = (B, w) => {
      t("delete", B, w);
    }, S = (B) => {
      k.value = R(Y(B));
    }, z = () => {
      $(), g.value && g.value.$forceUpdate();
    };
    be(l, () => {
      Le(() => {
        $();
      });
    }), be(i, (B, w) => {
      Le(() => {
        var H;
        if (b.value)
          if (B >= w) {
            const Q = B < T.value.length - 1 ? B + 1 : B;
            N(Q) || (k.value = T.value[Q] - _.value);
          } else {
            const Q = B > 0 ? B - 1 : B;
            N(Q) || (k.value = (H = T.value[Q - 1]) != null ? H : 0);
          }
      });
    }), Ee(() => {
      $();
    });
    const K = () => !h.value || !e.showAddButton ? null : d("div", {
      class: `${r}-add-btn`,
      onClick: (B) => t("add", B)
    }, [d(dt, null, {
      default: () => [d(ps, null, null)]
    })]), W = m(() => [r, `${r}-${e.direction}`, `${r}-${e.position}`, `${r}-size-${e.size}`, `${r}-type-${e.type}`]), X = m(() => [`${r}-tab-list`, {
      [`${r}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), A = m(() => wm({
      direction: e.direction,
      type: e.type,
      offset: k.value
    })), ee = m(() => [`${r}-tab`, {
      [`${r}-tab-scroll`]: b.value
    }]);
    return () => {
      var B;
      return d("div", {
        class: W.value
      }, [b.value && d(hr, {
        type: "previous",
        direction: e.direction,
        disabled: k.value <= 0,
        onClick: S
      }, null), d(El, {
        onResize: () => $()
      }, {
        default: () => [d("div", {
          class: ee.value,
          ref: s
        }, [d(El, {
          onResize: z
        }, {
          default: () => [d("div", {
            ref: u,
            class: X.value,
            style: A.value
          }, [e.tabs.map((w, H) => d(Sm, {
            key: w.key,
            ref: (Q) => {
              Q != null && Q.$el && (c.value[w.key] = Q.$el);
            },
            active: w.key === o.value,
            tab: w,
            editable: e.editable,
            onClick: v,
            onDelete: E
          }, {
            default: () => {
              var Q, he, _e;
              return [(_e = (he = (Q = w.slots).title) == null ? void 0 : he.call(Q)) != null ? _e : w.title];
            }
          })), e.type === "line" && f.value && d(xm, {
            ref: g,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !b.value && K()])]
      }), b.value && d(hr, {
        type: "next",
        direction: e.direction,
        disabled: k.value >= D.value,
        onClick: S
      }, null), d("div", {
        class: `${r}-extra`
      }, [b.value && K(), (B = n.extra) == null ? void 0 : B.call(n)])]);
    };
  }
}), Yo = F({
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
      destroyOnHide: i,
      trigger: a
    } = we(e), r = ne("tabs"), {
      mergedSize: s
    } = yt(l), u = m(() => e.direction === "vertical" ? "left" : e.position), c = m(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: f,
      components: g
    } = Bp("TabPane"), h = je(/* @__PURE__ */ new Map()), b = m(() => {
      const v = [];
      return g.value.forEach((E) => {
        const S = h.get(E);
        S && v.push(S);
      }), v;
    }), _ = m(() => b.value.map((v) => v.key)), D = (v, E) => {
      h.set(v, E);
    }, T = (v) => {
      h.delete(v);
    }, k = I(e.defaultActiveKey), V = m(() => {
      var v;
      const E = (v = e.activeKey) != null ? v : k.value;
      return Qe(E) ? _.value[0] : E;
    }), C = m(() => {
      const v = _.value.indexOf(V.value);
      return v === -1 ? 0 : v;
    });
    Wt(La, je({
      lazyLoad: o,
      destroyOnHide: i,
      activeKey: V,
      addItem: D,
      removeItem: T,
      trigger: a
    }));
    const M = (v) => {
      v !== V.value && (k.value = v, t("update:activeKey", v), t("change", v));
    }, $ = (v, E) => {
      M(v), t("tabClick", v, E);
    }, O = (v) => {
      t("add", v), e.autoSwitch && Le(() => {
        const E = _.value[_.value.length - 1];
        M(E);
      });
    }, N = (v, E) => {
      t("delete", v, E);
    }, Y = () => d("div", {
      class: [`${r}-content`, {
        [`${r}-content-hide`]: e.hideContent
      }]
    }, [d("div", {
      class: [`${r}-content-list`, {
        [`${r}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${C.value * 100}%`
      }
    }, [f.value])]), R = m(() => [r, `${r}-${c.value}`, `${r}-${u.value}`, `${r}-type-${e.type}`, `${r}-size-${s.value}`, {
      [`${r}-justify`]: e.justify
    }]);
    return () => {
      var v;
      return f.value = (v = n.default) == null ? void 0 : v.call(n), d("div", {
        class: R.value
      }, [u.value === "bottom" && Y(), d(Bm, {
        tabs: b.value,
        activeKey: V.value,
        activeIndex: C.value,
        direction: c.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: $,
        onAdd: O,
        onDelete: N
      }, {
        extra: n.extra
      }), u.value !== "bottom" && Y()]);
    };
  }
}), Im = Object.defineProperty, mr = Object.getOwnPropertySymbols, Pm = Object.prototype.hasOwnProperty, jm = Object.prototype.propertyIsEnumerable, gr = (e, t, n) => t in e ? Im(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tm = (e, t) => {
  for (var n in t || (t = {}))
    Pm.call(t, n) && gr(e, n, t[n]);
  if (mr)
    for (var n of mr(t))
      jm.call(t, n) && gr(e, n, t[n]);
  return e;
};
const Mm = F({
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
      closable: i
    } = we(e), a = Kn(), r = ne("tabs"), s = Ge(La, {}), u = I(), c = m(() => a == null ? void 0 : a.vnode.key), f = m(() => c.value === s.activeKey), g = I(s.lazyLoad ? f.value : !0), h = je({
      key: c,
      title: l,
      disabled: o,
      closable: i,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, h)), Ut(() => {
      var b;
      a != null && a.uid && ((b = s.removeItem) == null || b.call(s, a.uid));
    }), be(f, (b) => {
      b ? g.value || (g.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (g.value = !1);
    }), jt(() => {
      h.slots = Tm({}, t);
    }), {
      prefixCls: r,
      active: f,
      itemRef: u,
      mounted: g
    };
  }
});
function Dm(e, t, n, l, o, i) {
  return y(), x("div", {
    ref: "itemRef",
    class: G([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (y(), x("div", {
    key: 0,
    class: G(`${e.prefixCls}-pane`)
  }, [ie(e.$slots, "default")], 2)) : te("v-if", !0)], 2);
}
var An = /* @__PURE__ */ de(Mm, [["render", Dm]]);
const br = Object.assign(Yo, {
  TabPane: An,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Yo.name, Yo), e.component(n + An.name, An);
  }
}), zm = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png",
  alt: "",
  class: "active"
})], -1), Am = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png",
  alt: "",
  style: {
    transform: "rotateZ(180deg)"
  },
  class: "active"
})], -1), Lm = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png",
  alt: "",
  style: {
    transform: "rotateZ(180deg)"
  },
  class: "active"
})], -1), Fm = /* @__PURE__ */ F({
  __name: "editor-bloack-operate",
  emits: ["operate"],
  setup(e, {
    emit: t
  }) {
    function n(l) {
      t("operate", l);
    }
    return (l, o) => {
      const i = Zn;
      return y(), x("div", {
        class: "editor-bloack-operate",
        onClick: o[3] || (o[3] = () => {
        })
      }, [p("div", {
        class: "editor-bloack-wrapper delBlock",
        onClick: o[0] || (o[0] = (a) => n("delBlock"))
      }, [d(i, {
        content: "删除",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: le(() => [zm]),
        _: 1
      })]), p("div", {
        class: "editor-bloack-wrapper upBlock",
        onClick: o[1] || (o[1] = (a) => n("upBlock"))
      }, [d(i, {
        content: "上移",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: le(() => [Am]),
        _: 1
      })]), p("div", {
        class: "editor-bloack-wrapper downBlock",
        onClick: o[2] || (o[2] = (a) => n("downBlock"))
      }, [d(i, {
        content: "下移",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: le(() => [Lm]),
        _: 1
      })])]);
    };
  }
});
const Ml = /* @__PURE__ */ F({
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
    },
    dragMove: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    // GridItem: VueGridLayout.GridItem,
    editorBloackOperate: Fm
  },
  setup(e, {
    emit: t
  }) {
    var s;
    let n = ot == null ? void 0 : ot.componentMap[e.block.componentKey];
    const l = m(() => {
      if (e.block.dragMode == "free") {
        let u = {
          position: "absolute",
          left: e.block.left + "px",
          top: e.block.top + "px",
          zIndex: e.block.zIndex,
          width: e.block.widthAdaption100 ? "100%" : "auto"
        };
        return n != null && n.editorBlockShellStyle ? n.editorBlockShellStyle(e.block, u) : u;
      } else if (e.block.dragMode == "updown" || e.block.dragMode == "default" || e.block.dragMode == "") {
        let u = {
          margin: "0 auto",
          width: "100%",
          // width: props.block.widthAdaption100
          //   ? "100%"
          //   : props.container.width + "px",
          position: "relative"
        };
        return n != null && n.editorBlockShellStyle ? n.editorBlockShellStyle(e.block, u) : u;
      }
      return {};
    }), o = I({});
    Ee(() => {
      e.block.adjustmentPosition && e.block.dragMode == "free" && (e.block.left = e.block.left - o.value.offsetWidth / 2, e.block.top = e.block.top - o.value.offsetHeight / 2, e.block.adjustmentPosition = !1, e.block.width = o.value.offsetWidth, e.block.height = o.value.offsetHeight);
    });
    let i = m(() => [e.priview ? "editor-bloack-priview" : "editor-bloack", e.block.focus && !e.priview ? "editor-bloack-focus" : "", e.dragMove ? "editor-bloack-dragmove" : ""]);
    function a(u) {
      t(u);
    }
    let r = "";
    return (s = e == null ? void 0 : e.block) != null && s.id && (r = "block" + e.block.id.replace("$", "")), () => e.block.dragMode == "free" ? d("div", {
      class: i.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(ue("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : e.block.dragMode == "default" || e.block.dragMode == "updown" || e.block.dragMode == "" ? d("div", {
      class: i.value,
      style: l.value,
      ref: o,
      "data-index": e.index,
      id: r
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(ue("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : d("div", {
      style: {
        backgroundColor: "gray"
      }
    }, [d(ue("grid-item"), {
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
function Nm(e) {
  const t = je({
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
    const a = (r) => {
      if (document.activeElement !== document.body)
        return;
      const {
        keyCode: s,
        shiftKey: u,
        altKey: c,
        ctrlKey: f
      } = r;
      let g = [];
      f && g.push("ctrl"), u && g.push("shift"), c && g.push("alt"), g.push(n[s]);
      let h = g.join("+");
      t.commandArray.forEach((b) => {
        let {
          keyboard: _,
          name: D
        } = b;
        _ && (typeof _ == "string" && (_ = [_]), _ = _.map((T) => T.replace(/\s+/g, "")), _ != null && _.includes(h) && (t.commandMap[D](), r.stopPropagation()));
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
  function i(a) {
    if (t.commandArray.push(a), a.init) {
      let r = a.init();
      r && typeof r == "function" ? t.commandArray.push(r) : console.error(`为了性能优化，请在${a.name}这个命令中加入销毁函数！`);
    }
    t.commandMap[a.name] = (...r) => {
      if (a.disabled) {
        alert("该快捷命令已禁用！");
        return;
      }
      const {
        undo: s,
        redo: u
      } = a.excute(...r);
      u && u(), a.followQueue != !1 && (t.queue.length > 0 && t.queue.slice(0, t.current), t.queue.push({
        undo: s,
        redo: u
      }), t.current++);
    };
  }
  return i({
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
            undo: r
          } = t.queue[a];
          r && (r(), t.current -= 1);
        }
      };
    }
  }), i({
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
    registor: i,
    init: o
  };
}
class Vs {
  constructor() {
    Ka(this, "Listener");
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
new Vs();
let Bt = new Vs();
const Dl = {
  on: function(e) {
    Bt.on("dragstart", e);
  },
  emit: function(...e) {
    Bt.emit("dragstart", ...e);
  },
  off: function(e) {
    Bt.off("dragstart", e);
  }
}, zl = {
  on: function(e) {
    Bt.on("dragend", e);
  },
  emit: function(...e) {
    Bt.emit("dragend", ...e);
  },
  off: function(e) {
    Bt.off("dragend", e);
  }
}, Os = {
  on: function(e) {
    Bt.on("registryEventer", e);
  },
  emit: function(...e) {
    Bt.emit("registryEventer", ...e);
  },
  off: function(e) {
    Bt.off("registryEventer", e);
  }
};
function Ne(e) {
  if (e && typeof e == "object") {
    if (typeof e == "function") {
      let l = e.bind(null);
      return l.prototype = Ne(e.prototype), l;
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
          t[l] = Ne(e[l]);
        return t;
      case "[object Object]":
        var n = {};
        for (let l in e)
          n[l] = Ne(e[l]);
        return n;
    }
  } else
    return e;
}
function Rm(e, t, n, l) {
  const o = [{
    label: "删除",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726286985855114a17262869858559088_dl.png",
    handler: () => {
      var i;
      (i = t.value.focusBlock) != null && i.length && e.delete();
    },
    tip: "delete"
  }, {
    label: "清空画布",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262860792458a37172628607924683951_clean.png",
    handler: () => {
      e.clear();
    },
    tip: "ctrl + alt + d"
  }, {
    label: "撤销",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726286118186292f172628611818673562_undo.png",
    handler: e.undo,
    tip: "ctrl + z"
  }, {
    label: "重做",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262861296832676172628612968393295_redo.png",
    handler: e.redo,
    tip: "ctrl + y"
  }, {
    label: "上移",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262861408486588172628614084821011_up.png",
    handler: e.up,
    tip: "alt + up"
  }, {
    label: "下移",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262861510304f96172628615103083185_down.png",
    handler: e.down,
    tip: "alt + down"
  }];
  return n && o.push({
    label: "导出json",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17263054455271570172630544552753846_export.png",
    handler: () => {
      Ye.success("导出成功，请在控制台查看！"), console.log(l), console.log(JSON.stringify(l.modelValue.blocks));
    },
    tip: ""
  }), o;
}
function yr(e, t) {
  let n = e.componentKey;
  return !t.find((l) => l.componentKey === n);
}
function _r(e, t, n) {
  const l = e[t];
  return e[t] = e[n], e[n] = l, e;
}
function qm({
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
  let o = Nm(l);
  return o.registor({
    name: "delete",
    keyboard: ["delete", "ctrl + d"],
    excute(i) {
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
          if (i) {
            a.after = n.value.blocks, a.before = a.after.filter((u) => u != i), t(a.before);
            return;
          }
          const {
            blurBlock: r,
            focusBlock: s
          } = e.value;
          if (!s.length) {
            console.warn("暂无需要删除的组件");
            return;
          }
          a.after = n.value.blocks, a.before = r, t(r);
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
      const i = {
        dragstart: () => {
          this.data.before = Ne(n.value.blocks || []);
        },
        dragend: () => {
          o.state.commandMap.drag();
        }
      };
      return Dl.on(i.dragstart), zl.on(i.dragend), () => {
        Dl.off(i.dragstart), zl.off(i.dragend);
      };
    },
    excute() {
      let i = Ne(this.data.before), a = Ne(n.value.blocks || []);
      return {
        undo() {
          t(i);
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
          i.before = Ne(n.value.blocks || []), i.after = [], t(i.after);
        }
      };
    }
  }), o.registor({
    name: "top",
    keyboard: ["ctrl + o"],
    excute() {
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
          const {
            focusBlock: a
          } = e.value;
          if (!a.length) {
            console.warn("暂无需要置顶的组件");
            return;
          }
          i.before = Ne(n.value.blocks);
          let r = n.value.blocks.reduce((s, u) => Math.max(u.zIndex, s), -1 / 0) + 1;
          a.forEach((s) => {
            s.zIndex = r;
          }), i.after = n.value.blocks, t(n.value.blocks);
        }
      };
    }
  }), o.registor({
    name: "bottom",
    keyboard: ["ctrl + b"],
    excute() {
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
          const {
            focusBlock: a
          } = e.value;
          if (!a.length) {
            console.warn("暂无需要置顶的组件");
            return;
          }
          i.before = Ne(n.value.blocks);
          let r = n.value.blocks.reduce((s, u) => (u.zIndex <= 0 && (u.zIndex += Math.abs(u.zIndex)), u.zIndex += 1, Math.min(u.zIndex, s)), 1 / 0) - 1;
          a.forEach((s) => {
            s.zIndex = r;
          }), i.after = n.value.blocks, t(n.value.blocks);
        }
      };
    }
  }), o.registor({
    name: "add",
    excute(i, a) {
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
          if (a === void 0) {
            let s = n.value.blocks;
            r.before = Ne(s), s.push(i), r.after = s, t(r.after);
          } else {
            let s = n.value.blocks;
            r.before = Ne(s), s.splice(a, 0, i), r.after = s, t(r.after);
          }
        }
      };
    }
  }), o.registor({
    name: "unshiftadd",
    excute(i, a) {
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
          if (a === void 0) {
            let s = n.value.blocks;
            r.before = Ne(s), s.unshift(i), r.after = s, t(r.after);
          } else {
            let s = n.value.blocks;
            r.before = Ne(s), s.splice(a - 1, 0, i), r.after = s, t(r.after);
          }
        }
      };
    }
  }), o.registor({
    name: "transposition",
    excute(i, a) {
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
          let s = n.value.blocks;
          r.before = Ne(s);
          let u = s.findIndex((f) => f.id == i.id), c = s.findIndex((f) => f.id == a.id);
          u < c ? s = _r(s, u, c - 1) : s = _r(s, u, c), t(s), r.after = Ne(s);
        }
      };
    }
  }), o.registor({
    name: "up",
    // 向上移动
    keyboard: ["ctrl + up", "alt + up"],
    excute() {
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
          let a = n.value.blocks;
          if (a.length <= 1) {
            Ye.warning("元素不需要移动！");
            return;
          }
          let r = a.findIndex((c) => c.focus);
          if (r < 0) {
            Ye.warning("当前没有要移动的元素！");
            return;
          }
          if (r == 0) {
            Ye.warning("移动无效！");
            return;
          }
          i.before = Ne(a);
          let s = a[r - 1], u = a[r];
          a[r] = s, a[r - 1] = u, i.after = a, t(i.after);
        }
      };
    }
  }), o.registor({
    name: "down",
    // 向下移动
    keyboard: ["ctrl + down", "alt + down"],
    excute() {
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
          let a = n.value.blocks;
          if (a.length <= 1) {
            Ye.warning("移动无效！");
            return;
          }
          let r = a.findIndex((c) => c.focus);
          if (r < 0) {
            Ye.warning("当前没有要移动的元素！");
            return;
          }
          if (r == a.length - 1) {
            Ye.warning("移动的无效！");
            return;
          }
          i.before = Ne(a);
          let s = a[r + 1], u = a[r];
          a[r] = s, a[r + 1] = u, i.after = a, t(i.after);
        }
      };
    }
  }), o.init(), {
    // 可以弄一些默认导出
    undo: () => o.state.commandMap.undo(),
    // 撤销
    redo: () => o.state.commandMap.redo(),
    // 重做
    delete: (...i) => o.state.commandMap.delete(...i),
    // 删除
    drag: () => o.state.commandMap.drag(),
    // 拖拽
    clear: () => o.state.commandMap.clear(),
    // 清空
    add: (...i) => o.state.commandMap.add(...i),
    // 添加一个新元素（默认方向向后插入）
    unshiftadd: (...i) => o.state.commandMap.unshiftadd(...i),
    // 添加一个新元素（默认方向向前插入）
    up: (...i) => o.state.commandMap.up(...i),
    // 元素向上移动
    transposition: (...i) => o.state.commandMap.transposition(...i),
    // 元素向上移动
    down: (...i) => o.state.commandMap.down(...i)
    // 元素向下移动
  };
}
const Hm = (e) => new Promise((t, n) => {
  var l;
  if ((l = window == null ? void 0 : window.visualSystem) != null && l.fileUploadHandler)
    Ye.info("文件上传中，请稍等"), window.visualSystem.fileUploadHandler(e).then((o) => {
      t(o.path), Ye.success("文件上传成功！");
    }).catch((o) => {
      Ye.error("文件上传失败！"), n(o);
    });
  else {
    const o = new FileReader();
    o.readAsDataURL(e), o.onload = () => {
      t(o.result);
    }, o.onerror = (i) => {
      n(i);
    };
  }
}), Wm = (e) => (He("data-v-b129c912"), e = e(), We(), e), Um = {
  class: "img-upload-container w100"
}, Km = {
  key: 0,
  class: "real-img w100"
}, Ym = ["src"], Gm = /* @__PURE__ */ Wm(() => /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), Xm = [Gm], Zm = /* @__PURE__ */ F({
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
    let n = I(!1);
    const l = {
      fileChange(o) {
        let i = o.target.files[0];
        n.value = !0, Hm(i).then((a) => {
          t("update:modelValue", a), t("change", a), n.value = !1;
        }).catch(() => {
          n.value = !1;
        });
      },
      del() {
        t("update:modelValue", ""), t("change", "");
      }
    };
    return (o, i) => {
      const a = wn;
      return y(), x("div", Um, [e.modelValue ? (y(), x("div", Km, [p("img", {
        src: e.modelValue,
        alt: ""
      }, null, 8, Ym), p("div", {
        class: "real-close",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...r) => l.del && l.del(...r))
      }, Xm)])) : te("", !0), d(a, {
        style: {
          width: "100%"
        },
        class: "file-btn",
        loading: Tr(n)
      }, {
        default: le(() => [ye(ve(e.modelValue ? "替换图片" : "上传图片") + " ", 1), p("input", {
          type: "file",
          class: "file-input",
          accept: "image/*",
          onChange: i[1] || (i[1] = //@ts-ignore
          (...r) => l.fileChange && l.fileChange(...r))
        }, null, 32)]),
        _: 1
      }, 8, ["loading"])]);
    };
  }
});
const Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Fa = /* @__PURE__ */ Ce(Zm, [["__scopeId", "data-v-b129c912"]]), Qm = {
  key: 0
}, Jm = {
  key: 1
}, eg = {
  key: 0,
  class: "ml12"
}, tg = {
  key: 2
}, ng = {
  key: 3
}, lg = {
  key: 0,
  class: "ml12"
}, og = {
  key: 4,
  class: "w100"
}, ag = {
  key: 0,
  class: "ml12"
}, ig = {
  key: 5,
  class: "w100"
}, rg = {
  key: 6,
  class: "w100"
}, sg = /* @__PURE__ */ F({
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
      const l = Ma, o = Yt, i = Rh, a = Vt, r = Ss, s = bm, u = gn, c = ja, f = nn, g = ws;
      return y(), ce(g, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: le(() => [(y(!0), x(Te, null, bt(e.editorControlView, (h, b) => (y(), ce(f, {
          label: h.label,
          key: b
        }, {
          default: le(() => {
            var _, D, T, k, V, C, M, $, O, N, Y, R, v, E;
            return [h.type == "color" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", Qm, [d(l, {
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              "show-history": "",
              "show-preset": "",
              showText: "",
              disabledAlpha: "",
              disabled: !!((_ = e.currentBlock.props[h.key]) != null && _.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])) : te("", !0), h.type == "input" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", Jm, [d(o, {
              style: {
                width: "250px"
              },
              placeholder: `请输入${h.label}`,
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              disabled: !!((D = e.currentBlock.props[h.key]) != null && D.disabled)
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (T = e.currentBlock.props[h.key]) != null && T.unit ? (y(), x("span", eg, ve((k = e.currentBlock.props[h.key]) == null ? void 0 : k.unit), 1)) : te("", !0)])) : te("", !0), h.type == "textarea" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", tg, [d(i, {
              "auto-size": {
                minRows: 2,
                maxRows: 6
              },
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              style: {
                width: "250px"
              },
              placeholder: `请输入${h.label}`,
              "allow-clear": "",
              disabled: !!((V = e.currentBlock.props[h.key]) != null && V.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])])) : te("", !0), h.type == "number" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", ng, [d(a, {
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              style: {
                width: "150px"
              },
              placeholder: `请输入${h.label}`,
              disabled: !!((C = e.currentBlock.props[h.key]) != null && C.disabled),
              min: (M = e.currentBlock.props[h.key]) != null && M.min ? (($ = e.currentBlock.props[h.key]) == null ? void 0 : $.min) * 1 : 0,
              max: (O = e.currentBlock.props[h.key]) != null && O.max ? ((N = e.currentBlock.props[h.key]) == null ? void 0 : N.max) * 1 : 100,
              mode: "button",
              size: "large"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (Y = e.currentBlock.props[h.key]) != null && Y.unit ? (y(), x("span", lg, ve((R = e.currentBlock.props[h.key]) == null ? void 0 : R.unit), 1)) : te("", !0)])) : te("", !0), h.type == "slider" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", og, [d(s, {
              size: "large"
            }, {
              default: le(() => {
                var S, z, K, W, X;
                return [d(r, {
                  min: (S = e.currentBlock.props[h.key]) != null && S.min ? ((z = e.currentBlock.props[h.key]) == null ? void 0 : z.min) * 1 : 0,
                  max: (K = e.currentBlock.props[h.key]) != null && K.max ? ((W = e.currentBlock.props[h.key]) == null ? void 0 : W.max) * 1 : 100,
                  disabled: !!((X = e.currentBlock.props[h.key]) != null && X.disabled),
                  modelValue: e.currentBlock.props[h.key].defaultValue,
                  "onUpdate:modelValue": (A) => e.currentBlock.props[h.key].defaultValue = A,
                  style: {
                    width: "250px",
                    display: "flex"
                  },
                  "show-input": ""
                }, null, 8, ["min", "max", "disabled", "modelValue", "onUpdate:modelValue"])];
              }),
              _: 2
            }, 1024), (v = e.currentBlock.props[h.key]) != null && v.unit ? (y(), x("span", ag, ve((E = e.currentBlock.props[h.key]) == null ? void 0 : E.unit), 1)) : te("", !0)])) : te("", !0), h.type == "imgUpload" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", ig, [d(Fa, {
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : te("", !0), h.type == "select" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", rg, [d(c, {
              style: {
                width: "250px"
              },
              placeholder: `请选择${h.label}`,
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              "allow-clear": ""
            }, {
              default: le(() => [(y(!0), x(Te, null, bt(e.currentBlock.props[h.key].options, (S, z) => (y(), ce(u, {
                key: z,
                value: S.value
              }, {
                default: le(() => [ye(ve(S.name), 1)]),
                _: 2
              }, 1032, ["value"]))), 128))]),
              _: 2
            }, 1032, ["placeholder", "modelValue", "onUpdate:modelValue"])])) : te("", !0)];
          }),
          _: 2
        }, 1032, ["label"]))), 128))]),
        _: 1
      });
    };
  }
});
const ug = /* @__PURE__ */ Ce(sg, [["__scopeId", "data-v-5efd1334"]]);
function cg(e, t, n, l) {
  let o = e(), i = t.value.cBlock || {}, a = i.props ? i.props : {}, r = I([]);
  Object.keys(a).forEach((c) => {
    a[c].type && (a[c].key = c, r.value.push(a[c]));
  });
  let s = d(ug), u = d(Fa);
  return d("div", {
    style: "height: 100%"
  }, [t.value.focusBlock.length ? d("div", {
    class: "control-container"
  }, [d(br, {
    type: "line",
    size: "large",
    key: 2
  }, {
    default: () => [d(An, {
      key: "1",
      title: "组件设置"
    }, {
      default: () => [d("div", {
        class: "control-form-comtainer"
      }, [d(s, {
        editorControlView: r.value,
        currentBlock: i
      }, null), d("div", null, [o])])]
    })]
  })]) : d("div", {
    class: "control-container"
  }, [d(br, {
    type: "line",
    size: "large",
    style: "height: 100%",
    key: 1
  }, {
    default: () => [d(An, {
      key: "0",
      title: "页面基础设置"
    }, {
      default: () => [d("div", {
        class: "control-form-comtainer"
      }, [d(ws, {
        style: {
          width: "100%"
        },
        "label-align": "left",
        "auto-label-width": !0,
        model: {},
        layout: "vertical"
      }, {
        default: () => [d(nn, {
          tooltip: "设置页面缩放大小，不会影响h5端",
          label: "页面缩放"
        }, {
          default: () => [d(Vt, {
            placeholder: "请输入正整数",
            mode: "button",
            style: "width: 140px;text-align: center;",
            modelValue: n.container.scale,
            "onUpdate:modelValue": (c) => n.container.scale = c,
            min: 40,
            max: 200
          }, null), d("span", {
            style: "margin-left: 6px"
          }, [ye("%")])]
        }), d(nn, {
          label: "背景色"
        }, {
          default: () => [d(Ma, {
            modelValue: n.container.backgroundColor,
            "onUpdate:modelValue": (c) => n.container.backgroundColor = c,
            showText: !0,
            disabledAlpha: !0
          }, null)]
        }), d(nn, {
          label: "背景图"
        }, {
          default: () => [d(u, {
            modelValue: n.container.backgroundImage,
            "onUpdate:modelValue": (c) => n.container.backgroundImage = c
          }, null)]
        })]
      })])]
    })]
  })])]);
}
const $r = /* @__PURE__ */ F({
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
    },
    builtInComsControlView: {
      type: Boolean,
      default: !1
    },
    builtInComs: {
      type: Array
    }
  },
  setup(e) {
    let t = I({});
    function n() {
      e.componentLists.filter((l) => l.disabled == null ? !0 : !l.disabled).forEach((l) => {
        t.value[l.group] || (t.value[l.group] = []), !t.value[l.group].find((o) => l.name == o.name) && t.value[l.group].push(l);
      });
      for (let l in t.value)
        t.value[l] = t.value[l].filter((o, i) => {
          var a;
          return e.builtInComsControlView ? (a = e.builtInComs) == null ? void 0 : a.includes(o.name) : !0;
        }), (!t.value[l] || !t.value[l].length) && delete t.value[l];
    }
    return n(), Os.on(() => {
      n();
    }), () => d(Te, null, [Object.keys(t.value).map((l) => d("div", {
      class: "group-container"
    }, [d("div", {
      class: "title"
    }, [l]), d("div", {
      class: "group-container-content"
    }, [t.value[l].map((o) => o != null && o.hide ? null : d("div", {
      class: "editer-menu-content-block",
      draggable: !0,
      onDragstart: (i) => e.menuDragInfo.dragstart(i, o),
      onDragend: e.menuDragInfo.dragend.bind(e.menuDragInfo),
      onClick: (i) => e.menuDragInfo.click(i, o)
    }, [d("div", {
      class: "icon-box"
    }, [d("img", {
      class: "icon",
      src: o.icon,
      alt: ""
    }, null), d("img", {
      class: "activeIcon",
      src: o.activeIcon,
      alt: ""
    }, null)]), d("span", {
      class: "editor-priview-label"
    }, [o.label])]))])]))]);
  }
}), at = (e) => (He("data-v-9674b51e"), e = e(), We(), e), dg = {
  class: "editor-built-in-control-base-title"
}, fg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("div", {
  class: "line"
}, null, -1)), pg = {
  class: "font"
}, vg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), hg = [vg], mg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), gg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), bg = [gg], yg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), _g = /* @__PURE__ */ at(() => /* @__PURE__ */ p("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), $g = [_g], wg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), kg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), Cg = [kg], Sg = {
  class: "letterSpacing flex"
}, Vg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("span", null, "字间距", -1)), Og = {
  class: "flex: 1"
}, Eg = {
  class: "letterSpacing flex mt24"
}, xg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("span", null, "行间距", -1)), Bg = {
  class: "flex: 1"
}, Ig = {
  class: "letterSpacing flex mt24"
}, Pg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("span", null, "左右间距", -1)), jg = {
  class: "flex: 1"
}, Tg = {
  class: "letterSpacing flex mt24"
}, Mg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("span", null, "上间距", -1)), Dg = {
  class: "flex: 1"
}, zg = {
  class: "letterSpacing flex mt24"
}, Ag = /* @__PURE__ */ at(() => /* @__PURE__ */ p("span", null, "下间距", -1)), Lg = {
  class: "flex: 1"
}, Fg = {
  class: "letterSpacing flex mt24"
}, Ng = /* @__PURE__ */ at(() => /* @__PURE__ */ p("span", null, "背景色", -1)), Rg = {
  class: "flex: 1"
}, qg = {
  class: "mt24 mb48"
}, Hg = /* @__PURE__ */ at(() => /* @__PURE__ */ p("div", {
  class: "img-title"
}, "背景图", -1)), Wg = /* @__PURE__ */ F({
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
      const i = Zn, a = Ss, r = Ma;
      return y(), x("div", dg, [fg, p("div", pg, [d(i, {
        content: "居中",
        position: "top"
      }, {
        default: le(() => [(y(), x("svg", {
          t: "1726044272489",
          class: G(["icon", {
            active: e.textAlign == "1"
          }]),
          viewBox: "0 0 1024 1024",
          width: "200",
          height: "200",
          onClick: o[0] || (o[0] = (s) => n("textAlign", e.textAlign == "1" ? "2" : "1"))
        }, hg, 2))]),
        _: 1
      }), mg, d(i, {
        content: "加粗",
        position: "top"
      }, {
        default: le(() => [(y(), x("svg", {
          t: "1726043535219",
          class: G(["icon", {
            active: e.fontWeight == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "1270",
          width: "200",
          height: "200",
          onClick: o[1] || (o[1] = (s) => n("fontWeight", e.fontWeight == "1" ? "2" : "1"))
        }, bg, 2))]),
        _: 1
      }), yg, d(i, {
        content: "倾斜",
        position: "top"
      }, {
        default: le(() => [(y(), x("svg", {
          t: "1726044177092",
          class: G(["icon", {
            active: e.fontStyle == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2714",
          width: "200",
          height: "200",
          onClick: o[2] || (o[2] = (s) => n("fontStyle", e.fontStyle == "1" ? "2" : "1"))
        }, $g, 2))]),
        _: 1
      }), wg, d(i, {
        content: "下划线",
        position: "top"
      }, {
        default: le(() => [(y(), x("svg", {
          t: "1726044215994",
          class: G(["icon", {
            active: e.textDecoration == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3696",
          width: "200",
          height: "200",
          onClick: o[3] || (o[3] = (s) => n("textDecoration", e.textDecoration == "1" ? "2" : "1"))
        }, Cg, 2))]),
        _: 1
      })]), p("div", Sg, [Vg, p("div", Og, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.letterSpacing.defaultValue,
        "onUpdate:modelValue": o[4] || (o[4] = (s) => e.block.props.letterSpacing.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Eg, [xg, p("div", Bg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.lineHeight.defaultValue,
        "onUpdate:modelValue": o[5] || (o[5] = (s) => e.block.props.lineHeight.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Ig, [Pg, p("div", jg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.leftRightPadding.defaultValue,
        "onUpdate:modelValue": o[6] || (o[6] = (s) => e.block.props.leftRightPadding.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Tg, [Mg, p("div", Dg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginTop.defaultValue,
        "onUpdate:modelValue": o[7] || (o[7] = (s) => e.block.props.marginTop.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", zg, [Ag, p("div", Lg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginBottom.defaultValue,
        "onUpdate:modelValue": o[8] || (o[8] = (s) => e.block.props.marginBottom.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Fg, [Ng, p("div", Rg, [d(r, {
        "show-history": "",
        "show-preset": "",
        showText: "",
        disabledAlpha: "",
        modelValue: e.block.props.backgroundColor.defaultValue,
        "onUpdate:modelValue": o[9] || (o[9] = (s) => e.block.props.backgroundColor.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", qg, [Hg, d(Fa, {
        modelValue: e.block.props.backgroundImage.defaultValue,
        "onUpdate:modelValue": o[10] || (o[10] = (s) => e.block.props.backgroundImage.defaultValue = s)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const Ug = /* @__PURE__ */ Ce(Wg, [["__scopeId", "data-v-9674b51e"]]), Kg = /* @__PURE__ */ F({
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
    return (t, n) => (y(), x("div", {
      class: "editor-built-in-registor-base-title",
      style: pe(e.style)
    }, [p("div", {
      class: G(["text", {
        minHeight: !e.text
      }])
    }, ve(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
  }
});
const Yg = /* @__PURE__ */ Ce(Kg, [["__scopeId", "data-v-ad83ebe6"]]), Gg = {
  group: "基础组件",
  name: "baseText",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  render: (e) => {
    let t = m(() => ({
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
    return d(Yg, {
      text: e.props.text.defaultValue,
      style: t.value
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
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
      defaultValue: "rgba(255,255,255,0)"
    },
    backgroundImage: {
      label: "背景图",
      defaultValue: ""
    }
  },
  controlView: (e, t) => {
    let n = e.props;
    function l(i) {
      try {
        i.type && (e.props[i.type].defaultValue = i.value, t(e));
      } catch {
      }
    }
    return d(Ug, {
      block: e,
      textAlign: n.textAlign.defaultValue,
      fontWeight: n.fontWeight.defaultValue,
      fontStyle: n.fontStyle.defaultValue,
      textDecoration: n.textDecoration.defaultValue,
      onChange: l
    });
  }
}, Xg = ["src"], Zg = {
  key: 1,
  class: "empty"
}, Qg = /* @__PURE__ */ F({
  __name: "render",
  props: {
    src: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, n) => (y(), x("div", {
      class: "editor-built-in-registor-base-img",
      style: pe(e.style)
    }, [e.src ? (y(), x("img", {
      key: 0,
      class: "render-img",
      src: e.src,
      alt: ""
    }, null, 8, Xg)) : (y(), x("div", Zg, "请在控制器中上传图片+"))], 4));
  }
});
const Jg = /* @__PURE__ */ Ce(Qg, [["__scopeId", "data-v-ac936ab1"]]), eb = {
  group: "基础组件",
  name: "baseImg",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (e) => {
    let t = e.props, n = m(() => ({
      marginTop: (t != null && t.marginTop ? t.marginTop.defaultValue : 0) + "px",
      marginBottom: (t != null && t.marginBottom ? t.marginBottom.defaultValue : 0) + "px"
    }));
    return d(Jg, {
      src: t.src.defaultValue,
      style: n.value
    });
  },
  label: "图片",
  props: {
    src: {
      defaultValue: "",
      label: "图片设置",
      type: "imgUpload"
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
    }
  },
  controlView: (e, t) => d("div", null, null)
}, tb = {
  key: 0,
  class: "tip"
}, nb = /* @__PURE__ */ F({
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
    let n = I(null);
    function l(i) {
      var a, r, s, u, c, f, g, h;
      (a = n.value) != null && a.parentNode && i ? (((r = n.value) == null ? void 0 : r.parentNode).style.position = "absolute", ((s = n.value) == null ? void 0 : s.parentNode).style.zIndex = 10, ((u = n.value) == null ? void 0 : u.parentNode).style.bottom = t.visibleSubmitNum ? "0px" : "20px", ((c = n.value) == null ? void 0 : c.parentNode).style.top = "auto") : (((f = n.value) == null ? void 0 : f.parentNode).style.position = "relative", ((g = n.value) == null ? void 0 : g.parentNode).style.top = 0, ((h = n.value) == null ? void 0 : h.parentNode).style.bottom = "auto");
    }
    function o(i) {
      return i.replace("$num", t.submitNum + "");
    }
    return Ee(() => {
      l(t.fixedBottom);
    }), jt(() => {
      l(t.fixedBottom);
    }), be(() => t.fixedBottom, () => {
      l(t.fixedBottom);
    }), (i, a) => (y(), x("div", {
      class: "editor-built-in-registor-base-submit",
      ref_key: "baseSubmit",
      ref: n
    }, [p("div", {
      class: "submit",
      style: pe(e.style)
    }, ve(e.text), 5), e.visibleSubmitNum ? (y(), x("div", tb, " ——" + ve(o(e.submitTip)) + "—— ", 1)) : te("", !0)], 512));
  }
});
const lb = /* @__PURE__ */ Ce(nb, [["__scopeId", "data-v-caa2b586"]]);
const Qn = (e) => (He("data-v-e66b9f5d"), e = e(), We(), e), ob = {
  class: "editor-built-in-control-base-submit"
}, ab = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), ib = {
  class: "flex mt24 options"
}, rb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "是否吸底", -1)), sb = {
  class: "flex mt24 options"
}, ub = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "显示提交次数", -1)), cb = {
  key: 0,
  class: "flex mt24 options"
}, db = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "初始次数", -1)), fb = {
  class: "pl24"
}, pb = {
  key: 1,
  class: "flex mt24 options"
}, vb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提示语内容", -1)), hb = [vb], mb = {
  key: 2,
  class: "mt24"
}, gb = /* @__PURE__ */ F({
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
      const i = $t, a = Yt;
      return y(), x("div", ob, [ab, p("div", ib, [rb, p("div", null, [d(i, {
        "default-checked": e.block.props.fixedBottom.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "fixedBottom"))
      }, null, 8, ["default-checked"])])]), p("div", sb, [ub, p("div", null, [d(i, {
        "default-checked": e.block.props.visibleSubmitNum.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "visibleSubmitNum"))
      }, null, 8, ["default-checked"])])]), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), x("div", cb, [db, p("div", fb, [d(a, {
        placeholder: "请输入初始次数",
        modelValue: e.block.props.submitNum.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.submitNum.defaultValue = r)
      }, null, 8, ["modelValue"])])])) : te("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), x("div", pb, hb)) : te("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), x("div", mb, [d(a, {
        placeholder: "提示语",
        modelValue: e.block.props.submitTip.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (r) => e.block.props.submitTip.defaultValue = r)
      }, null, 8, ["modelValue"])])) : te("", !0)]);
    };
  }
});
const bb = /* @__PURE__ */ Ce(gb, [["__scopeId", "data-v-e66b9f5d"]]), yb = {
  group: "基础组件",
  name: "baseSubmit",
  label: "提交按钮",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  render: (e) => {
    let t = e.props, n = m(() => ({
      backgroundColor: t.backgroundColor.defaultValue,
      color: t.color.defaultValue,
      borderRadius: t.borderRadius.defaultValue + "px",
      width: t.width.defaultValue + "%",
      marginTop: t.marginTop.defaultValue + "px",
      marginBottom: t.marginBottom.defaultValue + "px"
    }));
    return d(lb, {
      text: t.text.defaultValue,
      style: n.value,
      fixedBottom: t.fixedBottom.defaultValue == "1",
      visibleSubmitNum: t.visibleSubmitNum.defaultValue == "1",
      submitNum: t.submitNum.defaultValue,
      submitTip: t.submitTip.defaultValue
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
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
  controlView: (e, t) => d(bb, {
    block: e
  })
}, _b = /* @__PURE__ */ F({
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
    return (t, n) => (y(), x("div", {
      class: "editor-built-in-registor-base-title",
      style: pe(e.style)
    }, ve(e.text ? e.text : "默认标题"), 5));
  }
});
const $b = /* @__PURE__ */ Ce(_b, [["__scopeId", "data-v-5fff6b35"]]), wb = {
  group: "基础组件",
  label: "表单标题",
  name: "baseTitle",
  pushType: "unshift",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  render: (e) => {
    let t = m(() => ({
      color: e.props.color.defaultValue,
      fontSize: e.props.fontSize.defaultValue + "px",
      lineHeight: e.props.lineHeight.defaultValue + "px",
      height: e.props.lineHeight.defaultValue + "px",
      marginBottom: e.props.marginBottom.defaultValue + "px",
      marginTop: e.props.marginTop.defaultValue + "px"
    }));
    return d($b, {
      style: t.value,
      text: e.props.text.defaultValue
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
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
  controlView: (e, t) => (e.props, d("div", null, null))
}, kb = {
  class: "successImg"
}, Cb = ["src"], Sb = {
  class: "successText"
}, Vb = {
  class: "successDesc"
}, Ob = {
  class: "successQR"
}, Eb = ["src"], xb = /* @__PURE__ */ F({
  __name: "render",
  props: {
    successSrc: {
      type: String,
      default: ""
    },
    successText: {
      type: String,
      default: ""
    },
    successDesc: {
      type: String,
      default: ""
    },
    successQR: {
      type: String,
      default: ""
    },
    successBottomText: {
      type: String,
      default: ""
    },
    successColor: {
      type: String,
      default: ""
    },
    successDescColor: {
      type: String,
      default: ""
    },
    successBottomColor: {
      type: String,
      default: ""
    },
    successLink: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    let n = I(0);
    Ee(() => {
      let o = document.querySelector(".visual-editor-area-content");
      console.log(o.offsetHeight), n.value = o != null && o.offsetHeight ? o == null ? void 0 : o.offsetHeight : 600;
    });
    function l() {
      const o = t.successLink, i = /https?:\/\/[^\s]+/, a = o.match(i) ? o.match(i)[0] : null;
      a && window.open(a);
    }
    return (o, i) => (y(), x("div", {
      class: "editor-built-in-registor-base-success",
      style: pe({
        height: Tr(n) + "px"
      })
    }, [p("div", kb, [p("img", {
      src: e.successSrc,
      alt: ""
    }, null, 8, Cb)]), p("div", Sb, [p("span", {
      style: pe({
        color: e.successColor
      })
    }, ve(e.successText), 5)]), p("div", Vb, [p("span", {
      style: pe({
        color: e.successDescColor
      })
    }, ve(e.successDesc), 5)]), p("div", Ob, [p("img", {
      src: e.successQR,
      alt: ""
    }, null, 8, Eb)]), p("div", {
      class: "successBottomText",
      onClick: l
    }, [p("span", {
      style: pe({
        color: e.successBottomColor
      })
    }, ve(e.successBottomText), 5)])], 4));
  }
});
const Bb = /* @__PURE__ */ Ce(xb, [["__scopeId", "data-v-575da097"]]), Ib = {
  group: "基础组件",
  name: "baseSuccess",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  hide: !1,
  render: (e) => {
    let t = e.props;
    return d(Bb, {
      successSrc: t.successSrc.defaultValue,
      successText: t.successText.defaultValue,
      successDesc: t.successDesc.defaultValue,
      successQR: t.successQR.defaultValue,
      successBottomText: t.successBottomText.defaultValue,
      successColor: t.successColor.defaultValue,
      successDescColor: t.successDescColor.defaultValue,
      successBottomColor: t.successBottomColor.defaultValue,
      successLink: t != null && t.successLink ? t.successLink.defaultValue : ""
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "成功页",
  props: {
    successSrc: {
      defaultValue: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262956483528fb5172629564835229384_succ.png",
      label: "成功图标",
      type: "imgUpload"
    },
    successText: {
      defaultValue: "提交成功",
      label: "成功标题",
      type: "input"
    },
    successColor: {
      defaultValue: "#fff",
      label: "成功标题文字颜色",
      type: "color"
    },
    successDesc: {
      defaultValue: "您的信息已经提交成功，感谢您的参与！",
      label: "成功提示",
      type: "input"
    },
    successDescColor: {
      defaultValue: "#fff",
      label: "成功提示文字颜色",
      type: "color"
    },
    successQR: {
      defaultValue: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262959890995db4172629598909914996_1.jpg",
      label: "联系二维码",
      type: "imgUpload"
    },
    successBottomText: {
      defaultValue: "关注公众号，了解更多",
      label: "相关提示信息",
      type: "input"
    },
    successLink: {
      defaultValue: "",
      label: "跳转链接",
      type: "input"
    },
    successBottomColor: {
      defaultValue: "#fff",
      label: "相关提示信息文字颜色",
      type: "color"
    }
  },
  controlView: (e, t) => d("div", null, null)
}, Pb = (e) => (He("data-v-01b7c41b"), e = e(), We(), e), jb = {
  class: "title-tip"
}, Tb = {
  key: 0,
  class: "red"
}, Mb = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "8px",
    "margin-bottom": "2px"
  }
}, Db = {
  class: "form-item"
}, zb = /* @__PURE__ */ Pb(() => /* @__PURE__ */ p("div", {
  class: "control-input"
}, null, -1)), Ab = {
  class: "text"
}, Lb = /* @__PURE__ */ F({
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
    },
    tip: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (y(), x("div", {
      class: "editor-built-in-commen-multiple",
      style: pe(e.style)
    }, [p("div", jb, [e.isRequire ? (y(), x("span", Tb, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", Mb, ve(e.tip), 1)) : te("", !0), p("div", Db, [(y(!0), x(Te, null, bt(e.options, (l, o) => (y(), x("div", {
      class: "item",
      key: o
    }, [zb, p("div", Ab, ve(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const Fb = /* @__PURE__ */ Ce(Lb, [["__scopeId", "data-v-01b7c41b"]]);
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function wr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wr(Object(n), !0).forEach(function(l) {
      Nb(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wr(Object(n)).forEach(function(l) {
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
function Nb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Pt() {
  return Pt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, Pt.apply(this, arguments);
}
function Rb(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, i;
  for (i = 0; i < l.length; i++)
    o = l[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qb(e, t) {
  if (e == null)
    return {};
  var n = Rb(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      l = i[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
var Hb = "1.15.3";
function It(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Tt = It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Jn = It(/Edge/i), kr = It(/firefox/i), Ln = It(/safari/i) && !It(/chrome/i) && !It(/android/i), Es = It(/iP(ad|od|hone)/i), xs = It(/chrome/i) && It(/android/i), Bs = {
  capture: !1,
  passive: !1
};
function ke(e, t, n) {
  e.addEventListener(t, n, !Tt && Bs);
}
function $e(e, t, n) {
  e.removeEventListener(t, n, !Tt && Bs);
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
function Is(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function gt(e, t, n, l) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && Al(e, t) : Al(e, t)) || l && e === n)
        return e;
      if (e === n)
        break;
    } while (e = Is(e));
  }
  return null;
}
var Cr = /\s+/g;
function ut(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(Cr, " ").replace(" " + t + " ", " ");
      e.className = (l + (n ? " " + t : "")).replace(Cr, " ");
    }
}
function fe(e, t, n) {
  var l = e && e.style;
  if (l) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in l) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), l[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function yn(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var l = fe(e, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function Ps(e, t, n) {
  if (e) {
    var l = e.getElementsByTagName(t), o = 0, i = l.length;
    if (n)
      for (; o < i; o++)
        n(l[o], o);
    return l;
  }
  return [];
}
function wt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Re(e, t, n, l, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, a, r, s, u, c, f;
    if (e !== window && e.parentNode && e !== wt() ? (i = e.getBoundingClientRect(), a = i.top, r = i.left, s = i.bottom, u = i.right, c = i.height, f = i.width) : (a = 0, r = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !Tt))
      do
        if (o && o.getBoundingClientRect && (fe(o, "transform") !== "none" || n && fe(o, "position") !== "static")) {
          var g = o.getBoundingClientRect();
          a -= g.top + parseInt(fe(o, "border-top-width")), r -= g.left + parseInt(fe(o, "border-left-width")), s = a + i.height, u = r + i.width;
          break;
        }
      while (o = o.parentNode);
    if (l && e !== window) {
      var h = yn(o || e), b = h && h.a, _ = h && h.d;
      h && (a /= _, r /= b, f /= b, c /= _, s = a + c, u = r + f);
    }
    return {
      top: a,
      left: r,
      bottom: s,
      right: u,
      width: f,
      height: c
    };
  }
}
function Sr(e, t, n) {
  for (var l = Rt(e, !0), o = Re(e)[t]; l; ) {
    var i = Re(l)[n], a = void 0;
    if (n === "top" || n === "left" ? a = o >= i : a = o <= i, !a)
      return l;
    if (l === wt())
      break;
    l = Rt(l, !1);
  }
  return !1;
}
function kn(e, t, n, l) {
  for (var o = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== se.ghost && (l || a[i] !== se.dragged) && gt(a[i], n.draggable, e, !1)) {
      if (o === t)
        return a[i];
      o++;
    }
    i++;
  }
  return null;
}
function Na(e, t) {
  for (var n = e.lastElementChild; n && (n === se.ghost || fe(n, "display") === "none" || t && !Al(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function vt(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== se.clone && (!t || Al(e, t)) && n++;
  return n;
}
function Vr(e) {
  var t = 0, n = 0, l = wt();
  if (e)
    do {
      var o = yn(e), i = o.a, a = o.d;
      t += e.scrollLeft * i, n += e.scrollTop * a;
    } while (e !== l && (e = e.parentNode));
  return [t, n];
}
function Wb(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var l in t)
        if (t.hasOwnProperty(l) && t[l] === e[n][l])
          return Number(n);
    }
  return -1;
}
function Rt(e, t) {
  if (!e || !e.getBoundingClientRect)
    return wt();
  var n = e, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = fe(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return wt();
        if (l || t)
          return n;
        l = !0;
      }
    }
  while (n = n.parentNode);
  return wt();
}
function Ub(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Go(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function js(e, t) {
  return function() {
    if (!Fn) {
      var n = arguments, l = this;
      n.length === 1 ? e.call(l, n[0]) : e.apply(l, n), Fn = setTimeout(function() {
        Fn = void 0;
      }, t);
    }
  };
}
function Kb() {
  clearTimeout(Fn), Fn = void 0;
}
function Ts(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Ms(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ds(e, t, n) {
  var l = {};
  return Array.from(e.children).forEach(function(o) {
    var i, a, r, s;
    if (!(!gt(o, t.draggable, e, !1) || o.animated || o === n)) {
      var u = Re(o);
      l.left = Math.min((i = l.left) !== null && i !== void 0 ? i : 1 / 0, u.left), l.top = Math.min((a = l.top) !== null && a !== void 0 ? a : 1 / 0, u.top), l.right = Math.max((r = l.right) !== null && r !== void 0 ? r : -1 / 0, u.right), l.bottom = Math.max((s = l.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var st = "Sortable" + new Date().getTime();
function Yb() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(fe(o, "display") === "none" || o === se.ghost)) {
            e.push({
              target: o,
              rect: Re(o)
            });
            var i = St({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = yn(o, !0);
              a && (i.top -= a.f, i.left -= a.e);
            }
            o.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(l) {
      e.push(l);
    },
    removeAnimationState: function(l) {
      e.splice(Wb(e, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof l == "function" && l();
        return;
      }
      var i = !1, a = 0;
      e.forEach(function(r) {
        var s = 0, u = r.target, c = u.fromRect, f = Re(u), g = u.prevFromRect, h = u.prevToRect, b = r.rect, _ = yn(u, !0);
        _ && (f.top -= _.f, f.left -= _.e), u.toRect = f, u.thisAnimationDuration && Go(g, f) && !Go(c, f) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - f.top) / (b.left - f.left) === (c.top - f.top) / (c.left - f.left) && (s = Xb(b, g, h, o.options)), Go(f, c) || (u.prevFromRect = c, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, b, f, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, a) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, o, i, a) {
      if (a) {
        fe(l, "transition", ""), fe(l, "transform", "");
        var r = yn(this.el), s = r && r.a, u = r && r.d, c = (o.left - i.left) / (s || 1), f = (o.top - i.top) / (u || 1);
        l.animatingX = !!c, l.animatingY = !!f, fe(l, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = Gb(l), fe(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), fe(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          fe(l, "transition", ""), fe(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, a);
      }
    }
  };
}
function Gb(e) {
  return e.offsetWidth;
}
function Xb(e, t, n, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * l.animation;
}
var dn = [], Xo = {
  initializeByDefault: !0
}, el = {
  mount: function(t) {
    for (var n in Xo)
      Xo.hasOwnProperty(n) && !(n in t) && (t[n] = Xo[n]);
    dn.forEach(function(l) {
      if (l.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), dn.push(t);
  },
  pluginEvent: function(t, n, l) {
    var o = this;
    this.eventCanceled = !1, l.cancel = function() {
      o.eventCanceled = !0;
    };
    var i = t + "Global";
    dn.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][i] && n[a.pluginName][i](St({
        sortable: n
      }, l)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](St({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(t, n, l, o) {
    dn.forEach(function(r) {
      var s = r.pluginName;
      if (!(!t.options[s] && !r.initializeByDefault)) {
        var u = new r(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, Pt(l, u.defaults);
      }
    });
    for (var i in t.options)
      if (t.options.hasOwnProperty(i)) {
        var a = this.modifyOption(t, i, t.options[i]);
        typeof a < "u" && (t.options[i] = a);
      }
  },
  getEventProperties: function(t, n) {
    var l = {};
    return dn.forEach(function(o) {
      typeof o.eventProperties == "function" && Pt(l, o.eventProperties.call(n[o.pluginName], t));
    }), l;
  },
  modifyOption: function(t, n, l) {
    var o;
    return dn.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (o = i.optionListeners[n].call(t[i.pluginName], l));
    }), o;
  }
};
function Zb(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, i = e.cloneEl, a = e.toEl, r = e.fromEl, s = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, f = e.newDraggableIndex, g = e.originalEvent, h = e.putSortable, b = e.extraEventProperties;
  if (t = t || n && n[st], !!t) {
    var _, D = t.options, T = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Tt && !Jn ? _ = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(l, !0, !0)), _.to = a || n, _.from = r || n, _.item = o || n, _.clone = i, _.oldIndex = s, _.newIndex = u, _.oldDraggableIndex = c, _.newDraggableIndex = f, _.originalEvent = g, _.pullMode = h ? h.lastPutMode : void 0;
    var k = St(St({}, b), el.getEventProperties(l, t));
    for (var V in k)
      _[V] = k[V];
    n && n.dispatchEvent(_), D[T] && D[T].call(t, _);
  }
}
var Qb = ["evt"], rt = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, i = qb(l, Qb);
  el.pluginEvent.bind(se)(t, n, St({
    dragEl: J,
    parentEl: ze,
    ghostEl: me,
    rootEl: Be,
    nextEl: Jt,
    lastDownEl: _l,
    cloneEl: Pe,
    cloneHidden: Nt,
    dragStarted: jn,
    putSortable: Ze,
    activeSortable: se.active,
    originalEvent: o,
    oldIndex: hn,
    oldDraggableIndex: Nn,
    newIndex: ct,
    newDraggableIndex: Lt,
    hideGhostForTarget: Fs,
    unhideGhostForTarget: Ns,
    cloneNowHidden: function() {
      Nt = !0;
    },
    cloneNowShown: function() {
      Nt = !1;
    },
    dispatchSortableEvent: function(r) {
      lt({
        sortable: n,
        name: r,
        originalEvent: o
      });
    }
  }, i));
};
function lt(e) {
  Zb(St({
    putSortable: Ze,
    cloneEl: Pe,
    targetEl: J,
    rootEl: Be,
    oldIndex: hn,
    oldDraggableIndex: Nn,
    newIndex: ct,
    newDraggableIndex: Lt
  }, e));
}
var J, ze, me, Be, Jt, _l, Pe, Nt, hn, ct, Nn, Lt, dl, Ze, pn = !1, Ll = !1, Fl = [], Xt, mt, Zo, Qo, Or, Er, jn, fn, Rn, qn = !1, fl = !1, $l, Je, Jo = [], va = !1, Nl = [], eo = typeof document < "u", pl = Es, xr = Jn || Tt ? "cssFloat" : "float", Jb = eo && !xs && !Es && "draggable" in document.createElement("div"), zs = function() {
  if (eo) {
    if (Tt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), As = function(t, n) {
  var l = fe(t), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), i = kn(t, 0, n), a = kn(t, 1, n), r = i && fe(i), s = a && fe(a), u = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + Re(i).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Re(a).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && r.float && r.float !== "none") {
    var f = r.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return i && (r.display === "block" || r.display === "flex" || r.display === "table" || r.display === "grid" || u >= o && l[xr] === "none" || a && l[xr] === "none" && u + c > o) ? "vertical" : "horizontal";
}, ey = function(t, n, l) {
  var o = l ? t.left : t.top, i = l ? t.right : t.bottom, a = l ? t.width : t.height, r = l ? n.left : n.top, s = l ? n.right : n.bottom, u = l ? n.width : n.height;
  return o === r || i === s || o + a / 2 === r + u / 2;
}, ty = function(t, n) {
  var l;
  return Fl.some(function(o) {
    var i = o[st].options.emptyInsertThreshold;
    if (!(!i || Na(o))) {
      var a = Re(o), r = t >= a.left - i && t <= a.right + i, s = n >= a.top - i && n <= a.bottom + i;
      if (r && s)
        return l = o;
    }
  }), l;
}, Ls = function(t) {
  function n(i, a) {
    return function(r, s, u, c) {
      var f = r.options.group.name && s.options.group.name && r.options.group.name === s.options.group.name;
      if (i == null && (a || f))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (a && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(r, s, u, c), a)(r, s, u, c);
      var g = (a ? r : s).options.group.name;
      return i === !0 || typeof i == "string" && i === g || i.join && i.indexOf(g) > -1;
    };
  }
  var l = {}, o = t.group;
  (!o || yl(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = n(o.pull, !0), l.checkPut = n(o.put), l.revertClone = o.revertClone, t.group = l;
}, Fs = function() {
  !zs && me && fe(me, "display", "none");
}, Ns = function() {
  !zs && me && fe(me, "display", "");
};
eo && !xs && document.addEventListener("click", function(e) {
  if (Ll)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ll = !1, !1;
}, !0);
var Zt = function(t) {
  if (J) {
    t = t.touches ? t.touches[0] : t;
    var n = ty(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[st]._onDragOver(l);
    }
  }
}, ny = function(t) {
  J && J.parentNode[st]._isOutsideThisEl(t.target);
};
function se(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = Pt({}, t), e[st] = this;
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
      return As(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, r) {
      a.setData("Text", r.textContent);
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
    supportPointer: se.supportPointer !== !1 && "PointerEvent" in window && !Ln,
    emptyInsertThreshold: 5
  };
  el.initializePlugins(this, e, n);
  for (var l in n)
    !(l in t) && (t[l] = n[l]);
  Ls(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Jb, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ke(e, "pointerdown", this._onTapStart) : (ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), Fl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Pt(this, Yb());
}
se.prototype = /** @lends Sortable.prototype */
{
  constructor: se,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (fn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, J) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, l = this.el, o = this.options, i = o.preventOnFilter, a = t.type, r = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (r || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = o.filter;
      if (cy(l), !J && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = gt(s, o.draggable, l, !1), !(s && s.animated) && _l !== s)) {
        if (hn = vt(s), Nn = vt(s, o.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
            lt({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: l,
              fromEl: l
            }), rt("filter", n, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(f) {
          if (f = gt(u, f.trim(), l, !1), f)
            return lt({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: l,
              toEl: l
            }), rt("filter", n, {
              evt: t
            }), !0;
        }), c)) {
          i && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !gt(u, o.handle, l, !1) || this._prepareDragStart(t, r, s);
      }
    }
  },
  _prepareDragStart: function(t, n, l) {
    var o = this, i = o.el, a = o.options, r = i.ownerDocument, s;
    if (l && !J && l.parentNode === i) {
      var u = Re(l);
      if (Be = i, J = l, ze = J.parentNode, Jt = J.nextSibling, _l = l, dl = a.group, se.dragged = J, Xt = {
        target: J,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Or = Xt.clientX - u.left, Er = Xt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, J.style["will-change"] = "all", s = function() {
        if (rt("delayEnded", o, {
          evt: t
        }), se.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !kr && o.nativeDraggable && (J.draggable = !0), o._triggerDragStart(t, n), lt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), ut(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        Ps(J, c.trim(), ea);
      }), ke(r, "dragover", Zt), ke(r, "mousemove", Zt), ke(r, "touchmove", Zt), ke(r, "mouseup", o._onDrop), ke(r, "touchend", o._onDrop), ke(r, "touchcancel", o._onDrop), kr && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), rt("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Jn || Tt))) {
        if (se.eventCanceled) {
          this._onDrop();
          return;
        }
        ke(r, "mouseup", o._disableDelayedDrag), ke(r, "touchend", o._disableDelayedDrag), ke(r, "touchcancel", o._disableDelayedDrag), ke(r, "mousemove", o._delayedDragTouchMoveHandler), ke(r, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && ke(r, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    J && ea(J), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    $e(t, "mouseup", this._disableDelayedDrag), $e(t, "touchend", this._disableDelayedDrag), $e(t, "touchcancel", this._disableDelayedDrag), $e(t, "mousemove", this._delayedDragTouchMoveHandler), $e(t, "touchmove", this._delayedDragTouchMoveHandler), $e(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : n ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(J, "dragend", this), ke(Be, "dragstart", this._onDragStart));
    try {
      document.selection ? wl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (pn = !1, Be && J) {
      rt("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && ke(document, "dragover", ny);
      var l = this.options;
      !t && ut(J, l.dragClass, !1), ut(J, l.ghostClass, !0), se.active = this, t && this._appendGhost(), lt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (mt) {
      this._lastX = mt.clientX, this._lastY = mt.clientY, Fs();
      for (var t = document.elementFromPoint(mt.clientX, mt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(mt.clientX, mt.clientY), t !== n); )
        n = t;
      if (J.parentNode[st]._isOutsideThisEl(t), n)
        do {
          if (n[st]) {
            var l = void 0;
            if (l = n[st]._onDragOver({
              clientX: mt.clientX,
              clientY: mt.clientY,
              target: t,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Is(n));
      Ns();
    }
  },
  _onTouchMove: function(t) {
    if (Xt) {
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, i = t.touches ? t.touches[0] : t, a = me && yn(me, !0), r = me && a && a.a, s = me && a && a.d, u = pl && Je && Vr(Je), c = (i.clientX - Xt.clientX + o.x) / (r || 1) + (u ? u[0] - Jo[0] : 0) / (r || 1), f = (i.clientY - Xt.clientY + o.y) / (s || 1) + (u ? u[1] - Jo[1] : 0) / (s || 1);
      if (!se.active && !pn) {
        if (l && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (me) {
        a ? (a.e += c - (Zo || 0), a.f += f - (Qo || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        fe(me, "webkitTransform", g), fe(me, "mozTransform", g), fe(me, "msTransform", g), fe(me, "transform", g), Zo = c, Qo = f, mt = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!me) {
      var t = this.options.fallbackOnBody ? document.body : Be, n = Re(J, !0, pl, !0, t), l = this.options;
      if (pl) {
        for (Je = t; fe(Je, "position") === "static" && fe(Je, "transform") === "none" && Je !== document; )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement ? (Je === document && (Je = wt()), n.top += Je.scrollTop, n.left += Je.scrollLeft) : Je = wt(), Jo = Vr(Je);
      }
      me = J.cloneNode(!0), ut(me, l.ghostClass, !1), ut(me, l.fallbackClass, !0), ut(me, l.dragClass, !0), fe(me, "transition", ""), fe(me, "transform", ""), fe(me, "box-sizing", "border-box"), fe(me, "margin", 0), fe(me, "top", n.top), fe(me, "left", n.left), fe(me, "width", n.width), fe(me, "height", n.height), fe(me, "opacity", "0.8"), fe(me, "position", pl ? "absolute" : "fixed"), fe(me, "zIndex", "100000"), fe(me, "pointerEvents", "none"), se.ghost = me, t.appendChild(me), fe(me, "transform-origin", Or / parseInt(me.style.width) * 100 + "% " + Er / parseInt(me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var l = this, o = t.dataTransfer, i = l.options;
    if (rt("dragStart", this, {
      evt: t
    }), se.eventCanceled) {
      this._onDrop();
      return;
    }
    rt("setupClone", this), se.eventCanceled || (Pe = Ms(J), Pe.removeAttribute("id"), Pe.draggable = !1, Pe.style["will-change"] = "", this._hideClone(), ut(Pe, this.options.chosenClass, !1), se.clone = Pe), l.cloneId = wl(function() {
      rt("clone", l), !se.eventCanceled && (l.options.removeCloneOnHide || Be.insertBefore(Pe, J), l._hideClone(), lt({
        sortable: l,
        name: "clone"
      }));
    }), !n && ut(J, i.dragClass, !0), n ? (Ll = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : ($e(document, "mouseup", l._onDrop), $e(document, "touchend", l._onDrop), $e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(l, o, J)), ke(document, "drop", l), fe(J, "transform", "translateZ(0)")), pn = !0, l._dragStartId = wl(l._dragStarted.bind(l, n, t)), ke(document, "selectstart", l), jn = !0, Ln && fe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, i, a, r = this.options, s = r.group, u = se.active, c = dl === s, f = r.sort, g = Ze || u, h, b = this, _ = !1;
    if (va)
      return;
    function D(A, ee) {
      rt(A, b, St({
        evt: t,
        isOwner: c,
        axis: h ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: i,
        canSort: f,
        fromSortable: g,
        target: l,
        completed: k,
        onMove: function(w, H) {
          return vl(Be, n, J, o, w, Re(w), t, H);
        },
        changed: V
      }, ee));
    }
    function T() {
      D("dragOverAnimationCapture"), b.captureAnimationState(), b !== g && g.captureAnimationState();
    }
    function k(A) {
      return D("dragOverCompleted", {
        insertion: A
      }), A && (c ? u._hideClone() : u._showClone(b), b !== g && (ut(J, Ze ? Ze.options.ghostClass : u.options.ghostClass, !1), ut(J, r.ghostClass, !0)), Ze !== b && b !== se.active ? Ze = b : b === se.active && Ze && (Ze = null), g === b && (b._ignoreWhileAnimating = l), b.animateAll(function() {
        D("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (l === J && !J.animated || l === n && !l.animated) && (fn = null), !r.dragoverBubble && !t.rootEl && l !== document && (J.parentNode[st]._isOutsideThisEl(t.target), !A && Zt(t)), !r.dragoverBubble && t.stopPropagation && t.stopPropagation(), _ = !0;
    }
    function V() {
      ct = vt(J), Lt = vt(J, r.draggable), lt({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: ct,
        newDraggableIndex: Lt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = gt(l, r.draggable, n, !0), D("dragOver"), se.eventCanceled)
      return _;
    if (J.contains(t.target) || l.animated && l.animatingX && l.animatingY || b._ignoreWhileAnimating === l)
      return k(!1);
    if (Ll = !1, u && !r.disabled && (c ? f || (a = ze !== Be) : Ze === this || (this.lastPutMode = dl.checkPull(this, u, J, t)) && s.checkPut(this, u, J, t))) {
      if (h = this._getDirection(t, l) === "vertical", o = Re(J), D("dragOverValid"), se.eventCanceled)
        return _;
      if (a)
        return ze = Be, T(), this._hideClone(), D("revert"), se.eventCanceled || (Jt ? Be.insertBefore(J, Jt) : Be.appendChild(J)), k(!0);
      var C = Na(n, r.draggable);
      if (!C || iy(t, h, this) && !C.animated) {
        if (C === J)
          return k(!1);
        if (C && n === t.target && (l = C), l && (i = Re(l)), vl(Be, n, J, o, l, i, t, !!l) !== !1)
          return T(), C && C.nextSibling ? n.insertBefore(J, C.nextSibling) : n.appendChild(J), ze = n, V(), k(!0);
      } else if (C && ay(t, h, this)) {
        var M = kn(n, 0, r, !0);
        if (M === J)
          return k(!1);
        if (l = M, i = Re(l), vl(Be, n, J, o, l, i, t, !1) !== !1)
          return T(), n.insertBefore(J, M), ze = n, V(), k(!0);
      } else if (l.parentNode === n) {
        i = Re(l);
        var $ = 0, O, N = J.parentNode !== n, Y = !ey(J.animated && J.toRect || o, l.animated && l.toRect || i, h), R = h ? "top" : "left", v = Sr(l, "top", "top") || Sr(J, "top", "top"), E = v ? v.scrollTop : void 0;
        fn !== l && (O = i[R], qn = !1, fl = !Y && r.invertSwap || N), $ = ry(t, l, i, h, Y ? 1 : r.swapThreshold, r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold, fl, fn === l);
        var S;
        if ($ !== 0) {
          var z = vt(J);
          do
            z -= $, S = ze.children[z];
          while (S && (fe(S, "display") === "none" || S === me));
        }
        if ($ === 0 || S === l)
          return k(!1);
        fn = l, Rn = $;
        var K = l.nextElementSibling, W = !1;
        W = $ === 1;
        var X = vl(Be, n, J, o, l, i, t, W);
        if (X !== !1)
          return (X === 1 || X === -1) && (W = X === 1), va = !0, setTimeout(oy, 30), T(), W && !K ? n.appendChild(J) : l.parentNode.insertBefore(J, W ? K : l), v && Ts(v, 0, E - v.scrollTop), ze = J.parentNode, O !== void 0 && !fl && ($l = Math.abs(O - Re(l)[R])), V(), k(!0);
      }
      if (n.contains(J))
        return k(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    $e(document, "mousemove", this._onTouchMove), $e(document, "touchmove", this._onTouchMove), $e(document, "pointermove", this._onTouchMove), $e(document, "dragover", Zt), $e(document, "mousemove", Zt), $e(document, "touchmove", Zt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    $e(t, "mouseup", this._onDrop), $e(t, "touchend", this._onDrop), $e(t, "pointerup", this._onDrop), $e(t, "touchcancel", this._onDrop), $e(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, l = this.options;
    if (ct = vt(J), Lt = vt(J, l.draggable), rt("drop", this, {
      evt: t
    }), ze = J && J.parentNode, ct = vt(J), Lt = vt(J, l.draggable), se.eventCanceled) {
      this._nulling();
      return;
    }
    pn = !1, fl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ha(this.cloneId), ha(this._dragStartId), this.nativeDraggable && ($e(document, "drop", this), $e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && fe(document.body, "user-select", ""), fe(J, "transform", ""), t && (jn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), me && me.parentNode && me.parentNode.removeChild(me), (Be === ze || Ze && Ze.lastPutMode !== "clone") && Pe && Pe.parentNode && Pe.parentNode.removeChild(Pe), J && (this.nativeDraggable && $e(J, "dragend", this), ea(J), J.style["will-change"] = "", jn && !pn && ut(J, Ze ? Ze.options.ghostClass : this.options.ghostClass, !1), ut(J, this.options.chosenClass, !1), lt({
      sortable: this,
      name: "unchoose",
      toEl: ze,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Be !== ze ? (ct >= 0 && (lt({
      rootEl: ze,
      name: "add",
      toEl: ze,
      fromEl: Be,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "remove",
      toEl: ze,
      originalEvent: t
    }), lt({
      rootEl: ze,
      name: "sort",
      toEl: ze,
      fromEl: Be,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), Ze && Ze.save()) : ct !== hn && ct >= 0 && (lt({
      sortable: this,
      name: "update",
      toEl: ze,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), se.active && ((ct == null || ct === -1) && (ct = hn, Lt = Nn), lt({
      sortable: this,
      name: "end",
      toEl: ze,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    rt("nulling", this), Be = J = ze = me = Jt = Pe = _l = Nt = Xt = mt = jn = ct = Lt = hn = Nn = fn = Rn = Ze = dl = se.dragged = se.ghost = se.clone = se.active = null, Nl.forEach(function(t) {
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
        J && (this._onDragOver(t), ly(t));
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
    for (var t = [], n, l = this.el.children, o = 0, i = l.length, a = this.options; o < i; o++)
      n = l[o], gt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || uy(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var l = {}, o = this.el;
    this.toArray().forEach(function(i, a) {
      var r = o.children[a];
      gt(r, this.options.draggable, o, !1) && (l[i] = r);
    }, this), n && this.captureAnimationState(), t.forEach(function(i) {
      l[i] && (o.removeChild(l[i]), o.appendChild(l[i]));
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
    return gt(t, n || this.options.draggable, this.el, !1);
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
    typeof o < "u" ? l[t] = o : l[t] = n, t === "group" && Ls(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    rt("destroy", this);
    var t = this.el;
    t[st] = null, $e(t, "mousedown", this._onTapStart), $e(t, "touchstart", this._onTapStart), $e(t, "pointerdown", this._onTapStart), this.nativeDraggable && ($e(t, "dragover", this), $e(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Fl.splice(Fl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Nt) {
      if (rt("hideClone", this), se.eventCanceled)
        return;
      fe(Pe, "display", "none"), this.options.removeCloneOnHide && Pe.parentNode && Pe.parentNode.removeChild(Pe), Nt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Nt) {
      if (rt("showClone", this), se.eventCanceled)
        return;
      J.parentNode == Be && !this.options.group.revertClone ? Be.insertBefore(Pe, J) : Jt ? Be.insertBefore(Pe, Jt) : Be.appendChild(Pe), this.options.group.revertClone && this.animate(J, Pe), fe(Pe, "display", ""), Nt = !1;
    }
  }
};
function ly(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function vl(e, t, n, l, o, i, a, r) {
  var s, u = e[st], c = u.options.onMove, f;
  return window.CustomEvent && !Tt && !Jn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = l, s.related = o || t, s.relatedRect = i || Re(t), s.willInsertAfter = r, s.originalEvent = a, e.dispatchEvent(s), c && (f = c.call(u, s, a)), f;
}
function ea(e) {
  e.draggable = !1;
}
function oy() {
  va = !1;
}
function ay(e, t, n) {
  var l = Re(kn(n.el, 0, n.options, !0)), o = Ds(n.el, n.options, me), i = 10;
  return t ? e.clientX < o.left - i || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - i || e.clientY < l.bottom && e.clientX < l.left;
}
function iy(e, t, n) {
  var l = Re(Na(n.el, n.options.draggable)), o = Ds(n.el, n.options, me), i = 10;
  return t ? e.clientX > o.right + i || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + i || e.clientX > l.right && e.clientY > l.top;
}
function ry(e, t, n, l, o, i, a, r) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, c = l ? n.top : n.left, f = l ? n.bottom : n.right, g = !1;
  if (!a) {
    if (r && $l < u * o) {
      if (!qn && (Rn === 1 ? s > c + u * i / 2 : s < f - u * i / 2) && (qn = !0), qn)
        g = !0;
      else if (Rn === 1 ? s < c + $l : s > f - $l)
        return -Rn;
    } else if (s > c + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return sy(t);
  }
  return g = g || a, g && (s < c + u * i / 2 || s > f - u * i / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function sy(e) {
  return vt(J) < vt(e) ? 1 : -1;
}
function uy(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function cy(e) {
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
eo && ke(document, "touchmove", function(e) {
  (se.active || pn) && e.cancelable && e.preventDefault();
});
se.utils = {
  on: ke,
  off: $e,
  css: fe,
  find: Ps,
  is: function(t, n) {
    return !!gt(t, n, t, !1);
  },
  extend: Ub,
  throttle: js,
  closest: gt,
  toggleClass: ut,
  clone: Ms,
  index: vt,
  nextTick: wl,
  cancelNextTick: ha,
  detectDirection: As,
  getChild: kn,
  expando: st
};
se.get = function(e) {
  return e[st];
};
se.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (se.utils = St(St({}, se.utils), l.utils)), el.mount(l);
  });
};
se.create = function(e, t) {
  return new se(e, t);
};
se.version = Hb;
var Fe = [], Tn, ma, ga = !1, ta, na, Rl, Mn;
function dy() {
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
      this.sortable.nativeDraggable ? $e(document, "dragover", this._handleAutoScroll) : ($e(document, "pointermove", this._handleFallbackAutoScroll), $e(document, "touchmove", this._handleFallbackAutoScroll), $e(document, "mousemove", this._handleFallbackAutoScroll)), Br(), kl(), Kb();
    },
    nulling: function() {
      Rl = ma = Tn = ga = Mn = ta = na = null, Fe.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var o = this, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, r = document.elementFromPoint(i, a);
      if (Rl = n, l || this.options.forceAutoScrollFallback || Jn || Tt || Ln) {
        la(n, this.options, r, l);
        var s = Rt(r, !0);
        ga && (!Mn || i !== ta || a !== na) && (Mn && Br(), Mn = setInterval(function() {
          var u = Rt(document.elementFromPoint(i, a), !0);
          u !== s && (s = u, kl()), la(n, o.options, u, l);
        }, 10), ta = i, na = a);
      } else {
        if (!this.options.bubbleScroll || Rt(r, !0) === wt()) {
          kl();
          return;
        }
        la(n, this.options, Rt(r, !1), !1);
      }
    }
  }, Pt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function kl() {
  Fe.forEach(function(e) {
    clearInterval(e.pid);
  }), Fe = [];
}
function Br() {
  clearInterval(Mn);
}
var la = js(function(e, t, n, l) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, r = t.scrollSpeed, s = wt(), u = !1, c;
    ma !== n && (ma = n, kl(), Tn = t.scroll, c = t.scrollFn, Tn === !0 && (Tn = Rt(n, !0)));
    var f = 0, g = Tn;
    do {
      var h = g, b = Re(h), _ = b.top, D = b.bottom, T = b.left, k = b.right, V = b.width, C = b.height, M = void 0, $ = void 0, O = h.scrollWidth, N = h.scrollHeight, Y = fe(h), R = h.scrollLeft, v = h.scrollTop;
      h === s ? (M = V < O && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), $ = C < N && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (M = V < O && (Y.overflowX === "auto" || Y.overflowX === "scroll"), $ = C < N && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var E = M && (Math.abs(k - o) <= a && R + V < O) - (Math.abs(T - o) <= a && !!R), S = $ && (Math.abs(D - i) <= a && v + C < N) - (Math.abs(_ - i) <= a && !!v);
      if (!Fe[f])
        for (var z = 0; z <= f; z++)
          Fe[z] || (Fe[z] = {});
      (Fe[f].vx != E || Fe[f].vy != S || Fe[f].el !== h) && (Fe[f].el = h, Fe[f].vx = E, Fe[f].vy = S, clearInterval(Fe[f].pid), (E != 0 || S != 0) && (u = !0, Fe[f].pid = setInterval(function() {
        l && this.layer === 0 && se.active._onTouchMove(Rl);
        var K = Fe[this.layer].vy ? Fe[this.layer].vy * r : 0, W = Fe[this.layer].vx ? Fe[this.layer].vx * r : 0;
        typeof c == "function" && c.call(se.dragged.parentNode[st], W, K, e, Rl, Fe[this.layer].el) !== "continue" || Ts(Fe[this.layer].el, W, K);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && g !== s && (g = Rt(g, !1)));
    ga = u;
  }
}, 30), Rs = function(t) {
  var n = t.originalEvent, l = t.putSortable, o = t.dragEl, i = t.activeSortable, a = t.dispatchSortableEvent, r = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = l || i;
    r();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(c.clientX, c.clientY);
    s(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: l
    }));
  }
};
function Ra() {
}
Ra.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var o = kn(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: Rs
};
Pt(Ra, {
  pluginName: "revertOnSpill"
});
function qa() {
}
qa.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable, o = l || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Rs
};
Pt(qa, {
  pluginName: "removeOnSpill"
});
se.mount(new dy());
se.mount(qa, Ra);
const Mt = (e) => (He("data-v-09483bfa"), e = e(), We(), e), fy = {
  class: "editor-built-in-control-commen-multiple"
}, py = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), vy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), hy = {
  class: "flex mt24 options"
}, my = {
  class: "select-group"
}, gy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), by = ["onClick"], yy = {
  class: "add-btn"
}, _y = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), $y = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), wy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), ky = {
  class: "flex mt24 options"
}, Cy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), Sy = {
  class: "flex mt24 options"
}, Vy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少选择数", -1)), Oy = {
  class: "pl24"
}, Ey = {
  class: "flex mt24 options"
}, xy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多选择数", -1)), By = {
  class: "pl24"
}, Iy = /* @__PURE__ */ F({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(a, r) {
      t.block.props[r].defaultValue = a ? "1" : "2";
    }
    function l(a) {
      a.id = a.name;
    }
    function o(a) {
      if (t.block.props.options.defaultValue.length == 1) {
        Ye.warning("至少保留一项哦！");
        return;
      }
      t.block.props.options.defaultValue.splice(a, 1);
    }
    function i() {
      let a = {
        name: "",
        id: "",
        key: Math.random() * 1e4 + ""
      };
      t.block.props.options.defaultValue.push(a);
    }
    return Ee(() => {
      let a = document.querySelector(".editor-built-in-control-commen-multiple .select-group");
      new se(a, {
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
        onEnd: function(r) {
          let s = r.newIndex, u = r.oldIndex, c = t.block.props.options.defaultValue[s], f = t.block.props.options.defaultValue[u];
          t.block.props.options.defaultValue[s] = f, t.block.props.options.defaultValue[u] = c;
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
    }), (a, r) => {
      const s = Yt, u = wn, c = $t;
      return y(), x("div", fy, [py, vy, p("div", hy, [p("ul", my, [(y(!0), x(Te, null, bt(e.block.props.options.defaultValue, (f, g) => (y(), x("li", {
        key: f.key,
        class: "useDrag"
      }, [gy, d(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (h) => f.name = h,
        onInput: (h) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), p("div", {
        class: "del",
        onClick: (h) => o(g)
      }, null, 8, by)]))), 128)), p("div", yy, [d(u, {
        style: {
          width: "254px"
        },
        onClick: i
      }, {
        default: le(() => [_y, $y]),
        _: 1
      })])])]), wy, p("div", ky, [Cy, p("div", null, [d(c, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: r[0] || (r[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", Sy, [Vy, p("div", Oy, [d(s, {
        modelValue: e.block.props.selectMin.defaultValue,
        "onUpdate:modelValue": r[1] || (r[1] = (f) => e.block.props.selectMin.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", Ey, [xy, p("div", By, [d(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": r[2] || (r[2] = (f) => e.block.props.selectMax.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const Py = /* @__PURE__ */ Ce(Iy, [["__scopeId", "data-v-09483bfa"]]), jy = {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  // formItemField: "1",
  value: [],
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(Fb, {
      style: {},
      title: t.title.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1",
      options: t.options.defaultValue
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "多选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "多选"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
    },
    options: {
      label: "选项",
      defaultValue: [{
        name: "",
        id: "",
        key: Math.random() * 1e4 + ""
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
  controlView: (e, t) => d(Py, {
    block: e
  })
}, Ty = (e) => (He("data-v-97d898bf"), e = e(), We(), e), My = {
  class: "title-tip"
}, Dy = {
  key: 0,
  class: "red"
}, zy = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "8px",
    "margin-bottom": "12px"
  }
}, Ay = {
  class: "form-item"
}, Ly = /* @__PURE__ */ Ty(() => /* @__PURE__ */ p("div", {
  class: "right"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), Fy = /* @__PURE__ */ F({
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
    },
    options: {
      type: Array,
      default: () => []
    },
    tip: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    function t() {
      Ye.warning("请在移动端预览真机效果！");
    }
    return (n, l) => (y(), x("div", {
      class: "editor-built-in-commen-radio",
      style: pe(e.style)
    }, [p("div", My, [e.isRequire ? (y(), x("span", Dy, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", zy, ve(e.tip), 1)) : te("", !0), p("div", Ay, [p("div", {
      class: "item",
      onClick: t
    }, [p("span", null, ve(e.placeholder), 1), Ly])])], 4));
  }
});
const Ny = /* @__PURE__ */ Ce(Fy, [["__scopeId", "data-v-97d898bf"]]), sn = (e) => (He("data-v-6565436c"), e = e(), We(), e), Ry = {
  class: "editor-built-in-control-commen-radio"
}, qy = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), Hy = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), Wy = {
  class: "flex mt24 options"
}, Uy = {
  class: "select-group"
}, Ky = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), Yy = ["onClick"], Gy = {
  class: "add-btn"
}, Xy = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), Zy = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), Qy = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), Jy = {
  class: "flex mt24 options"
}, e0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), t0 = /* @__PURE__ */ F({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(a, r) {
      t.block.props[r].defaultValue = a ? "1" : "2";
    }
    function l(a) {
      a.id = a.name;
    }
    function o(a) {
      if (t.block.props.options.defaultValue.length == 1) {
        Ye.warning("至少保留一项哦！");
        return;
      }
      t.block.props.options.defaultValue.splice(a, 1);
    }
    function i() {
      let a = {
        name: "",
        id: "",
        key: Math.random() * 1e4 + ""
      };
      t.block.props.options.defaultValue.push(a);
    }
    return Ee(() => {
      let a = document.querySelector(".editor-built-in-control-commen-radio .select-group");
      new se(a, {
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
        onEnd: function(r) {
          let s = r.newIndex, u = r.oldIndex, c = t.block.props.options.defaultValue[s], f = t.block.props.options.defaultValue[u];
          t.block.props.options.defaultValue[s] = f, t.block.props.options.defaultValue[u] = c;
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
    }), (a, r) => {
      const s = Yt, u = wn, c = $t;
      return y(), x("div", Ry, [qy, Hy, p("div", Wy, [p("ul", Uy, [(y(!0), x(Te, null, bt(e.block.props.options.defaultValue, (f, g) => (y(), x("li", {
        key: f.key,
        class: "useDrag"
      }, [Ky, d(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (h) => f.name = h,
        onInput: (h) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), p("div", {
        class: "del",
        onClick: (h) => o(g)
      }, null, 8, Yy)]))), 128)), p("div", Gy, [d(u, {
        style: {
          width: "254px"
        },
        onClick: i
      }, {
        default: le(() => [Xy, Zy]),
        _: 1
      })])])]), Qy, p("div", Jy, [e0, p("div", null, [d(c, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: r[0] || (r[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const n0 = /* @__PURE__ */ Ce(t0, [["__scopeId", "data-v-6565436c"]]), l0 = {
  group: "个人信息（自定义）",
  name: "commenRadio",
  value: "",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(Ny, {
      style: {},
      title: t.title.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      options: t.options.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : ""
    });
  },
  label: "单选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "单选"
    },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请选择内容"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
    },
    options: {
      label: "选项",
      defaultValue: [{
        name: "",
        id: "",
        key: Math.random() * 1e4 + ""
      }]
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => d(n0, {
    block: e
  })
}, qs = (e) => (He("data-v-147689a0"), e = e(), We(), e), o0 = {
  class: "title-tip mb8"
}, a0 = {
  key: 0,
  class: "red"
}, i0 = {
  key: 0,
  class: "base-tip"
}, r0 = {
  class: "form-item"
}, s0 = {
  class: "item"
}, u0 = {
  class: "item flex"
}, c0 = {
  class: "input"
}, d0 = /* @__PURE__ */ qs(() => /* @__PURE__ */ p("div", {
  class: "success"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), f0 = /* @__PURE__ */ qs(() => /* @__PURE__ */ p("div", {
  class: "button"
}, "发送验证码", -1)), p0 = /* @__PURE__ */ F({
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
    },
    tip: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => {
      const l = Yt;
      return y(), x("div", {
        class: "editor-built-in-check-phone",
        style: pe(e.style)
      }, [p("div", o0, [e.isRequire ? (y(), x("span", a0, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", i0, ve(e.tip), 1)) : te("", !0), p("div", r0, [p("div", s0, [d(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder
      }, null, 8, ["placeholder"])]), p("div", u0, [p("div", c0, [d(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          flex: "1"
        },
        placeholder: "验证码"
      }), d0]), f0])])], 4);
    };
  }
});
const v0 = /* @__PURE__ */ Ce(p0, [["__scopeId", "data-v-147689a0"]]), tl = (e) => (He("data-v-f4a10f1d"), e = e(), We(), e), h0 = {
  class: "editor-built-in-control-check-phone"
}, m0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), g0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), b0 = {
  class: "flex mt24 options"
}, y0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), _0 = {
  class: "flex mt24 options"
}, $0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), w0 = {
  key: 0,
  class: "flex mt24 options"
}, k0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "校验周期（h）", -1)), C0 = {
  class: "pl24"
}, S0 = /* @__PURE__ */ F({
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
      const i = $t, a = Vt;
      return y(), x("div", h0, [m0, g0, p("div", b0, [y0, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", _0, [$0, p("div", null, [d(i, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (y(), x("div", w0, [k0, p("div", C0, [d(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.cycle.defaultValue = r),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : te("", !0)]);
    };
  }
});
const V0 = /* @__PURE__ */ Ce(S0, [["__scopeId", "data-v-f4a10f1d"]]), O0 = {
  group: "个人信息",
  name: "checkPhone",
  addOnly: !0,
  value: ["", ""],
  formItemField: "sms_code",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(v0, {
      style: {},
      title: t.title.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1",
      only: t.only.defaultValue == "1"
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "手机验证",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "电话"
    },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请输入电话"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
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
  controlView: (e, t) => d(V0, {
    block: e
  })
}, E0 = {
  class: "title-tip mb8"
}, x0 = {
  key: 0,
  class: "red"
}, B0 = {
  key: 0,
  class: "base-tip"
}, I0 = {
  class: "form-item"
}, P0 = /* @__PURE__ */ F({
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
    tip: {
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
      const l = Yt;
      return y(), x("div", {
        class: "editor-built-in-registor-person-name",
        style: pe(e.style)
      }, [p("div", E0, [e.isRequire ? (y(), x("span", x0, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", B0, ve(e.tip), 1)) : te("", !0), p("div", I0, [d(l, {
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
const to = /* @__PURE__ */ Ce(P0, [["__scopeId", "data-v-c06a8f65"]]), un = (e) => (He("data-v-05a6c9a4"), e = e(), We(), e), j0 = {
  class: "editor-built-in-control-person-name"
}, T0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), M0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), D0 = {
  class: "flex mt24 options"
}, z0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), A0 = {
  class: "flex mt24 options"
}, L0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), F0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), N0 = {
  class: "flex mt24 options"
}, R0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), q0 = {
  class: "pl24"
}, H0 = {
  class: "flex mt24 options"
}, W0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), U0 = {
  class: "pl24 flex"
}, K0 = /* @__PURE__ */ F({
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
      const i = $t, a = Vt;
      return y(), x("div", j0, [T0, M0, p("div", D0, [z0, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", A0, [L0, p("div", null, [d(i, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "only"))
      }, null, 8, ["default-checked"])])]), F0, p("div", N0, [R0, p("div", q0, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.min.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", H0, [W0, p("div", U0, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (r) => e.block.props.max.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const Y0 = /* @__PURE__ */ Ce(K0, [["__scopeId", "data-v-05a6c9a4"]]), G0 = {
  group: "个人信息",
  name: "personName",
  value: "",
  addOnly: !0,
  formItemField: "name",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(to, {
      style: {},
      title: t.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1",
      only: t.only.defaultValue == "1",
      min: t.min.defaultValue * 1,
      max: t.max.defaultValue * 1
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "姓名",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "姓名"
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请输入姓名"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
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
  controlView: (e, t) => d(Y0, {
    block: e
  })
}, On = (e) => (He("data-v-3fd74b8f"), e = e(), We(), e), X0 = {
  class: "editor-built-in-control-person-other"
}, Z0 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), Q0 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), J0 = {
  class: "flex mt24 options"
}, e1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), t1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), n1 = {
  class: "flex mt24 options"
}, l1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), o1 = {
  class: "pl24"
}, a1 = {
  class: "flex mt24 options"
}, i1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), r1 = {
  class: "pl24 flex"
}, s1 = /* @__PURE__ */ F({
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
      const i = $t, a = Vt;
      return y(), x("div", X0, [Z0, Q0, p("div", J0, [e1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), t1, p("div", n1, [l1, p("div", o1, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (r) => e.block.props.min.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", a1, [i1, p("div", r1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.max.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const u1 = /* @__PURE__ */ Ce(s1, [["__scopeId", "data-v-3fd74b8f"]]), c1 = {
  group: "个人信息",
  name: "personOther",
  // value: "",
  addOnly: !0,
  // formItemField: "remark",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(to, {
      style: {},
      title: t.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1",
      min: t.min.defaultValue * 1,
      max: t.max.defaultValue * 1
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "其他信息",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "其他信息"
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请输入其他信息"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
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
  controlView: (e, t) => d(u1, {
    block: e
  })
}, nl = (e) => (He("data-v-df798f6e"), e = e(), We(), e), d1 = {
  class: "editor-built-in-control-person-phone"
}, f1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), p1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), v1 = {
  class: "flex mt24 options"
}, h1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), m1 = {
  class: "flex mt24 options"
}, g1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), b1 = {
  key: 0,
  class: "flex mt24 options"
}, y1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "校验周期（h）", -1)), _1 = {
  class: "pl24"
}, $1 = /* @__PURE__ */ F({
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
      const i = $t, a = Vt;
      return y(), x("div", d1, [f1, p1, p("div", v1, [h1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", m1, [g1, p("div", null, [d(i, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (y(), x("div", b1, [y1, p("div", _1, [d(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.cycle.defaultValue = r),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : te("", !0)]);
    };
  }
});
const w1 = /* @__PURE__ */ Ce($1, [["__scopeId", "data-v-df798f6e"]]), k1 = {
  group: "个人信息",
  name: "personPhone",
  value: "",
  addOnly: !0,
  formItemField: "phone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(to, {
      style: {},
      title: t.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1",
      only: t.only.defaultValue == "1"
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "电话",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "电话"
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请输入电话"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
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
  controlView: (e, t) => d(w1, {
    block: e
  })
}, C1 = (e) => (He("data-v-0cd61663"), e = e(), We(), e), S1 = {
  class: "title-tip"
}, V1 = {
  key: 0,
  class: "red"
}, O1 = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, E1 = {
  class: "item"
}, x1 = /* @__PURE__ */ C1(() => /* @__PURE__ */ p("div", {
  class: "right"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), B1 = /* @__PURE__ */ F({
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
    },
    tip: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    function t() {
      Ye.warning("请在移动端预览真机效果！");
    }
    return (n, l) => (y(), x("div", {
      class: "editor-built-in-commen-radio",
      style: pe(e.style)
    }, [p("div", S1, [e.isRequire ? (y(), x("span", V1, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", O1, ve(e.tip), 1)) : te("", !0), p("div", {
      class: "form-item",
      onClick: t
    }, [p("div", E1, [p("span", null, ve(e.placeholder), 1), x1])])], 4));
  }
});
const I1 = /* @__PURE__ */ Ce(B1, [["__scopeId", "data-v-0cd61663"]]), Ha = (e) => (He("data-v-fcdbe6a9"), e = e(), We(), e), P1 = {
  class: "editor-built-in-control-person-school"
}, j1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), T1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), M1 = {
  class: "flex mt24 options"
}, D1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), z1 = /* @__PURE__ */ F({
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
      const i = $t;
      return y(), x("div", P1, [j1, T1, p("div", M1, [D1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const A1 = /* @__PURE__ */ Ce(z1, [["__scopeId", "data-v-fcdbe6a9"]]), L1 = {
  group: "个人信息",
  name: "personProvince",
  value: "",
  formItemField: "province_id",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(I1, {
      style: {},
      title: t.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1"
    });
  },
  label: "省份",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "所在省份"
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请选择所在省份"
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
  controlView: (e, t) => d(A1, {
    block: e
  })
}, En = (e) => (He("data-v-1418313e"), e = e(), We(), e), F1 = {
  class: "editor-built-in-control-person-school"
}, N1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), R1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), q1 = {
  class: "flex mt24 options"
}, H1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), W1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), U1 = {
  class: "flex mt24 options"
}, K1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), Y1 = {
  class: "pl24"
}, G1 = {
  class: "flex mt24 options"
}, X1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), Z1 = {
  class: "pl24 flex"
}, Q1 = /* @__PURE__ */ F({
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
      const i = $t, a = Vt;
      return y(), x("div", F1, [N1, R1, p("div", q1, [H1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), W1, p("div", U1, [K1, p("div", Y1, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (r) => e.block.props.min.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", G1, [X1, p("div", Z1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.max.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const J1 = /* @__PURE__ */ Ce(Q1, [["__scopeId", "data-v-1418313e"]]), e_ = {
  group: "个人信息",
  name: "personSchool",
  value: "",
  formItemField: "school_id",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(to, {
      style: {},
      title: t.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1",
      min: t.min.defaultValue * 1,
      max: t.max.defaultValue * 1
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "学校",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "所在中学"
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请输入所在中学"
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: ""
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
  controlView: (e, t) => d(J1, {
    block: e
  })
}, t_ = (e) => (He("data-v-22530c73"), e = e(), We(), e), n_ = {
  class: "title-tip mb8"
}, l_ = {
  key: 0,
  class: "red"
}, o_ = {
  class: "form-item"
}, a_ = /* @__PURE__ */ t_(() => /* @__PURE__ */ p("div", {
  class: "btn"
}, [/* @__PURE__ */ p("span", null, "上传文件"), /* @__PURE__ */ p("input", {
  type: "file",
  class: "file"
})], -1)), i_ = {
  key: 0,
  class: "tip title-tip"
}, r_ = /* @__PURE__ */ F({
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
    return (t, n) => (y(), x("div", {
      class: "editor-built-in-person-upload",
      style: pe(e.style)
    }, [p("div", n_, [e.isRequire ? (y(), x("span", l_, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), p("div", o_, [a_, e.tip ? (y(), x("div", i_, ve(e.tip), 1)) : te("", !0)])], 4));
  }
});
const s_ = /* @__PURE__ */ Ce(r_, [["__scopeId", "data-v-22530c73"]]), Wa = (e) => (He("data-v-be68881f"), e = e(), We(), e), u_ = {
  class: "editor-built-in-control-person-upload"
}, c_ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), d_ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), f_ = {
  class: "flex mt24 options"
}, p_ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), v_ = /* @__PURE__ */ F({
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
      const i = $t;
      return y(), x("div", u_, [c_, d_, p("div", f_, [p_, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const h_ = /* @__PURE__ */ Ce(v_, [["__scopeId", "data-v-be68881f"]]), m_ = {
  group: "个人信息",
  label: "上传文件",
  name: "personUpload",
  value: [],
  formItemField: "file_url",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(s_, {
      style: {},
      title: t.title.defaultValue,
      max: t.max.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : ""
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
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
  controlView: (e, t) => d(h_, {
    block: e
  })
}, Ua = (e) => (He("data-v-169f549c"), e = e(), We(), e), g_ = {
  class: "editor-built-in-control-person-year"
}, b_ = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), y_ = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), __ = {
  class: "flex mt24 options"
}, $_ = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), w_ = /* @__PURE__ */ F({
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
      const i = $t;
      return y(), x("div", g_, [b_, y_, p("div", __, [$_, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const k_ = /* @__PURE__ */ Ce(w_, [["__scopeId", "data-v-169f549c"]]), C_ = {
  class: "title-tip mb8"
}, S_ = {
  key: 0,
  class: "red"
}, V_ = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, O_ = {
  class: "form-item"
}, E_ = /* @__PURE__ */ F({
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
    tip: {
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
      const l = gn, o = ja;
      return y(), x("div", {
        class: "editor-built-in-person-year",
        style: pe(e.style)
      }, [p("div", C_, [e.isRequire ? (y(), x("span", S_, "*")) : te("", !0), p("span", null, ve(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", V_, ve(e.tip), 1)) : te("", !0), p("div", O_, [d(o, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder,
        "model-value": e.value
      }, {
        default: le(() => [d(l, {
          value: 2020
        }, {
          default: le(() => [ye("2020")]),
          _: 1
        }), d(l, {
          value: 2021
        }, {
          default: le(() => [ye("2021")]),
          _: 1
        }), d(l, {
          value: 2022
        }, {
          default: le(() => [ye("2022")]),
          _: 1
        }), d(l, {
          value: 2023
        }, {
          default: le(() => [ye("2023")]),
          _: 1
        }), d(l, {
          value: 2024
        }, {
          default: le(() => [ye("2024")]),
          _: 1
        }), d(l, {
          value: 2025
        }, {
          default: le(() => [ye("2025")]),
          _: 1
        }), d(l, {
          value: 2026
        }, {
          default: le(() => [ye("2026")]),
          _: 1
        }), d(l, {
          value: 2027
        }, {
          default: le(() => [ye("2027")]),
          _: 1
        }), d(l, {
          value: 2028
        }, {
          default: le(() => [ye("2028")]),
          _: 1
        }), d(l, {
          value: 2029
        }, {
          default: le(() => [ye("2029")]),
          _: 1
        }), d(l, {
          value: 2030
        }, {
          default: le(() => [ye("2030")]),
          _: 1
        })]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const x_ = /* @__PURE__ */ Ce(E_, [["__scopeId", "data-v-a097dbfe"]]), B_ = {
  group: "个人信息",
  name: "personYear",
  value: "",
  formItemField: "year",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(x_, {
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      isRequire: t.isRequire.defaultValue == "1"
    });
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
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
      label: "默认文案",
      type: "input",
      defaultValue: "请选择参加高考年份"
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
  controlView: (e, t) => d(k_, {
    block: e
  })
}, oa = {
  baseText: Gg,
  baseImg: eb,
  baseSubmit: yb,
  baseTitle: wb,
  baseSuccess: Ib,
  commenMultiple: jy,
  commenRadio: l0,
  checkPhone: O0,
  personName: G0,
  personOther: c1,
  personPhone: k1,
  personProvince: L1,
  personSchool: e_,
  personUpload: m_,
  personYear: B_
};
function Hs(e, t, n = "push") {
  t.forEach((l) => {
    if (oa[l])
      e.registry(l, oa[l], n);
    else {
      let o = Object.keys(oa);
      console.error(`内置组件不合法，仅支持：${o.join(",")}共${o.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const Ws = [
  "baseImg",
  "baseSubmit",
  "baseText",
  "baseTitle",
  // "baseSuccess",
  "checkPhone",
  "personName",
  "personOther",
  "personPhone",
  "personProvince",
  "personSchool",
  "personUpload",
  "personYear",
  "commenMultiple",
  "commenRadio"
], no = (e) => (He("data-v-a82634a3"), e = e(), We(), e), I_ = {
  class: "visual-tab-type"
}, P_ = /* @__PURE__ */ no(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), j_ = /* @__PURE__ */ no(() => /* @__PURE__ */ p("span", null, "组件", -1)), T_ = [P_, j_], M_ = /* @__PURE__ */ no(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), D_ = /* @__PURE__ */ no(() => /* @__PURE__ */ p("span", null, "页面", -1)), z_ = [M_, D_], A_ = /* @__PURE__ */ F({
  __name: "leftNav",
  props: {
    modelValue: {
      type: String,
      default: "1"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, {
    emit: t
  }) {
    function n(l) {
      t("update:modelValue", l), t("change", l);
    }
    return (l, o) => (y(), x("div", I_, [p("div", {
      class: G(["visual-tab-type-com", {
        active: e.modelValue == "1"
      }]),
      onClick: o[0] || (o[0] = (i) => n("1"))
    }, T_, 2), p("div", {
      class: G(["visual-tab-type-com visual-tab-type-template", {
        active: e.modelValue == "2"
      }]),
      onClick: o[1] || (o[1] = (i) => n("2"))
    }, z_, 2)]));
  }
});
const Ir = /* @__PURE__ */ Ce(A_, [["__scopeId", "data-v-a82634a3"]]), L_ = {
  class: "buttons"
}, F_ = ["onClick"], N_ = ["src"], R_ = /* @__PURE__ */ F({
  __name: "shortcut-button",
  props: {
    buttons: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    function t(n) {
      return n.tip ? `${n.label}(${n.tip})` : `${n.label}`;
    }
    return (n, l) => {
      const o = Zn;
      return y(), x("div", L_, [(y(!0), x(Te, null, bt(e.buttons, (i, a) => (y(), x("div", {
        class: "button",
        key: a,
        onClick: i.handler
      }, [(y(), ce(o, {
        content: t(i),
        position: "right",
        key: a
      }, {
        default: le(() => [p("img", {
          src: i.icon,
          alt: ""
        }, null, 8, N_)]),
        _: 2
      }, 1032, ["content"]))], 8, F_))), 128))]);
    };
  }
});
const q_ = /* @__PURE__ */ Ce(R_, [["__scopeId", "data-v-b334d714"]]), H_ = /* @__PURE__ */ F({
  components: {
    editorBlock: Ml,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: $r,
    leftNav: Ir,
    shortcutButton: q_
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
      type: Function
    },
    builtInComs: {
      type: Array,
      default: () => Ws
    },
    visableHead: {
      // 显示顶部导航条
      type: Boolean,
      default: !0
    },
    visableNavbar: {
      // 显示左侧导航条
      type: Boolean,
      default: !0
    },
    visableNavMenu: {
      // 显示菜单
      type: Boolean,
      default: !0
    },
    debug: {
      type: Boolean,
      default: !1
    },
    builtInComsControlView: {
      // 通过传入的组件强控制显示与否
      type: Boolean,
      default: !1
    },
    pushType: {
      // 内置组件 是插入自定义组件 前 还是注册后
      type: String,
      default: "push"
    },
    dragMove: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    var O, N, Y, R;
    if (window.visualSystem = {}, (O = e.modelValue) != null && O.container)
      (N = e.modelValue) != null && N.container.width || (e.modelValue.container.width = 350), (Y = e.modelValue) != null && Y.container.height || (e.modelValue.container.height = 600);
    else
      throw new Error("请检查传入的container！");
    (R = e == null ? void 0 : e.builtInComs) != null && R.length && Hs(ot, e.builtInComs, e.pushType), e.fileUploadHandler && Object.defineProperty(window.visualSystem, "fileUploadHandler", {
      get() {
        return e.fileUploadHandler;
      }
    });
    const {
      shiftMove: l = !1,
      shortcutKeys: o = !1
    } = e.config;
    let i = Mr(() => e.modelValue, (v) => t("update:modelValue", v)), a = je({
      // 当前选中的元素
      selectedBlock: null
    }), r = m(() => ({
      width: i.value.container.width + "px",
      minHeight: i.value.container.height + "px",
      // transform: `scale(${model.value.container.scale / 100})`,
      background: `url(${i.value.container.backgroundImage}) no-repeat top center`,
      backgroundColor: i.value.container.backgroundColor,
      backgroundSize: "cover"
    }));
    function s() {
      var v;
      (((v = e.modelValue) == null ? void 0 : v.blocks) || []).map((E) => (E.focus = !1, E));
    }
    function u(v) {
      M.cacheView = null, i.value = {
        ...i.value,
        blocks: Ne(v)
      };
    }
    function c(v) {
      i.value.blocks.forEach((E) => {
        if (v.id == E.id)
          for (let S in E)
            M.cacheView = null, E[S] = Ne(v[S]);
      });
    }
    function f(v) {
      let E = document.querySelectorAll(".editor-bloack");
      E && (E = Array.from(E)), E.forEach((S) => {
        S.classList.remove("editor-bloack-drag-active");
      }), v && v.classList.add("editor-bloack-drag-active");
    }
    const g = I(null), h = function() {
      let v = {
        component: null
      }, E = {
        dragstart(S, z) {
          var K, W, X, A;
          (K = g.value) == null || K.addEventListener("dragenter", E.dragenter), (W = g.value) == null || W.addEventListener("dragover", E.dragover), (X = g.value) == null || X.addEventListener("dragleave", E.dragleave), (A = g.value) == null || A.addEventListener("drop", E.drop), v.component = z, Dl.emit();
        },
        dragenter(S) {
          Array.from(S.target.classList).includes("editor-bloack") ? f(S.target) : f(), S.dataTransfer.dropEffect = "move";
        },
        dragleave(S) {
          S.dataTransfer.dropEffect = "none";
        },
        dragend(S) {
          var z, K, W, X;
          (z = g.value) == null || z.removeEventListener("dragenter", E.dragenter), (K = g.value) == null || K.removeEventListener("dragover", E.dragover), (W = g.value) == null || W.removeEventListener("dragleave", E.dragleave), (X = g.value) == null || X.removeEventListener("drop", E.drop), v.component = null, zl.emit(), f();
        },
        dragover(S) {
          S.preventDefault();
        },
        drop(S) {
          var A;
          let z = v.component, K = z == null ? void 0 : z.dragMode, W = Ga({
            dragMode: K || "",
            widthAdaption100: z.widthAdaption100 ? z.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: z.name,
            props: z.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1,
            formItemField: z.formItemField ? z.formItemField : ""
          });
          if (z != null && z.addOnly && !yr(W, (A = e.modelValue) == null ? void 0 : A.blocks)) {
            Ye.warning("此组件不能添加多个哦！");
            return;
          }
          let X = S.target.dataset;
          "index" in X ? k.add(W, X.index) : k.add(W);
        },
        click(S, z) {
          var X;
          let K = z == null ? void 0 : z.dragMode, W = Ga({
            dragMode: K || "",
            widthAdaption100: z.widthAdaption100 ? z.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: z.name,
            props: z.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1,
            formItemField: z.formItemField ? z.formItemField : ""
          });
          if (z != null && z.addOnly && !yr(W, (X = e.modelValue) == null ? void 0 : X.blocks)) {
            Ye.warning("此组件不能添加多个哦！");
            return;
          }
          z.pushType && z.pushType == "unshift" ? k.unshiftadd(W) : k.add(W);
        }
      };
      return E;
    }(), b = m(() => {
      var v, E, S;
      return {
        blurBlock: (v = e.modelValue) == null ? void 0 : v.blocks.filter((z) => !z.focus),
        // 当前失去焦点的模块
        focusBlock: (E = e.modelValue) == null ? void 0 : E.blocks.filter((z) => z.focus),
        // 当前获得焦点的模块
        cBlock: (S = e.modelValue) == null ? void 0 : S.blocks.find((z) => z.focus)
        // 当前获得焦点的模块
      };
    }), _ = function() {
      const v = {
        sortEndBlock: {},
        block: {},
        ele: null,
        positionInfo: {},
        startX: 0,
        startY: 0,
        clientY: 0,
        draging: !1,
        // 是否在拖拽
        startLeft: 0,
        startTop: 0
      };
      function E(A) {
        const {
          pageX: ee,
          pageY: B
        } = A;
        let w = !1;
        i.value.blocks.forEach((H) => {
          let Q = document.querySelector("#block" + H.id.replace("$", ""));
          const {
            width: he,
            height: _e,
            left: re,
            top: xe
          } = Q.getBoundingClientRect();
          ee < he + re && ee > re && B < _e + xe && B > xe && v.block.id != H.id && (f(Q), v.sortEndBlock = H, w = !0);
        }), w || (f(), v.sortEndBlock = {});
      }
      function S() {
        v.ele.style.position = "relative", v.ele.style.transition = "none", v.ele.style.left = 0 + "px", v.ele.style.top = 0 + "px", v.ele.style.width = "100%", v.ele.style.height = "auto", setTimeout(() => {
          v.ele.style.transition = "all 0.25s";
        }, 100);
      }
      function z(A, ee) {
        v.block = ee, A.stopPropagation(), A.preventDefault(), v.ele = A.target, v.positionInfo = A.target.getBoundingClientRect(), v.startX = A.pageX, v.startY = A.pageY, v.clientY = A.clientY, v.draging = !1, document.addEventListener("mousemove", K), document.addEventListener("mouseup", W), document.addEventListener("contextmenu", X);
      }
      function K(A) {
        let ee = A.pageX - (v.startX - v.positionInfo.left), B = A.pageY - (v.startY - v.positionInfo.top);
        Math.abs(A.clientY - v.clientY) > 10 && (v.draging || (v.draging = !0), v.ele.style.width = v.positionInfo.width + "px", v.ele.style.height = v.positionInfo.height + "px", v.ele.style.left = ee + "px", v.ele.style.top = B + "px", v.ele.style.position = "fixed", v.ele.style.zIndex = "10", v.ele.style.transition = "none", E({
          pageX: A.pageX,
          pageY: A.pageY
        }));
      }
      function W(A) {
        document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", W), f(), v.draging && (v.draging = !1, v.sortEndBlock.id && k.transposition(v.block, v.sortEndBlock), v.ele.style.transition = "all 0.25s", v.ele.style.left = v.positionInfo.left + "px", v.ele.style.top = v.positionInfo.top + "px", v.ele.style.zIndex = "0", v.ele.style.position = "fixed", v.ele.style.width = v.positionInfo.width + "px", v.ele.style.height = v.positionInfo.height + "px", setTimeout(S, 100));
      }
      function X(A) {
        A.preventDefault(), S();
      }
      return {
        mousedown: z
      };
    }();
    let D = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(v, E) {
          v.stopPropagation(), v.preventDefault(), s(), E.focus = !E.focus, a.selectedBlock = E, T.mousedown(v), e.dragMove && _.mousedown(v, E);
        }
      },
      container: {
        // 点击画布区域的处理的事情
        onMousedown(v) {
          v.preventDefault(), v.stopPropagation(), s(), a.selectedBlock = null;
        }
      }
    };
    const T = function() {
      const v = {
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
      function E(K) {
        var W, X, A;
        v.startX = K.clientX, v.startY = K.clientY, v.startPositon = (W = b.value.focusBlock || []) == null ? void 0 : W.map((ee) => ({
          left: ee.left,
          top: ee.top
        })), v.draging = !1, v.startLeft = (X = a.selectedBlock) == null ? void 0 : X.left, v.startTop = (A = a.selectedBlock) == null ? void 0 : A.top, document.addEventListener("mousemove", S), document.addEventListener("mouseup", z);
      }
      function S(K) {
        var B;
        v.draging || (v.draging = !0, Dl.emit());
        let {
          clientX: W,
          clientY: X
        } = K, {
          startX: A,
          startY: ee
        } = v;
        (B = b.value.focusBlock) == null || B.forEach((w, H) => {
          w.left = v.startPositon[H].left + (W - A), w.top = v.startPositon[H].top + (X - ee);
        });
      }
      function z(K) {
        document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", z), zl.emit();
      }
      return {
        mousedown: E
      };
    }(), k = qm({
      currentBlockInfo: b,
      updateBlocks: u,
      dataModel: i,
      shortcutKeys: o
    }), V = Rm(k, b, e.debug, e);
    function C(v) {
      k.delete(v);
    }
    const M = {
      // 操作的原数据
      originData: null,
      // 视图缓存
      cacheView: null,
      // 控制层渲染函数
      controlRender() {
        var S, z, K;
        if (((S = this.originData) == null ? void 0 : S.id) === ((z = b.value.cBlock) == null ? void 0 : z.id) && this.cacheView)
          return this.cacheView;
        let v = (K = b.value.cBlock) == null ? void 0 : K.componentKey, E = ot == null ? void 0 : ot.componentMap;
        return v && E && b.value.cBlock ? (this.originData = Ne(b.value.cBlock), this.cacheView = E[v].controlView(b.value.cBlock, c), this.cacheView) : null;
      },
      sure() {
        a.selectedBlock = null;
      },
      cancle() {
        c(this.originData), a.selectedBlock = null;
      },
      cancleEffect() {
        this.originData = null, this.cacheView = null, console.log("取消副作用");
      }
    };
    be(() => a.selectedBlock, (v) => {
      v || M.cancleEffect();
    });
    let $ = I("1");
    return () => d("div", {
      class: "visual-editor-container"
    }, [e.visableHead && n.header ? d("div", {
      class: "visual-editor-header"
    }, [n.header ? n.header() : null]) : null, d("div", {
      class: "visual-editor-core visual-editor"
    }, [d("div", {
      class: ["visual-editor-leftComponentsMenu", e.visableNavMenu ? "" : "hide"]
    }, [e.visableNavbar ? d(Ir, {
      modelValue: $.value,
      onChange: (v) => $.value = v
    }, null) : null, d("div", {
      class: ["visual-com-group", e.visableNavbar ? "" : "visual-com-group-not-navbar"]
    }, [$.value == "1" ? d($r, {
      componentLists: ot == null ? void 0 : ot.componentLists,
      menuDragInfo: h,
      builtInComsControlView: e.builtInComsControlView,
      key: e == null ? void 0 : e.builtInComs,
      builtInComs: e.builtInComs
    }, null) : d("div", null, [n.tempList && n.tempList()])])]), d("div", {
      class: "visual-editor-area-body"
    }, [d("div", {
      class: "visual-editor-area-container",
      onMousedown: () => s()
    }, [d("div", {
      class: "visual-editor-area-content",
      style: r.value,
      ref: g,
      onMousedown: (v) => D.container.onMousedown(v)
    }, [i.value.blocks.map((v, E) => {
      var S;
      return d("div", null, [d(Ml, {
        index: E,
        dragMove: e.dragMove,
        block: v,
        container: (S = e.modelValue) == null ? void 0 : S.container,
        onMousedown: (z) => D.block.onMousedown(z, v),
        onDelBlock: () => C(v),
        onUpBlock: k.up,
        onDownBlock: k.down,
        key: v.id
      }, null)]);
    })])])]), d("div", {
      class: "visual-editor-topMenu"
    }, [d(ue("shortcut-button"), {
      buttons: V
    }, null)]), d("div", {
      class: "visual-editor-right-seting"
    }, [cg(M.controlRender.bind(M), b, e.modelValue)])])]);
  }
});
const W_ = /* @__PURE__ */ F({
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
    Hs(ot, Ws);
    let n = Mr(() => e.modelValue, (o) => t("update:modelValue", o)), l = m(() => ({
      width: n.value.container.width + "px",
      // height: model.value.container.height + "px",
      background: `url(${n.value.container.backgroundImage}) no-repeat top center`,
      backgroundColor: n.value.container.backgroundColor,
      backgroundSize: "cover"
    }));
    return () => d("div", {
      class: "priview-visual-editor"
    }, [d("div", {
      class: "priview-visual-editor-area-body"
    }, [d("div", {
      class: "visual-editor-area-container"
    }, [d("div", {
      class: "visual-editor-area-content",
      style: l.value
    }, [n.value.blocks.map((o, i) => {
      var a;
      return d("div", null, [d(Ml, {
        index: i,
        block: o,
        priview: !0,
        container: (a = e.modelValue) == null ? void 0 : a.container,
        key: o.id
      }, null)]);
    })])])])]);
  }
}), Us = ot.registry, Ks = H_, U_ = W_, K_ = function(e, t = "push") {
  Us(e.name, e, t), Os.emit(e);
}, Y_ = function(e) {
  Ks.batchRegistry(e);
}, G_ = function() {
  return ot == null ? void 0 : ot.componentLists;
}, Q_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: Us,
  batchRegistry: Y_,
  logConfig: G_,
  priviewVisualEditor: U_,
  registry: K_,
  visualEditor: Ks
}, Symbol.toStringTag, { value: "Module" }));
export {
  Q_ as all,
  Y_ as batchRegistry,
  Q_ as default,
  G_ as logConfig,
  U_ as priviewVisualEditor,
  K_ as registry,
  Ks as visualEditor
};
