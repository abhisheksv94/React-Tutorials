import React, { Component } from 'react';
//import ProjectItem from './ProjectItem.js';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(){
    super();
    this.state={
      newProject:{}
    }
  }
  static defaultProps ={
    categories: ['Web Design','Android Development','Web Development']
  };

  handleSubmit=function(e){
    if (this.refs.title.value){
        //console.log(this.refs.title.value);
        this.setState({
            newProject:{
              id:uuid.v4(),
              title:this.refs.title.value,
                category:this.refs.category.value
            }
        },function(){
          this.props.addProject(this.state.newProject);
        })
    }
    else {
      alert("No Title Specified!");
    }
    e.preventDefault();
  };

  render() {
    let categoryOptions=this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div >
        <h4>Add Project:</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type='text' ref= 'title' />
          </div>
          <div>
            <label>Category</label><br/>
              <select ref= 'category'>
                  {categoryOptions}
              </select>
          </div><br/>
          <input type='submit' value='Submit'/>
          </form>

      </div>
    );
  }
}
AddProject.propTypes={
  categories:PropTypes.array,
  addProject:PropTypes.func,
}
export default AddProject;
