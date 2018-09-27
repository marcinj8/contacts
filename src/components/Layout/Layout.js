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
      concactBook: true,
      about: false
    }
  };

  componentDidMount() {
    axios.get('https://contactmenager.firebaseio.com/contacts.json')
    .then(res => this.setContacts(res.data))
    .catch(err => console.log(err))
  }

  setContacts = response => {
    const contacts = [];
    for (let key in response) {
      contacts.push(response[key])
    }
    this.setState({
      contacts: contacts
    })
  }

  addContactAxios = newContactData => {
    axios.post('https://contactmenager.firebaseio.com/contacts.json', newContactData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  addContactHandler = (newContact) => {
    const updateContacts = this.state.contacts;
    this.addContactAxios(newContact)
    updateContacts.push(newContact);
    this.setState({
      contacts: updateContacts
    });
    this.setActiv('concactBook');
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
    let addContact = null;
    if (this.state.navigation.addContact) {
      addContact = <AddContact
        show={this.state.navigation.addContact}
        values={this.state.newContact}
        clicked={this.addContactHandler} />
    }

    return (
      <div>
        <Navigation
          navitateTo={this.navigationHandler} />
        {addContact}
        <ContactBook
          show={this.state.navigation.concactBook}
          contacts={this.state.contacts}
          toggleDetails={this.showDetails}
          edit={this.showEditor} />
      </div>
    );
  }
}

export default Layout;
