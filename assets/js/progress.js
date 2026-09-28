/* ============================================================
   COM COMPUTER VISION — progress.js
   Progress dihitung HANYA terhadap materi yang sudah dibuka
   (material: true). Materi Coming Soon tidak dihitung sebagai
   materi yang belum selesai.
   Contoh: Materi 01–05 tersedia, 5 selesai  ->  5/5 = 100%
   ============================================================ */
(function () {
  "use strict";

  var STORE_KEY = "com-cv-progress";

  function readDone() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) { return []; }
  }

  function writeDone(list) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch (e) { /* mode privat */ }
  }

  function availableWeeks() {
    if (!window.COM) return [];
    return window.COM.weekIds().filter(function (id) { return window.COM.isOpen(id); });
  }

  function stats() {
    var avail = availableWeeks();
    var done = readDone().filter(function (id) { return avail.indexOf(id) !== -1; });
    var pct = avail.length ? Math.round((done.length / avail.length) * 100) : 0;
    return { available: avail, done: done, percent: pct, total: 16 };
  }

  function blocks(pct) {
    var filled = Math.round((pct / 100) * 15);
    var s = "";
    for (var i = 0; i < 15; i++) s += (i < filled) ? "█" : "░";
    return s;
  }

  function render() {
    var st = stats();
    var wraps = document.querySelectorAll("[data-progress]");

    for (var i = 0; i < wraps.length; i++) {
      var w = wraps[i];
      var label = w.querySelector("[data-progress-label]");
      var pct = w.querySelector("[data-progress-percent]");
      var bar = w.querySelector("[data-progress-bar]");
      var note = w.querySelector("[data-progress-note]");
      var blk = w.querySelector("[data-progress-blocks]");

      if (label) label.textContent = "Materi selesai " + st.done.length + " dari " + st.available.length;
      if (pct) pct.textContent = st.percent + "%";
      if (bar) {
        bar.style.width = st.percent + "%";
        var track = bar.parentNode;
        if (track) {
          track.setAttribute("role", "progressbar");
          track.setAttribute("aria-valuemin", "0");
          track.setAttribute("aria-valuemax", "100");
          track.setAttribute("aria-valuenow", String(st.percent));
          track.setAttribute("aria-label", "Progress penyelesaian materi");
        }
      }
      if (blk) blk.textContent = blocks(st.percent);
      if (note) {
        note.textContent = st.available.length + " dari " + st.total +
          " materi telah dibuka. Materi Coming Soon tidak ikut dihitung.";
      }
    }

    // Tanda centang pada sidebar
    var marks = document.querySelectorAll("[data-week-state]");
    for (var j = 0; j < marks.length; j++) {
      var id = marks[j].getAttribute("data-week-state");
      var isDone = st.done.indexOf(id) !== -1;
      marks[j].textContent = isDone ? "✓" : "";
      marks[j].className = "wk-state" + (isDone ? " done" : "");
    }

    // Tombol tandai selesai
    var week = window.COM ? window.COM.week : null;
    var btns = document.querySelectorAll("[data-mark-complete]");
    for (var k = 0; k < btns.length; k++) {
      var doneNow = week && st.done.indexOf(week) !== -1;
      btns[k].textContent = doneNow ? "✓ Sudah Selesai" : "Tandai Materi Selesai";
      btns[k].setAttribute("aria-pressed", doneNow ? "true" : "false");
      btns[k].classList.toggle("is-done", !!doneNow);
    }
  }

  function toggleCurrent() {
    var week = window.COM ? window.COM.week : null;
    if (!week) return;
    var list = readDone();
    var idx = list.indexOf(week);
    if (idx === -1) list.push(week); else list.splice(idx, 1);
    writeDone(list);
    render();
  }

  function init() {
    if (!window.COM || typeof courseConfig === "undefined") return;
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-mark-complete]") : null;
      if (btn) { ev.preventDefault(); toggleCurrent(); }
      var reset = ev.target.closest ? ev.target.closest("[data-progress-reset]") : null;
      if (reset) { ev.preventDefault(); writeDone([]); render(); }
    });
    render();
  }

  document.addEventListener("com:ready", init);
})();
