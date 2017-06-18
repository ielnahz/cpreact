import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import './header.css';
class HeaderBack extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
        
    componentWillMount() {

    }
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    changeBack() {
        console.log('点击了 ');
        this.props.onClick();
    }
    render() {
        const {text} = this.props;
        return (
            <div className="lottery-header-back">
                <div>{text}</div>
                <img src={require('../../img/prev.png')} onClick={() => {this.changeBack()}}/>
            </div>
        );
    }
}
export default connect()(HeaderBack);