function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
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
  delay: 4,//4
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

tl.from("#hero1 ,#page2",{
opacity :0,
},"-=1.2")


}
function cursoranimationnav(){
  document.addEventListener("mousemove",function(dets){
  gsap.to("#crsr",{
    left:dets.x,
    top:dets.y
  })
})

var videoContainer = document.querySelector("#videocontainer");
var Video = document.querySelector("#videocontainer video");
videoContainer.addEventListener("mouseenter", function () {
  videoContainer.addEventListener("mousemove", function (dets) {
    gsap.to("#videocursor", {
      left: dets.x ,
      top: dets.y   // use "top" instead of "y"
    });
  });
});

videoContainer.addEventListener("mouseleave", function(){
  gsap.to("#videocursor",{
    left:"70%",
    top:"-15%"
  })
})

var flag=0
videoContainer.addEventListener("click",function(){
if(flag == 0){
  Video.play()
  Video.style.opacity = 1
     document.querySelector("#videocursor").innerHTML=`<i class="ri-pause-line"></i>`
     gsap.to("#videocursor",{
      scale:.5
     })
    flag=1;
    }
     
     else{
      Video.pause()
  Video.style.opacity = 0
     document.querySelector("#videocursor").innerHTML=`<i class="ri-play-line"></i>`
     gsap.to("#videocursor",{
      scale:1
     })
    flag=1
    }
})
 
Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  
});
}
function sheryanimation(){
  Shery.imageEffect(".image-div", {
  style: 5,
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272787057740365},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.45,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey : true
});
}

locomotiveanimation();
loaderanimation();
cursoranimationnav();
sheryanimation();
