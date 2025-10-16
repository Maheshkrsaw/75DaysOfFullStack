question pracxtice 
1. Create an HTML page with a button. When the button is clicked, change the text of a paragraph element
2. Create a page with two images and a button. When the button is clicked, swap the source attribute of the images


3. Create a form with input fields and a submit button. Use JavaScript to validate the form and display an error message if the input is invalid.

4.Create an unordered list. Allow users to add and remove list items dynamically using buttons.

5.Build a countdown timer that starts when a button is clicked and updates the display in real-time.

6. Create a tabbed interface where clicking on tabs displays different cont sections without page reload

7. Display a progress bar that updates in real-time, showing the progress download, or form submission.

# 🚀 Day 08 — JavaScript Practice Questions (Approach Only) — #75DaysFullStackAI

📁 Repo: https://github.com/Maheshkrsaw/75DaysOfFullStack  
🔗 Live (placeholder): https://maheshkrsaw.github.io/07_jsbasics_2

---

## Goal
Practice DOM, events, timers, UI state and form validation. Below each task has a clear step-by-step approach, edge-case notes and quick testing tips.

---

### 1) Change paragraph text on button click
**Approach**
- Select paragraph and button elements.
- Add `click` event listener on button.
- In handler update paragraph text via `textContent` or `innerText`.
**Edge cases / test**
- Ensure element exists before binding.
- Test multiple clicks and initial/empty text states.

---

### 2) Swap two images on button click
**Approach**
- Select both `<img>` elements and the swap button.
- On click: store first `src` in temp, assign second `src` to first, temp to second.
- Optionally swap `alt` attributes too for accessibility.
**Edge cases / test**
- Verify images loaded (use placeholders while testing).
- Test rapid clicks; consider disabling button while swap in progress (if crossfade animation).

---

### 3) Form validation with error messages
**Approach**
- Build form with named inputs and submit button.
- On `submit`: `preventDefault()`.
- Validate fields (e.g., required, min-length, email regex).
- Show inline error messages beside inputs; clear on correction.
- On success, show success state or proceed with submission logic.
**Edge cases / test**
- Trim input values; handle whitespace-only entries.
- Validate on blur/input for better UX.
- Accessibility: associate error messages with `aria-describedby`.

---

### 4) Dynamic list: Add & Remove items
**Approach**
- Select input, add button, and `<ul>` container.
- On add: validate input → create `li` → add text + remove button → append to list.
- Remove: attach click handler on remove button to `li.remove()` or use event delegation.
**Edge cases / test**
- Prevent empty items or duplicates (optional).
- Use event delegation if list large or items generated dynamically.
- Persist list to `localStorage` if needed.

---

### 5) Countdown timer
**Approach**
- Provide start button and display element.
- On start: set initial time variable, use `setInterval` to decrement every second and update display.
- When time ≤ 0: `clearInterval`, show end state.
- Optionally provide pause/reset controls.
**Edge cases / test**
- Prevent multiple intervals by disabling start while running.
- Use `clearInterval` on page unload or reset.
- Format display mm:ss for larger durations.

---

### 6) Tabbed interface (no reload)
**Approach**
- Create tab buttons with `data-tab` or IDs and matching content sections.
- Add click listeners on tabs: remove `active` class from all sections and add to target section.
- Manage active tab styling via CSS class.
- Optionally use `history.pushState()` or `location.hash` to preserve state/shareable links.
**Edge cases / test**
- Ensure keyboard accessibility (arrow/tab navigation, `aria-selected`, `role="tab"`).
- Hide non-active sections with `display:none` or `aria-hidden`.

---

### 7) Progress bar (real-time)
**Approach**
- Create container + inner filler element.
- Use `setInterval` or `requestAnimationFrame` to increment width/style percentage.
- For simulated download: increment based on chunk sizes or random increments until 100%.
- For real uploads: update from progress events (XHR `progress` / Fetch streams).
**Edge cases / test**
- Smooth animation: increment small steps and avoid UI blocking.
- Show percentage text + estimated time (optional).
- Handle cancel/error states and reset properly.

---

## Common debugging & testing tips
- Use `console.log()` and DevTools Elements/Network/Console panels.  
- Validate DOM queries (`if (!el) { console.warn(...) }`).  
- Use `preventDefault()` for forms and anchor behaviors when needed.  
- Clean up timers/handlers (`clearInterval`, remove listeners) to avoid leaks.  
- Test mobile touch events and keyboard interactions.

---

## Short learning plan for each task (step-by-step)
1. Read the task → sketch UI elements.  
2. Select elements using `querySelector` / `getElementById`.  
3. Wire a minimal event handler that logs first.  
4. Implement the core logic (update DOM/state).  
5. Add validation / edge-case handling.  
6. Style/UX: feedback, disable/enable controls.  
7. Test manually + fix bugs, add small unit checks if needed.

---

## Notes
- Keep code modular (small functions).  
- Prefer `addEventListener` and avoid inline handlers.  
- Use semantic HTML and accessibility attributes.

---

## Connect
- GitHub: https://github.com/Maheshkrsaw  
- LinkedIn: https://www.linkedin.com/in/maheshmahi07  
- Twitter/X: https://x.com/kumarMahesh9304

---
