import React, {Component} from 'react';

class AllLotteryItem extends Component {
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
        const {icon, name} = this.props;
        return( <div className="mylotteryitem">
            <div className={'mylotteryicon ' + icon}></div>
            <div className="mylotteryname">{name}</div>
        </div>)
    }
}
export default AllLotteryItem;