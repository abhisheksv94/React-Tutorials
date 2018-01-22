import React, { Component } from 'react';
import '../App.css';

export default class UserLine extends Component{
    handleClick(id){
        this.props.userClick(id);
    }
    handleDelete(id){
        this.props.deleteUser(id);
    }
    render(){
        return(
            <div>
                <li >
                    <button className='btn btn-outline-primary btn-sm' onClick={this.handleClick.bind(this,this.props.user.id)}>
                        {this.props.user.firstName}{' '}{this.props.user.lastName}
                    </button>
                    <span>
                        <button className='btn btn-danger btn-sm' onClick={this.handleDelete.bind(this,this.props.user.id)}>Delete</button>
                    </span>
                </li>
            </div>
        );
    }
}