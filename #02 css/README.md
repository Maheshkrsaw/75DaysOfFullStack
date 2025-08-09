TODAYS I COVRED CSS PART 
WIDTH AND HEIGHT 
COLOR
FONT-FAIMLY
LINE HEIGHT 
TEXT ALLIGN 
PADDING 
MARGIN
BORDER
DISPALAY
POSITON
BACKGROUND
FLEX
PSUEEDO ELEMENT 
PUSDO CLASSES 

grid

css project 1


# 🚀 Day 02 — CSS Layouts: Flexbox, Grid & Positioning  

📅 Part of my **#75DaysOfFullStack** journey — learning, practicing & documenting full-stack development systematically.  
📁 Project updated on GitHub daily:  
👉 [75DaysOfFullStack Repository](https://github.com/Maheshkrsaw/75DaysOfFullStack)

---

## 📋 What I achieved today
- Learned & practiced CSS layout techniques: Flexbox, Grid & Position.
- Implemented responsive layouts with Flexbox and Grid.
- Experimented with different `position` values and their use cases.
- Pushed all practice files & notes to GitHub with clean commits.

---

## 📘 Topics Covered

### 🎨 Flexbox
- Main axis & cross axis
- Properties: `justify-content`, `align-items`, `flex-wrap`, `gap`
- Child properties: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`

### 🎨 CSS Grid
- Grid container & grid items
- Defining rows & columns
- Properties: `grid-template-rows`, `grid-template-columns`, `gap`, `grid-area`
- Implicit vs Explicit grids
- Media queries with Grid

### 🎨 Positioning
- `static`, `relative`, `absolute`, `fixed`, `sticky`
- Use-cases & stacking context (`z-index`)

---

## 💻 Sample Code
Below is a minimal **Flexbox + Grid + Position** example:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Day 02 — CSS Layouts</title>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px;
}
.grid-item {
  background-color: #2196F3;
  color: white;
  padding: 20px;
  text-align: center;
}
.fixed-box {
  position: fixed;
  top: 10px;
  right: 10px;
  background: crimson;
  color: white;
  padding: 5px 10px;
}
</style>
</head>
<body>

<div class="container">
  <div class="box">Flex 1</div>
  <div class="box">Flex 2</div>
  <div class="box">Flex 3</div>
</div>

<div class="grid-container">
  <div class="grid-item">Grid 1</div>
  <div class="grid-item">Grid 2</div>
  <div class="grid-item">Grid 3</div>
</div>

<div class="fixed-box">Fixed</div>

</body>
</html>
```

---

## 🔗 Repository
📁 All files & notes for Day 02:  
👉 [GitHub Repo — 75DaysOfFullStack](https://github.com/Maheshkrsaw/75DaysOfFullStack)

---

## 🧠 Key Takeaway
> Mastering layout techniques makes your designs more flexible, responsive, and professional.

---

## 🗓️ What’s Next?
➡️ Practice responsive web design with media queries & start JavaScript basics.

---

## 🙌 Connect With Me
- 🐙 [GitHub](https://github.com/Maheshkrsaw)  
- 💼 [LinkedIn](https://www.linkedin.com/in/maheshmahi07/)  
- 🐦 [Twitter/X](https://x.com/kumarMahesh9304)

---

## 📌 Tags
#css #flexbox #grid #position #webdevelopment #75DaysOfFullStack #Day02
