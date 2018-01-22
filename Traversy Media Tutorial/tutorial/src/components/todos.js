import React,{Component} from 'react';
import TodoItem from './todoitem';

export default class Todos extends Component{
    render(){
        let todoItem;
        if(this.props.todos){
            console.log(this.props.todos);
            todoItem=this.props.todos.map(todo=>{
                return(
                    <TodoItem key={todo.title} todo={todo}/>
                );
            })
        }
        return (
            <div>
                {todoItem}
            </div>
        );
    }
}