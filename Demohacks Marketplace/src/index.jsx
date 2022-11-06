import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
)
