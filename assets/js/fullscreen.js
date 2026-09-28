/* ============================================================
   COM COMPUTER VISION — fullscreen.js
   Presentation / Teaching Mode.

   - Target fullscreen adalah AREA KONTEN, bukan seluruh dokumen,
     sehingga sidebar benar-benar keluar dari layar presentasi.
   - Memakai Fullscreen API bila tersedia; bila tidak, memakai
     pseudo-fullscreen berbasis CSS (position: fixed).
   - Shortcut: F atau Ctrl+Shift+F untuk toggle, ESC untuk keluar.
   - Saat aktif: sidebar & header hilang, tipografi membesar,
     navigasi antar-seksi memakai panah kiri/kanan.
   ============================================================ */
(function () {
  "use strict";

  var content, toggleBtn, live, hint;
  var pseudo = false;          // true jika memakai fallback CSS
  var sectionIndex = 0;

  function supportsFullscreen(elm) {
    return !!(elm.requestFullscreen || elm.webkitRequestFullscreen || elm.msRequestFullscreen);
  }
  function fsElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
  }
  function requestFs(elm) {
    if (elm.requestFullscreen) return elm.requestFullscreen();
    if (elm.webkitRequestFullscreen) return elm.webkitRequestFullscreen();
    if (elm.msRequestFullscreen) return elm.msRequestFullscreen();
    return Promise.reject(new Error("unsupported"));
  }
  function exitFs() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
    return Promise.resolve();
  }

  function isPresenting() {
    return !!content && content.classList.contains("presentation-mode");
  }

  function announce(msg) {
    if (live) live.textContent = msg;
  }

  function setButtonState(on) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = on
      ? '<span aria-hidden="true">✕</span><span class="btn-label">Exit Fullscreen</span>'
      : '<span aria-hidden="true">⛶</span><span class="btn-label">Fullscreen</span>';
    toggleBtn.setAttribute(
      "aria-label",
      on ? "Exit fullscreen presentation mode" : "Enter fullscreen presentation mode"
    );
    toggleBtn.setAttribute("title", "Fullscreen / Presentation Mode  (F)");
    toggleBtn.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function enterPresentation() {
    if (!content || isPresenting()) return;
    document.body.classList.add("is-presenting");
    content.classList.add("presentation-mode");
    content.setAttribute("tabindex", "-1");

    if (supportsFullscreen(content)) {
      var p = requestFs(content);
      if (p && p.catch) {
        p.catch(function () { usePseudo(); });
      }
    } else {
      usePseudo();
    }

    sectionIndex = 0;
    content.focus({ preventScroll: true });
    setButtonState(true);
    announce("Presentation mode aktif. Tekan ESC untuk keluar.");
  }

  function usePseudo() {
    pseudo = true;
    content.classList.add("pseudo-fullscreen");
  }

  function exitPresentation() {
    if (!content || !isPresenting()) return;
    if (!pseudo && fsElement()) {
      var p = exitFs();
      if (p && p.catch) p.catch(function () {});
    }
    pseudo = false;
    content.classList.remove("presentation-mode", "pseudo-fullscreen");
    document.body.classList.remove("is-presenting");
    content.removeAttribute("tabindex");
    setButtonState(false);
    announce("Presentation mode dimatikan.");
    if (toggleBtn) toggleBtn.focus({ preventScroll: true });
  }

  function toggle() {
    if (isPresenting()) exitPresentation(); else enterPresentation();
  }

  /* Navigasi antar-seksi saat presentasi */
  function sections() {
    return content ? content.querySelectorAll(".section[id], .objectives[id]") : [];
  }
  function gotoSection(step) {
    var list = sections();
    if (!list.length) return;
    sectionIndex = Math.max(0, Math.min(list.length - 1, sectionIndex + step));
    var target = list[sectionIndex];
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    announce("Bagian " + (sectionIndex + 1) + " dari " + list.length);
  }

  function isTyping(ev) {
    var t = ev.target;
    if (!t) return false;
    var tag = (t.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || t.isContentEditable;
  }

  function onKeydown(ev) {
    if (isTyping(ev)) return;

    // Ctrl + Shift + F
    if (ev.key && ev.key.toLowerCase() === "f" && ev.ctrlKey && ev.shiftKey) {
      ev.preventDefault(); toggle(); return;
    }
    // F polos (tanpa modifier)
    if (ev.key && ev.key.toLowerCase() === "f" && !ev.ctrlKey && !ev.metaKey && !ev.altKey && !ev.shiftKey) {
      ev.preventDefault(); toggle(); return;
    }
    if (ev.key === "Escape" && isPresenting()) {
      ev.preventDefault(); exitPresentation(); return;
    }
    if (isPresenting()) {
      if (ev.key === "ArrowRight" || ev.key === "PageDown") { ev.preventDefault(); gotoSection(1); }
      if (ev.key === "ArrowLeft" || ev.key === "PageUp") { ev.preventDefault(); gotoSection(-1); }
    }
  }

  /* Sinkronisasi jika pengguna keluar fullscreen lewat cara lain */
  function onFsChange() {
    if (!content) return;
    if (!fsElement() && isPresenting() && !pseudo) exitPresentation();
  }

  function init() {
    content = document.getElementById("content");
    toggleBtn = document.querySelector("[data-fullscreen-toggle]");
    if (!content || !toggleBtn) return;

    live = document.createElement("div");
    live.className = "visually-hidden";
    live.setAttribute("aria-live", "polite");
    document.body.appendChild(live);

    hint = document.createElement("span");
    hint.className = "present-hint";
    hint.textContent = "← → ganti bagian · ESC keluar";
    var actions = toggleBtn.parentNode;
    if (actions) actions.insertBefore(hint, toggleBtn);

    setButtonState(false);
    toggleBtn.addEventListener("click", function (e) { e.preventDefault(); toggle(); });
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("MSFullscreenChange", onFsChange);
  }

  document.addEventListener("com:ready", init);
})();
