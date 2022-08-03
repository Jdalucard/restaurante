import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import Homepage from "../Pages/HomePage";
import ReservacionesPage from "../Pages/ReservacionesPage";
import Navbar from "../Components/Nav";
import Misesion from "../Components/Misesion";
import ReservacionPage from "../Pages/ReservacionPage";
import MenuLista from "../Components/MenuLista";
import LoginPage from "../Pages/LoginPage";

export const AppRutas = () => {
  return (
    <Router>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservaciones" element={<ReservacionesPage />} />

          <Route
            path="/reservacion/:idRegistro"
            element={<ReservacionPage />}
          />

          <Route path="/Menulista" element={<MenuLista />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/Misesion" element={<Misesion/>}/>

          <Route path="*" element={<Navigate to="/Nofound" />} />
        </Routes>
   
    </Router>
  );
};

export default AppRutas;
