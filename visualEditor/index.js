var eu = Object.defineProperty;
var tu = (e, t, n) => t in e ? eu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Xa = (e, t, n) => (tu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as P, watch as be, computed as h, reactive as Pe, inject as Xe, getCurrentInstance as Yn, cloneVNode as Yl, defineComponent as N, onMounted as xe, onUnmounted as Gl, openBlock as y, createElementBlock as O, normalizeClass as G, renderSlot as se, normalizeStyle as pe, createElementVNode as v, resolveComponent as ue, createBlock as re, createCommentVNode as te, toRef as Hn, toRefs as ye, createVNode as d, mergeProps as Oe, createTextVNode as Ce, nextTick as Le, provide as jt, Fragment as we, createSlots as Ti, withCtx as le, withModifiers as an, onUpdated as Tt, onBeforeUnmount as Ut, readonly as nu, onDeactivated as lu, Teleport as ou, Transition as Bl, withDirectives as ka, vShow as Ca, resolveDynamicComponent as nn, toDisplayString as ie, renderList as Ge, TransitionGroup as Mi, watchEffect as au, isVNode as Sa, render as Za, Comment as ru, unref as Gn, pushScopeId as He, popScopeId as We } from "vue";
const Qa = function(e) {
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
function iu() {
  const e = [], t = {};
  return {
    /**
     * @name 组件名称
     * @component 组件
     * Omit类型是排除属性
     */
    registry(n, l, o = "push") {
      let r = {
        ...l,
        name: n
      };
      e.find((i) => i.name == n) || (t[n] = r, o == "unshift" ? e.unshift(r) : e.push(r));
    },
    componentLists: e,
    componentMap: t
  };
}
let at = iu();
function Di(e, t) {
  let n = P(e());
  return be(e, (l) => {
    l != n.value && (n.value = l);
  }), h({
    get() {
      return n.value;
    },
    set(l) {
      l != n.value && (n.value = l, t(l));
    }
  });
}
const Sn = Object.prototype.toString;
function Ae(e) {
  return Sn.call(e) === "[object Array]";
}
function Kt(e) {
  return Sn.call(e) === "[object Null]";
}
function Xl(e) {
  return Sn.call(e) === "[object Boolean]";
}
function Ee(e) {
  return Sn.call(e) === "[object Object]";
}
function yt(e) {
  return Sn.call(e) === "[object String]";
}
function ge(e) {
  return Sn.call(e) === "[object Number]" && e === e;
}
function qe(e) {
  return e === void 0;
}
function et(e) {
  return typeof e == "function";
}
function su(e) {
  return Ee(e) && Object.keys(e).length === 0;
}
const zi = (e) => (e == null ? void 0 : e.$) !== void 0, un = Symbol("ArcoConfigProvider"), il = {
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
}, uu = {
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
  calendar: il,
  datePicker: {
    view: il.view,
    month: il.month,
    week: il.week,
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
}, cu = P("zh-CN"), du = Pe({
  "zh-CN": uu
}), Va = () => {
  const e = Xe(un, void 0), t = h(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : du[cu.value];
  }), n = h(() => t.value.locale);
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
      return yt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var c;
        return (c = r[u]) != null ? c : s;
      }) : i;
    }
  };
};
var fu = Object.defineProperty, vu = Object.defineProperties, pu = Object.getOwnPropertyDescriptors, Ja = Object.getOwnPropertySymbols, hu = Object.prototype.hasOwnProperty, mu = Object.prototype.propertyIsEnumerable, er = (e, t, n) => t in e ? fu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gu = (e, t) => {
  for (var n in t || (t = {}))
    hu.call(t, n) && er(e, n, t[n]);
  if (Ja)
    for (var n of Ja(t))
      mu.call(t, n) && er(e, n, t[n]);
  return e;
}, bu = (e, t) => vu(e, pu(t));
const yu = "A", _u = "arco", ca = "$arco", Ue = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : yu;
}, Ke = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[ca] = bu(gu({}, (n = e.config.globalProperties[ca]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ne = (e) => {
  var t, n, l;
  const o = Yn(), r = Xe(un, void 0), a = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[ca]) == null ? void 0 : t.classPrefix) != null ? l : _u;
  return e ? `${a}-${e}` : a;
};
var Ai = function() {
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
}(), da = typeof window < "u" && typeof document < "u" && window.document === document, Il = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), $u = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Il) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), wu = 2;
function ku(e, t) {
  var n = !1, l = !1, o = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function a() {
    $u(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < wu)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return i;
}
var Cu = 20, Su = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Vu = typeof MutationObserver < "u", Ou = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ku(this.refresh.bind(this), Cu);
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
      !da || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Vu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !da || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = Su.some(function(r) {
        return !!~l.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Li = function(e, t) {
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
}, wn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Il;
}, Fi = Zl(0, 0, 0, 0);
function Pl(e) {
  return parseFloat(e) || 0;
}
function tr(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var r = e["border-" + o + "-width"];
    return l + Pl(r);
  }, 0);
}
function Eu(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var r = o[l], a = e["padding-" + r];
    n[r] = Pl(a);
  }
  return n;
}
function xu(e) {
  var t = e.getBBox();
  return Zl(0, 0, t.width, t.height);
}
function Bu(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Fi;
  var l = wn(e).getComputedStyle(e), o = Eu(l), r = o.left + o.right, a = o.top + o.bottom, i = Pl(l.width), s = Pl(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= tr(l, "left", "right") + r), Math.round(s + a) !== n && (s -= tr(l, "top", "bottom") + a)), !Pu(e)) {
    var u = Math.round(i + r) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Zl(o.left, o.top, i, s);
}
var Iu = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof wn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof wn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Pu(e) {
  return e === wn(e).document.documentElement;
}
function ju(e) {
  return da ? Iu(e) ? xu(e) : Bu(e) : Fi;
}
function Tu(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return Li(a, {
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
function Zl(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var Mu = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Zl(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ju(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Du = (
  /** @class */
  function() {
    function e(t, n) {
      var l = Tu(n);
      Li(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), zu = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new Ai(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof wn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Mu(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof wn(t).Element))
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
          return new Du(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Ni = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ai(), Ri = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Ou.getInstance(), l = new zu(t, n, this);
      Ni.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Ri.prototype[e] = function() {
    var t;
    return (t = Ni.get(this))[e].apply(t, arguments);
  };
});
var Oa = function() {
  return typeof Il.ResizeObserver < "u" ? Il.ResizeObserver : Ri;
}(), nr;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(nr || (nr = {}));
var lr;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(lr || (lr = {}));
const Ql = (e) => Boolean(e && e.shapeFlag & 1), Xn = (e, t) => Boolean(e && e.shapeFlag & 6), Au = (e, t) => Boolean(e && e.shapeFlag & 8), Ea = (e, t) => Boolean(e && e.shapeFlag & 16), qi = (e, t) => Boolean(e && e.shapeFlag & 32), yn = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Ql(l) || Xn(l))
        return l;
      if (Ea(l, l.children)) {
        const o = yn(l.children);
        if (o)
          return o;
      } else if (qi(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const r = yn(o);
          if (r)
            return r;
        }
      } else if (Ae(l)) {
        const o = yn(l);
        if (o)
          return o;
      }
    }
}, Lu = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Hi = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Ql(l) || Xn(l)) {
        const r = et(t) ? t(l) : t;
        return e[n] = Yl(l, r, !0), !0;
      }
      const o = xa(l);
      if (o && o.length > 0 && Hi(o, t))
        return !0;
    }
  return !1;
}, xa = (e) => {
  if (Ea(e, e.children))
    return e.children;
  if (Ae(e))
    return e;
}, Wi = (e) => {
  var t, n;
  if (Ql(e))
    return e.el;
  if (Xn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Wi(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = xa(e);
    return Ui(l);
  }
}, Ui = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Wi(t);
      if (n)
        return n;
    }
}, bl = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const r of e ?? [])
    Ql(r) || Xn(r) || t && Au(r, r.children) ? o.push(r) : Ea(r, r.children) ? o.push(...bl(r.children, t)) : qi(r, r.children) ? o.push(...bl((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : Ae(r) && o.push(...bl(r, t));
  return o;
}, or = (e) => {
  if (e)
    return et(e) ? e : () => e;
}, Ki = (e, t) => {
  var n;
  const l = [];
  if (Xn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Ki(e.component.subTree, t));
  else {
    const o = xa(e);
    o && l.push(...Yi(o, t));
  }
  return l;
}, Yi = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Ki(l, t));
  return n;
};
var jl = N({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = P(), r = h(() => zi(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new Oa((u) => {
        const c = u[0];
        t("resize", c);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return be(r, (s) => {
      l && i(), s && a(s);
    }), xe(() => {
      r.value && a(r.value);
    }), Gl(() => {
      i();
    }), () => {
      var s, u;
      const c = yn((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? Yl(c, {
        ref: o
      }, !0) : null;
    };
  }
});
const Gi = typeof window > "u" ? global : window, Fu = Gi.requestAnimationFrame, ar = Gi.cancelAnimationFrame;
function rr(e) {
  let t = 0;
  const n = (...l) => {
    t && ar(t), t = Fu(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    ar(t), t = 0;
  }, n;
}
const Ba = () => {
}, Nu = () => {
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
}, Ia = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Et = (() => Ia ? Ba : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), kn = (() => Ia ? Ba : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), Ru = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, qu = (e, t) => {
  var n;
  return Ia ? Ba() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, ir = (e, t) => {
  if (yt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return qu(n, t);
  }
  return e;
}, Hu = (e, t) => {
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
var fe = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const Wu = N({
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
function Uu(e, t, n, l, o, r) {
  return y(), O("span", {
    class: G([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [se(e.$slots, "default")], 2);
}
var ct = /* @__PURE__ */ fe(Wu, [["render", Uu]]);
const Ku = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Yu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gu = /* @__PURE__ */ v("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Xu = [Gu];
function Zu(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Xu, 14, Yu);
}
var vo = /* @__PURE__ */ fe(Ku, [["render", Zu]]);
const cn = Object.assign(vo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + vo.name, vo);
  }
}), Qu = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Ju = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ec = /* @__PURE__ */ v("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), tc = [ec];
function nc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
var po = /* @__PURE__ */ fe(Qu, [["render", nc]]);
const lc = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), oc = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), ac = ["stroke-width", "stroke-linecap", "stroke-linejoin"], rc = /* @__PURE__ */ v("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ic = [rc];
function sc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, ic, 14, ac);
}
var ho = /* @__PURE__ */ fe(oc, [["render", sc]]);
const Xi = Object.assign(ho, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ho.name, ho);
  }
}), uc = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), cc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], dc = /* @__PURE__ */ v("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), fc = [dc];
function vc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, fc, 14, cc);
}
var mo = /* @__PURE__ */ fe(uc, [["render", vc]]);
const Zi = Object.assign(mo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + mo.name, mo);
  }
}), pc = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), hc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], mc = /* @__PURE__ */ v("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), gc = [mc];
function bc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
var go = /* @__PURE__ */ fe(pc, [["render", bc]]);
const Qi = Object.assign(go, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + go.name, go);
  }
});
function sr(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function ur(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function bo(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return ur(n.overflowY, t) || ur(n.overflowX, t) || function(l) {
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
function sl(e, t, n, l, o, r, a, i) {
  return r < e && a > t || r > e && a < t ? 0 : r <= e && i <= n || a >= t && i >= n ? r - e - l : a > t && i < n || r < e && i > n ? a - t + o : 0;
}
var cr = function(e, t) {
  var n = window, l = t.scrollMode, o = t.block, r = t.inline, a = t.boundary, i = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(D) {
    return D !== a;
  };
  if (!sr(e))
    throw new TypeError("Invalid target");
  for (var u, c, f = document.scrollingElement || document.documentElement, m = [], b = e; sr(b) && s(b); ) {
    if ((b = (c = (u = b).parentElement) == null ? u.getRootNode().host || null : c) === f) {
      m.push(b);
      break;
    }
    b != null && b === document.body && bo(b) && !bo(document.documentElement) || b != null && bo(b, i) && m.push(b);
  }
  for (var _ = n.visualViewport ? n.visualViewport.width : innerWidth, g = n.visualViewport ? n.visualViewport.height : innerHeight, T = window.scrollX || pageXOffset, E = window.scrollY || pageYOffset, k = e.getBoundingClientRect(), S = k.height, $ = k.width, I = k.top, w = k.right, V = k.bottom, R = k.left, K = o === "start" || o === "nearest" ? I : o === "end" ? V : I + S / 2, q = r === "center" ? R + $ / 2 : r === "end" ? w : R, p = [], B = 0; B < m.length; B++) {
    var x = m[B], z = x.getBoundingClientRect(), A = z.height, U = z.width, X = z.top, L = z.right, Q = z.bottom, j = z.left;
    if (l === "if-needed" && I >= 0 && R >= 0 && V <= g && w <= _ && I >= X && V <= Q && R >= j && w <= L)
      return p;
    var C = getComputedStyle(x), H = parseInt(C.borderLeftWidth, 10), J = parseInt(C.borderTopWidth, 10), he = parseInt(C.borderRightWidth, 10), _e = parseInt(C.borderBottomWidth, 10), ce = 0, Be = 0, Ve = "offsetWidth" in x ? x.offsetWidth - x.clientWidth - H - he : 0, je = "offsetHeight" in x ? x.offsetHeight - x.clientHeight - J - _e : 0, pt = "offsetWidth" in x ? x.offsetWidth === 0 ? 0 : U / x.offsetWidth : 0, nt = "offsetHeight" in x ? x.offsetHeight === 0 ? 0 : A / x.offsetHeight : 0;
    if (f === x)
      ce = o === "start" ? K : o === "end" ? K - g : o === "nearest" ? sl(E, E + g, g, J, _e, E + K, E + K + S, S) : K - g / 2, Be = r === "start" ? q : r === "center" ? q - _ / 2 : r === "end" ? q - _ : sl(T, T + _, _, H, he, T + q, T + q + $, $), ce = Math.max(0, ce + E), Be = Math.max(0, Be + T);
    else {
      ce = o === "start" ? K - X - J : o === "end" ? K - Q + _e + je : o === "nearest" ? sl(X, Q, A, J, _e + je, K, K + S, S) : K - (X + A / 2) + je / 2, Be = r === "start" ? q - j - H : r === "center" ? q - (j + U / 2) + Ve / 2 : r === "end" ? q - L + he + Ve : sl(j, L, U, H, he + Ve, q, q + $, $);
      var it = x.scrollLeft, F = x.scrollTop;
      K += F - (ce = Math.max(0, Math.min(F + ce / nt, x.scrollHeight - A / nt + je))), q += it - (Be = Math.max(0, Math.min(it + Be / pt, x.scrollWidth - U / pt + Ve)));
    }
    p.push({ el: x, top: ce, left: Be });
  }
  return p;
};
const yc = ["info", "success", "warning", "error"], Ht = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], _c = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), $c = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wc = /* @__PURE__ */ v("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), kc = [wc];
function Cc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, kc, 14, $c);
}
var yo = /* @__PURE__ */ fe(_c, [["render", Cc]]);
const Yt = Object.assign(yo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + yo.name, yo);
  }
}), Sc = N({
  name: "FeedbackIcon",
  components: {
    IconLoading: Yt,
    IconCheckCircleFill: Xi,
    IconExclamationCircleFill: Zi,
    IconCloseCircleFill: Qi
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = ne("feedback-icon");
    return {
      cls: h(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function Vc(e, t, n, l, o, r) {
  const a = ue("icon-loading"), i = ue("icon-check-circle-fill"), s = ue("icon-exclamation-circle-fill"), u = ue("icon-close-circle-fill");
  return y(), O("span", {
    class: G(e.cls)
  }, [e.type === "validating" ? (y(), re(a, {
    key: 0
  })) : e.type === "success" ? (y(), re(i, {
    key: 1
  })) : e.type === "warning" ? (y(), re(s, {
    key: 2
  })) : e.type === "error" ? (y(), re(u, {
    key: 3
  })) : te("v-if", !0)], 2);
}
var Pa = /* @__PURE__ */ fe(Sc, [["render", Vc]]);
const ja = {
  key: "Enter",
  code: "Enter"
}, Oc = {
  key: "Backspace",
  code: "Backspace"
};
var Ec = Object.defineProperty, dr = Object.getOwnPropertySymbols, xc = Object.prototype.hasOwnProperty, Bc = Object.prototype.propertyIsEnumerable, fr = (e, t, n) => t in e ? Ec(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ic = (e, t) => {
  for (var n in t || (t = {}))
    xc.call(t, n) && fr(e, n, t[n]);
  if (dr)
    for (var n of dr(t))
      Bc.call(t, n) && fr(e, n, t[n]);
  return e;
};
const Zn = (e, t) => {
  const n = Ic({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function Qn(e, t) {
  const n = {};
  return t.forEach((l) => {
    const o = l;
    l in e && (n[o] = e[o]);
  }), n;
}
const fa = Symbol("ArcoFormItemContext"), Ta = Symbol("ArcoFormContext"), dt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : Xe(fa, {}), r = h(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : o.size;
  }), a = h(() => (t == null ? void 0 : t.value) || o.disabled), i = h(() => (n == null ? void 0 : n.value) || o.error), s = Hn(o, "feedback"), u = Hn(o, "eventHandlers");
  return {
    formItemCtx: o,
    mergedSize: r,
    mergedDisabled: a,
    mergedError: i,
    feedback: s,
    eventHandlers: u
  };
}, _t = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = Xe(un, void 0);
  return {
    mergedSize: h(() => {
      var o, r;
      return (r = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function Ji(e) {
  const t = P();
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
      const u = r[i - 1], c = o.indexOf(u, i - 1);
      c !== -1 && (s = c + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
var Pc = Object.defineProperty, vr = Object.getOwnPropertySymbols, jc = Object.prototype.hasOwnProperty, Tc = Object.prototype.propertyIsEnumerable, pr = (e, t, n) => t in e ? Pc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, hr = (e, t) => {
  for (var n in t || (t = {}))
    jc.call(t, n) && pr(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      Tc.call(t, n) && pr(e, n, t[n]);
  return e;
}, Dn = N({
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
    } = ye(e), s = ne("input"), u = P(), {
      mergedSize: c,
      mergedDisabled: f,
      mergedError: m,
      feedback: b,
      eventHandlers: _
    } = dt({
      size: o,
      disabled: r,
      error: a
    }), {
      mergedSize: g
    } = _t(c), [T, E] = Ji(u), k = P(e.defaultValue), S = h(() => {
      var F;
      return (F = e.modelValue) != null ? F : k.value;
    });
    be(i, (F) => {
      (qe(F) || Kt(F)) && (k.value = "");
    });
    let $ = S.value;
    const I = P(!1), w = h(() => e.allowClear && !e.readonly && !f.value && Boolean(S.value)), V = P(!1), R = P(""), K = (F) => {
      var D;
      return et(e.wordLength) ? e.wordLength(F) : (D = F.length) != null ? D : 0;
    }, q = h(() => K(S.value)), p = h(() => m.value || Boolean(Ee(e.maxLength) && e.maxLength.errorOnly && q.value > x.value)), B = h(() => Ee(e.maxLength) && Boolean(e.maxLength.errorOnly)), x = h(() => Ee(e.maxLength) ? e.maxLength.length : e.maxLength), z = h(() => {
      const F = K("a");
      return Math.floor(x.value / F);
    }), A = (F) => {
      var D, Z;
      x.value && !B.value && K(F) > x.value && (F = (Z = (D = e.wordSlice) == null ? void 0 : D.call(e, F, x.value)) != null ? Z : F.slice(0, z.value)), k.value = F, t("update:modelValue", F);
    }, U = (F) => {
      u.value && F.target !== u.value && (F.preventDefault(), u.value.focus());
    }, X = (F, D) => {
      var Z, oe;
      F !== $ && ($ = F, t("change", F, D), (oe = (Z = _.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, D));
    }, L = (F) => {
      var D, Z;
      I.value = !0, $ = S.value, t("focus", F), (Z = (D = _.value) == null ? void 0 : D.onFocus) == null || Z.call(D, F);
    }, Q = (F) => {
      var D, Z;
      I.value = !1, X(S.value, F), t("blur", F), (Z = (D = _.value) == null ? void 0 : D.onBlur) == null || Z.call(D, F);
    }, j = (F) => {
      var D, Z, oe;
      const {
        value: Me,
        selectionStart: De,
        selectionEnd: Ot
      } = F.target;
      if (F.type === "compositionend") {
        if (V.value = !1, R.value = "", x.value && !B.value && q.value >= x.value && K(Me) > x.value && De === Ot) {
          C();
          return;
        }
        A(Me), t("input", Me, F), (Z = (D = _.value) == null ? void 0 : D.onInput) == null || Z.call(D, F), C();
      } else
        V.value = !0, R.value = S.value + ((oe = F.data) != null ? oe : "");
    }, C = () => {
      T(), Le(() => {
        u.value && S.value !== u.value.value && (u.value.value = S.value, E());
      });
    }, H = (F) => {
      var D, Z;
      const {
        value: oe
      } = F.target;
      if (!V.value) {
        if (x.value && !B.value && q.value >= x.value && K(oe) > x.value && F.inputType === "insertText") {
          C();
          return;
        }
        A(oe), t("input", oe, F), (Z = (D = _.value) == null ? void 0 : D.onInput) == null || Z.call(D, F), C();
      }
    }, J = (F) => {
      A(""), X("", F), t("clear", F);
    }, he = (F) => {
      const D = F.key || F.code;
      !V.value && D === ja.key && (X(S.value, F), t("pressEnter", F));
    }, _e = h(() => [`${s}-outer`, `${s}-outer-size-${g.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), ce = h(() => [`${s}-wrapper`, {
      [`${s}-error`]: p.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: I.value
    }]), Be = h(() => [s, `${s}-size-${g.value}`]), Ve = h(() => Zn(l, Ht)), je = h(() => Qn(l, Ht)), pt = h(() => {
      const F = hr(hr({}, je.value), e.inputAttrs);
      return p.value && (F["aria-invalid"] = !0), F;
    }), nt = (F) => {
      var D;
      return d("span", Oe({
        class: ce.value,
        onMousedown: U
      }, F ? void 0 : Ve.value), [n.prefix && d("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), d("input", Oe({
        ref: u,
        class: Be.value,
        value: S.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: f.value,
        onInput: H,
        onKeydown: he,
        onFocus: L,
        onBlur: Q,
        onCompositionstart: j,
        onCompositionupdate: j,
        onCompositionend: j
      }, pt.value), null), w.value && d(ct, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: J
      }, {
        default: () => [d(cn, null, null)]
      }), (n.suffix || Boolean(e.maxLength) && e.showWordLimit || Boolean(b.value)) && d("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: b.value
        }]
      }, [Boolean(e.maxLength) && e.showWordLimit && d("span", {
        class: `${s}-word-limit`
      }, [q.value, Ce("/"), x.value]), (D = n.suffix) == null ? void 0 : D.call(n), Boolean(b.value) && d(Pa, {
        type: b.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? d("span", Oe({
        class: _e.value
      }, Ve.value), [n.prepend && d("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), nt(!0), n.append && d("span", {
        class: `${s}-append`
      }, [n.append()])]) : nt()
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
const Mc = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Dc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zc = /* @__PURE__ */ v("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Ac = [zc];
function Lc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Ac, 14, Dc);
}
var _o = /* @__PURE__ */ fe(Mc, [["render", Lc]]);
const va = Object.assign(_o, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + _o.name, _o);
  }
}), es = Symbol("ArcoButtonGroup"), Fc = N({
  name: "Button",
  components: {
    IconLoading: Yt
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
    } = ye(e), o = ne("btn"), r = Xe(es, void 0), a = h(() => {
      var b;
      return (b = n.value) != null ? b : r == null ? void 0 : r.size;
    }), i = h(() => Boolean(l.value || (r == null ? void 0 : r.disabled))), {
      mergedSize: s,
      mergedDisabled: u
    } = dt({
      size: a,
      disabled: i
    }), {
      mergedSize: c
    } = _t(s), f = h(() => {
      var b, _, g, T, E, k;
      return [o, `${o}-${(_ = (b = e.type) != null ? b : r == null ? void 0 : r.type) != null ? _ : "secondary"}`, `${o}-shape-${(T = (g = e.shape) != null ? g : r == null ? void 0 : r.shape) != null ? T : "square"}`, `${o}-size-${c.value}`, `${o}-status-${(k = (E = e.status) != null ? E : r == null ? void 0 : r.status) != null ? k : "normal"}`, {
        [`${o}-long`]: e.long,
        [`${o}-loading`]: e.loading,
        [`${o}-disabled`]: u.value,
        [`${o}-link`]: yt(e.href)
      }];
    });
    return {
      prefixCls: o,
      cls: f,
      mergedDisabled: u,
      handleClick: (b) => {
        if (e.disabled || e.loading) {
          b.preventDefault();
          return;
        }
        t("click", b);
      }
    };
  }
}), Nc = ["href"], Rc = ["type", "disabled"];
function qc(e, t, n, l, o, r) {
  const a = ue("icon-loading");
  return e.href ? (y(), O("a", {
    key: 0,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (y(), O("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (y(), re(a, {
    key: 0,
    spin: "true"
  })) : se(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), se(e.$slots, "default")], 10, Nc)) : (y(), O("button", {
    key: 1,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (y(), O("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (y(), re(a, {
    key: 0,
    spin: !0
  })) : se(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), se(e.$slots, "default")], 10, Rc));
}
var $o = /* @__PURE__ */ fe(Fc, [["render", qc]]);
const Hc = N({
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
    } = ye(e), a = ne("btn-group");
    return jt(es, Pe({
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
function Wc(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(e.prefixCls)
  }, [se(e.$slots, "default")], 2);
}
var wo = /* @__PURE__ */ fe(Hc, [["render", Wc]]);
const rn = Object.assign($o, {
  Group: wo,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + $o.name, $o), e.component(n + wo.name, wo);
  }
});
var ko = N({
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
    } = ye(e), o = ne("input-search"), {
      mergedSize: r
    } = _t(l), a = P(), i = (f) => {
      a.value.inputRef && t("search", a.value.inputRef.value, f);
    }, s = () => {
      var f;
      return d(we, null, [e.loading ? d(Yt, null, null) : d(ct, {
        onClick: i
      }, {
        default: () => [d(va, null, null)]
      }), (f = n.suffix) == null ? void 0 : f.call(n)]);
    }, u = () => {
      var f;
      let m = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? m = {
        default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : m = {
        icon: () => d(va, null, null)
      }, d(rn, Oe({
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
      render: () => d(Dn, {
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
const Uc = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Kc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yc = /* @__PURE__ */ v("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Gc = /* @__PURE__ */ v("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Xc = [Yc, Gc];
function Zc(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Xc, 14, Kc);
}
var Co = /* @__PURE__ */ fe(Uc, [["render", Zc]]);
const Qc = Object.assign(Co, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Co.name, Co);
  }
}), Jc = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), ed = ["stroke-width", "stroke-linecap", "stroke-linejoin"], td = /* @__PURE__ */ v("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), nd = /* @__PURE__ */ v("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), ld = [td, nd];
function od(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, ld, 14, ed);
}
var So = /* @__PURE__ */ fe(Jc, [["render", od]]);
const ad = Object.assign(So, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + So.name, So);
  }
});
function Wn(e) {
  const t = P(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function rd(e, t) {
  const {
    value: n
  } = ye(t), [l, o] = Wn(qe(n.value) ? e : n.value);
  return be(n, (a) => {
    qe(a) && o(void 0);
  }), [h(() => qe(n.value) ? l.value : n.value), o, l];
}
const id = N({
  name: "InputPassword",
  components: {
    IconEye: Qc,
    IconEyeInvisible: ad,
    AIconHover: ct,
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
    } = ye(e), o = P(), r = () => {
      s(!a.value);
    }, [a, i] = rd(l.value, Pe({
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
function sd(e, t, n, l, o, r) {
  const a = ue("icon-eye"), i = ue("icon-eye-invisible"), s = ue("a-icon-hover"), u = ue("a-input");
  return y(), re(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Ti({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: le(() => [se(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: le(() => [se(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: le(() => [e.invisibleButton ? (y(), re(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = an(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = an(() => {
      }, ["prevent"]))
    }, {
      default: le(() => [e.mergedVisible ? (y(), re(i, {
        key: 1
      })) : (y(), re(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : te("v-if", !0), se(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: le(() => [se(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var Vo = /* @__PURE__ */ fe(id, [["render", sd]]);
const ud = N({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ne("input-group")
    };
  }
});
function cd(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(e.prefixCls)
  }, [se(e.$slots, "default")], 2);
}
var zn = /* @__PURE__ */ fe(ud, [["render", cd]]);
const Gt = Object.assign(Dn, {
  Search: ko,
  Password: Vo,
  Group: zn,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Dn.name, Dn), e.component(n + zn.name, zn), e.component(n + ko.name, ko), e.component(n + Vo.name, Vo);
  }
});
var dd = Object.defineProperty, mr = Object.getOwnPropertySymbols, fd = Object.prototype.hasOwnProperty, vd = Object.prototype.propertyIsEnumerable, gr = (e, t, n) => t in e ? dd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    fd.call(t, n) && gr(e, n, t[n]);
  if (mr)
    for (var n of mr(t))
      vd.call(t, n) && gr(e, n, t[n]);
  return e;
};
const pd = () => {
  const {
    height: e,
    width: t
  } = Nu();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, br = (e, t) => {
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
}, hd = (e) => {
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
}, ul = (e, t) => {
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
}, md = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: r,
  translate: a
}) => {
  const i = hd(e), s = pd(), u = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + o.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + o.width)
  };
  let c = e;
  if (i === "top" && u.top < 0)
    if (l.top > o.height)
      t.top = -n.top;
    else {
      const f = Pn("bottom", l, o, {
        offset: r,
        translate: a
      });
      s.height - (n.top + f.top + o.height) > 0 && (c = ul(e, "bottom"), t.top = f.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const f = Pn("top", l, o, {
        offset: r,
        translate: a
      });
      n.top + f.top > 0 && (c = ul(e, "top"), t.top = f.top);
    }
  if (i === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const f = Pn("right", l, o, {
        offset: r,
        translate: a
      });
      s.width - (n.left + f.left + o.width) > 0 && (c = ul(e, "right"), t.left = f.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const f = Pn("left", l, o, {
        offset: r,
        translate: a
      });
      n.left + f.left > 0 && (c = ul(e, "left"), t.left = f.left);
    }
  return (i === "top" || i === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - o.width))), (i === "left" || i === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - o.height))), {
    popupPosition: t,
    position: c
  };
}, Pn = (e, t, n, {
  offset: l = 0,
  translate: o = [0, 0]
} = {}) => {
  var r;
  const a = (r = Ae(o) ? o : o[e]) != null ? r : [0, 0];
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
}, gd = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, bd = (e, t, n, l, {
  offset: o = 0,
  translate: r = [0, 0],
  customStyle: a = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, u = Pn(e, n, l, {
    offset: o,
    translate: r
  });
  if (i) {
    const f = md(e, u, {
      containerRect: t,
      popupRect: l,
      triggerRect: n,
      offset: o,
      translate: r
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
}, yd = (e, t, n, {
  customStyle: l = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let r = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return r > n.width - 8 && (t.width > n.width ? r = n.width / 2 : r = n.width - 8), ["top", "tl", "tr"].includes(e) ? In({
      left: `${r}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, l) : In({
      left: `${r}px`,
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
}, _d = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, yr = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    _d(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, ts = () => {
  const e = {}, t = P(), n = () => {
    const l = Ui(e.value);
    l !== t.value && (t.value = l);
  };
  return xe(() => n()), Tt(() => n()), {
    children: e,
    firstElement: t
  };
};
var Tl = N({
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
    } = ts();
    let r;
    const a = (s) => {
      s && (r = new Oa((u) => {
        const c = u[0];
        t("resize", c);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return be(o, (s) => {
      r && i(), s && a(s);
    }), Ut(() => {
      r && i();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function $d(e, t) {
  const n = P(e[t]);
  return Tt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const _r = Symbol("ArcoTrigger"), wd = 1e3, kd = 5e3, Cd = 1;
class Sd {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || kd : Array.from(this.popupStack.popup).pop() || wd) + Cd, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const Oo = new Sd();
function ns(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = P(0), o = () => {
    l.value = Oo.add(e);
  }, r = () => {
    Oo.delete(l.value, e);
  }, a = () => e === "dialog" ? Oo.isLastDialog(l.value) : !1;
  return be(() => t == null ? void 0 : t.value, (i) => {
    i ? o() : r();
  }, {
    immediate: !0
  }), n && (xe(() => {
    o();
  }), Ut(() => {
    r();
  })), {
    zIndex: nu(l),
    open: o,
    close: r,
    isLastDialog: a
  };
}
const Vd = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new Oa((r) => {
        const a = r[0];
        et(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var Od = N({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = P(!1);
    return xe(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const Ed = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = P(e.value), r = P(), a = () => {
    const i = ir(e.value), s = i ? e.value : n, u = i ?? (l ? document.documentElement : ir(n));
    s !== o.value && (o.value = s), u !== r.value && (r.value = u);
  };
  return xe(() => a()), be(t, (i) => {
    o.value !== e.value && i && a();
  }), {
    teleportContainer: o,
    containerRef: r
  };
};
var xd = Object.defineProperty, Bd = Object.defineProperties, Id = Object.getOwnPropertyDescriptors, $r = Object.getOwnPropertySymbols, Pd = Object.prototype.hasOwnProperty, jd = Object.prototype.propertyIsEnumerable, wr = (e, t, n) => t in e ? xd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Td = (e, t) => {
  for (var n in t || (t = {}))
    Pd.call(t, n) && wr(e, n, t[n]);
  if ($r)
    for (var n of $r(t))
      jd.call(t, n) && wr(e, n, t[n]);
  return e;
}, Md = (e, t) => Bd(e, Id(t));
const Dd = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var Eo = N({
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
    } = ye(e), r = ne("trigger"), a = h(() => Zn(l, Dd)), i = Xe(un, void 0), s = h(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = Xe(_r, void 0), {
      children: f,
      firstElement: m
    } = ts(), b = P(), _ = P(e.defaultPopupVisible), g = P(e.position), T = P({}), E = P({}), k = P({}), S = P(), $ = P({
      top: 0,
      left: 0
    });
    let I = null, w = null;
    const V = h(() => {
      var M;
      return (M = e.popupVisible) != null ? M : _.value;
    }), {
      teleportContainer: R,
      containerRef: K
    } = Ed({
      popupContainer: o,
      visible: V,
      documentContainer: !0
    }), {
      zIndex: q
    } = ns("popup", {
      visible: V
    });
    let p = 0, B = !1, x = !1;
    const z = () => {
      p && (window.clearTimeout(p), p = 0);
    }, A = (M) => {
      if (e.alignPoint) {
        const {
          pageX: Y,
          pageY: ae
        } = M;
        $.value = {
          top: ae,
          left: Y
        };
      }
    }, U = () => {
      if (!m.value || !b.value || !K.value)
        return;
      const M = K.value.getBoundingClientRect(), Y = e.alignPoint ? {
        top: $.value.top,
        bottom: $.value.top,
        left: $.value.left,
        right: $.value.left,
        scrollTop: $.value.top,
        scrollBottom: $.value.top,
        scrollLeft: $.value.left,
        scrollRight: $.value.left,
        width: 0,
        height: 0
      } : br(m.value, M), ae = () => br(b.value, M), ht = ae(), {
        style: lt,
        position: vn
      } = bd(e.position, M, Y, ht, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (E.value = {
        transformOrigin: gd(vn)
      }), e.autoFitPopupMinWidth ? lt.minWidth = `${Y.width}px` : e.autoFitPopupWidth && (lt.width = `${Y.width}px`), g.value !== vn && (g.value = vn), T.value = lt, e.showArrow && Le(() => {
        k.value = yd(vn, Y, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, X = (M, Y) => {
      if (M === V.value && p === 0)
        return;
      const ae = () => {
        _.value = M, t("update:popupVisible", M), t("popupVisibleChange", M), M && Le(() => {
          U();
        });
      };
      M || (I = null, w = null), Y ? (z(), M !== V.value && (p = window.setTimeout(ae, Y))) : ae();
    }, L = (M) => {
      var Y;
      (Y = l.onClick) == null || Y.call(l, M), !(e.disabled || V.value && !e.clickToClose) && (s.value.includes("click") ? (A(M), X(!V.value)) : s.value.includes("contextMenu") && V.value && X(!1));
    }, Q = (M) => {
      var Y;
      (Y = l.onMouseenter) == null || Y.call(l, M), !(e.disabled || !s.value.includes("hover")) && (A(M), X(!0, e.mouseEnterDelay));
    }, j = (M) => {
      c == null || c.onMouseenter(M), Q(M);
    }, C = (M) => {
      var Y;
      (Y = l.onMouseleave) == null || Y.call(l, M), !(e.disabled || !s.value.includes("hover")) && X(!1, e.mouseLeaveDelay);
    }, H = (M) => {
      c == null || c.onMouseleave(M), C(M);
    }, J = (M) => {
      var Y;
      (Y = l.onFocusin) == null || Y.call(l, M), !(e.disabled || !s.value.includes("focus")) && X(!0, e.focusDelay);
    }, he = (M) => {
      var Y;
      (Y = l.onFocusout) == null || Y.call(l, M), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && X(!1);
    }, _e = (M) => {
      var Y;
      (Y = l.onContextmenu) == null || Y.call(l, M), !(e.disabled || !s.value.includes("contextMenu") || V.value && !e.clickToClose) && (A(M), X(!V.value), M.preventDefault());
    };
    jt(_r, Pe({
      onMouseenter: j,
      onMouseleave: H,
      addChildRef: (M) => {
        u.add(M), c == null || c.addChildRef(M);
      },
      removeChildRef: (M) => {
        u.delete(M), c == null || c.removeChildRef(M);
      }
    }));
    const Ve = () => {
      kn(document.documentElement, "mousedown", nt), B = !1;
    }, je = $d(n, "content"), pt = h(() => {
      var M;
      return e.hideEmpty && Lu((M = je.value) == null ? void 0 : M.call(je));
    }), nt = (M) => {
      var Y, ae, ht;
      if (!((Y = m.value) != null && Y.contains(M.target) || (ae = b.value) != null && ae.contains(M.target))) {
        for (const lt of u)
          if ((ht = lt.value) != null && ht.contains(M.target))
            return;
        Ve(), X(!1);
      }
    }, it = (M, Y) => {
      const [ae, ht] = M, {
        scrollTop: lt,
        scrollLeft: vn
      } = Y;
      return Math.abs(lt - ae) >= e.scrollToCloseDistance || Math.abs(vn - ht) >= e.scrollToCloseDistance;
    }, F = rr((M) => {
      if (V.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const Y = M.target;
          I || (I = [Y.scrollTop, Y.scrollLeft]), it(I, Y) ? X(!1) : U();
        } else
          U();
    }), D = () => {
      kn(window, "scroll", Z), x = !1;
    }, Z = rr((M) => {
      const Y = M.target.documentElement;
      w || (w = [Y.scrollTop, Y.scrollLeft]), it(w, Y) && (X(!1), D());
    }), oe = () => {
      V.value && U();
    }, Me = () => {
      oe(), t("resize");
    }, De = (M) => {
      e.preventFocus && M.preventDefault();
    };
    c == null || c.addChildRef(b);
    const Ot = h(() => V.value ? e.openedClass : void 0);
    let Qe;
    be(V, (M) => {
      if (e.clickOutsideToClose && (!M && B ? Ve() : M && !B && (Et(document.documentElement, "mousedown", nt), B = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Et(window, "scroll", Z), x = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (M) {
          Qe = yr(m.value);
          for (const Y of Qe)
            Y.addEventListener("scroll", F);
        } else if (Qe) {
          for (const Y of Qe)
            Y.removeEventListener("scroll", F);
          Qe = void 0;
        }
      }
      M && (xn.value = !0);
    }), be(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      V.value && U();
    });
    const {
      createResizeObserver: uo,
      destroyResizeObserver: co
    } = Vd({
      elementRef: K,
      onResize: oe
    });
    xe(() => {
      if (uo(), V.value && (U(), e.clickOutsideToClose && !B && (Et(document.documentElement, "mousedown", nt), B = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Qe = yr(m.value);
        for (const M of Qe)
          M.addEventListener("scroll", F);
      }
    }), Tt(() => {
      V.value && U();
    }), lu(() => {
      X(!1);
    }), Ut(() => {
      if (c == null || c.removeChildRef(b), co(), B && Ve(), x && D(), Qe) {
        for (const M of Qe)
          M.removeEventListener("scroll", F);
        Qe = void 0;
      }
    });
    const xn = P(V.value), zt = P(!1), rl = () => {
      zt.value = !0;
    }, fo = () => {
      zt.value = !1, V.value && t("show");
    }, W = () => {
      zt.value = !1, V.value || (xn.value = !1, t("hide"));
    };
    return () => {
      var M, Y;
      return f.value = (Y = (M = n.default) == null ? void 0 : M.call(n)) != null ? Y : [], Hi(f.value, {
        class: Ot.value,
        onClick: L,
        onMouseenter: Q,
        onMouseleave: C,
        onFocusin: J,
        onFocusout: he,
        onContextmenu: _e
      }), d(we, null, [e.autoFixPosition ? d(Tl, {
        onResize: Me
      }, {
        default: () => [f.value]
      }) : f.value, d(Od, null, {
        default: () => [d(ou, {
          to: R.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || V.value || xn.value) && !pt.value && d(Tl, {
            onResize: oe
          }, {
            default: () => [d("div", Oe({
              ref: b,
              class: [`${r}-popup`, `${r}-position-${g.value}`],
              style: Md(Td({}, T.value), {
                zIndex: q.value,
                pointerEvents: zt.value ? "none" : "auto"
              }),
              "trigger-placement": g.value,
              onMouseenter: j,
              onMouseleave: H,
              onMousedown: De
            }, a.value), [d(Bl, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: rl,
              onAfterEnter: fo,
              onBeforeLeave: rl,
              onAfterLeave: W
            }, {
              default: () => {
                var ae;
                return [ka(d("div", {
                  class: `${r}-popup-wrapper`,
                  style: E.value
                }, [d("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ae = n.content) == null ? void 0 : ae.call(n)]), e.showArrow && d("div", {
                  ref: S,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: k.value
                }, null)]), [[Ca, V.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Ml = Object.assign(Eo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Eo.name, Eo);
  }
}), zd = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Ad = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ld = /* @__PURE__ */ v("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Fd = [Ld];
function Nd(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Fd, 14, Ad);
}
var xo = /* @__PURE__ */ fe(zd, [["render", Nd]]);
const Rd = Object.assign(xo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xo.name, xo);
  }
});
var Bo = N({
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
    } = Va(), r = Xe(un, void 0);
    return () => {
      var a, i, s, u;
      return !e.inConfigProvider && (r != null && r.slots.empty) && !(t.image || e.imgSrc || e.description) ? r.slots.empty({
        component: "empty"
      }) : d("div", Oe({
        class: l
      }, n), [d("div", {
        class: `${l}-image`
      }, [(i = (a = t.image) == null ? void 0 : a.call(t)) != null ? i : e.imgSrc ? d("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : d(Rd, null, null)]), d("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const qd = Object.assign(Bo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Bo.name, Bo);
  }
}), Hd = 5;
var Wd = N({
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
      }, [Array(Hd).fill(1).map((l, o) => d("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), Io = N({
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
    const n = ne("spin"), l = Xe(un, void 0), o = h(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), r = () => {
      if (t.icon) {
        const i = yn(t.icon());
        if (i)
          return Yl(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? d(Wd, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : d(Yt, {
        spin: !0,
        size: e.size
      }, null);
    }, a = () => {
      var i, s, u;
      const c = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, f = Boolean((i = t.tip) != null ? i : e.tip);
      return d(we, null, [!e.hideIcon && d("div", {
        class: `${n}-icon`,
        style: c
      }, [r()]), f && d("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => d("div", {
      class: o.value
    }, [t.default ? d(we, null, [t.default(), e.loading && d("div", {
      class: `${n}-mask`
    }, [d("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Ud = Object.assign(Io, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Io.name, Io);
  }
}), Kd = N({
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
    const n = ne("scrollbar"), l = P(!1), o = P(), r = P(), a = h(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = P(0), s = P(!1), u = P(0), c = h(() => {
      var k, S;
      return {
        [a.value.size]: `${(S = (k = e.data) == null ? void 0 : k.thumbSize) != null ? S : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), f = (k) => {
      k.preventDefault(), r.value && (u.value = k[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, Et(window, "mousemove", _), Et(window, "mouseup", g), Et(window, "contextmenu", g));
    }, m = (k) => {
      var S, $, I, w;
      if (k.preventDefault(), r.value) {
        const V = b(k[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + (($ = (S = e.data) == null ? void 0 : S.thumbSize) != null ? $ : 0) : i.value - ((w = (I = e.data) == null ? void 0 : I.thumbSize) != null ? w : 0));
        V !== i.value && (i.value = V, t("scroll", V));
      }
    }, b = (k) => k < 0 ? 0 : e.data && k > e.data.max ? e.data.max : k, _ = (k) => {
      if (o.value && r.value) {
        const S = b(k[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        S !== i.value && (i.value = S, t("scroll", S));
      }
    }, g = () => {
      s.value = !1, kn(window, "mousemove", _), kn(window, "mouseup", g);
    }, T = (k) => {
      s.value || (k = b(k), k !== i.value && (i.value = k));
    }, E = h(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: r,
      prefixCls: n,
      thumbCls: E,
      thumbStyle: c,
      handleThumbMouseDown: f,
      handleTrackClick: m,
      setOffset: T
    };
  }
});
function Yd(e, t, n, l, o, r) {
  return y(), re(Bl, null, {
    default: le(() => [v("div", {
      ref: "trackRef",
      class: G([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = an((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [v("div", {
      ref: "thumbRef",
      class: G(e.thumbCls),
      style: pe(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [v("div", {
      class: G(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var Gd = /* @__PURE__ */ fe(Kd, [["render", Yd]]);
const kr = 20, cl = 15, Xd = N({
  name: "Scrollbar",
  components: {
    ResizeObserver: Tl,
    Thumb: Gd
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
    const n = ne("scrollbar"), l = P(), o = P(), r = P(), a = P(), i = P(), s = P(!1), u = P(!1), c = h(() => s.value && !e.disableHorizontal), f = h(() => u.value && !e.disableVertical), m = P(!1), b = () => {
      var $, I, w, V, R, K;
      if (l.value) {
        const {
          clientWidth: q,
          clientHeight: p,
          offsetWidth: B,
          offsetHeight: x,
          scrollWidth: z,
          scrollHeight: A,
          scrollTop: U,
          scrollLeft: X
        } = l.value;
        s.value = z > q, u.value = A > p, m.value = c.value && f.value;
        const L = e.type === "embed" && m.value ? B - cl : B, Q = e.type === "embed" && m.value ? x - cl : x, j = Math.round(L / Math.min(z / q, L / kr)), C = L - j, H = (z - q) / C, J = Math.round(Q / Math.min(A / p, Q / kr)), he = Q - J, _e = (A - p) / he;
        if (o.value = {
          ratio: H,
          thumbSize: j,
          max: C
        }, r.value = {
          ratio: _e,
          thumbSize: J,
          max: he
        }, U > 0) {
          const ce = Math.round(U / ((I = ($ = r.value) == null ? void 0 : $.ratio) != null ? I : 1));
          (w = i.value) == null || w.setOffset(ce);
        }
        if (X > 0) {
          const ce = Math.round(X / ((R = (V = r.value) == null ? void 0 : V.ratio) != null ? R : 1));
          (K = a.value) == null || K.setOffset(ce);
        }
      }
    };
    xe(() => {
      b();
    });
    const _ = () => {
      b();
    }, g = ($) => {
      var I, w, V, R, K, q;
      if (l.value) {
        if (c.value && !e.disableHorizontal) {
          const p = Math.round(l.value.scrollLeft / ((w = (I = o.value) == null ? void 0 : I.ratio) != null ? w : 1));
          (V = a.value) == null || V.setOffset(p);
        }
        if (f.value && !e.disableVertical) {
          const p = Math.round(l.value.scrollTop / ((K = (R = r.value) == null ? void 0 : R.ratio) != null ? K : 1));
          (q = i.value) == null || q.setOffset(p);
        }
      }
      t("scroll", $);
    }, T = ($) => {
      var I, w;
      l.value && l.value.scrollTo({
        left: $ * ((w = (I = o.value) == null ? void 0 : I.ratio) != null ? w : 1)
      });
    }, E = ($) => {
      var I, w;
      l.value && l.value.scrollTo({
        top: $ * ((w = (I = r.value) == null ? void 0 : I.ratio) != null ? w : 1)
      });
    }, k = h(() => {
      const $ = {};
      return e.type === "track" && (c.value && ($.paddingBottom = `${cl}px`), f.value && ($.paddingRight = `${cl}px`)), [$, e.outerStyle];
    }), S = h(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: m.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: S,
      style: k,
      containerRef: l,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: o,
      verticalData: r,
      isBoth: m,
      hasHorizontalScrollbar: c,
      hasVerticalScrollbar: f,
      handleResize: _,
      handleScroll: g,
      handleHorizontalScroll: T,
      handleVerticalScroll: E
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, l;
      Ee(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((l = this.$refs.containerRef) == null || l.scrollTo(e, t));
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
function Zd(e, t, n, l, o, r) {
  const a = ue("ResizeObserver"), i = ue("thumb");
  return y(), O("div", {
    class: G(e.cls),
    style: pe(e.style)
  }, [d(a, {
    onResize: e.handleResize
  }, {
    default: le(() => [v("div", Oe({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [d(a, {
      onResize: e.handleResize
    }, {
      default: le(() => [se(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (y(), re(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (y(), re(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0)], 6);
}
var Po = /* @__PURE__ */ fe(Xd, [["render", Zd]]);
const Qd = Object.assign(Po, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Po.name, Po);
  }
}), Jd = (e) => {
  const t = P(), n = () => zi(t.value) ? t.value.$refs[e] : t.value, l = P();
  return xe(() => {
    l.value = n();
  }), be([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var ef = Object.defineProperty, Cr = Object.getOwnPropertySymbols, tf = Object.prototype.hasOwnProperty, nf = Object.prototype.propertyIsEnumerable, Sr = (e, t, n) => t in e ? ef(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, lf = (e, t) => {
  for (var n in t || (t = {}))
    tf.call(t, n) && Sr(e, n, t[n]);
  if (Cr)
    for (var n of Cr(t))
      nf.call(t, n) && Sr(e, n, t[n]);
  return e;
};
const of = (e) => {
  const t = h(() => Boolean(e.value)), n = h(() => {
    if (e.value)
      return lf({
        type: "embed"
      }, Xl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, af = N({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Qd,
    Empty: qd,
    Spin: Ud
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
    } = ye(e), i = ne("select-dropdown"), s = Xe(un, void 0), u = (r = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: c,
      elementRef: f
    } = Jd("containerRef"), {
      displayScrollbar: m,
      scrollbarProps: b
    } = of(a), _ = (T) => {
      const {
        scrollTop: E,
        scrollHeight: k,
        offsetHeight: S
      } = T.target;
      k - (E + S) <= e.bottomOffset && t("reachBottom", T), t("scroll", T);
    }, g = h(() => [i, {
      [`${i}-has-header`]: Boolean(n.header),
      [`${i}-has-footer`]: Boolean(n.footer)
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: g,
      wrapperRef: f,
      wrapperComRef: c,
      handleScroll: _,
      displayScrollbar: m,
      scrollbarProps: b
    };
  }
});
function rf(e, t, n, l, o, r) {
  const a = ue("spin");
  return y(), O("div", {
    class: G(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (y(), O("div", {
    key: 0,
    class: G(`${e.prefixCls}-header`)
  }, [se(e.$slots, "header")], 2)) : te("v-if", !0), e.loading ? (y(), re(a, {
    key: 1,
    class: G(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (y(), O("div", {
    key: 2,
    class: G(`${e.prefixCls}-empty`)
  }, [se(e.$slots, "empty", {}, () => [(y(), re(nn(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : te("v-if", !0), e.virtualList && !e.loading && !e.empty ? se(e.$slots, "virtual-list", {
    key: 3
  }) : te("v-if", !0), e.virtualList ? te("v-if", !0) : ka((y(), re(nn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Oe({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: le(() => [v("ul", {
      class: G(`${e.prefixCls}-list`)
    }, [se(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[Ca, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (y(), O("div", {
    key: 5,
    class: G(`${e.prefixCls}-footer`)
  }, [se(e.$slots, "footer")], 2)) : te("v-if", !0)], 2);
}
var sf = /* @__PURE__ */ fe(af, [["render", rf]]), Vr = N({
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
const ls = Symbol("ArcoCheckboxGroup");
var yl = N({
  name: "Checkbox",
  components: {
    IconCheck: Vr,
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
    } = ye(e), r = ne("checkbox"), a = P(), i = e.uninjectGroupContext ? void 0 : Xe(ls, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = dt({
      disabled: l
    }), f = P(e.defaultChecked), m = h(() => {
      var $;
      return s ? i == null ? void 0 : i.computedValue : ($ = e.modelValue) != null ? $ : f.value;
    }), b = h(() => {
      var $;
      return Ae(m.value) ? m.value.includes(($ = e.value) != null ? $ : !0) : m.value;
    }), _ = h(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !b.value && (i == null ? void 0 : i.isMaxed)), g = ($) => {
      $.stopPropagation();
    }, T = ($) => {
      var I, w, V, R;
      const {
        checked: K
      } = $.target;
      let q = K;
      if (Ae(m.value)) {
        const p = new Set(m.value);
        K ? p.add((I = e.value) != null ? I : !0) : p.delete((w = e.value) != null ? w : !0), q = Array.from(p);
      }
      f.value = K, s && Ae(q) ? i == null || i.handleChange(q, $) : (t("update:modelValue", q), t("change", q, $), (R = (V = c.value) == null ? void 0 : V.onChange) == null || R.call(V, $)), Le(() => {
        a.value && a.value.checked !== b.value && (a.value.checked = b.value);
      });
    }, E = h(() => [r, {
      [`${r}-checked`]: b.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: _.value
    }]), k = ($) => {
      var I, w;
      (w = (I = c.value) == null ? void 0 : I.onFocus) == null || w.call(I, $);
    }, S = ($) => {
      var I, w;
      (w = (I = c.value) == null ? void 0 : I.onBlur) == null || w.call(I, $);
    };
    return be(o, ($) => {
      (qe($) || Kt($)) && (f.value = !1);
    }), be(m, ($) => {
      var I;
      let w;
      Ae($) ? w = $.includes((I = e.value) != null ? I : !0) : w = $, f.value !== w && (f.value = w), a.value && a.value.checked !== w && (a.value.checked = w);
    }), () => {
      var $, I, w, V;
      return d("label", {
        "aria-disabled": _.value,
        class: E.value
      }, [d("input", {
        ref: a,
        type: "checkbox",
        checked: b.value,
        value: e.value,
        class: `${r}-target`,
        disabled: _.value,
        onClick: g,
        onChange: T,
        onFocus: k,
        onBlur: S
      }, null), (V = (w = (I = n.checkbox) != null ? I : ($ = i == null ? void 0 : i.slots) == null ? void 0 : $.checkbox) == null ? void 0 : w({
        checked: b.value,
        disabled: _.value
      })) != null ? V : d(ct, {
        class: `${r}-icon-hover`,
        disabled: _.value || b.value
      }, {
        default: () => [d("div", {
          class: `${r}-icon`
        }, [b.value && d(Vr, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && d("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), _l = N({
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
    } = ye(e), o = ne("checkbox-group"), {
      mergedDisabled: r,
      eventHandlers: a
    } = dt({
      disabled: l
    }), i = P(e.defaultValue), s = h(() => Ae(e.modelValue) ? e.modelValue : i.value), u = h(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = h(() => {
      var _;
      return ((_ = e.options) != null ? _ : []).map((g) => yt(g) || ge(g) ? {
        label: g,
        value: g
      } : g);
    });
    jt(ls, Pe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (_, g) => {
        var T, E;
        i.value = _, t("update:modelValue", _), t("change", _, g), (E = (T = a.value) == null ? void 0 : T.onChange) == null || E.call(T, g);
      }
    }));
    const m = h(() => [o, `${o}-direction-${e.direction}`]);
    be(() => e.modelValue, (_) => {
      Ae(_) ? i.value = [..._] : i.value = [];
    });
    const b = () => c.value.map((_) => {
      const g = s.value.includes(_.value);
      return d(yl, {
        key: _.value,
        value: _.value,
        disabled: _.disabled || !g && u.value,
        indeterminate: _.indeterminate,
        modelValue: g
      }, {
        default: () => [n.label ? n.label({
          data: _
        }) : et(_.label) ? _.label() : _.label]
      });
    });
    return () => {
      var _;
      return d("span", {
        class: m.value
      }, [c.value.length > 0 ? b() : (_ = n.default) == null ? void 0 : _.call(n)]);
    };
  }
});
const os = Object.assign(yl, {
  Group: _l,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + yl.name, yl), e.component(n + _l.name, _l);
  }
}), as = Symbol("ArcoSelectContext");
var uf = Object.defineProperty, cf = Object.defineProperties, df = Object.getOwnPropertyDescriptors, Or = Object.getOwnPropertySymbols, ff = Object.prototype.hasOwnProperty, vf = Object.prototype.propertyIsEnumerable, Er = (e, t, n) => t in e ? uf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ma = (e, t) => {
  for (var n in t || (t = {}))
    ff.call(t, n) && Er(e, n, t[n]);
  if (Or)
    for (var n of Or(t))
      vf.call(t, n) && Er(e, n, t[n]);
  return e;
}, rs = (e, t) => cf(e, df(t));
const pf = (e) => Ee(e) && "isGroup" in e, is = (e) => Ee(e) && "isGroup" in e, hf = (e, t = "value") => String(Ee(e) ? e[t] : e), Un = (e, t = "value") => Ee(e) ? `__arco__option__object__${e[t]}` : e || ge(e) || yt(e) || Xl(e) ? `__arco__option__${typeof e}-${e}` : "", mf = (e) => e.has("__arco__option__string-"), gf = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var r;
  if (Ee(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: o,
      key: Un(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : hf(i, t),
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
  return Ma({
    raw: a,
    index: o,
    key: Un(e, t),
    origin: l
  }, a);
}, pa = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (pf(i)) {
      const s = pa((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(rs(Ma({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = gf(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, xr = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var r;
    const a = [];
    for (const i of o)
      if (is(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && a.push(rs(Ma({}, i), {
          options: s
        }));
      } else
        Jl(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return l(e);
}, Jl = (e, {
  inputValue: t,
  filterOption: n
}) => et(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, bf = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Da(e[n], t[n]))
      return !1;
  return !0;
}, yf = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!Da(e[l], t[l]))
      return !1;
  return !0;
}, Da = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? bf(e, t) : n === "[object Array]" ? yf(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, _f = N({
  name: "Option",
  components: {
    Checkbox: os
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
    } = ye(e), o = ne("select-option"), r = Xe(as, void 0), a = Yn(), i = P(), s = P(n.value);
    be(n, (w, V) => {
      Da(w, V) || (s.value = w);
    });
    const u = P(""), c = h(() => {
      var w, V;
      return (V = (w = e.value) != null ? w : e.label) != null ? V : u.value;
    }), f = h(() => {
      var w;
      return (w = e.label) != null ? w : u.value;
    }), m = h(() => Un(c.value, r == null ? void 0 : r.valueKey)), b = h(() => {
      var w;
      return (w = r == null ? void 0 : r.component) != null ? w : "li";
    }), _ = () => {
      var w;
      if (!e.label && i.value) {
        const V = (w = i.value.textContent) != null ? w : "";
        u.value !== V && (u.value = V);
      }
    };
    xe(() => _()), Tt(() => _());
    const g = h(() => {
      var w;
      return (w = r == null ? void 0 : r.valueKeys.includes(m.value)) != null ? w : !1;
    }), T = h(() => (r == null ? void 0 : r.activeKey) === m.value);
    let E = P(!0);
    if (!e.internal) {
      const w = Pe({
        raw: {
          value: c,
          label: f,
          disabled: t,
          tagProps: s
        },
        ref: i,
        index: l,
        key: m,
        origin: "slot",
        value: c,
        label: f,
        disabled: t,
        tagProps: s
      });
      E = h(() => Jl(w, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, w)), Ut(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const k = (w) => {
      e.disabled || r == null || r.onSelect(m.value, w);
    }, S = () => {
      e.disabled || r == null || r.setActiveKey(m.value);
    }, $ = () => {
      e.disabled || r == null || r.setActiveKey();
    }, I = h(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: g.value,
      [`${o}-active`]: T.value,
      [`${o}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: o,
      cls: I,
      selectCtx: r,
      itemRef: i,
      component: b,
      isSelected: g,
      isValid: E,
      handleClick: k,
      handleMouseEnter: S,
      handleMouseLeave: $
    };
  }
});
function $f(e, t, n, l, o, r) {
  const a = ue("checkbox");
  return ka((y(), re(nn(e.component), {
    ref: "itemRef",
    class: G([e.cls, {
      [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix)
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: le(() => [e.$slots.icon ? (y(), O("span", {
      key: 0,
      class: G(`${e.prefixCls}-icon`)
    }, [se(e.$slots, "icon")], 2)) : te("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (y(), re(a, {
      key: 1,
      class: G(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: le(() => [se(e.$slots, "default", {}, () => [Ce(ie(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (y(), O("span", {
      key: 2,
      class: G(`${e.prefixCls}-content`)
    }, [se(e.$slots, "default", {}, () => [Ce(ie(e.label), 1)])], 2)), e.$slots.suffix ? (y(), O("span", {
      key: 3,
      class: G(`${e.prefixCls}-suffix`)
    }, [se(e.$slots, "suffix")], 2)) : te("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[Ca, e.isValid]]);
}
var ln = /* @__PURE__ */ fe(_f, [["render", $f]]), wf = Object.defineProperty, kf = Object.defineProperties, Cf = Object.getOwnPropertyDescriptors, Br = Object.getOwnPropertySymbols, Sf = Object.prototype.hasOwnProperty, Vf = Object.prototype.propertyIsEnumerable, Ir = (e, t, n) => t in e ? wf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, jo = (e, t) => {
  for (var n in t || (t = {}))
    Sf.call(t, n) && Ir(e, n, t[n]);
  if (Br)
    for (var n of Br(t))
      Vf.call(t, n) && Ir(e, n, t[n]);
  return e;
}, Of = (e, t) => kf(e, Cf(t));
const Ef = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, xf = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: r,
  fieldNames: a
}) => {
  const i = h(() => jo(jo({}, Ef), a == null ? void 0 : a.value)), s = Pe(/* @__PURE__ */ new Map()), u = h(() => Array.from(s.values()).sort((S, $) => ge(S.index) && ge($.index) ? S.index - $.index : 0)), c = h(() => {
    var S, $;
    const I = /* @__PURE__ */ new Map();
    return {
      optionInfos: pa((S = e == null ? void 0 : e.value) != null ? S : [], {
        valueKey: ($ = r == null ? void 0 : r.value) != null ? $ : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: I
      }),
      optionInfoMap: I
    };
  }), f = h(() => {
    var S, $;
    const I = /* @__PURE__ */ new Map();
    return {
      optionInfos: pa((S = t == null ? void 0 : t.value) != null ? S : [], {
        valueKey: ($ = r == null ? void 0 : r.value) != null ? $ : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: I
      }),
      optionInfoMap: I
    };
  }), m = Pe(/* @__PURE__ */ new Map());
  be([u, e ?? P([]), t ?? P([]), r ?? P("value")], () => {
    m.clear(), u.value.forEach((S, $) => {
      m.set(S.key, Of(jo({}, S), {
        index: $
      }));
    }), c.value.optionInfoMap.forEach((S) => {
      m.has(S.key) || (S.index = m.size, m.set(S.key, S));
    }), f.value.optionInfoMap.forEach((S) => {
      m.has(S.key) || (S.index = m.size, m.set(S.key, S));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const b = h(() => {
    var S;
    const $ = xr(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((S = o == null ? void 0 : o.value) == null || S) && $.push(...xr(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), $;
  }), _ = h(() => Array.from(m.values()).filter((S) => S.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Jl(S, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), g = h(() => _.value.filter((S) => !S.disabled).map((S) => S.key));
  return {
    validOptions: b,
    optionInfoMap: m,
    validOptionInfos: _,
    enabledOptionKeys: g,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (S, $) => {
      s.set(S, $);
    },
    removeSlotOptionInfo: (S) => {
      s.delete(S);
    }
  };
}, gn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, Pr = (e) => JSON.stringify({
  key: e.key,
  ctrl: Boolean(e.ctrl),
  shift: Boolean(e.shift),
  alt: Boolean(e.alt),
  meta: Boolean(e.meta)
}), ss = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = yt(l) ? {
      key: l
    } : l;
    t[Pr(o)] = n;
  }), (n) => {
    const l = Pr({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, Bf = ({
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
  popupVisible: c,
  valueKeys: f,
  dropdownRef: m,
  optionRefs: b,
  virtualListRef: _,
  onSelect: g,
  onPopupVisibleChange: T,
  enterToOpen: E = !0,
  defaultActiveFirstOption: k
}) => {
  const {
    validOptions: S,
    optionInfoMap: $,
    validOptionInfos: I,
    enabledOptionKeys: w,
    getNextSlotOptionIndex: V,
    addSlotOptionInfo: R,
    removeSlotOptionInfo: K
  } = xf({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), q = P();
  be(w, (A) => {
    (!q.value || !A.includes(q.value)) && (q.value = A[0]);
  });
  const p = (A) => {
    q.value = A;
  }, B = (A) => {
    const U = w.value.length;
    if (U === 0)
      return;
    if (!q.value)
      return A === "down" ? w.value[0] : w.value[U - 1];
    const X = w.value.indexOf(q.value), L = (U + X + (A === "up" ? -1 : 1)) % U;
    return w.value[L];
  }, x = (A) => {
    var U, X;
    _ != null && _.value && _.value.scrollTo({
      key: A
    });
    const L = $.get(A), Q = (U = m == null ? void 0 : m.value) == null ? void 0 : U.wrapperRef, j = (X = b == null ? void 0 : b.value[A]) != null ? X : L == null ? void 0 : L.ref;
    if (!Q || !j || Q.scrollHeight === Q.offsetHeight)
      return;
    const C = Hu(j, Q), H = Q.scrollTop;
    C.top < 0 ? Q.scrollTo(0, H + C.top) : C.bottom < 0 && Q.scrollTo(0, H - C.bottom);
  };
  be(c, (A) => {
    var U;
    if (A) {
      const X = f.value[f.value.length - 1];
      let L = (U = k == null ? void 0 : k.value) == null || U ? w.value[0] : void 0;
      w.value.includes(X) && (L = X), L !== q.value && (q.value = L), Le(() => {
        q.value && x(q.value);
      });
    }
  });
  const z = ss(/* @__PURE__ */ new Map([[gn.ENTER, (A) => {
    !(u != null && u.value) && !A.isComposing && (c.value ? q.value && (g(q.value, A), A.preventDefault()) : E && (T(!0), A.preventDefault()));
  }], [gn.ESC, (A) => {
    c.value && (T(!1), A.preventDefault());
  }], [gn.ARROW_DOWN, (A) => {
    if (c.value) {
      const U = B("down");
      U && (q.value = U, x(U)), A.preventDefault();
    }
  }], [gn.ARROW_UP, (A) => {
    if (c.value) {
      const U = B("up");
      U && (q.value = U, x(U)), A.preventDefault();
    }
  }]]));
  return jt(as, Pe({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: f,
    activeKey: q,
    setActiveKey: p,
    onSelect: g,
    getNextSlotOptionIndex: V,
    addSlotOptionInfo: R,
    removeSlotOptionInfo: K
  })), {
    validOptions: S,
    optionInfoMap: $,
    validOptionInfos: I,
    enabledOptionKeys: w,
    activeKey: q,
    setActiveKey: p,
    addSlotOptionInfo: R,
    removeSlotOptionInfo: K,
    getNextActiveKey: B,
    scrollIntoView: x,
    handleKeyDown: z
  };
}, If = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const r = P(0), a = /* @__PURE__ */ new Map(), i = h(() => e.value.length), s = P(0), u = h(() => {
    const V = s.value + o.value * 3;
    return V > i.value ? i.value : V;
  }), c = h(() => {
    const V = i.value - o.value * 3;
    return V < 0 ? 0 : V;
  }), f = (V) => {
    V < 0 ? s.value = 0 : V > c.value ? s.value = c.value : s.value = V;
  }, m = P(n.value), b = h(() => l.value !== 30 ? l.value : r.value || l.value), _ = (V, R) => {
    a.set(V, R);
  }, g = (V) => {
    var R;
    if (m.value)
      return b.value;
    const K = e.value[V];
    return (R = a.get(K)) != null ? R : b.value;
  }, T = (V) => a.has(V);
  xe(() => {
    const V = Array.from(a.values()).reduce((R, K) => R + K, 0);
    V > 0 && (r.value = V / a.size);
  });
  const E = (V) => m.value ? b.value * V : k(0, V), k = (V, R) => {
    let K = 0;
    for (let q = V; q < R; q++)
      K += g(q);
    return K;
  }, S = h(() => m.value ? b.value * s.value : k(0, s.value)), $ = (V) => {
    const R = V >= S.value;
    let K = Math.abs(V - S.value);
    const q = R ? s.value : s.value - 1;
    let p = 0;
    for (; K > 0; )
      K -= g(q + p), R ? p++ : p--;
    return p;
  }, I = (V) => {
    const R = $(V), K = s.value + R - o.value;
    return K < 0 ? 0 : K > c.value ? c.value : K;
  }, w = h(() => m.value ? b.value * (i.value - u.value) : k(u.value, i.value));
  return {
    frontPadding: S,
    behindPadding: w,
    start: s,
    end: u,
    getStartByScroll: I,
    setItemSize: _,
    hasItemSize: T,
    setStart: f,
    getScrollOffset: E
  };
};
var Pf = N({
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
    const l = (n = Yn()) == null ? void 0 : n.vnode.key, o = P(), r = () => {
      var a, i, s, u;
      const c = (i = (a = o.value) == null ? void 0 : a.$el) != null ? i : o.value, f = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      f && e.setItemSize(l, f);
    };
    return xe(() => r()), Ut(() => r()), () => {
      var a;
      const i = yn((a = t.default) == null ? void 0 : a.call(t));
      return i ? Yl(i, {
        ref: o
      }, !0) : null;
    };
  }
}), jf = Object.defineProperty, jr = Object.getOwnPropertySymbols, Tf = Object.prototype.hasOwnProperty, Mf = Object.prototype.propertyIsEnumerable, Tr = (e, t, n) => t in e ? jf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Df = (e, t) => {
  for (var n in t || (t = {}))
    Tf.call(t, n) && Tr(e, n, t[n]);
  if (jr)
    for (var n of jr(t))
      Mf.call(t, n) && Tr(e, n, t[n]);
  return e;
};
const zf = N({
  name: "VirtualList",
  components: {
    VirtualListItem: Pf
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
    } = ye(e), s = ne("virtual-list"), u = h(() => Ee(e.component) ? Df({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = P(), f = P(), m = h(() => ({
      height: ge(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), b = h(() => n.value.map((q, p) => {
      var B;
      return (B = q[l.value]) != null ? B : p;
    })), {
      frontPadding: _,
      behindPadding: g,
      start: T,
      end: E,
      getStartByScroll: k,
      setItemSize: S,
      hasItemSize: $,
      setStart: I,
      getScrollOffset: w
    } = If({
      dataKeys: b,
      contentRef: f,
      fixedSize: o,
      estimatedSize: r,
      buffer: a
    }), V = h(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(T.value, E.value)), R = (q) => {
      const {
        scrollTop: p,
        scrollHeight: B,
        offsetHeight: x
      } = q.target, z = k(p);
      z !== T.value && (I(z), Le(() => {
        K(p);
      })), t("scroll", q), Math.floor(B - (p + x)) <= 0 && t("reachBottom", q);
    }, K = (q) => {
      var p, B;
      if (c.value)
        if (ge(q))
          c.value.scrollTop = q;
        else {
          const x = (B = q.index) != null ? B : b.value.indexOf((p = q.key) != null ? p : "");
          I(x - a.value), c.value.scrollTop = w(x), Le(() => {
            if (c.value) {
              const z = w(x);
              z !== c.value.scrollTop && (c.value.scrollTop = z);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: c,
      contentRef: f,
      frontPadding: _,
      currentList: V,
      behindPadding: g,
      onScroll: R,
      setItemSize: S,
      hasItemSize: $,
      start: T,
      scrollTo: K,
      style: m,
      mergedComponent: u
    };
  }
});
function Af(e, t, n, l, o, r) {
  const a = ue("VirtualListItem");
  return y(), re(nn(e.mergedComponent.container), {
    ref: "containerRef",
    class: G(e.prefixCls),
    style: pe(e.style),
    onScroll: e.onScroll
  }, {
    default: le(() => [(y(), re(nn(e.mergedComponent.list), Oe(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: le(() => [(y(), re(nn(e.mergedComponent.content), Oe({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: le(() => [(y(!0), O(we, null, Ge(e.currentList, (i, s) => {
          var u;
          return y(), re(a, {
            key: (u = i[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: le(() => [se(e.$slots, "item", {
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
var Lf = /* @__PURE__ */ fe(zf, [["render", Af]]);
const Ff = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Nf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Rf = /* @__PURE__ */ v("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), qf = [Rf];
function Hf(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, qf, 14, Nf);
}
var To = /* @__PURE__ */ fe(Ff, [["render", Hf]]);
const za = Object.assign(To, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + To.name, To);
  }
}), Wf = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = P((l = t == null ? void 0 : t.value) != null ? l : !1), r = h(() => {
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
}, Uf = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Kf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yf = /* @__PURE__ */ v("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Gf = [Yf];
function Xf(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Gf, 14, Kf);
}
var Mo = /* @__PURE__ */ fe(Uf, [["render", Xf]]);
const Zf = Object.assign(Mo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Mo.name, Mo);
  }
}), Qf = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: o = "update:modelValue",
  eventHandlers: r
}) => {
  var a;
  const i = P(), s = P((a = e == null ? void 0 : e.value) != null ? a : ""), u = P(!1), c = P(!1), f = P("");
  let m;
  const b = h(() => {
    var w;
    return (w = t == null ? void 0 : t.value) != null ? w : s.value;
  }), _ = (w, V) => {
    s.value = w, n(o, w), n(l, w, V);
  }, g = (w) => {
    const {
      value: V
    } = w.target;
    c.value || (_(V, w), Le(() => {
      i.value && b.value !== i.value.value && (i.value.value = b.value);
    }));
  }, T = (w) => {
    l === "input" && b.value !== m && (m = b.value, n("change", b.value, w));
  }, E = (w) => {
    var V;
    const {
      value: R
    } = w.target;
    w.type === "compositionend" ? (c.value = !1, f.value = "", _(R, w), Le(() => {
      i.value && b.value !== i.value.value && (i.value.value = b.value);
    })) : (c.value = !0, f.value = b.value + ((V = w.data) != null ? V : ""));
  }, k = (w) => {
    var V, R;
    u.value = !0, m = b.value, n("focus", w), (R = (V = r == null ? void 0 : r.value) == null ? void 0 : V.onFocus) == null || R.call(V, w);
  }, S = (w) => {
    var V, R;
    u.value = !1, n("blur", w), (R = (V = r == null ? void 0 : r.value) == null ? void 0 : V.onBlur) == null || R.call(V, w), T(w);
  }, $ = (w) => {
    const V = w.key || w.code;
    !c.value && V === ja.key && (n("pressEnter", w), T(w));
  }, I = (w) => {
    i.value && w.target !== i.value && (w.preventDefault(), i.value.focus());
  };
  return be(b, (w) => {
    i.value && w !== i.value.value && (i.value.value = w);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: c,
    compositionValue: f,
    computedValue: b,
    handleInput: g,
    handleComposition: E,
    handleFocus: k,
    handleBlur: S,
    handleKeyDown: $,
    handleMousedown: I
  };
};
var Jf = N({
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
    } = ye(e), c = (o = e.baseCls) != null ? o : ne("input-label"), {
      mergedSize: f,
      mergedDisabled: m,
      mergedError: b,
      eventHandlers: _
    } = dt({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: g
    } = _t(f), {
      inputRef: T,
      _focused: E,
      computedValue: k,
      handleInput: S,
      handleComposition: $,
      handleFocus: I,
      handleBlur: w,
      handleMousedown: V
    } = Qf({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: _
    }), R = h(() => {
      var X;
      return (X = e.focused) != null ? X : E.value;
    }), K = h(() => e.enabledInput && E.value || !e.modelValue), q = () => {
      var X, L;
      return e.modelValue ? (L = (X = e.formatLabel) == null ? void 0 : X.call(e, e.modelValue)) != null ? L : e.modelValue.label : "";
    }, p = h(() => e.enabledInput && e.modelValue ? q() : e.placeholder), B = () => {
      var X, L;
      return e.modelValue ? (L = (X = l.default) == null ? void 0 : X.call(l, {
        data: e.modelValue
      })) != null ? L : q() : null;
    }, x = h(() => [c, `${c}-size-${g.value}`, {
      [`${c}-search`]: e.enabledInput,
      [`${c}-focus`]: R.value,
      [`${c}-disabled`]: m.value,
      [`${c}-error`]: b.value
    }]), z = h(() => Zn(t, Ht)), A = h(() => Qn(t, Ht));
    return {
      inputRef: T,
      render: () => d("span", Oe(z.value, {
        class: x.value,
        title: q(),
        onMousedown: V
      }), [l.prefix && d("span", {
        class: `${c}-prefix`
      }, [l.prefix()]), d("input", Oe(A.value, {
        ref: T,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !K.value
        }],
        value: k.value,
        readonly: !e.enabledInput,
        placeholder: p.value,
        disabled: m.value,
        onInput: S,
        onFocus: I,
        onBlur: w,
        onCompositionstart: $,
        onCompositionupdate: $,
        onCompositionend: $
      }), null), d("span", {
        class: [`${c}-value`, {
          [`${c}-value-hidden`]: K.value
        }]
      }, [B()]), l.suffix && d("span", {
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
}), ev = Object.defineProperty, Mr = Object.getOwnPropertySymbols, tv = Object.prototype.hasOwnProperty, nv = Object.prototype.propertyIsEnumerable, Dr = (e, t, n) => t in e ? ev(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, lv = (e, t) => {
  for (var n in t || (t = {}))
    tv.call(t, n) && Dr(e, n, t[n]);
  if (Mr)
    for (var n of Mr(t))
      nv.call(t, n) && Dr(e, n, t[n]);
  return e;
};
const ov = (e, t) => {
  const n = [];
  for (const l of e)
    if (Ee(l))
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
      n.push(lv({
        raw: o
      }, o));
    }
  return n;
}, zr = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], av = N({
  name: "Tag",
  components: {
    IconHover: ct,
    IconClose: cn,
    IconLoading: Yt
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
    } = ye(e), l = ne("tag"), o = h(() => e.color && zr.includes(e.color)), r = h(() => e.color && !zr.includes(e.color)), a = P(e.defaultVisible), i = P(e.defaultChecked), s = h(() => {
      var T;
      return (T = e.visible) != null ? T : a.value;
    }), u = h(() => {
      var T;
      return e.checkable ? (T = e.checked) != null ? T : i.value : !0;
    }), {
      mergedSize: c
    } = _t(n), f = h(() => c.value === "mini" ? "small" : c.value), m = (T) => {
      a.value = !1, t("update:visible", !1), t("close", T);
    }, b = (T) => {
      if (e.checkable) {
        const E = !u.value;
        i.value = E, t("update:checked", E), t("check", E, T);
      }
    }, _ = h(() => [l, `${l}-size-${f.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: u.value,
      [`${l}-custom-color`]: r.value
    }]), g = h(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: _,
      style: g,
      computedVisible: s,
      computedChecked: u,
      handleClick: b,
      handleClose: m
    };
  }
});
function rv(e, t, n, l, o, r) {
  const a = ue("icon-close"), i = ue("icon-hover"), s = ue("icon-loading");
  return e.computedVisible ? (y(), O("span", {
    key: 0,
    class: G(e.cls),
    style: pe(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (y(), O("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [se(e.$slots, "icon")], 2)) : te("v-if", !0), e.nowrap ? (y(), O("span", {
    key: 1,
    class: G(`${e.prefixCls}-text`)
  }, [se(e.$slots, "default")], 2)) : se(e.$slots, "default", {
    key: 2
  }), e.closable ? (y(), re(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: an(e.handleClose, ["stop"])
  }, {
    default: le(() => [se(e.$slots, "close-icon", {}, () => [d(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : te("v-if", !0), e.loading ? (y(), O("span", {
    key: 4,
    class: G(`${e.prefixCls}-loading-icon`)
  }, [d(s)], 2)) : te("v-if", !0)], 6)) : te("v-if", !0);
}
var Do = /* @__PURE__ */ fe(av, [["render", rv]]);
const iv = Object.assign(Do, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Do.name, Do);
  }
});
var sv = Object.defineProperty, Ar = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Lr = (e, t, n) => t in e ? sv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dl = (e, t) => {
  for (var n in t || (t = {}))
    uv.call(t, n) && Lr(e, n, t[n]);
  if (Ar)
    for (var n of Ar(t))
      cv.call(t, n) && Lr(e, n, t[n]);
  return e;
};
const dv = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var zo = N({
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
    } = ye(e), u = e.baseCls || ne("input-tag"), c = P(), f = P(), {
      mergedSize: m,
      mergedDisabled: b,
      mergedError: _,
      feedback: g,
      eventHandlers: T
    } = dt({
      size: o,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: E
    } = _t(m), k = h(() => dl(dl({}, dv), e.fieldNames)), S = P(!1), $ = P(e.defaultValue), I = P(e.defaultInputValue), w = P(!1), V = P(""), R = h(() => Ee(e.retainInputValue) ? dl({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), K = Pe({
      width: "12px"
    }), q = h(() => e.focused || S.value), p = (D, Z) => {
      I.value = D, t("update:inputValue", D), t("inputValueChange", D, Z);
    }, B = (D) => {
      var Z;
      const {
        value: oe
      } = D.target;
      D.type === "compositionend" ? (w.value = !1, V.value = "", p(oe, D), Le(() => {
        c.value && z.value !== c.value.value && (c.value.value = z.value);
      })) : (w.value = !0, V.value = z.value + ((Z = D.data) != null ? Z : ""));
    }, x = h(() => {
      var D;
      return (D = e.modelValue) != null ? D : $.value;
    }), z = h(() => {
      var D;
      return (D = e.inputValue) != null ? D : I.value;
    });
    be(s, (D) => {
      (qe(D) || Kt(D)) && ($.value = []);
    });
    const A = (D) => {
      c.value && D.target !== c.value && (D.preventDefault(), c.value.focus());
    }, U = (D) => {
      const {
        value: Z
      } = D.target;
      w.value || (p(Z, D), Le(() => {
        c.value && z.value !== c.value.value && (c.value.value = z.value);
      }));
    }, X = h(() => ov(x.value, k.value)), L = h(() => {
      if (e.maxTagCount > 0) {
        const D = X.value.length - e.maxTagCount;
        if (D > 0) {
          const Z = X.value.slice(0, e.maxTagCount), oe = {
            value: "__arco__more",
            label: `+${D}...`,
            closable: !1
          };
          return Z.push(dl({
            raw: oe
          }, oe)), Z;
        }
      }
      return X.value;
    }), Q = (D, Z) => {
      var oe, Me;
      $.value = D, t("update:modelValue", D), t("change", D, Z), (Me = (oe = T.value) == null ? void 0 : oe.onChange) == null || Me.call(oe, Z);
    }, j = (D, Z, oe) => {
      var Me;
      const De = (Me = x.value) == null ? void 0 : Me.filter((Ot, Qe) => Qe !== Z);
      Q(De, oe), t("remove", D, oe);
    }, C = (D) => {
      Q([], D), t("clear", D);
    }, H = h(() => !b.value && !e.readonly && e.allowClear && Boolean(x.value.length)), J = (D) => {
      var Z;
      if (z.value) {
        if (D.preventDefault(), e.uniqueValue && ((Z = x.value) != null && Z.includes(z.value))) {
          t("pressEnter", z.value, D);
          return;
        }
        const oe = x.value.concat(z.value);
        Q(oe, D), t("pressEnter", z.value, D), R.value.create || p("", D);
      }
    }, he = (D) => {
      var Z, oe;
      S.value = !0, t("focus", D), (oe = (Z = T.value) == null ? void 0 : Z.onFocus) == null || oe.call(Z, D);
    }, _e = (D) => {
      var Z, oe;
      S.value = !1, !R.value.blur && z.value && p("", D), t("blur", D), (oe = (Z = T.value) == null ? void 0 : Z.onBlur) == null || oe.call(Z, D);
    }, ce = () => {
      for (let D = X.value.length - 1; D >= 0; D--)
        if (X.value[D].closable)
          return D;
      return -1;
    }, Be = (D) => {
      if (b.value || e.readonly)
        return;
      const Z = D.key || D.code;
      if (!w.value && z.value && Z === ja.key && J(D), !w.value && L.value.length > 0 && !z.value && Z === Oc.key) {
        const oe = ce();
        oe >= 0 && j(X.value[oe].value, oe, D);
      }
    }, Ve = (D) => {
      D > 12 ? K.width = `${D}px` : K.width = "12px";
    };
    xe(() => {
      f.value && Ve(f.value.offsetWidth);
    });
    const je = () => {
      f.value && Ve(f.value.offsetWidth);
    };
    be(z, (D) => {
      c.value && !w.value && D !== c.value.value && (c.value.value = D);
    });
    const pt = h(() => [u, `${u}-size-${E.value}`, {
      [`${u}-disabled`]: b.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: _.value,
      [`${u}-focus`]: q.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: L.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || H.value || g.value,
      [`${u}-has-placeholder`]: !x.value.length
    }]), nt = h(() => Zn(l, Ht)), it = h(() => Qn(l, Ht));
    return {
      inputRef: c,
      render: () => {
        var D;
        return d("span", Oe({
          class: pt.value,
          onMousedown: A
        }, nt.value), [d(jl, {
          onResize: je
        }, {
          default: () => [d("span", {
            ref: f,
            class: `${u}-mirror`
          }, [L.value.length > 0 ? V.value || z.value : V.value || z.value || e.placeholder])]
        }), n.prefix && d("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), d(Mi, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [L.value.map((Z, oe) => d(iv, Oe({
            key: `tag-${Z.value}`,
            class: `${u}-tag`,
            closable: !b.value && !e.readonly && Z.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, Z.tagProps, {
            onClose: (Me) => j(Z.value, oe, Me)
          }), {
            default: () => {
              var Me, De, Ot, Qe;
              return [(Qe = (Ot = (Me = n.tag) == null ? void 0 : Me.call(n, {
                data: Z.raw
              })) != null ? Ot : (De = e.formatTag) == null ? void 0 : De.call(e, Z.raw)) != null ? Qe : Z.label];
            }
          })), d("input", Oe(it.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: K,
            placeholder: L.value.length === 0 ? e.placeholder : void 0,
            disabled: b.value,
            readonly: e.readonly || e.disabledInput,
            onInput: U,
            onKeydown: Be,
            onFocus: he,
            onBlur: _e,
            onCompositionstart: B,
            onCompositionupdate: B,
            onCompositionend: B
          }), null)]
        }), H.value && d(ct, {
          class: `${u}-clear-btn`,
          onClick: C,
          onMousedown: (Z) => Z.stopPropagation()
        }, {
          default: () => [d(cn, null, null)]
        }), (n.suffix || Boolean(g.value)) && d("span", {
          class: `${u}-suffix`
        }, [(D = n.suffix) == null ? void 0 : D.call(n), Boolean(g.value) && d(Pa, {
          type: g.value
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
const fv = Object.assign(zo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + zo.name, zo);
  }
});
var Fr = N({
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
      error: r
    } = ye(e), a = ne("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: c,
      mergedError: f
    } = dt({
      size: l,
      disabled: o,
      error: r
    }), {
      mergedSize: m
    } = _t(c), {
      opened: b
    } = ye(e), _ = P(), g = h(() => {
      var p;
      return (p = _.value) == null ? void 0 : p.inputRef;
    }), T = h(() => e.modelValue.length === 0), E = h(() => e.allowSearch || e.allowCreate), k = h(() => e.allowClear && !e.disabled && !T.value), S = (p) => {
      var B, x;
      t("focus", p), (x = (B = s.value) == null ? void 0 : B.onFocus) == null || x.call(B, p);
    }, $ = (p) => {
      var B, x;
      t("blur", p), (x = (B = s.value) == null ? void 0 : B.onBlur) == null || x.call(B, p);
    }, I = (p) => {
      t("remove", p);
    }, w = (p) => {
      t("clear", p);
    }, V = () => {
      var p, B, x, z;
      return e.loading ? (B = (p = n["loading-icon"]) == null ? void 0 : p.call(n)) != null ? B : d(Yt, null, null) : e.allowSearch && e.opened ? (z = (x = n["search-icon"]) == null ? void 0 : x.call(n)) != null ? z : d(va, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : d(za, {
        class: `${a}-arrow-icon`
      }, null);
    }, R = () => d(we, null, [k.value && d(ct, {
      class: `${a}-clear-btn`,
      onClick: w,
      onMousedown: (p) => p.stopPropagation()
    }, {
      default: () => [d(cn, null, null)]
    }), d("span", {
      class: `${a}-icon`
    }, [V()]), Boolean(i.value) && d(Pa, {
      type: i.value
    }, null)]);
    be(b, (p) => {
      !p && g.value && g.value.isSameNode(document.activeElement) && g.value.blur();
    });
    const K = h(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: g,
      handleFocus: S,
      handleBlur: $,
      render: () => e.multiple ? d(fv, {
        ref: _,
        baseCls: a,
        class: K.value,
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
        onRemove: I,
        onFocus: S,
        onBlur: $
      }, {
        prefix: n.prefix,
        suffix: R,
        tag: n.label
      }) : d(Jf, {
        ref: _,
        baseCls: a,
        class: K.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: m.value,
        error: f.value,
        enabledInput: E.value,
        uninjectFormItemContext: !0,
        onFocus: S,
        onBlur: $
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: R
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
const vv = N({
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
function pv(e, t, n, l, o, r) {
  return y(), O(we, null, [v("li", {
    class: G(`${e.prefixCls}-title`)
  }, [se(e.$slots, "label", {}, () => [Ce(ie(e.label), 1)])], 2), se(e.$slots, "default")], 64);
}
var $l = /* @__PURE__ */ fe(vv, [["render", pv]]);
const Nr = typeof window > "u" ? global : window;
function hv(e, t) {
  let n = 0;
  return (...l) => {
    n && Nr.clearTimeout(n), n = Nr.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var mv = Object.defineProperty, gv = Object.defineProperties, bv = Object.getOwnPropertyDescriptors, Rr = Object.getOwnPropertySymbols, yv = Object.prototype.hasOwnProperty, _v = Object.prototype.propertyIsEnumerable, qr = (e, t, n) => t in e ? mv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bn = (e, t) => {
  for (var n in t || (t = {}))
    yv.call(t, n) && qr(e, n, t[n]);
  if (Rr)
    for (var n of Rr(t))
      _v.call(t, n) && qr(e, n, t[n]);
  return e;
}, $v = (e, t) => gv(e, bv(t));
function wv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Sa(e);
}
const kv = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var Ao = N({
  name: "Select",
  components: {
    Trigger: Ml,
    SelectView: Fr
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
      default: (e) => qe(e.multiple) ? "" : []
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
      multiple: c,
      popupVisible: f,
      defaultPopupVisible: m,
      showExtraOptions: b,
      modelValue: _,
      fieldNames: g,
      loading: T,
      defaultActiveFirstOption: E
    } = ye(e), k = ne("select"), {
      mergedSize: S,
      mergedDisabled: $,
      mergedError: I,
      eventHandlers: w
    } = dt({
      size: o,
      disabled: r,
      error: a
    }), V = h(() => e.virtualListProps ? "div" : "li"), R = h(() => Ee(e.allowSearch) && Boolean(e.allowSearch.retainInputValue));
    h(() => {
      if (et(e.formatLabel))
        return (W) => {
          const M = De.get(W.value);
          return e.formatLabel(M);
        };
    });
    const K = P(), q = P({}), p = P(), {
      computedPopupVisible: B,
      handlePopupVisibleChange: x
    } = Wf({
      popupVisible: f,
      defaultPopupVisible: m,
      emit: n
    }), z = P(e.defaultValue), A = h(() => {
      var W;
      const M = (W = e.modelValue) != null ? W : z.value;
      return (Ae(M) ? M : M || ge(M) || yt(M) || Xl(M) ? [M] : []).map((ae) => ({
        value: ae,
        key: Un(ae, e.valueKey)
      }));
    });
    be(_, (W) => {
      (qe(W) || Kt(W)) && (z.value = c.value ? [] : W);
    });
    const U = h(() => A.value.map((W) => W.key)), X = h(() => Bn(Bn({}, kv), g == null ? void 0 : g.value)), L = P(), Q = (W) => {
      const M = {};
      return W.forEach((Y) => {
        M[Y] = De.get(Y);
      }), M;
    }, j = (W) => {
      L.value = Q(W);
    }, C = (W) => et(e.fallbackOption) ? e.fallbackOption(W) : {
      [X.value.value]: W,
      [X.value.label]: String(Ee(W) ? W[u == null ? void 0 : u.value] : W)
    }, H = () => {
      const W = [], M = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const Y of A.value)
          if (!M.includes(Y.key) && Y.value !== "") {
            const ae = De.get(Y.key);
            (!ae || ae.origin === "extraOptions") && (W.push(Y), M.push(Y.key));
          }
      }
      if (e.allowCreate && ce.value) {
        const Y = Un(ce.value);
        if (!M.includes(Y)) {
          const ae = De.get(Y);
          (!ae || ae.origin === "extraOptions") && W.push({
            value: ce.value,
            key: Y
          });
        }
      }
      return W;
    }, J = P([]), he = h(() => J.value.map((W) => {
      var M;
      let Y = C(W.value);
      const ae = (M = L.value) == null ? void 0 : M[W.key];
      return !qe(ae) && !su(ae) && (Y = Bn(Bn({}, Y), ae)), Y;
    }));
    Le(() => {
      au(() => {
        var W;
        const M = H();
        if (M.length !== J.value.length)
          J.value = M;
        else if (M.length > 0) {
          for (let Y = 0; Y < M.length; Y++)
            if (M[Y].key !== ((W = J.value[Y]) == null ? void 0 : W.key)) {
              J.value = M;
              break;
            }
        }
      });
    });
    const _e = P(""), ce = h(() => {
      var W;
      return (W = e.inputValue) != null ? W : _e.value;
    });
    be(B, (W) => {
      !W && !R.value && ce.value && je("");
    });
    const Be = (W) => {
      var M, Y;
      return e.multiple ? W.map((ae) => {
        var ht, lt;
        return (lt = (ht = De.get(ae)) == null ? void 0 : ht.value) != null ? lt : "";
      }) : (Y = (M = De.get(W[0])) == null ? void 0 : M.value) != null ? Y : mf(De) ? void 0 : "";
    }, Ve = (W) => {
      var M, Y;
      const ae = Be(W);
      z.value = ae, n("update:modelValue", ae), n("change", ae), (Y = (M = w.value) == null ? void 0 : M.onChange) == null || Y.call(M), j(W);
    }, je = (W) => {
      _e.value = W, n("update:inputValue", W), n("inputValueChange", W);
    }, pt = (W, M) => {
      if (e.multiple) {
        if (U.value.includes(W)) {
          const Y = U.value.filter((ae) => ae !== W);
          Ve(Y);
        } else if (Qe.value.includes(W))
          if (e.limit > 0 && U.value.length >= e.limit) {
            const Y = De.get(W);
            n("exceedLimit", Y == null ? void 0 : Y.value, M);
          } else {
            const Y = U.value.concat(W);
            Ve(Y);
          }
        R.value || je("");
      } else {
        if (W !== U.value[0] && Ve([W]), R.value) {
          const Y = De.get(W);
          Y && je(Y.label);
        }
        x(!1);
      }
    }, nt = hv((W) => {
      n("search", W);
    }, e.searchDelay), it = (W) => {
      W !== ce.value && (B.value || x(!0), je(W), e.allowSearch && nt(W));
    }, F = (W) => {
      const M = De.get(W), Y = U.value.filter((ae) => ae !== W);
      Ve(Y), n("remove", M == null ? void 0 : M.value);
    }, D = (W) => {
      W == null || W.stopPropagation();
      const M = U.value.filter((Y) => {
        var ae;
        return (ae = De.get(Y)) == null ? void 0 : ae.disabled;
      });
      Ve(M), je(""), n("clear", W);
    }, Z = (W) => {
      n("dropdownScroll", W);
    }, oe = (W) => {
      n("dropdownReachBottom", W);
    }, {
      validOptions: Me,
      optionInfoMap: De,
      validOptionInfos: Ot,
      enabledOptionKeys: Qe,
      handleKeyDown: uo
    } = Bf({
      multiple: c,
      options: i,
      extraOptions: he,
      inputValue: ce,
      filterOption: s,
      showExtraOptions: b,
      component: V,
      valueKey: u,
      fieldNames: g,
      loading: T,
      popupVisible: B,
      valueKeys: U,
      dropdownRef: K,
      optionRefs: q,
      virtualListRef: p,
      defaultActiveFirstOption: E,
      onSelect: pt,
      onPopupVisibleChange: x
    }), co = h(() => {
      var W;
      const M = [];
      for (const Y of A.value) {
        const ae = De.get(Y.key);
        ae && M.push($v(Bn({}, ae), {
          value: Y.key,
          label: (W = ae == null ? void 0 : ae.label) != null ? W : String(Ee(Y.value) ? Y.value[u == null ? void 0 : u.value] : Y.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return M;
    }), xn = (W) => {
      if (et(t.option)) {
        const M = t.option;
        return () => M({
          data: W.raw
        });
      }
      return et(W.render) ? W.render : () => W.label;
    }, zt = (W) => {
      if (is(W)) {
        let M;
        return d($l, {
          key: W.key,
          label: W.label
        }, wv(M = W.options.map((Y) => zt(Y))) ? M : {
          default: () => [M]
        });
      }
      return Jl(W, {
        inputValue: ce.value,
        filterOption: s == null ? void 0 : s.value
      }) ? d(ln, {
        ref: (M) => {
          M != null && M.$el && (q.value[W.key] = M.$el);
        },
        key: W.key,
        value: W.value,
        label: W.label,
        disabled: W.disabled,
        internal: !0
      }, {
        default: xn(W)
      }) : null;
    }, rl = () => d(sf, {
      ref: K,
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
        var W, M;
        return [...(M = (W = t.default) == null ? void 0 : W.call(t)) != null ? M : [], ...Me.value.map(zt)];
      },
      "virtual-list": () => d(Lf, Oe(e.virtualListProps, {
        ref: p,
        data: Me.value
      }), {
        item: ({
          item: W
        }) => zt(W)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), fo = ({
      data: W
    }) => {
      var M, Y, ae, ht;
      if ((t.label || et(e.formatLabel)) && W) {
        const lt = De.get(W.value);
        if (lt != null && lt.raw)
          return (ae = (M = t.label) == null ? void 0 : M.call(t, {
            data: lt.raw
          })) != null ? ae : (Y = e.formatLabel) == null ? void 0 : Y.call(e, lt.raw);
      }
      return (ht = W == null ? void 0 : W.label) != null ? ht : "";
    };
    return () => d(Ml, Oe({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: $.value,
      popupVisible: B.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: x
    }, e.triggerProps), {
      default: () => {
        var W, M;
        return [(M = (W = t.trigger) == null ? void 0 : W.call(t)) != null ? M : d(Fr, Oe({
          class: k,
          modelValue: co.value,
          inputValue: ce.value,
          multiple: e.multiple,
          disabled: $.value,
          error: I.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: Boolean(e.allowSearch),
          opened: B.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: S.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: it,
          onRemove: F,
          onClear: D,
          onKeydown: uo
        }, l), {
          label: fo,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: rl
    });
  }
});
const eo = Object.assign(Ao, {
  Option: ln,
  OptGroup: $l,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ao.name, Ao), e.component(n + ln.name, ln), e.component(n + $l.name, $l);
  }
}), us = Symbol("RadioGroup");
var wl = N({
  name: "Radio",
  components: {
    IconHover: ct
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
    value: {
      type: [String, Number, Boolean],
      default: !0
    },
    type: {
      type: String,
      default: "radio"
    },
    disabled: {
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
    const l = ne("radio"), {
      modelValue: o
    } = ye(e), r = e.uninjectGroupContext ? void 0 : Xe(us, void 0), {
      mergedDisabled: a,
      eventHandlers: i
    } = dt({
      disabled: Hn(e, "disabled")
    }), s = P(null), u = P(e.defaultChecked), c = h(() => (r == null ? void 0 : r.name) === "ArcoRadioGroup"), f = h(() => {
      var $;
      return ($ = r == null ? void 0 : r.type) != null ? $ : e.type;
    }), m = h(() => (r == null ? void 0 : r.disabled) || a.value), b = h(() => {
      var $, I;
      return c.value ? (r == null ? void 0 : r.value) === (($ = e.value) != null ? $ : !0) : qe(e.modelValue) ? u.value : e.modelValue === ((I = e.value) != null ? I : !0);
    });
    be(o, ($) => {
      (qe($) || Kt($)) && (u.value = !1);
    }), be(b, ($, I) => {
      $ !== I && (u.value = $, s.value && (s.value.checked = $));
    });
    const _ = ($) => {
      var I, w;
      (w = (I = i.value) == null ? void 0 : I.onFocus) == null || w.call(I, $);
    }, g = ($) => {
      var I, w;
      (w = (I = i.value) == null ? void 0 : I.onBlur) == null || w.call(I, $);
    }, T = ($) => {
      $.stopPropagation();
    }, E = ($) => {
      var I, w, V, R, K;
      u.value = !0, c.value ? r == null || r.handleChange((I = e.value) != null ? I : !0, $) : (t("update:modelValue", (w = e.value) != null ? w : !0), t("change", (V = e.value) != null ? V : !0, $), (K = (R = i.value) == null ? void 0 : R.onChange) == null || K.call(R, $)), Le(() => {
        s.value && s.value.checked !== b.value && (s.value.checked = b.value);
      });
    }, k = h(() => [`${f.value === "button" ? `${l}-button` : l}`, {
      [`${l}-checked`]: b.value,
      [`${l}-disabled`]: m.value
    }]), S = () => d(we, null, [d(ue("icon-hover"), {
      class: `${l}-icon-hover`,
      disabled: m.value || b.value
    }, {
      default: () => [d("span", {
        class: `${l}-icon`
      }, null)]
    }), n.default && d("span", {
      class: `${l}-label`
    }, [n.default()])]);
    return () => {
      var $, I, w, V;
      return d("label", {
        class: k.value
      }, [d("input", {
        ref: s,
        type: "radio",
        checked: b.value,
        value: e.value,
        class: `${l}-target`,
        disabled: m.value,
        onClick: T,
        onChange: E,
        onFocus: _,
        onBlur: g
      }, null), f.value === "radio" ? (V = (w = (I = n.radio) != null ? I : ($ = r == null ? void 0 : r.slots) == null ? void 0 : $.radio) == null ? void 0 : w({
        checked: b.value,
        disabled: m.value
      })) != null ? V : S() : d("span", {
        class: `${l}-button-content`
      }, [n.default && n.default()])]);
    };
  }
}), kl = N({
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    type: {
      type: String,
      default: "radio"
    },
    size: {
      type: String
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
    const l = ne("radio-group"), {
      size: o,
      type: r,
      disabled: a,
      modelValue: i
    } = ye(e), {
      mergedDisabled: s,
      mergedSize: u,
      eventHandlers: c
    } = dt({
      size: o,
      disabled: a
    }), f = P(e.defaultValue), m = h(() => {
      var E;
      return (E = e.modelValue) != null ? E : f.value;
    }), b = h(() => {
      var E;
      return ((E = e.options) != null ? E : []).map((k) => yt(k) || ge(k) ? {
        label: k,
        value: k
      } : k);
    });
    jt(us, Pe({
      name: "ArcoRadioGroup",
      value: m,
      size: u,
      type: r,
      disabled: s,
      slots: n,
      handleChange: (E, k) => {
        var S, $;
        f.value = E, t("update:modelValue", E), t("change", E, k), ($ = (S = c.value) == null ? void 0 : S.onChange) == null || $.call(S, k);
      }
    })), be(m, (E) => {
      f.value !== E && (f.value = E);
    }), be(i, (E) => {
      (qe(E) || Kt(E)) && (f.value = "");
    });
    const g = h(() => [`${l}${e.type === "button" ? "-button" : ""}`, `${l}-size-${u.value}`, `${l}-direction-${e.direction}`, {
      [`${l}-disabled`]: s.value
    }]), T = () => b.value.map((E) => d(wl, {
      key: E.value,
      value: E.value,
      disabled: E.disabled,
      modelValue: m.value === E.value
    }, {
      default: () => [n.label ? n.label({
        data: E
      }) : et(E.label) ? E.label() : E.label]
    }));
    return () => {
      var E;
      return d("span", {
        class: g.value
      }, [b.value.length > 0 ? T() : (E = n.default) == null ? void 0 : E.call(n)]);
    };
  }
});
const Cv = Object.assign(wl, {
  Group: kl,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + wl.name, wl), e.component(n + kl.name, kl);
  }
}), Sv = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Vv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ov = /* @__PURE__ */ v("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), Ev = [Ov];
function xv(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Ev, 14, Vv);
}
var Lo = /* @__PURE__ */ fe(Sv, [["render", xv]]);
const Bv = Object.assign(Lo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Lo.name, Lo);
  }
}), Iv = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Pv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], jv = /* @__PURE__ */ v("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), Tv = [jv];
function Mv(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Tv, 14, Pv);
}
var Fo = /* @__PURE__ */ fe(Iv, [["render", Mv]]);
const cs = Object.assign(Fo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Fo.name, Fo);
  }
}), Dv = (e) => {
  const t = {}, n = P([]), l = () => {
    if (t.value) {
      const o = Yi(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return xe(() => l()), Tt(() => l()), {
    children: t,
    components: n
  };
}, zv = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var Av = Object.defineProperty, Lv = Object.defineProperties, Fv = Object.getOwnPropertyDescriptors, Hr = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, Rv = Object.prototype.propertyIsEnumerable, Wr = (e, t, n) => t in e ? Av(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, qv = (e, t) => {
  for (var n in t || (t = {}))
    Nv.call(t, n) && Wr(e, n, t[n]);
  if (Hr)
    for (var n of Hr(t))
      Rv.call(t, n) && Wr(e, n, t[n]);
  return e;
}, Hv = (e, t) => Lv(e, Fv(t));
const ds = (e, t, n) => {
  const l = Math.floor(e * 6), o = e * 6 - l, r = n * (1 - t), a = n * (1 - o * t), i = n * (1 - (1 - o) * t), s = l % 6, u = [n, a, r, r, i, n][s], c = [i, n, n, a, r, r][s], f = [r, r, i, n, n, a][s];
  return {
    r: Math.round(u * 255),
    g: Math.round(c * 255),
    b: Math.round(f * 255)
  };
}, to = (e, t, n) => {
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
}, Wv = "[-\\+]?\\d+%?", Uv = "[-\\+]?\\d*\\.\\d+%?", tn = `(?:${Uv})|(?:${Wv})`, Kv = `[\\s|\\(]+(${tn})[,|\\s]+(${tn})[,|\\s]+(${tn})\\s*\\)?`, Yv = `[\\s|\\(]+(${tn})[,|\\s]+(${tn})[,|\\s]+(${tn})[,|\\s]+(${tn})\\s*\\)?`, Lt = {
  rgb: new RegExp(`rgb${Kv}`),
  rgba: new RegExp(`rgba${Yv}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, Ye = (e) => parseInt(e, 16), Ur = (e) => Ye(e) / 255, Gv = (e) => {
  let t = Lt.rgb.exec(e);
  return t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10)
  } : (t = Lt.rgba.exec(e), t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10),
    a: parseFloat(t[4])
  } : (t = Lt.hex8.exec(e), t ? {
    r: Ye(t[1]),
    g: Ye(t[2]),
    b: Ye(t[3]),
    a: Ur(t[4])
  } : (t = Lt.hex6.exec(e), t ? {
    r: Ye(t[1]),
    g: Ye(t[2]),
    b: Ye(t[3])
  } : (t = Lt.hex4.exec(e), t ? {
    r: Ye(t[1] + t[1]),
    g: Ye(t[2] + t[2]),
    b: Ye(t[3] + t[3]),
    a: Ur(t[4] + t[4])
  } : (t = Lt.hex3.exec(e), t ? {
    r: Ye(t[1] + t[1]),
    g: Ye(t[2] + t[2]),
    b: Ye(t[3] + t[3])
  } : !1)))));
}, Xv = (e) => {
  var t;
  const n = Gv(e);
  if (n) {
    const l = to(n.r, n.g, n.b);
    return Hv(qv({}, l), {
      a: (t = n.a) != null ? t : 1
    });
  }
  return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
}, fs = (e) => {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  let t = Lt.hex6.exec(e);
  return t ? {
    r: Ye(t[1]),
    g: Ye(t[2]),
    b: Ye(t[3])
  } : (t = Lt.hex3.exec(e), t ? {
    r: Ye(t[1] + t[1]),
    g: Ye(t[2] + t[2]),
    b: Ye(t[3] + t[3])
  } : !1);
}, Kr = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), Zv = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), vs = ({
  value: e,
  onChange: t
}) => {
  const n = P(!1), l = P(), o = P(), r = (c, f) => c < 0 ? 0 : c > f ? 1 : c / f, a = (c) => {
    if (!l.value)
      return;
    const {
      clientX: f,
      clientY: m
    } = c, b = l.value.getBoundingClientRect(), _ = [r(f - b.x, b.width), r(m - b.y, b.height)];
    (_[0] !== e[0] || _[1] !== e[1]) && (t == null || t(_));
  }, i = () => {
    n.value = !1, window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", i), window.removeEventListener("contextmenu", i);
  }, s = (c) => {
    n.value = !0, a(c), window.addEventListener("mousemove", u), window.addEventListener("mouseup", i), window.addEventListener("contextmenu", i);
  };
  function u(c) {
    c.preventDefault(), c.buttons > 0 ? a(c) : i();
  }
  return {
    active: n,
    blockRef: l,
    handlerRef: o,
    onMouseDown: s
  };
};
var Yr = N({
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
    const t = ne("color-picker"), n = h(() => e.color.rgb), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: r
    } = vs({
      value: [e.x, 0],
      onChange: (i) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, i[0]);
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
      onMousedown: r
    }, [a()])]) : d("div", {
      ref: l,
      class: [`${t}-control-bar`, `${t}-control-bar-hue`],
      onMousedown: r
    }, [a()]);
  }
}), Qv = N({
  name: "Palette",
  props: {
    color: {
      type: Object,
      required: !0
    },
    onChange: Function
  },
  setup(e) {
    const t = ne("color-picker"), n = h(() => e.color.hsv), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: r
    } = vs({
      value: [n.value.s, 1 - n.value.v],
      onChange: (i) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, i[0], 1 - i[1]);
      }
    }), a = h(() => {
      const i = ds(n.value.h, 1, 1);
      return `rgb(${i.r}, ${i.g}, ${i.b})`;
    });
    return () => d("div", {
      ref: l,
      class: `${t}-palette`,
      style: {
        backgroundColor: a.value
      },
      onMousedown: r
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
function Aa(e, t) {
  return t === void 0 && (t = 15), +parseFloat(Number(e).toPrecision(t));
}
function Ct(e) {
  var t = e.toString().split(/[eE]/), n = (t[0].split(".")[1] || "").length - +(t[1] || 0);
  return n > 0 ? n : 0;
}
function Kn(e) {
  if (e.toString().indexOf("e") === -1)
    return Number(e.toString().replace(".", ""));
  var t = Ct(e);
  return t > 0 ? Aa(Number(e) * Math.pow(10, t)) : Number(e);
}
function ha(e) {
  hs && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function no(e) {
  return function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var l = t[0], o = t.slice(1);
    return o.reduce(function(r, a) {
      return e(r, a);
    }, l);
  };
}
var Wt = no(function(e, t) {
  var n = Kn(e), l = Kn(t), o = Ct(e) + Ct(t), r = n * l;
  return ha(r), r / Math.pow(10, o);
}), Jv = no(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Wt(e, n) + Wt(t, n)) / n;
}), ep = no(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Wt(e, n) - Wt(t, n)) / n;
}), ps = no(function(e, t) {
  var n = Kn(e), l = Kn(t);
  return ha(n), ha(l), Wt(n / l, Aa(Math.pow(10, Ct(t) - Ct(e))));
});
function tp(e, t) {
  var n = Math.pow(10, t), l = ps(Math.round(Math.abs(Wt(e, n))), n);
  return e < 0 && l !== 0 && (l = Wt(l, -1)), l;
}
var hs = !0;
function np(e) {
  e === void 0 && (e = !0), hs = e;
}
var sn = {
  strip: Aa,
  plus: Jv,
  minus: ep,
  times: Wt,
  divide: ps,
  round: tp,
  digitLength: Ct,
  float2Fixed: Kn,
  enableBoundaryChecking: np
};
const lp = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), op = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ap = /* @__PURE__ */ v("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), rp = [ap];
function ip(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, rp, 14, op);
}
var No = /* @__PURE__ */ fe(lp, [["render", ip]]);
const ms = Object.assign(No, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + No.name, No);
  }
}), sp = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-minus`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), up = ["stroke-width", "stroke-linecap", "stroke-linejoin"], cp = /* @__PURE__ */ v("path", {
  d: "M5 24h38"
}, null, -1), dp = [cp];
function fp(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, dp, 14, up);
}
var Ro = /* @__PURE__ */ fe(sp, [["render", fp]]);
const vp = Object.assign(Ro, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ro.name, Ro);
  }
});
var pp = Object.defineProperty, Gr = Object.getOwnPropertySymbols, hp = Object.prototype.hasOwnProperty, mp = Object.prototype.propertyIsEnumerable, Xr = (e, t, n) => t in e ? pp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gp = (e, t) => {
  for (var n in t || (t = {}))
    hp.call(t, n) && Xr(e, n, t[n]);
  if (Gr)
    for (var n of Gr(t))
      mp.call(t, n) && Xr(e, n, t[n]);
  return e;
};
const bp = 800, yp = 150;
sn.enableBoundaryChecking(!1);
var qo = N({
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
    } = ye(e), a = ne("input-number"), i = P(), {
      mergedSize: s,
      mergedDisabled: u,
      eventHandlers: c
    } = dt({
      size: o,
      disabled: r
    }), {
      mergedSize: f
    } = _t(s), m = h(() => {
      if (ge(e.precision)) {
        const C = `${e.step}`.split(".")[1], H = C && C.length || 0;
        return Math.max(H, e.precision);
      }
    }), b = (C) => {
      var H, J;
      if (!ge(C))
        return "";
      const he = m.value ? C.toFixed(m.value) : String(C);
      return (J = (H = e.formatter) == null ? void 0 : H.call(e, he)) != null ? J : he;
    }, _ = P(b((l = e.modelValue) != null ? l : e.defaultValue)), g = h(() => {
      var C, H;
      if (!_.value)
        return;
      const J = Number((H = (C = e.parser) == null ? void 0 : C.call(e, _.value)) != null ? H : _.value);
      return Number.isNaN(J) ? void 0 : J;
    }), T = P(ge(g.value) && g.value <= e.min), E = P(ge(g.value) && g.value >= e.max);
    let k = 0;
    const S = () => {
      k && (window.clearTimeout(k), k = 0);
    }, $ = (C) => {
      if (!qe(C))
        return ge(e.min) && C < e.min && (C = e.min), ge(e.max) && C > e.max && (C = e.max), ge(m.value) ? sn.round(C, m.value) : C;
    }, I = (C) => {
      let H = !1, J = !1;
      ge(C) && (C <= e.min && (H = !0), C >= e.max && (J = !0)), E.value !== J && (E.value = J), T.value !== H && (T.value = H);
    }, w = () => {
      const C = $(g.value), H = b(C);
      (C !== g.value || _.value !== H) && (_.value = H), t("update:modelValue", C);
    };
    be(() => [e.max, e.min], () => {
      w(), I(g.value);
    });
    const V = (C, H) => {
      if (u.value || C === "plus" && E.value || C === "minus" && T.value)
        return;
      let J;
      ge(g.value) ? J = $(sn[C](g.value, e.step)) : J = e.min === -1 / 0 ? 0 : e.min, _.value = b(J), I(J), t("update:modelValue", J), t("change", J, H);
    }, R = (C, H, J = !1) => {
      var he;
      C.preventDefault(), (he = i.value) == null || he.focus(), V(H, C), J && (k = window.setTimeout(() => C.target.dispatchEvent(C), k ? yp : bp));
    }, K = (C, H) => {
      var J, he, _e, ce;
      C = C.trim().replace(/。/g, "."), C = (he = (J = e.parser) == null ? void 0 : J.call(e, C)) != null ? he : C, (ge(Number(C)) || /^(\.|-)$/.test(C)) && (_.value = (ce = (_e = e.formatter) == null ? void 0 : _e.call(e, C)) != null ? ce : C, I(g.value), t("input", g.value, _.value, H), e.modelEvent === "input" && (t("update:modelValue", g.value), t("change", g.value, H)));
    }, q = (C) => {
      t("focus", C);
    }, p = (C, H) => {
      H instanceof MouseEvent && !C || (w(), t("change", g.value, H));
    }, B = (C) => {
      t("blur", C);
    }, x = (C) => {
      var H, J;
      _.value = "", t("update:modelValue", void 0), t("change", void 0, C), (J = (H = c.value) == null ? void 0 : H.onChange) == null || J.call(H, C), t("clear", C);
    }, z = ss(/* @__PURE__ */ new Map([[gn.ARROW_UP, (C) => {
      C.preventDefault(), !e.readOnly && V("plus", C);
    }], [gn.ARROW_DOWN, (C) => {
      C.preventDefault(), !e.readOnly && V("minus", C);
    }]])), A = (C) => {
      t("keydown", C), C.defaultPrevented || z(C);
    };
    be(() => e.modelValue, (C) => {
      C !== g.value && (_.value = b(C), I(C));
    });
    const U = () => {
      var C, H, J;
      return e.readOnly ? null : d(we, null, [n.suffix && d("div", {
        class: `${a}-suffix`
      }, [(C = n.suffix) == null ? void 0 : C.call(n)]), d("div", {
        class: `${a}-step`
      }, [d("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || E.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || E.value,
        onMousedown: (he) => R(he, "plus", !0),
        onMouseup: S,
        onMouseleave: S
      }, [n.plus ? (H = n.plus) == null ? void 0 : H.call(n) : d(cs, null, null)]), d("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || T.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || T.value,
        onMousedown: (he) => R(he, "minus", !0),
        onMouseup: S,
        onMouseleave: S
      }, [n.minus ? (J = n.minus) == null ? void 0 : J.call(n) : d(za, null, null)])])]);
    }, X = h(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {
      [`${a}-readonly`]: e.readOnly
    }]), L = () => d(rn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || T.value,
      onMousedown: (C) => R(C, "minus", !0),
      onMouseup: S,
      onMouseleave: S
    }, {
      icon: () => d(vp, null, null)
    }), Q = () => d(rn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || E.value,
      onMousedown: (C) => R(C, "plus", !0),
      onMouseup: S,
      onMouseleave: S
    }, {
      icon: () => d(ms, null, null)
    });
    return {
      inputRef: i,
      render: () => {
        const C = e.mode === "embed" ? {
          prepend: n.prepend,
          prefix: n.prefix,
          suffix: e.hideButton ? n.suffix : U,
          append: n.append
        } : {
          prepend: e.hideButton ? n.prepend : L,
          prefix: n.prefix,
          suffix: n.suffix,
          append: e.hideButton ? n.append : Q
        };
        return d(Gt, {
          key: `__arco__${e.mode}`,
          ref: i,
          class: X.value,
          type: "text",
          allowClear: e.allowClear,
          size: f.value,
          modelValue: _.value,
          placeholder: e.placeholder,
          disabled: u.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: gp({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": _.value
          }, e.inputAttrs),
          onInput: K,
          onFocus: q,
          onBlur: B,
          onClear: x,
          onChange: p,
          onKeydown: A
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
const Vt = Object.assign(qo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + qo.name, qo);
  }
});
var gs = N({
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
}), _p = Object.defineProperty, Zr = Object.getOwnPropertySymbols, $p = Object.prototype.hasOwnProperty, wp = Object.prototype.propertyIsEnumerable, Qr = (e, t, n) => t in e ? _p(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jr = (e, t) => {
  for (var n in t || (t = {}))
    $p.call(t, n) && Qr(e, n, t[n]);
  if (Zr)
    for (var n of Zr(t))
      wp.call(t, n) && Qr(e, n, t[n]);
  return e;
}, kp = N({
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
    } = ye(e), l = (o) => {
      var r;
      const a = Jr(Jr({}, n.value.rgb), o), i = to(a.r, a.g, a.b);
      (r = e.onHsvChange) == null || r.call(e, i);
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
        onChange: (r = 0) => l({
          [o]: r
        })
      }, null)), !e.disabledAlpha && d(gs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), Cp = N({
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
    } = ye(e), [l, o] = Wn(n.value.hex), r = (s) => {
      var u;
      const c = fs(s) || {
        r: 255,
        g: 0,
        b: 0
      }, f = to(c.r, c.g, c.b);
      (u = e.onHsvChange) == null || u.call(e, f);
    }, a = (s) => {
      var u, c;
      const f = (c = (u = s.match(/[a-fA-F0-9]*/g)) == null ? void 0 : u.join("")) != null ? c : "";
      f !== n.value.hex && r(f.toUpperCase());
    }, i = (s) => {
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
      default: () => [d(Gt, {
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
      }), !e.disabledAlpha && d(gs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), Sp = N({
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
    } = Va(), n = ne("color-picker"), l = h(() => e.color.hsv), [o, r] = Wn(e.format || "hex"), a = (m) => {
      r(m);
    };
    P(!1);
    const i = (m) => {
      var b;
      const _ = fs(m) || {
        r: 255,
        g: 0,
        b: 0
      }, g = to(_.r, _.g, _.b);
      (b = e.onHsvChange) == null || b.call(e, g);
    }, s = () => {
      const m = {
        color: e.color,
        alpha: e.alpha,
        disabled: e.disabled,
        disabledAlpha: e.disabledAlpha,
        onHsvChange: e.onHsvChange,
        onAlphaChange: e.onAlphaChange
      };
      return o.value === "rgb" ? d(kp, m, null) : d(Cp, m, null);
    }, u = (m) => d("div", {
      key: m,
      class: `${n}-color-block`,
      style: {
        backgroundColor: m
      },
      onClick: () => i(m)
    }, [d("div", {
      class: `${n}-block`,
      style: {
        backgroundColor: m
      }
    }, null)]), c = (m, b) => d("div", {
      class: `${n}-colors-section`
    }, [d("div", {
      class: `${n}-colors-text`
    }, [m]), d("div", {
      class: `${n}-colors-wrapper`
    }, [b != null && b.length ? d("div", {
      class: `${n}-colors-list`
    }, [b.map(u)]) : d("span", {
      class: `${n}-colors-empty`
    }, [t("colorPicker.empty")])])]), f = () => e.showHistory || e.showPreset ? d("div", {
      class: `${n}-panel-colors`
    }, [e.showHistory && c(t("colorPicker.history"), e.historyColors), e.showPreset && c(t("colorPicker.preset"), e.presetColors)]) : null;
    return () => d("div", {
      class: {
        [`${n}-panel`]: !0,
        [`${n}-panel-disabled`]: e.disabled
      }
    }, [d(Qv, {
      color: e.color,
      onChange: (m, b) => {
        var _;
        return (_ = e.onHsvChange) == null ? void 0 : _.call(e, {
          h: l.value.h,
          s: m,
          v: b
        });
      }
    }, null), d("div", {
      class: `${n}-panel-control`
    }, [d("div", {
      class: `${n}-control-wrapper`
    }, [d("div", null, [d(Yr, {
      type: "hue",
      x: l.value.h,
      color: e.color,
      colorString: e.colorString,
      onChange: (m) => {
        var b;
        return (b = e.onHsvChange) == null ? void 0 : b.call(e, {
          h: m,
          s: l.value.s,
          v: l.value.v
        });
      }
    }, null), !e.disabledAlpha && d(Yr, {
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
    }, [d(eo, {
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
}), Ho = N({
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
      default: () => zv
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
    const l = ne("color-picker"), o = h(() => {
      var k;
      return (k = e.modelValue) != null ? k : e.defaultValue;
    }), r = h(() => Xv(o.value || "")), [a, i] = Wn(r.value.a), [s, u] = Wn({
      h: r.value.h,
      s: r.value.s,
      v: r.value.v
    });
    be(() => r.value, (k) => {
      o.value !== m.value && (i(k.a), u({
        h: k.h,
        s: k.s,
        v: k.v
      }));
    });
    const c = h(() => {
      const k = ds(s.value.h, s.value.s, s.value.v), S = Kr(k.r, k.g, k.b);
      return {
        hsv: s.value,
        rgb: k,
        hex: S
      };
    }), f = h(() => {
      const {
        r: k,
        g: S,
        b: $
      } = c.value.rgb;
      return `rgba(${k}, ${S}, ${$}, ${a.value.toFixed(2)})`;
    }), m = h(() => {
      const {
        r: k,
        g: S,
        b: $
      } = c.value.rgb;
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${k}, ${S}, ${$}, ${a.value.toFixed(2)})` : `rgb(${k}, ${S}, ${$})` : a.value < 1 && !e.disabledAlpha ? `#${Zv(k, S, $, a.value)}` : `#${Kr(k, S, $)}`;
    });
    be(m, (k) => {
      t("update:modelValue", k), t("change", k);
    });
    const b = (k) => {
      !e.disabled && u(k);
    }, _ = (k) => {
      !e.disabled && i(k);
    }, g = (k) => {
      t("popup-visible-change", k, m.value);
    }, T = () => d("div", {
      class: {
        [l]: !0,
        [`${l}-size-${e.size}`]: e.size,
        [`${l}-disabled`]: e.disabled
      }
    }, [d("div", {
      class: `${l}-preview`,
      style: {
        backgroundColor: m.value
      }
    }, null), e.showText && d("div", {
      class: `${l}-value`
    }, [m.value]), d("input", {
      class: `${l}-input`,
      value: m.value,
      disabled: e.disabled
    }, null)]), E = () => d(Sp, {
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
      onHsvChange: b,
      onAlphaChange: _
    }, null);
    return () => e.hideTrigger ? E() : d(Ml, Oe({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 4,
      disabled: e.disabled,
      onPopupVisibleChange: g
    }, e.triggerProps), {
      default: () => [n.default ? n.default() : T()],
      content: E
    });
  }
});
const La = Object.assign(Ho, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ho.name, Ho);
  }
}), ei = (e, t) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const n = t.split(".");
  if (n.length === 0)
    return;
  let l = e;
  for (let o = 0; o < n.length; o++) {
    if (!Ee(l) && !Ae(l) || !n[o])
      return;
    if (o !== n.length - 1)
      l = l[n[o]];
    else
      return l[n[o]];
  }
}, ti = (e, t, n, {
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
    if (!Ee(r) && !Ae(r) || !o[a])
      return;
    a !== o.length - 1 ? (l && qe(r[o[a]]) && (r[o[a]] = {}), r = r[o[a]]) : r[o[a]] = n;
  }
};
var Vp = Object.defineProperty, Op = Object.defineProperties, Ep = Object.getOwnPropertyDescriptors, ni = Object.getOwnPropertySymbols, xp = Object.prototype.hasOwnProperty, Bp = Object.prototype.propertyIsEnumerable, li = (e, t, n) => t in e ? Vp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ip = (e, t) => {
  for (var n in t || (t = {}))
    xp.call(t, n) && li(e, n, t[n]);
  if (ni)
    for (var n of ni(t))
      Bp.call(t, n) && li(e, n, t[n]);
  return e;
}, Pp = (e, t) => Op(e, Ep(t));
const Dl = ["xxl", "xl", "lg", "md", "sm", "xs"], fl = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Xt = [], jp = -1, vl = {};
const oi = {
  matchHandlers: {},
  dispatch(e, t) {
    return vl = e, Xt.length < 1 ? !1 : (Xt.forEach((n) => {
      n.func(vl, t);
    }), !0);
  },
  subscribe(e) {
    Xt.length === 0 && this.register();
    const t = (++jp).toString();
    return Xt.push({
      token: t,
      func: e
    }), e(vl, null), t;
  },
  unsubscribe(e) {
    Xt = Xt.filter((t) => t.token !== e), Xt.length === 0 && this.unregister();
  },
  unregister() {
    Object.keys(fl).forEach((e) => {
      const t = fl[e];
      if (!t)
        return;
      const n = this.matchHandlers[t];
      n && n.mql && n.listener && (n.mql.removeEventListener ? n.mql.removeEventListener("change", n.listener) : n.mql.removeListener(n.listener));
    });
  },
  register() {
    Object.keys(fl).forEach((e) => {
      const t = fl[e];
      if (!t)
        return;
      const n = ({
        matches: o
      }) => {
        this.dispatch(Pp(Ip({}, vl), {
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
function ai(e) {
  return Ee(e);
}
function ma(e, t, n = !1) {
  const l = P({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), o = h(() => {
    let a = t;
    if (ai(e.value))
      for (let i = 0; i < Dl.length; i++) {
        const s = Dl[i];
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
  return xe(() => {
    r = oi.subscribe((a) => {
      ai(e.value) && (l.value = a);
    });
  }), Gl(() => {
    r && oi.unsubscribe(r);
  }), o;
}
function bs(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Tp(e, t) {
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
function Mp(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : bs(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Dp(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (bs(t) && typeof t.behavior == "function")
    return t.behavior(n ? cr(e, t) : []);
  if (n) {
    var l = Mp(t);
    return Tp(cr(e, l), l.behavior);
  }
}
const ri = ["success", "warning", "error", "validating"], zp = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || ri.indexOf(l) > ri.indexOf(t)) && (t = e[n]);
  }
  return t;
}, Ap = (e) => {
  const t = [];
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && t.push(l);
  }
  return t;
}, ys = (e, t) => {
  const n = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${n}` : `${n}`;
};
var Lp = Object.defineProperty, ii = Object.getOwnPropertySymbols, Fp = Object.prototype.hasOwnProperty, Np = Object.prototype.propertyIsEnumerable, si = (e, t, n) => t in e ? Lp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Rp = (e, t) => {
  for (var n in t || (t = {}))
    Fp.call(t, n) && si(e, n, t[n]);
  if (ii)
    for (var n of ii(t))
      Np.call(t, n) && si(e, n, t[n]);
  return e;
};
const qp = N({
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
    const n = ne("form"), l = P(), {
      id: o,
      model: r,
      layout: a,
      disabled: i,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: c,
      labelColStyle: f,
      wrapperColStyle: m,
      size: b,
      rules: _
    } = ye(e), {
      mergedSize: g
    } = _t(b), T = h(() => e.layout === "horizontal" && e.autoLabelWidth), E = [], k = [], S = Pe({}), $ = h(() => Math.max(...Object.values(S))), I = (L) => {
      L && L.field && E.push(L);
    }, w = (L) => {
      L && L.field && E.splice(E.indexOf(L), 1);
    }, V = (L) => {
      E.forEach((Q) => {
        L[Q.field] && Q.setField(L[Q.field]);
      });
    }, R = (L, Q) => {
      Q && S[Q] !== L && (S[Q] = L);
    }, K = (L) => {
      L && delete S[L];
    }, q = (L) => {
      const Q = L ? [].concat(L) : [];
      E.forEach((j) => {
        (Q.length === 0 || Q.includes(j.field)) && j.resetField();
      });
    }, p = (L) => {
      const Q = L ? [].concat(L) : [];
      E.forEach((j) => {
        (Q.length === 0 || Q.includes(j.field)) && j.clearValidate();
      });
    }, B = (L, Q) => {
      const C = (l.value || document.body).querySelector(`#${ys(e.id, L)}`);
      C && Dp(C, Rp({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, Q));
    }, x = (L) => {
      const Q = Xl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      B(L, Q);
    }, z = (L) => {
      const Q = [];
      return E.forEach((j) => {
        Q.push(j.validate());
      }), Promise.all(Q).then((j) => {
        const C = {};
        let H = !1;
        return j.forEach((J) => {
          J && (H = !0, C[J.field] = J);
        }), H && e.scrollToFirstError && x(Object.keys(C)[0]), et(L) && L(H ? C : void 0), H ? C : void 0;
      });
    }, A = (L, Q) => {
      const j = [];
      for (const C of E)
        (Ae(L) && L.includes(C.field) || L === C.field) && j.push(C.validate());
      return Promise.all(j).then((C) => {
        const H = {};
        let J = !1;
        return C.forEach((he) => {
          he && (J = !0, H[he.field] = he);
        }), J && e.scrollToFirstError && x(Object.keys(H)[0]), et(Q) && Q(J ? H : void 0), J ? H : void 0;
      });
    }, U = (L) => {
      const Q = [];
      E.forEach((j) => {
        Q.push(j.validate());
      }), Promise.all(Q).then((j) => {
        const C = {};
        let H = !1;
        j.forEach((J) => {
          J && (H = !0, C[J.field] = J);
        }), H ? (e.scrollToFirstError && x(Object.keys(C)[0]), t("submitFailed", {
          values: r.value,
          errors: C
        }, L)) : t("submitSuccess", r.value, L), t("submit", {
          values: r.value,
          errors: H ? C : void 0
        }, L);
      });
    };
    return jt(Ta, Pe({
      id: o,
      layout: a,
      disabled: i,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: c,
      labelColStyle: f,
      wrapperColStyle: m,
      model: r,
      size: g,
      rules: _,
      fields: E,
      touchedFields: k,
      addField: I,
      removeField: w,
      validateField: A,
      setLabelWidth: R,
      removeLabelWidth: K,
      maxLabelWidth: $,
      autoLabelWidth: T
    })), {
      cls: h(() => [n, `${n}-layout-${e.layout}`, `${n}-size-${g.value}`, {
        [`${n}-auto-label-width`]: e.autoLabelWidth
      }]),
      formRef: l,
      handleSubmit: U,
      innerValidate: z,
      innerValidateField: A,
      innerResetFields: q,
      innerClearValidate: p,
      innerSetFields: V,
      innerScrollToField: B
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
function Hp(e, t, n, l, o, r) {
  return y(), O("form", {
    ref: "formRef",
    class: G(e.cls),
    onSubmit: t[0] || (t[0] = an((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [se(e.$slots, "default")], 34);
}
var Wo = /* @__PURE__ */ fe(qp, [["render", Hp]]), Vn = Object.prototype.toString;
function lo(e) {
  return Vn.call(e) === "[object Array]";
}
function xt(e) {
  return Vn.call(e) === "[object Object]";
}
function ga(e) {
  return Vn.call(e) === "[object String]";
}
function Wp(e) {
  return Vn.call(e) === "[object Number]" && e === e;
}
function Up(e) {
  return Vn.call(e) === "[object Boolean]";
}
function ba(e) {
  return Vn.call(e) === "[object Function]";
}
function Kp(e) {
  return xt(e) && Object.keys(e).length === 0;
}
function Jt(e) {
  return e == null || e === "";
}
function _s(e) {
  return lo(e) && !e.length;
}
var Fa = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (ba(e) && ba(t))
    return e === t || e.toString() === t.toString();
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var n in e) {
    var l = Fa(e[n], t[n]);
    if (!l)
      return !1;
  }
  return !0;
}, Na = function(e, t) {
  var n = Object.assign({}, e);
  return Object.keys(t || {}).forEach(function(l) {
    var o = n[l], r = t == null ? void 0 : t[l];
    n[l] = xt(o) ? Object.assign(Object.assign({}, o), r) : r || o;
  }), n;
}, Yp = function(e, t) {
  for (var n = t.split("."), l = e, o = 0; o < n.length; o++)
    if (l = l && l[n[o]], l === void 0)
      return l;
  return l;
}, At = "#{field} is not a #{type} type", Gp = {
  required: "#{field} is required",
  type: {
    ip: At,
    email: At,
    url: At,
    string: At,
    number: At,
    array: At,
    object: At,
    boolean: At
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
}, $t = function(t, n) {
  var l = this;
  this.getValidateMsg = function(o, r) {
    r === void 0 && (r = {});
    var a = Object.assign(Object.assign({}, r), {
      value: l.obj,
      field: l.field,
      type: l.type
    }), i = Yp(l.validateMessages, o);
    return ba(i) ? i(a) : ga(i) ? i.replace(/\#\{.+?\}/g, function(s) {
      var u = s.slice(2, -1);
      if (u in a) {
        if (xt(a[u]) || lo(a[u]))
          try {
            return JSON.stringify(a[u]);
          } catch {
            return a[u];
          }
        return String(a[u]);
      }
      return s;
    }) : i;
  }, xt(n) && ga(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = Na(Gp, n.validateMessages);
}, oo = {
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
oo.not.get = function() {
  return this._not = !this._not, this;
};
oo.isRequired.get = function() {
  if (Jt(this.obj) || _s(this.obj)) {
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
oo.end.get = function() {
  return this.error;
};
$t.prototype.addError = function(t) {
  !this.error && t && (this.error = {
    value: this.obj,
    type: this.type,
    message: this.message || (xt(t) ? t : (this._not ? "[NOT MODE]:" : "") + t)
  });
};
$t.prototype.validate = function(t, n) {
  var l = this._not ? t : !t;
  return l && this.addError(n), this;
};
$t.prototype.collect = function(t) {
  t && t(this.error);
};
Object.defineProperties($t.prototype, oo);
var Xp = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "string"
    })), this.validate(o && o.strict ? ga(this.obj) : !0, this.getValidateMsg("type.string"));
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
}($t), Zp = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "number"
    })), this.validate(o && o.strict ? Wp(this.obj) : !0, this.getValidateMsg("type.number"));
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
    return Jt(this.obj) ? this : this.validate(this.obj >= o, this.getValidateMsg("number.min", {
      min: o
    }));
  }, t.prototype.max = function(o) {
    return Jt(this.obj) ? this : this.validate(this.obj <= o, this.getValidateMsg("number.max", {
      max: o
    }));
  }, t.prototype.equal = function(o) {
    return Jt(this.obj) ? this : this.validate(this.obj === o, this.getValidateMsg("number.equal", {
      equal: o
    }));
  }, t.prototype.range = function(o, r) {
    return Jt(this.obj) ? this : this.validate(this.obj >= o && this.obj <= r, this.getValidateMsg("number.range", {
      min: o,
      max: r
    }));
  }, n.positive.get = function() {
    return Jt(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  }, n.negative.get = function() {
    return Jt(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  }, Object.defineProperties(t.prototype, n), t;
}($t), Qp = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "array"
    })), this.validate(o && o.strict ? lo(this.obj) : !0, this.getValidateMsg("type.array", {
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
    return this.obj ? this.validate(Fa(this.obj, o), this.getValidateMsg("array.deepEqual", {
      value: this.obj,
      deepEqual: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(_s(this.obj), this.getValidateMsg("array.empty", {
      value: this.obj
    }));
  }, Object.defineProperties(t.prototype, n), t;
}($t), Jp = /* @__PURE__ */ function(e) {
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
    return this.obj ? this.validate(Fa(this.obj, o), this.getValidateMsg("object.deepEqual", {
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
    return this.validate(Kp(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(t.prototype, n), t;
}($t), eh = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "boolean"
    })), this.validate(o && o.strict ? Up(this.obj) : !0, this.getValidateMsg("type.boolean"));
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
}($t), th = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, nh = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), lh = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, oh = /* @__PURE__ */ function(e) {
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
    return this.type = "email", this.validate(this.obj === void 0 || th.test(this.obj), this.getValidateMsg("type.email"));
  }, n.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || nh.test(this.obj), this.getValidateMsg("type.url"));
  }, n.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || lh.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, n), t;
}($t), ah = /* @__PURE__ */ function(e) {
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
}($t), zl = function(e, t) {
  return new $s(e, Object.assign({
    field: "value"
  }, t));
};
zl.globalConfig = {};
zl.setGlobalConfig = function(e) {
  zl.globalConfig = e || {};
};
var $s = function(t, n) {
  var l = zl.globalConfig, o = Object.assign(Object.assign(Object.assign({}, l), n), {
    validateMessages: Na(l.validateMessages, n.validateMessages)
  });
  this.string = new Xp(t, o), this.number = new Zp(t, o), this.array = new Qp(t, o), this.object = new Jp(t, o), this.boolean = new eh(t, o), this.type = new oh(t, o), this.custom = new ah(t, o);
}, Ra = function(t, n) {
  n === void 0 && (n = {}), this.schema = t, this.options = n;
};
Ra.prototype.messages = function(t) {
  this.options = Object.assign(Object.assign({}, this.options), {
    validateMessages: Na(this.options.validateMessages, t)
  });
};
Ra.prototype.validate = function(t, n) {
  var l = this;
  if (!xt(t))
    return;
  var o = [], r = null;
  function a(i, s) {
    r || (r = {}), (!r[i] || s.requiredError) && (r[i] = s);
  }
  this.schema && Object.keys(this.schema).forEach(function(i) {
    if (lo(l.schema[i]))
      for (var s = function(f) {
        var m = l.schema[i][f], b = m.type, _ = m.message;
        if (!b && !m.validator)
          throw "You must specify a type to field " + i + "!";
        var g = Object.assign(Object.assign({}, l.options), {
          message: _,
          field: i
        });
        "ignoreEmptyString" in m && (g.ignoreEmptyString = m.ignoreEmptyString), "strict" in m && (g.strict = m.strict);
        var T = new $s(t[i], g), E = T.type[b] || null;
        if (!E)
          if (m.validator) {
            E = T.custom.validate(m.validator), Object.prototype.toString.call(E) === "[object Array]" && E[0].then ? o.push({
              function: E[0],
              _this: E[1],
              key: i
            }) : E && a(i, E);
            return;
          } else
            E = T[b];
        if (Object.keys(m).forEach(function(k) {
          m.required && (E = E.isRequired), k !== "message" && E[k] && m[k] && typeof E[k] == "object" && (E = E[k]), E[k] && m[k] !== void 0 && typeof E[k] == "function" && (E = E[k](m[k]));
        }), E.collect(function(k) {
          k && a(i, k);
        }), r)
          return "break";
      }, u = 0; u < l.schema[i].length; u++) {
        var c = s(u);
        if (c === "break")
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
const ws = Symbol("RowContextInjectionKey"), rh = N({
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
    } = ye(e), a = ne("row"), i = h(() => ({
      [`${a}`]: !o.value,
      [`${a}-nowrap`]: !r.value,
      [`${a}-align-${n.value}`]: n.value,
      [`${a}-justify-${l.value}`]: l.value
    })), s = h(() => Array.isArray(t.value) ? t.value[0] : t.value), u = h(() => Array.isArray(t.value) ? t.value[1] : 0), c = ma(s, 0), f = ma(u, 0), m = h(() => {
      const _ = {};
      if ((c.value || f.value) && !o.value) {
        const g = -c.value / 2, T = -f.value / 2;
        g && (_.marginLeft = `${g}px`, _.marginRight = `${g}px`), T && (_.marginTop = `${T}px`, _.marginBottom = `${T}px`);
      }
      return _;
    }), b = h(() => [c.value, f.value]);
    return jt(ws, Pe({
      gutter: b,
      div: o
    })), {
      classNames: i,
      styles: m
    };
  }
});
function ih(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(e.classNames),
    style: pe(e.styles)
  }, [se(e.$slots, "default")], 6);
}
var sh = /* @__PURE__ */ fe(rh, [["render", ih]]);
function uh(e) {
  return h(() => {
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
    const c = {};
    return Dl.forEach((f) => {
      const m = e.value[f];
      ge(m) ? c[f] = m : Ee(m) && ge(m[l]) && (c[f] = m[l]);
    }), c;
  });
}
var ch = Object.defineProperty, ui = Object.getOwnPropertySymbols, dh = Object.prototype.hasOwnProperty, fh = Object.prototype.propertyIsEnumerable, ci = (e, t, n) => t in e ? ch(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Uo = (e, t) => {
  for (var n in t || (t = {}))
    dh.call(t, n) && ci(e, n, t[n]);
  if (ui)
    for (var n of ui(t))
      fh.call(t, n) && ci(e, n, t[n]);
  return e;
};
function vh(e) {
  if (yt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || ge(e))
    return e;
  if (yt(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const ph = N({
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
    const t = ne("col"), n = Xe(ws, {}), l = h(() => vh(e.flex)), o = h(() => {
      const {
        div: f
      } = n, {
        span: m,
        offset: b,
        order: _,
        xs: g,
        sm: T,
        md: E,
        lg: k,
        xl: S,
        xxl: $
      } = e, I = {
        [`${t}`]: !f,
        [`${t}-order-${_}`]: _,
        [`${t}-${m}`]: !f && !g && !T && !E && !k && !S && !$,
        [`${t}-offset-${b}`]: b && b > 0
      }, w = {
        xs: g,
        sm: T,
        md: E,
        lg: k,
        xl: S,
        xxl: $
      };
      return Object.keys(w).forEach((V) => {
        const R = w[V];
        R && ge(R) ? I[`${t}-${V}-${R}`] = !0 : R && Ee(R) && (I[`${t}-${V}-${R.span}`] = R.span, I[`${t}-${V}-offset-${R.offset}`] = R.offset, I[`${t}-${V}-order-${R.order}`] = R.order);
      }), I;
    }), r = h(() => l.value ? t : o.value), a = h(() => {
      const {
        gutter: f,
        div: m
      } = n, b = {};
      if (Array.isArray(f) && !m) {
        const _ = f[0] && f[0] / 2 || 0, g = f[1] && f[1] / 2 || 0;
        _ && (b.paddingLeft = `${_}px`, b.paddingRight = `${_}px`), g && (b.paddingTop = `${g}px`, b.paddingBottom = `${g}px`);
      }
      return b;
    }), i = h(() => l.value ? {
      flex: l.value
    } : {}), s = h(() => Qn(e, Dl)), u = uh(h(() => Uo({
      val: e.span,
      key: "span"
    }, s.value))), c = ma(u, 24, !0);
    return {
      visible: h(() => !!c.value),
      classNames: r,
      styles: h(() => Uo(Uo({}, a.value), i.value))
    };
  }
});
function hh(e, t, n, l, o, r) {
  return e.visible ? (y(), O("div", {
    key: 0,
    class: G(e.classNames),
    style: pe(e.styles)
  }, [se(e.$slots, "default")], 6)) : te("v-if", !0);
}
var mh = /* @__PURE__ */ fe(ph, [["render", hh]]), gh = Object.defineProperty, di = Object.getOwnPropertySymbols, bh = Object.prototype.hasOwnProperty, yh = Object.prototype.propertyIsEnumerable, fi = (e, t, n) => t in e ? gh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, vi = (e, t) => {
  for (var n in t || (t = {}))
    bh.call(t, n) && fi(e, n, t[n]);
  if (di)
    for (var n of di(t))
      yh.call(t, n) && fi(e, n, t[n]);
  return e;
};
const _h = N({
  name: "Tooltip",
  components: {
    Trigger: Ml
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
    const n = ne("tooltip"), l = P(e.defaultPopupVisible), o = h(() => {
      var c;
      return (c = e.popupVisible) != null ? c : l.value;
    }), r = (c) => {
      l.value = c, t("update:popupVisible", c), t("popupVisibleChange", c);
    }, a = h(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = h(() => {
      if (e.backgroundColor || e.contentStyle)
        return vi({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = h(() => [`${n}-popup-arrow`, e.arrowClass]), u = h(() => {
      if (e.backgroundColor || e.arrowStyle)
        return vi({
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
function $h(e, t, n, l, o, r) {
  const a = ue("Trigger");
  return y(), re(a, {
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
    content: le(() => [se(e.$slots, "content", {}, () => [Ce(ie(e.content), 1)])]),
    default: le(() => [se(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Ko = /* @__PURE__ */ fe(_h, [["render", $h]]);
const Jn = Object.assign(Ko, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ko.name, Ko);
  }
}), wh = N({
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
    const n = ne("icon"), l = h(() => [n, `${n}-question-circle`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), kh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ch = /* @__PURE__ */ v("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1), Sh = /* @__PURE__ */ v("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1), Vh = [Ch, Sh];
function Oh(e, t, n, l, o, r) {
  return y(), O("svg", {
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
  }, Vh, 14, kh);
}
var Yo = /* @__PURE__ */ fe(wh, [["render", Oh]]);
const Eh = Object.assign(Yo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Yo.name, Yo);
  }
}), xh = N({
  name: "FormItemLabel",
  components: {
    ResizeObserver: Tl,
    Tooltip: Jn,
    IconQuestionCircle: Eh
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
    const e = ne("form-item-label"), t = Xe(Ta, void 0), n = Yn(), l = P(), o = () => {
      l.value && ge(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    };
    return xe(() => {
      l.value && ge(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    }), Ut(() => {
      t == null || t.removeLabelWidth(n == null ? void 0 : n.uid);
    }), {
      prefixCls: e,
      labelRef: l,
      handleResize: o
    };
  }
}), Bh = /* @__PURE__ */ v("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ v("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), Ih = [Bh], Ph = /* @__PURE__ */ v("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ v("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), jh = [Ph];
function Th(e, t, n, l, o, r) {
  const a = ue("icon-question-circle"), i = ue("Tooltip"), s = ue("ResizeObserver");
  return y(), re(s, {
    onResize: e.handleResize
  }, {
    default: le(() => [(y(), re(nn(e.component), Oe({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: le(() => [e.required && e.asteriskPosition === "start" ? (y(), O("strong", {
        key: 0,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Ih, 2)) : te("v-if", !0), se(e.$slots, "default"), e.tooltip ? (y(), re(i, {
        key: 1,
        content: e.tooltip
      }, {
        default: le(() => [d(a, {
          class: G(`${e.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : te("v-if", !0), e.required && e.asteriskPosition === "end" ? (y(), O("strong", {
        key: 2,
        class: G(`${e.prefixCls}-required-symbol`)
      }, jh, 2)) : te("v-if", !0), Ce(" " + ie(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var Mh = /* @__PURE__ */ fe(xh, [["render", Th]]);
const Dh = N({
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
function zh(e, t, n, l, o, r) {
  return e.error.length > 0 ? (y(!0), O(we, {
    key: 0
  }, Ge(e.error, (a) => (y(), re(Bl, {
    key: a,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [v("div", {
      role: "alert",
      class: G([e.prefixCls])
    }, ie(a), 3)]),
    _: 2
  }, 1024))), 128)) : e.help || e.$slots.help ? (y(), re(Bl, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [v("div", {
      class: G([e.prefixCls, `${e.prefixCls}-help`])
    }, [se(e.$slots, "help", {}, () => [Ce(ie(e.help), 1)])], 2)]),
    _: 3
  })) : te("v-if", !0);
}
var Ah = /* @__PURE__ */ fe(Dh, [["render", zh]]), Lh = Object.defineProperty, Al = Object.getOwnPropertySymbols, ks = Object.prototype.hasOwnProperty, Cs = Object.prototype.propertyIsEnumerable, pi = (e, t, n) => t in e ? Lh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, hi = (e, t) => {
  for (var n in t || (t = {}))
    ks.call(t, n) && pi(e, n, t[n]);
  if (Al)
    for (var n of Al(t))
      Cs.call(t, n) && pi(e, n, t[n]);
  return e;
}, Fh = (e, t) => {
  var n = {};
  for (var l in e)
    ks.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Al)
    for (var l of Al(e))
      t.indexOf(l) < 0 && Cs.call(e, l) && (n[l] = e[l]);
  return n;
};
const Nh = N({
  name: "FormItem",
  components: {
    ArcoRow: sh,
    ArcoCol: mh,
    FormItemLabel: Mh,
    FormItemMessage: Ah
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
    } = ye(e), l = Xe(Ta, {}), {
      autoLabelWidth: o,
      layout: r
    } = ye(l), {
      i18nMessage: a
    } = Va(), i = h(() => {
      var j;
      const C = hi({}, (j = e.labelColProps) != null ? j : l.labelColProps);
      return e.labelColFlex ? C.flex = e.labelColFlex : l.autoLabelWidth && (C.flex = `${l.maxLabelWidth}px`), C;
    }), s = h(() => {
      var j;
      const C = hi({}, (j = e.wrapperColProps) != null ? j : l.wrapperColProps);
      return n.value && (C.id = ys(l.id, n.value)), (e.labelColFlex || l.autoLabelWidth) && (C.flex = "auto"), C;
    }), u = h(() => {
      var j;
      return (j = e.labelColStyle) != null ? j : l.labelColStyle;
    }), c = h(() => {
      var j;
      return (j = e.wrapperColStyle) != null ? j : l.wrapperColStyle;
    }), f = ei(l.model, e.field), m = Pe({}), b = Pe({}), _ = h(() => zp(m)), g = h(() => Ap(b)), T = P(!1), E = h(() => ei(l.model, e.field)), k = h(() => {
      var j;
      return Boolean((j = e.disabled) != null ? j : l == null ? void 0 : l.disabled);
    }), S = h(() => {
      var j;
      return (j = e.validateStatus) != null ? j : _.value;
    }), $ = h(() => S.value === "error"), I = h(() => {
      var j, C, H;
      const J = [].concat((H = (C = e.rules) != null ? C : (j = l == null ? void 0 : l.rules) == null ? void 0 : j[e.field]) != null ? H : []), he = J.some((_e) => _e.required);
      return e.required && !he ? [{
        required: !0
      }].concat(J) : J;
    }), w = h(() => I.value.some((j) => j.required)), V = e.noStyle ? Xe(fa, void 0) : void 0, R = (j, {
      status: C,
      message: H
    }) => {
      m[j] = C, b[j] = H, e.noStyle && (V == null || V.updateValidateState(j, {
        status: C,
        message: H
      }));
    }, K = h(() => e.feedback && S.value ? S.value : void 0), q = () => {
      var j;
      if (T.value)
        return Promise.resolve();
      const C = I.value;
      if (!n.value || C.length === 0)
        return _.value && x(), Promise.resolve();
      const H = n.value, J = E.value;
      R(H, {
        status: "",
        message: ""
      });
      const he = new Ra({
        [H]: C.map((_e) => {
          var ce = Fh(_e, []);
          return !ce.type && !ce.validator && (ce.type = "string"), ce;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (j = a.value.form) == null ? void 0 : j.validateMessages
      });
      return new Promise((_e) => {
        he.validate({
          [H]: J
        }, (ce) => {
          var Be;
          const Ve = Boolean(ce == null ? void 0 : ce[H]);
          R(H, {
            status: Ve ? "error" : "",
            message: (Be = ce == null ? void 0 : ce[H].message) != null ? Be : ""
          });
          const je = Ve ? {
            label: e.label,
            field: n.value,
            value: ce[H].value,
            type: ce[H].type,
            isRequiredError: Boolean(ce[H].requiredError),
            message: ce[H].message
          } : void 0;
          _e(je);
        });
      });
    }, p = h(() => [].concat(e.validateTrigger)), B = h(() => p.value.reduce((j, C) => {
      switch (C) {
        case "change":
          return j.onChange = () => {
            q();
          }, j;
        case "input":
          return j.onInput = () => {
            Le(() => {
              q();
            });
          }, j;
        case "focus":
          return j.onFocus = () => {
            q();
          }, j;
        case "blur":
          return j.onBlur = () => {
            q();
          }, j;
        default:
          return j;
      }
    }, {}));
    jt(fa, Pe({
      eventHandlers: B,
      size: l && Hn(l, "size"),
      disabled: k,
      error: $,
      feedback: K,
      updateValidateState: R
    }));
    const x = () => {
      n.value && R(n.value, {
        status: "",
        message: ""
      });
    }, U = Pe({
      field: n,
      disabled: k,
      error: $,
      validate: q,
      clearValidate: x,
      resetField: () => {
        x(), T.value = !0, l != null && l.model && n.value && ti(l.model, n.value, f), Le(() => {
          T.value = !1;
        });
      },
      setField: (j) => {
        var C, H;
        n.value && (T.value = !0, "value" in j && (l != null && l.model) && n.value && ti(l.model, n.value, j.value), (j.status || j.message) && R(n.value, {
          status: (C = j.status) != null ? C : "",
          message: (H = j.message) != null ? H : ""
        }), Le(() => {
          T.value = !1;
        }));
      }
    });
    xe(() => {
      var j;
      U.field && ((j = l.addField) == null || j.call(l, U));
    }), Ut(() => {
      var j;
      U.field && ((j = l.removeField) == null || j.call(l, U));
    });
    const X = h(() => [t, `${t}-layout-${l.layout}`, {
      [`${t}-error`]: $.value,
      [`${t}-status-${S.value}`]: Boolean(S.value)
    }, e.rowClass]), L = h(() => [`${t}-label-col`, {
      [`${t}-label-col-left`]: l.labelAlign === "left",
      [`${t}-label-col-flex`]: l.autoLabelWidth || e.labelColFlex
    }]), Q = h(() => [`${t}-wrapper-col`, {
      [`${t}-wrapper-col-flex`]: !s.value
    }]);
    return {
      prefixCls: t,
      cls: X,
      isRequired: w,
      isError: $,
      finalMessage: g,
      mergedLabelCol: i,
      mergedWrapperCol: s,
      labelColCls: L,
      autoLabelWidth: o,
      layout: r,
      mergedLabelStyle: u,
      wrapperColCls: Q,
      mergedWrapperStyle: c
    };
  }
});
function Rh(e, t, n, l, o, r) {
  var a;
  const i = ue("FormItemLabel"), s = ue("ArcoCol"), u = ue("FormItemMessage"), c = ue("ArcoRow");
  return e.noStyle ? se(e.$slots, "default", {
    key: 0
  }) : (y(), re(c, Oe({
    key: 1,
    class: [e.cls, {
      [`${e.prefixCls}-has-help`]: Boolean((a = e.$slots.help) != null ? a : e.help)
    }],
    wrap: !(e.labelColFlex || e.autoLabelWidth),
    div: e.layout !== "horizontal" || e.hideLabel
  }, e.rowProps), {
    default: le(() => [e.hideLabel ? te("v-if", !0) : (y(), re(s, Oe({
      key: 0,
      class: e.labelColCls,
      style: e.mergedLabelStyle
    }, e.mergedLabelCol), {
      default: le(() => [d(i, {
        required: e.hideAsterisk ? !1 : e.isRequired,
        "show-colon": e.showColon,
        "asterisk-position": e.asteriskPosition,
        component: e.labelComponent,
        attrs: e.labelAttrs,
        tooltip: e.tooltip
      }, {
        default: le(() => [e.$slots.label || e.label ? se(e.$slots, "label", {
          key: 0
        }, () => [Ce(ie(e.label), 1)]) : te("v-if", !0)]),
        _: 3
      }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]),
      _: 3
    }, 16, ["class", "style"])), d(s, Oe({
      class: e.wrapperColCls,
      style: e.mergedWrapperStyle
    }, e.mergedWrapperCol), {
      default: le(() => [v("div", {
        class: G(`${e.prefixCls}-content-wrapper`)
      }, [v("div", {
        class: G([`${e.prefixCls}-content`, {
          [`${e.prefixCls}-content-flex`]: e.contentFlex
        }, e.contentClass])
      }, [se(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (y(), re(u, {
        key: 0,
        error: e.finalMessage,
        help: e.help
      }, Ti({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: le(() => [se(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : te("v-if", !0), e.$slots.extra || e.extra ? (y(), O("div", {
        key: 1,
        class: G(`${e.prefixCls}-extra`)
      }, [se(e.$slots, "extra", {}, () => [Ce(ie(e.extra), 1)])], 2)) : te("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var on = /* @__PURE__ */ fe(Nh, [["render", Rh]]);
const Ss = Object.assign(Wo, {
  Item: on,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Wo.name, Wo), e.component(n + on.name, on);
  }
}), qh = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Hh = (e) => {
  const t = {};
  return qh.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, Wh = N({
  name: "Textarea",
  components: {
    ResizeObserver: jl,
    IconHover: ct,
    IconClose: cn
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
    } = ye(e), a = ne("textarea"), {
      mergedDisabled: i,
      mergedError: s,
      eventHandlers: u
    } = dt({
      disabled: l,
      error: o
    }), c = P(), f = P(), m = P(), b = P(), _ = P(e.defaultValue), g = h(() => {
      var F;
      return (F = r.value) != null ? F : _.value;
    }), [T, E] = Ji(c);
    be(r, (F) => {
      (qe(F) || Kt(F)) && (_.value = "");
    });
    const k = h(() => Ee(e.maxLength) && Boolean(e.maxLength.errorOnly)), S = h(() => Ee(e.maxLength) ? e.maxLength.length : e.maxLength), $ = (F) => {
      var D;
      return et(e.wordLength) ? e.wordLength(F) : (D = F.length) != null ? D : 0;
    }, I = h(() => $(g.value)), w = h(() => s.value || Boolean(S.value && k.value && I.value > S.value)), V = P(!1), R = P(!1), K = h(() => e.allowClear && !i.value && g.value), q = P(!1), p = P(""), B = () => {
      T(), Le(() => {
        c.value && g.value !== c.value.value && (c.value.value = g.value, E());
      });
    }, x = (F, D = !0) => {
      var Z, oe;
      S.value && !k.value && $(F) > S.value && (F = (oe = (Z = e.wordSlice) == null ? void 0 : Z.call(e, F, S.value)) != null ? oe : F.slice(0, S.value)), _.value = F, D && t("update:modelValue", F), B();
    };
    let z = g.value;
    const A = (F, D) => {
      var Z, oe;
      F !== z && (z = F, t("change", F, D), (oe = (Z = u.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, D));
    }, U = (F) => {
      var D, Z;
      R.value = !0, z = g.value, t("focus", F), (Z = (D = u.value) == null ? void 0 : D.onFocus) == null || Z.call(D, F);
    }, X = (F) => {
      var D, Z;
      R.value = !1, t("blur", F), (Z = (D = u.value) == null ? void 0 : D.onBlur) == null || Z.call(D, F), A(g.value, F);
    }, L = (F) => {
      var D, Z;
      const {
        value: oe
      } = F.target;
      if (F.type === "compositionend") {
        if (q.value = !1, p.value = "", S.value && !k.value && g.value.length >= S.value && $(oe) > S.value) {
          B();
          return;
        }
        t("input", oe, F), x(oe), (Z = (D = u.value) == null ? void 0 : D.onInput) == null || Z.call(D, F);
      } else
        q.value = !0;
    }, Q = (F) => {
      var D, Z;
      const {
        value: oe
      } = F.target;
      if (q.value)
        p.value = oe;
      else {
        if (S.value && !k.value && g.value.length >= S.value && $(oe) > S.value && F.inputType === "insertText") {
          B();
          return;
        }
        t("input", oe, F), x(oe), (Z = (D = u.value) == null ? void 0 : D.onInput) == null || Z.call(D, F);
      }
    }, j = (F) => {
      x(""), A("", F), t("clear", F);
    };
    be(r, (F) => {
      F !== g.value && x(F ?? "", !1);
    });
    const C = (F) => Zn(n, Ht), H = (F) => Qn(n, Ht), J = h(() => [`${a}-wrapper`, {
      [`${a}-focus`]: R.value,
      [`${a}-disabled`]: i.value,
      [`${a}-error`]: w.value,
      [`${a}-scroll`]: V.value
    }]);
    let he;
    const _e = P(0), ce = P(0), Be = h(() => !Ee(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * _e.value + ce.value), Ve = h(() => !Ee(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * _e.value + ce.value), je = () => {
      const F = Hh(he);
      _e.value = Number.parseInt(F["line-height"] || 0, 10), ce.value = Number.parseInt(F["border-width"] || 0, 10) * 2 + Number.parseInt(F["padding-top"] || 0, 10) + Number.parseInt(F["padding-bottom"] || 0, 10), b.value = F, Le(() => {
        var D;
        const Z = (D = m.value) == null ? void 0 : D.offsetHeight;
        let oe = Z ?? 0, Me = "hidden";
        Be.value && oe < Be.value && (oe = Be.value), Ve.value && oe > Ve.value && (oe = Ve.value, Me = "auto"), f.value = {
          height: `${oe}px`,
          resize: "none",
          overflow: Me
        };
      });
    };
    xe(() => {
      c.value && (he = window.getComputedStyle(c.value), e.autoSize && je()), it();
    });
    const pt = () => {
      e.autoSize && m.value && je(), it();
    }, nt = (F) => {
      c.value && F.target !== c.value && (F.preventDefault(), c.value.focus());
    }, it = () => {
      c.value && (c.value.scrollHeight > c.value.offsetHeight ? V.value || (V.value = !0) : V.value && (V.value = !1));
    };
    return be(g, () => {
      e.autoSize && m.value && je(), it();
    }), {
      prefixCls: a,
      wrapperCls: J,
      textareaRef: c,
      textareaStyle: f,
      mirrorRef: m,
      mirrorStyle: b,
      computedValue: g,
      showClearBtn: K,
      valueLength: I,
      computedMaxLength: S,
      mergedDisabled: i,
      getWrapperAttrs: C,
      getTextareaAttrs: H,
      handleInput: Q,
      handleFocus: U,
      handleBlur: X,
      handleComposition: L,
      handleClear: j,
      handleResize: pt,
      handleMousedown: nt
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
}), Uh = ["disabled", "value", "placeholder"];
function Kh(e, t, n, l, o, r) {
  const a = ue("resize-observer"), i = ue("icon-close"), s = ue("icon-hover");
  return y(), O("div", Oe(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (y(), O("div", {
    key: 0,
    ref: "mirrorRef",
    class: G(`${e.prefixCls}-mirror`),
    style: pe(e.mirrorStyle)
  }, ie(`${e.computedValue}
`), 7)) : te("v-if", !0), d(a, {
    onResize: e.handleResize
  }, {
    default: le(() => [v("textarea", Oe({
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
    }), null, 16, Uh)]),
    _: 1
  }, 8, ["onResize"]), se(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (y(), O("div", {
    key: 1,
    class: G(`${e.prefixCls}-word-limit`)
  }, ie(e.valueLength) + "/" + ie(e.computedMaxLength), 3)) : te("v-if", !0), e.showClearBtn ? (y(), O("div", {
    key: 2,
    class: G(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [d(s, null, {
    default: le(() => [d(i)]),
    _: 1
  })], 2)) : te("v-if", !0)], 16);
}
var Go = /* @__PURE__ */ fe(Wh, [["render", Kh]]);
const Yh = Object.assign(Go, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Go.name, Go);
  }
}), Gh = N({
  name: "Message",
  components: {
    AIconHover: ct,
    IconInfoCircleFill: lc,
    IconCheckCircleFill: Xi,
    IconExclamationCircleFill: Zi,
    IconCloseCircleFill: Qi,
    IconClose: cn,
    IconLoading: Yt
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
    }, r = () => {
      e.duration > 0 && (l = window.setTimeout(o, e.duration));
    }, a = () => {
      l && (window.clearTimeout(l), l = 0);
    };
    return xe(() => {
      r();
    }), Tt(() => {
      e.resetOnUpdate && (a(), r());
    }), Gl(() => {
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
function Xh(e, t, n, l, o, r) {
  const a = ue("icon-info-circle-fill"), i = ue("icon-check-circle-fill"), s = ue("icon-exclamation-circle-fill"), u = ue("icon-close-circle-fill"), c = ue("icon-loading"), f = ue("icon-close"), m = ue("a-icon-hover");
  return y(), O("li", {
    role: "alert",
    class: G([e.prefixCls, `${e.prefixCls}-${e.type}`, {
      [`${e.prefixCls}-closable`]: e.closable
    }]),
    onMouseenter: t[1] || (t[1] = (...b) => e.handleMouseEnter && e.handleMouseEnter(...b)),
    onMouseleave: t[2] || (t[2] = (...b) => e.handleMouseLeave && e.handleMouseLeave(...b))
  }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (y(), O("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [se(e.$slots, "icon", {}, () => [e.type === "info" ? (y(), re(a, {
    key: 0
  })) : e.type === "success" ? (y(), re(i, {
    key: 1
  })) : e.type === "warning" ? (y(), re(s, {
    key: 2
  })) : e.type === "error" ? (y(), re(u, {
    key: 3
  })) : e.type === "loading" ? (y(), re(c, {
    key: 4
  })) : te("v-if", !0)])], 2)) : te("v-if", !0), v("span", {
    class: G(`${e.prefixCls}-content`)
  }, [se(e.$slots, "default")], 2), e.closable ? (y(), O("span", {
    key: 1,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...b) => e.handleClose && e.handleClose(...b))
  }, [d(m, null, {
    default: le(() => [d(f)]),
    _: 1
  })], 2)) : te("v-if", !0)], 34);
}
var Zh = /* @__PURE__ */ fe(Gh, [["render", Xh]]);
function Qh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Sa(e);
}
var Jh = N({
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
    } = ns("message", {
      runOnMounted: !0
    });
    return () => {
      let o;
      return d(Mi, {
        class: [n, `${n}-${e.position}`],
        name: "fade-message",
        tag: "ul",
        style: {
          zIndex: l.value
        },
        onAfterLeave: () => t.emit("afterClose")
      }, Qh(o = e.messages.map((r) => {
        const a = {
          default: or(r.content),
          icon: or(r.icon)
        };
        return d(Zh, {
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
}), em = Object.defineProperty, tm = Object.defineProperties, nm = Object.getOwnPropertyDescriptors, mi = Object.getOwnPropertySymbols, lm = Object.prototype.hasOwnProperty, om = Object.prototype.propertyIsEnumerable, gi = (e, t, n) => t in e ? em(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ll = (e, t) => {
  for (var n in t || (t = {}))
    lm.call(t, n) && gi(e, n, t[n]);
  if (mi)
    for (var n of mi(t))
      om.call(t, n) && gi(e, n, t[n]);
  return e;
}, Vs = (e, t) => tm(e, nm(t));
class am {
  constructor(t, n) {
    this.messageCount = 0, this.add = (r) => {
      var a;
      this.messageCount++;
      const i = (a = r.id) != null ? a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(i))
        return this.update(i, r);
      const s = Pe(Ll({
        id: i
      }, r));
      return this.messages.value.push(s), this.messageIds.add(i), {
        close: () => this.remove(i)
      };
    }, this.update = (r, a) => {
      for (let i = 0; i < this.messages.value.length; i++)
        if (this.messages.value[i].id === r) {
          const s = !qe(a.duration);
          Object.assign(this.messages.value[i], Vs(Ll({}, a), {
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
          et(i.onClose) && i.onClose(r), this.messages.value.splice(a, 1), this.messageIds.delete(r);
          break;
        }
      }
    }, this.clear = () => {
      this.messages.value.splice(0);
    }, this.destroy = () => {
      this.messages.value.length === 0 && this.container && (Za(null, this.container), document.body.removeChild(this.container), this.container = null, _n[this.position] = void 0);
    };
    const {
      position: l = "top"
    } = t;
    this.container = Ru("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = P([]), this.position = l;
    const o = d(Jh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? Ze._context) && (o.appContext = n ?? Ze._context), Za(o, this.container), document.body.appendChild(this.container);
  }
}
const _n = {}, Os = [...yc, "loading", "normal"], Cl = Os.reduce((e, t) => (e[t] = (n, l) => {
  yt(n) && (n = {
    content: n
  });
  const o = Ll({
    type: t
  }, n), {
    position: r = "top"
  } = o;
  return _n[r] || (_n[r] = new am(o, l)), _n[r].add(o);
}, e), {});
Cl.clear = (e) => {
  var t;
  e ? (t = _n[e]) == null || t.clear() : Object.values(_n).forEach((n) => n == null ? void 0 : n.clear());
};
const Ze = Vs(Ll({}, Cl), {
  install: (e) => {
    const t = {
      clear: Cl.clear
    };
    for (const n of Os)
      t[n] = (l, o = e._context) => Cl[n](l, o);
    e.config.globalProperties.$message = t;
  },
  _context: null
}), rm = N({
  name: "SliderButton",
  components: {
    Tooltip: Jn
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
    const n = ne("slider-btn"), l = P(!1), o = (f) => {
      e.disabled || (f.preventDefault(), l.value = !0, Et(window, "mousemove", r), Et(window, "mouseup", a), Et(window, "contextmenu", a), t("movestart"));
    }, r = (f) => {
      t("moving", f.clientX, f.clientY);
    }, a = () => {
      l.value = !1, kn(window, "mousemove", r), kn(window, "mouseup", a), t("moveend");
    }, i = h(() => [n]), s = h(() => {
      var f;
      return ((f = e.tooltipPosition) != null ? f : e.direction === "vertical") ? "right" : "top";
    }), u = h(() => {
      var f, m;
      return (m = (f = e.formatTooltip) == null ? void 0 : f.call(e, e.value)) != null ? m : `${e.value}`;
    }), c = h(() => e.showTooltip ? l.value ? !0 : void 0 : !1);
    return {
      prefixCls: n,
      cls: i,
      tooltipContent: u,
      mergedTooltipPosition: s,
      popupVisible: c,
      handleMouseDown: o
    };
  }
}), im = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function sm(e, t, n, l, o, r) {
  const a = ue("tooltip");
  return y(), re(a, {
    "popup-visible": e.popupVisible,
    position: e.mergedTooltipPosition,
    content: e.tooltipContent
  }, {
    default: le(() => [v("div", Oe(e.$attrs, {
      tabindex: "0",
      role: "slider",
      "aria-disabled": e.disabled,
      "aria-valuemax": e.max,
      "aria-valuemin": e.min,
      "aria-valuenow": e.value,
      "aria-valuetext": e.tooltipContent,
      class: e.cls,
      onMousedown: t[0] || (t[0] = (...i) => e.handleMouseDown && e.handleMouseDown(...i)),
      onClick: t[1] || (t[1] = an(() => {
      }, ["stop"]))
    }), null, 16, im)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var um = /* @__PURE__ */ fe(rm, [["render", sm]]);
const Nt = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${sn.round(l * 100, 2)}%`;
}, ao = (e, t) => t === "vertical" ? {
  bottom: e
} : {
  left: e
}, cm = N({
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
      getStyle: (l) => ao(Nt(l, [e.min, e.max]), e.direction)
    };
  }
});
function dm(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(`${e.prefixCls}-dots`)
  }, [(y(!0), O(we, null, Ge(e.data, (a, i) => (y(), O("div", {
    key: i,
    class: G(`${e.prefixCls}-dot-wrapper`),
    style: pe(e.getStyle(a.key))
  }, [v("div", {
    class: G([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var fm = /* @__PURE__ */ fe(cm, [["render", dm]]);
const vm = N({
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
      getStyle: (l) => ao(Nt(l, [e.min, e.max]), e.direction)
    };
  }
});
function pm(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(`${e.prefixCls}-marks`)
  }, [(y(!0), O(we, null, Ge(e.data, (a, i) => (y(), O("div", {
    key: i,
    "aria-hidden": "true",
    class: G(`${e.prefixCls}-mark`),
    style: pe(e.getStyle(a.key))
  }, ie(a.content), 7))), 128))], 2);
}
var hm = /* @__PURE__ */ fe(vm, [["render", pm]]);
const mm = N({
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
    const t = ne("slider"), n = h(() => {
      const o = [], r = Math.floor((e.max - e.min) / e.step);
      for (let a = 0; a <= r; a++) {
        const i = sn.plus(a * e.step, e.min);
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
      getStyle: (o) => ao(Nt(o, [e.min, e.max]), e.direction)
    };
  }
});
function gm(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(`${e.prefixCls}-ticks`)
  }, [(y(!0), O(we, null, Ge(e.steps, (a, i) => (y(), O("div", {
    key: i,
    class: G([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: pe(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var bm = /* @__PURE__ */ fe(mm, [["render", gm]]);
const ym = N({
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
function _m(e, t, n, l, o, r) {
  const a = ue("input-number");
  return y(), O("div", {
    class: G(`${e.prefixCls}-input`)
  }, [e.range ? (y(), O(we, {
    key: 0
  }, [d(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[0],
    "hide-button": "",
    onChange: t[0] || (t[0] = (i) => e.$emit("startChange", i))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"]), v("div", {
    class: G(`${e.prefixCls}-input-hyphens`)
  }, null, 2)], 64)) : te("v-if", !0), d(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[1],
    "hide-button": "",
    onChange: t[1] || (t[1] = (i) => e.$emit("endChange", i))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"])], 2);
}
var $m = /* @__PURE__ */ fe(ym, [["render", _m]]);
const wm = N({
  name: "Slider",
  components: {
    SliderButton: um,
    SliderDots: fm,
    SliderMarks: hm,
    SliderTicks: bm,
    SliderInput: $m
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
    } = ye(e), l = ne("slider"), {
      mergedDisabled: o,
      eventHandlers: r
    } = dt({
      disabled: Hn(e, "disabled")
    }), a = P(null), i = P(), s = e.modelValue ? e.modelValue : e.defaultValue, u = P(Ae(s) ? s[0] : 0), c = P(Ae(s) ? s[1] : s);
    be(n, (p) => {
      var B, x, z, A, U;
      Ae(p) ? (u.value = (x = (B = p[0]) != null ? B : e.min) != null ? x : 0, c.value = (A = (z = p[1]) != null ? z : e.min) != null ? A : 0) : c.value = (U = p ?? e.min) != null ? U : 0;
    });
    const f = () => {
      var p, B;
      e.range ? (t("update:modelValue", [u.value, c.value]), t("change", [u.value, c.value])) : (t("update:modelValue", c.value), t("change", c.value)), (B = (p = r.value) == null ? void 0 : p.onChange) == null || B.call(p);
    }, m = (p) => {
      p = p ?? e.min, u.value = p, f();
    }, b = (p) => {
      p = p ?? e.min, c.value = p, f();
    }, _ = h(() => {
      var p, B, x;
      return e.range ? Ae(e.modelValue) ? e.modelValue : [u.value, (p = e.modelValue) != null ? p : c.value] : qe(e.modelValue) ? [u.value, c.value] : Ae(e.modelValue) ? [(B = e.min) != null ? B : 0, e.modelValue[1]] : [(x = e.min) != null ? x : 0, e.modelValue];
    }), g = h(() => Object.keys(e.marks || {}).map((p) => {
      var B;
      const x = Number(p);
      return {
        key: x,
        content: (B = e.marks) == null ? void 0 : B[x],
        isActive: x >= _.value[0] && x <= _.value[1]
      };
    })), T = (p) => ao(Nt(p, [e.min, e.max]), e.direction), E = P(!1), k = () => {
      E.value = !0, a.value && (i.value = a.value.getBoundingClientRect());
    };
    function S(p, B) {
      if (!i.value)
        return 0;
      const {
        left: x,
        top: z,
        width: A,
        height: U
      } = i.value, X = e.direction === "horizontal" ? A : U, L = X * e.step / (e.max - e.min);
      let Q = e.direction === "horizontal" ? p - x : z + U - B;
      Q < 0 && (Q = 0), Q > X && (Q = X);
      const j = Math.round(Q / L);
      return sn.plus(e.min, sn.times(j, e.step));
    }
    const $ = (p, B) => {
      c.value = S(p, B), f();
    }, I = (p) => {
      if (o.value)
        return;
      const {
        clientX: B,
        clientY: x
      } = p;
      a.value && (i.value = a.value.getBoundingClientRect()), c.value = S(B, x), f();
    };
    function w([p, B]) {
      return p > B && ([p, B] = [B, p]), e.direction === "vertical" ? {
        bottom: Nt(p, [e.min, e.max]),
        top: Nt(e.max + e.min - B, [e.min, e.max])
      } : {
        left: Nt(p, [e.min, e.max]),
        right: Nt(e.max + e.min - B, [e.min, e.max])
      };
    }
    const V = (p, B) => {
      u.value = S(p, B), f();
    }, R = () => {
      E.value = !1;
    }, K = h(() => [l, {
      [`${l}-vertical`]: e.direction === "vertical",
      [`${l}-with-marks`]: Boolean(e.marks)
    }]), q = h(() => [`${l}-track`, {
      [`${l}-track-disabled`]: o.value,
      [`${l}-track-vertical`]: e.direction === "vertical"
    }]);
    return {
      prefixCls: l,
      cls: K,
      trackCls: q,
      trackRef: a,
      computedValue: _,
      mergedDisabled: o,
      markList: g,
      getBtnStyle: T,
      getBarStyle: w,
      handleClick: I,
      handleMoveStart: k,
      handleEndMoving: $,
      handleMoveEnd: R,
      handleStartMoving: V,
      handleStartChange: m,
      handleEndChange: b
    };
  }
});
function km(e, t, n, l, o, r) {
  const a = ue("slider-ticks"), i = ue("slider-dots"), s = ue("slider-marks"), u = ue("slider-button"), c = ue("slider-input");
  return y(), O("div", {
    class: G(e.cls)
  }, [v("div", {
    ref: "trackRef",
    class: G(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [v("div", {
    class: G(`${e.prefixCls}-bar`),
    style: pe(e.getBarStyle(e.computedValue))
  }, null, 6), e.showTicks ? (y(), re(a, {
    key: 0,
    value: e.computedValue,
    step: e.step,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["value", "step", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (y(), re(i, {
    key: 1,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (y(), re(s, {
    key: 2,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.range ? (y(), re(u, {
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (y(), re(c, {
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
var Xo = /* @__PURE__ */ fe(wm, [["render", km]]);
const Es = Object.assign(Xo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Xo.name, Xo);
  }
});
var Zo = N({
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
    const n = ne("space"), l = h(() => {
      var i;
      return (i = e.align) != null ? i : e.direction === "horizontal" ? "center" : "";
    }), o = h(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${l.value}`]: l.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function r(i) {
      if (ge(i))
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
      const s = {}, u = `${r(Ae(e.size) ? e.size[0] : e.size)}px`, c = `${r(Ae(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: c
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = c), s);
    };
    return () => {
      var i;
      const s = bl((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== ru);
      return d("div", {
        class: o.value
      }, [s.map((u, c) => {
        var f, m;
        const b = t.split && c > 0;
        return d(we, {
          key: (f = u.key) != null ? f : `item-${c}`
        }, [b && d("div", {
          class: `${n}-item-split`,
          style: a(!1)
        }, [(m = t.split) == null ? void 0 : m.call(t)]), d("div", {
          class: `${n}-item`,
          style: a(c === s.length - 1)
        }, [u])]);
      })]);
    };
  }
});
const Cm = Object.assign(Zo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Zo.name, Zo);
  }
}), Sm = N({
  name: "Switch",
  components: {
    IconLoading: Yt
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
    } = ye(e), r = ne("switch"), {
      mergedSize: a
    } = _t(l), {
      mergedDisabled: i,
      mergedSize: s,
      eventHandlers: u
    } = dt({
      disabled: n,
      size: a
    }), c = P(e.defaultChecked ? e.checkedValue : e.uncheckedValue), f = h(() => {
      var $;
      return (($ = e.modelValue) != null ? $ : c.value) === e.checkedValue;
    }), m = P(e.loading), b = h(() => m.value || e.loading), _ = ($, I) => {
      var w, V;
      c.value = $ ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, I), (V = (w = u.value) == null ? void 0 : w.onChange) == null || V.call(w, I);
    }, g = async ($) => {
      if (b.value || i.value)
        return;
      const I = !f.value, w = I ? e.checkedValue : e.uncheckedValue, V = e.beforeChange;
      if (et(V)) {
        m.value = !0;
        try {
          const R = await V(w);
          (R ?? !0) && _(I, $);
        } finally {
          m.value = !1;
        }
      } else
        _(I, $);
    }, T = ($) => {
      var I, w;
      t("focus", $), (w = (I = u.value) == null ? void 0 : I.onFocus) == null || w.call(I, $);
    }, E = ($) => {
      var I, w;
      t("blur", $), (w = (I = u.value) == null ? void 0 : I.onBlur) == null || w.call(I, $);
    };
    be(o, ($) => {
      (qe($) || Kt($)) && (c.value = e.uncheckedValue);
    });
    const k = h(() => [r, `${r}-type-${e.type}`, {
      [`${r}-small`]: s.value === "small" || s.value === "mini",
      [`${r}-checked`]: f.value,
      [`${r}-disabled`]: i.value,
      [`${r}-loading`]: b.value,
      [`${r}-custom-color`]: e.type === "line" && (e.checkedColor || e.uncheckedColor)
    }]), S = h(() => {
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
      cls: k,
      mergedDisabled: i,
      buttonStyle: S,
      computedCheck: f,
      computedLoading: b,
      handleClick: g,
      handleFocus: T,
      handleBlur: E
    };
  }
}), Vm = ["aria-checked", "disabled"];
function Om(e, t, n, l, o, r) {
  const a = ue("icon-loading");
  return y(), O("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: G(e.cls),
    style: pe(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: t[1] || (t[1] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: t[2] || (t[2] = (...i) => e.handleBlur && e.handleBlur(...i))
  }, [v("span", {
    class: G(`${e.prefixCls}-handle`)
  }, [v("span", {
    class: G(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? (y(), re(a, {
    key: 0
  })) : (y(), O(we, {
    key: 1
  }, [e.computedCheck ? se(e.$slots, "checked-icon", {
    key: 0
  }) : se(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), te("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (y(), O(we, {
    key: 0
  }, [v("span", {
    class: G(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? se(e.$slots, "checked", {
    key: 0
  }, () => [Ce(ie(e.checkedText), 1)]) : se(e.$slots, "unchecked", {
    key: 1
  }, () => [Ce(ie(e.uncheckedText), 1)])], 2), v("span", {
    class: G(`${e.prefixCls}-text`)
  }, [e.computedCheck ? se(e.$slots, "checked", {
    key: 0
  }, () => [Ce(ie(e.checkedText), 1)]) : se(e.$slots, "unchecked", {
    key: 1
  }, () => [Ce(ie(e.uncheckedText), 1)])], 2)], 64)) : te("v-if", !0)], 46, Vm);
}
var Qo = /* @__PURE__ */ fe(Sm, [["render", Om]]);
const wt = Object.assign(Qo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Qo.name, Qo);
  }
}), Em = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, qa = Symbol("ArcoTabs"), xm = N({
  name: "TabsTab",
  components: {
    IconHover: ct,
    IconClose: cn
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
    const n = ne("tabs-tab"), l = Xe(qa, {}), o = (u) => {
      e.tab.disabled || t("click", e.tab.key, u);
    }, r = (u) => {
      u.key === "Enter" && o(u);
    }, a = h(() => Object.assign(l.trigger === "click" ? {
      onClick: o
    } : {
      onMouseover: o
    }, {
      onKeydown: r
    })), i = (u) => {
      e.tab.disabled || t("delete", e.tab.key, u);
    }, s = h(() => [n, {
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
function Bm(e, t, n, l, o, r) {
  const a = ue("icon-close"), i = ue("icon-hover");
  return y(), O("div", Oe({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [v("span", {
    class: G(`${e.prefixCls}-title`)
  }, [se(e.$slots, "default")], 2), e.editable && e.tab.closable ? (y(), re(i, {
    key: 0,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: an(e.handleDelete, ["stop"])
  }, {
    default: le(() => [d(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : te("v-if", !0)], 16);
}
var Im = /* @__PURE__ */ fe(xm, [["render", Bm]]);
function Pm(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Sa(e);
}
var bi = N({
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
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? d(Zf, null, null) : d(Bv, null, null) : e.type === "next" ? d(za, null, null) : d(cs, null, null), r = h(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let a;
      return d("div", {
        class: r.value,
        onClick: l
      }, [d(ct, {
        disabled: e.disabled
      }, Pm(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const jm = N({
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
    } = ye(e), n = ne("tabs-nav-ink"), l = P(0), o = P(0), r = h(() => e.direction === "vertical" ? {
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
    xe(() => {
      Le(() => a());
    }), Tt(() => {
      a();
    });
    const i = h(() => [n, {
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
function Tm(e, t, n, l, o, r) {
  return y(), O("div", {
    class: G(e.cls),
    style: pe(e.style)
  }, null, 6);
}
var Mm = /* @__PURE__ */ fe(jm, [["render", Tm]]), Dm = N({
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
    } = ye(e), i = ne("tabs-nav"), s = P(), u = P(), c = P({}), f = h(() => {
      if (!qe(o.value))
        return c.value[o.value];
    }), m = P(), b = h(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), _ = P(!1), g = P(0), T = P(0), E = P([]), k = P(0), S = () => {
      var j, C, H;
      return (H = a.value === "vertical" ? (j = s.value) == null ? void 0 : j.offsetHeight : (C = s.value) == null ? void 0 : C.offsetWidth) != null ? H : 0;
    }, $ = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, I = () => l.value.map((j) => {
      const C = c.value[j.key];
      return a.value === "vertical" ? C.offsetTop + C.offsetHeight : C.offsetLeft + C.offsetWidth;
    }), w = () => {
      _.value = V(), _.value ? (g.value = S(), T.value = $(), E.value = I(), k.value > T.value && (k.value = T.value)) : k.value = 0;
    }, V = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, R = (j) => {
      var C;
      return ((C = E.value[j - 1]) != null ? C : 0) >= k.value && E.value[j] <= k.value + g.value;
    }, K = (j) => s.value ? j === "previous" ? k.value - g.value : k.value + g.value : 0, q = (j) => !s.value || !u.value || j < 0 ? 0 : j > T.value ? T.value : j, p = (j, C) => {
      t("click", j, C);
    }, B = (j, C) => {
      t("delete", j, C);
    }, x = (j) => {
      k.value = q(K(j));
    }, z = () => {
      w(), m.value && m.value.$forceUpdate();
    };
    be(l, () => {
      Le(() => {
        w();
      });
    }), be(r, (j, C) => {
      Le(() => {
        var H;
        if (_.value)
          if (j >= C) {
            const J = j < E.value.length - 1 ? j + 1 : j;
            R(J) || (k.value = E.value[J] - g.value);
          } else {
            const J = j > 0 ? j - 1 : j;
            R(J) || (k.value = (H = E.value[J - 1]) != null ? H : 0);
          }
      });
    }), xe(() => {
      w();
    });
    const A = () => !b.value || !e.showAddButton ? null : d("div", {
      class: `${i}-add-btn`,
      onClick: (j) => t("add", j)
    }, [d(ct, null, {
      default: () => [d(ms, null, null)]
    })]), U = h(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), X = h(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), L = h(() => Em({
      direction: e.direction,
      type: e.type,
      offset: k.value
    })), Q = h(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: _.value
    }]);
    return () => {
      var j;
      return d("div", {
        class: U.value
      }, [_.value && d(bi, {
        type: "previous",
        direction: e.direction,
        disabled: k.value <= 0,
        onClick: x
      }, null), d(jl, {
        onResize: () => w()
      }, {
        default: () => [d("div", {
          class: Q.value,
          ref: s
        }, [d(jl, {
          onResize: z
        }, {
          default: () => [d("div", {
            ref: u,
            class: X.value,
            style: L.value
          }, [e.tabs.map((C, H) => d(Im, {
            key: C.key,
            ref: (J) => {
              J != null && J.$el && (c.value[C.key] = J.$el);
            },
            active: C.key === o.value,
            tab: C,
            editable: e.editable,
            onClick: p,
            onDelete: B
          }, {
            default: () => {
              var J, he, _e;
              return [(_e = (he = (J = C.slots).title) == null ? void 0 : he.call(J)) != null ? _e : C.title];
            }
          })), e.type === "line" && f.value && d(Mm, {
            ref: m,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !_.value && A()])]
      }), _.value && d(bi, {
        type: "next",
        direction: e.direction,
        disabled: k.value >= T.value,
        onClick: x
      }, null), d("div", {
        class: `${i}-extra`
      }, [_.value && A(), (j = n.extra) == null ? void 0 : j.call(n)])]);
    };
  }
}), Jo = N({
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
    } = ye(e), i = ne("tabs"), {
      mergedSize: s
    } = _t(l), u = h(() => e.direction === "vertical" ? "left" : e.position), c = h(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: f,
      components: m
    } = Dv("TabPane"), b = Pe(/* @__PURE__ */ new Map()), _ = h(() => {
      const p = [];
      return m.value.forEach((B) => {
        const x = b.get(B);
        x && p.push(x);
      }), p;
    }), g = h(() => _.value.map((p) => p.key)), T = (p, B) => {
      b.set(p, B);
    }, E = (p) => {
      b.delete(p);
    }, k = P(e.defaultActiveKey), S = h(() => {
      var p;
      const B = (p = e.activeKey) != null ? p : k.value;
      return qe(B) ? g.value[0] : B;
    }), $ = h(() => {
      const p = g.value.indexOf(S.value);
      return p === -1 ? 0 : p;
    });
    jt(qa, Pe({
      lazyLoad: o,
      destroyOnHide: r,
      activeKey: S,
      addItem: T,
      removeItem: E,
      trigger: a
    }));
    const I = (p) => {
      p !== S.value && (k.value = p, t("update:activeKey", p), t("change", p));
    }, w = (p, B) => {
      I(p), t("tabClick", p, B);
    }, V = (p) => {
      t("add", p), e.autoSwitch && Le(() => {
        const B = g.value[g.value.length - 1];
        I(B);
      });
    }, R = (p, B) => {
      t("delete", p, B);
    }, K = () => d("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [d("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${$.value * 100}%`
      }
    }, [f.value])]), q = h(() => [i, `${i}-${c.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var p;
      return f.value = (p = n.default) == null ? void 0 : p.call(n), d("div", {
        class: q.value
      }, [u.value === "bottom" && K(), d(Dm, {
        tabs: _.value,
        activeKey: S.value,
        activeIndex: $.value,
        direction: c.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: w,
        onAdd: V,
        onDelete: R
      }, {
        extra: n.extra
      }), u.value !== "bottom" && K()]);
    };
  }
}), zm = Object.defineProperty, yi = Object.getOwnPropertySymbols, Am = Object.prototype.hasOwnProperty, Lm = Object.prototype.propertyIsEnumerable, _i = (e, t, n) => t in e ? zm(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Fm = (e, t) => {
  for (var n in t || (t = {}))
    Am.call(t, n) && _i(e, n, t[n]);
  if (yi)
    for (var n of yi(t))
      Lm.call(t, n) && _i(e, n, t[n]);
  return e;
};
const Nm = N({
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
    } = ye(e), a = Yn(), i = ne("tabs"), s = Xe(qa, {}), u = P(), c = h(() => a == null ? void 0 : a.vnode.key), f = h(() => c.value === s.activeKey), m = P(s.lazyLoad ? f.value : !0), b = Pe({
      key: c,
      title: l,
      disabled: o,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, b)), Ut(() => {
      var _;
      a != null && a.uid && ((_ = s.removeItem) == null || _.call(s, a.uid));
    }), be(f, (_) => {
      _ ? m.value || (m.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (m.value = !1);
    }), Tt(() => {
      b.slots = Fm({}, t);
    }), {
      prefixCls: i,
      active: f,
      itemRef: u,
      mounted: m
    };
  }
});
function Rm(e, t, n, l, o, r) {
  return y(), O("div", {
    ref: "itemRef",
    class: G([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (y(), O("div", {
    key: 0,
    class: G(`${e.prefixCls}-pane`)
  }, [se(e.$slots, "default")], 2)) : te("v-if", !0)], 2);
}
var An = /* @__PURE__ */ fe(Nm, [["render", Rm]]);
const $i = Object.assign(Jo, {
  TabPane: An,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Jo.name, Jo), e.component(n + An.name, An);
  }
}), qm = /* @__PURE__ */ v("span", null, [/* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png",
  alt: "",
  class: "active"
})], -1), Hm = /* @__PURE__ */ v("span", null, [/* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png",
  alt: "",
  style: {
    transform: "rotateZ(180deg)"
  },
  class: "active"
})], -1), Wm = /* @__PURE__ */ v("span", null, [/* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png",
  alt: "",
  style: {
    transform: "rotateZ(180deg)"
  },
  class: "active"
})], -1), Um = /* @__PURE__ */ N({
  __name: "editor-bloack-operate",
  emits: ["operate"],
  setup(e, {
    emit: t
  }) {
    function n(l) {
      t("operate", l);
    }
    return (l, o) => {
      const r = Jn;
      return y(), O("div", {
        class: "editor-bloack-operate",
        onClick: o[3] || (o[3] = () => {
        })
      }, [v("div", {
        class: "editor-bloack-wrapper delBlock",
        onClick: o[0] || (o[0] = (a) => n("delBlock"))
      }, [d(r, {
        content: "删除",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: le(() => [qm]),
        _: 1
      })]), v("div", {
        class: "editor-bloack-wrapper upBlock",
        onClick: o[1] || (o[1] = (a) => n("upBlock"))
      }, [d(r, {
        content: "上移",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: le(() => [Hm]),
        _: 1
      })]), v("div", {
        class: "editor-bloack-wrapper downBlock",
        onClick: o[2] || (o[2] = (a) => n("downBlock"))
      }, [d(r, {
        content: "下移",
        position: "right",
        "background-color": "#fff",
        "content-style": {
          color: "#03203D"
        }
      }, {
        default: le(() => [Wm]),
        _: 1
      })])]);
    };
  }
});
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
function Km(e, t, n, l) {
  const o = [{
    label: "删除",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726286985855114a17262869858559088_dl.png",
    handler: () => {
      var r;
      (r = t.value.focusBlock) != null && r.length && e.delete();
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
      Ze.success("导出成功，请在控制台查看！"), console.log(l), console.log(JSON.stringify(l.modelValue.blocks));
    },
    tip: ""
  }), o;
}
function wi(e, t) {
  let n = e.componentKey;
  return !t.find((l) => l.componentKey === n);
}
function xs(e) {
  return e + "";
}
const Fl = /* @__PURE__ */ N({
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
    editorBloackOperate: Um
  },
  setup(e, {
    emit: t
  }) {
    var s;
    let n = at == null ? void 0 : at.componentMap[e.block.componentKey];
    const l = h(() => {
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
    }), o = P({});
    xe(() => {
      e.block.adjustmentPosition && e.block.dragMode == "free" && (e.block.left = e.block.left - o.value.offsetWidth / 2, e.block.top = e.block.top - o.value.offsetHeight / 2, e.block.adjustmentPosition = !1, e.block.width = o.value.offsetWidth, e.block.height = o.value.offsetHeight);
    });
    let r = h(() => [e.priview ? "editor-bloack-priview" : "editor-bloack", e.block.focus && !e.priview ? "editor-bloack-focus" : "", e.dragMove ? "editor-bloack-dragmove" : ""]);
    function a(u) {
      t(u);
    }
    let i = "";
    return (s = e == null ? void 0 : e.block) != null && s.id && (i = "block" + xs(e.block.id).replace("$", "")), () => e.block.dragMode == "free" ? d("div", {
      class: r.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(ue("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : e.block.dragMode == "default" || e.block.dragMode == "updown" || e.block.dragMode == "" ? d("div", {
      class: r.value,
      style: l.value,
      ref: o,
      "data-index": e.index,
      id: i
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
function Ym(e) {
  const t = Pe({
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
        altKey: c,
        ctrlKey: f
      } = i;
      let m = [];
      f && m.push("ctrl"), u && m.push("shift"), c && m.push("alt"), m.push(n[s]);
      let b = m.join("+");
      t.commandArray.forEach((_) => {
        let {
          keyboard: g,
          name: T
        } = _;
        g && (typeof g == "string" && (g = [g]), g = g.map((E) => E.replace(/\s+/g, "")), g != null && g.includes(b) && (t.commandMap[T](), i.stopPropagation()));
      });
    };
    return e ? (window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a)) : () => {
    };
  }, o = () => {
    t.commandArray.forEach((a) => {
      a.init && t.destoryList.push(a.init());
    }), t.destoryList.push(l());
  };
  Gl(() => {
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
class Bs {
  constructor() {
    Xa(this, "Listener");
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
new Bs();
let Bt = new Bs();
const Nl = {
  on: function(e) {
    Bt.on("dragstart", e);
  },
  emit: function(...e) {
    Bt.emit("dragstart", ...e);
  },
  off: function(e) {
    Bt.off("dragstart", e);
  }
}, Rl = {
  on: function(e) {
    Bt.on("dragend", e);
  },
  emit: function(...e) {
    Bt.emit("dragend", ...e);
  },
  off: function(e) {
    Bt.off("dragend", e);
  }
}, Is = {
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
function Gm({
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
  let o = Ym(l);
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
          this.data.before = Ne(n.value.blocks || []);
        },
        dragend: () => {
          o.state.commandMap.drag();
        }
      };
      return Nl.on(r.dragstart), Rl.on(r.dragend), () => {
        Nl.off(r.dragstart), Rl.off(r.dragend);
      };
    },
    excute() {
      let r = Ne(this.data.before), a = Ne(n.value.blocks || []);
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
          r.before = Ne(n.value.blocks || []), r.after = [], t(r.after);
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
          r.before = Ne(n.value.blocks);
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
          r.before = Ne(n.value.blocks);
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
            i.before = Ne(s), s.push(r), i.after = s, t(i.after);
          } else {
            let s = n.value.blocks;
            i.before = Ne(s), s.splice(a, 0, r), i.after = s, t(i.after);
          }
        }
      };
    }
  }), o.registor({
    name: "unshiftadd",
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
            i.before = Ne(s), s.unshift(r), i.after = s, t(i.after);
          } else {
            let s = n.value.blocks;
            i.before = Ne(s), s.splice(a - 1, 0, r), i.after = s, t(i.after);
          }
        }
      };
    }
  }), o.registor({
    name: "transposition",
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
          let s = n.value.blocks;
          i.before = Ne(s);
          let u = s.findIndex((m) => m.id == r.id), c = s.findIndex((m) => m.id == a.id), f = s[u];
          s[c], u < c ? (s.splice(u, 1), s.splice(c - 1, 0, f)) : (s.splice(u, 1), s.splice(c, 0, f)), t(s), i.after = Ne(s);
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
            Ze.warning("元素不需要移动！");
            return;
          }
          let i = a.findIndex((c) => c.focus);
          if (i < 0) {
            Ze.warning("当前没有要移动的元素！");
            return;
          }
          if (i == 0) {
            Ze.warning("移动无效！");
            return;
          }
          r.before = Ne(a);
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
            Ze.warning("移动无效！");
            return;
          }
          let i = a.findIndex((c) => c.focus);
          if (i < 0) {
            Ze.warning("当前没有要移动的元素！");
            return;
          }
          if (i == a.length - 1) {
            Ze.warning("移动的无效！");
            return;
          }
          r.before = Ne(a);
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
    // 添加一个新元素（默认方向向后插入）
    unshiftadd: (...r) => o.state.commandMap.unshiftadd(...r),
    // 添加一个新元素（默认方向向前插入）
    up: (...r) => o.state.commandMap.up(...r),
    // 元素向上移动
    transposition: (...r) => o.state.commandMap.transposition(...r),
    // 元素向上移动
    down: (...r) => o.state.commandMap.down(...r)
    // 元素向下移动
  };
}
const Ps = (e) => new Promise((t, n) => {
  var l;
  if ((l = window == null ? void 0 : window.visualSystem) != null && l.fileUploadHandler)
    Ze.info("文件上传中，请稍等"), window.visualSystem.fileUploadHandler(e).then((o) => {
      t(o.path), Ze.success("文件上传成功！");
    }).catch((o) => {
      Ze.error("文件上传失败！"), n(o);
    });
  else {
    const o = new FileReader();
    o.readAsDataURL(e), o.onload = () => {
      t(o.result);
    }, o.onerror = (r) => {
      n(r);
    };
  }
}), Xm = (e) => (He("data-v-b129c912"), e = e(), We(), e), Zm = {
  class: "img-upload-container w100"
}, Qm = {
  key: 0,
  class: "real-img w100"
}, Jm = ["src"], eg = /* @__PURE__ */ Xm(() => /* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), tg = [eg], ng = /* @__PURE__ */ N({
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
    let n = P(!1);
    const l = {
      fileChange(o) {
        let r = o.target.files[0];
        n.value = !0, Ps(r).then((a) => {
          t("update:modelValue", a), t("change", a), n.value = !1;
        }).catch(() => {
          n.value = !1;
        });
      },
      del() {
        t("update:modelValue", ""), t("change", "");
      }
    };
    return (o, r) => {
      const a = rn;
      return y(), O("div", Zm, [e.modelValue ? (y(), O("div", Qm, [v("img", {
        src: e.modelValue,
        alt: ""
      }, null, 8, Jm), v("div", {
        class: "real-close",
        onClick: r[0] || (r[0] = //@ts-ignore
        (...i) => l.del && l.del(...i))
      }, tg)])) : te("", !0), d(a, {
        style: {
          width: "100%"
        },
        class: "file-btn",
        loading: Gn(n)
      }, {
        default: le(() => [Ce(ie(e.modelValue ? "替换图片" : "上传图片") + " ", 1), v("input", {
          type: "file",
          class: "file-input",
          accept: "image/*",
          onChange: r[1] || (r[1] = //@ts-ignore
          (...i) => l.fileChange && l.fileChange(...i))
        }, null, 32)]),
        _: 1
      }, 8, ["loading"])]);
    };
  }
});
const Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Ha = /* @__PURE__ */ Se(ng, [["__scopeId", "data-v-b129c912"]]), lg = (e) => (He("data-v-0c82f75e"), e = e(), We(), e), og = {
  class: "img-upload-container w100"
}, ag = {
  key: 0,
  class: "real-img w100"
}, rg = {
  class: "text"
}, ig = /* @__PURE__ */ lg(() => /* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), sg = [ig], ug = /* @__PURE__ */ N({
  __name: "upload-file",
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
    let n = P(!1);
    const l = {
      fileChange(o) {
        let r = o.target.files[0];
        n.value = !0, Ps(r).then((a) => {
          t("update:modelValue", a), t("change", a), n.value = !1;
        }).catch(() => {
          n.value = !1;
        });
      },
      del() {
        t("update:modelValue", ""), t("change", "");
      }
    };
    return (o, r) => {
      const a = rn;
      return y(), O("div", og, [e.modelValue ? (y(), O("div", ag, [v("div", rg, ie(e.modelValue), 1), v("div", {
        class: "real-close",
        onClick: r[0] || (r[0] = //@ts-ignore
        (...i) => l.del && l.del(...i))
      }, sg)])) : te("", !0), d(a, {
        style: {
          width: "100%"
        },
        class: "file-btn",
        loading: Gn(n)
      }, {
        default: le(() => [Ce(ie(e.modelValue ? "替换文件" : "上传文件") + " ", 1), v("input", {
          type: "file",
          class: "file-input",
          onChange: r[1] || (r[1] = //@ts-ignore
          (...i) => l.fileChange && l.fileChange(...i))
        }, null, 32)]),
        _: 1
      }, 8, ["loading"])]);
    };
  }
});
const cg = /* @__PURE__ */ Se(ug, [["__scopeId", "data-v-0c82f75e"]]), dg = {
  key: 0
}, fg = {
  key: 1
}, vg = {
  key: 0,
  class: "ml12"
}, pg = {
  key: 2
}, hg = {
  key: 3
}, mg = {
  key: 0,
  class: "ml12"
}, gg = {
  key: 4,
  class: "w100"
}, bg = {
  key: 0,
  class: "ml12"
}, yg = {
  key: 5,
  class: "w100"
}, _g = {
  key: 6,
  class: "w100"
}, $g = {
  key: 7,
  class: "w100"
}, wg = {
  key: 8,
  class: "w100"
}, kg = /* @__PURE__ */ N({
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
      const l = La, o = Gt, r = Yh, a = Vt, i = Es, s = Cm, u = ln, c = eo, f = Cv, m = kl, b = on, _ = Ss;
      return y(), re(_, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: le(() => [(y(!0), O(we, null, Ge(e.editorControlView, (g) => {
          var T;
          return y(), O(we, null, [!((T = e.currentBlock.props[g.key]) != null && T.isShowFunc) || e.currentBlock.props[g.key].isShowFunc(e.currentBlock.props) ? (y(), re(b, {
            label: g.label,
            key: g.label
          }, {
            default: le(() => {
              var E, k, S, $, I, w, V, R, K, q, p, B, x, z;
              return [g.type == "color" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", dg, [d(l, {
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A,
                "show-history": "",
                "show-preset": "",
                showText: "",
                disabledAlpha: "",
                disabled: !!((E = e.currentBlock.props[g.key]) != null && E.disabled)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])) : te("", !0), g.type == "input" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", fg, [d(o, {
                style: {
                  width: "250px"
                },
                placeholder: `请输入${g.label}`,
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A,
                disabled: !!((k = e.currentBlock.props[g.key]) != null && k.disabled)
              }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (S = e.currentBlock.props[g.key]) != null && S.unit ? (y(), O("span", vg, ie(($ = e.currentBlock.props[g.key]) == null ? void 0 : $.unit), 1)) : te("", !0)])) : te("", !0), g.type == "textarea" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", pg, [d(r, {
                "auto-size": {
                  minRows: 2,
                  maxRows: 6
                },
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A,
                style: {
                  width: "250px"
                },
                placeholder: `请输入${g.label}`,
                "allow-clear": "",
                disabled: !!((I = e.currentBlock.props[g.key]) != null && I.disabled)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])])) : te("", !0), g.type == "number" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", hg, [d(a, {
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A,
                style: {
                  width: "150px"
                },
                placeholder: `请输入${g.label}`,
                disabled: !!((w = e.currentBlock.props[g.key]) != null && w.disabled),
                min: (V = e.currentBlock.props[g.key]) != null && V.min ? ((R = e.currentBlock.props[g.key]) == null ? void 0 : R.min) * 1 : 0,
                max: (K = e.currentBlock.props[g.key]) != null && K.max ? ((q = e.currentBlock.props[g.key]) == null ? void 0 : q.max) * 1 : 100,
                mode: "button",
                size: "large"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (p = e.currentBlock.props[g.key]) != null && p.unit ? (y(), O("span", mg, ie((B = e.currentBlock.props[g.key]) == null ? void 0 : B.unit), 1)) : te("", !0)])) : te("", !0), g.type == "slider" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", gg, [d(s, {
                size: "large"
              }, {
                default: le(() => {
                  var A, U, X, L, Q;
                  return [d(i, {
                    min: (A = e.currentBlock.props[g.key]) != null && A.min ? ((U = e.currentBlock.props[g.key]) == null ? void 0 : U.min) * 1 : 0,
                    max: (X = e.currentBlock.props[g.key]) != null && X.max ? ((L = e.currentBlock.props[g.key]) == null ? void 0 : L.max) * 1 : 100,
                    disabled: !!((Q = e.currentBlock.props[g.key]) != null && Q.disabled),
                    modelValue: e.currentBlock.props[g.key].defaultValue,
                    "onUpdate:modelValue": (j) => e.currentBlock.props[g.key].defaultValue = j,
                    style: {
                      width: "250px",
                      display: "flex"
                    },
                    "show-input": ""
                  }, null, 8, ["min", "max", "disabled", "modelValue", "onUpdate:modelValue"])];
                }),
                _: 2
              }, 1024), (x = e.currentBlock.props[g.key]) != null && x.unit ? (y(), O("span", bg, ie((z = e.currentBlock.props[g.key]) == null ? void 0 : z.unit), 1)) : te("", !0)])) : te("", !0), g.type == "imgUpload" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", yg, [d(Ha, {
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A
              }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : te("", !0), g.type == "fileUpload" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", _g, [d(cg, {
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A
              }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : te("", !0), g.type == "select" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", $g, [d(c, {
                style: {
                  width: "250px"
                },
                placeholder: `请选择${g.label}`,
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A,
                "allow-clear": ""
              }, {
                default: le(() => [(y(!0), O(we, null, Ge(e.currentBlock.props[g.key].options, (A, U) => (y(), re(u, {
                  key: U,
                  value: A.value
                }, {
                  default: le(() => [Ce(ie(A.name), 1)]),
                  _: 2
                }, 1032, ["value"]))), 128))]),
                _: 2
              }, 1032, ["placeholder", "modelValue", "onUpdate:modelValue"])])) : te("", !0), g.type == "radio" && "defaultValue" in e.currentBlock.props[g.key] ? (y(), O("div", wg, [d(m, {
                modelValue: e.currentBlock.props[g.key].defaultValue,
                "onUpdate:modelValue": (A) => e.currentBlock.props[g.key].defaultValue = A,
                "allow-clear": ""
              }, {
                default: le(() => [(y(!0), O(we, null, Ge(e.currentBlock.props[g.key].options, (A, U) => (y(), re(f, {
                  key: U,
                  value: A.value
                }, {
                  default: le(() => [Ce(ie(A.name), 1)]),
                  _: 2
                }, 1032, ["value"]))), 128))]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])])) : te("", !0)];
            }),
            _: 2
          }, 1032, ["label"])) : te("", !0)], 64);
        }), 256))]),
        _: 1
      });
    };
  }
});
const Cg = /* @__PURE__ */ Se(kg, [["__scopeId", "data-v-6628d73a"]]);
function Sg(e, t, n, l) {
  let o = e(), r = t.value.cBlock || {}, a = r.props ? r.props : {}, i = P([]);
  Object.keys(a).forEach((c) => {
    a[c].type && (a[c].key = c, i.value.push(a[c]));
  });
  let s = d(Cg), u = d(Ha);
  return d("div", {
    style: "height: 100%"
  }, [t.value.focusBlock.length ? d("div", {
    class: "control-container"
  }, [d($i, {
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
        editorControlView: i.value,
        currentBlock: r
      }, null), d("div", null, [o])])]
    })]
  })]) : d("div", {
    class: "control-container"
  }, [d($i, {
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
      }, [d(Ss, {
        style: {
          width: "100%"
        },
        "label-align": "left",
        "auto-label-width": !0,
        model: {},
        layout: "vertical"
      }, {
        default: () => [d(on, {
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
          }, [Ce("%")])]
        }), d(on, {
          label: "背景色"
        }, {
          default: () => [d(La, {
            modelValue: n.container.backgroundColor,
            "onUpdate:modelValue": (c) => n.container.backgroundColor = c,
            showText: !0,
            disabledAlpha: !0
          }, null)]
        }), d(on, {
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
const ki = /* @__PURE__ */ N({
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
    let t = P({});
    function n() {
      e.componentLists.filter((o) => o.disabled == null ? !0 : !o.disabled).forEach((o) => {
        t.value[o.group] || (t.value[o.group] = []), !t.value[o.group].find((r) => o.name == r.name) && t.value[o.group].push(o);
      });
      for (let o in t.value)
        t.value[o] = t.value[o].filter((r, a) => {
          var i;
          return e.builtInComsControlView ? (i = e.builtInComs) == null ? void 0 : i.includes(r.name) : !0;
        }), (!t.value[o] || !t.value[o].length) && delete t.value[o];
    }
    n(), Is.on(() => {
      n();
    });
    function l(o) {
      return o.sort((r, a) => (r.sort ? r.sort : 0) - (a.sort ? a.sort : 0));
    }
    return () => d(we, null, [Object.keys(t.value).map((o) => d("div", {
      class: "group-container"
    }, [d("div", {
      class: "title"
    }, [o]), d("div", {
      class: "group-container-content"
    }, [l(t.value[o]).map((r) => r != null && r.hide ? null : d("div", {
      class: "editer-menu-content-block",
      draggable: !0,
      onDragstart: (a) => e.menuDragInfo.dragstart(a, r),
      onDragend: e.menuDragInfo.dragend.bind(e.menuDragInfo),
      onClick: (a) => e.menuDragInfo.click(a, r)
    }, [d("div", {
      class: "icon-box"
    }, [d("img", {
      class: "icon",
      src: r.icon,
      alt: ""
    }, null), d("img", {
      class: "activeIcon",
      src: r.activeIcon,
      alt: ""
    }, null)]), d("span", {
      class: "editor-priview-label"
    }, [r.label])]))])]))]);
  }
}), rt = (e) => (He("data-v-9674b51e"), e = e(), We(), e), Vg = {
  class: "editor-built-in-control-base-title"
}, Og = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("div", {
  class: "line"
}, null, -1)), Eg = {
  class: "font"
}, xg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), Bg = [xg], Ig = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("div", {
  class: "vline"
}, null, -1)), Pg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), jg = [Pg], Tg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("div", {
  class: "vline"
}, null, -1)), Mg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), Dg = [Mg], zg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("div", {
  class: "vline"
}, null, -1)), Ag = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), Lg = [Ag], Fg = {
  class: "letterSpacing flex"
}, Ng = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("span", null, "字间距", -1)), Rg = {
  class: "flex: 1"
}, qg = {
  class: "letterSpacing flex mt24"
}, Hg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("span", null, "行间距", -1)), Wg = {
  class: "flex: 1"
}, Ug = {
  class: "letterSpacing flex mt24"
}, Kg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("span", null, "左右间距", -1)), Yg = {
  class: "flex: 1"
}, Gg = {
  class: "letterSpacing flex mt24"
}, Xg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("span", null, "上间距", -1)), Zg = {
  class: "flex: 1"
}, Qg = {
  class: "letterSpacing flex mt24"
}, Jg = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("span", null, "下间距", -1)), eb = {
  class: "flex: 1"
}, tb = {
  class: "letterSpacing flex mt24"
}, nb = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("span", null, "背景色", -1)), lb = {
  class: "flex: 1"
}, ob = {
  class: "mt24 mb48"
}, ab = /* @__PURE__ */ rt(() => /* @__PURE__ */ v("div", {
  class: "img-title"
}, "背景图", -1)), rb = /* @__PURE__ */ N({
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
      const r = Jn, a = Es, i = La;
      return y(), O("div", Vg, [Og, v("div", Eg, [d(r, {
        content: "居中",
        position: "top"
      }, {
        default: le(() => [(y(), O("svg", {
          t: "1726044272489",
          class: G(["icon", {
            active: e.textAlign == "1"
          }]),
          viewBox: "0 0 1024 1024",
          width: "200",
          height: "200",
          onClick: o[0] || (o[0] = (s) => n("textAlign", e.textAlign == "1" ? "2" : "1"))
        }, Bg, 2))]),
        _: 1
      }), Ig, d(r, {
        content: "加粗",
        position: "top"
      }, {
        default: le(() => [(y(), O("svg", {
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
        }, jg, 2))]),
        _: 1
      }), Tg, d(r, {
        content: "倾斜",
        position: "top"
      }, {
        default: le(() => [(y(), O("svg", {
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
        }, Dg, 2))]),
        _: 1
      }), zg, d(r, {
        content: "下划线",
        position: "top"
      }, {
        default: le(() => [(y(), O("svg", {
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
        }, Lg, 2))]),
        _: 1
      })]), v("div", Fg, [Ng, v("div", Rg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.letterSpacing.defaultValue,
        "onUpdate:modelValue": o[4] || (o[4] = (s) => e.block.props.letterSpacing.defaultValue = s)
      }, null, 8, ["modelValue"])])]), v("div", qg, [Hg, v("div", Wg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.lineHeight.defaultValue,
        "onUpdate:modelValue": o[5] || (o[5] = (s) => e.block.props.lineHeight.defaultValue = s)
      }, null, 8, ["modelValue"])])]), v("div", Ug, [Kg, v("div", Yg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.leftRightPadding.defaultValue,
        "onUpdate:modelValue": o[6] || (o[6] = (s) => e.block.props.leftRightPadding.defaultValue = s)
      }, null, 8, ["modelValue"])])]), v("div", Gg, [Xg, v("div", Zg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginTop.defaultValue,
        "onUpdate:modelValue": o[7] || (o[7] = (s) => e.block.props.marginTop.defaultValue = s)
      }, null, 8, ["modelValue"])])]), v("div", Qg, [Jg, v("div", eb, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginBottom.defaultValue,
        "onUpdate:modelValue": o[8] || (o[8] = (s) => e.block.props.marginBottom.defaultValue = s)
      }, null, 8, ["modelValue"])])]), v("div", tb, [nb, v("div", lb, [d(i, {
        "show-history": "",
        "show-preset": "",
        showText: "",
        disabledAlpha: "",
        modelValue: e.block.props.backgroundColor.defaultValue,
        "onUpdate:modelValue": o[9] || (o[9] = (s) => e.block.props.backgroundColor.defaultValue = s)
      }, null, 8, ["modelValue"])])]), v("div", ob, [ab, d(Ha, {
        modelValue: e.block.props.backgroundImage.defaultValue,
        "onUpdate:modelValue": o[10] || (o[10] = (s) => e.block.props.backgroundImage.defaultValue = s)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const ib = /* @__PURE__ */ Se(rb, [["__scopeId", "data-v-9674b51e"]]), sb = /* @__PURE__ */ N({
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
    return (t, n) => (y(), O("div", {
      class: "editor-built-in-registor-base-title",
      style: pe(e.style)
    }, [v("div", {
      class: G(["text", {
        minHeight: !e.text
      }])
    }, ie(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
  }
});
const ub = /* @__PURE__ */ Se(sb, [["__scopeId", "data-v-ad83ebe6"]]), cb = {
  group: "基础组件",
  name: "baseText",
  sort: 2,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  render: (e) => {
    let t = h(() => ({
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
    return d(ub, {
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
    function l(r) {
      try {
        r.type && (e.props[r.type].defaultValue = r.value, t(e));
      } catch {
      }
    }
    return d(ib, {
      block: e,
      textAlign: n.textAlign.defaultValue,
      fontWeight: n.fontWeight.defaultValue,
      fontStyle: n.fontStyle.defaultValue,
      textDecoration: n.textDecoration.defaultValue,
      onChange: l
    });
  }
}, db = ["src"], fb = {
  key: 1,
  class: "empty"
}, vb = /* @__PURE__ */ N({
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
    return (t, n) => (y(), O("div", {
      class: "editor-built-in-registor-base-img",
      style: pe(e.style)
    }, [e.src ? (y(), O("img", {
      key: 0,
      class: "render-img",
      src: e.src,
      alt: ""
    }, null, 8, db)) : (y(), O("div", fb, "请在控制器中上传图片+"))], 4));
  }
});
const pb = /* @__PURE__ */ Se(vb, [["__scopeId", "data-v-ac936ab1"]]), hb = {
  group: "基础组件",
  name: "baseImg",
  sort: 3,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (e) => {
    let t = e.props, n = h(() => ({
      marginTop: (t != null && t.marginTop ? t.marginTop.defaultValue : 0) + "px",
      marginBottom: (t != null && t.marginBottom ? t.marginBottom.defaultValue : 0) + "px"
    }));
    return d(pb, {
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
      defaultValue: 12,
      min: 0,
      max: 100
    }
  },
  controlView: (e, t) => d("div", null, null)
}, mb = {
  key: 0,
  class: "tip"
}, gb = /* @__PURE__ */ N({
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
    let n = P(null);
    function l(r) {
      var a, i, s, u, c, f, m, b;
      (a = n.value) != null && a.parentNode && r ? (((i = n.value) == null ? void 0 : i.parentNode).style.position = "absolute", ((s = n.value) == null ? void 0 : s.parentNode).style.zIndex = 10, ((u = n.value) == null ? void 0 : u.parentNode).style.bottom = t.visibleSubmitNum ? "0px" : "20px", ((c = n.value) == null ? void 0 : c.parentNode).style.top = "auto") : (((f = n.value) == null ? void 0 : f.parentNode).style.position = "relative", ((m = n.value) == null ? void 0 : m.parentNode).style.top = 0, ((b = n.value) == null ? void 0 : b.parentNode).style.bottom = "auto");
    }
    function o(r) {
      return r.replace("$num", t.submitNum + "");
    }
    return xe(() => {
      l(t.fixedBottom);
    }), Tt(() => {
      l(t.fixedBottom);
    }), be(() => t.fixedBottom, () => {
      l(t.fixedBottom);
    }), (r, a) => (y(), O("div", {
      class: "editor-built-in-registor-base-submit",
      ref_key: "baseSubmit",
      ref: n
    }, [v("div", {
      class: "submit",
      style: pe(e.style)
    }, ie(e.text), 5), e.visibleSubmitNum ? (y(), O("div", mb, " ——" + ie(o(e.submitTip)) + "—— ", 1)) : te("", !0)], 512));
  }
});
const bb = /* @__PURE__ */ Se(gb, [["__scopeId", "data-v-caa2b586"]]);
const el = (e) => (He("data-v-e66b9f5d"), e = e(), We(), e), yb = {
  class: "editor-built-in-control-base-submit"
}, _b = /* @__PURE__ */ el(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), $b = {
  class: "flex mt24 options"
}, wb = /* @__PURE__ */ el(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "是否吸底", -1)), kb = {
  class: "flex mt24 options"
}, Cb = /* @__PURE__ */ el(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "显示提交次数", -1)), Sb = {
  key: 0,
  class: "flex mt24 options"
}, Vb = /* @__PURE__ */ el(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "初始次数", -1)), Ob = {
  class: "pl24"
}, Eb = {
  key: 1,
  class: "flex mt24 options"
}, xb = /* @__PURE__ */ el(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "提示语内容", -1)), Bb = [xb], Ib = {
  key: 2,
  class: "mt24"
}, Pb = /* @__PURE__ */ N({
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
      const r = wt, a = Gt;
      return y(), O("div", yb, [_b, v("div", $b, [wb, v("div", null, [d(r, {
        "default-checked": e.block.props.fixedBottom.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "fixedBottom"))
      }, null, 8, ["default-checked"])])]), v("div", kb, [Cb, v("div", null, [d(r, {
        "default-checked": e.block.props.visibleSubmitNum.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "visibleSubmitNum"))
      }, null, 8, ["default-checked"])])]), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), O("div", Sb, [Vb, v("div", Ob, [d(a, {
        placeholder: "请输入初始次数",
        modelValue: e.block.props.submitNum.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.submitNum.defaultValue = i)
      }, null, 8, ["modelValue"])])])) : te("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), O("div", Eb, Bb)) : te("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), O("div", Ib, [d(a, {
        placeholder: "提示语",
        modelValue: e.block.props.submitTip.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.submitTip.defaultValue = i)
      }, null, 8, ["modelValue"])])) : te("", !0)]);
    };
  }
});
const jb = /* @__PURE__ */ Se(Pb, [["__scopeId", "data-v-e66b9f5d"]]), Tb = {
  group: "基础组件",
  name: "baseSubmit",
  label: "提交按钮",
  sort: 4,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  render: (e) => {
    let t = e.props, n = h(() => ({
      backgroundColor: t.backgroundColor.defaultValue,
      color: t.color.defaultValue,
      borderRadius: t.borderRadius.defaultValue + "px",
      width: t.width.defaultValue + "%",
      marginTop: t.marginTop.defaultValue + "px",
      marginBottom: t.marginBottom.defaultValue + "px"
    }));
    return d(bb, {
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
    link: {
      label: "超链接",
      type: "input",
      defaultValue: ""
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
  controlView: (e, t) => d(jb, {
    block: e
  })
}, Mb = /* @__PURE__ */ N({
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
    const t = e;
    let n = h(() => t.text.split(`
`));
    return (l, o) => (y(), O("div", {
      class: "editor-built-in-registor-base-title",
      style: pe({
        ...e.style
      })
    }, [(y(!0), O(we, null, Ge(Gn(n), (r) => (y(), O("div", null, ie(r), 1))), 256))], 4));
  }
});
const Db = /* @__PURE__ */ Se(Mb, [["__scopeId", "data-v-25916970"]]), zb = {
  group: "基础组件",
  label: "表单标题",
  name: "baseTitle",
  pushType: "unshift",
  sort: 1,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  render: (e) => {
    let t = h(() => ({
      color: e.props.color.defaultValue,
      fontSize: e.props.fontSize.defaultValue + "px",
      lineHeight: e.props.lineHeight.defaultValue + "px",
      // height: block.props.lineHeight.defaultValue + "px",
      marginBottom: e.props.marginBottom.defaultValue + "px",
      marginTop: e.props.marginTop.defaultValue + "px"
    }));
    return d(Db, {
      style: t.value,
      text: e.props.text.defaultValue
    });
  },
  props: {
    text: {
      defaultValue: "报名表单",
      type: "textarea",
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
      defaultValue: 28,
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
}, Ab = {
  class: "successImg"
}, Lb = ["src"], Fb = {
  class: "successText"
}, Nb = {
  class: "successDesc"
}, Rb = {
  class: "successQR"
}, qb = ["src"], Hb = /* @__PURE__ */ N({
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
    let n = P(0);
    xe(() => {
      let a = document.querySelector(".visual-editor-area-content");
      console.log(a.offsetHeight), n.value = a != null && a.offsetHeight ? a == null ? void 0 : a.offsetHeight : 600;
    });
    function l() {
      const a = t.successLink, i = /https?:\/\/[^\s]+/, s = a.match(i) ? a.match(i)[0] : null;
      s && window.open(s);
    }
    function o() {
      return t.successDesc.split(`
`);
    }
    function r() {
      return t.successBottomText.split(`
`);
    }
    return (a, i) => (y(), O("div", {
      class: "editor-built-in-registor-base-success",
      style: pe({
        height: Gn(n) + "px"
      })
    }, [v("div", Ab, [v("img", {
      src: e.successSrc,
      alt: ""
    }, null, 8, Lb)]), v("div", Fb, [v("span", {
      style: pe({
        color: e.successColor
      })
    }, ie(e.successText), 5)]), v("div", Nb, [(y(!0), O(we, null, Ge(o(), (s) => (y(), O("div", null, [v("span", {
      style: pe({
        color: e.successDescColor
      })
    }, ie(s), 5)]))), 256))]), v("div", Rb, [v("img", {
      src: e.successQR,
      alt: ""
    }, null, 8, qb)]), v("div", {
      class: "successBottomText",
      onClick: l
    }, [(y(!0), O(we, null, Ge(r(), (s, u) => (y(), O("div", {
      key: u
    }, [v("span", {
      style: pe({
        color: e.successBottomColor
      })
    }, ie(s), 5)]))), 128))])], 4));
  }
});
const Wb = /* @__PURE__ */ Se(Hb, [["__scopeId", "data-v-d7323827"]]), Ub = {
  group: "基础组件",
  name: "baseSuccess",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  hide: !1,
  render: (e) => {
    let t = e.props;
    return d(Wb, {
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
      type: "textarea"
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
      type: "textarea"
    },
    successLinkType: {
      defaultValue: "1",
      label: "跳转类型",
      type: "radio",
      options: [{
        name: "链接跳转",
        value: "1"
      }, {
        name: "文件跳转",
        value: "2"
      }]
    },
    successFileLink: {
      defaultValue: "",
      label: "跳转文件",
      type: "fileUpload",
      isShowFunc(e) {
        console.log(e);
        try {
          if (e.successLinkType && e.successLinkType.defaultValue)
            return e.successLinkType.defaultValue == "2";
        } catch (t) {
          console.log(t);
        }
        return !0;
      }
    },
    successLink: {
      defaultValue: "",
      label: "跳转链接",
      type: "input",
      isShowFunc(e) {
        console.log(e);
        try {
          if (e.successLinkType && e.successLinkType.defaultValue)
            return e.successLinkType.defaultValue == "1";
        } catch (t) {
          console.log(t);
        }
        return !0;
      }
    },
    successBottomColor: {
      defaultValue: "#fff",
      label: "相关提示信息文字颜色",
      type: "color"
    }
  },
  controlView: (e, t) => d("div", null, null)
}, Kb = (e) => (He("data-v-994aa073"), e = e(), We(), e), Yb = {
  class: "title-tip"
}, Gb = {
  key: 0,
  class: "red"
}, Xb = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "8px",
    "margin-bottom": "2px"
  }
}, Zb = {
  class: "form-item"
}, Qb = /* @__PURE__ */ Kb(() => /* @__PURE__ */ v("div", {
  class: "control-input"
}, null, -1)), Jb = {
  class: "text"
}, ey = /* @__PURE__ */ N({
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
    return (t, n) => (y(), O("div", {
      class: "editor-built-in-commen-multiple",
      style: pe(e.style)
    }, [v("div", Yb, [e.isRequire ? (y(), O("span", Gb, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), e.tip.trim().length > 0 ? (y(), O("div", Xb, ie(e.tip), 1)) : te("", !0), v("div", Zb, [(y(!0), O(we, null, Ge(e.options, (l, o) => (y(), O("div", {
      class: "item",
      key: o
    }, [Qb, v("div", Jb, ie(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const ty = /* @__PURE__ */ Se(ey, [["__scopeId", "data-v-994aa073"]]);
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ci(e, t) {
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
    t % 2 ? Ci(Object(n), !0).forEach(function(l) {
      ny(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ci(Object(n)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return e;
}
function Sl(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sl = function(t) {
    return typeof t;
  } : Sl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sl(e);
}
function ny(e, t, n) {
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
function ly(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, r;
  for (r = 0; r < l.length; r++)
    o = l[r], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function oy(e, t) {
  if (e == null)
    return {};
  var n = ly(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      l = r[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
var ay = "1.15.3";
function It(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Mt = It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), tl = It(/Edge/i), Si = It(/firefox/i), Ln = It(/safari/i) && !It(/chrome/i) && !It(/android/i), js = It(/iP(ad|od|hone)/i), Ts = It(/chrome/i) && It(/android/i), Ms = {
  capture: !1,
  passive: !1
};
function ke(e, t, n) {
  e.addEventListener(t, n, !Mt && Ms);
}
function $e(e, t, n) {
  e.removeEventListener(t, n, !Mt && Ms);
}
function ql(e, t) {
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
function Ds(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function bt(e, t, n, l) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && ql(e, t) : ql(e, t)) || l && e === n)
        return e;
      if (e === n)
        break;
    } while (e = Ds(e));
  }
  return null;
}
var Vi = /\s+/g;
function ft(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(Vi, " ").replace(" " + t + " ", " ");
      e.className = (l + (n ? " " + t : "")).replace(Vi, " ");
    }
}
function ve(e, t, n) {
  var l = e && e.style;
  if (l) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in l) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), l[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function $n(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var l = ve(e, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function zs(e, t, n) {
  if (e) {
    var l = e.getElementsByTagName(t), o = 0, r = l.length;
    if (n)
      for (; o < r; o++)
        n(l[o], o);
    return l;
  }
  return [];
}
function kt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Re(e, t, n, l, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, a, i, s, u, c, f;
    if (e !== window && e.parentNode && e !== kt() ? (r = e.getBoundingClientRect(), a = r.top, i = r.left, s = r.bottom, u = r.right, c = r.height, f = r.width) : (a = 0, i = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !Mt))
      do
        if (o && o.getBoundingClientRect && (ve(o, "transform") !== "none" || n && ve(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          a -= m.top + parseInt(ve(o, "border-top-width")), i -= m.left + parseInt(ve(o, "border-left-width")), s = a + r.height, u = i + r.width;
          break;
        }
      while (o = o.parentNode);
    if (l && e !== window) {
      var b = $n(o || e), _ = b && b.a, g = b && b.d;
      b && (a /= g, i /= _, f /= _, c /= g, s = a + c, u = i + f);
    }
    return {
      top: a,
      left: i,
      bottom: s,
      right: u,
      width: f,
      height: c
    };
  }
}
function Oi(e, t, n) {
  for (var l = qt(e, !0), o = Re(e)[t]; l; ) {
    var r = Re(l)[n], a = void 0;
    if (n === "top" || n === "left" ? a = o >= r : a = o <= r, !a)
      return l;
    if (l === kt())
      break;
    l = qt(l, !1);
  }
  return !1;
}
function Cn(e, t, n, l) {
  for (var o = 0, r = 0, a = e.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== de.ghost && (l || a[r] !== de.dragged) && bt(a[r], n.draggable, e, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function Wa(e, t) {
  for (var n = e.lastElementChild; n && (n === de.ghost || ve(n, "display") === "none" || t && !ql(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function mt(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== de.clone && (!t || ql(e, t)) && n++;
  return n;
}
function Ei(e) {
  var t = 0, n = 0, l = kt();
  if (e)
    do {
      var o = $n(e), r = o.a, a = o.d;
      t += e.scrollLeft * r, n += e.scrollTop * a;
    } while (e !== l && (e = e.parentNode));
  return [t, n];
}
function ry(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var l in t)
        if (t.hasOwnProperty(l) && t[l] === e[n][l])
          return Number(n);
    }
  return -1;
}
function qt(e, t) {
  if (!e || !e.getBoundingClientRect)
    return kt();
  var n = e, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = ve(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return kt();
        if (l || t)
          return n;
        l = !0;
      }
    }
  while (n = n.parentNode);
  return kt();
}
function iy(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function ea(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function As(e, t) {
  return function() {
    if (!Fn) {
      var n = arguments, l = this;
      n.length === 1 ? e.call(l, n[0]) : e.apply(l, n), Fn = setTimeout(function() {
        Fn = void 0;
      }, t);
    }
  };
}
function sy() {
  clearTimeout(Fn), Fn = void 0;
}
function Ls(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Fs(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ns(e, t, n) {
  var l = {};
  return Array.from(e.children).forEach(function(o) {
    var r, a, i, s;
    if (!(!bt(o, t.draggable, e, !1) || o.animated || o === n)) {
      var u = Re(o);
      l.left = Math.min((r = l.left) !== null && r !== void 0 ? r : 1 / 0, u.left), l.top = Math.min((a = l.top) !== null && a !== void 0 ? a : 1 / 0, u.top), l.right = Math.max((i = l.right) !== null && i !== void 0 ? i : -1 / 0, u.right), l.bottom = Math.max((s = l.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var ut = "Sortable" + new Date().getTime();
function uy() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(ve(o, "display") === "none" || o === de.ghost)) {
            e.push({
              target: o,
              rect: Re(o)
            });
            var r = St({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = $n(o, !0);
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
      e.splice(ry(e, {
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
        var s = 0, u = i.target, c = u.fromRect, f = Re(u), m = u.prevFromRect, b = u.prevToRect, _ = i.rect, g = $n(u, !0);
        g && (f.top -= g.f, f.left -= g.e), u.toRect = f, u.thisAnimationDuration && ea(m, f) && !ea(c, f) && // Make sure animatingRect is on line between toRect & fromRect
        (_.top - f.top) / (_.left - f.left) === (c.top - f.top) / (c.left - f.left) && (s = dy(_, m, b, o.options)), ea(f, c) || (u.prevFromRect = c, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, _, f, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, a) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, o, r, a) {
      if (a) {
        ve(l, "transition", ""), ve(l, "transform", "");
        var i = $n(this.el), s = i && i.a, u = i && i.d, c = (o.left - r.left) / (s || 1), f = (o.top - r.top) / (u || 1);
        l.animatingX = !!c, l.animatingY = !!f, ve(l, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = cy(l), ve(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ve(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          ve(l, "transition", ""), ve(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, a);
      }
    }
  };
}
function cy(e) {
  return e.offsetWidth;
}
function dy(e, t, n, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * l.animation;
}
var pn = [], ta = {
  initializeByDefault: !0
}, nl = {
  mount: function(t) {
    for (var n in ta)
      ta.hasOwnProperty(n) && !(n in t) && (t[n] = ta[n]);
    pn.forEach(function(l) {
      if (l.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), pn.push(t);
  },
  pluginEvent: function(t, n, l) {
    var o = this;
    this.eventCanceled = !1, l.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = t + "Global";
    pn.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](St({
        sortable: n
      }, l)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](St({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(t, n, l, o) {
    pn.forEach(function(i) {
      var s = i.pluginName;
      if (!(!t.options[s] && !i.initializeByDefault)) {
        var u = new i(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, Pt(l, u.defaults);
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
    return pn.forEach(function(o) {
      typeof o.eventProperties == "function" && Pt(l, o.eventProperties.call(n[o.pluginName], t));
    }), l;
  },
  modifyOption: function(t, n, l) {
    var o;
    return pn.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (o = r.optionListeners[n].call(t[r.pluginName], l));
    }), o;
  }
};
function fy(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, r = e.cloneEl, a = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, f = e.newDraggableIndex, m = e.originalEvent, b = e.putSortable, _ = e.extraEventProperties;
  if (t = t || n && n[ut], !!t) {
    var g, T = t.options, E = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Mt && !tl ? g = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (g = document.createEvent("Event"), g.initEvent(l, !0, !0)), g.to = a || n, g.from = i || n, g.item = o || n, g.clone = r, g.oldIndex = s, g.newIndex = u, g.oldDraggableIndex = c, g.newDraggableIndex = f, g.originalEvent = m, g.pullMode = b ? b.lastPutMode : void 0;
    var k = St(St({}, _), nl.getEventProperties(l, t));
    for (var S in k)
      g[S] = k[S];
    n && n.dispatchEvent(g), T[E] && T[E].call(t, g);
  }
}
var vy = ["evt"], st = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, r = oy(l, vy);
  nl.pluginEvent.bind(de)(t, n, St({
    dragEl: ee,
    parentEl: ze,
    ghostEl: me,
    rootEl: Ie,
    nextEl: en,
    lastDownEl: Vl,
    cloneEl: Te,
    cloneHidden: Rt,
    dragStarted: jn,
    putSortable: Je,
    activeSortable: de.active,
    originalEvent: o,
    oldIndex: bn,
    oldDraggableIndex: Nn,
    newIndex: vt,
    newDraggableIndex: Ft,
    hideGhostForTarget: Ws,
    unhideGhostForTarget: Us,
    cloneNowHidden: function() {
      Rt = !0;
    },
    cloneNowShown: function() {
      Rt = !1;
    },
    dispatchSortableEvent: function(i) {
      ot({
        sortable: n,
        name: i,
        originalEvent: o
      });
    }
  }, r));
};
function ot(e) {
  fy(St({
    putSortable: Je,
    cloneEl: Te,
    targetEl: ee,
    rootEl: Ie,
    oldIndex: bn,
    oldDraggableIndex: Nn,
    newIndex: vt,
    newDraggableIndex: Ft
  }, e));
}
var ee, ze, me, Ie, en, Vl, Te, Rt, bn, vt, Nn, Ft, pl, Je, mn = !1, Hl = !1, Wl = [], Zt, gt, na, la, xi, Bi, jn, hn, Rn, qn = !1, hl = !1, Ol, tt, oa = [], ya = !1, Ul = [], ro = typeof document < "u", ml = js, Ii = tl || Mt ? "cssFloat" : "float", py = ro && !Ts && !js && "draggable" in document.createElement("div"), Rs = function() {
  if (ro) {
    if (Mt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), qs = function(t, n) {
  var l = ve(t), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), r = Cn(t, 0, n), a = Cn(t, 1, n), i = r && ve(r), s = a && ve(a), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Re(r).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Re(a).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && i.float && i.float !== "none") {
    var f = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= o && l[Ii] === "none" || a && l[Ii] === "none" && u + c > o) ? "vertical" : "horizontal";
}, hy = function(t, n, l) {
  var o = l ? t.left : t.top, r = l ? t.right : t.bottom, a = l ? t.width : t.height, i = l ? n.left : n.top, s = l ? n.right : n.bottom, u = l ? n.width : n.height;
  return o === i || r === s || o + a / 2 === i + u / 2;
}, my = function(t, n) {
  var l;
  return Wl.some(function(o) {
    var r = o[ut].options.emptyInsertThreshold;
    if (!(!r || Wa(o))) {
      var a = Re(o), i = t >= a.left - r && t <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (i && s)
        return l = o;
    }
  }), l;
}, Hs = function(t) {
  function n(r, a) {
    return function(i, s, u, c) {
      var f = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (r == null && (a || f))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(i, s, u, c), a)(i, s, u, c);
      var m = (a ? i : s).options.group.name;
      return r === !0 || typeof r == "string" && r === m || r.join && r.indexOf(m) > -1;
    };
  }
  var l = {}, o = t.group;
  (!o || Sl(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = n(o.pull, !0), l.checkPut = n(o.put), l.revertClone = o.revertClone, t.group = l;
}, Ws = function() {
  !Rs && me && ve(me, "display", "none");
}, Us = function() {
  !Rs && me && ve(me, "display", "");
};
ro && !Ts && document.addEventListener("click", function(e) {
  if (Hl)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Hl = !1, !1;
}, !0);
var Qt = function(t) {
  if (ee) {
    t = t.touches ? t.touches[0] : t;
    var n = my(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[ut]._onDragOver(l);
    }
  }
}, gy = function(t) {
  ee && ee.parentNode[ut]._isOutsideThisEl(t.target);
};
function de(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = Pt({}, t), e[ut] = this;
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
      return qs(e, this.options);
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
    supportPointer: de.supportPointer !== !1 && "PointerEvent" in window && !Ln,
    emptyInsertThreshold: 5
  };
  nl.initializePlugins(this, e, n);
  for (var l in n)
    !(l in t) && (t[l] = n[l]);
  Hs(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : py, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ke(e, "pointerdown", this._onTapStart) : (ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), Wl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Pt(this, uy());
}
de.prototype = /** @lends Sortable.prototype */
{
  constructor: de,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (hn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, ee) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, l = this.el, o = this.options, r = o.preventOnFilter, a = t.type, i = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (i || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = o.filter;
      if (Sy(l), !ee && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = bt(s, o.draggable, l, !1), !(s && s.animated) && Vl !== s)) {
        if (bn = mt(s), Nn = mt(s, o.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
            ot({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: l,
              fromEl: l
            }), st("filter", n, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(f) {
          if (f = bt(u, f.trim(), l, !1), f)
            return ot({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: l,
              toEl: l
            }), st("filter", n, {
              evt: t
            }), !0;
        }), c)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !bt(u, o.handle, l, !1) || this._prepareDragStart(t, i, s);
      }
    }
  },
  _prepareDragStart: function(t, n, l) {
    var o = this, r = o.el, a = o.options, i = r.ownerDocument, s;
    if (l && !ee && l.parentNode === r) {
      var u = Re(l);
      if (Ie = r, ee = l, ze = ee.parentNode, en = ee.nextSibling, Vl = l, pl = a.group, de.dragged = ee, Zt = {
        target: ee,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, xi = Zt.clientX - u.left, Bi = Zt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, ee.style["will-change"] = "all", s = function() {
        if (st("delayEnded", o, {
          evt: t
        }), de.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Si && o.nativeDraggable && (ee.draggable = !0), o._triggerDragStart(t, n), ot({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), ft(ee, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        zs(ee, c.trim(), aa);
      }), ke(i, "dragover", Qt), ke(i, "mousemove", Qt), ke(i, "touchmove", Qt), ke(i, "mouseup", o._onDrop), ke(i, "touchend", o._onDrop), ke(i, "touchcancel", o._onDrop), Si && this.nativeDraggable && (this.options.touchStartThreshold = 4, ee.draggable = !0), st("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(tl || Mt))) {
        if (de.eventCanceled) {
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
    ee && aa(ee), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    $e(t, "mouseup", this._disableDelayedDrag), $e(t, "touchend", this._disableDelayedDrag), $e(t, "touchcancel", this._disableDelayedDrag), $e(t, "mousemove", this._delayedDragTouchMoveHandler), $e(t, "touchmove", this._delayedDragTouchMoveHandler), $e(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : n ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(ee, "dragend", this), ke(Ie, "dragstart", this._onDragStart));
    try {
      document.selection ? El(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (mn = !1, Ie && ee) {
      st("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && ke(document, "dragover", gy);
      var l = this.options;
      !t && ft(ee, l.dragClass, !1), ft(ee, l.ghostClass, !0), de.active = this, t && this._appendGhost(), ot({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (gt) {
      this._lastX = gt.clientX, this._lastY = gt.clientY, Ws();
      for (var t = document.elementFromPoint(gt.clientX, gt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(gt.clientX, gt.clientY), t !== n); )
        n = t;
      if (ee.parentNode[ut]._isOutsideThisEl(t), n)
        do {
          if (n[ut]) {
            var l = void 0;
            if (l = n[ut]._onDragOver({
              clientX: gt.clientX,
              clientY: gt.clientY,
              target: t,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Ds(n));
      Us();
    }
  },
  _onTouchMove: function(t) {
    if (Zt) {
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, r = t.touches ? t.touches[0] : t, a = me && $n(me, !0), i = me && a && a.a, s = me && a && a.d, u = ml && tt && Ei(tt), c = (r.clientX - Zt.clientX + o.x) / (i || 1) + (u ? u[0] - oa[0] : 0) / (i || 1), f = (r.clientY - Zt.clientY + o.y) / (s || 1) + (u ? u[1] - oa[1] : 0) / (s || 1);
      if (!de.active && !mn) {
        if (l && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (me) {
        a ? (a.e += c - (na || 0), a.f += f - (la || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ve(me, "webkitTransform", m), ve(me, "mozTransform", m), ve(me, "msTransform", m), ve(me, "transform", m), na = c, la = f, gt = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!me) {
      var t = this.options.fallbackOnBody ? document.body : Ie, n = Re(ee, !0, ml, !0, t), l = this.options;
      if (ml) {
        for (tt = t; ve(tt, "position") === "static" && ve(tt, "transform") === "none" && tt !== document; )
          tt = tt.parentNode;
        tt !== document.body && tt !== document.documentElement ? (tt === document && (tt = kt()), n.top += tt.scrollTop, n.left += tt.scrollLeft) : tt = kt(), oa = Ei(tt);
      }
      me = ee.cloneNode(!0), ft(me, l.ghostClass, !1), ft(me, l.fallbackClass, !0), ft(me, l.dragClass, !0), ve(me, "transition", ""), ve(me, "transform", ""), ve(me, "box-sizing", "border-box"), ve(me, "margin", 0), ve(me, "top", n.top), ve(me, "left", n.left), ve(me, "width", n.width), ve(me, "height", n.height), ve(me, "opacity", "0.8"), ve(me, "position", ml ? "absolute" : "fixed"), ve(me, "zIndex", "100000"), ve(me, "pointerEvents", "none"), de.ghost = me, t.appendChild(me), ve(me, "transform-origin", xi / parseInt(me.style.width) * 100 + "% " + Bi / parseInt(me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var l = this, o = t.dataTransfer, r = l.options;
    if (st("dragStart", this, {
      evt: t
    }), de.eventCanceled) {
      this._onDrop();
      return;
    }
    st("setupClone", this), de.eventCanceled || (Te = Fs(ee), Te.removeAttribute("id"), Te.draggable = !1, Te.style["will-change"] = "", this._hideClone(), ft(Te, this.options.chosenClass, !1), de.clone = Te), l.cloneId = El(function() {
      st("clone", l), !de.eventCanceled && (l.options.removeCloneOnHide || Ie.insertBefore(Te, ee), l._hideClone(), ot({
        sortable: l,
        name: "clone"
      }));
    }), !n && ft(ee, r.dragClass, !0), n ? (Hl = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : ($e(document, "mouseup", l._onDrop), $e(document, "touchend", l._onDrop), $e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(l, o, ee)), ke(document, "drop", l), ve(ee, "transform", "translateZ(0)")), mn = !0, l._dragStartId = El(l._dragStarted.bind(l, n, t)), ke(document, "selectstart", l), jn = !0, Ln && ve(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, r, a, i = this.options, s = i.group, u = de.active, c = pl === s, f = i.sort, m = Je || u, b, _ = this, g = !1;
    if (ya)
      return;
    function T(L, Q) {
      st(L, _, St({
        evt: t,
        isOwner: c,
        axis: b ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: f,
        fromSortable: m,
        target: l,
        completed: k,
        onMove: function(C, H) {
          return gl(Ie, n, ee, o, C, Re(C), t, H);
        },
        changed: S
      }, Q));
    }
    function E() {
      T("dragOverAnimationCapture"), _.captureAnimationState(), _ !== m && m.captureAnimationState();
    }
    function k(L) {
      return T("dragOverCompleted", {
        insertion: L
      }), L && (c ? u._hideClone() : u._showClone(_), _ !== m && (ft(ee, Je ? Je.options.ghostClass : u.options.ghostClass, !1), ft(ee, i.ghostClass, !0)), Je !== _ && _ !== de.active ? Je = _ : _ === de.active && Je && (Je = null), m === _ && (_._ignoreWhileAnimating = l), _.animateAll(function() {
        T("dragOverAnimationComplete"), _._ignoreWhileAnimating = null;
      }), _ !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (l === ee && !ee.animated || l === n && !l.animated) && (hn = null), !i.dragoverBubble && !t.rootEl && l !== document && (ee.parentNode[ut]._isOutsideThisEl(t.target), !L && Qt(t)), !i.dragoverBubble && t.stopPropagation && t.stopPropagation(), g = !0;
    }
    function S() {
      vt = mt(ee), Ft = mt(ee, i.draggable), ot({
        sortable: _,
        name: "change",
        toEl: n,
        newIndex: vt,
        newDraggableIndex: Ft,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = bt(l, i.draggable, n, !0), T("dragOver"), de.eventCanceled)
      return g;
    if (ee.contains(t.target) || l.animated && l.animatingX && l.animatingY || _._ignoreWhileAnimating === l)
      return k(!1);
    if (Hl = !1, u && !i.disabled && (c ? f || (a = ze !== Ie) : Je === this || (this.lastPutMode = pl.checkPull(this, u, ee, t)) && s.checkPut(this, u, ee, t))) {
      if (b = this._getDirection(t, l) === "vertical", o = Re(ee), T("dragOverValid"), de.eventCanceled)
        return g;
      if (a)
        return ze = Ie, E(), this._hideClone(), T("revert"), de.eventCanceled || (en ? Ie.insertBefore(ee, en) : Ie.appendChild(ee)), k(!0);
      var $ = Wa(n, i.draggable);
      if (!$ || $y(t, b, this) && !$.animated) {
        if ($ === ee)
          return k(!1);
        if ($ && n === t.target && (l = $), l && (r = Re(l)), gl(Ie, n, ee, o, l, r, t, !!l) !== !1)
          return E(), $ && $.nextSibling ? n.insertBefore(ee, $.nextSibling) : n.appendChild(ee), ze = n, S(), k(!0);
      } else if ($ && _y(t, b, this)) {
        var I = Cn(n, 0, i, !0);
        if (I === ee)
          return k(!1);
        if (l = I, r = Re(l), gl(Ie, n, ee, o, l, r, t, !1) !== !1)
          return E(), n.insertBefore(ee, I), ze = n, S(), k(!0);
      } else if (l.parentNode === n) {
        r = Re(l);
        var w = 0, V, R = ee.parentNode !== n, K = !hy(ee.animated && ee.toRect || o, l.animated && l.toRect || r, b), q = b ? "top" : "left", p = Oi(l, "top", "top") || Oi(ee, "top", "top"), B = p ? p.scrollTop : void 0;
        hn !== l && (V = r[q], qn = !1, hl = !K && i.invertSwap || R), w = wy(t, l, r, b, K ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, hl, hn === l);
        var x;
        if (w !== 0) {
          var z = mt(ee);
          do
            z -= w, x = ze.children[z];
          while (x && (ve(x, "display") === "none" || x === me));
        }
        if (w === 0 || x === l)
          return k(!1);
        hn = l, Rn = w;
        var A = l.nextElementSibling, U = !1;
        U = w === 1;
        var X = gl(Ie, n, ee, o, l, r, t, U);
        if (X !== !1)
          return (X === 1 || X === -1) && (U = X === 1), ya = !0, setTimeout(yy, 30), E(), U && !A ? n.appendChild(ee) : l.parentNode.insertBefore(ee, U ? A : l), p && Ls(p, 0, B - p.scrollTop), ze = ee.parentNode, V !== void 0 && !hl && (Ol = Math.abs(V - Re(l)[q])), S(), k(!0);
      }
      if (n.contains(ee))
        return k(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    $e(document, "mousemove", this._onTouchMove), $e(document, "touchmove", this._onTouchMove), $e(document, "pointermove", this._onTouchMove), $e(document, "dragover", Qt), $e(document, "mousemove", Qt), $e(document, "touchmove", Qt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    $e(t, "mouseup", this._onDrop), $e(t, "touchend", this._onDrop), $e(t, "pointerup", this._onDrop), $e(t, "touchcancel", this._onDrop), $e(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, l = this.options;
    if (vt = mt(ee), Ft = mt(ee, l.draggable), st("drop", this, {
      evt: t
    }), ze = ee && ee.parentNode, vt = mt(ee), Ft = mt(ee, l.draggable), de.eventCanceled) {
      this._nulling();
      return;
    }
    mn = !1, hl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), _a(this.cloneId), _a(this._dragStartId), this.nativeDraggable && ($e(document, "drop", this), $e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && ve(document.body, "user-select", ""), ve(ee, "transform", ""), t && (jn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), me && me.parentNode && me.parentNode.removeChild(me), (Ie === ze || Je && Je.lastPutMode !== "clone") && Te && Te.parentNode && Te.parentNode.removeChild(Te), ee && (this.nativeDraggable && $e(ee, "dragend", this), aa(ee), ee.style["will-change"] = "", jn && !mn && ft(ee, Je ? Je.options.ghostClass : this.options.ghostClass, !1), ft(ee, this.options.chosenClass, !1), ot({
      sortable: this,
      name: "unchoose",
      toEl: ze,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ie !== ze ? (vt >= 0 && (ot({
      rootEl: ze,
      name: "add",
      toEl: ze,
      fromEl: Ie,
      originalEvent: t
    }), ot({
      sortable: this,
      name: "remove",
      toEl: ze,
      originalEvent: t
    }), ot({
      rootEl: ze,
      name: "sort",
      toEl: ze,
      fromEl: Ie,
      originalEvent: t
    }), ot({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), Je && Je.save()) : vt !== bn && vt >= 0 && (ot({
      sortable: this,
      name: "update",
      toEl: ze,
      originalEvent: t
    }), ot({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), de.active && ((vt == null || vt === -1) && (vt = bn, Ft = Nn), ot({
      sortable: this,
      name: "end",
      toEl: ze,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    st("nulling", this), Ie = ee = ze = me = en = Te = Vl = Rt = Zt = gt = jn = vt = Ft = bn = Nn = hn = Rn = Je = pl = de.dragged = de.ghost = de.clone = de.active = null, Ul.forEach(function(t) {
      t.checked = !0;
    }), Ul.length = na = la = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        ee && (this._onDragOver(t), by(t));
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
      n = l[o], bt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || Cy(n));
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
      bt(i, this.options.draggable, o, !1) && (l[r] = i);
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
    return bt(t, n || this.options.draggable, this.el, !1);
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
    var o = nl.modifyOption(this, t, n);
    typeof o < "u" ? l[t] = o : l[t] = n, t === "group" && Hs(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    st("destroy", this);
    var t = this.el;
    t[ut] = null, $e(t, "mousedown", this._onTapStart), $e(t, "touchstart", this._onTapStart), $e(t, "pointerdown", this._onTapStart), this.nativeDraggable && ($e(t, "dragover", this), $e(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Wl.splice(Wl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Rt) {
      if (st("hideClone", this), de.eventCanceled)
        return;
      ve(Te, "display", "none"), this.options.removeCloneOnHide && Te.parentNode && Te.parentNode.removeChild(Te), Rt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Rt) {
      if (st("showClone", this), de.eventCanceled)
        return;
      ee.parentNode == Ie && !this.options.group.revertClone ? Ie.insertBefore(Te, ee) : en ? Ie.insertBefore(Te, en) : Ie.appendChild(Te), this.options.group.revertClone && this.animate(ee, Te), ve(Te, "display", ""), Rt = !1;
    }
  }
};
function by(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function gl(e, t, n, l, o, r, a, i) {
  var s, u = e[ut], c = u.options.onMove, f;
  return window.CustomEvent && !Mt && !tl ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = l, s.related = o || t, s.relatedRect = r || Re(t), s.willInsertAfter = i, s.originalEvent = a, e.dispatchEvent(s), c && (f = c.call(u, s, a)), f;
}
function aa(e) {
  e.draggable = !1;
}
function yy() {
  ya = !1;
}
function _y(e, t, n) {
  var l = Re(Cn(n.el, 0, n.options, !0)), o = Ns(n.el, n.options, me), r = 10;
  return t ? e.clientX < o.left - r || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - r || e.clientY < l.bottom && e.clientX < l.left;
}
function $y(e, t, n) {
  var l = Re(Wa(n.el, n.options.draggable)), o = Ns(n.el, n.options, me), r = 10;
  return t ? e.clientX > o.right + r || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + r || e.clientX > l.right && e.clientY > l.top;
}
function wy(e, t, n, l, o, r, a, i) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, c = l ? n.top : n.left, f = l ? n.bottom : n.right, m = !1;
  if (!a) {
    if (i && Ol < u * o) {
      if (!qn && (Rn === 1 ? s > c + u * r / 2 : s < f - u * r / 2) && (qn = !0), qn)
        m = !0;
      else if (Rn === 1 ? s < c + Ol : s > f - Ol)
        return -Rn;
    } else if (s > c + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return ky(t);
  }
  return m = m || a, m && (s < c + u * r / 2 || s > f - u * r / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function ky(e) {
  return mt(ee) < mt(e) ? 1 : -1;
}
function Cy(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function Sy(e) {
  Ul.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var l = t[n];
    l.checked && Ul.push(l);
  }
}
function El(e) {
  return setTimeout(e, 0);
}
function _a(e) {
  return clearTimeout(e);
}
ro && ke(document, "touchmove", function(e) {
  (de.active || mn) && e.cancelable && e.preventDefault();
});
de.utils = {
  on: ke,
  off: $e,
  css: ve,
  find: zs,
  is: function(t, n) {
    return !!bt(t, n, t, !1);
  },
  extend: iy,
  throttle: As,
  closest: bt,
  toggleClass: ft,
  clone: Fs,
  index: mt,
  nextTick: El,
  cancelNextTick: _a,
  detectDirection: qs,
  getChild: Cn,
  expando: ut
};
de.get = function(e) {
  return e[ut];
};
de.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (de.utils = St(St({}, de.utils), l.utils)), nl.mount(l);
  });
};
de.create = function(e, t) {
  return new de(e, t);
};
de.version = ay;
var Fe = [], Tn, $a, wa = !1, ra, ia, Kl, Mn;
function Vy() {
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
      this.sortable.nativeDraggable ? $e(document, "dragover", this._handleAutoScroll) : ($e(document, "pointermove", this._handleFallbackAutoScroll), $e(document, "touchmove", this._handleFallbackAutoScroll), $e(document, "mousemove", this._handleFallbackAutoScroll)), Pi(), xl(), sy();
    },
    nulling: function() {
      Kl = $a = Tn = wa = Mn = ra = ia = null, Fe.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(r, a);
      if (Kl = n, l || this.options.forceAutoScrollFallback || tl || Mt || Ln) {
        sa(n, this.options, i, l);
        var s = qt(i, !0);
        wa && (!Mn || r !== ra || a !== ia) && (Mn && Pi(), Mn = setInterval(function() {
          var u = qt(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, xl()), sa(n, o.options, u, l);
        }, 10), ra = r, ia = a);
      } else {
        if (!this.options.bubbleScroll || qt(i, !0) === kt()) {
          xl();
          return;
        }
        sa(n, this.options, qt(i, !1), !1);
      }
    }
  }, Pt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function xl() {
  Fe.forEach(function(e) {
    clearInterval(e.pid);
  }), Fe = [];
}
function Pi() {
  clearInterval(Mn);
}
var sa = As(function(e, t, n, l) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, i = t.scrollSpeed, s = kt(), u = !1, c;
    $a !== n && ($a = n, xl(), Tn = t.scroll, c = t.scrollFn, Tn === !0 && (Tn = qt(n, !0)));
    var f = 0, m = Tn;
    do {
      var b = m, _ = Re(b), g = _.top, T = _.bottom, E = _.left, k = _.right, S = _.width, $ = _.height, I = void 0, w = void 0, V = b.scrollWidth, R = b.scrollHeight, K = ve(b), q = b.scrollLeft, p = b.scrollTop;
      b === s ? (I = S < V && (K.overflowX === "auto" || K.overflowX === "scroll" || K.overflowX === "visible"), w = $ < R && (K.overflowY === "auto" || K.overflowY === "scroll" || K.overflowY === "visible")) : (I = S < V && (K.overflowX === "auto" || K.overflowX === "scroll"), w = $ < R && (K.overflowY === "auto" || K.overflowY === "scroll"));
      var B = I && (Math.abs(k - o) <= a && q + S < V) - (Math.abs(E - o) <= a && !!q), x = w && (Math.abs(T - r) <= a && p + $ < R) - (Math.abs(g - r) <= a && !!p);
      if (!Fe[f])
        for (var z = 0; z <= f; z++)
          Fe[z] || (Fe[z] = {});
      (Fe[f].vx != B || Fe[f].vy != x || Fe[f].el !== b) && (Fe[f].el = b, Fe[f].vx = B, Fe[f].vy = x, clearInterval(Fe[f].pid), (B != 0 || x != 0) && (u = !0, Fe[f].pid = setInterval(function() {
        l && this.layer === 0 && de.active._onTouchMove(Kl);
        var A = Fe[this.layer].vy ? Fe[this.layer].vy * i : 0, U = Fe[this.layer].vx ? Fe[this.layer].vx * i : 0;
        typeof c == "function" && c.call(de.dragged.parentNode[ut], U, A, e, Kl, Fe[this.layer].el) !== "continue" || Ls(Fe[this.layer].el, U, A);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && m !== s && (m = qt(m, !1)));
    wa = u;
  }
}, 30), Ks = function(t) {
  var n = t.originalEvent, l = t.putSortable, o = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, i = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = l || r;
    i();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(c.clientX, c.clientY);
    s(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: l
    }));
  }
};
function Ua() {
}
Ua.prototype = {
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
  drop: Ks
};
Pt(Ua, {
  pluginName: "revertOnSpill"
});
function Ka() {
}
Ka.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable, o = l || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Ks
};
Pt(Ka, {
  pluginName: "removeOnSpill"
});
de.mount(new Vy());
de.mount(Ka, Ua);
const Dt = (e) => (He("data-v-09483bfa"), e = e(), We(), e), Oy = {
  class: "editor-built-in-control-commen-multiple"
}, Ey = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), xy = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "选项", -1)), By = {
  class: "flex mt24 options"
}, Iy = {
  class: "select-group"
}, Py = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("div", {
  class: "drag"
}, [/* @__PURE__ */ v("div", {
  class: "line"
}), /* @__PURE__ */ v("div", {
  class: "line"
})], -1)), jy = ["onClick"], Ty = {
  class: "add-btn"
}, My = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), Dy = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("span", null, "添加选项", -1)), zy = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("div", {
  class: "group-title mt24"
}, "校验", -1)), Ay = {
  class: "flex mt24 options"
}, Ly = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), Fy = {
  class: "flex mt24 options"
}, Ny = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最少选择数", -1)), Ry = {
  class: "pl24"
}, qy = {
  class: "flex mt24 options"
}, Hy = /* @__PURE__ */ Dt(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最多选择数", -1)), Wy = {
  class: "pl24"
}, Uy = /* @__PURE__ */ N({
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
        Ze.warning("至少保留一项哦！");
        return;
      }
      t.block.props.options.defaultValue.splice(a, 1);
    }
    function r() {
      let a = {
        name: "",
        id: "",
        key: Math.random() * 1e4 + ""
      };
      t.block.props.options.defaultValue.push(a);
    }
    return xe(() => {
      let a = document.querySelector(".editor-built-in-control-commen-multiple .select-group");
      new de(a, {
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
          let s = i.newIndex, u = i.oldIndex, c = t.block.props.options.defaultValue[s], f = t.block.props.options.defaultValue[u];
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
    }), (a, i) => {
      const s = Gt, u = rn, c = wt;
      return y(), O("div", Oy, [Ey, xy, v("div", By, [v("ul", Iy, [(y(!0), O(we, null, Ge(e.block.props.options.defaultValue, (f, m) => (y(), O("li", {
        key: f.key,
        class: "useDrag"
      }, [Py, d(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (b) => f.name = b,
        onInput: (b) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), v("div", {
        class: "del",
        onClick: (b) => o(m)
      }, null, 8, jy)]))), 128)), v("div", Ty, [d(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: le(() => [My, Dy]),
        _: 1
      })])])]), zy, v("div", Ay, [Ly, v("div", null, [d(c, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])]), v("div", Fy, [Ny, v("div", Ry, [d(s, {
        modelValue: e.block.props.selectMin.defaultValue,
        "onUpdate:modelValue": i[1] || (i[1] = (f) => e.block.props.selectMin.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), v("div", qy, [Hy, v("div", Wy, [d(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": i[2] || (i[2] = (f) => e.block.props.selectMax.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const Ky = /* @__PURE__ */ Se(Uy, [["__scopeId", "data-v-09483bfa"]]), Yy = {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  // formItemField: "1",
  value: [],
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(ty, {
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
      label: "描述",
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
  controlView: (e, t) => d(Ky, {
    block: e
  })
}, Ys = (e) => (He("data-v-877ba51a"), e = e(), We(), e), Gy = {
  class: "title-tip"
}, Xy = {
  key: 0,
  class: "red"
}, Zy = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "8px",
    "margin-bottom": "12px"
  }
}, Qy = {
  key: 1,
  class: "form-item"
}, Jy = /* @__PURE__ */ Ys(() => /* @__PURE__ */ v("div", {
  class: "right"
}, [/* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), e0 = {
  key: 2,
  class: "form-item-pu"
}, t0 = /* @__PURE__ */ Ys(() => /* @__PURE__ */ v("div", {
  class: "control-input"
}, null, -1)), n0 = {
  class: "text"
}, l0 = /* @__PURE__ */ N({
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
    },
    showType: {
      type: String,
      default: "1"
    }
  },
  setup(e) {
    function t() {
      Ze.warning("请在移动端预览真机效果！");
    }
    return (n, l) => (y(), O("div", {
      class: "editor-built-in-commen-radio",
      style: pe(e.style)
    }, [v("div", Gy, [e.isRequire ? (y(), O("span", Xy, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), e.tip.trim().length > 0 ? (y(), O("div", Zy, ie(e.tip), 1)) : te("", !0), e.showType == "1" ? (y(), O("div", Qy, [v("div", {
      class: "item",
      onClick: t
    }, [v("span", null, ie(e.placeholder), 1), Jy])])) : te("", !0), e.showType == "2" ? (y(), O("div", e0, [(y(!0), O(we, null, Ge(e.options, (o, r) => (y(), O("div", {
      class: "item",
      key: r
    }, [t0, v("div", n0, ie(o.name ? o.name : "请填写内容"), 1)]))), 128))])) : te("", !0)], 4));
  }
});
const o0 = /* @__PURE__ */ Se(l0, [["__scopeId", "data-v-877ba51a"]]), dn = (e) => (He("data-v-6565436c"), e = e(), We(), e), a0 = {
  class: "editor-built-in-control-commen-radio"
}, r0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), i0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "选项", -1)), s0 = {
  class: "flex mt24 options"
}, u0 = {
  class: "select-group"
}, c0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("div", {
  class: "drag"
}, [/* @__PURE__ */ v("div", {
  class: "line"
}), /* @__PURE__ */ v("div", {
  class: "line"
})], -1)), d0 = ["onClick"], f0 = {
  class: "add-btn"
}, v0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), p0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("span", null, "添加选项", -1)), h0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("div", {
  class: "group-title mt24"
}, "校验", -1)), m0 = {
  class: "flex mt24 options"
}, g0 = /* @__PURE__ */ dn(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), b0 = /* @__PURE__ */ N({
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
        Ze.warning("至少保留一项哦！");
        return;
      }
      t.block.props.options.defaultValue.splice(a, 1);
    }
    function r() {
      let a = {
        name: "",
        id: "",
        key: Math.random() * 1e4 + ""
      };
      t.block.props.options.defaultValue.push(a);
    }
    return xe(() => {
      let a = document.querySelector(".editor-built-in-control-commen-radio .select-group");
      new de(a, {
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
          let s = i.newIndex, u = i.oldIndex, c = t.block.props.options.defaultValue[s], f = t.block.props.options.defaultValue[u];
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
    }), (a, i) => {
      const s = Gt, u = rn, c = wt;
      return y(), O("div", a0, [r0, i0, v("div", s0, [v("ul", u0, [(y(!0), O(we, null, Ge(e.block.props.options.defaultValue, (f, m) => (y(), O("li", {
        key: f.key,
        class: "useDrag"
      }, [c0, d(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (b) => f.name = b,
        onInput: (b) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), v("div", {
        class: "del",
        onClick: (b) => o(m)
      }, null, 8, d0)]))), 128)), v("div", f0, [d(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: le(() => [v0, p0]),
        _: 1
      })])])]), h0, v("div", m0, [g0, v("div", null, [d(c, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const y0 = /* @__PURE__ */ Se(b0, [["__scopeId", "data-v-6565436c"]]), _0 = {
  group: "个人信息（自定义）",
  name: "commenRadio",
  value: "",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  render: (e) => {
    var n, l;
    let t = e.props;
    return d(o0, {
      style: {},
      title: t.title.defaultValue,
      isRequire: t.isRequire.defaultValue == "1",
      options: t.options.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      showType: (l = t == null ? void 0 : t.showType) != null && l.defaultValue ? t.showType.defaultValue : "1"
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请选择内容"
    },
    tip: {
      label: "描述",
      type: "input",
      defaultValue: ""
    },
    showType: {
      label: "交互形式",
      type: "select",
      defaultValue: "1",
      //new Date().getFullYear()
      options: [{
        name: "下拉选择",
        value: "1"
      }, {
        name: "平铺选择",
        value: "2"
      }]
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
  controlView: (e, t) => d(y0, {
    block: e
  })
}, Gs = (e) => (He("data-v-147689a0"), e = e(), We(), e), $0 = {
  class: "title-tip mb8"
}, w0 = {
  key: 0,
  class: "red"
}, k0 = {
  key: 0,
  class: "base-tip"
}, C0 = {
  class: "form-item"
}, S0 = {
  class: "item"
}, V0 = {
  class: "item flex"
}, O0 = {
  class: "input"
}, E0 = /* @__PURE__ */ Gs(() => /* @__PURE__ */ v("div", {
  class: "success"
}, [/* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), x0 = /* @__PURE__ */ Gs(() => /* @__PURE__ */ v("div", {
  class: "button"
}, "发送验证码", -1)), B0 = /* @__PURE__ */ N({
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
      const l = Gt;
      return y(), O("div", {
        class: "editor-built-in-check-phone",
        style: pe(e.style)
      }, [v("div", $0, [e.isRequire ? (y(), O("span", w0, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), e.tip.trim().length > 0 ? (y(), O("div", k0, ie(e.tip), 1)) : te("", !0), v("div", C0, [v("div", S0, [d(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder
      }, null, 8, ["placeholder"])]), v("div", V0, [v("div", O0, [d(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          flex: "1"
        },
        placeholder: "验证码"
      }), E0]), x0])])], 4);
    };
  }
});
const I0 = /* @__PURE__ */ Se(B0, [["__scopeId", "data-v-147689a0"]]), ll = (e) => (He("data-v-f4a10f1d"), e = e(), We(), e), P0 = {
  class: "editor-built-in-control-check-phone"
}, j0 = /* @__PURE__ */ ll(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), T0 = /* @__PURE__ */ ll(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), M0 = {
  class: "flex mt24 options"
}, D0 = /* @__PURE__ */ ll(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), z0 = {
  class: "flex mt24 options"
}, A0 = /* @__PURE__ */ ll(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), L0 = {
  key: 0,
  class: "flex mt24 options"
}, F0 = /* @__PURE__ */ ll(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "校验周期（h）", -1)), N0 = {
  class: "pl24"
}, R0 = /* @__PURE__ */ N({
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
      const r = wt, a = Vt;
      return y(), O("div", P0, [j0, T0, v("div", M0, [D0, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), v("div", z0, [A0, v("div", null, [d(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (y(), O("div", L0, [F0, v("div", N0, [d(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : te("", !0)]);
    };
  }
});
const q0 = /* @__PURE__ */ Se(R0, [["__scopeId", "data-v-f4a10f1d"]]), H0 = {
  group: "个人信息",
  name: "checkPhone",
  addOnly: !0,
  sort: 8,
  value: ["", ""],
  formItemField: "sms_code",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(I0, {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请输入电话"
    },
    tip: {
      label: "描述",
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
  controlView: (e, t) => d(q0, {
    block: e
  })
}, W0 = {
  class: "title-tip mb8"
}, U0 = {
  key: 0,
  class: "red"
}, K0 = {
  key: 0,
  class: "base-tip"
}, Y0 = {
  class: "form-item"
}, G0 = /* @__PURE__ */ N({
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
      const l = Gt;
      return y(), O("div", {
        class: "editor-built-in-registor-person-name",
        style: pe(e.style)
      }, [v("div", W0, [e.isRequire ? (y(), O("span", U0, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), e.tip.trim().length > 0 ? (y(), O("div", K0, ie(e.tip), 1)) : te("", !0), v("div", Y0, [d(l, {
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
const io = /* @__PURE__ */ Se(G0, [["__scopeId", "data-v-c06a8f65"]]), fn = (e) => (He("data-v-05a6c9a4"), e = e(), We(), e), X0 = {
  class: "editor-built-in-control-person-name"
}, Z0 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), Q0 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), J0 = {
  class: "flex mt24 options"
}, e1 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), t1 = {
  class: "flex mt24 options"
}, n1 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), l1 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("div", {
  class: "group-title mt24"
}, "填写限制", -1)), o1 = {
  class: "flex mt24 options"
}, a1 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最少填", -1)), r1 = {
  class: "pl24"
}, i1 = {
  class: "flex mt24 options"
}, s1 = /* @__PURE__ */ fn(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最多填", -1)), u1 = {
  class: "pl24 flex"
}, c1 = /* @__PURE__ */ N({
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
      const r = wt, a = Vt;
      return y(), O("div", X0, [Z0, Q0, v("div", J0, [e1, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), v("div", t1, [n1, v("div", null, [d(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), l1, v("div", o1, [a1, v("div", r1, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), v("div", i1, [s1, v("div", u1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const d1 = /* @__PURE__ */ Se(c1, [["__scopeId", "data-v-05a6c9a4"]]), f1 = {
  group: "个人信息",
  name: "personName",
  value: "",
  sort: 2,
  addOnly: !0,
  formItemField: "name",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(io, {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请输入姓名"
    },
    tip: {
      label: "描述",
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
  controlView: (e, t) => d(d1, {
    block: e
  })
}, On = (e) => (He("data-v-3fd74b8f"), e = e(), We(), e), v1 = {
  class: "editor-built-in-control-person-other"
}, p1 = /* @__PURE__ */ On(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), h1 = /* @__PURE__ */ On(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), m1 = {
  class: "flex mt24 options"
}, g1 = /* @__PURE__ */ On(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), b1 = /* @__PURE__ */ On(() => /* @__PURE__ */ v("div", {
  class: "group-title mt24"
}, "填写限制", -1)), y1 = {
  class: "flex mt24 options"
}, _1 = /* @__PURE__ */ On(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最少填", -1)), $1 = {
  class: "pl24"
}, w1 = {
  class: "flex mt24 options"
}, k1 = /* @__PURE__ */ On(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最多填", -1)), C1 = {
  class: "pl24 flex"
}, S1 = /* @__PURE__ */ N({
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
      const r = wt, a = Vt;
      return y(), O("div", v1, [p1, h1, v("div", m1, [g1, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), b1, v("div", y1, [_1, v("div", $1, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), v("div", w1, [k1, v("div", C1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const V1 = /* @__PURE__ */ Se(S1, [["__scopeId", "data-v-3fd74b8f"]]), O1 = {
  group: "个人信息",
  name: "personOther",
  // value: "",
  addOnly: !0,
  sort: 6,
  formItemField: "remark",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(io, {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请输入其他信息"
    },
    tip: {
      label: "描述",
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
  controlView: (e, t) => d(V1, {
    block: e
  })
}, ol = (e) => (He("data-v-df798f6e"), e = e(), We(), e), E1 = {
  class: "editor-built-in-control-person-phone"
}, x1 = /* @__PURE__ */ ol(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), B1 = /* @__PURE__ */ ol(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), I1 = {
  class: "flex mt24 options"
}, P1 = /* @__PURE__ */ ol(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), j1 = {
  class: "flex mt24 options"
}, T1 = /* @__PURE__ */ ol(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), M1 = {
  key: 0,
  class: "flex mt24 options"
}, D1 = /* @__PURE__ */ ol(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "校验周期（h）", -1)), z1 = {
  class: "pl24"
}, A1 = /* @__PURE__ */ N({
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
      const r = wt, a = Vt;
      return y(), O("div", E1, [x1, B1, v("div", I1, [P1, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), v("div", j1, [T1, v("div", null, [d(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (y(), O("div", M1, [D1, v("div", z1, [d(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : te("", !0)]);
    };
  }
});
const L1 = /* @__PURE__ */ Se(A1, [["__scopeId", "data-v-df798f6e"]]), F1 = {
  group: "个人信息",
  name: "personPhone",
  value: "",
  addOnly: !0,
  sort: 3,
  formItemField: "phone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(io, {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请输入电话"
    },
    tip: {
      label: "描述",
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
  controlView: (e, t) => d(L1, {
    block: e
  })
}, N1 = (e) => (He("data-v-0cd61663"), e = e(), We(), e), R1 = {
  class: "title-tip"
}, q1 = {
  key: 0,
  class: "red"
}, H1 = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, W1 = {
  class: "item"
}, U1 = /* @__PURE__ */ N1(() => /* @__PURE__ */ v("div", {
  class: "right"
}, [/* @__PURE__ */ v("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), K1 = /* @__PURE__ */ N({
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
      Ze.warning("请在移动端预览真机效果！");
    }
    return (n, l) => (y(), O("div", {
      class: "editor-built-in-commen-radio",
      style: pe(e.style)
    }, [v("div", R1, [e.isRequire ? (y(), O("span", q1, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), e.tip.trim().length > 0 ? (y(), O("div", H1, ie(e.tip), 1)) : te("", !0), v("div", {
      class: "form-item",
      onClick: t
    }, [v("div", W1, [v("span", null, ie(e.placeholder), 1), U1])])], 4));
  }
});
const Y1 = /* @__PURE__ */ Se(K1, [["__scopeId", "data-v-0cd61663"]]), Ya = (e) => (He("data-v-fcdbe6a9"), e = e(), We(), e), G1 = {
  class: "editor-built-in-control-person-school"
}, X1 = /* @__PURE__ */ Ya(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), Z1 = /* @__PURE__ */ Ya(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), Q1 = {
  class: "flex mt24 options"
}, J1 = /* @__PURE__ */ Ya(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), e_ = /* @__PURE__ */ N({
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
      const r = wt;
      return y(), O("div", G1, [X1, Z1, v("div", Q1, [J1, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const t_ = /* @__PURE__ */ Se(e_, [["__scopeId", "data-v-fcdbe6a9"]]), n_ = {
  group: "个人信息",
  name: "personProvince",
  value: "",
  formItemField: "province_id",
  sort: 1,
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(Y1, {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请选择所在省份"
    },
    tip: {
      label: "描述",
      type: "input",
      defaultValue: ""
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => d(t_, {
    block: e
  })
}, En = (e) => (He("data-v-1418313e"), e = e(), We(), e), l_ = {
  class: "editor-built-in-control-person-school"
}, o_ = /* @__PURE__ */ En(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), a_ = /* @__PURE__ */ En(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), r_ = {
  class: "flex mt24 options"
}, i_ = /* @__PURE__ */ En(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), s_ = /* @__PURE__ */ En(() => /* @__PURE__ */ v("div", {
  class: "group-title mt24"
}, "填写限制", -1)), u_ = {
  class: "flex mt24 options"
}, c_ = /* @__PURE__ */ En(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最少填", -1)), d_ = {
  class: "pl24"
}, f_ = {
  class: "flex mt24 options"
}, v_ = /* @__PURE__ */ En(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "最多填", -1)), p_ = {
  class: "pl24 flex"
}, h_ = /* @__PURE__ */ N({
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
      const r = wt, a = Vt;
      return y(), O("div", l_, [o_, a_, v("div", r_, [i_, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), s_, v("div", u_, [c_, v("div", d_, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), v("div", f_, [v_, v("div", p_, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const m_ = /* @__PURE__ */ Se(h_, [["__scopeId", "data-v-1418313e"]]), g_ = {
  group: "个人信息",
  name: "personSchool",
  value: "",
  sort: 5,
  formItemField: "school_id",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(io, {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请输入所在中学"
    },
    tip: {
      label: "描述",
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
  controlView: (e, t) => d(m_, {
    block: e
  })
}, b_ = (e) => (He("data-v-22530c73"), e = e(), We(), e), y_ = {
  class: "title-tip mb8"
}, __ = {
  key: 0,
  class: "red"
}, $_ = {
  class: "form-item"
}, w_ = /* @__PURE__ */ b_(() => /* @__PURE__ */ v("div", {
  class: "btn"
}, [/* @__PURE__ */ v("span", null, "上传文件"), /* @__PURE__ */ v("input", {
  type: "file",
  class: "file"
})], -1)), k_ = {
  key: 0,
  class: "tip title-tip"
}, C_ = /* @__PURE__ */ N({
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
    return (t, n) => (y(), O("div", {
      class: "editor-built-in-person-upload",
      style: pe(e.style)
    }, [v("div", y_, [e.isRequire ? (y(), O("span", __, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), v("div", $_, [w_, e.tip ? (y(), O("div", k_, ie(e.tip), 1)) : te("", !0)])], 4));
  }
});
const S_ = /* @__PURE__ */ Se(C_, [["__scopeId", "data-v-22530c73"]]), Ga = (e) => (He("data-v-be68881f"), e = e(), We(), e), V_ = {
  class: "editor-built-in-control-person-upload"
}, O_ = /* @__PURE__ */ Ga(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), E_ = /* @__PURE__ */ Ga(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), x_ = {
  class: "flex mt24 options"
}, B_ = /* @__PURE__ */ Ga(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), I_ = /* @__PURE__ */ N({
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
      const r = wt;
      return y(), O("div", V_, [O_, E_, v("div", x_, [B_, v("div", null, [d(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const P_ = /* @__PURE__ */ Se(I_, [["__scopeId", "data-v-be68881f"]]), j_ = {
  group: "个人信息",
  label: "上传文件",
  sort: 7,
  name: "personUpload",
  value: [],
  formItemField: "file_url",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(S_, {
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
      defaultValue: 5,
      unit: "MB"
    },
    tip: {
      label: "描述",
      type: "input",
      defaultValue: ""
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => d(P_, {
    block: e
  })
}, al = (e) => (He("data-v-efa7717d"), e = e(), We(), e), T_ = {
  class: "editor-built-in-control-person-year"
}, M_ = {
  class: "form-item"
}, D_ = /* @__PURE__ */ al(() => /* @__PURE__ */ v("div", {
  class: "title"
}, "默认值", -1)), z_ = {
  class: "opts"
}, A_ = {
  class: "form-item"
}, L_ = /* @__PURE__ */ al(() => /* @__PURE__ */ v("div", {
  class: "title"
}, "设置年级选项", -1)), F_ = {
  class: "opts"
}, N_ = /* @__PURE__ */ al(() => /* @__PURE__ */ v("div", {
  class: "h-line"
}, null, -1)), R_ = /* @__PURE__ */ al(() => /* @__PURE__ */ v("div", {
  class: "group-title"
}, "校验", -1)), q_ = {
  class: "flex mt24 options"
}, H_ = /* @__PURE__ */ al(() => /* @__PURE__ */ v("span", {
  class: "option-label"
}, "设为必填", -1)), W_ = /* @__PURE__ */ N({
  __name: "control",
  props: {
    block: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e;
    function n(u, c) {
      t.block.props[c].defaultValue = u ? "1" : "2";
    }
    let l = P([]);
    function o() {
      l.value = [{
        name: "大四（2021届）",
        value: "2021"
      }, {
        name: "大三（2022届）",
        value: "2022"
      }, {
        name: "大二（2023届）",
        value: "2023"
      }, {
        name: "大一（2024届）",
        value: "2024"
      }, {
        name: "高三（2025届）",
        value: "2025"
      }, {
        name: "高二（2026届）",
        value: "2026"
      }, {
        name: "高一（2027届）",
        value: "2027"
      }, {
        name: "初三（2028届）",
        value: "2028"
      }, {
        name: "初二（2029届）",
        value: "2029"
      }, {
        name: "初一（2030届）",
        value: "2030"
      }, {
        name: "六年级（2031届）",
        value: "2031"
      }, {
        name: "五年级（2032届）",
        value: "2032"
      }, {
        name: "四年级（2033届）",
        value: "2033"
      }, {
        name: "三年级（2034届）",
        value: "2034"
      }, {
        name: "二年级（2035届）",
        value: "2035"
      }, {
        name: "一年级（2036届）",
        value: "2036"
      }, {
        name: "未知",
        value: "0"
      }];
    }
    o();
    function r() {
      var c, f;
      return ((f = (c = t == null ? void 0 : t.block) == null ? void 0 : c.props) != null && f.options ? t.block.props.options.defaultValue : []).map((m) => m.value);
    }
    function a() {
      var u, c, f;
      return (f = (c = (u = t.block) == null ? void 0 : u.props) == null ? void 0 : c.options) != null && f.defaultValue ? t.block.props.options.defaultValue : [];
    }
    function i(u) {
      let c = [];
      u.forEach((f) => {
        let m;
        (m = l.value.find((b) => b.value == f)) && c.push(m);
      }), t.block.props.options.defaultValue = c;
    }
    function s(u) {
      t.block.props.value.defaultValue = u;
    }
    return (u, c) => {
      const f = ln, m = eo, b = os, _ = _l, g = wt;
      return y(), O("div", null, [v("div", T_, [v("div", M_, [D_, v("div", z_, [d(m, {
        placeholder: "请选择默认值",
        "model-value": e.block.props.value ? e.block.props.value.defaultValue : "",
        onChange: s
      }, {
        default: le(() => [(y(!0), O(we, null, Ge(a(), (T, E) => (y(), re(f, {
          value: T.value
        }, {
          default: le(() => [Ce(ie(T.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["model-value"])])]), v("div", A_, [L_, v("div", F_, [d(_, {
        "default-value": r(),
        onChange: i
      }, {
        default: le(() => [(y(!0), O(we, null, Ge(Gn(l), (T, E) => (y(), re(b, {
          value: T.value,
          class: "opt"
        }, {
          default: le(() => [Ce(ie(T.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["default-value"])])]), N_, R_, v("div", q_, [H_, v("div", null, [d(g, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: c[0] || (c[0] = (T) => n(T, "isRequire"))
      }, null, 8, ["default-checked"])])])])]);
    };
  }
});
const U_ = /* @__PURE__ */ Se(W_, [["__scopeId", "data-v-efa7717d"]]), K_ = {
  class: "title-tip mb8"
}, Y_ = {
  key: 0,
  class: "red"
}, G_ = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, X_ = {
  class: "form-item"
}, Z_ = /* @__PURE__ */ N({
  __name: "render",
  props: {
    style: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
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
      const l = ln, o = eo;
      return y(), O("div", {
        class: "editor-built-in-person-year",
        style: pe(e.style)
      }, [v("div", K_, [e.isRequire ? (y(), O("span", Y_, "*")) : te("", !0), v("span", null, ie(e.title), 1)]), e.tip.trim().length > 0 ? (y(), O("div", G_, ie(e.tip), 1)) : te("", !0), v("div", X_, [d(o, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder,
        "model-value": e.value
      }, {
        default: le(() => [(y(!0), O(we, null, Ge(e.options, (r) => (y(), re(l, {
          value: r.id + ""
        }, {
          default: le(() => [Ce(ie(r.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const Q_ = /* @__PURE__ */ Se(Z_, [["__scopeId", "data-v-3845df2c"]]), J_ = {
  group: "个人信息",
  name: "personYear",
  value: "",
  formItemField: "year",
  addOnly: !0,
  sort: 4,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (e) => {
    var n, l;
    let t = e.props;
    return d(Q_, {
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      tip: (n = t == null ? void 0 : t.tip) != null && n.defaultValue ? t.tip.defaultValue : "",
      options: (l = t == null ? void 0 : t.options) != null && l.defaultValue ? t.options.defaultValue : [],
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
    placeholder: {
      label: "默认提示文字",
      type: "input",
      defaultValue: "请选择参加高考年份"
    },
    tip: {
      label: "描述",
      type: "input",
      defaultValue: ""
    },
    value: {
      label: "默认值",
      // type: "select",
      defaultValue: ""
      //new Date().getFullYear()
      // options: [
      //   {
      //     name: "2020",
      //     value: "2020",
      //   },
      //   {
      //     name: "2021",
      //     value: "2021",
      //   },
      //   {
      //     name: "2022",
      //     value: "2022",
      //   },
      //   {
      //     name: "2023",
      //     value: "2023",
      //   },
      //   {
      //     name: "2024",
      //     value: "2024",
      //   },
      //   {
      //     name: "2025",
      //     value: "2025",
      //   },
      //   {
      //     name: "2026",
      //     value: "2026",
      //   },
      //   {
      //     name: "2027",
      //     value: "2027",
      //   },
      //   {
      //     name: "2028",
      //     value: "2028",
      //   },
      //   {
      //     name: "2029",
      //     value: "2029",
      //   },
      //   {
      //     name: "2030",
      //     value: "2030",
      //   },
      // ],
    },
    options: {
      label: "设置年级选项",
      defaultValue: []
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => d(U_, {
    block: e
  })
}, ua = {
  baseText: cb,
  baseImg: hb,
  baseSubmit: Tb,
  baseTitle: zb,
  baseSuccess: Ub,
  commenMultiple: Yy,
  commenRadio: _0,
  checkPhone: H0,
  personName: f1,
  personOther: O1,
  personPhone: F1,
  personProvince: n_,
  personSchool: g_,
  personUpload: j_,
  personYear: J_
};
function Xs(e, t, n = "push") {
  t.forEach((l) => {
    if (ua[l])
      e.registry(l, ua[l], n);
    else {
      let o = Object.keys(ua);
      console.error(`内置组件不合法，仅支持：${o.join(",")}共${o.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const Zs = ["baseImg", "baseSubmit", "baseText", "baseTitle", "baseSuccess", "checkPhone", "personName", "personOther", "personPhone", "personProvince", "personSchool", "personUpload", "personYear", "commenMultiple", "commenRadio"], so = (e) => (He("data-v-a82634a3"), e = e(), We(), e), e$ = {
  class: "visual-tab-type"
}, t$ = /* @__PURE__ */ so(() => /* @__PURE__ */ v("div", {
  class: "bg-com"
}, [/* @__PURE__ */ v("div", {
  class: "bg-img"
})], -1)), n$ = /* @__PURE__ */ so(() => /* @__PURE__ */ v("span", null, "组件", -1)), l$ = [t$, n$], o$ = /* @__PURE__ */ so(() => /* @__PURE__ */ v("div", {
  class: "bg-com"
}, [/* @__PURE__ */ v("div", {
  class: "bg-img"
})], -1)), a$ = /* @__PURE__ */ so(() => /* @__PURE__ */ v("span", null, "页面", -1)), r$ = [o$, a$], i$ = /* @__PURE__ */ N({
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
    return (l, o) => (y(), O("div", e$, [v("div", {
      class: G(["visual-tab-type-com", {
        active: e.modelValue == "1"
      }]),
      onClick: o[0] || (o[0] = (r) => n("1"))
    }, l$, 2), v("div", {
      class: G(["visual-tab-type-com visual-tab-type-template", {
        active: e.modelValue == "2"
      }]),
      onClick: o[1] || (o[1] = (r) => n("2"))
    }, r$, 2)]));
  }
});
const ji = /* @__PURE__ */ Se(i$, [["__scopeId", "data-v-a82634a3"]]), s$ = {
  class: "buttons"
}, u$ = ["onClick"], c$ = ["src"], d$ = /* @__PURE__ */ N({
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
      const o = Jn;
      return y(), O("div", s$, [(y(!0), O(we, null, Ge(e.buttons, (r, a) => (y(), O("div", {
        class: "button",
        key: a,
        onClick: r.handler
      }, [(y(), re(o, {
        content: t(r),
        position: "right",
        key: a
      }, {
        default: le(() => [v("img", {
          src: r.icon,
          alt: ""
        }, null, 8, c$)]),
        _: 2
      }, 1032, ["content"]))], 8, u$))), 128))]);
    };
  }
});
const f$ = /* @__PURE__ */ Se(d$, [["__scopeId", "data-v-b334d714"]]), v$ = /* @__PURE__ */ N({
  components: {
    editorBlock: Fl,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: ki,
    leftNav: ji,
    shortcutButton: f$
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
      default: () => Zs
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
    var V, R, K, q;
    if (window.visualSystem = {}, (V = e.modelValue) != null && V.container)
      (R = e.modelValue) != null && R.container.width || (e.modelValue.container.width = 350), (K = e.modelValue) != null && K.container.height || (e.modelValue.container.height = 600);
    else
      throw new Error("请检查传入的container！");
    (q = e == null ? void 0 : e.builtInComs) != null && q.length && Xs(at, e.builtInComs, e.pushType), e.fileUploadHandler && Object.defineProperty(window.visualSystem, "fileUploadHandler", {
      get() {
        return e.fileUploadHandler;
      }
    });
    const {
      shiftMove: l = !1,
      shortcutKeys: o = !1
    } = e.config;
    let r = Di(() => e.modelValue, (p) => t("update:modelValue", p)), a = Pe({
      // 当前选中的元素
      selectedBlock: null
    }), i = h(() => ({
      width: r.value.container.width + "px",
      minHeight: r.value.container.height + "px",
      // transform: `scale(${model.value.container.scale / 100})`,
      background: `url(${r.value.container.backgroundImage}) no-repeat top center`,
      backgroundColor: r.value.container.backgroundColor,
      backgroundSize: "cover"
    }));
    function s() {
      var p;
      (((p = e.modelValue) == null ? void 0 : p.blocks) || []).map((B) => (B.focus = !1, B));
    }
    function u(p) {
      I.cacheView = null, r.value = {
        ...r.value,
        blocks: Ne(p)
      };
    }
    function c(p) {
      r.value.blocks.forEach((B) => {
        if (p.id == B.id)
          for (let x in B)
            I.cacheView = null, B[x] = Ne(p[x]);
      });
    }
    function f(p) {
      let B = document.querySelectorAll(".editor-bloack");
      B && (B = Array.from(B)), B.forEach((x) => {
        x.classList.remove("editor-bloack-drag-active");
      }), p && p.classList.add("editor-bloack-drag-active");
    }
    const m = P(null), b = function() {
      let p = {
        component: null
      }, B = {
        dragstart(x, z) {
          var A, U, X, L;
          (A = m.value) == null || A.addEventListener("dragenter", B.dragenter), (U = m.value) == null || U.addEventListener("dragover", B.dragover), (X = m.value) == null || X.addEventListener("dragleave", B.dragleave), (L = m.value) == null || L.addEventListener("drop", B.drop), p.component = z, Nl.emit();
        },
        dragenter(x) {
          Array.from(x.target.classList).includes("editor-bloack") ? f(x.target) : f(), x.dataTransfer.dropEffect = "move";
        },
        dragleave(x) {
          x.dataTransfer.dropEffect = "none";
        },
        dragend(x) {
          var z, A, U, X;
          (z = m.value) == null || z.removeEventListener("dragenter", B.dragenter), (A = m.value) == null || A.removeEventListener("dragover", B.dragover), (U = m.value) == null || U.removeEventListener("dragleave", B.dragleave), (X = m.value) == null || X.removeEventListener("drop", B.drop), p.component = null, Rl.emit(), f();
        },
        dragover(x) {
          x.preventDefault();
        },
        drop(x) {
          var L;
          let z = p.component, A = z == null ? void 0 : z.dragMode, U = Qa({
            dragMode: A || "",
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
          if (z != null && z.addOnly && !wi(U, (L = e.modelValue) == null ? void 0 : L.blocks)) {
            Ze.warning("此组件不能添加多个哦！");
            return;
          }
          let X = x.target.dataset;
          "index" in X ? k.add(U, X.index) : k.add(U);
        },
        click(x, z) {
          var X;
          let A = z == null ? void 0 : z.dragMode, U = Qa({
            dragMode: A || "",
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
          if (z != null && z.addOnly && !wi(U, (X = e.modelValue) == null ? void 0 : X.blocks)) {
            Ze.warning("此组件不能添加多个哦！");
            return;
          }
          z.pushType && z.pushType == "unshift" ? k.unshiftadd(U) : k.add(U);
        }
      };
      return B;
    }(), _ = h(() => {
      var p, B, x;
      return {
        blurBlock: (p = e.modelValue) == null ? void 0 : p.blocks.filter((z) => !z.focus),
        // 当前失去焦点的模块
        focusBlock: (B = e.modelValue) == null ? void 0 : B.blocks.filter((z) => z.focus),
        // 当前获得焦点的模块
        cBlock: (x = e.modelValue) == null ? void 0 : x.blocks.find((z) => z.focus)
        // 当前获得焦点的模块
      };
    }), g = function() {
      const p = {
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
      function B(L) {
        const {
          pageX: Q,
          pageY: j
        } = L;
        let C = !1;
        r.value.blocks.forEach((H) => {
          if (!(H != null && H.id))
            return;
          let J = document.querySelector("#block" + xs(H.id).replace("$", ""));
          const {
            width: he,
            height: _e,
            left: ce,
            top: Be
          } = J.getBoundingClientRect();
          Q < he + ce && Q > ce && j < _e + Be && j > Be && p.block.id != H.id && (f(J), p.sortEndBlock = H, C = !0);
        }), C || (f(), p.sortEndBlock = {});
      }
      function x() {
        p.ele.style.position = "relative", p.ele.style.transition = "none", p.ele.style.left = 0 + "px", p.ele.style.top = 0 + "px", p.ele.style.width = "100%", p.ele.style.height = "auto", setTimeout(() => {
          p.ele.style.transition = "all 0.25s";
        }, 100);
      }
      function z(L, Q) {
        p.block = Q, L.stopPropagation(), L.preventDefault(), p.ele = L.target, p.positionInfo = L.target.getBoundingClientRect(), p.startX = L.pageX, p.startY = L.pageY, p.clientY = L.clientY, p.draging = !1, document.addEventListener("mousemove", A), document.addEventListener("mouseup", U), document.addEventListener("contextmenu", X);
      }
      function A(L) {
        let Q = L.pageX - (p.startX - p.positionInfo.left), j = L.pageY - (p.startY - p.positionInfo.top);
        Math.abs(L.clientY - p.clientY) > 10 && (p.draging || (p.draging = !0), p.ele.style.width = p.positionInfo.width + "px", p.ele.style.height = p.positionInfo.height + "px", p.ele.style.left = Q + "px", p.ele.style.top = j + "px", p.ele.style.position = "fixed", p.ele.style.zIndex = "10", p.ele.style.transition = "none", B({
          pageX: L.pageX,
          pageY: L.pageY
        }));
      }
      function U(L) {
        document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", U), f(), p.draging && (p.draging = !1, p.sortEndBlock.id && k.transposition(p.block, p.sortEndBlock), p.ele.style.transition = "all 0.25s", p.ele.style.left = p.positionInfo.left + "px", p.ele.style.top = p.positionInfo.top + "px", p.ele.style.zIndex = "0", p.ele.style.position = "fixed", p.ele.style.width = p.positionInfo.width + "px", p.ele.style.height = p.positionInfo.height + "px", setTimeout(x, 100));
      }
      function X(L) {
        L.preventDefault(), x();
      }
      return {
        mousedown: z
      };
    }();
    let T = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(p, B) {
          p.stopPropagation(), p.preventDefault(), s(), B.focus = !B.focus, a.selectedBlock = B, E.mousedown(p), e.dragMove && g.mousedown(p, B);
        }
      },
      container: {
        // 点击画布区域的处理的事情
        onMousedown(p) {
          p.preventDefault(), p.stopPropagation(), s(), a.selectedBlock = null;
        }
      }
    };
    const E = function() {
      const p = {
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
      function B(A) {
        var U, X, L;
        p.startX = A.clientX, p.startY = A.clientY, p.startPositon = (U = _.value.focusBlock || []) == null ? void 0 : U.map((Q) => ({
          left: Q.left,
          top: Q.top
        })), p.draging = !1, p.startLeft = (X = a.selectedBlock) == null ? void 0 : X.left, p.startTop = (L = a.selectedBlock) == null ? void 0 : L.top, document.addEventListener("mousemove", x), document.addEventListener("mouseup", z);
      }
      function x(A) {
        var j;
        p.draging || (p.draging = !0, Nl.emit());
        let {
          clientX: U,
          clientY: X
        } = A, {
          startX: L,
          startY: Q
        } = p;
        (j = _.value.focusBlock) == null || j.forEach((C, H) => {
          C.left = p.startPositon[H].left + (U - L), C.top = p.startPositon[H].top + (X - Q);
        });
      }
      function z(A) {
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", z), Rl.emit();
      }
      return {
        mousedown: B
      };
    }(), k = Gm({
      currentBlockInfo: _,
      updateBlocks: u,
      dataModel: r,
      shortcutKeys: o
    }), S = Km(k, _, e.debug, e);
    function $(p) {
      k.delete(p);
    }
    const I = {
      // 操作的原数据
      originData: null,
      // 视图缓存
      cacheView: null,
      // 控制层渲染函数
      controlRender() {
        var x, z, A;
        if (((x = this.originData) == null ? void 0 : x.id) === ((z = _.value.cBlock) == null ? void 0 : z.id) && this.cacheView)
          return this.cacheView;
        let p = (A = _.value.cBlock) == null ? void 0 : A.componentKey, B = at == null ? void 0 : at.componentMap;
        return p && B && _.value.cBlock ? (this.originData = Ne(_.value.cBlock), this.cacheView = B[p].controlView(_.value.cBlock, c), this.cacheView) : null;
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
    be(() => a.selectedBlock, (p) => {
      p || I.cancleEffect();
    });
    let w = P("1");
    return () => d("div", {
      class: "visual-editor-container"
    }, [e.visableHead && n.header ? d("div", {
      class: "visual-editor-header"
    }, [n.header ? n.header() : null]) : null, d("div", {
      class: "visual-editor-core visual-editor"
    }, [d("div", {
      class: ["visual-editor-leftComponentsMenu", e.visableNavMenu ? "" : "hide"]
    }, [e.visableNavbar ? d(ji, {
      modelValue: w.value,
      onChange: (p) => w.value = p
    }, null) : null, d("div", {
      class: ["visual-com-group", e.visableNavbar ? "" : "visual-com-group-not-navbar"]
    }, [w.value == "1" ? d(ki, {
      componentLists: at == null ? void 0 : at.componentLists,
      menuDragInfo: b,
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
      style: i.value,
      ref: m,
      onMousedown: (p) => T.container.onMousedown(p)
    }, [r.value.blocks.map((p, B) => {
      var x;
      return d("div", null, [d(Fl, {
        index: B,
        dragMove: e.dragMove,
        block: p,
        container: (x = e.modelValue) == null ? void 0 : x.container,
        onMousedown: (z) => T.block.onMousedown(z, p),
        onDelBlock: () => $(p),
        onUpBlock: k.up,
        onDownBlock: k.down,
        key: p.id
      }, null)]);
    })])])]), d("div", {
      class: "visual-editor-topMenu"
    }, [d(ue("shortcut-button"), {
      buttons: S
    }, null)]), d("div", {
      class: "visual-editor-right-seting"
    }, [Sg(I.controlRender.bind(I), _, e.modelValue)])])]);
  }
});
const p$ = /* @__PURE__ */ N({
  components: {
    editorBlock: Fl
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
    Xs(at, Zs);
    let n = Di(() => e.modelValue, (o) => t("update:modelValue", o)), l = h(() => ({
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
    }, [n.value.blocks.map((o, r) => {
      var a;
      return d("div", null, [d(Fl, {
        index: r,
        block: o,
        priview: !0,
        container: (a = e.modelValue) == null ? void 0 : a.container,
        key: o.id
      }, null)]);
    })])])])]);
  }
}), Qs = at.registry, Js = v$, h$ = p$, m$ = function(e, t = "push") {
  Qs(e.name, e, t), Is.emit(e);
}, g$ = function(e) {
  Js.batchRegistry(e);
}, b$ = function() {
  return at == null ? void 0 : at.componentLists;
}, $$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: Qs,
  batchRegistry: g$,
  logConfig: b$,
  priviewVisualEditor: h$,
  registry: m$,
  visualEditor: Js
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$ as all,
  g$ as batchRegistry,
  $$ as default,
  b$ as logConfig,
  h$ as priviewVisualEditor,
  m$ as registry,
  Js as visualEditor
};
