import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {

  render() {
    console.log(this.props);
    return (
      <li className="Todos">
      <strong>  {this.props.todo.title}</strong>
      </li>
    );
  }
}
TodoItems.propTypes={
  todos:PropTypes.object,
}
export default TodoItems;
