import React, { useState } from 'react'
import { allproducts } from './productsData'

const All = ({ addToCart }) => { // <-- Prop receive kiya
  const categories = ["All", "Jeans", "Shirts", "Shoes", "Watches", "Jackets", "Shorts", "Glasses"]
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filter = activeCategory === "All"
    ? allproducts
    : allproducts.filter(product => product.category === activeCategory)

  return (
    <div className="w-full bg-gray-50 py-6 px-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
        {categories.map((item, index) => {
          const isActive = item === activeCategory
          return (
            <div key={index}>
              <button 
                onClick={() => setActiveCategory(item)}
                className={`px-5 py-2.5 font-semibold text-sm sm:text-base rounded-full border shadow-sm transition-all duration-200 cursor-pointer active:scale-95
                  ${isActive 
                    ? 'bg-blue-900 text-white border-blue-100 scale-105' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:scale-105' 
                  }`}
              >
                {item}
              </button>
            </div>
          )
        })}
      </div>

      <div className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {filter.map((product) => {
          return (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow border flex flex-col justify-between">
              <div>
                <img className='h-50 w-full object-cover rounded-md mb-2' src={product.image} alt={product.title} />
                <h2 className='font-bold text-lg mb-1'>{product.title}</h2>
                <p className='text-gray-500 text-sm mb-2'>{product.category}</p>
              </div>
              <div>
                <p className='font-semibold text-blue-900 mb-3'>Rs {product.price}</p>
                <button 
                  onClick={() => addToCart(product)} // <-- Yahan onClick lagaya
                  className='w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition cursor-pointer active:scale-95'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default All