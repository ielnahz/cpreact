import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './route';
import { Provider } from 'react-redux'
import configureStore from './store';
Object.assign = require('object-assign');
require('es6-promise').polyfill();
const store = configureStore()

const rootEle = document.getElementById('app');
render(
    <Provider store={store}>
        <Router history={hashHistory}>{Routes}</Router>
    </Provider>, rootEle);
