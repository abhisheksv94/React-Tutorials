import React from 'react';
import classes from './buildcontrols.css';
import BuildControl from './buildcontrol/buildcontrol';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Veggie_Patty',type:'veggie_patty'},
];

const buildcontrols=(props)=>{
    return(
        <div className={classes.Buildcontrols}>
            <b>Total Price: {props.price.toFixed(2)}$</b><br/>
            {controls.map(ctrl=>(
                <BuildControl key={ctrl.label} label={ctrl.label} addIngredient={()=>props.addIngredient(ctrl.type)} type={ctrl.type}
                    removeIngredient={()=>props.removeIngredient(ctrl.type)} disabled={props.disabledInfo[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={()=>props.ordered()}>ORDER NOW!</button>
        </div>
    );
};

export default buildcontrols;