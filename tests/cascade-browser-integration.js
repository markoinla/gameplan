/*! For license information please see index.js.LICENSE.txt */
( () => {
    var e = {
        195: (e, n, t) => {
            "use strict";
            var r = t(649)
              , a = t(863);
            function o(e) {
                for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
                    n += "&args[]=" + encodeURIComponent(arguments[t]);
                return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var i = new Set
              , s = {};
            function l(e, n) {
                u(e, n),
                u(e + "Capture", n)
            }
            function u(e, n) {
                for (s[e] = n,
                e = 0; e < n.length; e++)
                    i.add(n[e])
            }
            var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
              , _ = Object.prototype.hasOwnProperty
              , E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , m = {}
              , d = {};
            function f(e, n, t, r, a, o, i) {
                this.acceptsBooleans = 2 === n || 3 === n || 4 === n,
                this.attributeName = r,
                this.attributeNamespace = a,
                this.mustUseProperty = t,
                this.propertyName = e,
                this.type = n,
                this.sanitizeURL = o,
                this.removeEmptyString = i
            }
            var T = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                T[e] = new f(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var n = e[0];
                T[n] = new f(n,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                T[e] = new f(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                T[e] = new f(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                T[e] = new f(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                T[e] = new f(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                T[e] = new f(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                T[e] = new f(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                T[e] = new f(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var p = /[\-:]([a-z])/g;
            function S(e) {
                return e[1].toUpperCase()
            }
            function O(e, n, t, r) {
                var a = T.hasOwnProperty(n) ? T[n] : null;
                (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function(e, n, t, r) {
                    if (null == n || function(e, n, t, r) {
                        if (null !== t && 0 === t.type)
                            return !1;
                        switch (typeof n) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, n, t, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== t)
                        switch (t.type) {
                        case 3:
                            return !n;
                        case 4:
                            return !1 === n;
                        case 5:
                            return isNaN(n);
                        case 6:
                            return isNaN(n) || 1 > n
                        }
                    return !1
                }(n, t, a, r) && (t = null),
                r || null === a ? function(e) {
                    return !!_.call(d, e) || !_.call(m, e) && (E.test(e) ? d[e] = !0 : (m[e] = !0,
                    !1))
                }(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && "" : t : (n = a.attributeName,
                r = a.attributeNamespace,
                null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? "" : "" + t,
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var n = e.replace(p, S);
                T[n] = new f(n,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var n = e.replace(p, S);
                T[n] = new f(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var n = e.replace(p, S);
                T[n] = new f(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                T[e] = new f(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            T.xlinkHref = new f("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                T[e] = new f(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , C = Symbol.for("react.element")
              , A = Symbol.for("react.portal")
              , I = Symbol.for("react.fragment")
              , h = Symbol.for("react.strict_mode")
              , L = Symbol.for("react.profiler")
              , R = Symbol.for("react.provider")
              , g = Symbol.for("react.context")
              , P = Symbol.for("react.forward_ref")
              , D = Symbol.for("react.suspense")
              , M = Symbol.for("react.suspense_list")
              , y = Symbol.for("react.memo")
              , U = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var w = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var b = Symbol.iterator;
            function k(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = b && e[b] || e["@@iterator"]) ? e : null
            }
            var v, F = Object.assign;
            function B(e) {
                if (void 0 === v)
                    try {
                        throw Error()
                    } catch (e) {
                        var n = e.stack.trim().match(/\n( *(at )?)/);
                        v = n && n[1] || ""
                    }
                return "\n" + v + e
            }
            var x = !1;
            function G(e, n) {
                if (!e || x)
                    return "";
                x = !0;
                var t = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (n)
                        if (n = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(n.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(n, [])
                            } catch (e) {
                                var r = e
                            }
                            Reflect.construct(e, [], n)
                        } else {
                            try {
                                n.call()
                            } catch (e) {
                                r = e
                            }
                            e.call(n.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (n) {
                    if (n && r && "string" == typeof n.stack) {
                        for (var a = n.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, s = o.length - 1; 1 <= i && 0 <= s && a[i] !== o[s]; )
                            s--;
                        for (; 1 <= i && 0 <= s; i--,
                        s--)
                            if (a[i] !== o[s]) {
                                if (1 !== i || 1 !== s)
                                    do {
                                        if (i--,
                                        0 > --s || a[i] !== o[s]) {
                                            var l = "\n" + a[i].replace(" at new ", " at ");
                                            return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                            l
                                        }
                                    } while (1 <= i && 0 <= s);
                                break
                            }
                    }
                } finally {
                    x = !1,
                    Error.prepareStackTrace = t
                }
                return (e = e ? e.displayName || e.name : "") ? B(e) : ""
            }
            function H(e) {
                switch (e.tag) {
                case 5:
                    return B(e.type);
                case 16:
                    return B("Lazy");
                case 13:
                    return B("Suspense");
                case 19:
                    return B("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return G(e.type, !1);
                case 11:
                    return G(e.type.render, !1);
                case 1:
                    return G(e.type, !0);
                default:
                    return ""
                }
            }
            function J(e) {
                if (null == e)
                    return null;
                if ("function" == typeof e)
                    return e.displayName || e.name || null;
                if ("string" == typeof e)
                    return e;
                switch (e) {
                case I:
                    return "Fragment";
                case A:
                    return "Portal";
                case L:
                    return "Profiler";
                case h:
                    return "StrictMode";
                case D:
                    return "Suspense";
                case M:
                    return "SuspenseList"
                }
                if ("object" == typeof e)
                    switch (e.$$typeof) {
                    case g:
                        return (e.displayName || "Context") + ".Consumer";
                    case R:
                        return (e._context.displayName || "Context") + ".Provider";
                    case P:
                        var n = e.render;
                        return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case y:
                        return null !== (n = e.displayName || null) ? n : J(e.type) || "Memo";
                    case U:
                        n = e._payload,
                        e = e._init;
                        try {
                            return J(e(n))
                        } catch (e) {}
                    }
                return null
            }
            function V(e) {
                var n = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (n.displayName || "Context") + ".Consumer";
                case 10:
                    return (n._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = n.render).displayName || e.name || "",
                    n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return n;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return J(n);
                case 8:
                    return n === h ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" == typeof n)
                        return n.displayName || n.name || null;
                    if ("string" == typeof n)
                        return n
                }
                return null
            }
            function X(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function W(e) {
                var n = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n)
            }
            function K(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var n = W(e) ? "checked" : "value"
                      , t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
                      , r = "" + e[n];
                    if (!e.hasOwnProperty(n) && void 0 !== t && "function" == typeof t.get && "function" == typeof t.set) {
                        var a = t.get
                          , o = t.set;
                        return Object.defineProperty(e, n, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                o.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, n, {
                            enumerable: t.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[n]
                            }
                        }
                    }
                }(e))
            }
            function Y(e) {
                if (!e)
                    return !1;
                var n = e._valueTracker;
                if (!n)
                    return !0;
                var t = n.getValue()
                  , r = "";
                return e && (r = W(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== t && (n.setValue(e),
                !0)
            }
            function q(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (n) {
                    return e.body
                }
            }
            function z(e, n) {
                var t = n.checked;
                return F({}, n, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != t ? t : e._wrapperState.initialChecked
                })
            }
            function j(e, n) {
                var t = null == n.defaultValue ? "" : n.defaultValue
                  , r = null != n.checked ? n.checked : n.defaultChecked;
                t = X(null != n.value ? n.value : t),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: t,
                    controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
                }
            }
            function $(e, n) {
                null != (n = n.checked) && O(e, "checked", n, !1)
            }
            function Q(e, n) {
                $(e, n);
                var t = X(n.value)
                  , r = n.type;
                if (null != t)
                    "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, X(n.defaultValue)),
                null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked)
            }
            function Z(e, n, t) {
                if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
                    var r = n.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value))
                        return;
                    n = "" + e._wrapperState.initialValue,
                    t || n === e.value || (e.value = n),
                    e.defaultValue = n
                }
                "" !== (t = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== t && (e.name = t)
            }
            function ee(e, n, t) {
                "number" === n && q(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
            }
            var ne = Array.isArray;
            function te(e, n, t, r) {
                if (e = e.options,
                n) {
                    n = {};
                    for (var a = 0; a < t.length; a++)
                        n["$" + t[a]] = !0;
                    for (t = 0; t < e.length; t++)
                        a = n.hasOwnProperty("$" + e[t].value),
                        e[t].selected !== a && (e[t].selected = a),
                        a && r && (e[t].defaultSelected = !0)
                } else {
                    for (t = "" + X(t),
                    n = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === t)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== n || e[a].disabled || (n = e[a])
                    }
                    null !== n && (n.selected = !0)
                }
            }
            function re(e, n) {
                if (null != n.dangerouslySetInnerHTML)
                    throw Error(o(91));
                return F({}, n, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function ae(e, n) {
                var t = n.value;
                if (null == t) {
                    if (t = n.children,
                    n = n.defaultValue,
                    null != t) {
                        if (null != n)
                            throw Error(o(92));
                        if (ne(t)) {
                            if (1 < t.length)
                                throw Error(o(93));
                            t = t[0]
                        }
                        n = t
                    }
                    null == n && (n = ""),
                    t = n
                }
                e._wrapperState = {
                    initialValue: X(t)
                }
            }
            function oe(e, n) {
                var t = X(n.value)
                  , r = X(n.defaultValue);
                null != t && ((t = "" + t) !== e.value && (e.value = t),
                null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
                null != r && (e.defaultValue = "" + r)
            }
            function ie(e) {
                var n = e.textContent;
                n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n)
            }
            function se(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function le(e, n) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? se(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, _e = (ce = function(e, n) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = n;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = ue.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; n.firstChild; )
                        e.appendChild(n.firstChild)
                }
            }
            ,
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, t, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, n)
                }
                ))
            }
            : ce);
            function Ee(e, n) {
                if (n) {
                    var t = e.firstChild;
                    if (t && t === e.lastChild && 3 === t.nodeType)
                        return void (t.nodeValue = n)
                }
                e.textContent = n
            }
            var me = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , de = ["Webkit", "ms", "Moz", "O"];
            function fe(e, n, t) {
                return null == n || "boolean" == typeof n || "" === n ? "" : t || "number" != typeof n || 0 === n || me.hasOwnProperty(e) && me[e] ? ("" + n).trim() : n + "px"
            }
            function Te(e, n) {
                for (var t in e = e.style,
                n)
                    if (n.hasOwnProperty(t)) {
                        var r = 0 === t.indexOf("--")
                          , a = fe(t, n[t], r);
                        "float" === t && (t = "cssFloat"),
                        r ? e.setProperty(t, a) : e[t] = a
                    }
            }
            Object.keys(me).forEach((function(e) {
                de.forEach((function(n) {
                    n = n + e.charAt(0).toUpperCase() + e.substring(1),
                    me[n] = me[e]
                }
                ))
            }
            ));
            var pe = F({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function Se(e, n) {
                if (n) {
                    if (pe[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
                        throw Error(o(137, e));
                    if (null != n.dangerouslySetInnerHTML) {
                        if (null != n.children)
                            throw Error(o(60));
                        if ("object" != typeof n.dangerouslySetInnerHTML || !("__html"in n.dangerouslySetInnerHTML))
                            throw Error(o(61))
                    }
                    if (null != n.style && "object" != typeof n.style)
                        throw Error(o(62))
                }
            }
            function Oe(e, n) {
                if (-1 === e.indexOf("-"))
                    return "string" == typeof n.is;
                switch (e) {
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
                    return !0
                }
            }
            var Ne = null;
            function Ce(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var Ae = null
              , Ie = null
              , he = null;
            function Le(e) {
                if (e = Oa(e)) {
                    if ("function" != typeof Ae)
                        throw Error(o(280));
                    var n = e.stateNode;
                    n && (n = Ca(n),
                    Ae(e.stateNode, e.type, n))
                }
            }
            function Re(e) {
                Ie ? he ? he.push(e) : he = [e] : Ie = e
            }
            function ge() {
                if (Ie) {
                    var e = Ie
                      , n = he;
                    if (he = Ie = null,
                    Le(e),
                    n)
                        for (e = 0; e < n.length; e++)
                            Le(n[e])
                }
            }
            function Pe(e, n) {
                return e(n)
            }
            function De() {}
            var Me = !1;
            function ye(e, n, t) {
                if (Me)
                    return e(n, t);
                Me = !0;
                try {
                    return Pe(e, n, t)
                } finally {
                    Me = !1,
                    (null !== Ie || null !== he) && (De(),
                    ge())
                }
            }
            function Ue(e, n) {
                var t = e.stateNode;
                if (null === t)
                    return null;
                var r = Ca(t);
                if (null === r)
                    return null;
                t = r[n];
                e: switch (n) {
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
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (t && "function" != typeof t)
                    throw Error(o(231, n, typeof t));
                return t
            }
            var we = !1;
            if (c)
                try {
                    var be = {};
                    Object.defineProperty(be, "passive", {
                        get: function() {
                            we = !0
                        }
                    }),
                    window.addEventListener("test", be, be),
                    window.removeEventListener("test", be, be)
                } catch (ce) {
                    we = !1
                }
            function ke(e, n, t, r, a, o, i, s, l) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    n.apply(t, u)
                } catch (e) {
                    this.onError(e)
                }
            }
            var ve = !1
              , Fe = null
              , Be = !1
              , xe = null
              , Ge = {
                onError: function(e) {
                    ve = !0,
                    Fe = e
                }
            };
            function He(e, n, t, r, a, o, i, s, l) {
                ve = !1,
                Fe = null,
                ke.apply(Ge, arguments)
            }
            function Je(e) {
                var n = e
                  , t = e;
                if (e.alternate)
                    for (; n.return; )
                        n = n.return;
                else {
                    e = n;
                    do {
                        !!(4098 & (n = e).flags) && (t = n.return),
                        e = n.return
                    } while (e)
                }
                return 3 === n.tag ? t : null
            }
            function Ve(e) {
                if (13 === e.tag) {
                    var n = e.memoizedState;
                    if (null === n && null !== (e = e.alternate) && (n = e.memoizedState),
                    null !== n)
                        return n.dehydrated
                }
                return null
            }
            function Xe(e) {
                if (Je(e) !== e)
                    throw Error(o(188))
            }
            function We(e) {
                return null !== (e = function(e) {
                    var n = e.alternate;
                    if (!n) {
                        if (null === (n = Je(e)))
                            throw Error(o(188));
                        return n !== e ? null : e
                    }
                    for (var t = e, r = n; ; ) {
                        var a = t.return;
                        if (null === a)
                            break;
                        var i = a.alternate;
                        if (null === i) {
                            if (null !== (r = a.return)) {
                                t = r;
                                continue
                            }
                            break
                        }
                        if (a.child === i.child) {
                            for (i = a.child; i; ) {
                                if (i === t)
                                    return Xe(a),
                                    e;
                                if (i === r)
                                    return Xe(a),
                                    n;
                                i = i.sibling
                            }
                            throw Error(o(188))
                        }
                        if (t.return !== r.return)
                            t = a,
                            r = i;
                        else {
                            for (var s = !1, l = a.child; l; ) {
                                if (l === t) {
                                    s = !0,
                                    t = a,
                                    r = i;
                                    break
                                }
                                if (l === r) {
                                    s = !0,
                                    r = a,
                                    t = i;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!s) {
                                for (l = i.child; l; ) {
                                    if (l === t) {
                                        s = !0,
                                        t = i,
                                        r = a;
                                        break
                                    }
                                    if (l === r) {
                                        s = !0,
                                        r = i,
                                        t = a;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s)
                                    throw Error(o(189))
                            }
                        }
                        if (t.alternate !== r)
                            throw Error(o(190))
                    }
                    if (3 !== t.tag)
                        throw Error(o(188));
                    return t.stateNode.current === t ? e : n
                }(e)) ? Ke(e) : null
            }
            function Ke(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var n = Ke(e);
                    if (null !== n)
                        return n;
                    e = e.sibling
                }
                return null
            }
            var Ye = a.unstable_scheduleCallback
              , qe = a.unstable_cancelCallback
              , ze = a.unstable_shouldYield
              , je = a.unstable_requestPaint
              , $e = a.unstable_now
              , Qe = a.unstable_getCurrentPriorityLevel
              , Ze = a.unstable_ImmediatePriority
              , en = a.unstable_UserBlockingPriority
              , nn = a.unstable_NormalPriority
              , tn = a.unstable_LowPriority
              , rn = a.unstable_IdlePriority
              , an = null
              , on = null
              , sn = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === (e >>>= 0) ? 32 : 31 - (ln(e) / un | 0) | 0
            }
              , ln = Math.log
              , un = Math.LN2
              , cn = 64
              , _n = 4194304;
            function En(e) {
                switch (e & -e) {
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
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function mn(e, n) {
                var t = e.pendingLanes;
                if (0 === t)
                    return 0;
                var r = 0
                  , a = e.suspendedLanes
                  , o = e.pingedLanes
                  , i = 268435455 & t;
                if (0 !== i) {
                    var s = i & ~a;
                    0 !== s ? r = En(s) : 0 != (o &= i) && (r = En(o))
                } else
                    0 != (i = t & ~a) ? r = En(i) : 0 !== o && (r = En(o));
                if (0 === r)
                    return 0;
                if (0 !== n && n !== r && !(n & a) && ((a = r & -r) >= (o = n & -n) || 16 === a && 4194240 & o))
                    return n;
                if (4 & r && (r |= 16 & t),
                0 !== (n = e.entangledLanes))
                    for (e = e.entanglements,
                    n &= r; 0 < n; )
                        a = 1 << (t = 31 - sn(n)),
                        r |= e[t],
                        n &= ~a;
                return r
            }
            function dn(e, n) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return n + 250;
                case 8:
                case 16:
                case 32:
                case 64:
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
                    return n + 5e3;
                default:
                    return -1
                }
            }
            function fn(e) {
                return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function Tn() {
                var e = cn;
                return !(4194240 & (cn <<= 1)) && (cn = 64),
                e
            }
            function pn(e) {
                for (var n = [], t = 0; 31 > t; t++)
                    n.push(e);
                return n
            }
            function Sn(e, n, t) {
                e.pendingLanes |= n,
                536870912 !== n && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[n = 31 - sn(n)] = t
            }
            function On(e, n) {
                var t = e.entangledLanes |= n;
                for (e = e.entanglements; t; ) {
                    var r = 31 - sn(t)
                      , a = 1 << r;
                    a & n | e[r] & n && (e[r] |= n),
                    t &= ~a
                }
            }
            var Nn = 0;
            function Cn(e) {
                return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
            }
            var An, In, hn, Ln, Rn, gn = !1, Pn = [], Dn = null, Mn = null, yn = null, Un = new Map, wn = new Map, bn = [], kn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function vn(e, n) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Dn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Mn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    yn = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Un.delete(n.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    wn.delete(n.pointerId)
                }
            }
            function Fn(e, n, t, r, a, o) {
                return null === e || e.nativeEvent !== o ? (e = {
                    blockedOn: n,
                    domEventName: t,
                    eventSystemFlags: r,
                    nativeEvent: o,
                    targetContainers: [a]
                },
                null !== n && null !== (n = Oa(n)) && In(n),
                e) : (e.eventSystemFlags |= r,
                n = e.targetContainers,
                null !== a && -1 === n.indexOf(a) && n.push(a),
                e)
            }
            function Bn(e) {
                var n = Sa(e.target);
                if (null !== n) {
                    var t = Je(n);
                    if (null !== t)
                        if (13 === (n = t.tag)) {
                            if (null !== (n = Ve(t)))
                                return e.blockedOn = n,
                                void Rn(e.priority, (function() {
                                    hn(t)
                                }
                                ))
                        } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function xn(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var n = e.targetContainers; 0 < n.length; ) {
                    var t = jn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                    if (null !== t)
                        return null !== (n = Oa(t)) && In(n),
                        e.blockedOn = t,
                        !1;
                    var r = new (t = e.nativeEvent).constructor(t.type,t);
                    Ne = r,
                    t.target.dispatchEvent(r),
                    Ne = null,
                    n.shift()
                }
                return !0
            }
            function Gn(e, n, t) {
                xn(e) && t.delete(n)
            }
            function Hn() {
                gn = !1,
                null !== Dn && xn(Dn) && (Dn = null),
                null !== Mn && xn(Mn) && (Mn = null),
                null !== yn && xn(yn) && (yn = null),
                Un.forEach(Gn),
                wn.forEach(Gn)
            }
            function Jn(e, n) {
                e.blockedOn === n && (e.blockedOn = null,
                gn || (gn = !0,
                a.unstable_scheduleCallback(a.unstable_NormalPriority, Hn)))
            }
            function Vn(e) {
                function n(n) {
                    return Jn(n, e)
                }
                if (0 < Pn.length) {
                    Jn(Pn[0], e);
                    for (var t = 1; t < Pn.length; t++) {
                        var r = Pn[t];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Dn && Jn(Dn, e),
                null !== Mn && Jn(Mn, e),
                null !== yn && Jn(yn, e),
                Un.forEach(n),
                wn.forEach(n),
                t = 0; t < bn.length; t++)
                    (r = bn[t]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < bn.length && null === (t = bn[0]).blockedOn; )
                    Bn(t),
                    null === t.blockedOn && bn.shift()
            }
            var Xn = N.ReactCurrentBatchConfig
              , Wn = !0;
            function Kn(e, n, t, r) {
                var a = Nn
                  , o = Xn.transition;
                Xn.transition = null;
                try {
                    Nn = 1,
                    qn(e, n, t, r)
                } finally {
                    Nn = a,
                    Xn.transition = o
                }
            }
            function Yn(e, n, t, r) {
                var a = Nn
                  , o = Xn.transition;
                Xn.transition = null;
                try {
                    Nn = 4,
                    qn(e, n, t, r)
                } finally {
                    Nn = a,
                    Xn.transition = o
                }
            }
            function qn(e, n, t, r) {
                if (Wn) {
                    var a = jn(e, n, t, r);
                    if (null === a)
                        Xr(e, n, r, zn, t),
                        vn(e, r);
                    else if (function(e, n, t, r, a) {
                        switch (n) {
                        case "focusin":
                            return Dn = Fn(Dn, e, n, t, r, a),
                            !0;
                        case "dragenter":
                            return Mn = Fn(Mn, e, n, t, r, a),
                            !0;
                        case "mouseover":
                            return yn = Fn(yn, e, n, t, r, a),
                            !0;
                        case "pointerover":
                            var o = a.pointerId;
                            return Un.set(o, Fn(Un.get(o) || null, e, n, t, r, a)),
                            !0;
                        case "gotpointercapture":
                            return o = a.pointerId,
                            wn.set(o, Fn(wn.get(o) || null, e, n, t, r, a)),
                            !0
                        }
                        return !1
                    }(a, e, n, t, r))
                        r.stopPropagation();
                    else if (vn(e, r),
                    4 & n && -1 < kn.indexOf(e)) {
                        for (; null !== a; ) {
                            var o = Oa(a);
                            if (null !== o && An(o),
                            null === (o = jn(e, n, t, r)) && Xr(e, n, r, zn, t),
                            o === a)
                                break;
                            a = o
                        }
                        null !== a && r.stopPropagation()
                    } else
                        Xr(e, n, r, null, t)
                }
            }
            var zn = null;
            function jn(e, n, t, r) {
                if (zn = null,
                null !== (e = Sa(e = Ce(r))))
                    if (null === (n = Je(e)))
                        e = null;
                    else if (13 === (t = n.tag)) {
                        if (null !== (e = Ve(n)))
                            return e;
                        e = null
                    } else if (3 === t) {
                        if (n.stateNode.current.memoizedState.isDehydrated)
                            return 3 === n.tag ? n.stateNode.containerInfo : null;
                        e = null
                    } else
                        n !== e && (e = null);
                return zn = e,
                null
            }
            function $n(e) {
                switch (e) {
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
                    return 1;
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
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (Qe()) {
                    case Ze:
                        return 1;
                    case en:
                        return 4;
                    case nn:
                    case tn:
                        return 16;
                    case rn:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var Qn = null
              , Zn = null
              , et = null;
            function nt() {
                if (et)
                    return et;
                var e, n, t = Zn, r = t.length, a = "value"in Qn ? Qn.value : Qn.textContent, o = a.length;
                for (e = 0; e < r && t[e] === a[e]; e++)
                    ;
                var i = r - e;
                for (n = 1; n <= i && t[r - n] === a[o - n]; n++)
                    ;
                return et = a.slice(e, 1 < n ? 1 - n : void 0)
            }
            function tt(e) {
                var n = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function rt() {
                return !0
            }
            function at() {
                return !1
            }
            function ot(e) {
                function n(n, t, r, a, o) {
                    for (var i in this._reactName = n,
                    this._targetInst = r,
                    this.type = t,
                    this.nativeEvent = a,
                    this.target = o,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(i) && (n = e[i],
                        this[i] = n ? n(a) : a[i]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? rt : at,
                    this.isPropagationStopped = at,
                    this
                }
                return F(n.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = rt)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = rt)
                    },
                    persist: function() {},
                    isPersistent: rt
                }),
                n
            }
            var it, st, lt, ut = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, ct = ot(ut), _t = F({}, ut, {
                view: 0,
                detail: 0
            }), Et = ot(_t), mt = F({}, _t, {
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
                getModifierState: Lt,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== lt && (lt && "mousemove" === e.type ? (it = e.screenX - lt.screenX,
                    st = e.screenY - lt.screenY) : st = it = 0,
                    lt = e),
                    it)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : st
                }
            }), dt = ot(mt), ft = ot(F({}, mt, {
                dataTransfer: 0
            })), Tt = ot(F({}, _t, {
                relatedTarget: 0
            })), pt = ot(F({}, ut, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), St = F({}, ut, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), Ot = ot(St), Nt = ot(F({}, ut, {
                data: 0
            })), Ct = {
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
                MozPrintableKey: "Unidentified"
            }, At = {
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
                224: "Meta"
            }, It = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function ht(e) {
                var n = this.nativeEvent;
                return n.getModifierState ? n.getModifierState(e) : !!(e = It[e]) && !!n[e]
            }
            function Lt() {
                return ht
            }
            var Rt = F({}, _t, {
                key: function(e) {
                    if (e.key) {
                        var n = Ct[e.key] || e.key;
                        if ("Unidentified" !== n)
                            return n
                    }
                    return "keypress" === e.type ? 13 === (e = tt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? At[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Lt,
                charCode: function(e) {
                    return "keypress" === e.type ? tt(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , gt = ot(Rt)
              , Pt = ot(F({}, mt, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , Dt = ot(F({}, _t, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Lt
            }))
              , Mt = ot(F({}, ut, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , yt = F({}, mt, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , Ut = ot(yt)
              , wt = [9, 13, 27, 32]
              , bt = c && "CompositionEvent"in window
              , kt = null;
            c && "documentMode"in document && (kt = document.documentMode);
            var vt = c && "TextEvent"in window && !kt
              , Ft = c && (!bt || kt && 8 < kt && 11 >= kt)
              , Bt = String.fromCharCode(32)
              , xt = !1;
            function Gt(e, n) {
                switch (e) {
                case "keyup":
                    return -1 !== wt.indexOf(n.keyCode);
                case "keydown":
                    return 229 !== n.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Ht(e) {
                return "object" == typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Jt = !1
              , Vt = {
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
                week: !0
            };
            function Xt(e) {
                var n = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === n ? !!Vt[e.type] : "textarea" === n
            }
            function Wt(e, n, t, r) {
                Re(r),
                0 < (n = Kr(n, "onChange")).length && (t = new ct("onChange","change",null,t,r),
                e.push({
                    event: t,
                    listeners: n
                }))
            }
            var Kt = null
              , Yt = null;
            function qt(e) {
                Br(e, 0)
            }
            function zt(e) {
                if (Y(Na(e)))
                    return e
            }
            function jt(e, n) {
                if ("change" === e)
                    return n
            }
            var $t = !1;
            if (c) {
                var Qt;
                if (c) {
                    var Zt = "oninput"in document;
                    if (!Zt) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Zt = "function" == typeof er.oninput
                    }
                    Qt = Zt
                } else
                    Qt = !1;
                $t = Qt && (!document.documentMode || 9 < document.documentMode)
            }
            function nr() {
                Kt && (Kt.detachEvent("onpropertychange", tr),
                Yt = Kt = null)
            }
            function tr(e) {
                if ("value" === e.propertyName && zt(Yt)) {
                    var n = [];
                    Wt(n, Yt, e, Ce(e)),
                    ye(qt, n)
                }
            }
            function rr(e, n, t) {
                "focusin" === e ? (nr(),
                Yt = t,
                (Kt = n).attachEvent("onpropertychange", tr)) : "focusout" === e && nr()
            }
            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return zt(Yt)
            }
            function or(e, n) {
                if ("click" === e)
                    return zt(n)
            }
            function ir(e, n) {
                if ("input" === e || "change" === e)
                    return zt(n)
            }
            var sr = "function" == typeof Object.is ? Object.is : function(e, n) {
                return e === n && (0 !== e || 1 / e == 1 / n) || e != e && n != n
            }
            ;
            function lr(e, n) {
                if (sr(e, n))
                    return !0;
                if ("object" != typeof e || null === e || "object" != typeof n || null === n)
                    return !1;
                var t = Object.keys(e)
                  , r = Object.keys(n);
                if (t.length !== r.length)
                    return !1;
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!_.call(n, a) || !sr(e[a], n[a]))
                        return !1
                }
                return !0
            }
            function ur(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, n) {
                var t, r = ur(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (t = e + r.textContent.length,
                        e <= n && t >= n)
                            return {
                                node: r,
                                offset: n - e
                            };
                        e = t
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }
            function _r(e, n) {
                return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? _r(e, n.parentNode) : "contains"in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
            }
            function Er() {
                for (var e = window, n = q(); n instanceof e.HTMLIFrameElement; ) {
                    try {
                        var t = "string" == typeof n.contentWindow.location.href
                    } catch (e) {
                        t = !1
                    }
                    if (!t)
                        break;
                    n = q((e = n.contentWindow).document)
                }
                return n
            }
            function mr(e) {
                var n = e && e.nodeName && e.nodeName.toLowerCase();
                return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable)
            }
            function dr(e) {
                var n = Er()
                  , t = e.focusedElem
                  , r = e.selectionRange;
                if (n !== t && t && t.ownerDocument && _r(t.ownerDocument.documentElement, t)) {
                    if (null !== r && mr(t))
                        if (n = r.start,
                        void 0 === (e = r.end) && (e = n),
                        "selectionStart"in t)
                            t.selectionStart = n,
                            t.selectionEnd = Math.min(e, t.value.length);
                        else if ((e = (n = t.ownerDocument || document) && n.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = t.textContent.length
                              , o = Math.min(r.start, a);
                            r = void 0 === r.end ? o : Math.min(r.end, a),
                            !e.extend && o > r && (a = r,
                            r = o,
                            o = a),
                            a = cr(t, o);
                            var i = cr(t, r);
                            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((n = n.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            o > r ? (e.addRange(n),
                            e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset),
                            e.addRange(n)))
                        }
                    for (n = [],
                    e = t; e = e.parentNode; )
                        1 === e.nodeType && n.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" == typeof t.focus && t.focus(),
                    t = 0; t < n.length; t++)
                        (e = n[t]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var fr = c && "documentMode"in document && 11 >= document.documentMode
              , Tr = null
              , pr = null
              , Sr = null
              , Or = !1;
            function Nr(e, n, t) {
                var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                Or || null == Tr || Tr !== q(r) || (r = "selectionStart"in (r = Tr) && mr(r) ? {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                Sr && lr(Sr, r) || (Sr = r,
                0 < (r = Kr(pr, "onSelect")).length && (n = new ct("onSelect","select",null,n,t),
                e.push({
                    event: n,
                    listeners: r
                }),
                n.target = Tr)))
            }
            function Cr(e, n) {
                var t = {};
                return t[e.toLowerCase()] = n.toLowerCase(),
                t["Webkit" + e] = "webkit" + n,
                t["Moz" + e] = "moz" + n,
                t
            }
            var Ar = {
                animationend: Cr("Animation", "AnimationEnd"),
                animationiteration: Cr("Animation", "AnimationIteration"),
                animationstart: Cr("Animation", "AnimationStart"),
                transitionend: Cr("Transition", "TransitionEnd")
            }
              , Ir = {}
              , hr = {};
            function Lr(e) {
                if (Ir[e])
                    return Ir[e];
                if (!Ar[e])
                    return e;
                var n, t = Ar[e];
                for (n in t)
                    if (t.hasOwnProperty(n) && n in hr)
                        return Ir[e] = t[n];
                return e
            }
            c && (hr = document.createElement("div").style,
            "AnimationEvent"in window || (delete Ar.animationend.animation,
            delete Ar.animationiteration.animation,
            delete Ar.animationstart.animation),
            "TransitionEvent"in window || delete Ar.transitionend.transition);
            var Rr = Lr("animationend")
              , gr = Lr("animationiteration")
              , Pr = Lr("animationstart")
              , Dr = Lr("transitionend")
              , Mr = new Map
              , yr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function Ur(e, n) {
                Mr.set(e, n),
                l(n, [e])
            }
            for (var wr = 0; wr < yr.length; wr++) {
                var br = yr[wr];
                Ur(br.toLowerCase(), "on" + (br[0].toUpperCase() + br.slice(1)))
            }
            Ur(Rr, "onAnimationEnd"),
            Ur(gr, "onAnimationIteration"),
            Ur(Pr, "onAnimationStart"),
            Ur("dblclick", "onDoubleClick"),
            Ur("focusin", "onFocus"),
            Ur("focusout", "onBlur"),
            Ur(Dr, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , vr = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
            function Fr(e, n, t) {
                var r = e.type || "unknown-event";
                e.currentTarget = t,
                function(e, n, t, r, a, i, s, l, u) {
                    if (He.apply(this, arguments),
                    ve) {
                        if (!ve)
                            throw Error(o(198));
                        var c = Fe;
                        ve = !1,
                        Fe = null,
                        Be || (Be = !0,
                        xe = c)
                    }
                }(r, n, void 0, e),
                e.currentTarget = null
            }
            function Br(e, n) {
                n = !!(4 & n);
                for (var t = 0; t < e.length; t++) {
                    var r = e[t]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var o = void 0;
                        if (n)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var s = r[i]
                                  , l = s.instance
                                  , u = s.currentTarget;
                                if (s = s.listener,
                                l !== o && a.isPropagationStopped())
                                    break e;
                                Fr(a, s, u),
                                o = l
                            }
                        else
                            for (i = 0; i < r.length; i++) {
                                if (l = (s = r[i]).instance,
                                u = s.currentTarget,
                                s = s.listener,
                                l !== o && a.isPropagationStopped())
                                    break e;
                                Fr(a, s, u),
                                o = l
                            }
                    }
                }
                if (Be)
                    throw e = xe,
                    Be = !1,
                    xe = null,
                    e
            }
            function xr(e, n) {
                var t = n[fa];
                void 0 === t && (t = n[fa] = new Set);
                var r = e + "__bubble";
                t.has(r) || (Vr(n, e, 2, !1),
                t.add(r))
            }
            function Gr(e, n, t) {
                var r = 0;
                n && (r |= 4),
                Vr(t, e, r, n)
            }
            var Hr = "_reactListening" + Math.random().toString(36).slice(2);
            function Jr(e) {
                if (!e[Hr]) {
                    e[Hr] = !0,
                    i.forEach((function(n) {
                        "selectionchange" !== n && (vr.has(n) || Gr(n, !1, e),
                        Gr(n, !0, e))
                    }
                    ));
                    var n = 9 === e.nodeType ? e : e.ownerDocument;
                    null === n || n[Hr] || (n[Hr] = !0,
                    Gr("selectionchange", !1, n))
                }
            }
            function Vr(e, n, t, r) {
                switch ($n(n)) {
                case 1:
                    var a = Kn;
                    break;
                case 4:
                    a = Yn;
                    break;
                default:
                    a = qn
                }
                t = a.bind(null, n, t, e),
                a = void 0,
                !we || "touchstart" !== n && "touchmove" !== n && "wheel" !== n || (a = !0),
                r ? void 0 !== a ? e.addEventListener(n, t, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(n, t, !0) : void 0 !== a ? e.addEventListener(n, t, {
                    passive: a
                }) : e.addEventListener(n, t, !1)
            }
            function Xr(e, n, t, r, a) {
                var o = r;
                if (!(1 & n || 2 & n || null === r))
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var s = r.stateNode.containerInfo;
                            if (s === a || 8 === s.nodeType && s.parentNode === a)
                                break;
                            if (4 === i)
                                for (i = r.return; null !== i; ) {
                                    var l = i.tag;
                                    if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === a || 8 === l.nodeType && l.parentNode === a))
                                        return;
                                    i = i.return
                                }
                            for (; null !== s; ) {
                                if (null === (i = Sa(s)))
                                    return;
                                if (5 === (l = i.tag) || 6 === l) {
                                    r = o = i;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                ye((function() {
                    var r = o
                      , a = Ce(t)
                      , i = [];
                    e: {
                        var s = Mr.get(e);
                        if (void 0 !== s) {
                            var l = ct
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tt(t))
                                    break e;
                            case "keydown":
                            case "keyup":
                                l = gt;
                                break;
                            case "focusin":
                                u = "focus",
                                l = Tt;
                                break;
                            case "focusout":
                                u = "blur",
                                l = Tt;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                l = Tt;
                                break;
                            case "click":
                                if (2 === t.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                l = dt;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                l = ft;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                l = Dt;
                                break;
                            case Rr:
                            case gr:
                            case Pr:
                                l = pt;
                                break;
                            case Dr:
                                l = Mt;
                                break;
                            case "scroll":
                                l = Et;
                                break;
                            case "wheel":
                                l = Ut;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                l = Ot;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                l = Pt
                            }
                            var c = !!(4 & n)
                              , _ = !c && "scroll" === e
                              , E = c ? null !== s ? s + "Capture" : null : s;
                            c = [];
                            for (var m, d = r; null !== d; ) {
                                var f = (m = d).stateNode;
                                if (5 === m.tag && null !== f && (m = f,
                                null !== E && null != (f = Ue(d, E)) && c.push(Wr(d, f, m))),
                                _)
                                    break;
                                d = d.return
                            }
                            0 < c.length && (s = new l(s,u,null,t,a),
                            i.push({
                                event: s,
                                listeners: c
                            }))
                        }
                    }
                    if (!(7 & n)) {
                        if (l = "mouseout" === e || "pointerout" === e,
                        (!(s = "mouseover" === e || "pointerover" === e) || t === Ne || !(u = t.relatedTarget || t.fromElement) || !Sa(u) && !u[da]) && (l || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window,
                        l ? (l = r,
                        null !== (u = (u = t.relatedTarget || t.toElement) ? Sa(u) : null) && (u !== (_ = Je(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null,
                        u = r),
                        l !== u)) {
                            if (c = dt,
                            f = "onMouseLeave",
                            E = "onMouseEnter",
                            d = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Pt,
                            f = "onPointerLeave",
                            E = "onPointerEnter",
                            d = "pointer"),
                            _ = null == l ? s : Na(l),
                            m = null == u ? s : Na(u),
                            (s = new c(f,d + "leave",l,t,a)).target = _,
                            s.relatedTarget = m,
                            f = null,
                            Sa(a) === r && ((c = new c(E,d + "enter",u,t,a)).target = m,
                            c.relatedTarget = _,
                            f = c),
                            _ = f,
                            l && u)
                                e: {
                                    for (E = u,
                                    d = 0,
                                    m = c = l; m; m = Yr(m))
                                        d++;
                                    for (m = 0,
                                    f = E; f; f = Yr(f))
                                        m++;
                                    for (; 0 < d - m; )
                                        c = Yr(c),
                                        d--;
                                    for (; 0 < m - d; )
                                        E = Yr(E),
                                        m--;
                                    for (; d--; ) {
                                        if (c === E || null !== E && c === E.alternate)
                                            break e;
                                        c = Yr(c),
                                        E = Yr(E)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== l && qr(i, s, l, c, !1),
                            null !== u && null !== _ && qr(i, _, u, c, !0)
                        }
                        if ("select" === (l = (s = r ? Na(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type)
                            var T = jt;
                        else if (Xt(s))
                            if ($t)
                                T = ir;
                            else {
                                T = ar;
                                var p = rr
                            }
                        else
                            (l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (T = or);
                        switch (T && (T = T(e, r)) ? Wt(i, T, t, a) : (p && p(e, s, r),
                        "focusout" === e && (p = s._wrapperState) && p.controlled && "number" === s.type && ee(s, "number", s.value)),
                        p = r ? Na(r) : window,
                        e) {
                        case "focusin":
                            (Xt(p) || "true" === p.contentEditable) && (Tr = p,
                            pr = r,
                            Sr = null);
                            break;
                        case "focusout":
                            Sr = pr = Tr = null;
                            break;
                        case "mousedown":
                            Or = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Or = !1,
                            Nr(i, t, a);
                            break;
                        case "selectionchange":
                            if (fr)
                                break;
                        case "keydown":
                        case "keyup":
                            Nr(i, t, a)
                        }
                        var S;
                        if (bt)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var O = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    O = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    O = "onCompositionUpdate";
                                    break e
                                }
                                O = void 0
                            }
                        else
                            Jt ? Gt(e, t) && (O = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (O = "onCompositionStart");
                        O && (Ft && "ko" !== t.locale && (Jt || "onCompositionStart" !== O ? "onCompositionEnd" === O && Jt && (S = nt()) : (Zn = "value"in (Qn = a) ? Qn.value : Qn.textContent,
                        Jt = !0)),
                        0 < (p = Kr(r, O)).length && (O = new Nt(O,e,null,t,a),
                        i.push({
                            event: O,
                            listeners: p
                        }),
                        (S || null !== (S = Ht(t))) && (O.data = S))),
                        (S = vt ? function(e, n) {
                            switch (e) {
                            case "compositionend":
                                return Ht(n);
                            case "keypress":
                                return 32 !== n.which ? null : (xt = !0,
                                Bt);
                            case "textInput":
                                return (e = n.data) === Bt && xt ? null : e;
                            default:
                                return null
                            }
                        }(e, t) : function(e, n) {
                            if (Jt)
                                return "compositionend" === e || !bt && Gt(e, n) ? (e = nt(),
                                et = Zn = Qn = null,
                                Jt = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                                    if (n.char && 1 < n.char.length)
                                        return n.char;
                                    if (n.which)
                                        return String.fromCharCode(n.which)
                                }
                                return null;
                            case "compositionend":
                                return Ft && "ko" !== n.locale ? null : n.data
                            }
                        }(e, t)) && 0 < (r = Kr(r, "onBeforeInput")).length && (a = new Nt("onBeforeInput","beforeinput",null,t,a),
                        i.push({
                            event: a,
                            listeners: r
                        }),
                        a.data = S)
                    }
                    Br(i, n)
                }
                ))
            }
            function Wr(e, n, t) {
                return {
                    instance: e,
                    listener: n,
                    currentTarget: t
                }
            }
            function Kr(e, n) {
                for (var t = n + "Capture", r = []; null !== e; ) {
                    var a = e
                      , o = a.stateNode;
                    5 === a.tag && null !== o && (a = o,
                    null != (o = Ue(e, t)) && r.unshift(Wr(e, o, a)),
                    null != (o = Ue(e, n)) && r.push(Wr(e, o, a))),
                    e = e.return
                }
                return r
            }
            function Yr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function qr(e, n, t, r, a) {
                for (var o = n._reactName, i = []; null !== t && t !== r; ) {
                    var s = t
                      , l = s.alternate
                      , u = s.stateNode;
                    if (null !== l && l === r)
                        break;
                    5 === s.tag && null !== u && (s = u,
                    a ? null != (l = Ue(t, o)) && i.unshift(Wr(t, l, s)) : a || null != (l = Ue(t, o)) && i.push(Wr(t, l, s))),
                    t = t.return
                }
                0 !== i.length && e.push({
                    event: n,
                    listeners: i
                })
            }
            var zr = /\r\n?/g
              , jr = /\u0000|\uFFFD/g;
            function $r(e) {
                return ("string" == typeof e ? e : "" + e).replace(zr, "\n").replace(jr, "")
            }
            function Qr(e, n, t) {
                if (n = $r(n),
                $r(e) !== n && t)
                    throw Error(o(425))
            }
            function Zr() {}
            var ea = null
              , na = null;
            function ta(e, n) {
                return "textarea" === e || "noscript" === e || "string" == typeof n.children || "number" == typeof n.children || "object" == typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html
            }
            var ra = "function" == typeof setTimeout ? setTimeout : void 0
              , aa = "function" == typeof clearTimeout ? clearTimeout : void 0
              , oa = "function" == typeof Promise ? Promise : void 0
              , ia = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== oa ? function(e) {
                return oa.resolve(null).then(e).catch(sa)
            }
            : ra;
            function sa(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function la(e, n) {
                var t = n
                  , r = 0;
                do {
                    var a = t.nextSibling;
                    if (e.removeChild(t),
                    a && 8 === a.nodeType)
                        if ("/$" === (t = a.data)) {
                            if (0 === r)
                                return e.removeChild(a),
                                void Vn(n);
                            r--
                        } else
                            "$" !== t && "$?" !== t && "$!" !== t || r++;
                    t = a
                } while (t);
                Vn(n)
            }
            function ua(e) {
                for (; null != e; e = e.nextSibling) {
                    var n = e.nodeType;
                    if (1 === n || 3 === n)
                        break;
                    if (8 === n) {
                        if ("$" === (n = e.data) || "$!" === n || "$?" === n)
                            break;
                        if ("/$" === n)
                            return null
                    }
                }
                return e
            }
            function ca(e) {
                e = e.previousSibling;
                for (var n = 0; e; ) {
                    if (8 === e.nodeType) {
                        var t = e.data;
                        if ("$" === t || "$!" === t || "$?" === t) {
                            if (0 === n)
                                return e;
                            n--
                        } else
                            "/$" === t && n++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var _a = Math.random().toString(36).slice(2)
              , Ea = "__reactFiber$" + _a
              , ma = "__reactProps$" + _a
              , da = "__reactContainer$" + _a
              , fa = "__reactEvents$" + _a
              , Ta = "__reactListeners$" + _a
              , pa = "__reactHandles$" + _a;
            function Sa(e) {
                var n = e[Ea];
                if (n)
                    return n;
                for (var t = e.parentNode; t; ) {
                    if (n = t[da] || t[Ea]) {
                        if (t = n.alternate,
                        null !== n.child || null !== t && null !== t.child)
                            for (e = ca(e); null !== e; ) {
                                if (t = e[Ea])
                                    return t;
                                e = ca(e)
                            }
                        return n
                    }
                    t = (e = t).parentNode
                }
                return null
            }
            function Oa(e) {
                return !(e = e[Ea] || e[da]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function Na(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(o(33))
            }
            function Ca(e) {
                return e[ma] || null
            }
            var Aa = []
              , Ia = -1;
            function ha(e) {
                return {
                    current: e
                }
            }
            function La(e) {
                0 > Ia || (e.current = Aa[Ia],
                Aa[Ia] = null,
                Ia--)
            }
            function Ra(e, n) {
                Ia++,
                Aa[Ia] = e.current,
                e.current = n
            }
            var ga = {}
              , Pa = ha(ga)
              , Da = ha(!1)
              , Ma = ga;
            function ya(e, n) {
                var t = e.type.contextTypes;
                if (!t)
                    return ga;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var a, o = {};
                for (a in t)
                    o[a] = n[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n,
                e.__reactInternalMemoizedMaskedChildContext = o),
                o
            }
            function Ua(e) {
                return null != e.childContextTypes
            }
            function wa() {
                La(Da),
                La(Pa)
            }
            function ba(e, n, t) {
                if (Pa.current !== ga)
                    throw Error(o(168));
                Ra(Pa, n),
                Ra(Da, t)
            }
            function ka(e, n, t) {
                var r = e.stateNode;
                if (n = n.childContextTypes,
                "function" != typeof r.getChildContext)
                    return t;
                for (var a in r = r.getChildContext())
                    if (!(a in n))
                        throw Error(o(108, V(e) || "Unknown", a));
                return F({}, t, r)
            }
            function va(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ga,
                Ma = Pa.current,
                Ra(Pa, e),
                Ra(Da, Da.current),
                !0
            }
            function Fa(e, n, t) {
                var r = e.stateNode;
                if (!r)
                    throw Error(o(169));
                t ? (e = ka(e, n, Ma),
                r.__reactInternalMemoizedMergedChildContext = e,
                La(Da),
                La(Pa),
                Ra(Pa, e)) : La(Da),
                Ra(Da, t)
            }
            var Ba = null
              , xa = !1
              , Ga = !1;
            function Ha(e) {
                null === Ba ? Ba = [e] : Ba.push(e)
            }
            function Ja() {
                if (!Ga && null !== Ba) {
                    Ga = !0;
                    var e = 0
                      , n = Nn;
                    try {
                        var t = Ba;
                        for (Nn = 1; e < t.length; e++) {
                            var r = t[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Ba = null,
                        xa = !1
                    } catch (n) {
                        throw null !== Ba && (Ba = Ba.slice(e + 1)),
                        Ye(Ze, Ja),
                        n
                    } finally {
                        Nn = n,
                        Ga = !1
                    }
                }
                return null
            }
            var Va = []
              , Xa = 0
              , Wa = null
              , Ka = 0
              , Ya = []
              , qa = 0
              , za = null
              , ja = 1
              , $a = "";
            function Qa(e, n) {
                Va[Xa++] = Ka,
                Va[Xa++] = Wa,
                Wa = e,
                Ka = n
            }
            function Za(e, n, t) {
                Ya[qa++] = ja,
                Ya[qa++] = $a,
                Ya[qa++] = za,
                za = e;
                var r = ja;
                e = $a;
                var a = 32 - sn(r) - 1;
                r &= ~(1 << a),
                t += 1;
                var o = 32 - sn(n) + a;
                if (30 < o) {
                    var i = a - a % 5;
                    o = (r & (1 << i) - 1).toString(32),
                    r >>= i,
                    a -= i,
                    ja = 1 << 32 - sn(n) + a | t << a | r,
                    $a = o + e
                } else
                    ja = 1 << o | t << a | r,
                    $a = e
            }
            function eo(e) {
                null !== e.return && (Qa(e, 1),
                Za(e, 1, 0))
            }
            function no(e) {
                for (; e === Wa; )
                    Wa = Va[--Xa],
                    Va[Xa] = null,
                    Ka = Va[--Xa],
                    Va[Xa] = null;
                for (; e === za; )
                    za = Ya[--qa],
                    Ya[qa] = null,
                    $a = Ya[--qa],
                    Ya[qa] = null,
                    ja = Ya[--qa],
                    Ya[qa] = null
            }
            var to = null
              , ro = null
              , ao = !1
              , oo = null;
            function io(e, n) {
                var t = yu(5, null, null, 0);
                t.elementType = "DELETED",
                t.stateNode = n,
                t.return = e,
                null === (n = e.deletions) ? (e.deletions = [t],
                e.flags |= 16) : n.push(t)
            }
            function so(e, n) {
                switch (e.tag) {
                case 5:
                    var t = e.type;
                    return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && (e.stateNode = n,
                    to = e,
                    ro = ua(n.firstChild),
                    !0);
                case 6:
                    return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && (e.stateNode = n,
                    to = e,
                    ro = null,
                    !0);
                case 13:
                    return null !== (n = 8 !== n.nodeType ? null : n) && (t = null !== za ? {
                        id: ja,
                        overflow: $a
                    } : null,
                    e.memoizedState = {
                        dehydrated: n,
                        treeContext: t,
                        retryLane: 1073741824
                    },
                    (t = yu(18, null, null, 0)).stateNode = n,
                    t.return = e,
                    e.child = t,
                    to = e,
                    ro = null,
                    !0);
                default:
                    return !1
                }
            }
            function lo(e) {
                return !(!(1 & e.mode) || 128 & e.flags)
            }
            function uo(e) {
                if (ao) {
                    var n = ro;
                    if (n) {
                        var t = n;
                        if (!so(e, n)) {
                            if (lo(e))
                                throw Error(o(418));
                            n = ua(t.nextSibling);
                            var r = to;
                            n && so(e, n) ? io(r, t) : (e.flags = -4097 & e.flags | 2,
                            ao = !1,
                            to = e)
                        }
                    } else {
                        if (lo(e))
                            throw Error(o(418));
                        e.flags = -4097 & e.flags | 2,
                        ao = !1,
                        to = e
                    }
                }
            }
            function co(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                to = e
            }
            function _o(e) {
                if (e !== to)
                    return !1;
                if (!ao)
                    return co(e),
                    ao = !0,
                    !1;
                var n;
                if ((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !ta(e.type, e.memoizedProps)),
                n && (n = ro)) {
                    if (lo(e))
                        throw Eo(),
                        Error(o(418));
                    for (; n; )
                        io(e, n),
                        n = ua(n.nextSibling)
                }
                if (co(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(o(317));
                    e: {
                        for (e = e.nextSibling,
                        n = 0; e; ) {
                            if (8 === e.nodeType) {
                                var t = e.data;
                                if ("/$" === t) {
                                    if (0 === n) {
                                        ro = ua(e.nextSibling);
                                        break e
                                    }
                                    n--
                                } else
                                    "$" !== t && "$!" !== t && "$?" !== t || n++
                            }
                            e = e.nextSibling
                        }
                        ro = null
                    }
                } else
                    ro = to ? ua(e.stateNode.nextSibling) : null;
                return !0
            }
            function Eo() {
                for (var e = ro; e; )
                    e = ua(e.nextSibling)
            }
            function mo() {
                ro = to = null,
                ao = !1
            }
            function fo(e) {
                null === oo ? oo = [e] : oo.push(e)
            }
            var To = N.ReactCurrentBatchConfig;
            function po(e, n, t) {
                if (null !== (e = t.ref) && "function" != typeof e && "object" != typeof e) {
                    if (t._owner) {
                        if (t = t._owner) {
                            if (1 !== t.tag)
                                throw Error(o(309));
                            var r = t.stateNode
                        }
                        if (!r)
                            throw Error(o(147, e));
                        var a = r
                          , i = "" + e;
                        return null !== n && null !== n.ref && "function" == typeof n.ref && n.ref._stringRef === i ? n.ref : (n = function(e) {
                            var n = a.refs;
                            null === e ? delete n[i] : n[i] = e
                        }
                        ,
                        n._stringRef = i,
                        n)
                    }
                    if ("string" != typeof e)
                        throw Error(o(284));
                    if (!t._owner)
                        throw Error(o(290, e))
                }
                return e
            }
            function So(e, n) {
                throw e = Object.prototype.toString.call(n),
                Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
            }
            function Oo(e) {
                return (0,
                e._init)(e._payload)
            }
            function No(e) {
                function n(n, t) {
                    if (e) {
                        var r = n.deletions;
                        null === r ? (n.deletions = [t],
                        n.flags |= 16) : r.push(t)
                    }
                }
                function t(t, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        n(t, r),
                        r = r.sibling;
                    return null
                }
                function r(e, n) {
                    for (e = new Map; null !== n; )
                        null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                        n = n.sibling;
                    return e
                }
                function a(e, n) {
                    return (e = wu(e, n)).index = 0,
                    e.sibling = null,
                    e
                }
                function i(n, t, r) {
                    return n.index = r,
                    e ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 2,
                    t) : r : (n.flags |= 2,
                    t) : (n.flags |= 1048576,
                    t)
                }
                function s(n) {
                    return e && null === n.alternate && (n.flags |= 2),
                    n
                }
                function l(e, n, t, r) {
                    return null === n || 6 !== n.tag ? ((n = Fu(t, e.mode, r)).return = e,
                    n) : ((n = a(n, t)).return = e,
                    n)
                }
                function u(e, n, t, r) {
                    var o = t.type;
                    return o === I ? _(e, n, t.props.children, r, t.key) : null !== n && (n.elementType === o || "object" == typeof o && null !== o && o.$$typeof === U && Oo(o) === n.type) ? ((r = a(n, t.props)).ref = po(e, n, t),
                    r.return = e,
                    r) : ((r = bu(t.type, t.key, t.props, null, e.mode, r)).ref = po(e, n, t),
                    r.return = e,
                    r)
                }
                function c(e, n, t, r) {
                    return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? ((n = Bu(t, e.mode, r)).return = e,
                    n) : ((n = a(n, t.children || [])).return = e,
                    n)
                }
                function _(e, n, t, r, o) {
                    return null === n || 7 !== n.tag ? ((n = ku(t, e.mode, r, o)).return = e,
                    n) : ((n = a(n, t)).return = e,
                    n)
                }
                function E(e, n, t) {
                    if ("string" == typeof n && "" !== n || "number" == typeof n)
                        return (n = Fu("" + n, e.mode, t)).return = e,
                        n;
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case C:
                            return (t = bu(n.type, n.key, n.props, null, e.mode, t)).ref = po(e, null, n),
                            t.return = e,
                            t;
                        case A:
                            return (n = Bu(n, e.mode, t)).return = e,
                            n;
                        case U:
                            return E(e, (0,
                            n._init)(n._payload), t)
                        }
                        if (ne(n) || k(n))
                            return (n = ku(n, e.mode, t, null)).return = e,
                            n;
                        So(e, n)
                    }
                    return null
                }
                function m(e, n, t, r) {
                    var a = null !== n ? n.key : null;
                    if ("string" == typeof t && "" !== t || "number" == typeof t)
                        return null !== a ? null : l(e, n, "" + t, r);
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case C:
                            return t.key === a ? u(e, n, t, r) : null;
                        case A:
                            return t.key === a ? c(e, n, t, r) : null;
                        case U:
                            return m(e, n, (a = t._init)(t._payload), r)
                        }
                        if (ne(t) || k(t))
                            return null !== a ? null : _(e, n, t, r, null);
                        So(e, t)
                    }
                    return null
                }
                function d(e, n, t, r, a) {
                    if ("string" == typeof r && "" !== r || "number" == typeof r)
                        return l(n, e = e.get(t) || null, "" + r, a);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case C:
                            return u(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                        case A:
                            return c(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                        case U:
                            return d(e, n, t, (0,
                            r._init)(r._payload), a)
                        }
                        if (ne(r) || k(r))
                            return _(n, e = e.get(t) || null, r, a, null);
                        So(n, r)
                    }
                    return null
                }
                function f(a, o, s, l) {
                    for (var u = null, c = null, _ = o, f = o = 0, T = null; null !== _ && f < s.length; f++) {
                        _.index > f ? (T = _,
                        _ = null) : T = _.sibling;
                        var p = m(a, _, s[f], l);
                        if (null === p) {
                            null === _ && (_ = T);
                            break
                        }
                        e && _ && null === p.alternate && n(a, _),
                        o = i(p, o, f),
                        null === c ? u = p : c.sibling = p,
                        c = p,
                        _ = T
                    }
                    if (f === s.length)
                        return t(a, _),
                        ao && Qa(a, f),
                        u;
                    if (null === _) {
                        for (; f < s.length; f++)
                            null !== (_ = E(a, s[f], l)) && (o = i(_, o, f),
                            null === c ? u = _ : c.sibling = _,
                            c = _);
                        return ao && Qa(a, f),
                        u
                    }
                    for (_ = r(a, _); f < s.length; f++)
                        null !== (T = d(_, a, f, s[f], l)) && (e && null !== T.alternate && _.delete(null === T.key ? f : T.key),
                        o = i(T, o, f),
                        null === c ? u = T : c.sibling = T,
                        c = T);
                    return e && _.forEach((function(e) {
                        return n(a, e)
                    }
                    )),
                    ao && Qa(a, f),
                    u
                }
                function T(a, s, l, u) {
                    var c = k(l);
                    if ("function" != typeof c)
                        throw Error(o(150));
                    if (null == (l = c.call(l)))
                        throw Error(o(151));
                    for (var _ = c = null, f = s, T = s = 0, p = null, S = l.next(); null !== f && !S.done; T++,
                    S = l.next()) {
                        f.index > T ? (p = f,
                        f = null) : p = f.sibling;
                        var O = m(a, f, S.value, u);
                        if (null === O) {
                            null === f && (f = p);
                            break
                        }
                        e && f && null === O.alternate && n(a, f),
                        s = i(O, s, T),
                        null === _ ? c = O : _.sibling = O,
                        _ = O,
                        f = p
                    }
                    if (S.done)
                        return t(a, f),
                        ao && Qa(a, T),
                        c;
                    if (null === f) {
                        for (; !S.done; T++,
                        S = l.next())
                            null !== (S = E(a, S.value, u)) && (s = i(S, s, T),
                            null === _ ? c = S : _.sibling = S,
                            _ = S);
                        return ao && Qa(a, T),
                        c
                    }
                    for (f = r(a, f); !S.done; T++,
                    S = l.next())
                        null !== (S = d(f, a, T, S.value, u)) && (e && null !== S.alternate && f.delete(null === S.key ? T : S.key),
                        s = i(S, s, T),
                        null === _ ? c = S : _.sibling = S,
                        _ = S);
                    return e && f.forEach((function(e) {
                        return n(a, e)
                    }
                    )),
                    ao && Qa(a, T),
                    c
                }
                return function e(r, o, i, l) {
                    if ("object" == typeof i && null !== i && i.type === I && null === i.key && (i = i.props.children),
                    "object" == typeof i && null !== i) {
                        switch (i.$$typeof) {
                        case C:
                            e: {
                                for (var u = i.key, c = o; null !== c; ) {
                                    if (c.key === u) {
                                        if ((u = i.type) === I) {
                                            if (7 === c.tag) {
                                                t(r, c.sibling),
                                                (o = a(c, i.props.children)).return = r,
                                                r = o;
                                                break e
                                            }
                                        } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === U && Oo(u) === c.type) {
                                            t(r, c.sibling),
                                            (o = a(c, i.props)).ref = po(r, c, i),
                                            o.return = r,
                                            r = o;
                                            break e
                                        }
                                        t(r, c);
                                        break
                                    }
                                    n(r, c),
                                    c = c.sibling
                                }
                                i.type === I ? ((o = ku(i.props.children, r.mode, l, i.key)).return = r,
                                r = o) : ((l = bu(i.type, i.key, i.props, null, r.mode, l)).ref = po(r, o, i),
                                l.return = r,
                                r = l)
                            }
                            return s(r);
                        case A:
                            e: {
                                for (c = i.key; null !== o; ) {
                                    if (o.key === c) {
                                        if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
                                            t(r, o.sibling),
                                            (o = a(o, i.children || [])).return = r,
                                            r = o;
                                            break e
                                        }
                                        t(r, o);
                                        break
                                    }
                                    n(r, o),
                                    o = o.sibling
                                }
                                (o = Bu(i, r.mode, l)).return = r,
                                r = o
                            }
                            return s(r);
                        case U:
                            return e(r, o, (c = i._init)(i._payload), l)
                        }
                        if (ne(i))
                            return f(r, o, i, l);
                        if (k(i))
                            return T(r, o, i, l);
                        So(r, i)
                    }
                    return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i,
                    null !== o && 6 === o.tag ? (t(r, o.sibling),
                    (o = a(o, i)).return = r,
                    r = o) : (t(r, o),
                    (o = Fu(i, r.mode, l)).return = r,
                    r = o),
                    s(r)) : t(r, o)
                }
            }
            var Co = No(!0)
              , Ao = No(!1)
              , Io = ha(null)
              , ho = null
              , Lo = null
              , Ro = null;
            function go() {
                Ro = Lo = ho = null
            }
            function Po(e) {
                var n = Io.current;
                La(Io),
                e._currentValue = n
            }
            function Do(e, n, t) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & n) !== n ? (e.childLanes |= n,
                    null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
                    e === t)
                        break;
                    e = e.return
                }
            }
            function Mo(e, n) {
                ho = e,
                Ro = Lo = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & n) && (Os = !0),
                e.firstContext = null)
            }
            function yo(e) {
                var n = e._currentValue;
                if (Ro !== e)
                    if (e = {
                        context: e,
                        memoizedValue: n,
                        next: null
                    },
                    null === Lo) {
                        if (null === ho)
                            throw Error(o(308));
                        Lo = e,
                        ho.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        Lo = Lo.next = e;
                return n
            }
            var Uo = null;
            function wo(e) {
                null === Uo ? Uo = [e] : Uo.push(e)
            }
            function bo(e, n, t, r) {
                var a = n.interleaved;
                return null === a ? (t.next = t,
                wo(n)) : (t.next = a.next,
                a.next = t),
                n.interleaved = t,
                ko(e, r)
            }
            function ko(e, n) {
                e.lanes |= n;
                var t = e.alternate;
                for (null !== t && (t.lanes |= n),
                t = e,
                e = e.return; null !== e; )
                    e.childLanes |= n,
                    null !== (t = e.alternate) && (t.childLanes |= n),
                    t = e,
                    e = e.return;
                return 3 === t.tag ? t.stateNode : null
            }
            var vo = !1;
            function Fo(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function Bo(e, n) {
                e = e.updateQueue,
                n.updateQueue === e && (n.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function xo(e, n) {
                return {
                    eventTime: e,
                    lane: n,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function Go(e, n, t) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                2 & Pl) {
                    var a = r.pending;
                    return null === a ? n.next = n : (n.next = a.next,
                    a.next = n),
                    r.pending = n,
                    ko(e, t)
                }
                return null === (a = r.interleaved) ? (n.next = n,
                wo(r)) : (n.next = a.next,
                a.next = n),
                r.interleaved = n,
                ko(e, t)
            }
            function Ho(e, n, t) {
                if (null !== (n = n.updateQueue) && (n = n.shared,
                4194240 & t)) {
                    var r = n.lanes;
                    t |= r &= e.pendingLanes,
                    n.lanes = t,
                    On(e, t)
                }
            }
            function Jo(e, n) {
                var t = e.updateQueue
                  , r = e.alternate;
                if (null !== r && t === (r = r.updateQueue)) {
                    var a = null
                      , o = null;
                    if (null !== (t = t.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: t.eventTime,
                                lane: t.lane,
                                tag: t.tag,
                                payload: t.payload,
                                callback: t.callback,
                                next: null
                            };
                            null === o ? a = o = i : o = o.next = i,
                            t = t.next
                        } while (null !== t);
                        null === o ? a = o = n : o = o.next = n
                    } else
                        a = o = n;
                    return t = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: o,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = t)
                }
                null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n,
                t.lastBaseUpdate = n
            }
            function Vo(e, n, t, r) {
                var a = e.updateQueue;
                vo = !1;
                var o = a.firstBaseUpdate
                  , i = a.lastBaseUpdate
                  , s = a.shared.pending;
                if (null !== s) {
                    a.shared.pending = null;
                    var l = s
                      , u = l.next;
                    l.next = null,
                    null === i ? o = u : i.next = u,
                    i = l;
                    var c = e.alternate;
                    null !== c && (s = (c = c.updateQueue).lastBaseUpdate) !== i && (null === s ? c.firstBaseUpdate = u : s.next = u,
                    c.lastBaseUpdate = l)
                }
                if (null !== o) {
                    var _ = a.baseState;
                    for (i = 0,
                    c = u = l = null,
                    s = o; ; ) {
                        var E = s.lane
                          , m = s.eventTime;
                        if ((r & E) === E) {
                            null !== c && (c = c.next = {
                                eventTime: m,
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            });
                            e: {
                                var d = e
                                  , f = s;
                                switch (E = n,
                                m = t,
                                f.tag) {
                                case 1:
                                    if ("function" == typeof (d = f.payload)) {
                                        _ = d.call(m, _, E);
                                        break e
                                    }
                                    _ = d;
                                    break e;
                                case 3:
                                    d.flags = -65537 & d.flags | 128;
                                case 0:
                                    if (null == (E = "function" == typeof (d = f.payload) ? d.call(m, _, E) : d))
                                        break e;
                                    _ = F({}, _, E);
                                    break e;
                                case 2:
                                    vo = !0
                                }
                            }
                            null !== s.callback && 0 !== s.lane && (e.flags |= 64,
                            null === (E = a.effects) ? a.effects = [s] : E.push(s))
                        } else
                            m = {
                                eventTime: m,
                                lane: E,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            },
                            null === c ? (u = c = m,
                            l = _) : c = c.next = m,
                            i |= E;
                        if (null === (s = s.next)) {
                            if (null === (s = a.shared.pending))
                                break;
                            s = (E = s).next,
                            E.next = null,
                            a.lastBaseUpdate = E,
                            a.shared.pending = null
                        }
                    }
                    if (null === c && (l = _),
                    a.baseState = l,
                    a.firstBaseUpdate = u,
                    a.lastBaseUpdate = c,
                    null !== (n = a.shared.interleaved)) {
                        a = n;
                        do {
                            i |= a.lane,
                            a = a.next
                        } while (a !== n)
                    } else
                        null === o && (a.shared.lanes = 0);
                    vl |= i,
                    e.lanes = i,
                    e.memoizedState = _
                }
            }
            function Xo(e, n, t) {
                if (e = n.effects,
                n.effects = null,
                null !== e)
                    for (n = 0; n < e.length; n++) {
                        var r = e[n]
                          , a = r.callback;
                        if (null !== a) {
                            if (r.callback = null,
                            r = t,
                            "function" != typeof a)
                                throw Error(o(191, a));
                            a.call(r)
                        }
                    }
            }
            var Wo = {}
              , Ko = ha(Wo)
              , Yo = ha(Wo)
              , qo = ha(Wo);
            function zo(e) {
                if (e === Wo)
                    throw Error(o(174));
                return e
            }
            function jo(e, n) {
                switch (Ra(qo, n),
                Ra(Yo, e),
                Ra(Ko, Wo),
                e = n.nodeType) {
                case 9:
                case 11:
                    n = (n = n.documentElement) ? n.namespaceURI : le(null, "");
                    break;
                default:
                    n = le(n = (e = 8 === e ? n.parentNode : n).namespaceURI || null, e = e.tagName)
                }
                La(Ko),
                Ra(Ko, n)
            }
            function $o() {
                La(Ko),
                La(Yo),
                La(qo)
            }
            function Qo(e) {
                zo(qo.current);
                var n = zo(Ko.current)
                  , t = le(n, e.type);
                n !== t && (Ra(Yo, e),
                Ra(Ko, t))
            }
            function Zo(e) {
                Yo.current === e && (La(Ko),
                La(Yo))
            }
            var ei = ha(0);
            function ni(e) {
                for (var n = e; null !== n; ) {
                    if (13 === n.tag) {
                        var t = n.memoizedState;
                        if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data))
                            return n
                    } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                        if (128 & n.flags)
                            return n
                    } else if (null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return null;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
                return null
            }
            var ti = [];
            function ri() {
                for (var e = 0; e < ti.length; e++)
                    ti[e]._workInProgressVersionPrimary = null;
                ti.length = 0
            }
            var ai = N.ReactCurrentDispatcher
              , oi = N.ReactCurrentBatchConfig
              , ii = 0
              , si = null
              , li = null
              , ui = null
              , ci = !1
              , _i = !1
              , Ei = 0
              , mi = 0;
            function di() {
                throw Error(o(321))
            }
            function fi(e, n) {
                if (null === n)
                    return !1;
                for (var t = 0; t < n.length && t < e.length; t++)
                    if (!sr(e[t], n[t]))
                        return !1;
                return !0
            }
            function Ti(e, n, t, r, a, i) {
                if (ii = i,
                si = n,
                n.memoizedState = null,
                n.updateQueue = null,
                n.lanes = 0,
                ai.current = null === e || null === e.memoizedState ? Zi : es,
                e = t(r, a),
                _i) {
                    i = 0;
                    do {
                        if (_i = !1,
                        Ei = 0,
                        25 <= i)
                            throw Error(o(301));
                        i += 1,
                        ui = li = null,
                        n.updateQueue = null,
                        ai.current = ns,
                        e = t(r, a)
                    } while (_i)
                }
                if (ai.current = Qi,
                n = null !== li && null !== li.next,
                ii = 0,
                ui = li = si = null,
                ci = !1,
                n)
                    throw Error(o(300));
                return e
            }
            function pi() {
                var e = 0 !== Ei;
                return Ei = 0,
                e
            }
            function Si() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === ui ? si.memoizedState = ui = e : ui = ui.next = e,
                ui
            }
            function Oi() {
                if (null === li) {
                    var e = si.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = li.next;
                var n = null === ui ? si.memoizedState : ui.next;
                if (null !== n)
                    ui = n,
                    li = e;
                else {
                    if (null === e)
                        throw Error(o(310));
                    e = {
                        memoizedState: (li = e).memoizedState,
                        baseState: li.baseState,
                        baseQueue: li.baseQueue,
                        queue: li.queue,
                        next: null
                    },
                    null === ui ? si.memoizedState = ui = e : ui = ui.next = e
                }
                return ui
            }
            function Ni(e, n) {
                return "function" == typeof n ? n(e) : n
            }
            function Ci(e) {
                var n = Oi()
                  , t = n.queue;
                if (null === t)
                    throw Error(o(311));
                t.lastRenderedReducer = e;
                var r = li
                  , a = r.baseQueue
                  , i = t.pending;
                if (null !== i) {
                    if (null !== a) {
                        var s = a.next;
                        a.next = i.next,
                        i.next = s
                    }
                    r.baseQueue = a = i,
                    t.pending = null
                }
                if (null !== a) {
                    i = a.next,
                    r = r.baseState;
                    var l = s = null
                      , u = null
                      , c = i;
                    do {
                        var _ = c.lane;
                        if ((ii & _) === _)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var E = {
                                lane: _,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (l = u = E,
                            s = r) : u = u.next = E,
                            si.lanes |= _,
                            vl |= _
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === u ? s = r : u.next = l,
                    sr(r, n.memoizedState) || (Os = !0),
                    n.memoizedState = r,
                    n.baseState = s,
                    n.baseQueue = u,
                    t.lastRenderedState = r
                }
                if (null !== (e = t.interleaved)) {
                    a = e;
                    do {
                        i = a.lane,
                        si.lanes |= i,
                        vl |= i,
                        a = a.next
                    } while (a !== e)
                } else
                    null === a && (t.lanes = 0);
                return [n.memoizedState, t.dispatch]
            }
            function Ai(e) {
                var n = Oi()
                  , t = n.queue;
                if (null === t)
                    throw Error(o(311));
                t.lastRenderedReducer = e;
                var r = t.dispatch
                  , a = t.pending
                  , i = n.memoizedState;
                if (null !== a) {
                    t.pending = null;
                    var s = a = a.next;
                    do {
                        i = e(i, s.action),
                        s = s.next
                    } while (s !== a);
                    sr(i, n.memoizedState) || (Os = !0),
                    n.memoizedState = i,
                    null === n.baseQueue && (n.baseState = i),
                    t.lastRenderedState = i
                }
                return [i, r]
            }
            function Ii() {}
            function hi(e, n) {
                var t = si
                  , r = Oi()
                  , a = n()
                  , i = !sr(r.memoizedState, a);
                if (i && (r.memoizedState = a,
                Os = !0),
                r = r.queue,
                vi(gi.bind(null, t, r, e), [e]),
                r.getSnapshot !== n || i || null !== ui && 1 & ui.memoizedState.tag) {
                    if (t.flags |= 2048,
                    yi(9, Ri.bind(null, t, r, a, n), void 0, null),
                    null === Dl)
                        throw Error(o(349));
                    30 & ii || Li(t, n, a)
                }
                return a
            }
            function Li(e, n, t) {
                e.flags |= 16384,
                e = {
                    getSnapshot: n,
                    value: t
                },
                null === (n = si.updateQueue) ? (n = {
                    lastEffect: null,
                    stores: null
                },
                si.updateQueue = n,
                n.stores = [e]) : null === (t = n.stores) ? n.stores = [e] : t.push(e)
            }
            function Ri(e, n, t, r) {
                n.value = t,
                n.getSnapshot = r,
                Pi(n) && Di(e)
            }
            function gi(e, n, t) {
                return t((function() {
                    Pi(n) && Di(e)
                }
                ))
            }
            function Pi(e) {
                var n = e.getSnapshot;
                e = e.value;
                try {
                    var t = n();
                    return !sr(e, t)
                } catch (e) {
                    return !0
                }
            }
            function Di(e) {
                var n = ko(e, 1);
                null !== n && tu(n, e, 1, -1)
            }
            function Mi(e) {
                var n = Si();
                return "function" == typeof e && (e = e()),
                n.memoizedState = n.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ni,
                    lastRenderedState: e
                },
                n.queue = e,
                e = e.dispatch = qi.bind(null, si, e),
                [n.memoizedState, e]
            }
            function yi(e, n, t, r) {
                return e = {
                    tag: e,
                    create: n,
                    destroy: t,
                    deps: r,
                    next: null
                },
                null === (n = si.updateQueue) ? (n = {
                    lastEffect: null,
                    stores: null
                },
                si.updateQueue = n,
                n.lastEffect = e.next = e) : null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next,
                t.next = e,
                e.next = r,
                n.lastEffect = e),
                e
            }
            function Ui() {
                return Oi().memoizedState
            }
            function wi(e, n, t, r) {
                var a = Si();
                si.flags |= e,
                a.memoizedState = yi(1 | n, t, void 0, void 0 === r ? null : r)
            }
            function bi(e, n, t, r) {
                var a = Oi();
                r = void 0 === r ? null : r;
                var o = void 0;
                if (null !== li) {
                    var i = li.memoizedState;
                    if (o = i.destroy,
                    null !== r && fi(r, i.deps))
                        return void (a.memoizedState = yi(n, t, o, r))
                }
                si.flags |= e,
                a.memoizedState = yi(1 | n, t, o, r)
            }
            function ki(e, n) {
                return wi(8390656, 8, e, n)
            }
            function vi(e, n) {
                return bi(2048, 8, e, n)
            }
            function Fi(e, n) {
                return bi(4, 2, e, n)
            }
            function Bi(e, n) {
                return bi(4, 4, e, n)
            }
            function xi(e, n) {
                return "function" == typeof n ? (e = e(),
                n(e),
                function() {
                    n(null)
                }
                ) : null != n ? (e = e(),
                n.current = e,
                function() {
                    n.current = null
                }
                ) : void 0
            }
            function Gi(e, n, t) {
                return t = null != t ? t.concat([e]) : null,
                bi(4, 4, xi.bind(null, n, e), t)
            }
            function Hi() {}
            function Ji(e, n) {
                var t = Oi();
                n = void 0 === n ? null : n;
                var r = t.memoizedState;
                return null !== r && null !== n && fi(n, r[1]) ? r[0] : (t.memoizedState = [e, n],
                e)
            }
            function Vi(e, n) {
                var t = Oi();
                n = void 0 === n ? null : n;
                var r = t.memoizedState;
                return null !== r && null !== n && fi(n, r[1]) ? r[0] : (e = e(),
                t.memoizedState = [e, n],
                e)
            }
            function Xi(e, n, t) {
                return 21 & ii ? (sr(t, n) || (t = Tn(),
                si.lanes |= t,
                vl |= t,
                e.baseState = !0),
                n) : (e.baseState && (e.baseState = !1,
                Os = !0),
                e.memoizedState = t)
            }
            function Wi(e, n) {
                var t = Nn;
                Nn = 0 !== t && 4 > t ? t : 4,
                e(!0);
                var r = oi.transition;
                oi.transition = {};
                try {
                    e(!1),
                    n()
                } finally {
                    Nn = t,
                    oi.transition = r
                }
            }
            function Ki() {
                return Oi().memoizedState
            }
            function Yi(e, n, t) {
                var r = nu(e);
                t = {
                    lane: r,
                    action: t,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                zi(e) ? ji(n, t) : null !== (t = bo(e, n, t, r)) && (tu(t, e, r, eu()),
                $i(t, n, r))
            }
            function qi(e, n, t) {
                var r = nu(e)
                  , a = {
                    lane: r,
                    action: t,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(e))
                    ji(n, a);
                else {
                    var o = e.alternate;
                    if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = n.lastRenderedReducer))
                        try {
                            var i = n.lastRenderedState
                              , s = o(i, t);
                            if (a.hasEagerState = !0,
                            a.eagerState = s,
                            sr(s, i)) {
                                var l = n.interleaved;
                                return null === l ? (a.next = a,
                                wo(n)) : (a.next = l.next,
                                l.next = a),
                                void (n.interleaved = a)
                            }
                        } catch (e) {}
                    null !== (t = bo(e, n, a, r)) && (tu(t, e, r, a = eu()),
                    $i(t, n, r))
                }
            }
            function zi(e) {
                var n = e.alternate;
                return e === si || null !== n && n === si
            }
            function ji(e, n) {
                _i = ci = !0;
                var t = e.pending;
                null === t ? n.next = n : (n.next = t.next,
                t.next = n),
                e.pending = n
            }
            function $i(e, n, t) {
                if (4194240 & t) {
                    var r = n.lanes;
                    t |= r &= e.pendingLanes,
                    n.lanes = t,
                    On(e, t)
                }
            }
            var Qi = {
                readContext: yo,
                useCallback: di,
                useContext: di,
                useEffect: di,
                useImperativeHandle: di,
                useInsertionEffect: di,
                useLayoutEffect: di,
                useMemo: di,
                useReducer: di,
                useRef: di,
                useState: di,
                useDebugValue: di,
                useDeferredValue: di,
                useTransition: di,
                useMutableSource: di,
                useSyncExternalStore: di,
                useId: di,
                unstable_isNewReconciler: !1
            }
              , Zi = {
                readContext: yo,
                useCallback: function(e, n) {
                    return Si().memoizedState = [e, void 0 === n ? null : n],
                    e
                },
                useContext: yo,
                useEffect: ki,
                useImperativeHandle: function(e, n, t) {
                    return t = null != t ? t.concat([e]) : null,
                    wi(4194308, 4, xi.bind(null, n, e), t)
                },
                useLayoutEffect: function(e, n) {
                    return wi(4194308, 4, e, n)
                },
                useInsertionEffect: function(e, n) {
                    return wi(4, 2, e, n)
                },
                useMemo: function(e, n) {
                    var t = Si();
                    return n = void 0 === n ? null : n,
                    e = e(),
                    t.memoizedState = [e, n],
                    e
                },
                useReducer: function(e, n, t) {
                    var r = Si();
                    return n = void 0 !== t ? t(n) : n,
                    r.memoizedState = r.baseState = n,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: n
                    },
                    r.queue = e,
                    e = e.dispatch = Yi.bind(null, si, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    Si().memoizedState = e
                },
                useState: Mi,
                useDebugValue: Hi,
                useDeferredValue: function(e) {
                    return Si().memoizedState = e
                },
                useTransition: function() {
                    var e = Mi(!1)
                      , n = e[0];
                    return e = Wi.bind(null, e[1]),
                    Si().memoizedState = e,
                    [n, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, n, t) {
                    var r = si
                      , a = Si();
                    if (ao) {
                        if (void 0 === t)
                            throw Error(o(407));
                        t = t()
                    } else {
                        if (t = n(),
                        null === Dl)
                            throw Error(o(349));
                        30 & ii || Li(r, n, t)
                    }
                    a.memoizedState = t;
                    var i = {
                        value: t,
                        getSnapshot: n
                    };
                    return a.queue = i,
                    ki(gi.bind(null, r, i, e), [e]),
                    r.flags |= 2048,
                    yi(9, Ri.bind(null, r, i, t, n), void 0, null),
                    t
                },
                useId: function() {
                    var e = Si()
                      , n = Dl.identifierPrefix;
                    if (ao) {
                        var t = $a;
                        n = ":" + n + "R" + (t = (ja & ~(1 << 32 - sn(ja) - 1)).toString(32) + t),
                        0 < (t = Ei++) && (n += "H" + t.toString(32)),
                        n += ":"
                    } else
                        n = ":" + n + "r" + (t = mi++).toString(32) + ":";
                    return e.memoizedState = n
                },
                unstable_isNewReconciler: !1
            }
              , es = {
                readContext: yo,
                useCallback: Ji,
                useContext: yo,
                useEffect: vi,
                useImperativeHandle: Gi,
                useInsertionEffect: Fi,
                useLayoutEffect: Bi,
                useMemo: Vi,
                useReducer: Ci,
                useRef: Ui,
                useState: function() {
                    return Ci(Ni)
                },
                useDebugValue: Hi,
                useDeferredValue: function(e) {
                    return Xi(Oi(), li.memoizedState, e)
                },
                useTransition: function() {
                    return [Ci(Ni)[0], Oi().memoizedState]
                },
                useMutableSource: Ii,
                useSyncExternalStore: hi,
                useId: Ki,
                unstable_isNewReconciler: !1
            }
              , ns = {
                readContext: yo,
                useCallback: Ji,
                useContext: yo,
                useEffect: vi,
                useImperativeHandle: Gi,
                useInsertionEffect: Fi,
                useLayoutEffect: Bi,
                useMemo: Vi,
                useReducer: Ai,
                useRef: Ui,
                useState: function() {
                    return Ai(Ni)
                },
                useDebugValue: Hi,
                useDeferredValue: function(e) {
                    var n = Oi();
                    return null === li ? n.memoizedState = e : Xi(n, li.memoizedState, e)
                },
                useTransition: function() {
                    return [Ai(Ni)[0], Oi().memoizedState]
                },
                useMutableSource: Ii,
                useSyncExternalStore: hi,
                useId: Ki,
                unstable_isNewReconciler: !1
            };
            function ts(e, n) {
                if (e && e.defaultProps) {
                    for (var t in n = F({}, n),
                    e = e.defaultProps)
                        void 0 === n[t] && (n[t] = e[t]);
                    return n
                }
                return n
            }
            function rs(e, n, t, r) {
                t = null == (t = t(r, n = e.memoizedState)) ? n : F({}, n, t),
                e.memoizedState = t,
                0 === e.lanes && (e.updateQueue.baseState = t)
            }
            var as = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Je(e) === e
                },
                enqueueSetState: function(e, n, t) {
                    e = e._reactInternals;
                    var r = eu()
                      , a = nu(e)
                      , o = xo(r, a);
                    o.payload = n,
                    null != t && (o.callback = t),
                    null !== (n = Go(e, o, a)) && (tu(n, e, a, r),
                    Ho(n, e, a))
                },
                enqueueReplaceState: function(e, n, t) {
                    e = e._reactInternals;
                    var r = eu()
                      , a = nu(e)
                      , o = xo(r, a);
                    o.tag = 1,
                    o.payload = n,
                    null != t && (o.callback = t),
                    null !== (n = Go(e, o, a)) && (tu(n, e, a, r),
                    Ho(n, e, a))
                },
                enqueueForceUpdate: function(e, n) {
                    e = e._reactInternals;
                    var t = eu()
                      , r = nu(e)
                      , a = xo(t, r);
                    a.tag = 2,
                    null != n && (a.callback = n),
                    null !== (n = Go(e, a, r)) && (tu(n, e, r, t),
                    Ho(n, e, r))
                }
            };
            function os(e, n, t, r, a, o, i) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !(n.prototype && n.prototype.isPureReactComponent && lr(t, r) && lr(a, o))
            }
            function is(e, n, t) {
                var r = !1
                  , a = ga
                  , o = n.contextType;
                return "object" == typeof o && null !== o ? o = yo(o) : (a = Ua(n) ? Ma : Pa.current,
                o = (r = null != (r = n.contextTypes)) ? ya(e, a) : ga),
                n = new n(t,o),
                e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null,
                n.updater = as,
                e.stateNode = n,
                n._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = o),
                n
            }
            function ss(e, n, t, r) {
                e = n.state,
                "function" == typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r),
                "function" == typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r),
                n.state !== e && as.enqueueReplaceState(n, n.state, null)
            }
            function ls(e, n, t, r) {
                var a = e.stateNode;
                a.props = t,
                a.state = e.memoizedState,
                a.refs = {},
                Fo(e);
                var o = n.contextType;
                "object" == typeof o && null !== o ? a.context = yo(o) : (o = Ua(n) ? Ma : Pa.current,
                a.context = ya(e, o)),
                a.state = e.memoizedState,
                "function" == typeof (o = n.getDerivedStateFromProps) && (rs(e, n, o, t),
                a.state = e.memoizedState),
                "function" == typeof n.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (n = a.state,
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                n !== a.state && as.enqueueReplaceState(a, a.state, null),
                Vo(e, t, a, r),
                a.state = e.memoizedState),
                "function" == typeof a.componentDidMount && (e.flags |= 4194308)
            }
            function us(e, n) {
                try {
                    var t = ""
                      , r = n;
                    do {
                        t += H(r),
                        r = r.return
                    } while (r);
                    var a = t
                } catch (e) {
                    a = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {
                    value: e,
                    source: n,
                    stack: a,
                    digest: null
                }
            }
            function cs(e, n, t) {
                return {
                    value: e,
                    source: null,
                    stack: null != t ? t : null,
                    digest: null != n ? n : null
                }
            }
            function _s(e, n) {
                try {
                    console.error(n.value)
                } catch (e) {
                    setTimeout((function() {
                        throw e
                    }
                    ))
                }
            }
            var Es = "function" == typeof WeakMap ? WeakMap : Map;
            function ms(e, n, t) {
                (t = xo(-1, t)).tag = 3,
                t.payload = {
                    element: null
                };
                var r = n.value;
                return t.callback = function() {
                    Xl || (Xl = !0,
                    Wl = r),
                    _s(0, n)
                }
                ,
                t
            }
            function ds(e, n, t) {
                (t = xo(-1, t)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var a = n.value;
                    t.payload = function() {
                        return r(a)
                    }
                    ,
                    t.callback = function() {
                        _s(0, n)
                    }
                }
                var o = e.stateNode;
                return null !== o && "function" == typeof o.componentDidCatch && (t.callback = function() {
                    _s(0, n),
                    "function" != typeof r && (null === Kl ? Kl = new Set([this]) : Kl.add(this));
                    var e = n.stack;
                    this.componentDidCatch(n.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                t
            }
            function fs(e, n, t) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new Es;
                    var a = new Set;
                    r.set(n, a)
                } else
                    void 0 === (a = r.get(n)) && (a = new Set,
                    r.set(n, a));
                a.has(t) || (a.add(t),
                e = Lu.bind(null, e, n, t),
                n.then(e, e))
            }
            function Ts(e) {
                do {
                    var n;
                    if ((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated),
                    n)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function ps(e, n, t, r, a) {
                return 1 & e.mode ? (e.flags |= 65536,
                e.lanes = a,
                e) : (e === n ? e.flags |= 65536 : (e.flags |= 128,
                t.flags |= 131072,
                t.flags &= -52805,
                1 === t.tag && (null === t.alternate ? t.tag = 17 : ((n = xo(-1, 1)).tag = 2,
                Go(t, n, 1))),
                t.lanes |= 1),
                e)
            }
            var Ss = N.ReactCurrentOwner
              , Os = !1;
            function Ns(e, n, t, r) {
                n.child = null === e ? Ao(n, null, t, r) : Co(n, e.child, t, r)
            }
            function Cs(e, n, t, r, a) {
                t = t.render;
                var o = n.ref;
                return Mo(n, a),
                r = Ti(e, n, t, r, o, a),
                t = pi(),
                null === e || Os ? (ao && t && eo(n),
                n.flags |= 1,
                Ns(e, n, r, a),
                n.child) : (n.updateQueue = e.updateQueue,
                n.flags &= -2053,
                e.lanes &= ~a,
                Xs(e, n, a))
            }
            function As(e, n, t, r, a) {
                if (null === e) {
                    var o = t.type;
                    return "function" != typeof o || Uu(o) || void 0 !== o.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = bu(t.type, null, r, n, n.mode, a)).ref = n.ref,
                    e.return = n,
                    n.child = e) : (n.tag = 15,
                    n.type = o,
                    Is(e, n, o, r, a))
                }
                if (o = e.child,
                !(e.lanes & a)) {
                    var i = o.memoizedProps;
                    if ((t = null !== (t = t.compare) ? t : lr)(i, r) && e.ref === n.ref)
                        return Xs(e, n, a)
                }
                return n.flags |= 1,
                (e = wu(o, r)).ref = n.ref,
                e.return = n,
                n.child = e
            }
            function Is(e, n, t, r, a) {
                if (null !== e) {
                    var o = e.memoizedProps;
                    if (lr(o, r) && e.ref === n.ref) {
                        if (Os = !1,
                        n.pendingProps = r = o,
                        !(e.lanes & a))
                            return n.lanes = e.lanes,
                            Xs(e, n, a);
                        131072 & e.flags && (Os = !0)
                    }
                }
                return Rs(e, n, t, r, a)
            }
            function hs(e, n, t) {
                var r = n.pendingProps
                  , a = r.children
                  , o = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (1 & n.mode) {
                        if (!(1073741824 & t))
                            return e = null !== o ? o.baseLanes | t : t,
                            n.lanes = n.childLanes = 1073741824,
                            n.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            n.updateQueue = null,
                            Ra(wl, Ul),
                            Ul |= e,
                            null;
                        n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== o ? o.baseLanes : t,
                        Ra(wl, Ul),
                        Ul |= r
                    } else
                        n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        Ra(wl, Ul),
                        Ul |= t;
                else
                    null !== o ? (r = o.baseLanes | t,
                    n.memoizedState = null) : r = t,
                    Ra(wl, Ul),
                    Ul |= r;
                return Ns(e, n, a, t),
                n.child
            }
            function Ls(e, n) {
                var t = n.ref;
                (null === e && null !== t || null !== e && e.ref !== t) && (n.flags |= 512,
                n.flags |= 2097152)
            }
            function Rs(e, n, t, r, a) {
                var o = Ua(t) ? Ma : Pa.current;
                return o = ya(n, o),
                Mo(n, a),
                t = Ti(e, n, t, r, o, a),
                r = pi(),
                null === e || Os ? (ao && r && eo(n),
                n.flags |= 1,
                Ns(e, n, t, a),
                n.child) : (n.updateQueue = e.updateQueue,
                n.flags &= -2053,
                e.lanes &= ~a,
                Xs(e, n, a))
            }
            function gs(e, n, t, r, a) {
                if (Ua(t)) {
                    var o = !0;
                    va(n)
                } else
                    o = !1;
                if (Mo(n, a),
                null === n.stateNode)
                    Vs(e, n),
                    is(n, t, r),
                    ls(n, t, r, a),
                    r = !0;
                else if (null === e) {
                    var i = n.stateNode
                      , s = n.memoizedProps;
                    i.props = s;
                    var l = i.context
                      , u = t.contextType;
                    u = "object" == typeof u && null !== u ? yo(u) : ya(n, u = Ua(t) ? Ma : Pa.current);
                    var c = t.getDerivedStateFromProps
                      , _ = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                    _ || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== r || l !== u) && ss(n, i, r, u),
                    vo = !1;
                    var E = n.memoizedState;
                    i.state = E,
                    Vo(n, r, i, a),
                    l = n.memoizedState,
                    s !== r || E !== l || Da.current || vo ? ("function" == typeof c && (rs(n, t, c, r),
                    l = n.memoizedState),
                    (s = vo || os(n, t, s, r, E, l, u)) ? (_ || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(),
                    "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount && (n.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (n.flags |= 4194308),
                    n.memoizedProps = r,
                    n.memoizedState = l),
                    i.props = r,
                    i.state = l,
                    i.context = u,
                    r = s) : ("function" == typeof i.componentDidMount && (n.flags |= 4194308),
                    r = !1)
                } else {
                    i = n.stateNode,
                    Bo(e, n),
                    s = n.memoizedProps,
                    u = n.type === n.elementType ? s : ts(n.type, s),
                    i.props = u,
                    _ = n.pendingProps,
                    E = i.context,
                    l = "object" == typeof (l = t.contextType) && null !== l ? yo(l) : ya(n, l = Ua(t) ? Ma : Pa.current);
                    var m = t.getDerivedStateFromProps;
                    (c = "function" == typeof m || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== _ || E !== l) && ss(n, i, r, l),
                    vo = !1,
                    E = n.memoizedState,
                    i.state = E,
                    Vo(n, r, i, a);
                    var d = n.memoizedState;
                    s !== _ || E !== d || Da.current || vo ? ("function" == typeof m && (rs(n, t, m, r),
                    d = n.memoizedState),
                    (u = vo || os(n, t, u, r, E, d, l) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, l),
                    "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, l)),
                    "function" == typeof i.componentDidUpdate && (n.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && E === e.memoizedState || (n.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && E === e.memoizedState || (n.flags |= 1024),
                    n.memoizedProps = r,
                    n.memoizedState = d),
                    i.props = r,
                    i.state = d,
                    i.context = l,
                    r = u) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && E === e.memoizedState || (n.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && E === e.memoizedState || (n.flags |= 1024),
                    r = !1)
                }
                return Ps(e, n, t, r, o, a)
            }
            function Ps(e, n, t, r, a, o) {
                Ls(e, n);
                var i = !!(128 & n.flags);
                if (!r && !i)
                    return a && Fa(n, t, !1),
                    Xs(e, n, o);
                r = n.stateNode,
                Ss.current = n;
                var s = i && "function" != typeof t.getDerivedStateFromError ? null : r.render();
                return n.flags |= 1,
                null !== e && i ? (n.child = Co(n, e.child, null, o),
                n.child = Co(n, null, s, o)) : Ns(e, n, s, o),
                n.memoizedState = r.state,
                a && Fa(n, t, !0),
                n.child
            }
            function Ds(e) {
                var n = e.stateNode;
                n.pendingContext ? ba(0, n.pendingContext, n.pendingContext !== n.context) : n.context && ba(0, n.context, !1),
                jo(e, n.containerInfo)
            }
            function Ms(e, n, t, r, a) {
                return mo(),
                fo(a),
                n.flags |= 256,
                Ns(e, n, t, r),
                n.child
            }
            var ys, Us, ws, bs, ks = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function vs(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Fs(e, n, t) {
                var r, a = n.pendingProps, i = ei.current, s = !1, l = !!(128 & n.flags);
                if ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & i)),
                r ? (s = !0,
                n.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1),
                Ra(ei, 1 & i),
                null === e)
                    return uo(n),
                    null !== (e = n.memoizedState) && null !== (e = e.dehydrated) ? (1 & n.mode ? "$!" === e.data ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1,
                    null) : (l = a.children,
                    e = a.fallback,
                    s ? (a = n.mode,
                    s = n.child,
                    l = {
                        mode: "hidden",
                        children: l
                    },
                    1 & a || null === s ? s = vu(l, a, 0, null) : (s.childLanes = 0,
                    s.pendingProps = l),
                    e = ku(e, a, t, null),
                    s.return = n,
                    e.return = n,
                    s.sibling = e,
                    n.child = s,
                    n.child.memoizedState = vs(t),
                    n.memoizedState = ks,
                    e) : Bs(n, l));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
                    return function(e, n, t, r, a, i, s) {
                        if (t)
                            return 256 & n.flags ? (n.flags &= -257,
                            xs(e, n, s, r = cs(Error(o(422))))) : null !== n.memoizedState ? (n.child = e.child,
                            n.flags |= 128,
                            null) : (i = r.fallback,
                            a = n.mode,
                            r = vu({
                                mode: "visible",
                                children: r.children
                            }, a, 0, null),
                            (i = ku(i, a, s, null)).flags |= 2,
                            r.return = n,
                            i.return = n,
                            r.sibling = i,
                            n.child = r,
                            1 & n.mode && Co(n, e.child, null, s),
                            n.child.memoizedState = vs(s),
                            n.memoizedState = ks,
                            i);
                        if (!(1 & n.mode))
                            return xs(e, n, s, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset)
                                var l = r.dgst;
                            return r = l,
                            xs(e, n, s, r = cs(i = Error(o(419)), r, void 0))
                        }
                        if (l = !!(s & e.childLanes),
                        Os || l) {
                            if (null !== (r = Dl)) {
                                switch (s & -s) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
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
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                                }
                                0 !== (a = a & (r.suspendedLanes | s) ? 0 : a) && a !== i.retryLane && (i.retryLane = a,
                                ko(e, a),
                                tu(r, e, a, -1))
                            }
                            return fu(),
                            xs(e, n, s, r = cs(Error(o(421))))
                        }
                        return "$?" === a.data ? (n.flags |= 128,
                        n.child = e.child,
                        n = gu.bind(null, e),
                        a._reactRetry = n,
                        null) : (e = i.treeContext,
                        ro = ua(a.nextSibling),
                        to = n,
                        ao = !0,
                        oo = null,
                        null !== e && (Ya[qa++] = ja,
                        Ya[qa++] = $a,
                        Ya[qa++] = za,
                        ja = e.id,
                        $a = e.overflow,
                        za = n),
                        (n = Bs(n, r.children)).flags |= 4096,
                        n)
                    }(e, n, l, a, r, i, t);
                if (s) {
                    s = a.fallback,
                    l = n.mode,
                    r = (i = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 1 & l || n.child === i ? (a = wu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags : ((a = n.child).childLanes = 0,
                    a.pendingProps = u,
                    n.deletions = null),
                    null !== r ? s = wu(r, s) : (s = ku(s, l, t, null)).flags |= 2,
                    s.return = n,
                    a.return = n,
                    a.sibling = s,
                    n.child = a,
                    a = s,
                    s = n.child,
                    l = null === (l = e.child.memoizedState) ? vs(t) : {
                        baseLanes: l.baseLanes | t,
                        cachePool: null,
                        transitions: l.transitions
                    },
                    s.memoizedState = l,
                    s.childLanes = e.childLanes & ~t,
                    n.memoizedState = ks,
                    a
                }
                return e = (s = e.child).sibling,
                a = wu(s, {
                    mode: "visible",
                    children: a.children
                }),
                !(1 & n.mode) && (a.lanes = t),
                a.return = n,
                a.sibling = null,
                null !== e && (null === (t = n.deletions) ? (n.deletions = [e],
                n.flags |= 16) : t.push(e)),
                n.child = a,
                n.memoizedState = null,
                a
            }
            function Bs(e, n) {
                return (n = vu({
                    mode: "visible",
                    children: n
                }, e.mode, 0, null)).return = e,
                e.child = n
            }
            function xs(e, n, t, r) {
                return null !== r && fo(r),
                Co(n, e.child, null, t),
                (e = Bs(n, n.pendingProps.children)).flags |= 2,
                n.memoizedState = null,
                e
            }
            function Gs(e, n, t) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n),
                Do(e.return, n, t)
            }
            function Hs(e, n, t, r, a) {
                var o = e.memoizedState;
                null === o ? e.memoizedState = {
                    isBackwards: n,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: t,
                    tailMode: a
                } : (o.isBackwards = n,
                o.rendering = null,
                o.renderingStartTime = 0,
                o.last = r,
                o.tail = t,
                o.tailMode = a)
            }
            function Js(e, n, t) {
                var r = n.pendingProps
                  , a = r.revealOrder
                  , o = r.tail;
                if (Ns(e, n, r.children, t),
                2 & (r = ei.current))
                    r = 1 & r | 2,
                    n.flags |= 128;
                else {
                    if (null !== e && 128 & e.flags)
                        e: for (e = n.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && Gs(e, t, n);
                            else if (19 === e.tag)
                                Gs(e, t, n);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === n)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === n)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (Ra(ei, r),
                1 & n.mode)
                    switch (a) {
                    case "forwards":
                        for (t = n.child,
                        a = null; null !== t; )
                            null !== (e = t.alternate) && null === ni(e) && (a = t),
                            t = t.sibling;
                        null === (t = a) ? (a = n.child,
                        n.child = null) : (a = t.sibling,
                        t.sibling = null),
                        Hs(n, !1, a, t, o);
                        break;
                    case "backwards":
                        for (t = null,
                        a = n.child,
                        n.child = null; null !== a; ) {
                            if (null !== (e = a.alternate) && null === ni(e)) {
                                n.child = a;
                                break
                            }
                            e = a.sibling,
                            a.sibling = t,
                            t = a,
                            a = e
                        }
                        Hs(n, !0, t, null, o);
                        break;
                    case "together":
                        Hs(n, !1, null, null, void 0);
                        break;
                    default:
                        n.memoizedState = null
                    }
                else
                    n.memoizedState = null;
                return n.child
            }
            function Vs(e, n) {
                !(1 & n.mode) && null !== e && (e.alternate = null,
                n.alternate = null,
                n.flags |= 2)
            }
            function Xs(e, n, t) {
                if (null !== e && (n.dependencies = e.dependencies),
                vl |= n.lanes,
                !(t & n.childLanes))
                    return null;
                if (null !== e && n.child !== e.child)
                    throw Error(o(153));
                if (null !== n.child) {
                    for (t = wu(e = n.child, e.pendingProps),
                    n.child = t,
                    t.return = n; null !== e.sibling; )
                        e = e.sibling,
                        (t = t.sibling = wu(e, e.pendingProps)).return = n;
                    t.sibling = null
                }
                return n.child
            }
            function Ws(e, n) {
                if (!ao)
                    switch (e.tailMode) {
                    case "hidden":
                        n = e.tail;
                        for (var t = null; null !== n; )
                            null !== n.alternate && (t = n),
                            n = n.sibling;
                        null === t ? e.tail = null : t.sibling = null;
                        break;
                    case "collapsed":
                        t = e.tail;
                        for (var r = null; null !== t; )
                            null !== t.alternate && (r = t),
                            t = t.sibling;
                        null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Ks(e) {
                var n = null !== e.alternate && e.alternate.child === e.child
                  , t = 0
                  , r = 0;
                if (n)
                    for (var a = e.child; null !== a; )
                        t |= a.lanes | a.childLanes,
                        r |= 14680064 & a.subtreeFlags,
                        r |= 14680064 & a.flags,
                        a.return = e,
                        a = a.sibling;
                else
                    for (a = e.child; null !== a; )
                        t |= a.lanes | a.childLanes,
                        r |= a.subtreeFlags,
                        r |= a.flags,
                        a.return = e,
                        a = a.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = t,
                n
            }
            function Ys(e, n, t) {
                var r = n.pendingProps;
                switch (no(n),
                n.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Ks(n),
                    null;
                case 1:
                case 17:
                    return Ua(n.type) && wa(),
                    Ks(n),
                    null;
                case 3:
                    return r = n.stateNode,
                    $o(),
                    La(Da),
                    La(Pa),
                    ri(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (_o(n) ? n.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & n.flags) || (n.flags |= 1024,
                    null !== oo && (iu(oo),
                    oo = null))),
                    Us(e, n),
                    Ks(n),
                    null;
                case 5:
                    Zo(n);
                    var a = zo(qo.current);
                    if (t = n.type,
                    null !== e && null != n.stateNode)
                        ws(e, n, t, r, a),
                        e.ref !== n.ref && (n.flags |= 512,
                        n.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === n.stateNode)
                                throw Error(o(166));
                            return Ks(n),
                            null
                        }
                        if (e = zo(Ko.current),
                        _o(n)) {
                            r = n.stateNode,
                            t = n.type;
                            var i = n.memoizedProps;
                            switch (r[Ea] = n,
                            r[ma] = i,
                            e = !!(1 & n.mode),
                            t) {
                            case "dialog":
                                xr("cancel", r),
                                xr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                xr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < kr.length; a++)
                                    xr(kr[a], r);
                                break;
                            case "source":
                                xr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                xr("error", r),
                                xr("load", r);
                                break;
                            case "details":
                                xr("toggle", r);
                                break;
                            case "input":
                                j(r, i),
                                xr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                },
                                xr("invalid", r);
                                break;
                            case "textarea":
                                ae(r, i),
                                xr("invalid", r)
                            }
                            for (var l in Se(t, i),
                            a = null,
                            i)
                                if (i.hasOwnProperty(l)) {
                                    var u = i[l];
                                    "children" === l ? "string" == typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Qr(r.textContent, u, e),
                                    a = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Qr(r.textContent, u, e),
                                    a = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && xr("scroll", r)
                                }
                            switch (t) {
                            case "input":
                                K(r),
                                Z(r, i, !0);
                                break;
                            case "textarea":
                                K(r),
                                ie(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof i.onClick && (r.onclick = Zr)
                            }
                            r = a,
                            n.updateQueue = r,
                            null !== r && (n.flags |= 4)
                        } else {
                            l = 9 === a.nodeType ? a : a.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = se(t)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === t ? ((e = l.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(t, {
                                is: r.is
                            }) : (e = l.createElement(t),
                            "select" === t && (l = e,
                            r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, t),
                            e[Ea] = n,
                            e[ma] = r,
                            ys(e, n, !1, !1),
                            n.stateNode = e;
                            e: {
                                switch (l = Oe(t, r),
                                t) {
                                case "dialog":
                                    xr("cancel", e),
                                    xr("close", e),
                                    a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    xr("load", e),
                                    a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < kr.length; a++)
                                        xr(kr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    xr("error", e),
                                    a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    xr("error", e),
                                    xr("load", e),
                                    a = r;
                                    break;
                                case "details":
                                    xr("toggle", e),
                                    a = r;
                                    break;
                                case "input":
                                    j(e, r),
                                    a = z(e, r),
                                    xr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    a = F({}, r, {
                                        value: void 0
                                    }),
                                    xr("invalid", e);
                                    break;
                                case "textarea":
                                    ae(e, r),
                                    a = re(e, r),
                                    xr("invalid", e)
                                }
                                for (i in Se(t, a),
                                u = a)
                                    if (u.hasOwnProperty(i)) {
                                        var c = u[i];
                                        "style" === i ? Te(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && _e(e, c) : "children" === i ? "string" == typeof c ? ("textarea" !== t || "" !== c) && Ee(e, c) : "number" == typeof c && Ee(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (s.hasOwnProperty(i) ? null != c && "onScroll" === i && xr("scroll", e) : null != c && O(e, i, c, l))
                                    }
                                switch (t) {
                                case "input":
                                    K(e),
                                    Z(e, r, !1);
                                    break;
                                case "textarea":
                                    K(e),
                                    ie(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + X(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (i = r.value) ? te(e, !!r.multiple, i, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" == typeof a.onClick && (e.onclick = Zr)
                                }
                                switch (t) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                            }
                            r && (n.flags |= 4)
                        }
                        null !== n.ref && (n.flags |= 512,
                        n.flags |= 2097152)
                    }
                    return Ks(n),
                    null;
                case 6:
                    if (e && null != n.stateNode)
                        bs(e, n, e.memoizedProps, r);
                    else {
                        if ("string" != typeof r && null === n.stateNode)
                            throw Error(o(166));
                        if (t = zo(qo.current),
                        zo(Ko.current),
                        _o(n)) {
                            if (r = n.stateNode,
                            t = n.memoizedProps,
                            r[Ea] = n,
                            (i = r.nodeValue !== t) && null !== (e = to))
                                switch (e.tag) {
                                case 3:
                                    Qr(r.nodeValue, t, !!(1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && Qr(r.nodeValue, t, !!(1 & e.mode))
                                }
                            i && (n.flags |= 4)
                        } else
                            (r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[Ea] = n,
                            n.stateNode = r
                    }
                    return Ks(n),
                    null;
                case 13:
                    if (La(ei),
                    r = n.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (ao && null !== ro && 1 & n.mode && !(128 & n.flags))
                            Eo(),
                            mo(),
                            n.flags |= 98560,
                            i = !1;
                        else if (i = _o(n),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!i)
                                    throw Error(o(318));
                                if (!(i = null !== (i = n.memoizedState) ? i.dehydrated : null))
                                    throw Error(o(317));
                                i[Ea] = n
                            } else
                                mo(),
                                !(128 & n.flags) && (n.memoizedState = null),
                                n.flags |= 4;
                            Ks(n),
                            i = !1
                        } else
                            null !== oo && (iu(oo),
                            oo = null),
                            i = !0;
                        if (!i)
                            return 65536 & n.flags ? n : null
                    }
                    return 128 & n.flags ? (n.lanes = t,
                    n) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (n.child.flags |= 8192,
                    1 & n.mode && (null === e || 1 & ei.current ? 0 === bl && (bl = 3) : fu())),
                    null !== n.updateQueue && (n.flags |= 4),
                    Ks(n),
                    null);
                case 4:
                    return $o(),
                    Us(e, n),
                    null === e && Jr(n.stateNode.containerInfo),
                    Ks(n),
                    null;
                case 10:
                    return Po(n.type._context),
                    Ks(n),
                    null;
                case 19:
                    if (La(ei),
                    null === (i = n.memoizedState))
                        return Ks(n),
                        null;
                    if (r = !!(128 & n.flags),
                    null === (l = i.rendering))
                        if (r)
                            Ws(i, !1);
                        else {
                            if (0 !== bl || null !== e && 128 & e.flags)
                                for (e = n.child; null !== e; ) {
                                    if (null !== (l = ni(e))) {
                                        for (n.flags |= 128,
                                        Ws(i, !1),
                                        null !== (r = l.updateQueue) && (n.updateQueue = r,
                                        n.flags |= 4),
                                        n.subtreeFlags = 0,
                                        r = t,
                                        t = n.child; null !== t; )
                                            e = r,
                                            (i = t).flags &= 14680066,
                                            null === (l = i.alternate) ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = l.childLanes,
                                            i.lanes = l.lanes,
                                            i.child = l.child,
                                            i.subtreeFlags = 0,
                                            i.deletions = null,
                                            i.memoizedProps = l.memoizedProps,
                                            i.memoizedState = l.memoizedState,
                                            i.updateQueue = l.updateQueue,
                                            i.type = l.type,
                                            e = l.dependencies,
                                            i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            t = t.sibling;
                                        return Ra(ei, 1 & ei.current | 2),
                                        n.child
                                    }
                                    e = e.sibling
                                }
                            null !== i.tail && $e() > Jl && (n.flags |= 128,
                            r = !0,
                            Ws(i, !1),
                            n.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = ni(l))) {
                                if (n.flags |= 128,
                                r = !0,
                                null !== (t = e.updateQueue) && (n.updateQueue = t,
                                n.flags |= 4),
                                Ws(i, !0),
                                null === i.tail && "hidden" === i.tailMode && !l.alternate && !ao)
                                    return Ks(n),
                                    null
                            } else
                                2 * $e() - i.renderingStartTime > Jl && 1073741824 !== t && (n.flags |= 128,
                                r = !0,
                                Ws(i, !1),
                                n.lanes = 4194304);
                        i.isBackwards ? (l.sibling = n.child,
                        n.child = l) : (null !== (t = i.last) ? t.sibling = l : n.child = l,
                        i.last = l)
                    }
                    return null !== i.tail ? (n = i.tail,
                    i.rendering = n,
                    i.tail = n.sibling,
                    i.renderingStartTime = $e(),
                    n.sibling = null,
                    t = ei.current,
                    Ra(ei, r ? 1 & t | 2 : 1 & t),
                    n) : (Ks(n),
                    null);
                case 22:
                case 23:
                    return _u(),
                    r = null !== n.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (n.flags |= 8192),
                    r && 1 & n.mode ? !!(1073741824 & Ul) && (Ks(n),
                    6 & n.subtreeFlags && (n.flags |= 8192)) : Ks(n),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(o(156, n.tag))
            }
            function qs(e, n) {
                switch (no(n),
                n.tag) {
                case 1:
                    return Ua(n.type) && wa(),
                    65536 & (e = n.flags) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 3:
                    return $o(),
                    La(Da),
                    La(Pa),
                    ri(),
                    65536 & (e = n.flags) && !(128 & e) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 5:
                    return Zo(n),
                    null;
                case 13:
                    if (La(ei),
                    null !== (e = n.memoizedState) && null !== e.dehydrated) {
                        if (null === n.alternate)
                            throw Error(o(340));
                        mo()
                    }
                    return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 19:
                    return La(ei),
                    null;
                case 4:
                    return $o(),
                    null;
                case 10:
                    return Po(n.type._context),
                    null;
                case 22:
                case 23:
                    return _u(),
                    null;
                default:
                    return null
                }
            }
            ys = function(e, n) {
                for (var t = n.child; null !== t; ) {
                    if (5 === t.tag || 6 === t.tag)
                        e.appendChild(t.stateNode);
                    else if (4 !== t.tag && null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === n)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === n)
                            return;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            ,
            Us = function() {}
            ,
            ws = function(e, n, t, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = n.stateNode,
                    zo(Ko.current);
                    var o, i = null;
                    switch (t) {
                    case "input":
                        a = z(e, a),
                        r = z(e, r),
                        i = [];
                        break;
                    case "select":
                        a = F({}, a, {
                            value: void 0
                        }),
                        r = F({}, r, {
                            value: void 0
                        }),
                        i = [];
                        break;
                    case "textarea":
                        a = re(e, a),
                        r = re(e, r),
                        i = [];
                        break;
                    default:
                        "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr)
                    }
                    for (c in Se(t, r),
                    t = null,
                    a)
                        if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                            if ("style" === c) {
                                var l = a[c];
                                for (o in l)
                                    l.hasOwnProperty(o) && (t || (t = {}),
                                    t[o] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (l = null != a ? a[c] : void 0,
                        r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                            if ("style" === c)
                                if (l) {
                                    for (o in l)
                                        !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (t || (t = {}),
                                        t[o] = "");
                                    for (o in u)
                                        u.hasOwnProperty(o) && l[o] !== u[o] && (t || (t = {}),
                                        t[o] = u[o])
                                } else
                                    t || (i || (i = []),
                                    i.push(c, t)),
                                    t = u;
                            else
                                "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0,
                                l = l ? l.__html : void 0,
                                null != u && l !== u && (i = i || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && xr("scroll", e),
                                i || l === u || (i = [])) : (i = i || []).push(c, u))
                    }
                    t && (i = i || []).push("style", t);
                    var c = i;
                    (n.updateQueue = c) && (n.flags |= 4)
                }
            }
            ,
            bs = function(e, n, t, r) {
                t !== r && (n.flags |= 4)
            }
            ;
            var zs = !1
              , js = !1
              , $s = "function" == typeof WeakSet ? WeakSet : Set
              , Qs = null;
            function Zs(e, n) {
                var t = e.ref;
                if (null !== t)
                    if ("function" == typeof t)
                        try {
                            t(null)
                        } catch (t) {
                            hu(e, n, t)
                        }
                    else
                        t.current = null
            }
            function el(e, n, t) {
                try {
                    t()
                } catch (t) {
                    hu(e, n, t)
                }
            }
            var nl = !1;
            function tl(e, n, t) {
                var r = n.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var o = a.destroy;
                            a.destroy = void 0,
                            void 0 !== o && el(n, t, o)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }
            function rl(e, n) {
                if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                    var t = n = n.next;
                    do {
                        if ((t.tag & e) === e) {
                            var r = t.create;
                            t.destroy = r()
                        }
                        t = t.next
                    } while (t !== n)
                }
            }
            function al(e) {
                var n = e.ref;
                if (null !== n) {
                    var t = e.stateNode;
                    e.tag,
                    e = t,
                    "function" == typeof n ? n(e) : n.current = e
                }
            }
            function ol(e) {
                var n = e.alternate;
                null !== n && (e.alternate = null,
                ol(n)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && null !== (n = e.stateNode) && (delete n[Ea],
                delete n[ma],
                delete n[fa],
                delete n[Ta],
                delete n[pa]),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function il(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function sl(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || il(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function ll(e, n, t) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    n ? 8 === t.nodeType ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e),
                    null != (t = t._reactRootContainer) || null !== n.onclick || (n.onclick = Zr));
                else if (4 !== r && null !== (e = e.child))
                    for (ll(e, n, t),
                    e = e.sibling; null !== e; )
                        ll(e, n, t),
                        e = e.sibling
            }
            function ul(e, n, t) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    n ? t.insertBefore(e, n) : t.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (ul(e, n, t),
                    e = e.sibling; null !== e; )
                        ul(e, n, t),
                        e = e.sibling
            }
            var cl = null
              , _l = !1;
            function El(e, n, t) {
                for (t = t.child; null !== t; )
                    ml(e, n, t),
                    t = t.sibling
            }
            function ml(e, n, t) {
                if (on && "function" == typeof on.onCommitFiberUnmount)
                    try {
                        on.onCommitFiberUnmount(an, t)
                    } catch (e) {}
                switch (t.tag) {
                case 5:
                    js || Zs(t, n);
                case 6:
                    var r = cl
                      , a = _l;
                    cl = null,
                    El(e, n, t),
                    _l = a,
                    null !== (cl = r) && (_l ? (e = cl,
                    t = t.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)) : cl.removeChild(t.stateNode));
                    break;
                case 18:
                    null !== cl && (_l ? (e = cl,
                    t = t.stateNode,
                    8 === e.nodeType ? la(e.parentNode, t) : 1 === e.nodeType && la(e, t),
                    Vn(e)) : la(cl, t.stateNode));
                    break;
                case 4:
                    r = cl,
                    a = _l,
                    cl = t.stateNode.containerInfo,
                    _l = !0,
                    El(e, n, t),
                    cl = r,
                    _l = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!js && null !== (r = t.updateQueue) && null !== (r = r.lastEffect)) {
                        a = r = r.next;
                        do {
                            var o = a
                              , i = o.destroy;
                            o = o.tag,
                            void 0 !== i && (2 & o || 4 & o) && el(t, n, i),
                            a = a.next
                        } while (a !== r)
                    }
                    El(e, n, t);
                    break;
                case 1:
                    if (!js && (Zs(t, n),
                    "function" == typeof (r = t.stateNode).componentWillUnmount))
                        try {
                            r.props = t.memoizedProps,
                            r.state = t.memoizedState,
                            r.componentWillUnmount()
                        } catch (e) {
                            hu(t, n, e)
                        }
                    El(e, n, t);
                    break;
                case 21:
                    El(e, n, t);
                    break;
                case 22:
                    1 & t.mode ? (js = (r = js) || null !== t.memoizedState,
                    El(e, n, t),
                    js = r) : El(e, n, t);
                    break;
                default:
                    El(e, n, t)
                }
            }
            function dl(e) {
                var n = e.updateQueue;
                if (null !== n) {
                    e.updateQueue = null;
                    var t = e.stateNode;
                    null === t && (t = e.stateNode = new $s),
                    n.forEach((function(n) {
                        var r = Pu.bind(null, e, n);
                        t.has(n) || (t.add(n),
                        n.then(r, r))
                    }
                    ))
                }
            }
            function fl(e, n) {
                var t = n.deletions;
                if (null !== t)
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        try {
                            var i = e
                              , s = n
                              , l = s;
                            e: for (; null !== l; ) {
                                switch (l.tag) {
                                case 5:
                                    cl = l.stateNode,
                                    _l = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cl = l.stateNode.containerInfo,
                                    _l = !0;
                                    break e
                                }
                                l = l.return
                            }
                            if (null === cl)
                                throw Error(o(160));
                            ml(i, s, a),
                            cl = null,
                            _l = !1;
                            var u = a.alternate;
                            null !== u && (u.return = null),
                            a.return = null
                        } catch (e) {
                            hu(a, n, e)
                        }
                    }
                if (12854 & n.subtreeFlags)
                    for (n = n.child; null !== n; )
                        Tl(n, e),
                        n = n.sibling
            }
            function Tl(e, n) {
                var t = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (fl(n, e),
                    pl(e),
                    4 & r) {
                        try {
                            tl(3, e, e.return),
                            rl(3, e)
                        } catch (n) {
                            hu(e, e.return, n)
                        }
                        try {
                            tl(5, e, e.return)
                        } catch (n) {
                            hu(e, e.return, n)
                        }
                    }
                    break;
                case 1:
                    fl(n, e),
                    pl(e),
                    512 & r && null !== t && Zs(t, t.return);
                    break;
                case 5:
                    if (fl(n, e),
                    pl(e),
                    512 & r && null !== t && Zs(t, t.return),
                    32 & e.flags) {
                        var a = e.stateNode;
                        try {
                            Ee(a, "")
                        } catch (n) {
                            hu(e, e.return, n)
                        }
                    }
                    if (4 & r && null != (a = e.stateNode)) {
                        var i = e.memoizedProps
                          , s = null !== t ? t.memoizedProps : i
                          , l = e.type
                          , u = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== u)
                            try {
                                "input" === l && "radio" === i.type && null != i.name && $(a, i),
                                Oe(l, s);
                                var c = Oe(l, i);
                                for (s = 0; s < u.length; s += 2) {
                                    var _ = u[s]
                                      , E = u[s + 1];
                                    "style" === _ ? Te(a, E) : "dangerouslySetInnerHTML" === _ ? _e(a, E) : "children" === _ ? Ee(a, E) : O(a, _, E, c)
                                }
                                switch (l) {
                                case "input":
                                    Q(a, i);
                                    break;
                                case "textarea":
                                    oe(a, i);
                                    break;
                                case "select":
                                    var m = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!i.multiple;
                                    var d = i.value;
                                    null != d ? te(a, !!i.multiple, d, !1) : m !== !!i.multiple && (null != i.defaultValue ? te(a, !!i.multiple, i.defaultValue, !0) : te(a, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                a[ma] = i
                            } catch (n) {
                                hu(e, e.return, n)
                            }
                    }
                    break;
                case 6:
                    if (fl(n, e),
                    pl(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(o(162));
                        a = e.stateNode,
                        i = e.memoizedProps;
                        try {
                            a.nodeValue = i
                        } catch (n) {
                            hu(e, e.return, n)
                        }
                    }
                    break;
                case 3:
                    if (fl(n, e),
                    pl(e),
                    4 & r && null !== t && t.memoizedState.isDehydrated)
                        try {
                            Vn(n.containerInfo)
                        } catch (n) {
                            hu(e, e.return, n)
                        }
                    break;
                case 4:
                default:
                    fl(n, e),
                    pl(e);
                    break;
                case 13:
                    fl(n, e),
                    pl(e),
                    8192 & (a = e.child).flags && (i = null !== a.memoizedState,
                    a.stateNode.isHidden = i,
                    !i || null !== a.alternate && null !== a.alternate.memoizedState || (Hl = $e())),
                    4 & r && dl(e);
                    break;
                case 22:
                    if (_ = null !== t && null !== t.memoizedState,
                    1 & e.mode ? (js = (c = js) || _,
                    fl(n, e),
                    js = c) : fl(n, e),
                    pl(e),
                    8192 & r) {
                        if (c = null !== e.memoizedState,
                        (e.stateNode.isHidden = c) && !_ && 1 & e.mode)
                            for (Qs = e,
                            _ = e.child; null !== _; ) {
                                for (E = Qs = _; null !== Qs; ) {
                                    switch (d = (m = Qs).child,
                                    m.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        tl(4, m, m.return);
                                        break;
                                    case 1:
                                        Zs(m, m.return);
                                        var f = m.stateNode;
                                        if ("function" == typeof f.componentWillUnmount) {
                                            r = m,
                                            t = m.return;
                                            try {
                                                n = r,
                                                f.props = n.memoizedProps,
                                                f.state = n.memoizedState,
                                                f.componentWillUnmount()
                                            } catch (e) {
                                                hu(r, t, e)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Zs(m, m.return);
                                        break;
                                    case 22:
                                        if (null !== m.memoizedState) {
                                            Cl(E);
                                            continue
                                        }
                                    }
                                    null !== d ? (d.return = m,
                                    Qs = d) : Cl(E)
                                }
                                _ = _.sibling
                            }
                        e: for (_ = null,
                        E = e; ; ) {
                            if (5 === E.tag) {
                                if (null === _) {
                                    _ = E;
                                    try {
                                        a = E.stateNode,
                                        c ? "function" == typeof (i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (l = E.stateNode,
                                        s = null != (u = E.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null,
                                        l.style.display = fe("display", s))
                                    } catch (n) {
                                        hu(e, e.return, n)
                                    }
                                }
                            } else if (6 === E.tag) {
                                if (null === _)
                                    try {
                                        E.stateNode.nodeValue = c ? "" : E.memoizedProps
                                    } catch (n) {
                                        hu(e, e.return, n)
                                    }
                            } else if ((22 !== E.tag && 23 !== E.tag || null === E.memoizedState || E === e) && null !== E.child) {
                                E.child.return = E,
                                E = E.child;
                                continue
                            }
                            if (E === e)
                                break e;
                            for (; null === E.sibling; ) {
                                if (null === E.return || E.return === e)
                                    break e;
                                _ === E && (_ = null),
                                E = E.return
                            }
                            _ === E && (_ = null),
                            E.sibling.return = E.return,
                            E = E.sibling
                        }
                    }
                    break;
                case 19:
                    fl(n, e),
                    pl(e),
                    4 & r && dl(e);
                case 21:
                }
            }
            function pl(e) {
                var n = e.flags;
                if (2 & n) {
                    try {
                        e: {
                            for (var t = e.return; null !== t; ) {
                                if (il(t)) {
                                    var r = t;
                                    break e
                                }
                                t = t.return
                            }
                            throw Error(o(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var a = r.stateNode;
                            32 & r.flags && (Ee(a, ""),
                            r.flags &= -33),
                            ul(e, sl(e), a);
                            break;
                        case 3:
                        case 4:
                            var i = r.stateNode.containerInfo;
                            ll(e, sl(e), i);
                            break;
                        default:
                            throw Error(o(161))
                        }
                    } catch (n) {
                        hu(e, e.return, n)
                    }
                    e.flags &= -3
                }
                4096 & n && (e.flags &= -4097)
            }
            function Sl(e, n, t) {
                Qs = e,
                Ol(e, n, t)
            }
            function Ol(e, n, t) {
                for (var r = !!(1 & e.mode); null !== Qs; ) {
                    var a = Qs
                      , o = a.child;
                    if (22 === a.tag && r) {
                        var i = null !== a.memoizedState || zs;
                        if (!i) {
                            var s = a.alternate
                              , l = null !== s && null !== s.memoizedState || js;
                            s = zs;
                            var u = js;
                            if (zs = i,
                            (js = l) && !u)
                                for (Qs = a; null !== Qs; )
                                    l = (i = Qs).child,
                                    22 === i.tag && null !== i.memoizedState ? Al(a) : null !== l ? (l.return = i,
                                    Qs = l) : Al(a);
                            for (; null !== o; )
                                Qs = o,
                                Ol(o, n, t),
                                o = o.sibling;
                            Qs = a,
                            zs = s,
                            js = u
                        }
                        Nl(e)
                    } else
                        8772 & a.subtreeFlags && null !== o ? (o.return = a,
                        Qs = o) : Nl(e)
                }
            }
            function Nl(e) {
                for (; null !== Qs; ) {
                    var n = Qs;
                    if (8772 & n.flags) {
                        var t = n.alternate;
                        try {
                            if (8772 & n.flags)
                                switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    js || rl(5, n);
                                    break;
                                case 1:
                                    var r = n.stateNode;
                                    if (4 & n.flags && !js)
                                        if (null === t)
                                            r.componentDidMount();
                                        else {
                                            var a = n.elementType === n.type ? t.memoizedProps : ts(n.type, t.memoizedProps);
                                            r.componentDidUpdate(a, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var i = n.updateQueue;
                                    null !== i && Xo(n, i, r);
                                    break;
                                case 3:
                                    var s = n.updateQueue;
                                    if (null !== s) {
                                        if (t = null,
                                        null !== n.child)
                                            switch (n.child.tag) {
                                            case 5:
                                            case 1:
                                                t = n.child.stateNode
                                            }
                                        Xo(n, s, t)
                                    }
                                    break;
                                case 5:
                                    var l = n.stateNode;
                                    if (null === t && 4 & n.flags) {
                                        t = l;
                                        var u = n.memoizedProps;
                                        switch (n.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && t.focus();
                                            break;
                                        case "img":
                                            u.src && (t.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === n.memoizedState) {
                                        var c = n.alternate;
                                        if (null !== c) {
                                            var _ = c.memoizedState;
                                            if (null !== _) {
                                                var E = _.dehydrated;
                                                null !== E && Vn(E)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(o(163))
                                }
                            js || 512 & n.flags && al(n)
                        } catch (e) {
                            hu(n, n.return, e)
                        }
                    }
                    if (n === e) {
                        Qs = null;
                        break
                    }
                    if (null !== (t = n.sibling)) {
                        t.return = n.return,
                        Qs = t;
                        break
                    }
                    Qs = n.return
                }
            }
            function Cl(e) {
                for (; null !== Qs; ) {
                    var n = Qs;
                    if (n === e) {
                        Qs = null;
                        break
                    }
                    var t = n.sibling;
                    if (null !== t) {
                        t.return = n.return,
                        Qs = t;
                        break
                    }
                    Qs = n.return
                }
            }
            function Al(e) {
                for (; null !== Qs; ) {
                    var n = Qs;
                    try {
                        switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var t = n.return;
                            try {
                                rl(4, n)
                            } catch (e) {
                                hu(n, t, e)
                            }
                            break;
                        case 1:
                            var r = n.stateNode;
                            if ("function" == typeof r.componentDidMount) {
                                var a = n.return;
                                try {
                                    r.componentDidMount()
                                } catch (e) {
                                    hu(n, a, e)
                                }
                            }
                            var o = n.return;
                            try {
                                al(n)
                            } catch (e) {
                                hu(n, o, e)
                            }
                            break;
                        case 5:
                            var i = n.return;
                            try {
                                al(n)
                            } catch (e) {
                                hu(n, i, e)
                            }
                        }
                    } catch (e) {
                        hu(n, n.return, e)
                    }
                    if (n === e) {
                        Qs = null;
                        break
                    }
                    var s = n.sibling;
                    if (null !== s) {
                        s.return = n.return,
                        Qs = s;
                        break
                    }
                    Qs = n.return
                }
            }
            var Il, hl = Math.ceil, Ll = N.ReactCurrentDispatcher, Rl = N.ReactCurrentOwner, gl = N.ReactCurrentBatchConfig, Pl = 0, Dl = null, Ml = null, yl = 0, Ul = 0, wl = ha(0), bl = 0, kl = null, vl = 0, Fl = 0, Bl = 0, xl = null, Gl = null, Hl = 0, Jl = 1 / 0, Vl = null, Xl = !1, Wl = null, Kl = null, Yl = !1, ql = null, zl = 0, jl = 0, $l = null, Ql = -1, Zl = 0;
            function eu() {
                return 6 & Pl ? $e() : -1 !== Ql ? Ql : Ql = $e()
            }
            function nu(e) {
                return 1 & e.mode ? 2 & Pl && 0 !== yl ? yl & -yl : null !== To.transition ? (0 === Zl && (Zl = Tn()),
                Zl) : 0 !== (e = Nn) ? e : e = void 0 === (e = window.event) ? 16 : $n(e.type) : 1
            }
            function tu(e, n, t, r) {
                if (50 < jl)
                    throw jl = 0,
                    $l = null,
                    Error(o(185));
                Sn(e, t, r),
                2 & Pl && e === Dl || (e === Dl && (!(2 & Pl) && (Fl |= t),
                4 === bl && su(e, yl)),
                ru(e, r),
                1 === t && 0 === Pl && !(1 & n.mode) && (Jl = $e() + 500,
                xa && Ja()))
            }
            function ru(e, n) {
                var t = e.callbackNode;
                !function(e, n) {
                    for (var t = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
                        var i = 31 - sn(o)
                          , s = 1 << i
                          , l = a[i];
                        -1 === l ? s & t && !(s & r) || (a[i] = dn(s, n)) : l <= n && (e.expiredLanes |= s),
                        o &= ~s
                    }
                }(e, n);
                var r = mn(e, e === Dl ? yl : 0);
                if (0 === r)
                    null !== t && qe(t),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (n = r & -r,
                e.callbackPriority !== n) {
                    if (null != t && qe(t),
                    1 === n)
                        0 === e.tag ? function(e) {
                            xa = !0,
                            Ha(e)
                        }(lu.bind(null, e)) : Ha(lu.bind(null, e)),
                        ia((function() {
                            !(6 & Pl) && Ja()
                        }
                        )),
                        t = null;
                    else {
                        switch (Cn(r)) {
                        case 1:
                            t = Ze;
                            break;
                        case 4:
                            t = en;
                            break;
                        case 16:
                        default:
                            t = nn;
                            break;
                        case 536870912:
                            t = rn
                        }
                        t = Du(t, au.bind(null, e))
                    }
                    e.callbackPriority = n,
                    e.callbackNode = t
                }
            }
            function au(e, n) {
                if (Ql = -1,
                Zl = 0,
                6 & Pl)
                    throw Error(o(327));
                var t = e.callbackNode;
                if (Au() && e.callbackNode !== t)
                    return null;
                var r = mn(e, e === Dl ? yl : 0);
                if (0 === r)
                    return null;
                if (30 & r || r & e.expiredLanes || n)
                    n = Tu(e, r);
                else {
                    n = r;
                    var a = Pl;
                    Pl |= 2;
                    var i = du();
                    for (Dl === e && yl === n || (Vl = null,
                    Jl = $e() + 500,
                    Eu(e, n)); ; )
                        try {
                            Su();
                            break
                        } catch (n) {
                            mu(e, n)
                        }
                    go(),
                    Ll.current = i,
                    Pl = a,
                    null !== Ml ? n = 0 : (Dl = null,
                    yl = 0,
                    n = bl)
                }
                if (0 !== n) {
                    if (2 === n && 0 !== (a = fn(e)) && (r = a,
                    n = ou(e, a)),
                    1 === n)
                        throw t = kl,
                        Eu(e, 0),
                        su(e, r),
                        ru(e, $e()),
                        t;
                    if (6 === n)
                        su(e, r);
                    else {
                        if (a = e.current.alternate,
                        !(30 & r || function(e) {
                            for (var n = e; ; ) {
                                if (16384 & n.flags) {
                                    var t = n.updateQueue;
                                    if (null !== t && null !== (t = t.stores))
                                        for (var r = 0; r < t.length; r++) {
                                            var a = t[r]
                                              , o = a.getSnapshot;
                                            a = a.value;
                                            try {
                                                if (!sr(o(), a))
                                                    return !1
                                            } catch (e) {
                                                return !1
                                            }
                                        }
                                }
                                if (t = n.child,
                                16384 & n.subtreeFlags && null !== t)
                                    t.return = n,
                                    n = t;
                                else {
                                    if (n === e)
                                        break;
                                    for (; null === n.sibling; ) {
                                        if (null === n.return || n.return === e)
                                            return !0;
                                        n = n.return
                                    }
                                    n.sibling.return = n.return,
                                    n = n.sibling
                                }
                            }
                            return !0
                        }(a) || (n = Tu(e, r),
                        2 === n && (i = fn(e),
                        0 !== i && (r = i,
                        n = ou(e, i))),
                        1 !== n)))
                            throw t = kl,
                            Eu(e, 0),
                            su(e, r),
                            ru(e, $e()),
                            t;
                        switch (e.finishedWork = a,
                        e.finishedLanes = r,
                        n) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 2:
                        case 5:
                            Cu(e, Gl, Vl);
                            break;
                        case 3:
                            if (su(e, r),
                            (130023424 & r) === r && 10 < (n = Hl + 500 - $e())) {
                                if (0 !== mn(e, 0))
                                    break;
                                if (((a = e.suspendedLanes) & r) !== r) {
                                    eu(),
                                    e.pingedLanes |= e.suspendedLanes & a;
                                    break
                                }
                                e.timeoutHandle = ra(Cu.bind(null, e, Gl, Vl), n);
                                break
                            }
                            Cu(e, Gl, Vl);
                            break;
                        case 4:
                            if (su(e, r),
                            (4194240 & r) === r)
                                break;
                            for (n = e.eventTimes,
                            a = -1; 0 < r; ) {
                                var s = 31 - sn(r);
                                i = 1 << s,
                                (s = n[s]) > a && (a = s),
                                r &= ~i
                            }
                            if (r = a,
                            10 < (r = (120 > (r = $e() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hl(r / 1960)) - r)) {
                                e.timeoutHandle = ra(Cu.bind(null, e, Gl, Vl), r);
                                break
                            }
                            Cu(e, Gl, Vl);
                            break;
                        default:
                            throw Error(o(329))
                        }
                    }
                }
                return ru(e, $e()),
                e.callbackNode === t ? au.bind(null, e) : null
            }
            function ou(e, n) {
                var t = xl;
                return e.current.memoizedState.isDehydrated && (Eu(e, n).flags |= 256),
                2 !== (e = Tu(e, n)) && (n = Gl,
                Gl = t,
                null !== n && iu(n)),
                e
            }
            function iu(e) {
                null === Gl ? Gl = e : Gl.push.apply(Gl, e)
            }
            function su(e, n) {
                for (n &= ~Bl,
                n &= ~Fl,
                e.suspendedLanes |= n,
                e.pingedLanes &= ~n,
                e = e.expirationTimes; 0 < n; ) {
                    var t = 31 - sn(n)
                      , r = 1 << t;
                    e[t] = -1,
                    n &= ~r
                }
            }
            function lu(e) {
                if (6 & Pl)
                    throw Error(o(327));
                Au();
                var n = mn(e, 0);
                if (!(1 & n))
                    return ru(e, $e()),
                    null;
                var t = Tu(e, n);
                if (0 !== e.tag && 2 === t) {
                    var r = fn(e);
                    0 !== r && (n = r,
                    t = ou(e, r))
                }
                if (1 === t)
                    throw t = kl,
                    Eu(e, 0),
                    su(e, n),
                    ru(e, $e()),
                    t;
                if (6 === t)
                    throw Error(o(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = n,
                Cu(e, Gl, Vl),
                ru(e, $e()),
                null
            }
            function uu(e, n) {
                var t = Pl;
                Pl |= 1;
                try {
                    return e(n)
                } finally {
                    0 === (Pl = t) && (Jl = $e() + 500,
                    xa && Ja())
                }
            }
            function cu(e) {
                null !== ql && 0 === ql.tag && !(6 & Pl) && Au();
                var n = Pl;
                Pl |= 1;
                var t = gl.transition
                  , r = Nn;
                try {
                    if (gl.transition = null,
                    Nn = 1,
                    e)
                        return e()
                } finally {
                    Nn = r,
                    gl.transition = t,
                    !(6 & (Pl = n)) && Ja()
                }
            }
            function _u() {
                Ul = wl.current,
                La(wl)
            }
            function Eu(e, n) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var t = e.timeoutHandle;
                if (-1 !== t && (e.timeoutHandle = -1,
                aa(t)),
                null !== Ml)
                    for (t = Ml.return; null !== t; ) {
                        var r = t;
                        switch (no(r),
                        r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && wa();
                            break;
                        case 3:
                            $o(),
                            La(Da),
                            La(Pa),
                            ri();
                            break;
                        case 5:
                            Zo(r);
                            break;
                        case 4:
                            $o();
                            break;
                        case 13:
                        case 19:
                            La(ei);
                            break;
                        case 10:
                            Po(r.type._context);
                            break;
                        case 22:
                        case 23:
                            _u()
                        }
                        t = t.return
                    }
                if (Dl = e,
                Ml = e = wu(e.current, null),
                yl = Ul = n,
                bl = 0,
                kl = null,
                Bl = Fl = vl = 0,
                Gl = xl = null,
                null !== Uo) {
                    for (n = 0; n < Uo.length; n++)
                        if (null !== (r = (t = Uo[n]).interleaved)) {
                            t.interleaved = null;
                            var a = r.next
                              , o = t.pending;
                            if (null !== o) {
                                var i = o.next;
                                o.next = a,
                                r.next = i
                            }
                            t.pending = r
                        }
                    Uo = null
                }
                return e
            }
            function mu(e, n) {
                for (; ; ) {
                    var t = Ml;
                    try {
                        if (go(),
                        ai.current = Qi,
                        ci) {
                            for (var r = si.memoizedState; null !== r; ) {
                                var a = r.queue;
                                null !== a && (a.pending = null),
                                r = r.next
                            }
                            ci = !1
                        }
                        if (ii = 0,
                        ui = li = si = null,
                        _i = !1,
                        Ei = 0,
                        Rl.current = null,
                        null === t || null === t.return) {
                            bl = 1,
                            kl = n,
                            Ml = null;
                            break
                        }
                        e: {
                            var i = e
                              , s = t.return
                              , l = t
                              , u = n;
                            if (n = yl,
                            l.flags |= 32768,
                            null !== u && "object" == typeof u && "function" == typeof u.then) {
                                var c = u
                                  , _ = l
                                  , E = _.tag;
                                if (!(1 & _.mode || 0 !== E && 11 !== E && 15 !== E)) {
                                    var m = _.alternate;
                                    m ? (_.updateQueue = m.updateQueue,
                                    _.memoizedState = m.memoizedState,
                                    _.lanes = m.lanes) : (_.updateQueue = null,
                                    _.memoizedState = null)
                                }
                                var d = Ts(s);
                                if (null !== d) {
                                    d.flags &= -257,
                                    ps(d, s, l, 0, n),
                                    1 & d.mode && fs(i, c, n),
                                    u = c;
                                    var f = (n = d).updateQueue;
                                    if (null === f) {
                                        var T = new Set;
                                        T.add(u),
                                        n.updateQueue = T
                                    } else
                                        f.add(u);
                                    break e
                                }
                                if (!(1 & n)) {
                                    fs(i, c, n),
                                    fu();
                                    break e
                                }
                                u = Error(o(426))
                            } else if (ao && 1 & l.mode) {
                                var p = Ts(s);
                                if (null !== p) {
                                    !(65536 & p.flags) && (p.flags |= 256),
                                    ps(p, s, l, 0, n),
                                    fo(us(u, l));
                                    break e
                                }
                            }
                            i = u = us(u, l),
                            4 !== bl && (bl = 2),
                            null === xl ? xl = [i] : xl.push(i),
                            i = s;
                            do {
                                switch (i.tag) {
                                case 3:
                                    i.flags |= 65536,
                                    n &= -n,
                                    i.lanes |= n,
                                    Jo(i, ms(0, u, n));
                                    break e;
                                case 1:
                                    l = u;
                                    var S = i.type
                                      , O = i.stateNode;
                                    if (!(128 & i.flags || "function" != typeof S.getDerivedStateFromError && (null === O || "function" != typeof O.componentDidCatch || null !== Kl && Kl.has(O)))) {
                                        i.flags |= 65536,
                                        n &= -n,
                                        i.lanes |= n,
                                        Jo(i, ds(i, l, n));
                                        break e
                                    }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        Nu(t)
                    } catch (e) {
                        n = e,
                        Ml === t && null !== t && (Ml = t = t.return);
                        continue
                    }
                    break
                }
            }
            function du() {
                var e = Ll.current;
                return Ll.current = Qi,
                null === e ? Qi : e
            }
            function fu() {
                0 !== bl && 3 !== bl && 2 !== bl || (bl = 4),
                null === Dl || !(268435455 & vl) && !(268435455 & Fl) || su(Dl, yl)
            }
            function Tu(e, n) {
                var t = Pl;
                Pl |= 2;
                var r = du();
                for (Dl === e && yl === n || (Vl = null,
                Eu(e, n)); ; )
                    try {
                        pu();
                        break
                    } catch (n) {
                        mu(e, n)
                    }
                if (go(),
                Pl = t,
                Ll.current = r,
                null !== Ml)
                    throw Error(o(261));
                return Dl = null,
                yl = 0,
                bl
            }
            function pu() {
                for (; null !== Ml; )
                    Ou(Ml)
            }
            function Su() {
                for (; null !== Ml && !ze(); )
                    Ou(Ml)
            }
            function Ou(e) {
                var n = Il(e.alternate, e, Ul);
                e.memoizedProps = e.pendingProps,
                null === n ? Nu(e) : Ml = n,
                Rl.current = null
            }
            function Nu(e) {
                var n = e;
                do {
                    var t = n.alternate;
                    if (e = n.return,
                    32768 & n.flags) {
                        if (null !== (t = qs(t, n)))
                            return t.flags &= 32767,
                            void (Ml = t);
                        if (null === e)
                            return bl = 6,
                            void (Ml = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    } else if (null !== (t = Ys(t, n, Ul)))
                        return void (Ml = t);
                    if (null !== (n = n.sibling))
                        return void (Ml = n);
                    Ml = n = e
                } while (null !== n);
                0 === bl && (bl = 5)
            }
            function Cu(e, n, t) {
                var r = Nn
                  , a = gl.transition;
                try {
                    gl.transition = null,
                    Nn = 1,
                    function(e, n, t, r) {
                        do {
                            Au()
                        } while (null !== ql);
                        if (6 & Pl)
                            throw Error(o(327));
                        t = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === t)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        t === e.current)
                            throw Error(o(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var i = t.lanes | t.childLanes;
                        if (function(e, n) {
                            var t = e.pendingLanes & ~n;
                            e.pendingLanes = n,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= n,
                            e.mutableReadLanes &= n,
                            e.entangledLanes &= n,
                            n = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < t; ) {
                                var a = 31 - sn(t)
                                  , o = 1 << a;
                                n[a] = 0,
                                r[a] = -1,
                                e[a] = -1,
                                t &= ~o
                            }
                        }(e, i),
                        e === Dl && (Ml = Dl = null,
                        yl = 0),
                        !(2064 & t.subtreeFlags) && !(2064 & t.flags) || Yl || (Yl = !0,
                        Du(nn, (function() {
                            return Au(),
                            null
                        }
                        ))),
                        i = !!(15990 & t.flags),
                        15990 & t.subtreeFlags || i) {
                            i = gl.transition,
                            gl.transition = null;
                            var s = Nn;
                            Nn = 1;
                            var l = Pl;
                            Pl |= 4,
                            Rl.current = null,
                            function(e, n) {
                                if (ea = Wn,
                                mr(e = Er())) {
                                    if ("selectionStart"in e)
                                        var t = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                t = r.anchorNode;
                                                var a = r.anchorOffset
                                                  , i = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    t.nodeType,
                                                    i.nodeType
                                                } catch (e) {
                                                    t = null;
                                                    break e
                                                }
                                                var s = 0
                                                  , l = -1
                                                  , u = -1
                                                  , c = 0
                                                  , _ = 0
                                                  , E = e
                                                  , m = null;
                                                n: for (; ; ) {
                                                    for (var d; E !== t || 0 !== a && 3 !== E.nodeType || (l = s + a),
                                                    E !== i || 0 !== r && 3 !== E.nodeType || (u = s + r),
                                                    3 === E.nodeType && (s += E.nodeValue.length),
                                                    null !== (d = E.firstChild); )
                                                        m = E,
                                                        E = d;
                                                    for (; ; ) {
                                                        if (E === e)
                                                            break n;
                                                        if (m === t && ++c === a && (l = s),
                                                        m === i && ++_ === r && (u = s),
                                                        null !== (d = E.nextSibling))
                                                            break;
                                                        m = (E = m).parentNode
                                                    }
                                                    E = d
                                                }
                                                t = -1 === l || -1 === u ? null : {
                                                    start: l,
                                                    end: u
                                                }
                                            } else
                                                t = null
                                        }
                                    t = t || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    t = null;
                                for (na = {
                                    focusedElem: e,
                                    selectionRange: t
                                },
                                Wn = !1,
                                Qs = n; null !== Qs; )
                                    if (e = (n = Qs).child,
                                    1028 & n.subtreeFlags && null !== e)
                                        e.return = n,
                                        Qs = e;
                                    else
                                        for (; null !== Qs; ) {
                                            n = Qs;
                                            try {
                                                var f = n.alternate;
                                                if (1024 & n.flags)
                                                    switch (n.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== f) {
                                                            var T = f.memoizedProps
                                                              , p = f.memoizedState
                                                              , S = n.stateNode
                                                              , O = S.getSnapshotBeforeUpdate(n.elementType === n.type ? T : ts(n.type, T), p);
                                                            S.__reactInternalSnapshotBeforeUpdate = O
                                                        }
                                                        break;
                                                    case 3:
                                                        var N = n.stateNode.containerInfo;
                                                        1 === N.nodeType ? N.textContent = "" : 9 === N.nodeType && N.documentElement && N.removeChild(N.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(o(163))
                                                    }
                                            } catch (e) {
                                                hu(n, n.return, e)
                                            }
                                            if (null !== (e = n.sibling)) {
                                                e.return = n.return,
                                                Qs = e;
                                                break
                                            }
                                            Qs = n.return
                                        }
                                f = nl,
                                nl = !1
                            }(e, t),
                            Tl(t, e),
                            dr(na),
                            Wn = !!ea,
                            na = ea = null,
                            e.current = t,
                            Sl(t, e, a),
                            je(),
                            Pl = l,
                            Nn = s,
                            gl.transition = i
                        } else
                            e.current = t;
                        if (Yl && (Yl = !1,
                        ql = e,
                        zl = a),
                        0 === (i = e.pendingLanes) && (Kl = null),
                        function(e) {
                            if (on && "function" == typeof on.onCommitFiberRoot)
                                try {
                                    on.onCommitFiberRoot(an, e, void 0, !(128 & ~e.current.flags))
                                } catch (e) {}
                        }(t.stateNode),
                        ru(e, $e()),
                        null !== n)
                            for (r = e.onRecoverableError,
                            t = 0; t < n.length; t++)
                                r((a = n[t]).value, {
                                    componentStack: a.stack,
                                    digest: a.digest
                                });
                        if (Xl)
                            throw Xl = !1,
                            e = Wl,
                            Wl = null,
                            e;
                        !!(1 & zl) && 0 !== e.tag && Au(),
                        1 & (i = e.pendingLanes) ? e === $l ? jl++ : (jl = 0,
                        $l = e) : jl = 0,
                        Ja()
                    }(e, n, t, r)
                } finally {
                    gl.transition = a,
                    Nn = r
                }
                return null
            }
            function Au() {
                if (null !== ql) {
                    var e = Cn(zl)
                      , n = gl.transition
                      , t = Nn;
                    try {
                        if (gl.transition = null,
                        Nn = 16 > e ? 16 : e,
                        null === ql)
                            var r = !1;
                        else {
                            if (e = ql,
                            ql = null,
                            zl = 0,
                            6 & Pl)
                                throw Error(o(331));
                            var a = Pl;
                            for (Pl |= 4,
                            Qs = e.current; null !== Qs; ) {
                                var i = Qs
                                  , s = i.child;
                                if (16 & Qs.flags) {
                                    var l = i.deletions;
                                    if (null !== l) {
                                        for (var u = 0; u < l.length; u++) {
                                            var c = l[u];
                                            for (Qs = c; null !== Qs; ) {
                                                var _ = Qs;
                                                switch (_.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    tl(8, _, i)
                                                }
                                                var E = _.child;
                                                if (null !== E)
                                                    E.return = _,
                                                    Qs = E;
                                                else
                                                    for (; null !== Qs; ) {
                                                        var m = (_ = Qs).sibling
                                                          , d = _.return;
                                                        if (ol(_),
                                                        _ === c) {
                                                            Qs = null;
                                                            break
                                                        }
                                                        if (null !== m) {
                                                            m.return = d,
                                                            Qs = m;
                                                            break
                                                        }
                                                        Qs = d
                                                    }
                                            }
                                        }
                                        var f = i.alternate;
                                        if (null !== f) {
                                            var T = f.child;
                                            if (null !== T) {
                                                f.child = null;
                                                do {
                                                    var p = T.sibling;
                                                    T.sibling = null,
                                                    T = p
                                                } while (null !== T)
                                            }
                                        }
                                        Qs = i
                                    }
                                }
                                if (2064 & i.subtreeFlags && null !== s)
                                    s.return = i,
                                    Qs = s;
                                else
                                    e: for (; null !== Qs; ) {
                                        if (2048 & (i = Qs).flags)
                                            switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                tl(9, i, i.return)
                                            }
                                        var S = i.sibling;
                                        if (null !== S) {
                                            S.return = i.return,
                                            Qs = S;
                                            break e
                                        }
                                        Qs = i.return
                                    }
                            }
                            var O = e.current;
                            for (Qs = O; null !== Qs; ) {
                                var N = (s = Qs).child;
                                if (2064 & s.subtreeFlags && null !== N)
                                    N.return = s,
                                    Qs = N;
                                else
                                    e: for (s = O; null !== Qs; ) {
                                        if (2048 & (l = Qs).flags)
                                            try {
                                                switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rl(9, l)
                                                }
                                            } catch (e) {
                                                hu(l, l.return, e)
                                            }
                                        if (l === s) {
                                            Qs = null;
                                            break e
                                        }
                                        var C = l.sibling;
                                        if (null !== C) {
                                            C.return = l.return,
                                            Qs = C;
                                            break e
                                        }
                                        Qs = l.return
                                    }
                            }
                            if (Pl = a,
                            Ja(),
                            on && "function" == typeof on.onPostCommitFiberRoot)
                                try {
                                    on.onPostCommitFiberRoot(an, e)
                                } catch (e) {}
                            r = !0
                        }
                        return r
                    } finally {
                        Nn = t,
                        gl.transition = n
                    }
                }
                return !1
            }
            function Iu(e, n, t) {
                e = Go(e, n = ms(0, n = us(t, n), 1), 1),
                n = eu(),
                null !== e && (Sn(e, 1, n),
                ru(e, n))
            }
            function hu(e, n, t) {
                if (3 === e.tag)
                    Iu(e, e, t);
                else
                    for (; null !== n; ) {
                        if (3 === n.tag) {
                            Iu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Kl || !Kl.has(r))) {
                                n = Go(n, e = ds(n, e = us(t, e), 1), 1),
                                e = eu(),
                                null !== n && (Sn(n, 1, e),
                                ru(n, e));
                                break
                            }
                        }
                        n = n.return
                    }
            }
            function Lu(e, n, t) {
                var r = e.pingCache;
                null !== r && r.delete(n),
                n = eu(),
                e.pingedLanes |= e.suspendedLanes & t,
                Dl === e && (yl & t) === t && (4 === bl || 3 === bl && (130023424 & yl) === yl && 500 > $e() - Hl ? Eu(e, 0) : Bl |= t),
                ru(e, n)
            }
            function Ru(e, n) {
                0 === n && (1 & e.mode ? (n = _n,
                !(130023424 & (_n <<= 1)) && (_n = 4194304)) : n = 1);
                var t = eu();
                null !== (e = ko(e, n)) && (Sn(e, n, t),
                ru(e, t))
            }
            function gu(e) {
                var n = e.memoizedState
                  , t = 0;
                null !== n && (t = n.retryLane),
                Ru(e, t)
            }
            function Pu(e, n) {
                var t = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , a = e.memoizedState;
                    null !== a && (t = a.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(o(314))
                }
                null !== r && r.delete(n),
                Ru(e, t)
            }
            function Du(e, n) {
                return Ye(e, n)
            }
            function Mu(e, n, t, r) {
                this.tag = e,
                this.key = t,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = n,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function yu(e, n, t, r) {
                return new Mu(e,n,t,r)
            }
            function Uu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function wu(e, n) {
                var t = e.alternate;
                return null === t ? ((t = yu(e.tag, n, e.key, e.mode)).elementType = e.elementType,
                t.type = e.type,
                t.stateNode = e.stateNode,
                t.alternate = e,
                e.alternate = t) : (t.pendingProps = n,
                t.type = e.type,
                t.flags = 0,
                t.subtreeFlags = 0,
                t.deletions = null),
                t.flags = 14680064 & e.flags,
                t.childLanes = e.childLanes,
                t.lanes = e.lanes,
                t.child = e.child,
                t.memoizedProps = e.memoizedProps,
                t.memoizedState = e.memoizedState,
                t.updateQueue = e.updateQueue,
                n = e.dependencies,
                t.dependencies = null === n ? null : {
                    lanes: n.lanes,
                    firstContext: n.firstContext
                },
                t.sibling = e.sibling,
                t.index = e.index,
                t.ref = e.ref,
                t
            }
            function bu(e, n, t, r, a, i) {
                var s = 2;
                if (r = e,
                "function" == typeof e)
                    Uu(e) && (s = 1);
                else if ("string" == typeof e)
                    s = 5;
                else
                    e: switch (e) {
                    case I:
                        return ku(t.children, a, i, n);
                    case h:
                        s = 8,
                        a |= 8;
                        break;
                    case L:
                        return (e = yu(12, t, n, 2 | a)).elementType = L,
                        e.lanes = i,
                        e;
                    case D:
                        return (e = yu(13, t, n, a)).elementType = D,
                        e.lanes = i,
                        e;
                    case M:
                        return (e = yu(19, t, n, a)).elementType = M,
                        e.lanes = i,
                        e;
                    case w:
                        return vu(t, a, i, n);
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                            case R:
                                s = 10;
                                break e;
                            case g:
                                s = 9;
                                break e;
                            case P:
                                s = 11;
                                break e;
                            case y:
                                s = 14;
                                break e;
                            case U:
                                s = 16,
                                r = null;
                                break e
                            }
                        throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                return (n = yu(s, t, n, a)).elementType = e,
                n.type = r,
                n.lanes = i,
                n
            }
            function ku(e, n, t, r) {
                return (e = yu(7, e, r, n)).lanes = t,
                e
            }
            function vu(e, n, t, r) {
                return (e = yu(22, e, r, n)).elementType = w,
                e.lanes = t,
                e.stateNode = {
                    isHidden: !1
                },
                e
            }
            function Fu(e, n, t) {
                return (e = yu(6, e, null, n)).lanes = t,
                e
            }
            function Bu(e, n, t) {
                return (n = yu(4, null !== e.children ? e.children : [], e.key, n)).lanes = t,
                n.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                n
            }
            function xu(e, n, t, r, a) {
                this.tag = n,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = pn(0),
                this.expirationTimes = pn(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = pn(0),
                this.identifierPrefix = r,
                this.onRecoverableError = a,
                this.mutableSourceEagerHydrationData = null
            }
            function Gu(e, n, t, r, a, o, i, s, l) {
                return e = new xu(e,n,t,s,l),
                1 === n ? (n = 1,
                !0 === o && (n |= 8)) : n = 0,
                o = yu(3, null, null, n),
                e.current = o,
                o.stateNode = e,
                o.memoizedState = {
                    element: r,
                    isDehydrated: t,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                Fo(o),
                e
            }
            function Hu(e) {
                if (!e)
                    return ga;
                e: {
                    if (Je(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(o(170));
                    var n = e;
                    do {
                        switch (n.tag) {
                        case 3:
                            n = n.stateNode.context;
                            break e;
                        case 1:
                            if (Ua(n.type)) {
                                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        n = n.return
                    } while (null !== n);
                    throw Error(o(171))
                }
                if (1 === e.tag) {
                    var t = e.type;
                    if (Ua(t))
                        return ka(e, t, n)
                }
                return n
            }
            function Ju(e, n, t, r, a, o, i, s, l) {
                return (e = Gu(t, r, !0, e, 0, o, 0, s, l)).context = Hu(null),
                t = e.current,
                (o = xo(r = eu(), a = nu(t))).callback = null != n ? n : null,
                Go(t, o, a),
                e.current.lanes = a,
                Sn(e, a, r),
                ru(e, r),
                e
            }
            function Vu(e, n, t, r) {
                var a = n.current
                  , o = eu()
                  , i = nu(a);
                return t = Hu(t),
                null === n.context ? n.context = t : n.pendingContext = t,
                (n = xo(o, i)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (n.callback = r),
                null !== (e = Go(a, n, i)) && (tu(e, a, i, o),
                Ho(e, a, i)),
                i
            }
            function Xu(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Wu(e, n) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var t = e.retryLane;
                    e.retryLane = 0 !== t && t < n ? t : n
                }
            }
            function Ku(e, n) {
                Wu(e, n),
                (e = e.alternate) && Wu(e, n)
            }
            Il = function(e, n, t) {
                if (null !== e)
                    if (e.memoizedProps !== n.pendingProps || Da.current)
                        Os = !0;
                    else {
                        if (!(e.lanes & t || 128 & n.flags))
                            return Os = !1,
                            function(e, n, t) {
                                switch (n.tag) {
                                case 3:
                                    Ds(n),
                                    mo();
                                    break;
                                case 5:
                                    Qo(n);
                                    break;
                                case 1:
                                    Ua(n.type) && va(n);
                                    break;
                                case 4:
                                    jo(n, n.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = n.type._context
                                      , a = n.memoizedProps.value;
                                    Ra(Io, r._currentValue),
                                    r._currentValue = a;
                                    break;
                                case 13:
                                    if (null !== (r = n.memoizedState))
                                        return null !== r.dehydrated ? (Ra(ei, 1 & ei.current),
                                        n.flags |= 128,
                                        null) : t & n.child.childLanes ? Fs(e, n, t) : (Ra(ei, 1 & ei.current),
                                        null !== (e = Xs(e, n, t)) ? e.sibling : null);
                                    Ra(ei, 1 & ei.current);
                                    break;
                                case 19:
                                    if (r = !!(t & n.childLanes),
                                    128 & e.flags) {
                                        if (r)
                                            return Js(e, n, t);
                                        n.flags |= 128
                                    }
                                    if (null !== (a = n.memoizedState) && (a.rendering = null,
                                    a.tail = null,
                                    a.lastEffect = null),
                                    Ra(ei, ei.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return n.lanes = 0,
                                    hs(e, n, t)
                                }
                                return Xs(e, n, t)
                            }(e, n, t);
                        Os = !!(131072 & e.flags)
                    }
                else
                    Os = !1,
                    ao && 1048576 & n.flags && Za(n, Ka, n.index);
                switch (n.lanes = 0,
                n.tag) {
                case 2:
                    var r = n.type;
                    Vs(e, n),
                    e = n.pendingProps;
                    var a = ya(n, Pa.current);
                    Mo(n, t),
                    a = Ti(null, n, r, e, a, t);
                    var i = pi();
                    return n.flags |= 1,
                    "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (n.tag = 1,
                    n.memoizedState = null,
                    n.updateQueue = null,
                    Ua(r) ? (i = !0,
                    va(n)) : i = !1,
                    n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    Fo(n),
                    a.updater = as,
                    n.stateNode = a,
                    a._reactInternals = n,
                    ls(n, r, e, t),
                    n = Ps(null, n, r, !0, i, t)) : (n.tag = 0,
                    ao && i && eo(n),
                    Ns(null, n, a, t),
                    n = n.child),
                    n;
                case 16:
                    r = n.elementType;
                    e: {
                        switch (Vs(e, n),
                        e = n.pendingProps,
                        r = (a = r._init)(r._payload),
                        n.type = r,
                        a = n.tag = function(e) {
                            if ("function" == typeof e)
                                return Uu(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === P)
                                    return 11;
                                if (e === y)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = ts(r, e),
                        a) {
                        case 0:
                            n = Rs(null, n, r, e, t);
                            break e;
                        case 1:
                            n = gs(null, n, r, e, t);
                            break e;
                        case 11:
                            n = Cs(null, n, r, e, t);
                            break e;
                        case 14:
                            n = As(null, n, r, ts(r.type, e), t);
                            break e
                        }
                        throw Error(o(306, r, ""))
                    }
                    return n;
                case 0:
                    return r = n.type,
                    a = n.pendingProps,
                    Rs(e, n, r, a = n.elementType === r ? a : ts(r, a), t);
                case 1:
                    return r = n.type,
                    a = n.pendingProps,
                    gs(e, n, r, a = n.elementType === r ? a : ts(r, a), t);
                case 3:
                    e: {
                        if (Ds(n),
                        null === e)
                            throw Error(o(387));
                        r = n.pendingProps,
                        a = (i = n.memoizedState).element,
                        Bo(e, n),
                        Vo(n, r, null, t);
                        var s = n.memoizedState;
                        if (r = s.element,
                        i.isDehydrated) {
                            if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: s.cache,
                                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                transitions: s.transitions
                            },
                            n.updateQueue.baseState = i,
                            n.memoizedState = i,
                            256 & n.flags) {
                                n = Ms(e, n, r, t, a = us(Error(o(423)), n));
                                break e
                            }
                            if (r !== a) {
                                n = Ms(e, n, r, t, a = us(Error(o(424)), n));
                                break e
                            }
                            for (ro = ua(n.stateNode.containerInfo.firstChild),
                            to = n,
                            ao = !0,
                            oo = null,
                            t = Ao(n, null, r, t),
                            n.child = t; t; )
                                t.flags = -3 & t.flags | 4096,
                                t = t.sibling
                        } else {
                            if (mo(),
                            r === a) {
                                n = Xs(e, n, t);
                                break e
                            }
                            Ns(e, n, r, t)
                        }
                        n = n.child
                    }
                    return n;
                case 5:
                    return Qo(n),
                    null === e && uo(n),
                    r = n.type,
                    a = n.pendingProps,
                    i = null !== e ? e.memoizedProps : null,
                    s = a.children,
                    ta(r, a) ? s = null : null !== i && ta(r, i) && (n.flags |= 32),
                    Ls(e, n),
                    Ns(e, n, s, t),
                    n.child;
                case 6:
                    return null === e && uo(n),
                    null;
                case 13:
                    return Fs(e, n, t);
                case 4:
                    return jo(n, n.stateNode.containerInfo),
                    r = n.pendingProps,
                    null === e ? n.child = Co(n, null, r, t) : Ns(e, n, r, t),
                    n.child;
                case 11:
                    return r = n.type,
                    a = n.pendingProps,
                    Cs(e, n, r, a = n.elementType === r ? a : ts(r, a), t);
                case 7:
                    return Ns(e, n, n.pendingProps, t),
                    n.child;
                case 8:
                case 12:
                    return Ns(e, n, n.pendingProps.children, t),
                    n.child;
                case 10:
                    e: {
                        if (r = n.type._context,
                        a = n.pendingProps,
                        i = n.memoizedProps,
                        s = a.value,
                        Ra(Io, r._currentValue),
                        r._currentValue = s,
                        null !== i)
                            if (sr(i.value, s)) {
                                if (i.children === a.children && !Da.current) {
                                    n = Xs(e, n, t);
                                    break e
                                }
                            } else
                                for (null !== (i = n.child) && (i.return = n); null !== i; ) {
                                    var l = i.dependencies;
                                    if (null !== l) {
                                        s = i.child;
                                        for (var u = l.firstContext; null !== u; ) {
                                            if (u.context === r) {
                                                if (1 === i.tag) {
                                                    (u = xo(-1, t & -t)).tag = 2;
                                                    var c = i.updateQueue;
                                                    if (null !== c) {
                                                        var _ = (c = c.shared).pending;
                                                        null === _ ? u.next = u : (u.next = _.next,
                                                        _.next = u),
                                                        c.pending = u
                                                    }
                                                }
                                                i.lanes |= t,
                                                null !== (u = i.alternate) && (u.lanes |= t),
                                                Do(i.return, t, n),
                                                l.lanes |= t;
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else if (10 === i.tag)
                                        s = i.type === n.type ? null : i.child;
                                    else if (18 === i.tag) {
                                        if (null === (s = i.return))
                                            throw Error(o(341));
                                        s.lanes |= t,
                                        null !== (l = s.alternate) && (l.lanes |= t),
                                        Do(s, t, n),
                                        s = i.sibling
                                    } else
                                        s = i.child;
                                    if (null !== s)
                                        s.return = i;
                                    else
                                        for (s = i; null !== s; ) {
                                            if (s === n) {
                                                s = null;
                                                break
                                            }
                                            if (null !== (i = s.sibling)) {
                                                i.return = s.return,
                                                s = i;
                                                break
                                            }
                                            s = s.return
                                        }
                                    i = s
                                }
                        Ns(e, n, a.children, t),
                        n = n.child
                    }
                    return n;
                case 9:
                    return a = n.type,
                    r = n.pendingProps.children,
                    Mo(n, t),
                    r = r(a = yo(a)),
                    n.flags |= 1,
                    Ns(e, n, r, t),
                    n.child;
                case 14:
                    return a = ts(r = n.type, n.pendingProps),
                    As(e, n, r, a = ts(r.type, a), t);
                case 15:
                    return Is(e, n, n.type, n.pendingProps, t);
                case 17:
                    return r = n.type,
                    a = n.pendingProps,
                    a = n.elementType === r ? a : ts(r, a),
                    Vs(e, n),
                    n.tag = 1,
                    Ua(r) ? (e = !0,
                    va(n)) : e = !1,
                    Mo(n, t),
                    is(n, r, a),
                    ls(n, r, a, t),
                    Ps(null, n, r, !0, e, t);
                case 19:
                    return Js(e, n, t);
                case 22:
                    return hs(e, n, t)
                }
                throw Error(o(156, n.tag))
            }
            ;
            var Yu = "function" == typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function qu(e) {
                this._internalRoot = e
            }
            function zu(e) {
                this._internalRoot = e
            }
            function ju(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function $u(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function Qu() {}
            function Zu(e, n, t, r, a) {
                var o = t._reactRootContainer;
                if (o) {
                    var i = o;
                    if ("function" == typeof a) {
                        var s = a;
                        a = function() {
                            var e = Xu(i);
                            s.call(e)
                        }
                    }
                    Vu(n, i, e, a)
                } else
                    i = function(e, n, t, r, a) {
                        if (a) {
                            if ("function" == typeof r) {
                                var o = r;
                                r = function() {
                                    var e = Xu(i);
                                    o.call(e)
                                }
                            }
                            var i = Ju(n, r, e, 0, null, !1, 0, "", Qu);
                            return e._reactRootContainer = i,
                            e[da] = i.current,
                            Jr(8 === e.nodeType ? e.parentNode : e),
                            cu(),
                            i
                        }
                        for (; a = e.lastChild; )
                            e.removeChild(a);
                        if ("function" == typeof r) {
                            var s = r;
                            r = function() {
                                var e = Xu(l);
                                s.call(e)
                            }
                        }
                        var l = Gu(e, 0, !1, null, 0, !1, 0, "", Qu);
                        return e._reactRootContainer = l,
                        e[da] = l.current,
                        Jr(8 === e.nodeType ? e.parentNode : e),
                        cu((function() {
                            Vu(n, l, t, r)
                        }
                        )),
                        l
                    }(t, n, e, a, r);
                return Xu(i)
            }
            zu.prototype.render = qu.prototype.render = function(e) {
                var n = this._internalRoot;
                if (null === n)
                    throw Error(o(409));
                Vu(e, n, null, null)
            }
            ,
            zu.prototype.unmount = qu.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var n = e.containerInfo;
                    cu((function() {
                        Vu(null, e, null, null)
                    }
                    )),
                    n[da] = null
                }
            }
            ,
            zu.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var n = Ln();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: n
                    };
                    for (var t = 0; t < bn.length && 0 !== n && n < bn[t].priority; t++)
                        ;
                    bn.splice(t, 0, e),
                    0 === t && Bn(e)
                }
            }
            ,
            An = function(e) {
                switch (e.tag) {
                case 3:
                    var n = e.stateNode;
                    if (n.current.memoizedState.isDehydrated) {
                        var t = En(n.pendingLanes);
                        0 !== t && (On(n, 1 | t),
                        ru(n, $e()),
                        !(6 & Pl) && (Jl = $e() + 500,
                        Ja()))
                    }
                    break;
                case 13:
                    cu((function() {
                        var n = ko(e, 1);
                        if (null !== n) {
                            var t = eu();
                            tu(n, e, 1, t)
                        }
                    }
                    )),
                    Ku(e, 1)
                }
            }
            ,
            In = function(e) {
                if (13 === e.tag) {
                    var n = ko(e, 134217728);
                    null !== n && tu(n, e, 134217728, eu()),
                    Ku(e, 134217728)
                }
            }
            ,
            hn = function(e) {
                if (13 === e.tag) {
                    var n = nu(e)
                      , t = ko(e, n);
                    null !== t && tu(t, e, n, eu()),
                    Ku(e, n)
                }
            }
            ,
            Ln = function() {
                return Nn
            }
            ,
            Rn = function(e, n) {
                var t = Nn;
                try {
                    return Nn = e,
                    n()
                } finally {
                    Nn = t
                }
            }
            ,
            Ae = function(e, n, t) {
                switch (n) {
                case "input":
                    if (Q(e, t),
                    n = t.name,
                    "radio" === t.type && null != n) {
                        for (t = e; t.parentNode; )
                            t = t.parentNode;
                        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
                        n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r !== e && r.form === e.form) {
                                var a = Ca(r);
                                if (!a)
                                    throw Error(o(90));
                                Y(r),
                                Q(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    oe(e, t);
                    break;
                case "select":
                    null != (n = t.value) && te(e, !!t.multiple, n, !1)
                }
            }
            ,
            Pe = uu,
            De = cu;
            var ec = {
                usingClientEntryPoint: !1,
                Events: [Oa, Na, Ca, Re, ge, uu]
            }
              , nc = {
                findFiberByHostInstance: Sa,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            }
              , tc = {
                bundleType: nc.bundleType,
                version: nc.version,
                rendererPackageName: nc.rendererPackageName,
                rendererConfig: nc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: N.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = We(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!rc.isDisabled && rc.supportsFiber)
                    try {
                        an = rc.inject(tc),
                        on = rc
                    } catch (ce) {}
            }
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec,
            n.createPortal = function(e, n) {
                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ju(n))
                    throw Error(o(200));
                return function(e, n, t) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: A,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: n,
                        implementation: t
                    }
                }(e, n, null, t)
            }
            ,
            n.createRoot = function(e, n) {
                if (!ju(e))
                    throw Error(o(299));
                var t = !1
                  , r = ""
                  , a = Yu;
                return null != n && (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
                n = Gu(e, 1, !1, null, 0, t, 0, r, a),
                e[da] = n.current,
                Jr(8 === e.nodeType ? e.parentNode : e),
                new qu(n)
            }
            ,
            n.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var n = e._reactInternals;
                if (void 0 === n) {
                    if ("function" == typeof e.render)
                        throw Error(o(188));
                    throw e = Object.keys(e).join(","),
                    Error(o(268, e))
                }
                return null === (e = We(n)) ? null : e.stateNode
            }
            ,
            n.flushSync = function(e) {
                return cu(e)
            }
            ,
            n.hydrate = function(e, n, t) {
                if (!$u(n))
                    throw Error(o(200));
                return Zu(null, e, n, !0, t)
            }
            ,
            n.hydrateRoot = function(e, n, t) {
                if (!ju(e))
                    throw Error(o(405));
                var r = null != t && t.hydratedSources || null
                  , a = !1
                  , i = ""
                  , s = Yu;
                if (null != t && (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
                n = Ju(n, null, e, 1, null != t ? t : null, a, 0, i, s),
                e[da] = n.current,
                Jr(e),
                r)
                    for (e = 0; e < r.length; e++)
                        a = (a = (t = r[e])._getVersion)(t._source),
                        null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a);
                return new zu(n)
            }
            ,
            n.render = function(e, n, t) {
                if (!$u(n))
                    throw Error(o(200));
                return Zu(null, e, n, !1, t)
            }
            ,
            n.unmountComponentAtNode = function(e) {
                if (!$u(e))
                    throw Error(o(40));
                return !!e._reactRootContainer && (cu((function() {
                    Zu(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[da] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            n.unstable_batchedUpdates = uu,
            n.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
                if (!$u(t))
                    throw Error(o(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(o(38));
                return Zu(e, n, t, !1, r)
            }
            ,
            n.version = "18.3.1-next-f1338f8080-20240426"
        }
        ,
        225: (e, n, t) => {
            var r = t(845)
              , a = Object.prototype.hasOwnProperty
              , o = "undefined" != typeof Map;
            function i() {
                this._array = [],
                this._set = o ? new Map : Object.create(null)
            }
            i.fromArray = function(e, n) {
                for (var t = new i, r = 0, a = e.length; r < a; r++)
                    t.add(e[r], n);
                return t
            }
            ,
            i.prototype.size = function() {
                return o ? this._set.size : Object.getOwnPropertyNames(this._set).length
            }
            ,
            i.prototype.add = function(e, n) {
                var t = o ? e : r.toSetString(e)
                  , i = o ? this.has(e) : a.call(this._set, t)
                  , s = this._array.length;
                i && !n || this._array.push(e),
                i || (o ? this._set.set(e, s) : this._set[t] = s)
            }
            ,
            i.prototype.has = function(e) {
                if (o)
                    return this._set.has(e);
                var n = r.toSetString(e);
                return a.call(this._set, n)
            }
            ,
            i.prototype.indexOf = function(e) {
                if (o) {
                    var n = this._set.get(e);
                    if (n >= 0)
                        return n
                } else {
                    var t = r.toSetString(e);
                    if (a.call(this._set, t))
                        return this._set[t]
                }
                throw new Error('"' + e + '" is not in the set.')
            }
            ,
            i.prototype.at = function(e) {
                if (e >= 0 && e < this._array.length)
                    return this._array[e];
                throw new Error("No element indexed by " + e)
            }
            ,
            i.prototype.toArray = function() {
                return this._array.slice()
            }
            ,
            n.C = i
        }
        ,
        316: (e, n, t) => {
            var r = t(845);
            function a() {
                this._array = [],
                this._sorted = !0,
                this._last = {
                    generatedLine: -1,
                    generatedColumn: 0
                }
            }
            a.prototype.unsortedForEach = function(e, n) {
                this._array.forEach(e, n)
            }
            ,
            a.prototype.add = function(e) {
                var n, t, a, o, i, s;
                t = e,
                a = (n = this._last).generatedLine,
                o = t.generatedLine,
                i = n.generatedColumn,
                s = t.generatedColumn,
                o > a || o == a && s >= i || r.compareByGeneratedPositionsInflated(n, t) <= 0 ? (this._last = e,
                this._array.push(e)) : (this._sorted = !1,
                this._array.push(e))
            }
            ,
            a.prototype.toArray = function() {
                return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated),
                this._sorted = !0),
                this._array
            }
            ,
            n.P = a
        }
        ,
        394: (e, n) => {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
            n.encode = function(e) {
                if (0 <= e && e < t.length)
                    return t[e];
                throw new TypeError("Must be between 0 and 63: " + e)
            }
            ,
            n.decode = function(e) {
                return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
            }
        }
        ,
        433: (e, n) => {
            function t(e, r, a, o, i, s) {
                var l = Math.floor((r - e) / 2) + e
                  , u = i(a, o[l], !0);
                return 0 === u ? l : u > 0 ? r - l > 1 ? t(l, r, a, o, i, s) : s == n.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : l : l - e > 1 ? t(e, l, a, o, i, s) : s == n.LEAST_UPPER_BOUND ? l : e < 0 ? -1 : e
            }
            n.GREATEST_LOWER_BOUND = 1,
            n.LEAST_UPPER_BOUND = 2,
            n.search = function(e, r, a, o) {
                if (0 === r.length)
                    return -1;
                var i = t(-1, r.length, e, r, a, o || n.GREATEST_LOWER_BOUND);
                if (i < 0)
                    return -1;
                for (; i - 1 >= 0 && 0 === a(r[i], r[i - 1], !0); )
                    --i;
                return i
            }
        }
        ,
        435: (e, n, t) => {
            t(687).x,
            n.SourceMapConsumer = t(552).SourceMapConsumer,
            t(697)
        }
        ,
        470: (e, n, t) => {
            var r = t(394);
            n.encode = function(e) {
                var n, t = "", a = function(e) {
                    return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
                }(e);
                do {
                    n = 31 & a,
                    (a >>>= 5) > 0 && (n |= 32),
                    t += r.encode(n)
                } while (a > 0);
                return t
            }
            ,
            n.decode = function(e, n, t) {
                var a, o, i, s, l = e.length, u = 0, c = 0;
                do {
                    if (n >= l)
                        throw new Error("Expected more digits in base 64 VLQ value.");
                    if (-1 === (o = r.decode(e.charCodeAt(n++))))
                        throw new Error("Invalid base64 digit: " + e.charAt(n - 1));
                    a = !!(32 & o),
                    u += (o &= 31) << c,
                    c += 5
                } while (a);
                t.value = (s = (i = u) >> 1,
                1 & ~i ? s : -s),
                t.rest = n
            }
        }
        ,
        487: (e, n) => {
            function t(e, n, t) {
                var r = e[n];
                e[n] = e[t],
                e[t] = r
            }
            function r(e, n, a, o) {
                if (a < o) {
                    var i = a - 1;
                    t(e, (c = a,
                    _ = o,
                    Math.round(c + Math.random() * (_ - c))), o);
                    for (var s = e[o], l = a; l < o; l++)
                        n(e[l], s) <= 0 && t(e, i += 1, l);
                    t(e, i + 1, l);
                    var u = i + 1;
                    r(e, n, a, u - 1),
                    r(e, n, u + 1, o)
                }
                var c, _
            }
            n.g = function(e, n) {
                r(e, n, 0, e.length - 1)
            }
        }
        ,
        552: (e, n, t) => {
            var r = t(845)
              , a = t(433)
              , o = t(225).C
              , i = t(470)
              , s = t(487).g;
            function l(e, n) {
                var t = e;
                return "string" == typeof e && (t = r.parseSourceMapInput(e)),
                null != t.sections ? new _(t,n) : new u(t,n)
            }
            function u(e, n) {
                var t = e;
                "string" == typeof e && (t = r.parseSourceMapInput(e));
                var a = r.getArg(t, "version")
                  , i = r.getArg(t, "sources")
                  , s = r.getArg(t, "names", [])
                  , l = r.getArg(t, "sourceRoot", null)
                  , u = r.getArg(t, "sourcesContent", null)
                  , c = r.getArg(t, "mappings")
                  , _ = r.getArg(t, "file", null);
                if (a != this._version)
                    throw new Error("Unsupported version: " + a);
                l && (l = r.normalize(l)),
                i = i.map(String).map(r.normalize).map((function(e) {
                    return l && r.isAbsolute(l) && r.isAbsolute(e) ? r.relative(l, e) : e
                }
                )),
                this._names = o.fromArray(s.map(String), !0),
                this._sources = o.fromArray(i, !0),
                this._absoluteSources = this._sources.toArray().map((function(e) {
                    return r.computeSourceURL(l, e, n)
                }
                )),
                this.sourceRoot = l,
                this.sourcesContent = u,
                this._mappings = c,
                this._sourceMapURL = n,
                this.file = _
            }
            function c() {
                this.generatedLine = 0,
                this.generatedColumn = 0,
                this.source = null,
                this.originalLine = null,
                this.originalColumn = null,
                this.name = null
            }
            function _(e, n) {
                var t = e;
                "string" == typeof e && (t = r.parseSourceMapInput(e));
                var a = r.getArg(t, "version")
                  , i = r.getArg(t, "sections");
                if (a != this._version)
                    throw new Error("Unsupported version: " + a);
                this._sources = new o,
                this._names = new o;
                var s = {
                    line: -1,
                    column: 0
                };
                this._sections = i.map((function(e) {
                    if (e.url)
                        throw new Error("Support for url field in sections not implemented.");
                    var t = r.getArg(e, "offset")
                      , a = r.getArg(t, "line")
                      , o = r.getArg(t, "column");
                    if (a < s.line || a === s.line && o < s.column)
                        throw new Error("Section offsets must be ordered and non-overlapping.");
                    return s = t,
                    {
                        generatedOffset: {
                            generatedLine: a + 1,
                            generatedColumn: o + 1
                        },
                        consumer: new l(r.getArg(e, "map"),n)
                    }
                }
                ))
            }
            l.fromSourceMap = function(e, n) {
                return u.fromSourceMap(e, n)
            }
            ,
            l.prototype._version = 3,
            l.prototype.__generatedMappings = null,
            Object.defineProperty(l.prototype, "_generatedMappings", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
                    this.__generatedMappings
                }
            }),
            l.prototype.__originalMappings = null,
            Object.defineProperty(l.prototype, "_originalMappings", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
                    this.__originalMappings
                }
            }),
            l.prototype._charIsMappingSeparator = function(e, n) {
                var t = e.charAt(n);
                return ";" === t || "," === t
            }
            ,
            l.prototype._parseMappings = function(e, n) {
                throw new Error("Subclasses must implement _parseMappings")
            }
            ,
            l.GENERATED_ORDER = 1,
            l.ORIGINAL_ORDER = 2,
            l.GREATEST_LOWER_BOUND = 1,
            l.LEAST_UPPER_BOUND = 2,
            l.prototype.eachMapping = function(e, n, t) {
                var a, o = n || null;
                switch (t || l.GENERATED_ORDER) {
                case l.GENERATED_ORDER:
                    a = this._generatedMappings;
                    break;
                case l.ORIGINAL_ORDER:
                    a = this._originalMappings;
                    break;
                default:
                    throw new Error("Unknown order of iteration.")
                }
                var i = this.sourceRoot;
                a.map((function(e) {
                    var n = null === e.source ? null : this._sources.at(e.source);
                    return {
                        source: n = r.computeSourceURL(i, n, this._sourceMapURL),
                        generatedLine: e.generatedLine,
                        generatedColumn: e.generatedColumn,
                        originalLine: e.originalLine,
                        originalColumn: e.originalColumn,
                        name: null === e.name ? null : this._names.at(e.name)
                    }
                }
                ), this).forEach(e, o)
            }
            ,
            l.prototype.allGeneratedPositionsFor = function(e) {
                var n = r.getArg(e, "line")
                  , t = {
                    source: r.getArg(e, "source"),
                    originalLine: n,
                    originalColumn: r.getArg(e, "column", 0)
                };
                if (t.source = this._findSourceIndex(t.source),
                t.source < 0)
                    return [];
                var o = []
                  , i = this._findMapping(t, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, a.LEAST_UPPER_BOUND);
                if (i >= 0) {
                    var s = this._originalMappings[i];
                    if (void 0 === e.column)
                        for (var l = s.originalLine; s && s.originalLine === l; )
                            o.push({
                                line: r.getArg(s, "generatedLine", null),
                                column: r.getArg(s, "generatedColumn", null),
                                lastColumn: r.getArg(s, "lastGeneratedColumn", null)
                            }),
                            s = this._originalMappings[++i];
                    else
                        for (var u = s.originalColumn; s && s.originalLine === n && s.originalColumn == u; )
                            o.push({
                                line: r.getArg(s, "generatedLine", null),
                                column: r.getArg(s, "generatedColumn", null),
                                lastColumn: r.getArg(s, "lastGeneratedColumn", null)
                            }),
                            s = this._originalMappings[++i]
                }
                return o
            }
            ,
            n.SourceMapConsumer = l,
            u.prototype = Object.create(l.prototype),
            u.prototype.consumer = l,
            u.prototype._findSourceIndex = function(e) {
                var n, t = e;
                if (null != this.sourceRoot && (t = r.relative(this.sourceRoot, t)),
                this._sources.has(t))
                    return this._sources.indexOf(t);
                for (n = 0; n < this._absoluteSources.length; ++n)
                    if (this._absoluteSources[n] == e)
                        return n;
                return -1
            }
            ,
            u.fromSourceMap = function(e, n) {
                var t = Object.create(u.prototype)
                  , a = t._names = o.fromArray(e._names.toArray(), !0)
                  , i = t._sources = o.fromArray(e._sources.toArray(), !0);
                t.sourceRoot = e._sourceRoot,
                t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot),
                t.file = e._file,
                t._sourceMapURL = n,
                t._absoluteSources = t._sources.toArray().map((function(e) {
                    return r.computeSourceURL(t.sourceRoot, e, n)
                }
                ));
                for (var l = e._mappings.toArray().slice(), _ = t.__generatedMappings = [], E = t.__originalMappings = [], m = 0, d = l.length; m < d; m++) {
                    var f = l[m]
                      , T = new c;
                    T.generatedLine = f.generatedLine,
                    T.generatedColumn = f.generatedColumn,
                    f.source && (T.source = i.indexOf(f.source),
                    T.originalLine = f.originalLine,
                    T.originalColumn = f.originalColumn,
                    f.name && (T.name = a.indexOf(f.name)),
                    E.push(T)),
                    _.push(T)
                }
                return s(t.__originalMappings, r.compareByOriginalPositions),
                t
            }
            ,
            u.prototype._version = 3,
            Object.defineProperty(u.prototype, "sources", {
                get: function() {
                    return this._absoluteSources.slice()
                }
            }),
            u.prototype._parseMappings = function(e, n) {
                for (var t, a, o, l, u, _ = 1, E = 0, m = 0, d = 0, f = 0, T = 0, p = e.length, S = 0, O = {}, N = {}, C = [], A = []; S < p; )
                    if (";" === e.charAt(S))
                        _++,
                        S++,
                        E = 0;
                    else if ("," === e.charAt(S))
                        S++;
                    else {
                        for ((t = new c).generatedLine = _,
                        l = S; l < p && !this._charIsMappingSeparator(e, l); l++)
                            ;
                        if (o = O[a = e.slice(S, l)])
                            S += a.length;
                        else {
                            for (o = []; S < l; )
                                i.decode(e, S, N),
                                u = N.value,
                                S = N.rest,
                                o.push(u);
                            if (2 === o.length)
                                throw new Error("Found a source, but no line and column");
                            if (3 === o.length)
                                throw new Error("Found a source and line, but no column");
                            O[a] = o
                        }
                        t.generatedColumn = E + o[0],
                        E = t.generatedColumn,
                        o.length > 1 && (t.source = f + o[1],
                        f += o[1],
                        t.originalLine = m + o[2],
                        m = t.originalLine,
                        t.originalLine += 1,
                        t.originalColumn = d + o[3],
                        d = t.originalColumn,
                        o.length > 4 && (t.name = T + o[4],
                        T += o[4])),
                        A.push(t),
                        "number" == typeof t.originalLine && C.push(t)
                    }
                s(A, r.compareByGeneratedPositionsDeflated),
                this.__generatedMappings = A,
                s(C, r.compareByOriginalPositions),
                this.__originalMappings = C
            }
            ,
            u.prototype._findMapping = function(e, n, t, r, o, i) {
                if (e[t] <= 0)
                    throw new TypeError("Line must be greater than or equal to 1, got " + e[t]);
                if (e[r] < 0)
                    throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
                return a.search(e, n, o, i)
            }
            ,
            u.prototype.computeColumnSpans = function() {
                for (var e = 0; e < this._generatedMappings.length; ++e) {
                    var n = this._generatedMappings[e];
                    if (e + 1 < this._generatedMappings.length) {
                        var t = this._generatedMappings[e + 1];
                        if (n.generatedLine === t.generatedLine) {
                            n.lastGeneratedColumn = t.generatedColumn - 1;
                            continue
                        }
                    }
                    n.lastGeneratedColumn = 1 / 0
                }
            }
            ,
            u.prototype.originalPositionFor = function(e) {
                var n = {
                    generatedLine: r.getArg(e, "line"),
                    generatedColumn: r.getArg(e, "column")
                }
                  , t = this._findMapping(n, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
                if (t >= 0) {
                    var a = this._generatedMappings[t];
                    if (a.generatedLine === n.generatedLine) {
                        var o = r.getArg(a, "source", null);
                        null !== o && (o = this._sources.at(o),
                        o = r.computeSourceURL(this.sourceRoot, o, this._sourceMapURL));
                        var i = r.getArg(a, "name", null);
                        return null !== i && (i = this._names.at(i)),
                        {
                            source: o,
                            line: r.getArg(a, "originalLine", null),
                            column: r.getArg(a, "originalColumn", null),
                            name: i
                        }
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                }
            }
            ,
            u.prototype.hasContentsOfAllSources = function() {
                return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some((function(e) {
                    return null == e
                }
                ))
            }
            ,
            u.prototype.sourceContentFor = function(e, n) {
                if (!this.sourcesContent)
                    return null;
                var t = this._findSourceIndex(e);
                if (t >= 0)
                    return this.sourcesContent[t];
                var a, o = e;
                if (null != this.sourceRoot && (o = r.relative(this.sourceRoot, o)),
                null != this.sourceRoot && (a = r.urlParse(this.sourceRoot))) {
                    var i = o.replace(/^file:\/\//, "");
                    if ("file" == a.scheme && this._sources.has(i))
                        return this.sourcesContent[this._sources.indexOf(i)];
                    if ((!a.path || "/" == a.path) && this._sources.has("/" + o))
                        return this.sourcesContent[this._sources.indexOf("/" + o)]
                }
                if (n)
                    return null;
                throw new Error('"' + o + '" is not in the SourceMap.')
            }
            ,
            u.prototype.generatedPositionFor = function(e) {
                var n = r.getArg(e, "source");
                if ((n = this._findSourceIndex(n)) < 0)
                    return {
                        line: null,
                        column: null,
                        lastColumn: null
                    };
                var t = {
                    source: n,
                    originalLine: r.getArg(e, "line"),
                    originalColumn: r.getArg(e, "column")
                }
                  , a = this._findMapping(t, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
                if (a >= 0) {
                    var o = this._originalMappings[a];
                    if (o.source === t.source)
                        return {
                            line: r.getArg(o, "generatedLine", null),
                            column: r.getArg(o, "generatedColumn", null),
                            lastColumn: r.getArg(o, "lastGeneratedColumn", null)
                        }
                }
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                }
            }
            ,
            _.prototype = Object.create(l.prototype),
            _.prototype.constructor = l,
            _.prototype._version = 3,
            Object.defineProperty(_.prototype, "sources", {
                get: function() {
                    for (var e = [], n = 0; n < this._sections.length; n++)
                        for (var t = 0; t < this._sections[n].consumer.sources.length; t++)
                            e.push(this._sections[n].consumer.sources[t]);
                    return e
                }
            }),
            _.prototype.originalPositionFor = function(e) {
                var n = {
                    generatedLine: r.getArg(e, "line"),
                    generatedColumn: r.getArg(e, "column")
                }
                  , t = a.search(n, this._sections, (function(e, n) {
                    return e.generatedLine - n.generatedOffset.generatedLine || e.generatedColumn - n.generatedOffset.generatedColumn
                }
                ))
                  , o = this._sections[t];
                return o ? o.consumer.originalPositionFor({
                    line: n.generatedLine - (o.generatedOffset.generatedLine - 1),
                    column: n.generatedColumn - (o.generatedOffset.generatedLine === n.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                    bias: e.bias
                }) : {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                }
            }
            ,
            _.prototype.hasContentsOfAllSources = function() {
                return this._sections.every((function(e) {
                    return e.consumer.hasContentsOfAllSources()
                }
                ))
            }
            ,
            _.prototype.sourceContentFor = function(e, n) {
                for (var t = 0; t < this._sections.length; t++) {
                    var r = this._sections[t].consumer.sourceContentFor(e, !0);
                    if (r)
                        return r
                }
                if (n)
                    return null;
                throw new Error('"' + e + '" is not in the SourceMap.')
            }
            ,
            _.prototype.generatedPositionFor = function(e) {
                for (var n = 0; n < this._sections.length; n++) {
                    var t = this._sections[n];
                    if (-1 !== t.consumer._findSourceIndex(r.getArg(e, "source"))) {
                        var a = t.consumer.generatedPositionFor(e);
                        if (a)
                            return {
                                line: a.line + (t.generatedOffset.generatedLine - 1),
                                column: a.column + (t.generatedOffset.generatedLine === a.line ? t.generatedOffset.generatedColumn - 1 : 0)
                            }
                    }
                }
                return {
                    line: null,
                    column: null
                }
            }
            ,
            _.prototype._parseMappings = function(e, n) {
                this.__generatedMappings = [],
                this.__originalMappings = [];
                for (var t = 0; t < this._sections.length; t++)
                    for (var a = this._sections[t], o = a.consumer._generatedMappings, i = 0; i < o.length; i++) {
                        var l = o[i]
                          , u = a.consumer._sources.at(l.source);
                        u = r.computeSourceURL(a.consumer.sourceRoot, u, this._sourceMapURL),
                        this._sources.add(u),
                        u = this._sources.indexOf(u);
                        var c = null;
                        l.name && (c = a.consumer._names.at(l.name),
                        this._names.add(c),
                        c = this._names.indexOf(c));
                        var _ = {
                            source: u,
                            generatedLine: l.generatedLine + (a.generatedOffset.generatedLine - 1),
                            generatedColumn: l.generatedColumn + (a.generatedOffset.generatedLine === l.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
                            originalLine: l.originalLine,
                            originalColumn: l.originalColumn,
                            name: c
                        };
                        this.__generatedMappings.push(_),
                        "number" == typeof _.originalLine && this.__originalMappings.push(_)
                    }
                s(this.__generatedMappings, r.compareByGeneratedPositionsDeflated),
                s(this.__originalMappings, r.compareByOriginalPositions)
            }
        }
        ,
        649: (e, n, t) => {
            "use strict";
            e.exports = t(928)
        }
        ,
        687: (e, n, t) => {
            var r = t(470)
              , a = t(845)
              , o = t(225).C
              , i = t(316).P;
            function s(e) {
                e || (e = {}),
                this._file = a.getArg(e, "file", null),
                this._sourceRoot = a.getArg(e, "sourceRoot", null),
                this._skipValidation = a.getArg(e, "skipValidation", !1),
                this._sources = new o,
                this._names = new o,
                this._mappings = new i,
                this._sourcesContents = null
            }
            s.prototype._version = 3,
            s.fromSourceMap = function(e) {
                var n = e.sourceRoot
                  , t = new s({
                    file: e.file,
                    sourceRoot: n
                });
                return e.eachMapping((function(e) {
                    var r = {
                        generated: {
                            line: e.generatedLine,
                            column: e.generatedColumn
                        }
                    };
                    null != e.source && (r.source = e.source,
                    null != n && (r.source = a.relative(n, r.source)),
                    r.original = {
                        line: e.originalLine,
                        column: e.originalColumn
                    },
                    null != e.name && (r.name = e.name)),
                    t.addMapping(r)
                }
                )),
                e.sources.forEach((function(r) {
                    var o = r;
                    null !== n && (o = a.relative(n, r)),
                    t._sources.has(o) || t._sources.add(o);
                    var i = e.sourceContentFor(r);
                    null != i && t.setSourceContent(r, i)
                }
                )),
                t
            }
            ,
            s.prototype.addMapping = function(e) {
                var n = a.getArg(e, "generated")
                  , t = a.getArg(e, "original", null)
                  , r = a.getArg(e, "source", null)
                  , o = a.getArg(e, "name", null);
                this._skipValidation || this._validateMapping(n, t, r, o),
                null != r && (r = String(r),
                this._sources.has(r) || this._sources.add(r)),
                null != o && (o = String(o),
                this._names.has(o) || this._names.add(o)),
                this._mappings.add({
                    generatedLine: n.line,
                    generatedColumn: n.column,
                    originalLine: null != t && t.line,
                    originalColumn: null != t && t.column,
                    source: r,
                    name: o
                })
            }
            ,
            s.prototype.setSourceContent = function(e, n) {
                var t = e;
                null != this._sourceRoot && (t = a.relative(this._sourceRoot, t)),
                null != n ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
                this._sourcesContents[a.toSetString(t)] = n) : this._sourcesContents && (delete this._sourcesContents[a.toSetString(t)],
                0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
            }
            ,
            s.prototype.applySourceMap = function(e, n, t) {
                var r = n;
                if (null == n) {
                    if (null == e.file)
                        throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    r = e.file
                }
                var i = this._sourceRoot;
                null != i && (r = a.relative(i, r));
                var s = new o
                  , l = new o;
                this._mappings.unsortedForEach((function(n) {
                    if (n.source === r && null != n.originalLine) {
                        var o = e.originalPositionFor({
                            line: n.originalLine,
                            column: n.originalColumn
                        });
                        null != o.source && (n.source = o.source,
                        null != t && (n.source = a.join(t, n.source)),
                        null != i && (n.source = a.relative(i, n.source)),
                        n.originalLine = o.line,
                        n.originalColumn = o.column,
                        null != o.name && (n.name = o.name))
                    }
                    var u = n.source;
                    null == u || s.has(u) || s.add(u);
                    var c = n.name;
                    null == c || l.has(c) || l.add(c)
                }
                ), this),
                this._sources = s,
                this._names = l,
                e.sources.forEach((function(n) {
                    var r = e.sourceContentFor(n);
                    null != r && (null != t && (n = a.join(t, n)),
                    null != i && (n = a.relative(i, n)),
                    this.setSourceContent(n, r))
                }
                ), this)
            }
            ,
            s.prototype._validateMapping = function(e, n, t, r) {
                if (n && "number" != typeof n.line && "number" != typeof n.column)
                    throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
                if ((!(e && "line"in e && "column"in e && e.line > 0 && e.column >= 0) || n || t || r) && !(e && "line"in e && "column"in e && n && "line"in n && "column"in n && e.line > 0 && e.column >= 0 && n.line > 0 && n.column >= 0 && t))
                    throw new Error("Invalid mapping: " + JSON.stringify({
                        generated: e,
                        source: t,
                        original: n,
                        name: r
                    }))
            }
            ,
            s.prototype._serializeMappings = function() {
                for (var e, n, t, o, i = 0, s = 1, l = 0, u = 0, c = 0, _ = 0, E = "", m = this._mappings.toArray(), d = 0, f = m.length; d < f; d++) {
                    if (e = "",
                    (n = m[d]).generatedLine !== s)
                        for (i = 0; n.generatedLine !== s; )
                            e += ";",
                            s++;
                    else if (d > 0) {
                        if (!a.compareByGeneratedPositionsInflated(n, m[d - 1]))
                            continue;
                        e += ","
                    }
                    e += r.encode(n.generatedColumn - i),
                    i = n.generatedColumn,
                    null != n.source && (o = this._sources.indexOf(n.source),
                    e += r.encode(o - _),
                    _ = o,
                    e += r.encode(n.originalLine - 1 - u),
                    u = n.originalLine - 1,
                    e += r.encode(n.originalColumn - l),
                    l = n.originalColumn,
                    null != n.name && (t = this._names.indexOf(n.name),
                    e += r.encode(t - c),
                    c = t)),
                    E += e
                }
                return E
            }
            ,
            s.prototype._generateSourcesContent = function(e, n) {
                return e.map((function(e) {
                    if (!this._sourcesContents)
                        return null;
                    null != n && (e = a.relative(n, e));
                    var t = a.toSetString(e);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, t) ? this._sourcesContents[t] : null
                }
                ), this)
            }
            ,
            s.prototype.toJSON = function() {
                var e = {
                    version: this._version,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return null != this._file && (e.file = this._file),
                null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
                this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)),
                e
            }
            ,
            s.prototype.toString = function() {
                return JSON.stringify(this.toJSON())
            }
            ,
            n.x = s
        }
        ,
        697: (e, n, t) => {
            var r = t(687).x
              , a = t(845)
              , o = /(\r?\n)/
              , i = "$$$isSourceNode$$$";
            function s(e, n, t, r, a) {
                this.children = [],
                this.sourceContents = {},
                this.line = null == e ? null : e,
                this.column = null == n ? null : n,
                this.source = null == t ? null : t,
                this.name = null == a ? null : a,
                this[i] = !0,
                null != r && this.add(r)
            }
            s.fromStringWithSourceMap = function(e, n, t) {
                var r = new s
                  , i = e.split(o)
                  , l = 0
                  , u = function() {
                    return e() + (e() || "");
                    function e() {
                        return l < i.length ? i[l++] : void 0
                    }
                }
                  , c = 1
                  , _ = 0
                  , E = null;
                return n.eachMapping((function(e) {
                    if (null !== E) {
                        if (!(c < e.generatedLine)) {
                            var n = (t = i[l] || "").substr(0, e.generatedColumn - _);
                            return i[l] = t.substr(e.generatedColumn - _),
                            _ = e.generatedColumn,
                            m(E, n),
                            void (E = e)
                        }
                        m(E, u()),
                        c++,
                        _ = 0
                    }
                    for (; c < e.generatedLine; )
                        r.add(u()),
                        c++;
                    if (_ < e.generatedColumn) {
                        var t = i[l] || "";
                        r.add(t.substr(0, e.generatedColumn)),
                        i[l] = t.substr(e.generatedColumn),
                        _ = e.generatedColumn
                    }
                    E = e
                }
                ), this),
                l < i.length && (E && m(E, u()),
                r.add(i.splice(l).join(""))),
                n.sources.forEach((function(e) {
                    var o = n.sourceContentFor(e);
                    null != o && (null != t && (e = a.join(t, e)),
                    r.setSourceContent(e, o))
                }
                )),
                r;
                function m(e, n) {
                    if (null === e || void 0 === e.source)
                        r.add(n);
                    else {
                        var o = t ? a.join(t, e.source) : e.source;
                        r.add(new s(e.originalLine,e.originalColumn,o,n,e.name))
                    }
                }
            }
            ,
            s.prototype.add = function(e) {
                if (Array.isArray(e))
                    e.forEach((function(e) {
                        this.add(e)
                    }
                    ), this);
                else {
                    if (!e[i] && "string" != typeof e)
                        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    e && this.children.push(e)
                }
                return this
            }
            ,
            s.prototype.prepend = function(e) {
                if (Array.isArray(e))
                    for (var n = e.length - 1; n >= 0; n--)
                        this.prepend(e[n]);
                else {
                    if (!e[i] && "string" != typeof e)
                        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                    this.children.unshift(e)
                }
                return this
            }
            ,
            s.prototype.walk = function(e) {
                for (var n, t = 0, r = this.children.length; t < r; t++)
                    (n = this.children[t])[i] ? n.walk(e) : "" !== n && e(n, {
                        source: this.source,
                        line: this.line,
                        column: this.column,
                        name: this.name
                    })
            }
            ,
            s.prototype.join = function(e) {
                var n, t, r = this.children.length;
                if (r > 0) {
                    for (n = [],
                    t = 0; t < r - 1; t++)
                        n.push(this.children[t]),
                        n.push(e);
                    n.push(this.children[t]),
                    this.children = n
                }
                return this
            }
            ,
            s.prototype.replaceRight = function(e, n) {
                var t = this.children[this.children.length - 1];
                return t[i] ? t.replaceRight(e, n) : "string" == typeof t ? this.children[this.children.length - 1] = t.replace(e, n) : this.children.push("".replace(e, n)),
                this
            }
            ,
            s.prototype.setSourceContent = function(e, n) {
                this.sourceContents[a.toSetString(e)] = n
            }
            ,
            s.prototype.walkSourceContents = function(e) {
                for (var n = 0, t = this.children.length; n < t; n++)
                    this.children[n][i] && this.children[n].walkSourceContents(e);
                var r = Object.keys(this.sourceContents);
                for (n = 0,
                t = r.length; n < t; n++)
                    e(a.fromSetString(r[n]), this.sourceContents[r[n]])
            }
            ,
            s.prototype.toString = function() {
                var e = "";
                return this.walk((function(n) {
                    e += n
                }
                )),
                e
            }
            ,
            s.prototype.toStringWithSourceMap = function(e) {
                var n = {
                    code: "",
                    line: 1,
                    column: 0
                }
                  , t = new r(e)
                  , a = !1
                  , o = null
                  , i = null
                  , s = null
                  , l = null;
                return this.walk((function(e, r) {
                    n.code += e,
                    null !== r.source && null !== r.line && null !== r.column ? (o === r.source && i === r.line && s === r.column && l === r.name || t.addMapping({
                        source: r.source,
                        original: {
                            line: r.line,
                            column: r.column
                        },
                        generated: {
                            line: n.line,
                            column: n.column
                        },
                        name: r.name
                    }),
                    o = r.source,
                    i = r.line,
                    s = r.column,
                    l = r.name,
                    a = !0) : a && (t.addMapping({
                        generated: {
                            line: n.line,
                            column: n.column
                        }
                    }),
                    o = null,
                    a = !1);
                    for (var u = 0, c = e.length; u < c; u++)
                        10 === e.charCodeAt(u) ? (n.line++,
                        n.column = 0,
                        u + 1 === c ? (o = null,
                        a = !1) : a && t.addMapping({
                            source: r.source,
                            original: {
                                line: r.line,
                                column: r.column
                            },
                            generated: {
                                line: n.line,
                                column: n.column
                            },
                            name: r.name
                        })) : n.column++
                }
                )),
                this.walkSourceContents((function(e, n) {
                    t.setSourceContent(e, n)
                }
                )),
                {
                    code: n.code,
                    map: t
                }
            }
        }
        ,
        712: (e, n) => {
            "use strict";
            function t(e, n) {
                var t = e.length;
                e.push(n);
                e: for (; 0 < t; ) {
                    var r = t - 1 >>> 1
                      , a = e[r];
                    if (!(0 < o(a, n)))
                        break e;
                    e[r] = n,
                    e[t] = a,
                    t = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function a(e) {
                if (0 === e.length)
                    return null;
                var n = e[0]
                  , t = e.pop();
                if (t !== n) {
                    e[0] = t;
                    e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
                        var s = 2 * (r + 1) - 1
                          , l = e[s]
                          , u = s + 1
                          , c = e[u];
                        if (0 > o(l, t))
                            u < a && 0 > o(c, l) ? (e[r] = c,
                            e[u] = t,
                            r = u) : (e[r] = l,
                            e[s] = t,
                            r = s);
                        else {
                            if (!(u < a && 0 > o(c, t)))
                                break e;
                            e[r] = c,
                            e[u] = t,
                            r = u
                        }
                    }
                }
                return n
            }
            function o(e, n) {
                var t = e.sortIndex - n.sortIndex;
                return 0 !== t ? t : e.id - n.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var i = performance;
                n.unstable_now = function() {
                    return i.now()
                }
            } else {
                var s = Date
                  , l = s.now();
                n.unstable_now = function() {
                    return s.now() - l
                }
            }
            var u = []
              , c = []
              , _ = 1
              , E = null
              , m = 3
              , d = !1
              , f = !1
              , T = !1
              , p = "function" == typeof setTimeout ? setTimeout : null
              , S = "function" == typeof clearTimeout ? clearTimeout : null
              , O = "undefined" != typeof setImmediate ? setImmediate : null;
            function N(e) {
                for (var n = r(c); null !== n; ) {
                    if (null === n.callback)
                        a(c);
                    else {
                        if (!(n.startTime <= e))
                            break;
                        a(c),
                        n.sortIndex = n.expirationTime,
                        t(u, n)
                    }
                    n = r(c)
                }
            }
            function C(e) {
                if (T = !1,
                N(e),
                !f)
                    if (null !== r(u))
                        f = !0,
                        w(A);
                    else {
                        var n = r(c);
                        null !== n && b(C, n.startTime - e)
                    }
            }
            function A(e, t) {
                f = !1,
                T && (T = !1,
                S(R),
                R = -1),
                d = !0;
                var o = m;
                try {
                    for (N(t),
                    E = r(u); null !== E && (!(E.expirationTime > t) || e && !D()); ) {
                        var i = E.callback;
                        if ("function" == typeof i) {
                            E.callback = null,
                            m = E.priorityLevel;
                            var s = i(E.expirationTime <= t);
                            t = n.unstable_now(),
                            "function" == typeof s ? E.callback = s : E === r(u) && a(u),
                            N(t)
                        } else
                            a(u);
                        E = r(u)
                    }
                    if (null !== E)
                        var l = !0;
                    else {
                        var _ = r(c);
                        null !== _ && b(C, _.startTime - t),
                        l = !1
                    }
                    return l
                } finally {
                    E = null,
                    m = o,
                    d = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var I, h = !1, L = null, R = -1, g = 5, P = -1;
            function D() {
                return !(n.unstable_now() - P < g)
            }
            function M() {
                if (null !== L) {
                    var e = n.unstable_now();
                    P = e;
                    var t = !0;
                    try {
                        t = L(!0, e)
                    } finally {
                        t ? I() : (h = !1,
                        L = null)
                    }
                } else
                    h = !1
            }
            if ("function" == typeof O)
                I = function() {
                    O(M)
                }
                ;
            else if ("undefined" != typeof MessageChannel) {
                var y = new MessageChannel
                  , U = y.port2;
                y.port1.onmessage = M,
                I = function() {
                    U.postMessage(null)
                }
            } else
                I = function() {
                    p(M, 0)
                }
                ;
            function w(e) {
                L = e,
                h || (h = !0,
                I())
            }
            function b(e, t) {
                R = p((function() {
                    e(n.unstable_now())
                }
                ), t)
            }
            n.unstable_IdlePriority = 5,
            n.unstable_ImmediatePriority = 1,
            n.unstable_LowPriority = 4,
            n.unstable_NormalPriority = 3,
            n.unstable_Profiling = null,
            n.unstable_UserBlockingPriority = 2,
            n.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            n.unstable_continueExecution = function() {
                f || d || (f = !0,
                w(A))
            }
            ,
            n.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : g = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            n.unstable_getCurrentPriorityLevel = function() {
                return m
            }
            ,
            n.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            n.unstable_next = function(e) {
                switch (m) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = m
                }
                var t = m;
                m = n;
                try {
                    return e()
                } finally {
                    m = t
                }
            }
            ,
            n.unstable_pauseExecution = function() {}
            ,
            n.unstable_requestPaint = function() {}
            ,
            n.unstable_runWithPriority = function(e, n) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var t = m;
                m = e;
                try {
                    return n()
                } finally {
                    m = t
                }
            }
            ,
            n.unstable_scheduleCallback = function(e, a, o) {
                var i = n.unstable_now();
                switch (o = "object" == typeof o && null !== o && "number" == typeof (o = o.delay) && 0 < o ? i + o : i,
                e) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3
                }
                return e = {
                    id: _++,
                    callback: a,
                    priorityLevel: e,
                    startTime: o,
                    expirationTime: s = o + s,
                    sortIndex: -1
                },
                o > i ? (e.sortIndex = o,
                t(c, e),
                null === r(u) && e === r(c) && (T ? (S(R),
                R = -1) : T = !0,
                b(C, o - i))) : (e.sortIndex = s,
                t(u, e),
                f || d || (f = !0,
                w(A))),
                e
            }
            ,
            n.unstable_shouldYield = D,
            n.unstable_wrapCallback = function(e) {
                var n = m;
                return function() {
                    var t = m;
                    m = n;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        m = t
                    }
                }
            }
        }
        ,
        845: (e, n) => {
            n.getArg = function(e, n, t) {
                if (n in e)
                    return e[n];
                if (3 === arguments.length)
                    return t;
                throw new Error('"' + n + '" is a required argument.')
            }
            ;
            var t = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/
              , r = /^data:.+\,.+$/;
            function a(e) {
                var n = e.match(t);
                return n ? {
                    scheme: n[1],
                    auth: n[2],
                    host: n[3],
                    port: n[4],
                    path: n[5]
                } : null
            }
            function o(e) {
                var n = "";
                return e.scheme && (n += e.scheme + ":"),
                n += "//",
                e.auth && (n += e.auth + "@"),
                e.host && (n += e.host),
                e.port && (n += ":" + e.port),
                e.path && (n += e.path),
                n
            }
            function i(e) {
                var t = e
                  , r = a(e);
                if (r) {
                    if (!r.path)
                        return e;
                    t = r.path
                }
                for (var i, s = n.isAbsolute(t), l = t.split(/\/+/), u = 0, c = l.length - 1; c >= 0; c--)
                    "." === (i = l[c]) ? l.splice(c, 1) : ".." === i ? u++ : u > 0 && ("" === i ? (l.splice(c + 1, u),
                    u = 0) : (l.splice(c, 2),
                    u--));
                return "" === (t = l.join("/")) && (t = s ? "/" : "."),
                r ? (r.path = t,
                o(r)) : t
            }
            function s(e, n) {
                "" === e && (e = "."),
                "" === n && (n = ".");
                var t = a(n)
                  , s = a(e);
                if (s && (e = s.path || "/"),
                t && !t.scheme)
                    return s && (t.scheme = s.scheme),
                    o(t);
                if (t || n.match(r))
                    return n;
                if (s && !s.host && !s.path)
                    return s.host = n,
                    o(s);
                var l = "/" === n.charAt(0) ? n : i(e.replace(/\/+$/, "") + "/" + n);
                return s ? (s.path = l,
                o(s)) : l
            }
            n.urlParse = a,
            n.urlGenerate = o,
            n.normalize = i,
            n.join = s,
            n.isAbsolute = function(e) {
                return "/" === e.charAt(0) || t.test(e)
            }
            ,
            n.relative = function(e, n) {
                "" === e && (e = "."),
                e = e.replace(/\/$/, "");
                for (var t = 0; 0 !== n.indexOf(e + "/"); ) {
                    var r = e.lastIndexOf("/");
                    if (r < 0)
                        return n;
                    if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/))
                        return n;
                    ++t
                }
                return Array(t + 1).join("../") + n.substr(e.length + 1)
            }
            ;
            var l = !("__proto__"in Object.create(null));
            function u(e) {
                return e
            }
            function c(e) {
                if (!e)
                    return !1;
                var n = e.length;
                if (n < 9)
                    return !1;
                if (95 !== e.charCodeAt(n - 1) || 95 !== e.charCodeAt(n - 2) || 111 !== e.charCodeAt(n - 3) || 116 !== e.charCodeAt(n - 4) || 111 !== e.charCodeAt(n - 5) || 114 !== e.charCodeAt(n - 6) || 112 !== e.charCodeAt(n - 7) || 95 !== e.charCodeAt(n - 8) || 95 !== e.charCodeAt(n - 9))
                    return !1;
                for (var t = n - 10; t >= 0; t--)
                    if (36 !== e.charCodeAt(t))
                        return !1;
                return !0
            }
            function _(e, n) {
                return e === n ? 0 : null === e ? 1 : null === n ? -1 : e > n ? 1 : -1
            }
            n.toSetString = l ? u : function(e) {
                return c(e) ? "$" + e : e
            }
            ,
            n.fromSetString = l ? u : function(e) {
                return c(e) ? e.slice(1) : e
            }
            ,
            n.compareByOriginalPositions = function(e, n, t) {
                var r = _(e.source, n.source);
                return 0 !== r || 0 != (r = e.originalLine - n.originalLine) || 0 != (r = e.originalColumn - n.originalColumn) || t || 0 != (r = e.generatedColumn - n.generatedColumn) || 0 != (r = e.generatedLine - n.generatedLine) ? r : _(e.name, n.name)
            }
            ,
            n.compareByGeneratedPositionsDeflated = function(e, n, t) {
                var r = e.generatedLine - n.generatedLine;
                return 0 !== r || 0 != (r = e.generatedColumn - n.generatedColumn) || t || 0 !== (r = _(e.source, n.source)) || 0 != (r = e.originalLine - n.originalLine) || 0 != (r = e.originalColumn - n.originalColumn) ? r : _(e.name, n.name)
            }
            ,
            n.compareByGeneratedPositionsInflated = function(e, n) {
                var t = e.generatedLine - n.generatedLine;
                return 0 !== t || 0 != (t = e.generatedColumn - n.generatedColumn) || 0 !== (t = _(e.source, n.source)) || 0 != (t = e.originalLine - n.originalLine) || 0 != (t = e.originalColumn - n.originalColumn) ? t : _(e.name, n.name)
            }
            ,
            n.parseSourceMapInput = function(e) {
                return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
            }
            ,
            n.computeSourceURL = function(e, n, t) {
                if (n = n || "",
                e && ("/" !== e[e.length - 1] && "/" !== n[0] && (e += "/"),
                n = e + n),
                t) {
                    var r = a(t);
                    if (!r)
                        throw new Error("sourceMapURL could not be parsed");
                    if (r.path) {
                        var l = r.path.lastIndexOf("/");
                        l >= 0 && (r.path = r.path.substring(0, l + 1))
                    }
                    n = s(o(r), n)
                }
                return i(n)
            }
        }
        ,
        863: (e, n, t) => {
            "use strict";
            e.exports = t(712)
        }
        ,
        928: (e, n) => {
            "use strict";
            var t = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , a = Symbol.for("react.fragment")
              , o = Symbol.for("react.strict_mode")
              , i = Symbol.for("react.profiler")
              , s = Symbol.for("react.provider")
              , l = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , _ = Symbol.for("react.memo")
              , E = Symbol.for("react.lazy")
              , m = Symbol.iterator
              , d = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , f = Object.assign
              , T = {};
            function p(e, n, t) {
                this.props = e,
                this.context = n,
                this.refs = T,
                this.updater = t || d
            }
            function S() {}
            function O(e, n, t) {
                this.props = e,
                this.context = n,
                this.refs = T,
                this.updater = t || d
            }
            p.prototype.isReactComponent = {},
            p.prototype.setState = function(e, n) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, n, "setState")
            }
            ,
            p.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            S.prototype = p.prototype;
            var N = O.prototype = new S;
            N.constructor = O,
            f(N, p.prototype),
            N.isPureReactComponent = !0;
            var C = Array.isArray
              , A = Object.prototype.hasOwnProperty
              , I = {
                current: null
            }
              , h = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function L(e, n, r) {
                var a, o = {}, i = null, s = null;
                if (null != n)
                    for (a in void 0 !== n.ref && (s = n.ref),
                    void 0 !== n.key && (i = "" + n.key),
                    n)
                        A.call(n, a) && !h.hasOwnProperty(a) && (o[a] = n[a]);
                var l = arguments.length - 2;
                if (1 === l)
                    o.children = r;
                else if (1 < l) {
                    for (var u = Array(l), c = 0; c < l; c++)
                        u[c] = arguments[c + 2];
                    o.children = u
                }
                if (e && e.defaultProps)
                    for (a in l = e.defaultProps)
                        void 0 === o[a] && (o[a] = l[a]);
                return {
                    $$typeof: t,
                    type: e,
                    key: i,
                    ref: s,
                    props: o,
                    _owner: I.current
                }
            }
            function R(e) {
                return "object" == typeof e && null !== e && e.$$typeof === t
            }
            var g = /\/+/g;
            function P(e, n) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var n = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return n[e]
                    }
                    ))
                }("" + e.key) : n.toString(36)
            }
            function D(e, n, a, o, i) {
                var s = typeof e;
                "undefined" !== s && "boolean" !== s || (e = null);
                var l = !1;
                if (null === e)
                    l = !0;
                else
                    switch (s) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case t:
                        case r:
                            l = !0
                        }
                    }
                if (l)
                    return i = i(l = e),
                    e = "" === o ? "." + P(l, 0) : o,
                    C(i) ? (a = "",
                    null != e && (a = e.replace(g, "$&/") + "/"),
                    D(i, n, a, "", (function(e) {
                        return e
                    }
                    ))) : null != i && (R(i) && (i = function(e, n) {
                        return {
                            $$typeof: t,
                            type: e.type,
                            key: n,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, a + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(g, "$&/") + "/") + e)),
                    n.push(i)),
                    1;
                if (l = 0,
                o = "" === o ? "." : o + ":",
                C(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = o + P(s = e[u], u);
                        l += D(s, n, a, c, i)
                    }
                else if (c = function(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = m && e[m] || e["@@iterator"]) ? e : null
                }(e),
                "function" == typeof c)
                    for (e = c.call(e),
                    u = 0; !(s = e.next()).done; )
                        l += D(s = s.value, n, a, c = o + P(s, u++), i);
                else if ("object" === s)
                    throw n = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }
            function M(e, n, t) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return D(e, r, "", "", (function(e) {
                    return n.call(t, e, a++)
                }
                )),
                r
            }
            function y(e) {
                if (-1 === e._status) {
                    var n = e._result;
                    (n = n()).then((function(n) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = n)
                    }
                    ), (function(n) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = n)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = n)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var U = {
                current: null
            }
              , w = {
                transition: null
            }
              , b = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: w,
                ReactCurrentOwner: I
            };
            function k() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            n.Children = {
                map: M,
                forEach: function(e, n, t) {
                    M(e, (function() {
                        n.apply(this, arguments)
                    }
                    ), t)
                },
                count: function(e) {
                    var n = 0;
                    return M(e, (function() {
                        n++
                    }
                    )),
                    n
                },
                toArray: function(e) {
                    return M(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!R(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            n.Component = p,
            n.Fragment = a,
            n.Profiler = i,
            n.PureComponent = O,
            n.StrictMode = o,
            n.Suspense = c,
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b,
            n.act = k,
            n.cloneElement = function(e, n, r) {
                if (null == e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = f({}, e.props)
                  , o = e.key
                  , i = e.ref
                  , s = e._owner;
                if (null != n) {
                    if (void 0 !== n.ref && (i = n.ref,
                    s = I.current),
                    void 0 !== n.key && (o = "" + n.key),
                    e.type && e.type.defaultProps)
                        var l = e.type.defaultProps;
                    for (u in n)
                        A.call(n, u) && !h.hasOwnProperty(u) && (a[u] = void 0 === n[u] && void 0 !== l ? l[u] : n[u])
                }
                var u = arguments.length - 2;
                if (1 === u)
                    a.children = r;
                else if (1 < u) {
                    l = Array(u);
                    for (var c = 0; c < u; c++)
                        l[c] = arguments[c + 2];
                    a.children = l
                }
                return {
                    $$typeof: t,
                    type: e.type,
                    key: o,
                    ref: i,
                    props: a,
                    _owner: s
                }
            }
            ,
            n.createContext = function(e) {
                return (e = {
                    $$typeof: l,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: s,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            n.createElement = L,
            n.createFactory = function(e) {
                var n = L.bind(null, e);
                return n.type = e,
                n
            }
            ,
            n.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            n.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            n.isValidElement = R,
            n.lazy = function(e) {
                return {
                    $$typeof: E,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: y
                }
            }
            ,
            n.memo = function(e, n) {
                return {
                    $$typeof: _,
                    type: e,
                    compare: void 0 === n ? null : n
                }
            }
            ,
            n.startTransition = function(e) {
                var n = w.transition;
                w.transition = {};
                try {
                    e()
                } finally {
                    w.transition = n
                }
            }
            ,
            n.unstable_act = k,
            n.useCallback = function(e, n) {
                return U.current.useCallback(e, n)
            }
            ,
            n.useContext = function(e) {
                return U.current.useContext(e)
            }
            ,
            n.useDebugValue = function() {}
            ,
            n.useDeferredValue = function(e) {
                return U.current.useDeferredValue(e)
            }
            ,
            n.useEffect = function(e, n) {
                return U.current.useEffect(e, n)
            }
            ,
            n.useId = function() {
                return U.current.useId()
            }
            ,
            n.useImperativeHandle = function(e, n, t) {
                return U.current.useImperativeHandle(e, n, t)
            }
            ,
            n.useInsertionEffect = function(e, n) {
                return U.current.useInsertionEffect(e, n)
            }
            ,
            n.useLayoutEffect = function(e, n) {
                return U.current.useLayoutEffect(e, n)
            }
            ,
            n.useMemo = function(e, n) {
                return U.current.useMemo(e, n)
            }
            ,
            n.useReducer = function(e, n, t) {
                return U.current.useReducer(e, n, t)
            }
            ,
            n.useRef = function(e) {
                return U.current.useRef(e)
            }
            ,
            n.useState = function(e) {
                return U.current.useState(e)
            }
            ,
            n.useSyncExternalStore = function(e, n, t) {
                return U.current.useSyncExternalStore(e, n, t)
            }
            ,
            n.useTransition = function() {
                return U.current.useTransition()
            }
            ,
            n.version = "18.3.1"
        }
        ,
        957: (e, n, t) => {
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
            }(),
            e.exports = t(195)
        }
        ,
        958: (e, n, t) => {
            "use strict";
            var r = t(957);
            n.H = r.createRoot,
            r.hydrateRoot
        }
    }
      , n = {};
    function t(r) {
        var a = n[r];
        if (void 0 !== a)
            return a.exports;
        var o = n[r] = {
            exports: {}
        };
        return e[r](o, o.exports, t),
        o.exports
    }
    ( () => {
        "use strict";
        var e, n, r;
        function a(e) {
            const n = r[e];
            return "string" != typeof n ? e.toString() : n[0].toLowerCase() + n.substring(1).replace(/[A-Z]/g, (e => "_" + e.toLowerCase()))
        }
        let o;
        var i, s;
        (s = e || (e = {}))[s.Unary = 0] = "Unary",
        s[s.ServerStreaming = 1] = "ServerStreaming",
        s[s.ClientStreaming = 2] = "ClientStreaming",
        s[s.BiDiStreaming = 3] = "BiDiStreaming",
        function(e) {
            e[e.NoSideEffects = 1] = "NoSideEffects",
            e[e.Idempotent = 2] = "Idempotent"
        }(n || (n = {})),
        (i = r || (r = {}))[i.Canceled = 1] = "Canceled",
        i[i.Unknown = 2] = "Unknown",
        i[i.InvalidArgument = 3] = "InvalidArgument",
        i[i.DeadlineExceeded = 4] = "DeadlineExceeded",
        i[i.NotFound = 5] = "NotFound",
        i[i.AlreadyExists = 6] = "AlreadyExists",
        i[i.PermissionDenied = 7] = "PermissionDenied",
        i[i.ResourceExhausted = 8] = "ResourceExhausted",
        i[i.FailedPrecondition = 9] = "FailedPrecondition",
        i[i.Aborted = 10] = "Aborted",
        i[i.OutOfRange = 11] = "OutOfRange",
        i[i.Unimplemented = 12] = "Unimplemented",
        i[i.Internal = 13] = "Internal",
        i[i.Unavailable = 14] = "Unavailable",
        i[i.DataLoss = 15] = "DataLoss",
        i[i.Unauthenticated = 16] = "Unauthenticated";
        class l extends Error {
            constructor(e, n=r.Unknown, t, o, i) {
                super(function(e, n) {
                    return e.length ? `[${a(n)}] ${e}` : `[${a(n)}]`
                }(e, n)),
                this.name = "ConnectError",
                Object.setPrototypeOf(this, new.target.prototype),
                this.rawMessage = e,
                this.code = n,
                this.metadata = new Headers(null != t ? t : {}),
                this.details = null != o ? o : [],
                this.cause = i
            }
            static from(e, n=r.Unknown) {
                return e instanceof l ? e : e instanceof Error ? "AbortError" == e.name ? new l(e.message,r.Canceled) : new l(e.message,n,void 0,void 0,e) : new l(String(e),n,void 0,void 0,e)
            }
            static[Symbol.hasInstance](e) {
                return e instanceof Error && (Object.getPrototypeOf(e) === l.prototype || "ConnectError" === e.name && "code"in e && "number" == typeof e.code && "metadata"in e && "details"in e && Array.isArray(e.details) && "rawMessage"in e && "string" == typeof e.rawMessage && "cause"in e)
            }
            findDetails(e) {
                const n = "typeName"in e ? {
                    findMessage: n => n === e.typeName ? e : void 0
                } : e
                  , t = [];
                for (const e of this.details) {
                    if ("getType"in e) {
                        n.findMessage(e.getType().typeName) && t.push(e);
                        continue
                    }
                    const r = n.findMessage(e.type);
                    if (r)
                        try {
                            t.push(r.fromBinary(e.value))
                        } catch (e) {}
                }
                return t
            }
        }
        var u = function(e) {
            return this instanceof u ? (this.v = e,
            this) : new u(e)
        }
          , c = function(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, t = e[Symbol.asyncIterator];
            return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
            n = {},
            r("next"),
            r("throw"),
            r("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n);
            function r(t) {
                n[t] = e[t] && function(n) {
                    return new Promise((function(r, a) {
                        !function(e, n, t, r) {
                            Promise.resolve(r).then((function(n) {
                                e({
                                    value: n,
                                    done: t
                                })
                            }
                            ), n)
                        }(r, a, (n = e[t](n)).done, n.value)
                    }
                    ))
                }
            }
        }
          , _ = function(e) {
            return this instanceof _ ? (this.v = e,
            this) : new _(e)
        };
        function E(n, t) {
            return function(e, n) {
                const t = {};
                for (const [r,a] of Object.entries(e.methods)) {
                    const o = n(Object.assign(Object.assign({}, a), {
                        localName: r,
                        service: e
                    }));
                    null != o && (t[r] = o)
                }
                return t
            }(n, (a => {
                switch (a.kind) {
                case e.Unary:
                    return function(e, n, t) {
                        return async function(r, a) {
                            var o, i;
                            const s = await e.unary(n, t, null == a ? void 0 : a.signal, null == a ? void 0 : a.timeoutMs, null == a ? void 0 : a.headers, r, null == a ? void 0 : a.contextValues);
                            return null === (o = null == a ? void 0 : a.onHeader) || void 0 === o || o.call(a, s.header),
                            null === (i = null == a ? void 0 : a.onTrailer) || void 0 === i || i.call(a, s.trailer),
                            s.message
                        }
                    }(t, n, a);
                case e.ServerStreaming:
                    return function(e, n, t) {
                        return function(r, a) {
                            return m(e.stream(n, t, null == a ? void 0 : a.signal, null == a ? void 0 : a.timeoutMs, null == a ? void 0 : a.headers, function(e) {
                                return function(e, n, t) {
                                    if (!Symbol.asyncIterator)
                                        throw new TypeError("Symbol.asyncIterator is not defined.");
                                    var r, a = t.apply(e, n || []), o = [];
                                    return r = {},
                                    i("next"),
                                    i("throw"),
                                    i("return", (function(e) {
                                        return function(n) {
                                            return Promise.resolve(n).then(e, c)
                                        }
                                    }
                                    )),
                                    r[Symbol.asyncIterator] = function() {
                                        return this
                                    }
                                    ,
                                    r;
                                    function i(e, n) {
                                        a[e] && (r[e] = function(n) {
                                            return new Promise((function(t, r) {
                                                o.push([e, n, t, r]) > 1 || s(e, n)
                                            }
                                            ))
                                        }
                                        ,
                                        n && (r[e] = n(r[e])))
                                    }
                                    function s(e, n) {
                                        try {
                                            (t = a[e](n)).value instanceof u ? Promise.resolve(t.value.v).then(l, c) : _(o[0][2], t)
                                        } catch (e) {
                                            _(o[0][3], e)
                                        }
                                        var t
                                    }
                                    function l(e) {
                                        s("next", e)
                                    }
                                    function c(e) {
                                        s("throw", e)
                                    }
                                    function _(e, n) {
                                        e(n),
                                        o.shift(),
                                        o.length && s(o[0][0], o[0][1])
                                    }
                                }(this, arguments, (function*() {
                                    yield u(yield*function(e) {
                                        var n, t;
                                        return n = {},
                                        r("next"),
                                        r("throw", (function(e) {
                                            throw e
                                        }
                                        )),
                                        r("return"),
                                        n[Symbol.iterator] = function() {
                                            return this
                                        }
                                        ,
                                        n;
                                        function r(r, a) {
                                            n[r] = e[r] ? function(n) {
                                                return (t = !t) ? {
                                                    value: u(e[r](n)),
                                                    done: !1
                                                } : a ? a(n) : n
                                            }
                                            : a
                                        }
                                    }(function(e) {
                                        if (!Symbol.asyncIterator)
                                            throw new TypeError("Symbol.asyncIterator is not defined.");
                                        var n, t = e[Symbol.asyncIterator];
                                        return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
                                        n = {},
                                        r("next"),
                                        r("throw"),
                                        r("return"),
                                        n[Symbol.asyncIterator] = function() {
                                            return this
                                        }
                                        ,
                                        n);
                                        function r(t) {
                                            n[t] = e[t] && function(n) {
                                                return new Promise((function(r, a) {
                                                    !function(e, n, t, r) {
                                                        Promise.resolve(r).then((function(n) {
                                                            e({
                                                                value: n,
                                                                done: t
                                                            })
                                                        }
                                                        ), n)
                                                    }(r, a, (n = e[t](n)).done, n.value)
                                                }
                                                ))
                                            }
                                        }
                                    }(e)))
                                }
                                ))
                            }([r]), null == a ? void 0 : a.contextValues), a)
                        }
                    }(t, n, a);
                case e.ClientStreaming:
                    return function(e, n, t) {
                        return async function(a, o) {
                            var i, s, u, _, E, m;
                            const d = await e.stream(n, t, null == o ? void 0 : o.signal, null == o ? void 0 : o.timeoutMs, null == o ? void 0 : o.headers, a, null == o ? void 0 : o.contextValues);
                            let f;
                            null === (E = null == o ? void 0 : o.onHeader) || void 0 === E || E.call(o, d.header);
                            try {
                                for (var T, p = !0, S = c(d.message); !(i = (T = await S.next()).done); p = !0)
                                    _ = T.value,
                                    p = !1,
                                    f = _
                            } catch (e) {
                                s = {
                                    error: e
                                }
                            } finally {
                                try {
                                    p || i || !(u = S.return) || await u.call(S)
                                } finally {
                                    if (s)
                                        throw s.error
                                }
                            }
                            if (!f)
                                throw new l("protocol error: missing response message",r.Internal);
                            return null === (m = null == o ? void 0 : o.onTrailer) || void 0 === m || m.call(o, d.trailer),
                            f
                        }
                    }(t, n, a);
                case e.BiDiStreaming:
                    return function(e, n, t) {
                        return function(r, a) {
                            return m(e.stream(n, t, null == a ? void 0 : a.signal, null == a ? void 0 : a.timeoutMs, null == a ? void 0 : a.headers, r, null == a ? void 0 : a.contextValues), a)
                        }
                    }(t, n, a);
                default:
                    return null
                }
            }
            ))
        }
        function m(e, n) {
            const t = function() {
                var t, r;
                return function(e, n, t) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, a = t.apply(e, n || []), o = [];
                    return r = {},
                    i("next"),
                    i("throw"),
                    i("return", (function(e) {
                        return function(n) {
                            return Promise.resolve(n).then(e, u)
                        }
                    }
                    )),
                    r[Symbol.asyncIterator] = function() {
                        return this
                    }
                    ,
                    r;
                    function i(e, n) {
                        a[e] && (r[e] = function(n) {
                            return new Promise((function(t, r) {
                                o.push([e, n, t, r]) > 1 || s(e, n)
                            }
                            ))
                        }
                        ,
                        n && (r[e] = n(r[e])))
                    }
                    function s(e, n) {
                        try {
                            (t = a[e](n)).value instanceof _ ? Promise.resolve(t.value.v).then(l, u) : c(o[0][2], t)
                        } catch (e) {
                            c(o[0][3], e)
                        }
                        var t
                    }
                    function l(e) {
                        s("next", e)
                    }
                    function u(e) {
                        s("throw", e)
                    }
                    function c(e, n) {
                        e(n),
                        o.shift(),
                        o.length && s(o[0][0], o[0][1])
                    }
                }(this, arguments, (function*() {
                    const a = yield _(e);
                    null === (t = null == n ? void 0 : n.onHeader) || void 0 === t || t.call(n, a.header),
                    yield _(yield*function(e) {
                        var n, t;
                        return n = {},
                        r("next"),
                        r("throw", (function(e) {
                            throw e
                        }
                        )),
                        r("return"),
                        n[Symbol.iterator] = function() {
                            return this
                        }
                        ,
                        n;
                        function r(r, a) {
                            n[r] = e[r] ? function(n) {
                                return (t = !t) ? {
                                    value: _(e[r](n)),
                                    done: !1
                                } : a ? a(n) : n
                            }
                            : a
                        }
                    }(c(a.message))),
                    null === (r = null == n ? void 0 : n.onTrailer) || void 0 === r || r.call(n, a.trailer)
                }
                ))
            }()[Symbol.asyncIterator]();
            return {
                [Symbol.asyncIterator]: () => ({
                    next: () => t.next()
                })
            }
        }
        function d() {
            return {
                get(e) {
                    return e.id in this ? this[e.id] : e.defaultValue
                },
                set(e, n) {
                    return this[e.id] = n,
                    this
                },
                delete(e) {
                    return delete this[e.id],
                    this
                }
            }
        }
        function f(e) {
            var n;
            const t = Object.assign({}, e);
            return null !== (n = t.ignoreUnknownFields) && void 0 !== n || (t.ignoreUnknownFields = !0),
            t
        }
        function T(e, n, t, r) {
            const a = n ? p(e.I, r) : S(e.I, t);
            return {
                parse: (n ? p(e.O, r) : S(e.O, t)).parse,
                serialize: a.serialize
            }
        }
        function p(e, n) {
            return {
                parse(t) {
                    try {
                        return e.fromBinary(t, n)
                    } catch (e) {
                        const n = e instanceof Error ? e.message : String(e);
                        throw new l(`parse binary: ${n}`,r.InvalidArgument)
                    }
                },
                serialize(e) {
                    try {
                        return e.toBinary(n)
                    } catch (e) {
                        const n = e instanceof Error ? e.message : String(e);
                        throw new l(`serialize binary: ${n}`,r.Internal)
                    }
                }
            }
        }
        function S(e, n) {
            var t, a;
            const o = null !== (t = null == n ? void 0 : n.textEncoder) && void 0 !== t ? t : new TextEncoder
              , i = null !== (a = null == n ? void 0 : n.textDecoder) && void 0 !== a ? a : new TextDecoder
              , s = f(n);
            return {
                parse(n) {
                    try {
                        const t = i.decode(n);
                        return e.fromJsonString(t, s)
                    } catch (e) {
                        throw l.from(e, r.InvalidArgument)
                    }
                },
                serialize(e) {
                    try {
                        const n = e.toJsonString(s);
                        return o.encode(n)
                    } catch (e) {
                        throw l.from(e, r.Internal)
                    }
                }
            }
        }
        function O(e, n) {
            var t;
            return null !== (t = null == n ? void 0 : n.concat().reverse().reduce(( (e, n) => n(e)), e)) && void 0 !== t ? t : e
        }
        function N(e) {
            if (!e.aborted)
                return;
            if (void 0 !== e.reason)
                return e.reason;
            const n = new Error("This operation was aborted");
            return n.name = "AbortError",
            n
        }
        function C(e, n) {
            return n instanceof e ? n : new e(n)
        }
        function A(e, n) {
            function t(n) {
                return !0 === n.done ? n : {
                    done: n.done,
                    value: C(e, n.value)
                }
            }
            return {
                [Symbol.asyncIterator]() {
                    const e = n[Symbol.asyncIterator]()
                      , r = {
                        next: () => e.next().then(t)
                    };
                    return void 0 !== e.throw && (r.throw = n => e.throw(n).then(t)),
                    void 0 !== e.return && (r.return = n => e.return(n).then(t)),
                    r
                }
            }
        }
        function I(e) {
            const {signal: n, cleanup: t} = function(e) {
                const n = new AbortController
                  , t = () => {
                    n.abort(new l("the operation timed out",r.DeadlineExceeded))
                }
                ;
                let a;
                return void 0 !== e && (e <= 0 ? t() : a = setTimeout(t, e)),
                {
                    signal: n.signal,
                    cleanup: () => clearTimeout(a)
                }
            }(e.timeoutMs)
              , a = function(...e) {
                const n = new AbortController
                  , t = e.filter((e => void 0 !== e)).concat(n.signal);
                for (const e of t) {
                    if (e.aborted) {
                        r.apply(e);
                        break
                    }
                    e.addEventListener("abort", r)
                }
                function r() {
                    n.signal.aborted || n.abort(N(this));
                    for (const e of t)
                        e.removeEventListener("abort", r)
                }
                return n
            }(e.signal, n);
            return [a.signal, function(e) {
                const r = l.from(n.aborted ? N(n) : e);
                return a.abort(r),
                t(),
                Promise.reject(r)
            }
            , function() {
                t(),
                a.abort()
            }
            ]
        }
        function h(e, n, t) {
            const r = "string" == typeof n ? n : n.typeName
              , a = "string" == typeof t ? t : t.name;
            return e.toString().replace(/\/?$/, `/${r}/${a}`)
        }
        const L = "Content-Type"
          , R = "Content-Length"
          , g = "Content-Encoding"
          , P = "Accept-Encoding"
          , D = "Connect-Protocol-Version"
          , M = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$/i;
        function y(n, t, r, a, o) {
            const i = new Headers(null != a ? a : {});
            return void 0 !== r && i.set("Connect-Timeout-Ms", `${r}`),
            i.set(L, n == e.Unary ? t ? "application/proto" : "application/json" : t ? "application/connect+proto" : "application/connect+json"),
            i.set(D, "1"),
            o && i.set("User-Agent", "connect-es/1.4.0"),
            i
        }
        let U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
          , w = [];
        for (let e = 0; e < U.length; e++)
            w[U[e].charCodeAt(0)] = e;
        w["-".charCodeAt(0)] = U.indexOf("+"),
        w["_".charCodeAt(0)] = U.indexOf("/");
        const b = {
            dec(e) {
                let n = 3 * e.length / 4;
                "=" == e[e.length - 2] ? n -= 2 : "=" == e[e.length - 1] && (n -= 1);
                let t, r = new Uint8Array(n), a = 0, o = 0, i = 0;
                for (let n = 0; n < e.length; n++) {
                    if (t = w[e.charCodeAt(n)],
                    void 0 === t)
                        switch (e[n]) {
                        case "=":
                            o = 0;
                        case "\n":
                        case "\r":
                        case "\t":
                        case " ":
                            continue;
                        default:
                            throw Error("invalid base64 string.")
                        }
                    switch (o) {
                    case 0:
                        i = t,
                        o = 1;
                        break;
                    case 1:
                        r[a++] = i << 2 | (48 & t) >> 4,
                        i = t,
                        o = 2;
                        break;
                    case 2:
                        r[a++] = (15 & i) << 4 | (60 & t) >> 2,
                        i = t,
                        o = 3;
                        break;
                    case 3:
                        r[a++] = (3 & i) << 6 | t,
                        o = 0
                    }
                }
                if (1 == o)
                    throw Error("invalid base64 string.");
                return r.subarray(0, a)
            },
            enc(e) {
                let n, t = "", r = 0, a = 0;
                for (let o = 0; o < e.length; o++)
                    switch (n = e[o],
                    r) {
                    case 0:
                        t += U[n >> 2],
                        a = (3 & n) << 4,
                        r = 1;
                        break;
                    case 1:
                        t += U[a | n >> 4],
                        a = (15 & n) << 2,
                        r = 2;
                        break;
                    case 2:
                        t += U[a | n >> 6],
                        t += U[63 & n],
                        r = 0
                    }
                return r && (t += U[a],
                t += "=",
                1 == r && (t += "=")),
                t
            }
        };
        function k(n, t, a) {
            const o = function(e) {
                const n = null == e ? void 0 : e.match(M);
                if (n)
                    return {
                        stream: !!n[1],
                        binary: !!n[3]
                    }
            }(a.get("Content-Type"));
            if (200 !== t) {
                const i = new l(`HTTP ${t}`,function(e) {
                    switch (e) {
                    case 400:
                        return r.InvalidArgument;
                    case 401:
                        return r.Unauthenticated;
                    case 403:
                        return r.PermissionDenied;
                    case 404:
                        return r.Unimplemented;
                    case 408:
                        return r.DeadlineExceeded;
                    case 409:
                        return r.Aborted;
                    case 412:
                        return r.FailedPrecondition;
                    case 413:
                    case 431:
                        return r.ResourceExhausted;
                    case 415:
                        return r.Internal;
                    case 429:
                    case 502:
                    case 503:
                    case 504:
                        return r.Unavailable;
                    default:
                        return r.Unknown
                    }
                }(t),a);
                if (n == e.Unary && o && !o.binary)
                    return {
                        isUnaryError: !0,
                        unaryError: i
                    };
                throw i
            }
            return {
                isUnaryError: !1
            }
        }
        function v(e, n, t) {
            if (n && new Headers(n).forEach(( (e, n) => t.metadata.append(n, e))),
            "object" != typeof e || null == e || Array.isArray(e) || !("code"in e) || "string" != typeof e.code)
                throw t;
            const i = function(e) {
                if (!o) {
                    o = {};
                    for (const e of Object.values(r))
                        "string" != typeof e && (o[a(e)] = e)
                }
                return o[e]
            }(e.code);
            if (void 0 === i)
                throw t;
            const s = e.message;
            if (null != s && "string" != typeof s)
                throw t;
            const u = new l(null != s ? s : "",i,n);
            if ("details"in e && Array.isArray(e.details))
                for (const n of e.details) {
                    if (null === n || "object" != typeof n || Array.isArray(n) || "string" != typeof n.type || "string" != typeof n.value || "debug"in n && "object" != typeof n.debug)
                        throw t;
                    try {
                        u.details.push({
                            type: n.type,
                            value: b.dec(n.value),
                            debug: n.debug
                        })
                    } catch (e) {
                        throw t
                    }
                }
            return u
        }
        function F(e) {
            const n = new Headers
              , t = new Headers;
            return e.forEach(( (e, r) => {
                r.toLowerCase().startsWith("trailer-") ? t.set(r.substring(8), e) : n.set(r, e)
            }
            )),
            [n, t]
        }
        function B(e) {
            const n = new l("invalid end stream",r.InvalidArgument);
            let t;
            try {
                t = JSON.parse("string" == typeof e ? e : (new TextDecoder).decode(e))
            } catch (e) {
                throw n
            }
            if ("object" != typeof t || null == t || Array.isArray(t))
                throw n;
            const a = new Headers;
            if ("metadata"in t) {
                if ("object" != typeof t.metadata || null == t.metadata || Array.isArray(t.metadata))
                    throw n;
                for (const [e,r] of Object.entries(t.metadata)) {
                    if (!Array.isArray(r) || r.some((e => "string" != typeof e)))
                        throw n;
                    for (const n of r)
                        a.append(e, n)
                }
            }
            return {
                metadata: a,
                error: "error"in t ? v(t.error, a, n) : void 0
            }
        }
        var x = function(e) {
            return this instanceof x ? (this.v = e,
            this) : new x(e)
        };
        function G(t) {
            var a;
            !function() {
                try {
                    new Headers
                } catch (e) {
                    throw new Error("connect-web requires the fetch API. Are you running on an old version of Node.js? Node.js is not supported in Connect for Web - please stay tuned for Connect for Node.")
                }
            }();
            const o = null !== (a = t.useBinaryFormat) && void 0 !== a && a;
            return {
                async unary(e, r, a, i, s, l, u) {
                    var c;
                    const {serialize: _, parse: E} = T(r, o, t.jsonOptions, t.binaryOptions);
                    return i = void 0 === i ? t.defaultTimeoutMs : i <= 0 ? void 0 : i,
                    await function(e) {
                        const n = O(e.next, e.interceptors)
                          , [t,r,a] = I(e);
                        return n(Object.assign(Object.assign({}, e.req), {
                            message: C(e.req.method.I, e.req.message),
                            signal: t
                        })).then((e => (a(),
                        e)), r)
                    }({
                        interceptors: t.interceptors,
                        signal: a,
                        timeoutMs: i,
                        req: {
                            stream: !1,
                            service: e,
                            method: r,
                            url: h(t.baseUrl, e, r),
                            init: {
                                method: "POST",
                                credentials: null !== (c = t.credentials) && void 0 !== c ? c : "same-origin",
                                redirect: "error",
                                mode: "cors"
                            },
                            header: y(r.kind, o, i, s, !1),
                            contextValues: null != u ? u : d(),
                            message: l
                        },
                        next: async a => {
                            var i;
                            let s = null;
                            !0 === t.useHttpGet && r.idempotency === n.NoSideEffects ? a = function(e, n, t) {
                                let r = "?connect=v1";
                                const a = e.header.get(L);
                                0 === (null == a ? void 0 : a.indexOf("application/")) && (r += "&encoding=" + encodeURIComponent(a.slice(12)));
                                const o = e.header.get(g);
                                null !== o && "identity" !== o && (r += "&compression=" + encodeURIComponent(o),
                                t = !0),
                                t && (r += "&base64=1"),
                                r += "&message=" + function(e, n) {
                                    return n ? b.enc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent((new TextDecoder).decode(e))
                                }(n, t);
                                const i = e.url + r
                                  , s = new Headers(e.header);
                                return [D, L, R, g, P].forEach((e => s.delete(e))),
                                Object.assign(Object.assign({}, e), {
                                    init: Object.assign(Object.assign({}, e.init), {
                                        method: "GET"
                                    }),
                                    url: i,
                                    header: s
                                })
                            }(a, _(a.message), o) : s = _(a.message);
                            const l = null !== (i = t.fetch) && void 0 !== i ? i : globalThis.fetch
                              , u = await l(a.url, Object.assign(Object.assign({}, a.init), {
                                headers: a.header,
                                signal: a.signal,
                                body: s
                            }))
                              , {isUnaryError: c, unaryError: m} = k(r.kind, u.status, u.headers);
                            if (c)
                                throw v(await u.json(), function(...e) {
                                    const n = new Headers;
                                    for (const t of e)
                                        t.forEach(( (e, t) => {
                                            n.append(t, e)
                                        }
                                        ));
                                    return n
                                }(...F(u.headers)), m);
                            const [d,T] = F(u.headers);
                            return {
                                stream: !1,
                                service: e,
                                method: r,
                                header: d,
                                message: o ? E(new Uint8Array(await u.arrayBuffer())) : r.O.fromJson(await u.json(), f(t.jsonOptions)),
                                trailer: T
                            }
                        }
                    })
                },
                async stream(n, a, i, s, u, c, _) {
                    var E;
                    const {serialize: m, parse: f} = T(a, o, t.jsonOptions, t.binaryOptions);
                    function p(e, n, t) {
                        return function(e, n, t) {
                            if (!Symbol.asyncIterator)
                                throw new TypeError("Symbol.asyncIterator is not defined.");
                            var r, a = t.apply(e, n || []), o = [];
                            return r = {},
                            i("next"),
                            i("throw"),
                            i("return", (function(e) {
                                return function(n) {
                                    return Promise.resolve(n).then(e, u)
                                }
                            }
                            )),
                            r[Symbol.asyncIterator] = function() {
                                return this
                            }
                            ,
                            r;
                            function i(e, n) {
                                a[e] && (r[e] = function(n) {
                                    return new Promise((function(t, r) {
                                        o.push([e, n, t, r]) > 1 || s(e, n)
                                    }
                                    ))
                                }
                                ,
                                n && (r[e] = n(r[e])))
                            }
                            function s(e, n) {
                                try {
                                    (t = a[e](n)).value instanceof x ? Promise.resolve(t.value.v).then(l, u) : c(o[0][2], t)
                                } catch (e) {
                                    c(o[0][3], e)
                                }
                                var t
                            }
                            function l(e) {
                                s("next", e)
                            }
                            function u(e) {
                                s("throw", e)
                            }
                            function c(e, n) {
                                e(n),
                                o.shift(),
                                o.length && s(o[0][0], o[0][1])
                            }
                        }(this, arguments, (function*() {
                            const a = function(e) {
                                let n, t = new Uint8Array(0);
                                function a(e) {
                                    const n = new Uint8Array(t.length + e.length);
                                    n.set(t),
                                    n.set(e, t.length),
                                    t = n
                                }
                                return new ReadableStream({
                                    start() {
                                        n = e.getReader()
                                    },
                                    async pull(e) {
                                        let o;
                                        for (; ; ) {
                                            if (void 0 === o && t.byteLength >= 5) {
                                                let e = 0;
                                                for (let n = 1; n < 5; n++)
                                                    e = (e << 8) + t[n];
                                                o = {
                                                    flags: t[0],
                                                    length: e
                                                }
                                            }
                                            if (void 0 !== o && t.byteLength >= o.length + 5)
                                                break;
                                            const e = await n.read();
                                            if (e.done)
                                                break;
                                            a(e.value)
                                        }
                                        if (void 0 === o)
                                            return 0 == t.byteLength ? void e.close() : void e.error(new l("premature end of stream",r.DataLoss));
                                        const i = t.subarray(5, 5 + o.length);
                                        t = t.subarray(5 + o.length),
                                        e.enqueue({
                                            flags: o.flags,
                                            data: i
                                        })
                                    }
                                })
                            }(e).getReader();
                            let o = !1;
                            for (; ; ) {
                                const e = yield x(a.read());
                                if (e.done)
                                    break;
                                const {flags: r, data: i} = e.value;
                                if (2 & ~r)
                                    yield yield x(f(i));
                                else {
                                    o = !0;
                                    const e = B(i);
                                    if (e.error) {
                                        const n = e.error;
                                        throw t.forEach(( (e, t) => {
                                            n.metadata.append(t, e)
                                        }
                                        )),
                                        n
                                    }
                                    e.metadata.forEach(( (e, t) => n.set(t, e)))
                                }
                            }
                            if (!o)
                                throw "missing EndStreamResponse"
                        }
                        ))
                    }
                    async function S(n) {
                        if (a.kind != e.ServerStreaming)
                            throw "The fetch API does not support streaming request bodies";
                        const t = await n[Symbol.asyncIterator]().next();
                        if (1 == t.done)
                            throw "missing request message";
                        return function(e, n) {
                            const t = new Uint8Array(n.length + 5);
                            t.set(n, 5);
                            const r = new DataView(t.buffer,t.byteOffset,t.byteLength);
                            return r.setUint8(0, 0),
                            r.setUint32(1, n.length),
                            t
                        }(0, m(t.value))
                    }
                    return s = void 0 === s ? t.defaultTimeoutMs : s <= 0 ? void 0 : s,
                    await function(e) {
                        const n = O(e.next, e.interceptors)
                          , [t,r,a] = I(e)
                          , o = Object.assign(Object.assign({}, e.req), {
                            message: A(e.req.method.I, e.req.message),
                            signal: t
                        });
                        let i = !1;
                        return t.addEventListener("abort", (function() {
                            var n, t;
                            const r = e.req.message[Symbol.asyncIterator]();
                            i || null === (n = r.throw) || void 0 === n || n.call(r, this.reason).catch(( () => {}
                            )),
                            null === (t = r.return) || void 0 === t || t.call(r).catch(( () => {}
                            ))
                        }
                        )),
                        n(o).then((e => Object.assign(Object.assign({}, e), {
                            message: {
                                [Symbol.asyncIterator]() {
                                    const n = e.message[Symbol.asyncIterator]();
                                    return {
                                        next: () => n.next().then((e => (1 == e.done && (i = !0,
                                        a()),
                                        e)), r)
                                    }
                                }
                            }
                        })), r)
                    }({
                        interceptors: t.interceptors,
                        timeoutMs: s,
                        signal: i,
                        req: {
                            stream: !0,
                            service: n,
                            method: a,
                            url: h(t.baseUrl, n, a),
                            init: {
                                method: "POST",
                                credentials: null !== (E = t.credentials) && void 0 !== E ? E : "same-origin",
                                redirect: "error",
                                mode: "cors"
                            },
                            header: y(a.kind, o, s, u, !1),
                            contextValues: null != _ ? _ : d(),
                            message: c
                        },
                        next: async e => {
                            var n;
                            const r = null !== (n = t.fetch) && void 0 !== n ? n : globalThis.fetch
                              , o = await r(e.url, Object.assign(Object.assign({}, e.init), {
                                headers: e.header,
                                signal: e.signal,
                                body: await S(e.message)
                            }));
                            if (k(a.kind, o.status, o.headers),
                            null === o.body)
                                throw "missing response body";
                            const i = new Headers;
                            return Object.assign(Object.assign({}, e), {
                                header: o.headers,
                                trailer: i,
                                message: p(o.body, i, o.headers)
                            })
                        }
                    })
                }
            }
        }
        class H {
            equals(e) {
                return this.getType().runtime.util.equals(this.getType(), this, e)
            }
            clone() {
                return this.getType().runtime.util.clone(this)
            }
            fromBinary(e, n) {
                const t = this.getType().runtime.bin
                  , r = t.makeReadOptions(n);
                return t.readMessage(this, r.readerFactory(e), e.byteLength, r),
                this
            }
            fromJson(e, n) {
                const t = this.getType()
                  , r = t.runtime.json
                  , a = r.makeReadOptions(n);
                return r.readMessage(t, e, a, this),
                this
            }
            fromJsonString(e, n) {
                let t;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${einstanceof Error ? e.message : String(e)}`)
                }
                return this.fromJson(t, n)
            }
            toBinary(e) {
                const n = this.getType().runtime.bin
                  , t = n.makeWriteOptions(e)
                  , r = t.writerFactory();
                return n.writeMessage(this, r, t),
                r.finish()
            }
            toJson(e) {
                const n = this.getType().runtime.json
                  , t = n.makeWriteOptions(e);
                return n.writeMessage(this, t)
            }
            toJsonString(e) {
                var n;
                const t = this.toJson(e);
                return JSON.stringify(t, null, null !== (n = null == e ? void 0 : e.prettySpaces) && void 0 !== n ? n : 0)
            }
            toJSON() {
                return this.toJson({
                    emitDefaultValues: !0
                })
            }
            getType() {
                return Object.getPrototypeOf(this).constructor
            }
        }
        function J(e, n) {
            if (!e)
                throw new Error(n)
        }
        function V(e) {
            if ("number" != typeof e)
                throw new Error("invalid int 32: " + typeof e);
            if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648)
                throw new Error("invalid int 32: " + e)
        }
        function X(e) {
            if ("number" != typeof e)
                throw new Error("invalid uint 32: " + typeof e);
            if (!Number.isInteger(e) || e > 4294967295 || e < 0)
                throw new Error("invalid uint 32: " + e)
        }
        function W(e) {
            if ("number" != typeof e)
                throw new Error("invalid float 32: " + typeof e);
            if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
                throw new Error("invalid float 32: " + e)
        }
        const K = Symbol("@bufbuild/protobuf/enum-type");
        function Y(e, n, t, r) {
            e[K] = q(n, t.map((n => ({
                no: n.no,
                name: n.name,
                localName: e[n.no]
            }))))
        }
        function q(e, n, t) {
            const r = Object.create(null)
              , a = Object.create(null)
              , o = [];
            for (const e of n) {
                const n = z(e);
                o.push(n),
                r[e.name] = n,
                a[e.no] = n
            }
            return {
                typeName: e,
                values: o,
                findName: e => r[e],
                findNumber: e => a[e]
            }
        }
        function z(e) {
            return "localName"in e ? e : Object.assign(Object.assign({}, e), {
                localName: e.name
            })
        }
        function j() {
            let e = 0
              , n = 0;
            for (let t = 0; t < 28; t += 7) {
                let r = this.buf[this.pos++];
                if (e |= (127 & r) << t,
                !(128 & r))
                    return this.assertBounds(),
                    [e, n]
            }
            let t = this.buf[this.pos++];
            if (e |= (15 & t) << 28,
            n = (112 & t) >> 4,
            !(128 & t))
                return this.assertBounds(),
                [e, n];
            for (let t = 3; t <= 31; t += 7) {
                let r = this.buf[this.pos++];
                if (n |= (127 & r) << t,
                !(128 & r))
                    return this.assertBounds(),
                    [e, n]
            }
            throw new Error("invalid varint")
        }
        function $(e, n, t) {
            for (let r = 0; r < 28; r += 7) {
                const a = e >>> r
                  , o = !(a >>> 7 == 0 && 0 == n)
                  , i = 255 & (o ? 128 | a : a);
                if (t.push(i),
                !o)
                    return
            }
            const r = e >>> 28 & 15 | (7 & n) << 4
              , a = !!(n >> 3);
            if (t.push(255 & (a ? 128 | r : r)),
            a) {
                for (let e = 3; e < 31; e += 7) {
                    const r = n >>> e
                      , a = !(r >>> 7 == 0)
                      , o = 255 & (a ? 128 | r : r);
                    if (t.push(o),
                    !a)
                        return
                }
                t.push(n >>> 31 & 1)
            }
        }
        const Q = 4294967296;
        function Z(e) {
            const n = "-" === e[0];
            n && (e = e.slice(1));
            const t = 1e6;
            let r = 0
              , a = 0;
            function o(n, o) {
                const i = Number(e.slice(n, o));
                a *= t,
                r = r * t + i,
                r >= Q && (a += r / Q | 0,
                r %= Q)
            }
            return o(-24, -18),
            o(-18, -12),
            o(-12, -6),
            o(-6),
            n ? te(r, a) : ne(r, a)
        }
        function ee(e, n) {
            if (({lo: e, hi: n} = function(e, n) {
                return {
                    lo: e >>> 0,
                    hi: n >>> 0
                }
            }(e, n)),
            n <= 2097151)
                return String(Q * n + e);
            const t = 16777215 & (e >>> 24 | n << 8)
              , r = n >> 16 & 65535;
            let a = (16777215 & e) + 6777216 * t + 6710656 * r
              , o = t + 8147497 * r
              , i = 2 * r;
            const s = 1e7;
            return a >= s && (o += Math.floor(a / s),
            a %= s),
            o >= s && (i += Math.floor(o / s),
            o %= s),
            i.toString() + re(o) + re(a)
        }
        function ne(e, n) {
            return {
                lo: 0 | e,
                hi: 0 | n
            }
        }
        function te(e, n) {
            return n = ~n,
            e ? e = 1 + ~e : n += 1,
            ne(e, n)
        }
        const re = e => {
            const n = String(e);
            return "0000000".slice(n.length) + n
        }
        ;
        function ae(e, n) {
            if (e >= 0) {
                for (; e > 127; )
                    n.push(127 & e | 128),
                    e >>>= 7;
                n.push(e)
            } else {
                for (let t = 0; t < 9; t++)
                    n.push(127 & e | 128),
                    e >>= 7;
                n.push(1)
            }
        }
        function oe() {
            let e = this.buf[this.pos++]
              , n = 127 & e;
            if (!(128 & e))
                return this.assertBounds(),
                n;
            if (e = this.buf[this.pos++],
            n |= (127 & e) << 7,
            !(128 & e))
                return this.assertBounds(),
                n;
            if (e = this.buf[this.pos++],
            n |= (127 & e) << 14,
            !(128 & e))
                return this.assertBounds(),
                n;
            if (e = this.buf[this.pos++],
            n |= (127 & e) << 21,
            !(128 & e))
                return this.assertBounds(),
                n;
            e = this.buf[this.pos++],
            n |= (15 & e) << 28;
            for (let n = 5; 128 & e && n < 10; n++)
                e = this.buf[this.pos++];
            if (128 & e)
                throw new Error("invalid varint");
            return this.assertBounds(),
            n >>> 0
        }
        const ie = function() {
            const e = new DataView(new ArrayBuffer(8));
            if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
                const n = BigInt("-9223372036854775808")
                  , t = BigInt("9223372036854775807")
                  , r = BigInt("0")
                  , a = BigInt("18446744073709551615");
                return {
                    zero: BigInt(0),
                    supported: !0,
                    parse(e) {
                        const r = "bigint" == typeof e ? e : BigInt(e);
                        if (r > t || r < n)
                            throw new Error(`int64 invalid: ${e}`);
                        return r
                    },
                    uParse(e) {
                        const n = "bigint" == typeof e ? e : BigInt(e);
                        if (n > a || n < r)
                            throw new Error(`uint64 invalid: ${e}`);
                        return n
                    },
                    enc(n) {
                        return e.setBigInt64(0, this.parse(n), !0),
                        {
                            lo: e.getInt32(0, !0),
                            hi: e.getInt32(4, !0)
                        }
                    },
                    uEnc(n) {
                        return e.setBigInt64(0, this.uParse(n), !0),
                        {
                            lo: e.getInt32(0, !0),
                            hi: e.getInt32(4, !0)
                        }
                    },
                    dec: (n, t) => (e.setInt32(0, n, !0),
                    e.setInt32(4, t, !0),
                    e.getBigInt64(0, !0)),
                    uDec: (n, t) => (e.setInt32(0, n, !0),
                    e.setInt32(4, t, !0),
                    e.getBigUint64(0, !0))
                }
            }
            const n = e => J(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`)
              , t = e => J(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
            return {
                zero: "0",
                supported: !1,
                parse: e => ("string" != typeof e && (e = e.toString()),
                n(e),
                e),
                uParse: e => ("string" != typeof e && (e = e.toString()),
                t(e),
                e),
                enc: e => ("string" != typeof e && (e = e.toString()),
                n(e),
                Z(e)),
                uEnc: e => ("string" != typeof e && (e = e.toString()),
                t(e),
                Z(e)),
                dec: (e, n) => function(e, n) {
                    let t = ne(e, n);
                    const r = 2147483648 & t.hi;
                    r && (t = te(t.lo, t.hi));
                    const a = ee(t.lo, t.hi);
                    return r ? "-" + a : a
                }(e, n),
                uDec: (e, n) => ee(e, n)
            }
        }();
        var se, le;
        function ue(e, n, t) {
            if (n === t)
                return !0;
            if (e == se.BYTES) {
                if (!(n instanceof Uint8Array && t instanceof Uint8Array))
                    return !1;
                if (n.length !== t.length)
                    return !1;
                for (let e = 0; e < n.length; e++)
                    if (n[e] !== t[e])
                        return !1;
                return !0
            }
            switch (e) {
            case se.UINT64:
            case se.FIXED64:
            case se.INT64:
            case se.SFIXED64:
            case se.SINT64:
                return n == t
            }
            return !1
        }
        function ce(e, n) {
            switch (e) {
            case se.BOOL:
                return !1;
            case se.UINT64:
            case se.FIXED64:
            case se.INT64:
            case se.SFIXED64:
            case se.SINT64:
                return 0 == n ? ie.zero : "0";
            case se.DOUBLE:
            case se.FLOAT:
                return 0;
            case se.BYTES:
                return new Uint8Array(0);
            case se.STRING:
                return "";
            default:
                return 0
            }
        }
        function _e(e, n) {
            switch (e) {
            case se.BOOL:
                return !1 === n;
            case se.STRING:
                return "" === n;
            case se.BYTES:
                return n instanceof Uint8Array && !n.byteLength;
            default:
                return 0 == n
            }
        }
        function Ee(e) {
            const n = e.field.localName
              , t = Object.create(null);
            return t[n] = function(e) {
                const n = e.field;
                if (n.repeated)
                    return [];
                if (void 0 !== n.default)
                    return n.default;
                switch (n.kind) {
                case "enum":
                    return n.T.values[0].no;
                case "scalar":
                    return ce(n.T, n.L);
                case "message":
                    const e = n.T
                      , t = new e;
                    return e.fieldWrapper ? e.fieldWrapper.unwrapField(t) : t;
                case "map":
                    throw "map fields are not allowed to be extensions"
                }
            }(e),
            [t, () => t[n]]
        }
        function me(e, n, t) {
            Te(n, e);
            const r = n.runtime.bin.makeReadOptions(t)
              , a = function(e, n) {
                if (!n.repeated && ("enum" == n.kind || "scalar" == n.kind)) {
                    for (let t = e.length - 1; t >= 0; --t)
                        if (e[t].no == n.no)
                            return [e[t]];
                    return []
                }
                return e.filter((e => e.no === n.no))
            }(e.getType().runtime.bin.listUnknownFields(e), n.field)
              , [o,i] = Ee(n);
            for (const e of a)
                n.runtime.bin.readField(o, r.readerFactory(e.data), n.field, e.wireType, r);
            return i()
        }
        function de(e, n, t, r) {
            Te(n, e);
            const a = n.runtime.bin.makeReadOptions(r)
              , o = n.runtime.bin.makeWriteOptions(r);
            if (fe(e, n)) {
                const t = e.getType().runtime.bin.listUnknownFields(e).filter((e => e.no != n.field.no));
                e.getType().runtime.bin.discardUnknownFields(e);
                for (const n of t)
                    e.getType().runtime.bin.onUnknownField(e, n.no, n.wireType, n.data)
            }
            const i = o.writerFactory();
            let s = n.field;
            s.opt || s.repeated || "enum" != s.kind && "scalar" != s.kind || (s = Object.assign(Object.assign({}, n.field), {
                opt: !0
            })),
            n.runtime.bin.writeField(s, t, i, o);
            const l = a.readerFactory(i.finish());
            for (; l.pos < l.len; ) {
                const [n,t] = l.tag()
                  , r = l.skip(t);
                e.getType().runtime.bin.onUnknownField(e, n, t, r)
            }
        }
        function fe(e, n) {
            const t = e.getType();
            return n.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(e).find((e => e.no == n.field.no))
        }
        function Te(e, n) {
            J(e.extendee.typeName == n.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)
        }
        function pe(e, n) {
            const t = e.localName;
            if (e.repeated)
                return n[t].length > 0;
            if (e.oneof)
                return n[e.oneof.localName].case === t;
            switch (e.kind) {
            case "enum":
            case "scalar":
                return e.opt || e.req ? void 0 !== n[t] : "enum" == e.kind ? n[t] !== e.T.values[0].no : !_e(e.T, n[t]);
            case "message":
                return void 0 !== n[t];
            case "map":
                return Object.keys(n[t]).length > 0
            }
        }
        function Se(e, n) {
            const t = e.localName
              , r = !e.opt && !e.req;
            if (e.repeated)
                n[t] = [];
            else if (e.oneof)
                n[e.oneof.localName] = {
                    case: void 0
                };
            else
                switch (e.kind) {
                case "map":
                    n[t] = {};
                    break;
                case "enum":
                    n[t] = r ? e.T.values[0].no : void 0;
                    break;
                case "scalar":
                    n[t] = r ? ce(e.T, e.L) : void 0;
                    break;
                case "message":
                    n[t] = void 0
                }
        }
        function Oe(e, n) {
            if (null === e || "object" != typeof e)
                return !1;
            if (!Object.getOwnPropertyNames(H.prototype).every((n => n in e && "function" == typeof e[n])))
                return !1;
            const t = e.getType();
            return null !== t && "function" == typeof t && "typeName"in t && "string" == typeof t.typeName && (void 0 === n || t.typeName == n.typeName)
        }
        function Ne(e, n) {
            return Oe(n) || !e.fieldWrapper ? n : e.fieldWrapper.wrapField(n)
        }
        !function(e) {
            e[e.DOUBLE = 1] = "DOUBLE",
            e[e.FLOAT = 2] = "FLOAT",
            e[e.INT64 = 3] = "INT64",
            e[e.UINT64 = 4] = "UINT64",
            e[e.INT32 = 5] = "INT32",
            e[e.FIXED64 = 6] = "FIXED64",
            e[e.FIXED32 = 7] = "FIXED32",
            e[e.BOOL = 8] = "BOOL",
            e[e.STRING = 9] = "STRING",
            e[e.BYTES = 12] = "BYTES",
            e[e.UINT32 = 13] = "UINT32",
            e[e.SFIXED32 = 15] = "SFIXED32",
            e[e.SFIXED64 = 16] = "SFIXED64",
            e[e.SINT32 = 17] = "SINT32",
            e[e.SINT64 = 18] = "SINT64"
        }(se || (se = {})),
        function(e) {
            e[e.BIGINT = 0] = "BIGINT",
            e[e.STRING = 1] = "STRING"
        }(le || (le = {})),
        se.DOUBLE,
        se.FLOAT,
        se.INT64,
        se.UINT64,
        se.INT32,
        se.UINT32,
        se.BOOL,
        se.STRING,
        se.BYTES;
        const Ce = {
            ignoreUnknownFields: !1
        }
          , Ae = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0
        };
        const Ie = Symbol()
          , he = Symbol();
        function Le(e) {
            if (null === e)
                return "null";
            switch (typeof e) {
            case "object":
                return Array.isArray(e) ? "array" : "object";
            case "string":
                return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
            default:
                return String(e)
            }
        }
        function Re(e, n, t, r, a) {
            let o = t.localName;
            if (t.repeated) {
                if (J("map" != t.kind),
                null === n)
                    return;
                if (!Array.isArray(n))
                    throw new Error(`cannot decode field ${a.typeName}.${t.name} from JSON: ${Le(n)}`);
                const i = e[o];
                for (const e of n) {
                    if (null === e)
                        throw new Error(`cannot decode field ${a.typeName}.${t.name} from JSON: ${Le(e)}`);
                    switch (t.kind) {
                    case "message":
                        i.push(t.T.fromJson(e, r));
                        break;
                    case "enum":
                        const n = De(t.T, e, r.ignoreUnknownFields, !0);
                        n !== he && i.push(n);
                        break;
                    case "scalar":
                        try {
                            i.push(Pe(t.T, e, t.L, !0))
                        } catch (n) {
                            let r = `cannot decode field ${a.typeName}.${t.name} from JSON: ${Le(e)}`;
                            throw n instanceof Error && n.message.length > 0 && (r += `: ${n.message}`),
                            new Error(r)
                        }
                    }
                }
            } else if ("map" == t.kind) {
                if (null === n)
                    return;
                if ("object" != typeof n || Array.isArray(n))
                    throw new Error(`cannot decode field ${a.typeName}.${t.name} from JSON: ${Le(n)}`);
                const i = e[o];
                for (const [e,o] of Object.entries(n)) {
                    if (null === o)
                        throw new Error(`cannot decode field ${a.typeName}.${t.name} from JSON: map value null`);
                    let s;
                    try {
                        s = ge(t.K, e)
                    } catch (e) {
                        let r = `cannot decode map key for field ${a.typeName}.${t.name} from JSON: ${Le(n)}`;
                        throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                        new Error(r)
                    }
                    switch (t.V.kind) {
                    case "message":
                        i[s] = t.V.T.fromJson(o, r);
                        break;
                    case "enum":
                        const e = De(t.V.T, o, r.ignoreUnknownFields, !0);
                        e !== he && (i[s] = e);
                        break;
                    case "scalar":
                        try {
                            i[s] = Pe(t.V.T, o, le.BIGINT, !0)
                        } catch (e) {
                            let r = `cannot decode map value for field ${a.typeName}.${t.name} from JSON: ${Le(n)}`;
                            throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                            new Error(r)
                        }
                    }
                }
            } else
                switch (t.oneof && (e = e[t.oneof.localName] = {
                    case: o
                },
                o = "value"),
                t.kind) {
                case "message":
                    const i = t.T;
                    if (null === n && "google.protobuf.Value" != i.typeName)
                        return;
                    let s = e[o];
                    Oe(s) ? s.fromJson(n, r) : (e[o] = s = i.fromJson(n, r),
                    i.fieldWrapper && !t.oneof && (e[o] = i.fieldWrapper.unwrapField(s)));
                    break;
                case "enum":
                    const l = De(t.T, n, r.ignoreUnknownFields, !1);
                    switch (l) {
                    case Ie:
                        Se(t, e);
                        break;
                    case he:
                        break;
                    default:
                        e[o] = l
                    }
                    break;
                case "scalar":
                    try {
                        const r = Pe(t.T, n, t.L, !1);
                        r === Ie ? Se(t, e) : e[o] = r
                    } catch (e) {
                        let r = `cannot decode field ${a.typeName}.${t.name} from JSON: ${Le(n)}`;
                        throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                        new Error(r)
                    }
                }
        }
        function ge(e, n) {
            if (e === se.BOOL)
                switch (n) {
                case "true":
                    n = !0;
                    break;
                case "false":
                    n = !1
                }
            return Pe(e, n, le.BIGINT, !0).toString()
        }
        function Pe(e, n, t, r) {
            if (null === n)
                return r ? ce(e, t) : Ie;
            switch (e) {
            case se.DOUBLE:
            case se.FLOAT:
                if ("NaN" === n)
                    return Number.NaN;
                if ("Infinity" === n)
                    return Number.POSITIVE_INFINITY;
                if ("-Infinity" === n)
                    return Number.NEGATIVE_INFINITY;
                if ("" === n)
                    break;
                if ("string" == typeof n && n.trim().length !== n.length)
                    break;
                if ("string" != typeof n && "number" != typeof n)
                    break;
                const r = Number(n);
                if (Number.isNaN(r))
                    break;
                if (!Number.isFinite(r))
                    break;
                return e == se.FLOAT && W(r),
                r;
            case se.INT32:
            case se.FIXED32:
            case se.SFIXED32:
            case se.SINT32:
            case se.UINT32:
                let a;
                if ("number" == typeof n ? a = n : "string" == typeof n && n.length > 0 && n.trim().length === n.length && (a = Number(n)),
                void 0 === a)
                    break;
                return e == se.UINT32 || e == se.FIXED32 ? X(a) : V(a),
                a;
            case se.INT64:
            case se.SFIXED64:
            case se.SINT64:
                if ("number" != typeof n && "string" != typeof n)
                    break;
                const o = ie.parse(n);
                return t ? o.toString() : o;
            case se.FIXED64:
            case se.UINT64:
                if ("number" != typeof n && "string" != typeof n)
                    break;
                const i = ie.uParse(n);
                return t ? i.toString() : i;
            case se.BOOL:
                if ("boolean" != typeof n)
                    break;
                return n;
            case se.STRING:
                if ("string" != typeof n)
                    break;
                try {
                    encodeURIComponent(n)
                } catch (e) {
                    throw new Error("invalid UTF8")
                }
                return n;
            case se.BYTES:
                if ("" === n)
                    return new Uint8Array(0);
                if ("string" != typeof n)
                    break;
                return b.dec(n)
            }
            throw new Error
        }
        function De(e, n, t, r) {
            if (null === n)
                return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : Ie;
            switch (typeof n) {
            case "number":
                if (Number.isInteger(n))
                    return n;
                break;
            case "string":
                const r = e.findName(n);
                if (void 0 !== r)
                    return r.no;
                if (t)
                    return he
            }
            throw new Error(`cannot decode enum ${e.typeName} from JSON: ${Le(n)}`)
        }
        function Me(e) {
            return !(!e.repeated && "map" != e.kind && (e.oneof || "message" == e.kind || e.opt || e.req))
        }
        function ye(e, n, t) {
            if ("map" == e.kind) {
                J("object" == typeof n && null != n);
                const r = {}
                  , a = Object.entries(n);
                switch (e.V.kind) {
                case "scalar":
                    for (const [n,t] of a)
                        r[n.toString()] = we(e.V.T, t);
                    break;
                case "message":
                    for (const [e,n] of a)
                        r[e.toString()] = n.toJson(t);
                    break;
                case "enum":
                    const n = e.V.T;
                    for (const [e,o] of a)
                        r[e.toString()] = Ue(n, o, t.enumAsInteger)
                }
                return t.emitDefaultValues || a.length > 0 ? r : void 0
            }
            if (e.repeated) {
                J(Array.isArray(n));
                const r = [];
                switch (e.kind) {
                case "scalar":
                    for (let t = 0; t < n.length; t++)
                        r.push(we(e.T, n[t]));
                    break;
                case "enum":
                    for (let a = 0; a < n.length; a++)
                        r.push(Ue(e.T, n[a], t.enumAsInteger));
                    break;
                case "message":
                    for (let e = 0; e < n.length; e++)
                        r.push(n[e].toJson(t))
                }
                return t.emitDefaultValues || r.length > 0 ? r : void 0
            }
            switch (e.kind) {
            case "scalar":
                return we(e.T, n);
            case "enum":
                return Ue(e.T, n, t.enumAsInteger);
            case "message":
                return Ne(e.T, n).toJson(t)
            }
        }
        function Ue(e, n, t) {
            var r;
            if (J("number" == typeof n),
            "google.protobuf.NullValue" == e.typeName)
                return null;
            if (t)
                return n;
            const a = e.findNumber(n);
            return null !== (r = null == a ? void 0 : a.name) && void 0 !== r ? r : n
        }
        function we(e, n) {
            switch (e) {
            case se.INT32:
            case se.SFIXED32:
            case se.SINT32:
            case se.FIXED32:
            case se.UINT32:
                return J("number" == typeof n),
                n;
            case se.FLOAT:
            case se.DOUBLE:
                return J("number" == typeof n),
                Number.isNaN(n) ? "NaN" : n === Number.POSITIVE_INFINITY ? "Infinity" : n === Number.NEGATIVE_INFINITY ? "-Infinity" : n;
            case se.STRING:
                return J("string" == typeof n),
                n;
            case se.BOOL:
                return J("boolean" == typeof n),
                n;
            case se.UINT64:
            case se.FIXED64:
            case se.INT64:
            case se.SFIXED64:
            case se.SINT64:
                return J("bigint" == typeof n || "string" == typeof n || "number" == typeof n),
                n.toString();
            case se.BYTES:
                return J(n instanceof Uint8Array),
                b.enc(n)
            }
        }
        var be;
        !function(e) {
            e[e.Varint = 0] = "Varint",
            e[e.Bit64 = 1] = "Bit64",
            e[e.LengthDelimited = 2] = "LengthDelimited",
            e[e.StartGroup = 3] = "StartGroup",
            e[e.EndGroup = 4] = "EndGroup",
            e[e.Bit32 = 5] = "Bit32"
        }(be || (be = {}));
        class ke {
            constructor(e) {
                this.stack = [],
                this.textEncoder = null != e ? e : new TextEncoder,
                this.chunks = [],
                this.buf = []
            }
            finish() {
                this.chunks.push(new Uint8Array(this.buf));
                let e = 0;
                for (let n = 0; n < this.chunks.length; n++)
                    e += this.chunks[n].length;
                let n = new Uint8Array(e)
                  , t = 0;
                for (let e = 0; e < this.chunks.length; e++)
                    n.set(this.chunks[e], t),
                    t += this.chunks[e].length;
                return this.chunks = [],
                n
            }
            fork() {
                return this.stack.push({
                    chunks: this.chunks,
                    buf: this.buf
                }),
                this.chunks = [],
                this.buf = [],
                this
            }
            join() {
                let e = this.finish()
                  , n = this.stack.pop();
                if (!n)
                    throw new Error("invalid state, fork stack empty");
                return this.chunks = n.chunks,
                this.buf = n.buf,
                this.uint32(e.byteLength),
                this.raw(e)
            }
            tag(e, n) {
                return this.uint32((e << 3 | n) >>> 0)
            }
            raw(e) {
                return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)),
                this.buf = []),
                this.chunks.push(e),
                this
            }
            uint32(e) {
                for (X(e); e > 127; )
                    this.buf.push(127 & e | 128),
                    e >>>= 7;
                return this.buf.push(e),
                this
            }
            int32(e) {
                return V(e),
                ae(e, this.buf),
                this
            }
            bool(e) {
                return this.buf.push(e ? 1 : 0),
                this
            }
            bytes(e) {
                return this.uint32(e.byteLength),
                this.raw(e)
            }
            string(e) {
                let n = this.textEncoder.encode(e);
                return this.uint32(n.byteLength),
                this.raw(n)
            }
            float(e) {
                W(e);
                let n = new Uint8Array(4);
                return new DataView(n.buffer).setFloat32(0, e, !0),
                this.raw(n)
            }
            double(e) {
                let n = new Uint8Array(8);
                return new DataView(n.buffer).setFloat64(0, e, !0),
                this.raw(n)
            }
            fixed32(e) {
                X(e);
                let n = new Uint8Array(4);
                return new DataView(n.buffer).setUint32(0, e, !0),
                this.raw(n)
            }
            sfixed32(e) {
                V(e);
                let n = new Uint8Array(4);
                return new DataView(n.buffer).setInt32(0, e, !0),
                this.raw(n)
            }
            sint32(e) {
                return V(e),
                ae(e = (e << 1 ^ e >> 31) >>> 0, this.buf),
                this
            }
            sfixed64(e) {
                let n = new Uint8Array(8)
                  , t = new DataView(n.buffer)
                  , r = ie.enc(e);
                return t.setInt32(0, r.lo, !0),
                t.setInt32(4, r.hi, !0),
                this.raw(n)
            }
            fixed64(e) {
                let n = new Uint8Array(8)
                  , t = new DataView(n.buffer)
                  , r = ie.uEnc(e);
                return t.setInt32(0, r.lo, !0),
                t.setInt32(4, r.hi, !0),
                this.raw(n)
            }
            int64(e) {
                let n = ie.enc(e);
                return $(n.lo, n.hi, this.buf),
                this
            }
            sint64(e) {
                let n = ie.enc(e)
                  , t = n.hi >> 31;
                return $(n.lo << 1 ^ t, (n.hi << 1 | n.lo >>> 31) ^ t, this.buf),
                this
            }
            uint64(e) {
                let n = ie.uEnc(e);
                return $(n.lo, n.hi, this.buf),
                this
            }
        }
        class ve {
            constructor(e, n) {
                this.varint64 = j,
                this.uint32 = oe,
                this.buf = e,
                this.len = e.length,
                this.pos = 0,
                this.view = new DataView(e.buffer,e.byteOffset,e.byteLength),
                this.textDecoder = null != n ? n : new TextDecoder
            }
            tag() {
                let e = this.uint32()
                  , n = e >>> 3
                  , t = 7 & e;
                if (n <= 0 || t < 0 || t > 5)
                    throw new Error("illegal tag: field no " + n + " wire type " + t);
                return [n, t]
            }
            skip(e) {
                let n = this.pos;
                switch (e) {
                case be.Varint:
                    for (; 128 & this.buf[this.pos++]; )
                        ;
                    break;
                case be.Bit64:
                    this.pos += 4;
                case be.Bit32:
                    this.pos += 4;
                    break;
                case be.LengthDelimited:
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case be.StartGroup:
                    let t;
                    for (; (t = this.tag()[1]) !== be.EndGroup; )
                        this.skip(t);
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
                }
                return this.assertBounds(),
                this.buf.subarray(n, this.pos)
            }
            assertBounds() {
                if (this.pos > this.len)
                    throw new RangeError("premature EOF")
            }
            int32() {
                return 0 | this.uint32()
            }
            sint32() {
                let e = this.uint32();
                return e >>> 1 ^ -(1 & e)
            }
            int64() {
                return ie.dec(...this.varint64())
            }
            uint64() {
                return ie.uDec(...this.varint64())
            }
            sint64() {
                let[e,n] = this.varint64()
                  , t = -(1 & e);
                return e = (e >>> 1 | (1 & n) << 31) ^ t,
                n = n >>> 1 ^ t,
                ie.dec(e, n)
            }
            bool() {
                let[e,n] = this.varint64();
                return 0 !== e || 0 !== n
            }
            fixed32() {
                return this.view.getUint32((this.pos += 4) - 4, !0)
            }
            sfixed32() {
                return this.view.getInt32((this.pos += 4) - 4, !0)
            }
            fixed64() {
                return ie.uDec(this.sfixed32(), this.sfixed32())
            }
            sfixed64() {
                return ie.dec(this.sfixed32(), this.sfixed32())
            }
            float() {
                return this.view.getFloat32((this.pos += 4) - 4, !0)
            }
            double() {
                return this.view.getFloat64((this.pos += 8) - 8, !0)
            }
            bytes() {
                let e = this.uint32()
                  , n = this.pos;
                return this.pos += e,
                this.assertBounds(),
                this.buf.subarray(n, n + e)
            }
            string() {
                return this.textDecoder.decode(this.bytes())
            }
        }
        const Fe = Symbol("@bufbuild/protobuf/unknown-fields")
          , Be = {
            readUnknownFields: !0,
            readerFactory: e => new ve(e)
        }
          , xe = {
            writeUnknownFields: !0,
            writerFactory: () => new ke
        };
        function Ge(e, n, t, r, a) {
            let {repeated: o, localName: i} = t;
            switch (t.oneof && ((e = e[t.oneof.localName]).case != i && delete e.value,
            e.case = i,
            i = "value"),
            t.kind) {
            case "scalar":
            case "enum":
                const s = "enum" == t.kind ? se.INT32 : t.T;
                let l = Ve;
                if ("scalar" == t.kind && t.L > 0 && (l = Je),
                o) {
                    let t = e[i];
                    if (r == be.LengthDelimited && s != se.STRING && s != se.BYTES) {
                        let e = n.uint32() + n.pos;
                        for (; n.pos < e; )
                            t.push(l(n, s))
                    } else
                        t.push(l(n, s))
                } else
                    e[i] = l(n, s);
                break;
            case "message":
                const u = t.T;
                o ? e[i].push(He(n, new u, a, t)) : Oe(e[i]) ? He(n, e[i], a, t) : (e[i] = He(n, new u, a, t),
                !u.fieldWrapper || t.oneof || t.repeated || (e[i] = u.fieldWrapper.unwrapField(e[i])));
                break;
            case "map":
                let[c,_] = function(e, n, t) {
                    const r = n.uint32()
                      , a = n.pos + r;
                    let o, i;
                    for (; n.pos < a; ) {
                        const [r] = n.tag();
                        switch (r) {
                        case 1:
                            o = Ve(n, e.K);
                            break;
                        case 2:
                            switch (e.V.kind) {
                            case "scalar":
                                i = Ve(n, e.V.T);
                                break;
                            case "enum":
                                i = n.int32();
                                break;
                            case "message":
                                i = He(n, new e.V.T, t, void 0)
                            }
                        }
                    }
                    if (void 0 === o && (o = ce(e.K, le.BIGINT)),
                    "string" != typeof o && "number" != typeof o && (o = o.toString()),
                    void 0 === i)
                        switch (e.V.kind) {
                        case "scalar":
                            i = ce(e.V.T, le.BIGINT);
                            break;
                        case "enum":
                            i = e.V.T.values[0].no;
                            break;
                        case "message":
                            i = new e.V.T
                        }
                    return [o, i]
                }(t, n, a);
                e[i][c] = _
            }
        }
        function He(e, n, t, r) {
            const a = n.getType().runtime.bin
              , o = null == r ? void 0 : r.delimited;
            return a.readMessage(n, e, o ? r.no : e.uint32(), t, o),
            n
        }
        function Je(e, n) {
            const t = Ve(e, n);
            return "bigint" == typeof t ? t.toString() : t
        }
        function Ve(e, n) {
            switch (n) {
            case se.STRING:
                return e.string();
            case se.BOOL:
                return e.bool();
            case se.DOUBLE:
                return e.double();
            case se.FLOAT:
                return e.float();
            case se.INT32:
                return e.int32();
            case se.INT64:
                return e.int64();
            case se.UINT64:
                return e.uint64();
            case se.FIXED64:
                return e.fixed64();
            case se.BYTES:
                return e.bytes();
            case se.FIXED32:
                return e.fixed32();
            case se.SFIXED32:
                return e.sfixed32();
            case se.SFIXED64:
                return e.sfixed64();
            case se.SINT64:
                return e.sint64();
            case se.UINT32:
                return e.uint32();
            case se.SINT32:
                return e.sint32()
            }
        }
        function Xe(e, n, t, r) {
            J(void 0 !== n);
            const a = e.repeated;
            switch (e.kind) {
            case "scalar":
            case "enum":
                let o = "enum" == e.kind ? se.INT32 : e.T;
                if (a)
                    if (J(Array.isArray(n)),
                    e.packed)
                        !function(e, n, t, r) {
                            if (!r.length)
                                return;
                            e.tag(t, be.LengthDelimited).fork();
                            let[,a] = qe(n);
                            for (let n = 0; n < r.length; n++)
                                e[a](r[n]);
                            e.join()
                        }(t, o, e.no, n);
                    else
                        for (const r of n)
                            Ye(t, o, e.no, r);
                else
                    Ye(t, o, e.no, n);
                break;
            case "message":
                if (a) {
                    J(Array.isArray(n));
                    for (const a of n)
                        Ke(t, r, e, a)
                } else
                    Ke(t, r, e, n);
                break;
            case "map":
                J("object" == typeof n && null != n);
                for (const [a,o] of Object.entries(n))
                    We(t, r, e, a, o)
            }
        }
        function We(e, n, t, r, a) {
            e.tag(t.no, be.LengthDelimited),
            e.fork();
            let o = r;
            switch (t.K) {
            case se.INT32:
            case se.FIXED32:
            case se.UINT32:
            case se.SFIXED32:
            case se.SINT32:
                o = Number.parseInt(r);
                break;
            case se.BOOL:
                J("true" == r || "false" == r),
                o = "true" == r
            }
            switch (Ye(e, t.K, 1, o),
            t.V.kind) {
            case "scalar":
                Ye(e, t.V.T, 2, a);
                break;
            case "enum":
                Ye(e, se.INT32, 2, a);
                break;
            case "message":
                J(void 0 !== a),
                e.tag(2, be.LengthDelimited).bytes(a.toBinary(n))
            }
            e.join()
        }
        function Ke(e, n, t, r) {
            const a = Ne(t.T, r);
            t.delimited ? e.tag(t.no, be.StartGroup).raw(a.toBinary(n)).tag(t.no, be.EndGroup) : e.tag(t.no, be.LengthDelimited).bytes(a.toBinary(n))
        }
        function Ye(e, n, t, r) {
            J(void 0 !== r);
            let[a,o] = qe(n);
            e.tag(t, a)[o](r)
        }
        function qe(e) {
            let n = be.Varint;
            switch (e) {
            case se.BYTES:
            case se.STRING:
                n = be.LengthDelimited;
                break;
            case se.DOUBLE:
            case se.FIXED64:
            case se.SFIXED64:
                n = be.Bit64;
                break;
            case se.FIXED32:
            case se.SFIXED32:
            case se.FLOAT:
                n = be.Bit32
            }
            return [n, se[e].toLowerCase()]
        }
        function ze(e) {
            if (void 0 === e)
                return e;
            if (Oe(e))
                return e.clone();
            if (e instanceof Uint8Array) {
                const n = new Uint8Array(e.byteLength);
                return n.set(e),
                n
            }
            return e
        }
        function je(e) {
            return e instanceof Uint8Array ? e : new Uint8Array(e)
        }
        class $e {
            constructor(e, n) {
                this._fields = e,
                this._normalizer = n
            }
            findJsonName(e) {
                if (!this.jsonNames) {
                    const e = {};
                    for (const n of this.list())
                        e[n.jsonName] = e[n.name] = n;
                    this.jsonNames = e
                }
                return this.jsonNames[e]
            }
            find(e) {
                if (!this.numbers) {
                    const e = {};
                    for (const n of this.list())
                        e[n.no] = n;
                    this.numbers = e
                }
                return this.numbers[e]
            }
            list() {
                return this.all || (this.all = this._normalizer(this._fields)),
                this.all
            }
            byNumber() {
                return this.numbersAsc || (this.numbersAsc = this.list().concat().sort(( (e, n) => e.no - n.no))),
                this.numbersAsc
            }
            byMember() {
                if (!this.members) {
                    this.members = [];
                    const e = this.members;
                    let n;
                    for (const t of this.list())
                        t.oneof ? t.oneof !== n && (n = t.oneof,
                        e.push(n)) : e.push(t)
                }
                return this.members
            }
        }
        function Qe(e, n) {
            const t = en(e);
            return n ? t : on(an(t))
        }
        const Ze = en;
        function en(e) {
            let n = !1;
            const t = [];
            for (let r = 0; r < e.length; r++) {
                let a = e.charAt(r);
                switch (a) {
                case "_":
                    n = !0;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    t.push(a),
                    n = !1;
                    break;
                default:
                    n && (n = !1,
                    a = a.toUpperCase()),
                    t.push(a)
                }
            }
            return t.join("")
        }
        new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]);
        const nn = new Set(["constructor", "toString", "toJSON", "valueOf"])
          , tn = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"])
          , rn = e => `${e}$`
          , an = e => tn.has(e) ? rn(e) : e
          , on = e => nn.has(e) ? rn(e) : e;
        class sn {
            constructor(e) {
                this.kind = "oneof",
                this.repeated = !1,
                this.packed = !1,
                this.opt = !1,
                this.req = !1,
                this.default = void 0,
                this.fields = [],
                this.name = e,
                this.localName = Qe(e, !1)
            }
            addField(e) {
                J(e.oneof === this, `field ${e.name} not one of ${this.name}`),
                this.fields.push(e)
            }
            findField(e) {
                if (!this._lookup) {
                    this._lookup = Object.create(null);
                    for (let e = 0; e < this.fields.length; e++)
                        this._lookup[this.fields[e].localName] = this.fields[e]
                }
                return this._lookup[e]
            }
        }
        const ln = (un = e => new $e(e,(e => function(e) {
            var n, t, r, a, o, i;
            const s = [];
            let l;
            for (const u of "function" == typeof e ? e() : e) {
                const e = u;
                if (e.localName = Qe(u.name, void 0 !== u.oneof),
                e.jsonName = null !== (n = u.jsonName) && void 0 !== n ? n : Ze(u.name),
                e.repeated = null !== (t = u.repeated) && void 0 !== t && t,
                "scalar" == u.kind && (e.L = null !== (r = u.L) && void 0 !== r ? r : le.BIGINT),
                e.delimited = null !== (a = u.delimited) && void 0 !== a && a,
                e.req = null !== (o = u.req) && void 0 !== o && o,
                e.opt = null !== (i = u.opt) && void 0 !== i && i,
                void 0 === u.packed && (e.packed = "enum" == u.kind || "scalar" == u.kind && u.T != se.BYTES && u.T != se.STRING),
                void 0 !== u.oneof) {
                    const n = "string" == typeof u.oneof ? u.oneof : u.oneof.name;
                    l && l.name == n || (l = new sn(n)),
                    e.oneof = l,
                    l.addField(e)
                }
                s.push(e)
            }
            return s
        }(e))),
        cn = e => {
            for (const n of e.getType().fields.byMember()) {
                if (n.opt)
                    continue;
                const t = n.localName
                  , r = e;
                if (n.repeated)
                    r[t] = [];
                else
                    switch (n.kind) {
                    case "oneof":
                        r[t] = {
                            case: void 0
                        };
                        break;
                    case "enum":
                        r[t] = 0;
                        break;
                    case "map":
                        r[t] = {};
                        break;
                    case "scalar":
                        r[t] = ce(n.T, n.L)
                    }
            }
        }
        ,
        {
            syntax: "proto3",
            json: {
                makeReadOptions: function(e) {
                    return e ? Object.assign(Object.assign({}, Ce), e) : Ce
                },
                makeWriteOptions: function(e) {
                    return e ? Object.assign(Object.assign({}, Ae), e) : Ae
                },
                readMessage(e, n, t, r) {
                    if (null == n || Array.isArray(n) || "object" != typeof n)
                        throw new Error(`cannot decode message ${e.typeName} from JSON: ${Le(n)}`);
                    r = null != r ? r : new e;
                    const a = new Map
                      , o = t.typeRegistry;
                    for (const [i,s] of Object.entries(n)) {
                        const n = e.fields.findJsonName(i);
                        if (n) {
                            if (n.oneof) {
                                if (null === s && "scalar" == n.kind)
                                    continue;
                                const t = a.get(n.oneof);
                                if (void 0 !== t)
                                    throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${n.oneof.name}" present: "${t}", "${i}"`);
                                a.set(n.oneof, i)
                            }
                            Re(r, s, n, t, e)
                        } else {
                            let n = !1;
                            if ((null == o ? void 0 : o.findExtension) && i.startsWith("[") && i.endsWith("]")) {
                                const a = o.findExtension(i.substring(1, i.length - 1));
                                if (a && a.extendee.typeName == e.typeName) {
                                    n = !0;
                                    const [e,o] = Ee(a);
                                    Re(e, s, a.field, t, a),
                                    de(r, a, o(), t)
                                }
                            }
                            if (!n && !t.ignoreUnknownFields)
                                throw new Error(`cannot decode message ${e.typeName} from JSON: key "${i}" is unknown`)
                        }
                    }
                    return r
                },
                writeMessage(e, n) {
                    const t = e.getType()
                      , r = {};
                    let a;
                    try {
                        for (a of t.fields.byNumber()) {
                            if (!pe(a, e)) {
                                if (a.req)
                                    throw "required field not set";
                                if (!n.emitDefaultValues)
                                    continue;
                                if (!Me(a))
                                    continue
                            }
                            const t = ye(a, a.oneof ? e[a.oneof.localName].value : e[a.localName], n);
                            void 0 !== t && (r[n.useProtoFieldName ? a.name : a.jsonName] = t)
                        }
                        const o = n.typeRegistry;
                        if (null == o ? void 0 : o.findExtensionFor)
                            for (const a of t.runtime.bin.listUnknownFields(e)) {
                                const i = o.findExtensionFor(t.typeName, a.no);
                                if (i && fe(e, i)) {
                                    const t = me(e, i, n)
                                      , a = ye(i.field, t, n);
                                    void 0 !== a && (r[i.field.jsonName] = a)
                                }
                            }
                    } catch (e) {
                        const n = a ? `cannot encode field ${t.typeName}.${a.name} to JSON` : `cannot encode message ${t.typeName} to JSON`
                          , r = e instanceof Error ? e.message : String(e);
                        throw new Error(n + (r.length > 0 ? `: ${r}` : ""))
                    }
                    return r
                },
                readScalar: (e, n, t) => Pe(e, n, null != t ? t : le.BIGINT, !0),
                writeScalar(e, n, t) {
                    if (void 0 !== n)
                        return t || _e(e, n) ? we(e, n) : void 0
                },
                debug: Le
            },
            bin: {
                makeReadOptions: function(e) {
                    return e ? Object.assign(Object.assign({}, Be), e) : Be
                },
                makeWriteOptions: function(e) {
                    return e ? Object.assign(Object.assign({}, xe), e) : xe
                },
                listUnknownFields(e) {
                    var n;
                    return null !== (n = e[Fe]) && void 0 !== n ? n : []
                },
                discardUnknownFields(e) {
                    delete e[Fe]
                },
                writeUnknownFields(e, n) {
                    const t = e[Fe];
                    if (t)
                        for (const e of t)
                            n.tag(e.no, e.wireType).raw(e.data)
                },
                onUnknownField(e, n, t, r) {
                    const a = e;
                    Array.isArray(a[Fe]) || (a[Fe] = []),
                    a[Fe].push({
                        no: n,
                        wireType: t,
                        data: r
                    })
                },
                readMessage(e, n, t, r, a) {
                    const o = e.getType()
                      , i = a ? n.len : n.pos + t;
                    let s, l;
                    for (; n.pos < i && ([s,l] = n.tag(),
                    l != be.EndGroup); ) {
                        const t = o.fields.find(s);
                        if (t)
                            Ge(e, n, t, l, r);
                        else {
                            const t = n.skip(l);
                            r.readUnknownFields && this.onUnknownField(e, s, l, t)
                        }
                    }
                    if (a && (l != be.EndGroup || s !== t))
                        throw new Error("invalid end group tag")
                },
                readField: Ge,
                writeMessage(e, n, t) {
                    const r = e.getType();
                    for (const a of r.fields.byNumber())
                        if (pe(a, e))
                            Xe(a, a.oneof ? e[a.oneof.localName].value : e[a.localName], n, t);
                        else if (a.req)
                            throw new Error(`cannot encode field ${r.typeName}.${a.name} to binary: required field not set`);
                    return t.writeUnknownFields && this.writeUnknownFields(e, n),
                    n
                },
                writeField(e, n, t, r) {
                    void 0 !== n && Xe(e, n, t, r)
                }
            },
            util: Object.assign(Object.assign({}, {
                setEnumType: Y,
                initPartial(e, n) {
                    if (void 0 === e)
                        return;
                    const t = n.getType();
                    for (const r of t.fields.byMember()) {
                        const t = r.localName
                          , a = n
                          , o = e;
                        if (void 0 !== o[t])
                            switch (r.kind) {
                            case "oneof":
                                const e = o[t].case;
                                if (void 0 === e)
                                    continue;
                                const n = r.findField(e);
                                let i = o[t].value;
                                n && "message" == n.kind && !Oe(i, n.T) ? i = new n.T(i) : n && "scalar" === n.kind && n.T === se.BYTES && (i = je(i)),
                                a[t] = {
                                    case: e,
                                    value: i
                                };
                                break;
                            case "scalar":
                            case "enum":
                                let s = o[t];
                                r.T === se.BYTES && (s = r.repeated ? s.map(je) : je(s)),
                                a[t] = s;
                                break;
                            case "map":
                                switch (r.V.kind) {
                                case "scalar":
                                case "enum":
                                    if (r.V.T === se.BYTES)
                                        for (const [e,n] of Object.entries(o[t]))
                                            a[t][e] = je(n);
                                    else
                                        Object.assign(a[t], o[t]);
                                    break;
                                case "message":
                                    const e = r.V.T;
                                    for (const n of Object.keys(o[t])) {
                                        let r = o[t][n];
                                        e.fieldWrapper || (r = new e(r)),
                                        a[t][n] = r
                                    }
                                }
                                break;
                            case "message":
                                const l = r.T;
                                if (r.repeated)
                                    a[t] = o[t].map((e => Oe(e, l) ? e : new l(e)));
                                else {
                                    const e = o[t];
                                    l.fieldWrapper ? "google.protobuf.BytesValue" === l.typeName ? a[t] = je(e) : a[t] = e : a[t] = Oe(e, l) ? e : new l(e)
                                }
                            }
                    }
                },
                equals: (e, n, t) => n === t || !(!n || !t) && e.fields.byMember().every((e => {
                    const r = n[e.localName]
                      , a = t[e.localName];
                    if (e.repeated) {
                        if (r.length !== a.length)
                            return !1;
                        switch (e.kind) {
                        case "message":
                            return r.every(( (n, t) => e.T.equals(n, a[t])));
                        case "scalar":
                            return r.every(( (n, t) => ue(e.T, n, a[t])));
                        case "enum":
                            return r.every(( (e, n) => ue(se.INT32, e, a[n])))
                        }
                        throw new Error(`repeated cannot contain ${e.kind}`)
                    }
                    switch (e.kind) {
                    case "message":
                        return e.T.equals(r, a);
                    case "enum":
                        return ue(se.INT32, r, a);
                    case "scalar":
                        return ue(e.T, r, a);
                    case "oneof":
                        if (r.case !== a.case)
                            return !1;
                        const n = e.findField(r.case);
                        if (void 0 === n)
                            return !0;
                        switch (n.kind) {
                        case "message":
                            return n.T.equals(r.value, a.value);
                        case "enum":
                            return ue(se.INT32, r.value, a.value);
                        case "scalar":
                            return ue(n.T, r.value, a.value)
                        }
                        throw new Error(`oneof cannot contain ${n.kind}`);
                    case "map":
                        const t = Object.keys(r).concat(Object.keys(a));
                        switch (e.V.kind) {
                        case "message":
                            const n = e.V.T;
                            return t.every((e => n.equals(r[e], a[e])));
                        case "enum":
                            return t.every((e => ue(se.INT32, r[e], a[e])));
                        case "scalar":
                            const o = e.V.T;
                            return t.every((e => ue(o, r[e], a[e])))
                        }
                    }
                }
                )),
                clone(e) {
                    const n = e.getType()
                      , t = new n
                      , r = t;
                    for (const t of n.fields.byMember()) {
                        const n = e[t.localName];
                        let a;
                        if (t.repeated)
                            a = n.map(ze);
                        else if ("map" == t.kind) {
                            a = r[t.localName];
                            for (const [e,t] of Object.entries(n))
                                a[e] = ze(t)
                        } else
                            a = "oneof" == t.kind ? t.findField(n.case) ? {
                                case: n.case,
                                value: ze(n.value)
                            } : {
                                case: void 0
                            } : ze(n);
                        r[t.localName] = a
                    }
                    for (const t of n.runtime.bin.listUnknownFields(e))
                        n.runtime.bin.onUnknownField(r, t.no, t.wireType, t.data);
                    return t
                }
            }), {
                newFieldList: un,
                initFields: cn
            }),
            makeMessageType(e, n, t) {
                return function(e, n, t, r) {
                    var a;
                    const o = null !== (a = null == r ? void 0 : r.localName) && void 0 !== a ? a : n.substring(n.lastIndexOf(".") + 1)
                      , i = {
                        [o]: function(n) {
                            e.util.initFields(this),
                            e.util.initPartial(n, this)
                        }
                    }[o];
                    return Object.setPrototypeOf(i.prototype, new H),
                    Object.assign(i, {
                        runtime: e,
                        typeName: n,
                        fields: e.util.newFieldList(t),
                        fromBinary: (e, n) => (new i).fromBinary(e, n),
                        fromJson: (e, n) => (new i).fromJson(e, n),
                        fromJsonString: (e, n) => (new i).fromJsonString(e, n),
                        equals: (n, t) => e.util.equals(i, n, t)
                    }),
                    i
                }(this, e, n, t)
            },
            makeEnum: function(e, n, t) {
                const r = {};
                for (const e of n) {
                    const n = z(e);
                    r[n.localName] = n.no,
                    r[n.no] = n.localName
                }
                return Y(r, e, n),
                r
            },
            makeEnumType: q,
            getEnumType: function(e) {
                const n = e[K];
                return J(n, "missing enum type on enum object"),
                n
            },
            makeExtension(e, n, t) {
                return function(e, n, t, r) {
                    let a;
                    return {
                        typeName: n,
                        extendee: t,
                        get field() {
                            if (!a) {
                                const t = "function" == typeof r ? r() : r;
                                t.name = n.split(".").pop(),
                                t.jsonName = `[${n}]`,
                                a = e.util.newFieldList([t]).list()[0]
                            }
                            return a
                        },
                        runtime: e
                    }
                }(this, e, n, t)
            }
        });
        var un, cn, _n, En, mn, dn, fn, Tn, pn, Sn, On, Nn, Cn, An, In, hn, Ln, Rn, gn, Pn, Dn, Mn, yn, Un, wn, bn, kn, vn, Fn, Bn, xn, Gn, Hn, Jn, Vn, Xn, Wn, Kn, Yn, qn, zn, jn, $n, Qn, Zn, et, nt, tt, rt, at, ot, it, st, lt, ut, ct, _t, Et, mt, dt, ft, Tt, pt, St, Ot;
        class Nt extends H {
            constructor(e) {
                super(),
                this.seconds = ie.zero,
                this.nanos = 0,
                ln.util.initPartial(e, this)
            }
            fromJson(e, n) {
                if ("string" != typeof e)
                    throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${ln.json.debug(e)}`);
                const t = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
                if (!t)
                    throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
                const r = Date.parse(t[1] + "-" + t[2] + "-" + t[3] + "T" + t[4] + ":" + t[5] + ":" + t[6] + (t[8] ? t[8] : "Z"));
                if (Number.isNaN(r))
                    throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
                if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z"))
                    throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
                return this.seconds = ie.parse(r / 1e3),
                this.nanos = 0,
                t[7] && (this.nanos = parseInt("1" + t[7] + "0".repeat(9 - t[7].length)) - 1e9),
                this
            }
            toJson(e) {
                const n = 1e3 * Number(this.seconds);
                if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z"))
                    throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
                if (this.nanos < 0)
                    throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
                let t = "Z";
                if (this.nanos > 0) {
                    const e = (this.nanos + 1e9).toString().substring(1);
                    t = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z"
                }
                return new Date(n).toISOString().replace(".000Z", t)
            }
            toDate() {
                return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6))
            }
            static now() {
                return Nt.fromDate(new Date)
            }
            static fromDate(e) {
                const n = e.getTime();
                return new Nt({
                    seconds: ie.parse(Math.floor(n / 1e3)),
                    nanos: n % 1e3 * 1e6
                })
            }
            static fromBinary(e, n) {
                return (new Nt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Nt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Nt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Nt, e, n)
            }
        }
        Nt.runtime = ln,
        Nt.typeName = "google.protobuf.Timestamp",
        Nt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "seconds",
            kind: "scalar",
            T: 3
        }, {
            no: 2,
            name: "nanos",
            kind: "scalar",
            T: 5
        }]));
        class Ct extends H {
            constructor(e) {
                super(),
                this.seconds = ie.zero,
                this.nanos = 0,
                ln.util.initPartial(e, this)
            }
            fromJson(e, n) {
                if ("string" != typeof e)
                    throw new Error(`cannot decode google.protobuf.Duration from JSON: ${ln.json.debug(e)}`);
                const t = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
                if (null === t)
                    throw new Error(`cannot decode google.protobuf.Duration from JSON: ${ln.json.debug(e)}`);
                const r = Number(t[1]);
                if (r > 315576e6 || r < -315576e6)
                    throw new Error(`cannot decode google.protobuf.Duration from JSON: ${ln.json.debug(e)}`);
                if (this.seconds = ie.parse(r),
                "string" == typeof t[2]) {
                    const e = t[2] + "0".repeat(9 - t[2].length);
                    this.nanos = parseInt(e),
                    (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos)
                }
                return this
            }
            toJson(e) {
                if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
                    throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
                let n = this.seconds.toString();
                if (0 !== this.nanos) {
                    let e = Math.abs(this.nanos).toString();
                    e = "0".repeat(9 - e.length) + e,
                    "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)),
                    n += "." + e,
                    this.nanos < 0 && 0 == Number(this.seconds) && (n = "-" + n)
                }
                return n + "s"
            }
            static fromBinary(e, n) {
                return (new Ct).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ct).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ct).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ct, e, n)
            }
        }
        Ct.runtime = ln,
        Ct.typeName = "google.protobuf.Duration",
        Ct.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "seconds",
            kind: "scalar",
            T: 3
        }, {
            no: 2,
            name: "nanos",
            kind: "scalar",
            T: 5
        }])),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.AUTOCOMPLETE = 1] = "AUTOCOMPLETE",
            e[e.CHAT = 2] = "CHAT",
            e[e.COMMAND_GENERATE = 4] = "COMMAND_GENERATE",
            e[e.COMMAND_EDIT = 5] = "COMMAND_EDIT",
            e[e.SUPERCOMPLETE = 6] = "SUPERCOMPLETE",
            e[e.COMMAND_PLAN = 7] = "COMMAND_PLAN",
            e[e.QUERY = 8] = "QUERY",
            e[e.FAST_APPLY = 9] = "FAST_APPLY",
            e[e.COMMAND_TERMINAL = 10] = "COMMAND_TERMINAL",
            e[e.TAB_JUMP = 11] = "TAB_JUMP"
        }(_n || (_n = {})),
        ln.util.setEnumType(_n, "exa.codeium_common_pb.ProviderSource", [{
            no: 0,
            name: "PROVIDER_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "PROVIDER_SOURCE_AUTOCOMPLETE"
        }, {
            no: 2,
            name: "PROVIDER_SOURCE_CHAT"
        }, {
            no: 4,
            name: "PROVIDER_SOURCE_COMMAND_GENERATE"
        }, {
            no: 5,
            name: "PROVIDER_SOURCE_COMMAND_EDIT"
        }, {
            no: 6,
            name: "PROVIDER_SOURCE_SUPERCOMPLETE"
        }, {
            no: 7,
            name: "PROVIDER_SOURCE_COMMAND_PLAN"
        }, {
            no: 8,
            name: "PROVIDER_SOURCE_QUERY"
        }, {
            no: 9,
            name: "PROVIDER_SOURCE_FAST_APPLY"
        }, {
            no: 10,
            name: "PROVIDER_SOURCE_COMMAND_TERMINAL"
        }, {
            no: 11,
            name: "PROVIDER_SOURCE_TAB_JUMP"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.FILE_MARKER = 2] = "FILE_MARKER",
            e[e.OTHER_DOCUMENT = 4] = "OTHER_DOCUMENT",
            e[e.BEFORE_CURSOR = 5] = "BEFORE_CURSOR",
            e[e.AFTER_CURSOR = 7] = "AFTER_CURSOR",
            e[e.FIM = 8] = "FIM",
            e[e.SOT = 9] = "SOT",
            e[e.EOT = 10] = "EOT",
            e[e.CODE_CONTEXT_ITEM = 13] = "CODE_CONTEXT_ITEM",
            e[e.INSTRUCTION = 14] = "INSTRUCTION",
            e[e.SELECTION = 15] = "SELECTION",
            e[e.TRAJECTORY_STEP = 16] = "TRAJECTORY_STEP",
            e[e.ACTIVE_DOCUMENT = 17] = "ACTIVE_DOCUMENT",
            e[e.CACHED_MESSAGE = 18] = "CACHED_MESSAGE"
        }(En || (En = {})),
        ln.util.setEnumType(En, "exa.codeium_common_pb.PromptElementKind", [{
            no: 0,
            name: "PROMPT_ELEMENT_KIND_UNSPECIFIED"
        }, {
            no: 2,
            name: "PROMPT_ELEMENT_KIND_FILE_MARKER"
        }, {
            no: 4,
            name: "PROMPT_ELEMENT_KIND_OTHER_DOCUMENT"
        }, {
            no: 5,
            name: "PROMPT_ELEMENT_KIND_BEFORE_CURSOR"
        }, {
            no: 7,
            name: "PROMPT_ELEMENT_KIND_AFTER_CURSOR"
        }, {
            no: 8,
            name: "PROMPT_ELEMENT_KIND_FIM"
        }, {
            no: 9,
            name: "PROMPT_ELEMENT_KIND_SOT"
        }, {
            no: 10,
            name: "PROMPT_ELEMENT_KIND_EOT"
        }, {
            no: 13,
            name: "PROMPT_ELEMENT_KIND_CODE_CONTEXT_ITEM"
        }, {
            no: 14,
            name: "PROMPT_ELEMENT_KIND_INSTRUCTION"
        }, {
            no: 15,
            name: "PROMPT_ELEMENT_KIND_SELECTION"
        }, {
            no: 16,
            name: "PROMPT_ELEMENT_KIND_TRAJECTORY_STEP"
        }, {
            no: 17,
            name: "PROMPT_ELEMENT_KIND_ACTIVE_DOCUMENT"
        }, {
            no: 18,
            name: "PROMPT_ELEMENT_KIND_CACHED_MESSAGE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.COPY = 1] = "COPY",
            e[e.PROMPT_CACHE = 2] = "PROMPT_CACHE"
        }(mn || (mn = {})),
        ln.util.setEnumType(mn, "exa.codeium_common_pb.PromptAnnotationKind", [{
            no: 0,
            name: "PROMPT_ANNOTATION_KIND_UNSPECIFIED"
        }, {
            no: 1,
            name: "PROMPT_ANNOTATION_KIND_COPY"
        }, {
            no: 2,
            name: "PROMPT_ANNOTATION_KIND_PROMPT_CACHE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.OTHER_DOCUMENTS = 3] = "OTHER_DOCUMENTS",
            e[e.ONLY_STOP_EOT = 13] = "ONLY_STOP_EOT",
            e[e.INCREASE_MAX_NUM_TOKENS = 27] = "INCREASE_MAX_NUM_TOKENS",
            e[e.BLOCKING_REFRESH = 35] = "BLOCKING_REFRESH",
            e[e.USE_INTERNAL_CHAT_MODEL = 36] = "USE_INTERNAL_CHAT_MODEL",
            e[e.INCREASE_MAX_NUM_TOKENS_MORE = 39] = "INCREASE_MAX_NUM_TOKENS_MORE",
            e[e.USE_CONTEXT_TOKEN = 44] = "USE_CONTEXT_TOKEN",
            e[e.RECORD_FILES = 47] = "RECORD_FILES",
            e[e.NO_SAMPLER_EARLY_STOP = 48] = "NO_SAMPLER_EARLY_STOP",
            e[e.CM_MEMORY_TELEMETRY = 53] = "CM_MEMORY_TELEMETRY",
            e[e.ACTIVITY_CONTEXT_WEIGHT = 54] = "ACTIVITY_CONTEXT_WEIGHT",
            e[e.LANGUAGE_SERVER_VERSION = 55] = "LANGUAGE_SERVER_VERSION",
            e[e.LANGUAGE_SERVER_AUTO_RELOAD = 56] = "LANGUAGE_SERVER_AUTO_RELOAD",
            e[e.ONLY_MULTILINE = 60] = "ONLY_MULTILINE",
            e[e.USE_CHAT_MODEL_7984 = 61] = "USE_CHAT_MODEL_7984",
            e[e.CONTEXT_FOR_NONGENERIC_CHAT = 62] = "CONTEXT_FOR_NONGENERIC_CHAT",
            e[e.USE_AUTOCOMPLETE_MODEL = 64] = "USE_AUTOCOMPLETE_MODEL",
            e[e.USE_ATTRIBUTION_FOR_INDIVIDUAL_TIER = 68] = "USE_ATTRIBUTION_FOR_INDIVIDUAL_TIER",
            e[e.USE_GPT_4_TURBO = 73] = "USE_GPT_4_TURBO",
            e[e.CHAT_MODEL_CONFIG = 78] = "CHAT_MODEL_CONFIG",
            e[e.COMMAND_MODEL_CONFIG = 79] = "COMMAND_MODEL_CONFIG",
            e[e.MIDDLE_MODE_TOKEN_VARIANT = 80] = "MIDDLE_MODE_TOKEN_VARIANT",
            e[e.MIN_IDE_VERSION = 81] = "MIN_IDE_VERSION",
            e[e.API_SERVER_VERBOSE_ERRORS = 84] = "API_SERVER_VERBOSE_ERRORS",
            e[e.DEFAULT_ENABLE_SEARCH = 86] = "DEFAULT_ENABLE_SEARCH",
            e[e.COLLECT_ONBOARDING_EVENTS = 87] = "COLLECT_ONBOARDING_EVENTS",
            e[e.COLLECT_EXAMPLE_COMPLETIONS = 88] = "COLLECT_EXAMPLE_COMPLETIONS",
            e[e.USE_MULTILINE_MODEL = 89] = "USE_MULTILINE_MODEL",
            e[e.OPEN_UNIVERSITY_ON_STARTUP = 91] = "OPEN_UNIVERSITY_ON_STARTUP",
            e[e.ATTRIBUTION_KILL_SWITCH = 92] = "ATTRIBUTION_KILL_SWITCH",
            e[e.FAST_MULTILINE = 94] = "FAST_MULTILINE",
            e[e.SINGLE_COMPLETION = 95] = "SINGLE_COMPLETION",
            e[e.STOP_FIRST_NON_WHITESPACE_LINE = 96] = "STOP_FIRST_NON_WHITESPACE_LINE",
            e[e.TEAMS_UPGRADE_FOR_NONGENERIC_CHAT = 98] = "TEAMS_UPGRADE_FOR_NONGENERIC_CHAT",
            e[e.MODEL_8341_VARIANTS = 99] = "MODEL_8341_VARIANTS",
            e[e.CORTEX_CONFIG = 102] = "CORTEX_CONFIG",
            e[e.MODEL_CHAT_11121_VARIANTS = 103] = "MODEL_CHAT_11121_VARIANTS",
            e[e.INCLUDE_PROMPT_COMPONENTS = 105] = "INCLUDE_PROMPT_COMPONENTS",
            e[e.NON_TEAMS_KILL_SWITCH = 106] = "NON_TEAMS_KILL_SWITCH",
            e[e.PERSIST_CODE_TRACKER = 108] = "PERSIST_CODE_TRACKER",
            e[e.RUN_RESEARCH_STATE_PROVIDER = 110] = "RUN_RESEARCH_STATE_PROVIDER",
            e[e.API_SERVER_LIVENESS_PROBE = 112] = "API_SERVER_LIVENESS_PROBE",
            e[e.IMPLICIT_PLAN = 113] = "IMPLICIT_PLAN",
            e[e.CHAT_COMPLETION_TOKENS_SOFT_LIMIT = 114] = "CHAT_COMPLETION_TOKENS_SOFT_LIMIT",
            e[e.CHAT_TOKENS_SOFT_LIMIT = 115] = "CHAT_TOKENS_SOFT_LIMIT",
            e[e.MQUERY_SCORER_WITH_FALLBACK = 117] = "MQUERY_SCORER_WITH_FALLBACK",
            e[e.DISABLE_COMPLETIONS_CACHE = 118] = "DISABLE_COMPLETIONS_CACHE",
            e[e.LLAMA3_405B_KILL_SWITCH = 119] = "LLAMA3_405B_KILL_SWITCH",
            e[e.USE_IMPLICIT_TRAJECTORY = 120] = "USE_IMPLICIT_TRAJECTORY",
            e[e.USE_COMMAND_DOCSTRING_GENERATION = 121] = "USE_COMMAND_DOCSTRING_GENERATION",
            e[e.JETBRAINS_USE_COMMAND_DOCSTRING_GENERATION = 122] = "JETBRAINS_USE_COMMAND_DOCSTRING_GENERATION",
            e[e.ENABLE_SUPERCOMPLETE = 123] = "ENABLE_SUPERCOMPLETE",
            e[e.JETBRAINS_ENABLE_AUTOUPDATE = 124] = "JETBRAINS_ENABLE_AUTOUPDATE",
            e[e.SENTRY = 136] = "SENTRY",
            e[e.DISABLE_INFERENCE_API_SERVER = 139] = "DISABLE_INFERENCE_API_SERVER",
            e[e.FAST_SINGLELINE = 144] = "FAST_SINGLELINE",
            e[e.R2_LANGUAGE_SERVER_DOWNLOAD = 147] = "R2_LANGUAGE_SERVER_DOWNLOAD",
            e[e.SPLIT_MODEL = 152] = "SPLIT_MODEL",
            e[e.PIN_RECENT_FILES = 153] = "PIN_RECENT_FILES",
            e[e.COMMIT_GRAPH = 164] = "COMMIT_GRAPH",
            e[e.WINDSURF_SENTRY_SAMPLE_RATE = 198] = "WINDSURF_SENTRY_SAMPLE_RATE",
            e[e.MODEL_15133_VARIANTS = 199] = "MODEL_15133_VARIANTS",
            e[e.MODEL_14602_TOKENS = 142] = "MODEL_14602_TOKENS",
            e[e.MODEL_15133_TOKENS = 173] = "MODEL_15133_TOKENS",
            e[e.MODEL_15302_TOKENS = 174] = "MODEL_15302_TOKENS",
            e[e.MODEL_15335_TOKENS = 175] = "MODEL_15335_TOKENS",
            e[e.MODEL_15931_TOKENS = 180] = "MODEL_15931_TOKENS",
            e[e.MODEL_CHAT_15729_TOKENS = 186] = "MODEL_CHAT_15729_TOKENS",
            e[e.MODEL_CHAT_16579_TOKENS = 195] = "MODEL_CHAT_16579_TOKENS",
            e[e.MODEL_CHAT_16579_CRUSOE_TOKENS = 196] = "MODEL_CHAT_16579_CRUSOE_TOKENS",
            e[e.MODEL_CHAT_18805_TOKENS = 235] = "MODEL_CHAT_18805_TOKENS",
            e[e.MODEL_CHAT_19040_TOKENS = 257] = "MODEL_CHAT_19040_TOKENS",
            e[e.MODEL_CHAT_19820_TOKENS = 280] = "MODEL_CHAT_19820_TOKENS",
            e[e.MODEL_CHAT_19821_TOKENS = 281] = "MODEL_CHAT_19821_TOKENS",
            e[e.MODEL_CHAT_19822_TOKENS = 282] = "MODEL_CHAT_19822_TOKENS",
            e[e.MODEL_CHAT_15305_TOKENS = 167] = "MODEL_CHAT_15305_TOKENS",
            e[e.MODEL_CHAT_15600_TOKENS = 229] = "MODEL_CHAT_15600_TOKENS",
            e[e.MODEL_CHAT_16801_TOKENS = 230] = "MODEL_CHAT_16801_TOKENS",
            e[e.MODEL_CHAT_18468_TOKENS = 277] = "MODEL_CHAT_18468_TOKENS",
            e[e.MODEL_CHAT_19484_TOKENS = 291] = "MODEL_CHAT_19484_TOKENS",
            e[e.MODEL_CHAT_20706_TOKENS = 302] = "MODEL_CHAT_20706_TOKENS",
            e[e.API_SERVER_CUTOFF = 158] = "API_SERVER_CUTOFF",
            e[e.FAST_SPEED_KILL_SWITCH = 159] = "FAST_SPEED_KILL_SWITCH",
            e[e.PREDICTIVE_MULTILINE = 160] = "PREDICTIVE_MULTILINE",
            e[e.SUPERCOMPLETE_FILTER_REVERT = 125] = "SUPERCOMPLETE_FILTER_REVERT",
            e[e.SUPERCOMPLETE_FILTER_PREFIX_MATCH = 126] = "SUPERCOMPLETE_FILTER_PREFIX_MATCH",
            e[e.SUPERCOMPLETE_FILTER_SCORE_THRESHOLD = 127] = "SUPERCOMPLETE_FILTER_SCORE_THRESHOLD",
            e[e.SUPERCOMPLETE_FILTER_INSERTION_CAP = 128] = "SUPERCOMPLETE_FILTER_INSERTION_CAP",
            e[e.SUPERCOMPLETE_FILTER_DELETION_CAP = 133] = "SUPERCOMPLETE_FILTER_DELETION_CAP",
            e[e.SUPERCOMPLETE_FILTER_WHITESPACE_ONLY = 156] = "SUPERCOMPLETE_FILTER_WHITESPACE_ONLY",
            e[e.SUPERCOMPLETE_FILTER_NO_OP = 170] = "SUPERCOMPLETE_FILTER_NO_OP",
            e[e.SUPERCOMPLETE_FILTER_SUFFIX_MATCH = 176] = "SUPERCOMPLETE_FILTER_SUFFIX_MATCH",
            e[e.SUPERCOMPLETE_FILTER_PREVIOUSLY_SHOWN = 182] = "SUPERCOMPLETE_FILTER_PREVIOUSLY_SHOWN",
            e[e.SUPERCOMPLETE_MIN_SCORE = 129] = "SUPERCOMPLETE_MIN_SCORE",
            e[e.SUPERCOMPLETE_MAX_INSERTIONS = 130] = "SUPERCOMPLETE_MAX_INSERTIONS",
            e[e.SUPERCOMPLETE_LINE_RADIUS = 131] = "SUPERCOMPLETE_LINE_RADIUS",
            e[e.SUPERCOMPLETE_MAX_DELETIONS = 132] = "SUPERCOMPLETE_MAX_DELETIONS",
            e[e.SUPERCOMPLETE_USE_CURRENT_LINE = 135] = "SUPERCOMPLETE_USE_CURRENT_LINE",
            e[e.SUPERCOMPLETE_RECENT_STEPS_DURATION = 138] = "SUPERCOMPLETE_RECENT_STEPS_DURATION",
            e[e.SUPERCOMPLETE_USE_CODE_DIAGNOSTICS = 143] = "SUPERCOMPLETE_USE_CODE_DIAGNOSTICS",
            e[e.SUPERCOMPLETE_DIAGNOSTIC_SEVERITY_THRESHOLD = 223] = "SUPERCOMPLETE_DIAGNOSTIC_SEVERITY_THRESHOLD",
            e[e.SUPERCOMPLETE_CODE_DIAGNOSTICS_TOP_K = 232] = "SUPERCOMPLETE_CODE_DIAGNOSTICS_TOP_K",
            e[e.SUPERCOMPLETE_MAX_TRAJECTORY_STEPS = 154] = "SUPERCOMPLETE_MAX_TRAJECTORY_STEPS",
            e[e.SUPERCOMPLETE_ON_ACCEPT_ONLY = 157] = "SUPERCOMPLETE_ON_ACCEPT_ONLY",
            e[e.SUPERCOMPLETE_TEMPERATURE = 183] = "SUPERCOMPLETE_TEMPERATURE",
            e[e.SUPERCOMPLETE_MAX_TRAJECTORY_STEP_SIZE = 203] = "SUPERCOMPLETE_MAX_TRAJECTORY_STEP_SIZE",
            e[e.SUPERCOMPLETE_DISABLE_TYPING_CACHE = 231] = "SUPERCOMPLETE_DISABLE_TYPING_CACHE",
            e[e.SUPERCOMPLETE_ALWAYS_USE_CACHE_ON_EQUAL_STATE = 293] = "SUPERCOMPLETE_ALWAYS_USE_CACHE_ON_EQUAL_STATE",
            e[e.SUPERCOMPLETE_CACHE_ON_PARENT_ID_KILL_SWITCH = 297] = "SUPERCOMPLETE_CACHE_ON_PARENT_ID_KILL_SWITCH",
            e[e.SUPERCOMPLETE_PRUNE_RESPONSE = 140] = "SUPERCOMPLETE_PRUNE_RESPONSE",
            e[e.SUPERCOMPLETE_PRUNE_MAX_INSERT_DELETE_LINE_DELTA = 141] = "SUPERCOMPLETE_PRUNE_MAX_INSERT_DELETE_LINE_DELTA",
            e[e.SUPERCOMPLETE_MODEL_CONFIG = 145] = "SUPERCOMPLETE_MODEL_CONFIG",
            e[e.SUPERCOMPLETE_ON_TAB = 151] = "SUPERCOMPLETE_ON_TAB",
            e[e.SUPERCOMPLETE_INLINE_PURE_DELETE = 171] = "SUPERCOMPLETE_INLINE_PURE_DELETE",
            e[e.SUPERCOMPLETE_INLINE_RICH_GHOST_TEXT_INSERTIONS = 218] = "SUPERCOMPLETE_INLINE_RICH_GHOST_TEXT_INSERTIONS",
            e[e.MODEL_CHAT_15305_VARIANTS = 267] = "MODEL_CHAT_15305_VARIANTS",
            e[e.SUPERCOMPLETE_MAX_CONCURRENT_REQUESTS = 284] = "SUPERCOMPLETE_MAX_CONCURRENT_REQUESTS",
            e[e.COMMAND_PROMPT_CACHE_CONFIG = 255] = "COMMAND_PROMPT_CACHE_CONFIG",
            e[e.CUMULATIVE_PROMPT_CONFIG = 256] = "CUMULATIVE_PROMPT_CONFIG",
            e[e.CUMULATIVE_PROMPT_CASCADE_CONFIG = 279] = "CUMULATIVE_PROMPT_CASCADE_CONFIG",
            e[e.TAB_JUMP_CUMULATIVE_PROMPT_CONFIG = 301] = "TAB_JUMP_CUMULATIVE_PROMPT_CONFIG",
            e[e.COMPLETION_SPEED_SUPERCOMPLETE_RETENTION = 206] = "COMPLETION_SPEED_SUPERCOMPLETE_RETENTION",
            e[e.COMPLETION_SPEED_SUPERCOMPLETE_CACHE = 207] = "COMPLETION_SPEED_SUPERCOMPLETE_CACHE",
            e[e.COMPLETION_SPEED_PREDICTIVE_SUPERCOMPLETE = 208] = "COMPLETION_SPEED_PREDICTIVE_SUPERCOMPLETE",
            e[e.COMPLETION_SPEED_TAB_JUMP_CACHE = 209] = "COMPLETION_SPEED_TAB_JUMP_CACHE",
            e[e.COMPLETION_SPEED_PREDICTIVE_TAB_JUMP = 210] = "COMPLETION_SPEED_PREDICTIVE_TAB_JUMP",
            e[e.COMPLETION_SPEED_BLOCK_TAB_JUMP_ON_PREDICTIVE_SUPERCOMPLETE = 294] = "COMPLETION_SPEED_BLOCK_TAB_JUMP_ON_PREDICTIVE_SUPERCOMPLETE",
            e[e.JETBRAINS_USE_LEXICAL_EDITOR = 134] = "JETBRAINS_USE_LEXICAL_EDITOR",
            e[e.JETBRAINS_ENABLE_ONBOARDING = 137] = "JETBRAINS_ENABLE_ONBOARDING",
            e[e.ENABLE_AUTOCOMPLETE_DURING_INTELLISENSE = 146] = "ENABLE_AUTOCOMPLETE_DURING_INTELLISENSE",
            e[e.COMMAND_BOX_ON_TOP = 155] = "COMMAND_BOX_ON_TOP",
            e[e.CONTEXT_DOCUMENT_OUTLINE = 148] = "CONTEXT_DOCUMENT_OUTLINE",
            e[e.CONTEXT_ACTIVE_DOCUMENT_FRACTION = 149] = "CONTEXT_ACTIVE_DOCUMENT_FRACTION",
            e[e.CONTEXT_COMMAND_TRAJECTORY_PROMPT_CONFIG = 150] = "CONTEXT_COMMAND_TRAJECTORY_PROMPT_CONFIG",
            e[e.CONTEXT_FORCE_LOCAL_CONTEXT = 178] = "CONTEXT_FORCE_LOCAL_CONTEXT",
            e[e.CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF = 220] = "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF",
            e[e.MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT_VARIANTS = 295] = "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT_VARIANTS",
            e[e.USE_GCP_API_SERVER_FOR_PREMIUM_CHAT = 161] = "USE_GCP_API_SERVER_FOR_PREMIUM_CHAT",
            e[e.KNOWLEDGE_BASE_PROMPT_FRACTION = 162] = "KNOWLEDGE_BASE_PROMPT_FRACTION",
            e[e.USE_AUTOCOMPLETE_MODEL_SERVER_SIDE = 163] = "USE_AUTOCOMPLETE_MODEL_SERVER_SIDE",
            e[e.SUPERCOMPLETE_NO_CONTEXT = 165] = "SUPERCOMPLETE_NO_CONTEXT",
            e[e.SUPERCOMPLETE_NO_ACTIVE_NODE = 166] = "SUPERCOMPLETE_NO_ACTIVE_NODE",
            e[e.TAB_JUMP_ENABLED = 168] = "TAB_JUMP_ENABLED",
            e[e.TAB_JUMP_ACCEPT_ENABLED = 169] = "TAB_JUMP_ACCEPT_ENABLED",
            e[e.TAB_JUMP_LINE_RADIUS = 177] = "TAB_JUMP_LINE_RADIUS",
            e[e.TAB_JUMP_MIN_FILTER_RADIUS = 197] = "TAB_JUMP_MIN_FILTER_RADIUS",
            e[e.TAB_JUMP_ON_ACCEPT_ONLY = 205] = "TAB_JUMP_ON_ACCEPT_ONLY",
            e[e.TAB_JUMP_FILTER_IN_SELECTION = 215] = "TAB_JUMP_FILTER_IN_SELECTION",
            e[e.TAB_JUMP_MODEL_CONFIG = 237] = "TAB_JUMP_MODEL_CONFIG",
            e[e.TAB_JUMP_FILTER_NO_OP = 238] = "TAB_JUMP_FILTER_NO_OP",
            e[e.TAB_JUMP_FILTER_REVERT = 239] = "TAB_JUMP_FILTER_REVERT",
            e[e.TAB_JUMP_FILTER_SCORE_THRESHOLD = 240] = "TAB_JUMP_FILTER_SCORE_THRESHOLD",
            e[e.TAB_JUMP_FILTER_WHITESPACE_ONLY = 241] = "TAB_JUMP_FILTER_WHITESPACE_ONLY",
            e[e.TAB_JUMP_FILTER_INSERTION_CAP = 242] = "TAB_JUMP_FILTER_INSERTION_CAP",
            e[e.TAB_JUMP_FILTER_DELETION_CAP = 243] = "TAB_JUMP_FILTER_DELETION_CAP",
            e[e.TAB_JUMP_PRUNE_RESPONSE = 260] = "TAB_JUMP_PRUNE_RESPONSE",
            e[e.TAB_JUMP_PRUNE_MAX_INSERT_DELETE_LINE_DELTA = 261] = "TAB_JUMP_PRUNE_MAX_INSERT_DELETE_LINE_DELTA",
            e[e.VIEWED_FILE_TRACKER_CONFIG = 211] = "VIEWED_FILE_TRACKER_CONFIG",
            e[e.SNAPSHOT_TO_STEP_OPTIONS_OVERRIDE = 305] = "SNAPSHOT_TO_STEP_OPTIONS_OVERRIDE",
            e[e.STREAMING_EXTERNAL_COMMAND = 172] = "STREAMING_EXTERNAL_COMMAND",
            e[e.USE_SPECIAL_EDIT_CODE_BLOCK = 179] = "USE_SPECIAL_EDIT_CODE_BLOCK",
            e[e.ENABLE_BACKGROUND_RESEARCH = 184] = "ENABLE_BACKGROUND_RESEARCH",
            e[e.ENABLE_SUGGESTED_RESPONSES = 187] = "ENABLE_SUGGESTED_RESPONSES",
            e[e.ENABLE_RUN_COMMAND = 188] = "ENABLE_RUN_COMMAND",
            e[e.ENABLE_SHELL_COMMAND_TRAJECTORY = 189] = "ENABLE_SHELL_COMMAND_TRAJECTORY",
            e[e.CASCADE_BASE_MODEL_ID = 190] = "CASCADE_BASE_MODEL_ID",
            e[e.CASCADE_PLAN_BASED_CONFIG_OVERRIDE = 266] = "CASCADE_PLAN_BASED_CONFIG_OVERRIDE",
            e[e.CASCADE_GLOBAL_CONFIG_OVERRIDE = 212] = "CASCADE_GLOBAL_CONFIG_OVERRIDE",
            e[e.CASCADE_BACKGROUND_RESEARCH_CONFIG_OVERRIDE = 193] = "CASCADE_BACKGROUND_RESEARCH_CONFIG_OVERRIDE",
            e[e.CASCADE_ENFORCE_QUOTA = 204] = "CASCADE_ENFORCE_QUOTA",
            e[e.CASCADE_ENABLE_IDE_TERMINAL_EXECUTION = 217] = "CASCADE_ENABLE_IDE_TERMINAL_EXECUTION",
            e[e.CASCADE_ENABLE_AUTOMATED_MEMORIES = 224] = "CASCADE_ENABLE_AUTOMATED_MEMORIES",
            e[e.CASCADE_USE_REPLACE_CONTENT_EDIT_TOOL = 228] = "CASCADE_USE_REPLACE_CONTENT_EDIT_TOOL",
            e[e.CASCADE_VIEW_FILE_TOOL_CONFIG_OVERRIDE = 258] = "CASCADE_VIEW_FILE_TOOL_CONFIG_OVERRIDE",
            e[e.CASCADE_USE_EXPERIMENT_CHECKPOINTER = 247] = "CASCADE_USE_EXPERIMENT_CHECKPOINTER",
            e[e.CASCADE_ENABLE_CUSTOM_RECIPES = 236] = "CASCADE_ENABLE_CUSTOM_RECIPES",
            e[e.CASCADE_ENABLE_MCP_TOOLS = 245] = "CASCADE_ENABLE_MCP_TOOLS",
            e[e.CASCADE_MODEL_CREDIT_MULTIPLIER = 248] = "CASCADE_MODEL_CREDIT_MULTIPLIER",
            e[e.CASCADE_AUTO_FIX_LINTS = 275] = "CASCADE_AUTO_FIX_LINTS",
            e[e.USE_ANTHROPIC_TOKEN_EFFICIENT_TOOLS_BETA = 296] = "USE_ANTHROPIC_TOKEN_EFFICIENT_TOOLS_BETA",
            e[e.CASCADE_USER_MEMORIES_IN_SYS_PROMPT = 289] = "CASCADE_USER_MEMORIES_IN_SYS_PROMPT",
            e[e.CASCADE_ENABLE_PROXY_WEB_SERVER = 290] = "CASCADE_ENABLE_PROXY_WEB_SERVER",
            e[e.CASCADE_WEB_SEARCH_ENABLED = 221] = "CASCADE_WEB_SEARCH_ENABLED",
            e[e.ENABLE_SMART_COPY = 181] = "ENABLE_SMART_COPY",
            e[e.ENABLE_COMMIT_MESSAGE_GENERATION = 185] = "ENABLE_COMMIT_MESSAGE_GENERATION",
            e[e.SKIP_CONSISTENCY_MANAGER = 194] = "SKIP_CONSISTENCY_MANAGER",
            e[e.USE_OPENAI_OFFICIAL_CLIENT = 274] = "USE_OPENAI_OFFICIAL_CLIENT",
            e[e.FIREWORKS_ON_DEMAND_DEPLOYMENT = 276] = "FIREWORKS_ON_DEMAND_DEPLOYMENT",
            e[e.API_SERVER_CLIENT_USE_HTTP_2 = 202] = "API_SERVER_CLIENT_USE_HTTP_2",
            e[e.AUTOCOMPLETE_DEFAULT_DEBOUNCE_MS = 213] = "AUTOCOMPLETE_DEFAULT_DEBOUNCE_MS",
            e[e.AUTOCOMPLETE_FAST_DEBOUNCE_MS = 214] = "AUTOCOMPLETE_FAST_DEBOUNCE_MS",
            e[e.PROFILING_TELEMETRY_SAMPLE_RATE = 219] = "PROFILING_TELEMETRY_SAMPLE_RATE",
            e[e.STREAM_USER_SHELL_COMMANDS = 225] = "STREAM_USER_SHELL_COMMANDS",
            e[e.CASCADE_FILE_OVERVIEW_POPOVER_USE_IDE_STATE = 227] = "CASCADE_FILE_OVERVIEW_POPOVER_USE_IDE_STATE",
            e[e.CASCADE_USE_EVERGREEN_TOOLBAR = 244] = "CASCADE_USE_EVERGREEN_TOOLBAR",
            e[e.API_SERVER_ENABLE_MORE_LOGGING = 272] = "API_SERVER_ENABLE_MORE_LOGGING",
            e[e.COMMAND_INJECT_USER_MEMORIES = 233] = "COMMAND_INJECT_USER_MEMORIES",
            e[e.AUTOCOMPLETE_HIDDEN_ERROR_REGEX = 234] = "AUTOCOMPLETE_HIDDEN_ERROR_REGEX",
            e[e.DISABLE_IDE_COMPLETIONS_DEBOUNCE = 278] = "DISABLE_IDE_COMPLETIONS_DEBOUNCE",
            e[e.COMPLETIONS_USE_COMBINED_MODEL = 249] = "COMPLETIONS_USE_COMBINED_MODEL",
            e[e.COMBINED_MODEL_USE_FULL_INSTRUCTION_FOR_RETRIEVAL = 264] = "COMBINED_MODEL_USE_FULL_INSTRUCTION_FOR_RETRIEVAL",
            e[e.MAX_PAST_TRAJECTORY_TOKENS_FOR_RETRIEVAL = 265] = "MAX_PAST_TRAJECTORY_TOKENS_FOR_RETRIEVAL",
            e[e.ENABLE_QUICK_ACTIONS = 250] = "ENABLE_QUICK_ACTIONS",
            e[e.QUICK_ACTIONS_WHITELIST_REGEX = 251] = "QUICK_ACTIONS_WHITELIST_REGEX",
            e[e.CASCADE_DEEPSEEK_R1_ACCESS = 252] = "CASCADE_DEEPSEEK_R1_ACCESS",
            e[e.CASCADE_DEEPSEEK_V3_ACCESS = 253] = "CASCADE_DEEPSEEK_V3_ACCESS",
            e[e.CASCADE_OPENAI_O3_MINI_ACCESS = 254] = "CASCADE_OPENAI_O3_MINI_ACCESS",
            e[e.CASCADE_NEW_MODELS_NUX = 259] = "CASCADE_NEW_MODELS_NUX",
            e[e.CASCADE_NEW_WAVE_2_MODELS_NUX = 270] = "CASCADE_NEW_WAVE_2_MODELS_NUX",
            e[e.SUPERCOMPLETE_FAST_DEBOUNCE = 262] = "SUPERCOMPLETE_FAST_DEBOUNCE",
            e[e.SUPERCOMPLETE_REGULAR_DEBOUNCE = 263] = "SUPERCOMPLETE_REGULAR_DEBOUNCE",
            e[e.XML_TOOL_PARSING_MODELS = 268] = "XML_TOOL_PARSING_MODELS",
            e[e.SUPERCOMPLETE_DONT_FILTER_MID_STREAMED = 269] = "SUPERCOMPLETE_DONT_FILTER_MID_STREAMED",
            e[e.COMPLETIONS_CCI_REFRESH_TIMEOUT_MS = 283] = "COMPLETIONS_CCI_REFRESH_TIMEOUT_MS",
            e[e.ANNOYANCE_MANAGER_MAX_NAVIGATION_RENDERS = 285] = "ANNOYANCE_MANAGER_MAX_NAVIGATION_RENDERS",
            e[e.ANNOYANCE_MANAGER_INLINE_PREVENTION_THRESHOLD_MS = 286] = "ANNOYANCE_MANAGER_INLINE_PREVENTION_THRESHOLD_MS",
            e[e.ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_INTENTIONAL_REJECTIONS = 287] = "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_INTENTIONAL_REJECTIONS",
            e[e.ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_AUTO_REJECTIONS = 288] = "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_AUTO_REJECTIONS",
            e[e.USE_CUSTOM_CHARACTER_DIFF = 292] = "USE_CUSTOM_CHARACTER_DIFF",
            e[e.CASCADE_TOOL_CALL_NUX = 299] = "CASCADE_TOOL_CALL_NUX",
            e[e.FORCE_NON_OPTIMIZED_DIFF = 298] = "FORCE_NON_OPTIMIZED_DIFF",
            e[e.CASCADE_WEB_APP_DEPLOYMENTS_ENABLED = 300] = "CASCADE_WEB_APP_DEPLOYMENTS_ENABLED",
            e[e.IMPLICIT_USES_CLIPBOARD = 310] = "IMPLICIT_USES_CLIPBOARD",
            e[e.CASCADE_ADD_TO_IMPLICIT_TRAJECTORY = 306] = "CASCADE_ADD_TO_IMPLICIT_TRAJECTORY",
            e[e.DISABLE_SUPERCOMPLETE_PCW = 303] = "DISABLE_SUPERCOMPLETE_PCW",
            e[e.BLOCK_TAB_ON_SHOWN_AUTOCOMPLETE = 304] = "BLOCK_TAB_ON_SHOWN_AUTOCOMPLETE",
            e[e.CASCADE_WEB_SEARCH_NUX = 311] = "CASCADE_WEB_SEARCH_NUX",
            e[e.ESTIMATE_TOKENIZER_KILL_SWITCH = 313] = "ESTIMATE_TOKENIZER_KILL_SWITCH"
        }(dn || (dn = {})),
        ln.util.setEnumType(dn, "exa.codeium_common_pb.ExperimentKey", [{
            no: 0,
            name: "UNSPECIFIED"
        }, {
            no: 3,
            name: "OTHER_DOCUMENTS"
        }, {
            no: 13,
            name: "ONLY_STOP_EOT"
        }, {
            no: 27,
            name: "INCREASE_MAX_NUM_TOKENS"
        }, {
            no: 35,
            name: "BLOCKING_REFRESH"
        }, {
            no: 36,
            name: "USE_INTERNAL_CHAT_MODEL"
        }, {
            no: 39,
            name: "INCREASE_MAX_NUM_TOKENS_MORE"
        }, {
            no: 44,
            name: "USE_CONTEXT_TOKEN"
        }, {
            no: 47,
            name: "RECORD_FILES"
        }, {
            no: 48,
            name: "NO_SAMPLER_EARLY_STOP"
        }, {
            no: 53,
            name: "CM_MEMORY_TELEMETRY"
        }, {
            no: 54,
            name: "ACTIVITY_CONTEXT_WEIGHT"
        }, {
            no: 55,
            name: "LANGUAGE_SERVER_VERSION"
        }, {
            no: 56,
            name: "LANGUAGE_SERVER_AUTO_RELOAD"
        }, {
            no: 60,
            name: "ONLY_MULTILINE"
        }, {
            no: 61,
            name: "USE_CHAT_MODEL_7984"
        }, {
            no: 62,
            name: "CONTEXT_FOR_NONGENERIC_CHAT"
        }, {
            no: 64,
            name: "USE_AUTOCOMPLETE_MODEL"
        }, {
            no: 68,
            name: "USE_ATTRIBUTION_FOR_INDIVIDUAL_TIER"
        }, {
            no: 73,
            name: "USE_GPT_4_TURBO"
        }, {
            no: 78,
            name: "CHAT_MODEL_CONFIG"
        }, {
            no: 79,
            name: "COMMAND_MODEL_CONFIG"
        }, {
            no: 80,
            name: "MIDDLE_MODE_TOKEN_VARIANT"
        }, {
            no: 81,
            name: "MIN_IDE_VERSION"
        }, {
            no: 84,
            name: "API_SERVER_VERBOSE_ERRORS"
        }, {
            no: 86,
            name: "DEFAULT_ENABLE_SEARCH"
        }, {
            no: 87,
            name: "COLLECT_ONBOARDING_EVENTS"
        }, {
            no: 88,
            name: "COLLECT_EXAMPLE_COMPLETIONS"
        }, {
            no: 89,
            name: "USE_MULTILINE_MODEL"
        }, {
            no: 91,
            name: "OPEN_UNIVERSITY_ON_STARTUP"
        }, {
            no: 92,
            name: "ATTRIBUTION_KILL_SWITCH"
        }, {
            no: 94,
            name: "FAST_MULTILINE"
        }, {
            no: 95,
            name: "SINGLE_COMPLETION"
        }, {
            no: 96,
            name: "STOP_FIRST_NON_WHITESPACE_LINE"
        }, {
            no: 98,
            name: "TEAMS_UPGRADE_FOR_NONGENERIC_CHAT"
        }, {
            no: 99,
            name: "MODEL_8341_VARIANTS"
        }, {
            no: 102,
            name: "CORTEX_CONFIG"
        }, {
            no: 103,
            name: "MODEL_CHAT_11121_VARIANTS"
        }, {
            no: 105,
            name: "INCLUDE_PROMPT_COMPONENTS"
        }, {
            no: 106,
            name: "NON_TEAMS_KILL_SWITCH"
        }, {
            no: 108,
            name: "PERSIST_CODE_TRACKER"
        }, {
            no: 110,
            name: "RUN_RESEARCH_STATE_PROVIDER"
        }, {
            no: 112,
            name: "API_SERVER_LIVENESS_PROBE"
        }, {
            no: 113,
            name: "IMPLICIT_PLAN"
        }, {
            no: 114,
            name: "CHAT_COMPLETION_TOKENS_SOFT_LIMIT"
        }, {
            no: 115,
            name: "CHAT_TOKENS_SOFT_LIMIT"
        }, {
            no: 117,
            name: "MQUERY_SCORER_WITH_FALLBACK"
        }, {
            no: 118,
            name: "DISABLE_COMPLETIONS_CACHE"
        }, {
            no: 119,
            name: "LLAMA3_405B_KILL_SWITCH"
        }, {
            no: 120,
            name: "USE_IMPLICIT_TRAJECTORY"
        }, {
            no: 121,
            name: "USE_COMMAND_DOCSTRING_GENERATION"
        }, {
            no: 122,
            name: "JETBRAINS_USE_COMMAND_DOCSTRING_GENERATION"
        }, {
            no: 123,
            name: "ENABLE_SUPERCOMPLETE"
        }, {
            no: 124,
            name: "JETBRAINS_ENABLE_AUTOUPDATE"
        }, {
            no: 136,
            name: "SENTRY"
        }, {
            no: 139,
            name: "DISABLE_INFERENCE_API_SERVER"
        }, {
            no: 144,
            name: "FAST_SINGLELINE"
        }, {
            no: 147,
            name: "R2_LANGUAGE_SERVER_DOWNLOAD"
        }, {
            no: 152,
            name: "SPLIT_MODEL"
        }, {
            no: 153,
            name: "PIN_RECENT_FILES"
        }, {
            no: 164,
            name: "COMMIT_GRAPH"
        }, {
            no: 198,
            name: "WINDSURF_SENTRY_SAMPLE_RATE"
        }, {
            no: 199,
            name: "MODEL_15133_VARIANTS"
        }, {
            no: 142,
            name: "MODEL_14602_TOKENS"
        }, {
            no: 173,
            name: "MODEL_15133_TOKENS"
        }, {
            no: 174,
            name: "MODEL_15302_TOKENS"
        }, {
            no: 175,
            name: "MODEL_15335_TOKENS"
        }, {
            no: 180,
            name: "MODEL_15931_TOKENS"
        }, {
            no: 186,
            name: "MODEL_CHAT_15729_TOKENS"
        }, {
            no: 195,
            name: "MODEL_CHAT_16579_TOKENS"
        }, {
            no: 196,
            name: "MODEL_CHAT_16579_CRUSOE_TOKENS"
        }, {
            no: 235,
            name: "MODEL_CHAT_18805_TOKENS"
        }, {
            no: 257,
            name: "MODEL_CHAT_19040_TOKENS"
        }, {
            no: 280,
            name: "MODEL_CHAT_19820_TOKENS"
        }, {
            no: 281,
            name: "MODEL_CHAT_19821_TOKENS"
        }, {
            no: 282,
            name: "MODEL_CHAT_19822_TOKENS"
        }, {
            no: 167,
            name: "MODEL_CHAT_15305_TOKENS"
        }, {
            no: 229,
            name: "MODEL_CHAT_15600_TOKENS"
        }, {
            no: 230,
            name: "MODEL_CHAT_16801_TOKENS"
        }, {
            no: 277,
            name: "MODEL_CHAT_18468_TOKENS"
        }, {
            no: 291,
            name: "MODEL_CHAT_19484_TOKENS"
        }, {
            no: 302,
            name: "MODEL_CHAT_20706_TOKENS"
        }, {
            no: 158,
            name: "API_SERVER_CUTOFF"
        }, {
            no: 159,
            name: "FAST_SPEED_KILL_SWITCH"
        }, {
            no: 160,
            name: "PREDICTIVE_MULTILINE"
        }, {
            no: 125,
            name: "SUPERCOMPLETE_FILTER_REVERT"
        }, {
            no: 126,
            name: "SUPERCOMPLETE_FILTER_PREFIX_MATCH"
        }, {
            no: 127,
            name: "SUPERCOMPLETE_FILTER_SCORE_THRESHOLD"
        }, {
            no: 128,
            name: "SUPERCOMPLETE_FILTER_INSERTION_CAP"
        }, {
            no: 133,
            name: "SUPERCOMPLETE_FILTER_DELETION_CAP"
        }, {
            no: 156,
            name: "SUPERCOMPLETE_FILTER_WHITESPACE_ONLY"
        }, {
            no: 170,
            name: "SUPERCOMPLETE_FILTER_NO_OP"
        }, {
            no: 176,
            name: "SUPERCOMPLETE_FILTER_SUFFIX_MATCH"
        }, {
            no: 182,
            name: "SUPERCOMPLETE_FILTER_PREVIOUSLY_SHOWN"
        }, {
            no: 129,
            name: "SUPERCOMPLETE_MIN_SCORE"
        }, {
            no: 130,
            name: "SUPERCOMPLETE_MAX_INSERTIONS"
        }, {
            no: 131,
            name: "SUPERCOMPLETE_LINE_RADIUS"
        }, {
            no: 132,
            name: "SUPERCOMPLETE_MAX_DELETIONS"
        }, {
            no: 135,
            name: "SUPERCOMPLETE_USE_CURRENT_LINE"
        }, {
            no: 138,
            name: "SUPERCOMPLETE_RECENT_STEPS_DURATION"
        }, {
            no: 143,
            name: "SUPERCOMPLETE_USE_CODE_DIAGNOSTICS"
        }, {
            no: 223,
            name: "SUPERCOMPLETE_DIAGNOSTIC_SEVERITY_THRESHOLD"
        }, {
            no: 232,
            name: "SUPERCOMPLETE_CODE_DIAGNOSTICS_TOP_K"
        }, {
            no: 154,
            name: "SUPERCOMPLETE_MAX_TRAJECTORY_STEPS"
        }, {
            no: 157,
            name: "SUPERCOMPLETE_ON_ACCEPT_ONLY"
        }, {
            no: 183,
            name: "SUPERCOMPLETE_TEMPERATURE"
        }, {
            no: 203,
            name: "SUPERCOMPLETE_MAX_TRAJECTORY_STEP_SIZE"
        }, {
            no: 231,
            name: "SUPERCOMPLETE_DISABLE_TYPING_CACHE"
        }, {
            no: 293,
            name: "SUPERCOMPLETE_ALWAYS_USE_CACHE_ON_EQUAL_STATE"
        }, {
            no: 297,
            name: "SUPERCOMPLETE_CACHE_ON_PARENT_ID_KILL_SWITCH"
        }, {
            no: 140,
            name: "SUPERCOMPLETE_PRUNE_RESPONSE"
        }, {
            no: 141,
            name: "SUPERCOMPLETE_PRUNE_MAX_INSERT_DELETE_LINE_DELTA"
        }, {
            no: 145,
            name: "SUPERCOMPLETE_MODEL_CONFIG"
        }, {
            no: 151,
            name: "SUPERCOMPLETE_ON_TAB"
        }, {
            no: 171,
            name: "SUPERCOMPLETE_INLINE_PURE_DELETE"
        }, {
            no: 218,
            name: "SUPERCOMPLETE_INLINE_RICH_GHOST_TEXT_INSERTIONS"
        }, {
            no: 267,
            name: "MODEL_CHAT_15305_VARIANTS"
        }, {
            no: 284,
            name: "SUPERCOMPLETE_MAX_CONCURRENT_REQUESTS"
        }, {
            no: 255,
            name: "COMMAND_PROMPT_CACHE_CONFIG"
        }, {
            no: 256,
            name: "CUMULATIVE_PROMPT_CONFIG"
        }, {
            no: 279,
            name: "CUMULATIVE_PROMPT_CASCADE_CONFIG"
        }, {
            no: 301,
            name: "TAB_JUMP_CUMULATIVE_PROMPT_CONFIG"
        }, {
            no: 206,
            name: "COMPLETION_SPEED_SUPERCOMPLETE_RETENTION"
        }, {
            no: 207,
            name: "COMPLETION_SPEED_SUPERCOMPLETE_CACHE"
        }, {
            no: 208,
            name: "COMPLETION_SPEED_PREDICTIVE_SUPERCOMPLETE"
        }, {
            no: 209,
            name: "COMPLETION_SPEED_TAB_JUMP_CACHE"
        }, {
            no: 210,
            name: "COMPLETION_SPEED_PREDICTIVE_TAB_JUMP"
        }, {
            no: 294,
            name: "COMPLETION_SPEED_BLOCK_TAB_JUMP_ON_PREDICTIVE_SUPERCOMPLETE"
        }, {
            no: 134,
            name: "JETBRAINS_USE_LEXICAL_EDITOR"
        }, {
            no: 137,
            name: "JETBRAINS_ENABLE_ONBOARDING"
        }, {
            no: 146,
            name: "ENABLE_AUTOCOMPLETE_DURING_INTELLISENSE"
        }, {
            no: 155,
            name: "COMMAND_BOX_ON_TOP"
        }, {
            no: 148,
            name: "CONTEXT_DOCUMENT_OUTLINE"
        }, {
            no: 149,
            name: "CONTEXT_ACTIVE_DOCUMENT_FRACTION"
        }, {
            no: 150,
            name: "CONTEXT_COMMAND_TRAJECTORY_PROMPT_CONFIG"
        }, {
            no: 178,
            name: "CONTEXT_FORCE_LOCAL_CONTEXT"
        }, {
            no: 220,
            name: "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF"
        }, {
            no: 295,
            name: "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT_VARIANTS"
        }, {
            no: 161,
            name: "USE_GCP_API_SERVER_FOR_PREMIUM_CHAT"
        }, {
            no: 162,
            name: "KNOWLEDGE_BASE_PROMPT_FRACTION"
        }, {
            no: 163,
            name: "USE_AUTOCOMPLETE_MODEL_SERVER_SIDE"
        }, {
            no: 165,
            name: "SUPERCOMPLETE_NO_CONTEXT"
        }, {
            no: 166,
            name: "SUPERCOMPLETE_NO_ACTIVE_NODE"
        }, {
            no: 168,
            name: "TAB_JUMP_ENABLED"
        }, {
            no: 169,
            name: "TAB_JUMP_ACCEPT_ENABLED"
        }, {
            no: 177,
            name: "TAB_JUMP_LINE_RADIUS"
        }, {
            no: 197,
            name: "TAB_JUMP_MIN_FILTER_RADIUS"
        }, {
            no: 205,
            name: "TAB_JUMP_ON_ACCEPT_ONLY"
        }, {
            no: 215,
            name: "TAB_JUMP_FILTER_IN_SELECTION"
        }, {
            no: 237,
            name: "TAB_JUMP_MODEL_CONFIG"
        }, {
            no: 238,
            name: "TAB_JUMP_FILTER_NO_OP"
        }, {
            no: 239,
            name: "TAB_JUMP_FILTER_REVERT"
        }, {
            no: 240,
            name: "TAB_JUMP_FILTER_SCORE_THRESHOLD"
        }, {
            no: 241,
            name: "TAB_JUMP_FILTER_WHITESPACE_ONLY"
        }, {
            no: 242,
            name: "TAB_JUMP_FILTER_INSERTION_CAP"
        }, {
            no: 243,
            name: "TAB_JUMP_FILTER_DELETION_CAP"
        }, {
            no: 260,
            name: "TAB_JUMP_PRUNE_RESPONSE"
        }, {
            no: 261,
            name: "TAB_JUMP_PRUNE_MAX_INSERT_DELETE_LINE_DELTA"
        }, {
            no: 211,
            name: "VIEWED_FILE_TRACKER_CONFIG"
        }, {
            no: 305,
            name: "SNAPSHOT_TO_STEP_OPTIONS_OVERRIDE"
        }, {
            no: 172,
            name: "STREAMING_EXTERNAL_COMMAND"
        }, {
            no: 179,
            name: "USE_SPECIAL_EDIT_CODE_BLOCK"
        }, {
            no: 184,
            name: "ENABLE_BACKGROUND_RESEARCH"
        }, {
            no: 187,
            name: "ENABLE_SUGGESTED_RESPONSES"
        }, {
            no: 188,
            name: "ENABLE_RUN_COMMAND"
        }, {
            no: 189,
            name: "ENABLE_SHELL_COMMAND_TRAJECTORY"
        }, {
            no: 190,
            name: "CASCADE_BASE_MODEL_ID"
        }, {
            no: 266,
            name: "CASCADE_PLAN_BASED_CONFIG_OVERRIDE"
        }, {
            no: 212,
            name: "CASCADE_GLOBAL_CONFIG_OVERRIDE"
        }, {
            no: 193,
            name: "CASCADE_BACKGROUND_RESEARCH_CONFIG_OVERRIDE"
        }, {
            no: 204,
            name: "CASCADE_ENFORCE_QUOTA"
        }, {
            no: 217,
            name: "CASCADE_ENABLE_IDE_TERMINAL_EXECUTION"
        }, {
            no: 224,
            name: "CASCADE_ENABLE_AUTOMATED_MEMORIES"
        }, {
            no: 228,
            name: "CASCADE_USE_REPLACE_CONTENT_EDIT_TOOL"
        }, {
            no: 258,
            name: "CASCADE_VIEW_FILE_TOOL_CONFIG_OVERRIDE"
        }, {
            no: 247,
            name: "CASCADE_USE_EXPERIMENT_CHECKPOINTER"
        }, {
            no: 236,
            name: "CASCADE_ENABLE_CUSTOM_RECIPES"
        }, {
            no: 245,
            name: "CASCADE_ENABLE_MCP_TOOLS"
        }, {
            no: 248,
            name: "CASCADE_MODEL_CREDIT_MULTIPLIER"
        }, {
            no: 275,
            name: "CASCADE_AUTO_FIX_LINTS"
        }, {
            no: 296,
            name: "USE_ANTHROPIC_TOKEN_EFFICIENT_TOOLS_BETA"
        }, {
            no: 289,
            name: "CASCADE_USER_MEMORIES_IN_SYS_PROMPT"
        }, {
            no: 290,
            name: "CASCADE_ENABLE_PROXY_WEB_SERVER"
        }, {
            no: 221,
            name: "CASCADE_WEB_SEARCH_ENABLED"
        }, {
            no: 181,
            name: "ENABLE_SMART_COPY"
        }, {
            no: 185,
            name: "ENABLE_COMMIT_MESSAGE_GENERATION"
        }, {
            no: 194,
            name: "SKIP_CONSISTENCY_MANAGER"
        }, {
            no: 274,
            name: "USE_OPENAI_OFFICIAL_CLIENT"
        }, {
            no: 276,
            name: "FIREWORKS_ON_DEMAND_DEPLOYMENT"
        }, {
            no: 202,
            name: "API_SERVER_CLIENT_USE_HTTP_2"
        }, {
            no: 213,
            name: "AUTOCOMPLETE_DEFAULT_DEBOUNCE_MS"
        }, {
            no: 214,
            name: "AUTOCOMPLETE_FAST_DEBOUNCE_MS"
        }, {
            no: 219,
            name: "PROFILING_TELEMETRY_SAMPLE_RATE"
        }, {
            no: 225,
            name: "STREAM_USER_SHELL_COMMANDS"
        }, {
            no: 227,
            name: "CASCADE_FILE_OVERVIEW_POPOVER_USE_IDE_STATE"
        }, {
            no: 244,
            name: "CASCADE_USE_EVERGREEN_TOOLBAR"
        }, {
            no: 272,
            name: "API_SERVER_ENABLE_MORE_LOGGING"
        }, {
            no: 233,
            name: "COMMAND_INJECT_USER_MEMORIES"
        }, {
            no: 234,
            name: "AUTOCOMPLETE_HIDDEN_ERROR_REGEX"
        }, {
            no: 278,
            name: "DISABLE_IDE_COMPLETIONS_DEBOUNCE"
        }, {
            no: 249,
            name: "COMPLETIONS_USE_COMBINED_MODEL"
        }, {
            no: 264,
            name: "COMBINED_MODEL_USE_FULL_INSTRUCTION_FOR_RETRIEVAL"
        }, {
            no: 265,
            name: "MAX_PAST_TRAJECTORY_TOKENS_FOR_RETRIEVAL"
        }, {
            no: 250,
            name: "ENABLE_QUICK_ACTIONS"
        }, {
            no: 251,
            name: "QUICK_ACTIONS_WHITELIST_REGEX"
        }, {
            no: 252,
            name: "CASCADE_DEEPSEEK_R1_ACCESS"
        }, {
            no: 253,
            name: "CASCADE_DEEPSEEK_V3_ACCESS"
        }, {
            no: 254,
            name: "CASCADE_OPENAI_O3_MINI_ACCESS"
        }, {
            no: 259,
            name: "CASCADE_NEW_MODELS_NUX"
        }, {
            no: 270,
            name: "CASCADE_NEW_WAVE_2_MODELS_NUX"
        }, {
            no: 262,
            name: "SUPERCOMPLETE_FAST_DEBOUNCE"
        }, {
            no: 263,
            name: "SUPERCOMPLETE_REGULAR_DEBOUNCE"
        }, {
            no: 268,
            name: "XML_TOOL_PARSING_MODELS"
        }, {
            no: 269,
            name: "SUPERCOMPLETE_DONT_FILTER_MID_STREAMED"
        }, {
            no: 283,
            name: "COMPLETIONS_CCI_REFRESH_TIMEOUT_MS"
        }, {
            no: 285,
            name: "ANNOYANCE_MANAGER_MAX_NAVIGATION_RENDERS"
        }, {
            no: 286,
            name: "ANNOYANCE_MANAGER_INLINE_PREVENTION_THRESHOLD_MS"
        }, {
            no: 287,
            name: "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_INTENTIONAL_REJECTIONS"
        }, {
            no: 288,
            name: "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_AUTO_REJECTIONS"
        }, {
            no: 292,
            name: "USE_CUSTOM_CHARACTER_DIFF"
        }, {
            no: 299,
            name: "CASCADE_TOOL_CALL_NUX"
        }, {
            no: 298,
            name: "FORCE_NON_OPTIMIZED_DIFF"
        }, {
            no: 300,
            name: "CASCADE_WEB_APP_DEPLOYMENTS_ENABLED"
        }, {
            no: 310,
            name: "IMPLICIT_USES_CLIPBOARD"
        }, {
            no: 306,
            name: "CASCADE_ADD_TO_IMPLICIT_TRAJECTORY"
        }, {
            no: 303,
            name: "DISABLE_SUPERCOMPLETE_PCW"
        }, {
            no: 304,
            name: "BLOCK_TAB_ON_SHOWN_AUTOCOMPLETE"
        }, {
            no: 311,
            name: "CASCADE_WEB_SEARCH_NUX"
        }, {
            no: 313,
            name: "ESTIMATE_TOKENIZER_KILL_SWITCH"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.EXTENSION = 1] = "EXTENSION",
            e[e.LANGUAGE_SERVER = 2] = "LANGUAGE_SERVER",
            e[e.API_SERVER = 3] = "API_SERVER"
        }(fn || (fn = {})),
        ln.util.setEnumType(fn, "exa.codeium_common_pb.ExperimentSource", [{
            no: 0,
            name: "EXPERIMENT_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "EXPERIMENT_SOURCE_EXTENSION"
        }, {
            no: 2,
            name: "EXPERIMENT_SOURCE_LANGUAGE_SERVER"
        }, {
            no: 3,
            name: "EXPERIMENT_SOURCE_API_SERVER"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.CASCADE_BASE = 1] = "CASCADE_BASE"
        }(Tn || (Tn = {})),
        ln.util.setEnumType(Tn, "exa.codeium_common_pb.ModelAlias", [{
            no: 0,
            name: "MODEL_ALIAS_UNSPECIFIED"
        }, {
            no: 1,
            name: "MODEL_ALIAS_CASCADE_BASE"
        }]),
        function(e) {
            e[e.MODEL_UNSPECIFIED = 0] = "MODEL_UNSPECIFIED",
            e[e.MODEL_EMBED_6591 = 20] = "MODEL_EMBED_6591",
            e[e.MODEL_8341 = 33] = "MODEL_8341",
            e[e.MODEL_8528 = 42] = "MODEL_8528",
            e[e.MODEL_9024 = 41] = "MODEL_9024",
            e[e.MODEL_14602 = 112] = "MODEL_14602",
            e[e.MODEL_15133 = 115] = "MODEL_15133",
            e[e.MODEL_15302 = 119] = "MODEL_15302",
            e[e.MODEL_15335 = 121] = "MODEL_15335",
            e[e.MODEL_15336 = 122] = "MODEL_15336",
            e[e.MODEL_15931 = 167] = "MODEL_15931",
            e[e.MODEL_QUERY_9905 = 48] = "MODEL_QUERY_9905",
            e[e.MODEL_QUERY_11791 = 66] = "MODEL_QUERY_11791",
            e[e.MODEL_CHAT_11120 = 57] = "MODEL_CHAT_11120",
            e[e.MODEL_CHAT_11121 = 58] = "MODEL_CHAT_11121",
            e[e.MODEL_CHAT_12119 = 70] = "MODEL_CHAT_12119",
            e[e.MODEL_CHAT_12121 = 69] = "MODEL_CHAT_12121",
            e[e.MODEL_CHAT_12437 = 74] = "MODEL_CHAT_12437",
            e[e.MODEL_CHAT_12491 = 76] = "MODEL_CHAT_12491",
            e[e.MODEL_CHAT_12623 = 78] = "MODEL_CHAT_12623",
            e[e.MODEL_CHAT_12950 = 79] = "MODEL_CHAT_12950",
            e[e.MODEL_CHAT_12968 = 101] = "MODEL_CHAT_12968",
            e[e.MODEL_CHAT_13404 = 102] = "MODEL_CHAT_13404",
            e[e.MODEL_CHAT_13566 = 103] = "MODEL_CHAT_13566",
            e[e.MODEL_CHAT_13930 = 108] = "MODEL_CHAT_13930",
            e[e.MODEL_CHAT_14255 = 110] = "MODEL_CHAT_14255",
            e[e.MODEL_CHAT_14256 = 111] = "MODEL_CHAT_14256",
            e[e.MODEL_CHAT_14942 = 114] = "MODEL_CHAT_14942",
            e[e.MODEL_CHAT_15305 = 120] = "MODEL_CHAT_15305",
            e[e.MODEL_CHAT_15600 = 123] = "MODEL_CHAT_15600",
            e[e.MODEL_CHAT_16801 = 124] = "MODEL_CHAT_16801",
            e[e.MODEL_CHAT_16718 = 175] = "MODEL_CHAT_16718",
            e[e.MODEL_CHAT_15729 = 168] = "MODEL_CHAT_15729",
            e[e.MODEL_CHAT_16579 = 173] = "MODEL_CHAT_16579",
            e[e.MODEL_CHAT_16579_CRUSOE = 174] = "MODEL_CHAT_16579_CRUSOE",
            e[e.MODEL_CHAT_18805 = 181] = "MODEL_CHAT_18805",
            e[e.MODEL_CHAT_18468 = 210] = "MODEL_CHAT_18468",
            e[e.MODEL_CHAT_19484 = 233] = "MODEL_CHAT_19484",
            e[e.MODEL_CHAT_20706 = 235] = "MODEL_CHAT_20706",
            e[e.MODEL_CHAT_19040 = 211] = "MODEL_CHAT_19040",
            e[e.MODEL_CHAT_19820 = 229] = "MODEL_CHAT_19820",
            e[e.MODEL_CHAT_19821 = 230] = "MODEL_CHAT_19821",
            e[e.MODEL_CHAT_19822 = 231] = "MODEL_CHAT_19822",
            e[e.MODEL_CASCADE_20064 = 225] = "MODEL_CASCADE_20064",
            e[e.MODEL_CASCADE_20065 = 236] = "MODEL_CASCADE_20065",
            e[e.MODEL_CASCADE_20066 = 237] = "MODEL_CASCADE_20066",
            e[e.MODEL_CASCADE_20067 = 238] = "MODEL_CASCADE_20067",
            e[e.MODEL_CASCADE_20068 = 239] = "MODEL_CASCADE_20068",
            e[e.MODEL_CASCADE_20069 = 240] = "MODEL_CASCADE_20069",
            e[e.MODEL_DRAFT_11408 = 65] = "MODEL_DRAFT_11408",
            e[e.MODEL_DRAFT_CHAT_11883 = 67] = "MODEL_DRAFT_CHAT_11883",
            e[e.MODEL_DRAFT_CHAT_12196 = 72] = "MODEL_DRAFT_CHAT_12196",
            e[e.MODEL_DRAFT_CHAT_12413 = 73] = "MODEL_DRAFT_CHAT_12413",
            e[e.MODEL_DRAFT_CHAT_13175 = 104] = "MODEL_DRAFT_CHAT_13175",
            e[e.MODEL_DRAFT_CHAT_19823 = 232] = "MODEL_DRAFT_CHAT_19823",
            e[e.MODEL_CHAT_3_5_TURBO = 28] = "MODEL_CHAT_3_5_TURBO",
            e[e.MODEL_CHAT_GPT_4 = 30] = "MODEL_CHAT_GPT_4",
            e[e.MODEL_CHAT_GPT_4_1106_PREVIEW = 37] = "MODEL_CHAT_GPT_4_1106_PREVIEW",
            e[e.MODEL_TEXT_EMBEDDING_OPENAI_ADA = 91] = "MODEL_TEXT_EMBEDDING_OPENAI_ADA",
            e[e.MODEL_TEXT_EMBEDDING_OPENAI_3_SMALL = 163] = "MODEL_TEXT_EMBEDDING_OPENAI_3_SMALL",
            e[e.MODEL_TEXT_EMBEDDING_OPENAI_3_LARGE = 164] = "MODEL_TEXT_EMBEDDING_OPENAI_3_LARGE",
            e[e.MODEL_CHAT_GPT_4O_2024_05_13 = 71] = "MODEL_CHAT_GPT_4O_2024_05_13",
            e[e.MODEL_CHAT_GPT_4O_2024_08_06 = 109] = "MODEL_CHAT_GPT_4O_2024_08_06",
            e[e.MODEL_CHAT_GPT_4O_MINI_2024_07_18 = 113] = "MODEL_CHAT_GPT_4O_MINI_2024_07_18",
            e[e.MODEL_CHAT_O1_PREVIEW = 117] = "MODEL_CHAT_O1_PREVIEW",
            e[e.MODEL_CHAT_O1_MINI = 118] = "MODEL_CHAT_O1_MINI",
            e[e.MODEL_CHAT_O1 = 170] = "MODEL_CHAT_O1",
            e[e.MODEL_CHAT_O3_MINI = 207] = "MODEL_CHAT_O3_MINI",
            e[e.MODEL_CHAT_O3_MINI_LOW = 213] = "MODEL_CHAT_O3_MINI_LOW",
            e[e.MODEL_CHAT_O3_MINI_HIGH = 214] = "MODEL_CHAT_O3_MINI_HIGH",
            e[e.MODEL_CHAT_O3 = 218] = "MODEL_CHAT_O3",
            e[e.MODEL_CHAT_GPT_4_5 = 228] = "MODEL_CHAT_GPT_4_5",
            e[e.MODEL_GOOGLE_GEMINI_1_0_PRO = 61] = "MODEL_GOOGLE_GEMINI_1_0_PRO",
            e[e.MODEL_GOOGLE_GEMINI_1_5_PRO = 62] = "MODEL_GOOGLE_GEMINI_1_5_PRO",
            e[e.MODEL_GOOGLE_GEMINI_EXP_1206 = 183] = "MODEL_GOOGLE_GEMINI_EXP_1206",
            e[e.MODEL_GOOGLE_GEMINI_2_0_FLASH = 184] = "MODEL_GOOGLE_GEMINI_2_0_FLASH",
            e[e.MODEL_CLAUDE_3_OPUS_20240229 = 63] = "MODEL_CLAUDE_3_OPUS_20240229",
            e[e.MODEL_CLAUDE_3_SONNET_20240229 = 64] = "MODEL_CLAUDE_3_SONNET_20240229",
            e[e.MODEL_CLAUDE_3_5_SONNET_20240620 = 80] = "MODEL_CLAUDE_3_5_SONNET_20240620",
            e[e.MODEL_CLAUDE_3_5_SONNET_20241022 = 166] = "MODEL_CLAUDE_3_5_SONNET_20241022",
            e[e.MODEL_CLAUDE_3_5_HAIKU_20241022 = 171] = "MODEL_CLAUDE_3_5_HAIKU_20241022",
            e[e.MODEL_CLAUDE_3_HAIKU_20240307 = 172] = "MODEL_CLAUDE_3_HAIKU_20240307",
            e[e.MODEL_CLAUDE_3_7_SONNET_20250219 = 226] = "MODEL_CLAUDE_3_7_SONNET_20250219",
            e[e.MODEL_CLAUDE_3_7_SONNET_20250219_THINKING = 227] = "MODEL_CLAUDE_3_7_SONNET_20250219_THINKING",
            e[e.MODEL_TOGETHERAI_TEXT_EMBEDDING_M2_BERT = 81] = "MODEL_TOGETHERAI_TEXT_EMBEDDING_M2_BERT",
            e[e.MODEL_TOGETHERAI_LLAMA_3_1_8B_INSTRUCT = 165] = "MODEL_TOGETHERAI_LLAMA_3_1_8B_INSTRUCT",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_M2_BERT = 82] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_M2_BERT",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_UAE_CODE = 83] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_UAE_CODE",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_BGE = 84] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BGE",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_BLADE = 85] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BLADE",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_ARCTIC_LARGE = 86] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_ARCTIC_LARGE",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_E5_BASE = 87] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_E5_BASE",
            e[e.MODEL_HUGGING_FACE_TEXT_EMBEDDING_MXBAI = 88] = "MODEL_HUGGING_FACE_TEXT_EMBEDDING_MXBAI",
            e[e.MODEL_LLAMA_3_1_8B_INSTRUCT = 106] = "MODEL_LLAMA_3_1_8B_INSTRUCT",
            e[e.MODEL_LLAMA_3_1_70B_INSTRUCT = 107] = "MODEL_LLAMA_3_1_70B_INSTRUCT",
            e[e.MODEL_LLAMA_3_1_405B_INSTRUCT = 105] = "MODEL_LLAMA_3_1_405B_INSTRUCT",
            e[e.MODEL_LLAMA_3_3_70B_INSTRUCT = 208] = "MODEL_LLAMA_3_3_70B_INSTRUCT",
            e[e.MODEL_LLAMA_3_3_70B_INSTRUCT_R1 = 209] = "MODEL_LLAMA_3_3_70B_INSTRUCT_R1",
            e[e.MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT = 116] = "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT",
            e[e.MODEL_LLAMA_3_1_8B_HERMES_3 = 176] = "MODEL_LLAMA_3_1_8B_HERMES_3",
            e[e.MODEL_LLAMA_3_1_70B_HERMES_3 = 177] = "MODEL_LLAMA_3_1_70B_HERMES_3",
            e[e.MODEL_QWEN_2_5_7B_INSTRUCT = 178] = "MODEL_QWEN_2_5_7B_INSTRUCT",
            e[e.MODEL_QWEN_2_5_32B_INSTRUCT = 179] = "MODEL_QWEN_2_5_32B_INSTRUCT",
            e[e.MODEL_QWEN_2_5_72B_INSTRUCT = 180] = "MODEL_QWEN_2_5_72B_INSTRUCT",
            e[e.MODEL_QWEN_2_5_32B_INSTRUCT_R1 = 224] = "MODEL_QWEN_2_5_32B_INSTRUCT_R1",
            e[e.MODEL_NOMIC_TEXT_EMBEDDING_V1 = 89] = "MODEL_NOMIC_TEXT_EMBEDDING_V1",
            e[e.MODEL_NOMIC_TEXT_EMBEDDING_V1_5 = 90] = "MODEL_NOMIC_TEXT_EMBEDDING_V1_5",
            e[e.MODEL_MISTRAL_7B = 77] = "MODEL_MISTRAL_7B",
            e[e.MODEL_SALESFORCE_EMBEDDING_2R = 99] = "MODEL_SALESFORCE_EMBEDDING_2R",
            e[e.MODEL_CUSTOM_VLLM = 182] = "MODEL_CUSTOM_VLLM",
            e[e.MODEL_TEI_BGE_M3 = 92] = "MODEL_TEI_BGE_M3",
            e[e.MODEL_TEI_NOMIC_EMBED_TEXT_V1 = 93] = "MODEL_TEI_NOMIC_EMBED_TEXT_V1",
            e[e.MODEL_TEI_INTFLOAT_E5_LARGE_INSTRUCT = 94] = "MODEL_TEI_INTFLOAT_E5_LARGE_INSTRUCT",
            e[e.MODEL_TEI_SNOWFLAKE_ARCTIC_EMBED_L = 95] = "MODEL_TEI_SNOWFLAKE_ARCTIC_EMBED_L",
            e[e.MODEL_TEI_UAE_CODE_LARGE_V1 = 96] = "MODEL_TEI_UAE_CODE_LARGE_V1",
            e[e.MODEL_TEI_B1ADE = 97] = "MODEL_TEI_B1ADE",
            e[e.MODEL_TEI_WHEREISAI_UAE_LARGE_V1 = 98] = "MODEL_TEI_WHEREISAI_UAE_LARGE_V1",
            e[e.MODEL_TEI_WHEREISAI_UAE_CODE_LARGE_V1 = 100] = "MODEL_TEI_WHEREISAI_UAE_CODE_LARGE_V1",
            e[e.MODEL_OPENAI_COMPATIBLE = 200] = "MODEL_OPENAI_COMPATIBLE",
            e[e.MODEL_ANTHROPIC_COMPATIBLE = 201] = "MODEL_ANTHROPIC_COMPATIBLE",
            e[e.MODEL_VERTEX_COMPATIBLE = 202] = "MODEL_VERTEX_COMPATIBLE",
            e[e.MODEL_BEDROCK_COMPATIBLE = 203] = "MODEL_BEDROCK_COMPATIBLE",
            e[e.MODEL_AZURE_COMPATIBLE = 204] = "MODEL_AZURE_COMPATIBLE",
            e[e.MODEL_DEEPSEEK_V3 = 205] = "MODEL_DEEPSEEK_V3",
            e[e.MODEL_DEEPSEEK_R1 = 206] = "MODEL_DEEPSEEK_R1",
            e[e.MODEL_DEEPSEEK_R1_SLOW = 215] = "MODEL_DEEPSEEK_R1_SLOW",
            e[e.MODEL_DEEPSEEK_R1_FAST = 216] = "MODEL_DEEPSEEK_R1_FAST",
            e[e.MODEL_CUSTOM_OPEN_ROUTER = 185] = "MODEL_CUSTOM_OPEN_ROUTER",
            e[e.MODEL_XAI_GROK_2 = 212] = "MODEL_XAI_GROK_2",
            e[e.MODEL_XAI_GROK_3 = 217] = "MODEL_XAI_GROK_3",
            e[e.MODEL_XAI_GROK_3_MINI_REASONING = 234] = "MODEL_XAI_GROK_3_MINI_REASONING",
            e[e.MODEL_PRIVATE_1 = 219] = "MODEL_PRIVATE_1",
            e[e.MODEL_PRIVATE_2 = 220] = "MODEL_PRIVATE_2",
            e[e.MODEL_PRIVATE_3 = 221] = "MODEL_PRIVATE_3",
            e[e.MODEL_PRIVATE_4 = 222] = "MODEL_PRIVATE_4",
            e[e.MODEL_PRIVATE_5 = 223] = "MODEL_PRIVATE_5"
        }(pn || (pn = {})),
        ln.util.setEnumType(pn, "exa.codeium_common_pb.Model", [{
            no: 0,
            name: "MODEL_UNSPECIFIED"
        }, {
            no: 20,
            name: "MODEL_EMBED_6591"
        }, {
            no: 33,
            name: "MODEL_8341"
        }, {
            no: 42,
            name: "MODEL_8528"
        }, {
            no: 41,
            name: "MODEL_9024"
        }, {
            no: 112,
            name: "MODEL_14602"
        }, {
            no: 115,
            name: "MODEL_15133"
        }, {
            no: 119,
            name: "MODEL_15302"
        }, {
            no: 121,
            name: "MODEL_15335"
        }, {
            no: 122,
            name: "MODEL_15336"
        }, {
            no: 167,
            name: "MODEL_15931"
        }, {
            no: 48,
            name: "MODEL_QUERY_9905"
        }, {
            no: 66,
            name: "MODEL_QUERY_11791"
        }, {
            no: 57,
            name: "MODEL_CHAT_11120"
        }, {
            no: 58,
            name: "MODEL_CHAT_11121"
        }, {
            no: 70,
            name: "MODEL_CHAT_12119"
        }, {
            no: 69,
            name: "MODEL_CHAT_12121"
        }, {
            no: 74,
            name: "MODEL_CHAT_12437"
        }, {
            no: 76,
            name: "MODEL_CHAT_12491"
        }, {
            no: 78,
            name: "MODEL_CHAT_12623"
        }, {
            no: 79,
            name: "MODEL_CHAT_12950"
        }, {
            no: 101,
            name: "MODEL_CHAT_12968"
        }, {
            no: 102,
            name: "MODEL_CHAT_13404"
        }, {
            no: 103,
            name: "MODEL_CHAT_13566"
        }, {
            no: 108,
            name: "MODEL_CHAT_13930"
        }, {
            no: 110,
            name: "MODEL_CHAT_14255"
        }, {
            no: 111,
            name: "MODEL_CHAT_14256"
        }, {
            no: 114,
            name: "MODEL_CHAT_14942"
        }, {
            no: 120,
            name: "MODEL_CHAT_15305"
        }, {
            no: 123,
            name: "MODEL_CHAT_15600"
        }, {
            no: 124,
            name: "MODEL_CHAT_16801"
        }, {
            no: 175,
            name: "MODEL_CHAT_16718"
        }, {
            no: 168,
            name: "MODEL_CHAT_15729"
        }, {
            no: 173,
            name: "MODEL_CHAT_16579"
        }, {
            no: 174,
            name: "MODEL_CHAT_16579_CRUSOE"
        }, {
            no: 181,
            name: "MODEL_CHAT_18805"
        }, {
            no: 210,
            name: "MODEL_CHAT_18468"
        }, {
            no: 233,
            name: "MODEL_CHAT_19484"
        }, {
            no: 235,
            name: "MODEL_CHAT_20706"
        }, {
            no: 211,
            name: "MODEL_CHAT_19040"
        }, {
            no: 229,
            name: "MODEL_CHAT_19820"
        }, {
            no: 230,
            name: "MODEL_CHAT_19821"
        }, {
            no: 231,
            name: "MODEL_CHAT_19822"
        }, {
            no: 225,
            name: "MODEL_CASCADE_20064"
        }, {
            no: 236,
            name: "MODEL_CASCADE_20065"
        }, {
            no: 237,
            name: "MODEL_CASCADE_20066"
        }, {
            no: 238,
            name: "MODEL_CASCADE_20067"
        }, {
            no: 239,
            name: "MODEL_CASCADE_20068"
        }, {
            no: 240,
            name: "MODEL_CASCADE_20069"
        }, {
            no: 65,
            name: "MODEL_DRAFT_11408"
        }, {
            no: 67,
            name: "MODEL_DRAFT_CHAT_11883"
        }, {
            no: 72,
            name: "MODEL_DRAFT_CHAT_12196"
        }, {
            no: 73,
            name: "MODEL_DRAFT_CHAT_12413"
        }, {
            no: 104,
            name: "MODEL_DRAFT_CHAT_13175"
        }, {
            no: 232,
            name: "MODEL_DRAFT_CHAT_19823"
        }, {
            no: 28,
            name: "MODEL_CHAT_3_5_TURBO"
        }, {
            no: 30,
            name: "MODEL_CHAT_GPT_4"
        }, {
            no: 37,
            name: "MODEL_CHAT_GPT_4_1106_PREVIEW"
        }, {
            no: 91,
            name: "MODEL_TEXT_EMBEDDING_OPENAI_ADA"
        }, {
            no: 163,
            name: "MODEL_TEXT_EMBEDDING_OPENAI_3_SMALL"
        }, {
            no: 164,
            name: "MODEL_TEXT_EMBEDDING_OPENAI_3_LARGE"
        }, {
            no: 71,
            name: "MODEL_CHAT_GPT_4O_2024_05_13"
        }, {
            no: 109,
            name: "MODEL_CHAT_GPT_4O_2024_08_06"
        }, {
            no: 113,
            name: "MODEL_CHAT_GPT_4O_MINI_2024_07_18"
        }, {
            no: 117,
            name: "MODEL_CHAT_O1_PREVIEW"
        }, {
            no: 118,
            name: "MODEL_CHAT_O1_MINI"
        }, {
            no: 170,
            name: "MODEL_CHAT_O1"
        }, {
            no: 207,
            name: "MODEL_CHAT_O3_MINI"
        }, {
            no: 213,
            name: "MODEL_CHAT_O3_MINI_LOW"
        }, {
            no: 214,
            name: "MODEL_CHAT_O3_MINI_HIGH"
        }, {
            no: 218,
            name: "MODEL_CHAT_O3"
        }, {
            no: 228,
            name: "MODEL_CHAT_GPT_4_5"
        }, {
            no: 61,
            name: "MODEL_GOOGLE_GEMINI_1_0_PRO"
        }, {
            no: 62,
            name: "MODEL_GOOGLE_GEMINI_1_5_PRO"
        }, {
            no: 183,
            name: "MODEL_GOOGLE_GEMINI_EXP_1206"
        }, {
            no: 184,
            name: "MODEL_GOOGLE_GEMINI_2_0_FLASH"
        }, {
            no: 63,
            name: "MODEL_CLAUDE_3_OPUS_20240229"
        }, {
            no: 64,
            name: "MODEL_CLAUDE_3_SONNET_20240229"
        }, {
            no: 80,
            name: "MODEL_CLAUDE_3_5_SONNET_20240620"
        }, {
            no: 166,
            name: "MODEL_CLAUDE_3_5_SONNET_20241022"
        }, {
            no: 171,
            name: "MODEL_CLAUDE_3_5_HAIKU_20241022"
        }, {
            no: 172,
            name: "MODEL_CLAUDE_3_HAIKU_20240307"
        }, {
            no: 226,
            name: "MODEL_CLAUDE_3_7_SONNET_20250219"
        }, {
            no: 227,
            name: "MODEL_CLAUDE_3_7_SONNET_20250219_THINKING"
        }, {
            no: 81,
            name: "MODEL_TOGETHERAI_TEXT_EMBEDDING_M2_BERT"
        }, {
            no: 165,
            name: "MODEL_TOGETHERAI_LLAMA_3_1_8B_INSTRUCT"
        }, {
            no: 82,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_M2_BERT"
        }, {
            no: 83,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_UAE_CODE"
        }, {
            no: 84,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BGE"
        }, {
            no: 85,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BLADE"
        }, {
            no: 86,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_ARCTIC_LARGE"
        }, {
            no: 87,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_E5_BASE"
        }, {
            no: 88,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_MXBAI"
        }, {
            no: 106,
            name: "MODEL_LLAMA_3_1_8B_INSTRUCT"
        }, {
            no: 107,
            name: "MODEL_LLAMA_3_1_70B_INSTRUCT"
        }, {
            no: 105,
            name: "MODEL_LLAMA_3_1_405B_INSTRUCT"
        }, {
            no: 208,
            name: "MODEL_LLAMA_3_3_70B_INSTRUCT"
        }, {
            no: 209,
            name: "MODEL_LLAMA_3_3_70B_INSTRUCT_R1"
        }, {
            no: 116,
            name: "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT"
        }, {
            no: 176,
            name: "MODEL_LLAMA_3_1_8B_HERMES_3"
        }, {
            no: 177,
            name: "MODEL_LLAMA_3_1_70B_HERMES_3"
        }, {
            no: 178,
            name: "MODEL_QWEN_2_5_7B_INSTRUCT"
        }, {
            no: 179,
            name: "MODEL_QWEN_2_5_32B_INSTRUCT"
        }, {
            no: 180,
            name: "MODEL_QWEN_2_5_72B_INSTRUCT"
        }, {
            no: 224,
            name: "MODEL_QWEN_2_5_32B_INSTRUCT_R1"
        }, {
            no: 89,
            name: "MODEL_NOMIC_TEXT_EMBEDDING_V1"
        }, {
            no: 90,
            name: "MODEL_NOMIC_TEXT_EMBEDDING_V1_5"
        }, {
            no: 77,
            name: "MODEL_MISTRAL_7B"
        }, {
            no: 99,
            name: "MODEL_SALESFORCE_EMBEDDING_2R"
        }, {
            no: 182,
            name: "MODEL_CUSTOM_VLLM"
        }, {
            no: 92,
            name: "MODEL_TEI_BGE_M3"
        }, {
            no: 93,
            name: "MODEL_TEI_NOMIC_EMBED_TEXT_V1"
        }, {
            no: 94,
            name: "MODEL_TEI_INTFLOAT_E5_LARGE_INSTRUCT"
        }, {
            no: 95,
            name: "MODEL_TEI_SNOWFLAKE_ARCTIC_EMBED_L"
        }, {
            no: 96,
            name: "MODEL_TEI_UAE_CODE_LARGE_V1"
        }, {
            no: 97,
            name: "MODEL_TEI_B1ADE"
        }, {
            no: 98,
            name: "MODEL_TEI_WHEREISAI_UAE_LARGE_V1"
        }, {
            no: 100,
            name: "MODEL_TEI_WHEREISAI_UAE_CODE_LARGE_V1"
        }, {
            no: 200,
            name: "MODEL_OPENAI_COMPATIBLE"
        }, {
            no: 201,
            name: "MODEL_ANTHROPIC_COMPATIBLE"
        }, {
            no: 202,
            name: "MODEL_VERTEX_COMPATIBLE"
        }, {
            no: 203,
            name: "MODEL_BEDROCK_COMPATIBLE"
        }, {
            no: 204,
            name: "MODEL_AZURE_COMPATIBLE"
        }, {
            no: 205,
            name: "MODEL_DEEPSEEK_V3"
        }, {
            no: 206,
            name: "MODEL_DEEPSEEK_R1"
        }, {
            no: 215,
            name: "MODEL_DEEPSEEK_R1_SLOW"
        }, {
            no: 216,
            name: "MODEL_DEEPSEEK_R1_FAST"
        }, {
            no: 185,
            name: "MODEL_CUSTOM_OPEN_ROUTER"
        }, {
            no: 212,
            name: "MODEL_XAI_GROK_2"
        }, {
            no: 217,
            name: "MODEL_XAI_GROK_3"
        }, {
            no: 234,
            name: "MODEL_XAI_GROK_3_MINI_REASONING"
        }, {
            no: 219,
            name: "MODEL_PRIVATE_1"
        }, {
            no: 220,
            name: "MODEL_PRIVATE_2"
        }, {
            no: 221,
            name: "MODEL_PRIVATE_3"
        }, {
            no: 222,
            name: "MODEL_PRIVATE_4"
        }, {
            no: 223,
            name: "MODEL_PRIVATE_5"
        }]),
        function(e) {
            e[e.EXCLUSION_UNSPECIFIED = 0] = "EXCLUSION_UNSPECIFIED",
            e[e.EXCLUSION_ELEMENT_KIND_DISABLED = 1] = "EXCLUSION_ELEMENT_KIND_DISABLED",
            e[e.EXCLUSION_ELEMENT_MISSING_DEPENDENCY = 2] = "EXCLUSION_ELEMENT_MISSING_DEPENDENCY",
            e[e.EXCLUSION_TOKEN_BUDGET = 3] = "EXCLUSION_TOKEN_BUDGET",
            e[e.EXCLUSION_ACTIVE_SOURCE_OVERLAP = 4] = "EXCLUSION_ACTIVE_SOURCE_OVERLAP"
        }(Sn || (Sn = {})),
        ln.util.setEnumType(Sn, "exa.codeium_common_pb.PromptElementExclusionReason", [{
            no: 0,
            name: "EXCLUSION_UNSPECIFIED"
        }, {
            no: 1,
            name: "EXCLUSION_ELEMENT_KIND_DISABLED"
        }, {
            no: 2,
            name: "EXCLUSION_ELEMENT_MISSING_DEPENDENCY"
        }, {
            no: 3,
            name: "EXCLUSION_TOKEN_BUDGET"
        }, {
            no: 4,
            name: "EXCLUSION_ACTIVE_SOURCE_OVERLAP"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.INCOMPLETE = 1] = "INCOMPLETE",
            e[e.STOP_PATTERN = 2] = "STOP_PATTERN",
            e[e.MAX_TOKENS = 3] = "MAX_TOKENS",
            e[e.MIN_LOG_PROB = 4] = "MIN_LOG_PROB",
            e[e.MAX_NEWLINES = 5] = "MAX_NEWLINES",
            e[e.EXIT_SCOPE = 6] = "EXIT_SCOPE",
            e[e.NONFINITE_LOGIT_OR_PROB = 7] = "NONFINITE_LOGIT_OR_PROB",
            e[e.FIRST_NON_WHITESPACE_LINE = 8] = "FIRST_NON_WHITESPACE_LINE",
            e[e.PARTIAL = 9] = "PARTIAL",
            e[e.FUNCTION_CALL = 10] = "FUNCTION_CALL",
            e[e.CONTENT_FILTER = 11] = "CONTENT_FILTER",
            e[e.NON_INSERTION = 12] = "NON_INSERTION"
        }(On || (On = {})),
        ln.util.setEnumType(On, "exa.codeium_common_pb.StopReason", [{
            no: 0,
            name: "STOP_REASON_UNSPECIFIED"
        }, {
            no: 1,
            name: "STOP_REASON_INCOMPLETE"
        }, {
            no: 2,
            name: "STOP_REASON_STOP_PATTERN"
        }, {
            no: 3,
            name: "STOP_REASON_MAX_TOKENS"
        }, {
            no: 4,
            name: "STOP_REASON_MIN_LOG_PROB"
        }, {
            no: 5,
            name: "STOP_REASON_MAX_NEWLINES"
        }, {
            no: 6,
            name: "STOP_REASON_EXIT_SCOPE"
        }, {
            no: 7,
            name: "STOP_REASON_NONFINITE_LOGIT_OR_PROB"
        }, {
            no: 8,
            name: "STOP_REASON_FIRST_NON_WHITESPACE_LINE"
        }, {
            no: 9,
            name: "STOP_REASON_PARTIAL"
        }, {
            no: 10,
            name: "STOP_REASON_FUNCTION_CALL"
        }, {
            no: 11,
            name: "STOP_REASON_CONTENT_FILTER"
        }, {
            no: 12,
            name: "STOP_REASON_NON_INSERTION"
        }]),
        function(e) {
            e[e.NONE = 0] = "NONE",
            e[e.INCOMPLETE = 1] = "INCOMPLETE",
            e[e.EMPTY = 2] = "EMPTY",
            e[e.REPETITIVE = 3] = "REPETITIVE",
            e[e.DUPLICATE = 4] = "DUPLICATE",
            e[e.LONG_LINE = 5] = "LONG_LINE",
            e[e.COMPLETIONS_CUTOFF = 6] = "COMPLETIONS_CUTOFF",
            e[e.ATTRIBUTION = 7] = "ATTRIBUTION",
            e[e.NON_MATCHING = 8] = "NON_MATCHING",
            e[e.NON_INSERTION = 9] = "NON_INSERTION"
        }(Nn || (Nn = {})),
        ln.util.setEnumType(Nn, "exa.codeium_common_pb.FilterReason", [{
            no: 0,
            name: "FILTER_REASON_NONE"
        }, {
            no: 1,
            name: "FILTER_REASON_INCOMPLETE"
        }, {
            no: 2,
            name: "FILTER_REASON_EMPTY"
        }, {
            no: 3,
            name: "FILTER_REASON_REPETITIVE"
        }, {
            no: 4,
            name: "FILTER_REASON_DUPLICATE"
        }, {
            no: 5,
            name: "FILTER_REASON_LONG_LINE"
        }, {
            no: 6,
            name: "FILTER_REASON_COMPLETIONS_CUTOFF"
        }, {
            no: 7,
            name: "FILTER_REASON_ATTRIBUTION"
        }, {
            no: 8,
            name: "FILTER_REASON_NON_MATCHING"
        }, {
            no: 9,
            name: "FILTER_REASON_NON_INSERTION"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.NEW_CODE = 1] = "NEW_CODE",
            e[e.NO_LICENSE = 2] = "NO_LICENSE",
            e[e.NONPERMISSIVE = 3] = "NONPERMISSIVE",
            e[e.PERMISSIVE = 4] = "PERMISSIVE",
            e[e.PERMISSIVE_BLOCKED = 5] = "PERMISSIVE_BLOCKED"
        }(Cn || (Cn = {})),
        ln.util.setEnumType(Cn, "exa.codeium_common_pb.AttributionStatus", [{
            no: 0,
            name: "ATTRIBUTION_STATUS_UNSPECIFIED"
        }, {
            no: 1,
            name: "ATTRIBUTION_STATUS_NEW_CODE"
        }, {
            no: 2,
            name: "ATTRIBUTION_STATUS_NO_LICENSE"
        }, {
            no: 3,
            name: "ATTRIBUTION_STATUS_NONPERMISSIVE"
        }, {
            no: 4,
            name: "ATTRIBUTION_STATUS_PERMISSIVE"
        }, {
            no: 5,
            name: "ATTRIBUTION_STATUS_PERMISSIVE_BLOCKED"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.HIGH = 1] = "HIGH",
            e[e.LOW = 2] = "LOW"
        }(An || (An = {})),
        ln.util.setEnumType(An, "exa.codeium_common_pb.EmbeddingPriority", [{
            no: 0,
            name: "EMBEDDING_PRIORITY_UNSPECIFIED"
        }, {
            no: 1,
            name: "EMBEDDING_PRIORITY_HIGH"
        }, {
            no: 2,
            name: "EMBEDDING_PRIORITY_LOW"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.NOMIC_DOCUMENT = 1] = "NOMIC_DOCUMENT",
            e[e.NOMIC_SEARCH = 2] = "NOMIC_SEARCH",
            e[e.NOMIC_CLASSIFICATION = 3] = "NOMIC_CLASSIFICATION",
            e[e.NOMIC_CLUSTERING = 4] = "NOMIC_CLUSTERING"
        }(In || (In = {})),
        ln.util.setEnumType(In, "exa.codeium_common_pb.EmbeddingPrefix", [{
            no: 0,
            name: "EMBEDDING_PREFIX_UNSPECIFIED"
        }, {
            no: 1,
            name: "EMBEDDING_PREFIX_NOMIC_DOCUMENT"
        }, {
            no: 2,
            name: "EMBEDDING_PREFIX_NOMIC_SEARCH"
        }, {
            no: 3,
            name: "EMBEDDING_PREFIX_NOMIC_CLASSIFICATION"
        }, {
            no: 4,
            name: "EMBEDDING_PREFIX_NOMIC_CLUSTERING"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.CODE_CONTEXT_ITEM = 1] = "CODE_CONTEXT_ITEM",
            e[e.COMMIT_INTENT = 2] = "COMMIT_INTENT"
        }(hn || (hn = {})),
        ln.util.setEnumType(hn, "exa.codeium_common_pb.EmbeddingSource", [{
            no: 0,
            name: "EMBEDDING_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "EMBEDDING_SOURCE_CODE_CONTEXT_ITEM"
        }, {
            no: 2,
            name: "EMBEDDING_SOURCE_COMMIT_INTENT"
        }]),
        function(e) {
            e[e.CODEIUM = 0] = "CODEIUM",
            e[e.DEEPNOTE = 1] = "DEEPNOTE",
            e[e.CODESANDBOX = 2] = "CODESANDBOX",
            e[e.STACKBLITZ = 3] = "STACKBLITZ",
            e[e.VALTOWN = 4] = "VALTOWN",
            e[e.HEX = 5] = "HEX",
            e[e.ZAPIER = 6] = "ZAPIER",
            e[e.SUPERBLOCKS = 7] = "SUPERBLOCKS",
            e[e.EMBARCADERO = 8] = "EMBARCADERO"
        }(Ln || (Ln = {})),
        ln.util.setEnumType(Ln, "exa.codeium_common_pb.AuthSource", [{
            no: 0,
            name: "AUTH_SOURCE_CODEIUM"
        }, {
            no: 1,
            name: "AUTH_SOURCE_DEEPNOTE"
        }, {
            no: 2,
            name: "AUTH_SOURCE_CODESANDBOX"
        }, {
            no: 3,
            name: "AUTH_SOURCE_STACKBLITZ"
        }, {
            no: 4,
            name: "AUTH_SOURCE_VALTOWN"
        }, {
            no: 5,
            name: "AUTH_SOURCE_HEX"
        }, {
            no: 6,
            name: "AUTH_SOURCE_ZAPIER"
        }, {
            no: 7,
            name: "AUTH_SOURCE_SUPERBLOCKS"
        }, {
            no: 8,
            name: "AUTH_SOURCE_EMBARCADERO"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.ENABLE_CODEIUM = 1] = "ENABLE_CODEIUM",
            e[e.DISABLE_CODEIUM = 2] = "DISABLE_CODEIUM",
            e[e.SHOW_PREVIOUS_COMPLETION = 3] = "SHOW_PREVIOUS_COMPLETION",
            e[e.SHOW_NEXT_COMPLETION = 4] = "SHOW_NEXT_COMPLETION",
            e[e.COPILOT_STATUS = 5] = "COPILOT_STATUS",
            e[e.COMPLETION_SUPPRESSED = 6] = "COMPLETION_SUPPRESSED",
            e[e.MEMORY_STATS = 8] = "MEMORY_STATS",
            e[e.LOCAL_CONTEXT_RELEVANCE_CHECK = 9] = "LOCAL_CONTEXT_RELEVANCE_CHECK",
            e[e.ACTIVE_EDITOR_CHANGED = 10] = "ACTIVE_EDITOR_CHANGED",
            e[e.SHOW_PREVIOUS_CORTEX_STEP = 11] = "SHOW_PREVIOUS_CORTEX_STEP",
            e[e.SHOW_NEXT_CORTEX_STEP = 12] = "SHOW_NEXT_CORTEX_STEP",
            e[e.INDEXER_STATS = 13] = "INDEXER_STATS"
        }(Rn || (Rn = {})),
        ln.util.setEnumType(Rn, "exa.codeium_common_pb.EventType", [{
            no: 0,
            name: "EVENT_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "EVENT_TYPE_ENABLE_CODEIUM"
        }, {
            no: 2,
            name: "EVENT_TYPE_DISABLE_CODEIUM"
        }, {
            no: 3,
            name: "EVENT_TYPE_SHOW_PREVIOUS_COMPLETION"
        }, {
            no: 4,
            name: "EVENT_TYPE_SHOW_NEXT_COMPLETION"
        }, {
            no: 5,
            name: "EVENT_TYPE_COPILOT_STATUS"
        }, {
            no: 6,
            name: "EVENT_TYPE_COMPLETION_SUPPRESSED"
        }, {
            no: 8,
            name: "EVENT_TYPE_MEMORY_STATS"
        }, {
            no: 9,
            name: "EVENT_TYPE_LOCAL_CONTEXT_RELEVANCE_CHECK"
        }, {
            no: 10,
            name: "EVENT_TYPE_ACTIVE_EDITOR_CHANGED"
        }, {
            no: 11,
            name: "EVENT_TYPE_SHOW_PREVIOUS_CORTEX_STEP"
        }, {
            no: 12,
            name: "EVENT_TYPE_SHOW_NEXT_CORTEX_STEP"
        }, {
            no: 13,
            name: "EVENT_TYPE_INDEXER_STATS"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.CLUSTER = 1] = "CLUSTER",
            e[e.EXACT = 2] = "EXACT"
        }(gn || (gn = {})),
        ln.util.setEnumType(gn, "exa.codeium_common_pb.SearchResultType", [{
            no: 0,
            name: "SEARCH_RESULT_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "SEARCH_RESULT_TYPE_CLUSTER"
        }, {
            no: 2,
            name: "SEARCH_RESULT_TYPE_EXACT"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.RAW_SOURCE = 1] = "RAW_SOURCE",
            e[e.DOCSTRING = 2] = "DOCSTRING",
            e[e.FUNCTION = 3] = "FUNCTION",
            e[e.NODEPATH = 4] = "NODEPATH",
            e[e.DECLARATION = 5] = "DECLARATION",
            e[e.NAIVE_CHUNK = 6] = "NAIVE_CHUNK",
            e[e.SIGNATURE = 7] = "SIGNATURE"
        }(Pn || (Pn = {})),
        ln.util.setEnumType(Pn, "exa.codeium_common_pb.EmbedType", [{
            no: 0,
            name: "EMBED_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "EMBED_TYPE_RAW_SOURCE"
        }, {
            no: 2,
            name: "EMBED_TYPE_DOCSTRING"
        }, {
            no: 3,
            name: "EMBED_TYPE_FUNCTION"
        }, {
            no: 4,
            name: "EMBED_TYPE_NODEPATH"
        }, {
            no: 5,
            name: "EMBED_TYPE_DECLARATION"
        }, {
            no: 6,
            name: "EMBED_TYPE_NAIVE_CHUNK"
        }, {
            no: 7,
            name: "EMBED_TYPE_SIGNATURE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.TYPING_AS_SUGGESTED = 1] = "TYPING_AS_SUGGESTED",
            e[e.CACHE = 2] = "CACHE",
            e[e.NETWORK = 3] = "NETWORK"
        }(Dn || (Dn = {})),
        ln.util.setEnumType(Dn, "exa.codeium_common_pb.CompletionSource", [{
            no: 0,
            name: "COMPLETION_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "COMPLETION_SOURCE_TYPING_AS_SUGGESTED"
        }, {
            no: 2,
            name: "COMPLETION_SOURCE_CACHE"
        }, {
            no: 3,
            name: "COMPLETION_SOURCE_NETWORK"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.SINGLE = 1] = "SINGLE",
            e[e.MULTI = 2] = "MULTI",
            e[e.INLINE_FIM = 3] = "INLINE_FIM"
        }(Mn || (Mn = {})),
        ln.util.setEnumType(Mn, "exa.codeium_common_pb.CompletionType", [{
            no: 0,
            name: "COMPLETION_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "COMPLETION_TYPE_SINGLE"
        }, {
            no: 2,
            name: "COMPLETION_TYPE_MULTI"
        }, {
            no: 3,
            name: "COMPLETION_TYPE_INLINE_FIM"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.C = 1] = "C",
            e[e.CLOJURE = 2] = "CLOJURE",
            e[e.COFFEESCRIPT = 3] = "COFFEESCRIPT",
            e[e.CPP = 4] = "CPP",
            e[e.CSHARP = 5] = "CSHARP",
            e[e.CSS = 6] = "CSS",
            e[e.CUDACPP = 7] = "CUDACPP",
            e[e.DOCKERFILE = 8] = "DOCKERFILE",
            e[e.GO = 9] = "GO",
            e[e.GROOVY = 10] = "GROOVY",
            e[e.HANDLEBARS = 11] = "HANDLEBARS",
            e[e.HASKELL = 12] = "HASKELL",
            e[e.HCL = 13] = "HCL",
            e[e.HTML = 14] = "HTML",
            e[e.INI = 15] = "INI",
            e[e.JAVA = 16] = "JAVA",
            e[e.JAVASCRIPT = 17] = "JAVASCRIPT",
            e[e.JSON = 18] = "JSON",
            e[e.JULIA = 19] = "JULIA",
            e[e.KOTLIN = 20] = "KOTLIN",
            e[e.LATEX = 21] = "LATEX",
            e[e.LESS = 22] = "LESS",
            e[e.LUA = 23] = "LUA",
            e[e.MAKEFILE = 24] = "MAKEFILE",
            e[e.MARKDOWN = 25] = "MARKDOWN",
            e[e.OBJECTIVEC = 26] = "OBJECTIVEC",
            e[e.OBJECTIVECPP = 27] = "OBJECTIVECPP",
            e[e.PERL = 28] = "PERL",
            e[e.PHP = 29] = "PHP",
            e[e.PLAINTEXT = 30] = "PLAINTEXT",
            e[e.PROTOBUF = 31] = "PROTOBUF",
            e[e.PBTXT = 32] = "PBTXT",
            e[e.PYTHON = 33] = "PYTHON",
            e[e.R = 34] = "R",
            e[e.RUBY = 35] = "RUBY",
            e[e.RUST = 36] = "RUST",
            e[e.SASS = 37] = "SASS",
            e[e.SCALA = 38] = "SCALA",
            e[e.SCSS = 39] = "SCSS",
            e[e.SHELL = 40] = "SHELL",
            e[e.SQL = 41] = "SQL",
            e[e.STARLARK = 42] = "STARLARK",
            e[e.SWIFT = 43] = "SWIFT",
            e[e.TSX = 44] = "TSX",
            e[e.TYPESCRIPT = 45] = "TYPESCRIPT",
            e[e.VISUALBASIC = 46] = "VISUALBASIC",
            e[e.VUE = 47] = "VUE",
            e[e.XML = 48] = "XML",
            e[e.XSL = 49] = "XSL",
            e[e.YAML = 50] = "YAML",
            e[e.SVELTE = 51] = "SVELTE",
            e[e.TOML = 52] = "TOML",
            e[e.DART = 53] = "DART",
            e[e.RST = 54] = "RST",
            e[e.OCAML = 55] = "OCAML",
            e[e.CMAKE = 56] = "CMAKE",
            e[e.PASCAL = 57] = "PASCAL",
            e[e.ELIXIR = 58] = "ELIXIR",
            e[e.FSHARP = 59] = "FSHARP",
            e[e.LISP = 60] = "LISP",
            e[e.MATLAB = 61] = "MATLAB",
            e[e.POWERSHELL = 62] = "POWERSHELL",
            e[e.SOLIDITY = 63] = "SOLIDITY",
            e[e.ADA = 64] = "ADA",
            e[e.OCAML_INTERFACE = 65] = "OCAML_INTERFACE",
            e[e.TREE_SITTER_QUERY = 66] = "TREE_SITTER_QUERY",
            e[e.APL = 67] = "APL",
            e[e.ASSEMBLY = 68] = "ASSEMBLY",
            e[e.COBOL = 69] = "COBOL",
            e[e.CRYSTAL = 70] = "CRYSTAL",
            e[e.EMACS_LISP = 71] = "EMACS_LISP",
            e[e.ERLANG = 72] = "ERLANG",
            e[e.FORTRAN = 73] = "FORTRAN",
            e[e.FREEFORM = 74] = "FREEFORM",
            e[e.GRADLE = 75] = "GRADLE",
            e[e.HACK = 76] = "HACK",
            e[e.MAVEN = 77] = "MAVEN",
            e[e.M68KASSEMBLY = 78] = "M68KASSEMBLY",
            e[e.SAS = 79] = "SAS",
            e[e.UNIXASSEMBLY = 80] = "UNIXASSEMBLY",
            e[e.VBA = 81] = "VBA",
            e[e.VIMSCRIPT = 82] = "VIMSCRIPT",
            e[e.WEBASSEMBLY = 83] = "WEBASSEMBLY",
            e[e.BLADE = 84] = "BLADE",
            e[e.ASTRO = 85] = "ASTRO",
            e[e.MUMPS = 86] = "MUMPS",
            e[e.GDSCRIPT = 87] = "GDSCRIPT",
            e[e.NIM = 88] = "NIM",
            e[e.PROLOG = 89] = "PROLOG",
            e[e.MARKDOWN_INLINE = 90] = "MARKDOWN_INLINE",
            e[e.APEX = 91] = "APEX"
        }(yn || (yn = {})),
        ln.util.setEnumType(yn, "exa.codeium_common_pb.Language", [{
            no: 0,
            name: "LANGUAGE_UNSPECIFIED"
        }, {
            no: 1,
            name: "LANGUAGE_C"
        }, {
            no: 2,
            name: "LANGUAGE_CLOJURE"
        }, {
            no: 3,
            name: "LANGUAGE_COFFEESCRIPT"
        }, {
            no: 4,
            name: "LANGUAGE_CPP"
        }, {
            no: 5,
            name: "LANGUAGE_CSHARP"
        }, {
            no: 6,
            name: "LANGUAGE_CSS"
        }, {
            no: 7,
            name: "LANGUAGE_CUDACPP"
        }, {
            no: 8,
            name: "LANGUAGE_DOCKERFILE"
        }, {
            no: 9,
            name: "LANGUAGE_GO"
        }, {
            no: 10,
            name: "LANGUAGE_GROOVY"
        }, {
            no: 11,
            name: "LANGUAGE_HANDLEBARS"
        }, {
            no: 12,
            name: "LANGUAGE_HASKELL"
        }, {
            no: 13,
            name: "LANGUAGE_HCL"
        }, {
            no: 14,
            name: "LANGUAGE_HTML"
        }, {
            no: 15,
            name: "LANGUAGE_INI"
        }, {
            no: 16,
            name: "LANGUAGE_JAVA"
        }, {
            no: 17,
            name: "LANGUAGE_JAVASCRIPT"
        }, {
            no: 18,
            name: "LANGUAGE_JSON"
        }, {
            no: 19,
            name: "LANGUAGE_JULIA"
        }, {
            no: 20,
            name: "LANGUAGE_KOTLIN"
        }, {
            no: 21,
            name: "LANGUAGE_LATEX"
        }, {
            no: 22,
            name: "LANGUAGE_LESS"
        }, {
            no: 23,
            name: "LANGUAGE_LUA"
        }, {
            no: 24,
            name: "LANGUAGE_MAKEFILE"
        }, {
            no: 25,
            name: "LANGUAGE_MARKDOWN"
        }, {
            no: 26,
            name: "LANGUAGE_OBJECTIVEC"
        }, {
            no: 27,
            name: "LANGUAGE_OBJECTIVECPP"
        }, {
            no: 28,
            name: "LANGUAGE_PERL"
        }, {
            no: 29,
            name: "LANGUAGE_PHP"
        }, {
            no: 30,
            name: "LANGUAGE_PLAINTEXT"
        }, {
            no: 31,
            name: "LANGUAGE_PROTOBUF"
        }, {
            no: 32,
            name: "LANGUAGE_PBTXT"
        }, {
            no: 33,
            name: "LANGUAGE_PYTHON"
        }, {
            no: 34,
            name: "LANGUAGE_R"
        }, {
            no: 35,
            name: "LANGUAGE_RUBY"
        }, {
            no: 36,
            name: "LANGUAGE_RUST"
        }, {
            no: 37,
            name: "LANGUAGE_SASS"
        }, {
            no: 38,
            name: "LANGUAGE_SCALA"
        }, {
            no: 39,
            name: "LANGUAGE_SCSS"
        }, {
            no: 40,
            name: "LANGUAGE_SHELL"
        }, {
            no: 41,
            name: "LANGUAGE_SQL"
        }, {
            no: 42,
            name: "LANGUAGE_STARLARK"
        }, {
            no: 43,
            name: "LANGUAGE_SWIFT"
        }, {
            no: 44,
            name: "LANGUAGE_TSX"
        }, {
            no: 45,
            name: "LANGUAGE_TYPESCRIPT"
        }, {
            no: 46,
            name: "LANGUAGE_VISUALBASIC"
        }, {
            no: 47,
            name: "LANGUAGE_VUE"
        }, {
            no: 48,
            name: "LANGUAGE_XML"
        }, {
            no: 49,
            name: "LANGUAGE_XSL"
        }, {
            no: 50,
            name: "LANGUAGE_YAML"
        }, {
            no: 51,
            name: "LANGUAGE_SVELTE"
        }, {
            no: 52,
            name: "LANGUAGE_TOML"
        }, {
            no: 53,
            name: "LANGUAGE_DART"
        }, {
            no: 54,
            name: "LANGUAGE_RST"
        }, {
            no: 55,
            name: "LANGUAGE_OCAML"
        }, {
            no: 56,
            name: "LANGUAGE_CMAKE"
        }, {
            no: 57,
            name: "LANGUAGE_PASCAL"
        }, {
            no: 58,
            name: "LANGUAGE_ELIXIR"
        }, {
            no: 59,
            name: "LANGUAGE_FSHARP"
        }, {
            no: 60,
            name: "LANGUAGE_LISP"
        }, {
            no: 61,
            name: "LANGUAGE_MATLAB"
        }, {
            no: 62,
            name: "LANGUAGE_POWERSHELL"
        }, {
            no: 63,
            name: "LANGUAGE_SOLIDITY"
        }, {
            no: 64,
            name: "LANGUAGE_ADA"
        }, {
            no: 65,
            name: "LANGUAGE_OCAML_INTERFACE"
        }, {
            no: 66,
            name: "LANGUAGE_TREE_SITTER_QUERY"
        }, {
            no: 67,
            name: "LANGUAGE_APL"
        }, {
            no: 68,
            name: "LANGUAGE_ASSEMBLY"
        }, {
            no: 69,
            name: "LANGUAGE_COBOL"
        }, {
            no: 70,
            name: "LANGUAGE_CRYSTAL"
        }, {
            no: 71,
            name: "LANGUAGE_EMACS_LISP"
        }, {
            no: 72,
            name: "LANGUAGE_ERLANG"
        }, {
            no: 73,
            name: "LANGUAGE_FORTRAN"
        }, {
            no: 74,
            name: "LANGUAGE_FREEFORM"
        }, {
            no: 75,
            name: "LANGUAGE_GRADLE"
        }, {
            no: 76,
            name: "LANGUAGE_HACK"
        }, {
            no: 77,
            name: "LANGUAGE_MAVEN"
        }, {
            no: 78,
            name: "LANGUAGE_M68KASSEMBLY"
        }, {
            no: 79,
            name: "LANGUAGE_SAS"
        }, {
            no: 80,
            name: "LANGUAGE_UNIXASSEMBLY"
        }, {
            no: 81,
            name: "LANGUAGE_VBA"
        }, {
            no: 82,
            name: "LANGUAGE_VIMSCRIPT"
        }, {
            no: 83,
            name: "LANGUAGE_WEBASSEMBLY"
        }, {
            no: 84,
            name: "LANGUAGE_BLADE"
        }, {
            no: 85,
            name: "LANGUAGE_ASTRO"
        }, {
            no: 86,
            name: "LANGUAGE_MUMPS"
        }, {
            no: 87,
            name: "LANGUAGE_GDSCRIPT"
        }, {
            no: 88,
            name: "LANGUAGE_NIM"
        }, {
            no: 89,
            name: "LANGUAGE_PROLOG"
        }, {
            no: 90,
            name: "LANGUAGE_MARKDOWN_INLINE"
        }, {
            no: 91,
            name: "LANGUAGE_APEX"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.USER = 1] = "USER",
            e[e.SYSTEM = 2] = "SYSTEM",
            e[e.UNKNOWN = 3] = "UNKNOWN",
            e[e.TOOL = 4] = "TOOL",
            e[e.SYSTEM_PROMPT = 5] = "SYSTEM_PROMPT"
        }(Un || (Un = {})),
        ln.util.setEnumType(Un, "exa.codeium_common_pb.ChatMessageSource", [{
            no: 0,
            name: "CHAT_MESSAGE_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CHAT_MESSAGE_SOURCE_USER"
        }, {
            no: 2,
            name: "CHAT_MESSAGE_SOURCE_SYSTEM"
        }, {
            no: 3,
            name: "CHAT_MESSAGE_SOURCE_UNKNOWN"
        }, {
            no: 4,
            name: "CHAT_MESSAGE_SOURCE_TOOL"
        }, {
            no: 5,
            name: "CHAT_MESSAGE_SOURCE_SYSTEM_PROMPT"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.PENDING = 1] = "PENDING",
            e[e.APPROVED = 2] = "APPROVED",
            e[e.REJECTED = 3] = "REJECTED"
        }(wn || (wn = {})),
        ln.util.setEnumType(wn, "exa.codeium_common_pb.UserTeamStatus", [{
            no: 0,
            name: "USER_TEAM_STATUS_UNSPECIFIED"
        }, {
            no: 1,
            name: "USER_TEAM_STATUS_PENDING"
        }, {
            no: 2,
            name: "USER_TEAM_STATUS_APPROVED"
        }, {
            no: 3,
            name: "USER_TEAM_STATUS_REJECTED"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.SSO = 1] = "SSO",
            e[e.ATTRIBUTION = 2] = "ATTRIBUTION",
            e[e.PHI = 3] = "PHI",
            e[e.CORTEX = 4] = "CORTEX",
            e[e.OPENAI_DISABLED = 5] = "OPENAI_DISABLED",
            e[e.REMOTE_INDEXING_DISABLED = 6] = "REMOTE_INDEXING_DISABLED",
            e[e.API_KEY_ENABLED = 7] = "API_KEY_ENABLED"
        }(bn || (bn = {})),
        ln.util.setEnumType(bn, "exa.codeium_common_pb.TeamsFeatures", [{
            no: 0,
            name: "TEAMS_FEATURES_UNSPECIFIED"
        }, {
            no: 1,
            name: "TEAMS_FEATURES_SSO"
        }, {
            no: 2,
            name: "TEAMS_FEATURES_ATTRIBUTION"
        }, {
            no: 3,
            name: "TEAMS_FEATURES_PHI"
        }, {
            no: 4,
            name: "TEAMS_FEATURES_CORTEX"
        }, {
            no: 5,
            name: "TEAMS_FEATURES_OPENAI_DISABLED"
        }, {
            no: 6,
            name: "TEAMS_FEATURES_REMOTE_INDEXING_DISABLED"
        }, {
            no: 7,
            name: "TEAMS_FEATURES_API_KEY_ENABLED"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.CORTEX = 1] = "CORTEX",
            e[e.CORTEX_TEST = 2] = "CORTEX_TEST"
        }(kn || (kn = {})),
        ln.util.setEnumType(kn, "exa.codeium_common_pb.UserFeatures", [{
            no: 0,
            name: "USER_FEATURES_UNSPECIFIED"
        }, {
            no: 1,
            name: "USER_FEATURES_CORTEX"
        }, {
            no: 2,
            name: "USER_FEATURES_CORTEX_TEST"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.ATTRIBUTION_READ = 1] = "ATTRIBUTION_READ",
            e[e.ANALYTICS_READ = 2] = "ANALYTICS_READ",
            e[e.LICENSE_READ = 3] = "LICENSE_READ",
            e[e.TEAM_USER_READ = 4] = "TEAM_USER_READ",
            e[e.TEAM_USER_UPDATE = 5] = "TEAM_USER_UPDATE",
            e[e.TEAM_USER_DELETE = 6] = "TEAM_USER_DELETE",
            e[e.TEAM_USER_INVITE = 17] = "TEAM_USER_INVITE",
            e[e.INDEXING_READ = 7] = "INDEXING_READ",
            e[e.INDEXING_CREATE = 8] = "INDEXING_CREATE",
            e[e.INDEXING_UPDATE = 9] = "INDEXING_UPDATE",
            e[e.INDEXING_DELETE = 10] = "INDEXING_DELETE",
            e[e.INDEXING_MANAGEMENT = 27] = "INDEXING_MANAGEMENT",
            e[e.FINETUNING_READ = 19] = "FINETUNING_READ",
            e[e.FINETUNING_CREATE = 20] = "FINETUNING_CREATE",
            e[e.FINETUNING_UPDATE = 21] = "FINETUNING_UPDATE",
            e[e.FINETUNING_DELETE = 22] = "FINETUNING_DELETE",
            e[e.SSO_READ = 11] = "SSO_READ",
            e[e.SSO_WRITE = 12] = "SSO_WRITE",
            e[e.SERVICE_KEY_READ = 13] = "SERVICE_KEY_READ",
            e[e.SERVICE_KEY_CREATE = 14] = "SERVICE_KEY_CREATE",
            e[e.SERVICE_KEY_UPDATE = 28] = "SERVICE_KEY_UPDATE",
            e[e.SERVICE_KEY_DELETE = 15] = "SERVICE_KEY_DELETE",
            e[e.ROLE_READ = 23] = "ROLE_READ",
            e[e.ROLE_CREATE = 24] = "ROLE_CREATE",
            e[e.ROLE_UPDATE = 25] = "ROLE_UPDATE",
            e[e.ROLE_DELETE = 26] = "ROLE_DELETE",
            e[e.BILLING_READ = 16] = "BILLING_READ",
            e[e.BILLING_WRITE = 18] = "BILLING_WRITE",
            e[e.EXTERNAL_CHAT_UPDATE = 29] = "EXTERNAL_CHAT_UPDATE",
            e[e.TEAM_SETTINGS_READ = 30] = "TEAM_SETTINGS_READ",
            e[e.TEAM_SETTINGS_UPDATE = 31] = "TEAM_SETTINGS_UPDATE"
        }(vn || (vn = {})),
        ln.util.setEnumType(vn, "exa.codeium_common_pb.Permission", [{
            no: 0,
            name: "PERMISSION_UNSPECIFIED"
        }, {
            no: 1,
            name: "PERMISSION_ATTRIBUTION_READ"
        }, {
            no: 2,
            name: "PERMISSION_ANALYTICS_READ"
        }, {
            no: 3,
            name: "PERMISSION_LICENSE_READ"
        }, {
            no: 4,
            name: "PERMISSION_TEAM_USER_READ"
        }, {
            no: 5,
            name: "PERMISSION_TEAM_USER_UPDATE"
        }, {
            no: 6,
            name: "PERMISSION_TEAM_USER_DELETE"
        }, {
            no: 17,
            name: "PERMISSION_TEAM_USER_INVITE"
        }, {
            no: 7,
            name: "PERMISSION_INDEXING_READ"
        }, {
            no: 8,
            name: "PERMISSION_INDEXING_CREATE"
        }, {
            no: 9,
            name: "PERMISSION_INDEXING_UPDATE"
        }, {
            no: 10,
            name: "PERMISSION_INDEXING_DELETE"
        }, {
            no: 27,
            name: "PERMISSION_INDEXING_MANAGEMENT"
        }, {
            no: 19,
            name: "PERMISSION_FINETUNING_READ"
        }, {
            no: 20,
            name: "PERMISSION_FINETUNING_CREATE"
        }, {
            no: 21,
            name: "PERMISSION_FINETUNING_UPDATE"
        }, {
            no: 22,
            name: "PERMISSION_FINETUNING_DELETE"
        }, {
            no: 11,
            name: "PERMISSION_SSO_READ"
        }, {
            no: 12,
            name: "PERMISSION_SSO_WRITE"
        }, {
            no: 13,
            name: "PERMISSION_SERVICE_KEY_READ"
        }, {
            no: 14,
            name: "PERMISSION_SERVICE_KEY_CREATE"
        }, {
            no: 28,
            name: "PERMISSION_SERVICE_KEY_UPDATE"
        }, {
            no: 15,
            name: "PERMISSION_SERVICE_KEY_DELETE"
        }, {
            no: 23,
            name: "PERMISSION_ROLE_READ"
        }, {
            no: 24,
            name: "PERMISSION_ROLE_CREATE"
        }, {
            no: 25,
            name: "PERMISSION_ROLE_UPDATE"
        }, {
            no: 26,
            name: "PERMISSION_ROLE_DELETE"
        }, {
            no: 16,
            name: "PERMISSION_BILLING_READ"
        }, {
            no: 18,
            name: "PERMISSION_BILLING_WRITE"
        }, {
            no: 29,
            name: "PERMISSION_EXTERNAL_CHAT_UPDATE"
        }, {
            no: 30,
            name: "PERMISSION_TEAM_SETTINGS_READ"
        }, {
            no: 31,
            name: "PERMISSION_TEAM_SETTINGS_UPDATE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.TEAMS = 1] = "TEAMS",
            e[e.PRO = 2] = "PRO",
            e[e.TRIAL = 9] = "TRIAL",
            e[e.ENTERPRISE_SAAS = 3] = "ENTERPRISE_SAAS",
            e[e.HYBRID = 4] = "HYBRID",
            e[e.ENTERPRISE_SELF_HOSTED = 5] = "ENTERPRISE_SELF_HOSTED",
            e[e.WAITLIST_PRO = 6] = "WAITLIST_PRO",
            e[e.TEAMS_ULTIMATE = 7] = "TEAMS_ULTIMATE",
            e[e.PRO_ULTIMATE = 8] = "PRO_ULTIMATE"
        }(Fn || (Fn = {})),
        ln.util.setEnumType(Fn, "exa.codeium_common_pb.TeamsTier", [{
            no: 0,
            name: "TEAMS_TIER_UNSPECIFIED"
        }, {
            no: 1,
            name: "TEAMS_TIER_TEAMS"
        }, {
            no: 2,
            name: "TEAMS_TIER_PRO"
        }, {
            no: 9,
            name: "TEAMS_TIER_TRIAL"
        }, {
            no: 3,
            name: "TEAMS_TIER_ENTERPRISE_SAAS"
        }, {
            no: 4,
            name: "TEAMS_TIER_HYBRID"
        }, {
            no: 5,
            name: "TEAMS_TIER_ENTERPRISE_SELF_HOSTED"
        }, {
            no: 6,
            name: "TEAMS_TIER_WAITLIST_PRO"
        }, {
            no: 7,
            name: "TEAMS_TIER_TEAMS_ULTIMATE"
        }, {
            no: 8,
            name: "TEAMS_TIER_PRO_ULTIMATE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.GITHUB = 1] = "GITHUB",
            e[e.GITLAB = 2] = "GITLAB",
            e[e.BITBUCKET = 3] = "BITBUCKET",
            e[e.AZURE_DEVOPS = 4] = "AZURE_DEVOPS"
        }(Bn || (Bn = {})),
        ln.util.setEnumType(Bn, "exa.codeium_common_pb.ScmProvider", [{
            no: 0,
            name: "SCM_PROVIDER_UNSPECIFIED"
        }, {
            no: 1,
            name: "SCM_PROVIDER_GITHUB"
        }, {
            no: 2,
            name: "SCM_PROVIDER_GITLAB"
        }, {
            no: 3,
            name: "SCM_PROVIDER_BITBUCKET"
        }, {
            no: 4,
            name: "SCM_PROVIDER_AZURE_DEVOPS"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.GIT = 1] = "GIT",
            e[e.PERFORCE = 2] = "PERFORCE"
        }(xn || (xn = {})),
        ln.util.setEnumType(xn, "exa.codeium_common_pb.ScmType", [{
            no: 0,
            name: "SCM_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "SCM_TYPE_GIT"
        }, {
            no: 2,
            name: "SCM_TYPE_PERFORCE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.FUNCTION = 1] = "FUNCTION",
            e[e.CLASS = 2] = "CLASS",
            e[e.IMPORT = 3] = "IMPORT",
            e[e.NAIVE_LINECHUNK = 4] = "NAIVE_LINECHUNK",
            e[e.REFERENCE_FUNCTION = 5] = "REFERENCE_FUNCTION",
            e[e.REFERENCE_CLASS = 6] = "REFERENCE_CLASS",
            e[e.FILE = 7] = "FILE",
            e[e.TERMINAL = 8] = "TERMINAL"
        }(Gn || (Gn = {})),
        ln.util.setEnumType(Gn, "exa.codeium_common_pb.CodeContextType", [{
            no: 0,
            name: "CODE_CONTEXT_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CODE_CONTEXT_TYPE_FUNCTION"
        }, {
            no: 2,
            name: "CODE_CONTEXT_TYPE_CLASS"
        }, {
            no: 3,
            name: "CODE_CONTEXT_TYPE_IMPORT"
        }, {
            no: 4,
            name: "CODE_CONTEXT_TYPE_NAIVE_LINECHUNK"
        }, {
            no: 5,
            name: "CODE_CONTEXT_TYPE_REFERENCE_FUNCTION"
        }, {
            no: 6,
            name: "CODE_CONTEXT_TYPE_REFERENCE_CLASS"
        }, {
            no: 7,
            name: "CODE_CONTEXT_TYPE_FILE"
        }, {
            no: 8,
            name: "CODE_CONTEXT_TYPE_TERMINAL"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.OPEN_DOCS = 1] = "OPEN_DOCS",
            e[e.SEARCH_RESULT = 2] = "SEARCH_RESULT",
            e[e.IMPORT = 3] = "IMPORT",
            e[e.LOCAL_DIRECTORY = 4] = "LOCAL_DIRECTORY",
            e[e.LAST_ACTIVE_DOC = 5] = "LAST_ACTIVE_DOC",
            e[e.ORACLE_ITEMS = 6] = "ORACLE_ITEMS",
            e[e.PINNED_CONTEXT = 7] = "PINNED_CONTEXT",
            e[e.RESEARCH_STATE = 8] = "RESEARCH_STATE",
            e[e.GROUND_TRUTH_PLAN_EDIT = 9] = "GROUND_TRUTH_PLAN_EDIT",
            e[e.COMMIT_GRAPH = 10] = "COMMIT_GRAPH"
        }(Hn || (Hn = {})),
        ln.util.setEnumType(Hn, "exa.codeium_common_pb.CodeContextSource", [{
            no: 0,
            name: "CODE_CONTEXT_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CODE_CONTEXT_SOURCE_OPEN_DOCS"
        }, {
            no: 2,
            name: "CODE_CONTEXT_SOURCE_SEARCH_RESULT"
        }, {
            no: 3,
            name: "CODE_CONTEXT_SOURCE_IMPORT"
        }, {
            no: 4,
            name: "CODE_CONTEXT_SOURCE_LOCAL_DIRECTORY"
        }, {
            no: 5,
            name: "CODE_CONTEXT_SOURCE_LAST_ACTIVE_DOC"
        }, {
            no: 6,
            name: "CODE_CONTEXT_SOURCE_ORACLE_ITEMS"
        }, {
            no: 7,
            name: "CODE_CONTEXT_SOURCE_PINNED_CONTEXT"
        }, {
            no: 8,
            name: "CODE_CONTEXT_SOURCE_RESEARCH_STATE"
        }, {
            no: 9,
            name: "CODE_CONTEXT_SOURCE_GROUND_TRUTH_PLAN_EDIT"
        }, {
            no: 10,
            name: "CODE_CONTEXT_SOURCE_COMMIT_GRAPH"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.RAW_SOURCE = 1] = "RAW_SOURCE",
            e[e.SIGNATURE = 2] = "SIGNATURE",
            e[e.NODEPATH = 3] = "NODEPATH"
        }(Jn || (Jn = {})),
        ln.util.setEnumType(Jn, "exa.codeium_common_pb.ContextSnippetType", [{
            no: 0,
            name: "CONTEXT_SNIPPET_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CONTEXT_SNIPPET_TYPE_RAW_SOURCE"
        }, {
            no: 2,
            name: "CONTEXT_SNIPPET_TYPE_SIGNATURE"
        }, {
            no: 3,
            name: "CONTEXT_SNIPPET_TYPE_NODEPATH"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.COMMIT_MESSAGE = 1] = "COMMIT_MESSAGE"
        }(Vn || (Vn = {})),
        ln.util.setEnumType(Vn, "exa.codeium_common_pb.CommitIntentType", [{
            no: 0,
            name: "COMMIT_INTENT_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "COMMIT_INTENT_TYPE_COMMIT_MESSAGE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.L4 = 1] = "L4",
            e[e.T4 = 2] = "T4",
            e[e.A10 = 3] = "A10",
            e[e.A100 = 4] = "A100",
            e[e.V100 = 5] = "V100",
            e[e.A5000 = 6] = "A5000"
        }(Xn || (Xn = {})),
        ln.util.setEnumType(Xn, "exa.codeium_common_pb.GpuType", [{
            no: 0,
            name: "GPU_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "GPU_TYPE_L4"
        }, {
            no: 2,
            name: "GPU_TYPE_T4"
        }, {
            no: 3,
            name: "GPU_TYPE_A10"
        }, {
            no: 4,
            name: "GPU_TYPE_A100"
        }, {
            no: 5,
            name: "GPU_TYPE_V100"
        }, {
            no: 6,
            name: "GPU_TYPE_A5000"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.INCLUDE = 1] = "INCLUDE",
            e[e.EXCLUDE = 2] = "EXCLUDE"
        }(Wn || (Wn = {})),
        ln.util.setEnumType(Wn, "exa.codeium_common_pb.ContextInclusionType", [{
            no: 0,
            name: "CONTEXT_INCLUSION_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CONTEXT_INCLUSION_TYPE_INCLUDE"
        }, {
            no: 2,
            name: "CONTEXT_INCLUSION_TYPE_EXCLUDE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.AUTO = 1] = "AUTO",
            e[e.LIGHT = 2] = "LIGHT",
            e[e.DARK = 3] = "DARK"
        }(Kn || (Kn = {})),
        ln.util.setEnumType(Kn, "exa.codeium_common_pb.ThemePreference", [{
            no: 0,
            name: "THEME_PREFERENCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "THEME_PREFERENCE_AUTO"
        }, {
            no: 2,
            name: "THEME_PREFERENCE_LIGHT"
        }, {
            no: 3,
            name: "THEME_PREFERENCE_DARK"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.SMALL = 1] = "SMALL",
            e[e.DEFAULT = 2] = "DEFAULT",
            e[e.LARGE = 3] = "LARGE"
        }(Yn || (Yn = {})),
        ln.util.setEnumType(Yn, "exa.codeium_common_pb.FontSize", [{
            no: 0,
            name: "FONT_SIZE_UNSPECIFIED"
        }, {
            no: 1,
            name: "FONT_SIZE_SMALL"
        }, {
            no: 2,
            name: "FONT_SIZE_DEFAULT"
        }, {
            no: 3,
            name: "FONT_SIZE_LARGE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.SLOW = 1] = "SLOW",
            e[e.DEFAULT = 2] = "DEFAULT",
            e[e.FAST = 3] = "FAST"
        }(qn || (qn = {})),
        ln.util.setEnumType(qn, "exa.codeium_common_pb.AutocompleteSpeed", [{
            no: 0,
            name: "AUTOCOMPLETE_SPEED_UNSPECIFIED"
        }, {
            no: 1,
            name: "AUTOCOMPLETE_SPEED_SLOW"
        }, {
            no: 2,
            name: "AUTOCOMPLETE_SPEED_DEFAULT"
        }, {
            no: 3,
            name: "AUTOCOMPLETE_SPEED_FAST"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.OFF = 1] = "OFF",
            e[e.AUTO = 2] = "AUTO",
            e[e.EAGER = 3] = "EAGER"
        }(zn || (zn = {})),
        ln.util.setEnumType(zn, "exa.codeium_common_pb.CascadeCommandsAutoExecution", [{
            no: 0,
            name: "CASCADE_COMMANDS_AUTO_EXECUTION_UNSPECIFIED"
        }, {
            no: 1,
            name: "CASCADE_COMMANDS_AUTO_EXECUTION_OFF"
        }, {
            no: 2,
            name: "CASCADE_COMMANDS_AUTO_EXECUTION_AUTO"
        }, {
            no: 3,
            name: "CASCADE_COMMANDS_AUTO_EXECUTION_EAGER"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.CHAT = 1] = "CHAT",
            e[e.PROFILE = 2] = "PROFILE",
            e[e.BRAIN = 4] = "BRAIN",
            e[e.COMMAND = 5] = "COMMAND",
            e[e.CORTEX = 6] = "CORTEX",
            e[e.DEBUG = 7] = "DEBUG"
        }(jn || (jn = {})),
        ln.util.setEnumType(jn, "exa.codeium_common_pb.ExtensionPanelTab", [{
            no: 0,
            name: "EXTENSION_PANEL_TAB_UNSPECIFIED"
        }, {
            no: 1,
            name: "EXTENSION_PANEL_TAB_CHAT"
        }, {
            no: 2,
            name: "EXTENSION_PANEL_TAB_PROFILE"
        }, {
            no: 4,
            name: "EXTENSION_PANEL_TAB_BRAIN"
        }, {
            no: 5,
            name: "EXTENSION_PANEL_TAB_COMMAND"
        }, {
            no: 6,
            name: "EXTENSION_PANEL_TAB_CORTEX"
        }, {
            no: 7,
            name: "EXTENSION_PANEL_TAB_DEBUG"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.ENABLED = 1] = "ENABLED",
            e[e.DISABLED = 2] = "DISABLED"
        }($n || ($n = {})),
        ln.util.setEnumType($n, "exa.codeium_common_pb.RememberLastModelSelection", [{
            no: 0,
            name: "REMEMBER_LAST_MODEL_SELECTION_UNSPECIFIED"
        }, {
            no: 1,
            name: "REMEMBER_LAST_MODEL_SELECTION_ENABLED"
        }, {
            no: 2,
            name: "REMEMBER_LAST_MODEL_SELECTION_DISABLED"
        }]),
        function(e) {
            e[e.CASCADE_NUX_EVENT_UNSPECIFIED = 0] = "CASCADE_NUX_EVENT_UNSPECIFIED",
            e[e.CASCADE_NUX_EVENT_DIFF_OVERVIEW = 1] = "CASCADE_NUX_EVENT_DIFF_OVERVIEW",
            e[e.CASCADE_NUX_EVENT_WEB_SEARCH = 2] = "CASCADE_NUX_EVENT_WEB_SEARCH",
            e[e.CASCADE_NUX_EVENT_NEW_MODELS_WAVE2 = 3] = "CASCADE_NUX_EVENT_NEW_MODELS_WAVE2",
            e[e.CASCADE_NUX_EVENT_TOOL_CALL = 4] = "CASCADE_NUX_EVENT_TOOL_CALL"
        }(Qn || (Qn = {})),
        ln.util.setEnumType(Qn, "exa.codeium_common_pb.CascadeNUXEvent", [{
            no: 0,
            name: "CASCADE_NUX_EVENT_UNSPECIFIED"
        }, {
            no: 1,
            name: "CASCADE_NUX_EVENT_DIFF_OVERVIEW"
        }, {
            no: 2,
            name: "CASCADE_NUX_EVENT_WEB_SEARCH"
        }, {
            no: 3,
            name: "CASCADE_NUX_EVENT_NEW_MODELS_WAVE2"
        }, {
            no: 4,
            name: "CASCADE_NUX_EVENT_TOOL_CALL"
        }]),
        function(e) {
            e[e.USER_NUX_EVENT_UNSPECIFIED = 0] = "USER_NUX_EVENT_UNSPECIFIED",
            e[e.USER_NUX_EVENT_DISMISS_WINDSURF_CROSS_SELL = 1] = "USER_NUX_EVENT_DISMISS_WINDSURF_CROSS_SELL"
        }(Zn || (Zn = {})),
        ln.util.setEnumType(Zn, "exa.codeium_common_pb.UserNUXEvent", [{
            no: 0,
            name: "USER_NUX_EVENT_UNSPECIFIED"
        }, {
            no: 1,
            name: "USER_NUX_EVENT_DISMISS_WINDSURF_CROSS_SELL"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.DEFAULT = 1] = "DEFAULT",
            e[e.READ_ONLY = 2] = "READ_ONLY",
            e[e.NO_TOOL = 3] = "NO_TOOL"
        }(et || (et = {})),
        ln.util.setEnumType(et, "exa.codeium_common_pb.ConversationalPlannerMode", [{
            no: 0,
            name: "CONVERSATIONAL_PLANNER_MODE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CONVERSATIONAL_PLANNER_MODE_DEFAULT"
        }, {
            no: 2,
            name: "CONVERSATIONAL_PLANNER_MODE_READ_ONLY"
        }, {
            no: 3,
            name: "CONVERSATIONAL_PLANNER_MODE_NO_TOOL"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.COMPLETION = 1] = "COMPLETION",
            e[e.CHAT = 2] = "CHAT",
            e[e.EMBED = 3] = "EMBED",
            e[e.QUERY = 4] = "QUERY"
        }(nt || (nt = {})),
        ln.util.setEnumType(nt, "exa.codeium_common_pb.ModelType", [{
            no: 0,
            name: "MODEL_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "MODEL_TYPE_COMPLETION"
        }, {
            no: 2,
            name: "MODEL_TYPE_CHAT"
        }, {
            no: 3,
            name: "MODEL_TYPE_EMBED"
        }, {
            no: 4,
            name: "MODEL_TYPE_QUERY"
        }]),
        function(e) {
            e[e.API_PROVIDER_UNSPECIFIED = 0] = "API_PROVIDER_UNSPECIFIED",
            e[e.API_PROVIDER_INTERNAL = 1] = "API_PROVIDER_INTERNAL",
            e[e.API_PROVIDER_OPENAI = 2] = "API_PROVIDER_OPENAI",
            e[e.API_PROVIDER_GOOGLE_VERTEX = 3] = "API_PROVIDER_GOOGLE_VERTEX",
            e[e.API_PROVIDER_ANTHROPIC = 4] = "API_PROVIDER_ANTHROPIC",
            e[e.API_PROVIDER_VLLM = 5] = "API_PROVIDER_VLLM",
            e[e.API_PROVIDER_TOGETHER_AI = 6] = "API_PROVIDER_TOGETHER_AI",
            e[e.API_PROVIDER_HUGGING_FACE = 7] = "API_PROVIDER_HUGGING_FACE",
            e[e.API_PROVIDER_NOMIC = 8] = "API_PROVIDER_NOMIC",
            e[e.API_PROVIDER_TEI = 9] = "API_PROVIDER_TEI",
            e[e.API_PROVIDER_OPENAI_COMPATIBLE_EXTERNAL = 10] = "API_PROVIDER_OPENAI_COMPATIBLE_EXTERNAL",
            e[e.API_PROVIDER_ANTHROPIC_COMPATIBLE_EXTERNAL = 11] = "API_PROVIDER_ANTHROPIC_COMPATIBLE_EXTERNAL",
            e[e.API_PROVIDER_VERTEX_COMPATIBLE_EXTERNAL = 12] = "API_PROVIDER_VERTEX_COMPATIBLE_EXTERNAL",
            e[e.API_PROVIDER_BEDROCK_COMPATIBLE_EXTERNAL = 13] = "API_PROVIDER_BEDROCK_COMPATIBLE_EXTERNAL",
            e[e.API_PROVIDER_AZURE_COMPATIBLE_EXTERNAL = 14] = "API_PROVIDER_AZURE_COMPATIBLE_EXTERNAL",
            e[e.API_PROVIDER_ANTHROPIC_BEDROCK = 15] = "API_PROVIDER_ANTHROPIC_BEDROCK",
            e[e.API_PROVIDER_FIREWORKS = 16] = "API_PROVIDER_FIREWORKS",
            e[e.API_PROVIDER_OPEN_ROUTER = 17] = "API_PROVIDER_OPEN_ROUTER",
            e[e.API_PROVIDER_XAI = 18] = "API_PROVIDER_XAI",
            e[e.API_PROVIDER_OPENAI_OFFICIAL = 19] = "API_PROVIDER_OPENAI_OFFICIAL",
            e[e.API_PROVIDER_ANTHROPIC_BYOK = 20] = "API_PROVIDER_ANTHROPIC_BYOK",
            e[e.API_PROVIDER_CEREBRAS = 21] = "API_PROVIDER_CEREBRAS"
        }(tt || (tt = {})),
        ln.util.setEnumType(tt, "exa.codeium_common_pb.APIProvider", [{
            no: 0,
            name: "API_PROVIDER_UNSPECIFIED"
        }, {
            no: 1,
            name: "API_PROVIDER_INTERNAL"
        }, {
            no: 2,
            name: "API_PROVIDER_OPENAI"
        }, {
            no: 3,
            name: "API_PROVIDER_GOOGLE_VERTEX"
        }, {
            no: 4,
            name: "API_PROVIDER_ANTHROPIC"
        }, {
            no: 5,
            name: "API_PROVIDER_VLLM"
        }, {
            no: 6,
            name: "API_PROVIDER_TOGETHER_AI"
        }, {
            no: 7,
            name: "API_PROVIDER_HUGGING_FACE"
        }, {
            no: 8,
            name: "API_PROVIDER_NOMIC"
        }, {
            no: 9,
            name: "API_PROVIDER_TEI"
        }, {
            no: 10,
            name: "API_PROVIDER_OPENAI_COMPATIBLE_EXTERNAL"
        }, {
            no: 11,
            name: "API_PROVIDER_ANTHROPIC_COMPATIBLE_EXTERNAL"
        }, {
            no: 12,
            name: "API_PROVIDER_VERTEX_COMPATIBLE_EXTERNAL"
        }, {
            no: 13,
            name: "API_PROVIDER_BEDROCK_COMPATIBLE_EXTERNAL"
        }, {
            no: 14,
            name: "API_PROVIDER_AZURE_COMPATIBLE_EXTERNAL"
        }, {
            no: 15,
            name: "API_PROVIDER_ANTHROPIC_BEDROCK"
        }, {
            no: 16,
            name: "API_PROVIDER_FIREWORKS"
        }, {
            no: 17,
            name: "API_PROVIDER_OPEN_ROUTER"
        }, {
            no: 18,
            name: "API_PROVIDER_XAI"
        }, {
            no: 19,
            name: "API_PROVIDER_OPENAI_OFFICIAL"
        }, {
            no: 20,
            name: "API_PROVIDER_ANTHROPIC_BYOK"
        }, {
            no: 21,
            name: "API_PROVIDER_CEREBRAS"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.BASE = 1] = "BASE",
            e[e.CODEIUM = 2] = "CODEIUM",
            e[e.USER = 3] = "USER",
            e[e.USER_LARGE = 4] = "USER_LARGE",
            e[e.UNKNOWN = 5] = "UNKNOWN"
        }(rt || (rt = {})),
        ln.util.setEnumType(rt, "exa.codeium_common_pb.CodeSource", [{
            no: 0,
            name: "CODE_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CODE_SOURCE_BASE"
        }, {
            no: 2,
            name: "CODE_SOURCE_CODEIUM"
        }, {
            no: 3,
            name: "CODE_SOURCE_USER"
        }, {
            no: 4,
            name: "CODE_SOURCE_USER_LARGE"
        }, {
            no: 5,
            name: "CODE_SOURCE_UNKNOWN"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.SLACK_MESSAGE = 1] = "SLACK_MESSAGE",
            e[e.SLACK_CHANNEL = 2] = "SLACK_CHANNEL",
            e[e.GITHUB_ISSUE = 3] = "GITHUB_ISSUE",
            e[e.GITHUB_ISSUE_COMMENT = 4] = "GITHUB_ISSUE_COMMENT",
            e[e.GITHUB_REPO = 8] = "GITHUB_REPO",
            e[e.GOOGLE_DRIVE_FILE = 5] = "GOOGLE_DRIVE_FILE",
            e[e.GOOGLE_DRIVE_FOLDER = 6] = "GOOGLE_DRIVE_FOLDER",
            e[e.JIRA_ISSUE = 7] = "JIRA_ISSUE",
            e[e.CCI = 9] = "CCI"
        }(at || (at = {})),
        ln.util.setEnumType(at, "exa.codeium_common_pb.DocumentType", [{
            no: 0,
            name: "DOCUMENT_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "DOCUMENT_TYPE_SLACK_MESSAGE"
        }, {
            no: 2,
            name: "DOCUMENT_TYPE_SLACK_CHANNEL"
        }, {
            no: 3,
            name: "DOCUMENT_TYPE_GITHUB_ISSUE"
        }, {
            no: 4,
            name: "DOCUMENT_TYPE_GITHUB_ISSUE_COMMENT"
        }, {
            no: 8,
            name: "DOCUMENT_TYPE_GITHUB_REPO"
        }, {
            no: 5,
            name: "DOCUMENT_TYPE_GOOGLE_DRIVE_FILE"
        }, {
            no: 6,
            name: "DOCUMENT_TYPE_GOOGLE_DRIVE_FOLDER"
        }, {
            no: 7,
            name: "DOCUMENT_TYPE_JIRA_ISSUE"
        }, {
            no: 9,
            name: "DOCUMENT_TYPE_CCI"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.FILE = 1] = "FILE",
            e[e.DIRECTORY = 2] = "DIRECTORY",
            e[e.REPOSITORY = 3] = "REPOSITORY",
            e[e.CODE_CONTEXT = 4] = "CODE_CONTEXT",
            e[e.CCI_WITH_SUBRANGE = 5] = "CCI_WITH_SUBRANGE",
            e[e.REPOSITORY_PATH = 6] = "REPOSITORY_PATH",
            e[e.SLACK = 7] = "SLACK",
            e[e.GITHUB = 8] = "GITHUB",
            e[e.FILE_LINE_RANGE = 9] = "FILE_LINE_RANGE",
            e[e.TEXT_BLOCK = 10] = "TEXT_BLOCK",
            e[e.JIRA = 11] = "JIRA",
            e[e.GOOGLE_DRIVE = 12] = "GOOGLE_DRIVE",
            e[e.CONSOLE_LOG = 13] = "CONSOLE_LOG",
            e[e.DOM_ELEMENT = 14] = "DOM_ELEMENT"
        }(ot || (ot = {})),
        ln.util.setEnumType(ot, "exa.codeium_common_pb.ContextScopeType", [{
            no: 0,
            name: "CONTEXT_SCOPE_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "CONTEXT_SCOPE_TYPE_FILE"
        }, {
            no: 2,
            name: "CONTEXT_SCOPE_TYPE_DIRECTORY"
        }, {
            no: 3,
            name: "CONTEXT_SCOPE_TYPE_REPOSITORY"
        }, {
            no: 4,
            name: "CONTEXT_SCOPE_TYPE_CODE_CONTEXT"
        }, {
            no: 5,
            name: "CONTEXT_SCOPE_TYPE_CCI_WITH_SUBRANGE"
        }, {
            no: 6,
            name: "CONTEXT_SCOPE_TYPE_REPOSITORY_PATH"
        }, {
            no: 7,
            name: "CONTEXT_SCOPE_TYPE_SLACK"
        }, {
            no: 8,
            name: "CONTEXT_SCOPE_TYPE_GITHUB"
        }, {
            no: 9,
            name: "CONTEXT_SCOPE_TYPE_FILE_LINE_RANGE"
        }, {
            no: 10,
            name: "CONTEXT_SCOPE_TYPE_TEXT_BLOCK"
        }, {
            no: 11,
            name: "CONTEXT_SCOPE_TYPE_JIRA"
        }, {
            no: 12,
            name: "CONTEXT_SCOPE_TYPE_GOOGLE_DRIVE"
        }, {
            no: 13,
            name: "CONTEXT_SCOPE_TYPE_CONSOLE_LOG"
        }, {
            no: 14,
            name: "CONTEXT_SCOPE_TYPE_DOM_ELEMENT"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.DEFAULT = 1] = "DEFAULT",
            e[e.FUNCTION_CODE_LENS = 2] = "FUNCTION_CODE_LENS",
            e[e.CLASS_CODE_LENS = 3] = "CLASS_CODE_LENS",
            e[e.RIGHT_CLICK_REFACTOR = 4] = "RIGHT_CLICK_REFACTOR",
            e[e.SELECTION_HINT_CODE_LENS = 5] = "SELECTION_HINT_CODE_LENS",
            e[e.LINE_HINT_CODE_LENS = 6] = "LINE_HINT_CODE_LENS",
            e[e.PLAN = 7] = "PLAN",
            e[e.FOLLOWUP = 8] = "FOLLOWUP",
            e[e.PASTE_AND_TRANSLATE = 9] = "PASTE_AND_TRANSLATE",
            e[e.SUPERCOMPLETE = 10] = "SUPERCOMPLETE",
            e[e.FUNCTION_DOCSTRING = 11] = "FUNCTION_DOCSTRING",
            e[e.FAST_APPLY = 12] = "FAST_APPLY",
            e[e.TERMINAL = 13] = "TERMINAL",
            e[e.TAB_JUMP = 14] = "TAB_JUMP"
        }(it || (it = {})),
        ln.util.setEnumType(it, "exa.codeium_common_pb.CommandRequestSource", [{
            no: 0,
            name: "COMMAND_REQUEST_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "COMMAND_REQUEST_SOURCE_DEFAULT"
        }, {
            no: 2,
            name: "COMMAND_REQUEST_SOURCE_FUNCTION_CODE_LENS"
        }, {
            no: 3,
            name: "COMMAND_REQUEST_SOURCE_CLASS_CODE_LENS"
        }, {
            no: 4,
            name: "COMMAND_REQUEST_SOURCE_RIGHT_CLICK_REFACTOR"
        }, {
            no: 5,
            name: "COMMAND_REQUEST_SOURCE_SELECTION_HINT_CODE_LENS"
        }, {
            no: 6,
            name: "COMMAND_REQUEST_SOURCE_LINE_HINT_CODE_LENS"
        }, {
            no: 7,
            name: "COMMAND_REQUEST_SOURCE_PLAN"
        }, {
            no: 8,
            name: "COMMAND_REQUEST_SOURCE_FOLLOWUP"
        }, {
            no: 9,
            name: "COMMAND_REQUEST_SOURCE_PASTE_AND_TRANSLATE"
        }, {
            no: 10,
            name: "COMMAND_REQUEST_SOURCE_SUPERCOMPLETE"
        }, {
            no: 11,
            name: "COMMAND_REQUEST_SOURCE_FUNCTION_DOCSTRING"
        }, {
            no: 12,
            name: "COMMAND_REQUEST_SOURCE_FAST_APPLY"
        }, {
            no: 13,
            name: "COMMAND_REQUEST_SOURCE_TERMINAL"
        }, {
            no: 14,
            name: "COMMAND_REQUEST_SOURCE_TAB_JUMP"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.ERROR = 1] = "ERROR",
            e[e.WARNING = 2] = "WARNING",
            e[e.INFO = 3] = "INFO",
            e[e.DEBUG = 4] = "DEBUG"
        }(st || (st = {})),
        ln.util.setEnumType(st, "exa.codeium_common_pb.StatusLevel", [{
            no: 0,
            name: "STATUS_LEVEL_UNSPECIFIED"
        }, {
            no: 1,
            name: "STATUS_LEVEL_ERROR"
        }, {
            no: 2,
            name: "STATUS_LEVEL_WARNING"
        }, {
            no: 3,
            name: "STATUS_LEVEL_INFO"
        }, {
            no: 4,
            name: "STATUS_LEVEL_DEBUG"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.OVERALL = 1] = "OVERALL",
            e[e.ACTION_PREPARE = 2] = "ACTION_PREPARE",
            e[e.ACTION_APPLY = 3] = "ACTION_APPLY"
        }(lt || (lt = {})),
        ln.util.setEnumType(lt, "exa.codeium_common_pb.CortexErrorCategory", [{
            no: 0,
            name: "CORTEX_ERROR_CATEGORY_UNSPECIFIED"
        }, {
            no: 1,
            name: "CORTEX_ERROR_CATEGORY_OVERALL"
        }, {
            no: 2,
            name: "CORTEX_ERROR_CATEGORY_ACTION_PREPARE"
        }, {
            no: 3,
            name: "CORTEX_ERROR_CATEGORY_ACTION_APPLY"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.OVERALL = 1] = "OVERALL",
            e[e.LAST_AUTOCOMPLETE_USAGE_TIME = 2] = "LAST_AUTOCOMPLETE_USAGE_TIME",
            e[e.LAST_CHAT_USAGE_TIME = 3] = "LAST_CHAT_USAGE_TIME",
            e[e.LAST_COMMAND_USAGE_TIME = 4] = "LAST_COMMAND_USAGE_TIME"
        }(ut || (ut = {})),
        ln.util.setEnumType(ut, "exa.codeium_common_pb.LastUpdateType", [{
            no: 0,
            name: "LAST_UPDATE_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "LAST_UPDATE_TYPE_OVERALL"
        }, {
            no: 2,
            name: "LAST_UPDATE_TYPE_LAST_AUTOCOMPLETE_USAGE_TIME"
        }, {
            no: 3,
            name: "LAST_UPDATE_TYPE_LAST_CHAT_USAGE_TIME"
        }, {
            no: 4,
            name: "LAST_UPDATE_TYPE_LAST_COMMAND_USAGE_TIME"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.AUTOCOMPLETE = 1] = "AUTOCOMPLETE",
            e[e.COMMAND = 2] = "COMMAND",
            e[e.CHAT = 3] = "CHAT"
        }(ct || (ct = {})),
        ln.util.setEnumType(ct, "exa.codeium_common_pb.OnboardingActionType", [{
            no: 0,
            name: "ONBOARDING_ACTION_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "ONBOARDING_ACTION_TYPE_AUTOCOMPLETE"
        }, {
            no: 2,
            name: "ONBOARDING_ACTION_TYPE_COMMAND"
        }, {
            no: 3,
            name: "ONBOARDING_ACTION_TYPE_CHAT"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.AUTOCOMPLETE_ACCEPT = 1] = "AUTOCOMPLETE_ACCEPT",
            e[e.CURSOR_LINE_NAVIGATION = 2] = "CURSOR_LINE_NAVIGATION",
            e[e.TYPING = 3] = "TYPING",
            e[e.FORCED = 4] = "FORCED",
            e[e.TAB_JUMP_ACCEPT = 5] = "TAB_JUMP_ACCEPT",
            e[e.SUPERCOMPLETE_ACCEPT = 6] = "SUPERCOMPLETE_ACCEPT",
            e[e.TAB_JUMP_PREDICTIVE = 7] = "TAB_JUMP_PREDICTIVE",
            e[e.AUTOCOMPLETE_PREDICTIVE = 8] = "AUTOCOMPLETE_PREDICTIVE",
            e[e.SUPERCOMPLETE_PREDICTIVE = 9] = "SUPERCOMPLETE_PREDICTIVE"
        }(_t || (_t = {})),
        ln.util.setEnumType(_t, "exa.codeium_common_pb.SupercompleteTriggerCondition", [{
            no: 0,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_UNSPECIFIED"
        }, {
            no: 1,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_AUTOCOMPLETE_ACCEPT"
        }, {
            no: 2,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_CURSOR_LINE_NAVIGATION"
        }, {
            no: 3,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_TYPING"
        }, {
            no: 4,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_FORCED"
        }, {
            no: 5,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_TAB_JUMP_ACCEPT"
        }, {
            no: 6,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_SUPERCOMPLETE_ACCEPT"
        }, {
            no: 7,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_TAB_JUMP_PREDICTIVE"
        }, {
            no: 8,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_AUTOCOMPLETE_PREDICTIVE"
        }, {
            no: 9,
            name: "SUPERCOMPLETE_TRIGGER_CONDITION_SUPERCOMPLETE_PREDICTIVE"
        }]),
        function(e) {
            e[e.EVENT_UNSPECIFIED = 0] = "EVENT_UNSPECIFIED",
            e[e.WINDSURF_EXTENSION_ACTIVATED = 32] = "WINDSURF_EXTENSION_ACTIVATED",
            e[e.LS_DOWNLOAD_START = 1] = "LS_DOWNLOAD_START",
            e[e.LS_DOWNLOAD_COMPLETE = 2] = "LS_DOWNLOAD_COMPLETE",
            e[e.LS_DOWNLOAD_FAILURE = 5] = "LS_DOWNLOAD_FAILURE",
            e[e.LS_STARTUP = 3] = "LS_STARTUP",
            e[e.LS_FAILURE = 4] = "LS_FAILURE",
            e[e.AUTOCOMPLETE_ACCEPTED = 6] = "AUTOCOMPLETE_ACCEPTED",
            e[e.AUTOCOMPLETE_ONE_WORD_ACCEPTED = 7] = "AUTOCOMPLETE_ONE_WORD_ACCEPTED",
            e[e.CHAT_MESSAGE_SENT = 8] = "CHAT_MESSAGE_SENT",
            e[e.CHAT_MENTION_INSERT = 13] = "CHAT_MENTION_INSERT",
            e[e.CHAT_MENTION_MENU_OPEN = 19] = "CHAT_MENTION_MENU_OPEN",
            e[e.CHAT_OPEN_SETTINGS = 14] = "CHAT_OPEN_SETTINGS",
            e[e.CHAT_OPEN_CONTEXT_SETTINGS = 15] = "CHAT_OPEN_CONTEXT_SETTINGS",
            e[e.CHAT_WITH_CODEBASE = 16] = "CHAT_WITH_CODEBASE",
            e[e.CHAT_NEW_CONVERSATION = 17] = "CHAT_NEW_CONVERSATION",
            e[e.CHAT_CHANGE_MODEL = 18] = "CHAT_CHANGE_MODEL",
            e[e.CHAT_TOGGLE_FOCUS_INSERT_TEXT = 34] = "CHAT_TOGGLE_FOCUS_INSERT_TEXT",
            e[e.FUNCTION_REFACTOR = 28] = "FUNCTION_REFACTOR",
            e[e.EXPLAIN_CODE_BLOCK = 29] = "EXPLAIN_CODE_BLOCK",
            e[e.FUNCTION_ADD_DOCSTRING = 30] = "FUNCTION_ADD_DOCSTRING",
            e[e.EXPLAIN_PROBLEM = 31] = "EXPLAIN_PROBLEM",
            e[e.COMMAND_BOX_OPENED = 9] = "COMMAND_BOX_OPENED",
            e[e.COMMAND_SUBMITTED = 10] = "COMMAND_SUBMITTED",
            e[e.COMMAND_ACCEPTED = 11] = "COMMAND_ACCEPTED",
            e[e.COMMAND_REJECTED = 12] = "COMMAND_REJECTED",
            e[e.WS_ONBOARDING_LANDING_PAGE_OPENED = 20] = "WS_ONBOARDING_LANDING_PAGE_OPENED",
            e[e.WS_ONBOARDING_SETUP_PAGE_OPENED = 21] = "WS_ONBOARDING_SETUP_PAGE_OPENED",
            e[e.WS_ONBOARDING_KEYBINDINGS_PAGE_OPENED = 22] = "WS_ONBOARDING_KEYBINDINGS_PAGE_OPENED",
            e[e.WS_ONBOARDING_MIGRATION_SCOPE_PAGE_OPENED = 23] = "WS_ONBOARDING_MIGRATION_SCOPE_PAGE_OPENED",
            e[e.WS_ONBOARDING_IMPORT_PAGE_OPENED = 24] = "WS_ONBOARDING_IMPORT_PAGE_OPENED",
            e[e.WS_ONBOARDING_AUTH_PAGE_OPENED = 25] = "WS_ONBOARDING_AUTH_PAGE_OPENED",
            e[e.WS_ONBOARDING_AUTH_MANUAL_PAGE_OPENED = 26] = "WS_ONBOARDING_AUTH_MANUAL_PAGE_OPENED",
            e[e.WS_ONBOARDING_CHOOSE_THEME_PAGE_OPENED = 35] = "WS_ONBOARDING_CHOOSE_THEME_PAGE_OPENED",
            e[e.WS_ONBOARDING_COMPLETED = 27] = "WS_ONBOARDING_COMPLETED",
            e[e.WS_SKIPPED_ONBOARDING = 69] = "WS_SKIPPED_ONBOARDING",
            e[e.WS_SETTINGS_PAGE_OPEN = 72] = "WS_SETTINGS_PAGE_OPEN",
            e[e.WS_SETTINGS_PAGE_OPEN_WITH_SETTING_FOCUS = 73] = "WS_SETTINGS_PAGE_OPEN_WITH_SETTING_FOCUS",
            e[e.PROVIDE_FEEDBACK = 33] = "PROVIDE_FEEDBACK",
            e[e.CASCADE_MESSAGE_SENT = 36] = "CASCADE_MESSAGE_SENT",
            e[e.WS_OPEN_CASCADE_MEMORIES_PANEL = 38] = "WS_OPEN_CASCADE_MEMORIES_PANEL",
            e[e.PROVIDE_MESSAGE_FEEDBACK = 41] = "PROVIDE_MESSAGE_FEEDBACK",
            e[e.CASCADE_MEMORY_DELETED = 42] = "CASCADE_MEMORY_DELETED",
            e[e.CASCADE_STEP_COMPLETED = 43] = "CASCADE_STEP_COMPLETED",
            e[e.ACKNOWLEDGE_CASCADE_CODE_EDIT = 44] = "ACKNOWLEDGE_CASCADE_CODE_EDIT",
            e[e.CASCADE_WEB_TOOLS_OPEN_READ_URL_MARKDOWN = 45] = "CASCADE_WEB_TOOLS_OPEN_READ_URL_MARKDOWN",
            e[e.CASCADE_WEB_TOOLS_OPEN_CHUNK_MARKDOWN = 46] = "CASCADE_WEB_TOOLS_OPEN_CHUNK_MARKDOWN",
            e[e.CASCADE_MCP_SERVER_INIT = 64] = "CASCADE_MCP_SERVER_INIT",
            e[e.CASCADE_CLICK_EVENT = 65] = "CASCADE_CLICK_EVENT",
            e[e.CASCADE_IMPRESSION_EVENT = 67] = "CASCADE_IMPRESSION_EVENT",
            e[e.OPEN_CHANGELOG = 37] = "OPEN_CHANGELOG",
            e[e.CURSOR_DETECTED = 39] = "CURSOR_DETECTED",
            e[e.VSCODE_DETECTED = 40] = "VSCODE_DETECTED",
            e[e.CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_CLICK = 47] = "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_CLICK",
            e[e.CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_NUDGE_IMPRESSION = 48] = "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_NUDGE_IMPRESSION",
            e[e.WS_PROBLEMS_TAB_SEND_ALL_TO_CASCADE = 49] = "WS_PROBLEMS_TAB_SEND_ALL_TO_CASCADE",
            e[e.WS_PROBLEMS_TAB_SEND_ALL_IN_FILE_TO_CASCADE = 50] = "WS_PROBLEMS_TAB_SEND_ALL_IN_FILE_TO_CASCADE",
            e[e.WS_CASCADE_BAR_FILE_NAV = 51] = "WS_CASCADE_BAR_FILE_NAV",
            e[e.WS_CASCADE_BAR_HUNK_NAV = 52] = "WS_CASCADE_BAR_HUNK_NAV",
            e[e.WS_CASCADE_BAR_ACCEPT_FILE = 53] = "WS_CASCADE_BAR_ACCEPT_FILE",
            e[e.WS_CASCADE_BAR_REJECT_FILE = 54] = "WS_CASCADE_BAR_REJECT_FILE",
            e[e.WS_CUSTOM_APP_ICON_MODAL_OPEN = 55] = "WS_CUSTOM_APP_ICON_MODAL_OPEN",
            e[e.WS_CUSTOM_APP_ICON_SELECT_CLASSIC = 56] = "WS_CUSTOM_APP_ICON_SELECT_CLASSIC",
            e[e.WS_CUSTOM_APP_ICON_SELECT_CLASSIC_LIGHT = 57] = "WS_CUSTOM_APP_ICON_SELECT_CLASSIC_LIGHT",
            e[e.WS_CUSTOM_APP_ICON_SELECT_RETRO = 58] = "WS_CUSTOM_APP_ICON_SELECT_RETRO",
            e[e.WS_CUSTOM_APP_ICON_SELECT_BLUEPRINT = 59] = "WS_CUSTOM_APP_ICON_SELECT_BLUEPRINT",
            e[e.WS_CUSTOM_APP_ICON_SELECT_HAND_DRAWN = 60] = "WS_CUSTOM_APP_ICON_SELECT_HAND_DRAWN",
            e[e.WS_CUSTOM_APP_ICON_SELECT_SUNSET = 61] = "WS_CUSTOM_APP_ICON_SELECT_SUNSET",
            e[e.WS_CUSTOM_APP_ICON_SELECT_VALENTINE = 66] = "WS_CUSTOM_APP_ICON_SELECT_VALENTINE",
            e[e.ENTERED_MCP_TOOLBAR_TAB = 63] = "ENTERED_MCP_TOOLBAR_TAB",
            e[e.CLICKED_TO_CONFIGURE_MCP = 62] = "CLICKED_TO_CONFIGURE_MCP",
            e[e.WS_SETTINGS_UPDATED = 68] = "WS_SETTINGS_UPDATED",
            e[e.BROWSER_PREVIEW_DOM_ELEMENT = 70] = "BROWSER_PREVIEW_DOM_ELEMENT",
            e[e.BROWSER_PREVIEW_CONSOLE_OUTPUT = 71] = "BROWSER_PREVIEW_CONSOLE_OUTPUT",
            e[e.WS_SETTINGS_CHANGED_BY_USER = 74] = "WS_SETTINGS_CHANGED_BY_USER"
        }(Et || (Et = {})),
        ln.util.setEnumType(Et, "exa.codeium_common_pb.ProductEventType", [{
            no: 0,
            name: "EVENT_UNSPECIFIED"
        }, {
            no: 32,
            name: "WINDSURF_EXTENSION_ACTIVATED"
        }, {
            no: 1,
            name: "LS_DOWNLOAD_START"
        }, {
            no: 2,
            name: "LS_DOWNLOAD_COMPLETE"
        }, {
            no: 5,
            name: "LS_DOWNLOAD_FAILURE"
        }, {
            no: 3,
            name: "LS_STARTUP"
        }, {
            no: 4,
            name: "LS_FAILURE"
        }, {
            no: 6,
            name: "AUTOCOMPLETE_ACCEPTED"
        }, {
            no: 7,
            name: "AUTOCOMPLETE_ONE_WORD_ACCEPTED"
        }, {
            no: 8,
            name: "CHAT_MESSAGE_SENT"
        }, {
            no: 13,
            name: "CHAT_MENTION_INSERT"
        }, {
            no: 19,
            name: "CHAT_MENTION_MENU_OPEN"
        }, {
            no: 14,
            name: "CHAT_OPEN_SETTINGS"
        }, {
            no: 15,
            name: "CHAT_OPEN_CONTEXT_SETTINGS"
        }, {
            no: 16,
            name: "CHAT_WITH_CODEBASE"
        }, {
            no: 17,
            name: "CHAT_NEW_CONVERSATION"
        }, {
            no: 18,
            name: "CHAT_CHANGE_MODEL"
        }, {
            no: 34,
            name: "CHAT_TOGGLE_FOCUS_INSERT_TEXT"
        }, {
            no: 28,
            name: "FUNCTION_REFACTOR"
        }, {
            no: 29,
            name: "EXPLAIN_CODE_BLOCK"
        }, {
            no: 30,
            name: "FUNCTION_ADD_DOCSTRING"
        }, {
            no: 31,
            name: "EXPLAIN_PROBLEM"
        }, {
            no: 9,
            name: "COMMAND_BOX_OPENED"
        }, {
            no: 10,
            name: "COMMAND_SUBMITTED"
        }, {
            no: 11,
            name: "COMMAND_ACCEPTED"
        }, {
            no: 12,
            name: "COMMAND_REJECTED"
        }, {
            no: 20,
            name: "WS_ONBOARDING_LANDING_PAGE_OPENED"
        }, {
            no: 21,
            name: "WS_ONBOARDING_SETUP_PAGE_OPENED"
        }, {
            no: 22,
            name: "WS_ONBOARDING_KEYBINDINGS_PAGE_OPENED"
        }, {
            no: 23,
            name: "WS_ONBOARDING_MIGRATION_SCOPE_PAGE_OPENED"
        }, {
            no: 24,
            name: "WS_ONBOARDING_IMPORT_PAGE_OPENED"
        }, {
            no: 25,
            name: "WS_ONBOARDING_AUTH_PAGE_OPENED"
        }, {
            no: 26,
            name: "WS_ONBOARDING_AUTH_MANUAL_PAGE_OPENED"
        }, {
            no: 35,
            name: "WS_ONBOARDING_CHOOSE_THEME_PAGE_OPENED"
        }, {
            no: 27,
            name: "WS_ONBOARDING_COMPLETED"
        }, {
            no: 69,
            name: "WS_SKIPPED_ONBOARDING"
        }, {
            no: 72,
            name: "WS_SETTINGS_PAGE_OPEN"
        }, {
            no: 73,
            name: "WS_SETTINGS_PAGE_OPEN_WITH_SETTING_FOCUS"
        }, {
            no: 33,
            name: "PROVIDE_FEEDBACK"
        }, {
            no: 36,
            name: "CASCADE_MESSAGE_SENT"
        }, {
            no: 38,
            name: "WS_OPEN_CASCADE_MEMORIES_PANEL"
        }, {
            no: 41,
            name: "PROVIDE_MESSAGE_FEEDBACK"
        }, {
            no: 42,
            name: "CASCADE_MEMORY_DELETED"
        }, {
            no: 43,
            name: "CASCADE_STEP_COMPLETED"
        }, {
            no: 44,
            name: "ACKNOWLEDGE_CASCADE_CODE_EDIT"
        }, {
            no: 45,
            name: "CASCADE_WEB_TOOLS_OPEN_READ_URL_MARKDOWN"
        }, {
            no: 46,
            name: "CASCADE_WEB_TOOLS_OPEN_CHUNK_MARKDOWN"
        }, {
            no: 64,
            name: "CASCADE_MCP_SERVER_INIT"
        }, {
            no: 65,
            name: "CASCADE_CLICK_EVENT"
        }, {
            no: 67,
            name: "CASCADE_IMPRESSION_EVENT"
        }, {
            no: 37,
            name: "OPEN_CHANGELOG"
        }, {
            no: 39,
            name: "CURSOR_DETECTED"
        }, {
            no: 40,
            name: "VSCODE_DETECTED"
        }, {
            no: 47,
            name: "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_CLICK"
        }, {
            no: 48,
            name: "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_NUDGE_IMPRESSION"
        }, {
            no: 49,
            name: "WS_PROBLEMS_TAB_SEND_ALL_TO_CASCADE"
        }, {
            no: 50,
            name: "WS_PROBLEMS_TAB_SEND_ALL_IN_FILE_TO_CASCADE"
        }, {
            no: 51,
            name: "WS_CASCADE_BAR_FILE_NAV"
        }, {
            no: 52,
            name: "WS_CASCADE_BAR_HUNK_NAV"
        }, {
            no: 53,
            name: "WS_CASCADE_BAR_ACCEPT_FILE"
        }, {
            no: 54,
            name: "WS_CASCADE_BAR_REJECT_FILE"
        }, {
            no: 55,
            name: "WS_CUSTOM_APP_ICON_MODAL_OPEN"
        }, {
            no: 56,
            name: "WS_CUSTOM_APP_ICON_SELECT_CLASSIC"
        }, {
            no: 57,
            name: "WS_CUSTOM_APP_ICON_SELECT_CLASSIC_LIGHT"
        }, {
            no: 58,
            name: "WS_CUSTOM_APP_ICON_SELECT_RETRO"
        }, {
            no: 59,
            name: "WS_CUSTOM_APP_ICON_SELECT_BLUEPRINT"
        }, {
            no: 60,
            name: "WS_CUSTOM_APP_ICON_SELECT_HAND_DRAWN"
        }, {
            no: 61,
            name: "WS_CUSTOM_APP_ICON_SELECT_SUNSET"
        }, {
            no: 66,
            name: "WS_CUSTOM_APP_ICON_SELECT_VALENTINE"
        }, {
            no: 63,
            name: "ENTERED_MCP_TOOLBAR_TAB"
        }, {
            no: 62,
            name: "CLICKED_TO_CONFIGURE_MCP"
        }, {
            no: 68,
            name: "WS_SETTINGS_UPDATED"
        }, {
            no: 70,
            name: "BROWSER_PREVIEW_DOM_ELEMENT"
        }, {
            no: 71,
            name: "BROWSER_PREVIEW_CONSOLE_OUTPUT"
        }, {
            no: 74,
            name: "WS_SETTINGS_CHANGED_BY_USER"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.GITHUB_BASE = 1] = "GITHUB_BASE",
            e[e.SLACK_BASE = 2] = "SLACK_BASE",
            e[e.SLACK_AGGREGATE = 3] = "SLACK_AGGREGATE",
            e[e.GOOGLE_DRIVE_BASE = 4] = "GOOGLE_DRIVE_BASE",
            e[e.JIRA_BASE = 5] = "JIRA_BASE",
            e[e.SCM = 6] = "SCM"
        }(mt || (mt = {})),
        ln.util.setEnumType(mt, "exa.codeium_common_pb.IndexChoice", [{
            no: 0,
            name: "INDEX_CHOICE_UNSPECIFIED"
        }, {
            no: 1,
            name: "INDEX_CHOICE_GITHUB_BASE"
        }, {
            no: 2,
            name: "INDEX_CHOICE_SLACK_BASE"
        }, {
            no: 3,
            name: "INDEX_CHOICE_SLACK_AGGREGATE"
        }, {
            no: 4,
            name: "INDEX_CHOICE_GOOGLE_DRIVE_BASE"
        }, {
            no: 5,
            name: "INDEX_CHOICE_JIRA_BASE"
        }, {
            no: 6,
            name: "INDEX_CHOICE_SCM"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.HEADER_1 = 1] = "HEADER_1",
            e[e.HEADER_2 = 2] = "HEADER_2",
            e[e.HEADER_3 = 3] = "HEADER_3",
            e[e.HEADER_4 = 4] = "HEADER_4",
            e[e.HEADER_5 = 5] = "HEADER_5",
            e[e.HEADER_6 = 6] = "HEADER_6"
        }(dt || (dt = {})),
        ln.util.setEnumType(dt, "exa.codeium_common_pb.MarkdownNodeType", [{
            no: 0,
            name: "MARKDOWN_NODE_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "MARKDOWN_NODE_TYPE_HEADER_1"
        }, {
            no: 2,
            name: "MARKDOWN_NODE_TYPE_HEADER_2"
        }, {
            no: 3,
            name: "MARKDOWN_NODE_TYPE_HEADER_3"
        }, {
            no: 4,
            name: "MARKDOWN_NODE_TYPE_HEADER_4"
        }, {
            no: 5,
            name: "MARKDOWN_NODE_TYPE_HEADER_5"
        }, {
            no: 6,
            name: "MARKDOWN_NODE_TYPE_HEADER_6"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.USER = 1] = "USER",
            e[e.CASCADE = 2] = "CASCADE"
        }(ft || (ft = {})),
        ln.util.setEnumType(ft, "exa.codeium_common_pb.TerminalShellCommandSource", [{
            no: 0,
            name: "TERMINAL_SHELL_COMMAND_SOURCE_UNSPECIFIED"
        }, {
            no: 1,
            name: "TERMINAL_SHELL_COMMAND_SOURCE_USER"
        }, {
            no: 2,
            name: "TERMINAL_SHELL_COMMAND_SOURCE_CASCADE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.RUNNING = 1] = "RUNNING",
            e[e.COMPLETED = 2] = "COMPLETED"
        }(Tt || (Tt = {})),
        ln.util.setEnumType(Tt, "exa.codeium_common_pb.TerminalShellCommandStatus", [{
            no: 0,
            name: "TERMINAL_SHELL_COMMAND_STATUS_UNSPECIFIED"
        }, {
            no: 1,
            name: "TERMINAL_SHELL_COMMAND_STATUS_RUNNING"
        }, {
            no: 2,
            name: "TERMINAL_SHELL_COMMAND_STATUS_COMPLETED"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.VERCEL = 1] = "VERCEL",
            e[e.NETLIFY = 2] = "NETLIFY",
            e[e.CLOUDFLARE = 3] = "CLOUDFLARE"
        }(pt || (pt = {})),
        ln.util.setEnumType(pt, "exa.codeium_common_pb.DeploymentProvider", [{
            no: 0,
            name: "DEPLOYMENT_PROVIDER_UNSPECIFIED"
        }, {
            no: 1,
            name: "DEPLOYMENT_PROVIDER_VERCEL"
        }, {
            no: 2,
            name: "DEPLOYMENT_PROVIDER_NETLIFY"
        }, {
            no: 3,
            name: "DEPLOYMENT_PROVIDER_CLOUDFLARE"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.LLAMA_2 = 1] = "LLAMA_2",
            e[e.LLAMA_3 = 2] = "LLAMA_3",
            e[e.CHATML = 3] = "CHATML",
            e[e.CHAT_TRANSCRIPT = 4] = "CHAT_TRANSCRIPT"
        }(St || (St = {})),
        ln.util.setEnumType(St, "exa.codeium_common_pb.PromptTemplaterType", [{
            no: 0,
            name: "PROMPT_TEMPLATER_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "PROMPT_TEMPLATER_TYPE_LLAMA_2"
        }, {
            no: 2,
            name: "PROMPT_TEMPLATER_TYPE_LLAMA_3"
        }, {
            no: 3,
            name: "PROMPT_TEMPLATER_TYPE_CHATML"
        }, {
            no: 4,
            name: "PROMPT_TEMPLATER_TYPE_CHAT_TRANSCRIPT"
        }]),
        function(e) {
            e[e.UNSPECIFIED = 0] = "UNSPECIFIED",
            e[e.LLAMA_3 = 1] = "LLAMA_3",
            e[e.HERMES = 2] = "HERMES",
            e[e.XML = 3] = "XML",
            e[e.CHAT_TRANSCRIPT = 4] = "CHAT_TRANSCRIPT"
        }(Ot || (Ot = {})),
        ln.util.setEnumType(Ot, "exa.codeium_common_pb.ToolFormatterType", [{
            no: 0,
            name: "TOOL_FORMATTER_TYPE_UNSPECIFIED"
        }, {
            no: 1,
            name: "TOOL_FORMATTER_TYPE_LLAMA_3"
        }, {
            no: 2,
            name: "TOOL_FORMATTER_TYPE_HERMES"
        }, {
            no: 3,
            name: "TOOL_FORMATTER_TYPE_XML"
        }, {
            no: 4,
            name: "TOOL_FORMATTER_TYPE_CHAT_TRANSCRIPT"
        }]);
        class At extends H {
            constructor(e) {
                super(),
                this.prompt = "",
                this.contextPrompt = "",
                this.uid = "",
                this.promptElementRanges = [],
                this.promptElementKindInfos = [],
                this.promptLatencyMs = ie.zero,
                this.promptStageLatencies = [],
                this.numTokenizedBytes = ie.zero,
                this.editorLanguage = "",
                this.language = yn.UNSPECIFIED,
                this.absolutePathUriForTelemetry = "",
                this.relativePathForTelemetry = "",
                this.workspaceUriForTelemetry = "",
                this.experimentFeaturesJson = "",
                this.experimentVariantJson = "",
                this.model = pn.MODEL_UNSPECIFIED,
                this.hasLineSuffix = !1,
                this.shouldInlineFim = !1,
                this.modelTag = "",
                this.experimentTags = [],
                this.evalSuffix = "",
                this.promptAnnotationRanges = [],
                this.supportsPackedStreamingCompletionMaps = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new At).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new At).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new At).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(At, e, n)
            }
        }
        At.runtime = ln,
        At.typeName = "exa.codeium_common_pb.CompletionsRequest",
        At.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "configuration",
            kind: "message",
            T: It
        }, {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        }, {
            no: 21,
            name: "context_prompt",
            kind: "scalar",
            T: 9
        }, {
            no: 25,
            name: "uid",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "prompt_element_ranges",
            kind: "message",
            T: ht,
            repeated: !0
        }, {
            no: 9,
            name: "prompt_element_kind_infos",
            kind: "message",
            T: Ft,
            repeated: !0
        }, {
            no: 11,
            name: "prompt_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 12,
            name: "prompt_stage_latencies",
            kind: "message",
            T: xt,
            repeated: !0
        }, {
            no: 20,
            name: "num_tokenized_bytes",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "editor_language",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "language",
            kind: "enum",
            T: ln.getEnumType(yn)
        }, {
            no: 5,
            name: "absolute_path_uri_for_telemetry",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "relative_path_for_telemetry",
            kind: "scalar",
            T: 9
        }, {
            no: 13,
            name: "workspace_uri_for_telemetry",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "experiment_features_json",
            kind: "scalar",
            T: 9
        }, {
            no: 19,
            name: "experiment_variant_json",
            kind: "scalar",
            T: 9
        }, {
            no: 10,
            name: "model",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 14,
            name: "has_line_suffix",
            kind: "scalar",
            T: 8
        }, {
            no: 15,
            name: "should_inline_fim",
            kind: "scalar",
            T: 8
        }, {
            no: 16,
            name: "repository",
            kind: "message",
            T: gr
        }, {
            no: 17,
            name: "model_tag",
            kind: "scalar",
            T: 9
        }, {
            no: 18,
            name: "experiment_tags",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 22,
            name: "eval_suffix",
            kind: "scalar",
            T: 9
        }, {
            no: 23,
            name: "prompt_annotation_ranges",
            kind: "message",
            T: Rt,
            repeated: !0
        }, {
            no: 24,
            name: "supports_packed_streaming_completion_maps",
            kind: "scalar",
            T: 8
        }]));
        class It extends H {
            constructor(e) {
                super(),
                this.numCompletions = ie.zero,
                this.maxTokens = ie.zero,
                this.maxNewlines = ie.zero,
                this.minLogProbability = 0,
                this.temperature = 0,
                this.firstTemperature = 0,
                this.topK = ie.zero,
                this.topP = 0,
                this.stopPatterns = [],
                this.seed = ie.zero,
                this.fimEotProbThreshold = 0,
                this.useFimEotThreshold = !1,
                this.doNotScoreStopTokens = !1,
                this.sqrtLenNormalizedLogProbScore = !1,
                this.lastMessageIsPartial = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new It).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new It).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new It).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(It, e, n)
            }
        }
        It.runtime = ln,
        It.typeName = "exa.codeium_common_pb.CompletionConfiguration",
        It.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "num_completions",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "max_newlines",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "min_log_probability",
            kind: "scalar",
            T: 1
        }, {
            no: 5,
            name: "temperature",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "first_temperature",
            kind: "scalar",
            T: 1
        }, {
            no: 7,
            name: "top_k",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "top_p",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "stop_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 10,
            name: "seed",
            kind: "scalar",
            T: 4
        }, {
            no: 11,
            name: "fim_eot_prob_threshold",
            kind: "scalar",
            T: 1
        }, {
            no: 12,
            name: "use_fim_eot_threshold",
            kind: "scalar",
            T: 8
        }, {
            no: 13,
            name: "do_not_score_stop_tokens",
            kind: "scalar",
            T: 8
        }, {
            no: 14,
            name: "sqrt_len_normalized_log_prob_score",
            kind: "scalar",
            T: 8
        }, {
            no: 15,
            name: "last_message_is_partial",
            kind: "scalar",
            T: 8
        }]));
        class ht extends H {
            constructor(e) {
                super(),
                this.kind = En.UNSPECIFIED,
                this.byteOffsetStart = ie.zero,
                this.byteOffsetEnd = ie.zero,
                this.tokenOffsetStart = ie.zero,
                this.tokenOffsetEnd = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ht).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ht).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ht).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ht, e, n)
            }
        }
        ht.runtime = ln,
        ht.typeName = "exa.codeium_common_pb.PromptElementRange",
        ht.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "kind",
            kind: "enum",
            T: ln.getEnumType(En)
        }, {
            no: 2,
            name: "byte_offset_start",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "byte_offset_end",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "token_offset_start",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "token_offset_end",
            kind: "scalar",
            T: 4
        }]));
        class Lt extends H {
            constructor(e) {
                super(),
                this.cortexPlanId = "",
                this.codePlanId = "",
                this.actionIndex = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Lt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Lt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Lt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Lt, e, n)
            }
        }
        Lt.runtime = ln,
        Lt.typeName = "exa.codeium_common_pb.ActionPointer",
        Lt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "cortex_plan_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "code_plan_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "action_index",
            kind: "scalar",
            T: 5
        }]));
        class Rt extends H {
            constructor(e) {
                super(),
                this.kind = mn.UNSPECIFIED,
                this.byteOffsetStart = ie.zero,
                this.byteOffsetEnd = ie.zero,
                this.suffix = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Rt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Rt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Rt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Rt, e, n)
            }
        }
        Rt.runtime = ln,
        Rt.typeName = "exa.codeium_common_pb.PromptAnnotationRange",
        Rt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "kind",
            kind: "enum",
            T: ln.getEnumType(mn)
        }, {
            no: 2,
            name: "byte_offset_start",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "byte_offset_end",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "suffix",
            kind: "scalar",
            T: 9
        }]));
        class gt extends H {
            constructor(e) {
                super(),
                this.key = dn.UNSPECIFIED,
                this.keyString = "",
                this.disabled = !1,
                this.payload = {
                    case: void 0
                },
                this.source = fn.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new gt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new gt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new gt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(gt, e, n)
            }
        }
        gt.runtime = ln,
        gt.typeName = "exa.codeium_common_pb.ExperimentWithVariant",
        gt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "key",
            kind: "enum",
            T: ln.getEnumType(dn)
        }, {
            no: 5,
            name: "key_string",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "disabled",
            kind: "scalar",
            T: 8
        }, {
            no: 2,
            name: "string",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        }, {
            no: 3,
            name: "json",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        }, {
            no: 4,
            name: "csv",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        }, {
            no: 7,
            name: "source",
            kind: "enum",
            T: ln.getEnumType(fn)
        }]));
        class Pt extends H {
            constructor(e) {
                super(),
                this.experiments = [],
                this.forceEnableExperiments = [],
                this.forceDisableExperiments = [],
                this.forceEnableExperimentsWithVariants = [],
                this.forceEnableExperimentStrings = [],
                this.forceDisableExperimentStrings = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Pt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Pt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Pt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Pt, e, n)
            }
        }
        Pt.runtime = ln,
        Pt.typeName = "exa.codeium_common_pb.ExperimentConfig",
        Pt.fields = ln.util.newFieldList(( () => [{
            no: 6,
            name: "experiments",
            kind: "message",
            T: gt,
            repeated: !0
        }, {
            no: 1,
            name: "force_enable_experiments",
            kind: "enum",
            T: ln.getEnumType(dn),
            repeated: !0
        }, {
            no: 2,
            name: "force_disable_experiments",
            kind: "enum",
            T: ln.getEnumType(dn),
            repeated: !0
        }, {
            no: 3,
            name: "force_enable_experiments_with_variants",
            kind: "message",
            T: gt,
            repeated: !0
        }, {
            no: 4,
            name: "force_enable_experiment_strings",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 5,
            name: "force_disable_experiment_strings",
            kind: "scalar",
            T: 9,
            repeated: !0
        }]));
        class Dt extends H {
            constructor(e) {
                super(),
                this.sha = "",
                this.crc32cLinuxX64 = "",
                this.crc32cLinuxArm = "",
                this.crc32cMacosX64 = "",
                this.crc32cMacosArm = "",
                this.crc32cWindowsX64 = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Dt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Dt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Dt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Dt, e, n)
            }
        }
        Dt.runtime = ln,
        Dt.typeName = "exa.codeium_common_pb.ExperimentLanguageServerVersionPayload",
        Dt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "crc32c_linux_x64",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "crc32c_linux_arm",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "crc32c_macos_x64",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "crc32c_macos_arm",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "crc32c_windows_x64",
            kind: "scalar",
            T: 9
        }]));
        class Mt extends H {
            constructor(e) {
                super(),
                this.modelName = "",
                this.contextCheckModelName = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Mt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Mt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Mt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Mt, e, n)
            }
        }
        Mt.runtime = ln,
        Mt.typeName = "exa.codeium_common_pb.ExperimentModelConfigPayload",
        Mt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "context_check_model_name",
            kind: "scalar",
            T: 9
        }]));
        class yt extends H {
            constructor(e) {
                super(),
                this.modeToken = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new yt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new yt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new yt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(yt, e, n)
            }
        }
        yt.runtime = ln,
        yt.typeName = "exa.codeium_common_pb.ExperimentMiddleModeTokenPayload",
        yt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "mode_token",
            kind: "scalar",
            T: 9
        }]));
        class Ut extends H {
            constructor(e) {
                super(),
                this.threshold = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ut).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ut).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ut).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ut, e, n)
            }
        }
        Ut.runtime = ln,
        Ut.typeName = "exa.codeium_common_pb.ExperimentMultilineModelThresholdPayload",
        Ut.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "threshold",
            kind: "scalar",
            T: 2
        }]));
        class wt extends H {
            constructor(e) {
                super(),
                this.sampleRate = 0,
                this.procedureToSampleRate = {},
                this.errorMatchToSampleRate = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new wt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new wt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new wt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(wt, e, n)
            }
        }
        wt.runtime = ln,
        wt.typeName = "exa.codeium_common_pb.ExperimentSentryPayload",
        wt.fields = ln.util.newFieldList(( () => [{
            no: 2,
            name: "sample_rate",
            kind: "scalar",
            T: 1
        }, {
            no: 3,
            name: "procedure_to_sample_rate",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 1
            }
        }, {
            no: 5,
            name: "error_match_to_sample_rate",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 1
            }
        }]));
        class bt extends H {
            constructor(e) {
                super(),
                this.teamId = "",
                this.cascadeModelLabels = [],
                this.commandModelLabels = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new bt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new bt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new bt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(bt, e, n)
            }
        }
        bt.runtime = ln,
        bt.typeName = "exa.codeium_common_pb.TeamOrganizationalControls",
        bt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "cascade_model_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 3,
            name: "command_model_labels",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 4,
            name: "created_at",
            kind: "message",
            T: Nt
        }, {
            no: 5,
            name: "updated_at",
            kind: "message",
            T: Nt
        }]));
        class kt extends H {
            constructor(e) {
                super(),
                this.memoryUsageToSampleRate = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new kt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new kt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new kt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(kt, e, n)
            }
        }
        kt.runtime = ln,
        kt.typeName = "exa.codeium_common_pb.ExperimentProfilingTelemetrySampleRatePayload",
        kt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "memory_usage_to_sample_rate",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 1
            }
        }]));
        class vt extends H {
            constructor(e) {
                super(),
                this.choice = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new vt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new vt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new vt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(vt, e, n)
            }
        }
        vt.runtime = ln,
        vt.typeName = "exa.codeium_common_pb.ModelOrAlias",
        vt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model",
            kind: "enum",
            T: ln.getEnumType(pn),
            oneof: "choice"
        }, {
            no: 2,
            name: "alias",
            kind: "enum",
            T: ln.getEnumType(Tn),
            oneof: "choice"
        }]));
        class Ft extends H {
            constructor(e) {
                super(),
                this.kind = En.UNSPECIFIED,
                this.experimentKey = dn.UNSPECIFIED,
                this.enabled = !1,
                this.numConsidered = ie.zero,
                this.numIncluded = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ft).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ft).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ft).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ft, e, n)
            }
        }
        Ft.runtime = ln,
        Ft.typeName = "exa.codeium_common_pb.PromptElementKindInfo",
        Ft.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "kind",
            kind: "enum",
            T: ln.getEnumType(En)
        }, {
            no: 2,
            name: "experiment_key",
            kind: "enum",
            T: ln.getEnumType(dn)
        }, {
            no: 3,
            name: "enabled",
            kind: "scalar",
            T: 8
        }, {
            no: 4,
            name: "num_considered",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "num_included",
            kind: "scalar",
            T: 4
        }]));
        class Bt extends H {
            constructor(e) {
                super(),
                this.included = !1,
                this.exclusionReason = Sn.EXCLUSION_UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Bt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Bt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Bt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Bt, e, n)
            }
        }
        Bt.runtime = ln,
        Bt.typeName = "exa.codeium_common_pb.PromptElementInclusionMetadata",
        Bt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "included",
            kind: "scalar",
            T: 8
        }, {
            no: 2,
            name: "exclusion_reason",
            kind: "enum",
            T: ln.getEnumType(Sn)
        }]));
        class xt extends H {
            constructor(e) {
                super(),
                this.name = "",
                this.latencyMs = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new xt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new xt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new xt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(xt, e, n)
            }
        }
        xt.runtime = ln,
        xt.typeName = "exa.codeium_common_pb.PromptStageLatency",
        xt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "latency_ms",
            kind: "scalar",
            T: 4
        }]));
        class Gt extends H {
            constructor(e) {
                super(),
                this.completions = [],
                this.maxTokens = ie.zero,
                this.temperature = 0,
                this.topK = ie.zero,
                this.topP = 0,
                this.stopPatterns = [],
                this.promptLength = ie.zero,
                this.promptId = "",
                this.modelTag = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Gt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Gt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Gt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Gt, e, n)
            }
        }
        Gt.runtime = ln,
        Gt.typeName = "exa.codeium_common_pb.CompletionResponse",
        Gt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completions",
            kind: "message",
            T: Ht,
            repeated: !0
        }, {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "temperature",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "top_k",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "top_p",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "stop_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 7,
            name: "prompt_length",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "prompt_id",
            kind: "scalar",
            T: 9
        }, {
            no: 10,
            name: "model_tag",
            kind: "scalar",
            T: 9
        }, {
            no: 11,
            name: "completion_profile",
            kind: "message",
            T: Xt,
            opt: !0
        }]));
        class Ht extends H {
            constructor(e) {
                super(),
                this.completionId = "",
                this.text = "",
                this.stop = "",
                this.score = 0,
                this.tokens = [],
                this.decodedTokens = [],
                this.probabilities = [],
                this.adjustedProbabilities = [],
                this.generatedLength = ie.zero,
                this.stopReason = On.UNSPECIFIED,
                this.filterReasons = [],
                this.originalText = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ht).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ht).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ht).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ht, e, n)
            }
        }
        Ht.runtime = ln,
        Ht.typeName = "exa.codeium_common_pb.Completion",
        Ht.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completion_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "stop",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "score",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "tokens",
            kind: "scalar",
            T: 4,
            repeated: !0
        }, {
            no: 7,
            name: "decoded_tokens",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 8,
            name: "probabilities",
            kind: "scalar",
            T: 1,
            repeated: !0
        }, {
            no: 9,
            name: "adjusted_probabilities",
            kind: "scalar",
            T: 1,
            repeated: !0
        }, {
            no: 10,
            name: "generated_length",
            kind: "scalar",
            T: 4
        }, {
            no: 12,
            name: "stop_reason",
            kind: "enum",
            T: ln.getEnumType(On)
        }, {
            no: 13,
            name: "filter_reasons",
            kind: "enum",
            T: ln.getEnumType(Nn),
            repeated: !0
        }, {
            no: 14,
            name: "original_text",
            kind: "scalar",
            T: 9
        }]));
        class Jt extends H {
            constructor(e) {
                super(),
                this.completionIds = [],
                this.maxTokens = ie.zero,
                this.temperature = 0,
                this.topK = ie.zero,
                this.topP = 0,
                this.stopPatterns = [],
                this.promptLength = ie.zero,
                this.promptId = "",
                this.modelTag = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Jt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Jt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Jt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Jt, e, n)
            }
        }
        Jt.runtime = ln,
        Jt.typeName = "exa.codeium_common_pb.StreamingCompletionInfo",
        Jt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completion_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "temperature",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "top_k",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "top_p",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "stop_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 7,
            name: "prompt_length",
            kind: "scalar",
            T: 4
        }, {
            no: 9,
            name: "prompt_id",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "model_tag",
            kind: "scalar",
            T: 9
        }, {
            no: 10,
            name: "completions_request",
            kind: "message",
            T: At
        }, {
            no: 11,
            name: "eval_suffix_info",
            kind: "message",
            T: qt
        }]));
        class Vt extends H {
            constructor(e) {
                super(),
                this.totalPrefillPassTime = 0,
                this.avgPrefillPassTime = 0,
                this.numPrefillPasses = ie.zero,
                this.totalSpecCopyPassTime = 0,
                this.avgSpecCopyPassTime = 0,
                this.numSpecCopyPasses = ie.zero,
                this.totalGenerationPassTime = 0,
                this.avgGenerationPassTime = 0,
                this.numGenerationPasses = ie.zero,
                this.totalModelTime = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Vt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Vt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Vt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Vt, e, n)
            }
        }
        Vt.runtime = ln,
        Vt.typeName = "exa.codeium_common_pb.SingleModelCompletionProfile",
        Vt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "total_prefill_pass_time",
            kind: "scalar",
            T: 1
        }, {
            no: 2,
            name: "avg_prefill_pass_time",
            kind: "scalar",
            T: 1
        }, {
            no: 3,
            name: "num_prefill_passes",
            kind: "scalar",
            T: 4
        }, {
            no: 7,
            name: "total_spec_copy_pass_time",
            kind: "scalar",
            T: 1
        }, {
            no: 8,
            name: "avg_spec_copy_pass_time",
            kind: "scalar",
            T: 1
        }, {
            no: 9,
            name: "num_spec_copy_passes",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "total_generation_pass_time",
            kind: "scalar",
            T: 1
        }, {
            no: 5,
            name: "avg_generation_pass_time",
            kind: "scalar",
            T: 1
        }, {
            no: 6,
            name: "num_generation_passes",
            kind: "scalar",
            T: 4
        }, {
            no: 10,
            name: "total_model_time",
            kind: "scalar",
            T: 1
        }]));
        class Xt extends H {
            constructor(e) {
                super(),
                this.timeToFirstPrefillPass = 0,
                this.timeToFirstToken = 0,
                this.totalCompletionTime = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Xt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Xt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Xt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Xt, e, n)
            }
        }
        Xt.runtime = ln,
        Xt.typeName = "exa.codeium_common_pb.CompletionProfile",
        Xt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model_profile",
            kind: "message",
            T: Vt
        }, {
            no: 2,
            name: "draft_model_profile",
            kind: "message",
            T: Vt,
            opt: !0
        }, {
            no: 3,
            name: "time_to_first_prefill_pass",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "time_to_first_token",
            kind: "scalar",
            T: 1
        }, {
            no: 5,
            name: "total_completion_time",
            kind: "scalar",
            T: 1
        }]));
        class Wt extends H {
            constructor(e) {
                super(),
                this.decodedToken = new Uint8Array(0),
                this.token = ie.zero,
                this.probability = 0,
                this.adjustedProbability = 0,
                this.completionFinished = !1,
                this.stop = "",
                this.stopReason = On.UNSPECIFIED,
                this.attributionStatuses = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Wt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Wt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Wt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Wt, e, n)
            }
        }
        Wt.runtime = ln,
        Wt.typeName = "exa.codeium_common_pb.StreamingCompletion",
        Wt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "decoded_token",
            kind: "scalar",
            T: 12
        }, {
            no: 2,
            name: "token",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "probability",
            kind: "scalar",
            T: 1
        }, {
            no: 4,
            name: "adjusted_probability",
            kind: "scalar",
            T: 1
        }, {
            no: 5,
            name: "completion_finished",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "stop",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "stop_reason",
            kind: "enum",
            T: ln.getEnumType(On)
        }, {
            no: 8,
            name: "attribution_statuses",
            kind: "map",
            K: 13,
            V: {
                kind: "enum",
                T: ln.getEnumType(Cn)
            }
        }]));
        class Kt extends H {
            constructor(e) {
                super(),
                this.completions = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Kt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Kt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Kt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Kt, e, n)
            }
        }
        Kt.runtime = ln,
        Kt.typeName = "exa.codeium_common_pb.StreamingCompletionMap",
        Kt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completions",
            kind: "map",
            K: 5,
            V: {
                kind: "message",
                T: Wt
            }
        }]));
        class Yt extends H {
            constructor(e) {
                super(),
                this.completionMaps = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Yt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Yt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Yt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Yt, e, n)
            }
        }
        Yt.runtime = ln,
        Yt.typeName = "exa.codeium_common_pb.PackedStreamingCompletionMaps",
        Yt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completion_maps",
            kind: "message",
            T: Kt,
            repeated: !0
        }]));
        class qt extends H {
            constructor(e) {
                super(),
                this.perTokenLogLikelihoods = [],
                this.isGreedy = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new qt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new qt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new qt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(qt, e, n)
            }
        }
        qt.runtime = ln,
        qt.typeName = "exa.codeium_common_pb.StreamingEvalSuffixInfo",
        qt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "per_token_log_likelihoods",
            kind: "scalar",
            T: 2,
            repeated: !0
        }, {
            no: 2,
            name: "is_greedy",
            kind: "scalar",
            T: 8
        }]));
        class zt extends H {
            constructor(e) {
                super(),
                this.payload = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new zt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new zt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new zt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(zt, e, n)
            }
        }
        zt.runtime = ln,
        zt.typeName = "exa.codeium_common_pb.StreamingCompletionResponse",
        zt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completion_info",
            kind: "message",
            T: Jt,
            oneof: "payload"
        }, {
            no: 2,
            name: "completion_map",
            kind: "message",
            T: Kt,
            oneof: "payload"
        }, {
            no: 4,
            name: "packed_completion_maps",
            kind: "message",
            T: Yt,
            oneof: "payload"
        }, {
            no: 5,
            name: "completion_profile",
            kind: "message",
            T: Xt,
            opt: !0
        }]));
        class jt extends H {
            constructor(e) {
                super(),
                this.apiServerLatencyMs = ie.zero,
                this.languageServerLatencyMs = ie.zero,
                this.networkLatencyMs = ie.zero,
                this.apiServerFirstByteLatencyMs = ie.zero,
                this.languageServerFirstByteLatencyMs = ie.zero,
                this.networkFirstByteLatencyMs = ie.zero,
                this.apiServerFirstLineLatencyMs = ie.zero,
                this.languageServerFirstLineLatencyMs = ie.zero,
                this.networkFirstLineLatencyMs = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new jt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new jt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new jt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(jt, e, n)
            }
        }
        jt.runtime = ln,
        jt.typeName = "exa.codeium_common_pb.CompletionLatencyInfo",
        jt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "api_server_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "language_server_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "network_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "api_server_first_byte_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "language_server_first_byte_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 6,
            name: "network_first_byte_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 7,
            name: "api_server_first_line_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "language_server_first_line_latency_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 9,
            name: "network_first_line_latency_ms",
            kind: "scalar",
            T: 4
        }]));
        class $t extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new $t).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new $t).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new $t).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals($t, e, n)
            }
        }
        $t.runtime = ln,
        $t.typeName = "exa.codeium_common_pb.CompletionWithLatencyInfo",
        $t.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completion",
            kind: "message",
            T: Ht
        }, {
            no: 2,
            name: "latency_info",
            kind: "message",
            T: jt
        }]));
        class Qt extends H {
            constructor(e) {
                super(),
                this.prompts = [],
                this.priority = An.UNSPECIFIED,
                this.prefix = In.UNSPECIFIED,
                this.model = pn.MODEL_UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Qt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Qt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Qt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Qt, e, n)
            }
        }
        Qt.runtime = ln,
        Qt.typeName = "exa.codeium_common_pb.EmbeddingsRequest",
        Qt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "prompts",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 2,
            name: "priority",
            kind: "enum",
            T: ln.getEnumType(An)
        }, {
            no: 3,
            name: "prefix",
            kind: "enum",
            T: ln.getEnumType(In)
        }, {
            no: 4,
            name: "model",
            kind: "enum",
            T: ln.getEnumType(pn)
        }]));
        class Zt extends H {
            constructor(e) {
                super(),
                this.values = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Zt).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Zt).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Zt).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Zt, e, n)
            }
        }
        Zt.runtime = ln,
        Zt.typeName = "exa.codeium_common_pb.Embedding",
        Zt.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "values",
            kind: "scalar",
            T: 2,
            repeated: !0
        }]));
        class er extends H {
            constructor(e) {
                super(),
                this.embeddings = [],
                this.promptsExceededContextLength = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new er).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new er).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new er).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(er, e, n)
            }
        }
        er.runtime = ln,
        er.typeName = "exa.codeium_common_pb.EmbeddingResponse",
        er.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "embeddings",
            kind: "message",
            T: Zt,
            repeated: !0
        }, {
            no: 2,
            name: "prompts_exceeded_context_length",
            kind: "scalar",
            T: 8
        }]));
        class nr extends H {
            constructor(e) {
                super(),
                this.prefix = "",
                this.items = [],
                this.hasInstructTokens = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new nr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new nr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new nr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(nr, e, n)
            }
        }
        nr.runtime = ln,
        nr.typeName = "exa.codeium_common_pb.RewardsRequest",
        nr.fields = ln.util.newFieldList(( () => [{
            no: 2,
            name: "prefix",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "items",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 4,
            name: "has_instruct_tokens",
            kind: "scalar",
            T: 8
        }]));
        class tr extends H {
            constructor(e) {
                super(),
                this.values = [],
                this.promptsExceededContextLength = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new tr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new tr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new tr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(tr, e, n)
            }
        }
        tr.runtime = ln,
        tr.typeName = "exa.codeium_common_pb.RewardsResponse",
        tr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "values",
            kind: "scalar",
            T: 2,
            repeated: !0
        }, {
            no: 2,
            name: "prompts_exceeded_context_length",
            kind: "scalar",
            T: 8
        }]));
        class rr extends H {
            constructor(e) {
                super(),
                this.ideName = "",
                this.ideVersion = "",
                this.extensionName = "",
                this.extensionVersion = "",
                this.apiKey = "",
                this.locale = "",
                this.os = "",
                this.hardware = "",
                this.disableTelemetry = !1,
                this.sessionId = "",
                this.requestId = ie.zero,
                this.sourceAddress = "",
                this.userAgent = "",
                this.url = "",
                this.authSource = Ln.CODEIUM,
                this.extensionPath = "",
                this.userId = "",
                this.userJwt = "",
                this.forceTeamId = "",
                this.windsurfVersion = "",
                this.deviceFingerprint = "",
                this.triggerId = "",
                this.planName = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new rr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new rr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new rr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(rr, e, n)
            }
        }
        rr.runtime = ln,
        rr.typeName = "exa.codeium_common_pb.Metadata",
        rr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "ide_name",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "ide_version",
            kind: "scalar",
            T: 9
        }, {
            no: 12,
            name: "extension_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "extension_version",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "api_key",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "locale",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "os",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "hardware",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "disable_telemetry",
            kind: "scalar",
            T: 8
        }, {
            no: 10,
            name: "session_id",
            kind: "scalar",
            T: 9
        }, {
            no: 16,
            name: "ls_timestamp",
            kind: "message",
            T: Nt
        }, {
            no: 9,
            name: "request_id",
            kind: "scalar",
            T: 4
        }, {
            no: 11,
            name: "source_address",
            kind: "scalar",
            T: 9
        }, {
            no: 13,
            name: "user_agent",
            kind: "scalar",
            T: 9
        }, {
            no: 14,
            name: "url",
            kind: "scalar",
            T: 9
        }, {
            no: 15,
            name: "auth_source",
            kind: "enum",
            T: ln.getEnumType(Ln)
        }, {
            no: 17,
            name: "extension_path",
            kind: "scalar",
            T: 9
        }, {
            no: 20,
            name: "user_id",
            kind: "scalar",
            T: 9
        }, {
            no: 21,
            name: "user_jwt",
            kind: "scalar",
            T: 9
        }, {
            no: 22,
            name: "force_team_id",
            kind: "scalar",
            T: 9
        }, {
            no: 23,
            name: "windsurf_version",
            kind: "scalar",
            T: 9
        }, {
            no: 24,
            name: "device_fingerprint",
            kind: "scalar",
            T: 9
        }, {
            no: 25,
            name: "trigger_id",
            kind: "scalar",
            T: 9
        }, {
            no: 26,
            name: "plan_name",
            kind: "scalar",
            T: 9
        }]));
        class ar extends H {
            constructor(e) {
                super(),
                this.tabSize = ie.zero,
                this.insertSpaces = !1,
                this.disableAutocompleteInComments = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ar).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ar).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ar).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ar, e, n)
            }
        }
        ar.runtime = ln,
        ar.typeName = "exa.codeium_common_pb.EditorOptions",
        ar.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "tab_size",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "insert_spaces",
            kind: "scalar",
            T: 8
        }, {
            no: 3,
            name: "disable_autocomplete_in_comments",
            kind: "scalar",
            T: 8
        }]));
        class or extends H {
            constructor(e) {
                super(),
                this.errorId = "",
                this.timestampUnixMs = ie.zero,
                this.stacktrace = "",
                this.recovered = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new or).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new or).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new or).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(or, e, n)
            }
        }
        or.runtime = ln,
        or.typeName = "exa.codeium_common_pb.ErrorTrace",
        or.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "error_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "timestamp_unix_ms",
            kind: "scalar",
            T: 3
        }, {
            no: 3,
            name: "stacktrace",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "recovered",
            kind: "scalar",
            T: 8
        }]));
        class ir extends H {
            constructor(e) {
                super(),
                this.eventType = Rn.UNSPECIFIED,
                this.eventJson = "",
                this.timestampUnixMs = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ir).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ir).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ir).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ir, e, n)
            }
        }
        ir.runtime = ln,
        ir.typeName = "exa.codeium_common_pb.Event",
        ir.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "event_type",
            kind: "enum",
            T: ln.getEnumType(Rn)
        }, {
            no: 2,
            name: "event_json",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "timestamp_unix_ms",
            kind: "scalar",
            T: 3
        }]));
        class sr extends H {
            constructor(e) {
                super(),
                this.searchId = "",
                this.resultId = "",
                this.absolutePath = "",
                this.workspacePaths = [],
                this.text = "",
                this.similarityScore = 0,
                this.numResultsInCluster = ie.zero,
                this.representativePath = "",
                this.meanSimilarityScore = 0,
                this.searchResultType = gn.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new sr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new sr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new sr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(sr, e, n)
            }
        }
        sr.runtime = ln,
        sr.typeName = "exa.codeium_common_pb.SearchResultRecord",
        sr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "search_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "result_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "workspace_paths",
            kind: "message",
            T: lr,
            repeated: !0
        }, {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "embedding_metadata",
            kind: "message",
            T: ur
        }, {
            no: 7,
            name: "similarity_score",
            kind: "scalar",
            T: 2
        }, {
            no: 8,
            name: "num_results_in_cluster",
            kind: "scalar",
            T: 3
        }, {
            no: 9,
            name: "representative_path",
            kind: "scalar",
            T: 9
        }, {
            no: 10,
            name: "mean_similarity_score",
            kind: "scalar",
            T: 2
        }, {
            no: 11,
            name: "search_result_type",
            kind: "enum",
            T: ln.getEnumType(gn)
        }]));
        class lr extends H {
            constructor(e) {
                super(),
                this.workspaceMigrateMeToUri = "",
                this.workspaceUri = "",
                this.relativePath = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new lr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new lr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new lr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(lr, e, n)
            }
        }
        lr.runtime = ln,
        lr.typeName = "exa.codeium_common_pb.WorkspacePath",
        lr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "workspace_migrate_me_to_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        }]));
        class ur extends H {
            constructor(e) {
                super(),
                this.nodeName = "",
                this.startLine = 0,
                this.endLine = 0,
                this.embedType = Pn.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ur).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ur).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ur).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ur, e, n)
            }
        }
        ur.runtime = ln,
        ur.typeName = "exa.codeium_common_pb.EmbeddingMetadata",
        ur.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "node_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 13
        }, {
            no: 4,
            name: "embed_type",
            kind: "enum",
            T: ln.getEnumType(Pn)
        }]));
        class cr extends H {
            constructor(e) {
                super(),
                this.completions = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new cr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new cr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new cr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(cr, e, n)
            }
        }
        cr.runtime = ln,
        cr.typeName = "exa.codeium_common_pb.MockResponseData",
        cr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "completions",
            kind: "message",
            T: Ht,
            repeated: !0
        }]));
        class _r extends H {
            constructor(e) {
                super(),
                this.workspaceUriForTelemetry = "",
                this.numFilesTotal = ie.zero,
                this.numFilesToEmbed = ie.zero,
                this.numNodesTotal = ie.zero,
                this.numNodesToEmbed = ie.zero,
                this.numTokens = ie.zero,
                this.numHighPriorityNodesToEmbed = ie.zero,
                this.error = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new _r).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new _r).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new _r).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(_r, e, n)
            }
        }
        _r.runtime = ln,
        _r.typeName = "exa.codeium_common_pb.WorkspaceIndexData",
        _r.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "workspace_uri_for_telemetry",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "indexing_start",
            kind: "message",
            T: Nt
        }, {
            no: 3,
            name: "indexing_end",
            kind: "message",
            T: Nt
        }, {
            no: 4,
            name: "embedding_duration",
            kind: "message",
            T: Ct
        }, {
            no: 5,
            name: "num_files_total",
            kind: "scalar",
            T: 3
        }, {
            no: 6,
            name: "num_files_to_embed",
            kind: "scalar",
            T: 3
        }, {
            no: 7,
            name: "num_nodes_total",
            kind: "scalar",
            T: 3
        }, {
            no: 8,
            name: "num_nodes_to_embed",
            kind: "scalar",
            T: 3
        }, {
            no: 9,
            name: "num_tokens",
            kind: "scalar",
            T: 3
        }, {
            no: 10,
            name: "num_high_priority_nodes_to_embed",
            kind: "scalar",
            T: 3
        }, {
            no: 11,
            name: "error",
            kind: "scalar",
            T: 9
        }]));
        class Er extends H {
            constructor(e) {
                super(),
                this.workspace = "",
                this.numFiles = {},
                this.numBytes = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Er).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Er).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Er).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Er, e, n)
            }
        }
        Er.runtime = ln,
        Er.typeName = "exa.codeium_common_pb.WorkspaceStats",
        Er.fields = ln.util.newFieldList(( () => [{
            no: 3,
            name: "workspace",
            kind: "scalar",
            T: 9
        }, {
            no: 1,
            name: "num_files",
            kind: "map",
            K: 5,
            V: {
                kind: "scalar",
                T: 3
            }
        }, {
            no: 2,
            name: "num_bytes",
            kind: "map",
            K: 5,
            V: {
                kind: "scalar",
                T: 3
            }
        }]));
        class mr extends H {
            constructor(e) {
                super(),
                this.numTotalFiles = 0,
                this.numIndexedFiles = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new mr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new mr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new mr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(mr, e, n)
            }
        }
        mr.runtime = ln,
        mr.typeName = "exa.codeium_common_pb.PartialIndexMetadata",
        mr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "num_total_files",
            kind: "scalar",
            T: 13
        }, {
            no: 2,
            name: "num_indexed_files",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "cutoff_timestamp",
            kind: "message",
            T: Nt
        }]));
        class dr extends H {
            constructor(e) {
                super(),
                this.rawSource = "",
                this.cleanFunction = "",
                this.docstring = "",
                this.nodeName = "",
                this.params = "",
                this.definitionLine = 0,
                this.startLine = 0,
                this.endLine = 0,
                this.startCol = 0,
                this.endCol = 0,
                this.leadingWhitespace = "",
                this.language = yn.UNSPECIFIED,
                this.bodyStartLine = 0,
                this.bodyStartCol = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new dr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new dr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new dr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(dr, e, n)
            }
        }
        dr.runtime = ln,
        dr.typeName = "exa.codeium_common_pb.FunctionInfo",
        dr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "raw_source",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "clean_function",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "docstring",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "node_name",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "params",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "definition_line",
            kind: "scalar",
            T: 5
        }, {
            no: 7,
            name: "start_line",
            kind: "scalar",
            T: 5
        }, {
            no: 8,
            name: "end_line",
            kind: "scalar",
            T: 5
        }, {
            no: 9,
            name: "start_col",
            kind: "scalar",
            T: 5
        }, {
            no: 10,
            name: "end_col",
            kind: "scalar",
            T: 5
        }, {
            no: 11,
            name: "leading_whitespace",
            kind: "scalar",
            T: 9
        }, {
            no: 12,
            name: "language",
            kind: "enum",
            T: ln.getEnumType(yn)
        }, {
            no: 13,
            name: "body_start_line",
            kind: "scalar",
            T: 5
        }, {
            no: 14,
            name: "body_start_col",
            kind: "scalar",
            T: 5
        }]));
        class fr extends H {
            constructor(e) {
                super(),
                this.rawSource = "",
                this.startLine = 0,
                this.endLine = 0,
                this.startCol = 0,
                this.endCol = 0,
                this.leadingWhitespace = "",
                this.fieldsAndConstructors = [],
                this.docstring = "",
                this.nodeName = "",
                this.methods = [],
                this.nodeLineage = [],
                this.isExported = !1,
                this.language = yn.UNSPECIFIED,
                this.definitionLine = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new fr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new fr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new fr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(fr, e, n)
            }
        }
        fr.runtime = ln,
        fr.typeName = "exa.codeium_common_pb.ClassInfo",
        fr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "raw_source",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5
        }, {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5
        }, {
            no: 4,
            name: "start_col",
            kind: "scalar",
            T: 5
        }, {
            no: 5,
            name: "end_col",
            kind: "scalar",
            T: 5
        }, {
            no: 6,
            name: "leading_whitespace",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "fields_and_constructors",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 8,
            name: "docstring",
            kind: "scalar",
            T: 9
        }, {
            no: 9,
            name: "node_name",
            kind: "scalar",
            T: 9
        }, {
            no: 10,
            name: "methods",
            kind: "message",
            T: dr,
            repeated: !0
        }, {
            no: 11,
            name: "node_lineage",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 12,
            name: "is_exported",
            kind: "scalar",
            T: 8
        }, {
            no: 13,
            name: "language",
            kind: "enum",
            T: ln.getEnumType(yn)
        }, {
            no: 14,
            name: "definition_line",
            kind: "scalar",
            T: 5
        }]));
        class Tr extends H {
            constructor(e) {
                super(),
                this.label = "",
                this.creditMultiplier = 0,
                this.disabled = !1,
                this.supportsImages = !1,
                this.supportsLegacy = !1,
                this.isPremium = !1,
                this.betaWarningMessage = "",
                this.isBeta = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Tr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Tr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Tr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Tr, e, n)
            }
        }
        Tr.runtime = ln,
        Tr.typeName = "exa.codeium_common_pb.ClientModelConfig",
        Tr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "model_or_alias",
            kind: "message",
            T: vt
        }, {
            no: 3,
            name: "credit_multiplier",
            kind: "scalar",
            T: 2
        }, {
            no: 4,
            name: "disabled",
            kind: "scalar",
            T: 8
        }, {
            no: 5,
            name: "supports_images",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "supports_legacy",
            kind: "scalar",
            T: 8
        }, {
            no: 7,
            name: "is_premium",
            kind: "scalar",
            T: 8
        }, {
            no: 8,
            name: "beta_warning_message",
            kind: "scalar",
            T: 9
        }, {
            no: 9,
            name: "is_beta",
            kind: "scalar",
            T: 8
        }]));
        class pr extends H {
            constructor(e) {
                super(),
                this.creditMultiplier = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new pr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new pr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new pr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(pr, e, n)
            }
        }
        pr.runtime = ln,
        pr.typeName = "exa.codeium_common_pb.AllowedModelConfig",
        pr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model_or_alias",
            kind: "message",
            T: vt
        }, {
            no: 2,
            name: "credit_multiplier",
            kind: "scalar",
            T: 2
        }]));
        class Sr extends H {
            constructor(e) {
                super(),
                this.teamsTier = Fn.UNSPECIFIED,
                this.planName = "",
                this.hasAutocompleteFastMode = !1,
                this.allowStickyPremiumModels = !1,
                this.hasForgeAccess = !1,
                this.disableCodeSnippetTelemetry = !1,
                this.allowPremiumCommandModels = !1,
                this.hasTabToJump = !1,
                this.maxNumPremiumChatMessages = ie.zero,
                this.maxNumChatInputTokens = ie.zero,
                this.maxCustomChatInstructionCharacters = ie.zero,
                this.maxNumPinnedContextItems = ie.zero,
                this.maxLocalIndexSize = ie.zero,
                this.monthlyPromptCredits = 0,
                this.monthlyFlowCredits = 0,
                this.monthlyFlexCreditPurchaseAmount = 0,
                this.isTeams = !1,
                this.isEnterprise = !1,
                this.canBuyMoreCredits = !1,
                this.cascadeWebSearchEnabled = !1,
                this.canCustomizeAppIcon = !1,
                this.cascadeCanAutoRunCommands = !1,
                this.cascadeAllowedModelsConfig = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Sr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Sr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Sr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Sr, e, n)
            }
        }
        Sr.runtime = ln,
        Sr.typeName = "exa.codeium_common_pb.PlanInfo",
        Sr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "teams_tier",
            kind: "enum",
            T: ln.getEnumType(Fn)
        }, {
            no: 2,
            name: "plan_name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "has_autocomplete_fast_mode",
            kind: "scalar",
            T: 8
        }, {
            no: 4,
            name: "allow_sticky_premium_models",
            kind: "scalar",
            T: 8
        }, {
            no: 5,
            name: "has_forge_access",
            kind: "scalar",
            T: 8
        }, {
            no: 11,
            name: "disable_code_snippet_telemetry",
            kind: "scalar",
            T: 8
        }, {
            no: 15,
            name: "allow_premium_command_models",
            kind: "scalar",
            T: 8
        }, {
            no: 23,
            name: "has_tab_to_jump",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "max_num_premium_chat_messages",
            kind: "scalar",
            T: 3
        }, {
            no: 7,
            name: "max_num_chat_input_tokens",
            kind: "scalar",
            T: 3
        }, {
            no: 8,
            name: "max_custom_chat_instruction_characters",
            kind: "scalar",
            T: 3
        }, {
            no: 9,
            name: "max_num_pinned_context_items",
            kind: "scalar",
            T: 3
        }, {
            no: 10,
            name: "max_local_index_size",
            kind: "scalar",
            T: 3
        }, {
            no: 12,
            name: "monthly_prompt_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 13,
            name: "monthly_flow_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 14,
            name: "monthly_flex_credit_purchase_amount",
            kind: "scalar",
            T: 5
        }, {
            no: 17,
            name: "is_teams",
            kind: "scalar",
            T: 8
        }, {
            no: 16,
            name: "is_enterprise",
            kind: "scalar",
            T: 8
        }, {
            no: 18,
            name: "can_buy_more_credits",
            kind: "scalar",
            T: 8
        }, {
            no: 19,
            name: "cascade_web_search_enabled",
            kind: "scalar",
            T: 8
        }, {
            no: 20,
            name: "can_customize_app_icon",
            kind: "scalar",
            T: 8
        }, {
            no: 22,
            name: "cascade_can_auto_run_commands",
            kind: "scalar",
            T: 8
        }, {
            no: 21,
            name: "cascade_allowed_models_config",
            kind: "message",
            T: pr,
            repeated: !0
        }, {
            no: 24,
            name: "default_team_config",
            kind: "message",
            T: oo
        }]));
        class Or extends H {
            constructor(e) {
                super(),
                this.availablePromptCredits = 0,
                this.availableFlowCredits = 0,
                this.availableFlexCredits = 0,
                this.usedFlexCredits = 0,
                this.usedFlowCredits = 0,
                this.usedPromptCredits = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Or).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Or).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Or).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Or, e, n)
            }
        }
        Or.runtime = ln,
        Or.typeName = "exa.codeium_common_pb.PlanStatus",
        Or.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "plan_info",
            kind: "message",
            T: Sr
        }, {
            no: 2,
            name: "plan_start",
            kind: "message",
            T: Nt
        }, {
            no: 3,
            name: "plan_end",
            kind: "message",
            T: Nt
        }, {
            no: 8,
            name: "available_prompt_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 9,
            name: "available_flow_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 4,
            name: "available_flex_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 7,
            name: "used_flex_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 5,
            name: "used_flow_credits",
            kind: "scalar",
            T: 5
        }, {
            no: 6,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 5
        }]));
        class Nr extends H {
            constructor(e) {
                super(),
                this.pro = !1,
                this.disableTelemetry = !1,
                this.name = "",
                this.ignoreChatTelemetrySetting = !1,
                this.teamId = "",
                this.teamStatus = wn.UNSPECIFIED,
                this.email = "",
                this.userFeatures = [],
                this.teamsFeatures = [],
                this.permissions = [],
                this.hasUsedWindsurf = !1,
                this.userUsedPromptCredits = ie.zero,
                this.userUsedFlowCredits = ie.zero,
                this.hasFingerprintSet = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Nr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Nr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Nr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Nr, e, n)
            }
        }
        Nr.runtime = ln,
        Nr.typeName = "exa.codeium_common_pb.UserStatus",
        Nr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "pro",
            kind: "scalar",
            T: 8
        }, {
            no: 2,
            name: "disable_telemetry",
            kind: "scalar",
            T: 8
        }, {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "ignore_chat_telemetry_setting",
            kind: "scalar",
            T: 8
        }, {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "team_status",
            kind: "enum",
            T: ln.getEnumType(wn)
        }, {
            no: 7,
            name: "email",
            kind: "scalar",
            T: 9
        }, {
            no: 9,
            name: "user_features",
            kind: "enum",
            T: ln.getEnumType(kn),
            repeated: !0
        }, {
            no: 8,
            name: "teams_features",
            kind: "enum",
            T: ln.getEnumType(bn),
            repeated: !0
        }, {
            no: 11,
            name: "permissions",
            kind: "enum",
            T: ln.getEnumType(vn),
            repeated: !0
        }, {
            no: 12,
            name: "plan_info",
            kind: "message",
            T: Sr
        }, {
            no: 13,
            name: "plan_status",
            kind: "message",
            T: Or
        }, {
            no: 31,
            name: "has_used_windsurf",
            kind: "scalar",
            T: 8
        }, {
            no: 28,
            name: "user_used_prompt_credits",
            kind: "scalar",
            T: 3
        }, {
            no: 29,
            name: "user_used_flow_credits",
            kind: "scalar",
            T: 3
        }, {
            no: 30,
            name: "has_fingerprint_set",
            kind: "scalar",
            T: 8
        }, {
            no: 32,
            name: "team_config",
            kind: "message",
            T: oo
        }]));
        class Cr extends H {
            constructor(e) {
                super(),
                this.info = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Cr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Cr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Cr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Cr, e, n)
            }
        }
        Cr.runtime = ln,
        Cr.typeName = "exa.codeium_common_pb.ScmWorkspaceInfo",
        Cr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "perforce_info",
            kind: "message",
            T: Ar,
            oneof: "info"
        }, {
            no: 2,
            name: "git_info",
            kind: "message",
            T: Ir,
            oneof: "info"
        }]));
        class Ar extends H {
            constructor(e) {
                super(),
                this.depotName = "",
                this.versionAlias = "",
                this.baseP4dUrl = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ar).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ar).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ar).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ar, e, n)
            }
        }
        Ar.runtime = ln,
        Ar.typeName = "exa.codeium_common_pb.PerforceDepotInfo",
        Ar.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "depot_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "version_alias",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "base_p4d_url",
            kind: "scalar",
            T: 9
        }]));
        class Ir extends H {
            constructor(e) {
                super(),
                this.name = "",
                this.owner = "",
                this.repoName = "",
                this.commit = "",
                this.versionAlias = "",
                this.scmProvider = Bn.UNSPECIFIED,
                this.baseGitUrl = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ir).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ir).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ir).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ir, e, n)
            }
        }
        Ir.runtime = ln,
        Ir.typeName = "exa.codeium_common_pb.GitRepoInfo",
        Ir.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "owner",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "commit",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "version_alias",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "scm_provider",
            kind: "enum",
            T: ln.getEnumType(Bn)
        }, {
            no: 7,
            name: "base_git_url",
            kind: "scalar",
            T: 9
        }]));
        class hr extends H {
            constructor(e) {
                super(),
                this.absolutePathMigrateMeToUri = "",
                this.absoluteUri = "",
                this.workspacePaths = [],
                this.nodeName = "",
                this.nodeLineage = [],
                this.startLine = 0,
                this.startCol = 0,
                this.endLine = 0,
                this.endCol = 0,
                this.contextType = Gn.UNSPECIFIED,
                this.language = yn.UNSPECIFIED,
                this.snippetByType = {},
                this.fileContentHash = new Uint8Array(0),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new hr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new hr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new hr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(hr, e, n)
            }
        }
        hr.runtime = ln,
        hr.typeName = "exa.codeium_common_pb.CodeContextItem",
        hr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "absolute_path_migrate_me_to_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 16,
            name: "absolute_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "workspace_paths",
            kind: "message",
            T: lr,
            repeated: !0
        }, {
            no: 3,
            name: "node_name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "node_lineage",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 5,
            name: "start_line",
            kind: "scalar",
            T: 13
        }, {
            no: 12,
            name: "start_col",
            kind: "scalar",
            T: 13
        }, {
            no: 6,
            name: "end_line",
            kind: "scalar",
            T: 13
        }, {
            no: 13,
            name: "end_col",
            kind: "scalar",
            T: 13
        }, {
            no: 7,
            name: "context_type",
            kind: "enum",
            T: ln.getEnumType(Gn)
        }, {
            no: 10,
            name: "language",
            kind: "enum",
            T: ln.getEnumType(yn)
        }, {
            no: 11,
            name: "snippet_by_type",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Lr
            }
        }, {
            no: 14,
            name: "repo_info",
            kind: "message",
            T: Ir
        }, {
            no: 15,
            name: "file_content_hash",
            kind: "scalar",
            T: 12
        }]));
        class Lr extends H {
            constructor(e) {
                super(),
                this.snippet = "",
                this.wordCountBySplitter = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Lr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Lr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Lr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Lr, e, n)
            }
        }
        Lr.runtime = ln,
        Lr.typeName = "exa.codeium_common_pb.SnippetWithWordCount",
        Lr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "snippet",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "word_count_by_splitter",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Rr
            }
        }]));
        class Rr extends H {
            constructor(e) {
                super(),
                this.wordCountMap = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Rr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Rr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Rr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Rr, e, n)
            }
        }
        Rr.runtime = ln,
        Rr.typeName = "exa.codeium_common_pb.WordCount",
        Rr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "word_count_map",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 3
            }
        }]));
        class gr extends H {
            constructor(e) {
                super(),
                this.computedName = "",
                this.gitOriginUrl = "",
                this.gitUpstreamUrl = "",
                this.reportedName = "",
                this.modelName = "",
                this.submoduleUrl = "",
                this.submodulePath = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new gr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new gr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new gr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(gr, e, n)
            }
        }
        gr.runtime = ln,
        gr.typeName = "exa.codeium_common_pb.Repository",
        gr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "computed_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "git_origin_url",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "git_upstream_url",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "reported_name",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "model_name",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "submodule_url",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "submodule_path",
            kind: "scalar",
            T: 9
        }]));
        class Pr extends H {
            constructor(e) {
                super(),
                this.promptId = "",
                this.filePath = "",
                this.originalFileContent = "",
                this.completionText = "",
                this.startOffset = ie.zero,
                this.endOffset = ie.zero,
                this.cursorLine = ie.zero,
                this.cursorColumn = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Pr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Pr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Pr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Pr, e, n)
            }
        }
        Pr.runtime = ln,
        Pr.typeName = "exa.codeium_common_pb.CaptureFileRequestData",
        Pr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "metadata",
            kind: "message",
            T: rr
        }, {
            no: 2,
            name: "prompt_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "original_file_content",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "completion_text",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "start_offset",
            kind: "scalar",
            T: 4
        }, {
            no: 7,
            name: "end_offset",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "cursor_line",
            kind: "scalar",
            T: 4
        }, {
            no: 9,
            name: "cursor_column",
            kind: "scalar",
            T: 4
        }]));
        class Dr extends H {
            constructor(e) {
                super(),
                this.numAcceptances = 0,
                this.numRejections = 0,
                this.numLinesAccepted = 0,
                this.numBytesAccepted = 0,
                this.numUsers = 0,
                this.activeDeveloperDays = 0,
                this.activeDeveloperHours = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Dr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Dr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Dr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Dr, e, n)
            }
        }
        Dr.runtime = ln,
        Dr.typeName = "exa.codeium_common_pb.CompletionStatistics",
        Dr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "num_acceptances",
            kind: "scalar",
            T: 13
        }, {
            no: 2,
            name: "num_rejections",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "num_lines_accepted",
            kind: "scalar",
            T: 13
        }, {
            no: 4,
            name: "num_bytes_accepted",
            kind: "scalar",
            T: 13
        }, {
            no: 5,
            name: "num_users",
            kind: "scalar",
            T: 13
        }, {
            no: 6,
            name: "active_developer_days",
            kind: "scalar",
            T: 13
        }, {
            no: 7,
            name: "active_developer_hours",
            kind: "scalar",
            T: 13
        }]));
        class Mr extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Mr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Mr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Mr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Mr, e, n)
            }
        }
        Mr.runtime = ln,
        Mr.typeName = "exa.codeium_common_pb.CompletionByDateEntry",
        Mr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nt
        }, {
            no: 2,
            name: "completion_statistics",
            kind: "message",
            T: Dr
        }]));
        class yr extends H {
            constructor(e) {
                super(),
                this.language = yn.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new yr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new yr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new yr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(yr, e, n)
            }
        }
        yr.runtime = ln,
        yr.typeName = "exa.codeium_common_pb.CompletionByLanguageEntry",
        yr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "language",
            kind: "enum",
            T: ln.getEnumType(yn)
        }, {
            no: 2,
            name: "completion_statistics",
            kind: "message",
            T: Dr
        }]));
        class Ur extends H {
            constructor(e) {
                super(),
                this.chatsSent = ie.zero,
                this.chatsReceived = ie.zero,
                this.chatsAccepted = ie.zero,
                this.chatsInsertedAtCursor = ie.zero,
                this.chatsApplied = ie.zero,
                this.chatLocUsed = ie.zero,
                this.chatCodeBlocksUsed = ie.zero,
                this.functionExplainCount = ie.zero,
                this.functionDocstringCount = ie.zero,
                this.functionRefactorCount = ie.zero,
                this.codeBlockExplainCount = ie.zero,
                this.codeBlockRefactorCount = ie.zero,
                this.problemExplainCount = ie.zero,
                this.functionUnitTestsCount = ie.zero,
                this.activeDeveloperDays = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ur).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ur).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ur).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ur, e, n)
            }
        }
        Ur.runtime = ln,
        Ur.typeName = "exa.codeium_common_pb.ChatStats",
        Ur.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "chats_sent",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "chats_received",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "chats_accepted",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "chats_inserted_at_cursor",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "chats_applied",
            kind: "scalar",
            T: 4
        }, {
            no: 6,
            name: "chat_loc_used",
            kind: "scalar",
            T: 4
        }, {
            no: 7,
            name: "chat_code_blocks_used",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "function_explain_count",
            kind: "scalar",
            T: 4
        }, {
            no: 9,
            name: "function_docstring_count",
            kind: "scalar",
            T: 4
        }, {
            no: 10,
            name: "function_refactor_count",
            kind: "scalar",
            T: 4
        }, {
            no: 11,
            name: "code_block_explain_count",
            kind: "scalar",
            T: 4
        }, {
            no: 12,
            name: "code_block_refactor_count",
            kind: "scalar",
            T: 4
        }, {
            no: 13,
            name: "problem_explain_count",
            kind: "scalar",
            T: 4
        }, {
            no: 14,
            name: "function_unit_tests_count",
            kind: "scalar",
            T: 4
        }, {
            no: 15,
            name: "active_developer_days",
            kind: "scalar",
            T: 13
        }]));
        class wr extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new wr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new wr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new wr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(wr, e, n)
            }
        }
        wr.runtime = ln,
        wr.typeName = "exa.codeium_common_pb.ChatStatsByDateEntry",
        wr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nt
        }, {
            no: 2,
            name: "chat_stats",
            kind: "message",
            T: Ur
        }]));
        class br extends H {
            constructor(e) {
                super(),
                this.modelId = pn.MODEL_UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new br).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new br).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new br).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(br, e, n)
            }
        }
        br.runtime = ln,
        br.typeName = "exa.codeium_common_pb.ChatStatsByModelEntry",
        br.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model_id",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 2,
            name: "chat_stats",
            kind: "message",
            T: Ur
        }]));
        class kr extends H {
            constructor(e) {
                super(),
                this.numCommands = ie.zero,
                this.numCommandsAccepted = ie.zero,
                this.numCommandsRejected = ie.zero,
                this.numEdits = ie.zero,
                this.numGenerations = ie.zero,
                this.locAdded = ie.zero,
                this.locRemoved = ie.zero,
                this.bytesAdded = ie.zero,
                this.bytesRemoved = ie.zero,
                this.locSelected = ie.zero,
                this.bytesSelected = ie.zero,
                this.numCommandsBySource = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new kr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new kr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new kr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(kr, e, n)
            }
        }
        kr.runtime = ln,
        kr.typeName = "exa.codeium_common_pb.CommandStats",
        kr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "num_commands",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "num_commands_accepted",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "num_commands_rejected",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "num_edits",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "num_generations",
            kind: "scalar",
            T: 4
        }, {
            no: 6,
            name: "loc_added",
            kind: "scalar",
            T: 4
        }, {
            no: 7,
            name: "loc_removed",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "bytes_added",
            kind: "scalar",
            T: 4
        }, {
            no: 9,
            name: "bytes_removed",
            kind: "scalar",
            T: 4
        }, {
            no: 10,
            name: "loc_selected",
            kind: "scalar",
            T: 4
        }, {
            no: 11,
            name: "bytes_selected",
            kind: "scalar",
            T: 4
        }, {
            no: 12,
            name: "num_commands_by_source",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 4
            }
        }]));
        class vr extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new vr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new vr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new vr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(vr, e, n)
            }
        }
        vr.runtime = ln,
        vr.typeName = "exa.codeium_common_pb.CommandStatsByDateEntry",
        vr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Nt
        }, {
            no: 2,
            name: "command_stats",
            kind: "message",
            T: kr
        }]));
        class Fr extends H {
            constructor(e) {
                super(),
                this.name = "",
                this.email = "",
                this.apiKey = "",
                this.disableCodeium = !1,
                this.activeDays = 0,
                this.role = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Fr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Fr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Fr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Fr, e, n)
            }
        }
        Fr.runtime = ln,
        Fr.typeName = "exa.codeium_common_pb.UserTableStats",
        Fr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "last_update_time",
            kind: "message",
            T: Nt
        }, {
            no: 4,
            name: "api_key",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "disable_codeium",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "active_days",
            kind: "scalar",
            T: 13
        }, {
            no: 7,
            name: "role",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "signup_time",
            kind: "message",
            T: Nt
        }, {
            no: 9,
            name: "last_autocomplete_usage_time",
            kind: "message",
            T: Nt
        }, {
            no: 10,
            name: "last_chat_usage_time",
            kind: "message",
            T: Nt
        }, {
            no: 11,
            name: "last_command_usage_time",
            kind: "message",
            T: Nt
        }]));
        class Br extends H {
            constructor(e) {
                super(),
                this.event = Qn.CASCADE_NUX_EVENT_UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Br).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Br).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Br).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Br, e, n)
            }
        }
        Br.runtime = ln,
        Br.typeName = "exa.codeium_common_pb.CascadeNUXState",
        Br.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "event",
            kind: "enum",
            T: ln.getEnumType(Qn)
        }, {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: Nt
        }]));
        class xr extends H {
            constructor(e) {
                super(),
                this.event = Zn.USER_NUX_EVENT_UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new xr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new xr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new xr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(xr, e, n)
            }
        }
        xr.runtime = ln,
        xr.typeName = "exa.codeium_common_pb.UserNUXState",
        xr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "event",
            kind: "enum",
            T: ln.getEnumType(Zn)
        }, {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: Nt
        }]));
        class Gr extends H {
            constructor(e) {
                super(),
                this.openMostRecentChatConversation = !1,
                this.lastSelectedModel = pn.MODEL_UNSPECIFIED,
                this.themePreference = Kn.UNSPECIFIED,
                this.extensionPanelTab = jn.UNSPECIFIED,
                this.fontSize = Yn.UNSPECIFIED,
                this.rememberLastModelSelection = $n.UNSPECIFIED,
                this.autocompleteSpeed = qn.UNSPECIFIED,
                this.lastSelectedModelName = "",
                this.cascadeNuxStates = [],
                this.cascadeAllowedCommands = [],
                this.cascadeDeniedCommands = [],
                this.userNuxStates = [],
                this.cascadeWebSearchDisabled = !1,
                this.disableAutocomplete = !1,
                this.disableSupercomplete = !1,
                this.disableSelectionPopup = !1,
                this.disableExplainProblemInlayHint = !1,
                this.disableInlayHintShortcuts = !1,
                this.disableOpenCascadeOnReload = !1,
                this.disableAutoOpenEditedFiles = !1,
                this.disableTabToJump = !1,
                this.cascadeAutoExecutionPolicy = zn.UNSPECIFIED,
                this.explainAndFixInCurrentConversation = !1,
                this.allowCascadeAccessGitignoreFiles = !1,
                this.disableCascadeAutoFixLints = !1,
                this.disableCascadeBrowserPreviews = !1,
                this.detectProxy = !1,
                this.disableTabToImport = !1,
                this.useClipboardForCompletions = !1,
                this.disableHighlightAfterAccept = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Gr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Gr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Gr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Gr, e, n)
            }
        }
        Gr.runtime = ln,
        Gr.typeName = "exa.codeium_common_pb.UserSettings",
        Gr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "open_most_recent_chat_conversation",
            kind: "scalar",
            T: 8
        }, {
            no: 2,
            name: "last_selected_model",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 3,
            name: "theme_preference",
            kind: "enum",
            T: ln.getEnumType(Kn)
        }, {
            no: 4,
            name: "extension_panel_tab",
            kind: "enum",
            T: ln.getEnumType(jn)
        }, {
            no: 5,
            name: "font_size",
            kind: "enum",
            T: ln.getEnumType(Yn)
        }, {
            no: 7,
            name: "remember_last_model_selection",
            kind: "enum",
            T: ln.getEnumType($n)
        }, {
            no: 6,
            name: "autocomplete_speed",
            kind: "enum",
            T: ln.getEnumType(qn)
        }, {
            no: 8,
            name: "last_selected_model_name",
            kind: "scalar",
            T: 9
        }, {
            no: 11,
            name: "cascade_nux_states",
            kind: "message",
            T: Br,
            repeated: !0
        }, {
            no: 9,
            name: "last_selected_cascade_model",
            kind: "enum",
            T: ln.getEnumType(pn),
            opt: !0
        }, {
            no: 30,
            name: "last_selected_cascade_model_or_alias",
            kind: "message",
            T: vt,
            opt: !0
        }, {
            no: 13,
            name: "cascade_planner_mode",
            kind: "enum",
            T: ln.getEnumType(et),
            opt: !0
        }, {
            no: 14,
            name: "cascade_allowed_commands",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 15,
            name: "cascade_denied_commands",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 17,
            name: "user_nux_states",
            kind: "message",
            T: xr,
            repeated: !0
        }, {
            no: 18,
            name: "cascade_web_search_disabled",
            kind: "scalar",
            T: 8
        }, {
            no: 19,
            name: "disable_autocomplete",
            kind: "scalar",
            T: 8
        }, {
            no: 20,
            name: "disable_supercomplete",
            kind: "scalar",
            T: 8
        }, {
            no: 21,
            name: "disable_selection_popup",
            kind: "scalar",
            T: 8
        }, {
            no: 22,
            name: "disable_explain_problem_inlay_hint",
            kind: "scalar",
            T: 8
        }, {
            no: 23,
            name: "disable_inlay_hint_shortcuts",
            kind: "scalar",
            T: 8
        }, {
            no: 24,
            name: "disable_open_cascade_on_reload",
            kind: "scalar",
            T: 8
        }, {
            no: 25,
            name: "disable_auto_open_edited_files",
            kind: "scalar",
            T: 8
        }, {
            no: 26,
            name: "disable_tab_to_jump",
            kind: "scalar",
            T: 8
        }, {
            no: 27,
            name: "cascade_auto_execution_policy",
            kind: "enum",
            T: ln.getEnumType(zn)
        }, {
            no: 28,
            name: "last_selected_cascade_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }, {
            no: 29,
            name: "explain_and_fix_in_current_conversation",
            kind: "scalar",
            T: 8
        }, {
            no: 31,
            name: "allow_cascade_access_gitignore_files",
            kind: "scalar",
            T: 8
        }, {
            no: 32,
            name: "disable_cascade_auto_fix_lints",
            kind: "scalar",
            T: 8
        }, {
            no: 33,
            name: "disable_cascade_browser_previews",
            kind: "scalar",
            T: 8
        }, {
            no: 34,
            name: "detect_proxy",
            kind: "scalar",
            T: 8
        }, {
            no: 35,
            name: "disable_tab_to_import",
            kind: "scalar",
            T: 8
        }, {
            no: 36,
            name: "use_clipboard_for_completions",
            kind: "scalar",
            T: 8
        }, {
            no: 37,
            name: "disable_highlight_after_accept",
            kind: "scalar",
            T: 8
        }]));
        class Hr extends H {
            constructor(e) {
                super(),
                this.supportsContextTokens = !1,
                this.requiresInstructTags = !1,
                this.requiresFimContext = !1,
                this.requiresContextSnippetPrefix = !1,
                this.requiresContextRelevanceTags = !1,
                this.requiresLlama3Tokens = !1,
                this.zeroShotCapable = !1,
                this.requiresAutocompleteAsCommand = !1,
                this.supportsCursorAwareSupercomplete = !1,
                this.supportsImages = !1,
                this.supportsToolCalls = !1,
                this.supportsCumulativeContext = !1,
                this.tabJumpPrintLineRange = !1,
                this.supportsThinking = !1,
                this.supportsEstimateTokenizer = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Hr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Hr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Hr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Hr, e, n)
            }
        }
        Hr.runtime = ln,
        Hr.typeName = "exa.codeium_common_pb.ModelFeatures",
        Hr.fields = ln.util.newFieldList(( () => [{
            no: 2,
            name: "supports_context_tokens",
            kind: "scalar",
            T: 8
        }, {
            no: 3,
            name: "requires_instruct_tags",
            kind: "scalar",
            T: 8
        }, {
            no: 4,
            name: "requires_fim_context",
            kind: "scalar",
            T: 8
        }, {
            no: 5,
            name: "requires_context_snippet_prefix",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "requires_context_relevance_tags",
            kind: "scalar",
            T: 8
        }, {
            no: 7,
            name: "requires_llama3_tokens",
            kind: "scalar",
            T: 8
        }, {
            no: 8,
            name: "zero_shot_capable",
            kind: "scalar",
            T: 8
        }, {
            no: 9,
            name: "requires_autocomplete_as_command",
            kind: "scalar",
            T: 8
        }, {
            no: 10,
            name: "supports_cursor_aware_supercomplete",
            kind: "scalar",
            T: 8
        }, {
            no: 11,
            name: "supports_images",
            kind: "scalar",
            T: 8
        }, {
            no: 12,
            name: "supports_tool_calls",
            kind: "scalar",
            T: 8
        }, {
            no: 13,
            name: "supports_cumulative_context",
            kind: "scalar",
            T: 8
        }, {
            no: 14,
            name: "tab_jump_print_line_range",
            kind: "scalar",
            T: 8
        }, {
            no: 15,
            name: "supports_thinking",
            kind: "scalar",
            T: 8
        }, {
            no: 16,
            name: "supports_estimate_tokenizer",
            kind: "scalar",
            T: 8
        }]));
        class Jr extends H {
            constructor(e) {
                super(),
                this.isInternal = !1,
                this.modelId = pn.MODEL_UNSPECIFIED,
                this.modelName = "",
                this.baseUrl = "",
                this.apiKey = "",
                this.accessKey = "",
                this.secretAccessKey = "",
                this.region = "",
                this.projectId = "",
                this.id = 0,
                this.maxCompletionTokens = 0,
                this.maxInputTokens = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Jr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Jr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Jr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Jr, e, n)
            }
        }
        Jr.runtime = ln,
        Jr.typeName = "exa.codeium_common_pb.ExternalModel",
        Jr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "is_internal",
            kind: "scalar",
            T: 8
        }, {
            no: 2,
            name: "model_id",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "base_url",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "api_key",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "access_key",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "secret_access_key",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "region",
            kind: "scalar",
            T: 9
        }, {
            no: 9,
            name: "project_id",
            kind: "scalar",
            T: 9
        }, {
            no: 10,
            name: "id",
            kind: "scalar",
            T: 13
        }, {
            no: 11,
            name: "max_completion_tokens",
            kind: "scalar",
            T: 5
        }, {
            no: 12,
            name: "max_input_tokens",
            kind: "scalar",
            T: 5
        }]));
        class Vr extends H {
            constructor(e) {
                super(),
                this.modelId = pn.MODEL_UNSPECIFIED,
                this.isInternal = !1,
                this.modelType = nt.UNSPECIFIED,
                this.maxTokens = 0,
                this.tokenizerType = "",
                this.apiProvider = tt.API_PROVIDER_UNSPECIFIED,
                this.modelName = "",
                this.supportsContext = !1,
                this.embedDim = 0,
                this.baseUrl = "",
                this.chatModelName = "",
                this.maxOutputTokens = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Vr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Vr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Vr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Vr, e, n)
            }
        }
        Vr.runtime = ln,
        Vr.typeName = "exa.codeium_common_pb.ModelInfo",
        Vr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model_id",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 2,
            name: "is_internal",
            kind: "scalar",
            T: 8
        }, {
            no: 3,
            name: "model_type",
            kind: "enum",
            T: ln.getEnumType(nt)
        }, {
            no: 4,
            name: "max_tokens",
            kind: "scalar",
            T: 5
        }, {
            no: 5,
            name: "tokenizer_type",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "model_features",
            kind: "message",
            T: Hr
        }, {
            no: 7,
            name: "api_provider",
            kind: "enum",
            T: ln.getEnumType(tt)
        }, {
            no: 8,
            name: "model_name",
            kind: "scalar",
            T: 9
        }, {
            no: 9,
            name: "supports_context",
            kind: "scalar",
            T: 8
        }, {
            no: 10,
            name: "embed_dim",
            kind: "scalar",
            T: 5
        }, {
            no: 11,
            name: "base_url",
            kind: "scalar",
            T: 9
        }, {
            no: 12,
            name: "chat_model_name",
            kind: "scalar",
            T: 9
        }, {
            no: 13,
            name: "max_output_tokens",
            kind: "scalar",
            T: 5
        }]));
        class Xr extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Xr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Xr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Xr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Xr, e, n)
            }
        }
        Xr.runtime = ln,
        Xr.typeName = "exa.codeium_common_pb.ModelConfig",
        Xr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "generation_model",
            kind: "message",
            T: Vr
        }, {
            no: 2,
            name: "context_check_model",
            kind: "message",
            T: Vr
        }]));
        class Wr extends H {
            constructor(e) {
                super(),
                this.uid = "",
                this.completionId = "",
                this.filePath = "",
                this.shortPrefix = "",
                this.completionText = "",
                this.shortSuffix = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Wr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Wr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Wr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Wr, e, n)
            }
        }
        Wr.runtime = ln,
        Wr.typeName = "exa.codeium_common_pb.CompletionExample",
        Wr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "uid",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "completion_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "short_prefix",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "completion_text",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "short_suffix",
            kind: "scalar",
            T: 9
        }]));
        class Kr extends H {
            constructor(e) {
                super(),
                this.name = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Kr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Kr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Kr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Kr, e, n)
            }
        }
        Kr.runtime = ln,
        Kr.typeName = "exa.codeium_common_pb.CompletionExampleWithMetadata",
        Kr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "example",
            kind: "message",
            T: Wr
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "time",
            kind: "message",
            T: Nt
        }]));
        class Yr extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Yr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Yr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Yr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Yr, e, n)
            }
        }
        Yr.runtime = ln,
        Yr.typeName = "exa.codeium_common_pb.CciWithSubrange",
        Yr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "cci",
            kind: "message",
            T: hr
        }, {
            no: 2,
            name: "subrange",
            kind: "message",
            T: qr
        }]));
        class qr extends H {
            constructor(e) {
                super(),
                this.snippetType = Jn.UNSPECIFIED,
                this.startOffset = ie.zero,
                this.endOffset = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new qr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new qr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new qr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(qr, e, n)
            }
        }
        qr.runtime = ln,
        qr.typeName = "exa.codeium_common_pb.ContextSubrange",
        qr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "snippet_type",
            kind: "enum",
            T: ln.getEnumType(Jn)
        }, {
            no: 2,
            name: "start_offset",
            kind: "scalar",
            T: 3
        }, {
            no: 3,
            name: "end_offset",
            kind: "scalar",
            T: 3
        }]));
        class zr extends H {
            constructor(e) {
                super(),
                this.absolutePathMigrateMeToUri = "",
                this.absoluteUri = "",
                this.workspaceRelativePathsMigrateMeToWorkspaceUris = {},
                this.workspaceUrisToRelativePaths = {},
                this.numFiles = 0,
                this.numBytes = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new zr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new zr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new zr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(zr, e, n)
            }
        }
        zr.runtime = ln,
        zr.typeName = "exa.codeium_common_pb.PathScopeItem",
        zr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "absolute_path_migrate_me_to_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "absolute_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "workspace_relative_paths_migrate_me_to_workspace_uris",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }, {
            no: 6,
            name: "workspace_uris_to_relative_paths",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }, {
            no: 3,
            name: "num_files",
            kind: "scalar",
            T: 13
        }, {
            no: 4,
            name: "num_bytes",
            kind: "scalar",
            T: 4
        }]));
        class jr extends H {
            constructor(e) {
                super(),
                this.absoluteUri = "",
                this.startLine = 0,
                this.endLine = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new jr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new jr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new jr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(jr, e, n)
            }
        }
        jr.runtime = ln,
        jr.typeName = "exa.codeium_common_pb.FileLineRange",
        jr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "absolute_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 13
        }]));
        class $r extends H {
            constructor(e) {
                super(),
                this.content = "",
                this.identifier = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new $r).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new $r).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new $r).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals($r, e, n)
            }
        }
        $r.runtime = ln,
        $r.typeName = "exa.codeium_common_pb.TextBlock",
        $r.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "file_line_range",
            kind: "message",
            T: jr,
            oneof: "identifier"
        }, {
            no: 3,
            name: "label",
            kind: "scalar",
            T: 9,
            oneof: "identifier"
        }]));
        class Qr extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Qr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Qr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Qr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Qr, e, n)
            }
        }
        Qr.runtime = ln,
        Qr.typeName = "exa.codeium_common_pb.RepositoryScopeItem",
        Qr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "repo_info",
            kind: "message",
            T: Ir
        }]));
        class Zr extends H {
            constructor(e) {
                super(),
                this.relativePath = "",
                this.isDir = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Zr).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Zr).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Zr).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Zr, e, n)
            }
        }
        Zr.runtime = ln,
        Zr.typeName = "exa.codeium_common_pb.RepositoryPathScopeItem",
        Zr.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "repo_info",
            kind: "message",
            T: Ir
        }, {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "is_dir",
            kind: "scalar",
            T: 8
        }]));
        class ea extends H {
            constructor(e) {
                super(),
                this.documentId = "",
                this.index = mt.UNSPECIFIED,
                this.documentType = at.UNSPECIFIED,
                this.displayName = "",
                this.description = "",
                this.displaySource = "",
                this.url = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ea).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ea).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ea).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ea, e, n)
            }
        }
        ea.runtime = ln,
        ea.typeName = "exa.codeium_common_pb.KnowledgeBaseScopeItem",
        ea.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "document_id",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "index",
            kind: "enum",
            T: ln.getEnumType(mt)
        }, {
            no: 8,
            name: "document_type",
            kind: "enum",
            T: ln.getEnumType(at)
        }, {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "display_source",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "url",
            kind: "scalar",
            T: 9
        }]));
        class na extends H {
            constructor(e) {
                super(),
                this.timestampStr = "",
                this.type = "",
                this.output = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new na).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new na).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new na).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(na, e, n)
            }
        }
        na.runtime = ln,
        na.typeName = "exa.codeium_common_pb.ConsoleLogLine",
        na.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "timestamp_str",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "output",
            kind: "scalar",
            T: 9
        }]));
        class ta extends H {
            constructor(e) {
                super(),
                this.lines = [],
                this.serverAddress = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ta).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ta).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ta).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ta, e, n)
            }
        }
        ta.runtime = ln,
        ta.typeName = "exa.codeium_common_pb.ConsoleLogScopeItem",
        ta.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "lines",
            kind: "message",
            T: na,
            repeated: !0
        }, {
            no: 2,
            name: "server_address",
            kind: "scalar",
            T: 9
        }]));
        class ra extends H {
            constructor(e) {
                super(),
                this.tagName = "",
                this.outerHtml = "",
                this.id = "",
                this.reactComponentName = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ra).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ra).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ra).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ra, e, n)
            }
        }
        ra.runtime = ln,
        ra.typeName = "exa.codeium_common_pb.DOMElementScopeItem",
        ra.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "tag_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "outer_html",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "react_component_name",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "file_line_range",
            kind: "message",
            T: jr
        }]));
        class aa extends H {
            constructor(e) {
                super(),
                this.scopeItem = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new aa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new aa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new aa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(aa, e, n)
            }
        }
        aa.runtime = ln,
        aa.typeName = "exa.codeium_common_pb.ContextScopeItem",
        aa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "file",
            kind: "message",
            T: zr,
            oneof: "scope_item"
        }, {
            no: 2,
            name: "directory",
            kind: "message",
            T: zr,
            oneof: "scope_item"
        }, {
            no: 3,
            name: "repository",
            kind: "message",
            T: Qr,
            oneof: "scope_item"
        }, {
            no: 4,
            name: "code_context",
            kind: "message",
            T: hr,
            oneof: "scope_item"
        }, {
            no: 6,
            name: "cci_with_subrange",
            kind: "message",
            T: Yr,
            oneof: "scope_item"
        }, {
            no: 7,
            name: "repository_path",
            kind: "message",
            T: Zr,
            oneof: "scope_item"
        }, {
            no: 8,
            name: "slack",
            kind: "message",
            T: ea,
            oneof: "scope_item"
        }, {
            no: 9,
            name: "github",
            kind: "message",
            T: ea,
            oneof: "scope_item"
        }, {
            no: 10,
            name: "file_line_range",
            kind: "message",
            T: jr,
            oneof: "scope_item"
        }, {
            no: 11,
            name: "text_block",
            kind: "message",
            T: $r,
            oneof: "scope_item"
        }, {
            no: 12,
            name: "jira",
            kind: "message",
            T: ea,
            oneof: "scope_item"
        }, {
            no: 13,
            name: "google_drive",
            kind: "message",
            T: ea,
            oneof: "scope_item"
        }, {
            no: 14,
            name: "console_log",
            kind: "message",
            T: ta,
            oneof: "scope_item"
        }, {
            no: 15,
            name: "dom_element",
            kind: "message",
            T: ra,
            oneof: "scope_item"
        }]));
        class oa extends H {
            constructor(e) {
                super(),
                this.items = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new oa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new oa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new oa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(oa, e, n)
            }
        }
        oa.runtime = ln,
        oa.typeName = "exa.codeium_common_pb.ContextScope",
        oa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "items",
            kind: "message",
            T: aa,
            repeated: !0
        }]));
        class ia extends H {
            constructor(e) {
                super(),
                this.nodeName = "",
                this.graphStateJson = new Uint8Array(0),
                this.graphStateJsonNumBytes = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ia).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ia).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ia).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ia, e, n)
            }
        }
        ia.runtime = ln,
        ia.typeName = "exa.codeium_common_pb.NodeExecutionRecord",
        ia.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "node_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "start_time",
            kind: "message",
            T: Nt
        }, {
            no: 3,
            name: "end_time",
            kind: "message",
            T: Nt
        }, {
            no: 5,
            name: "graph_state_json",
            kind: "scalar",
            T: 12
        }, {
            no: 6,
            name: "graph_state_json_num_bytes",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "subgraph_execution",
            kind: "message",
            T: sa
        }]));
        class sa extends H {
            constructor(e) {
                super(),
                this.history = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new sa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new sa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new sa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(sa, e, n)
            }
        }
        sa.runtime = ln,
        sa.typeName = "exa.codeium_common_pb.GraphExecutionState",
        sa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "current",
            kind: "message",
            T: ia
        }, {
            no: 2,
            name: "history",
            kind: "message",
            T: ia,
            repeated: !0
        }]));
        class la extends H {
            constructor(e) {
                super(),
                this.items = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new la).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new la).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new la).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(la, e, n)
            }
        }
        la.runtime = ln,
        la.typeName = "exa.codeium_common_pb.Guideline",
        la.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "items",
            kind: "message",
            T: ua,
            repeated: !0
        }]));
        class ua extends H {
            constructor(e) {
                super(),
                this.guideline = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ua).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ua).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ua).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ua, e, n)
            }
        }
        ua.runtime = ln,
        ua.typeName = "exa.codeium_common_pb.GuidelineItem",
        ua.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "guideline",
            kind: "scalar",
            T: 9
        }]));
        class ca extends H {
            constructor(e) {
                super(),
                this.model = pn.MODEL_UNSPECIFIED,
                this.maxInputTokens = 0,
                this.temperature = 0,
                this.maxOutputTokens = 0,
                this.orderSnippetsByFile = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ca).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ca).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ca).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ca, e, n)
            }
        }
        ca.runtime = ln,
        ca.typeName = "exa.codeium_common_pb.ChatNodeConfig",
        ca.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 2,
            name: "max_input_tokens",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "temperature",
            kind: "scalar",
            T: 2
        }, {
            no: 4,
            name: "max_output_tokens",
            kind: "scalar",
            T: 13
        }, {
            no: 5,
            name: "order_snippets_by_file",
            kind: "scalar",
            T: 8
        }]));
        class _a extends H {
            constructor(e) {
                super(),
                this.shouldBatchCcis = !1,
                this.maxTokensPerSubrange = ie.zero,
                this.numParserWorkers = ie.zero,
                this.numWorkersPerDistributedScorer = ie.zero,
                this.verbose = !1,
                this.ignoreExtensions = [],
                this.ignoreDirectoryStubs = [],
                this.minTokenSpaceForContext = 0,
                this.maxTargetFiles = 0,
                this.topCciCount = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new _a).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new _a).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new _a).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(_a, e, n)
            }
        }
        _a.runtime = ln,
        _a.typeName = "exa.codeium_common_pb.MQueryConfig",
        _a.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "should_batch_ccis",
            kind: "scalar",
            T: 8
        }, {
            no: 2,
            name: "max_tokens_per_subrange",
            kind: "scalar",
            T: 3
        }, {
            no: 3,
            name: "num_parser_workers",
            kind: "scalar",
            T: 3
        }, {
            no: 4,
            name: "num_workers_per_distributed_scorer",
            kind: "scalar",
            T: 3
        }, {
            no: 5,
            name: "verbose",
            kind: "scalar",
            T: 8
        }, {
            no: 6,
            name: "ignore_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 7,
            name: "ignore_directory_stubs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 8,
            name: "min_token_space_for_context",
            kind: "scalar",
            T: 13
        }, {
            no: 9,
            name: "max_target_files",
            kind: "scalar",
            T: 13
        }, {
            no: 10,
            name: "top_cci_count",
            kind: "scalar",
            T: 13
        }]));
        class Ea extends H {
            constructor(e) {
                super(),
                this.deltaText = "",
                this.deltaTokens = 0,
                this.stopReason = On.UNSPECIFIED,
                this.deltaToolCalls = [],
                this.deltaThinking = "",
                this.deltaSignature = "",
                this.thinkingRedacted = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ea).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ea).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ea).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ea, e, n)
            }
        }
        Ea.runtime = ln,
        Ea.typeName = "exa.codeium_common_pb.CompletionDelta",
        Ea.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "delta_text",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "delta_tokens",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "stop_reason",
            kind: "enum",
            T: ln.getEnumType(On)
        }, {
            no: 4,
            name: "usage",
            kind: "message",
            T: ba
        }, {
            no: 5,
            name: "delta_tool_calls",
            kind: "message",
            T: da,
            repeated: !0
        }, {
            no: 6,
            name: "delta_thinking",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "delta_signature",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "thinking_redacted",
            kind: "scalar",
            T: 8
        }]));
        class ma extends H {
            constructor(e) {
                super(),
                this.deltas = {},
                this.prompt = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ma).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ma).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ma).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ma, e, n)
            }
        }
        ma.runtime = ln,
        ma.typeName = "exa.codeium_common_pb.CompletionDeltaMap",
        ma.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "deltas",
            kind: "map",
            K: 5,
            V: {
                kind: "message",
                T: Ea
            }
        }, {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        }]));
        class da extends H {
            constructor(e) {
                super(),
                this.id = "",
                this.name = "",
                this.argumentsJson = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new da).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new da).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new da).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(da, e, n)
            }
        }
        da.runtime = ln,
        da.typeName = "exa.codeium_common_pb.ChatToolCall",
        da.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "arguments_json",
            kind: "scalar",
            T: 9
        }]));
        class fa extends H {
            constructor(e) {
                super(),
                this.level = st.UNSPECIFIED,
                this.message = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new fa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new fa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new fa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(fa, e, n)
            }
        }
        fa.runtime = ln,
        fa.typeName = "exa.codeium_common_pb.Status",
        fa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "level",
            kind: "enum",
            T: ln.getEnumType(st)
        }, {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }]));
        class Ta extends H {
            constructor(e) {
                super(),
                this.row = ie.zero,
                this.col = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ta).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ta).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ta).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ta, e, n)
            }
        }
        Ta.runtime = ln,
        Ta.typeName = "exa.codeium_common_pb.DocumentPosition",
        Ta.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "row",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "col",
            kind: "scalar",
            T: 4
        }]));
        class pa extends H {
            constructor(e) {
                super(),
                this.startOffset = ie.zero,
                this.endOffset = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new pa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new pa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new pa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(pa, e, n)
            }
        }
        pa.runtime = ln,
        pa.typeName = "exa.codeium_common_pb.Range",
        pa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "start_offset",
            kind: "scalar",
            T: 4
        }, {
            no: 2,
            name: "end_offset",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "start_position",
            kind: "message",
            T: Ta
        }, {
            no: 4,
            name: "end_position",
            kind: "message",
            T: Ta
        }]));
        class Sa extends H {
            constructor(e) {
                super(),
                this.absolutePathMigrateMeToUri = "",
                this.absoluteUri = "",
                this.relativePathMigrateMeToWorkspaceUri = "",
                this.workspaceUri = "",
                this.text = "",
                this.editorLanguage = "",
                this.language = yn.UNSPECIFIED,
                this.cursorOffset = ie.zero,
                this.lineEnding = "",
                this.isCutoffStart = !1,
                this.isCutoffEnd = !1,
                this.linesCutoffStart = 0,
                this.linesCutoffEnd = 0,
                this.isDirty = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Sa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Sa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Sa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Sa, e, n)
            }
        }
        Sa.runtime = ln,
        Sa.typeName = "exa.codeium_common_pb.Document",
        Sa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "absolute_path_migrate_me_to_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 12,
            name: "absolute_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "relative_path_migrate_me_to_workspace_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 13,
            name: "workspace_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "editor_language",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "language",
            kind: "enum",
            T: ln.getEnumType(yn)
        }, {
            no: 6,
            name: "cursor_offset",
            kind: "scalar",
            T: 4
        }, {
            no: 8,
            name: "cursor_position",
            kind: "message",
            T: Ta
        }, {
            no: 7,
            name: "line_ending",
            kind: "scalar",
            T: 9
        }, {
            no: 9,
            name: "visible_range",
            kind: "message",
            T: pa
        }, {
            no: 10,
            name: "is_cutoff_start",
            kind: "scalar",
            T: 8
        }, {
            no: 11,
            name: "is_cutoff_end",
            kind: "scalar",
            T: 8
        }, {
            no: 14,
            name: "lines_cutoff_start",
            kind: "scalar",
            T: 5
        }, {
            no: 15,
            name: "lines_cutoff_end",
            kind: "scalar",
            T: 5
        }, {
            no: 16,
            name: "timestamp",
            kind: "message",
            T: Nt
        }, {
            no: 17,
            name: "is_dirty",
            kind: "scalar",
            T: 8
        }]));
        class Oa extends H {
            constructor(e) {
                super(),
                this.otherDocuments = [],
                this.codeContextItems = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Oa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Oa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Oa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Oa, e, n)
            }
        }
        Oa.runtime = ln,
        Oa.typeName = "exa.codeium_common_pb.PromptComponents",
        Oa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "document",
            kind: "message",
            T: Sa
        }, {
            no: 2,
            name: "other_documents",
            kind: "message",
            T: Sa,
            repeated: !0
        }, {
            no: 3,
            name: "code_context_items",
            kind: "message",
            T: hr,
            repeated: !0
        }]));
        class Na extends H {
            constructor(e) {
                super(),
                this.chunk = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Na).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Na).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Na).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Na, e, n)
            }
        }
        Na.runtime = ln,
        Na.typeName = "exa.codeium_common_pb.TextOrScopeItem",
        Na.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "chunk"
        }, {
            no: 2,
            name: "item",
            kind: "message",
            T: aa,
            oneof: "chunk"
        }]));
        class Ca extends H {
            constructor(e) {
                super(),
                this.matchRepoName = "",
                this.matchPath = "",
                this.pinnedContexts = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ca).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ca).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ca).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ca, e, n)
            }
        }
        Ca.runtime = ln,
        Ca.typeName = "exa.codeium_common_pb.PinnedContextConfig",
        Ca.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "match_repo_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "match_path",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "pinned_contexts",
            kind: "message",
            T: Aa,
            repeated: !0
        }]));
        class Aa extends H {
            constructor(e) {
                super(),
                this.contextItem = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Aa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Aa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Aa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Aa, e, n)
            }
        }
        Aa.runtime = ln,
        Aa.typeName = "exa.codeium_common_pb.PinnedContext",
        Aa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "repository_path",
            kind: "message",
            T: Ia,
            oneof: "context_item"
        }]));
        class Ia extends H {
            constructor(e) {
                super(),
                this.remoteRepoName = "",
                this.version = "",
                this.relativePath = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ia).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ia).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ia).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ia, e, n)
            }
        }
        Ia.runtime = ln,
        Ia.typeName = "exa.codeium_common_pb.RepositoryPath",
        Ia.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "remote_repo_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "version",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9
        }]));
        class ha extends H {
            constructor(e) {
                super(),
                this.pinnedContextConfigs = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ha).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ha).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ha).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ha, e, n)
            }
        }
        ha.runtime = ln,
        ha.typeName = "exa.codeium_common_pb.DefaultPinnedContextConfig",
        ha.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "pinned_context_configs",
            kind: "message",
            T: Ca,
            repeated: !0
        }]));
        class La extends H {
            constructor(e) {
                super(),
                this.id = "",
                this.prompt = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new La).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new La).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new La).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(La, e, n)
            }
        }
        La.runtime = ln,
        La.typeName = "exa.codeium_common_pb.Rule",
        La.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        }]));
        class Ra extends H {
            constructor(e) {
                super(),
                this.id = "",
                this.startLine = 0,
                this.endLine = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ra).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ra).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ra).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ra, e, n)
            }
        }
        Ra.runtime = ln,
        Ra.typeName = "exa.codeium_common_pb.RuleViolation",
        Ra.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "rule",
            kind: "message",
            T: La
        }, {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5
        }, {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5
        }]));
        class ga extends H {
            constructor(e) {
                super(),
                this.logs = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ga).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ga).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ga).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ga, e, n)
            }
        }
        ga.runtime = ln,
        ga.typeName = "exa.codeium_common_pb.LanguageServerDiagnostics",
        ga.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "logs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }]));
        class Pa extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Pa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Pa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Pa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Pa, e, n)
            }
        }
        Pa.runtime = ln,
        Pa.typeName = "exa.codeium_common_pb.IndexerStats",
        Pa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "database",
            kind: "message",
            T: Da
        }]));
        class Da extends H {
            constructor(e) {
                super(),
                this.backend = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Da).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Da).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Da).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Da, e, n)
            }
        }
        Da.runtime = ln,
        Da.typeName = "exa.codeium_common_pb.IndexerDbStats",
        Da.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "local_sqlite_faiss",
            kind: "message",
            T: Ma,
            oneof: "backend"
        }, {
            no: 2,
            name: "postgres",
            kind: "message",
            T: Ua,
            oneof: "backend"
        }]));
        class Ma extends H {
            constructor(e) {
                super(),
                this.faissStateStats = [],
                this.totalItemCount = ie.zero,
                this.quantized = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ma).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ma).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ma).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ma, e, n)
            }
        }
        Ma.runtime = ln,
        Ma.typeName = "exa.codeium_common_pb.LocalSqliteFaissDbStats",
        Ma.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "faiss_state_stats",
            kind: "message",
            T: ya,
            repeated: !0
        }, {
            no: 2,
            name: "total_item_count",
            kind: "scalar",
            T: 3
        }, {
            no: 3,
            name: "quantized",
            kind: "scalar",
            T: 8
        }]));
        class ya extends H {
            constructor(e) {
                super(),
                this.embeddingSource = hn.UNSPECIFIED,
                this.workspace = "",
                this.itemCount = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ya).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ya).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ya).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ya, e, n)
            }
        }
        ya.runtime = ln,
        ya.typeName = "exa.codeium_common_pb.FaissStateStats",
        ya.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "embedding_source",
            kind: "enum",
            T: ln.getEnumType(hn)
        }, {
            no: 2,
            name: "workspace",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "item_count",
            kind: "scalar",
            T: 3
        }]));
        class Ua extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ua).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ua).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ua).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ua, e, n)
            }
        }
        Ua.runtime = ln,
        Ua.typeName = "exa.codeium_common_pb.PostgresDbStats",
        Ua.fields = ln.util.newFieldList(( () => []));
        class wa extends H {
            constructor(e) {
                super(),
                this.type = ut.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new wa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new wa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new wa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(wa, e, n)
            }
        }
        wa.runtime = ln,
        wa.typeName = "exa.codeium_common_pb.LastUpdateRecord",
        wa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "time",
            kind: "message",
            T: Nt
        }, {
            no: 2,
            name: "type",
            kind: "enum",
            T: ln.getEnumType(ut)
        }]));
        class ba extends H {
            constructor(e) {
                super(),
                this.model = pn.MODEL_UNSPECIFIED,
                this.inputTokens = ie.zero,
                this.outputTokens = ie.zero,
                this.cacheWriteTokens = ie.zero,
                this.cacheReadTokens = ie.zero,
                this.apiProvider = tt.API_PROVIDER_UNSPECIFIED,
                this.messageId = "",
                this.responseHeader = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ba).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ba).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ba).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ba, e, n)
            }
        }
        ba.runtime = ln,
        ba.typeName = "exa.codeium_common_pb.ModelUsageStats",
        ba.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "model",
            kind: "enum",
            T: ln.getEnumType(pn)
        }, {
            no: 2,
            name: "input_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 3,
            name: "output_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 4,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 5,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 4
        }, {
            no: 6,
            name: "api_provider",
            kind: "enum",
            T: ln.getEnumType(tt)
        }, {
            no: 7,
            name: "message_id",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "response_header",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }]));
        class ka extends H {
            constructor(e) {
                super(),
                this.reason = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ka).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ka).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ka).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ka, e, n)
            }
        }
        ka.runtime = ln,
        ka.typeName = "exa.codeium_common_pb.SuperCompleteFilterReason",
        ka.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        }]));
        class va extends H {
            constructor(e) {
                super(),
                this.message = "",
                this.severity = "",
                this.source = "",
                this.uri = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new va).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new va).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new va).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(va, e, n)
            }
        }
        va.runtime = ln,
        va.typeName = "exa.codeium_common_pb.CodeDiagnostic",
        va.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "range",
            kind: "message",
            T: pa
        }, {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "severity",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "uri",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "id",
            kind: "scalar",
            T: 9,
            opt: !0
        }]));
        class Fa extends H {
            constructor(e) {
                super(),
                this.overlappedCodeContextItems = [],
                this.firstElementSuffixOverlap = 0,
                this.lastElementPrefixOverlap = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Fa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Fa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Fa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Fa, e, n)
            }
        }
        Fa.runtime = ln,
        Fa.typeName = "exa.codeium_common_pb.DocumentLinesElement",
        Fa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "document_query",
            kind: "message",
            T: Ba
        }, {
            no: 2,
            name: "overlapped_code_context_items",
            kind: "message",
            T: hr,
            repeated: !0
        }, {
            no: 3,
            name: "first_element_suffix_overlap",
            kind: "scalar",
            T: 13
        }, {
            no: 4,
            name: "last_element_prefix_overlap",
            kind: "scalar",
            T: 13
        }]));
        class Ba extends H {
            constructor(e) {
                super(),
                this.text = "",
                this.cursorOffset = 0,
                this.startLine = 0,
                this.endLine = 0,
                this.useCharacterPosition = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ba).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ba).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ba).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ba, e, n)
            }
        }
        Ba.runtime = ln,
        Ba.typeName = "exa.codeium_common_pb.DocumentQuery",
        Ba.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "cursor_offset",
            kind: "scalar",
            T: 5
        }, {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 13
        }, {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 13
        }, {
            no: 5,
            name: "use_character_position",
            kind: "scalar",
            T: 8
        }]));
        class xa extends H {
            constructor(e) {
                super(),
                this.element = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new xa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new xa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new xa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(xa, e, n)
            }
        }
        xa.runtime = ln,
        xa.typeName = "exa.codeium_common_pb.DocumentOutlineElement",
        xa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "code_context_item",
            kind: "message",
            T: hr,
            oneof: "element"
        }, {
            no: 2,
            name: "document_lines_element",
            kind: "message",
            T: Fa,
            oneof: "element"
        }, {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "element"
        }]));
        class Ga extends H {
            constructor(e) {
                super(),
                this.elements = [],
                this.startIndex = ie.zero,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ga).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ga).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ga).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ga, e, n)
            }
        }
        Ga.runtime = ln,
        Ga.typeName = "exa.codeium_common_pb.DocumentOutline",
        Ga.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "elements",
            kind: "message",
            T: xa,
            repeated: !0
        }, {
            no: 2,
            name: "start_index",
            kind: "scalar",
            T: 3
        }]));
        class Ha extends H {
            constructor(e) {
                super(),
                this.eventName = "",
                this.apiKey = "",
                this.installationId = "",
                this.ideName = "",
                this.os = "",
                this.codeiumVersion = "",
                this.ideVersion = "",
                this.durationMs = ie.zero,
                this.extra = {},
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ha).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ha).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ha).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ha, e, n)
            }
        }
        Ha.runtime = ln,
        Ha.typeName = "exa.codeium_common_pb.ProductEvent",
        Ha.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "event_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "installation_id",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "ide_name",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "os",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "codeium_version",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "ide_version",
            kind: "scalar",
            T: 9
        }, {
            no: 8,
            name: "duration_ms",
            kind: "scalar",
            T: 4
        }, {
            no: 9,
            name: "extra",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }]));
        class Ja extends H {
            constructor(e) {
                super(),
                this.id = "",
                this.name = "",
                this.description = "",
                this.codebaseRootUri = "",
                this.fileNames = [],
                this.commitMessages = [],
                this.commitSha = [],
                this.commitDescriptions = [],
                this.fileDescriptions = [],
                this.intent = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ja).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ja).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ja).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ja, e, n)
            }
        }
        Ja.runtime = ln,
        Ja.typeName = "exa.codeium_common_pb.CodebaseCluster",
        Ja.fields = ln.util.newFieldList(( () => [{
            no: 5,
            name: "id",
            kind: "scalar",
            T: 9
        }, {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "codebase_root_uri",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "file_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 4,
            name: "commit_messages",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 7,
            name: "commit_sha",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 8,
            name: "commit_descriptions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 9,
            name: "file_descriptions",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 10,
            name: "intent",
            kind: "scalar",
            T: 9
        }]));
        class Va extends H {
            constructor(e) {
                super(),
                this.clusters = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Va).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Va).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Va).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Va, e, n)
            }
        }
        Va.runtime = ln,
        Va.typeName = "exa.codeium_common_pb.CodebaseClusterList",
        Va.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "clusters",
            kind: "message",
            T: Ja,
            repeated: !0
        }]));
        class Xa extends H {
            constructor(e) {
                super(),
                this.chunkType = {
                    case: void 0
                },
                this.position = 0,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Xa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Xa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Xa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Xa, e, n)
            }
        }
        Xa.runtime = ln,
        Xa.typeName = "exa.codeium_common_pb.KnowledgeBaseChunk",
        Xa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "chunk_type"
        }, {
            no: 3,
            name: "markdown_chunk",
            kind: "message",
            T: za,
            oneof: "chunk_type"
        }, {
            no: 2,
            name: "position",
            kind: "scalar",
            T: 5
        }]));
        class Wa extends H {
            constructor(e) {
                super(),
                this.documentId = "",
                this.url = "",
                this.title = "",
                this.chunks = [],
                this.summary = "",
                this.text = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Wa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Wa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Wa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Wa, e, n)
            }
        }
        Wa.runtime = ln,
        Wa.typeName = "exa.codeium_common_pb.KnowledgeBaseItem",
        Wa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "document_id",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "timestamp",
            kind: "message",
            T: Nt
        }, {
            no: 6,
            name: "chunks",
            kind: "message",
            T: Xa,
            repeated: !0
        }, {
            no: 7,
            name: "summary",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }]));
        class Ka extends H {
            constructor(e) {
                super(),
                this.score = 0,
                this.indexName = "",
                this.documentSourceName = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ka).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ka).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ka).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ka, e, n)
            }
        }
        Ka.runtime = ln,
        Ka.typeName = "exa.codeium_common_pb.KnowledgeBaseItemWithMetadata",
        Ka.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "knowledge_base_item",
            kind: "message",
            T: Wa
        }, {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2
        }, {
            no: 3,
            name: "index_name",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "document_source_name",
            kind: "scalar",
            T: 9
        }]));
        class Ya extends H {
            constructor(e) {
                super(),
                this.description = "",
                this.children = [],
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Ya).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Ya).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Ya).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Ya, e, n)
            }
        }
        Ya.runtime = ln,
        Ya.typeName = "exa.codeium_common_pb.KnowledgeBaseGroup",
        Ya.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "item",
            kind: "message",
            T: Ka
        }, {
            no: 3,
            name: "children",
            kind: "message",
            T: Ya,
            repeated: !0
        }]));
        class qa extends H {
            constructor(e) {
                super(),
                this.base64Data = "",
                this.mimeType = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new qa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new qa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new qa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(qa, e, n)
            }
        }
        qa.runtime = ln,
        qa.typeName = "exa.codeium_common_pb.ImageData",
        qa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "base64_data",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9
        }]));
        class za extends H {
            constructor(e) {
                super(),
                this.headers = [],
                this.text = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new za).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new za).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new za).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(za, e, n)
            }
        }
        za.runtime = ln,
        za.typeName = "exa.codeium_common_pb.MarkdownChunk",
        za.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "headers",
            kind: "message",
            T: ja,
            repeated: !0
        }, {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }]));
        class ja extends H {
            constructor(e) {
                super(),
                this.type = dt.UNSPECIFIED,
                this.text = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ja).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ja).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ja).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ja, e, n)
            }
        }
        ja.runtime = ln,
        ja.typeName = "exa.codeium_common_pb.MarkdownChunk.MarkdownHeader",
        ja.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "type",
            kind: "enum",
            T: ln.getEnumType(dt)
        }, {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9
        }]));
        class $a extends H {
            constructor(e) {
                super(),
                this.terminalId = "",
                this.shellPid = 0,
                this.commandLine = "",
                this.cwd = "",
                this.source = ft.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new $a).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new $a).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new $a).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals($a, e, n)
            }
        }
        $a.runtime = ln,
        $a.typeName = "exa.codeium_common_pb.TerminalShellCommandHeader",
        $a.fields = ln.util.newFieldList(( () => [{
            no: 7,
            name: "metadata",
            kind: "message",
            T: rr
        }, {
            no: 1,
            name: "terminal_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "shell_pid",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "command_line",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "cwd",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "start_time",
            kind: "message",
            T: Nt
        }, {
            no: 6,
            name: "source",
            kind: "enum",
            T: ln.getEnumType(ft)
        }]));
        class Qa extends H {
            constructor(e) {
                super(),
                this.rawData = new Uint8Array(0),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Qa).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Qa).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Qa).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Qa, e, n)
            }
        }
        Qa.runtime = ln,
        Qa.typeName = "exa.codeium_common_pb.TerminalShellCommandData",
        Qa.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "raw_data",
            kind: "scalar",
            T: 12
        }]));
        class Za extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Za).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Za).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Za).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Za, e, n)
            }
        }
        Za.runtime = ln,
        Za.typeName = "exa.codeium_common_pb.TerminalShellCommandTrailer",
        Za.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {
            no: 2,
            name: "end_time",
            kind: "message",
            T: Nt
        }]));
        class eo extends H {
            constructor(e) {
                super(),
                this.value = {
                    case: void 0
                },
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new eo).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new eo).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new eo).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(eo, e, n)
            }
        }
        eo.runtime = ln,
        eo.typeName = "exa.codeium_common_pb.TerminalShellCommandStreamChunk",
        eo.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "header",
            kind: "message",
            T: $a,
            oneof: "value"
        }, {
            no: 2,
            name: "data",
            kind: "message",
            T: Qa,
            oneof: "value"
        }, {
            no: 3,
            name: "trailer",
            kind: "message",
            T: Za,
            oneof: "value"
        }]));
        class no extends H {
            constructor(e) {
                super(),
                this.shellPid = 0,
                this.commandLine = "",
                this.cwd = "",
                this.output = new Uint8Array(0),
                this.status = Tt.UNSPECIFIED,
                this.source = ft.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new no).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new no).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new no).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(no, e, n)
            }
        }
        no.runtime = ln,
        no.typeName = "exa.codeium_common_pb.TerminalShellCommand",
        no.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "shell_pid",
            kind: "scalar",
            T: 13
        }, {
            no: 2,
            name: "command_line",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "output",
            kind: "scalar",
            T: 12
        }, {
            no: 5,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {
            no: 6,
            name: "start_time",
            kind: "message",
            T: Nt
        }, {
            no: 7,
            name: "end_time",
            kind: "message",
            T: Nt
        }, {
            no: 8,
            name: "status",
            kind: "enum",
            T: ln.getEnumType(Tt)
        }, {
            no: 9,
            name: "source",
            kind: "enum",
            T: ln.getEnumType(ft)
        }]));
        class to extends H {
            constructor(e) {
                super(),
                this.terminalId = "",
                this.platform = "",
                this.cwd = "",
                this.shellName = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new to).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new to).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new to).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(to, e, n)
            }
        }
        to.runtime = ln,
        to.typeName = "exa.codeium_common_pb.TerminalCommandData",
        to.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "terminal_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "platform",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9
        }, {
            no: 4,
            name: "shell_name",
            kind: "scalar",
            T: 9
        }]));
        class ro extends H {
            constructor(e) {
                super(),
                this.windsurfDeploymentId = "",
                this.authUid = "",
                this.deploymentProvider = pt.UNSPECIFIED,
                this.projectId = "",
                this.projectName = "",
                this.workspacePath = "",
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ro).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ro).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ro).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ro, e, n)
            }
        }
        ro.runtime = ln,
        ro.typeName = "exa.codeium_common_pb.WindsurfDeployment",
        ro.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "windsurf_deployment_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "auth_uid",
            kind: "scalar",
            T: 9
        }, {
            no: 3,
            name: "deployment_provider",
            kind: "enum",
            T: ln.getEnumType(pt)
        }, {
            no: 4,
            name: "project_id",
            kind: "scalar",
            T: 9
        }, {
            no: 5,
            name: "project_name",
            kind: "scalar",
            T: 9
        }, {
            no: 6,
            name: "workspace_path",
            kind: "scalar",
            T: 9
        }, {
            no: 7,
            name: "created_at",
            kind: "message",
            T: Nt
        }, {
            no: 8,
            name: "updated_at",
            kind: "message",
            T: Nt
        }]));
        class ao extends H {
            constructor(e) {
                super(),
                this.label = "",
                this.value = {
                    case: void 0
                },
                this.synonyms = [],
                this.isFeatured = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new ao).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new ao).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new ao).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(ao, e, n)
            }
        }
        ao.runtime = ln,
        ao.typeName = "exa.codeium_common_pb.WebDocsOption",
        ao.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "docs_url",
            kind: "scalar",
            T: 9,
            oneof: "value"
        }, {
            no: 3,
            name: "docs_search_domain",
            kind: "scalar",
            T: 9,
            oneof: "value"
        }, {
            no: 4,
            name: "synonyms",
            kind: "scalar",
            T: 9,
            repeated: !0
        }, {
            no: 5,
            name: "is_featured",
            kind: "scalar",
            T: 8
        }]));
        class oo extends H {
            constructor(e) {
                super(),
                this.teamId = "",
                this.userPromptCreditCap = 0,
                this.userFlowCreditCap = 0,
                this.autoProvisionCascadeSeat = !1,
                this.allowMcpServers = !1,
                this.allowAutoRunCommands = !1,
                this.allowCustomRecipes = !1,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new oo).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new oo).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new oo).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(oo, e, n)
            }
        }
        oo.runtime = ln,
        oo.typeName = "exa.codeium_common_pb.TeamConfig",
        oo.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "user_prompt_credit_cap",
            kind: "scalar",
            T: 5
        }, {
            no: 3,
            name: "user_flow_credit_cap",
            kind: "scalar",
            T: 5
        }, {
            no: 4,
            name: "auto_provision_cascade_seat",
            kind: "scalar",
            T: 8
        }, {
            no: 5,
            name: "allow_mcp_servers",
            kind: "scalar",
            T: 8
        }, {
            no: 7,
            name: "allow_auto_run_commands",
            kind: "scalar",
            T: 8
        }, {
            no: 8,
            name: "allow_custom_recipes",
            kind: "scalar",
            T: 8
        }]));
        class io extends H {
            constructor(e) {
                super(),
                this.projectName = "",
                this.provider = pt.UNSPECIFIED,
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new io).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new io).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new io).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(io, e, n)
            }
        }
        io.runtime = ln,
        io.typeName = "exa.codeium_common_pb.WebAppDeploymentConfig",
        io.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "project_name",
            kind: "scalar",
            T: 9
        }, {
            no: 2,
            name: "provider",
            kind: "enum",
            T: ln.getEnumType(pt)
        }]));
        class so extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new so).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new so).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new so).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(so, e, n)
            }
        }
        so.runtime = ln,
        so.typeName = "exa.browser_preview_pb.SendDOMElementRequest",
        so.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "dom_element",
            kind: "message",
            T: ra
        }]));
        class lo extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new lo).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new lo).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new lo).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(lo, e, n)
            }
        }
        lo.runtime = ln,
        lo.typeName = "exa.browser_preview_pb.SendDOMElementResponse",
        lo.fields = ln.util.newFieldList(( () => []));
        class uo extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new uo).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new uo).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new uo).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(uo, e, n)
            }
        }
        uo.runtime = ln,
        uo.typeName = "exa.browser_preview_pb.SendScreenshotRequest",
        uo.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "image",
            kind: "message",
            T: qa
        }]));
        class co extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new co).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new co).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new co).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(co, e, n)
            }
        }
        co.runtime = ln,
        co.typeName = "exa.browser_preview_pb.SendScreenshotResponse",
        co.fields = ln.util.newFieldList(( () => []));
        class _o extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new _o).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new _o).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new _o).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(_o, e, n)
            }
        }
        _o.runtime = ln,
        _o.typeName = "exa.browser_preview_pb.SendConsoleOutputRequest",
        _o.fields = ln.util.newFieldList(( () => [{
            no: 1,
            name: "console_log",
            kind: "message",
            T: ta
        }]));
        class Eo extends H {
            constructor(e) {
                super(),
                ln.util.initPartial(e, this)
            }
            static fromBinary(e, n) {
                return (new Eo).fromBinary(e, n)
            }
            static fromJson(e, n) {
                return (new Eo).fromJson(e, n)
            }
            static fromJsonString(e, n) {
                return (new Eo).fromJsonString(e, n)
            }
            static equals(e, n) {
                return ln.util.equals(Eo, e, n)
            }
        }
        Eo.runtime = ln,
        Eo.typeName = "exa.browser_preview_pb.SendConsoleOutputResponse",
        Eo.fields = ln.util.newFieldList(( () => []));
        const mo = {
            typeName: "exa.browser_preview_pb.BrowserPreviewService",
            methods: {
                sendDOMElement: {
                    name: "SendDOMElement",
                    I: so,
                    O: lo,
                    kind: e.Unary
                },
                sendScreenshot: {
                    name: "SendScreenshot",
                    I: uo,
                    O: co,
                    kind: e.Unary
                },
                sendConsoleOutput: {
                    name: "SendConsoleOutput",
                    I: _o,
                    O: Eo,
                    kind: e.Unary
                }
            }
        };
        var fo = t(649)
          , To = t(958);
        const po = fo.forwardRef((function({title: e, titleId: n, ...t}, r) {
            return fo.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": n
            }, t), e ? fo.createElement("title", {
                id: n
            }, e) : null, fo.createElement("path", {
                fillRule: "evenodd",
                d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                clipRule: "evenodd"
            }))
        }
        ))
          , So = ({message: e, isVisible: n, onClose: t}) => {
            const [r,a] = fo.useState(!1)
              , [o,i] = fo.useState(!1);
            fo.useEffect(( () => {
                if (n) {
                    i(!1),
                    a(!0);
                    const e = setTimeout(( () => {
                        s()
                    }
                    ), 3e3);
                    return () => clearTimeout(e)
                }
                return () => {}
            }
            ), [n, t]);
            const s = () => {
                i(!0),
                setTimeout(( () => {
                    a(!1),
                    t()
                }
                ), 250)
            }
            ;
            return r ? fo.createElement(fo.Fragment, null, fo.createElement("style", null, "\n          @keyframes slideIn {\n            from {\n              transform: translateY(10px);\n              opacity: 0;\n            }\n            to {\n              transform: translateY(0);\n              opacity: 1;\n            }\n          }\n\n          @keyframes fadeOut {\n            from {\n              transform: translateY(0);\n              opacity: 1;\n            }\n            to {\n              transform: translateY(-10px);\n              opacity: 0;\n            }\n          }\n        "), fo.createElement("div", {
                style: {
                    all: "unset",
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                    zIndex: 2147483647,
                    display: "flex",
                    alignItems: "center",
                    animation: o ? "fadeOut 250ms ease-out forwards" : "slideIn 250ms ease-out",
                    pointerEvents: "auto",
                    willChange: "transform, opacity"
                }
            }, fo.createElement("div", {
                style: {
                    backgroundColor: "#3180E8",
                    color: "#ffffff",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1px solid #1a73e8"
                }
            }, fo.createElement("span", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }
            }, e, fo.createElement(po, {
                onClick: e => {
                    e.preventDefault(),
                    e.stopPropagation(),
                    s()
                }
                ,
                style: {
                    cursor: "pointer",
                    width: "16px",
                    height: "16px"
                }
            }))))) : null
        }
          , Oo = fo.forwardRef((function({title: e, titleId: n, ...t}, r) {
            return fo.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": n
            }, t), e ? fo.createElement("title", {
                id: n
            }, e) : null, fo.createElement("path", {
                fillRule: "evenodd",
                d: "M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z",
                clipRule: "evenodd"
            }))
        }
        ))
          , No = ({errorCount: e, isSelectingArea: n, hoveredButton: t, setHoveredButton: r, onSendConsoleOutput: a, buttonStyle: o}) => fo.createElement("button", {
            onClick: a,
            disabled: 0 === e,
            style: {
                ...o,
                backgroundColor: 0 === e ? "#f0f0f0" : "console" === t ? "#f5f5f5" : "#ffffff",
                color: 0 === e ? "#999999" : "#000000",
                cursor: 0 === e ? "default" : "pointer"
            },
            onMouseEnter: () => e > 0 && !n && r("console"),
            onMouseLeave: () => e > 0 && !n && r(null)
        }, "Send console errors (", e, ")")
          , Co = ({isSelecting: e, errorCount: n=0, onSendArea: t, onSendConsoleOutput: r}) => {
            const [a,o] = fo.useState(!1);
            fo.useEffect(( () => {
                void 0 !== e && o(e)
            }
            ), [e]);
            const i = {
                all: "unset",
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                fontSize: "13px",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderRadius: "0",
                transition: "background-color 0.2s ease",
                position: "relative",
                outline: "none"
            }
              , s = {
                ...i,
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px"
            }
              , l = {
                ...i,
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px"
            }
              , [u,c] = fo.useState(null);
            return fo.createElement("div", {
                style: {
                    all: "unset",
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    zIndex: 2147483647,
                    display: "flex",
                    alignItems: "center"
                }
            }, fo.createElement(fo.Fragment, null, fo.createElement("button", {
                onClick: () => {
                    const e = !a;
                    o(e),
                    t(e)
                }
                ,
                style: {
                    ...s,
                    ...a ? l : {},
                    backgroundColor: a ? "#b7d0fc" : "area" === u ? "#f5f5f5" : "#ffffff",
                    color: a ? "#1a73e8" : "#000000"
                },
                onMouseEnter: () => !a && c("area"),
                onMouseLeave: () => !a && c(null)
            }, fo.createElement("span", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                }
            }, a ? "Stop selecting" : "Send element", a ? fo.createElement(po, {
                style: {
                    width: "16px",
                    height: "16px"
                }
            }) : fo.createElement(Oo, {
                style: {
                    width: "16px",
                    height: "16px"
                }
            }))), !a && fo.createElement(No, {
                errorCount: n,
                isSelectingArea: a,
                hoveredButton: u,
                setHoveredButton: c,
                onSendConsoleOutput: r,
                buttonStyle: l
            })))
        }
        ;
        function Ao(e) {
            for (const n in e)
                if (n.startsWith("__reactFiber"))
                    return e[n]
        }
        function Io(e) {
            return e
        }
        var ho = t(435);
        async function Lo(e) {
            return await async function(e) {
                if (!e._debugOwner)
                    return {};
                if (!e._debugOwner.type)
                    return {};
                let n = e._debugOwner.type;
                "render"in n && (n = n.render);
                try {
                    let e = Ro(n, !1);
                    if (!e && (e = Ro(n, !0),
                    !e))
                        throw new Error("Could not capture component stack");
                    const t = e.url
                      , r = e.line
                      , a = e.column;
                    if (!t)
                        throw new Error("Top of stack does not contain valid url");
                    const o = await fetch(t)
                      , i = (await o.text()).match(/^\/\/[@#]\s*sourceMappingURL=(\S*?)\s*$/m);
                    if (!i || !i[1])
                        throw new Error("Minified source file does not contain valid sourcemap URL");
                    const s = new URL(i[1],t).toString()
                      , l = await fetch(s);
                    if (!l.ok)
                        throw new Error("Failed to fetch sourcemap");
                    const u = await l.text()
                      , c = new ho.SourceMapConsumer(u).originalPositionFor({
                        line: r,
                        column: a
                    });
                    if (!c.source)
                        throw new Error("Failed to get original position from source map");
                    return {
                        componentName: n.name,
                        fileName: c.source,
                        lineNumber: c.line,
                        columnNumber: c.column
                    }
                } catch (e) {
                    return "name"in n ? {
                        componentName: n.name
                    } : {}
                }
            }(e)
        }
        function Ro(e, n) {
            if (!window.chrome)
                return;
            const t = Error.prepareStackTrace;
            let r, a, o, i;
            Error.prepareStackTrace = (e, n) => n.map((e => ({
                url: e.getScriptNameOrSourceURL(),
                line: e.getLineNumber(),
                column: e.getColumnNumber()
            })));
            try {
                try {
                    if (n) {
                        const s = function() {
                            throw Error()
                        };
                        if (Object.defineProperty(s.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(s, [])
                            } catch (l) {
                                r = l
                            }
                            Reflect.construct(e, [], s)
                        } else {
                            try {
                                s.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(s.prototype)
                        }
                    } else {
                        try {
                            function _() {
                                throw Error()
                            }
                            _()
                        } catch (E) {
                            r = E
                        }
                        const c = e();
                        c && "function" == typeof c.catch && c.catch(( () => {}
                        ))
                    }
                } catch (m) {
                    a = m
                }
            } finally {
                r && (o = r.stack),
                a && (i = a.stack),
                Error.prepareStackTrace = t
            }
            return i && o && i.length >= o.length ? i[i.length - o.length] : void 0
        }
        async function go(e) {
            const n = Ao(e);
            if (!n)
                return;
            const t = await Lo(n);
            return t || await Po(e)
        }
        async function Po(e) {
            const n = e.parentElement;
            if (null === n)
                throw new Error("No parent found for element");
            const t = Ao(n);
            return await Lo(t) || await Po(n)
        }
        const Do = ({isActive: e, onSelect: n, getHoverTarget: t, setIsSelecting: r}) => {
            const [a,o] = fo.useState(null)
              , [i,s] = fo.useState(null);
            return fo.useEffect(( () => {
                if (!e)
                    return void o(null);
                const a = e => {
                    "Escape" === e.key && (e.preventDefault(),
                    e.stopPropagation(),
                    r(!1))
                }
                  , l = e => {
                    const n = e.target;
                    if (n === i || n.closest(".toolbar-container"))
                        return;
                    const r = t(n);
                    r ? (go(r).then((e => {
                        if (e && e.componentName)
                            r.dataset.componentName = e.componentName;
                        else if (r && r.nodeName) {
                            const e = r.nodeName;
                            r.dataset.componentName = "<" + e.toLowerCase() + " />"
                        } else
                            r.dataset.componentName = "Invalid Element";
                        o(r)
                    }
                    )),
                    e.stopPropagation(),
                    o(r)) : o(null)
                }
                  , u = e => {
                    const t = e.target;
                    if (!t || t === i || t.closest(".toolbar-container"))
                        return;
                    const a = t;
                    e.preventDefault(),
                    e.stopPropagation(),
                    e.ctrlKey || e.metaKey || e.shiftKey || r(!1),
                    n(a)
                }
                ;
                document.addEventListener("mouseover", l),
                document.addEventListener("click", u, !0),
                document.addEventListener("keydown", a);
                const c = document.createElement("div");
                return c.style.all = "unset",
                c.style.position = "fixed",
                c.style.pointerEvents = "none",
                c.style.zIndex = "2147483646",
                c.style.transition = "all 0.1s ease-in-out",
                document.body.appendChild(c),
                s(c),
                () => {
                    document.removeEventListener("mouseover", l),
                    document.removeEventListener("click", u, !0),
                    document.removeEventListener("keydown", a),
                    c.remove()
                }
            }
            ), [e, n]),
            fo.useEffect(( () => {
                if (!i || !a)
                    return void (i && (i.style.display = "none"));
                const e = a.getBoundingClientRect();
                i.style.display = "block",
                i.style.top = e.top - 2 + "px",
                i.style.left = e.left - 2 + "px",
                i.style.width = `${e.width}px`,
                i.style.height = `${e.height}px`,
                i.style.border = "2px solid #1a73e8",
                i.style.backgroundColor = "#e8f0fe44",
                i.style.borderRadius = "0";
                const n = a.dataset.componentName || a.nodeName.toLowerCase()
                  , t = i.querySelector(".element-name-label");
                t && t.remove();
                const r = document.createElement("div");
                r.className = "element-name-label",
                r.textContent = n,
                r.style.all = "unset",
                r.style.position = "absolute",
                r.style.top = "-30px",
                r.style.left = "-1px",
                r.style.color = "white",
                r.style.backgroundColor = "#1a73e8",
                r.style.padding = "4px 10px",
                r.style.borderRadius = "0",
                r.style.borderTopLeftRadius = "4px",
                r.style.borderTopRightRadius = "4px",
                r.style.fontSize = "14px",
                r.style.fontWeight = "500",
                r.style.fontFamily = "sans-serif",
                r.style.pointerEvents = "none",
                r.style.boxShadow = "0 1px 3px rgba(0,0,0,0.2)",
                r.style.whiteSpace = "nowrap",
                r.style.textOverflow = "ellipsis",
                r.style.overflow = "hidden",
                i.appendChild(r)
            }
            ), [a, i]),
            null
        }
          , Mo = ({captureElement: e, getHoverTarget: n, captureConsoleOutput: t, errorCount: r=0}) => {
            const [a,o] = fo.useState(!1)
              , [i,s] = fo.useState("")
              , [l,u] = fo.useState(!1)
              , c = e => {
                s(e),
                o(!0)
            }
            ;
            return fo.createElement(fo.Fragment, null, fo.createElement(So, {
                message: i,
                isVisible: a,
                onClose: () => {
                    o(!1)
                }
            }), !a && fo.createElement(Co, {
                isSelecting: l,
                errorCount: r,
                onSendArea: e => {
                    u(e)
                }
                ,
                onSendConsoleOutput: async () => {
                    await t(),
                    c("Errors were added to Cascade")
                }
            }), fo.createElement(Do, {
                isActive: l,
                setIsSelecting: u,
                onSelect: async n => {
                    n && await e(n) && c("Element was added to Cascade")
                }
                ,
                getHoverTarget: n
            }))
        }
        ;
        class yo {
            constructor() {
                this.rootContainer = null,
                this.consoleOutput = [],
                this.errorCount = 0,
                this.root = null,
                this.client = E(mo, G({
                    baseUrl: `${window.location.protocol}//${window.location.host}`,
                    useBinaryFormat: !0
                })),
                this.setupConsoleCapture()
            }
            initialize() {
                this.createToolbar()
            }
            setupConsoleCapture() {
                const e = this
                  , n = console.error;
                console.error = function(...t) {
                    e.consoleOutput.push({
                        type: "error",
                        datetime: Date().toLocaleString(),
                        value: t
                    }),
                    e.errorCount++,
                    e.renderToolbar(),
                    n.apply(console, t)
                }
            }
            async captureElement(e) {
                try {
                    if (!e)
                        return console.warn("No element provided to captureElement"),
                        !1;
                    const n = new ra({
                        tagName: e.localName,
                        id: e.id,
                        outerHtml: e.outerHTML
                    })
                      , t = await go(e);
                    return t?.componentName && (n.reactComponentName = t.componentName,
                    t.fileName && (n.fileLineRange = new jr({
                        absoluteUri: t.fileName,
                        startLine: t.lineNumber
                    }))),
                    this.client.sendDOMElement({
                        domElement: n
                    }),
                    !0
                } catch (e) {
                    return !1
                }
            }
            async captureConsoleOutput() {
                if (this.consoleOutput && 0 !== this.consoleOutput.length)
                    try {
                        const e = this.consoleOutput.slice(-10).map((e => ({
                            timestamp: e.datetime,
                            type: e.type.toUpperCase(),
                            output: e.value.map((e => {
                                if ("object" == typeof e)
                                    try {
                                        return JSON.stringify(e)
                                    } catch (n) {
                                        return String(e)
                                    }
                                return String(e)
                            }
                            )).join(" ")
                        })));
                        this.client.sendConsoleOutput({
                            consoleLog: {
                                lines: e,
                                serverAddress: window.location.host
                            }
                        }),
                        this.errorCount = 0,
                        this.renderToolbar()
                    } catch (e) {
                        console.warn("Error capturing console output:", e)
                    }
            }
            renderToolbar() {
                this.root && this.root.render(fo.createElement(fo.StrictMode, null, fo.createElement(Mo, {
                    captureElement: e => this.captureElement(e),
                    getHoverTarget: Io,
                    captureConsoleOutput: () => this.captureConsoleOutput(),
                    errorCount: this.errorCount
                })))
            }
            createToolbar() {
                this.rootContainer = document.createElement("div"),
                this.rootContainer.className = "toolbar-container",
                document.body.appendChild(this.rootContainer),
                this.root = (0,
                To.H)(this.rootContainer),
                this.renderToolbar()
            }
        }
        document.addEventListener("DOMContentLoaded", ( () => {
            (new yo).initialize()
        }
        ))
    }
    )()
}
)();
