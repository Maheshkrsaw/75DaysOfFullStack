// for only one element
let h1text=document.querySelector("#first-h1").textContent

let splited = h1text.split("");
 let clutter="";
splited.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

document.querySelector("#first-h1").innerHTML = clutter;



gsap.to("#page2 h1 span", {
    color : "#F7F7EE" ,
    stagger : 0.2 ,
    scrollTrigger : {
        trigger : "#page2 h1" ,
        // scroller : "body" ,
        markers : true ,
        start : "top 50%",
        end : "top 10%" ,
        scrub :1 ,
    }
})