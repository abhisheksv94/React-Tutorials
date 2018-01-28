import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';

class App extends Component {
    constructor(){
        super();
        this.state={
            name:['Abhishek','Akhilesh','Radha',"Vasan"]
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
                        event.target.value='';
                        event.target.placeholder='Enter a Name';
                    }
                }
            }
          };
      const style={
          align:'center',
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        marginTop:'10px',
        marginLeft:'auto',
        marginRight:'auto',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
            backgroundColor:'lightgreen',
            color:'black'
        }
      };
    return (
        <div className={Classes.App}>
            <h1>Hi, I'm a React App </h1>
            {this.state.name.map((name,index) => <Person key={index} name={name} age={Math.floor(Math.random()*30)}/>)}
            <input  placeholder={'Enter a Name'} onKeyPress={keyPress}/><br/>
            <button style={style}>Just a button!</button>
        </div>

    );
  }
}

export default App;
