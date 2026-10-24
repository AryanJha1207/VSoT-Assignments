import  React from 'react'
import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import ReactRouter from './POC/ReactRouter.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactRouter />
    </BrowserRouter>
  </React.StrictMode>


)
