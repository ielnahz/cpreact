import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import { fetchHomeData } from '../../actions/homeAction';
import Lottery from '../../components/Lottery';
import HeaderBack from '../header/HeaderBack';
import imglist from '../../util/lotteryImg';
class HallAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: [true, false, false, false],
            myLottery: [],
            lastLottery: []
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
        const { lottery } = this.props;
        if(lottery.length === 0) {
            store.dispatch(fetchHomeData());
        }
    }
    componentDidUpdate() {
        const { lottery, lotteryJson } = this.props;
        const { myLottery, lastLottery } = this.state;
        if(lottery.length > 0 && myLottery.length===0 && lastLottery.length===0) {
            let myLotterylist=[], lastLotterylist=[];
            let storage = window.localStorage;
            if(storage.myLottery) {
                let storageLottery = storage.myLottery.split(',');
                for(let i=0; i<storageLottery.length; i++) {
                    myLotterylist.push(lotteryJson[storageLottery[i]]);
                }
                for(let i=0; i<lottery.length; i++) {
                    let flag = true;
                    for(let j=0; j<myLotterylist.length; j++) {
                        if(lottery[i].l_id === myLotterylist[j].l_id) {
                            flag = false;
                            break;
                        }
                    }
                    if(flag) {
                        lastLotterylist.push(lottery[i]);
                    }
                }
                this.setState({
                    myLottery: myLotterylist,
                    lastLottery: lastLotterylist
                })
            } else {
                this.setState({
                    myLottery: [],
                    lastLottery: lottery
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
    changeBack() {
        history.back();
    }
    removeLottery(item){
        const { myLottery, lastLottery } = this.state;
        let storage = window.localStorage;
        let lotteryList = storage.myLottery.split(',');
        let moveItem = [];
        for(let i=0; i<myLottery.length; i++) {
            if(myLottery[i].l_id == item.l_id) {
                moveItem = myLottery.splice(i, 1);
                break;
            }
        }
        lastLottery.push(moveItem[0]);

        for(let i=0; i<lotteryList.length; i++) {
            if(lotteryList[i] === item.l_id) {
                lotteryList.splice(i, 1);
            }
        }
        storage.myLottery = lotteryList.join(',');
        this.setState({
            myLottery: myLottery,
            lastLottery: lastLottery
        });
    }
    addLottery(item){
        const { myLottery, lastLottery } = this.state;
        let storage = window.localStorage;
        let moveItem = [];
        for(let i=0; i<lastLottery.length; i++) {
            if(lastLottery[i].l_id == item.l_id) {
                moveItem = lastLottery.splice(i, 1);
                break;
            }
        }
        myLottery.push(moveItem[0]);
        storage.myLottery += (',' + item.l_id);
        console.log(storage.myLottery);
        this.setState({
            myLottery: myLottery,
            lastLottery: lastLottery
        });
    }
    render() {
        const {active, myLottery, lastLottery} = this.state;
        return (
            <div className="hall-content">
                <HeaderBack text='自定义您的彩种' onClick={() => {this.changeBack()}}></HeaderBack>
                <div className="hall-add-ticket">已选的彩种</div>
                <ul className="hall-mine-ticket-img clear">
                {
                    myLottery.map((item, index) => {
                        let itemImg = imglist[item.name] ? require('../../img/' + imglist[item.name]) : '';
                        return <li key={index}>
                            <img src={itemImg}/>
                            <div className="tickect-close-name">
                                <div className="tickect-name-title">{item.name}</div>
                                <div className="tickect-name-text"></div>
                            </div>
                            <div className="tickect-close-button" onClick={()=>this.removeLottery(item)}>x</div>
                        </li>
                    })
                }
                </ul>
                <div className="hall-add-ticket">待添加的彩种的彩种</div>
                <ul className="hall-mine-ticket-img clear">
                {
                    lastLottery.map((item, index) => {
                        let itemImg = imglist[item.name] ? require('../../img/' + imglist[item.name]) : '';
                        return <li key={index}>
                            <img src={itemImg}/>
                            <div className="tickect-close-name">
                                <div className="tickect-name-title">{item.name}</div>
                                <div className="tickect-name-text"></div>
                            </div>
                            <div className="tickect-add-button" onClick={()=>this.addLottery(item)}>+</div>
                        </li>
                    })
                }
                </ul>
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    const { homeReducer } = state;
    return {
        lotteryJson: homeReducer.lotteryJson,
        lottery: homeReducer.lottery
    };
}
HallAdd.contextTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HallAdd);

