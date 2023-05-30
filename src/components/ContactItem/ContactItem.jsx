import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>
        {name}: {number}{' '}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
