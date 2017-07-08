import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import Lottery from '../../components/Lottery';
import '../../css/notice.css';
import Header from '../header/Header';
class Notice extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }       
    componentWillMount() {
    }
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    render() {
        return (
            <div>
                <Header numTab='1'></Header>
                <div className="notice-content">
                    <ul className="notice-content-ul">
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li>
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        <Link>
                            <li className="li-bottom">
                                <div className="message">
                                    <span className="message-name">重庆时时彩</span>
                                    <span className="message-num">第20170617056</span>
                                </div>
                                <Lottery num={[4,6,2,5,2]} bg={false}></Lottery>
                                <img src={require('../../img/to-black.png')} />
                            </li>
                        </Link>
                        
                    </ul>           
                </div>
            </div>
        );
    }
}
export default connect()(Notice);