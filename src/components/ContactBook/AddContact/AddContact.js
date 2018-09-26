import React, { Component } from 'react';

import './AddContact.css';

class addContact extends Component {
  state = {
    newContact: {
      name: '',
      mail: '',
      phone: '',
      city: '',
      street: '',
    }
  }

  componentWillMount() {
    const form = this.state.newContact
    for (let key in form) {
      form[key] = '';
    }
  }

  changePropertyHandler = event => {
    const updateNewContact = this.state.newContact;
    const property = event.target.name;
    updateNewContact[property] = event.target.value;
    updateNewContact.display = false;
    this.setState({
      newContact: updateNewContact
    });
  }

  render() {
    let style = ['addContact__block']
    if (this.props.show) {
      style.push('active')
    } else {
      style.push('noActive')
    }
    return (
      <div className={style.join(' ')}>
        <h3 className='addContact__title'>Add new contact</h3>
        <input className='addContact__input' value={this.state.newContact.name} required onChange={this.changePropertyHandler} name='name' type="text" placeholder='name' />
        <input className='addContact__input' value={this.state.newContact.mail} onChange={this.changePropertyHandler} name='mail' type="mail" placeholder='mail' />
        <input className='addContact__input' value={this.state.newContact.phone} onChange={this.changePropertyHandler} name='phone' type="tel" placeholder='phone' />
        <input className='addContact__input' value={this.state.newContact.city} onChange={this.changePropertyHandler} name='city' type="text" placeholder='city' />
        <input className='addContact__input' value={this.state.newContact.street} onChange={this.changePropertyHandler} name='street' type="text" placeholder='street' />
        <button onClick={() => this.props.clicked(this.state.newContact)} className='addContact__button'>Add</button>
      </div>
    )
  }
}

export default addContact;