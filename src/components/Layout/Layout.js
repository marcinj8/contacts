import React, { Component } from 'react';

import ContactBook from '../ContactBook/ContactBook';
import AddContact from '../ContactBook/AddContact/AddContact';

class Layout extends Component {
  state = {
    contacts: [{
      name: 'Marcin',
      mail: 'mj@mail.com',
      phone: 545544964,
      city: 'Wroclaw',
      street: 'Grabiszynska',
      details: false
    },
    {
      name: 'Tom Doe',
      mail: 'td@mail.com',
      phone: 34538644,
      city: 'Wroclaw',
      street: 'Pereca',
      details: false
    },
    {
      name: 'Anita Banita',
      mail: 'mabj@mail.com',
      phone: 546546453,
      city: 'Warszawa',
      street: 'Dzietrznicka',
      details: false
    },
    {
      name: 'Harry Pieseł',
      mail: 'hp@mail.com',
      phone: 8468413345,
      city: 'Zakopane',
      street: 'Gorska',
      details: false
    }],
    addContact: true,
    concactBook: true
  };

  addContactHandler = (newConact) => {
    const updateContacts = this.state.contacts;
    const newContact = newConact;
    updateContacts.push(newContact);
    this.setState({
      contacts: updateContacts
    });
  }

  showDetails = id => {
    const contacts = this.state.contacts;
    const contact = contacts[id];
    contact.details = !contact.details;
    this.setState({
      contacts: contacts
    });
  }

  render() {
    return (
      <div>
        Navigation
        <AddContact
          show={this.state.addContact}
          values={this.state.newContact}
          clicked={this.addContactHandler} />
        <ContactBook
          show={this.state.concactBook}
          contacts={this.state.contacts}
          details={this.showDetails} />
      </div>
    );
  }
}

export default Layout;
