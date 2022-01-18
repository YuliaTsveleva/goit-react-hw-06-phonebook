// import { useState, useEffect } from 'react';
import './App.css';
import Section from './Components/Section';
import AddContactForm from './Components/AddContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import EmptyText from './Components/EmptyText';
// import { nanoid } from 'nanoid';
// import { useLocalStorage } from './Hooks/UseLocalStorage';
import { connect } from 'react-redux';

function App({ contactsLength }) {
  // const addContact = ({ name, number, email }) => {
  //   const alreadyExist = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (!alreadyExist && name !== '' && number !== '') {
  //     setContacts(contacts => [
  //       { id: nanoid(), name, number, email },
  //       ...contacts,
  //     ]);
  //   } else if (alreadyExist) {
  //     alert(`${name} is already exists in contacts`);
  //   } else if (name === '' || number === '') {
  //     alert('Fill in all the fields please!');
  //   }
  //   setFilter('');
  // };

  return (
    <div className="App">
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        {contactsLength > 1 && <Filter />}

        <ContactList />

        {contactsLength === 0 && <EmptyText />}
      </Section>
    </div>
  );
}

const mapStateToProps = state => ({
  contactsLength: state.phonebook.contacts.length,
});

export default connect(mapStateToProps, null)(App);
