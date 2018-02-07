import React, { Component } from 'react';
import Layout from './components/layout/layout';
import classes from './App.css';
import BurgerBuilder from './containers/burgerBuilder/burger-builder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Layout>
            <BurgerBuilder/>
          </Layout>
      </div>
    );
  }
}

export default App;
