// 🌙 Alternância de tema (claro/escuro)
const toggleThemeBtn = document.getElementById("toggleTheme");
const htmlRoot = document.documentElement;

function toggleTheme() {
  const isDark = htmlRoot.getAttribute("data-theme") === "dark";
  htmlRoot.setAttribute("data-theme", isDark ? "light" : "dark");

  toggleThemeBtn.classList.toggle("bi-sun", isDark);
  toggleThemeBtn.classList.toggle("bi-moon-stars", !isDark);
}

toggleThemeBtn.addEventListener("click", toggleTheme);

// 📌 Acordeão interativo
document.querySelectorAll(".accordion__header").forEach(header => {
  header.addEventListener("click", () => {
    const parent = header.closest(".accordion__item");
    parent.classList.toggle("active");
  });
});

// 📍 Marcar o menu ativo
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
