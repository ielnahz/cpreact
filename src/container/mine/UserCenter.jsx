import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
class UserCenter extends Component {
    constructor(props){
        super(props);
            this.state = {};
        }
    }
        
    componentWillMount() {}
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount(){
    }

    render() {
        return (
            <div>
                <header>
                    <div>我的</div>
                    <i></i>
                </header>
                <div>
                    <div>
                        <div>haha520</div>
                        <div>0.000</div>
                    </div>
                    <ul className="content-ul">
                        <Link to="">
                            <li className=''>
                                <i></i>
                                <span>充值</span>
                                <i></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>提现</span>
                                <i><Link to=''></Link></i>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>登录密码修改</span>
                                <i></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>资金密码修改</span>
                                <i></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>设置密码修改</span>
                                <i></i>
                            </li>
                        </Link>
                        
                    </ul>
                    <ul>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>银行卡管理</span>
                                <i></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>代理管理</span>
                                <i></i>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>资金明细</span>
                                <i></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>盈亏报表</span>
                                <i></i>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <i></i>
                                <span>团队报表</span>
                                <i></i>
                            </li>
                        </Link>  
                    </ul>
                </div>
            </div>
        );
    }
}
export default connect()(UserCenter);