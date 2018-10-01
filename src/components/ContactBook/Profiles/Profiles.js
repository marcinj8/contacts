import React from 'react';
import Aux from 'react-aux';

import Profile from './Profile/Profile';

const profiles = props => {
  let profiles = [];

  props.contacts.map((profile, i) => {
    return profiles.push(
      <Profile
        key={profile.key}
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
        delete={() => props.delete(profile.key)}/>
    );
  });
  return (
    <Aux>
      {profiles}
    </Aux>
  );
};

export default profiles;