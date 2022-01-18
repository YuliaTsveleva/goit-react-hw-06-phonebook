import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/Add',
  ({ id, name, number, email }) => ({ payload: { id, name, number, email } }),
);

export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('contacts/ChangeFilter');
