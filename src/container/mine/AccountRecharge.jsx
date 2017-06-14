import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
class AccountRecharge extends Component {
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
                    <div>账户充值</div>
                </header>
                <ul>
                    <li>网银转账</li>
                    <li>微信充值</li>
                </ul>
                {/**网银转账*/}
                <div>         
                    <div>
                        <div>收款银行</div>
                        <input type="text" value="招商银行"/>
                        <button>复制</button>
                    </div>
                    <div>
                        <div>收款人姓名</div>
                        <input type="text" value="马文玉"/>
                        <button>复制</button>
                    </div>
                    <div>
                        <div>收款人卡号</div>
                        <input type="text" value="6214830108140053"/>
                        <button>复制</button>
                    </div>
                    <div>
                        <div>开户银行</div>
                        <input type="text" value="南京支行"/>
                        <button>复制</button>
                    </div>
                    <div>
                        <div>充值金额</div>
                        <input type="text" placeholder="单笔充值限额（最低50,最高100000）"/>
                    </div>
                    <div>
                        <div>附言</div>
                        <input type="text" value="943857"/>
                        <button>复制</button>
                    </div>
                    <button>提交</button>
                </div>
                {/**微信充值*/}
                <div>
                    <div>
                        <div>充值渠道</div>
                        <input type="text" value="微信充值"/>
                    </div>
                    <div>
                        <div>充值金额</div>
                        <input type="text" placeholder="单笔充值限额（最低20, 最高500）"/>
                    </div>
                    <button>提交</button>
                </div>

            </div>
        );
    }
}
export default connect()(AccountRecharge);