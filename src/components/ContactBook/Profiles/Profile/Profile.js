import React from 'react';
import Transition from 'react-transition-group/Transition';

import Details from './Details/Details';
import Editor from '../../ContactEditor/ContactEditor';

import './Profile.css';

const profile = props => {
  const editButtonStyle = ['profileCard__editButton']
  if (props.editor) {
    editButtonStyle.push('profileCard__editButton--active')
  }

  const detailButtonStyle = ['profileCard__detailButton']
  if (props.details) {
    detailButtonStyle.push('profileCard__detailButton--active')
  }

  let details = (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.details}
      timeout={400}>
      {state => (
        <Details
          show={state}
          mail={props.mail}
          phone={props.phone}
          city={props.city}
          street={props.street} />)}
    </Transition>
  )

  let editor = null;
  if (props.editor) {
    editor = (
      <Editor
        show={props.editor}
        refreshContacts={props.refreshContacts}
        id={props.id}
        toggleEditor={props.toggleEditor} />
    )
  }

  return (
    <div className='profileCard'>
      <div className='profileCard__flex'>
        <div className='profileCard__name'>{props.name}</div>
        <button
          className={detailButtonStyle.join(' ')}
          onClick={() => props.toggleDetails('details')}>
          <i className="material-icons">
            arrow_drop_down
          </i>
        </button>
        <button
          className={editButtonStyle.join(' ')}
          onClick={() => props.toggleEditor('editor')}>
          <i className="material-icons">
            create
          </i>
        </button>
        <button
          className='profileCard__button--delete'
          onClick={props.toggleModal}>
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