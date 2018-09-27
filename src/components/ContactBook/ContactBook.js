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
      toggleDetails={props.toggleDetails}
      edit={props.edit}/>
    </div>
  );
};

export default contactBook;
