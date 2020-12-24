import React from 'react'
import Slider from '../../UI/Banner'
import { SliderData } from '../../UI/Banner/SliderData'

const Home = () => {
  return (
    <div>
     <Slider  slides={SliderData}/>
     
    </div>
  )
}

export default Home;
