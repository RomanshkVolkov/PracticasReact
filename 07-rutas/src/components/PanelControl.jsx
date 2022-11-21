import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
    return (
        <div>
            <h1>Panel de control</h1>
            <p>Esta es la pagina de panel de control</p>
            <p>Elige una opcion</p>

            <nav>
                <ul>
                    <li><NavLink to="/panel/" className={({ isActive }) => isActive ? "active" : ""} >Inicio</NavLink></li>
                    <li><NavLink to="/panel/crear-articulos" className={({ isActive }) => isActive ? "active" : ""} >Crear articulos</NavLink></li>
                    <li><NavLink to="/panel/gestion-usuarios" className={({ isActive }) => isActive ? "active" : ""} >Gestion de usuarios</NavLink></li>
                    <li><NavLink to="/panel/acerca-de" className={({ isActive }) => isActive ? "active" : ""} >Acerca de</NavLink></li>
                </ul>
            </nav>

            <div>
                {/* Aqui se mostrara el contenido de cada ruta */}
                <Outlet />
            </div>
        </div>
    )
}
