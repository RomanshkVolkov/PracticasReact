import React from 'react'

export const FormularioComponent = () => {
    const [user, setUser] = React.useState({});

    const getFormData = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        const value = Object.fromEntries(data.entries())
        console.log(value)
        setUser(value)
    }
    return (
        <div>
            <h1>Formularios con React</h1>
            {(user.name || user.lastname || user.genero || user.biografia) && (
                <div className='label label-gray'>
                    {user.name} {user.lastname} es {user.genero} y su biografia es: {user.biografia}
                </div>
            )}
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Nombre' name='name' />
                <input type="text" placeholder='Apellido' name='lastname' />
                <select name="genero" id="">
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="biografia" id="" cols="30" rows="10" placeholder='Biografia' ></textarea>
                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}
