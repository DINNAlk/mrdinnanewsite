import { useState } from 'react'
import './index.css'
import './font.css'; 
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Youtube from './Youtube'
import Portfolio from './Portfolio'
import Conatact from './Conatact'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        
        <div className="p-6 bg-white sticky top-0 h-screen hidden md:block md:col-span-2">
          <h1 className='font-bold mr-4 betmFontBold'>MR DINNA</h1>
          <NavLink to="/" className={({ isActive }) =>
            `block text-stone-950 mt-5 ${isActive ? 'font-semibold text-red-950' : ''}`
          }>Home</NavLink>
          <NavLink to="/youtube" className={({ isActive }) =>
            `block text-stone-950 mt-5 ${isActive ? 'font-semibold' : ''}`
          }>YouTube</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) =>
            `block text-stone-950 mt-5 ${isActive ? 'font-semibold' : ''}`
          }>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `block text-stone-950 mt-5 ${isActive ? 'font-semibold' : ''}`
          }>Contact Us</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `block text-stone-950 mt-5 ${isActive ? 'font-semibold' : ''}`
          }>About Us</NavLink>

          <h1 className='absolute bottom-5 select-none cursor-pointer BetmBlack'>
            Develop by DINNA-TEAM
          </h1>
        </div>

        
        <div className="col-span-10 md:col-span-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Conatact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div className="p-10 text-2xl">Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
