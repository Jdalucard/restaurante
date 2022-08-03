import React, { useState } from "react";
import { db } from "../firebase/Firebase";
import { collection, addDoc, getDocs,deleteDoc,doc,updateDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";

const initalForm = {
  nombre: "",
  apellido: "",
  email:"",
  telefono: "",
  fecha: "",
  number: "",
};

const ReservacionesPage = () => {
  const [registro, setregistro] = useState({ initalForm });
  const [Mostrar, setMostrar] = useState([]);

  const crearRegistro = async () => {
    const coleccion = collection(db, "registros");
    await addDoc(coleccion, registro);
  };

  const ObtenerRegistro = async () => {
    const resp = await getDocs(collection(db, "registros"));
    const registrosUnicos = resp.docs.map((datos) => ({
      id: datos.id,
      ...datos.data(),
    }));
    setMostrar(registrosUnicos);
  };

  const eliminarRegistros= async (id) => {
    const coleccion= doc(db, "registros",id)
    await deleteDoc(coleccion)
    await ObtenerRegistro()
  }

  const actualizarRegistros= async (id) => {
    const coleccion= doc(db, "registros", id)
    await updateDoc(coleccion, registro)
    await ObtenerRegistro();
  }
  return (
    <>
      <div className="container mt-5  text-center">
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
              type="email"
                 id="email"
                name="email"
                pattern=".+@[mM][aA][iI][lL][fF][oO][rR][aA][lL][lL][.][cC][oO]"
                placeholder="Correo"
                autoComplete="off"
                className="form-control"
                value={registro.email}
                onChange={(event)=>{
                  setregistro({...registro, email: event.target.value});
                }}   
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
                  setregistro({ ...registro, number: event.target.value });
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
        
          <button
            type="button"
            className="btn btn-success btn-lg  "
            onClick={crearRegistro}
          >
            Crear registro
          </button>

          <button
            type="button"
            className="btn btn-dark btn-lg ms-5 "
            onClick={ObtenerRegistro}
          >
            Obtener registro
          </button>
        </article>
      </section>

      <section className="mt-3">
        <article>
        <div className='table-responsive'>
          <table className="table table-hover">
            <thead >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Fecha</th>
                <th scope="col">Numero</th>
                <th scope="col">Ver Mas</th>
                <th scope="col">Actualizar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {Mostrar.map((element) => {
                return (
                    <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.nombre}</td>
                    <td>{element.apellido}</td>
                    <td>{element.email}</td>
                    <td>{element.telefono}</td>
                    <td>{element.fecha}</td>
                    <td>{element.number}</td>
                 
                    <td><NavLink to={`/reservacion/${element.id}`}> <button  type='button'className='btn btn-info btn-sm"'>Mas...</button></NavLink></td>
                    <td><button type="button" className="btn btn-warning  btn-sm" onClick={()=>actualizarRegistros(element.id)}>Actualizar</button></td>
                    <td><button type="button" className="btn btn-danger  btn-sm" onClick={()=>eliminarRegistros(element.id)}>Eliminar</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
       </div>
        </article>
      </section>
      </div>
    </>
  );
};

export default ReservacionesPage;
