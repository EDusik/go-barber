import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
