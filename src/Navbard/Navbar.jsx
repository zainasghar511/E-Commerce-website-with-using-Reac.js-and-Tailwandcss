import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-blue-900 text-white flex items-center justify-between px-6 md:px-12 shadow-lg'>
      
   
      <Link to="/">
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl cursor-pointer tracking-widest transition-all transform hover:scale-105 bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-300 hover:via-pink-400 hover:to-orange-400 text-transparent bg-clip-text'>
          Zain's Store
        </h1>
      </Link>
      

      <div className='flex items-center gap-6 sm:gap-10 font-semibold text-sm sm:text-base md:text-lg'>
        
     
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `tracking-widest transition-all transform hover:scale-105 hover:text-orange-400 ${
              isActive ? 'text-orange-400 border-b-2 border-orange-400' : 'text-white'
            }`
          }
        >
          About Store
        </NavLink>

        <Link to="/cart" className='relative hover:text-pink-400 transition-colors duration-200'>
          <span className='text-xl sm:text-2xl'>🛒</span>
        <span className='absolute -top-2 -right-3 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold text-white'>
            0
          </span>
        </Link>

      </div>
    </div>
  )
}

export default Navbar