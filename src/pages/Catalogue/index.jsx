import React, { useState, useEffect }from 'react'
import ProductCardSmall from '../../components/ProductCardSmall'
import dataProducts from '../../dataProducts'
import { getCategory } from '../../services/category'
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../services/catalogue'
 
const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const location = useLocation();
   
  const getProductsData = async (_id) =>{
    const productsData = await getProducts(null, null,  _id)
    console.log(productsData.data.result)
    setProducts(productsData.data.result);
  }
   
  const getCategoryData = async() =>{
    const categoryData = await getCategory()
    setCategory(categoryData.data.category)
  }
  // console.log(category)
  // console.log(category.map((cat) => cat))
  useEffect(()=>{
    getCategoryData()
    getProductsData()

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
          <input type="search" className="mx-4 p-1 px-2 border border-gray-400 rounded-md w-1/2  lg:w-3/4"  placeHolder="search"></input>
          <ol className="hidden lg:block w-32">
            {/* titulo catálogo */}
            <h3 className="my-7 font-bold uppercase mx-2 text-center">Catálogo de productos</h3>
            {/* contenedor catálogos */}
            <li className="grid my-5">
              {category.map(({name, _id}) => 
                <button 
                  key={_id} 
                  className="hover:text-white transition duration-500 ease-in-out font-bold mb-5 hover:bg-red-200" 
                  onClick={()=>{
                    getProductsData(_id)
                  }}>
                    {name}
                  </button>
                ) }
            </li>
          </ol>
        </div>
        <div className="p-3">
          <div className="flex md:block justify-center w-screen"> 
            <input className="p-1  px-2 mb-2 border rounded-sm border-black w-3/4 md:w-44"  placeHolder="Orden por defecto" type="text"/>
          </div>
          <div>
            {products.map(({name, price, category, images})=>(
              <ProductCardSmall  
                  name={name} 
                  price={price} 
                  category={category} 
                  image={images}/>
            ))}
          </div>
        </div>
      </div>
 
  )
}

export default Catalogue
