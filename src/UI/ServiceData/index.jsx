import React from 'react'

const ServiceData = () => {
  return (
 
          <div className="flex flex-wrap container my-16 mx-auto mb-32 px-4 md:px-12">
          <div className="md:flex mr-4 w-52 flex-grow">
            <i className="fas fa-shipping-fast fa-2x mr-4 text-gray-400 mt-3"></i>
            <div>
              <h3 className="font-bold">Entrega Puntual</h3>
              <p className="text-justify">Contamos con entregas a nivel nacional hasta la puerta de tu hogar con la confianza que ofrece nuestro courier</p>
            </div>
          </div>
          <div className="md:flex mr-4 w-52 flex-grow" >
            <i className="fas fa-heartbeat fa-2x mr-4 text-gray-400 mt-3"></i>
            <div>
              <h3 className="font-bold">Alta Calidad</h3>
              <p className="text-justify">Llevamos más de 20 años entregando productos de primera calidad, con la mejor selección de telas para nuestras prendas</p>
            </div>
          </div>
          <div className="md:flex w-52 flex-grow">
          <i className="fas fa-money-check-alt fa-2x mr-4 text-gray-400 mt-3"></i>
            <div>
              <h3 className="font-bold">Compra 100% Segura</h3>
              <p className="text-justify"> Podras comprar con total tranquilidad y confianza, nuestro sistema de pagos es el más seguro de todos</p>
            </div>
          </div>
        </div>
 
  )
}

export default ServiceData
