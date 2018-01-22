import React, { Component } from 'react';
import Projects from './components/projects'
import AddProject from './components/addproject';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './components/todos';

class App extends Component {
    constructor(){
        super();
        this.state={
            projects:[],
            todos:[]
        }
    }
    componentWillMount(){
        this.setState({
            projects:[
                {
                    id:uuid.v4(),
                    title:'Business Website',
                    category:'Web Design'
                },
                {
                    id:uuid.v4(),
                    title:'Social App',
                    category:'Mobile Development'
                },
                {
                    id:uuid.v4(),
                    title:'E-Commerce Shopping Cart',
                    category:'Web Development'
                }
            ]
        });
    }
    componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/todos',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({todos:data},function(){console.log(this.state)});
            }.bind(this),
            error:function(xhr,status,err){
                console.error(err);
            }
            }
        )
    }
    addProject(project){
        this.state.projects.push(project);
        this.setState({
            projects:this.state.projects
        });
    }
    handleDelete(id){
        let index=this.state.projects.findIndex(x=>x.id===id);
        this.state.projects.splice(index,1);
        console.log('in delete');
        this.setState({projects:this.state.projects});
    }
  render() {
    return (
      <div className="App">
        My App
          <Projects projects={this.state.projects} onDelete={this.handleDelete.bind(this)}/>
          <hr/>
          <AddProject addProject={this.addProject.bind(this)}/>
          <hr/>
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
