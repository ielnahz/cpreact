import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router';
import './header.css';
const activeText = ['富博娱乐', '开奖公告', '记录查询', '我的'];
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }
        
    componentWillMount() {
        const {numTab} = this.props;
        console.log('numTab', activeText[numTab]);
        this.setState({
            text: activeText[numTab]
        });
    }
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
    }
    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.numTab !== this.props.numTab) {
            this.setState({
                text: activeText[nextProps.numTab]
            });
        }
    }
    render() {
        const {text} = this.state;
        return (
            <div className="lottery-header">
                <div>{text}</div>
                <img src={require('../../img/service.png')} />
            </div>
        );
    }
}
export default connect()(Header);