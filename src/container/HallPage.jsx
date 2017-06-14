import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import Msg from './hall/Msg';
import MyLottery from './hall/MyLottery';

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

    render() {
        return( <div className="hall">
            <header className="title">
                <div className="titlename">购彩大厅</div>
                <i className="service-icon"></i>
            </header>
            <div className="content">
                <Slider></Slider>
                <Msg></Msg>
                <MyLottery></MyLottery>
            </div>
        </div>)
    }
}
export default connect()(HomePage);