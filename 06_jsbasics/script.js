// console.log("helo world");
// console.warn("Mahesh");
// console.error("mahesh");


// alert("mahesh");
// prompt("enter your name");

// example of premitive dt 
// var a=10;
// var b=a+2;
// console.log(b);
// console.log(a);
// a=10 b=12


// var a=[1,2,3,4,5];
// var b= a;
// b.pop();
// console.log(a)
// a =(4) [1, 2, 3, 4]
// b=(4) [1, 2, 3, 4]

// var a=[1,2,3,4,5]
// var b=[...a];
// b.pop();


// for(i=20; i>=5; i--){
//     console.log(i);
// }

// var i=1;
// while(i<6){
//     console.log(i);
//     i++;
// }

// var arr= [1,2,3,4,5,6];
// var Mahi

// arr.forEach(function(Mahesh)
// {
//     console.log(Mahesh);
//     Mahi=Mahesh;
// })
// console.log(Mahi);

// var obj={
//     Name : "mahesh",
//     age : 20,
//     contact : 25882,
// }

// var m=obj.Name;   

// console.log(this);

// function abcd(){
//     console.log(this);
// }
// abcd();

// var obj={
//     name:function(){
//         console.log(this);
//     },
//     age: 20,
//     he:11,
//     }
// obj.name();

// var obj={
//     name:function(){
//         function childfun(){
//         console.log(this);
//         }
//         childfun();
//     }
// }
//     obj.name();
  
var obj={
    name:function(){
        let childfun = ()=>{
        console.log(this);
        }
        childfun();
    },
    age:10,
    nu:20
}
    obj.name();
  