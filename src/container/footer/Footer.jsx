import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import './footer.css';
class Footer extends Component {
    constructor(props){
        super(props);
    }
        
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    changeTab(n){
        this.props.changeTab(n);
    }
    render() {
        const {numTab, tabbarHide} = this.props;
        return (
            <div className="lottery-footer" style={{display: tabbarHide ? 'none' : 'block'}}>
                <ul className="lottery-footer-ul">
                    <Link to="/home">
                        <li onClick={()=>{this.changeTab(0)}}>
                            <div className="lottery-footer-img footer-hall">
                                <img src={`${numTab==0?require('../../img/hall-active.png'):require('../../img/hall.png')}`}/>
                            </div>
                            <div className={`lottery-footer-text ${numTab==0?'lottery-footer-text-active':''}`}>购彩大厅</div>
                        </li>
                    </Link>
                    <Link to="/notice">
                        <li onClick={()=>{this.changeTab(1)}}>
                            <div className="lottery-footer-img footer-notice">
                                <img src={`${numTab==1?require('../../img/notice-active.png'):require('../../img/notice.png')}`}/>
                            </div>
                            <div className={`lottery-footer-text ${numTab==1?'lottery-footer-text-active':''}`}>开奖公告</div>
                        </li>
                    </Link>
                    <Link to="/query">
                        <li onClick={()=>{this.changeTab(2)}}>
                            <div className="lottery-footer-img footer-record">
                                <img src={`${numTab==2?require('../../img/record-active.png'):require('../../img/record.png')}`}/>
                            </div>
                            <div className={`lottery-footer-text ${numTab==2?'lottery-footer-text-active':''}`}>记录查询</div>
                        </li>
                    </Link>
                    <Link to="/mine">
                        <li onClick={()=>{this.changeTab(3)}}>
                            <div className="lottery-footer-img footer-account">
                                <img src={`${numTab==3?require('../../img/mine-active.png'):require('../../img/mine.png')}`}/>
                            </div>
                            <div className={`lottery-footer-text ${numTab==3?'lottery-footer-text-active':''}`}>我的账户</div>
                        </li>
                    </Link>
                    
                </ul>
            </div>
           
        );
    }
}
export default connect()(Footer);