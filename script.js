const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const backToTop = document.querySelector("[data-back-to-top]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
}

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  header.classList.toggle("menu-active", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  header.classList.remove("menu-active");
  toggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
