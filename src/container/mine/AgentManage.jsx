import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import '../../css/mine/ModifyCapitalPwd.css';
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
                <header className="mine-header-return">
                    <Link to=""><i className="icon-return">o</i></Link>
                    <div>代理管理</div>
                </header>
                <div className="mine-content">
                    <div className="mine-input-box">
                        <div className="mine-input-text">注册会员</div>
                        <div></div>
                    </div>         
                    <div className="mine-input-box">
                        <div className="mine-input-text">用户名</div>
                        <input type="text"　placeholder="请输入用户名" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">昵称</div>
                        <input type="text"　placeholder="请输入昵称" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">用户密码</div>
                        <input type="text"　placeholder="请输入用户密码" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">确认密码</div>
                        <input type="text"　placeholder="请确认用户密码" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">返点</div>
                        <input type="text"　placeholder="请输入返点，返点0-7.80" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">棋牌返点</div>
                        <input type="text" placeholder="请输入返点，返点0-0.00" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">真人返点</div>
                        <input type="text" placeholder="请输入返点，返点0-0.00" className="mine-input" />
                    </div>
                    <button className="mine-input-button">提交</button>
                </div>
                
            </div>
        );
    }
}
export default connect()(BindCard);