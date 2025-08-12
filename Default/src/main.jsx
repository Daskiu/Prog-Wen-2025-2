import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import App from './App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(<App />)
console.log(rootElement);