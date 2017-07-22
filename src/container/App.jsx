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
            numTab: 0,
            tabbarHide: true
        };
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.location.pathname !== nextProps.location.pathname) {
            let pathname = nextProps.location.pathname;
            let num = 0;
            let tabbarHide;
            if(pathname === '/home') {
                num = 0;
                tabbarHide = false;
            } else if(pathname === '/notice') {
                num = 1;
                tabbarHide = false;
            } else if(pathname === '/query') {
                num = 2;
                tabbarHide = false;
            } else if(pathname === '/mine') {
                num = 3;
                tabbarHide = false;
            } else {
                tabbarHide = true;
            }
            this.setState({
                numTab: num,
                tabbarHide : tabbarHide
            });
            this.node.scrollIntoView(); 
            return true;
        }
    }
    componentDidMount(){
        let num = 0;
        let tabbarHide = false;
        let pathname = this.props.location.pathname;
        if(pathname === '/home') {
            num = 0;
            tabbarHide = false;
        } else if(pathname === '/notice') {
            num = 1;
            tabbarHide = false;
        } else if(pathname === '/query') {
            num = 2;
            tabbarHide = false;
        } else if(pathname === '/mine') {
            num = 3;
            tabbarHide = false;
        } else {
            tabbarHide = true;
        }
        this.setState({
            numTab: num,
            tabbarHide : tabbarHide
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
        const {numTab, tabbarHide} = this.state;
        return(
            <div ref={node=>this.node=node}>
                {/*<Header numTab={numTab}></Header>  */}
                {children}
                <Footer tabbarHide={tabbarHide} changeTab={(num) => {this.changeTab(num)}} numTab={numTab}></Footer>
                
            </div>
        )
    }
};

export default connect()(App);
App.childContextTypes={
    urlQuery:React.PropTypes.object
};