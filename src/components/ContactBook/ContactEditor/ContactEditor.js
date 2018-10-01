import React, { Component } from 'react';
import axios from 'axios';
import Aux from 'react-aux';

import Inputs from '../UI/Inputs';

import './ContactEditor.css';

class ContactEditor extends Component {
  state = {
    editorFields: {
      name: {
        label: "Name",
        type: "text",
        placeholder: 'name'
      },
      mail: {
        label: "Mail",
        type: "mail",
        placeholder: 'mail'
      },
      phone: {
        label: "Phone",
        type: "tel",
        placeholder: 'phone'
      },
      city: {
        label: "City",
        type: "text",
        placeholder: 'city'
      },
      street: {
        label: "Street",
        type: "text",
        placeholder: 'street'
      },
    },
    contact: null,
    error: false
  };

  componentWillMount() {
    this.getContactFromDatabase();
  }

  setContact = response => {
    this.setState({
      contact: response,
      error: false
    });
  }

  getContactFromDatabase = () => {
    axios.get(`https://contactmenager.firebaseio.com/contacts/${this.props.id}.json`)
      .then(res => this.setContact(res.data))
      .catch(error => this.setState({ error: error.message }));
  }

  editContactHandler = () => {
    const updatedContact = {
      ...this.state.contact
    }
    axios.put(`https://contactmenager.firebaseio.com/contacts/${this.props.id}.json`, updatedContact)
      .then(() => {
        this.props.refreshContacts()
        this.props.toggleEditor()
      })
      .catch(error => this.setState({ error: error.message }));
  }

  changePropertyHandler = event => {
    const updatedContact = this.state.contact;
    const property = event.target.name;
    updatedContact[property] = event.target.value;
    this.setState({
      contact: updatedContact
    })
  }

  render() {
    let formEditor = <h4>Loading...</h4>;
    let mapEditorFirldsToArr = [];

    if (this.state.error) {
      formEditor = <h5>{this.state.error}</h5>
    } else if (this.state.contact) {
      for (let key in this.state.editorFields) {
        mapEditorFirldsToArr.push({
          key: key,
          name: key,
          value: this.state.contact[key],
          configuration: { ...this.state.editorFields[key] }
        })
      }
      formEditor = (
        mapEditorFirldsToArr.map(input => {
          return <Inputs
            key={input.key}
            name={input.key}
            label={input.configuration.label}
            type={input.configuration.type}
            value={input.value}
            placeholder={input.configuration.placeholder}
            changeProperty={this.changePropertyHandler} />
        })
      );
    }
    return (
      <Aux>
        <div className='contact__editor'>
          {formEditor}
        </div>
        <button onClick={this.editContactHandler}>Confirm</button>
        <button>Cancel</button>
      </Aux>
    );
  }
}

export default ContactEditor;