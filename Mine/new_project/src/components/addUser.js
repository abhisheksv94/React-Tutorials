import React,{Component} from 'react';
import uuid from 'uuid';

export default class AddUser extends Component{
    constructor(){
        super();
        this.state={newUser:{},renderButton:true};
    }
    addNewUser(){
        this.setState({renderButton:false});
        this.showButton();
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({newUser:{
            id:uuid.v4(),
                firstName:this.fN.value,
                lastName:this.lN.value,
                age:this.ag.value
            },renderButton:true},function(){this.props.AddUser(this.state.newUser);});
    }
    showButton(){
        if(this.state.renderButton){
            return(
                <button className='btn btn-info btn-sm' onClick={this.addNewUser.bind(this)}>Add New User</button>
            );
        }
        else{
            return(
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>First Name:{'    '}
                        <input type='text' ref={fN=>{this.fN=fN}}/>
                    </label><br/>
                    <label>Last Name:{'    '}
                        <input type='text' ref={lN=>this.lN=lN}/>
                    </label><br/>
                    <label>Age: {'     '}
                        <input type='text' ref={age=>this.ag=age}/>
                    </label><br/>
                    <input type='submit' value='Save'/>
                </form>
            );
        }
    }
    render(){
        return(
            <div>
                {this.showButton()}
            </div>
        );
    }
}