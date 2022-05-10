import React from 'react';
import { language } from '../API/Api';
import Brazil from '../images/Brazil.svg';
import GreatBritain from '../images/GreatBritain.svg';

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
          height="40"
          src={ Brazil }
          alt="Portugues"
          onClick={ portuguese }
        />
        <img
          className="Flag"
          width="54"
          height="40"
          src={ GreatBritain }
          alt="English"
          onClick={ english }
        />
      </div>

      <div> 
        <a href="#WelcomeSection">
          <h1 id='NameHeader'>{ language[sectionedLanguage].name }</h1>
        </a>
      </div>

      <div className='Menu'>
          <a href="#about">
            <h3 className='ItensMenu nav-item'>{ language[sectionedLanguage].about }</h3>
          </a>
          <a href="#skills">
            <h3 className='ItensMenu nav-item'>{ language[sectionedLanguage].knowledge }</h3>
          </a>
          <a href="#projects">
            <h3 className='ItensMenu nav-item'>{ language[sectionedLanguage].projects }</h3>
          </a>
          <a href="#contact">
            <h3 className='ItensMenu nav-item'>{ language[sectionedLanguage].contact }</h3>
          </a>
      </div>
    </header>
  )
}

export default Header;
