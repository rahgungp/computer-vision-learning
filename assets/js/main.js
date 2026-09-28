/* ============================================================
   COM COMPUTER VISION — main.js
   Render navigasi, kartu materi, tema, TOC, dan interaksi umum.
   Seluruh isinya dibaca dari assets/js/course-config.js
   ============================================================ */
(function () {
  "use strict";

  var body = document.body;
  var BASE = body.getAttribute("data-base") || "./";       // "./" di root, "../" di subfolder
  var PAGE = body.getAttribute("data-page") || "static";    // home | week | practical | static
  var WEEK = body.getAttribute("data-week") || null;        // "01" ... "16"

  /* ---------- Utilitas ---------- */
  function weekKey(n) { return "week" + n; }
  function weekIds() {
    var ids = [];
    for (var i = 1; i <= 16; i++) ids.push(i < 10 ? "0" + i : String(i));
    return ids;
  }
  function cfg(id) { return (typeof courseConfig !== "undefined") ? courseConfig[weekKey(id)] : null; }
  function isOpen(id) { var c = cfg(id); return !!(c && c.material === true); }
  function weekUrl(id) { return BASE + "weeks/week-" + id + ".html"; }
  function practicalUrl(file) { return BASE + "practical/" + file; }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }

  /* ---------- Tema (light / dark) ---------- */
  var THEME_KEY = "com-cv-theme";
  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function applyTheme(mode) {
    if (mode === "light" || mode === "dark") {
      document.documentElement.setAttribute("data-theme", mode);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    var btns = document.querySelectorAll("[data-theme-toggle]");
    var isDark = currentThemeIsDark();
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = isDark ? "☀" : "☾";
      btns[i].setAttribute("aria-label", isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap");
      btns[i].setAttribute("title", isDark ? "Mode terang" : "Mode gelap");
    }
  }
  function currentThemeIsDark() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function initTheme() {
    applyTheme(storedTheme());
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-theme-toggle]") : null;
      if (!btn) return;
      var next = currentThemeIsDark() ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      applyTheme(next);
    });
  }

  /* ---------- Sidebar: daftar 16 materi ---------- */
  function buildSidebar() {
    var host = document.getElementById("sidebar");
    if (!host || typeof courseConfig === "undefined") return;

    var frag = document.createDocumentFragment();

    // Progress ringkas
    var pBlock = el("div", "sidebar-block");
    pBlock.innerHTML =
      '<h3>Progress Belajar</h3>' +
      '<div class="progress-wrap" data-progress>' +
      '  <div class="progress-head"><span data-progress-label>Memuat…</span><b data-progress-percent>0%</b></div>' +
      '  <div class="progress-track"><div class="progress-bar" data-progress-bar></div></div>' +
      '  <p class="progress-note" data-progress-note></p>' +
      '</div>';
    frag.appendChild(pBlock);

    frag.appendChild(el("p", "sidebar-title", "Daftar Materi"));

    var list = el("ul", "week-nav");
    weekIds().forEach(function (id) {
      var c = cfg(id);
      if (!c) return;
      var li = el("li");
      var open = isOpen(id);
      var node;

      if (open) {
        node = el("a");
        node.href = weekUrl(id);
        if (PAGE === "week" && WEEK === id) node.setAttribute("aria-current", "page");
      } else {
        node = el("span", "locked-item");
        node.setAttribute("aria-disabled", "true");
        node.setAttribute("title", "Materi ini belum dibuka");
      }

      var num = el("span", "wk-num", id);
      var title = el("span", "wk-title", c.title);
      var state = el("span", "wk-state");
      state.setAttribute("aria-hidden", "true");
      if (open) {
        state.textContent = "";
        state.setAttribute("data-week-state", id);
      } else {
        state.textContent = "🔒";
      }

      node.appendChild(num);
      node.appendChild(title);
      node.appendChild(state);

      var sr = el("span", "visually-hidden", open ? " (tersedia)" : " (terkunci, belum tersedia)");
      node.appendChild(sr);

      li.appendChild(node);
      list.appendChild(li);
    });
    frag.appendChild(list);

    // Daftar isi halaman (khusus halaman materi)
    var toc = buildToc();
    if (toc) frag.appendChild(toc);

    host.appendChild(frag);
  }

  function buildToc() {
    if (PAGE !== "week" && PAGE !== "practical") return null;
    var sections = document.querySelectorAll(".content .section[id]");
    if (!sections.length) return null;

    var block = el("div", "sidebar-block");
    block.appendChild(el("h3", null, "Di Halaman Ini"));
    var ul = el("ul", "week-nav toc-nav");
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      var h = s.querySelector("h2");
      if (!h) continue;
      var label = (h.textContent || "").replace(/^\s*\d+\s*/, "").trim();
      var li = el("li");
      var a = el("a");
      a.href = "#" + s.id;
      a.style.gridTemplateColumns = "1fr";
      a.appendChild(el("span", "wk-title", label));
      li.appendChild(a);
      ul.appendChild(li);
    }
    block.appendChild(ul);
    return block;
  }

  /* ---------- Homepage: kartu materi 01–16 ---------- */
  function buildCourseGrid() {
    var grid = document.getElementById("course-grid");
    if (!grid || typeof courseConfig === "undefined") return;

    weekIds().forEach(function (id, idx) {
      var c = cfg(id);
      if (!c) return;
      var open = isOpen(id);

      var card = el("article", "card " + (open ? "is-available" : "is-locked") + " reveal");
      card.style.transitionDelay = Math.min(idx, 8) * 35 + "ms";

      var top = el("div", "card-top");
      top.appendChild(el("span", "card-no", "MATERI " + id));
      var badge = el("span", "badge " + (open ? "available" : "locked"));
      badge.textContent = open ? "✓ Tersedia" : "🔒 Coming Soon";
      top.appendChild(badge);
      card.appendChild(top);

      var h3 = el("h3");
      if (open) {
        var link = el("a", null, c.title);
        link.href = weekUrl(id);
        link.style.textDecoration = "none";
        h3.appendChild(link);
      } else {
        h3.textContent = c.title;
      }
      card.appendChild(h3);

      card.appendChild(el("p", "card-desc", c.description));

      if (c.outcomes && c.outcomes.length) {
        var ul = el("ul", "card-outcomes");
        ul.setAttribute("aria-label", "Capaian pembelajaran Materi " + id);
        c.outcomes.slice(0, 3).forEach(function (o) { ul.appendChild(el("li", null, o)); });
        card.appendChild(ul);
      }

      if (c.unit) card.appendChild(el("p", "card-unit", "Basis: " + c.unit));

      var actions = el("div", "card-actions");
      if (open) {
        var b1 = el("a", "btn", "📖 Pelajari Materi");
        b1.href = weekUrl(id);
        actions.appendChild(b1);
        if (c.practical) {
          var b2 = el("a", "btn secondary", "🧪 Mulai Praktikum");
          b2.href = practicalUrl(c.practical);
          actions.appendChild(b2);
        }
      } else {
        var b3 = el("span", "btn ghost", "🔒 Belum Dibuka");
        b3.setAttribute("aria-disabled", "true");
        actions.appendChild(b3);
      }
      card.appendChild(actions);

      grid.appendChild(card);
    });
  }

  /* ---------- Navigasi Previous / Next ---------- */
  function buildPager() {
    var host = document.getElementById("pager");
    if (!host || !WEEK || typeof courseConfig === "undefined") return;

    var n = parseInt(WEEK, 10);
    var prevId = n > 1 ? (n - 1 < 10 ? "0" + (n - 1) : String(n - 1)) : null;
    var nextId = n < 16 ? (n + 1 < 10 ? "0" + (n + 1) : String(n + 1)) : null;

    host.appendChild(pagerNode(prevId, "prev"));
    host.appendChild(pagerNode(nextId, "next"));
  }

  function pagerNode(id, dir) {
    var dirLabel = dir === "prev" ? "← Sebelumnya" : "Berikutnya →";
    if (!id) {
      var s = el("span", "pager-disabled" + (dir === "next" ? " pager-next" : ""));
      s.appendChild(el("span", "pager-dir", dirLabel));
      s.appendChild(el("span", "pager-title", dir === "prev" ? "Awal rangkaian materi" : "Akhir rangkaian materi"));
      return s;
    }
    var c = cfg(id);
    var open = isOpen(id);
    if (!open) {
      var d = el("span", "pager-disabled" + (dir === "next" ? " pager-next" : ""));
      d.appendChild(el("span", "pager-dir", dirLabel));
      d.appendChild(el("span", "pager-title", "Materi " + id + " · 🔒 Coming Soon"));
      return d;
    }
    var a = el("a", dir === "next" ? "pager-next" : null);
    a.href = weekUrl(id);
    a.appendChild(el("span", "pager-dir", dirLabel));
    a.appendChild(el("span", "pager-title", "Materi " + id + " · " + c.title));
    return a;
  }

  /* ---------- Halaman Coming Soon ---------- */
  function buildComingSoon() {
    var host = document.getElementById("coming-soon");
    if (!host || !WEEK || typeof courseConfig === "undefined") return;
    var c = cfg(WEEK);
    if (!c) return;

    // Jika dosen mengubah material menjadi true tetapi isi belum ditulis,
    // halaman tetap memberi tahu dengan jujur.
    var titleEls = document.querySelectorAll("[data-week-title]");
    for (var i = 0; i < titleEls.length; i++) titleEls[i].textContent = c.title;
    var subEls = document.querySelectorAll("[data-week-subtitle]");
    for (var j = 0; j < subEls.length; j++) subEls[j].textContent = c.subtitle || "";
    var unitEls = document.querySelectorAll("[data-week-unit]");
    for (var k = 0; k < unitEls.length; k++) unitEls[k].textContent = c.unit || "—";

    var box = el("div", "coming-soon anim-fade");
    var icon = el("span", "cs-icon", "🔒");
    icon.setAttribute("aria-hidden", "true");
    box.appendChild(icon);
    box.appendChild(el("h2", null, "Coming Soon"));
    box.appendChild(el("p", null,
      "Materi ini belum tersedia. Materi akan dibuka sesuai jadwal perkuliahan."));
    host.appendChild(box);

    var info = el("div", "cs-outcomes");
    info.appendChild(el("h3", null, "Deskripsi Singkat"));
    info.appendChild(el("p", null, c.description));
    if (c.outcomes && c.outcomes.length) {
      info.appendChild(el("h3", null, "Learning Outcome"));
      var ul = el("ul");
      c.outcomes.forEach(function (o) { ul.appendChild(el("li", null, o)); });
      info.appendChild(ul);
    }
    host.appendChild(info);

    var back = el("div", "btn-row");
    var b = el("a", "btn secondary", "← Kembali ke Daftar Materi");
    b.href = BASE + "index.html#daftar-materi";
    back.appendChild(b);
    host.appendChild(back);
  }

  /* ---------- Isi metadata halaman materi dari config ---------- */
  function fillWeekMeta() {
    if (!WEEK || typeof courseConfig === "undefined") return;
    var c = cfg(WEEK);
    if (!c) return;
    var map = {
      "[data-week-title]": c.title,
      "[data-week-subtitle]": c.subtitle,
      "[data-week-unit]": c.unit,
      "[data-week-duration]": c.duration,
      "[data-week-updated]": c.updated
    };
    Object.keys(map).forEach(function (sel) {
      var nodes = document.querySelectorAll(sel);
      for (var i = 0; i < nodes.length; i++) {
        if (map[sel]) nodes[i].textContent = map[sel];
      }
    });

    // Tautan praktikum
    var pl = document.querySelectorAll("[data-practical-link]");
    for (var i = 0; i < pl.length; i++) {
      if (c.practical) { pl[i].href = practicalUrl(c.practical); }
      else { pl[i].setAttribute("aria-disabled", "true"); pl[i].removeAttribute("href"); }
    }
  }

  /* ---------- Navigasi mobile & sidebar ---------- */
  function initToggles() {
    var navToggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector(".main-nav");
    if (navToggle && nav) {
      navToggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    var sbToggle = document.querySelector("[data-sidebar-toggle]");
    var sidebar = document.getElementById("sidebar");
    var backdrop = null;
    if (sbToggle && sidebar) {
      sbToggle.addEventListener("click", function () {
        var open = sidebar.classList.toggle("is-open");
        sbToggle.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) {
          backdrop = el("button", "sidebar-backdrop");
          backdrop.setAttribute("aria-label", "Tutup daftar materi");
          backdrop.addEventListener("click", closeSidebar);
          document.body.appendChild(backdrop);
        } else {
          closeSidebar();
        }
      });
    }
    function closeSidebar() {
      if (sidebar) sidebar.classList.remove("is-open");
      if (sbToggle) sbToggle.setAttribute("aria-expanded", "false");
      if (backdrop && backdrop.parentNode) { backdrop.parentNode.removeChild(backdrop); backdrop = null; }
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSidebar();
        if (nav) nav.classList.remove("is-open");
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("is-visible");
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .05 });
    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  /* ---------- Tahun berjalan di footer ---------- */
  function initYear() {
    var y = document.querySelectorAll("[data-year]");
    for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();
  }

  /* ---------- Init ---------- */
  function init() {
    initTheme();
    buildSidebar();
    buildCourseGrid();
    fillWeekMeta();
    buildComingSoon();
    buildPager();
    initToggles();
    initReveal();
    initYear();
    document.dispatchEvent(new CustomEvent("com:ready", { detail: { page: PAGE, week: WEEK, base: BASE } }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Dipakai oleh progress.js dan fullscreen.js
  window.COM = {
    base: BASE, page: PAGE, week: WEEK,
    weekIds: weekIds, isOpen: isOpen, cfg: cfg, weekUrl: weekUrl
  };
})();
