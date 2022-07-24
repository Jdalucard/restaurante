import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../Pages/HomePage";
import FormularioPage from '../Pages/FormularioPage'
import ReservacionesPage from "../Pages/ReservacionesPage";


export const AppRutas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/formulario" element={<FormularioPage/>} />
          <Route path="/reservaciones" element={<ReservacionesPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRutas;