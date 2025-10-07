# Day 9 — JavaScript Revision

## Topics Covered
- Basics (syntax, variables, comments, console)
- Data types (primitive & object)
- Operators (arithmetic, assignment, comparison, logical, ternary)
- Control flow (if, switch)
- Loops (for, while, for...of, for...in, forEach)
- Functions (declaration, expression, arrow, default params, rest)
- Arrays (push, pop, map, filter, reduce, find, includes)
- Objects (creation, access, methods, destructuring, spread)
- ES6 essentials
- Practice problems

---

## Code Reference

```js
// ===== Basics =====
console.log('Hello, JavaScript!');
let a = 5;
const name = 'Mahesh';
var oldStyle = true; // avoid var

// ===== Data Types =====
typeof 5;       // "number"
typeof null;    // "object"

// ===== Operators =====
const x = 10;
const res = x % 2 === 0 ? 'even' : 'odd';

// ===== Control Flow =====
if (x > 0) { console.log('positive'); }
else if (x === 0) { console.log('zero'); }
else { console.log('negative'); }

switch (res) {
  case 'even': console.log('even number'); break;
  default: console.log('odd number');
}

// ===== Loops =====
const arr = [1,2,3,4];
for (let i=0; i<arr.length; i++) console.log(arr[i]);
for (const v of arr) console.log(v);
for (const k in {a:1,b:2}) console.log(k);
arr.forEach(v => console.log(v));

// ===== Functions =====
function add(a,b){ return a+b; }
const mul = function(a,b){ return a*b; }
const sub = (a,b) => a-b;
const sumAll = (...nums) => nums.reduce((s,n)=>s+n,0);

// ===== Arrays =====
arr.push(5); arr.pop();
arr.map(x => x*2);
arr.filter(x => x%2===0);
arr.reduce((acc,x)=>acc+x,0);
arr.find(x => x>2);
[...arr, 6];

// ===== Objects =====
const user = {name:'Mahesh', age:24};
user.email = 'a@b.com';
const {name: userName, age} = user;
Object.keys(user); Object.values(user); Object.entries(user);
const clone = {...user};

// ===== Practice Problems =====

// P1 - Reverse String
function reverseStr(s) { return s.split('').reverse().join(''); }

// P2 - Palindrome
function isPalindrome(s) {
  const t = s.toLowerCase().replace(/[^a-z0-9]/g,'');
  return t === t.split('').reverse().join('');
}

// P3 - Sum Array
function sumArray(arr) { return arr.reduce((acc,n)=>acc+n,0); }

// P4 - Remove Duplicates
function unique(arr) { return [...new Set(arr)]; }

// P5 - Flatten 2D Array
function flatten2D(arr) { return arr.flat(); }

// P6 - Implement myMap
function myMap(arr, fn) {
  const res = [];
  for (let i=0; i<arr.length; i++) {
    res.push(fn(arr[i], i, arr));
  }
  return res;
}
