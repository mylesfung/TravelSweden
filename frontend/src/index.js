import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css';
import { App } from './App.js';
import { AccountProvider } from './AccountContext';
import { Provider } from 'react-redux';
import { store } from './store';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AccountProvider>
          <App />
        </AccountProvider>
      </BrowserRouter>
    </Provider>
</React.StrictMode>
);
reportWebVitals();
