import React from 'react';

import Profile from './Profile/Profile';

const profiles = props => {
  let profiles = [];

  props.contacts.map(profile => {
    return profiles.push(
      <Profile
        key={profile.name + '/' + profile.lastName}
        name={profile.name}
        lastName={profile.lastName}
        mail={profile.mail}
        phone={profile.phone}
        city={profile.address.city}
        street={profile.address.street} />

    )
  })
  return (
    <div>
      {profiles}
    </div>
  )
}

export default profiles;