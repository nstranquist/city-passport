import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
