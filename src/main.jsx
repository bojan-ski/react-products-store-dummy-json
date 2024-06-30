import React from 'react'
import ReactDOM from 'react-dom/client'
// bootstrap css
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// custom css
import './index.css'
// app
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
