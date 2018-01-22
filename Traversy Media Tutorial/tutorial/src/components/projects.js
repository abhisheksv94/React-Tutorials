import React, { Component } from 'react';
import ProjectItem from "./projectItem";

class Projects extends Component {
    handleDelete(id){
        this.props.onDelete(id);
    }

    render() {
        let projectItem;
        if(this.props.projects){
            console.log(this.props.projects);
            projectItem=this.props.projects.map(project=>{
               return(
                   <ProjectItem key={project.title} project={project} deleteProject={this.handleDelete.bind(this)}/>
               );
            })
        }
        return (
            <div>
                {projectItem}
            </div>
        );
    }
}

export default Projects;
