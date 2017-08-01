import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import { fetchBetData } from '../../actions/betAction';
import Lottery from '../../components/Lottery';
import HeaderBack from '../header/HeaderBack';
import BetDetail from './BetDetail';
import imglist from '../../util/lotteryImg';
import {cut} from '../../util/global';
import '../../css/bet.css';
class BetPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            l_id : '',
            kindSelectPage: false,
            kinds : [],
            nowBKind : '',
            nowSKind : {},
            play_kind : {},
            nowPlayKind : [],
            tpl:'',
            data: {}
        };
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
        const { play_kind } = nextProps;
        if(play_kind !== this.props.play_kind && play_kind.length > 0) {
            let playKind = this.dealKind(play_kind);

            console.log(playKind);
            console.log(playKind.kind[playKind.type[0]]);
            this.chooseSKind(playKind.kind[playKind.type[0]][0]);
            console.log('------------');
            this.setState({
                kinds : playKind.type,
                nowBKind : playKind.type[0],
                play_kind : playKind.kind,
                nowPlayKind : playKind.kind[playKind.type[0]]
            }); 
        }
    }
    componentDidMount() {
        const { store } = this.context;
        let l_id = this.props.location.query.id;
        store.dispatch(fetchBetData(l_id));

        this.setState({
            l_id : l_id
        });
    }
    dealKind(kind){
        let kindobj = {
            type: [],
            kind: {}
        }
        for(let i=0; i<kind.length; i++) {
            if(kindobj.type.indexOf(kind[i].pname)<0) {
                kindobj.type.push(kind[i].pname);
                kindobj.kind[kind[i].pname] = [];
            }
            kindobj.kind[kind[i].pname].push(kind[i]);
        }
        return kindobj;
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }
    changeBack() {
        history.back();
    }
    hideSelectPage(){
        this.setState({
            kindSelectPage: false
        });
    }
    showSelectPage(){
        this.setState({
            kindSelectPage: true
        });
    }
    chooseKind(kind) {
        const { play_kind } = this.state;
        this.chooseSKind(play_kind[kind][0]);
        this.refs.scrollkind.scrollLeft = 0;
        this.setState({
            nowBKind : kind,
            nowPlayKind : play_kind[kind],
            kindSelectPage : false
        });
    }
    chooseSKind(item) {
        console.log(item);
        let obj = cut(item.id);

        this.setState({
            nowSKind: item,
            tpl: obj.tpl,
            data: obj.data
        });
    }
    render() {
        const {kinds, nowBKind, nowSKind, play_kind, nowPlayKind, kindSelectPage, tpl, data} = this.state;
        const {lottery} = this.props;
        console.log(nowPlayKind);
        console.log('------------');
        return (
            <div className="betMain">
                <HeaderBack text={lottery.name} onClick={() => {this.changeBack()}}></HeaderBack>
                <div className="bet-menu">
                    <span className="bet-play" onClick={()=>this.showSelectPage()}>{nowBKind}</span>
                    <div ref="scrollkind" className="scroll-skind">
                        {
                            nowPlayKind.map((item, index)=>{
                                return <a key={index} data-id={item.id} className={'mui-control-item ' + (item.id === nowSKind.id ? 'mui-active' : '')} onClick={()=>this.chooseSKind(item)}>{item.name}</a>
                            })
                        }
                    </div>
                </div>
                <BetDetail tpl={tpl} data={data}></BetDetail>

                <div className="kindSelect" style={{display: kindSelectPage ? 'block' : 'none'}}>
                    <div className="lottery-header-back kindSelectTitle">
                        <div>选择玩法</div>
                        <img src={require('../../img/prev.png')} onClick={() => {this.hideSelectPage()}}/>
                    </div>
                    <ul className="play_label">
                        {
                            kinds.map((item, index)=>{
                                return <li key={item} onClick={()=>this.chooseKind(item)}><span>{item}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { betReducer } = state;
    return {
        lottery: betReducer.betData.lottery || {},
        lottery_result: betReducer.betData.lottery_result || {},
        nowExpect: betReducer.betData.nowExpect || {},
        play_kind: betReducer.betData.play_kind || {},
        prev_expect: betReducer.betData.prev_expect || {},
        time: betReducer.betData.time || {}
    };
}
BetPage.contextTypes = {
    store: React.PropTypes.object
};
function mapDispatchToProps(dispatch) {
    return {
        getBetData: bindActionCreators(fetchBetData, dispatch)
    }
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BetPage);
