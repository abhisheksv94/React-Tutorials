import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/Burger/buildcontrols/buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
            totalPrice:4,
            purchasable:false,
            ordered:false
        };
    }

    addIngredient(type){
        const oldcount=this.state.ingredients[type];
        const updatedCount=oldcount+1;
        const updatedIngredients={
            ...this.state.ingredients,
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const newPrice=this.state.totalPrice+priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        },this.updatePurchaseState(updatedIngredients));
    }
    updatePurchaseState(ingredients){
        const sum=Object.keys(ingredients).map(key=>ingredients[key]).reduce((newSum,el)=>{return newSum+=el;},0);
        this.setState({purchasable:sum>0});
    }
    removeIngredient(type){
        const oldcount=this.state.ingredients[type];
        if(oldcount>0){
            const updatedCount=oldcount-1;
            const updatedIngredients={
                ...this.state.ingredients,
            };
            updatedIngredients[type]=updatedCount;
            const priceAddtion=INGREDIENT_PRICES[type];
            const newPrice=this.state.totalPrice-priceAddtion;
            this.setState({
                ingredients:updatedIngredients,
                totalPrice:newPrice
            },this.updatePurchaseState(updatedIngredients));
        }
    }
    orderHandler(){
        this.setState({ordered:true},()=>console.log('ordered: \t'+this.state.ordered));
    }
    backgroundClick(){
        this.setState({ordered:false});
    }
    buttonClicked(){
        console.log('Button Clicked!');
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <Aux>
                <Modal show={this.state.ordered} backgroundClick={()=>this.backgroundClick()}>
                    <OrderSummary ingredients={this.state.ingredients} clicked={()=>this.buttonClicked()} price={this.state.totalPrice}/>
                </Modal><br/>
                <Burger ingredients={this.state.ingredients} /><br/>
                <BuildControls addIngredient={this.addIngredient.bind(this)} removeIngredient={this.removeIngredient.bind(this)}
                    disabledInfo={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable}
                    ordered={()=>this.orderHandler()}/><br/>
            </Aux>
        );
    }
}