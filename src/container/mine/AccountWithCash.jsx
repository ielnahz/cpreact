import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router';
import HeaderBack from '../header/HeaderBack';
import '../../css/mine.css';
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
    changeBack() {
        hashHistory.pushState(null, '/mine');
        console.log('dianji');
    }
    render() {
        return( 
            <div>
                <HeaderBack text='账户提现' onClick={() => {this.changeBack()}}></HeaderBack>
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