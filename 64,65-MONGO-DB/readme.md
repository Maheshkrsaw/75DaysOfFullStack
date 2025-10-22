# Day 64 & 65 — MongoDB & Backend Improvements 🚀

## Day 64 — MongoDB Deep Dive

### 🔹 What I Learned
- **Creating a free MongoDB Cloud server**  
  - Set up a cluster on MongoDB Atlas.
  - Configured IP whitelist and database user for secure access.
- **Connecting Full Stack Application to MongoDB**  
  - Used `mongoose.connect()` with connection URI.
  - Handled connection errors properly.
- **Defining Schema with Mongoose**  
  - Created schemas for collections (e.g., Users, Todos).  
  - Defined field types, required fields, and default values.
- **CRUD Operations**  
  - Implemented `create`, `read`, `update`, `delete` operations.  
  - Tested with Postman for each endpoint.
- **Challenges**
  - Spent ~1.5 hrs connecting Atlas DB to code.  
  - Learned patience and troubleshooting in real-life DB connection issues.

### 📝 Key Takeaways
- Proper schema definition is crucial for structured data.  
- Connection strings and user permissions must be accurate to avoid wasted time.  
- CRUD operations are the foundation for any backend app.

---

## Day 65 — Backend Security & Validation Boost

### 🔹 Improvements Implemented
1. **Password Hashing using bcrypt**
   - Added SALT to passwords before hashing.
   - Ensures passwords are stored securely and prevents compromise.
2. **Error Handling**
   - Wrapped DB operations in `try-catch`.
   - Prevents app crashes due to duplicate emails or invalid requests.
3. **Input Validation**
   - Basic validation for required fields.
   - Implemented **Zod** for structured, type-safe input validation (email format, password strength, etc.).

### 📝 Key Takeaways
- Hashing passwords is essential for production-level apps.  
- Proper error handling avoids unexpected app crashes.  
- Zod makes validation clean, reliable, and scalable.  
- Backend requires functionality + security + stability for real-world readiness.

---

### 🔗 Connect & Explore
🌐 GitHub: [Maheshkrsaw](https://github.com/Maheshkrsaw/75DaysOfFullStack)  
💼 LinkedIn: [maheshmahi07](https://www.linkedin.com/in/maheshmahi07)  
🐦 Twitter/X: [@kumarMahesh9304](https://x.com/kumarMahesh9304)

---

#Backend #NodeJS #ExpressJS #MongoDB #Bcrypt #Zod #ErrorHandling #FullStack #WebDevelopment #75DaysFullStackAI
