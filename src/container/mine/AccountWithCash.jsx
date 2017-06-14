import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
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
                <header>
                    <Link to=""><i></i></Link>
                    <div>账户提现</div>
                </header>
                <div>         
                    <div>
                        <div>提现银行</div>
                        <input type="text"　/>
                    </div>
                    <div>
                        <div>提现金额</div>
                        <input type="text"　placeholder="请输入提现金额"/>
                    </div>
                    <div>
                        <div>资金密码</div>
                        <input type="text"　placeholder="请输入资金密码"/>
                    </div>
                </div>
                <button>提交</button>
            </div>
        );
    }
}
export default connect()(AccountWithCash);