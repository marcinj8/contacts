import React from 'react';

import './NavigationItem.css';

const navigationItem = props => {
  let style = 'navigation__item';
  if(props.active) {
    style = 'navigation__item--active'
  }
  return (
    <div className={style} onClick={() => props.clicked(props.children)}>{props.children}</div>
  );
};

export default navigationItem;
