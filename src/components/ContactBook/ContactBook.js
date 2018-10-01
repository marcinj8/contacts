import React from 'react';

import Profiles from './Profiles/Profiles';

import './ContactBook.css';

const contactBook = props => {
  let style = ['contactBook'];
  if (props.show) {
    style.push('contactBook__active');
  } else {
    style.push('contactBook__noActive');
  }

  return (
    <div className={style.join(' ')}>
      <Profiles
        contacts={props.contacts}
        refreshContacts={props.refreshContacts}
        toggleDetails={props.toggleDetails}
        toggleEditor={props.toggleEditor}
        edit={props.edit}
        delete={props.delete} />
    </div>
  );
};

export default contactBook;
