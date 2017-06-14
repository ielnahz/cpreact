import React,{Component} from 'react';
import { connect } from 'react-redux';
// import Header from './Header';
// import Container from './Container';
// import Ribbon from './Ribbon';

class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    getChildContext() {
        return { urlQuery: this.props.location.query }
    }
    render(){
        const {children} = this.props;
        return(
            <div>
                {children}
            </div>
        )
    }
};

export default connect()(App);
App.childContextTypes={
    urlQuery:React.PropTypes.object
};