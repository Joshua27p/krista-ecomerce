import React from 'react'
import ProductCard from '../../components/ProductCard'
import Banner from '../../UI/Banner'
import data from '../../data'
import navData from '../../navigationData'
import CardNavigation from '../../components/CardNavigation'
import ServiceData from '../../UI/ServiceData'
import Footer from '../../UI/footer/index'

const Home = () => {
   
  return (
    <div>
      <Banner />
      <div>
        <h1 className="font-sans text-3xl text-center m-5">Productos</h1>
        <div className="flex">
          {navData.card.map(({name, image, button, direction})=>(
            <CardNavigation name={name} image={image} button={button} direction={direction}/>
          ))}
        </div>
      </div>
      <h1 className="font-sans text-3xl text-center  text-xl m-4">Ofertas</h1>
      <div className="flex">
        {data.products.map(({name, image, category})=>(
          <ProductCard name={name} image={image} category={category} />
        ))}
      </div>
      <ServiceData />
      <Footer />
     
   </div>
  )
}

export default Home;
