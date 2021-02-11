import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'
import ToggleShoppingCart from '../../components/Buttons/ToggleShoppingCart';
import Navbar from '../../components/Navbar';
import NavbarHidden from '../../components/Navbar/NavbarHidden';


const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false)
  const [isShopping ,setIsShopping] = useState(false)  

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const toggleShopButton  = () => {
    setIsShopping(!isShopping)
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
          <svg className="h-6 w-6 fill-current z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
       
          {!isOpen && (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          )}
          </svg>
        </button>
        {/* componente button toggle para el shopping cart */}
        <ToggleShoppingCart  isShopping={isShopping}  toggleShopButton={toggleShopButton} />
        {/* logo kriska  */}
        <img onClick={()=>history.push("/")} 
           src={Logo} className="w-40 mx-auto mt-2 cursor-pointer" alt="logo kriska" />
        <div className="relative w-auto z-100">
          {/* boton shoppingcart */}
          <button onClick={toggleShopButton} type="button" 
            className="transition duration-500 ease-in-out cursor-pointer transform hover:scale-125 text-red-400 mr-3 overflow-hidden border-0 rounded-xl hover:bg-red-200 hover:text-white border-red-500 w-10 p-2">
            <svg viewBox="-35 0 512 512.00102"   xmlns="http://www.w3.org/2000/svg"><path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/></svg>
          </button>
          <div className="hidden justify-center items-center absolute rounded-full w-6 h-6 text-md   bg-red-300 text-gray-100 border-black border-2 top-0 right-0">
            20
          </div>
        </div>
      </div>
      {/* menu desplegable en mobile */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick}  />
      {/* el navbar para desktop */}
      <NavbarHidden />
     
    </div>
  )
}

export default Header

