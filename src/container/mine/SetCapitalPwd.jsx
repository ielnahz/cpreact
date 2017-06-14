import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
class SetCapitalPwd extends Component {
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
                    <div>设置资金密码</div>
                </header>
                <div>
                    <div>
                        <div>资金密码</div>
                        <input type="text"　placeholder="请输入资金密码"/>
                    </div>
                    <div>
                        <div>确认密码</div>
                        <input type="text"　placeholder="请确认资金密码"/>
                    </div>
                </div>
                <button>提交</button>
            </div>
        );
    }
}
export default connect()(SetCapitalPwd);