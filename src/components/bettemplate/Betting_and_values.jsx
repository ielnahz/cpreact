import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';

class Betting_11x5 extends Component {
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
        const {value, num} = this.props;
        return (<div className="balls">
                <span name="PCK_S_LAB">{value}</span>

                <div className="balls-bar">
                    <ul className="balls-l">
                        {
                            num.map((item, index)=>{
                                return <li key={index}><span>{item}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>);
    }
}
export default Betting_11x5;