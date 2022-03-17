import React from 'react';
import myInformations from '../data/myInformations';

function MainEnglish() {
  return (
    <main>
      <div> 
        <h1 className='fontName'>{ myInformations.name }</h1>
        <p className='text'>{ myInformations.description }</p>
      </div>
    </main>
  )
}

export default MainEnglish;
