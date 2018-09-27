import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
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
    navigation: {
      addContact: false,
      concactBook: true,
      about: false
    }
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

  setActiv = openView => {
    const navigation = this.state.navigation;
    for (let key in navigation) {
      navigation[key] = false;
    };
    navigation[openView] = true;
    this.setState({
      navigation: navigation
    })
  }

  navigationHandler = direction => {
    let openView = '';
    switch (direction) {
      case 'Add contact':
        openView = 'addContact';
        break
      case 'Contacts':
        openView = 'concactBook';
        break
      case 'About':
        openView = 'about';
        break
      default:
        openView = 'concactBook';
        break
    }
    this.setActiv(openView);
  }

  render() {
    return (
      <div>
        <Navigation
          navitateTo={this.navigationHandler} />
        <AddContact
          show={this.state.navigation.addContact}
          values={this.state.newContact}
          clicked={this.addContactHandler} />
        <ContactBook
          show={this.state.navigation.concactBook}
          contacts={this.state.contacts}
          details={this.showDetails} />
      </div>
    );
  }
}

export default Layout;
