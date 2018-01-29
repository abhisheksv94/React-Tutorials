import React from 'react';




const cockpit=(props)=>
    <div>
        <h1>Hi, I'm a React App </h1>
        <button className={props.button} onClick={props.clicked}>Just a button!</button>
        {props.button===undefined?null:props.children}
    </div>;

export default cockpit;