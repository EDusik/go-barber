import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import Header from './components/Header'
import Routes from './routes';
import store from './store';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
