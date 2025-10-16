# 📅 Day 53 – Node.js Deep Dive & Practical Assignments  
> Part of the #75DaysFullStackAI Challenge  
> Focus: Node.js runtime, npm, package management, and hands-on CLI/project assignments.

---

## 🧩 Node.js Overview

- **Node.js** is a **JavaScript runtime environment** built on Chrome's V8 engine.
- Allows running JavaScript **outside the browser**, making backend development possible.
- Uses **event-driven, non-blocking I/O** architecture → great for scalable applications.
- Supports building APIs, CLI tools, server-side apps, and more.

---

## 🔹 Key Concepts Learned

1️⃣ **Starting a Node.js Project**
- Initialize project: `npm init` or `npm init -y`  
- Structure: `src/`, `index.js`, `package.json`  
- Importance of `package.json`: tracks dependencies, scripts, metadata.

2️⃣ **npm (Node Package Manager)**
- Install packages: `npm install <package>`  
- Remove packages: `npm uninstall <package>`  
- Semantic versioning: `^`, `~` for updates.  
- Run scripts: `npm run <script>`  

3️⃣ **Internal vs External Packages**
- **Internal**: Built-in Node modules (`fs`, `path`, `http`)  
- **External**: Installed via npm (e.g., `express`, `chalk`, `dotenv`)  

4️⃣ **package-lock.json**
- Locks the exact versions of dependencies for consistent project builds.
- Automatically generated when running `npm install`.

---

## 🛠️ Hands-on Assignments

**Assignment 1 – CLI Tool**
- Built a simple command-line interface using Node.js.
- Learned to read input using `process.argv` and display output.
- Reinforced **event-driven JS concepts** outside the browser.

**Assignment 2 – Mini Node.js Project**
- Created a small module combining internal and external packages.
- Practiced modular code structure: separate files for logic, utilities, and main execution.
- Added npm scripts to automate execution of the program.
- Learned error handling for unexpected input and missing packages.

---

## 💡 Key Takeaways

- Node.js is a **must-know backend runtime** for any JavaScript developer.  
- `npm` and **package management** are essential for real-world projects.  
- Hands-on assignments improve understanding of:
  - CLI input/output handling
  - Project structure
  - Dependency management
- Writing small utilities with Node.js strengthens debugging and logic skills.

---

## 🔗 Social Links

- 💼 [LinkedIn](https://www.linkedin.com/in/maheshmahi07)  
- 🐦 [Twitter/X](https://x.com/kumarMahesh9304)  
- 🌐 [GitHub](https://github.com/Maheshkrsaw/75DaysOfFullStack)  

---

**#NodeJS #JavaScript #BackendDevelopment #npm #CLI #FullStackJourney #WebDevelopment #75DaysFullStackAI**


# 📅 Day 54 — HTTP Protocol & Web Communication  
**Challenge:** #75DaysFullStackAI  
**Topic:** Deep Dive into HTTP, Networking, and Request–Response Model  

---

## 🧠 Overview  
Today’s learning focused on understanding how the **client and server communicate** using the **HTTP protocol**, the backbone of all web and API communication. Before moving into Express.js, I explored every essential concept like request-response flow, ports, and status codes.

---

## 🔑 Key Learnings  

### 🌐 What is HTTP Protocol?  
- HTTP stands for **HyperText Transfer Protocol**.  
- It’s a **stateless** communication model where each request is processed independently.  
- Defines **rules** for how data is requested and delivered between a client (like a browser) and a server.  

---

### 🔁 Request–Response Model  
- **Client (e.g., browser, Postman)** sends a request.  
- **Server** processes that request and sends a response.  
- This model is used across web apps, REST APIs, and even mobile–backend communication.

Example Flow:
Client → Request → Server → Response → Client

---

### 🌍 Domain Name & IP Address  
- A **domain name** (like `google.com`) is a human-readable address.  
- It maps to an **IP address** (`142.250.183.14`) through the **DNS (Domain Name System)**.  
- DNS = Internet’s phonebook that resolves names to numbers.  

---

### 🔌 Ports  
- A **port** is like a door through which network data enters or exits your system.  
- Common ports:  
  - `80` → HTTP  
  - `443` → HTTPS  
  - `3000` → Default for local dev servers  

---

### 🧾 HTTP Methods  
| Method | Purpose | Example |
|---------|----------|----------|
| GET | Retrieve data | Fetch user list |
| POST | Send new data | Create a new post |
| PUT | Update existing data | Update profile |
| DELETE | Remove data | Delete user |

---

### 🧠 HTTP Response & Status Codes  
| Code | Meaning | Description |
|------|----------|-------------|
| 200 | OK | Request succeeded |
| 201 | Created | New resource created |
| 400 | Bad Request | Client error |
| 404 | Not Found | Resource missing |
| 500 | Server Error | Internal issue |

---

### 📦 Headers & Body  
- **Headers:** Provide meta-information (like content type, authentication).  
- **Body:** Holds the main data (like JSON, text, or form data).  

Example:
```js
{
  "Content-Type": "application/json",
  "Authorization": "Bearer token"
}
