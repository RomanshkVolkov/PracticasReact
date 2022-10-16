import React from 'react'
import { useEffect } from 'react';

export const AvisoComponente = () => {
    const showAlert = () => {
        alert('Hola Jose Bienvenido');
    }

    useEffect(() => {
        alert('El componente se ha cargado');

        return () => {
            alert('El componente se ha eliminado');
        }
    },[])
  return (
    <div>
        <hr />
        <h3>Saludos Jose Guzman</h3>
        <button onClick={showAlert}>Mostrar Alerta</button>
    </div>
  )
}
