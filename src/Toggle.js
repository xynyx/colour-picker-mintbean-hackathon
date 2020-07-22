import React from 'react';
import styles from './Toggle.css';

const Toggle = ({ checked, onChange }) => (
  <span className={styles.toggleControl}>
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
