import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import ContactBook from '../ContactBook/ContactBook';
import AddContact from '../ContactBook/AddContact/AddContact';

class Layout extends Component {
  state = {
    // contacts: [],
    // refreshContacts: false,
    navigation: {
      addContact: false,
      contactBook: true,
      about: false
    }
  };

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
    if (this.props.refreshContacts) {
      console.log('refreshed')
    }
    let addContact = null;
    if (this.state.navigation.addContact) {
      addContact = (
        <AddContact
          show={this.state.navigation.addContact}
          values={this.state.newContact}
          clicked={this.addContact} />
      );
    }

    let contactBook = null;
    if (this.state.navigation.contactBook) {
      contactBook = (
        <ContactBook
          show={this.state.navigation.contactBook}
          refreshContacts={this.props.refreshContacts}
          contacts={this.props.contacts}
          toggleDetails={this.props.toggleDetails}
          toggleEditor={this.props.toggleEditor}
          delete={this.props.deleteContact} />
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
