import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';

import Home from './components/Home';
import Visited from './components/widgets/Visited';
import Journal from './components/widgets/Journal';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="widgets">
          <Route path="visited" element={<Visited />} />
          <Route path="journal" element={<Journal />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
