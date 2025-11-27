document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.getElementById("nav-icon");
  const mobileMenu = document.querySelector(".menu_mobile");

  if (!navIcon || !mobileMenu) return;

  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("open");       // anima la hamburguesa
    mobileMenu.classList.toggle("menu-open"); // muestra / oculta overlay
  });
});
