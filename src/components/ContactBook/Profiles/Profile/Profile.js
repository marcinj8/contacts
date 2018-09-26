import React from 'react';

import './Profile.css';

const profile = props => {
  return (
    <div className='profileCard'>
      <div className='profileCard__flex'>
        <div>{props.name}</div>
        <div>{props.lastName}</div>
      </div>
      <div className='profileCard__flex'>
        <div>Mail: {props.mail}</div>
        <div>Phone: {props.phone}</div>
      </div>
      <div className='profileCard__flex'>
        <div>City: {props.city}</div>
        <div>Street: {props.street}</div>
      </div>
        Edit contact
    </div>
  )
}

export default profile;