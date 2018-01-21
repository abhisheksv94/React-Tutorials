import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Button,Form,FormControl,ControlLabel} from 'react-bootstrap';

class App extends Component {
    constructor(){
        super();
        this.state={
            users:[
                {
                    id:1,
                    first:'Abhishek',
                    last:'Shrinivasan',
                    age:23
                },
                {
                    id:2,
                    first:'Akhilesh',
                    last:'Shrinivasan',
                    age:20
                }
            ],
            count:2,
            renderButton:true
        }
    }
    listUsers(){
        return this.state.users.map(user=>{
            return(
                <li key={user.first}>{user.first} {user.last}</li>
            )
        })
    }
    handleSubmit(event){
        console.log(this.firstName.value+" "+this.lastName.value+"\nAge: "+this.userAge.value);
        let newUser={
            id:this.state.count,
            first:this.firstName.value,
            last:this.lastName.value,
            age:this.userAge
        };
        this.state.users.push(newUser);
        this.setState({count:this.state.count+1,renderButton:true});
    }
    checkStatus(){
        if(this.state.renderButton){
            return(
                <Button ref='newUser' bsStyle='primary' onClick={this.handleClick.bind(this)}>Add new User</Button>
            );
        }
        else{
            return(
                <Form>
                    <ControlLabel>First Name:
                        <FormControl inputRef={userFirst=>this.firstName=userFirst} type='text' />
                    </ControlLabel>
                    <ControlLabel>Last Name:
                        <FormControl inputRef={userLast=>this.lastName=userLast} type='text' />
                    </ControlLabel>
                    <ControlLabel>Age:
                        <FormControl inputRef= {userAge=>this.userAge=userAge} type='text' />
                    </ControlLabel>
                    <Button bsStyle='success' onClick={this.handleSubmit.bind(this)}>Save</Button>
                </Form>
            );
        }
    }
    handleClick(){
        this.setState({renderButton:!this.state.renderButton});
        this.checkStatus();
    }
    render() {
    return (
      <div className="App">
          <div>
              <h2>User Names on record: </h2>
              <ul>
                {this.listUsers()}
              </ul>
              {this.checkStatus()}
              <hr/>
          </div>
      </div>
    );
  }
}

export default App;
