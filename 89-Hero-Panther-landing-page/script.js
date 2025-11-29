const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header_container .header__btn", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".socials li", {
  ...scrollRevealOption,
  delay: 4000,
  interval: 500,
});