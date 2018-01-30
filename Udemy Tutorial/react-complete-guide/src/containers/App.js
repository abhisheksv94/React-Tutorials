import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from 'react-aux';
import withClass from '../hoc/withClass';
class App extends Component {
    constructor(){
        super();
        this.state={
            name:['Abhishek','Akhilesh','Radha',"Vasan"],
            btnClass:undefined,

        }
    }
    componentDidUpdate(){
        if(this.state.btnClass!==undefined)
            this.input.focus();
    }

  render() {
      const keyPress=(event)=>{
            if(event.key==='Enter'){
                const name=event.target.value;
                if(name){
                    if(this.state.name.indexOf(name,0)===-1)
                        this.setState((prevState)=>{
                            return{
                                name:[...prevState.name,name]
                            }
                        });
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
        <Aux>
            <Cockpit button={this.state.btnClass} clicked={handleClick}>
                <Persons persons={this.state.name}/>
            </Cockpit>
            <input  placeholder={'Enter a Name'} onKeyPress={keyPress} ref={(input)=>this.input=input}/><br/>
        </Aux>

    );
  }
}

export default withClass(App,classes.App);
