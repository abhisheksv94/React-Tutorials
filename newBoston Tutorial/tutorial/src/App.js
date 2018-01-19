import React, { Component } from 'react';
import './App.css';

class Comment extends Component{

    render(){
        let title,genre;
        if(this.props.title){
          title='Title: '+this.props.title;
        }
        if(this.props.genre){
            genre='Genre: '+this.props.genre;
        }

        return(
            <div>
                <h1>{title}</h1>
                <h2>{genre}</h2>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <Comment/>
      </div>
    );
  }
}

export default App;
