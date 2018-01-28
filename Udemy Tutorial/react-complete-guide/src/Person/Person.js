import React from 'react';
const person = (props) => {
    let child;
    if(props.children){
        child=<p>{props.children} of {props.name}</p>
    }
    const style={
      '@media(min-width: 500px)':{
          width:'450px'
      }
    };
    return(
        <div className='person' style={style}>
            <p>
            I'm {props.name} and I'm {props.age} years old<br/>
            </p>
            <p>{child}</p>
        </div>
    );
};

export default person;
