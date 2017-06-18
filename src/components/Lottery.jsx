import React, {Component} from 'react';
import '../css/public.css';
class Lottery extends Component {
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
        const {num, bg} = this.props;
        // let numarr = num.split('');
        return( <div className="msg clear">
            {
                num.map((numitem, index) => {
                    return <div key={index} className={`numitem fl ${bg ? 'bgRed': 'bgYellow'}`}>{numitem}</div>
                })
            }
        </div>)
    }
}
export default Lottery;