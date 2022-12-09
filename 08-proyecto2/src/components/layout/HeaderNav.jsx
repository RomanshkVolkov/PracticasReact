import React from 'react';
import { NavLink } from 'react-router-dom';

export function HeaderNav() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./io.jpg" alt="Mi Foto" className="marco" />
        <h1>
          <span>J</span>ose <span>G</span>uzman
        </h1>
      </div>

      <nav className="navMenu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portafolio"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
