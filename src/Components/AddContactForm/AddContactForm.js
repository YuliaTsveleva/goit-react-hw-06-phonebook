import { useState } from 'react';
import s from './AddContactForm.module.css';
import CONFIG from '../../Data/inputConfig.json';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../Redux/phonebook/contacts-selectors';
import * as actions from '../../Redux/phonebook/contacts-actions';
import { nanoid } from 'nanoid';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const alreadyExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (alreadyExist) {
      alert(`${name} is already exists in contacts`);
    }
    if (!alreadyExist && name !== '' && number !== '') {
      dispatch(actions.addContact({ id: nanoid(), name, number, email }));
    }
    dispatch(actions.changeFilter(''));
    e.target.reset();
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <form className={s.Form} autoComplete="off" onSubmit={handleSubmit}>
      {CONFIG.map(field => (
        <div key={field.name}>
          <label className={s.Label}>
            {field.label}
            <input
              id={field.id}
              value={[field.name].value}
              onChange={handleChange}
              className={s.Input}
              type={field.type}
              name={field.name}
              pattern={field.pattern}
              title={field.title}
              required={field.required}
            />
          </label>
        </div>
      ))}
      <p className={s.Reminder}>Fields marked with * are required</p>
      <button className={s.Button} type="submit">
        <AiOutlineUserAdd className={s.Icon} size={16} />
        Add contact
      </button>
    </form>
  );
}
