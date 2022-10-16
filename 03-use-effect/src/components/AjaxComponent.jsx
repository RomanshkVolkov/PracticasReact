/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';

export const AjaxComponent = () => {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

    const getStaticUsers = () => {
        setUsers([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
        ])
    }

    const getAjaxUsers = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then((res) => res.json())
            .then(finalResult => {
                setUsers(finalResult.data);
            }, error => {
                console.log(error);
            })
    }

    const getAjaxUsersAwait = async () => {
        setTimeout(async () => {
            try {
                const res = await fetch('https://reqres.in/api/users?page=1')
                    .catch(e => { throw new Error(e) });
                if (!res.ok) throw new Error('Error en la peticion');
                const { data } = await res.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        }, 3000);
    }

    useEffect(() => {
        //getStaticUsers();
        //getAjaxUsers();
        getAjaxUsersAwait();
    }, [])

    if (error !== "") {
        return (
            <div>
                <p>
                    <strong className="label label-red">{error}</strong>
                </p>
            </div>
        )
    } else if (loading === true) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    } else if (loading === false && error === "") {
        return (
            <div>
                <h1>Listado de usuarios via Ajax</h1>

                <ol className='usuarios'>


                    {users.map((user) => {
                        return (
                            <li key={user.id}>
                                <img src={user.avatar} alt={user.first_name} />
                                &nbsp;
                                <p>{user.first_name} {user.last_name}</p>
                            </li>
                        )
                    })
                    }
                </ol>

            </div>
        )
    }

}
