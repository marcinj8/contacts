import React, { Component } from 'react';

import ContactBook from '../ContactBook/ContactBook';

class Layout extends Component {
state = {
  contacts: [{
    name: 'Marcin',
    lastName: 'Nazwisko',
    mail: 'mj@mail.com',
    phone: 545544964,
    address: {
      city: 'Wroclaw',
      street: 'grabiszynska',
    }
  }]
}

  render() {
    return (
      <div>
        Navigation
        <ContactBook contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default Layout;
