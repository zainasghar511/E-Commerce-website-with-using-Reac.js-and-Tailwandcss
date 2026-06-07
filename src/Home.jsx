import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
   
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-gray-900">
      
      <img  
        src="/Main.png" 
        alt="Store Banner" 
        className="w-full h-full object-cover opacity-80" 
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center
       bg-black/40 text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider mb-4 drop-shadow-lg">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-md mb-2 drop-shadow">
          Shop your Favourite item.
        </p>
        <Link to="/All">
        <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-md">
          Shop Now
        </button></Link>

      </div>
      <button>helo</button>
    </div>
  )
}

export default Home