import React, { Component } from 'react';
import axios from 'axios';

import Navigation from '../Navigation/Navigation';
import ContactBook from '../ContactBook/ContactBook';
import AddContact from '../ContactBook/AddContact/AddContact';

class Layout extends Component {
  state = {
    contacts: [],
    navigation: {
      addContact: false,
      contactBook: true,
      about: false
    }
  };

  componentDidMount() {
    this.getContactsFromDatabase();
  }

  setContacts = response => {
    const contacts = [];
    for (let key in response) {
      contacts.push({
        ...response[key],
        key: key
      });
    }
    this.setState({
      contacts: contacts
    });
  }

  getContactsFromDatabase = () => {
    axios.get('https://contactmenager.firebaseio.com/contacts.json')
      .then(res => this.setContacts(res.data))
      .catch(err => console.log(err));
  }

  addContactAxios = newContactData => {
    axios.post('https://contactmenager.firebaseio.com/contacts.json', newContactData)
      .then(() => this.getContactsFromDatabase())
      .catch(err => console.log(err));
  }

  addContactHandler = (newContact) => {
    this.addContactAxios(newContact);
    this.setActiv('contactBook');
  }

  deleteContact = contactId => {
    axios.delete(`https://contactmenager.firebaseio.com/contacts/${contactId}.json`)
      .then(() => this.getContactsFromDatabase())
      .catch(err => console.log(err));
  }

  showDetails = id => {
    const contacts = this.state.contacts;
    const contact = contacts[id];
    contact.details = !contact.details;
    contact.editor = false;
    this.setState({
      contacts: contacts
    });
  }

  showEditor = id => {
    const contacts = this.state.contacts;
    const contact = contacts[id];
    contact.details = false;
    contact.editor = !contact.editor;
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
    });
  }

  navigationHandler = direction => {
    let openView = '';
    switch (direction) {
      case 'Add contact':
        openView = 'addContact';
        break;
      case 'Contacts':
        openView = 'contactBook';
        break;
      case 'About':
        openView = 'about';
        break;
      default:
        openView = 'concactBook';
        break;
    }
    this.setActiv(openView);
  }

  render() {
    console.log(this.state.contacts);
    let addContact = null;
    if (this.state.navigation.addContact) {
      addContact = (
        <AddContact
          show={this.state.navigation.addContact}
          values={this.state.newContact}
          clicked={this.addContactHandler} />
      );
    }

    let contactBook = null;
    if (this.state.navigation.contactBook) {
      contactBook = (
        <ContactBook
          show={this.state.navigation.contactBook}
          contacts={this.state.contacts}
          toggleDetails={this.showDetails}
          toggleEditor={this.showEditor}
          delete={this.deleteContact} />
      );
    }

    return (
      <div>
        <Navigation
          navitateTo={this.navigationHandler} />
        {addContact}
        {contactBook}
      </div>
    );
  }
}

export default Layout;
