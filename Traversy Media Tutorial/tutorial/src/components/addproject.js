import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }
    static defaultProps={
      categories:[
          'Web Development','Mobile Development','Web Design'
      ]
    };
    handleSubmit(event){
        event.preventDefault();
        if(this.title.value===''){
            alert("Title is required!");
        }
        else{
            console.log(this.title.value+"\t"+this.category.value);
            this.setState({newProject:{
                    id:uuid.v4(),
                    title:this.title.value,
                    category:this.category.value
                }},function(){
                this.props.addProject(this.state.newProject)
            });
        }
    }


    render() {
        let options=this.props.categories.map(option=>{
            return(
                <option key={option} value={option}>{option}</option>
            );
        });

        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title: </label>
                        <input type='text' ref={title=>this.title=title}/>
                    </div>
                    <div>
                        <label>Category </label>
                        <select ref={category=>this.category=category}>{options}</select>
                    </div>
                    <input type='submit' value='Save Project'/>
                </form>
            </div>
        );
    }
}

export default AddProject;
