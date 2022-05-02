import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import { language } from './API/Api';


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
      <Header sectionedLanguage={ sectionedLanguage }
        setSectionedLanguage={ setSectionedLanguage }
      />
      <Welcome sectionedLanguage={ sectionedLanguage } />
      <About sectionedLanguage={ sectionedLanguage }
        title={ language[sectionedLanguage].about }
        dark={true}
        id={ language[sectionedLanguage].about }
      />
      <Skills sectionedLanguage={ sectionedLanguage }
        title={ language[sectionedLanguage].knowledge }
        dark={false}
        id={ language[sectionedLanguage].knowledge }
      />
      <Projects sectionedLanguage={ sectionedLanguage } 
        title={ language[sectionedLanguage].projects }
        dark={true}
        id={ language[sectionedLanguage].projects }
      />
      <Contact sectionedLanguage={ sectionedLanguage }
        title={ language[sectionedLanguage].contact }
        dark={false}
        id={ language[sectionedLanguage].contact }
      />
      <Footer sectionedLanguage={ sectionedLanguage } />
    </div>
  )
}

export default App;
