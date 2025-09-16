# Day 33 - #75DaysFullStackAI 🚀

## Today's Overview
- Enjoyed today’s session because **concepts started making sense** 🙂  
- Spent significant time understanding **React Context API**, **data flow**, and **state management**.  
- Project progress was **partial** today due to deeper focus on understanding concepts; only **2 features implemented** ⚡  
- Expecting project completion **tomorrow** 🎯

---

## Key Learnings 📚

### React Context API & State Management
- Difference between **Global state vs Local state**  
- `createContext`, `Provider`, `useContext` usage explained  
- `useState` hook: managing `data` and `setData`  
- Updating and displaying state in components (Home, Details)  

### Hooks 🔧
- **useEffect**: role in **data fetching**  
- **Dependency array `[]`**: runs effect only once  

### API Handling with Axios 🌐
- `axios.create()` for **baseURL setup**  
- `axios.get()` and **response structure**  
- Destructuring: `response.data` vs `{ data }`  

### Routing (react-router-dom) 🛣️
- `<Routes>` and `<Route>` usage  
- `useParams()` to fetch **URL id**  
- Components connection & **Context vs Props** differences  

### Loading & Error Handling ⏳⚠️
- Display **loading state** while data is fetched  
- Handle API errors gracefully  
- **Performance consideration**: caching vs repeated API calls  

### Debugging Approach 🐞
- Use **console.log**, inspect state, and check API responses  

### Code Differentiation 💻
- Local state: only for specific component  
- Global state: shared via **Context**  
- Detecting imported vs newly created state  

---

## Code Snippets from Today ✨

```javascript
// Generate random color 🎨
const color = () => {
  return `rgba(${(Math.random() * 255).toFixed()},
               ${(Math.random() * 255).toFixed()},
               ${(Math.random() * 255).toFixed()},
               0.4)`;
};

// Extract unique categories from products 📦
let Unique_category =
  products && products.reduce((acc, cv) => [...acc, cv.category], []);
Unique_category = [...new Set(Unique_category)];


lll