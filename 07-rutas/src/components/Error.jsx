import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className='error' >
            <h1>Pagina no disponible 404</h1>
            <p>Esta pagina no existe</p>
            <Link to="/inicio">Volver al unicio</Link>
        </div>
    )
}
