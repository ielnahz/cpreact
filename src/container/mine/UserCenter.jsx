import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import '../../css/mine/UserCenter.css';
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
                <header className="mine-header">
                    <div className="mine-header-text">我的</div>
                    <i className="icon">o</i>
                </header>
                <div className="mine-content">
                    <div className="mine-title">
                        <div className="mine-title-name">haha520</div>
                        <div className="mine-title-money">0.000</div>
                    </div>
                    <ul className="mine-content-ul">
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">充值</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">提现</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                    </ul>
                    <ul className="mine-content-ul">
                        <Link to="">
                            <li className="ul-icon">
                                <i className="ul-icon"></i>
                                <div className="ul-text">登录密码修改</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li className="ul-icon">
                                <i className="ul-icon"></i>
                                <div className="ul-text">资金密码修改</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li className="ul-icon">
                                <i className="ul-icon"></i>
                                <div className="ul-text">设置密码修改</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        
                    </ul>
                    <ul className="mine-content-ul">
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">银行卡管理</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">代理管理</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                    </ul>
                    <ul className="mine-content-ul">
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">资金明细</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">盈亏报表</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i className="ul-icon"></i>
                                <div className="ul-text">团队报表</div>
                                <i className="ul-to">></i>
                            </li>
                        </Link>  
                    </ul>
                    <button className="mine-button">提交</button>
                </div>
            </div>
        );
    }
}
export default connect()(UserCenter);