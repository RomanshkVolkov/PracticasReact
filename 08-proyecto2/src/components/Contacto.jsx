import React from 'react';
import { DivSpace } from './DivSpace';
import github from './svg/github.svg';
import linkedin from './svg/linkedin.svg';
import mail from './svg/mail.svg';
import whatsapp from './svg/whatsapp.svg';

export function Contacto() {
  const reds = [
    {
      name: 'Email',
      svg: mail,
      link: 'mailto:joseguzmandev@gmail.com',
    },
    {
      name: 'Github',
      svg: github,
      link: 'https://github.com/RomanshkVolkov',
    },
    {
      name: 'Linkedin',
      svg: linkedin,
      link: '',
    },
    {
      name: 'Whatsapp',
      svg: whatsapp,
      link: 'https://wa.me/5219981287821',
    },
  ];
  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Contacto</h1>
      <DivSpace />
      <h4>Contactame en cualquiera de mis redes sociales</h4>
      <div className="contacto">
        <div>
          {reds?.map(red => (
            <div key={red.name}>
              <a href={red.link} target="_blank" rel="noreferrer">
                <img src={red.svg} alt={red.name} width="50rem" />
                <p>{red.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
