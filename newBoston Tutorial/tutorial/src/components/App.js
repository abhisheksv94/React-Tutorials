import React from 'react';
import '../style/style.css';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

const App=()=>{
  return(
      <div className='container'>
          <div className='container-fluid'>
              <h2>Username List: </h2>
              <UserList/>
              <hr/>
              <h2>User Details: </h2>
              <UserDetail/>
          </div>
      </div>
  );
};

export default App;