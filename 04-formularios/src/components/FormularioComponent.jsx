import React from 'react'

export const FormularioComponent = () => {
    const [user, setUser] = React.useState({});

    const getFormData = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        let value = Object.fromEntries(data.entries())
        value = {
            ...value,
            enviar: e.target.enviar.value
        }
        console.log(value)
        setUser(value)
    }

    const changeData = e => {
        let inputName = e.target.name;

        setUser(prevStatus => {
            return {
                ...prevStatus,
                [inputName]: e.target.value
            }
        });
        console.log(user)
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
                <input type="text" placeholder='Nombre' name='name' onChange={changeData} />
                <input type="text" placeholder='Apellido' name='lastname' onChange={changeData} />
                <select name="genero" id="" onChange={changeData} >
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="biografia" id="" cols="30" rows="10" placeholder='Biografia' onChange={changeData} ></textarea>
                <input type="submit" value='Enviar' name='enviar' />
            </form>
        </div>
    )
}
