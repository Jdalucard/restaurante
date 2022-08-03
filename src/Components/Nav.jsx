import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="Contenedor del logo ">
            {" "}
            <img
              className="logo"
              src={require("../Img/LogoTwo.png")}
              alt="logo"
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
                <NavLink
                  to="/"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active " : "nav-link "
                  }
                >
                  HomePage
                </NavLink>
              </li> 
              <li className="nav-item">
                <NavLink
                  to="Menulista"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="reservaciones"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? " nav-link active" : "nav-link"
                  }
                >
                  Reservaciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Login
                </NavLink>
              </li>
            
            </ul>
            <span className="navbar-text">
              <h3>Un mundo de Sabores</h3>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
