import React from 'react'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
      <div className="flex container my-12 mx-auto px-4 md:px-12 justify-between items-end">
          <div className="w-56">
          <img className="w-48 m-auto " src={Logo} alt="logo" />
              <p className="text-justify">La  mujer de hoy cada vez es más simple y directa. Es por ello que se Kriska ofrece una linea juvenil, ágil y moderna, ofreciendo productos de alta gama con identidad propia.</p>
           
          </div>
         <div className="">
        <ol>
          <li className="grid">
            <a href="/#"><i className="fas fa-arrow-right mr-4"></i>Registrate</a>
            <a href="/#"><i className="fas fa-arrow-right mr-4"></i>Contactanos</a>
            <a href="/#"><i className="fas fa-arrow-right mr-4"></i>Ayuda</a>
            <a href="/#"><i className="fas fa-arrow-right mr-4"></i>Cambios y devoluciones</a>
            <a href="/#"><i className="fas fa-arrow-right mr-4"></i>Terminos y condiciones</a>
          </li>
        </ol>
        </div>
        <div className="grid  ">
           <h3 className="font-bold">Déjanos tu Correo:</h3>
           <p>Recibiras promociones increíbles </p>
           <input className="h-10 border-black border-2" placeholder="Correo:"></input>
           <button className="bg-black text-white mt-2 w-40"type="submit">Enviar</button>
        </div>
        </div>
<p className="text-gray-400 text-center mt-2">© 2021 KRISKA | Todos los derechos reservados. diseñado por <a className="hover:underline"href="/#">Maphack.pe</a></p>
    
    </div>
  )
  
}

export default Footer
