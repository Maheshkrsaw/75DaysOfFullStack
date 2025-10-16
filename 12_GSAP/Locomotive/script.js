// 1️⃣ Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2️⃣ Initialize LocomotiveScroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// 3️⃣ Update ScrollTrigger on LocomotiveScroll scroll
locoScroll.on("scroll", ScrollTrigger.update);

// 4️⃣ ScrollTrigger proxy for LocomotiveScroll
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// 5️⃣ Refresh ScrollTrigger and update LocomotiveScroll
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


// 6️⃣ Animations

// Page 1 animation (on load)
gsap.from("#page1 #box", {
  scale: 0,
  duration: 1,
  opacity: 0,
  rotate: 360,
  delay: 0.5
});

// Page 2 animation (on scroll)
gsap.from("#page2 #box", {
  scale: 0,
  duration: 1,
  opacity: 0,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "#main",
    start: "top 60%",
    markers: true
  }
});

// Page 3 animation (on load or scroll as needed)
gsap.from("#page3 #box", {
  scale: 0,
  duration: 1,
  opacity: 0,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "#main",
    start: "top 60%",
    markers: true
  }
});
