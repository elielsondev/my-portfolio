import React from 'react';
import { language } from '../API/Api';

import './css/Welcome.css';

function Welcome({ sectionedLanguage }) {
  return (
    <section id="WelcomeSection">
      <div>
        <h1 id="WelcomeMessage">{ language[sectionedLanguage].welcome }</h1>
        <h1 id="Iam">{ language[sectionedLanguage].whoAmI }</h1>
        <h1 id="Name">{ language[sectionedLanguage].name }</h1>
        <h1 id="Area">{ language[sectionedLanguage].area }</h1>
      </div>
      <div>
        <img
          id="MyImage"
          width="400" 
          src={ language[sectionedLanguage].myImage } 
          alt="Foto de Elielson Nascimento - Desenvolvedor Web - Front-End"
        />
      </div>
    </section>
  )
}

export default Welcome;