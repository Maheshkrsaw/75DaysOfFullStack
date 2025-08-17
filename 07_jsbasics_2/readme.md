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

<<<<<<< HEAD
=======

>>>>>>> origin/main
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
🔒 Closures
js
Copy
Edit
function counter() {
  let count = 0;
  return function() { count++; return count; };
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
🖱️ Event Handling & Delegation
js
Copy
Edit
document.querySelector('#parent').addEventListener('click', e => {
  if(e.target.matches('.child')) console.log('Clicked:', e.target);
});
const btn = document.querySelector('#myBtn');
btn.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Button clicked:', e.type, e.target);
});
🎨 DOM Manipulation
Access Elements: document.querySelector(), getElementById()

Modify Content: innerHTML, textContent

Modify Styles & Classes: style, classList.add/remove/toggle

Create & Remove Elements: createElement(), appendChild(), removeChild()

🧩 High-Order Functions
js
Copy
Edit
function hof(fn) { return (...args) => fn(...args)*2; }
const multiply = hof(n => n+1);
console.log(multiply(5)); // 12
🪲 Error Handling & Try/Catch
js
Copy
Edit
try { throw new Error('Oops!'); }
catch(e) { console.error('Caught:', e.message); }
finally { console.log('Cleanup'); }
✨ Custom Events
js
Copy
Edit
const customEvent = new CustomEvent('myEvent', { detail: { msg: 'Hello' } });
document.addEventListener('myEvent', e => console.log(e.detail.msg));
document.dispatchEvent(customEvent);
🔤 Key JavaScript Topics Covered
Variables & Constants (var, let, const)

Functions: ES5/ES6, arrow, parameters, implicit returns

Objects & Arrays, spread/rest operators

Loops: for, while, do-while, forEach, for..in, for..of

Conditionals: if/else, ternary, switch

Synchronous & Asynchronous concepts

✅ Key Takeaways
Mastered this context in functions, methods, constructors, and event listeners

Practiced prototypal inheritance & constructor patterns

Built closures and high-order functions for modular code

Learned DOM manipulation, event delegation, and custom events

Applied error handling using try/catch for safer code execution

🔗 Connect with Me
🌐 GitHub: Maheshkrsaw

💼 LinkedIn: maheshmahi07


🐦 Twitter/X: kumarMahesh9304
