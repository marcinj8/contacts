import React from 'react';

import './NavigationItem.css';

const navigationItem = props => {
  return (
    <div className='navigation__item' onClick={() => props.clicked(props.children)}>{props.children}</div>
  );
};

export default navigationItem;
