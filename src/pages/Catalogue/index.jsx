import React, { useState, useEffect }from 'react'
import ProductCardSmall from '../../components/ProductCardSmall'
import dataProducts from '../../dataProducts'
 import { useLocation } from 'react-router-dom'

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
   
  
  useEffect(()=>{
    if(location.state?.product === 'dress'){
      setProducts(dataProducts.dress)
    }
    if(location.state?.product === 'top'){
      setProducts(dataProducts.top)
    }
  },[location.state?.product])
 
  return (
 
      <div className="lg:flex">
        <div className="p-3 flex md:block justify-center">
          <input className="p-1 px-2 mb-2 border border-gray-400 rounded-md w-1/2  lg:w-3/4" type="text" placeHolder="search"></input>
          <ol className="hidden lg:block">
            {/* titulo catálogo */}
            <span className="uppercase mx-2">Catálogo de productos</span>
            {/* contenedor catálogos */}
            <li className="grid my-5 ">
                <button className="mt-2 mb-5 hover:bg-red-200" onClick={()=>setProducts(dataProducts.dress)}>Vestidos</button>
                <button className="mb-5 hover:bg-red-200" onClick={()=>setProducts(dataProducts.top)}>tops</button>
                <button className="mb-5 hover:bg-red-200">Palazos</button>
                <button className="mb-5 hover:bg-red-200">buzos</button>
                <button className="mb-2 hover:bg-red-200">Enterizos</button>
            </li>
          </ol>
        </div>
        <div>
          <div className="flex md:block justify-center w-screen"> 
            <input className="p-1  px-2 mb-2 border rounded-sm border-black w-3/4 md:w-44"  placeHolder="Orden por defecto" type="text"/>
          </div>
          <div>
            {products.map(({name, price, category, image})=>(
              <ProductCardSmall  name={name} price={price} category={category} image={image}/>
              ))}
          </div>
        </div>
      </div>
 
  )
}

export default Catalogue
