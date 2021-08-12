import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import store from './store';
import './index.css';

import App from './App';

import './index.css';

ReactDOM.render(
  <StoreProvider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
); 