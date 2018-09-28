import React, { Component } from 'react';
import axios from 'axios';

import Inputs from '../UI/Inputs';

class ContactEditor extends Component {
  state = {
    contact: null
  };

  componentWillMount() {
    this.getContactFromDatabase();
  }

  setContact = response => {
    this.setState({
      contact: response
    });
  }

  getContactFromDatabase = () => {
    axios.get(`https://contactmenager.firebaseio.com/contacts/${this.props.id}.json`)
      .then(res => this.setContact(res.data))
      .catch(err => console.log(err));
  }

  editContactHandler = () => {
    const updatedContact = {
      ...this.state.contact
    }

    axios.put(`https://contactmenager.firebaseio.com/contacts/${this.props.id}.json`, updatedContact)
      .then(() => this.props.toggleEditor())
      // .then(() => this.getContactFromDatabase())
      .catch(err => console.log(err));
  }

  changePropertyHandler = event => {
    const updatedContact = this.state.contact;
    const property = event.target.name;
    updatedContact[property] = event.target.value;
    this.setState({
      contact: updatedContact
    })
    console.log(this.state.contact)
  }

  render() {
    let formEditor = <h4>Loading...</h4>;

    if (this.state.contact) {
      formEditor = (
        <Inputs
          name={this.state.contact.name}
          mail={this.state.contact.mail}
          phone={this.state.contact.phone}
          city={this.state.contact.city}
          street={this.state.contact.street}
          changeProperty={this.changePropertyHandler} />
      );
    }
    return (
      <div>
        {formEditor}
        <button onClick={this.editContactHandler}>Confirm</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default ContactEditor;