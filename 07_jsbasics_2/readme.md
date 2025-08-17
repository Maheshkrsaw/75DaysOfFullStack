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

"Day07_JS_Advanced:
  Title: "🚀 **Day 07 — JavaScript Advanced Concepts (#75DaysFullStackAI)**"
  Description: "💡 Detailed notes & examples — Day 07. Focus: **`this` behavior, invocation patterns, prototypal inheritance, closures, event handling, DOM manipulation**, and related advanced topics."
  Repo:
    Main: "🌐 GitHub: https://github.com/Maheshkrsaw"
    Folder: "📂 ./07_js_advanced/"
    LiveDemo: "🔗 https://maheshkrsaw.github.io/75DaysOfFullStack/07_jsbasics_2/"
  Objectives:
    - "🎯 Understand how `this` is determined in different invocation patterns."
    - "🔧 Learn constructor/prototype patterns and how `new` creates objects."
    - "⚡ Use call, apply, bind to control context."
    - "🧩 Master closures for state and data privacy."
    - "🎨 Apply event delegation, custom events, and DOM manipulation best-practices."
    - "🛠️ Handle errors with try/catch and debug effectively."
  Topics:
    GlobalContext:
      Description: "🌍 Global object in browser is `window`. Top-level `this === window`."
      Example: "console.log(this === window); // true"
    ThisFunctionArrow:
      Description: "➡️ Regular vs arrow functions, lexical vs dynamic this."
      Example: |
        function regular() { console.log(this); }
        const arrow = () => console.log(this);
    Methods:
      Description: "🏷️ Function called as object property has `this` as owning object."
      Example: |
        const obj = { name: 'Mahesh', greet() { console.log(this.name); } };
        obj.greet(); // "Mahesh"
    InnerFunctionES5_ES6:
      Description: "📝 ES5 loses outer `this`; arrow functions preserve outer `this`."
      Example: |
        const o = {
          name: 'M',
          outer: function() {
            function innerES5(){ console.log(this && this.name); }
            const innerES6 = () => console.log(this.name);
            innerES5();
            innerES6();
          }
        };
        o.outer();
    ConstructorNew:
      Description: "🏗️ Constructor functions + `new` keyword creates object and binds `this`."
      Example: |
        function Person(name) { this.name = name; }
        const p = new Person('Mahesh');
        Person.prototype.greet = function(){ console.log(this.name); };
        p.greet();
    CallApplyBind:
      Description: "🎛️ Explicitly set `this` using call, apply, bind."
      Example: |
        function intro(city){ console.log(`${this.name} from ${city}`); }
        const u = { name: 'Mahesh' };
        intro.call(u, 'Delhi');
        intro.apply(u, ['Mumbai']);
        const fn = intro.bind(u, 'Pune'); fn();
    PrototypalInheritance:
      Description: "🧬 Objects inherit via prototype chain; constructor + prototype for shared methods."
      Example: |
        function Animal(type){ this.type = type; }
        Animal.prototype.speak = function(){ console.log(this.type + ' sound'); };
        const a = new Animal('Dog'); a.speak();
    Closures:
      Description: "🔒 Function remembering creation scope, useful for state & privacy."
      Example: |
        function counter() {
          let count = 0;
          return function(){ count++; return count; };
        }
        const c = counter(); c(); c();
    EventDelegation:
      Description: "🎯 Attach listener to parent, handle child events via event.target."
      Example: |
        document.querySelector('#list').addEventListener('click', function(e){
          if(e.target.matches('button.item')) console.log(e.target.textContent);
        });
    HigherOrderFunctions:
      Description: "🔄 Functions accepting/returning functions."
      Example: |
        const withLogging = fn => (...args) => { console.log(args); return fn(...args); };
    TryCatch:
      Description: "⚠️ Graceful runtime error handling."
      Example: |
        try { JSON.parse('invalid'); } 
        catch (err) { console.error('Parse error:', err.message); }
    CustomEvents:
      Description: "🎉 Create and dispatch custom events for decoupled components."
      Example: |
        const ev = new CustomEvent('productAdded', { detail: { id: 1 } });
        document.addEventListener('productAdded', e => console.log(e.detail));
        document.dispatchEvent(ev);
    DOMManipulation:
      Access:
        Description: "🔍 Query and select elements"
        Example: |
          const card = document.querySelector('.card');
          const items = document.querySelectorAll('.item');
      Content:
        Description: "✏️ Modify innerHTML or textContent"
        Example: |
          card.textContent = 'Hello';
          card.innerHTML = '<strong>Bold</strong>';
      StyleClasses:
        Description: "🎨 Manage inline styles or classList"
        Example: |
          card.style.color = 'red';
          card.classList.add('active');
          card.classList.toggle('hidden');
      CreateDeleteElements:
        Description: "➕➖ Add/remove elements dynamically"
        Example: |
          const div = document.createElement('div');
          div.textContent = 'New';
          document.body.appendChild(div);
          div.remove();
      EventHandling:
        Description: "🖱️ Handle events with event object"
        Example: |
          btn.addEventListener('click', function(e){
            console.log(e.type, e.target, e.currentTarget);
            e.preventDefault();
          });
  BestPractices:
    - "✅ Prefer let/const over var."
    - "✅ Use arrow functions when lexical `this` is needed."
    - "✅ Use bind for callbacks needing specific context."
    - "✅ Batch DOM updates for performance."
    - "✅ Use event delegation for dynamic children."
    - "✅ Encapsulate logic with closures/modules to avoid polluting global scope."
  Connect:
    GitHub: "🌐 https://github.com/Maheshkrsaw"
    LinkedIn: "💼 https://www.linkedin.com/in/maheshmahi07"
    Twitter: "🐦 https://x.com/kumarMahesh9304"
"