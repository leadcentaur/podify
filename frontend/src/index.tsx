import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyleComponent } from 'styled-components';
import "./index.css"
import { GlobalStyles } from './App.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);
