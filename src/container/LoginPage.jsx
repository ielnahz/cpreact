import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { fetchLoginData } from '../actions/loginAction';
import "../css/login.css";
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: ''
        };
    }
    componentWillMount() {
    }
    componentDidMount(){
    }
    componentDidUpdate() {
        const { userinfo } = this.props;
        console.log(userinfo);
    }
    componentWillUnmount(){
    }

    loginHandle(){
        const { store } = this.context;
        const { userName, pwd } = this.state;
        console.log(store);
        store.dispatch(fetchLoginData(userName, pwd));
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
        const { userName, pwd } = this.state;
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
        </div>)
    }
}
function mapStateToProps(state) {
    const {loginReducer} = state;
    return {
        userinfo: loginReducer.userinfo
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