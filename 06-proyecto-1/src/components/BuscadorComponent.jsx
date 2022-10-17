import React from 'react'
import { getSimpleItem } from '../helpers/LocalStorage';

export const BuscadorComponent = (props) => {

    const { movieList, setMovieList } = props;

    const [search, setSearch] = React.useState('');
    const [searchResult, setSearchResult] = React.useState(true);
    const searchMovie = (e) => {
        setSearch(e.target.value);

        let findMovie = movieList.filter((item) => item.titulo.toLowerCase().includes(search.toLowerCase()));

        if (search.length <= 2 || findMovie.length === 0) {
            findMovie = getSimpleItem('pelis');
            setSearchResult(false)
        } else {
            setSearchResult(true)
        }

        setMovieList(findMovie);
    }


    return (
        <div>
            <h3 className="search">Buscador: {search}</h3>
            {(searchResult === false && search.length > 2) && <strong className='no-find-search'>No se han encontrado resultados</strong>}
            <form>
                <input type="text"
                    id='search_field'
                    name='busqueda'
                    autoComplete='off'
                    onChange={searchMovie}
                />
                <button >Buscar</button>
            </form>
        </div>
    )
}
