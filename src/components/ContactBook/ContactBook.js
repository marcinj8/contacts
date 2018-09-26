import React from 'react';

import Profiles from './Profiles/Profiles';

const contactBook = props => {
  return (
    <div>
      <Profiles contacts={props.contacts}/>
    </div>
  )
}

export default contactBook;
