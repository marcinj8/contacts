import React from 'react';

const navigationItem = props => {
  return (
    <div onClick={() => props.clicked(props.children)}>{props.children}</div>
  )
}

export default navigationItem;
