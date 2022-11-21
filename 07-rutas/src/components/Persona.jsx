import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Persona = () => {
    const { nombre, apellido } = useParams();

    const navegar = useNavigate();

    const enviar = (e) => {
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;


        if (nombre.length <= 0 && apellido.length <= 0) {
            navegar('/inicio');
        } else if (nombre.toLowerCase() === 'contacto') {
            navegar('/contacto');
        } else {
            navegar(`/persona/${nombre}/${apellido}`);
        }

    }
    return (
        <div>
            {!nombre && <h1>No hay ninguna persona para mostrar</h1>}
            {nombre && !apellido && <h1>Persona: {nombre}</h1>}
            {nombre && apellido && <h1>Persona: {nombre} {apellido}</h1>}
            <p>Esta es la pagina de persona</p>

            <form onSubmit={enviar}>
                <input type="text" name="nombre" />
                <input type="text" name="apellido" />
                <input type="submit" name="enviar" id="enviar" value="enviar" />
            </form>
        </div>
    )
}
