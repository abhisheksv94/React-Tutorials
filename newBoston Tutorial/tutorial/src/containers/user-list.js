import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';
class UserList extends Component{

    createListItems(){
        return this.props.userNames.map((user)=>{
            return(
                <li key={user.id} onClick={()=>this.props.selectUser(user)}>{user.first} {user.last}</li>
            );
        })
    }
    handleClick(){
        console.log('clicked');
        return(
            <form>
                <input ref='userName' type='text'/>
                <button className='submit' onClick={this.saveUser.bind(this)}>Save</button>
            </form>
        );
    }
    saveUser(){
        let userName=this.state.refs.userName;
        console.log(userName);
        this.props.userNames.push(userName);
    }
    render(){
        return(
            <div>
                <ul>
                    {this.createListItems()}
                </ul>
                <button id='new' className='btn btn-primary' onClick={this.handleClick.bind(this)}>Add a new user</button>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        userNames:state.users
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);