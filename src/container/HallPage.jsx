import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import Msg from './hall/Msg';
import MyLottery from './hall/MyLottery';

let allLottery = [{
    name: '重庆时彩'
}];
class HallPage extends Component {
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

    render() {
        return( <div className="hall">
            <header className="title">
                <div className="titlename">购彩大厅</div>
                <i className="service-icon"></i>
            </header>
            <div className="content">
                <Msg></Msg>
                <MyLottery mylotterylist={allLottery}></MyLottery>
            </div>
        </div>)
    }
}
export default connect()(HallPage);