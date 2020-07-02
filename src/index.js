import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router'

import App from './App';
import Country from './components/Country';
import Weather from './components/Weather';
import Details from './components/Details';

const rootElement = document.getElementById('root')
ReactDOM.render(

  <Router>
    <App path='/' />
    <Country path='/country/:alpha3Code' />
    <Weather path='/weather' />
    <Details path='/details' />
  </Router>,
    rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
