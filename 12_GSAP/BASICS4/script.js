gsap.to("#page2 h1", {
  x: "-152%",   // better than transform in GSAP
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",   // optional, default is "body"
    markers: true,
    start: "top top",   // was "top 0"
    end: "top -100%",
    scrub: 2,
    pin: true
  }
});
