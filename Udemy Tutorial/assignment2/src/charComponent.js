import React from 'react';

const char=(props)=>{
    const style={
        display:'inline-block',
        padding:'16px',
        textAlign:'center',
        margin:'20px',
        border:'1px solid black'
    };
    return(
        <div>
            {props.chars.map((char,index)=><p style={style} key={index} onClick={props.handleDelete.bind(this,char)}>{char}</p>)}
        </div>
    );
};
export default char;