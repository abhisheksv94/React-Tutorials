import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
            <Cockpit button={this.state.btnClass} clicked={handleClick}>
                <Persons persons={this.state.name}/>
            </Cockpit>
            <input  placeholder={'Enter a Name'} onKeyPress={keyPress}/><br/>
        </div>

    );
  }
}

export default App;
