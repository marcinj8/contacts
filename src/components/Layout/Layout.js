import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import ContactBook from '../ContactBook/ContactBook';
import AddContact from '../ContactBook/AddContact/AddContact';
import Modal from '../../UI/Modal/Modal';

class Layout extends Component {
  state = {
    showModal: false,
    contactID: '',
    contackName: ''
  }

  toggleModalHandler = (id, name) => {
    this.setState({
      showModal: !this.state.showModal,
      contactID: id,
      contackName: name
    })
  }


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
          toggleModal={this.toggleModalHandler} 
          sortContacts={this.props.sortContacts}
          searchBarValue={this.props.searchBarValue}
          searchContacts={this.props.searchContacts}/>
      );
    }
    let modal = null;
    if (this.state.showModal) {
      modal = (
        <Modal
          delete={() => {
            this.props.delete(this.state.contactID);
            this.toggleModalHandler()
          }}
          toggleModal={this.toggleModalHandler}> You want to delete <b>{this.state.contackName}</b>. Please confirm! </Modal>
      )
    }

    return (
      <div>
        <Navigation
          navigation={this.props.navigation}
          navitateTo={this.props.navitateTo} />
        {addContact}
        {contactBook}
        {modal}
      </div>
    );
  }
}

export default Layout;
