# 🚀 Day 21 — React Basics ( #75DaysFullStackAI )

Today I officially began my **React.js journey**. Since React is new to me, the progress was a bit slow, but that’s expected — every new concept takes time to absorb. The focus was on understanding **core fundamentals** like components, props, fragments, conditional rendering, and event handling.

---

## ⚡ Key Takeaways

- **Components**: The building blocks of React. Created one reusable `Card` component and used it multiple times inside `App.jsx`.
- **Reusability**: Learned how one component can be called again and again, reducing code duplication.
- **Key Prop Warning**: React needs a unique `key` prop for list rendering so it can efficiently update and manage UI elements.
- **Fragments (`<>...</>`)**: Allows grouping multiple elements without adding unnecessary DOM nodes.
- **Conditional Rendering**: Render elements only when needed using `if/else` or ternary operators.
- **Event Handling**: Attached functions to handle user actions (like clicks).
- **Slow but Steady**: Building the basics patiently ensures stronger understanding for advanced concepts later.

---

## 🛠️ Tools & Tech Used
- **React.js** (v18)  
- **Node.js & npm** (for environment setup)  
- **Vite** (fast bundler for development)  
- **JavaScript (ES6+)**

---

## 📂 File Structure (Practice Setup)

```bash
Day21/
│── index.html
│── style.css
│── src/
│   │── App.jsx
│   │── Card.jsx
│   │── main.jsx
│── package.json
└── README.md


// Card.jsx
function Card({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default Card;



// App.jsx
import Card from "./Card";

function App() {
  const cards = [
    { id: 1, title: "React Basics", description: "Learning components & props" },
    { id: 2, title: "Conditional Rendering", description: "Rendering UI dynamically" },
    { id: 3, title: "Event Handling", description: "Handling clicks in React" }
  ];

  return (
    <>
      <h1>Day 21 React Practice</h1>
      {cards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </>
  );
}

export default App;



---

👉 This README includes:  
- Introduction  
- Key takeaways  
- File structure  
- Example code  
- Reflection + next steps  
- Social links  

Do you want me to also add a **short “React Basics Theory Section”** (like virtual DOM, JSX, setup commands) at the top for completeness?


🎯 Reflection

At first, React felt a little different from plain HTML/JS, but the concept of breaking UI into small reusable parts is powerful.

Solved a key prop warning, which taught me how React identifies components.

Practiced conditional rendering & event handling, which made components interactive.

Even though the pace was slow, I can already see the value React brings in building scalable projects.

🔮 Next Steps

Dive deeper into state management (useState)

Learn props drilling & component communication

Start working on mini React projects

📸 Visuals (Add Later)

Screenshot of Card component reusability

Example of conditional rendering in action

🔗 Connect with Me

Follow my journey: #75DaysFullStackAI

🌐 GitHub: Maheshkrsaw

💼 LinkedIn: maheshmahi07

🐦 Twitter (X): @kumarMahesh9304