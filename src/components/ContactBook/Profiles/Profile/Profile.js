import React from 'react';

import Details from './Details/Details';
import Editor from '../../ContactEditor/ContactEditor';

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

  let editor = null;
  if (props.editor) {
    editor = <Editor
      refreshContacts={props.refreshContacts}
      id={props.id}
      toggleEditor={props.toggleEditor} />
  }

  return (
    <div className='profileCard'>
      <div className='profileCard__flex'>
        <div>{props.name}</div>
        <button className='profileCard__button' onClick={() => props.toggleDetails('details')}>Details</button>
        <button className='profileCard__button' onClick={()  => props.toggleEditor('editor')}>
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
      {editor}
    </div>
  )
}

export default profile;