import React from 'react';

import '../../../../../App.css';
import './Detials.css';

const details = props => {
  // add animation with show props, add new classes
  return (
    <div>
      <div className='detail__flex'>
        <div className='detail__item'>
        <i className="material-icons md-18">
          mail_outline
        </i>
        {props.mail || ' empty'}</div>
        <div className='detail__item'>
          <i className="material-icons md-18" >
            phone
          </i>
          {props.phone || ' empty'}</div>
      </div>
      <div className='detail__flex'>
        <div className='detail__item'>City: {props.city || ' empty'}</div>
        <div className='detail__item'>Street: {props.street || ' empty'}</div>
      </div>
    </div>
  );
};

export default details;
