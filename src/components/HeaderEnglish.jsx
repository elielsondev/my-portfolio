import React from 'react';
import myInformations from '../data/myInformations';
import './css/Headers.css';

function HeaderEnglish({ isPortuguese }) {
  const { name, email, tel } = myInformations;

  return (
    <header>
      <div>
        <a 
          href="https://www.linkedin.com/in/elielsondev/"
          target="_blank" rel="noreferrer">
          <img
            className='Radius'
            src="https://99prod.s3.amazonaws.com/uploads/image/file/549999/linkedin-logo-3.png" 
            alt="LinkedIn"
            width="60"
            height="60"
          />
        </a>
        <a 
          href="https://github.com/elielsondev" 
          target="_blank" rel="noreferrer"
        >
          <img
            className='Radius'
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            width="60"
            height="60"
          />
        </a>
      </div>

      <p className='Contact'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" 
          alt="email"
          width="20" /> { email } <br />
        <img
          src="https://icones.pro/wp-content/uploads/2021/02/telephone-icone-vert.png" 
          alt="email"
          width="20" /> { tel }
      </p>

      <h1 className='FontName'>{ name }</h1>

      <p className='Contact Links'>About</p>
      <p className='Contact Links'>Skills</p>
      <p className='Contact Links'>Portfolio</p>

      <img
        className='Radius'
        src="https://www.infoescola.com/wp-content/uploads/2011/02/bandeira-do-brasil.gif" 
        alt="Bandeira Brasil"
        width='40'
        height='40'
        onClick={ () => isPortuguese(true) }
      />
    </header>
  )
}

export default HeaderEnglish;
