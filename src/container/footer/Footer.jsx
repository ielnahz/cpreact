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
                    <Link to="/hall">
                        <li>
                            <div className="lottery-footer-img">
                                {/*<img src="../../img/mine.png" alt=""/>*/}
                            </div>
                            <div className="lottery-footer-text">购彩大厅</div>
                        </li>
                    </Link>
                    <Link to="/notice">
                        <li>
                            <div className="lottery-footer-img"></div>
                            <div className="lottery-footer-text lottery-footer-text-active">开奖公告</div>
                        </li>
                    </Link>
                    <Link to="/query">
                        <li>
                            <div className="lottery-footer-img"></div>
                            <div className="lottery-footer-text">记录查询</div>
                        </li>
                    </Link>
                    <Link to="/mine">
                        <li>
                            <div className="lottery-footer-img"></div>
                            <div className="lottery-footer-text">我的账户</div>
                        </li>
                    </Link>
                    
                </ul>
            </div>
        );
    }
}
export default connect()(Footer);