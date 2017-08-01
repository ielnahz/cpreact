import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link, hashHistory } from 'react-router';

class Betting_danshi extends Component {
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
            <textarea className="textarea" id="textarea"></textarea>
            <b id="single-btn">添加号码</b>
        </div>);
    }
}
export default Betting_danshi;