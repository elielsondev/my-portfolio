import React from 'react';
import minhasInformacoes from '../data/minhasInformacoes';
import './css/Headers.css';

function HeaderPortuguese({ isPortuguese }) {
  return (
    <header>
      <h1>{ minhasInformacoes.area }</h1>
      <img 
        src="https://pbs.twimg.com/profile_images/1281301644592984064/CEFg3IoT_400x400.jpg" 
        alt="Bandeira Inglesa"
        width='40'
        height='40'
        onClick={ () => isPortuguese(false) }
      />
    </header>
  )
}

export default HeaderPortuguese;
