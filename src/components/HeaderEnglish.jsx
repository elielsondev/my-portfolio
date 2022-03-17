import React from 'react';
import myInformations from '../data/myInformations';
import './css/Headers.css';

function HeaderEnglish({ isPortuguese }) {
  return (
    <header>
      <h1 className='Area'>{ myInformations.area }</h1>
      <img 
        src="https://www.infoescola.com/wp-content/uploads/2011/02/bandeira-do-brasil.gif" 
        alt="Bandeira Portuguesa"
        width='40'
        height='40'
        onClick={ () => isPortuguese(true) }
      />
    </header>
  )
}

export default HeaderEnglish;
