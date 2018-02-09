import React from 'react';
import classes from './buildcontrol.css';

const buildcontrol=(props)=>{
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={()=>props.removeIngredient()} disabled={props.disabled} >Less</button>
            <button className={classes.More} onClick={props.addIngredient.bind(this)}>More</button>
        </div>
    );
};

export default buildcontrol;