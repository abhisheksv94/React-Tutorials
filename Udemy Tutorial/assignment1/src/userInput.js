import React from 'react';

const UserInput=(props)=>{
    const style={
      fontSize:'20px',
      color:'brown'
    };
    return(
        <input type='text' style={style} onChange={props.onClick} value={props.name}/>
    );
};

export default UserInput;