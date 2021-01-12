import React from 'react'
import Logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory();
  return (
    <div className="container">
        <div className=" flex justify-end  bg-red-200  items-center  mx-auto">
          
          <a className="" href="/#">
            <i className="fab fa-instagram fa-2x  text-white mr-1"></i>
          </a>
          <a className="mr-2" href="/#">
            <i className="fab fa-facebook-square fa-2x  text-white mr-10">
            </i>
          </a>
          <button className=" mr-16 rounded-lg">
            <i className="far fa-user-circle fa-2x mr-1  py-2  text-white"></i>
            <span className="text-gray-500 font-bold ml-2">Entrar</span>
          </button>
        </div>
      <div>
        <img src={Logo} className="w-40 m-auto mt-2" alt="logo kriska" />
      </div>

 
        <div className="md:flex justify-center  font-bold  text-pink-400 h-12">
            <button onClick={()=> history.push("/")} className="block text-center md:mx-8 mb-2" >Incio</button>
            <button className="block  mb-2 md:mx-8" >Vestidos</button>
            <button className="block  mb-2 md:mx-8" >Tops</button>
            <button className="block  mb-2 md:mx-8" >Palazos</button>
            <button className="block  mb-2 md:mx-8" >Enterizos</button>
        </div>
    </div>
  )
}

export default Header
