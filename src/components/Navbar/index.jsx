import React from 'react'
import { useHistory } from 'react-router-dom'


const Navbar = ({isOpen, setIsOpen, handleClick}) => {
  const history = useHistory();

  return (
       <div className={`transition duration-700 z-40 w-auto inset-0 absolute bg-red-200 my-12 bg-opacity-95
        ${ !isOpen 
        ? "transform -translate-x-full"
        : "transform translate-x-0"
        }`}>
        <div>
          <button onClick={handleClick}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen && (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            )}
           </svg>
          </button>
          {/* contenedor del menu */}
          <div className="flex flex-col md:flex-row ">
            <button onClick={()=>{
              history.push('/');
              setIsOpen(false);
            }} className=" hover:text-white p-1 block  md:mx-8 mb-2" >
              Incio
            </button>
            <button onClick={()=> {
              history.push('/catalogue', {product: 'dress'});
              setIsOpen(false)
            }} className="block p-1  mb-2 md:mx-8 hover:text-white">
                Vestidos
            </button>
            <button onClick={()=>{
              history.push('/catalogue', {product: 'top'});
              setIsOpen(false);
            }} className="hover:text p-1 -white block  mb-2 md:mx-8" >Tops</button>
            <button onClick={()=>setIsOpen(false)} className="p-1  hover:text-white block  mb-2 md:mx-8" >Palazos</button>
            <button onClick={()=>setIsOpen(false)} className="p-1 hover:text-white block  mb-2 md:mx-8" >Enterizos</button>
          </div>
        </div>
      </div>
  )
}

export default Navbar
