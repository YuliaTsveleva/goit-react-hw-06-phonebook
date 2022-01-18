import React from 'react';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../Redux/phonebook/contacts-selectors';
import * as actions from '../../Redux/phonebook/contacts-actions';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

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
