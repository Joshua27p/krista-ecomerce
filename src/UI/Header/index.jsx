import React from 'react'

const Header = () => {
  return (
    <div className="text-black  bg-pink-100 body-font shadow w-full">
      
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
                className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0 lg:justify-start" href="/#">
            
                <span className="ml-3 text-xl">Kriska Pink Street</span>
            </a>
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto lg:justify-end">
                <a
                    className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600" href="/#">Inicio</a>
                <a
                    className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600" href="/#">Tienda</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600" href="/#">Nosotros</a>
                <a
                    className="hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600" href="/#">Mi Cuenta</a>
            </nav>
             
        </div>
    </div>
  )
}

export default Header
