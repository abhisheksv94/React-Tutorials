import React, { Component } from 'react';
import UserList from './components/userList';
import './App.css';
import uuid from 'uuid';
import AddUser from './components/addUser';
import UserDetails from './components/userDetails/userDetails';

class App extends Component {
    constructor(){
        super();
        this.state={users:[],activeUser:{}};
    }
    addUser(newUser){
        this.state.users.push(newUser);
        this.setState({users:this.state.users});
        console.log(newUser);
    }
    componentWillMount(){
        this.setState({
            users:[
                {
                    id:uuid.v4(),
                    firstName:'Abhishek',
                    lastName:'Shrinivasan',
                    age:23
                }
            ]
        });
    }
    userClick(id){
        let index=this.state.users.findIndex(x=>x.id===id);
        let user=this.state.users[index];
        this.setState({activeUser:user});
    }
    userDetails(){
        if(this.state.activeUser){
            return(
                <UserDetails user={this.state.activeUser}/>
            );
        }
        else{
            return(
                <UserDetails/>
            );
        }
    }
    deleteUser(id){
        let index=this.state.users.findIndex(x=>x.id===id);
        if(this.state.users[index]===this.state.activeUser){
            this.setState({activeUser:{}});
        }
        this.state.users.splice(index,1);
        this.setState({users:this.state.users});
    }
  render() {
        let users=null;
        if(this.state.users.length>0){
            users=<UserList users={this.state.users} userClick={this.userClick.bind(this)} deleteUser={this.deleteUser.bind(this)}/>;
        }
        else{
            users=<h3>Add a new user</h3>;
        }
    return (
      <div className="App">
          {users}
          <br/>
          <AddUser users={this.state.users} AddUser={this.addUser.bind(this)}/>
          <hr/>
          {this.userDetails()}
      </div>
    );
  }
}

export default App;
