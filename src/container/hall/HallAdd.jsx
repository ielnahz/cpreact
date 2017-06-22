import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link, hashHistory } from 'react-router';
import Lottery from '../../components/Lottery';
import HeaderBack from '../header/HeaderBack';
class HallAdd extends Component {
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
    changeBack() {
        hashHistory.pushState(null, '/home');
        console.log('dianji');
    }
    render() {
        const {active} = this.state;
        const numM = [9,7,7,6,1];
        return (
            <div className="hall-content">
                <HeaderBack text='自定义您的彩种' onClick={() => {this.changeBack()}}></HeaderBack>
                <div className="hall-add-ticket">已选的彩种</div>
                <ul className="hall-mine-ticket-img clear">
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        {/*<div className="tickect-close-button">
                            <img src={require('../../img/close-button.png')} className="tickect-close-button-img"/>
                        </div>*/}
                        <div className="tickect-close-button">x</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-close-button">x</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-close-button">x</div>
                    </li>
                     <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-close-button">x</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-close-button">x</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-close-button" onClick={() => {alert(1);}}>x</div>
                    </li>
                </ul>
                <div className="hall-add-ticket">待添加的彩种的彩种</div>
                <ul className="hall-mine-ticket-img clear">
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-add-button" onClick={() => {alert(1);}}>+</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-add-button">+</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-add-button">+</div>
                    </li>
                     <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-add-button">+</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-add-button">+</div>
                    </li>
                    <li>
                        <img src={require('../../img/tickect-fuCai.png')} />
                        <div className="tickect-close-name">
                            <div className="tickect-name-title">重庆时时彩</div>
                            <div className="tickect-name-text">中奖率高 玩法多样</div>
                        </div>
                        <div className="tickect-add-button">+</div>
                    </li>
                </ul>
            </div>
           
        );
    }
}
export default connect()(HallAdd);