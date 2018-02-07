import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './burger-ingredient/burger-ingredient';

const burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredients).map((key)=>{
        return [...Array(props.ingredients[key])].map((_,i)=><BurgerIngredient type={key} key={key+i}/>)
    }).reduce((newArr,currElement)=>{
        return newArr.concat(currElement);
    },[]);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Add ingredients!</p>;
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;