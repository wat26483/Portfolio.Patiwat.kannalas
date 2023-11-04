import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './router/Home'
import About from './router/About'
import Project from './router/Project'
import Contact from './router/Contact'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
