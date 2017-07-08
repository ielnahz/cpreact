import React, {Component} from 'react';

class RecordItem extends Component {
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
        const { orderId, orderTime, bank, way, money} = this.props;
        return( <div className="recorditem">
            <div className="dataline">订单编号：<span className="value">{orderId}</span></div>
            <div className="dataline">订单时间：<span className="value">{orderTime}</span>   充值银行：<span className="value">{bank}</span></div>
            <div className="dataline">充值方式<span className="value">{way}</span>   充值金额：<span className="value">{money}</span></div>
        </div>)
    }
}
export default RecordItem;
