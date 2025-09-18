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

# 🛒 React E-Commerce Project (Day 32–36 of #75DaysFullStackAI)

This project is part of my **75 Days Full Stack Challenge** where I focus on learning by building real-world clones and projects.  
From **Day 32 → Day 36**, I built a mini E-Commerce application using **React, Routing, API (later replaced with LocalStorage), and Toastify**.  

---

## 📅 Day-Wise Progress

### 📌 Day 32
- Started project setup with **React + Vite**.  
- Fetched product data from **Fake API** (similar to Flipkart/Amazon product loading).  
- Implemented **Axios** for API calls.  
- Began basic **Routing** for product listing and details page.  

---

### 📌 Day 33
- Learned & applied **React Context API** to manage global state.  
- Difference between **local state vs global state** clarified.  
- Worked with:
  - `createContext`, `Provider`, `useContext`
  - `useState` for managing data vs setData  
  - `useEffect` for API fetching with dependency array `[]`  
- Debugged API calls, inspected responses using `console.log`.  
- Started preparing app structure for **state sharing across components**.  

---

### 📌 Day 34
- Implemented **Routing** features:
  - `<Routes>` & `<Route>`  
  - `useParams()` for fetching product ID from URL  
  - `useNavigate()` for programmatic navigation  
  - `<Outlet>` for nested routes  
- Integrated Context API with components:
  - Home Page  
  - Details Page  
- Improved **error handling** (loading & error states).  
- Compared **props vs context** in real use-case.  

---

### 📌 Day 35
- **Navigation Bar (Dynamic Categories):**
  - Extracted unique categories from API using:
    ```js
    let Unique_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
    Unique_category = [...new Set(Unique_category)];
    ```
  - Added random colors for Nav categories:
    ```js
    const color = () => {
      return `rgba(${(Math.random() * 255).toFixed()},
                  ${(Math.random() * 255).toFixed()},
                  ${(Math.random() * 255).toFixed()},
                  0.4)`;
    };
    ```
  - Categories refresh with **new random colors** each reload.  

- **Product Section:**  
  - Displayed all products using `.map()`.  
  - On category click → filtered products dynamically.  
  - On product click → showed details page.  

- **Backend Simulation:**  
  - Add/Delete operations tested with API, but faced instability.  

---

### 📌 Day 36 (Final Completion 🎉)
- Migrated **API → LocalStorage** for stability:
  - Products now stored in `localStorage`.  
  - CRUD operations (Add, Edit, Delete) fully handled inside localStorage.  
- **Dynamic UI Updates:** Every action instantly reflects in UI.  
- **Toast Notifications:** Added via `React-Toastify` to confirm Add/Delete actions.  
- **Component-Based Architecture:** Entire project modularized into reusable components.  
- **Final Fix:**  
  - API crash + accidental localStorage clear almost made me quit.  
  - But after 3 hours of deep debugging + ChatGPT + logic trial, I finally solved it.  
  - Learned the importance of **not giving up mid-way**.  

---

## ⚙️ Tech Stack
- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **State Management:** Context API  
- **Routing:** React Router DOM  
- **Data Handling:** Axios, LocalStorage  
- **Notifications:** React Toastify  

---

## 🚀 Features
1. 🔹 **Reusable Components** – Card, Nav, Details etc.  
2. 🔹 **Dynamic Navigation** – Unique categories generated & styled dynamically.  
3. 🔹 **Product Details** – Click → Dynamic route loads product detail.  
4. 🔹 **CRUD Operations** – Add, Edit, Delete products → synced with LocalStorage.  
5. 🔹 **Toast Alerts** – Feedback for user actions.  
6. 🔹 **LocalStorage Persistence** – Data stays even after refresh.  

---

## 🌐 Live Demo & Repository
- 🔗 **Live Project:** [Check Here](https://reactproject-with-api.netlify.app/)  
- 📂 **GitHub Repo:** [View Code](https://github.com/Maheshkrsaw/75DaysFullStack/tree/main/32%2C33%2C34%2C35%2C36_reactday-10)  

---

## 📝 Reflection
These 5 days tested my **discipline, focus, and mindset** more than technicals.  
- I got distracted, delayed progress, and almost gave up when API + LocalStorage failed.  
- But finally, I pushed through and completed the project.  
- **Lesson:** Projects don’t just teach coding, they build **persistence & problem-solving mindset.**  

---

#ReactJS #WebDevelopment #API #LocalStorage #Toastify #ContextAPI #LearningInPublic #75DaysFullStackAI
