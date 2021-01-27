import React from 'react'

const ImageSmall = (props) => {
  const {image, setImagePrincipal} = props
 
  return (
    <div  className="bg-cover mb-2 mx-1 shadow-lg" 
    onClick={()=>setImagePrincipal(image)}>
      <img  src={image} alt="Imagen pequeña" className="rounded-md h-full w-full cursor-pointer " />
    </div>
  )
}

export default ImageSmall
