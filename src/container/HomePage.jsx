import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
class HomePage extends Component {
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
        const {children} = this.props;
        return( <div>
            {children}
            <div className="footer">
                <Link to="/home">
                    <div className="hall">
                        <i></i>
                        <span>购彩大厅</span>
                    </div>
                </Link>
                <Link to="/home/notice">
                    <div className="notice">
                        <i></i>
                        <span>开奖公告</span>
                    </div>
                </Link>
                <Link to="/home/record">
                    <div className="record">
                        <i></i>
                        <span>记录查询</span>
                    </div>
                </Link>
                <Link to="/home/account">
                    <div className="account">
                        <i></i>
                        <span>我的账户</span>
                    </div>
                </Link>
            </div>
        </div>)
    }
}
export default connect()(HomePage);