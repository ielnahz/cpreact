import React, {Component} from 'react';

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
        const {num} = this.props;
        let numarr = num.split('');
        return( <div className="msg clear">
            {
                numarr.map((numitem, index) => {
                    return <div key={index} className="numitem fl">{numitem}</div>
                })
            }
        </div>)
    }
}
export default Lottery;