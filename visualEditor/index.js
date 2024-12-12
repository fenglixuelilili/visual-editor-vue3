var Gs = Object.defineProperty;
var Xs = (e, t, n) => t in e ? Gs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ya = (e, t, n) => (Xs(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as B, watch as be, computed as m, reactive as Te, inject as Ge, getCurrentInstance as Kn, cloneVNode as Wl, defineComponent as F, onMounted as xe, onUnmounted as Ul, openBlock as y, createElementBlock as x, normalizeClass as G, renderSlot as re, normalizeStyle as ve, createElementVNode as p, resolveComponent as ce, createBlock as ie, createCommentVNode as te, toRef as Vl, toRefs as $e, createVNode as d, mergeProps as Ve, createTextVNode as ke, nextTick as Le, provide as Wt, Fragment as Oe, createSlots as Pr, withCtx as le, withModifiers as on, onUpdated as jt, onBeforeUnmount as Ut, readonly as Zs, onDeactivated as Qs, Teleport as Js, Transition as Ol, withDirectives as $a, vShow as wa, resolveDynamicComponent as tn, toDisplayString as de, renderList as at, TransitionGroup as jr, watchEffect as eu, isVNode as ka, render as Ga, Comment as tu, unref as Kl, pushScopeId as He, popScopeId as We } from "vue";
const Xa = function(e) {
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
function nu() {
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
let ot = nu();
function Tr(e, t) {
  let n = B(e());
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
function Yl(e) {
  return Cn.call(e) === "[object Boolean]";
}
function Ee(e) {
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
function lu(e) {
  return Ee(e) && Object.keys(e).length === 0;
}
const Mr = (e) => (e == null ? void 0 : e.$) !== void 0, rn = Symbol("ArcoConfigProvider"), al = {
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
}, ou = {
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
  calendar: al,
  datePicker: {
    view: al.view,
    month: al.month,
    week: al.week,
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
}, au = B("zh-CN"), iu = Te({
  "zh-CN": ou
}), Ca = () => {
  const e = Ge(rn, void 0), t = m(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : iu[au.value];
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
var ru = Object.defineProperty, su = Object.defineProperties, uu = Object.getOwnPropertyDescriptors, Za = Object.getOwnPropertySymbols, cu = Object.prototype.hasOwnProperty, du = Object.prototype.propertyIsEnumerable, Qa = (e, t, n) => t in e ? ru(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fu = (e, t) => {
  for (var n in t || (t = {}))
    cu.call(t, n) && Qa(e, n, t[n]);
  if (Za)
    for (var n of Za(t))
      du.call(t, n) && Qa(e, n, t[n]);
  return e;
}, pu = (e, t) => su(e, uu(t));
const vu = "A", hu = "arco", sa = "$arco", Ue = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : vu;
}, Ke = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[sa] = pu(fu({}, (n = e.config.globalProperties[sa]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ne = (e) => {
  var t, n, l;
  const o = Kn(), i = Ge(rn, void 0), a = (l = (n = i == null ? void 0 : i.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[sa]) == null ? void 0 : t.classPrefix) != null ? l : hu;
  return e ? `${a}-${e}` : a;
};
var Dr = function() {
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
}(), ua = typeof window < "u" && typeof document < "u" && window.document === document, El = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), mu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(El) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), gu = 2;
function bu(e, t) {
  var n = !1, l = !1, o = 0;
  function i() {
    n && (n = !1, e()), l && r();
  }
  function a() {
    mu(i);
  }
  function r() {
    var s = Date.now();
    if (n) {
      if (s - o < gu)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return r;
}
var yu = 20, _u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], $u = typeof MutationObserver < "u", wu = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = bu(this.refresh.bind(this), yu);
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
      !ua || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), $u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ua || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = _u.some(function(i) {
        return !!~l.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), zr = function(e, t) {
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
  return t || El;
}, Ar = Gl(0, 0, 0, 0);
function xl(e) {
  return parseFloat(e) || 0;
}
function Ja(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var i = e["border-" + o + "-width"];
    return l + xl(i);
  }, 0);
}
function ku(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var i = o[l], a = e["padding-" + i];
    n[i] = xl(a);
  }
  return n;
}
function Cu(e) {
  var t = e.getBBox();
  return Gl(0, 0, t.width, t.height);
}
function Su(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Ar;
  var l = _n(e).getComputedStyle(e), o = ku(l), i = o.left + o.right, a = o.top + o.bottom, r = xl(l.width), s = xl(l.height);
  if (l.boxSizing === "border-box" && (Math.round(r + i) !== t && (r -= Ja(l, "left", "right") + i), Math.round(s + a) !== n && (s -= Ja(l, "top", "bottom") + a)), !Ou(e)) {
    var u = Math.round(r + i) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (r -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Gl(o.left, o.top, r, s);
}
var Vu = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof _n(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof _n(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ou(e) {
  return e === _n(e).document.documentElement;
}
function Eu(e) {
  return ua ? Vu(e) ? Cu(e) : Su(e) : Ar;
}
function xu(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return zr(a, {
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
function Gl(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var Bu = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Gl(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Eu(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Iu = (
  /** @class */
  function() {
    function e(t, n) {
      var l = xu(n);
      zr(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), Pu = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new Dr(), typeof t != "function")
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
        n.has(t) || (n.set(t, new Bu(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Iu(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Lr = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Dr(), Fr = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = wu.getInstance(), l = new Pu(t, n, this);
      Lr.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Fr.prototype[e] = function() {
    var t;
    return (t = Lr.get(this))[e].apply(t, arguments);
  };
});
var Sa = function() {
  return typeof El.ResizeObserver < "u" ? El.ResizeObserver : Fr;
}(), ei;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(ei || (ei = {}));
var ti;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(ti || (ti = {}));
const Xl = (e) => Boolean(e && e.shapeFlag & 1), Yn = (e, t) => Boolean(e && e.shapeFlag & 6), ju = (e, t) => Boolean(e && e.shapeFlag & 8), Va = (e, t) => Boolean(e && e.shapeFlag & 16), Nr = (e, t) => Boolean(e && e.shapeFlag & 32), gn = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Xl(l) || Yn(l))
        return l;
      if (Va(l, l.children)) {
        const o = gn(l.children);
        if (o)
          return o;
      } else if (Nr(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const i = gn(o);
          if (i)
            return i;
        }
      } else if (Ae(l)) {
        const o = gn(l);
        if (o)
          return o;
      }
    }
}, Tu = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Rr = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Xl(l) || Yn(l)) {
        const i = et(t) ? t(l) : t;
        return e[n] = Wl(l, i, !0), !0;
      }
      const o = Oa(l);
      if (o && o.length > 0 && Rr(o, t))
        return !0;
    }
  return !1;
}, Oa = (e) => {
  if (Va(e, e.children))
    return e.children;
  if (Ae(e))
    return e;
}, qr = (e) => {
  var t, n;
  if (Xl(e))
    return e.el;
  if (Yn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = qr(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = Oa(e);
    return Hr(l);
  }
}, Hr = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = qr(t);
      if (n)
        return n;
    }
}, ml = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const i of e ?? [])
    Xl(i) || Yn(i) || t && ju(i, i.children) ? o.push(i) : Va(i, i.children) ? o.push(...ml(i.children, t)) : Nr(i, i.children) ? o.push(...ml((l = (n = i.children).default) == null ? void 0 : l.call(n), t)) : Ae(i) && o.push(...ml(i, t));
  return o;
}, ni = (e) => {
  if (e)
    return et(e) ? e : () => e;
}, Wr = (e, t) => {
  var n;
  const l = [];
  if (Yn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Wr(e.component.subTree, t));
  else {
    const o = Oa(e);
    o && l.push(...Ur(o, t));
  }
  return l;
}, Ur = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Wr(l, t));
  return n;
};
var Bl = F({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = B(), i = m(() => Mr(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new Sa((u) => {
        const c = u[0];
        t("resize", c);
      }), l.observe(s));
    }, r = () => {
      l && (l.disconnect(), l = null);
    };
    return be(i, (s) => {
      l && r(), s && a(s);
    }), xe(() => {
      i.value && a(i.value);
    }), Ul(() => {
      r();
    }), () => {
      var s, u;
      const c = gn((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? Wl(c, {
        ref: o
      }, !0) : null;
    };
  }
});
const Kr = typeof window > "u" ? global : window, Mu = Kr.requestAnimationFrame, li = Kr.cancelAnimationFrame;
function oi(e) {
  let t = 0;
  const n = (...l) => {
    t && li(t), t = Mu(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    li(t), t = 0;
  }, n;
}
const Ea = () => {
}, Du = () => {
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
}, xa = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Et = (() => xa ? Ea : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), $n = (() => xa ? Ea : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), zu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, Au = (e, t) => {
  var n;
  return xa ? Ea() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, ai = (e, t) => {
  if (kt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Au(n, t);
  }
  return e;
}, Lu = (e, t) => {
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
const Fu = F({
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
function Nu(e, t, n, l, o, i) {
  return y(), x("span", {
    class: G([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [re(e.$slots, "default")], 2);
}
var ft = /* @__PURE__ */ fe(Fu, [["render", Nu]]);
const Ru = F({
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
}), qu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hu = /* @__PURE__ */ p("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Wu = [Hu];
function Uu(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Wu, 14, qu);
}
var co = /* @__PURE__ */ fe(Ru, [["render", Uu]]);
const sn = Object.assign(co, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + co.name, co);
  }
}), Ku = F({
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
}), Yu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gu = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Xu = [Gu];
function Zu(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Xu, 14, Yu);
}
var fo = /* @__PURE__ */ fe(Ku, [["render", Zu]]);
const Qu = Object.assign(fo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + fo.name, fo);
  }
}), Ju = F({
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
}), ec = ["stroke-width", "stroke-linecap", "stroke-linejoin"], tc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), nc = [tc];
function lc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, nc, 14, ec);
}
var po = /* @__PURE__ */ fe(Ju, [["render", lc]]);
const Yr = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), oc = F({
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
}), ac = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ic = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), rc = [ic];
function sc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, rc, 14, ac);
}
var vo = /* @__PURE__ */ fe(oc, [["render", sc]]);
const Gr = Object.assign(vo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + vo.name, vo);
  }
}), uc = F({
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
}), cc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], dc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), fc = [dc];
function pc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, fc, 14, cc);
}
var ho = /* @__PURE__ */ fe(uc, [["render", pc]]);
const Xr = Object.assign(ho, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ho.name, ho);
  }
});
function ii(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function ri(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function mo(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return ri(n.overflowY, t) || ri(n.overflowX, t) || function(l) {
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
function il(e, t, n, l, o, i, a, r) {
  return i < e && a > t || i > e && a < t ? 0 : i <= e && r <= n || a >= t && r >= n ? i - e - l : a > t && r < n || i < e && r > n ? a - t + o : 0;
}
var si = function(e, t) {
  var n = window, l = t.scrollMode, o = t.block, i = t.inline, a = t.boundary, r = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(M) {
    return M !== a;
  };
  if (!ii(e))
    throw new TypeError("Invalid target");
  for (var u, c, f = document.scrollingElement || document.documentElement, g = [], h = e; ii(h) && s(h); ) {
    if ((h = (c = (u = h).parentElement) == null ? u.getRootNode().host || null : c) === f) {
      g.push(h);
      break;
    }
    h != null && h === document.body && mo(h) && !mo(document.documentElement) || h != null && mo(h, r) && g.push(h);
  }
  for (var b = n.visualViewport ? n.visualViewport.width : innerWidth, _ = n.visualViewport ? n.visualViewport.height : innerHeight, P = window.scrollX || pageXOffset, T = window.scrollY || pageYOffset, k = e.getBoundingClientRect(), V = k.height, C = k.width, D = k.top, $ = k.right, O = k.bottom, N = k.left, Y = o === "start" || o === "nearest" ? D : o === "end" ? O : D + V / 2, R = i === "center" ? N + C / 2 : i === "end" ? $ : N, v = [], E = 0; E < g.length; E++) {
    var S = g[E], z = S.getBoundingClientRect(), K = z.height, W = z.width, X = z.top, A = z.right, ee = z.bottom, I = z.left;
    if (l === "if-needed" && D >= 0 && N >= 0 && O <= _ && $ <= b && D >= X && O <= ee && N >= I && $ <= A)
      return v;
    var w = getComputedStyle(S), q = parseInt(w.borderLeftWidth, 10), Q = parseInt(w.borderTopWidth, 10), he = parseInt(w.borderRightWidth, 10), ye = parseInt(w.borderBottomWidth, 10), se = 0, Be = 0, Se = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - q - he : 0, Pe = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - Q - ye : 0, pt = "offsetWidth" in S ? S.offsetWidth === 0 ? 0 : W / S.offsetWidth : 0, tt = "offsetHeight" in S ? S.offsetHeight === 0 ? 0 : K / S.offsetHeight : 0;
    if (f === S)
      se = o === "start" ? Y : o === "end" ? Y - _ : o === "nearest" ? il(T, T + _, _, Q, ye, T + Y, T + Y + V, V) : Y - _ / 2, Be = i === "start" ? R : i === "center" ? R - b / 2 : i === "end" ? R - b : il(P, P + b, b, q, he, P + R, P + R + C, C), se = Math.max(0, se + T), Be = Math.max(0, Be + P);
    else {
      se = o === "start" ? Y - X - Q : o === "end" ? Y - ee + ye + Pe : o === "nearest" ? il(X, ee, K, Q, ye + Pe, Y, Y + V, V) : Y - (X + K / 2) + Pe / 2, Be = i === "start" ? R - I - q : i === "center" ? R - (I + W / 2) + Se / 2 : i === "end" ? R - A + he + Se : il(I, A, W, q, he + Se, R, R + C, C);
      var rt = S.scrollLeft, L = S.scrollTop;
      Y += L - (se = Math.max(0, Math.min(L + se / tt, S.scrollHeight - K / tt + Pe))), R += rt - (Be = Math.max(0, Math.min(rt + Be / pt, S.scrollWidth - W / pt + Se)));
    }
    v.push({ el: S, top: se, left: Be });
  }
  return v;
};
const vc = ["info", "success", "warning", "error"], qt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], hc = F({
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
}), mc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gc = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), bc = [gc];
function yc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, bc, 14, mc);
}
var go = /* @__PURE__ */ fe(hc, [["render", yc]]);
const Kt = Object.assign(go, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + go.name, go);
  }
}), _c = F({
  name: "FeedbackIcon",
  components: {
    IconLoading: Kt,
    IconCheckCircleFill: Yr,
    IconExclamationCircleFill: Gr,
    IconCloseCircleFill: Xr
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
function $c(e, t, n, l, o, i) {
  const a = ce("icon-loading"), r = ce("icon-check-circle-fill"), s = ce("icon-exclamation-circle-fill"), u = ce("icon-close-circle-fill");
  return y(), x("span", {
    class: G(e.cls)
  }, [e.type === "validating" ? (y(), ie(a, {
    key: 0
  })) : e.type === "success" ? (y(), ie(r, {
    key: 1
  })) : e.type === "warning" ? (y(), ie(s, {
    key: 2
  })) : e.type === "error" ? (y(), ie(u, {
    key: 3
  })) : te("v-if", !0)], 2);
}
var Ba = /* @__PURE__ */ fe(_c, [["render", $c]]);
const Ia = {
  key: "Enter",
  code: "Enter"
}, wc = {
  key: "Backspace",
  code: "Backspace"
};
var kc = Object.defineProperty, ui = Object.getOwnPropertySymbols, Cc = Object.prototype.hasOwnProperty, Sc = Object.prototype.propertyIsEnumerable, ci = (e, t, n) => t in e ? kc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Vc = (e, t) => {
  for (var n in t || (t = {}))
    Cc.call(t, n) && ci(e, n, t[n]);
  if (ui)
    for (var n of ui(t))
      Sc.call(t, n) && ci(e, n, t[n]);
  return e;
};
const Gn = (e, t) => {
  const n = Vc({}, e);
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
const ca = Symbol("ArcoFormItemContext"), Pa = Symbol("ArcoFormContext"), mt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : Ge(ca, {}), i = m(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : o.size;
  }), a = m(() => (t == null ? void 0 : t.value) || o.disabled), r = m(() => (n == null ? void 0 : n.value) || o.error), s = Vl(o, "feedback"), u = Vl(o, "eventHandlers");
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
  const n = Ge(rn, void 0);
  return {
    mergedSize: m(() => {
      var o, i;
      return (i = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? i : t;
    })
  };
};
function Zr(e) {
  const t = B();
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
var Oc = Object.defineProperty, di = Object.getOwnPropertySymbols, Ec = Object.prototype.hasOwnProperty, xc = Object.prototype.propertyIsEnumerable, fi = (e, t, n) => t in e ? Oc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, pi = (e, t) => {
  for (var n in t || (t = {}))
    Ec.call(t, n) && fi(e, n, t[n]);
  if (di)
    for (var n of di(t))
      xc.call(t, n) && fi(e, n, t[n]);
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
    } = $e(e), s = ne("input"), u = B(), {
      mergedSize: c,
      mergedDisabled: f,
      mergedError: g,
      feedback: h,
      eventHandlers: b
    } = mt({
      size: o,
      disabled: i,
      error: a
    }), {
      mergedSize: _
    } = yt(c), [P, T] = Zr(u), k = B(e.defaultValue), V = m(() => {
      var L;
      return (L = e.modelValue) != null ? L : k.value;
    });
    be(r, (L) => {
      (Qe(L) || Sn(L)) && (k.value = "");
    });
    let C = V.value;
    const D = B(!1), $ = m(() => e.allowClear && !e.readonly && !f.value && Boolean(V.value)), O = B(!1), N = B(""), Y = (L) => {
      var M;
      return et(e.wordLength) ? e.wordLength(L) : (M = L.length) != null ? M : 0;
    }, R = m(() => Y(V.value)), v = m(() => g.value || Boolean(Ee(e.maxLength) && e.maxLength.errorOnly && R.value > S.value)), E = m(() => Ee(e.maxLength) && Boolean(e.maxLength.errorOnly)), S = m(() => Ee(e.maxLength) ? e.maxLength.length : e.maxLength), z = m(() => {
      const L = Y("a");
      return Math.floor(S.value / L);
    }), K = (L) => {
      var M, Z;
      S.value && !E.value && Y(L) > S.value && (L = (Z = (M = e.wordSlice) == null ? void 0 : M.call(e, L, S.value)) != null ? Z : L.slice(0, z.value)), k.value = L, t("update:modelValue", L);
    }, W = (L) => {
      u.value && L.target !== u.value && (L.preventDefault(), u.value.focus());
    }, X = (L, M) => {
      var Z, oe;
      L !== C && (C = L, t("change", L, M), (oe = (Z = b.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, M));
    }, A = (L) => {
      var M, Z;
      D.value = !0, C = V.value, t("focus", L), (Z = (M = b.value) == null ? void 0 : M.onFocus) == null || Z.call(M, L);
    }, ee = (L) => {
      var M, Z;
      D.value = !1, X(V.value, L), t("blur", L), (Z = (M = b.value) == null ? void 0 : M.onBlur) == null || Z.call(M, L);
    }, I = (L) => {
      var M, Z, oe;
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
        K(Me), t("input", Me, L), (Z = (M = b.value) == null ? void 0 : M.onInput) == null || Z.call(M, L), w();
      } else
        O.value = !0, N.value = V.value + ((oe = L.data) != null ? oe : "");
    }, w = () => {
      P(), Le(() => {
        u.value && V.value !== u.value.value && (u.value.value = V.value, T());
      });
    }, q = (L) => {
      var M, Z;
      const {
        value: oe
      } = L.target;
      if (!O.value) {
        if (S.value && !E.value && R.value >= S.value && Y(oe) > S.value && L.inputType === "insertText") {
          w();
          return;
        }
        K(oe), t("input", oe, L), (Z = (M = b.value) == null ? void 0 : M.onInput) == null || Z.call(M, L), w();
      }
    }, Q = (L) => {
      K(""), X("", L), t("clear", L);
    }, he = (L) => {
      const M = L.key || L.code;
      !O.value && M === Ia.key && (X(V.value, L), t("pressEnter", L));
    }, ye = m(() => [`${s}-outer`, `${s}-outer-size-${_.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), se = m(() => [`${s}-wrapper`, {
      [`${s}-error`]: v.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: D.value
    }]), Be = m(() => [s, `${s}-size-${_.value}`]), Se = m(() => Gn(l, qt)), Pe = m(() => Xn(l, qt)), pt = m(() => {
      const L = pi(pi({}, Pe.value), e.inputAttrs);
      return v.value && (L["aria-invalid"] = !0), L;
    }), tt = (L) => {
      var M;
      return d("span", Ve({
        class: se.value,
        onMousedown: W
      }, L ? void 0 : Se.value), [n.prefix && d("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), d("input", Ve({
        ref: u,
        class: Be.value,
        value: V.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: f.value,
        onInput: q,
        onKeydown: he,
        onFocus: A,
        onBlur: ee,
        onCompositionstart: I,
        onCompositionupdate: I,
        onCompositionend: I
      }, pt.value), null), $.value && d(ft, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: Q
      }, {
        default: () => [d(sn, null, null)]
      }), (n.suffix || Boolean(e.maxLength) && e.showWordLimit || Boolean(h.value)) && d("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [Boolean(e.maxLength) && e.showWordLimit && d("span", {
        class: `${s}-word-limit`
      }, [R.value, ke("/"), S.value]), (M = n.suffix) == null ? void 0 : M.call(n), Boolean(h.value) && d(Ba, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? d("span", Ve({
        class: ye.value
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
const Bc = F({
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
}), Ic = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Pc = /* @__PURE__ */ p("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), jc = [Pc];
function Tc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, jc, 14, Ic);
}
var bo = /* @__PURE__ */ fe(Bc, [["render", Tc]]);
const da = Object.assign(bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bo.name, bo);
  }
}), Qr = Symbol("ArcoButtonGroup"), Mc = F({
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
    } = $e(e), o = ne("btn"), i = Ge(Qr, void 0), a = m(() => {
      var h;
      return (h = n.value) != null ? h : i == null ? void 0 : i.size;
    }), r = m(() => Boolean(l.value || (i == null ? void 0 : i.disabled))), {
      mergedSize: s,
      mergedDisabled: u
    } = mt({
      size: a,
      disabled: r
    }), {
      mergedSize: c
    } = yt(s), f = m(() => {
      var h, b, _, P, T, k;
      return [o, `${o}-${(b = (h = e.type) != null ? h : i == null ? void 0 : i.type) != null ? b : "secondary"}`, `${o}-shape-${(P = (_ = e.shape) != null ? _ : i == null ? void 0 : i.shape) != null ? P : "square"}`, `${o}-size-${c.value}`, `${o}-status-${(k = (T = e.status) != null ? T : i == null ? void 0 : i.status) != null ? k : "normal"}`, {
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
}), Dc = ["href"], zc = ["type", "disabled"];
function Ac(e, t, n, l, o, i) {
  const a = ce("icon-loading");
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
  }, [e.loading ? (y(), ie(a, {
    key: 0,
    spin: "true"
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), re(e.$slots, "default")], 10, Dc)) : (y(), x("button", {
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
  }, [e.loading ? (y(), ie(a, {
    key: 0,
    spin: !0
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), re(e.$slots, "default")], 10, zc));
}
var yo = /* @__PURE__ */ fe(Mc, [["render", Ac]]);
const Lc = F({
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
    } = $e(e), a = ne("btn-group");
    return Wt(Qr, Te({
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
function Fc(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var _o = /* @__PURE__ */ fe(Lc, [["render", Fc]]);
const wn = Object.assign(yo, {
  Group: _o,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + yo.name, yo), e.component(n + _o.name, _o);
  }
});
var $o = F({
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
    } = $e(e), o = ne("input-search"), {
      mergedSize: i
    } = yt(l), a = B(), r = (f) => {
      a.value.inputRef && t("search", a.value.inputRef.value, f);
    }, s = () => {
      var f;
      return d(Oe, null, [e.loading ? d(Kt, null, null) : d(ft, {
        onClick: r
      }, {
        default: () => [d(da, null, null)]
      }), (f = n.suffix) == null ? void 0 : f.call(n)]);
    }, u = () => {
      var f;
      let g = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? g = {
        default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : g = {
        icon: () => d(da, null, null)
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
const Nc = F({
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
}), Rc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], qc = /* @__PURE__ */ p("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Hc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Wc = [qc, Hc];
function Uc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Wc, 14, Rc);
}
var wo = /* @__PURE__ */ fe(Nc, [["render", Uc]]);
const Kc = Object.assign(wo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + wo.name, wo);
  }
}), Yc = F({
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
}), Gc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Xc = /* @__PURE__ */ p("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Zc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Qc = [Xc, Zc];
function Jc(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Qc, 14, Gc);
}
var ko = /* @__PURE__ */ fe(Yc, [["render", Jc]]);
const ed = Object.assign(ko, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ko.name, ko);
  }
});
function Hn(e) {
  const t = B(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function td(e, t) {
  const {
    value: n
  } = $e(t), [l, o] = Hn(Qe(n.value) ? e : n.value);
  return be(n, (a) => {
    Qe(a) && o(void 0);
  }), [m(() => Qe(n.value) ? l.value : n.value), o, l];
}
const nd = F({
  name: "InputPassword",
  components: {
    IconEye: Kc,
    IconEyeInvisible: ed,
    AIconHover: ft,
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
    } = $e(e), o = B(), i = () => {
      s(!a.value);
    }, [a, r] = td(l.value, Te({
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
function ld(e, t, n, l, o, i) {
  const a = ce("icon-eye"), r = ce("icon-eye-invisible"), s = ce("a-icon-hover"), u = ce("a-input");
  return y(), ie(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Pr({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: le(() => [re(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: le(() => [re(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: le(() => [e.invisibleButton ? (y(), ie(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = on(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = on(() => {
      }, ["prevent"]))
    }, {
      default: le(() => [e.mergedVisible ? (y(), ie(r, {
        key: 1
      })) : (y(), ie(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : te("v-if", !0), re(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: le(() => [re(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var Co = /* @__PURE__ */ fe(nd, [["render", ld]]);
const od = F({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ne("input-group")
    };
  }
});
function ad(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var zn = /* @__PURE__ */ fe(od, [["render", ad]]);
const Yt = Object.assign(Dn, {
  Search: $o,
  Password: Co,
  Group: zn,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Dn.name, Dn), e.component(n + zn.name, zn), e.component(n + $o.name, $o), e.component(n + Co.name, Co);
  }
});
var id = Object.defineProperty, vi = Object.getOwnPropertySymbols, rd = Object.prototype.hasOwnProperty, sd = Object.prototype.propertyIsEnumerable, hi = (e, t, n) => t in e ? id(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    rd.call(t, n) && hi(e, n, t[n]);
  if (vi)
    for (var n of vi(t))
      sd.call(t, n) && hi(e, n, t[n]);
  return e;
};
const ud = () => {
  const {
    height: e,
    width: t
  } = Du();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, mi = (e, t) => {
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
}, cd = (e) => {
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
}, dd = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: i,
  translate: a
}) => {
  const r = cd(e), s = ud(), u = {
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
      s.height - (n.top + f.top + o.height) > 0 && (c = rl(e, "bottom"), t.top = f.top);
    }
  if (r === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const f = Pn("top", l, o, {
        offset: i,
        translate: a
      });
      n.top + f.top > 0 && (c = rl(e, "top"), t.top = f.top);
    }
  if (r === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const f = Pn("right", l, o, {
        offset: i,
        translate: a
      });
      s.width - (n.left + f.left + o.width) > 0 && (c = rl(e, "right"), t.left = f.left);
    }
  if (r === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const f = Pn("left", l, o, {
        offset: i,
        translate: a
      });
      n.left + f.left > 0 && (c = rl(e, "left"), t.left = f.left);
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
}, fd = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, pd = (e, t, n, l, {
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
    const f = dd(e, u, {
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
}, vd = (e, t, n, {
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
}, hd = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, gi = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    hd(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, Jr = () => {
  const e = {}, t = B(), n = () => {
    const l = Hr(e.value);
    l !== t.value && (t.value = l);
  };
  return xe(() => n()), jt(() => n()), {
    children: e,
    firstElement: t
  };
};
var Il = F({
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
    } = Jr();
    let i;
    const a = (s) => {
      s && (i = new Sa((u) => {
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
function md(e, t) {
  const n = B(e[t]);
  return jt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const bi = Symbol("ArcoTrigger"), gd = 1e3, bd = 5e3, yd = 1;
class _d {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || bd : Array.from(this.popupStack.popup).pop() || gd) + yd, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const So = new _d();
function es(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = B(0), o = () => {
    l.value = So.add(e);
  }, i = () => {
    So.delete(l.value, e);
  }, a = () => e === "dialog" ? So.isLastDialog(l.value) : !1;
  return be(() => t == null ? void 0 : t.value, (r) => {
    r ? o() : i();
  }, {
    immediate: !0
  }), n && (xe(() => {
    o();
  }), Ut(() => {
    i();
  })), {
    zIndex: Zs(l),
    open: o,
    close: i,
    isLastDialog: a
  };
}
const $d = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new Sa((i) => {
        const a = i[0];
        et(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var wd = F({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = B(!1);
    return xe(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const kd = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = B(e.value), i = B(), a = () => {
    const r = ai(e.value), s = r ? e.value : n, u = r ?? (l ? document.documentElement : ai(n));
    s !== o.value && (o.value = s), u !== i.value && (i.value = u);
  };
  return xe(() => a()), be(t, (r) => {
    o.value !== e.value && r && a();
  }), {
    teleportContainer: o,
    containerRef: i
  };
};
var Cd = Object.defineProperty, Sd = Object.defineProperties, Vd = Object.getOwnPropertyDescriptors, yi = Object.getOwnPropertySymbols, Od = Object.prototype.hasOwnProperty, Ed = Object.prototype.propertyIsEnumerable, _i = (e, t, n) => t in e ? Cd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xd = (e, t) => {
  for (var n in t || (t = {}))
    Od.call(t, n) && _i(e, n, t[n]);
  if (yi)
    for (var n of yi(t))
      Ed.call(t, n) && _i(e, n, t[n]);
  return e;
}, Bd = (e, t) => Sd(e, Vd(t));
const Id = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var Vo = F({
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
    } = $e(e), i = ne("trigger"), a = m(() => Gn(l, Id)), r = Ge(rn, void 0), s = m(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = Ge(bi, void 0), {
      children: f,
      firstElement: g
    } = Jr(), h = B(), b = B(e.defaultPopupVisible), _ = B(e.position), P = B({}), T = B({}), k = B({}), V = B(), C = B({
      top: 0,
      left: 0
    });
    let D = null, $ = null;
    const O = m(() => {
      var j;
      return (j = e.popupVisible) != null ? j : b.value;
    }), {
      teleportContainer: N,
      containerRef: Y
    } = kd({
      popupContainer: o,
      visible: O,
      documentContainer: !0
    }), {
      zIndex: R
    } = es("popup", {
      visible: O
    });
    let v = 0, E = !1, S = !1;
    const z = () => {
      v && (window.clearTimeout(v), v = 0);
    }, K = (j) => {
      if (e.alignPoint) {
        const {
          pageX: U,
          pageY: ae
        } = j;
        C.value = {
          top: ae,
          left: U
        };
      }
    }, W = () => {
      if (!g.value || !h.value || !Y.value)
        return;
      const j = Y.value.getBoundingClientRect(), U = e.alignPoint ? {
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
      } : mi(g.value, j), ae = () => mi(h.value, j), vt = ae(), {
        style: nt,
        position: dn
      } = pd(e.position, j, U, vt, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (T.value = {
        transformOrigin: fd(dn)
      }), e.autoFitPopupMinWidth ? nt.minWidth = `${U.width}px` : e.autoFitPopupWidth && (nt.width = `${U.width}px`), _.value !== dn && (_.value = dn), P.value = nt, e.showArrow && Le(() => {
        k.value = vd(dn, U, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, X = (j, U) => {
      if (j === O.value && v === 0)
        return;
      const ae = () => {
        b.value = j, t("update:popupVisible", j), t("popupVisibleChange", j), j && Le(() => {
          W();
        });
      };
      j || (D = null, $ = null), U ? (z(), j !== O.value && (v = window.setTimeout(ae, U))) : ae();
    }, A = (j) => {
      var U;
      (U = l.onClick) == null || U.call(l, j), !(e.disabled || O.value && !e.clickToClose) && (s.value.includes("click") ? (K(j), X(!O.value)) : s.value.includes("contextMenu") && O.value && X(!1));
    }, ee = (j) => {
      var U;
      (U = l.onMouseenter) == null || U.call(l, j), !(e.disabled || !s.value.includes("hover")) && (K(j), X(!0, e.mouseEnterDelay));
    }, I = (j) => {
      c == null || c.onMouseenter(j), ee(j);
    }, w = (j) => {
      var U;
      (U = l.onMouseleave) == null || U.call(l, j), !(e.disabled || !s.value.includes("hover")) && X(!1, e.mouseLeaveDelay);
    }, q = (j) => {
      c == null || c.onMouseleave(j), w(j);
    }, Q = (j) => {
      var U;
      (U = l.onFocusin) == null || U.call(l, j), !(e.disabled || !s.value.includes("focus")) && X(!0, e.focusDelay);
    }, he = (j) => {
      var U;
      (U = l.onFocusout) == null || U.call(l, j), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && X(!1);
    }, ye = (j) => {
      var U;
      (U = l.onContextmenu) == null || U.call(l, j), !(e.disabled || !s.value.includes("contextMenu") || O.value && !e.clickToClose) && (K(j), X(!O.value), j.preventDefault());
    };
    Wt(bi, Te({
      onMouseenter: I,
      onMouseleave: q,
      addChildRef: (j) => {
        u.add(j), c == null || c.addChildRef(j);
      },
      removeChildRef: (j) => {
        u.delete(j), c == null || c.removeChildRef(j);
      }
    }));
    const Se = () => {
      $n(document.documentElement, "mousedown", tt), E = !1;
    }, Pe = md(n, "content"), pt = m(() => {
      var j;
      return e.hideEmpty && Tu((j = Pe.value) == null ? void 0 : j.call(Pe));
    }), tt = (j) => {
      var U, ae, vt;
      if (!((U = g.value) != null && U.contains(j.target) || (ae = h.value) != null && ae.contains(j.target))) {
        for (const nt of u)
          if ((vt = nt.value) != null && vt.contains(j.target))
            return;
        Se(), X(!1);
      }
    }, rt = (j, U) => {
      const [ae, vt] = j, {
        scrollTop: nt,
        scrollLeft: dn
      } = U;
      return Math.abs(nt - ae) >= e.scrollToCloseDistance || Math.abs(dn - vt) >= e.scrollToCloseDistance;
    }, L = oi((j) => {
      if (O.value)
        if (e.scrollToClose || r != null && r.scrollToClose) {
          const U = j.target;
          D || (D = [U.scrollTop, U.scrollLeft]), rt(D, U) ? X(!1) : W();
        } else
          W();
    }), M = () => {
      $n(window, "scroll", Z), S = !1;
    }, Z = oi((j) => {
      const U = j.target.documentElement;
      $ || ($ = [U.scrollTop, U.scrollLeft]), rt($, U) && (X(!1), M());
    }), oe = () => {
      O.value && W();
    }, Me = () => {
      oe(), t("resize");
    }, De = (j) => {
      e.preventFocus && j.preventDefault();
    };
    c == null || c.addChildRef(h);
    const Ot = m(() => O.value ? e.openedClass : void 0);
    let Xe;
    be(O, (j) => {
      if (e.clickOutsideToClose && (!j && E ? Se() : j && !E && (Et(document.documentElement, "mousedown", tt), E = !0)), (e.scrollToClose || r != null && r.scrollToClose) && (Et(window, "scroll", Z), S = !0), e.updateAtScroll || r != null && r.updateAtScroll) {
        if (j) {
          Xe = gi(g.value);
          for (const U of Xe)
            U.addEventListener("scroll", L);
        } else if (Xe) {
          for (const U of Xe)
            U.removeEventListener("scroll", L);
          Xe = void 0;
        }
      }
      j && (xn.value = !0);
    }), be(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      O.value && W();
    });
    const {
      createResizeObserver: ro,
      destroyResizeObserver: so
    } = $d({
      elementRef: Y,
      onResize: oe
    });
    xe(() => {
      if (ro(), O.value && (W(), e.clickOutsideToClose && !E && (Et(document.documentElement, "mousedown", tt), E = !0), e.updateAtScroll || r != null && r.updateAtScroll)) {
        Xe = gi(g.value);
        for (const j of Xe)
          j.addEventListener("scroll", L);
      }
    }), jt(() => {
      O.value && W();
    }), Qs(() => {
      X(!1);
    }), Ut(() => {
      if (c == null || c.removeChildRef(h), so(), E && Se(), S && M(), Xe) {
        for (const j of Xe)
          j.removeEventListener("scroll", L);
        Xe = void 0;
      }
    });
    const xn = B(O.value), Dt = B(!1), ol = () => {
      Dt.value = !0;
    }, uo = () => {
      Dt.value = !1, O.value && t("show");
    }, H = () => {
      Dt.value = !1, O.value || (xn.value = !1, t("hide"));
    };
    return () => {
      var j, U;
      return f.value = (U = (j = n.default) == null ? void 0 : j.call(n)) != null ? U : [], Rr(f.value, {
        class: Ot.value,
        onClick: A,
        onMouseenter: ee,
        onMouseleave: w,
        onFocusin: Q,
        onFocusout: he,
        onContextmenu: ye
      }), d(Oe, null, [e.autoFixPosition ? d(Il, {
        onResize: Me
      }, {
        default: () => [f.value]
      }) : f.value, d(wd, null, {
        default: () => [d(Js, {
          to: N.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || O.value || xn.value) && !pt.value && d(Il, {
            onResize: oe
          }, {
            default: () => [d("div", Ve({
              ref: h,
              class: [`${i}-popup`, `${i}-position-${_.value}`],
              style: Bd(xd({}, P.value), {
                zIndex: R.value,
                pointerEvents: Dt.value ? "none" : "auto"
              }),
              "trigger-placement": _.value,
              onMouseenter: I,
              onMouseleave: q,
              onMousedown: De
            }, a.value), [d(Ol, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: ol,
              onAfterEnter: uo,
              onBeforeLeave: ol,
              onAfterLeave: H
            }, {
              default: () => {
                var ae;
                return [$a(d("div", {
                  class: `${i}-popup-wrapper`,
                  style: T.value
                }, [d("div", {
                  class: [`${i}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ae = n.content) == null ? void 0 : ae.call(n)]), e.showArrow && d("div", {
                  ref: V,
                  class: [`${i}-arrow`, e.arrowClass],
                  style: k.value
                }, null)]), [[wa, O.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Pl = Object.assign(Vo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Vo.name, Vo);
  }
}), Pd = F({
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
}), jd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Td = /* @__PURE__ */ p("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Md = [Td];
function Dd(e, t, n, l, o, i) {
  return y(), x("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: G(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Md, 14, jd);
}
var Oo = /* @__PURE__ */ fe(Pd, [["render", Dd]]);
const zd = Object.assign(Oo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Oo.name, Oo);
  }
});
var Eo = F({
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
    } = Ca(), i = Ge(rn, void 0);
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
      }, null) : d(zd, null, null)]), d("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const Ad = Object.assign(Eo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Eo.name, Eo);
  }
}), Ld = 5;
var Fd = F({
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
      }, [Array(Ld).fill(1).map((l, o) => d("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), xo = F({
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
    const n = ne("spin"), l = Ge(rn, void 0), o = m(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), i = () => {
      if (t.icon) {
        const r = gn(t.icon());
        if (r)
          return Wl(r, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? d(Fd, {
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
      return d(Oe, null, [!e.hideIcon && d("div", {
        class: `${n}-icon`,
        style: c
      }, [i()]), f && d("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => d("div", {
      class: o.value
    }, [t.default ? d(Oe, null, [t.default(), e.loading && d("div", {
      class: `${n}-mask`
    }, [d("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Nd = Object.assign(xo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + xo.name, xo);
  }
}), Rd = F({
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
    const n = ne("scrollbar"), l = B(!1), o = B(), i = B(), a = m(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), r = B(0), s = B(!1), u = B(0), c = m(() => {
      var k, V;
      return {
        [a.value.size]: `${(V = (k = e.data) == null ? void 0 : k.thumbSize) != null ? V : 0}px`,
        [a.value.direction]: `${r.value}px`
      };
    }), f = (k) => {
      k.preventDefault(), i.value && (u.value = k[a.value.client] - i.value.getBoundingClientRect()[a.value.direction], s.value = !0, Et(window, "mousemove", b), Et(window, "mouseup", _), Et(window, "contextmenu", _));
    }, g = (k) => {
      var V, C, D, $;
      if (k.preventDefault(), i.value) {
        const O = h(k[a.value.client] > i.value.getBoundingClientRect()[a.value.direction] ? r.value + ((C = (V = e.data) == null ? void 0 : V.thumbSize) != null ? C : 0) : r.value - (($ = (D = e.data) == null ? void 0 : D.thumbSize) != null ? $ : 0));
        O !== r.value && (r.value = O, t("scroll", O));
      }
    }, h = (k) => k < 0 ? 0 : e.data && k > e.data.max ? e.data.max : k, b = (k) => {
      if (o.value && i.value) {
        const V = h(k[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        V !== r.value && (r.value = V, t("scroll", V));
      }
    }, _ = () => {
      s.value = !1, $n(window, "mousemove", b), $n(window, "mouseup", _);
    }, P = (k) => {
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
      setOffset: P
    };
  }
});
function qd(e, t, n, l, o, i) {
  return y(), ie(Ol, null, {
    default: le(() => [p("div", {
      ref: "trackRef",
      class: G([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = on((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [p("div", {
      ref: "thumbRef",
      class: G(e.thumbCls),
      style: ve(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [p("div", {
      class: G(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var Hd = /* @__PURE__ */ fe(Rd, [["render", qd]]);
const $i = 20, sl = 15, Wd = F({
  name: "Scrollbar",
  components: {
    ResizeObserver: Il,
    Thumb: Hd
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
    const n = ne("scrollbar"), l = B(), o = B(), i = B(), a = B(), r = B(), s = B(!1), u = B(!1), c = m(() => s.value && !e.disableHorizontal), f = m(() => u.value && !e.disableVertical), g = B(!1), h = () => {
      var C, D, $, O, N, Y;
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
        const A = e.type === "embed" && g.value ? E - sl : E, ee = e.type === "embed" && g.value ? S - sl : S, I = Math.round(A / Math.min(z / R, A / $i)), w = A - I, q = (z - R) / w, Q = Math.round(ee / Math.min(K / v, ee / $i)), he = ee - Q, ye = (K - v) / he;
        if (o.value = {
          ratio: q,
          thumbSize: I,
          max: w
        }, i.value = {
          ratio: ye,
          thumbSize: Q,
          max: he
        }, W > 0) {
          const se = Math.round(W / ((D = (C = i.value) == null ? void 0 : C.ratio) != null ? D : 1));
          ($ = r.value) == null || $.setOffset(se);
        }
        if (X > 0) {
          const se = Math.round(X / ((N = (O = i.value) == null ? void 0 : O.ratio) != null ? N : 1));
          (Y = a.value) == null || Y.setOffset(se);
        }
      }
    };
    xe(() => {
      h();
    });
    const b = () => {
      h();
    }, _ = (C) => {
      var D, $, O, N, Y, R;
      if (l.value) {
        if (c.value && !e.disableHorizontal) {
          const v = Math.round(l.value.scrollLeft / (($ = (D = o.value) == null ? void 0 : D.ratio) != null ? $ : 1));
          (O = a.value) == null || O.setOffset(v);
        }
        if (f.value && !e.disableVertical) {
          const v = Math.round(l.value.scrollTop / ((Y = (N = i.value) == null ? void 0 : N.ratio) != null ? Y : 1));
          (R = r.value) == null || R.setOffset(v);
        }
      }
      t("scroll", C);
    }, P = (C) => {
      var D, $;
      l.value && l.value.scrollTo({
        left: C * (($ = (D = o.value) == null ? void 0 : D.ratio) != null ? $ : 1)
      });
    }, T = (C) => {
      var D, $;
      l.value && l.value.scrollTo({
        top: C * (($ = (D = i.value) == null ? void 0 : D.ratio) != null ? $ : 1)
      });
    }, k = m(() => {
      const C = {};
      return e.type === "track" && (c.value && (C.paddingBottom = `${sl}px`), f.value && (C.paddingRight = `${sl}px`)), [C, e.outerStyle];
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
      handleHorizontalScroll: P,
      handleVerticalScroll: T
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
function Ud(e, t, n, l, o, i) {
  const a = ce("ResizeObserver"), r = ce("thumb");
  return y(), x("div", {
    class: G(e.cls),
    style: ve(e.style)
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
      default: le(() => [re(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (y(), ie(r, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (y(), ie(r, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0)], 6);
}
var Bo = /* @__PURE__ */ fe(Wd, [["render", Ud]]);
const Kd = Object.assign(Bo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Bo.name, Bo);
  }
}), Yd = (e) => {
  const t = B(), n = () => Mr(t.value) ? t.value.$refs[e] : t.value, l = B();
  return xe(() => {
    l.value = n();
  }), be([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Gd = Object.defineProperty, wi = Object.getOwnPropertySymbols, Xd = Object.prototype.hasOwnProperty, Zd = Object.prototype.propertyIsEnumerable, ki = (e, t, n) => t in e ? Gd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Qd = (e, t) => {
  for (var n in t || (t = {}))
    Xd.call(t, n) && ki(e, n, t[n]);
  if (wi)
    for (var n of wi(t))
      Zd.call(t, n) && ki(e, n, t[n]);
  return e;
};
const Jd = (e) => {
  const t = m(() => Boolean(e.value)), n = m(() => {
    if (e.value)
      return Qd({
        type: "embed"
      }, Yl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, ef = F({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Kd,
    Empty: Ad,
    Spin: Nd
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
    } = $e(e), r = ne("select-dropdown"), s = Ge(rn, void 0), u = (i = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : i[0], {
      componentRef: c,
      elementRef: f
    } = Yd("containerRef"), {
      displayScrollbar: g,
      scrollbarProps: h
    } = Jd(a), b = (P) => {
      const {
        scrollTop: T,
        scrollHeight: k,
        offsetHeight: V
      } = P.target;
      k - (T + V) <= e.bottomOffset && t("reachBottom", P), t("scroll", P);
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
function tf(e, t, n, l, o, i) {
  const a = ce("spin");
  return y(), x("div", {
    class: G(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (y(), x("div", {
    key: 0,
    class: G(`${e.prefixCls}-header`)
  }, [re(e.$slots, "header")], 2)) : te("v-if", !0), e.loading ? (y(), ie(a, {
    key: 1,
    class: G(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (y(), x("div", {
    key: 2,
    class: G(`${e.prefixCls}-empty`)
  }, [re(e.$slots, "empty", {}, () => [(y(), ie(tn(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : te("v-if", !0), e.virtualList && !e.loading && !e.empty ? re(e.$slots, "virtual-list", {
    key: 3
  }) : te("v-if", !0), e.virtualList ? te("v-if", !0) : $a((y(), ie(tn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Ve({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: le(() => [p("ul", {
      class: G(`${e.prefixCls}-list`)
    }, [re(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[wa, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (y(), x("div", {
    key: 5,
    class: G(`${e.prefixCls}-footer`)
  }, [re(e.$slots, "footer")], 2)) : te("v-if", !0)], 2);
}
var nf = /* @__PURE__ */ fe(ef, [["render", tf]]), Ci = F({
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
const ts = Symbol("ArcoCheckboxGroup");
var gl = F({
  name: "Checkbox",
  components: {
    IconCheck: Ci,
    IconHover: ft
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
    } = $e(e), i = ne("checkbox"), a = B(), r = e.uninjectGroupContext ? void 0 : Ge(ts, void 0), s = (r == null ? void 0 : r.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = mt({
      disabled: l
    }), f = B(e.defaultChecked), g = m(() => {
      var C;
      return s ? r == null ? void 0 : r.computedValue : (C = e.modelValue) != null ? C : f.value;
    }), h = m(() => {
      var C;
      return Ae(g.value) ? g.value.includes((C = e.value) != null ? C : !0) : g.value;
    }), b = m(() => (r == null ? void 0 : r.disabled) || (u == null ? void 0 : u.value) || !h.value && (r == null ? void 0 : r.isMaxed)), _ = (C) => {
      C.stopPropagation();
    }, P = (C) => {
      var D, $, O, N;
      const {
        checked: Y
      } = C.target;
      let R = Y;
      if (Ae(g.value)) {
        const v = new Set(g.value);
        Y ? v.add((D = e.value) != null ? D : !0) : v.delete(($ = e.value) != null ? $ : !0), R = Array.from(v);
      }
      f.value = Y, s && Ae(R) ? r == null || r.handleChange(R, C) : (t("update:modelValue", R), t("change", R, C), (N = (O = c.value) == null ? void 0 : O.onChange) == null || N.call(O, C)), Le(() => {
        a.value && a.value.checked !== h.value && (a.value.checked = h.value);
      });
    }, T = m(() => [i, {
      [`${i}-checked`]: h.value,
      [`${i}-indeterminate`]: e.indeterminate,
      [`${i}-disabled`]: b.value
    }]), k = (C) => {
      var D, $;
      ($ = (D = c.value) == null ? void 0 : D.onFocus) == null || $.call(D, C);
    }, V = (C) => {
      var D, $;
      ($ = (D = c.value) == null ? void 0 : D.onBlur) == null || $.call(D, C);
    };
    return be(o, (C) => {
      (Qe(C) || Sn(C)) && (f.value = !1);
    }), be(g, (C) => {
      var D;
      let $;
      Ae(C) ? $ = C.includes((D = e.value) != null ? D : !0) : $ = C, f.value !== $ && (f.value = $), a.value && a.value.checked !== $ && (a.value.checked = $);
    }), () => {
      var C, D, $, O;
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
        onChange: P,
        onFocus: k,
        onBlur: V
      }, null), (O = ($ = (D = n.checkbox) != null ? D : (C = r == null ? void 0 : r.slots) == null ? void 0 : C.checkbox) == null ? void 0 : $({
        checked: h.value,
        disabled: b.value
      })) != null ? O : d(ft, {
        class: `${i}-icon-hover`,
        disabled: b.value || h.value
      }, {
        default: () => [d("div", {
          class: `${i}-icon`
        }, [h.value && d(Ci, {
          class: `${i}-icon-check`
        }, null)])]
      }), n.default && d("span", {
        class: `${i}-label`
      }, [n.default()])]);
    };
  }
}), bl = F({
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
    } = $e(e), o = ne("checkbox-group"), {
      mergedDisabled: i,
      eventHandlers: a
    } = mt({
      disabled: l
    }), r = B(e.defaultValue), s = m(() => Ae(e.modelValue) ? e.modelValue : r.value), u = m(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = m(() => {
      var b;
      return ((b = e.options) != null ? b : []).map((_) => kt(_) || ge(_) ? {
        label: _,
        value: _
      } : _);
    });
    Wt(ts, Te({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: i,
      isMaxed: u,
      slots: n,
      handleChange: (b, _) => {
        var P, T;
        r.value = b, t("update:modelValue", b), t("change", b, _), (T = (P = a.value) == null ? void 0 : P.onChange) == null || T.call(P, _);
      }
    }));
    const g = m(() => [o, `${o}-direction-${e.direction}`]);
    be(() => e.modelValue, (b) => {
      Ae(b) ? r.value = [...b] : r.value = [];
    });
    const h = () => c.value.map((b) => {
      const _ = s.value.includes(b.value);
      return d(gl, {
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
const ns = Object.assign(gl, {
  Group: bl,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + gl.name, gl), e.component(n + bl.name, bl);
  }
}), ls = Symbol("ArcoSelectContext");
var lf = Object.defineProperty, of = Object.defineProperties, af = Object.getOwnPropertyDescriptors, Si = Object.getOwnPropertySymbols, rf = Object.prototype.hasOwnProperty, sf = Object.prototype.propertyIsEnumerable, Vi = (e, t, n) => t in e ? lf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ja = (e, t) => {
  for (var n in t || (t = {}))
    rf.call(t, n) && Vi(e, n, t[n]);
  if (Si)
    for (var n of Si(t))
      sf.call(t, n) && Vi(e, n, t[n]);
  return e;
}, os = (e, t) => of(e, af(t));
const uf = (e) => Ee(e) && "isGroup" in e, as = (e) => Ee(e) && "isGroup" in e, cf = (e, t = "value") => String(Ee(e) ? e[t] : e), Wn = (e, t = "value") => Ee(e) ? `__arco__option__object__${e[t]}` : e || ge(e) || kt(e) || Yl(e) ? `__arco__option__${typeof e}-${e}` : "", df = (e) => e.has("__arco__option__string-"), ff = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var i;
  if (Ee(e)) {
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
  return ja({
    raw: a,
    index: o,
    key: Wn(e, t),
    origin: l
  }, a);
}, fa = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var i;
  const a = [];
  for (const r of e)
    if (uf(r)) {
      const s = fa((i = r.options) != null ? i : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(os(ja({}, r), {
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
}, Oi = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var i;
    const a = [];
    for (const r of o)
      if (as(r)) {
        const s = l((i = r.options) != null ? i : []);
        s.length > 0 && a.push(os(ja({}, r), {
          options: s
        }));
      } else
        Zl(r, {
          inputValue: t,
          filterOption: n
        }) && a.push(r);
    return a;
  };
  return l(e);
}, Zl = (e, {
  inputValue: t,
  filterOption: n
}) => et(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, pf = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Ta(e[n], t[n]))
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
    if (!Ta(e[l], t[l]))
      return !1;
  return !0;
}, Ta = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? pf(e, t) : n === "[object Array]" ? vf(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, hf = F({
  name: "Option",
  components: {
    Checkbox: ns
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
    } = $e(e), o = ne("select-option"), i = Ge(ls, void 0), a = Kn(), r = B(), s = B(n.value);
    be(n, ($, O) => {
      Ta($, O) || (s.value = $);
    });
    const u = B(""), c = m(() => {
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
    xe(() => b()), jt(() => b());
    const _ = m(() => {
      var $;
      return ($ = i == null ? void 0 : i.valueKeys.includes(g.value)) != null ? $ : !1;
    }), P = m(() => (i == null ? void 0 : i.activeKey) === g.value);
    let T = B(!0);
    if (!e.internal) {
      const $ = Te({
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
      T = m(() => Zl($, {
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
    }, D = m(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: _.value,
      [`${o}-active`]: P.value,
      [`${o}-multiple`]: i == null ? void 0 : i.multiple
    }]);
    return {
      prefixCls: o,
      cls: D,
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
  const a = ce("checkbox");
  return $a((y(), ie(tn(e.component), {
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
    }, [re(e.$slots, "icon")], 2)) : te("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (y(), ie(a, {
      key: 1,
      class: G(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: le(() => [re(e.$slots, "default", {}, () => [ke(de(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (y(), x("span", {
      key: 2,
      class: G(`${e.prefixCls}-content`)
    }, [re(e.$slots, "default", {}, () => [ke(de(e.label), 1)])], 2)), e.$slots.suffix ? (y(), x("span", {
      key: 3,
      class: G(`${e.prefixCls}-suffix`)
    }, [re(e.$slots, "suffix")], 2)) : te("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[wa, e.isValid]]);
}
var nn = /* @__PURE__ */ fe(hf, [["render", mf]]), gf = Object.defineProperty, bf = Object.defineProperties, yf = Object.getOwnPropertyDescriptors, Ei = Object.getOwnPropertySymbols, _f = Object.prototype.hasOwnProperty, $f = Object.prototype.propertyIsEnumerable, xi = (e, t, n) => t in e ? gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Io = (e, t) => {
  for (var n in t || (t = {}))
    _f.call(t, n) && xi(e, n, t[n]);
  if (Ei)
    for (var n of Ei(t))
      $f.call(t, n) && xi(e, n, t[n]);
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
  const r = m(() => Io(Io({}, kf), a == null ? void 0 : a.value)), s = Te(/* @__PURE__ */ new Map()), u = m(() => Array.from(s.values()).sort((V, C) => ge(V.index) && ge(C.index) ? V.index - C.index : 0)), c = m(() => {
    var V, C;
    const D = /* @__PURE__ */ new Map();
    return {
      optionInfos: fa((V = e == null ? void 0 : e.value) != null ? V : [], {
        valueKey: (C = i == null ? void 0 : i.value) != null ? C : "value",
        fieldNames: r.value,
        origin: "options",
        optionInfoMap: D
      }),
      optionInfoMap: D
    };
  }), f = m(() => {
    var V, C;
    const D = /* @__PURE__ */ new Map();
    return {
      optionInfos: fa((V = t == null ? void 0 : t.value) != null ? V : [], {
        valueKey: (C = i == null ? void 0 : i.value) != null ? C : "value",
        fieldNames: r.value,
        origin: "extraOptions",
        optionInfoMap: D
      }),
      optionInfoMap: D
    };
  }), g = Te(/* @__PURE__ */ new Map());
  be([u, e ?? B([]), t ?? B([]), i ?? B("value")], () => {
    g.clear(), u.value.forEach((V, C) => {
      g.set(V.key, wf(Io({}, V), {
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
    const C = Oi(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((V = o == null ? void 0 : o.value) == null || V) && C.push(...Oi(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), C;
  }), b = m(() => Array.from(g.values()).filter((V) => V.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Zl(V, {
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
}, hn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, Bi = (e) => JSON.stringify({
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
    t[Bi(o)] = n;
  }), (n) => {
    const l = Bi({
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
  onPopupVisibleChange: P,
  enterToOpen: T = !0,
  defaultActiveFirstOption: k
}) => {
  const {
    validOptions: V,
    optionInfoMap: C,
    validOptionInfos: D,
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
  }), R = B();
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
    const A = C.get(K), ee = (W = g == null ? void 0 : g.value) == null ? void 0 : W.wrapperRef, I = (X = h == null ? void 0 : h.value[K]) != null ? X : A == null ? void 0 : A.ref;
    if (!ee || !I || ee.scrollHeight === ee.offsetHeight)
      return;
    const w = Lu(I, ee), q = ee.scrollTop;
    w.top < 0 ? ee.scrollTo(0, q + w.top) : w.bottom < 0 && ee.scrollTo(0, q - w.bottom);
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
  const z = is(/* @__PURE__ */ new Map([[hn.ENTER, (K) => {
    !(u != null && u.value) && !K.isComposing && (c.value ? R.value && (_(R.value, K), K.preventDefault()) : T && (P(!0), K.preventDefault()));
  }], [hn.ESC, (K) => {
    c.value && (P(!1), K.preventDefault());
  }], [hn.ARROW_DOWN, (K) => {
    if (c.value) {
      const W = E("down");
      W && (R.value = W, S(W)), K.preventDefault();
    }
  }], [hn.ARROW_UP, (K) => {
    if (c.value) {
      const W = E("up");
      W && (R.value = W, S(W)), K.preventDefault();
    }
  }]]));
  return Wt(ls, Te({
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
    validOptionInfos: D,
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
  const i = B(0), a = /* @__PURE__ */ new Map(), r = m(() => e.value.length), s = B(0), u = m(() => {
    const O = s.value + o.value * 3;
    return O > r.value ? r.value : O;
  }), c = m(() => {
    const O = r.value - o.value * 3;
    return O < 0 ? 0 : O;
  }), f = (O) => {
    O < 0 ? s.value = 0 : O > c.value ? s.value = c.value : s.value = O;
  }, g = B(n.value), h = m(() => l.value !== 30 ? l.value : i.value || l.value), b = (O, N) => {
    a.set(O, N);
  }, _ = (O) => {
    var N;
    if (g.value)
      return h.value;
    const Y = e.value[O];
    return (N = a.get(Y)) != null ? N : h.value;
  }, P = (O) => a.has(O);
  xe(() => {
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
  }, D = (O) => {
    const N = C(O), Y = s.value + N - o.value;
    return Y < 0 ? 0 : Y > c.value ? c.value : Y;
  }, $ = m(() => g.value ? h.value * (r.value - u.value) : k(u.value, r.value));
  return {
    frontPadding: V,
    behindPadding: $,
    start: s,
    end: u,
    getStartByScroll: D,
    setItemSize: b,
    hasItemSize: P,
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
    const l = (n = Kn()) == null ? void 0 : n.vnode.key, o = B(), i = () => {
      var a, r, s, u;
      const c = (r = (a = o.value) == null ? void 0 : a.$el) != null ? r : o.value, f = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      f && e.setItemSize(l, f);
    };
    return xe(() => i()), Ut(() => i()), () => {
      var a;
      const r = gn((a = t.default) == null ? void 0 : a.call(t));
      return r ? Wl(r, {
        ref: o
      }, !0) : null;
    };
  }
}), Ef = Object.defineProperty, Ii = Object.getOwnPropertySymbols, xf = Object.prototype.hasOwnProperty, Bf = Object.prototype.propertyIsEnumerable, Pi = (e, t, n) => t in e ? Ef(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, If = (e, t) => {
  for (var n in t || (t = {}))
    xf.call(t, n) && Pi(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      Bf.call(t, n) && Pi(e, n, t[n]);
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
    } = $e(e), s = ne("virtual-list"), u = m(() => Ee(e.component) ? If({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = B(), f = B(), g = m(() => ({
      height: ge(r.value) ? `${r.value}px` : r.value,
      overflow: "auto"
    })), h = m(() => n.value.map((R, v) => {
      var E;
      return (E = R[l.value]) != null ? E : v;
    })), {
      frontPadding: b,
      behindPadding: _,
      start: P,
      end: T,
      getStartByScroll: k,
      setItemSize: V,
      hasItemSize: C,
      setStart: D,
      getScrollOffset: $
    } = Vf({
      dataKeys: h,
      contentRef: f,
      fixedSize: o,
      estimatedSize: i,
      buffer: a
    }), O = m(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(P.value, T.value)), N = (R) => {
      const {
        scrollTop: v,
        scrollHeight: E,
        offsetHeight: S
      } = R.target, z = k(v);
      z !== P.value && (D(z), Le(() => {
        Y(v);
      })), t("scroll", R), Math.floor(E - (v + S)) <= 0 && t("reachBottom", R);
    }, Y = (R) => {
      var v, E;
      if (c.value)
        if (ge(R))
          c.value.scrollTop = R;
        else {
          const S = (E = R.index) != null ? E : h.value.indexOf((v = R.key) != null ? v : "");
          D(S - a.value), c.value.scrollTop = $(S), Le(() => {
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
      start: P,
      scrollTo: Y,
      style: g,
      mergedComponent: u
    };
  }
});
function jf(e, t, n, l, o, i) {
  const a = ce("VirtualListItem");
  return y(), ie(tn(e.mergedComponent.container), {
    ref: "containerRef",
    class: G(e.prefixCls),
    style: ve(e.style),
    onScroll: e.onScroll
  }, {
    default: le(() => [(y(), ie(tn(e.mergedComponent.list), Ve(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: le(() => [(y(), ie(tn(e.mergedComponent.content), Ve({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: le(() => [(y(!0), x(Oe, null, at(e.currentList, (r, s) => {
          var u;
          return y(), ie(a, {
            key: (u = r[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: le(() => [re(e.$slots, "item", {
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
var Tf = /* @__PURE__ */ fe(Pf, [["render", jf]]);
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Af, 14, Df);
}
var Po = /* @__PURE__ */ fe(Mf, [["render", Lf]]);
const Ma = Object.assign(Po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Po.name, Po);
  }
}), Ff = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = B((l = t == null ? void 0 : t.value) != null ? l : !1), i = m(() => {
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Hf, 14, Rf);
}
var jo = /* @__PURE__ */ fe(Nf, [["render", Wf]]);
const Uf = Object.assign(jo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + jo.name, jo);
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
  const r = B(), s = B((a = e == null ? void 0 : e.value) != null ? a : ""), u = B(!1), c = B(!1), f = B("");
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
  }, P = ($) => {
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
    u.value = !1, n("blur", $), (N = (O = i == null ? void 0 : i.value) == null ? void 0 : O.onBlur) == null || N.call(O, $), P($);
  }, C = ($) => {
    const O = $.key || $.code;
    !c.value && O === Ia.key && (n("pressEnter", $), P($));
  }, D = ($) => {
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
    handleMousedown: D
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
    } = $e(e), c = (o = e.baseCls) != null ? o : ne("input-label"), {
      mergedSize: f,
      mergedDisabled: g,
      mergedError: h,
      eventHandlers: b
    } = mt({
      size: i,
      disabled: a,
      error: r,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: _
    } = yt(f), {
      inputRef: P,
      _focused: T,
      computedValue: k,
      handleInput: V,
      handleComposition: C,
      handleFocus: D,
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
      inputRef: P,
      render: () => d("span", Ve(z.value, {
        class: S.value,
        title: R(),
        onMousedown: O
      }), [l.prefix && d("span", {
        class: `${c}-prefix`
      }, [l.prefix()]), d("input", Ve(K.value, {
        ref: P,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !Y.value
        }],
        value: k.value,
        readonly: !e.enabledInput,
        placeholder: v.value,
        disabled: g.value,
        onInput: V,
        onFocus: D,
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
}), Gf = Object.defineProperty, ji = Object.getOwnPropertySymbols, Xf = Object.prototype.hasOwnProperty, Zf = Object.prototype.propertyIsEnumerable, Ti = (e, t, n) => t in e ? Gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Qf = (e, t) => {
  for (var n in t || (t = {}))
    Xf.call(t, n) && Ti(e, n, t[n]);
  if (ji)
    for (var n of ji(t))
      Zf.call(t, n) && Ti(e, n, t[n]);
  return e;
};
const Jf = (e, t) => {
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
      n.push(Qf({
        raw: o
      }, o));
    }
  return n;
}, Mi = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], ep = F({
  name: "Tag",
  components: {
    IconHover: ft,
    IconClose: sn,
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
    } = $e(e), l = ne("tag"), o = m(() => e.color && Mi.includes(e.color)), i = m(() => e.color && !Mi.includes(e.color)), a = B(e.defaultVisible), r = B(e.defaultChecked), s = m(() => {
      var P;
      return (P = e.visible) != null ? P : a.value;
    }), u = m(() => {
      var P;
      return e.checkable ? (P = e.checked) != null ? P : r.value : !0;
    }), {
      mergedSize: c
    } = yt(n), f = m(() => c.value === "mini" ? "small" : c.value), g = (P) => {
      a.value = !1, t("update:visible", !1), t("close", P);
    }, h = (P) => {
      if (e.checkable) {
        const T = !u.value;
        r.value = T, t("update:checked", T), t("check", T, P);
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
  const a = ce("icon-close"), r = ce("icon-hover"), s = ce("icon-loading");
  return e.computedVisible ? (y(), x("span", {
    key: 0,
    class: G(e.cls),
    style: ve(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (y(), x("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon")], 2)) : te("v-if", !0), e.nowrap ? (y(), x("span", {
    key: 1,
    class: G(`${e.prefixCls}-text`)
  }, [re(e.$slots, "default")], 2)) : re(e.$slots, "default", {
    key: 2
  }), e.closable ? (y(), ie(r, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: on(e.handleClose, ["stop"])
  }, {
    default: le(() => [re(e.$slots, "close-icon", {}, () => [d(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : te("v-if", !0), e.loading ? (y(), x("span", {
    key: 4,
    class: G(`${e.prefixCls}-loading-icon`)
  }, [d(s)], 2)) : te("v-if", !0)], 6)) : te("v-if", !0);
}
var To = /* @__PURE__ */ fe(ep, [["render", tp]]);
const np = Object.assign(To, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + To.name, To);
  }
});
var lp = Object.defineProperty, Di = Object.getOwnPropertySymbols, op = Object.prototype.hasOwnProperty, ap = Object.prototype.propertyIsEnumerable, zi = (e, t, n) => t in e ? lp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ul = (e, t) => {
  for (var n in t || (t = {}))
    op.call(t, n) && zi(e, n, t[n]);
  if (Di)
    for (var n of Di(t))
      ap.call(t, n) && zi(e, n, t[n]);
  return e;
};
const ip = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Mo = F({
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
    } = $e(e), u = e.baseCls || ne("input-tag"), c = B(), f = B(), {
      mergedSize: g,
      mergedDisabled: h,
      mergedError: b,
      feedback: _,
      eventHandlers: P
    } = mt({
      size: o,
      disabled: i,
      error: a,
      uninject: r == null ? void 0 : r.value
    }), {
      mergedSize: T
    } = yt(g), k = m(() => ul(ul({}, ip), e.fieldNames)), V = B(!1), C = B(e.defaultValue), D = B(e.defaultInputValue), $ = B(!1), O = B(""), N = m(() => Ee(e.retainInputValue) ? ul({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), Y = Te({
      width: "12px"
    }), R = m(() => e.focused || V.value), v = (M, Z) => {
      D.value = M, t("update:inputValue", M), t("inputValueChange", M, Z);
    }, E = (M) => {
      var Z;
      const {
        value: oe
      } = M.target;
      M.type === "compositionend" ? ($.value = !1, O.value = "", v(oe, M), Le(() => {
        c.value && z.value !== c.value.value && (c.value.value = z.value);
      })) : ($.value = !0, O.value = z.value + ((Z = M.data) != null ? Z : ""));
    }, S = m(() => {
      var M;
      return (M = e.modelValue) != null ? M : C.value;
    }), z = m(() => {
      var M;
      return (M = e.inputValue) != null ? M : D.value;
    });
    be(s, (M) => {
      (Qe(M) || Sn(M)) && (C.value = []);
    });
    const K = (M) => {
      c.value && M.target !== c.value && (M.preventDefault(), c.value.focus());
    }, W = (M) => {
      const {
        value: Z
      } = M.target;
      $.value || (v(Z, M), Le(() => {
        c.value && z.value !== c.value.value && (c.value.value = z.value);
      }));
    }, X = m(() => Jf(S.value, k.value)), A = m(() => {
      if (e.maxTagCount > 0) {
        const M = X.value.length - e.maxTagCount;
        if (M > 0) {
          const Z = X.value.slice(0, e.maxTagCount), oe = {
            value: "__arco__more",
            label: `+${M}...`,
            closable: !1
          };
          return Z.push(ul({
            raw: oe
          }, oe)), Z;
        }
      }
      return X.value;
    }), ee = (M, Z) => {
      var oe, Me;
      C.value = M, t("update:modelValue", M), t("change", M, Z), (Me = (oe = P.value) == null ? void 0 : oe.onChange) == null || Me.call(oe, Z);
    }, I = (M, Z, oe) => {
      var Me;
      const De = (Me = S.value) == null ? void 0 : Me.filter((Ot, Xe) => Xe !== Z);
      ee(De, oe), t("remove", M, oe);
    }, w = (M) => {
      ee([], M), t("clear", M);
    }, q = m(() => !h.value && !e.readonly && e.allowClear && Boolean(S.value.length)), Q = (M) => {
      var Z;
      if (z.value) {
        if (M.preventDefault(), e.uniqueValue && ((Z = S.value) != null && Z.includes(z.value))) {
          t("pressEnter", z.value, M);
          return;
        }
        const oe = S.value.concat(z.value);
        ee(oe, M), t("pressEnter", z.value, M), N.value.create || v("", M);
      }
    }, he = (M) => {
      var Z, oe;
      V.value = !0, t("focus", M), (oe = (Z = P.value) == null ? void 0 : Z.onFocus) == null || oe.call(Z, M);
    }, ye = (M) => {
      var Z, oe;
      V.value = !1, !N.value.blur && z.value && v("", M), t("blur", M), (oe = (Z = P.value) == null ? void 0 : Z.onBlur) == null || oe.call(Z, M);
    }, se = () => {
      for (let M = X.value.length - 1; M >= 0; M--)
        if (X.value[M].closable)
          return M;
      return -1;
    }, Be = (M) => {
      if (h.value || e.readonly)
        return;
      const Z = M.key || M.code;
      if (!$.value && z.value && Z === Ia.key && Q(M), !$.value && A.value.length > 0 && !z.value && Z === wc.key) {
        const oe = se();
        oe >= 0 && I(X.value[oe].value, oe, M);
      }
    }, Se = (M) => {
      M > 12 ? Y.width = `${M}px` : Y.width = "12px";
    };
    xe(() => {
      f.value && Se(f.value.offsetWidth);
    });
    const Pe = () => {
      f.value && Se(f.value.offsetWidth);
    };
    be(z, (M) => {
      c.value && !$.value && M !== c.value.value && (c.value.value = M);
    });
    const pt = m(() => [u, `${u}-size-${T.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: b.value,
      [`${u}-focus`]: R.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: A.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || q.value || _.value,
      [`${u}-has-placeholder`]: !S.value.length
    }]), tt = m(() => Gn(l, qt)), rt = m(() => Xn(l, qt));
    return {
      inputRef: c,
      render: () => {
        var M;
        return d("span", Ve({
          class: pt.value,
          onMousedown: K
        }, tt.value), [d(Bl, {
          onResize: Pe
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
            onClose: (Me) => I(Z.value, oe, Me)
          }), {
            default: () => {
              var Me, De, Ot, Xe;
              return [(Xe = (Ot = (Me = n.tag) == null ? void 0 : Me.call(n, {
                data: Z.raw
              })) != null ? Ot : (De = e.formatTag) == null ? void 0 : De.call(e, Z.raw)) != null ? Xe : Z.label];
            }
          })), d("input", Ve(rt.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: Y,
            placeholder: A.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: W,
            onKeydown: Be,
            onFocus: he,
            onBlur: ye,
            onCompositionstart: E,
            onCompositionupdate: E,
            onCompositionend: E
          }), null)]
        }), q.value && d(ft, {
          class: `${u}-clear-btn`,
          onClick: w,
          onMousedown: (Z) => Z.stopPropagation()
        }, {
          default: () => [d(sn, null, null)]
        }), (n.suffix || Boolean(_.value)) && d("span", {
          class: `${u}-suffix`
        }, [(M = n.suffix) == null ? void 0 : M.call(n), Boolean(_.value) && d(Ba, {
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
const rp = Object.assign(Mo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Mo.name, Mo);
  }
});
var Ai = F({
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
    } = $e(e), a = ne("select-view"), {
      feedback: r,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: c,
      mergedError: f
    } = mt({
      size: l,
      disabled: o,
      error: i
    }), {
      mergedSize: g
    } = yt(c), {
      opened: h
    } = $e(e), b = B(), _ = m(() => {
      var v;
      return (v = b.value) == null ? void 0 : v.inputRef;
    }), P = m(() => e.modelValue.length === 0), T = m(() => e.allowSearch || e.allowCreate), k = m(() => e.allowClear && !e.disabled && !P.value), V = (v) => {
      var E, S;
      t("focus", v), (S = (E = s.value) == null ? void 0 : E.onFocus) == null || S.call(E, v);
    }, C = (v) => {
      var E, S;
      t("blur", v), (S = (E = s.value) == null ? void 0 : E.onBlur) == null || S.call(E, v);
    }, D = (v) => {
      t("remove", v);
    }, $ = (v) => {
      t("clear", v);
    }, O = () => {
      var v, E, S, z;
      return e.loading ? (E = (v = n["loading-icon"]) == null ? void 0 : v.call(n)) != null ? E : d(Kt, null, null) : e.allowSearch && e.opened ? (z = (S = n["search-icon"]) == null ? void 0 : S.call(n)) != null ? z : d(da, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : d(Ma, {
        class: `${a}-arrow-icon`
      }, null);
    }, N = () => d(Oe, null, [k.value && d(ft, {
      class: `${a}-clear-btn`,
      onClick: $,
      onMousedown: (v) => v.stopPropagation()
    }, {
      default: () => [d(sn, null, null)]
    }), d("span", {
      class: `${a}-icon`
    }, [O()]), Boolean(r.value) && d(Ba, {
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
        onRemove: D,
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
  return y(), x(Oe, null, [p("li", {
    class: G(`${e.prefixCls}-title`)
  }, [re(e.$slots, "label", {}, () => [ke(de(e.label), 1)])], 2), re(e.$slots, "default")], 64);
}
var yl = /* @__PURE__ */ fe(sp, [["render", up]]);
const Li = typeof window > "u" ? global : window;
function cp(e, t) {
  let n = 0;
  return (...l) => {
    n && Li.clearTimeout(n), n = Li.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var dp = Object.defineProperty, fp = Object.defineProperties, pp = Object.getOwnPropertyDescriptors, Fi = Object.getOwnPropertySymbols, vp = Object.prototype.hasOwnProperty, hp = Object.prototype.propertyIsEnumerable, Ni = (e, t, n) => t in e ? dp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bn = (e, t) => {
  for (var n in t || (t = {}))
    vp.call(t, n) && Ni(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      hp.call(t, n) && Ni(e, n, t[n]);
  return e;
}, mp = (e, t) => fp(e, pp(t));
function gp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ka(e);
}
const bp = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var Do = F({
  name: "Select",
  components: {
    Trigger: Pl,
    SelectView: Ai
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
      loading: P,
      defaultActiveFirstOption: T
    } = $e(e), k = ne("select"), {
      mergedSize: V,
      mergedDisabled: C,
      mergedError: D,
      eventHandlers: $
    } = mt({
      size: o,
      disabled: i,
      error: a
    }), O = m(() => e.virtualListProps ? "div" : "li"), N = m(() => Ee(e.allowSearch) && Boolean(e.allowSearch.retainInputValue));
    m(() => {
      if (et(e.formatLabel))
        return (H) => {
          const j = De.get(H.value);
          return e.formatLabel(j);
        };
    });
    const Y = B(), R = B({}), v = B(), {
      computedPopupVisible: E,
      handlePopupVisibleChange: S
    } = Ff({
      popupVisible: f,
      defaultPopupVisible: g,
      emit: n
    }), z = B(e.defaultValue), K = m(() => {
      var H;
      const j = (H = e.modelValue) != null ? H : z.value;
      return (Ae(j) ? j : j || ge(j) || kt(j) || Yl(j) ? [j] : []).map((ae) => ({
        value: ae,
        key: Wn(ae, e.valueKey)
      }));
    });
    be(b, (H) => {
      (Qe(H) || Sn(H)) && (z.value = c.value ? [] : H);
    });
    const W = m(() => K.value.map((H) => H.key)), X = m(() => Bn(Bn({}, bp), _ == null ? void 0 : _.value)), A = B(), ee = (H) => {
      const j = {};
      return H.forEach((U) => {
        j[U] = De.get(U);
      }), j;
    }, I = (H) => {
      A.value = ee(H);
    }, w = (H) => et(e.fallbackOption) ? e.fallbackOption(H) : {
      [X.value.value]: H,
      [X.value.label]: String(Ee(H) ? H[u == null ? void 0 : u.value] : H)
    }, q = () => {
      const H = [], j = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const U of K.value)
          if (!j.includes(U.key) && U.value !== "") {
            const ae = De.get(U.key);
            (!ae || ae.origin === "extraOptions") && (H.push(U), j.push(U.key));
          }
      }
      if (e.allowCreate && se.value) {
        const U = Wn(se.value);
        if (!j.includes(U)) {
          const ae = De.get(U);
          (!ae || ae.origin === "extraOptions") && H.push({
            value: se.value,
            key: U
          });
        }
      }
      return H;
    }, Q = B([]), he = m(() => Q.value.map((H) => {
      var j;
      let U = w(H.value);
      const ae = (j = A.value) == null ? void 0 : j[H.key];
      return !Qe(ae) && !lu(ae) && (U = Bn(Bn({}, U), ae)), U;
    }));
    Le(() => {
      eu(() => {
        var H;
        const j = q();
        if (j.length !== Q.value.length)
          Q.value = j;
        else if (j.length > 0) {
          for (let U = 0; U < j.length; U++)
            if (j[U].key !== ((H = Q.value[U]) == null ? void 0 : H.key)) {
              Q.value = j;
              break;
            }
        }
      });
    });
    const ye = B(""), se = m(() => {
      var H;
      return (H = e.inputValue) != null ? H : ye.value;
    });
    be(E, (H) => {
      !H && !N.value && se.value && Pe("");
    });
    const Be = (H) => {
      var j, U;
      return e.multiple ? H.map((ae) => {
        var vt, nt;
        return (nt = (vt = De.get(ae)) == null ? void 0 : vt.value) != null ? nt : "";
      }) : (U = (j = De.get(H[0])) == null ? void 0 : j.value) != null ? U : df(De) ? void 0 : "";
    }, Se = (H) => {
      var j, U;
      const ae = Be(H);
      z.value = ae, n("update:modelValue", ae), n("change", ae), (U = (j = $.value) == null ? void 0 : j.onChange) == null || U.call(j), I(H);
    }, Pe = (H) => {
      ye.value = H, n("update:inputValue", H), n("inputValueChange", H);
    }, pt = (H, j) => {
      if (e.multiple) {
        if (W.value.includes(H)) {
          const U = W.value.filter((ae) => ae !== H);
          Se(U);
        } else if (Xe.value.includes(H))
          if (e.limit > 0 && W.value.length >= e.limit) {
            const U = De.get(H);
            n("exceedLimit", U == null ? void 0 : U.value, j);
          } else {
            const U = W.value.concat(H);
            Se(U);
          }
        N.value || Pe("");
      } else {
        if (H !== W.value[0] && Se([H]), N.value) {
          const U = De.get(H);
          U && Pe(U.label);
        }
        S(!1);
      }
    }, tt = cp((H) => {
      n("search", H);
    }, e.searchDelay), rt = (H) => {
      H !== se.value && (E.value || S(!0), Pe(H), e.allowSearch && tt(H));
    }, L = (H) => {
      const j = De.get(H), U = W.value.filter((ae) => ae !== H);
      Se(U), n("remove", j == null ? void 0 : j.value);
    }, M = (H) => {
      H == null || H.stopPropagation();
      const j = W.value.filter((U) => {
        var ae;
        return (ae = De.get(U)) == null ? void 0 : ae.disabled;
      });
      Se(j), Pe(""), n("clear", H);
    }, Z = (H) => {
      n("dropdownScroll", H);
    }, oe = (H) => {
      n("dropdownReachBottom", H);
    }, {
      validOptions: Me,
      optionInfoMap: De,
      validOptionInfos: Ot,
      enabledOptionKeys: Xe,
      handleKeyDown: ro
    } = Sf({
      multiple: c,
      options: r,
      extraOptions: he,
      inputValue: se,
      filterOption: s,
      showExtraOptions: h,
      component: O,
      valueKey: u,
      fieldNames: _,
      loading: P,
      popupVisible: E,
      valueKeys: W,
      dropdownRef: Y,
      optionRefs: R,
      virtualListRef: v,
      defaultActiveFirstOption: T,
      onSelect: pt,
      onPopupVisibleChange: S
    }), so = m(() => {
      var H;
      const j = [];
      for (const U of K.value) {
        const ae = De.get(U.key);
        ae && j.push(mp(Bn({}, ae), {
          value: U.key,
          label: (H = ae == null ? void 0 : ae.label) != null ? H : String(Ee(U.value) ? U.value[u == null ? void 0 : u.value] : U.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return j;
    }), xn = (H) => {
      if (et(t.option)) {
        const j = t.option;
        return () => j({
          data: H.raw
        });
      }
      return et(H.render) ? H.render : () => H.label;
    }, Dt = (H) => {
      if (as(H)) {
        let j;
        return d(yl, {
          key: H.key,
          label: H.label
        }, gp(j = H.options.map((U) => Dt(U))) ? j : {
          default: () => [j]
        });
      }
      return Zl(H, {
        inputValue: se.value,
        filterOption: s == null ? void 0 : s.value
      }) ? d(nn, {
        ref: (j) => {
          j != null && j.$el && (R.value[H.key] = j.$el);
        },
        key: H.key,
        value: H.value,
        label: H.label,
        disabled: H.disabled,
        internal: !0
      }, {
        default: xn(H)
      }) : null;
    }, ol = () => d(nf, {
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
        var H, j;
        return [...(j = (H = t.default) == null ? void 0 : H.call(t)) != null ? j : [], ...Me.value.map(Dt)];
      },
      "virtual-list": () => d(Tf, Ve(e.virtualListProps, {
        ref: v,
        data: Me.value
      }), {
        item: ({
          item: H
        }) => Dt(H)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), uo = ({
      data: H
    }) => {
      var j, U, ae, vt;
      if ((t.label || et(e.formatLabel)) && H) {
        const nt = De.get(H.value);
        if (nt != null && nt.raw)
          return (ae = (j = t.label) == null ? void 0 : j.call(t, {
            data: nt.raw
          })) != null ? ae : (U = e.formatLabel) == null ? void 0 : U.call(e, nt.raw);
      }
      return (vt = H == null ? void 0 : H.label) != null ? vt : "";
    };
    return () => d(Pl, Ve({
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
        var H, j;
        return [(j = (H = t.trigger) == null ? void 0 : H.call(t)) != null ? j : d(Ai, Ve({
          class: k,
          modelValue: so.value,
          inputValue: se.value,
          multiple: e.multiple,
          disabled: C.value,
          error: D.value,
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
          onInputValueChange: rt,
          onRemove: L,
          onClear: M,
          onKeydown: ro
        }, l), {
          label: uo,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: ol
    });
  }
});
const Ql = Object.assign(Do, {
  Option: nn,
  OptGroup: yl,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Do.name, Do), e.component(n + nn.name, nn), e.component(n + yl.name, yl);
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, wp, 14, _p);
}
var zo = /* @__PURE__ */ fe(yp, [["render", kp]]);
const Cp = Object.assign(zo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zo.name, zo);
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ep, 14, Vp);
}
var Ao = /* @__PURE__ */ fe(Sp, [["render", xp]]);
const rs = Object.assign(Ao, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ao.name, Ao);
  }
}), Bp = (e) => {
  const t = {}, n = B([]), l = () => {
    if (t.value) {
      const o = Ur(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return xe(() => l()), jt(() => l()), {
    children: t,
    components: n
  };
}, Ip = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var Pp = Object.defineProperty, jp = Object.defineProperties, Tp = Object.getOwnPropertyDescriptors, Ri = Object.getOwnPropertySymbols, Mp = Object.prototype.hasOwnProperty, Dp = Object.prototype.propertyIsEnumerable, qi = (e, t, n) => t in e ? Pp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, zp = (e, t) => {
  for (var n in t || (t = {}))
    Mp.call(t, n) && qi(e, n, t[n]);
  if (Ri)
    for (var n of Ri(t))
      Dp.call(t, n) && qi(e, n, t[n]);
  return e;
}, Ap = (e, t) => jp(e, Tp(t));
const ss = (e, t, n) => {
  const l = Math.floor(e * 6), o = e * 6 - l, i = n * (1 - t), a = n * (1 - o * t), r = n * (1 - (1 - o) * t), s = l % 6, u = [n, a, i, i, r, n][s], c = [r, n, n, a, i, i][s], f = [i, i, r, n, n, a][s];
  return {
    r: Math.round(u * 255),
    g: Math.round(c * 255),
    b: Math.round(f * 255)
  };
}, Jl = (e, t, n) => {
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
}, qe = (e) => parseInt(e, 16), Hi = (e) => qe(e) / 255, qp = (e) => {
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
    a: Hi(t[4])
  } : (t = At.hex6.exec(e), t ? {
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3])
  } : (t = At.hex4.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3]),
    a: Hi(t[4] + t[4])
  } : (t = At.hex3.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3])
  } : !1)))));
}, Hp = (e) => {
  var t;
  const n = qp(e);
  if (n) {
    const l = Jl(n.r, n.g, n.b);
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
}, Wi = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), Wp = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), cs = ({
  value: e,
  onChange: t
}) => {
  const n = B(!1), l = B(), o = B(), i = (c, f) => c < 0 ? 0 : c > f ? 1 : c / f, a = (c) => {
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
var Ui = F({
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
function Da(e, t) {
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
  return t > 0 ? Da(Number(e) * Math.pow(10, t)) : Number(e);
}
function pa(e) {
  fs && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function eo(e) {
  return function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var l = t[0], o = t.slice(1);
    return o.reduce(function(i, a) {
      return e(i, a);
    }, l);
  };
}
var Ht = eo(function(e, t) {
  var n = Un(e), l = Un(t), o = Ct(e) + Ct(t), i = n * l;
  return pa(i), i / Math.pow(10, o);
}), Kp = eo(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Ht(e, n) + Ht(t, n)) / n;
}), Yp = eo(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Ht(e, n) - Ht(t, n)) / n;
}), ds = eo(function(e, t) {
  var n = Un(e), l = Un(t);
  return pa(n), pa(l), Ht(n / l, Da(Math.pow(10, Ct(t) - Ct(e))));
});
function Gp(e, t) {
  var n = Math.pow(10, t), l = ds(Math.round(Math.abs(Ht(e, n))), n);
  return e < 0 && l !== 0 && (l = Ht(l, -1)), l;
}
var fs = !0;
function Xp(e) {
  e === void 0 && (e = !0), fs = e;
}
var an = {
  strip: Da,
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ev, 14, Qp);
}
var Lo = /* @__PURE__ */ fe(Zp, [["render", tv]]);
const ps = Object.assign(Lo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Lo.name, Lo);
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, av, 14, lv);
}
var Fo = /* @__PURE__ */ fe(nv, [["render", iv]]);
const rv = Object.assign(Fo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Fo.name, Fo);
  }
});
var sv = Object.defineProperty, Ki = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Yi = (e, t, n) => t in e ? sv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dv = (e, t) => {
  for (var n in t || (t = {}))
    uv.call(t, n) && Yi(e, n, t[n]);
  if (Ki)
    for (var n of Ki(t))
      cv.call(t, n) && Yi(e, n, t[n]);
  return e;
};
const fv = 800, pv = 150;
an.enableBoundaryChecking(!1);
var No = F({
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
    } = $e(e), a = ne("input-number"), r = B(), {
      mergedSize: s,
      mergedDisabled: u,
      eventHandlers: c
    } = mt({
      size: o,
      disabled: i
    }), {
      mergedSize: f
    } = yt(s), g = m(() => {
      if (ge(e.precision)) {
        const w = `${e.step}`.split(".")[1], q = w && w.length || 0;
        return Math.max(q, e.precision);
      }
    }), h = (w) => {
      var q, Q;
      if (!ge(w))
        return "";
      const he = g.value ? w.toFixed(g.value) : String(w);
      return (Q = (q = e.formatter) == null ? void 0 : q.call(e, he)) != null ? Q : he;
    }, b = B(h((l = e.modelValue) != null ? l : e.defaultValue)), _ = m(() => {
      var w, q;
      if (!b.value)
        return;
      const Q = Number((q = (w = e.parser) == null ? void 0 : w.call(e, b.value)) != null ? q : b.value);
      return Number.isNaN(Q) ? void 0 : Q;
    }), P = B(ge(_.value) && _.value <= e.min), T = B(ge(_.value) && _.value >= e.max);
    let k = 0;
    const V = () => {
      k && (window.clearTimeout(k), k = 0);
    }, C = (w) => {
      if (!Qe(w))
        return ge(e.min) && w < e.min && (w = e.min), ge(e.max) && w > e.max && (w = e.max), ge(g.value) ? an.round(w, g.value) : w;
    }, D = (w) => {
      let q = !1, Q = !1;
      ge(w) && (w <= e.min && (q = !0), w >= e.max && (Q = !0)), T.value !== Q && (T.value = Q), P.value !== q && (P.value = q);
    }, $ = () => {
      const w = C(_.value), q = h(w);
      (w !== _.value || b.value !== q) && (b.value = q), t("update:modelValue", w);
    };
    be(() => [e.max, e.min], () => {
      $(), D(_.value);
    });
    const O = (w, q) => {
      if (u.value || w === "plus" && T.value || w === "minus" && P.value)
        return;
      let Q;
      ge(_.value) ? Q = C(an[w](_.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, b.value = h(Q), D(Q), t("update:modelValue", Q), t("change", Q, q);
    }, N = (w, q, Q = !1) => {
      var he;
      w.preventDefault(), (he = r.value) == null || he.focus(), O(q, w), Q && (k = window.setTimeout(() => w.target.dispatchEvent(w), k ? pv : fv));
    }, Y = (w, q) => {
      var Q, he, ye, se;
      w = w.trim().replace(/。/g, "."), w = (he = (Q = e.parser) == null ? void 0 : Q.call(e, w)) != null ? he : w, (ge(Number(w)) || /^(\.|-)$/.test(w)) && (b.value = (se = (ye = e.formatter) == null ? void 0 : ye.call(e, w)) != null ? se : w, D(_.value), t("input", _.value, b.value, q), e.modelEvent === "input" && (t("update:modelValue", _.value), t("change", _.value, q)));
    }, R = (w) => {
      t("focus", w);
    }, v = (w, q) => {
      q instanceof MouseEvent && !w || ($(), t("change", _.value, q));
    }, E = (w) => {
      t("blur", w);
    }, S = (w) => {
      var q, Q;
      b.value = "", t("update:modelValue", void 0), t("change", void 0, w), (Q = (q = c.value) == null ? void 0 : q.onChange) == null || Q.call(q, w), t("clear", w);
    }, z = is(/* @__PURE__ */ new Map([[hn.ARROW_UP, (w) => {
      w.preventDefault(), !e.readOnly && O("plus", w);
    }], [hn.ARROW_DOWN, (w) => {
      w.preventDefault(), !e.readOnly && O("minus", w);
    }]])), K = (w) => {
      t("keydown", w), w.defaultPrevented || z(w);
    };
    be(() => e.modelValue, (w) => {
      w !== _.value && (b.value = h(w), D(w));
    });
    const W = () => {
      var w, q, Q;
      return e.readOnly ? null : d(Oe, null, [n.suffix && d("div", {
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
      }, [n.plus ? (q = n.plus) == null ? void 0 : q.call(n) : d(rs, null, null)]), d("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || P.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || P.value,
        onMousedown: (he) => N(he, "minus", !0),
        onMouseup: V,
        onMouseleave: V
      }, [n.minus ? (Q = n.minus) == null ? void 0 : Q.call(n) : d(Ma, null, null)])])]);
    }, X = m(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {
      [`${a}-readonly`]: e.readOnly
    }]), A = () => d(wn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || P.value,
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
const Vt = Object.assign(No, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + No.name, No);
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
}), vv = Object.defineProperty, Gi = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, mv = Object.prototype.propertyIsEnumerable, Xi = (e, t, n) => t in e ? vv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zi = (e, t) => {
  for (var n in t || (t = {}))
    hv.call(t, n) && Xi(e, n, t[n]);
  if (Gi)
    for (var n of Gi(t))
      mv.call(t, n) && Xi(e, n, t[n]);
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
    } = $e(e), l = (o) => {
      var i;
      const a = Zi(Zi({}, n.value.rgb), o), r = Jl(a.r, a.g, a.b);
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
    } = $e(e), [l, o] = Hn(n.value.hex), i = (s) => {
      var u;
      const c = us(s) || {
        r: 255,
        g: 0,
        b: 0
      }, f = Jl(c.r, c.g, c.b);
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
    } = Ca(), n = ne("color-picker"), l = m(() => e.color.hsv), [o, i] = Hn(e.format || "hex"), a = (g) => {
      i(g);
    };
    B(!1);
    const r = (g) => {
      var h;
      const b = us(g) || {
        r: 255,
        g: 0,
        b: 0
      }, _ = Jl(b.r, b.g, b.b);
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
    }, [d("div", null, [d(Ui, {
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
    }, null), !e.disabledAlpha && d(Ui, {
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
    }, [d(Ql, {
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
}), Ro = F({
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
      const k = ss(s.value.h, s.value.s, s.value.v), V = Wi(k.r, k.g, k.b);
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
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${k}, ${V}, ${C}, ${a.value.toFixed(2)})` : `rgb(${k}, ${V}, ${C})` : a.value < 1 && !e.disabledAlpha ? `#${Wp(k, V, C, a.value)}` : `#${Wi(k, V, C)}`;
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
    }, P = () => d("div", {
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
    return () => e.hideTrigger ? T() : d(Pl, Ve({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 4,
      disabled: e.disabled,
      onPopupVisibleChange: _
    }, e.triggerProps), {
      default: () => [n.default ? n.default() : P()],
      content: T
    });
  }
});
const za = Object.assign(Ro, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ro.name, Ro);
  }
}), Qi = (e, t) => {
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
}, Ji = (e, t, n, {
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
    if (!Ee(i) && !Ae(i) || !o[a])
      return;
    a !== o.length - 1 ? (l && Qe(i[o[a]]) && (i[o[a]] = {}), i = i[o[a]]) : i[o[a]] = n;
  }
};
var _v = Object.defineProperty, $v = Object.defineProperties, wv = Object.getOwnPropertyDescriptors, er = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, tr = (e, t, n) => t in e ? _v(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sv = (e, t) => {
  for (var n in t || (t = {}))
    kv.call(t, n) && tr(e, n, t[n]);
  if (er)
    for (var n of er(t))
      Cv.call(t, n) && tr(e, n, t[n]);
  return e;
}, Vv = (e, t) => $v(e, wv(t));
const jl = ["xxl", "xl", "lg", "md", "sm", "xs"], cl = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Gt = [], Ov = -1, dl = {};
const nr = {
  matchHandlers: {},
  dispatch(e, t) {
    return dl = e, Gt.length < 1 ? !1 : (Gt.forEach((n) => {
      n.func(dl, t);
    }), !0);
  },
  subscribe(e) {
    Gt.length === 0 && this.register();
    const t = (++Ov).toString();
    return Gt.push({
      token: t,
      func: e
    }), e(dl, null), t;
  },
  unsubscribe(e) {
    Gt = Gt.filter((t) => t.token !== e), Gt.length === 0 && this.unregister();
  },
  unregister() {
    Object.keys(cl).forEach((e) => {
      const t = cl[e];
      if (!t)
        return;
      const n = this.matchHandlers[t];
      n && n.mql && n.listener && (n.mql.removeEventListener ? n.mql.removeEventListener("change", n.listener) : n.mql.removeListener(n.listener));
    });
  },
  register() {
    Object.keys(cl).forEach((e) => {
      const t = cl[e];
      if (!t)
        return;
      const n = ({
        matches: o
      }) => {
        this.dispatch(Vv(Sv({}, dl), {
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
function lr(e) {
  return Ee(e);
}
function va(e, t, n = !1) {
  const l = B({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), o = m(() => {
    let a = t;
    if (lr(e.value))
      for (let r = 0; r < jl.length; r++) {
        const s = jl[r];
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
  return xe(() => {
    i = nr.subscribe((a) => {
      lr(e.value) && (l.value = a);
    });
  }), Ul(() => {
    i && nr.unsubscribe(i);
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
    return t.behavior(n ? si(e, t) : []);
  if (n) {
    var l = xv(t);
    return Ev(si(e, l), l.behavior);
  }
}
const or = ["success", "warning", "error", "validating"], Iv = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || or.indexOf(l) > or.indexOf(t)) && (t = e[n]);
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
var jv = Object.defineProperty, ar = Object.getOwnPropertySymbols, Tv = Object.prototype.hasOwnProperty, Mv = Object.prototype.propertyIsEnumerable, ir = (e, t, n) => t in e ? jv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Dv = (e, t) => {
  for (var n in t || (t = {}))
    Tv.call(t, n) && ir(e, n, t[n]);
  if (ar)
    for (var n of ar(t))
      Mv.call(t, n) && ir(e, n, t[n]);
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
    const n = ne("form"), l = B(), {
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
    } = $e(e), {
      mergedSize: _
    } = yt(h), P = m(() => e.layout === "horizontal" && e.autoLabelWidth), T = [], k = [], V = Te({}), C = m(() => Math.max(...Object.values(V))), D = (A) => {
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
      T.forEach((I) => {
        (ee.length === 0 || ee.includes(I.field)) && I.resetField();
      });
    }, v = (A) => {
      const ee = A ? [].concat(A) : [];
      T.forEach((I) => {
        (ee.length === 0 || ee.includes(I.field)) && I.clearValidate();
      });
    }, E = (A, ee) => {
      const w = (l.value || document.body).querySelector(`#${ms(e.id, A)}`);
      w && Bv(w, Dv({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, ee));
    }, S = (A) => {
      const ee = Yl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      E(A, ee);
    }, z = (A) => {
      const ee = [];
      return T.forEach((I) => {
        ee.push(I.validate());
      }), Promise.all(ee).then((I) => {
        const w = {};
        let q = !1;
        return I.forEach((Q) => {
          Q && (q = !0, w[Q.field] = Q);
        }), q && e.scrollToFirstError && S(Object.keys(w)[0]), et(A) && A(q ? w : void 0), q ? w : void 0;
      });
    }, K = (A, ee) => {
      const I = [];
      for (const w of T)
        (Ae(A) && A.includes(w.field) || A === w.field) && I.push(w.validate());
      return Promise.all(I).then((w) => {
        const q = {};
        let Q = !1;
        return w.forEach((he) => {
          he && (Q = !0, q[he.field] = he);
        }), Q && e.scrollToFirstError && S(Object.keys(q)[0]), et(ee) && ee(Q ? q : void 0), Q ? q : void 0;
      });
    }, W = (A) => {
      const ee = [];
      T.forEach((I) => {
        ee.push(I.validate());
      }), Promise.all(ee).then((I) => {
        const w = {};
        let q = !1;
        I.forEach((Q) => {
          Q && (q = !0, w[Q.field] = Q);
        }), q ? (e.scrollToFirstError && S(Object.keys(w)[0]), t("submitFailed", {
          values: i.value,
          errors: w
        }, A)) : t("submitSuccess", i.value, A), t("submit", {
          values: i.value,
          errors: q ? w : void 0
        }, A);
      });
    };
    return Wt(Pa, Te({
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
      addField: D,
      removeField: $,
      validateField: K,
      setLabelWidth: N,
      removeLabelWidth: Y,
      maxLabelWidth: C,
      autoLabelWidth: P
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
    onSubmit: t[0] || (t[0] = on((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [re(e.$slots, "default")], 34);
}
var qo = /* @__PURE__ */ fe(zv, [["render", Av]]), Vn = Object.prototype.toString;
function to(e) {
  return Vn.call(e) === "[object Array]";
}
function xt(e) {
  return Vn.call(e) === "[object Object]";
}
function ha(e) {
  return Vn.call(e) === "[object String]";
}
function Lv(e) {
  return Vn.call(e) === "[object Number]" && e === e;
}
function Fv(e) {
  return Vn.call(e) === "[object Boolean]";
}
function ma(e) {
  return Vn.call(e) === "[object Function]";
}
function Nv(e) {
  return xt(e) && Object.keys(e).length === 0;
}
function Qt(e) {
  return e == null || e === "";
}
function gs(e) {
  return to(e) && !e.length;
}
var Aa = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (ma(e) && ma(t))
    return e === t || e.toString() === t.toString();
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var n in e) {
    var l = Aa(e[n], t[n]);
    if (!l)
      return !1;
  }
  return !0;
}, La = function(e, t) {
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
    return ma(r) ? r(a) : ha(r) ? r.replace(/\#\{.+?\}/g, function(s) {
      var u = s.slice(2, -1);
      if (u in a) {
        if (xt(a[u]) || to(a[u]))
          try {
            return JSON.stringify(a[u]);
          } catch {
            return a[u];
          }
        return String(a[u]);
      }
      return s;
    }) : r;
  }, xt(n) && ha(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = La(qv, n.validateMessages);
}, no = {
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
no.not.get = function() {
  return this._not = !this._not, this;
};
no.isRequired.get = function() {
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
no.end.get = function() {
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
Object.defineProperties(_t.prototype, no);
var Hv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "string"
    })), this.validate(o && o.strict ? ha(this.obj) : !0, this.getValidateMsg("type.string"));
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
    })), this.validate(o && o.strict ? to(this.obj) : !0, this.getValidateMsg("type.array", {
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
    return this.obj ? this.validate(Aa(this.obj, o), this.getValidateMsg("array.deepEqual", {
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
    return this.obj ? this.validate(Aa(this.obj, o), this.getValidateMsg("object.deepEqual", {
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
}(_t), Tl = function(e, t) {
  return new bs(e, Object.assign({
    field: "value"
  }, t));
};
Tl.globalConfig = {};
Tl.setGlobalConfig = function(e) {
  Tl.globalConfig = e || {};
};
var bs = function(t, n) {
  var l = Tl.globalConfig, o = Object.assign(Object.assign(Object.assign({}, l), n), {
    validateMessages: La(l.validateMessages, n.validateMessages)
  });
  this.string = new Hv(t, o), this.number = new Wv(t, o), this.array = new Uv(t, o), this.object = new Kv(t, o), this.boolean = new Yv(t, o), this.type = new Qv(t, o), this.custom = new Jv(t, o);
}, Fa = function(t, n) {
  n === void 0 && (n = {}), this.schema = t, this.options = n;
};
Fa.prototype.messages = function(t) {
  this.options = Object.assign(Object.assign({}, this.options), {
    validateMessages: La(this.options.validateMessages, t)
  });
};
Fa.prototype.validate = function(t, n) {
  var l = this;
  if (!xt(t))
    return;
  var o = [], i = null;
  function a(r, s) {
    i || (i = {}), (!i[r] || s.requiredError) && (i[r] = s);
  }
  this.schema && Object.keys(this.schema).forEach(function(r) {
    if (to(l.schema[r]))
      for (var s = function(f) {
        var g = l.schema[r][f], h = g.type, b = g.message;
        if (!h && !g.validator)
          throw "You must specify a type to field " + r + "!";
        var _ = Object.assign(Object.assign({}, l.options), {
          message: b,
          field: r
        });
        "ignoreEmptyString" in g && (_.ignoreEmptyString = g.ignoreEmptyString), "strict" in g && (_.strict = g.strict);
        var P = new bs(t[r], _), T = P.type[h] || null;
        if (!T)
          if (g.validator) {
            T = P.custom.validate(g.validator), Object.prototype.toString.call(T) === "[object Array]" && T[0].then ? o.push({
              function: T[0],
              _this: T[1],
              key: r
            }) : T && a(r, T);
            return;
          } else
            T = P[h];
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
    } = $e(e), a = ne("row"), r = m(() => ({
      [`${a}`]: !o.value,
      [`${a}-nowrap`]: !i.value,
      [`${a}-align-${n.value}`]: n.value,
      [`${a}-justify-${l.value}`]: l.value
    })), s = m(() => Array.isArray(t.value) ? t.value[0] : t.value), u = m(() => Array.isArray(t.value) ? t.value[1] : 0), c = va(s, 0), f = va(u, 0), g = m(() => {
      const b = {};
      if ((c.value || f.value) && !o.value) {
        const _ = -c.value / 2, P = -f.value / 2;
        _ && (b.marginLeft = `${_}px`, b.marginRight = `${_}px`), P && (b.marginTop = `${P}px`, b.marginBottom = `${P}px`);
      }
      return b;
    }), h = m(() => [c.value, f.value]);
    return Wt(ys, Te({
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
    style: ve(e.styles)
  }, [re(e.$slots, "default")], 6);
}
var nh = /* @__PURE__ */ fe(eh, [["render", th]]);
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
    return jl.forEach((f) => {
      const g = e.value[f];
      ge(g) ? c[f] = g : Ee(g) && ge(g[l]) && (c[f] = g[l]);
    }), c;
  });
}
var oh = Object.defineProperty, rr = Object.getOwnPropertySymbols, ah = Object.prototype.hasOwnProperty, ih = Object.prototype.propertyIsEnumerable, sr = (e, t, n) => t in e ? oh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ho = (e, t) => {
  for (var n in t || (t = {}))
    ah.call(t, n) && sr(e, n, t[n]);
  if (rr)
    for (var n of rr(t))
      ih.call(t, n) && sr(e, n, t[n]);
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
        sm: P,
        md: T,
        lg: k,
        xl: V,
        xxl: C
      } = e, D = {
        [`${t}`]: !f,
        [`${t}-order-${b}`]: b,
        [`${t}-${g}`]: !f && !_ && !P && !T && !k && !V && !C,
        [`${t}-offset-${h}`]: h && h > 0
      }, $ = {
        xs: _,
        sm: P,
        md: T,
        lg: k,
        xl: V,
        xxl: C
      };
      return Object.keys($).forEach((O) => {
        const N = $[O];
        N && ge(N) ? D[`${t}-${O}-${N}`] = !0 : N && Ee(N) && (D[`${t}-${O}-${N.span}`] = N.span, D[`${t}-${O}-offset-${N.offset}`] = N.offset, D[`${t}-${O}-order-${N.order}`] = N.order);
      }), D;
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
    } : {}), s = m(() => Xn(e, jl)), u = lh(m(() => Ho({
      val: e.span,
      key: "span"
    }, s.value))), c = va(u, 24, !0);
    return {
      visible: m(() => !!c.value),
      classNames: i,
      styles: m(() => Ho(Ho({}, a.value), r.value))
    };
  }
});
function uh(e, t, n, l, o, i) {
  return e.visible ? (y(), x("div", {
    key: 0,
    class: G(e.classNames),
    style: ve(e.styles)
  }, [re(e.$slots, "default")], 6)) : te("v-if", !0);
}
var ch = /* @__PURE__ */ fe(sh, [["render", uh]]), dh = Object.defineProperty, ur = Object.getOwnPropertySymbols, fh = Object.prototype.hasOwnProperty, ph = Object.prototype.propertyIsEnumerable, cr = (e, t, n) => t in e ? dh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dr = (e, t) => {
  for (var n in t || (t = {}))
    fh.call(t, n) && cr(e, n, t[n]);
  if (ur)
    for (var n of ur(t))
      ph.call(t, n) && cr(e, n, t[n]);
  return e;
};
const vh = F({
  name: "Tooltip",
  components: {
    Trigger: Pl
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
    const n = ne("tooltip"), l = B(e.defaultPopupVisible), o = m(() => {
      var c;
      return (c = e.popupVisible) != null ? c : l.value;
    }), i = (c) => {
      l.value = c, t("update:popupVisible", c), t("popupVisibleChange", c);
    }, a = m(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), r = m(() => {
      if (e.backgroundColor || e.contentStyle)
        return dr({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = m(() => [`${n}-popup-arrow`, e.arrowClass]), u = m(() => {
      if (e.backgroundColor || e.arrowStyle)
        return dr({
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
  const a = ce("Trigger");
  return y(), ie(a, {
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
    content: le(() => [re(e.$slots, "content", {}, () => [ke(de(e.content), 1)])]),
    default: le(() => [re(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Wo = /* @__PURE__ */ fe(vh, [["render", hh]]);
const Zn = Object.assign(Wo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Wo.name, Wo);
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
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, _h, 14, gh);
}
var Uo = /* @__PURE__ */ fe(mh, [["render", $h]]);
const wh = Object.assign(Uo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Uo.name, Uo);
  }
}), kh = F({
  name: "FormItemLabel",
  components: {
    ResizeObserver: Il,
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
    const e = ne("form-item-label"), t = Ge(Pa, void 0), n = Kn(), l = B(), o = () => {
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
  const a = ce("icon-question-circle"), r = ce("Tooltip"), s = ce("ResizeObserver");
  return y(), ie(s, {
    onResize: e.handleResize
  }, {
    default: le(() => [(y(), ie(tn(e.component), Ve({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: le(() => [e.required && e.asteriskPosition === "start" ? (y(), x("strong", {
        key: 0,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Sh, 2)) : te("v-if", !0), re(e.$slots, "default"), e.tooltip ? (y(), ie(r, {
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
      }, Oh, 2)) : te("v-if", !0), ke(" " + de(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var xh = /* @__PURE__ */ fe(kh, [["render", Eh]]);
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
  return e.error.length > 0 ? (y(!0), x(Oe, {
    key: 0
  }, at(e.error, (a) => (y(), ie(Ol, {
    key: a,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [p("div", {
      role: "alert",
      class: G([e.prefixCls])
    }, de(a), 3)]),
    _: 2
  }, 1024))), 128)) : e.help || e.$slots.help ? (y(), ie(Ol, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [p("div", {
      class: G([e.prefixCls, `${e.prefixCls}-help`])
    }, [re(e.$slots, "help", {}, () => [ke(de(e.help), 1)])], 2)]),
    _: 3
  })) : te("v-if", !0);
}
var Ph = /* @__PURE__ */ fe(Bh, [["render", Ih]]), jh = Object.defineProperty, Ml = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable, fr = (e, t, n) => t in e ? jh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, pr = (e, t) => {
  for (var n in t || (t = {}))
    _s.call(t, n) && fr(e, n, t[n]);
  if (Ml)
    for (var n of Ml(t))
      $s.call(t, n) && fr(e, n, t[n]);
  return e;
}, Th = (e, t) => {
  var n = {};
  for (var l in e)
    _s.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Ml)
    for (var l of Ml(e))
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
    } = $e(e), l = Ge(Pa, {}), {
      autoLabelWidth: o,
      layout: i
    } = $e(l), {
      i18nMessage: a
    } = Ca(), r = m(() => {
      var I;
      const w = pr({}, (I = e.labelColProps) != null ? I : l.labelColProps);
      return e.labelColFlex ? w.flex = e.labelColFlex : l.autoLabelWidth && (w.flex = `${l.maxLabelWidth}px`), w;
    }), s = m(() => {
      var I;
      const w = pr({}, (I = e.wrapperColProps) != null ? I : l.wrapperColProps);
      return n.value && (w.id = ms(l.id, n.value)), (e.labelColFlex || l.autoLabelWidth) && (w.flex = "auto"), w;
    }), u = m(() => {
      var I;
      return (I = e.labelColStyle) != null ? I : l.labelColStyle;
    }), c = m(() => {
      var I;
      return (I = e.wrapperColStyle) != null ? I : l.wrapperColStyle;
    }), f = Qi(l.model, e.field), g = Te({}), h = Te({}), b = m(() => Iv(g)), _ = m(() => Pv(h)), P = B(!1), T = m(() => Qi(l.model, e.field)), k = m(() => {
      var I;
      return Boolean((I = e.disabled) != null ? I : l == null ? void 0 : l.disabled);
    }), V = m(() => {
      var I;
      return (I = e.validateStatus) != null ? I : b.value;
    }), C = m(() => V.value === "error"), D = m(() => {
      var I, w, q;
      const Q = [].concat((q = (w = e.rules) != null ? w : (I = l == null ? void 0 : l.rules) == null ? void 0 : I[e.field]) != null ? q : []), he = Q.some((ye) => ye.required);
      return e.required && !he ? [{
        required: !0
      }].concat(Q) : Q;
    }), $ = m(() => D.value.some((I) => I.required)), O = e.noStyle ? Ge(ca, void 0) : void 0, N = (I, {
      status: w,
      message: q
    }) => {
      g[I] = w, h[I] = q, e.noStyle && (O == null || O.updateValidateState(I, {
        status: w,
        message: q
      }));
    }, Y = m(() => e.feedback && V.value ? V.value : void 0), R = () => {
      var I;
      if (P.value)
        return Promise.resolve();
      const w = D.value;
      if (!n.value || w.length === 0)
        return b.value && S(), Promise.resolve();
      const q = n.value, Q = T.value;
      N(q, {
        status: "",
        message: ""
      });
      const he = new Fa({
        [q]: w.map((ye) => {
          var se = Th(ye, []);
          return !se.type && !se.validator && (se.type = "string"), se;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (I = a.value.form) == null ? void 0 : I.validateMessages
      });
      return new Promise((ye) => {
        he.validate({
          [q]: Q
        }, (se) => {
          var Be;
          const Se = Boolean(se == null ? void 0 : se[q]);
          N(q, {
            status: Se ? "error" : "",
            message: (Be = se == null ? void 0 : se[q].message) != null ? Be : ""
          });
          const Pe = Se ? {
            label: e.label,
            field: n.value,
            value: se[q].value,
            type: se[q].type,
            isRequiredError: Boolean(se[q].requiredError),
            message: se[q].message
          } : void 0;
          ye(Pe);
        });
      });
    }, v = m(() => [].concat(e.validateTrigger)), E = m(() => v.value.reduce((I, w) => {
      switch (w) {
        case "change":
          return I.onChange = () => {
            R();
          }, I;
        case "input":
          return I.onInput = () => {
            Le(() => {
              R();
            });
          }, I;
        case "focus":
          return I.onFocus = () => {
            R();
          }, I;
        case "blur":
          return I.onBlur = () => {
            R();
          }, I;
        default:
          return I;
      }
    }, {}));
    Wt(ca, Te({
      eventHandlers: E,
      size: l && Vl(l, "size"),
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
    }, W = Te({
      field: n,
      disabled: k,
      error: C,
      validate: R,
      clearValidate: S,
      resetField: () => {
        S(), P.value = !0, l != null && l.model && n.value && Ji(l.model, n.value, f), Le(() => {
          P.value = !1;
        });
      },
      setField: (I) => {
        var w, q;
        n.value && (P.value = !0, "value" in I && (l != null && l.model) && n.value && Ji(l.model, n.value, I.value), (I.status || I.message) && N(n.value, {
          status: (w = I.status) != null ? w : "",
          message: (q = I.message) != null ? q : ""
        }), Le(() => {
          P.value = !1;
        }));
      }
    });
    xe(() => {
      var I;
      W.field && ((I = l.addField) == null || I.call(l, W));
    }), Ut(() => {
      var I;
      W.field && ((I = l.removeField) == null || I.call(l, W));
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
  const r = ce("FormItemLabel"), s = ce("ArcoCol"), u = ce("FormItemMessage"), c = ce("ArcoRow");
  return e.noStyle ? re(e.$slots, "default", {
    key: 0
  }) : (y(), ie(c, Ve({
    key: 1,
    class: [e.cls, {
      [`${e.prefixCls}-has-help`]: Boolean((a = e.$slots.help) != null ? a : e.help)
    }],
    wrap: !(e.labelColFlex || e.autoLabelWidth),
    div: e.layout !== "horizontal" || e.hideLabel
  }, e.rowProps), {
    default: le(() => [e.hideLabel ? te("v-if", !0) : (y(), ie(s, Ve({
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
        default: le(() => [e.$slots.label || e.label ? re(e.$slots, "label", {
          key: 0
        }, () => [ke(de(e.label), 1)]) : te("v-if", !0)]),
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
      }, [re(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (y(), ie(u, {
        key: 0,
        error: e.finalMessage,
        help: e.help
      }, Pr({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: le(() => [re(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : te("v-if", !0), e.$slots.extra || e.extra ? (y(), x("div", {
        key: 1,
        class: G(`${e.prefixCls}-extra`)
      }, [re(e.$slots, "extra", {}, () => [ke(de(e.extra), 1)])], 2)) : te("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var ln = /* @__PURE__ */ fe(Mh, [["render", Dh]]);
const ws = Object.assign(qo, {
  Item: ln,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + qo.name, qo), e.component(n + ln.name, ln);
  }
}), zh = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Ah = (e) => {
  const t = {};
  return zh.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, Lh = F({
  name: "Textarea",
  components: {
    ResizeObserver: Bl,
    IconHover: ft,
    IconClose: sn
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
    } = $e(e), a = ne("textarea"), {
      mergedDisabled: r,
      mergedError: s,
      eventHandlers: u
    } = mt({
      disabled: l,
      error: o
    }), c = B(), f = B(), g = B(), h = B(), b = B(e.defaultValue), _ = m(() => {
      var L;
      return (L = i.value) != null ? L : b.value;
    }), [P, T] = Zr(c);
    be(i, (L) => {
      (Qe(L) || Sn(L)) && (b.value = "");
    });
    const k = m(() => Ee(e.maxLength) && Boolean(e.maxLength.errorOnly)), V = m(() => Ee(e.maxLength) ? e.maxLength.length : e.maxLength), C = (L) => {
      var M;
      return et(e.wordLength) ? e.wordLength(L) : (M = L.length) != null ? M : 0;
    }, D = m(() => C(_.value)), $ = m(() => s.value || Boolean(V.value && k.value && D.value > V.value)), O = B(!1), N = B(!1), Y = m(() => e.allowClear && !r.value && _.value), R = B(!1), v = B(""), E = () => {
      P(), Le(() => {
        c.value && _.value !== c.value.value && (c.value.value = _.value, T());
      });
    }, S = (L, M = !0) => {
      var Z, oe;
      V.value && !k.value && C(L) > V.value && (L = (oe = (Z = e.wordSlice) == null ? void 0 : Z.call(e, L, V.value)) != null ? oe : L.slice(0, V.value)), b.value = L, M && t("update:modelValue", L), E();
    };
    let z = _.value;
    const K = (L, M) => {
      var Z, oe;
      L !== z && (z = L, t("change", L, M), (oe = (Z = u.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, M));
    }, W = (L) => {
      var M, Z;
      N.value = !0, z = _.value, t("focus", L), (Z = (M = u.value) == null ? void 0 : M.onFocus) == null || Z.call(M, L);
    }, X = (L) => {
      var M, Z;
      N.value = !1, t("blur", L), (Z = (M = u.value) == null ? void 0 : M.onBlur) == null || Z.call(M, L), K(_.value, L);
    }, A = (L) => {
      var M, Z;
      const {
        value: oe
      } = L.target;
      if (L.type === "compositionend") {
        if (R.value = !1, v.value = "", V.value && !k.value && _.value.length >= V.value && C(oe) > V.value) {
          E();
          return;
        }
        t("input", oe, L), S(oe), (Z = (M = u.value) == null ? void 0 : M.onInput) == null || Z.call(M, L);
      } else
        R.value = !0;
    }, ee = (L) => {
      var M, Z;
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
        t("input", oe, L), S(oe), (Z = (M = u.value) == null ? void 0 : M.onInput) == null || Z.call(M, L);
      }
    }, I = (L) => {
      S(""), K("", L), t("clear", L);
    };
    be(i, (L) => {
      L !== _.value && S(L ?? "", !1);
    });
    const w = (L) => Gn(n, qt), q = (L) => Xn(n, qt), Q = m(() => [`${a}-wrapper`, {
      [`${a}-focus`]: N.value,
      [`${a}-disabled`]: r.value,
      [`${a}-error`]: $.value,
      [`${a}-scroll`]: O.value
    }]);
    let he;
    const ye = B(0), se = B(0), Be = m(() => !Ee(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * ye.value + se.value), Se = m(() => !Ee(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * ye.value + se.value), Pe = () => {
      const L = Ah(he);
      ye.value = Number.parseInt(L["line-height"] || 0, 10), se.value = Number.parseInt(L["border-width"] || 0, 10) * 2 + Number.parseInt(L["padding-top"] || 0, 10) + Number.parseInt(L["padding-bottom"] || 0, 10), h.value = L, Le(() => {
        var M;
        const Z = (M = g.value) == null ? void 0 : M.offsetHeight;
        let oe = Z ?? 0, Me = "hidden";
        Be.value && oe < Be.value && (oe = Be.value), Se.value && oe > Se.value && (oe = Se.value, Me = "auto"), f.value = {
          height: `${oe}px`,
          resize: "none",
          overflow: Me
        };
      });
    };
    xe(() => {
      c.value && (he = window.getComputedStyle(c.value), e.autoSize && Pe()), rt();
    });
    const pt = () => {
      e.autoSize && g.value && Pe(), rt();
    }, tt = (L) => {
      c.value && L.target !== c.value && (L.preventDefault(), c.value.focus());
    }, rt = () => {
      c.value && (c.value.scrollHeight > c.value.offsetHeight ? O.value || (O.value = !0) : O.value && (O.value = !1));
    };
    return be(_, () => {
      e.autoSize && g.value && Pe(), rt();
    }), {
      prefixCls: a,
      wrapperCls: Q,
      textareaRef: c,
      textareaStyle: f,
      mirrorRef: g,
      mirrorStyle: h,
      computedValue: _,
      showClearBtn: Y,
      valueLength: D,
      computedMaxLength: V,
      mergedDisabled: r,
      getWrapperAttrs: w,
      getTextareaAttrs: q,
      handleInput: ee,
      handleFocus: W,
      handleBlur: X,
      handleComposition: A,
      handleClear: I,
      handleResize: pt,
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
  const a = ce("resize-observer"), r = ce("icon-close"), s = ce("icon-hover");
  return y(), x("div", Ve(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (y(), x("div", {
    key: 0,
    ref: "mirrorRef",
    class: G(`${e.prefixCls}-mirror`),
    style: ve(e.mirrorStyle)
  }, de(`${e.computedValue}
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
  }, 8, ["onResize"]), re(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (y(), x("div", {
    key: 1,
    class: G(`${e.prefixCls}-word-limit`)
  }, de(e.valueLength) + "/" + de(e.computedMaxLength), 3)) : te("v-if", !0), e.showClearBtn ? (y(), x("div", {
    key: 2,
    class: G(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [d(s, null, {
    default: le(() => [d(r)]),
    _: 1
  })], 2)) : te("v-if", !0)], 16);
}
var Ko = /* @__PURE__ */ fe(Lh, [["render", Nh]]);
const Rh = Object.assign(Ko, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ko.name, Ko);
  }
}), qh = F({
  name: "Message",
  components: {
    AIconHover: ft,
    IconInfoCircleFill: Qu,
    IconCheckCircleFill: Yr,
    IconExclamationCircleFill: Gr,
    IconCloseCircleFill: Xr,
    IconClose: sn,
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
    return xe(() => {
      i();
    }), jt(() => {
      e.resetOnUpdate && (a(), i());
    }), Ul(() => {
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
  const a = ce("icon-info-circle-fill"), r = ce("icon-check-circle-fill"), s = ce("icon-exclamation-circle-fill"), u = ce("icon-close-circle-fill"), c = ce("icon-loading"), f = ce("icon-close"), g = ce("a-icon-hover");
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
  }, [re(e.$slots, "icon", {}, () => [e.type === "info" ? (y(), ie(a, {
    key: 0
  })) : e.type === "success" ? (y(), ie(r, {
    key: 1
  })) : e.type === "warning" ? (y(), ie(s, {
    key: 2
  })) : e.type === "error" ? (y(), ie(u, {
    key: 3
  })) : e.type === "loading" ? (y(), ie(c, {
    key: 4
  })) : te("v-if", !0)])], 2)) : te("v-if", !0), p("span", {
    class: G(`${e.prefixCls}-content`)
  }, [re(e.$slots, "default")], 2), e.closable ? (y(), x("span", {
    key: 1,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...h) => e.handleClose && e.handleClose(...h))
  }, [d(g, null, {
    default: le(() => [d(f)]),
    _: 1
  })], 2)) : te("v-if", !0)], 34);
}
var Wh = /* @__PURE__ */ fe(qh, [["render", Hh]]);
function Uh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ka(e);
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
    } = es("message", {
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
          default: ni(i.content),
          icon: ni(i.icon)
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
}), Yh = Object.defineProperty, Gh = Object.defineProperties, Xh = Object.getOwnPropertyDescriptors, vr = Object.getOwnPropertySymbols, Zh = Object.prototype.hasOwnProperty, Qh = Object.prototype.propertyIsEnumerable, hr = (e, t, n) => t in e ? Yh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Dl = (e, t) => {
  for (var n in t || (t = {}))
    Zh.call(t, n) && hr(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      Qh.call(t, n) && hr(e, n, t[n]);
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
      const s = Te(Dl({
        id: r
      }, i));
      return this.messages.value.push(s), this.messageIds.add(r), {
        close: () => this.remove(r)
      };
    }, this.update = (i, a) => {
      for (let r = 0; r < this.messages.value.length; r++)
        if (this.messages.value[r].id === i) {
          const s = !Qe(a.duration);
          Object.assign(this.messages.value[r], ks(Dl({}, a), {
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
      this.messages.value.length === 0 && this.container && (Ga(null, this.container), document.body.removeChild(this.container), this.container = null, bn[this.position] = void 0);
    };
    const {
      position: l = "top"
    } = t;
    this.container = zu("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = B([]), this.position = l;
    const o = d(Kh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? Ye._context) && (o.appContext = n ?? Ye._context), Ga(o, this.container), document.body.appendChild(this.container);
  }
}
const bn = {}, Cs = [...vc, "loading", "normal"], _l = Cs.reduce((e, t) => (e[t] = (n, l) => {
  kt(n) && (n = {
    content: n
  });
  const o = Dl({
    type: t
  }, n), {
    position: i = "top"
  } = o;
  return bn[i] || (bn[i] = new Jh(o, l)), bn[i].add(o);
}, e), {});
_l.clear = (e) => {
  var t;
  e ? (t = bn[e]) == null || t.clear() : Object.values(bn).forEach((n) => n == null ? void 0 : n.clear());
};
const Ye = ks(Dl({}, _l), {
  install: (e) => {
    const t = {
      clear: _l.clear
    };
    for (const n of Cs)
      t[n] = (l, o = e._context) => _l[n](l, o);
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
    const n = ne("slider-btn"), l = B(!1), o = (f) => {
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
  const a = ce("tooltip");
  return y(), ie(a, {
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
      onClick: t[1] || (t[1] = on(() => {
      }, ["stop"]))
    }), null, 16, tm)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var lm = /* @__PURE__ */ fe(em, [["render", nm]]);
const Ft = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${an.round(l * 100, 2)}%`;
}, lo = (e, t) => t === "vertical" ? {
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
      getStyle: (l) => lo(Ft(l, [e.min, e.max]), e.direction)
    };
  }
});
function am(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(`${e.prefixCls}-dots`)
  }, [(y(!0), x(Oe, null, at(e.data, (a, r) => (y(), x("div", {
    key: r,
    class: G(`${e.prefixCls}-dot-wrapper`),
    style: ve(e.getStyle(a.key))
  }, [p("div", {
    class: G([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var im = /* @__PURE__ */ fe(om, [["render", am]]);
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
      getStyle: (l) => lo(Ft(l, [e.min, e.max]), e.direction)
    };
  }
});
function sm(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(`${e.prefixCls}-marks`)
  }, [(y(!0), x(Oe, null, at(e.data, (a, r) => (y(), x("div", {
    key: r,
    "aria-hidden": "true",
    class: G(`${e.prefixCls}-mark`),
    style: ve(e.getStyle(a.key))
  }, de(a.content), 7))), 128))], 2);
}
var um = /* @__PURE__ */ fe(rm, [["render", sm]]);
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
        const r = an.plus(a * e.step, e.min);
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
      getStyle: (o) => lo(Ft(o, [e.min, e.max]), e.direction)
    };
  }
});
function dm(e, t, n, l, o, i) {
  return y(), x("div", {
    class: G(`${e.prefixCls}-ticks`)
  }, [(y(!0), x(Oe, null, at(e.steps, (a, r) => (y(), x("div", {
    key: r,
    class: G([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: ve(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var fm = /* @__PURE__ */ fe(cm, [["render", dm]]);
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
  const a = ce("input-number");
  return y(), x("div", {
    class: G(`${e.prefixCls}-input`)
  }, [e.range ? (y(), x(Oe, {
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
var hm = /* @__PURE__ */ fe(pm, [["render", vm]]);
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
    } = $e(e), l = ne("slider"), {
      mergedDisabled: o,
      eventHandlers: i
    } = mt({
      disabled: Vl(e, "disabled")
    }), a = B(null), r = B(), s = e.modelValue ? e.modelValue : e.defaultValue, u = B(Ae(s) ? s[0] : 0), c = B(Ae(s) ? s[1] : s);
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
    })), P = (v) => lo(Ft(v, [e.min, e.max]), e.direction), T = B(!1), k = () => {
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
      const I = Math.round(ee / A);
      return an.plus(e.min, an.times(I, e.step));
    }
    const C = (v, E) => {
      c.value = V(v, E), f();
    }, D = (v) => {
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
      getBtnStyle: P,
      getBarStyle: $,
      handleClick: D,
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
  const a = ce("slider-ticks"), r = ce("slider-dots"), s = ce("slider-marks"), u = ce("slider-button"), c = ce("slider-input");
  return y(), x("div", {
    class: G(e.cls)
  }, [p("div", {
    ref: "trackRef",
    class: G(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [p("div", {
    class: G(`${e.prefixCls}-bar`),
    style: ve(e.getBarStyle(e.computedValue))
  }, null, 6), e.showTicks ? (y(), ie(a, {
    key: 0,
    value: e.computedValue,
    step: e.step,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["value", "step", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (y(), ie(r, {
    key: 1,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (y(), ie(s, {
    key: 2,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.range ? (y(), ie(u, {
    key: 3,
    style: ve(e.getBtnStyle(e.computedValue[0])),
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
    style: ve(e.getBtnStyle(e.computedValue[1])),
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (y(), ie(c, {
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
var Yo = /* @__PURE__ */ fe(mm, [["render", gm]]);
const Ss = Object.assign(Yo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Yo.name, Yo);
  }
});
var Go = F({
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
      const s = ml((r = t.default) == null ? void 0 : r.call(t), !0).filter((u) => u.type !== tu);
      return d("div", {
        class: o.value
      }, [s.map((u, c) => {
        var f, g;
        const h = t.split && c > 0;
        return d(Oe, {
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
const bm = Object.assign(Go, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Go.name, Go);
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
    } = $e(e), i = ne("switch"), {
      mergedSize: a
    } = yt(l), {
      mergedDisabled: r,
      mergedSize: s,
      eventHandlers: u
    } = mt({
      disabled: n,
      size: a
    }), c = B(e.defaultChecked ? e.checkedValue : e.uncheckedValue), f = m(() => {
      var C;
      return ((C = e.modelValue) != null ? C : c.value) === e.checkedValue;
    }), g = B(e.loading), h = m(() => g.value || e.loading), b = (C, D) => {
      var $, O;
      c.value = C ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, D), (O = ($ = u.value) == null ? void 0 : $.onChange) == null || O.call($, D);
    }, _ = async (C) => {
      if (h.value || r.value)
        return;
      const D = !f.value, $ = D ? e.checkedValue : e.uncheckedValue, O = e.beforeChange;
      if (et(O)) {
        g.value = !0;
        try {
          const N = await O($);
          (N ?? !0) && b(D, C);
        } finally {
          g.value = !1;
        }
      } else
        b(D, C);
    }, P = (C) => {
      var D, $;
      t("focus", C), ($ = (D = u.value) == null ? void 0 : D.onFocus) == null || $.call(D, C);
    }, T = (C) => {
      var D, $;
      t("blur", C), ($ = (D = u.value) == null ? void 0 : D.onBlur) == null || $.call(D, C);
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
      handleFocus: P,
      handleBlur: T
    };
  }
}), _m = ["aria-checked", "disabled"];
function $m(e, t, n, l, o, i) {
  const a = ce("icon-loading");
  return y(), x("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: G(e.cls),
    style: ve(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r)),
    onFocus: t[1] || (t[1] = (...r) => e.handleFocus && e.handleFocus(...r)),
    onBlur: t[2] || (t[2] = (...r) => e.handleBlur && e.handleBlur(...r))
  }, [p("span", {
    class: G(`${e.prefixCls}-handle`)
  }, [p("span", {
    class: G(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? (y(), ie(a, {
    key: 0
  })) : (y(), x(Oe, {
    key: 1
  }, [e.computedCheck ? re(e.$slots, "checked-icon", {
    key: 0
  }) : re(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), te("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (y(), x(Oe, {
    key: 0
  }, [p("span", {
    class: G(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [ke(de(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [ke(de(e.uncheckedText), 1)])], 2), p("span", {
    class: G(`${e.prefixCls}-text`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [ke(de(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [ke(de(e.uncheckedText), 1)])], 2)], 64)) : te("v-if", !0)], 46, _m);
}
var Xo = /* @__PURE__ */ fe(ym, [["render", $m]]);
const $t = Object.assign(Xo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Xo.name, Xo);
  }
}), wm = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, Na = Symbol("ArcoTabs"), km = F({
  name: "TabsTab",
  components: {
    IconHover: ft,
    IconClose: sn
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
    const n = ne("tabs-tab"), l = Ge(Na, {}), o = (u) => {
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
  const a = ce("icon-close"), r = ce("icon-hover");
  return y(), x("div", Ve({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [p("span", {
    class: G(`${e.prefixCls}-title`)
  }, [re(e.$slots, "default")], 2), e.editable && e.tab.closable ? (y(), ie(r, {
    key: 0,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: on(e.handleDelete, ["stop"])
  }, {
    default: le(() => [d(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : te("v-if", !0)], 16);
}
var Sm = /* @__PURE__ */ fe(km, [["render", Cm]]);
function Vm(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ka(e);
}
var mr = F({
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
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? d(Uf, null, null) : d(Cp, null, null) : e.type === "next" ? d(Ma, null, null) : d(rs, null, null), i = m(() => [n, {
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
      }, [d(ft, {
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
    } = $e(e), n = ne("tabs-nav-ink"), l = B(0), o = B(0), i = m(() => e.direction === "vertical" ? {
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
    style: ve(e.style)
  }, null, 6);
}
var xm = /* @__PURE__ */ fe(Om, [["render", Em]]), Bm = F({
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
    } = $e(e), r = ne("tabs-nav"), s = B(), u = B(), c = B({}), f = m(() => {
      if (!Qe(o.value))
        return c.value[o.value];
    }), g = B(), h = m(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), b = B(!1), _ = B(0), P = B(0), T = B([]), k = B(0), V = () => {
      var I, w, q;
      return (q = a.value === "vertical" ? (I = s.value) == null ? void 0 : I.offsetHeight : (w = s.value) == null ? void 0 : w.offsetWidth) != null ? q : 0;
    }, C = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, D = () => l.value.map((I) => {
      const w = c.value[I.key];
      return a.value === "vertical" ? w.offsetTop + w.offsetHeight : w.offsetLeft + w.offsetWidth;
    }), $ = () => {
      b.value = O(), b.value ? (_.value = V(), P.value = C(), T.value = D(), k.value > P.value && (k.value = P.value)) : k.value = 0;
    }, O = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, N = (I) => {
      var w;
      return ((w = T.value[I - 1]) != null ? w : 0) >= k.value && T.value[I] <= k.value + _.value;
    }, Y = (I) => s.value ? I === "previous" ? k.value - _.value : k.value + _.value : 0, R = (I) => !s.value || !u.value || I < 0 ? 0 : I > P.value ? P.value : I, v = (I, w) => {
      t("click", I, w);
    }, E = (I, w) => {
      t("delete", I, w);
    }, S = (I) => {
      k.value = R(Y(I));
    }, z = () => {
      $(), g.value && g.value.$forceUpdate();
    };
    be(l, () => {
      Le(() => {
        $();
      });
    }), be(i, (I, w) => {
      Le(() => {
        var q;
        if (b.value)
          if (I >= w) {
            const Q = I < T.value.length - 1 ? I + 1 : I;
            N(Q) || (k.value = T.value[Q] - _.value);
          } else {
            const Q = I > 0 ? I - 1 : I;
            N(Q) || (k.value = (q = T.value[Q - 1]) != null ? q : 0);
          }
      });
    }), xe(() => {
      $();
    });
    const K = () => !h.value || !e.showAddButton ? null : d("div", {
      class: `${r}-add-btn`,
      onClick: (I) => t("add", I)
    }, [d(ft, null, {
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
      var I;
      return d("div", {
        class: W.value
      }, [b.value && d(mr, {
        type: "previous",
        direction: e.direction,
        disabled: k.value <= 0,
        onClick: S
      }, null), d(Bl, {
        onResize: () => $()
      }, {
        default: () => [d("div", {
          class: ee.value,
          ref: s
        }, [d(Bl, {
          onResize: z
        }, {
          default: () => [d("div", {
            ref: u,
            class: X.value,
            style: A.value
          }, [e.tabs.map((w, q) => d(Sm, {
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
              var Q, he, ye;
              return [(ye = (he = (Q = w.slots).title) == null ? void 0 : he.call(Q)) != null ? ye : w.title];
            }
          })), e.type === "line" && f.value && d(xm, {
            ref: g,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !b.value && K()])]
      }), b.value && d(mr, {
        type: "next",
        direction: e.direction,
        disabled: k.value >= P.value,
        onClick: S
      }, null), d("div", {
        class: `${r}-extra`
      }, [b.value && K(), (I = n.extra) == null ? void 0 : I.call(n)])]);
    };
  }
}), Zo = F({
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
    } = $e(e), r = ne("tabs"), {
      mergedSize: s
    } = yt(l), u = m(() => e.direction === "vertical" ? "left" : e.position), c = m(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: f,
      components: g
    } = Bp("TabPane"), h = Te(/* @__PURE__ */ new Map()), b = m(() => {
      const v = [];
      return g.value.forEach((E) => {
        const S = h.get(E);
        S && v.push(S);
      }), v;
    }), _ = m(() => b.value.map((v) => v.key)), P = (v, E) => {
      h.set(v, E);
    }, T = (v) => {
      h.delete(v);
    }, k = B(e.defaultActiveKey), V = m(() => {
      var v;
      const E = (v = e.activeKey) != null ? v : k.value;
      return Qe(E) ? _.value[0] : E;
    }), C = m(() => {
      const v = _.value.indexOf(V.value);
      return v === -1 ? 0 : v;
    });
    Wt(Na, Te({
      lazyLoad: o,
      destroyOnHide: i,
      activeKey: V,
      addItem: P,
      removeItem: T,
      trigger: a
    }));
    const D = (v) => {
      v !== V.value && (k.value = v, t("update:activeKey", v), t("change", v));
    }, $ = (v, E) => {
      D(v), t("tabClick", v, E);
    }, O = (v) => {
      t("add", v), e.autoSwitch && Le(() => {
        const E = _.value[_.value.length - 1];
        D(E);
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
}), Im = Object.defineProperty, gr = Object.getOwnPropertySymbols, Pm = Object.prototype.hasOwnProperty, jm = Object.prototype.propertyIsEnumerable, br = (e, t, n) => t in e ? Im(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tm = (e, t) => {
  for (var n in t || (t = {}))
    Pm.call(t, n) && br(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      jm.call(t, n) && br(e, n, t[n]);
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
    } = $e(e), a = Kn(), r = ne("tabs"), s = Ge(Na, {}), u = B(), c = m(() => a == null ? void 0 : a.vnode.key), f = m(() => c.value === s.activeKey), g = B(s.lazyLoad ? f.value : !0), h = Te({
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
  }, [re(e.$slots, "default")], 2)) : te("v-if", !0)], 2);
}
var An = /* @__PURE__ */ fe(Mm, [["render", Dm]]);
const yr = Object.assign(Zo, {
  TabPane: An,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Zo.name, Zo), e.component(n + An.name, An);
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
function Nm(e, t, n, l) {
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
function _r(e, t) {
  let n = e.componentKey;
  return !t.find((l) => l.componentKey === n);
}
function Vs(e) {
  return e + "";
}
const zl = /* @__PURE__ */ F({
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
    }), o = B({});
    xe(() => {
      e.block.adjustmentPosition && e.block.dragMode == "free" && (e.block.left = e.block.left - o.value.offsetWidth / 2, e.block.top = e.block.top - o.value.offsetHeight / 2, e.block.adjustmentPosition = !1, e.block.width = o.value.offsetWidth, e.block.height = o.value.offsetHeight);
    });
    let i = m(() => [e.priview ? "editor-bloack-priview" : "editor-bloack", e.block.focus && !e.priview ? "editor-bloack-focus" : "", e.dragMove ? "editor-bloack-dragmove" : ""]);
    function a(u) {
      t(u);
    }
    let r = "";
    return (s = e == null ? void 0 : e.block) != null && s.id && (r = "block" + Vs(e.block.id).replace("$", "")), () => e.block.dragMode == "free" ? d("div", {
      class: i.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(ce("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : e.block.dragMode == "default" || e.block.dragMode == "updown" || e.block.dragMode == "" ? d("div", {
      class: i.value,
      style: l.value,
      ref: o,
      "data-index": e.index,
      id: r
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(ce("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : d("div", {
      style: {
        backgroundColor: "gray"
      }
    }, [d(ce("grid-item"), {
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
function Rm(e) {
  const t = Te({
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
          name: P
        } = b;
        _ && (typeof _ == "string" && (_ = [_]), _ = _.map((T) => T.replace(/\s+/g, "")), _ != null && _.includes(h) && (t.commandMap[P](), r.stopPropagation()));
      });
    };
    return e ? (window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a)) : () => {
    };
  }, o = () => {
    t.commandArray.forEach((a) => {
      a.init && t.destoryList.push(a.init());
    }), t.destoryList.push(l());
  };
  Ul(() => {
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
class Os {
  constructor() {
    Ya(this, "Listener");
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
new Os();
let Bt = new Os();
const Al = {
  on: function(e) {
    Bt.on("dragstart", e);
  },
  emit: function(...e) {
    Bt.emit("dragstart", ...e);
  },
  off: function(e) {
    Bt.off("dragstart", e);
  }
}, Ll = {
  on: function(e) {
    Bt.on("dragend", e);
  },
  emit: function(...e) {
    Bt.emit("dragend", ...e);
  },
  off: function(e) {
    Bt.off("dragend", e);
  }
}, Es = {
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
  let o = Rm(l);
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
      return Al.on(i.dragstart), Ll.on(i.dragend), () => {
        Al.off(i.dragstart), Ll.off(i.dragend);
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
          let u = s.findIndex((g) => g.id == i.id), c = s.findIndex((g) => g.id == a.id), f = s[u];
          s[c], u < c ? (s.splice(u, 1), s.splice(c - 1, 0, f)) : (s.splice(u, 1), s.splice(c, 0, f)), t(s), r.after = Ne(s);
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
    let n = B(!1);
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
        loading: Kl(n)
      }, {
        default: le(() => [ke(de(e.modelValue ? "替换图片" : "上传图片") + " ", 1), p("input", {
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
}, Ra = /* @__PURE__ */ Ce(Zm, [["__scopeId", "data-v-b129c912"]]), Qm = {
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
      const l = za, o = Yt, i = Rh, a = Vt, r = Ss, s = bm, u = nn, c = Ql, f = ln, g = ws;
      return y(), ie(g, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: le(() => [(y(!0), x(Oe, null, at(e.editorControlView, (h, b) => (y(), ie(f, {
          label: h.label,
          key: b
        }, {
          default: le(() => {
            var _, P, T, k, V, C, D, $, O, N, Y, R, v, E;
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
              disabled: !!((P = e.currentBlock.props[h.key]) != null && P.disabled)
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (T = e.currentBlock.props[h.key]) != null && T.unit ? (y(), x("span", eg, de((k = e.currentBlock.props[h.key]) == null ? void 0 : k.unit), 1)) : te("", !0)])) : te("", !0), h.type == "textarea" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", tg, [d(i, {
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
              min: (D = e.currentBlock.props[h.key]) != null && D.min ? (($ = e.currentBlock.props[h.key]) == null ? void 0 : $.min) * 1 : 0,
              max: (O = e.currentBlock.props[h.key]) != null && O.max ? ((N = e.currentBlock.props[h.key]) == null ? void 0 : N.max) * 1 : 100,
              mode: "button",
              size: "large"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (Y = e.currentBlock.props[h.key]) != null && Y.unit ? (y(), x("span", lg, de((R = e.currentBlock.props[h.key]) == null ? void 0 : R.unit), 1)) : te("", !0)])) : te("", !0), h.type == "slider" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", og, [d(s, {
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
            }, 1024), (v = e.currentBlock.props[h.key]) != null && v.unit ? (y(), x("span", ag, de((E = e.currentBlock.props[h.key]) == null ? void 0 : E.unit), 1)) : te("", !0)])) : te("", !0), h.type == "imgUpload" && "defaultValue" in e.currentBlock.props[h.key] ? (y(), x("div", ig, [d(Ra, {
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
              default: le(() => [(y(!0), x(Oe, null, at(e.currentBlock.props[h.key].options, (S, z) => (y(), ie(u, {
                key: z,
                value: S.value
              }, {
                default: le(() => [ke(de(S.name), 1)]),
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
  let o = e(), i = t.value.cBlock || {}, a = i.props ? i.props : {}, r = B([]);
  Object.keys(a).forEach((c) => {
    a[c].type && (a[c].key = c, r.value.push(a[c]));
  });
  let s = d(ug), u = d(Ra);
  return d("div", {
    style: "height: 100%"
  }, [t.value.focusBlock.length ? d("div", {
    class: "control-container"
  }, [d(yr, {
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
  }, [d(yr, {
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
        default: () => [d(ln, {
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
          }, [ke("%")])]
        }), d(ln, {
          label: "背景色"
        }, {
          default: () => [d(za, {
            modelValue: n.container.backgroundColor,
            "onUpdate:modelValue": (c) => n.container.backgroundColor = c,
            showText: !0,
            disabledAlpha: !0
          }, null)]
        }), d(ln, {
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
    let t = B({});
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
    return n(), Es.on(() => {
      n();
    }), () => d(Oe, null, [Object.keys(t.value).map((l) => d("div", {
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
}), it = (e) => (He("data-v-9674b51e"), e = e(), We(), e), dg = {
  class: "editor-built-in-control-base-title"
}, fg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "line"
}, null, -1)), pg = {
  class: "font"
}, vg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), hg = [vg], mg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), gg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), bg = [gg], yg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), _g = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), $g = [_g], wg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), kg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), Cg = [kg], Sg = {
  class: "letterSpacing flex"
}, Vg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "字间距", -1)), Og = {
  class: "flex: 1"
}, Eg = {
  class: "letterSpacing flex mt24"
}, xg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "行间距", -1)), Bg = {
  class: "flex: 1"
}, Ig = {
  class: "letterSpacing flex mt24"
}, Pg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "左右间距", -1)), jg = {
  class: "flex: 1"
}, Tg = {
  class: "letterSpacing flex mt24"
}, Mg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "上间距", -1)), Dg = {
  class: "flex: 1"
}, zg = {
  class: "letterSpacing flex mt24"
}, Ag = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "下间距", -1)), Lg = {
  class: "flex: 1"
}, Fg = {
  class: "letterSpacing flex mt24"
}, Ng = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "背景色", -1)), Rg = {
  class: "flex: 1"
}, qg = {
  class: "mt24 mb48"
}, Hg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
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
      const i = Zn, a = Ss, r = za;
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
      }, null, 8, ["modelValue"])])]), p("div", qg, [Hg, d(Ra, {
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
      style: ve(e.style)
    }, [p("div", {
      class: G(["text", {
        minHeight: !e.text
      }])
    }, de(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
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
      style: ve(e.style)
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
    let n = B(null);
    function l(i) {
      var a, r, s, u, c, f, g, h;
      (a = n.value) != null && a.parentNode && i ? (((r = n.value) == null ? void 0 : r.parentNode).style.position = "absolute", ((s = n.value) == null ? void 0 : s.parentNode).style.zIndex = 10, ((u = n.value) == null ? void 0 : u.parentNode).style.bottom = t.visibleSubmitNum ? "0px" : "20px", ((c = n.value) == null ? void 0 : c.parentNode).style.top = "auto") : (((f = n.value) == null ? void 0 : f.parentNode).style.position = "relative", ((g = n.value) == null ? void 0 : g.parentNode).style.top = 0, ((h = n.value) == null ? void 0 : h.parentNode).style.bottom = "auto");
    }
    function o(i) {
      return i.replace("$num", t.submitNum + "");
    }
    return xe(() => {
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
      style: ve(e.style)
    }, de(e.text), 5), e.visibleSubmitNum ? (y(), x("div", tb, " ——" + de(o(e.submitTip)) + "—— ", 1)) : te("", !0)], 512));
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
    const t = e;
    let n = m(() => t.text.split(`
`));
    return (l, o) => (y(), x("div", {
      class: "editor-built-in-registor-base-title",
      style: ve({
        ...e.style
      })
    }, [(y(!0), x(Oe, null, at(Kl(n), (i) => (y(), x("div", null, de(i), 1))), 256))], 4));
  }
});
const $b = /* @__PURE__ */ Ce(_b, [["__scopeId", "data-v-25916970"]]), wb = {
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
      // height: block.props.lineHeight.defaultValue + "px",
      marginBottom: e.props.marginBottom.defaultValue + "px",
      marginTop: e.props.marginTop.defaultValue + "px"
    }));
    return d($b, {
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
    let n = B(0);
    xe(() => {
      let o = document.querySelector(".visual-editor-area-content");
      console.log(o.offsetHeight), n.value = o != null && o.offsetHeight ? o == null ? void 0 : o.offsetHeight : 600;
    });
    function l() {
      const o = t.successLink, i = /https?:\/\/[^\s]+/, a = o.match(i) ? o.match(i)[0] : null;
      a && window.open(a);
    }
    return (o, i) => (y(), x("div", {
      class: "editor-built-in-registor-base-success",
      style: ve({
        height: Kl(n) + "px"
      })
    }, [p("div", kb, [p("img", {
      src: e.successSrc,
      alt: ""
    }, null, 8, Cb)]), p("div", Sb, [p("span", {
      style: ve({
        color: e.successColor
      })
    }, de(e.successText), 5)]), p("div", Vb, [p("span", {
      style: ve({
        color: e.successDescColor
      })
    }, de(e.successDesc), 5)]), p("div", Ob, [p("img", {
      src: e.successQR,
      alt: ""
    }, null, 8, Eb)]), p("div", {
      class: "successBottomText",
      onClick: l
    }, [p("span", {
      style: ve({
        color: e.successBottomColor
      })
    }, de(e.successBottomText), 5)])], 4));
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
      style: ve(e.style)
    }, [p("div", jb, [e.isRequire ? (y(), x("span", Tb, "*")) : te("", !0), p("span", null, de(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", Mb, de(e.tip), 1)) : te("", !0), p("div", Db, [(y(!0), x(Oe, null, at(e.options, (l, o) => (y(), x("div", {
      class: "item",
      key: o
    }, [zb, p("div", Ab, de(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
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
function $l(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $l = function(t) {
    return typeof t;
  } : $l = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $l(e);
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
var Tt = It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Jn = It(/Edge/i), kr = It(/firefox/i), Ln = It(/safari/i) && !It(/chrome/i) && !It(/android/i), xs = It(/iP(ad|od|hone)/i), Bs = It(/chrome/i) && It(/android/i), Is = {
  capture: !1,
  passive: !1
};
function we(e, t, n) {
  e.addEventListener(t, n, !Tt && Is);
}
function _e(e, t, n) {
  e.removeEventListener(t, n, !Tt && Is);
}
function Fl(e, t) {
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
function Ps(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function bt(e, t, n, l) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && Fl(e, t) : Fl(e, t)) || l && e === n)
        return e;
      if (e === n)
        break;
    } while (e = Ps(e));
  }
  return null;
}
var Cr = /\s+/g;
function ct(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(Cr, " ").replace(" " + t + " ", " ");
      e.className = (l + (n ? " " + t : "")).replace(Cr, " ");
    }
}
function pe(e, t, n) {
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
      var l = pe(e, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function js(e, t, n) {
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
        if (o && o.getBoundingClientRect && (pe(o, "transform") !== "none" || n && pe(o, "position") !== "static")) {
          var g = o.getBoundingClientRect();
          a -= g.top + parseInt(pe(o, "border-top-width")), r -= g.left + parseInt(pe(o, "border-left-width")), s = a + i.height, u = r + i.width;
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
    if (a[i].style.display !== "none" && a[i] !== ue.ghost && (l || a[i] !== ue.dragged) && bt(a[i], n.draggable, e, !1)) {
      if (o === t)
        return a[i];
      o++;
    }
    i++;
  }
  return null;
}
function qa(e, t) {
  for (var n = e.lastElementChild; n && (n === ue.ghost || pe(n, "display") === "none" || t && !Fl(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function ht(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ue.clone && (!t || Fl(e, t)) && n++;
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
      var o = pe(n);
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
function Qo(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function Ts(e, t) {
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
function Ms(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Ds(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function zs(e, t, n) {
  var l = {};
  return Array.from(e.children).forEach(function(o) {
    var i, a, r, s;
    if (!(!bt(o, t.draggable, e, !1) || o.animated || o === n)) {
      var u = Re(o);
      l.left = Math.min((i = l.left) !== null && i !== void 0 ? i : 1 / 0, u.left), l.top = Math.min((a = l.top) !== null && a !== void 0 ? a : 1 / 0, u.top), l.right = Math.max((r = l.right) !== null && r !== void 0 ? r : -1 / 0, u.right), l.bottom = Math.max((s = l.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var ut = "Sortable" + new Date().getTime();
function Yb() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(pe(o, "display") === "none" || o === ue.ghost)) {
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
        _ && (f.top -= _.f, f.left -= _.e), u.toRect = f, u.thisAnimationDuration && Qo(g, f) && !Qo(c, f) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - f.top) / (b.left - f.left) === (c.top - f.top) / (c.left - f.left) && (s = Xb(b, g, h, o.options)), Qo(f, c) || (u.prevFromRect = c, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, b, f, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, a) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, o, i, a) {
      if (a) {
        pe(l, "transition", ""), pe(l, "transform", "");
        var r = yn(this.el), s = r && r.a, u = r && r.d, c = (o.left - i.left) / (s || 1), f = (o.top - i.top) / (u || 1);
        l.animatingX = !!c, l.animatingY = !!f, pe(l, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = Gb(l), pe(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), pe(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          pe(l, "transition", ""), pe(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
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
var fn = [], Jo = {
  initializeByDefault: !0
}, el = {
  mount: function(t) {
    for (var n in Jo)
      Jo.hasOwnProperty(n) && !(n in t) && (t[n] = Jo[n]);
    fn.forEach(function(l) {
      if (l.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), fn.push(t);
  },
  pluginEvent: function(t, n, l) {
    var o = this;
    this.eventCanceled = !1, l.cancel = function() {
      o.eventCanceled = !0;
    };
    var i = t + "Global";
    fn.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][i] && n[a.pluginName][i](St({
        sortable: n
      }, l)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](St({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(t, n, l, o) {
    fn.forEach(function(r) {
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
    return fn.forEach(function(o) {
      typeof o.eventProperties == "function" && Pt(l, o.eventProperties.call(n[o.pluginName], t));
    }), l;
  },
  modifyOption: function(t, n, l) {
    var o;
    return fn.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (o = i.optionListeners[n].call(t[i.pluginName], l));
    }), o;
  }
};
function Zb(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, i = e.cloneEl, a = e.toEl, r = e.fromEl, s = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, f = e.newDraggableIndex, g = e.originalEvent, h = e.putSortable, b = e.extraEventProperties;
  if (t = t || n && n[ut], !!t) {
    var _, P = t.options, T = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Tt && !Jn ? _ = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(l, !0, !0)), _.to = a || n, _.from = r || n, _.item = o || n, _.clone = i, _.oldIndex = s, _.newIndex = u, _.oldDraggableIndex = c, _.newDraggableIndex = f, _.originalEvent = g, _.pullMode = h ? h.lastPutMode : void 0;
    var k = St(St({}, b), el.getEventProperties(l, t));
    for (var V in k)
      _[V] = k[V];
    n && n.dispatchEvent(_), P[T] && P[T].call(t, _);
  }
}
var Qb = ["evt"], st = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, i = qb(l, Qb);
  el.pluginEvent.bind(ue)(t, n, St({
    dragEl: J,
    parentEl: ze,
    ghostEl: me,
    rootEl: Ie,
    nextEl: Jt,
    lastDownEl: wl,
    cloneEl: je,
    cloneHidden: Nt,
    dragStarted: jn,
    putSortable: Ze,
    activeSortable: ue.active,
    originalEvent: o,
    oldIndex: mn,
    oldDraggableIndex: Nn,
    newIndex: dt,
    newDraggableIndex: Lt,
    hideGhostForTarget: Ns,
    unhideGhostForTarget: Rs,
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
    cloneEl: je,
    targetEl: J,
    rootEl: Ie,
    oldIndex: mn,
    oldDraggableIndex: Nn,
    newIndex: dt,
    newDraggableIndex: Lt
  }, e));
}
var J, ze, me, Ie, Jt, wl, je, Nt, mn, dt, Nn, Lt, fl, Ze, vn = !1, Nl = !1, Rl = [], Xt, gt, ea, ta, Or, Er, jn, pn, Rn, qn = !1, pl = !1, kl, Je, na = [], ga = !1, ql = [], oo = typeof document < "u", vl = xs, xr = Jn || Tt ? "cssFloat" : "float", Jb = oo && !Bs && !xs && "draggable" in document.createElement("div"), As = function() {
  if (oo) {
    if (Tt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ls = function(t, n) {
  var l = pe(t), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), i = kn(t, 0, n), a = kn(t, 1, n), r = i && pe(i), s = a && pe(a), u = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + Re(i).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Re(a).width;
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
  return Rl.some(function(o) {
    var i = o[ut].options.emptyInsertThreshold;
    if (!(!i || qa(o))) {
      var a = Re(o), r = t >= a.left - i && t <= a.right + i, s = n >= a.top - i && n <= a.bottom + i;
      if (r && s)
        return l = o;
    }
  }), l;
}, Fs = function(t) {
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
  (!o || $l(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = n(o.pull, !0), l.checkPut = n(o.put), l.revertClone = o.revertClone, t.group = l;
}, Ns = function() {
  !As && me && pe(me, "display", "none");
}, Rs = function() {
  !As && me && pe(me, "display", "");
};
oo && !Bs && document.addEventListener("click", function(e) {
  if (Nl)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Nl = !1, !1;
}, !0);
var Zt = function(t) {
  if (J) {
    t = t.touches ? t.touches[0] : t;
    var n = ty(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[ut]._onDragOver(l);
    }
  }
}, ny = function(t) {
  J && J.parentNode[ut]._isOutsideThisEl(t.target);
};
function ue(e, t) {
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
      return Ls(e, this.options);
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
    supportPointer: ue.supportPointer !== !1 && "PointerEvent" in window && !Ln,
    emptyInsertThreshold: 5
  };
  el.initializePlugins(this, e, n);
  for (var l in n)
    !(l in t) && (t[l] = n[l]);
  Fs(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Jb, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? we(e, "pointerdown", this._onTapStart) : (we(e, "mousedown", this._onTapStart), we(e, "touchstart", this._onTapStart)), this.nativeDraggable && (we(e, "dragover", this), we(e, "dragenter", this)), Rl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Pt(this, Yb());
}
ue.prototype = /** @lends Sortable.prototype */
{
  constructor: ue,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (pn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, J) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, l = this.el, o = this.options, i = o.preventOnFilter, a = t.type, r = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (r || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = o.filter;
      if (cy(l), !J && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = bt(s, o.draggable, l, !1), !(s && s.animated) && wl !== s)) {
        if (mn = ht(s), Nn = ht(s, o.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
            lt({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: l,
              fromEl: l
            }), st("filter", n, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(f) {
          if (f = bt(u, f.trim(), l, !1), f)
            return lt({
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
          i && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !bt(u, o.handle, l, !1) || this._prepareDragStart(t, r, s);
      }
    }
  },
  _prepareDragStart: function(t, n, l) {
    var o = this, i = o.el, a = o.options, r = i.ownerDocument, s;
    if (l && !J && l.parentNode === i) {
      var u = Re(l);
      if (Ie = i, J = l, ze = J.parentNode, Jt = J.nextSibling, wl = l, fl = a.group, ue.dragged = J, Xt = {
        target: J,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Or = Xt.clientX - u.left, Er = Xt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, J.style["will-change"] = "all", s = function() {
        if (st("delayEnded", o, {
          evt: t
        }), ue.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !kr && o.nativeDraggable && (J.draggable = !0), o._triggerDragStart(t, n), lt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), ct(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        js(J, c.trim(), la);
      }), we(r, "dragover", Zt), we(r, "mousemove", Zt), we(r, "touchmove", Zt), we(r, "mouseup", o._onDrop), we(r, "touchend", o._onDrop), we(r, "touchcancel", o._onDrop), kr && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), st("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Jn || Tt))) {
        if (ue.eventCanceled) {
          this._onDrop();
          return;
        }
        we(r, "mouseup", o._disableDelayedDrag), we(r, "touchend", o._disableDelayedDrag), we(r, "touchcancel", o._disableDelayedDrag), we(r, "mousemove", o._delayedDragTouchMoveHandler), we(r, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && we(r, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    J && la(J), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._disableDelayedDrag), _e(t, "touchend", this._disableDelayedDrag), _e(t, "touchcancel", this._disableDelayedDrag), _e(t, "mousemove", this._delayedDragTouchMoveHandler), _e(t, "touchmove", this._delayedDragTouchMoveHandler), _e(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? we(document, "pointermove", this._onTouchMove) : n ? we(document, "touchmove", this._onTouchMove) : we(document, "mousemove", this._onTouchMove) : (we(J, "dragend", this), we(Ie, "dragstart", this._onDragStart));
    try {
      document.selection ? Cl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (vn = !1, Ie && J) {
      st("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && we(document, "dragover", ny);
      var l = this.options;
      !t && ct(J, l.dragClass, !1), ct(J, l.ghostClass, !0), ue.active = this, t && this._appendGhost(), lt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (gt) {
      this._lastX = gt.clientX, this._lastY = gt.clientY, Ns();
      for (var t = document.elementFromPoint(gt.clientX, gt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(gt.clientX, gt.clientY), t !== n); )
        n = t;
      if (J.parentNode[ut]._isOutsideThisEl(t), n)
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
        } while (n = Ps(n));
      Rs();
    }
  },
  _onTouchMove: function(t) {
    if (Xt) {
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, i = t.touches ? t.touches[0] : t, a = me && yn(me, !0), r = me && a && a.a, s = me && a && a.d, u = vl && Je && Vr(Je), c = (i.clientX - Xt.clientX + o.x) / (r || 1) + (u ? u[0] - na[0] : 0) / (r || 1), f = (i.clientY - Xt.clientY + o.y) / (s || 1) + (u ? u[1] - na[1] : 0) / (s || 1);
      if (!ue.active && !vn) {
        if (l && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (me) {
        a ? (a.e += c - (ea || 0), a.f += f - (ta || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        pe(me, "webkitTransform", g), pe(me, "mozTransform", g), pe(me, "msTransform", g), pe(me, "transform", g), ea = c, ta = f, gt = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!me) {
      var t = this.options.fallbackOnBody ? document.body : Ie, n = Re(J, !0, vl, !0, t), l = this.options;
      if (vl) {
        for (Je = t; pe(Je, "position") === "static" && pe(Je, "transform") === "none" && Je !== document; )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement ? (Je === document && (Je = wt()), n.top += Je.scrollTop, n.left += Je.scrollLeft) : Je = wt(), na = Vr(Je);
      }
      me = J.cloneNode(!0), ct(me, l.ghostClass, !1), ct(me, l.fallbackClass, !0), ct(me, l.dragClass, !0), pe(me, "transition", ""), pe(me, "transform", ""), pe(me, "box-sizing", "border-box"), pe(me, "margin", 0), pe(me, "top", n.top), pe(me, "left", n.left), pe(me, "width", n.width), pe(me, "height", n.height), pe(me, "opacity", "0.8"), pe(me, "position", vl ? "absolute" : "fixed"), pe(me, "zIndex", "100000"), pe(me, "pointerEvents", "none"), ue.ghost = me, t.appendChild(me), pe(me, "transform-origin", Or / parseInt(me.style.width) * 100 + "% " + Er / parseInt(me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var l = this, o = t.dataTransfer, i = l.options;
    if (st("dragStart", this, {
      evt: t
    }), ue.eventCanceled) {
      this._onDrop();
      return;
    }
    st("setupClone", this), ue.eventCanceled || (je = Ds(J), je.removeAttribute("id"), je.draggable = !1, je.style["will-change"] = "", this._hideClone(), ct(je, this.options.chosenClass, !1), ue.clone = je), l.cloneId = Cl(function() {
      st("clone", l), !ue.eventCanceled && (l.options.removeCloneOnHide || Ie.insertBefore(je, J), l._hideClone(), lt({
        sortable: l,
        name: "clone"
      }));
    }), !n && ct(J, i.dragClass, !0), n ? (Nl = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (_e(document, "mouseup", l._onDrop), _e(document, "touchend", l._onDrop), _e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(l, o, J)), we(document, "drop", l), pe(J, "transform", "translateZ(0)")), vn = !0, l._dragStartId = Cl(l._dragStarted.bind(l, n, t)), we(document, "selectstart", l), jn = !0, Ln && pe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, i, a, r = this.options, s = r.group, u = ue.active, c = fl === s, f = r.sort, g = Ze || u, h, b = this, _ = !1;
    if (ga)
      return;
    function P(A, ee) {
      st(A, b, St({
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
        onMove: function(w, q) {
          return hl(Ie, n, J, o, w, Re(w), t, q);
        },
        changed: V
      }, ee));
    }
    function T() {
      P("dragOverAnimationCapture"), b.captureAnimationState(), b !== g && g.captureAnimationState();
    }
    function k(A) {
      return P("dragOverCompleted", {
        insertion: A
      }), A && (c ? u._hideClone() : u._showClone(b), b !== g && (ct(J, Ze ? Ze.options.ghostClass : u.options.ghostClass, !1), ct(J, r.ghostClass, !0)), Ze !== b && b !== ue.active ? Ze = b : b === ue.active && Ze && (Ze = null), g === b && (b._ignoreWhileAnimating = l), b.animateAll(function() {
        P("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (l === J && !J.animated || l === n && !l.animated) && (pn = null), !r.dragoverBubble && !t.rootEl && l !== document && (J.parentNode[ut]._isOutsideThisEl(t.target), !A && Zt(t)), !r.dragoverBubble && t.stopPropagation && t.stopPropagation(), _ = !0;
    }
    function V() {
      dt = ht(J), Lt = ht(J, r.draggable), lt({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: dt,
        newDraggableIndex: Lt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = bt(l, r.draggable, n, !0), P("dragOver"), ue.eventCanceled)
      return _;
    if (J.contains(t.target) || l.animated && l.animatingX && l.animatingY || b._ignoreWhileAnimating === l)
      return k(!1);
    if (Nl = !1, u && !r.disabled && (c ? f || (a = ze !== Ie) : Ze === this || (this.lastPutMode = fl.checkPull(this, u, J, t)) && s.checkPut(this, u, J, t))) {
      if (h = this._getDirection(t, l) === "vertical", o = Re(J), P("dragOverValid"), ue.eventCanceled)
        return _;
      if (a)
        return ze = Ie, T(), this._hideClone(), P("revert"), ue.eventCanceled || (Jt ? Ie.insertBefore(J, Jt) : Ie.appendChild(J)), k(!0);
      var C = qa(n, r.draggable);
      if (!C || iy(t, h, this) && !C.animated) {
        if (C === J)
          return k(!1);
        if (C && n === t.target && (l = C), l && (i = Re(l)), hl(Ie, n, J, o, l, i, t, !!l) !== !1)
          return T(), C && C.nextSibling ? n.insertBefore(J, C.nextSibling) : n.appendChild(J), ze = n, V(), k(!0);
      } else if (C && ay(t, h, this)) {
        var D = kn(n, 0, r, !0);
        if (D === J)
          return k(!1);
        if (l = D, i = Re(l), hl(Ie, n, J, o, l, i, t, !1) !== !1)
          return T(), n.insertBefore(J, D), ze = n, V(), k(!0);
      } else if (l.parentNode === n) {
        i = Re(l);
        var $ = 0, O, N = J.parentNode !== n, Y = !ey(J.animated && J.toRect || o, l.animated && l.toRect || i, h), R = h ? "top" : "left", v = Sr(l, "top", "top") || Sr(J, "top", "top"), E = v ? v.scrollTop : void 0;
        pn !== l && (O = i[R], qn = !1, pl = !Y && r.invertSwap || N), $ = ry(t, l, i, h, Y ? 1 : r.swapThreshold, r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold, pl, pn === l);
        var S;
        if ($ !== 0) {
          var z = ht(J);
          do
            z -= $, S = ze.children[z];
          while (S && (pe(S, "display") === "none" || S === me));
        }
        if ($ === 0 || S === l)
          return k(!1);
        pn = l, Rn = $;
        var K = l.nextElementSibling, W = !1;
        W = $ === 1;
        var X = hl(Ie, n, J, o, l, i, t, W);
        if (X !== !1)
          return (X === 1 || X === -1) && (W = X === 1), ga = !0, setTimeout(oy, 30), T(), W && !K ? n.appendChild(J) : l.parentNode.insertBefore(J, W ? K : l), v && Ms(v, 0, E - v.scrollTop), ze = J.parentNode, O !== void 0 && !pl && (kl = Math.abs(O - Re(l)[R])), V(), k(!0);
      }
      if (n.contains(J))
        return k(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    _e(document, "mousemove", this._onTouchMove), _e(document, "touchmove", this._onTouchMove), _e(document, "pointermove", this._onTouchMove), _e(document, "dragover", Zt), _e(document, "mousemove", Zt), _e(document, "touchmove", Zt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._onDrop), _e(t, "touchend", this._onDrop), _e(t, "pointerup", this._onDrop), _e(t, "touchcancel", this._onDrop), _e(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, l = this.options;
    if (dt = ht(J), Lt = ht(J, l.draggable), st("drop", this, {
      evt: t
    }), ze = J && J.parentNode, dt = ht(J), Lt = ht(J, l.draggable), ue.eventCanceled) {
      this._nulling();
      return;
    }
    vn = !1, pl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ba(this.cloneId), ba(this._dragStartId), this.nativeDraggable && (_e(document, "drop", this), _e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && pe(document.body, "user-select", ""), pe(J, "transform", ""), t && (jn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), me && me.parentNode && me.parentNode.removeChild(me), (Ie === ze || Ze && Ze.lastPutMode !== "clone") && je && je.parentNode && je.parentNode.removeChild(je), J && (this.nativeDraggable && _e(J, "dragend", this), la(J), J.style["will-change"] = "", jn && !vn && ct(J, Ze ? Ze.options.ghostClass : this.options.ghostClass, !1), ct(J, this.options.chosenClass, !1), lt({
      sortable: this,
      name: "unchoose",
      toEl: ze,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ie !== ze ? (dt >= 0 && (lt({
      rootEl: ze,
      name: "add",
      toEl: ze,
      fromEl: Ie,
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
      fromEl: Ie,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), Ze && Ze.save()) : dt !== mn && dt >= 0 && (lt({
      sortable: this,
      name: "update",
      toEl: ze,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), ue.active && ((dt == null || dt === -1) && (dt = mn, Lt = Nn), lt({
      sortable: this,
      name: "end",
      toEl: ze,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    st("nulling", this), Ie = J = ze = me = Jt = je = wl = Nt = Xt = gt = jn = dt = Lt = mn = Nn = pn = Rn = Ze = fl = ue.dragged = ue.ghost = ue.clone = ue.active = null, ql.forEach(function(t) {
      t.checked = !0;
    }), ql.length = ea = ta = 0;
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
      n = l[o], bt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || uy(n));
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
      bt(r, this.options.draggable, o, !1) && (l[i] = r);
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
    var o = el.modifyOption(this, t, n);
    typeof o < "u" ? l[t] = o : l[t] = n, t === "group" && Fs(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    st("destroy", this);
    var t = this.el;
    t[ut] = null, _e(t, "mousedown", this._onTapStart), _e(t, "touchstart", this._onTapStart), _e(t, "pointerdown", this._onTapStart), this.nativeDraggable && (_e(t, "dragover", this), _e(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Rl.splice(Rl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Nt) {
      if (st("hideClone", this), ue.eventCanceled)
        return;
      pe(je, "display", "none"), this.options.removeCloneOnHide && je.parentNode && je.parentNode.removeChild(je), Nt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Nt) {
      if (st("showClone", this), ue.eventCanceled)
        return;
      J.parentNode == Ie && !this.options.group.revertClone ? Ie.insertBefore(je, J) : Jt ? Ie.insertBefore(je, Jt) : Ie.appendChild(je), this.options.group.revertClone && this.animate(J, je), pe(je, "display", ""), Nt = !1;
    }
  }
};
function ly(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function hl(e, t, n, l, o, i, a, r) {
  var s, u = e[ut], c = u.options.onMove, f;
  return window.CustomEvent && !Tt && !Jn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = l, s.related = o || t, s.relatedRect = i || Re(t), s.willInsertAfter = r, s.originalEvent = a, e.dispatchEvent(s), c && (f = c.call(u, s, a)), f;
}
function la(e) {
  e.draggable = !1;
}
function oy() {
  ga = !1;
}
function ay(e, t, n) {
  var l = Re(kn(n.el, 0, n.options, !0)), o = zs(n.el, n.options, me), i = 10;
  return t ? e.clientX < o.left - i || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - i || e.clientY < l.bottom && e.clientX < l.left;
}
function iy(e, t, n) {
  var l = Re(qa(n.el, n.options.draggable)), o = zs(n.el, n.options, me), i = 10;
  return t ? e.clientX > o.right + i || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + i || e.clientX > l.right && e.clientY > l.top;
}
function ry(e, t, n, l, o, i, a, r) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, c = l ? n.top : n.left, f = l ? n.bottom : n.right, g = !1;
  if (!a) {
    if (r && kl < u * o) {
      if (!qn && (Rn === 1 ? s > c + u * i / 2 : s < f - u * i / 2) && (qn = !0), qn)
        g = !0;
      else if (Rn === 1 ? s < c + kl : s > f - kl)
        return -Rn;
    } else if (s > c + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return sy(t);
  }
  return g = g || a, g && (s < c + u * i / 2 || s > f - u * i / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function sy(e) {
  return ht(J) < ht(e) ? 1 : -1;
}
function uy(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function cy(e) {
  ql.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var l = t[n];
    l.checked && ql.push(l);
  }
}
function Cl(e) {
  return setTimeout(e, 0);
}
function ba(e) {
  return clearTimeout(e);
}
oo && we(document, "touchmove", function(e) {
  (ue.active || vn) && e.cancelable && e.preventDefault();
});
ue.utils = {
  on: we,
  off: _e,
  css: pe,
  find: js,
  is: function(t, n) {
    return !!bt(t, n, t, !1);
  },
  extend: Ub,
  throttle: Ts,
  closest: bt,
  toggleClass: ct,
  clone: Ds,
  index: ht,
  nextTick: Cl,
  cancelNextTick: ba,
  detectDirection: Ls,
  getChild: kn,
  expando: ut
};
ue.get = function(e) {
  return e[ut];
};
ue.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (ue.utils = St(St({}, ue.utils), l.utils)), el.mount(l);
  });
};
ue.create = function(e, t) {
  return new ue(e, t);
};
ue.version = Hb;
var Fe = [], Tn, ya, _a = !1, oa, aa, Hl, Mn;
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
      this.sortable.nativeDraggable ? we(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? we(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? we(document, "touchmove", this._handleFallbackAutoScroll) : we(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var l = n.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : (_e(document, "pointermove", this._handleFallbackAutoScroll), _e(document, "touchmove", this._handleFallbackAutoScroll), _e(document, "mousemove", this._handleFallbackAutoScroll)), Br(), Sl(), Kb();
    },
    nulling: function() {
      Hl = ya = Tn = _a = Mn = oa = aa = null, Fe.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var o = this, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, r = document.elementFromPoint(i, a);
      if (Hl = n, l || this.options.forceAutoScrollFallback || Jn || Tt || Ln) {
        ia(n, this.options, r, l);
        var s = Rt(r, !0);
        _a && (!Mn || i !== oa || a !== aa) && (Mn && Br(), Mn = setInterval(function() {
          var u = Rt(document.elementFromPoint(i, a), !0);
          u !== s && (s = u, Sl()), ia(n, o.options, u, l);
        }, 10), oa = i, aa = a);
      } else {
        if (!this.options.bubbleScroll || Rt(r, !0) === wt()) {
          Sl();
          return;
        }
        ia(n, this.options, Rt(r, !1), !1);
      }
    }
  }, Pt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Sl() {
  Fe.forEach(function(e) {
    clearInterval(e.pid);
  }), Fe = [];
}
function Br() {
  clearInterval(Mn);
}
var ia = Ts(function(e, t, n, l) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, r = t.scrollSpeed, s = wt(), u = !1, c;
    ya !== n && (ya = n, Sl(), Tn = t.scroll, c = t.scrollFn, Tn === !0 && (Tn = Rt(n, !0)));
    var f = 0, g = Tn;
    do {
      var h = g, b = Re(h), _ = b.top, P = b.bottom, T = b.left, k = b.right, V = b.width, C = b.height, D = void 0, $ = void 0, O = h.scrollWidth, N = h.scrollHeight, Y = pe(h), R = h.scrollLeft, v = h.scrollTop;
      h === s ? (D = V < O && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), $ = C < N && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (D = V < O && (Y.overflowX === "auto" || Y.overflowX === "scroll"), $ = C < N && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var E = D && (Math.abs(k - o) <= a && R + V < O) - (Math.abs(T - o) <= a && !!R), S = $ && (Math.abs(P - i) <= a && v + C < N) - (Math.abs(_ - i) <= a && !!v);
      if (!Fe[f])
        for (var z = 0; z <= f; z++)
          Fe[z] || (Fe[z] = {});
      (Fe[f].vx != E || Fe[f].vy != S || Fe[f].el !== h) && (Fe[f].el = h, Fe[f].vx = E, Fe[f].vy = S, clearInterval(Fe[f].pid), (E != 0 || S != 0) && (u = !0, Fe[f].pid = setInterval(function() {
        l && this.layer === 0 && ue.active._onTouchMove(Hl);
        var K = Fe[this.layer].vy ? Fe[this.layer].vy * r : 0, W = Fe[this.layer].vx ? Fe[this.layer].vx * r : 0;
        typeof c == "function" && c.call(ue.dragged.parentNode[ut], W, K, e, Hl, Fe[this.layer].el) !== "continue" || Ms(Fe[this.layer].el, W, K);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && g !== s && (g = Rt(g, !1)));
    _a = u;
  }
}, 30), qs = function(t) {
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
function Ha() {
}
Ha.prototype = {
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
  drop: qs
};
Pt(Ha, {
  pluginName: "revertOnSpill"
});
function Wa() {
}
Wa.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable, o = l || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: qs
};
Pt(Wa, {
  pluginName: "removeOnSpill"
});
ue.mount(new dy());
ue.mount(Wa, Ha);
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
    return xe(() => {
      let a = document.querySelector(".editor-built-in-control-commen-multiple .select-group");
      new ue(a, {
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
      return y(), x("div", fy, [py, vy, p("div", hy, [p("ul", my, [(y(!0), x(Oe, null, at(e.block.props.options.defaultValue, (f, g) => (y(), x("li", {
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
        append: le(() => [ke(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", Ey, [xy, p("div", By, [d(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": r[2] || (r[2] = (f) => e.block.props.selectMax.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: le(() => [ke(" 项 ")]),
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
      style: ve(e.style)
    }, [p("div", My, [e.isRequire ? (y(), x("span", Dy, "*")) : te("", !0), p("span", null, de(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", zy, de(e.tip), 1)) : te("", !0), p("div", Ay, [p("div", {
      class: "item",
      onClick: t
    }, [p("span", null, de(e.placeholder), 1), Ly])])], 4));
  }
});
const Ny = /* @__PURE__ */ Ce(Fy, [["__scopeId", "data-v-97d898bf"]]), un = (e) => (He("data-v-6565436c"), e = e(), We(), e), Ry = {
  class: "editor-built-in-control-commen-radio"
}, qy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), Hy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), Wy = {
  class: "flex mt24 options"
}, Uy = {
  class: "select-group"
}, Ky = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), Yy = ["onClick"], Gy = {
  class: "add-btn"
}, Xy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), Zy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), Qy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), Jy = {
  class: "flex mt24 options"
}, e0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", {
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
    return xe(() => {
      let a = document.querySelector(".editor-built-in-control-commen-radio .select-group");
      new ue(a, {
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
      return y(), x("div", Ry, [qy, Hy, p("div", Wy, [p("ul", Uy, [(y(!0), x(Oe, null, at(e.block.props.options.defaultValue, (f, g) => (y(), x("li", {
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请选择内容"
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
    }
  },
  controlView: (e, t) => d(n0, {
    block: e
  })
}, Hs = (e) => (He("data-v-147689a0"), e = e(), We(), e), o0 = {
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
}, d0 = /* @__PURE__ */ Hs(() => /* @__PURE__ */ p("div", {
  class: "success"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), f0 = /* @__PURE__ */ Hs(() => /* @__PURE__ */ p("div", {
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
        style: ve(e.style)
      }, [p("div", o0, [e.isRequire ? (y(), x("span", a0, "*")) : te("", !0), p("span", null, de(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", i0, de(e.tip), 1)) : te("", !0), p("div", r0, [p("div", s0, [d(l, {
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
        append: le(() => [ke(" h ")]),
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
        style: ve(e.style)
      }, [p("div", E0, [e.isRequire ? (y(), x("span", x0, "*")) : te("", !0), p("span", null, de(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", B0, de(e.tip), 1)) : te("", !0), p("div", I0, [d(l, {
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
const ao = /* @__PURE__ */ Ce(P0, [["__scopeId", "data-v-c06a8f65"]]), cn = (e) => (He("data-v-05a6c9a4"), e = e(), We(), e), j0 = {
  class: "editor-built-in-control-person-name"
}, T0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), M0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), D0 = {
  class: "flex mt24 options"
}, z0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), A0 = {
  class: "flex mt24 options"
}, L0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), F0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), N0 = {
  class: "flex mt24 options"
}, R0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), q0 = {
  class: "pl24"
}, H0 = {
  class: "flex mt24 options"
}, W0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
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
        append: le(() => [ke(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", H0, [W0, p("div", U0, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (r) => e.block.props.max.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ke(" 字 ")]),
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
    return d(ao, {
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
        append: le(() => [ke(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", a1, [i1, p("div", r1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.max.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ke(" 字 ")]),
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
    return d(ao, {
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
        append: le(() => [ke(" h ")]),
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
    return d(ao, {
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
      style: ve(e.style)
    }, [p("div", S1, [e.isRequire ? (y(), x("span", V1, "*")) : te("", !0), p("span", null, de(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", O1, de(e.tip), 1)) : te("", !0), p("div", {
      class: "form-item",
      onClick: t
    }, [p("div", E1, [p("span", null, de(e.placeholder), 1), x1])])], 4));
  }
});
const I1 = /* @__PURE__ */ Ce(B1, [["__scopeId", "data-v-0cd61663"]]), Ua = (e) => (He("data-v-fcdbe6a9"), e = e(), We(), e), P1 = {
  class: "editor-built-in-control-person-school"
}, j1 = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), T1 = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), M1 = {
  class: "flex mt24 options"
}, D1 = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("span", {
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
        append: le(() => [ke(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", G1, [X1, p("div", Z1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.max.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [ke(" 字 ")]),
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
    return d(ao, {
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
      style: ve(e.style)
    }, [p("div", n_, [e.isRequire ? (y(), x("span", l_, "*")) : te("", !0), p("span", null, de(e.title), 1)]), p("div", o_, [a_, e.tip ? (y(), x("div", i_, de(e.tip), 1)) : te("", !0)])], 4));
  }
});
const s_ = /* @__PURE__ */ Ce(r_, [["__scopeId", "data-v-22530c73"]]), Ka = (e) => (He("data-v-be68881f"), e = e(), We(), e), u_ = {
  class: "editor-built-in-control-person-upload"
}, c_ = /* @__PURE__ */ Ka(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), d_ = /* @__PURE__ */ Ka(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), f_ = {
  class: "flex mt24 options"
}, p_ = /* @__PURE__ */ Ka(() => /* @__PURE__ */ p("span", {
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
      label: "描述",
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
}, ll = (e) => (He("data-v-17dfd82c"), e = e(), We(), e), g_ = {
  class: "editor-built-in-control-person-year"
}, b_ = {
  class: "form-item"
}, y_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "title"
}, "默认值", -1)), __ = {
  class: "opts"
}, $_ = {
  class: "form-item"
}, w_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "title"
}, "设置年级选项", -1)), k_ = {
  class: "opts"
}, C_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), S_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), V_ = {
  class: "flex mt24 options"
}, O_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), E_ = /* @__PURE__ */ F({
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
    let l = B([]);
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
      }];
    }
    o();
    function i() {
      var c, f;
      return ((f = (c = t == null ? void 0 : t.block) == null ? void 0 : c.props) != null && f.options ? t.block.props.options.defaultValue : []).map((g) => g.value);
    }
    function a() {
      var u, c, f;
      return (f = (c = (u = t.block) == null ? void 0 : u.props) == null ? void 0 : c.options) != null && f.defaultValue ? t.block.props.options.defaultValue : [];
    }
    function r(u) {
      let c = [];
      u.forEach((f) => {
        let g;
        (g = l.value.find((h) => h.value == f)) && c.push(g);
      }), t.block.props.options.defaultValue = c;
    }
    function s(u) {
      t.block.props.value.defaultValue = u;
    }
    return (u, c) => {
      const f = nn, g = Ql, h = ns, b = bl, _ = $t;
      return y(), x("div", null, [p("div", g_, [p("div", b_, [y_, p("div", __, [d(g, {
        placeholder: "请选择默认值",
        "model-value": e.block.props.value ? e.block.props.value.defaultValue : "",
        onChange: s
      }, {
        default: le(() => [(y(!0), x(Oe, null, at(a(), (P, T) => (y(), ie(f, {
          value: P.value
        }, {
          default: le(() => [ke(de(P.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["model-value"])])]), p("div", $_, [w_, p("div", k_, [d(b, {
        "default-value": i(),
        onChange: r
      }, {
        default: le(() => [(y(!0), x(Oe, null, at(Kl(l), (P, T) => (y(), ie(h, {
          value: P.value,
          class: "opt"
        }, {
          default: le(() => [ke(de(P.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["default-value"])])]), C_, S_, p("div", V_, [O_, p("div", null, [d(_, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: c[0] || (c[0] = (P) => n(P, "isRequire"))
      }, null, 8, ["default-checked"])])])])]);
    };
  }
});
const x_ = /* @__PURE__ */ Ce(E_, [["__scopeId", "data-v-17dfd82c"]]), B_ = {
  class: "title-tip mb8"
}, I_ = {
  key: 0,
  class: "red"
}, P_ = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, j_ = {
  class: "form-item"
}, T_ = /* @__PURE__ */ F({
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
      const l = nn, o = Ql;
      return y(), x("div", {
        class: "editor-built-in-person-year",
        style: ve(e.style)
      }, [p("div", B_, [e.isRequire ? (y(), x("span", I_, "*")) : te("", !0), p("span", null, de(e.title), 1)]), e.tip.trim().length > 0 ? (y(), x("div", P_, de(e.tip), 1)) : te("", !0), p("div", j_, [d(o, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder,
        "model-value": e.value
      }, {
        default: le(() => [(y(!0), x(Oe, null, at(e.options, (i) => (y(), ie(l, {
          value: i.id + ""
        }, {
          default: le(() => [ke(de(i.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const M_ = /* @__PURE__ */ Ce(T_, [["__scopeId", "data-v-3845df2c"]]), D_ = {
  group: "个人信息",
  name: "personYear",
  value: "",
  formItemField: "year",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (e) => {
    var n, l;
    let t = e.props;
    return d(M_, {
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
  controlView: (e, t) => d(x_, {
    block: e
  })
}, ra = {
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
  personYear: D_
};
function Ws(e, t, n = "push") {
  t.forEach((l) => {
    if (ra[l])
      e.registry(l, ra[l], n);
    else {
      let o = Object.keys(ra);
      console.error(`内置组件不合法，仅支持：${o.join(",")}共${o.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const Us = [
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
], io = (e) => (He("data-v-a82634a3"), e = e(), We(), e), z_ = {
  class: "visual-tab-type"
}, A_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), L_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("span", null, "组件", -1)), F_ = [A_, L_], N_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), R_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("span", null, "页面", -1)), q_ = [N_, R_], H_ = /* @__PURE__ */ F({
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
    return (l, o) => (y(), x("div", z_, [p("div", {
      class: G(["visual-tab-type-com", {
        active: e.modelValue == "1"
      }]),
      onClick: o[0] || (o[0] = (i) => n("1"))
    }, F_, 2), p("div", {
      class: G(["visual-tab-type-com visual-tab-type-template", {
        active: e.modelValue == "2"
      }]),
      onClick: o[1] || (o[1] = (i) => n("2"))
    }, q_, 2)]));
  }
});
const Ir = /* @__PURE__ */ Ce(H_, [["__scopeId", "data-v-a82634a3"]]), W_ = {
  class: "buttons"
}, U_ = ["onClick"], K_ = ["src"], Y_ = /* @__PURE__ */ F({
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
      return y(), x("div", W_, [(y(!0), x(Oe, null, at(e.buttons, (i, a) => (y(), x("div", {
        class: "button",
        key: a,
        onClick: i.handler
      }, [(y(), ie(o, {
        content: t(i),
        position: "right",
        key: a
      }, {
        default: le(() => [p("img", {
          src: i.icon,
          alt: ""
        }, null, 8, K_)]),
        _: 2
      }, 1032, ["content"]))], 8, U_))), 128))]);
    };
  }
});
const G_ = /* @__PURE__ */ Ce(Y_, [["__scopeId", "data-v-b334d714"]]), X_ = /* @__PURE__ */ F({
  components: {
    editorBlock: zl,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: $r,
    leftNav: Ir,
    shortcutButton: G_
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
      default: () => Us
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
    (R = e == null ? void 0 : e.builtInComs) != null && R.length && Ws(ot, e.builtInComs, e.pushType), e.fileUploadHandler && Object.defineProperty(window.visualSystem, "fileUploadHandler", {
      get() {
        return e.fileUploadHandler;
      }
    });
    const {
      shiftMove: l = !1,
      shortcutKeys: o = !1
    } = e.config;
    let i = Tr(() => e.modelValue, (v) => t("update:modelValue", v)), a = Te({
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
      D.cacheView = null, i.value = {
        ...i.value,
        blocks: Ne(v)
      };
    }
    function c(v) {
      i.value.blocks.forEach((E) => {
        if (v.id == E.id)
          for (let S in E)
            D.cacheView = null, E[S] = Ne(v[S]);
      });
    }
    function f(v) {
      let E = document.querySelectorAll(".editor-bloack");
      E && (E = Array.from(E)), E.forEach((S) => {
        S.classList.remove("editor-bloack-drag-active");
      }), v && v.classList.add("editor-bloack-drag-active");
    }
    const g = B(null), h = function() {
      let v = {
        component: null
      }, E = {
        dragstart(S, z) {
          var K, W, X, A;
          (K = g.value) == null || K.addEventListener("dragenter", E.dragenter), (W = g.value) == null || W.addEventListener("dragover", E.dragover), (X = g.value) == null || X.addEventListener("dragleave", E.dragleave), (A = g.value) == null || A.addEventListener("drop", E.drop), v.component = z, Al.emit();
        },
        dragenter(S) {
          Array.from(S.target.classList).includes("editor-bloack") ? f(S.target) : f(), S.dataTransfer.dropEffect = "move";
        },
        dragleave(S) {
          S.dataTransfer.dropEffect = "none";
        },
        dragend(S) {
          var z, K, W, X;
          (z = g.value) == null || z.removeEventListener("dragenter", E.dragenter), (K = g.value) == null || K.removeEventListener("dragover", E.dragover), (W = g.value) == null || W.removeEventListener("dragleave", E.dragleave), (X = g.value) == null || X.removeEventListener("drop", E.drop), v.component = null, Ll.emit(), f();
        },
        dragover(S) {
          S.preventDefault();
        },
        drop(S) {
          var A;
          let z = v.component, K = z == null ? void 0 : z.dragMode, W = Xa({
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
          if (z != null && z.addOnly && !_r(W, (A = e.modelValue) == null ? void 0 : A.blocks)) {
            Ye.warning("此组件不能添加多个哦！");
            return;
          }
          let X = S.target.dataset;
          "index" in X ? k.add(W, X.index) : k.add(W);
        },
        click(S, z) {
          var X;
          let K = z == null ? void 0 : z.dragMode, W = Xa({
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
          if (z != null && z.addOnly && !_r(W, (X = e.modelValue) == null ? void 0 : X.blocks)) {
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
          pageY: I
        } = A;
        let w = !1;
        i.value.blocks.forEach((q) => {
          if (!(q != null && q.id))
            return;
          let Q = document.querySelector("#block" + Vs(q.id).replace("$", ""));
          const {
            width: he,
            height: ye,
            left: se,
            top: Be
          } = Q.getBoundingClientRect();
          ee < he + se && ee > se && I < ye + Be && I > Be && v.block.id != q.id && (f(Q), v.sortEndBlock = q, w = !0);
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
        let ee = A.pageX - (v.startX - v.positionInfo.left), I = A.pageY - (v.startY - v.positionInfo.top);
        Math.abs(A.clientY - v.clientY) > 10 && (v.draging || (v.draging = !0), v.ele.style.width = v.positionInfo.width + "px", v.ele.style.height = v.positionInfo.height + "px", v.ele.style.left = ee + "px", v.ele.style.top = I + "px", v.ele.style.position = "fixed", v.ele.style.zIndex = "10", v.ele.style.transition = "none", E({
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
    let P = {
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
        var I;
        v.draging || (v.draging = !0, Al.emit());
        let {
          clientX: W,
          clientY: X
        } = K, {
          startX: A,
          startY: ee
        } = v;
        (I = b.value.focusBlock) == null || I.forEach((w, q) => {
          w.left = v.startPositon[q].left + (W - A), w.top = v.startPositon[q].top + (X - ee);
        });
      }
      function z(K) {
        document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", z), Ll.emit();
      }
      return {
        mousedown: E
      };
    }(), k = qm({
      currentBlockInfo: b,
      updateBlocks: u,
      dataModel: i,
      shortcutKeys: o
    }), V = Nm(k, b, e.debug, e);
    function C(v) {
      k.delete(v);
    }
    const D = {
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
      v || D.cancleEffect();
    });
    let $ = B("1");
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
      onMousedown: (v) => P.container.onMousedown(v)
    }, [i.value.blocks.map((v, E) => {
      var S;
      return d("div", null, [d(zl, {
        index: E,
        dragMove: e.dragMove,
        block: v,
        container: (S = e.modelValue) == null ? void 0 : S.container,
        onMousedown: (z) => P.block.onMousedown(z, v),
        onDelBlock: () => C(v),
        onUpBlock: k.up,
        onDownBlock: k.down,
        key: v.id
      }, null)]);
    })])])]), d("div", {
      class: "visual-editor-topMenu"
    }, [d(ce("shortcut-button"), {
      buttons: V
    }, null)]), d("div", {
      class: "visual-editor-right-seting"
    }, [cg(D.controlRender.bind(D), b, e.modelValue)])])]);
  }
});
const Z_ = /* @__PURE__ */ F({
  components: {
    editorBlock: zl
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
    Ws(ot, Us);
    let n = Tr(() => e.modelValue, (o) => t("update:modelValue", o)), l = m(() => ({
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
      return d("div", null, [d(zl, {
        index: i,
        block: o,
        priview: !0,
        container: (a = e.modelValue) == null ? void 0 : a.container,
        key: o.id
      }, null)]);
    })])])])]);
  }
}), Ks = ot.registry, Ys = X_, Q_ = Z_, J_ = function(e, t = "push") {
  Ks(e.name, e, t), Es.emit(e);
}, e$ = function(e) {
  Ys.batchRegistry(e);
}, t$ = function() {
  return ot == null ? void 0 : ot.componentLists;
}, o$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: Ks,
  batchRegistry: e$,
  logConfig: t$,
  priviewVisualEditor: Q_,
  registry: J_,
  visualEditor: Ys
}, Symbol.toStringTag, { value: "Module" }));
export {
  o$ as all,
  e$ as batchRegistry,
  o$ as default,
  t$ as logConfig,
  Q_ as priviewVisualEditor,
  J_ as registry,
  Ys as visualEditor
};
