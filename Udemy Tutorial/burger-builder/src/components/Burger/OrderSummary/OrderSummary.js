import React from 'react';
import Aux from '../../../hoc/aux';
import Button from '../../UI/Button/Button';

const OrderSummary=(props)=>{
    const ingredients=Object.keys(props.ingredients).map(key=>{
       return(
           <li key={key}><span style={{textTransform:'capitalize'}}>{key}</span> : {props.ingredients[key]}</li>
       );
    });
    return(
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredients}
            </ul>
            <b>Total Price: {props.price.toFixed(2)} $</b>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={()=>props.clicked()}>CANCEL</Button>
            <Button btnType={'Success'} clicked={()=>props.clicked()}>SUCCESS!</Button>
        </Aux>
    );
};

export default OrderSummary;