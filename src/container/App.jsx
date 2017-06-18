import React,{Component} from 'react';
import { connect } from 'react-redux';
// import Header from './Header';
// import Container from './Container';
// import Ribbon from './Ribbon';
import Footer from './footer/Footer';
import Header from './header/Header';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numTab: 0
        };
    }
    componentDidMount(){
    }
    getChildContext() {
        return { urlQuery: this.props.location.query }
    }
    changeTab(num) {
        console.log('num', num);
        const {numTab} = this.state;
        this.setState({
            numTab: num
        });
    }
    render(){
        const {children} = this.props;
        const {numTab} = this.state;
        return(
            <div>
                <Header numTab={numTab}></Header>  
                {children}
                <Footer changeTab={(num) => {this.changeTab(num)}} numTab={numTab}></Footer>
                
            </div>
        )
    }
};

export default connect()(App);
App.childContextTypes={
    urlQuery:React.PropTypes.object
};