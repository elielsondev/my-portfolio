import React, { useState } from 'react';
import HeaderEnglish from './components/HeaderEnglish';
import HeaderPortuguese from './components/HeaderPortuguese';
import './App.css';
import MainPortuguese from './components/MainPortuguese';
import MainEnglish from './components/MainEnglish';

function App() {
  const [ portuguese, usePortuguese ] = useState();

  if (portuguese) return (
    <>
      <HeaderPortuguese isPortuguese={ usePortuguese } />
      <MainPortuguese />
    </>
  );
  return (
    <>
      <HeaderEnglish isPortuguese={ usePortuguese } />
      <MainEnglish />
    </>
  );
};

export default App;