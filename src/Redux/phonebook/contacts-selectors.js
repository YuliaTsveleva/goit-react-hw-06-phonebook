export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getFilteredContacts = state => {
  const {
    phonebook: { contacts, filter },
  } = state;
  const normFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter),
  );
};
