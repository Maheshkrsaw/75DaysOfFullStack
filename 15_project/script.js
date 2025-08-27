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