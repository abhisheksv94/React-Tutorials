import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={error:false,renderPost:true};
    shouldComponentUpdate(nextProps,nextState){
        console.log('in shouldComponentUpdate renderPost: '+this.state.renderPost);
        return nextProps.post!==this.props.post||nextState.error!==this.state.error||nextState.renderPost!==this.state.renderPost;
    }
    deletePost=()=>{
        this.setState({renderPost:false},()=>console.log("After setState in delete"));
      axios.delete('/posts/'+this.props.post.id).then((response)=>{
          console.log(response);
      })
          .catch(()=>{
              this.setState(()=>{
                  return {error:true};
              });
          });
    };
    componentWillReceiveProps(nextProps){
        console.log("In componentWillReceiveProps");
        if(nextProps.post!==this.props.post&&!this.state.renderPost)
            this.setState({error:false,renderPost:true});
    }
    render () {
        let post = <div className={'FullPost'}><p>Please select a Post!</p></div>;
        if(this.props.post!==null&&this.state.renderPost){
            console.log(this.props.post);
            post = (
                <div className="FullPost">
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>

            );
        }
        if(this.state.error)
            post=<div className={'FullPost'}><p>Something went wrong!</p></div>;
        return post;
    }
}

export default FullPost;