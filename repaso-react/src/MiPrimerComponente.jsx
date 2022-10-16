import React from 'react'

export const MiPrimerComponente = () => {
    
    const [name, setName] = React.useState('GuzmanDev');
    const [web, setWeb] = React.useState('https://www.google.com');

    let cursos = ['React', 'Angular', 'Vue', 'Node', 'Express', 'MongoDB'];

    const changeName = (nameChange) => {
        setName(nameChange);
    }

  return (
    <div>
        <hr />
        <h1>Mi Primer Componente</h1>

        <p>Mi nombre es: <strong className={name.length >= 10 ? 'verde' : 'rojo'}>{name}</strong></p>
        <p>Mi web es: <strong>{web}</strong></p>

        <input type="text"
        onChange={ (e) => changeName(e.target.value) }
        />

        <button onClick={ e => changeName('Guz-Ram')}>Cambiar Nombre</button>

        <h2>Cursos</h2>
        <ul>
            {cursos.map((item, index) => {
                return (<li key={index}>
                    {item}
                    </li>)
            })}
        </ul>
    </div>
  )
}
