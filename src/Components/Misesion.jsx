import React from 'react'
import { app } from "../firebase/Firebase";
import { getAuth, signOut } from "firebase/auth";

export const auth = getAuth(app);
const Misesion = () => {
    
  return (
    <div>

 <h4>Hola, iniciastes sesion</h4>
  
  <button className="btn btn-primary btn-danger" onClick={()=>signOut(auth)}>Cerrar sesion </button>


    </div>
  )
}

export default Misesion