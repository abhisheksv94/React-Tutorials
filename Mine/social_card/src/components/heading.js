import React,{Component} from 'react';

export default class Heading extends Component {
  render(){
      let month=['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
      let user=this.props.user;
      let today=new Date(),
        date = month[today.getMonth()]+ '\t'+today.getDate();
    return(
        <div className='row1'>
            <b>{user.title}</b>{' '}{date}<br/>
            {user.content}<br/>
            {'{ author: '}{user.author}{' }'}
        </div>
    );
  }
}
