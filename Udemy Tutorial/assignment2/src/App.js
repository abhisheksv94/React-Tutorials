import React, { Component } from 'react';
import ValidationComponent from './validationComponent';
import CharComponent from './charComponent';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            length:0,
            chars:''
        }
    }
  render() {
    const onChangeListener=(event)=>{
        this.setState({
            chars:event.target.value
        });
    };
    const handleDelete=(char)=>{
      let arr=this.state.chars.split('');
      const idx=arr.findIndex((el)=>el===char);
      arr.splice(idx,1);
      arr=arr.join('');
      this.setState({chars:arr});
    };
    return (
      <div className="App">
        <input onChange={onChangeListener} value={this.state.chars}/>
          <p>Text Length: {this.state.chars.length}</p>
          <ValidationComponent length={this.state.chars.length}/>
          <CharComponent chars={this.state.chars.split('')} handleDelete={handleDelete}/>
      </div>
    );
  }
}

export default App;
