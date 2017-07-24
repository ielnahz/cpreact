import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import { fetchRecordData } from '../actions/recordAction';
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
        const { store } = this.context;
        store.dispatch(fetchRecordData());
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

function mapStateToProps(state) {
    const {loginReducer, recordReducer} = state;
    return {
        userinfo: loginReducer.userinfo,
        recordList: recordReducer.recordList
    };
}
Record.contextTypes = {
    store: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    return {
        getRecordData: bindActionCreators(fetchRecordData, dispatch)
    }
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Record);
