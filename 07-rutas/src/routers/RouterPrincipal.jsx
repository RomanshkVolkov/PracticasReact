import React from 'react'
import { Routes, Route, Link, BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import { Persona } from '../components/Persona'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Inicio } from '../components/Inicio'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/panel/Inicio'
import { Acerca } from '../components/panel/Acerca'
import { Gestion } from '../components/panel/Gestion'
import { Crear } from '../components/panel/Crear'

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>

            <h1>Cabecera</h1>
            <nav>
                <ul>
                    <li><NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink></li>
                    <li><NavLink to="/articulos" className={({ isActive }) => isActive ? "active" : ""}>Articulos</NavLink></li>
                    <li><NavLink to="/panel" className={({ isActive }) => isActive ? "active" : ""}>Panel de control</NavLink></li>
                </ul>
            </nav>
            <hr />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/articulos" element={<Articulos />} />
                <Route path="/persona/:nombre/:apellido" element={<Persona />} />
                <Route path="/persona/:nombre" element={<Persona />} />
                <Route path="/persona/" element={<Persona />} />
                <Route path="/redirect" element={<Navigate to="/persona/Jose/Guzman" />} />
                <Route path="/panel/*" element={<PanelControl />} >
                    <Route index element={<InicioPanel />} />
                    <Route path="crear-articulos" element={<Crear />} />
                    <Route path="gestion-usuarios" element={<Gestion />} />
                    <Route path="acerca-de" element={<Acerca />} />
                </Route>
                <Route path="*" element={<Error />} />

            </Routes>
            <hr />

            <footer>
                <h2>Este es el footer de la pagina</h2>
            </footer>
        </BrowserRouter>
    )
}
