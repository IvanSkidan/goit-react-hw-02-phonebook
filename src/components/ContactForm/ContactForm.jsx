import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // Генерація ідентифікаторів для name та id
  nameInputId = nanoid();
  numberInputId = nanoid();

  // Публічна властивіть класу для input
  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  // handleNameChange = event => {
  //   // console.log(event.target.value);

  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // handleNumberChange = evt => {
  //   this.setState({
  //     number: evt.target.value,
  //   });
  // };

  // Публічна властивіть класу для submit форми
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };

  // Метод для скидання форми
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            className={css.input}
          />
        </label>
        <label htmlFor={this.numberInputId} className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            className={css.input}
          />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
