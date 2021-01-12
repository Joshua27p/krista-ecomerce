import React from 'react'

const ImageSmall = (props) => {
  const {image, setImagePrincipal} = props
 
  return (
    <div  className="w-20 h-24 mb-2  mr-10" onClick={()=>setImagePrincipal(image)}>
      <img  src={image} alt="Imagen pequeña" className="h-full w-full cursor-pointer" />
    </div>
  )
}

export default ImageSmall
