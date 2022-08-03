import React from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink to={`/reservaciones/`}><button className='btn btn-dark'>reservar</button></NavLink>
            
            </div>
         </div>
    </div>

    
  );
};
export default Lista;
