import React from 'react';
import classes from '../App.css';
const person = (props) => {
    let child;
    if(props.children){
        child=<p>{props.children} of {props.name}</p>
    }
    return(
        <div className={classes.person}>
            <p>
            I'm {props.name} and I'm {props.age} years old<br/>
            </p>
            <p>{child}</p>
        </div>
    );
};

export default person;
