import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import Banner from '../../UI/Banner'
import { getProducts } from '../../services/catalogue'
import navData from '../../navigationData'
import CardNavigation from '../../components/CardNavigation'
import ServiceData from '../../UI/ServiceData'


const Home = () => {
  const [products, setProducts ] = useState([]);
  const getData = async() => {
    const catalogue = await getProducts(true, 4)
    setProducts(catalogue.data.result)
  }
  console.log(products)
  useEffect(() => {
    getData()
    
  }, [])
   
  return (
    <div className="container">
      <Banner />
      <div >
        <h2 className="font-sans text-3xl text-center m-5 border-t-2 border-b-2 p-1 border-red-200">Productos</h2>
        <div className="grid lg:grid-cols-2">
          {navData.card.map(({_id, name, image, button, direction})=>(
            <CardNavigation key={_id} name={name} image={image} button={button} direction={direction}/>
          ))}
        </div>
      </div>
      <h2 className="font-sans text-3xl text-center   m-4 border-t-2 border-b-2 p-1 border-red-200">Ofertas</h2>
       <div className=" grid lg:grid-cols-4 md:grid-cols-2">
        {products.map(({_id, name, images, category})=>(
        <ProductCard key={_id} name={name} image={images[0]} category={category} />
        ))}
      </div> 
      
      <ServiceData />
    
     
   </div>
  )
}

export default Home;
