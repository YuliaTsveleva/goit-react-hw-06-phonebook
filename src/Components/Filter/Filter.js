import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../Redux/phonebook/contacts-actions';

const Filter = ({ value, onChange, total }) => {
  return (
    <label className={s.Label}>
      Find contact by name in {total} contacts
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  value: filter,
  total: contacts.length,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  contacts: PropTypes.string,
  onChange: PropTypes.func,
  total: PropTypes.number,
};
