import React from 'react';

export const MiComponente = () => {

    let myData = {
        name: 'Jose',
        lastname: 'Guzman',
        age: 23,
        hobbies: ['Programar', 'Dormir', 'Escuchar audio libros', 'Soñar con la chica que me gusta']
    }
    return (
        <div className='MiComponente'>
            
            <hr />
            <p>Componente 1</p>
            <h1>Datos del Programador:</h1>
            <ul>
                <li>Nombre: {myData.name}</li>
                <li>Apellido: {myData.lastname}</li>
                <li>Edad: {myData.age}</li>
                <li>Pasa tiempos: </li>
                {myData.hobbies.map((element) => {
                  return <li>{element}</li>  
                })}
            </ul>
            <hr />


        </div>
    );
}

export default MiComponente;