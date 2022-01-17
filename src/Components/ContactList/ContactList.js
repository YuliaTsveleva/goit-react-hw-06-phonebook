import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { connect } from 'react-redux';
import actions from '../../Redux/phonebook/contacts-actions';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contactsList}>
      {contacts &&
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            email={contact.email}
            onClick={() => onDeleteContact(contact.id)}
          />
        ))}
    </ul>
  );
}

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
