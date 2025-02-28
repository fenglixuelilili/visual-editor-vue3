var Xs = Object.defineProperty;
var Zs = (e, t, n) => t in e ? Xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ya = (e, t, n) => (Zs(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as B, watch as be, computed as m, reactive as Te, inject as Ge, getCurrentInstance as Kn, cloneVNode as Wl, defineComponent as F, onMounted as xe, onUnmounted as Ul, openBlock as b, createElementBlock as E, normalizeClass as G, renderSlot as re, normalizeStyle as ve, createElementVNode as p, resolveComponent as de, createBlock as ie, createCommentVNode as te, toRef as Vl, toRefs as $e, createVNode as d, mergeProps as Oe, createTextVNode as Ce, nextTick as Le, provide as Wt, Fragment as ke, createSlots as Pr, withCtx as le, withModifiers as on, onUpdated as jt, onBeforeUnmount as Ut, readonly as Qs, onDeactivated as Js, Teleport as eu, Transition as Ol, withDirectives as $a, vShow as wa, resolveDynamicComponent as tn, toDisplayString as se, renderList as Xe, TransitionGroup as jr, watchEffect as tu, isVNode as ka, render as Ga, Comment as nu, unref as Kl, pushScopeId as He, popScopeId as We } from "vue";
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
function lu() {
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
let at = lu();
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
function Je(e) {
  return e === void 0;
}
function tt(e) {
  return typeof e == "function";
}
function ou(e) {
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
}, au = {
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
}, iu = B("zh-CN"), ru = Te({
  "zh-CN": au
}), Ca = () => {
  const e = Ge(rn, void 0), t = m(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : ru[iu.value];
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
var su = Object.defineProperty, uu = Object.defineProperties, cu = Object.getOwnPropertyDescriptors, Za = Object.getOwnPropertySymbols, du = Object.prototype.hasOwnProperty, fu = Object.prototype.propertyIsEnumerable, Qa = (e, t, n) => t in e ? su(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, pu = (e, t) => {
  for (var n in t || (t = {}))
    du.call(t, n) && Qa(e, n, t[n]);
  if (Za)
    for (var n of Za(t))
      fu.call(t, n) && Qa(e, n, t[n]);
  return e;
}, vu = (e, t) => uu(e, cu(t));
const hu = "A", mu = "arco", sa = "$arco", Ue = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : hu;
}, Ke = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[sa] = vu(pu({}, (n = e.config.globalProperties[sa]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ne = (e) => {
  var t, n, l;
  const o = Kn(), i = Ge(rn, void 0), a = (l = (n = i == null ? void 0 : i.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[sa]) == null ? void 0 : t.classPrefix) != null ? l : mu;
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
}(), gu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(El) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), bu = 2;
function yu(e, t) {
  var n = !1, l = !1, o = 0;
  function i() {
    n && (n = !1, e()), l && r();
  }
  function a() {
    gu(i);
  }
  function r() {
    var s = Date.now();
    if (n) {
      if (s - o < bu)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return r;
}
var _u = 20, $u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], wu = typeof MutationObserver < "u", ku = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = yu(this.refresh.bind(this), _u);
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
      !ua || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), wu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ua || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = $u.some(function(i) {
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
function Cu(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var i = o[l], a = e["padding-" + i];
    n[i] = xl(a);
  }
  return n;
}
function Su(e) {
  var t = e.getBBox();
  return Gl(0, 0, t.width, t.height);
}
function Vu(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Ar;
  var l = _n(e).getComputedStyle(e), o = Cu(l), i = o.left + o.right, a = o.top + o.bottom, r = xl(l.width), s = xl(l.height);
  if (l.boxSizing === "border-box" && (Math.round(r + i) !== t && (r -= Ja(l, "left", "right") + i), Math.round(s + a) !== n && (s -= Ja(l, "top", "bottom") + a)), !Eu(e)) {
    var u = Math.round(r + i) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (r -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Gl(o.left, o.top, r, s);
}
var Ou = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof _n(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof _n(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Eu(e) {
  return e === _n(e).document.documentElement;
}
function xu(e) {
  return ua ? Ou(e) ? Su(e) : Vu(e) : Ar;
}
function Bu(e) {
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
var Iu = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Gl(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = xu(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Pu = (
  /** @class */
  function() {
    function e(t, n) {
      var l = Bu(n);
      zr(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), ju = (
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
        n.has(t) || (n.set(t, new Iu(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Pu(l.target, l.broadcastRect());
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
      var n = ku.getInstance(), l = new ju(t, n, this);
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
const Xl = (e) => Boolean(e && e.shapeFlag & 1), Yn = (e, t) => Boolean(e && e.shapeFlag & 6), Tu = (e, t) => Boolean(e && e.shapeFlag & 8), Va = (e, t) => Boolean(e && e.shapeFlag & 16), Nr = (e, t) => Boolean(e && e.shapeFlag & 32), gn = (e) => {
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
}, Mu = (e) => {
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
        const i = tt(t) ? t(l) : t;
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
    Xl(i) || Yn(i) || t && Tu(i, i.children) ? o.push(i) : Va(i, i.children) ? o.push(...ml(i.children, t)) : Nr(i, i.children) ? o.push(...ml((l = (n = i.children).default) == null ? void 0 : l.call(n), t)) : Ae(i) && o.push(...ml(i, t));
  return o;
}, ni = (e) => {
  if (e)
    return tt(e) ? e : () => e;
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
const Kr = typeof window > "u" ? global : window, Du = Kr.requestAnimationFrame, li = Kr.cancelAnimationFrame;
function oi(e) {
  let t = 0;
  const n = (...l) => {
    t && li(t), t = Du(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    li(t), t = 0;
  }, n;
}
const Ea = () => {
}, zu = () => {
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
})(), Au = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, Lu = (e, t) => {
  var n;
  return xa ? Ea() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, ai = (e, t) => {
  if (kt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Lu(n, t);
  }
  return e;
}, Fu = (e, t) => {
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
const Nu = F({
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
function Ru(e, t, n, l, o, i) {
  return b(), E("span", {
    class: G([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [re(e.$slots, "default")], 2);
}
var ft = /* @__PURE__ */ fe(Nu, [["render", Ru]]);
const qu = F({
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
}), Hu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Wu = /* @__PURE__ */ p("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Uu = [Wu];
function Ku(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Uu, 14, Hu);
}
var co = /* @__PURE__ */ fe(qu, [["render", Ku]]);
const sn = Object.assign(co, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + co.name, co);
  }
}), Yu = F({
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
}), Gu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Xu = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Zu = [Xu];
function Qu(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Zu, 14, Gu);
}
var fo = /* @__PURE__ */ fe(Yu, [["render", Qu]]);
const Ju = Object.assign(fo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + fo.name, fo);
  }
}), ec = F({
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
}), tc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], nc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), lc = [nc];
function oc(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, lc, 14, tc);
}
var po = /* @__PURE__ */ fe(ec, [["render", oc]]);
const Yr = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), ac = F({
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
}), ic = ["stroke-width", "stroke-linecap", "stroke-linejoin"], rc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), sc = [rc];
function uc(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, sc, 14, ic);
}
var vo = /* @__PURE__ */ fe(ac, [["render", uc]]);
const Gr = Object.assign(vo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + vo.name, vo);
  }
}), cc = F({
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
}), dc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], fc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), pc = [fc];
function vc(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, pc, 14, dc);
}
var ho = /* @__PURE__ */ fe(cc, [["render", vc]]);
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
  for (var y = n.visualViewport ? n.visualViewport.width : innerWidth, _ = n.visualViewport ? n.visualViewport.height : innerHeight, P = window.scrollX || pageXOffset, T = window.scrollY || pageYOffset, k = e.getBoundingClientRect(), V = k.height, C = k.width, D = k.top, $ = k.right, O = k.bottom, N = k.left, Y = o === "start" || o === "nearest" ? D : o === "end" ? O : D + V / 2, R = i === "center" ? N + C / 2 : i === "end" ? $ : N, v = [], x = 0; x < g.length; x++) {
    var S = g[x], z = S.getBoundingClientRect(), K = z.height, W = z.width, X = z.top, A = z.right, ee = z.bottom, I = z.left;
    if (l === "if-needed" && D >= 0 && N >= 0 && O <= _ && $ <= y && D >= X && O <= ee && N >= I && $ <= A)
      return v;
    var w = getComputedStyle(S), q = parseInt(w.borderLeftWidth, 10), Q = parseInt(w.borderTopWidth, 10), he = parseInt(w.borderRightWidth, 10), ye = parseInt(w.borderBottomWidth, 10), ue = 0, Be = 0, Ve = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - q - he : 0, Pe = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - Q - ye : 0, pt = "offsetWidth" in S ? S.offsetWidth === 0 ? 0 : W / S.offsetWidth : 0, nt = "offsetHeight" in S ? S.offsetHeight === 0 ? 0 : K / S.offsetHeight : 0;
    if (f === S)
      ue = o === "start" ? Y : o === "end" ? Y - _ : o === "nearest" ? il(T, T + _, _, Q, ye, T + Y, T + Y + V, V) : Y - _ / 2, Be = i === "start" ? R : i === "center" ? R - y / 2 : i === "end" ? R - y : il(P, P + y, y, q, he, P + R, P + R + C, C), ue = Math.max(0, ue + T), Be = Math.max(0, Be + P);
    else {
      ue = o === "start" ? Y - X - Q : o === "end" ? Y - ee + ye + Pe : o === "nearest" ? il(X, ee, K, Q, ye + Pe, Y, Y + V, V) : Y - (X + K / 2) + Pe / 2, Be = i === "start" ? R - I - q : i === "center" ? R - (I + W / 2) + Ve / 2 : i === "end" ? R - A + he + Ve : il(I, A, W, q, he + Ve, R, R + C, C);
      var rt = S.scrollLeft, L = S.scrollTop;
      Y += L - (ue = Math.max(0, Math.min(L + ue / nt, S.scrollHeight - K / nt + Pe))), R += rt - (Be = Math.max(0, Math.min(rt + Be / pt, S.scrollWidth - W / pt + Ve)));
    }
    v.push({ el: S, top: ue, left: Be });
  }
  return v;
};
const hc = ["info", "success", "warning", "error"], qt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], mc = F({
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
}), gc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], bc = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), yc = [bc];
function _c(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, yc, 14, gc);
}
var go = /* @__PURE__ */ fe(mc, [["render", _c]]);
const Kt = Object.assign(go, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + go.name, go);
  }
}), $c = F({
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
function wc(e, t, n, l, o, i) {
  const a = de("icon-loading"), r = de("icon-check-circle-fill"), s = de("icon-exclamation-circle-fill"), u = de("icon-close-circle-fill");
  return b(), E("span", {
    class: G(e.cls)
  }, [e.type === "validating" ? (b(), ie(a, {
    key: 0
  })) : e.type === "success" ? (b(), ie(r, {
    key: 1
  })) : e.type === "warning" ? (b(), ie(s, {
    key: 2
  })) : e.type === "error" ? (b(), ie(u, {
    key: 3
  })) : te("v-if", !0)], 2);
}
var Ba = /* @__PURE__ */ fe($c, [["render", wc]]);
const Ia = {
  key: "Enter",
  code: "Enter"
}, kc = {
  key: "Backspace",
  code: "Backspace"
};
var Cc = Object.defineProperty, ui = Object.getOwnPropertySymbols, Sc = Object.prototype.hasOwnProperty, Vc = Object.prototype.propertyIsEnumerable, ci = (e, t, n) => t in e ? Cc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Oc = (e, t) => {
  for (var n in t || (t = {}))
    Sc.call(t, n) && ci(e, n, t[n]);
  if (ui)
    for (var n of ui(t))
      Vc.call(t, n) && ci(e, n, t[n]);
  return e;
};
const Gn = (e, t) => {
  const n = Oc({}, e);
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
var Ec = Object.defineProperty, di = Object.getOwnPropertySymbols, xc = Object.prototype.hasOwnProperty, Bc = Object.prototype.propertyIsEnumerable, fi = (e, t, n) => t in e ? Ec(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, pi = (e, t) => {
  for (var n in t || (t = {}))
    xc.call(t, n) && fi(e, n, t[n]);
  if (di)
    for (var n of di(t))
      Bc.call(t, n) && fi(e, n, t[n]);
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
      eventHandlers: y
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
      (Je(L) || Sn(L)) && (k.value = "");
    });
    let C = V.value;
    const D = B(!1), $ = m(() => e.allowClear && !e.readonly && !f.value && Boolean(V.value)), O = B(!1), N = B(""), Y = (L) => {
      var M;
      return tt(e.wordLength) ? e.wordLength(L) : (M = L.length) != null ? M : 0;
    }, R = m(() => Y(V.value)), v = m(() => g.value || Boolean(Ee(e.maxLength) && e.maxLength.errorOnly && R.value > S.value)), x = m(() => Ee(e.maxLength) && Boolean(e.maxLength.errorOnly)), S = m(() => Ee(e.maxLength) ? e.maxLength.length : e.maxLength), z = m(() => {
      const L = Y("a");
      return Math.floor(S.value / L);
    }), K = (L) => {
      var M, Z;
      S.value && !x.value && Y(L) > S.value && (L = (Z = (M = e.wordSlice) == null ? void 0 : M.call(e, L, S.value)) != null ? Z : L.slice(0, z.value)), k.value = L, t("update:modelValue", L);
    }, W = (L) => {
      u.value && L.target !== u.value && (L.preventDefault(), u.value.focus());
    }, X = (L, M) => {
      var Z, oe;
      L !== C && (C = L, t("change", L, M), (oe = (Z = y.value) == null ? void 0 : Z.onChange) == null || oe.call(Z, M));
    }, A = (L) => {
      var M, Z;
      D.value = !0, C = V.value, t("focus", L), (Z = (M = y.value) == null ? void 0 : M.onFocus) == null || Z.call(M, L);
    }, ee = (L) => {
      var M, Z;
      D.value = !1, X(V.value, L), t("blur", L), (Z = (M = y.value) == null ? void 0 : M.onBlur) == null || Z.call(M, L);
    }, I = (L) => {
      var M, Z, oe;
      const {
        value: Me,
        selectionStart: De,
        selectionEnd: Ot
      } = L.target;
      if (L.type === "compositionend") {
        if (O.value = !1, N.value = "", S.value && !x.value && R.value >= S.value && Y(Me) > S.value && De === Ot) {
          w();
          return;
        }
        K(Me), t("input", Me, L), (Z = (M = y.value) == null ? void 0 : M.onInput) == null || Z.call(M, L), w();
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
        if (S.value && !x.value && R.value >= S.value && Y(oe) > S.value && L.inputType === "insertText") {
          w();
          return;
        }
        K(oe), t("input", oe, L), (Z = (M = y.value) == null ? void 0 : M.onInput) == null || Z.call(M, L), w();
      }
    }, Q = (L) => {
      K(""), X("", L), t("clear", L);
    }, he = (L) => {
      const M = L.key || L.code;
      !O.value && M === Ia.key && (X(V.value, L), t("pressEnter", L));
    }, ye = m(() => [`${s}-outer`, `${s}-outer-size-${_.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), ue = m(() => [`${s}-wrapper`, {
      [`${s}-error`]: v.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: D.value
    }]), Be = m(() => [s, `${s}-size-${_.value}`]), Ve = m(() => Gn(l, qt)), Pe = m(() => Xn(l, qt)), pt = m(() => {
      const L = pi(pi({}, Pe.value), e.inputAttrs);
      return v.value && (L["aria-invalid"] = !0), L;
    }), nt = (L) => {
      var M;
      return d("span", Oe({
        class: ue.value,
        onMousedown: W
      }, L ? void 0 : Ve.value), [n.prefix && d("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), d("input", Oe({
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
      }, [R.value, Ce("/"), S.value]), (M = n.suffix) == null ? void 0 : M.call(n), Boolean(h.value) && d(Ba, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? d("span", Oe({
        class: ye.value
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
const Ic = F({
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
}), Pc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], jc = /* @__PURE__ */ p("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Tc = [jc];
function Mc(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Tc, 14, Pc);
}
var bo = /* @__PURE__ */ fe(Ic, [["render", Mc]]);
const da = Object.assign(bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bo.name, bo);
  }
}), Qr = Symbol("ArcoButtonGroup"), Dc = F({
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
      var h, y, _, P, T, k;
      return [o, `${o}-${(y = (h = e.type) != null ? h : i == null ? void 0 : i.type) != null ? y : "secondary"}`, `${o}-shape-${(P = (_ = e.shape) != null ? _ : i == null ? void 0 : i.shape) != null ? P : "square"}`, `${o}-size-${c.value}`, `${o}-status-${(k = (T = e.status) != null ? T : i == null ? void 0 : i.status) != null ? k : "normal"}`, {
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
}), zc = ["href"], Ac = ["type", "disabled"];
function Lc(e, t, n, l, o, i) {
  const a = de("icon-loading");
  return e.href ? (b(), E("a", {
    key: 0,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [e.loading || e.$slots.icon ? (b(), E("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (b(), ie(a, {
    key: 0,
    spin: "true"
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), re(e.$slots, "default")], 10, zc)) : (b(), E("button", {
    key: 1,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
  }, [e.loading || e.$slots.icon ? (b(), E("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (b(), ie(a, {
    key: 0,
    spin: !0
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : te("v-if", !0), re(e.$slots, "default")], 10, Ac));
}
var yo = /* @__PURE__ */ fe(Dc, [["render", Lc]]);
const Fc = F({
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
function Nc(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var _o = /* @__PURE__ */ fe(Fc, [["render", Nc]]);
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
      return d(ke, null, [e.loading ? d(Kt, null, null) : d(ft, {
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
      }, d(wn, Oe({
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
const Rc = F({
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
}), qc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hc = /* @__PURE__ */ p("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Wc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Uc = [Hc, Wc];
function Kc(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Uc, 14, qc);
}
var wo = /* @__PURE__ */ fe(Rc, [["render", Kc]]);
const Yc = Object.assign(wo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + wo.name, wo);
  }
}), Gc = F({
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
}), Xc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Zc = /* @__PURE__ */ p("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Qc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Jc = [Zc, Qc];
function ed(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Jc, 14, Xc);
}
var ko = /* @__PURE__ */ fe(Gc, [["render", ed]]);
const td = Object.assign(ko, {
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
function nd(e, t) {
  const {
    value: n
  } = $e(t), [l, o] = Hn(Je(n.value) ? e : n.value);
  return be(n, (a) => {
    Je(a) && o(void 0);
  }), [m(() => Je(n.value) ? l.value : n.value), o, l];
}
const ld = F({
  name: "InputPassword",
  components: {
    IconEye: Yc,
    IconEyeInvisible: td,
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
    }, [a, r] = nd(l.value, Te({
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
function od(e, t, n, l, o, i) {
  const a = de("icon-eye"), r = de("icon-eye-invisible"), s = de("a-icon-hover"), u = de("a-input");
  return b(), ie(u, {
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
    fn: le(() => [e.invisibleButton ? (b(), ie(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = on(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = on(() => {
      }, ["prevent"]))
    }, {
      default: le(() => [e.mergedVisible ? (b(), ie(r, {
        key: 1
      })) : (b(), ie(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : te("v-if", !0), re(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: le(() => [re(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var Co = /* @__PURE__ */ fe(ld, [["render", od]]);
const ad = F({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ne("input-group")
    };
  }
});
function id(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var zn = /* @__PURE__ */ fe(ad, [["render", id]]);
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
var rd = Object.defineProperty, vi = Object.getOwnPropertySymbols, sd = Object.prototype.hasOwnProperty, ud = Object.prototype.propertyIsEnumerable, hi = (e, t, n) => t in e ? rd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    sd.call(t, n) && hi(e, n, t[n]);
  if (vi)
    for (var n of vi(t))
      ud.call(t, n) && hi(e, n, t[n]);
  return e;
};
const cd = () => {
  const {
    height: e,
    width: t
  } = zu();
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
}, dd = (e) => {
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
}, fd = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: i,
  translate: a
}) => {
  const r = dd(e), s = cd(), u = {
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
}, pd = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, vd = (e, t, n, l, {
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
    const f = fd(e, u, {
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
}, hd = (e, t, n, {
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
}, md = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, gi = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    md(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
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
function gd(e, t) {
  const n = B(e[t]);
  return jt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const bi = Symbol("ArcoTrigger"), bd = 1e3, yd = 5e3, _d = 1;
class $d {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || yd : Array.from(this.popupStack.popup).pop() || bd) + _d, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const So = new $d();
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
    zIndex: Qs(l),
    open: o,
    close: i,
    isLastDialog: a
  };
}
const wd = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new Sa((i) => {
        const a = i[0];
        tt(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var kd = F({
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
const Cd = ({
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
var Sd = Object.defineProperty, Vd = Object.defineProperties, Od = Object.getOwnPropertyDescriptors, yi = Object.getOwnPropertySymbols, Ed = Object.prototype.hasOwnProperty, xd = Object.prototype.propertyIsEnumerable, _i = (e, t, n) => t in e ? Sd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bd = (e, t) => {
  for (var n in t || (t = {}))
    Ed.call(t, n) && _i(e, n, t[n]);
  if (yi)
    for (var n of yi(t))
      xd.call(t, n) && _i(e, n, t[n]);
  return e;
}, Id = (e, t) => Vd(e, Od(t));
const Pd = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
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
    } = $e(e), i = ne("trigger"), a = m(() => Gn(l, Pd)), r = Ge(rn, void 0), s = m(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = Ge(bi, void 0), {
      children: f,
      firstElement: g
    } = Jr(), h = B(), y = B(e.defaultPopupVisible), _ = B(e.position), P = B({}), T = B({}), k = B({}), V = B(), C = B({
      top: 0,
      left: 0
    });
    let D = null, $ = null;
    const O = m(() => {
      var j;
      return (j = e.popupVisible) != null ? j : y.value;
    }), {
      teleportContainer: N,
      containerRef: Y
    } = Cd({
      popupContainer: o,
      visible: O,
      documentContainer: !0
    }), {
      zIndex: R
    } = es("popup", {
      visible: O
    });
    let v = 0, x = !1, S = !1;
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
        style: lt,
        position: dn
      } = vd(e.position, j, U, vt, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (T.value = {
        transformOrigin: pd(dn)
      }), e.autoFitPopupMinWidth ? lt.minWidth = `${U.width}px` : e.autoFitPopupWidth && (lt.width = `${U.width}px`), _.value !== dn && (_.value = dn), P.value = lt, e.showArrow && Le(() => {
        k.value = hd(dn, U, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, X = (j, U) => {
      if (j === O.value && v === 0)
        return;
      const ae = () => {
        y.value = j, t("update:popupVisible", j), t("popupVisibleChange", j), j && Le(() => {
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
    const Ve = () => {
      $n(document.documentElement, "mousedown", nt), x = !1;
    }, Pe = gd(n, "content"), pt = m(() => {
      var j;
      return e.hideEmpty && Mu((j = Pe.value) == null ? void 0 : j.call(Pe));
    }), nt = (j) => {
      var U, ae, vt;
      if (!((U = g.value) != null && U.contains(j.target) || (ae = h.value) != null && ae.contains(j.target))) {
        for (const lt of u)
          if ((vt = lt.value) != null && vt.contains(j.target))
            return;
        Ve(), X(!1);
      }
    }, rt = (j, U) => {
      const [ae, vt] = j, {
        scrollTop: lt,
        scrollLeft: dn
      } = U;
      return Math.abs(lt - ae) >= e.scrollToCloseDistance || Math.abs(dn - vt) >= e.scrollToCloseDistance;
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
    let Ze;
    be(O, (j) => {
      if (e.clickOutsideToClose && (!j && x ? Ve() : j && !x && (Et(document.documentElement, "mousedown", nt), x = !0)), (e.scrollToClose || r != null && r.scrollToClose) && (Et(window, "scroll", Z), S = !0), e.updateAtScroll || r != null && r.updateAtScroll) {
        if (j) {
          Ze = gi(g.value);
          for (const U of Ze)
            U.addEventListener("scroll", L);
        } else if (Ze) {
          for (const U of Ze)
            U.removeEventListener("scroll", L);
          Ze = void 0;
        }
      }
      j && (xn.value = !0);
    }), be(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      O.value && W();
    });
    const {
      createResizeObserver: ro,
      destroyResizeObserver: so
    } = wd({
      elementRef: Y,
      onResize: oe
    });
    xe(() => {
      if (ro(), O.value && (W(), e.clickOutsideToClose && !x && (Et(document.documentElement, "mousedown", nt), x = !0), e.updateAtScroll || r != null && r.updateAtScroll)) {
        Ze = gi(g.value);
        for (const j of Ze)
          j.addEventListener("scroll", L);
      }
    }), jt(() => {
      O.value && W();
    }), Js(() => {
      X(!1);
    }), Ut(() => {
      if (c == null || c.removeChildRef(h), so(), x && Ve(), S && M(), Ze) {
        for (const j of Ze)
          j.removeEventListener("scroll", L);
        Ze = void 0;
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
      }), d(ke, null, [e.autoFixPosition ? d(Il, {
        onResize: Me
      }, {
        default: () => [f.value]
      }) : f.value, d(kd, null, {
        default: () => [d(eu, {
          to: N.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || O.value || xn.value) && !pt.value && d(Il, {
            onResize: oe
          }, {
            default: () => [d("div", Oe({
              ref: h,
              class: [`${i}-popup`, `${i}-position-${_.value}`],
              style: Id(Bd({}, P.value), {
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
}), jd = F({
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
}), Td = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Md = /* @__PURE__ */ p("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Dd = [Md];
function zd(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Dd, 14, Td);
}
var Oo = /* @__PURE__ */ fe(jd, [["render", zd]]);
const Ad = Object.assign(Oo, {
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
      }) : d("div", Oe({
        class: l
      }, n), [d("div", {
        class: `${l}-image`
      }, [(r = (a = t.image) == null ? void 0 : a.call(t)) != null ? r : e.imgSrc ? d("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : d(Ad, null, null)]), d("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const Ld = Object.assign(Eo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Eo.name, Eo);
  }
}), Fd = 5;
var Nd = F({
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
      }, [Array(Fd).fill(1).map((l, o) => d("div", {
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
      return t.element ? t.element() : e.dot ? d(Nd, {
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
      return d(ke, null, [!e.hideIcon && d("div", {
        class: `${n}-icon`,
        style: c
      }, [i()]), f && d("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => d("div", {
      class: o.value
    }, [t.default ? d(ke, null, [t.default(), e.loading && d("div", {
      class: `${n}-mask`
    }, [d("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Rd = Object.assign(xo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + xo.name, xo);
  }
}), qd = F({
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
      k.preventDefault(), i.value && (u.value = k[a.value.client] - i.value.getBoundingClientRect()[a.value.direction], s.value = !0, Et(window, "mousemove", y), Et(window, "mouseup", _), Et(window, "contextmenu", _));
    }, g = (k) => {
      var V, C, D, $;
      if (k.preventDefault(), i.value) {
        const O = h(k[a.value.client] > i.value.getBoundingClientRect()[a.value.direction] ? r.value + ((C = (V = e.data) == null ? void 0 : V.thumbSize) != null ? C : 0) : r.value - (($ = (D = e.data) == null ? void 0 : D.thumbSize) != null ? $ : 0));
        O !== r.value && (r.value = O, t("scroll", O));
      }
    }, h = (k) => k < 0 ? 0 : e.data && k > e.data.max ? e.data.max : k, y = (k) => {
      if (o.value && i.value) {
        const V = h(k[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        V !== r.value && (r.value = V, t("scroll", V));
      }
    }, _ = () => {
      s.value = !1, $n(window, "mousemove", y), $n(window, "mouseup", _);
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
function Hd(e, t, n, l, o, i) {
  return b(), ie(Ol, null, {
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
var Wd = /* @__PURE__ */ fe(qd, [["render", Hd]]);
const $i = 20, sl = 15, Ud = F({
  name: "Scrollbar",
  components: {
    ResizeObserver: Il,
    Thumb: Wd
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
          offsetWidth: x,
          offsetHeight: S,
          scrollWidth: z,
          scrollHeight: K,
          scrollTop: W,
          scrollLeft: X
        } = l.value;
        s.value = z > R, u.value = K > v, g.value = c.value && f.value;
        const A = e.type === "embed" && g.value ? x - sl : x, ee = e.type === "embed" && g.value ? S - sl : S, I = Math.round(A / Math.min(z / R, A / $i)), w = A - I, q = (z - R) / w, Q = Math.round(ee / Math.min(K / v, ee / $i)), he = ee - Q, ye = (K - v) / he;
        if (o.value = {
          ratio: q,
          thumbSize: I,
          max: w
        }, i.value = {
          ratio: ye,
          thumbSize: Q,
          max: he
        }, W > 0) {
          const ue = Math.round(W / ((D = (C = i.value) == null ? void 0 : C.ratio) != null ? D : 1));
          ($ = r.value) == null || $.setOffset(ue);
        }
        if (X > 0) {
          const ue = Math.round(X / ((N = (O = i.value) == null ? void 0 : O.ratio) != null ? N : 1));
          (Y = a.value) == null || Y.setOffset(ue);
        }
      }
    };
    xe(() => {
      h();
    });
    const y = () => {
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
      handleResize: y,
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
function Kd(e, t, n, l, o, i) {
  const a = de("ResizeObserver"), r = de("thumb");
  return b(), E("div", {
    class: G(e.cls),
    style: ve(e.style)
  }, [d(a, {
    onResize: e.handleResize
  }, {
    default: le(() => [p("div", Oe({
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
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (b(), ie(r, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (b(), ie(r, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : te("v-if", !0)], 6);
}
var Bo = /* @__PURE__ */ fe(Ud, [["render", Kd]]);
const Yd = Object.assign(Bo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Bo.name, Bo);
  }
}), Gd = (e) => {
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
var Xd = Object.defineProperty, wi = Object.getOwnPropertySymbols, Zd = Object.prototype.hasOwnProperty, Qd = Object.prototype.propertyIsEnumerable, ki = (e, t, n) => t in e ? Xd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jd = (e, t) => {
  for (var n in t || (t = {}))
    Zd.call(t, n) && ki(e, n, t[n]);
  if (wi)
    for (var n of wi(t))
      Qd.call(t, n) && ki(e, n, t[n]);
  return e;
};
const ef = (e) => {
  const t = m(() => Boolean(e.value)), n = m(() => {
    if (e.value)
      return Jd({
        type: "embed"
      }, Yl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, tf = F({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Yd,
    Empty: Ld,
    Spin: Rd
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
    } = Gd("containerRef"), {
      displayScrollbar: g,
      scrollbarProps: h
    } = ef(a), y = (P) => {
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
      handleScroll: y,
      displayScrollbar: g,
      scrollbarProps: h
    };
  }
});
function nf(e, t, n, l, o, i) {
  const a = de("spin");
  return b(), E("div", {
    class: G(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (b(), E("div", {
    key: 0,
    class: G(`${e.prefixCls}-header`)
  }, [re(e.$slots, "header")], 2)) : te("v-if", !0), e.loading ? (b(), ie(a, {
    key: 1,
    class: G(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (b(), E("div", {
    key: 2,
    class: G(`${e.prefixCls}-empty`)
  }, [re(e.$slots, "empty", {}, () => [(b(), ie(tn(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : te("v-if", !0), e.virtualList && !e.loading && !e.empty ? re(e.$slots, "virtual-list", {
    key: 3
  }) : te("v-if", !0), e.virtualList ? te("v-if", !0) : $a((b(), ie(tn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Oe({
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
  }, 16, ["class", "onScroll"])), [[wa, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (b(), E("div", {
    key: 5,
    class: G(`${e.prefixCls}-footer`)
  }, [re(e.$slots, "footer")], 2)) : te("v-if", !0)], 2);
}
var lf = /* @__PURE__ */ fe(tf, [["render", nf]]), Ci = F({
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
    }), y = m(() => (r == null ? void 0 : r.disabled) || (u == null ? void 0 : u.value) || !h.value && (r == null ? void 0 : r.isMaxed)), _ = (C) => {
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
      [`${i}-disabled`]: y.value
    }]), k = (C) => {
      var D, $;
      ($ = (D = c.value) == null ? void 0 : D.onFocus) == null || $.call(D, C);
    }, V = (C) => {
      var D, $;
      ($ = (D = c.value) == null ? void 0 : D.onBlur) == null || $.call(D, C);
    };
    return be(o, (C) => {
      (Je(C) || Sn(C)) && (f.value = !1);
    }), be(g, (C) => {
      var D;
      let $;
      Ae(C) ? $ = C.includes((D = e.value) != null ? D : !0) : $ = C, f.value !== $ && (f.value = $), a.value && a.value.checked !== $ && (a.value.checked = $);
    }), () => {
      var C, D, $, O;
      return d("label", {
        "aria-disabled": y.value,
        class: T.value
      }, [d("input", {
        ref: a,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${i}-target`,
        disabled: y.value,
        onClick: _,
        onChange: P,
        onFocus: k,
        onBlur: V
      }, null), (O = ($ = (D = n.checkbox) != null ? D : (C = r == null ? void 0 : r.slots) == null ? void 0 : C.checkbox) == null ? void 0 : $({
        checked: h.value,
        disabled: y.value
      })) != null ? O : d(ft, {
        class: `${i}-icon-hover`,
        disabled: y.value || h.value
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
      var y;
      return ((y = e.options) != null ? y : []).map((_) => kt(_) || ge(_) ? {
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
      handleChange: (y, _) => {
        var P, T;
        r.value = y, t("update:modelValue", y), t("change", y, _), (T = (P = a.value) == null ? void 0 : P.onChange) == null || T.call(P, _);
      }
    }));
    const g = m(() => [o, `${o}-direction-${e.direction}`]);
    be(() => e.modelValue, (y) => {
      Ae(y) ? r.value = [...y] : r.value = [];
    });
    const h = () => c.value.map((y) => {
      const _ = s.value.includes(y.value);
      return d(gl, {
        key: y.value,
        value: y.value,
        disabled: y.disabled || !_ && u.value,
        indeterminate: y.indeterminate,
        modelValue: _
      }, {
        default: () => [n.label ? n.label({
          data: y
        }) : tt(y.label) ? y.label() : y.label]
      });
    });
    return () => {
      var y;
      return d("span", {
        class: g.value
      }, [c.value.length > 0 ? h() : (y = n.default) == null ? void 0 : y.call(n)]);
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
var of = Object.defineProperty, af = Object.defineProperties, rf = Object.getOwnPropertyDescriptors, Si = Object.getOwnPropertySymbols, sf = Object.prototype.hasOwnProperty, uf = Object.prototype.propertyIsEnumerable, Vi = (e, t, n) => t in e ? of(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ja = (e, t) => {
  for (var n in t || (t = {}))
    sf.call(t, n) && Vi(e, n, t[n]);
  if (Si)
    for (var n of Si(t))
      uf.call(t, n) && Vi(e, n, t[n]);
  return e;
}, os = (e, t) => af(e, rf(t));
const cf = (e) => Ee(e) && "isGroup" in e, as = (e) => Ee(e) && "isGroup" in e, df = (e, t = "value") => String(Ee(e) ? e[t] : e), Wn = (e, t = "value") => Ee(e) ? `__arco__option__object__${e[t]}` : e || ge(e) || kt(e) || Yl(e) ? `__arco__option__${typeof e}-${e}` : "", ff = (e) => e.has("__arco__option__string-"), pf = (e, {
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
      label: (i = e[n.label]) != null ? i : df(r, t),
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
    if (cf(r)) {
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
      const s = pf(r, {
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
}) => tt(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, vf = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Ta(e[n], t[n]))
      return !1;
  return !0;
}, hf = (e, t) => {
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
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? vf(e, t) : n === "[object Array]" ? hf(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, mf = F({
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
    }), y = () => {
      var $;
      if (!e.label && r.value) {
        const O = ($ = r.value.textContent) != null ? $ : "";
        u.value !== O && (u.value = O);
      }
    };
    xe(() => y()), jt(() => y());
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
function gf(e, t, n, l, o, i) {
  const a = de("checkbox");
  return $a((b(), ie(tn(e.component), {
    ref: "itemRef",
    class: G([e.cls, {
      [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix)
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: le(() => [e.$slots.icon ? (b(), E("span", {
      key: 0,
      class: G(`${e.prefixCls}-icon`)
    }, [re(e.$slots, "icon")], 2)) : te("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (b(), ie(a, {
      key: 1,
      class: G(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: le(() => [re(e.$slots, "default", {}, () => [Ce(se(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (b(), E("span", {
      key: 2,
      class: G(`${e.prefixCls}-content`)
    }, [re(e.$slots, "default", {}, () => [Ce(se(e.label), 1)])], 2)), e.$slots.suffix ? (b(), E("span", {
      key: 3,
      class: G(`${e.prefixCls}-suffix`)
    }, [re(e.$slots, "suffix")], 2)) : te("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[wa, e.isValid]]);
}
var nn = /* @__PURE__ */ fe(mf, [["render", gf]]), bf = Object.defineProperty, yf = Object.defineProperties, _f = Object.getOwnPropertyDescriptors, Ei = Object.getOwnPropertySymbols, $f = Object.prototype.hasOwnProperty, wf = Object.prototype.propertyIsEnumerable, xi = (e, t, n) => t in e ? bf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Io = (e, t) => {
  for (var n in t || (t = {}))
    $f.call(t, n) && xi(e, n, t[n]);
  if (Ei)
    for (var n of Ei(t))
      wf.call(t, n) && xi(e, n, t[n]);
  return e;
}, kf = (e, t) => yf(e, _f(t));
const Cf = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, Sf = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: i,
  fieldNames: a
}) => {
  const r = m(() => Io(Io({}, Cf), a == null ? void 0 : a.value)), s = Te(/* @__PURE__ */ new Map()), u = m(() => Array.from(s.values()).sort((V, C) => ge(V.index) && ge(C.index) ? V.index - C.index : 0)), c = m(() => {
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
      g.set(V.key, kf(Io({}, V), {
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
  }), y = m(() => Array.from(g.values()).filter((V) => V.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Zl(V, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), _ = m(() => y.value.filter((V) => !V.disabled).map((V) => V.key));
  return {
    validOptions: h,
    optionInfoMap: g,
    validOptionInfos: y,
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
}, Vf = ({
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
  virtualListRef: y,
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
  } = Sf({
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
  }, x = (K) => {
    const W = $.value.length;
    if (W === 0)
      return;
    if (!R.value)
      return K === "down" ? $.value[0] : $.value[W - 1];
    const X = $.value.indexOf(R.value), A = (W + X + (K === "up" ? -1 : 1)) % W;
    return $.value[A];
  }, S = (K) => {
    var W, X;
    y != null && y.value && y.value.scrollTo({
      key: K
    });
    const A = C.get(K), ee = (W = g == null ? void 0 : g.value) == null ? void 0 : W.wrapperRef, I = (X = h == null ? void 0 : h.value[K]) != null ? X : A == null ? void 0 : A.ref;
    if (!ee || !I || ee.scrollHeight === ee.offsetHeight)
      return;
    const w = Fu(I, ee), q = ee.scrollTop;
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
      const W = x("down");
      W && (R.value = W, S(W)), K.preventDefault();
    }
  }], [hn.ARROW_UP, (K) => {
    if (c.value) {
      const W = x("up");
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
    getNextActiveKey: x,
    scrollIntoView: S,
    handleKeyDown: z
  };
}, Of = ({
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
  }, g = B(n.value), h = m(() => l.value !== 30 ? l.value : i.value || l.value), y = (O, N) => {
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
    setItemSize: y,
    hasItemSize: P,
    setStart: f,
    getScrollOffset: T
  };
};
var Ef = F({
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
}), xf = Object.defineProperty, Ii = Object.getOwnPropertySymbols, Bf = Object.prototype.hasOwnProperty, If = Object.prototype.propertyIsEnumerable, Pi = (e, t, n) => t in e ? xf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Pf = (e, t) => {
  for (var n in t || (t = {}))
    Bf.call(t, n) && Pi(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      If.call(t, n) && Pi(e, n, t[n]);
  return e;
};
const jf = F({
  name: "VirtualList",
  components: {
    VirtualListItem: Ef
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
    } = $e(e), s = ne("virtual-list"), u = m(() => Ee(e.component) ? Pf({
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
      var x;
      return (x = R[l.value]) != null ? x : v;
    })), {
      frontPadding: y,
      behindPadding: _,
      start: P,
      end: T,
      getStartByScroll: k,
      setItemSize: V,
      hasItemSize: C,
      setStart: D,
      getScrollOffset: $
    } = Of({
      dataKeys: h,
      contentRef: f,
      fixedSize: o,
      estimatedSize: i,
      buffer: a
    }), O = m(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(P.value, T.value)), N = (R) => {
      const {
        scrollTop: v,
        scrollHeight: x,
        offsetHeight: S
      } = R.target, z = k(v);
      z !== P.value && (D(z), Le(() => {
        Y(v);
      })), t("scroll", R), Math.floor(x - (v + S)) <= 0 && t("reachBottom", R);
    }, Y = (R) => {
      var v, x;
      if (c.value)
        if (ge(R))
          c.value.scrollTop = R;
        else {
          const S = (x = R.index) != null ? x : h.value.indexOf((v = R.key) != null ? v : "");
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
      frontPadding: y,
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
function Tf(e, t, n, l, o, i) {
  const a = de("VirtualListItem");
  return b(), ie(tn(e.mergedComponent.container), {
    ref: "containerRef",
    class: G(e.prefixCls),
    style: ve(e.style),
    onScroll: e.onScroll
  }, {
    default: le(() => [(b(), ie(tn(e.mergedComponent.list), Oe(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: le(() => [(b(), ie(tn(e.mergedComponent.content), Oe({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: le(() => [(b(!0), E(ke, null, Xe(e.currentList, (r, s) => {
          var u;
          return b(), ie(a, {
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
var Mf = /* @__PURE__ */ fe(jf, [["render", Tf]]);
const Df = F({
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
}), zf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Af = /* @__PURE__ */ p("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Lf = [Af];
function Ff(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Lf, 14, zf);
}
var Po = /* @__PURE__ */ fe(Df, [["render", Ff]]);
const Ma = Object.assign(Po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Po.name, Po);
  }
}), Nf = ({
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
}, Rf = F({
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
}), qf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hf = /* @__PURE__ */ p("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Wf = [Hf];
function Uf(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, Wf, 14, qf);
}
var jo = /* @__PURE__ */ fe(Rf, [["render", Uf]]);
const Kf = Object.assign(jo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + jo.name, jo);
  }
}), Yf = ({
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
  }), y = ($, O) => {
    s.value = $, n(o, $), n(l, $, O);
  }, _ = ($) => {
    const {
      value: O
    } = $.target;
    c.value || (y(O, $), Le(() => {
      r.value && h.value !== r.value.value && (r.value.value = h.value);
    }));
  }, P = ($) => {
    l === "input" && h.value !== g && (g = h.value, n("change", h.value, $));
  }, T = ($) => {
    var O;
    const {
      value: N
    } = $.target;
    $.type === "compositionend" ? (c.value = !1, f.value = "", y(N, $), Le(() => {
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
var Gf = F({
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
      eventHandlers: y
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
    } = Yf({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: y
    }), N = m(() => {
      var X;
      return (X = e.focused) != null ? X : T.value;
    }), Y = m(() => e.enabledInput && T.value || !e.modelValue), R = () => {
      var X, A;
      return e.modelValue ? (A = (X = e.formatLabel) == null ? void 0 : X.call(e, e.modelValue)) != null ? A : e.modelValue.label : "";
    }, v = m(() => e.enabledInput && e.modelValue ? R() : e.placeholder), x = () => {
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
      render: () => d("span", Oe(z.value, {
        class: S.value,
        title: R(),
        onMousedown: O
      }), [l.prefix && d("span", {
        class: `${c}-prefix`
      }, [l.prefix()]), d("input", Oe(K.value, {
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
      }, [x()]), l.suffix && d("span", {
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
}), Xf = Object.defineProperty, ji = Object.getOwnPropertySymbols, Zf = Object.prototype.hasOwnProperty, Qf = Object.prototype.propertyIsEnumerable, Ti = (e, t, n) => t in e ? Xf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jf = (e, t) => {
  for (var n in t || (t = {}))
    Zf.call(t, n) && Ti(e, n, t[n]);
  if (ji)
    for (var n of ji(t))
      Qf.call(t, n) && Ti(e, n, t[n]);
  return e;
};
const ep = (e, t) => {
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
      n.push(Jf({
        raw: o
      }, o));
    }
  return n;
}, Mi = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], tp = F({
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
    }, y = m(() => [l, `${l}-size-${f.value}`, {
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
      cls: y,
      style: _,
      computedVisible: s,
      computedChecked: u,
      handleClick: h,
      handleClose: g
    };
  }
});
function np(e, t, n, l, o, i) {
  const a = de("icon-close"), r = de("icon-hover"), s = de("icon-loading");
  return e.computedVisible ? (b(), E("span", {
    key: 0,
    class: G(e.cls),
    style: ve(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (b(), E("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon")], 2)) : te("v-if", !0), e.nowrap ? (b(), E("span", {
    key: 1,
    class: G(`${e.prefixCls}-text`)
  }, [re(e.$slots, "default")], 2)) : re(e.$slots, "default", {
    key: 2
  }), e.closable ? (b(), ie(r, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: on(e.handleClose, ["stop"])
  }, {
    default: le(() => [re(e.$slots, "close-icon", {}, () => [d(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : te("v-if", !0), e.loading ? (b(), E("span", {
    key: 4,
    class: G(`${e.prefixCls}-loading-icon`)
  }, [d(s)], 2)) : te("v-if", !0)], 6)) : te("v-if", !0);
}
var To = /* @__PURE__ */ fe(tp, [["render", np]]);
const lp = Object.assign(To, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + To.name, To);
  }
});
var op = Object.defineProperty, Di = Object.getOwnPropertySymbols, ap = Object.prototype.hasOwnProperty, ip = Object.prototype.propertyIsEnumerable, zi = (e, t, n) => t in e ? op(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ul = (e, t) => {
  for (var n in t || (t = {}))
    ap.call(t, n) && zi(e, n, t[n]);
  if (Di)
    for (var n of Di(t))
      ip.call(t, n) && zi(e, n, t[n]);
  return e;
};
const rp = {
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
      mergedError: y,
      feedback: _,
      eventHandlers: P
    } = mt({
      size: o,
      disabled: i,
      error: a,
      uninject: r == null ? void 0 : r.value
    }), {
      mergedSize: T
    } = yt(g), k = m(() => ul(ul({}, rp), e.fieldNames)), V = B(!1), C = B(e.defaultValue), D = B(e.defaultInputValue), $ = B(!1), O = B(""), N = m(() => Ee(e.retainInputValue) ? ul({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), Y = Te({
      width: "12px"
    }), R = m(() => e.focused || V.value), v = (M, Z) => {
      D.value = M, t("update:inputValue", M), t("inputValueChange", M, Z);
    }, x = (M) => {
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
      (Je(M) || Sn(M)) && (C.value = []);
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
    }, X = m(() => ep(S.value, k.value)), A = m(() => {
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
      const De = (Me = S.value) == null ? void 0 : Me.filter((Ot, Ze) => Ze !== Z);
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
    }, ue = () => {
      for (let M = X.value.length - 1; M >= 0; M--)
        if (X.value[M].closable)
          return M;
      return -1;
    }, Be = (M) => {
      if (h.value || e.readonly)
        return;
      const Z = M.key || M.code;
      if (!$.value && z.value && Z === Ia.key && Q(M), !$.value && A.value.length > 0 && !z.value && Z === kc.key) {
        const oe = ue();
        oe >= 0 && I(X.value[oe].value, oe, M);
      }
    }, Ve = (M) => {
      M > 12 ? Y.width = `${M}px` : Y.width = "12px";
    };
    xe(() => {
      f.value && Ve(f.value.offsetWidth);
    });
    const Pe = () => {
      f.value && Ve(f.value.offsetWidth);
    };
    be(z, (M) => {
      c.value && !$.value && M !== c.value.value && (c.value.value = M);
    });
    const pt = m(() => [u, `${u}-size-${T.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: y.value,
      [`${u}-focus`]: R.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: A.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || q.value || _.value,
      [`${u}-has-placeholder`]: !S.value.length
    }]), nt = m(() => Gn(l, qt)), rt = m(() => Xn(l, qt));
    return {
      inputRef: c,
      render: () => {
        var M;
        return d("span", Oe({
          class: pt.value,
          onMousedown: K
        }, nt.value), [d(Bl, {
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
          default: () => [A.value.map((Z, oe) => d(lp, Oe({
            key: `tag-${Z.value}`,
            class: `${u}-tag`,
            closable: !h.value && !e.readonly && Z.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, Z.tagProps, {
            onClose: (Me) => I(Z.value, oe, Me)
          }), {
            default: () => {
              var Me, De, Ot, Ze;
              return [(Ze = (Ot = (Me = n.tag) == null ? void 0 : Me.call(n, {
                data: Z.raw
              })) != null ? Ot : (De = e.formatTag) == null ? void 0 : De.call(e, Z.raw)) != null ? Ze : Z.label];
            }
          })), d("input", Oe(rt.value, {
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
            onCompositionstart: x,
            onCompositionupdate: x,
            onCompositionend: x
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
const sp = Object.assign(Mo, {
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
    } = $e(e), y = B(), _ = m(() => {
      var v;
      return (v = y.value) == null ? void 0 : v.inputRef;
    }), P = m(() => e.modelValue.length === 0), T = m(() => e.allowSearch || e.allowCreate), k = m(() => e.allowClear && !e.disabled && !P.value), V = (v) => {
      var x, S;
      t("focus", v), (S = (x = s.value) == null ? void 0 : x.onFocus) == null || S.call(x, v);
    }, C = (v) => {
      var x, S;
      t("blur", v), (S = (x = s.value) == null ? void 0 : x.onBlur) == null || S.call(x, v);
    }, D = (v) => {
      t("remove", v);
    }, $ = (v) => {
      t("clear", v);
    }, O = () => {
      var v, x, S, z;
      return e.loading ? (x = (v = n["loading-icon"]) == null ? void 0 : v.call(n)) != null ? x : d(Kt, null, null) : e.allowSearch && e.opened ? (z = (S = n["search-icon"]) == null ? void 0 : S.call(n)) != null ? z : d(da, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : d(Ma, {
        class: `${a}-arrow-icon`
      }, null);
    }, N = () => d(ke, null, [k.value && d(ft, {
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
      render: () => e.multiple ? d(sp, {
        ref: y,
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
      }) : d(Gf, {
        ref: y,
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
const up = F({
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
function cp(e, t, n, l, o, i) {
  return b(), E(ke, null, [p("li", {
    class: G(`${e.prefixCls}-title`)
  }, [re(e.$slots, "label", {}, () => [Ce(se(e.label), 1)])], 2), re(e.$slots, "default")], 64);
}
var yl = /* @__PURE__ */ fe(up, [["render", cp]]);
const Li = typeof window > "u" ? global : window;
function dp(e, t) {
  let n = 0;
  return (...l) => {
    n && Li.clearTimeout(n), n = Li.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var fp = Object.defineProperty, pp = Object.defineProperties, vp = Object.getOwnPropertyDescriptors, Fi = Object.getOwnPropertySymbols, hp = Object.prototype.hasOwnProperty, mp = Object.prototype.propertyIsEnumerable, Ni = (e, t, n) => t in e ? fp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bn = (e, t) => {
  for (var n in t || (t = {}))
    hp.call(t, n) && Ni(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      mp.call(t, n) && Ni(e, n, t[n]);
  return e;
}, gp = (e, t) => pp(e, vp(t));
function bp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ka(e);
}
const yp = {
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
      default: (e) => Je(e.multiple) ? "" : []
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
      modelValue: y,
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
      if (tt(e.formatLabel))
        return (H) => {
          const j = De.get(H.value);
          return e.formatLabel(j);
        };
    });
    const Y = B(), R = B({}), v = B(), {
      computedPopupVisible: x,
      handlePopupVisibleChange: S
    } = Nf({
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
    be(y, (H) => {
      (Je(H) || Sn(H)) && (z.value = c.value ? [] : H);
    });
    const W = m(() => K.value.map((H) => H.key)), X = m(() => Bn(Bn({}, yp), _ == null ? void 0 : _.value)), A = B(), ee = (H) => {
      const j = {};
      return H.forEach((U) => {
        j[U] = De.get(U);
      }), j;
    }, I = (H) => {
      A.value = ee(H);
    }, w = (H) => tt(e.fallbackOption) ? e.fallbackOption(H) : {
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
      if (e.allowCreate && ue.value) {
        const U = Wn(ue.value);
        if (!j.includes(U)) {
          const ae = De.get(U);
          (!ae || ae.origin === "extraOptions") && H.push({
            value: ue.value,
            key: U
          });
        }
      }
      return H;
    }, Q = B([]), he = m(() => Q.value.map((H) => {
      var j;
      let U = w(H.value);
      const ae = (j = A.value) == null ? void 0 : j[H.key];
      return !Je(ae) && !ou(ae) && (U = Bn(Bn({}, U), ae)), U;
    }));
    Le(() => {
      tu(() => {
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
    const ye = B(""), ue = m(() => {
      var H;
      return (H = e.inputValue) != null ? H : ye.value;
    });
    be(x, (H) => {
      !H && !N.value && ue.value && Pe("");
    });
    const Be = (H) => {
      var j, U;
      return e.multiple ? H.map((ae) => {
        var vt, lt;
        return (lt = (vt = De.get(ae)) == null ? void 0 : vt.value) != null ? lt : "";
      }) : (U = (j = De.get(H[0])) == null ? void 0 : j.value) != null ? U : ff(De) ? void 0 : "";
    }, Ve = (H) => {
      var j, U;
      const ae = Be(H);
      z.value = ae, n("update:modelValue", ae), n("change", ae), (U = (j = $.value) == null ? void 0 : j.onChange) == null || U.call(j), I(H);
    }, Pe = (H) => {
      ye.value = H, n("update:inputValue", H), n("inputValueChange", H);
    }, pt = (H, j) => {
      if (e.multiple) {
        if (W.value.includes(H)) {
          const U = W.value.filter((ae) => ae !== H);
          Ve(U);
        } else if (Ze.value.includes(H))
          if (e.limit > 0 && W.value.length >= e.limit) {
            const U = De.get(H);
            n("exceedLimit", U == null ? void 0 : U.value, j);
          } else {
            const U = W.value.concat(H);
            Ve(U);
          }
        N.value || Pe("");
      } else {
        if (H !== W.value[0] && Ve([H]), N.value) {
          const U = De.get(H);
          U && Pe(U.label);
        }
        S(!1);
      }
    }, nt = dp((H) => {
      n("search", H);
    }, e.searchDelay), rt = (H) => {
      H !== ue.value && (x.value || S(!0), Pe(H), e.allowSearch && nt(H));
    }, L = (H) => {
      const j = De.get(H), U = W.value.filter((ae) => ae !== H);
      Ve(U), n("remove", j == null ? void 0 : j.value);
    }, M = (H) => {
      H == null || H.stopPropagation();
      const j = W.value.filter((U) => {
        var ae;
        return (ae = De.get(U)) == null ? void 0 : ae.disabled;
      });
      Ve(j), Pe(""), n("clear", H);
    }, Z = (H) => {
      n("dropdownScroll", H);
    }, oe = (H) => {
      n("dropdownReachBottom", H);
    }, {
      validOptions: Me,
      optionInfoMap: De,
      validOptionInfos: Ot,
      enabledOptionKeys: Ze,
      handleKeyDown: ro
    } = Vf({
      multiple: c,
      options: r,
      extraOptions: he,
      inputValue: ue,
      filterOption: s,
      showExtraOptions: h,
      component: O,
      valueKey: u,
      fieldNames: _,
      loading: P,
      popupVisible: x,
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
        ae && j.push(gp(Bn({}, ae), {
          value: U.key,
          label: (H = ae == null ? void 0 : ae.label) != null ? H : String(Ee(U.value) ? U.value[u == null ? void 0 : u.value] : U.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return j;
    }), xn = (H) => {
      if (tt(t.option)) {
        const j = t.option;
        return () => j({
          data: H.raw
        });
      }
      return tt(H.render) ? H.render : () => H.label;
    }, Dt = (H) => {
      if (as(H)) {
        let j;
        return d(yl, {
          key: H.key,
          label: H.label
        }, bp(j = H.options.map((U) => Dt(U))) ? j : {
          default: () => [j]
        });
      }
      return Zl(H, {
        inputValue: ue.value,
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
    }, ol = () => d(lf, {
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
      "virtual-list": () => d(Mf, Oe(e.virtualListProps, {
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
      if ((t.label || tt(e.formatLabel)) && H) {
        const lt = De.get(H.value);
        if (lt != null && lt.raw)
          return (ae = (j = t.label) == null ? void 0 : j.call(t, {
            data: lt.raw
          })) != null ? ae : (U = e.formatLabel) == null ? void 0 : U.call(e, lt.raw);
      }
      return (vt = H == null ? void 0 : H.label) != null ? vt : "";
    };
    return () => d(Pl, Oe({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: C.value,
      popupVisible: x.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: S
    }, e.triggerProps), {
      default: () => {
        var H, j;
        return [(j = (H = t.trigger) == null ? void 0 : H.call(t)) != null ? j : d(Ai, Oe({
          class: k,
          modelValue: so.value,
          inputValue: ue.value,
          multiple: e.multiple,
          disabled: C.value,
          error: D.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: Boolean(e.allowSearch),
          opened: x.value,
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
}), _p = F({
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
}), $p = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wp = /* @__PURE__ */ p("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), kp = [wp];
function Cp(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, kp, 14, $p);
}
var zo = /* @__PURE__ */ fe(_p, [["render", Cp]]);
const Sp = Object.assign(zo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zo.name, zo);
  }
}), Vp = F({
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
}), Op = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ep = /* @__PURE__ */ p("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), xp = [Ep];
function Bp(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, xp, 14, Op);
}
var Ao = /* @__PURE__ */ fe(Vp, [["render", Bp]]);
const rs = Object.assign(Ao, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ao.name, Ao);
  }
}), Ip = (e) => {
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
}, Pp = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var jp = Object.defineProperty, Tp = Object.defineProperties, Mp = Object.getOwnPropertyDescriptors, Ri = Object.getOwnPropertySymbols, Dp = Object.prototype.hasOwnProperty, zp = Object.prototype.propertyIsEnumerable, qi = (e, t, n) => t in e ? jp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ap = (e, t) => {
  for (var n in t || (t = {}))
    Dp.call(t, n) && qi(e, n, t[n]);
  if (Ri)
    for (var n of Ri(t))
      zp.call(t, n) && qi(e, n, t[n]);
  return e;
}, Lp = (e, t) => Tp(e, Mp(t));
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
}, Fp = "[-\\+]?\\d+%?", Np = "[-\\+]?\\d*\\.\\d+%?", en = `(?:${Np})|(?:${Fp})`, Rp = `[\\s|\\(]+(${en})[,|\\s]+(${en})[,|\\s]+(${en})\\s*\\)?`, qp = `[\\s|\\(]+(${en})[,|\\s]+(${en})[,|\\s]+(${en})[,|\\s]+(${en})\\s*\\)?`, At = {
  rgb: new RegExp(`rgb${Rp}`),
  rgba: new RegExp(`rgba${qp}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, qe = (e) => parseInt(e, 16), Hi = (e) => qe(e) / 255, Hp = (e) => {
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
}, Wp = (e) => {
  var t;
  const n = Hp(e);
  if (n) {
    const l = Jl(n.r, n.g, n.b);
    return Lp(Ap({}, l), {
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
}, Wi = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), Up = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), cs = ({
  value: e,
  onChange: t
}) => {
  const n = B(!1), l = B(), o = B(), i = (c, f) => c < 0 ? 0 : c > f ? 1 : c / f, a = (c) => {
    if (!l.value)
      return;
    const {
      clientX: f,
      clientY: g
    } = c, h = l.value.getBoundingClientRect(), y = [i(f - h.x, h.width), i(g - h.y, h.height)];
    (y[0] !== e[0] || y[1] !== e[1]) && (t == null || t(y));
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
}), Kp = F({
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
}), Yp = eo(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Ht(e, n) + Ht(t, n)) / n;
}), Gp = eo(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (Ht(e, n) - Ht(t, n)) / n;
}), ds = eo(function(e, t) {
  var n = Un(e), l = Un(t);
  return pa(n), pa(l), Ht(n / l, Da(Math.pow(10, Ct(t) - Ct(e))));
});
function Xp(e, t) {
  var n = Math.pow(10, t), l = ds(Math.round(Math.abs(Ht(e, n))), n);
  return e < 0 && l !== 0 && (l = Ht(l, -1)), l;
}
var fs = !0;
function Zp(e) {
  e === void 0 && (e = !0), fs = e;
}
var an = {
  strip: Da,
  plus: Yp,
  minus: Gp,
  times: Ht,
  divide: ds,
  round: Xp,
  digitLength: Ct,
  float2Fixed: Un,
  enableBoundaryChecking: Zp
};
const Qp = F({
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
}), Jp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ev = /* @__PURE__ */ p("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), tv = [ev];
function nv(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, tv, 14, Jp);
}
var Lo = /* @__PURE__ */ fe(Qp, [["render", nv]]);
const ps = Object.assign(Lo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Lo.name, Lo);
  }
}), lv = F({
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
}), ov = ["stroke-width", "stroke-linecap", "stroke-linejoin"], av = /* @__PURE__ */ p("path", {
  d: "M5 24h38"
}, null, -1), iv = [av];
function rv(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, iv, 14, ov);
}
var Fo = /* @__PURE__ */ fe(lv, [["render", rv]]);
const sv = Object.assign(Fo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Fo.name, Fo);
  }
});
var uv = Object.defineProperty, Ki = Object.getOwnPropertySymbols, cv = Object.prototype.hasOwnProperty, dv = Object.prototype.propertyIsEnumerable, Yi = (e, t, n) => t in e ? uv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fv = (e, t) => {
  for (var n in t || (t = {}))
    cv.call(t, n) && Yi(e, n, t[n]);
  if (Ki)
    for (var n of Ki(t))
      dv.call(t, n) && Yi(e, n, t[n]);
  return e;
};
const pv = 800, vv = 150;
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
    }, y = B(h((l = e.modelValue) != null ? l : e.defaultValue)), _ = m(() => {
      var w, q;
      if (!y.value)
        return;
      const Q = Number((q = (w = e.parser) == null ? void 0 : w.call(e, y.value)) != null ? q : y.value);
      return Number.isNaN(Q) ? void 0 : Q;
    }), P = B(ge(_.value) && _.value <= e.min), T = B(ge(_.value) && _.value >= e.max);
    let k = 0;
    const V = () => {
      k && (window.clearTimeout(k), k = 0);
    }, C = (w) => {
      if (!Je(w))
        return ge(e.min) && w < e.min && (w = e.min), ge(e.max) && w > e.max && (w = e.max), ge(g.value) ? an.round(w, g.value) : w;
    }, D = (w) => {
      let q = !1, Q = !1;
      ge(w) && (w <= e.min && (q = !0), w >= e.max && (Q = !0)), T.value !== Q && (T.value = Q), P.value !== q && (P.value = q);
    }, $ = () => {
      const w = C(_.value), q = h(w);
      (w !== _.value || y.value !== q) && (y.value = q), t("update:modelValue", w);
    };
    be(() => [e.max, e.min], () => {
      $(), D(_.value);
    });
    const O = (w, q) => {
      if (u.value || w === "plus" && T.value || w === "minus" && P.value)
        return;
      let Q;
      ge(_.value) ? Q = C(an[w](_.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, y.value = h(Q), D(Q), t("update:modelValue", Q), t("change", Q, q);
    }, N = (w, q, Q = !1) => {
      var he;
      w.preventDefault(), (he = r.value) == null || he.focus(), O(q, w), Q && (k = window.setTimeout(() => w.target.dispatchEvent(w), k ? vv : pv));
    }, Y = (w, q) => {
      var Q, he, ye, ue;
      w = w.trim().replace(/。/g, "."), w = (he = (Q = e.parser) == null ? void 0 : Q.call(e, w)) != null ? he : w, (ge(Number(w)) || /^(\.|-)$/.test(w)) && (y.value = (ue = (ye = e.formatter) == null ? void 0 : ye.call(e, w)) != null ? ue : w, D(_.value), t("input", _.value, y.value, q), e.modelEvent === "input" && (t("update:modelValue", _.value), t("change", _.value, q)));
    }, R = (w) => {
      t("focus", w);
    }, v = (w, q) => {
      q instanceof MouseEvent && !w || ($(), t("change", _.value, q));
    }, x = (w) => {
      t("blur", w);
    }, S = (w) => {
      var q, Q;
      y.value = "", t("update:modelValue", void 0), t("change", void 0, w), (Q = (q = c.value) == null ? void 0 : q.onChange) == null || Q.call(q, w), t("clear", w);
    }, z = is(/* @__PURE__ */ new Map([[hn.ARROW_UP, (w) => {
      w.preventDefault(), !e.readOnly && O("plus", w);
    }], [hn.ARROW_DOWN, (w) => {
      w.preventDefault(), !e.readOnly && O("minus", w);
    }]])), K = (w) => {
      t("keydown", w), w.defaultPrevented || z(w);
    };
    be(() => e.modelValue, (w) => {
      w !== _.value && (y.value = h(w), D(w));
    });
    const W = () => {
      var w, q, Q;
      return e.readOnly ? null : d(ke, null, [n.suffix && d("div", {
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
      icon: () => d(sv, null, null)
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
          modelValue: y.value,
          placeholder: e.placeholder,
          disabled: u.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: fv({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": y.value
          }, e.inputAttrs),
          onInput: Y,
          onFocus: R,
          onBlur: x,
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
}), hv = Object.defineProperty, Gi = Object.getOwnPropertySymbols, mv = Object.prototype.hasOwnProperty, gv = Object.prototype.propertyIsEnumerable, Xi = (e, t, n) => t in e ? hv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zi = (e, t) => {
  for (var n in t || (t = {}))
    mv.call(t, n) && Xi(e, n, t[n]);
  if (Gi)
    for (var n of Gi(t))
      gv.call(t, n) && Xi(e, n, t[n]);
  return e;
}, bv = F({
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
}), yv = F({
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
}), _v = F({
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
      const y = us(g) || {
        r: 255,
        g: 0,
        b: 0
      }, _ = Jl(y.r, y.g, y.b);
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
      return o.value === "rgb" ? d(bv, g, null) : d(yv, g, null);
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
    }, [d(Kp, {
      color: e.color,
      onChange: (g, h) => {
        var y;
        return (y = e.onHsvChange) == null ? void 0 : y.call(e, {
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
      default: () => Pp
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
    }), i = m(() => Wp(o.value || "")), [a, r] = Hn(i.value.a), [s, u] = Hn({
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
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${k}, ${V}, ${C}, ${a.value.toFixed(2)})` : `rgb(${k}, ${V}, ${C})` : a.value < 1 && !e.disabledAlpha ? `#${Up(k, V, C, a.value)}` : `#${Wi(k, V, C)}`;
    });
    be(g, (k) => {
      t("update:modelValue", k), t("change", k);
    });
    const h = (k) => {
      !e.disabled && u(k);
    }, y = (k) => {
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
    }, null)]), T = () => d(_v, {
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
      onAlphaChange: y
    }, null);
    return () => e.hideTrigger ? T() : d(Pl, Oe({
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
    a !== o.length - 1 ? (l && Je(i[o[a]]) && (i[o[a]] = {}), i = i[o[a]]) : i[o[a]] = n;
  }
};
var $v = Object.defineProperty, wv = Object.defineProperties, kv = Object.getOwnPropertyDescriptors, er = Object.getOwnPropertySymbols, Cv = Object.prototype.hasOwnProperty, Sv = Object.prototype.propertyIsEnumerable, tr = (e, t, n) => t in e ? $v(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Vv = (e, t) => {
  for (var n in t || (t = {}))
    Cv.call(t, n) && tr(e, n, t[n]);
  if (er)
    for (var n of er(t))
      Sv.call(t, n) && tr(e, n, t[n]);
  return e;
}, Ov = (e, t) => wv(e, kv(t));
const jl = ["xxl", "xl", "lg", "md", "sm", "xs"], cl = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Gt = [], Ev = -1, dl = {};
const nr = {
  matchHandlers: {},
  dispatch(e, t) {
    return dl = e, Gt.length < 1 ? !1 : (Gt.forEach((n) => {
      n.func(dl, t);
    }), !0);
  },
  subscribe(e) {
    Gt.length === 0 && this.register();
    const t = (++Ev).toString();
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
        this.dispatch(Ov(Vv({}, dl), {
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
function xv(e, t) {
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
function Bv(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : hs(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Iv(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (hs(t) && typeof t.behavior == "function")
    return t.behavior(n ? si(e, t) : []);
  if (n) {
    var l = Bv(t);
    return xv(si(e, l), l.behavior);
  }
}
const or = ["success", "warning", "error", "validating"], Pv = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || or.indexOf(l) > or.indexOf(t)) && (t = e[n]);
  }
  return t;
}, jv = (e) => {
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
var Tv = Object.defineProperty, ar = Object.getOwnPropertySymbols, Mv = Object.prototype.hasOwnProperty, Dv = Object.prototype.propertyIsEnumerable, ir = (e, t, n) => t in e ? Tv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, zv = (e, t) => {
  for (var n in t || (t = {}))
    Mv.call(t, n) && ir(e, n, t[n]);
  if (ar)
    for (var n of ar(t))
      Dv.call(t, n) && ir(e, n, t[n]);
  return e;
};
const Av = F({
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
      rules: y
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
    }, x = (A, ee) => {
      const w = (l.value || document.body).querySelector(`#${ms(e.id, A)}`);
      w && Iv(w, zv({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, ee));
    }, S = (A) => {
      const ee = Yl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      x(A, ee);
    }, z = (A) => {
      const ee = [];
      return T.forEach((I) => {
        ee.push(I.validate());
      }), Promise.all(ee).then((I) => {
        const w = {};
        let q = !1;
        return I.forEach((Q) => {
          Q && (q = !0, w[Q.field] = Q);
        }), q && e.scrollToFirstError && S(Object.keys(w)[0]), tt(A) && A(q ? w : void 0), q ? w : void 0;
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
        }), Q && e.scrollToFirstError && S(Object.keys(q)[0]), tt(ee) && ee(Q ? q : void 0), Q ? q : void 0;
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
      rules: y,
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
function Lv(e, t, n, l, o, i) {
  return b(), E("form", {
    ref: "formRef",
    class: G(e.cls),
    onSubmit: t[0] || (t[0] = on((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [re(e.$slots, "default")], 34);
}
var qo = /* @__PURE__ */ fe(Av, [["render", Lv]]), Vn = Object.prototype.toString;
function to(e) {
  return Vn.call(e) === "[object Array]";
}
function xt(e) {
  return Vn.call(e) === "[object Object]";
}
function ha(e) {
  return Vn.call(e) === "[object String]";
}
function Fv(e) {
  return Vn.call(e) === "[object Number]" && e === e;
}
function Nv(e) {
  return Vn.call(e) === "[object Boolean]";
}
function ma(e) {
  return Vn.call(e) === "[object Function]";
}
function Rv(e) {
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
}, qv = function(e, t) {
  for (var n = t.split("."), l = e, o = 0; o < n.length; o++)
    if (l = l && l[n[o]], l === void 0)
      return l;
  return l;
}, zt = "#{field} is not a #{type} type", Hv = {
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
    }), r = qv(l.validateMessages, o);
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
  }, xt(n) && ha(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = La(Hv, n.validateMessages);
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
var Wv = /* @__PURE__ */ function(e) {
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
}(_t), Uv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "number"
    })), this.validate(o && o.strict ? Fv(this.obj) : !0, this.getValidateMsg("type.number"));
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
}(_t), Kv = /* @__PURE__ */ function(e) {
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
}(_t), Yv = /* @__PURE__ */ function(e) {
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
    return this.validate(Rv(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Gv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "boolean"
    })), this.validate(o && o.strict ? Nv(this.obj) : !0, this.getValidateMsg("type.boolean"));
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
}(_t), Xv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Zv = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), Qv = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, Jv = /* @__PURE__ */ function(e) {
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
    return this.type = "email", this.validate(this.obj === void 0 || Xv.test(this.obj), this.getValidateMsg("type.email"));
  }, n.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || Zv.test(this.obj), this.getValidateMsg("type.url"));
  }, n.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || Qv.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), eh = /* @__PURE__ */ function(e) {
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
  this.string = new Wv(t, o), this.number = new Uv(t, o), this.array = new Kv(t, o), this.object = new Yv(t, o), this.boolean = new Gv(t, o), this.type = new Jv(t, o), this.custom = new eh(t, o);
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
        var g = l.schema[r][f], h = g.type, y = g.message;
        if (!h && !g.validator)
          throw "You must specify a type to field " + r + "!";
        var _ = Object.assign(Object.assign({}, l.options), {
          message: y,
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
const ys = Symbol("RowContextInjectionKey"), th = F({
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
      const y = {};
      if ((c.value || f.value) && !o.value) {
        const _ = -c.value / 2, P = -f.value / 2;
        _ && (y.marginLeft = `${_}px`, y.marginRight = `${_}px`), P && (y.marginTop = `${P}px`, y.marginBottom = `${P}px`);
      }
      return y;
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
function nh(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(e.classNames),
    style: ve(e.styles)
  }, [re(e.$slots, "default")], 6);
}
var lh = /* @__PURE__ */ fe(th, [["render", nh]]);
function oh(e) {
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
var ah = Object.defineProperty, rr = Object.getOwnPropertySymbols, ih = Object.prototype.hasOwnProperty, rh = Object.prototype.propertyIsEnumerable, sr = (e, t, n) => t in e ? ah(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ho = (e, t) => {
  for (var n in t || (t = {}))
    ih.call(t, n) && sr(e, n, t[n]);
  if (rr)
    for (var n of rr(t))
      rh.call(t, n) && sr(e, n, t[n]);
  return e;
};
function sh(e) {
  if (kt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || ge(e))
    return e;
  if (kt(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const uh = F({
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
    const t = ne("col"), n = Ge(ys, {}), l = m(() => sh(e.flex)), o = m(() => {
      const {
        div: f
      } = n, {
        span: g,
        offset: h,
        order: y,
        xs: _,
        sm: P,
        md: T,
        lg: k,
        xl: V,
        xxl: C
      } = e, D = {
        [`${t}`]: !f,
        [`${t}-order-${y}`]: y,
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
        const y = f[0] && f[0] / 2 || 0, _ = f[1] && f[1] / 2 || 0;
        y && (h.paddingLeft = `${y}px`, h.paddingRight = `${y}px`), _ && (h.paddingTop = `${_}px`, h.paddingBottom = `${_}px`);
      }
      return h;
    }), r = m(() => l.value ? {
      flex: l.value
    } : {}), s = m(() => Xn(e, jl)), u = oh(m(() => Ho({
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
function ch(e, t, n, l, o, i) {
  return e.visible ? (b(), E("div", {
    key: 0,
    class: G(e.classNames),
    style: ve(e.styles)
  }, [re(e.$slots, "default")], 6)) : te("v-if", !0);
}
var dh = /* @__PURE__ */ fe(uh, [["render", ch]]), fh = Object.defineProperty, ur = Object.getOwnPropertySymbols, ph = Object.prototype.hasOwnProperty, vh = Object.prototype.propertyIsEnumerable, cr = (e, t, n) => t in e ? fh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dr = (e, t) => {
  for (var n in t || (t = {}))
    ph.call(t, n) && cr(e, n, t[n]);
  if (ur)
    for (var n of ur(t))
      vh.call(t, n) && cr(e, n, t[n]);
  return e;
};
const hh = F({
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
function mh(e, t, n, l, o, i) {
  const a = de("Trigger");
  return b(), ie(a, {
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
    content: le(() => [re(e.$slots, "content", {}, () => [Ce(se(e.content), 1)])]),
    default: le(() => [re(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Wo = /* @__PURE__ */ fe(hh, [["render", mh]]);
const Zn = Object.assign(Wo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Wo.name, Wo);
  }
}), gh = F({
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
}), bh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], yh = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1), _h = /* @__PURE__ */ p("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1), $h = [yh, _h];
function wh(e, t, n, l, o, i) {
  return b(), E("svg", {
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
  }, $h, 14, bh);
}
var Uo = /* @__PURE__ */ fe(gh, [["render", wh]]);
const kh = Object.assign(Uo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Uo.name, Uo);
  }
}), Ch = F({
  name: "FormItemLabel",
  components: {
    ResizeObserver: Il,
    Tooltip: Zn,
    IconQuestionCircle: kh
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
}), Sh = /* @__PURE__ */ p("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ p("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), Vh = [Sh], Oh = /* @__PURE__ */ p("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ p("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), Eh = [Oh];
function xh(e, t, n, l, o, i) {
  const a = de("icon-question-circle"), r = de("Tooltip"), s = de("ResizeObserver");
  return b(), ie(s, {
    onResize: e.handleResize
  }, {
    default: le(() => [(b(), ie(tn(e.component), Oe({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: le(() => [e.required && e.asteriskPosition === "start" ? (b(), E("strong", {
        key: 0,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Vh, 2)) : te("v-if", !0), re(e.$slots, "default"), e.tooltip ? (b(), ie(r, {
        key: 1,
        content: e.tooltip
      }, {
        default: le(() => [d(a, {
          class: G(`${e.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : te("v-if", !0), e.required && e.asteriskPosition === "end" ? (b(), E("strong", {
        key: 2,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Eh, 2)) : te("v-if", !0), Ce(" " + se(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var Bh = /* @__PURE__ */ fe(Ch, [["render", xh]]);
const Ih = F({
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
function Ph(e, t, n, l, o, i) {
  return e.error.length > 0 ? (b(!0), E(ke, {
    key: 0
  }, Xe(e.error, (a) => (b(), ie(Ol, {
    key: a,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [p("div", {
      role: "alert",
      class: G([e.prefixCls])
    }, se(a), 3)]),
    _: 2
  }, 1024))), 128)) : e.help || e.$slots.help ? (b(), ie(Ol, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: le(() => [p("div", {
      class: G([e.prefixCls, `${e.prefixCls}-help`])
    }, [re(e.$slots, "help", {}, () => [Ce(se(e.help), 1)])], 2)]),
    _: 3
  })) : te("v-if", !0);
}
var jh = /* @__PURE__ */ fe(Ih, [["render", Ph]]), Th = Object.defineProperty, Ml = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable, fr = (e, t, n) => t in e ? Th(e, t, {
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
}, Mh = (e, t) => {
  var n = {};
  for (var l in e)
    _s.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Ml)
    for (var l of Ml(e))
      t.indexOf(l) < 0 && $s.call(e, l) && (n[l] = e[l]);
  return n;
};
const Dh = F({
  name: "FormItem",
  components: {
    ArcoRow: lh,
    ArcoCol: dh,
    FormItemLabel: Bh,
    FormItemMessage: jh
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
    }), f = Qi(l.model, e.field), g = Te({}), h = Te({}), y = m(() => Pv(g)), _ = m(() => jv(h)), P = B(!1), T = m(() => Qi(l.model, e.field)), k = m(() => {
      var I;
      return Boolean((I = e.disabled) != null ? I : l == null ? void 0 : l.disabled);
    }), V = m(() => {
      var I;
      return (I = e.validateStatus) != null ? I : y.value;
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
        return y.value && S(), Promise.resolve();
      const q = n.value, Q = T.value;
      N(q, {
        status: "",
        message: ""
      });
      const he = new Fa({
        [q]: w.map((ye) => {
          var ue = Mh(ye, []);
          return !ue.type && !ue.validator && (ue.type = "string"), ue;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (I = a.value.form) == null ? void 0 : I.validateMessages
      });
      return new Promise((ye) => {
        he.validate({
          [q]: Q
        }, (ue) => {
          var Be;
          const Ve = Boolean(ue == null ? void 0 : ue[q]);
          N(q, {
            status: Ve ? "error" : "",
            message: (Be = ue == null ? void 0 : ue[q].message) != null ? Be : ""
          });
          const Pe = Ve ? {
            label: e.label,
            field: n.value,
            value: ue[q].value,
            type: ue[q].type,
            isRequiredError: Boolean(ue[q].requiredError),
            message: ue[q].message
          } : void 0;
          ye(Pe);
        });
      });
    }, v = m(() => [].concat(e.validateTrigger)), x = m(() => v.value.reduce((I, w) => {
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
      eventHandlers: x,
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
function zh(e, t, n, l, o, i) {
  var a;
  const r = de("FormItemLabel"), s = de("ArcoCol"), u = de("FormItemMessage"), c = de("ArcoRow");
  return e.noStyle ? re(e.$slots, "default", {
    key: 0
  }) : (b(), ie(c, Oe({
    key: 1,
    class: [e.cls, {
      [`${e.prefixCls}-has-help`]: Boolean((a = e.$slots.help) != null ? a : e.help)
    }],
    wrap: !(e.labelColFlex || e.autoLabelWidth),
    div: e.layout !== "horizontal" || e.hideLabel
  }, e.rowProps), {
    default: le(() => [e.hideLabel ? te("v-if", !0) : (b(), ie(s, Oe({
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
        }, () => [Ce(se(e.label), 1)]) : te("v-if", !0)]),
        _: 3
      }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]),
      _: 3
    }, 16, ["class", "style"])), d(s, Oe({
      class: e.wrapperColCls,
      style: e.mergedWrapperStyle
    }, e.mergedWrapperCol), {
      default: le(() => [p("div", {
        class: G(`${e.prefixCls}-content-wrapper`)
      }, [p("div", {
        class: G([`${e.prefixCls}-content`, {
          [`${e.prefixCls}-content-flex`]: e.contentFlex
        }, e.contentClass])
      }, [re(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (b(), ie(u, {
        key: 0,
        error: e.finalMessage,
        help: e.help
      }, Pr({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: le(() => [re(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : te("v-if", !0), e.$slots.extra || e.extra ? (b(), E("div", {
        key: 1,
        class: G(`${e.prefixCls}-extra`)
      }, [re(e.$slots, "extra", {}, () => [Ce(se(e.extra), 1)])], 2)) : te("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var ln = /* @__PURE__ */ fe(Dh, [["render", zh]]);
const ws = Object.assign(qo, {
  Item: ln,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + qo.name, qo), e.component(n + ln.name, ln);
  }
}), Ah = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Lh = (e) => {
  const t = {};
  return Ah.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, Fh = F({
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
    }), c = B(), f = B(), g = B(), h = B(), y = B(e.defaultValue), _ = m(() => {
      var L;
      return (L = i.value) != null ? L : y.value;
    }), [P, T] = Zr(c);
    be(i, (L) => {
      (Je(L) || Sn(L)) && (y.value = "");
    });
    const k = m(() => Ee(e.maxLength) && Boolean(e.maxLength.errorOnly)), V = m(() => Ee(e.maxLength) ? e.maxLength.length : e.maxLength), C = (L) => {
      var M;
      return tt(e.wordLength) ? e.wordLength(L) : (M = L.length) != null ? M : 0;
    }, D = m(() => C(_.value)), $ = m(() => s.value || Boolean(V.value && k.value && D.value > V.value)), O = B(!1), N = B(!1), Y = m(() => e.allowClear && !r.value && _.value), R = B(!1), v = B(""), x = () => {
      P(), Le(() => {
        c.value && _.value !== c.value.value && (c.value.value = _.value, T());
      });
    }, S = (L, M = !0) => {
      var Z, oe;
      V.value && !k.value && C(L) > V.value && (L = (oe = (Z = e.wordSlice) == null ? void 0 : Z.call(e, L, V.value)) != null ? oe : L.slice(0, V.value)), y.value = L, M && t("update:modelValue", L), x();
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
          x();
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
          x();
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
    const ye = B(0), ue = B(0), Be = m(() => !Ee(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * ye.value + ue.value), Ve = m(() => !Ee(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * ye.value + ue.value), Pe = () => {
      const L = Lh(he);
      ye.value = Number.parseInt(L["line-height"] || 0, 10), ue.value = Number.parseInt(L["border-width"] || 0, 10) * 2 + Number.parseInt(L["padding-top"] || 0, 10) + Number.parseInt(L["padding-bottom"] || 0, 10), h.value = L, Le(() => {
        var M;
        const Z = (M = g.value) == null ? void 0 : M.offsetHeight;
        let oe = Z ?? 0, Me = "hidden";
        Be.value && oe < Be.value && (oe = Be.value), Ve.value && oe > Ve.value && (oe = Ve.value, Me = "auto"), f.value = {
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
    }, nt = (L) => {
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
}), Nh = ["disabled", "value", "placeholder"];
function Rh(e, t, n, l, o, i) {
  const a = de("resize-observer"), r = de("icon-close"), s = de("icon-hover");
  return b(), E("div", Oe(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (b(), E("div", {
    key: 0,
    ref: "mirrorRef",
    class: G(`${e.prefixCls}-mirror`),
    style: ve(e.mirrorStyle)
  }, se(`${e.computedValue}
`), 7)) : te("v-if", !0), d(a, {
    onResize: e.handleResize
  }, {
    default: le(() => [p("textarea", Oe({
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
    }), null, 16, Nh)]),
    _: 1
  }, 8, ["onResize"]), re(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (b(), E("div", {
    key: 1,
    class: G(`${e.prefixCls}-word-limit`)
  }, se(e.valueLength) + "/" + se(e.computedMaxLength), 3)) : te("v-if", !0), e.showClearBtn ? (b(), E("div", {
    key: 2,
    class: G(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [d(s, null, {
    default: le(() => [d(r)]),
    _: 1
  })], 2)) : te("v-if", !0)], 16);
}
var Ko = /* @__PURE__ */ fe(Fh, [["render", Rh]]);
const qh = Object.assign(Ko, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Ko.name, Ko);
  }
}), Hh = F({
  name: "Message",
  components: {
    AIconHover: ft,
    IconInfoCircleFill: Ju,
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
function Wh(e, t, n, l, o, i) {
  const a = de("icon-info-circle-fill"), r = de("icon-check-circle-fill"), s = de("icon-exclamation-circle-fill"), u = de("icon-close-circle-fill"), c = de("icon-loading"), f = de("icon-close"), g = de("a-icon-hover");
  return b(), E("li", {
    role: "alert",
    class: G([e.prefixCls, `${e.prefixCls}-${e.type}`, {
      [`${e.prefixCls}-closable`]: e.closable
    }]),
    onMouseenter: t[1] || (t[1] = (...h) => e.handleMouseEnter && e.handleMouseEnter(...h)),
    onMouseleave: t[2] || (t[2] = (...h) => e.handleMouseLeave && e.handleMouseLeave(...h))
  }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (b(), E("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon", {}, () => [e.type === "info" ? (b(), ie(a, {
    key: 0
  })) : e.type === "success" ? (b(), ie(r, {
    key: 1
  })) : e.type === "warning" ? (b(), ie(s, {
    key: 2
  })) : e.type === "error" ? (b(), ie(u, {
    key: 3
  })) : e.type === "loading" ? (b(), ie(c, {
    key: 4
  })) : te("v-if", !0)])], 2)) : te("v-if", !0), p("span", {
    class: G(`${e.prefixCls}-content`)
  }, [re(e.$slots, "default")], 2), e.closable ? (b(), E("span", {
    key: 1,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...h) => e.handleClose && e.handleClose(...h))
  }, [d(g, null, {
    default: le(() => [d(f)]),
    _: 1
  })], 2)) : te("v-if", !0)], 34);
}
var Uh = /* @__PURE__ */ fe(Hh, [["render", Wh]]);
function Kh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ka(e);
}
var Yh = F({
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
      }, Kh(o = e.messages.map((i) => {
        const a = {
          default: ni(i.content),
          icon: ni(i.icon)
        };
        return d(Uh, {
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
}), Gh = Object.defineProperty, Xh = Object.defineProperties, Zh = Object.getOwnPropertyDescriptors, vr = Object.getOwnPropertySymbols, Qh = Object.prototype.hasOwnProperty, Jh = Object.prototype.propertyIsEnumerable, hr = (e, t, n) => t in e ? Gh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Dl = (e, t) => {
  for (var n in t || (t = {}))
    Qh.call(t, n) && hr(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      Jh.call(t, n) && hr(e, n, t[n]);
  return e;
}, ks = (e, t) => Xh(e, Zh(t));
class em {
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
          const s = !Je(a.duration);
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
          tt(r.onClose) && r.onClose(i), this.messages.value.splice(a, 1), this.messageIds.delete(i);
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
    this.container = Au("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = B([]), this.position = l;
    const o = d(Yh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? Ye._context) && (o.appContext = n ?? Ye._context), Ga(o, this.container), document.body.appendChild(this.container);
  }
}
const bn = {}, Cs = [...hc, "loading", "normal"], _l = Cs.reduce((e, t) => (e[t] = (n, l) => {
  kt(n) && (n = {
    content: n
  });
  const o = Dl({
    type: t
  }, n), {
    position: i = "top"
  } = o;
  return bn[i] || (bn[i] = new em(o, l)), bn[i].add(o);
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
}), tm = F({
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
}), nm = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function lm(e, t, n, l, o, i) {
  const a = de("tooltip");
  return b(), ie(a, {
    "popup-visible": e.popupVisible,
    position: e.mergedTooltipPosition,
    content: e.tooltipContent
  }, {
    default: le(() => [p("div", Oe(e.$attrs, {
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
    }), null, 16, nm)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var om = /* @__PURE__ */ fe(tm, [["render", lm]]);
const Ft = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${an.round(l * 100, 2)}%`;
}, lo = (e, t) => t === "vertical" ? {
  bottom: e
} : {
  left: e
}, am = F({
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
function im(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(`${e.prefixCls}-dots`)
  }, [(b(!0), E(ke, null, Xe(e.data, (a, r) => (b(), E("div", {
    key: r,
    class: G(`${e.prefixCls}-dot-wrapper`),
    style: ve(e.getStyle(a.key))
  }, [p("div", {
    class: G([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var rm = /* @__PURE__ */ fe(am, [["render", im]]);
const sm = F({
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
function um(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(`${e.prefixCls}-marks`)
  }, [(b(!0), E(ke, null, Xe(e.data, (a, r) => (b(), E("div", {
    key: r,
    "aria-hidden": "true",
    class: G(`${e.prefixCls}-mark`),
    style: ve(e.getStyle(a.key))
  }, se(a.content), 7))), 128))], 2);
}
var cm = /* @__PURE__ */ fe(sm, [["render", um]]);
const dm = F({
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
function fm(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(`${e.prefixCls}-ticks`)
  }, [(b(!0), E(ke, null, Xe(e.steps, (a, r) => (b(), E("div", {
    key: r,
    class: G([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: ve(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var pm = /* @__PURE__ */ fe(dm, [["render", fm]]);
const vm = F({
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
function hm(e, t, n, l, o, i) {
  const a = de("input-number");
  return b(), E("div", {
    class: G(`${e.prefixCls}-input`)
  }, [e.range ? (b(), E(ke, {
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
var mm = /* @__PURE__ */ fe(vm, [["render", hm]]);
const gm = F({
  name: "Slider",
  components: {
    SliderButton: om,
    SliderDots: rm,
    SliderMarks: cm,
    SliderTicks: pm,
    SliderInput: mm
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
      var x, S, z, K, W;
      Ae(v) ? (u.value = (S = (x = v[0]) != null ? x : e.min) != null ? S : 0, c.value = (K = (z = v[1]) != null ? z : e.min) != null ? K : 0) : c.value = (W = v ?? e.min) != null ? W : 0;
    });
    const f = () => {
      var v, x;
      e.range ? (t("update:modelValue", [u.value, c.value]), t("change", [u.value, c.value])) : (t("update:modelValue", c.value), t("change", c.value)), (x = (v = i.value) == null ? void 0 : v.onChange) == null || x.call(v);
    }, g = (v) => {
      v = v ?? e.min, u.value = v, f();
    }, h = (v) => {
      v = v ?? e.min, c.value = v, f();
    }, y = m(() => {
      var v, x, S;
      return e.range ? Ae(e.modelValue) ? e.modelValue : [u.value, (v = e.modelValue) != null ? v : c.value] : Je(e.modelValue) ? [u.value, c.value] : Ae(e.modelValue) ? [(x = e.min) != null ? x : 0, e.modelValue[1]] : [(S = e.min) != null ? S : 0, e.modelValue];
    }), _ = m(() => Object.keys(e.marks || {}).map((v) => {
      var x;
      const S = Number(v);
      return {
        key: S,
        content: (x = e.marks) == null ? void 0 : x[S],
        isActive: S >= y.value[0] && S <= y.value[1]
      };
    })), P = (v) => lo(Ft(v, [e.min, e.max]), e.direction), T = B(!1), k = () => {
      T.value = !0, a.value && (r.value = a.value.getBoundingClientRect());
    };
    function V(v, x) {
      if (!r.value)
        return 0;
      const {
        left: S,
        top: z,
        width: K,
        height: W
      } = r.value, X = e.direction === "horizontal" ? K : W, A = X * e.step / (e.max - e.min);
      let ee = e.direction === "horizontal" ? v - S : z + W - x;
      ee < 0 && (ee = 0), ee > X && (ee = X);
      const I = Math.round(ee / A);
      return an.plus(e.min, an.times(I, e.step));
    }
    const C = (v, x) => {
      c.value = V(v, x), f();
    }, D = (v) => {
      if (o.value)
        return;
      const {
        clientX: x,
        clientY: S
      } = v;
      a.value && (r.value = a.value.getBoundingClientRect()), c.value = V(x, S), f();
    };
    function $([v, x]) {
      return v > x && ([v, x] = [x, v]), e.direction === "vertical" ? {
        bottom: Ft(v, [e.min, e.max]),
        top: Ft(e.max + e.min - x, [e.min, e.max])
      } : {
        left: Ft(v, [e.min, e.max]),
        right: Ft(e.max + e.min - x, [e.min, e.max])
      };
    }
    const O = (v, x) => {
      u.value = V(v, x), f();
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
      computedValue: y,
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
function bm(e, t, n, l, o, i) {
  const a = de("slider-ticks"), r = de("slider-dots"), s = de("slider-marks"), u = de("slider-button"), c = de("slider-input");
  return b(), E("div", {
    class: G(e.cls)
  }, [p("div", {
    ref: "trackRef",
    class: G(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [p("div", {
    class: G(`${e.prefixCls}-bar`),
    style: ve(e.getBarStyle(e.computedValue))
  }, null, 6), e.showTicks ? (b(), ie(a, {
    key: 0,
    value: e.computedValue,
    step: e.step,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["value", "step", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (b(), ie(r, {
    key: 1,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.marks ? (b(), ie(s, {
    key: 2,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : te("v-if", !0), e.range ? (b(), ie(u, {
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (b(), ie(c, {
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
var Yo = /* @__PURE__ */ fe(gm, [["render", bm]]);
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
      const s = ml((r = t.default) == null ? void 0 : r.call(t), !0).filter((u) => u.type !== nu);
      return d("div", {
        class: o.value
      }, [s.map((u, c) => {
        var f, g;
        const h = t.split && c > 0;
        return d(ke, {
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
const ym = Object.assign(Go, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Go.name, Go);
  }
}), _m = F({
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
    }), g = B(e.loading), h = m(() => g.value || e.loading), y = (C, D) => {
      var $, O;
      c.value = C ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, D), (O = ($ = u.value) == null ? void 0 : $.onChange) == null || O.call($, D);
    }, _ = async (C) => {
      if (h.value || r.value)
        return;
      const D = !f.value, $ = D ? e.checkedValue : e.uncheckedValue, O = e.beforeChange;
      if (tt(O)) {
        g.value = !0;
        try {
          const N = await O($);
          (N ?? !0) && y(D, C);
        } finally {
          g.value = !1;
        }
      } else
        y(D, C);
    }, P = (C) => {
      var D, $;
      t("focus", C), ($ = (D = u.value) == null ? void 0 : D.onFocus) == null || $.call(D, C);
    }, T = (C) => {
      var D, $;
      t("blur", C), ($ = (D = u.value) == null ? void 0 : D.onBlur) == null || $.call(D, C);
    };
    be(o, (C) => {
      (Je(C) || Sn(C)) && (c.value = e.uncheckedValue);
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
}), $m = ["aria-checked", "disabled"];
function wm(e, t, n, l, o, i) {
  const a = de("icon-loading");
  return b(), E("button", {
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
  }, [e.computedLoading ? (b(), ie(a, {
    key: 0
  })) : (b(), E(ke, {
    key: 1
  }, [e.computedCheck ? re(e.$slots, "checked-icon", {
    key: 0
  }) : re(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), te("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (b(), E(ke, {
    key: 0
  }, [p("span", {
    class: G(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [Ce(se(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [Ce(se(e.uncheckedText), 1)])], 2), p("span", {
    class: G(`${e.prefixCls}-text`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [Ce(se(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [Ce(se(e.uncheckedText), 1)])], 2)], 64)) : te("v-if", !0)], 46, $m);
}
var Xo = /* @__PURE__ */ fe(_m, [["render", wm]]);
const $t = Object.assign(Xo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Xo.name, Xo);
  }
}), km = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, Na = Symbol("ArcoTabs"), Cm = F({
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
function Sm(e, t, n, l, o, i) {
  const a = de("icon-close"), r = de("icon-hover");
  return b(), E("div", Oe({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [p("span", {
    class: G(`${e.prefixCls}-title`)
  }, [re(e.$slots, "default")], 2), e.editable && e.tab.closable ? (b(), ie(r, {
    key: 0,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: on(e.handleDelete, ["stop"])
  }, {
    default: le(() => [d(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : te("v-if", !0)], 16);
}
var Vm = /* @__PURE__ */ fe(Cm, [["render", Sm]]);
function Om(e) {
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
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? d(Kf, null, null) : d(Sp, null, null) : e.type === "next" ? d(Ma, null, null) : d(rs, null, null), i = m(() => [n, {
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
      }, Om(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const Em = F({
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
function xm(e, t, n, l, o, i) {
  return b(), E("div", {
    class: G(e.cls),
    style: ve(e.style)
  }, null, 6);
}
var Bm = /* @__PURE__ */ fe(Em, [["render", xm]]), Im = F({
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
      if (!Je(o.value))
        return c.value[o.value];
    }), g = B(), h = m(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), y = B(!1), _ = B(0), P = B(0), T = B([]), k = B(0), V = () => {
      var I, w, q;
      return (q = a.value === "vertical" ? (I = s.value) == null ? void 0 : I.offsetHeight : (w = s.value) == null ? void 0 : w.offsetWidth) != null ? q : 0;
    }, C = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, D = () => l.value.map((I) => {
      const w = c.value[I.key];
      return a.value === "vertical" ? w.offsetTop + w.offsetHeight : w.offsetLeft + w.offsetWidth;
    }), $ = () => {
      y.value = O(), y.value ? (_.value = V(), P.value = C(), T.value = D(), k.value > P.value && (k.value = P.value)) : k.value = 0;
    }, O = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, N = (I) => {
      var w;
      return ((w = T.value[I - 1]) != null ? w : 0) >= k.value && T.value[I] <= k.value + _.value;
    }, Y = (I) => s.value ? I === "previous" ? k.value - _.value : k.value + _.value : 0, R = (I) => !s.value || !u.value || I < 0 ? 0 : I > P.value ? P.value : I, v = (I, w) => {
      t("click", I, w);
    }, x = (I, w) => {
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
        if (y.value)
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
    }]), A = m(() => km({
      direction: e.direction,
      type: e.type,
      offset: k.value
    })), ee = m(() => [`${r}-tab`, {
      [`${r}-tab-scroll`]: y.value
    }]);
    return () => {
      var I;
      return d("div", {
        class: W.value
      }, [y.value && d(mr, {
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
          }, [e.tabs.map((w, q) => d(Vm, {
            key: w.key,
            ref: (Q) => {
              Q != null && Q.$el && (c.value[w.key] = Q.$el);
            },
            active: w.key === o.value,
            tab: w,
            editable: e.editable,
            onClick: v,
            onDelete: x
          }, {
            default: () => {
              var Q, he, ye;
              return [(ye = (he = (Q = w.slots).title) == null ? void 0 : he.call(Q)) != null ? ye : w.title];
            }
          })), e.type === "line" && f.value && d(Bm, {
            ref: g,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !y.value && K()])]
      }), y.value && d(mr, {
        type: "next",
        direction: e.direction,
        disabled: k.value >= P.value,
        onClick: S
      }, null), d("div", {
        class: `${r}-extra`
      }, [y.value && K(), (I = n.extra) == null ? void 0 : I.call(n)])]);
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
    } = Ip("TabPane"), h = Te(/* @__PURE__ */ new Map()), y = m(() => {
      const v = [];
      return g.value.forEach((x) => {
        const S = h.get(x);
        S && v.push(S);
      }), v;
    }), _ = m(() => y.value.map((v) => v.key)), P = (v, x) => {
      h.set(v, x);
    }, T = (v) => {
      h.delete(v);
    }, k = B(e.defaultActiveKey), V = m(() => {
      var v;
      const x = (v = e.activeKey) != null ? v : k.value;
      return Je(x) ? _.value[0] : x;
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
    }, $ = (v, x) => {
      D(v), t("tabClick", v, x);
    }, O = (v) => {
      t("add", v), e.autoSwitch && Le(() => {
        const x = _.value[_.value.length - 1];
        D(x);
      });
    }, N = (v, x) => {
      t("delete", v, x);
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
      }, [u.value === "bottom" && Y(), d(Im, {
        tabs: y.value,
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
}), Pm = Object.defineProperty, gr = Object.getOwnPropertySymbols, jm = Object.prototype.hasOwnProperty, Tm = Object.prototype.propertyIsEnumerable, br = (e, t, n) => t in e ? Pm(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Mm = (e, t) => {
  for (var n in t || (t = {}))
    jm.call(t, n) && br(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      Tm.call(t, n) && br(e, n, t[n]);
  return e;
};
const Dm = F({
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
      var y;
      a != null && a.uid && ((y = s.removeItem) == null || y.call(s, a.uid));
    }), be(f, (y) => {
      y ? g.value || (g.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (g.value = !1);
    }), jt(() => {
      h.slots = Mm({}, t);
    }), {
      prefixCls: r,
      active: f,
      itemRef: u,
      mounted: g
    };
  }
});
function zm(e, t, n, l, o, i) {
  return b(), E("div", {
    ref: "itemRef",
    class: G([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (b(), E("div", {
    key: 0,
    class: G(`${e.prefixCls}-pane`)
  }, [re(e.$slots, "default")], 2)) : te("v-if", !0)], 2);
}
var An = /* @__PURE__ */ fe(Dm, [["render", zm]]);
const yr = Object.assign(Zo, {
  TabPane: An,
  install: (e, t) => {
    Ke(e, t);
    const n = Ue(t);
    e.component(n + Zo.name, Zo), e.component(n + An.name, An);
  }
}), Am = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png",
  alt: "",
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
})], -1), Fm = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
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
})], -1), Nm = /* @__PURE__ */ F({
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
      return b(), E("div", {
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
        default: le(() => [Am]),
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
        default: le(() => [Lm]),
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
        default: le(() => [Fm]),
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
    editorBloackOperate: Nm
  },
  setup(e, {
    emit: t
  }) {
    var s;
    let n = at == null ? void 0 : at.componentMap[e.block.componentKey];
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
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(de("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : e.block.dragMode == "default" || e.block.dragMode == "updown" || e.block.dragMode == "" ? d("div", {
      class: i.value,
      style: l.value,
      ref: o,
      "data-index": e.index,
      id: r
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? d(de("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : d("div", {
      style: {
        backgroundColor: "gray"
      }
    }, [d(de("grid-item"), {
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
function qm(e) {
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
      t.commandArray.forEach((y) => {
        let {
          keyboard: _,
          name: P
        } = y;
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
function Hm({
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
  let o = qm(l);
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
const Wm = (e) => new Promise((t, n) => {
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
}), Um = (e) => (He("data-v-b129c912"), e = e(), We(), e), Km = {
  class: "img-upload-container w100"
}, Ym = {
  key: 0,
  class: "real-img w100"
}, Gm = ["src"], Xm = /* @__PURE__ */ Um(() => /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), Zm = [Xm], Qm = /* @__PURE__ */ F({
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
        n.value = !0, Wm(i).then((a) => {
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
      return b(), E("div", Km, [e.modelValue ? (b(), E("div", Ym, [p("img", {
        src: e.modelValue,
        alt: ""
      }, null, 8, Gm), p("div", {
        class: "real-close",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...r) => l.del && l.del(...r))
      }, Zm)])) : te("", !0), d(a, {
        style: {
          width: "100%"
        },
        class: "file-btn",
        loading: Kl(n)
      }, {
        default: le(() => [Ce(se(e.modelValue ? "替换图片" : "上传图片") + " ", 1), p("input", {
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
const Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Ra = /* @__PURE__ */ Se(Qm, [["__scopeId", "data-v-b129c912"]]), Jm = {
  key: 0
}, eg = {
  key: 1
}, tg = {
  key: 0,
  class: "ml12"
}, ng = {
  key: 2
}, lg = {
  key: 3
}, og = {
  key: 0,
  class: "ml12"
}, ag = {
  key: 4,
  class: "w100"
}, ig = {
  key: 0,
  class: "ml12"
}, rg = {
  key: 5,
  class: "w100"
}, sg = {
  key: 6,
  class: "w100"
}, ug = /* @__PURE__ */ F({
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
      const l = za, o = Yt, i = qh, a = Vt, r = Ss, s = ym, u = nn, c = Ql, f = ln, g = ws;
      return b(), ie(g, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: le(() => [(b(!0), E(ke, null, Xe(e.editorControlView, (h, y) => (b(), ie(f, {
          label: h.label,
          key: y
        }, {
          default: le(() => {
            var _, P, T, k, V, C, D, $, O, N, Y, R, v, x;
            return [h.type == "color" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", Jm, [d(l, {
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              "show-history": "",
              "show-preset": "",
              showText: "",
              disabledAlpha: "",
              disabled: !!((_ = e.currentBlock.props[h.key]) != null && _.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])) : te("", !0), h.type == "input" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", eg, [d(o, {
              style: {
                width: "250px"
              },
              placeholder: `请输入${h.label}`,
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              disabled: !!((P = e.currentBlock.props[h.key]) != null && P.disabled)
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (T = e.currentBlock.props[h.key]) != null && T.unit ? (b(), E("span", tg, se((k = e.currentBlock.props[h.key]) == null ? void 0 : k.unit), 1)) : te("", !0)])) : te("", !0), h.type == "textarea" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", ng, [d(i, {
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
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])])) : te("", !0), h.type == "number" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", lg, [d(a, {
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
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (Y = e.currentBlock.props[h.key]) != null && Y.unit ? (b(), E("span", og, se((R = e.currentBlock.props[h.key]) == null ? void 0 : R.unit), 1)) : te("", !0)])) : te("", !0), h.type == "slider" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", ag, [d(s, {
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
            }, 1024), (v = e.currentBlock.props[h.key]) != null && v.unit ? (b(), E("span", ig, se((x = e.currentBlock.props[h.key]) == null ? void 0 : x.unit), 1)) : te("", !0)])) : te("", !0), h.type == "imgUpload" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", rg, [d(Ra, {
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : te("", !0), h.type == "select" && "defaultValue" in e.currentBlock.props[h.key] ? (b(), E("div", sg, [d(c, {
              style: {
                width: "250px"
              },
              placeholder: `请选择${h.label}`,
              modelValue: e.currentBlock.props[h.key].defaultValue,
              "onUpdate:modelValue": (S) => e.currentBlock.props[h.key].defaultValue = S,
              "allow-clear": ""
            }, {
              default: le(() => [(b(!0), E(ke, null, Xe(e.currentBlock.props[h.key].options, (S, z) => (b(), ie(u, {
                key: z,
                value: S.value
              }, {
                default: le(() => [Ce(se(S.name), 1)]),
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
const cg = /* @__PURE__ */ Se(ug, [["__scopeId", "data-v-5efd1334"]]);
function dg(e, t, n, l) {
  let o = e(), i = t.value.cBlock || {}, a = i.props ? i.props : {}, r = B([]);
  Object.keys(a).forEach((c) => {
    a[c].type && (a[c].key = c, r.value.push(a[c]));
  });
  let s = d(cg), u = d(Ra);
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
          }, [Ce("%")])]
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
      e.componentLists.filter((o) => o.disabled == null ? !0 : !o.disabled).forEach((o) => {
        t.value[o.group] || (t.value[o.group] = []), !t.value[o.group].find((i) => o.name == i.name) && t.value[o.group].push(o);
      });
      for (let o in t.value)
        t.value[o] = t.value[o].filter((i, a) => {
          var r;
          return e.builtInComsControlView ? (r = e.builtInComs) == null ? void 0 : r.includes(i.name) : !0;
        }), (!t.value[o] || !t.value[o].length) && delete t.value[o];
    }
    n(), Es.on(() => {
      n();
    });
    function l(o) {
      return o.sort((i, a) => (i.sort ? i.sort : 0) - (a.sort ? a.sort : 0));
    }
    return () => d(ke, null, [Object.keys(t.value).map((o) => d("div", {
      class: "group-container"
    }, [d("div", {
      class: "title"
    }, [o]), d("div", {
      class: "group-container-content"
    }, [l(t.value[o]).map((i) => i != null && i.hide ? null : d("div", {
      class: "editer-menu-content-block",
      draggable: !0,
      onDragstart: (a) => e.menuDragInfo.dragstart(a, i),
      onDragend: e.menuDragInfo.dragend.bind(e.menuDragInfo),
      onClick: (a) => e.menuDragInfo.click(a, i)
    }, [d("div", {
      class: "icon-box"
    }, [d("img", {
      class: "icon",
      src: i.icon,
      alt: ""
    }, null), d("img", {
      class: "activeIcon",
      src: i.activeIcon,
      alt: ""
    }, null)]), d("span", {
      class: "editor-priview-label"
    }, [i.label])]))])]))]);
  }
}), it = (e) => (He("data-v-9674b51e"), e = e(), We(), e), fg = {
  class: "editor-built-in-control-base-title"
}, pg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "line"
}, null, -1)), vg = {
  class: "font"
}, hg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), mg = [hg], gg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), bg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), yg = [bg], _g = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), $g = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), wg = [$g], kg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), Cg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), Sg = [Cg], Vg = {
  class: "letterSpacing flex"
}, Og = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "字间距", -1)), Eg = {
  class: "flex: 1"
}, xg = {
  class: "letterSpacing flex mt24"
}, Bg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "行间距", -1)), Ig = {
  class: "flex: 1"
}, Pg = {
  class: "letterSpacing flex mt24"
}, jg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "左右间距", -1)), Tg = {
  class: "flex: 1"
}, Mg = {
  class: "letterSpacing flex mt24"
}, Dg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "上间距", -1)), zg = {
  class: "flex: 1"
}, Ag = {
  class: "letterSpacing flex mt24"
}, Lg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "下间距", -1)), Fg = {
  class: "flex: 1"
}, Ng = {
  class: "letterSpacing flex mt24"
}, Rg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("span", null, "背景色", -1)), qg = {
  class: "flex: 1"
}, Hg = {
  class: "mt24 mb48"
}, Wg = /* @__PURE__ */ it(() => /* @__PURE__ */ p("div", {
  class: "img-title"
}, "背景图", -1)), Ug = /* @__PURE__ */ F({
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
      return b(), E("div", fg, [pg, p("div", vg, [d(i, {
        content: "居中",
        position: "top"
      }, {
        default: le(() => [(b(), E("svg", {
          t: "1726044272489",
          class: G(["icon", {
            active: e.textAlign == "1"
          }]),
          viewBox: "0 0 1024 1024",
          width: "200",
          height: "200",
          onClick: o[0] || (o[0] = (s) => n("textAlign", e.textAlign == "1" ? "2" : "1"))
        }, mg, 2))]),
        _: 1
      }), gg, d(i, {
        content: "加粗",
        position: "top"
      }, {
        default: le(() => [(b(), E("svg", {
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
        }, yg, 2))]),
        _: 1
      }), _g, d(i, {
        content: "倾斜",
        position: "top"
      }, {
        default: le(() => [(b(), E("svg", {
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
        }, wg, 2))]),
        _: 1
      }), kg, d(i, {
        content: "下划线",
        position: "top"
      }, {
        default: le(() => [(b(), E("svg", {
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
        }, Sg, 2))]),
        _: 1
      })]), p("div", Vg, [Og, p("div", Eg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.letterSpacing.defaultValue,
        "onUpdate:modelValue": o[4] || (o[4] = (s) => e.block.props.letterSpacing.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", xg, [Bg, p("div", Ig, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.lineHeight.defaultValue,
        "onUpdate:modelValue": o[5] || (o[5] = (s) => e.block.props.lineHeight.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Pg, [jg, p("div", Tg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.leftRightPadding.defaultValue,
        "onUpdate:modelValue": o[6] || (o[6] = (s) => e.block.props.leftRightPadding.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Mg, [Dg, p("div", zg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginTop.defaultValue,
        "onUpdate:modelValue": o[7] || (o[7] = (s) => e.block.props.marginTop.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Ag, [Lg, p("div", Fg, [d(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginBottom.defaultValue,
        "onUpdate:modelValue": o[8] || (o[8] = (s) => e.block.props.marginBottom.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Ng, [Rg, p("div", qg, [d(r, {
        "show-history": "",
        "show-preset": "",
        showText: "",
        disabledAlpha: "",
        modelValue: e.block.props.backgroundColor.defaultValue,
        "onUpdate:modelValue": o[9] || (o[9] = (s) => e.block.props.backgroundColor.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Hg, [Wg, d(Ra, {
        modelValue: e.block.props.backgroundImage.defaultValue,
        "onUpdate:modelValue": o[10] || (o[10] = (s) => e.block.props.backgroundImage.defaultValue = s)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const Kg = /* @__PURE__ */ Se(Ug, [["__scopeId", "data-v-9674b51e"]]), Yg = /* @__PURE__ */ F({
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
    return (t, n) => (b(), E("div", {
      class: "editor-built-in-registor-base-title",
      style: ve(e.style)
    }, [p("div", {
      class: G(["text", {
        minHeight: !e.text
      }])
    }, se(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
  }
});
const Gg = /* @__PURE__ */ Se(Yg, [["__scopeId", "data-v-ad83ebe6"]]), Xg = {
  group: "基础组件",
  name: "baseText",
  sort: 2,
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
    return d(Gg, {
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
    return d(Kg, {
      block: e,
      textAlign: n.textAlign.defaultValue,
      fontWeight: n.fontWeight.defaultValue,
      fontStyle: n.fontStyle.defaultValue,
      textDecoration: n.textDecoration.defaultValue,
      onChange: l
    });
  }
}, Zg = ["src"], Qg = {
  key: 1,
  class: "empty"
}, Jg = /* @__PURE__ */ F({
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
    return (t, n) => (b(), E("div", {
      class: "editor-built-in-registor-base-img",
      style: ve(e.style)
    }, [e.src ? (b(), E("img", {
      key: 0,
      class: "render-img",
      src: e.src,
      alt: ""
    }, null, 8, Zg)) : (b(), E("div", Qg, "请在控制器中上传图片+"))], 4));
  }
});
const eb = /* @__PURE__ */ Se(Jg, [["__scopeId", "data-v-ac936ab1"]]), tb = {
  group: "基础组件",
  name: "baseImg",
  sort: 3,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (e) => {
    let t = e.props, n = m(() => ({
      marginTop: (t != null && t.marginTop ? t.marginTop.defaultValue : 0) + "px",
      marginBottom: (t != null && t.marginBottom ? t.marginBottom.defaultValue : 0) + "px"
    }));
    return d(eb, {
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
}, nb = {
  key: 0,
  class: "tip"
}, lb = /* @__PURE__ */ F({
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
    }), (i, a) => (b(), E("div", {
      class: "editor-built-in-registor-base-submit",
      ref_key: "baseSubmit",
      ref: n
    }, [p("div", {
      class: "submit",
      style: ve(e.style)
    }, se(e.text), 5), e.visibleSubmitNum ? (b(), E("div", nb, " ——" + se(o(e.submitTip)) + "—— ", 1)) : te("", !0)], 512));
  }
});
const ob = /* @__PURE__ */ Se(lb, [["__scopeId", "data-v-caa2b586"]]);
const Qn = (e) => (He("data-v-e66b9f5d"), e = e(), We(), e), ab = {
  class: "editor-built-in-control-base-submit"
}, ib = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), rb = {
  class: "flex mt24 options"
}, sb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "是否吸底", -1)), ub = {
  class: "flex mt24 options"
}, cb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "显示提交次数", -1)), db = {
  key: 0,
  class: "flex mt24 options"
}, fb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "初始次数", -1)), pb = {
  class: "pl24"
}, vb = {
  key: 1,
  class: "flex mt24 options"
}, hb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提示语内容", -1)), mb = [hb], gb = {
  key: 2,
  class: "mt24"
}, bb = /* @__PURE__ */ F({
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
      return b(), E("div", ab, [ib, p("div", rb, [sb, p("div", null, [d(i, {
        "default-checked": e.block.props.fixedBottom.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "fixedBottom"))
      }, null, 8, ["default-checked"])])]), p("div", ub, [cb, p("div", null, [d(i, {
        "default-checked": e.block.props.visibleSubmitNum.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "visibleSubmitNum"))
      }, null, 8, ["default-checked"])])]), e.block.props.visibleSubmitNum.defaultValue == "1" ? (b(), E("div", db, [fb, p("div", pb, [d(a, {
        placeholder: "请输入初始次数",
        modelValue: e.block.props.submitNum.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.submitNum.defaultValue = r)
      }, null, 8, ["modelValue"])])])) : te("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (b(), E("div", vb, mb)) : te("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (b(), E("div", gb, [d(a, {
        placeholder: "提示语",
        modelValue: e.block.props.submitTip.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (r) => e.block.props.submitTip.defaultValue = r)
      }, null, 8, ["modelValue"])])) : te("", !0)]);
    };
  }
});
const yb = /* @__PURE__ */ Se(bb, [["__scopeId", "data-v-e66b9f5d"]]), _b = {
  group: "基础组件",
  name: "baseSubmit",
  label: "提交按钮",
  sort: 4,
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
    return d(ob, {
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
  controlView: (e, t) => d(yb, {
    block: e
  })
}, $b = /* @__PURE__ */ F({
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
    return (l, o) => (b(), E("div", {
      class: "editor-built-in-registor-base-title",
      style: ve({
        ...e.style
      })
    }, [(b(!0), E(ke, null, Xe(Kl(n), (i) => (b(), E("div", null, se(i), 1))), 256))], 4));
  }
});
const wb = /* @__PURE__ */ Se($b, [["__scopeId", "data-v-25916970"]]), kb = {
  group: "基础组件",
  label: "表单标题",
  name: "baseTitle",
  pushType: "unshift",
  sort: 1,
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
    return d(wb, {
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
}, Cb = {
  class: "successImg"
}, Sb = ["src"], Vb = {
  class: "successText"
}, Ob = {
  class: "successDesc"
}, Eb = {
  class: "successQR"
}, xb = ["src"], Bb = /* @__PURE__ */ F({
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
      let a = document.querySelector(".visual-editor-area-content");
      console.log(a.offsetHeight), n.value = a != null && a.offsetHeight ? a == null ? void 0 : a.offsetHeight : 600;
    });
    function l() {
      const a = t.successLink, r = /https?:\/\/[^\s]+/, s = a.match(r) ? a.match(r)[0] : null;
      s && window.open(s);
    }
    function o() {
      return t.successDesc.split(`
`);
    }
    function i() {
      return t.successBottomText.split(`
`);
    }
    return (a, r) => (b(), E("div", {
      class: "editor-built-in-registor-base-success",
      style: ve({
        height: Kl(n) + "px"
      })
    }, [p("div", Cb, [p("img", {
      src: e.successSrc,
      alt: ""
    }, null, 8, Sb)]), p("div", Vb, [p("span", {
      style: ve({
        color: e.successColor
      })
    }, se(e.successText), 5)]), p("div", Ob, [(b(!0), E(ke, null, Xe(o(), (s) => (b(), E("div", null, [p("span", {
      style: ve({
        color: e.successDescColor
      })
    }, se(s), 5)]))), 256))]), p("div", Eb, [p("img", {
      src: e.successQR,
      alt: ""
    }, null, 8, xb)]), p("div", {
      class: "successBottomText",
      onClick: l
    }, [(b(!0), E(ke, null, Xe(i(), (s, u) => (b(), E("div", {
      key: u
    }, [p("span", {
      style: ve({
        color: e.successBottomColor
      })
    }, se(s), 5)]))), 128))])], 4));
  }
});
const Ib = /* @__PURE__ */ Se(Bb, [["__scopeId", "data-v-d7323827"]]), Pb = {
  group: "基础组件",
  name: "baseSuccess",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  hide: !1,
  render: (e) => {
    let t = e.props;
    return d(Ib, {
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
}, jb = (e) => (He("data-v-994aa073"), e = e(), We(), e), Tb = {
  class: "title-tip"
}, Mb = {
  key: 0,
  class: "red"
}, Db = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "8px",
    "margin-bottom": "2px"
  }
}, zb = {
  class: "form-item"
}, Ab = /* @__PURE__ */ jb(() => /* @__PURE__ */ p("div", {
  class: "control-input"
}, null, -1)), Lb = {
  class: "text"
}, Fb = /* @__PURE__ */ F({
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
    return (t, n) => (b(), E("div", {
      class: "editor-built-in-commen-multiple",
      style: ve(e.style)
    }, [p("div", Tb, [e.isRequire ? (b(), E("span", Mb, "*")) : te("", !0), p("span", null, se(e.title), 1)]), e.tip.trim().length > 0 ? (b(), E("div", Db, se(e.tip), 1)) : te("", !0), p("div", zb, [(b(!0), E(ke, null, Xe(e.options, (l, o) => (b(), E("div", {
      class: "item",
      key: o
    }, [Ab, p("div", Lb, se(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const Nb = /* @__PURE__ */ Se(Fb, [["__scopeId", "data-v-994aa073"]]);
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
      Rb(e, l, n[l]);
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
function Rb(e, t, n) {
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
function qb(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, i;
  for (i = 0; i < l.length; i++)
    o = l[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Hb(e, t) {
  if (e == null)
    return {};
  var n = qb(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      l = i[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
var Wb = "1.15.3";
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
      var h = yn(o || e), y = h && h.a, _ = h && h.d;
      h && (a /= _, r /= y, f /= y, c /= _, s = a + c, u = r + f);
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
    if (a[i].style.display !== "none" && a[i] !== ce.ghost && (l || a[i] !== ce.dragged) && bt(a[i], n.draggable, e, !1)) {
      if (o === t)
        return a[i];
      o++;
    }
    i++;
  }
  return null;
}
function qa(e, t) {
  for (var n = e.lastElementChild; n && (n === ce.ghost || pe(n, "display") === "none" || t && !Fl(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function ht(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ce.clone && (!t || Fl(e, t)) && n++;
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
function Ub(e, t) {
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
function Kb(e, t) {
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
function Yb() {
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
function Gb() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(pe(o, "display") === "none" || o === ce.ghost)) {
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
      e.splice(Ub(e, {
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
        var s = 0, u = r.target, c = u.fromRect, f = Re(u), g = u.prevFromRect, h = u.prevToRect, y = r.rect, _ = yn(u, !0);
        _ && (f.top -= _.f, f.left -= _.e), u.toRect = f, u.thisAnimationDuration && Qo(g, f) && !Qo(c, f) && // Make sure animatingRect is on line between toRect & fromRect
        (y.top - f.top) / (y.left - f.left) === (c.top - f.top) / (c.left - f.left) && (s = Zb(y, g, h, o.options)), Qo(f, c) || (u.prevFromRect = c, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, y, f, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
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
        l.animatingX = !!c, l.animatingY = !!f, pe(l, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = Xb(l), pe(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), pe(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          pe(l, "transition", ""), pe(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, a);
      }
    }
  };
}
function Xb(e) {
  return e.offsetWidth;
}
function Zb(e, t, n, l) {
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
function Qb(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, i = e.cloneEl, a = e.toEl, r = e.fromEl, s = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, f = e.newDraggableIndex, g = e.originalEvent, h = e.putSortable, y = e.extraEventProperties;
  if (t = t || n && n[ut], !!t) {
    var _, P = t.options, T = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Tt && !Jn ? _ = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(l, !0, !0)), _.to = a || n, _.from = r || n, _.item = o || n, _.clone = i, _.oldIndex = s, _.newIndex = u, _.oldDraggableIndex = c, _.newDraggableIndex = f, _.originalEvent = g, _.pullMode = h ? h.lastPutMode : void 0;
    var k = St(St({}, y), el.getEventProperties(l, t));
    for (var V in k)
      _[V] = k[V];
    n && n.dispatchEvent(_), P[T] && P[T].call(t, _);
  }
}
var Jb = ["evt"], st = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, i = Hb(l, Jb);
  el.pluginEvent.bind(ce)(t, n, St({
    dragEl: J,
    parentEl: ze,
    ghostEl: me,
    rootEl: Ie,
    nextEl: Jt,
    lastDownEl: wl,
    cloneEl: je,
    cloneHidden: Nt,
    dragStarted: jn,
    putSortable: Qe,
    activeSortable: ce.active,
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
      ot({
        sortable: n,
        name: r,
        originalEvent: o
      });
    }
  }, i));
};
function ot(e) {
  Qb(St({
    putSortable: Qe,
    cloneEl: je,
    targetEl: J,
    rootEl: Ie,
    oldIndex: mn,
    oldDraggableIndex: Nn,
    newIndex: dt,
    newDraggableIndex: Lt
  }, e));
}
var J, ze, me, Ie, Jt, wl, je, Nt, mn, dt, Nn, Lt, fl, Qe, vn = !1, Nl = !1, Rl = [], Xt, gt, ea, ta, Or, Er, jn, pn, Rn, qn = !1, pl = !1, kl, et, na = [], ga = !1, ql = [], oo = typeof document < "u", vl = xs, xr = Jn || Tt ? "cssFloat" : "float", ey = oo && !Bs && !xs && "draggable" in document.createElement("div"), As = function() {
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
}, ty = function(t, n, l) {
  var o = l ? t.left : t.top, i = l ? t.right : t.bottom, a = l ? t.width : t.height, r = l ? n.left : n.top, s = l ? n.right : n.bottom, u = l ? n.width : n.height;
  return o === r || i === s || o + a / 2 === r + u / 2;
}, ny = function(t, n) {
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
    var n = ny(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[ut]._onDragOver(l);
    }
  }
}, ly = function(t) {
  J && J.parentNode[ut]._isOutsideThisEl(t.target);
};
function ce(e, t) {
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
    supportPointer: ce.supportPointer !== !1 && "PointerEvent" in window && !Ln,
    emptyInsertThreshold: 5
  };
  el.initializePlugins(this, e, n);
  for (var l in n)
    !(l in t) && (t[l] = n[l]);
  Fs(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : ey, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? we(e, "pointerdown", this._onTapStart) : (we(e, "mousedown", this._onTapStart), we(e, "touchstart", this._onTapStart)), this.nativeDraggable && (we(e, "dragover", this), we(e, "dragenter", this)), Rl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Pt(this, Gb());
}
ce.prototype = /** @lends Sortable.prototype */
{
  constructor: ce,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (pn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, J) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, l = this.el, o = this.options, i = o.preventOnFilter, a = t.type, r = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (r || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = o.filter;
      if (dy(l), !J && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = bt(s, o.draggable, l, !1), !(s && s.animated) && wl !== s)) {
        if (mn = ht(s), Nn = ht(s, o.draggable), typeof c == "function") {
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
            }), i && t.cancelable && t.preventDefault();
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
      if (Ie = i, J = l, ze = J.parentNode, Jt = J.nextSibling, wl = l, fl = a.group, ce.dragged = J, Xt = {
        target: J,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Or = Xt.clientX - u.left, Er = Xt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, J.style["will-change"] = "all", s = function() {
        if (st("delayEnded", o, {
          evt: t
        }), ce.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !kr && o.nativeDraggable && (J.draggable = !0), o._triggerDragStart(t, n), ot({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), ct(J, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        js(J, c.trim(), la);
      }), we(r, "dragover", Zt), we(r, "mousemove", Zt), we(r, "touchmove", Zt), we(r, "mouseup", o._onDrop), we(r, "touchend", o._onDrop), we(r, "touchcancel", o._onDrop), kr && this.nativeDraggable && (this.options.touchStartThreshold = 4, J.draggable = !0), st("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Jn || Tt))) {
        if (ce.eventCanceled) {
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
      }), this.nativeDraggable && we(document, "dragover", ly);
      var l = this.options;
      !t && ct(J, l.dragClass, !1), ct(J, l.ghostClass, !0), ce.active = this, t && this._appendGhost(), ot({
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
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, i = t.touches ? t.touches[0] : t, a = me && yn(me, !0), r = me && a && a.a, s = me && a && a.d, u = vl && et && Vr(et), c = (i.clientX - Xt.clientX + o.x) / (r || 1) + (u ? u[0] - na[0] : 0) / (r || 1), f = (i.clientY - Xt.clientY + o.y) / (s || 1) + (u ? u[1] - na[1] : 0) / (s || 1);
      if (!ce.active && !vn) {
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
        for (et = t; pe(et, "position") === "static" && pe(et, "transform") === "none" && et !== document; )
          et = et.parentNode;
        et !== document.body && et !== document.documentElement ? (et === document && (et = wt()), n.top += et.scrollTop, n.left += et.scrollLeft) : et = wt(), na = Vr(et);
      }
      me = J.cloneNode(!0), ct(me, l.ghostClass, !1), ct(me, l.fallbackClass, !0), ct(me, l.dragClass, !0), pe(me, "transition", ""), pe(me, "transform", ""), pe(me, "box-sizing", "border-box"), pe(me, "margin", 0), pe(me, "top", n.top), pe(me, "left", n.left), pe(me, "width", n.width), pe(me, "height", n.height), pe(me, "opacity", "0.8"), pe(me, "position", vl ? "absolute" : "fixed"), pe(me, "zIndex", "100000"), pe(me, "pointerEvents", "none"), ce.ghost = me, t.appendChild(me), pe(me, "transform-origin", Or / parseInt(me.style.width) * 100 + "% " + Er / parseInt(me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var l = this, o = t.dataTransfer, i = l.options;
    if (st("dragStart", this, {
      evt: t
    }), ce.eventCanceled) {
      this._onDrop();
      return;
    }
    st("setupClone", this), ce.eventCanceled || (je = Ds(J), je.removeAttribute("id"), je.draggable = !1, je.style["will-change"] = "", this._hideClone(), ct(je, this.options.chosenClass, !1), ce.clone = je), l.cloneId = Cl(function() {
      st("clone", l), !ce.eventCanceled && (l.options.removeCloneOnHide || Ie.insertBefore(je, J), l._hideClone(), ot({
        sortable: l,
        name: "clone"
      }));
    }), !n && ct(J, i.dragClass, !0), n ? (Nl = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (_e(document, "mouseup", l._onDrop), _e(document, "touchend", l._onDrop), _e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(l, o, J)), we(document, "drop", l), pe(J, "transform", "translateZ(0)")), vn = !0, l._dragStartId = Cl(l._dragStarted.bind(l, n, t)), we(document, "selectstart", l), jn = !0, Ln && pe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, i, a, r = this.options, s = r.group, u = ce.active, c = fl === s, f = r.sort, g = Qe || u, h, y = this, _ = !1;
    if (ga)
      return;
    function P(A, ee) {
      st(A, y, St({
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
      P("dragOverAnimationCapture"), y.captureAnimationState(), y !== g && g.captureAnimationState();
    }
    function k(A) {
      return P("dragOverCompleted", {
        insertion: A
      }), A && (c ? u._hideClone() : u._showClone(y), y !== g && (ct(J, Qe ? Qe.options.ghostClass : u.options.ghostClass, !1), ct(J, r.ghostClass, !0)), Qe !== y && y !== ce.active ? Qe = y : y === ce.active && Qe && (Qe = null), g === y && (y._ignoreWhileAnimating = l), y.animateAll(function() {
        P("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (l === J && !J.animated || l === n && !l.animated) && (pn = null), !r.dragoverBubble && !t.rootEl && l !== document && (J.parentNode[ut]._isOutsideThisEl(t.target), !A && Zt(t)), !r.dragoverBubble && t.stopPropagation && t.stopPropagation(), _ = !0;
    }
    function V() {
      dt = ht(J), Lt = ht(J, r.draggable), ot({
        sortable: y,
        name: "change",
        toEl: n,
        newIndex: dt,
        newDraggableIndex: Lt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = bt(l, r.draggable, n, !0), P("dragOver"), ce.eventCanceled)
      return _;
    if (J.contains(t.target) || l.animated && l.animatingX && l.animatingY || y._ignoreWhileAnimating === l)
      return k(!1);
    if (Nl = !1, u && !r.disabled && (c ? f || (a = ze !== Ie) : Qe === this || (this.lastPutMode = fl.checkPull(this, u, J, t)) && s.checkPut(this, u, J, t))) {
      if (h = this._getDirection(t, l) === "vertical", o = Re(J), P("dragOverValid"), ce.eventCanceled)
        return _;
      if (a)
        return ze = Ie, T(), this._hideClone(), P("revert"), ce.eventCanceled || (Jt ? Ie.insertBefore(J, Jt) : Ie.appendChild(J)), k(!0);
      var C = qa(n, r.draggable);
      if (!C || ry(t, h, this) && !C.animated) {
        if (C === J)
          return k(!1);
        if (C && n === t.target && (l = C), l && (i = Re(l)), hl(Ie, n, J, o, l, i, t, !!l) !== !1)
          return T(), C && C.nextSibling ? n.insertBefore(J, C.nextSibling) : n.appendChild(J), ze = n, V(), k(!0);
      } else if (C && iy(t, h, this)) {
        var D = kn(n, 0, r, !0);
        if (D === J)
          return k(!1);
        if (l = D, i = Re(l), hl(Ie, n, J, o, l, i, t, !1) !== !1)
          return T(), n.insertBefore(J, D), ze = n, V(), k(!0);
      } else if (l.parentNode === n) {
        i = Re(l);
        var $ = 0, O, N = J.parentNode !== n, Y = !ty(J.animated && J.toRect || o, l.animated && l.toRect || i, h), R = h ? "top" : "left", v = Sr(l, "top", "top") || Sr(J, "top", "top"), x = v ? v.scrollTop : void 0;
        pn !== l && (O = i[R], qn = !1, pl = !Y && r.invertSwap || N), $ = sy(t, l, i, h, Y ? 1 : r.swapThreshold, r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold, pl, pn === l);
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
          return (X === 1 || X === -1) && (W = X === 1), ga = !0, setTimeout(ay, 30), T(), W && !K ? n.appendChild(J) : l.parentNode.insertBefore(J, W ? K : l), v && Ms(v, 0, x - v.scrollTop), ze = J.parentNode, O !== void 0 && !pl && (kl = Math.abs(O - Re(l)[R])), V(), k(!0);
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
    }), ze = J && J.parentNode, dt = ht(J), Lt = ht(J, l.draggable), ce.eventCanceled) {
      this._nulling();
      return;
    }
    vn = !1, pl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ba(this.cloneId), ba(this._dragStartId), this.nativeDraggable && (_e(document, "drop", this), _e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && pe(document.body, "user-select", ""), pe(J, "transform", ""), t && (jn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), me && me.parentNode && me.parentNode.removeChild(me), (Ie === ze || Qe && Qe.lastPutMode !== "clone") && je && je.parentNode && je.parentNode.removeChild(je), J && (this.nativeDraggable && _e(J, "dragend", this), la(J), J.style["will-change"] = "", jn && !vn && ct(J, Qe ? Qe.options.ghostClass : this.options.ghostClass, !1), ct(J, this.options.chosenClass, !1), ot({
      sortable: this,
      name: "unchoose",
      toEl: ze,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ie !== ze ? (dt >= 0 && (ot({
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
    })), Qe && Qe.save()) : dt !== mn && dt >= 0 && (ot({
      sortable: this,
      name: "update",
      toEl: ze,
      originalEvent: t
    }), ot({
      sortable: this,
      name: "sort",
      toEl: ze,
      originalEvent: t
    })), ce.active && ((dt == null || dt === -1) && (dt = mn, Lt = Nn), ot({
      sortable: this,
      name: "end",
      toEl: ze,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    st("nulling", this), Ie = J = ze = me = Jt = je = wl = Nt = Xt = gt = jn = dt = Lt = mn = Nn = pn = Rn = Qe = fl = ce.dragged = ce.ghost = ce.clone = ce.active = null, ql.forEach(function(t) {
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
        J && (this._onDragOver(t), oy(t));
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
      n = l[o], bt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || cy(n));
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
      if (st("hideClone", this), ce.eventCanceled)
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
      if (st("showClone", this), ce.eventCanceled)
        return;
      J.parentNode == Ie && !this.options.group.revertClone ? Ie.insertBefore(je, J) : Jt ? Ie.insertBefore(je, Jt) : Ie.appendChild(je), this.options.group.revertClone && this.animate(J, je), pe(je, "display", ""), Nt = !1;
    }
  }
};
function oy(e) {
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
function ay() {
  ga = !1;
}
function iy(e, t, n) {
  var l = Re(kn(n.el, 0, n.options, !0)), o = zs(n.el, n.options, me), i = 10;
  return t ? e.clientX < o.left - i || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - i || e.clientY < l.bottom && e.clientX < l.left;
}
function ry(e, t, n) {
  var l = Re(qa(n.el, n.options.draggable)), o = zs(n.el, n.options, me), i = 10;
  return t ? e.clientX > o.right + i || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + i || e.clientX > l.right && e.clientY > l.top;
}
function sy(e, t, n, l, o, i, a, r) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, c = l ? n.top : n.left, f = l ? n.bottom : n.right, g = !1;
  if (!a) {
    if (r && kl < u * o) {
      if (!qn && (Rn === 1 ? s > c + u * i / 2 : s < f - u * i / 2) && (qn = !0), qn)
        g = !0;
      else if (Rn === 1 ? s < c + kl : s > f - kl)
        return -Rn;
    } else if (s > c + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return uy(t);
  }
  return g = g || a, g && (s < c + u * i / 2 || s > f - u * i / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function uy(e) {
  return ht(J) < ht(e) ? 1 : -1;
}
function cy(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function dy(e) {
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
  (ce.active || vn) && e.cancelable && e.preventDefault();
});
ce.utils = {
  on: we,
  off: _e,
  css: pe,
  find: js,
  is: function(t, n) {
    return !!bt(t, n, t, !1);
  },
  extend: Kb,
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
ce.get = function(e) {
  return e[ut];
};
ce.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (ce.utils = St(St({}, ce.utils), l.utils)), el.mount(l);
  });
};
ce.create = function(e, t) {
  return new ce(e, t);
};
ce.version = Wb;
var Fe = [], Tn, ya, _a = !1, oa, aa, Hl, Mn;
function fy() {
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
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : (_e(document, "pointermove", this._handleFallbackAutoScroll), _e(document, "touchmove", this._handleFallbackAutoScroll), _e(document, "mousemove", this._handleFallbackAutoScroll)), Br(), Sl(), Yb();
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
      var h = g, y = Re(h), _ = y.top, P = y.bottom, T = y.left, k = y.right, V = y.width, C = y.height, D = void 0, $ = void 0, O = h.scrollWidth, N = h.scrollHeight, Y = pe(h), R = h.scrollLeft, v = h.scrollTop;
      h === s ? (D = V < O && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), $ = C < N && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (D = V < O && (Y.overflowX === "auto" || Y.overflowX === "scroll"), $ = C < N && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var x = D && (Math.abs(k - o) <= a && R + V < O) - (Math.abs(T - o) <= a && !!R), S = $ && (Math.abs(P - i) <= a && v + C < N) - (Math.abs(_ - i) <= a && !!v);
      if (!Fe[f])
        for (var z = 0; z <= f; z++)
          Fe[z] || (Fe[z] = {});
      (Fe[f].vx != x || Fe[f].vy != S || Fe[f].el !== h) && (Fe[f].el = h, Fe[f].vx = x, Fe[f].vy = S, clearInterval(Fe[f].pid), (x != 0 || S != 0) && (u = !0, Fe[f].pid = setInterval(function() {
        l && this.layer === 0 && ce.active._onTouchMove(Hl);
        var K = Fe[this.layer].vy ? Fe[this.layer].vy * r : 0, W = Fe[this.layer].vx ? Fe[this.layer].vx * r : 0;
        typeof c == "function" && c.call(ce.dragged.parentNode[ut], W, K, e, Hl, Fe[this.layer].el) !== "continue" || Ms(Fe[this.layer].el, W, K);
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
ce.mount(new fy());
ce.mount(Wa, Ha);
const Mt = (e) => (He("data-v-09483bfa"), e = e(), We(), e), py = {
  class: "editor-built-in-control-commen-multiple"
}, vy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), hy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), my = {
  class: "flex mt24 options"
}, gy = {
  class: "select-group"
}, by = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), yy = ["onClick"], _y = {
  class: "add-btn"
}, $y = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), wy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), ky = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), Cy = {
  class: "flex mt24 options"
}, Sy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), Vy = {
  class: "flex mt24 options"
}, Oy = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少选择数", -1)), Ey = {
  class: "pl24"
}, xy = {
  class: "flex mt24 options"
}, By = /* @__PURE__ */ Mt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多选择数", -1)), Iy = {
  class: "pl24"
}, Py = /* @__PURE__ */ F({
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
      new ce(a, {
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
      return b(), E("div", py, [vy, hy, p("div", my, [p("ul", gy, [(b(!0), E(ke, null, Xe(e.block.props.options.defaultValue, (f, g) => (b(), E("li", {
        key: f.key,
        class: "useDrag"
      }, [by, d(s, {
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
      }, null, 8, yy)]))), 128)), p("div", _y, [d(u, {
        style: {
          width: "254px"
        },
        onClick: i
      }, {
        default: le(() => [$y, wy]),
        _: 1
      })])])]), ky, p("div", Cy, [Sy, p("div", null, [d(c, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: r[0] || (r[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", Vy, [Oy, p("div", Ey, [d(s, {
        modelValue: e.block.props.selectMin.defaultValue,
        "onUpdate:modelValue": r[1] || (r[1] = (f) => e.block.props.selectMin.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", xy, [By, p("div", Iy, [d(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": r[2] || (r[2] = (f) => e.block.props.selectMax.defaultValue = f),
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
const jy = /* @__PURE__ */ Se(Py, [["__scopeId", "data-v-09483bfa"]]), Ty = {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  // formItemField: "1",
  value: [],
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  render: (e) => {
    var n;
    let t = e.props;
    return d(Nb, {
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
  controlView: (e, t) => d(jy, {
    block: e
  })
}, Hs = (e) => (He("data-v-877ba51a"), e = e(), We(), e), My = {
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
  key: 1,
  class: "form-item"
}, Ly = /* @__PURE__ */ Hs(() => /* @__PURE__ */ p("div", {
  class: "right"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), Fy = {
  key: 2,
  class: "form-item-pu"
}, Ny = /* @__PURE__ */ Hs(() => /* @__PURE__ */ p("div", {
  class: "control-input"
}, null, -1)), Ry = {
  class: "text"
}, qy = /* @__PURE__ */ F({
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
      Ye.warning("请在移动端预览真机效果！");
    }
    return (n, l) => (b(), E("div", {
      class: "editor-built-in-commen-radio",
      style: ve(e.style)
    }, [p("div", My, [e.isRequire ? (b(), E("span", Dy, "*")) : te("", !0), p("span", null, se(e.title), 1)]), e.tip.trim().length > 0 ? (b(), E("div", zy, se(e.tip), 1)) : te("", !0), e.showType == "1" ? (b(), E("div", Ay, [p("div", {
      class: "item",
      onClick: t
    }, [p("span", null, se(e.placeholder), 1), Ly])])) : te("", !0), e.showType == "2" ? (b(), E("div", Fy, [(b(!0), E(ke, null, Xe(e.options, (o, i) => (b(), E("div", {
      class: "item",
      key: i
    }, [Ny, p("div", Ry, se(o.name ? o.name : "请填写内容"), 1)]))), 128))])) : te("", !0)], 4));
  }
});
const Hy = /* @__PURE__ */ Se(qy, [["__scopeId", "data-v-877ba51a"]]), un = (e) => (He("data-v-6565436c"), e = e(), We(), e), Wy = {
  class: "editor-built-in-control-commen-radio"
}, Uy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), Ky = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), Yy = {
  class: "flex mt24 options"
}, Gy = {
  class: "select-group"
}, Xy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), Zy = ["onClick"], Qy = {
  class: "add-btn"
}, Jy = /* @__PURE__ */ un(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), e0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), t0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), n0 = {
  class: "flex mt24 options"
}, l0 = /* @__PURE__ */ un(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), o0 = /* @__PURE__ */ F({
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
      new ce(a, {
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
      return b(), E("div", Wy, [Uy, Ky, p("div", Yy, [p("ul", Gy, [(b(!0), E(ke, null, Xe(e.block.props.options.defaultValue, (f, g) => (b(), E("li", {
        key: f.key,
        class: "useDrag"
      }, [Xy, d(s, {
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
      }, null, 8, Zy)]))), 128)), p("div", Qy, [d(u, {
        style: {
          width: "254px"
        },
        onClick: i
      }, {
        default: le(() => [Jy, e0]),
        _: 1
      })])])]), t0, p("div", n0, [l0, p("div", null, [d(c, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: r[0] || (r[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const a0 = /* @__PURE__ */ Se(o0, [["__scopeId", "data-v-6565436c"]]), i0 = {
  group: "个人信息（自定义）",
  name: "commenRadio",
  value: "",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  render: (e) => {
    var n, l;
    let t = e.props;
    return d(Hy, {
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
  controlView: (e, t) => d(a0, {
    block: e
  })
}, Ws = (e) => (He("data-v-147689a0"), e = e(), We(), e), r0 = {
  class: "title-tip mb8"
}, s0 = {
  key: 0,
  class: "red"
}, u0 = {
  key: 0,
  class: "base-tip"
}, c0 = {
  class: "form-item"
}, d0 = {
  class: "item"
}, f0 = {
  class: "item flex"
}, p0 = {
  class: "input"
}, v0 = /* @__PURE__ */ Ws(() => /* @__PURE__ */ p("div", {
  class: "success"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), h0 = /* @__PURE__ */ Ws(() => /* @__PURE__ */ p("div", {
  class: "button"
}, "发送验证码", -1)), m0 = /* @__PURE__ */ F({
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
      return b(), E("div", {
        class: "editor-built-in-check-phone",
        style: ve(e.style)
      }, [p("div", r0, [e.isRequire ? (b(), E("span", s0, "*")) : te("", !0), p("span", null, se(e.title), 1)]), e.tip.trim().length > 0 ? (b(), E("div", u0, se(e.tip), 1)) : te("", !0), p("div", c0, [p("div", d0, [d(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder
      }, null, 8, ["placeholder"])]), p("div", f0, [p("div", p0, [d(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          flex: "1"
        },
        placeholder: "验证码"
      }), v0]), h0])])], 4);
    };
  }
});
const g0 = /* @__PURE__ */ Se(m0, [["__scopeId", "data-v-147689a0"]]), tl = (e) => (He("data-v-f4a10f1d"), e = e(), We(), e), b0 = {
  class: "editor-built-in-control-check-phone"
}, y0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), _0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), $0 = {
  class: "flex mt24 options"
}, w0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), k0 = {
  class: "flex mt24 options"
}, C0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), S0 = {
  key: 0,
  class: "flex mt24 options"
}, V0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "校验周期（h）", -1)), O0 = {
  class: "pl24"
}, E0 = /* @__PURE__ */ F({
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
      return b(), E("div", b0, [y0, _0, p("div", $0, [w0, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", k0, [C0, p("div", null, [d(i, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (b(), E("div", S0, [V0, p("div", O0, [d(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.cycle.defaultValue = r),
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
const x0 = /* @__PURE__ */ Se(E0, [["__scopeId", "data-v-f4a10f1d"]]), B0 = {
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
    return d(g0, {
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
  controlView: (e, t) => d(x0, {
    block: e
  })
}, I0 = {
  class: "title-tip mb8"
}, P0 = {
  key: 0,
  class: "red"
}, j0 = {
  key: 0,
  class: "base-tip"
}, T0 = {
  class: "form-item"
}, M0 = /* @__PURE__ */ F({
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
      return b(), E("div", {
        class: "editor-built-in-registor-person-name",
        style: ve(e.style)
      }, [p("div", I0, [e.isRequire ? (b(), E("span", P0, "*")) : te("", !0), p("span", null, se(e.title), 1)]), e.tip.trim().length > 0 ? (b(), E("div", j0, se(e.tip), 1)) : te("", !0), p("div", T0, [d(l, {
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
const ao = /* @__PURE__ */ Se(M0, [["__scopeId", "data-v-c06a8f65"]]), cn = (e) => (He("data-v-05a6c9a4"), e = e(), We(), e), D0 = {
  class: "editor-built-in-control-person-name"
}, z0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), A0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), L0 = {
  class: "flex mt24 options"
}, F0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), N0 = {
  class: "flex mt24 options"
}, R0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), q0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), H0 = {
  class: "flex mt24 options"
}, W0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), U0 = {
  class: "pl24"
}, K0 = {
  class: "flex mt24 options"
}, Y0 = /* @__PURE__ */ cn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), G0 = {
  class: "pl24 flex"
}, X0 = /* @__PURE__ */ F({
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
      return b(), E("div", D0, [z0, A0, p("div", L0, [F0, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", N0, [R0, p("div", null, [d(i, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "only"))
      }, null, 8, ["default-checked"])])]), q0, p("div", H0, [W0, p("div", U0, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.min.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", K0, [Y0, p("div", G0, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (r) => e.block.props.max.defaultValue = r),
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
const Z0 = /* @__PURE__ */ Se(X0, [["__scopeId", "data-v-05a6c9a4"]]), Q0 = {
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
  controlView: (e, t) => d(Z0, {
    block: e
  })
}, On = (e) => (He("data-v-3fd74b8f"), e = e(), We(), e), J0 = {
  class: "editor-built-in-control-person-other"
}, e1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), t1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), n1 = {
  class: "flex mt24 options"
}, l1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), o1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), a1 = {
  class: "flex mt24 options"
}, i1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), r1 = {
  class: "pl24"
}, s1 = {
  class: "flex mt24 options"
}, u1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), c1 = {
  class: "pl24 flex"
}, d1 = /* @__PURE__ */ F({
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
      return b(), E("div", J0, [e1, t1, p("div", n1, [l1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), o1, p("div", a1, [i1, p("div", r1, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (r) => e.block.props.min.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", s1, [u1, p("div", c1, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.max.defaultValue = r),
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
const f1 = /* @__PURE__ */ Se(d1, [["__scopeId", "data-v-3fd74b8f"]]), p1 = {
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
  controlView: (e, t) => d(f1, {
    block: e
  })
}, nl = (e) => (He("data-v-df798f6e"), e = e(), We(), e), v1 = {
  class: "editor-built-in-control-person-phone"
}, h1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), m1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), g1 = {
  class: "flex mt24 options"
}, b1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), y1 = {
  class: "flex mt24 options"
}, _1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), $1 = {
  key: 0,
  class: "flex mt24 options"
}, w1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "校验周期（h）", -1)), k1 = {
  class: "pl24"
}, C1 = /* @__PURE__ */ F({
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
      return b(), E("div", v1, [h1, m1, p("div", g1, [b1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", y1, [_1, p("div", null, [d(i, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (r) => n(r, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (b(), E("div", $1, [w1, p("div", k1, [d(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.cycle.defaultValue = r),
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
const S1 = /* @__PURE__ */ Se(C1, [["__scopeId", "data-v-df798f6e"]]), V1 = {
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
  controlView: (e, t) => d(S1, {
    block: e
  })
}, O1 = (e) => (He("data-v-0cd61663"), e = e(), We(), e), E1 = {
  class: "title-tip"
}, x1 = {
  key: 0,
  class: "red"
}, B1 = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, I1 = {
  class: "item"
}, P1 = /* @__PURE__ */ O1(() => /* @__PURE__ */ p("div", {
  class: "right"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), j1 = /* @__PURE__ */ F({
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
    return (n, l) => (b(), E("div", {
      class: "editor-built-in-commen-radio",
      style: ve(e.style)
    }, [p("div", E1, [e.isRequire ? (b(), E("span", x1, "*")) : te("", !0), p("span", null, se(e.title), 1)]), e.tip.trim().length > 0 ? (b(), E("div", B1, se(e.tip), 1)) : te("", !0), p("div", {
      class: "form-item",
      onClick: t
    }, [p("div", I1, [p("span", null, se(e.placeholder), 1), P1])])], 4));
  }
});
const T1 = /* @__PURE__ */ Se(j1, [["__scopeId", "data-v-0cd61663"]]), Ua = (e) => (He("data-v-fcdbe6a9"), e = e(), We(), e), M1 = {
  class: "editor-built-in-control-person-school"
}, D1 = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), z1 = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), A1 = {
  class: "flex mt24 options"
}, L1 = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), F1 = /* @__PURE__ */ F({
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
      return b(), E("div", M1, [D1, z1, p("div", A1, [L1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const N1 = /* @__PURE__ */ Se(F1, [["__scopeId", "data-v-fcdbe6a9"]]), R1 = {
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
    return d(T1, {
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
  controlView: (e, t) => d(N1, {
    block: e
  })
}, En = (e) => (He("data-v-1418313e"), e = e(), We(), e), q1 = {
  class: "editor-built-in-control-person-school"
}, H1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), W1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), U1 = {
  class: "flex mt24 options"
}, K1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), Y1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), G1 = {
  class: "flex mt24 options"
}, X1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), Z1 = {
  class: "pl24"
}, Q1 = {
  class: "flex mt24 options"
}, J1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), e_ = {
  class: "pl24 flex"
}, t_ = /* @__PURE__ */ F({
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
      return b(), E("div", q1, [H1, W1, p("div", U1, [K1, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (r) => n(r, "isRequire"))
      }, null, 8, ["default-checked"])])]), Y1, p("div", G1, [X1, p("div", Z1, [d(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (r) => e.block.props.min.defaultValue = r),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: le(() => [Ce(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", Q1, [J1, p("div", e_, [d(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (r) => e.block.props.max.defaultValue = r),
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
const n_ = /* @__PURE__ */ Se(t_, [["__scopeId", "data-v-1418313e"]]), l_ = {
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
  controlView: (e, t) => d(n_, {
    block: e
  })
}, o_ = (e) => (He("data-v-22530c73"), e = e(), We(), e), a_ = {
  class: "title-tip mb8"
}, i_ = {
  key: 0,
  class: "red"
}, r_ = {
  class: "form-item"
}, s_ = /* @__PURE__ */ o_(() => /* @__PURE__ */ p("div", {
  class: "btn"
}, [/* @__PURE__ */ p("span", null, "上传文件"), /* @__PURE__ */ p("input", {
  type: "file",
  class: "file"
})], -1)), u_ = {
  key: 0,
  class: "tip title-tip"
}, c_ = /* @__PURE__ */ F({
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
    return (t, n) => (b(), E("div", {
      class: "editor-built-in-person-upload",
      style: ve(e.style)
    }, [p("div", a_, [e.isRequire ? (b(), E("span", i_, "*")) : te("", !0), p("span", null, se(e.title), 1)]), p("div", r_, [s_, e.tip ? (b(), E("div", u_, se(e.tip), 1)) : te("", !0)])], 4));
  }
});
const d_ = /* @__PURE__ */ Se(c_, [["__scopeId", "data-v-22530c73"]]), Ka = (e) => (He("data-v-be68881f"), e = e(), We(), e), f_ = {
  class: "editor-built-in-control-person-upload"
}, p_ = /* @__PURE__ */ Ka(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), v_ = /* @__PURE__ */ Ka(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), h_ = {
  class: "flex mt24 options"
}, m_ = /* @__PURE__ */ Ka(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), g_ = /* @__PURE__ */ F({
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
      return b(), E("div", f_, [p_, v_, p("div", h_, [m_, p("div", null, [d(i, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const b_ = /* @__PURE__ */ Se(g_, [["__scopeId", "data-v-be68881f"]]), y_ = {
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
    return d(d_, {
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
  controlView: (e, t) => d(b_, {
    block: e
  })
}, ll = (e) => (He("data-v-efa7717d"), e = e(), We(), e), __ = {
  class: "editor-built-in-control-person-year"
}, $_ = {
  class: "form-item"
}, w_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "title"
}, "默认值", -1)), k_ = {
  class: "opts"
}, C_ = {
  class: "form-item"
}, S_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "title"
}, "设置年级选项", -1)), V_ = {
  class: "opts"
}, O_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), E_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), x_ = {
  class: "flex mt24 options"
}, B_ = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), I_ = /* @__PURE__ */ F({
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
      }, {
        name: "未知",
        value: "0"
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
      const f = nn, g = Ql, h = ns, y = bl, _ = $t;
      return b(), E("div", null, [p("div", __, [p("div", $_, [w_, p("div", k_, [d(g, {
        placeholder: "请选择默认值",
        "model-value": e.block.props.value ? e.block.props.value.defaultValue : "",
        onChange: s
      }, {
        default: le(() => [(b(!0), E(ke, null, Xe(a(), (P, T) => (b(), ie(f, {
          value: P.value
        }, {
          default: le(() => [Ce(se(P.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["model-value"])])]), p("div", C_, [S_, p("div", V_, [d(y, {
        "default-value": i(),
        onChange: r
      }, {
        default: le(() => [(b(!0), E(ke, null, Xe(Kl(l), (P, T) => (b(), ie(h, {
          value: P.value,
          class: "opt"
        }, {
          default: le(() => [Ce(se(P.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["default-value"])])]), O_, E_, p("div", x_, [B_, p("div", null, [d(_, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: c[0] || (c[0] = (P) => n(P, "isRequire"))
      }, null, 8, ["default-checked"])])])])]);
    };
  }
});
const P_ = /* @__PURE__ */ Se(I_, [["__scopeId", "data-v-efa7717d"]]), j_ = {
  class: "title-tip mb8"
}, T_ = {
  key: 0,
  class: "red"
}, M_ = {
  key: 0,
  class: "base-tip",
  style: {
    "margin-top": "6px"
  }
}, D_ = {
  class: "form-item"
}, z_ = /* @__PURE__ */ F({
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
      return b(), E("div", {
        class: "editor-built-in-person-year",
        style: ve(e.style)
      }, [p("div", j_, [e.isRequire ? (b(), E("span", T_, "*")) : te("", !0), p("span", null, se(e.title), 1)]), e.tip.trim().length > 0 ? (b(), E("div", M_, se(e.tip), 1)) : te("", !0), p("div", D_, [d(o, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder,
        "model-value": e.value
      }, {
        default: le(() => [(b(!0), E(ke, null, Xe(e.options, (i) => (b(), ie(l, {
          value: i.id + ""
        }, {
          default: le(() => [Ce(se(i.name), 1)]),
          _: 2
        }, 1032, ["value"]))), 256))]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const A_ = /* @__PURE__ */ Se(z_, [["__scopeId", "data-v-3845df2c"]]), L_ = {
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
    return d(A_, {
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
  controlView: (e, t) => d(P_, {
    block: e
  })
}, ra = {
  baseText: Xg,
  baseImg: tb,
  baseSubmit: _b,
  baseTitle: kb,
  baseSuccess: Pb,
  commenMultiple: Ty,
  commenRadio: i0,
  checkPhone: B0,
  personName: Q0,
  personOther: p1,
  personPhone: V1,
  personProvince: R1,
  personSchool: l_,
  personUpload: y_,
  personYear: L_
};
function Us(e, t, n = "push") {
  t.forEach((l) => {
    if (ra[l])
      e.registry(l, ra[l], n);
    else {
      let o = Object.keys(ra);
      console.error(`内置组件不合法，仅支持：${o.join(",")}共${o.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const Ks = ["baseImg", "baseSubmit", "baseText", "baseTitle", "baseSuccess", "checkPhone", "personName", "personOther", "personPhone", "personProvince", "personSchool", "personUpload", "personYear", "commenMultiple", "commenRadio"], io = (e) => (He("data-v-a82634a3"), e = e(), We(), e), F_ = {
  class: "visual-tab-type"
}, N_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), R_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("span", null, "组件", -1)), q_ = [N_, R_], H_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), W_ = /* @__PURE__ */ io(() => /* @__PURE__ */ p("span", null, "页面", -1)), U_ = [H_, W_], K_ = /* @__PURE__ */ F({
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
    return (l, o) => (b(), E("div", F_, [p("div", {
      class: G(["visual-tab-type-com", {
        active: e.modelValue == "1"
      }]),
      onClick: o[0] || (o[0] = (i) => n("1"))
    }, q_, 2), p("div", {
      class: G(["visual-tab-type-com visual-tab-type-template", {
        active: e.modelValue == "2"
      }]),
      onClick: o[1] || (o[1] = (i) => n("2"))
    }, U_, 2)]));
  }
});
const Ir = /* @__PURE__ */ Se(K_, [["__scopeId", "data-v-a82634a3"]]), Y_ = {
  class: "buttons"
}, G_ = ["onClick"], X_ = ["src"], Z_ = /* @__PURE__ */ F({
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
      return b(), E("div", Y_, [(b(!0), E(ke, null, Xe(e.buttons, (i, a) => (b(), E("div", {
        class: "button",
        key: a,
        onClick: i.handler
      }, [(b(), ie(o, {
        content: t(i),
        position: "right",
        key: a
      }, {
        default: le(() => [p("img", {
          src: i.icon,
          alt: ""
        }, null, 8, X_)]),
        _: 2
      }, 1032, ["content"]))], 8, G_))), 128))]);
    };
  }
});
const Q_ = /* @__PURE__ */ Se(Z_, [["__scopeId", "data-v-b334d714"]]), J_ = /* @__PURE__ */ F({
  components: {
    editorBlock: zl,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: $r,
    leftNav: Ir,
    shortcutButton: Q_
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
      default: () => Ks
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
    (R = e == null ? void 0 : e.builtInComs) != null && R.length && Us(at, e.builtInComs, e.pushType), e.fileUploadHandler && Object.defineProperty(window.visualSystem, "fileUploadHandler", {
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
      (((v = e.modelValue) == null ? void 0 : v.blocks) || []).map((x) => (x.focus = !1, x));
    }
    function u(v) {
      D.cacheView = null, i.value = {
        ...i.value,
        blocks: Ne(v)
      };
    }
    function c(v) {
      i.value.blocks.forEach((x) => {
        if (v.id == x.id)
          for (let S in x)
            D.cacheView = null, x[S] = Ne(v[S]);
      });
    }
    function f(v) {
      let x = document.querySelectorAll(".editor-bloack");
      x && (x = Array.from(x)), x.forEach((S) => {
        S.classList.remove("editor-bloack-drag-active");
      }), v && v.classList.add("editor-bloack-drag-active");
    }
    const g = B(null), h = function() {
      let v = {
        component: null
      }, x = {
        dragstart(S, z) {
          var K, W, X, A;
          (K = g.value) == null || K.addEventListener("dragenter", x.dragenter), (W = g.value) == null || W.addEventListener("dragover", x.dragover), (X = g.value) == null || X.addEventListener("dragleave", x.dragleave), (A = g.value) == null || A.addEventListener("drop", x.drop), v.component = z, Al.emit();
        },
        dragenter(S) {
          Array.from(S.target.classList).includes("editor-bloack") ? f(S.target) : f(), S.dataTransfer.dropEffect = "move";
        },
        dragleave(S) {
          S.dataTransfer.dropEffect = "none";
        },
        dragend(S) {
          var z, K, W, X;
          (z = g.value) == null || z.removeEventListener("dragenter", x.dragenter), (K = g.value) == null || K.removeEventListener("dragover", x.dragover), (W = g.value) == null || W.removeEventListener("dragleave", x.dragleave), (X = g.value) == null || X.removeEventListener("drop", x.drop), v.component = null, Ll.emit(), f();
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
      return x;
    }(), y = m(() => {
      var v, x, S;
      return {
        blurBlock: (v = e.modelValue) == null ? void 0 : v.blocks.filter((z) => !z.focus),
        // 当前失去焦点的模块
        focusBlock: (x = e.modelValue) == null ? void 0 : x.blocks.filter((z) => z.focus),
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
      function x(A) {
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
            left: ue,
            top: Be
          } = Q.getBoundingClientRect();
          ee < he + ue && ee > ue && I < ye + Be && I > Be && v.block.id != q.id && (f(Q), v.sortEndBlock = q, w = !0);
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
        Math.abs(A.clientY - v.clientY) > 10 && (v.draging || (v.draging = !0), v.ele.style.width = v.positionInfo.width + "px", v.ele.style.height = v.positionInfo.height + "px", v.ele.style.left = ee + "px", v.ele.style.top = I + "px", v.ele.style.position = "fixed", v.ele.style.zIndex = "10", v.ele.style.transition = "none", x({
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
        onMousedown(v, x) {
          v.stopPropagation(), v.preventDefault(), s(), x.focus = !x.focus, a.selectedBlock = x, T.mousedown(v), e.dragMove && _.mousedown(v, x);
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
      function x(K) {
        var W, X, A;
        v.startX = K.clientX, v.startY = K.clientY, v.startPositon = (W = y.value.focusBlock || []) == null ? void 0 : W.map((ee) => ({
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
        (I = y.value.focusBlock) == null || I.forEach((w, q) => {
          w.left = v.startPositon[q].left + (W - A), w.top = v.startPositon[q].top + (X - ee);
        });
      }
      function z(K) {
        document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", z), Ll.emit();
      }
      return {
        mousedown: x
      };
    }(), k = Hm({
      currentBlockInfo: y,
      updateBlocks: u,
      dataModel: i,
      shortcutKeys: o
    }), V = Rm(k, y, e.debug, e);
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
        if (((S = this.originData) == null ? void 0 : S.id) === ((z = y.value.cBlock) == null ? void 0 : z.id) && this.cacheView)
          return this.cacheView;
        let v = (K = y.value.cBlock) == null ? void 0 : K.componentKey, x = at == null ? void 0 : at.componentMap;
        return v && x && y.value.cBlock ? (this.originData = Ne(y.value.cBlock), this.cacheView = x[v].controlView(y.value.cBlock, c), this.cacheView) : null;
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
      componentLists: at == null ? void 0 : at.componentLists,
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
    }, [i.value.blocks.map((v, x) => {
      var S;
      return d("div", null, [d(zl, {
        index: x,
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
    }, [d(de("shortcut-button"), {
      buttons: V
    }, null)]), d("div", {
      class: "visual-editor-right-seting"
    }, [dg(D.controlRender.bind(D), y, e.modelValue)])])]);
  }
});
const e$ = /* @__PURE__ */ F({
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
    Us(at, Ks);
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
}), Ys = at.registry, Gs = J_, t$ = e$, n$ = function(e, t = "push") {
  Ys(e.name, e, t), Es.emit(e);
}, l$ = function(e) {
  Gs.batchRegistry(e);
}, o$ = function() {
  return at == null ? void 0 : at.componentLists;
}, r$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: Ys,
  batchRegistry: l$,
  logConfig: o$,
  priviewVisualEditor: t$,
  registry: n$,
  visualEditor: Gs
}, Symbol.toStringTag, { value: "Module" }));
export {
  r$ as all,
  l$ as batchRegistry,
  r$ as default,
  o$ as logConfig,
  t$ as priviewVisualEditor,
  n$ as registry,
  Gs as visualEditor
};
