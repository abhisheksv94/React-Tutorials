import React from 'react';
import Person from './Person/Person';
const Persons=(props)=>(
    props.persons.map((name,index)=><Person key={index} name={name} age={Math.floor(Math.random()*30)}/>)
);

export default Persons;