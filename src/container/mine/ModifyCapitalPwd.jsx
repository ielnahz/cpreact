import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
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

    render() {
        return( 
            <div>
                <header>
                    <Link to=""><i></i></Link>
                    <div>修改资金密码</div>
                </header>
                <div>
                    <div>
                        <div>原资金密码</div>
                        <input type="text"　placeholder="请输入原资金密码"/>
                    </div>
                    <div>
                        <div>新资金密码</div>
                        <input type="text"　placeholder="请输入新资金密码"/>
                    </div>
                    <div>
                        <div>确认资金密码</div>
                        <input type="text"　placeholder="请确认新资金密码"/>
                    </div>
                </div>
                <button>提交</button>
            </div>
        );
    }
}
export default connect()(ModifyCapitalPwd);