import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
