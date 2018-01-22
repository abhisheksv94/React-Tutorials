import React,{Component} from 'react';

export default class TodoItem extends Component{
    render() {
        return (
            <li>
                <strong>{this.props.todo.title} : </strong>{'     '}{this.props.todo.id}
            </li>
        );
    }
}