import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="flex justify-end  bg-gray-400 p-1.5 items-center h-12">
           <a className="mr-10" href="/#"><i className="fas fa-phone-volume fa-2x text-white mr"></i>941476410</a>
            <a className="" href="/#"><i className="fab fa-instagram fa-2x text-white mr-1"></i></a>
            <a className="mr-2" href="/#"><i className="fab fa-facebook-square fa-2x text-white mr-10"></i></a>
            <button className="border-2 border-white mr-16 rounded-lg p-1"><i class="fas fa-female fa-2x mr-1 "></i>Entrar</button>
        </div>
        <div>
            <h1 className="flex justify-center bg-pink-200 h-16 items-center text-black text-3xl font-bold">Kriska Moda</h1>
        </div>
        <div className="flex justify-center  bg-pink-200 h-12">
            <a className="mx-8" href="/#">Incio</a>
            <a className="mx-8" href="/#">Vestidos</a>
            <a className="mx-8" href="/#">Tops</a>
            <a className="mx-8" href="/#">Palazos</a>
            <a className="mx-8" href="/#">Enterizos</a>
        </div>
    </div>
  )
}

export default Header
