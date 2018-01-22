import React, { Component } from 'react';

class ProjectItem extends Component {
    handleDelete(id){
        this.props.deleteProject(id);
    }
    render() {
        return (
            <li>
                <strong>{this.props.project.title} : </strong> {this.props.project.category}{'    '}
                <button className='btn btn-danger' onClick={this.handleDelete.bind(this,this.props.project.id)}>Delete</button>
            </li>
        );
    }
}

export default ProjectItem;
