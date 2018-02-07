import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/Burger/buildcontrols/buildcontrols';


const INGREDIENT_PRICES= {
    salad:0.5,
    cheese:0.4,
    veggie_patty:1
};

export default class BurgerBuilder extends Component{
    constructor(){
        super();
        this.state={
            ingredients:{
                salad:0,
                cheese:0,
                veggie_patty:0
            },
            totalPrice:4
        };
    }

    addIngredient(type){
        const oldcount=this.state.ingredients[type];
        const updatedCount=oldcount+1;
        const updatedIngredients={
            ...this.state.ingredients,
        };
        updatedIngredients[type]=updatedCount;
        const priceAddtion=INGREDIENT_PRICES[type];
        const newPrice=Math.round((this.state.totalPrice+priceAddtion)*1000)/1000;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        });
    }
    removeIngredient(type){
        const oldcount=this.state.ingredients[type];
        if(oldcount!==0){
            const updatedCount=oldcount-1;
            const updatedIngredients={
                ...this.state.ingredients,
            };
            updatedIngredients[type]=updatedCount;
            const priceAddtion=INGREDIENT_PRICES[type];
            const newPrice=Math.round((this.state.totalPrice-priceAddtion)*1000)/1000;
            this.setState({
                ingredients:updatedIngredients,
                totalPrice:newPrice
            });
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <p>Total Price: {this.state.totalPrice}</p>
                <BuildControls addIngredient={this.addIngredient.bind(this)} removeIngredient={this.removeIngredient.bind(this)}/>
            </Aux>
        );
    }
}