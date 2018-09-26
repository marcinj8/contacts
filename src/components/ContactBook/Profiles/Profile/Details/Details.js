import React from 'react';

import Aux from 'react-aux';

const details = props => {
  return (
    <Aux>
      <div className='profileCard__flex'>
        <div>Mail: {props.mail}</div>
        <div>Phone: {props.phone}</div>
      </div>
      <div className='profileCard__flex'>
        <div>City: {props.city}</div>
        <div>Street: {props.street}</div>
      </div>
    </Aux>
  )
}

export default details;
