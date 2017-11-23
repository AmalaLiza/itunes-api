import PropTypes from 'prop-types';
import React from 'react';
import styles from './Heading.css';

const Heading = ({ text }) => <h2 className={styles.heading}>{text}</h2>;

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
