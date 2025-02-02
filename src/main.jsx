import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import userContext from "../context/authContext.js"
createRoot(document.getElementById('root')).render(
    <App />
)
