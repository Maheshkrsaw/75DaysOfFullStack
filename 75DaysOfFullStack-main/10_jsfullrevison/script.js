// var a =  document.querySelector("");
// a.style.color="red";

// var a =  document.querySelector("h1");
// a.classList.add("hulu");
// a.classList.remove("hulu");

// var h1 =  document.querySelector("h1");

// function dblclick() {
//     h1.style.color="red";
// }

// h1.addEventListener("dblclick" , dblclick);
// h1.removeEventListener("dblclick" , dblclick);

//  var inp =  document.querySelector("input");

//  inp.addEventListener("input" , function(dets){
//     if(dets.data !== null){
//     console.log(dets.data);

//     }
//  })

// let sel= document.querySelector("select");
// let h3= document.querySelector("h3");
// sel.addEventListener("change",function(dets){
//     console.log(dets.target.value);
//     h3.textContent=`selected device is ${dets.target.value}`;
// })

// let h1= document.querySelector("h1");

// window.addEventListener("keydown" , function(dets){
// h1.textContent=dets.key;
// });

// let fileinput= document.querySelector("#fileinput");
// let input= document.querySelector("#input");

// input.addEventListener("click", function(){
//     fileinput.click();
// })

// fileinput.addEventListener("change", function(dets){
//     // console.log(dets);
//     input.textContent=dets.target.files[0].name;
// })

// const form = document.getElementById("myForm");
//     const output = document.getElementById("output");

//     form.addEventListener("submit", function(e) {
//       e.preventDefault();

//       // get values
//       const name = form.name.value;
//       const age = form.age.value;
//       const email = form.email.value;
//       const pic = form.pic.value;

//       // create card
//       const card = document.createElement("div");
//       card.classList = "card";
//       card.innerHTML = `
//         <img src="${pic}" alt="Profile Pic">
//         <h3>${name}</h3>
//         <p>Age: ${age}</p>
//         <p>Email: ${email}</p>
//       `;

//       // append card
//       output.appendChild(card);

//       // clear inputs
//       form.reset();
//     });

// var move1= document.querySelector("#movie");
// window.addEventListener("mousemove", function(dets){
//   move1.style.top = dets.clientY + "px";
//   move1.style.left = dets.clientX + "px";
// });

// const input = document.getElementById("myInput");
//   const output = document.getElementById("output");

//   input.addEventListener("keyup", function(event) {
//     output.textContent = "You typed: " + input.value;
//     console.log("Key released:", event.key);
//   });





// let input = document.querySelector("input");
// let span = document.querySelector("span");
// let left=20;
// input.addEventListener("input", function (dets) {
//   let left = 20 - input.value.length;
//   span.textContent = left;

//   if (left < 0) {
//     // span.textContent = left;
//     span.style.color = "red";
//   } else {
//     // span.textContent = left;
//     span.style.color = "white";
//   }
// });





//  function startDownload() {
//       let progress = document.getElementById("progress");
//       let width = 0;
//       let interval = setInterval(() => {
//         if (width >= 100) {
//           clearInterval(interval);
//           progress.textContent = "Completed!";
//         } else {
//           width += 10; // increase 10% at a time
//           progress.style.width = width + "%";
//           progress.textContent = width + "%";
//         }
//       }, 500); // every 0.5 sec
//     }


localStorage.setItem("name" , "harsh"); 