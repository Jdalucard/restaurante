import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";

export const ReservacionPage = () => {
  const [registro, setregistro] = useState({});
  const { idRegistro } = useParams();

  useEffect(() => {
    const ObtenerRegistro = async () => {
      const resp = await getDoc(doc(db, "registros", idRegistro));
      console.log(resp)
      setregistro({
        id: resp.id,
        ...resp.data(),
      });
    };
    ObtenerRegistro();
  },[idRegistro]);

  return (
    <>

<div className="container mt-5  text-center">
      <header>
        <h1>Pagina individual de los registros </h1>
      </header>
      <main>
        <article>
                    <p>{registro.nombre}</p>
                    <p>{registro.apellido}</p>
                    <p>{registro.email}</p>
                    <p>{registro.telefono}</p>
                    <p>{registro.fecha}</p>
                    <p>{registro.number}</p>
        </article>
      </main>
      </div>
    </>
  );
};
export default ReservacionPage;
