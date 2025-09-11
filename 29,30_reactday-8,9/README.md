# ⚛️ React (Vite) + 🎨 Tailwind CSS — Single-File Setup Guide

Follow these steps to create a React app with Vite and integrate Tailwind CSS using the official `@tailwindcss/vite` plugin. Everything is in one place for easy copy–paste.

--------------------------------------------------------------------------------
01) CREATE YOUR PROJECT (Vite + React)

# Create project
npm create vite@latest my-project

# Move into folder
cd my-project

# Install dependencies
npm install


--------------------------------------------------------------------------------
02) INSTALL TAILWIND CSS

# Install Tailwind and the official Vite plugin
npm install tailwindcss @tailwindcss/vite


--------------------------------------------------------------------------------
03) CONFIGURE THE VITE PLUGIN

# File: vite.config.js  (or vite.config.ts if you prefer TS)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // React plugin
    tailwindcss(),  // Tailwind plugin
  ],
})


--------------------------------------------------------------------------------
04) IMPORT TAILWIND CSS

# File: src/index.css
@import "tailwindcss";


--------------------------------------------------------------------------------
05) REACT ENTRY (main.jsx) — INCLUDE REACT + CSS

# File: src/main.jsx
import React from 'react'                // (as you requested, explicitly included)
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'                     // IMPORTANT: this pulls in Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


--------------------------------------------------------------------------------
06) BASIC APP COMPONENT (use Tailwind utilities)

# File: src/App.jsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl md:text-4xl font-bold underline">
        🚀 Hello world! React + Tailwind is working.
      </h1>
    </div>
  )
}
export default App


--------------------------------------------------------------------------------
(OPTIONAL) PLAIN HTML EXAMPLE (IF NOT USING REACT)

# If you were using plain HTML, include your compiled CSS in <head> like this:
# (React + Vite users usually import CSS in main.jsx instead — as we did above.)
# File: index.html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Example path; for React+Vite we import CSS in main.jsx -->
  <link href="/src/index.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div id="root"></div>
</body>
</html>


--------------------------------------------------------------------------------
RUN THE DEV SERVER

# Start Vite dev server
npm run dev

# Open the shown URL (e.g., http://localhost:5173/)
