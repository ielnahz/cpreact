import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router';
import '../../css/mine.css';
import HeaderBack from '../header/HeaderBack';
class ModifyLoginPwd extends Component {
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
                <HeaderBack text='修改登录密码' onClick={() => {this.changeBack()}}></HeaderBack>
                <div className="mine-content">
                    <div className="mine-input-box">
                        <div className="mine-input-text">原登录密码</div>
                        <input type="text"　placeholder="请输入原登录密码" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">新登录密码</div>
                        <input type="text"　placeholder="请输入新登录密码" className="mine-input" />
                    </div>
                    <div className="mine-input-box">
                        <div className="mine-input-text">确认登录密码</div>
                        <input type="text"　placeholder="请确认新登录密码" className="mine-input" />
                    </div>
                    <button className="mine-input-button">提交</button>
                </div>
                
            </div>
        );
    }
}
export default connect()(ModifyLoginPwd);