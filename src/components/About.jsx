import React from 'react';
import { language } from '../API/Api';
import './css/About.css';

function About({ sectionedLanguage }) {
  return (
    <section>
      <h1 id="TitleMain">
        <span id="about">
          { language[sectionedLanguage].about }
        </span>
      </h1>
      <h3 id="AboutMe">{ language[sectionedLanguage].aboutMe }</h3>
    </section>
  )
}

export default About;
