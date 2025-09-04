this
global-> window
functiona;-> window 
method-> object
function inside method (es5)-> window
function inside method (es6)-> object
constructor function -> new blank obj 
event listner -> that element jispar event listner laga ho 
call apply bind
protypal inheritance 
constructor function 
new blank object 
this , new for protypl inheritance 
js clousers 
EVENT DELEGATION 
js high order function
try catch
custom event 
dom 
dom mainupulation 
aceesing elemnt -> document query selection 
modifyingt elemnt -> innerhgtml text content 
mainupulate style and classes 
creating and deleting elem -> createelemet , appendchild , removechild 
event handling , event object 


# 🚀 Day 07 — JavaScript Advanced Concepts (#75DaysFullStackAI)

> **Consistency Builds Mastery!** Today we focused on advanced JS concepts: `this`, constructors, prototypal inheritance, closures, DOM, events, and high-order functions.

---

## 📁 Repo & Live Demo
- Main Repo: [75DaysOfFullStack](https://github.com/Maheshkrsaw/75DaysOfFullStack)  
- This Day’s Folder: `./07_jsbasics_2/`  
- Live Demo: [Day 07 JS Examples](https://maheshkrsaw.github.io/75DaysOfFullStack/07_jsbasics_2/)

---

## 🎯 Objectives
- Understand **`this` context** in multiple scenarios 🌍  
- Master **constructor functions**, **prototypal inheritance**, **call/apply/bind** 🏗️  
- Learn **closures**, **high-order functions**, **custom events** 🔒  
- Explore **DOM manipulation & event delegation** 🎨  
- Debug effectively with **try/catch** 🪲  

---

## 🧠 Core Concepts

### 🌍 `this` Context
- Global: `window`  
- Function (ES5): `window`  
- Method: owning object  
- Function inside method (ES5): `window`  
- Function inside method (ES6/arrow): parent object  
- Constructor function: `new` → blank object  
- Event listener: refers to element with listener  

### 🏗️ Constructors & Prototypes
- **Constructor Function** creates new object  
- `this` in constructor → new object  
- **Prototypal Inheritance** shares methods across objects  

### 🔄 Call, Apply, Bind
```js
function greet(city) { console.log(this.name + ' from ' + city); }
const user = { name: 'Mahesh' };
greet.call(user, 'Delhi');   // immediate
greet.apply(user, ['Delhi']); // immediate with array
const boundGreet = greet.bind(user, 'Delhi'); boundGreet(); // returns bound function


