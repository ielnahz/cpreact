import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
class BindCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
    }
    componentDidMount(){
    }
    componentDidUpdate() {
    }
    componentWillUnmount(){
    }

    render() {
        return( 
            <div>
                <header>
                    <Link to=""><i></i></Link>
                    <div>代理管理</div>
                </header>
                <div>
                    <div>
                        <div>注册会员</div>
                        <div></div>
                    </div>         
                    <div>
                        <div>用户名</div>
                        <input type="text"　placeholder="请输入用户名"/>
                    </div>
                    <div>
                        <div>昵称</div>
                        <input type="text"　placeholder="请输入昵称"/>
                    </div>
                    <div>
                        <div>用户密码</div>
                        <input type="text"　placeholder="请输入用户密码"/>
                    </div>
                    <div>
                        <div>确认密码</div>
                        <input type="text"　placeholder="请确认用户密码"/>
                    </div>
                    <div>
                        <div>返点</div>
                        <input type="text"　placeholder="请输入返点，返点0-7.80"/>
                    </div>
                    <div>
                        <div>棋牌返点</div>
                        <input type="text" placeholder="请输入返点，返点0-0.00"/>
                    </div>
                    <div>
                        <div>真人返点</div>
                        <input type="text" placeholder="请输入返点，返点0-0.00"/>
                    </div>
                </div>
                <button>提交</button>
            </div>
        );
    }
}
export default connect()(BindCard);