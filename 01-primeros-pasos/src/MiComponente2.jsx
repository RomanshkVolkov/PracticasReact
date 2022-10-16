import React from "react";

export const MiComponente2 = () => {
    const books = ['Harry Potter', 'Game Of Thrones', 'Invisible']
    
    //const books = []

    return (
        <div>
            <p>Componente 2</p>
            {books.length > 0 ? (
            <ul>
                {books.map((item, i) => {
                    return <li key={'book'+i}>{i+1}: {item}</li>
                })}
            </ul>

            ) : (
                <p>No hay libros</p>
            )
        
        }


        </div>
    )
}

export default MiComponente2;