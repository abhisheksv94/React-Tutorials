import React, {Component} from 'react';

export default class Content extends Component{
    render(){
        let content=this.props.content;
        return(
            <div>
                {content}
            </div>
        );
    }
}