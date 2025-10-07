javascript founder 
maintance by 
javascript basics -> how to connect 
how to find error 
es5 es6
cosole , alert prompt 
heap memory 
varible and const 
complioer and interpreator 
jit compiler
windows
types(data typs)
spread
conditinals 
truthy falsy 
if else if ternary oprator , switch
loops
for while do-while foreach fprof forin
functions ,  functions basics  ,
parameter and argument 
es5 
funcyion statewmenr
anonymus funtion
expresiiion funtion
es6 
fat arrow /badsic
fat arow with one param
fat arow with implicit 
return
array
object
synchronous and asynchronous



<!--
English feedback (quick):
- Clarity: Good intent; watch spelling and spacing (e.g., "fundamentals", "maintain", "multiple", "understand").
- Tone: Energetic and focused. For README, prefer consistent capitalization and avoid SMS-style abbreviations.
-->

# Day 06 — JavaScript Fundamentals (#75DaysFullStackAI)

> Consistent learning day-by-day. Today I focused on JavaScript core concepts, modern ES6 syntax, and practical debugging.

---

## 📁 Repo & Navigation
- Main Repo: https://github.com/Maheshkrsaw/75DaysOfFullStack
- This Day’s Folder: `./06_js_fundamentals/` (create and place files below)

---

## 🎯 Objectives
- Understand how JS runs (engine, interpreter + JIT, memory model).
- Connect JS to HTML and debug effectively in DevTools.
- Master essentials: variables, data types, conditionals, loops.
- Write functions (ES5 & ES6), use arrays/objects, spread/rest.
- Grasp synchronous vs asynchronous behavior.

---

## 🧠 Foundations

### JavaScript: Brief Context
- Founder: Brendan Eich (1995) at Netscape; standardized as ECMAScript by ECMA.
- Major editions: ES5 (2009), ES6/ES2015 (modern features).
- Evolved by TC39 and browser vendors.

### How JS Runs (High-Level)
- Interpreter + JIT: parse → optimize hot code paths → emit machine code.
- Memory:
    - Heap: dynamic allocations (objects, arrays, functions).
    - Call Stack: execution contexts (function calls).
- Host environment: `window` (browser), `global` (Node.js).

---

## 🔌 Connect JS to HTML

    <!-- Option A: External (best practice) -->
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>JS Day 06</title>
      </head>
      <body>
        <h1>Hello JS</h1>
        <script src="./app.js" defer></script>
      </body>
    </html>

    <!-- Option B: Inline (for quick demos) -->
    <script>
      console.log('Inline script loaded');
    </script>

Tip: use `defer` so the script runs after HTML is parsed.

---

## 🪲 Finding & Fixing Errors

DevTools → Console:
    
    console.log('value:', value);
    console.warn('warning');
    console.error('error');
    console.table([{ a: 1 }, { a: 2 }]);

Try/Catch:

    try {
      riskyCall();
    } catch (err) {
      console.error('Caught:', err.message);
    } finally {
      console.log('Cleanup if needed');
    }

Alerts/Prompts:

    alert('Hello!');
    const name = prompt('Your name?');
    console.log(`Hi, ${name}`);

---

## 🧩 ES5 vs ES6 (Quick Glance)

Variables:

    // ES5
    var x = 10; // function-scoped, hoisted
    // ES6
    let y = 20;   // block-scoped
    const z = 30; // block-scoped, single assignment

Functions:

    // ES5
    function add(a, b) { return a + b; }
    var mul = function(a, b) { return a * b; };

    // ES6
    const sub = (a, b) => a - b;
    const square = n => n * n;          // one param
    const getUser = () => ({ id: 1 });  // implicit return object

---

## 🔤 Types & Truthiness

- Primitives: string, number, boolean, null, undefined, symbol, bigint  
- Reference: object (arrays, functions, etc.)

    typeof 'Hi'        // "string"
    typeof 42          // "number"
    typeof true        // "boolean"
    typeof undefined   // "undefined"
    typeof null        // "object" (legacy quirk)
    typeof {}          // "object"
    typeof []          // "object"
    typeof (()=>{})    // "function"

Falsy values: `false, 0, -0, 0n, '', null, undefined, NaN`  
Everything else is truthy.

---

## 🔁 Conditionals & Loops

Conditionals:

    const n = 5;
    if (n > 10) {
      // ...
    } else if (n > 3) {
      // ...
    } else {
      // ...
    }

    // Ternary
    const msg = n % 2 === 0 ? 'even' : 'odd';

    // Switch
    switch (n) {
      case 1: /* ... */ break;
      case 2: /* ... */ break;
      default: /* ... */
    }

Loops:

    // for
    for (let i = 0; i < 3; i++) console.log(i);

    // while
    let w = 0;
    while (w < 3) { w++; }

    // do..while
    let d = 0;
    do { d++; } while (d < 3);

    // forEach (arrays)
    [1,2,3].forEach((v,i)=>console.log(i, v));

    // for..in (object keys)
    const obj = { a:1, b:2 };
    for (const k in obj) console.log(k, obj[k]);

    // for..of (iterables)
    for (const v of [10,20,30]) console.log(v);

---

## 🧮 Variables, Scope, const

    let count = 0;         // reassign OK
    const API_URL = '';    // reassign NOT allowed (object props can mutate)
    {
      let blockScoped = 1;
      var functionScoped = 2; // avoid var
    }

---

## 🧰 Spread & Rest

    // Spread (copy/merge)
    const a1 = [1,2];
    const a2 = [...a1, 3, 4];        // [1,2,3,4]

    const o1 = { x:1 };
    const o2 = { ...o1, y:2 };       // { x:1, y:2 }

    // Rest (collect remaining)
    function sum(...nums) {
      return nums.reduce((acc, n) => acc + n, 0);
    }

---

## 🧱 Arrays & Objects

    // Arrays
    const nums = [1, 2, 3];
    nums.push(4);                         // [1,2,3,4]
    const doubled = nums.map(n => n*2);   // [2,4,6,8]
    const evens = nums.filter(n => n%2===0); // [2,4]
    const total = nums.reduce((acc,n) => acc+n, 0); // 10

    // Objects
    const user = { id: 1, name: 'Mahesh' };
    user.role = 'Student';
    const { name, role } = user;

---

## 🔄 Sync vs Async (Basic Idea)

- Synchronous: executes line-by-line, blocking the next step.
- Asynchronous: schedules work to finish later (callbacks, promises, async/await).

    console.log('Start');
    setTimeout(()=> console.log('Async task done'), 1000);
    console.log('End');
    // Output: Start → End → Async task done

---

## 📌 Key Takeaways
- Understood how JS executes (engine, JIT, memory) and how scope works.
- Practiced debugging with console and try/catch.
- Compared ES5 vs ES6 and used spread/rest.
- Reinforced loops, conditionals, arrays, and objects.
- Built intuition for sync vs async code.

---

## 🔗 Connect
- GitHub: https://github.com/Maheshkrsaw
- LinkedIn: https://www.linkedin.com/in/maheshmahi07
- Twitter/X: https://x.com/kumarMahesh9304
