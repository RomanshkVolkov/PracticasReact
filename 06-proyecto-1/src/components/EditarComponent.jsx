import React from 'react'
import { getSimpleItem, setSimpleItem } from '../helpers/LocalStorage';

export const EditarComponent = (props) => {
    const { movie, setMovieList, setEditar } = props;
    const tituloComponent = 'Editar Pelicula';

    const saveEdition = (e, id) => {
        e.preventDefault();
        let form = new FormData(e.target);
        let data = Object.fromEntries(form.entries());

        let moviesActual = getSimpleItem('pelis');

        let indexFind = moviesActual.findIndex((item) => item.id === id);



        moviesActual[indexFind] = { id, ...data }
        setSimpleItem('pelis', moviesActual);
        setMovieList(moviesActual);
        setEditar(0);

    }
    return (
        <div className='edit_form'>
            <h3 className='title'>{tituloComponent}</h3>
            <form onSubmit={(e) => saveEdition(e, movie.id)}>
                <input type="text"
                    placeholder="Titulo"
                    id='titulo'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={movie.titulo}
                    required />
                <textarea
                    id='descripcion'
                    name="descripcion"
                    placeholder="Descripcion"
                    className='descripcion_editada'
                    defaultValue={movie.descripcion}
                    required></textarea>
                <input type="submit"
                    id='editar'
                    name='editar' value={'Actualizar'} />
            </form>
        </div>
    )
}
