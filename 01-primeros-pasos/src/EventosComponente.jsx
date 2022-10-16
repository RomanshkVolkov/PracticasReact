import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, name) => {
        alert(`Has dado click ${name}`)
    }
    const hasDadoDobleClick = (e) => {
        alert('Has dado doble click')
    }
    const detectDiv = (e, acction) => {
        alert(`Haz ${acction} a la caja con el mouse`)
    }

    const enterInput = (e, status) => {
        console.log('Estas dentro del input, escribe tu nombre')
    }

    const outInput = (e) => {
        console.log('Estas fuera del input')
    }


  return (
    <div>
        <p>EventosComponente</p>
        <p>
            <button onClick={ e => hasDadoClick(e, "Vatuuuu")} >Dame Click</button>
        </p>
        <p>
            <button onDoubleClick={ hasDadoDobleClick }>Dame doble click</button>
        </p>
        <div id='caja' 
        onMouseEnter={ e => detectDiv(e, 'entrado') }
        onMouseLeave={ e => detectDiv(e, 'salido') }
        >
            Pasa por encima de mi!!

        </div>

        <input type="text" onFocus={ enterInput } onBlur={ outInput } />
    </div>
  )
}

export default EventosComponente;
