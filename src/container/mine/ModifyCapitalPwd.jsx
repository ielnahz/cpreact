import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router';
import '../../css/mine.css';
import HeaderBack from '../header/HeaderBack';
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
    changeBack() {
        hashHistory.pushState(null, '/mine');
        console.log('dianji');
    }
    render() {
        return( 
            <div>
                <HeaderBack text='修改资金密码' onClick={() => {this.changeBack()}}></HeaderBack>
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