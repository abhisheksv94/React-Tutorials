import React,{Component} from 'react';
import Aux from '../aux/aux';
import classes from './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component{
    state={
        showSideDrawer: false
    };
    drawerToggled(){
        this.setState((prevState)=>{
            prevState.showSideDrawer?console.log("Closing side drawer"):console.log("Opening side drawer");
            return {showSideDrawer:!prevState.showSideDrawer}
        });
    }
    render(){
        return(
            <Aux>
                <Toolbar drawerToggled={()=>this.drawerToggled()}/>
                <SideDrawer close={()=>this.drawerToggled()} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default layout;