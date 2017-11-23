import React from 'react';
import TextField from '../TextField/TextField';
import styles from './SearchBox.css';

const SearchBox = ({ onEnter }) => (
  <div className={styles.searchWrapper}>
    <TextField className={styles.input}
               onEnter={onEnter}
               placeHolder='Search' />
  </div>
);

export default SearchBox;
