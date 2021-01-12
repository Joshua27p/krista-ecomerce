import React from 'react'
import { useHistory } from 'react-router-dom'

const ProductCardSmall = (props) => {
  const {name, image, price,} = props
  const history = useHistory();


  return (
    <div>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div onClick={()=>history.push('/product/123')} className="cursor-pointer flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: `url(${image})`}}>
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
