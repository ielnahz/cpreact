import React from 'react';
import {Router, Route , hashHistory,IndexRoute,Redirect } from 'react-router';
import App from './container/App';
import LoginPage from './container/LoginPage';
import Record from './container/Record';
import './css/global.css';

import UserCenter from './container/mine/UserCenter';
import ModifyCapitalPwd from './container/mine/ModifyCapitalPwd';
import ModifyLoginPwd from './container/mine/ModifyLoginPwd';
import SetCapitalPwd from './container/mine/SetCapitalPwd';
import AccountWithCash from './container/mine/AccountWithCash';
import AccountRecharge from './container/mine/AccountRecharge';
import BindCard from './container/mine/BindCard';
import AgentManage from './container/mine/AgentManage';
import Hall from './container/hall/Hall';
import Notice from './container/notice/Notice';
import HallAdd from './container/hall/HallAdd';
const routes = (
    <Route history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/login"  component={LoginPage} />
            <Route path="/home">
                <IndexRoute component={Hall}></IndexRoute>
                <Route path="add" component={HallAdd}></Route>
            </Route>
            <Route path="/notice" component={Notice}>

            </Route>
            <Route path="/query" component={Record}>

            </Route>
            <Route path="/mine">
                
                <IndexRoute component={UserCenter}></IndexRoute>
                <Route path="recharge" component={AccountRecharge}></Route>
                <Route path="cash" component={AccountWithCash} />
                <Route path="loginpwd" component={ModifyLoginPwd}></Route>
                <Route path="capitalpwd" component={ModifyCapitalPwd}></Route>
                <Route path="setpwd" component={SetCapitalPwd}></Route>

                <Route path="card" component={BindCard}></Route>
                <Route path="agent" component={AgentManage} />
                {/*<Route path="" component={}></Route>
                <Route path="" component={}></Route>
                <Route path="" component={}></Route>*/}
            </Route>
        </Route>
    </Route>
);
export default routes;