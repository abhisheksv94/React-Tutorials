import React, {Component} from 'react';

export default class Description extends Component{
    render(){
        let content=this.props.content;
        let description=this.props.description;
        return(
            <div className='flex-container-vertical-description'>
                <b>{content}</b><br/>
                <p style={{fontSize:14}}>{description}</p>
            </div>
        );
    }
}