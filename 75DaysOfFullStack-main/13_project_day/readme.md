# 🚀 Day 13 — #75DaysFullStackAI Challenge  

Welcome to **Day 13** of my learning journey!  
As part of my **#75DaysFullStackAI challenge**, I’m building consistency in web development, UI/UX, and modern JS concepts.  

---

## 📌 What I Explored Today  

1. **JavaScript DOM Manipulation**  
   - Practiced selecting, creating, and appending DOM elements  
   - Worked with `querySelector`, `appendChild`, and dynamic styling  

2. **Event Handling**  
   - Implemented click, hover, and input events  
   - Learned how to pass parameters in event listeners  

3. **Reusable Components**  
   - Wrote modular functions for dynamic UI updates  
   - Example: Creating toast notifications (custom alerts)  

4. **Mini-Projects**  
   - ✅ Button with hover effect  
   - ✅ Dynamic card generator  
   - ✅ Simple notification toaster  

---

## 📝 Example Code — Toaster Component  

```javascript
function createToaster(config) {
  let toaster = document.createElement("div");
  toaster.innerText = config.message || "Default message 🚀";
  toaster.style.position = "fixed";
  toaster.style[config.positionX || "right"] = "20px";
  toaster.style[config.positionY || "top"] = "20px";
  toaster.style.background = config.theme === "dark" ? "#333" : "#eee";
  toaster.style.color = config.theme === "dark" ? "#fff" : "#000";
  toaster.style.padding = "10px 20px";
  toaster.style.borderRadius = "8px";
  toaster.style.zIndex = "9999";
  document.body.appendChild(toaster);

  setTimeout(() => {
    toaster.remove();
  }, (config.duration || 3) * 1000);
}

createToaster({
  message: "Task Completed ✅",
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 4
});



---

## 🛠️ Tools & Tech Used
- **HTML5** → Structure  
- **CSS3** → Styling  
- **JavaScript (ES6+)** → Interactivity  

---

## 🎯 Reflection
At first, **DOM manipulation felt confusing and messy** 😅.  
But after working on **mini-projects**, things are starting to click.  

The **toaster project** made me realize how easy it is to convert a **normal concept into a reusable component**.  

I strongly believe that with **time + consistency**, these skills will become **second nature**.  
This challenge is **pushing me daily** to stay accountable and improve 🚀.  



## 🔗 Connect with Me
Follow my journey 👉 **#75DaysFullStackAI**  

🌐 **GitHub**: [Maheshkrsaw](https://github.com/Maheshkrsaw)  
💼 **LinkedIn**: [maheshmahi07](https://www.linkedin.com/in/maheshmahi07)  
🐦 **Twitter (X)**: [@kumarMahesh9304](https://x.com/kumarMahesh9304)  
