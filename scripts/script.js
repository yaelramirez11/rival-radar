document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const handleScroll = () => {
    if (window.scrollY > 200) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
