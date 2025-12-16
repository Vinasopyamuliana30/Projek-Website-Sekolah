/* ===== HAMBURGER MENU ===== */
const btn = document.getElementById("hamburger");
const menu = document.getElementById("drawermenu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    btn.textContent = menu.classList.contains("open") ? "✖" : "☰";
  });

  // Close menu when clicking on a link
  const navLinks = menu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.textContent = "☰";
    });
  });
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const headerHeight = document.querySelector("header").offsetHeight;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});

/* ===== AUTO CLOSE DRAWER ON CLICK OUTSIDE ===== */
document.addEventListener("click", (e) => {
  if (menu && btn) {
    if (!menu.contains(e.target) && !btn.contains(e.target) && menu.classList.contains("open")) {
      menu.classList.remove("open");
      btn.textContent = "☰";
    }
  }
});