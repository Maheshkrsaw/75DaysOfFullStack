# 📖 Day 28 – React Router DOM | #75DaysFullStackAI  

🔗 **Live Demo:** [Click Here](https://75-days-of-full-stack-rvch.vercel.app/)  

Today I focused on **Routing in React** using `react-router-dom`. Routing is an essential part of building modern web apps, and today I dived into its **core concepts, components, and practical usage**.  

---

## 🛠️ Topics Covered  

1. **Routing Basics**  
   - Used `Routes` and `Route` to define navigation flow.  
   - Example:  
     ```jsx
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
     ```

2. **Navigation with Link & NavLink**  
   - **Link** → simple navigation with `to`.  
   - **NavLink** → supports active states & custom styles.  
   - Even wrapped `NavLink` inside a `<span>` for practice.  

3. **Dynamic Routing**  
   - `useParams` hook to capture values from the URL.  
   - Example:  
     ```jsx
     const { id } = useParams();
     ```

4. **Programmatic Navigation**  
   - `useNavigate` hook to redirect users without clicking links.  
   - Example:  
     ```jsx
     const navigate = useNavigate();
     navigate("/about");
     ```

5. **Nested Routing**  
   - Practiced with `<Outlet />` to render child routes inside parent layouts.  

---

## 📂 Folder Structure (Simplified)


- **App.jsx** → contains `Routes` and `NavBar`.  
- **Navbar.jsx** → navigation links with `Link` / `NavLink`.  
- **UserDetails.jsx** → used `useParams` for dynamic routing.  

---

## 💡 Learnings & Insights  

- Routing is what makes React apps feel like **multi-page apps inside a single-page application**.  
- `NavLink` is super useful for highlighting the **active tab**.  
- `useParams` simplified handling **dynamic user IDs or slugs**.  
- `useNavigate` opens the door for **logic-driven redirects** (like after form submission).  
- Nested routes with `<Outlet />` are powerful for **dashboards and layouts**.  

---

## 🔎 Reflection  

At first, routing seemed **complex and confusing**, but breaking it into smaller parts helped a lot. Today I understood how routing connects components and provides **smooth navigation without page reloads**.  

This gave me the confidence to build **scalable and modular apps** with proper navigation flow.  

---

## 📌 Next Steps  

- Explore **React Router advanced concepts** like protected routes and query params.  
- Integrate routing with **API-based projects**.  

---

#ReactJS #Routing #ReactRouterDom #FrontendDevelopment #LearningInPublic #Consistency
