import React from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = (props) => {
    const { year } = props;
    const [showYear, setShowYear] = React.useState(year);

    const nextYear = e => {
        setShowYear(showYear + 1);
    }
    const leftYear = e => {
        setShowYear(showYear - 1);
    }
    const changeYear = e => {
        const setData = parseInt(e.target.value);
        if (Number.isInteger(setData)){
            setShowYear(setData);
        } else {
            setShowYear(year);
        }
    }
  return (
    <div>
        <h2>Ejercicio con eventos y useState</h2>
        <strong className='label label-green'>
            {showYear}
        </strong>
        <br />
        <button onClick={ leftYear }> Año Anterior</button>
        &nbsp;
        <button onClick={ nextYear }>Año Siguiente</button>
        <p>Cambiar año</p>
        <input type="text"
        onChange={changeYear} />

    </div>
  )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}
