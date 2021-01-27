import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
 
  

  return (
    <div className="mb-3">
      <div className=" flex justify-end  bg-red-200  items-center  mx-auto">
        <a className="" href="/#">
          <i className="fab fa-instagram fa-2x  text-white mr-1"></i>
        </a>
        <a className="mr-2" href="/#">
          <i className="fab fa-facebook-square fa-2x  text-white mr-10"></i>
        </a>
        <button className=" mr-16 rounded-lg">
         <i className="far fa-user-circle fa-2x mr-1  py-2  text-white"></i>
         <span className="text-gray-500 font-bold ml-2">Entrar</span>
        </button>
      </div>
      <div className="flex  items-center">
        {/* HAMBURGER BUTTON */}
        <button  type="button" className="lg:hidden" onClick={handleClick}>
          <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          {isOpen && (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          )}
          {!isOpen && (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          )}
           </svg>
        </button>
        <img onClick={()=>history.push("/")} src={Logo} className="w-40 mx-auto mt-2 cursor-pointer" alt="logo kriska" />
        <div className="relative w-auto">
          <svg className="transition duration-500 ease-in-out cursor-pointer transform hover:scale-125 text-red-400 mr-3 overflow-hidden border-0 rounded-xl hover:bg-red-200 hover:text-white border-red-500 w-10 p-2"   viewBox="-35 0 512 512.00102"   xmlns="http://www.w3.org/2000/svg"><path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/></svg> 
          <div className="hidden justify-center items-center absolute rounded-full w-6 h-6 text-md   bg-red-300 text-gray-100 border-black border-2 top-0 right-0">20
          </div>
        </div>
      </div>
      <div className={` text-gray-600 font-bold bg-red-200 z-40 w-40 fixed top-20 left-6 rounded-lg shadow-lg md:flex
      ${ isOpen
       ? "bliock"
       : "hidden" }`}>
      <div>
          {/* menu title */}
          <h3 className="p-1 text-center hover:text-white w-full border-black border-b-2">Menu</h3>
          {/* contenedor del menu */}
          <div className="flex flex-col md:flex-row">
          <button onClick={()=> history.push('/')} className=" hover:text-white p-1 block  md:mx-8 mb-2" >
            Incio
          </button>
          <button onClick={()=> history.push('/catalogue', {product: 'dress'} )} className="block p-1  mb-2 md:mx-8 hover:text-white">
              Vestidos
          </button>
          <button onClick={()=> history.push('/catalogue', {product: 'top'} )} className="hover:text p-1 -white block  mb-2 md:mx-8" >Tops</button>
          <button className="p-1  hover:text-white block  mb-2 md:mx-8" >Palazos</button>
          <button className="p-1 hover:text-white block  mb-2 md:mx-8" >Enterizos</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Header
