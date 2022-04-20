import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';

import './App.css';

/* 
  font-family: 'Beau Rivage', cursive;
  font-family: 'Courgette', cursive;
  font-family: 'Fredoka One', cursive;
  font-family: 'Pacifico', cursive;
  font-family: 'Patrick Hand', cursive; 
*/

function App() {
  const [ sectionedLanguage, setSectionedLanguage ] = useState(0);

  return (
    <div>
      <Header 
        sectionedLanguage={ sectionedLanguage }
        setSectionedLanguage={ setSectionedLanguage }
      />
      <Welcome sectionedLanguage={ sectionedLanguage } />
      <About sectionedLanguage={ sectionedLanguage } />
    </div>
  )
}

export default App;
