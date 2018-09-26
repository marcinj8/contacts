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
      <div>
        <NavigationItem>Add contact</NavigationItem >
        <NavigationItem>Contacts</NavigationItem >
        <NavigationItem>About</NavigationItem >
      </div>
    </div>
  );
};

export default navigation;
