import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput';
import UserOutput from './userOutput';

class App extends Component {
    constructor(){
        super();
        this.state={
            username:[
                {
                    FirstName:'Abhishek',
                    LastName:'Shrinivasan'
                }
            ],
        }
    }
    handleChange(event){
        this.setState({
            username:[
                {
                    FirstName:event.target.value,
                    LastName:'Shrinivasan'
                }
            ],
        })
    }
  render() {
    return (
      <div className="App">
        <UserInput onClick={this.handleChange.bind(this)} name={this.state.username[0].FirstName}/>
        <UserOutput userName={this.state.username[0].FirstName}/>
      </div>
    );
  }
}

export default App;
