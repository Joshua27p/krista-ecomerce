import React, { useState }from 'react'
import ProductCardSmall from '../../components/ProductCardSmall'
import dataProducts from '../../dataProducts'
 

const Catalogue = () => {
  const [products, setProducts] = useState([]);


  return (
 
      <div className="flex container mx-10">
        <div>
          <input className="mb-2 border-2 border-black" type="text" placeHolder="search"></input>
          <ol>
          <span className="uppercase mx-2">Catálogo de productos</span>
            <li className="grid">
              <button className="mt-2 mb-5" onClick={()=>setProducts(dataProducts.dress)}>Vestidos</button>
              <button className="mb-5" onClick={()=>setProducts(dataProducts.top)}>tops</button>
              <button className="mb-5">Palazos</button>
              <button className="mb-5">buzos</button>
              <button className="mb-2">Enterizos</button>
            </li>
          </ol>
        </div>
        <div>
          <div> 
            <input  placeHolder="Orden por defecto" type="text"/>
          </div>
          {products.map(({name, price, category, image})=>(
              <ProductCardSmall name={name} price={price} category={category} image={image}/>
          ))}
        </div>
      </div>
 
  )
}

export default Catalogue
