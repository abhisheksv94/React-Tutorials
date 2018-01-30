import React from 'react';
import classes from '../../../containers/App.css';
import Aux from 'react-aux';
import withClass from '../../../hoc/withClass';
const person = (props) => {
    let child;
    if(props.children){
        child=<p>{props.children} of {props.name}</p>
    }
    return(
        <Aux>
            <p>
            I'm {props.name} and I'm {props.age} years old<br/>
            </p>
            <p>{child}</p>
        </Aux>
    );
};

export default withClass(person, classes.person);
