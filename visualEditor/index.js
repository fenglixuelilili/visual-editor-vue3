var Ws = Object.defineProperty;
var Us = (e, t, n) => t in e ? Ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ka = (e, t, n) => (Us(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as I, watch as ge, computed as h, reactive as Pe, inject as Ue, getCurrentInstance as Kn, cloneVNode as ql, defineComponent as L, onMounted as Ee, onUnmounted as Hl, openBlock as y, createElementBlock as B, normalizeClass as G, renderSlot as re, normalizeStyle as pe, createElementVNode as p, resolveComponent as se, createBlock as ue, createCommentVNode as le, toRef as Sl, toRefs as $e, createVNode as c, mergeProps as Se, createTextVNode as ye, nextTick as Fe, provide as Ht, Fragment as je, createSlots as Ii, withCtx as ne, withModifiers as nn, onUpdated as Pt, onBeforeUnmount as Wt, readonly as Ks, onDeactivated as Gs, Teleport as Ys, Transition as Vl, withDirectives as ba, vShow as ya, resolveDynamicComponent as en, toDisplayString as be, renderList as bt, TransitionGroup as Pi, watchEffect as Xs, isVNode as _a, render as Ga, Comment as Zs, pushScopeId as Ke, popScopeId as Ge, unref as Qs } from "vue";
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
function Js() {
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
let Le = Js();
function ji(e, t) {
  let n = I(e());
  return ge(e, (l) => {
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
const Cn = Object.prototype.toString;
function ze(e) {
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
function me(e) {
  return Cn.call(e) === "[object Number]" && e === e;
}
function Ze(e) {
  return e === void 0;
}
function et(e) {
  return typeof e == "function";
}
function eu(e) {
  return Oe(e) && Object.keys(e).length === 0;
}
const Ti = (e) => (e == null ? void 0 : e.$) !== void 0, on = Symbol("ArcoConfigProvider"), al = {
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
}, tu = {
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
}, nu = I("zh-CN"), lu = Pe({
  "zh-CN": tu
}), $a = () => {
  const e = Ue(on, void 0), t = h(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : lu[nu.value];
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
      return kt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var d;
        return (d = r[u]) != null ? d : s;
      }) : i;
    }
  };
};
var ou = Object.defineProperty, au = Object.defineProperties, ru = Object.getOwnPropertyDescriptors, Xa = Object.getOwnPropertySymbols, iu = Object.prototype.hasOwnProperty, su = Object.prototype.propertyIsEnumerable, Za = (e, t, n) => t in e ? ou(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, uu = (e, t) => {
  for (var n in t || (t = {}))
    iu.call(t, n) && Za(e, n, t[n]);
  if (Xa)
    for (var n of Xa(t))
      su.call(t, n) && Za(e, n, t[n]);
  return e;
}, cu = (e, t) => au(e, ru(t));
const du = "A", fu = "arco", oa = "$arco", He = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : du;
}, We = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[oa] = cu(uu({}, (n = e.config.globalProperties[oa]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, ee = (e) => {
  var t, n, l;
  const o = Kn(), r = Ue(on, void 0), a = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[oa]) == null ? void 0 : t.classPrefix) != null ? l : fu;
  return e ? `${a}-${e}` : a;
};
var Mi = function() {
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
}(), aa = typeof window < "u" && typeof document < "u" && window.document === document, Ol = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), pu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ol) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), vu = 2;
function hu(e, t) {
  var n = !1, l = !1, o = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function a() {
    pu(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < vu)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return i;
}
var mu = 20, gu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], bu = typeof MutationObserver < "u", yu = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = hu(this.refresh.bind(this), mu);
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
      !aa || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), bu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !aa || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = gu.some(function(r) {
        return !!~l.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Di = function(e, t) {
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
  return t || Ol;
}, zi = Ul(0, 0, 0, 0);
function El(e) {
  return parseFloat(e) || 0;
}
function Qa(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var r = e["border-" + o + "-width"];
    return l + El(r);
  }, 0);
}
function _u(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var r = o[l], a = e["padding-" + r];
    n[r] = El(a);
  }
  return n;
}
function $u(e) {
  var t = e.getBBox();
  return Ul(0, 0, t.width, t.height);
}
function wu(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return zi;
  var l = _n(e).getComputedStyle(e), o = _u(l), r = o.left + o.right, a = o.top + o.bottom, i = El(l.width), s = El(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= Qa(l, "left", "right") + r), Math.round(s + a) !== n && (s -= Qa(l, "top", "bottom") + a)), !Cu(e)) {
    var u = Math.round(i + r) - t, d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return Ul(o.left, o.top, i, s);
}
var ku = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof _n(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof _n(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Cu(e) {
  return e === _n(e).document.documentElement;
}
function Su(e) {
  return aa ? ku(e) ? $u(e) : wu(e) : zi;
}
function Vu(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return Di(a, {
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
var Ou = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ul(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Su(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Eu = (
  /** @class */
  function() {
    function e(t, n) {
      var l = Vu(n);
      Di(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), xu = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new Mi(), typeof t != "function")
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
        n.has(t) || (n.set(t, new Ou(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Eu(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Ai = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Mi(), Li = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = yu.getInstance(), l = new xu(t, n, this);
      Ai.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Li.prototype[e] = function() {
    var t;
    return (t = Ai.get(this))[e].apply(t, arguments);
  };
});
var wa = function() {
  return typeof Ol.ResizeObserver < "u" ? Ol.ResizeObserver : Li;
}(), Ja;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Ja || (Ja = {}));
var er;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(er || (er = {}));
const Kl = (e) => Boolean(e && e.shapeFlag & 1), Gn = (e, t) => Boolean(e && e.shapeFlag & 6), Bu = (e, t) => Boolean(e && e.shapeFlag & 8), ka = (e, t) => Boolean(e && e.shapeFlag & 16), Fi = (e, t) => Boolean(e && e.shapeFlag & 32), hn = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Kl(l) || Gn(l))
        return l;
      if (ka(l, l.children)) {
        const o = hn(l.children);
        if (o)
          return o;
      } else if (Fi(l, l.children)) {
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
}, Iu = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Ni = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Kl(l) || Gn(l)) {
        const r = et(t) ? t(l) : t;
        return e[n] = ql(l, r, !0), !0;
      }
      const o = Ca(l);
      if (o && o.length > 0 && Ni(o, t))
        return !0;
    }
  return !1;
}, Ca = (e) => {
  if (ka(e, e.children))
    return e.children;
  if (ze(e))
    return e;
}, Ri = (e) => {
  var t, n;
  if (Kl(e))
    return e.el;
  if (Gn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Ri(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = Ca(e);
    return qi(l);
  }
}, qi = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Ri(t);
      if (n)
        return n;
    }
}, ml = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const r of e ?? [])
    Kl(r) || Gn(r) || t && Bu(r, r.children) ? o.push(r) : ka(r, r.children) ? o.push(...ml(r.children, t)) : Fi(r, r.children) ? o.push(...ml((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : ze(r) && o.push(...ml(r, t));
  return o;
}, tr = (e) => {
  if (e)
    return et(e) ? e : () => e;
}, Hi = (e, t) => {
  var n;
  const l = [];
  if (Gn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Hi(e.component.subTree, t));
  else {
    const o = Ca(e);
    o && l.push(...Wi(o, t));
  }
  return l;
}, Wi = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Hi(l, t));
  return n;
};
var xl = L({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = I(), r = h(() => Ti(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new wa((u) => {
        const d = u[0];
        t("resize", d);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return ge(r, (s) => {
      l && i(), s && a(s);
    }), Ee(() => {
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
const Ui = typeof window > "u" ? global : window, Pu = Ui.requestAnimationFrame, nr = Ui.cancelAnimationFrame;
function lr(e) {
  let t = 0;
  const n = (...l) => {
    t && nr(t), t = Pu(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    nr(t), t = 0;
  }, n;
}
const Sa = () => {
}, ju = () => {
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
})(), Tu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("class", `arco-overlay arco-overlay-${e}`), t;
}, Mu = (e, t) => {
  var n;
  return Va ? Sa() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, or = (e, t) => {
  if (kt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Mu(n, t);
  }
  return e;
}, Du = (e, t) => {
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
var ce = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const zu = L({
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
function Au(e, t, n, l, o, r) {
  return y(), B("span", {
    class: G([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [re(e.$slots, "default")], 2);
}
var ct = /* @__PURE__ */ ce(zu, [["render", Au]]);
const Lu = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Fu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Nu = /* @__PURE__ */ p("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Ru = [Nu];
function qu(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Ru, 14, Fu);
}
var ao = /* @__PURE__ */ ce(Lu, [["render", qu]]);
const an = Object.assign(ao, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ao.name, ao);
  }
}), Hu = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Wu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Uu = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ku = [Uu];
function Gu(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Ku, 14, Wu);
}
var ro = /* @__PURE__ */ ce(Hu, [["render", Gu]]);
const Yu = Object.assign(ro, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ro.name, ro);
  }
}), Xu = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Zu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Qu = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ju = [Qu];
function ec(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Ju, 14, Zu);
}
var io = /* @__PURE__ */ ce(Xu, [["render", ec]]);
const Ki = Object.assign(io, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + io.name, io);
  }
}), tc = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), nc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], lc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), oc = [lc];
function ac(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, oc, 14, nc);
}
var so = /* @__PURE__ */ ce(tc, [["render", ac]]);
const Gi = Object.assign(so, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + so.name, so);
  }
}), rc = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), ic = ["stroke-width", "stroke-linecap", "stroke-linejoin"], sc = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), uc = [sc];
function cc(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, uc, 14, ic);
}
var uo = /* @__PURE__ */ ce(rc, [["render", cc]]);
const Yi = Object.assign(uo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + uo.name, uo);
  }
});
function ar(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function rr(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function co(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return rr(n.overflowY, t) || rr(n.overflowX, t) || function(l) {
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
function rl(e, t, n, l, o, r, a, i) {
  return r < e && a > t || r > e && a < t ? 0 : r <= e && i <= n || a >= t && i >= n ? r - e - l : a > t && i < n || r < e && i > n ? a - t + o : 0;
}
var ir = function(e, t) {
  var n = window, l = t.scrollMode, o = t.block, r = t.inline, a = t.boundary, i = t.skipOverflowHiddenElements, s = typeof a == "function" ? a : function(M) {
    return M !== a;
  };
  if (!ar(e))
    throw new TypeError("Invalid target");
  for (var u, d, f = document.scrollingElement || document.documentElement, m = [], v = e; ar(v) && s(v); ) {
    if ((v = (d = (u = v).parentElement) == null ? u.getRootNode().host || null : d) === f) {
      m.push(v);
      break;
    }
    v != null && v === document.body && co(v) && !co(document.documentElement) || v != null && co(v, i) && m.push(v);
  }
  for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, _ = n.visualViewport ? n.visualViewport.height : innerHeight, z = window.scrollX || pageXOffset, P = window.scrollY || pageYOffset, V = e.getBoundingClientRect(), S = V.height, k = V.width, D = V.top, $ = V.right, O = V.bottom, F = V.left, q = o === "start" || o === "nearest" ? D : o === "end" ? O : D + S / 2, E = r === "center" ? F + k / 2 : r === "end" ? $ : F, b = [], x = 0; x < m.length; x++) {
    var w = m[x], H = w.getBoundingClientRect(), Y = H.height, W = H.width, Z = H.top, U = H.right, te = H.bottom, j = H.left;
    if (l === "if-needed" && D >= 0 && F >= 0 && O <= _ && $ <= g && D >= Z && O <= te && F >= j && $ <= U)
      return b;
    var C = getComputedStyle(w), K = parseInt(C.borderLeftWidth, 10), J = parseInt(C.borderTopWidth, 10), he = parseInt(C.borderRightWidth, 10), we = parseInt(C.borderBottomWidth, 10), fe = 0, Ae = 0, Ce = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - K - he : 0, Be = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - J - we : 0, dt = "offsetWidth" in w ? w.offsetWidth === 0 ? 0 : W / w.offsetWidth : 0, tt = "offsetHeight" in w ? w.offsetHeight === 0 ? 0 : Y / w.offsetHeight : 0;
    if (f === w)
      fe = o === "start" ? q : o === "end" ? q - _ : o === "nearest" ? rl(P, P + _, _, J, we, P + q, P + q + S, S) : q - _ / 2, Ae = r === "start" ? E : r === "center" ? E - g / 2 : r === "end" ? E - g : rl(z, z + g, g, K, he, z + E, z + E + k, k), fe = Math.max(0, fe + P), Ae = Math.max(0, Ae + z);
    else {
      fe = o === "start" ? q - Z - J : o === "end" ? q - te + we + Be : o === "nearest" ? rl(Z, te, Y, J, we + Be, q, q + S, S) : q - (Z + Y / 2) + Be / 2, Ae = r === "start" ? E - j - K : r === "center" ? E - (j + W / 2) + Ce / 2 : r === "end" ? E - U + he + Ce : rl(j, U, W, K, he + Ce, E, E + k, k);
      var at = w.scrollLeft, A = w.scrollTop;
      q += A - (fe = Math.max(0, Math.min(A + fe / tt, w.scrollHeight - Y / tt + Be))), E += at - (Ae = Math.max(0, Math.min(at + Ae / dt, w.scrollWidth - W / dt + Ce)));
    }
    b.push({ el: w, top: fe, left: Ae });
  }
  return b;
};
const dc = ["info", "success", "warning", "error"], Rt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], fc = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), pc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vc = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), hc = [vc];
function mc(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, hc, 14, pc);
}
var fo = /* @__PURE__ */ ce(fc, [["render", mc]]);
const Ut = Object.assign(fo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + fo.name, fo);
  }
}), gc = L({
  name: "FeedbackIcon",
  components: {
    IconLoading: Ut,
    IconCheckCircleFill: Ki,
    IconExclamationCircleFill: Gi,
    IconCloseCircleFill: Yi
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = ee("feedback-icon");
    return {
      cls: h(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function bc(e, t, n, l, o, r) {
  const a = se("icon-loading"), i = se("icon-check-circle-fill"), s = se("icon-exclamation-circle-fill"), u = se("icon-close-circle-fill");
  return y(), B("span", {
    class: G(e.cls)
  }, [e.type === "validating" ? (y(), ue(a, {
    key: 0
  })) : e.type === "success" ? (y(), ue(i, {
    key: 1
  })) : e.type === "warning" ? (y(), ue(s, {
    key: 2
  })) : e.type === "error" ? (y(), ue(u, {
    key: 3
  })) : le("v-if", !0)], 2);
}
var Oa = /* @__PURE__ */ ce(gc, [["render", bc]]);
const Ea = {
  key: "Enter",
  code: "Enter"
}, yc = {
  key: "Backspace",
  code: "Backspace"
};
var _c = Object.defineProperty, sr = Object.getOwnPropertySymbols, $c = Object.prototype.hasOwnProperty, wc = Object.prototype.propertyIsEnumerable, ur = (e, t, n) => t in e ? _c(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, kc = (e, t) => {
  for (var n in t || (t = {}))
    $c.call(t, n) && ur(e, n, t[n]);
  if (sr)
    for (var n of sr(t))
      wc.call(t, n) && ur(e, n, t[n]);
  return e;
};
const Yn = (e, t) => {
  const n = kc({}, e);
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
  const o = l ? {} : Ue(ra, {}), r = h(() => {
    var d;
    return (d = e == null ? void 0 : e.value) != null ? d : o.size;
  }), a = h(() => (t == null ? void 0 : t.value) || o.disabled), i = h(() => (n == null ? void 0 : n.value) || o.error), s = Sl(o, "feedback"), u = Sl(o, "eventHandlers");
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
  const n = Ue(on, void 0);
  return {
    mergedSize: h(() => {
      var o, r;
      return (r = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function Xi(e) {
  const t = I();
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
var Cc = Object.defineProperty, cr = Object.getOwnPropertySymbols, Sc = Object.prototype.hasOwnProperty, Vc = Object.prototype.propertyIsEnumerable, dr = (e, t, n) => t in e ? Cc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fr = (e, t) => {
  for (var n in t || (t = {}))
    Sc.call(t, n) && dr(e, n, t[n]);
  if (cr)
    for (var n of cr(t))
      Vc.call(t, n) && dr(e, n, t[n]);
  return e;
}, Dn = L({
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
    } = $e(e), s = ee("input"), u = I(), {
      mergedSize: d,
      mergedDisabled: f,
      mergedError: m,
      feedback: v,
      eventHandlers: g
    } = ht({
      size: o,
      disabled: r,
      error: a
    }), {
      mergedSize: _
    } = yt(d), [z, P] = Xi(u), V = I(e.defaultValue), S = h(() => {
      var A;
      return (A = e.modelValue) != null ? A : V.value;
    });
    ge(i, (A) => {
      (Ze(A) || Sn(A)) && (V.value = "");
    });
    let k = S.value;
    const D = I(!1), $ = h(() => e.allowClear && !e.readonly && !f.value && Boolean(S.value)), O = I(!1), F = I(""), q = (A) => {
      var M;
      return et(e.wordLength) ? e.wordLength(A) : (M = A.length) != null ? M : 0;
    }, E = h(() => q(S.value)), b = h(() => m.value || Boolean(Oe(e.maxLength) && e.maxLength.errorOnly && E.value > w.value)), x = h(() => Oe(e.maxLength) && Boolean(e.maxLength.errorOnly)), w = h(() => Oe(e.maxLength) ? e.maxLength.length : e.maxLength), H = h(() => {
      const A = q("a");
      return Math.floor(w.value / A);
    }), Y = (A) => {
      var M, X;
      w.value && !x.value && q(A) > w.value && (A = (X = (M = e.wordSlice) == null ? void 0 : M.call(e, A, w.value)) != null ? X : A.slice(0, H.value)), V.value = A, t("update:modelValue", A);
    }, W = (A) => {
      u.value && A.target !== u.value && (A.preventDefault(), u.value.focus());
    }, Z = (A, M) => {
      var X, oe;
      A !== k && (k = A, t("change", A, M), (oe = (X = g.value) == null ? void 0 : X.onChange) == null || oe.call(X, M));
    }, U = (A) => {
      var M, X;
      D.value = !0, k = S.value, t("focus", A), (X = (M = g.value) == null ? void 0 : M.onFocus) == null || X.call(M, A);
    }, te = (A) => {
      var M, X;
      D.value = !1, Z(S.value, A), t("blur", A), (X = (M = g.value) == null ? void 0 : M.onBlur) == null || X.call(M, A);
    }, j = (A) => {
      var M, X, oe;
      const {
        value: Te,
        selectionStart: Me,
        selectionEnd: Ot
      } = A.target;
      if (A.type === "compositionend") {
        if (O.value = !1, F.value = "", w.value && !x.value && E.value >= w.value && q(Te) > w.value && Me === Ot) {
          C();
          return;
        }
        Y(Te), t("input", Te, A), (X = (M = g.value) == null ? void 0 : M.onInput) == null || X.call(M, A), C();
      } else
        O.value = !0, F.value = S.value + ((oe = A.data) != null ? oe : "");
    }, C = () => {
      z(), Fe(() => {
        u.value && S.value !== u.value.value && (u.value.value = S.value, P());
      });
    }, K = (A) => {
      var M, X;
      const {
        value: oe
      } = A.target;
      if (!O.value) {
        if (w.value && !x.value && E.value >= w.value && q(oe) > w.value && A.inputType === "insertText") {
          C();
          return;
        }
        Y(oe), t("input", oe, A), (X = (M = g.value) == null ? void 0 : M.onInput) == null || X.call(M, A), C();
      }
    }, J = (A) => {
      Y(""), Z("", A), t("clear", A);
    }, he = (A) => {
      const M = A.key || A.code;
      !O.value && M === Ea.key && (Z(S.value, A), t("pressEnter", A));
    }, we = h(() => [`${s}-outer`, `${s}-outer-size-${_.value}`, {
      [`${s}-outer-has-suffix`]: Boolean(n.suffix),
      [`${s}-outer-disabled`]: f.value
    }]), fe = h(() => [`${s}-wrapper`, {
      [`${s}-error`]: b.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: D.value
    }]), Ae = h(() => [s, `${s}-size-${_.value}`]), Ce = h(() => Yn(l, Rt)), Be = h(() => Xn(l, Rt)), dt = h(() => {
      const A = fr(fr({}, Be.value), e.inputAttrs);
      return b.value && (A["aria-invalid"] = !0), A;
    }), tt = (A) => {
      var M;
      return c("span", Se({
        class: fe.value,
        onMousedown: W
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
        onInput: K,
        onKeydown: he,
        onFocus: U,
        onBlur: te,
        onCompositionstart: j,
        onCompositionupdate: j,
        onCompositionend: j
      }, dt.value), null), $.value && c(ct, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: J
      }, {
        default: () => [c(an, null, null)]
      }), (n.suffix || Boolean(e.maxLength) && e.showWordLimit || Boolean(v.value)) && c("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: v.value
        }]
      }, [Boolean(e.maxLength) && e.showWordLimit && c("span", {
        class: `${s}-word-limit`
      }, [E.value, ye("/"), w.value]), (M = n.suffix) == null ? void 0 : M.call(n), Boolean(v.value) && c(Oa, {
        type: v.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? c("span", Se({
        class: we.value
      }, Ce.value), [n.prepend && c("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), tt(!0), n.append && c("span", {
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
const Oc = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Ec = ["stroke-width", "stroke-linecap", "stroke-linejoin"], xc = /* @__PURE__ */ p("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Bc = [xc];
function Ic(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Bc, 14, Ec);
}
var po = /* @__PURE__ */ ce(Oc, [["render", Ic]]);
const ia = Object.assign(po, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + po.name, po);
  }
}), Zi = Symbol("ArcoButtonGroup"), Pc = L({
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
    } = $e(e), o = ee("btn"), r = Ue(Zi, void 0), a = h(() => {
      var v;
      return (v = n.value) != null ? v : r == null ? void 0 : r.size;
    }), i = h(() => Boolean(l.value || (r == null ? void 0 : r.disabled))), {
      mergedSize: s,
      mergedDisabled: u
    } = ht({
      size: a,
      disabled: i
    }), {
      mergedSize: d
    } = yt(s), f = h(() => {
      var v, g, _, z, P, V;
      return [o, `${o}-${(g = (v = e.type) != null ? v : r == null ? void 0 : r.type) != null ? g : "secondary"}`, `${o}-shape-${(z = (_ = e.shape) != null ? _ : r == null ? void 0 : r.shape) != null ? z : "square"}`, `${o}-size-${d.value}`, `${o}-status-${(V = (P = e.status) != null ? P : r == null ? void 0 : r.status) != null ? V : "normal"}`, {
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
      handleClick: (v) => {
        if (e.disabled || e.loading) {
          v.preventDefault();
          return;
        }
        t("click", v);
      }
    };
  }
}), jc = ["href"], Tc = ["type", "disabled"];
function Mc(e, t, n, l, o, r) {
  const a = se("icon-loading");
  return e.href ? (y(), B("a", {
    key: 0,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (y(), B("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (y(), ue(a, {
    key: 0,
    spin: "true"
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : le("v-if", !0), re(e.$slots, "default")], 10, jc)) : (y(), B("button", {
    key: 1,
    class: G([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (y(), B("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [e.loading ? (y(), ue(a, {
    key: 0,
    spin: !0
  })) : re(e.$slots, "icon", {
    key: 1
  })], 2)) : le("v-if", !0), re(e.$slots, "default")], 10, Tc));
}
var vo = /* @__PURE__ */ ce(Pc, [["render", Mc]]);
const Dc = L({
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
    return Ht(Zi, Pe({
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
function zc(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var ho = /* @__PURE__ */ ce(Dc, [["render", zc]]);
const wn = Object.assign(vo, {
  Group: ho,
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + vo.name, vo), e.component(n + ho.name, ho);
  }
});
var mo = L({
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
    } = yt(l), a = I(), i = (f) => {
      a.value.inputRef && t("search", a.value.inputRef.value, f);
    }, s = () => {
      var f;
      return c(je, null, [e.loading ? c(Ut, null, null) : c(ct, {
        onClick: i
      }, {
        default: () => [c(ia, null, null)]
      }), (f = n.suffix) == null ? void 0 : f.call(n)]);
    }, u = () => {
      var f;
      let m = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? m = {
        default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : m = {
        icon: () => c(ia, null, null)
      }, c(wn, Se({
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
      render: () => c(Dn, {
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
const Ac = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Lc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Fc = /* @__PURE__ */ p("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Nc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Rc = [Fc, Nc];
function qc(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Rc, 14, Lc);
}
var go = /* @__PURE__ */ ce(Ac, [["render", qc]]);
const Hc = Object.assign(go, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + go.name, go);
  }
}), Wc = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Uc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Kc = /* @__PURE__ */ p("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Gc = /* @__PURE__ */ p("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Yc = [Kc, Gc];
function Xc(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Yc, 14, Uc);
}
var bo = /* @__PURE__ */ ce(Wc, [["render", Xc]]);
const Zc = Object.assign(bo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bo.name, bo);
  }
});
function Hn(e) {
  const t = I(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function Qc(e, t) {
  const {
    value: n
  } = $e(t), [l, o] = Hn(Ze(n.value) ? e : n.value);
  return ge(n, (a) => {
    Ze(a) && o(void 0);
  }), [h(() => Ze(n.value) ? l.value : n.value), o, l];
}
const Jc = L({
  name: "InputPassword",
  components: {
    IconEye: Hc,
    IconEyeInvisible: Zc,
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
    } = $e(e), o = I(), r = () => {
      s(!a.value);
    }, [a, i] = Qc(l.value, Pe({
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
function ed(e, t, n, l, o, r) {
  const a = se("icon-eye"), i = se("icon-eye-invisible"), s = se("a-icon-hover"), u = se("a-input");
  return y(), ue(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Ii({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: ne(() => [re(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: ne(() => [re(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: ne(() => [e.invisibleButton ? (y(), ue(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = nn(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = nn(() => {
      }, ["prevent"]))
    }, {
      default: ne(() => [e.mergedVisible ? (y(), ue(i, {
        key: 1
      })) : (y(), ue(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : le("v-if", !0), re(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: ne(() => [re(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var yo = /* @__PURE__ */ ce(Jc, [["render", ed]]);
const td = L({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: ee("input-group")
    };
  }
});
function nd(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(e.prefixCls)
  }, [re(e.$slots, "default")], 2);
}
var zn = /* @__PURE__ */ ce(td, [["render", nd]]);
const Kt = Object.assign(Dn, {
  Search: mo,
  Password: yo,
  Group: zn,
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Dn.name, Dn), e.component(n + zn.name, zn), e.component(n + mo.name, mo), e.component(n + yo.name, yo);
  }
});
var ld = Object.defineProperty, pr = Object.getOwnPropertySymbols, od = Object.prototype.hasOwnProperty, ad = Object.prototype.propertyIsEnumerable, vr = (e, t, n) => t in e ? ld(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, In = (e, t) => {
  for (var n in t || (t = {}))
    od.call(t, n) && vr(e, n, t[n]);
  if (pr)
    for (var n of pr(t))
      ad.call(t, n) && vr(e, n, t[n]);
  return e;
};
const rd = () => {
  const {
    height: e,
    width: t
  } = ju();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, hr = (e, t) => {
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
}, id = (e) => {
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
}, sd = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: r,
  translate: a
}) => {
  const i = id(e), s = rd(), u = {
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
      const f = Pn("bottom", l, o, {
        offset: r,
        translate: a
      });
      s.height - (n.top + f.top + o.height) > 0 && (d = il(e, "bottom"), t.top = f.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const f = Pn("top", l, o, {
        offset: r,
        translate: a
      });
      n.top + f.top > 0 && (d = il(e, "top"), t.top = f.top);
    }
  if (i === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const f = Pn("right", l, o, {
        offset: r,
        translate: a
      });
      s.width - (n.left + f.left + o.width) > 0 && (d = il(e, "right"), t.left = f.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const f = Pn("left", l, o, {
        offset: r,
        translate: a
      });
      n.left + f.left > 0 && (d = il(e, "left"), t.left = f.left);
    }
  return (i === "top" || i === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - o.width))), (i === "left" || i === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - o.height))), {
    popupPosition: t,
    position: d
  };
}, Pn = (e, t, n, {
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
}, ud = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, cd = (e, t, n, l, {
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
    const f = sd(e, u, {
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
}, dd = (e, t, n, {
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
}, fd = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, mr = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    fd(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, Qi = () => {
  const e = {}, t = I(), n = () => {
    const l = qi(e.value);
    l !== t.value && (t.value = l);
  };
  return Ee(() => n()), Pt(() => n()), {
    children: e,
    firstElement: t
  };
};
var Bl = L({
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
    } = Qi();
    let r;
    const a = (s) => {
      s && (r = new wa((u) => {
        const d = u[0];
        t("resize", d);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return ge(o, (s) => {
      r && i(), s && a(s);
    }), Wt(() => {
      r && i();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function pd(e, t) {
  const n = I(e[t]);
  return Pt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const gr = Symbol("ArcoTrigger"), vd = 1e3, hd = 5e3, md = 1;
class gd {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || hd : Array.from(this.popupStack.popup).pop() || vd) + md, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const _o = new gd();
function Ji(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = I(0), o = () => {
    l.value = _o.add(e);
  }, r = () => {
    _o.delete(l.value, e);
  }, a = () => e === "dialog" ? _o.isLastDialog(l.value) : !1;
  return ge(() => t == null ? void 0 : t.value, (i) => {
    i ? o() : r();
  }, {
    immediate: !0
  }), n && (Ee(() => {
    o();
  }), Wt(() => {
    r();
  })), {
    zIndex: Ks(l),
    open: o,
    close: r,
    isLastDialog: a
  };
}
const bd = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new wa((r) => {
        const a = r[0];
        et(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var yd = L({
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
const _d = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = I(e.value), r = I(), a = () => {
    const i = or(e.value), s = i ? e.value : n, u = i ?? (l ? document.documentElement : or(n));
    s !== o.value && (o.value = s), u !== r.value && (r.value = u);
  };
  return Ee(() => a()), ge(t, (i) => {
    o.value !== e.value && i && a();
  }), {
    teleportContainer: o,
    containerRef: r
  };
};
var $d = Object.defineProperty, wd = Object.defineProperties, kd = Object.getOwnPropertyDescriptors, br = Object.getOwnPropertySymbols, Cd = Object.prototype.hasOwnProperty, Sd = Object.prototype.propertyIsEnumerable, yr = (e, t, n) => t in e ? $d(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Vd = (e, t) => {
  for (var n in t || (t = {}))
    Cd.call(t, n) && yr(e, n, t[n]);
  if (br)
    for (var n of br(t))
      Sd.call(t, n) && yr(e, n, t[n]);
  return e;
}, Od = (e, t) => wd(e, kd(t));
const Ed = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var $o = L({
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
    } = $e(e), r = ee("trigger"), a = h(() => Yn(l, Ed)), i = Ue(on, void 0), s = h(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), d = Ue(gr, void 0), {
      children: f,
      firstElement: m
    } = Qi(), v = I(), g = I(e.defaultPopupVisible), _ = I(e.position), z = I({}), P = I({}), V = I({}), S = I(), k = I({
      top: 0,
      left: 0
    });
    let D = null, $ = null;
    const O = h(() => {
      var T;
      return (T = e.popupVisible) != null ? T : g.value;
    }), {
      teleportContainer: F,
      containerRef: q
    } = _d({
      popupContainer: o,
      visible: O,
      documentContainer: !0
    }), {
      zIndex: E
    } = Ji("popup", {
      visible: O
    });
    let b = 0, x = !1, w = !1;
    const H = () => {
      b && (window.clearTimeout(b), b = 0);
    }, Y = (T) => {
      if (e.alignPoint) {
        const {
          pageX: R,
          pageY: ae
        } = T;
        k.value = {
          top: ae,
          left: R
        };
      }
    }, W = () => {
      if (!m.value || !v.value || !q.value)
        return;
      const T = q.value.getBoundingClientRect(), R = e.alignPoint ? {
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
      } : hr(m.value, T), ae = () => hr(v.value, T), ft = ae(), {
        style: nt,
        position: un
      } = cd(e.position, T, R, ft, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (P.value = {
        transformOrigin: ud(un)
      }), e.autoFitPopupMinWidth ? nt.minWidth = `${R.width}px` : e.autoFitPopupWidth && (nt.width = `${R.width}px`), _.value !== un && (_.value = un), z.value = nt, e.showArrow && Fe(() => {
        V.value = dd(un, R, ae(), {
          customStyle: e.arrowStyle
        });
      });
    }, Z = (T, R) => {
      if (T === O.value && b === 0)
        return;
      const ae = () => {
        g.value = T, t("update:popupVisible", T), t("popupVisibleChange", T), T && Fe(() => {
          W();
        });
      };
      T || (D = null, $ = null), R ? (H(), T !== O.value && (b = window.setTimeout(ae, R))) : ae();
    }, U = (T) => {
      var R;
      (R = l.onClick) == null || R.call(l, T), !(e.disabled || O.value && !e.clickToClose) && (s.value.includes("click") ? (Y(T), Z(!O.value)) : s.value.includes("contextMenu") && O.value && Z(!1));
    }, te = (T) => {
      var R;
      (R = l.onMouseenter) == null || R.call(l, T), !(e.disabled || !s.value.includes("hover")) && (Y(T), Z(!0, e.mouseEnterDelay));
    }, j = (T) => {
      d == null || d.onMouseenter(T), te(T);
    }, C = (T) => {
      var R;
      (R = l.onMouseleave) == null || R.call(l, T), !(e.disabled || !s.value.includes("hover")) && Z(!1, e.mouseLeaveDelay);
    }, K = (T) => {
      d == null || d.onMouseleave(T), C(T);
    }, J = (T) => {
      var R;
      (R = l.onFocusin) == null || R.call(l, T), !(e.disabled || !s.value.includes("focus")) && Z(!0, e.focusDelay);
    }, he = (T) => {
      var R;
      (R = l.onFocusout) == null || R.call(l, T), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && Z(!1);
    }, we = (T) => {
      var R;
      (R = l.onContextmenu) == null || R.call(l, T), !(e.disabled || !s.value.includes("contextMenu") || O.value && !e.clickToClose) && (Y(T), Z(!O.value), T.preventDefault());
    };
    Ht(gr, Pe({
      onMouseenter: j,
      onMouseleave: K,
      addChildRef: (T) => {
        u.add(T), d == null || d.addChildRef(T);
      },
      removeChildRef: (T) => {
        u.delete(T), d == null || d.removeChildRef(T);
      }
    }));
    const Ce = () => {
      $n(document.documentElement, "mousedown", tt), x = !1;
    }, Be = pd(n, "content"), dt = h(() => {
      var T;
      return e.hideEmpty && Iu((T = Be.value) == null ? void 0 : T.call(Be));
    }), tt = (T) => {
      var R, ae, ft;
      if (!((R = m.value) != null && R.contains(T.target) || (ae = v.value) != null && ae.contains(T.target))) {
        for (const nt of u)
          if ((ft = nt.value) != null && ft.contains(T.target))
            return;
        Ce(), Z(!1);
      }
    }, at = (T, R) => {
      const [ae, ft] = T, {
        scrollTop: nt,
        scrollLeft: un
      } = R;
      return Math.abs(nt - ae) >= e.scrollToCloseDistance || Math.abs(un - ft) >= e.scrollToCloseDistance;
    }, A = lr((T) => {
      if (O.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const R = T.target;
          D || (D = [R.scrollTop, R.scrollLeft]), at(D, R) ? Z(!1) : W();
        } else
          W();
    }), M = () => {
      $n(window, "scroll", X), w = !1;
    }, X = lr((T) => {
      const R = T.target.documentElement;
      $ || ($ = [R.scrollTop, R.scrollLeft]), at($, R) && (Z(!1), M());
    }), oe = () => {
      O.value && W();
    }, Te = () => {
      oe(), t("resize");
    }, Me = (T) => {
      e.preventFocus && T.preventDefault();
    };
    d == null || d.addChildRef(v);
    const Ot = h(() => O.value ? e.openedClass : void 0);
    let Ye;
    ge(O, (T) => {
      if (e.clickOutsideToClose && (!T && x ? Ce() : T && !x && (Et(document.documentElement, "mousedown", tt), x = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Et(window, "scroll", X), w = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (T) {
          Ye = mr(m.value);
          for (const R of Ye)
            R.addEventListener("scroll", A);
        } else if (Ye) {
          for (const R of Ye)
            R.removeEventListener("scroll", A);
          Ye = void 0;
        }
      }
      T && (xn.value = !0);
    }), ge(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      O.value && W();
    });
    const {
      createResizeObserver: no,
      destroyResizeObserver: lo
    } = bd({
      elementRef: q,
      onResize: oe
    });
    Ee(() => {
      if (no(), O.value && (W(), e.clickOutsideToClose && !x && (Et(document.documentElement, "mousedown", tt), x = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ye = mr(m.value);
        for (const T of Ye)
          T.addEventListener("scroll", A);
      }
    }), Pt(() => {
      O.value && W();
    }), Gs(() => {
      Z(!1);
    }), Wt(() => {
      if (d == null || d.removeChildRef(v), lo(), x && Ce(), w && M(), Ye) {
        for (const T of Ye)
          T.removeEventListener("scroll", A);
        Ye = void 0;
      }
    });
    const xn = I(O.value), Mt = I(!1), ol = () => {
      Mt.value = !0;
    }, oo = () => {
      Mt.value = !1, O.value && t("show");
    }, N = () => {
      Mt.value = !1, O.value || (xn.value = !1, t("hide"));
    };
    return () => {
      var T, R;
      return f.value = (R = (T = n.default) == null ? void 0 : T.call(n)) != null ? R : [], Ni(f.value, {
        class: Ot.value,
        onClick: U,
        onMouseenter: te,
        onMouseleave: C,
        onFocusin: J,
        onFocusout: he,
        onContextmenu: we
      }), c(je, null, [e.autoFixPosition ? c(Bl, {
        onResize: Te
      }, {
        default: () => [f.value]
      }) : f.value, c(yd, null, {
        default: () => [c(Ys, {
          to: F.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || O.value || xn.value) && !dt.value && c(Bl, {
            onResize: oe
          }, {
            default: () => [c("div", Se({
              ref: v,
              class: [`${r}-popup`, `${r}-position-${_.value}`],
              style: Od(Vd({}, z.value), {
                zIndex: E.value,
                pointerEvents: Mt.value ? "none" : "auto"
              }),
              "trigger-placement": _.value,
              onMouseenter: j,
              onMouseleave: K,
              onMousedown: Me
            }, a.value), [c(Vl, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: ol,
              onAfterEnter: oo,
              onBeforeLeave: ol,
              onAfterLeave: N
            }, {
              default: () => {
                var ae;
                return [ba(c("div", {
                  class: `${r}-popup-wrapper`,
                  style: P.value
                }, [c("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ae = n.content) == null ? void 0 : ae.call(n)]), e.showArrow && c("div", {
                  ref: S,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: V.value
                }, null)]), [[ya, O.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Il = Object.assign($o, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + $o.name, $o);
  }
}), xd = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Bd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Id = /* @__PURE__ */ p("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Pd = [Id];
function jd(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Pd, 14, Bd);
}
var wo = /* @__PURE__ */ ce(xd, [["render", jd]]);
const Td = Object.assign(wo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + wo.name, wo);
  }
});
var ko = L({
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
    } = $a(), r = Ue(on, void 0);
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
      }, null) : c(Td, null, null)]), c("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const Md = Object.assign(ko, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + ko.name, ko);
  }
}), Dd = 5;
var zd = L({
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
      }, [Array(Dd).fill(1).map((l, o) => c("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), Co = L({
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
    const n = ee("spin"), l = Ue(on, void 0), o = h(() => [n, {
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
      return t.element ? t.element() : e.dot ? c(zd, {
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
      return c(je, null, [!e.hideIcon && c("div", {
        class: `${n}-icon`,
        style: d
      }, [r()]), f && c("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => c("div", {
      class: o.value
    }, [t.default ? c(je, null, [t.default(), e.loading && c("div", {
      class: `${n}-mask`
    }, [c("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Ad = Object.assign(Co, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Co.name, Co);
  }
}), Ld = L({
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
    const n = ee("scrollbar"), l = I(!1), o = I(), r = I(), a = h(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = I(0), s = I(!1), u = I(0), d = h(() => {
      var V, S;
      return {
        [a.value.size]: `${(S = (V = e.data) == null ? void 0 : V.thumbSize) != null ? S : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), f = (V) => {
      V.preventDefault(), r.value && (u.value = V[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, Et(window, "mousemove", g), Et(window, "mouseup", _), Et(window, "contextmenu", _));
    }, m = (V) => {
      var S, k, D, $;
      if (V.preventDefault(), r.value) {
        const O = v(V[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((k = (S = e.data) == null ? void 0 : S.thumbSize) != null ? k : 0) : i.value - (($ = (D = e.data) == null ? void 0 : D.thumbSize) != null ? $ : 0));
        O !== i.value && (i.value = O, t("scroll", O));
      }
    }, v = (V) => V < 0 ? 0 : e.data && V > e.data.max ? e.data.max : V, g = (V) => {
      if (o.value && r.value) {
        const S = v(V[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        S !== i.value && (i.value = S, t("scroll", S));
      }
    }, _ = () => {
      s.value = !1, $n(window, "mousemove", g), $n(window, "mouseup", _);
    }, z = (V) => {
      s.value || (V = v(V), V !== i.value && (i.value = V));
    }, P = h(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: r,
      prefixCls: n,
      thumbCls: P,
      thumbStyle: d,
      handleThumbMouseDown: f,
      handleTrackClick: m,
      setOffset: z
    };
  }
});
function Fd(e, t, n, l, o, r) {
  return y(), ue(Vl, null, {
    default: ne(() => [p("div", {
      ref: "trackRef",
      class: G([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = nn((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
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
var Nd = /* @__PURE__ */ ce(Ld, [["render", Fd]]);
const _r = 20, sl = 15, Rd = L({
  name: "Scrollbar",
  components: {
    ResizeObserver: Bl,
    Thumb: Nd
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
    const n = ee("scrollbar"), l = I(), o = I(), r = I(), a = I(), i = I(), s = I(!1), u = I(!1), d = h(() => s.value && !e.disableHorizontal), f = h(() => u.value && !e.disableVertical), m = I(!1), v = () => {
      var k, D, $, O, F, q;
      if (l.value) {
        const {
          clientWidth: E,
          clientHeight: b,
          offsetWidth: x,
          offsetHeight: w,
          scrollWidth: H,
          scrollHeight: Y,
          scrollTop: W,
          scrollLeft: Z
        } = l.value;
        s.value = H > E, u.value = Y > b, m.value = d.value && f.value;
        const U = e.type === "embed" && m.value ? x - sl : x, te = e.type === "embed" && m.value ? w - sl : w, j = Math.round(U / Math.min(H / E, U / _r)), C = U - j, K = (H - E) / C, J = Math.round(te / Math.min(Y / b, te / _r)), he = te - J, we = (Y - b) / he;
        if (o.value = {
          ratio: K,
          thumbSize: j,
          max: C
        }, r.value = {
          ratio: we,
          thumbSize: J,
          max: he
        }, W > 0) {
          const fe = Math.round(W / ((D = (k = r.value) == null ? void 0 : k.ratio) != null ? D : 1));
          ($ = i.value) == null || $.setOffset(fe);
        }
        if (Z > 0) {
          const fe = Math.round(Z / ((F = (O = r.value) == null ? void 0 : O.ratio) != null ? F : 1));
          (q = a.value) == null || q.setOffset(fe);
        }
      }
    };
    Ee(() => {
      v();
    });
    const g = () => {
      v();
    }, _ = (k) => {
      var D, $, O, F, q, E;
      if (l.value) {
        if (d.value && !e.disableHorizontal) {
          const b = Math.round(l.value.scrollLeft / (($ = (D = o.value) == null ? void 0 : D.ratio) != null ? $ : 1));
          (O = a.value) == null || O.setOffset(b);
        }
        if (f.value && !e.disableVertical) {
          const b = Math.round(l.value.scrollTop / ((q = (F = r.value) == null ? void 0 : F.ratio) != null ? q : 1));
          (E = i.value) == null || E.setOffset(b);
        }
      }
      t("scroll", k);
    }, z = (k) => {
      var D, $;
      l.value && l.value.scrollTo({
        left: k * (($ = (D = o.value) == null ? void 0 : D.ratio) != null ? $ : 1)
      });
    }, P = (k) => {
      var D, $;
      l.value && l.value.scrollTo({
        top: k * (($ = (D = r.value) == null ? void 0 : D.ratio) != null ? $ : 1)
      });
    }, V = h(() => {
      const k = {};
      return e.type === "track" && (d.value && (k.paddingBottom = `${sl}px`), f.value && (k.paddingRight = `${sl}px`)), [k, e.outerStyle];
    }), S = h(() => [`${n}`, `${n}-type-${e.type}`, {
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
      handleScroll: _,
      handleHorizontalScroll: z,
      handleVerticalScroll: P
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
function qd(e, t, n, l, o, r) {
  const a = se("ResizeObserver"), i = se("thumb");
  return y(), B("div", {
    class: G(e.cls),
    style: pe(e.style)
  }, [c(a, {
    onResize: e.handleResize
  }, {
    default: ne(() => [p("div", Se({
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
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (y(), ue(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : le("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (y(), ue(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : le("v-if", !0)], 6);
}
var So = /* @__PURE__ */ ce(Rd, [["render", qd]]);
const Hd = Object.assign(So, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + So.name, So);
  }
}), Wd = (e) => {
  const t = I(), n = () => Ti(t.value) ? t.value.$refs[e] : t.value, l = I();
  return Ee(() => {
    l.value = n();
  }), ge([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Ud = Object.defineProperty, $r = Object.getOwnPropertySymbols, Kd = Object.prototype.hasOwnProperty, Gd = Object.prototype.propertyIsEnumerable, wr = (e, t, n) => t in e ? Ud(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Yd = (e, t) => {
  for (var n in t || (t = {}))
    Kd.call(t, n) && wr(e, n, t[n]);
  if ($r)
    for (var n of $r(t))
      Gd.call(t, n) && wr(e, n, t[n]);
  return e;
};
const Xd = (e) => {
  const t = h(() => Boolean(e.value)), n = h(() => {
    if (e.value)
      return Yd({
        type: "embed"
      }, Wl(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Zd = L({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Hd,
    Empty: Md,
    Spin: Ad
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
    } = $e(e), i = ee("select-dropdown"), s = Ue(on, void 0), u = (r = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: d,
      elementRef: f
    } = Wd("containerRef"), {
      displayScrollbar: m,
      scrollbarProps: v
    } = Xd(a), g = (z) => {
      const {
        scrollTop: P,
        scrollHeight: V,
        offsetHeight: S
      } = z.target;
      V - (P + S) <= e.bottomOffset && t("reachBottom", z), t("scroll", z);
    }, _ = h(() => [i, {
      [`${i}-has-header`]: Boolean(n.header),
      [`${i}-has-footer`]: Boolean(n.footer)
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: _,
      wrapperRef: f,
      wrapperComRef: d,
      handleScroll: g,
      displayScrollbar: m,
      scrollbarProps: v
    };
  }
});
function Qd(e, t, n, l, o, r) {
  const a = se("spin");
  return y(), B("div", {
    class: G(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (y(), B("div", {
    key: 0,
    class: G(`${e.prefixCls}-header`)
  }, [re(e.$slots, "header")], 2)) : le("v-if", !0), e.loading ? (y(), ue(a, {
    key: 1,
    class: G(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (y(), B("div", {
    key: 2,
    class: G(`${e.prefixCls}-empty`)
  }, [re(e.$slots, "empty", {}, () => [(y(), ue(en(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : le("v-if", !0), e.virtualList && !e.loading && !e.empty ? re(e.$slots, "virtual-list", {
    key: 3
  }) : le("v-if", !0), e.virtualList ? le("v-if", !0) : ba((y(), ue(en(e.displayScrollbar ? "ScrollbarComponent" : "div"), Se({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: ne(() => [p("ul", {
      class: G(`${e.prefixCls}-list`)
    }, [re(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[ya, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (y(), B("div", {
    key: 5,
    class: G(`${e.prefixCls}-footer`)
  }, [re(e.$slots, "footer")], 2)) : le("v-if", !0)], 2);
}
var Jd = /* @__PURE__ */ ce(Zd, [["render", Qd]]), kr = L({
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
const es = Symbol("ArcoCheckboxGroup");
var gl = L({
  name: "Checkbox",
  components: {
    IconCheck: kr,
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
    } = $e(e), r = ee("checkbox"), a = I(), i = e.uninjectGroupContext ? void 0 : Ue(es, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: d
    } = ht({
      disabled: l
    }), f = I(e.defaultChecked), m = h(() => {
      var k;
      return s ? i == null ? void 0 : i.computedValue : (k = e.modelValue) != null ? k : f.value;
    }), v = h(() => {
      var k;
      return ze(m.value) ? m.value.includes((k = e.value) != null ? k : !0) : m.value;
    }), g = h(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !v.value && (i == null ? void 0 : i.isMaxed)), _ = (k) => {
      k.stopPropagation();
    }, z = (k) => {
      var D, $, O, F;
      const {
        checked: q
      } = k.target;
      let E = q;
      if (ze(m.value)) {
        const b = new Set(m.value);
        q ? b.add((D = e.value) != null ? D : !0) : b.delete(($ = e.value) != null ? $ : !0), E = Array.from(b);
      }
      f.value = q, s && ze(E) ? i == null || i.handleChange(E, k) : (t("update:modelValue", E), t("change", E, k), (F = (O = d.value) == null ? void 0 : O.onChange) == null || F.call(O, k)), Fe(() => {
        a.value && a.value.checked !== v.value && (a.value.checked = v.value);
      });
    }, P = h(() => [r, {
      [`${r}-checked`]: v.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: g.value
    }]), V = (k) => {
      var D, $;
      ($ = (D = d.value) == null ? void 0 : D.onFocus) == null || $.call(D, k);
    }, S = (k) => {
      var D, $;
      ($ = (D = d.value) == null ? void 0 : D.onBlur) == null || $.call(D, k);
    };
    return ge(o, (k) => {
      (Ze(k) || Sn(k)) && (f.value = !1);
    }), ge(m, (k) => {
      var D;
      let $;
      ze(k) ? $ = k.includes((D = e.value) != null ? D : !0) : $ = k, f.value !== $ && (f.value = $), a.value && a.value.checked !== $ && (a.value.checked = $);
    }), () => {
      var k, D, $, O;
      return c("label", {
        "aria-disabled": g.value,
        class: P.value
      }, [c("input", {
        ref: a,
        type: "checkbox",
        checked: v.value,
        value: e.value,
        class: `${r}-target`,
        disabled: g.value,
        onClick: _,
        onChange: z,
        onFocus: V,
        onBlur: S
      }, null), (O = ($ = (D = n.checkbox) != null ? D : (k = i == null ? void 0 : i.slots) == null ? void 0 : k.checkbox) == null ? void 0 : $({
        checked: v.value,
        disabled: g.value
      })) != null ? O : c(ct, {
        class: `${r}-icon-hover`,
        disabled: g.value || v.value
      }, {
        default: () => [c("div", {
          class: `${r}-icon`
        }, [v.value && c(kr, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && c("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), Vo = L({
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
    } = ht({
      disabled: l
    }), i = I(e.defaultValue), s = h(() => ze(e.modelValue) ? e.modelValue : i.value), u = h(() => e.max === void 0 ? !1 : s.value.length >= e.max), d = h(() => {
      var g;
      return ((g = e.options) != null ? g : []).map((_) => kt(_) || me(_) ? {
        label: _,
        value: _
      } : _);
    });
    Ht(es, Pe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (g, _) => {
        var z, P;
        i.value = g, t("update:modelValue", g), t("change", g, _), (P = (z = a.value) == null ? void 0 : z.onChange) == null || P.call(z, _);
      }
    }));
    const m = h(() => [o, `${o}-direction-${e.direction}`]);
    ge(() => e.modelValue, (g) => {
      ze(g) ? i.value = [...g] : i.value = [];
    });
    const v = () => d.value.map((g) => {
      const _ = s.value.includes(g.value);
      return c(gl, {
        key: g.value,
        value: g.value,
        disabled: g.disabled || !_ && u.value,
        indeterminate: g.indeterminate,
        modelValue: _
      }, {
        default: () => [n.label ? n.label({
          data: g
        }) : et(g.label) ? g.label() : g.label]
      });
    });
    return () => {
      var g;
      return c("span", {
        class: m.value
      }, [d.value.length > 0 ? v() : (g = n.default) == null ? void 0 : g.call(n)]);
    };
  }
});
const ef = Object.assign(gl, {
  Group: Vo,
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + gl.name, gl), e.component(n + Vo.name, Vo);
  }
}), ts = Symbol("ArcoSelectContext");
var tf = Object.defineProperty, nf = Object.defineProperties, lf = Object.getOwnPropertyDescriptors, Cr = Object.getOwnPropertySymbols, of = Object.prototype.hasOwnProperty, af = Object.prototype.propertyIsEnumerable, Sr = (e, t, n) => t in e ? tf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ba = (e, t) => {
  for (var n in t || (t = {}))
    of.call(t, n) && Sr(e, n, t[n]);
  if (Cr)
    for (var n of Cr(t))
      af.call(t, n) && Sr(e, n, t[n]);
  return e;
}, ns = (e, t) => nf(e, lf(t));
const rf = (e) => Oe(e) && "isGroup" in e, ls = (e) => Oe(e) && "isGroup" in e, sf = (e, t = "value") => String(Oe(e) ? e[t] : e), Wn = (e, t = "value") => Oe(e) ? `__arco__option__object__${e[t]}` : e || me(e) || kt(e) || Wl(e) ? `__arco__option__${typeof e}-${e}` : "", uf = (e) => e.has("__arco__option__string-"), cf = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var r;
  if (Oe(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: o,
      key: Wn(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : sf(i, t),
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
}, sa = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (rf(i)) {
      const s = sa((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(ns(Ba({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = cf(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, Vr = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var r;
    const a = [];
    for (const i of o)
      if (ls(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && a.push(ns(Ba({}, i), {
          options: s
        }));
      } else
        Gl(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return l(e);
}, Gl = (e, {
  inputValue: t,
  filterOption: n
}) => et(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, df = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Ia(e[n], t[n]))
      return !1;
  return !0;
}, ff = (e, t) => {
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
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? df(e, t) : n === "[object Array]" ? ff(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, pf = L({
  name: "Option",
  components: {
    Checkbox: ef
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
    } = $e(e), o = ee("select-option"), r = Ue(ts, void 0), a = Kn(), i = I(), s = I(n.value);
    ge(n, ($, O) => {
      Ia($, O) || (s.value = $);
    });
    const u = I(""), d = h(() => {
      var $, O;
      return (O = ($ = e.value) != null ? $ : e.label) != null ? O : u.value;
    }), f = h(() => {
      var $;
      return ($ = e.label) != null ? $ : u.value;
    }), m = h(() => Wn(d.value, r == null ? void 0 : r.valueKey)), v = h(() => {
      var $;
      return ($ = r == null ? void 0 : r.component) != null ? $ : "li";
    }), g = () => {
      var $;
      if (!e.label && i.value) {
        const O = ($ = i.value.textContent) != null ? $ : "";
        u.value !== O && (u.value = O);
      }
    };
    Ee(() => g()), Pt(() => g());
    const _ = h(() => {
      var $;
      return ($ = r == null ? void 0 : r.valueKeys.includes(m.value)) != null ? $ : !1;
    }), z = h(() => (r == null ? void 0 : r.activeKey) === m.value);
    let P = I(!0);
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
      P = h(() => Gl($, {
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
    }, k = () => {
      e.disabled || r == null || r.setActiveKey();
    }, D = h(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: _.value,
      [`${o}-active`]: z.value,
      [`${o}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: o,
      cls: D,
      selectCtx: r,
      itemRef: i,
      component: v,
      isSelected: _,
      isValid: P,
      handleClick: V,
      handleMouseEnter: S,
      handleMouseLeave: k
    };
  }
});
function vf(e, t, n, l, o, r) {
  const a = se("checkbox");
  return ba((y(), ue(en(e.component), {
    ref: "itemRef",
    class: G([e.cls, {
      [`${e.prefixCls}-has-suffix`]: Boolean(e.$slots.suffix)
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: ne(() => [e.$slots.icon ? (y(), B("span", {
      key: 0,
      class: G(`${e.prefixCls}-icon`)
    }, [re(e.$slots, "icon")], 2)) : le("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (y(), ue(a, {
      key: 1,
      class: G(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: ne(() => [re(e.$slots, "default", {}, () => [ye(be(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (y(), B("span", {
      key: 2,
      class: G(`${e.prefixCls}-content`)
    }, [re(e.$slots, "default", {}, () => [ye(be(e.label), 1)])], 2)), e.$slots.suffix ? (y(), B("span", {
      key: 3,
      class: G(`${e.prefixCls}-suffix`)
    }, [re(e.$slots, "suffix")], 2)) : le("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[ya, e.isValid]]);
}
var mn = /* @__PURE__ */ ce(pf, [["render", vf]]), hf = Object.defineProperty, mf = Object.defineProperties, gf = Object.getOwnPropertyDescriptors, Or = Object.getOwnPropertySymbols, bf = Object.prototype.hasOwnProperty, yf = Object.prototype.propertyIsEnumerable, Er = (e, t, n) => t in e ? hf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    bf.call(t, n) && Er(e, n, t[n]);
  if (Or)
    for (var n of Or(t))
      yf.call(t, n) && Er(e, n, t[n]);
  return e;
}, _f = (e, t) => mf(e, gf(t));
const $f = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, wf = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: r,
  fieldNames: a
}) => {
  const i = h(() => Oo(Oo({}, $f), a == null ? void 0 : a.value)), s = Pe(/* @__PURE__ */ new Map()), u = h(() => Array.from(s.values()).sort((S, k) => me(S.index) && me(k.index) ? S.index - k.index : 0)), d = h(() => {
    var S, k;
    const D = /* @__PURE__ */ new Map();
    return {
      optionInfos: sa((S = e == null ? void 0 : e.value) != null ? S : [], {
        valueKey: (k = r == null ? void 0 : r.value) != null ? k : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: D
      }),
      optionInfoMap: D
    };
  }), f = h(() => {
    var S, k;
    const D = /* @__PURE__ */ new Map();
    return {
      optionInfos: sa((S = t == null ? void 0 : t.value) != null ? S : [], {
        valueKey: (k = r == null ? void 0 : r.value) != null ? k : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: D
      }),
      optionInfoMap: D
    };
  }), m = Pe(/* @__PURE__ */ new Map());
  ge([u, e ?? I([]), t ?? I([]), r ?? I("value")], () => {
    m.clear(), u.value.forEach((S, k) => {
      m.set(S.key, _f(Oo({}, S), {
        index: k
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
  const v = h(() => {
    var S;
    const k = Vr(d.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((S = o == null ? void 0 : o.value) == null || S) && k.push(...Vr(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), k;
  }), g = h(() => Array.from(m.values()).filter((S) => S.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Gl(S, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), _ = h(() => g.value.filter((S) => !S.disabled).map((S) => S.key));
  return {
    validOptions: v,
    optionInfoMap: m,
    validOptionInfos: g,
    enabledOptionKeys: _,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (S, k) => {
      s.set(S, k);
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
}, xr = (e) => JSON.stringify({
  key: e.key,
  ctrl: Boolean(e.ctrl),
  shift: Boolean(e.shift),
  alt: Boolean(e.alt),
  meta: Boolean(e.meta)
}), os = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = kt(l) ? {
      key: l
    } : l;
    t[xr(o)] = n;
  }), (n) => {
    const l = xr({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, kf = ({
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
  optionRefs: v,
  virtualListRef: g,
  onSelect: _,
  onPopupVisibleChange: z,
  enterToOpen: P = !0,
  defaultActiveFirstOption: V
}) => {
  const {
    validOptions: S,
    optionInfoMap: k,
    validOptionInfos: D,
    enabledOptionKeys: $,
    getNextSlotOptionIndex: O,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: q
  } = wf({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), E = I();
  ge($, (Y) => {
    (!E.value || !Y.includes(E.value)) && (E.value = Y[0]);
  });
  const b = (Y) => {
    E.value = Y;
  }, x = (Y) => {
    const W = $.value.length;
    if (W === 0)
      return;
    if (!E.value)
      return Y === "down" ? $.value[0] : $.value[W - 1];
    const Z = $.value.indexOf(E.value), U = (W + Z + (Y === "up" ? -1 : 1)) % W;
    return $.value[U];
  }, w = (Y) => {
    var W, Z;
    g != null && g.value && g.value.scrollTo({
      key: Y
    });
    const U = k.get(Y), te = (W = m == null ? void 0 : m.value) == null ? void 0 : W.wrapperRef, j = (Z = v == null ? void 0 : v.value[Y]) != null ? Z : U == null ? void 0 : U.ref;
    if (!te || !j || te.scrollHeight === te.offsetHeight)
      return;
    const C = Du(j, te), K = te.scrollTop;
    C.top < 0 ? te.scrollTo(0, K + C.top) : C.bottom < 0 && te.scrollTo(0, K - C.bottom);
  };
  ge(d, (Y) => {
    var W;
    if (Y) {
      const Z = f.value[f.value.length - 1];
      let U = (W = V == null ? void 0 : V.value) == null || W ? $.value[0] : void 0;
      $.value.includes(Z) && (U = Z), U !== E.value && (E.value = U), Fe(() => {
        E.value && w(E.value);
      });
    }
  });
  const H = os(/* @__PURE__ */ new Map([[pn.ENTER, (Y) => {
    !(u != null && u.value) && !Y.isComposing && (d.value ? E.value && (_(E.value, Y), Y.preventDefault()) : P && (z(!0), Y.preventDefault()));
  }], [pn.ESC, (Y) => {
    d.value && (z(!1), Y.preventDefault());
  }], [pn.ARROW_DOWN, (Y) => {
    if (d.value) {
      const W = x("down");
      W && (E.value = W, w(W)), Y.preventDefault();
    }
  }], [pn.ARROW_UP, (Y) => {
    if (d.value) {
      const W = x("up");
      W && (E.value = W, w(W)), Y.preventDefault();
    }
  }]]));
  return Ht(ts, Pe({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: f,
    activeKey: E,
    setActiveKey: b,
    onSelect: _,
    getNextSlotOptionIndex: O,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: q
  })), {
    validOptions: S,
    optionInfoMap: k,
    validOptionInfos: D,
    enabledOptionKeys: $,
    activeKey: E,
    setActiveKey: b,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: q,
    getNextActiveKey: x,
    scrollIntoView: w,
    handleKeyDown: H
  };
}, Cf = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const r = I(0), a = /* @__PURE__ */ new Map(), i = h(() => e.value.length), s = I(0), u = h(() => {
    const O = s.value + o.value * 3;
    return O > i.value ? i.value : O;
  }), d = h(() => {
    const O = i.value - o.value * 3;
    return O < 0 ? 0 : O;
  }), f = (O) => {
    O < 0 ? s.value = 0 : O > d.value ? s.value = d.value : s.value = O;
  }, m = I(n.value), v = h(() => l.value !== 30 ? l.value : r.value || l.value), g = (O, F) => {
    a.set(O, F);
  }, _ = (O) => {
    var F;
    if (m.value)
      return v.value;
    const q = e.value[O];
    return (F = a.get(q)) != null ? F : v.value;
  }, z = (O) => a.has(O);
  Ee(() => {
    const O = Array.from(a.values()).reduce((F, q) => F + q, 0);
    O > 0 && (r.value = O / a.size);
  });
  const P = (O) => m.value ? v.value * O : V(0, O), V = (O, F) => {
    let q = 0;
    for (let E = O; E < F; E++)
      q += _(E);
    return q;
  }, S = h(() => m.value ? v.value * s.value : V(0, s.value)), k = (O) => {
    const F = O >= S.value;
    let q = Math.abs(O - S.value);
    const E = F ? s.value : s.value - 1;
    let b = 0;
    for (; q > 0; )
      q -= _(E + b), F ? b++ : b--;
    return b;
  }, D = (O) => {
    const F = k(O), q = s.value + F - o.value;
    return q < 0 ? 0 : q > d.value ? d.value : q;
  }, $ = h(() => m.value ? v.value * (i.value - u.value) : V(u.value, i.value));
  return {
    frontPadding: S,
    behindPadding: $,
    start: s,
    end: u,
    getStartByScroll: D,
    setItemSize: g,
    hasItemSize: z,
    setStart: f,
    getScrollOffset: P
  };
};
var Sf = L({
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
    const l = (n = Kn()) == null ? void 0 : n.vnode.key, o = I(), r = () => {
      var a, i, s, u;
      const d = (i = (a = o.value) == null ? void 0 : a.$el) != null ? i : o.value, f = (u = (s = d == null ? void 0 : d.getBoundingClientRect) == null ? void 0 : s.call(d).height) != null ? u : d == null ? void 0 : d.offsetHeight;
      f && e.setItemSize(l, f);
    };
    return Ee(() => r()), Wt(() => r()), () => {
      var a;
      const i = hn((a = t.default) == null ? void 0 : a.call(t));
      return i ? ql(i, {
        ref: o
      }, !0) : null;
    };
  }
}), Vf = Object.defineProperty, Br = Object.getOwnPropertySymbols, Of = Object.prototype.hasOwnProperty, Ef = Object.prototype.propertyIsEnumerable, Ir = (e, t, n) => t in e ? Vf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xf = (e, t) => {
  for (var n in t || (t = {}))
    Of.call(t, n) && Ir(e, n, t[n]);
  if (Br)
    for (var n of Br(t))
      Ef.call(t, n) && Ir(e, n, t[n]);
  return e;
};
const Bf = L({
  name: "VirtualList",
  components: {
    VirtualListItem: Sf
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
    } = $e(e), s = ee("virtual-list"), u = h(() => Oe(e.component) ? xf({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), d = I(), f = I(), m = h(() => ({
      height: me(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), v = h(() => n.value.map((E, b) => {
      var x;
      return (x = E[l.value]) != null ? x : b;
    })), {
      frontPadding: g,
      behindPadding: _,
      start: z,
      end: P,
      getStartByScroll: V,
      setItemSize: S,
      hasItemSize: k,
      setStart: D,
      getScrollOffset: $
    } = Cf({
      dataKeys: v,
      contentRef: f,
      fixedSize: o,
      estimatedSize: r,
      buffer: a
    }), O = h(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(z.value, P.value)), F = (E) => {
      const {
        scrollTop: b,
        scrollHeight: x,
        offsetHeight: w
      } = E.target, H = V(b);
      H !== z.value && (D(H), Fe(() => {
        q(b);
      })), t("scroll", E), Math.floor(x - (b + w)) <= 0 && t("reachBottom", E);
    }, q = (E) => {
      var b, x;
      if (d.value)
        if (me(E))
          d.value.scrollTop = E;
        else {
          const w = (x = E.index) != null ? x : v.value.indexOf((b = E.key) != null ? b : "");
          D(w - a.value), d.value.scrollTop = $(w), Fe(() => {
            if (d.value) {
              const H = $(w);
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
      currentList: O,
      behindPadding: _,
      onScroll: F,
      setItemSize: S,
      hasItemSize: k,
      start: z,
      scrollTo: q,
      style: m,
      mergedComponent: u
    };
  }
});
function If(e, t, n, l, o, r) {
  const a = se("VirtualListItem");
  return y(), ue(en(e.mergedComponent.container), {
    ref: "containerRef",
    class: G(e.prefixCls),
    style: pe(e.style),
    onScroll: e.onScroll
  }, {
    default: ne(() => [(y(), ue(en(e.mergedComponent.list), Se(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: ne(() => [(y(), ue(en(e.mergedComponent.content), Se({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: ne(() => [(y(!0), B(je, null, bt(e.currentList, (i, s) => {
          var u;
          return y(), ue(a, {
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
var Pf = /* @__PURE__ */ ce(Bf, [["render", If]]);
const jf = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Tf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Mf = /* @__PURE__ */ p("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Df = [Mf];
function zf(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Df, 14, Tf);
}
var Eo = /* @__PURE__ */ ce(jf, [["render", zf]]);
const Pa = Object.assign(Eo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Eo.name, Eo);
  }
}), Af = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = I((l = t == null ? void 0 : t.value) != null ? l : !1), r = h(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : o.value;
  }), a = (i) => {
    i !== r.value && (o.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return ge(r, (i) => {
    o.value !== i && (o.value = i);
  }), {
    computedPopupVisible: r,
    handlePopupVisibleChange: a
  };
}, Lf = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Ff = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Nf = /* @__PURE__ */ p("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Rf = [Nf];
function qf(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Rf, 14, Ff);
}
var xo = /* @__PURE__ */ ce(Lf, [["render", qf]]);
const Hf = Object.assign(xo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xo.name, xo);
  }
}), Wf = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: o = "update:modelValue",
  eventHandlers: r
}) => {
  var a;
  const i = I(), s = I((a = e == null ? void 0 : e.value) != null ? a : ""), u = I(!1), d = I(!1), f = I("");
  let m;
  const v = h(() => {
    var $;
    return ($ = t == null ? void 0 : t.value) != null ? $ : s.value;
  }), g = ($, O) => {
    s.value = $, n(o, $), n(l, $, O);
  }, _ = ($) => {
    const {
      value: O
    } = $.target;
    d.value || (g(O, $), Fe(() => {
      i.value && v.value !== i.value.value && (i.value.value = v.value);
    }));
  }, z = ($) => {
    l === "input" && v.value !== m && (m = v.value, n("change", v.value, $));
  }, P = ($) => {
    var O;
    const {
      value: F
    } = $.target;
    $.type === "compositionend" ? (d.value = !1, f.value = "", g(F, $), Fe(() => {
      i.value && v.value !== i.value.value && (i.value.value = v.value);
    })) : (d.value = !0, f.value = v.value + ((O = $.data) != null ? O : ""));
  }, V = ($) => {
    var O, F;
    u.value = !0, m = v.value, n("focus", $), (F = (O = r == null ? void 0 : r.value) == null ? void 0 : O.onFocus) == null || F.call(O, $);
  }, S = ($) => {
    var O, F;
    u.value = !1, n("blur", $), (F = (O = r == null ? void 0 : r.value) == null ? void 0 : O.onBlur) == null || F.call(O, $), z($);
  }, k = ($) => {
    const O = $.key || $.code;
    !d.value && O === Ea.key && (n("pressEnter", $), z($));
  }, D = ($) => {
    i.value && $.target !== i.value && ($.preventDefault(), i.value.focus());
  };
  return ge(v, ($) => {
    i.value && $ !== i.value.value && (i.value.value = $);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: d,
    compositionValue: f,
    computedValue: v,
    handleInput: _,
    handleComposition: P,
    handleFocus: V,
    handleBlur: S,
    handleKeyDown: k,
    handleMousedown: D
  };
};
var Uf = L({
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
      mergedError: v,
      eventHandlers: g
    } = ht({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: _
    } = yt(f), {
      inputRef: z,
      _focused: P,
      computedValue: V,
      handleInput: S,
      handleComposition: k,
      handleFocus: D,
      handleBlur: $,
      handleMousedown: O
    } = Wf({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: g
    }), F = h(() => {
      var Z;
      return (Z = e.focused) != null ? Z : P.value;
    }), q = h(() => e.enabledInput && P.value || !e.modelValue), E = () => {
      var Z, U;
      return e.modelValue ? (U = (Z = e.formatLabel) == null ? void 0 : Z.call(e, e.modelValue)) != null ? U : e.modelValue.label : "";
    }, b = h(() => e.enabledInput && e.modelValue ? E() : e.placeholder), x = () => {
      var Z, U;
      return e.modelValue ? (U = (Z = l.default) == null ? void 0 : Z.call(l, {
        data: e.modelValue
      })) != null ? U : E() : null;
    }, w = h(() => [d, `${d}-size-${_.value}`, {
      [`${d}-search`]: e.enabledInput,
      [`${d}-focus`]: F.value,
      [`${d}-disabled`]: m.value,
      [`${d}-error`]: v.value
    }]), H = h(() => Yn(t, Rt)), Y = h(() => Xn(t, Rt));
    return {
      inputRef: z,
      render: () => c("span", Se(H.value, {
        class: w.value,
        title: E(),
        onMousedown: O
      }), [l.prefix && c("span", {
        class: `${d}-prefix`
      }, [l.prefix()]), c("input", Se(Y.value, {
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
        onCompositionstart: k,
        onCompositionupdate: k,
        onCompositionend: k
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
}), Kf = Object.defineProperty, Pr = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, Yf = Object.prototype.propertyIsEnumerable, jr = (e, t, n) => t in e ? Kf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xf = (e, t) => {
  for (var n in t || (t = {}))
    Gf.call(t, n) && jr(e, n, t[n]);
  if (Pr)
    for (var n of Pr(t))
      Yf.call(t, n) && jr(e, n, t[n]);
  return e;
};
const Zf = (e, t) => {
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
    else if (e || me(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Xf({
        raw: o
      }, o));
    }
  return n;
}, Tr = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Qf = L({
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
    } = $e(e), l = ee("tag"), o = h(() => e.color && Tr.includes(e.color)), r = h(() => e.color && !Tr.includes(e.color)), a = I(e.defaultVisible), i = I(e.defaultChecked), s = h(() => {
      var z;
      return (z = e.visible) != null ? z : a.value;
    }), u = h(() => {
      var z;
      return e.checkable ? (z = e.checked) != null ? z : i.value : !0;
    }), {
      mergedSize: d
    } = yt(n), f = h(() => d.value === "mini" ? "small" : d.value), m = (z) => {
      a.value = !1, t("update:visible", !1), t("close", z);
    }, v = (z) => {
      if (e.checkable) {
        const P = !u.value;
        i.value = P, t("update:checked", P), t("check", P, z);
      }
    }, g = h(() => [l, `${l}-size-${f.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: u.value,
      [`${l}-custom-color`]: r.value
    }]), _ = h(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: g,
      style: _,
      computedVisible: s,
      computedChecked: u,
      handleClick: v,
      handleClose: m
    };
  }
});
function Jf(e, t, n, l, o, r) {
  const a = se("icon-close"), i = se("icon-hover"), s = se("icon-loading");
  return e.computedVisible ? (y(), B("span", {
    key: 0,
    class: G(e.cls),
    style: pe(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (y(), B("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon")], 2)) : le("v-if", !0), e.nowrap ? (y(), B("span", {
    key: 1,
    class: G(`${e.prefixCls}-text`)
  }, [re(e.$slots, "default")], 2)) : re(e.$slots, "default", {
    key: 2
  }), e.closable ? (y(), ue(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: nn(e.handleClose, ["stop"])
  }, {
    default: ne(() => [re(e.$slots, "close-icon", {}, () => [c(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : le("v-if", !0), e.loading ? (y(), B("span", {
    key: 4,
    class: G(`${e.prefixCls}-loading-icon`)
  }, [c(s)], 2)) : le("v-if", !0)], 6)) : le("v-if", !0);
}
var Bo = /* @__PURE__ */ ce(Qf, [["render", Jf]]);
const ep = Object.assign(Bo, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Bo.name, Bo);
  }
});
var tp = Object.defineProperty, Mr = Object.getOwnPropertySymbols, np = Object.prototype.hasOwnProperty, lp = Object.prototype.propertyIsEnumerable, Dr = (e, t, n) => t in e ? tp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ul = (e, t) => {
  for (var n in t || (t = {}))
    np.call(t, n) && Dr(e, n, t[n]);
  if (Mr)
    for (var n of Mr(t))
      lp.call(t, n) && Dr(e, n, t[n]);
  return e;
};
const op = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Io = L({
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
    } = $e(e), u = e.baseCls || ee("input-tag"), d = I(), f = I(), {
      mergedSize: m,
      mergedDisabled: v,
      mergedError: g,
      feedback: _,
      eventHandlers: z
    } = ht({
      size: o,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: P
    } = yt(m), V = h(() => ul(ul({}, op), e.fieldNames)), S = I(!1), k = I(e.defaultValue), D = I(e.defaultInputValue), $ = I(!1), O = I(""), F = h(() => Oe(e.retainInputValue) ? ul({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), q = Pe({
      width: "12px"
    }), E = h(() => e.focused || S.value), b = (M, X) => {
      D.value = M, t("update:inputValue", M), t("inputValueChange", M, X);
    }, x = (M) => {
      var X;
      const {
        value: oe
      } = M.target;
      M.type === "compositionend" ? ($.value = !1, O.value = "", b(oe, M), Fe(() => {
        d.value && H.value !== d.value.value && (d.value.value = H.value);
      })) : ($.value = !0, O.value = H.value + ((X = M.data) != null ? X : ""));
    }, w = h(() => {
      var M;
      return (M = e.modelValue) != null ? M : k.value;
    }), H = h(() => {
      var M;
      return (M = e.inputValue) != null ? M : D.value;
    });
    ge(s, (M) => {
      (Ze(M) || Sn(M)) && (k.value = []);
    });
    const Y = (M) => {
      d.value && M.target !== d.value && (M.preventDefault(), d.value.focus());
    }, W = (M) => {
      const {
        value: X
      } = M.target;
      $.value || (b(X, M), Fe(() => {
        d.value && H.value !== d.value.value && (d.value.value = H.value);
      }));
    }, Z = h(() => Zf(w.value, V.value)), U = h(() => {
      if (e.maxTagCount > 0) {
        const M = Z.value.length - e.maxTagCount;
        if (M > 0) {
          const X = Z.value.slice(0, e.maxTagCount), oe = {
            value: "__arco__more",
            label: `+${M}...`,
            closable: !1
          };
          return X.push(ul({
            raw: oe
          }, oe)), X;
        }
      }
      return Z.value;
    }), te = (M, X) => {
      var oe, Te;
      k.value = M, t("update:modelValue", M), t("change", M, X), (Te = (oe = z.value) == null ? void 0 : oe.onChange) == null || Te.call(oe, X);
    }, j = (M, X, oe) => {
      var Te;
      const Me = (Te = w.value) == null ? void 0 : Te.filter((Ot, Ye) => Ye !== X);
      te(Me, oe), t("remove", M, oe);
    }, C = (M) => {
      te([], M), t("clear", M);
    }, K = h(() => !v.value && !e.readonly && e.allowClear && Boolean(w.value.length)), J = (M) => {
      var X;
      if (H.value) {
        if (M.preventDefault(), e.uniqueValue && ((X = w.value) != null && X.includes(H.value))) {
          t("pressEnter", H.value, M);
          return;
        }
        const oe = w.value.concat(H.value);
        te(oe, M), t("pressEnter", H.value, M), F.value.create || b("", M);
      }
    }, he = (M) => {
      var X, oe;
      S.value = !0, t("focus", M), (oe = (X = z.value) == null ? void 0 : X.onFocus) == null || oe.call(X, M);
    }, we = (M) => {
      var X, oe;
      S.value = !1, !F.value.blur && H.value && b("", M), t("blur", M), (oe = (X = z.value) == null ? void 0 : X.onBlur) == null || oe.call(X, M);
    }, fe = () => {
      for (let M = Z.value.length - 1; M >= 0; M--)
        if (Z.value[M].closable)
          return M;
      return -1;
    }, Ae = (M) => {
      if (v.value || e.readonly)
        return;
      const X = M.key || M.code;
      if (!$.value && H.value && X === Ea.key && J(M), !$.value && U.value.length > 0 && !H.value && X === yc.key) {
        const oe = fe();
        oe >= 0 && j(Z.value[oe].value, oe, M);
      }
    }, Ce = (M) => {
      M > 12 ? q.width = `${M}px` : q.width = "12px";
    };
    Ee(() => {
      f.value && Ce(f.value.offsetWidth);
    });
    const Be = () => {
      f.value && Ce(f.value.offsetWidth);
    };
    ge(H, (M) => {
      d.value && !$.value && M !== d.value.value && (d.value.value = M);
    });
    const dt = h(() => [u, `${u}-size-${P.value}`, {
      [`${u}-disabled`]: v.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: g.value,
      [`${u}-focus`]: E.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: U.value.length > 0,
      [`${u}-has-prefix`]: Boolean(n.prefix),
      [`${u}-has-suffix`]: Boolean(n.suffix) || K.value || _.value,
      [`${u}-has-placeholder`]: !w.value.length
    }]), tt = h(() => Yn(l, Rt)), at = h(() => Xn(l, Rt));
    return {
      inputRef: d,
      render: () => {
        var M;
        return c("span", Se({
          class: dt.value,
          onMousedown: Y
        }, tt.value), [c(xl, {
          onResize: Be
        }, {
          default: () => [c("span", {
            ref: f,
            class: `${u}-mirror`
          }, [U.value.length > 0 ? O.value || H.value : O.value || H.value || e.placeholder])]
        }), n.prefix && c("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), c(Pi, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [U.value.map((X, oe) => c(ep, Se({
            key: `tag-${X.value}`,
            class: `${u}-tag`,
            closable: !v.value && !e.readonly && X.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, X.tagProps, {
            onClose: (Te) => j(X.value, oe, Te)
          }), {
            default: () => {
              var Te, Me, Ot, Ye;
              return [(Ye = (Ot = (Te = n.tag) == null ? void 0 : Te.call(n, {
                data: X.raw
              })) != null ? Ot : (Me = e.formatTag) == null ? void 0 : Me.call(e, X.raw)) != null ? Ye : X.label];
            }
          })), c("input", Se(at.value, {
            ref: d,
            key: "input-tag-input",
            class: `${u}-input`,
            style: q,
            placeholder: U.value.length === 0 ? e.placeholder : void 0,
            disabled: v.value,
            readonly: e.readonly || e.disabledInput,
            onInput: W,
            onKeydown: Ae,
            onFocus: he,
            onBlur: we,
            onCompositionstart: x,
            onCompositionupdate: x,
            onCompositionend: x
          }), null)]
        }), K.value && c(ct, {
          class: `${u}-clear-btn`,
          onClick: C,
          onMousedown: (X) => X.stopPropagation()
        }, {
          default: () => [c(an, null, null)]
        }), (n.suffix || Boolean(_.value)) && c("span", {
          class: `${u}-suffix`
        }, [(M = n.suffix) == null ? void 0 : M.call(n), Boolean(_.value) && c(Oa, {
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
const ap = Object.assign(Io, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Io.name, Io);
  }
});
var zr = L({
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
    } = ht({
      size: l,
      disabled: o,
      error: r
    }), {
      mergedSize: m
    } = yt(d), {
      opened: v
    } = $e(e), g = I(), _ = h(() => {
      var b;
      return (b = g.value) == null ? void 0 : b.inputRef;
    }), z = h(() => e.modelValue.length === 0), P = h(() => e.allowSearch || e.allowCreate), V = h(() => e.allowClear && !e.disabled && !z.value), S = (b) => {
      var x, w;
      t("focus", b), (w = (x = s.value) == null ? void 0 : x.onFocus) == null || w.call(x, b);
    }, k = (b) => {
      var x, w;
      t("blur", b), (w = (x = s.value) == null ? void 0 : x.onBlur) == null || w.call(x, b);
    }, D = (b) => {
      t("remove", b);
    }, $ = (b) => {
      t("clear", b);
    }, O = () => {
      var b, x, w, H;
      return e.loading ? (x = (b = n["loading-icon"]) == null ? void 0 : b.call(n)) != null ? x : c(Ut, null, null) : e.allowSearch && e.opened ? (H = (w = n["search-icon"]) == null ? void 0 : w.call(n)) != null ? H : c(ia, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : c(Pa, {
        class: `${a}-arrow-icon`
      }, null);
    }, F = () => c(je, null, [V.value && c(ct, {
      class: `${a}-clear-btn`,
      onClick: $,
      onMousedown: (b) => b.stopPropagation()
    }, {
      default: () => [c(an, null, null)]
    }), c("span", {
      class: `${a}-icon`
    }, [O()]), Boolean(i.value) && c(Oa, {
      type: i.value
    }, null)]);
    ge(v, (b) => {
      !b && _.value && _.value.isSameNode(document.activeElement) && _.value.blur();
    });
    const q = h(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: _,
      handleFocus: S,
      handleBlur: k,
      render: () => e.multiple ? c(ap, {
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
        onBlur: k
      }, {
        prefix: n.prefix,
        suffix: F,
        tag: n.label
      }) : c(Uf, {
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
        enabledInput: P.value,
        uninjectFormItemContext: !0,
        onFocus: S,
        onBlur: k
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
const rp = L({
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
function ip(e, t, n, l, o, r) {
  return y(), B(je, null, [p("li", {
    class: G(`${e.prefixCls}-title`)
  }, [re(e.$slots, "label", {}, () => [ye(be(e.label), 1)])], 2), re(e.$slots, "default")], 64);
}
var bl = /* @__PURE__ */ ce(rp, [["render", ip]]);
const Ar = typeof window > "u" ? global : window;
function sp(e, t) {
  let n = 0;
  return (...l) => {
    n && Ar.clearTimeout(n), n = Ar.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var up = Object.defineProperty, cp = Object.defineProperties, dp = Object.getOwnPropertyDescriptors, Lr = Object.getOwnPropertySymbols, fp = Object.prototype.hasOwnProperty, pp = Object.prototype.propertyIsEnumerable, Fr = (e, t, n) => t in e ? up(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Bn = (e, t) => {
  for (var n in t || (t = {}))
    fp.call(t, n) && Fr(e, n, t[n]);
  if (Lr)
    for (var n of Lr(t))
      pp.call(t, n) && Fr(e, n, t[n]);
  return e;
}, vp = (e, t) => cp(e, dp(t));
function hp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
const mp = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var Po = L({
  name: "Select",
  components: {
    Trigger: Il,
    SelectView: zr
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
      default: (e) => Ze(e.multiple) ? "" : []
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
      showExtraOptions: v,
      modelValue: g,
      fieldNames: _,
      loading: z,
      defaultActiveFirstOption: P
    } = $e(e), V = ee("select"), {
      mergedSize: S,
      mergedDisabled: k,
      mergedError: D,
      eventHandlers: $
    } = ht({
      size: o,
      disabled: r,
      error: a
    }), O = h(() => e.virtualListProps ? "div" : "li"), F = h(() => Oe(e.allowSearch) && Boolean(e.allowSearch.retainInputValue));
    h(() => {
      if (et(e.formatLabel))
        return (N) => {
          const T = Me.get(N.value);
          return e.formatLabel(T);
        };
    });
    const q = I(), E = I({}), b = I(), {
      computedPopupVisible: x,
      handlePopupVisibleChange: w
    } = Af({
      popupVisible: f,
      defaultPopupVisible: m,
      emit: n
    }), H = I(e.defaultValue), Y = h(() => {
      var N;
      const T = (N = e.modelValue) != null ? N : H.value;
      return (ze(T) ? T : T || me(T) || kt(T) || Wl(T) ? [T] : []).map((ae) => ({
        value: ae,
        key: Wn(ae, e.valueKey)
      }));
    });
    ge(g, (N) => {
      (Ze(N) || Sn(N)) && (H.value = d.value ? [] : N);
    });
    const W = h(() => Y.value.map((N) => N.key)), Z = h(() => Bn(Bn({}, mp), _ == null ? void 0 : _.value)), U = I(), te = (N) => {
      const T = {};
      return N.forEach((R) => {
        T[R] = Me.get(R);
      }), T;
    }, j = (N) => {
      U.value = te(N);
    }, C = (N) => et(e.fallbackOption) ? e.fallbackOption(N) : {
      [Z.value.value]: N,
      [Z.value.label]: String(Oe(N) ? N[u == null ? void 0 : u.value] : N)
    }, K = () => {
      const N = [], T = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const R of Y.value)
          if (!T.includes(R.key) && R.value !== "") {
            const ae = Me.get(R.key);
            (!ae || ae.origin === "extraOptions") && (N.push(R), T.push(R.key));
          }
      }
      if (e.allowCreate && fe.value) {
        const R = Wn(fe.value);
        if (!T.includes(R)) {
          const ae = Me.get(R);
          (!ae || ae.origin === "extraOptions") && N.push({
            value: fe.value,
            key: R
          });
        }
      }
      return N;
    }, J = I([]), he = h(() => J.value.map((N) => {
      var T;
      let R = C(N.value);
      const ae = (T = U.value) == null ? void 0 : T[N.key];
      return !Ze(ae) && !eu(ae) && (R = Bn(Bn({}, R), ae)), R;
    }));
    Fe(() => {
      Xs(() => {
        var N;
        const T = K();
        if (T.length !== J.value.length)
          J.value = T;
        else if (T.length > 0) {
          for (let R = 0; R < T.length; R++)
            if (T[R].key !== ((N = J.value[R]) == null ? void 0 : N.key)) {
              J.value = T;
              break;
            }
        }
      });
    });
    const we = I(""), fe = h(() => {
      var N;
      return (N = e.inputValue) != null ? N : we.value;
    });
    ge(x, (N) => {
      !N && !F.value && fe.value && Be("");
    });
    const Ae = (N) => {
      var T, R;
      return e.multiple ? N.map((ae) => {
        var ft, nt;
        return (nt = (ft = Me.get(ae)) == null ? void 0 : ft.value) != null ? nt : "";
      }) : (R = (T = Me.get(N[0])) == null ? void 0 : T.value) != null ? R : uf(Me) ? void 0 : "";
    }, Ce = (N) => {
      var T, R;
      const ae = Ae(N);
      H.value = ae, n("update:modelValue", ae), n("change", ae), (R = (T = $.value) == null ? void 0 : T.onChange) == null || R.call(T), j(N);
    }, Be = (N) => {
      we.value = N, n("update:inputValue", N), n("inputValueChange", N);
    }, dt = (N, T) => {
      if (e.multiple) {
        if (W.value.includes(N)) {
          const R = W.value.filter((ae) => ae !== N);
          Ce(R);
        } else if (Ye.value.includes(N))
          if (e.limit > 0 && W.value.length >= e.limit) {
            const R = Me.get(N);
            n("exceedLimit", R == null ? void 0 : R.value, T);
          } else {
            const R = W.value.concat(N);
            Ce(R);
          }
        F.value || Be("");
      } else {
        if (N !== W.value[0] && Ce([N]), F.value) {
          const R = Me.get(N);
          R && Be(R.label);
        }
        w(!1);
      }
    }, tt = sp((N) => {
      n("search", N);
    }, e.searchDelay), at = (N) => {
      N !== fe.value && (x.value || w(!0), Be(N), e.allowSearch && tt(N));
    }, A = (N) => {
      const T = Me.get(N), R = W.value.filter((ae) => ae !== N);
      Ce(R), n("remove", T == null ? void 0 : T.value);
    }, M = (N) => {
      N == null || N.stopPropagation();
      const T = W.value.filter((R) => {
        var ae;
        return (ae = Me.get(R)) == null ? void 0 : ae.disabled;
      });
      Ce(T), Be(""), n("clear", N);
    }, X = (N) => {
      n("dropdownScroll", N);
    }, oe = (N) => {
      n("dropdownReachBottom", N);
    }, {
      validOptions: Te,
      optionInfoMap: Me,
      validOptionInfos: Ot,
      enabledOptionKeys: Ye,
      handleKeyDown: no
    } = kf({
      multiple: d,
      options: i,
      extraOptions: he,
      inputValue: fe,
      filterOption: s,
      showExtraOptions: v,
      component: O,
      valueKey: u,
      fieldNames: _,
      loading: z,
      popupVisible: x,
      valueKeys: W,
      dropdownRef: q,
      optionRefs: E,
      virtualListRef: b,
      defaultActiveFirstOption: P,
      onSelect: dt,
      onPopupVisibleChange: w
    }), lo = h(() => {
      var N;
      const T = [];
      for (const R of Y.value) {
        const ae = Me.get(R.key);
        ae && T.push(vp(Bn({}, ae), {
          value: R.key,
          label: (N = ae == null ? void 0 : ae.label) != null ? N : String(Oe(R.value) ? R.value[u == null ? void 0 : u.value] : R.value),
          closable: !(ae != null && ae.disabled),
          tagProps: ae == null ? void 0 : ae.tagProps
        }));
      }
      return T;
    }), xn = (N) => {
      if (et(t.option)) {
        const T = t.option;
        return () => T({
          data: N.raw
        });
      }
      return et(N.render) ? N.render : () => N.label;
    }, Mt = (N) => {
      if (ls(N)) {
        let T;
        return c(bl, {
          key: N.key,
          label: N.label
        }, hp(T = N.options.map((R) => Mt(R))) ? T : {
          default: () => [T]
        });
      }
      return Gl(N, {
        inputValue: fe.value,
        filterOption: s == null ? void 0 : s.value
      }) ? c(mn, {
        ref: (T) => {
          T != null && T.$el && (E.value[N.key] = T.$el);
        },
        key: N.key,
        value: N.value,
        label: N.label,
        disabled: N.disabled,
        internal: !0
      }, {
        default: xn(N)
      }) : null;
    }, ol = () => c(Jd, {
      ref: q,
      loading: e.loading,
      empty: Ot.value.length === 0,
      virtualList: Boolean(e.virtualListProps),
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: X,
      onReachBottom: oe
    }, {
      default: () => {
        var N, T;
        return [...(T = (N = t.default) == null ? void 0 : N.call(t)) != null ? T : [], ...Te.value.map(Mt)];
      },
      "virtual-list": () => c(Pf, Se(e.virtualListProps, {
        ref: b,
        data: Te.value
      }), {
        item: ({
          item: N
        }) => Mt(N)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), oo = ({
      data: N
    }) => {
      var T, R, ae, ft;
      if ((t.label || et(e.formatLabel)) && N) {
        const nt = Me.get(N.value);
        if (nt != null && nt.raw)
          return (ae = (T = t.label) == null ? void 0 : T.call(t, {
            data: nt.raw
          })) != null ? ae : (R = e.formatLabel) == null ? void 0 : R.call(e, nt.raw);
      }
      return (ft = N == null ? void 0 : N.label) != null ? ft : "";
    };
    return () => c(Il, Se({
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
      onPopupVisibleChange: w
    }, e.triggerProps), {
      default: () => {
        var N, T;
        return [(T = (N = t.trigger) == null ? void 0 : N.call(t)) != null ? T : c(zr, Se({
          class: V,
          modelValue: lo.value,
          inputValue: fe.value,
          multiple: e.multiple,
          disabled: k.value,
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
          onInputValueChange: at,
          onRemove: A,
          onClear: M,
          onKeydown: no
        }, l), {
          label: oo,
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
const ja = Object.assign(Po, {
  Option: mn,
  OptGroup: bl,
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Po.name, Po), e.component(n + mn.name, mn), e.component(n + bl.name, bl);
  }
}), gp = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), bp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], yp = /* @__PURE__ */ p("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), _p = [yp];
function $p(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, _p, 14, bp);
}
var jo = /* @__PURE__ */ ce(gp, [["render", $p]]);
const wp = Object.assign(jo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + jo.name, jo);
  }
}), kp = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Cp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Sp = /* @__PURE__ */ p("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), Vp = [Sp];
function Op(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Vp, 14, Cp);
}
var To = /* @__PURE__ */ ce(kp, [["render", Op]]);
const as = Object.assign(To, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + To.name, To);
  }
}), Ep = (e) => {
  const t = {}, n = I([]), l = () => {
    if (t.value) {
      const o = Wi(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return Ee(() => l()), Pt(() => l()), {
    children: t,
    components: n
  };
}, xp = ["#00B42A", "#3C7EFF", "#FF7D00", "#F76965", "#F7BA1E", "#F5319D", "#D91AD9", "#9FDB1D", "#FADC19", "#722ED1", "#3491FA", "#7BE188", "#93BEFF", "#FFCF8B", "#FBB0A7", "#FCE996", "#FB9DC7", "#F08EE6", "#DCF190", "#FDFA94", "#C396ED", "#9FD4FD"];
var Bp = Object.defineProperty, Ip = Object.defineProperties, Pp = Object.getOwnPropertyDescriptors, Nr = Object.getOwnPropertySymbols, jp = Object.prototype.hasOwnProperty, Tp = Object.prototype.propertyIsEnumerable, Rr = (e, t, n) => t in e ? Bp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Mp = (e, t) => {
  for (var n in t || (t = {}))
    jp.call(t, n) && Rr(e, n, t[n]);
  if (Nr)
    for (var n of Nr(t))
      Tp.call(t, n) && Rr(e, n, t[n]);
  return e;
}, Dp = (e, t) => Ip(e, Pp(t));
const rs = (e, t, n) => {
  const l = Math.floor(e * 6), o = e * 6 - l, r = n * (1 - t), a = n * (1 - o * t), i = n * (1 - (1 - o) * t), s = l % 6, u = [n, a, r, r, i, n][s], d = [i, n, n, a, r, r][s], f = [r, r, i, n, n, a][s];
  return {
    r: Math.round(u * 255),
    g: Math.round(d * 255),
    b: Math.round(f * 255)
  };
}, Yl = (e, t, n) => {
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
}, zp = "[-\\+]?\\d+%?", Ap = "[-\\+]?\\d*\\.\\d+%?", Jt = `(?:${Ap})|(?:${zp})`, Lp = `[\\s|\\(]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})\\s*\\)?`, Fp = `[\\s|\\(]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})[,|\\s]+(${Jt})\\s*\\)?`, zt = {
  rgb: new RegExp(`rgb${Lp}`),
  rgba: new RegExp(`rgba${Fp}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, qe = (e) => parseInt(e, 16), qr = (e) => qe(e) / 255, Np = (e) => {
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
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3]),
    a: qr(t[4])
  } : (t = zt.hex6.exec(e), t ? {
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3])
  } : (t = zt.hex4.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3]),
    a: qr(t[4] + t[4])
  } : (t = zt.hex3.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3])
  } : !1)))));
}, Rp = (e) => {
  var t;
  const n = Np(e);
  if (n) {
    const l = Yl(n.r, n.g, n.b);
    return Dp(Mp({}, l), {
      a: (t = n.a) != null ? t : 1
    });
  }
  return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
}, is = (e) => {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  let t = zt.hex6.exec(e);
  return t ? {
    r: qe(t[1]),
    g: qe(t[2]),
    b: qe(t[3])
  } : (t = zt.hex3.exec(e), t ? {
    r: qe(t[1] + t[1]),
    g: qe(t[2] + t[2]),
    b: qe(t[3] + t[3])
  } : !1);
}, Hr = (e, t, n) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0")].join("").toUpperCase(), qp = (e, t, n, l) => [Math.round(e).toString(16).padStart(2, "0"), Math.round(t).toString(16).padStart(2, "0"), Math.round(n).toString(16).padStart(2, "0"), Math.round(l * 255).toString(16).padStart(2, "0")].join("").toUpperCase(), ss = ({
  value: e,
  onChange: t
}) => {
  const n = I(!1), l = I(), o = I(), r = (d, f) => d < 0 ? 0 : d > f ? 1 : d / f, a = (d) => {
    if (!l.value)
      return;
    const {
      clientX: f,
      clientY: m
    } = d, v = l.value.getBoundingClientRect(), g = [r(f - v.x, v.width), r(m - v.y, v.height)];
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
var Wr = L({
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
    const t = ee("color-picker"), n = h(() => e.color.rgb), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: r
    } = ss({
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
}), Hp = L({
  name: "Palette",
  props: {
    color: {
      type: Object,
      required: !0
    },
    onChange: Function
  },
  setup(e) {
    const t = ee("color-picker"), n = h(() => e.color.hsv), {
      blockRef: l,
      handlerRef: o,
      onMouseDown: r
    } = ss({
      value: [n.value.s, 1 - n.value.v],
      onChange: (i) => {
        var s;
        return (s = e.onChange) == null ? void 0 : s.call(e, i[0], 1 - i[1]);
      }
    }), a = h(() => {
      const i = rs(n.value.h, 1, 1);
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
function ua(e) {
  cs && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
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
  return ua(r), r / Math.pow(10, o);
}), Wp = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (qt(e, n) + qt(t, n)) / n;
}), Up = Xl(function(e, t) {
  var n = Math.pow(10, Math.max(Ct(e), Ct(t)));
  return (qt(e, n) - qt(t, n)) / n;
}), us = Xl(function(e, t) {
  var n = Un(e), l = Un(t);
  return ua(n), ua(l), qt(n / l, Ta(Math.pow(10, Ct(t) - Ct(e))));
});
function Kp(e, t) {
  var n = Math.pow(10, t), l = us(Math.round(Math.abs(qt(e, n))), n);
  return e < 0 && l !== 0 && (l = qt(l, -1)), l;
}
var cs = !0;
function Gp(e) {
  e === void 0 && (e = !0), cs = e;
}
var ln = {
  strip: Ta,
  plus: Wp,
  minus: Up,
  times: qt,
  divide: us,
  round: Kp,
  digitLength: Ct,
  float2Fixed: Un,
  enableBoundaryChecking: Gp
};
const Yp = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), Xp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Zp = /* @__PURE__ */ p("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), Qp = [Zp];
function Jp(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, Qp, 14, Xp);
}
var Mo = /* @__PURE__ */ ce(Yp, [["render", Jp]]);
const ds = Object.assign(Mo, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Mo.name, Mo);
  }
}), ev = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-minus`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), tv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], nv = /* @__PURE__ */ p("path", {
  d: "M5 24h38"
}, null, -1), lv = [nv];
function ov(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, lv, 14, tv);
}
var Do = /* @__PURE__ */ ce(ev, [["render", ov]]);
const av = Object.assign(Do, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Do.name, Do);
  }
});
var rv = Object.defineProperty, Ur = Object.getOwnPropertySymbols, iv = Object.prototype.hasOwnProperty, sv = Object.prototype.propertyIsEnumerable, Kr = (e, t, n) => t in e ? rv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, uv = (e, t) => {
  for (var n in t || (t = {}))
    iv.call(t, n) && Kr(e, n, t[n]);
  if (Ur)
    for (var n of Ur(t))
      sv.call(t, n) && Kr(e, n, t[n]);
  return e;
};
const cv = 800, dv = 150;
ln.enableBoundaryChecking(!1);
var zo = L({
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
    } = $e(e), a = ee("input-number"), i = I(), {
      mergedSize: s,
      mergedDisabled: u,
      eventHandlers: d
    } = ht({
      size: o,
      disabled: r
    }), {
      mergedSize: f
    } = yt(s), m = h(() => {
      if (me(e.precision)) {
        const C = `${e.step}`.split(".")[1], K = C && C.length || 0;
        return Math.max(K, e.precision);
      }
    }), v = (C) => {
      var K, J;
      if (!me(C))
        return "";
      const he = m.value ? C.toFixed(m.value) : String(C);
      return (J = (K = e.formatter) == null ? void 0 : K.call(e, he)) != null ? J : he;
    }, g = I(v((l = e.modelValue) != null ? l : e.defaultValue)), _ = h(() => {
      var C, K;
      if (!g.value)
        return;
      const J = Number((K = (C = e.parser) == null ? void 0 : C.call(e, g.value)) != null ? K : g.value);
      return Number.isNaN(J) ? void 0 : J;
    }), z = I(me(_.value) && _.value <= e.min), P = I(me(_.value) && _.value >= e.max);
    let V = 0;
    const S = () => {
      V && (window.clearTimeout(V), V = 0);
    }, k = (C) => {
      if (!Ze(C))
        return me(e.min) && C < e.min && (C = e.min), me(e.max) && C > e.max && (C = e.max), me(m.value) ? ln.round(C, m.value) : C;
    }, D = (C) => {
      let K = !1, J = !1;
      me(C) && (C <= e.min && (K = !0), C >= e.max && (J = !0)), P.value !== J && (P.value = J), z.value !== K && (z.value = K);
    }, $ = () => {
      const C = k(_.value), K = v(C);
      (C !== _.value || g.value !== K) && (g.value = K), t("update:modelValue", C);
    };
    ge(() => [e.max, e.min], () => {
      $(), D(_.value);
    });
    const O = (C, K) => {
      if (u.value || C === "plus" && P.value || C === "minus" && z.value)
        return;
      let J;
      me(_.value) ? J = k(ln[C](_.value, e.step)) : J = e.min === -1 / 0 ? 0 : e.min, g.value = v(J), D(J), t("update:modelValue", J), t("change", J, K);
    }, F = (C, K, J = !1) => {
      var he;
      C.preventDefault(), (he = i.value) == null || he.focus(), O(K, C), J && (V = window.setTimeout(() => C.target.dispatchEvent(C), V ? dv : cv));
    }, q = (C, K) => {
      var J, he, we, fe;
      C = C.trim().replace(/。/g, "."), C = (he = (J = e.parser) == null ? void 0 : J.call(e, C)) != null ? he : C, (me(Number(C)) || /^(\.|-)$/.test(C)) && (g.value = (fe = (we = e.formatter) == null ? void 0 : we.call(e, C)) != null ? fe : C, D(_.value), t("input", _.value, g.value, K), e.modelEvent === "input" && (t("update:modelValue", _.value), t("change", _.value, K)));
    }, E = (C) => {
      t("focus", C);
    }, b = (C, K) => {
      K instanceof MouseEvent && !C || ($(), t("change", _.value, K));
    }, x = (C) => {
      t("blur", C);
    }, w = (C) => {
      var K, J;
      g.value = "", t("update:modelValue", void 0), t("change", void 0, C), (J = (K = d.value) == null ? void 0 : K.onChange) == null || J.call(K, C), t("clear", C);
    }, H = os(/* @__PURE__ */ new Map([[pn.ARROW_UP, (C) => {
      C.preventDefault(), !e.readOnly && O("plus", C);
    }], [pn.ARROW_DOWN, (C) => {
      C.preventDefault(), !e.readOnly && O("minus", C);
    }]])), Y = (C) => {
      t("keydown", C), C.defaultPrevented || H(C);
    };
    ge(() => e.modelValue, (C) => {
      C !== _.value && (g.value = v(C), D(C));
    });
    const W = () => {
      var C, K, J;
      return e.readOnly ? null : c(je, null, [n.suffix && c("div", {
        class: `${a}-suffix`
      }, [(C = n.suffix) == null ? void 0 : C.call(n)]), c("div", {
        class: `${a}-step`
      }, [c("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || P.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || P.value,
        onMousedown: (he) => F(he, "plus", !0),
        onMouseup: S,
        onMouseleave: S
      }, [n.plus ? (K = n.plus) == null ? void 0 : K.call(n) : c(as, null, null)]), c("button", {
        class: [`${a}-step-button`, {
          [`${a}-step-button-disabled`]: u.value || z.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: u.value || z.value,
        onMousedown: (he) => F(he, "minus", !0),
        onMouseup: S,
        onMouseleave: S
      }, [n.minus ? (J = n.minus) == null ? void 0 : J.call(n) : c(Pa, null, null)])])]);
    }, Z = h(() => [a, `${a}-mode-${e.mode}`, `${a}-size-${f.value}`, {
      [`${a}-readonly`]: e.readOnly
    }]), U = () => c(wn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || z.value,
      onMousedown: (C) => F(C, "minus", !0),
      onMouseup: S,
      onMouseleave: S
    }, {
      icon: () => c(av, null, null)
    }), te = () => c(wn, {
      size: f.value,
      tabindex: "-1",
      class: `${a}-step-button`,
      disabled: u.value || P.value,
      onMousedown: (C) => F(C, "plus", !0),
      onMouseup: S,
      onMouseleave: S
    }, {
      icon: () => c(ds, null, null)
    });
    return {
      inputRef: i,
      render: () => {
        const C = e.mode === "embed" ? {
          prepend: n.prepend,
          prefix: n.prefix,
          suffix: e.hideButton ? n.suffix : W,
          append: n.append
        } : {
          prepend: e.hideButton ? n.prepend : U,
          prefix: n.prefix,
          suffix: n.suffix,
          append: e.hideButton ? n.append : te
        };
        return c(Kt, {
          key: `__arco__${e.mode}`,
          ref: i,
          class: Z.value,
          type: "text",
          allowClear: e.allowClear,
          size: f.value,
          modelValue: g.value,
          placeholder: e.placeholder,
          disabled: u.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: uv({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": g.value
          }, e.inputAttrs),
          onInput: q,
          onFocus: E,
          onBlur: x,
          onClear: w,
          onChange: b,
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
const Vt = Object.assign(zo, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + zo.name, zo);
  }
});
var fs = L({
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
}), fv = Object.defineProperty, Gr = Object.getOwnPropertySymbols, pv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, Yr = (e, t, n) => t in e ? fv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    pv.call(t, n) && Yr(e, n, t[n]);
  if (Gr)
    for (var n of Gr(t))
      vv.call(t, n) && Yr(e, n, t[n]);
  return e;
}, hv = L({
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
      const a = Xr(Xr({}, n.value.rgb), o), i = Yl(a.r, a.g, a.b);
      (r = e.onHsvChange) == null || r.call(e, i);
    };
    return () => c(zn, {
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
      }, null)), !e.disabledAlpha && c(fs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), mv = L({
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
      const d = is(s) || {
        r: 255,
        g: 0,
        b: 0
      }, f = Yl(d.r, d.g, d.b);
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
    return ge(n, () => {
      n.value.hex !== l.value && o(n.value.hex);
    }), () => c(zn, {
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
      }), !e.disabledAlpha && c(fs, {
        disabled: e.disabled,
        value: e.alpha,
        onChange: e.onAlphaChange
      }, null)]
    });
  }
}), gv = L({
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
    } = $a(), n = ee("color-picker"), l = h(() => e.color.hsv), [o, r] = Hn(e.format || "hex"), a = (m) => {
      r(m);
    };
    I(!1);
    const i = (m) => {
      var v;
      const g = is(m) || {
        r: 255,
        g: 0,
        b: 0
      }, _ = Yl(g.r, g.g, g.b);
      (v = e.onHsvChange) == null || v.call(e, _);
    }, s = () => {
      const m = {
        color: e.color,
        alpha: e.alpha,
        disabled: e.disabled,
        disabledAlpha: e.disabledAlpha,
        onHsvChange: e.onHsvChange,
        onAlphaChange: e.onAlphaChange
      };
      return o.value === "rgb" ? c(hv, m, null) : c(mv, m, null);
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
    }, null)]), d = (m, v) => c("div", {
      class: `${n}-colors-section`
    }, [c("div", {
      class: `${n}-colors-text`
    }, [m]), c("div", {
      class: `${n}-colors-wrapper`
    }, [v != null && v.length ? c("div", {
      class: `${n}-colors-list`
    }, [v.map(u)]) : c("span", {
      class: `${n}-colors-empty`
    }, [t("colorPicker.empty")])])]), f = () => e.showHistory || e.showPreset ? c("div", {
      class: `${n}-panel-colors`
    }, [e.showHistory && d(t("colorPicker.history"), e.historyColors), e.showPreset && d(t("colorPicker.preset"), e.presetColors)]) : null;
    return () => c("div", {
      class: {
        [`${n}-panel`]: !0,
        [`${n}-panel-disabled`]: e.disabled
      }
    }, [c(Hp, {
      color: e.color,
      onChange: (m, v) => {
        var g;
        return (g = e.onHsvChange) == null ? void 0 : g.call(e, {
          h: l.value.h,
          s: m,
          v
        });
      }
    }, null), c("div", {
      class: `${n}-panel-control`
    }, [c("div", {
      class: `${n}-control-wrapper`
    }, [c("div", null, [c(Wr, {
      type: "hue",
      x: l.value.h,
      color: e.color,
      colorString: e.colorString,
      onChange: (m) => {
        var v;
        return (v = e.onHsvChange) == null ? void 0 : v.call(e, {
          h: m,
          s: l.value.s,
          v: l.value.v
        });
      }
    }, null), !e.disabledAlpha && c(Wr, {
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
}), Ao = L({
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
      default: () => xp
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
    const l = ee("color-picker"), o = h(() => {
      var V;
      return (V = e.modelValue) != null ? V : e.defaultValue;
    }), r = h(() => Rp(o.value || "")), [a, i] = Hn(r.value.a), [s, u] = Hn({
      h: r.value.h,
      s: r.value.s,
      v: r.value.v
    });
    ge(() => r.value, (V) => {
      o.value !== m.value && (i(V.a), u({
        h: V.h,
        s: V.s,
        v: V.v
      }));
    });
    const d = h(() => {
      const V = rs(s.value.h, s.value.s, s.value.v), S = Hr(V.r, V.g, V.b);
      return {
        hsv: s.value,
        rgb: V,
        hex: S
      };
    }), f = h(() => {
      const {
        r: V,
        g: S,
        b: k
      } = d.value.rgb;
      return `rgba(${V}, ${S}, ${k}, ${a.value.toFixed(2)})`;
    }), m = h(() => {
      const {
        r: V,
        g: S,
        b: k
      } = d.value.rgb;
      return e.format === "rgb" ? a.value < 1 && !e.disabledAlpha ? `rgba(${V}, ${S}, ${k}, ${a.value.toFixed(2)})` : `rgb(${V}, ${S}, ${k})` : a.value < 1 && !e.disabledAlpha ? `#${qp(V, S, k, a.value)}` : `#${Hr(V, S, k)}`;
    });
    ge(m, (V) => {
      t("update:modelValue", V), t("change", V);
    });
    const v = (V) => {
      !e.disabled && u(V);
    }, g = (V) => {
      !e.disabled && i(V);
    }, _ = (V) => {
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
    }, null)]), P = () => c(gv, {
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
      onHsvChange: v,
      onAlphaChange: g
    }, null);
    return () => e.hideTrigger ? P() : c(Il, Se({
      trigger: "click",
      position: "bl",
      animationName: "slide-dynamic-origin",
      popupOffset: 4,
      disabled: e.disabled,
      onPopupVisibleChange: _
    }, e.triggerProps), {
      default: () => [n.default ? n.default() : z()],
      content: P
    });
  }
});
const Ma = Object.assign(Ao, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Ao.name, Ao);
  }
}), Zr = (e, t) => {
  if (!e || !t)
    return;
  t = t.replace(/\[(\w+)\]/g, ".$1");
  const n = t.split(".");
  if (n.length === 0)
    return;
  let l = e;
  for (let o = 0; o < n.length; o++) {
    if (!Oe(l) && !ze(l) || !n[o])
      return;
    if (o !== n.length - 1)
      l = l[n[o]];
    else
      return l[n[o]];
  }
}, Qr = (e, t, n, {
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
    if (!Oe(r) && !ze(r) || !o[a])
      return;
    a !== o.length - 1 ? (l && Ze(r[o[a]]) && (r[o[a]] = {}), r = r[o[a]]) : r[o[a]] = n;
  }
};
var bv = Object.defineProperty, yv = Object.defineProperties, _v = Object.getOwnPropertyDescriptors, Jr = Object.getOwnPropertySymbols, $v = Object.prototype.hasOwnProperty, wv = Object.prototype.propertyIsEnumerable, ei = (e, t, n) => t in e ? bv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, kv = (e, t) => {
  for (var n in t || (t = {}))
    $v.call(t, n) && ei(e, n, t[n]);
  if (Jr)
    for (var n of Jr(t))
      wv.call(t, n) && ei(e, n, t[n]);
  return e;
}, Cv = (e, t) => yv(e, _v(t));
const Pl = ["xxl", "xl", "lg", "md", "sm", "xs"], cl = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let Gt = [], Sv = -1, dl = {};
const ti = {
  matchHandlers: {},
  dispatch(e, t) {
    return dl = e, Gt.length < 1 ? !1 : (Gt.forEach((n) => {
      n.func(dl, t);
    }), !0);
  },
  subscribe(e) {
    Gt.length === 0 && this.register();
    const t = (++Sv).toString();
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
        this.dispatch(Cv(kv({}, dl), {
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
function ni(e) {
  return Oe(e);
}
function ca(e, t, n = !1) {
  const l = I({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), o = h(() => {
    let a = t;
    if (ni(e.value))
      for (let i = 0; i < Pl.length; i++) {
        const s = Pl[i];
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
  return Ee(() => {
    r = ti.subscribe((a) => {
      ni(e.value) && (l.value = a);
    });
  }), Hl(() => {
    r && ti.unsubscribe(r);
  }), o;
}
function ps(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Vv(e, t) {
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
function Ov(e) {
  return e === !1 ? {
    block: "end",
    inline: "nearest"
  } : ps(e) ? e : {
    block: "start",
    inline: "nearest"
  };
}
function Ev(e, t) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (ps(t) && typeof t.behavior == "function")
    return t.behavior(n ? ir(e, t) : []);
  if (n) {
    var l = Ov(t);
    return Vv(ir(e, l), l.behavior);
  }
}
const li = ["success", "warning", "error", "validating"], xv = (e) => {
  let t = "";
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && (!t || li.indexOf(l) > li.indexOf(t)) && (t = e[n]);
  }
  return t;
}, Bv = (e) => {
  const t = [];
  for (const n of Object.keys(e)) {
    const l = e[n];
    l && t.push(l);
  }
  return t;
}, vs = (e, t) => {
  const n = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${n}` : `${n}`;
};
var Iv = Object.defineProperty, oi = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, jv = Object.prototype.propertyIsEnumerable, ai = (e, t, n) => t in e ? Iv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tv = (e, t) => {
  for (var n in t || (t = {}))
    Pv.call(t, n) && ai(e, n, t[n]);
  if (oi)
    for (var n of oi(t))
      jv.call(t, n) && ai(e, n, t[n]);
  return e;
};
const Mv = L({
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
    const n = ee("form"), l = I(), {
      id: o,
      model: r,
      layout: a,
      disabled: i,
      labelAlign: s,
      labelColProps: u,
      wrapperColProps: d,
      labelColStyle: f,
      wrapperColStyle: m,
      size: v,
      rules: g
    } = $e(e), {
      mergedSize: _
    } = yt(v), z = h(() => e.layout === "horizontal" && e.autoLabelWidth), P = [], V = [], S = Pe({}), k = h(() => Math.max(...Object.values(S))), D = (U) => {
      U && U.field && P.push(U);
    }, $ = (U) => {
      U && U.field && P.splice(P.indexOf(U), 1);
    }, O = (U) => {
      P.forEach((te) => {
        U[te.field] && te.setField(U[te.field]);
      });
    }, F = (U, te) => {
      te && S[te] !== U && (S[te] = U);
    }, q = (U) => {
      U && delete S[U];
    }, E = (U) => {
      const te = U ? [].concat(U) : [];
      P.forEach((j) => {
        (te.length === 0 || te.includes(j.field)) && j.resetField();
      });
    }, b = (U) => {
      const te = U ? [].concat(U) : [];
      P.forEach((j) => {
        (te.length === 0 || te.includes(j.field)) && j.clearValidate();
      });
    }, x = (U, te) => {
      const C = (l.value || document.body).querySelector(`#${vs(e.id, U)}`);
      C && Ev(C, Tv({
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed"
      }, te));
    }, w = (U) => {
      const te = Wl(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
      x(U, te);
    }, H = (U) => {
      const te = [];
      return P.forEach((j) => {
        te.push(j.validate());
      }), Promise.all(te).then((j) => {
        const C = {};
        let K = !1;
        return j.forEach((J) => {
          J && (K = !0, C[J.field] = J);
        }), K && e.scrollToFirstError && w(Object.keys(C)[0]), et(U) && U(K ? C : void 0), K ? C : void 0;
      });
    }, Y = (U, te) => {
      const j = [];
      for (const C of P)
        (ze(U) && U.includes(C.field) || U === C.field) && j.push(C.validate());
      return Promise.all(j).then((C) => {
        const K = {};
        let J = !1;
        return C.forEach((he) => {
          he && (J = !0, K[he.field] = he);
        }), J && e.scrollToFirstError && w(Object.keys(K)[0]), et(te) && te(J ? K : void 0), J ? K : void 0;
      });
    }, W = (U) => {
      const te = [];
      P.forEach((j) => {
        te.push(j.validate());
      }), Promise.all(te).then((j) => {
        const C = {};
        let K = !1;
        j.forEach((J) => {
          J && (K = !0, C[J.field] = J);
        }), K ? (e.scrollToFirstError && w(Object.keys(C)[0]), t("submitFailed", {
          values: r.value,
          errors: C
        }, U)) : t("submitSuccess", r.value, U), t("submit", {
          values: r.value,
          errors: K ? C : void 0
        }, U);
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
      size: _,
      rules: g,
      fields: P,
      touchedFields: V,
      addField: D,
      removeField: $,
      validateField: Y,
      setLabelWidth: F,
      removeLabelWidth: q,
      maxLabelWidth: k,
      autoLabelWidth: z
    })), {
      cls: h(() => [n, `${n}-layout-${e.layout}`, `${n}-size-${_.value}`, {
        [`${n}-auto-label-width`]: e.autoLabelWidth
      }]),
      formRef: l,
      handleSubmit: W,
      innerValidate: H,
      innerValidateField: Y,
      innerResetFields: E,
      innerClearValidate: b,
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
function Dv(e, t, n, l, o, r) {
  return y(), B("form", {
    ref: "formRef",
    class: G(e.cls),
    onSubmit: t[0] || (t[0] = nn((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
  }, [re(e.$slots, "default")], 34);
}
var Lo = /* @__PURE__ */ ce(Mv, [["render", Dv]]), Vn = Object.prototype.toString;
function Zl(e) {
  return Vn.call(e) === "[object Array]";
}
function xt(e) {
  return Vn.call(e) === "[object Object]";
}
function da(e) {
  return Vn.call(e) === "[object String]";
}
function zv(e) {
  return Vn.call(e) === "[object Number]" && e === e;
}
function Av(e) {
  return Vn.call(e) === "[object Boolean]";
}
function fa(e) {
  return Vn.call(e) === "[object Function]";
}
function Lv(e) {
  return xt(e) && Object.keys(e).length === 0;
}
function Zt(e) {
  return e == null || e === "";
}
function hs(e) {
  return Zl(e) && !e.length;
}
var Da = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (fa(e) && fa(t))
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
}, Fv = function(e, t) {
  for (var n = t.split("."), l = e, o = 0; o < n.length; o++)
    if (l = l && l[n[o]], l === void 0)
      return l;
  return l;
}, Dt = "#{field} is not a #{type} type", Nv = {
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
    }), i = Fv(l.validateMessages, o);
    return fa(i) ? i(a) : da(i) ? i.replace(/\#\{.+?\}/g, function(s) {
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
  }, xt(n) && da(t) && n.trim ? this.obj = t.trim() : xt(n) && n.ignoreEmptyString && t === "" ? this.obj = void 0 : this.obj = t, this.message = n.message, this.type = n.type, this.error = null, this.field = n.field || n.type, this.validateMessages = za(Nv, n.validateMessages);
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
  if (Zt(this.obj) || hs(this.obj)) {
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
var Rv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "string"
    })), this.validate(o && o.strict ? da(this.obj) : !0, this.getValidateMsg("type.string"));
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
}(_t), qv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "number"
    })), this.validate(o && o.strict ? zv(this.obj) : !0, this.getValidateMsg("type.number"));
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
}(_t), Hv = /* @__PURE__ */ function(e) {
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
    return this.validate(hs(this.obj), this.getValidateMsg("array.empty", {
      value: this.obj
    }));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Wv = /* @__PURE__ */ function(e) {
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
    return this.validate(Lv(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Uv = /* @__PURE__ */ function(e) {
  function t(l, o) {
    e.call(this, l, Object.assign(Object.assign({}, o), {
      type: "boolean"
    })), this.validate(o && o.strict ? Av(this.obj) : !0, this.getValidateMsg("type.boolean"));
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
}(_t), Kv = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Gv = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), Yv = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, Xv = /* @__PURE__ */ function(e) {
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
    return this.type = "email", this.validate(this.obj === void 0 || Kv.test(this.obj), this.getValidateMsg("type.email"));
  }, n.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || Gv.test(this.obj), this.getValidateMsg("type.url"));
  }, n.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || Yv.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, n), t;
}(_t), Zv = /* @__PURE__ */ function(e) {
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
}(_t), jl = function(e, t) {
  return new ms(e, Object.assign({
    field: "value"
  }, t));
};
jl.globalConfig = {};
jl.setGlobalConfig = function(e) {
  jl.globalConfig = e || {};
};
var ms = function(t, n) {
  var l = jl.globalConfig, o = Object.assign(Object.assign(Object.assign({}, l), n), {
    validateMessages: za(l.validateMessages, n.validateMessages)
  });
  this.string = new Rv(t, o), this.number = new qv(t, o), this.array = new Hv(t, o), this.object = new Wv(t, o), this.boolean = new Uv(t, o), this.type = new Xv(t, o), this.custom = new Zv(t, o);
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
        var m = l.schema[i][f], v = m.type, g = m.message;
        if (!v && !m.validator)
          throw "You must specify a type to field " + i + "!";
        var _ = Object.assign(Object.assign({}, l.options), {
          message: g,
          field: i
        });
        "ignoreEmptyString" in m && (_.ignoreEmptyString = m.ignoreEmptyString), "strict" in m && (_.strict = m.strict);
        var z = new ms(t[i], _), P = z.type[v] || null;
        if (!P)
          if (m.validator) {
            P = z.custom.validate(m.validator), Object.prototype.toString.call(P) === "[object Array]" && P[0].then ? o.push({
              function: P[0],
              _this: P[1],
              key: i
            }) : P && a(i, P);
            return;
          } else
            P = z[v];
        if (Object.keys(m).forEach(function(V) {
          m.required && (P = P.isRequired), V !== "message" && P[V] && m[V] && typeof P[V] == "object" && (P = P[V]), P[V] && m[V] !== void 0 && typeof P[V] == "function" && (P = P[V](m[V]));
        }), P.collect(function(V) {
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
const gs = Symbol("RowContextInjectionKey"), Qv = L({
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
    } = $e(e), a = ee("row"), i = h(() => ({
      [`${a}`]: !o.value,
      [`${a}-nowrap`]: !r.value,
      [`${a}-align-${n.value}`]: n.value,
      [`${a}-justify-${l.value}`]: l.value
    })), s = h(() => Array.isArray(t.value) ? t.value[0] : t.value), u = h(() => Array.isArray(t.value) ? t.value[1] : 0), d = ca(s, 0), f = ca(u, 0), m = h(() => {
      const g = {};
      if ((d.value || f.value) && !o.value) {
        const _ = -d.value / 2, z = -f.value / 2;
        _ && (g.marginLeft = `${_}px`, g.marginRight = `${_}px`), z && (g.marginTop = `${z}px`, g.marginBottom = `${z}px`);
      }
      return g;
    }), v = h(() => [d.value, f.value]);
    return Ht(gs, Pe({
      gutter: v,
      div: o
    })), {
      classNames: i,
      styles: m
    };
  }
});
function Jv(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(e.classNames),
    style: pe(e.styles)
  }, [re(e.$slots, "default")], 6);
}
var eh = /* @__PURE__ */ ce(Qv, [["render", Jv]]);
function th(e) {
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
    const d = {};
    return Pl.forEach((f) => {
      const m = e.value[f];
      me(m) ? d[f] = m : Oe(m) && me(m[l]) && (d[f] = m[l]);
    }), d;
  });
}
var nh = Object.defineProperty, ri = Object.getOwnPropertySymbols, lh = Object.prototype.hasOwnProperty, oh = Object.prototype.propertyIsEnumerable, ii = (e, t, n) => t in e ? nh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Fo = (e, t) => {
  for (var n in t || (t = {}))
    lh.call(t, n) && ii(e, n, t[n]);
  if (ri)
    for (var n of ri(t))
      oh.call(t, n) && ii(e, n, t[n]);
  return e;
};
function ah(e) {
  if (kt(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || me(e))
    return e;
  if (kt(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const rh = L({
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
    const t = ee("col"), n = Ue(gs, {}), l = h(() => ah(e.flex)), o = h(() => {
      const {
        div: f
      } = n, {
        span: m,
        offset: v,
        order: g,
        xs: _,
        sm: z,
        md: P,
        lg: V,
        xl: S,
        xxl: k
      } = e, D = {
        [`${t}`]: !f,
        [`${t}-order-${g}`]: g,
        [`${t}-${m}`]: !f && !_ && !z && !P && !V && !S && !k,
        [`${t}-offset-${v}`]: v && v > 0
      }, $ = {
        xs: _,
        sm: z,
        md: P,
        lg: V,
        xl: S,
        xxl: k
      };
      return Object.keys($).forEach((O) => {
        const F = $[O];
        F && me(F) ? D[`${t}-${O}-${F}`] = !0 : F && Oe(F) && (D[`${t}-${O}-${F.span}`] = F.span, D[`${t}-${O}-offset-${F.offset}`] = F.offset, D[`${t}-${O}-order-${F.order}`] = F.order);
      }), D;
    }), r = h(() => l.value ? t : o.value), a = h(() => {
      const {
        gutter: f,
        div: m
      } = n, v = {};
      if (Array.isArray(f) && !m) {
        const g = f[0] && f[0] / 2 || 0, _ = f[1] && f[1] / 2 || 0;
        g && (v.paddingLeft = `${g}px`, v.paddingRight = `${g}px`), _ && (v.paddingTop = `${_}px`, v.paddingBottom = `${_}px`);
      }
      return v;
    }), i = h(() => l.value ? {
      flex: l.value
    } : {}), s = h(() => Xn(e, Pl)), u = th(h(() => Fo({
      val: e.span,
      key: "span"
    }, s.value))), d = ca(u, 24, !0);
    return {
      visible: h(() => !!d.value),
      classNames: r,
      styles: h(() => Fo(Fo({}, a.value), i.value))
    };
  }
});
function ih(e, t, n, l, o, r) {
  return e.visible ? (y(), B("div", {
    key: 0,
    class: G(e.classNames),
    style: pe(e.styles)
  }, [re(e.$slots, "default")], 6)) : le("v-if", !0);
}
var sh = /* @__PURE__ */ ce(rh, [["render", ih]]), uh = Object.defineProperty, si = Object.getOwnPropertySymbols, ch = Object.prototype.hasOwnProperty, dh = Object.prototype.propertyIsEnumerable, ui = (e, t, n) => t in e ? uh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ci = (e, t) => {
  for (var n in t || (t = {}))
    ch.call(t, n) && ui(e, n, t[n]);
  if (si)
    for (var n of si(t))
      dh.call(t, n) && ui(e, n, t[n]);
  return e;
};
const fh = L({
  name: "Tooltip",
  components: {
    Trigger: Il
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
    const n = ee("tooltip"), l = I(e.defaultPopupVisible), o = h(() => {
      var d;
      return (d = e.popupVisible) != null ? d : l.value;
    }), r = (d) => {
      l.value = d, t("update:popupVisible", d), t("popupVisibleChange", d);
    }, a = h(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = h(() => {
      if (e.backgroundColor || e.contentStyle)
        return ci({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = h(() => [`${n}-popup-arrow`, e.arrowClass]), u = h(() => {
      if (e.backgroundColor || e.arrowStyle)
        return ci({
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
function ph(e, t, n, l, o, r) {
  const a = se("Trigger");
  return y(), ue(a, {
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
    content: ne(() => [re(e.$slots, "content", {}, () => [ye(be(e.content), 1)])]),
    default: ne(() => [re(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var No = /* @__PURE__ */ ce(fh, [["render", ph]]);
const Zn = Object.assign(No, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + No.name, No);
  }
}), vh = L({
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
    const n = ee("icon"), l = h(() => [n, `${n}-question-circle`, {
      [`${n}-spin`]: e.spin
    }]), o = h(() => {
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
}), hh = ["stroke-width", "stroke-linecap", "stroke-linejoin"], mh = /* @__PURE__ */ p("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
}, null, -1), gh = /* @__PURE__ */ p("path", {
  d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"
}, null, -1), bh = [mh, gh];
function yh(e, t, n, l, o, r) {
  return y(), B("svg", {
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
  }, bh, 14, hh);
}
var Ro = /* @__PURE__ */ ce(vh, [["render", yh]]);
const _h = Object.assign(Ro, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ro.name, Ro);
  }
}), $h = L({
  name: "FormItemLabel",
  components: {
    ResizeObserver: Bl,
    Tooltip: Zn,
    IconQuestionCircle: _h
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
    const e = ee("form-item-label"), t = Ue(xa, void 0), n = Kn(), l = I(), o = () => {
      l.value && me(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    };
    return Ee(() => {
      l.value && me(l.value.offsetWidth) && (t == null || t.setLabelWidth(l.value.offsetWidth, n == null ? void 0 : n.uid));
    }), Wt(() => {
      t == null || t.removeLabelWidth(n == null ? void 0 : n.uid);
    }), {
      prefixCls: e,
      labelRef: l,
      handleResize: o
    };
  }
}), wh = /* @__PURE__ */ p("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ p("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), kh = [wh], Ch = /* @__PURE__ */ p("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [/* @__PURE__ */ p("path", {
  d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"
})], -1), Sh = [Ch];
function Vh(e, t, n, l, o, r) {
  const a = se("icon-question-circle"), i = se("Tooltip"), s = se("ResizeObserver");
  return y(), ue(s, {
    onResize: e.handleResize
  }, {
    default: ne(() => [(y(), ue(en(e.component), Se({
      ref: "labelRef",
      class: e.prefixCls
    }, e.attrs), {
      default: ne(() => [e.required && e.asteriskPosition === "start" ? (y(), B("strong", {
        key: 0,
        class: G(`${e.prefixCls}-required-symbol`)
      }, kh, 2)) : le("v-if", !0), re(e.$slots, "default"), e.tooltip ? (y(), ue(i, {
        key: 1,
        content: e.tooltip
      }, {
        default: ne(() => [c(a, {
          class: G(`${e.prefixCls}-tooltip`)
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["content"])) : le("v-if", !0), e.required && e.asteriskPosition === "end" ? (y(), B("strong", {
        key: 2,
        class: G(`${e.prefixCls}-required-symbol`)
      }, Sh, 2)) : le("v-if", !0), ye(" " + be(e.showColon ? ":" : ""), 1)]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["onResize"]);
}
var Oh = /* @__PURE__ */ ce($h, [["render", Vh]]);
const Eh = L({
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
function xh(e, t, n, l, o, r) {
  return e.error.length > 0 ? (y(!0), B(je, {
    key: 0
  }, bt(e.error, (a) => (y(), ue(Vl, {
    key: a,
    name: "form-blink",
    appear: ""
  }, {
    default: ne(() => [p("div", {
      role: "alert",
      class: G([e.prefixCls])
    }, be(a), 3)]),
    _: 2
  }, 1024))), 128)) : e.help || e.$slots.help ? (y(), ue(Vl, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: ne(() => [p("div", {
      class: G([e.prefixCls, `${e.prefixCls}-help`])
    }, [re(e.$slots, "help", {}, () => [ye(be(e.help), 1)])], 2)]),
    _: 3
  })) : le("v-if", !0);
}
var Bh = /* @__PURE__ */ ce(Eh, [["render", xh]]), Ih = Object.defineProperty, Tl = Object.getOwnPropertySymbols, bs = Object.prototype.hasOwnProperty, ys = Object.prototype.propertyIsEnumerable, di = (e, t, n) => t in e ? Ih(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fi = (e, t) => {
  for (var n in t || (t = {}))
    bs.call(t, n) && di(e, n, t[n]);
  if (Tl)
    for (var n of Tl(t))
      ys.call(t, n) && di(e, n, t[n]);
  return e;
}, Ph = (e, t) => {
  var n = {};
  for (var l in e)
    bs.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Tl)
    for (var l of Tl(e))
      t.indexOf(l) < 0 && ys.call(e, l) && (n[l] = e[l]);
  return n;
};
const jh = L({
  name: "FormItem",
  components: {
    ArcoRow: eh,
    ArcoCol: sh,
    FormItemLabel: Oh,
    FormItemMessage: Bh
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
    } = $e(e), l = Ue(xa, {}), {
      autoLabelWidth: o,
      layout: r
    } = $e(l), {
      i18nMessage: a
    } = $a(), i = h(() => {
      var j;
      const C = fi({}, (j = e.labelColProps) != null ? j : l.labelColProps);
      return e.labelColFlex ? C.flex = e.labelColFlex : l.autoLabelWidth && (C.flex = `${l.maxLabelWidth}px`), C;
    }), s = h(() => {
      var j;
      const C = fi({}, (j = e.wrapperColProps) != null ? j : l.wrapperColProps);
      return n.value && (C.id = vs(l.id, n.value)), (e.labelColFlex || l.autoLabelWidth) && (C.flex = "auto"), C;
    }), u = h(() => {
      var j;
      return (j = e.labelColStyle) != null ? j : l.labelColStyle;
    }), d = h(() => {
      var j;
      return (j = e.wrapperColStyle) != null ? j : l.wrapperColStyle;
    }), f = Zr(l.model, e.field), m = Pe({}), v = Pe({}), g = h(() => xv(m)), _ = h(() => Bv(v)), z = I(!1), P = h(() => Zr(l.model, e.field)), V = h(() => {
      var j;
      return Boolean((j = e.disabled) != null ? j : l == null ? void 0 : l.disabled);
    }), S = h(() => {
      var j;
      return (j = e.validateStatus) != null ? j : g.value;
    }), k = h(() => S.value === "error"), D = h(() => {
      var j, C, K;
      const J = [].concat((K = (C = e.rules) != null ? C : (j = l == null ? void 0 : l.rules) == null ? void 0 : j[e.field]) != null ? K : []), he = J.some((we) => we.required);
      return e.required && !he ? [{
        required: !0
      }].concat(J) : J;
    }), $ = h(() => D.value.some((j) => j.required)), O = e.noStyle ? Ue(ra, void 0) : void 0, F = (j, {
      status: C,
      message: K
    }) => {
      m[j] = C, v[j] = K, e.noStyle && (O == null || O.updateValidateState(j, {
        status: C,
        message: K
      }));
    }, q = h(() => e.feedback && S.value ? S.value : void 0), E = () => {
      var j;
      if (z.value)
        return Promise.resolve();
      const C = D.value;
      if (!n.value || C.length === 0)
        return g.value && w(), Promise.resolve();
      const K = n.value, J = P.value;
      F(K, {
        status: "",
        message: ""
      });
      const he = new Aa({
        [K]: C.map((we) => {
          var fe = Ph(we, []);
          return !fe.type && !fe.validator && (fe.type = "string"), fe;
        })
      }, {
        ignoreEmptyString: !0,
        validateMessages: (j = a.value.form) == null ? void 0 : j.validateMessages
      });
      return new Promise((we) => {
        he.validate({
          [K]: J
        }, (fe) => {
          var Ae;
          const Ce = Boolean(fe == null ? void 0 : fe[K]);
          F(K, {
            status: Ce ? "error" : "",
            message: (Ae = fe == null ? void 0 : fe[K].message) != null ? Ae : ""
          });
          const Be = Ce ? {
            label: e.label,
            field: n.value,
            value: fe[K].value,
            type: fe[K].type,
            isRequiredError: Boolean(fe[K].requiredError),
            message: fe[K].message
          } : void 0;
          we(Be);
        });
      });
    }, b = h(() => [].concat(e.validateTrigger)), x = h(() => b.value.reduce((j, C) => {
      switch (C) {
        case "change":
          return j.onChange = () => {
            E();
          }, j;
        case "input":
          return j.onInput = () => {
            Fe(() => {
              E();
            });
          }, j;
        case "focus":
          return j.onFocus = () => {
            E();
          }, j;
        case "blur":
          return j.onBlur = () => {
            E();
          }, j;
        default:
          return j;
      }
    }, {}));
    Ht(ra, Pe({
      eventHandlers: x,
      size: l && Sl(l, "size"),
      disabled: V,
      error: k,
      feedback: q,
      updateValidateState: F
    }));
    const w = () => {
      n.value && F(n.value, {
        status: "",
        message: ""
      });
    }, W = Pe({
      field: n,
      disabled: V,
      error: k,
      validate: E,
      clearValidate: w,
      resetField: () => {
        w(), z.value = !0, l != null && l.model && n.value && Qr(l.model, n.value, f), Fe(() => {
          z.value = !1;
        });
      },
      setField: (j) => {
        var C, K;
        n.value && (z.value = !0, "value" in j && (l != null && l.model) && n.value && Qr(l.model, n.value, j.value), (j.status || j.message) && F(n.value, {
          status: (C = j.status) != null ? C : "",
          message: (K = j.message) != null ? K : ""
        }), Fe(() => {
          z.value = !1;
        }));
      }
    });
    Ee(() => {
      var j;
      W.field && ((j = l.addField) == null || j.call(l, W));
    }), Wt(() => {
      var j;
      W.field && ((j = l.removeField) == null || j.call(l, W));
    });
    const Z = h(() => [t, `${t}-layout-${l.layout}`, {
      [`${t}-error`]: k.value,
      [`${t}-status-${S.value}`]: Boolean(S.value)
    }, e.rowClass]), U = h(() => [`${t}-label-col`, {
      [`${t}-label-col-left`]: l.labelAlign === "left",
      [`${t}-label-col-flex`]: l.autoLabelWidth || e.labelColFlex
    }]), te = h(() => [`${t}-wrapper-col`, {
      [`${t}-wrapper-col-flex`]: !s.value
    }]);
    return {
      prefixCls: t,
      cls: Z,
      isRequired: $,
      isError: k,
      finalMessage: _,
      mergedLabelCol: i,
      mergedWrapperCol: s,
      labelColCls: U,
      autoLabelWidth: o,
      layout: r,
      mergedLabelStyle: u,
      wrapperColCls: te,
      mergedWrapperStyle: d
    };
  }
});
function Th(e, t, n, l, o, r) {
  var a;
  const i = se("FormItemLabel"), s = se("ArcoCol"), u = se("FormItemMessage"), d = se("ArcoRow");
  return e.noStyle ? re(e.$slots, "default", {
    key: 0
  }) : (y(), ue(d, Se({
    key: 1,
    class: [e.cls, {
      [`${e.prefixCls}-has-help`]: Boolean((a = e.$slots.help) != null ? a : e.help)
    }],
    wrap: !(e.labelColFlex || e.autoLabelWidth),
    div: e.layout !== "horizontal" || e.hideLabel
  }, e.rowProps), {
    default: ne(() => [e.hideLabel ? le("v-if", !0) : (y(), ue(s, Se({
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
        }, () => [ye(be(e.label), 1)]) : le("v-if", !0)]),
        _: 3
      }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]),
      _: 3
    }, 16, ["class", "style"])), c(s, Se({
      class: e.wrapperColCls,
      style: e.mergedWrapperStyle
    }, e.mergedWrapperCol), {
      default: ne(() => [p("div", {
        class: G(`${e.prefixCls}-content-wrapper`)
      }, [p("div", {
        class: G([`${e.prefixCls}-content`, {
          [`${e.prefixCls}-content-flex`]: e.contentFlex
        }, e.contentClass])
      }, [re(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (y(), ue(u, {
        key: 0,
        error: e.finalMessage,
        help: e.help
      }, Ii({
        _: 2
      }, [e.$slots.help ? {
        name: "help",
        fn: ne(() => [re(e.$slots, "help")])
      } : void 0]), 1032, ["error", "help"])) : le("v-if", !0), e.$slots.extra || e.extra ? (y(), B("div", {
        key: 1,
        class: G(`${e.prefixCls}-extra`)
      }, [re(e.$slots, "extra", {}, () => [ye(be(e.extra), 1)])], 2)) : le("v-if", !0)]),
      _: 3
    }, 16, ["class", "style"])]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var tn = /* @__PURE__ */ ce(jh, [["render", Th]]);
const _s = Object.assign(Lo, {
  Item: tn,
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Lo.name, Lo), e.component(n + tn.name, tn);
  }
}), Mh = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "white-space", "overflow-wrap", "width"], Dh = (e) => {
  const t = {};
  return Mh.forEach((n) => {
    t[n] = e.getPropertyValue(n);
  }), t;
}, zh = L({
  name: "Textarea",
  components: {
    ResizeObserver: xl,
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
    } = ht({
      disabled: l,
      error: o
    }), d = I(), f = I(), m = I(), v = I(), g = I(e.defaultValue), _ = h(() => {
      var A;
      return (A = r.value) != null ? A : g.value;
    }), [z, P] = Xi(d);
    ge(r, (A) => {
      (Ze(A) || Sn(A)) && (g.value = "");
    });
    const V = h(() => Oe(e.maxLength) && Boolean(e.maxLength.errorOnly)), S = h(() => Oe(e.maxLength) ? e.maxLength.length : e.maxLength), k = (A) => {
      var M;
      return et(e.wordLength) ? e.wordLength(A) : (M = A.length) != null ? M : 0;
    }, D = h(() => k(_.value)), $ = h(() => s.value || Boolean(S.value && V.value && D.value > S.value)), O = I(!1), F = I(!1), q = h(() => e.allowClear && !i.value && _.value), E = I(!1), b = I(""), x = () => {
      z(), Fe(() => {
        d.value && _.value !== d.value.value && (d.value.value = _.value, P());
      });
    }, w = (A, M = !0) => {
      var X, oe;
      S.value && !V.value && k(A) > S.value && (A = (oe = (X = e.wordSlice) == null ? void 0 : X.call(e, A, S.value)) != null ? oe : A.slice(0, S.value)), g.value = A, M && t("update:modelValue", A), x();
    };
    let H = _.value;
    const Y = (A, M) => {
      var X, oe;
      A !== H && (H = A, t("change", A, M), (oe = (X = u.value) == null ? void 0 : X.onChange) == null || oe.call(X, M));
    }, W = (A) => {
      var M, X;
      F.value = !0, H = _.value, t("focus", A), (X = (M = u.value) == null ? void 0 : M.onFocus) == null || X.call(M, A);
    }, Z = (A) => {
      var M, X;
      F.value = !1, t("blur", A), (X = (M = u.value) == null ? void 0 : M.onBlur) == null || X.call(M, A), Y(_.value, A);
    }, U = (A) => {
      var M, X;
      const {
        value: oe
      } = A.target;
      if (A.type === "compositionend") {
        if (E.value = !1, b.value = "", S.value && !V.value && _.value.length >= S.value && k(oe) > S.value) {
          x();
          return;
        }
        t("input", oe, A), w(oe), (X = (M = u.value) == null ? void 0 : M.onInput) == null || X.call(M, A);
      } else
        E.value = !0;
    }, te = (A) => {
      var M, X;
      const {
        value: oe
      } = A.target;
      if (E.value)
        b.value = oe;
      else {
        if (S.value && !V.value && _.value.length >= S.value && k(oe) > S.value && A.inputType === "insertText") {
          x();
          return;
        }
        t("input", oe, A), w(oe), (X = (M = u.value) == null ? void 0 : M.onInput) == null || X.call(M, A);
      }
    }, j = (A) => {
      w(""), Y("", A), t("clear", A);
    };
    ge(r, (A) => {
      A !== _.value && w(A ?? "", !1);
    });
    const C = (A) => Yn(n, Rt), K = (A) => Xn(n, Rt), J = h(() => [`${a}-wrapper`, {
      [`${a}-focus`]: F.value,
      [`${a}-disabled`]: i.value,
      [`${a}-error`]: $.value,
      [`${a}-scroll`]: O.value
    }]);
    let he;
    const we = I(0), fe = I(0), Ae = h(() => !Oe(e.autoSize) || !e.autoSize.minRows ? 0 : e.autoSize.minRows * we.value + fe.value), Ce = h(() => !Oe(e.autoSize) || !e.autoSize.maxRows ? 0 : e.autoSize.maxRows * we.value + fe.value), Be = () => {
      const A = Dh(he);
      we.value = Number.parseInt(A["line-height"] || 0, 10), fe.value = Number.parseInt(A["border-width"] || 0, 10) * 2 + Number.parseInt(A["padding-top"] || 0, 10) + Number.parseInt(A["padding-bottom"] || 0, 10), v.value = A, Fe(() => {
        var M;
        const X = (M = m.value) == null ? void 0 : M.offsetHeight;
        let oe = X ?? 0, Te = "hidden";
        Ae.value && oe < Ae.value && (oe = Ae.value), Ce.value && oe > Ce.value && (oe = Ce.value, Te = "auto"), f.value = {
          height: `${oe}px`,
          resize: "none",
          overflow: Te
        };
      });
    };
    Ee(() => {
      d.value && (he = window.getComputedStyle(d.value), e.autoSize && Be()), at();
    });
    const dt = () => {
      e.autoSize && m.value && Be(), at();
    }, tt = (A) => {
      d.value && A.target !== d.value && (A.preventDefault(), d.value.focus());
    }, at = () => {
      d.value && (d.value.scrollHeight > d.value.offsetHeight ? O.value || (O.value = !0) : O.value && (O.value = !1));
    };
    return ge(_, () => {
      e.autoSize && m.value && Be(), at();
    }), {
      prefixCls: a,
      wrapperCls: J,
      textareaRef: d,
      textareaStyle: f,
      mirrorRef: m,
      mirrorStyle: v,
      computedValue: _,
      showClearBtn: q,
      valueLength: D,
      computedMaxLength: S,
      mergedDisabled: i,
      getWrapperAttrs: C,
      getTextareaAttrs: K,
      handleInput: te,
      handleFocus: W,
      handleBlur: Z,
      handleComposition: U,
      handleClear: j,
      handleResize: dt,
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
}), Ah = ["disabled", "value", "placeholder"];
function Lh(e, t, n, l, o, r) {
  const a = se("resize-observer"), i = se("icon-close"), s = se("icon-hover");
  return y(), B("div", Se(e.getWrapperAttrs(e.$attrs), {
    class: e.wrapperCls,
    onMousedown: t[7] || (t[7] = (...u) => e.handleMousedown && e.handleMousedown(...u))
  }), [e.autoSize ? (y(), B("div", {
    key: 0,
    ref: "mirrorRef",
    class: G(`${e.prefixCls}-mirror`),
    style: pe(e.mirrorStyle)
  }, be(`${e.computedValue}
`), 7)) : le("v-if", !0), c(a, {
    onResize: e.handleResize
  }, {
    default: ne(() => [p("textarea", Se({
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
    }), null, 16, Ah)]),
    _: 1
  }, 8, ["onResize"]), re(e.$slots, "suffix"), e.computedMaxLength && e.showWordLimit ? (y(), B("div", {
    key: 1,
    class: G(`${e.prefixCls}-word-limit`)
  }, be(e.valueLength) + "/" + be(e.computedMaxLength), 3)) : le("v-if", !0), e.showClearBtn ? (y(), B("div", {
    key: 2,
    class: G(`${e.prefixCls}-clear-btn`),
    onClick: t[6] || (t[6] = (...u) => e.handleClear && e.handleClear(...u))
  }, [c(s, null, {
    default: ne(() => [c(i)]),
    _: 1
  })], 2)) : le("v-if", !0)], 16);
}
var qo = /* @__PURE__ */ ce(zh, [["render", Lh]]);
const Fh = Object.assign(qo, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + qo.name, qo);
  }
}), Nh = L({
  name: "Message",
  components: {
    AIconHover: ct,
    IconInfoCircleFill: Yu,
    IconCheckCircleFill: Ki,
    IconExclamationCircleFill: Gi,
    IconCloseCircleFill: Yi,
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
    return Ee(() => {
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
function Rh(e, t, n, l, o, r) {
  const a = se("icon-info-circle-fill"), i = se("icon-check-circle-fill"), s = se("icon-exclamation-circle-fill"), u = se("icon-close-circle-fill"), d = se("icon-loading"), f = se("icon-close"), m = se("a-icon-hover");
  return y(), B("li", {
    role: "alert",
    class: G([e.prefixCls, `${e.prefixCls}-${e.type}`, {
      [`${e.prefixCls}-closable`]: e.closable
    }]),
    onMouseenter: t[1] || (t[1] = (...v) => e.handleMouseEnter && e.handleMouseEnter(...v)),
    onMouseleave: t[2] || (t[2] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [e.showIcon && !(e.type === "normal" && !e.$slots.icon) ? (y(), B("span", {
    key: 0,
    class: G(`${e.prefixCls}-icon`)
  }, [re(e.$slots, "icon", {}, () => [e.type === "info" ? (y(), ue(a, {
    key: 0
  })) : e.type === "success" ? (y(), ue(i, {
    key: 1
  })) : e.type === "warning" ? (y(), ue(s, {
    key: 2
  })) : e.type === "error" ? (y(), ue(u, {
    key: 3
  })) : e.type === "loading" ? (y(), ue(d, {
    key: 4
  })) : le("v-if", !0)])], 2)) : le("v-if", !0), p("span", {
    class: G(`${e.prefixCls}-content`)
  }, [re(e.$slots, "default")], 2), e.closable ? (y(), B("span", {
    key: 1,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: t[0] || (t[0] = (...v) => e.handleClose && e.handleClose(...v))
  }, [c(m, null, {
    default: ne(() => [c(f)]),
    _: 1
  })], 2)) : le("v-if", !0)], 34);
}
var qh = /* @__PURE__ */ ce(Nh, [["render", Rh]]);
function Hh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
var Wh = L({
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
    } = Ji("message", {
      runOnMounted: !0
    });
    return () => {
      let o;
      return c(Pi, {
        class: [n, `${n}-${e.position}`],
        name: "fade-message",
        tag: "ul",
        style: {
          zIndex: l.value
        },
        onAfterLeave: () => t.emit("afterClose")
      }, Hh(o = e.messages.map((r) => {
        const a = {
          default: tr(r.content),
          icon: tr(r.icon)
        };
        return c(qh, {
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
}), Uh = Object.defineProperty, Kh = Object.defineProperties, Gh = Object.getOwnPropertyDescriptors, pi = Object.getOwnPropertySymbols, Yh = Object.prototype.hasOwnProperty, Xh = Object.prototype.propertyIsEnumerable, vi = (e, t, n) => t in e ? Uh(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ml = (e, t) => {
  for (var n in t || (t = {}))
    Yh.call(t, n) && vi(e, n, t[n]);
  if (pi)
    for (var n of pi(t))
      Xh.call(t, n) && vi(e, n, t[n]);
  return e;
}, $s = (e, t) => Kh(e, Gh(t));
class Zh {
  constructor(t, n) {
    this.messageCount = 0, this.add = (r) => {
      var a;
      this.messageCount++;
      const i = (a = r.id) != null ? a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(i))
        return this.update(i, r);
      const s = Pe(Ml({
        id: i
      }, r));
      return this.messages.value.push(s), this.messageIds.add(i), {
        close: () => this.remove(i)
      };
    }, this.update = (r, a) => {
      for (let i = 0; i < this.messages.value.length; i++)
        if (this.messages.value[i].id === r) {
          const s = !Ze(a.duration);
          Object.assign(this.messages.value[i], $s(Ml({}, a), {
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
      this.messages.value.length === 0 && this.container && (Ga(null, this.container), document.body.removeChild(this.container), this.container = null, gn[this.position] = void 0);
    };
    const {
      position: l = "top"
    } = t;
    this.container = Tu("message"), this.messageIds = /* @__PURE__ */ new Set(), this.messages = I([]), this.position = l;
    const o = c(Wh, {
      messages: this.messages.value,
      position: l,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    (n ?? vt._context) && (o.appContext = n ?? vt._context), Ga(o, this.container), document.body.appendChild(this.container);
  }
}
const gn = {}, ws = [...dc, "loading", "normal"], yl = ws.reduce((e, t) => (e[t] = (n, l) => {
  kt(n) && (n = {
    content: n
  });
  const o = Ml({
    type: t
  }, n), {
    position: r = "top"
  } = o;
  return gn[r] || (gn[r] = new Zh(o, l)), gn[r].add(o);
}, e), {});
yl.clear = (e) => {
  var t;
  e ? (t = gn[e]) == null || t.clear() : Object.values(gn).forEach((n) => n == null ? void 0 : n.clear());
};
const vt = $s(Ml({}, yl), {
  install: (e) => {
    const t = {
      clear: yl.clear
    };
    for (const n of ws)
      t[n] = (l, o = e._context) => yl[n](l, o);
    e.config.globalProperties.$message = t;
  },
  _context: null
}), Qh = L({
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
    const n = ee("slider-btn"), l = I(!1), o = (f) => {
      e.disabled || (f.preventDefault(), l.value = !0, Et(window, "mousemove", r), Et(window, "mouseup", a), Et(window, "contextmenu", a), t("movestart"));
    }, r = (f) => {
      t("moving", f.clientX, f.clientY);
    }, a = () => {
      l.value = !1, $n(window, "mousemove", r), $n(window, "mouseup", a), t("moveend");
    }, i = h(() => [n]), s = h(() => {
      var f;
      return ((f = e.tooltipPosition) != null ? f : e.direction === "vertical") ? "right" : "top";
    }), u = h(() => {
      var f, m;
      return (m = (f = e.formatTooltip) == null ? void 0 : f.call(e, e.value)) != null ? m : `${e.value}`;
    }), d = h(() => e.showTooltip ? l.value ? !0 : void 0 : !1);
    return {
      prefixCls: n,
      cls: i,
      tooltipContent: u,
      mergedTooltipPosition: s,
      popupVisible: d,
      handleMouseDown: o
    };
  }
}), Jh = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function em(e, t, n, l, o, r) {
  const a = se("tooltip");
  return y(), ue(a, {
    "popup-visible": e.popupVisible,
    position: e.mergedTooltipPosition,
    content: e.tooltipContent
  }, {
    default: ne(() => [p("div", Se(e.$attrs, {
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
    }), null, 16, Jh)]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var tm = /* @__PURE__ */ ce(Qh, [["render", em]]);
const Lt = (e, [t, n]) => {
  const l = Math.max((e - t) / (n - t), 0);
  return `${ln.round(l * 100, 2)}%`;
}, Jl = (e, t) => t === "vertical" ? {
  bottom: e
} : {
  left: e
}, nm = L({
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
      getStyle: (l) => Jl(Lt(l, [e.min, e.max]), e.direction)
    };
  }
});
function lm(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(`${e.prefixCls}-dots`)
  }, [(y(!0), B(je, null, bt(e.data, (a, i) => (y(), B("div", {
    key: i,
    class: G(`${e.prefixCls}-dot-wrapper`),
    style: pe(e.getStyle(a.key))
  }, [p("div", {
    class: G([`${e.prefixCls}-dot`, {
      [`${e.prefixCls}-dot-active`]: a.isActive
    }])
  }, null, 2)], 6))), 128))], 2);
}
var om = /* @__PURE__ */ ce(nm, [["render", lm]]);
const am = L({
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
      getStyle: (l) => Jl(Lt(l, [e.min, e.max]), e.direction)
    };
  }
});
function rm(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(`${e.prefixCls}-marks`)
  }, [(y(!0), B(je, null, bt(e.data, (a, i) => (y(), B("div", {
    key: i,
    "aria-hidden": "true",
    class: G(`${e.prefixCls}-mark`),
    style: pe(e.getStyle(a.key))
  }, be(a.content), 7))), 128))], 2);
}
var im = /* @__PURE__ */ ce(am, [["render", rm]]);
const sm = L({
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
    const t = ee("slider"), n = h(() => {
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
      getStyle: (o) => Jl(Lt(o, [e.min, e.max]), e.direction)
    };
  }
});
function um(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(`${e.prefixCls}-ticks`)
  }, [(y(!0), B(je, null, bt(e.steps, (a, i) => (y(), B("div", {
    key: i,
    class: G([`${e.prefixCls}-tick`, {
      [`${e.prefixCls}-tick-active`]: a.isActive
    }]),
    style: pe(e.getStyle(a.key))
  }, null, 6))), 128))], 2);
}
var cm = /* @__PURE__ */ ce(sm, [["render", um]]);
const dm = L({
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
function fm(e, t, n, l, o, r) {
  const a = se("input-number");
  return y(), B("div", {
    class: G(`${e.prefixCls}-input`)
  }, [e.range ? (y(), B(je, {
    key: 0
  }, [c(a, {
    min: e.min,
    max: e.max,
    step: e.step,
    disabled: e.disabled,
    "model-value": e.modelValue[0],
    "hide-button": "",
    onChange: t[0] || (t[0] = (i) => e.$emit("startChange", i))
  }, null, 8, ["min", "max", "step", "disabled", "model-value"]), p("div", {
    class: G(`${e.prefixCls}-input-hyphens`)
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
var pm = /* @__PURE__ */ ce(dm, [["render", fm]]);
const vm = L({
  name: "Slider",
  components: {
    SliderButton: tm,
    SliderDots: om,
    SliderMarks: im,
    SliderTicks: cm,
    SliderInput: pm
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
    } = ht({
      disabled: Sl(e, "disabled")
    }), a = I(null), i = I(), s = e.modelValue ? e.modelValue : e.defaultValue, u = I(ze(s) ? s[0] : 0), d = I(ze(s) ? s[1] : s);
    ge(n, (b) => {
      var x, w, H, Y, W;
      ze(b) ? (u.value = (w = (x = b[0]) != null ? x : e.min) != null ? w : 0, d.value = (Y = (H = b[1]) != null ? H : e.min) != null ? Y : 0) : d.value = (W = b ?? e.min) != null ? W : 0;
    });
    const f = () => {
      var b, x;
      e.range ? (t("update:modelValue", [u.value, d.value]), t("change", [u.value, d.value])) : (t("update:modelValue", d.value), t("change", d.value)), (x = (b = r.value) == null ? void 0 : b.onChange) == null || x.call(b);
    }, m = (b) => {
      b = b ?? e.min, u.value = b, f();
    }, v = (b) => {
      b = b ?? e.min, d.value = b, f();
    }, g = h(() => {
      var b, x, w;
      return e.range ? ze(e.modelValue) ? e.modelValue : [u.value, (b = e.modelValue) != null ? b : d.value] : Ze(e.modelValue) ? [u.value, d.value] : ze(e.modelValue) ? [(x = e.min) != null ? x : 0, e.modelValue[1]] : [(w = e.min) != null ? w : 0, e.modelValue];
    }), _ = h(() => Object.keys(e.marks || {}).map((b) => {
      var x;
      const w = Number(b);
      return {
        key: w,
        content: (x = e.marks) == null ? void 0 : x[w],
        isActive: w >= g.value[0] && w <= g.value[1]
      };
    })), z = (b) => Jl(Lt(b, [e.min, e.max]), e.direction), P = I(!1), V = () => {
      P.value = !0, a.value && (i.value = a.value.getBoundingClientRect());
    };
    function S(b, x) {
      if (!i.value)
        return 0;
      const {
        left: w,
        top: H,
        width: Y,
        height: W
      } = i.value, Z = e.direction === "horizontal" ? Y : W, U = Z * e.step / (e.max - e.min);
      let te = e.direction === "horizontal" ? b - w : H + W - x;
      te < 0 && (te = 0), te > Z && (te = Z);
      const j = Math.round(te / U);
      return ln.plus(e.min, ln.times(j, e.step));
    }
    const k = (b, x) => {
      d.value = S(b, x), f();
    }, D = (b) => {
      if (o.value)
        return;
      const {
        clientX: x,
        clientY: w
      } = b;
      a.value && (i.value = a.value.getBoundingClientRect()), d.value = S(x, w), f();
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
    const O = (b, x) => {
      u.value = S(b, x), f();
    }, F = () => {
      P.value = !1;
    }, q = h(() => [l, {
      [`${l}-vertical`]: e.direction === "vertical",
      [`${l}-with-marks`]: Boolean(e.marks)
    }]), E = h(() => [`${l}-track`, {
      [`${l}-track-disabled`]: o.value,
      [`${l}-track-vertical`]: e.direction === "vertical"
    }]);
    return {
      prefixCls: l,
      cls: q,
      trackCls: E,
      trackRef: a,
      computedValue: g,
      mergedDisabled: o,
      markList: _,
      getBtnStyle: z,
      getBarStyle: $,
      handleClick: D,
      handleMoveStart: V,
      handleEndMoving: k,
      handleMoveEnd: F,
      handleStartMoving: O,
      handleStartChange: m,
      handleEndChange: v
    };
  }
});
function hm(e, t, n, l, o, r) {
  const a = se("slider-ticks"), i = se("slider-dots"), s = se("slider-marks"), u = se("slider-button"), d = se("slider-input");
  return y(), B("div", {
    class: G(e.cls)
  }, [p("div", {
    ref: "trackRef",
    class: G(e.trackCls),
    onClick: t[0] || (t[0] = (...f) => e.handleClick && e.handleClick(...f))
  }, [p("div", {
    class: G(`${e.prefixCls}-bar`),
    style: pe(e.getBarStyle(e.computedValue))
  }, null, 6), e.showTicks ? (y(), ue(a, {
    key: 0,
    value: e.computedValue,
    step: e.step,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["value", "step", "min", "max", "direction"])) : le("v-if", !0), e.marks ? (y(), ue(i, {
    key: 1,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : le("v-if", !0), e.marks ? (y(), ue(s, {
    key: 2,
    data: e.markList,
    min: e.min,
    max: e.max,
    direction: e.direction
  }, null, 8, ["data", "min", "max", "direction"])) : le("v-if", !0), e.range ? (y(), ue(u, {
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])) : le("v-if", !0), c(u, {
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
  }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])], 2), e.showInput ? (y(), ue(d, {
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
var Ho = /* @__PURE__ */ ce(vm, [["render", hm]]);
const ks = Object.assign(Ho, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Ho.name, Ho);
  }
});
var Wo = L({
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
    const n = ee("space"), l = h(() => {
      var i;
      return (i = e.align) != null ? i : e.direction === "horizontal" ? "center" : "";
    }), o = h(() => [n, {
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
      const s = ml((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== Zs);
      return c("div", {
        class: o.value
      }, [s.map((u, d) => {
        var f, m;
        const v = t.split && d > 0;
        return c(je, {
          key: (f = u.key) != null ? f : `item-${d}`
        }, [v && c("div", {
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
const mm = Object.assign(Wo, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Wo.name, Wo);
  }
}), gm = L({
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
    } = ht({
      disabled: n,
      size: a
    }), d = I(e.defaultChecked ? e.checkedValue : e.uncheckedValue), f = h(() => {
      var k;
      return ((k = e.modelValue) != null ? k : d.value) === e.checkedValue;
    }), m = I(e.loading), v = h(() => m.value || e.loading), g = (k, D) => {
      var $, O;
      d.value = k ? e.checkedValue : e.uncheckedValue, t("update:modelValue", d.value), t("change", d.value, D), (O = ($ = u.value) == null ? void 0 : $.onChange) == null || O.call($, D);
    }, _ = async (k) => {
      if (v.value || i.value)
        return;
      const D = !f.value, $ = D ? e.checkedValue : e.uncheckedValue, O = e.beforeChange;
      if (et(O)) {
        m.value = !0;
        try {
          const F = await O($);
          (F ?? !0) && g(D, k);
        } finally {
          m.value = !1;
        }
      } else
        g(D, k);
    }, z = (k) => {
      var D, $;
      t("focus", k), ($ = (D = u.value) == null ? void 0 : D.onFocus) == null || $.call(D, k);
    }, P = (k) => {
      var D, $;
      t("blur", k), ($ = (D = u.value) == null ? void 0 : D.onBlur) == null || $.call(D, k);
    };
    ge(o, (k) => {
      (Ze(k) || Sn(k)) && (d.value = e.uncheckedValue);
    });
    const V = h(() => [r, `${r}-type-${e.type}`, {
      [`${r}-small`]: s.value === "small" || s.value === "mini",
      [`${r}-checked`]: f.value,
      [`${r}-disabled`]: i.value,
      [`${r}-loading`]: v.value,
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
      cls: V,
      mergedDisabled: i,
      buttonStyle: S,
      computedCheck: f,
      computedLoading: v,
      handleClick: _,
      handleFocus: z,
      handleBlur: P
    };
  }
}), bm = ["aria-checked", "disabled"];
function ym(e, t, n, l, o, r) {
  const a = se("icon-loading");
  return y(), B("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: G(e.cls),
    style: pe(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: t[1] || (t[1] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: t[2] || (t[2] = (...i) => e.handleBlur && e.handleBlur(...i))
  }, [p("span", {
    class: G(`${e.prefixCls}-handle`)
  }, [p("span", {
    class: G(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? (y(), ue(a, {
    key: 0
  })) : (y(), B(je, {
    key: 1
  }, [e.computedCheck ? re(e.$slots, "checked-icon", {
    key: 0
  }) : re(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), le("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (y(), B(je, {
    key: 0
  }, [p("span", {
    class: G(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [ye(be(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [ye(be(e.uncheckedText), 1)])], 2), p("span", {
    class: G(`${e.prefixCls}-text`)
  }, [e.computedCheck ? re(e.$slots, "checked", {
    key: 0
  }, () => [ye(be(e.checkedText), 1)]) : re(e.$slots, "unchecked", {
    key: 1
  }, () => [ye(be(e.uncheckedText), 1)])], 2)], 64)) : le("v-if", !0)], 46, bm);
}
var Uo = /* @__PURE__ */ ce(gm, [["render", ym]]);
const $t = Object.assign(Uo, {
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Uo.name, Uo);
  }
}), _m = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, La = Symbol("ArcoTabs"), $m = L({
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
    const n = ee("tabs-tab"), l = Ue(La, {}), o = (u) => {
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
function wm(e, t, n, l, o, r) {
  const a = se("icon-close"), i = se("icon-hover");
  return y(), B("div", Se({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [p("span", {
    class: G(`${e.prefixCls}-title`)
  }, [re(e.$slots, "default")], 2), e.editable && e.tab.closable ? (y(), ue(i, {
    key: 0,
    class: G(`${e.prefixCls}-close-btn`),
    onClick: nn(e.handleDelete, ["stop"])
  }, {
    default: ne(() => [c(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : le("v-if", !0)], 16);
}
var km = /* @__PURE__ */ ce($m, [["render", wm]]);
function Cm(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_a(e);
}
var hi = L({
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
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? c(Hf, null, null) : c(wp, null, null) : e.type === "next" ? c(Pa, null, null) : c(as, null, null), r = h(() => [n, {
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
      }, Cm(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const Sm = L({
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
    } = $e(e), n = ee("tabs-nav-ink"), l = I(0), o = I(0), r = h(() => e.direction === "vertical" ? {
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
      Fe(() => a());
    }), Pt(() => {
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
function Vm(e, t, n, l, o, r) {
  return y(), B("div", {
    class: G(e.cls),
    style: pe(e.style)
  }, null, 6);
}
var Om = /* @__PURE__ */ ce(Sm, [["render", Vm]]), Em = L({
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
    } = $e(e), i = ee("tabs-nav"), s = I(), u = I(), d = I({}), f = h(() => {
      if (!Ze(o.value))
        return d.value[o.value];
    }), m = I(), v = h(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), g = I(!1), _ = I(0), z = I(0), P = I([]), V = I(0), S = () => {
      var j, C, K;
      return (K = a.value === "vertical" ? (j = s.value) == null ? void 0 : j.offsetHeight : (C = s.value) == null ? void 0 : C.offsetWidth) != null ? K : 0;
    }, k = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, D = () => l.value.map((j) => {
      const C = d.value[j.key];
      return a.value === "vertical" ? C.offsetTop + C.offsetHeight : C.offsetLeft + C.offsetWidth;
    }), $ = () => {
      g.value = O(), g.value ? (_.value = S(), z.value = k(), P.value = D(), V.value > z.value && (V.value = z.value)) : V.value = 0;
    }, O = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, F = (j) => {
      var C;
      return ((C = P.value[j - 1]) != null ? C : 0) >= V.value && P.value[j] <= V.value + _.value;
    }, q = (j) => s.value ? j === "previous" ? V.value - _.value : V.value + _.value : 0, E = (j) => !s.value || !u.value || j < 0 ? 0 : j > z.value ? z.value : j, b = (j, C) => {
      t("click", j, C);
    }, x = (j, C) => {
      t("delete", j, C);
    }, w = (j) => {
      V.value = E(q(j));
    }, H = () => {
      $(), m.value && m.value.$forceUpdate();
    };
    ge(l, () => {
      Fe(() => {
        $();
      });
    }), ge(r, (j, C) => {
      Fe(() => {
        var K;
        if (g.value)
          if (j >= C) {
            const J = j < P.value.length - 1 ? j + 1 : j;
            F(J) || (V.value = P.value[J] - _.value);
          } else {
            const J = j > 0 ? j - 1 : j;
            F(J) || (V.value = (K = P.value[J - 1]) != null ? K : 0);
          }
      });
    }), Ee(() => {
      $();
    });
    const Y = () => !v.value || !e.showAddButton ? null : c("div", {
      class: `${i}-add-btn`,
      onClick: (j) => t("add", j)
    }, [c(ct, null, {
      default: () => [c(ds, null, null)]
    })]), W = h(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), Z = h(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), U = h(() => _m({
      direction: e.direction,
      type: e.type,
      offset: V.value
    })), te = h(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: g.value
    }]);
    return () => {
      var j;
      return c("div", {
        class: W.value
      }, [g.value && c(hi, {
        type: "previous",
        direction: e.direction,
        disabled: V.value <= 0,
        onClick: w
      }, null), c(xl, {
        onResize: () => $()
      }, {
        default: () => [c("div", {
          class: te.value,
          ref: s
        }, [c(xl, {
          onResize: H
        }, {
          default: () => [c("div", {
            ref: u,
            class: Z.value,
            style: U.value
          }, [e.tabs.map((C, K) => c(km, {
            key: C.key,
            ref: (J) => {
              J != null && J.$el && (d.value[C.key] = J.$el);
            },
            active: C.key === o.value,
            tab: C,
            editable: e.editable,
            onClick: b,
            onDelete: x
          }, {
            default: () => {
              var J, he, we;
              return [(we = (he = (J = C.slots).title) == null ? void 0 : he.call(J)) != null ? we : C.title];
            }
          })), e.type === "line" && f.value && c(Om, {
            ref: m,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !g.value && Y()])]
      }), g.value && c(hi, {
        type: "next",
        direction: e.direction,
        disabled: V.value >= z.value,
        onClick: w
      }, null), c("div", {
        class: `${i}-extra`
      }, [g.value && Y(), (j = n.extra) == null ? void 0 : j.call(n)])]);
    };
  }
}), Ko = L({
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
    } = yt(l), u = h(() => e.direction === "vertical" ? "left" : e.position), d = h(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: f,
      components: m
    } = Ep("TabPane"), v = Pe(/* @__PURE__ */ new Map()), g = h(() => {
      const b = [];
      return m.value.forEach((x) => {
        const w = v.get(x);
        w && b.push(w);
      }), b;
    }), _ = h(() => g.value.map((b) => b.key)), z = (b, x) => {
      v.set(b, x);
    }, P = (b) => {
      v.delete(b);
    }, V = I(e.defaultActiveKey), S = h(() => {
      var b;
      const x = (b = e.activeKey) != null ? b : V.value;
      return Ze(x) ? _.value[0] : x;
    }), k = h(() => {
      const b = _.value.indexOf(S.value);
      return b === -1 ? 0 : b;
    });
    Ht(La, Pe({
      lazyLoad: o,
      destroyOnHide: r,
      activeKey: S,
      addItem: z,
      removeItem: P,
      trigger: a
    }));
    const D = (b) => {
      b !== S.value && (V.value = b, t("update:activeKey", b), t("change", b));
    }, $ = (b, x) => {
      D(b), t("tabClick", b, x);
    }, O = (b) => {
      t("add", b), e.autoSwitch && Fe(() => {
        const x = _.value[_.value.length - 1];
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
        marginLeft: `-${k.value * 100}%`
      }
    }, [f.value])]), E = h(() => [i, `${i}-${d.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var b;
      return f.value = (b = n.default) == null ? void 0 : b.call(n), c("div", {
        class: E.value
      }, [u.value === "bottom" && q(), c(Em, {
        tabs: g.value,
        activeKey: S.value,
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
        onAdd: O,
        onDelete: F
      }, {
        extra: n.extra
      }), u.value !== "bottom" && q()]);
    };
  }
}), xm = Object.defineProperty, mi = Object.getOwnPropertySymbols, Bm = Object.prototype.hasOwnProperty, Im = Object.prototype.propertyIsEnumerable, gi = (e, t, n) => t in e ? xm(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Pm = (e, t) => {
  for (var n in t || (t = {}))
    Bm.call(t, n) && gi(e, n, t[n]);
  if (mi)
    for (var n of mi(t))
      Im.call(t, n) && gi(e, n, t[n]);
  return e;
};
const jm = L({
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
    } = $e(e), a = Kn(), i = ee("tabs"), s = Ue(La, {}), u = I(), d = h(() => a == null ? void 0 : a.vnode.key), f = h(() => d.value === s.activeKey), m = I(s.lazyLoad ? f.value : !0), v = Pe({
      key: d,
      title: l,
      disabled: o,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, v)), Wt(() => {
      var g;
      a != null && a.uid && ((g = s.removeItem) == null || g.call(s, a.uid));
    }), ge(f, (g) => {
      g ? m.value || (m.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (m.value = !1);
    }), Pt(() => {
      v.slots = Pm({}, t);
    }), {
      prefixCls: i,
      active: f,
      itemRef: u,
      mounted: m
    };
  }
});
function Tm(e, t, n, l, o, r) {
  return y(), B("div", {
    ref: "itemRef",
    class: G([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (y(), B("div", {
    key: 0,
    class: G(`${e.prefixCls}-pane`)
  }, [re(e.$slots, "default")], 2)) : le("v-if", !0)], 2);
}
var An = /* @__PURE__ */ ce(jm, [["render", Tm]]);
const bi = Object.assign(Ko, {
  TabPane: An,
  install: (e, t) => {
    We(e, t);
    const n = He(t);
    e.component(n + Ko.name, Ko), e.component(n + An.name, An);
  }
}), Mm = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png",
  alt: "",
  class: "normal"
}), /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png",
  alt: "",
  class: "active"
})], -1), Dm = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
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
})], -1), zm = /* @__PURE__ */ p("span", null, [/* @__PURE__ */ p("img", {
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
})], -1), Am = /* @__PURE__ */ L({
  __name: "editor-bloack-operate",
  emits: ["operate"],
  setup(e, {
    emit: t
  }) {
    function n(l) {
      t("operate", l);
    }
    return (l, o) => {
      const r = Zn;
      return y(), B("div", {
        class: "editor-bloack-operate",
        onClick: o[3] || (o[3] = () => {
        })
      }, [p("div", {
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
        default: ne(() => [Mm]),
        _: 1
      })]), p("div", {
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
        default: ne(() => [Dm]),
        _: 1
      })]), p("div", {
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
        default: ne(() => [zm]),
        _: 1
      })])]);
    };
  }
});
const pa = /* @__PURE__ */ L({
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
    editorBloackOperate: Am
  },
  setup(e, {
    emit: t
  }) {
    let n = Le == null ? void 0 : Le.componentMap[e.block.componentKey];
    const l = h(() => {
      if (e.block.dragMode == "free") {
        let i = {
          position: "absolute",
          left: e.block.left + "px",
          top: e.block.top + "px",
          zIndex: e.block.zIndex,
          width: e.block.widthAdaption100 ? "100%" : "auto"
        };
        return n != null && n.editorBlockShellStyle ? n.editorBlockShellStyle(e.block, i) : i;
      } else if (e.block.dragMode == "updown" || e.block.dragMode == "default" || e.block.dragMode == "") {
        let i = {
          margin: "0 auto",
          width: "100%",
          // width: props.block.widthAdaption100
          //   ? "100%"
          //   : props.container.width + "px",
          position: "relative"
        };
        return n != null && n.editorBlockShellStyle ? n.editorBlockShellStyle(e.block, i) : i;
      }
      return {};
    }), o = I({});
    Ee(() => {
      e.block.adjustmentPosition && e.block.dragMode == "free" && (e.block.left = e.block.left - o.value.offsetWidth / 2, e.block.top = e.block.top - o.value.offsetHeight / 2, e.block.adjustmentPosition = !1, e.block.width = o.value.offsetWidth, e.block.height = o.value.offsetHeight);
    });
    let r = h(() => ["editor-bloack", e.block.focus ? "editor-bloack-focus" : ""]);
    function a(i) {
      t(i);
    }
    return () => e.block.dragMode == "free" ? c("div", {
      class: r.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? c(se("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : e.block.dragMode == "default" || e.block.dragMode == "updown" || e.block.dragMode == "" ? c("div", {
      class: r.value,
      style: l.value,
      ref: o,
      "data-index": e.index
    }, [n == null ? void 0 : n.render(e.block), e.block.focus && !e.priview ? c(se("editor-bloack-operate"), {
      onOperate: a
    }, null) : null]) : c("div", {
      style: {
        backgroundColor: "gray"
      }
    }, [c(se("grid-item"), {
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
function Lm(e) {
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
      let v = m.join("+");
      t.commandArray.forEach((g) => {
        let {
          keyboard: _,
          name: z
        } = g;
        _ && (typeof _ == "string" && (_ = [_]), _ = _.map((P) => P.replace(/\s+/g, "")), _ != null && _.includes(v) && (t.commandMap[z](), i.stopPropagation()));
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
class Cs {
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
new Cs();
let bn = new Cs();
const Dl = {
  on: function(e) {
    bn.on("dragstart", e);
  },
  emit: function(...e) {
    bn.emit("dragstart", ...e);
  },
  off: function(e) {
    bn.off("dragstart", e);
  }
}, zl = {
  on: function(e) {
    bn.on("dragend", e);
  },
  emit: function(...e) {
    bn.emit("dragend", ...e);
  },
  off: function(e) {
    bn.off("dragend", e);
  }
};
function Je(e) {
  if (e && typeof e == "object") {
    if (typeof e == "function") {
      let l = e.bind(null);
      return l.prototype = Je(e.prototype), l;
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
          t[l] = Je(e[l]);
        return t;
      case "[object Object]":
        var n = {};
        for (let l in e)
          n[l] = Je(e[l]);
        return n;
    }
  } else
    return e;
}
function Fm(e, t, n, l) {
  const o = [{
    label: "删除",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726286985855114a17262869858559088_dl.png",
    handler: () => {
      var r;
      (r = t.value.focusBlock) != null && r.length && e.delete();
    },
    tip: "delete"
  }, {
    label: "清空",
    icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262860792458a37172628607924683951_clean.png",
    handler: () => {
      var r;
      (r = t.value.focusBlock) != null && r.length && e.clear();
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
      console.log(l), console.log(JSON.stringify(l.modelValue.blocks));
    },
    tip: ""
  }), o;
}
function yi(e, t) {
  let n = e.componentKey;
  return !t.find((l) => l.componentKey === n);
}
function Nm({
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
  let o = Lm(l);
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
          this.data.before = Je(n.value.blocks || []);
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
      let r = Je(this.data.before), a = Je(n.value.blocks || []);
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
          r.before = Je(n.value.blocks || []), r.after = [], t(r.after);
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
          r.before = Je(n.value.blocks);
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
          r.before = Je(n.value.blocks);
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
            i.before = Je(s), s.push(r), i.after = s, t(i.after);
          } else {
            let s = n.value.blocks;
            i.before = Je(s), s.splice(a, 0, r), i.after = s, t(i.after);
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
            vt.warning("元素不需要移动！");
            return;
          }
          let i = a.findIndex((d) => d.focus);
          if (i < 0) {
            vt.warning("当前没有要移动的元素！");
            return;
          }
          if (i == 0) {
            vt.warning("移动无效！");
            return;
          }
          r.before = Je(a);
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
            vt.warning("移动无效！");
            return;
          }
          let i = a.findIndex((d) => d.focus);
          if (i < 0) {
            vt.warning("当前没有要移动的元素！");
            return;
          }
          if (i == a.length - 1) {
            vt.warning("移动的无效！");
            return;
          }
          r.before = Je(a);
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
const Rm = (e) => new Promise((t, n) => {
  const l = new FileReader();
  l.readAsDataURL(e), l.onload = () => {
    t(l.result);
  }, l.onerror = (o) => {
    n(o);
  };
}), qm = (e) => (Ke("data-v-bfe27548"), e = e(), Ge(), e), Hm = {
  class: "img-upload-container w100"
}, Wm = {
  key: 0,
  class: "real-img w100"
}, Um = ["src"], Km = /* @__PURE__ */ qm(() => /* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png",
  alt: ""
}, null, -1)), Gm = [Km], Ym = /* @__PURE__ */ L({
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
        Rm(o).then((r) => {
          t("update:modelValue", r), t("change", r);
        });
      },
      del() {
        t("update:modelValue", ""), t("change", "");
      }
    };
    return (l, o) => {
      const r = wn;
      return y(), B("div", Hm, [e.modelValue ? (y(), B("div", Wm, [p("img", {
        src: e.modelValue,
        alt: ""
      }, null, 8, Um), p("div", {
        class: "real-close",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...a) => n.del && n.del(...a))
      }, Gm)])) : le("", !0), c(r, {
        style: {
          width: "100%"
        },
        class: "file-btn"
      }, {
        default: ne(() => [ye(be(e.modelValue ? "替换图片" : "上传图片") + " ", 1), p("input", {
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
const Ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Fa = /* @__PURE__ */ Ve(Ym, [["__scopeId", "data-v-bfe27548"]]), Xm = {
  key: 0
}, Zm = {
  key: 1
}, Qm = {
  key: 0,
  class: "ml12"
}, Jm = {
  key: 2
}, eg = {
  key: 3
}, tg = {
  key: 0,
  class: "ml12"
}, ng = {
  key: 4,
  class: "w100"
}, lg = {
  key: 0,
  class: "ml12"
}, og = {
  key: 5,
  class: "w100"
}, ag = {
  key: 6,
  class: "w100"
}, rg = /* @__PURE__ */ L({
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
      const l = Ma, o = Kt, r = Fh, a = Vt, i = ks, s = mm, u = mn, d = ja, f = tn, m = _s;
      return y(), ue(m, {
        style: {
          width: "'100%'"
        },
        "label-align": "left",
        "auto-label-width": "",
        layout: "vertical",
        model: {}
      }, {
        default: ne(() => [(y(!0), B(je, null, bt(e.editorControlView, (v, g) => (y(), ue(f, {
          label: v.label,
          key: g
        }, {
          default: ne(() => {
            var _, z, P, V, S, k, D, $, O, F, q, E, b, x;
            return [v.type == "color" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", Xm, [c(l, {
              modelValue: e.currentBlock.props[v.key].defaultValue,
              "onUpdate:modelValue": (w) => e.currentBlock.props[v.key].defaultValue = w,
              "show-history": "",
              "show-preset": "",
              showText: "",
              disabledAlpha: "",
              disabled: !!((_ = e.currentBlock.props[v.key]) != null && _.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])) : le("", !0), v.type == "input" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", Zm, [c(o, {
              style: {
                width: "250px"
              },
              placeholder: `请输入${v.label}`,
              modelValue: e.currentBlock.props[v.key].defaultValue,
              "onUpdate:modelValue": (w) => e.currentBlock.props[v.key].defaultValue = w,
              disabled: !!((z = e.currentBlock.props[v.key]) != null && z.disabled)
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled"]), (P = e.currentBlock.props[v.key]) != null && P.unit ? (y(), B("span", Qm, be((V = e.currentBlock.props[v.key]) == null ? void 0 : V.unit), 1)) : le("", !0)])) : le("", !0), v.type == "textarea" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", Jm, [c(r, {
              "auto-size": {
                minRows: 2,
                maxRows: 6
              },
              modelValue: e.currentBlock.props[v.key].defaultValue,
              "onUpdate:modelValue": (w) => e.currentBlock.props[v.key].defaultValue = w,
              style: {
                width: "250px"
              },
              placeholder: `请输入${v.label}`,
              "allow-clear": "",
              disabled: !!((S = e.currentBlock.props[v.key]) != null && S.disabled)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])])) : le("", !0), v.type == "number" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", eg, [c(a, {
              modelValue: e.currentBlock.props[v.key].defaultValue,
              "onUpdate:modelValue": (w) => e.currentBlock.props[v.key].defaultValue = w,
              style: {
                width: "150px"
              },
              placeholder: `请输入${v.label}`,
              disabled: !!((k = e.currentBlock.props[v.key]) != null && k.disabled),
              min: (D = e.currentBlock.props[v.key]) != null && D.min ? (($ = e.currentBlock.props[v.key]) == null ? void 0 : $.min) * 1 : 0,
              max: (O = e.currentBlock.props[v.key]) != null && O.max ? ((F = e.currentBlock.props[v.key]) == null ? void 0 : F.max) * 1 : 100,
              mode: "button",
              size: "large"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "min", "max"]), (q = e.currentBlock.props[v.key]) != null && q.unit ? (y(), B("span", tg, be((E = e.currentBlock.props[v.key]) == null ? void 0 : E.unit), 1)) : le("", !0)])) : le("", !0), v.type == "slider" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", ng, [c(s, {
              size: "large"
            }, {
              default: ne(() => {
                var w, H, Y, W, Z;
                return [c(i, {
                  min: (w = e.currentBlock.props[v.key]) != null && w.min ? ((H = e.currentBlock.props[v.key]) == null ? void 0 : H.min) * 1 : 0,
                  max: (Y = e.currentBlock.props[v.key]) != null && Y.max ? ((W = e.currentBlock.props[v.key]) == null ? void 0 : W.max) * 1 : 100,
                  disabled: !!((Z = e.currentBlock.props[v.key]) != null && Z.disabled),
                  modelValue: e.currentBlock.props[v.key].defaultValue,
                  "onUpdate:modelValue": (U) => e.currentBlock.props[v.key].defaultValue = U,
                  style: {
                    width: "250px",
                    display: "flex"
                  },
                  "show-input": ""
                }, null, 8, ["min", "max", "disabled", "modelValue", "onUpdate:modelValue"])];
              }),
              _: 2
            }, 1024), (b = e.currentBlock.props[v.key]) != null && b.unit ? (y(), B("span", lg, be((x = e.currentBlock.props[v.key]) == null ? void 0 : x.unit), 1)) : le("", !0)])) : le("", !0), v.type == "imgUpload" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", og, [c(Fa, {
              modelValue: e.currentBlock.props[v.key].defaultValue,
              "onUpdate:modelValue": (w) => e.currentBlock.props[v.key].defaultValue = w
            }, null, 8, ["modelValue", "onUpdate:modelValue"])])) : le("", !0), v.type == "select" && "defaultValue" in e.currentBlock.props[v.key] ? (y(), B("div", ag, [c(d, {
              style: {
                width: "250px"
              },
              placeholder: `请选择${v.label}`,
              modelValue: e.currentBlock.props[v.key].defaultValue,
              "onUpdate:modelValue": (w) => e.currentBlock.props[v.key].defaultValue = w,
              "allow-clear": ""
            }, {
              default: ne(() => [(y(!0), B(je, null, bt(e.currentBlock.props[v.key].options, (w, H) => (y(), ue(u, {
                key: H,
                value: w.value
              }, {
                default: ne(() => [ye(be(w.name), 1)]),
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
const ig = /* @__PURE__ */ Ve(rg, [["__scopeId", "data-v-5efd1334"]]);
function sg(e, t, n, l) {
  let o = e(), r = t.value.cBlock || {}, a = r.props ? r.props : {}, i = I([]);
  Object.keys(a).forEach((d) => {
    a[d].type && (a[d].key = d, i.value.push(a[d]));
  });
  let s = c(ig), u = c(Fa);
  return c("div", {
    style: "height: 100%"
  }, [t.value.focusBlock.length ? c("div", {
    class: "control-container"
  }, [c(bi, {
    type: "line",
    size: "large",
    key: 2
  }, {
    default: () => [c(An, {
      key: "1",
      title: "组件设置"
    }, {
      default: () => [c("div", {
        class: "control-form-comtainer"
      }, [c(s, {
        editorControlView: i.value,
        currentBlock: r
      }, null), c("div", null, [o])])]
    })]
  })]) : c("div", {
    class: "control-container"
  }, [c(bi, {
    type: "line",
    size: "large",
    style: "height: 100%",
    key: 1
  }, {
    default: () => [c(An, {
      key: "0",
      title: "页面基础设置"
    }, {
      default: () => [c("div", {
        class: "control-form-comtainer"
      }, [c(_s, {
        style: {
          width: "100%"
        },
        "label-align": "left",
        "auto-label-width": !0,
        model: {},
        layout: "vertical"
      }, {
        default: () => [c(tn, {
          tooltip: "设置页面缩放大小，不会影响h5端",
          label: "页面缩放"
        }, {
          default: () => [c(Vt, {
            placeholder: "请输入正整数",
            mode: "button",
            style: "width: 140px;text-align: center;",
            modelValue: n.container.scale,
            "onUpdate:modelValue": (d) => n.container.scale = d,
            min: 40,
            max: 200
          }, null), c("span", {
            style: "margin-left: 6px"
          }, [ye("%")])]
        }), c(tn, {
          label: "背景色"
        }, {
          default: () => [c(Ma, {
            modelValue: n.container.backgroundColor,
            "onUpdate:modelValue": (d) => n.container.backgroundColor = d,
            showText: !0,
            disabledAlpha: !0
          }, null)]
        }), c(tn, {
          label: "背景图"
        }, {
          default: () => [c(u, {
            modelValue: n.container.backgroundImage,
            "onUpdate:modelValue": (d) => n.container.backgroundImage = d
          }, null)]
        })]
      })])]
    })]
  })])]);
}
const _i = /* @__PURE__ */ L({
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
    }), () => c(je, null, [Object.keys(t).map((n) => c("div", {
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
}), ot = (e) => (Ke("data-v-3eb71c99"), e = e(), Ge(), e), ug = {
  class: "editor-built-in-control-base-title"
}, cg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("div", {
  class: "line"
}, null, -1)), dg = {
  class: "font"
}, fg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("path", {
  d: "M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z",
  "p-id": "6372"
}, null, -1)), pg = [fg], vg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), hg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("path", {
  d: "M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z",
  fill: "#333333",
  "p-id": "1271"
}, null, -1)), mg = [hg], gg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), bg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("path", {
  d: "M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z",
  fill: "#484D55",
  "p-id": "2715"
}, null, -1)), yg = [bg], _g = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("div", {
  class: "vline"
}, null, -1)), $g = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("path", {
  d: "M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z",
  fill: "#484D55",
  "p-id": "3697"
}, null, -1)), wg = [$g], kg = {
  class: "letterSpacing flex"
}, Cg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("span", null, "字间距", -1)), Sg = {
  class: "flex: 1"
}, Vg = {
  class: "letterSpacing flex mt24"
}, Og = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("span", null, "行间距", -1)), Eg = {
  class: "flex: 1"
}, xg = {
  class: "letterSpacing flex mt24"
}, Bg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("span", null, "左右间距", -1)), Ig = {
  class: "flex: 1"
}, Pg = {
  class: "letterSpacing flex mt24"
}, jg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("span", null, "上间距", -1)), Tg = {
  class: "flex: 1"
}, Mg = {
  class: "letterSpacing flex mt24"
}, Dg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("span", null, "下间距", -1)), zg = {
  class: "flex: 1"
}, Ag = {
  class: "letterSpacing flex mt24"
}, Lg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("span", null, "背景色", -1)), Fg = {
  class: "flex: 1"
}, Ng = {
  class: "mt24 mb48"
}, Rg = /* @__PURE__ */ ot(() => /* @__PURE__ */ p("div", {
  class: "img-title"
}, "背景图", -1)), qg = /* @__PURE__ */ L({
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
      const r = Zn, a = ks, i = Ma;
      return y(), B("div", ug, [cg, p("div", dg, [c(r, {
        content: "居中",
        position: "top"
      }, {
        default: ne(() => [(y(), B("svg", {
          t: "1726044272489",
          class: G(["icon", {
            active: e.textAlign == "1"
          }]),
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "6371",
          width: "200",
          height: "200",
          onClick: o[0] || (o[0] = (s) => n("textAlign", e.textAlign == "1" ? "2" : "1"))
        }, pg, 2))]),
        _: 1
      }), vg, c(r, {
        content: "加粗",
        position: "top"
      }, {
        default: ne(() => [(y(), B("svg", {
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
        }, mg, 2))]),
        _: 1
      }), gg, c(r, {
        content: "倾斜",
        position: "top"
      }, {
        default: ne(() => [(y(), B("svg", {
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
        }, yg, 2))]),
        _: 1
      }), _g, c(r, {
        content: "下划线",
        position: "top"
      }, {
        default: ne(() => [(y(), B("svg", {
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
        }, wg, 2))]),
        _: 1
      })]), p("div", kg, [Cg, p("div", Sg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.letterSpacing.defaultValue,
        "onUpdate:modelValue": o[4] || (o[4] = (s) => e.block.props.letterSpacing.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Vg, [Og, p("div", Eg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.lineHeight.defaultValue,
        "onUpdate:modelValue": o[5] || (o[5] = (s) => e.block.props.lineHeight.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", xg, [Bg, p("div", Ig, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.leftRightPadding.defaultValue,
        "onUpdate:modelValue": o[6] || (o[6] = (s) => e.block.props.leftRightPadding.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Pg, [jg, p("div", Tg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginTop.defaultValue,
        "onUpdate:modelValue": o[7] || (o[7] = (s) => e.block.props.marginTop.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Mg, [Dg, p("div", zg, [c(a, {
        style: {
          width: "180px"
        },
        "show-input": "",
        modelValue: e.block.props.marginBottom.defaultValue,
        "onUpdate:modelValue": o[8] || (o[8] = (s) => e.block.props.marginBottom.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Ag, [Lg, p("div", Fg, [c(i, {
        "show-history": "",
        "show-preset": "",
        showText: "",
        disabledAlpha: "",
        modelValue: e.block.props.backgroundColor.defaultValue,
        "onUpdate:modelValue": o[9] || (o[9] = (s) => e.block.props.backgroundColor.defaultValue = s)
      }, null, 8, ["modelValue"])])]), p("div", Ng, [Rg, c(Fa, {
        modelValue: e.block.props.backgroundImage.defaultValue,
        "onUpdate:modelValue": o[10] || (o[10] = (s) => e.block.props.backgroundImage.defaultValue = s)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const Hg = /* @__PURE__ */ Ve(qg, [["__scopeId", "data-v-3eb71c99"]]), Wg = /* @__PURE__ */ L({
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
    return (t, n) => (y(), B("div", {
      class: "editor-built-in-registor-base-title",
      style: pe(e.style)
    }, [p("div", {
      class: G(["text", {
        minHeight: !e.text
      }])
    }, be(e.text ? e.text : "请在右侧控制器中输入内容"), 3)], 4));
  }
});
const Ug = /* @__PURE__ */ Ve(Wg, [["__scopeId", "data-v-ad83ebe6"]]), Kg = {
  group: "基础组件",
  name: "baseText",
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
    return c(Ug, {
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
    return c(Hg, {
      block: e,
      textAlign: n.textAlign.defaultValue,
      fontWeight: n.fontWeight.defaultValue,
      fontStyle: n.fontStyle.defaultValue,
      textDecoration: n.textDecoration.defaultValue,
      onChange: l
    });
  }
}, Gg = {
  class: "editor-built-in-registor-base-img"
}, Yg = ["src"], Xg = {
  key: 1,
  class: "empty"
}, Zg = /* @__PURE__ */ L({
  __name: "render",
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (y(), B("div", Gg, [e.src ? (y(), B("img", {
      key: 0,
      class: "render-img",
      src: e.src,
      alt: ""
    }, null, 8, Yg)) : (y(), B("div", Xg, "请在控制器中上传图片+"))]));
  }
});
const Qg = /* @__PURE__ */ Ve(Zg, [["__scopeId", "data-v-9c2db7e4"]]), Jg = {
  group: "基础组件",
  name: "baseImg",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (e) => c(Qg, {
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
}, eb = {
  key: 0,
  class: "tip"
}, tb = /* @__PURE__ */ L({
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
    function l(r) {
      var a, i, s, u, d, f, m, v;
      (a = n.value) != null && a.parentNode && r ? (((i = n.value) == null ? void 0 : i.parentNode).style.position = "absolute", ((s = n.value) == null ? void 0 : s.parentNode).style.zIndex = 10, ((u = n.value) == null ? void 0 : u.parentNode).style.bottom = t.visibleSubmitNum ? "0px" : "20px", ((d = n.value) == null ? void 0 : d.parentNode).style.top = "auto") : (((f = n.value) == null ? void 0 : f.parentNode).style.position = "relative", ((m = n.value) == null ? void 0 : m.parentNode).style.top = 0, ((v = n.value) == null ? void 0 : v.parentNode).style.bottom = "auto");
    }
    function o(r) {
      return r.replace("$num", t.submitNum + "");
    }
    return Ee(() => {
      l(t.fixedBottom);
    }), Pt(() => {
      l(t.fixedBottom);
    }), ge(() => t.fixedBottom, () => {
      l(t.fixedBottom);
    }), (r, a) => (y(), B("div", {
      class: "editor-built-in-registor-base-submit",
      ref_key: "baseSubmit",
      ref: n
    }, [p("div", {
      class: "submit",
      style: pe(e.style)
    }, be(e.text), 5), e.visibleSubmitNum ? (y(), B("div", eb, " ——" + be(o(e.submitTip)) + "—— ", 1)) : le("", !0)], 512));
  }
});
const nb = /* @__PURE__ */ Ve(tb, [["__scopeId", "data-v-caa2b586"]]);
const Qn = (e) => (Ke("data-v-e66b9f5d"), e = e(), Ge(), e), lb = {
  class: "editor-built-in-control-base-submit"
}, ob = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), ab = {
  class: "flex mt24 options"
}, rb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "是否吸底", -1)), ib = {
  class: "flex mt24 options"
}, sb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "显示提交次数", -1)), ub = {
  key: 0,
  class: "flex mt24 options"
}, cb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "初始次数", -1)), db = {
  class: "pl24"
}, fb = {
  key: 1,
  class: "flex mt24 options"
}, pb = /* @__PURE__ */ Qn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提示语内容", -1)), vb = [pb], hb = {
  key: 2,
  class: "mt24"
}, mb = /* @__PURE__ */ L({
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
      const r = $t, a = Kt;
      return y(), B("div", lb, [ob, p("div", ab, [rb, p("div", null, [c(r, {
        "default-checked": e.block.props.fixedBottom.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "fixedBottom"))
      }, null, 8, ["default-checked"])])]), p("div", ib, [sb, p("div", null, [c(r, {
        "default-checked": e.block.props.visibleSubmitNum.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "visibleSubmitNum"))
      }, null, 8, ["default-checked"])])]), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), B("div", ub, [cb, p("div", db, [c(a, {
        placeholder: "请输入初始次数",
        modelValue: e.block.props.submitNum.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.submitNum.defaultValue = i)
      }, null, 8, ["modelValue"])])])) : le("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), B("div", fb, vb)) : le("", !0), e.block.props.visibleSubmitNum.defaultValue == "1" ? (y(), B("div", hb, [c(a, {
        placeholder: "提示语",
        modelValue: e.block.props.submitTip.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.submitTip.defaultValue = i)
      }, null, 8, ["modelValue"])])) : le("", !0)]);
    };
  }
});
const gb = /* @__PURE__ */ Ve(mb, [["__scopeId", "data-v-e66b9f5d"]]), bb = {
  group: "基础组件",
  name: "baseSubmit",
  label: "提交按钮",
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
    return c(nb, {
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
  controlView: (e, t) => c(gb, {
    block: e
  })
}, yb = /* @__PURE__ */ L({
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
    return (t, n) => (y(), B("div", {
      class: "editor-built-in-registor-base-title",
      style: pe(e.style)
    }, be(e.text ? e.text : "默认标题"), 5));
  }
});
const _b = /* @__PURE__ */ Ve(yb, [["__scopeId", "data-v-5fff6b35"]]), $b = {
  group: "基础组件",
  label: "表单标题",
  name: "baseTitle",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  render: (e) => {
    let t = h(() => ({
      color: e.props.color.defaultValue,
      fontSize: e.props.fontSize.defaultValue + "px",
      lineHeight: e.props.lineHeight.defaultValue + "px",
      height: e.props.lineHeight.defaultValue + "px",
      marginBottom: e.props.marginBottom.defaultValue + "px",
      marginTop: e.props.marginTop.defaultValue + "px"
    }));
    return c(_b, {
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
}, wb = {
  class: "successImg"
}, kb = ["src"], Cb = {
  class: "successText"
}, Sb = {
  class: "successDesc"
}, Vb = {
  class: "successQR"
}, Ob = ["src"], Eb = {
  class: "successBottomText"
}, xb = /* @__PURE__ */ L({
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
    }
  },
  setup(e) {
    let t = I(0);
    return Ee(() => {
      let n = document.querySelector(".visual-editor-area-content");
      console.log(n.offsetHeight), t.value = n != null && n.offsetHeight ? n == null ? void 0 : n.offsetHeight : 600;
    }), (n, l) => (y(), B("div", {
      class: "editor-built-in-registor-base-success",
      style: pe({
        height: Qs(t) + "px"
      })
    }, [p("div", wb, [p("img", {
      src: e.successSrc,
      alt: ""
    }, null, 8, kb)]), p("div", Cb, [p("span", {
      style: pe({
        color: e.successColor
      })
    }, be(e.successText), 5)]), p("div", Sb, [p("span", {
      style: pe({
        color: e.successDescColor
      })
    }, be(e.successDesc), 5)]), p("div", Vb, [p("img", {
      src: e.successQR,
      alt: ""
    }, null, 8, Ob)]), p("div", Eb, [p("span", {
      style: pe({
        color: e.successBottomColor
      })
    }, be(e.successBottomText), 5)])], 4));
  }
});
const Bb = /* @__PURE__ */ Ve(xb, [["__scopeId", "data-v-97d168c9"]]), Ib = {
  group: "基础组件",
  name: "baseSuccess",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  render: (e) => {
    let t = e.props;
    return c(Bb, {
      successSrc: t.successSrc.defaultValue,
      successText: t.successText.defaultValue,
      successDesc: t.successDesc.defaultValue,
      successQR: t.successQR.defaultValue,
      successBottomText: t.successBottomText.defaultValue,
      successColor: t.successColor.defaultValue,
      successDescColor: t.successDescColor.defaultValue,
      successBottomColor: t.successBottomColor.defaultValue
    });
  },
  priview: () => c("textarea", {
    placeholder: "请输入内容"
  }, null),
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
    successBottomColor: {
      defaultValue: "#fff",
      label: "相关提示信息文字颜色",
      type: "color"
    }
  },
  controlView: (e, t) => c("div", null, null)
}, Pb = (e) => (Ke("data-v-d00a40a0"), e = e(), Ge(), e), jb = {
  class: "title-tip"
}, Tb = {
  key: 0,
  class: "red"
}, Mb = {
  class: "form-item"
}, Db = /* @__PURE__ */ Pb(() => /* @__PURE__ */ p("div", {
  class: "control-input"
}, null, -1)), zb = {
  class: "text"
}, Ab = /* @__PURE__ */ L({
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
    return (t, n) => (y(), B("div", {
      class: "editor-built-in-commen-multiple",
      style: pe(e.style)
    }, [p("div", jb, [e.isRequire ? (y(), B("span", Tb, "*")) : le("", !0), p("span", null, be(e.title), 1)]), p("div", Mb, [(y(!0), B(je, null, bt(e.options, (l, o) => (y(), B("div", {
      class: "item",
      key: o
    }, [Db, p("div", zb, be(l.name ? l.name : "请填写内容"), 1)]))), 128))])], 4));
  }
});
const Lb = /* @__PURE__ */ Ve(Ab, [["__scopeId", "data-v-d00a40a0"]]);
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $i(e, t) {
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
    t % 2 ? $i(Object(n), !0).forEach(function(l) {
      Fb(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $i(Object(n)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return e;
}
function _l(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _l = function(t) {
    return typeof t;
  } : _l = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _l(e);
}
function Fb(e, t, n) {
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
function Nb(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, r;
  for (r = 0; r < l.length; r++)
    o = l[r], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Rb(e, t) {
  if (e == null)
    return {};
  var n = Nb(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      l = r[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
var qb = "1.15.3";
function Bt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var jt = Bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Jn = Bt(/Edge/i), wi = Bt(/firefox/i), Ln = Bt(/safari/i) && !Bt(/chrome/i) && !Bt(/android/i), Ss = Bt(/iP(ad|od|hone)/i), Vs = Bt(/chrome/i) && Bt(/android/i), Os = {
  capture: !1,
  passive: !1
};
function ke(e, t, n) {
  e.addEventListener(t, n, !jt && Os);
}
function _e(e, t, n) {
  e.removeEventListener(t, n, !jt && Os);
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
function gt(e, t, n, l) {
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
var ki = /\s+/g;
function st(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(ki, " ").replace(" " + t + " ", " ");
      e.className = (l + (n ? " " + t : "")).replace(ki, " ");
    }
}
function de(e, t, n) {
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
      var l = de(e, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!t && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function xs(e, t, n) {
  if (e) {
    var l = e.getElementsByTagName(t), o = 0, r = l.length;
    if (n)
      for (; o < r; o++)
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
    var r, a, i, s, u, d, f;
    if (e !== window && e.parentNode && e !== wt() ? (r = e.getBoundingClientRect(), a = r.top, i = r.left, s = r.bottom, u = r.right, d = r.height, f = r.width) : (a = 0, i = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !jt))
      do
        if (o && o.getBoundingClientRect && (de(o, "transform") !== "none" || n && de(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          a -= m.top + parseInt(de(o, "border-top-width")), i -= m.left + parseInt(de(o, "border-left-width")), s = a + r.height, u = i + r.width;
          break;
        }
      while (o = o.parentNode);
    if (l && e !== window) {
      var v = yn(o || e), g = v && v.a, _ = v && v.d;
      v && (a /= _, i /= g, f /= g, d /= _, s = a + d, u = i + f);
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
function Ci(e, t, n) {
  for (var l = Nt(e, !0), o = Re(e)[t]; l; ) {
    var r = Re(l)[n], a = void 0;
    if (n === "top" || n === "left" ? a = o >= r : a = o <= r, !a)
      return l;
    if (l === wt())
      break;
    l = Nt(l, !1);
  }
  return !1;
}
function kn(e, t, n, l) {
  for (var o = 0, r = 0, a = e.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== ie.ghost && (l || a[r] !== ie.dragged) && gt(a[r], n.draggable, e, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function Na(e, t) {
  for (var n = e.lastElementChild; n && (n === ie.ghost || de(n, "display") === "none" || t && !Al(n, t)); )
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
function Si(e) {
  var t = 0, n = 0, l = wt();
  if (e)
    do {
      var o = yn(e), r = o.a, a = o.d;
      t += e.scrollLeft * r, n += e.scrollTop * a;
    } while (e !== l && (e = e.parentNode));
  return [t, n];
}
function Hb(e, t) {
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
    return wt();
  var n = e, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = de(n);
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
function Wb(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Go(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Fn;
function Bs(e, t) {
  return function() {
    if (!Fn) {
      var n = arguments, l = this;
      n.length === 1 ? e.call(l, n[0]) : e.apply(l, n), Fn = setTimeout(function() {
        Fn = void 0;
      }, t);
    }
  };
}
function Ub() {
  clearTimeout(Fn), Fn = void 0;
}
function Is(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Ps(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function js(e, t, n) {
  var l = {};
  return Array.from(e.children).forEach(function(o) {
    var r, a, i, s;
    if (!(!gt(o, t.draggable, e, !1) || o.animated || o === n)) {
      var u = Re(o);
      l.left = Math.min((r = l.left) !== null && r !== void 0 ? r : 1 / 0, u.left), l.top = Math.min((a = l.top) !== null && a !== void 0 ? a : 1 / 0, u.top), l.right = Math.max((i = l.right) !== null && i !== void 0 ? i : -1 / 0, u.right), l.bottom = Math.max((s = l.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var it = "Sortable" + new Date().getTime();
function Kb() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(de(o, "display") === "none" || o === ie.ghost)) {
            e.push({
              target: o,
              rect: Re(o)
            });
            var r = St({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = yn(o, !0);
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
      e.splice(Hb(e, {
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
        var s = 0, u = i.target, d = u.fromRect, f = Re(u), m = u.prevFromRect, v = u.prevToRect, g = i.rect, _ = yn(u, !0);
        _ && (f.top -= _.f, f.left -= _.e), u.toRect = f, u.thisAnimationDuration && Go(m, f) && !Go(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - f.top) / (g.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = Yb(g, m, v, o.options)), Go(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = o.options.animation), o.animate(u, g, f, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, a) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, o, r, a) {
      if (a) {
        de(l, "transition", ""), de(l, "transform", "");
        var i = yn(this.el), s = i && i.a, u = i && i.d, d = (o.left - r.left) / (s || 1), f = (o.top - r.top) / (u || 1);
        l.animatingX = !!d, l.animatingY = !!f, de(l, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = Gb(l), de(l, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), de(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          de(l, "transition", ""), de(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, a);
      }
    }
  };
}
function Gb(e) {
  return e.offsetWidth;
}
function Yb(e, t, n, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * l.animation;
}
var cn = [], Yo = {
  initializeByDefault: !0
}, el = {
  mount: function(t) {
    for (var n in Yo)
      Yo.hasOwnProperty(n) && !(n in t) && (t[n] = Yo[n]);
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
function Xb(e) {
  var t = e.sortable, n = e.rootEl, l = e.name, o = e.targetEl, r = e.cloneEl, a = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, f = e.newDraggableIndex, m = e.originalEvent, v = e.putSortable, g = e.extraEventProperties;
  if (t = t || n && n[it], !!t) {
    var _, z = t.options, P = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !jt && !Jn ? _ = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(l, !0, !0)), _.to = a || n, _.from = i || n, _.item = o || n, _.clone = r, _.oldIndex = s, _.newIndex = u, _.oldDraggableIndex = d, _.newDraggableIndex = f, _.originalEvent = m, _.pullMode = v ? v.lastPutMode : void 0;
    var V = St(St({}, g), el.getEventProperties(l, t));
    for (var S in V)
      _[S] = V[S];
    n && n.dispatchEvent(_), z[P] && z[P].call(t, _);
  }
}
var Zb = ["evt"], rt = function(t, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, r = Rb(l, Zb);
  el.pluginEvent.bind(ie)(t, n, St({
    dragEl: Q,
    parentEl: De,
    ghostEl: ve,
    rootEl: xe,
    nextEl: Qt,
    lastDownEl: $l,
    cloneEl: Ie,
    cloneHidden: Ft,
    dragStarted: jn,
    putSortable: Xe,
    activeSortable: ie.active,
    originalEvent: o,
    oldIndex: vn,
    oldDraggableIndex: Nn,
    newIndex: ut,
    newDraggableIndex: At,
    hideGhostForTarget: zs,
    unhideGhostForTarget: As,
    cloneNowHidden: function() {
      Ft = !0;
    },
    cloneNowShown: function() {
      Ft = !1;
    },
    dispatchSortableEvent: function(i) {
      lt({
        sortable: n,
        name: i,
        originalEvent: o
      });
    }
  }, r));
};
function lt(e) {
  Xb(St({
    putSortable: Xe,
    cloneEl: Ie,
    targetEl: Q,
    rootEl: xe,
    oldIndex: vn,
    oldDraggableIndex: Nn,
    newIndex: ut,
    newDraggableIndex: At
  }, e));
}
var Q, De, ve, xe, Qt, $l, Ie, Ft, vn, ut, Nn, At, fl, Xe, fn = !1, Ll = !1, Fl = [], Yt, mt, Xo, Zo, Vi, Oi, jn, dn, Rn, qn = !1, pl = !1, wl, Qe, Qo = [], va = !1, Nl = [], eo = typeof document < "u", vl = Ss, Ei = Jn || jt ? "cssFloat" : "float", Qb = eo && !Vs && !Ss && "draggable" in document.createElement("div"), Ts = function() {
  if (eo) {
    if (jt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ms = function(t, n) {
  var l = de(t), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), r = kn(t, 0, n), a = kn(t, 1, n), i = r && de(r), s = a && de(a), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Re(r).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Re(a).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && i.float && i.float !== "none") {
    var f = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= o && l[Ei] === "none" || a && l[Ei] === "none" && u + d > o) ? "vertical" : "horizontal";
}, Jb = function(t, n, l) {
  var o = l ? t.left : t.top, r = l ? t.right : t.bottom, a = l ? t.width : t.height, i = l ? n.left : n.top, s = l ? n.right : n.bottom, u = l ? n.width : n.height;
  return o === i || r === s || o + a / 2 === i + u / 2;
}, ey = function(t, n) {
  var l;
  return Fl.some(function(o) {
    var r = o[it].options.emptyInsertThreshold;
    if (!(!r || Na(o))) {
      var a = Re(o), i = t >= a.left - r && t <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (i && s)
        return l = o;
    }
  }), l;
}, Ds = function(t) {
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
  (!o || _l(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = n(o.pull, !0), l.checkPut = n(o.put), l.revertClone = o.revertClone, t.group = l;
}, zs = function() {
  !Ts && ve && de(ve, "display", "none");
}, As = function() {
  !Ts && ve && de(ve, "display", "");
};
eo && !Vs && document.addEventListener("click", function(e) {
  if (Ll)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ll = !1, !1;
}, !0);
var Xt = function(t) {
  if (Q) {
    t = t.touches ? t.touches[0] : t;
    var n = ey(t.clientX, t.clientY);
    if (n) {
      var l = {};
      for (var o in t)
        t.hasOwnProperty(o) && (l[o] = t[o]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[it]._onDragOver(l);
    }
  }
}, ty = function(t) {
  Q && Q.parentNode[it]._isOutsideThisEl(t.target);
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
      return Ms(e, this.options);
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
  Ds(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Qb, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ke(e, "pointerdown", this._onTapStart) : (ke(e, "mousedown", this._onTapStart), ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(e, "dragover", this), ke(e, "dragenter", this)), Fl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), It(this, Kb());
}
ie.prototype = /** @lends Sortable.prototype */
{
  constructor: ie,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (dn = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, Q) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, l = this.el, o = this.options, r = o.preventOnFilter, a = t.type, i = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (i || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = o.filter;
      if (uy(l), !Q && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Ln && s && s.tagName.toUpperCase() === "SELECT") && (s = gt(s, o.draggable, l, !1), !(s && s.animated) && $l !== s)) {
        if (vn = pt(s), Nn = pt(s, o.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            lt({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: l,
              fromEl: l
            }), rt("filter", n, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
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
        }), d)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !gt(u, o.handle, l, !1) || this._prepareDragStart(t, i, s);
      }
    }
  },
  _prepareDragStart: function(t, n, l) {
    var o = this, r = o.el, a = o.options, i = r.ownerDocument, s;
    if (l && !Q && l.parentNode === r) {
      var u = Re(l);
      if (xe = r, Q = l, De = Q.parentNode, Qt = Q.nextSibling, $l = l, fl = a.group, ie.dragged = Q, Yt = {
        target: Q,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Vi = Yt.clientX - u.left, Oi = Yt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Q.style["will-change"] = "all", s = function() {
        if (rt("delayEnded", o, {
          evt: t
        }), ie.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !wi && o.nativeDraggable && (Q.draggable = !0), o._triggerDragStart(t, n), lt({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), st(Q, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        xs(Q, d.trim(), Jo);
      }), ke(i, "dragover", Xt), ke(i, "mousemove", Xt), ke(i, "touchmove", Xt), ke(i, "mouseup", o._onDrop), ke(i, "touchend", o._onDrop), ke(i, "touchcancel", o._onDrop), wi && this.nativeDraggable && (this.options.touchStartThreshold = 4, Q.draggable = !0), rt("delayStart", this, {
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
    Q && Jo(Q), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._disableDelayedDrag), _e(t, "touchend", this._disableDelayedDrag), _e(t, "touchcancel", this._disableDelayedDrag), _e(t, "mousemove", this._delayedDragTouchMoveHandler), _e(t, "touchmove", this._delayedDragTouchMoveHandler), _e(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : n ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(Q, "dragend", this), ke(xe, "dragstart", this._onDragStart));
    try {
      document.selection ? kl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (fn = !1, xe && Q) {
      rt("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && ke(document, "dragover", ty);
      var l = this.options;
      !t && st(Q, l.dragClass, !1), st(Q, l.ghostClass, !0), ie.active = this, t && this._appendGhost(), lt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (mt) {
      this._lastX = mt.clientX, this._lastY = mt.clientY, zs();
      for (var t = document.elementFromPoint(mt.clientX, mt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(mt.clientX, mt.clientY), t !== n); )
        n = t;
      if (Q.parentNode[it]._isOutsideThisEl(t), n)
        do {
          if (n[it]) {
            var l = void 0;
            if (l = n[it]._onDragOver({
              clientX: mt.clientX,
              clientY: mt.clientY,
              target: t,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Es(n));
      As();
    }
  },
  _onTouchMove: function(t) {
    if (Yt) {
      var n = this.options, l = n.fallbackTolerance, o = n.fallbackOffset, r = t.touches ? t.touches[0] : t, a = ve && yn(ve, !0), i = ve && a && a.a, s = ve && a && a.d, u = vl && Qe && Si(Qe), d = (r.clientX - Yt.clientX + o.x) / (i || 1) + (u ? u[0] - Qo[0] : 0) / (i || 1), f = (r.clientY - Yt.clientY + o.y) / (s || 1) + (u ? u[1] - Qo[1] : 0) / (s || 1);
      if (!ie.active && !fn) {
        if (l && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (ve) {
        a ? (a.e += d - (Xo || 0), a.f += f - (Zo || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        de(ve, "webkitTransform", m), de(ve, "mozTransform", m), de(ve, "msTransform", m), de(ve, "transform", m), Xo = d, Zo = f, mt = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ve) {
      var t = this.options.fallbackOnBody ? document.body : xe, n = Re(Q, !0, vl, !0, t), l = this.options;
      if (vl) {
        for (Qe = t; de(Qe, "position") === "static" && de(Qe, "transform") === "none" && Qe !== document; )
          Qe = Qe.parentNode;
        Qe !== document.body && Qe !== document.documentElement ? (Qe === document && (Qe = wt()), n.top += Qe.scrollTop, n.left += Qe.scrollLeft) : Qe = wt(), Qo = Si(Qe);
      }
      ve = Q.cloneNode(!0), st(ve, l.ghostClass, !1), st(ve, l.fallbackClass, !0), st(ve, l.dragClass, !0), de(ve, "transition", ""), de(ve, "transform", ""), de(ve, "box-sizing", "border-box"), de(ve, "margin", 0), de(ve, "top", n.top), de(ve, "left", n.left), de(ve, "width", n.width), de(ve, "height", n.height), de(ve, "opacity", "0.8"), de(ve, "position", vl ? "absolute" : "fixed"), de(ve, "zIndex", "100000"), de(ve, "pointerEvents", "none"), ie.ghost = ve, t.appendChild(ve), de(ve, "transform-origin", Vi / parseInt(ve.style.width) * 100 + "% " + Oi / parseInt(ve.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var l = this, o = t.dataTransfer, r = l.options;
    if (rt("dragStart", this, {
      evt: t
    }), ie.eventCanceled) {
      this._onDrop();
      return;
    }
    rt("setupClone", this), ie.eventCanceled || (Ie = Ps(Q), Ie.removeAttribute("id"), Ie.draggable = !1, Ie.style["will-change"] = "", this._hideClone(), st(Ie, this.options.chosenClass, !1), ie.clone = Ie), l.cloneId = kl(function() {
      rt("clone", l), !ie.eventCanceled && (l.options.removeCloneOnHide || xe.insertBefore(Ie, Q), l._hideClone(), lt({
        sortable: l,
        name: "clone"
      }));
    }), !n && st(Q, r.dragClass, !0), n ? (Ll = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (_e(document, "mouseup", l._onDrop), _e(document, "touchend", l._onDrop), _e(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(l, o, Q)), ke(document, "drop", l), de(Q, "transform", "translateZ(0)")), fn = !0, l._dragStartId = kl(l._dragStarted.bind(l, n, t)), ke(document, "selectstart", l), jn = !0, Ln && de(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, l = t.target, o, r, a, i = this.options, s = i.group, u = ie.active, d = fl === s, f = i.sort, m = Xe || u, v, g = this, _ = !1;
    if (va)
      return;
    function z(U, te) {
      rt(U, g, St({
        evt: t,
        isOwner: d,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: f,
        fromSortable: m,
        target: l,
        completed: V,
        onMove: function(C, K) {
          return hl(xe, n, Q, o, C, Re(C), t, K);
        },
        changed: S
      }, te));
    }
    function P() {
      z("dragOverAnimationCapture"), g.captureAnimationState(), g !== m && m.captureAnimationState();
    }
    function V(U) {
      return z("dragOverCompleted", {
        insertion: U
      }), U && (d ? u._hideClone() : u._showClone(g), g !== m && (st(Q, Xe ? Xe.options.ghostClass : u.options.ghostClass, !1), st(Q, i.ghostClass, !0)), Xe !== g && g !== ie.active ? Xe = g : g === ie.active && Xe && (Xe = null), m === g && (g._ignoreWhileAnimating = l), g.animateAll(function() {
        z("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (l === Q && !Q.animated || l === n && !l.animated) && (dn = null), !i.dragoverBubble && !t.rootEl && l !== document && (Q.parentNode[it]._isOutsideThisEl(t.target), !U && Xt(t)), !i.dragoverBubble && t.stopPropagation && t.stopPropagation(), _ = !0;
    }
    function S() {
      ut = pt(Q), At = pt(Q, i.draggable), lt({
        sortable: g,
        name: "change",
        toEl: n,
        newIndex: ut,
        newDraggableIndex: At,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = gt(l, i.draggable, n, !0), z("dragOver"), ie.eventCanceled)
      return _;
    if (Q.contains(t.target) || l.animated && l.animatingX && l.animatingY || g._ignoreWhileAnimating === l)
      return V(!1);
    if (Ll = !1, u && !i.disabled && (d ? f || (a = De !== xe) : Xe === this || (this.lastPutMode = fl.checkPull(this, u, Q, t)) && s.checkPut(this, u, Q, t))) {
      if (v = this._getDirection(t, l) === "vertical", o = Re(Q), z("dragOverValid"), ie.eventCanceled)
        return _;
      if (a)
        return De = xe, P(), this._hideClone(), z("revert"), ie.eventCanceled || (Qt ? xe.insertBefore(Q, Qt) : xe.appendChild(Q)), V(!0);
      var k = Na(n, i.draggable);
      if (!k || ay(t, v, this) && !k.animated) {
        if (k === Q)
          return V(!1);
        if (k && n === t.target && (l = k), l && (r = Re(l)), hl(xe, n, Q, o, l, r, t, !!l) !== !1)
          return P(), k && k.nextSibling ? n.insertBefore(Q, k.nextSibling) : n.appendChild(Q), De = n, S(), V(!0);
      } else if (k && oy(t, v, this)) {
        var D = kn(n, 0, i, !0);
        if (D === Q)
          return V(!1);
        if (l = D, r = Re(l), hl(xe, n, Q, o, l, r, t, !1) !== !1)
          return P(), n.insertBefore(Q, D), De = n, S(), V(!0);
      } else if (l.parentNode === n) {
        r = Re(l);
        var $ = 0, O, F = Q.parentNode !== n, q = !Jb(Q.animated && Q.toRect || o, l.animated && l.toRect || r, v), E = v ? "top" : "left", b = Ci(l, "top", "top") || Ci(Q, "top", "top"), x = b ? b.scrollTop : void 0;
        dn !== l && (O = r[E], qn = !1, pl = !q && i.invertSwap || F), $ = ry(t, l, r, v, q ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, pl, dn === l);
        var w;
        if ($ !== 0) {
          var H = pt(Q);
          do
            H -= $, w = De.children[H];
          while (w && (de(w, "display") === "none" || w === ve));
        }
        if ($ === 0 || w === l)
          return V(!1);
        dn = l, Rn = $;
        var Y = l.nextElementSibling, W = !1;
        W = $ === 1;
        var Z = hl(xe, n, Q, o, l, r, t, W);
        if (Z !== !1)
          return (Z === 1 || Z === -1) && (W = Z === 1), va = !0, setTimeout(ly, 30), P(), W && !Y ? n.appendChild(Q) : l.parentNode.insertBefore(Q, W ? Y : l), b && Is(b, 0, x - b.scrollTop), De = Q.parentNode, O !== void 0 && !pl && (wl = Math.abs(O - Re(l)[E])), S(), V(!0);
      }
      if (n.contains(Q))
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
    if (ut = pt(Q), At = pt(Q, l.draggable), rt("drop", this, {
      evt: t
    }), De = Q && Q.parentNode, ut = pt(Q), At = pt(Q, l.draggable), ie.eventCanceled) {
      this._nulling();
      return;
    }
    fn = !1, pl = !1, qn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ha(this.cloneId), ha(this._dragStartId), this.nativeDraggable && (_e(document, "drop", this), _e(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && de(document.body, "user-select", ""), de(Q, "transform", ""), t && (jn && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), ve && ve.parentNode && ve.parentNode.removeChild(ve), (xe === De || Xe && Xe.lastPutMode !== "clone") && Ie && Ie.parentNode && Ie.parentNode.removeChild(Ie), Q && (this.nativeDraggable && _e(Q, "dragend", this), Jo(Q), Q.style["will-change"] = "", jn && !fn && st(Q, Xe ? Xe.options.ghostClass : this.options.ghostClass, !1), st(Q, this.options.chosenClass, !1), lt({
      sortable: this,
      name: "unchoose",
      toEl: De,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), xe !== De ? (ut >= 0 && (lt({
      rootEl: De,
      name: "add",
      toEl: De,
      fromEl: xe,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "remove",
      toEl: De,
      originalEvent: t
    }), lt({
      rootEl: De,
      name: "sort",
      toEl: De,
      fromEl: xe,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "sort",
      toEl: De,
      originalEvent: t
    })), Xe && Xe.save()) : ut !== vn && ut >= 0 && (lt({
      sortable: this,
      name: "update",
      toEl: De,
      originalEvent: t
    }), lt({
      sortable: this,
      name: "sort",
      toEl: De,
      originalEvent: t
    })), ie.active && ((ut == null || ut === -1) && (ut = vn, At = Nn), lt({
      sortable: this,
      name: "end",
      toEl: De,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    rt("nulling", this), xe = Q = De = ve = Qt = Ie = $l = Ft = Yt = mt = jn = ut = At = vn = Nn = dn = Rn = Xe = fl = ie.dragged = ie.ghost = ie.clone = ie.active = null, Nl.forEach(function(t) {
      t.checked = !0;
    }), Nl.length = Xo = Zo = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        Q && (this._onDragOver(t), ny(t));
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
      n = l[o], gt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || sy(n));
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
      gt(i, this.options.draggable, o, !1) && (l[r] = i);
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
    typeof o < "u" ? l[t] = o : l[t] = n, t === "group" && Ds(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    rt("destroy", this);
    var t = this.el;
    t[it] = null, _e(t, "mousedown", this._onTapStart), _e(t, "touchstart", this._onTapStart), _e(t, "pointerdown", this._onTapStart), this.nativeDraggable && (_e(t, "dragover", this), _e(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Fl.splice(Fl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ft) {
      if (rt("hideClone", this), ie.eventCanceled)
        return;
      de(Ie, "display", "none"), this.options.removeCloneOnHide && Ie.parentNode && Ie.parentNode.removeChild(Ie), Ft = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ft) {
      if (rt("showClone", this), ie.eventCanceled)
        return;
      Q.parentNode == xe && !this.options.group.revertClone ? xe.insertBefore(Ie, Q) : Qt ? xe.insertBefore(Ie, Qt) : xe.appendChild(Ie), this.options.group.revertClone && this.animate(Q, Ie), de(Ie, "display", ""), Ft = !1;
    }
  }
};
function ny(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function hl(e, t, n, l, o, r, a, i) {
  var s, u = e[it], d = u.options.onMove, f;
  return window.CustomEvent && !jt && !Jn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = l, s.related = o || t, s.relatedRect = r || Re(t), s.willInsertAfter = i, s.originalEvent = a, e.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function Jo(e) {
  e.draggable = !1;
}
function ly() {
  va = !1;
}
function oy(e, t, n) {
  var l = Re(kn(n.el, 0, n.options, !0)), o = js(n.el, n.options, ve), r = 10;
  return t ? e.clientX < o.left - r || e.clientY < l.top && e.clientX < l.right : e.clientY < o.top - r || e.clientY < l.bottom && e.clientX < l.left;
}
function ay(e, t, n) {
  var l = Re(Na(n.el, n.options.draggable)), o = js(n.el, n.options, ve), r = 10;
  return t ? e.clientX > o.right + r || e.clientY > l.bottom && e.clientX > l.left : e.clientY > o.bottom + r || e.clientX > l.right && e.clientY > l.top;
}
function ry(e, t, n, l, o, r, a, i) {
  var s = l ? e.clientY : e.clientX, u = l ? n.height : n.width, d = l ? n.top : n.left, f = l ? n.bottom : n.right, m = !1;
  if (!a) {
    if (i && wl < u * o) {
      if (!qn && (Rn === 1 ? s > d + u * r / 2 : s < f - u * r / 2) && (qn = !0), qn)
        m = !0;
      else if (Rn === 1 ? s < d + wl : s > f - wl)
        return -Rn;
    } else if (s > d + u * (1 - o) / 2 && s < f - u * (1 - o) / 2)
      return iy(t);
  }
  return m = m || a, m && (s < d + u * r / 2 || s > f - u * r / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function iy(e) {
  return pt(Q) < pt(e) ? 1 : -1;
}
function sy(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, l = 0; n--; )
    l += t.charCodeAt(n);
  return l.toString(36);
}
function uy(e) {
  Nl.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var l = t[n];
    l.checked && Nl.push(l);
  }
}
function kl(e) {
  return setTimeout(e, 0);
}
function ha(e) {
  return clearTimeout(e);
}
eo && ke(document, "touchmove", function(e) {
  (ie.active || fn) && e.cancelable && e.preventDefault();
});
ie.utils = {
  on: ke,
  off: _e,
  css: de,
  find: xs,
  is: function(t, n) {
    return !!gt(t, n, t, !1);
  },
  extend: Wb,
  throttle: Bs,
  closest: gt,
  toggleClass: st,
  clone: Ps,
  index: pt,
  nextTick: kl,
  cancelNextTick: ha,
  detectDirection: Ms,
  getChild: kn,
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
    l.utils && (ie.utils = St(St({}, ie.utils), l.utils)), el.mount(l);
  });
};
ie.create = function(e, t) {
  return new ie(e, t);
};
ie.version = qb;
var Ne = [], Tn, ma, ga = !1, ea, ta, Rl, Mn;
function cy() {
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
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : (_e(document, "pointermove", this._handleFallbackAutoScroll), _e(document, "touchmove", this._handleFallbackAutoScroll), _e(document, "mousemove", this._handleFallbackAutoScroll)), xi(), Cl(), Ub();
    },
    nulling: function() {
      Rl = ma = Tn = ga = Mn = ea = ta = null, Ne.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(r, a);
      if (Rl = n, l || this.options.forceAutoScrollFallback || Jn || jt || Ln) {
        na(n, this.options, i, l);
        var s = Nt(i, !0);
        ga && (!Mn || r !== ea || a !== ta) && (Mn && xi(), Mn = setInterval(function() {
          var u = Nt(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Cl()), na(n, o.options, u, l);
        }, 10), ea = r, ta = a);
      } else {
        if (!this.options.bubbleScroll || Nt(i, !0) === wt()) {
          Cl();
          return;
        }
        na(n, this.options, Nt(i, !1), !1);
      }
    }
  }, It(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Cl() {
  Ne.forEach(function(e) {
    clearInterval(e.pid);
  }), Ne = [];
}
function xi() {
  clearInterval(Mn);
}
var na = Bs(function(e, t, n, l) {
  if (t.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, i = t.scrollSpeed, s = wt(), u = !1, d;
    ma !== n && (ma = n, Cl(), Tn = t.scroll, d = t.scrollFn, Tn === !0 && (Tn = Nt(n, !0)));
    var f = 0, m = Tn;
    do {
      var v = m, g = Re(v), _ = g.top, z = g.bottom, P = g.left, V = g.right, S = g.width, k = g.height, D = void 0, $ = void 0, O = v.scrollWidth, F = v.scrollHeight, q = de(v), E = v.scrollLeft, b = v.scrollTop;
      v === s ? (D = S < O && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), $ = k < F && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (D = S < O && (q.overflowX === "auto" || q.overflowX === "scroll"), $ = k < F && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var x = D && (Math.abs(V - o) <= a && E + S < O) - (Math.abs(P - o) <= a && !!E), w = $ && (Math.abs(z - r) <= a && b + k < F) - (Math.abs(_ - r) <= a && !!b);
      if (!Ne[f])
        for (var H = 0; H <= f; H++)
          Ne[H] || (Ne[H] = {});
      (Ne[f].vx != x || Ne[f].vy != w || Ne[f].el !== v) && (Ne[f].el = v, Ne[f].vx = x, Ne[f].vy = w, clearInterval(Ne[f].pid), (x != 0 || w != 0) && (u = !0, Ne[f].pid = setInterval(function() {
        l && this.layer === 0 && ie.active._onTouchMove(Rl);
        var Y = Ne[this.layer].vy ? Ne[this.layer].vy * i : 0, W = Ne[this.layer].vx ? Ne[this.layer].vx * i : 0;
        typeof d == "function" && d.call(ie.dragged.parentNode[it], W, Y, e, Rl, Ne[this.layer].el) !== "continue" || Is(Ne[this.layer].el, W, Y);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && m !== s && (m = Nt(m, !1)));
    ga = u;
  }
}, 30), Ls = function(t) {
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
  drop: Ls
};
It(Ra, {
  pluginName: "revertOnSpill"
});
function qa() {
}
qa.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, l = t.putSortable, o = l || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Ls
};
It(qa, {
  pluginName: "removeOnSpill"
});
ie.mount(new cy());
ie.mount(qa, Ra);
const Tt = (e) => (Ke("data-v-32ae4908"), e = e(), Ge(), e), dy = {
  class: "editor-built-in-control-commen-multiple"
}, fy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), py = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), vy = {
  class: "flex mt24 options"
}, hy = {
  class: "select-group"
}, my = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), gy = ["onClick"], by = {
  class: "add-btn"
}, yy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), _y = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), $y = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), wy = {
  class: "flex mt24 options"
}, ky = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), Cy = {
  class: "flex mt24 options"
}, Sy = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少选择数", -1)), Vy = {
  class: "pl24"
}, Oy = {
  class: "flex mt24 options"
}, Ey = /* @__PURE__ */ Tt(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多选择数", -1)), xy = {
  class: "pl24"
}, By = /* @__PURE__ */ L({
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
        vt.warning("至少保留一项哦！");
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
    return Ee(() => {
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
      const s = Kt, u = wn, d = $t;
      return y(), B("div", dy, [fy, py, p("div", vy, [p("ul", hy, [(y(!0), B(je, null, bt(e.block.props.options.defaultValue, (f, m) => (y(), B("li", {
        key: m,
        class: "useDrag"
      }, [my, c(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (v) => f.name = v,
        onInput: (v) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), p("div", {
        class: "del",
        onClick: (v) => o(m)
      }, null, 8, gy)]))), 128)), p("div", by, [c(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: ne(() => [yy, _y]),
        _: 1
      })])])]), $y, p("div", wy, [ky, p("div", null, [c(d, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", Cy, [Sy, p("div", Vy, [c(s, {
        modelValue: e.block.props.selectMin.defaultValue,
        "onUpdate:modelValue": i[1] || (i[1] = (f) => e.block.props.selectMin.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", Oy, [Ey, p("div", xy, [c(s, {
        modelValue: e.block.props.selectMax.defaultValue,
        "onUpdate:modelValue": i[2] || (i[2] = (f) => e.block.props.selectMax.defaultValue = f),
        placeholder: "不限制",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 项 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const Iy = /* @__PURE__ */ Ve(By, [["__scopeId", "data-v-32ae4908"]]), Py = {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  isFormItem: "1",
  value: [],
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  render: (e) => {
    let t = e.props;
    return c(Lb, {
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
  controlView: (e, t) => c(Iy, {
    block: e
  })
}, jy = (e) => (Ke("data-v-6aba8687"), e = e(), Ge(), e), Ty = {
  class: "title-tip"
}, My = {
  key: 0,
  class: "red"
}, Dy = {
  class: "form-item"
}, zy = {
  class: "item"
}, Ay = /* @__PURE__ */ jy(() => /* @__PURE__ */ p("div", {
  class: "right"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png",
  alt: ""
})], -1)), Ly = /* @__PURE__ */ L({
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
    return (t, n) => (y(), B("div", {
      class: "editor-built-in-commen-radio",
      style: pe(e.style)
    }, [p("div", Ty, [e.isRequire ? (y(), B("span", My, "*")) : le("", !0), p("span", null, be(e.title), 1)]), p("div", Dy, [p("div", zy, [p("span", null, be(e.placeholder), 1), Ay])])], 4));
  }
});
const Fy = /* @__PURE__ */ Ve(Ly, [["__scopeId", "data-v-6aba8687"]]), rn = (e) => (Ke("data-v-86c5cbf1"), e = e(), Ge(), e), Ny = {
  class: "editor-built-in-control-commen-radio"
}, Ry = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), qy = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "选项", -1)), Hy = {
  class: "flex mt24 options"
}, Wy = {
  class: "select-group"
}, Uy = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("div", {
  class: "drag"
}, [/* @__PURE__ */ p("div", {
  class: "line"
}), /* @__PURE__ */ p("div", {
  class: "line"
})], -1)), Ky = ["onClick"], Gy = {
  class: "add-btn"
}, Yy = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("img", {
  style: {
    width: "16px"
  },
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png",
  alt: ""
}, null, -1)), Xy = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("span", null, "添加选项", -1)), Zy = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "校验", -1)), Qy = {
  class: "flex mt24 options"
}, Jy = /* @__PURE__ */ rn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), e0 = /* @__PURE__ */ L({
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
        vt.warning("至少保留一项哦！");
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
    return Ee(() => {
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
      const s = Kt, u = wn, d = $t;
      return y(), B("div", Ny, [Ry, qy, p("div", Hy, [p("ul", Wy, [(y(!0), B(je, null, bt(e.block.props.options.defaultValue, (f, m) => (y(), B("li", {
        key: m,
        class: "useDrag"
      }, [Uy, c(s, {
        placeholder: "请输入选项内容",
        style: {
          width: "198px"
        },
        modelValue: f.name,
        "onUpdate:modelValue": (v) => f.name = v,
        onInput: (v) => l(f)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]), p("div", {
        class: "del",
        onClick: (v) => o(m)
      }, null, 8, Ky)]))), 128)), p("div", Gy, [c(u, {
        style: {
          width: "254px"
        },
        onClick: r
      }, {
        default: ne(() => [Yy, Xy]),
        _: 1
      })])])]), Zy, p("div", Qy, [Jy, p("div", null, [c(d, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: i[0] || (i[0] = (f) => n(f, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const t0 = /* @__PURE__ */ Ve(e0, [["__scopeId", "data-v-86c5cbf1"]]), n0 = {
  group: "个人信息（自定义）",
  name: "commenRadio",
  value: "",
  isFormItem: "1",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  render: (e) => {
    let t = e.props;
    return c(Fy, {
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
  controlView: (e, t) => c(t0, {
    block: e
  })
}, Fs = (e) => (Ke("data-v-5f4c52a5"), e = e(), Ge(), e), l0 = {
  class: "title-tip mb8"
}, o0 = {
  key: 0,
  class: "red"
}, a0 = {
  class: "form-item"
}, r0 = {
  class: "item"
}, i0 = {
  class: "item flex"
}, s0 = {
  class: "input"
}, u0 = /* @__PURE__ */ Fs(() => /* @__PURE__ */ p("div", {
  class: "success"
}, [/* @__PURE__ */ p("img", {
  src: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png",
  alt: ""
})], -1)), c0 = /* @__PURE__ */ Fs(() => /* @__PURE__ */ p("div", {
  class: "button"
}, "发送验证码", -1)), d0 = /* @__PURE__ */ L({
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
      return y(), B("div", {
        class: "editor-built-in-check-phone",
        style: pe(e.style)
      }, [p("div", l0, [e.isRequire ? (y(), B("span", o0, "*")) : le("", !0), p("span", null, be(e.title), 1)]), p("div", a0, [p("div", r0, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          width: "100%"
        },
        placeholder: e.placeholder
      }, null, 8, ["placeholder"])]), p("div", i0, [p("div", s0, [c(l, {
        style: {
          height: "40px",
          "line-height": "40px",
          flex: "1"
        },
        placeholder: "验证码"
      }), u0]), c0])])], 4);
    };
  }
});
const f0 = /* @__PURE__ */ Ve(d0, [["__scopeId", "data-v-5f4c52a5"]]), tl = (e) => (Ke("data-v-f4a10f1d"), e = e(), Ge(), e), p0 = {
  class: "editor-built-in-control-check-phone"
}, v0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), h0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), m0 = {
  class: "flex mt24 options"
}, g0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), b0 = {
  class: "flex mt24 options"
}, y0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), _0 = {
  key: 0,
  class: "flex mt24 options"
}, $0 = /* @__PURE__ */ tl(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "校验周期（h）", -1)), w0 = {
  class: "pl24"
}, k0 = /* @__PURE__ */ L({
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
      const r = $t, a = Vt;
      return y(), B("div", p0, [v0, h0, p("div", m0, [g0, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", b0, [y0, p("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (y(), B("div", _0, [$0, p("div", w0, [c(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : le("", !0)]);
    };
  }
});
const C0 = /* @__PURE__ */ Ve(k0, [["__scopeId", "data-v-f4a10f1d"]]), S0 = {
  group: "个人信息",
  name: "checkPhone",
  addOnly: !0,
  value: ["", ""],
  isFormItem: "1",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  render: (e) => {
    let t = e.props;
    return c(f0, {
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
  controlView: (e, t) => c(C0, {
    block: e
  })
}, V0 = {
  class: "title-tip mb8"
}, O0 = {
  key: 0,
  class: "red"
}, E0 = {
  class: "form-item"
}, x0 = /* @__PURE__ */ L({
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
      return y(), B("div", {
        class: "editor-built-in-registor-person-name",
        style: pe(e.style)
      }, [p("div", V0, [e.isRequire ? (y(), B("span", O0, "*")) : le("", !0), p("span", null, be(e.title), 1)]), p("div", E0, [c(l, {
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
const nl = /* @__PURE__ */ Ve(x0, [["__scopeId", "data-v-b47f17b8"]]), sn = (e) => (Ke("data-v-05a6c9a4"), e = e(), Ge(), e), B0 = {
  class: "editor-built-in-control-person-name"
}, I0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), P0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), j0 = {
  class: "flex mt24 options"
}, T0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), M0 = {
  class: "flex mt24 options"
}, D0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), z0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), A0 = {
  class: "flex mt24 options"
}, L0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), F0 = {
  class: "pl24"
}, N0 = {
  class: "flex mt24 options"
}, R0 = /* @__PURE__ */ sn(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), q0 = {
  class: "pl24 flex"
}, H0 = /* @__PURE__ */ L({
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
      const r = $t, a = Vt;
      return y(), B("div", B0, [I0, P0, p("div", j0, [T0, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", M0, [D0, p("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), z0, p("div", A0, [L0, p("div", F0, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", N0, [R0, p("div", q0, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[3] || (o[3] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const W0 = /* @__PURE__ */ Ve(H0, [["__scopeId", "data-v-05a6c9a4"]]), U0 = {
  group: "个人信息",
  name: "personName",
  value: "",
  addOnly: !0,
  isFormItem: "1",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (e) => {
    let t = e.props;
    return c(nl, {
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
  controlView: (e, t) => c(W0, {
    block: e
  })
}, On = (e) => (Ke("data-v-3fd74b8f"), e = e(), Ge(), e), K0 = {
  class: "editor-built-in-control-person-other"
}, G0 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), Y0 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), X0 = {
  class: "flex mt24 options"
}, Z0 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), Q0 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), J0 = {
  class: "flex mt24 options"
}, e1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), t1 = {
  class: "pl24"
}, n1 = {
  class: "flex mt24 options"
}, l1 = /* @__PURE__ */ On(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), o1 = {
  class: "pl24 flex"
}, a1 = /* @__PURE__ */ L({
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
      const r = $t, a = Vt;
      return y(), B("div", K0, [G0, Y0, p("div", X0, [Z0, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), Q0, p("div", J0, [e1, p("div", t1, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", n1, [l1, p("div", o1, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const r1 = /* @__PURE__ */ Ve(a1, [["__scopeId", "data-v-3fd74b8f"]]), i1 = {
  group: "个人信息",
  name: "personOther",
  value: "",
  addOnly: !0,
  isFormItem: "1",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623167655568f0172623167655537679_message.png",
  render: (e) => {
    let t = e.props;
    return c(nl, {
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
  controlView: (e, t) => c(r1, {
    block: e
  })
}, ll = (e) => (Ke("data-v-df798f6e"), e = e(), Ge(), e), s1 = {
  class: "editor-built-in-control-person-phone"
}, u1 = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), c1 = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), d1 = {
  class: "flex mt24 options"
}, f1 = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), p1 = {
  class: "flex mt24 options"
}, v1 = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "提交时校验数据唯一性", -1)), h1 = {
  key: 0,
  class: "flex mt24 options"
}, m1 = /* @__PURE__ */ ll(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "校验周期（h）", -1)), g1 = {
  class: "pl24"
}, b1 = /* @__PURE__ */ L({
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
      const r = $t, a = Vt;
      return y(), B("div", s1, [u1, c1, p("div", d1, [f1, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), p("div", p1, [v1, p("div", null, [c(r, {
        "default-checked": e.block.props.only.defaultValue == "1",
        onChange: o[1] || (o[1] = (i) => n(i, "only"))
      }, null, 8, ["default-checked"])])]), e.block.props.only.defaultValue == "1" ? (y(), B("div", h1, [m1, p("div", g1, [c(a, {
        modelValue: e.block.props.cycle.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.cycle.defaultValue = i),
        placeholder: "正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" h ")]),
        _: 1
      }, 8, ["modelValue"])])])) : le("", !0)]);
    };
  }
});
const y1 = /* @__PURE__ */ Ve(b1, [["__scopeId", "data-v-df798f6e"]]), _1 = {
  group: "个人信息",
  name: "personPhone",
  value: "",
  addOnly: !0,
  isFormItem: "1",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262317879488159172623178794864654_phone.png",
  render: (e) => {
    let t = e.props;
    return c(nl, {
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
  controlView: (e, t) => c(y1, {
    block: e
  })
}, Ha = (e) => (Ke("data-v-fcdbe6a9"), e = e(), Ge(), e), $1 = {
  class: "editor-built-in-control-person-school"
}, w1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), k1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), C1 = {
  class: "flex mt24 options"
}, S1 = /* @__PURE__ */ Ha(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), V1 = /* @__PURE__ */ L({
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
      const r = $t;
      return y(), B("div", $1, [w1, k1, p("div", C1, [S1, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const O1 = /* @__PURE__ */ Ve(V1, [["__scopeId", "data-v-fcdbe6a9"]]), E1 = {
  group: "个人信息",
  name: "personProvince",
  value: "",
  isFormItem: "1",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  render: (e) => {
    let t = e.props;
    return c(nl, {
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
  controlView: (e, t) => c(O1, {
    block: e
  })
}, En = (e) => (Ke("data-v-1418313e"), e = e(), Ge(), e), x1 = {
  class: "editor-built-in-control-person-school"
}, B1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), I1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), P1 = {
  class: "flex mt24 options"
}, j1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), T1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("div", {
  class: "group-title mt24"
}, "填写限制", -1)), M1 = {
  class: "flex mt24 options"
}, D1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最少填", -1)), z1 = {
  class: "pl24"
}, A1 = {
  class: "flex mt24 options"
}, L1 = /* @__PURE__ */ En(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "最多填", -1)), F1 = {
  class: "pl24 flex"
}, N1 = /* @__PURE__ */ L({
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
      const r = $t, a = Vt;
      return y(), B("div", x1, [B1, I1, p("div", P1, [j1, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (i) => n(i, "isRequire"))
      }, null, 8, ["default-checked"])])]), T1, p("div", M1, [D1, p("div", z1, [c(a, {
        modelValue: e.block.props.min.defaultValue,
        "onUpdate:modelValue": o[1] || (o[1] = (i) => e.block.props.min.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])]), p("div", A1, [L1, p("div", F1, [c(a, {
        modelValue: e.block.props.max.defaultValue,
        "onUpdate:modelValue": o[2] || (o[2] = (i) => e.block.props.max.defaultValue = i),
        placeholder: "请输入正整数",
        min: 1,
        max: 100
      }, {
        append: ne(() => [ye(" 字 ")]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const R1 = /* @__PURE__ */ Ve(N1, [["__scopeId", "data-v-1418313e"]]), q1 = {
  group: "个人信息",
  name: "personSchool",
  value: "",
  isFormItem: "1",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  render: (e) => {
    let t = e.props;
    return c(nl, {
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
  controlView: (e, t) => c(R1, {
    block: e
  })
}, H1 = (e) => (Ke("data-v-22530c73"), e = e(), Ge(), e), W1 = {
  class: "title-tip mb8"
}, U1 = {
  key: 0,
  class: "red"
}, K1 = {
  class: "form-item"
}, G1 = /* @__PURE__ */ H1(() => /* @__PURE__ */ p("div", {
  class: "btn"
}, [/* @__PURE__ */ p("span", null, "上传文件"), /* @__PURE__ */ p("input", {
  type: "file",
  class: "file"
})], -1)), Y1 = {
  key: 0,
  class: "tip title-tip"
}, X1 = /* @__PURE__ */ L({
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
    return (t, n) => (y(), B("div", {
      class: "editor-built-in-person-upload",
      style: pe(e.style)
    }, [p("div", W1, [e.isRequire ? (y(), B("span", U1, "*")) : le("", !0), p("span", null, be(e.title), 1)]), p("div", K1, [G1, e.tip ? (y(), B("div", Y1, be(e.tip), 1)) : le("", !0)])], 4));
  }
});
const Z1 = /* @__PURE__ */ Ve(X1, [["__scopeId", "data-v-22530c73"]]), Wa = (e) => (Ke("data-v-be68881f"), e = e(), Ge(), e), Q1 = {
  class: "editor-built-in-control-person-upload"
}, J1 = /* @__PURE__ */ Wa(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), e_ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), t_ = {
  class: "flex mt24 options"
}, n_ = /* @__PURE__ */ Wa(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), l_ = /* @__PURE__ */ L({
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
      const r = $t;
      return y(), B("div", Q1, [J1, e_, p("div", t_, [n_, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const o_ = /* @__PURE__ */ Ve(l_, [["__scopeId", "data-v-be68881f"]]), a_ = {
  group: "个人信息",
  label: "上传文件",
  name: "personUpload",
  value: [],
  isFormItem: "1",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (e) => {
    let t = e.props;
    return c(Z1, {
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
  controlView: (e, t) => c(o_, {
    block: e
  })
}, Ua = (e) => (Ke("data-v-169f549c"), e = e(), Ge(), e), r_ = {
  class: "editor-built-in-control-person-year"
}, i_ = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "h-line"
}, null, -1)), s_ = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("div", {
  class: "group-title"
}, "校验", -1)), u_ = {
  class: "flex mt24 options"
}, c_ = /* @__PURE__ */ Ua(() => /* @__PURE__ */ p("span", {
  class: "option-label"
}, "设为必填", -1)), d_ = /* @__PURE__ */ L({
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
      const r = $t;
      return y(), B("div", r_, [i_, s_, p("div", u_, [c_, p("div", null, [c(r, {
        "default-checked": e.block.props.isRequire.defaultValue == "1",
        onChange: o[0] || (o[0] = (a) => n(a, "isRequire"))
      }, null, 8, ["default-checked"])])])]);
    };
  }
});
const f_ = /* @__PURE__ */ Ve(d_, [["__scopeId", "data-v-169f549c"]]), p_ = {
  class: "title-tip mb8"
}, v_ = {
  key: 0,
  class: "red"
}, h_ = {
  class: "form-item"
}, m_ = /* @__PURE__ */ L({
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
      return y(), B("div", {
        class: "editor-built-in-person-year",
        style: pe(e.style)
      }, [p("div", p_, [e.isRequire ? (y(), B("span", v_, "*")) : le("", !0), p("span", null, be(e.title), 1)]), p("div", h_, [c(o, {
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
          default: ne(() => [ye("2020")]),
          _: 1
        }), c(l, {
          value: 2021
        }, {
          default: ne(() => [ye("2021")]),
          _: 1
        }), c(l, {
          value: 2022
        }, {
          default: ne(() => [ye("2022")]),
          _: 1
        }), c(l, {
          value: 2023
        }, {
          default: ne(() => [ye("2023")]),
          _: 1
        }), c(l, {
          value: 2024
        }, {
          default: ne(() => [ye("2024")]),
          _: 1
        }), c(l, {
          value: 2025
        }, {
          default: ne(() => [ye("2025")]),
          _: 1
        }), c(l, {
          value: 2026
        }, {
          default: ne(() => [ye("2026")]),
          _: 1
        }), c(l, {
          value: 2027
        }, {
          default: ne(() => [ye("2027")]),
          _: 1
        }), c(l, {
          value: 2028
        }, {
          default: ne(() => [ye("2028")]),
          _: 1
        }), c(l, {
          value: 2029
        }, {
          default: ne(() => [ye("2029")]),
          _: 1
        }), c(l, {
          value: 2030
        }, {
          default: ne(() => [ye("2030")]),
          _: 1
        })]),
        _: 1
      }, 8, ["placeholder", "model-value"])])], 4);
    };
  }
});
const g_ = /* @__PURE__ */ Ve(m_, [["__scopeId", "data-v-4752fc19"]]), b_ = {
  group: "个人信息",
  name: "personYear",
  value: "",
  isFormItem: "1",
  addOnly: !0,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (e) => {
    let t = e.props;
    return c(g_, {
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
  controlView: (e, t) => c(f_, {
    block: e
  })
}, la = {
  baseText: Kg,
  baseImg: Jg,
  baseSubmit: bb,
  baseTitle: $b,
  baseSuccess: Ib,
  commenMultiple: Py,
  commenRadio: n0,
  checkPhone: S0,
  personName: U0,
  personOther: i1,
  personPhone: _1,
  personProvince: E1,
  personSchool: q1,
  personUpload: a_,
  personYear: b_
};
function Ns(e, t) {
  t.forEach((n) => {
    if (la[n])
      e.registry(n, la[n]);
    else {
      let l = Object.keys(la);
      console.error(`内置组件不合法，仅支持：${l.join(",")}共${l.length}种类型，如需其他自定义组件 需要使用registor工具手动注册`);
    }
  });
}
const Rs = ["baseImg", "baseSubmit", "baseText", "baseTitle", "baseSuccess", "checkPhone", "personName", "personOther", "personPhone", "personProvince", "personSchool", "personUpload", "personYear", "commenMultiple", "commenRadio"], to = (e) => (Ke("data-v-ce57a2cc"), e = e(), Ge(), e), y_ = {
  class: "visual-tab-type"
}, __ = /* @__PURE__ */ to(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), $_ = /* @__PURE__ */ to(() => /* @__PURE__ */ p("span", null, "组件", -1)), w_ = [__, $_], k_ = /* @__PURE__ */ to(() => /* @__PURE__ */ p("div", {
  class: "bg-com"
}, [/* @__PURE__ */ p("div", {
  class: "bg-img"
})], -1)), C_ = /* @__PURE__ */ to(() => /* @__PURE__ */ p("span", null, "模版", -1)), S_ = [k_, C_], V_ = /* @__PURE__ */ L({
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
    return (l, o) => (y(), B("div", y_, [p("div", {
      class: G(["visual-tab-type-com", {
        active: e.modelValue == "1"
      }]),
      onClick: o[0] || (o[0] = (r) => n("1"))
    }, w_, 2), p("div", {
      class: G(["visual-tab-type-com visual-tab-type-template", {
        active: e.modelValue == "2"
      }]),
      onClick: o[1] || (o[1] = (r) => n("2"))
    }, S_, 2)]));
  }
});
const Bi = /* @__PURE__ */ Ve(V_, [["__scopeId", "data-v-ce57a2cc"]]), O_ = {
  class: "buttons"
}, E_ = ["onClick"], x_ = ["src"], B_ = /* @__PURE__ */ L({
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
      return y(), B("div", O_, [(y(!0), B(je, null, bt(e.buttons, (r, a) => (y(), B("div", {
        class: "button",
        key: a,
        onClick: r.handler
      }, [(y(), ue(o, {
        content: t(r),
        position: "right",
        key: a
      }, {
        default: ne(() => [p("img", {
          src: r.icon,
          alt: ""
        }, null, 8, x_)]),
        _: 2
      }, 1032, ["content"]))], 8, E_))), 128))]);
    };
  }
});
const I_ = /* @__PURE__ */ Ve(B_, [["__scopeId", "data-v-b334d714"]]), P_ = /* @__PURE__ */ L({
  components: {
    editorBlock: pa,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents: _i,
    leftNav: Bi,
    shortcutButton: I_
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
      default: () => Rs
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
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    var $, O, F, q;
    if (($ = e.modelValue) != null && $.container)
      (O = e.modelValue) != null && O.container.width || (e.modelValue.container.width = 350), (F = e.modelValue) != null && F.container.height || (e.modelValue.container.height = 600);
    else
      throw new Error("请检查传入的container！");
    (q = e == null ? void 0 : e.builtInComs) != null && q.length && Ns(Le, e.builtInComs);
    const {
      shiftMove: l = !1,
      shortcutKeys: o = !1
    } = e.config;
    let r = ji(() => e.modelValue, (E) => t("update:modelValue", E)), a = Pe({
      // 当前选中的元素
      selectedBlock: null
    }), i = h(() => ({
      width: r.value.container.width + "px",
      minHeight: r.value.container.height + "px",
      transform: `scale(${r.value.container.scale / 100})`,
      background: `url(${r.value.container.backgroundImage}) no-repeat top center`,
      backgroundColor: r.value.container.backgroundColor,
      backgroundSize: "cover"
    }));
    function s() {
      var E;
      (((E = e.modelValue) == null ? void 0 : E.blocks) || []).map((b) => (b.focus = !1, b));
    }
    function u(E) {
      k.cacheView = null, r.value = {
        ...r.value,
        blocks: Je(E)
      };
    }
    function d(E) {
      r.value.blocks.forEach((b) => {
        if (E.id == b.id)
          for (let x in b)
            k.cacheView = null, b[x] = Je(E[x]);
      });
    }
    function f(E) {
      let b = document.querySelectorAll(".editor-bloack");
      b && (b = Array.from(b)), b.forEach((x) => {
        x.classList.remove("editor-bloack-drag-active");
      }), E && E.classList.add("editor-bloack-drag-active");
    }
    const m = I(null), v = function() {
      let E = {
        component: null
      }, b = {
        dragstart(x, w) {
          var H, Y, W, Z;
          (H = m.value) == null || H.addEventListener("dragenter", b.dragenter), (Y = m.value) == null || Y.addEventListener("dragover", b.dragover), (W = m.value) == null || W.addEventListener("dragleave", b.dragleave), (Z = m.value) == null || Z.addEventListener("drop", b.drop), E.component = w, Dl.emit();
        },
        dragenter(x) {
          Array.from(x.target.classList).includes("editor-bloack") ? f(x.target) : f(), x.dataTransfer.dropEffect = "move";
        },
        dragleave(x) {
          x.dataTransfer.dropEffect = "none";
        },
        dragend(x) {
          var w, H, Y, W;
          (w = m.value) == null || w.removeEventListener("dragenter", b.dragenter), (H = m.value) == null || H.removeEventListener("dragover", b.dragover), (Y = m.value) == null || Y.removeEventListener("dragleave", b.dragleave), (W = m.value) == null || W.removeEventListener("drop", b.drop), E.component = null, zl.emit(), f();
        },
        dragover(x) {
          x.preventDefault();
        },
        drop(x) {
          var Z;
          let w = E.component, H = w == null ? void 0 : w.dragMode, Y = Ya({
            dragMode: H || "",
            widthAdaption100: w.widthAdaption100 ? w.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: w.name,
            props: w.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1
          });
          if (w != null && w.addOnly && !yi(Y, (Z = e.modelValue) == null ? void 0 : Z.blocks)) {
            vt.warning("此组件不能添加多个哦！");
            return;
          }
          let W = x.target.dataset;
          "index" in W ? P.add(Y, W.index) : P.add(Y);
        },
        click(x, w) {
          var W;
          let H = w == null ? void 0 : w.dragMode, Y = Ya({
            dragMode: H || "",
            widthAdaption100: w.widthAdaption100 ? w.widthAdaption100 : !1,
            top: 0,
            left: 0,
            componentKey: w.name,
            props: w.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1
          });
          if (w != null && w.addOnly && !yi(Y, (W = e.modelValue) == null ? void 0 : W.blocks)) {
            vt.warning("此组件不能添加多个哦！");
            return;
          }
          P.add(Y);
        }
      };
      return b;
    }(), g = h(() => {
      var E, b, x;
      return {
        blurBlock: (E = e.modelValue) == null ? void 0 : E.blocks.filter((w) => !w.focus),
        // 当前失去焦点的模块
        focusBlock: (b = e.modelValue) == null ? void 0 : b.blocks.filter((w) => w.focus),
        // 当前获得焦点的模块
        cBlock: (x = e.modelValue) == null ? void 0 : x.blocks.find((w) => w.focus)
        // 当前获得焦点的模块
      };
    });
    let _ = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(E, b) {
          E.stopPropagation(), E.preventDefault(), s(), b.focus = !b.focus, a.selectedBlock = b, z.mousedown(E);
        }
      },
      container: {
        // 点击画布区域的处理的事情
        onMousedown(E) {
          E.preventDefault(), E.stopPropagation(), s(), a.selectedBlock = null;
        }
      }
    };
    const z = function() {
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
      function b(H) {
        var Y, W, Z;
        E.startX = H.clientX, E.startY = H.clientY, E.startPositon = (Y = g.value.focusBlock || []) == null ? void 0 : Y.map((U) => ({
          left: U.left,
          top: U.top
        })), E.draging = !1, E.startLeft = (W = a.selectedBlock) == null ? void 0 : W.left, E.startTop = (Z = a.selectedBlock) == null ? void 0 : Z.top, document.addEventListener("mousemove", x), document.addEventListener("mouseup", w);
      }
      function x(H) {
        var te;
        E.draging || (E.draging = !0, Dl.emit());
        let {
          clientX: Y,
          clientY: W
        } = H, {
          startX: Z,
          startY: U
        } = E;
        (te = g.value.focusBlock) == null || te.forEach((j, C) => {
          j.left = E.startPositon[C].left + (Y - Z), j.top = E.startPositon[C].top + (W - U);
        });
      }
      function w(H) {
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", w), zl.emit();
      }
      return {
        mousedown: b
      };
    }(), P = Nm({
      currentBlockInfo: g,
      updateBlocks: u,
      dataModel: r,
      shortcutKeys: o
    }), V = Fm(P, g, e.debug, e);
    function S(E) {
      P.delete(E);
    }
    const k = {
      // 操作的原数据
      originData: null,
      // 视图缓存
      cacheView: null,
      // 控制层渲染函数
      controlRender() {
        var x, w, H;
        if (((x = this.originData) == null ? void 0 : x.id) === ((w = g.value.cBlock) == null ? void 0 : w.id) && this.cacheView)
          return this.cacheView;
        let E = (H = g.value.cBlock) == null ? void 0 : H.componentKey, b = Le == null ? void 0 : Le.componentMap;
        return E && b && g.value.cBlock ? (this.originData = Je(g.value.cBlock), this.cacheView = b[E].controlView(g.value.cBlock, d), this.cacheView) : null;
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
    ge(() => a.selectedBlock, (E) => {
      E || k.cancleEffect();
    });
    let D = I("1");
    return () => c("div", {
      class: "visual-editor-container"
    }, [e.visableHead && n.header ? c("div", {
      class: "visual-editor-header"
    }, [n.header ? n.header() : null]) : null, c("div", {
      class: "visual-editor-core visual-editor"
    }, [c("div", {
      class: ["visual-editor-leftComponentsMenu", e.visableNavMenu ? "" : "hide"]
    }, [e.visableNavbar ? c(Bi, {
      modelValue: D.value,
      onChange: (E) => D.value = E
    }, null) : null, c("div", {
      class: ["visual-com-group", e.visableNavbar ? "" : "visual-com-group-not-navbar"]
    }, [D.value == "1" ? c(_i, {
      componentLists: Le == null ? void 0 : Le.componentLists,
      menuDragInfo: v
    }, null) : c("div", null, [n.tempList && n.tempList()])])]), c("div", {
      class: "visual-editor-area-body"
    }, [c("div", {
      class: "visual-editor-area-container",
      onMousedown: () => s()
    }, [c("div", {
      class: "visual-editor-area-content",
      style: i.value,
      ref: m,
      onMousedown: (E) => _.container.onMousedown(E)
    }, [r.value.blocks.map((E, b) => {
      var x;
      return c("div", null, [c(pa, {
        index: b,
        block: E,
        container: (x = e.modelValue) == null ? void 0 : x.container,
        onMousedown: (w) => _.block.onMousedown(w, E),
        onDelBlock: () => S(E),
        onUpBlock: P.up,
        onDownBlock: P.down,
        key: E.id
      }, null)]);
    })])])]), c("div", {
      class: "visual-editor-topMenu"
    }, [c(se("shortcut-button"), {
      buttons: V
    }, null)]), c("div", {
      class: "visual-editor-right-seting"
    }, [sg(k.controlRender.bind(k), g, e.modelValue)])])]);
  }
});
const j_ = /* @__PURE__ */ L({
  components: {
    editorBlock: pa
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
    Ns(Le, Rs);
    let n = ji(() => e.modelValue, (r) => t("update:modelValue", r)), l = h(() => ({
      width: n.value.container.width + "px",
      height: n.value.container.height + "px",
      background: `url(${n.value.container.backgroundImage}) no-repeat top center`,
      backgroundColor: n.value.container.backgroundColor,
      backgroundSize: "cover"
    })), o = Le != null && Le.componentMap ? Le == null ? void 0 : Le.componentMap : {};
    return n.value.blocks.forEach((r) => {
      console.log(o, o[r.componentKey]);
    }), () => c("div", {
      class: "priview-visual-editor"
    }, [c("div", {
      class: "priview-visual-editor-area-body"
    }, [c("div", {
      class: "visual-editor-area-container"
    }, [c("div", {
      class: "visual-editor-area-content",
      style: l.value
    }, [n.value.blocks.map((r) => {
      var a;
      return (a = o[r.componentKey]) == null ? void 0 : a.render(r);
    })])])])]);
  }
}), qs = Le.registry, Hs = P_, T_ = j_, M_ = function(e) {
  qs(e.name, e);
}, D_ = function(e) {
  Hs.batchRegistry(e);
}, z_ = function() {
  return Le == null ? void 0 : Le.componentLists;
}, F_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _registry: qs,
  batchRegistry: D_,
  logConfig: z_,
  priviewVisualEditor: T_,
  registry: M_,
  visualEditor: Hs
}, Symbol.toStringTag, { value: "Module" }));
export {
  D_ as batchRegistry,
  F_ as default,
  z_ as logConfig,
  T_ as priviewVisualEditor,
  M_ as registry,
  Hs as visualEditor
};
