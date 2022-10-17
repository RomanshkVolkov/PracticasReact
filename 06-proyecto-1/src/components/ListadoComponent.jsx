/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { getItemToLocalSorage } from '../helpers/LocalStorage';
import { EditarComponent } from './EditarComponent';

export const ListadoComponent = (props) => {


    const { movieList, setMovieList } = props;

    const [editar, setEditar] = React.useState(0);


    useEffect(() => {
        let pelis = getItemToLocalSorage('pelis');
        setMovieList(pelis);
    }, [movieList])

    const deleteMovie = (id) => {
        let actualMovies = getItemToLocalSorage('pelis');

        let modMovies = actualMovies.filter((item) => item.id !== parseInt(id));

        setMovieList(modMovies);

        localStorage.setItem('pelis', JSON.stringify(modMovies));
    }

    return (
        <>
            {/* Aqui va el contenido de la pagina */}
            {movieList !== null ?
                movieList?.map((movie, index) => {
                    return (
                        <article className="peli-item" key={movie.id}>
                            <h3>{movie.titulo}</h3>
                            <p className="description">{(movie.descripcion) ? movie.descripcion : 'Sin descripcion'}</p>
                            <button className="edit" onClick={() => setEditar(movie.id)}>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Eliminar</button>

                            {/* Aparecer formulario para editar el cart actual*/}
                            {editar === movie.id && (
                                <EditarComponent movie={movie} setMovieList={setMovieList} setEditar={setEditar} />
                            )}


                        </article>

                    );
                })
                : <h3>No hay peliculas para mostrar</h3>}

        </>
    )
}
