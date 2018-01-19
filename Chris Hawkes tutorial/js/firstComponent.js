import React from 'react'
import ReactDOM from 'react-dom'
import createReactClass from 'create-react-class'


var CommentBox=createReactClass({
    getInitialState:function () {
        return {
            videoID: "",
            startTime:""
        }
    },
    HandleClick:function () {
       var video=$('#videoID').val().toString();
       var start=$('#startTime').val();
       this.setState({
           videoID: video,
           startTime:"/?start="+start
       })
    },
    render:function () {
        return(
            <div style={{ fontSize:"16px", color: "red" }} className="CommentBox">
                {this.state.videoID?<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.state.videoID+this.state.startTime} gesture="media" allow="encrypted-media" frameBorder="0" allowFullScreen></iframe>:""}
                <br/>
                Enter a Video ID: <input id={"videoID"} /><br/>
                Enter a Start Time: <input id={"startTime"}/><br/>
                <button onClick={this.HandleClick}>Load Video</button>
                <p>{"https://www.youtube.com/embed/" + this.state.videoID+this.state.startTime}</p>
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);