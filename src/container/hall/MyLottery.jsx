import React, {Component} from 'react';
import AllLotteryItem from '../../components/AllLotteryItem';

class MyLottery extends Component {
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
        const {mylotterylist} = this.props;
        return( <div className="mylottery">
            <div className="mylotteryname">我的彩种</div>
            <div className="mylotterylist">
                {
                    mylotterylist.map((value, index) => {
                        return (<AllLotteryItem icon="" name=""></AllLotteryItem>)
                    })
                }
            </div>
            <div className="addMyLottery">
                <div className="addlotteryicon"></div>
                <div className="addlotteryname">自定义彩种</div>
            </div>
        </div>)
    }
}
export default MyLottery;