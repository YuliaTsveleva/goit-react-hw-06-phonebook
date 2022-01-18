// import types from './contacts-types';
import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', ({ name, number, email }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
    email,
  },
}));

const deleteContact = createAction('contacts/Remove');

const changeFilter = createAction('contacts/ChangeFilter');

export default { addContact, deleteContact, changeFilter };
