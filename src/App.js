import React, { Component } from 'react';
import axios from 'axios';

import Layout from './components/Layout/Layout';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    refreshContacts: false,
    navigation: {
      addContact: false,
      contactBook: true,
      about: false
    }
  };

  componentDidMount() {
    this.getContactsFromDatabase();
  }

  componentDidUpdate() {
    if (this.state.refreshContacts) {
      this.getContactsFromDatabase();
      this.setState({
        refreshContacts: false
      });
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
    });
  }

  addContactAxios = newContactData => {
    axios.post('https://contactmenager.firebaseio.com/contacts.json', newContactData)
      .then(() => this.getContactsFromDatabase())
      .catch(err => console.log(err));
  }

  addContactHandler = (newContact) => {
    this.addContactAxios(newContact);
    this.setActivHandler('contactBook');
  }

  deleteContact = contactId => {
    axios.delete(`https://contactmenager.firebaseio.com/contacts/${contactId}.json`)
      .then(() => this.getContactsFromDatabase())
      .catch(err => console.log(err));
  }

  showDetails = id => {
    const contacts = [...this.state.contacts];
    const contact = contacts[id];
    contact.details = !contact.details;
    contact.editor = false;
    this.setState({
      contacts: contacts
    });
  }
  // merge both functions
  showEditor = (id) => {
    const contacts = [...this.state.contacts];
    const contact = contacts[id];
    contact.details = false;
    contact.editor = !contact.editor;
    this.setState({
      contacts: contacts
    });
  }

  showEditor = id => {
    const contacts = [...this.state.contacts];
    const contact = contacts[id];
    contact.details = false;
    contact.editor = !contact.editor;
    this.setState({
      contacts: contacts
    });
  }

  setActivHandler = openView => {
    const navigation = [...this.state.navigation];
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
    this.setActivHandler(openView);
  }

  render() {
    return (
      <div className="App">
        <Layout
          navitateTo={this.navigationHandler}
          navigation={this.state.navigation}
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
