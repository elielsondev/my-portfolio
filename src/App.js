import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Skills sectionedLanguage={ sectionedLanguage } />
      <Projects sectionedLanguage={ sectionedLanguage } />
      <Contact sectionedLanguage={ sectionedLanguage } />
      <Footer sectionedLanguage={ sectionedLanguage } />
    </div>
  )
}

export default App;
