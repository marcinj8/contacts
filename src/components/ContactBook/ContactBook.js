import React from 'react';

import Profiles from './Profiles/Profiles';

import './ContactBook.css';

const contactBook = props => {
  let style = ['contactBook'];
  if(props.show) {
    style.push('contactBook__active');
  } else {
    style.push('contactBook__noActive');
  }

  return (
    <div className={style.join(' ')}>
      <Profiles 
      contacts={props.contacts}
      details={props.details}/>
    </div>
  );
};

export default contactBook;
