import React from 'react';
import myInformations from '../data/myInformations';
import './css/Headers.css';

function HeaderEnglish({ isPortuguese }) {
  return (
    <header>
      <h1>{ myInformations.name }</h1>
      <h1>{ myInformations.area }</h1>
      <input
        type="button"
        value="EN"
        onClick={ () => isPortuguese(true) }
      />
    </header>
  )
}

export default HeaderEnglish;
