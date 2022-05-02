import React from 'react';
import { language } from '../API/Api';

import './css/Skills.css';

function Skills({ sectionedLanguage }) {
  return (
    <section >
      <h1 id='TitleMain'>{ language[sectionedLanguage].knowledge }</h1>
      <article id='Article'>
      <div className='Softs'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
            alt='Elielson-GIT'
            width='100'
          />
          
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
            alt='Elielson-CSS3'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
            alt='Elielson-HTML5'
            width='100'
          />
      
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'
            alt='Elielson-JavaScript'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
            alt='Elielson-Jest'
            width='100'
          />
      
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg'
            alt='Elielson-Bootstrap'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
            alt='Elielson-React.JS'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
            alt='Elielson-Redux'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
            alt='Elielson-Mysql'
            width='100'
          />
      
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
            alt='Elielson-Node.js'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg'
            alt='Elielson-Sequelize'
            width='100'
          />
          
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'
            alt='Elielson-TypeScript'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg'
            alt='Elielson-Heroku'
            width='100'
          />

          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg'
            alt='Elielson-Docker'
            width='100'
          />
         
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
            alt='Elielson-Express'
            width='100'
          />
        </div>
        <div className='Softs'>
          <img
            className='HeaderText'
            src={ language[sectionedLanguage].softSkills.Collaboration }
            alt={ language[sectionedLanguage].softSkills.Collaboration }
            width='150'
          />

          <img
            className='HeaderText'
            src={ language[sectionedLanguage].softSkills.Empathy }
            alt={ language[sectionedLanguage].softSkills.Empathy }
            width='150'
          />

          <img
            className='HeaderText'
            src={ language[sectionedLanguage].softSkills.Communication }
            alt={ language[sectionedLanguage].softSkills.Communication }
            width='150'
          />

          <img
            className='HeaderText'
            src={ language[sectionedLanguage].softSkills.Organization }
            alt={ language[sectionedLanguage].softSkills.Organization }
            width='150'
          />

          <img
            className='HeaderText'
            src={ language[sectionedLanguage].softSkills.TeamWork }
            alt={ language[sectionedLanguage].softSkills.TeamWork }
            width='150'
          />
              
        </div>              
      </article>
    </section>
  )
}

export default Skills;
