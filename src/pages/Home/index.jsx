import React from 'react'
import ProductCard from '../../components/ProductCard'
import Banner from '../../UI/Banner'
import data from '../../data'
import navData from '../../navigationData'
import CardNavigation from '../../components/CardNavigation'
import ServiceData from '../../UI/ServiceData'


const Home = () => {
   
  return (
    <div className="container">
      <Banner />
      <div >
        <h2 className="font-sans text-3xl text-center m-5 border-t-2 border-b-2 p-1 border-red-200">Productos</h2>
        <div className="grid lg:grid-cols-2">
          {navData.card.map(({name, image, button, direction})=>(
            <CardNavigation name={name} image={image} button={button} direction={direction}/>
          ))}
        </div>
      </div>
      <h2 className="font-sans text-3xl text-center   m-4 border-t-2 border-b-2 p-1 border-red-200">Ofertas</h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2">
        {data.products.map(({name, image, category})=>(
          <ProductCard name={name} image={image} category={category} />
        ))}
      </div>
      
      <ServiceData />
    
     
   </div>
  )
}

export default Home;
