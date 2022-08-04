import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/Firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const [estadoRegistrados, setRegistrados] = useState(false);

  async function submiHandler(evento) {
    evento.preventDefault();
    const correo = evento.target.formBasicEmail.value;
    const contra = evento.target.formBasicPassword.value;
    if (estadoRegistrados) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
      console.log(usuario);
    } else {
      //si esta Iniciando seccion
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }
  return (
    <div className="container-sm mt-5  text-center">
      <form onSubmit={submiHandler}>
        <div className="text-center ">
          <h1>{estadoRegistrados ? "Registrate" : "Iniciar Sesión"}</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="formBasicEmail"
            aria-describedby="emailHelp"
            placeholder="Correo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="formBasicPassword"
            placeholder="Min 6 caracteres"
            autoComplete="off"
          />
        </div>

        <button type="submit" className="btn btn-dark">
          {estadoRegistrados ? "Registrate" : "Iniciar sesión"}
        </button>

        <div className=" mt-3">
          <button
            type="submit"
            className="btn btn-primary m-3"
            style={{ width: "300px" }}
            onClick={() => signInWithRedirect(auth, googleProvider)}
          >
            Acceder con google
          </button>

          <button
            type="submit"
            className="btn btn-dark"
            style={{ width: "400px" }}
            onClick={() => setRegistrados(!estadoRegistrados)}
          >
            {estadoRegistrados
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Registrate"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
