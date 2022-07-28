import React from "react";

const Lista = (prop) => {
  console.log(prop)
  return (
    <div className="contenedor-platos">
       <img
              className="
.imagen-desayuno"
              src={require(`../Img/Menu-${prop.imagen}.jpg`)}
              alt="logo"
            />
      <div className="texto-platos">
        <p className="origen-plato">
          {" "}
          <strong> {prop.nombre} </strong>en {prop.pais}
        </p>
        <p className="contenido-del-plato">{prop.contenido}</p>
      </div>
    </div>
  );
};
export default Lista;
