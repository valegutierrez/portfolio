import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import './index.scss'
import './App.scss'
import { ReactNode, StrictMode, useLayoutEffect } from 'react'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio/Portfolio.tsx'
import PortfolioHome from './pages/Portfolio/Home.tsx'
import Wedplan from './pages/Portfolio/Wedplan.tsx'
import Contact from './pages/Contact.tsx'

const titles = [
  {path: "/", title: ""},
  {path: "/portfolio", title: "Portafolio"},
  {path: "/portfolio/wedplan", title: "Wedplan"},
  {path: "/contact", title:"Contacto"},
];

const Wrapper = ({children}: {children: ReactNode}) => {
  let location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    const currentTitle = titles.find((title) => title.path === location.pathname);
    if (currentTitle && currentTitle.title) {
      document.title = `${currentTitle.title} | ValeUX`;
    } else {
      document.title = "ValeUX";
    }
  }, [location.pathname]);
  return children;
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Wrapper>
      <StrictMode>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="portfolio" element={<Portfolio />}>
            <Route index element={<PortfolioHome />}></Route>
            <Route path="wedplan" element={<Wedplan />}></Route>
          </Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </StrictMode>
    </Wrapper>
  </BrowserRouter>
)
