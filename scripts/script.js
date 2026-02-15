document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector("#mobile-menu");
  const navContent = document.querySelector("#nav-content");
  const navLinks = document.querySelectorAll(".nav__link");
  const faqCards = document.querySelectorAll(".faq__card");
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  if (isTouchDevice) {
    faqCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("is-active");
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.classList.toggle("is-active");
        }
      });
    });
  }

  const handleScroll = () => {
    if (window.scrollY > 200) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  if (menuToggle && navContent) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-active");

      navContent.classList.toggle("open");

      if (navContent.classList.contains("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-active");
      navContent.classList.remove("open");
      document.body.style.overflow = "auto";
    });
  });
});
