import React from 'react'
import ProductCard from '../../components/ProductCard'
import Banner from '../../UI/Banner'
import data from '../../data'
import navData from '../../navigationData'
import CardNavigation from '../../components/CardNavigation'

const Home = () => {
   
  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-xl">Productos</h1>
        <div className="flex">
          {navData.card.map(({name, image, button, direction})=>(
            <CardNavigation name={name} image={image} button={button} direction={direction}/>
          ))}
        </div>
      </div>

      <div className="flex">
        <h1 className="flex ">Ofertas</h1>
        {data.products.map(({name, image, category})=>(
          <ProductCard name={name} image={image} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Home;
