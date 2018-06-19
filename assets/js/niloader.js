! function(a) {
    "use strict";

    function b(a, b, c) {
        "addEventListener" in window ? a.addEventListener(b, c, !1) : "attachEvent" in window && a.attachEvent("on" + b, c)
    }

    function c(a, b, c) {
        "removeEventListener" in window ? a.removeEventListener(b, c, !1) : "detachEvent" in window && a.detachEvent("on" + b, c)
    }

    function d() {
        var a, b = ["moz", "webkit", "o", "ms"];
        for (a = 0; a < b.length && !O; a += 1) O = window[b[a] + "RequestAnimationFrame"];
        O || h("setup", "RequestAnimationFrame not supported")
    }

    function e(a) {
        var b = "Host page: " + a;
        return window.top !== window.self && (b = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + a : "Nested host page: " + a), b
    }

    function f(a) {
        return L + "[" + e(a) + "]"
    }

    function g(a) {
        return Q[a] ? Q[a].log : H
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

    function k(a, b, c, d) {
        !0 === d && "object" == typeof window.console && console[a](f(b), c)
    }

    function l(a) {
        function d() {
            function a() {
                s(U), p(V), I("resizedCallback", U)
            }
            f("Height"), f("Width"), t(a, U, "init")
        }

        function e() {
            var a = T.substr(M).split(":");
            return {
                iframe: Q[a[0]] && Q[a[0]].iframe,
                id: a[0],
                height: a[1],
                width: a[2],
                type: a[3]
            }
        }

        function f(a) {
            var b = Number(Q[V]["max" + a]),
                c = Number(Q[V]["min" + a]),
                d = a.toLowerCase(),
                e = Number(U[d]);
            h(V, "Checking " + d + " is in range " + c + "-" + b), e < c && (e = c, h(V, "Set " + d + " to min value")), e > b && (e = b, h(V, "Set " + d + " to max value")), U[d] = "" + e
        }

        function g() {
            function b() {
                function a() {
                    var a = 0,
                        b = !1;
                    for (h(V, "Checking connection is from allowed list of origins: " + d); a < d.length; a++)
                        if (d[a] === c) {
                            b = !0;
                            break
                        }
                    return b
                }

                function b() {
                    var a = Q[V] && Q[V].remoteHost;
                    return h(V, "Checking connection is from: " + a), c === a
                }
                return d.constructor === Array ? a() : b()
            }
            var c = a.origin,
                d = Q[V] && Q[V].checkOrigin;
            if (d && "" + c != "null" && !b()) throw new Error("Unexpected message received from: " + c + " for " + U.iframe.id + ". Message was: " + a.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
            return !0
        }

        function k() {
            return L === ("" + T).substr(0, M) && T.substr(M).split(":")[0] in Q
        }

        function l() {
            var a = U.type in {
                true: 1,
                false: 1,
                undefined: 1
            };
            return a && h(V, "Ignoring init message from meta parent page"), a
        }

        function w(a) {
            return T.substr(T.indexOf(":") + K + a)
        }

        function x(a) {
            h(V, "MessageCallback passed: {iframe: " + U.iframe.id + ", message: " + a + "}"), I("messageCallback", {
                iframe: U.iframe,
                message: JSON.parse(a)
            }), h(V, "--")
        }

        function z() {
            var a = document.body.getBoundingClientRect(),
                b = U.iframe.getBoundingClientRect();
            return JSON.stringify({
                iframeHeight: b.height,
                iframeWidth: b.width,
                clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                offsetTop: parseInt(b.top - a.top, 10),
                offsetLeft: parseInt(b.left - a.left, 10),
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset
            })
        }

        function A(a, b) {
            function c() {
                u("Send Page Info", "pageInfo:" + z(), a, b)
            }
            y(c, 32, b)
        }

        function B() {
            function a(a, b) {
                function c() {
                    Q[f] ? A(Q[f].iframe, f) : d()
                }["scroll", "resize"].forEach(function(d) {
                    h(f, a + d + " listener for sendPageInfo"), b(window, d, c)
                })
            }

            function d() {
                a("Remove ", c)
            }

            function e() {
                a("Add ", b)
            }
            var f = V;
            e(), Q[f] && (Q[f].stopPageInfo = d)
        }

        function C() {
            Q[V] && Q[V].stopPageInfo && (Q[V].stopPageInfo(), delete Q[V].stopPageInfo)
        }

        function D() {
            var a = !0;
            return null === U.iframe && (j(V, "IFrame (" + U.id + ") not found"), a = !1), a
        }

        function E(a) {
            var b = a.getBoundingClientRect();
            return o(V), {
                x: Math.floor(Number(b.left) + Number(N.x)),
                y: Math.floor(Number(b.top) + Number(N.y))
            }
        }

        function F(a) {
            function b() {
                N = f, G(), h(V, "--")
            }

            function c() {
                return {
                    x: Number(U.width) + e.x,
                    y: Number(U.height) + e.y
                }
            }

            function d() {
                window.parentIFrame ? window.parentIFrame["scrollTo" + (a ? "Offset" : "")](f.x, f.y) : j(V, "Unable to scroll to requested position, window.parentIFrame not found")
            }
            var e = a ? E(U.iframe) : {
                    x: 0,
                    y: 0
                },
                f = c();
            h(V, "Reposition requested from iFrame (offset x:" + e.x + " y:" + e.y + ")"), window.top !== window.self ? d() : b()
        }

        function G() {
            !1 !== I("scrollCallback", N) ? p(V) : q()
        }

        function H(a) {
            function b() {
                var a = E(f);
                h(V, "Moving to in page link (#" + d + ") at x: " + a.x + " y: " + a.y), N = {
                    x: a.x,
                    y: a.y
                }, G(), h(V, "--")
            }

            function c() {
                window.parentIFrame ? window.parentIFrame.moveToAnchor(d) : h(V, "In page link #" + d + " not found and window.parentIFrame not found")
            }
            var d = a.split("#")[1] || "",
                e = decodeURIComponent(d),
                f = document.getElementById(e) || document.getElementsByName(e)[0];
            f ? b() : window.top !== window.self ? c() : h(V, "In page link #" + d + " not found")
        }

        function I(a, b) {
            return m(V, a, b)
        }

        function J() {
            switch (Q[V] && Q[V].firstRun && R(), U.type) {
                case "close":
                    Q[V].closeRequestCallback ? m(V, "closeRequestCallback", Q[V].iframe) : n(U.iframe);
                    break;
                case "message":
                    x(w(6));
                    break;
                case "scrollTo":
                    F(!1);
                    break;
                case "scrollToOffset":
                    F(!0);
                    break;
                case "pageInfo":
                    A(Q[V] && Q[V].iframe, V), B();
                    break;
                case "pageInfoStop":
                    C();
                    break;
                case "inPageLink":
                    H(w(9));
                    break;
                case "reset":
                    r(U);
                    break;
                case "init":
                    d(), I("initCallback", U.iframe);
                    break;
                default:
                    d()
            }
        }

        function O(a) {
            var b = !0;
            return Q[a] || (b = !1, j(U.type + " No settings for " + a + ". Message was: " + T)), b
        }

        function P() {
            for (var a in Q) u("iFrame requested init", v(a), document.getElementById(a), a)
        }

        function R() {
            Q[V] && (Q[V].firstRun = !1)
        }
        var T = a.data,
            U = {},
            V = null;
        "[iFrameResizerChild]Ready" === T ? P() : k() ? (U = e(), V = S = U.id, Q[V] && (Q[V].loaded = !0), !l() && O(V) && (h(V, "Received: " + T), D() && g() && J())) : i(V, "Ignored: " + T)
    }

    function m(a, b, c) {
        var d = null,
            e = null;
        if (Q[a]) {
            if ("function" != typeof(d = Q[a][b])) throw new TypeError(b + " on iFrame[" + a + "] is not a function");
            e = d(c)
        }
        return e
    }

    function n(a) {
        var b = a.id;
        h(b, "Removing iFrame: " + b), a.parentNode && a.parentNode.removeChild(a), m(b, "closedCallback", b), h(b, "--"), delete Q[b]
    }

    function o(b) {
        null === N && (N = {
            x: window.pageXOffset !== a ? window.pageXOffset : document.documentElement.scrollLeft,
            y: window.pageYOffset !== a ? window.pageYOffset : document.documentElement.scrollTop
        }, h(b, "Get page position: " + N.x + "," + N.y))
    }

    function p(a) {
        null !== N && (window.scrollTo(N.x, N.y), h(a, "Set page position: " + N.x + "," + N.y), q())
    }

    function q() {
        N = null
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
            I || "0" !== a[b] || (I = !0, h(e, "Hidden iFrame detected, creating visibility listener"), z())
        }

        function d(a) {
            b(a), c(a)
        }
        var e = a.iframe.id;
        Q[e] && (Q[e].sizeHeight && d("height"), Q[e].sizeWidth && d("width"))
    }

    function t(a, b, c) {
        c !== b.type && O ? (h(b.id, "Requesting animation frame"), O(a)) : a()
    }

    function u(a, b, c, d, e) {
        function f() {
            var e = Q[d] && Q[d].targetOrigin;
            h(d, "[" + a + "] Sending msg to iframe[" + d + "] (" + b + ") targetOrigin: " + e), c.contentWindow.postMessage(L + b, e)
        }

        function g() {
            j(d, "[" + a + "] IFrame(" + d + ") not found")
        }

        function i() {
            c && "contentWindow" in c && null !== c.contentWindow ? f() : g()
        }

        function k() {
            function a() {
                !Q[d] || Q[d].loaded || l || (l = !0, j(d, "IFrame has not responded within " + Q[d].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
            }
            e && Q[d] && Q[d].warningTimeout && (Q[d].msgTimeout = setTimeout(a, Q[d].warningTimeout))
        }
        var l = !1;
        d = d || c.id, Q[d] && (i(), k())
    }

    function v(a) {
        return a + ":" + Q[a].bodyMarginV1 + ":" + Q[a].sizeWidth + ":" + Q[a].log + ":" + Q[a].interval + ":" + Q[a].enablePublicMethods + ":" + Q[a].autoResize + ":" + Q[a].bodyMargin + ":" + Q[a].heightCalculationMethod + ":" + Q[a].bodyBackground + ":" + Q[a].bodyPadding + ":" + Q[a].tolerance + ":" + Q[a].inPageLinks + ":" + Q[a].resizeFrom + ":" + Q[a].widthCalculationMethod
    }

    function w(c, d) {
        function e() {
            function a(a) {
                1 / 0 !== Q[x][a] && 0 !== Q[x][a] && (c.style[a] = Q[x][a] + "px", h(x, "Set " + a + " = " + Q[x][a] + "px"))
            }

            function b(a) {
                if (Q[x]["min" + a] > Q[x]["max" + a]) throw new Error("Value for min" + a + " can not be greater than max" + a)
            }
            b("Height"), b("Width"), a("maxHeight"), a("minHeight"), a("maxWidth"), a("minWidth")
        }

        function f() {
            var a = d && d.id || T.id + G++;
            return null !== document.getElementById(a) && (a += G++), a
        }

        function g(a) {
            return S = a, "" === a && (c.id = a = f(), H = (d || {}).log, S = a, h(a, "Added missing iframe ID: " + a + " (" + c.src + ")")), a
        }

        function i() {
            switch (h(x, "IFrame scrolling " + (Q[x] && Q[x].scrolling ? "enabled" : "disabled") + " for " + x), c.style.overflow = !1 === (Q[x] && Q[x].scrolling) ? "hidden" : "auto", Q[x] && Q[x].scrolling) {
                case !0:
                    c.scrolling = "yes";
                    break;
                case !1:
                    c.scrolling = "no";
                    break;
                default:
                    c.scrolling = Q[x] ? Q[x].scrolling : "no"
            }
        }

        function k() {
            "number" != typeof(Q[x] && Q[x].bodyMargin) && "0" !== (Q[x] && Q[x].bodyMargin) || (Q[x].bodyMarginV1 = Q[x].bodyMargin, Q[x].bodyMargin = Q[x].bodyMargin + "px")
        }

        function l() {
            var a = Q[x] && Q[x].firstRun,
                b = Q[x] && Q[x].heightCalculationMethod in P;
            !a && b && r({
                iframe: c,
                height: 0,
                width: 0,
                type: "init"
            })
        }

        function m() {
            Function.prototype.bind && Q[x] && (Q[x].iframe.iFrameResizer = {
                close: n.bind(null, Q[x].iframe),
                resize: u.bind(null, "Window resize", "resize", Q[x].iframe),
                moveToAnchor: function(a) {
                    u("Move to anchor", "moveToAnchor:" + a, Q[x].iframe, x)
                },
                sendMessage: function(a) {
                    a = JSON.stringify(a), u("Send Message", "message:" + a, Q[x].iframe, x)
                }
            })
        }

        function o(d) {
            function e() {
                u("iFrame.onload", d, c, a, !0), l()
            }
            b(c, "load", e), u("init", d, c, a, !0)
        }

        function p(a) {
            if ("object" != typeof a) throw new TypeError("Options is not an object")
        }

        function q(a) {
            for (var b in T) T.hasOwnProperty(b) && (Q[x][b] = a.hasOwnProperty(b) ? a[b] : T[b])
        }

        function s(a) {
            return "" === a || "file://" === a ? "*" : a
        }

        function t(a) {
            a = a || {}, Q[x] = {
                firstRun: !0,
                iframe: c,
                remoteHost: c.src.split("/").slice(0, 3).join("/")
            }, p(a), q(a), Q[x] && (Q[x].targetOrigin = !0 === Q[x].checkOrigin ? s(Q[x].remoteHost) : "*")
        }

        function w() {
            return x in Q && "iFrameResizer" in c
        }
        var x = g(c.id);
        w() ? j(x, "Ignored iFrame, already setup.") : (t(d), i(), e(), k(), o(v(x)), m())
    }

    function x(a, b) {
        null === R && (R = setTimeout(function() {
            R = null, a()
        }, b))
    }

    function y(a, b, c) {
        U[c] || (U[c] = setTimeout(function() {
            U[c] = null, a()
        }, b))
    }

    function z() {
        function a() {
            function a(a) {
                function b(b) {
                    return "0px" === (Q[a] && Q[a].iframe.style[b])
                }

                function c(a) {
                    return null !== a.offsetParent
                }
                Q[a] && c(Q[a].iframe) && (b("height") || b("width")) && u("Visibility change", "resize", Q[a].iframe, a)
            }
            for (var b in Q) a(b)
        }

        function b(b) {
            h("window", "Mutation observed: " + b[0].target + " " + b[0].type), x(a, 16)
        }

        function c() {
            var a = document.querySelector("body"),
                c = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                };
            new d(b).observe(a, c)
        }
        var d = window.MutationObserver || window.WebKitMutationObserver;
        d && c()
    }

    function A(a) {
        function b() {
            C("Window " + a, "resize")
        }
        h("window", "Trigger event: " + a), x(b, 16)
    }

    function B() {
        function a() {
            C("Tab Visable", "resize")
        }
        "hidden" !== document.visibilityState && (h("document", "Trigger event: Visiblity change"), x(a, 16))
    }

    function C(a, b) {
        function c(a) {
            return Q[a] && "parent" === Q[a].resizeFrom && Q[a].autoResize && !Q[a].firstRun
        }
        for (var d in Q) c(d) && u(a, b, document.getElementById(d), d)
    }

    function D() {
        b(window, "message", l), b(window, "resize", function() {
            A("resize")
        }), b(document, "visibilitychange", B), b(document, "-webkit-visibilitychange", B), b(window, "focusin", function() {
            A("focus")
        }), b(window, "focus", function() {
            A("focus")
        })
    }

    function E() {
        function b(a, b) {
            function c() {
                if (!b.tagName) throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== b.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + b.tagName + ">")
            }
            b && (c(), w(b, a), e.push(b))
        }

        function c(a) {
            a && a.enablePublicMethods && j("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
        }
        var e;
        return d(), D(),
            function(d, f) {
                switch (e = [], c(d), typeof f) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(f || "iframe"), b.bind(a, d));
                        break;
                    case "object":
                        b(d, f);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof f + ")")
                }
                return e
            }
    }

    function F(a) {
        a.fn ? a.fn.iFrameResize || (a.fn.iFrameResize = function(a) {
            function b(b, c) {
                w(c, a)
            }
            return this.filter("iframe").each(b).end()
        }) : i("", "Unable to bind to jQuery, it is not fully loaded.")
    }
    if ("undefined" != typeof window) {
        var G = 0,
            H = !1,
            I = !1,
            J = "message",
            K = J.length,
            L = "[iFrameSizer]",
            M = L.length,
            N = null,
            O = window.requestAnimationFrame,
            P = {
                max: 1,
                scroll: 1,
                bodyScroll: 1,
                documentElementScroll: 1
            },
            Q = {},
            R = null,
            S = "Host Page",
            T = {
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
                warningTimeout: 5e3,
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
            },
            U = {};
        window.jQuery && F(window.jQuery), "function" == typeof define && define.amd ? define([], E) : "object" == typeof module && "object" == typeof module.exports ? module.exports = E() : window.iFrameResize = window.iFrameResize || E()
    }
}();

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
            var imageUrl = "https://api.screenshotlayer.com/api/capture?access_key=0f0d6b2bad83c4e6a23de03080a3c29d&url=" + og_su + "&viewport=414x736&fullpage=1&delay=2";
            // var imageUrl = "http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=agent:mobile,delay:" + randNum + ",width:" + iWidth + "/" + og_su;
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
            // var og_mobile_content = document.getElementById("og_mobile_content");
            // og_mobile_content.setAttribute("style", "display:none;");
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

function initMobileCode(iframe_id) {
    var og_e = document.getElementById(iframe_id);
    var heading = og_e.getAttribute('heading');
    var subheading = og_e.getAttribute('subheading');
    var bgimage = og_e.getAttribute('bgimage');
    var bgImageVisible = og_e.getAttribute('bgImageVisible');
    var lpVisible = og_e.getAttribute('lpVisible');
    var bgColor = og_e.getAttribute('bgColor');
    var componentColor = og_e.getAttribute('componentColor');
    var textColor = og_e.getAttribute('textColor');
    var logo = og_e.getAttribute('logo');
    var tintRGB = og_e.getAttribute('tintRGB');
    var mobileHTML = "<div id='og_mobile_content' style='float:left; width:100%; background-color:" + bgColor + "; background-image:url(\"" + bgimage + "\"); background-repeat:no-repeat;display:table; background-position:top center; background-size:cover; min-height:480px; text-align:center;'> <div class='overlay' style=' background: " + tintRGB + "; padding:40px 0; position:relative; height: 100%; display: table-cell; vertical-align: middle;'> <div class='logo-part' style='display:inline-block; position:absolute;z-index:99; top:20px;left:0; right:0'> <img src='" + logo + "' style='height:30px; display:inline-block'/> </div><div class='content'> <div style='float:none; display:inline-block;width:100%; max-width:480px;padding:30px 15px; text-align:center; box-sizing: border-box;'> <h1 style='float:left; width:100%; color:" + textColor + "; max-width:100%; font-size:22px; font-family:Arial, Helvetica, sans-serif; margin:0 0 15px 0;box-sizing: border-box;  line-height:28px;'>" + heading + "</h1><p style='float:left; width:100%; max-width:100%; color:" + textColor + ";font-size:14px; font-family:Arial, Helvetica, sans-serif; margin:0 0 15px 0;box-sizing: border-box; line-height:20px;'>" + subheading + "</p><button onclick='onImgClick(\"" + iframe_id + "\")' type='button' style='text-transform: uppercase; display: inline-block; height:auto; line-height: 1;padding: 10px 25px; border-radius:3px; cursor:pointer; font-size: 14px;text-align: center;box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.2); background: " + componentColor + "; color:#fff; border: 1px solid " + componentColor + ";letter-spacing: 0.5px;'>Start</button></div><div class='build-out' style='position:absolute; left:0; right:0; bottom:20px;'> <div class='powered-by lightPowered' style='background: hsla(0,0%,100%,.9); height:20px; display:inline-block; border-radius: 4px; padding: 0 5px; box-shadow: 0 3px 5px 1px rgba(0,0,0,.2); padding-right: 1px;'> <span style='float: left; display:flex; align-items:center; color: #585858; height:100%; font-size: 10px; margin-right: 4px; font-family:Arial, Helvetica, sans-serif; margin-top: 0px;'> BUILT WITH </span> <a href='javascript:void(0);' style=' display: flex; align-items: center; text-decoration:none'> <img alt='Powered By' src='https://sahilverma.outgrow.co/assets/images/builder/og-logo-shadow.png' style=' width: 16px;max-width:100%'> <span class='poweredby-text' style=' text-transform: uppercase; font-size: 10px; margin-left: 2px; margin-top: 0; font-family:Arial, Helvetica, sans-serif; letter-spacing: normal; line-height: 21px; float: left; color: #585858; margin-right: 4px;'>Outgrow</span> </a> </div></div></div></div></div>";
    og_e.insertAdjacentHTML('beforeend', mobileHTML);
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
    og_button.setAttribute("style", "position: fixed;right: 3%;top: 3%;color: black;text-decoration: none;z-index:99999; height:50px; width:50px;");
    var button_node = document.createTextNode("");
    og_button.appendChild(button_node);
    og_b.appendChild(og_button);
    var og_close = document.createElement("img");
    og_close.setAttribute("src", "https://cdn.filestackcontent.com/HuaIq7oFQwWyS5Fjni9e");
    og_close.setAttribute("style", "padding-left:15px;");
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