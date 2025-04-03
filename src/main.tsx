import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import './index.scss'
import './App.scss'
import { StrictMode } from 'react'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio/Portfolio.tsx'
import PortfolioHome from './pages/Portfolio/Home.tsx'
import Project1 from './pages/Portfolio/Project1.tsx'
import Contact from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="portfolio" element={<Portfolio />}>
          <Route index element={<PortfolioHome />}></Route>
          <Route path="project-1" element={<Project1 />}></Route>
        </Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
