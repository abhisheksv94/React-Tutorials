import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation Items/NavigationItems';
import Menu from '../SideDrawer/Menu/menu';

const toolbar=(props)=>{
    return(
        <header className={classes.Toolbar}>
            <Menu drawerToggled={()=>props.drawerToggled()}/>
            <Logo height={'80%'}/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;