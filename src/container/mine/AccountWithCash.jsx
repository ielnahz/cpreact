import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import '../../css/mine/ModifyCapitalPwd.css';
class AccountWithCash extends Component {
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
                    <div>账户提现</div>
                </header>
                <div className="mine-content">         
                    <div className="mine-input-box">
                        <div className="mine-input-text">提现银行</div>
                        <input type="text" className="mine-input"　/>
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">提现金额</div>
                        <input type="text"　placeholder="请输入提现金额" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">资金密码</div>
                        <input type="text"　placeholder="请输入资金密码" className="mine-input" />
                    </div>
                    <button className="mine-input-button">提交</button>
                </div>
                
            </div>
        );
    }
}
export default connect()(AccountWithCash);