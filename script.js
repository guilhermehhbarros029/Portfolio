const root = document.documentElement;
const btn = document.getElementById("themeBtn");

function aplicarTema(tema) {
  root.setAttribute("data-bs-theme", tema);
  btn.textContent = tema === "dark" ? "☀️" : "🌙";
  btn.setAttribute("aria-pressed", String(tema === "dark"));
}

btn.addEventListener("click", () => {
  const novo = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  try { localStorage.setItem("tema", novo); } catch (e) { /* armazenamento indisponível */ }
});

aplicarTema(root.getAttribute("data-bs-theme") || "light");

document.getElementById("ano").textContent = new Date().getFullYear();