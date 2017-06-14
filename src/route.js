import React from 'react';
import {Router, Route , hashHistory,IndexRoute,Redirect } from 'react-router';
import App from './container/App';
import LoginPage from './container/LoginPage';
import HomePage from './container/HomePage';
import HallPage from './container/HallPage';
import NoticePage from './container/NoticePage';
import RecordPage from './container/RecordPage';
import AccountPage from './container/AccountPage';
import './css/global.css';

const routes = (
    <Route history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/login'  component={LoginPage} />
            <Route path='/home'  component={HomePage} >
                <IndexRoute component={HallPage} />
                <Route path='notice' component={NoticePage} />
                <Route path='record' component={RecordPage} />
                <Route path='account' component={AccountPage} />
            </Route>
        </Route>
    </Route>
);
export default routes;