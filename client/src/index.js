import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {contextProvider } from './SocketContext'
import './styles.css';

ReactDOM.render(
  <contextProvider>
    <App />,
  </contextProvider>,
  document.getElementById('root'),
);