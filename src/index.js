import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './Reducers/index'

const store = createStore(rootReducer)
console.log('store',store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

