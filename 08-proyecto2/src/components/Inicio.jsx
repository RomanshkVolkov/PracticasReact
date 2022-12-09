import React from 'react';
import { NavLink } from 'react-router-dom';
import { DivSpace } from './DivSpace';

export function Inicio() {
  const images = [
    'https://scontent.fisj1-1.fna.fbcdn.net/v/t39.30808-6/317508780_643878900863932_4321761529483522858_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LUg3yJezbFkAX_0PvOF&_nc_ht=scontent.fisj1-1.fna&oh=00_AfAKMabWiy2_GablW5u4OqBnaL6qQkd29dvpvV4PZfF-fA&oe=6396C389',

    'https://upqroo.edu.mx/wp-content/uploads/2022/05/DSC_0132-1536x1024.jpg',
  ];
  const refs = [
    'https://www.facebook.com/photo.php?fbid=643878680863954&set=pb.100057254837951.-2207520000.&type=3',

    'https://upqroo.edu.mx/2022/05/05/el-rector-de-la-upqroo-recibe-a-los-alumnos-ganadores-en-el-torneo-nacional-de-robotica/',
  ];
  const disableOtherScroll = () => (document.body.style.overflow = 'hidden');
  const enableOtherScroll = () => (document.body.style.overflow = 'auto');
  return (
    <div className="home">
      <h1 style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        Soy Jose Guzman y soy un Desarrollardor Web en Cáncun
      </h1>
      <DivSpace />
      <div style={{ marginLeft: '3.5rem' }}>
        <div className="about">
          <p>
            Me especializo en back-end eh trabajado en el diseño, desarrollo de
            servicios de API RESTFUll, base de datos, mantenimiento y
            optimización de sitios web.
          </p>

          <p>
            Me gusta trabajar con tecnologías como NodeJS, Express, MongoDB,
            MySQL, ReactJS, NextJS, HTML, CSS, JavaScript, Laravel, Materialize,
            entre otras.
          </p>

          <p>
            Me gusta trabajar en equipo y aprender cosas nuevas, me gusta la
            tecnología y la programación, me gusta el trabajo en equipo y
            aprender cosas nuevas.
          </p>

          <p>
            Actualmente soy estudiante de la Universidad Politecnica de Quintana
            Roo
          </p>

          <p>
            <NavLink to="/contacto">Contactame</NavLink> para colaborar juntos
          </p>
        </div>
        <div
          className="home-div-img"
          onMouseOver={disableOtherScroll}
          onFocus={disableOtherScroll}
          onMouseOut={enableOtherScroll}
          onBlur={enableOtherScroll}
        >
          {images &&
            images.map((img, i) => (
              <a
                // eslint-disable-next-line react/no-array-index-key
                key={`image${i}`}
                href={refs[i]}
                target="_blank"
                rel="noreferrer"
              >
                <img src={img} alt="" width="100%" />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
