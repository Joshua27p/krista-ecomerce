import React from 'react'
import { useHistory } from 'react-router-dom'

const NavbarHidden = () => {
  const history = useHistory();

  return (
    <div className="hidden lg:flex lg:flex-row justify-center">
    {/* contenedor del menu */}
      <button onClick={()=>history.push('/')}
      className=" hover:text-white hover:bg-red-300 rounded-xl p-2 block  md:mx-8 mb-2" >
        Incio
      </button>
      <button onClick={()=>history.push('/catalogue', {product: 'dress'})} 
      className="block p-2  mb-2 md:mx-8 hover:text-white hover:bg-red-300 rounded-xl">
        Vestidos
      </button>
      <button onClick={()=>history.push('/catalogue', {product: 'top'})}
        className="hover:text-white hover:bg-red-300 rounded-xl p-2 block  mb-2 md:mx-8" >Tops</button>
      <button className="p-2  hover:text-white hover:bg-red-300 rounded-xl block  mb-2 md:mx-8" >Palazos</button>
      <button className="p-2 hover:text-white hover:bg-red-300 rounded-xl block  mb-2 md:mx-8" >Enterizos</button>
     
    </div>
  )
}

export default NavbarHidden
