import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './route';
import { Provider } from 'react-redux'
import configureStore from './store';
require('es6-promise').polyfill();
require('babel-polyfill');
Object.assign = require('object-assign');
const store = configureStore();

const rootEle = document.getElementById('app');
render(
    <Provider store={store}>
        <Router history={hashHistory}>{Routes}</Router>
    </Provider>, rootEle);

