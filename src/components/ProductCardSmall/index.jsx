import React from 'react'
import { useHistory } from 'react-router-dom'

const ProductCardSmall = (props) => {
  const {name, image, price,} = props
  const history = useHistory();


  return (
    <div className="p-2 w-3/4 mx-auto lg:mx-10  lg:w-52">  
      <div className="rounded-md shadow-md">
        <div onClick={()=>history.push('/product/123')} className="cursor-pointer h-72 w-full bg-cover" style={{backgroundImage: `url(${image})`}}>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{name}</h3>
          <span className="text-gray-500 mt-2">S/.{price}</span>
        </div>
    </div>
    
   </div>
  )
}

export default ProductCardSmall
