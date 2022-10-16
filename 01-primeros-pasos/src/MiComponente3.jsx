import React from 'react'
import PropTypes from 'prop-types'

export const MiComponente3 = (props) => {
    console.log(props)
    const ficha = props.ficha;
  return (
    <div>
        <hr />
        MiComponente3
        

        <ul>
            <li>Nombre: {props.nombre}</li>
            <li>Edad: {ficha.edad}</li>
            <li>Altura: {ficha.altura}</li>
            <li>Peso: {ficha.peso}</li>
            <li>Estado Civil: {ficha.estadoCivil}</li>
            <li>Alergias: </li>
            {ficha.alergias.map((element, i) => {
                return <li key={'alergia'+i}>{i+1} {element}</li>
            })}
            
            
        </ul>
    </div>

    

  )
}

MiComponente3.propTypes = {
    nombre: PropTypes.string.isRequired,
    ficha: PropTypes.object.isRequired

}

MiComponente3.defaultProps = {
    nombre: 'Jose Guzman',
    ficha: {}
}

export default MiComponente3;