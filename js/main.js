// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Año del footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Easter egg: 5 clics en el logo (o el código Konami) activan el modo 8-bit
const brandMark = document.querySelector(".brand-mark");
let clicks = 0;
let resetTimer;

function showToast(text) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function toggle8bit() {
  const on = document.body.classList.toggle("mode-8bit");
  showToast(on ? "¡1UP! Modo 8-bit activado" : "Game over. Volviendo al modo normal");
}

if (brandMark) {
  brandMark.addEventListener("click", (e) => {
    clicks++;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => (clicks = 0), 1500);
    if (clicks === 5) {
      e.preventDefault();
      clicks = 0;
      toggle8bit();
    }
  });
}

const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiPos = 0;
document.addEventListener("keydown", (e) => {
  konamiPos = e.key === konami[konamiPos] ? konamiPos + 1 : e.key === konami[0] ? 1 : 0;
  if (konamiPos === konami.length) {
    konamiPos = 0;
    toggle8bit();
  }
});
