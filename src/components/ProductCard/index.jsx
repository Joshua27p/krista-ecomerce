import React from 'react'

function ProductCard(props) {
  const { name, category, image } = props
  return (
   <div className="container my-12 mx-auto px-4 md:px-12">
     <div class="overflow-hidden rounded-lg shadow-lg">

        <a href="/#">
          <img alt={name} className="block h-auto w-full" src={image}/>
        </a>

      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="/#">
                  {name}
              </a>
          </h1>
      </div>

      <div className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black" href="/#">
              <p className="ml-2 text-sm">
                 {category}
              </p>
          </a>
          <a className="no-underline" href="/#">
              <span className="hidden">Like</span>
              <i className="fa fa-heart hover:text-red-500"></i>
          </a>
      </div>

    </div>
     
   </div>
     )
}

export default ProductCard
