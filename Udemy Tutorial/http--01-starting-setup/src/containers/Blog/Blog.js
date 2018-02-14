import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state={
      posts:[],
        currentPost:null,
        error:false
    };
    componentDidMount(){
        axios.get('/posts')
            .then(response=>{
                const posts=response.data.slice(0,4).map(post=>{
                    return{
                        ...post
                    }
                });
                this.setState({posts:posts})
            })
            .catch((error)=>{
                console.log(error);
                this.setState({error:true});
            });
    }
    showPost(post){
      this.setState({currentPost:post});
    };

    render () {
        const posts=this.state.posts.map(post=>
            <Post title={post.title} key={post.id} author={post.author} onClick={()=>this.showPost(post)}/>
        );
        let returnCode=<div className={'Blog'}>Something went wrong!</div>;
        if(!this.state.error){
            returnCode=<div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost post={this.state.currentPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>;
        }
        return returnCode;
    }
}

export default Blog;