import React, { Component } from 'react';
import UserLine from './user';

export default class UserList extends Component{
    userClick(id){
        this.props.userClick(id);
    }
    deleteUser(id){
        this.props.deleteUser(id);
    }
    render(){
        let users;
        if(this.props.users){
            users=this.props.users.map(user=>{
                return(
                    <UserLine key={user.id} user={user} userClick={this.userClick.bind(this)} deleteUser={this.deleteUser.bind(this)}/>
                );
            })
        }
        return(
            <div>
                <h2>List of Users: </h2>
                {users}
            </div>
        );
    }
}
