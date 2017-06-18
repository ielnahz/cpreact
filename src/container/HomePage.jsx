import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import Footer from './footer/Footer';
import '../css/home.css';

class HomePage extends Component {
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
        const {children} = this.props;
        return(
            <div>
                {children}
            </div>
        );
    }
}
export default connect()(HomePage);