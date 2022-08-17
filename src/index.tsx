import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppEntryPoint from './AppEntryPoint';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <AppEntryPoint />
  </React.StrictMode>,
  document.getElementById('root')
);
