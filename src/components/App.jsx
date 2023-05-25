import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import initialContacts from './contacts.json';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  // Публічна властивість класу, метод для видалення контактів
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  // Метод для отримання даних з форми та додавання контактів
  addContact = data => {
    // console.log(data);

    const userId = nanoid();

    const newContact = {
      id: userId,
      ...data,
    };

    //   // Перевірка, чи існує вже контакт з таким іменем
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  // Метод для отримання значення яке вводимо в input
  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  // Метод для пошуку контакту по введеному значенню
  getSearchContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const searchContact = this.getSearchContact();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={searchContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
