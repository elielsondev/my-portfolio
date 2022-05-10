import React from 'react';
import { language } from '../API/Api';
import WhatsApp from '../images/WhatsApp.svg';

import './css/Contact.css';

function Contact({ sectionedLanguage }) {
  return (
    <section id="contact">
      <h1 id='TitleMain'>{ language[sectionedLanguage].contact }</h1>
      <article>
        <div className='LinkedInGitHub'>
          <a href='https://www.linkedin.com/in/elielsondev/' target='_blank' rel='noreferrer'>
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt='Elielson-LinkedIn'
              width={100}
            />
          </a>

          <a href='https://github.com/elielsondev' target='_blank' rel='noreferrer'>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt='Elielson-GitHub'
              width={100}
            /> 
          </a>
        </div>

        <div className='contactDiv LinkZapEmail'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt='Elielson-Gmail'
            width={60}
          />
          <h1 className='contactText'>nascimento.elielson@gmail.com</h1>
        
          <a 
            href="https://wa.me/5581992766543?text=Ol%C3%A1+Elielson%2C+vi+o+seu+portifolio+e+gostaria+de+falar+com+voc%C3%AA."
            target='_blank'
            rel='noreferrer'
            className='LinkZapEmail'
          >
              
            <img 
              src={ WhatsApp }
              alt='Elielson-WhatsApp'
              width={60}
            />
          <h1 className='contactText'> +55 81 992766543 </h1>
          </a>
        </div>
      </article>
    </section>
  )
}

export default Contact;