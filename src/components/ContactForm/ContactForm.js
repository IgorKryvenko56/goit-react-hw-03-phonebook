import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  Button,
 } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    const isDuplicateName = contacts.some(contact => contact.name === name);

    if (isDuplicateName) {
      alert('This contact name already exists in the phone book!');
    } else {
      onSubmit({ name, number });
      this.setState({ name: '', number: '' });
    }
  };
  

  render() {
    const { name, number } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Phone number"
          required
        />
        <Button type="submit">
          Add Contact
        </Button>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;