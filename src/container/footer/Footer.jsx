import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import './footer.css';
class Footer extends Component {
    constructor(props){
        super(props);
            this.state = {};
    }
        
    componentWillMount() {}
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="lottery-footer">
                <ul className="lottery-footer-ul">
                    <Link to="/home">
                        <li>
                            <div className="lottery-footer-img footer-hall">
                                <img src={require('../../img/mine.png')}/>
                            </div>
                            <div className="lottery-footer-text">购彩大厅</div>
                        </li>
                    </Link>
                    <Link to="/home/notice">
                        <li>
                            <div className="lottery-footer-img footer-notice"></div>
                            <div className="lottery-footer-text lottery-footer-text-active">开奖公告</div>
                        </li>
                    </Link>
                    <Link to="/home/query">
                        <li>
                            <div className="lottery-footer-img footer-record"></div>
                            <div className="lottery-footer-text">记录查询</div>
                        </li>
                    </Link>
                    <Link to="/home/mine">
                        <li>
                            <div className="lottery-footer-img footer-account"></div>
                            <div className="lottery-footer-text">我的账户</div>
                        </li>
                    </Link>
                    
                </ul>
            </div>
        );
    }
}
export default connect()(Footer);