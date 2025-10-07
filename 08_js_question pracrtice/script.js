// var from = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp1 = document.querySelector("#inp2");
// var h4 = document.querySelector("#h4");

// from.addEventListener("submit", function (def) {
//   def.preventDefault();
//   if (inp1.value === "" || inp2.value === "") {
//     h4.textContent = "error some fileds are blank";
//     h4.style.color ="red";
//   }
//   else{
//     h4.textContent = "";
//     h4.style.color ="black";
//   }
// });

//pro tips
// var from = document.querySelector("form");
// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("#h4");

// from.addEventListener("submit" , function(def){
//     def.preventDefault();
//     inps.forEach(function(inp){
//         if(inp.value ===''){
//             h4.textContent = 'error some fileds are blank';
//             h4.style.color ="red";
//         }
// else{
// h4.textContent = "";
//     h4.style.color ="black";
// }
//     })
// })

// var from = document.querySelector("form");
// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("#h4");

// from.addEventListener("submit" , function(def){
//     def.preventDefault();
//     for(i=0 ; i<inps.length ; i++){
//         if(inps[i].value.trim()===''){
//             h4.textContent = 'error some fileds are blank';
//             h4.style.color ="red";
//             break;
//         }
//           else{
//         h4.textContent = "";
//             h4.style.color ="black";
//         }
//     }
// })

// q4)

  // var add = document.querySelector("#adding");
  // var remove = document.querySelector("#remove");
  // var inp = document.querySelector("input");
  // var ul = document.querySelector("ul");
  // var li;
  // add.addEventListener("click", function () {
  //   if (inp.value.trim() === "") {
  //     // do nothing if input empty
  //   } else {
  //     li = document.createElement("li");
  //     li.textContent = inp.value;
  //     ul.appendChild(li);
  //     inp.value = ""; 
  //   }
  // });


  // remove.addEventListener("click",function(){
  //   ul.remove(li);
  // })


  // q5)

// var start=document.querySelector("#start");
// var stop=document.querySelector("#stop");
// var h3=document.querySelector("h3");

// var  i;
// start.addEventListener("click",function() {
//   var count=0;
//    i=setInterval(function(){
//     h3.textContent= count;
//     count++;
//   },1000)
// })  

// stop.addEventListener("click",function() {
//   clearInterval(i);
// })  


// q6)

// var home=document.querySelector("#home");
// var about=document.querySelector("#about");
// var contact =document.querySelector("#contact");


// var hometext=document.querySelector("#hometext");
// var abouttext=document.querySelector("#abouttext");
// var contacttext =document.querySelector("#contacttext");

// home.addEventListener("click",function(){
//   removealltext();
//   hometext.style.display="block";
//   hometext.style.width="50%" ;
// })


// about.addEventListener("click",function(){
//   removealltext();
//   abouttext.style.display="block";
//   abouttext.style.width="50%" ;
// })


// contact.addEventListener("click",function(){
//   removealltext();
//   contacttext.style.display="block";
//   contacttext.style.width="50%" ;
// })

// function removealltext(){
//   document.querySelectorAll("h3").forEach(function(h3){
//     h3.style.display="none";
//   })
// }





// q7)

// var prg=document.querySelector("#progress");
// var h3=document.querySelector("h3");

// var count=0;
// var int = setInterval(function(){
//   if(count === 100){
//     h3.style.opacity="1";
//     clearInterval(int); 
//   }
//   count++;
//   prg.style.width=count+'%';
// },50)