! function(a) {
    "use strict";

    function b(b, c, d) {
        "addEventListener" in a ? b.addEventListener(c, d, !1) : "attachEvent" in a && b.attachEvent("on" + c, d)
    }

    function c(b, c, d) {
        "removeEventListener" in a ? b.removeEventListener(c, d, !1) : "detachEvent" in a && b.detachEvent("on" + c, d)
    }

    function d() {
        var b, c = ["moz", "webkit", "o", "ms"];
        for (b = 0; b < c.length && !N; b += 1) N = a[c[b] + "RequestAnimationFrame"];
        N || h("setup", "RequestAnimationFrame not supported")
    }

    function e(b) {
        var c = "Host page: " + b;
        return a.top !== a.self && (c = a.parentIFrame && a.parentIFrame.getId ? a.parentIFrame.getId() + ": " + b : "Nested host page: " + b), c
    }

    function f(a) {
        return K + "[" + e(a) + "]"
    }

    function g(a) {
        return P[a] ? P[a].log : G
    }

    function h(a, b) {
        k("log", a, b, g(a))
    }

    function i(a, b) {
        k("info", a, b, g(a))
    }

    function j(a, b) {
        k("warn", a, b, !0)
    }

    function k(b, c, d, e) {
        !0 === e && "object" == typeof a.console && console[b](f(c), d)
    }

    function l(d) {
        function e() {
            function a() {
                s(V), p(W)
            }
            g("Height"), g("Width"), t(a, V, "init")
        }

        function f() {
            var a = U.substr(L).split(":");
            return {
                iframe: P[a[0]].iframe,
                id: a[0],
                height: a[1],
                width: a[2],
                type: a[3]
            }
        }

        function g(a) {
            var b = Number(P[W]["max" + a]),
                c = Number(P[W]["min" + a]),
                d = a.toLowerCase(),
                e = Number(V[d]);
            h(W, "Checking " + d + " is in range " + c + "-" + b), c > e && (e = c, h(W, "Set " + d + " to min value")), e > b && (e = b, h(W, "Set " + d + " to max value")), V[d] = "" + e
        }

        function k() {
            function a() {
                function a() {
                    var a = 0,
                        d = !1;
                    for (h(W, "Checking connection is from allowed list of origins: " + c); a < c.length; a++)
                        if (c[a] === b) {
                            d = !0;
                            break
                        }
                    return d
                }

                function d() {
                    var a = P[W].remoteHost;
                    return h(W, "Checking connection is from: " + a), b === a
                }
                return c.constructor === Array ? a() : d()
            }
            var b = d.origin,
                c = P[W].checkOrigin;
            if (c && "" + b != "null" && !a()) throw new Error("Unexpected message received from: " + b + " for " + V.iframe.id + ". Message was: " + d.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
            return !0
        }

        function l() {
            return K === ("" + U).substr(0, L) && U.substr(L).split(":")[0] in P
        }

        function w() {
            var a = V.type in {
                "true": 1,
                "false": 1,
                undefined: 1
            };
            return a && h(W, "Ignoring init message from meta parent page"), a
        }

        function y(a) {
            return U.substr(U.indexOf(":") + J + a)
        }

        function z(a) {
            h(W, "MessageCallback passed: {iframe: " + V.iframe.id + ", message: " + a + "}"), N("messageCallback", {
                iframe: V.iframe,
                message: JSON.parse(a)
            }), h(W, "--")
        }

        function A() {
            var b = document.body.getBoundingClientRect(),
                c = V.iframe.getBoundingClientRect();
            return JSON.stringify({
                iframeHeight: c.height,
                iframeWidth: c.width,
                clientHeight: Math.max(document.documentElement.clientHeight, a.innerHeight || 0),
                clientWidth: Math.max(document.documentElement.clientWidth, a.innerWidth || 0),
                offsetTop: parseInt(c.top - b.top, 10),
                offsetLeft: parseInt(c.left - b.left, 10),
                scrollTop: a.pageYOffset,
                scrollLeft: a.pageXOffset
            })
        }

        function B(a, b) {
            function c() {
                u("Send Page Info", "pageInfo:" + A(), a, b)
            }
            x(c, 32)
        }

        function C() {
            function d(b, c) {
                function d() {
                    P[g] ? B(P[g].iframe, g) : e()
                }["scroll", "resize"].forEach(function(e) {
                    h(g, b + e + " listener for sendPageInfo"), c(a, e, d)
                })
            }

            function e() {
                d("Remove ", c)
            }

            function f() {
                d("Add ", b)
            }
            var g = W;
            f(), P[g].stopPageInfo = e
        }

        function D() {
            P[W] && P[W].stopPageInfo && (P[W].stopPageInfo(), delete P[W].stopPageInfo)
        }

        function E() {
            var a = !0;
            return null === V.iframe && (j(W, "IFrame (" + V.id + ") not found"), a = !1), a
        }

        function F(a) {
            var b = a.getBoundingClientRect();
            return o(W), {
                x: Math.floor(Number(b.left) + Number(M.x)),
                y: Math.floor(Number(b.top) + Number(M.y))
            }
        }

        function G(b) {
            function c() {
                M = g, H(), h(W, "--")
            }

            function d() {
                return {
                    x: Number(V.width) + f.x,
                    y: Number(V.height) + f.y
                }
            }

            function e() {
                a.parentIFrame ? a.parentIFrame["scrollTo" + (b ? "Offset" : "")](g.x, g.y) : j(W, "Unable to scroll to requested position, window.parentIFrame not found")
            }
            var f = b ? F(V.iframe) : {
                    x: 0,
                    y: 0
                },
                g = d();
            h(W, "Reposition requested from iFrame (offset x:" + f.x + " y:" + f.y + ")"), a.top !== a.self ? e() : c()
        }

        function H() {
            !1 !== N("scrollCallback", M) ? p(W) : q()
        }

        function I(b) {
            function c() {
                var a = F(g);
                h(W, "Moving to in page link (#" + e + ") at x: " + a.x + " y: " + a.y), M = {
                    x: a.x,
                    y: a.y
                }, H(), h(W, "--")
            }

            function d() {
                a.parentIFrame ? a.parentIFrame.moveToAnchor(e) : h(W, "In page link #" + e + " not found and window.parentIFrame not found")
            }
            var e = b.split("#")[1] || "",
                f = decodeURIComponent(e),
                g = document.getElementById(f) || document.getElementsByName(f)[0];
            g ? c() : a.top !== a.self ? d() : h(W, "In page link #" + e + " not found")
        }

        function N(a, b) {
            return m(W, a, b)
        }

        function O() {
            switch (P[W].firstRun && T(), V.type) {
                case "close":
                    n(V.iframe);
                    break;
                case "message":
                    z(y(6));
                    break;
                case "scrollTo":
                    G(!1);
                    break;
                case "scrollToOffset":
                    G(!0);
                    break;
                case "pageInfo":
                    B(P[W].iframe, W), C();
                    break;
                case "pageInfoStop":
                    D();
                    break;
                case "inPageLink":
                    I(y(9));
                    break;
                case "reset":
                    r(V);
                    break;
                case "init":
                    e(), N("initCallback", V.iframe), N("resizedCallback", V);
                    break;
                default:
                    e(), N("resizedCallback", V)
            }
        }

        function Q(a) {
            var b = !0;
            return P[a] || (b = !1, j(V.type + " No settings for " + a + ". Message was: " + U)), b
        }

        function S() {
            for (var a in P) u("iFrame requested init", v(a), document.getElementById(a), a)
        }

        function T() {
            P[W].firstRun = !1
        }
        var U = d.data,
            V = {},
            W = null;
        "[iFrameResizerChild]Ready" === U ? S() : l() ? (V = f(), W = R = V.id, !w() && Q(W) && (h(W, "Received: " + U), E() && k() && O())) : i(W, "Ignored: " + U)
    }

    function m(a, b, c) {
        var d = null,
            e = null;
        if (P[a]) {
            if (d = P[a][b], "function" != typeof d) throw new TypeError(b + " on iFrame[" + a + "] is not a function");
            e = d(c)
        }
        return e
    }

    function n(a) {
        var b = a.id;
        h(b, "Removing iFrame: " + b), a.parentNode.removeChild(a), m(b, "closedCallback", b), h(b, "--"), delete P[b]
    }

    function o(b) {
        null === M && (M = {
            x: void 0 !== a.pageXOffset ? a.pageXOffset : document.documentElement.scrollLeft,
            y: void 0 !== a.pageYOffset ? a.pageYOffset : document.documentElement.scrollTop
        }, h(b, "Get page position: " + M.x + "," + M.y))
    }

    function p(b) {
        null !== M && (a.scrollTo(M.x, M.y), h(b, "Set page position: " + M.x + "," + M.y), q())
    }

    function q() {
        M = null
    }

    function r(a) {
        function b() {
            s(a), u("reset", "reset", a.iframe, a.id)
        }
        h(a.id, "Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")), o(a.id), t(b, a, "reset")
    }

    function s(a) {
        function b(b) {
            a.iframe.style[b] = a[b] + "px", h(a.id, "IFrame (" + e + ") " + b + " set to " + a[b] + "px")
        }

        function c(b) {
            H || "0" !== a[b] || (H = !0, h(e, "Hidden iFrame detected, creating visibility listener"), y())
        }

        function d(a) {
            b(a), c(a)
        }
        var e = a.iframe.id;
        P[e] && (P[e].sizeHeight && d("height"), P[e].sizeWidth && d("width"))
    }

    function t(a, b, c) {
        c !== b.type && N ? (h(b.id, "Requesting animation frame"), N(a)) : a()
    }

    function u(a, b, c, d) {
        function e() {
            var e = P[d].targetOrigin;
            h(d, "[" + a + "] Sending msg to iframe[" + d + "] (" + b + ") targetOrigin: " + e), c.contentWindow.postMessage(K + b, e)
        }

        function f() {
            i(d, "[" + a + "] IFrame(" + d + ") not found"), P[d] && delete P[d]
        }

        function g() {
            c && "contentWindow" in c && null !== c.contentWindow ? e() : f()
        }
        d = d || c.id, P[d] && g()
    }

    function v(a) {
        return a + ":" + P[a].bodyMarginV1 + ":" + P[a].sizeWidth + ":" + P[a].log + ":" + P[a].interval + ":" + P[a].enablePublicMethods + ":" + P[a].autoResize + ":" + P[a].bodyMargin + ":" + P[a].heightCalculationMethod + ":" + P[a].bodyBackground + ":" + P[a].bodyPadding + ":" + P[a].tolerance + ":" + P[a].inPageLinks + ":" + P[a].resizeFrom + ":" + P[a].widthCalculationMethod
    }

    function w(a, c) {
        function d() {
            function b(b) {
                1 / 0 !== P[w][b] && 0 !== P[w][b] && (a.style[b] = P[w][b] + "px", h(w, "Set " + b + " = " + P[w][b] + "px"))
            }

            function c(a) {
                if (P[w]["min" + a] > P[w]["max" + a]) throw new Error("Value for min" + a + " can not be greater than max" + a)
            }
            c("Height"), c("Width"), b("maxHeight"), b("minHeight"), b("maxWidth"), b("minWidth")
        }

        function e() {
            var a = c && c.id || S.id + F++;
            return null !== document.getElementById(a) && (a += F++), a
        }

        function f(b) {
            return R = b, "" === b && (a.id = b = e(), G = (c || {}).log, R = b, h(b, "Added missing iframe ID: " + b + " (" + a.src + ")")), b
        }

        function g() {
            h(w, "IFrame scrolling " + (P[w].scrolling ? "enabled" : "disabled") + " for " + w), a.style.overflow = !1 === P[w].scrolling ? "hidden" : "auto", a.scrolling = !1 === P[w].scrolling ? "no" : "yes"
        }

        function i() {
            ("number" == typeof P[w].bodyMargin || "0" === P[w].bodyMargin) && (P[w].bodyMarginV1 = P[w].bodyMargin, P[w].bodyMargin = "" + P[w].bodyMargin + "px")
        }

        function k() {
            var b = P[w].firstRun,
                c = P[w].heightCalculationMethod in O;
            !b && c && r({
                iframe: a,
                height: 0,
                width: 0,
                type: "init"
            })
        }

        function l() {
            Function.prototype.bind && (P[w].iframe.iFrameResizer = {
                close: n.bind(null, P[w].iframe),
                resize: u.bind(null, "Window resize", "resize", P[w].iframe),
                moveToAnchor: function(a) {
                    u("Move to anchor", "moveToAnchor:" + a, P[w].iframe, w)
                },
                sendMessage: function(a) {
                    a = JSON.stringify(a), u("Send Message", "message:" + a, P[w].iframe, w)
                }
            })
        }

        function m(c) {
            function d() {
                u("iFrame.onload", c, a), k()
            }
            b(a, "load", d), u("init", c, a)
        }

        function o(a) {
            if ("object" != typeof a) throw new TypeError("Options is not an object")
        }

        function p(a) {
            for (var b in S) S.hasOwnProperty(b) && (P[w][b] = a.hasOwnProperty(b) ? a[b] : S[b])
        }

        function q(a) {
            return "" === a || "file://" === a ? "*" : a
        }

        function s(b) {
            b = b || {}, P[w] = {
                firstRun: !0,
                iframe: a,
                remoteHost: a.src.split("/").slice(0, 3).join("/")
            }, o(b), p(b), P[w].targetOrigin = !0 === P[w].checkOrigin ? q(P[w].remoteHost) : "*"
        }

        function t() {
            return w in P && "iFrameResizer" in a
        }
        var w = f(a.id);
        t() ? j(w, "Ignored iFrame, already setup.") : (s(c), g(), d(), i(), m(v(w)), l())
    }

    function x(a, b) {
        null === Q && (Q = setTimeout(function() {
            Q = null, a()
        }, b))
    }

    function y() {
        function b() {
            function a(a) {
                function b(b) {
                    return "0px" === P[a].iframe.style[b]
                }

                function c(a) {
                    return null !== a.offsetParent
                }
                c(P[a].iframe) && (b("height") || b("width")) && u("Visibility change", "resize", P[a].iframe, a)
            }
            for (var b in P) a(b)
        }

        function c(a) {
            h("window", "Mutation observed: " + a[0].target + " " + a[0].type), x(b, 16)
        }

        function d() {
            var a = document.querySelector("body"),
                b = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                },
                d = new e(c);
            d.observe(a, b)
        }
        var e = a.MutationObserver || a.WebKitMutationObserver;
        e && d()
    }

    function z(a) {
        function b() {
            B("Window " + a, "resize")
        }
        h("window", "Trigger event: " + a), x(b, 16)
    }

    function A() {
        function a() {
            B("Tab Visable", "resize")
        }
        "hidden" !== document.visibilityState && (h("document", "Trigger event: Visiblity change"), x(a, 16))
    }

    function B(a, b) {
        function c(a) {
            return "parent" === P[a].resizeFrom && P[a].autoResize && !P[a].firstRun
        }
        for (var d in P) c(d) && u(a, b, document.getElementById(d), d)
    }

    function C() {
        b(a, "message", l), b(a, "resize", function() {
            z("resize")
        }), b(document, "visibilitychange", A), b(document, "-webkit-visibilitychange", A), b(a, "focusin", function() {
            z("focus")
        }), b(a, "focus", function() {
            z("focus")
        })
    }

    function D() {
        function a(a, c) {
            function d() {
                if (!c.tagName) throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== c.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + c.tagName + ">")
            }
            c && (d(), w(c, a), b.push(c))
        }
        var b;
        return d(), C(),
            function(c, d) {
                switch (b = [], typeof d) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(d || "iframe"), a.bind(void 0, c));
                        break;
                    case "object":
                        a(c, d);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof d + ")")
                }
                return b
            }
    }

    function E(a) {
        a.fn ? a.fn.iFrameResize = function(a) {
            function b(b, c) {
                w(c, a)
            }
            return this.filter("iframe").each(b).end()
        } : i("", "Unable to bind to jQuery, it is not fully loaded.")
    }
    var F = 0,
        G = !1,
        H = !1,
        I = "message",
        J = I.length,
        K = "[iFrameSizer]",
        L = K.length,
        M = null,
        N = a.requestAnimationFrame,
        O = {
            max: 1,
            scroll: 1,
            bodyScroll: 1,
            documentElementScroll: 1
        },
        P = {},
        Q = null,
        R = "Host Page",
        S = {
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: "bodyOffset",
            id: "iFrameResizer",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            tolerance: 0,
            widthCalculationMethod: "scroll",
            closedCallback: function() {},
            initCallback: function() {},
            messageCallback: function() {
                j("MessageCallback function not defined")
            },
            resizedCallback: function() {},
            scrollCallback: function() {
                return !0
            }
        };
    a.jQuery && E(jQuery), "function" == typeof define && define.amd ? define([], D) : "object" == typeof module && "object" == typeof module.exports ? module.exports = D() : a.iFrameResize = a.iFrameResize || D()
}(window || {});

function initIframe(iframe_id) {
    var og_check = 0;
    var iWidth = window.innerWidth;
    var og_e = document.getElementById(iframe_id);
    if (og_e.hasAttribute("data-check")) {
        og_check = 1
    } else {
        og_e.setAttribute("data-check", "1")
    }
    if (og_check == 0) {
        og_e.setAttribute("style", "line-height: 0; position:relative;");
        var og_u = og_e.getAttribute('data-url');
        var og_su = og_e.getAttribute('data-surl');
        var og_w = og_e.getAttribute('data-width');
        var og_b = document.getElementsByTagName("body")[0];
        var og_h = document.getElementsByTagName("html")[0];
        og_b.setAttribute("style", "overflow:scroll !important;height: 100%;-webkit-overflow-scrolling: touch !important;");
        var og_js = document.createElement("script");
        og_e.parentElement.setAttribute("style", "width:100% !important;");
        if (iWidth < 786) {
            var randNum = Number(Math.floor(Math.random() * (3000 - 2000) + 2000));
            var imageUrl = "http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=agent:mobile,delay:" + randNum + ",width:" + iWidth + "/" + og_su;
            var og_image = document.createElement("img");
            og_image.setAttribute("id", "og_image_" + iframe_id);
            og_image.setAttribute("src", imageUrl);
            og_image.setAttribute("width", og_w);
            og_image.setAttribute("onclick", "onImgClick('" + iframe_id + "')");
            og_e.appendChild(og_image);
            initMobileFrames(iframe_id);
            var og_bw = document.getElementById("og_body_wrapper");
            var og_iFrame = document.createElement("iframe");
            og_iFrame.setAttribute("id", "og_iframe_" + iframe_id);
            og_iFrame.setAttribute("style", "border:none;");
            og_iFrame.setAttribute("class", "hide");
            og_iFrame.setAttribute("src", og_u);
            og_iFrame.setAttribute("width", og_w);
            og_iFrame.setAttribute("scrolling", "auto");
            og_iFrame.setAttribute("onload", "initHeight('" + iframe_id + "')");
            og_bw.appendChild(og_iFrame)
        } else {
            var og_iFrame = document.createElement("iframe");
            og_iFrame.setAttribute("id", "og_iframe_" + iframe_id);
            og_iFrame.setAttribute("style", "border:none;");
            og_iFrame.setAttribute("src", og_u);
            og_iFrame.setAttribute("width", og_w);
            og_iFrame.setAttribute("scrolling", "auto");
            og_iFrame.setAttribute("onload", "initHeight('" + iframe_id + "')");
            og_e.appendChild(og_iFrame)
        }
    }
}

function initHeight(iframe_id) {
    var iWidth = window.innerWidth;
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var aspectRatio = screenWidth / screenHeight;
    var iFrame = document.getElementById("og_iframe_" + iframe_id);
    var width = iFrame.clientWidth;
    var height = width / aspectRatio;
    if (iWidth < 786) {
        iFrame.style.minHeight = height + 'px'
    } else {
        var iframes = iFrameResize({
            log: false,
            autoResize: true,
            enablePublicMethods: true,
            checkOrigin: false,
            minHeight: height
        }, "#og_iframe_" + iframe_id)
    }
}

function initMobileFrames(iframe_id) {
    var og_b = document.getElementsByTagName("body")[0];
    var og_h = document.getElementsByTagName("html")[0];
    if (!document.getElementById("og_body_wrapper")) {
        var body_wrapper = document.createElement("div");
        body_wrapper.setAttribute("id", "og_body_wrapper");
        body_wrapper.setAttribute("style", "overflow: scroll !important;-webkit-overflow-scrolling:touch !important;-webkit-transform: translateZ(0px);-webkit-transform: translate3d(0,0,0);");
        og_b.appendChild(body_wrapper);
        var og_style = document.createElement("style");
        var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
        if (IS_IPHONE) {
            var style_node = document.createTextNode("body, html {height: 100%;margin: 0;}.fullScreen {z-index:9990;width: 100%;height: 100% !important;position: fixed;top: 0;left: 0;}.hide{display:none;}.height-auto{height: 100vh;}.ovr-hid{overflow: hidden !important;}")
        } else {
            var style_node = document.createTextNode("body, html {height: 100%;margin: 0;}.fullScreen {z-index:9990;width: 100%;height: 100% !important;position: fixed;top: 0;left: 0;}.hide{display:none;}.height-auto{height: 100%; margin-bottom: -10px;}.ovr-hid{overflow: hidden !important;}")
        }
        og_style.appendChild(style_node);
        og_b.appendChild(og_style)
    }
    var og_button = document.createElement("a");
    og_button.setAttribute("href", "javascript:void(0);");
    og_button.setAttribute("id", "og_iframe_button_" + iframe_id);
    og_button.setAttribute("class", "og-iframe-button hide");
    og_button.setAttribute("onclick", "onImgClick('" + iframe_id + "')");
    og_button.setAttribute("style", "position: fixed;right: 3%;top: 3%;color: black;text-decoration: none;z-index:9999; height:30px; width:30px;");
    var button_node = document.createTextNode("");
    og_button.appendChild(button_node);
    og_b.appendChild(og_button);
    var og_close = document.createElement("img");
    og_close.setAttribute("src", "https://cdn.filestackcontent.com/HuaIq7oFQwWyS5Fjni9e");
    og_button.appendChild(og_close)
}

function onImgClick(iframe_id) {
    var e = document.body;
    document.getElementsByTagName('html')[0].classList.toggle('ovr-hid');
    document.getElementById('og_body_wrapper').classList.toggle('fullScreen');
    document.getElementById("og_iframe_" + iframe_id).classList.toggle('hide');
    document.getElementById("og_iframe_" + iframe_id).classList.toggle('height-auto');
    document.getElementById('og_iframe_button_' + iframe_id).classList.toggle('hide');
    void 0 !== document.fullScreenElement && null === document.fullScreenElement || void 0 !== document.msFullscreenElement && null === document.msFullscreenElement || void 0 !== document.mozFullScreen && !document.mozFullScreen || void 0 !== document.webkitIsFullScreen && !document.webkitIsFullScreen ? e.requestFullScreen ? e.requestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.msRequestFullscreen && e.msRequestFullscreen() : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
}