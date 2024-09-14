var Rs = Object.defineProperty;
var qs = (e, t, n) => t in e ? Rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ua = (e, t, n) => (qs(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as B, watch as be, computed as v, reactive as Pe, inject as We, getCurrentInstance as Kn, cloneVNode as ql, defineComponent as L, onMounted as xe, onUnmounted as Hl, openBlock as _, createElementBlock as j, normalizeClass as K, renderSlot as re, normalizeStyle as me, createElementVNode as h, resolveComponent as ce, createBlock as de, createCommentVNode as le, toRef as Cl, toRefs as $e, createVNode as c, mergeProps as Se, createTextVNode as ge, nextTick as Le, provide as Ht, Fragment as ze, createSlots as xi, withCtx as ne, withModifiers as nn, onUpdated as Pt, onBeforeUnmount as Wt, readonly as Hs, onDeactivated as Ws, Teleport as Us, Transition as Sl, withDirectives as ba, vShow as ya, resolveDynamicComponent as tn, toDisplayString as ye, renderList as wt, TransitionGroup as Bi, watchEffect as Ks, isVNode as _a, render as Ka, Comment as Ys, pushScopeId as Ue, popScopeId as Ke } from "vue";
const Ya = function(e) {
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
function Gs() {
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
let rt = Gs();
function Ii(e, t) {
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
function De(e) {
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
function kt(e) {
  return Sn.call(e) === "[object String]";
}
function he(e) {
  return Sn.call(e) === "[object Number]" && e === e;
}
function Xe(e) {
  return e === void 0;
}
function Je(e) {
  return typeof e == "function";
}
function Xs(e) {
  return Ve(e) && Object.keys(e).length === 0;
}
const Pi = (e) => (e == null ? void 0 : e.$) !== void 0, on = Symbol("ArcoConfigProvider"), ol = {
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
}, Zs = {
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
}, Qs = B("zh-CN"), Js = Pe({
  "zh-CN": Zs
}), $a = () => {
  const e = We(on, void 0), t = v(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : Js[Qs.value];
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
      return kt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var d;
        return (d = r[u]) != null ? d : s;
      }) : i;
    }
  };
};
var eu = Object.defineProperty, tu = Object.defineProperties, nu = Object.getOwnPropertyDescriptors, Ga = Object.getOwnPropertySymbols, lu = Object.prototype.hasOwnProperty, ou = Object.prototype.propertyIsEnumerable, Xa = (e, t, n) => t in e ? eu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, au = (e, t) => {
  for (var n in t || (t = {}))
    lu.call(t, n) && Xa(e, n, t[n]);
  if (Ga)
    for (var n of Ga(t))
      ou.call(t, n) && Xa(e, n, t[n]);
  return e;
}, ru = (e, t) => tu(e, nu(t));
const iu = "A", su = "arco", aa = "$arco", qe = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : iu;
}, He = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[aa] = ru(au({}, (n = e.config.globalProperties[aa]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ee = (e) => {
  var t, n, l;
  const o = Kn(), r = We(on, void 0), a = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[aa]) == null ? void 0 : t.classPrefix) != null ? l : su;
  return e ? `${a}-${e}` : a;
};
var ji = function() {
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
}(), uu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Vl) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), cu = 2;
function du(e, t) {
  var n = !1, l = !1, o = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function a() {
    uu(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < cu)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return i;
}
var fu = 20, pu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vu = typeof MutationObserver < "u", hu = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = du(this.refresh.bind(this), fu);
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
      !ra || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ra || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = pu.some(function(r) {
        return !!~l.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ti = function(e, t) {
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
}, Mi = Ul(0, 0, 0, 0);
function El(e) {
  return parseFloat(e) || 0;
}
function Za(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var r = e["border-" + o + "-width"];
    return l + El(r);
  }, 0);
}
function mu(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var r = o[l], a = e["padding-" + r];
    n[r] = El(a);
  }
  return n;
}
function gu(e) {
  var t = e.getBBox();
  return Ul(0, 0, t.width, t.height);
}
function bu(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Mi;
  var l = $n(e).getComputedStyle(e), o = mu(l), r = o.left + o.right, a = o.top + o.bottom, i = El(l.width), s = El(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= Za(l, "left", "right") + r), Math.round(s + a) !== n && (s -= Za(l, "top", "bottom") + a)), !_u(e)) {
    var u = Math.round(i + r) - t, d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return Ul(o.left, o.top, i, s);
}
var yu = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof $n(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof $n(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function _u(e) {
  return e === $n(e).document.documentElement;
}
function $u(e) {
  return ra ? yu(e) ? gu(e) : bu(e) : Mi;
}
function wu(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return Ti(a, {
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
var ku = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ul(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = $u(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Cu = (
  /** @class */
  function() {
    function e(t, n) {
      var l = wu(n);
      Ti(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), Su = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new ji(), typeof t != "function")
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
        n.has(t) || (n.set(t, new ku(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Cu(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Di = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ji(), zi = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = hu.getInstance(), l = new Su(t, n, this);
      Di.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  zi.prototype[e] = function() {
    var t;
    return (t = Di.get(this))[e].apply(t, arguments);
  };
});
var wa = function() {
  return typeof Vl.ResizeObserver < "u" ? Vl.ResizeObserver : zi;
}(), Qa;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Qa || (Qa = {}));
var Ja;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Ja || (Ja = {}));
const Kl = (e) => Boolean(e && e.shapeFlag & 1), Yn = (e, t) => Boolean(e && e.shapeFlag & 6), Vu = (e, t) => Boolean(e && e.shapeFlag & 8), ka = (e, t) => Boolean(e && e.shapeFlag & 16), Ai = (e, t) => Boolean(e && e.shapeFlag & 32), hn = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Kl(l) || Yn(l))
        return l;
      if (ka(l, l.children)) {
        const o = hn(l.children);
        if (o)
          return o;
      } else if (Ai(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const r = hn(o);
          if (r)
            return r;
        }
      } else if (De(l)) {
        const o = hn(l);
        if (o)
          return o;
      }
    }
}, Eu = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Li = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Kl(l) || Yn(l)) {
        const r = Je(t) ? t(l) : t;
        return e[n] = ql(l, r, !0), !0;
      }
      const o = Ca(l);
      if (o && o.length > 0 && Li(o, t))
        return !0;
    }
  return !1;
}, Ca = (e) => {
  if (ka(e, e.children))
    return e.children;
  if (De(e))
    return e;
}, Fi = (e) => {
  var t, n;
  if (Kl(e))
    return e.el;
  if (Yn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Fi(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = Ca(e);
    return Ni(l);
  }
}, Ni = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Fi(t);
      if (n)
        return n;
    }
}, hl = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const r of e ?? [])
    Kl(r) || Yn(r) || t && Vu(r, r.children) ? o.push(r) : ka(r, r.children) ? o.push(...hl(r.children, t)) : Ai(r, r.children) ? o.push(...hl((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : De(r) && o.push(...hl(r, t));
  return o;
}, er = (e) => {
  if (e)
    return Je(e) ? e : () => e;
}, Ri = (e, t) => {
  var n;
  const l = [];
  if (Yn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Ri(e.component.subTree, t));
  else {
    const o = Ca(e);
    o && l.push(...qi(o, t));
  }
  return l;
}, qi = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Ri(l, t));
  return n;
};
var Ol = L({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = B(), r = v(() => Pi(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new wa((u) => {
        const d = u[0];
        t("resize", d);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return be(r, (s) => {
      l && i(), s && a(s);
    }), xe(() => {
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
const Hi = typeof window > "u" ? global : window, Ou = Hi.requestAnimationFrame, tr = Hi.cancelAnimationFrame;
function nr(e) {
  let t = 0;
  const n = (...l) => {
    t && tr(t), t = Ou(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    tr(t), t = 0;
  }, n;
}
const Sa = () => {
}, xu = () => {
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
})(), Ot = (() => Va ? Sa : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), wn = (() => Va ? Sa : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), Bu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, Iu = (e, t) => {
  var n;
  return Va ? Sa() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, lr = (e, t) => {
  if (kt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Iu(n, t);
  }
  return e;
}, Pu = (e, t) => {
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
const ju = L({
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
function Tu(e, t, n, l, o, r) {
  return _(), j("span", {
    class: K([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [re(e.$slots, "default")], 2);
}
var ct = /* @__PURE__ */ se(ju, [["render", Tu]]);
const Mu = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Du = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zu = /* @__PURE__ */ h("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Au = [zu];
function Lu(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Au, 14, Du);
}
var ro = /* @__PURE__ */ se(Mu, [["render", Lu]]);
const an = Object.assign(ro, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ro.name, ro);
  }
}), Fu = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Nu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ru = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), qu = [Ru];
function Hu(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, qu, 14, Nu);
}
var io = /* @__PURE__ */ se(Fu, [["render", Hu]]);
const Wu = Object.assign(io, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + io.name, io);
  }
}), Uu = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ku = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yu = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Gu = [Yu];
function Xu(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Gu, 14, Ku);
}
var so = /* @__PURE__ */ se(Uu, [["render", Xu]]);
const Wi = Object.assign(so, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + so.name, so);
  }
}), Zu = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Qu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ju = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ec = [Ju];
function tc(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ec, 14, Qu);
}
var uo = /* @__PURE__ */ se(Zu, [["render", tc]]);
const Ui = Object.assign(uo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + uo.name, uo);
  }
}), nc = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), lc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], oc = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ac = [oc];
function rc(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ac, 14, lc);
}
var co = /* @__PURE__ */ se(nc, [["render", rc]]);
const Ki = Object.assign(co, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + co.name, co);
  }
});
function or(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function ar(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function fo(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return ar(n.overflowY, t) || ar(n.overflowX, t) || function(l) {
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
var rr = function(e, t) {
  var n = window, l = t.scrollMode, o = t.block, r = t.inline, a = t.boundary, i = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(M) {
    return M !== a;
  };
  if (!or(e))
    throw new TypeError("Invalid target");
  for (var u, d, f = document.scrollingElement || document.documentElement, m = [], p = e; or(p) && s(p); ) {
    if ((p = (d = (u = p).parentElement) == null ? u.getRootNode().host || null : d) === f) {
      m.push(p);
      break;
    }
    p != null && p === document.body && fo(p) && !fo(document.documentElement) || p != null && fo(p, i) && m.push(p);
  }
  for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, y = n.visualViewport ? n.visualViewport.height : innerHeight, z = window.scrollX || pageXOffset, I = window.scrollY || pageYOffset, V = e.getBoundingClientRect(), S = V.height, w = V.width, D = V.top, $ = V.right, E = V.bottom, F = V.left, q = o === "start" || o === "nearest" ? D : o === "end" ? E : D + S / 2, O = r === "center" ? F + w / 2 : r === "end" ? $ : F, b = [], x = 0; x < m.length; x++) {
    var C = m[x], H = C.getBoundingClientRect(), G = H.height, Y = H.width, J = H.top, W = H.right, te = H.bottom, P = H.left;
    if (l === "if-needed" && D >= 0 && F >= 0 && E <= y && $ <= g && D >= J && E <= te && F >= P && $ <= W)
      return b;
    var k = getComputedStyle(C), U = parseInt(k.borderLeftWidth, 10), Q = parseInt(k.borderTopWidth, 10), ve = parseInt(k.borderRightWidth, 10), we = parseInt(k.borderBottomWidth, 10), fe = 0, Ae = 0, Ce = "offsetWidth" in C ? C.offsetWidth - C.clientWidth - U - ve : 0, Be = "offsetHeight" in C ? C.offsetHeight - C.clientHeight - Q - we : 0, dt = "offsetWidth" in C ? C.offsetWidth === 0 ? 0 : Y / C.offsetWidth : 0, et = "offsetHeight" in C ? C.offsetHeight === 0 ? 0 : G / C.offsetHeight : 0;
    if (f === C)
      fe = o === "start" ? q : o === "end" ? q - y : o === "nearest" ? al(I, I + y, y, Q, we, I + q, I + q + S, S) : q - y / 2, Ae = r === "start" ? O : r === "center" ? O - g / 2 : r === "end" ? O - g : al(z, z + g, g, U, ve, z + O, z + O + w, w), fe = Math.max(0, fe + I), Ae = Math.max(0, Ae + z);
    else {
      fe = o === "start" ? q - J - Q : o === "end" ? q - te + we + Be : o === "nearest" ? al(J, te, G, Q, we + Be, q, q + S, S) : q - (J + G / 2) + Be / 2, Ae = r === "start" ? O - P - U : r === "center" ? O - (P + Y / 2) + Ce / 2 : r === "end" ? O - W + ve + Ce : al(P, W, Y, U, ve + Ce, O, O + w, w);
      var ot = C.scrollLeft, A = C.scrollTop;
      q += A - (fe = Math.max(0, Math.min(A + fe / et, C.scrollHeight - G / et + Be))), O += ot - (Ae = Math.max(0, Math.min(ot + Ae / dt, C.scrollWidth - Y / dt + Ce)));
    }
    b.push({ el: C, top: fe, left: Ae });
  }
  return b;
};
const ic = ["info", "success", "warning", "error"], Rt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], sc = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), uc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], cc = /* @__PURE__ */ h("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), dc = [cc];
function fc(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, dc, 14, uc);
}
var po = /* @__PURE__ */ se(sc, [["render", fc]]);
const Ut = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), pc = L({
  name: "FeedbackIcon",
  components: {
    IconLoading: Ut,
    IconCheckCircleFill: Wi,
    IconExclamationCircleFill: Ui,
    IconCloseCircleFill: Ki
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
function vc(e, t, n, l, o, r) {
  const a = ce("icon-loading"), i = ce("icon-check-circle-fill"), s = ce("icon-exclamation-circle-fill"), u = ce("icon-close-circle-fill");
  return _(), j("span", {
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
var Ea = /* @__PURE__ */ se(pc, [["render", vc]]);
const Oa = {
  key: "Enter",
  code: "Enter"
}, hc = {
  key: "Backspace",
  code: "Backspace"
};
var mc = Object.defineProperty, ir = Object.getOwnPropertySymbols, gc = Object.prototype.hasOwnProperty, bc = Object.prototype.propertyIsEnumerable, sr = (e, t, n) => t in e ? mc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, yc = (e, t) => {
  for (var n in t || (t = {}))
    gc.call(t, n) && sr(e, n, t[n]);
  if (ir)
    for (var n of ir(t))
      bc.call(t, n) && sr(e, n, t[n]);
  return e;
};
const Gn = (e, t) => {
  const n = yc({}, e);
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
const ia = Symbol("ArcoFormItemContext"), xa = Symbol("ArcoFormContext"), vt = ({
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
}, bt = (e, {
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
function Yi(e) {
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
var _c = Object.defineProperty, ur = Object.getOwnPropertySymbols, $c = Object.prototype.hasOwnProperty, wc = Object.prototype.propertyIsEnumerable, cr = (e, t, n) => t in e ? _c(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dr = (e, t) => {
  for (var n in t || (t = {}))
    $c.call(t, n) && cr(e, n, t[n]);
  if (ur)
    for (var n of ur(t))
      wc.call(t, n) && cr(e, n, t[n]);
  return e;
}, zn = L({
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
      eventHandlers: g
    } = vt({
      size: o,
      disabled: r,
      error: a
    }), {
      mergedSize: y
    } = bt(d), [z, I] = Yi(u), V = B(e.defaultValue), S = v(() => {
      var A;
      return (A = e.modelValue) != null ? A : V.value;
    });
    be(i, (A) => {
      (Xe(A) || Vn(A)) && (V.value = "");
    });
    let w = S.value;
    const D = B(!1), $ = v(() => e.allowClear && !e.readonly && !f.value && Boolean(S.value)), E = B(!1), F = B(""), q = (A) => {
      var M;
      return Je(e.wordLength) ? e.wordLength(A) : (M = A.length) != null ? M : 0;
    }, O = v(() => q(S.value)), b = v(() => m.value || Boolean(Ve(e.maxLength) && e.maxLength.errorOnly && O.value > C.value)), x = v(() => Ve(e.maxLength) && Boolean(e.maxLength.errorOnly)), C = v(() => Ve(e.maxLength) ? e.maxLength.length : e.maxLength), H = v(() => {
      const A = q("a");
      return Math.floor(C.value / A);
    }), G = (A) => {
      var M, X;
      C.value && !x.value && q(A) > C.value && (A = (X = (M = e.wordSlice) == null ? void 0 : M.call(e, A, C.value)) != null ? X : A.slice(0, H.value)), V.value = A, t("update:modelValue", A);
    }, Y = (A) => {
      u.value && A.target !== u.value && (A.preventDefault(), u.value.focus());
    }, J = (A, M) => {
      var X, oe;
      A !== w && (w = A, t("change", A, M), (oe = (X = g.value) == null ? void 0 : X.onChange) == null || oe.call(X, M));
    }, W = (A) => {
      var M, X;
      D.value = !0, w = S.value, t("focus", A), (X = (M = g.value) == null ? void 0 : M.onFocus) == null || X.call(M, A);
    }, te = (A) => {
      var M, X;
      D.value = !1, J(S.value, A), t("blur", A), (X = (M = g.value) == null ? void 0 : M.onBlur) == null || X.call(M, A);
    }, P = (A) => {
      var M, X, oe;
      const {
        value: je,
        selectionStart: Te,
        selectionEnd: Et
      } = A.target;
      if (A.type === "compositionend") {
        if (E.value = !1, F.value = "", C.value && !x.value && O.value >= C.value && q(je) > C.value && Te === Et) {
          k();
          return;
        }
        G(je), t("input", je, A), (X = (M = g.value) == null ? void 0 : M.onInput) == null || X.call(M, A), k();
      } else
        E.value = !0, F.value = S.value + ((oe = A.data) != null ? oe : "");
    }, k = () => {
      z(), Le(() => {
        u.value && S.value !== u.value.value && (u.value.value = S.value, I());
      });
    }, U = (A) => {
      var M, X;
      const {
        value: oe
      } = A.target;
      if (!E.value) {
        if (C.value && !x.value && O.value >= C.value && q(oe) > C.value && A.inputType === "insertText") {
          k();
          return;
        }
        G(oe), t("input", oe, A), (X = (M = g.value) == null ? void 0 : M.onInput) == null || X.call(M, A), k();
      }
    }, Q = (A) => {
      G(""), J("", A), t("clear", A);
    }, ve = (A) => {
      const M = A.key || A.code;
      !E.value && M === Oa.key && (J(S.value, A), t("pressEnter", A));
    }, we = v(() => [`${s}-outer`, `${s}-outer-size-${y.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), fe = v(() => [`${s}-wrapper`, {
      [`${s}-error`]: b.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: D.value
    }]), Ae = v(() => [s, `${s}-size-${y.value}`]), Ce = v(() => Gn(l, Rt)), Be = v(() => Xn(l, Rt)), dt = v(() => {
      const A = dr(dr({}, Be.value), e.inputAttrs);
      return b.value && (A["aria-invalid"] = !0), A;
    }), et = (A) => {
      var M;
      return c("span", Se({
        class: fe.value,
        onMousedown: Y
      }, A ? void 0 : Ce.value), [n.prefix && c("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), c("input", Se({
        ref: u,
        class: Ae.value,
        value: S.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: f.value,
        onInput: U,
        onKeydown: ve,
        onFocus: W,
        onBlur: te,
        onCompositionstart: P,
        onCompositionupdate: P,
        onCompositionend: P
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
      }, [O.value, ge("/"), C.value]), (M = n.suffix) == null ? void 0 : M.call(n), Boolean(p.value) && c(Ea, {
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
const kc = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Cc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Sc = /* @__PURE__ */ h("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Vc = [Sc];
function Ec(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Vc, 14, Cc);
}
var vo = /* @__PURE__ */ se(kc, [["render", Ec]]);
const sa = Object.assign(vo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + vo.name, vo);
  }
}), Gi = Symbol("ArcoButtonGroup"), Oc = L({
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
    } = $e(e), o = ee("btn"), r = We(Gi, void 0), a = v(() => {
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
    } = bt(s), f = v(() => {
      var p, g, y, z, I, V;
      return [o, `${o}-${(g = (p = e.type) != null ? p : r == null ? void 0 : r.type) != null ? g : "secondary"}`, `${o}-shape-${(z = (y = e.shape) != null ? y : r == null ? void 0 : r.shape) != null ? z : "square"}`, `${o}-size-${d.value}`, `${o}-status-${(V = (I = e.status) != null ? I : r == null ? void 0 : r.status) != null ? V : "normal"}`, {
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
      handleClick: (p) => {
        if (e.disabled || e.loading) {
          p.preventDefault();
          return;
        }
        t("click", p);
      }
    };
  }
}), xc = ["href"], Bc = ["type", "disabled"];
function Ic(e, t, n, l, o, r) {
  const a = ce("icon-loading");
  return e.href ? (_(), j("a", {
    key: 0,
    class: K([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (_(), j("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [e.loading ? (_(), de(a, {
    key: 0,
    spin: "true"
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : le("v-if", !0), re(e.$slots, "default")], 10, xc)) : (_(), j("button", {
    key: 1,
    class: K([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (_(), j("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [e.loading ? (_(), de(a, {
    key: 0,
    spin: !0
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : le("v-if", !0), re(e.$slots, "default")], 10, Bc));
}
var ho = /* @__PURE__ */ se(Oc, [["render", Ic]]);
const Pc = L({
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
    return Ht(Gi, Pe({
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
function jc(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var mo = /* @__PURE__ */ se(Pc, [["render", jc]]);
const kn = Object.assign(ho, {
  Group: mo,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + ho.name, ho), e.component(n + mo.name, mo);
  }
});
var go = L({
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
    } = bt(l), a = B(), i = (f) => {
      a.value.inputRef && t("search", a.value.inputRef.value, f);
    }, s = () => {
      var f;
      return c(ze, null, [e.loading ? c(Ut, null, null) : c(ct, {
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
const Tc = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Mc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Dc = /* @__PURE__ */ h("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), zc = /* @__PURE__ */ h("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Ac = [Dc, zc];
function Lc(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ac, 14, Mc);
}
var bo = /* @__PURE__ */ se(Tc, [["render", Lc]]);
const Fc = Object.assign(bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bo.name, bo);
  }
}), Nc = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Rc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], qc = /* @__PURE__ */ h("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Hc = /* @__PURE__ */ h("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Wc = [qc, Hc];
function Uc(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Wc, 14, Rc);
}
var yo = /* @__PURE__ */ se(Nc, [["render", Uc]]);
const Kc = Object.assign(yo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + yo.name, yo);
  }
});
function Hn(e) {
  const t = B(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function Yc(e, t) {
  const {
    value: n
  } = $e(t), [l, o] = Hn(Xe(n.value) ? e : n.value);
  return be(n, (a) => {
    Xe(a) && o(void 0);
  }), [v(() => Xe(n.value) ? l.value : n.value), o, l];
}
const Gc = L({
  name: "InputPassword",
  components: {
    IconEye: Fc,
    IconEyeInvisible: Kc,
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
    }, [a, i] = Yc(l.value, Pe({
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
function Xc(e, t, n, l, o, r) {
  const a = ce("icon-eye"), i = ce("icon-eye-invisible"), s = ce("a-icon-hover"), u = ce("a-input");
  return _(), de(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, xi({
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
var _o = /* @__PURE__ */ se(Gc, [["render", Xc]]);
const Zc = L({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ee("input-group")
    };
  }
});
function Qc(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var An = /* @__PURE__ */ se(Zc, [["render", Qc]]);
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
var Jc = Object.defineProperty, fr = Object.getOwnPropertySymbols, ed = Object.prototype.hasOwnProperty, td = Object.prototype.propertyIsEnumerable, pr = (e, t, n) => t in e ? Jc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Pn = (e, t) => {
  for (var n in t || (t = {}))
    ed.call(t, n) && pr(e, n, t[n]);
  if (fr)
    for (var n of fr(t))
      td.call(t, n) && pr(e, n, t[n]);
  return e;
};
const nd = () => {
  const {
    height: e,
    width: t
  } = xu();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, vr = (e, t) => {
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
}, ld = (e) => {
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
}, od = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: r,
  translate: a
}) => {
  const i = ld(e), s = nd(), u = {
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
  const a = (r = De(o) ? o : o[e]) != null ? r : [0, 0];
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
}, ad = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, rd = (e, t, n, l, {
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
    const f = od(e, u, {
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
}, id = (e, t, n, {
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
}, sd = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, hr = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    sd(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, Xi = () => {
  const e = {}, t = B(), n = () => {
    const l = Ni(e.value);
    l !== t.value && (t.value = l);
  };
  return xe(() => n()), Pt(() => n()), {
    children: e,
    firstElement: t
  };
};
var xl = L({
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
    } = Xi();
    let r;
    const a = (s) => {
      s && (r = new wa((u) => {
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
function ud(e, t) {
  const n = B(e[t]);
  return Pt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const mr = Symbol("ArcoTrigger"), cd = 1e3, dd = 5e3, fd = 1;
class pd {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || dd : Array.from(this.popupStack.popup).pop() || cd) + fd, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const $o = new pd();
function Zi(e, {
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
  }), n && (xe(() => {
    o();
  }), Wt(() => {
    r();
  })), {
    zIndex: Hs(l),
    open: o,
    close: r,
    isLastDialog: a
  };
}
const vd = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new wa((r) => {
        const a = r[0];
        Je(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var hd = L({
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
const md = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = B(e.value), r = B(), a = () => {
    const i = lr(e.value), s = i ? e.value : n, u = i ?? (l ? document.documentElement : lr(n));
    s !== o.value && (o.value = s), u !== r.value && (r.value = u);
  };
  return xe(() => a()), be(t, (i) => {
    o.value !== e.value && i && a();
  }), {
    teleportContainer: o,
    containerRef: r
  };
};
var gd = Object.defineProperty, bd = Object.defineProperties, yd = Object.getOwnPropertyDescriptors, gr = Object.getOwnPropertySymbols, _d = Object.prototype.hasOwnProperty, $d = Object.prototype.propertyIsEnumerable, br = (e, t, n) => t in e ? gd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wd = (e, t) => {
  for (var n in t || (t = {}))
    _d.call(t, n) && br(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      $d.call(t, n) && br(e, n, t[n]);
  return e;
}, kd = (e, t) => bd(e, yd(t));
const Cd = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var wo = L({
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
    } = $e(e), r = ee("trigger"), a = v(() => Gn(l, Cd)), i = We(on, void 0), s = v(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), d = We(mr, void 0), {
      children: f,
      firstElement: m
    } = Xi(), p = B(), g = B(e.defaultPopupVisible), y = B(e.position), z = B({}), I = B({}), V = B({}), S = B(), w = B({
      top: 0,
      left: 0
    });
    let D = null, $ = null;
    const E = v(() => {
      var T;
      return (T = e.popupVisible) != null ? T : g.value;
    }), {
      teleportContainer: F,
      containerRef: q
    } = md({
      popupContainer: o,
      visible: E,
      documentContainer: !0
    }), {
      zIndex: O
    } = Zi("popup", {
      visible: E
    });
    let b = 0, x = !1, C = !1;
    const H = () => {
      b && (window.clearTimeout(b), b = 0);
    }, G = (T) => {
      if (e.alignPoint) {
        const {
          pageX: R,
          pageY: ae
        } = T;
        w.value = {
          top: ae,
          left: R
        };
      }
    }, Y = () => {
      if (!m.value || !p.value || !q.value)
        return;
      const T = q.value.getBoundingClientRect(), R = e.alignPoint ? {
        top: w.value.top,
        bottom: w.value.top,
        left: w.value.left,
        right: w.value.left,
        scrollTop: w.value.top,
        scrollBottom: w.value.top,
        scrollLeft: w.value.left,
        scrollRight: w.value.left,
        width: 0,
        height: 0
      } : vr(m.value, T), ae = () => vr(p.value, T), ft = ae(), {
        style: tt,
        position: un
      } = rd(e.position, T, R, ft, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (I.value = {
        transformOrigin: ad(un)
      }), e.autoFitPopupMinWidth ? tt.minWidth = `${R.width}px` : e.autoFitPopupWidth && (tt.width = `${R.width}px`), y.value !== un && (y.value = un), z.value = tt, e.showArrow && Le(() => {
        V.value = id(un, R, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, J = (T, R) => {
      if (T === E.value && b === 0)
        return;
      const ae = () => {
        g.value = T, t("update:popupVisible", T), t("popupVisibleChange", T), T && Le(() => {
          Y();
        });
      };
      T || (D = null, $ = null), R ? (H(), T !== E.value && (b = window.setTimeout(ae, R))) : ae();
    }, W = (T) => {
      var R;
      (R = l.onClick) == null || R.call(l, T), !(e.disabled || E.value && !e.clickToClose) && (s.value.includes("click") ? (G(T), J(!E.value)) : s.value.includes("contextMenu") && E.value && J(!1));
    }, te = (T) => {
      var R;
      (R = l.onMouseenter) == null || R.call(l, T), !(e.disabled || !s.value.includes("hover")) && (G(T), J(!0, e.mouseEnterDelay));
    }, P = (T) => {
      d == null || d.onMouseenter(T), te(T);
    }, k = (T) => {
      var R;
      (R = l.onMouseleave) == null || R.call(l, T), !(e.disabled || !s.value.includes("hover")) && J(!1, e.mouseLeaveDelay);
    }, U = (T) => {
      d == null || d.onMouseleave(T), k(T);
    }, Q = (T) => {
      var R;
      (R = l.onFocusin) == null || R.call(l, T), !(e.disabled || !s.value.includes("focus")) && J(!0, e.focusDelay);
    }, ve = (T) => {
      var R;
      (R = l.onFocusout) == null || R.call(l, T), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && J(!1);
    }, we = (T) => {
      var R;
      (R = l.onContextmenu) == null || R.call(l, T), !(e.disabled || !s.value.includes("contextMenu") || E.value && !e.clickToClose) && (G(T), J(!E.value), T.preventDefault());
    };
    Ht(mr, Pe({
      onMouseenter: P,
      onMouseleave: U,
      addChildRef: (T) => {
        u.add(T), d == null || d.addChildRef(T);
      },
      removeChildRef: (T) => {
        u.delete(T), d == null || d.removeChildRef(T);
      }
    }));
    const Ce = () => {
      wn(document.documentElement, "mousedown", et), x = !1;
    }, Be = ud(n, "content"), dt = v(() => {
      var T;
      return e.hideEmpty && Eu((T = Be.value) == null ? void 0 : T.call(Be));
    }), et = (T) => {
      var R, ae, ft;
      if (!((R = m.value) != null && R.contains(T.target) || (ae = p.value) != null && ae.contains(T.target))) {
        for (const tt of u)
          if ((ft = tt.value) != null && ft.contains(T.target))
            return;
        Ce(), J(!1);
      }
    }, ot = (T, R) => {
      const [ae, ft] = T, {
        scrollTop: tt,
        scrollLeft: un
      } = R;
      return Math.abs(tt - ae) >= e.scrollToCloseDistance || Math.abs(un - ft) >= e.scrollToCloseDistance;
    }, A = nr((T) => {
      if (E.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const R = T.target;
          D || (D = [R.scrollTop, R.scrollLeft]), ot(D, R) ? J(!1) : Y();
        } else
          Y();
    }), M = () => {
      wn(window, "scroll", X), C = !1;
    }, X = nr((T) => {
      const R = T.target.documentElement;
      $ || ($ = [R.scrollTop, R.scrollLeft]), ot($, R) && (J(!1), M());
    }), oe = () => {
      E.value && Y();
    }, je = () => {
      oe(), t("resize");
    }, Te = (T) => {
      e.preventFocus && T.preventDefault();
    };
    d == null || d.addChildRef(p);
    const Et = v(() => E.value ? e.openedClass : void 0);
    let Ye;
    be(E, (T) => {
      if (e.clickOutsideToClose && (!T && x ? Ce() : T && !x && (Ot(document.documentElement, "mousedown", et), x = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Ot(window, "scroll", X), C = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (T) {
          Ye = hr(m.value);
          for (const R of Ye)
            R.addEventListener("scroll", A);
        } else if (Ye) {
          for (const R of Ye)
            R.removeEventListener("scroll", A);
          Ye = void 0;
        }
      }
      T && (Bn.value = !0);
    }), be(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      E.value && Y();
    });
    const {
      createResizeObserver: lo,
      destroyResizeObserver: oo
    } = vd({
      elementRef: q,
      onResize: oe
    });
    xe(() => {
      if (lo(), E.value && (Y(), e.clickOutsideToClose && !x && (Ot(document.documentElement, "mousedown", et), x = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ye = hr(m.value);
        for (const T of Ye)
          T.addEventListener("scroll", A);
      }
    }), Pt(() => {
      E.value && Y();
    }), Ws(() => {
      J(!1);
    }), Wt(() => {
      if (d == null || d.removeChildRef(p), oo(), x && Ce(), C && M(), Ye) {
        for (const T of Ye)
          T.removeEventListener("scroll", A);
        Ye = void 0;
      }
    });
    const Bn = B(E.value), Mt = B(!1), ll = () => {
      Mt.value = !0;
    }, ao = () => {
      Mt.value = !1, E.value && t("show");
    }, N = () => {
      Mt.value = !1, E.value || (Bn.value = !1, t("hide"));
    };
    return () => {
      var T, R;
      return f.value = (R = (T = n.default) == null ? void 0 : T.call(n)) != null ? R : [], Li(f.value, {
        class: Et.value,
        onClick: W,
        onMouseenter: te,
        onMouseleave: k,
        onFocusin: Q,
        onFocusout: ve,
        onContextmenu: we
      }), c(ze, null, [e.autoFixPosition ? c(xl, {
        onResize: je
      }, {
        default: () => [f.value]
      }) : f.value, c(hd, null, {
        default: () => [c(Us, {
          to: F.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || E.value || Bn.value) && !dt.value && c(xl, {
            onResize: oe
          }, {
            default: () => [c("div", Se({
              ref: p,
              class: [`${r}-popup`, `${r}-position-${y.value}`],
              style: kd(wd({}, z.value), {
                zIndex: O.value,
                pointerEvents: Mt.value ? "none" : "auto"
              }),
              "trigger-placement": y.value,
              onMouseenter: P,
              onMouseleave: U,
              onMousedown: Te
            }, a.value), [c(Sl, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: ll,
              onAfterEnter: ao,
              onBeforeLeave: ll,
              onAfterLeave: N
            }, {
              default: () => {
                var ae;
                return [ba(c("div", {
                  class: `${r}-popup-wrapper`,
                  style: I.value
                }, [c("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ae = n.content) == null ? void 0 : ae.call(n)]), e.showArrow && c("div", {
                  ref: S,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: V.value
                }, null)]), [[ya, E.value]])];
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
}), Sd = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Vd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ed = /* @__PURE__ */ h("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Od = [Ed];
function xd(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Od, 14, Vd);
}
var ko = /* @__PURE__ */ se(Sd, [["render", xd]]);
const Bd = Object.assign(ko, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ko.name, ko);
  }
});
var Co = L({
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
    } = $a(), r = We(on, void 0);
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
      }, null) : c(Bd, null, null)]), c("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const Id = Object.assign(Co, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Co.name, Co);
  }
}), Pd = 5;
var jd = L({
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
      }, [Array(Pd).fill(1).map((l, o) => c("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), So = L({
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
      return t.element ? t.element() : e.dot ? c(jd, {
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
      return c(ze, null, [!e.hideIcon && c("div", {
        class: `${n}-icon`,
        style: d
      }, [r()]), f && c("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => c("div", {
      class: o.value
    }, [t.default ? c(ze, null, [t.default(), e.loading && c("div", {
      class: `${n}-mask`
    }, [c("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Td = Object.assign(So, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + So.name, So);
  }
}), Md = L({
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
      var V, S;
      return {
        [a.value.size]: `${(S = (V = e.data) == null ? void 0 : V.thumbSize) != null ? S : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), f = (V) => {
      V.preventDefault(), r.value && (u.value = V[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, Ot(window, "mousemove", g), Ot(window, "mouseup", y), Ot(window, "contextmenu", y));
    }, m = (V) => {
      var S, w, D, $;
      if (V.preventDefault(), r.value) {
        const E = p(V[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((w = (S = e.data) == null ? void 0 : S.thumbSize) != null ? w : 0) : i.value - (($ = (D = e.data) == null ? void 0 : D.thumbSize) != null ? $ : 0));
        E !== i.value && (i.value = E, t("scroll", E));
      }
    }, p = (V) => V < 0 ? 0 : e.data && V > e.data.max ? e.data.max : V, g = (V) => {
      if (o.value && r.value) {
        const S = p(V[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        S !== i.value && (i.value = S, t("scroll", S));
      }
    }, y = () => {
      s.value = !1, wn(window, "mousemove", g), wn(window, "mouseup", y);
    }, z = (V) => {
      s.value || (V = p(V), V !== i.value && (i.value = V));
    }, I = v(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: r,
      prefixCls: n,
      thumbCls: I,
      thumbStyle: d,
      handleThumbMouseDown: f,
      handleTrackClick: m,
      setOffset: z
    };
  }
});
function Dd(e, t, n, l, o, r) {
  return _(), de(Sl, null, {
    default: ne(() => [h("div", {
      ref: "trackRef",
      class: K([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = nn((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [h("div", {
      ref: "thumbRef",
      class: K(e.thumbCls),
      style: me(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [h("div", {
      class: K(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var zd = /* @__PURE__ */ se(Md, [["render", Dd]]);
const yr = 20, il = 15, Ad = L({
  name: "Scrollbar",
  components: {
    ResizeObserver: xl,
    Thumb: zd
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
      var w, D, $, E, F, q;
      if (l.value) {
        const {
          clientWidth: O,
          clientHeight: b,
          offsetWidth: x,
          offsetHeight: C,
          scrollWidth: H,
          scrollHeight: G,
          scrollTop: Y,
          scrollLeft: J
        } = l.value;
        s.value = H > O, u.value = G > b, m.value = d.value && f.value;
        const W = e.type === "embed" && m.value ? x - il : x, te = e.type === "embed" && m.value ? C - il : C, P = Math.round(W / Math.min(H / O, W / yr)), k = W - P, U = (H - O) / k, Q = Math.round(te / Math.min(G / b, te / yr)), ve = te - Q, we = (G - b) / ve;
        if (o.value = {
          ratio: U,
          thumbSize: P,
          max: k
        }, r.value = {
          ratio: we,
          thumbSize: Q,
          max: ve
        }, Y > 0) {
          const fe = Math.round(Y / ((D = (w = r.value) == null ? void 0 : w.ratio) != null ? D : 1));
          ($ = i.value) == null || $.setOffset(fe);
        }
        if (J > 0) {
          const fe = Math.round(J / ((F = (E = r.value) == null ? void 0 : E.ratio) != null ? F : 1));
          (q = a.value) == null || q.setOffset(fe);
        }
      }
    };
    xe(() => {
      p();
    });
    const g = () => {
      p();
    }, y = (w) => {
      var D, $, E, F, q, O;
      if (l.value) {
        if (d.value && !e.disableHorizontal) {
          const b = Math.round(l.value.scrollLeft / (($ = (D = o.value) == null ? void 0 : D.ratio) != null ? $ : 1));
          (E = a.value) == null || E.setOffset(b);
        }
        if (f.value && !e.disableVertical) {
          const b = Math.round(l.value.scrollTop / ((q = (F = r.value) == null ? void 0 : F.ratio) != null ? q : 1));
          (O = i.value) == null || O.setOffset(b);
        }
      }
      t("scroll", w);
    }, z = (w) => {
      var D, $;
      l.value && l.value.scrollTo({
        left: w * (($ = (D = o.value) == null ? void 0 : D.ratio) != null ? $ : 1)
      });
    }, I = (w) => {
      var D, $;
      l.value && l.value.scrollTo({
        top: w * (($ = (D = r.value) == null ? void 0 : D.ratio) != null ? $ : 1)
      });
    }, V = v(() => {
      const w = {};
      return e.type === "track" && (d.value && (w.paddingBottom = `${il}px`), f.value && (w.paddingRight = `${il}px`)), [w, e.outerStyle];
    }), S = v(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: m.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: S,
      style: V,
      containerRef: l,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: o,
      verticalData: r,
      isBoth: m,
      hasHorizontalScrollbar: d,
      hasVerticalScrollbar: f,
      handleResize: g,
      handleScroll: y,
      handleHorizontalScroll: z,
      handleVerticalScroll: I
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
function Ld(e, t, n, l, o, r) {
  const a = ce("ResizeObserver"), i = ce("thumb");
  return _(), j("div", {
    class: K(e.cls),
    style: me(e.style)
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
var Vo = /* @__PURE__ */ se(Ad, [["render", Ld]]);
const Fd = Object.assign(Vo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Vo.name, Vo);
  }
}), Nd = (e) => {
  const t = B(), n = () => Pi(t.value) ? t.value.$refs[e] : t.value, l = B();
  return xe(() => {
    l.value = n();
  }), be([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Rd = Object.defineProperty, _r = Object.getOwnPropertySymbols, qd = Object.prototype.hasOwnProperty, Hd = Object.prototype.propertyIsEnumerable, $r = (e, t, n) => t in e ? Rd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Wd = (e, t) => {
  for (var n in t || (t = {}))
    qd.call(t, n) && $r(e, n, t[n]);
  if (_r)
    for (var n of _r(t))
      Hd.call(t, n) && $r(e, n, t[n]);
  return e;
};
const Ud = (e) => {
  const t = v(() => Boolean(e.value)), n = v(() => {
    if (e.value)
      return Wd({
        type: "embed"
      }, Wl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Kd = L({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Fd,
    Empty: Id,
    Spin: Td
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
    } = Nd("containerRef"), {
      displayScrollbar: m,
      scrollbarProps: p
    } = Ud(a), g = (z) => {
      const {
        scrollTop: I,
        scrollHeight: V,
        offsetHeight: S
      } = z.target;
      V - (I + S) <= e.bottomOffset && t("reachBottom", z), t("scroll", z);
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
      handleScroll: g,
      displayScrollbar: m,
      scrollbarProps: p
    };
  }
});
function Yd(e, t, n, l, o, r) {
  const a = ce("spin");
  return _(), j("div", {
    class: K(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (_(), j("div", {
    key: 0,
    class: K(`${e.prefixCls}-header`)
  }, [re(e.$slots, "header")], 2)) : le("v-if", !0), e.loading ? (_(), de(a, {
    key: 1,
    class: K(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (_(), j("div", {
    key: 2,
    class: K(`${e.prefixCls}-empty`)
  }, [re(e.$slots, "empty", {}, () => [(_(), de(tn(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : le("v-if", !0), e.virtualList && !e.loading && !e.empty ? re(e.$slots, "virtual-list", {
    key: 3
  }) : le("v-if", !0), e.virtualList ? le("v-if", !0) : ba((_(), de(tn(e.displayScrollbar ? "ScrollbarComponent" : "div"), Se({
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
  }, 16, ["class", "onScroll"])), [[ya, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (_(), j("div", {
    key: 5,
    class: K(`${e.prefixCls}-footer`)
  }, [re(e.$slots, "footer")], 2)) : le("v-if", !0)], 2);
}
var Gd = /* @__PURE__ */ se(Kd, [["render", Yd]]), wr = L({
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
const Qi = Symbol("ArcoCheckboxGroup");
var ml = L({
  name: "Checkbox",
  components: {
    IconCheck: wr,
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
    } = $e(e), r = ee("checkbox"), a = B(), i = e.uninjectGroupContext ? void 0 : We(Qi, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: d
    } = vt({
      disabled: l
    }), f = B(e.defaultChecked), m = v(() => {
      var w;
      return s ? i == null ? void 0 : i.computedValue : (w = e.modelValue) != null ? w : f.value;
    }), p = v(() => {
      var w;
      return De(m.value) ? m.value.includes((w = e.value) != null ? w : !0) : m.value;
    }), g = v(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !p.value && (i == null ? void 0 : i.isMaxed)), y = (w) => {
      w.stopPropagation();
    }, z = (w) => {
      var D, $, E, F;
      const {
        checked: q
      } = w.target;
      let O = q;
      if (De(m.value)) {
        const b = new Set(m.value);
        q ? b.add((D = e.value) != null ? D : !0) : b.delete(($ = e.value) != null ? $ : !0), O = Array.from(b);
      }
      f.value = q, s && De(O) ? i == null || i.handleChange(O, w) : (t("update:modelValue", O), t("change", O, w), (F = (E = d.value) == null ? void 0 : E.onChange) == null || F.call(E, w)), Le(() => {
        a.value && a.value.checked !== p.value && (a.value.checked = p.value);
      });
    }, I = v(() => [r, {
      [`${r}-checked`]: p.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: g.value
    }]), V = (w) => {
      var D, $;
      ($ = (D = d.value) == null ? void 0 : D.onFocus) == null || $.call(D, w);
    }, S = (w) => {
      var D, $;
      ($ = (D = d.value) == null ? void 0 : D.onBlur) == null || $.call(D, w);
    };
    return be(o, (w) => {
      (Xe(w) || Vn(w)) && (f.value = !1);
    }), be(m, (w) => {
      var D;
      let $;
      De(w) ? $ = w.includes((D = e.value) != null ? D : !0) : $ = w, f.value !== $ && (f.value = $), a.value && a.value.checked !== $ && (a.value.checked = $);
    }), () => {
      var w, D, $, E;
      return c("label", {
        "aria-disabled": g.value,
        class: I.value
      }, [c("input", {
        ref: a,
        type: "checkbox",
        checked: p.value,
        value: e.value,
        class: `${r}-target`,
        disabled: g.value,
        onClick: y,
        onChange: z,
        onFocus: V,
        onBlur: S
      }, null), (E = ($ = (D = n.checkbox) != null ? D : (w = i == null ? void 0 : i.slots) == null ? void 0 : w.checkbox) == null ? void 0 : $({
        checked: p.value,
        disabled: g.value
      })) != null ? E : c(ct, {
        class: `${r}-icon-hover`,
        disabled: g.value || p.value
      }, {
        default: () => [c("div", {
          class: `${r}-icon`
        }, [p.value && c(wr, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && c("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), Eo = L({
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
    }), i = B(e.defaultValue), s = v(() => De(e.modelValue) ? e.modelValue : i.value), u = v(() => e.max === void 0 ? !1 : s.value.length >= e.max), d = v(() => {
      var g;
      return ((g = e.options) != null ? g : []).map((y) => kt(y) || he(y) ? {
        label: y,
        value: y
      } : y);
    });
    Ht(Qi, Pe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (g, y) => {
        var z, I;
        i.value = g, t("update:modelValue", g), t("change", g, y), (I = (z = a.value) == null ? void 0 : z.onChange) == null || I.call(z, y);
      }
    }));
    const m = v(() => [o, `${o}-direction-${e.direction}`]);
    be(() => e.modelValue, (g) => {
      De(g) ? i.value = [...g] : i.value = [];
    });
    const p = () => d.value.map((g) => {
      const y = s.value.includes(g.value);
      return c(ml, {
        key: g.value,
        value: g.value,
        disabled: g.disabled || !y && u.value,
        indeterminate: g.indeterminate,
        modelValue: y
      }, {
        default: () => [n.label ? n.label({
          data: g
        }) : Je(g.label) ? g.label() : g.label]
      });
    });
    return () => {
      var g;
      return c("span", {
        class: m.value
      }, [d.value.length > 0 ? p() : (g = n.default) == null ? void 0 : g.call(n)]);
    };
  }
});
const Xd = Object.assign(ml, {
  Group: Eo,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + ml.name, ml), e.component(n + Eo.name, Eo);
  }
}), Ji = Symbol("ArcoSelectContext");
var Zd = Object.defineProperty, Qd = Object.defineProperties, Jd = Object.getOwnPropertyDescriptors, kr = Object.getOwnPropertySymbols, ef = Object.prototype.hasOwnProperty, tf = Object.prototype.propertyIsEnumerable, Cr = (e, t, n) => t in e ? Zd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ba = (e, t) => {
  for (var n in t || (t = {}))
    ef.call(t, n) && Cr(e, n, t[n]);
  if (kr)
    for (var n of kr(t))
      tf.call(t, n) && Cr(e, n, t[n]);
  return e;
}, es = (e, t) => Qd(e, Jd(t));
const nf = (e) => Ve(e) && "isGroup" in e, ts = (e) => Ve(e) && "isGroup" in e, lf = (e, t = "value") => String(Ve(e) ? e[t] : e), Wn = (e, t = "value") => Ve(e) ? `__arco__option__object__${e[t]}` : e || he(e) || kt(e) || Wl(e) ? `__arco__option__${typeof e}-${e}` : "", of = (e) => e.has("__arco__option__string-"), af = (e, {
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
      key: Wn(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : lf(i, t),
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
  var r;
  const a = [];
  for (const i of e)
    if (nf(i)) {
      const s = ua((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(es(Ba({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = af(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, Sr = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var r;
    const a = [];
    for (const i of o)
      if (ts(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && a.push(es(Ba({}, i), {
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
}) => Je(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, rf = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Ia(e[n], t[n]))
      return !1;
  return !0;
}, sf = (e, t) => {
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
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? rf(e, t) : n === "[object Array]" ? sf(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, uf = L({
  name: "Option",
  components: {
    Checkbox: Xd
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
    } = $e(e), o = ee("select-option"), r = We(Ji, void 0), a = Kn(), i = B(), s = B(n.value);
    be(n, ($, E) => {
      Ia($, E) || (s.value = $);
    });
    const u = B(""), d = v(() => {
      var $, E;
      return (E = ($ = e.value) != null ? $ : e.label) != null ? E : u.value;
    }), f = v(() => {
      var $;
      return ($ = e.label) != null ? $ : u.value;
    }), m = v(() => Wn(d.value, r == null ? void 0 : r.valueKey)), p = v(() => {
      var $;
      return ($ = r == null ? void 0 : r.component) != null ? $ : "li";
    }), g = () => {
      var $;
      if (!e.label && i.value) {
        const E = ($ = i.value.textContent) != null ? $ : "";
        u.value !== E && (u.value = E);
      }
    };
    xe(() => g()), Pt(() => g());
    const y = v(() => {
      var $;
      return ($ = r == null ? void 0 : r.valueKeys.includes(m.value)) != null ? $ : !1;
    }), z = v(() => (r == null ? void 0 : r.activeKey) === m.value);
    let I = B(!0);
    if (!e.internal) {
      const $ = Pe({
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
      I = v(() => Yl($, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, $)), Wt(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const V = ($) => {
      e.disabled || r == null || r.onSelect(m.value, $);
    }, S = () => {
      e.disabled || r == null || r.setActiveKey(m.value);
    }, w = () => {
      e.disabled || r == null || r.setActiveKey();
    }, D = v(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: y.value,
      [`${o}-active`]: z.value,
      [`${o}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: o,
      cls: D,
      selectCtx: r,
      itemRef: i,
      component: p,
      isSelected: y,
      isValid: I,
      handleClick: V,
      handleMouseEnter: S,
      handleMouseLeave: w
    };
  }
});
function cf(e, t, n, l, o, r) {
  const a = ce("checkbox");
  return ba((_(), de(tn(e.component), {
    ref: "itemRef",
    class: K([e.cls, {
      [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix)
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: ne(() => [e.$slots.icon ? (_(), j("span", {
      key: 0,
      class: K(`${e.prefixCls}-icon`)
    }, [re(e.$slots, "icon")], 2)) : le("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (_(), de(a, {
      key: 1,
      class: K(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: ne(() => [re(e.$slots, "default", {}, () => [ge(ye(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (_(), j("span", {
      key: 2,
      class: K(`${e.prefixCls}-content`)
    }, [re(e.$slots, "default", {}, () => [ge(ye(e.label), 1)])], 2)), e.$slots.suffix ? (_(), j("span", {
      key: 3,
      class: K(`${e.prefixCls}-suffix`)
    }, [re(e.$slots, "suffix")], 2)) : le("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[ya, e.isValid]]);
}
var mn = /* @__PURE__ */ se(uf, [["render", cf]]), df = Object.defineProperty, ff = Object.defineProperties, pf = Object.getOwnPropertyDescriptors, Vr = Object.getOwnPropertySymbols, vf = Object.prototype.hasOwnProperty, hf = Object.prototype.propertyIsEnumerable, Er = (e, t, n) => t in e ? df(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    vf.call(t, n) && Er(e, n, t[n]);
  if (Vr)
    for (var n of Vr(t))
      hf.call(t, n) && Er(e, n, t[n]);
  return e;
}, mf = (e, t) => ff(e, pf(t));
const gf = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, bf = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: r,
  fieldNames: a
}) => {
  const i = v(() => Oo(Oo({}, gf), a == null ? void 0 : a.value)), s = Pe(/* @__PURE__ */ new Map()), u = v(() => Array.from(s.values()).sort((S, w) => he(S.index) && he(w.index) ? S.index - w.index : 0)), d = v(() => {
    var S, w;
    const D = /* @__PURE__ */ new Map();
    return {
      optionInfos: ua((S = e == null ? void 0 : e.value) != null ? S : [], {
        valueKey: (w = r == null ? void 0 : r.value) != null ? w : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: D
      }),
      optionInfoMap: D
    };
  }), f = v(() => {
    var S, w;
    const D = /* @__PURE__ */ new Map();
    return {
      optionInfos: ua((S = t == null ? void 0 : t.value) != null ? S : [], {
        valueKey: (w = r == null ? void 0 : r.value) != null ? w : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: D
      }),
      optionInfoMap: D
    };
  }), m = Pe(/* @__PURE__ */ new Map());
  be([u, e ?? B([]), t ?? B([]), r ?? B("value")], () => {
    m.clear(), u.value.forEach((S, w) => {
      m.set(S.key, mf(Oo({}, S), {
        index: w
      }));
    }), d.value.optionInfoMap.forEach((S) => {
      m.has(S.key) || (S.index = m.size, m.set(S.key, S));
    }), f.value.optionInfoMap.forEach((S) => {
      m.has(S.key) || (S.index = m.size, m.set(S.key, S));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const p = v(() => {
    var S;
    const w = Sr(d.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((S = o == null ? void 0 : o.value) == null || S) && w.push(...Sr(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), w;
  }), g = v(() => Array.from(m.values()).filter((S) => S.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Yl(S, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), y = v(() => g.value.filter((S) => !S.disabled).map((S) => S.key));
  return {
    validOptions: p,
    optionInfoMap: m,
    validOptionInfos: g,
    enabledOptionKeys: y,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (S, w) => {
      s.set(S, w);
    },
    removeSlotOptionInfo: (S) => {
      s.delete(S);
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
}, Or = (e) => JSON.stringify({
  key: e.key,
  ctrl: Boolean(e.ctrl),
  shift: Boolean(e.shift),
  alt: Boolean(e.alt),
  meta: Boolean(e.meta)
}), ns = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = kt(l) ? {
      key: l
    } : l;
    t[Or(o)] = n;
  }), (n) => {
    const l = Or({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, yf = ({
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
  virtualListRef: g,
  onSelect: y,
  onPopupVisibleChange: z,
  enterToOpen: I = !0,
  defaultActiveFirstOption: V
}) => {
  const {
    validOptions: S,
    optionInfoMap: w,
    validOptionInfos: D,
    enabledOptionKeys: $,
    getNextSlotOptionIndex: E,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: q
  } = bf({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), O = B();
  be($, (G) => {
    (!O.value || !G.includes(O.value)) && (O.value = G[0]);
  });
  const b = (G) => {
    O.value = G;
  }, x = (G) => {
    const Y = $.value.length;
    if (Y === 0)
      return;
    if (!O.value)
      return G === "down" ? $.value[0] : $.value[Y - 1];
    const J = $.value.indexOf(O.value), W = (Y + J + (G === "up" ? -1 : 1)) % Y;
    return $.value[W];
  }, C = (G) => {
    var Y, J;
    g != null && g.value && g.value.scrollTo({
      key: G
    });
    const W = w.get(G), te = (Y = m == null ? void 0 : m.value) == null ? void 0 : Y.wrapperRef, P = (J = p == null ? void 0 : p.value[G]) != null ? J : W == null ? void 0 : W.ref;
    if (!te || !P || te.scrollHeight === te.offsetHeight)
      return;
    const k = Pu(P, te), U = te.scrollTop;
    k.top < 0 ? te.scrollTo(0, U + k.top) : k.bottom < 0 && te.scrollTo(0, U - k.bottom);
  };
  be(d, (G) => {
    var Y;
    if (G) {
      const J = f.value[f.value.length - 1];
      let W = (Y = V == null ? void 0 : V.value) == null || Y ? $.value[0] : void 0;
      $.value.includes(J) && (W = J), W !== O.value && (O.value = W), Le(() => {
        O.value && C(O.value);
      });
    }
  });
  const H = ns(/* @__PURE__ */ new Map([[pn.ENTER, (G) => {
    !(u != null && u.value) && !G.isComposing && (d.value ? O.value && (y(O.value, G), G.preventDefault()) : I && (z(!0), G.preventDefault()));
  }], [pn.ESC, (G) => {
    d.value && (z(!1), G.preventDefault());
  }], [pn.ARROW_DOWN, (G) => {
    if (d.value) {
      const Y = x("down");
      Y && (O.value = Y, C(Y)), G.preventDefault();
    }
  }], [pn.ARROW_UP, (G) => {
    if (d.value) {
      const Y = x("up");
      Y && (O.value = Y, C(Y)), G.preventDefault();
    }
  }]]));
  return Ht(Ji, Pe({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: f,
    activeKey: O,
    setActiveKey: b,
    onSelect: y,
    getNextSlotOptionIndex: E,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: q
  })), {
    validOptions: S,
    optionInfoMap: w,
    validOptionInfos: D,
    enabledOptionKeys: $,
    activeKey: O,
    setActiveKey: b,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: q,
    getNextActiveKey: x,
    scrollIntoView: C,
    handleKeyDown: H
  };
}, _f = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const r = B(0), a = /* @__PURE__ */ new Map(), i = v(() => e.value.length), s = B(0), u = v(() => {
    const E = s.value + o.value * 3;
    return E > i.value ? i.value : E;
  }), d = v(() => {
    const E = i.value - o.value * 3;
    return E < 0 ? 0 : E;
  }), f = (E) => {
    E < 0 ? s.value = 0 : E > d.value ? s.value = d.value : s.value = E;
  }, m = B(n.value), p = v(() => l.value !== 30 ? l.value : r.value || l.value), g = (E, F) => {
    a.set(E, F);
  }, y = (E) => {
    var F;
    if (m.value)
      return p.value;
    const q = e.value[E];
    return (F = a.get(q)) != null ? F : p.value;
  }, z = (E) => a.has(E);
  xe(() => {
    const E = Array.from(a.values()).reduce((F, q) => F + q, 0);
    E > 0 && (r.value = E / a.size);
  });
  const I = (E) => m.value ? p.value * E : V(0, E), V = (E, F) => {
    let q = 0;
    for (let O = E; O < F; O++)
      q += y(O);
    return q;
  }, S = v(() => m.value ? p.value * s.value : V(0, s.value)), w = (E) => {
    const F = E >= S.value;
    let q = Math.abs(E - S.value);
    const O = F ? s.value : s.value - 1;
    let b = 0;
    for (; q > 0; )
      q -= y(O + b), F ? b++ : b--;
    return b;
  }, D = (E) => {
    const F = w(E), q = s.value + F - o.value;
    return q < 0 ? 0 : q > d.value ? d.value : q;
  }, $ = v(() => m.value ? p.value * (i.value - u.value) : V(u.value, i.value));
  return {
    frontPadding: S,
    behindPadding: $,
    start: s,
    end: u,
    getStartByScroll: D,
    setItemSize: g,
    hasItemSize: z,
    setStart: f,
    getScrollOffset: I
  };
};
var $f = L({
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
    const l = (n = Kn()) == null ? void 0 : n.vnode.key, o = B(), r = () => {
      var a, i, s, u;
      const d = (i = (a = o.value) == null ? void 0 : a.$el) != null ? i : o.value, f = (u = (s = d == null ? void 0 : d.getBoundingClientRect) == null ? void 0 : s.call(d).height) != null ? u : d == null ? void 0 : d.offsetHeight;
      f && e.setItemSize(l, f);
    };
    return xe(() => r()), Wt(() => r()), () => {
      var a;
      const i = hn((a = t.default) == null ? void 0 : a.call(t));
      return i ? ql(i, {
        ref: o
      }, !0) : null;
    };
  }
}), wf = Object.defineProperty, xr = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, Cf = Object.prototype.propertyIsEnumerable, Br = (e, t, n) => t in e ? wf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sf = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && Br(e, n, t[n]);
  if (xr)
    for (var n of xr(t))
      Cf.call(t, n) && Br(e, n, t[n]);
  return e;
};
const Vf = L({
  name: "VirtualList",
  components: {
    VirtualListItem: $f
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
    } = $e(e), s = ee("virtual-list"), u = v(() => Ve(e.component) ? Sf({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), d = B(), f = B(), m = v(() => ({
      height: he(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), p = v(() => n.value.map((O, b) => {
      var x;
      return (x = O[l.value]) != null ? x : b;
    })), {
      frontPadding: g,
      behindPadding: y,
      start: z,
      end: I,
      getStartByScroll: V,
      setItemSize: S,
      hasItemSize: w,
      setStart: D,
      getScrollOffset: $
    } = _f({
      dataKeys: p,
      contentRef: f,
      fixedSize: o,
      estimatedSize: r,
      buffer: a
    }), E = v(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(z.value, I.value)), F = (O) => {
      const {
        scrollTop: b,
        scrollHeight: x,
        offsetHeight: C
      } = O.target, H = V(b);
      H !== z.value && (D(H), Le(() => {
        q(b);
      })), t("scroll", O), Math.floor(x - (b + C)) <= 0 && t("reachBottom", O);
    }, q = (O) => {
      var b, x;
      if (d.value)
        if (he(O))
          d.value.scrollTop = O;
        else {
          const C = (x = O.index) != null ? x : p.value.indexOf((b = O.key) != null ? b : "");
          D(C - a.value), d.value.scrollTop = $(C), Le(() => {
            if (d.value) {
              const H = $(C);
              H !== d.value.scrollTop && (d.value.scrollTop = H);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: d,
      contentRef: f,
      frontPadding: g,
      currentList: E,
      behindPadding: y,
      onScroll: F,
      setItemSize: S,
      hasItemSize: w,
      start: z,
      scrollTo: q,
      style: m,
      mergedComponent: u
    };
  }
});
function Ef(e, t, n, l, o, r) {
  const a = ce("VirtualListItem");
  return _(), de(tn(e.mergedComponent.container), {
    ref: "containerRef",
    class: K(e.prefixCls),
    style: me(e.style),
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
        default: ne(() => [(_(!0), j(ze, null, wt(e.currentList, (i, s) => {
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
var Of = /* @__PURE__ */ se(Vf, [["render", Ef]]);
const xf = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Bf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], If = /* @__PURE__ */ h("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Pf = [If];
function jf(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Pf, 14, Bf);
}
var xo = /* @__PURE__ */ se(xf, [["render", jf]]);
const Pa = Object.assign(xo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xo.name, xo);
  }
}), Tf = ({
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
}, Mf = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Df = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zf = /* @__PURE__ */ h("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Af = [zf];
function Lf(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Af, 14, Df);
}
var Bo = /* @__PURE__ */ se(Mf, [["render", Lf]]);
const Ff = Object.assign(Bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Bo.name, Bo);
  }
}), Nf = ({
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
  }), g = ($, E) => {
    s.value = $, n(o, $), n(l, $, E);
  }, y = ($) => {
    const {
      value: E
    } = $.target;
    d.value || (g(E, $), Le(() => {
      i.value && p.value !== i.value.value && (i.value.value = p.value);
    }));
  }, z = ($) => {
    l === "input" && p.value !== m && (m = p.value, n("change", p.value, $));
  }, I = ($) => {
    var E;
    const {
      value: F
    } = $.target;
    $.type === "compositionend" ? (d.value = !1, f.value = "", g(F, $), Le(() => {
      i.value && p.value !== i.value.value && (i.value.value = p.value);
    })) : (d.value = !0, f.value = p.value + ((E = $.data) != null ? E : ""));
  }, V = ($) => {
    var E, F;
    u.value = !0, m = p.value, n("focus", $), (F = (E = r == null ? void 0 : r.value) == null ? void 0 : E.onFocus) == null || F.call(E, $);
  }, S = ($) => {
    var E, F;
    u.value = !1, n("blur", $), (F = (E = r == null ? void 0 : r.value) == null ? void 0 : E.onBlur) == null || F.call(E, $), z($);
  }, w = ($) => {
    const E = $.key || $.code;
    !d.value && E === Oa.key && (n("pressEnter", $), z($));
  }, D = ($) => {
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
    handleComposition: I,
    handleFocus: V,
    handleBlur: S,
    handleKeyDown: w,
    handleMousedown: D
  };
};
var Rf = L({
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
      eventHandlers: g
    } = vt({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: y
    } = bt(f), {
      inputRef: z,
      _focused: I,
      computedValue: V,
      handleInput: S,
      handleComposition: w,
      handleFocus: D,
      handleBlur: $,
      handleMousedown: E
    } = Nf({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: g
    }), F = v(() => {
      var J;
      return (J = e.focused) != null ? J : I.value;
    }), q = v(() => e.enabledInput && I.value || !e.modelValue), O = () => {
      var J, W;
      return e.modelValue ? (W = (J = e.formatLabel) == null ? void 0 : J.call(e, e.modelValue)) != null ? W : e.modelValue.label : "";
    }, b = v(() => e.enabledInput && e.modelValue ? O() : e.placeholder), x = () => {
      var J, W;
      return e.modelValue ? (W = (J = l.default) == null ? void 0 : J.call(l, {
        data: e.modelValue
      })) != null ? W : O() : null;
    }, C = v(() => [d, `${d}-size-${y.value}`, {
      [`${d}-search`]: e.enabledInput,
      [`${d}-focus`]: F.value,
      [`${d}-disabled`]: m.value,
      [`${d}-error`]: p.value
    }]), H = v(() => Gn(t, Rt)), G = v(() => Xn(t, Rt));
    return {
      inputRef: z,
      render: () => c("span", Se(H.value, {
        class: C.value,
        title: O(),
        onMousedown: E
      }), [l.prefix && c("span", {
        class: `${d}-prefix`
      }, [l.prefix()]), c("input", Se(G.value, {
        ref: z,
        class: [`${d}-input`, {
          [`${d}-input-hidden`]: !q.value
        }],
        value: V.value,
        readonly: !e.enabledInput,
        placeholder: b.value,
        disabled: m.value,
        onInput: S,
        onFocus: D,
        onBlur: $,
        onCompositionstart: w,
        onCompositionupdate: w,
        onCompositionend: w
      }), null), c("span", {
        class: [`${d}-value`, {
          [`${d}-value-hidden`]: q.value
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
}), qf = Object.defineProperty, Ir = Object.getOwnPropertySymbols, Hf = Object.prototype.hasOwnProperty, Wf = Object.prototype.propertyIsEnumerable, Pr = (e, t, n) => t in e ? qf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Uf = (e, t) => {
  for (var n in t || (t = {}))
    Hf.call(t, n) && Pr(e, n, t[n]);
  if (Ir)
    for (var n of Ir(t))
      Wf.call(t, n) && Pr(e, n, t[n]);
  return e;
};
const Kf = (e, t) => {
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
    else if (e || he(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Uf({
        raw: o
      }, o));
    }
  return n;
}, jr = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Yf = L({
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
    } = $e(e), l = ee("tag"), o = v(() => e.color && jr.includes(e.color)), r = v(() => e.color && !jr.includes(e.color)), a = B(e.defaultVisible), i = B(e.defaultChecked), s = v(() => {
      var z;
      return (z = e.visible) != null ? z : a.value;
    }), u = v(() => {
      var z;
      return e.checkable ? (z = e.checked) != null ? z : i.value : !0;
    }), {
      mergedSize: d
    } = bt(n), f = v(() => d.value === "mini" ? "small" : d.value), m = (z) => {
      a.value = !1, t("update:visible", !1), t("close", z);
    }, p = (z) => {
      if (e.checkable) {
        const I = !u.value;
        i.value = I, t("update:checked", I), t("check", I, z);
      }
    }, g = v(() => [l, `${l}-size-${f.value}`, {
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
      cls: g,
      style: y,
      computedVisible: s,
      computedChecked: u,
      handleClick: p,
      handleClose: m
    };
  }
});
function Gf(e, t, n, l, o, r) {
  const a = ce("icon-close"), i = ce("icon-hover"), s = ce("icon-loading");
  return e.computedVisible ? (_(), j("span", {
    key: 0,
    class: K(e.cls),
    style: me(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (_(), j("span", {
    key: 0,
    class: K(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon")], 2)) : le("v-if", !0), e.nowrap ? (_(), j("span", {
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
  }, 8, ["prefix", "class", "onClick"])) : le("v-if", !0), e.loading ? (_(), j("span", {
    key: 4,
    class: K(`${e.prefixCls}-loading-icon`)
  }, [c(s)], 2)) : le("v-if", !0)], 6)) : le("v-if", !0);
}
var Io = /* @__PURE__ */ se(Yf, [["render", Gf]]);
const Xf = Object.assign(Io, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Io.name, Io);
  }
});
var Zf = Object.defineProperty, Tr = Object.getOwnPropertySymbols, Qf = Object.prototype.hasOwnProperty, Jf = Object.prototype.propertyIsEnumerable, Mr = (e, t, n) => t in e ? Zf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, sl = (e, t) => {
  for (var n in t || (t = {}))
    Qf.call(t, n) && Mr(e, n, t[n]);
  if (Tr)
    for (var n of Tr(t))
      Jf.call(t, n) && Mr(e, n, t[n]);
  return e;
};
const ep = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Po = L({
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
      mergedError: g,
      feedback: y,
      eventHandlers: z
    } = vt({
      size: o,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: I
    } = bt(m), V = v(() => sl(sl({}, ep), e.fieldNames)), S = B(!1), w = B(e.defaultValue), D = B(e.defaultInputValue), $ = B(!1), E = B(""), F = v(() => Ve(e.retainInputValue) ? sl({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), q = Pe({
      width: "12px"
    }), O = v(() => e.focused || S.value), b = (M, X) => {
      D.value = M, t("update:inputValue", M), t("inputValueChange", M, X);
    }, x = (M) => {
      var X;
      const {
        value: oe
      } = M.target;
      M.type === "compositionend" ? ($.value = !1, E.value = "", b(oe, M), Le(() => {
        d.value && H.value !== d.value.value && (d.value.value = H.value);
      })) : ($.value = !0, E.value = H.value + ((X = M.data) != null ? X : ""));
    }, C = v(() => {
      var M;
      return (M = e.modelValue) != null ? M : w.value;
    }), H = v(() => {
      var M;
      return (M = e.inputValue) != null ? M : D.value;
    });
    be(s, (M) => {
      (Xe(M) || Vn(M)) && (w.value = []);
    });
    const G = (M) => {
      d.value && M.target !== d.value && (M.preventDefault(), d.value.focus());
    }, Y = (M) => {
      const {
        value: X
      } = M.target;
      $.value || (b(X, M), Le(() => {
        d.value && H.value !== d.value.value && (d.value.value = H.value);
      }));
    }, J = v(() => Kf(C.value, V.value)), W = v(() => {
      if (e.maxTagCount > 0) {
        const M = J.value.length - e.maxTagCount;
        if (M > 0) {
          const X = J.value.slice(0, e.maxTagCount), oe = {
            value: "__arco__more",
            label: `+${M}...`,
            closable: !1
          };
          return X.push(sl({
            raw: oe
          }, oe)), X;
        }
      }
      return J.value;
    }), te = (M, X) => {
      var oe, je;
      w.value = M, t("update:modelValue", M), t("change", M, X), (je = (oe = z.value) == null ? void 0 : oe.onChange) == null || je.call(oe, X);
    }, P = (M, X, oe) => {
      var je;
      const Te = (je = C.value) == null ? void 0 : je.filter((Et, Ye) => Ye !== X);
      te(Te, oe), t("remove", M, oe);
    }, k = (M) => {
      te([], M), t("clear", M);
    }, U = v(() => !p.value && !e.readonly && e.allowClear && Boolean(C.value.length)), Q = (M) => {
      var X;
      if (H.value) {
        if (M.preventDefault(), e.uniqueValue && ((X = C.value) != null && X.includes(H.value))) {
          t("pressEnter", H.value, M);
          return;
        }
        const oe = C.value.concat(H.value);
        te(oe, M), t("pressEnter", H.value, M), F.value.create || b("", M);
      }
    }, ve = (M) => {
      var X, oe;
      S.value = !0, t("focus", M), (oe = (X = z.value) == null ? void 0 : X.onFocus) == null || oe.call(X, M);
    }, we = (M) => {
      var X, oe;
      S.value = !1, !F.value.blur && H.value && b("", M), t("blur", M), (oe = (X = z.value) == null ? void 0 : X.onBlur) == null || oe.call(X, M);
    }, fe = () => {
      for (let M = J.value.length - 1; M >= 0; M--)
        if (J.value[M].closable)
          return M;
      return -1;
    }, Ae = (M) => {
      if (p.value || e.readonly)
        return;
      const X = M.key || M.code;
      if (!$.value && H.value && X === Oa.key && Q(M), !$.value && W.value.length > 0 && !H.value && X === hc.key) {
        const oe = fe();
        oe >= 0 && P(J.value[oe].value, oe, M);
      }
    }, Ce = (M) => {
      M > 12 ? q.width = `${M}px` : q.width = "12px";
    };
    xe(() => {
      f.value && Ce(f.value.offsetWidth);
    });
    const Be = () => {
      f.value && Ce(f.value.offsetWidth);
    };
    be(H, (M) => {
      d.value && !$.value && M !== d.value.value && (d.value.value = M);
    });
    const dt = v(() => [u, `${u}-size-${I.value}`, {
      [`${u}-disabled`]: p.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: g.value,
      [`${u}-focus`]: O.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: W.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || U.value || y.value,
      [`${u}-has-placeholder`]: !C.value.length
    }]), et = v(() => Gn(l, Rt)), ot = v(() => Xn(l, Rt));
    return {
      inputRef: d,
      render: () => {
        var M;
        return c("span", Se({
          class: dt.value,
          onMousedown: G
        }, et.value), [c(Ol, {
          onResize: Be
        }, {
          default: () => [c("span", {
            ref: f,
            class: `${u}-mirror`
          }, [W.value.length > 0 ? E.value || H.value : E.value || H.value || e.placeholder])]
        }), n.prefix && c("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), c(Bi, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [W.value.map((X, oe) => c(Xf, Se({
            key: `tag-${X.value}`,
            class: `${u}-tag`,
            closable: !p.value && !e.readonly && X.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, X.tagProps, {
            onClose: (je) => P(X.value, oe, je)
          }), {
            default: () => {
              var je, Te, Et, Ye;
              return [(Ye = (Et = (je = n.tag) == null ? void 0 : je.call(n, {
                data: X.raw
              })) != null ? Et : (Te = e.formatTag) == null ? void 0 : Te.call(e, X.raw)) != null ? Ye : X.label];
            }
          })), c("input", Se(ot.value, {
            ref: d,
            key: "input-tag-input",
            class: `${u}-input`,
            style: q,
            placeholder: W.value.length === 0 ? e.placeholder : void 0,
            disabled: p.value,
            readonly: e.readonly || e.disabledInput,
            onInput: Y,
            onKeydown: Ae,
            onFocus: ve,
            onBlur: we,
            onCompositionstart: x,
            onCompositionupdate: x,
            onCompositionend: x
          }), null)]
        }), U.value && c(ct, {
          class: `${u}-clear-btn`,
          onClick: k,
          onMousedown: (X) => X.stopPropagation()
        }, {
          default: () => [c(an, null, null)]
        }), (n.suffix || Boolean(y.value)) && c("span", {
          class: `${u}-suffix`
        }, [(M = n.suffix) == null ? void 0 : M.call(n), Boolean(y.value) && c(Ea, {
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
const tp = Object.assign(Po, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Po.name, Po);
  }
});
var Dr = L({
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
      default: (e) => De(e.modelValue)
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
    } = bt(d), {
      opened: p
    } = $e(e), g = B(), y = v(() => {
      var b;
      return (b = g.value) == null ? void 0 : b.inputRef;
    }), z = v(() => e.modelValue.length === 0), I = v(() => e.allowSearch || e.allowCreate), V = v(() => e.allowClear && !e.disabled && !z.value), S = (b) => {
      var x, C;
      t("focus", b), (C = (x = s.value) == null ? void 0 : x.onFocus) == null || C.call(x, b);
    }, w = (b) => {
      var x, C;
      t("blur", b), (C = (x = s.value) == null ? void 0 : x.onBlur) == null || C.call(x, b);
    }, D = (b) => {
      t("remove", b);
    }, $ = (b) => {
      t("clear", b);
    }, E = () => {
      var b, x, C, H;
      return e.loading ? (x = (b = n["loading-icon"]) == null ? void 0 : b.call(n)) != null ? x : c(Ut, null, null) : e.allowSearch && e.opened ? (H = (C = n["search-icon"]) == null ? void 0 : C.call(n)) != null ? H : c(sa, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : c(Pa, {
        class: `${a}-arrow-icon`
      }, null);
    }, F = () => c(ze, null, [V.value && c(ct, {
      class: `${a}-clear-btn`,
      onClick: $,
      onMousedown: (b) => b.stopPropagation()
    }, {
      default: () => [c(an, null, null)]
    }), c("span", {
      class: `${a}-icon`
    }, [E()]), Boolean(i.value) && c(Ea, {
      type: i.value
    }, null)]);
    be(p, (b) => {
      !b && y.value && y.value.isSameNode(document.activeElement) && y.value.blur();
    });
    const q = v(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: y,
      handleFocus: S,
      handleBlur: w,
      render: () => e.multiple ? c(tp, {
        ref: g,
        baseCls: a,
        class: q.value,
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
        onRemove: D,
        onFocus: S,
        onBlur: w
      }, {
        prefix: n.prefix,
        suffix: F,
        tag: n.label
      }) : c(Rf, {
        ref: g,
        baseCls: a,
        class: q.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: m.value,
        error: f.value,
        enabledInput: I.value,
        uninjectFormItemContext: !0,
        onFocus: S,
        onBlur: w
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: F
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
const np = L({
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
function lp(e, t, n, l, o, r) {
  return _(), j(ze, null, [h("li", {
    class: K(`${e.prefixCls}-title`)
  }, [re(e.$slots, "label", {}, () => [ge(ye(e.label), 1)])], 2), re(e.$slots, "default")], 64);
}
var gl = /* @__PURE__ */ se(np, [["render", lp]]);
const zr = typeof window > "u" ? global : window;
function op(e, t) {
  let n = 0;
  return (...l) => {
    n && zr.clearTimeout(n), n = zr.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var ap = Object.defineProperty, rp = Object.defineProperties, ip = Object.getOwnPropertyDescriptors, Ar = Object.getOwnPropertySymbols, sp = Object.prototype.hasOwnProperty, up = Object.prototype.propertyIsEnumerable, Lr = (e, t, n) => t in e ? ap(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    sp.call(t, n) && Lr(e, n, t[n]);
  if (Ar)
    for (var n of Ar(t))
      up.call(t, n) && Lr(e, n, t[n]);
  return e;
}, cp = (e, t) => rp(e, ip(t));
function dp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
const fp = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var jo = L({
  name: "Select",
  components: {
    Trigger: Bl,
    SelectView: Dr
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
      default: (e) => Xe(e.multiple) ? "" : []
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
      modelValue: g,
      fieldNames: y,
      loading: z,
      defaultActiveFirstOption: I
    } = $e(e), V = ee("select"), {
      mergedSize: S,
      mergedDisabled: w,
      mergedError: D,
      eventHandlers: $
    } = vt({
      size: o,
      disabled: r,
      error: a
    }), E = v(() => e.virtualListProps ? "div" : "li"), F = v(() => Ve(e.allowSearch) && Boolean(e.allowSearch.retainInputValue));
    v(() => {
      if (Je(e.formatLabel))
        return (N) => {
          const T = Te.get(N.value);
          return e.formatLabel(T);
        };
    });
    const q = B(), O = B({}), b = B(), {
      computedPopupVisible: x,
      handlePopupVisibleChange: C
    } = Tf({
      popupVisible: f,
      defaultPopupVisible: m,
      emit: n
    }), H = B(e.defaultValue), G = v(() => {
      var N;
      const T = (N = e.modelValue) != null ? N : H.value;
      return (De(T) ? T : T || he(T) || kt(T) || Wl(T) ? [T] : []).map((ae) => ({
        value: ae,
        key: Wn(ae, e.valueKey)
      }));
    });
    be(g, (N) => {
      (Xe(N) || Vn(N)) && (H.value = d.value ? [] : N);
    });
    const Y = v(() => G.value.map((N) => N.key)), J = v(() => In(In({}, fp), y == null ? void 0 : y.value)), W = B(), te = (N) => {
      const T = {};
      return N.forEach((R) => {
        T[R] = Te.get(R);
      }), T;
    }, P = (N) => {
      W.value = te(N);
    }, k = (N) => Je(e.fallbackOption) ? e.fallbackOption(N) : {
      [J.value.value]: N,
      [J.value.label]: String(Ve(N) ? N[u == null ? void 0 : u.value] : N)
    }, U = () => {
      const N = [], T = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const R of G.value)
          if (!T.includes(R.key) && R.value !== "") {
            const ae = Te.get(R.key);
            (!ae || ae.origin === "extraOptions") && (N.push(R), T.push(R.key));
          }
      }
      if (e.allowCreate && fe.value) {
        const R = Wn(fe.value);
        if (!T.includes(R)) {
          const ae = Te.get(R);
          (!ae || ae.origin === "extraOptions") && N.push({
            value: fe.value,
            key: R
          });
        }
      }
      return N;
    }, Q = B([]), ve = v(() => Q.value.map((N) => {
      var T;
      let R = k(N.value);
      const ae = (T = W.value) == null ? void 0 : T[N.key];
      return !Xe(ae) && !Xs(ae) && (R = In(In({}, R), ae)), R;
    }));
    Le(() => {
      Ks(() => {
        var N;
        const T = U();
        if (T.length !== Q.value.length)
          Q.value = T;
        else if (T.length > 0) {
          for (let R = 0; R < T.length; R++)
            if (T[R].key !== ((N = Q.value[R]) == null ? void 0 : N.key)) {
              Q.value = T;
              break;
            }
        }
      });
    });
    const we = B(""), fe = v(() => {
      var N;
      return (N = e.inputValue) != null ? N : we.value;
    });
    be(x, (N) => {
      !N && !F.value && fe.value && Be("");
    });
    const Ae = (N) => {
      var T, R;
      return e.multiple ? N.map((ae) => {
        var ft, tt;
        return (tt = (ft = Te.get(ae)) == null ? void 0 : ft.value) != null ? tt : "";
      }) : (R = (T = Te.get(N[0])) == null ? void 0 : T.value) != null ? R : of(Te) ? void 0 : "";
    }, Ce = (N) => {
      var T, R;
      const ae = Ae(N);
      H.value = ae, n("update:modelValue", ae), n("change", ae), (R = (T = $.value) == null ? void 0 : T.onChange) == null || R.call(T), P(N);
    }, Be = (N) => {
      we.value = N, n("update:inputValue", N), n("inputValueChange", N);
    }, dt = (N, T) => {
      if (e.multiple) {
        if (Y.value.includes(N)) {
          const R = Y.value.filter((ae) => ae !== N);
          Ce(R);
        } else if (Ye.value.includes(N))
          if (e.limit > 0 && Y.value.length >= e.limit) {
            const R = Te.get(N);
            n("exceedLimit", R == null ? void 0 : R.value, T);
          } else {
            const R = Y.value.concat(N);
            Ce(R);
          }
        F.value || Be("");
      } else {
        if (N !== Y.value[0] && Ce([N]), F.value) {
          const R = Te.get(N);
          R && Be(R.label);
        }
        C(!1);
      }
    }, et = op((N) => {
      n("search", N);
    }, e.searchDelay), ot = (N) => {
      N !== fe.value && (x.value || C(!0), Be(N), e.allowSearch && et(N));
    }, A = (N) => {
      const T = Te.get(N), R = Y.value.filter((ae) => ae !== N);
      Ce(R), n("remove", T == null ? void 0 : T.value);
    }, M = (N) => {
      N == null || N.stopPropagation();
      const T = Y.value.filter((R) => {
        var ae;
        return (ae = Te.get(R)) == null ? void 0 : ae.disabled;
      });
      Ce(T), Be(""), n("clear", N);
    }, X = (N) => {
      n("dropdownScroll", N);
    }, oe = (N) => {
      n("dropdownReachBottom", N);
    }, {
      validOptions: je,
      optionInfoMap: Te,
      validOptionInfos: Et,
      enabledOptionKeys: Ye,
      handleKeyDown: lo
    } = yf({
      multiple: d,
      options: i,
      extraOptions: ve,
      inputValue: fe,
      filterOption: s,
      showExtraOptions: p,
      component: E,
      valueKey: u,
      fieldNames: y,
      loading: z,
      popupVisible: x,
      valueKeys: Y,
      dropdownRef: q,
      optionRefs: O,
      virtualListRef: b,
      defaultActiveFirstOption: I,
      onSelect: dt,
      onPopupVisibleChange: C
    }), oo = v(() => {
      var N;
      const T = [];
      for (const R of G.value) {
        const ae = Te.get(R.key);
        ae && T.push(cp(In({}, ae), {
          value: R.key,
          label: (N = ae == null ? void 0 : ae.label) != null ? N : String(Ve(R.value) ? R.value[u == null ? void 0 : u.value] : R.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return T;
    }), Bn = (N) => {
      if (Je(t.option)) {
        const T = t.option;
        return () => T({
          data: N.raw
        });
      }
      return Je(N.render) ? N.render : () => N.label;
    }, Mt = (N) => {
      if (ts(N)) {
        let T;
        return c(gl, {
          key: N.key,
          label: N.label
        }, dp(T = N.options.map((R) => Mt(R))) ? T : {
          default: () => [T]
        });
      }
      return Yl(N, {
        inputValue: fe.value,
        filterOption: s == null ? void 0 : s.value
      }) ? c(mn, {
        ref: (T) => {
          T != null && T.$el && (O.value[N.key] = T.$el);
        },
        key: N.key,
        value: N.value,
        label: N.label,
        disabled: N.disabled,
        internal: !0
      }, {
        default: Bn(N)
      }) : null;
    }, ll = () => c(Gd, {
      ref: q,
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
        var N, T;
        return [...(T = (N = t.default) == null ? void 0 : N.call(t)) != null ? T : [], ...je.value.map(Mt)];
      },
      "virtual-list": () => c(Of, Se(e.virtualListProps, {
        ref: b,
        data: je.value
      }), {
        item: ({
          item: N
        }) => Mt(N)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), ao = ({
      data: N
    }) => {
      var T, R, ae, ft;
      if ((t.label || Je(e.formatLabel)) && N) {
        const tt = Te.get(N.value);
        if (tt != null && tt.raw)
          return (ae = (T = t.label) == null ? void 0 : T.call(t, {
            data: tt.raw
          })) != null ? ae : (R = e.formatLabel) == null ? void 0 : R.call(e, tt.raw);
      }
      return (ft = N == null ? void 0 : N.label) != null ? ft : "";
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
      disabled: w.value,
      popupVisible: x.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: C
    }, e.triggerProps), {
      default: () => {
        var N, T;
        return [(T = (N = t.trigger) == null ? void 0 : N.call(t)) != null ? T : c(Dr, Se({
          class: V,
          modelValue: oo.value,
          inputValue: fe.value,
          multiple: e.multiple,
          disabled: w.value,
          error: D.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: Boolean(e.allowSearch),
          opened: x.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: S.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: ot,
          onRemove: A,
          onClear: M,
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
  Option: mn,
  OptGroup: gl,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + jo.name, jo), e.component(n + mn.name, mn), e.component(n + gl.name, gl);
  }
}), pp = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), vp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], hp = /* @__PURE__ */ h("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), mp = [hp];
function gp(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, mp, 14, vp);
}
var To = /* @__PURE__ */ se(pp, [["render", gp]]);
const bp = Object.assign(To, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + To.name, To);
  }
}), yp = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), _p = ["stroke-width", "stroke-linecap", "stroke-linejoin"], $p = /* @__PURE__ */ h("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), wp = [$p];
function kp(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, wp, 14, _p);
}
var Mo = /* @__PURE__ */ se(yp, [["render", kp]]);
const ls = Object.assign(Mo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Mo.name, Mo);
  }
}), Cp = (e) => {
  const t = {}, n = B([]), l = () => {
    if (t.value) {
      const o = qi(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return xe(() => l()), Pt(() => l()), {
    children: t,
    components: n
  };
}, Sp = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var Vp = Object.defineProperty, Ep = Object.defineProperties, Op = Object.getOwnPropertyDescriptors, Fr = Object.getOwnPropertySymbols, xp = Object.prototype.hasOwnProperty, Bp = Object.prototype.propertyIsEnumerable, Nr = (e, t, n) => t in e ? Vp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ip = (e, t) => {
  for (var n in t || (t = {}))
    xp.call(t, n) && Nr(e, n, t[n]);
  if (Fr)
    for (var n of Fr(t))
      Bp.call(t, n) && Nr(e, n, t[n]);
  return e;
}, Pp = (e, t) => Ep(e, Op(t));
const os = (e, t, n) => {
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
}, jp = "[-\\+]?\\d+%?", Tp = "[-\\+]?\\d*\\.\\d+%?", Jt = `(?:${Tp})|(?:${jp})`, Mp = `[\\s|\\(]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})\\s*\\)?`, Dp = `[\\s|\\(]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})\\s*\\)?`, zt = {
  rgb: new RegExp(`rgb${Mp}`),
  rgba: new RegExp(`rgba${Dp}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, Re = (e) => parseInt(e, 16), Rr = (e) => Re(e) / 255, zp = (e) => {
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
    a: Rr(t[4])
  } : (t = zt.hex6.exec(e), t ? {
    r: Re(t[1]),
    g: Re(t[2]),
    b: Re(t[3])
  } : (t = zt.hex4.exec(e), t ? {
    r: Re(t[1] + t[1]),
    g: Re(t[2] + t[2]),
    b: Re(t[3] + t[3]),
    a: Rr(t[4] + t[4])
  } : (t = zt.hex3.exec(e), t ? {
    r: Re(t[1] + t[1]),
    g: Re(t[2] + t[2]),
    b: Re(t[3] + t[3])
  } : !1)))));
}, Ap = (e) => {
  var t;
  const n = zp(e);
  if (n) {
    const l = Gl(n.r, n.g, n.b);
    return Pp(Ip({}, l), {
      a: (t = n.a) != null ? t : 1
    });
  }
  return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
}, as = (e) => {
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
}, qr = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), Lp = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), rs = ({
  value: e,
  onChange: t
}) => {
  const n = B(!1), l = B(), o = B(), r = (d, f) => d < 0 ? 0 : d > f ? 1 : d / f, a = (d) => {
    if (!l.value)
      return;
    const {
      clientX: f,
      clientY: m
    } = d, p = l.value.getBoundingClientRect(), g = [r(f - p.x, p.width), r(m - p.y, p.height)];
    (g[0] !== e[0] || g[1] !== e[1]) && (t == null || t(g));
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
var Hr = L({
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
    } = rs({
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
}), Fp = L({
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
    } = rs({
      value: [n.value.s, 1 - n.value.v],
      onChange: (i) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, i[0], 1 - i[1]);
      }
    }), a = v(() => {
      const i = os(n.value.h, 1, 1);
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
  ss && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
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
  var n = Un(e), l = Un(t), o = Ct(e) + Ct(t), r = n * l;
  return ca(r), r / Math.pow(10, o);
}), Np = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (qt(e, n) + qt(t, n)) / n;
}), Rp = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (qt(e, n) - qt(t, n)) / n;
}), is = Xl(function(e, t) {
  var n = Un(e), l = Un(t);
  return ca(n), ca(l), qt(n / l, Ta(Math.pow(10, Ct(t) - Ct(e))));
});
function qp(e, t) {
  var n = Math.pow(10, t), l = is(Math.round(Math.abs(qt(e, n))), n);
  return e < 0 && l !== 0 && (l = qt(l, -1)), l;
}
var ss = !0;
function Hp(e) {
  e === void 0 && (e = !0), ss = e;
}
var ln = {
  strip: Ta,
  plus: Np,
  minus: Rp,
  times: qt,
  divide: is,
  round: qp,
  digitLength: Ct,
  float2Fixed: Un,
  enableBoundaryChecking: Hp
};
const Wp = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Up = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Kp = /* @__PURE__ */ h("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), Yp = [Kp];
function Gp(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Yp, 14, Up);
}
var Do = /* @__PURE__ */ se(Wp, [["render", Gp]]);
const us = Object.assign(Do, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Do.name, Do);
  }
}), Xp = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Zp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Qp = /* @__PURE__ */ h("path", {
  d: "M5 24h38"
}, null, -1), Jp = [Qp];
function ev(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Jp, 14, Zp);
}
var zo = /* @__PURE__ */ se(Xp, [["render", ev]]);
const tv = Object.assign(zo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zo.name, zo);
  }
});
var nv = Object.defineProperty, Wr = Object.getOwnPropertySymbols, lv = Object.prototype.hasOwnProperty, ov = Object.prototype.propertyIsEnumerable, Ur = (e, t, n) => t in e ? nv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, av = (e, t) => {
  for (var n in t || (t = {}))
    lv.call(t, n) && Ur(e, n, t[n]);
  if (Wr)
    for (var n of Wr(t))
      ov.call(t, n) && Ur(e, n, t[n]);
  return e;
};
const rv = 800, iv = 150;
ln.enableBoundaryChecking(!1);
var Ao = L({
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
    } = bt(s), m = v(() => {
      if (he(e.precision)) {
        const k = `${e.step}`.split(".")[1], U = k && k.length || 0;
        return Math.max(U, e.precision);
      }
    }), p = (k) => {
      var U, Q;
      if (!he(k))
        return "";
      const ve = m.value ? k.toFixed(m.value) : String(k);
      return (Q = (U = e.formatter) == null ? void 0 : U.call(e, ve)) != null ? Q : ve;
    }, g = B(p((l = e.modelValue) != null ? l : e.defaultValue)), y = v(() => {
      var k, U;
      if (!g.value)
        return;
      const Q = Number((U = (k = e.parser) == null ? void 0 : k.call(e, g.value)) != null ? U : g.value);
      return Number.isNaN(Q) ? void 0 : Q;
    }), z = B(he(y.value) && y.value <= e.min), I = B(he(y.value) && y.value >= e.max);
    let V = 0;
    const S = () => {
      V && (window.clearTimeout(V), V = 0);
    }, w = (k) => {
      if (!Xe(k))
        return he(e.min) && k < e.min && (k = e.min), he(e.max) && k > e.max && (k = e.max), he(m.value) ? ln.round(k, m.value) : k;
    }, D = (k) => {
      let U = !1, Q = !1;
      he(k) && (k <= e.min && (U = !0), k >= e.max && (Q = !0)), I.value !== Q && (I.value = Q), z.value !== U && (z.value = U);
    }, $ = () => {
      const k = w(y.value), U = p(k);
      (k !== y.value || g.value !== U) && (g.value = U), t("update:modelValue", k);
    };
    be(() => [e.max, e.min], () => {
      $(), D(y.value);
    });
    const E = (k, U) => {
      if (u.value || k === "plus" && I.value || k === "minus" && z.value)
        return;
      let Q;
      he(y.value) ? Q = w(ln[k](y.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, g.value = p(Q), D(Q), t("update:modelValue", Q), t("change", Q, U);
    }, F = (k, U, Q = !1) => {
      var ve;
      k.preventDefault(), (ve = i.value) == null || ve.focus(), E(U, k), Q && (V = window.setTimeout(() => k.target.dispatchEvent(k), V ? iv : rv));
    }, q = (k, U) => {
      var Q, ve, we, fe;
      k = k.trim().replace(/。/g, "."), k = (ve = (Q = e.parser) == null ? void 0 : Q.call(e, k)) != null ? ve : k, (he(Number(k)) || /^(\.|-)$/.test(k)) && (g.value = (fe = (we = e.formatter) == null ? void 0 : we.call(e, k)) != null ? fe : k, D(y.value), t("input", y.value, g.value, U), e.modelEvent === "input" && (t("update:modelValue", y.value), t("change", y.value, U)));
    }, O = (k) => {
      t("focus", k);
    }, b = (k, U) => {
      U instanceof MouseEvent && !k || ($(), t("change", y.value, U));
    }, x = (k) => {
      t("blur", k);
    }, C = (k) => {
      var U, Q;
      g.value = "", t("update:modelValue", void 0), t("change", void 0, k), (Q = (U = d.value) == null ? void 0 : U.onChange) == null || Q.call(U, k), t("clear", k);
    }, H = ns(/* @__PURE__ */ new Map([[pn.ARROW_UP, (k) => {
      k.preventDefault(), !e.readOnly && E("plus", k);
    }], [pn.ARROW_DOWN, (k) => {
      k.preventDefault(), !e.readOnly && E("minus", k);
    }]])), G = (k) => {
      t("keydown", k), k.defaultPrevented || H(k);
    };
    be(() => e.modelValue, (k) => {
      k !== y.value && (g.value = p(k), D(k));
    });
    const Y = () => {
      var k, U, Q;
      return e.readOnly ? null : c(ze, null, [n.suffix && c("div", {
        class: `${a}-suffix`
      }, [(k = n.suffix) == null ? void 0 : k.call(n)]), c("div", {
        class: `${a}-step`
      }, [c("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || I.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || I.value,
        onMousedown: (ve) => F(ve, "plus", !0),
        onMouseup: S,
        onMouseleave: S
      }, [n.plus ? (U = n.plus) == null ? void 0 : U.call(n) : c(ls, null, null)]), c("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || z.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || z.value,
        onMousedown: (ve) => F(ve, "minus", !0),
        onMouseup: S,
        onMouseleave: S
      }, [n.minus ? (Q = n.minus) == null ? void 0 : Q.call(n) : c(Pa, null, null)])])]);
    }, J = v(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {
      [`${a}-readonly`]: e.readOnly
    }]), W = () => c(kn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || z.value,
      onMousedown: (k) => F(k, "minus", !0),
      onMouseup: S,
      onMouseleave: S
    }, {
      icon: () => c(tv, null, null)
    }), te = () => c(kn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || I.value,
      onMousedown: (k) => F(k, "plus", !0),
      onMouseup: S,
      onMouseleave: S
    }, {
      icon: () => c(us, null, null)
    });
    return {
      inputRef: i,
      render: () => {
        const k = e.mode === "embed" ? {
          prepend: n.prepend,
          prefix: n.prefix,
          suffix: e.hideButton ? n.suffix : Y,
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
          modelValue: g.value,
          placeholder: e.placeholder,
          disabled: u.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: av({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": g.value
          }, e.inputAttrs),
          onInput: q,
          onFocus: O,
          onBlur: x,
          onClear: C,
          onChange: b,
          onKeydown: G
        }, k);
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
    He(e, t);
    const n = qe(t);
    e.component(n + Ao.name, Ao);
  }
});
var cs = L({
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
    return () => c(Vt, {
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
}), sv = Object.defineProperty, Kr = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Yr = (e, t, n) => t in e ? sv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Gr = (e, t) => {
  for (var n in t || (t = {}))
    uv.call(t, n) && Yr(e, n, t[n]);
  if (Kr)
    for (var n of Kr(t))
      cv.call(t, n) && Yr(e, n, t[n]);
  return e;
}, dv = L({
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
      const a = Gr(Gr({}, n.value.rgb), o), i = Gl(a.r, a.g, a.b);
      (r = e.onHsvChange) == null || r.call(e, i);
    };
    return () => c(An, {
      class: `${t}-input-group`
    }, {
      default: () => [["r", "g", "b"].map((o) => c(Vt, {
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
      }, null)), !e.disabledAlpha && c(cs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), fv = L({
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
    } = $e(e), [l, o] = Hn(n.value.hex), r = (s) => {
      var u;
      const d = as(s) || {
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
      }), !e.disabledAlpha && c(cs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), pv = L({
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
    } = $a(), n = ee("color-picker"), l = v(() => e.color.hsv), [o, r] = Hn(e.format || "hex"), a = (m) => {
      r(m);
    };
    B(!1);
    const i = (m) => {
      var p;
      const g = as(m) || {
        r: 255,
        g: 0,
        b: 0
      }, y = Gl(g.r, g.g, g.b);
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
      return o.value === "rgb" ? c(dv, m, null) : c(fv, m, null);
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
    }, [c(Fp, {
      color: e.color,
      onChange: (m, p) => {
        var g;
        return (g = e.onHsvChange) == null ? void 0 : g.call(e, {
          h: l.value.h,
          s: m,
          v: p
        });
      }
    }, null), c("div", {
      class: `${n}-panel-control`
    }, [c("div", {
      class: `${n}-control-wrapper`
    }, [c("div", null, [c(Hr, {
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
    }, null), !e.disabledAlpha && c(Hr, {
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
    }, [c(ja, {
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
}), Lo = L({
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
      default: () => Sp
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
      var V;
      return (V = e.modelValue) != null ? V : e.defaultValue;
    }), r = v(() => Ap(o.value || "")), [a, i] = Hn(r.value.a), [s, u] = Hn({
      h: r.value.h,
      s: r.value.s,
      v: r.value.v
    });
    be(() => r.value, (V) => {
      o.value !== m.value && (i(V.a), u({
        h: V.h,
        s: V.s,
        v: V.v
      }));
    });
    const d = v(() => {
      const V = os(s.value.h, s.value.s, s.value.v), S = qr(V.r, V.g, V.b);
      return {
        hsv: s.value,
        rgb: V,
        hex: S
      };
    }), f = v(() => {
      const {
        r: V,
        g: S,
        b: w
      } = d.value.rgb;
      return `rgba(${V}, ${S}, ${w}, ${a.value.toFixed(2)})`;
    }), m = v(() => {
      const {
        r: V,
        g: S,
        b: w
      } = d.value.rgb;
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${V}, ${S}, ${w}, ${a.value.toFixed(2)})` : `rgb(${V}, ${S}, ${w})` : a.value < 1 && !e.disabledAlpha ? `#${Lp(V, S, w, a.value)}` : `#${qr(V, S, w)}`;
    });
    be(m, (V) => {
      t("update:modelValue", V), t("change", V);
    });
    const p = (V) => {
      !e.disabled && u(V);
    }, g = (V) => {
      !e.disabled && i(V);
    }, y = (V) => {
      t("popup-visible-change", V, m.value);
    }, z = () => c("div", {
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
    }, null)]), I = () => c(pv, {
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
      onAlphaChange: g
    }, null);
    return () => e.hideTrigger ? I() : c(Bl, Se({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 4,
      disabled: e.disabled,
      onPopupVisibleChange: y
    }, e.triggerProps), {
      default: () => [n.default ? n.default() : z()],
      content: I
    });
  }
});
const Ma = Object.assign(Lo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Lo.name, Lo);
  }
}), Xr = (e, t) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const n = t.split(".");
  if (n.length === 0)
    return;
  let l = e;
  for (let o = 0; o < n.length; o++) {
    if (!Ve(l) && !De(l) || !n[o])
      return;
    if (o !== n.length - 1)
      l = l[n[o]];
    else
      return l[n[o]];
  }
}, Zr = (e, t, n, {
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
    if (!Ve(r) && !De(r) || !o[a])
      return;
    a !== o.length - 1 ? (l && Xe(r[o[a]]) && (r[o[a]] = {}), r = r[o[a]]) : r[o[a]] = n;
  }
};
var vv = Object.defineProperty, hv = Object.defineProperties, mv = Object.getOwnPropertyDescriptors, Qr = Object.getOwnPropertySymbols, gv = Object.prototype.hasOwnProperty, bv = Object.prototype.propertyIsEnumerable, Jr = (e, t, n) => t in e ? vv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, yv = (e, t) => {
  for (var n in t || (t = {}))
    gv.call(t, n) && Jr(e, n, t[n]);
  if (Qr)
    for (var n of Qr(t))
      bv.call(t, n) && Jr(e, n, t[n]);
  return e;
}, _v = (e, t) => hv(e, mv(t));
const Il = ["xxl", "xl", "lg", "md", "sm", "xs"], ul = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Yt = [], $v = -1, cl = {};
const ei = {
  matchHandlers: {},
  dispatch(e, t) {
    return cl = e, Yt.length < 1 ? !1 : (Yt.forEach((n) => {
      n.func(cl, t);
    }), !0);
  },
  subscribe(e) {
    Yt.length === 0 && this.register();
    const t = (++$v).toString();
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
        this.dispatch(_v(yv({}, cl), {
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
function ti(e) {
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
    if (ti(e.value))
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
  return xe(() => {
    r = ei.subscribe((a) => {
      ti(e.value) && (l.value = a);
    });
  }), Hl(() => {
    r && ei.unsubscribe(r);
  }), o;
}
function ds(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function wv(e, t) {
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
function kv(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : ds(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Cv(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (ds(t) && typeof t.behavior == "function")
    return t.behavior(n ? rr(e, t) : []);
  if (n) {
    var l = kv(t);
    return wv(rr(e, l), l.behavior);
  }
}
const ni = ["success", "warning", "error", "validating"], Sv = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || ni.indexOf(l) > ni.indexOf(t)) && (t = e[n]);
  }
  return t;
}, Vv = (e) => {
  const t = [];
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && t.push(l);
  }
  return t;
}, fs = (e, t) => {
  const n = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${n}` : `${n}`;
};
var Ev = Object.defineProperty, li = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable, oi = (e, t, n) => t in e ? Ev(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bv = (e, t) => {
  for (var n in t || (t = {}))
    Ov.call(t, n) && oi(e, n, t[n]);
  if (li)
    for (var n of li(t))
      xv.call(t, n) && oi(e, n, t[n]);
  return e;
};
const Iv = L({
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
      rules: g
    } = $e(e), {
      mergedSize: y
    } = bt(p), z = v(() => e.layout === "horizontal" && e.autoLabelWidth), I = [], V = [], S = Pe({}), w = v(() => Math.max(...Object.values(S))), D = (W) => {
      W && W.field && I.push(W);
    }, $ = (W) => {
      W && W.field && I.splice(I.indexOf(W), 1);
    }, E = (W) => {
      I.forEach((te) => {
        W[te.field] && te.setField(W[te.field]);
      });
    }, F = (W, te) => {
      te && S[te] !== W && (S[te] = W);
    }, q = (W) => {
      W && delete S[W];
    }, O = (W) => {
      const te = W ? [].concat(W) : [];
      I.forEach((P) => {
        (te.length === 0 || te.includes(P.field)) && P.resetField();
      });
    }, b = (W) => {
      const te = W ? [].concat(W) : [];
      I.forEach((P) => {
        (te.length === 0 || te.includes(P.field)) && P.clearValidate();
      });
    }, x = (W, te) => {
      const k = (l.value || document.body).querySelector(`#${fs(e.id, W)}`);
      k && Cv(k, Bv({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, te));
    }, C = (W) => {
      const te = Wl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      x(W, te);
    }, H = (W) => {
      const te = [];
      return I.forEach((P) => {
        te.push(P.validate());
      }), Promise.all(te).then((P) => {
        const k = {};
        let U = !1;
        return P.forEach((Q) => {
          Q && (U = !0, k[Q.field] = Q);
        }), U && e.scrollToFirstError && C(Object.keys(k)[0]), Je(W) && W(U ? k : void 0), U ? k : void 0;
      });
    }, G = (W, te) => {
      const P = [];
      for (const k of I)
        (De(W) && W.includes(k.field) || W === k.field) && P.push(k.validate());
      return Promise.all(P).then((k) => {
        const U = {};
        let Q = !1;
        return k.forEach((ve) => {
          ve && (Q = !0, U[ve.field] = ve);
        }), Q && e.scrollToFirstError && C(Object.keys(U)[0]), Je(te) && te(Q ? U : void 0), Q ? U : void 0;
      });
    }, Y = (W) => {
      const te = [];
      I.forEach((P) => {
        te.push(P.validate());
      }), Promise.all(te).then((P) => {
        const k = {};
        let U = !1;
        P.forEach((Q) => {
          Q && (U = !0, k[Q.field] = Q);
        }), U ? (e.scrollToFirstError && C(Object.keys(k)[0]), t("submitFailed", {
          values: r.value,
          errors: k
        }, W)) : t("submitSuccess", r.value, W), t("submit", {
          values: r.value,
          errors: U ? k : void 0
        }, W);
      });
    };
    return Ht(xa, Pe({
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
      rules: g,
      fields: I,
      touchedFields: V,
      addField: D,
      removeField: $,
      validateField: G,
      setLabelWidth: F,
      removeLabelWidth: q,
      maxLabelWidth: w,
      autoLabelWidth: z
    })), {
      cls: v(() => [n, `${n}-layout-${e.layout}`, `${n}-size-${y.value}`, {
        [`${n}-auto-label-width`]: e.autoLabelWidth
      }]),
      formRef: l,
      handleSubmit: Y,
      innerValidate: H,
      innerValidateField: G,
      innerResetFields: O,
      innerClearValidate: b,
      innerSetFields: E,
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
function Pv(e, t, n, l, o, r) {
  return _(), j("form", {
    ref: "formRef",
    class: K(e.cls),
    onSubmit: t[0] || (t[0] = nn((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [re(e.$slots, "default")], 34);
}
var Fo = /* @__PURE__ */ se(Iv, [["render", Pv]]), En = Object.prototype.toString;
function Zl(e) {
  return En.call(e) === "[object Array]";
}
function xt(e) {
  return En.call(e) === "[object Object]";
}
function fa(e) {
  return En.call(e) === "[object String]";
}
function jv(e) {
  return En.call(e) === "[object Number]" && e === e;
}
function Tv(e) {
  return En.call(e) === "[object Boolean]";
}
function pa(e) {
  return En.call(e) === "[object Function]";
}
function Mv(e) {
  return xt(e) && Object.keys(e).length === 0;
}
function Zt(e) {
  return e == null || e === "";
}
function ps(e) {
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
    var o = n[l], r = t == null ? void 0 : t[l];
    n[l] = xt(o) ? Object.assign(Object.assign({}, o), r) : r || o;
  }), n;
}, Dv = function(e, t) {
  for (var n = t.split("."), l = e, o = 0; o < n.length; o++)
    if (l = l && l[n[o]], l === void 0)
      return l;
  return l;
}, Dt = "#{field} is not a #{type} type", zv = {
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
}, yt = function(t, n) {
  var l = this;
  this.getValidateMsg = function(o, r) {
    r === void 0 && (r = {});
    var a = Object.assign(Object.assign({}, r), {
      value: l.obj,
      field: l.field,
      type: l.type
    }), i = Dv(l.validateMessages, o);
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
  }, xt(n) && fa(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = za(zv, n.validateMessages);
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
  if (Zt(this.obj) || ps(this.obj)) {
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
yt.prototype.addError = function(t) {
  !this.error && t && (this.error = {
    value: this.obj,
    type: this.type,
    message: this.message || (xt(t) ? t : (this._not ? "[NOT MODE]:" : "") + t)
  });
};
yt.prototype.validate = function(t, n) {
  var l = this._not ? t : !t;
  return l && this.addError(n), this;
};
yt.prototype.collect = function(t) {
  t && t(this.error);
};
Object.defineProperties(yt.prototype, Ql);
var Av = /* @__PURE__ */ function(e) {
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
}(yt), Lv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "number"
    })), this.validate(o && o.strict ? jv(this.obj) : !0, this.getValidateMsg("type.number"));
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
}(yt), Fv = /* @__PURE__ */ function(e) {
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
    return this.obj ? this.validate(Da(this.obj, o), this.getValidateMsg("array.deepEqual", {
      value: this.obj,
      deepEqual: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(ps(this.obj), this.getValidateMsg("array.empty", {
      value: this.obj
    }));
  }, Object.defineProperties(t.prototype, n), t;
}(yt), Nv = /* @__PURE__ */ function(e) {
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
    var r = this;
    return this.obj ? this.validate(o.every(function(a) {
      return r.obj[a];
    }), this.getValidateMsg("object.hasKeys", {
      keys: o
    })) : this;
  }, n.empty.get = function() {
    return this.validate(Mv(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(t.prototype, n), t;
}(yt), Rv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "boolean"
    })), this.validate(o && o.strict ? Tv(this.obj) : !0, this.getValidateMsg("type.boolean"));
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
}(yt), qv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Hv = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), Wv = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, Uv = /* @__PURE__ */ function(e) {
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
    return this.type = "email", this.validate(this.obj === void 0 || qv.test(this.obj), this.getValidateMsg("type.email"));
  }, n.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || Hv.test(this.obj), this.getValidateMsg("type.url"));
  }, n.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || Wv.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, n), t;
}(yt), Kv = /* @__PURE__ */ function(e) {
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
}(yt), Pl = function(e, t) {
  return new vs(e, Object.assign({
    field: "value"
  }, t));
};
Pl.globalConfig = {};
Pl.setGlobalConfig = function(e) {
  Pl.globalConfig = e || {};
};
var vs = function(t, n) {
  var l = Pl.globalConfig, o = Object.assign(Object.assign(Object.assign({}, l), n), {
    validateMessages: za(l.validateMessages, n.validateMessages)
  });
  this.string = new Av(t, o), this.number = new Lv(t, o), this.array = new Fv(t, o), this.object = new Nv(t, o), this.boolean = new Rv(t, o), this.type = new Uv(t, o), this.custom = new Kv(t, o);
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
  var o = [], r = null;
  function a(i, s) {
    r || (r = {}), (!r[i] || s.requiredError) && (r[i] = s);
  }
  this.schema && Object.keys(this.schema).forEach(function(i) {
    if (Zl(l.schema[i]))
      for (var s = function(f) {
        var m = l.schema[i][f], p = m.type, g = m.message;
        if (!p && !m.validator)
          throw "You must specify a type to field " + i + "!";
        var y = Object.assign(Object.assign({}, l.options), {
          message: g,
          field: i
        });
        "ignoreEmptyString" in m && (y.ignoreEmptyString = m.ignoreEmptyString), "strict" in m && (y.strict = m.strict);
        var z = new vs(t[i], y), I = z.type[p] || null;
        if (!I)
          if (m.validator) {
            I = z.custom.validate(m.validator), Object.prototype.toString.call(I) === "[object Array]" && I[0].then ? o.push({
              function: I[0],
              _this: I[1],
              key: i
            }) : I && a(i, I);
            return;
          } else
            I = z[p];
        if (Object.keys(m).forEach(function(V) {
          m.required && (I = I.isRequired), V !== "message" && I[V] && m[V] && typeof I[V] == "object" && (I = I[V]), I[V] && m[V] !== void 0 && typeof I[V] == "function" && (I = I[V](m[V]));
        }), I.collect(function(V) {
          V && a(i, V);
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
const hs = Symbol("RowContextInjectionKey"), Yv = L({
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
      const g = {};
      if ((d.value || f.value) && !o.value) {
        const y = -d.value / 2, z = -f.value / 2;
        y && (g.marginLeft = `${y}px`, g.marginRight = `${y}px`), z && (g.marginTop = `${z}px`, g.marginBottom = `${z}px`);
      }
      return g;
    }), p = v(() => [d.value, f.value]);
    return Ht(hs, Pe({
      gutter: p,
      div: o
    })), {
      classNames: i,
      styles: m
    };
  }
});
function Gv(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(e.classNames),
    style: me(e.styles)
  }, [re(e.$slots, "default")], 6);
}
var Xv = /* @__PURE__ */ se(Yv, [["render", Gv]]);
function Zv(e) {
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
      he(m) ? d[f] = m : Ve(m) && he(m[l]) && (d[f] = m[l]);
    }), d;
  });
}
var Qv = Object.defineProperty, ai = Object.getOwnPropertySymbols, Jv = Object.prototype.hasOwnProperty, eh = Object.prototype.propertyIsEnumerable, ri = (e, t, n) => t in e ? Qv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, No = (e, t) => {
  for (var n in t || (t = {}))
    Jv.call(t, n) && ri(e, n, t[n]);
  if (ai)
    for (var n of ai(t))
      eh.call(t, n) && ri(e, n, t[n]);
  return e;
};
function th(e) {
  if (kt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || he(e))
    return e;
  if (kt(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const nh = L({
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
    const t = ee("col"), n = We(hs, {}), l = v(() => th(e.flex)), o = v(() => {
      const {
        div: f
      } = n, {
        span: m,
        offset: p,
        order: g,
        xs: y,
        sm: z,
        md: I,
        lg: V,
        xl: S,
        xxl: w
      } = e, D = {
        [`${t}`]: !f,
        [`${t}-order-${g}`]: g,
        [`${t}-${m}`]: !f && !y && !z && !I && !V && !S && !w,
        [`${t}-offset-${p}`]: p && p > 0
      }, $ = {
        xs: y,
        sm: z,
        md: I,
        lg: V,
        xl: S,
        xxl: w
      };
      return Object.keys($).forEach((E) => {
        const F = $[E];
        F && he(F) ? D[`${t}-${E}-${F}`] = !0 : F && Ve(F) && (D[`${t}-${E}-${F.span}`] = F.span, D[`${t}-${E}-offset-${F.offset}`] = F.offset, D[`${t}-${E}-order-${F.order}`] = F.order);
      }), D;
    }), r = v(() => l.value ? t : o.value), a = v(() => {
      const {
        gutter: f,
        div: m
      } = n, p = {};
      if (Array.isArray(f) && !m) {
        const g = f[0] && f[0] / 2 || 0, y = f[1] && f[1] / 2 || 0;
        g && (p.paddingLeft = `${g}px`, p.paddingRight = `${g}px`), y && (p.paddingTop = `${y}px`, p.paddingBottom = `${y}px`);
      }
      return p;
    }), i = v(() => l.value ? {
      flex: l.value
    } : {}), s = v(() => Xn(e, Il)), u = Zv(v(() => No({
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
function lh(e, t, n, l, o, r) {
  return e.visible ? (_(), j("div", {
    key: 0,
    class: K(e.classNames),
    style: me(e.styles)
  }, [re(e.$slots, "default")], 6)) : le("v-if", !0);
}
var oh = /* @__PURE__ */ se(nh, [["render", lh]]), ah = Object.defineProperty, ii = Object.getOwnPropertySymbols, rh = Object.prototype.hasOwnProperty, ih = Object.prototype.propertyIsEnumerable, si = (e, t, n) => t in e ? ah(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ui = (e, t) => {
  for (var n in t || (t = {}))
    rh.call(t, n) && si(e, n, t[n]);
  if (ii)
    for (var n of ii(t))
      ih.call(t, n) && si(e, n, t[n]);
  return e;
};
const sh = L({
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
        return ui({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = v(() => [`${n}-popup-arrow`, e.arrowClass]), u = v(() => {
      if (e.backgroundColor || e.arrowStyle)
        return ui({
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
function uh(e, t, n, l, o, r) {
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
    content: ne(() => [re(e.$slots, "content", {}, () => [ge(ye(e.content), 1)])]),
    default: ne(() => [re(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Ro = /* @__PURE__ */ se(sh, [["render", uh]]);
const Jl = Object.assign(Ro, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ro.name, Ro);
  }
}), ch = L({
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
      return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), dh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], fh = /* @__PURE__ */ h("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1), ph = /* @__PURE__ */ h("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1), vh = [fh, ph];
function hh(e, t, n, l, o, r) {
  return _(), j("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: K(e.cls),
    style: me(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, vh, 14, dh);
}
var qo = /* @__PURE__ */ se(ch, [["render", hh]]);
const mh = Object.assign(qo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + qo.name, qo);
  }
}), gh = L({
  name: "FormItemLabel",
  components: {
    ResizeObserver: xl,
    Tooltip: Jl,
    IconQuestionCircle: mh
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
    const e = ee("form-item-label"), t = We(xa, void 0), n = Kn(), l = B(), o = () => {
      l.value && he(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    };
    return xe(() => {
      l.value && he(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    }), Wt(() => {
      t == null || t.removeLabelWidth(n == null ? void 0 : n.uid);
    }), {
      prefixCls: e,
      labelRef: l,
      handleResize: o
    };
  }
}), bh = /* @__PURE__ */ h("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ h("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), yh = [bh], _h = /* @__PURE__ */ h("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ h("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), $h = [_h];
function wh(e, t, n, l, o, r) {
  const a = ce("icon-question-circle"), i = ce("Tooltip"), s = ce("ResizeObserver");
  return _(), de(s, {
    onResize: e.handleResize
  }, {
    default: ne(() => [(_(), de(tn(e.component), Se({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: ne(() => [e.required && e.asteriskPosition === "start" ? (_(), j("strong", {
        key: 0,
        class: K(`${e.prefixCls}-required-symbol`)
      }, yh, 2)) : le("v-if", !0), re(e.$slots, "default"), e.tooltip ? (_(), de(i, {
        key: 1,
        content: e.tooltip
      }, {
        default: ne(() => [c(a, {
          class: K(`${e.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : le("v-if", !0), e.required && e.asteriskPosition === "end" ? (_(), j("strong", {
        key: 2,
        class: K(`${e.prefixCls}-required-symbol`)
      }, $h, 2)) : le("v-if", !0), ge(" " + ye(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var kh = /* @__PURE__ */ se(gh, [["render", wh]]);
const Ch = L({
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
function Sh(e, t, n, l, o, r) {
  return e.error.length > 0 ? (_(!0), j(ze, {
    key: 0
  }, wt(e.error, (a) => (_(), de(Sl, {
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
    }, [re(e.$slots, "help", {}, () => [ge(ye(e.help), 1)])], 2)]),
    _: 3
  })) : le("v-if", !0);
}
var Vh = /* @__PURE__ */ se(Ch, [["render", Sh]]), Eh = Object.defineProperty, jl = Object.getOwnPropertySymbols, ms = Object.prototype.hasOwnProperty, gs = Object.prototype.propertyIsEnumerable, ci = (e, t, n) => t in e ? Eh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, di = (e, t) => {
  for (var n in t || (t = {}))
    ms.call(t, n) && ci(e, n, t[n]);
  if (jl)
    for (var n of jl(t))
      gs.call(t, n) && ci(e, n, t[n]);
  return e;
}, Oh = (e, t) => {
  var n = {};
  for (var l in e)
    ms.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && jl)
    for (var l of jl(e))
      t.indexOf(l) < 0 && gs.call(e, l) && (n[l] = e[l]);
  return n;
};
const xh = L({
  name: "FormItem",
  components: {
    ArcoRow: Xv,
    ArcoCol: oh,
    FormItemLabel: kh,
    FormItemMessage: Vh
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
    } = $e(e), l = We(xa, {}), {
      autoLabelWidth: o,
      layout: r
    } = $e(l), {
      i18nMessage: a
    } = $a(), i = v(() => {
      var P;
      const k = di({}, (P = e.labelColProps) != null ? P : l.labelColProps);
      return e.labelColFlex ? k.flex = e.labelColFlex : l.autoLabelWidth && (k.flex = `${l.maxLabelWidth}px`), k;
    }), s = v(() => {
      var P;
      const k = di({}, (P = e.wrapperColProps) != null ? P : l.wrapperColProps);
      return n.value && (k.id = fs(l.id, n.value)), (e.labelColFlex || l.autoLabelWidth) && (k.flex = "auto"), k;
    }), u = v(() => {
      var P;
      return (P = e.labelColStyle) != null ? P : l.labelColStyle;
    }), d = v(() => {
      var P;
      return (P = e.wrapperColStyle) != null ? P : l.wrapperColStyle;
    }), f = Xr(l.model, e.field), m = Pe({}), p = Pe({}), g = v(() => Sv(m)), y = v(() => Vv(p)), z = B(!1), I = v(() => Xr(l.model, e.field)), V = v(() => {
      var P;
      return Boolean((P = e.disabled) != null ? P : l == null ? void 0 : l.disabled);
    }), S = v(() => {
      var P;
      return (P = e.validateStatus) != null ? P : g.value;
    }), w = v(() => S.value === "error"), D = v(() => {
      var P, k, U;
      const Q = [].concat((U = (k = e.rules) != null ? k : (P = l == null ? void 0 : l.rules) == null ? void 0 : P[e.field]) != null ? U : []), ve = Q.some((we) => we.required);
      return e.required && !ve ? [{
        required: !0
      }].concat(Q) : Q;
    }), $ = v(() => D.value.some((P) => P.required)), E = e.noStyle ? We(ia, void 0) : void 0, F = (P, {
      status: k,
      message: U
    }) => {
      m[P] = k, p[P] = U, e.noStyle && (E == null || E.updateValidateState(P, {
        status: k,
        message: U
      }));
    }, q = v(() => e.feedback && S.value ? S.value : void 0), O = () => {
      var P;
      if (z.value)
        return Promise.resolve();
      const k = D.value;
      if (!n.value || k.length === 0)
        return g.value && C(), Promise.resolve();
      const U = n.value, Q = I.value;
      F(U, {
        status: "",
        message: ""
      });
      const ve = new Aa({
        [U]: k.map((we) => {
          var fe = Oh(we, []);
          return !fe.type && !fe.validator && (fe.type = "string"), fe;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (P = a.value.form) == null ? void 0 : P.validateMessages
      });
      return new Promise((we) => {
        ve.validate({
          [U]: Q
        }, (fe) => {
          var Ae;
          const Ce = Boolean(fe == null ? void 0 : fe[U]);
          F(U, {
            status: Ce ? "error" : "",
            message: (Ae = fe == null ? void 0 : fe[U].message) != null ? Ae : ""
          });
          const Be = Ce ? {
            label: e.label,
            field: n.value,
            value: fe[U].value,
            type: fe[U].type,
            isRequiredError: Boolean(fe[U].requiredError),
            message: fe[U].message
          } : void 0;
          we(Be);
        });
      });
    }, b = v(() => [].concat(e.validateTrigger)), x = v(() => b.value.reduce((P, k) => {
      switch (k) {
        case "change":
          return P.onChange = () => {
            O();
          }, P;
        case "input":
          return P.onInput = () => {
            Le(() => {
              O();
            });
          }, P;
        case "focus":
          return P.onFocus = () => {
            O();
          }, P;
        case "blur":
          return P.onBlur = () => {
            O();
          }, P;
        default:
          return P;
      }
    }, {}));
    Ht(ia, Pe({
      eventHandlers: x,
      size: l && Cl(l, "size"),
      disabled: V,
      error: w,
      feedback: q,
      updateValidateState: F
    }));
    const C = () => {
      n.value && F(n.value, {
        status: "",
        message: ""
      });
    }, Y = Pe({
      field: n,
      disabled: V,
      error: w,
      validate: O,
      clearValidate: C,
      resetField: () => {
        C(), z.value = !0, l != null && l.model && n.value && Zr(l.model, n.value, f), Le(() => {
          z.value = !1;
        });
      },
      setField: (P) => {
        var k, U;
        n.value && (z.value = !0, "value" in P && (l != null && l.model) && n.value && Zr(l.model, n.value, P.value), (P.status || P.message) && F(n.value, {
          status: (k = P.status) != null ? k : "",
          message: (U = P.message) != null ? U : ""
        }), Le(() => {
          z.value = !1;
        }));
      }
    });
    xe(() => {
      var P;
      Y.field && ((P = l.addField) == null || P.call(l, Y));
    }), Wt(() => {
      var P;
      Y.field && ((P = l.removeField) == null || P.call(l, Y));
    });
    const J = v(() => [t, `${t}-layout-${l.layout}`, {
      [`${t}-error`]: w.value,
      [`${t}-status-${S.value}`]: Boolean(S.value)
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
      isError: w,
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
function Bh(e, t, n, l, o, r) {
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
        }, () => [ge(ye(e.label), 1)]) : le("v-if", !0)]),
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
      }, xi({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: ne(() => [re(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : le("v-if", !0), e.$slots.extra || e.extra ? (_(), j("div", {
        key: 1,
        class: K(`${e.prefixCls}-extra`)
      }, [re(e.$slots, "extra", {}, () => [ge(ye(e.extra), 1)])], 2)) : le("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var gn = /* @__PURE__ */ se(xh, [["render", Bh]]);
const bs = Object.assign(Fo, {
  Item: gn,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Fo.name, Fo), e.component(n + gn.name, gn);
  }
}), Ih = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Ph = (e) => {
  const t = {};
  return Ih.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, jh = L({
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
    }), d = B(), f = B(), m = B(), p = B(), g = B(e.defaultValue), y = v(() => {
      var A;
      return (A = r.value) != null ? A : g.value;
    }), [z, I] = Yi(d);
    be(r, (A) => {
      (Xe(A) || Vn(A)) && (g.value = "");
    });
    const V = v(() => Ve(e.maxLength) && Boolean(e.maxLength.errorOnly)), S = v(() => Ve(e.maxLength) ? e.maxLength.length : e.maxLength), w = (A) => {
      var M;
      return Je(e.wordLength) ? e.wordLength(A) : (M = A.length) != null ? M : 0;
    }, D = v(() => w(y.value)), $ = v(() => s.value || Boolean(S.value && V.value && D.value > S.value)), E = B(!1), F = B(!1), q = v(() => e.allowClear && !i.value && y.value), O = B(!1), b = B(""), x = () => {
      z(), Le(() => {
        d.value && y.value !== d.value.value && (d.value.value = y.value, I());
      });
    }, C = (A, M = !0) => {
      var X, oe;
      S.value && !V.value && w(A) > S.value && (A = (oe = (X = e.wordSlice) == null ? void 0 : X.call(e, A, S.value)) != null ? oe : A.slice(0, S.value)), g.value = A, M && t("update:modelValue", A), x();
    };
    let H = y.value;
    const G = (A, M) => {
      var X, oe;
      A !== H && (H = A, t("change", A, M), (oe = (X = u.value) == null ? void 0 : X.onChange) == null || oe.call(X, M));
    }, Y = (A) => {
      var M, X;
      F.value = !0, H = y.value, t("focus", A), (X = (M = u.value) == null ? void 0 : M.onFocus) == null || X.call(M, A);
    }, J = (A) => {
      var M, X;
      F.value = !1, t("blur", A), (X = (M = u.value) == null ? void 0 : M.onBlur) == null || X.call(M, A), G(y.value, A);
    }, W = (A) => {
      var M, X;
      const {
        value: oe
      } = A.target;
      if (A.type === "compositionend") {
        if (O.value = !1, b.value = "", S.value && !V.value && y.value.length >= S.value && w(oe) > S.value) {
          x();
          return;
        }
        t("input", oe, A), C(oe), (X = (M = u.value) == null ? void 0 : M.onInput) == null || X.call(M, A);
      } else
        O.value = !0;
    }, te = (A) => {
      var M, X;
      const {
        value: oe
      } = A.target;
      if (O.value)
        b.value = oe;
      else {
        if (S.value && !V.value && y.value.length >= S.value && w(oe) > S.value && A.inputType === "insertText") {
          x();
          return;
        }
        t("input", oe, A), C(oe), (X = (M = u.value) == null ? void 0 : M.onInput) == null || X.call(M, A);
      }
    }, P = (A) => {
      C(""), G("", A), t("clear", A);
    };
    be(r, (A) => {
      A !== y.value && C(A ?? "", !1);
    });
    const k = (A) => Gn(n, Rt), U = (A) => Xn(n, Rt), Q = v(() => [`${a}-wrapper`, {
      [`${a}-focus`]: F.value,
      [`${a}-disabled`]: i.value,
      [`${a}-error`]: $.value,
      [`${a}-scroll`]: E.value
    }]);
    let ve;
    const we = B(0), fe = B(0), Ae = v(() => !Ve(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * we.value + fe.value), Ce = v(() => !Ve(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * we.value + fe.value), Be = () => {
      const A = Ph(ve);
      we.value = Number.parseInt(A["line-height"] || 0, 10), fe.value = Number.parseInt(A["border-width"] || 0, 10) * 2 + Number.parseInt(A["padding-top"] || 0, 10) + Number.parseInt(A["padding-bottom"] || 0, 10), p.value = A, Le(() => {
        var M;
        const X = (M = m.value) == null ? void 0 : M.offsetHeight;
        let oe = X ?? 0, je = "hidden";
        Ae.value && oe < Ae.value && (oe = Ae.value), Ce.value && oe > Ce.value && (oe = Ce.value, je = "auto"), f.value = {
          height: `${oe}px`,
          resize: "none",
          overflow: je
        };
      });
    };
    xe(() => {
      d.value && (ve = window.getComputedStyle(d.value), e.autoSize && Be()), ot();
    });
    const dt = () => {
      e.autoSize && m.value && Be(), ot();
    }, et = (A) => {
      d.value && A.target !== d.value && (A.preventDefault(), d.value.focus());
    }, ot = () => {
      d.value && (d.value.scrollHeight > d.value.offsetHeight ? E.value || (E.value = !0) : E.value && (E.value = !1));
    };
    return be(y, () => {
      e.autoSize && m.value && Be(), ot();
    }), {
      prefixCls: a,
      wrapperCls: Q,
      textareaRef: d,
      textareaStyle: f,
      mirrorRef: m,
      mirrorStyle: p,
      computedValue: y,
      showClearBtn: q,
      valueLength: D,
      computedMaxLength: S,
      mergedDisabled: i,
      getWrapperAttrs: k,
      getTextareaAttrs: U,
      handleInput: te,
      handleFocus: Y,
      handleBlur: J,
      handleComposition: W,
      handleClear: P,
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
}), Th = ["disabled", "value", "placeholder"];
function Mh(e, t, n, l, o, r) {
  const a = ce("resize-observer"), i = ce("icon-close"), s = ce("icon-hover");
  return _(), j("div", Se(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (_(), j("div", {
    key: 0,
    ref: "mirrorRef",
    class: K(`${e.prefixCls}-mirror`),
    style: me(e.mirrorStyle)
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
    }), null, 16, Th)]),
    _: 1
  }, 8, ["onResize"]), re(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (_(), j("div", {
    key: 1,
    class: K(`${e.prefixCls}-word-limit`)
  }, ye(e.valueLength) + "/" + ye(e.computedMaxLength), 3)) : le("v-if", !0), e.showClearBtn ? (_(), j("div", {
    key: 2,
    class: K(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [c(s, null, {
    default: ne(() => [c(i)]),
    _: 1
  })], 2)) : le("v-if", !0)], 16);
}
var Ho = /* @__PURE__ */ se(jh, [["render", Mh]]);
const Dh = Object.assign(Ho, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ho.name, Ho);
  }
}), zh = L({
  name: "Message",
  components: {
    AIconHover: ct,
    IconInfoCircleFill: Wu,
    IconCheckCircleFill: Wi,
    IconExclamationCircleFill: Ui,
    IconCloseCircleFill: Ki,
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
    return xe(() => {
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
function Ah(e, t, n, l, o, r) {
  const a = ce("icon-info-circle-fill"), i = ce("icon-check-circle-fill"), s = ce("icon-exclamation-circle-fill"), u = ce("icon-close-circle-fill"), d = ce("icon-loading"), f = ce("icon-close"), m = ce("a-icon-hover");
  return _(), j("li", {
    role: "alert",
    class: K([e.prefixCls, `${e.prefixCls}-${e.type}`, {
      [`${e.prefixCls}-closable`]: e.closable
    }]),
    onMouseenter: t[1] || (t[1] = (...p) => e.handleMouseEnter && e.handleMouseEnter(...p)),
    onMouseleave: t[2] || (t[2] = (...p) => e.handleMouseLeave && e.handleMouseLeave(...p))
  }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (_(), j("span", {
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
  }, [re(e.$slots, "default")], 2), e.closable ? (_(), j("span", {
    key: 1,
    class: K(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...p) => e.handleClose && e.handleClose(...p))
  }, [c(m, null, {
    default: ne(() => [c(f)]),
    _: 1
  })], 2)) : le("v-if", !0)], 34);
}
var Lh = /* @__PURE__ */ se(zh, [["render", Ah]]);
function Fh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
var Nh = L({
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
    } = Zi("message", {
      runOnMounted: !0
    });
    return () => {
      let o;
      return c(Bi, {
        class: [n, `${n}-${e.position}`],
        name: "fade-message",
        tag: "ul",
        style: {
          zIndex: l.value
        },
        onAfterLeave: () => t.emit("afterClose")
      }, Fh(o = e.messages.map((r) => {
        const a = {
          default: er(r.content),
          icon: er(r.icon)
        };
        return c(Lh, {
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
}), Rh = Object.defineProperty, qh = Object.defineProperties, Hh = Object.getOwnPropertyDescriptors, fi = Object.getOwnPropertySymbols, Wh = Object.prototype.hasOwnProperty, Uh = Object.prototype.propertyIsEnumerable, pi = (e, t, n) => t in e ? Rh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tl = (e, t) => {
  for (var n in t || (t = {}))
    Wh.call(t, n) && pi(e, n, t[n]);
  if (fi)
    for (var n of fi(t))
      Uh.call(t, n) && pi(e, n, t[n]);
  return e;
}, ys = (e, t) => qh(e, Hh(t));
class Kh {
  constructor(t, n) {
    this.messageCount = 0, this.add = (r) => {
      var a;
      this.messageCount++;
      const i = (a = r.id) != null ? a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(i))
        return this.update(i, r);
      const s = Pe(Tl({
        id: i
      }, r));
      return this.messages.value.push(s), this.messageIds.add(i), {
        close: () => this.remove(i)
      };
    }, this.update = (r, a) => {
      for (let i = 0; i < this.messages.value.length; i++)
        if (this.messages.value[i].id === r) {
          const s = !Xe(a.duration);
          Object.assign(this.messages.value[i], ys(Tl({}, a), {
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
          Je(i.onClose) && i.onClose(r), this.messages.value.splice(a, 1), this.messageIds.delete(r);
          break;
        }
      }
    }, this.clear = () => {
      this.messages.value.splice(0);
    }, this.destroy = () => {
      this.messages.value.length === 0 && this.container && (Ka(null, this.container), document.body.removeChild(this.container), this.container = null, bn[this.position] = void 0);
    };
    const {
      position: l = "top"
    } = t;
    this.container = Bu("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = B([]), this.position = l;
    const o = c(Nh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? gt._context) && (o.appContext = n ?? gt._context), Ka(o, this.container), document.body.appendChild(this.container);
  }
}
const bn = {}, _s = [...ic, "loading", "normal"], bl = _s.reduce((e, t) => (e[t] = (n, l) => {
  kt(n) && (n = {
    content: n
  });
  const o = Tl({
    type: t
  }, n), {
    position: r = "top"
  } = o;
  return bn[r] || (bn[r] = new Kh(o, l)), bn[r].add(o);
}, e), {});
bl.clear = (e) => {
  var t;
  e ? (t = bn[e]) == null || t.clear() : Object.values(bn).forEach((n) => n == null ? void 0 : n.clear());
};
const gt = ys(Tl({}, bl), {
  install: (e) => {
    const t = {
      clear: bl.clear
    };
    for (const n of _s)
      t[n] = (l, o = e._context) => bl[n](l, o);
    e.config.globalProperties.$message = t;
  },
  _context: null
}), Yh = L({
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
}), Gh = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function Xh(e, t, n, l, o, r) {
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
    }), null, 16, Gh)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var Zh = /* @__PURE__ */ se(Yh, [["render", Xh]]);
const Lt = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${ln.round(l * 100, 2)}%`;
}, eo = (e, t) => t === "vertical" ? {
  bottom: e
} : {
  left: e
}, Qh = L({
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
function Jh(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(`${e.prefixCls}-dots`)
  }, [(_(!0), j(ze, null, wt(e.data, (a, i) => (_(), j("div", {
    key: i,
    class: K(`${e.prefixCls}-dot-wrapper`),
    style: me(e.getStyle(a.key))
  }, [h("div", {
    class: K([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var em = /* @__PURE__ */ se(Qh, [["render", Jh]]);
const tm = L({
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
function nm(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(`${e.prefixCls}-marks`)
  }, [(_(!0), j(ze, null, wt(e.data, (a, i) => (_(), j("div", {
    key: i,
    "aria-hidden": "true",
    class: K(`${e.prefixCls}-mark`),
    style: me(e.getStyle(a.key))
  }, ye(a.content), 7))), 128))], 2);
}
var lm = /* @__PURE__ */ se(tm, [["render", nm]]);
const om = L({
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
function am(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(`${e.prefixCls}-ticks`)
  }, [(_(!0), j(ze, null, wt(e.steps, (a, i) => (_(), j("div", {
    key: i,
    class: K([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: me(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var rm = /* @__PURE__ */ se(om, [["render", am]]);
const im = L({
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
      prefixCls: ee("slider")
    };
  }
});
function sm(e, t, n, l, o, r) {
  const a = ce("input-number");
  return _(), j("div", {
    class: K(`${e.prefixCls}-input`)
  }, [e.range ? (_(), j(ze, {
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
var um = /* @__PURE__ */ se(im, [["render", sm]]);
const cm = L({
  name: "Slider",
  components: {
    SliderButton: Zh,
    SliderDots: em,
    SliderMarks: lm,
    SliderTicks: rm,
    SliderInput: um
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
    }), a = B(null), i = B(), s = e.modelValue ? e.modelValue : e.defaultValue, u = B(De(s) ? s[0] : 0), d = B(De(s) ? s[1] : s);
    be(n, (b) => {
      var x, C, H, G, Y;
      De(b) ? (u.value = (C = (x = b[0]) != null ? x : e.min) != null ? C : 0, d.value = (G = (H = b[1]) != null ? H : e.min) != null ? G : 0) : d.value = (Y = b ?? e.min) != null ? Y : 0;
    });
    const f = () => {
      var b, x;
      e.range ? (t("update:modelValue", [u.value, d.value]), t("change", [u.value, d.value])) : (t("update:modelValue", d.value), t("change", d.value)), (x = (b = r.value) == null ? void 0 : b.onChange) == null || x.call(b);
    }, m = (b) => {
      b = b ?? e.min, u.value = b, f();
    }, p = (b) => {
      b = b ?? e.min, d.value = b, f();
    }, g = v(() => {
      var b, x, C;
      return e.range ? De(e.modelValue) ? e.modelValue : [u.value, (b = e.modelValue) != null ? b : d.value] : Xe(e.modelValue) ? [u.value, d.value] : De(e.modelValue) ? [(x = e.min) != null ? x : 0, e.modelValue[1]] : [(C = e.min) != null ? C : 0, e.modelValue];
    }), y = v(() => Object.keys(e.marks || {}).map((b) => {
      var x;
      const C = Number(b);
      return {
        key: C,
        content: (x = e.marks) == null ? void 0 : x[C],
        isActive: C >= g.value[0] && C <= g.value[1]
      };
    })), z = (b) => eo(Lt(b, [e.min, e.max]), e.direction), I = B(!1), V = () => {
      I.value = !0, a.value && (i.value = a.value.getBoundingClientRect());
    };
    function S(b, x) {
      if (!i.value)
        return 0;
      const {
        left: C,
        top: H,
        width: G,
        height: Y
      } = i.value, J = e.direction === "horizontal" ? G : Y, W = J * e.step / (e.max - e.min);
      let te = e.direction === "horizontal" ? b - C : H + Y - x;
      te < 0 && (te = 0), te > J && (te = J);
      const P = Math.round(te / W);
      return ln.plus(e.min, ln.times(P, e.step));
    }
    const w = (b, x) => {
      d.value = S(b, x), f();
    }, D = (b) => {
      if (o.value)
        return;
      const {
        clientX: x,
        clientY: C
      } = b;
      a.value && (i.value = a.value.getBoundingClientRect()), d.value = S(x, C), f();
    };
    function $([b, x]) {
      return b > x && ([b, x] = [x, b]), e.direction === "vertical" ? {
        bottom: Lt(b, [e.min, e.max]),
        top: Lt(e.max + e.min - x, [e.min, e.max])
      } : {
        left: Lt(b, [e.min, e.max]),
        right: Lt(e.max + e.min - x, [e.min, e.max])
      };
    }
    const E = (b, x) => {
      u.value = S(b, x), f();
    }, F = () => {
      I.value = !1;
    }, q = v(() => [l, {
      [`${l}-vertical`]: e.direction === "vertical",
      [`${l}-with-marks`]: Boolean(e.marks)
    }]), O = v(() => [`${l}-track`, {
      [`${l}-track-disabled`]: o.value,
      [`${l}-track-vertical`]: e.direction === "vertical"
    }]);
    return {
      prefixCls: l,
      cls: q,
      trackCls: O,
      trackRef: a,
      computedValue: g,
      mergedDisabled: o,
      markList: y,
      getBtnStyle: z,
      getBarStyle: $,
      handleClick: D,
      handleMoveStart: V,
      handleEndMoving: w,
      handleMoveEnd: F,
      handleStartMoving: E,
      handleStartChange: m,
      handleEndChange: p
    };
  }
});
function dm(e, t, n, l, o, r) {
  const a = ce("slider-ticks"), i = ce("slider-dots"), s = ce("slider-marks"), u = ce("slider-button"), d = ce("slider-input");
  return _(), j("div", {
    class: K(e.cls)
  }, [h("div", {
    ref: "trackRef",
    class: K(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [h("div", {
    class: K(`${e.prefixCls}-bar`),
    style: me(e.getBarStyle(e.computedValue))
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
    style: me(e.getBtnStyle(e.computedValue[0])),
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
    style: me(e.getBtnStyle(e.computedValue[1])),
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
var Wo = /* @__PURE__ */ se(cm, [["render", dm]]);
const $s = Object.assign(Wo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Wo.name, Wo);
  }
});
var Uo = L({
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
      if (he(i))
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
      const s = {}, u = `${r(De(e.size) ? e.size[0] : e.size)}px`, d = `${r(De(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: d
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = d), s);
    };
    return () => {
      var i;
      const s = hl((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== Ys);
      return c("div", {
        class: o.value
      }, [s.map((u, d) => {
        var f, m;
        const p = t.split && d > 0;
        return c(ze, {
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
const fm = Object.assign(Uo, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Uo.name, Uo);
  }
}), pm = L({
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
    } = bt(l), {
      mergedDisabled: i,
      mergedSize: s,
      eventHandlers: u
    } = vt({
      disabled: n,
      size: a
    }), d = B(e.defaultChecked ? e.checkedValue : e.uncheckedValue), f = v(() => {
      var w;
      return ((w = e.modelValue) != null ? w : d.value) === e.checkedValue;
    }), m = B(e.loading), p = v(() => m.value || e.loading), g = (w, D) => {
      var $, E;
      d.value = w ? e.checkedValue : e.uncheckedValue, t("update:modelValue", d.value), t("change", d.value, D), (E = ($ = u.value) == null ? void 0 : $.onChange) == null || E.call($, D);
    }, y = async (w) => {
      if (p.value || i.value)
        return;
      const D = !f.value, $ = D ? e.checkedValue : e.uncheckedValue, E = e.beforeChange;
      if (Je(E)) {
        m.value = !0;
        try {
          const F = await E($);
          (F ?? !0) && g(D, w);
        } finally {
          m.value = !1;
        }
      } else
        g(D, w);
    }, z = (w) => {
      var D, $;
      t("focus", w), ($ = (D = u.value) == null ? void 0 : D.onFocus) == null || $.call(D, w);
    }, I = (w) => {
      var D, $;
      t("blur", w), ($ = (D = u.value) == null ? void 0 : D.onBlur) == null || $.call(D, w);
    };
    be(o, (w) => {
      (Xe(w) || Vn(w)) && (d.value = e.uncheckedValue);
    });
    const V = v(() => [r, `${r}-type-${e.type}`, {
      [`${r}-small`]: s.value === "small" || s.value === "mini",
      [`${r}-checked`]: f.value,
      [`${r}-disabled`]: i.value,
      [`${r}-loading`]: p.value,
      [`${r}-custom-color`]: e.type === "line" && (e.checkedColor || e.uncheckedColor)
    }]), S = v(() => {
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
      cls: V,
      mergedDisabled: i,
      buttonStyle: S,
      computedCheck: f,
      computedLoading: p,
      handleClick: y,
      handleFocus: z,
      handleBlur: I
    };
  }
}), vm = ["aria-checked", "disabled"];
function hm(e, t, n, l, o, r) {
  const a = ce("icon-loading");
  return _(), j("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: K(e.cls),
    style: me(e.buttonStyle),
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
  })) : (_(), j(ze, {
    key: 1
  }, [e.computedCheck ? re(e.$slots, "checked-icon", {
    key: 0
  }) : re(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), le("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (_(), j(ze, {
    key: 0
  }, [h("span", {
    class: K(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [ge(ye(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [ge(ye(e.uncheckedText), 1)])], 2), h("span", {
    class: K(`${e.prefixCls}-text`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [ge(ye(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [ge(ye(e.uncheckedText), 1)])], 2)], 64)) : le("v-if", !0)], 46, vm);
}
var Ko = /* @__PURE__ */ se(pm, [["render", hm]]);
const _t = Object.assign(Ko, {
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Ko.name, Ko);
  }
}), mm = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, La = Symbol("ArcoTabs"), gm = L({
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
    const n = ee("tabs-tab"), l = We(La, {}), o = (u) => {
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
function bm(e, t, n, l, o, r) {
  const a = ce("icon-close"), i = ce("icon-hover");
  return _(), j("div", Se({
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
var ym = /* @__PURE__ */ se(gm, [["render", bm]]);
function _m(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
var vi = L({
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
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? c(Ff, null, null) : c(bp, null, null) : e.type === "next" ? c(Pa, null, null) : c(ls, null, null), r = v(() => [n, {
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
      }, _m(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const $m = L({
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
    xe(() => {
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
function wm(e, t, n, l, o, r) {
  return _(), j("div", {
    class: K(e.cls),
    style: me(e.style)
  }, null, 6);
}
var km = /* @__PURE__ */ se($m, [["render", wm]]), Cm = L({
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
      if (!Xe(o.value))
        return d.value[o.value];
    }), m = B(), p = v(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), g = B(!1), y = B(0), z = B(0), I = B([]), V = B(0), S = () => {
      var P, k, U;
      return (U = a.value === "vertical" ? (P = s.value) == null ? void 0 : P.offsetHeight : (k = s.value) == null ? void 0 : k.offsetWidth) != null ? U : 0;
    }, w = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, D = () => l.value.map((P) => {
      const k = d.value[P.key];
      return a.value === "vertical" ? k.offsetTop + k.offsetHeight : k.offsetLeft + k.offsetWidth;
    }), $ = () => {
      g.value = E(), g.value ? (y.value = S(), z.value = w(), I.value = D(), V.value > z.value && (V.value = z.value)) : V.value = 0;
    }, E = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, F = (P) => {
      var k;
      return ((k = I.value[P - 1]) != null ? k : 0) >= V.value && I.value[P] <= V.value + y.value;
    }, q = (P) => s.value ? P === "previous" ? V.value - y.value : V.value + y.value : 0, O = (P) => !s.value || !u.value || P < 0 ? 0 : P > z.value ? z.value : P, b = (P, k) => {
      t("click", P, k);
    }, x = (P, k) => {
      t("delete", P, k);
    }, C = (P) => {
      V.value = O(q(P));
    }, H = () => {
      $(), m.value && m.value.$forceUpdate();
    };
    be(l, () => {
      Le(() => {
        $();
      });
    }), be(r, (P, k) => {
      Le(() => {
        var U;
        if (g.value)
          if (P >= k) {
            const Q = P < I.value.length - 1 ? P + 1 : P;
            F(Q) || (V.value = I.value[Q] - y.value);
          } else {
            const Q = P > 0 ? P - 1 : P;
            F(Q) || (V.value = (U = I.value[Q - 1]) != null ? U : 0);
          }
      });
    }), xe(() => {
      $();
    });
    const G = () => !p.value || !e.showAddButton ? null : c("div", {
      class: `${i}-add-btn`,
      onClick: (P) => t("add", P)
    }, [c(ct, null, {
      default: () => [c(us, null, null)]
    })]), Y = v(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), J = v(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), W = v(() => mm({
      direction: e.direction,
      type: e.type,
      offset: V.value
    })), te = v(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: g.value
    }]);
    return () => {
      var P;
      return c("div", {
        class: Y.value
      }, [g.value && c(vi, {
        type: "previous",
        direction: e.direction,
        disabled: V.value <= 0,
        onClick: C
      }, null), c(Ol, {
        onResize: () => $()
      }, {
        default: () => [c("div", {
          class: te.value,
          ref: s
        }, [c(Ol, {
          onResize: H
        }, {
          default: () => [c("div", {
            ref: u,
            class: J.value,
            style: W.value
          }, [e.tabs.map((k, U) => c(ym, {
            key: k.key,
            ref: (Q) => {
              Q != null && Q.$el && (d.value[k.key] = Q.$el);
            },
            active: k.key === o.value,
            tab: k,
            editable: e.editable,
            onClick: b,
            onDelete: x
          }, {
            default: () => {
              var Q, ve, we;
              return [(we = (ve = (Q = k.slots).title) == null ? void 0 : ve.call(Q)) != null ? we : k.title];
            }
          })), e.type === "line" && f.value && c(km, {
            ref: m,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !g.value && G()])]
      }), g.value && c(vi, {
        type: "next",
        direction: e.direction,
        disabled: V.value >= z.value,
        onClick: C
      }, null), c("div", {
        class: `${i}-extra`
      }, [g.value && G(), (P = n.extra) == null ? void 0 : P.call(n)])]);
    };
  }
}), Yo = L({
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
    } = bt(l), u = v(() => e.direction === "vertical" ? "left" : e.position), d = v(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: f,
      components: m
    } = Cp("TabPane"), p = Pe(/* @__PURE__ */ new Map()), g = v(() => {
      const b = [];
      return m.value.forEach((x) => {
        const C = p.get(x);
        C && b.push(C);
      }), b;
    }), y = v(() => g.value.map((b) => b.key)), z = (b, x) => {
      p.set(b, x);
    }, I = (b) => {
      p.delete(b);
    }, V = B(e.defaultActiveKey), S = v(() => {
      var b;
      const x = (b = e.activeKey) != null ? b : V.value;
      return Xe(x) ? y.value[0] : x;
    }), w = v(() => {
      const b = y.value.indexOf(S.value);
      return b === -1 ? 0 : b;
    });
    Ht(La, Pe({
      lazyLoad: o,
      destroyOnHide: r,
      activeKey: S,
      addItem: z,
      removeItem: I,
      trigger: a
    }));
    const D = (b) => {
      b !== S.value && (V.value = b, t("update:activeKey", b), t("change", b));
    }, $ = (b, x) => {
      D(b), t("tabClick", b, x);
    }, E = (b) => {
      t("add", b), e.autoSwitch && Le(() => {
        const x = y.value[y.value.length - 1];
        D(x);
      });
    }, F = (b, x) => {
      t("delete", b, x);
    }, q = () => c("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [c("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${w.value * 100}%`
      }
    }, [f.value])]), O = v(() => [i, `${i}-${d.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var b;
      return f.value = (b = n.default) == null ? void 0 : b.call(n), c("div", {
        class: O.value
      }, [u.value === "bottom" && q(), c(Cm, {
        tabs: g.value,
        activeKey: S.value,
        activeIndex: w.value,
        direction: d.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: $,
        onAdd: E,
        onDelete: F
      }, {
        extra: n.extra
      }), u.value !== "bottom" && q()]);
    };
  }
}), Sm = Object.defineProperty, hi = Object.getOwnPropertySymbols, Vm = Object.prototype.hasOwnProperty, Em = Object.prototype.propertyIsEnumerable, mi = (e, t, n) => t in e ? Sm(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Om = (e, t) => {
  for (var n in t || (t = {}))
    Vm.call(t, n) && mi(e, n, t[n]);
  if (hi)
    for (var n of hi(t))
      Em.call(t, n) && mi(e, n, t[n]);
  return e;
};
const xm = L({
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
    } = $e(e), a = Kn(), i = ee("tabs"), s = We(La, {}), u = B(), d = v(() => a == null ? void 0 : a.vnode.key), f = v(() => d.value === s.activeKey), m = B(s.lazyLoad ? f.value : !0), p = Pe({
      key: d,
      title: l,
      disabled: o,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, p)), Wt(() => {
      var g;
      a != null && a.uid && ((g = s.removeItem) == null || g.call(s, a.uid));
    }), be(f, (g) => {
      g ? m.value || (m.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (m.value = !1);
    }), Pt(() => {
      p.slots = Om({}, t);
    }), {
      prefixCls: i,
      active: f,
      itemRef: u,
      mounted: m
    };
  }
});
function Bm(e, t, n, l, o, r) {
  return _(), j("div", {
    ref: "itemRef",
    class: K([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (_(), j("div", {
    key: 0,
    class: K(`${e.prefixCls}-pane`)
  }, [re(e.$slots, "default")], 2)) : le("v-if", !0)], 2);
}
var en = /* @__PURE__ */ se(xm, [["render", Bm]]);
const gi = Object.assign(Yo, {
  TabPane: en,
  install: (e, t) => {
    He(e, t);
    const n = qe(t);
    e.component(n + Yo.name, Yo), e.component(n + en.name, en);
  }
}), Im = /* @__PURE__ */ h("span", null, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png",
  alt: "",
  class: "active"
})], -1), Pm = /* @__PURE__ */ h("span", null, [/* @__PURE__ */ h("img", {
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
})], -1), jm = /* @__PURE__ */ h("span", null, [/* @__PURE__ */ h("img", {
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
})], -1), Tm = /* @__PURE__ */ L({
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
      return _(), j("div", {
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
        default: ne(() => [Im]),
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
        default: ne(() => [Pm]),
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
        default: ne(() => [jm]),
        _: 1
      })])]);
    };
  }
});
const Ml = /* @__PURE__ */ L({
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
    editorBloackOperate: Tm
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
    xe(() => {
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
function Mm(e) {
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
        altKey: d,
        ctrlKey: f
      } = i;
      let m = [];
      f && m.push("ctrl"), u && m.push("shift"), d && m.push("alt"), m.push(n[s]);
      let p = m.join("+");
      t.commandArray.forEach((g) => {
        let {
          keyboard: y,
          name: z
        } = g;
        y && (typeof y == "string" && (y = [y]), y = y.map((I) => I.replace(/\s+/g, "")), y != null && y.includes(p) && (t.commandMap[z](), i.stopPropagation()));
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
class ws {
  constructor() {
    Ua(this, "Listener");
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
new ws();
let yn = new ws();
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
function Qe(e) {
  if (e && typeof e == "object") {
    if (typeof e == "function") {
      let l = e.bind(null);
      return l.prototype = Qe(e.prototype), l;
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
          t[l] = Qe(e[l]);
        return t;
      case "[object Object]":
        var n = {};
        for (let l in e)
          n[l] = Qe(e[l]);
        return n;
    }
  } else
    return e;
}
function Dm(e, t) {
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
function zm({
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
  let o = Mm(l);
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
          this.data.before = Qe(n.value.blocks || []);
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
      let r = Qe(this.data.before), a = Qe(n.value.blocks || []);
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
          r.before = Qe(n.value.blocks || []), r.after = [], t(r.after);
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
          r.before = Qe(n.value.blocks);
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
          r.before = Qe(n.value.blocks);
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
            i.before = Qe(s), s.push(r), i.after = s, t(i.after);
          } else {
            let s = n.value.blocks;
            i.before = Qe(s), s.splice(a, 0, r), i.after = s, t(i.after);
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
          r.before = Qe(a);
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
          r.before = Qe(a);
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
const Am = (e) => new Promise((t, n) => {
  const l = new FileReader();
  l.readAsDataURL(e), l.onload = () => {
    t(l.result);
  }, l.onerror = (o) => {
    n(o);
  };
}), Lm = (e) => (Ue("data-v-405c2c25"), e = e(), Ke(), e), Fm = {
  class: "img-upload-container w100"
}, Nm = {
  key: 0,
  class: "real-img w100"
}, Rm = ["src"], qm = /* @__PURE__ */ Lm(() => /* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), Hm = [qm], Wm = /* @__PURE__ */ L({
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
        Am(o).then((r) => {
          t("update:modelValue", r), t("change", r);
        });
      },
      del() {
        t("update:modelValue", ""), t("change", "");
      }
    };
    return (l, o) => {
      const r = kn;
      return _(), j("div", Fm, [e.modelValue ? (_(), j("div", Nm, [h("img", {
        src: e.modelValue,
        alt: ""
      }, null, 8, Rm), h("div", {
        class: "real-close",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...a) => n.del && n.del(...a))
      }, Hm)])) : le("", !0), c(r, {
        style: {
          width: "100%"
        },
        class: "file-btn"
      }, {
        default: ne(() => [ge(ye(e.modelValue ? "替换图片" : "上传图片") + " ", 1), h("input", {
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
const Ee = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, ks = /* @__PURE__ */ Ee(Wm, [["__scopeId", "data-v-405c2c25"]]), Um = {
  key: 0
}, Km = {
  key: 1
}, Ym = {
  key: 0,
  class: "ml12"
}, Gm = {
  key: 2
}, Xm = {
  key: 3
}, Zm = {
  key: 0,
  class: "ml12"
}, Qm = {
  key: 4,
  class: "w100"
}, Jm = {
  key: 0,
  class: "ml12"
}, eg = {
  key: 5,
  class: "w100"
}, tg = {
  key: 6,
  class: "w100"
}, ng = /* @__PURE__ */ L({
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
      const l = Ma, o = Kt, r = Dh, a = Vt, i = $s, s = fm, u = mn, d = ja, f = gn, m = bs;
      return _(), de(m, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: ne(() => [(_(!0), j(ze, null, wt(e.editorControlView, (p, g) => (_(), de(f, {
          label: p.label,
          key: g
        }, {
          default: ne(() => {
            var y, z, I, V, S, w, D, $, E, F, q, O, b, x;
            return [p.type == "color" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", Um, [c(l, {
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (C) => e.currentBlock.props[p.key].defaultValue = C,
              "show-history": "",
              "show-preset": "",
              showText: "",
              disabledAlpha: "",
              disabled: !!((y = e.currentBlock.props[p.key]) != null && y.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])) : le("", !0), p.type == "input" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", Km, [c(o, {
              style: {
                width: "250px"
              },
              placeholder: `请输入${p.label}`,
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (C) => e.currentBlock.props[p.key].defaultValue = C,
              disabled: !!((z = e.currentBlock.props[p.key]) != null && z.disabled)
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (I = e.currentBlock.props[p.key]) != null && I.unit ? (_(), j("span", Ym, ye((V = e.currentBlock.props[p.key]) == null ? void 0 : V.unit), 1)) : le("", !0)])) : le("", !0), p.type == "textarea" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", Gm, [c(r, {
              "auto-size": {
                minRows: 2,
                maxRows: 6
              },
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (C) => e.currentBlock.props[p.key].defaultValue = C,
              style: {
                width: "250px"
              },
              placeholder: `请输入${p.label}`,
              "allow-clear": "",
              disabled: !!((S = e.currentBlock.props[p.key]) != null && S.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])])) : le("", !0), p.type == "number" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", Xm, [c(a, {
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (C) => e.currentBlock.props[p.key].defaultValue = C,
              style: {
                width: "150px"
              },
              placeholder: `请输入${p.label}`,
              disabled: !!((w = e.currentBlock.props[p.key]) != null && w.disabled),
              min: (D = e.currentBlock.props[p.key]) != null && D.min ? (($ = e.currentBlock.props[p.key]) == null ? void 0 : $.min) * 1 : 0,
              max: (E = e.currentBlock.props[p.key]) != null && E.max ? ((F = e.currentBlock.props[p.key]) == null ? void 0 : F.max) * 1 : 100,
              mode: "button",
              size: "large"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (q = e.currentBlock.props[p.key]) != null && q.unit ? (_(), j("span", Zm, ye((O = e.currentBlock.props[p.key]) == null ? void 0 : O.unit), 1)) : le("", !0)])) : le("", !0), p.type == "slider" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", Qm, [c(s, {
              size: "large"
            }, {
              default: ne(() => {
                var C, H, G, Y, J;
                return [c(i, {
                  min: (C = e.currentBlock.props[p.key]) != null && C.min ? ((H = e.currentBlock.props[p.key]) == null ? void 0 : H.min) * 1 : 0,
                  max: (G = e.currentBlock.props[p.key]) != null && G.max ? ((Y = e.currentBlock.props[p.key]) == null ? void 0 : Y.max) * 1 : 100,
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
            }, 1024), (b = e.currentBlock.props[p.key]) != null && b.unit ? (_(), j("span", Jm, ye((x = e.currentBlock.props[p.key]) == null ? void 0 : x.unit), 1)) : le("", !0)])) : le("", !0), p.type == "imgUpload" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", eg, [c(ks, {
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (C) => e.currentBlock.props[p.key].defaultValue = C
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : le("", !0), p.type == "select" && "defaultValue" in e.currentBlock.props[p.key] ? (_(), j("div", tg, [c(d, {
              style: {
                width: "250px"
              },
              placeholder: `请选择${p.label}`,
              modelValue: e.currentBlock.props[p.key].defaultValue,
              "onUpdate:modelValue": (C) => e.currentBlock.props[p.key].defaultValue = C,
              "allow-clear": ""
            }, {
              default: ne(() => [(_(!0), j(ze, null, wt(e.currentBlock.props[p.key].options, (C, H) => (_(), de(u, {
                key: H,
                value: C.value
              }, {
                default: ne(() => [ge(ye(C.name), 1)]),
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
const lg = /* @__PURE__ */ Ee(ng, [["__scopeId", "data-v-5efd1334"]]);
function og(e, t, n, l) {
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
  let d = c(lg);
  return c("div", {
    style: "height: 100%"
  }, [t.value.focusBlock.length ? c("div", {
    class: "control-container"
  }, [c(gi, {
    type: "line",
    size: "large",
    key: 2
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
      default: () => [c("span", null, [ge("暂不支持")])]
    }), c(en, {
      key: "3",
      title: "规则"
    }, {
      default: () => [c("span", null, [ge("暂不支持")])]
    })]
  })]) : c("div", {
    class: "control-container"
  }, [c(gi, {
    type: "line",
    size: "large",
    style: "height: 100%",
    key: 1
  }, {
    default: () => [c(en, {
      key: "0",
      title: "页面基础设置"
    }, {
      default: () => [c("div", {
        class: "control-form-comtainer"
      }, [c(bs, {
        style: {
          width: "100%"
        },
        "label-align": "left",
        "auto-label-width": !0,
        model: {},
        layout: "vertical"
      }, {
        default: () => [c(gn, {
          tooltip: "设置页面缩放大小，不会影响h5端",
          label: "页面缩放"
        }, {
          default: () => [c(Vt, {
            placeholder: "请输入正整数",
            "default-value": n.container.scale,
            mode: "button",
            style: "width: 140px;text-align: center;",
            onChange: a,
            min: 40,
            max: 200
          }, null), c("span", {
            style: "margin-left: 6px"
          }, [ge("%")])]
        }), c(gn, {
          label: "背景色"
        }, {
          default: () => [c(Ma, {
            defaultValue: n.container.backgroundColor,
            onChange: r,
            showText: !0,
            disabledAlpha: !0
          }, null)]
        })]
      })])]
    })]
  })])]);
}
const bi = /* @__PURE__ */ L({
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
    }), () => c(ze, null, [Object.keys(t).map((n) => c("div", {
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
}), lt = (e) => (Ue("data-v-3eb71c99"), e = e(), Ke(), e), ag = {
  class: "editor-built-in-control-base-title"
}, rg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "line"
}, null, -1)), ig = {
  class: "font"
}, sg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), ug = [sg], cg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "vline"
}, null, -1)), dg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), fg = [dg], pg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "vline"
}, null, -1)), vg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), hg = [vg], mg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "vline"
}, null, -1)), gg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), bg = [gg], yg = {
  class: "letterSpacing flex"
}, _g = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "字间距", -1)), $g = {
  class: "flex: 1"
}, wg = {
  class: "letterSpacing flex mt24"
}, kg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "行间距", -1)), Cg = {
  class: "flex: 1"
}, Sg = {
  class: "letterSpacing flex mt24"
}, Vg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "左右间距", -1)), Eg = {
  class: "flex: 1"
}, Og = {
  class: "letterSpacing flex mt24"
}, xg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "上间距", -1)), Bg = {
  class: "flex: 1"
}, Ig = {
  class: "letterSpacing flex mt24"
}, Pg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "下间距", -1)), jg = {
  class: "flex: 1"
}, Tg = {
  class: "letterSpacing flex mt24"
}, Mg = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("span", null, "背景色", -1)), Dg = {
  class: "flex: 1"
}, zg = {
  class: "mt24 mb48"
}, Ag = /* @__PURE__ */ lt(() => /* @__PURE__ */ h("div", {
  class: "img-title"
}, "背景图", -1)), Lg = /* @__PURE__ */ L({
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
      const r = Jl, a = $s, i = Ma;
      return _(), j("div", ag, [rg, h("div", ig, [c(r, {
        content: "居中",
        position: "top"
      }, {
        default: ne(() => [(_(), j("svg", {
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
        }, ug, 2))]),
        _: 1
      }), cg, c(r, {
        content: "加粗",
        position: "top"
      }, {
        default: ne(() => [(_(), j("svg", {
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
        }, fg, 2))]),
        _: 1
      }), pg, c(r, {
        content: "倾斜",
        position: "top"
      }, {
        default: ne(() => [(_(), j("svg", {
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
        }, hg, 2))]),
        _: 1
      }), mg, c(r, {
        content: "下划线",
        position: "top"
      }, {
        default: ne(() => [(_(), j("svg", {
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
        }, bg, 2))]),
        _: 1
      })]), h("div", yg, [_g, h("div", $g, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.letterSpacing.defaultValue,
        "onUpdate:modelValue": o[4] || (o[4] = (s) => e.block.props.letterSpacing.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", wg, [kg, h("div", Cg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.lineHeight.defaultValue,
        "onUpdate:modelValue": o[5] || (o[5] = (s) => e.block.props.lineHeight.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Sg, [Vg, h("div", Eg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.leftRightPadding.defaultValue,
        "onUpdate:modelValue": o[6] || (o[6] = (s) => e.block.props.leftRightPadding.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Og, [xg, h("div", Bg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginTop.defaultValue,
        "onUpdate:modelValue": o[7] || (o[7] = (s) => e.block.props.marginTop.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Ig, [Pg, h("div", jg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginBottom.defaultValue,
        "onUpdate:modelValue": o[8] || (o[8] = (s) => e.block.props.marginBottom.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", Tg, [Mg, h("div", Dg, [c(i, {
        "show-history": "",
        "show-preset": "",
        showText: "",
        disabledAlpha: "",
        modelValue: e.block.props.backgroundColor.defaultValue,
        "onUpdate:modelValue": o[9] || (o[9] = (s) => e.block.props.backgroundColor.defaultValue = s)
      }, null, 8, ["modelValue"])])]), h("div", zg, [Ag, c(ks, {
        modelValue: e.block.props.backgroundImage.defaultValue,
        "onUpdate:modelValue": o[10] || (o[10] = (s) => e.block.props.backgroundImage.defaultValue = s)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const Fg = /* @__PURE__ */ Ee(Lg, [["__scopeId", "data-v-3eb71c99"]]), Ng = /* @__PURE__ */ L({
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
    return (t, n) => (_(), j("div", {
      class: "editor-built-in-registor-base-title",
      style: me(e.style)
    }, [h("div", {
      class: K(["text", {
        minHeight: !e.text
      }])
    }, ye(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
  }
});
const Rg = /* @__PURE__ */ Ee(Ng, [["__scopeId", "data-v-2bc63ae4"]]), qg = {
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
    return c(Rg, {
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
    return c(Fg, {
      block: e,
      textAlign: n.textAlign.defaultValue,
      fontWeight: n.fontWeight.defaultValue,
      fontStyle: n.fontStyle.defaultValue,
      textDecoration: n.textDecoration.defaultValue,
      onChange: l
    });
  }
}, Hg = {
  class: "editor-built-in-registor-base-img"
}, Wg = ["src"], Ug = {
  key: 1,
  class: "empty"
}, Kg = /* @__PURE__ */ L({
  __name: "render",
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (_(), j("div", Hg, [e.src ? (_(), j("img", {
      key: 0,
      class: "render-img",
      src: e.src,
      alt: ""
    }, null, 8, Wg)) : (_(), j("div", Ug, "请在控制器中上传图片+"))]));
  }
});
const Yg = /* @__PURE__ */ Ee(Kg, [["__scopeId", "data-v-9c2db7e4"]]), Gg = {
  group: "基础组件",
  name: "baseImg",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (e) => c(Yg, {
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
}, Xg = {
  key: 0,
  class: "tip"
}, Zg = /* @__PURE__ */ L({
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
    return xe(() => {
      l(t.fixedBottom);
    }), Pt(() => {
      l(t.fixedBottom);
    }), be(() => t.fixedBottom, () => {
      l(t.fixedBottom);
    }), (r, a) => (_(), j("div", {
      class: "editor-built-in-registor-base-submit",
      ref_key: "baseSubmit",
      ref: n
    }, [h("div", {
      class: "submit",
      style: me(e.style)
    }, ye(e.text), 5), e.visibleSubmitNum ? (_(), j("div", Xg, " ——" + ye(o(e.submitTip)) + "—— ", 1)) : le("", !0)], 512));
  }
});
const Qg = /* @__PURE__ */ Ee(Zg, [["__scopeId", "data-v-caa2b586"]]);
const Zn = (e) => (Ue("data-v-e66b9f5d"), e = e(), Ke(), e), Jg = {
  class: "editor-built-in-control-base-submit"
}, eb = /* @__PURE__ */ Zn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), tb = {
  class: "flex mt24 options"
}, nb = /* @__PURE__ */ Zn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "是否吸底", -1)), lb = {
  class: "flex mt24 options"
}, ob = /* @__PURE__ */ Zn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "显示提交次数", -1)), ab = {
  key: 0,
  class: "flex mt24 options"
}, rb = /* @__PURE__ */ Zn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "初始次数", -1)), ib = {
  class: "pl24"
}, sb = {
  key: 1,
  class: "flex mt24 options"
}, ub = /* @__PURE__ */ Zn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提示语内容", -1)), cb = [ub], db = {
  key: 2,
  class: "mt24"
}, fb = /* @__PURE__ */ L({
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
      const r = _t, a = Kt;
      return _(), j("div", Jg, [eb, h("div", tb, [nb, h("div", null, [c(r, {
        "default-checked": e.block.props.fixedBottom.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "fixedBottom"))
      }, null, 8, ["default-checked"])])]), h("div", lb, [ob, h("div", null, [c(r, {
        "default-checked": e.block.props.visibleSubmitNum.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "visibleSubmitNum"))
      }, null, 8, ["default-checked"])])]), e.block.props.visibleSubmitNum.defaultValue == "1" ? (_(), j("div", ab, [rb, h("div", ib, [c(a, {
        placeholder: "请输入初始次数",
        modelValue: e.block.props.submitNum.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.submitNum.defaultValue = i)
      }, null, 8, ["modelValue"])])])) : le("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (_(), j("div", sb, cb)) : le("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (_(), j("div", db, [c(a, {
        placeholder: "提示语",
        modelValue: e.block.props.submitTip.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.submitTip.defaultValue = i)
      }, null, 8, ["modelValue"])])) : le("", !0)]);
    };
  }
});
const pb = /* @__PURE__ */ Ee(fb, [["__scopeId", "data-v-e66b9f5d"]]), vb = {
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
    return c(Qg, {
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
  controlView: (e, t) => c(pb, {
    block: e
  })
}, hb = /* @__PURE__ */ L({
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
    return (t, n) => (_(), j("div", {
      class: "editor-built-in-registor-base-title",
      style: me(e.style)
    }, ye(e.text ? e.text : "默认标题"), 5));
  }
});
const mb = /* @__PURE__ */ Ee(hb, [["__scopeId", "data-v-5fff6b35"]]), gb = {
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
    return c(mb, {
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
}, bb = (e) => (Ue("data-v-d00a40a0"), e = e(), Ke(), e), yb = {
  class: "title-tip"
}, _b = {
  key: 0,
  class: "red"
}, $b = {
  class: "form-item"
}, wb = /* @__PURE__ */ bb(() => /* @__PURE__ */ h("div", {
  class: "control-input"
}, null, -1)), kb = {
  class: "text"
}, Cb = /* @__PURE__ */ L({
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
    return (t, n) => (_(), j("div", {
      class: "editor-built-in-commen-multiple",
      style: me(e.style)
    }, [h("div", yb, [e.isRequire ? (_(), j("span", _b, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", $b, [(_(!0), j(ze, null, wt(e.options, (l, o) => (_(), j("div", {
      class: "item",
      key: o
    }, [wb, h("div", kb, ye(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const Sb = /* @__PURE__ */ Ee(Cb, [["__scopeId", "data-v-d00a40a0"]]);
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function yi(e, t) {
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
    t % 2 ? yi(Object(n), !0).forEach(function(l) {
      Vb(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yi(Object(n)).forEach(function(l) {
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
function Vb(e, t, n) {
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
function Eb(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, r;
  for (r = 0; r < l.length; r++)
    o = l[r], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ob(e, t) {
  if (e == null)
    return {};
  var n = Eb(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      l = r[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
var xb = "1.15.3";
function Bt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var jt = Bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Qn = Bt(/Edge/i), _i = Bt(/firefox/i), Ln = Bt(/safari/i) && !Bt(/chrome/i) && !Bt(/android/i), Cs = Bt(/iP(ad|od|hone)/i), Ss = Bt(/chrome/i) && Bt(/android/i), Vs = {
  capture: !1,
  passive: !1
};
function ke(e, t, n) {
  e.addEventListener(t, n, !jt && Vs);
}
function _e(e, t, n) {
  e.removeEventListener(t, n, !jt && Vs);
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
function Es(e) {
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
    } while (e = Es(e));
  }
  return null;
}
var $i = /\s+/g;
function st(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace($i, " ").replace(" " + t + " ", " ");
      e.className = (l + (n ? " " + t : "")).replace($i, " ");
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
function Os(e, t, n) {
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
      var p = _n(o || e), g = p && p.a, y = p && p.d;
      p && (a /= y, i /= g, f /= g, d /= y, s = a + d, u = i + f);
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
function wi(e, t, n) {
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
function Fa(e, t) {
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
function ki(e) {
  var t = 0, n = 0, l = $t();
  if (e)
    do {
      var o = _n(e), r = o.a, a = o.d;
      t += e.scrollLeft * r, n += e.scrollTop * a;
    } while (e !== l && (e = e.parentNode));
  return [t, n];
}
function Bb(e, t) {
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
function Ib(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Go(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function xs(e, t) {
  return function() {
    if (!Fn) {
      var n = arguments, l = this;
      n.length === 1 ? e.call(l, n[0]) : e.apply(l, n), Fn = setTimeout(function() {
        Fn = void 0;
      }, t);
    }
  };
}
function Pb() {
  clearTimeout(Fn), Fn = void 0;
}
function Bs(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Is(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ps(e, t, n) {
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
function jb() {
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
            var r = St({}, e[e.length - 1].rect);
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
      e.splice(Bb(e, {
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
        var s = 0, u = i.target, d = u.fromRect, f = Ne(u), m = u.prevFromRect, p = u.prevToRect, g = i.rect, y = _n(u, !0);
        y && (f.top -= y.f, f.left -= y.e), u.toRect = f, u.thisAnimationDuration && Go(m, f) && !Go(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - f.top) / (g.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = Mb(g, m, p, o.options)), Go(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, g, f, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
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
        l.animatingX = !!d, l.animatingY = !!f, ue(l, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = Tb(l), ue(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), ue(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          ue(l, "transition", ""), ue(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, a);
      }
    }
  };
}
function Tb(e) {
  return e.offsetWidth;
}
function Mb(e, t, n, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * l.animation;
}
var cn = [], Xo = {
  initializeByDefault: !0
}, Jn = {
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
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](St({
        sortable: n
      }, l)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](St({
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
function Db(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, r = e.cloneEl, a = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, f = e.newDraggableIndex, m = e.originalEvent, p = e.putSortable, g = e.extraEventProperties;
  if (t = t || n && n[it], !!t) {
    var y, z = t.options, I = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !jt && !Qn ? y = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(l, !0, !0)), y.to = a || n, y.from = i || n, y.item = o || n, y.clone = r, y.oldIndex = s, y.newIndex = u, y.oldDraggableIndex = d, y.newDraggableIndex = f, y.originalEvent = m, y.pullMode = p ? p.lastPutMode : void 0;
    var V = St(St({}, g), Jn.getEventProperties(l, t));
    for (var S in V)
      y[S] = V[S];
    n && n.dispatchEvent(y), z[I] && z[I].call(t, y);
  }
}
var zb = ["evt"], at = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, r = Ob(l, zb);
  Jn.pluginEvent.bind(ie)(t, n, St({
    dragEl: Z,
    parentEl: Me,
    ghostEl: pe,
    rootEl: Oe,
    nextEl: Qt,
    lastDownEl: _l,
    cloneEl: Ie,
    cloneHidden: Ft,
    dragStarted: Tn,
    putSortable: Ge,
    activeSortable: ie.active,
    originalEvent: o,
    oldIndex: vn,
    oldDraggableIndex: Nn,
    newIndex: ut,
    newDraggableIndex: At,
    hideGhostForTarget: Ds,
    unhideGhostForTarget: zs,
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
  Db(St({
    putSortable: Ge,
    cloneEl: Ie,
    targetEl: Z,
    rootEl: Oe,
    oldIndex: vn,
    oldDraggableIndex: Nn,
    newIndex: ut,
    newDraggableIndex: At
  }, e));
}
var Z, Me, pe, Oe, Qt, _l, Ie, Ft, vn, ut, Nn, At, dl, Ge, fn = !1, Ll = !1, Fl = [], Gt, ht, Zo, Qo, Ci, Si, Tn, dn, Rn, qn = !1, fl = !1, $l, Ze, Jo = [], va = !1, Nl = [], to = typeof document < "u", pl = Cs, Vi = Qn || jt ? "cssFloat" : "float", Ab = to && !Ss && !Cs && "draggable" in document.createElement("div"), js = function() {
  if (to) {
    if (jt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ts = function(t, n) {
  var l = ue(t), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), r = Cn(t, 0, n), a = Cn(t, 1, n), i = r && ue(r), s = a && ue(a), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Ne(r).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ne(a).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && i.float && i.float !== "none") {
    var f = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= o && l[Vi] === "none" || a && l[Vi] === "none" && u + d > o) ? "vertical" : "horizontal";
}, Lb = function(t, n, l) {
  var o = l ? t.left : t.top, r = l ? t.right : t.bottom, a = l ? t.width : t.height, i = l ? n.left : n.top, s = l ? n.right : n.bottom, u = l ? n.width : n.height;
  return o === i || r === s || o + a / 2 === i + u / 2;
}, Fb = function(t, n) {
  var l;
  return Fl.some(function(o) {
    var r = o[it].options.emptyInsertThreshold;
    if (!(!r || Fa(o))) {
      var a = Ne(o), i = t >= a.left - r && t <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (i && s)
        return l = o;
    }
  }), l;
}, Ms = function(t) {
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
}, Ds = function() {
  !js && pe && ue(pe, "display", "none");
}, zs = function() {
  !js && pe && ue(pe, "display", "");
};
to && !Ss && document.addEventListener("click", function(e) {
  if (Ll)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ll = !1, !1;
}, !0);
var Xt = function(t) {
  if (Z) {
    t = t.touches ? t.touches[0] : t;
    var n = Fb(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[it]._onDragOver(l);
    }
  }
}, Nb = function(t) {
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
      return Ts(e, this.options);
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
  Jn.initializePlugins(this, e, n);
  for (var l in n)
    !(l in t) && (t[l] = n[l]);
  Ms(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Ab, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ke(e, "pointerdown", this._onTapStart) : (ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), Fl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), It(this, jb());
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
      if (Gb(l), !Z && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = mt(s, o.draggable, l, !1), !(s && s.animated) && _l !== s)) {
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
      if (Oe = r, Z = l, Me = Z.parentNode, Qt = Z.nextSibling, _l = l, dl = a.group, ie.dragged = Z, Gt = {
        target: Z,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Ci = Gt.clientX - u.left, Si = Gt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Z.style["will-change"] = "all", s = function() {
        if (at("delayEnded", o, {
          evt: t
        }), ie.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !_i && o.nativeDraggable && (Z.draggable = !0), o._triggerDragStart(t, n), nt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), st(Z, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Os(Z, d.trim(), ea);
      }), ke(i, "dragover", Xt), ke(i, "mousemove", Xt), ke(i, "touchmove", Xt), ke(i, "mouseup", o._onDrop), ke(i, "touchend", o._onDrop), ke(i, "touchcancel", o._onDrop), _i && this.nativeDraggable && (this.options.touchStartThreshold = 4, Z.draggable = !0), at("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Qn || jt))) {
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
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : n ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(Z, "dragend", this), ke(Oe, "dragstart", this._onDragStart));
    try {
      document.selection ? wl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (fn = !1, Oe && Z) {
      at("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && ke(document, "dragover", Nb);
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
      this._lastX = ht.clientX, this._lastY = ht.clientY, Ds();
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
        } while (n = Es(n));
      zs();
    }
  },
  _onTouchMove: function(t) {
    if (Gt) {
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, r = t.touches ? t.touches[0] : t, a = pe && _n(pe, !0), i = pe && a && a.a, s = pe && a && a.d, u = pl && Ze && ki(Ze), d = (r.clientX - Gt.clientX + o.x) / (i || 1) + (u ? u[0] - Jo[0] : 0) / (i || 1), f = (r.clientY - Gt.clientY + o.y) / (s || 1) + (u ? u[1] - Jo[1] : 0) / (s || 1);
      if (!ie.active && !fn) {
        if (l && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (pe) {
        a ? (a.e += d - (Zo || 0), a.f += f - (Qo || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        ue(pe, "webkitTransform", m), ue(pe, "mozTransform", m), ue(pe, "msTransform", m), ue(pe, "transform", m), Zo = d, Qo = f, ht = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!pe) {
      var t = this.options.fallbackOnBody ? document.body : Oe, n = Ne(Z, !0, pl, !0, t), l = this.options;
      if (pl) {
        for (Ze = t; ue(Ze, "position") === "static" && ue(Ze, "transform") === "none" && Ze !== document; )
          Ze = Ze.parentNode;
        Ze !== document.body && Ze !== document.documentElement ? (Ze === document && (Ze = $t()), n.top += Ze.scrollTop, n.left += Ze.scrollLeft) : Ze = $t(), Jo = ki(Ze);
      }
      pe = Z.cloneNode(!0), st(pe, l.ghostClass, !1), st(pe, l.fallbackClass, !0), st(pe, l.dragClass, !0), ue(pe, "transition", ""), ue(pe, "transform", ""), ue(pe, "box-sizing", "border-box"), ue(pe, "margin", 0), ue(pe, "top", n.top), ue(pe, "left", n.left), ue(pe, "width", n.width), ue(pe, "height", n.height), ue(pe, "opacity", "0.8"), ue(pe, "position", pl ? "absolute" : "fixed"), ue(pe, "zIndex", "100000"), ue(pe, "pointerEvents", "none"), ie.ghost = pe, t.appendChild(pe), ue(pe, "transform-origin", Ci / parseInt(pe.style.width) * 100 + "% " + Si / parseInt(pe.style.height) * 100 + "%");
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
    at("setupClone", this), ie.eventCanceled || (Ie = Is(Z), Ie.removeAttribute("id"), Ie.draggable = !1, Ie.style["will-change"] = "", this._hideClone(), st(Ie, this.options.chosenClass, !1), ie.clone = Ie), l.cloneId = wl(function() {
      at("clone", l), !ie.eventCanceled && (l.options.removeCloneOnHide || Oe.insertBefore(Ie, Z), l._hideClone(), nt({
        sortable: l,
        name: "clone"
      }));
    }), !n && st(Z, r.dragClass, !0), n ? (Ll = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (_e(document, "mouseup", l._onDrop), _e(document, "touchend", l._onDrop), _e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(l, o, Z)), ke(document, "drop", l), ue(Z, "transform", "translateZ(0)")), fn = !0, l._dragStartId = wl(l._dragStarted.bind(l, n, t)), ke(document, "selectstart", l), Tn = !0, Ln && ue(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, r, a, i = this.options, s = i.group, u = ie.active, d = dl === s, f = i.sort, m = Ge || u, p, g = this, y = !1;
    if (va)
      return;
    function z(W, te) {
      at(W, g, St({
        evt: t,
        isOwner: d,
        axis: p ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: f,
        fromSortable: m,
        target: l,
        completed: V,
        onMove: function(k, U) {
          return vl(Oe, n, Z, o, k, Ne(k), t, U);
        },
        changed: S
      }, te));
    }
    function I() {
      z("dragOverAnimationCapture"), g.captureAnimationState(), g !== m && m.captureAnimationState();
    }
    function V(W) {
      return z("dragOverCompleted", {
        insertion: W
      }), W && (d ? u._hideClone() : u._showClone(g), g !== m && (st(Z, Ge ? Ge.options.ghostClass : u.options.ghostClass, !1), st(Z, i.ghostClass, !0)), Ge !== g && g !== ie.active ? Ge = g : g === ie.active && Ge && (Ge = null), m === g && (g._ignoreWhileAnimating = l), g.animateAll(function() {
        z("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (l === Z && !Z.animated || l === n && !l.animated) && (dn = null), !i.dragoverBubble && !t.rootEl && l !== document && (Z.parentNode[it]._isOutsideThisEl(t.target), !W && Xt(t)), !i.dragoverBubble && t.stopPropagation && t.stopPropagation(), y = !0;
    }
    function S() {
      ut = pt(Z), At = pt(Z, i.draggable), nt({
        sortable: g,
        name: "change",
        toEl: n,
        newIndex: ut,
        newDraggableIndex: At,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = mt(l, i.draggable, n, !0), z("dragOver"), ie.eventCanceled)
      return y;
    if (Z.contains(t.target) || l.animated && l.animatingX && l.animatingY || g._ignoreWhileAnimating === l)
      return V(!1);
    if (Ll = !1, u && !i.disabled && (d ? f || (a = Me !== Oe) : Ge === this || (this.lastPutMode = dl.checkPull(this, u, Z, t)) && s.checkPut(this, u, Z, t))) {
      if (p = this._getDirection(t, l) === "vertical", o = Ne(Z), z("dragOverValid"), ie.eventCanceled)
        return y;
      if (a)
        return Me = Oe, I(), this._hideClone(), z("revert"), ie.eventCanceled || (Qt ? Oe.insertBefore(Z, Qt) : Oe.appendChild(Z)), V(!0);
      var w = Fa(n, i.draggable);
      if (!w || Wb(t, p, this) && !w.animated) {
        if (w === Z)
          return V(!1);
        if (w && n === t.target && (l = w), l && (r = Ne(l)), vl(Oe, n, Z, o, l, r, t, !!l) !== !1)
          return I(), w && w.nextSibling ? n.insertBefore(Z, w.nextSibling) : n.appendChild(Z), Me = n, S(), V(!0);
      } else if (w && Hb(t, p, this)) {
        var D = Cn(n, 0, i, !0);
        if (D === Z)
          return V(!1);
        if (l = D, r = Ne(l), vl(Oe, n, Z, o, l, r, t, !1) !== !1)
          return I(), n.insertBefore(Z, D), Me = n, S(), V(!0);
      } else if (l.parentNode === n) {
        r = Ne(l);
        var $ = 0, E, F = Z.parentNode !== n, q = !Lb(Z.animated && Z.toRect || o, l.animated && l.toRect || r, p), O = p ? "top" : "left", b = wi(l, "top", "top") || wi(Z, "top", "top"), x = b ? b.scrollTop : void 0;
        dn !== l && (E = r[O], qn = !1, fl = !q && i.invertSwap || F), $ = Ub(t, l, r, p, q ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, fl, dn === l);
        var C;
        if ($ !== 0) {
          var H = pt(Z);
          do
            H -= $, C = Me.children[H];
          while (C && (ue(C, "display") === "none" || C === pe));
        }
        if ($ === 0 || C === l)
          return V(!1);
        dn = l, Rn = $;
        var G = l.nextElementSibling, Y = !1;
        Y = $ === 1;
        var J = vl(Oe, n, Z, o, l, r, t, Y);
        if (J !== !1)
          return (J === 1 || J === -1) && (Y = J === 1), va = !0, setTimeout(qb, 30), I(), Y && !G ? n.appendChild(Z) : l.parentNode.insertBefore(Z, Y ? G : l), b && Bs(b, 0, x - b.scrollTop), Me = Z.parentNode, E !== void 0 && !fl && ($l = Math.abs(E - Ne(l)[O])), S(), V(!0);
      }
      if (n.contains(Z))
        return V(!1);
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
    }), Me = Z && Z.parentNode, ut = pt(Z), At = pt(Z, l.draggable), ie.eventCanceled) {
      this._nulling();
      return;
    }
    fn = !1, fl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ha(this.cloneId), ha(this._dragStartId), this.nativeDraggable && (_e(document, "drop", this), _e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && ue(document.body, "user-select", ""), ue(Z, "transform", ""), t && (Tn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), pe && pe.parentNode && pe.parentNode.removeChild(pe), (Oe === Me || Ge && Ge.lastPutMode !== "clone") && Ie && Ie.parentNode && Ie.parentNode.removeChild(Ie), Z && (this.nativeDraggable && _e(Z, "dragend", this), ea(Z), Z.style["will-change"] = "", Tn && !fn && st(Z, Ge ? Ge.options.ghostClass : this.options.ghostClass, !1), st(Z, this.options.chosenClass, !1), nt({
      sortable: this,
      name: "unchoose",
      toEl: Me,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Oe !== Me ? (ut >= 0 && (nt({
      rootEl: Me,
      name: "add",
      toEl: Me,
      fromEl: Oe,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "remove",
      toEl: Me,
      originalEvent: t
    }), nt({
      rootEl: Me,
      name: "sort",
      toEl: Me,
      fromEl: Oe,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: Me,
      originalEvent: t
    })), Ge && Ge.save()) : ut !== vn && ut >= 0 && (nt({
      sortable: this,
      name: "update",
      toEl: Me,
      originalEvent: t
    }), nt({
      sortable: this,
      name: "sort",
      toEl: Me,
      originalEvent: t
    })), ie.active && ((ut == null || ut === -1) && (ut = vn, At = Nn), nt({
      sortable: this,
      name: "end",
      toEl: Me,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    at("nulling", this), Oe = Z = Me = pe = Qt = Ie = _l = Ft = Gt = ht = Tn = ut = At = vn = Nn = dn = Rn = Ge = dl = ie.dragged = ie.ghost = ie.clone = ie.active = null, Nl.forEach(function(t) {
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
        Z && (this._onDragOver(t), Rb(t));
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
      n = l[o], mt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || Yb(n));
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
    var o = Jn.modifyOption(this, t, n);
    typeof o < "u" ? l[t] = o : l[t] = n, t === "group" && Ms(l);
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
      ue(Ie, "display", "none"), this.options.removeCloneOnHide && Ie.parentNode && Ie.parentNode.removeChild(Ie), Ft = !0;
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
      Z.parentNode == Oe && !this.options.group.revertClone ? Oe.insertBefore(Ie, Z) : Qt ? Oe.insertBefore(Ie, Qt) : Oe.appendChild(Ie), this.options.group.revertClone && this.animate(Z, Ie), ue(Ie, "display", ""), Ft = !1;
    }
  }
};
function Rb(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function vl(e, t, n, l, o, r, a, i) {
  var s, u = e[it], d = u.options.onMove, f;
  return window.CustomEvent && !jt && !Qn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = l, s.related = o || t, s.relatedRect = r || Ne(t), s.willInsertAfter = i, s.originalEvent = a, e.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function ea(e) {
  e.draggable = !1;
}
function qb() {
  va = !1;
}
function Hb(e, t, n) {
  var l = Ne(Cn(n.el, 0, n.options, !0)), o = Ps(n.el, n.options, pe), r = 10;
  return t ? e.clientX < o.left - r || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - r || e.clientY < l.bottom && e.clientX < l.left;
}
function Wb(e, t, n) {
  var l = Ne(Fa(n.el, n.options.draggable)), o = Ps(n.el, n.options, pe), r = 10;
  return t ? e.clientX > o.right + r || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + r || e.clientX > l.right && e.clientY > l.top;
}
function Ub(e, t, n, l, o, r, a, i) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, d = l ? n.top : n.left, f = l ? n.bottom : n.right, m = !1;
  if (!a) {
    if (i && $l < u * o) {
      if (!qn && (Rn === 1 ? s > d + u * r / 2 : s < f - u * r / 2) && (qn = !0), qn)
        m = !0;
      else if (Rn === 1 ? s < d + $l : s > f - $l)
        return -Rn;
    } else if (s > d + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return Kb(t);
  }
  return m = m || a, m && (s < d + u * r / 2 || s > f - u * r / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function Kb(e) {
  return pt(Z) < pt(e) ? 1 : -1;
}
function Yb(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function Gb(e) {
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
  find: Os,
  is: function(t, n) {
    return !!mt(t, n, t, !1);
  },
  extend: Ib,
  throttle: xs,
  closest: mt,
  toggleClass: st,
  clone: Is,
  index: pt,
  nextTick: wl,
  cancelNextTick: ha,
  detectDirection: Ts,
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
    l.utils && (ie.utils = St(St({}, ie.utils), l.utils)), Jn.mount(l);
  });
};
ie.create = function(e, t) {
  return new ie(e, t);
};
ie.version = xb;
var Fe = [], Mn, ma, ga = !1, ta, na, Rl, Dn;
function Xb() {
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
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : (_e(document, "pointermove", this._handleFallbackAutoScroll), _e(document, "touchmove", this._handleFallbackAutoScroll), _e(document, "mousemove", this._handleFallbackAutoScroll)), Ei(), kl(), Pb();
    },
    nulling: function() {
      Rl = ma = Mn = ga = Dn = ta = na = null, Fe.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(r, a);
      if (Rl = n, l || this.options.forceAutoScrollFallback || Qn || jt || Ln) {
        la(n, this.options, i, l);
        var s = Nt(i, !0);
        ga && (!Dn || r !== ta || a !== na) && (Dn && Ei(), Dn = setInterval(function() {
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
function Ei() {
  clearInterval(Dn);
}
var la = xs(function(e, t, n, l) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, i = t.scrollSpeed, s = $t(), u = !1, d;
    ma !== n && (ma = n, kl(), Mn = t.scroll, d = t.scrollFn, Mn === !0 && (Mn = Nt(n, !0)));
    var f = 0, m = Mn;
    do {
      var p = m, g = Ne(p), y = g.top, z = g.bottom, I = g.left, V = g.right, S = g.width, w = g.height, D = void 0, $ = void 0, E = p.scrollWidth, F = p.scrollHeight, q = ue(p), O = p.scrollLeft, b = p.scrollTop;
      p === s ? (D = S < E && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), $ = w < F && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (D = S < E && (q.overflowX === "auto" || q.overflowX === "scroll"), $ = w < F && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var x = D && (Math.abs(V - o) <= a && O + S < E) - (Math.abs(I - o) <= a && !!O), C = $ && (Math.abs(z - r) <= a && b + w < F) - (Math.abs(y - r) <= a && !!b);
      if (!Fe[f])
        for (var H = 0; H <= f; H++)
          Fe[H] || (Fe[H] = {});
      (Fe[f].vx != x || Fe[f].vy != C || Fe[f].el !== p) && (Fe[f].el = p, Fe[f].vx = x, Fe[f].vy = C, clearInterval(Fe[f].pid), (x != 0 || C != 0) && (u = !0, Fe[f].pid = setInterval(function() {
        l && this.layer === 0 && ie.active._onTouchMove(Rl);
        var G = Fe[this.layer].vy ? Fe[this.layer].vy * i : 0, Y = Fe[this.layer].vx ? Fe[this.layer].vx * i : 0;
        typeof d == "function" && d.call(ie.dragged.parentNode[it], Y, G, e, Rl, Fe[this.layer].el) !== "continue" || Bs(Fe[this.layer].el, Y, G);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && m !== s && (m = Nt(m, !1)));
    ga = u;
  }
}, 30), As = function(t) {
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
function Na() {
}
Na.prototype = {
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
  drop: As
};
It(Na, {
  pluginName: "revertOnSpill"
});
function Ra() {
}
Ra.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable, o = l || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: As
};
It(Ra, {
  pluginName: "removeOnSpill"
});
ie.mount(new Xb());
ie.mount(Ra, Na);
const Tt = (e) => (Ue("data-v-32ae4908"), e = e(), Ke(), e), Zb = {
  class: "editor-built-in-control-commen-multiple"
}, Qb = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Jb = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "选项", -1)), ey = {
  class: "flex mt24 options"
}, ty = {
  class: "select-group"
}, ny = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "drag"
}, [/* @__PURE__ */ h("div", {
  class: "line"
}), /* @__PURE__ */ h("div", {
  class: "line"
})], -1)), ly = ["onClick"], oy = {
  class: "add-btn"
}, ay = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), ry = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", null, "添加选项", -1)), iy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "校验", -1)), sy = {
  class: "flex mt24 options"
}, uy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), cy = {
  class: "flex mt24 options"
}, dy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少选择数", -1)), fy = {
  class: "pl24"
}, py = {
  class: "flex mt24 options"
}, vy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多选择数", -1)), hy = {
  class: "pl24"
}, my = /* @__PURE__ */ L({
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
    return xe(() => {
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
      const s = Kt, u = kn, d = _t;
      return _(), j("div", Zb, [Qb, Jb, h("div", ey, [h("ul", ty, [(_(!0), j(ze, null, wt(e.block.props.options.defaultValue, (f, m) => (_(), j("li", {
        key: m,
        class: "useDrag"
      }, [ny, c(s, {
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
      }, null, 8, ly)]))), 128)), h("div", oy, [c(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: ne(() => [ay, ry]),
        _: 1
      })])])]), iy, h("div", sy, [uy, h("div", null, [c(d, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", cy, [dy, h("div", fy, [c(s, {
        modelValue: e.block.props.selectMin.defaultValue,
        "onUpdate:modelValue": i[1] || (i[1] = (f) => e.block.props.selectMin.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", py, [vy, h("div", hy, [c(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": i[2] || (i[2] = (f) => e.block.props.selectMax.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const gy = /* @__PURE__ */ Ee(my, [["__scopeId", "data-v-32ae4908"]]), by = {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  render: (e) => {
    let t = e.props;
    return c(Sb, {
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
  controlView: (e, t) => c(gy, {
    block: e
  })
}, yy = (e) => (Ue("data-v-6aba8687"), e = e(), Ke(), e), _y = {
  class: "title-tip"
}, $y = {
  key: 0,
  class: "red"
}, wy = {
  class: "form-item"
}, ky = {
  class: "item"
}, Cy = /* @__PURE__ */ yy(() => /* @__PURE__ */ h("div", {
  class: "right"
}, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), Sy = /* @__PURE__ */ L({
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
    }
  },
  setup(e) {
    return (t, n) => (_(), j("div", {
      class: "editor-built-in-commen-radio",
      style: me(e.style)
    }, [h("div", _y, [e.isRequire ? (_(), j("span", $y, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", wy, [h("div", ky, [h("span", null, ye(e.placeholder), 1), Cy])])], 4));
  }
});
const Vy = /* @__PURE__ */ Ee(Sy, [["__scopeId", "data-v-6aba8687"]]), rn = (e) => (Ue("data-v-86c5cbf1"), e = e(), Ke(), e), Ey = {
  class: "editor-built-in-control-commen-radio"
}, Oy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), xy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "选项", -1)), By = {
  class: "flex mt24 options"
}, Iy = {
  class: "select-group"
}, Py = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "drag"
}, [/* @__PURE__ */ h("div", {
  class: "line"
}), /* @__PURE__ */ h("div", {
  class: "line"
})], -1)), jy = ["onClick"], Ty = {
  class: "add-btn"
}, My = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), Dy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("span", null, "添加选项", -1)), zy = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "校验", -1)), Ay = {
  class: "flex mt24 options"
}, Ly = /* @__PURE__ */ rn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), Fy = /* @__PURE__ */ L({
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
    return xe(() => {
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
      const s = Kt, u = kn, d = _t;
      return _(), j("div", Ey, [Oy, xy, h("div", By, [h("ul", Iy, [(_(!0), j(ze, null, wt(e.block.props.options.defaultValue, (f, m) => (_(), j("li", {
        key: m,
        class: "useDrag"
      }, [Py, c(s, {
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
      }, null, 8, jy)]))), 128)), h("div", Ty, [c(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: ne(() => [My, Dy]),
        _: 1
      })])])]), zy, h("div", Ay, [Ly, h("div", null, [c(d, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const Ny = /* @__PURE__ */ Ee(Fy, [["__scopeId", "data-v-86c5cbf1"]]), Ry = {
  group: "个人信息（自定义）",
  name: "commenRadio",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  render: (e) => {
    let t = e.props;
    return c(Vy, {
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
  controlView: (e, t) => c(Ny, {
    block: e
  })
}, Ls = (e) => (Ue("data-v-5f4c52a5"), e = e(), Ke(), e), qy = {
  class: "title-tip mb8"
}, Hy = {
  key: 0,
  class: "red"
}, Wy = {
  class: "form-item"
}, Uy = {
  class: "item"
}, Ky = {
  class: "item flex"
}, Yy = {
  class: "input"
}, Gy = /* @__PURE__ */ Ls(() => /* @__PURE__ */ h("div", {
  class: "success"
}, [/* @__PURE__ */ h("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), Xy = /* @__PURE__ */ Ls(() => /* @__PURE__ */ h("div", {
  class: "button"
}, "发送验证码", -1)), Zy = /* @__PURE__ */ L({
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
      return _(), j("div", {
        class: "editor-built-in-check-phone",
        style: me(e.style)
      }, [h("div", qy, [e.isRequire ? (_(), j("span", Hy, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", Wy, [h("div", Uy, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder
      }, null, 8, ["placeholder"])]), h("div", Ky, [h("div", Yy, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          flex: "1"
        },
        placeholder: "验证码"
      }), Gy]), Xy])])], 4);
    };
  }
});
const Qy = /* @__PURE__ */ Ee(Zy, [["__scopeId", "data-v-5f4c52a5"]]), el = (e) => (Ue("data-v-f4a10f1d"), e = e(), Ke(), e), Jy = {
  class: "editor-built-in-control-check-phone"
}, e0 = /* @__PURE__ */ el(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), t0 = /* @__PURE__ */ el(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), n0 = {
  class: "flex mt24 options"
}, l0 = /* @__PURE__ */ el(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), o0 = {
  class: "flex mt24 options"
}, a0 = /* @__PURE__ */ el(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), r0 = {
  key: 0,
  class: "flex mt24 options"
}, i0 = /* @__PURE__ */ el(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "校验周期（h）", -1)), s0 = {
  class: "pl24"
}, u0 = /* @__PURE__ */ L({
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
      const r = _t, a = Vt;
      return _(), j("div", Jy, [e0, t0, h("div", n0, [l0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", o0, [a0, h("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (_(), j("div", r0, [i0, h("div", s0, [c(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : le("", !0)]);
    };
  }
});
const c0 = /* @__PURE__ */ Ee(u0, [["__scopeId", "data-v-f4a10f1d"]]), d0 = {
  group: "个人信息",
  name: "checkPhone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  render: (e) => {
    let t = e.props;
    return c(Qy, {
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
  controlView: (e, t) => c(c0, {
    block: e
  })
}, f0 = {
  class: "title-tip mb8"
}, p0 = {
  key: 0,
  class: "red"
}, v0 = {
  class: "form-item"
}, h0 = /* @__PURE__ */ L({
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
      return _(), j("div", {
        class: "editor-built-in-registor-person-name",
        style: me(e.style)
      }, [h("div", f0, [e.isRequire ? (_(), j("span", p0, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", v0, [c(l, {
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
const tl = /* @__PURE__ */ Ee(h0, [["__scopeId", "data-v-b47f17b8"]]), sn = (e) => (Ue("data-v-05a6c9a4"), e = e(), Ke(), e), m0 = {
  class: "editor-built-in-control-person-name"
}, g0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), b0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), y0 = {
  class: "flex mt24 options"
}, _0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), $0 = {
  class: "flex mt24 options"
}, w0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), k0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "填写限制", -1)), C0 = {
  class: "flex mt24 options"
}, S0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少填", -1)), V0 = {
  class: "pl24"
}, E0 = {
  class: "flex mt24 options"
}, O0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多填", -1)), x0 = {
  class: "pl24 flex"
}, B0 = /* @__PURE__ */ L({
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
      const r = _t, a = Vt;
      return _(), j("div", m0, [g0, b0, h("div", y0, [_0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", $0, [w0, h("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), k0, h("div", C0, [S0, h("div", V0, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", E0, [O0, h("div", x0, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const I0 = /* @__PURE__ */ Ee(B0, [["__scopeId", "data-v-05a6c9a4"]]), P0 = {
  group: "个人信息",
  name: "personName",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(tl, {
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
  controlView: (e, t) => c(I0, {
    block: e
  })
}, On = (e) => (Ue("data-v-3fd74b8f"), e = e(), Ke(), e), j0 = {
  class: "editor-built-in-control-person-other"
}, T0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), M0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), D0 = {
  class: "flex mt24 options"
}, z0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), A0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "填写限制", -1)), L0 = {
  class: "flex mt24 options"
}, F0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少填", -1)), N0 = {
  class: "pl24"
}, R0 = {
  class: "flex mt24 options"
}, q0 = /* @__PURE__ */ On(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多填", -1)), H0 = {
  class: "pl24 flex"
}, W0 = /* @__PURE__ */ L({
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
      const r = _t, a = Vt;
      return _(), j("div", j0, [T0, M0, h("div", D0, [z0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), A0, h("div", L0, [F0, h("div", N0, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", R0, [q0, h("div", H0, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const U0 = /* @__PURE__ */ Ee(W0, [["__scopeId", "data-v-3fd74b8f"]]), K0 = {
  group: "个人信息",
  name: "personOther",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  render: (e) => {
    let t = e.props;
    return c(tl, {
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
  controlView: (e, t) => c(U0, {
    block: e
  })
}, nl = (e) => (Ue("data-v-df798f6e"), e = e(), Ke(), e), Y0 = {
  class: "editor-built-in-control-person-phone"
}, G0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), X0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), Z0 = {
  class: "flex mt24 options"
}, Q0 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), J0 = {
  class: "flex mt24 options"
}, e1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), t1 = {
  key: 0,
  class: "flex mt24 options"
}, n1 = /* @__PURE__ */ nl(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "校验周期（h）", -1)), l1 = {
  class: "pl24"
}, o1 = /* @__PURE__ */ L({
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
      const r = _t, a = Vt;
      return _(), j("div", Y0, [G0, X0, h("div", Z0, [Q0, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), h("div", J0, [e1, h("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (_(), j("div", t1, [n1, h("div", l1, [c(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : le("", !0)]);
    };
  }
});
const a1 = /* @__PURE__ */ Ee(o1, [["__scopeId", "data-v-df798f6e"]]), r1 = {
  group: "个人信息",
  name: "personPhone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  render: (e) => {
    let t = e.props;
    return c(tl, {
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
  controlView: (e, t) => c(a1, {
    block: e
  })
}, qa = (e) => (Ue("data-v-fcdbe6a9"), e = e(), Ke(), e), i1 = {
  class: "editor-built-in-control-person-school"
}, s1 = /* @__PURE__ */ qa(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), u1 = /* @__PURE__ */ qa(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), c1 = {
  class: "flex mt24 options"
}, d1 = /* @__PURE__ */ qa(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), f1 = /* @__PURE__ */ L({
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
      const r = _t;
      return _(), j("div", i1, [s1, u1, h("div", c1, [d1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const p1 = /* @__PURE__ */ Ee(f1, [["__scopeId", "data-v-fcdbe6a9"]]), v1 = {
  group: "个人信息",
  name: "personProvince",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  render: (e) => {
    let t = e.props;
    return c(tl, {
      style: {},
      title: t.title.defaultValue,
      value: t.value.defaultValue,
      placeholder: t.placeholder.defaultValue,
      isRequire: t.isRequire.defaultValue == "1"
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
  label: "省份",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "所在省份"
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: ""
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入所在省份"
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2"
    }
  },
  controlView: (e, t) => c(p1, {
    block: e
  })
}, xn = (e) => (Ue("data-v-1418313e"), e = e(), Ke(), e), h1 = {
  class: "editor-built-in-control-person-school"
}, m1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), g1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), b1 = {
  class: "flex mt24 options"
}, y1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), _1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("div", {
  class: "group-title mt24"
}, "填写限制", -1)), $1 = {
  class: "flex mt24 options"
}, w1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最少填", -1)), k1 = {
  class: "pl24"
}, C1 = {
  class: "flex mt24 options"
}, S1 = /* @__PURE__ */ xn(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "最多填", -1)), V1 = {
  class: "pl24 flex"
}, E1 = /* @__PURE__ */ L({
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
      const r = _t, a = Vt;
      return _(), j("div", h1, [m1, g1, h("div", b1, [y1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), _1, h("div", $1, [w1, h("div", k1, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), h("div", C1, [S1, h("div", V1, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ge(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const O1 = /* @__PURE__ */ Ee(E1, [["__scopeId", "data-v-1418313e"]]), x1 = {
  group: "个人信息",
  name: "personSchool",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  render: (e) => {
    let t = e.props;
    return c(tl, {
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
  controlView: (e, t) => c(O1, {
    block: e
  })
}, B1 = (e) => (Ue("data-v-22530c73"), e = e(), Ke(), e), I1 = {
  class: "title-tip mb8"
}, P1 = {
  key: 0,
  class: "red"
}, j1 = {
  class: "form-item"
}, T1 = /* @__PURE__ */ B1(() => /* @__PURE__ */ h("div", {
  class: "btn"
}, [/* @__PURE__ */ h("span", null, "上传文件"), /* @__PURE__ */ h("input", {
  type: "file",
  class: "file"
})], -1)), M1 = {
  key: 0,
  class: "tip title-tip"
}, D1 = /* @__PURE__ */ L({
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
    return (t, n) => (_(), j("div", {
      class: "editor-built-in-person-upload",
      style: me(e.style)
    }, [h("div", I1, [e.isRequire ? (_(), j("span", P1, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", j1, [T1, e.tip ? (_(), j("div", M1, ye(e.tip), 1)) : le("", !0)])], 4));
  }
});
const z1 = /* @__PURE__ */ Ee(D1, [["__scopeId", "data-v-22530c73"]]), Ha = (e) => (Ue("data-v-be68881f"), e = e(), Ke(), e), A1 = {
  class: "editor-built-in-control-person-upload"
}, L1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), F1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), N1 = {
  class: "flex mt24 options"
}, R1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), q1 = /* @__PURE__ */ L({
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
      const r = _t;
      return _(), j("div", A1, [L1, F1, h("div", N1, [R1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const H1 = /* @__PURE__ */ Ee(q1, [["__scopeId", "data-v-be68881f"]]), W1 = {
  group: "个人信息",
  label: "上传文件",
  name: "personUpload",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (e) => {
    let t = e.props;
    return c(z1, {
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
  controlView: (e, t) => c(H1, {
    block: e
  })
}, Wa = (e) => (Ue("data-v-169f549c"), e = e(), Ke(), e), U1 = {
  class: "editor-built-in-control-person-year"
}, K1 = /* @__PURE__ */ Wa(() => /* @__PURE__ */ h("div", {
  class: "h-line"
}, null, -1)), Y1 = /* @__PURE__ */ Wa(() => /* @__PURE__ */ h("div", {
  class: "group-title"
}, "校验", -1)), G1 = {
  class: "flex mt24 options"
}, X1 = /* @__PURE__ */ Wa(() => /* @__PURE__ */ h("span", {
  class: "option-label"
}, "设为必填", -1)), Z1 = /* @__PURE__ */ L({
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
      const r = _t;
      return _(), j("div", U1, [K1, Y1, h("div", G1, [X1, h("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const Q1 = /* @__PURE__ */ Ee(Z1, [["__scopeId", "data-v-169f549c"]]), J1 = {
  class: "title-tip mb8"
}, e_ = {
  key: 0,
  class: "red"
}, t_ = {
  class: "form-item"
}, n_ = /* @__PURE__ */ L({
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
      const l = mn, o = ja;
      return _(), j("div", {
        class: "editor-built-in-person-year",
        style: me(e.style)
      }, [h("div", J1, [e.isRequire ? (_(), j("span", e_, "*")) : le("", !0), h("span", null, ye(e.title), 1)]), h("div", t_, [c(o, {
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
          default: ne(() => [ge("2020")]),
          _: 1
        }), c(l, {
          value: 2021
        }, {
          default: ne(() => [ge("2021")]),
          _: 1
        }), c(l, {
          value: 2022
        }, {
          default: ne(() => [ge("2022")]),
          _: 1
        }), c(l, {
          value: 2023
        }, {
          default: ne(() => [ge("2023")]),
          _: 1
        }), c(l, {
          value: 2024
        }, {
          default: ne(() => [ge("2024")]),
          _: 1
        }), c(l, {
          value: 2025
        }, {
          default: ne(() => [ge("2025")]),
          _: 1
        }), c(l, {
          value: 2026
        }, {
          default: ne(() => [ge("2026")]),
          _: 1
        }), c(l, {
          value: 2027
        }, {
          default: ne(() => [ge("2027")]),
          _: 1
        }), c(l, {
          value: 2028
        }, {
          default: ne(() => [ge("2028")]),
          _: 1
        }), c(l, {
          value: 2029
        }, {
          default: ne(() => [ge("2029")]),
          _: 1
        }), c(l, {
          value: 2030
        }, {
          default: ne(() => [ge("2030")]),
          _: 1
        })]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const l_ = /* @__PURE__ */ Ee(n_, [["__scopeId", "data-v-4752fc19"]]), o_ = {
  group: "个人信息",
  name: "personYear",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (e) => {
    let t = e.props;
    return c(l_, {
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
  controlView: (e, t) => c(Q1, {
    block: e
  })
}, oa = {
  baseText: qg,
  baseImg: Gg,
  baseSubmit: vb,
  baseTitle: gb,
  commenMultiple: by,
  commenRadio: Ry,
  checkPhone: d0,
  personName: P0,
  personOther: K0,
  personPhone: r1,
  personProvince: v1,
  personSchool: x1,
  personUpload: W1,
  personYear: o_
};
function a_(e, t) {
  t.forEach((n) => {
    if (oa[n])
      e.registry(n, oa[n]);
    else {
      let l = Object.keys(oa);
      console.error(`内置组件不合法，仅支持：${l.join(",")}共${l.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const no = (e) => (Ue("data-v-ce57a2cc"), e = e(), Ke(), e), r_ = {
  class: "visual-tab-type"
}, i_ = /* @__PURE__ */ no(() => /* @__PURE__ */ h("div", {
  class: "bg-com"
}, [/* @__PURE__ */ h("div", {
  class: "bg-img"
})], -1)), s_ = /* @__PURE__ */ no(() => /* @__PURE__ */ h("span", null, "组件", -1)), u_ = [i_, s_], c_ = /* @__PURE__ */ no(() => /* @__PURE__ */ h("div", {
  class: "bg-com"
}, [/* @__PURE__ */ h("div", {
  class: "bg-img"
})], -1)), d_ = /* @__PURE__ */ no(() => /* @__PURE__ */ h("span", null, "模版", -1)), f_ = [c_, d_], p_ = /* @__PURE__ */ L({
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
    return (l, o) => (_(), j("div", r_, [h("div", {
      class: K(["visual-tab-type-com", {
        active: e.modelValue == "1"
      }]),
      onClick: o[0] || (o[0] = (r) => n("1"))
    }, u_, 2), h("div", {
      class: K(["visual-tab-type-com visual-tab-type-template", {
        active: e.modelValue == "2"
      }]),
      onClick: o[1] || (o[1] = (r) => n("2"))
    }, f_, 2)]));
  }
});
const Oi = /* @__PURE__ */ Ee(p_, [["__scopeId", "data-v-ce57a2cc"]]), v_ = /* @__PURE__ */ L({
  components: {
    editorBlock: Ml,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: bi,
    leftNav: Oi
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
      default: () => ["baseImg", "baseSubmit", "baseText", "baseTitle", "checkPhone", "personName", "personOther", "personPhone", "personProvince", "personSchool", "personUpload", "personYear", "commenMultiple", "commenRadio"]
    },
    visableHead: {
      type: Boolean,
      default: !0
    },
    visableNavbar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    var $, E, F, q;
    if (($ = e.modelValue) != null && $.container)
      (E = e.modelValue) != null && E.container.width || (e.modelValue.container.width = 350), (F = e.modelValue) != null && F.container.height || (e.modelValue.container.height = 600);
    else
      throw new Error("请检查传入的container！");
    (q = e == null ? void 0 : e.builtInComs) != null && q.length && a_(rt, e.builtInComs);
    const {
      shiftMove: l = !1,
      shortcutKeys: o = !1
    } = e.config;
    let r = Ii(() => e.modelValue, (O) => t("update:modelValue", O)), a = Pe({
      // 当前选中的元素
      selectedBlock: null
    }), i = v(() => ({
      width: r.value.container.width + "px",
      minHeight: r.value.container.height + "px",
      backgroundColor: r.value.container.backgroundColor,
      transform: `scale(${r.value.container.scale / 100})`
    }));
    function s() {
      var O;
      (((O = e.modelValue) == null ? void 0 : O.blocks) || []).map((b) => (b.focus = !1, b));
    }
    function u(O) {
      w.cacheView = null, r.value = {
        ...r.value,
        blocks: Qe(O)
      };
    }
    function d(O) {
      r.value.blocks.forEach((b) => {
        if (O.id == b.id)
          for (let x in b)
            w.cacheView = null, b[x] = Qe(O[x]);
      });
    }
    function f(O) {
      let b = document.querySelectorAll(".editor-bloack");
      b && (b = Array.from(b)), b.forEach((x) => {
        x.classList.remove("editor-bloack-drag-active");
      }), O && O.classList.add("editor-bloack-drag-active");
    }
    const m = B(null), p = function() {
      let O = {
        component: null
      }, b = {
        dragstart(x, C) {
          var H, G, Y, J;
          (H = m.value) == null || H.addEventListener("dragenter", b.dragenter), (G = m.value) == null || G.addEventListener("dragover", b.dragover), (Y = m.value) == null || Y.addEventListener("dragleave", b.dragleave), (J = m.value) == null || J.addEventListener("drop", b.drop), O.component = C, Dl.emit();
        },
        dragenter(x) {
          Array.from(x.target.classList).includes("editor-bloack") ? f(x.target) : f(), x.dataTransfer.dropEffect = "move";
        },
        dragleave(x) {
          x.dataTransfer.dropEffect = "none";
        },
        dragend(x) {
          var C, H, G, Y;
          (C = m.value) == null || C.removeEventListener("dragenter", b.dragenter), (H = m.value) == null || H.removeEventListener("dragover", b.dragover), (G = m.value) == null || G.removeEventListener("dragleave", b.dragleave), (Y = m.value) == null || Y.removeEventListener("drop", b.drop), O.component = null, zl.emit(), f();
        },
        dragover(x) {
          x.preventDefault();
        },
        drop(x) {
          let C = O.component, H = C == null ? void 0 : C.dragMode, G = Ya({
            dragMode: H || "",
            widthAdaption100: C.widthAdaption100 ? C.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: C.name,
            props: C.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1
          }), Y = x.target.dataset;
          "index" in Y ? I.add(G, Y.index) : I.add(G);
        },
        click(x, C) {
          console.log(C);
          let H = C == null ? void 0 : C.dragMode, G = Ya({
            dragMode: H || "",
            widthAdaption100: C.widthAdaption100 ? C.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: C.name,
            props: C.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1
          });
          I.add(G);
        }
      };
      return b;
    }(), g = v(() => {
      var O, b, x;
      return {
        blurBlock: (O = e.modelValue) == null ? void 0 : O.blocks.filter((C) => !C.focus),
        // 当前失去焦点的模块
        focusBlock: (b = e.modelValue) == null ? void 0 : b.blocks.filter((C) => C.focus),
        // 当前获得焦点的模块
        cBlock: (x = e.modelValue) == null ? void 0 : x.blocks.find((C) => C.focus)
        // 当前获得焦点的模块
      };
    });
    let y = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(O, b) {
          O.stopPropagation(), O.preventDefault(), s(), b.focus = !b.focus, a.selectedBlock = b, z.mousedown(O);
        }
      },
      container: {
        // 点击画布区域的处理的事情
        onMousedown(O) {
          O.preventDefault(), O.stopPropagation(), s(), a.selectedBlock = null;
        }
      }
    };
    const z = function() {
      const O = {
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
      function b(H) {
        var G, Y, J;
        O.startX = H.clientX, O.startY = H.clientY, O.startPositon = (G = g.value.focusBlock || []) == null ? void 0 : G.map((W) => ({
          left: W.left,
          top: W.top
        })), O.draging = !1, O.startLeft = (Y = a.selectedBlock) == null ? void 0 : Y.left, O.startTop = (J = a.selectedBlock) == null ? void 0 : J.top, document.addEventListener("mousemove", x), document.addEventListener("mouseup", C);
      }
      function x(H) {
        var te;
        O.draging || (O.draging = !0, Dl.emit());
        let {
          clientX: G,
          clientY: Y
        } = H, {
          startX: J,
          startY: W
        } = O;
        (te = g.value.focusBlock) == null || te.forEach((P, k) => {
          P.left = O.startPositon[k].left + (G - J), P.top = O.startPositon[k].top + (Y - W);
        });
      }
      function C(H) {
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", C), zl.emit();
      }
      return {
        mousedown: b
      };
    }(), I = zm({
      currentBlockInfo: g,
      updateBlocks: u,
      dataModel: r,
      shortcutKeys: o
    }), V = Dm(I, g);
    function S(O) {
      I.delete(O);
    }
    const w = {
      // 操作的原数据
      originData: null,
      // 视图缓存
      cacheView: null,
      // 控制层渲染函数
      controlRender() {
        var x, C, H;
        if (((x = this.originData) == null ? void 0 : x.id) === ((C = g.value.cBlock) == null ? void 0 : C.id) && this.cacheView)
          return this.cacheView;
        let O = (H = g.value.cBlock) == null ? void 0 : H.componentKey, b = rt == null ? void 0 : rt.componentMap;
        return O && b && g.value.cBlock ? (this.originData = Qe(g.value.cBlock), this.cacheView = b[O].controlView(g.value.cBlock, d), this.cacheView) : null;
      },
      sure() {
        a.selectedBlock = null;
      },
      cancle() {
        d(this.originData), a.selectedBlock = null;
      },
      cancleEffect() {
        this.originData = null, this.cacheView = null, console.log("取消副作用");
      }
    };
    be(() => a.selectedBlock, (O) => {
      O || w.cancleEffect();
    });
    let D = B("1");
    return () => c("div", {
      class: "visual-editor-container"
    }, [e.visableHead && n.header ? c("div", {
      class: "visual-editor-header"
    }, [n.header ? n.header() : null]) : null, c("div", {
      class: "visual-editor-core visual-editor"
    }, [c("div", {
      class: "visual-editor-leftComponentsMenu"
    }, [e.visableNavbar ? c(Oi, {
      modelValue: D.value,
      onChange: (O) => D.value = O
    }, null) : null, c("div", {
      class: ["visual-com-group", e.visableNavbar ? "" : "visual-com-group-not-navbar"]
    }, [D.value == "1" ? c(bi, {
      componentLists: rt == null ? void 0 : rt.componentLists,
      menuDragInfo: p
    }, null) : c("div", null, [n.tempList && n.tempList()])])]), c("div", {
      class: "visual-editor-area-body"
    }, [c("div", {
      class: "visual-editor-area-container",
      onMousedown: () => s()
    }, [c("div", {
      class: "visual-editor-area-content",
      style: i.value,
      ref: m,
      onMousedown: (O) => y.container.onMousedown(O)
    }, [r.value.blocks.map((O, b) => {
      var x;
      return c("div", null, [c(Ml, {
        index: b,
        block: O,
        container: (x = e.modelValue) == null ? void 0 : x.container,
        onMousedown: (C) => y.block.onMousedown(C, O),
        onDelBlock: () => S(O),
        onUpBlock: I.up,
        onDownBlock: I.down,
        key: O.id
      }, null)]);
    })])])]), c("div", {
      class: "visual-editor-topMenu"
    }, [c("div", {
      class: "buttons"
    }, [V.map((O) => c("div", {
      class: "button"
    }, [c("button", {
      onClick: O.handler
    }, [O.label])]))])]), c("div", {
      class: "visual-editor-right-seting"
    }, [og(w.controlRender.bind(w), g, e.modelValue)])])]);
  }
});
const h_ = /* @__PURE__ */ L({
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
    let n = Ii(() => e.modelValue, (o) => t("update:modelValue", o)), l = v(() => ({
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
}), Fs = rt.registry, Ns = v_, m_ = h_, g_ = function(e) {
  Fs(e.name, e);
}, b_ = function(e) {
  Ns.batchRegistry(e);
}, y_ = function() {
  return rt == null ? void 0 : rt.componentLists;
}, w_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: Fs,
  batchRegistry: b_,
  logConfig: y_,
  priviewVisualEditor: m_,
  registry: g_,
  visualEditor: Ns
}, Symbol.toStringTag, { value: "Module" }));
export {
  b_ as batchRegistry,
  w_ as default,
  y_ as logConfig,
  m_ as priviewVisualEditor,
  g_ as registry,
  Ns as visualEditor
};
