import React from 'react'

function CardNavigation(props) {
  const {name, image, button, direction} = props;
  return (
    <div className="flex justify-center items-center relative w-full p-4">
      <img  className="w-full h-full relative" src={image} alt={name} />
      <div className={` p-2text-${direction}  absolute text-center w-auto top-10 ${direction}-9`}>
          <p className="text-pink-400 uppercase font-bold">{name}</p>
          <button className="text-black-400 p-1 w-44 bg-white text-sm border-2  text-black hover:bg-black hover:text-white font-sans">{button}</button>   
      </div>
    </div>
  )
}

export default CardNavigation;
