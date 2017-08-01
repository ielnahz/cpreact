import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';

class Betting_duplex extends Component {
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
        const {value} = this.props;
        return (<div className="balls">
                <span name="PCK_S_LAB">{value}</span>

                <div className="balls-bar">
                    <ul className="balls-l">
                        <li name="PCK_S_BALL"><span>01</span></li>
                        <li name="PCK_S_BALL"><span>02</span></li>
                        <li name="PCK_S_BALL"><span>03</span></li>
                        <li name="PCK_S_BALL"><span>04</span></li>
                        <li name="PCK_S_BALL"><span>05</span></li>
                        <li name="PCK_S_BALL"><span>06</span></li>
                        <li name="PCK_S_BALL"><span>07</span></li>
                        <li name="PCK_S_BALL"><span>08</span></li>
                        <li name="PCK_S_BALL"><span>09</span></li>
                        <li name="PCK_S_BALL"><span>10</span></li>
                        <li name="PCK_S_BALL"><span>11</span></li>
                    </ul>
                    <ul className="balls-r" style={{display: 'block'}}>
                        <li name="QS_TAG"><span>全</span></li>
                        <li name="QS_TAG"><span>大</span></li>
                        <li name="QS_TAG"><span>小</span></li>
                        <li name="QS_TAG"><span>奇</span></li>
                        <li name="QS_TAG"><span>偶</span></li>
                        <li name="QCK_CL_RS"><span>清</span></li>
                    </ul>
                </div>
            </div>);
    }
}
export default Betting_duplex;