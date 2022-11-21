import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { Contacto } from '../components/Contacto'
import { Portafolio } from '../components/Portafolio'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const PrincipalRouter = () => {
    return (
        <BrowserRouter>
            <article>
                {/* HEADER Y NAVEGACION */}
                <HeaderNav />

                {/* Contenido Central */}
                <main>
                    <Routes>
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/portafolio" element={<Portafolio />} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/curriculum" element={<Curriculum />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </main>
                {/* FOOTER */}

                <Footer />
            </article>
        </BrowserRouter>
    )
}
