import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router';
import '../../css/mine.css';
import HeaderBack from '../header/HeaderBack';
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
    changeBack() {
        hashHistory.pushState(null, '/mine');
        console.log('dianji');
    }
    render() {
        return( 
            <div>
                <HeaderBack text='绑定银行卡' onClick={() => {this.changeBack()}}></HeaderBack>
                <div className="mine-content">         
                    <div className="mine-input-box">
                        <div className="mine-input-text">真实姓名</div>
                        <input type="text"　placeholder="请输入真实姓名" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">开户银行</div>
                        <input type="text"　placeholder="农业银行" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">开户支行</div>
                        <input type="text"　placeholder="请输入开户支行" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">开户省份</div>
                        <input type="text"　placeholder="北京" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">开户城市</div>
                        <input type="text"　placeholder="北京市" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">银行卡号</div>
                        <input type="text" placeholder="请输入银行卡号" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">资金密码</div>
                        <input type="text" placeholder="请输入资金密码" className="mine-input"/>
                    </div>
                    <button className="mine-input-button">绑定</button>
                </div>
                
            </div>
        );
    }
}
export default connect()(AgentManage);