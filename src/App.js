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
    },
    reversedContacts: false,
    contactsCopy: [],
    isCopiedContacts: false,
    searchBarValue: ''
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
      contacts: contacts,
      contactsCopy: [],
      isCopiedContacts: false,
      searchBarValue: ''
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
      contacts: contacts,
      contactsCopy: [],
      isCopiedContacts: false
    });
  }
  // merge both functions
  showEditor = (id) => {
    const contacts = [...this.state.contacts];
    const contact = contacts[id];
    contact.details = false;
    contact.editor = !contact.editor;
    this.setState({
      contacts: contacts,
      contactsCopy: [],
      isCopiedContacts: false
    });
  }

  showEditor = id => {
    const contacts = [...this.state.contacts];
    const contact = contacts[id];
    contact.details = false;
    contact.editor = !contact.editor;
    this.setState({
      contacts: contacts,
    });
  }

  setActivHandler = openView => {
    const navigation = [...this.state.navigation];
    for (let key in navigation) {
      navigation[key] = false;
    };
    navigation[openView] = true;
    this.setState({
      navigation: navigation,
      refreshContacts: true
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

  compare = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  sortContacts = contacts => {
    contacts.sort(this.compare);
    this.setState({
      contacts: contacts,
      reversedContacts: false
    });
  }

  reverseContacts = contacts => {
    contacts.reverse(this.compare);
    this.setState({
      contacts: contacts,
      reversedContacts: true
    });
  }

  sortContactsHandler = ifAlphabetically => {
    let contacts = [...this.state.contacts];
    if (ifAlphabetically) {
      this.sortContacts(contacts);
    } else if (!ifAlphabetically && !this.state.reversedContacts) {
      this.reverseContacts(contacts);
    }

  }

  updateContactsList = event => {
    const contacts = [...this.state.contactsCopy];
    const searching = event.target.value;
    const updatedContacts = contacts.filter(contact => {
      return Boolean(contact.name.includes(searching))
    });

    this.setState({
      contacts: updatedContacts
    });
  }

  updateInputValue = value => {
    const updatedInputValue = value;
    this.setState({
      searchBarValue: updatedInputValue
    });
  }

  searchContactsHandler = event => {
    if (!this.state.isCopiedContacts) {
      this.setState({
        contactsCopy: [...this.state.contacts],
        isCopiedContacts: true
      });
    }
    this.updateInputValue(event.target.value)
    this.updateContactsList(event);
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
          delete={this.deleteContact}
          sortContacts={this.sortContactsHandler}
          searchBarValue={this.state.searchBarValue}
          searchContacts={this.searchContactsHandler} />
      </div>
    );
  }
}

export default App;
