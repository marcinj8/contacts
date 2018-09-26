import React, { Component } from 'react';

import ContactBook from '../ContactBook/ContactBook';
import AddContact from '../ContactBook/AddContact/AddContact';

class Layout extends Component {
  state = {
    contacts: [{
      name: 'Marcin',
      mail: 'mj@mail.com',
      phone: 545544964,
      address: {
        city: 'Wroclaw',
        street: 'Wrabiszynska',
      },
      details: false
    },
    {
      name: 'Tom Doe',
      mail: 'td@mail.com',
      phone: 34538644,
      address: {
        city: 'Wroclaw',
        street: 'Pereca',
      },
      details: false
    },
    {
      name: 'Anita Banita',
      mail: 'mabj@mail.com',
      phone: 546546453,
      address: {
        city: 'Warszawa',
        street: 'Dzietrznicka',
      },
      details: false
    },
    {
      name: 'Harry Pieseł',
      mail: 'hp@mail.com',
      phone: 8468413345,
      address: {
        city: 'Zakopane',
        street: 'Gorska',
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
        <AddContact />
        <ContactBook
          contacts={this.state.contacts}
          details={this.showDetails} />
      </div>
    );
  }
}

export default Layout;
