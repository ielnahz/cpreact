import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
class AccountPage extends Component {
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
    shouldComponentUpdate(nextprops, nextstate) {

    }

    render() {
        return( <div>
            我的账户
        </div>)
    }
}
export default connect()(AccountPage);