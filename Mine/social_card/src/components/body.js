import React,{Component} from 'react';
import Description from './body/description';
import Content from './body/body_content';

export default class Body extends Component{
    render(){
        let content=this.props.content;
        let description=this.props.description;
        return(
            <div>
                <div>
                    <div className='flex-container-vertical-content'><Content content={content}/></div>
                    <Description content={content} description={description}/>
                </div>
            </div>
        );
    }
}