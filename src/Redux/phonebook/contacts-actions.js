import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/Add',
  ({ name, number, email }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
      email,
    },
  }),
);

export const deleteContact = createAction('contacts/Remove');

export const changeFilter = createAction('contacts/ChangeFilter');

// const actions = { addContact, deleteContact, changeFilter };
// export default actions;
