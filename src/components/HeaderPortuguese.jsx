import React from 'react';
import minhasInformacoes from '../data/minhasInformacoes';
import './css/Headers.css';

function HeaderPortuguese({ isPortuguese }) {
  return (
    <header>
      <h1>{ minhasInformacoes.name }</h1>
      <h1>{ minhasInformacoes.area }</h1>
      <input 
        type="button"
        value="PT"
        onClick={ () => isPortuguese(false) } 
      />
    </header>
  )
}

export default HeaderPortuguese;
