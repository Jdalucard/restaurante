import React, {useState}  from "react";
import AppRouter from './router/AppRouter'
import {app} from './firebase/Firebase'
import { getAuth,onAuthStateChanged} from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/estilos.css";
/* import Homepage from "./Pages/HomePage"; */
import LoginPage from "./Pages/LoginPage"


export const auth = getAuth(app);

const App = () => {
 const [usuarioGlobal,setUsuarioGlobal] = useState(null); 

 onAuthStateChanged(auth,(usuarioFirebase)=>{
  if(usuarioFirebase){
    //codigo de la sesion Iniciada
   setUsuarioGlobal(usuarioFirebase);
  }else{
    //en caso de que no inicia sesion
    setUsuarioGlobal(null);
  }
 });

  return(
<>

{usuarioGlobal ? <AppRouter correoUsuario={usuarioGlobal.email}/>: <LoginPage/>} 


</>
  ) 
};

export default App;
