import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
class LoginPage extends Component {
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
    shouldComponentUpdate(nextprops, nextstate) {

    }

    render() {
        return( <div>
            <div className="logo"></div>
            <div className="loginPage">
                <div className="username">
                    <i className="username-icon"></i>
                    <input type="text" name="username" value=""/>
                </div>
                <div className="password">
                    <i className="password-icon"></i>
                    <input type="password" name="password" value=""/>
                </div>
                <div className="route"></div>
            </div>
            <div onClick={()=>{this.loginHandle()}}>登录</div>
            <div className="forgetpwd">忘记密码？</div>
        </div>)
    }
}
function mapStateToProps(state) {
    const {homeReducer} = state;
    return {
    };
}
LoginPage.contextTypes = {
    store: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    return {
    }
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginPage);