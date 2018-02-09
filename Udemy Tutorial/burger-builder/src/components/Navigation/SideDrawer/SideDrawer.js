import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation Items/NavigationItems';
import classes from './sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/aux/aux';

const sidedrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer, classes.Open];
    }
  return(
      <Aux>
        <Backdrop show={props.open} backgroundClick={()=>props.close()}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
      </Aux>
  );
};

export default sidedrawer;