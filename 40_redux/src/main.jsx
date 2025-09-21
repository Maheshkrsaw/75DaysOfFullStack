import React from 'react'          // ✅ added

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Store/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
)
