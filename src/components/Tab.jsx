import React, {Component} from 'react';
import '../css/public.css';
class Tab extends Component {
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
    onTab() {
        this.props.onClick();
    }
    render() {
        const {children, isTab} = this.props;
        // let numarr = num.split('');
        return(
        <div className={``}>{children}</div>)
    }
}
export default Tab;