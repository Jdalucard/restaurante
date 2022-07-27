import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>

 <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
   {/*  <a className="navbar-brand" href="/">Navbar w/ text</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <NavLink
                  to="/"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link activo " : "nav-link "
                  }
                >
                  Home Page
                </NavLink>
              </li>
      <li className="nav-item">
              <NavLink to='formulario' className={({isActive})=>(isActive ? 'nav-link activo' : 'nav-link')}>
              Formulario
            </NavLink>
                
              </li>
        <li className="nav-item">
                <NavLink
                  to="reservaciones"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? " nav-link activo" : 'nav-link'
                  }
                >
                  Reservaciones
                </NavLink>
              </li>
        <li className="nav-item">
              <NavLink to='blog' className={({isActive})=>(isActive ? 'nav-link activo'  : 'nav-link')}>
             Blog
            </NavLink>
              </li>
      </ul>
     {/*  <span className="navbar-text">
        Navbar text with an inline element
      </span> */}
    </div>
  </div>
</nav>


    </>
  );
};

export default Navbar;
