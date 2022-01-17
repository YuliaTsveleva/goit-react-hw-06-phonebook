import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import contactsReducer from './phonebook/contacts-reducer';

const rootReducer = combineReducers({
  phonebook: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
