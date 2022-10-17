import React from 'react'
import { addToLocalStorage } from '../helpers/LocalStorage';

export const CrearComponent = (props) => {

    const { setMovieList } = props;

    const tittle = "Añadir pelicula";

    const [movie, setMovie] = React.useState({
        titulo: '',
        descripcion: '',
    });

    const { titulo, descripcion } = movie;
    const getFormData = e => {
        e.preventDefault();
        let form = new FormData(e.target);
        let data = Object.fromEntries(form.entries());

        let peli = {
            id: new Date().getTime(),
            ...data
        }
        setMovie(peli);
        setMovieList((items) => {
            return [...items, peli];
        });
        addToLocalStorage('pelis', peli);
    }

    return (
        <div className="add">
            <h3 className="tittle">{tittle}</h3>
            <strong>
                {(titulo && descripcion) && (`Haz creado la pelicula: ${titulo} con la descripcion: ${descripcion}`)}
            </strong>

            <form onSubmit={getFormData}>
                <input type="text"
                    placeholder="Titulo"
                    id='titulo'
                    name='titulo'
                    required />
                <textarea
                    id='descripcion'
                    name="descripcion"
                    placeholder="Descripcion"
                    required></textarea>
                <input type="submit"
                    id='sabe'
                    name='save' value={'Guardar'} />
            </form>
        </div>
    )
}
