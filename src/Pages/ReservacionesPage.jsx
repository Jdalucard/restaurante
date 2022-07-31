import React, { useState } from "react";
import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

const initalForm = {
  nombre: "",
  apellido: "",
  telefono: "",
  correo: "",
  fecha: "",
  number: "",
};

const ReservacionesPage = () => {
  const [registro, setregistro] = useState({ initalForm });

  const crearRegistro = async () => {
    const coleccion = collection(db, "registros");
    await addDoc(coleccion, registro);
  };

  return (
    <>
      <header className="header text-center">
        <h1>Realiza tus reservaciones Aqui </h1>
      </header>
      <main>
        <article>
          <form>
            <div className="mb-3 text-start">
              <strong>
                <label htmlFor="nombre">Nombre</label>
              </strong>
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Nombre"
                autoComplete="off"
                className="form-control"
                value={registro.nombre}
                onChange={(event) => {
                  setregistro({ ...registro, nombre: event.target.value });
                }}
                required
              ></input>
            </div>
            <div className="mb-3 text-start">
              <strong>
                {" "}
                <label htmlFor="apellido">Apellido</label>
              </strong>
              <input
                id="apellido"
                type="text"
                name="apellido"
                placeholder=" Apellido"
                autoComplete="off"
                className="form-control"
                value={registro.apellido}
                onChange={(event) => {
                  setregistro({ ...registro, apellido: event.target.value });
                }}
                required
              ></input>
            </div>
            <div className="mb-3 text-start">
              <strong>
                <label htmlFor="email">Correo</label>
              </strong>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" Correo"
                autoComplete="off"
                className="form-control"
                required
              ></input>
            </div>
            <div className="mb-3 text-start ">
              <strong>
                {" "}
                <label htmlFor="telefono">Teléfono</label>
              </strong>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                placeholder=" Teléfono"
                autoComplete="off"
                className="form-control"
                value={registro.telefono}
                onChange={(event) => {
                  setregistro({ ...registro, telefono: event.target.value });
                }}
                required
              ></input>
            </div>
            <div className="mb-3 text-start">
              <strong>
                <label htmlFor="fecha">Fecha</label>
              </strong>
              <input
                id="fecha"
                type="date"
                name="fecha"
                min="2022-01-01"
                max="2022-12-31"
                placeholder=" fecha"
                autoComplete="off"
                className="form-control"
                value={registro.fecha}
                onChange={(event) => {
                  setregistro({ ...registro, fecha: event.target.value });
                }}
                required
              ></input>
            </div>
            <div className="mb-3 text-start">
              <strong>
                <label htmlFor="number">Numero personas a reservar</label>
              </strong>
              <input
                id="number"
                type="number"
                name="number"
                placeholder="Personas a reservar "
                value={registro.number}
                onChange={(event) => {
                  setregistro({ ...registro, fecha: event.target.value });
                }}
                autoComplete="off"
                className="form-control"
                required
              ></input>
            </div>
          </form>
        </article>
      </main>

      <section>
        <article>
          <button type="button" className="btn btn-dark btn-lg ">
            Obtener registro
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg ms-5 "
            onClick={crearRegistro}
          >
            Crear registro
          </button>
        </article>
      </section>
    </>
  );
};

export default ReservacionesPage;
