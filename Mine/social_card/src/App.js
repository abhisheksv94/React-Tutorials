import React, { Component } from 'react';
import './App.css'
import Heading from './components/heading';
import Body from './components/body';
import Footer from './components/footer';
import uuid from 'uuid';
import Description from "./components/body/description";

class App extends Component {
    constructor(){
        super();
        this.state={users:[]};
    }
    componentWillMount(){
        let defaultUser={
            id:uuid.v4(),
          name:'Dave Ceddia',
            title:'The Practical Dev',
          author:'@dceddia',
            content:'Learning React? Start Small.',
            description:"Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps",
            thumbnail:'',
            likes:0
        };
        this.state.users.push(defaultUser);
        this.state.users.push(defaultUser);
        this.setState({users:this.state.users},function(){
            console.log(this.state.users);
        });
    }
  render() {
        let users=this.state.users.map(user=>{
           return(
               <div>
                   <hr/>
                   <div key={user.id} className="flex-container-vertical ">
                       <Heading user={user}/>
                       <Body content={user.content} description={user.description}/>
                       <Footer/>
                   </div>
                   <hr/>
               </div>
           );
        });
    return (
      <div>
          {users}
      </div>
    );
  }
}

export default App;
