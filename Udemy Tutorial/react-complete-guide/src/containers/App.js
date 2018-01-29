import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
class App extends Component {
    constructor(){
        super();
        this.state={
            name:['Abhishek','Akhilesh','Radha',"Vasan"],
            btnClass:undefined
        }
    }

  render() {
      const keyPress=(event)=>{
            if(event.key==='Enter'){
                const name=event.target.value;
                if(name){
                    const arr=[...this.state.name];
                    if(arr.indexOf(name,0)===-1) {
                        this.setState({name:[...this.state.name,name]});
                    }
                    event.target.value='';
                    event.target.placeholder='Enter a Name';
                }
            }
          };
      const handleClick=()=>{
          const buttonClass=this.state.btnClass;
          if(buttonClass===undefined)
             this.setState({btnClass:classes.Red});
          else
              this.setState({btnClass:undefined});
      };
    return (
        <div className={classes.App}>
            <h1>Hi, I'm a React App </h1>
            <Persons persons={this.state.name}/>
            <input  placeholder={'Enter a Name'} onKeyPress={keyPress}/><br/>
            <button className={this.state.btnClass} onClick={handleClick}>Just a button!</button>
        </div>

    );
  }
}

export default App;
