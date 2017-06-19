import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router';
import HeaderBack from '../header/HeaderBack';
import '../../css/mine.css';
class AccountRecharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: [true, false]
        };
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
    }
    isActiveChange(n) {
        const {isActive} = this.state;
        if (isActive[n]) {
            return;      
        }
        const is = isActive.map(item => {
            return item = false;
        });
        is[n] = true;
        this.setState({
            isActive: is
        });
    }
    render() {
        const {isActive} = this.state;
        return( 
            <div>
                <HeaderBack text='账户充值' onClick={() => {this.changeBack()}}></HeaderBack>
                <ul className="mine-tabT ">
                    <li className={`mine-tabT-li ${isActive[0] ? 'mine-tabT-li-active': ''}`} onClick={() => {this.isActiveChange(0)}}>网银转账</li>
                    <li className={`mine-tabT-li ${isActive[1] ? 'mine-tabT-li-active': ''}`} onClick={() => {this.isActiveChange(1)}}>微信充值</li>
                </ul>
                {/**网银转账*/}
                <div className={`${isActive[0]?'mine-content mine-borderTop':'mine-isActive'}`}>         
                    <div className="mine-input-box">
                        <div className="mine-input-text">收款银行</div>
                        <input type="text" className="mine-input" defaultValue="招商银行"　/>
                        <button className="mine-copy-button">复制</button>
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">收款人姓名</div>
                        <input type="text"　defaultValue="马文玉" className="mine-input" />
                        <button className="mine-copy-button">复制</button>
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">收款人卡号</div>
                        <input type="text"　defaultValue="6214830108140053" className="mine-input" />
                        <button className="mine-copy-button">复制</button>
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">开户银行</div>
                        <input type="text"　defaultValue="南京支行" className="mine-input" />
                        <button className="mine-copy-button">复制</button>
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">充值金额</div>
                        <input type="text"　placeholder="单笔充值限额（最低50,最高100000）" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">附言</div>
                        <input type="text" defaultValue="943857" className="mine-input" />
                        <button className="mine-copy-button">复制</button>
                    </div>
                    <button className="mine-input-button">提交</button>
                </div>
                {/**微信充值*/}
                <div className={`${isActive[1]?'mine-content mine-borderTop':'mine-isActive'}`}>
                    <div className="mine-input-box">
                        <div className="mine-input-text">充值渠道</div>
                        <input type="text" defaultValue="微信充值" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">充值金额</div>
                        <input type="text" placeholder="单笔充值限额（最低20, 最高500）" className="mine-input" />
                    </div>
                    <button className="mine-input-button">提交</button>
                </div>
            </div>
        );
    }
}
export default connect()(AccountRecharge);