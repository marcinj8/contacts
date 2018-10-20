import React from 'react';
import Aux from 'react-aux';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import Profile from './Profile/Profile';

import './Profiles.css';

const profiles = props => {

  let profiles = props.contacts.map((profile, i) => {
    return (
      <CSSTransition
        classNames='animate'
        key={profile.key}
        timeout={300}>
        <Profile
          id={profile.key}
          name={profile.name}
          mail={profile.mail}
          phone={profile.phone}
          city={profile.city}
          street={profile.street}
          details={profile.details}
          editor={profile.editor}
          refreshContacts={props.refreshContacts}
          toggleDetails={() => props.toggleDetails(i)}
          toggleEditor={() => props.toggleEditor(i)}
          edit={() => props.edit(profile.key)}
          toggleModal={() => props.toggleModal(profile.key, profile.name)} />
      </CSSTransition>
    );
  });
  return (
    <Aux>
      <TransitionGroup>
        {profiles}
      </TransitionGroup>
    </Aux>
  );
};

export default profiles;