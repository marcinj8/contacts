import React from 'react';

import Profiles from './Profiles/Profiles';
import ManageContactBar from '../../UI/ManageContactBar/ManageContactBar';

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
      <ManageContactBar />
      <Profiles
        contacts={props.contacts}
        refreshContacts={props.refreshContacts}
        toggleDetails={props.toggleDetails}
        toggleEditor={props.toggleEditor}
        edit={props.edit}
        toggleModal={props.toggleModal} />
    </div>
  );
};

export default contactBook;
