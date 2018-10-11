import React from 'react';

import '../../../../../App.css';
import './Detials.css';

const details = props => {
  let modalClass = ['details__container'];
  if (props.show) {
    modalClass = 'details__container--show';
  }

  return (
    <div className={modalClass}>
      <div className='detail__flex'>
        <a href={"mailto:" + props.mail} className='detail__item'>
          <i className="material-icons md-18">
            mail_outline
          </i>
          {props.mail || ' empty'}
        </a>
        <a href={"callto:" + props.phone} className='detail__item'>
          <i className="material-icons md-18" >
            phone
          </i>
          {props.phone || ' empty'}
        </a>
      </div>
      <div className='detail__flex'>
        <div className='detail__item'>City: {props.city || ' empty'}</div>
        <div className='detail__item'>Street: {props.street || ' empty'}</div>
      </div>
    </div>
  );
};

export default details;
