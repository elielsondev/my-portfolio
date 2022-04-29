import React from 'react';
import { language } from '../API/Api';

import './css/Footer.css';

function Footer({ sectionedLanguage }) {
  return (
    <footer id='Footer'>
      <h4 id='TextFooter'>{ language[sectionedLanguage].footer }</h4>
    </footer>
  )
}

export default Footer;
