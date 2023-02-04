import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//import these so as to not use them every time we need them
import "./styles/global.scss"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
