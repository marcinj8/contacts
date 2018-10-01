import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import ContactBook from '../ContactBook/ContactBook';
import AddContact from '../ContactBook/AddContact/AddContact';

class Layout extends Component {
  render() {
    let addContact = null;
    if (this.props.navigation.addContact) {
      addContact = (
        <AddContact
          show={this.props.navigation.addContact}
          values={this.props.newContact}
          clicked={this.props.addContact} />
      );
    }

    let contactBook = null;
    if (this.props.navigation.contactBook) {
      contactBook = (
        <ContactBook
          show={this.props.navigation.contactBook}
          refreshContacts={this.props.refreshContacts}
          contacts={this.props.contacts}
          toggleDetails={this.props.toggleDetails}
          toggleEditor={this.props.toggleEditor}
          delete={this.props.delete} />
      );
    }

    return (
      <div>
        <Navigation
          navigation={this.props.navigation}
          navitateTo={this.props.navitateTo} />
        {addContact}
        {contactBook}
      </div>
    );
  }
}

export default Layout;
