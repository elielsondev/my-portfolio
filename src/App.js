import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [portuguese, setPortuguese]= useState();
  return (
    <div>
      <Header pt={ portuguese } changeLanguage={ setPortuguese } />
    </div>
  )
}

export default App;
