import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import { fetchNoticeData } from '../../actions/noticeAction';
import Lottery from '../../components/Lottery';
import Header from '../header/Header';
import '../../css/notice.css';
class Notice extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }       
    componentWillMount() {
    }
    componentDidMount() {
        const { store } = this.context;
        store.dispatch(fetchNoticeData());
    }
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    render() {
        const {noticeList} = this.props;
        return (
            <div className="notice">
                <Header numTab='1'></Header>
                <div className="notice-content">
                    <ul className="notice-content-ul">
                    {
                        noticeList.map((item, index)=>{
                            let num = item.result ? item.result.split(',') : [];
                            return <Link key={index}>
                                <li>
                                    <div className="message">
                                        <span className="message-name">{item.name}</span>
                                        <span className="message-num">第{item.expect}期</span>
                                    </div>
                                    <Lottery num={num} bg={false}></Lottery>
                                    <img src={require('../../img/to-black.png')} />
                                </li>
                            </Link>
                        })
                    }
                    </ul>           
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {loginReducer, noticeReducer} = state;
    return {
        userinfo: loginReducer.userinfo,
        noticeList: noticeReducer.noticeList
    };
}
Notice.contextTypes = {
    store: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    return {
        getNoticeData: bindActionCreators(fetchNoticeData, dispatch)
    }
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Notice);
