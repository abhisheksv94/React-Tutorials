import React from 'react';
import Aux from 'react-aux';



const cockpit=(props)=>
    <Aux>
        <h1>Hi, I'm a React App </h1>
        <button className={props.button} onClick={props.clicked}>Click me to see content!</button>
        {props.button===undefined?null:props.children}
        <br/>
    </Aux>;

export default cockpit;