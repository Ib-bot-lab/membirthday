(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) s(E);
  new MutationObserver((E) => {
    for (const _ of E)
      if (_.type === "childList")
        for (const U of _.addedNodes)
          U.tagName === "LINK" && U.rel === "modulepreload" && s(U);
  }).observe(document, { childList: !0, subtree: !0 });
  function z(E) {
    const _ = {};
    return (
      E.integrity && (_.integrity = E.integrity),
      E.referrerPolicy && (_.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === "use-credentials"
        ? (_.credentials = "include")
        : E.crossOrigin === "anonymous"
        ? (_.credentials = "omit")
        : (_.credentials = "same-origin"),
      _
    );
  }
  function s(E) {
    if (E.ep) return;
    E.ep = !0;
    const _ = z(E);
    fetch(E.href, _);
  }
})();
var tf = { exports: {} },
  pu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar;
function kh() {
  if (ar) return pu;
  ar = 1;
  var c = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.fragment");
  function z(s, E, _) {
    var U = null;
    if (
      (_ !== void 0 && (U = "" + _),
      E.key !== void 0 && (U = "" + E.key),
      "key" in E)
    ) {
      _ = {};
      for (var N in E) N !== "key" && (_[N] = E[N]);
    } else _ = E;
    return (
      (E = _.ref),
      { $$typeof: c, type: s, key: U, ref: E !== void 0 ? E : null, props: _ }
    );
  }
  return (pu.Fragment = S), (pu.jsx = z), (pu.jsxs = z), pu;
}
var ur;
function Wh() {
  return ur || ((ur = 1), (tf.exports = kh())), tf.exports;
}
var w = Wh(),
  lf = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr;
function $h() {
  if (nr) return V;
  nr = 1;
  var c = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    _ = Symbol.for("react.consumer"),
    U = Symbol.for("react.context"),
    N = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    Q = Symbol.iterator;
  function F(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (Q && d[Q]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var St = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    yt = Object.assign,
    dt = {};
  function Ut(d, O, j) {
    (this.props = d),
      (this.context = O),
      (this.refs = dt),
      (this.updater = j || St);
  }
  (Ut.prototype.isReactComponent = {}),
    (Ut.prototype.setState = function (d, O) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, d, O, "setState");
    }),
    (Ut.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    });
  function Ml() {}
  Ml.prototype = Ut.prototype;
  function hl(d, O, j) {
    (this.props = d),
      (this.context = O),
      (this.refs = dt),
      (this.updater = j || St);
  }
  var qt = (hl.prototype = new Ml());
  (qt.constructor = hl), yt(qt, Ut.prototype), (qt.isPureReactComponent = !0);
  var yl = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    wt = Object.prototype.hasOwnProperty;
  function Kt(d, O, j, H, Y, tt) {
    return (
      (j = tt.ref),
      { $$typeof: c, type: d, key: O, ref: j !== void 0 ? j : null, props: tt }
    );
  }
  function Jt(d, O) {
    return Kt(d.type, O, void 0, void 0, void 0, d.props);
  }
  function Sl(d) {
    return typeof d == "object" && d !== null && d.$$typeof === c;
  }
  function je(d) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (j) {
        return O[j];
      })
    );
  }
  var _l = /\/+/g;
  function jt(d, O) {
    return typeof d == "object" && d !== null && d.key != null
      ? je("" + d.key)
      : O.toString(36);
  }
  function ye() {}
  function me(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(ye, ye)
            : ((d.status = "pending"),
              d.then(
                function (O) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = O));
                },
                function (O) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = O));
                }
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function Bt(d, O, j, H, Y) {
    var tt = typeof d;
    (tt === "undefined" || tt === "boolean") && (d = null);
    var L = !1;
    if (d === null) L = !0;
    else
      switch (tt) {
        case "bigint":
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case c:
            case S:
              L = !0;
              break;
            case R:
              return (L = d._init), Bt(L(d._payload), O, j, H, Y);
          }
      }
    if (L)
      return (
        (Y = Y(d)),
        (L = H === "" ? "." + jt(d, 0) : H),
        yl(Y)
          ? ((j = ""),
            L != null && (j = L.replace(_l, "$&/") + "/"),
            Bt(Y, O, j, "", function (Ll) {
              return Ll;
            }))
          : Y != null &&
            (Sl(Y) &&
              (Y = Jt(
                Y,
                j +
                  (Y.key == null || (d && d.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(_l, "$&/") + "/") +
                  L
              )),
            O.push(Y)),
        1
      );
    L = 0;
    var kt = H === "" ? "." : H + ":";
    if (yl(d))
      for (var rt = 0; rt < d.length; rt++)
        (H = d[rt]), (tt = kt + jt(H, rt)), (L += Bt(H, O, j, tt, Y));
    else if (((rt = F(d)), typeof rt == "function"))
      for (d = rt.call(d), rt = 0; !(H = d.next()).done; )
        (H = H.value), (tt = kt + jt(H, rt++)), (L += Bt(H, O, j, tt, Y));
    else if (tt === "object") {
      if (typeof d.then == "function") return Bt(me(d), O, j, H, Y);
      throw (
        ((O = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return L;
  }
  function T(d, O, j) {
    if (d == null) return d;
    var H = [],
      Y = 0;
    return (
      Bt(d, H, "", "", function (tt) {
        return O.call(j, tt, Y++);
      }),
      H
    );
  }
  function q(d) {
    if (d._status === -1) {
      var O = d._result;
      (O = O()),
        O.then(
          function (j) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = j));
          },
          function (j) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = j));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = O));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var Z =
    typeof reportError == "function"
      ? reportError
      : function (d) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var O = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof d == "object" &&
                d !== null &&
                typeof d.message == "string"
                  ? String(d.message)
                  : String(d),
              error: d,
            });
            if (!window.dispatchEvent(O)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", d);
            return;
          }
          console.error(d);
        };
  function ft() {}
  return (
    (V.Children = {
      map: T,
      forEach: function (d, O, j) {
        T(
          d,
          function () {
            O.apply(this, arguments);
          },
          j
        );
      },
      count: function (d) {
        var O = 0;
        return (
          T(d, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (d) {
        return (
          T(d, function (O) {
            return O;
          }) || []
        );
      },
      only: function (d) {
        if (!Sl(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    }),
    (V.Component = Ut),
    (V.Fragment = z),
    (V.Profiler = E),
    (V.PureComponent = hl),
    (V.StrictMode = s),
    (V.Suspense = D),
    (V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (V.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return P.H.useMemoCache(d);
      },
    }),
    (V.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (V.cloneElement = function (d, O, j) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + "."
        );
      var H = yt({}, d.props),
        Y = d.key,
        tt = void 0;
      if (O != null)
        for (L in (O.ref !== void 0 && (tt = void 0),
        O.key !== void 0 && (Y = "" + O.key),
        O))
          !wt.call(O, L) ||
            L === "key" ||
            L === "__self" ||
            L === "__source" ||
            (L === "ref" && O.ref === void 0) ||
            (H[L] = O[L]);
      var L = arguments.length - 2;
      if (L === 1) H.children = j;
      else if (1 < L) {
        for (var kt = Array(L), rt = 0; rt < L; rt++)
          kt[rt] = arguments[rt + 2];
        H.children = kt;
      }
      return Kt(d.type, Y, void 0, void 0, tt, H);
    }),
    (V.createContext = function (d) {
      return (
        (d = {
          $$typeof: U,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: _, _context: d }),
        d
      );
    }),
    (V.createElement = function (d, O, j) {
      var H,
        Y = {},
        tt = null;
      if (O != null)
        for (H in (O.key !== void 0 && (tt = "" + O.key), O))
          wt.call(O, H) &&
            H !== "key" &&
            H !== "__self" &&
            H !== "__source" &&
            (Y[H] = O[H]);
      var L = arguments.length - 2;
      if (L === 1) Y.children = j;
      else if (1 < L) {
        for (var kt = Array(L), rt = 0; rt < L; rt++)
          kt[rt] = arguments[rt + 2];
        Y.children = kt;
      }
      if (d && d.defaultProps)
        for (H in ((L = d.defaultProps), L)) Y[H] === void 0 && (Y[H] = L[H]);
      return Kt(d, tt, void 0, void 0, null, Y);
    }),
    (V.createRef = function () {
      return { current: null };
    }),
    (V.forwardRef = function (d) {
      return { $$typeof: N, render: d };
    }),
    (V.isValidElement = Sl),
    (V.lazy = function (d) {
      return { $$typeof: R, _payload: { _status: -1, _result: d }, _init: q };
    }),
    (V.memo = function (d, O) {
      return { $$typeof: g, type: d, compare: O === void 0 ? null : O };
    }),
    (V.startTransition = function (d) {
      var O = P.T,
        j = {};
      P.T = j;
      try {
        var H = d(),
          Y = P.S;
        Y !== null && Y(j, H),
          typeof H == "object" &&
            H !== null &&
            typeof H.then == "function" &&
            H.then(ft, Z);
      } catch (tt) {
        Z(tt);
      } finally {
        P.T = O;
      }
    }),
    (V.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (V.use = function (d) {
      return P.H.use(d);
    }),
    (V.useActionState = function (d, O, j) {
      return P.H.useActionState(d, O, j);
    }),
    (V.useCallback = function (d, O) {
      return P.H.useCallback(d, O);
    }),
    (V.useContext = function (d) {
      return P.H.useContext(d);
    }),
    (V.useDebugValue = function () {}),
    (V.useDeferredValue = function (d, O) {
      return P.H.useDeferredValue(d, O);
    }),
    (V.useEffect = function (d, O, j) {
      var H = P.H;
      if (typeof j == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return H.useEffect(d, O);
    }),
    (V.useId = function () {
      return P.H.useId();
    }),
    (V.useImperativeHandle = function (d, O, j) {
      return P.H.useImperativeHandle(d, O, j);
    }),
    (V.useInsertionEffect = function (d, O) {
      return P.H.useInsertionEffect(d, O);
    }),
    (V.useLayoutEffect = function (d, O) {
      return P.H.useLayoutEffect(d, O);
    }),
    (V.useMemo = function (d, O) {
      return P.H.useMemo(d, O);
    }),
    (V.useOptimistic = function (d, O) {
      return P.H.useOptimistic(d, O);
    }),
    (V.useReducer = function (d, O, j) {
      return P.H.useReducer(d, O, j);
    }),
    (V.useRef = function (d) {
      return P.H.useRef(d);
    }),
    (V.useState = function (d) {
      return P.H.useState(d);
    }),
    (V.useSyncExternalStore = function (d, O, j) {
      return P.H.useSyncExternalStore(d, O, j);
    }),
    (V.useTransition = function () {
      return P.H.useTransition();
    }),
    (V.version = "19.1.0"),
    V
  );
}
var ir;
function ff() {
  return ir || ((ir = 1), (lf.exports = $h())), lf.exports;
}
var Ta = ff(),
  ef = { exports: {} },
  Tu = {},
  af = { exports: {} },
  uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr;
function Ih() {
  return (
    cr ||
      ((cr = 1),
      (function (c) {
        function S(T, q) {
          var Z = T.length;
          T.push(q);
          t: for (; 0 < Z; ) {
            var ft = (Z - 1) >>> 1,
              d = T[ft];
            if (0 < E(d, q)) (T[ft] = q), (T[Z] = d), (Z = ft);
            else break t;
          }
        }
        function z(T) {
          return T.length === 0 ? null : T[0];
        }
        function s(T) {
          if (T.length === 0) return null;
          var q = T[0],
            Z = T.pop();
          if (Z !== q) {
            T[0] = Z;
            t: for (var ft = 0, d = T.length, O = d >>> 1; ft < O; ) {
              var j = 2 * (ft + 1) - 1,
                H = T[j],
                Y = j + 1,
                tt = T[Y];
              if (0 > E(H, Z))
                Y < d && 0 > E(tt, H)
                  ? ((T[ft] = tt), (T[Y] = Z), (ft = Y))
                  : ((T[ft] = H), (T[j] = Z), (ft = j));
              else if (Y < d && 0 > E(tt, Z))
                (T[ft] = tt), (T[Y] = Z), (ft = Y);
              else break t;
            }
          }
          return q;
        }
        function E(T, q) {
          var Z = T.sortIndex - q.sortIndex;
          return Z !== 0 ? Z : T.id - q.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var _ = performance;
          c.unstable_now = function () {
            return _.now();
          };
        } else {
          var U = Date,
            N = U.now();
          c.unstable_now = function () {
            return U.now() - N;
          };
        }
        var D = [],
          g = [],
          R = 1,
          Q = null,
          F = 3,
          St = !1,
          yt = !1,
          dt = !1,
          Ut = !1,
          Ml = typeof setTimeout == "function" ? setTimeout : null,
          hl = typeof clearTimeout == "function" ? clearTimeout : null,
          qt = typeof setImmediate < "u" ? setImmediate : null;
        function yl(T) {
          for (var q = z(g); q !== null; ) {
            if (q.callback === null) s(g);
            else if (q.startTime <= T)
              s(g), (q.sortIndex = q.expirationTime), S(D, q);
            else break;
            q = z(g);
          }
        }
        function P(T) {
          if (((dt = !1), yl(T), !yt))
            if (z(D) !== null) (yt = !0), wt || ((wt = !0), jt());
            else {
              var q = z(g);
              q !== null && Bt(P, q.startTime - T);
            }
        }
        var wt = !1,
          Kt = -1,
          Jt = 5,
          Sl = -1;
        function je() {
          return Ut ? !0 : !(c.unstable_now() - Sl < Jt);
        }
        function _l() {
          if (((Ut = !1), wt)) {
            var T = c.unstable_now();
            Sl = T;
            var q = !0;
            try {
              t: {
                (yt = !1), dt && ((dt = !1), hl(Kt), (Kt = -1)), (St = !0);
                var Z = F;
                try {
                  l: {
                    for (
                      yl(T), Q = z(D);
                      Q !== null && !(Q.expirationTime > T && je());

                    ) {
                      var ft = Q.callback;
                      if (typeof ft == "function") {
                        (Q.callback = null), (F = Q.priorityLevel);
                        var d = ft(Q.expirationTime <= T);
                        if (((T = c.unstable_now()), typeof d == "function")) {
                          (Q.callback = d), yl(T), (q = !0);
                          break l;
                        }
                        Q === z(D) && s(D), yl(T);
                      } else s(D);
                      Q = z(D);
                    }
                    if (Q !== null) q = !0;
                    else {
                      var O = z(g);
                      O !== null && Bt(P, O.startTime - T), (q = !1);
                    }
                  }
                  break t;
                } finally {
                  (Q = null), (F = Z), (St = !1);
                }
                q = void 0;
              }
            } finally {
              q ? jt() : (wt = !1);
            }
          }
        }
        var jt;
        if (typeof qt == "function")
          jt = function () {
            qt(_l);
          };
        else if (typeof MessageChannel < "u") {
          var ye = new MessageChannel(),
            me = ye.port2;
          (ye.port1.onmessage = _l),
            (jt = function () {
              me.postMessage(null);
            });
        } else
          jt = function () {
            Ml(_l, 0);
          };
        function Bt(T, q) {
          Kt = Ml(function () {
            T(c.unstable_now());
          }, q);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (T) {
            T.callback = null;
          }),
          (c.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Jt = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return F;
          }),
          (c.unstable_next = function (T) {
            switch (F) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = F;
            }
            var Z = F;
            F = q;
            try {
              return T();
            } finally {
              F = Z;
            }
          }),
          (c.unstable_requestPaint = function () {
            Ut = !0;
          }),
          (c.unstable_runWithPriority = function (T, q) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                T = 3;
            }
            var Z = F;
            F = T;
            try {
              return q();
            } finally {
              F = Z;
            }
          }),
          (c.unstable_scheduleCallback = function (T, q, Z) {
            var ft = c.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? ft + Z : ft))
                : (Z = ft),
              T)
            ) {
              case 1:
                var d = -1;
                break;
              case 2:
                d = 250;
                break;
              case 5:
                d = 1073741823;
                break;
              case 4:
                d = 1e4;
                break;
              default:
                d = 5e3;
            }
            return (
              (d = Z + d),
              (T = {
                id: R++,
                callback: q,
                priorityLevel: T,
                startTime: Z,
                expirationTime: d,
                sortIndex: -1,
              }),
              Z > ft
                ? ((T.sortIndex = Z),
                  S(g, T),
                  z(D) === null &&
                    T === z(g) &&
                    (dt ? (hl(Kt), (Kt = -1)) : (dt = !0), Bt(P, Z - ft)))
                : ((T.sortIndex = d),
                  S(D, T),
                  yt || St || ((yt = !0), wt || ((wt = !0), jt()))),
              T
            );
          }),
          (c.unstable_shouldYield = je),
          (c.unstable_wrapCallback = function (T) {
            var q = F;
            return function () {
              var Z = F;
              F = q;
              try {
                return T.apply(this, arguments);
              } finally {
                F = Z;
              }
            };
          });
      })(uf)),
    uf
  );
}
var fr;
function Fh() {
  return fr || ((fr = 1), (af.exports = Ih())), af.exports;
}
var nf = { exports: {} },
  Gt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr;
function Ph() {
  if (sr) return Gt;
  sr = 1;
  var c = ff();
  function S(D) {
    var g = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        g += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function z() {}
  var s = {
      d: {
        f: z,
        r: function () {
          throw Error(S(522));
        },
        D: z,
        C: z,
        L: z,
        m: z,
        X: z,
        S: z,
        M: z,
      },
      p: 0,
      findDOMNode: null,
    },
    E = Symbol.for("react.portal");
  function _(D, g, R) {
    var Q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: Q == null ? null : "" + Q,
      children: D,
      containerInfo: g,
      implementation: R,
    };
  }
  var U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function N(D, g) {
    if (D === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Gt.createPortal = function (D, g) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(S(299));
      return _(D, g, null, R);
    }),
    (Gt.flushSync = function (D) {
      var g = U.T,
        R = s.p;
      try {
        if (((U.T = null), (s.p = 2), D)) return D();
      } finally {
        (U.T = g), (s.p = R), s.d.f();
      }
    }),
    (Gt.preconnect = function (D, g) {
      typeof D == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        s.d.C(D, g));
    }),
    (Gt.prefetchDNS = function (D) {
      typeof D == "string" && s.d.D(D);
    }),
    (Gt.preinit = function (D, g) {
      if (typeof D == "string" && g && typeof g.as == "string") {
        var R = g.as,
          Q = N(R, g.crossOrigin),
          F = typeof g.integrity == "string" ? g.integrity : void 0,
          St = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        R === "style"
          ? s.d.S(D, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: Q,
              integrity: F,
              fetchPriority: St,
            })
          : R === "script" &&
            s.d.X(D, {
              crossOrigin: Q,
              integrity: F,
              fetchPriority: St,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Gt.preinitModule = function (D, g) {
      if (typeof D == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var R = N(g.as, g.crossOrigin);
            s.d.M(D, {
              crossOrigin: R,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(D);
    }),
    (Gt.preload = function (D, g) {
      if (
        typeof D == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var R = g.as,
          Q = N(R, g.crossOrigin);
        s.d.L(D, R, {
          crossOrigin: Q,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Gt.preloadModule = function (D, g) {
      if (typeof D == "string")
        if (g) {
          var R = N(g.as, g.crossOrigin);
          s.d.m(D, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: R,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else s.d.m(D);
    }),
    (Gt.requestFormReset = function (D) {
      s.d.r(D);
    }),
    (Gt.unstable_batchedUpdates = function (D, g) {
      return D(g);
    }),
    (Gt.useFormState = function (D, g, R) {
      return U.H.useFormState(D, g, R);
    }),
    (Gt.useFormStatus = function () {
      return U.H.useHostTransitionStatus();
    }),
    (Gt.version = "19.1.0"),
    Gt
  );
}
var or;
function ty() {
  if (or) return nf.exports;
  or = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (S) {
        console.error(S);
      }
  }
  return c(), (nf.exports = Ph()), nf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr;
function ly() {
  if (dr) return Tu;
  dr = 1;
  var c = Fh(),
    S = ff(),
    z = ty();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function E(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function _(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do (l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return);
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function U(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (_(t) !== t) throw Error(s(188));
  }
  function D(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = _(t)), l === null)) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return N(u), t;
          if (n === a) return N(u), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === e) {
            (i = !0), (e = u), (a = n);
            break;
          }
          if (f === a) {
            (i = !0), (a = u), (e = n);
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === e) {
              (i = !0), (e = n), (a = u);
              break;
            }
            if (f === a) {
              (i = !0), (a = n), (e = u);
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function g(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = g(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign,
    Q = Symbol.for("react.element"),
    F = Symbol.for("react.transitional.element"),
    St = Symbol.for("react.portal"),
    yt = Symbol.for("react.fragment"),
    dt = Symbol.for("react.strict_mode"),
    Ut = Symbol.for("react.profiler"),
    Ml = Symbol.for("react.provider"),
    hl = Symbol.for("react.consumer"),
    qt = Symbol.for("react.context"),
    yl = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    wt = Symbol.for("react.suspense_list"),
    Kt = Symbol.for("react.memo"),
    Jt = Symbol.for("react.lazy"),
    Sl = Symbol.for("react.activity"),
    je = Symbol.for("react.memo_cache_sentinel"),
    _l = Symbol.iterator;
  function jt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (_l && t[_l]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ye = Symbol.for("react.client.reference");
  function me(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ye ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case yt:
        return "Fragment";
      case Ut:
        return "Profiler";
      case dt:
        return "StrictMode";
      case P:
        return "Suspense";
      case wt:
        return "SuspenseList";
      case Sl:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case St:
          return "Portal";
        case qt:
          return (t.displayName || "Context") + ".Provider";
        case hl:
          return (t._context.displayName || "Context") + ".Consumer";
        case yl:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Kt:
          return (
            (l = t.displayName || null), l !== null ? l : me(t.type) || "Memo"
          );
        case Jt:
          (l = t._payload), (t = t._init);
          try {
            return me(t(l));
          } catch {}
      }
    return null;
  }
  var Bt = Array.isArray,
    T = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    ft = [],
    d = -1;
  function O(t) {
    return { current: t };
  }
  function j(t) {
    0 > d || ((t.current = ft[d]), (ft[d] = null), d--);
  }
  function H(t, l) {
    d++, (ft[d] = t.current), (t.current = l);
  }
  var Y = O(null),
    tt = O(null),
    L = O(null),
    kt = O(null);
  function rt(t, l) {
    switch ((H(L, l), H(tt, t), H(Y, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Nd(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          (l = Nd(l)), (t = Hd(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    j(Y), H(Y, t);
  }
  function Ll() {
    j(Y), j(tt), j(L);
  }
  function Xn(t) {
    t.memoizedState !== null && H(kt, t);
    var l = Y.current,
      e = Hd(l, t.type);
    l !== e && (H(tt, t), H(Y, e));
  }
  function Eu(t) {
    tt.current === t && (j(Y), j(tt)),
      kt.current === t && (j(kt), (mu._currentValue = Z));
  }
  var Qn = Object.prototype.hasOwnProperty,
    Zn = c.unstable_scheduleCallback,
    Cn = c.unstable_cancelCallback,
    _r = c.unstable_shouldYield,
    Dr = c.unstable_requestPaint,
    gl = c.unstable_now,
    Or = c.unstable_getCurrentPriorityLevel,
    of = c.unstable_ImmediatePriority,
    df = c.unstable_UserBlockingPriority,
    Au = c.unstable_NormalPriority,
    Ur = c.unstable_LowPriority,
    rf = c.unstable_IdlePriority,
    Rr = c.log,
    Nr = c.unstable_setDisableYieldValue,
    Aa = null,
    Wt = null;
  function Vl(t) {
    if (
      (typeof Rr == "function" && Nr(t),
      Wt && typeof Wt.setStrictMode == "function")
    )
      try {
        Wt.setStrictMode(Aa, t);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : jr,
    Hr = Math.log,
    qr = Math.LN2;
  function jr(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Hr(t) / qr) | 0)) | 0;
  }
  var zu = 256,
    Mu = 4194304;
  function ve(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function _u(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (u = ve(a))
            : ((i &= f),
              i !== 0
                ? (u = ve(i))
                : e || ((e = f & ~t), e !== 0 && (u = ve(e)))))
        : ((f = a & ~n),
          f !== 0
            ? (u = ve(f))
            : i !== 0
            ? (u = ve(i))
            : e || ((e = a & ~t), e !== 0 && (u = ve(e)))),
      u === 0
        ? 0
        : l !== 0 &&
          l !== u &&
          (l & n) === 0 &&
          ((n = u & -u),
          (e = l & -l),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? l
        : u
    );
  }
  function za(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Br(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hf() {
    var t = zu;
    return (zu <<= 1), (zu & 4194048) === 0 && (zu = 256), t;
  }
  function yf() {
    var t = Mu;
    return (Mu <<= 1), (Mu & 62914560) === 0 && (Mu = 4194304), t;
  }
  function Ln(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ma(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function xr(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var f = t.entanglements,
      o = t.expirationTimes,
      m = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var p = 31 - $t(e),
        M = 1 << p;
      (f[p] = 0), (o[p] = -1);
      var v = m[p];
      if (v !== null)
        for (m[p] = null, p = 0; p < v.length; p++) {
          var b = v[p];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~M;
    }
    a !== 0 && mf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function mf(t, l, e) {
    (t.pendingLanes |= l), (t.suspendedLanes &= ~l);
    var a = 31 - $t(l);
    (t.entangledLanes |= l),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function vf(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var a = 31 - $t(e),
        u = 1 << a;
      (u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u);
    }
  }
  function Vn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function wn(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function bf() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Id(t.type));
  }
  function Yr(t, l) {
    var e = q.p;
    try {
      return (q.p = t), l();
    } finally {
      q.p = e;
    }
  }
  var wl = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + wl,
    Qt = "__reactProps$" + wl,
    Be = "__reactContainer$" + wl,
    Kn = "__reactEvents$" + wl,
    Gr = "__reactListeners$" + wl,
    Xr = "__reactHandles$" + wl,
    Sf = "__reactResources$" + wl,
    _a = "__reactMarker$" + wl;
  function Jn(t) {
    delete t[xt], delete t[Qt], delete t[Kn], delete t[Gr], delete t[Xr];
  }
  function xe(t) {
    var l = t[xt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[Be] || e[xt])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = xd(t); t !== null; ) {
            if ((e = t[xt])) return e;
            t = xd(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function Ye(t) {
    if ((t = t[xt] || t[Be])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Da(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Ge(t) {
    var l = t[Sf];
    return (
      l ||
        (l = t[Sf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function Mt(t) {
    t[_a] = !0;
  }
  var gf = new Set(),
    pf = {};
  function be(t, l) {
    Xe(t, l), Xe(t + "Capture", l);
  }
  function Xe(t, l) {
    for (pf[t] = l, t = 0; t < l.length; t++) gf.add(l[t]);
  }
  var Qr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Tf = {},
    Ef = {};
  function Zr(t) {
    return Qn.call(Ef, t)
      ? !0
      : Qn.call(Tf, t)
      ? !1
      : Qr.test(t)
      ? (Ef[t] = !0)
      : ((Tf[t] = !0), !1);
  }
  function Du(t, l, e) {
    if (Zr(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Ou(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Dl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var kn, Af;
  function Qe(t) {
    if (kn === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        (kn = (l && l[1]) || ""),
          (Af =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      kn +
      t +
      Af
    );
  }
  var Wn = !1;
  function $n(t, l) {
    if (!t || Wn) return "";
    Wn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (b) {
                  var v = b;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (b) {
                  v = b;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                v = b;
              }
              (M = t()) &&
                typeof M.catch == "function" &&
                M.catch(function () {});
            }
          } catch (b) {
            if (b && v && typeof b.stack == "string") return [b.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var o = i.split(`
`),
          m = f.split(`
`);
        for (
          u = a = 0;
          a < o.length && !o[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === o.length || u === m.length)
          for (
            a = o.length - 1, u = m.length - 1;
            1 <= a && 0 <= u && o[a] !== m[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (o[a] !== m[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || o[a] !== m[u])) {
                  var p =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", t.displayName)),
                    p
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (Wn = !1), (Error.prepareStackTrace = e);
    }
    return (e = t ? t.displayName || t.name : "") ? Qe(e) : "";
  }
  function Cr(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Qe(t.type);
      case 16:
        return Qe("Lazy");
      case 13:
        return Qe("Suspense");
      case 19:
        return Qe("SuspenseList");
      case 0:
      case 15:
        return $n(t.type, !1);
      case 11:
        return $n(t.type.render, !1);
      case 1:
        return $n(t.type, !0);
      case 31:
        return Qe("Activity");
      default:
        return "";
    }
  }
  function zf(t) {
    try {
      var l = "";
      do (l += Cr(t)), (t = t.return);
      while (t);
      return l;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function ul(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Mf(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function Lr(t) {
    var l = Mf(t) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
      a = "" + t[l];
    if (
      !t.hasOwnProperty(l) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (a = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[l];
          },
        }
      );
    }
  }
  function Uu(t) {
    t._valueTracker || (t._valueTracker = Lr(t));
  }
  function _f(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      a = "";
    return (
      t && (a = Mf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Ru(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Vr = /[\n"\\]/g;
  function nl(t) {
    return t.replace(Vr, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function In(t, l, e, a, u, n, i, f) {
    (t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + ul(l))
          : t.value !== "" + ul(l) && (t.value = "" + ul(l))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      l != null
        ? Fn(t, i, ul(l))
        : e != null
        ? Fn(t, i, ul(e))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.name = "" + ul(f))
        : t.removeAttribute("name");
  }
  function Df(t, l, e, a, u, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (e = e != null ? "" + ul(e) : ""),
        (l = l != null ? "" + ul(l) : e),
        f || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = f ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i);
  }
  function Fn(t, l, e) {
    (l === "number" && Ru(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function Ze(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {};
      for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        (u = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== u && (t[e].selected = u),
          u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + ul(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Of(t, l, e) {
    if (
      l != null &&
      ((l = "" + ul(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + ul(e) : "";
  }
  function Uf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Bt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (l = e);
    }
    (e = ul(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== "" && a !== null && (t.value = a);
  }
  function Ce(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var wr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rf(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? t.setProperty(l, "")
        : l === "float"
        ? (t.cssFloat = "")
        : (t[l] = "")
      : a
      ? t.setProperty(l, e)
      : typeof e != "number" || e === 0 || wr.has(l)
      ? l === "float"
        ? (t.cssFloat = e)
        : (t[l] = ("" + e).trim())
      : (t[l] = e + "px");
  }
  function Nf(t, l, e) {
    if (l != null && typeof l != "object") throw Error(s(62));
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in l)
        (a = l[u]), l.hasOwnProperty(u) && e[u] !== a && Rf(t, u, a);
    } else for (var n in l) l.hasOwnProperty(n) && Rf(t, n, l[n]);
  }
  function Pn(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Jr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(t) {
    return Jr.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var ti = null;
  function li(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Le = null,
    Ve = null;
  function Hf(t) {
    var l = Ye(t);
    if (l && (t = l.stateNode)) {
      var e = t[Qt] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (In(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + nl("" + l) + '"][type="radio"]'
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[Qt] || null;
                if (!u) throw Error(s(90));
                In(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              (a = e[l]), a.form === t.form && _f(a);
          }
          break t;
        case "textarea":
          Of(t, e.value, e.defaultValue);
          break t;
        case "select":
          (l = e.value), l != null && Ze(t, !!e.multiple, l, !1);
      }
    }
  }
  var ei = !1;
  function qf(t, l, e) {
    if (ei) return t(l, e);
    ei = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (
        ((ei = !1),
        (Le !== null || Ve !== null) &&
          (bn(), Le && ((l = Le), (t = Ve), (Ve = Le = null), Hf(l), t)))
      )
        for (l = 0; l < t.length; l++) Hf(t[l]);
    }
  }
  function Oa(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[Qt] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(s(231, l, typeof e));
    return e;
  }
  var Ol = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ai = !1;
  if (Ol)
    try {
      var Ua = {};
      Object.defineProperty(Ua, "passive", {
        get: function () {
          ai = !0;
        },
      }),
        window.addEventListener("test", Ua, Ua),
        window.removeEventListener("test", Ua, Ua);
    } catch {
      ai = !1;
    }
  var Kl = null,
    ui = null,
    Hu = null;
  function jf() {
    if (Hu) return Hu;
    var t,
      l = ui,
      e = l.length,
      a,
      u = "value" in Kl ? Kl.value : Kl.textContent,
      n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++);
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
    return (Hu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function qu(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ju() {
    return !0;
  }
  function Bf() {
    return !1;
  }
  function Zt(t) {
    function l(e, a, u, n, i) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var f in t)
        t.hasOwnProperty(f) && ((e = t[f]), (this[f] = e ? e(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? ju
          : Bf),
        (this.isPropagationStopped = Bf),
        this
      );
    }
    return (
      R(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = ju));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = ju));
        },
        persist: function () {},
        isPersistent: ju,
      }),
      l
    );
  }
  var Se = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bu = Zt(Se),
    Ra = R({}, Se, { view: 0, detail: 0 }),
    kr = Zt(Ra),
    ni,
    ii,
    Na,
    xu = R({}, Ra, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Na &&
              (Na && t.type === "mousemove"
                ? ((ni = t.screenX - Na.screenX), (ii = t.screenY - Na.screenY))
                : (ii = ni = 0),
              (Na = t)),
            ni);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ii;
      },
    }),
    xf = Zt(xu),
    Wr = R({}, xu, { dataTransfer: 0 }),
    $r = Zt(Wr),
    Ir = R({}, Ra, { relatedTarget: 0 }),
    ci = Zt(Ir),
    Fr = R({}, Se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pr = Zt(Fr),
    t0 = R({}, Se, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    l0 = Zt(t0),
    e0 = R({}, Se, { data: 0 }),
    Yf = Zt(e0),
    a0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    u0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    n0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function i0(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = n0[t])
      ? !!l[t]
      : !1;
  }
  function fi() {
    return i0;
  }
  var c0 = R({}, Ra, {
      key: function (t) {
        if (t.key) {
          var l = a0[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = qu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? u0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fi,
      charCode: function (t) {
        return t.type === "keypress" ? qu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? qu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    f0 = Zt(c0),
    s0 = R({}, xu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gf = Zt(s0),
    o0 = R({}, Ra, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fi,
    }),
    d0 = Zt(o0),
    r0 = R({}, Se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    h0 = Zt(r0),
    y0 = R({}, xu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    m0 = Zt(y0),
    v0 = R({}, Se, { newState: 0, oldState: 0 }),
    b0 = Zt(v0),
    S0 = [9, 13, 27, 32],
    si = Ol && "CompositionEvent" in window,
    Ha = null;
  Ol && "documentMode" in document && (Ha = document.documentMode);
  var g0 = Ol && "TextEvent" in window && !Ha,
    Xf = Ol && (!si || (Ha && 8 < Ha && 11 >= Ha)),
    Qf = " ",
    Zf = !1;
  function Cf(t, l) {
    switch (t) {
      case "keyup":
        return S0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var we = !1;
  function p0(t, l) {
    switch (t) {
      case "compositionend":
        return Lf(l);
      case "keypress":
        return l.which !== 32 ? null : ((Zf = !0), Qf);
      case "textInput":
        return (t = l.data), t === Qf && Zf ? null : t;
      default:
        return null;
    }
  }
  function T0(t, l) {
    if (we)
      return t === "compositionend" || (!si && Cf(t, l))
        ? ((t = jf()), (Hu = ui = Kl = null), (we = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Xf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var E0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Vf(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!E0[t.type] : l === "textarea";
  }
  function wf(t, l, e, a) {
    Le ? (Ve ? Ve.push(a) : (Ve = [a])) : (Le = a),
      (l = An(l, "onChange")),
      0 < l.length &&
        ((e = new Bu("onChange", "change", null, e, a)),
        t.push({ event: e, listeners: l }));
  }
  var qa = null,
    ja = null;
  function A0(t) {
    _d(t, 0);
  }
  function Yu(t) {
    var l = Da(t);
    if (_f(l)) return t;
  }
  function Kf(t, l) {
    if (t === "change") return l;
  }
  var Jf = !1;
  if (Ol) {
    var oi;
    if (Ol) {
      var di = "oninput" in document;
      if (!di) {
        var kf = document.createElement("div");
        kf.setAttribute("oninput", "return;"),
          (di = typeof kf.oninput == "function");
      }
      oi = di;
    } else oi = !1;
    Jf = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    qa && (qa.detachEvent("onpropertychange", $f), (ja = qa = null));
  }
  function $f(t) {
    if (t.propertyName === "value" && Yu(ja)) {
      var l = [];
      wf(l, ja, t, li(t)), qf(A0, l);
    }
  }
  function z0(t, l, e) {
    t === "focusin"
      ? (Wf(), (qa = l), (ja = e), qa.attachEvent("onpropertychange", $f))
      : t === "focusout" && Wf();
  }
  function M0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Yu(ja);
  }
  function _0(t, l) {
    if (t === "click") return Yu(l);
  }
  function D0(t, l) {
    if (t === "input" || t === "change") return Yu(l);
  }
  function O0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var It = typeof Object.is == "function" ? Object.is : O0;
  function Ba(t, l) {
    if (It(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Qn.call(l, u) || !It(t[u], l[u])) return !1;
    }
    return !0;
  }
  function If(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ff(t, l) {
    var e = If(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l))
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = If(e);
    }
  }
  function Pf(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
        ? !1
        : l && l.nodeType === 3
        ? Pf(t, l.parentNode)
        : "contains" in t
        ? t.contains(l)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(l) & 16)
        : !1
      : !1;
  }
  function ts(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Ru(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Ru(t.document);
    }
    return l;
  }
  function ri(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var U0 = Ol && "documentMode" in document && 11 >= document.documentMode,
    Ke = null,
    hi = null,
    xa = null,
    yi = !1;
  function ls(t, l, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    yi ||
      Ke == null ||
      Ke !== Ru(a) ||
      ((a = Ke),
      "selectionStart" in a && ri(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (xa && Ba(xa, a)) ||
        ((xa = a),
        (a = An(hi, "onSelect")),
        0 < a.length &&
          ((l = new Bu("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = Ke))));
  }
  function ge(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var Je = {
      animationend: ge("Animation", "AnimationEnd"),
      animationiteration: ge("Animation", "AnimationIteration"),
      animationstart: ge("Animation", "AnimationStart"),
      transitionrun: ge("Transition", "TransitionRun"),
      transitionstart: ge("Transition", "TransitionStart"),
      transitioncancel: ge("Transition", "TransitionCancel"),
      transitionend: ge("Transition", "TransitionEnd"),
    },
    mi = {},
    es = {};
  Ol &&
    ((es = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Je.animationend.animation,
      delete Je.animationiteration.animation,
      delete Je.animationstart.animation),
    "TransitionEvent" in window || delete Je.transitionend.transition);
  function pe(t) {
    if (mi[t]) return mi[t];
    if (!Je[t]) return t;
    var l = Je[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in es) return (mi[t] = l[e]);
    return t;
  }
  var as = pe("animationend"),
    us = pe("animationiteration"),
    ns = pe("animationstart"),
    R0 = pe("transitionrun"),
    N0 = pe("transitionstart"),
    H0 = pe("transitioncancel"),
    is = pe("transitionend"),
    cs = new Map(),
    vi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  vi.push("scrollEnd");
  function ml(t, l) {
    cs.set(t, l), be(l, [t]);
  }
  var fs = new WeakMap();
  function il(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = fs.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: zf(l) }), fs.set(t, l), l);
    }
    return { value: t, source: l, stack: zf(l) };
  }
  var cl = [],
    ke = 0,
    bi = 0;
  function Gu() {
    for (var t = ke, l = (bi = ke = 0); l < t; ) {
      var e = cl[l];
      cl[l++] = null;
      var a = cl[l];
      cl[l++] = null;
      var u = cl[l];
      cl[l++] = null;
      var n = cl[l];
      if (((cl[l++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u);
      }
      n !== 0 && ss(e, u, n);
    }
  }
  function Xu(t, l, e, a) {
    (cl[ke++] = t),
      (cl[ke++] = l),
      (cl[ke++] = e),
      (cl[ke++] = a),
      (bi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Si(t, l, e, a) {
    return Xu(t, l, e, a), Qu(t);
  }
  function We(t, l) {
    return Xu(t, null, null, l), Qu(t);
  }
  function ss(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - $t(e)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        n)
      : null;
  }
  function Qu(t) {
    if (50 < cu) throw ((cu = 0), (zc = null), Error(s(185)));
    for (var l = t.return; l !== null; ) (t = l), (l = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var $e = {};
  function q0(t, l, e, a) {
    (this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ft(t, l, e, a) {
    return new q0(t, l, e, a);
  }
  function gi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Ul(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = Ft(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function os(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function Zu(t, l, e, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == "function")) gi(t) && (i = 1);
    else if (typeof t == "string")
      i = Bh(t, e, Y.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Sl:
          return (t = Ft(31, e, l, u)), (t.elementType = Sl), (t.lanes = n), t;
        case yt:
          return Te(e.children, u, n, l);
        case dt:
          (i = 8), (u |= 24);
          break;
        case Ut:
          return (
            (t = Ft(12, e, l, u | 2)), (t.elementType = Ut), (t.lanes = n), t
          );
        case P:
          return (t = Ft(13, e, l, u)), (t.elementType = P), (t.lanes = n), t;
        case wt:
          return (t = Ft(19, e, l, u)), (t.elementType = wt), (t.lanes = n), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Ml:
              case qt:
                i = 10;
                break t;
              case hl:
                i = 9;
                break t;
              case yl:
                i = 11;
                break t;
              case Kt:
                i = 14;
                break t;
              case Jt:
                (i = 16), (a = null);
                break t;
            }
          (i = 29),
            (e = Error(s(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (l = Ft(i, e, l, u)), (l.elementType = t), (l.type = a), (l.lanes = n), l
    );
  }
  function Te(t, l, e, a) {
    return (t = Ft(7, t, a, l)), (t.lanes = e), t;
  }
  function pi(t, l, e) {
    return (t = Ft(6, t, null, l)), (t.lanes = e), t;
  }
  function Ti(t, l, e) {
    return (
      (l = Ft(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var Ie = [],
    Fe = 0,
    Cu = null,
    Lu = 0,
    fl = [],
    sl = 0,
    Ee = null,
    Rl = 1,
    Nl = "";
  function Ae(t, l) {
    (Ie[Fe++] = Lu), (Ie[Fe++] = Cu), (Cu = t), (Lu = l);
  }
  function ds(t, l, e) {
    (fl[sl++] = Rl), (fl[sl++] = Nl), (fl[sl++] = Ee), (Ee = t);
    var a = Rl;
    t = Nl;
    var u = 32 - $t(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - $t(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Rl = (1 << (32 - $t(l) + u)) | (e << u) | a),
        (Nl = n + t);
    } else (Rl = (1 << n) | (e << u) | a), (Nl = t);
  }
  function Ei(t) {
    t.return !== null && (Ae(t, 1), ds(t, 1, 0));
  }
  function Ai(t) {
    for (; t === Cu; )
      (Cu = Ie[--Fe]), (Ie[Fe] = null), (Lu = Ie[--Fe]), (Ie[Fe] = null);
    for (; t === Ee; )
      (Ee = fl[--sl]),
        (fl[sl] = null),
        (Nl = fl[--sl]),
        (fl[sl] = null),
        (Rl = fl[--sl]),
        (fl[sl] = null);
  }
  var Xt = null,
    vt = null,
    et = !1,
    ze = null,
    pl = !1,
    zi = Error(s(519));
  function Me(t) {
    var l = Error(s(418, ""));
    throw (Xa(il(l, t)), zi);
  }
  function rs(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps;
    switch (((l[xt] = t), (l[Qt] = a), e)) {
      case "dialog":
        W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < su.length; e++) W(su[e], l);
        break;
      case "source":
        W("error", l);
        break;
      case "img":
      case "image":
      case "link":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "input":
        W("invalid", l),
          Df(
            l,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Uu(l);
        break;
      case "select":
        W("invalid", l);
        break;
      case "textarea":
        W("invalid", l), Uf(l, a.value, a.defaultValue, a.children), Uu(l);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Rd(l.textContent, e)
        ? (a.popover != null && (W("beforetoggle", l), W("toggle", l)),
          a.onScroll != null && W("scroll", l),
          a.onScrollEnd != null && W("scrollend", l),
          a.onClick != null && (l.onclick = zn),
          (l = !0))
        : (l = !1),
      l || Me(t);
  }
  function hs(t) {
    for (Xt = t.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 13:
          pl = !1;
          return;
        case 27:
        case 3:
          pl = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function Ya(t) {
    if (t !== Xt) return !1;
    if (!et) return hs(t), (et = !0), !1;
    var l = t.tag,
      e;
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || Qc(t.type, t.memoizedProps))),
        (e = !e)),
      e && vt && Me(t),
      hs(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                vt = bl(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        vt = null;
      }
    } else
      l === 27
        ? ((l = vt), fe(t.type) ? ((t = Vc), (Vc = null), (vt = t)) : (vt = l))
        : (vt = Xt ? bl(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ga() {
    (vt = Xt = null), (et = !1);
  }
  function ys() {
    var t = ze;
    return (
      t !== null &&
        (Vt === null ? (Vt = t) : Vt.push.apply(Vt, t), (ze = null)),
      t
    );
  }
  function Xa(t) {
    ze === null ? (ze = [t]) : ze.push(t);
  }
  var Mi = O(null),
    _e = null,
    Hl = null;
  function Jl(t, l, e) {
    H(Mi, l._currentValue), (l._currentValue = e);
  }
  function ql(t) {
    (t._currentValue = Mi.current), j(Mi);
  }
  function _i(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function Di(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var o = 0; o < l.length; o++)
            if (f.context === l[o]) {
              (n.lanes |= e),
                (f = n.alternate),
                f !== null && (f.lanes |= e),
                _i(n.return, e, t),
                a || (i = null);
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341));
        (i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          _i(i, e, t),
          (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function Qa(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type;
          It(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (u === kt.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(mu) : (t = [mu]));
      }
      u = u.return;
    }
    t !== null && Di(l, t, e, a), (l.flags |= 262144);
  }
  function Vu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!It(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function De(t) {
    (_e = t),
      (Hl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Yt(t) {
    return ms(_e, t);
  }
  function wu(t, l) {
    return _e === null && De(t), ms(t, l);
  }
  function ms(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), Hl === null)) {
      if (t === null) throw Error(s(308));
      (Hl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else Hl = Hl.next = l;
    return e;
  }
  var j0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                });
            };
          },
    B0 = c.unstable_scheduleCallback,
    x0 = c.unstable_NormalPriority,
    At = {
      $$typeof: qt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Oi() {
    return { controller: new j0(), data: new Map(), refCount: 0 };
  }
  function Za(t) {
    t.refCount--,
      t.refCount === 0 &&
        B0(x0, function () {
          t.controller.abort();
        });
  }
  var Ca = null,
    Ui = 0,
    Pe = 0,
    ta = null;
  function Y0(t, l) {
    if (Ca === null) {
      var e = (Ca = []);
      (Ui = 0),
        (Pe = Nc()),
        (ta = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Ui++, l.then(vs, vs), l;
  }
  function vs() {
    if (--Ui === 0 && Ca !== null) {
      ta !== null && (ta.status = "fulfilled");
      var t = Ca;
      (Ca = null), (Pe = 0), (ta = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function G0(t, l) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = l);
          for (var u = 0; u < e.length; u++) (0, e[u])(l);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var bs = T.S;
  T.S = function (t, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Y0(t, l),
      bs !== null && bs(t, l);
  };
  var Oe = O(null);
  function Ri() {
    var t = Oe.current;
    return t !== null ? t : ot.pooledCache;
  }
  function Ku(t, l) {
    l === null ? H(Oe, Oe.current) : H(Oe, l.pool);
  }
  function Ss() {
    var t = Ri();
    return t === null ? null : { parent: At._currentValue, pool: t };
  }
  var La = Error(s(460)),
    gs = Error(s(474)),
    Ju = Error(s(542)),
    Ni = { then: function () {} };
  function ps(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ku() {}
  function Ts(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(ku, ku), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), As(t), t);
      default:
        if (typeof l.status == "string") l.then(ku, ku);
        else {
          if (((t = ot), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = l),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), As(t), t);
        }
        throw ((Va = l), La);
    }
  }
  var Va = null;
  function Es() {
    if (Va === null) throw Error(s(459));
    var t = Va;
    return (Va = null), t;
  }
  function As(t) {
    if (t === La || t === Ju) throw Error(s(483));
  }
  var kl = !1;
  function Hi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qi(t, l) {
    (t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Wl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $l(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (at & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (a.pending = l),
        (l = Qu(t)),
        ss(t, null, e),
        l
      );
    }
    return Xu(t, a, l, e), Qu(t);
  }
  function wa(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
    ) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), vf(t, e);
    }
  }
  function ji(t, l) {
    var e = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = e);
      return;
    }
    (t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l);
  }
  var Bi = !1;
  function Ka() {
    if (Bi) {
      var t = ta;
      if (t !== null) throw t;
    }
  }
  function Ja(t, l, e, a) {
    Bi = !1;
    var u = t.updateQueue;
    kl = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var o = f,
        m = o.next;
      (o.next = null), i === null ? (n = m) : (i.next = m), (i = o);
      var p = t.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (f = p.lastBaseUpdate),
        f !== i &&
          (f === null ? (p.firstBaseUpdate = m) : (f.next = m),
          (p.lastBaseUpdate = o)));
    }
    if (n !== null) {
      var M = u.baseState;
      (i = 0), (p = m = o = null), (f = n);
      do {
        var v = f.lane & -536870913,
          b = v !== f.lane;
        if (b ? ($ & v) === v : (a & v) === v) {
          v !== 0 && v === Pe && (Bi = !0),
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var C = t,
              G = f;
            v = l;
            var ct = e;
            switch (G.tag) {
              case 1:
                if (((C = G.payload), typeof C == "function")) {
                  M = C.call(ct, M, v);
                  break t;
                }
                M = C;
                break t;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = G.payload),
                  (v = typeof C == "function" ? C.call(ct, M, v) : C),
                  v == null)
                )
                  break t;
                M = R({}, M, v);
                break t;
              case 2:
                kl = !0;
            }
          }
          (v = f.callback),
            v !== null &&
              ((t.flags |= 64),
              b && (t.flags |= 8192),
              (b = u.callbacks),
              b === null ? (u.callbacks = [v]) : b.push(v));
        } else
          (b = {
            lane: v,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            p === null ? ((m = p = b), (o = M)) : (p = p.next = b),
            (i |= v);
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          (b = f),
            (f = b.next),
            (b.next = null),
            (u.lastBaseUpdate = b),
            (u.shared.pending = null);
        }
      } while (!0);
      p === null && (o = M),
        (u.baseState = o),
        (u.firstBaseUpdate = m),
        (u.lastBaseUpdate = p),
        n === null && (u.shared.lanes = 0),
        (ue |= i),
        (t.lanes = i),
        (t.memoizedState = M);
    }
  }
  function zs(t, l) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(l);
  }
  function Ms(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) zs(e[t], l);
  }
  var la = O(null),
    Wu = O(0);
  function _s(t, l) {
    (t = Ql), H(Wu, t), H(la, l), (Ql = t | l.baseLanes);
  }
  function xi() {
    H(Wu, Ql), H(la, la.current);
  }
  function Yi() {
    (Ql = Wu.current), j(la), j(Wu);
  }
  var Il = 0,
    K = null,
    nt = null,
    Tt = null,
    $u = !1,
    ea = !1,
    Ue = !1,
    Iu = 0,
    ka = 0,
    aa = null,
    X0 = 0;
  function gt() {
    throw Error(s(321));
  }
  function Gi(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!It(t[e], l[e])) return !1;
    return !0;
  }
  function Xi(t, l, e, a, u, n) {
    return (
      (Il = n),
      (K = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (T.H = t === null || t.memoizedState === null ? so : oo),
      (Ue = !1),
      (n = e(a, u)),
      (Ue = !1),
      ea && (n = Os(l, e, a, u)),
      Ds(t),
      n
    );
  }
  function Ds(t) {
    T.H = an;
    var l = nt !== null && nt.next !== null;
    if (((Il = 0), (Tt = nt = K = null), ($u = !1), (ka = 0), (aa = null), l))
      throw Error(s(300));
    t === null ||
      _t ||
      ((t = t.dependencies), t !== null && Vu(t) && (_t = !0));
  }
  function Os(t, l, e, a) {
    K = t;
    var u = 0;
    do {
      if ((ea && (aa = null), (ka = 0), (ea = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Tt = nt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (T.H = K0), (n = l(e, a));
    } while (ea);
    return n;
  }
  function Q0() {
    var t = T.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? Wa(l) : l),
      (t = t.useState()[0]),
      (nt !== null ? nt.memoizedState : null) !== t && (K.flags |= 1024),
      l
    );
  }
  function Qi() {
    var t = Iu !== 0;
    return (Iu = 0), t;
  }
  function Zi(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function Ci(t) {
    if ($u) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      $u = !1;
    }
    (Il = 0), (Tt = nt = K = null), (ea = !1), (ka = Iu = 0), (aa = null);
  }
  function Ct() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Tt === null ? (K.memoizedState = Tt = t) : (Tt = Tt.next = t), Tt;
  }
  function Et() {
    if (nt === null) {
      var t = K.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = nt.next;
    var l = Tt === null ? K.memoizedState : Tt.next;
    if (l !== null) (Tt = l), (nt = t);
    else {
      if (t === null)
        throw K.alternate === null ? Error(s(467)) : Error(s(310));
      (nt = t),
        (t = {
          memoizedState: nt.memoizedState,
          baseState: nt.baseState,
          baseQueue: nt.baseQueue,
          queue: nt.queue,
          next: null,
        }),
        Tt === null ? (K.memoizedState = Tt = t) : (Tt = Tt.next = t);
    }
    return Tt;
  }
  function Li() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wa(t) {
    var l = ka;
    return (
      (ka += 1),
      aa === null && (aa = []),
      (t = Ts(aa, t, l)),
      (l = K),
      (Tt === null ? l.memoizedState : Tt.next) === null &&
        ((l = l.alternate),
        (T.H = l === null || l.memoizedState === null ? so : oo)),
      t
    );
  }
  function Fu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Wa(t);
      if (t.$$typeof === qt) return Yt(t);
    }
    throw Error(s(438, String(t)));
  }
  function Vi(t) {
    var l = null,
      e = K.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = K.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = Li()), (K.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = je;
    return l.index++, e;
  }
  function jl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Pu(t) {
    var l = Et();
    return wi(l, nt, t);
  }
  function wi(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (l.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      l = u.next;
      var f = (i = null),
        o = null,
        m = l,
        p = !1;
      do {
        var M = m.lane & -536870913;
        if (M !== m.lane ? ($ & M) === M : (Il & M) === M) {
          var v = m.revertLane;
          if (v === 0)
            o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              M === Pe && (p = !0);
          else if ((Il & v) === v) {
            (m = m.next), v === Pe && (p = !0);
            continue;
          } else
            (M = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              o === null ? ((f = o = M), (i = n)) : (o = o.next = M),
              (K.lanes |= v),
              (ue |= v);
          (M = m.action),
            Ue && e(n, M),
            (n = m.hasEagerState ? m.eagerState : e(n, M));
        } else
          (v = {
            lane: M,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            o === null ? ((f = o = v), (i = n)) : (o = o.next = v),
            (K.lanes |= M),
            (ue |= M);
        m = m.next;
      } while (m !== null && m !== l);
      if (
        (o === null ? (i = n) : (o.next = f),
        !It(n, t.memoizedState) && ((_t = !0), p && ((e = ta), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = o),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Ki(t) {
    var l = Et(),
      e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch,
      u = e.pending,
      n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do (n = t(n, i.action)), (i = i.next);
      while (i !== u);
      It(n, l.memoizedState) || (_t = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function Us(t, l, e) {
    var a = K,
      u = Et(),
      n = et;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var i = !It((nt || u).memoizedState, e);
    i && ((u.memoizedState = e), (_t = !0)), (u = u.queue);
    var f = Hs.bind(null, a, u, t);
    if (
      ($a(2048, 8, f, [t]),
      u.getSnapshot !== l || i || (Tt !== null && Tt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ua(9, tn(), Ns.bind(null, a, u, e, l), null),
        ot === null)
      )
        throw Error(s(349));
      n || (Il & 124) !== 0 || Rs(a, l, e);
    }
    return e;
  }
  function Rs(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = K.updateQueue),
      l === null
        ? ((l = Li()), (K.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t));
  }
  function Ns(t, l, e, a) {
    (l.value = e), (l.getSnapshot = a), qs(l) && js(t);
  }
  function Hs(t, l, e) {
    return e(function () {
      qs(l) && js(t);
    });
  }
  function qs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !It(t, e);
    } catch {
      return !0;
    }
  }
  function js(t) {
    var l = We(t, 2);
    l !== null && al(l, t, 2);
  }
  function Ji(t) {
    var l = Ct();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), Ue)) {
        Vl(!0);
        try {
          e();
        } finally {
          Vl(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jl,
        lastRenderedState: t,
      }),
      l
    );
  }
  function Bs(t, l, e, a) {
    return (t.baseState = e), wi(t, nt, typeof a == "function" ? a : jl);
  }
  function Z0(t, l, e, a, u) {
    if (en(t)) throw Error(s(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      T.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), xs(l, n))
          : ((n.next = e.next), (l.pending = e.next = n));
    }
  }
  function xs(t, l) {
    var e = l.action,
      a = l.payload,
      u = t.state;
    if (l.isTransition) {
      var n = T.T,
        i = {};
      T.T = i;
      try {
        var f = e(u, a),
          o = T.S;
        o !== null && o(i, f), Ys(t, l, f);
      } catch (m) {
        ki(t, l, m);
      } finally {
        T.T = n;
      }
    } else
      try {
        (n = e(u, a)), Ys(t, l, n);
      } catch (m) {
        ki(t, l, m);
      }
  }
  function Ys(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Gs(t, l, a);
          },
          function (a) {
            return ki(t, l, a);
          }
        )
      : Gs(t, l, e);
  }
  function Gs(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      Xs(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), xs(t, e)));
  }
  function ki(t, l, e) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (l.status = "rejected"), (l.reason = e), Xs(l), (l = l.next);
      while (l !== a);
    }
    t.action = null;
  }
  function Xs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Qs(t, l) {
    return l;
  }
  function Zs(t, l) {
    if (et) {
      var e = ot.formState;
      if (e !== null) {
        t: {
          var a = K;
          if (et) {
            if (vt) {
              l: {
                for (var u = vt, n = pl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = bl(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (vt = bl(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            Me(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return (
      (e = Ct()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qs,
        lastRenderedState: l,
      }),
      (e.queue = a),
      (e = io.bind(null, K, a)),
      (a.dispatch = e),
      (a = Ji(!1)),
      (n = Pi.bind(null, K, !1, a.queue)),
      (a = Ct()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (e = Z0.bind(null, K, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    );
  }
  function Cs(t) {
    var l = Et();
    return Ls(l, nt, t);
  }
  function Ls(t, l, e) {
    if (
      ((l = wi(t, l, Qs)[0]),
      (t = Pu(jl)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var a = Wa(l);
      } catch (i) {
        throw i === La ? Ju : i;
      }
    else a = l;
    l = Et();
    var u = l.queue,
      n = u.dispatch;
    return (
      e !== l.memoizedState &&
        ((K.flags |= 2048), ua(9, tn(), C0.bind(null, u, e), null)),
      [a, n, t]
    );
  }
  function C0(t, l) {
    t.action = l;
  }
  function Vs(t) {
    var l = Et(),
      e = nt;
    if (e !== null) return Ls(l, e, t);
    Et(), (l = l.memoizedState), (e = Et());
    var a = e.queue.dispatch;
    return (e.memoizedState = t), [l, a, !1];
  }
  function ua(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = K.updateQueue),
      l === null && ((l = Li()), (K.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    );
  }
  function tn() {
    return { destroy: void 0, resource: void 0 };
  }
  function ws() {
    return Et().memoizedState;
  }
  function ln(t, l, e, a) {
    var u = Ct();
    (a = a === void 0 ? null : a),
      (K.flags |= t),
      (u.memoizedState = ua(1 | l, tn(), e, a));
  }
  function $a(t, l, e, a) {
    var u = Et();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    nt !== null && a !== null && Gi(a, nt.memoizedState.deps)
      ? (u.memoizedState = ua(l, n, e, a))
      : ((K.flags |= t), (u.memoizedState = ua(1 | l, n, e, a)));
  }
  function Ks(t, l) {
    ln(8390656, 8, t, l);
  }
  function Js(t, l) {
    $a(2048, 8, t, l);
  }
  function ks(t, l) {
    return $a(4, 2, t, l);
  }
  function Ws(t, l) {
    return $a(4, 4, t, l);
  }
  function $s(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function Is(t, l, e) {
    (e = e != null ? e.concat([t]) : null), $a(4, 4, $s.bind(null, l, t), e);
  }
  function Wi() {}
  function Fs(t, l) {
    var e = Et();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Gi(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
  }
  function Ps(t, l) {
    var e = Et();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Gi(l, a[1])) return a[0];
    if (((a = t()), Ue)) {
      Vl(!0);
      try {
        t();
      } finally {
        Vl(!1);
      }
    }
    return (e.memoizedState = [a, l]), a;
  }
  function $i(t, l, e) {
    return e === void 0 || (Il & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = ad()), (K.lanes |= t), (ue |= t), e);
  }
  function to(t, l, e, a) {
    return It(e, l)
      ? e
      : la.current !== null
      ? ((t = $i(t, e, a)), It(t, l) || (_t = !0), t)
      : (Il & 42) === 0
      ? ((_t = !0), (t.memoizedState = e))
      : ((t = ad()), (K.lanes |= t), (ue |= t), l);
  }
  function lo(t, l, e, a, u) {
    var n = q.p;
    q.p = n !== 0 && 8 > n ? n : 8;
    var i = T.T,
      f = {};
    (T.T = f), Pi(t, !1, l, e);
    try {
      var o = u(),
        m = T.S;
      if (
        (m !== null && m(f, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var p = G0(o, a);
        Ia(t, l, p, el(t));
      } else Ia(t, l, a, el(t));
    } catch (M) {
      Ia(t, l, { then: function () {}, status: "rejected", reason: M }, el());
    } finally {
      (q.p = n), (T.T = i);
    }
  }
  function L0() {}
  function Ii(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476));
    var u = eo(t).queue;
    lo(
      t,
      u,
      l,
      Z,
      e === null
        ? L0
        : function () {
            return ao(t), e(a);
          }
    );
  }
  function eo(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jl,
        lastRenderedState: Z,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jl,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function ao(t) {
    var l = eo(t).next.queue;
    Ia(t, l, {}, el());
  }
  function Fi() {
    return Yt(mu);
  }
  function uo() {
    return Et().memoizedState;
  }
  function no() {
    return Et().memoizedState;
  }
  function V0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = el();
          t = Wl(e);
          var a = $l(l, t, e);
          a !== null && (al(a, l, e), wa(a, l, e)),
            (l = { cache: Oi() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function w0(t, l, e) {
    var a = el();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      en(t)
        ? co(l, e)
        : ((e = Si(t, l, e, a)), e !== null && (al(e, t, a), fo(e, l, a)));
  }
  function io(t, l, e) {
    var a = el();
    Ia(t, l, e, a);
  }
  function Ia(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (en(t)) co(l, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            f = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = f), It(f, i)))
            return Xu(t, l, u, 0), ot === null && Gu(), !1;
        } catch {
        } finally {
        }
      if (((e = Si(t, l, u, a)), e !== null))
        return al(e, t, a), fo(e, l, a), !0;
    }
    return !1;
  }
  function Pi(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Nc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      en(t))
    ) {
      if (l) throw Error(s(479));
    } else (l = Si(t, e, a, 2)), l !== null && al(l, t, 2);
  }
  function en(t) {
    var l = t.alternate;
    return t === K || (l !== null && l === K);
  }
  function co(t, l) {
    ea = $u = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function fo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), vf(t, e);
    }
  }
  var an = {
      readContext: Yt,
      use: Fu,
      useCallback: gt,
      useContext: gt,
      useEffect: gt,
      useImperativeHandle: gt,
      useLayoutEffect: gt,
      useInsertionEffect: gt,
      useMemo: gt,
      useReducer: gt,
      useRef: gt,
      useState: gt,
      useDebugValue: gt,
      useDeferredValue: gt,
      useTransition: gt,
      useSyncExternalStore: gt,
      useId: gt,
      useHostTransitionStatus: gt,
      useFormState: gt,
      useActionState: gt,
      useOptimistic: gt,
      useMemoCache: gt,
      useCacheRefresh: gt,
    },
    so = {
      readContext: Yt,
      use: Fu,
      useCallback: function (t, l) {
        return (Ct().memoizedState = [t, l === void 0 ? null : l]), t;
      },
      useContext: Yt,
      useEffect: Ks,
      useImperativeHandle: function (t, l, e) {
        (e = e != null ? e.concat([t]) : null),
          ln(4194308, 4, $s.bind(null, l, t), e);
      },
      useLayoutEffect: function (t, l) {
        return ln(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        ln(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var e = Ct();
        l = l === void 0 ? null : l;
        var a = t();
        if (Ue) {
          Vl(!0);
          try {
            t();
          } finally {
            Vl(!1);
          }
        }
        return (e.memoizedState = [a, l]), a;
      },
      useReducer: function (t, l, e) {
        var a = Ct();
        if (e !== void 0) {
          var u = e(l);
          if (Ue) {
            Vl(!0);
            try {
              e(l);
            } finally {
              Vl(!1);
            }
          }
        } else u = l;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = w0.bind(null, K, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = Ct();
        return (t = { current: t }), (l.memoizedState = t);
      },
      useState: function (t) {
        t = Ji(t);
        var l = t.queue,
          e = io.bind(null, K, l);
        return (l.dispatch = e), [t.memoizedState, e];
      },
      useDebugValue: Wi,
      useDeferredValue: function (t, l) {
        var e = Ct();
        return $i(e, t, l);
      },
      useTransition: function () {
        var t = Ji(!1);
        return (
          (t = lo.bind(null, K, t.queue, !0, !1)),
          (Ct().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, e) {
        var a = K,
          u = Ct();
        if (et) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (((e = l()), ot === null)) throw Error(s(349));
          ($ & 124) !== 0 || Rs(a, l, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: l };
        return (
          (u.queue = n),
          Ks(Hs.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          ua(9, tn(), Ns.bind(null, a, n, e, l), null),
          e
        );
      },
      useId: function () {
        var t = Ct(),
          l = ot.identifierPrefix;
        if (et) {
          var e = Nl,
            a = Rl;
          (e = (a & ~(1 << (32 - $t(a) - 1))).toString(32) + e),
            (l = "«" + l + "R" + e),
            (e = Iu++),
            0 < e && (l += "H" + e.toString(32)),
            (l += "»");
        } else (e = X0++), (l = "«" + l + "r" + e.toString(32) + "»");
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: Fi,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (t) {
        var l = Ct();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = e), (l = Pi.bind(null, K, !0, e)), (e.dispatch = l), [t, l]
        );
      },
      useMemoCache: Vi,
      useCacheRefresh: function () {
        return (Ct().memoizedState = V0.bind(null, K));
      },
    },
    oo = {
      readContext: Yt,
      use: Fu,
      useCallback: Fs,
      useContext: Yt,
      useEffect: Js,
      useImperativeHandle: Is,
      useInsertionEffect: ks,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: Pu,
      useRef: ws,
      useState: function () {
        return Pu(jl);
      },
      useDebugValue: Wi,
      useDeferredValue: function (t, l) {
        var e = Et();
        return to(e, nt.memoizedState, t, l);
      },
      useTransition: function () {
        var t = Pu(jl)[0],
          l = Et().memoizedState;
        return [typeof t == "boolean" ? t : Wa(t), l];
      },
      useSyncExternalStore: Us,
      useId: uo,
      useHostTransitionStatus: Fi,
      useFormState: Cs,
      useActionState: Cs,
      useOptimistic: function (t, l) {
        var e = Et();
        return Bs(e, nt, t, l);
      },
      useMemoCache: Vi,
      useCacheRefresh: no,
    },
    K0 = {
      readContext: Yt,
      use: Fu,
      useCallback: Fs,
      useContext: Yt,
      useEffect: Js,
      useImperativeHandle: Is,
      useInsertionEffect: ks,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: Ki,
      useRef: ws,
      useState: function () {
        return Ki(jl);
      },
      useDebugValue: Wi,
      useDeferredValue: function (t, l) {
        var e = Et();
        return nt === null ? $i(e, t, l) : to(e, nt.memoizedState, t, l);
      },
      useTransition: function () {
        var t = Ki(jl)[0],
          l = Et().memoizedState;
        return [typeof t == "boolean" ? t : Wa(t), l];
      },
      useSyncExternalStore: Us,
      useId: uo,
      useHostTransitionStatus: Fi,
      useFormState: Vs,
      useActionState: Vs,
      useOptimistic: function (t, l) {
        var e = Et();
        return nt !== null
          ? Bs(e, nt, t, l)
          : ((e.baseState = t), [t, e.queue.dispatch]);
      },
      useMemoCache: Vi,
      useCacheRefresh: no,
    },
    na = null,
    Fa = 0;
  function un(t) {
    var l = Fa;
    return (Fa += 1), na === null && (na = []), Ts(na, t, l);
  }
  function Pa(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function nn(t, l) {
    throw l.$$typeof === Q
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t
          )
        ));
  }
  function ro(t) {
    var l = t._init;
    return l(t._payload);
  }
  function ho(t) {
    function l(h, r) {
      if (t) {
        var y = h.deletions;
        y === null ? ((h.deletions = [r]), (h.flags |= 16)) : y.push(r);
      }
    }
    function e(h, r) {
      if (!t) return null;
      for (; r !== null; ) l(h, r), (r = r.sibling);
      return null;
    }
    function a(h) {
      for (var r = new Map(); h !== null; )
        h.key !== null ? r.set(h.key, h) : r.set(h.index, h), (h = h.sibling);
      return r;
    }
    function u(h, r) {
      return (h = Ul(h, r)), (h.index = 0), (h.sibling = null), h;
    }
    function n(h, r, y) {
      return (
        (h.index = y),
        t
          ? ((y = h.alternate),
            y !== null
              ? ((y = y.index), y < r ? ((h.flags |= 67108866), r) : y)
              : ((h.flags |= 67108866), r))
          : ((h.flags |= 1048576), r)
      );
    }
    function i(h) {
      return t && h.alternate === null && (h.flags |= 67108866), h;
    }
    function f(h, r, y, A) {
      return r === null || r.tag !== 6
        ? ((r = pi(y, h.mode, A)), (r.return = h), r)
        : ((r = u(r, y)), (r.return = h), r);
    }
    function o(h, r, y, A) {
      var B = y.type;
      return B === yt
        ? p(h, r, y.props.children, A, y.key)
        : r !== null &&
          (r.elementType === B ||
            (typeof B == "object" &&
              B !== null &&
              B.$$typeof === Jt &&
              ro(B) === r.type))
        ? ((r = u(r, y.props)), Pa(r, y), (r.return = h), r)
        : ((r = Zu(y.type, y.key, y.props, null, h.mode, A)),
          Pa(r, y),
          (r.return = h),
          r);
    }
    function m(h, r, y, A) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== y.containerInfo ||
        r.stateNode.implementation !== y.implementation
        ? ((r = Ti(y, h.mode, A)), (r.return = h), r)
        : ((r = u(r, y.children || [])), (r.return = h), r);
    }
    function p(h, r, y, A, B) {
      return r === null || r.tag !== 7
        ? ((r = Te(y, h.mode, A, B)), (r.return = h), r)
        : ((r = u(r, y)), (r.return = h), r);
    }
    function M(h, r, y) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return (r = pi("" + r, h.mode, y)), (r.return = h), r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case F:
            return (
              (y = Zu(r.type, r.key, r.props, null, h.mode, y)),
              Pa(y, r),
              (y.return = h),
              y
            );
          case St:
            return (r = Ti(r, h.mode, y)), (r.return = h), r;
          case Jt:
            var A = r._init;
            return (r = A(r._payload)), M(h, r, y);
        }
        if (Bt(r) || jt(r))
          return (r = Te(r, h.mode, y, null)), (r.return = h), r;
        if (typeof r.then == "function") return M(h, un(r), y);
        if (r.$$typeof === qt) return M(h, wu(h, r), y);
        nn(h, r);
      }
      return null;
    }
    function v(h, r, y, A) {
      var B = r !== null ? r.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return B !== null ? null : f(h, r, "" + y, A);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case F:
            return y.key === B ? o(h, r, y, A) : null;
          case St:
            return y.key === B ? m(h, r, y, A) : null;
          case Jt:
            return (B = y._init), (y = B(y._payload)), v(h, r, y, A);
        }
        if (Bt(y) || jt(y)) return B !== null ? null : p(h, r, y, A, null);
        if (typeof y.then == "function") return v(h, r, un(y), A);
        if (y.$$typeof === qt) return v(h, r, wu(h, y), A);
        nn(h, y);
      }
      return null;
    }
    function b(h, r, y, A, B) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (h = h.get(y) || null), f(r, h, "" + A, B);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            return (
              (h = h.get(A.key === null ? y : A.key) || null), o(r, h, A, B)
            );
          case St:
            return (
              (h = h.get(A.key === null ? y : A.key) || null), m(r, h, A, B)
            );
          case Jt:
            var J = A._init;
            return (A = J(A._payload)), b(h, r, y, A, B);
        }
        if (Bt(A) || jt(A)) return (h = h.get(y) || null), p(r, h, A, B, null);
        if (typeof A.then == "function") return b(h, r, y, un(A), B);
        if (A.$$typeof === qt) return b(h, r, y, wu(r, A), B);
        nn(r, A);
      }
      return null;
    }
    function C(h, r, y, A) {
      for (
        var B = null, J = null, x = r, X = (r = 0), Ot = null;
        x !== null && X < y.length;
        X++
      ) {
        x.index > X ? ((Ot = x), (x = null)) : (Ot = x.sibling);
        var lt = v(h, x, y[X], A);
        if (lt === null) {
          x === null && (x = Ot);
          break;
        }
        t && x && lt.alternate === null && l(h, x),
          (r = n(lt, r, X)),
          J === null ? (B = lt) : (J.sibling = lt),
          (J = lt),
          (x = Ot);
      }
      if (X === y.length) return e(h, x), et && Ae(h, X), B;
      if (x === null) {
        for (; X < y.length; X++)
          (x = M(h, y[X], A)),
            x !== null &&
              ((r = n(x, r, X)),
              J === null ? (B = x) : (J.sibling = x),
              (J = x));
        return et && Ae(h, X), B;
      }
      for (x = a(x); X < y.length; X++)
        (Ot = b(x, h, X, y[X], A)),
          Ot !== null &&
            (t &&
              Ot.alternate !== null &&
              x.delete(Ot.key === null ? X : Ot.key),
            (r = n(Ot, r, X)),
            J === null ? (B = Ot) : (J.sibling = Ot),
            (J = Ot));
      return (
        t &&
          x.forEach(function (he) {
            return l(h, he);
          }),
        et && Ae(h, X),
        B
      );
    }
    function G(h, r, y, A) {
      if (y == null) throw Error(s(151));
      for (
        var B = null, J = null, x = r, X = (r = 0), Ot = null, lt = y.next();
        x !== null && !lt.done;
        X++, lt = y.next()
      ) {
        x.index > X ? ((Ot = x), (x = null)) : (Ot = x.sibling);
        var he = v(h, x, lt.value, A);
        if (he === null) {
          x === null && (x = Ot);
          break;
        }
        t && x && he.alternate === null && l(h, x),
          (r = n(he, r, X)),
          J === null ? (B = he) : (J.sibling = he),
          (J = he),
          (x = Ot);
      }
      if (lt.done) return e(h, x), et && Ae(h, X), B;
      if (x === null) {
        for (; !lt.done; X++, lt = y.next())
          (lt = M(h, lt.value, A)),
            lt !== null &&
              ((r = n(lt, r, X)),
              J === null ? (B = lt) : (J.sibling = lt),
              (J = lt));
        return et && Ae(h, X), B;
      }
      for (x = a(x); !lt.done; X++, lt = y.next())
        (lt = b(x, h, X, lt.value, A)),
          lt !== null &&
            (t &&
              lt.alternate !== null &&
              x.delete(lt.key === null ? X : lt.key),
            (r = n(lt, r, X)),
            J === null ? (B = lt) : (J.sibling = lt),
            (J = lt));
      return (
        t &&
          x.forEach(function (Jh) {
            return l(h, Jh);
          }),
        et && Ae(h, X),
        B
      );
    }
    function ct(h, r, y, A) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === yt &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case F:
            t: {
              for (var B = y.key; r !== null; ) {
                if (r.key === B) {
                  if (((B = y.type), B === yt)) {
                    if (r.tag === 7) {
                      e(h, r.sibling),
                        (A = u(r, y.props.children)),
                        (A.return = h),
                        (h = A);
                      break t;
                    }
                  } else if (
                    r.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Jt &&
                      ro(B) === r.type)
                  ) {
                    e(h, r.sibling),
                      (A = u(r, y.props)),
                      Pa(A, y),
                      (A.return = h),
                      (h = A);
                    break t;
                  }
                  e(h, r);
                  break;
                } else l(h, r);
                r = r.sibling;
              }
              y.type === yt
                ? ((A = Te(y.props.children, h.mode, A, y.key)),
                  (A.return = h),
                  (h = A))
                : ((A = Zu(y.type, y.key, y.props, null, h.mode, A)),
                  Pa(A, y),
                  (A.return = h),
                  (h = A));
            }
            return i(h);
          case St:
            t: {
              for (B = y.key; r !== null; ) {
                if (r.key === B)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === y.containerInfo &&
                    r.stateNode.implementation === y.implementation
                  ) {
                    e(h, r.sibling),
                      (A = u(r, y.children || [])),
                      (A.return = h),
                      (h = A);
                    break t;
                  } else {
                    e(h, r);
                    break;
                  }
                else l(h, r);
                r = r.sibling;
              }
              (A = Ti(y, h.mode, A)), (A.return = h), (h = A);
            }
            return i(h);
          case Jt:
            return (B = y._init), (y = B(y._payload)), ct(h, r, y, A);
        }
        if (Bt(y)) return C(h, r, y, A);
        if (jt(y)) {
          if (((B = jt(y)), typeof B != "function")) throw Error(s(150));
          return (y = B.call(y)), G(h, r, y, A);
        }
        if (typeof y.then == "function") return ct(h, r, un(y), A);
        if (y.$$typeof === qt) return ct(h, r, wu(h, y), A);
        nn(h, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          r !== null && r.tag === 6
            ? (e(h, r.sibling), (A = u(r, y)), (A.return = h), (h = A))
            : (e(h, r), (A = pi(y, h.mode, A)), (A.return = h), (h = A)),
          i(h))
        : e(h, r);
    }
    return function (h, r, y, A) {
      try {
        Fa = 0;
        var B = ct(h, r, y, A);
        return (na = null), B;
      } catch (x) {
        if (x === La || x === Ju) throw x;
        var J = Ft(29, x, null, h.mode);
        return (J.lanes = A), (J.return = h), J;
      } finally {
      }
    };
  }
  var ia = ho(!0),
    yo = ho(!1),
    ol = O(null),
    Tl = null;
  function Fl(t) {
    var l = t.alternate;
    H(zt, zt.current & 1),
      H(ol, t),
      Tl === null &&
        (l === null || la.current !== null || l.memoizedState !== null) &&
        (Tl = t);
  }
  function mo(t) {
    if (t.tag === 22) {
      if ((H(zt, zt.current), H(ol, t), Tl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Tl = t);
      }
    } else Pl();
  }
  function Pl() {
    H(zt, zt.current), H(ol, ol.current);
  }
  function Bl(t) {
    j(ol), Tl === t && (Tl = null), j(zt);
  }
  var zt = O(0);
  function cn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || Lc(e))
        )
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
    return null;
  }
  function tc(t, l, e, a) {
    (l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : R({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var lc = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var a = el(),
        u = Wl(a);
      (u.payload = l),
        e != null && (u.callback = e),
        (l = $l(t, u, a)),
        l !== null && (al(l, t, a), wa(l, t, a));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var a = el(),
        u = Wl(a);
      (u.tag = 1),
        (u.payload = l),
        e != null && (u.callback = e),
        (l = $l(t, u, a)),
        l !== null && (al(l, t, a), wa(l, t, a));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = el(),
        a = Wl(e);
      (a.tag = 2),
        l != null && (a.callback = l),
        (l = $l(t, a, e)),
        l !== null && (al(l, t, e), wa(l, t, e));
    },
  };
  function vo(t, l, e, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, i)
        : l.prototype && l.prototype.isPureReactComponent
        ? !Ba(e, a) || !Ba(u, n)
        : !0
    );
  }
  function bo(t, l, e, a) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && lc.enqueueReplaceState(l, l.state, null);
  }
  function Re(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = R({}, e));
      for (var u in t) e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  var fn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function So(t) {
    fn(t);
  }
  function go(t) {
    console.error(t);
  }
  function po(t) {
    fn(t);
  }
  function sn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function To(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ec(t, l, e) {
    return (
      (e = Wl(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        sn(t, l);
      }),
      e
    );
  }
  function Eo(t) {
    return (t = Wl(t)), (t.tag = 3), t;
  }
  function Ao(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          To(l, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        To(l, e, a),
          typeof u != "function" &&
            (ne === null ? (ne = new Set([this])) : ne.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function J0(t, l, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && Qa(l, e, u, !0),
        (e = ol.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              Tl === null ? _c() : e.alternate === null && bt === 0 && (bt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Ni
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  Oc(t, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Ni
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  Oc(t, a, u)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return Oc(t, a, u), _c(), !1;
    }
    if (et)
      return (
        (l = ol.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            a !== zi && ((t = Error(s(422), { cause: a })), Xa(il(t, e))))
          : (a !== zi && ((l = Error(s(423), { cause: a })), Xa(il(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = il(a, e)),
            (u = ec(t.stateNode, a, u)),
            ji(t, u),
            bt !== 4 && (bt = 2)),
        !1
      );
    var n = Error(s(520), { cause: a });
    if (
      ((n = il(n, e)),
      iu === null ? (iu = [n]) : iu.push(n),
      bt !== 4 && (bt = 2),
      l === null)
    )
      return !0;
    (a = il(a, e)), (e = l);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = u & -u),
            (e.lanes |= t),
            (t = ec(e.stateNode, a, t)),
            ji(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ne === null || !ne.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Eo(u)),
              Ao(u, t, e, a),
              ji(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var zo = Error(s(461)),
    _t = !1;
  function Rt(t, l, e, a) {
    l.child = t === null ? yo(l, null, e, a) : ia(l, t.child, e, a);
  }
  function Mo(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      De(l),
      (a = Xi(t, l, e, i, n, u)),
      (f = Qi()),
      t !== null && !_t
        ? (Zi(t, l, u), xl(t, l, u))
        : (et && f && Ei(l), (l.flags |= 1), Rt(t, l, a, u), l.child)
    );
  }
  function _o(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !gi(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), Do(t, l, n, a, u))
        : ((t = Zu(e.type, null, a, l, l.mode, u)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !oc(t, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Ba), e(i, a) && t.ref === l.ref)
      )
        return xl(t, l, u);
    }
    return (
      (l.flags |= 1),
      (t = Ul(n, a)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function Do(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ba(n, a) && t.ref === l.ref)
        if (((_t = !1), (l.pendingProps = a = n), oc(t, u)))
          (t.flags & 131072) !== 0 && (_t = !0);
        else return (l.lanes = t.lanes), xl(t, l, u);
    }
    return ac(t, l, e, a, u);
  }
  function Oo(t, l, e) {
    var a = l.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | e : e), t !== null)) {
          for (u = l.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          l.childLanes = n & ~a;
        } else (l.childLanes = 0), (l.child = null);
        return Uo(t, l, a, e);
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ku(l, n !== null ? n.cachePool : null),
          n !== null ? _s(l, n) : xi(),
          mo(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          Uo(t, l, n !== null ? n.baseLanes | e : e, e)
        );
    } else
      n !== null
        ? (Ku(l, n.cachePool), _s(l, n), Pl(), (l.memoizedState = null))
        : (t !== null && Ku(l, null), xi(), Pl());
    return Rt(t, l, u, e), l.child;
  }
  function Uo(t, l, e, a) {
    var u = Ri();
    return (
      (u = u === null ? null : { parent: At._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: e, cachePool: u }),
      t !== null && Ku(l, null),
      xi(),
      mo(l),
      t !== null && Qa(t, l, a, !0),
      null
    );
  }
  function on(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function ac(t, l, e, a, u) {
    return (
      De(l),
      (e = Xi(t, l, e, a, void 0, u)),
      (a = Qi()),
      t !== null && !_t
        ? (Zi(t, l, u), xl(t, l, u))
        : (et && a && Ei(l), (l.flags |= 1), Rt(t, l, e, u), l.child)
    );
  }
  function Ro(t, l, e, a, u, n) {
    return (
      De(l),
      (l.updateQueue = null),
      (e = Os(l, a, e, u)),
      Ds(t),
      (a = Qi()),
      t !== null && !_t
        ? (Zi(t, l, n), xl(t, l, n))
        : (et && a && Ei(l), (l.flags |= 1), Rt(t, l, e, n), l.child)
    );
  }
  function No(t, l, e, a, u) {
    if ((De(l), l.stateNode === null)) {
      var n = $e,
        i = e.contextType;
      typeof i == "object" && i !== null && (n = Yt(i)),
        (n = new e(a, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = lc),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = a),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Hi(l),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Yt(i) : $e),
        (n.state = l.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (tc(l, e, i, a), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && lc.enqueueReplaceState(n, n.state, null),
          Ja(l, a, n, u),
          Ka(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps,
        o = Re(e, f);
      n.props = o;
      var m = n.context,
        p = e.contextType;
      (i = $e), typeof p == "object" && p !== null && (i = Yt(p));
      var M = e.getDerivedStateFromProps;
      (p =
        typeof M == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = l.pendingProps !== f),
        p ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || m !== i) && bo(l, n, a, i)),
        (kl = !1);
      var v = l.memoizedState;
      (n.state = v),
        Ja(l, a, n, u),
        Ka(),
        (m = l.memoizedState),
        f || v !== m || kl
          ? (typeof M == "function" && (tc(l, e, M, a), (m = l.memoizedState)),
            (o = kl || vo(l, e, o, a, v, m, i))
              ? (p ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = m)),
            (n.props = a),
            (n.state = m),
            (n.context = i),
            (a = o))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (a = !1));
    } else {
      (n = l.stateNode),
        qi(t, l),
        (i = l.memoizedProps),
        (p = Re(e, i)),
        (n.props = p),
        (M = l.pendingProps),
        (v = n.context),
        (m = e.contextType),
        (o = $e),
        typeof m == "object" && m !== null && (o = Yt(m)),
        (f = e.getDerivedStateFromProps),
        (m =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== M || v !== o) && bo(l, n, a, o)),
        (kl = !1),
        (v = l.memoizedState),
        (n.state = v),
        Ja(l, a, n, u),
        Ka();
      var b = l.memoizedState;
      i !== M ||
      v !== b ||
      kl ||
      (t !== null && t.dependencies !== null && Vu(t.dependencies))
        ? (typeof f == "function" && (tc(l, e, f, a), (b = l.memoizedState)),
          (p =
            kl ||
            vo(l, e, p, a, v, b, o) ||
            (t !== null && t.dependencies !== null && Vu(t.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, b, o),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, b, o)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = b)),
          (n.props = a),
          (n.state = b),
          (n.context = o),
          (a = p))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      on(t, l),
      (a = (l.flags & 128) !== 0),
      n || a
        ? ((n = l.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = ia(l, t.child, null, u)),
              (l.child = ia(l, null, e, u)))
            : Rt(t, l, e, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = xl(t, l, u)),
      t
    );
  }
  function Ho(t, l, e, a) {
    return Ga(), (l.flags |= 256), Rt(t, l, e, a), l.child;
  }
  var uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function nc(t) {
    return { baseLanes: t, cachePool: Ss() };
  }
  function ic(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= dl), t;
  }
  function qo(t, l, e) {
    var a = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (zt.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (et) {
        if ((u ? Fl(l) : Pl(), et)) {
          var f = vt,
            o;
          if ((o = f)) {
            t: {
              for (o = f, f = pl; o.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (((o = bl(o.nextSibling)), o === null)) {
                  f = null;
                  break t;
                }
              }
              f = o;
            }
            f !== null
              ? ((l.memoizedState = {
                  dehydrated: f,
                  treeContext: Ee !== null ? { id: Rl, overflow: Nl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (o = Ft(18, null, null, 0)),
                (o.stateNode = f),
                (o.return = l),
                (l.child = o),
                (Xt = l),
                (vt = null),
                (o = !0))
              : (o = !1);
          }
          o || Me(l);
        }
        if (
          ((f = l.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return Lc(f) ? (l.lanes = 32) : (l.lanes = 536870912), null;
        Bl(l);
      }
      return (
        (f = a.children),
        (a = a.fallback),
        u
          ? (Pl(),
            (u = l.mode),
            (f = dn({ mode: "hidden", children: f }, u)),
            (a = Te(a, u, e, null)),
            (f.return = l),
            (a.return = l),
            (f.sibling = a),
            (l.child = f),
            (u = l.child),
            (u.memoizedState = nc(e)),
            (u.childLanes = ic(t, i, e)),
            (l.memoizedState = uc),
            a)
          : (Fl(l), cc(l, f))
      );
    }
    if (
      ((o = t.memoizedState), o !== null && ((f = o.dehydrated), f !== null))
    ) {
      if (n)
        l.flags & 256
          ? (Fl(l), (l.flags &= -257), (l = fc(t, l, e)))
          : l.memoizedState !== null
          ? (Pl(), (l.child = t.child), (l.flags |= 128), (l = null))
          : (Pl(),
            (u = a.fallback),
            (f = l.mode),
            (a = dn({ mode: "visible", children: a.children }, f)),
            (u = Te(u, f, e, null)),
            (u.flags |= 2),
            (a.return = l),
            (u.return = l),
            (a.sibling = u),
            (l.child = a),
            ia(l, t.child, null, e),
            (a = l.child),
            (a.memoizedState = nc(e)),
            (a.childLanes = ic(t, i, e)),
            (l.memoizedState = uc),
            (l = u));
      else if ((Fl(l), Lc(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var m = i.dgst;
        (i = m),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = i),
          Xa({ value: a, source: null, stack: null }),
          (l = fc(t, l, e));
      } else if (
        (_t || Qa(t, l, e, !1), (i = (e & t.childLanes) !== 0), _t || i)
      ) {
        if (
          ((i = ot),
          i !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : Vn(a)),
            (a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== o.retryLane))
        )
          throw ((o.retryLane = a), We(t, a), al(i, t, a), zo);
        f.data === "$?" || _c(), (l = fc(t, l, e));
      } else
        f.data === "$?"
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = o.treeContext),
            (vt = bl(f.nextSibling)),
            (Xt = l),
            (et = !0),
            (ze = null),
            (pl = !1),
            t !== null &&
              ((fl[sl++] = Rl),
              (fl[sl++] = Nl),
              (fl[sl++] = Ee),
              (Rl = t.id),
              (Nl = t.overflow),
              (Ee = l)),
            (l = cc(l, a.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (Pl(),
        (u = a.fallback),
        (f = l.mode),
        (o = t.child),
        (m = o.sibling),
        (a = Ul(o, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = o.subtreeFlags & 65011712),
        m !== null ? (u = Ul(m, u)) : ((u = Te(u, f, e, null)), (u.flags |= 2)),
        (u.return = l),
        (a.return = l),
        (a.sibling = u),
        (l.child = a),
        (a = u),
        (u = l.child),
        (f = t.child.memoizedState),
        f === null
          ? (f = nc(e))
          : ((o = f.cachePool),
            o !== null
              ? ((m = At._currentValue),
                (o = o.parent !== m ? { parent: m, pool: m } : o))
              : (o = Ss()),
            (f = { baseLanes: f.baseLanes | e, cachePool: o })),
        (u.memoizedState = f),
        (u.childLanes = ic(t, i, e)),
        (l.memoizedState = uc),
        a)
      : (Fl(l),
        (e = t.child),
        (t = e.sibling),
        (e = Ul(e, { mode: "visible", children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function cc(t, l) {
    return (
      (l = dn({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function dn(t, l) {
    return (
      (t = Ft(22, t, null, l)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function fc(t, l, e) {
    return (
      ia(l, t.child, null, e),
      (t = cc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function jo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), _i(t.return, l, e);
  }
  function sc(t, l, e, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u));
  }
  function Bo(t, l, e) {
    var a = l.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Rt(t, l, a.children, e), (a = zt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (l.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && jo(t, e, l);
          else if (t.tag === 19) jo(t, e, l);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((H(zt, a), u)) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          (t = e.alternate),
            t !== null && cn(t) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = l.child), (l.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          sc(l, !1, u, e, n);
        break;
      case "backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && cn(t) === null)) {
            l.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = e), (e = u), (u = t);
        }
        sc(l, !0, e, null, n);
        break;
      case "together":
        sc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function xl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (ue |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((Qa(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(s(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Ul(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;

      )
        (t = t.sibling),
          (e = e.sibling = Ul(t, t.pendingProps)),
          (e.return = l);
      e.sibling = null;
    }
    return l.child;
  }
  function oc(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Vu(t)));
  }
  function k0(t, l, e) {
    switch (l.tag) {
      case 3:
        rt(l, l.stateNode.containerInfo),
          Jl(l, At, t.memoizedState.cache),
          Ga();
        break;
      case 27:
      case 5:
        Xn(l);
        break;
      case 4:
        rt(l, l.stateNode.containerInfo);
        break;
      case 10:
        Jl(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Fl(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
            ? qo(t, l, e)
            : (Fl(l), (t = xl(t, l, e)), t !== null ? t.sibling : null);
        Fl(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (Qa(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          u)
        ) {
          if (a) return Bo(t, l, e);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          H(zt, zt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), Oo(t, l, e);
      case 24:
        Jl(l, At, t.memoizedState.cache);
    }
    return xl(t, l, e);
  }
  function xo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) _t = !0;
      else {
        if (!oc(t, e) && (l.flags & 128) === 0) return (_t = !1), k0(t, l, e);
        _t = (t.flags & 131072) !== 0;
      }
    else (_t = !1), et && (l.flags & 1048576) !== 0 && ds(l, Lu, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType,
            u = a._init;
          if (((a = u(a._payload)), (l.type = a), typeof a == "function"))
            gi(a)
              ? ((t = Re(a, t)), (l.tag = 1), (l = No(null, l, a, t, e)))
              : ((l.tag = 0), (l = ac(null, l, a, t, e)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === yl)) {
                (l.tag = 11), (l = Mo(null, l, a, t, e));
                break t;
              } else if (u === Kt) {
                (l.tag = 14), (l = _o(null, l, a, t, e));
                break t;
              }
            }
            throw ((l = me(a) || a), Error(s(306, l, "")));
          }
        }
        return l;
      case 0:
        return ac(t, l, l.type, l.pendingProps, e);
      case 1:
        return (a = l.type), (u = Re(a, l.pendingProps)), No(t, l, a, u, e);
      case 3:
        t: {
          if ((rt(l, l.stateNode.containerInfo), t === null))
            throw Error(s(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), qi(t, l), Ja(l, a, null, e);
          var i = l.memoizedState;
          if (
            ((a = i.cache),
            Jl(l, At, a),
            a !== n.cache && Di(l, [At], e, !0),
            Ka(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = Ho(t, l, a, e);
              break t;
            } else if (a !== u) {
              (u = il(Error(s(424)), l)), Xa(u), (l = Ho(t, l, a, e));
              break t;
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                vt = bl(t.firstChild),
                  Xt = l,
                  et = !0,
                  ze = null,
                  pl = !0,
                  e = yo(l, null, a, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Ga(), a === u)) {
              l = xl(t, l, e);
              break t;
            }
            Rt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          on(t, l),
          t === null
            ? (e = Qd(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : et ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = Mn(L.current).createElement(e)),
                (a[xt] = l),
                (a[Qt] = t),
                Ht(a, e, t),
                Mt(a),
                (l.stateNode = a))
            : (l.memoizedState = Qd(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Xn(l),
          t === null &&
            et &&
            ((a = l.stateNode = Yd(l.type, l.pendingProps, L.current)),
            (Xt = l),
            (pl = !0),
            (u = vt),
            fe(l.type) ? ((Vc = u), (vt = bl(a.firstChild))) : (vt = u)),
          Rt(t, l, l.pendingProps.children, e),
          on(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            et &&
            ((u = a = vt) &&
              ((a = Eh(a, l.type, l.pendingProps, pl)),
              a !== null
                ? ((l.stateNode = a),
                  (Xt = l),
                  (vt = bl(a.firstChild)),
                  (pl = !1),
                  (u = !0))
                : (u = !1)),
            u || Me(l)),
          Xn(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          Qc(u, n) ? (a = null) : i !== null && Qc(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Xi(t, l, Q0, null, null, e)), (mu._currentValue = u)),
          on(t, l),
          Rt(t, l, a, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            et &&
            ((t = e = vt) &&
              ((e = Ah(e, l.pendingProps, pl)),
              e !== null
                ? ((l.stateNode = e), (Xt = l), (vt = null), (t = !0))
                : (t = !1)),
            t || Me(l)),
          null
        );
      case 13:
        return qo(t, l, e);
      case 4:
        return (
          rt(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = ia(l, null, a, e)) : Rt(t, l, a, e),
          l.child
        );
      case 11:
        return Mo(t, l, l.type, l.pendingProps, e);
      case 7:
        return Rt(t, l, l.pendingProps, e), l.child;
      case 8:
        return Rt(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Rt(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return (
          (a = l.pendingProps),
          Jl(l, l.type, a.value),
          Rt(t, l, a.children, e),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (a = l.pendingProps.children),
          De(l),
          (u = Yt(u)),
          (a = a(u)),
          (l.flags |= 1),
          Rt(t, l, a, e),
          l.child
        );
      case 14:
        return _o(t, l, l.type, l.pendingProps, e);
      case 15:
        return Do(t, l, l.type, l.pendingProps, e);
      case 19:
        return Bo(t, l, e);
      case 31:
        return (
          (a = l.pendingProps),
          (e = l.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((e = dn(a, e)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e))
            : ((e = Ul(t.child, a)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e)),
          l
        );
      case 22:
        return Oo(t, l, e);
      case 24:
        return (
          De(l),
          (a = Yt(At)),
          t === null
            ? ((u = Ri()),
              u === null &&
                ((u = ot),
                (n = Oi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (l.memoizedState = { parent: a, cache: u }),
              Hi(l),
              Jl(l, At, u))
            : ((t.lanes & e) !== 0 && (qi(t, l), Ja(l, null, null, e), Ka()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  Jl(l, At, a))
                : ((a = n.cache),
                  Jl(l, At, a),
                  a !== u.cache && Di(l, [At], e, !0))),
          Rt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Yl(t) {
    t.flags |= 4;
  }
  function Yo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !wd(l))) {
      if (
        ((l = ol.current),
        l !== null &&
          (($ & 4194048) === $
            ? Tl !== null
            : (($ & 62914560) !== $ && ($ & 536870912) === 0) || l !== Tl))
      )
        throw ((Va = Ni), gs);
      t.flags |= 8192;
    }
  }
  function rn(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? yf() : 536870912), (t.lanes |= l), (oa |= l));
  }
  function tu(t, l) {
    if (!et)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), (l = l.sibling);
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function mt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = e), l;
  }
  function W0(t, l, e) {
    var a = l.pendingProps;
    switch ((Ai(l), l.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mt(l), null;
      case 1:
        return mt(l), null;
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          ql(At),
          Ll(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ya(l)
              ? Yl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), ys())),
          mt(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (Yl(l),
              e !== null ? (mt(l), Yo(l, e)) : (mt(l), (l.flags &= -16777217)))
            : e
            ? e !== t.memoizedState
              ? (Yl(l), mt(l), Yo(l, e))
              : (mt(l), (l.flags &= -16777217))
            : (t.memoizedProps !== a && Yl(l), mt(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        Eu(l), (e = L.current);
        var u = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== a && Yl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return mt(l), null;
          }
          (t = Y.current),
            Ya(l) ? rs(l) : ((t = Yd(u, a, e)), (l.stateNode = t), Yl(l));
        }
        return mt(l), null;
      case 5:
        if ((Eu(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== a && Yl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return mt(l), null;
          }
          if (((t = Y.current), Ya(l))) rs(l);
          else {
            switch (((u = Mn(L.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(e, { is: a.is })
                        : u.createElement(e);
                }
            }
            (t[xt] = l), (t[Qt] = a);
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            l.stateNode = t;
            t: switch ((Ht(t, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Yl(l);
          }
        }
        return mt(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Yl(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(s(166));
          if (((t = L.current), Ya(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (a = null),
              (u = Xt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[xt] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Rd(t.nodeValue, e)
              )),
              t || Me(l);
          } else (t = Mn(t).createTextNode(a)), (t[xt] = l), (l.stateNode = t);
        }
        return mt(l), null;
      case 13:
        if (
          ((a = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ya(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[xt] = l;
            } else
              Ga(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            mt(l), (u = !1);
          } else
            (u = ys()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return l.flags & 256 ? (Bl(l), l) : (Bl(l), null);
        }
        if ((Bl(l), (l.flags & 128) !== 0)) return (l.lanes = e), l;
        if (
          ((e = a !== null), (t = t !== null && t.memoizedState !== null), e)
        ) {
          (a = l.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          e !== t && e && (l.child.flags |= 8192),
          rn(l, l.updateQueue),
          mt(l),
          null
        );
      case 4:
        return Ll(), t === null && Bc(l.stateNode.containerInfo), mt(l), null;
      case 10:
        return ql(l.type), mt(l), null;
      case 19:
        if ((j(zt), (u = l.memoizedState), u === null)) return mt(l), null;
        if (((a = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) tu(u, !1);
          else {
            if (bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = cn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      tu(u, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      rn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    os(e, t), (e = e.sibling);
                  return H(zt, (zt.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              gl() > mn &&
              ((l.flags |= 128), (a = !0), tu(u, !1), (l.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = cn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                rn(l, t),
                tu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !et)
              )
                return mt(l), null;
            } else
              2 * gl() - u.renderingStartTime > mn &&
                e !== 536870912 &&
                ((l.flags |= 128), (a = !0), tu(u, !1), (l.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = gl()),
            (l.sibling = null),
            (t = zt.current),
            H(zt, a ? (t & 1) | 2 : t & 1),
            l)
          : (mt(l), null);
      case 22:
      case 23:
        return (
          Bl(l),
          Yi(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (mt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : mt(l),
          (e = l.updateQueue),
          e !== null && rn(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && j(Oe),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          ql(At),
          mt(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function $0(t, l) {
    switch ((Ai(l), l.tag)) {
      case 1:
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          ql(At),
          Ll(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Eu(l), null;
      case 13:
        if (
          (Bl(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(s(340));
          Ga();
        }
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return j(zt), null;
      case 4:
        return Ll(), null;
      case 10:
        return ql(l.type), null;
      case 22:
      case 23:
        return (
          Bl(l),
          Yi(),
          t !== null && j(Oe),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return ql(At), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Go(t, l) {
    switch ((Ai(l), l.tag)) {
      case 3:
        ql(At), Ll();
        break;
      case 26:
      case 27:
      case 5:
        Eu(l);
        break;
      case 4:
        Ll();
        break;
      case 13:
        Bl(l);
        break;
      case 19:
        j(zt);
        break;
      case 10:
        ql(l.type);
        break;
      case 22:
      case 23:
        Bl(l), Yi(), t !== null && j(Oe);
        break;
      case 24:
        ql(At);
    }
  }
  function lu(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            (a = n()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      st(l, l.return, f);
    }
  }
  function te(t, l, e) {
    try {
      var a = l.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              (i.destroy = void 0), (u = l);
              var o = e,
                m = f;
              try {
                m();
              } catch (p) {
                st(u, o, p);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (p) {
      st(l, l.return, p);
    }
  }
  function Xo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Ms(l, e);
      } catch (a) {
        st(t, t.return, a);
      }
    }
  }
  function Qo(t, l, e) {
    (e.props = Re(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      st(t, l, a);
    }
  }
  function eu(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      st(t, l, u);
    }
  }
  function El(t, l) {
    var e = t.ref,
      a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          st(t, l, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          st(t, l, u);
        }
      else e.current = null;
  }
  function Zo(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      st(t, t.return, u);
    }
  }
  function dc(t, l, e) {
    try {
      var a = t.stateNode;
      bh(a, t.type, e, l), (a[Qt] = l);
    } catch (u) {
      st(t, t.return, u);
    }
  }
  function Co(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && fe(t.type)) ||
      t.tag === 4
    );
  }
  function rc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Co(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && fe(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function hc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(t, l)
          : ((l =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = zn));
    else if (
      a !== 4 &&
      (a === 27 && fe(t.type) && ((e = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for (hc(t, l, e), t = t.sibling; t !== null; )
        hc(t, l, e), (t = t.sibling);
  }
  function hn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && fe(t.type) && (e = t.stateNode), (t = t.child), t !== null)
    )
      for (hn(t, l, e), t = t.sibling; t !== null; )
        hn(t, l, e), (t = t.sibling);
  }
  function Lo(t) {
    var l = t.stateNode,
      e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Ht(l, a, e), (l[xt] = t), (l[Qt] = e);
    } catch (n) {
      st(t, t.return, n);
    }
  }
  var Gl = !1,
    pt = !1,
    yc = !1,
    Vo = typeof WeakSet == "function" ? WeakSet : Set,
    Dt = null;
  function I0(t, l) {
    if (((t = t.containerInfo), (Gc = Nn), (t = ts(t)), ri(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0,
              f = -1,
              o = -1,
              m = 0,
              p = 0,
              M = t,
              v = null;
            l: for (;;) {
              for (
                var b;
                M !== e || (u !== 0 && M.nodeType !== 3) || (f = i + u),
                  M !== n || (a !== 0 && M.nodeType !== 3) || (o = i + a),
                  M.nodeType === 3 && (i += M.nodeValue.length),
                  (b = M.firstChild) !== null;

              )
                (v = M), (M = b);
              for (;;) {
                if (M === t) break l;
                if (
                  (v === e && ++m === u && (f = i),
                  v === n && ++p === a && (o = i),
                  (b = M.nextSibling) !== null)
                )
                  break;
                (M = v), (v = M.parentNode);
              }
              M = b;
            }
            e = f === -1 || o === -1 ? null : { start: f, end: o };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Xc = { focusedElem: t, selectionRange: e }, Nn = !1, Dt = l;
      Dt !== null;

    )
      if (
        ((l = Dt), (t = l.child), (l.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = l), (Dt = t);
      else
        for (; Dt !== null; ) {
          switch (((l = Dt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (e = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var C = Re(e.type, u, e.elementType === e.type);
                  (t = a.getSnapshotBeforeUpdate(C, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (G) {
                  st(e, e.return, G);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  Cc(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (Dt = t);
            break;
          }
          Dt = l.return;
        }
  }
  function wo(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        le(t, e), a & 4 && lu(5, e);
        break;
      case 1:
        if ((le(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              st(e, e.return, i);
            }
          else {
            var u = Re(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              st(e, e.return, i);
            }
          }
        a & 64 && Xo(e), a & 512 && eu(e, e.return);
        break;
      case 3:
        if ((le(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Ms(t, l);
          } catch (i) {
            st(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Lo(e);
      case 26:
      case 5:
        le(t, e), l === null && a & 4 && Zo(e), a & 512 && eu(e, e.return);
        break;
      case 12:
        le(t, e);
        break;
      case 13:
        le(t, e),
          a & 4 && ko(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((e = ih.bind(null, e)), zh(t, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Gl), !a)) {
          (l = (l !== null && l.memoizedState !== null) || pt), (u = Gl);
          var n = pt;
          (Gl = a),
            (pt = l) && !n ? ee(t, e, (e.subtreeFlags & 8772) !== 0) : le(t, e),
            (Gl = u),
            (pt = n);
        }
        break;
      case 30:
        break;
      default:
        le(t, e);
    }
  }
  function Ko(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), Ko(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && Jn(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var ht = null,
    Lt = !1;
  function Xl(t, l, e) {
    for (e = e.child; e !== null; ) Jo(t, l, e), (e = e.sibling);
  }
  function Jo(t, l, e) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function")
      try {
        Wt.onCommitFiberUnmount(Aa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        pt || El(e, l),
          Xl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        pt || El(e, l);
        var a = ht,
          u = Lt;
        fe(e.type) && ((ht = e.stateNode), (Lt = !1)),
          Xl(t, l, e),
          du(e.stateNode),
          (ht = a),
          (Lt = u);
        break;
      case 5:
        pt || El(e, l);
      case 6:
        if (
          ((a = ht),
          (u = Lt),
          (ht = null),
          Xl(t, l, e),
          (ht = a),
          (Lt = u),
          ht !== null)
        )
          if (Lt)
            try {
              (ht.nodeType === 9
                ? ht.body
                : ht.nodeName === "HTML"
                ? ht.ownerDocument.body
                : ht
              ).removeChild(e.stateNode);
            } catch (n) {
              st(e, l, n);
            }
          else
            try {
              ht.removeChild(e.stateNode);
            } catch (n) {
              st(e, l, n);
            }
        break;
      case 18:
        ht !== null &&
          (Lt
            ? ((t = ht),
              Bd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                e.stateNode
              ),
              gu(t))
            : Bd(ht, e.stateNode));
        break;
      case 4:
        (a = ht),
          (u = Lt),
          (ht = e.stateNode.containerInfo),
          (Lt = !0),
          Xl(t, l, e),
          (ht = a),
          (Lt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pt || te(2, e, l), pt || te(4, e, l), Xl(t, l, e);
        break;
      case 1:
        pt ||
          (El(e, l),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Qo(e, l, a)),
          Xl(t, l, e);
        break;
      case 21:
        Xl(t, l, e);
        break;
      case 22:
        (pt = (a = pt) || e.memoizedState !== null), Xl(t, l, e), (pt = a);
        break;
      default:
        Xl(t, l, e);
    }
  }
  function ko(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        gu(t);
      } catch (e) {
        st(l, l.return, e);
      }
  }
  function F0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Vo()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new Vo()),
          l
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function mc(t, l) {
    var e = F0(t);
    l.forEach(function (a) {
      var u = ch.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function Pt(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = t,
          i = l,
          f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (fe(f.type)) {
                (ht = f.stateNode), (Lt = !1);
                break t;
              }
              break;
            case 5:
              (ht = f.stateNode), (Lt = !1);
              break t;
            case 3:
            case 4:
              (ht = f.stateNode.containerInfo), (Lt = !0);
              break t;
          }
          f = f.return;
        }
        if (ht === null) throw Error(s(160));
        Jo(n, i, u),
          (ht = null),
          (Lt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) Wo(l, t), (l = l.sibling);
  }
  var vl = null;
  function Wo(t, l) {
    var e = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(l, t),
          tl(t),
          a & 4 && (te(3, t, t.return), lu(3, t), te(5, t, t.return));
        break;
      case 1:
        Pt(l, t),
          tl(t),
          a & 512 && (pt || e === null || El(e, e.return)),
          a & 64 &&
            Gl &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = vl;
        if (
          (Pt(l, t),
          tl(t),
          a & 512 && (pt || e === null || El(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (e = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  l: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[_a] ||
                          n[xt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Ht(n, a, e),
                        (n[xt] = t),
                        Mt(n),
                        (a = n);
                      break t;
                    case "link":
                      var i = Ld("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        Ht(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = Ld("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        Ht(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (n[xt] = t), Mt(n), (a = n);
                }
                t.stateNode = a;
              } else Vd(u, t.type, t.stateNode);
            else t.stateNode = Cd(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? Vd(u, t.type, t.stateNode)
                  : Cd(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                dc(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        Pt(l, t),
          tl(t),
          a & 512 && (pt || e === null || El(e, e.return)),
          e !== null && a & 4 && dc(t, t.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (Pt(l, t),
          tl(t),
          a & 512 && (pt || e === null || El(e, e.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Ce(u, "");
          } catch (b) {
            st(t, t.return, b);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), dc(t, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (yc = !0);
        break;
      case 6:
        if ((Pt(l, t), tl(t), a & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (a = t.memoizedProps), (e = t.stateNode);
          try {
            e.nodeValue = a;
          } catch (b) {
            st(t, t.return, b);
          }
        }
        break;
      case 3:
        if (
          ((On = null),
          (u = vl),
          (vl = _n(l.containerInfo)),
          Pt(l, t),
          (vl = u),
          tl(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            gu(l.containerInfo);
          } catch (b) {
            st(t, t.return, b);
          }
        yc && ((yc = !1), $o(t));
        break;
      case 4:
        (a = vl),
          (vl = _n(t.stateNode.containerInfo)),
          Pt(l, t),
          tl(t),
          (vl = a);
        break;
      case 12:
        Pt(l, t), tl(t);
        break;
      case 13:
        Pt(l, t),
          tl(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (Tc = gl()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var o = e !== null && e.memoizedState !== null,
          m = Gl,
          p = pt;
        if (
          ((Gl = m || u),
          (pt = p || o),
          Pt(l, t),
          (pt = p),
          (Gl = m),
          tl(t),
          a & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (e === null || o || Gl || pt || Ne(t)),
              e = null,
              l = t;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                o = e = l;
                try {
                  if (((n = o.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    f = o.stateNode;
                    var M = o.memoizedProps.style,
                      v =
                        M != null && M.hasOwnProperty("display")
                          ? M.display
                          : null;
                    f.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (b) {
                  st(o, o.return, b);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                o = l;
                try {
                  o.stateNode.nodeValue = u ? "" : o.memoizedProps;
                } catch (b) {
                  st(o, o.return, b);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), (l = l.return);
            }
            e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), mc(t, e))));
        break;
      case 19:
        Pt(l, t),
          tl(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(l, t), tl(t);
    }
  }
  function tl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Co(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = rc(t);
            hn(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Ce(i, ""), (e.flags &= -33));
            var f = rc(t);
            hn(t, f, i);
            break;
          case 3:
          case 4:
            var o = e.stateNode.containerInfo,
              m = rc(t);
            hc(t, m, o);
            break;
          default:
            throw Error(s(161));
        }
      } catch (p) {
        st(t, t.return, p);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function $o(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        $o(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function le(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) wo(t, l.alternate, l), (l = l.sibling);
  }
  function Ne(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          te(4, l, l.return), Ne(l);
          break;
        case 1:
          El(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Qo(l, l.return, e),
            Ne(l);
          break;
        case 27:
          du(l.stateNode);
        case 26:
        case 5:
          El(l, l.return), Ne(l);
          break;
        case 22:
          l.memoizedState === null && Ne(l);
          break;
        case 30:
          Ne(l);
          break;
        default:
          Ne(l);
      }
      t = t.sibling;
    }
  }
  function ee(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate,
        u = t,
        n = l,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ee(u, n, e), lu(4, n);
          break;
        case 1:
          if (
            (ee(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (m) {
              st(a, a.return, m);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode;
            try {
              var o = u.shared.hiddenCallbacks;
              if (o !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < o.length; u++)
                  zs(o[u], f);
            } catch (m) {
              st(a, a.return, m);
            }
          }
          e && i & 64 && Xo(n), eu(n, n.return);
          break;
        case 27:
          Lo(n);
        case 26:
        case 5:
          ee(u, n, e), e && a === null && i & 4 && Zo(n), eu(n, n.return);
          break;
        case 12:
          ee(u, n, e);
          break;
        case 13:
          ee(u, n, e), e && i & 4 && ko(u, n);
          break;
        case 22:
          n.memoizedState === null && ee(u, n, e), eu(n, n.return);
          break;
        case 30:
          break;
        default:
          ee(u, n, e);
      }
      l = l.sibling;
    }
  }
  function vc(t, l) {
    var e = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Za(e));
  }
  function bc(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Za(t));
  }
  function Al(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Io(t, l, e, a), (l = l.sibling);
  }
  function Io(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(t, l, e, a), u & 2048 && lu(9, l);
        break;
      case 1:
        Al(t, l, e, a);
        break;
      case 3:
        Al(t, l, e, a),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Za(t)));
        break;
      case 12:
        if (u & 2048) {
          Al(t, l, e, a), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (o) {
            st(l, l.return, o);
          }
        } else Al(t, l, e, a);
        break;
      case 13:
        Al(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? Al(t, l, e, a)
              : au(t, l)
            : n._visibility & 2
            ? Al(t, l, e, a)
            : ((n._visibility |= 2),
              ca(t, l, e, a, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && vc(i, l);
        break;
      case 24:
        Al(t, l, e, a), u & 2048 && bc(l.alternate, l);
        break;
      default:
        Al(t, l, e, a);
    }
  }
  function ca(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        i = l,
        f = e,
        o = a,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ca(n, i, f, o, u), lu(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null
            ? p._visibility & 2
              ? ca(n, i, f, o, u)
              : au(n, i)
            : ((p._visibility |= 2), ca(n, i, f, o, u)),
            u && m & 2048 && vc(i.alternate, i);
          break;
        case 24:
          ca(n, i, f, o, u), u && m & 2048 && bc(i.alternate, i);
          break;
        default:
          ca(n, i, f, o, u);
      }
      l = l.sibling;
    }
  }
  function au(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          a = l,
          u = a.flags;
        switch (a.tag) {
          case 22:
            au(e, a), u & 2048 && vc(a.alternate, a);
            break;
          case 24:
            au(e, a), u & 2048 && bc(a.alternate, a);
            break;
          default:
            au(e, a);
        }
        l = l.sibling;
      }
  }
  var uu = 8192;
  function fa(t) {
    if (t.subtreeFlags & uu)
      for (t = t.child; t !== null; ) Fo(t), (t = t.sibling);
  }
  function Fo(t) {
    switch (t.tag) {
      case 26:
        fa(t),
          t.flags & uu &&
            t.memoizedState !== null &&
            Yh(vl, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        fa(t);
        break;
      case 3:
      case 4:
        var l = vl;
        (vl = _n(t.stateNode.containerInfo)), fa(t), (vl = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = uu), (uu = 16777216), fa(t), (uu = l))
            : fa(t));
        break;
      default:
        fa(t);
    }
  }
  function Po(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do (l = t.sibling), (t.sibling = null), (t = l);
      while (t !== null);
    }
  }
  function nu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (Dt = a), ld(a, t);
        }
      Po(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) td(t), (t = t.sibling);
  }
  function td(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nu(t), t.flags & 2048 && te(9, t, t.return);
        break;
      case 3:
        nu(t);
        break;
      case 12:
        nu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), yn(t))
          : nu(t);
        break;
      default:
        nu(t);
    }
  }
  function yn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (Dt = a), ld(a, t);
        }
      Po(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          te(8, l, l.return), yn(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), yn(l));
          break;
        default:
          yn(l);
      }
      t = t.sibling;
    }
  }
  function ld(t, l) {
    for (; Dt !== null; ) {
      var e = Dt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          te(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Za(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Dt = a);
      else
        t: for (e = t; Dt !== null; ) {
          a = Dt;
          var u = a.sibling,
            n = a.return;
          if ((Ko(a), a === e)) {
            Dt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (Dt = u);
            break t;
          }
          Dt = n;
        }
    }
  }
  var P0 = {
      getCacheForType: function (t) {
        var l = Yt(At),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    th = typeof WeakMap == "function" ? WeakMap : Map,
    at = 0,
    ot = null,
    k = null,
    $ = 0,
    ut = 0,
    ll = null,
    ae = !1,
    sa = !1,
    Sc = !1,
    Ql = 0,
    bt = 0,
    ue = 0,
    He = 0,
    gc = 0,
    dl = 0,
    oa = 0,
    iu = null,
    Vt = null,
    pc = !1,
    Tc = 0,
    mn = 1 / 0,
    vn = null,
    ne = null,
    Nt = 0,
    ie = null,
    da = null,
    ra = 0,
    Ec = 0,
    Ac = null,
    ed = null,
    cu = 0,
    zc = null;
  function el() {
    if ((at & 2) !== 0 && $ !== 0) return $ & -$;
    if (T.T !== null) {
      var t = Pe;
      return t !== 0 ? t : Nc();
    }
    return bf();
  }
  function ad() {
    dl === 0 && (dl = ($ & 536870912) === 0 || et ? hf() : 536870912);
    var t = ol.current;
    return t !== null && (t.flags |= 32), dl;
  }
  function al(t, l, e) {
    ((t === ot && (ut === 2 || ut === 9)) || t.cancelPendingCommit !== null) &&
      (ha(t, 0), ce(t, $, dl, !1)),
      Ma(t, e),
      ((at & 2) === 0 || t !== ot) &&
        (t === ot &&
          ((at & 2) === 0 && (He |= e), bt === 4 && ce(t, $, dl, !1)),
        zl(t));
  }
  function ud(t, l, e) {
    if ((at & 6) !== 0) throw Error(s(327));
    var a = (!e && (l & 124) === 0 && (l & t.expiredLanes) === 0) || za(t, l),
      u = a ? ah(t, l) : Dc(t, l, !0),
      n = a;
    do {
      if (u === 0) {
        sa && !a && ce(t, l, 0, !1);
        break;
      } else {
        if (((e = t.current.alternate), n && !lh(e))) {
          (u = Dc(t, l, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              u = iu;
              var o = f.current.memoizedState.isDehydrated;
              if ((o && (ha(f, i).flags |= 256), (i = Dc(f, i, !1)), i !== 2)) {
                if (Sc && !o) {
                  (f.errorRecoveryDisabledLanes |= n), (He |= n), (u = 4);
                  break t;
                }
                (n = Vt),
                  (Vt = u),
                  n !== null && (Vt === null ? (Vt = n) : Vt.push.apply(Vt, n));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ha(t, 0), ce(t, l, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ce(a, l, dl, !ae);
              break t;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && ((u = Tc + 300 - gl()), 10 < u)) {
            if ((ce(a, l, dl, !ae), _u(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = qd(
              nd.bind(null, a, e, Vt, vn, pc, l, dl, He, oa, ae, n, 2, -0, 0),
              u
            );
            break t;
          }
          nd(a, e, Vt, vn, pc, l, dl, He, oa, ae, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    zl(t);
  }
  function nd(t, l, e, a, u, n, i, f, o, m, p, M, v, b) {
    if (
      ((t.timeoutHandle = -1),
      (M = l.subtreeFlags),
      (M & 8192 || (M & 16785408) === 16785408) &&
        ((yu = { stylesheets: null, count: 0, unsuspend: xh }),
        Fo(l),
        (M = Gh()),
        M !== null))
    ) {
      (t.cancelPendingCommit = M(
        rd.bind(null, t, l, n, e, a, u, i, f, o, p, 1, v, b)
      )),
        ce(t, n, i, !m);
      return;
    }
    rd(t, l, n, e, a, u, i, f, o);
  }
  function lh(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!It(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        (e.return = l), (l = e);
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    return !0;
  }
  function ce(t, l, e, a) {
    (l &= ~gc),
      (l &= ~He),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes);
    for (var u = l; 0 < u; ) {
      var n = 31 - $t(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    e !== 0 && mf(t, e, l);
  }
  function bn() {
    return (at & 6) === 0 ? (fu(0), !1) : !0;
  }
  function Mc() {
    if (k !== null) {
      if (ut === 0) var t = k.return;
      else (t = k), (Hl = _e = null), Ci(t), (na = null), (Fa = 0), (t = k);
      for (; t !== null; ) Go(t.alternate, t), (t = t.return);
      k = null;
    }
  }
  function ha(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), gh(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      Mc(),
      (ot = t),
      (k = e = Ul(t.current, null)),
      ($ = l),
      (ut = 0),
      (ll = null),
      (ae = !1),
      (sa = za(t, l)),
      (Sc = !1),
      (oa = dl = gc = He = ue = bt = 0),
      (Vt = iu = null),
      (pc = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - $t(a),
          n = 1 << u;
        (l |= t[u]), (a &= ~n);
      }
    return (Ql = l), Gu(), e;
  }
  function id(t, l) {
    (K = null),
      (T.H = an),
      l === La || l === Ju
        ? ((l = Es()), (ut = 3))
        : l === gs
        ? ((l = Es()), (ut = 4))
        : (ut =
            l === zo
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (ll = l),
      k === null && ((bt = 1), sn(t, il(l, t.current)));
  }
  function cd() {
    var t = T.H;
    return (T.H = an), t === null ? an : t;
  }
  function fd() {
    var t = T.A;
    return (T.A = P0), t;
  }
  function _c() {
    (bt = 4),
      ae || (($ & 4194048) !== $ && ol.current !== null) || (sa = !0),
      ((ue & 134217727) === 0 && (He & 134217727) === 0) ||
        ot === null ||
        ce(ot, $, dl, !1);
  }
  function Dc(t, l, e) {
    var a = at;
    at |= 2;
    var u = cd(),
      n = fd();
    (ot !== t || $ !== l) && ((vn = null), ha(t, l)), (l = !1);
    var i = bt;
    t: do
      try {
        if (ut !== 0 && k !== null) {
          var f = k,
            o = ll;
          switch (ut) {
            case 8:
              Mc(), (i = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ol.current === null && (l = !0);
              var m = ut;
              if (((ut = 0), (ll = null), ya(t, f, o, m), e && sa)) {
                i = 0;
                break t;
              }
              break;
            default:
              (m = ut), (ut = 0), (ll = null), ya(t, f, o, m);
          }
        }
        eh(), (i = bt);
        break;
      } catch (p) {
        id(t, p);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (Hl = _e = null),
      (at = a),
      (T.H = u),
      (T.A = n),
      k === null && ((ot = null), ($ = 0), Gu()),
      i
    );
  }
  function eh() {
    for (; k !== null; ) sd(k);
  }
  function ah(t, l) {
    var e = at;
    at |= 2;
    var a = cd(),
      u = fd();
    ot !== t || $ !== l
      ? ((vn = null), (mn = gl() + 500), ha(t, l))
      : (sa = za(t, l));
    t: do
      try {
        if (ut !== 0 && k !== null) {
          l = k;
          var n = ll;
          l: switch (ut) {
            case 1:
              (ut = 0), (ll = null), ya(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (ps(n)) {
                (ut = 0), (ll = null), od(l);
                break;
              }
              (l = function () {
                (ut !== 2 && ut !== 9) || ot !== t || (ut = 7), zl(t);
              }),
                n.then(l, l);
              break t;
            case 3:
              ut = 7;
              break t;
            case 4:
              ut = 5;
              break t;
            case 7:
              ps(n)
                ? ((ut = 0), (ll = null), od(l))
                : ((ut = 0), (ll = null), ya(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var f = k;
                  if (!i || wd(i)) {
                    (ut = 0), (ll = null);
                    var o = f.sibling;
                    if (o !== null) k = o;
                    else {
                      var m = f.return;
                      m !== null ? ((k = m), Sn(m)) : (k = null);
                    }
                    break l;
                  }
              }
              (ut = 0), (ll = null), ya(t, l, n, 5);
              break;
            case 6:
              (ut = 0), (ll = null), ya(t, l, n, 6);
              break;
            case 8:
              Mc(), (bt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        uh();
        break;
      } catch (p) {
        id(t, p);
      }
    while (!0);
    return (
      (Hl = _e = null),
      (T.H = a),
      (T.A = u),
      (at = e),
      k !== null ? 0 : ((ot = null), ($ = 0), Gu(), bt)
    );
  }
  function uh() {
    for (; k !== null && !_r(); ) sd(k);
  }
  function sd(t) {
    var l = xo(t.alternate, t, Ql);
    (t.memoizedProps = t.pendingProps), l === null ? Sn(t) : (k = l);
  }
  function od(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Ro(e, l, l.pendingProps, l.type, void 0, $);
        break;
      case 11:
        l = Ro(e, l, l.pendingProps, l.type.render, l.ref, $);
        break;
      case 5:
        Ci(l);
      default:
        Go(e, l), (l = k = os(l, Ql)), (l = xo(e, l, Ql));
    }
    (t.memoizedProps = t.pendingProps), l === null ? Sn(t) : (k = l);
  }
  function ya(t, l, e, a) {
    (Hl = _e = null), Ci(l), (na = null), (Fa = 0);
    var u = l.return;
    try {
      if (J0(t, u, l, e, $)) {
        (bt = 1), sn(t, il(e, t.current)), (k = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((k = u), n);
      (bt = 1), sn(t, il(e, t.current)), (k = null);
      return;
    }
    l.flags & 32768
      ? (et || a === 1
          ? (t = !0)
          : sa || ($ & 536870912) !== 0
          ? (t = !1)
          : ((ae = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = ol.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        dd(l, t))
      : Sn(l);
  }
  function Sn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        dd(l, ae);
        return;
      }
      t = l.return;
      var e = W0(l.alternate, l, Ql);
      if (e !== null) {
        k = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        k = l;
        return;
      }
      k = l = t;
    } while (l !== null);
    bt === 0 && (bt = 5);
  }
  function dd(t, l) {
    do {
      var e = $0(t.alternate, t);
      if (e !== null) {
        (e.flags &= 32767), (k = e);
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        k = t;
        return;
      }
      k = t = e;
    } while (t !== null);
    (bt = 6), (k = null);
  }
  function rd(t, l, e, a, u, n, i, f, o) {
    t.cancelPendingCommit = null;
    do gn();
    while (Nt !== 0);
    if ((at & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= bi),
        xr(t, e, n, i, f, o),
        t === ot && ((k = ot = null), ($ = 0)),
        (da = l),
        (ie = t),
        (ra = e),
        (Ec = n),
        (Ac = u),
        (ed = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            fh(Au, function () {
              return bd(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = T.T), (T.T = null), (u = q.p), (q.p = 2), (i = at), (at |= 4);
        try {
          I0(t, l, e);
        } finally {
          (at = i), (q.p = u), (T.T = a);
        }
      }
      (Nt = 1), hd(), yd(), md();
    }
  }
  function hd() {
    if (Nt === 1) {
      Nt = 0;
      var t = ie,
        l = da,
        e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        (e = T.T), (T.T = null);
        var a = q.p;
        q.p = 2;
        var u = at;
        at |= 4;
        try {
          Wo(l, t);
          var n = Xc,
            i = ts(t.containerInfo),
            f = n.focusedElem,
            o = n.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            Pf(f.ownerDocument.documentElement, f)
          ) {
            if (o !== null && ri(f)) {
              var m = o.start,
                p = o.end;
              if ((p === void 0 && (p = m), "selectionStart" in f))
                (f.selectionStart = m),
                  (f.selectionEnd = Math.min(p, f.value.length));
              else {
                var M = f.ownerDocument || document,
                  v = (M && M.defaultView) || window;
                if (v.getSelection) {
                  var b = v.getSelection(),
                    C = f.textContent.length,
                    G = Math.min(o.start, C),
                    ct = o.end === void 0 ? G : Math.min(o.end, C);
                  !b.extend && G > ct && ((i = ct), (ct = G), (G = i));
                  var h = Ff(f, G),
                    r = Ff(f, ct);
                  if (
                    h &&
                    r &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== h.node ||
                      b.anchorOffset !== h.offset ||
                      b.focusNode !== r.node ||
                      b.focusOffset !== r.offset)
                  ) {
                    var y = M.createRange();
                    y.setStart(h.node, h.offset),
                      b.removeAllRanges(),
                      G > ct
                        ? (b.addRange(y), b.extend(r.node, r.offset))
                        : (y.setEnd(r.node, r.offset), b.addRange(y));
                  }
                }
              }
            }
            for (M = [], b = f; (b = b.parentNode); )
              b.nodeType === 1 &&
                M.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < M.length;
              f++
            ) {
              var A = M[f];
              (A.element.scrollLeft = A.left), (A.element.scrollTop = A.top);
            }
          }
          (Nn = !!Gc), (Xc = Gc = null);
        } finally {
          (at = u), (q.p = a), (T.T = e);
        }
      }
      (t.current = l), (Nt = 2);
    }
  }
  function yd() {
    if (Nt === 2) {
      Nt = 0;
      var t = ie,
        l = da,
        e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        (e = T.T), (T.T = null);
        var a = q.p;
        q.p = 2;
        var u = at;
        at |= 4;
        try {
          wo(t, l.alternate, l);
        } finally {
          (at = u), (q.p = a), (T.T = e);
        }
      }
      Nt = 3;
    }
  }
  function md() {
    if (Nt === 4 || Nt === 3) {
      (Nt = 0), Dr();
      var t = ie,
        l = da,
        e = ra,
        a = ed;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Nt = 5)
        : ((Nt = 0), (da = ie = null), vd(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (ne = null),
        wn(e),
        (l = l.stateNode),
        Wt && typeof Wt.onCommitFiberRoot == "function")
      )
        try {
          Wt.onCommitFiberRoot(Aa, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (l = T.T), (u = q.p), (q.p = 2), (T.T = null);
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (T.T = l), (q.p = u);
        }
      }
      (ra & 3) !== 0 && gn(),
        zl(t),
        (u = t.pendingLanes),
        (e & 4194090) !== 0 && (u & 42) !== 0
          ? t === zc
            ? cu++
            : ((cu = 0), (zc = t))
          : (cu = 0),
        fu(0);
    }
  }
  function vd(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Za(l)));
  }
  function gn(t) {
    return hd(), yd(), md(), bd();
  }
  function bd() {
    if (Nt !== 5) return !1;
    var t = ie,
      l = Ec;
    Ec = 0;
    var e = wn(ra),
      a = T.T,
      u = q.p;
    try {
      (q.p = 32 > e ? 32 : e), (T.T = null), (e = Ac), (Ac = null);
      var n = ie,
        i = ra;
      if (((Nt = 0), (da = ie = null), (ra = 0), (at & 6) !== 0))
        throw Error(s(331));
      var f = at;
      if (
        ((at |= 4),
        td(n.current),
        Io(n, n.current, i, e),
        (at = f),
        fu(0, !1),
        Wt && typeof Wt.onPostCommitFiberRoot == "function")
      )
        try {
          Wt.onPostCommitFiberRoot(Aa, n);
        } catch {}
      return !0;
    } finally {
      (q.p = u), (T.T = a), vd(t, l);
    }
  }
  function Sd(t, l, e) {
    (l = il(e, l)),
      (l = ec(t.stateNode, l, 2)),
      (t = $l(t, l, 2)),
      t !== null && (Ma(t, 2), zl(t));
  }
  function st(t, l, e) {
    if (t.tag === 3) Sd(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Sd(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ne === null || !ne.has(a)))
          ) {
            (t = il(e, t)),
              (e = Eo(2)),
              (a = $l(l, e, 2)),
              a !== null && (Ao(e, a, l, t), Ma(a, 2), zl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Oc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new th();
      var u = new Set();
      a.set(l, u);
    } else (u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u));
    u.has(e) ||
      ((Sc = !0), u.add(e), (t = nh.bind(null, t, l, e)), l.then(t, t));
  }
  function nh(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      ot === t &&
        ($ & e) === e &&
        (bt === 4 || (bt === 3 && ($ & 62914560) === $ && 300 > gl() - Tc)
          ? (at & 2) === 0 && ha(t, 0)
          : (gc |= e),
        oa === $ && (oa = 0)),
      zl(t);
  }
  function gd(t, l) {
    l === 0 && (l = yf()), (t = We(t, l)), t !== null && (Ma(t, l), zl(t));
  }
  function ih(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), gd(t, e);
  }
  function ch(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(l), gd(t, e);
  }
  function fh(t, l) {
    return Zn(t, l);
  }
  var pn = null,
    ma = null,
    Uc = !1,
    Tn = !1,
    Rc = !1,
    qe = 0;
  function zl(t) {
    t !== ma &&
      t.next === null &&
      (ma === null ? (pn = ma = t) : (ma = ma.next = t)),
      (Tn = !0),
      Uc || ((Uc = !0), oh());
  }
  function fu(t, l) {
    if (!Rc && Tn) {
      Rc = !0;
      do
        for (var e = !1, a = pn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              (n = (1 << (31 - $t(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), Ad(a, n));
          } else
            (n = $),
              (n = _u(
                a,
                a === ot ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || za(a, n) || ((e = !0), Ad(a, n));
          a = a.next;
        }
      while (e);
      Rc = !1;
    }
  }
  function sh() {
    pd();
  }
  function pd() {
    Tn = Uc = !1;
    var t = 0;
    qe !== 0 && (Sh() && (t = qe), (qe = 0));
    for (var l = gl(), e = null, a = pn; a !== null; ) {
      var u = a.next,
        n = Td(a, l);
      n === 0
        ? ((a.next = null),
          e === null ? (pn = u) : (e.next = u),
          u === null && (ma = e))
        : ((e = a), (t !== 0 || (n & 3) !== 0) && (Tn = !0)),
        (a = u);
    }
    fu(t);
  }
  function Td(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - $t(n),
        f = 1 << i,
        o = u[i];
      o === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = Br(f, l))
        : o <= l && (t.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((l = ot),
      (e = $),
      (e = _u(
        t,
        t === l ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      e === 0 ||
        (t === l && (ut === 2 || ut === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Cn(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || za(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((a !== null && Cn(a), wn(e))) {
        case 2:
        case 8:
          e = df;
          break;
        case 32:
          e = Au;
          break;
        case 268435456:
          e = rf;
          break;
        default:
          e = Au;
      }
      return (
        (a = Ed.bind(null, t)),
        (e = Zn(e, a)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      a !== null && a !== null && Cn(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Ed(t, l) {
    if (Nt !== 0 && Nt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var e = t.callbackNode;
    if (gn() && t.callbackNode !== e) return null;
    var a = $;
    return (
      (a = _u(
        t,
        t === ot ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (ud(t, a, l),
          Td(t, gl()),
          t.callbackNode != null && t.callbackNode === e
            ? Ed.bind(null, t)
            : null)
    );
  }
  function Ad(t, l) {
    if (gn()) return null;
    ud(t, l, !0);
  }
  function oh() {
    ph(function () {
      (at & 6) !== 0 ? Zn(of, sh) : pd();
    });
  }
  function Nc() {
    return qe === 0 && (qe = hf()), qe;
  }
  function zd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Nu("" + t);
  }
  function Md(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function dh(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = zd((u[Qt] || null).action),
        i = a.submitter;
      i &&
        ((l = (l = i[Qt] || null)
          ? zd(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var f = new Bu("action", "action", null, a, u);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (qe !== 0) {
                  var o = i ? Md(u, i) : new FormData(u);
                  Ii(
                    e,
                    { pending: !0, data: o, method: u.method, action: n },
                    null,
                    o
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (o = i ? Md(u, i) : new FormData(u)),
                  Ii(
                    e,
                    { pending: !0, data: o, method: u.method, action: n },
                    n,
                    o
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Hc = 0; Hc < vi.length; Hc++) {
    var qc = vi[Hc],
      rh = qc.toLowerCase(),
      hh = qc[0].toUpperCase() + qc.slice(1);
    ml(rh, "on" + hh);
  }
  ml(as, "onAnimationEnd"),
    ml(us, "onAnimationIteration"),
    ml(ns, "onAnimationStart"),
    ml("dblclick", "onDoubleClick"),
    ml("focusin", "onFocus"),
    ml("focusout", "onBlur"),
    ml(R0, "onTransitionRun"),
    ml(N0, "onTransitionStart"),
    ml(H0, "onTransitionCancel"),
    ml(is, "onTransitionEnd"),
    Xe("onMouseEnter", ["mouseout", "mouseover"]),
    Xe("onMouseLeave", ["mouseout", "mouseover"]),
    Xe("onPointerEnter", ["pointerout", "pointerover"]),
    Xe("onPointerLeave", ["pointerout", "pointerover"]),
    be(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    be(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    be(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    be(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    be(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var su =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(su)
    );
  function _d(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              o = f.instance,
              m = f.currentTarget;
            if (((f = f.listener), o !== n && u.isPropagationStopped()))
              break t;
            (n = f), (u.currentTarget = m);
            try {
              n(u);
            } catch (p) {
              fn(p);
            }
            (u.currentTarget = null), (n = o);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (o = f.instance),
              (m = f.currentTarget),
              (f = f.listener),
              o !== n && u.isPropagationStopped())
            )
              break t;
            (n = f), (u.currentTarget = m);
            try {
              n(u);
            } catch (p) {
              fn(p);
            }
            (u.currentTarget = null), (n = o);
          }
      }
    }
  }
  function W(t, l) {
    var e = l[Kn];
    e === void 0 && (e = l[Kn] = new Set());
    var a = t + "__bubble";
    e.has(a) || (Dd(l, t, 2, !1), e.add(a));
  }
  function jc(t, l, e) {
    var a = 0;
    l && (a |= 4), Dd(e, t, a, l);
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(t) {
    if (!t[En]) {
      (t[En] = !0),
        gf.forEach(function (e) {
          e !== "selectionchange" && (yh.has(e) || jc(e, !1, t), jc(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[En] || ((l[En] = !0), jc("selectionchange", !1, l));
    }
  }
  function Dd(t, l, e, a) {
    switch (Id(l)) {
      case 2:
        var u = Zh;
        break;
      case 8:
        u = Ch;
        break;
      default:
        u = Wc;
    }
    (e = u.bind(null, l, e, t)),
      (u = void 0),
      !ai ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: u })
          : t.addEventListener(l, e, !0)
        : u !== void 0
        ? t.addEventListener(l, e, { passive: u })
        : t.addEventListener(l, e, !1);
  }
  function xc(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = xe(f)), i === null)) return;
            if (((o = i.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              a = n = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    qf(function () {
      var m = n,
        p = li(e),
        M = [];
      t: {
        var v = cs.get(t);
        if (v !== void 0) {
          var b = Bu,
            C = t;
          switch (t) {
            case "keypress":
              if (qu(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = f0;
              break;
            case "focusin":
              (C = "focus"), (b = ci);
              break;
            case "focusout":
              (C = "blur"), (b = ci);
              break;
            case "beforeblur":
            case "afterblur":
              b = ci;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = xf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = $r;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = d0;
              break;
            case as:
            case us:
            case ns:
              b = Pr;
              break;
            case is:
              b = h0;
              break;
            case "scroll":
            case "scrollend":
              b = kr;
              break;
            case "wheel":
              b = m0;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = l0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Gf;
              break;
            case "toggle":
            case "beforetoggle":
              b = b0;
          }
          var G = (l & 4) !== 0,
            ct = !G && (t === "scroll" || t === "scrollend"),
            h = G ? (v !== null ? v + "Capture" : null) : v;
          G = [];
          for (var r = m, y; r !== null; ) {
            var A = r;
            if (
              ((y = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                y === null ||
                h === null ||
                ((A = Oa(r, h)), A != null && G.push(ou(r, A, y))),
              ct)
            )
              break;
            r = r.return;
          }
          0 < G.length &&
            ((v = new b(v, C, null, e, p)), M.push({ event: v, listeners: G }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((v = t === "mouseover" || t === "pointerover"),
            (b = t === "mouseout" || t === "pointerout"),
            v &&
              e !== ti &&
              (C = e.relatedTarget || e.fromElement) &&
              (xe(C) || C[Be]))
          )
            break t;
          if (
            (b || v) &&
            ((v =
              p.window === p
                ? p
                : (v = p.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            b
              ? ((C = e.relatedTarget || e.toElement),
                (b = m),
                (C = C ? xe(C) : null),
                C !== null &&
                  ((ct = _(C)),
                  (G = C.tag),
                  C !== ct || (G !== 5 && G !== 27 && G !== 6)) &&
                  (C = null))
              : ((b = null), (C = m)),
            b !== C)
          ) {
            if (
              ((G = xf),
              (A = "onMouseLeave"),
              (h = "onMouseEnter"),
              (r = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((G = Gf),
                (A = "onPointerLeave"),
                (h = "onPointerEnter"),
                (r = "pointer")),
              (ct = b == null ? v : Da(b)),
              (y = C == null ? v : Da(C)),
              (v = new G(A, r + "leave", b, e, p)),
              (v.target = ct),
              (v.relatedTarget = y),
              (A = null),
              xe(p) === m &&
                ((G = new G(h, r + "enter", C, e, p)),
                (G.target = y),
                (G.relatedTarget = ct),
                (A = G)),
              (ct = A),
              b && C)
            )
              l: {
                for (G = b, h = C, r = 0, y = G; y; y = va(y)) r++;
                for (y = 0, A = h; A; A = va(A)) y++;
                for (; 0 < r - y; ) (G = va(G)), r--;
                for (; 0 < y - r; ) (h = va(h)), y--;
                for (; r--; ) {
                  if (G === h || (h !== null && G === h.alternate)) break l;
                  (G = va(G)), (h = va(h));
                }
                G = null;
              }
            else G = null;
            b !== null && Od(M, v, b, G, !1),
              C !== null && ct !== null && Od(M, ct, C, G, !0);
          }
        }
        t: {
          if (
            ((v = m ? Da(m) : window),
            (b = v.nodeName && v.nodeName.toLowerCase()),
            b === "select" || (b === "input" && v.type === "file"))
          )
            var B = Kf;
          else if (Vf(v))
            if (Jf) B = D0;
            else {
              B = M0;
              var J = z0;
            }
          else
            (b = v.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? m && Pn(m.elementType) && (B = Kf)
                : (B = _0);
          if (B && (B = B(t, m))) {
            wf(M, B, e, p);
            break t;
          }
          J && J(t, v, m),
            t === "focusout" &&
              m &&
              v.type === "number" &&
              m.memoizedProps.value != null &&
              Fn(v, "number", v.value);
        }
        switch (((J = m ? Da(m) : window), t)) {
          case "focusin":
            (Vf(J) || J.contentEditable === "true") &&
              ((Ke = J), (hi = m), (xa = null));
            break;
          case "focusout":
            xa = hi = Ke = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (yi = !1), ls(M, e, p);
            break;
          case "selectionchange":
            if (U0) break;
          case "keydown":
          case "keyup":
            ls(M, e, p);
        }
        var x;
        if (si)
          t: {
            switch (t) {
              case "compositionstart":
                var X = "onCompositionStart";
                break t;
              case "compositionend":
                X = "onCompositionEnd";
                break t;
              case "compositionupdate":
                X = "onCompositionUpdate";
                break t;
            }
            X = void 0;
          }
        else
          we
            ? Cf(t, e) && (X = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (X = "onCompositionStart");
        X &&
          (Xf &&
            e.locale !== "ko" &&
            (we || X !== "onCompositionStart"
              ? X === "onCompositionEnd" && we && (x = jf())
              : ((Kl = p),
                (ui = "value" in Kl ? Kl.value : Kl.textContent),
                (we = !0))),
          (J = An(m, X)),
          0 < J.length &&
            ((X = new Yf(X, t, null, e, p)),
            M.push({ event: X, listeners: J }),
            x ? (X.data = x) : ((x = Lf(e)), x !== null && (X.data = x)))),
          (x = g0 ? p0(t, e) : T0(t, e)) &&
            ((X = An(m, "onBeforeInput")),
            0 < X.length &&
              ((J = new Yf("onBeforeInput", "beforeinput", null, e, p)),
              M.push({ event: J, listeners: X }),
              (J.data = x))),
          dh(M, t, m, e, p);
      }
      _d(M, l);
    });
  }
  function ou(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function An(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Oa(t, e)),
          u != null && a.unshift(ou(t, u, n)),
          (u = Oa(t, l)),
          u != null && a.push(ou(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function va(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Od(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        o = f.alternate,
        m = f.stateNode;
      if (((f = f.tag), o !== null && o === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        m === null ||
        ((o = m),
        u
          ? ((m = Oa(e, n)), m != null && i.unshift(ou(e, m, o)))
          : u || ((m = Oa(e, n)), m != null && i.push(ou(e, m, o)))),
        (e = e.return);
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var mh = /\r\n?/g,
    vh = /\u0000|\uFFFD/g;
  function Ud(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        mh,
        `
`
      )
      .replace(vh, "");
  }
  function Rd(t, l) {
    return (l = Ud(l)), Ud(t) === l;
  }
  function zn() {}
  function it(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? l === "body" || (l === "textarea" && a === "") || Ce(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            l !== "body" &&
            Ce(t, "" + a);
        break;
      case "className":
        Ou(t, "class", a);
        break;
      case "tabIndex":
        Ou(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ou(t, e, a);
        break;
      case "style":
        Nf(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Ou(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        (a = Nu("" + a)), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (l !== "input" && it(t, l, "name", u.name, u, null),
                it(t, l, "formEncType", u.formEncType, u, null),
                it(t, l, "formMethod", u.formMethod, u, null),
                it(t, l, "formTarget", u.formTarget, u, null))
              : (it(t, l, "encType", u.encType, u, null),
                it(t, l, "method", u.method, u, null),
                it(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        (a = Nu("" + a)), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = zn);
        break;
      case "onScroll":
        a != null && W("scroll", t);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (e = Nu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "" + a)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a);
        break;
      case "popover":
        W("beforetoggle", t), W("toggle", t), Du(t, "popover", a);
        break;
      case "xlinkActuate":
        Dl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Dl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Dl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Dl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Dl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Dl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Dl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Dl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Dl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Du(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Kr.get(e) || e), Du(t, e, a));
    }
  }
  function Yc(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        Nf(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ce(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Ce(t, "" + a);
        break;
      case "onScroll":
        a != null && W("scroll", t);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = zn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pf.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (l = e.slice(2, u ? e.length - 7 : void 0)),
              (n = t[Qt] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && t.removeEventListener(l, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, u);
              break t;
            }
            e in t
              ? (t[e] = a)
              : a === !0
              ? t.setAttribute(e, "")
              : Du(t, e, a);
          }
    }
  }
  function Ht(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        W("error", t), W("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  it(t, l, n, i, e, null);
              }
          }
        u && it(t, l, "srcSet", e.srcSet, e, null),
          a && it(t, l, "src", e.src, e, null);
        return;
      case "input":
        W("invalid", t);
        var f = (n = i = u = null),
          o = null,
          m = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var p = e[a];
            if (p != null)
              switch (a) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  o = p;
                  break;
                case "defaultChecked":
                  m = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  f = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(s(137, l));
                  break;
                default:
                  it(t, l, a, p, e, null);
              }
          }
        Df(t, n, f, o, m, i, u, !1), Uu(t);
        return;
      case "select":
        W("invalid", t), (a = i = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((f = e[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                it(t, l, u, f, e, null);
            }
        (l = n),
          (e = i),
          (t.multiple = !!a),
          l != null ? Ze(t, !!a, l, !1) : e != null && Ze(t, !!a, e, !0);
        return;
      case "textarea":
        W("invalid", t), (n = u = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                it(t, l, i, f, e, null);
            }
        Uf(t, a, u, n), Uu(t);
        return;
      case "option":
        for (o in e)
          if (e.hasOwnProperty(o) && ((a = e[o]), a != null))
            switch (o) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                it(t, l, o, a, e, null);
            }
        return;
      case "dialog":
        W("beforetoggle", t), W("toggle", t), W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < su.length; a++) W(su[a], t);
        break;
      case "image":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", t), W("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in e)
          if (e.hasOwnProperty(m) && ((a = e[m]), a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                it(t, l, m, a, e, null);
            }
        return;
      default:
        if (Pn(l)) {
          for (p in e)
            e.hasOwnProperty(p) &&
              ((a = e[p]), a !== void 0 && Yc(t, l, p, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && it(t, l, f, a, e, null));
  }
  function bh(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          f = null,
          o = null,
          m = null,
          p = null;
        for (b in e) {
          var M = e[b];
          if (e.hasOwnProperty(b) && M != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = M;
              default:
                a.hasOwnProperty(b) || it(t, l, b, null, a, M);
            }
        }
        for (var v in a) {
          var b = a[v];
          if (((M = e[v]), a.hasOwnProperty(v) && (b != null || M != null)))
            switch (v) {
              case "type":
                n = b;
                break;
              case "name":
                u = b;
                break;
              case "checked":
                m = b;
                break;
              case "defaultChecked":
                p = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                f = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(s(137, l));
                break;
              default:
                b !== M && it(t, l, v, b, a, M);
            }
        }
        In(t, i, f, o, m, p, n, u);
        return;
      case "select":
        b = i = f = v = null;
        for (n in e)
          if (((o = e[n]), e.hasOwnProperty(n) && o != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = o;
              default:
                a.hasOwnProperty(n) || it(t, l, n, null, a, o);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (o = e[u]),
            a.hasOwnProperty(u) && (n != null || o != null))
          )
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== o && it(t, l, u, n, a, o);
            }
        (l = f),
          (e = i),
          (a = b),
          v != null
            ? Ze(t, !!e, v, !1)
            : !!a != !!e &&
              (l != null ? Ze(t, !!e, l, !0) : Ze(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (f in e)
          if (
            ((u = e[f]),
            e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                it(t, l, f, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && it(t, l, i, u, a, n);
            }
        Of(t, v, b);
        return;
      case "option":
        for (var C in e)
          if (
            ((v = e[C]),
            e.hasOwnProperty(C) && v != null && !a.hasOwnProperty(C))
          )
            switch (C) {
              case "selected":
                t.selected = !1;
                break;
              default:
                it(t, l, C, null, a, v);
            }
        for (o in a)
          if (
            ((v = a[o]),
            (b = e[o]),
            a.hasOwnProperty(o) && v !== b && (v != null || b != null))
          )
            switch (o) {
              case "selected":
                t.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                it(t, l, o, v, a, b);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in e)
          (v = e[G]),
            e.hasOwnProperty(G) &&
              v != null &&
              !a.hasOwnProperty(G) &&
              it(t, l, G, null, a, v);
        for (m in a)
          if (
            ((v = a[m]),
            (b = e[m]),
            a.hasOwnProperty(m) && v !== b && (v != null || b != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(137, l));
                break;
              default:
                it(t, l, m, v, a, b);
            }
        return;
      default:
        if (Pn(l)) {
          for (var ct in e)
            (v = e[ct]),
              e.hasOwnProperty(ct) &&
                v !== void 0 &&
                !a.hasOwnProperty(ct) &&
                Yc(t, l, ct, void 0, a, v);
          for (p in a)
            (v = a[p]),
              (b = e[p]),
              !a.hasOwnProperty(p) ||
                v === b ||
                (v === void 0 && b === void 0) ||
                Yc(t, l, p, v, a, b);
          return;
        }
    }
    for (var h in e)
      (v = e[h]),
        e.hasOwnProperty(h) &&
          v != null &&
          !a.hasOwnProperty(h) &&
          it(t, l, h, null, a, v);
    for (M in a)
      (v = a[M]),
        (b = e[M]),
        !a.hasOwnProperty(M) ||
          v === b ||
          (v == null && b == null) ||
          it(t, l, M, v, a, b);
  }
  var Gc = null,
    Xc = null;
  function Mn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Nd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Qc(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Zc = null;
  function Sh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Zc
        ? !1
        : ((Zc = t), !0)
      : ((Zc = null), !1);
  }
  var qd = typeof setTimeout == "function" ? setTimeout : void 0,
    gh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jd = typeof Promise == "function" ? Promise : void 0,
    ph =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jd < "u"
        ? function (t) {
            return jd.resolve(null).then(t).catch(Th);
          }
        : qd;
  function Th(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function fe(t) {
    return t === "head";
  }
  function Bd(t, l) {
    var e = l,
      a = 0,
      u = 0;
    do {
      var n = e.nextSibling;
      if ((t.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var i = t.ownerDocument;
            if ((e & 1 && du(i.documentElement), e & 2 && du(i.body), e & 4))
              for (e = i.head, du(e), i = e.firstChild; i; ) {
                var f = i.nextSibling,
                  o = i.nodeName;
                i[_a] ||
                  o === "SCRIPT" ||
                  o === "STYLE" ||
                  (o === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(i),
                  (i = f);
              }
          }
          if (u === 0) {
            t.removeChild(n), gu(l);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? u++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = n;
    } while (e);
    gu(l);
  }
  function Cc(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cc(e), Jn(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Eh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[_a])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = bl(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ah(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = bl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Lc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function zh(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete") l();
    else {
      var a = function () {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function bl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
        )
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var Vc = null;
  function xd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Yd(t, l, e) {
    switch (((l = Mn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function du(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    Jn(t);
  }
  var rl = new Map(),
    Gd = new Set();
  function _n(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Zl = q.d;
  q.d = { f: Mh, r: _h, D: Dh, C: Oh, L: Uh, m: Rh, X: Hh, S: Nh, M: qh };
  function Mh() {
    var t = Zl.f(),
      l = bn();
    return t || l;
  }
  function _h(t) {
    var l = Ye(t);
    l !== null && l.tag === 5 && l.type === "form" ? ao(l) : Zl.r(t);
  }
  var ba = typeof document > "u" ? null : document;
  function Xd(t, l, e) {
    var a = ba;
    if (a && typeof l == "string" && l) {
      var u = nl(l);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        Gd.has(u) ||
          (Gd.add(u),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(u) === null &&
            ((l = a.createElement("link")),
            Ht(l, "link", t),
            Mt(l),
            a.head.appendChild(l)));
    }
  }
  function Dh(t) {
    Zl.D(t), Xd("dns-prefetch", t, null);
  }
  function Oh(t, l) {
    Zl.C(t, l), Xd("preconnect", t, l);
  }
  function Uh(t, l, e) {
    Zl.L(t, l, e);
    var a = ba;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + nl(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + nl(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + nl(e.imageSizes) + '"]'))
        : (u += '[href="' + nl(t) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = Sa(t);
          break;
        case "script":
          n = ga(t);
      }
      rl.has(n) ||
        ((t = R(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e
        )),
        rl.set(n, t),
        a.querySelector(u) !== null ||
          (l === "style" && a.querySelector(ru(n))) ||
          (l === "script" && a.querySelector(hu(n))) ||
          ((l = a.createElement("link")),
          Ht(l, "link", t),
          Mt(l),
          a.head.appendChild(l)));
    }
  }
  function Rh(t, l) {
    Zl.m(t, l);
    var e = ba;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + nl(a) + '"][href="' + nl(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ga(t);
      }
      if (
        !rl.has(n) &&
        ((t = R({ rel: "modulepreload", href: t }, l)),
        rl.set(n, t),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(hu(n))) return;
        }
        (a = e.createElement("link")),
          Ht(a, "link", t),
          Mt(a),
          e.head.appendChild(a);
      }
    }
  }
  function Nh(t, l, e) {
    Zl.S(t, l, e);
    var a = ba;
    if (a && t) {
      var u = Ge(a).hoistableStyles,
        n = Sa(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(ru(n)))) f.loading = 5;
        else {
          (t = R({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = rl.get(n)) && wc(t, e);
          var o = (i = a.createElement("link"));
          Mt(o),
            Ht(o, "link", t),
            (o._p = new Promise(function (m, p) {
              (o.onload = m), (o.onerror = p);
            })),
            o.addEventListener("load", function () {
              f.loading |= 1;
            }),
            o.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Dn(i, l, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: f }),
          u.set(n, i);
      }
    }
  }
  function Hh(t, l) {
    Zl.X(t, l);
    var e = ba;
    if (e && t) {
      var a = Ge(e).hoistableScripts,
        u = ga(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(hu(u))),
        n ||
          ((t = R({ src: t, async: !0 }, l)),
          (l = rl.get(u)) && Kc(t, l),
          (n = e.createElement("script")),
          Mt(n),
          Ht(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function qh(t, l) {
    Zl.M(t, l);
    var e = ba;
    if (e && t) {
      var a = Ge(e).hoistableScripts,
        u = ga(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(hu(u))),
        n ||
          ((t = R({ src: t, async: !0, type: "module" }, l)),
          (l = rl.get(u)) && Kc(t, l),
          (n = e.createElement("script")),
          Mt(n),
          Ht(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Qd(t, l, e, a) {
    var u = (u = L.current) ? _n(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Sa(e.href)),
            (e = Ge(u).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Sa(e.href);
          var n = Ge(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(ru(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              rl.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                rl.set(t, e),
                n || jh(u, t, e, i.state))),
            l && a === null)
          )
            throw Error(s(528, ""));
          return i;
        }
        if (l && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = ga(e)),
              (e = Ge(u).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Sa(t) {
    return 'href="' + nl(t) + '"';
  }
  function ru(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Zd(t) {
    return R({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function jh(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (a.loading = 1)
      : ((l = t.createElement("link")),
        (a.preload = l),
        l.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ht(l, "link", e),
        Mt(l),
        t.head.appendChild(l));
  }
  function ga(t) {
    return '[src="' + nl(t) + '"]';
  }
  function hu(t) {
    return "script[async]" + t;
  }
  function Cd(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + nl(e.href) + '"]');
          if (a) return (l.instance = a), Mt(a), a;
          var u = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Mt(a),
            Ht(a, "style", u),
            Dn(a, e.precedence, t),
            (l.instance = a)
          );
        case "stylesheet":
          u = Sa(e.href);
          var n = t.querySelector(ru(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), Mt(n), n;
          (a = Zd(e)),
            (u = rl.get(u)) && wc(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Mt(n);
          var i = n;
          return (
            (i._p = new Promise(function (f, o) {
              (i.onload = f), (i.onerror = o);
            })),
            Ht(n, "link", a),
            (l.state.loading |= 4),
            Dn(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = ga(e.src)),
            (u = t.querySelector(hu(n)))
              ? ((l.instance = u), Mt(u), u)
              : ((a = e),
                (u = rl.get(n)) && ((a = R({}, e)), Kc(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Mt(u),
                Ht(u, "link", a),
                t.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), Dn(a, e.precedence, t));
    return l.instance;
  }
  function Dn(t, l, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === l) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function wc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function Kc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var On = null;
  function Ld(t, l, e) {
    if (On === null) {
      var a = new Map(),
        u = (On = new Map());
      u.set(e, a);
    } else (u = On), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), e = e.getElementsByTagName(t), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[_a] ||
          n[xt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function Vd(t, l, e) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null
      );
  }
  function Bh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled), typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function wd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var yu = null;
  function xh() {}
  function Yh(t, l, e) {
    if (yu === null) throw Error(s(475));
    var a = yu;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Sa(e.href),
          n = t.querySelector(ru(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Un.bind(a)), t.then(a, a)),
            (l.state.loading |= 4),
            (l.instance = n),
            Mt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = Zd(e)),
          (u = rl.get(u)) && wc(e, u),
          (n = n.createElement("link")),
          Mt(n);
        var i = n;
        (i._p = new Promise(function (f, o) {
          (i.onload = f), (i.onerror = o);
        })),
          Ht(n, "link", e),
          (l.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (a.count++,
          (l = Un.bind(a)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function Gh() {
    if (yu === null) throw Error(s(475));
    var t = yu;
    return (
      t.stylesheets && t.count === 0 && Jc(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && Jc(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Un() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Rn = null;
  function Jc(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Rn = new Map()),
        l.forEach(Xh, t),
        (Rn = null),
        Un.call(t));
  }
  function Xh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Rn.get(t);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Rn.set(t, e);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (u = l.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Un.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var mu = {
    $$typeof: qt,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function Qh(t, l, e, a, u, n, i, f) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ln(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ln(0)),
      (this.hiddenUpdates = Ln(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function Kd(t, l, e, a, u, n, i, f, o, m, p, M) {
    return (
      (t = new Qh(t, l, e, i, f, o, m, M)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = Ft(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = Oi()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
      Hi(n),
      t
    );
  }
  function Jd(t) {
    return t ? ((t = $e), t) : $e;
  }
  function kd(t, l, e, a, u, n) {
    (u = Jd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Wl(l)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = $l(t, a, l)),
      e !== null && (al(e, t, l), wa(e, t, l));
  }
  function Wd(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function kc(t, l) {
    Wd(t, l), (t = t.alternate) && Wd(t, l);
  }
  function $d(t) {
    if (t.tag === 13) {
      var l = We(t, 67108864);
      l !== null && al(l, t, 67108864), kc(t, 67108864);
    }
  }
  var Nn = !0;
  function Zh(t, l, e, a) {
    var u = T.T;
    T.T = null;
    var n = q.p;
    try {
      (q.p = 2), Wc(t, l, e, a);
    } finally {
      (q.p = n), (T.T = u);
    }
  }
  function Ch(t, l, e, a) {
    var u = T.T;
    T.T = null;
    var n = q.p;
    try {
      (q.p = 8), Wc(t, l, e, a);
    } finally {
      (q.p = n), (T.T = u);
    }
  }
  function Wc(t, l, e, a) {
    if (Nn) {
      var u = $c(a);
      if (u === null) xc(t, l, a, Hn, e), Fd(t, a);
      else if (Vh(u, t, l, e, a)) a.stopPropagation();
      else if ((Fd(t, a), l & 4 && -1 < Lh.indexOf(t))) {
        for (; u !== null; ) {
          var n = Ye(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = ve(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var o = 1 << (31 - $t(i));
                      (f.entanglements[1] |= o), (i &= ~o);
                    }
                    zl(n), (at & 6) === 0 && ((mn = gl() + 500), fu(0));
                  }
                }
                break;
              case 13:
                (f = We(n, 2)), f !== null && al(f, n, 2), bn(), kc(n, 2);
            }
          if (((n = $c(a)), n === null && xc(t, l, a, Hn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else xc(t, l, a, null, e);
    }
  }
  function $c(t) {
    return (t = li(t)), Ic(t);
  }
  var Hn = null;
  function Ic(t) {
    if (((Hn = null), (t = xe(t)), t !== null)) {
      var l = _(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = U(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return (Hn = t), null;
  }
  function Id(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Or()) {
          case of:
            return 2;
          case df:
            return 8;
          case Au:
          case Ur:
            return 32;
          case rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1,
    se = null,
    oe = null,
    de = null,
    vu = new Map(),
    bu = new Map(),
    re = [],
    Lh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Fd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        se = null;
        break;
      case "dragenter":
      case "dragleave":
        oe = null;
        break;
      case "mouseover":
      case "mouseout":
        de = null;
        break;
      case "pointerover":
      case "pointerout":
        vu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bu.delete(l.pointerId);
    }
  }
  function Su(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = Ye(l)), l !== null && $d(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t);
  }
  function Vh(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return (se = Su(se, t, l, e, a, u)), !0;
      case "dragenter":
        return (oe = Su(oe, t, l, e, a, u)), !0;
      case "mouseover":
        return (de = Su(de, t, l, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return vu.set(n, Su(vu.get(n) || null, t, l, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), bu.set(n, Su(bu.get(n) || null, t, l, e, a, u)), !0
        );
    }
    return !1;
  }
  function Pd(t) {
    var l = xe(t.target);
    if (l !== null) {
      var e = _(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = U(e)), l !== null)) {
            (t.blockedOn = l),
              Yr(t.priority, function () {
                if (e.tag === 13) {
                  var a = el();
                  a = Vn(a);
                  var u = We(e, a);
                  u !== null && al(u, e, a), kc(e, a);
                }
              });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = $c(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        (ti = a), e.target.dispatchEvent(a), (ti = null);
      } else return (l = Ye(e)), l !== null && $d(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function tr(t, l, e) {
    qn(t) && e.delete(l);
  }
  function wh() {
    (Fc = !1),
      se !== null && qn(se) && (se = null),
      oe !== null && qn(oe) && (oe = null),
      de !== null && qn(de) && (de = null),
      vu.forEach(tr),
      bu.forEach(tr);
  }
  function jn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      Fc ||
        ((Fc = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, wh)));
  }
  var Bn = null;
  function lr(t) {
    Bn !== t &&
      ((Bn = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Bn === t && (Bn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            u = t[l + 2];
          if (typeof a != "function") {
            if (Ic(a || e) === null) continue;
            break;
          }
          var n = Ye(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            Ii(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function gu(t) {
    function l(o) {
      return jn(o, t);
    }
    se !== null && jn(se, t),
      oe !== null && jn(oe, t),
      de !== null && jn(de, t),
      vu.forEach(l),
      bu.forEach(l);
    for (var e = 0; e < re.length; e++) {
      var a = re[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < re.length && ((e = re[0]), e.blockedOn === null); )
      Pd(e), e.blockedOn === null && re.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Qt] || null;
        if (typeof n == "function") i || lr(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Qt] || null))) f = i.formAction;
            else if (Ic(u) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            lr(e);
        }
      }
  }
  function Pc(t) {
    this._internalRoot = t;
  }
  (xn.prototype.render = Pc.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(s(409));
      var e = l.current,
        a = el();
      kd(e, a, t, l, null, null);
    }),
    (xn.prototype.unmount = Pc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          kd(t.current, 2, null, t, null, null), bn(), (l[Be] = null);
        }
      });
  function xn(t) {
    this._internalRoot = t;
  }
  xn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = bf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < re.length && l !== 0 && l < re[e].priority; e++);
      re.splice(e, 0, t), e === 0 && Pd(t);
    }
  };
  var er = S.version;
  if (er !== "19.1.0") throw Error(s(527, er, "19.1.0"));
  q.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = D(l)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Kh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yn.isDisabled && Yn.supportsFiber)
      try {
        (Aa = Yn.inject(Kh)), (Wt = Yn);
      } catch {}
  }
  return (
    (Tu.createRoot = function (t, l) {
      if (!E(t)) throw Error(s(299));
      var e = !1,
        a = "",
        u = So,
        n = go,
        i = po,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (f = l.unstable_transitionCallbacks)),
        (l = Kd(t, 1, !1, null, null, e, a, u, n, i, f, null)),
        (t[Be] = l.current),
        Bc(t),
        new Pc(l)
      );
    }),
    (Tu.hydrateRoot = function (t, l, e) {
      if (!E(t)) throw Error(s(299));
      var a = !1,
        u = "",
        n = So,
        i = go,
        f = po,
        o = null,
        m = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (o = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (m = e.formState)),
        (l = Kd(t, 1, !0, l, e ?? null, a, u, n, i, f, o, m)),
        (l.context = Jd(null)),
        (e = l.current),
        (a = el()),
        (a = Vn(a)),
        (u = Wl(a)),
        (u.callback = null),
        $l(e, u, a),
        (e = a),
        (l.current.lanes = e),
        Ma(l, e),
        zl(l),
        (t[Be] = l.current),
        Bc(t),
        new xn(l)
      );
    }),
    (Tu.version = "19.1.0"),
    Tu
  );
}
var rr;
function ey() {
  if (rr) return ef.exports;
  rr = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (S) {
        console.error(S);
      }
  }
  return c(), (ef.exports = ly()), ef.exports;
}
var ay = ey();
const Ar = Ta.createContext(),
  uy = ({ children: c }) => {
    const [S, z] = Ta.useState({ message: "", type: "info", visible: !1 }),
      s = (E, _ = "info") => {
        z({ message: E, type: _, visible: !0 }),
          setTimeout(() => {
            z({ message: "", type: "info", visible: !1 });
          }, 3e3);
      };
    return w.jsxs(Ar.Provider, {
      value: { showAlert: s },
      children: [
        c,
        S.visible &&
          w.jsx("div", {
            className: `alert-banner ${S.type}`,
            children: S.message,
          }),
      ],
    });
  },
  ny = () => Ta.useContext(Ar),
  Gn = "./assets/1-D1hEkndi.png",
  iy = "./assets/3-D0q5fVfW.png",
  hr = "./assets/an-b_N5plt4.png",
  cy = "./assets/cft-rO9Z8ZfA.gif";
function cf(c, S, z, s) {
  function E(_) {
    return _ instanceof z
      ? _
      : new z(function (U) {
          U(_);
        });
  }
  return new (z || (z = Promise))(function (_, U) {
    function N(R) {
      try {
        g(s.next(R));
      } catch (Q) {
        U(Q);
      }
    }
    function D(R) {
      try {
        g(s.throw(R));
      } catch (Q) {
        U(Q);
      }
    }
    function g(R) {
      R.done ? _(R.value) : E(R.value).then(N, D);
    }
    g((s = s.apply(c, [])).next());
  });
}
function fy(c, S, z, s) {
  if (typeof S == "function" ? c !== S || !s : !S.has(c))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return z === "m" ? s : z === "a" ? s.call(c) : s ? s.value : S.get(c);
}
class I extends Error {
  constructor(S, z = 0, s = "", E = "") {
    super(S),
      (this.name = "AppwriteException"),
      (this.message = S),
      (this.code = z),
      (this.type = s),
      (this.response = E);
  }
}
class Cl {
  constructor() {
    (this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: "",
    }),
      (this.headers = {
        "x-sdk-name": "Web",
        "x-sdk-platform": "client",
        "x-sdk-language": "web",
        "x-sdk-version": "17.0.2",
        "X-Appwrite-Response-Format": "1.6.0",
      }),
      (this.realtime = {
        socket: void 0,
        timeout: void 0,
        heartbeat: void 0,
        url: "",
        channels: new Set(),
        subscriptions: new Map(),
        subscriptionsCounter: 0,
        reconnect: !0,
        reconnectAttempts: 0,
        lastMessage: void 0,
        connect: () => {
          clearTimeout(this.realtime.timeout),
            (this.realtime.timeout =
              window == null
                ? void 0
                : window.setTimeout(() => {
                    this.realtime.createSocket();
                  }, 50));
        },
        getTimeout: () => {
          switch (!0) {
            case this.realtime.reconnectAttempts < 5:
              return 1e3;
            case this.realtime.reconnectAttempts < 15:
              return 5e3;
            case this.realtime.reconnectAttempts < 100:
              return 1e4;
            default:
              return 6e4;
          }
        },
        createHeartbeat: () => {
          this.realtime.heartbeat && clearTimeout(this.realtime.heartbeat),
            (this.realtime.heartbeat =
              window == null
                ? void 0
                : window.setInterval(() => {
                    var S;
                    (S = this.realtime.socket) === null ||
                      S === void 0 ||
                      S.send(JSON.stringify({ type: "ping" }));
                  }, 2e4));
        },
        createSocket: () => {
          var S, z, s;
          if (this.realtime.channels.size < 1) {
            (this.realtime.reconnect = !1),
              (S = this.realtime.socket) === null || S === void 0 || S.close();
            return;
          }
          const E = new URLSearchParams();
          E.set("project", this.config.project),
            this.realtime.channels.forEach((U) => {
              E.append("channels[]", U);
            });
          const _ = this.config.endpointRealtime + "/realtime?" + E.toString();
          (_ !== this.realtime.url ||
            !this.realtime.socket ||
            ((z = this.realtime.socket) === null || z === void 0
              ? void 0
              : z.readyState) > WebSocket.OPEN) &&
            (this.realtime.socket &&
              ((s = this.realtime.socket) === null || s === void 0
                ? void 0
                : s.readyState) < WebSocket.CLOSING &&
              ((this.realtime.reconnect = !1), this.realtime.socket.close()),
            (this.realtime.url = _),
            (this.realtime.socket = new WebSocket(_)),
            this.realtime.socket.addEventListener(
              "message",
              this.realtime.onMessage
            ),
            this.realtime.socket.addEventListener("open", (U) => {
              (this.realtime.reconnectAttempts = 0),
                this.realtime.createHeartbeat();
            }),
            this.realtime.socket.addEventListener("close", (U) => {
              var N, D, g;
              if (
                !this.realtime.reconnect ||
                (((D =
                  (N = this.realtime) === null || N === void 0
                    ? void 0
                    : N.lastMessage) === null || D === void 0
                  ? void 0
                  : D.type) === "error" &&
                  ((g = this.realtime) === null || g === void 0
                    ? void 0
                    : g.lastMessage.data
                  ).code === 1008)
              ) {
                this.realtime.reconnect = !0;
                return;
              }
              const R = this.realtime.getTimeout();
              console.error(
                `Realtime got disconnected. Reconnect will be attempted in ${
                  R / 1e3
                } seconds.`,
                U.reason
              ),
                setTimeout(() => {
                  this.realtime.reconnectAttempts++,
                    this.realtime.createSocket();
                }, R);
            }));
        },
        onMessage: (S) => {
          var z, s;
          try {
            const E = JSON.parse(S.data);
            switch (((this.realtime.lastMessage = E), E.type)) {
              case "connected":
                const _ = JSON.parse(
                    (z = window.localStorage.getItem("cookieFallback")) !==
                      null && z !== void 0
                      ? z
                      : "{}"
                  ),
                  U =
                    _ == null ? void 0 : _[`a_session_${this.config.project}`],
                  N = E.data;
                U &&
                  !N.user &&
                  ((s = this.realtime.socket) === null ||
                    s === void 0 ||
                    s.send(
                      JSON.stringify({
                        type: "authentication",
                        data: { session: U },
                      })
                    ));
                break;
              case "event":
                let D = E.data;
                if (D != null && D.channels) {
                  if (!D.channels.some((R) => this.realtime.channels.has(R)))
                    return;
                  this.realtime.subscriptions.forEach((R) => {
                    D.channels.some((Q) => R.channels.includes(Q)) &&
                      setTimeout(() => R.callback(D));
                  });
                }
                break;
              case "pong":
                break;
              case "error":
                throw E.data;
              default:
                break;
            }
          } catch (E) {
            console.error(E);
          }
        },
        cleanUp: (S) => {
          this.realtime.channels.forEach((z) => {
            S.includes(z) &&
              (Array.from(this.realtime.subscriptions).some(([E, _]) =>
                _.channels.includes(z)
              ) ||
                this.realtime.channels.delete(z));
          });
        },
      });
  }
  setEndpoint(S) {
    if (!S.startsWith("http://") && !S.startsWith("https://"))
      throw new I("Invalid endpoint URL: " + S);
    return (
      (this.config.endpoint = S),
      (this.config.endpointRealtime = S.replace("https://", "wss://").replace(
        "http://",
        "ws://"
      )),
      this
    );
  }
  setEndpointRealtime(S) {
    if (!S.startsWith("ws://") && !S.startsWith("wss://"))
      throw new I("Invalid realtime endpoint URL: " + S);
    return (this.config.endpointRealtime = S), this;
  }
  setProject(S) {
    return (
      (this.headers["X-Appwrite-Project"] = S), (this.config.project = S), this
    );
  }
  setJWT(S) {
    return (this.headers["X-Appwrite-JWT"] = S), (this.config.jwt = S), this;
  }
  setLocale(S) {
    return (
      (this.headers["X-Appwrite-Locale"] = S), (this.config.locale = S), this
    );
  }
  setSession(S) {
    return (
      (this.headers["X-Appwrite-Session"] = S), (this.config.session = S), this
    );
  }
  subscribe(S, z) {
    let s = typeof S == "string" ? [S] : S;
    s.forEach((_) => this.realtime.channels.add(_));
    const E = this.realtime.subscriptionsCounter++;
    return (
      this.realtime.subscriptions.set(E, { channels: s, callback: z }),
      this.realtime.connect(),
      () => {
        this.realtime.subscriptions.delete(E),
          this.realtime.cleanUp(s),
          this.realtime.connect();
      }
    );
  }
  prepareRequest(S, z, s = {}, E = {}) {
    if (
      ((S = S.toUpperCase()),
      (s = Object.assign({}, this.headers, s)),
      typeof window < "u" && window.localStorage)
    ) {
      const U = window.localStorage.getItem("cookieFallback");
      U && (s["X-Fallback-Cookies"] = U);
    }
    let _ = { method: S, headers: s, credentials: "include" };
    if (S === "GET")
      for (const [U, N] of Object.entries(Cl.flatten(E)))
        z.searchParams.append(U, N);
    else
      switch (s["content-type"]) {
        case "application/json":
          _.body = JSON.stringify(E);
          break;
        case "multipart/form-data":
          const U = new FormData();
          for (const [N, D] of Object.entries(E))
            if (D instanceof File) U.append(N, D, D.name);
            else if (Array.isArray(D)) for (const g of D) U.append(`${N}[]`, g);
            else U.append(N, D);
          (_.body = U), delete s["content-type"];
          break;
      }
    return { uri: z.toString(), options: _ };
  }
  chunkedUpload(S, z, s = {}, E = {}, _) {
    return cf(this, void 0, void 0, function* () {
      const U = Object.values(E).find((g) => g instanceof File);
      if (!U) throw new Error("File not found in payload");
      if (U.size <= Cl.CHUNK_SIZE) return yield this.call(S, z, s, E);
      let N = 0,
        D = null;
      for (; N < U.size; ) {
        let g = N + Cl.CHUNK_SIZE;
        g >= U.size && (g = U.size),
          (s["content-range"] = `bytes ${N}-${g - 1}/${U.size}`);
        const R = U.slice(N, g);
        let Q = Object.assign(Object.assign({}, E), {
          file: new File([R], U.name),
        });
        (D = yield this.call(S, z, s, Q)),
          _ &&
            typeof _ == "function" &&
            _({
              $id: D.$id,
              progress: Math.round((g / U.size) * 100),
              sizeUploaded: g,
              chunksTotal: Math.ceil(U.size / Cl.CHUNK_SIZE),
              chunksUploaded: Math.ceil(g / Cl.CHUNK_SIZE),
            }),
          D && D.$id && (s["x-appwrite-id"] = D.$id),
          (N = g);
      }
      return D;
    });
  }
  ping() {
    return cf(this, void 0, void 0, function* () {
      return this.call("GET", new URL(this.config.endpoint + "/ping"));
    });
  }
  call(S, z, s = {}, E = {}, _ = "json") {
    var U, N;
    return cf(this, void 0, void 0, function* () {
      const { uri: D, options: g } = this.prepareRequest(S, z, s, E);
      let R = null;
      const Q = yield fetch(D, g),
        F = Q.headers.get("x-appwrite-warning");
      if (
        (F && F.split(";").forEach((yt) => console.warn("Warning: " + yt)),
        !((U = Q.headers.get("content-type")) === null || U === void 0) &&
        U.includes("application/json")
          ? (R = yield Q.json())
          : _ === "arrayBuffer"
          ? (R = yield Q.arrayBuffer())
          : (R = { message: yield Q.text() }),
        400 <= Q.status)
      ) {
        let yt = "";
        throw (
          ((!((N = Q.headers.get("content-type")) === null || N === void 0) &&
            N.includes("application/json")) ||
          _ === "arrayBuffer"
            ? (yt = JSON.stringify(R))
            : (yt = R == null ? void 0 : R.message),
          new I(
            R == null ? void 0 : R.message,
            Q.status,
            R == null ? void 0 : R.type,
            yt
          ))
        );
      }
      const St = Q.headers.get("X-Fallback-Cookies");
      return (
        typeof window < "u" &&
          window.localStorage &&
          St &&
          (window.console.warn(
            "Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."
          ),
          window.localStorage.setItem("cookieFallback", St)),
        R
      );
    });
  }
  static flatten(S, z = "") {
    let s = {};
    for (const [E, _] of Object.entries(S)) {
      let U = z ? z + "[" + E + "]" : E;
      Array.isArray(_)
        ? (s = Object.assign(Object.assign({}, s), Cl.flatten(_, U)))
        : (s[U] = _);
    }
    return s;
  }
}
Cl.CHUNK_SIZE = 1024 * 1024 * 5;
class pa {
  constructor(S) {
    this.client = S;
  }
  static flatten(S, z = "") {
    let s = {};
    for (const [E, _] of Object.entries(S)) {
      let U = z ? z + "[" + E + "]" : E;
      Array.isArray(_)
        ? (s = Object.assign(Object.assign({}, s), pa.flatten(_, U)))
        : (s[U] = _);
    }
    return s;
  }
}
pa.CHUNK_SIZE = 5 * 1024 * 1024;
class sy {
  constructor(S) {
    this.client = S;
  }
  listDocuments(S, z, s) {
    if (typeof S > "u") throw new I('Missing required parameter: "databaseId"');
    if (typeof z > "u")
      throw new I('Missing required parameter: "collectionId"');
    const E = "/databases/{databaseId}/collections/{collectionId}/documents"
        .replace("{databaseId}", S)
        .replace("{collectionId}", z),
      _ = {};
    typeof s < "u" && (_.queries = s);
    const U = new URL(this.client.config.endpoint + E),
      N = {};
    return this.client.call("get", U, N, _);
  }
  createDocument(S, z, s, E, _) {
    if (typeof S > "u") throw new I('Missing required parameter: "databaseId"');
    if (typeof z > "u")
      throw new I('Missing required parameter: "collectionId"');
    if (typeof s > "u") throw new I('Missing required parameter: "documentId"');
    if (typeof E > "u") throw new I('Missing required parameter: "data"');
    const U = "/databases/{databaseId}/collections/{collectionId}/documents"
        .replace("{databaseId}", S)
        .replace("{collectionId}", z),
      N = {};
    typeof s < "u" && (N.documentId = s),
      typeof E < "u" && (N.data = E),
      typeof _ < "u" && (N.permissions = _);
    const D = new URL(this.client.config.endpoint + U),
      g = { "content-type": "application/json" };
    return this.client.call("post", D, g, N);
  }
  getDocument(S, z, s, E) {
    if (typeof S > "u") throw new I('Missing required parameter: "databaseId"');
    if (typeof z > "u")
      throw new I('Missing required parameter: "collectionId"');
    if (typeof s > "u") throw new I('Missing required parameter: "documentId"');
    const _ =
        "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
          .replace("{databaseId}", S)
          .replace("{collectionId}", z)
          .replace("{documentId}", s),
      U = {};
    typeof E < "u" && (U.queries = E);
    const N = new URL(this.client.config.endpoint + _),
      D = {};
    return this.client.call("get", N, D, U);
  }
  updateDocument(S, z, s, E, _) {
    if (typeof S > "u") throw new I('Missing required parameter: "databaseId"');
    if (typeof z > "u")
      throw new I('Missing required parameter: "collectionId"');
    if (typeof s > "u") throw new I('Missing required parameter: "documentId"');
    const U =
        "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
          .replace("{databaseId}", S)
          .replace("{collectionId}", z)
          .replace("{documentId}", s),
      N = {};
    typeof E < "u" && (N.data = E), typeof _ < "u" && (N.permissions = _);
    const D = new URL(this.client.config.endpoint + U),
      g = { "content-type": "application/json" };
    return this.client.call("patch", D, g, N);
  }
  deleteDocument(S, z, s) {
    if (typeof S > "u") throw new I('Missing required parameter: "databaseId"');
    if (typeof z > "u")
      throw new I('Missing required parameter: "collectionId"');
    if (typeof s > "u") throw new I('Missing required parameter: "documentId"');
    const E =
        "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
          .replace("{databaseId}", S)
          .replace("{collectionId}", z)
          .replace("{documentId}", s),
      _ = {},
      U = new URL(this.client.config.endpoint + E),
      N = { "content-type": "application/json" };
    return this.client.call("delete", U, N, _);
  }
}
class oy {
  constructor(S) {
    this.client = S;
  }
  listFiles(S, z, s) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    const E = "/storage/buckets/{bucketId}/files".replace("{bucketId}", S),
      _ = {};
    typeof z < "u" && (_.queries = z), typeof s < "u" && (_.search = s);
    const U = new URL(this.client.config.endpoint + E),
      N = {};
    return this.client.call("get", U, N, _);
  }
  createFile(S, z, s, E, _ = (U) => {}) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    if (typeof s > "u") throw new I('Missing required parameter: "file"');
    const U = "/storage/buckets/{bucketId}/files".replace("{bucketId}", S),
      N = {};
    typeof z < "u" && (N.fileId = z),
      typeof s < "u" && (N.file = s),
      typeof E < "u" && (N.permissions = E);
    const D = new URL(this.client.config.endpoint + U),
      g = { "content-type": "multipart/form-data" };
    return this.client.chunkedUpload("post", D, g, N, _);
  }
  getFile(S, z) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    const s = "/storage/buckets/{bucketId}/files/{fileId}"
        .replace("{bucketId}", S)
        .replace("{fileId}", z),
      E = {},
      _ = new URL(this.client.config.endpoint + s),
      U = {};
    return this.client.call("get", _, U, E);
  }
  updateFile(S, z, s, E) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    const _ = "/storage/buckets/{bucketId}/files/{fileId}"
        .replace("{bucketId}", S)
        .replace("{fileId}", z),
      U = {};
    typeof s < "u" && (U.name = s), typeof E < "u" && (U.permissions = E);
    const N = new URL(this.client.config.endpoint + _),
      D = { "content-type": "application/json" };
    return this.client.call("put", N, D, U);
  }
  deleteFile(S, z) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    const s = "/storage/buckets/{bucketId}/files/{fileId}"
        .replace("{bucketId}", S)
        .replace("{fileId}", z),
      E = {},
      _ = new URL(this.client.config.endpoint + s),
      U = { "content-type": "application/json" };
    return this.client.call("delete", _, U, E);
  }
  getFileDownload(S, z) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    const s = "/storage/buckets/{bucketId}/files/{fileId}/download"
        .replace("{bucketId}", S)
        .replace("{fileId}", z),
      E = {},
      _ = new URL(this.client.config.endpoint + s);
    E.project = this.client.config.project;
    for (const [U, N] of Object.entries(pa.flatten(E)))
      _.searchParams.append(U, N);
    return _.toString();
  }
  getFilePreview(S, z, s, E, _, U, N, D, g, R, Q, F, St) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    const yt = "/storage/buckets/{bucketId}/files/{fileId}/preview"
        .replace("{bucketId}", S)
        .replace("{fileId}", z),
      dt = {};
    typeof s < "u" && (dt.width = s),
      typeof E < "u" && (dt.height = E),
      typeof _ < "u" && (dt.gravity = _),
      typeof U < "u" && (dt.quality = U),
      typeof N < "u" && (dt.borderWidth = N),
      typeof D < "u" && (dt.borderColor = D),
      typeof g < "u" && (dt.borderRadius = g),
      typeof R < "u" && (dt.opacity = R),
      typeof Q < "u" && (dt.rotation = Q),
      typeof F < "u" && (dt.background = F),
      typeof St < "u" && (dt.output = St);
    const Ut = new URL(this.client.config.endpoint + yt);
    dt.project = this.client.config.project;
    for (const [Ml, hl] of Object.entries(pa.flatten(dt)))
      Ut.searchParams.append(Ml, hl);
    return Ut.toString();
  }
  getFileView(S, z) {
    if (typeof S > "u") throw new I('Missing required parameter: "bucketId"');
    if (typeof z > "u") throw new I('Missing required parameter: "fileId"');
    const s = "/storage/buckets/{bucketId}/files/{fileId}/view"
        .replace("{bucketId}", S)
        .replace("{fileId}", z),
      E = {},
      _ = new URL(this.client.config.endpoint + s);
    E.project = this.client.config.project;
    for (const [U, N] of Object.entries(pa.flatten(E)))
      _.searchParams.append(U, N);
    return _.toString();
  }
}
var zr, Mr;
class Ea {
  static custom(S) {
    return S;
  }
  static unique(S = 7) {
    const z = fy(Ea, zr, "m", Mr).call(Ea);
    let s = "";
    for (let E = 0; E < S; E++) {
      const _ = Math.floor(Math.random() * 16).toString(16);
      s += _;
    }
    return z + s;
  }
}
(zr = Ea),
  (Mr = function () {
    const S = new Date(),
      z = Math.floor(S.getTime() / 1e3),
      s = S.getMilliseconds();
    return z.toString(16) + s.toString(16).padStart(5, "0");
  });
var yr;
(function (c) {
  c.Totp = "totp";
})(yr || (yr = {}));
var mr;
(function (c) {
  (c.Email = "email"),
    (c.Phone = "phone"),
    (c.Totp = "totp"),
    (c.Recoverycode = "recoverycode");
})(mr || (mr = {}));
var vr;
(function (c) {
  (c.Amazon = "amazon"),
    (c.Apple = "apple"),
    (c.Auth0 = "auth0"),
    (c.Authentik = "authentik"),
    (c.Autodesk = "autodesk"),
    (c.Bitbucket = "bitbucket"),
    (c.Bitly = "bitly"),
    (c.Box = "box"),
    (c.Dailymotion = "dailymotion"),
    (c.Discord = "discord"),
    (c.Disqus = "disqus"),
    (c.Dropbox = "dropbox"),
    (c.Etsy = "etsy"),
    (c.Facebook = "facebook"),
    (c.Figma = "figma"),
    (c.Github = "github"),
    (c.Gitlab = "gitlab"),
    (c.Google = "google"),
    (c.Linkedin = "linkedin"),
    (c.Microsoft = "microsoft"),
    (c.Notion = "notion"),
    (c.Oidc = "oidc"),
    (c.Okta = "okta"),
    (c.Paypal = "paypal"),
    (c.PaypalSandbox = "paypalSandbox"),
    (c.Podio = "podio"),
    (c.Salesforce = "salesforce"),
    (c.Slack = "slack"),
    (c.Spotify = "spotify"),
    (c.Stripe = "stripe"),
    (c.Tradeshift = "tradeshift"),
    (c.TradeshiftBox = "tradeshiftBox"),
    (c.Twitch = "twitch"),
    (c.Wordpress = "wordpress"),
    (c.Yahoo = "yahoo"),
    (c.Yammer = "yammer"),
    (c.Yandex = "yandex"),
    (c.Zoho = "zoho"),
    (c.Zoom = "zoom"),
    (c.Mock = "mock");
})(vr || (vr = {}));
var br;
(function (c) {
  (c.AvantBrowser = "aa"),
    (c.AndroidWebViewBeta = "an"),
    (c.GoogleChrome = "ch"),
    (c.GoogleChromeIOS = "ci"),
    (c.GoogleChromeMobile = "cm"),
    (c.Chromium = "cr"),
    (c.MozillaFirefox = "ff"),
    (c.Safari = "sf"),
    (c.MobileSafari = "mf"),
    (c.MicrosoftEdge = "ps"),
    (c.MicrosoftEdgeIOS = "oi"),
    (c.OperaMini = "om"),
    (c.Opera = "op"),
    (c.OperaNext = "on");
})(br || (br = {}));
var Sr;
(function (c) {
  (c.AmericanExpress = "amex"),
    (c.Argencard = "argencard"),
    (c.Cabal = "cabal"),
    (c.Cencosud = "cencosud"),
    (c.DinersClub = "diners"),
    (c.Discover = "discover"),
    (c.Elo = "elo"),
    (c.Hipercard = "hipercard"),
    (c.JCB = "jcb"),
    (c.Mastercard = "mastercard"),
    (c.Naranja = "naranja"),
    (c.TarjetaShopping = "targeta-shopping"),
    (c.UnionChinaPay = "union-china-pay"),
    (c.Visa = "visa"),
    (c.MIR = "mir"),
    (c.Maestro = "maestro"),
    (c.Rupay = "rupay");
})(Sr || (Sr = {}));
var gr;
(function (c) {
  (c.Afghanistan = "af"),
    (c.Angola = "ao"),
    (c.Albania = "al"),
    (c.Andorra = "ad"),
    (c.UnitedArabEmirates = "ae"),
    (c.Argentina = "ar"),
    (c.Armenia = "am"),
    (c.AntiguaAndBarbuda = "ag"),
    (c.Australia = "au"),
    (c.Austria = "at"),
    (c.Azerbaijan = "az"),
    (c.Burundi = "bi"),
    (c.Belgium = "be"),
    (c.Benin = "bj"),
    (c.BurkinaFaso = "bf"),
    (c.Bangladesh = "bd"),
    (c.Bulgaria = "bg"),
    (c.Bahrain = "bh"),
    (c.Bahamas = "bs"),
    (c.BosniaAndHerzegovina = "ba"),
    (c.Belarus = "by"),
    (c.Belize = "bz"),
    (c.Bolivia = "bo"),
    (c.Brazil = "br"),
    (c.Barbados = "bb"),
    (c.BruneiDarussalam = "bn"),
    (c.Bhutan = "bt"),
    (c.Botswana = "bw"),
    (c.CentralAfricanRepublic = "cf"),
    (c.Canada = "ca"),
    (c.Switzerland = "ch"),
    (c.Chile = "cl"),
    (c.China = "cn"),
    (c.CoteDIvoire = "ci"),
    (c.Cameroon = "cm"),
    (c.DemocraticRepublicOfTheCongo = "cd"),
    (c.RepublicOfTheCongo = "cg"),
    (c.Colombia = "co"),
    (c.Comoros = "km"),
    (c.CapeVerde = "cv"),
    (c.CostaRica = "cr"),
    (c.Cuba = "cu"),
    (c.Cyprus = "cy"),
    (c.CzechRepublic = "cz"),
    (c.Germany = "de"),
    (c.Djibouti = "dj"),
    (c.Dominica = "dm"),
    (c.Denmark = "dk"),
    (c.DominicanRepublic = "do"),
    (c.Algeria = "dz"),
    (c.Ecuador = "ec"),
    (c.Egypt = "eg"),
    (c.Eritrea = "er"),
    (c.Spain = "es"),
    (c.Estonia = "ee"),
    (c.Ethiopia = "et"),
    (c.Finland = "fi"),
    (c.Fiji = "fj"),
    (c.France = "fr"),
    (c.MicronesiaFederatedStatesOf = "fm"),
    (c.Gabon = "ga"),
    (c.UnitedKingdom = "gb"),
    (c.Georgia = "ge"),
    (c.Ghana = "gh"),
    (c.Guinea = "gn"),
    (c.Gambia = "gm"),
    (c.GuineaBissau = "gw"),
    (c.EquatorialGuinea = "gq"),
    (c.Greece = "gr"),
    (c.Grenada = "gd"),
    (c.Guatemala = "gt"),
    (c.Guyana = "gy"),
    (c.Honduras = "hn"),
    (c.Croatia = "hr"),
    (c.Haiti = "ht"),
    (c.Hungary = "hu"),
    (c.Indonesia = "id"),
    (c.India = "in"),
    (c.Ireland = "ie"),
    (c.IranIslamicRepublicOf = "ir"),
    (c.Iraq = "iq"),
    (c.Iceland = "is"),
    (c.Israel = "il"),
    (c.Italy = "it"),
    (c.Jamaica = "jm"),
    (c.Jordan = "jo"),
    (c.Japan = "jp"),
    (c.Kazakhstan = "kz"),
    (c.Kenya = "ke"),
    (c.Kyrgyzstan = "kg"),
    (c.Cambodia = "kh"),
    (c.Kiribati = "ki"),
    (c.SaintKittsAndNevis = "kn"),
    (c.SouthKorea = "kr"),
    (c.Kuwait = "kw"),
    (c.LaoPeopleSDemocraticRepublic = "la"),
    (c.Lebanon = "lb"),
    (c.Liberia = "lr"),
    (c.Libya = "ly"),
    (c.SaintLucia = "lc"),
    (c.Liechtenstein = "li"),
    (c.SriLanka = "lk"),
    (c.Lesotho = "ls"),
    (c.Lithuania = "lt"),
    (c.Luxembourg = "lu"),
    (c.Latvia = "lv"),
    (c.Morocco = "ma"),
    (c.Monaco = "mc"),
    (c.Moldova = "md"),
    (c.Madagascar = "mg"),
    (c.Maldives = "mv"),
    (c.Mexico = "mx"),
    (c.MarshallIslands = "mh"),
    (c.NorthMacedonia = "mk"),
    (c.Mali = "ml"),
    (c.Malta = "mt"),
    (c.Myanmar = "mm"),
    (c.Montenegro = "me"),
    (c.Mongolia = "mn"),
    (c.Mozambique = "mz"),
    (c.Mauritania = "mr"),
    (c.Mauritius = "mu"),
    (c.Malawi = "mw"),
    (c.Malaysia = "my"),
    (c.Namibia = "na"),
    (c.Niger = "ne"),
    (c.Nigeria = "ng"),
    (c.Nicaragua = "ni"),
    (c.Netherlands = "nl"),
    (c.Norway = "no"),
    (c.Nepal = "np"),
    (c.Nauru = "nr"),
    (c.NewZealand = "nz"),
    (c.Oman = "om"),
    (c.Pakistan = "pk"),
    (c.Panama = "pa"),
    (c.Peru = "pe"),
    (c.Philippines = "ph"),
    (c.Palau = "pw"),
    (c.PapuaNewGuinea = "pg"),
    (c.Poland = "pl"),
    (c.FrenchPolynesia = "pf"),
    (c.NorthKorea = "kp"),
    (c.Portugal = "pt"),
    (c.Paraguay = "py"),
    (c.Qatar = "qa"),
    (c.Romania = "ro"),
    (c.Russia = "ru"),
    (c.Rwanda = "rw"),
    (c.SaudiArabia = "sa"),
    (c.Sudan = "sd"),
    (c.Senegal = "sn"),
    (c.Singapore = "sg"),
    (c.SolomonIslands = "sb"),
    (c.SierraLeone = "sl"),
    (c.ElSalvador = "sv"),
    (c.SanMarino = "sm"),
    (c.Somalia = "so"),
    (c.Serbia = "rs"),
    (c.SouthSudan = "ss"),
    (c.SaoTomeAndPrincipe = "st"),
    (c.Suriname = "sr"),
    (c.Slovakia = "sk"),
    (c.Slovenia = "si"),
    (c.Sweden = "se"),
    (c.Eswatini = "sz"),
    (c.Seychelles = "sc"),
    (c.Syria = "sy"),
    (c.Chad = "td"),
    (c.Togo = "tg"),
    (c.Thailand = "th"),
    (c.Tajikistan = "tj"),
    (c.Turkmenistan = "tm"),
    (c.TimorLeste = "tl"),
    (c.Tonga = "to"),
    (c.TrinidadAndTobago = "tt"),
    (c.Tunisia = "tn"),
    (c.Turkey = "tr"),
    (c.Tuvalu = "tv"),
    (c.Tanzania = "tz"),
    (c.Uganda = "ug"),
    (c.Ukraine = "ua"),
    (c.Uruguay = "uy"),
    (c.UnitedStates = "us"),
    (c.Uzbekistan = "uz"),
    (c.VaticanCity = "va"),
    (c.SaintVincentAndTheGrenadines = "vc"),
    (c.Venezuela = "ve"),
    (c.Vietnam = "vn"),
    (c.Vanuatu = "vu"),
    (c.Samoa = "ws"),
    (c.Yemen = "ye"),
    (c.SouthAfrica = "za"),
    (c.Zambia = "zm"),
    (c.Zimbabwe = "zw");
})(gr || (gr = {}));
var pr;
(function (c) {
  (c.GET = "GET"),
    (c.POST = "POST"),
    (c.PUT = "PUT"),
    (c.PATCH = "PATCH"),
    (c.DELETE = "DELETE"),
    (c.OPTIONS = "OPTIONS");
})(pr || (pr = {}));
var Tr;
(function (c) {
  (c.Center = "center"),
    (c.Topleft = "top-left"),
    (c.Top = "top"),
    (c.Topright = "top-right"),
    (c.Left = "left"),
    (c.Right = "right"),
    (c.Bottomleft = "bottom-left"),
    (c.Bottom = "bottom"),
    (c.Bottomright = "bottom-right");
})(Tr || (Tr = {}));
var Er;
(function (c) {
  (c.Jpg = "jpg"),
    (c.Jpeg = "jpeg"),
    (c.Gif = "gif"),
    (c.Png = "png"),
    (c.Webp = "webp"),
    (c.Heic = "heic"),
    (c.Avif = "avif");
})(Er || (Er = {}));
const sf = new Cl();
sf.setEndpoint("https://cloud.appwrite.io/v1").setProject(
  "682ed327001560d520bd"
);
const dy = new sy(sf),
  ry = new oy(sf);
function hy() {
  const { showAlert: c } = ny(),
    [S, z] = Ta.useState(!1),
    [s, E] = Ta.useState({
      name: "",
      relationship: "",
      message: "",
      fileType: "",
      file: "",
    }),
    _ = async () => {
      console.log(s), z(!0);
      try {
        let N = "",
          D = "";
        if (s.file) {
          N = `https://fra.cloud.appwrite.io/v1/storage/buckets/682f70020004004bbfb8/files/${
            (await ry.createFile("682f70020004004bbfb8", Ea.unique(), s.file))
              .$id
          }/view?project=682ed327001560d520bd&mode=admin`;
          const Q = s.file.type;
          Q.startsWith("image")
            ? (D = "image")
            : Q.startsWith("video")
            ? (D = "video")
            : (D = "unknown");
        }
        const g = await dy.createDocument(
          "682ed34900397eda467b",
          "682ed356002745d057e3",
          Ea.unique(),
          {
            name: s.name,
            relationship: s.relationship,
            message: s.message,
            file: N,
            fileType: D,
          }
        );
        console.log("Document created:", g),
          E({ name: "", relationship: "", message: "" }),
          c("Wishes sent successfully!", "success");
      } catch (N) {
        console.error("Error submitting form:", N),
          c("Something went wrong! please try again", "error");
      }
      z(!1);
    },
    U = (N) => {
      const { name: D, value: g, type: R } = N.target;
      E(R === "file" ? { ...s, [D]: N.target.files[0] } : { ...s, [D]: g });
    };
  return w.jsx(w.Fragment, {
    children: w.jsxs("div", {
      className: "body",
      children: [
        w.jsx("img", { src: cy, alt: "", className: "cft" }),
        w.jsx("div", {
          className: "position",
          children: w.jsx("img", { src: hr, alt: "" }),
        }),
        w.jsx("div", {
          className: "butposition",
          children: w.jsx("img", { src: hr, alt: "" }),
        }),
        w.jsxs("div", {
          className: "form",
          children: [
            w.jsxs("div", {
              className: "toptit",
              children: [
                w.jsx("h1", {
                  children: "Celebrate Godswil Badaki Special Day",
                }),
                w.jsx("p", {
                  children:
                    "Share your wishes, memories, or blessing for Godswil Badaki Special day.",
                }),
              ],
            }),
            w.jsxs("form", {
              action: "submit",
              onSubmit: (N) => {
                N.preventDefault(), _();
              },
              children: [
                w.jsxs("div", {
                  className: "item",
                  children: [
                    w.jsx("img", { src: Gn, alt: "" }),
                    w.jsx("label", { htmlFor: "", children: "Name" }),
                    w.jsx("input", {
                      type: "text",
                      placeholder: "Enter Name",
                      name: "name",
                      value: s.name,
                      onChange: U,
                      required: !0,
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "item",
                  children: [
                    w.jsx("img", { src: Gn, alt: "" }),
                    w.jsx("label", { htmlFor: "", children: "Name" }),
                    w.jsx("input", {
                      type: "file",
                      name: "file",
                      accept: ".jpg, .jpeg, .png, .gif, .mp4, .avi, .mov, .wmv",
                      onChange: U,
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "item",
                  children: [
                    w.jsx("img", { src: Gn, alt: "" }),
                    w.jsx("label", { htmlFor: "", children: "Relationship" }),
                    w.jsxs("select", {
                      name: "relationship",
                      id: "",
                      value: s.relationship,
                      onChange: U,
                      required: !0,
                      children: [
                        w.jsx("option", { value: "", children: "Select" }),
                        w.jsx("option", {
                          value: "friend",
                          children: "Friend",
                        }),
                        w.jsx("option", {
                          value: "family",
                          children: "Family",
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "item",
                  children: [
                    w.jsx("img", { src: Gn, alt: "" }),
                    w.jsx("label", { htmlFor: "", children: "Wishes" }),
                    w.jsx("textarea", {
                      id: "",
                      placeholder: "What is on your mind",
                      name: "message",
                      value: s.message,
                      onChange: U,
                      required: !0,
                    }),
                  ],
                }),
                w.jsx("div", {
                  className: "butcon",
                  children: w.jsxs("button", {
                    className: "button",
                    children: [
                      w.jsx("img", { src: iy, alt: "" }),
                      w.jsx("p", { children: S ? "loading..." : "Send" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
ay.createRoot(document.getElementById("root")).render(
  w.jsx(Ta.StrictMode, { children: w.jsx(uy, { children: w.jsx(hy, {}) }) })
);
