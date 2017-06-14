import React, {Component} from 'react';
import Lottery from '../../components/Lottery';

class Msg extends Component {
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
        const {lotteryName, lotteryPeriods, lotteryNum, username, account} = this.props;
        return( <div className="msg">
            <div className="lotterymsg">
                <div className="lotteryName">{lotteryName}</div>
                <div className="lotteryPeriods">{lotteryPeriods}</div>
                <Lottery num="lotteryNum"></Lottery>
            </div>
            <div className="account">
                <div className="username">{username}</div>
                <div className="account">{account}</div>
            </div>
        </div>)
    }
}
export default Msg;