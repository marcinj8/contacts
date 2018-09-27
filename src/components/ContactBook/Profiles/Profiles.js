import React from 'react';
import Aux from 'react-aux';

import Profile from './Profile/Profile';

const profiles = props => {
  let profiles = [];

  props.contacts.map((profile, i) => {
    return profiles.push(
      <Profile
        key={profile.name + '/' + i}
        name={profile.name}
        mail={profile.mail}
        phone={profile.phone}
        city={profile.city}
        street={profile.street}
        details={profile.details}
        clicked={() => props.details(i)}/>
    );
  });
  return (
    <Aux>
      {profiles}
    </Aux>
  );
};

export default profiles;