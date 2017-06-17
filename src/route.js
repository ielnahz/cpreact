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

import UserCenter from './container/mine/UserCenter';
import ModifyCapitalPwd from './container/mine/ModifyCapitalPwd';
import ModifyLoginPwd from './container/mine/ModifyLoginPwd';
import SetCapitalPwd from './container/mine/SetCapitalPwd';
import AccountWithCash from './container/mine/AccountWithCash';
import BindCard from './container/mine/BindCard';
import AgentManage from './container/mine/AgentManage';
import Footer from './container/footer/Footer';
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
            <Route path="/hall" component={AccountPage}>

            </Route>
            <Route path="/notice" component={AgentManage}>

            </Route>
            <Route path="query" component={BindCard}>

            </Route>
            <Route path='/mine'>
                <Route path='center' component={UserCenter}></Route>
                <IndexRoute component={Footer}></IndexRoute>
            </Route>
        </Route>
    </Route>
);
export default routes;