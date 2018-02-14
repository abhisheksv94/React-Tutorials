import React,{Component} from 'react';
import Aux from '../../hoc/aux/aux';
import Burger from '../../components/Burger/burger';
import BuildControls from '../../components/Burger/buildcontrols/buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES= {
    salad:0.5,
    cheese:0.4,
    veggie_patty:1
};

class BurgerBuilder extends Component{
    constructor(){
        super();
        this.state={
            ingredients:null,
            totalPrice:4,
            purchasable:false,
            ordered:false,
            loading:false,
            error:false
        };
    }
    componentDidMount(){
        axios.get('https://react-burger-builder-9e466.firebaseio.com/ingredients.json')
            .then(response=>{
                this.setState({ingredients:response.data,ingredientsLoaded:true})
            })
            .catch(()=>this.setState({error:true}));
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
        this.setState({ordered:true});
    }
    backgroundClick(){
        this.setState({ordered:false});
    }
    purchaseContinueHandler(){
        console.log('continue');
        this.setState({loading:true});
        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice.toFixed(2),
            customer:{
                name:'Abhishek Shrinivasan',
                address:{
                    street:'2243 US Hwy 52W',
                    zipcode:'47906',
                    state:'Indiana',
                    country:'America',
                },
                email:'abhishek.shrinivasan@gmail.com'
            },
            delivery:'normal'
        };
        axios.post('/orders.json',order).then(response=>{
            console.log(response);
            this.setState({loading:false,ordered:false});
            console.log('Successfully submitted!');
        })
            .catch(error=>{
                this.setState({loading:false,ordered:false});
                console.log(error);
            });
    }
    purchaseCancelHandler(){
        this.setState({ordered:false},()=>console.log('cancel'));
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        let orderSummary=null;
        let burger=this.state.error?null:<Spinner/>;
        if(this.state.ingredients){
            orderSummary=<OrderSummary show={this.state.ordered} ingredients={this.state.ingredients} cancel={()=>this.purchaseCancelHandler()}
                                       continue={()=>this.purchaseContinueHandler()} price={this.state.totalPrice}/>;
            burger=<Aux>
                <Burger ingredients={this.state.ingredients} /><br/>
                <BuildControls addIngredient={this.addIngredient.bind(this)} removeIngredient={this.removeIngredient.bind(this)}
                               disabledInfo={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable}
                               ordered={()=>this.orderHandler()}/><br/>
            </Aux>;
        }
        if (this.state.loading){
            orderSummary=<Spinner />;
        }
        return(
            <Aux>
                <Modal show={this.state.ordered} backgroundClick={()=>this.backgroundClick()}>
                    {orderSummary}
                </Modal><br/>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);