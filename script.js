/* =========================================================
   CREATIVE PORTFOLIO — script.js
   Berisi: menu mobile, animasi scroll, bar skill,
   link aktif di navigasi, tombol ke atas, tahun otomatis.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. Menu mobile ---------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  }

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("open"));
  });

  // Tutup menu setelah link diklik
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  // Tutup menu dengan tombol Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- 2. Animasi muncul saat scroll ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Browser lama: langsung tampilkan
    revealItems.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 3. Bar level skill (terisi saat terlihat) ---------- */
  var meters = document.querySelectorAll(".meter-fill");

  if ("IntersectionObserver" in window) {
    var meterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + "%";
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    meters.forEach(function (m) { meterObserver.observe(m); });
  } else {
    meters.forEach(function (m) { m.style.width = m.dataset.level + "%"; });
  }

  /* ---------- 4. Tandai link navigasi yang aktif ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".site-nav a:not(.nav-cta)");

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 5. Tombol kembali ke atas ---------- */
  var toTop = document.getElementById("toTop");

  window.addEventListener("scroll", function () {
    toTop.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 6. Tahun otomatis di footer ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
