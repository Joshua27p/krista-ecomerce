import React from 'react'
import Shoppincart from '../../assets/images/shoppincart.png'

const ToggleShoppingCart = ({isShopping, toggleShopButton}) => { 
  return (
    <div>
      {/* background black para el carrito  */}
       <div className="hidden absolute inset-0 z-40 opacity-25 bg-black"></div>  
        {/* contenedor del carrito  */}
        <div 
        className={`transition duration-700 z-50 w-auto inset-0 absolute bg-white  my-12   
        ${ !isShopping 
        ? "transform translate-x-full"
        : "transform translate-x-0"
        }`}>
          
          <button onClick={toggleShopButton}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isShopping && (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            )}
           </svg>
          </button>
            <h2 className="text-center text-2xl font-bold">El carrito está vacío</h2>
            <img className="w-40 my-32 mx-auto" src={Shoppincart}  alt="carrito"  />
        </div>
    </div>
  )
}

export default ToggleShoppingCart
