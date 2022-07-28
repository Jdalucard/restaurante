import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
 
} from "react-router-dom";

import Homepage  from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import ReservacionesPage from "../Pages/ReservacionesPage";
import Navbar from "../Components/Nav";
import BlogPage from "../Pages/BlogPage";
import ReservacionPage from "../Pages/ReservacionPage";

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
          <Route path="/menu" element={<MenuPage
                
                nombre='Desayuno Americano'
                pais='Estados Unidos de America'
                imagen='camarones'
                contenido= 'Está compuesto por huevos, ya sean fritos o revueltos, bacon y tortitas americanas. Como bebida, suele optarse por el café o zumos de frutas y en ocasiones, en  complementa con patatas frita'

           


          />} />
          <Route
            path="/blog"
            element={
              <BlogPage
                    
        
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
