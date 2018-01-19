import React, { Component } from 'react';

export default class Submit extends Component{
    constructor(){
        super();
        this.state={};
        this.submitRecipe=this.submitRecipe.bind(this);
    }
    submitRecipe(){
        console.log('button clicked');
        this.props.history.push(
            '/'
        );
    }

    render(){
        return(
            <div>
                <h2>Submit</h2>
                <button onClick={this.submitRecipe}>Submit a Recipe</button>
            </div>
        );
    }
}