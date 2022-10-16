import React from 'react'

export const MiPrimerEstado = () => {
    const [name, setName] = React.useState('Pepe')
    
    const cambiarNombre = () => {
        setName('Juan');
    }
    const changeName = (e) => {
        if (e.key === 'Enter') {
            setName(e.target.value);
        }
    }
  return (
    <div>
        <p>MiPrimerEstado</p>

        <strong>
            {name}
        </strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar Nombre</button>
        &nbsp;
        <input type="text" 
        placeholder='Cambia el nombre'
        onKeyUp={(e) => setName(e.target.value)}
        />

        &nbsp;
        <input type="text" placeholder='Cambia rl nombre'
        onKeyUp={ e => changeName(e)}
        />

    </div>
  )
}

export default MiPrimerEstado;
