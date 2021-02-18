import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename="/movie_react_app">
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);

