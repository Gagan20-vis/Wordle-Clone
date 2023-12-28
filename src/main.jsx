import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WordState from './context/wordState'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordState>
      <App />
    </WordState>
  </React.StrictMode>,
)
