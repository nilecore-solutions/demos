/* Business Website — Pinnacle Corporate Services
   Handles: nav scroll state, mobile menu, contact form */

(function () {
  "use strict";

  /* ── Nav scroll state ──────────────────────────────────── */
  const nav = document.getElementById("js-nav");

  if (nav) {
    const heroSection =
      document.getElementById("home") ||
      document.querySelector(".biz-page-hero");

    function updateNavScroll() {
      const heroBottom = heroSection
        ? heroSection.getBoundingClientRect().bottom
        : 0;
      nav.dataset.scrolled = heroBottom <= 80 ? "true" : "false";
    }

    globalThis.addEventListener("scroll", updateNavScroll, { passive: true });
    updateNavScroll();
  }

  /* ── Mobile menu ───────────────────────────────────────── */
  const hamburger = document.getElementById("js-hamburger");
  const mobileMenu = document.getElementById("js-mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      const isOpen = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.setAttribute("aria-hidden", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });
  }

  /* ── Testimonials slider ───────────────────────────────── */
  const teTrack = document.getElementById("js-testi-track");
  const teDots  = document.getElementById("js-testi-dots");
  const tePrev  = document.getElementById("js-testi-prev");
  const teNext  = document.getElementById("js-testi-next");

  if (teTrack && teDots && tePrev && teNext) {
    const teCards = teTrack.querySelectorAll(".biz-testi-card");
    const teTotal = teCards.length;
    let teCurrent = 0;
    let teTimer;

    function teVisible() {
      return globalThis.innerWidth <= 768 ? 1 : 3;
    }

    function teMaxIdx() {
      return Math.max(0, teTotal - teVisible());
    }

    function teStep() {
      const gap = parseFloat(getComputedStyle(teTrack).gap) || 24;
      return teCards[0].offsetWidth + gap;
    }

    function teBuildDots() {
      teDots.innerHTML = "";
      const count = teMaxIdx() + 1;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("button");
        dot.className = "biz-testi-dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.addEventListener("click", function () { teGoTo(i); });
        teDots.appendChild(dot);
      }
    }

    function teGoTo(idx) {
      const max = teMaxIdx();
      teCurrent = ((idx % (max + 1)) + max + 1) % (max + 1);
      teTrack.style.transform = "translateX(-" + (teCurrent * teStep()) + "px)";
      teDots.querySelectorAll(".biz-testi-dot").forEach(function (d, i) {
        d.classList.toggle("is-active", i === teCurrent);
        d.setAttribute("aria-selected", String(i === teCurrent));
      });
      clearTimeout(teTimer);
      teTimer = globalThis.setTimeout(teAdvance, 5500);
    }

    function teAdvance() { teGoTo(teCurrent + 1); }

    tePrev.addEventListener("click", function () { teGoTo(teCurrent - 1); });
    teNext.addEventListener("click", function () { teGoTo(teCurrent + 1); });

    let teSwipeX = 0;
    teTrack.addEventListener("touchstart", function (e) {
      teSwipeX = e.touches[0].clientX;
    }, { passive: true });
    teTrack.addEventListener("touchend", function (e) {
      const dx = e.changedTouches[0].clientX - teSwipeX;
      if (Math.abs(dx) > 40) {
        dx < 0 ? teGoTo(teCurrent + 1) : teGoTo(teCurrent - 1);
      }
    }, { passive: true });

    globalThis.addEventListener("resize", function () {
      teBuildDots();
      teGoTo(Math.min(teCurrent, teMaxIdx()));
    }, { passive: true });

    teBuildDots();
    teGoTo(0);
  }

  /* ── Scroll-spy (active nav link) ─────────────────────── */
  var spyLinks = document.querySelectorAll(".biz-nav-link, .biz-mobile-link");
  var spySections = document.querySelectorAll("main > section[id]");

  if (spyLinks.length && spySections.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          spyLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + id
            );
          });
        }
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    spySections.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ── Stats count-up ────────────────────────────────────── */
  var statsBar = document.querySelector(".biz-hero-stats-bar");

  if (statsBar) {
    var statNums = statsBar.querySelectorAll(".biz-stat-num");
    var statsRan = false;

    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !statsRan) {
        statsRan = true;
        statNums.forEach(function (el) {
          var text = el.textContent.trim();
          var match = text.match(/^(\d+(?:\.\d+)?)(.*)/);
          if (!match) return;
          var target = parseFloat(match[1]);
          var suffix = match[2];
          var duration = 1500;
          var startTime = performance.now();
          function tick(now) {
            var p = Math.min((now - startTime) / duration, 1);
            var ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(ease * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      }
    }, { threshold: 0.6 });

    statsObserver.observe(statsBar);
  }

  /* ── Scroll-reveal ─────────────────────────────────────── */
  var revealTargets = document.querySelectorAll(
    ".biz-section-hd, .biz-service-card, .biz-service-detail-card, " +
    ".biz-why-card, .biz-testi-slider, .biz-contact-info, " +
    ".biz-contact-form-wrap, .biz-process-step, .biz-team-card, " +
    ".biz-value-card, .biz-cs-card, .biz-cs-preview-card, " +
    ".biz-timeline-item, .biz-about-stat"
  );

  if (revealTargets.length && "IntersectionObserver" in globalThis) {
    revealTargets.forEach(function (el, i) {
      el.classList.add("biz-animate");
      var parent = el.parentElement;
      if (parent) {
        var siblings = parent.querySelectorAll(".biz-service-card, .biz-why-card");
        if (siblings.length > 1) {
          var idx = Array.prototype.indexOf.call(siblings, el);
          if (idx >= 0) el.style.transitionDelay = (idx % 4 * 90) + "ms";
        }
      }
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ── Timeline milestone hover ──────────────────────────── */
  var timelineItems = document.querySelectorAll(".biz-timeline-item");
  var timelineWrap  = document.querySelector(".biz-timeline");

  if (timelineItems.length && timelineWrap) {
    timelineItems.forEach(function (item, index) {
      item.addEventListener("mouseenter", function () {
        timelineItems.forEach(function (i) {
          i.classList.remove("is-active", "is-highlight");
        });
        item.classList.add("is-active");
        for (var i = 0; i < index; i++) {
          timelineItems[i].classList.add("is-highlight");
        }
      });
    });

    timelineWrap.addEventListener("mouseleave", function () {
      timelineItems.forEach(function (i) {
        i.classList.remove("is-active", "is-highlight");
      });
    });
  }

  /* ── FAQ accordion ────────────────────────────────────── */
  var faqItems = document.querySelectorAll(".biz-faq-item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".biz-faq-question");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      faqItems.forEach(function (i) {
        i.classList.remove("is-open");
        var q = i.querySelector(".biz-faq-question");
        if (q) q.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ── Contact form ──────────────────────────────────────── */
  const form = document.getElementById("js-contact-form");
  const formSuccess = document.getElementById("js-form-success");
  const submitBtn = document.getElementById("js-submit-btn");

  if (form && formSuccess && submitBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput  = document.getElementById("full-name");
      const emailInput = document.getElementById("email");
      const errName    = document.getElementById("err-name");
      const errEmail   = document.getElementById("err-email");

      let valid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        errName.classList.add("is-visible");
        valid = false;
      } else {
        nameInput.classList.remove("is-invalid");
        errName.classList.remove("is-visible");
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        errEmail.classList.add("is-visible");
        valid = false;
      } else {
        emailInput.classList.remove("is-invalid");
        errEmail.classList.remove("is-visible");
      }

      if (!valid) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      /* Simulate network delay, then show success */
      globalThis.setTimeout(function () {
        form.hidden = true;
        formSuccess.hidden = false;
      }, 900);
    });

    /* Clear invalid state on input */
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        field.classList.remove("is-invalid");
        const errId = "err-" + field.id.replace("full-", "");
        const errEl = document.getElementById(errId);
        if (errEl) errEl.classList.remove("is-visible");
      });
    });
  }
})();
