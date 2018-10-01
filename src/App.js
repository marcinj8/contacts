import React, { Component } from 'react';
import axios from 'axios';

import Layout from './components/Layout/Layout';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    refreshContacts: false,
  }

  componentDidMount() {
    this.getContactsFromDatabase();
  }

  componentDidUpdate() {
    if (this.state.refreshContacts) {
      this.getContactsFromDatabase();
      this.setState({
        refreshContacts: false
      })
    }
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

  refreshContactsHandler = () => {
    this.setState({
      refreshContacts: true
    })
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
  // merge both finctions
  showEditor = id => {
    const contacts = this.state.contacts;
    const contact = contacts[id];
    contact.details = false;
    contact.editor = !contact.editor;
    this.setState({
      contacts: contacts
    });
  }

  render() {

    return (
      <div className="App">
        <Layout
          addContact={this.addContactHandler}
          contacts={this.state.contacts}
          refreshContacts={this.refreshContactsHandler}
          toggleDetails={this.showDetails}
          toggleEditor={this.showEditor}
          delete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
