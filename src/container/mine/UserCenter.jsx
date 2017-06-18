import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router';
import '../../css/mine.css';
class UserCenter extends Component {
    constructor(props){
        super(props);
            this.state = {};
    }
        
    componentWillMount() {}
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    render() {
        return (
            <div>
                <div className="mine-content">
                    <div className="mine-title">
                        <div className="mine-title-name">haha520</div>
                        <div className="mine-title-money">0.000</div>
                    </div>
                    <ul className="mine-content-ul">
                        <Link to="/mine/recharge">
                            <li className="ul-text">
                                <img src={require('../../img/withdrawals.png')} className="ul-icon" />
                                <span>充值</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                        <Link to="/mine/cash">
                            <li className="ul-text last">
                                <img src={require('../../img/money.png')} className="ul-icon" />
                                <span>提现</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                    </ul>
                    <ul className="mine-content-ul">
                        <Link to="/mine/loginpwd">
                            <li className="ul-text">
                                <img src={require('../../img/lock.png')} className="ul-icon" />
                                <span>登录密码修改</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                        <Link to="/mine/capitalpwd">
                            <li className="ul-text">
                                <img src={require('../../img/lock.png')} className="ul-icon" />
                                <span>资金密码修改</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                        <Link to="/mine/setpwd">
                            <li className="ul-text last">
                                <img src={require('../../img/lock.png')} className="ul-icon" />
                                <span>设置密码修改</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                    </ul>
                    <ul className="mine-content-ul">
                        <Link to="/mine/card">
                            <li className="ul-text">
                                <img src={require('../../img/agent.png')} className="ul-icon" />
                                <span>银行卡管理</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                        <Link to="/mine/agent">
                            <li className="ul-text last">
                                <img src={require('../../img/bankCard.png')} className="ul-icon" />
                                <span>代理管理</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                    </ul>
                    <ul className="mine-content-ul">
                        <Link to="">
                            <li className="ul-text">
                                <img src={require('../../img/form.png')} className="ul-icon" />
                                <span>资金明细</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                        <Link to="">
                            <li className="ul-text">
                                <img src={require('../../img/form.png')} className="ul-icon" />
                                <span>盈亏报表</span>
                                <img src={require('../../img/to.png')} className="ul-to" />
                            </li>
                        </Link>
                        <Link to="/mine">
                            <li className="ul-text last">      
                                <img src={require('../../img/form.png')} className="ul-icon" />                                                           
                                <span>团队报表</span>
                                <img src={require('../../img/to.png')} className="ul-to"/>                         
                            </li>
                        </Link>  
                    </ul>
                    <button className="mine-button">退出登录</button>
                </div>
            </div>
        );
    }
}
export default connect()(UserCenter);