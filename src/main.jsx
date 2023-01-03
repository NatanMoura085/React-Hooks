import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Nav'
import Usestate from './components/Usestate'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Usestate/>
    <App />
  </React.StrictMode>,
)
