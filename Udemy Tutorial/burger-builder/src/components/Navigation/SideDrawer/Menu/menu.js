import React from 'react';
import classes from './menu.css';

const menu=(props)=>(
    <div onClick={()=>props.drawerToggled()} className={classes.Menu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;