const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content form", {
  ...scrollRevealOption,
  delay: 1500,
});