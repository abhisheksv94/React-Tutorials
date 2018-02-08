import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component{
    state={
        showSideDrawer: true
    };
    sideDrawerClose(){
        console.log('Clicked');
        this.setState({showSideDrawer:false},()=>console.log("Side Drawer closed click"));
    }
    sideDrawerOpen(){
        this.setState({showSideDrawer:true});
    }
    render(){
        return(
            <Aux>
                <Toolbar/>
                <SideDrawer close={()=>this.sideDrawerClose()} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default layout;