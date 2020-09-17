import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}

export default App;
