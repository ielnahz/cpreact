import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import { fetchHomeData } from '../../actions/homeAction';
import { fetchNoticeData } from '../../actions/noticeAction';
import Lottery from '../../components/Lottery';
import Header from '../header/Header';
import imglist from '../../util/lotteryImg';
import '../../css/home.css';
class Hall extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: [true, false, false, false],
            myLottery: []
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
    componentDidMount() {
        const { store } = this.context;
        store.dispatch(fetchHomeData());
        store.dispatch(fetchNoticeData());
    }
    componentDidUpdate() {
        const { lottery, lotteryJson } = this.props;
        const { myLottery } = this.state;
        if(lottery.length > 0 && myLottery.length === 0) {
            let myLotterylist = [],
                storage = window.localStorage;
            console.log(storage.myLottery);
            if(storage.myLottery) {
                let storageLottery = storage.myLottery.split(',');
                for(let i=0; i<storageLottery.length; i++) {
                    myLotterylist.push(lotteryJson[storageLottery[i]]);
                }
                this.setState({
                    myLottery: myLotterylist
                })
            } else {
                myLotterylist.push(lottery[0]);
                storage['myLottery'] = lottery[0].l_id
                this.setState({
                    myLottery: myLotterylist
                })
            }
        }
    }
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
        hashHistory.push('/home/add');
    }
    toBet(id) {
        hashHistory.push(`/home/bet/?id=${id}`);
    }
    render() {
        const {active, myLottery} = this.state;
        const { homeinfo, userinfo, noticeList, lottery } = this.props;
        let numM = noticeList[0] ? noticeList[0].result.split(',') : [];
        return (
            <div className="hall">
                <Header numTab='0'></Header>
                <div className="hall-content">
                    <span className="home-hall-bg" ></span>
                    <div className="home-hall-now">
                        <div className="left">
                            <div className="hall-name-title">
                                <span className="hall-name">{noticeList[0]?noticeList[0].name : ''}</span>
                                <span className="hall-num">{noticeList[0]?'第'+noticeList[0].expect+'期': ''}</span>
                            </div>
                            <Lottery num={numM} bg={true}></Lottery>
                        </div>
                        <div className="right">
                            <div className="hall-user">{userinfo.username}</div>
                            <div className="hall-money">{userinfo.use_money ? parseInt(userinfo.use_money).toFixed(3): ''}</div>
                        </div>
                    </div>
                    <div className="hall-mine-ticket">我的彩票</div>
                    <ul className="hall-mine-ticket-img clear">
                        {
                            myLottery.map((item, index) => {
                                let itemImg = imglist[item.name] ? require('../../img/' + imglist[item.name]) : '';
                                return <li key={index} onClick={()=>this.toBet(item.l_id)}>
                                    <img src={itemImg} />
                                    <span className="tickect-name">{item.name}</span>
                                </li>
                            })
                        }
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

function mapStateToProps(state) {
    const { homeReducer, noticeReducer } = state;
    return {
        userinfo: homeReducer.userinfo,
        homeinfo: homeReducer.homeinfo,
        lottery: homeReducer.lottery,
        lotteryJson: homeReducer.lotteryJson,
        noticeList: noticeReducer.noticeList
    };
}
Hall.contextTypes = {
    store: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    return {
        getHomeData: bindActionCreators(fetchHomeData, dispatch)
    }
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Hall);
