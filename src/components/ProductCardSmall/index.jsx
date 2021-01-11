import React from 'react'

const ProductCardSmall = (props) => {
  const {name, image, category, price,} = props
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="overflow-hidden rounded-lg shadow-lg">

       <a href="/#">
         <img alt={name} className="block h-72 w-64" src={image}/>
       </a>

     <div className="flex items-center justify-between leading-tight p-2 md:p-4">
         <h1 className="text-lg">
             <a className="no-underline hover:underline text-black" href="/#">
                 {name}
             </a>
         </h1>
     </div>

     <div className="grid items-center justify-between leading-none p-2 md:p-4">
         <a className="flex items-center no-underline hover:underline text-black" href="/#">
             <p className="ml-2 text-sm">{category}</p>
         </a>
      
         <span>S/. {price}</span>
     </div>

   </div>
    
  </div>
  )
}

export default ProductCardSmall
