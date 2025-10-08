import React from 'react'
import { store } from './Store/Store';
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>
 </Provider>
)
