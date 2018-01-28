import React from 'react';

const isValid=(props)=>{
    const length=props.length;
    if(length<=5){
        return(
            <p>Text Length too short!</p>
        );
    }
    else{
        return (<p>Text is long enough!</p>);
    }
};
export default isValid;