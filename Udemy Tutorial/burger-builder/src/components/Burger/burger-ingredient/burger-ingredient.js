import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class burgeringredient extends Component{
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}/>
                </div>;
                break;
            case ('veggie_patty'):
                ingredient = <div className={classes.VeggiePatty}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

export default burgeringredient;

burgeringredient.propTypes={
    type:PropTypes.string.isRequired
};