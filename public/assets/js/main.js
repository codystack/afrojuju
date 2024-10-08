function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function ownKeys(t, e) {
    var r, a = Object.keys(t);
    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
    })), a.push.apply(a, r)), a
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(r), !0).forEach(function(e) {
            _defineProperty(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
/**
 * Silicon | Multipurpose Bootstrap 5 Template & UI Kit
 * Copyright 2022 Createx Studio
 * Theme core scripts
 *
 * @author Createx Studio
 * @version 1.2.0
 */
! function() {
    "use strict";
    var t, e, r, a, n, o;
    null !== (e = document.querySelector('[data-bs-toggle="mode"]')) && (t = e.querySelector(".form-check-input"), "dark" === mode ? (root.classList.add("dark-mode"), t.checked = !0) : (root.classList.remove("dark-mode"), t.checked = !1), e.addEventListener("click", function(e) {
            t.checked ? (root.classList.add("dark-mode"), window.localStorage.setItem("mode", "dark")) : (root.classList.remove("dark-mode"), window.localStorage.setItem("mode", "light"))
        })), null != (a = document.querySelector(".navbar-sticky")) && (e = a.classList, r = a.offsetHeight, e.contains("position-absolute") ? window.addEventListener("scroll", function(e) {
            500 < e.currentTarget.pageYOffset ? a.classList.add("navbar-stuck") : a.classList.remove("navbar-stuck")
        }) : window.addEventListener("scroll", function(e) {
            500 < e.currentTarget.pageYOffset ? (document.body.style.paddingTop = r + "px", a.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "", a.classList.remove("navbar-stuck"))
        })), new SmoothScroll("[data-scroll]", {
            speed: 800,
            speedAsDuration: !0,
            offset: function(e, t) {
                return t.dataset.scrollOffset || 40
            },
            header: "[data-scroll-header]",
            updateURL: !1
        }), null != (o = document.querySelector(".btn-scroll-top")) && (n = parseInt(600, 10), window.addEventListener("scroll", function(e) {
            e.currentTarget.pageYOffset > n ? o.classList.add("show") : o.classList.remove("show")
        })),
        function() {
            for (var r = document.querySelectorAll(".password-toggle"), e = 0; e < r.length; e++) ! function(e) {
                var t = r[e].querySelector(".form-control");
                r[e].querySelector(".password-toggle-btn").addEventListener("click", function(e) {
                    "checkbox" === e.target.type && (e.target.checked ? t.type = "text" : t.type = "password")
                }, !1)
            }(e)
        }(), null !== document.querySelector(".rellax") && new Rellax(".rellax", {
            horizontal: !0
        }),
        function() {
            for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t])
        }(),
        function(e, t, r) {
            for (var a = 0; a < e.length; a++) t.call(r, a, e[a])
        }(document.querySelectorAll(".swiper"), function(e, t) {
            var r;
            (r = null != t.dataset.swiperOptions ? JSON.parse(t.dataset.swiperOptions) : r).pager && (a = {
                pagination: {
                    el: ".pagination .list-unstyled",
                    clickable: !0,
                    bulletActiveClass: "active",
                    bulletClass: "page-item",
                    renderBullet: function(e, t) {
                        return '<li class="' + t + '"><a href="#" class="page-link btn-icon btn-sm">' + (e + 1) + "</a></li>"
                    }
                }
            });
            var a = _objectSpread(_objectSpread({}, r), a),
                a = new Swiper(t, a);
            r.tabs && a.on("activeIndexChange", function(e) {
                var t = document.querySelector(e.slides[e.activeIndex].dataset.swiperTab);
                document.querySelector(e.slides[e.previousIndex].dataset.swiperTab).classList.remove("active"), t.classList.add("active")
            })
        }),
        function() {
            var e = document.querySelectorAll(".gallery");
            if (e.length)
                for (var t = 0; t < e.length; t++) {
                    var r = !!e[t].dataset.thumbnails,
                        a = !!e[t].dataset.video,
                        n = [lgZoom, lgFullscreen],
                        a = a ? [lgVideo] : [],
                        r = r ? [lgThumbnail] : [],
                        r = [].concat(n, a, r);
                    lightGallery(e[t], {
                        selector: ".gallery-item",
                        plugins: r,
                        licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                        download: !1,
                        autoplayVideoOnSlide: !0,
                        zoomFromOrigin: !1,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0
                        },
                        vimeoPlayerParams: {
                            byline: 0,
                            portrait: 0,
                            color: "6366f1"
                        }
                    })
                }
        }(),
        function() {
            for (var n = document.querySelectorAll(".range-slider"), e = 0; e < n.length; e++) ! function(e) {
                var t = n[e].querySelector(".range-slider-ui"),
                    r = n[e].querySelector(".range-slider-value-min"),
                    a = n[e].querySelector(".range-slider-value-max"),
                    e = {
                        dataStartMin: parseInt(n[e].dataset.startMin, 10),
                        dataStartMax: parseInt(n[e].dataset.startMax, 10),
                        dataMin: parseInt(n[e].dataset.min, 10),
                        dataMax: parseInt(n[e].dataset.max, 10),
                        dataStep: parseInt(n[e].dataset.step, 10),
                        dataPips: n[e].dataset.pips
                    };
                noUiSlider.create(t, {
                    start: e.dataStartMax ? [e.dataStartMin, e.dataStartMax] : [e.dataStartMin],
                    connect: !!e.dataStartMax || "lower",
                    step: e.dataStep,
                    pips: !!e.dataPips && {
                        mode: "count",
                        values: 5
                    },
                    tooltips: !0,
                    range: {
                        min: e.dataMin,
                        max: e.dataMax
                    },
                    format: {
                        to: function(e) {
                            return "$" + parseInt(e, 10)
                        },
                        from: function(e) {
                            return Number(e)
                        }
                    }
                }), t.noUiSlider.on("update", function(e, t) {
                    e = (e = e[t]).replace(/\D/g, "");
                    t ? a && (a.value = Math.round(e)) : r && (r.value = Math.round(e))
                }), r && r.addEventListener("change", function() {
                    t.noUiSlider.set([this.value, null])
                }), a && a.addEventListener("change", function() {
                    t.noUiSlider.set([null, this.value])
                })
            }(e)
        }(), window.addEventListener("load", function() {
            var e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, function(t) {
                t.addEventListener("submit", function(e) {
                    !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated")
                }, !1)
            })
        }, !1),
        function() {
            var a = document.querySelectorAll("[data-format]");
            if (0 !== a.length)
                for (var e = 0; e < a.length; e++) ! function(e) {
                    var t = a[e],
                        r = t.parentNode.querySelector(".credit-card-icon"),
                        e = void 0;
                    null != t.dataset.format && (e = JSON.parse(t.dataset.format)), r ? new Cleave(t, _objectSpread(_objectSpread({}, e), {}, {
                        onCreditCardTypeChanged: function(e) {
                            r.className = "credit-card-icon " + e
                        }
                    })) : new Cleave(t, e)
                }(e)
        }(), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
            return new bootstrap.Tooltip(e, {
                trigger: "hover"
            })
        }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) {
            return new bootstrap.Popover(e)
        }), [].slice.call(document.querySelectorAll(".toast")).map(function(e) {
            return new bootstrap.Toast(e)
        }),
        function() {
            var e = document.querySelectorAll('[data-bs-toggle="video"]');
            if (e.length)
                for (var t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: "this",
                    plugins: [lgVideo],
                    licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                    download: !1,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "6366f1"
                    }
                })
        }(),
        function() {
            var e = document.querySelectorAll(".price-switch-wrapper");
            if (!(e.length <= 0))
                for (var t = 0; t < e.length; t++) e[t].querySelector('[data-bs-toggle="price"]').addEventListener("change", function(e) {
                    for (var t = e.currentTarget.querySelector('input[type="checkbox"]'), r = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-monthly-price]"), a = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-annual-price]"), n = 0; n < r.length; n++) 1 == t.checked ? r[n].classList.add("d-none") : r[n].classList.remove("d-none");
                    for (var o = 0; o < r.length; o++) 1 == t.checked ? a[o].classList.remove("d-none") : a[o].classList.add("d-none")
                })
        }(),
        function() {
            var n, o = document.querySelectorAll(".masonry-grid");
            if (null !== o)
                for (var e = 0; e < o.length; e++) {
                    var t = function(e) {
                        n = new Shuffle(o[e], {
                            itemSelector: ".masonry-grid-item",
                            sizer: ".masonry-grid-item"
                        }), imagesLoaded(o[e]).on("progress", function() {
                            n.layout()
                        });
                        var a = o[e].closest(".masonry-filterable");
                        if (null === a) return {
                            v: void 0
                        };
                        for (var t = a.querySelectorAll(".masonry-filters [data-group]"), r = 0; r < t.length; r++) t[r].addEventListener("click", function(e) {
                            var t = a.querySelector(".masonry-filters .active"),
                                r = this.dataset.group;
                            null !== t && t.classList.remove("active"), this.classList.add("active"), n.filter(r), e.preventDefault()
                        })
                    }(e);
                    if ("object" === _typeof(t)) return t.v
                }
        }(),
        function() {
            var l = document.querySelectorAll(".subscription-form");
            if (null !== l) {
                for (var e = 0; e < l.length; e++) ! function(e) {
                    var t = l[e].querySelector('button[type="submit"]'),
                        r = t.innerHTML,
                        a = l[e].querySelector(".form-control"),
                        n = l[e].querySelector(".subscription-form-antispam"),
                        o = l[e].querySelector(".subscription-status");
                    l[e].addEventListener("submit", function(e) {
                        e && e.preventDefault(), "" === n.value && s(this, t, a, r, o)
                    })
                }(e);
                var s = function(e, t, r, a, n) {
                    t.innerHTML = "Sending...";
                    var o = e.action.replace("/post?", "/post-json?"),
                        e = "&" + r.name + "=" + encodeURIComponent(r.value),
                        l = document.createElement("script");
                    l.src = o + "&c=callback" + e, document.body.appendChild(l);
                    var s = "callback";
                    window[s] = function(e) {
                        delete window[s], document.body.removeChild(l), t.innerHTML = a, "success" == e.result ? (r.classList.remove("is-invalid"), r.classList.add("is-valid"), n.classList.remove("status-error"), n.classList.add("status-success"), n.innerHTML = e.msg, setTimeout(function() {
                            r.classList.remove("is-valid"), n.innerHTML = "", n.classList.remove("status-success")
                        }, 6e3)) : (r.classList.remove("is-valid"), r.classList.add("is-invalid"), n.classList.remove("status-success"), n.classList.add("status-error"), n.innerHTML = e.msg.substring(4), setTimeout(function() {
                            r.classList.remove("is-invalid"), n.innerHTML = "", n.classList.remove("status-error")
                        }, 6e3))
                    }
                }
            }
        }(), document.querySelectorAll(".animation-on-hover").forEach(function(e) {
            e.addEventListener("mouseover", function() {
                e.querySelectorAll("lottie-player").forEach(function(e) {
                    e.setDirection(1), e.play()
                })
            }), e.addEventListener("mouseleave", function() {
                e.querySelectorAll("lottie-player").forEach(function(e) {
                    e.setDirection(-1), e.play()
                })
            })
        }),
        function() {
            var v = document.querySelectorAll(".audio-player");
            if (0 !== v.length)
                for (var e = function(e) {
                        var t = v[e],
                            r = t.querySelector("audio"),
                            a = t.querySelector(".ap-play-button"),
                            n = t.querySelector(".ap-seek-slider"),
                            e = t.querySelector(".ap-volume-slider"),
                            o = t.querySelector(".ap-duration"),
                            l = t.querySelector(".ap-current-time"),
                            s = "play",
                            i = null;
                        a.addEventListener("click", function(e) {
                            s = "play" === s ? (e.currentTarget.classList.add("ap-pause"), r.play(), requestAnimationFrame(m), "pause") : (e.currentTarget.classList.remove("ap-pause"), r.pause(), cancelAnimationFrame(i), "play")
                        });

                        function c(e) {
                            e === n ? t.style.setProperty("--seek-before-width", e.value / e.max * 100 + "%") : t.style.setProperty("--volume-before-width", e.value / e.max * 100 + "%")
                        }
                        n.addEventListener("input", function(e) {
                            c(e.target)
                        }), e.addEventListener("input", function(e) {
                            c(e.target)
                        });

                        function u(e) {
                            var t = Math.floor(e / 60),
                                e = ((e = Math.floor(e % 60)) < 10 ? "0" : "").concat(e);
                            return "".concat(t, ":").concat(e)
                        }

                        function d() {
                            o.textContent = u(r.duration)
                        }

                        function p() {
                            n.max = Math.floor(r.duration)
                        }

                        function f() {
                            var e = Math.floor(r.buffered.end(r.buffered.length - 1));
                            t.style.setProperty("--buffered-width", "".concat(e / n.max * 100, "%"))
                        }
                        var m = function e() {
                            n.value = Math.floor(r.currentTime), l.textContent = u(n.value), t.style.setProperty("--seek-before-width", "".concat(n.value / n.max * 100, "%")), i = requestAnimationFrame(e)
                        };
                        0 < r.readyState ? (d(), p(), f()) : r.addEventListener("loadedmetadata", function() {
                            d(), p(), f()
                        }), r.addEventListener("progress", f), n.addEventListener("input", function() {
                            l.textContent = u(n.value), r.paused || cancelAnimationFrame(i)
                        }), n.addEventListener("change", function() {
                            r.currentTime = n.value, r.paused || requestAnimationFrame(m)
                        }), e.addEventListener("input", function(e) {
                            e = e.target.value;
                            r.volume = e / 100
                        })
                    }, t = 0; t < v.length; t++) e(t)
        }()
}();