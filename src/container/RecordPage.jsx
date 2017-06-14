import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
class RecordPage extends Component {
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
            记录查询
        </div>)
    }
}
export default connect()(RecordPage);