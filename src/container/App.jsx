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
        let num = 0;
        let pathname = this.props.location.pathname;
        if(pathname === '/notice') {
            num = 1;
        } else if(pathname === '/record') {
            num = 2;
        } else if(pathname === '/mine') {
            num = 3;
        }
        this.setState({
            numTab: num
        });
        this.node.scrollIntoView();
    }
    componentDidUpdate() {
        this.node.scrollIntoView();
    }
    getChildContext() {
        return { urlQuery: this.props.location.query }
    }
    changeTab(num) {
        this.setState({
            numTab: num
        });
    }
    render(){
        const {children} = this.props;
        const {numTab} = this.state;
        return(
            <div ref={node=>this.node=node}>
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