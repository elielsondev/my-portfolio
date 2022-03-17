import React, { useState } from 'react';
import HeaderEnglish from './components/HeaderEnglish';
import HeaderPortuguese from './components/HeaderPortuguese';
import './App.css';

function App() {
  const [ portuguese, usePortuguese ] = useState();

  if (portuguese) return (
    <>
      <HeaderPortuguese isPortuguese={ usePortuguese } />
    </>
  );
  return (
    <>
      <HeaderEnglish isPortuguese={ usePortuguese } />
    </>
  );
};

export default App;