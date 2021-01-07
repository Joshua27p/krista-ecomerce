import React from 'react'

function CardNavigation(props) {
  const {name, image, button, direction} = props;
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div class="relative mb-6">
        <img  className="relative mb-6" src={image} alt={name} />
       <div className={`text-${direction} absolute w-full top-3 ${direction}-4`}>
        <div className="">
          <p className="text-black uppercase text-lg font-bold">{name}</p>
          <button className="text-gray-400 text-sm">{button}</button>
        </div>
       </div>
      </div>

    </div>
  )
}

export default CardNavigation;
