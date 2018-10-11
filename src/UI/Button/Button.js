import React from 'react';

import './Button.css';

const button = props => (
  <div className={'button__standard '+ props.class} onClick={props.clicked}>
    {props.children}
  </div>
)

export default button;