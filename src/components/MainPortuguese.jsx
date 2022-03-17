import React from 'react';
import minhasInformacoes from '../data/minhasInformacoes';

function MainPortuguese() {
  return (
    <main>
      <h1 className='fontName'>{ minhasInformacoes.name }</h1>
      <p className='text'>{ minhasInformacoes.description }</p>
    </main>
  )
}

export default MainPortuguese;