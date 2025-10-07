function loaderanimation(){
    var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.001,
  duration: 0.5,
  delay: 0.6,
});

tl.from([".line h2", "#line1-part1"], {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 35);
  },
});

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})


tl.to("#loader", {
  opacity: 0,
  duration: 0.00002, //.2
  delay: 0,//4
});


 tl.from("#page1" , {
    delay:0.2,
    duration:.5,
    y:1200,
    opacity:0
 })

 tl.to("#loader",{
    display:"none"
 })
tl.from("#nav",{
  opacity:0
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
  y:120,
  stagger:0.2
})


}
function cursoranimationnav(){
  document.addEventListener("mousemove",function(dets){
  gsap.to("#crsr",{
    left:dets.x,
    top:dets.y
  })
})

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  
});
}


loaderanimation();
cursoranimationnav();




