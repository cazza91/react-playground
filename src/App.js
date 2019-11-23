import React from 'react';
import './styles/main.scss';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  )
}

export default App;
