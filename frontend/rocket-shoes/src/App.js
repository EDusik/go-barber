import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
        <Routes />
        <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
