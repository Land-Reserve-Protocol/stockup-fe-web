// mr.D Smooth Scroller JS
// Created by Carl Durocher - www.carldurocher.com
// Free, just keep my credential in here please.
// Version 1.0.3

!(function (t) {
  "use strict";
  function e(t) {
    (this.options = t || {}),
      (this.isScrolling = !1),
      (this.velocity = 0),
      (this.deceleration = this.options.deceleration || 0.93),
      (this.sensitivity = this.options.sensitivity || 0.05),
      (this.duration = this.options.duration || 800),
      (this.easing = this.options.easing || this.easeOutQuad),
      this.init();
  }
  t.requestAnimationFrame ||
    (t.requestAnimationFrame = function (e) {
      return t.setTimeout(e, 1e3 / 60);
    }),
    t.cancelAnimationFrame ||
      (t.cancelAnimationFrame = function (t) {
        clearTimeout(t);
      }),
    (e.prototype.init = function () {
      this.bindEvents();
    }),
    (e.prototype.bindEvents = function () {
      document.querySelectorAll('nav a[href^="#"]').forEach((t) => {
        t.addEventListener("click", (t) => {
          t.preventDefault();
          let e = t.currentTarget.getAttribute("href").substring(1),
            i = document.getElementById(e);
          if (i) {
            let n = i.offsetTop;
            this.smoothScrollTo(n);
          }
        });
      }),
        window.addEventListener(
          "wheel",
          (t) => {
            t.preventDefault(), this.handleScroll(t.deltaY);
          },
          { passive: !1 }
        ),
        window.addEventListener(
          "keydown",
          (t) => {
            let e = 0;
            switch (t.key) {
              case "ArrowUp":
                e = -40;
                break;
              case "ArrowDown":
                e = 40;
                break;
              case "PageUp":
                e = -window.innerHeight;
                break;
              case "PageDown":
                e = window.innerHeight;
                break;
              default:
                return;
            }
            t.preventDefault(), this.handleScroll(e);
          },
          { passive: !1 }
        );
    }),
    (e.prototype.handleScroll = function (t) {
      if (this.isScrolling) {
        this.velocity += t * this.sensitivity;
        return;
      }
      (this.currentScrollY = window.pageYOffset),
        (this.velocity = t * this.sensitivity),
        (this.isScrolling = !0),
        requestAnimationFrame(this.animateScroll.bind(this));
    }),
    (e.prototype.animateScroll = function () {
      let t = document.documentElement.scrollHeight - window.innerHeight;
      Math.abs(this.velocity) > 0.05
        ? ((this.currentScrollY = Math.max(
            0,
            Math.min(this.currentScrollY + this.velocity, t)
          )),
          window.scrollTo(0, this.currentScrollY),
          (this.velocity *= this.deceleration),
          0 === this.currentScrollY || this.currentScrollY === t
            ? ((this.velocity = 0), (this.isScrolling = !1))
            : requestAnimationFrame(this.animateScroll.bind(this)))
        : (this.isScrolling = !1);
    }),
    (e.prototype.smoothScrollTo = function (t) {
      let e = window.pageYOffset,
        i = t - e,
        n =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime(),
        o = this.duration,
        s = this.easing,
        r = (l) => {
          let a = l - n,
            c = s(a, e, i, o);
          window.scrollTo(0, c),
            a < o ? requestAnimationFrame(r) : window.scrollTo(0, t);
        };
      requestAnimationFrame(r);
    }),
    (e.prototype.easeOutQuad = function (t, e, i, n) {
      return -i * (t /= n) * (t - 2) + e;
    }),
    document.addEventListener("DOMContentLoaded", () => {
      let t = document.body,
        i = {
          duration: parseInt(t.getAttribute("data-scroll-duration")) || 800,
          deceleration:
            parseFloat(t.getAttribute("data-scroll-deceleration")) || 0.93,
          sensitivity:
            parseFloat(t.getAttribute("data-scroll-sensitivity")) || 0.05,
          isScrolling: "true" === t.getAttribute("data-scroll-isScrolling"),
          velocity: parseFloat(t.getAttribute("data-scroll-velocity")) || 0,
          easing: function (t, e, i, n) {
            return (t /= n / 2) < 1
              ? (i / 2) * t * t + e
              : (-i / 2) * (--t * (t - 2) - 1) + e;
          },
        };
      new e(i);
    });
})(window);
