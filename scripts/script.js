document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector("#mobile-menu");
  const navContent = document.querySelector("#nav-content");
  const navLinks = document.querySelectorAll(".nav__link");

  // --- 1. FUNCIÓN DE SCROLL (Tu código original) ---
  const handleScroll = () => {
    if (window.scrollY > 200) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // --- 2. FUNCIÓN DEL MENÚ MÓVIL (Nueva) ---
  if (menuToggle && navContent) {
    menuToggle.addEventListener("click", () => {
      // Animación de las rayitas
      menuToggle.classList.toggle("is-active");
      // Abrir/Cerrar el panel lateral
      navContent.classList.toggle("open");

      // Bloquear scroll del body para que no se mueva el fondo al navegar el menú
      if (navContent.classList.contains("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }

  // --- 3. CERRAR MENÚ AL CLICK EN LINK (Recomendado) ---
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-active");
      navContent.classList.remove("open");
      document.body.style.overflow = "auto";
    });
  });
});
