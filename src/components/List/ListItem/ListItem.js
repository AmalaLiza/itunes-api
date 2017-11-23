import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ListItem.css';

const ListItem = ({ children, onClick, className }) => (
  <li className={classNames(styles.list, className)}
      onClick={onClick}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ListItem;
