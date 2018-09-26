import React, { Component } from 'react';

import ContactBook from '../ContactBook/ContactBook';

class Layout extends Component {
  state = {
    contacts: [{
      name: 'Marcin',
      mail: 'mj@mail.com',
      phone: 545544964,
      address: {
        city: 'Wroclaw',
        street: 'grabiszynska',
      },
      details: false
    },
    {
      name: 'Tom Doe',
      mail: 'mj@mail.com',
      phone: 545544964,
      address: {
        city: 'Wroclaw',
        street: 'grabiszynska',
      },
      details: false
    },
    {
      name: 'Anita Banita',
      mail: 'mj@mail.com',
      phone: 545544964,
      address: {
        city: 'Wroclaw',
        street: 'grabiszynska',
      },
      details: false
    },
    {
      name: 'Harry Pieseł',
      mail: 'mj@mail.com',
      phone: 545544964,
      address: {
        city: 'Wroclaw',
        street: 'grabiszynska',
      },
      details: false
    }]
  };

  showDetails = (id) => {
    const contacts = this.state.contacts;
    const contact = contacts[id];
    contact.details = !contact.details

    this.setState({
      contacts: contacts
    })
  }

  render() {
    return (
      <div>
        Navigation
        <ContactBook
          contacts={this.state.contacts}
          details={this.showDetails} />
      </div>
    );
  }
}

export default Layout;
