import React, { useState } from 'react' // <-- 1. useState import kiya
import { allproducts } from './productsData'

const All = () => {
  const categories = ["All", "Jeans", "Shirts", "Shoes", "Watches", "Jackets", "Shorts", "Glasses"]
const [activeCategory, setActiveCategory] = useState("All")
  const filter = activeCategory ==="All"
  ?allproducts
  :allproducts.filter(product=>product.category===activeCategory)
  return (
    <div className="w-full bg-gray-50 py-6 px-4 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        
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
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 '>
            {filter.map((product)=>{
                return(
                    <div key={product.id}>
           <img className='h-50 w-full object-cover p-4' src={product.image} alt={product.name} />
           <h2>{product.title}</h2>
           <p>{product.category}</p>
           <p>Rs{product.price}$</p>
           <button>add to card</button>
                    </div>
                )
            })}
        </div>

      </div>
    </div>
  )
}

export default All