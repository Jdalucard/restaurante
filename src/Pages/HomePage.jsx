import React from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
    
      <div>
        <div className="ImagenPrincipal container-fluid">
          <div className="Boton-Home">
            <NavLink to={"/Menulista"}>
              <button type="button" className="btn btn-dark btn-lg mb-2">
                Busca en nuestro Menu
              </button>
            </NavLink>
          </div>
        </div>

        {/* Sobre nosotros */}
        <div className="container-lg">
          <div className="container-sm containerReserva ">
            <h2>Reserva con nosotros</h2>

            <p>
              A partir de tu contacto, nos comunicaremos contigo para revisar
              fechas y disponibilidad de horarios.
            </p>

            <p> Colombia Ciudad Medellin Robledo , Co 12345</p>
            <p>Telefono: 3023315485 </p>

            <p>Email: Mirestaurante@miempresa.com </p>

            <p>
              {" "}
              Jose martinez 20200. Todos los derechos reservados. Esta es una
              aplicación ficticia para fines académicos.
            </p>
          </div>

          {/* fromulario de contacto */}
          <div className="containerFormulario ">
            <form className="form-horizontal">
              <h1>Contactanos</h1>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Escribe tu correo "
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Dejanos tu mensaje
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
                <button type="submit" class="btn btn-dark btnForm mt-4 ">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
