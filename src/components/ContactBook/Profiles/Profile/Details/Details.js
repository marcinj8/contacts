import React from 'react';

import Aux from 'react-aux';

import '../../../../../App.css'

const details = props => {
  return (
    <Aux>
      <div className='profileCard__flex'>
        <div>
        <i className="material-icons md-18">
          mail_outline
        </i>
        {props.mail}</div>
        <div>
          <i className="material-icons md-18" >
            phone
          </i>
          {props.phone}</div>
      </div>
      <div className='profileCard__flex'>

        <div>City: {props.city}</div>
        <div>Street: {props.street}</div>
      </div>
    </Aux>
  )
}

export default details;
