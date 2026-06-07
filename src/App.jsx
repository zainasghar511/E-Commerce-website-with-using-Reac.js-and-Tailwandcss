import React from 'react'
import { Route, Routes, Link } from 'react-router'
import Navbar from './Navbard/Navbar'
import Home from './Home'
import About from './Navbard/About'
import All from './All'

const App = () => {
  return (
    <div>

   <Navbar />

      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/About' element={<About/>} />
<Route path='/All' element={<All/>} />
      </Routes>
    </div>
  )
}

export default App