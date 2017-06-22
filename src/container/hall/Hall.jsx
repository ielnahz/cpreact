import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link, hashHistory } from 'react-router';
import Lottery from '../../components/Lottery';
import Header from '../header/Header';
class Hall extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: [true, false, false, false]
        };
    }
        
    componentWillMount() {
        const {active} = this.state;
        const {numTab} = this.props;
        let activeNew = active.map(item => item = false);
        activeNew[numTab] = true;
        this.setState({
            active: activeNew
        });
    }
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    changeTab(n){
        const {active} = this.state;
        let activeNew = active.map(item => item = false);
        activeNew[n] = true;
        this.setState({
            active: activeNew
        });
        this.props.changeTab(n);
    }
    addTickect() {
        hashHistory.pushState(null, '/home/add');
    }
    render() {
        const {active} = this.state;
        const numM = [9,7,7,6,1];
        return (
            <div>
                <Header numTab='0'></Header>
                <div className="hall-content">
                    <img src={require('../../img/hall-header.png')} className="home-hall-bg" />
                    <div className="home-hall-now">
                        <div className="left">
                            <div className="hall-name-title">
                                <span className="hall-name">重庆时时彩</span>
                                <span className="hall-num">第20170617117期</span>
                            </div>
                            <Lottery num={numM} bg={true}></Lottery>
                        </div>
                        <div className="right">
                            <div className="hall-user">haha520</div>
                            <div className="hall-money">0.000</div>
                        </div>
                    </div>
                    <div className="hall-mine-ticket">我的彩票</div>
                    <ul className="hall-mine-ticket-img clear">
                        <li>
                            <img src={require('../../img/tickect-fuCai.png')} />
                            <span className="tickect-name">重庆时时彩</span>
                        </li>
                        <li>
                            <img src={require('../../img/tickect-fuCai.png')} />
                            <span className="tickect-name">重庆时时彩</span>
                        </li>
                        <li>
                            <img src={require('../../img/tickect-fuCai.png')} />
                            <span className="tickect-name">重庆时时彩</span>
                        </li>
                        <li>
                            <img src={require('../../img/tickect-fuCai.png')} />
                            <span className="tickect-name">重庆时时彩</span>
                        </li>
                        <li>
                            <img src={require('../../img/tickect-fuCai.png')} />
                            <span className="tickect-name">重庆时时彩</span>
                        </li>
                        <li>
                            <img src={require('../../img/tickect-fuCai.png')} />
                            <span className="tickect-name">重庆时时彩</span>
                        </li>
                    </ul>
                    <div className="tickect-add">
                        <div className="tickect-add-button" onClick={() => this.addTickect()}>
                            <img src={require('../../img/tickect-add.png')} />
                        </div>    
                    </div>
                </div>
            </div>
            
           
        );
    }
}
export default connect()(Hall);