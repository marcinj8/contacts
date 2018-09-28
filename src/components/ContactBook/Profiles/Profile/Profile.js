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
        <button className='profileCard__button' onClick={props.toggleDetails}>Details</button>
        <button className='profileCard__button' onClick={props.edit}>
          <i className="material-icons">
            create
          </i>
        </button>
        <button className='profileCard__button--delete' onClick={props.delete}>
          <i className="material-icons">
            clear
        </i>
        </button>
      </div>
      {details}
    </div>
  )
}

export default profile;