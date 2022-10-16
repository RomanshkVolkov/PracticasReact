/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react';
import { AvisoComponente } from './AvisoComponente';

export const PruebasComponent = () => {
    const [user, setUser] = React.useState('Jose Guzman');
    const [fecha, setFecha] = React.useState(new Date().getFullYear());
    const [contador, setContador] = React.useState(0);

    const modUser = e => {
        setUser(e.target.value);
    }
    const modFecha = e => {
        setFecha(new Date().toLocaleDateString());
    }

    useEffect(() => {
        console.log('Se ha Cargado el componente');
    }, [])

    useEffect(() => {
        setContador(contador + 1);
        console.log(`Se ha cambiado los valores ${contador} veces`);
    }, [user, fecha]);
  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={contador >  10 ? 'label label-green' : 'label'}>{user}</strong>
        <strong className='label'>{fecha}</strong>
        <p >
            <input type="text"
            onChange={ modUser }
            placeholder="Cambia tu nombre"
            />
            <button onClick={modFecha}>Cambiar Fecha</button>


        </p>
            {user === 'jose' && <AvisoComponente />}
    </div>
  )
}
