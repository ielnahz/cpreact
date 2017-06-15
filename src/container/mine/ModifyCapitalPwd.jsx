import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import '../../css/mine/ModifyCapitalPwd.css';
class ModifyCapitalPwd extends Component {
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
                    <Link to=""><i className="icon-return">返回</i></Link>
                    <div>修改资金密码</div>
                </header>
                <div className="mine-content">
                    <div className="mine-input-box">
                        <div className="mine-input-text">原资金密码</div>
                        <input type="text"　placeholder="请输入原资金密码" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">新资金密码</div>
                        <input type="text"　placeholder="请输入新资金密码" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">确认资金密码</div>
                        <input type="text"　placeholder="请确认新资金密码" className="mine-input" />
                    </div>
                    <button className="mine-input-button">提交</button>
                </div>  
            </div>
        );
    }
}
export default connect()(ModifyCapitalPwd);