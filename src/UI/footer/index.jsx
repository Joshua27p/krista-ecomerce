import React from 'react'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="container mt-52 p-5 text-white bg-black">
        <div className="mx-10  block md:flex md:justify-center md:items-end">
          <div className="w-56 mb-5 md:mr-32">
          <img className="w-48  md:m-auto " src={Logo} alt="logo" />
              <p className="text-justify">La  mujer de hoy cada vez es más simple y directa. Es por ello que se Kriska ofrece una linea juvenil, ágil y moderna, ofreciendo productos de alta gama con identidad propia.</p>
           
          </div>
         <div className="md:mr-32 mb-5">
        <ol>
          <li className="grid">
            <a className="hover:text-yellow-400 ease-in duration-100" href="/#"><i className="fas fa-arrow-right mr-4"></i>Contactanos</a>
            <a className="hover:text-yellow-400 ease-in duration-100" href="/#"><i className="fas fa-arrow-right mr-4"></i>Registrate</a>
            <a className="hover:text-yellow-400 ease-in duration-100" href="/#"><i className="fas fa-arrow-right mr-4"></i>Ayuda</a>
            <a className="hover:text-yellow-400 ease-in duration-100" href="/#"><i className="fas fa-arrow-right mr-4"></i>Cambios y devoluciones</a>
            <a className="hover:text-yellow-400 ease-in duration-100" href="/#"><i className="fas fa-arrow-right mr-4"></i>Terminos y condiciones</a>
          </li>
        </ol>
        </div>
        <div className="grid  ">
           <h3 className="font-bold">Déjanos tu Correo:</h3>
           <p>Recibiras promociones increíbles </p>
           <input className="h-10 border-black border-2" placeholder="Correo:"></input>
           <button className="bg-gray-900 py-1 hover:bg-gray-500  ease-in duration-100 md:mx-auto text-white mt-2 w-40"type="submit">Enviar</button>
        </div>
        </div>
      <p className="text-gray-400 text-center mt-5">© 2021 KRISKA | Todos los derechos reservados. diseñado por <a className="hover:underline hover:text-yellow-400"href="/#">Maphack.pe</a></p>
    
    </div>
  )
  
}

export default Footer
