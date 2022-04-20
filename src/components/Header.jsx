import React from 'react';
import { language } from '../API/Api';

import './css/Header.css';

function Header({ sectionedLanguage, setSectionedLanguage }) {
  function portuguese() {
    setSectionedLanguage(0);
    console.log('Portugues');
  };

  function english() {
    setSectionedLanguage(1);
    console.log('English');
  };

  return (
    <header id='Header'>
      <div>
        <img 
          className="Flag"
          width="50"
          src={ language[sectionedLanguage].brasilFlag }
          alt="Portugues"
          onClick={ portuguese }
        />
        <img
          className="Flag"
          width="50"
          src={ language[sectionedLanguage].unitedKingdomFlag }
          alt="English"
          onClick={ english }
        />
      </div>

      <div>
        <h1 id='NameHeader'>{ language[sectionedLanguage].name }</h1>
      </div>

      <div className='Menu'>
        <h3 className='ItensMenu'>{ language[sectionedLanguage].about }</h3>
        <h3 className='ItensMenu'>{ language[sectionedLanguage].projects }</h3>
        <h3 className='ItensMenu'>{ language[sectionedLanguage].experience }</h3>
        <h3 className='ItensMenu'>{ language[sectionedLanguage].knowledge }</h3>
        <h3 className='ItensMenu'>{ language[sectionedLanguage].contact }</h3>
      </div>
    </header>
  )
}

export default Header;