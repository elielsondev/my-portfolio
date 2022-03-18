import React from 'react';
import minhasInformacoes from '../data/minhasInformacoes';
import './css/Main.css';

function MainPortuguese() {
  const { description } = minhasInformacoes;
  return (
    <main>
      <section className="SectionOne">
        <div className='Description'>
          <p className='Text'>{ description }</p>
        </div>
        <div>
          <img 
            src="https://blog.estagiarios.com/wp-content/uploads/2018/08/linkedin-3157977_1920.jpg"
            alt="Minha foto"
            width="550"
            height="500"
          />
        </div>
      </section>

      <section className='SectionTwo'>

      </section>

      <section className='SectionThree'>

      </section>

      <section className='SectionFour'>

      </section>
    </main>
  )
}

export default MainPortuguese;