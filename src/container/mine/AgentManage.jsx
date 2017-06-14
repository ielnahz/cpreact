import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
class AgentManage extends Component {
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
                    <div>绑定银行卡</div>
                </header>
                <div>         
                    <div>
                        <div>真实姓名</div>
                        <input type="text"　placeholder="请输入真实姓名"/>
                    </div>
                    <div>
                        <div>开户银行</div>
                        <input type="text"　placeholder="农业银行"/>
                    </div>
                    <div>
                        <div>开户支行</div>
                        <input type="text"　placeholder="请输入开户支行"/>
                    </div>
                    <div>
                        <div>开户省份</div>
                        <input type="text"　placeholder="北京"/>
                    </div>
                    <div>
                        <div>开户城市</div>
                        <input type="text"　placeholder="北京市"/>
                    </div>
                    <div>
                        <div>银行卡号</div>
                        <input type="text" placeholder="请输入银行卡号"/>
                    </div>
                    <div>
                        <div>资金密码</div>
                        <input type="text" placeholder="请输入资金密码"/>
                    </div>
                </div>
                <button>绑定</button>
            </div>
        );
    }
}
export default connect()(AgentManage);