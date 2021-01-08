import React from 'react'
import Logo from '../../assets/images/logo.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory();
  return (
    <div>
        <div className="flex justify-end  bg-red-200 p-1.5 items-center h-12">
          
          <a className="" href="/#">
            <i className="fab fa-instagram fa-2x  text-white mr-1"></i>
          </a>
          <a className="mr-2" href="/#">
            <i className="fab fa-facebook-square fa-2x  text-white mr-10">
            </i>
          </a>
          <button className=" mr-16 rounded-lg p-1">
            <i className="far fa-user-circle fa-2x mr-1  text-white"></i>
            <span className="mx-1 text-gray-500 font-bold ">Entrar</span>
          </button>
        </div>
      <div>
        <img src={Logo} className="w-40 m-auto mt-2" alt="logo kriska" />
      </div>

 
        <div className="flex justify-center  font-bold  text-pink-400 h-12">
            <button onClick={()=> history.push("/")} className="mx-8" >Incio</button>
            <button className="mx-8" >Vestidos</button>
            <button className="mx-8" >Tops</button>
            <button className="mx-8" >Palazos</button>
            <button className="mx-8" >Enterizos</button>
        </div>
    </div>
  )
}

export default Header
