import React from "react";

export const Lista = (prop) => {

  return (
    
    <div className="contenedor-platos">
        <img
              className="imagen-desayuno"
              src={require(`../Img/Menu-${prop.imagenes}.jpg`)}
              alt="dasayuno"
            /> 
      <div className="texto-platos">
        <p className="origen-plato">
          {" "}
          <strong> {prop.nombre} </strong><br/>
           Oriundo:{prop.pais}
        </p>
        <p className="contenido-del-plato">{prop.contenido}</p>

        <div className='Boton-reserva'>
        <button className='btn btn-dark'>reservar</button></div>

      </div>
    </div>


    
  );
};
export default Lista;
