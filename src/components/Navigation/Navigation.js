import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from './Logo/Logo';

import './Navigation.css';

const navigation = props => {
  return (
    <div className='navigation'>
      <div className='navigation__logoContainer'>
        <Logo />
      </div>
      <div className='navigation__itemsContainer'>
        <NavigationItem clicked={props.navitateTo}>Add contact</NavigationItem >
        <NavigationItem clicked={props.navitateTo}>Contacts</NavigationItem >
        <NavigationItem clicked={props.navitateTo}>About</NavigationItem >
      </div>
    </div>
  );
};

export default navigation;
