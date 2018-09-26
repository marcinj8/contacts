import React from 'react';

import Details from './Details/Details';

import './Profile.css';

const profile = props => {
  let details = null;

  if (props.details) {
    details = (
      <Details
        mail={props.mail}
        phone={props.phone}
        city={props.city}
        street={props.street} />
    )
  }
  return (
    <div className='profileCard'>
      <div className='profileCard__flex'>
        <div>{props.name}</div>
      </div>
        {details}
      <button onClick={props.clicked}>Details</button>
    </div>
  )
}

export default profile;