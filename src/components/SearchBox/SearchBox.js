import React from 'react';
import TextField from '../TextField/TextField';
import styles from './SearchBox.css';

const SearchBox = ({ onEnter }) => (
  <div>
    <TextField className={styles.input}
               onEnter={onEnter}
               placeHolder='Search' />
  </div>
);

export default SearchBox;
