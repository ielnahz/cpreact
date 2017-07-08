import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import RecordItem from '../components/RecordItem'
import '../css/record.css';

class Record extends Component {
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
        let recordlist = [];
        return( <div className="record">
            <div className="recordtype">
                <ul className="clear">
                    <li>投注</li>
                    <li>追号</li>
                    <li>充值</li>
                    <li>提现</li>
                </ul>
            </div>
            <div className="recordtime">
                <ul className="clear">
                    <li>本日</li>
                    <li>本周</li>
                    <li>本月</li>
                </ul>
            </div>
            <div className="resultlist">
                {
                    recordlist.map((item, index) => {
                        return <RecordItem orderId={item.orderId} orderTime={item.orderTime} bank={item.bank} way={item.way} money={item.money}></RecordItem>
                    })
                }
            </div>
            <div className="toast">
                没有更多数据了
            </div>
        </div>)
    }
}
export default connect()(Record);