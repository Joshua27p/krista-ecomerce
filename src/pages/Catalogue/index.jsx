import React, { useState }from 'react'
import ProductCardSmall from '../../components/ProductCardSmall'
import dataProducts from '../../dataProducts'
 

const Catalogue = () => {
  const [products, setProducts] = useState([]);


  return (
 
      <div className="flex">
        <div>
          <input className="border-2 border-black" type="text" placeHolder="search"></input>
          <ol>
          <span className="uppercase">Catálogo de productos</span>
            <li className="grid">
              <button onClick={()=>setProducts(dataProducts.dress)}>Vestidos</button>
              <button onClick={()=>setProducts(dataProducts.top)}>tops</button>
              <button>Palazos</button>
              <button>buzos</button>
              <button>Enterizos</button>
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
