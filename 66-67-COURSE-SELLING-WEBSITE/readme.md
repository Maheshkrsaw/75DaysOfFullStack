# 🧠 Day 66–67 — Course Selling Website (Backend Development)

## 📅 Overview  
These two days focused on building and improving the **Course Selling Website** backend — implementing user/admin authentication, database connectivity, and route structuring using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Day 66 — Project Initialization & Backend Setup

### 🎯 Tasks Done
- Initialized a new **Node.js** project.
- Installed dependencies: `express`, `jsonwebtoken`, `mongoose`, `dotenv`.
- Created `index.js` for server setup.
- Defined **route skeletons** for:
  - 🧑 User: `signup`, `login`, `purchase course`, `view all courses`, `view purchased courses`
  - 👨‍💼 Admin: `signup`, `login`, `create course`, `delete course`, `add course content`
- Defined **schemas** for:
  - `User`, `Admin`, `Course`, `Purchase`
- Connected project with **MongoDB Atlas** using environment variables for security.
- Implemented **authentication middleware** for user/admin route protection.
- Structured routes into separate folders using **Express Router**.
- Planned frontend integration for later phase.

### 🧩 Key Learnings
- Importance of clean route structure in Express.
- Avoided hardcoding credentials by using `.env` file.
- Better understanding of authentication flow in backend systems.

---

## ⚙️ Day 67 — Backend Deep Dive & Festival Balance

### 💪 Reality of Learning
- Festival time (Chhath Puja) made it tough to maintain full focus.
- Managed both household work and backend progress with limited time.

### 📚 Learning Focus
- Completed all **User endpoints**:
  - `Signup`, `Login`, `See all courses`, `Purchase a course`
- Admin routes:
  - `Admin signup`, `Admin login`, `Create course`, `Bulk post endpoints`
- Implemented **middleware in a separate file** for clean structure.
- Used **centralized file imports** to avoid circular dependency issues.
- Added `.env` for database credentials and secret keys.
- Continued improving logic for **authentication & course management**.

### 🔍 Challenges Faced
- Time management due to festival workload.
- Understanding nested imports and circular dependency.
- Debugging middleware flow and auth verification.

### ✅ Outcome
- Backend logic almost complete.
- Clear plan for integrating frontend and testing all routes via **Postman**.
- Improved problem-solving mindset by facing real-world dev challenges.

---

## 🧩 Key Takeaways (Day 66–67)
- Organized backend structure is crucial for scalability.
- Middleware separation enhances code readability.
- Always validate user input and use `try...catch` for error handling.
- Festivals or obstacles can slow you down, but **consistency** wins long term.

---

## 🔗 Social Links
- 🌐 **GitHub:** [Maheshkrsaw/75DaysOfFullStack](https://github.com/Maheshkrsaw/75DaysOfFullStack)
- 💼 **LinkedIn:** [maheshmahi07](https://www.linkedin.com/in/maheshmahi07)
- 🐦 **Twitter/X:** [@kumarMahesh9304](https://x.com/kumarMahesh9304)

---

## 💬 Final Note
Even with distractions and challenges, small consistent efforts matter.  
Building this backend project was a mix of patience, debugging, and discipline — exactly what a developer’s journey looks like.  
Next step → **Backend logic finalization and frontend integration** 🚀

---
