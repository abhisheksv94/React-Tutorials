import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }
  render() {
    console.log(this.props);
    return (
      <li className="Project">
      <strong>  {this.props.project.title}</strong> : {this.props.project.category} <a href='#' onClick={this.deleteProject.bind(this,
          this.props.project.id)}>X</a>

      </li>
    );
  }
}
ProjectItem.propTypes={
  deleteProject:PropTypes.func,
  project:PropTypes.object,
}
export default ProjectItem;
