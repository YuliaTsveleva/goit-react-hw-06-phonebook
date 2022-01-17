import types from './contacts-types';
import { nanoid } from 'nanoid';

const addContact = ({ id, name, number, email }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
    email,
  },
});

const deleteContact = id => ({
  type: types.REMOVE,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
