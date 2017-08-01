import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';
import Betting_11x5 from '../../components/bettemplate/Betting_11x5';
import Betting_duplex from '../../components/bettemplate/Betting_duplex';
import Betting_danshi from '../../components/bettemplate/Betting_danshi';
import Betting_and_values from '../../components/bettemplate/Betting_and_values';
import Betting_special from '../../components/bettemplate/Betting_special';
class BetDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {

    }

    componentDidUpdate() {
    }
    componentWillUnmount() {
    }
    render() {
        const {tpl, data} = this.props;
        return (<div className="betbar">
            {(()=>{
                switch(tpl) {
                    case 'betting_11x5':
                        return data.list.map((item,index)=>{
                            return <Betting_11x5 key={index} value={item}></Betting_11x5>
                        })
                    case 'betting_duplex':
                        return data.list.map((item,index)=>{
                            return <Betting_duplex key={index} value={item}></Betting_duplex>
                        })
                    case 'betting_danshi':
                        return <Betting_danshi></Betting_danshi>
                    case 'betting_and_values':
                        return  data.list.map((item,index)=>{
                            return <Betting_and_values key={index} value={item} num={data.num}></Betting_and_values>
                        })
                    case 'betting_special':
                        return data.list.map((item,index)=>{
                            return <Betting_special key={index} value={item}></Betting_special>
                        })
                    default: null
                }
            })()}
        </div>);
    }
}
export default BetDetail;