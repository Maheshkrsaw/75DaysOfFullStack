function locomtivescroll(){
   const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

}

    locomtivescroll(); 

function circlemousefollower(){
    const circle = document.querySelector("#mini-circle");

  window.addEventListener("mousemove", (dets) => {
    gsap.to(circle, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.2,
      ease: "power2.out"
    });
  });
}

circlemousefollower();


function herosectiongsap() {
  let tl = gsap.timeline();

  tl.from("#nav a, #nav h3", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  })

  .from("#heading h1", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  }, "-=0.3")

  .from("#block-text h5", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.5")

  .from("#chhotiheading h5", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.4")

  .from("#herofooter a, #herofooter .circle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.3");
}

// Page load hone ke baad function call kar do
window.addEventListener("load", herosectiongsap);

function circlechaptakaro(){
    var xscale=1;
    var yscale=1;


    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
        var xdiff=dets.clientX - xprev;
        var ydiff=dets.clientY- yprev;

        xprev=dets.clientX;
        yprev=dets.clientY

        xscale = gsap.utils.clamp(.8,1.2, xdiff)
        yscale = gsap.utils.clamp(.8,1.2, ydiff)
    })
}

circlechaptakaro();

function imagecontainer(){
    document.querySelectorAll(".elem").forEach(function (elem) {
  let img = elem.querySelector("img");

  elem.addEventListener("mousemove", function (dets) {
    let rect = elem.getBoundingClientRect();
    let x = dets.clientX - rect.left;
    let y = dets.clientY - rect.top;

    gsap.to(img, {
      opacity: 1,
      x: x,
      y: y,
      rotation: gsap.utils.clamp(-20, 20, x - rect.width / 2),
      ease: "power3.out",
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      ease: "power3.out",
    });
  });
});
}

imagecontainer();
