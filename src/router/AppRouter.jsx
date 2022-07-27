import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes, } from "react-router-dom";

import Homepage from "../Pages/HomePage";
import FormularioPage from '../Pages/FormularioPage'
import ReservacionesPage from "../Pages/ReservacionesPage";
import Navbar from '../Components/Nav' 
import BlogPage from "../Pages/BlogPage";
import ReservacionPage from "../Pages/ReservacionPage";

export const AppRutas = () => {
  return (
  
    <Router>
     <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/formulario" element={<FormularioPage/>} />
          <Route path='/reservaciones' element={<ReservacionesPage />} />
          <Route path="/reservacion/:id_reserva" element={<ReservacionPage />} />
       
          <Route path="/blog" element={<BlogPage 
          articulos={['articulo1','articulo2', 'articulo3']} nombre='Jose' />} />


      <Route path="*" element={< Navigate to='/Nofound'/>} />

        </Routes>
      </Router>
 
  );
};

export default AppRutas;