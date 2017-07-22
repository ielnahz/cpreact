import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import { fetchLoginData } from '../actions/loginAction';
import "../css/login.css";
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: '',
            showToast: false,
            text: ''
        };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.loginstate) {
            hashHistory.push('/home');
        } else if(nextProps.errormsg) {
            this.showToast(nextProps.errormsg);
        }
    }
    componentWillMount() {
    }
    componentDidMount(){
    }
    componentDidUpdate() {
    }
    componentWillUnmount(){
    }

    loginHandle(){
        const { store } = this.context;
        const { userName, pwd } = this.state;
        if(!userName || !pwd){
            this.showToast('用户名和密码不能为空');
            return;
        }
        store.dispatch(fetchLoginData(userName, pwd));
    }

    showToast(text){
        this.setState({
            showToast: true,
            text : text
        });
        setTimeout(()=>{
            this.setState({
                showToast: false,
                text: ''
            });
        }, 2000);
    }

    setUserName(e){
        let userName = e.target.value;
        this.setState({
            userName: userName
        })
    }

    setPwd(e){
        let pwd = e.target.value;
        this.setState({
            pwd: pwd
        })
    }

    render() {
        const { userName, pwd, text, showToast } = this.state;
        return(<div className="logo-content">
            <div className="logo">
                <img src={require('../img/login.png')} className="logo-img"/>
            </div>
            <div className="loginPage">
                <div className="username">
                    {/*<i className="username-icon"></i>*/}
                    <img src={require('../img/logo-mine.png')} className="username-icon"/>
                    <input type="text" name="username" placeholder="请输入账户名称" className="username-input" onChange={(ev)=>this.setUserName(ev)} value={userName}/>
                </div>
                <div className="password">
                    {/*<i className="password-icon"></i>*/}
                    <img src={require('../img/logo-lock.png')} className="password-icon"/>
                    <input type="password" name="password" placeholder="请输入账户密码" className="password-input" onChange={(ev)=>this.setPwd(ev)} value={pwd}/>
                </div>
                <div className="route">
                    <input type="text" className="route-input" defaultValue="线路一"/>
                </div>
            </div>
            <div onClick={()=>{this.loginHandle()}} className="login-Submit-button">登录</div>

            <div className="forgetpwd">忘记密码？</div>
            <div className="toast" style={{display: showToast? 'block' : 'none'}}>{text}</div>
        </div>)
    }
}
function mapStateToProps(state) {
    const {loginReducer} = state;
    return {
        userinfo: loginReducer.userinfo,
        errormsg: loginReducer.errormsg,
        loginstate: loginReducer.loginstate
    };
}
LoginPage.contextTypes = {
    store: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    return {
        getLoginData: bindActionCreators(fetchLoginData, dispatch)
    }
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginPage);