import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
 
} from "react-router-dom";

import Homepage  from "../Pages/HomePage";
import ReservacionesPage from "../Pages/ReservacionesPage";
import Navbar from "../Components/Nav";
import BlogPage from "../Pages/BlogPage";
import ReservacionPage from "../Pages/ReservacionPage";
import  MenuLista  from "../Components/MenuLista";

export const AppRutas = () => {
  return (
    
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
       
            <Route path="/" element={<Homepage  />} />
            <Route path="/reservaciones" element={<ReservacionesPage />} />
   
          <Route
              path="/reservacion/:id_reserva"
              element={<ReservacionPage />}
            />
          <Route path="/Menulista" element={<MenuLista 
        
          />} />
          <Route
            path="/blog"
            element={
              <BlogPage
              articulos={['articulo1','articulo2','articulo3']}
        
              />
            }
          />

          <Route path="*" element={<Navigate to="/Nofound" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRutas;
