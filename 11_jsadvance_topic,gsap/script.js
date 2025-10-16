// function abc(){
//     let a=12;
//     return function(){
//         console.log(a);
//     };
// }

// let fnc=abc();
// fnc();



// function limit(){
// let count=0;
// return function(){
//     if(count<5){
//         count++;
//         console.log(` liked ${count} times  `);
//     }
//     else{
//         console.error("you edxceed limit try again some time later ");
//     }
// }
// }


// let fnc=limit();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();






//  function createToaster(config) {
//         return function (notification) {
//             let div = document.createElement("div");
//             div.className = `fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

//             div.textContent = notification;
//             document.body.appendChild(div);

//             setTimeout(() => {
//                 document.body.removeChild(div);
//             }, config.duration * 1000);
//         };
//     }

//     let toaster = createToaster({
//         positionX: "right",
//         positionY: "top",
//         theme: "dark",
//         duration: 3,
//     });

//     // Button click triggers toast
//     document.getElementById("showToastBtn").addEventListener("click", () => {
//         toaster("This is a dummy notification!");
//     });


// function createToaster(config){

// }

// createToaster({
//     positionX : "right",
//     positionX : "top",
//     theme : "dark",
//     duration : 3,
// });


//oops thngs 


// function createPencil( name , price , color){
//     this.name=name;
//     this.price=price;
//     this.color=color;
//     this.write= function(text){
//         let h1=document.createElement("h1");
//         h1.textContent=text;
//         h1.style.color=color;
//         document.body.append(h1);
//     }
// }

// createPencil.prototype.company="Mahesh";
// let pencil1=new createPencil("Natraj" , 10 , "red");
// let pencil2=new createPencil("Doms" , 10 , "black");




// let pr = new Promise(function (res, rej) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10);
//         if (rn > 5) res("resolved with " + rn);
//         else rej("rejected with " + rn);
//     }, 3000);
// });

// pr.then(function (val) {
//     console.log(val);
// }).catch(function (val) {
//     console.log(val);
// });




// gsap started


// gsap.to("#box" , {
//     x : 1000,
//     duration : 1.5 ,
//     delay : 1,
//     backgroundColor : "blue" ,
//     rotate : 360 ,
// })



// let a= gsap.timeline()

// a.to("#box1" , {
//     x : 1000,
//     duration : 1.5 ,
//     delay : 1,
//     backgroundColor : "blue" ,
//     rotate : 360 ,
//     scale : 0.5
// })


// a.to("#box2" , {
//     x : 1000,
//     duration : 1.5 ,
//     backgroundColor : "yellow" ,
//     rotate : 360 ,
//     scale : 0.5
// })
// a.to("#box3" , {
//     x : 1000,
//     duration : 1.5 ,
//     backgroundColor : "#dadada" ,
//     rotate : 360 ,
//     scale : 0.5
// })


var tl=gsap.timeline()

tl.from("#nav h3" , {
    y :-50,
    opacity : 0, 
    delay:0.2,
    duration : .8,
    stagger : .2,
})

tl.from("#main h1" ,{
    x:-500,
    opacity  : 0,
    duration:.8,
    stagger:0.4

})