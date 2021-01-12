import React from 'react'
import imagenPrueba from '../../assets/images/enterizo_1.jpg'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ProductDetail = () => {
  return (
    <div>
       <main className="my-8">
        <div className="flex container mx-auto px-6 justify-center">
            <div className="md:flex md:items-center">
              <div className="grid">
                <img className="w-20 mb-6 mr-10" src={imagenPrueba} alt="imagen de prueba"/>
                <img className="w-20 mb-6 mr-10" src={imagenPrueba} alt="imagen de prueba"/>
                <img className="w-20 mb-6 mr-10" src={imagenPrueba} alt="imagen de prueba"/>

              </div>
                <div className="w-full h-64 md:w-96 lg:h-96 ">
                 <InnerImageZoom src={imagenPrueba} zoomSrc={imagenPrueba} className="h-auto w-full rounded-md object-cover max-w-lg mx-auto" />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">Vestido kriska </h3>
                    <span className="text-gray-500 mt-3 text-green-700 font-bold">s/.75.00</span>
                   
                    <div className="mt-2">
                        <label className="text-gray-700 text-sm" for="count">Cantidad</label>
                        <div className="flex items-center mt-1">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 text-lg mx-2">20</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">Tallas disponibles: "s" y "m"</label>
                         
                    </div>
                    <div className="flex items-center mt-6">
                        <button className="px-8 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-700 focus:outline-none focus:bg-indigo-500">Comprar ahora</button>
                        <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                      
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </main>
    </div>
  )
}

export default ProductDetail;
 