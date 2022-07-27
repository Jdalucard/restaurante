import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
<>
        <ul>
          <li>
            <NavLink to='/' 
            className={({isActive}) => (isActive ? 'activo' : undefined)}>
              Home Page
            </NavLink>
            </li>
        </ul>
        <ul>
          <li>
            <NavLink to='reservaciones' className={({isActive})=>(isActive ? 'activo' : undefined)}>
            Reservaciones
            </NavLink>
          </li>
        </ul>
            <ul>
          <li>
            <NavLink to='formulario' className={({isActive})=>(isActive ? 'activo' : undefined)}>
              Formulario
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to='blog' className={({isActive})=>(isActive ? 'activo' : undefined)}>
             Blog
            </NavLink>
          </li>
        </ul>

        </>
  )}

export default Navbar
